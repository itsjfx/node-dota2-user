/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export enum EMobilePaymentProvider {
  k_EMobilePaymentProvider_Invalid = 0,
  k_EMobilePaymentProvider_GooglePlay = 1,
  k_EMobilePaymentProvider_AppleAppStore = 2,
}

export interface CMsgWebAPIKey {
  status: number;
  accountId: number;
  publisherGroupId: number;
  keyId: number;
  domain: string;
}

export interface CMsgHttpRequest {
  requestMethod: number;
  hostname: string;
  url: string;
  headers: CMsgHttpRequest_RequestHeader[];
  getParams: CMsgHttpRequest_QueryParam[];
  postParams: CMsgHttpRequest_QueryParam[];
  body: Buffer;
  absoluteTimeout: number;
  useHttps: boolean;
}

export interface CMsgHttpRequest_RequestHeader {
  name: string;
  value: string;
}

export interface CMsgHttpRequest_QueryParam {
  name: string;
  value: Buffer;
}

export interface CMsgWebAPIRequest {
  interfaceName: string;
  methodName: string;
  version: number;
  apiKey: CMsgWebAPIKey | undefined;
  request: CMsgHttpRequest | undefined;
  routingAppId: number;
}

export interface CMsgHttpResponse {
  statusCode: number;
  headers: CMsgHttpResponse_ResponseHeader[];
  body: Buffer;
}

export interface CMsgHttpResponse_ResponseHeader {
  name: string;
  value: string;
}

export interface CMsgAMFindAccounts {
  searchType: number;
  searchString: string;
}

export interface CMsgAMFindAccountsResponse {
  steamId: string[];
}

export interface CMsgNotifyWatchdog {
  source: number;
  alertType: number;
  critical: boolean;
  time: number;
  appid: number;
  text: string;
  recipient: string;
}

export interface CMsgAMGetLicenses {
  steamid: string;
}

export interface CMsgPackageLicense {
  packageId: number;
  timeCreated: number;
  ownerId: number;
}

export interface CMsgAMGetLicensesResponse {
  license: CMsgPackageLicense[];
  result: number;
}

export interface CMsgAMGetUserGameStats {
  steamId: string;
  gameId: string;
  stats: number[];
}

export interface CMsgAMGetUserGameStatsResponse {
  steamId: string;
  gameId: string;
  eresult: number;
  stats: CMsgAMGetUserGameStatsResponse_Stats[];
  achievementBlocks: CMsgAMGetUserGameStatsResponse_AchievementBlocks[];
}

export interface CMsgAMGetUserGameStatsResponse_Stats {
  statId: number;
  statValue: number;
}

export interface CMsgAMGetUserGameStatsResponse_AchievementBlocks {
  achievementId: number;
  achievementBitId: number;
  unlockTime: number;
}

export interface CMsgGCGetCommandList {
  appId: number;
  commandPrefix: string;
}

export interface CMsgGCGetCommandListResponse {
  commandName: string[];
}

export interface CGCMsgMemCachedGet {
  keys: string[];
}

export interface CGCMsgMemCachedGetResponse {
  values: CGCMsgMemCachedGetResponse_ValueTag[];
}

export interface CGCMsgMemCachedGetResponse_ValueTag {
  found: boolean;
  value: Buffer;
}

export interface CGCMsgMemCachedSet {
  keys: CGCMsgMemCachedSet_KeyPair[];
}

export interface CGCMsgMemCachedSet_KeyPair {
  name: string;
  value: Buffer;
}

export interface CGCMsgMemCachedDelete {
  keys: string[];
}

export interface CGCMsgMemCachedStats {
}

export interface CGCMsgMemCachedStatsResponse {
  currConnections: string;
  cmdGet: string;
  cmdSet: string;
  cmdFlush: string;
  getHits: string;
  getMisses: string;
  deleteHits: string;
  deleteMisses: string;
  bytesRead: string;
  bytesWritten: string;
  limitMaxbytes: string;
  currItems: string;
  evictions: string;
  bytes: string;
}

export interface CGCMsgSQLStats {
  schemaCatalog: number;
}

export interface CGCMsgSQLStatsResponse {
  threads: number;
  threadsConnected: number;
  threadsActive: number;
  operationsSubmitted: number;
  preparedStatementsExecuted: number;
  nonPreparedStatementsExecuted: number;
  deadlockRetries: number;
  operationsTimedOutInQueue: number;
  errors: number;
}

export interface CMsgAMAddFreeLicense {
  steamid: string;
  ipPublic: number;
  packageid: number;
  storeCountryCode: string;
}

export interface CMsgAMAddFreeLicenseResponse {
  eresult: number;
  purchaseResultDetail: number;
  transid: string;
}

export interface CGCMsgGetIPLocation {
  ips: number[];
}

export interface CGCMsgGetIPASN {
  ips: number[];
}

export interface CIPASNInfo {
  ip: number;
  asn: number;
}

export interface CGCMsgGetIPASNResponse {
  infos: CIPASNInfo[];
}

export interface CGCMsgSystemStatsSchema {
  gcAppId: number;
  schemaKv: Buffer;
}

export interface CGCMsgGetSystemStats {
}

export interface CGCMsgGetSystemStatsResponse {
  gcAppId: number;
  statsKv: Buffer;
  activeJobs: number;
  yieldingJobs: number;
  userSessions: number;
  gameServerSessions: number;
  socaches: number;
  socachesToUnload: number;
  socachesLoading: number;
  writebackQueue: number;
  steamidLocks: number;
  logonQueue: number;
  logonJobs: number;
}

export interface CMsgAMSendEmail {
  steamid: string;
  emailMsgType: number;
  emailFormat: number;
  personaNameTokens: CMsgAMSendEmail_PersonaNameReplacementToken[];
  sourceGc: number;
  tokens: CMsgAMSendEmail_ReplacementToken[];
}

export interface CMsgAMSendEmail_ReplacementToken {
  tokenName: string;
  tokenValue: string;
}

export interface CMsgAMSendEmail_PersonaNameReplacementToken {
  steamid: string;
  tokenName: string;
}

export interface CMsgAMSendEmailResponse {
  eresult: number;
}

export interface CMsgGCGetEmailTemplate {
  appId: number;
  emailMsgType: number;
  emailLang: number;
  emailFormat: number;
}

export interface CMsgGCGetEmailTemplateResponse {
  eresult: number;
  templateExists: boolean;
  template: string;
}

export interface CMsgAMGrantGuestPasses2 {
  steamId: string;
  packageId: number;
  passesToGrant: number;
  daysToExpiration: number;
  action: number;
}

export interface CMsgAMGrantGuestPasses2Response {
  eresult: number;
  passesGranted: number;
}

export interface CMsgGCGetPersonaNames {
  steamids: string[];
}

export interface CMsgGCGetPersonaNamesResponse {
  succeededLookups: CMsgGCGetPersonaNamesResponse_PersonaName[];
  failedLookupSteamids: string[];
}

export interface CMsgGCGetPersonaNamesResponse_PersonaName {
  steamid: string;
  personaName: string;
}

export interface CMsgGCCheckFriendship {
  steamidLeft: string;
  steamidRight: string;
}

export interface CMsgGCCheckFriendshipResponse {
  success: boolean;
  foundFriendship: boolean;
}

export interface CMsgGCGetAppFriendsList {
  steamid: string;
  includeFriendshipTimestamps: boolean;
}

export interface CMsgGCGetAppFriendsListResponse {
  success: boolean;
  steamids: string[];
  friendshipTimestamps: number[];
  lastPlaytimes: number[];
}

export interface CMsgGCMsgMasterSetDirectory {
  masterDirIndex: number;
  dir: CMsgGCMsgMasterSetDirectory_SubGC[];
}

export interface CMsgGCMsgMasterSetDirectory_SubGC {
  dirIndex: number;
  name: string;
  box: string;
  commandLine: string;
  gcBinary: string;
}

export interface CMsgGCMsgMasterSetDirectoryResponse {
  eresult: number;
  message: string;
}

export interface CMsgGCMsgWebAPIJobRequestForwardResponse {
  dirIndex: number;
}

export interface CGCSystemMsgGetPurchaseTrustRequest {
  steamid: string;
}

export interface CGCSystemMsgGetPurchaseTrustResponse {
  hasPriorPurchaseHistory: boolean;
  hasNoRecentPasswordResets: boolean;
  isWalletCashTrusted: boolean;
  timeAllTrusted: number;
}

export interface CMsgGCHAccountVacStatusChange {
  steamId: string;
  appId: number;
  rtimeVacbanStarts: number;
  isBannedNow: boolean;
  isBannedFuture: boolean;
}

export interface CMsgGCGetPartnerAccountLink {
  steamid: string;
}

export interface CMsgGCGetPartnerAccountLinkResponse {
  pwid: number;
  nexonid: number;
  ageclass: number;
  idVerified: boolean;
  isAdult: boolean;
}

export interface CMsgGCRoutingInfo {
  dirIndex: number[];
  method: CMsgGCRoutingInfo_RoutingMethod;
  fallback: CMsgGCRoutingInfo_RoutingMethod;
  protobufField: number;
  webapiParam: string;
}

export enum CMsgGCRoutingInfo_RoutingMethod {
  RANDOM = 0,
  DISCARD = 1,
  CLIENT_STEAMID = 2,
  PROTOBUF_FIELD_UINT64 = 3,
  WEBAPI_PARAM = 4,
  WEBAPI_PARAM_STEAMID_ACCOUNTID = 5,
}

export interface CMsgGCMsgMasterSetWebAPIRouting {
  entries: CMsgGCMsgMasterSetWebAPIRouting_Entry[];
}

export interface CMsgGCMsgMasterSetWebAPIRouting_Entry {
  interfaceName: string;
  methodName: string;
  routing: CMsgGCRoutingInfo | undefined;
}

export interface CMsgGCMsgMasterSetClientMsgRouting {
  entries: CMsgGCMsgMasterSetClientMsgRouting_Entry[];
}

export interface CMsgGCMsgMasterSetClientMsgRouting_Entry {
  msgType: number;
  routing: CMsgGCRoutingInfo | undefined;
}

export interface CMsgGCMsgMasterSetWebAPIRoutingResponse {
  eresult: number;
}

export interface CMsgGCMsgMasterSetClientMsgRoutingResponse {
  eresult: number;
}

export interface CMsgGCMsgSetOptions {
  options: CMsgGCMsgSetOptions_Option[];
  clientMsgRanges: CMsgGCMsgSetOptions_MessageRange[];
  gcsqlVersion: CMsgGCMsgSetOptions_GCSQLVersion;
}

