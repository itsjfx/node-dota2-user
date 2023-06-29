/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CGCSystemMsgGetAccountDetailsResponse } from "./steammessages";
import { CMsgSteamLearnHMACKeys } from "./steammessages_steamlearn.steamworkssdk";

export enum ESourceEngine {
  k_ESE_Source1 = 0,
  k_ESE_Source2 = 1,
}

export function eSourceEngineFromJSON(object: any): ESourceEngine {
  switch (object) {
    case 0:
    case "k_ESE_Source1":
      return ESourceEngine.k_ESE_Source1;
    case 1:
    case "k_ESE_Source2":
      return ESourceEngine.k_ESE_Source2;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESourceEngine");
  }
}

export function eSourceEngineToJSON(object: ESourceEngine): string {
  switch (object) {
    case ESourceEngine.k_ESE_Source1:
      return "k_ESE_Source1";
    case ESourceEngine.k_ESE_Source2:
      return "k_ESE_Source2";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESourceEngine");
  }
}

export enum PartnerAccountType {
  PARTNER_NONE = 0,
  PARTNER_PERFECT_WORLD = 1,
  PARTNER_INVALID = 3,
}

export function partnerAccountTypeFromJSON(object: any): PartnerAccountType {
  switch (object) {
    case 0:
    case "PARTNER_NONE":
      return PartnerAccountType.PARTNER_NONE;
    case 1:
    case "PARTNER_PERFECT_WORLD":
      return PartnerAccountType.PARTNER_PERFECT_WORLD;
    case 3:
    case "PARTNER_INVALID":
      return PartnerAccountType.PARTNER_INVALID;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum PartnerAccountType");
  }
}

export function partnerAccountTypeToJSON(object: PartnerAccountType): string {
  switch (object) {
    case PartnerAccountType.PARTNER_NONE:
      return "PARTNER_NONE";
    case PartnerAccountType.PARTNER_PERFECT_WORLD:
      return "PARTNER_PERFECT_WORLD";
    case PartnerAccountType.PARTNER_INVALID:
      return "PARTNER_INVALID";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum PartnerAccountType");
  }
}

export enum GCConnectionStatus {
  GCConnectionStatus_HAVE_SESSION = 0,
  GCConnectionStatus_GC_GOING_DOWN = 1,
  GCConnectionStatus_NO_SESSION = 2,
  GCConnectionStatus_NO_SESSION_IN_LOGON_QUEUE = 3,
  GCConnectionStatus_NO_STEAM = 4,
  GCConnectionStatus_SUSPENDED = 5,
  GCConnectionStatus_STEAM_GOING_DOWN = 6,
}

export function gCConnectionStatusFromJSON(object: any): GCConnectionStatus {
  switch (object) {
    case 0:
    case "GCConnectionStatus_HAVE_SESSION":
      return GCConnectionStatus.GCConnectionStatus_HAVE_SESSION;
    case 1:
    case "GCConnectionStatus_GC_GOING_DOWN":
      return GCConnectionStatus.GCConnectionStatus_GC_GOING_DOWN;
    case 2:
    case "GCConnectionStatus_NO_SESSION":
      return GCConnectionStatus.GCConnectionStatus_NO_SESSION;
    case 3:
    case "GCConnectionStatus_NO_SESSION_IN_LOGON_QUEUE":
      return GCConnectionStatus.GCConnectionStatus_NO_SESSION_IN_LOGON_QUEUE;
    case 4:
    case "GCConnectionStatus_NO_STEAM":
      return GCConnectionStatus.GCConnectionStatus_NO_STEAM;
    case 5:
    case "GCConnectionStatus_SUSPENDED":
      return GCConnectionStatus.GCConnectionStatus_SUSPENDED;
    case 6:
    case "GCConnectionStatus_STEAM_GOING_DOWN":
      return GCConnectionStatus.GCConnectionStatus_STEAM_GOING_DOWN;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum GCConnectionStatus");
  }
}

export function gCConnectionStatusToJSON(object: GCConnectionStatus): string {
  switch (object) {
    case GCConnectionStatus.GCConnectionStatus_HAVE_SESSION:
      return "GCConnectionStatus_HAVE_SESSION";
    case GCConnectionStatus.GCConnectionStatus_GC_GOING_DOWN:
      return "GCConnectionStatus_GC_GOING_DOWN";
    case GCConnectionStatus.GCConnectionStatus_NO_SESSION:
      return "GCConnectionStatus_NO_SESSION";
    case GCConnectionStatus.GCConnectionStatus_NO_SESSION_IN_LOGON_QUEUE:
      return "GCConnectionStatus_NO_SESSION_IN_LOGON_QUEUE";
    case GCConnectionStatus.GCConnectionStatus_NO_STEAM:
      return "GCConnectionStatus_NO_STEAM";
    case GCConnectionStatus.GCConnectionStatus_SUSPENDED:
      return "GCConnectionStatus_SUSPENDED";
    case GCConnectionStatus.GCConnectionStatus_STEAM_GOING_DOWN:
      return "GCConnectionStatus_STEAM_GOING_DOWN";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum GCConnectionStatus");
  }
}

export interface CExtraMsgBlock {
  msgType: number;
  contents: Buffer;
  msgKey: string;
  isCompressed: boolean;
}

export interface CMsgSteamLearnServerInfo {
  enableDataSubmission: boolean;
  enableInferencing: boolean;
  hmacKeys: CMsgSteamLearnHMACKeys | undefined;
  enableTestInferencing: boolean;
}

export interface CMsgGCAssertJobData {
  messageType: string;
  messageData: Buffer;
}

export interface CMsgGCConCommand {
  command: string;
}

export interface CMsgSDOAssert {
  sdoType: number;
  requests: CMsgSDOAssert_Request[];
}

export interface CMsgSDOAssert_Request {
  key: string[];
  requestingJob: string;
}

export interface CMsgSOIDOwner {
  type: number;
  id: string;
}

export interface CMsgSOSingleObject {
  typeId: number;
  objectData: Buffer;
  version: string;
  ownerSoid: CMsgSOIDOwner | undefined;
  serviceId: number;
}

export interface CMsgSOMultipleObjects {
  objectsModified: CMsgSOMultipleObjects_SingleObject[];
  version: string;
  objectsAdded: CMsgSOMultipleObjects_SingleObject[];
  objectsRemoved: CMsgSOMultipleObjects_SingleObject[];
  ownerSoid: CMsgSOIDOwner | undefined;
  serviceId: number;
}

export interface CMsgSOMultipleObjects_SingleObject {
  typeId: number;
  objectData: Buffer;
}

export interface CMsgSOCacheSubscribed {
  objects: CMsgSOCacheSubscribed_SubscribedType[];
  version: string;
  ownerSoid: CMsgSOIDOwner | undefined;
  serviceId: number;
  serviceList: number[];
  syncVersion: string;
}

export interface CMsgSOCacheSubscribed_SubscribedType {
  typeId: number;
  objectData: Buffer[];
}

export interface CMsgSOCacheSubscribedUpToDate {
  version: string;
  ownerSoid: CMsgSOIDOwner | undefined;
  serviceId: number;
  serviceList: number[];
  syncVersion: string;
}

export interface CMsgSOCacheUnsubscribed {
  ownerSoid: CMsgSOIDOwner | undefined;
}

export interface CMsgSOCacheSubscriptionCheck {
  version: string;
  ownerSoid: CMsgSOIDOwner | undefined;
  serviceId: number;
  serviceList: number[];
  syncVersion: string;
}

export interface CMsgSOCacheSubscriptionRefresh {
  ownerSoid: CMsgSOIDOwner | undefined;
}

export interface CMsgSOCacheVersion {
  version: string;
}

export interface CMsgGCMultiplexMessage {
  msgtype: number;
  payload: Buffer;
  steamids: string[];
}

export interface CMsgGCToGCSubGCStarting {
  dirIndex: number;
}

export interface CGCToGCMsgMasterAck {
  dirIndex: number;
  machineName: string;
  processName: string;
  directory: CGCToGCMsgMasterAck_Process[];
}

export interface CGCToGCMsgMasterAck_Process {
  dirIndex: number;
  typeInstances: number[];
}

export interface CGCToGCMsgMasterAckResponse {
  eresult: number;
}

export interface CMsgGCToGCUniverseStartup {
  isInitialStartup: boolean;
}

export interface CMsgGCToGCUniverseStartupResponse {
  eresult: number;
}

export interface CGCToGCMsgMasterStartupComplete {
  gcInfo: CGCToGCMsgMasterStartupComplete_GCInfo[];
}

export interface CGCToGCMsgMasterStartupComplete_GCInfo {
  dirIndex: number;
  machineName: string;
}

export interface CGCToGCMsgRouted {
  msgType: number;
  senderId: string;
  netMessage: Buffer;
}

export interface CGCToGCMsgRoutedReply {
  msgType: number;
  netMessage: Buffer;
}

export interface CMsgGCUpdateSubGCSessionInfo {
  updates: CMsgGCUpdateSubGCSessionInfo_CMsgUpdate[];
}

export interface CMsgGCUpdateSubGCSessionInfo_CMsgUpdate {
  steamid: string;
  ip: number;
  trusted: boolean;
}

export interface CMsgGCRequestSubGCSessionInfo {
  steamid: string;
}

export interface CMsgGCRequestSubGCSessionInfoResponse {
  ip: number;
  trusted: boolean;
  port: number;
  success: boolean;
}

export interface CMsgSOCacheHaveVersion {
  soid: CMsgSOIDOwner | undefined;
  version: string;
  serviceId: number;
  cachedFileVersion: number;
}

export interface CMsgClientHello {
  version: number;
  socacheHaveVersions: CMsgSOCacheHaveVersion[];
  clientSessionNeed: number;
  clientLauncher: PartnerAccountType;
  secretKey: string;
  clientLanguage: number;
  engine: ESourceEngine;
  steamdatagramLogin: Buffer;
  platformId: number;
  gameMsg: Buffer;
  osType: number;
  renderSystem: number;
  renderSystemReq: number;
  screenWidth: number;
  screenHeight: number;
  screenRefresh: number;
  renderWidth: number;
  renderHeight: number;
  swapWidth: number;
  swapHeight: number;
  isSteamChina: boolean;
  isSteamChinaClient: boolean;
  platformName: string;
}

export interface CMsgClientWelcome {
  version: number;
  gameData: Buffer;
  outofdateSubscribedCaches: CMsgSOCacheSubscribed[];
  uptodateSubscribedCaches: CMsgSOCacheSubscriptionCheck[];
  location: CMsgClientWelcome_Location | undefined;
  saveGameKey: Buffer;
  gcSocacheFileVersion: number;
  txnCountryCode: string;
  gameData2: Buffer;
  rtime32GcWelcomeTimestamp: number;
  currency: number;
  balance: number;
  balanceUrl: string;
  hasAcceptedChinaSsa: boolean;
  isBannedSteamChina: boolean;
  additionalWelcomeMsgs: CExtraMsgBlock | undefined;
  steamLearnServerInfo: CMsgSteamLearnServerInfo | undefined;
}

export interface CMsgClientWelcome_Location {
  latitude: number;
  longitude: number;
  country: string;
}

export interface CMsgConnectionStatus {
  status: GCConnectionStatus;
  clientSessionNeed: number;
  queuePosition: number;
  queueSize: number;
  waitSeconds: number;
  estimatedWaitSecondsRemaining: number;
}

export interface CMsgGCToGCSOCacheSubscribe {
  subscriber: string;
  subscribeToId: string;
  syncVersion: string;
  haveVersions: CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions[];
  subscribeToType: number;
}

export interface CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions {
  serviceId: number;
  version: string;
}

export interface CMsgGCToGCSOCacheUnsubscribe {
  subscriber: string;
  unsubscribeFromId: string;
  unsubscribeFromType: number;
}

export interface CMsgGCClientPing {
}

export interface CMsgGCToGCForwardAccountDetails {
  steamid: string;
  accountDetails: CGCSystemMsgGetAccountDetailsResponse | undefined;
  ageSeconds: number;
}

export interface CMsgGCToGCLoadSessionSOCache {
  accountId: number;
  forwardAccountDetails: CMsgGCToGCForwardAccountDetails | undefined;
}

export interface CMsgGCToGCLoadSessionSOCacheResponse {
}

export interface CMsgGCToGCUpdateSessionStats {
  userSessions: number;
  serverSessions: number;
  inLogonSurge: boolean;
}

export interface CMsgGCToClientRequestDropped {
}

export interface CWorkshopPopulateItemDescriptionsRequest {
  appid: number;
  languages: CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock[];
}

export interface CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription {
  gameitemid: number;
  itemDescription: string;
}

export interface CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock {
  language: string;
  descriptions: CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription[];
}

export interface CWorkshopGetContributorsRequest {
  appid: number;
  gameitemid: number;
}

export interface CWorkshopGetContributorsResponse {
  contributors: string[];
}

export interface CWorkshopSetItemPaymentRulesRequest {
  appid: number;
  gameitemid: number;
  associatedWorkshopFiles: CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule[];
  partnerAccounts: CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule[];
  validateOnly: boolean;
  makeWorkshopFilesSubscribable: boolean;
  associatedWorkshopFileForDirectPayments: CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule | undefined;
}

export interface CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule {
  workshopFileId: string;
  revenuePercentage: number;
  ruleDescription: string;
  ruleType: number;
}

export interface CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule {
  workshopFileId: string;
  ruleDescription: string;
}

export interface CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule {
  accountId: number;
  revenuePercentage: number;
  ruleDescription: string;
}

export interface CWorkshopSetItemPaymentRulesResponse {
  validationErrors: string[];
}

export interface CCommunityClanAnnouncementInfo {
  gid: string;
  clanid: string;
  posterid: string;
  headline: string;
  posttime: number;
  updatetime: number;
  body: string;
  commentcount: number;
  tags: string[];
  language: number;
  hidden: boolean;
  forumTopicId: string;
}

export interface CCommunityGetClanAnnouncementsRequest {
  steamid: string;
  offset: number;
  count: number;
  maxchars: number;
  stripHtml: boolean;
  requiredTags: string[];
  requireNoTags: boolean;
  languagePreference: number[];
  hiddenOnly: boolean;
  onlyGid: boolean;
  rtimeOldestDate: number;
  includeHidden: boolean;
  includePartnerEvents: boolean;
}

export interface CCommunityGetClanAnnouncementsResponse {
  maxchars: number;
  stripHtml: boolean;
  announcements: CCommunityClanAnnouncementInfo[];
}

export interface CBroadcastPostGameDataFrameRequest {
  appid: number;
  steamid: string;
  broadcastId: string;
  frameData: Buffer;
}

export interface CMsgSerializedSOCache {
  fileVersion: number;
  caches: CMsgSerializedSOCache_Cache[];
  gcSocacheFileVersion: number;
}

export interface CMsgSerializedSOCache_TypeCache {
  type: number;
  objects: Buffer[];
  serviceId: number;
}

export interface CMsgSerializedSOCache_Cache {
  type: number;
  id: string;
  versions: CMsgSerializedSOCache_Cache_Version[];
  typeCaches: CMsgSerializedSOCache_TypeCache[];
}

export interface CMsgSerializedSOCache_Cache_Version {
  service: number;
  version: string;
}

export interface CMsgGCToClientPollConvarRequest {
  convarName: string;
  pollId: number;
}

export interface CMsgGCToClientPollConvarResponse {
  pollId: number;
  convarValue: string;
}

export interface CGCMsgCompressedMsgToClient {
  msgId: number;
  compressedMsg: Buffer;
}

export interface CMsgGCToGCMasterBroadcastMessage {
  usersPerSecond: number;
  sendToUsers: boolean;
  sendToServers: boolean;
  msgId: number;
  msgData: Buffer;
}

export interface CMsgGCToGCMasterSubscribeToCache {
  soidType: number;
  soidId: string;
  accountIds: number[];
  steamIds: string[];
}

export interface CMsgGCToGCMasterSubscribeToCacheResponse {
}

export interface CMsgGCToGCMasterSubscribeToCacheAsync {
  subscribeMsg: CMsgGCToGCMasterSubscribeToCache | undefined;
}

export interface CMsgGCToGCMasterUnsubscribeFromCache {
  soidType: number;
  soidId: string;
  accountIds: number[];
  steamIds: string[];
}

export interface CMsgGCToGCMasterDestroyCache {
  soidType: number;
  soidId: string;
}