export enum CMsgGCMsgSetOptions_Option {
  NOTIFY_USER_SESSIONS = 0,
  NOTIFY_SERVER_SESSIONS = 1,
  NOTIFY_ACHIEVEMENTS = 2,
  NOTIFY_VAC_ACTION = 3,
}

export enum CMsgGCMsgSetOptions_GCSQLVersion {
  GCSQL_VERSION_BASELINE = 1,
  GCSQL_VERSION_BOOLTYPE = 2,
}

export interface CMsgGCMsgSetOptions_MessageRange {
  low: number;
  high: number;
}

export interface CMsgGCHUpdateSession {
  steamId: string;
  appId: number;
  online: boolean;
  serverSteamId: string;
  serverAddr: number;
  serverPort: number;
  osType: number;
  clientAddr: number;
  extraFields: CMsgGCHUpdateSession_ExtraField[];
}

export interface CMsgGCHUpdateSession_ExtraField {
  name: string;
  value: string;
}

export interface CMsgNotificationOfSuspiciousActivity {
  steamid: string;
  appid: number;
  multipleInstances: CMsgNotificationOfSuspiciousActivity_MultipleGameInstances | undefined;
}

export interface CMsgNotificationOfSuspiciousActivity_MultipleGameInstances {
  appInstanceCount: number;
  otherSteamids: string[];
}

export interface CMsgDPPartnerMicroTxns {
  appid: number;
  gcName: string;
  partner: CMsgDPPartnerMicroTxns_PartnerInfo | undefined;
  transactions: CMsgDPPartnerMicroTxns_PartnerMicroTxn[];
}

export interface CMsgDPPartnerMicroTxns_PartnerMicroTxn {
  initTime: number;
  lastUpdateTime: number;
  txnId: string;
  accountId: number;
  lineItem: number;
  itemId: string;
  defIndex: number;
  price: string;
  tax: string;
  priceUsd: string;
  taxUsd: string;
  purchaseType: number;
  steamTxnType: number;
  countryCode: string;
  regionCode: string;
  quantity: number;
  refTransId: string;
}

export interface CMsgDPPartnerMicroTxns_PartnerInfo {
  partnerId: number;
  partnerName: string;
  currencyCode: string;
  currencyName: string;
}

export interface CMsgDPPartnerMicroTxnsResponse {
  eresult: number;
  eerrorcode: CMsgDPPartnerMicroTxnsResponse_EErrorCode;
}

export enum CMsgDPPartnerMicroTxnsResponse_EErrorCode {
  k_MsgValid = 0,
  k_MsgInvalidAppID = 1,
  k_MsgInvalidPartnerInfo = 2,
  k_MsgNoTransactions = 3,
  k_MsgSQLFailure = 4,
  k_MsgPartnerInfoDiscrepancy = 5,
  k_MsgTransactionInsertFailed = 7,
  k_MsgAlreadyRunning = 8,
  k_MsgInvalidTransactionData = 9,
}

export interface CMsgGCHVacVerificationChange {
  steamid: string;
  appid: number;
  isVerified: boolean;
}

export interface CMsgGCHAccountTwoFactorChange {
  steamid: string;
  appid: number;
  twofactorEnabled: boolean;
}

export interface CMsgGCCheckClanMembership {
  steamid: string;
  clanid: number;
}

export interface CMsgGCCheckClanMembershipResponse {
  ismember: boolean;
}

export interface CMsgGCHAppCheersReceived {
  appid: number;
  cheerTargets: CMsgGCHAppCheersReceived_CheerTarget[];
}

export interface CMsgGCHAppCheersReceived_CheerTypeAmount {
  cheerType: number;
  cheerAmount: number;
}

export interface CMsgGCHAppCheersReceived_CheerTarget {
  cheerTarget: string;
  cheerTypes: CMsgGCHAppCheersReceived_CheerTypeAmount[];
}

export interface CMsgGCHAppCheersGetAllowedTypes {
  appid: number;
  cheerTarget: string;
}

export interface CMsgGCHAppCheersGetAllowedTypesResponse {
  cheerTypesValidAllUsers: number[];
  cheerRemaps: CMsgGCHAppCheersGetAllowedTypesResponse_CheerRemaps[];
  cacheDuration: number;
}

export interface CMsgGCHAppCheersGetAllowedTypesResponse_CheerRemaps {
  originalCheerType: number;
  remappedCheerType: number;
  accountIds: number[];
}

export interface CGCSystemMsgReportExternalPurchaseRequest {
  appid: number;
  steamid: string;
  provider: EMobilePaymentProvider;
  orderid: string;
  providerOrderid: string;
  amount: string;
  currency: string;
  quantity: number;
  itemid: number;
  itemDescription: string;
  language: string;
  category: string;
  timeCreated: number;
}

export interface CGCSystemMsgReportExternalPurchaseResponse {
  transid: string;
  orderid: string;
}

export interface CWorkshopAddSpecialPaymentRequest {
  appid: number;
  gameitemid: number;
  date: string;
  paymentUsUsd: string;
  paymentRowUsd: string;
}

export interface CWorkshopAddSpecialPaymentResponse {
}

export interface CWorkshopGetSpecialPaymentsRequest {
  appid: number;
  gameitemid: number;
  date: string;
}

export interface CWorkshopGetSpecialPaymentsResponse {
  specialPayments: CWorkshopGetSpecialPaymentsResponse_SpecialPayment[];
}

export interface CWorkshopGetSpecialPaymentsResponse_SpecialPayment {
  appid: number;
  gameitemid: number;
  date: string;
  netPaymentUsUsd: string;
  netPaymentRowUsd: string;
}

function createBaseCMsgWebAPIKey(): CMsgWebAPIKey {
  return { status: 0, accountId: 0, publisherGroupId: 0, keyId: 0, domain: "" };
}

export const CMsgWebAPIKey = {
  encode(message: CMsgWebAPIKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).uint32(message.status);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint32(message.accountId);
    }
    if (message.publisherGroupId !== 0) {
      writer.uint32(24).uint32(message.publisherGroupId);
    }
    if (message.keyId !== 0) {
      writer.uint32(32).uint32(message.keyId);
    }
    if (message.domain !== "") {
      writer.uint32(42).string(message.domain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgWebAPIKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgWebAPIKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.status = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.publisherGroupId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.keyId = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.domain = reader.string();
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

function createBaseCMsgHttpRequest(): CMsgHttpRequest {
  return {
    requestMethod: 0,
    hostname: "",
    url: "",
    headers: [],
    getParams: [],
    postParams: [],
    body: Buffer.alloc(0),
    absoluteTimeout: 0,
    useHttps: false,
  };
}

export const CMsgHttpRequest = {
  encode(message: CMsgHttpRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestMethod !== 0) {
      writer.uint32(8).uint32(message.requestMethod);
    }
    if (message.hostname !== "") {
      writer.uint32(18).string(message.hostname);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    for (const v of message.headers) {
      CMsgHttpRequest_RequestHeader.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.getParams) {
      CMsgHttpRequest_QueryParam.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.postParams) {
      CMsgHttpRequest_QueryParam.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.body.length !== 0) {
      writer.uint32(58).bytes(message.body);
    }
    if (message.absoluteTimeout !== 0) {
      writer.uint32(64).uint32(message.absoluteTimeout);
    }
    if (message.useHttps === true) {
      writer.uint32(72).bool(message.useHttps);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHttpRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHttpRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.requestMethod = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.hostname = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.url = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.headers.push(CMsgHttpRequest_RequestHeader.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.getParams.push(CMsgHttpRequest_QueryParam.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.postParams.push(CMsgHttpRequest_QueryParam.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.body = reader.bytes() as Buffer;
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.absoluteTimeout = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.useHttps = reader.bool();
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

function createBaseCMsgHttpRequest_RequestHeader(): CMsgHttpRequest_RequestHeader {
  return { name: "", value: "" };
}

export const CMsgHttpRequest_RequestHeader = {
  encode(message: CMsgHttpRequest_RequestHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHttpRequest_RequestHeader {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHttpRequest_RequestHeader();
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

          message.value = reader.string();
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

function createBaseCMsgHttpRequest_QueryParam(): CMsgHttpRequest_QueryParam {
  return { name: "", value: Buffer.alloc(0) };
}

export const CMsgHttpRequest_QueryParam = {
  encode(message: CMsgHttpRequest_QueryParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHttpRequest_QueryParam {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHttpRequest_QueryParam();
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

          message.value = reader.bytes() as Buffer;
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

function createBaseCMsgWebAPIRequest(): CMsgWebAPIRequest {
  return { interfaceName: "", methodName: "", version: 0, apiKey: undefined, request: undefined, routingAppId: 0 };
}

export const CMsgWebAPIRequest = {
  encode(message: CMsgWebAPIRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interfaceName !== "") {
      writer.uint32(18).string(message.interfaceName);
    }
    if (message.methodName !== "") {
      writer.uint32(26).string(message.methodName);
    }
    if (message.version !== 0) {
      writer.uint32(32).uint32(message.version);
    }
    if (message.apiKey !== undefined) {
      CMsgWebAPIKey.encode(message.apiKey, writer.uint32(42).fork()).ldelim();
    }
    if (message.request !== undefined) {
      CMsgHttpRequest.encode(message.request, writer.uint32(50).fork()).ldelim();
    }
    if (message.routingAppId !== 0) {
      writer.uint32(56).uint32(message.routingAppId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgWebAPIRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgWebAPIRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.interfaceName = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.methodName = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.version = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.apiKey = CMsgWebAPIKey.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.request = CMsgHttpRequest.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.routingAppId = reader.uint32();
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

function createBaseCMsgHttpResponse(): CMsgHttpResponse {
  return { statusCode: 0, headers: [], body: Buffer.alloc(0) };
}

export const CMsgHttpResponse = {
  encode(message: CMsgHttpResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusCode !== 0) {
      writer.uint32(8).uint32(message.statusCode);
    }
    for (const v of message.headers) {
      CMsgHttpResponse_ResponseHeader.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.body.length !== 0) {
      writer.uint32(26).bytes(message.body);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHttpResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHttpResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.statusCode = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.headers.push(CMsgHttpResponse_ResponseHeader.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.body = reader.bytes() as Buffer;
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

function createBaseCMsgHttpResponse_ResponseHeader(): CMsgHttpResponse_ResponseHeader {
  return { name: "", value: "" };
}

export const CMsgHttpResponse_ResponseHeader = {
  encode(message: CMsgHttpResponse_ResponseHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHttpResponse_ResponseHeader {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHttpResponse_ResponseHeader();
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

          message.value = reader.string();
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

function createBaseCMsgAMFindAccounts(): CMsgAMFindAccounts {
  return { searchType: 0, searchString: "" };
}

export const CMsgAMFindAccounts = {
  encode(message: CMsgAMFindAccounts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.searchType !== 0) {
      writer.uint32(8).uint32(message.searchType);
    }
    if (message.searchString !== "") {
      writer.uint32(18).string(message.searchString);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAMFindAccounts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMFindAccounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.searchType = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.searchString = reader.string();
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

function createBaseCMsgAMFindAccountsResponse(): CMsgAMFindAccountsResponse {
  return { steamId: [] };
}

export const CMsgAMFindAccountsResponse = {
  encode(message: CMsgAMFindAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.steamId) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAMFindAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMFindAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 9) {
            message.steamId.push(longToString(reader.fixed64() as Long));
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.steamId.push(longToString(reader.fixed64() as Long));
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
};

function createBaseCMsgNotifyWatchdog(): CMsgNotifyWatchdog {
  return { source: 0, alertType: 0, critical: false, time: 0, appid: 0, text: "", recipient: "" };
}

export const CMsgNotifyWatchdog = {
  encode(message: CMsgNotifyWatchdog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).uint32(message.source);
    }
    if (message.alertType !== 0) {
      writer.uint32(16).uint32(message.alertType);
    }
    if (message.critical === true) {
      writer.uint32(32).bool(message.critical);
    }
    if (message.time !== 0) {
      writer.uint32(40).uint32(message.time);
    }
    if (message.appid !== 0) {
      writer.uint32(48).uint32(message.appid);
    }
    if (message.text !== "") {
      writer.uint32(58).string(message.text);
    }
    if (message.recipient !== "") {
      writer.uint32(98).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNotifyWatchdog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNotifyWatchdog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.alertType = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.critical = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.time = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.appid = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.text = reader.string();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.recipient = reader.string();
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

function createBaseCMsgAMGetLicenses(): CMsgAMGetLicenses {
  return { steamid: "0" };
}

export const CMsgAMGetLicenses = {
  encode(message: CMsgAMGetLicenses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAMGetLicenses {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMGetLicenses();
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

function createBaseCMsgPackageLicense(): CMsgPackageLicense {
  return { packageId: 0, timeCreated: 0, ownerId: 0 };
}

export const CMsgPackageLicense = {
  encode(message: CMsgPackageLicense, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packageId !== 0) {
      writer.uint32(8).uint32(message.packageId);
    }
    if (message.timeCreated !== 0) {
      writer.uint32(16).uint32(message.timeCreated);
    }
    if (message.ownerId !== 0) {
      writer.uint32(24).uint32(message.ownerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPackageLicense {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPackageLicense();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.packageId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.timeCreated = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.ownerId = reader.uint32();
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

function createBaseCMsgAMGetLicensesResponse(): CMsgAMGetLicensesResponse {
  return { license: [], result: 0 };
}

export const CMsgAMGetLicensesResponse = {
  encode(message: CMsgAMGetLicensesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.license) {
      CMsgPackageLicense.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== 0) {
      writer.uint32(16).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAMGetLicensesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMGetLicensesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.license.push(CMsgPackageLicense.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.result = reader.uint32();
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

function createBaseCMsgAMGetUserGameStats(): CMsgAMGetUserGameStats {
  return { steamId: "0", gameId: "0", stats: [] };
}

export const CMsgAMGetUserGameStats = {
  encode(message: CMsgAMGetUserGameStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.gameId !== "0") {
      writer.uint32(17).fixed64(message.gameId);
    }
    writer.uint32(26).fork();
    for (const v of message.stats) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAMGetUserGameStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMGetUserGameStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.steamId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.gameId = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag == 24) {
            message.stats.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.stats.push(reader.uint32());
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
};

function createBaseCMsgAMGetUserGameStatsResponse(): CMsgAMGetUserGameStatsResponse {
  return { steamId: "0", gameId: "0", eresult: 0, stats: [], achievementBlocks: [] };
}

export const CMsgAMGetUserGameStatsResponse = {
  encode(message: CMsgAMGetUserGameStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.gameId !== "0") {
      writer.uint32(17).fixed64(message.gameId);
    }
    if (message.eresult !== 0) {
      writer.uint32(24).int32(message.eresult);
    }
    for (const v of message.stats) {
      CMsgAMGetUserGameStatsResponse_Stats.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.achievementBlocks) {
      CMsgAMGetUserGameStatsResponse_AchievementBlocks.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAMGetUserGameStatsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMGetUserGameStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.steamId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.gameId = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.eresult = reader.int32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.stats.push(CMsgAMGetUserGameStatsResponse_Stats.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.achievementBlocks.push(
            CMsgAMGetUserGameStatsResponse_AchievementBlocks.decode(reader, reader.uint32()),
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
};

function createBaseCMsgAMGetUserGameStatsResponse_Stats(): CMsgAMGetUserGameStatsResponse_Stats {
  return { statId: 0, statValue: 0 };
}

export const CMsgAMGetUserGameStatsResponse_Stats = {
  encode(message: CMsgAMGetUserGameStatsResponse_Stats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statId !== 0) {
      writer.uint32(8).uint32(message.statId);
    }
    if (message.statValue !== 0) {
      writer.uint32(16).uint32(message.statValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAMGetUserGameStatsResponse_Stats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMGetUserGameStatsResponse_Stats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.statId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.statValue = reader.uint32();
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

function createBaseCMsgAMGetUserGameStatsResponse_AchievementBlocks(): CMsgAMGetUserGameStatsResponse_AchievementBlocks {
  return { achievementId: 0, achievementBitId: 0, unlockTime: 0 };
}

export const CMsgAMGetUserGameStatsResponse_AchievementBlocks = {
  encode(
    message: CMsgAMGetUserGameStatsResponse_AchievementBlocks,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.achievementId !== 0) {
      writer.uint32(8).uint32(message.achievementId);
    }
    if (message.achievementBitId !== 0) {
      writer.uint32(16).uint32(message.achievementBitId);
    }
    if (message.unlockTime !== 0) {
      writer.uint32(29).fixed32(message.unlockTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAMGetUserGameStatsResponse_AchievementBlocks {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMGetUserGameStatsResponse_AchievementBlocks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.achievementId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.achievementBitId = reader.uint32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.unlockTime = reader.fixed32();
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

function createBaseCMsgGCGetCommandList(): CMsgGCGetCommandList {
  return { appId: 0, commandPrefix: "" };
}

export const CMsgGCGetCommandList = {
  encode(message: CMsgGCGetCommandList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.commandPrefix !== "") {
      writer.uint32(18).string(message.commandPrefix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetCommandList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetCommandList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.appId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.commandPrefix = reader.string();
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

function createBaseCMsgGCGetCommandListResponse(): CMsgGCGetCommandListResponse {
  return { commandName: [] };
}

export const CMsgGCGetCommandListResponse = {
  encode(message: CMsgGCGetCommandListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.commandName) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetCommandListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetCommandListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.commandName.push(reader.string());
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

function createBaseCGCMsgMemCachedGet(): CGCMsgMemCachedGet {
  return { keys: [] };
}

export const CGCMsgMemCachedGet = {
  encode(message: CGCMsgMemCachedGet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keys) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCMsgMemCachedGet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgMemCachedGet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.keys.push(reader.string());
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

function createBaseCGCMsgMemCachedGetResponse(): CGCMsgMemCachedGetResponse {
  return { values: [] };
}

export const CGCMsgMemCachedGetResponse = {
  encode(message: CGCMsgMemCachedGetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      CGCMsgMemCachedGetResponse_ValueTag.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCMsgMemCachedGetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgMemCachedGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.values.push(CGCMsgMemCachedGetResponse_ValueTag.decode(reader, reader.uint32()));
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

function createBaseCGCMsgMemCachedGetResponse_ValueTag(): CGCMsgMemCachedGetResponse_ValueTag {
  return { found: false, value: Buffer.alloc(0) };
}

export const CGCMsgMemCachedGetResponse_ValueTag = {
  encode(message: CGCMsgMemCachedGetResponse_ValueTag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.found === true) {
      writer.uint32(8).bool(message.found);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCMsgMemCachedGetResponse_ValueTag {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgMemCachedGetResponse_ValueTag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.found = reader.bool();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = reader.bytes() as Buffer;
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

function createBaseCGCMsgMemCachedSet(): CGCMsgMemCachedSet {
  return { keys: [] };
}

export const CGCMsgMemCachedSet = {
  encode(message: CGCMsgMemCachedSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keys) {
      CGCMsgMemCachedSet_KeyPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCMsgMemCachedSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgMemCachedSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.keys.push(CGCMsgMemCachedSet_KeyPair.decode(reader, reader.uint32()));
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

function createBaseCGCMsgMemCachedSet_KeyPair(): CGCMsgMemCachedSet_KeyPair {
  return { name: "", value: Buffer.alloc(0) };
}

export const CGCMsgMemCachedSet_KeyPair = {
  encode(message: CGCMsgMemCachedSet_KeyPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCMsgMemCachedSet_KeyPair {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgMemCachedSet_KeyPair();
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

          message.value = reader.bytes() as Buffer;
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

function createBaseCGCMsgMemCachedDelete(): CGCMsgMemCachedDelete {
  return { keys: [] };
}

export const CGCMsgMemCachedDelete = {
  encode(message: CGCMsgMemCachedDelete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keys) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCMsgMemCachedDelete {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgMemCachedDelete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.keys.push(reader.string());
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

function createBaseCGCMsgMemCachedStats(): CGCMsgMemCachedStats {
  return {};
}

export const CGCMsgMemCachedStats = {
  encode(_: CGCMsgMemCachedStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCMsgMemCachedStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgMemCachedStats();
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

function createBaseCGCMsgMemCachedStatsResponse(): CGCMsgMemCachedStatsResponse {
  return {
    currConnections: "0",
    cmdGet: "0",
    cmdSet: "0",
    cmdFlush: "0",
    getHits: "0",
    getMisses: "0",
    deleteHits: "0",
    deleteMisses: "0",
    bytesRead: "0",
    bytesWritten: "0",
    limitMaxbytes: "0",
    currItems: "0",
    evictions: "0",
    bytes: "0",
  };
}

export const CGCMsgMemCachedStatsResponse = {
  encode(message: CGCMsgMemCachedStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currConnections !== "0") {
      writer.uint32(8).uint64(message.currConnections);
    }
    if (message.cmdGet !== "0") {
      writer.uint32(16).uint64(message.cmdGet);
    }
    if (message.cmdSet !== "0") {
      writer.uint32(24).uint64(message.cmdSet);
    }
    if (message.cmdFlush !== "0") {
      writer.uint32(32).uint64(message.cmdFlush);
    }
    if (message.getHits !== "0") {
      writer.uint32(40).uint64(message.getHits);
    }
    if (message.getMisses !== "0") {
      writer.uint32(48).uint64(message.getMisses);
    }
    if (message.deleteHits !== "0") {
      writer.uint32(56).uint64(message.deleteHits);
    }
    if (message.deleteMisses !== "0") {
      writer.uint32(64).uint64(message.deleteMisses);
    }
    if (message.bytesRead !== "0") {
      writer.uint32(72).uint64(message.bytesRead);
    }
    if (message.bytesWritten !== "0") {
      writer.uint32(80).uint64(message.bytesWritten);
    }
    if (message.limitMaxbytes !== "0") {
      writer.uint32(88).uint64(message.limitMaxbytes);
    }
    if (message.currItems !== "0") {
      writer.uint32(96).uint64(message.currItems);
    }
    if (message.evictions !== "0") {
      writer.uint32(104).uint64(message.evictions);
    }
    if (message.bytes !== "0") {
      writer.uint32(112).uint64(message.bytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCMsgMemCachedStatsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgMemCachedStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.currConnections = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.cmdGet = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.cmdSet = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.cmdFlush = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.getHits = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.getMisses = longToString(reader.uint64() as Long);
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.deleteHits = longToString(reader.uint64() as Long);
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.deleteMisses = longToString(reader.uint64() as Long);
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.bytesRead = longToString(reader.uint64() as Long);
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.bytesWritten = longToString(reader.uint64() as Long);
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.limitMaxbytes = longToString(reader.uint64() as Long);
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.currItems = longToString(reader.uint64() as Long);
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.evictions = longToString(reader.uint64() as Long);
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.bytes = longToString(reader.uint64() as Long);
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

function createBaseCGCMsgSQLStats(): CGCMsgSQLStats {
  return { schemaCatalog: 0 };
}

export const CGCMsgSQLStats = {
  encode(message: CGCMsgSQLStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaCatalog !== 0) {
      writer.uint32(8).uint32(message.schemaCatalog);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCMsgSQLStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgSQLStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.schemaCatalog = reader.uint32();
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

function createBaseCGCMsgSQLStatsResponse(): CGCMsgSQLStatsResponse {
  return {
    threads: 0,
    threadsConnected: 0,
    threadsActive: 0,
    operationsSubmitted: 0,
    preparedStatementsExecuted: 0,
    nonPreparedStatementsExecuted: 0,
    deadlockRetries: 0,
    operationsTimedOutInQueue: 0,
    errors: 0,
  };
}

export const CGCMsgSQLStatsResponse = {
  encode(message: CGCMsgSQLStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.threads !== 0) {
      writer.uint32(8).uint32(message.threads);
    }
    if (message.threadsConnected !== 0) {
      writer.uint32(16).uint32(message.threadsConnected);
    }
    if (message.threadsActive !== 0) {
      writer.uint32(24).uint32(message.threadsActive);
    }
    if (message.operationsSubmitted !== 0) {
      writer.uint32(32).uint32(message.operationsSubmitted);
    }
    if (message.preparedStatementsExecuted !== 0) {
      writer.uint32(40).uint32(message.preparedStatementsExecuted);
    }
    if (message.nonPreparedStatementsExecuted !== 0) {
      writer.uint32(48).uint32(message.nonPreparedStatementsExecuted);
    }
    if (message.deadlockRetries !== 0) {
      writer.uint32(56).uint32(message.deadlockRetries);
    }
    if (message.operationsTimedOutInQueue !== 0) {
      writer.uint32(64).uint32(message.operationsTimedOutInQueue);
    }
    if (message.errors !== 0) {
      writer.uint32(72).uint32(message.errors);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCMsgSQLStatsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgSQLStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.threads = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.threadsConnected = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.threadsActive = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.operationsSubmitted = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.preparedStatementsExecuted = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.nonPreparedStatementsExecuted = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.deadlockRetries = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.operationsTimedOutInQueue = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.errors = reader.uint32();
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

function createBaseCMsgAMAddFreeLicense(): CMsgAMAddFreeLicense {
  return { steamid: "0", ipPublic: 0, packageid: 0, storeCountryCode: "" };
}

export const CMsgAMAddFreeLicense = {
  encode(message: CMsgAMAddFreeLicense, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.ipPublic !== 0) {
      writer.uint32(16).uint32(message.ipPublic);
    }
    if (message.packageid !== 0) {
      writer.uint32(24).uint32(message.packageid);
    }
    if (message.storeCountryCode !== "") {
      writer.uint32(34).string(message.storeCountryCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAMAddFreeLicense {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMAddFreeLicense();
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

          message.ipPublic = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.packageid = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.storeCountryCode = reader.string();
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

function createBaseCMsgAMAddFreeLicenseResponse(): CMsgAMAddFreeLicenseResponse {
  return { eresult: 0, purchaseResultDetail: 0, transid: "0" };
}

export const CMsgAMAddFreeLicenseResponse = {
  encode(message: CMsgAMAddFreeLicenseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.purchaseResultDetail !== 0) {
      writer.uint32(16).int32(message.purchaseResultDetail);
    }
    if (message.transid !== "0") {
      writer.uint32(25).fixed64(message.transid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAMAddFreeLicenseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMAddFreeLicenseResponse();
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

          message.purchaseResultDetail = reader.int32();
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.transid = longToString(reader.fixed64() as Long);
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

function createBaseCGCMsgGetIPLocation(): CGCMsgGetIPLocation {
  return { ips: [] };
}

export const CGCMsgGetIPLocation = {
  encode(message: CGCMsgGetIPLocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.ips) {
      writer.fixed32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCMsgGetIPLocation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgGetIPLocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 13) {
            message.ips.push(reader.fixed32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ips.push(reader.fixed32());
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
};

function createBaseCGCMsgGetIPASN(): CGCMsgGetIPASN {
  return { ips: [] };
}

export const CGCMsgGetIPASN = {
  encode(message: CGCMsgGetIPASN, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.ips) {
      writer.fixed32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCMsgGetIPASN {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgGetIPASN();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 13) {
            message.ips.push(reader.fixed32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ips.push(reader.fixed32());
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
};

function createBaseCIPASNInfo(): CIPASNInfo {
  return { ip: 0, asn: 0 };
}

export const CIPASNInfo = {
  encode(message: CIPASNInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ip !== 0) {
      writer.uint32(13).fixed32(message.ip);
    }
    if (message.asn !== 0) {
      writer.uint32(16).uint32(message.asn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CIPASNInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCIPASNInfo();
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

          message.asn = reader.uint32();
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

function createBaseCGCMsgGetIPASNResponse(): CGCMsgGetIPASNResponse {
  return { infos: [] };
}

export const CGCMsgGetIPASNResponse = {
  encode(message: CGCMsgGetIPASNResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      CIPASNInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCMsgGetIPASNResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgGetIPASNResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.infos.push(CIPASNInfo.decode(reader, reader.uint32()));
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

function createBaseCGCMsgSystemStatsSchema(): CGCMsgSystemStatsSchema {
  return { gcAppId: 0, schemaKv: Buffer.alloc(0) };
}

export const CGCMsgSystemStatsSchema = {
  encode(message: CGCMsgSystemStatsSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gcAppId !== 0) {
      writer.uint32(8).uint32(message.gcAppId);
    }
    if (message.schemaKv.length !== 0) {
      writer.uint32(18).bytes(message.schemaKv);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCMsgSystemStatsSchema {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgSystemStatsSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.gcAppId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.schemaKv = reader.bytes() as Buffer;
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

function createBaseCGCMsgGetSystemStats(): CGCMsgGetSystemStats {
  return {};
}

export const CGCMsgGetSystemStats = {
  encode(_: CGCMsgGetSystemStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCMsgGetSystemStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgGetSystemStats();
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

function createBaseCGCMsgGetSystemStatsResponse(): CGCMsgGetSystemStatsResponse {
  return {
    gcAppId: 0,
    statsKv: Buffer.alloc(0),
    activeJobs: 0,
    yieldingJobs: 0,
    userSessions: 0,
    gameServerSessions: 0,
    socaches: 0,
    socachesToUnload: 0,
    socachesLoading: 0,
    writebackQueue: 0,
    steamidLocks: 0,
    logonQueue: 0,
    logonJobs: 0,
  };
}

export const CGCMsgGetSystemStatsResponse = {
  encode(message: CGCMsgGetSystemStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gcAppId !== 0) {
      writer.uint32(8).uint32(message.gcAppId);
    }
    if (message.statsKv.length !== 0) {
      writer.uint32(18).bytes(message.statsKv);
    }
    if (message.activeJobs !== 0) {
      writer.uint32(24).uint32(message.activeJobs);
    }
    if (message.yieldingJobs !== 0) {
      writer.uint32(32).uint32(message.yieldingJobs);
    }
    if (message.userSessions !== 0) {
      writer.uint32(40).uint32(message.userSessions);
    }
    if (message.gameServerSessions !== 0) {
      writer.uint32(48).uint32(message.gameServerSessions);
    }
    if (message.socaches !== 0) {
      writer.uint32(56).uint32(message.socaches);
    }
    if (message.socachesToUnload !== 0) {
      writer.uint32(64).uint32(message.socachesToUnload);
    }
    if (message.socachesLoading !== 0) {
      writer.uint32(72).uint32(message.socachesLoading);
    }
    if (message.writebackQueue !== 0) {
      writer.uint32(80).uint32(message.writebackQueue);
    }
    if (message.steamidLocks !== 0) {
      writer.uint32(88).uint32(message.steamidLocks);
    }
    if (message.logonQueue !== 0) {
      writer.uint32(96).uint32(message.logonQueue);
    }
    if (message.logonJobs !== 0) {
      writer.uint32(104).uint32(message.logonJobs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCMsgGetSystemStatsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgGetSystemStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.gcAppId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.statsKv = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.activeJobs = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.yieldingJobs = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.userSessions = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.gameServerSessions = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.socaches = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.socachesToUnload = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.socachesLoading = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.writebackQueue = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.steamidLocks = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.logonQueue = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.logonJobs = reader.uint32();
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

function createBaseCMsgAMSendEmail(): CMsgAMSendEmail {
  return { steamid: "0", emailMsgType: 0, emailFormat: 0, personaNameTokens: [], sourceGc: 0, tokens: [] };
}

export const CMsgAMSendEmail = {
  encode(message: CMsgAMSendEmail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.emailMsgType !== 0) {
      writer.uint32(16).uint32(message.emailMsgType);
    }
    if (message.emailFormat !== 0) {
      writer.uint32(24).uint32(message.emailFormat);
    }
    for (const v of message.personaNameTokens) {
      CMsgAMSendEmail_PersonaNameReplacementToken.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.sourceGc !== 0) {
      writer.uint32(48).uint32(message.sourceGc);
    }
    for (const v of message.tokens) {
      CMsgAMSendEmail_ReplacementToken.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAMSendEmail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMSendEmail();
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

          message.emailMsgType = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.emailFormat = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.personaNameTokens.push(CMsgAMSendEmail_PersonaNameReplacementToken.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.sourceGc = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.tokens.push(CMsgAMSendEmail_ReplacementToken.decode(reader, reader.uint32()));
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

function createBaseCMsgAMSendEmail_ReplacementToken(): CMsgAMSendEmail_ReplacementToken {
  return { tokenName: "", tokenValue: "" };
}

export const CMsgAMSendEmail_ReplacementToken = {
  encode(message: CMsgAMSendEmail_ReplacementToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenName !== "") {
      writer.uint32(10).string(message.tokenName);
    }
    if (message.tokenValue !== "") {
      writer.uint32(18).string(message.tokenValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAMSendEmail_ReplacementToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMSendEmail_ReplacementToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.tokenName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.tokenValue = reader.string();
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

function createBaseCMsgAMSendEmail_PersonaNameReplacementToken(): CMsgAMSendEmail_PersonaNameReplacementToken {
  return { steamid: "0", tokenName: "" };
}

export const CMsgAMSendEmail_PersonaNameReplacementToken = {
  encode(message: CMsgAMSendEmail_PersonaNameReplacementToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.tokenName !== "") {
      writer.uint32(18).string(message.tokenName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAMSendEmail_PersonaNameReplacementToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMSendEmail_PersonaNameReplacementToken();
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

          message.tokenName = reader.string();
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

function createBaseCMsgAMSendEmailResponse(): CMsgAMSendEmailResponse {
  return { eresult: 0 };
}

export const CMsgAMSendEmailResponse = {
  encode(message: CMsgAMSendEmailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).uint32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAMSendEmailResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMSendEmailResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eresult = reader.uint32();
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

function createBaseCMsgGCGetEmailTemplate(): CMsgGCGetEmailTemplate {
  return { appId: 0, emailMsgType: 0, emailLang: 0, emailFormat: 0 };
}

export const CMsgGCGetEmailTemplate = {
  encode(message: CMsgGCGetEmailTemplate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.emailMsgType !== 0) {
      writer.uint32(16).uint32(message.emailMsgType);
    }
    if (message.emailLang !== 0) {
      writer.uint32(24).int32(message.emailLang);
    }
    if (message.emailFormat !== 0) {
      writer.uint32(32).int32(message.emailFormat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetEmailTemplate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetEmailTemplate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.appId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.emailMsgType = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.emailLang = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.emailFormat = reader.int32();
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

function createBaseCMsgGCGetEmailTemplateResponse(): CMsgGCGetEmailTemplateResponse {
  return { eresult: 0, templateExists: false, template: "" };
}

export const CMsgGCGetEmailTemplateResponse = {
  encode(message: CMsgGCGetEmailTemplateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).uint32(message.eresult);
    }
    if (message.templateExists === true) {
      writer.uint32(16).bool(message.templateExists);
    }
    if (message.template !== "") {
      writer.uint32(26).string(message.template);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetEmailTemplateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetEmailTemplateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eresult = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.templateExists = reader.bool();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.template = reader.string();
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

function createBaseCMsgAMGrantGuestPasses2(): CMsgAMGrantGuestPasses2 {
  return { steamId: "0", packageId: 0, passesToGrant: 0, daysToExpiration: 0, action: 0 };
}

export const CMsgAMGrantGuestPasses2 = {
  encode(message: CMsgAMGrantGuestPasses2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.packageId !== 0) {
      writer.uint32(16).uint32(message.packageId);
    }
    if (message.passesToGrant !== 0) {
      writer.uint32(24).int32(message.passesToGrant);
    }
    if (message.daysToExpiration !== 0) {
      writer.uint32(32).int32(message.daysToExpiration);
    }
    if (message.action !== 0) {
      writer.uint32(40).int32(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAMGrantGuestPasses2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMGrantGuestPasses2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.steamId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.packageId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.passesToGrant = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.daysToExpiration = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.action = reader.int32();
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

function createBaseCMsgAMGrantGuestPasses2Response(): CMsgAMGrantGuestPasses2Response {
  return { eresult: 0, passesGranted: 0 };
}

export const CMsgAMGrantGuestPasses2Response = {
  encode(message: CMsgAMGrantGuestPasses2Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.passesGranted !== 0) {
      writer.uint32(16).int32(message.passesGranted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAMGrantGuestPasses2Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMGrantGuestPasses2Response();
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

          message.passesGranted = reader.int32();
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

function createBaseCMsgGCGetPersonaNames(): CMsgGCGetPersonaNames {
  return { steamids: [] };
}

export const CMsgGCGetPersonaNames = {
  encode(message: CMsgGCGetPersonaNames, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.steamids) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetPersonaNames {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetPersonaNames();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 9) {
            message.steamids.push(longToString(reader.fixed64() as Long));
            continue;
          }

          if (tag == 10) {
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
};

function createBaseCMsgGCGetPersonaNamesResponse(): CMsgGCGetPersonaNamesResponse {
  return { succeededLookups: [], failedLookupSteamids: [] };
}

export const CMsgGCGetPersonaNamesResponse = {
  encode(message: CMsgGCGetPersonaNamesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.succeededLookups) {
      CMsgGCGetPersonaNamesResponse_PersonaName.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.failedLookupSteamids) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetPersonaNamesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetPersonaNamesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.succeededLookups.push(CMsgGCGetPersonaNamesResponse_PersonaName.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag == 17) {
            message.failedLookupSteamids.push(longToString(reader.fixed64() as Long));
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.failedLookupSteamids.push(longToString(reader.fixed64() as Long));
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
};

function createBaseCMsgGCGetPersonaNamesResponse_PersonaName(): CMsgGCGetPersonaNamesResponse_PersonaName {
  return { steamid: "0", personaName: "" };
}

export const CMsgGCGetPersonaNamesResponse_PersonaName = {
  encode(message: CMsgGCGetPersonaNamesResponse_PersonaName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.personaName !== "") {
      writer.uint32(18).string(message.personaName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetPersonaNamesResponse_PersonaName {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetPersonaNamesResponse_PersonaName();
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

          message.personaName = reader.string();
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

function createBaseCMsgGCCheckFriendship(): CMsgGCCheckFriendship {
  return { steamidLeft: "0", steamidRight: "0" };
}

export const CMsgGCCheckFriendship = {
  encode(message: CMsgGCCheckFriendship, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamidLeft !== "0") {
      writer.uint32(9).fixed64(message.steamidLeft);
    }
    if (message.steamidRight !== "0") {
      writer.uint32(17).fixed64(message.steamidRight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCCheckFriendship {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCheckFriendship();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.steamidLeft = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.steamidRight = longToString(reader.fixed64() as Long);
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

function createBaseCMsgGCCheckFriendshipResponse(): CMsgGCCheckFriendshipResponse {
  return { success: false, foundFriendship: false };
}

export const CMsgGCCheckFriendshipResponse = {
  encode(message: CMsgGCCheckFriendshipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.foundFriendship === true) {
      writer.uint32(16).bool(message.foundFriendship);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCCheckFriendshipResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCheckFriendshipResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.success = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.foundFriendship = reader.bool();
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

function createBaseCMsgGCGetAppFriendsList(): CMsgGCGetAppFriendsList {
  return { steamid: "0", includeFriendshipTimestamps: false };
}

export const CMsgGCGetAppFriendsList = {
  encode(message: CMsgGCGetAppFriendsList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.includeFriendshipTimestamps === true) {
      writer.uint32(16).bool(message.includeFriendshipTimestamps);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetAppFriendsList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetAppFriendsList();
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

          message.includeFriendshipTimestamps = reader.bool();
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

function createBaseCMsgGCGetAppFriendsListResponse(): CMsgGCGetAppFriendsListResponse {
  return { success: false, steamids: [], friendshipTimestamps: [], lastPlaytimes: [] };
}

export const CMsgGCGetAppFriendsListResponse = {
  encode(message: CMsgGCGetAppFriendsListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    writer.uint32(18).fork();
    for (const v of message.steamids) {
      writer.fixed64(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.friendshipTimestamps) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.lastPlaytimes) {
      writer.fixed32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetAppFriendsListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetAppFriendsListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.success = reader.bool();
          continue;
        case 2:
          if (tag == 17) {
            message.steamids.push(longToString(reader.fixed64() as Long));
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.steamids.push(longToString(reader.fixed64() as Long));
            }

            continue;
          }

          break;
        case 3:
          if (tag == 29) {
            message.friendshipTimestamps.push(reader.fixed32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.friendshipTimestamps.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 4:
          if (tag == 37) {
            message.lastPlaytimes.push(reader.fixed32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lastPlaytimes.push(reader.fixed32());
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
};

function createBaseCMsgGCMsgMasterSetDirectory(): CMsgGCMsgMasterSetDirectory {
  return { masterDirIndex: 0, dir: [] };
}

export const CMsgGCMsgMasterSetDirectory = {
  encode(message: CMsgGCMsgMasterSetDirectory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.masterDirIndex !== 0) {
      writer.uint32(8).int32(message.masterDirIndex);
    }
    for (const v of message.dir) {
      CMsgGCMsgMasterSetDirectory_SubGC.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCMsgMasterSetDirectory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCMsgMasterSetDirectory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.masterDirIndex = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.dir.push(CMsgGCMsgMasterSetDirectory_SubGC.decode(reader, reader.uint32()));
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

function createBaseCMsgGCMsgMasterSetDirectory_SubGC(): CMsgGCMsgMasterSetDirectory_SubGC {
  return { dirIndex: 0, name: "", box: "", commandLine: "", gcBinary: "" };
}

export const CMsgGCMsgMasterSetDirectory_SubGC = {
  encode(message: CMsgGCMsgMasterSetDirectory_SubGC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dirIndex !== 0) {
      writer.uint32(8).int32(message.dirIndex);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.box !== "") {
      writer.uint32(26).string(message.box);
    }
    if (message.commandLine !== "") {
      writer.uint32(34).string(message.commandLine);
    }
    if (message.gcBinary !== "") {
      writer.uint32(42).string(message.gcBinary);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCMsgMasterSetDirectory_SubGC {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCMsgMasterSetDirectory_SubGC();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.box = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.commandLine = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.gcBinary = reader.string();
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

function createBaseCMsgGCMsgMasterSetDirectoryResponse(): CMsgGCMsgMasterSetDirectoryResponse {
  return { eresult: 0, message: "" };
}

export const CMsgGCMsgMasterSetDirectoryResponse = {
  encode(message: CMsgGCMsgMasterSetDirectoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCMsgMasterSetDirectoryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCMsgMasterSetDirectoryResponse();
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
          if (tag != 18) {
            break;
          }

          message.message = reader.string();
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

function createBaseCMsgGCMsgWebAPIJobRequestForwardResponse(): CMsgGCMsgWebAPIJobRequestForwardResponse {
  return { dirIndex: 0 };
}

export const CMsgGCMsgWebAPIJobRequestForwardResponse = {
  encode(message: CMsgGCMsgWebAPIJobRequestForwardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dirIndex !== 0) {
      writer.uint32(8).int32(message.dirIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCMsgWebAPIJobRequestForwardResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCMsgWebAPIJobRequestForwardResponse();
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
};

function createBaseCGCSystemMsgGetPurchaseTrustRequest(): CGCSystemMsgGetPurchaseTrustRequest {
  return { steamid: "0" };
}

export const CGCSystemMsgGetPurchaseTrustRequest = {
  encode(message: CGCSystemMsgGetPurchaseTrustRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCSystemMsgGetPurchaseTrustRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCSystemMsgGetPurchaseTrustRequest();
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

function createBaseCGCSystemMsgGetPurchaseTrustResponse(): CGCSystemMsgGetPurchaseTrustResponse {
  return {
    hasPriorPurchaseHistory: false,
    hasNoRecentPasswordResets: false,
    isWalletCashTrusted: false,
    timeAllTrusted: 0,
  };
}

export const CGCSystemMsgGetPurchaseTrustResponse = {
  encode(message: CGCSystemMsgGetPurchaseTrustResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hasPriorPurchaseHistory === true) {
      writer.uint32(8).bool(message.hasPriorPurchaseHistory);
    }
    if (message.hasNoRecentPasswordResets === true) {
      writer.uint32(16).bool(message.hasNoRecentPasswordResets);
    }
    if (message.isWalletCashTrusted === true) {
      writer.uint32(24).bool(message.isWalletCashTrusted);
    }
    if (message.timeAllTrusted !== 0) {
      writer.uint32(32).uint32(message.timeAllTrusted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCSystemMsgGetPurchaseTrustResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCSystemMsgGetPurchaseTrustResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.hasPriorPurchaseHistory = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.hasNoRecentPasswordResets = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isWalletCashTrusted = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.timeAllTrusted = reader.uint32();
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

function createBaseCMsgGCHAccountVacStatusChange(): CMsgGCHAccountVacStatusChange {
  return { steamId: "0", appId: 0, rtimeVacbanStarts: 0, isBannedNow: false, isBannedFuture: false };
}

export const CMsgGCHAccountVacStatusChange = {
  encode(message: CMsgGCHAccountVacStatusChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.appId !== 0) {
      writer.uint32(16).uint32(message.appId);
    }
    if (message.rtimeVacbanStarts !== 0) {
      writer.uint32(24).uint32(message.rtimeVacbanStarts);
    }
    if (message.isBannedNow === true) {
      writer.uint32(32).bool(message.isBannedNow);
    }
    if (message.isBannedFuture === true) {
      writer.uint32(40).bool(message.isBannedFuture);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCHAccountVacStatusChange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCHAccountVacStatusChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.steamId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.appId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.rtimeVacbanStarts = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.isBannedNow = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.isBannedFuture = reader.bool();
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

function createBaseCMsgGCGetPartnerAccountLink(): CMsgGCGetPartnerAccountLink {
  return { steamid: "0" };
}

export const CMsgGCGetPartnerAccountLink = {
  encode(message: CMsgGCGetPartnerAccountLink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetPartnerAccountLink {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetPartnerAccountLink();
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

function createBaseCMsgGCGetPartnerAccountLinkResponse(): CMsgGCGetPartnerAccountLinkResponse {
  return { pwid: 0, nexonid: 0, ageclass: 0, idVerified: false, isAdult: false };
}

export const CMsgGCGetPartnerAccountLinkResponse = {
  encode(message: CMsgGCGetPartnerAccountLinkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pwid !== 0) {
      writer.uint32(8).uint32(message.pwid);
    }
    if (message.nexonid !== 0) {
      writer.uint32(16).uint32(message.nexonid);
    }
    if (message.ageclass !== 0) {
      writer.uint32(24).int32(message.ageclass);
    }
    if (message.idVerified === true) {
      writer.uint32(32).bool(message.idVerified);
    }
    if (message.isAdult === true) {
      writer.uint32(40).bool(message.isAdult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetPartnerAccountLinkResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetPartnerAccountLinkResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.pwid = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.nexonid = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.ageclass = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.idVerified = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.isAdult = reader.bool();
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

function createBaseCMsgGCRoutingInfo(): CMsgGCRoutingInfo {
  return { dirIndex: [], method: 0, fallback: 0, protobufField: 0, webapiParam: "" };
}

export const CMsgGCRoutingInfo = {
  encode(message: CMsgGCRoutingInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.dirIndex) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    if (message.fallback !== 0) {
      writer.uint32(24).int32(message.fallback);
    }
    if (message.protobufField !== 0) {
      writer.uint32(32).uint32(message.protobufField);
    }
    if (message.webapiParam !== "") {
      writer.uint32(42).string(message.webapiParam);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCRoutingInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCRoutingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.dirIndex.push(reader.int32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dirIndex.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag != 16) {
            break;
          }

          message.method = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.fallback = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.protobufField = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.webapiParam = reader.string();
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

function createBaseCMsgGCMsgMasterSetWebAPIRouting(): CMsgGCMsgMasterSetWebAPIRouting {
  return { entries: [] };
}

export const CMsgGCMsgMasterSetWebAPIRouting = {
  encode(message: CMsgGCMsgMasterSetWebAPIRouting, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      CMsgGCMsgMasterSetWebAPIRouting_Entry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCMsgMasterSetWebAPIRouting {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCMsgMasterSetWebAPIRouting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.entries.push(CMsgGCMsgMasterSetWebAPIRouting_Entry.decode(reader, reader.uint32()));
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

function createBaseCMsgGCMsgMasterSetWebAPIRouting_Entry(): CMsgGCMsgMasterSetWebAPIRouting_Entry {
  return { interfaceName: "", methodName: "", routing: undefined };
}

export const CMsgGCMsgMasterSetWebAPIRouting_Entry = {
  encode(message: CMsgGCMsgMasterSetWebAPIRouting_Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interfaceName !== "") {
      writer.uint32(10).string(message.interfaceName);
    }
    if (message.methodName !== "") {
      writer.uint32(18).string(message.methodName);
    }
    if (message.routing !== undefined) {
      CMsgGCRoutingInfo.encode(message.routing, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCMsgMasterSetWebAPIRouting_Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCMsgMasterSetWebAPIRouting_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.interfaceName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.methodName = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.routing = CMsgGCRoutingInfo.decode(reader, reader.uint32());
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

function createBaseCMsgGCMsgMasterSetClientMsgRouting(): CMsgGCMsgMasterSetClientMsgRouting {
  return { entries: [] };
}

export const CMsgGCMsgMasterSetClientMsgRouting = {
  encode(message: CMsgGCMsgMasterSetClientMsgRouting, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      CMsgGCMsgMasterSetClientMsgRouting_Entry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCMsgMasterSetClientMsgRouting {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCMsgMasterSetClientMsgRouting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.entries.push(CMsgGCMsgMasterSetClientMsgRouting_Entry.decode(reader, reader.uint32()));
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

function createBaseCMsgGCMsgMasterSetClientMsgRouting_Entry(): CMsgGCMsgMasterSetClientMsgRouting_Entry {
  return { msgType: 0, routing: undefined };
}

export const CMsgGCMsgMasterSetClientMsgRouting_Entry = {
  encode(message: CMsgGCMsgMasterSetClientMsgRouting_Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgType !== 0) {
      writer.uint32(8).uint32(message.msgType);
    }
    if (message.routing !== undefined) {
      CMsgGCRoutingInfo.encode(message.routing, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCMsgMasterSetClientMsgRouting_Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCMsgMasterSetClientMsgRouting_Entry();
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

          message.routing = CMsgGCRoutingInfo.decode(reader, reader.uint32());
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

function createBaseCMsgGCMsgMasterSetWebAPIRoutingResponse(): CMsgGCMsgMasterSetWebAPIRoutingResponse {
  return { eresult: 0 };
}

export const CMsgGCMsgMasterSetWebAPIRoutingResponse = {
  encode(message: CMsgGCMsgMasterSetWebAPIRoutingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCMsgMasterSetWebAPIRoutingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCMsgMasterSetWebAPIRoutingResponse();
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

function createBaseCMsgGCMsgMasterSetClientMsgRoutingResponse(): CMsgGCMsgMasterSetClientMsgRoutingResponse {
  return { eresult: 0 };
}

export const CMsgGCMsgMasterSetClientMsgRoutingResponse = {
  encode(message: CMsgGCMsgMasterSetClientMsgRoutingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCMsgMasterSetClientMsgRoutingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCMsgMasterSetClientMsgRoutingResponse();
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

function createBaseCMsgGCMsgSetOptions(): CMsgGCMsgSetOptions {
  return { options: [], clientMsgRanges: [], gcsqlVersion: 1 };
}

export const CMsgGCMsgSetOptions = {
  encode(message: CMsgGCMsgSetOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.options) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.clientMsgRanges) {
      CMsgGCMsgSetOptions_MessageRange.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.gcsqlVersion !== 1) {
      writer.uint32(24).int32(message.gcsqlVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCMsgSetOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCMsgSetOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.options.push(reader.int32() as any);
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.options.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 2:
          if (tag != 18) {
            break;
          }

          message.clientMsgRanges.push(CMsgGCMsgSetOptions_MessageRange.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.gcsqlVersion = reader.int32() as any;
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

function createBaseCMsgGCMsgSetOptions_MessageRange(): CMsgGCMsgSetOptions_MessageRange {
  return { low: 0, high: 0 };
}

export const CMsgGCMsgSetOptions_MessageRange = {
  encode(message: CMsgGCMsgSetOptions_MessageRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.low !== 0) {
      writer.uint32(8).uint32(message.low);
    }
    if (message.high !== 0) {
      writer.uint32(16).uint32(message.high);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCMsgSetOptions_MessageRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCMsgSetOptions_MessageRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.low = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.high = reader.uint32();
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

function createBaseCMsgGCHUpdateSession(): CMsgGCHUpdateSession {
  return {
    steamId: "0",
    appId: 0,
    online: false,
    serverSteamId: "0",
    serverAddr: 0,
    serverPort: 0,
    osType: 0,
    clientAddr: 0,
    extraFields: [],
  };
}

export const CMsgGCHUpdateSession = {
  encode(message: CMsgGCHUpdateSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.appId !== 0) {
      writer.uint32(16).uint32(message.appId);
    }
    if (message.online === true) {
      writer.uint32(24).bool(message.online);
    }
    if (message.serverSteamId !== "0") {
      writer.uint32(33).fixed64(message.serverSteamId);
    }
    if (message.serverAddr !== 0) {
      writer.uint32(40).uint32(message.serverAddr);
    }
    if (message.serverPort !== 0) {
      writer.uint32(48).uint32(message.serverPort);
    }
    if (message.osType !== 0) {
      writer.uint32(56).uint32(message.osType);
    }
    if (message.clientAddr !== 0) {
      writer.uint32(64).uint32(message.clientAddr);
    }
    for (const v of message.extraFields) {
      CMsgGCHUpdateSession_ExtraField.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCHUpdateSession {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCHUpdateSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.steamId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.appId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.online = reader.bool();
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.serverSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.serverAddr = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.serverPort = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.osType = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.clientAddr = reader.uint32();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.extraFields.push(CMsgGCHUpdateSession_ExtraField.decode(reader, reader.uint32()));
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

function createBaseCMsgGCHUpdateSession_ExtraField(): CMsgGCHUpdateSession_ExtraField {
  return { name: "", value: "" };
}

export const CMsgGCHUpdateSession_ExtraField = {
  encode(message: CMsgGCHUpdateSession_ExtraField, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCHUpdateSession_ExtraField {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCHUpdateSession_ExtraField();
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

          message.value = reader.string();
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

function createBaseCMsgNotificationOfSuspiciousActivity(): CMsgNotificationOfSuspiciousActivity {
  return { steamid: "0", appid: 0, multipleInstances: undefined };
}

export const CMsgNotificationOfSuspiciousActivity = {
  encode(message: CMsgNotificationOfSuspiciousActivity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.multipleInstances !== undefined) {
      CMsgNotificationOfSuspiciousActivity_MultipleGameInstances.encode(
        message.multipleInstances,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNotificationOfSuspiciousActivity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNotificationOfSuspiciousActivity();
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
        case 3:
          if (tag != 26) {
            break;
          }

          message.multipleInstances = CMsgNotificationOfSuspiciousActivity_MultipleGameInstances.decode(
            reader,
            reader.uint32(),
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
};

function createBaseCMsgNotificationOfSuspiciousActivity_MultipleGameInstances(): CMsgNotificationOfSuspiciousActivity_MultipleGameInstances {
  return { appInstanceCount: 0, otherSteamids: [] };
}

export const CMsgNotificationOfSuspiciousActivity_MultipleGameInstances = {
  encode(
    message: CMsgNotificationOfSuspiciousActivity_MultipleGameInstances,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appInstanceCount !== 0) {
      writer.uint32(8).uint32(message.appInstanceCount);
    }
    writer.uint32(18).fork();
    for (const v of message.otherSteamids) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNotificationOfSuspiciousActivity_MultipleGameInstances {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNotificationOfSuspiciousActivity_MultipleGameInstances();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.appInstanceCount = reader.uint32();
          continue;
        case 2:
          if (tag == 17) {
            message.otherSteamids.push(longToString(reader.fixed64() as Long));
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.otherSteamids.push(longToString(reader.fixed64() as Long));
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
};

function createBaseCMsgDPPartnerMicroTxns(): CMsgDPPartnerMicroTxns {
  return { appid: 0, gcName: "", partner: undefined, transactions: [] };
}

export const CMsgDPPartnerMicroTxns = {
  encode(message: CMsgDPPartnerMicroTxns, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.gcName !== "") {
      writer.uint32(18).string(message.gcName);
    }
    if (message.partner !== undefined) {
      CMsgDPPartnerMicroTxns_PartnerInfo.encode(message.partner, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.transactions) {
      CMsgDPPartnerMicroTxns_PartnerMicroTxn.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDPPartnerMicroTxns {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDPPartnerMicroTxns();
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

          message.gcName = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.partner = CMsgDPPartnerMicroTxns_PartnerInfo.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.transactions.push(CMsgDPPartnerMicroTxns_PartnerMicroTxn.decode(reader, reader.uint32()));
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

function createBaseCMsgDPPartnerMicroTxns_PartnerMicroTxn(): CMsgDPPartnerMicroTxns_PartnerMicroTxn {
  return {
    initTime: 0,
    lastUpdateTime: 0,
    txnId: "0",
    accountId: 0,
    lineItem: 0,
    itemId: "0",
    defIndex: 0,
    price: "0",
    tax: "0",
    priceUsd: "0",
    taxUsd: "0",
    purchaseType: 0,
    steamTxnType: 0,
    countryCode: "",
    regionCode: "",
    quantity: 0,
    refTransId: "0",
  };
}

export const CMsgDPPartnerMicroTxns_PartnerMicroTxn = {
  encode(message: CMsgDPPartnerMicroTxns_PartnerMicroTxn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initTime !== 0) {
      writer.uint32(8).uint32(message.initTime);
    }
    if (message.lastUpdateTime !== 0) {
      writer.uint32(16).uint32(message.lastUpdateTime);
    }
    if (message.txnId !== "0") {
      writer.uint32(24).uint64(message.txnId);
    }
    if (message.accountId !== 0) {
      writer.uint32(32).uint32(message.accountId);
    }
    if (message.lineItem !== 0) {
      writer.uint32(40).uint32(message.lineItem);
    }
    if (message.itemId !== "0") {
      writer.uint32(48).uint64(message.itemId);
    }
    if (message.defIndex !== 0) {
      writer.uint32(56).uint32(message.defIndex);
    }
    if (message.price !== "0") {
      writer.uint32(64).uint64(message.price);
    }
    if (message.tax !== "0") {
      writer.uint32(72).uint64(message.tax);
    }
    if (message.priceUsd !== "0") {
      writer.uint32(80).uint64(message.priceUsd);
    }
    if (message.taxUsd !== "0") {
      writer.uint32(88).uint64(message.taxUsd);
    }
    if (message.purchaseType !== 0) {
      writer.uint32(96).uint32(message.purchaseType);
    }
    if (message.steamTxnType !== 0) {
      writer.uint32(104).uint32(message.steamTxnType);
    }
    if (message.countryCode !== "") {
      writer.uint32(114).string(message.countryCode);
    }
    if (message.regionCode !== "") {
      writer.uint32(122).string(message.regionCode);
    }
    if (message.quantity !== 0) {
      writer.uint32(128).int32(message.quantity);
    }
    if (message.refTransId !== "0") {
      writer.uint32(136).uint64(message.refTransId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDPPartnerMicroTxns_PartnerMicroTxn {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDPPartnerMicroTxns_PartnerMicroTxn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.initTime = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.lastUpdateTime = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.txnId = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.lineItem = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.defIndex = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.price = longToString(reader.uint64() as Long);
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.tax = longToString(reader.uint64() as Long);
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.priceUsd = longToString(reader.uint64() as Long);
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.taxUsd = longToString(reader.uint64() as Long);
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.purchaseType = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.steamTxnType = reader.uint32();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.countryCode = reader.string();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.regionCode = reader.string();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.quantity = reader.int32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.refTransId = longToString(reader.uint64() as Long);
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

function createBaseCMsgDPPartnerMicroTxns_PartnerInfo(): CMsgDPPartnerMicroTxns_PartnerInfo {
  return { partnerId: 0, partnerName: "", currencyCode: "", currencyName: "" };
}

export const CMsgDPPartnerMicroTxns_PartnerInfo = {
  encode(message: CMsgDPPartnerMicroTxns_PartnerInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.partnerId !== 0) {
      writer.uint32(8).uint32(message.partnerId);
    }
    if (message.partnerName !== "") {
      writer.uint32(18).string(message.partnerName);
    }
    if (message.currencyCode !== "") {
      writer.uint32(26).string(message.currencyCode);
    }
    if (message.currencyName !== "") {
      writer.uint32(34).string(message.currencyName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDPPartnerMicroTxns_PartnerInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDPPartnerMicroTxns_PartnerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.partnerId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.partnerName = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.currencyCode = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.currencyName = reader.string();
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

function createBaseCMsgDPPartnerMicroTxnsResponse(): CMsgDPPartnerMicroTxnsResponse {
  return { eresult: 0, eerrorcode: 0 };
}

export const CMsgDPPartnerMicroTxnsResponse = {
  encode(message: CMsgDPPartnerMicroTxnsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).uint32(message.eresult);
    }
    if (message.eerrorcode !== 0) {
      writer.uint32(16).int32(message.eerrorcode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDPPartnerMicroTxnsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDPPartnerMicroTxnsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eresult = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.eerrorcode = reader.int32() as any;
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

function createBaseCMsgGCHVacVerificationChange(): CMsgGCHVacVerificationChange {
  return { steamid: "0", appid: 0, isVerified: false };
}

export const CMsgGCHVacVerificationChange = {
  encode(message: CMsgGCHVacVerificationChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.isVerified === true) {
      writer.uint32(24).bool(message.isVerified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCHVacVerificationChange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCHVacVerificationChange();
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
        case 3:
          if (tag != 24) {
            break;
          }

          message.isVerified = reader.bool();
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

function createBaseCMsgGCHAccountTwoFactorChange(): CMsgGCHAccountTwoFactorChange {
  return { steamid: "0", appid: 0, twofactorEnabled: false };
}

export const CMsgGCHAccountTwoFactorChange = {
  encode(message: CMsgGCHAccountTwoFactorChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.twofactorEnabled === true) {
      writer.uint32(24).bool(message.twofactorEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCHAccountTwoFactorChange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCHAccountTwoFactorChange();
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
        case 3:
          if (tag != 24) {
            break;
          }

          message.twofactorEnabled = reader.bool();
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

function createBaseCMsgGCCheckClanMembership(): CMsgGCCheckClanMembership {
  return { steamid: "0", clanid: 0 };
}

export const CMsgGCCheckClanMembership = {
  encode(message: CMsgGCCheckClanMembership, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.clanid !== 0) {
      writer.uint32(16).uint32(message.clanid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCCheckClanMembership {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCheckClanMembership();
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

          message.clanid = reader.uint32();
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

function createBaseCMsgGCCheckClanMembershipResponse(): CMsgGCCheckClanMembershipResponse {
  return { ismember: false };
}

export const CMsgGCCheckClanMembershipResponse = {
  encode(message: CMsgGCCheckClanMembershipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ismember === true) {
      writer.uint32(8).bool(message.ismember);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCCheckClanMembershipResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCCheckClanMembershipResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ismember = reader.bool();
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

function createBaseCMsgGCHAppCheersReceived(): CMsgGCHAppCheersReceived {
  return { appid: 0, cheerTargets: [] };
}

export const CMsgGCHAppCheersReceived = {
  encode(message: CMsgGCHAppCheersReceived, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    for (const v of message.cheerTargets) {
      CMsgGCHAppCheersReceived_CheerTarget.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCHAppCheersReceived {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCHAppCheersReceived();
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

          message.cheerTargets.push(CMsgGCHAppCheersReceived_CheerTarget.decode(reader, reader.uint32()));
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

function createBaseCMsgGCHAppCheersReceived_CheerTypeAmount(): CMsgGCHAppCheersReceived_CheerTypeAmount {
  return { cheerType: 0, cheerAmount: 0 };
}

export const CMsgGCHAppCheersReceived_CheerTypeAmount = {
  encode(message: CMsgGCHAppCheersReceived_CheerTypeAmount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cheerType !== 0) {
      writer.uint32(8).uint32(message.cheerType);
    }
    if (message.cheerAmount !== 0) {
      writer.uint32(16).uint32(message.cheerAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCHAppCheersReceived_CheerTypeAmount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCHAppCheersReceived_CheerTypeAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.cheerType = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.cheerAmount = reader.uint32();
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

function createBaseCMsgGCHAppCheersReceived_CheerTarget(): CMsgGCHAppCheersReceived_CheerTarget {
  return { cheerTarget: "0", cheerTypes: [] };
}

export const CMsgGCHAppCheersReceived_CheerTarget = {
  encode(message: CMsgGCHAppCheersReceived_CheerTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cheerTarget !== "0") {
      writer.uint32(8).uint64(message.cheerTarget);
    }
    for (const v of message.cheerTypes) {
      CMsgGCHAppCheersReceived_CheerTypeAmount.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCHAppCheersReceived_CheerTarget {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCHAppCheersReceived_CheerTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.cheerTarget = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.cheerTypes.push(CMsgGCHAppCheersReceived_CheerTypeAmount.decode(reader, reader.uint32()));
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

function createBaseCMsgGCHAppCheersGetAllowedTypes(): CMsgGCHAppCheersGetAllowedTypes {
  return { appid: 0, cheerTarget: "0" };
}

export const CMsgGCHAppCheersGetAllowedTypes = {
  encode(message: CMsgGCHAppCheersGetAllowedTypes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.cheerTarget !== "0") {
      writer.uint32(16).uint64(message.cheerTarget);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCHAppCheersGetAllowedTypes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCHAppCheersGetAllowedTypes();
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

          message.cheerTarget = longToString(reader.uint64() as Long);
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

function createBaseCMsgGCHAppCheersGetAllowedTypesResponse(): CMsgGCHAppCheersGetAllowedTypesResponse {
  return { cheerTypesValidAllUsers: [], cheerRemaps: [], cacheDuration: 0 };
}

export const CMsgGCHAppCheersGetAllowedTypesResponse = {
  encode(message: CMsgGCHAppCheersGetAllowedTypesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.cheerTypesValidAllUsers) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.cheerRemaps) {
      CMsgGCHAppCheersGetAllowedTypesResponse_CheerRemaps.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.cacheDuration !== 0) {
      writer.uint32(24).uint32(message.cacheDuration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCHAppCheersGetAllowedTypesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCHAppCheersGetAllowedTypesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.cheerTypesValidAllUsers.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.cheerTypesValidAllUsers.push(reader.uint32());
            }

            continue;
          }

          break;
        case 2:
          if (tag != 18) {
            break;
          }

          message.cheerRemaps.push(CMsgGCHAppCheersGetAllowedTypesResponse_CheerRemaps.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.cacheDuration = reader.uint32();
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

function createBaseCMsgGCHAppCheersGetAllowedTypesResponse_CheerRemaps(): CMsgGCHAppCheersGetAllowedTypesResponse_CheerRemaps {
  return { originalCheerType: 0, remappedCheerType: 0, accountIds: [] };
}

export const CMsgGCHAppCheersGetAllowedTypesResponse_CheerRemaps = {
  encode(
    message: CMsgGCHAppCheersGetAllowedTypesResponse_CheerRemaps,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.originalCheerType !== 0) {
      writer.uint32(8).uint32(message.originalCheerType);
    }
    if (message.remappedCheerType !== 0) {
      writer.uint32(16).uint32(message.remappedCheerType);
    }
    writer.uint32(26).fork();
    for (const v of message.accountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCHAppCheersGetAllowedTypesResponse_CheerRemaps {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCHAppCheersGetAllowedTypesResponse_CheerRemaps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.originalCheerType = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.remappedCheerType = reader.uint32();
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
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCGCSystemMsgReportExternalPurchaseRequest(): CGCSystemMsgReportExternalPurchaseRequest {
  return {
    appid: 0,
    steamid: "0",
    provider: 0,
    orderid: "0",
    providerOrderid: "",
    amount: "0",
    currency: "",
    quantity: 0,
    itemid: 0,
    itemDescription: "",
    language: "",
    category: "",
    timeCreated: 0,
  };
}

export const CGCSystemMsgReportExternalPurchaseRequest = {
  encode(message: CGCSystemMsgReportExternalPurchaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.steamid !== "0") {
      writer.uint32(17).fixed64(message.steamid);
    }
    if (message.provider !== 0) {
      writer.uint32(24).int32(message.provider);
    }
    if (message.orderid !== "0") {
      writer.uint32(32).uint64(message.orderid);
    }
    if (message.providerOrderid !== "") {
      writer.uint32(42).string(message.providerOrderid);
    }
    if (message.amount !== "0") {
      writer.uint32(48).int64(message.amount);
    }
    if (message.currency !== "") {
      writer.uint32(58).string(message.currency);
    }
    if (message.quantity !== 0) {
      writer.uint32(64).uint32(message.quantity);
    }
    if (message.itemid !== 0) {
      writer.uint32(72).uint32(message.itemid);
    }
    if (message.itemDescription !== "") {
      writer.uint32(82).string(message.itemDescription);
    }
    if (message.language !== "") {
      writer.uint32(90).string(message.language);
    }
    if (message.category !== "") {
      writer.uint32(98).string(message.category);
    }
    if (message.timeCreated !== 0) {
      writer.uint32(104).uint32(message.timeCreated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCSystemMsgReportExternalPurchaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCSystemMsgReportExternalPurchaseRequest();
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
          if (tag != 24) {
            break;
          }

          message.provider = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.orderid = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.providerOrderid = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.amount = longToString(reader.int64() as Long);
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.quantity = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.itemid = reader.uint32();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.itemDescription = reader.string();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.language = reader.string();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.category = reader.string();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.timeCreated = reader.uint32();
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

function createBaseCGCSystemMsgReportExternalPurchaseResponse(): CGCSystemMsgReportExternalPurchaseResponse {
  return { transid: "0", orderid: "0" };
}

export const CGCSystemMsgReportExternalPurchaseResponse = {
  encode(message: CGCSystemMsgReportExternalPurchaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transid !== "0") {
      writer.uint32(9).fixed64(message.transid);
    }
    if (message.orderid !== "0") {
      writer.uint32(16).uint64(message.orderid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCSystemMsgReportExternalPurchaseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCSystemMsgReportExternalPurchaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.transid = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.orderid = longToString(reader.uint64() as Long);
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

function createBaseCWorkshopAddSpecialPaymentRequest(): CWorkshopAddSpecialPaymentRequest {
  return { appid: 0, gameitemid: 0, date: "", paymentUsUsd: "0", paymentRowUsd: "0" };
}

export const CWorkshopAddSpecialPaymentRequest = {
  encode(message: CWorkshopAddSpecialPaymentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.gameitemid !== 0) {
      writer.uint32(16).uint32(message.gameitemid);
    }
    if (message.date !== "") {
      writer.uint32(26).string(message.date);
    }
    if (message.paymentUsUsd !== "0") {
      writer.uint32(32).uint64(message.paymentUsUsd);
    }
    if (message.paymentRowUsd !== "0") {
      writer.uint32(40).uint64(message.paymentRowUsd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CWorkshopAddSpecialPaymentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopAddSpecialPaymentRequest();
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

          message.date = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.paymentUsUsd = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.paymentRowUsd = longToString(reader.uint64() as Long);
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

function createBaseCWorkshopAddSpecialPaymentResponse(): CWorkshopAddSpecialPaymentResponse {
  return {};
}

export const CWorkshopAddSpecialPaymentResponse = {
  encode(_: CWorkshopAddSpecialPaymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CWorkshopAddSpecialPaymentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopAddSpecialPaymentResponse();
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

function createBaseCWorkshopGetSpecialPaymentsRequest(): CWorkshopGetSpecialPaymentsRequest {
  return { appid: 0, gameitemid: 0, date: "" };
}

export const CWorkshopGetSpecialPaymentsRequest = {
  encode(message: CWorkshopGetSpecialPaymentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.gameitemid !== 0) {
      writer.uint32(16).uint32(message.gameitemid);
    }
    if (message.date !== "") {
      writer.uint32(26).string(message.date);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CWorkshopGetSpecialPaymentsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopGetSpecialPaymentsRequest();
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

          message.date = reader.string();
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

function createBaseCWorkshopGetSpecialPaymentsResponse(): CWorkshopGetSpecialPaymentsResponse {
  return { specialPayments: [] };
}

export const CWorkshopGetSpecialPaymentsResponse = {
  encode(message: CWorkshopGetSpecialPaymentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.specialPayments) {
      CWorkshopGetSpecialPaymentsResponse_SpecialPayment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CWorkshopGetSpecialPaymentsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopGetSpecialPaymentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.specialPayments.push(
            CWorkshopGetSpecialPaymentsResponse_SpecialPayment.decode(reader, reader.uint32()),
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
};

function createBaseCWorkshopGetSpecialPaymentsResponse_SpecialPayment(): CWorkshopGetSpecialPaymentsResponse_SpecialPayment {
  return { appid: 0, gameitemid: 0, date: "", netPaymentUsUsd: "0", netPaymentRowUsd: "0" };
}

export const CWorkshopGetSpecialPaymentsResponse_SpecialPayment = {
  encode(
    message: CWorkshopGetSpecialPaymentsResponse_SpecialPayment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.gameitemid !== 0) {
      writer.uint32(16).uint32(message.gameitemid);
    }
    if (message.date !== "") {
      writer.uint32(26).string(message.date);
    }
    if (message.netPaymentUsUsd !== "0") {
      writer.uint32(32).uint64(message.netPaymentUsUsd);
    }
    if (message.netPaymentRowUsd !== "0") {
      writer.uint32(40).uint64(message.netPaymentRowUsd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CWorkshopGetSpecialPaymentsResponse_SpecialPayment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopGetSpecialPaymentsResponse_SpecialPayment();
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

          message.date = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.netPaymentUsUsd = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.netPaymentRowUsd = longToString(reader.uint64() as Long);
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