function createBaseCExtraMsgBlock(): CExtraMsgBlock {
  return { msgType: 0, contents: Buffer.alloc(0), msgKey: "0", isCompressed: false };
}

export const CExtraMsgBlock = {
  encode(message: CExtraMsgBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgType !== 0) {
      writer.uint32(8).uint32(message.msgType);
    }
    if (message.contents.length !== 0) {
      writer.uint32(18).bytes(message.contents);
    }
    if (message.msgKey !== "0") {
      writer.uint32(24).uint64(message.msgKey);
    }
    if (message.isCompressed === true) {
      writer.uint32(32).bool(message.isCompressed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CExtraMsgBlock {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCExtraMsgBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.msgType = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.contents = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.msgKey = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.isCompressed = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CExtraMsgBlock {
    return {
      msgType: isSet(object.msgType) ? Number(object.msgType) : 0,
      contents: isSet(object.contents) ? Buffer.from(bytesFromBase64(object.contents)) : Buffer.alloc(0),
      msgKey: isSet(object.msgKey) ? String(object.msgKey) : "0",
      isCompressed: isSet(object.isCompressed) ? Boolean(object.isCompressed) : false,
    };
  },

  toJSON(message: CExtraMsgBlock): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = Math.round(message.msgType));
    message.contents !== undefined &&
      (obj.contents = base64FromBytes(message.contents !== undefined ? message.contents : Buffer.alloc(0)));
    message.msgKey !== undefined && (obj.msgKey = message.msgKey);
    message.isCompressed !== undefined && (obj.isCompressed = message.isCompressed);
    return obj;
  },
};

function createBaseCMsgSteamLearnServerInfo(): CMsgSteamLearnServerInfo {
  return { enableDataSubmission: false, enableInferencing: false, hmacKeys: undefined, enableTestInferencing: false };
}

export const CMsgSteamLearnServerInfo = {
  encode(message: CMsgSteamLearnServerInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableDataSubmission === true) {
      writer.uint32(8).bool(message.enableDataSubmission);
    }
    if (message.enableInferencing === true) {
      writer.uint32(16).bool(message.enableInferencing);
    }
    if (message.hmacKeys !== undefined) {
      CMsgSteamLearnHMACKeys.encode(message.hmacKeys, writer.uint32(26).fork()).ldelim();
    }
    if (message.enableTestInferencing === true) {
      writer.uint32(32).bool(message.enableTestInferencing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnServerInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnServerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.enableDataSubmission = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.enableInferencing = reader.bool();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.hmacKeys = CMsgSteamLearnHMACKeys.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.enableTestInferencing = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamLearnServerInfo {
    return {
      enableDataSubmission: isSet(object.enableDataSubmission) ? Boolean(object.enableDataSubmission) : false,
      enableInferencing: isSet(object.enableInferencing) ? Boolean(object.enableInferencing) : false,
      hmacKeys: isSet(object.hmacKeys) ? CMsgSteamLearnHMACKeys.fromJSON(object.hmacKeys) : undefined,
      enableTestInferencing: isSet(object.enableTestInferencing) ? Boolean(object.enableTestInferencing) : false,
    };
  },

  toJSON(message: CMsgSteamLearnServerInfo): unknown {
    const obj: any = {};
    message.enableDataSubmission !== undefined && (obj.enableDataSubmission = message.enableDataSubmission);
    message.enableInferencing !== undefined && (obj.enableInferencing = message.enableInferencing);
    message.hmacKeys !== undefined &&
      (obj.hmacKeys = message.hmacKeys ? CMsgSteamLearnHMACKeys.toJSON(message.hmacKeys) : undefined);
    message.enableTestInferencing !== undefined && (obj.enableTestInferencing = message.enableTestInferencing);
    return obj;
  },
};

function createBaseCMsgGCAssertJobData(): CMsgGCAssertJobData {
  return { messageType: "", messageData: Buffer.alloc(0) };
}

export const CMsgGCAssertJobData = {
  encode(message: CMsgGCAssertJobData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageType !== "") {
      writer.uint32(10).string(message.messageType);
    }
    if (message.messageData.length !== 0) {
      writer.uint32(18).bytes(message.messageData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCAssertJobData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCAssertJobData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.messageType = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.messageData = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCAssertJobData {
    return {
      messageType: isSet(object.messageType) ? String(object.messageType) : "",
      messageData: isSet(object.messageData) ? Buffer.from(bytesFromBase64(object.messageData)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgGCAssertJobData): unknown {
    const obj: any = {};
    message.messageType !== undefined && (obj.messageType = message.messageType);
    message.messageData !== undefined &&
      (obj.messageData = base64FromBytes(message.messageData !== undefined ? message.messageData : Buffer.alloc(0)));
    return obj;
  },
};

function createBaseCMsgGCConCommand(): CMsgGCConCommand {
  return { command: "" };
}

export const CMsgGCConCommand = {
  encode(message: CMsgGCConCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.command !== "") {
      writer.uint32(10).string(message.command);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCConCommand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCConCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.command = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCConCommand {
    return { command: isSet(object.command) ? String(object.command) : "" };
  },

  toJSON(message: CMsgGCConCommand): unknown {
    const obj: any = {};
    message.command !== undefined && (obj.command = message.command);
    return obj;
  },
};

function createBaseCMsgSDOAssert(): CMsgSDOAssert {
  return { sdoType: 0, requests: [] };
}

export const CMsgSDOAssert = {
  encode(message: CMsgSDOAssert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sdoType !== 0) {
      writer.uint32(8).int32(message.sdoType);
    }
    for (const v of message.requests) {
      CMsgSDOAssert_Request.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSDOAssert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSDOAssert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sdoType = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.requests.push(CMsgSDOAssert_Request.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSDOAssert {
    return {
      sdoType: isSet(object.sdoType) ? Number(object.sdoType) : 0,
      requests: Array.isArray(object?.requests)
        ? object.requests.map((e: any) => CMsgSDOAssert_Request.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSDOAssert): unknown {
    const obj: any = {};
    message.sdoType !== undefined && (obj.sdoType = Math.round(message.sdoType));
    if (message.requests) {
      obj.requests = message.requests.map((e) => e ? CMsgSDOAssert_Request.toJSON(e) : undefined);
    } else {
      obj.requests = [];
    }
    return obj;
  },
};

function createBaseCMsgSDOAssert_Request(): CMsgSDOAssert_Request {
  return { key: [], requestingJob: "" };
}

export const CMsgSDOAssert_Request = {
  encode(message: CMsgSDOAssert_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.key) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.requestingJob !== "") {
      writer.uint32(18).string(message.requestingJob);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSDOAssert_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSDOAssert_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.key.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.key.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 2:
          if (tag != 18) {
            break;
          }

          message.requestingJob = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSDOAssert_Request {
    return {
      key: Array.isArray(object?.key) ? object.key.map((e: any) => String(e)) : [],
      requestingJob: isSet(object.requestingJob) ? String(object.requestingJob) : "",
    };
  },

  toJSON(message: CMsgSDOAssert_Request): unknown {
    const obj: any = {};
    if (message.key) {
      obj.key = message.key.map((e) => e);
    } else {
      obj.key = [];
    }
    message.requestingJob !== undefined && (obj.requestingJob = message.requestingJob);
    return obj;
  },
};

function createBaseCMsgSOIDOwner(): CMsgSOIDOwner {
  return { type: 0, id: "0" };
}

export const CMsgSOIDOwner = {
  encode(message: CMsgSOIDOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).uint32(message.type);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSOIDOwner {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSOIDOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.type = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.id = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSOIDOwner {
    return { type: isSet(object.type) ? Number(object.type) : 0, id: isSet(object.id) ? String(object.id) : "0" };
  },

  toJSON(message: CMsgSOIDOwner): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

function createBaseCMsgSOSingleObject(): CMsgSOSingleObject {
  return { typeId: 0, objectData: Buffer.alloc(0), version: "0", ownerSoid: undefined, serviceId: 0 };
}

export const CMsgSOSingleObject = {
  encode(message: CMsgSOSingleObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeId !== 0) {
      writer.uint32(16).int32(message.typeId);
    }
    if (message.objectData.length !== 0) {
      writer.uint32(26).bytes(message.objectData);
    }
    if (message.version !== "0") {
      writer.uint32(33).fixed64(message.version);
    }
    if (message.ownerSoid !== undefined) {
      CMsgSOIDOwner.encode(message.ownerSoid, writer.uint32(42).fork()).ldelim();
    }
    if (message.serviceId !== 0) {
      writer.uint32(48).uint32(message.serviceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSOSingleObject {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSOSingleObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 16) {
            break;
          }

          message.typeId = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.objectData = reader.bytes() as Buffer;
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.version = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.ownerSoid = CMsgSOIDOwner.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.serviceId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSOSingleObject {
    return {
      typeId: isSet(object.typeId) ? Number(object.typeId) : 0,
      objectData: isSet(object.objectData) ? Buffer.from(bytesFromBase64(object.objectData)) : Buffer.alloc(0),
      version: isSet(object.version) ? String(object.version) : "0",
      ownerSoid: isSet(object.ownerSoid) ? CMsgSOIDOwner.fromJSON(object.ownerSoid) : undefined,
      serviceId: isSet(object.serviceId) ? Number(object.serviceId) : 0,
    };
  },

  toJSON(message: CMsgSOSingleObject): unknown {
    const obj: any = {};
    message.typeId !== undefined && (obj.typeId = Math.round(message.typeId));
    message.objectData !== undefined &&
      (obj.objectData = base64FromBytes(message.objectData !== undefined ? message.objectData : Buffer.alloc(0)));
    message.version !== undefined && (obj.version = message.version);
    message.ownerSoid !== undefined &&
      (obj.ownerSoid = message.ownerSoid ? CMsgSOIDOwner.toJSON(message.ownerSoid) : undefined);
    message.serviceId !== undefined && (obj.serviceId = Math.round(message.serviceId));
    return obj;
  },
};

function createBaseCMsgSOMultipleObjects(): CMsgSOMultipleObjects {
  return {
    objectsModified: [],
    version: "0",
    objectsAdded: [],
    objectsRemoved: [],
    ownerSoid: undefined,
    serviceId: 0,
  };
}

export const CMsgSOMultipleObjects = {
  encode(message: CMsgSOMultipleObjects, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.objectsModified) {
      CMsgSOMultipleObjects_SingleObject.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.version !== "0") {
      writer.uint32(25).fixed64(message.version);
    }
    for (const v of message.objectsAdded) {
      CMsgSOMultipleObjects_SingleObject.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.objectsRemoved) {
      CMsgSOMultipleObjects_SingleObject.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.ownerSoid !== undefined) {
      CMsgSOIDOwner.encode(message.ownerSoid, writer.uint32(50).fork()).ldelim();
    }
    if (message.serviceId !== 0) {
      writer.uint32(56).uint32(message.serviceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSOMultipleObjects {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSOMultipleObjects();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.objectsModified.push(CMsgSOMultipleObjects_SingleObject.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.version = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.objectsAdded.push(CMsgSOMultipleObjects_SingleObject.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.objectsRemoved.push(CMsgSOMultipleObjects_SingleObject.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.ownerSoid = CMsgSOIDOwner.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.serviceId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSOMultipleObjects {
    return {
      objectsModified: Array.isArray(object?.objectsModified)
        ? object.objectsModified.map((e: any) => CMsgSOMultipleObjects_SingleObject.fromJSON(e))
        : [],
      version: isSet(object.version) ? String(object.version) : "0",
      objectsAdded: Array.isArray(object?.objectsAdded)
        ? object.objectsAdded.map((e: any) => CMsgSOMultipleObjects_SingleObject.fromJSON(e))
        : [],
      objectsRemoved: Array.isArray(object?.objectsRemoved)
        ? object.objectsRemoved.map((e: any) => CMsgSOMultipleObjects_SingleObject.fromJSON(e))
        : [],
      ownerSoid: isSet(object.ownerSoid) ? CMsgSOIDOwner.fromJSON(object.ownerSoid) : undefined,
      serviceId: isSet(object.serviceId) ? Number(object.serviceId) : 0,
    };
  },

  toJSON(message: CMsgSOMultipleObjects): unknown {
    const obj: any = {};
    if (message.objectsModified) {
      obj.objectsModified = message.objectsModified.map((e) =>
        e ? CMsgSOMultipleObjects_SingleObject.toJSON(e) : undefined
      );
    } else {
      obj.objectsModified = [];
    }
    message.version !== undefined && (obj.version = message.version);
    if (message.objectsAdded) {
      obj.objectsAdded = message.objectsAdded.map((e) => e ? CMsgSOMultipleObjects_SingleObject.toJSON(e) : undefined);
    } else {
      obj.objectsAdded = [];
    }
    if (message.objectsRemoved) {
      obj.objectsRemoved = message.objectsRemoved.map((e) =>
        e ? CMsgSOMultipleObjects_SingleObject.toJSON(e) : undefined
      );
    } else {
      obj.objectsRemoved = [];
    }
    message.ownerSoid !== undefined &&
      (obj.ownerSoid = message.ownerSoid ? CMsgSOIDOwner.toJSON(message.ownerSoid) : undefined);
    message.serviceId !== undefined && (obj.serviceId = Math.round(message.serviceId));
    return obj;
  },
};

function createBaseCMsgSOMultipleObjects_SingleObject(): CMsgSOMultipleObjects_SingleObject {
  return { typeId: 0, objectData: Buffer.alloc(0) };
}

export const CMsgSOMultipleObjects_SingleObject = {
  encode(message: CMsgSOMultipleObjects_SingleObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeId !== 0) {
      writer.uint32(8).int32(message.typeId);
    }
    if (message.objectData.length !== 0) {
      writer.uint32(18).bytes(message.objectData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSOMultipleObjects_SingleObject {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSOMultipleObjects_SingleObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.typeId = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.objectData = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSOMultipleObjects_SingleObject {
    return {
      typeId: isSet(object.typeId) ? Number(object.typeId) : 0,
      objectData: isSet(object.objectData) ? Buffer.from(bytesFromBase64(object.objectData)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgSOMultipleObjects_SingleObject): unknown {
    const obj: any = {};
    message.typeId !== undefined && (obj.typeId = Math.round(message.typeId));
    message.objectData !== undefined &&
      (obj.objectData = base64FromBytes(message.objectData !== undefined ? message.objectData : Buffer.alloc(0)));
    return obj;
  },
};

function createBaseCMsgSOCacheSubscribed(): CMsgSOCacheSubscribed {
  return { objects: [], version: "0", ownerSoid: undefined, serviceId: 0, serviceList: [], syncVersion: "0" };
}

export const CMsgSOCacheSubscribed = {
  encode(message: CMsgSOCacheSubscribed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.objects) {
      CMsgSOCacheSubscribed_SubscribedType.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.version !== "0") {
      writer.uint32(25).fixed64(message.version);
    }
    if (message.ownerSoid !== undefined) {
      CMsgSOIDOwner.encode(message.ownerSoid, writer.uint32(34).fork()).ldelim();
    }
    if (message.serviceId !== 0) {
      writer.uint32(40).uint32(message.serviceId);
    }
    writer.uint32(50).fork();
    for (const v of message.serviceList) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.syncVersion !== "0") {
      writer.uint32(57).fixed64(message.syncVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSOCacheSubscribed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSOCacheSubscribed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.objects.push(CMsgSOCacheSubscribed_SubscribedType.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.version = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.ownerSoid = CMsgSOIDOwner.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.serviceId = reader.uint32();
          continue;
        case 6:
          if (tag == 48) {
            message.serviceList.push(reader.uint32());
            continue;
          }

          if (tag == 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.serviceList.push(reader.uint32());
            }

            continue;
          }

          break;
        case 7:
          if (tag != 57) {
            break;
          }

          message.syncVersion = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSOCacheSubscribed {
    return {
      objects: Array.isArray(object?.objects)
        ? object.objects.map((e: any) => CMsgSOCacheSubscribed_SubscribedType.fromJSON(e))
        : [],
      version: isSet(object.version) ? String(object.version) : "0",
      ownerSoid: isSet(object.ownerSoid) ? CMsgSOIDOwner.fromJSON(object.ownerSoid) : undefined,
      serviceId: isSet(object.serviceId) ? Number(object.serviceId) : 0,
      serviceList: Array.isArray(object?.serviceList) ? object.serviceList.map((e: any) => Number(e)) : [],
      syncVersion: isSet(object.syncVersion) ? String(object.syncVersion) : "0",
    };
  },

  toJSON(message: CMsgSOCacheSubscribed): unknown {
    const obj: any = {};
    if (message.objects) {
      obj.objects = message.objects.map((e) => e ? CMsgSOCacheSubscribed_SubscribedType.toJSON(e) : undefined);
    } else {
      obj.objects = [];
    }
    message.version !== undefined && (obj.version = message.version);
    message.ownerSoid !== undefined &&
      (obj.ownerSoid = message.ownerSoid ? CMsgSOIDOwner.toJSON(message.ownerSoid) : undefined);
    message.serviceId !== undefined && (obj.serviceId = Math.round(message.serviceId));
    if (message.serviceList) {
      obj.serviceList = message.serviceList.map((e) => Math.round(e));
    } else {
      obj.serviceList = [];
    }
    message.syncVersion !== undefined && (obj.syncVersion = message.syncVersion);
    return obj;
  },
};

function createBaseCMsgSOCacheSubscribed_SubscribedType(): CMsgSOCacheSubscribed_SubscribedType {
  return { typeId: 0, objectData: [] };
}

export const CMsgSOCacheSubscribed_SubscribedType = {
  encode(message: CMsgSOCacheSubscribed_SubscribedType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeId !== 0) {
      writer.uint32(8).int32(message.typeId);
    }
    for (const v of message.objectData) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSOCacheSubscribed_SubscribedType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSOCacheSubscribed_SubscribedType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.typeId = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.objectData.push(reader.bytes() as Buffer);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSOCacheSubscribed_SubscribedType {
    return {
      typeId: isSet(object.typeId) ? Number(object.typeId) : 0,
      objectData: Array.isArray(object?.objectData)
        ? object.objectData.map((e: any) => Buffer.from(bytesFromBase64(e)))
        : [],
    };
  },

  toJSON(message: CMsgSOCacheSubscribed_SubscribedType): unknown {
    const obj: any = {};
    message.typeId !== undefined && (obj.typeId = Math.round(message.typeId));
    if (message.objectData) {
      obj.objectData = message.objectData.map((e) => base64FromBytes(e !== undefined ? e : Buffer.alloc(0)));
    } else {
      obj.objectData = [];
    }
    return obj;
  },
};

function createBaseCMsgSOCacheSubscribedUpToDate(): CMsgSOCacheSubscribedUpToDate {
  return { version: "0", ownerSoid: undefined, serviceId: 0, serviceList: [], syncVersion: "0" };
}

export const CMsgSOCacheSubscribedUpToDate = {
  encode(message: CMsgSOCacheSubscribedUpToDate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "0") {
      writer.uint32(9).fixed64(message.version);
    }
    if (message.ownerSoid !== undefined) {
      CMsgSOIDOwner.encode(message.ownerSoid, writer.uint32(18).fork()).ldelim();
    }
    if (message.serviceId !== 0) {
      writer.uint32(24).uint32(message.serviceId);
    }
    writer.uint32(34).fork();
    for (const v of message.serviceList) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.syncVersion !== "0") {
      writer.uint32(41).fixed64(message.syncVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSOCacheSubscribedUpToDate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSOCacheSubscribedUpToDate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.version = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.ownerSoid = CMsgSOIDOwner.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.serviceId = reader.uint32();
          continue;
        case 4:
          if (tag == 32) {
            message.serviceList.push(reader.uint32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.serviceList.push(reader.uint32());
            }

            continue;
          }

          break;
        case 5:
          if (tag != 41) {
            break;
          }

          message.syncVersion = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSOCacheSubscribedUpToDate {
    return {
      version: isSet(object.version) ? String(object.version) : "0",
      ownerSoid: isSet(object.ownerSoid) ? CMsgSOIDOwner.fromJSON(object.ownerSoid) : undefined,
      serviceId: isSet(object.serviceId) ? Number(object.serviceId) : 0,
      serviceList: Array.isArray(object?.serviceList) ? object.serviceList.map((e: any) => Number(e)) : [],
      syncVersion: isSet(object.syncVersion) ? String(object.syncVersion) : "0",
    };
  },

  toJSON(message: CMsgSOCacheSubscribedUpToDate): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.ownerSoid !== undefined &&
      (obj.ownerSoid = message.ownerSoid ? CMsgSOIDOwner.toJSON(message.ownerSoid) : undefined);
    message.serviceId !== undefined && (obj.serviceId = Math.round(message.serviceId));
    if (message.serviceList) {
      obj.serviceList = message.serviceList.map((e) => Math.round(e));
    } else {
      obj.serviceList = [];
    }
    message.syncVersion !== undefined && (obj.syncVersion = message.syncVersion);
    return obj;
  },
};

function createBaseCMsgSOCacheUnsubscribed(): CMsgSOCacheUnsubscribed {
  return { ownerSoid: undefined };
}

export const CMsgSOCacheUnsubscribed = {
  encode(message: CMsgSOCacheUnsubscribed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerSoid !== undefined) {
      CMsgSOIDOwner.encode(message.ownerSoid, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSOCacheUnsubscribed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSOCacheUnsubscribed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.ownerSoid = CMsgSOIDOwner.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSOCacheUnsubscribed {
    return { ownerSoid: isSet(object.ownerSoid) ? CMsgSOIDOwner.fromJSON(object.ownerSoid) : undefined };
  },

  toJSON(message: CMsgSOCacheUnsubscribed): unknown {
    const obj: any = {};
    message.ownerSoid !== undefined &&
      (obj.ownerSoid = message.ownerSoid ? CMsgSOIDOwner.toJSON(message.ownerSoid) : undefined);
    return obj;
  },
};

function createBaseCMsgSOCacheSubscriptionCheck(): CMsgSOCacheSubscriptionCheck {
  return { version: "0", ownerSoid: undefined, serviceId: 0, serviceList: [], syncVersion: "0" };
}

export const CMsgSOCacheSubscriptionCheck = {
  encode(message: CMsgSOCacheSubscriptionCheck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "0") {
      writer.uint32(17).fixed64(message.version);
    }
    if (message.ownerSoid !== undefined) {
      CMsgSOIDOwner.encode(message.ownerSoid, writer.uint32(26).fork()).ldelim();
    }
    if (message.serviceId !== 0) {
      writer.uint32(32).uint32(message.serviceId);
    }
    writer.uint32(42).fork();
    for (const v of message.serviceList) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.syncVersion !== "0") {
      writer.uint32(49).fixed64(message.syncVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSOCacheSubscriptionCheck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSOCacheSubscriptionCheck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 17) {
            break;
          }

          message.version = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.ownerSoid = CMsgSOIDOwner.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.serviceId = reader.uint32();
          continue;
        case 5:
          if (tag == 40) {
            message.serviceList.push(reader.uint32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.serviceList.push(reader.uint32());
            }

            continue;
          }

          break;
        case 6:
          if (tag != 49) {
            break;
          }

          message.syncVersion = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSOCacheSubscriptionCheck {
    return {
      version: isSet(object.version) ? String(object.version) : "0",
      ownerSoid: isSet(object.ownerSoid) ? CMsgSOIDOwner.fromJSON(object.ownerSoid) : undefined,
      serviceId: isSet(object.serviceId) ? Number(object.serviceId) : 0,
      serviceList: Array.isArray(object?.serviceList) ? object.serviceList.map((e: any) => Number(e)) : [],
      syncVersion: isSet(object.syncVersion) ? String(object.syncVersion) : "0",
    };
  },

  toJSON(message: CMsgSOCacheSubscriptionCheck): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.ownerSoid !== undefined &&
      (obj.ownerSoid = message.ownerSoid ? CMsgSOIDOwner.toJSON(message.ownerSoid) : undefined);
    message.serviceId !== undefined && (obj.serviceId = Math.round(message.serviceId));
    if (message.serviceList) {
      obj.serviceList = message.serviceList.map((e) => Math.round(e));
    } else {
      obj.serviceList = [];
    }
    message.syncVersion !== undefined && (obj.syncVersion = message.syncVersion);
    return obj;
  },
};

function createBaseCMsgSOCacheSubscriptionRefresh(): CMsgSOCacheSubscriptionRefresh {
  return { ownerSoid: undefined };
}

export const CMsgSOCacheSubscriptionRefresh = {
  encode(message: CMsgSOCacheSubscriptionRefresh, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerSoid !== undefined) {
      CMsgSOIDOwner.encode(message.ownerSoid, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSOCacheSubscriptionRefresh {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSOCacheSubscriptionRefresh();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.ownerSoid = CMsgSOIDOwner.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSOCacheSubscriptionRefresh {
    return { ownerSoid: isSet(object.ownerSoid) ? CMsgSOIDOwner.fromJSON(object.ownerSoid) : undefined };
  },

  toJSON(message: CMsgSOCacheSubscriptionRefresh): unknown {
    const obj: any = {};
    message.ownerSoid !== undefined &&
      (obj.ownerSoid = message.ownerSoid ? CMsgSOIDOwner.toJSON(message.ownerSoid) : undefined);
    return obj;
  },
};

function createBaseCMsgSOCacheVersion(): CMsgSOCacheVersion {
  return { version: "0" };
}

export const CMsgSOCacheVersion = {
  encode(message: CMsgSOCacheVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "0") {
      writer.uint32(9).fixed64(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSOCacheVersion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSOCacheVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.version = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSOCacheVersion {
    return { version: isSet(object.version) ? String(object.version) : "0" };
  },

  toJSON(message: CMsgSOCacheVersion): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },
};

function createBaseCMsgGCMultiplexMessage(): CMsgGCMultiplexMessage {
  return { msgtype: 0, payload: Buffer.alloc(0), steamids: [] };
}

export const CMsgGCMultiplexMessage = {
  encode(message: CMsgGCMultiplexMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgtype !== 0) {
      writer.uint32(8).uint32(message.msgtype);
    }
    if (message.payload.length !== 0) {
      writer.uint32(18).bytes(message.payload);
    }
    writer.uint32(26).fork();
    for (const v of message.steamids) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCMultiplexMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCMultiplexMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.msgtype = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.payload = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag == 25) {
            message.steamids.push(longToString(reader.fixed64() as Long));
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.steamids.push(longToString(reader.fixed64() as Long));
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

  fromJSON(object: any): CMsgGCMultiplexMessage {
    return {
      msgtype: isSet(object.msgtype) ? Number(object.msgtype) : 0,
      payload: isSet(object.payload) ? Buffer.from(bytesFromBase64(object.payload)) : Buffer.alloc(0),
      steamids: Array.isArray(object?.steamids) ? object.steamids.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CMsgGCMultiplexMessage): unknown {
    const obj: any = {};
    message.msgtype !== undefined && (obj.msgtype = Math.round(message.msgtype));
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : Buffer.alloc(0)));
    if (message.steamids) {
      obj.steamids = message.steamids.map((e) => e);
    } else {
      obj.steamids = [];
    }
    return obj;
  },
};

function createBaseCMsgGCToGCSubGCStarting(): CMsgGCToGCSubGCStarting {
  return { dirIndex: 0 };
}

export const CMsgGCToGCSubGCStarting = {
  encode(message: CMsgGCToGCSubGCStarting, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dirIndex !== 0) {
      writer.uint32(8).int32(message.dirIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCSubGCStarting {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCSubGCStarting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.dirIndex = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToGCSubGCStarting {
    return { dirIndex: isSet(object.dirIndex) ? Number(object.dirIndex) : 0 };
  },

  toJSON(message: CMsgGCToGCSubGCStarting): unknown {
    const obj: any = {};
    message.dirIndex !== undefined && (obj.dirIndex = Math.round(message.dirIndex));
    return obj;
  },
};

function createBaseCGCToGCMsgMasterAck(): CGCToGCMsgMasterAck {
  return { dirIndex: 0, machineName: "", processName: "", directory: [] };
}

export const CGCToGCMsgMasterAck = {
  encode(message: CGCToGCMsgMasterAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dirIndex !== 0) {
      writer.uint32(8).int32(message.dirIndex);
    }
    if (message.machineName !== "") {
      writer.uint32(26).string(message.machineName);
    }
    if (message.processName !== "") {
      writer.uint32(34).string(message.processName);
    }
    for (const v of message.directory) {
      CGCToGCMsgMasterAck_Process.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCToGCMsgMasterAck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCToGCMsgMasterAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.dirIndex = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.machineName = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.processName = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.directory.push(CGCToGCMsgMasterAck_Process.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CGCToGCMsgMasterAck {
    return {
      dirIndex: isSet(object.dirIndex) ? Number(object.dirIndex) : 0,
      machineName: isSet(object.machineName) ? String(object.machineName) : "",
      processName: isSet(object.processName) ? String(object.processName) : "",
      directory: Array.isArray(object?.directory)
        ? object.directory.map((e: any) => CGCToGCMsgMasterAck_Process.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CGCToGCMsgMasterAck): unknown {
    const obj: any = {};
    message.dirIndex !== undefined && (obj.dirIndex = Math.round(message.dirIndex));
    message.machineName !== undefined && (obj.machineName = message.machineName);
    message.processName !== undefined && (obj.processName = message.processName);
    if (message.directory) {
      obj.directory = message.directory.map((e) => e ? CGCToGCMsgMasterAck_Process.toJSON(e) : undefined);
    } else {
      obj.directory = [];
    }
    return obj;
  },
};

function createBaseCGCToGCMsgMasterAck_Process(): CGCToGCMsgMasterAck_Process {
  return { dirIndex: 0, typeInstances: [] };
}

export const CGCToGCMsgMasterAck_Process = {
  encode(message: CGCToGCMsgMasterAck_Process, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dirIndex !== 0) {
      writer.uint32(8).int32(message.dirIndex);
    }
    writer.uint32(18).fork();
    for (const v of message.typeInstances) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCToGCMsgMasterAck_Process {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCToGCMsgMasterAck_Process();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.dirIndex = reader.int32();
          continue;
        case 2:
          if (tag == 16) {
            message.typeInstances.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.typeInstances.push(reader.uint32());
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

  fromJSON(object: any): CGCToGCMsgMasterAck_Process {
    return {
      dirIndex: isSet(object.dirIndex) ? Number(object.dirIndex) : 0,
      typeInstances: Array.isArray(object?.typeInstances) ? object.typeInstances.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CGCToGCMsgMasterAck_Process): unknown {
    const obj: any = {};
    message.dirIndex !== undefined && (obj.dirIndex = Math.round(message.dirIndex));
    if (message.typeInstances) {
      obj.typeInstances = message.typeInstances.map((e) => Math.round(e));
    } else {
      obj.typeInstances = [];
    }
    return obj;
  },
};

function createBaseCGCToGCMsgMasterAckResponse(): CGCToGCMsgMasterAckResponse {
  return { eresult: 0 };
}

export const CGCToGCMsgMasterAckResponse = {
  encode(message: CGCToGCMsgMasterAckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCToGCMsgMasterAckResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCToGCMsgMasterAckResponse();
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

  fromJSON(object: any): CGCToGCMsgMasterAckResponse {
    return { eresult: isSet(object.eresult) ? Number(object.eresult) : 0 };
  },

  toJSON(message: CGCToGCMsgMasterAckResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },
};

function createBaseCMsgGCToGCUniverseStartup(): CMsgGCToGCUniverseStartup {
  return { isInitialStartup: false };
}

export const CMsgGCToGCUniverseStartup = {
  encode(message: CMsgGCToGCUniverseStartup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isInitialStartup === true) {
      writer.uint32(8).bool(message.isInitialStartup);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCUniverseStartup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCUniverseStartup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.isInitialStartup = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToGCUniverseStartup {
    return { isInitialStartup: isSet(object.isInitialStartup) ? Boolean(object.isInitialStartup) : false };
  },

  toJSON(message: CMsgGCToGCUniverseStartup): unknown {
    const obj: any = {};
    message.isInitialStartup !== undefined && (obj.isInitialStartup = message.isInitialStartup);
    return obj;
  },
};

function createBaseCMsgGCToGCUniverseStartupResponse(): CMsgGCToGCUniverseStartupResponse {
  return { eresult: 0 };
}

export const CMsgGCToGCUniverseStartupResponse = {
  encode(message: CMsgGCToGCUniverseStartupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCUniverseStartupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCUniverseStartupResponse();
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

  fromJSON(object: any): CMsgGCToGCUniverseStartupResponse {
    return { eresult: isSet(object.eresult) ? Number(object.eresult) : 0 };
  },

  toJSON(message: CMsgGCToGCUniverseStartupResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },
};

function createBaseCGCToGCMsgMasterStartupComplete(): CGCToGCMsgMasterStartupComplete {
  return { gcInfo: [] };
}

export const CGCToGCMsgMasterStartupComplete = {
  encode(message: CGCToGCMsgMasterStartupComplete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.gcInfo) {
      CGCToGCMsgMasterStartupComplete_GCInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCToGCMsgMasterStartupComplete {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCToGCMsgMasterStartupComplete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.gcInfo.push(CGCToGCMsgMasterStartupComplete_GCInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CGCToGCMsgMasterStartupComplete {
    return {
      gcInfo: Array.isArray(object?.gcInfo)
        ? object.gcInfo.map((e: any) => CGCToGCMsgMasterStartupComplete_GCInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CGCToGCMsgMasterStartupComplete): unknown {
    const obj: any = {};
    if (message.gcInfo) {
      obj.gcInfo = message.gcInfo.map((e) => e ? CGCToGCMsgMasterStartupComplete_GCInfo.toJSON(e) : undefined);
    } else {
      obj.gcInfo = [];
    }
    return obj;
  },
};

function createBaseCGCToGCMsgMasterStartupComplete_GCInfo(): CGCToGCMsgMasterStartupComplete_GCInfo {
  return { dirIndex: 0, machineName: "" };
}

export const CGCToGCMsgMasterStartupComplete_GCInfo = {
  encode(message: CGCToGCMsgMasterStartupComplete_GCInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dirIndex !== 0) {
      writer.uint32(8).int32(message.dirIndex);
    }
    if (message.machineName !== "") {
      writer.uint32(18).string(message.machineName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCToGCMsgMasterStartupComplete_GCInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCToGCMsgMasterStartupComplete_GCInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.dirIndex = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.machineName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CGCToGCMsgMasterStartupComplete_GCInfo {
    return {
      dirIndex: isSet(object.dirIndex) ? Number(object.dirIndex) : 0,
      machineName: isSet(object.machineName) ? String(object.machineName) : "",
    };
  },

  toJSON(message: CGCToGCMsgMasterStartupComplete_GCInfo): unknown {
    const obj: any = {};
    message.dirIndex !== undefined && (obj.dirIndex = Math.round(message.dirIndex));
    message.machineName !== undefined && (obj.machineName = message.machineName);
    return obj;
  },
};

function createBaseCGCToGCMsgRouted(): CGCToGCMsgRouted {
  return { msgType: 0, senderId: "0", netMessage: Buffer.alloc(0) };
}

export const CGCToGCMsgRouted = {
  encode(message: CGCToGCMsgRouted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgType !== 0) {
      writer.uint32(8).uint32(message.msgType);
    }
    if (message.senderId !== "0") {
      writer.uint32(17).fixed64(message.senderId);
    }
    if (message.netMessage.length !== 0) {
      writer.uint32(26).bytes(message.netMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCToGCMsgRouted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCToGCMsgRouted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.msgType = reader.uint32();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.senderId = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.netMessage = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CGCToGCMsgRouted {
    return {
      msgType: isSet(object.msgType) ? Number(object.msgType) : 0,
      senderId: isSet(object.senderId) ? String(object.senderId) : "0",
      netMessage: isSet(object.netMessage) ? Buffer.from(bytesFromBase64(object.netMessage)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CGCToGCMsgRouted): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = Math.round(message.msgType));
    message.senderId !== undefined && (obj.senderId = message.senderId);
    message.netMessage !== undefined &&
      (obj.netMessage = base64FromBytes(message.netMessage !== undefined ? message.netMessage : Buffer.alloc(0)));
    return obj;
  },
};

function createBaseCGCToGCMsgRoutedReply(): CGCToGCMsgRoutedReply {
  return { msgType: 0, netMessage: Buffer.alloc(0) };
}

export const CGCToGCMsgRoutedReply = {
  encode(message: CGCToGCMsgRoutedReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgType !== 0) {
      writer.uint32(8).uint32(message.msgType);
    }
    if (message.netMessage.length !== 0) {
      writer.uint32(18).bytes(message.netMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCToGCMsgRoutedReply {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCToGCMsgRoutedReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.msgType = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.netMessage = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CGCToGCMsgRoutedReply {
    return {
      msgType: isSet(object.msgType) ? Number(object.msgType) : 0,
      netMessage: isSet(object.netMessage) ? Buffer.from(bytesFromBase64(object.netMessage)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CGCToGCMsgRoutedReply): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = Math.round(message.msgType));
    message.netMessage !== undefined &&
      (obj.netMessage = base64FromBytes(message.netMessage !== undefined ? message.netMessage : Buffer.alloc(0)));
    return obj;
  },
};

function createBaseCMsgGCUpdateSubGCSessionInfo(): CMsgGCUpdateSubGCSessionInfo {
  return { updates: [] };
}

export const CMsgGCUpdateSubGCSessionInfo = {
  encode(message: CMsgGCUpdateSubGCSessionInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.updates) {
      CMsgGCUpdateSubGCSessionInfo_CMsgUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCUpdateSubGCSessionInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCUpdateSubGCSessionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.updates.push(CMsgGCUpdateSubGCSessionInfo_CMsgUpdate.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCUpdateSubGCSessionInfo {
    return {
      updates: Array.isArray(object?.updates)
        ? object.updates.map((e: any) => CMsgGCUpdateSubGCSessionInfo_CMsgUpdate.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGCUpdateSubGCSessionInfo): unknown {
    const obj: any = {};
    if (message.updates) {
      obj.updates = message.updates.map((e) => e ? CMsgGCUpdateSubGCSessionInfo_CMsgUpdate.toJSON(e) : undefined);
    } else {
      obj.updates = [];
    }
    return obj;
  },
};

function createBaseCMsgGCUpdateSubGCSessionInfo_CMsgUpdate(): CMsgGCUpdateSubGCSessionInfo_CMsgUpdate {
  return { steamid: "0", ip: 0, trusted: false };
}

export const CMsgGCUpdateSubGCSessionInfo_CMsgUpdate = {
  encode(message: CMsgGCUpdateSubGCSessionInfo_CMsgUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.ip !== 0) {
      writer.uint32(21).fixed32(message.ip);
    }
    if (message.trusted === true) {
      writer.uint32(24).bool(message.trusted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCUpdateSubGCSessionInfo_CMsgUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCUpdateSubGCSessionInfo_CMsgUpdate();
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
          if (tag != 21) {
            break;
          }

          message.ip = reader.fixed32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.trusted = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCUpdateSubGCSessionInfo_CMsgUpdate {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      ip: isSet(object.ip) ? Number(object.ip) : 0,
      trusted: isSet(object.trusted) ? Boolean(object.trusted) : false,
    };
  },

  toJSON(message: CMsgGCUpdateSubGCSessionInfo_CMsgUpdate): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.ip !== undefined && (obj.ip = Math.round(message.ip));
    message.trusted !== undefined && (obj.trusted = message.trusted);
    return obj;
  },
};

function createBaseCMsgGCRequestSubGCSessionInfo(): CMsgGCRequestSubGCSessionInfo {
  return { steamid: "0" };
}

export const CMsgGCRequestSubGCSessionInfo = {
  encode(message: CMsgGCRequestSubGCSessionInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCRequestSubGCSessionInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCRequestSubGCSessionInfo();
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

  fromJSON(object: any): CMsgGCRequestSubGCSessionInfo {
    return { steamid: isSet(object.steamid) ? String(object.steamid) : "0" };
  },

  toJSON(message: CMsgGCRequestSubGCSessionInfo): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },
};

function createBaseCMsgGCRequestSubGCSessionInfoResponse(): CMsgGCRequestSubGCSessionInfoResponse {
  return { ip: 0, trusted: false, port: 0, success: false };
}

export const CMsgGCRequestSubGCSessionInfoResponse = {
  encode(message: CMsgGCRequestSubGCSessionInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ip !== 0) {
      writer.uint32(13).fixed32(message.ip);
    }
    if (message.trusted === true) {
      writer.uint32(16).bool(message.trusted);
    }
    if (message.port !== 0) {
      writer.uint32(24).uint32(message.port);
    }
    if (message.success === true) {
      writer.uint32(32).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCRequestSubGCSessionInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCRequestSubGCSessionInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.ip = reader.fixed32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.trusted = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.port = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.success = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCRequestSubGCSessionInfoResponse {
    return {
      ip: isSet(object.ip) ? Number(object.ip) : 0,
      trusted: isSet(object.trusted) ? Boolean(object.trusted) : false,
      port: isSet(object.port) ? Number(object.port) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
    };
  },

  toJSON(message: CMsgGCRequestSubGCSessionInfoResponse): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = Math.round(message.ip));
    message.trusted !== undefined && (obj.trusted = message.trusted);
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
};

function createBaseCMsgSOCacheHaveVersion(): CMsgSOCacheHaveVersion {
  return { soid: undefined, version: "0", serviceId: 0, cachedFileVersion: 0 };
}

export const CMsgSOCacheHaveVersion = {
  encode(message: CMsgSOCacheHaveVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.soid !== undefined) {
      CMsgSOIDOwner.encode(message.soid, writer.uint32(10).fork()).ldelim();
    }
    if (message.version !== "0") {
      writer.uint32(17).fixed64(message.version);
    }
    if (message.serviceId !== 0) {
      writer.uint32(24).uint32(message.serviceId);
    }
    if (message.cachedFileVersion !== 0) {
      writer.uint32(32).uint32(message.cachedFileVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSOCacheHaveVersion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSOCacheHaveVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.soid = CMsgSOIDOwner.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.version = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.serviceId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.cachedFileVersion = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSOCacheHaveVersion {
    return {
      soid: isSet(object.soid) ? CMsgSOIDOwner.fromJSON(object.soid) : undefined,
      version: isSet(object.version) ? String(object.version) : "0",
      serviceId: isSet(object.serviceId) ? Number(object.serviceId) : 0,
      cachedFileVersion: isSet(object.cachedFileVersion) ? Number(object.cachedFileVersion) : 0,
    };
  },

  toJSON(message: CMsgSOCacheHaveVersion): unknown {
    const obj: any = {};
    message.soid !== undefined && (obj.soid = message.soid ? CMsgSOIDOwner.toJSON(message.soid) : undefined);
    message.version !== undefined && (obj.version = message.version);
    message.serviceId !== undefined && (obj.serviceId = Math.round(message.serviceId));
    message.cachedFileVersion !== undefined && (obj.cachedFileVersion = Math.round(message.cachedFileVersion));
    return obj;
  },
};

function createBaseCMsgClientHello(): CMsgClientHello {
  return {
    version: 0,
    socacheHaveVersions: [],
    clientSessionNeed: 0,
    clientLauncher: 0,
    secretKey: "",
    clientLanguage: 0,
    engine: 0,
    steamdatagramLogin: Buffer.alloc(0),
    platformId: 0,
    gameMsg: Buffer.alloc(0),
    osType: 0,
    renderSystem: 0,
    renderSystemReq: 0,
    screenWidth: 0,
    screenHeight: 0,
    screenRefresh: 0,
    renderWidth: 0,
    renderHeight: 0,
    swapWidth: 0,
    swapHeight: 0,
    isSteamChina: false,
    isSteamChinaClient: false,
    platformName: "",
  };
}

export const CMsgClientHello = {
  encode(message: CMsgClientHello, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    for (const v of message.socacheHaveVersions) {
      CMsgSOCacheHaveVersion.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.clientSessionNeed !== 0) {
      writer.uint32(24).uint32(message.clientSessionNeed);
    }
    if (message.clientLauncher !== 0) {
      writer.uint32(32).int32(message.clientLauncher);
    }
    if (message.secretKey !== "") {
      writer.uint32(42).string(message.secretKey);
    }
    if (message.clientLanguage !== 0) {
      writer.uint32(48).uint32(message.clientLanguage);
    }
    if (message.engine !== 0) {
      writer.uint32(56).int32(message.engine);
    }
    if (message.steamdatagramLogin.length !== 0) {
      writer.uint32(66).bytes(message.steamdatagramLogin);
    }
    if (message.platformId !== 0) {
      writer.uint32(72).uint32(message.platformId);
    }
    if (message.gameMsg.length !== 0) {
      writer.uint32(82).bytes(message.gameMsg);
    }
    if (message.osType !== 0) {
      writer.uint32(88).int32(message.osType);
    }
    if (message.renderSystem !== 0) {
      writer.uint32(96).uint32(message.renderSystem);
    }
    if (message.renderSystemReq !== 0) {
      writer.uint32(104).uint32(message.renderSystemReq);
    }
    if (message.screenWidth !== 0) {
      writer.uint32(112).uint32(message.screenWidth);
    }
    if (message.screenHeight !== 0) {
      writer.uint32(120).uint32(message.screenHeight);
    }
    if (message.screenRefresh !== 0) {
      writer.uint32(128).uint32(message.screenRefresh);
    }
    if (message.renderWidth !== 0) {
      writer.uint32(136).uint32(message.renderWidth);
    }
    if (message.renderHeight !== 0) {
      writer.uint32(144).uint32(message.renderHeight);
    }
    if (message.swapWidth !== 0) {
      writer.uint32(152).uint32(message.swapWidth);
    }
    if (message.swapHeight !== 0) {
      writer.uint32(160).uint32(message.swapHeight);
    }
    if (message.isSteamChina === true) {
      writer.uint32(176).bool(message.isSteamChina);
    }
    if (message.isSteamChinaClient === true) {
      writer.uint32(192).bool(message.isSteamChinaClient);
    }
    if (message.platformName !== "") {
      writer.uint32(186).string(message.platformName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientHello {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientHello();
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
          if (tag != 18) {
            break;
          }

          message.socacheHaveVersions.push(CMsgSOCacheHaveVersion.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.clientSessionNeed = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.clientLauncher = reader.int32() as any;
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.secretKey = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.clientLanguage = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.engine = reader.int32() as any;
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.steamdatagramLogin = reader.bytes() as Buffer;
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.platformId = reader.uint32();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.gameMsg = reader.bytes() as Buffer;
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.osType = reader.int32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.renderSystem = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.renderSystemReq = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.screenWidth = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.screenHeight = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.screenRefresh = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.renderWidth = reader.uint32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.renderHeight = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.swapWidth = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.swapHeight = reader.uint32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.isSteamChina = reader.bool();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.isSteamChinaClient = reader.bool();
          continue;
        case 23:
          if (tag != 186) {
            break;
          }

          message.platformName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientHello {
    return {
      version: isSet(object.version) ? Number(object.version) : 0,
      socacheHaveVersions: Array.isArray(object?.socacheHaveVersions)
        ? object.socacheHaveVersions.map((e: any) => CMsgSOCacheHaveVersion.fromJSON(e))
        : [],
      clientSessionNeed: isSet(object.clientSessionNeed) ? Number(object.clientSessionNeed) : 0,
      clientLauncher: isSet(object.clientLauncher) ? partnerAccountTypeFromJSON(object.clientLauncher) : 0,
      secretKey: isSet(object.secretKey) ? String(object.secretKey) : "",
      clientLanguage: isSet(object.clientLanguage) ? Number(object.clientLanguage) : 0,
      engine: isSet(object.engine) ? eSourceEngineFromJSON(object.engine) : 0,
      steamdatagramLogin: isSet(object.steamdatagramLogin)
        ? Buffer.from(bytesFromBase64(object.steamdatagramLogin))
        : Buffer.alloc(0),
      platformId: isSet(object.platformId) ? Number(object.platformId) : 0,
      gameMsg: isSet(object.gameMsg) ? Buffer.from(bytesFromBase64(object.gameMsg)) : Buffer.alloc(0),
      osType: isSet(object.osType) ? Number(object.osType) : 0,
      renderSystem: isSet(object.renderSystem) ? Number(object.renderSystem) : 0,
      renderSystemReq: isSet(object.renderSystemReq) ? Number(object.renderSystemReq) : 0,
      screenWidth: isSet(object.screenWidth) ? Number(object.screenWidth) : 0,
      screenHeight: isSet(object.screenHeight) ? Number(object.screenHeight) : 0,
      screenRefresh: isSet(object.screenRefresh) ? Number(object.screenRefresh) : 0,
      renderWidth: isSet(object.renderWidth) ? Number(object.renderWidth) : 0,
      renderHeight: isSet(object.renderHeight) ? Number(object.renderHeight) : 0,
      swapWidth: isSet(object.swapWidth) ? Number(object.swapWidth) : 0,
      swapHeight: isSet(object.swapHeight) ? Number(object.swapHeight) : 0,
      isSteamChina: isSet(object.isSteamChina) ? Boolean(object.isSteamChina) : false,
      isSteamChinaClient: isSet(object.isSteamChinaClient) ? Boolean(object.isSteamChinaClient) : false,
      platformName: isSet(object.platformName) ? String(object.platformName) : "",
    };
  },

  toJSON(message: CMsgClientHello): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = Math.round(message.version));
    if (message.socacheHaveVersions) {
      obj.socacheHaveVersions = message.socacheHaveVersions.map((e) =>
        e ? CMsgSOCacheHaveVersion.toJSON(e) : undefined
      );
    } else {
      obj.socacheHaveVersions = [];
    }
    message.clientSessionNeed !== undefined && (obj.clientSessionNeed = Math.round(message.clientSessionNeed));
    message.clientLauncher !== undefined && (obj.clientLauncher = partnerAccountTypeToJSON(message.clientLauncher));
    message.secretKey !== undefined && (obj.secretKey = message.secretKey);
    message.clientLanguage !== undefined && (obj.clientLanguage = Math.round(message.clientLanguage));
    message.engine !== undefined && (obj.engine = eSourceEngineToJSON(message.engine));
    message.steamdatagramLogin !== undefined &&
      (obj.steamdatagramLogin = base64FromBytes(
        message.steamdatagramLogin !== undefined ? message.steamdatagramLogin : Buffer.alloc(0),
      ));
    message.platformId !== undefined && (obj.platformId = Math.round(message.platformId));
    message.gameMsg !== undefined &&
      (obj.gameMsg = base64FromBytes(message.gameMsg !== undefined ? message.gameMsg : Buffer.alloc(0)));
    message.osType !== undefined && (obj.osType = Math.round(message.osType));
    message.renderSystem !== undefined && (obj.renderSystem = Math.round(message.renderSystem));
    message.renderSystemReq !== undefined && (obj.renderSystemReq = Math.round(message.renderSystemReq));
    message.screenWidth !== undefined && (obj.screenWidth = Math.round(message.screenWidth));
    message.screenHeight !== undefined && (obj.screenHeight = Math.round(message.screenHeight));
    message.screenRefresh !== undefined && (obj.screenRefresh = Math.round(message.screenRefresh));
    message.renderWidth !== undefined && (obj.renderWidth = Math.round(message.renderWidth));
    message.renderHeight !== undefined && (obj.renderHeight = Math.round(message.renderHeight));
    message.swapWidth !== undefined && (obj.swapWidth = Math.round(message.swapWidth));
    message.swapHeight !== undefined && (obj.swapHeight = Math.round(message.swapHeight));
    message.isSteamChina !== undefined && (obj.isSteamChina = message.isSteamChina);
    message.isSteamChinaClient !== undefined && (obj.isSteamChinaClient = message.isSteamChinaClient);
    message.platformName !== undefined && (obj.platformName = message.platformName);
    return obj;
  },
};

function createBaseCMsgClientWelcome(): CMsgClientWelcome {
  return {
    version: 0,
    gameData: Buffer.alloc(0),
    outofdateSubscribedCaches: [],
    uptodateSubscribedCaches: [],
    location: undefined,
    saveGameKey: Buffer.alloc(0),
    gcSocacheFileVersion: 0,
    txnCountryCode: "",
    gameData2: Buffer.alloc(0),
    rtime32GcWelcomeTimestamp: 0,
    currency: 0,
    balance: 0,
    balanceUrl: "",
    hasAcceptedChinaSsa: false,
    isBannedSteamChina: false,
    additionalWelcomeMsgs: undefined,
    steamLearnServerInfo: undefined,
  };
}

export const CMsgClientWelcome = {
  encode(message: CMsgClientWelcome, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    if (message.gameData.length !== 0) {
      writer.uint32(18).bytes(message.gameData);
    }
    for (const v of message.outofdateSubscribedCaches) {
      CMsgSOCacheSubscribed.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.uptodateSubscribedCaches) {
      CMsgSOCacheSubscriptionCheck.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.location !== undefined) {
      CMsgClientWelcome_Location.encode(message.location, writer.uint32(42).fork()).ldelim();
    }
    if (message.saveGameKey.length !== 0) {
      writer.uint32(50).bytes(message.saveGameKey);
    }
    if (message.gcSocacheFileVersion !== 0) {
      writer.uint32(72).uint32(message.gcSocacheFileVersion);
    }
    if (message.txnCountryCode !== "") {
      writer.uint32(82).string(message.txnCountryCode);
    }
    if (message.gameData2.length !== 0) {
      writer.uint32(90).bytes(message.gameData2);
    }
    if (message.rtime32GcWelcomeTimestamp !== 0) {
      writer.uint32(96).uint32(message.rtime32GcWelcomeTimestamp);
    }
    if (message.currency !== 0) {
      writer.uint32(104).uint32(message.currency);
    }
    if (message.balance !== 0) {
      writer.uint32(112).uint32(message.balance);
    }
    if (message.balanceUrl !== "") {
      writer.uint32(122).string(message.balanceUrl);
    }
    if (message.hasAcceptedChinaSsa === true) {
      writer.uint32(128).bool(message.hasAcceptedChinaSsa);
    }
    if (message.isBannedSteamChina === true) {
      writer.uint32(136).bool(message.isBannedSteamChina);
    }
    if (message.additionalWelcomeMsgs !== undefined) {
      CExtraMsgBlock.encode(message.additionalWelcomeMsgs, writer.uint32(146).fork()).ldelim();
    }
    if (message.steamLearnServerInfo !== undefined) {
      CMsgSteamLearnServerInfo.encode(message.steamLearnServerInfo, writer.uint32(162).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientWelcome {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientWelcome();
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
          if (tag != 18) {
            break;
          }

          message.gameData = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.outofdateSubscribedCaches.push(CMsgSOCacheSubscribed.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.uptodateSubscribedCaches.push(CMsgSOCacheSubscriptionCheck.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.location = CMsgClientWelcome_Location.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.saveGameKey = reader.bytes() as Buffer;
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.gcSocacheFileVersion = reader.uint32();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.txnCountryCode = reader.string();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.gameData2 = reader.bytes() as Buffer;
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.rtime32GcWelcomeTimestamp = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.currency = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.balance = reader.uint32();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.balanceUrl = reader.string();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.hasAcceptedChinaSsa = reader.bool();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.isBannedSteamChina = reader.bool();
          continue;
        case 18:
          if (tag != 146) {
            break;
          }

          message.additionalWelcomeMsgs = CExtraMsgBlock.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag != 162) {
            break;
          }

          message.steamLearnServerInfo = CMsgSteamLearnServerInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientWelcome {
    return {
      version: isSet(object.version) ? Number(object.version) : 0,
      gameData: isSet(object.gameData) ? Buffer.from(bytesFromBase64(object.gameData)) : Buffer.alloc(0),
      outofdateSubscribedCaches: Array.isArray(object?.outofdateSubscribedCaches)
        ? object.outofdateSubscribedCaches.map((e: any) => CMsgSOCacheSubscribed.fromJSON(e))
        : [],
      uptodateSubscribedCaches: Array.isArray(object?.uptodateSubscribedCaches)
        ? object.uptodateSubscribedCaches.map((e: any) => CMsgSOCacheSubscriptionCheck.fromJSON(e))
        : [],
      location: isSet(object.location) ? CMsgClientWelcome_Location.fromJSON(object.location) : undefined,
      saveGameKey: isSet(object.saveGameKey) ? Buffer.from(bytesFromBase64(object.saveGameKey)) : Buffer.alloc(0),
      gcSocacheFileVersion: isSet(object.gcSocacheFileVersion) ? Number(object.gcSocacheFileVersion) : 0,
      txnCountryCode: isSet(object.txnCountryCode) ? String(object.txnCountryCode) : "",
      gameData2: isSet(object.gameData2) ? Buffer.from(bytesFromBase64(object.gameData2)) : Buffer.alloc(0),
      rtime32GcWelcomeTimestamp: isSet(object.rtime32GcWelcomeTimestamp) ? Number(object.rtime32GcWelcomeTimestamp) : 0,
      currency: isSet(object.currency) ? Number(object.currency) : 0,
      balance: isSet(object.balance) ? Number(object.balance) : 0,
      balanceUrl: isSet(object.balanceUrl) ? String(object.balanceUrl) : "",
      hasAcceptedChinaSsa: isSet(object.hasAcceptedChinaSsa) ? Boolean(object.hasAcceptedChinaSsa) : false,
      isBannedSteamChina: isSet(object.isBannedSteamChina) ? Boolean(object.isBannedSteamChina) : false,
      additionalWelcomeMsgs: isSet(object.additionalWelcomeMsgs)
        ? CExtraMsgBlock.fromJSON(object.additionalWelcomeMsgs)
        : undefined,
      steamLearnServerInfo: isSet(object.steamLearnServerInfo)
        ? CMsgSteamLearnServerInfo.fromJSON(object.steamLearnServerInfo)
        : undefined,
    };
  },

  toJSON(message: CMsgClientWelcome): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.gameData !== undefined &&
      (obj.gameData = base64FromBytes(message.gameData !== undefined ? message.gameData : Buffer.alloc(0)));
    if (message.outofdateSubscribedCaches) {
      obj.outofdateSubscribedCaches = message.outofdateSubscribedCaches.map((e) =>
        e ? CMsgSOCacheSubscribed.toJSON(e) : undefined
      );
    } else {
      obj.outofdateSubscribedCaches = [];
    }
    if (message.uptodateSubscribedCaches) {
      obj.uptodateSubscribedCaches = message.uptodateSubscribedCaches.map((e) =>
        e ? CMsgSOCacheSubscriptionCheck.toJSON(e) : undefined
      );
    } else {
      obj.uptodateSubscribedCaches = [];
    }
    message.location !== undefined &&
      (obj.location = message.location ? CMsgClientWelcome_Location.toJSON(message.location) : undefined);
    message.saveGameKey !== undefined &&
      (obj.saveGameKey = base64FromBytes(message.saveGameKey !== undefined ? message.saveGameKey : Buffer.alloc(0)));
    message.gcSocacheFileVersion !== undefined && (obj.gcSocacheFileVersion = Math.round(message.gcSocacheFileVersion));
    message.txnCountryCode !== undefined && (obj.txnCountryCode = message.txnCountryCode);
    message.gameData2 !== undefined &&
      (obj.gameData2 = base64FromBytes(message.gameData2 !== undefined ? message.gameData2 : Buffer.alloc(0)));
    message.rtime32GcWelcomeTimestamp !== undefined &&
      (obj.rtime32GcWelcomeTimestamp = Math.round(message.rtime32GcWelcomeTimestamp));
    message.currency !== undefined && (obj.currency = Math.round(message.currency));
    message.balance !== undefined && (obj.balance = Math.round(message.balance));
    message.balanceUrl !== undefined && (obj.balanceUrl = message.balanceUrl);
    message.hasAcceptedChinaSsa !== undefined && (obj.hasAcceptedChinaSsa = message.hasAcceptedChinaSsa);
    message.isBannedSteamChina !== undefined && (obj.isBannedSteamChina = message.isBannedSteamChina);
    message.additionalWelcomeMsgs !== undefined && (obj.additionalWelcomeMsgs = message.additionalWelcomeMsgs
      ? CExtraMsgBlock.toJSON(message.additionalWelcomeMsgs)
      : undefined);
    message.steamLearnServerInfo !== undefined && (obj.steamLearnServerInfo = message.steamLearnServerInfo
      ? CMsgSteamLearnServerInfo.toJSON(message.steamLearnServerInfo)
      : undefined);
    return obj;
  },
};

function createBaseCMsgClientWelcome_Location(): CMsgClientWelcome_Location {
  return { latitude: 0, longitude: 0, country: "" };
}

export const CMsgClientWelcome_Location = {
  encode(message: CMsgClientWelcome_Location, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.latitude !== 0) {
      writer.uint32(13).float(message.latitude);
    }
    if (message.longitude !== 0) {
      writer.uint32(21).float(message.longitude);
    }
    if (message.country !== "") {
      writer.uint32(26).string(message.country);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientWelcome_Location {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientWelcome_Location();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.latitude = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.longitude = reader.float();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.country = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientWelcome_Location {
    return {
      latitude: isSet(object.latitude) ? Number(object.latitude) : 0,
      longitude: isSet(object.longitude) ? Number(object.longitude) : 0,
      country: isSet(object.country) ? String(object.country) : "",
    };
  },

  toJSON(message: CMsgClientWelcome_Location): unknown {
    const obj: any = {};
    message.latitude !== undefined && (obj.latitude = message.latitude);
    message.longitude !== undefined && (obj.longitude = message.longitude);
    message.country !== undefined && (obj.country = message.country);
    return obj;
  },
};

function createBaseCMsgConnectionStatus(): CMsgConnectionStatus {
  return {
    status: 0,
    clientSessionNeed: 0,
    queuePosition: 0,
    queueSize: 0,
    waitSeconds: 0,
    estimatedWaitSecondsRemaining: 0,
  };
}

export const CMsgConnectionStatus = {
  encode(message: CMsgConnectionStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.clientSessionNeed !== 0) {
      writer.uint32(16).uint32(message.clientSessionNeed);
    }
    if (message.queuePosition !== 0) {
      writer.uint32(24).int32(message.queuePosition);
    }
    if (message.queueSize !== 0) {
      writer.uint32(32).int32(message.queueSize);
    }
    if (message.waitSeconds !== 0) {
      writer.uint32(40).int32(message.waitSeconds);
    }
    if (message.estimatedWaitSecondsRemaining !== 0) {
      writer.uint32(48).int32(message.estimatedWaitSecondsRemaining);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgConnectionStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgConnectionStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.clientSessionNeed = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.queuePosition = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.queueSize = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.waitSeconds = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.estimatedWaitSecondsRemaining = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgConnectionStatus {
    return {
      status: isSet(object.status) ? gCConnectionStatusFromJSON(object.status) : 0,
      clientSessionNeed: isSet(object.clientSessionNeed) ? Number(object.clientSessionNeed) : 0,
      queuePosition: isSet(object.queuePosition) ? Number(object.queuePosition) : 0,
      queueSize: isSet(object.queueSize) ? Number(object.queueSize) : 0,
      waitSeconds: isSet(object.waitSeconds) ? Number(object.waitSeconds) : 0,
      estimatedWaitSecondsRemaining: isSet(object.estimatedWaitSecondsRemaining)
        ? Number(object.estimatedWaitSecondsRemaining)
        : 0,
    };
  },

  toJSON(message: CMsgConnectionStatus): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = gCConnectionStatusToJSON(message.status));
    message.clientSessionNeed !== undefined && (obj.clientSessionNeed = Math.round(message.clientSessionNeed));
    message.queuePosition !== undefined && (obj.queuePosition = Math.round(message.queuePosition));
    message.queueSize !== undefined && (obj.queueSize = Math.round(message.queueSize));
    message.waitSeconds !== undefined && (obj.waitSeconds = Math.round(message.waitSeconds));
    message.estimatedWaitSecondsRemaining !== undefined &&
      (obj.estimatedWaitSecondsRemaining = Math.round(message.estimatedWaitSecondsRemaining));
    return obj;
  },
};

function createBaseCMsgGCToGCSOCacheSubscribe(): CMsgGCToGCSOCacheSubscribe {
  return { subscriber: "0", subscribeToId: "0", syncVersion: "0", haveVersions: [], subscribeToType: 0 };
}

export const CMsgGCToGCSOCacheSubscribe = {
  encode(message: CMsgGCToGCSOCacheSubscribe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscriber !== "0") {
      writer.uint32(9).fixed64(message.subscriber);
    }
    if (message.subscribeToId !== "0") {
      writer.uint32(17).fixed64(message.subscribeToId);
    }
    if (message.syncVersion !== "0") {
      writer.uint32(25).fixed64(message.syncVersion);
    }
    for (const v of message.haveVersions) {
      CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.subscribeToType !== 0) {
      writer.uint32(40).uint32(message.subscribeToType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCSOCacheSubscribe {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCSOCacheSubscribe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.subscriber = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.subscribeToId = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.syncVersion = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.haveVersions.push(CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.subscribeToType = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToGCSOCacheSubscribe {
    return {
      subscriber: isSet(object.subscriber) ? String(object.subscriber) : "0",
      subscribeToId: isSet(object.subscribeToId) ? String(object.subscribeToId) : "0",
      syncVersion: isSet(object.syncVersion) ? String(object.syncVersion) : "0",
      haveVersions: Array.isArray(object?.haveVersions)
        ? object.haveVersions.map((e: any) => CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions.fromJSON(e))
        : [],
      subscribeToType: isSet(object.subscribeToType) ? Number(object.subscribeToType) : 0,
    };
  },

  toJSON(message: CMsgGCToGCSOCacheSubscribe): unknown {
    const obj: any = {};
    message.subscriber !== undefined && (obj.subscriber = message.subscriber);
    message.subscribeToId !== undefined && (obj.subscribeToId = message.subscribeToId);
    message.syncVersion !== undefined && (obj.syncVersion = message.syncVersion);
    if (message.haveVersions) {
      obj.haveVersions = message.haveVersions.map((e) =>
        e ? CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions.toJSON(e) : undefined
      );
    } else {
      obj.haveVersions = [];
    }
    message.subscribeToType !== undefined && (obj.subscribeToType = Math.round(message.subscribeToType));
    return obj;
  },
};

function createBaseCMsgGCToGCSOCacheSubscribe_CMsgHaveVersions(): CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions {
  return { serviceId: 0, version: "0" };
}

export const CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions = {
  encode(message: CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceId !== 0) {
      writer.uint32(8).uint32(message.serviceId);
    }
    if (message.version !== "0") {
      writer.uint32(16).uint64(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCSOCacheSubscribe_CMsgHaveVersions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.serviceId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.version = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions {
    return {
      serviceId: isSet(object.serviceId) ? Number(object.serviceId) : 0,
      version: isSet(object.version) ? String(object.version) : "0",
    };
  },

  toJSON(message: CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions): unknown {
    const obj: any = {};
    message.serviceId !== undefined && (obj.serviceId = Math.round(message.serviceId));
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },
};

function createBaseCMsgGCToGCSOCacheUnsubscribe(): CMsgGCToGCSOCacheUnsubscribe {
  return { subscriber: "0", unsubscribeFromId: "0", unsubscribeFromType: 0 };
}

export const CMsgGCToGCSOCacheUnsubscribe = {
  encode(message: CMsgGCToGCSOCacheUnsubscribe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscriber !== "0") {
      writer.uint32(9).fixed64(message.subscriber);
    }
    if (message.unsubscribeFromId !== "0") {
      writer.uint32(17).fixed64(message.unsubscribeFromId);
    }
    if (message.unsubscribeFromType !== 0) {
      writer.uint32(24).uint32(message.unsubscribeFromType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCSOCacheUnsubscribe {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCSOCacheUnsubscribe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.subscriber = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.unsubscribeFromId = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.unsubscribeFromType = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToGCSOCacheUnsubscribe {
    return {
      subscriber: isSet(object.subscriber) ? String(object.subscriber) : "0",
      unsubscribeFromId: isSet(object.unsubscribeFromId) ? String(object.unsubscribeFromId) : "0",
      unsubscribeFromType: isSet(object.unsubscribeFromType) ? Number(object.unsubscribeFromType) : 0,
    };
  },

  toJSON(message: CMsgGCToGCSOCacheUnsubscribe): unknown {
    const obj: any = {};
    message.subscriber !== undefined && (obj.subscriber = message.subscriber);
    message.unsubscribeFromId !== undefined && (obj.unsubscribeFromId = message.unsubscribeFromId);
    message.unsubscribeFromType !== undefined && (obj.unsubscribeFromType = Math.round(message.unsubscribeFromType));
    return obj;
  },
};

function createBaseCMsgGCClientPing(): CMsgGCClientPing {
  return {};
}

export const CMsgGCClientPing = {
  encode(_: CMsgGCClientPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCClientPing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCClientPing();
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

  fromJSON(_: any): CMsgGCClientPing {
    return {};
  },

  toJSON(_: CMsgGCClientPing): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgGCToGCForwardAccountDetails(): CMsgGCToGCForwardAccountDetails {
  return { steamid: "0", accountDetails: undefined, ageSeconds: 0 };
}

export const CMsgGCToGCForwardAccountDetails = {
  encode(message: CMsgGCToGCForwardAccountDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.accountDetails !== undefined) {
      CGCSystemMsgGetAccountDetailsResponse.encode(message.accountDetails, writer.uint32(18).fork()).ldelim();
    }
    if (message.ageSeconds !== 0) {
      writer.uint32(24).uint32(message.ageSeconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCForwardAccountDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCForwardAccountDetails();
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
          if (tag != 18) {
            break;
          }

          message.accountDetails = CGCSystemMsgGetAccountDetailsResponse.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.ageSeconds = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToGCForwardAccountDetails {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      accountDetails: isSet(object.accountDetails)
        ? CGCSystemMsgGetAccountDetailsResponse.fromJSON(object.accountDetails)
        : undefined,
      ageSeconds: isSet(object.ageSeconds) ? Number(object.ageSeconds) : 0,
    };
  },

  toJSON(message: CMsgGCToGCForwardAccountDetails): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.accountDetails !== undefined && (obj.accountDetails = message.accountDetails
      ? CGCSystemMsgGetAccountDetailsResponse.toJSON(message.accountDetails)
      : undefined);
    message.ageSeconds !== undefined && (obj.ageSeconds = Math.round(message.ageSeconds));
    return obj;
  },
};

function createBaseCMsgGCToGCLoadSessionSOCache(): CMsgGCToGCLoadSessionSOCache {
  return { accountId: 0, forwardAccountDetails: undefined };
}

export const CMsgGCToGCLoadSessionSOCache = {
  encode(message: CMsgGCToGCLoadSessionSOCache, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.forwardAccountDetails !== undefined) {
      CMsgGCToGCForwardAccountDetails.encode(message.forwardAccountDetails, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCLoadSessionSOCache {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCLoadSessionSOCache();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.forwardAccountDetails = CMsgGCToGCForwardAccountDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToGCLoadSessionSOCache {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      forwardAccountDetails: isSet(object.forwardAccountDetails)
        ? CMsgGCToGCForwardAccountDetails.fromJSON(object.forwardAccountDetails)
        : undefined,
    };
  },

  toJSON(message: CMsgGCToGCLoadSessionSOCache): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.forwardAccountDetails !== undefined && (obj.forwardAccountDetails = message.forwardAccountDetails
      ? CMsgGCToGCForwardAccountDetails.toJSON(message.forwardAccountDetails)
      : undefined);
    return obj;
  },
};

function createBaseCMsgGCToGCLoadSessionSOCacheResponse(): CMsgGCToGCLoadSessionSOCacheResponse {
  return {};
}

export const CMsgGCToGCLoadSessionSOCacheResponse = {
  encode(_: CMsgGCToGCLoadSessionSOCacheResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCLoadSessionSOCacheResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCLoadSessionSOCacheResponse();
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

  fromJSON(_: any): CMsgGCToGCLoadSessionSOCacheResponse {
    return {};
  },

  toJSON(_: CMsgGCToGCLoadSessionSOCacheResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgGCToGCUpdateSessionStats(): CMsgGCToGCUpdateSessionStats {
  return { userSessions: 0, serverSessions: 0, inLogonSurge: false };
}

export const CMsgGCToGCUpdateSessionStats = {
  encode(message: CMsgGCToGCUpdateSessionStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userSessions !== 0) {
      writer.uint32(8).uint32(message.userSessions);
    }
    if (message.serverSessions !== 0) {
      writer.uint32(16).uint32(message.serverSessions);
    }
    if (message.inLogonSurge === true) {
      writer.uint32(24).bool(message.inLogonSurge);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCUpdateSessionStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCUpdateSessionStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.userSessions = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.serverSessions = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.inLogonSurge = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToGCUpdateSessionStats {
    return {
      userSessions: isSet(object.userSessions) ? Number(object.userSessions) : 0,
      serverSessions: isSet(object.serverSessions) ? Number(object.serverSessions) : 0,
      inLogonSurge: isSet(object.inLogonSurge) ? Boolean(object.inLogonSurge) : false,
    };
  },

  toJSON(message: CMsgGCToGCUpdateSessionStats): unknown {
    const obj: any = {};
    message.userSessions !== undefined && (obj.userSessions = Math.round(message.userSessions));
    message.serverSessions !== undefined && (obj.serverSessions = Math.round(message.serverSessions));
    message.inLogonSurge !== undefined && (obj.inLogonSurge = message.inLogonSurge);
    return obj;
  },
};

function createBaseCMsgGCToClientRequestDropped(): CMsgGCToClientRequestDropped {
  return {};
}

export const CMsgGCToClientRequestDropped = {
  encode(_: CMsgGCToClientRequestDropped, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientRequestDropped {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientRequestDropped();
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

  fromJSON(_: any): CMsgGCToClientRequestDropped {
    return {};
  },

  toJSON(_: CMsgGCToClientRequestDropped): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCWorkshopPopulateItemDescriptionsRequest(): CWorkshopPopulateItemDescriptionsRequest {
  return { appid: 0, languages: [] };
}

export const CWorkshopPopulateItemDescriptionsRequest = {
  encode(message: CWorkshopPopulateItemDescriptionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    for (const v of message.languages) {
      CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock.encode(v!, writer.uint32(18).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CWorkshopPopulateItemDescriptionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopPopulateItemDescriptionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.appid = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.languages.push(
            CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock.decode(reader, reader.uint32()),
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

  fromJSON(object: any): CWorkshopPopulateItemDescriptionsRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      languages: Array.isArray(object?.languages)
        ? object.languages.map((e: any) =>
          CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CWorkshopPopulateItemDescriptionsRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    if (message.languages) {
      obj.languages = message.languages.map((e) =>
        e ? CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock.toJSON(e) : undefined
      );
    } else {
      obj.languages = [];
    }
    return obj;
  },
};

function createBaseCWorkshopPopulateItemDescriptionsRequest_SingleItemDescription(): CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription {
  return { gameitemid: 0, itemDescription: "" };
}

export const CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription = {
  encode(
    message: CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.gameitemid !== 0) {
      writer.uint32(8).uint32(message.gameitemid);
    }
    if (message.itemDescription !== "") {
      writer.uint32(18).string(message.itemDescription);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopPopulateItemDescriptionsRequest_SingleItemDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.gameitemid = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.itemDescription = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription {
    return {
      gameitemid: isSet(object.gameitemid) ? Number(object.gameitemid) : 0,
      itemDescription: isSet(object.itemDescription) ? String(object.itemDescription) : "",
    };
  },

  toJSON(message: CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription): unknown {
    const obj: any = {};
    message.gameitemid !== undefined && (obj.gameitemid = Math.round(message.gameitemid));
    message.itemDescription !== undefined && (obj.itemDescription = message.itemDescription);
    return obj;
  },
};

function createBaseCWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock(): CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock {
  return { language: "", descriptions: [] };
}

export const CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock = {
  encode(
    message: CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.language !== "") {
      writer.uint32(10).string(message.language);
    }
    for (const v of message.descriptions) {
      CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.language = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.descriptions.push(
            CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription.decode(reader, reader.uint32()),
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

  fromJSON(object: any): CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock {
    return {
      language: isSet(object.language) ? String(object.language) : "",
      descriptions: Array.isArray(object?.descriptions)
        ? object.descriptions.map((e: any) =>
          CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock): unknown {
    const obj: any = {};
    message.language !== undefined && (obj.language = message.language);
    if (message.descriptions) {
      obj.descriptions = message.descriptions.map((e) =>
        e ? CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription.toJSON(e) : undefined
      );
    } else {
      obj.descriptions = [];
    }
    return obj;
  },
};

function createBaseCWorkshopGetContributorsRequest(): CWorkshopGetContributorsRequest {
  return { appid: 0, gameitemid: 0 };
}

export const CWorkshopGetContributorsRequest = {
  encode(message: CWorkshopGetContributorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.gameitemid !== 0) {
      writer.uint32(16).uint32(message.gameitemid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CWorkshopGetContributorsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopGetContributorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.appid = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.gameitemid = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CWorkshopGetContributorsRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      gameitemid: isSet(object.gameitemid) ? Number(object.gameitemid) : 0,
    };
  },

  toJSON(message: CWorkshopGetContributorsRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.gameitemid !== undefined && (obj.gameitemid = Math.round(message.gameitemid));
    return obj;
  },
};

function createBaseCWorkshopGetContributorsResponse(): CWorkshopGetContributorsResponse {
  return { contributors: [] };
}

export const CWorkshopGetContributorsResponse = {
  encode(message: CWorkshopGetContributorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.contributors) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CWorkshopGetContributorsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopGetContributorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 9) {
            message.contributors.push(longToString(reader.fixed64() as Long));
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.contributors.push(longToString(reader.fixed64() as Long));
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

  fromJSON(object: any): CWorkshopGetContributorsResponse {
    return { contributors: Array.isArray(object?.contributors) ? object.contributors.map((e: any) => String(e)) : [] };
  },

  toJSON(message: CWorkshopGetContributorsResponse): unknown {
    const obj: any = {};
    if (message.contributors) {
      obj.contributors = message.contributors.map((e) => e);
    } else {
      obj.contributors = [];
    }
    return obj;
  },
};

function createBaseCWorkshopSetItemPaymentRulesRequest(): CWorkshopSetItemPaymentRulesRequest {
  return {
    appid: 0,
    gameitemid: 0,
    associatedWorkshopFiles: [],
    partnerAccounts: [],
    validateOnly: false,
    makeWorkshopFilesSubscribable: false,
    associatedWorkshopFileForDirectPayments: undefined,
  };
}

export const CWorkshopSetItemPaymentRulesRequest = {
  encode(message: CWorkshopSetItemPaymentRulesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.gameitemid !== 0) {
      writer.uint32(16).uint32(message.gameitemid);
    }
    for (const v of message.associatedWorkshopFiles) {
      CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.partnerAccounts) {
      CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.validateOnly === true) {
      writer.uint32(40).bool(message.validateOnly);
    }
    if (message.makeWorkshopFilesSubscribable === true) {
      writer.uint32(48).bool(message.makeWorkshopFilesSubscribable);
    }
    if (message.associatedWorkshopFileForDirectPayments !== undefined) {
      CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule.encode(
        message.associatedWorkshopFileForDirectPayments,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CWorkshopSetItemPaymentRulesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopSetItemPaymentRulesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.appid = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.gameitemid = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.associatedWorkshopFiles.push(
            CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule.decode(reader, reader.uint32()),
          );
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.partnerAccounts.push(
            CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule.decode(reader, reader.uint32()),
          );
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.validateOnly = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.makeWorkshopFilesSubscribable = reader.bool();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.associatedWorkshopFileForDirectPayments =
            CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CWorkshopSetItemPaymentRulesRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      gameitemid: isSet(object.gameitemid) ? Number(object.gameitemid) : 0,
      associatedWorkshopFiles: Array.isArray(object?.associatedWorkshopFiles)
        ? object.associatedWorkshopFiles.map((e: any) =>
          CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule.fromJSON(e)
        )
        : [],
      partnerAccounts: Array.isArray(object?.partnerAccounts)
        ? object.partnerAccounts.map((e: any) => CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule.fromJSON(e))
        : [],
      validateOnly: isSet(object.validateOnly) ? Boolean(object.validateOnly) : false,
      makeWorkshopFilesSubscribable: isSet(object.makeWorkshopFilesSubscribable)
        ? Boolean(object.makeWorkshopFilesSubscribable)
        : false,
      associatedWorkshopFileForDirectPayments: isSet(object.associatedWorkshopFileForDirectPayments)
        ? CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule.fromJSON(
          object.associatedWorkshopFileForDirectPayments,
        )
        : undefined,
    };
  },

  toJSON(message: CWorkshopSetItemPaymentRulesRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.gameitemid !== undefined && (obj.gameitemid = Math.round(message.gameitemid));
    if (message.associatedWorkshopFiles) {
      obj.associatedWorkshopFiles = message.associatedWorkshopFiles.map((e) =>
        e ? CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule.toJSON(e) : undefined
      );
    } else {
      obj.associatedWorkshopFiles = [];
    }
    if (message.partnerAccounts) {
      obj.partnerAccounts = message.partnerAccounts.map((e) =>
        e ? CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule.toJSON(e) : undefined
      );
    } else {
      obj.partnerAccounts = [];
    }
    message.validateOnly !== undefined && (obj.validateOnly = message.validateOnly);
    message.makeWorkshopFilesSubscribable !== undefined &&
      (obj.makeWorkshopFilesSubscribable = message.makeWorkshopFilesSubscribable);
    message.associatedWorkshopFileForDirectPayments !== undefined &&
      (obj.associatedWorkshopFileForDirectPayments = message.associatedWorkshopFileForDirectPayments
        ? CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule.toJSON(
          message.associatedWorkshopFileForDirectPayments,
        )
        : undefined);
    return obj;
  },
};

function createBaseCWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule(): CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule {
  return { workshopFileId: "0", revenuePercentage: 0, ruleDescription: "", ruleType: 0 };
}

export const CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule = {
  encode(
    message: CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.workshopFileId !== "0") {
      writer.uint32(8).uint64(message.workshopFileId);
    }
    if (message.revenuePercentage !== 0) {
      writer.uint32(21).float(message.revenuePercentage);
    }
    if (message.ruleDescription !== "") {
      writer.uint32(26).string(message.ruleDescription);
    }
    if (message.ruleType !== 0) {
      writer.uint32(32).uint32(message.ruleType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.workshopFileId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.revenuePercentage = reader.float();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.ruleDescription = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.ruleType = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule {
    return {
      workshopFileId: isSet(object.workshopFileId) ? String(object.workshopFileId) : "0",
      revenuePercentage: isSet(object.revenuePercentage) ? Number(object.revenuePercentage) : 0,
      ruleDescription: isSet(object.ruleDescription) ? String(object.ruleDescription) : "",
      ruleType: isSet(object.ruleType) ? Number(object.ruleType) : 0,
    };
  },

  toJSON(message: CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule): unknown {
    const obj: any = {};
    message.workshopFileId !== undefined && (obj.workshopFileId = message.workshopFileId);
    message.revenuePercentage !== undefined && (obj.revenuePercentage = message.revenuePercentage);
    message.ruleDescription !== undefined && (obj.ruleDescription = message.ruleDescription);
    message.ruleType !== undefined && (obj.ruleType = Math.round(message.ruleType));
    return obj;
  },
};

function createBaseCWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule(): CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule {
  return { workshopFileId: "0", ruleDescription: "" };
}

export const CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule = {
  encode(
    message: CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.workshopFileId !== "0") {
      writer.uint32(8).uint64(message.workshopFileId);
    }
    if (message.ruleDescription !== "") {
      writer.uint32(18).string(message.ruleDescription);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.workshopFileId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.ruleDescription = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule {
    return {
      workshopFileId: isSet(object.workshopFileId) ? String(object.workshopFileId) : "0",
      ruleDescription: isSet(object.ruleDescription) ? String(object.ruleDescription) : "",
    };
  },

  toJSON(message: CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule): unknown {
    const obj: any = {};
    message.workshopFileId !== undefined && (obj.workshopFileId = message.workshopFileId);
    message.ruleDescription !== undefined && (obj.ruleDescription = message.ruleDescription);
    return obj;
  },
};

function createBaseCWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule(): CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule {
  return { accountId: 0, revenuePercentage: 0, ruleDescription: "" };
}

export const CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule = {
  encode(
    message: CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.revenuePercentage !== 0) {
      writer.uint32(21).float(message.revenuePercentage);
    }
    if (message.ruleDescription !== "") {
      writer.uint32(26).string(message.ruleDescription);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.revenuePercentage = reader.float();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.ruleDescription = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      revenuePercentage: isSet(object.revenuePercentage) ? Number(object.revenuePercentage) : 0,
      ruleDescription: isSet(object.ruleDescription) ? String(object.ruleDescription) : "",
    };
  },

  toJSON(message: CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.revenuePercentage !== undefined && (obj.revenuePercentage = message.revenuePercentage);
    message.ruleDescription !== undefined && (obj.ruleDescription = message.ruleDescription);
    return obj;
  },
};

function createBaseCWorkshopSetItemPaymentRulesResponse(): CWorkshopSetItemPaymentRulesResponse {
  return { validationErrors: [] };
}

export const CWorkshopSetItemPaymentRulesResponse = {
  encode(message: CWorkshopSetItemPaymentRulesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validationErrors) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CWorkshopSetItemPaymentRulesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopSetItemPaymentRulesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.validationErrors.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CWorkshopSetItemPaymentRulesResponse {
    return {
      validationErrors: Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: CWorkshopSetItemPaymentRulesResponse): unknown {
    const obj: any = {};
    if (message.validationErrors) {
      obj.validationErrors = message.validationErrors.map((e) => e);
    } else {
      obj.validationErrors = [];
    }
    return obj;
  },
};

function createBaseCCommunityClanAnnouncementInfo(): CCommunityClanAnnouncementInfo {
  return {
    gid: "0",
    clanid: "0",
    posterid: "0",
    headline: "",
    posttime: 0,
    updatetime: 0,
    body: "",
    commentcount: 0,
    tags: [],
    language: 0,
    hidden: false,
    forumTopicId: "0",
  };
}

export const CCommunityClanAnnouncementInfo = {
  encode(message: CCommunityClanAnnouncementInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gid !== "0") {
      writer.uint32(8).uint64(message.gid);
    }
    if (message.clanid !== "0") {
      writer.uint32(16).uint64(message.clanid);
    }
    if (message.posterid !== "0") {
      writer.uint32(24).uint64(message.posterid);
    }
    if (message.headline !== "") {
      writer.uint32(34).string(message.headline);
    }
    if (message.posttime !== 0) {
      writer.uint32(40).uint32(message.posttime);
    }
    if (message.updatetime !== 0) {
      writer.uint32(48).uint32(message.updatetime);
    }
    if (message.body !== "") {
      writer.uint32(58).string(message.body);
    }
    if (message.commentcount !== 0) {
      writer.uint32(64).int32(message.commentcount);
    }
    for (const v of message.tags) {
      writer.uint32(74).string(v!);
    }
    if (message.language !== 0) {
      writer.uint32(80).int32(message.language);
    }
    if (message.hidden === true) {
      writer.uint32(88).bool(message.hidden);
    }
    if (message.forumTopicId !== "0") {
      writer.uint32(97).fixed64(message.forumTopicId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCommunityClanAnnouncementInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCommunityClanAnnouncementInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.gid = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.clanid = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.posterid = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.headline = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.posttime = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.updatetime = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.body = reader.string();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.commentcount = reader.int32();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.language = reader.int32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.hidden = reader.bool();
          continue;
        case 12:
          if (tag != 97) {
            break;
          }

          message.forumTopicId = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCommunityClanAnnouncementInfo {
    return {
      gid: isSet(object.gid) ? String(object.gid) : "0",
      clanid: isSet(object.clanid) ? String(object.clanid) : "0",
      posterid: isSet(object.posterid) ? String(object.posterid) : "0",
      headline: isSet(object.headline) ? String(object.headline) : "",
      posttime: isSet(object.posttime) ? Number(object.posttime) : 0,
      updatetime: isSet(object.updatetime) ? Number(object.updatetime) : 0,
      body: isSet(object.body) ? String(object.body) : "",
      commentcount: isSet(object.commentcount) ? Number(object.commentcount) : 0,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      language: isSet(object.language) ? Number(object.language) : 0,
      hidden: isSet(object.hidden) ? Boolean(object.hidden) : false,
      forumTopicId: isSet(object.forumTopicId) ? String(object.forumTopicId) : "0",
    };
  },

  toJSON(message: CCommunityClanAnnouncementInfo): unknown {
    const obj: any = {};
    message.gid !== undefined && (obj.gid = message.gid);
    message.clanid !== undefined && (obj.clanid = message.clanid);
    message.posterid !== undefined && (obj.posterid = message.posterid);
    message.headline !== undefined && (obj.headline = message.headline);
    message.posttime !== undefined && (obj.posttime = Math.round(message.posttime));
    message.updatetime !== undefined && (obj.updatetime = Math.round(message.updatetime));
    message.body !== undefined && (obj.body = message.body);
    message.commentcount !== undefined && (obj.commentcount = Math.round(message.commentcount));
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.language !== undefined && (obj.language = Math.round(message.language));
    message.hidden !== undefined && (obj.hidden = message.hidden);
    message.forumTopicId !== undefined && (obj.forumTopicId = message.forumTopicId);
    return obj;
  },
};

function createBaseCCommunityGetClanAnnouncementsRequest(): CCommunityGetClanAnnouncementsRequest {
  return {
    steamid: "0",
    offset: 0,
    count: 0,
    maxchars: 0,
    stripHtml: false,
    requiredTags: [],
    requireNoTags: false,
    languagePreference: [],
    hiddenOnly: false,
    onlyGid: false,
    rtimeOldestDate: 0,
    includeHidden: false,
    includePartnerEvents: false,
  };
}

export const CCommunityGetClanAnnouncementsRequest = {
  encode(message: CCommunityGetClanAnnouncementsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(8).uint64(message.steamid);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint32(message.offset);
    }
    if (message.count !== 0) {
      writer.uint32(24).uint32(message.count);
    }
    if (message.maxchars !== 0) {
      writer.uint32(32).uint32(message.maxchars);
    }
    if (message.stripHtml === true) {
      writer.uint32(40).bool(message.stripHtml);
    }
    for (const v of message.requiredTags) {
      writer.uint32(50).string(v!);
    }
    if (message.requireNoTags === true) {
      writer.uint32(56).bool(message.requireNoTags);
    }
    writer.uint32(66).fork();
    for (const v of message.languagePreference) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.hiddenOnly === true) {
      writer.uint32(72).bool(message.hiddenOnly);
    }
    if (message.onlyGid === true) {
      writer.uint32(80).bool(message.onlyGid);
    }
    if (message.rtimeOldestDate !== 0) {
      writer.uint32(88).uint32(message.rtimeOldestDate);
    }
    if (message.includeHidden === true) {
      writer.uint32(96).bool(message.includeHidden);
    }
    if (message.includePartnerEvents === true) {
      writer.uint32(104).bool(message.includePartnerEvents);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCommunityGetClanAnnouncementsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCommunityGetClanAnnouncementsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.steamid = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.offset = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.count = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.maxchars = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.stripHtml = reader.bool();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.requiredTags.push(reader.string());
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.requireNoTags = reader.bool();
          continue;
        case 8:
          if (tag == 64) {
            message.languagePreference.push(reader.uint32());
            continue;
          }

          if (tag == 66) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.languagePreference.push(reader.uint32());
            }

            continue;
          }

          break;
        case 9:
          if (tag != 72) {
            break;
          }

          message.hiddenOnly = reader.bool();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.onlyGid = reader.bool();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.rtimeOldestDate = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.includeHidden = reader.bool();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.includePartnerEvents = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCommunityGetClanAnnouncementsRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      count: isSet(object.count) ? Number(object.count) : 0,
      maxchars: isSet(object.maxchars) ? Number(object.maxchars) : 0,
      stripHtml: isSet(object.stripHtml) ? Boolean(object.stripHtml) : false,
      requiredTags: Array.isArray(object?.requiredTags) ? object.requiredTags.map((e: any) => String(e)) : [],
      requireNoTags: isSet(object.requireNoTags) ? Boolean(object.requireNoTags) : false,
      languagePreference: Array.isArray(object?.languagePreference)
        ? object.languagePreference.map((e: any) => Number(e))
        : [],
      hiddenOnly: isSet(object.hiddenOnly) ? Boolean(object.hiddenOnly) : false,
      onlyGid: isSet(object.onlyGid) ? Boolean(object.onlyGid) : false,
      rtimeOldestDate: isSet(object.rtimeOldestDate) ? Number(object.rtimeOldestDate) : 0,
      includeHidden: isSet(object.includeHidden) ? Boolean(object.includeHidden) : false,
      includePartnerEvents: isSet(object.includePartnerEvents) ? Boolean(object.includePartnerEvents) : false,
    };
  },

  toJSON(message: CCommunityGetClanAnnouncementsRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.maxchars !== undefined && (obj.maxchars = Math.round(message.maxchars));
    message.stripHtml !== undefined && (obj.stripHtml = message.stripHtml);
    if (message.requiredTags) {
      obj.requiredTags = message.requiredTags.map((e) => e);
    } else {
      obj.requiredTags = [];
    }
    message.requireNoTags !== undefined && (obj.requireNoTags = message.requireNoTags);
    if (message.languagePreference) {
      obj.languagePreference = message.languagePreference.map((e) => Math.round(e));
    } else {
      obj.languagePreference = [];
    }
    message.hiddenOnly !== undefined && (obj.hiddenOnly = message.hiddenOnly);
    message.onlyGid !== undefined && (obj.onlyGid = message.onlyGid);
    message.rtimeOldestDate !== undefined && (obj.rtimeOldestDate = Math.round(message.rtimeOldestDate));
    message.includeHidden !== undefined && (obj.includeHidden = message.includeHidden);
    message.includePartnerEvents !== undefined && (obj.includePartnerEvents = message.includePartnerEvents);
    return obj;
  },
};

function createBaseCCommunityGetClanAnnouncementsResponse(): CCommunityGetClanAnnouncementsResponse {
  return { maxchars: 0, stripHtml: false, announcements: [] };
}

export const CCommunityGetClanAnnouncementsResponse = {
  encode(message: CCommunityGetClanAnnouncementsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxchars !== 0) {
      writer.uint32(8).uint32(message.maxchars);
    }
    if (message.stripHtml === true) {
      writer.uint32(16).bool(message.stripHtml);
    }
    for (const v of message.announcements) {
      CCommunityClanAnnouncementInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCommunityGetClanAnnouncementsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCommunityGetClanAnnouncementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.maxchars = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.stripHtml = reader.bool();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.announcements.push(CCommunityClanAnnouncementInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCommunityGetClanAnnouncementsResponse {
    return {
      maxchars: isSet(object.maxchars) ? Number(object.maxchars) : 0,
      stripHtml: isSet(object.stripHtml) ? Boolean(object.stripHtml) : false,
      announcements: Array.isArray(object?.announcements)
        ? object.announcements.map((e: any) => CCommunityClanAnnouncementInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CCommunityGetClanAnnouncementsResponse): unknown {
    const obj: any = {};
    message.maxchars !== undefined && (obj.maxchars = Math.round(message.maxchars));
    message.stripHtml !== undefined && (obj.stripHtml = message.stripHtml);
    if (message.announcements) {
      obj.announcements = message.announcements.map((e) => e ? CCommunityClanAnnouncementInfo.toJSON(e) : undefined);
    } else {
      obj.announcements = [];
    }
    return obj;
  },
};

function createBaseCBroadcastPostGameDataFrameRequest(): CBroadcastPostGameDataFrameRequest {
  return { appid: 0, steamid: "0", broadcastId: "0", frameData: Buffer.alloc(0) };
}

export const CBroadcastPostGameDataFrameRequest = {
  encode(message: CBroadcastPostGameDataFrameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.steamid !== "0") {
      writer.uint32(17).fixed64(message.steamid);
    }
    if (message.broadcastId !== "0") {
      writer.uint32(25).fixed64(message.broadcastId);
    }
    if (message.frameData.length !== 0) {
      writer.uint32(34).bytes(message.frameData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastPostGameDataFrameRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastPostGameDataFrameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.appid = reader.uint32();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.steamid = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.broadcastId = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.frameData = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CBroadcastPostGameDataFrameRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      broadcastId: isSet(object.broadcastId) ? String(object.broadcastId) : "0",
      frameData: isSet(object.frameData) ? Buffer.from(bytesFromBase64(object.frameData)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CBroadcastPostGameDataFrameRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.broadcastId !== undefined && (obj.broadcastId = message.broadcastId);
    message.frameData !== undefined &&
      (obj.frameData = base64FromBytes(message.frameData !== undefined ? message.frameData : Buffer.alloc(0)));
    return obj;
  },
};

function createBaseCMsgSerializedSOCache(): CMsgSerializedSOCache {
  return { fileVersion: 0, caches: [], gcSocacheFileVersion: 0 };
}

export const CMsgSerializedSOCache = {
  encode(message: CMsgSerializedSOCache, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fileVersion !== 0) {
      writer.uint32(8).uint32(message.fileVersion);
    }
    for (const v of message.caches) {
      CMsgSerializedSOCache_Cache.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.gcSocacheFileVersion !== 0) {
      writer.uint32(24).uint32(message.gcSocacheFileVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSerializedSOCache {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSerializedSOCache();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.fileVersion = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.caches.push(CMsgSerializedSOCache_Cache.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.gcSocacheFileVersion = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSerializedSOCache {
    return {
      fileVersion: isSet(object.fileVersion) ? Number(object.fileVersion) : 0,
      caches: Array.isArray(object?.caches)
        ? object.caches.map((e: any) => CMsgSerializedSOCache_Cache.fromJSON(e))
        : [],
      gcSocacheFileVersion: isSet(object.gcSocacheFileVersion) ? Number(object.gcSocacheFileVersion) : 0,
    };
  },

  toJSON(message: CMsgSerializedSOCache): unknown {
    const obj: any = {};
    message.fileVersion !== undefined && (obj.fileVersion = Math.round(message.fileVersion));
    if (message.caches) {
      obj.caches = message.caches.map((e) => e ? CMsgSerializedSOCache_Cache.toJSON(e) : undefined);
    } else {
      obj.caches = [];
    }
    message.gcSocacheFileVersion !== undefined && (obj.gcSocacheFileVersion = Math.round(message.gcSocacheFileVersion));
    return obj;
  },
};

function createBaseCMsgSerializedSOCache_TypeCache(): CMsgSerializedSOCache_TypeCache {
  return { type: 0, objects: [], serviceId: 0 };
}

export const CMsgSerializedSOCache_TypeCache = {
  encode(message: CMsgSerializedSOCache_TypeCache, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).uint32(message.type);
    }
    for (const v of message.objects) {
      writer.uint32(18).bytes(v!);
    }
    if (message.serviceId !== 0) {
      writer.uint32(24).uint32(message.serviceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSerializedSOCache_TypeCache {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSerializedSOCache_TypeCache();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.type = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.objects.push(reader.bytes() as Buffer);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.serviceId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSerializedSOCache_TypeCache {
    return {
      type: isSet(object.type) ? Number(object.type) : 0,
      objects: Array.isArray(object?.objects) ? object.objects.map((e: any) => Buffer.from(bytesFromBase64(e))) : [],
      serviceId: isSet(object.serviceId) ? Number(object.serviceId) : 0,
    };
  },

  toJSON(message: CMsgSerializedSOCache_TypeCache): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = Math.round(message.type));
    if (message.objects) {
      obj.objects = message.objects.map((e) => base64FromBytes(e !== undefined ? e : Buffer.alloc(0)));
    } else {
      obj.objects = [];
    }
    message.serviceId !== undefined && (obj.serviceId = Math.round(message.serviceId));
    return obj;
  },
};

function createBaseCMsgSerializedSOCache_Cache(): CMsgSerializedSOCache_Cache {
  return { type: 0, id: "0", versions: [], typeCaches: [] };
}

export const CMsgSerializedSOCache_Cache = {
  encode(message: CMsgSerializedSOCache_Cache, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).uint32(message.type);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    for (const v of message.versions) {
      CMsgSerializedSOCache_Cache_Version.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.typeCaches) {
      CMsgSerializedSOCache_TypeCache.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSerializedSOCache_Cache {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSerializedSOCache_Cache();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.type = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.id = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.versions.push(CMsgSerializedSOCache_Cache_Version.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.typeCaches.push(CMsgSerializedSOCache_TypeCache.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSerializedSOCache_Cache {
    return {
      type: isSet(object.type) ? Number(object.type) : 0,
      id: isSet(object.id) ? String(object.id) : "0",
      versions: Array.isArray(object?.versions)
        ? object.versions.map((e: any) => CMsgSerializedSOCache_Cache_Version.fromJSON(e))
        : [],
      typeCaches: Array.isArray(object?.typeCaches)
        ? object.typeCaches.map((e: any) => CMsgSerializedSOCache_TypeCache.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSerializedSOCache_Cache): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.id !== undefined && (obj.id = message.id);
    if (message.versions) {
      obj.versions = message.versions.map((e) => e ? CMsgSerializedSOCache_Cache_Version.toJSON(e) : undefined);
    } else {
      obj.versions = [];
    }
    if (message.typeCaches) {
      obj.typeCaches = message.typeCaches.map((e) => e ? CMsgSerializedSOCache_TypeCache.toJSON(e) : undefined);
    } else {
      obj.typeCaches = [];
    }
    return obj;
  },
};

function createBaseCMsgSerializedSOCache_Cache_Version(): CMsgSerializedSOCache_Cache_Version {
  return { service: 0, version: "0" };
}

export const CMsgSerializedSOCache_Cache_Version = {
  encode(message: CMsgSerializedSOCache_Cache_Version, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== 0) {
      writer.uint32(8).uint32(message.service);
    }
    if (message.version !== "0") {
      writer.uint32(16).uint64(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSerializedSOCache_Cache_Version {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSerializedSOCache_Cache_Version();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.service = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.version = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSerializedSOCache_Cache_Version {
    return {
      service: isSet(object.service) ? Number(object.service) : 0,
      version: isSet(object.version) ? String(object.version) : "0",
    };
  },

  toJSON(message: CMsgSerializedSOCache_Cache_Version): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = Math.round(message.service));
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },
};

function createBaseCMsgGCToClientPollConvarRequest(): CMsgGCToClientPollConvarRequest {
  return { convarName: "", pollId: 0 };
}

export const CMsgGCToClientPollConvarRequest = {
  encode(message: CMsgGCToClientPollConvarRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.convarName !== "") {
      writer.uint32(10).string(message.convarName);
    }
    if (message.pollId !== 0) {
      writer.uint32(16).uint32(message.pollId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientPollConvarRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientPollConvarRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.convarName = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.pollId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToClientPollConvarRequest {
    return {
      convarName: isSet(object.convarName) ? String(object.convarName) : "",
      pollId: isSet(object.pollId) ? Number(object.pollId) : 0,
    };
  },

  toJSON(message: CMsgGCToClientPollConvarRequest): unknown {
    const obj: any = {};
    message.convarName !== undefined && (obj.convarName = message.convarName);
    message.pollId !== undefined && (obj.pollId = Math.round(message.pollId));
    return obj;
  },
};

function createBaseCMsgGCToClientPollConvarResponse(): CMsgGCToClientPollConvarResponse {
  return { pollId: 0, convarValue: "" };
}

export const CMsgGCToClientPollConvarResponse = {
  encode(message: CMsgGCToClientPollConvarResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pollId !== 0) {
      writer.uint32(8).uint32(message.pollId);
    }
    if (message.convarValue !== "") {
      writer.uint32(18).string(message.convarValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientPollConvarResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientPollConvarResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.pollId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.convarValue = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToClientPollConvarResponse {
    return {
      pollId: isSet(object.pollId) ? Number(object.pollId) : 0,
      convarValue: isSet(object.convarValue) ? String(object.convarValue) : "",
    };
  },

  toJSON(message: CMsgGCToClientPollConvarResponse): unknown {
    const obj: any = {};
    message.pollId !== undefined && (obj.pollId = Math.round(message.pollId));
    message.convarValue !== undefined && (obj.convarValue = message.convarValue);
    return obj;
  },
};

function createBaseCGCMsgCompressedMsgToClient(): CGCMsgCompressedMsgToClient {
  return { msgId: 0, compressedMsg: Buffer.alloc(0) };
}

export const CGCMsgCompressedMsgToClient = {
  encode(message: CGCMsgCompressedMsgToClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgId !== 0) {
      writer.uint32(8).uint32(message.msgId);
    }
    if (message.compressedMsg.length !== 0) {
      writer.uint32(18).bytes(message.compressedMsg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCMsgCompressedMsgToClient {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgCompressedMsgToClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.msgId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.compressedMsg = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CGCMsgCompressedMsgToClient {
    return {
      msgId: isSet(object.msgId) ? Number(object.msgId) : 0,
      compressedMsg: isSet(object.compressedMsg) ? Buffer.from(bytesFromBase64(object.compressedMsg)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CGCMsgCompressedMsgToClient): unknown {
    const obj: any = {};
    message.msgId !== undefined && (obj.msgId = Math.round(message.msgId));
    message.compressedMsg !== undefined &&
      (obj.compressedMsg = base64FromBytes(
        message.compressedMsg !== undefined ? message.compressedMsg : Buffer.alloc(0),
      ));
    return obj;
  },
};

function createBaseCMsgGCToGCMasterBroadcastMessage(): CMsgGCToGCMasterBroadcastMessage {
  return { usersPerSecond: 0, sendToUsers: false, sendToServers: false, msgId: 0, msgData: Buffer.alloc(0) };
}

export const CMsgGCToGCMasterBroadcastMessage = {
  encode(message: CMsgGCToGCMasterBroadcastMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.usersPerSecond !== 0) {
      writer.uint32(8).uint32(message.usersPerSecond);
    }
    if (message.sendToUsers === true) {
      writer.uint32(16).bool(message.sendToUsers);
    }
    if (message.sendToServers === true) {
      writer.uint32(24).bool(message.sendToServers);
    }
    if (message.msgId !== 0) {
      writer.uint32(32).uint32(message.msgId);
    }
    if (message.msgData.length !== 0) {
      writer.uint32(42).bytes(message.msgData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCMasterBroadcastMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCMasterBroadcastMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.usersPerSecond = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.sendToUsers = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.sendToServers = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.msgId = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.msgData = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToGCMasterBroadcastMessage {
    return {
      usersPerSecond: isSet(object.usersPerSecond) ? Number(object.usersPerSecond) : 0,
      sendToUsers: isSet(object.sendToUsers) ? Boolean(object.sendToUsers) : false,
      sendToServers: isSet(object.sendToServers) ? Boolean(object.sendToServers) : false,
      msgId: isSet(object.msgId) ? Number(object.msgId) : 0,
      msgData: isSet(object.msgData) ? Buffer.from(bytesFromBase64(object.msgData)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgGCToGCMasterBroadcastMessage): unknown {
    const obj: any = {};
    message.usersPerSecond !== undefined && (obj.usersPerSecond = Math.round(message.usersPerSecond));
    message.sendToUsers !== undefined && (obj.sendToUsers = message.sendToUsers);
    message.sendToServers !== undefined && (obj.sendToServers = message.sendToServers);
    message.msgId !== undefined && (obj.msgId = Math.round(message.msgId));
    message.msgData !== undefined &&
      (obj.msgData = base64FromBytes(message.msgData !== undefined ? message.msgData : Buffer.alloc(0)));
    return obj;
  },
};

function createBaseCMsgGCToGCMasterSubscribeToCache(): CMsgGCToGCMasterSubscribeToCache {
  return { soidType: 0, soidId: "0", accountIds: [], steamIds: [] };
}

export const CMsgGCToGCMasterSubscribeToCache = {
  encode(message: CMsgGCToGCMasterSubscribeToCache, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.soidType !== 0) {
      writer.uint32(8).uint32(message.soidType);
    }
    if (message.soidId !== "0") {
      writer.uint32(17).fixed64(message.soidId);
    }
    writer.uint32(26).fork();
    for (const v of message.accountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.steamIds) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCMasterSubscribeToCache {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCMasterSubscribeToCache();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.soidType = reader.uint32();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.soidId = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag == 24) {
            message.accountIds.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 4:
          if (tag == 33) {
            message.steamIds.push(longToString(reader.fixed64() as Long));
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.steamIds.push(longToString(reader.fixed64() as Long));
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

  fromJSON(object: any): CMsgGCToGCMasterSubscribeToCache {
    return {
      soidType: isSet(object.soidType) ? Number(object.soidType) : 0,
      soidId: isSet(object.soidId) ? String(object.soidId) : "0",
      accountIds: Array.isArray(object?.accountIds) ? object.accountIds.map((e: any) => Number(e)) : [],
      steamIds: Array.isArray(object?.steamIds) ? object.steamIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CMsgGCToGCMasterSubscribeToCache): unknown {
    const obj: any = {};
    message.soidType !== undefined && (obj.soidType = Math.round(message.soidType));
    message.soidId !== undefined && (obj.soidId = message.soidId);
    if (message.accountIds) {
      obj.accountIds = message.accountIds.map((e) => Math.round(e));
    } else {
      obj.accountIds = [];
    }
    if (message.steamIds) {
      obj.steamIds = message.steamIds.map((e) => e);
    } else {
      obj.steamIds = [];
    }
    return obj;
  },
};

function createBaseCMsgGCToGCMasterSubscribeToCacheResponse(): CMsgGCToGCMasterSubscribeToCacheResponse {
  return {};
}

export const CMsgGCToGCMasterSubscribeToCacheResponse = {
  encode(_: CMsgGCToGCMasterSubscribeToCacheResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCMasterSubscribeToCacheResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCMasterSubscribeToCacheResponse();
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

  fromJSON(_: any): CMsgGCToGCMasterSubscribeToCacheResponse {
    return {};
  },

  toJSON(_: CMsgGCToGCMasterSubscribeToCacheResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgGCToGCMasterSubscribeToCacheAsync(): CMsgGCToGCMasterSubscribeToCacheAsync {
  return { subscribeMsg: undefined };
}

export const CMsgGCToGCMasterSubscribeToCacheAsync = {
  encode(message: CMsgGCToGCMasterSubscribeToCacheAsync, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscribeMsg !== undefined) {
      CMsgGCToGCMasterSubscribeToCache.encode(message.subscribeMsg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCMasterSubscribeToCacheAsync {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCMasterSubscribeToCacheAsync();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.subscribeMsg = CMsgGCToGCMasterSubscribeToCache.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToGCMasterSubscribeToCacheAsync {
    return {
      subscribeMsg: isSet(object.subscribeMsg)
        ? CMsgGCToGCMasterSubscribeToCache.fromJSON(object.subscribeMsg)
        : undefined,
    };
  },

  toJSON(message: CMsgGCToGCMasterSubscribeToCacheAsync): unknown {
    const obj: any = {};
    message.subscribeMsg !== undefined && (obj.subscribeMsg = message.subscribeMsg
      ? CMsgGCToGCMasterSubscribeToCache.toJSON(message.subscribeMsg)
      : undefined);
    return obj;
  },
};

function createBaseCMsgGCToGCMasterUnsubscribeFromCache(): CMsgGCToGCMasterUnsubscribeFromCache {
  return { soidType: 0, soidId: "0", accountIds: [], steamIds: [] };
}

export const CMsgGCToGCMasterUnsubscribeFromCache = {
  encode(message: CMsgGCToGCMasterUnsubscribeFromCache, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.soidType !== 0) {
      writer.uint32(8).uint32(message.soidType);
    }
    if (message.soidId !== "0") {
      writer.uint32(17).fixed64(message.soidId);
    }
    writer.uint32(26).fork();
    for (const v of message.accountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.steamIds) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCMasterUnsubscribeFromCache {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCMasterUnsubscribeFromCache();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.soidType = reader.uint32();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.soidId = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag == 24) {
            message.accountIds.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 4:
          if (tag == 33) {
            message.steamIds.push(longToString(reader.fixed64() as Long));
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.steamIds.push(longToString(reader.fixed64() as Long));
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

  fromJSON(object: any): CMsgGCToGCMasterUnsubscribeFromCache {
    return {
      soidType: isSet(object.soidType) ? Number(object.soidType) : 0,
      soidId: isSet(object.soidId) ? String(object.soidId) : "0",
      accountIds: Array.isArray(object?.accountIds) ? object.accountIds.map((e: any) => Number(e)) : [],
      steamIds: Array.isArray(object?.steamIds) ? object.steamIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CMsgGCToGCMasterUnsubscribeFromCache): unknown {
    const obj: any = {};
    message.soidType !== undefined && (obj.soidType = Math.round(message.soidType));
    message.soidId !== undefined && (obj.soidId = message.soidId);
    if (message.accountIds) {
      obj.accountIds = message.accountIds.map((e) => Math.round(e));
    } else {
      obj.accountIds = [];
    }
    if (message.steamIds) {
      obj.steamIds = message.steamIds.map((e) => e);
    } else {
      obj.steamIds = [];
    }
    return obj;
  },
};

function createBaseCMsgGCToGCMasterDestroyCache(): CMsgGCToGCMasterDestroyCache {
  return { soidType: 0, soidId: "0" };
}

export const CMsgGCToGCMasterDestroyCache = {
  encode(message: CMsgGCToGCMasterDestroyCache, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.soidType !== 0) {
      writer.uint32(8).uint32(message.soidType);
    }
    if (message.soidId !== "0") {
      writer.uint32(17).fixed64(message.soidId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCMasterDestroyCache {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCMasterDestroyCache();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.soidType = reader.uint32();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.soidId = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToGCMasterDestroyCache {
    return {
      soidType: isSet(object.soidType) ? Number(object.soidType) : 0,
      soidId: isSet(object.soidId) ? String(object.soidId) : "0",
    };
  },

  toJSON(message: CMsgGCToGCMasterDestroyCache): unknown {
    const obj: any = {};
    message.soidType !== undefined && (obj.soidType = Math.round(message.soidType));
    message.soidId !== undefined && (obj.soidId = message.soidId);
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
