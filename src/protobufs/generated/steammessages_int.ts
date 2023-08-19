/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export enum EMobilePaymentProvider {
  k_EMobilePaymentProvider_Invalid = 0,
  k_EMobilePaymentProvider_GooglePlay = 1,
  k_EMobilePaymentProvider_AppleAppStore = 2,
}

export function eMobilePaymentProviderFromJSON(object: any): EMobilePaymentProvider {
  switch (object) {
    case 0:
    case "k_EMobilePaymentProvider_Invalid":
      return EMobilePaymentProvider.k_EMobilePaymentProvider_Invalid;
    case 1:
    case "k_EMobilePaymentProvider_GooglePlay":
      return EMobilePaymentProvider.k_EMobilePaymentProvider_GooglePlay;
    case 2:
    case "k_EMobilePaymentProvider_AppleAppStore":
      return EMobilePaymentProvider.k_EMobilePaymentProvider_AppleAppStore;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EMobilePaymentProvider");
  }
}

export function eMobilePaymentProviderToJSON(object: EMobilePaymentProvider): string {
  switch (object) {
    case EMobilePaymentProvider.k_EMobilePaymentProvider_Invalid:
      return "k_EMobilePaymentProvider_Invalid";
    case EMobilePaymentProvider.k_EMobilePaymentProvider_GooglePlay:
      return "k_EMobilePaymentProvider_GooglePlay";
    case EMobilePaymentProvider.k_EMobilePaymentProvider_AppleAppStore:
      return "k_EMobilePaymentProvider_AppleAppStore";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EMobilePaymentProvider");
  }
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

export function cMsgGCRoutingInfo_RoutingMethodFromJSON(object: any): CMsgGCRoutingInfo_RoutingMethod {
  switch (object) {
    case 0:
    case "RANDOM":
      return CMsgGCRoutingInfo_RoutingMethod.RANDOM;
    case 1:
    case "DISCARD":
      return CMsgGCRoutingInfo_RoutingMethod.DISCARD;
    case 2:
    case "CLIENT_STEAMID":
      return CMsgGCRoutingInfo_RoutingMethod.CLIENT_STEAMID;
    case 3:
    case "PROTOBUF_FIELD_UINT64":
      return CMsgGCRoutingInfo_RoutingMethod.PROTOBUF_FIELD_UINT64;
    case 4:
    case "WEBAPI_PARAM":
      return CMsgGCRoutingInfo_RoutingMethod.WEBAPI_PARAM;
    case 5:
    case "WEBAPI_PARAM_STEAMID_ACCOUNTID":
      return CMsgGCRoutingInfo_RoutingMethod.WEBAPI_PARAM_STEAMID_ACCOUNTID;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgGCRoutingInfo_RoutingMethod",
      );
  }
}

export function cMsgGCRoutingInfo_RoutingMethodToJSON(object: CMsgGCRoutingInfo_RoutingMethod): string {
  switch (object) {
    case CMsgGCRoutingInfo_RoutingMethod.RANDOM:
      return "RANDOM";
    case CMsgGCRoutingInfo_RoutingMethod.DISCARD:
      return "DISCARD";
    case CMsgGCRoutingInfo_RoutingMethod.CLIENT_STEAMID:
      return "CLIENT_STEAMID";
    case CMsgGCRoutingInfo_RoutingMethod.PROTOBUF_FIELD_UINT64:
      return "PROTOBUF_FIELD_UINT64";
    case CMsgGCRoutingInfo_RoutingMethod.WEBAPI_PARAM:
      return "WEBAPI_PARAM";
    case CMsgGCRoutingInfo_RoutingMethod.WEBAPI_PARAM_STEAMID_ACCOUNTID:
      return "WEBAPI_PARAM_STEAMID_ACCOUNTID";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgGCRoutingInfo_RoutingMethod",
      );
  }
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

export function cMsgGCMsgSetOptions_OptionFromJSON(object: any): CMsgGCMsgSetOptions_Option {
  switch (object) {
    case 0:
    case "NOTIFY_USER_SESSIONS":
      return CMsgGCMsgSetOptions_Option.NOTIFY_USER_SESSIONS;
    case 1:
    case "NOTIFY_SERVER_SESSIONS":
      return CMsgGCMsgSetOptions_Option.NOTIFY_SERVER_SESSIONS;
    case 2:
    case "NOTIFY_ACHIEVEMENTS":
      return CMsgGCMsgSetOptions_Option.NOTIFY_ACHIEVEMENTS;
    case 3:
    case "NOTIFY_VAC_ACTION":
      return CMsgGCMsgSetOptions_Option.NOTIFY_VAC_ACTION;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CMsgGCMsgSetOptions_Option");
  }
}

export function cMsgGCMsgSetOptions_OptionToJSON(object: CMsgGCMsgSetOptions_Option): string {
  switch (object) {
    case CMsgGCMsgSetOptions_Option.NOTIFY_USER_SESSIONS:
      return "NOTIFY_USER_SESSIONS";
    case CMsgGCMsgSetOptions_Option.NOTIFY_SERVER_SESSIONS:
      return "NOTIFY_SERVER_SESSIONS";
    case CMsgGCMsgSetOptions_Option.NOTIFY_ACHIEVEMENTS:
      return "NOTIFY_ACHIEVEMENTS";
    case CMsgGCMsgSetOptions_Option.NOTIFY_VAC_ACTION:
      return "NOTIFY_VAC_ACTION";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CMsgGCMsgSetOptions_Option");
  }
}

export enum CMsgGCMsgSetOptions_GCSQLVersion {
  GCSQL_VERSION_BASELINE = 1,
  GCSQL_VERSION_BOOLTYPE = 2,
}

export function cMsgGCMsgSetOptions_GCSQLVersionFromJSON(object: any): CMsgGCMsgSetOptions_GCSQLVersion {
  switch (object) {
    case 1:
    case "GCSQL_VERSION_BASELINE":
      return CMsgGCMsgSetOptions_GCSQLVersion.GCSQL_VERSION_BASELINE;
    case 2:
    case "GCSQL_VERSION_BOOLTYPE":
      return CMsgGCMsgSetOptions_GCSQLVersion.GCSQL_VERSION_BOOLTYPE;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgGCMsgSetOptions_GCSQLVersion",
      );
  }
}

export function cMsgGCMsgSetOptions_GCSQLVersionToJSON(object: CMsgGCMsgSetOptions_GCSQLVersion): string {
  switch (object) {
    case CMsgGCMsgSetOptions_GCSQLVersion.GCSQL_VERSION_BASELINE:
      return "GCSQL_VERSION_BASELINE";
    case CMsgGCMsgSetOptions_GCSQLVersion.GCSQL_VERSION_BOOLTYPE:
      return "GCSQL_VERSION_BOOLTYPE";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgGCMsgSetOptions_GCSQLVersion",
      );
  }
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

export function cMsgDPPartnerMicroTxnsResponse_EErrorCodeFromJSON(
  object: any,
): CMsgDPPartnerMicroTxnsResponse_EErrorCode {
  switch (object) {
    case 0:
    case "k_MsgValid":
      return CMsgDPPartnerMicroTxnsResponse_EErrorCode.k_MsgValid;
    case 1:
    case "k_MsgInvalidAppID":
      return CMsgDPPartnerMicroTxnsResponse_EErrorCode.k_MsgInvalidAppID;
    case 2:
    case "k_MsgInvalidPartnerInfo":
      return CMsgDPPartnerMicroTxnsResponse_EErrorCode.k_MsgInvalidPartnerInfo;
    case 3:
    case "k_MsgNoTransactions":
      return CMsgDPPartnerMicroTxnsResponse_EErrorCode.k_MsgNoTransactions;
    case 4:
    case "k_MsgSQLFailure":
      return CMsgDPPartnerMicroTxnsResponse_EErrorCode.k_MsgSQLFailure;
    case 5:
    case "k_MsgPartnerInfoDiscrepancy":
      return CMsgDPPartnerMicroTxnsResponse_EErrorCode.k_MsgPartnerInfoDiscrepancy;
    case 7:
    case "k_MsgTransactionInsertFailed":
      return CMsgDPPartnerMicroTxnsResponse_EErrorCode.k_MsgTransactionInsertFailed;
    case 8:
    case "k_MsgAlreadyRunning":
      return CMsgDPPartnerMicroTxnsResponse_EErrorCode.k_MsgAlreadyRunning;
    case 9:
    case "k_MsgInvalidTransactionData":
      return CMsgDPPartnerMicroTxnsResponse_EErrorCode.k_MsgInvalidTransactionData;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDPPartnerMicroTxnsResponse_EErrorCode",
      );
  }
}

export function cMsgDPPartnerMicroTxnsResponse_EErrorCodeToJSON(
  object: CMsgDPPartnerMicroTxnsResponse_EErrorCode,
): string {
  switch (object) {
    case CMsgDPPartnerMicroTxnsResponse_EErrorCode.k_MsgValid:
      return "k_MsgValid";
    case CMsgDPPartnerMicroTxnsResponse_EErrorCode.k_MsgInvalidAppID:
      return "k_MsgInvalidAppID";
    case CMsgDPPartnerMicroTxnsResponse_EErrorCode.k_MsgInvalidPartnerInfo:
      return "k_MsgInvalidPartnerInfo";
    case CMsgDPPartnerMicroTxnsResponse_EErrorCode.k_MsgNoTransactions:
      return "k_MsgNoTransactions";
    case CMsgDPPartnerMicroTxnsResponse_EErrorCode.k_MsgSQLFailure:
      return "k_MsgSQLFailure";
    case CMsgDPPartnerMicroTxnsResponse_EErrorCode.k_MsgPartnerInfoDiscrepancy:
      return "k_MsgPartnerInfoDiscrepancy";
    case CMsgDPPartnerMicroTxnsResponse_EErrorCode.k_MsgTransactionInsertFailed:
      return "k_MsgTransactionInsertFailed";
    case CMsgDPPartnerMicroTxnsResponse_EErrorCode.k_MsgAlreadyRunning:
      return "k_MsgAlreadyRunning";
    case CMsgDPPartnerMicroTxnsResponse_EErrorCode.k_MsgInvalidTransactionData:
      return "k_MsgInvalidTransactionData";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDPPartnerMicroTxnsResponse_EErrorCode",
      );
  }
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

  fromJSON(object: any): CMsgWebAPIKey {
    return {
      status: isSet(object.status) ? Number(object.status) : 0,
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      publisherGroupId: isSet(object.publisherGroupId) ? Number(object.publisherGroupId) : 0,
      keyId: isSet(object.keyId) ? Number(object.keyId) : 0,
      domain: isSet(object.domain) ? String(object.domain) : "",
    };
  },

  toJSON(message: CMsgWebAPIKey): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.publisherGroupId !== undefined && (obj.publisherGroupId = Math.round(message.publisherGroupId));
    message.keyId !== undefined && (obj.keyId = Math.round(message.keyId));
    message.domain !== undefined && (obj.domain = message.domain);
    return obj;
  },

  create(base?: DeepPartial<CMsgWebAPIKey>): CMsgWebAPIKey {
    return CMsgWebAPIKey.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgWebAPIKey>): CMsgWebAPIKey {
    const message = createBaseCMsgWebAPIKey();
    message.status = object.status ?? 0;
    message.accountId = object.accountId ?? 0;
    message.publisherGroupId = object.publisherGroupId ?? 0;
    message.keyId = object.keyId ?? 0;
    message.domain = object.domain ?? "";
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

  fromJSON(object: any): CMsgHttpRequest {
    return {
      requestMethod: isSet(object.requestMethod) ? Number(object.requestMethod) : 0,
      hostname: isSet(object.hostname) ? String(object.hostname) : "",
      url: isSet(object.url) ? String(object.url) : "",
      headers: Array.isArray(object?.headers)
        ? object.headers.map((e: any) => CMsgHttpRequest_RequestHeader.fromJSON(e))
        : [],
      getParams: Array.isArray(object?.getParams)
        ? object.getParams.map((e: any) => CMsgHttpRequest_QueryParam.fromJSON(e))
        : [],
      postParams: Array.isArray(object?.postParams)
        ? object.postParams.map((e: any) => CMsgHttpRequest_QueryParam.fromJSON(e))
        : [],
      body: isSet(object.body) ? Buffer.from(bytesFromBase64(object.body)) : Buffer.alloc(0),
      absoluteTimeout: isSet(object.absoluteTimeout) ? Number(object.absoluteTimeout) : 0,
      useHttps: isSet(object.useHttps) ? Boolean(object.useHttps) : false,
    };
  },

  toJSON(message: CMsgHttpRequest): unknown {
    const obj: any = {};
    message.requestMethod !== undefined && (obj.requestMethod = Math.round(message.requestMethod));
    message.hostname !== undefined && (obj.hostname = message.hostname);
    message.url !== undefined && (obj.url = message.url);
    if (message.headers) {
      obj.headers = message.headers.map((e) => e ? CMsgHttpRequest_RequestHeader.toJSON(e) : undefined);
    } else {
      obj.headers = [];
    }
    if (message.getParams) {
      obj.getParams = message.getParams.map((e) => e ? CMsgHttpRequest_QueryParam.toJSON(e) : undefined);
    } else {
      obj.getParams = [];
    }
    if (message.postParams) {
      obj.postParams = message.postParams.map((e) => e ? CMsgHttpRequest_QueryParam.toJSON(e) : undefined);
    } else {
      obj.postParams = [];
    }
    message.body !== undefined &&
      (obj.body = base64FromBytes(message.body !== undefined ? message.body : Buffer.alloc(0)));
    message.absoluteTimeout !== undefined && (obj.absoluteTimeout = Math.round(message.absoluteTimeout));
    message.useHttps !== undefined && (obj.useHttps = message.useHttps);
    return obj;
  },

  create(base?: DeepPartial<CMsgHttpRequest>): CMsgHttpRequest {
    return CMsgHttpRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgHttpRequest>): CMsgHttpRequest {
    const message = createBaseCMsgHttpRequest();
    message.requestMethod = object.requestMethod ?? 0;
    message.hostname = object.hostname ?? "";
    message.url = object.url ?? "";
    message.headers = object.headers?.map((e) => CMsgHttpRequest_RequestHeader.fromPartial(e)) || [];
    message.getParams = object.getParams?.map((e) => CMsgHttpRequest_QueryParam.fromPartial(e)) || [];
    message.postParams = object.postParams?.map((e) => CMsgHttpRequest_QueryParam.fromPartial(e)) || [];
    message.body = object.body ?? Buffer.alloc(0);
    message.absoluteTimeout = object.absoluteTimeout ?? 0;
    message.useHttps = object.useHttps ?? false;
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

  fromJSON(object: any): CMsgHttpRequest_RequestHeader {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: CMsgHttpRequest_RequestHeader): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(base?: DeepPartial<CMsgHttpRequest_RequestHeader>): CMsgHttpRequest_RequestHeader {
    return CMsgHttpRequest_RequestHeader.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgHttpRequest_RequestHeader>): CMsgHttpRequest_RequestHeader {
    const message = createBaseCMsgHttpRequest_RequestHeader();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
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

  fromJSON(object: any): CMsgHttpRequest_QueryParam {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? Buffer.from(bytesFromBase64(object.value)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgHttpRequest_QueryParam): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CMsgHttpRequest_QueryParam>): CMsgHttpRequest_QueryParam {
    return CMsgHttpRequest_QueryParam.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgHttpRequest_QueryParam>): CMsgHttpRequest_QueryParam {
    const message = createBaseCMsgHttpRequest_QueryParam();
    message.name = object.name ?? "";
    message.value = object.value ?? Buffer.alloc(0);
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

  fromJSON(object: any): CMsgWebAPIRequest {
    return {
      interfaceName: isSet(object.interfaceName) ? String(object.interfaceName) : "",
      methodName: isSet(object.methodName) ? String(object.methodName) : "",
      version: isSet(object.version) ? Number(object.version) : 0,
      apiKey: isSet(object.apiKey) ? CMsgWebAPIKey.fromJSON(object.apiKey) : undefined,
      request: isSet(object.request) ? CMsgHttpRequest.fromJSON(object.request) : undefined,
      routingAppId: isSet(object.routingAppId) ? Number(object.routingAppId) : 0,
    };
  },

  toJSON(message: CMsgWebAPIRequest): unknown {
    const obj: any = {};
    message.interfaceName !== undefined && (obj.interfaceName = message.interfaceName);
    message.methodName !== undefined && (obj.methodName = message.methodName);
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? CMsgWebAPIKey.toJSON(message.apiKey) : undefined);
    message.request !== undefined &&
      (obj.request = message.request ? CMsgHttpRequest.toJSON(message.request) : undefined);
    message.routingAppId !== undefined && (obj.routingAppId = Math.round(message.routingAppId));
    return obj;
  },

  create(base?: DeepPartial<CMsgWebAPIRequest>): CMsgWebAPIRequest {
    return CMsgWebAPIRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgWebAPIRequest>): CMsgWebAPIRequest {
    const message = createBaseCMsgWebAPIRequest();
    message.interfaceName = object.interfaceName ?? "";
    message.methodName = object.methodName ?? "";
    message.version = object.version ?? 0;
    message.apiKey = (object.apiKey !== undefined && object.apiKey !== null)
      ? CMsgWebAPIKey.fromPartial(object.apiKey)
      : undefined;
    message.request = (object.request !== undefined && object.request !== null)
      ? CMsgHttpRequest.fromPartial(object.request)
      : undefined;
    message.routingAppId = object.routingAppId ?? 0;
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

  fromJSON(object: any): CMsgHttpResponse {
    return {
      statusCode: isSet(object.statusCode) ? Number(object.statusCode) : 0,
      headers: Array.isArray(object?.headers)
        ? object.headers.map((e: any) => CMsgHttpResponse_ResponseHeader.fromJSON(e))
        : [],
      body: isSet(object.body) ? Buffer.from(bytesFromBase64(object.body)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgHttpResponse): unknown {
    const obj: any = {};
    message.statusCode !== undefined && (obj.statusCode = Math.round(message.statusCode));
    if (message.headers) {
      obj.headers = message.headers.map((e) => e ? CMsgHttpResponse_ResponseHeader.toJSON(e) : undefined);
    } else {
      obj.headers = [];
    }
    message.body !== undefined &&
      (obj.body = base64FromBytes(message.body !== undefined ? message.body : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CMsgHttpResponse>): CMsgHttpResponse {
    return CMsgHttpResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgHttpResponse>): CMsgHttpResponse {
    const message = createBaseCMsgHttpResponse();
    message.statusCode = object.statusCode ?? 0;
    message.headers = object.headers?.map((e) => CMsgHttpResponse_ResponseHeader.fromPartial(e)) || [];
    message.body = object.body ?? Buffer.alloc(0);
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

  fromJSON(object: any): CMsgHttpResponse_ResponseHeader {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: CMsgHttpResponse_ResponseHeader): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(base?: DeepPartial<CMsgHttpResponse_ResponseHeader>): CMsgHttpResponse_ResponseHeader {
    return CMsgHttpResponse_ResponseHeader.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgHttpResponse_ResponseHeader>): CMsgHttpResponse_ResponseHeader {
    const message = createBaseCMsgHttpResponse_ResponseHeader();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
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

  fromJSON(object: any): CMsgAMFindAccounts {
    return {
      searchType: isSet(object.searchType) ? Number(object.searchType) : 0,
      searchString: isSet(object.searchString) ? String(object.searchString) : "",
    };
  },

  toJSON(message: CMsgAMFindAccounts): unknown {
    const obj: any = {};
    message.searchType !== undefined && (obj.searchType = Math.round(message.searchType));
    message.searchString !== undefined && (obj.searchString = message.searchString);
    return obj;
  },

  create(base?: DeepPartial<CMsgAMFindAccounts>): CMsgAMFindAccounts {
    return CMsgAMFindAccounts.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAMFindAccounts>): CMsgAMFindAccounts {
    const message = createBaseCMsgAMFindAccounts();
    message.searchType = object.searchType ?? 0;
    message.searchString = object.searchString ?? "";
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

  fromJSON(object: any): CMsgAMFindAccountsResponse {
    return { steamId: Array.isArray(object?.steamId) ? object.steamId.map((e: any) => String(e)) : [] };
  },

  toJSON(message: CMsgAMFindAccountsResponse): unknown {
    const obj: any = {};
    if (message.steamId) {
      obj.steamId = message.steamId.map((e) => e);
    } else {
      obj.steamId = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgAMFindAccountsResponse>): CMsgAMFindAccountsResponse {
    return CMsgAMFindAccountsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAMFindAccountsResponse>): CMsgAMFindAccountsResponse {
    const message = createBaseCMsgAMFindAccountsResponse();
    message.steamId = object.steamId?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgNotifyWatchdog {
    return {
      source: isSet(object.source) ? Number(object.source) : 0,
      alertType: isSet(object.alertType) ? Number(object.alertType) : 0,
      critical: isSet(object.critical) ? Boolean(object.critical) : false,
      time: isSet(object.time) ? Number(object.time) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      text: isSet(object.text) ? String(object.text) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: CMsgNotifyWatchdog): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = Math.round(message.source));
    message.alertType !== undefined && (obj.alertType = Math.round(message.alertType));
    message.critical !== undefined && (obj.critical = message.critical);
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.text !== undefined && (obj.text = message.text);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  create(base?: DeepPartial<CMsgNotifyWatchdog>): CMsgNotifyWatchdog {
    return CMsgNotifyWatchdog.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgNotifyWatchdog>): CMsgNotifyWatchdog {
    const message = createBaseCMsgNotifyWatchdog();
    message.source = object.source ?? 0;
    message.alertType = object.alertType ?? 0;
    message.critical = object.critical ?? false;
    message.time = object.time ?? 0;
    message.appid = object.appid ?? 0;
    message.text = object.text ?? "";
    message.recipient = object.recipient ?? "";
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

  fromJSON(object: any): CMsgAMGetLicenses {
    return { steamid: isSet(object.steamid) ? String(object.steamid) : "0" };
  },

  toJSON(message: CMsgAMGetLicenses): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create(base?: DeepPartial<CMsgAMGetLicenses>): CMsgAMGetLicenses {
    return CMsgAMGetLicenses.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAMGetLicenses>): CMsgAMGetLicenses {
    const message = createBaseCMsgAMGetLicenses();
    message.steamid = object.steamid ?? "0";
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

  fromJSON(object: any): CMsgPackageLicense {
    return {
      packageId: isSet(object.packageId) ? Number(object.packageId) : 0,
      timeCreated: isSet(object.timeCreated) ? Number(object.timeCreated) : 0,
      ownerId: isSet(object.ownerId) ? Number(object.ownerId) : 0,
    };
  },

  toJSON(message: CMsgPackageLicense): unknown {
    const obj: any = {};
    message.packageId !== undefined && (obj.packageId = Math.round(message.packageId));
    message.timeCreated !== undefined && (obj.timeCreated = Math.round(message.timeCreated));
    message.ownerId !== undefined && (obj.ownerId = Math.round(message.ownerId));
    return obj;
  },

  create(base?: DeepPartial<CMsgPackageLicense>): CMsgPackageLicense {
    return CMsgPackageLicense.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgPackageLicense>): CMsgPackageLicense {
    const message = createBaseCMsgPackageLicense();
    message.packageId = object.packageId ?? 0;
    message.timeCreated = object.timeCreated ?? 0;
    message.ownerId = object.ownerId ?? 0;
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

  fromJSON(object: any): CMsgAMGetLicensesResponse {
    return {
      license: Array.isArray(object?.license) ? object.license.map((e: any) => CMsgPackageLicense.fromJSON(e)) : [],
      result: isSet(object.result) ? Number(object.result) : 0,
    };
  },

  toJSON(message: CMsgAMGetLicensesResponse): unknown {
    const obj: any = {};
    if (message.license) {
      obj.license = message.license.map((e) => e ? CMsgPackageLicense.toJSON(e) : undefined);
    } else {
      obj.license = [];
    }
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },

  create(base?: DeepPartial<CMsgAMGetLicensesResponse>): CMsgAMGetLicensesResponse {
    return CMsgAMGetLicensesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAMGetLicensesResponse>): CMsgAMGetLicensesResponse {
    const message = createBaseCMsgAMGetLicensesResponse();
    message.license = object.license?.map((e) => CMsgPackageLicense.fromPartial(e)) || [];
    message.result = object.result ?? 0;
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

  fromJSON(object: any): CMsgAMGetUserGameStats {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      gameId: isSet(object.gameId) ? String(object.gameId) : "0",
      stats: Array.isArray(object?.stats) ? object.stats.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgAMGetUserGameStats): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.gameId !== undefined && (obj.gameId = message.gameId);
    if (message.stats) {
      obj.stats = message.stats.map((e) => Math.round(e));
    } else {
      obj.stats = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgAMGetUserGameStats>): CMsgAMGetUserGameStats {
    return CMsgAMGetUserGameStats.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAMGetUserGameStats>): CMsgAMGetUserGameStats {
    const message = createBaseCMsgAMGetUserGameStats();
    message.steamId = object.steamId ?? "0";
    message.gameId = object.gameId ?? "0";
    message.stats = object.stats?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgAMGetUserGameStatsResponse {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      gameId: isSet(object.gameId) ? String(object.gameId) : "0",
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      stats: Array.isArray(object?.stats)
        ? object.stats.map((e: any) => CMsgAMGetUserGameStatsResponse_Stats.fromJSON(e))
        : [],
      achievementBlocks: Array.isArray(object?.achievementBlocks)
        ? object.achievementBlocks.map((e: any) => CMsgAMGetUserGameStatsResponse_AchievementBlocks.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgAMGetUserGameStatsResponse): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.gameId !== undefined && (obj.gameId = message.gameId);
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    if (message.stats) {
      obj.stats = message.stats.map((e) => e ? CMsgAMGetUserGameStatsResponse_Stats.toJSON(e) : undefined);
    } else {
      obj.stats = [];
    }
    if (message.achievementBlocks) {
      obj.achievementBlocks = message.achievementBlocks.map((e) =>
        e ? CMsgAMGetUserGameStatsResponse_AchievementBlocks.toJSON(e) : undefined
      );
    } else {
      obj.achievementBlocks = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgAMGetUserGameStatsResponse>): CMsgAMGetUserGameStatsResponse {
    return CMsgAMGetUserGameStatsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAMGetUserGameStatsResponse>): CMsgAMGetUserGameStatsResponse {
    const message = createBaseCMsgAMGetUserGameStatsResponse();
    message.steamId = object.steamId ?? "0";
    message.gameId = object.gameId ?? "0";
    message.eresult = object.eresult ?? 0;
    message.stats = object.stats?.map((e) => CMsgAMGetUserGameStatsResponse_Stats.fromPartial(e)) || [];
    message.achievementBlocks =
      object.achievementBlocks?.map((e) => CMsgAMGetUserGameStatsResponse_AchievementBlocks.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgAMGetUserGameStatsResponse_Stats {
    return {
      statId: isSet(object.statId) ? Number(object.statId) : 0,
      statValue: isSet(object.statValue) ? Number(object.statValue) : 0,
    };
  },

  toJSON(message: CMsgAMGetUserGameStatsResponse_Stats): unknown {
    const obj: any = {};
    message.statId !== undefined && (obj.statId = Math.round(message.statId));
    message.statValue !== undefined && (obj.statValue = Math.round(message.statValue));
    return obj;
  },

  create(base?: DeepPartial<CMsgAMGetUserGameStatsResponse_Stats>): CMsgAMGetUserGameStatsResponse_Stats {
    return CMsgAMGetUserGameStatsResponse_Stats.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAMGetUserGameStatsResponse_Stats>): CMsgAMGetUserGameStatsResponse_Stats {
    const message = createBaseCMsgAMGetUserGameStatsResponse_Stats();
    message.statId = object.statId ?? 0;
    message.statValue = object.statValue ?? 0;
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

  fromJSON(object: any): CMsgAMGetUserGameStatsResponse_AchievementBlocks {
    return {
      achievementId: isSet(object.achievementId) ? Number(object.achievementId) : 0,
      achievementBitId: isSet(object.achievementBitId) ? Number(object.achievementBitId) : 0,
      unlockTime: isSet(object.unlockTime) ? Number(object.unlockTime) : 0,
    };
  },

  toJSON(message: CMsgAMGetUserGameStatsResponse_AchievementBlocks): unknown {
    const obj: any = {};
    message.achievementId !== undefined && (obj.achievementId = Math.round(message.achievementId));
    message.achievementBitId !== undefined && (obj.achievementBitId = Math.round(message.achievementBitId));
    message.unlockTime !== undefined && (obj.unlockTime = Math.round(message.unlockTime));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgAMGetUserGameStatsResponse_AchievementBlocks>,
  ): CMsgAMGetUserGameStatsResponse_AchievementBlocks {
    return CMsgAMGetUserGameStatsResponse_AchievementBlocks.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgAMGetUserGameStatsResponse_AchievementBlocks>,
  ): CMsgAMGetUserGameStatsResponse_AchievementBlocks {
    const message = createBaseCMsgAMGetUserGameStatsResponse_AchievementBlocks();
    message.achievementId = object.achievementId ?? 0;
    message.achievementBitId = object.achievementBitId ?? 0;
    message.unlockTime = object.unlockTime ?? 0;
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

  fromJSON(object: any): CMsgGCGetCommandList {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      commandPrefix: isSet(object.commandPrefix) ? String(object.commandPrefix) : "",
    };
  },

  toJSON(message: CMsgGCGetCommandList): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.commandPrefix !== undefined && (obj.commandPrefix = message.commandPrefix);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCGetCommandList>): CMsgGCGetCommandList {
    return CMsgGCGetCommandList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCGetCommandList>): CMsgGCGetCommandList {
    const message = createBaseCMsgGCGetCommandList();
    message.appId = object.appId ?? 0;
    message.commandPrefix = object.commandPrefix ?? "";
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

  fromJSON(object: any): CMsgGCGetCommandListResponse {
    return { commandName: Array.isArray(object?.commandName) ? object.commandName.map((e: any) => String(e)) : [] };
  },

  toJSON(message: CMsgGCGetCommandListResponse): unknown {
    const obj: any = {};
    if (message.commandName) {
      obj.commandName = message.commandName.map((e) => e);
    } else {
      obj.commandName = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGCGetCommandListResponse>): CMsgGCGetCommandListResponse {
    return CMsgGCGetCommandListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCGetCommandListResponse>): CMsgGCGetCommandListResponse {
    const message = createBaseCMsgGCGetCommandListResponse();
    message.commandName = object.commandName?.map((e) => e) || [];
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

  fromJSON(object: any): CGCMsgMemCachedGet {
    return { keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => String(e)) : [] };
  },

  toJSON(message: CGCMsgMemCachedGet): unknown {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map((e) => e);
    } else {
      obj.keys = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CGCMsgMemCachedGet>): CGCMsgMemCachedGet {
    return CGCMsgMemCachedGet.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CGCMsgMemCachedGet>): CGCMsgMemCachedGet {
    const message = createBaseCGCMsgMemCachedGet();
    message.keys = object.keys?.map((e) => e) || [];
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

  fromJSON(object: any): CGCMsgMemCachedGetResponse {
    return {
      values: Array.isArray(object?.values)
        ? object.values.map((e: any) => CGCMsgMemCachedGetResponse_ValueTag.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CGCMsgMemCachedGetResponse): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => e ? CGCMsgMemCachedGetResponse_ValueTag.toJSON(e) : undefined);
    } else {
      obj.values = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CGCMsgMemCachedGetResponse>): CGCMsgMemCachedGetResponse {
    return CGCMsgMemCachedGetResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CGCMsgMemCachedGetResponse>): CGCMsgMemCachedGetResponse {
    const message = createBaseCGCMsgMemCachedGetResponse();
    message.values = object.values?.map((e) => CGCMsgMemCachedGetResponse_ValueTag.fromPartial(e)) || [];
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

  fromJSON(object: any): CGCMsgMemCachedGetResponse_ValueTag {
    return {
      found: isSet(object.found) ? Boolean(object.found) : false,
      value: isSet(object.value) ? Buffer.from(bytesFromBase64(object.value)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CGCMsgMemCachedGetResponse_ValueTag): unknown {
    const obj: any = {};
    message.found !== undefined && (obj.found = message.found);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CGCMsgMemCachedGetResponse_ValueTag>): CGCMsgMemCachedGetResponse_ValueTag {
    return CGCMsgMemCachedGetResponse_ValueTag.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CGCMsgMemCachedGetResponse_ValueTag>): CGCMsgMemCachedGetResponse_ValueTag {
    const message = createBaseCGCMsgMemCachedGetResponse_ValueTag();
    message.found = object.found ?? false;
    message.value = object.value ?? Buffer.alloc(0);
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

  fromJSON(object: any): CGCMsgMemCachedSet {
    return {
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => CGCMsgMemCachedSet_KeyPair.fromJSON(e)) : [],
    };
  },

  toJSON(message: CGCMsgMemCachedSet): unknown {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map((e) => e ? CGCMsgMemCachedSet_KeyPair.toJSON(e) : undefined);
    } else {
      obj.keys = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CGCMsgMemCachedSet>): CGCMsgMemCachedSet {
    return CGCMsgMemCachedSet.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CGCMsgMemCachedSet>): CGCMsgMemCachedSet {
    const message = createBaseCGCMsgMemCachedSet();
    message.keys = object.keys?.map((e) => CGCMsgMemCachedSet_KeyPair.fromPartial(e)) || [];
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

  fromJSON(object: any): CGCMsgMemCachedSet_KeyPair {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? Buffer.from(bytesFromBase64(object.value)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CGCMsgMemCachedSet_KeyPair): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CGCMsgMemCachedSet_KeyPair>): CGCMsgMemCachedSet_KeyPair {
    return CGCMsgMemCachedSet_KeyPair.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CGCMsgMemCachedSet_KeyPair>): CGCMsgMemCachedSet_KeyPair {
    const message = createBaseCGCMsgMemCachedSet_KeyPair();
    message.name = object.name ?? "";
    message.value = object.value ?? Buffer.alloc(0);
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

  fromJSON(object: any): CGCMsgMemCachedDelete {
    return { keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => String(e)) : [] };
  },

  toJSON(message: CGCMsgMemCachedDelete): unknown {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map((e) => e);
    } else {
      obj.keys = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CGCMsgMemCachedDelete>): CGCMsgMemCachedDelete {
    return CGCMsgMemCachedDelete.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CGCMsgMemCachedDelete>): CGCMsgMemCachedDelete {
    const message = createBaseCGCMsgMemCachedDelete();
    message.keys = object.keys?.map((e) => e) || [];
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

  fromJSON(_: any): CGCMsgMemCachedStats {
    return {};
  },

  toJSON(_: CGCMsgMemCachedStats): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CGCMsgMemCachedStats>): CGCMsgMemCachedStats {
    return CGCMsgMemCachedStats.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CGCMsgMemCachedStats>): CGCMsgMemCachedStats {
    const message = createBaseCGCMsgMemCachedStats();
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

  fromJSON(object: any): CGCMsgMemCachedStatsResponse {
    return {
      currConnections: isSet(object.currConnections) ? String(object.currConnections) : "0",
      cmdGet: isSet(object.cmdGet) ? String(object.cmdGet) : "0",
      cmdSet: isSet(object.cmdSet) ? String(object.cmdSet) : "0",
      cmdFlush: isSet(object.cmdFlush) ? String(object.cmdFlush) : "0",
      getHits: isSet(object.getHits) ? String(object.getHits) : "0",
      getMisses: isSet(object.getMisses) ? String(object.getMisses) : "0",
      deleteHits: isSet(object.deleteHits) ? String(object.deleteHits) : "0",
      deleteMisses: isSet(object.deleteMisses) ? String(object.deleteMisses) : "0",
      bytesRead: isSet(object.bytesRead) ? String(object.bytesRead) : "0",
      bytesWritten: isSet(object.bytesWritten) ? String(object.bytesWritten) : "0",
      limitMaxbytes: isSet(object.limitMaxbytes) ? String(object.limitMaxbytes) : "0",
      currItems: isSet(object.currItems) ? String(object.currItems) : "0",
      evictions: isSet(object.evictions) ? String(object.evictions) : "0",
      bytes: isSet(object.bytes) ? String(object.bytes) : "0",
    };
  },

  toJSON(message: CGCMsgMemCachedStatsResponse): unknown {
    const obj: any = {};
    message.currConnections !== undefined && (obj.currConnections = message.currConnections);
    message.cmdGet !== undefined && (obj.cmdGet = message.cmdGet);
    message.cmdSet !== undefined && (obj.cmdSet = message.cmdSet);
    message.cmdFlush !== undefined && (obj.cmdFlush = message.cmdFlush);
    message.getHits !== undefined && (obj.getHits = message.getHits);
    message.getMisses !== undefined && (obj.getMisses = message.getMisses);
    message.deleteHits !== undefined && (obj.deleteHits = message.deleteHits);
    message.deleteMisses !== undefined && (obj.deleteMisses = message.deleteMisses);
    message.bytesRead !== undefined && (obj.bytesRead = message.bytesRead);
    message.bytesWritten !== undefined && (obj.bytesWritten = message.bytesWritten);
    message.limitMaxbytes !== undefined && (obj.limitMaxbytes = message.limitMaxbytes);
    message.currItems !== undefined && (obj.currItems = message.currItems);
    message.evictions !== undefined && (obj.evictions = message.evictions);
    message.bytes !== undefined && (obj.bytes = message.bytes);
    return obj;
  },

  create(base?: DeepPartial<CGCMsgMemCachedStatsResponse>): CGCMsgMemCachedStatsResponse {
    return CGCMsgMemCachedStatsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CGCMsgMemCachedStatsResponse>): CGCMsgMemCachedStatsResponse {
    const message = createBaseCGCMsgMemCachedStatsResponse();
    message.currConnections = object.currConnections ?? "0";
    message.cmdGet = object.cmdGet ?? "0";
    message.cmdSet = object.cmdSet ?? "0";
    message.cmdFlush = object.cmdFlush ?? "0";
    message.getHits = object.getHits ?? "0";
    message.getMisses = object.getMisses ?? "0";
    message.deleteHits = object.deleteHits ?? "0";
    message.deleteMisses = object.deleteMisses ?? "0";
    message.bytesRead = object.bytesRead ?? "0";
    message.bytesWritten = object.bytesWritten ?? "0";
    message.limitMaxbytes = object.limitMaxbytes ?? "0";
    message.currItems = object.currItems ?? "0";
    message.evictions = object.evictions ?? "0";
    message.bytes = object.bytes ?? "0";
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

  fromJSON(object: any): CGCMsgSQLStats {
    return { schemaCatalog: isSet(object.schemaCatalog) ? Number(object.schemaCatalog) : 0 };
  },

  toJSON(message: CGCMsgSQLStats): unknown {
    const obj: any = {};
    message.schemaCatalog !== undefined && (obj.schemaCatalog = Math.round(message.schemaCatalog));
    return obj;
  },

  create(base?: DeepPartial<CGCMsgSQLStats>): CGCMsgSQLStats {
    return CGCMsgSQLStats.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CGCMsgSQLStats>): CGCMsgSQLStats {
    const message = createBaseCGCMsgSQLStats();
    message.schemaCatalog = object.schemaCatalog ?? 0;
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

  fromJSON(object: any): CGCMsgSQLStatsResponse {
    return {
      threads: isSet(object.threads) ? Number(object.threads) : 0,
      threadsConnected: isSet(object.threadsConnected) ? Number(object.threadsConnected) : 0,
      threadsActive: isSet(object.threadsActive) ? Number(object.threadsActive) : 0,
      operationsSubmitted: isSet(object.operationsSubmitted) ? Number(object.operationsSubmitted) : 0,
      preparedStatementsExecuted: isSet(object.preparedStatementsExecuted)
        ? Number(object.preparedStatementsExecuted)
        : 0,
      nonPreparedStatementsExecuted: isSet(object.nonPreparedStatementsExecuted)
        ? Number(object.nonPreparedStatementsExecuted)
        : 0,
      deadlockRetries: isSet(object.deadlockRetries) ? Number(object.deadlockRetries) : 0,
      operationsTimedOutInQueue: isSet(object.operationsTimedOutInQueue) ? Number(object.operationsTimedOutInQueue) : 0,
      errors: isSet(object.errors) ? Number(object.errors) : 0,
    };
  },

  toJSON(message: CGCMsgSQLStatsResponse): unknown {
    const obj: any = {};
    message.threads !== undefined && (obj.threads = Math.round(message.threads));
    message.threadsConnected !== undefined && (obj.threadsConnected = Math.round(message.threadsConnected));
    message.threadsActive !== undefined && (obj.threadsActive = Math.round(message.threadsActive));
    message.operationsSubmitted !== undefined && (obj.operationsSubmitted = Math.round(message.operationsSubmitted));
    message.preparedStatementsExecuted !== undefined &&
      (obj.preparedStatementsExecuted = Math.round(message.preparedStatementsExecuted));
    message.nonPreparedStatementsExecuted !== undefined &&
      (obj.nonPreparedStatementsExecuted = Math.round(message.nonPreparedStatementsExecuted));
    message.deadlockRetries !== undefined && (obj.deadlockRetries = Math.round(message.deadlockRetries));
    message.operationsTimedOutInQueue !== undefined &&
      (obj.operationsTimedOutInQueue = Math.round(message.operationsTimedOutInQueue));
    message.errors !== undefined && (obj.errors = Math.round(message.errors));
    return obj;
  },

  create(base?: DeepPartial<CGCMsgSQLStatsResponse>): CGCMsgSQLStatsResponse {
    return CGCMsgSQLStatsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CGCMsgSQLStatsResponse>): CGCMsgSQLStatsResponse {
    const message = createBaseCGCMsgSQLStatsResponse();
    message.threads = object.threads ?? 0;
    message.threadsConnected = object.threadsConnected ?? 0;
    message.threadsActive = object.threadsActive ?? 0;
    message.operationsSubmitted = object.operationsSubmitted ?? 0;
    message.preparedStatementsExecuted = object.preparedStatementsExecuted ?? 0;
    message.nonPreparedStatementsExecuted = object.nonPreparedStatementsExecuted ?? 0;
    message.deadlockRetries = object.deadlockRetries ?? 0;
    message.operationsTimedOutInQueue = object.operationsTimedOutInQueue ?? 0;
    message.errors = object.errors ?? 0;
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

  fromJSON(object: any): CMsgAMAddFreeLicense {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      ipPublic: isSet(object.ipPublic) ? Number(object.ipPublic) : 0,
      packageid: isSet(object.packageid) ? Number(object.packageid) : 0,
      storeCountryCode: isSet(object.storeCountryCode) ? String(object.storeCountryCode) : "",
    };
  },

  toJSON(message: CMsgAMAddFreeLicense): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.ipPublic !== undefined && (obj.ipPublic = Math.round(message.ipPublic));
    message.packageid !== undefined && (obj.packageid = Math.round(message.packageid));
    message.storeCountryCode !== undefined && (obj.storeCountryCode = message.storeCountryCode);
    return obj;
  },

  create(base?: DeepPartial<CMsgAMAddFreeLicense>): CMsgAMAddFreeLicense {
    return CMsgAMAddFreeLicense.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAMAddFreeLicense>): CMsgAMAddFreeLicense {
    const message = createBaseCMsgAMAddFreeLicense();
    message.steamid = object.steamid ?? "0";
    message.ipPublic = object.ipPublic ?? 0;
    message.packageid = object.packageid ?? 0;
    message.storeCountryCode = object.storeCountryCode ?? "";
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

  fromJSON(object: any): CMsgAMAddFreeLicenseResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      purchaseResultDetail: isSet(object.purchaseResultDetail) ? Number(object.purchaseResultDetail) : 0,
      transid: isSet(object.transid) ? String(object.transid) : "0",
    };
  },

  toJSON(message: CMsgAMAddFreeLicenseResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.purchaseResultDetail !== undefined && (obj.purchaseResultDetail = Math.round(message.purchaseResultDetail));
    message.transid !== undefined && (obj.transid = message.transid);
    return obj;
  },

  create(base?: DeepPartial<CMsgAMAddFreeLicenseResponse>): CMsgAMAddFreeLicenseResponse {
    return CMsgAMAddFreeLicenseResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAMAddFreeLicenseResponse>): CMsgAMAddFreeLicenseResponse {
    const message = createBaseCMsgAMAddFreeLicenseResponse();
    message.eresult = object.eresult ?? 0;
    message.purchaseResultDetail = object.purchaseResultDetail ?? 0;
    message.transid = object.transid ?? "0";
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

  fromJSON(object: any): CGCMsgGetIPLocation {
    return { ips: Array.isArray(object?.ips) ? object.ips.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CGCMsgGetIPLocation): unknown {
    const obj: any = {};
    if (message.ips) {
      obj.ips = message.ips.map((e) => Math.round(e));
    } else {
      obj.ips = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CGCMsgGetIPLocation>): CGCMsgGetIPLocation {
    return CGCMsgGetIPLocation.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CGCMsgGetIPLocation>): CGCMsgGetIPLocation {
    const message = createBaseCGCMsgGetIPLocation();
    message.ips = object.ips?.map((e) => e) || [];
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

  fromJSON(object: any): CGCMsgGetIPASN {
    return { ips: Array.isArray(object?.ips) ? object.ips.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CGCMsgGetIPASN): unknown {
    const obj: any = {};
    if (message.ips) {
      obj.ips = message.ips.map((e) => Math.round(e));
    } else {
      obj.ips = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CGCMsgGetIPASN>): CGCMsgGetIPASN {
    return CGCMsgGetIPASN.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CGCMsgGetIPASN>): CGCMsgGetIPASN {
    const message = createBaseCGCMsgGetIPASN();
    message.ips = object.ips?.map((e) => e) || [];
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

  fromJSON(object: any): CIPASNInfo {
    return { ip: isSet(object.ip) ? Number(object.ip) : 0, asn: isSet(object.asn) ? Number(object.asn) : 0 };
  },

  toJSON(message: CIPASNInfo): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = Math.round(message.ip));
    message.asn !== undefined && (obj.asn = Math.round(message.asn));
    return obj;
  },

  create(base?: DeepPartial<CIPASNInfo>): CIPASNInfo {
    return CIPASNInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CIPASNInfo>): CIPASNInfo {
    const message = createBaseCIPASNInfo();
    message.ip = object.ip ?? 0;
    message.asn = object.asn ?? 0;
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

  fromJSON(object: any): CGCMsgGetIPASNResponse {
    return { infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => CIPASNInfo.fromJSON(e)) : [] };
  },

  toJSON(message: CGCMsgGetIPASNResponse): unknown {
    const obj: any = {};
    if (message.infos) {
      obj.infos = message.infos.map((e) => e ? CIPASNInfo.toJSON(e) : undefined);
    } else {
      obj.infos = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CGCMsgGetIPASNResponse>): CGCMsgGetIPASNResponse {
    return CGCMsgGetIPASNResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CGCMsgGetIPASNResponse>): CGCMsgGetIPASNResponse {
    const message = createBaseCGCMsgGetIPASNResponse();
    message.infos = object.infos?.map((e) => CIPASNInfo.fromPartial(e)) || [];
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

  fromJSON(object: any): CGCMsgSystemStatsSchema {
    return {
      gcAppId: isSet(object.gcAppId) ? Number(object.gcAppId) : 0,
      schemaKv: isSet(object.schemaKv) ? Buffer.from(bytesFromBase64(object.schemaKv)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CGCMsgSystemStatsSchema): unknown {
    const obj: any = {};
    message.gcAppId !== undefined && (obj.gcAppId = Math.round(message.gcAppId));
    message.schemaKv !== undefined &&
      (obj.schemaKv = base64FromBytes(message.schemaKv !== undefined ? message.schemaKv : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CGCMsgSystemStatsSchema>): CGCMsgSystemStatsSchema {
    return CGCMsgSystemStatsSchema.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CGCMsgSystemStatsSchema>): CGCMsgSystemStatsSchema {
    const message = createBaseCGCMsgSystemStatsSchema();
    message.gcAppId = object.gcAppId ?? 0;
    message.schemaKv = object.schemaKv ?? Buffer.alloc(0);
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

  fromJSON(_: any): CGCMsgGetSystemStats {
    return {};
  },

  toJSON(_: CGCMsgGetSystemStats): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CGCMsgGetSystemStats>): CGCMsgGetSystemStats {
    return CGCMsgGetSystemStats.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CGCMsgGetSystemStats>): CGCMsgGetSystemStats {
    const message = createBaseCGCMsgGetSystemStats();
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

  fromJSON(object: any): CGCMsgGetSystemStatsResponse {
    return {
      gcAppId: isSet(object.gcAppId) ? Number(object.gcAppId) : 0,
      statsKv: isSet(object.statsKv) ? Buffer.from(bytesFromBase64(object.statsKv)) : Buffer.alloc(0),
      activeJobs: isSet(object.activeJobs) ? Number(object.activeJobs) : 0,
      yieldingJobs: isSet(object.yieldingJobs) ? Number(object.yieldingJobs) : 0,
      userSessions: isSet(object.userSessions) ? Number(object.userSessions) : 0,
      gameServerSessions: isSet(object.gameServerSessions) ? Number(object.gameServerSessions) : 0,
      socaches: isSet(object.socaches) ? Number(object.socaches) : 0,
      socachesToUnload: isSet(object.socachesToUnload) ? Number(object.socachesToUnload) : 0,
      socachesLoading: isSet(object.socachesLoading) ? Number(object.socachesLoading) : 0,
      writebackQueue: isSet(object.writebackQueue) ? Number(object.writebackQueue) : 0,
      steamidLocks: isSet(object.steamidLocks) ? Number(object.steamidLocks) : 0,
      logonQueue: isSet(object.logonQueue) ? Number(object.logonQueue) : 0,
      logonJobs: isSet(object.logonJobs) ? Number(object.logonJobs) : 0,
    };
  },

  toJSON(message: CGCMsgGetSystemStatsResponse): unknown {
    const obj: any = {};
    message.gcAppId !== undefined && (obj.gcAppId = Math.round(message.gcAppId));
    message.statsKv !== undefined &&
      (obj.statsKv = base64FromBytes(message.statsKv !== undefined ? message.statsKv : Buffer.alloc(0)));
    message.activeJobs !== undefined && (obj.activeJobs = Math.round(message.activeJobs));
    message.yieldingJobs !== undefined && (obj.yieldingJobs = Math.round(message.yieldingJobs));
    message.userSessions !== undefined && (obj.userSessions = Math.round(message.userSessions));
    message.gameServerSessions !== undefined && (obj.gameServerSessions = Math.round(message.gameServerSessions));
    message.socaches !== undefined && (obj.socaches = Math.round(message.socaches));
    message.socachesToUnload !== undefined && (obj.socachesToUnload = Math.round(message.socachesToUnload));
    message.socachesLoading !== undefined && (obj.socachesLoading = Math.round(message.socachesLoading));
    message.writebackQueue !== undefined && (obj.writebackQueue = Math.round(message.writebackQueue));
    message.steamidLocks !== undefined && (obj.steamidLocks = Math.round(message.steamidLocks));
    message.logonQueue !== undefined && (obj.logonQueue = Math.round(message.logonQueue));
    message.logonJobs !== undefined && (obj.logonJobs = Math.round(message.logonJobs));
    return obj;
  },

  create(base?: DeepPartial<CGCMsgGetSystemStatsResponse>): CGCMsgGetSystemStatsResponse {
    return CGCMsgGetSystemStatsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CGCMsgGetSystemStatsResponse>): CGCMsgGetSystemStatsResponse {
    const message = createBaseCGCMsgGetSystemStatsResponse();
    message.gcAppId = object.gcAppId ?? 0;
    message.statsKv = object.statsKv ?? Buffer.alloc(0);
    message.activeJobs = object.activeJobs ?? 0;
    message.yieldingJobs = object.yieldingJobs ?? 0;
    message.userSessions = object.userSessions ?? 0;
    message.gameServerSessions = object.gameServerSessions ?? 0;
    message.socaches = object.socaches ?? 0;
    message.socachesToUnload = object.socachesToUnload ?? 0;
    message.socachesLoading = object.socachesLoading ?? 0;
    message.writebackQueue = object.writebackQueue ?? 0;
    message.steamidLocks = object.steamidLocks ?? 0;
    message.logonQueue = object.logonQueue ?? 0;
    message.logonJobs = object.logonJobs ?? 0;
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

  fromJSON(object: any): CMsgAMSendEmail {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      emailMsgType: isSet(object.emailMsgType) ? Number(object.emailMsgType) : 0,
      emailFormat: isSet(object.emailFormat) ? Number(object.emailFormat) : 0,
      personaNameTokens: Array.isArray(object?.personaNameTokens)
        ? object.personaNameTokens.map((e: any) => CMsgAMSendEmail_PersonaNameReplacementToken.fromJSON(e))
        : [],
      sourceGc: isSet(object.sourceGc) ? Number(object.sourceGc) : 0,
      tokens: Array.isArray(object?.tokens)
        ? object.tokens.map((e: any) => CMsgAMSendEmail_ReplacementToken.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgAMSendEmail): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.emailMsgType !== undefined && (obj.emailMsgType = Math.round(message.emailMsgType));
    message.emailFormat !== undefined && (obj.emailFormat = Math.round(message.emailFormat));
    if (message.personaNameTokens) {
      obj.personaNameTokens = message.personaNameTokens.map((e) =>
        e ? CMsgAMSendEmail_PersonaNameReplacementToken.toJSON(e) : undefined
      );
    } else {
      obj.personaNameTokens = [];
    }
    message.sourceGc !== undefined && (obj.sourceGc = Math.round(message.sourceGc));
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => e ? CMsgAMSendEmail_ReplacementToken.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgAMSendEmail>): CMsgAMSendEmail {
    return CMsgAMSendEmail.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAMSendEmail>): CMsgAMSendEmail {
    const message = createBaseCMsgAMSendEmail();
    message.steamid = object.steamid ?? "0";
    message.emailMsgType = object.emailMsgType ?? 0;
    message.emailFormat = object.emailFormat ?? 0;
    message.personaNameTokens =
      object.personaNameTokens?.map((e) => CMsgAMSendEmail_PersonaNameReplacementToken.fromPartial(e)) || [];
    message.sourceGc = object.sourceGc ?? 0;
    message.tokens = object.tokens?.map((e) => CMsgAMSendEmail_ReplacementToken.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgAMSendEmail_ReplacementToken {
    return {
      tokenName: isSet(object.tokenName) ? String(object.tokenName) : "",
      tokenValue: isSet(object.tokenValue) ? String(object.tokenValue) : "",
    };
  },

  toJSON(message: CMsgAMSendEmail_ReplacementToken): unknown {
    const obj: any = {};
    message.tokenName !== undefined && (obj.tokenName = message.tokenName);
    message.tokenValue !== undefined && (obj.tokenValue = message.tokenValue);
    return obj;
  },

  create(base?: DeepPartial<CMsgAMSendEmail_ReplacementToken>): CMsgAMSendEmail_ReplacementToken {
    return CMsgAMSendEmail_ReplacementToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAMSendEmail_ReplacementToken>): CMsgAMSendEmail_ReplacementToken {
    const message = createBaseCMsgAMSendEmail_ReplacementToken();
    message.tokenName = object.tokenName ?? "";
    message.tokenValue = object.tokenValue ?? "";
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

  fromJSON(object: any): CMsgAMSendEmail_PersonaNameReplacementToken {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      tokenName: isSet(object.tokenName) ? String(object.tokenName) : "",
    };
  },

  toJSON(message: CMsgAMSendEmail_PersonaNameReplacementToken): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.tokenName !== undefined && (obj.tokenName = message.tokenName);
    return obj;
  },

  create(base?: DeepPartial<CMsgAMSendEmail_PersonaNameReplacementToken>): CMsgAMSendEmail_PersonaNameReplacementToken {
    return CMsgAMSendEmail_PersonaNameReplacementToken.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgAMSendEmail_PersonaNameReplacementToken>,
  ): CMsgAMSendEmail_PersonaNameReplacementToken {
    const message = createBaseCMsgAMSendEmail_PersonaNameReplacementToken();
    message.steamid = object.steamid ?? "0";
    message.tokenName = object.tokenName ?? "";
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

  fromJSON(object: any): CMsgAMSendEmailResponse {
    return { eresult: isSet(object.eresult) ? Number(object.eresult) : 0 };
  },

  toJSON(message: CMsgAMSendEmailResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },

  create(base?: DeepPartial<CMsgAMSendEmailResponse>): CMsgAMSendEmailResponse {
    return CMsgAMSendEmailResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAMSendEmailResponse>): CMsgAMSendEmailResponse {
    const message = createBaseCMsgAMSendEmailResponse();
    message.eresult = object.eresult ?? 0;
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

  fromJSON(object: any): CMsgGCGetEmailTemplate {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      emailMsgType: isSet(object.emailMsgType) ? Number(object.emailMsgType) : 0,
      emailLang: isSet(object.emailLang) ? Number(object.emailLang) : 0,
      emailFormat: isSet(object.emailFormat) ? Number(object.emailFormat) : 0,
    };
  },

  toJSON(message: CMsgGCGetEmailTemplate): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.emailMsgType !== undefined && (obj.emailMsgType = Math.round(message.emailMsgType));
    message.emailLang !== undefined && (obj.emailLang = Math.round(message.emailLang));
    message.emailFormat !== undefined && (obj.emailFormat = Math.round(message.emailFormat));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCGetEmailTemplate>): CMsgGCGetEmailTemplate {
    return CMsgGCGetEmailTemplate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCGetEmailTemplate>): CMsgGCGetEmailTemplate {
    const message = createBaseCMsgGCGetEmailTemplate();
    message.appId = object.appId ?? 0;
    message.emailMsgType = object.emailMsgType ?? 0;
    message.emailLang = object.emailLang ?? 0;
    message.emailFormat = object.emailFormat ?? 0;
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

  fromJSON(object: any): CMsgGCGetEmailTemplateResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      templateExists: isSet(object.templateExists) ? Boolean(object.templateExists) : false,
      template: isSet(object.template) ? String(object.template) : "",
    };
  },

  toJSON(message: CMsgGCGetEmailTemplateResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.templateExists !== undefined && (obj.templateExists = message.templateExists);
    message.template !== undefined && (obj.template = message.template);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCGetEmailTemplateResponse>): CMsgGCGetEmailTemplateResponse {
    return CMsgGCGetEmailTemplateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCGetEmailTemplateResponse>): CMsgGCGetEmailTemplateResponse {
    const message = createBaseCMsgGCGetEmailTemplateResponse();
    message.eresult = object.eresult ?? 0;
    message.templateExists = object.templateExists ?? false;
    message.template = object.template ?? "";
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

  fromJSON(object: any): CMsgAMGrantGuestPasses2 {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      packageId: isSet(object.packageId) ? Number(object.packageId) : 0,
      passesToGrant: isSet(object.passesToGrant) ? Number(object.passesToGrant) : 0,
      daysToExpiration: isSet(object.daysToExpiration) ? Number(object.daysToExpiration) : 0,
      action: isSet(object.action) ? Number(object.action) : 0,
    };
  },

  toJSON(message: CMsgAMGrantGuestPasses2): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.packageId !== undefined && (obj.packageId = Math.round(message.packageId));
    message.passesToGrant !== undefined && (obj.passesToGrant = Math.round(message.passesToGrant));
    message.daysToExpiration !== undefined && (obj.daysToExpiration = Math.round(message.daysToExpiration));
    message.action !== undefined && (obj.action = Math.round(message.action));
    return obj;
  },

  create(base?: DeepPartial<CMsgAMGrantGuestPasses2>): CMsgAMGrantGuestPasses2 {
    return CMsgAMGrantGuestPasses2.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAMGrantGuestPasses2>): CMsgAMGrantGuestPasses2 {
    const message = createBaseCMsgAMGrantGuestPasses2();
    message.steamId = object.steamId ?? "0";
    message.packageId = object.packageId ?? 0;
    message.passesToGrant = object.passesToGrant ?? 0;
    message.daysToExpiration = object.daysToExpiration ?? 0;
    message.action = object.action ?? 0;
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

  fromJSON(object: any): CMsgAMGrantGuestPasses2Response {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      passesGranted: isSet(object.passesGranted) ? Number(object.passesGranted) : 0,
    };
  },

  toJSON(message: CMsgAMGrantGuestPasses2Response): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.passesGranted !== undefined && (obj.passesGranted = Math.round(message.passesGranted));
    return obj;
  },

  create(base?: DeepPartial<CMsgAMGrantGuestPasses2Response>): CMsgAMGrantGuestPasses2Response {
    return CMsgAMGrantGuestPasses2Response.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAMGrantGuestPasses2Response>): CMsgAMGrantGuestPasses2Response {
    const message = createBaseCMsgAMGrantGuestPasses2Response();
    message.eresult = object.eresult ?? 0;
    message.passesGranted = object.passesGranted ?? 0;
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

  fromJSON(object: any): CMsgGCGetPersonaNames {
    return { steamids: Array.isArray(object?.steamids) ? object.steamids.map((e: any) => String(e)) : [] };
  },

  toJSON(message: CMsgGCGetPersonaNames): unknown {
    const obj: any = {};
    if (message.steamids) {
      obj.steamids = message.steamids.map((e) => e);
    } else {
      obj.steamids = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGCGetPersonaNames>): CMsgGCGetPersonaNames {
    return CMsgGCGetPersonaNames.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCGetPersonaNames>): CMsgGCGetPersonaNames {
    const message = createBaseCMsgGCGetPersonaNames();
    message.steamids = object.steamids?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgGCGetPersonaNamesResponse {
    return {
      succeededLookups: Array.isArray(object?.succeededLookups)
        ? object.succeededLookups.map((e: any) => CMsgGCGetPersonaNamesResponse_PersonaName.fromJSON(e))
        : [],
      failedLookupSteamids: Array.isArray(object?.failedLookupSteamids)
        ? object.failedLookupSteamids.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: CMsgGCGetPersonaNamesResponse): unknown {
    const obj: any = {};
    if (message.succeededLookups) {
      obj.succeededLookups = message.succeededLookups.map((e) =>
        e ? CMsgGCGetPersonaNamesResponse_PersonaName.toJSON(e) : undefined
      );
    } else {
      obj.succeededLookups = [];
    }
    if (message.failedLookupSteamids) {
      obj.failedLookupSteamids = message.failedLookupSteamids.map((e) => e);
    } else {
      obj.failedLookupSteamids = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGCGetPersonaNamesResponse>): CMsgGCGetPersonaNamesResponse {
    return CMsgGCGetPersonaNamesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCGetPersonaNamesResponse>): CMsgGCGetPersonaNamesResponse {
    const message = createBaseCMsgGCGetPersonaNamesResponse();
    message.succeededLookups =
      object.succeededLookups?.map((e) => CMsgGCGetPersonaNamesResponse_PersonaName.fromPartial(e)) || [];
    message.failedLookupSteamids = object.failedLookupSteamids?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgGCGetPersonaNamesResponse_PersonaName {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      personaName: isSet(object.personaName) ? String(object.personaName) : "",
    };
  },

  toJSON(message: CMsgGCGetPersonaNamesResponse_PersonaName): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.personaName !== undefined && (obj.personaName = message.personaName);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCGetPersonaNamesResponse_PersonaName>): CMsgGCGetPersonaNamesResponse_PersonaName {
    return CMsgGCGetPersonaNamesResponse_PersonaName.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgGCGetPersonaNamesResponse_PersonaName>,
  ): CMsgGCGetPersonaNamesResponse_PersonaName {
    const message = createBaseCMsgGCGetPersonaNamesResponse_PersonaName();
    message.steamid = object.steamid ?? "0";
    message.personaName = object.personaName ?? "";
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

  fromJSON(object: any): CMsgGCCheckFriendship {
    return {
      steamidLeft: isSet(object.steamidLeft) ? String(object.steamidLeft) : "0",
      steamidRight: isSet(object.steamidRight) ? String(object.steamidRight) : "0",
    };
  },

  toJSON(message: CMsgGCCheckFriendship): unknown {
    const obj: any = {};
    message.steamidLeft !== undefined && (obj.steamidLeft = message.steamidLeft);
    message.steamidRight !== undefined && (obj.steamidRight = message.steamidRight);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCCheckFriendship>): CMsgGCCheckFriendship {
    return CMsgGCCheckFriendship.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCCheckFriendship>): CMsgGCCheckFriendship {
    const message = createBaseCMsgGCCheckFriendship();
    message.steamidLeft = object.steamidLeft ?? "0";
    message.steamidRight = object.steamidRight ?? "0";
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

  fromJSON(object: any): CMsgGCCheckFriendshipResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      foundFriendship: isSet(object.foundFriendship) ? Boolean(object.foundFriendship) : false,
    };
  },

  toJSON(message: CMsgGCCheckFriendshipResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.foundFriendship !== undefined && (obj.foundFriendship = message.foundFriendship);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCCheckFriendshipResponse>): CMsgGCCheckFriendshipResponse {
    return CMsgGCCheckFriendshipResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCCheckFriendshipResponse>): CMsgGCCheckFriendshipResponse {
    const message = createBaseCMsgGCCheckFriendshipResponse();
    message.success = object.success ?? false;
    message.foundFriendship = object.foundFriendship ?? false;
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

  fromJSON(object: any): CMsgGCGetAppFriendsList {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      includeFriendshipTimestamps: isSet(object.includeFriendshipTimestamps)
        ? Boolean(object.includeFriendshipTimestamps)
        : false,
    };
  },

  toJSON(message: CMsgGCGetAppFriendsList): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.includeFriendshipTimestamps !== undefined &&
      (obj.includeFriendshipTimestamps = message.includeFriendshipTimestamps);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCGetAppFriendsList>): CMsgGCGetAppFriendsList {
    return CMsgGCGetAppFriendsList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCGetAppFriendsList>): CMsgGCGetAppFriendsList {
    const message = createBaseCMsgGCGetAppFriendsList();
    message.steamid = object.steamid ?? "0";
    message.includeFriendshipTimestamps = object.includeFriendshipTimestamps ?? false;
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

  fromJSON(object: any): CMsgGCGetAppFriendsListResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      steamids: Array.isArray(object?.steamids) ? object.steamids.map((e: any) => String(e)) : [],
      friendshipTimestamps: Array.isArray(object?.friendshipTimestamps)
        ? object.friendshipTimestamps.map((e: any) => Number(e))
        : [],
      lastPlaytimes: Array.isArray(object?.lastPlaytimes) ? object.lastPlaytimes.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgGCGetAppFriendsListResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    if (message.steamids) {
      obj.steamids = message.steamids.map((e) => e);
    } else {
      obj.steamids = [];
    }
    if (message.friendshipTimestamps) {
      obj.friendshipTimestamps = message.friendshipTimestamps.map((e) => Math.round(e));
    } else {
      obj.friendshipTimestamps = [];
    }
    if (message.lastPlaytimes) {
      obj.lastPlaytimes = message.lastPlaytimes.map((e) => Math.round(e));
    } else {
      obj.lastPlaytimes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGCGetAppFriendsListResponse>): CMsgGCGetAppFriendsListResponse {
    return CMsgGCGetAppFriendsListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCGetAppFriendsListResponse>): CMsgGCGetAppFriendsListResponse {
    const message = createBaseCMsgGCGetAppFriendsListResponse();
    message.success = object.success ?? false;
    message.steamids = object.steamids?.map((e) => e) || [];
    message.friendshipTimestamps = object.friendshipTimestamps?.map((e) => e) || [];
    message.lastPlaytimes = object.lastPlaytimes?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgGCMsgMasterSetDirectory {
    return {
      masterDirIndex: isSet(object.masterDirIndex) ? Number(object.masterDirIndex) : 0,
      dir: Array.isArray(object?.dir) ? object.dir.map((e: any) => CMsgGCMsgMasterSetDirectory_SubGC.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgGCMsgMasterSetDirectory): unknown {
    const obj: any = {};
    message.masterDirIndex !== undefined && (obj.masterDirIndex = Math.round(message.masterDirIndex));
    if (message.dir) {
      obj.dir = message.dir.map((e) => e ? CMsgGCMsgMasterSetDirectory_SubGC.toJSON(e) : undefined);
    } else {
      obj.dir = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGCMsgMasterSetDirectory>): CMsgGCMsgMasterSetDirectory {
    return CMsgGCMsgMasterSetDirectory.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCMsgMasterSetDirectory>): CMsgGCMsgMasterSetDirectory {
    const message = createBaseCMsgGCMsgMasterSetDirectory();
    message.masterDirIndex = object.masterDirIndex ?? 0;
    message.dir = object.dir?.map((e) => CMsgGCMsgMasterSetDirectory_SubGC.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgGCMsgMasterSetDirectory_SubGC {
    return {
      dirIndex: isSet(object.dirIndex) ? Number(object.dirIndex) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      box: isSet(object.box) ? String(object.box) : "",
      commandLine: isSet(object.commandLine) ? String(object.commandLine) : "",
      gcBinary: isSet(object.gcBinary) ? String(object.gcBinary) : "",
    };
  },

  toJSON(message: CMsgGCMsgMasterSetDirectory_SubGC): unknown {
    const obj: any = {};
    message.dirIndex !== undefined && (obj.dirIndex = Math.round(message.dirIndex));
    message.name !== undefined && (obj.name = message.name);
    message.box !== undefined && (obj.box = message.box);
    message.commandLine !== undefined && (obj.commandLine = message.commandLine);
    message.gcBinary !== undefined && (obj.gcBinary = message.gcBinary);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCMsgMasterSetDirectory_SubGC>): CMsgGCMsgMasterSetDirectory_SubGC {
    return CMsgGCMsgMasterSetDirectory_SubGC.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCMsgMasterSetDirectory_SubGC>): CMsgGCMsgMasterSetDirectory_SubGC {
    const message = createBaseCMsgGCMsgMasterSetDirectory_SubGC();
    message.dirIndex = object.dirIndex ?? 0;
    message.name = object.name ?? "";
    message.box = object.box ?? "";
    message.commandLine = object.commandLine ?? "";
    message.gcBinary = object.gcBinary ?? "";
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

  fromJSON(object: any): CMsgGCMsgMasterSetDirectoryResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: CMsgGCMsgMasterSetDirectoryResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCMsgMasterSetDirectoryResponse>): CMsgGCMsgMasterSetDirectoryResponse {
    return CMsgGCMsgMasterSetDirectoryResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCMsgMasterSetDirectoryResponse>): CMsgGCMsgMasterSetDirectoryResponse {
    const message = createBaseCMsgGCMsgMasterSetDirectoryResponse();
    message.eresult = object.eresult ?? 0;
    message.message = object.message ?? "";
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

  fromJSON(object: any): CMsgGCMsgWebAPIJobRequestForwardResponse {
    return { dirIndex: isSet(object.dirIndex) ? Number(object.dirIndex) : 0 };
  },

  toJSON(message: CMsgGCMsgWebAPIJobRequestForwardResponse): unknown {
    const obj: any = {};
    message.dirIndex !== undefined && (obj.dirIndex = Math.round(message.dirIndex));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCMsgWebAPIJobRequestForwardResponse>): CMsgGCMsgWebAPIJobRequestForwardResponse {
    return CMsgGCMsgWebAPIJobRequestForwardResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCMsgWebAPIJobRequestForwardResponse>): CMsgGCMsgWebAPIJobRequestForwardResponse {
    const message = createBaseCMsgGCMsgWebAPIJobRequestForwardResponse();
    message.dirIndex = object.dirIndex ?? 0;
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

  fromJSON(object: any): CGCSystemMsgGetPurchaseTrustRequest {
    return { steamid: isSet(object.steamid) ? String(object.steamid) : "0" };
  },

  toJSON(message: CGCSystemMsgGetPurchaseTrustRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create(base?: DeepPartial<CGCSystemMsgGetPurchaseTrustRequest>): CGCSystemMsgGetPurchaseTrustRequest {
    return CGCSystemMsgGetPurchaseTrustRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CGCSystemMsgGetPurchaseTrustRequest>): CGCSystemMsgGetPurchaseTrustRequest {
    const message = createBaseCGCSystemMsgGetPurchaseTrustRequest();
    message.steamid = object.steamid ?? "0";
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

  fromJSON(object: any): CGCSystemMsgGetPurchaseTrustResponse {
    return {
      hasPriorPurchaseHistory: isSet(object.hasPriorPurchaseHistory) ? Boolean(object.hasPriorPurchaseHistory) : false,
      hasNoRecentPasswordResets: isSet(object.hasNoRecentPasswordResets)
        ? Boolean(object.hasNoRecentPasswordResets)
        : false,
      isWalletCashTrusted: isSet(object.isWalletCashTrusted) ? Boolean(object.isWalletCashTrusted) : false,
      timeAllTrusted: isSet(object.timeAllTrusted) ? Number(object.timeAllTrusted) : 0,
    };
  },

  toJSON(message: CGCSystemMsgGetPurchaseTrustResponse): unknown {
    const obj: any = {};
    message.hasPriorPurchaseHistory !== undefined && (obj.hasPriorPurchaseHistory = message.hasPriorPurchaseHistory);
    message.hasNoRecentPasswordResets !== undefined &&
      (obj.hasNoRecentPasswordResets = message.hasNoRecentPasswordResets);
    message.isWalletCashTrusted !== undefined && (obj.isWalletCashTrusted = message.isWalletCashTrusted);
    message.timeAllTrusted !== undefined && (obj.timeAllTrusted = Math.round(message.timeAllTrusted));
    return obj;
  },

  create(base?: DeepPartial<CGCSystemMsgGetPurchaseTrustResponse>): CGCSystemMsgGetPurchaseTrustResponse {
    return CGCSystemMsgGetPurchaseTrustResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CGCSystemMsgGetPurchaseTrustResponse>): CGCSystemMsgGetPurchaseTrustResponse {
    const message = createBaseCGCSystemMsgGetPurchaseTrustResponse();
    message.hasPriorPurchaseHistory = object.hasPriorPurchaseHistory ?? false;
    message.hasNoRecentPasswordResets = object.hasNoRecentPasswordResets ?? false;
    message.isWalletCashTrusted = object.isWalletCashTrusted ?? false;
    message.timeAllTrusted = object.timeAllTrusted ?? 0;
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

  fromJSON(object: any): CMsgGCHAccountVacStatusChange {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      rtimeVacbanStarts: isSet(object.rtimeVacbanStarts) ? Number(object.rtimeVacbanStarts) : 0,
      isBannedNow: isSet(object.isBannedNow) ? Boolean(object.isBannedNow) : false,
      isBannedFuture: isSet(object.isBannedFuture) ? Boolean(object.isBannedFuture) : false,
    };
  },

  toJSON(message: CMsgGCHAccountVacStatusChange): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.rtimeVacbanStarts !== undefined && (obj.rtimeVacbanStarts = Math.round(message.rtimeVacbanStarts));
    message.isBannedNow !== undefined && (obj.isBannedNow = message.isBannedNow);
    message.isBannedFuture !== undefined && (obj.isBannedFuture = message.isBannedFuture);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCHAccountVacStatusChange>): CMsgGCHAccountVacStatusChange {
    return CMsgGCHAccountVacStatusChange.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCHAccountVacStatusChange>): CMsgGCHAccountVacStatusChange {
    const message = createBaseCMsgGCHAccountVacStatusChange();
    message.steamId = object.steamId ?? "0";
    message.appId = object.appId ?? 0;
    message.rtimeVacbanStarts = object.rtimeVacbanStarts ?? 0;
    message.isBannedNow = object.isBannedNow ?? false;
    message.isBannedFuture = object.isBannedFuture ?? false;
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

  fromJSON(object: any): CMsgGCGetPartnerAccountLink {
    return { steamid: isSet(object.steamid) ? String(object.steamid) : "0" };
  },

  toJSON(message: CMsgGCGetPartnerAccountLink): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCGetPartnerAccountLink>): CMsgGCGetPartnerAccountLink {
    return CMsgGCGetPartnerAccountLink.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCGetPartnerAccountLink>): CMsgGCGetPartnerAccountLink {
    const message = createBaseCMsgGCGetPartnerAccountLink();
    message.steamid = object.steamid ?? "0";
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

  fromJSON(object: any): CMsgGCGetPartnerAccountLinkResponse {
    return {
      pwid: isSet(object.pwid) ? Number(object.pwid) : 0,
      nexonid: isSet(object.nexonid) ? Number(object.nexonid) : 0,
      ageclass: isSet(object.ageclass) ? Number(object.ageclass) : 0,
      idVerified: isSet(object.idVerified) ? Boolean(object.idVerified) : false,
      isAdult: isSet(object.isAdult) ? Boolean(object.isAdult) : false,
    };
  },

  toJSON(message: CMsgGCGetPartnerAccountLinkResponse): unknown {
    const obj: any = {};
    message.pwid !== undefined && (obj.pwid = Math.round(message.pwid));
    message.nexonid !== undefined && (obj.nexonid = Math.round(message.nexonid));
    message.ageclass !== undefined && (obj.ageclass = Math.round(message.ageclass));
    message.idVerified !== undefined && (obj.idVerified = message.idVerified);
    message.isAdult !== undefined && (obj.isAdult = message.isAdult);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCGetPartnerAccountLinkResponse>): CMsgGCGetPartnerAccountLinkResponse {
    return CMsgGCGetPartnerAccountLinkResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCGetPartnerAccountLinkResponse>): CMsgGCGetPartnerAccountLinkResponse {
    const message = createBaseCMsgGCGetPartnerAccountLinkResponse();
    message.pwid = object.pwid ?? 0;
    message.nexonid = object.nexonid ?? 0;
    message.ageclass = object.ageclass ?? 0;
    message.idVerified = object.idVerified ?? false;
    message.isAdult = object.isAdult ?? false;
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

  fromJSON(object: any): CMsgGCRoutingInfo {
    return {
      dirIndex: Array.isArray(object?.dirIndex) ? object.dirIndex.map((e: any) => Number(e)) : [],
      method: isSet(object.method) ? cMsgGCRoutingInfo_RoutingMethodFromJSON(object.method) : 0,
      fallback: isSet(object.fallback) ? cMsgGCRoutingInfo_RoutingMethodFromJSON(object.fallback) : 0,
      protobufField: isSet(object.protobufField) ? Number(object.protobufField) : 0,
      webapiParam: isSet(object.webapiParam) ? String(object.webapiParam) : "",
    };
  },

  toJSON(message: CMsgGCRoutingInfo): unknown {
    const obj: any = {};
    if (message.dirIndex) {
      obj.dirIndex = message.dirIndex.map((e) => Math.round(e));
    } else {
      obj.dirIndex = [];
    }
    message.method !== undefined && (obj.method = cMsgGCRoutingInfo_RoutingMethodToJSON(message.method));
    message.fallback !== undefined && (obj.fallback = cMsgGCRoutingInfo_RoutingMethodToJSON(message.fallback));
    message.protobufField !== undefined && (obj.protobufField = Math.round(message.protobufField));
    message.webapiParam !== undefined && (obj.webapiParam = message.webapiParam);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCRoutingInfo>): CMsgGCRoutingInfo {
    return CMsgGCRoutingInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCRoutingInfo>): CMsgGCRoutingInfo {
    const message = createBaseCMsgGCRoutingInfo();
    message.dirIndex = object.dirIndex?.map((e) => e) || [];
    message.method = object.method ?? 0;
    message.fallback = object.fallback ?? 0;
    message.protobufField = object.protobufField ?? 0;
    message.webapiParam = object.webapiParam ?? "";
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

  fromJSON(object: any): CMsgGCMsgMasterSetWebAPIRouting {
    return {
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => CMsgGCMsgMasterSetWebAPIRouting_Entry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGCMsgMasterSetWebAPIRouting): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? CMsgGCMsgMasterSetWebAPIRouting_Entry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGCMsgMasterSetWebAPIRouting>): CMsgGCMsgMasterSetWebAPIRouting {
    return CMsgGCMsgMasterSetWebAPIRouting.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCMsgMasterSetWebAPIRouting>): CMsgGCMsgMasterSetWebAPIRouting {
    const message = createBaseCMsgGCMsgMasterSetWebAPIRouting();
    message.entries = object.entries?.map((e) => CMsgGCMsgMasterSetWebAPIRouting_Entry.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgGCMsgMasterSetWebAPIRouting_Entry {
    return {
      interfaceName: isSet(object.interfaceName) ? String(object.interfaceName) : "",
      methodName: isSet(object.methodName) ? String(object.methodName) : "",
      routing: isSet(object.routing) ? CMsgGCRoutingInfo.fromJSON(object.routing) : undefined,
    };
  },

  toJSON(message: CMsgGCMsgMasterSetWebAPIRouting_Entry): unknown {
    const obj: any = {};
    message.interfaceName !== undefined && (obj.interfaceName = message.interfaceName);
    message.methodName !== undefined && (obj.methodName = message.methodName);
    message.routing !== undefined &&
      (obj.routing = message.routing ? CMsgGCRoutingInfo.toJSON(message.routing) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCMsgMasterSetWebAPIRouting_Entry>): CMsgGCMsgMasterSetWebAPIRouting_Entry {
    return CMsgGCMsgMasterSetWebAPIRouting_Entry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCMsgMasterSetWebAPIRouting_Entry>): CMsgGCMsgMasterSetWebAPIRouting_Entry {
    const message = createBaseCMsgGCMsgMasterSetWebAPIRouting_Entry();
    message.interfaceName = object.interfaceName ?? "";
    message.methodName = object.methodName ?? "";
    message.routing = (object.routing !== undefined && object.routing !== null)
      ? CMsgGCRoutingInfo.fromPartial(object.routing)
      : undefined;
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

  fromJSON(object: any): CMsgGCMsgMasterSetClientMsgRouting {
    return {
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => CMsgGCMsgMasterSetClientMsgRouting_Entry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGCMsgMasterSetClientMsgRouting): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? CMsgGCMsgMasterSetClientMsgRouting_Entry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGCMsgMasterSetClientMsgRouting>): CMsgGCMsgMasterSetClientMsgRouting {
    return CMsgGCMsgMasterSetClientMsgRouting.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCMsgMasterSetClientMsgRouting>): CMsgGCMsgMasterSetClientMsgRouting {
    const message = createBaseCMsgGCMsgMasterSetClientMsgRouting();
    message.entries = object.entries?.map((e) => CMsgGCMsgMasterSetClientMsgRouting_Entry.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgGCMsgMasterSetClientMsgRouting_Entry {
    return {
      msgType: isSet(object.msgType) ? Number(object.msgType) : 0,
      routing: isSet(object.routing) ? CMsgGCRoutingInfo.fromJSON(object.routing) : undefined,
    };
  },

  toJSON(message: CMsgGCMsgMasterSetClientMsgRouting_Entry): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = Math.round(message.msgType));
    message.routing !== undefined &&
      (obj.routing = message.routing ? CMsgGCRoutingInfo.toJSON(message.routing) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCMsgMasterSetClientMsgRouting_Entry>): CMsgGCMsgMasterSetClientMsgRouting_Entry {
    return CMsgGCMsgMasterSetClientMsgRouting_Entry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCMsgMasterSetClientMsgRouting_Entry>): CMsgGCMsgMasterSetClientMsgRouting_Entry {
    const message = createBaseCMsgGCMsgMasterSetClientMsgRouting_Entry();
    message.msgType = object.msgType ?? 0;
    message.routing = (object.routing !== undefined && object.routing !== null)
      ? CMsgGCRoutingInfo.fromPartial(object.routing)
      : undefined;
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

  fromJSON(object: any): CMsgGCMsgMasterSetWebAPIRoutingResponse {
    return { eresult: isSet(object.eresult) ? Number(object.eresult) : 0 };
  },

  toJSON(message: CMsgGCMsgMasterSetWebAPIRoutingResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCMsgMasterSetWebAPIRoutingResponse>): CMsgGCMsgMasterSetWebAPIRoutingResponse {
    return CMsgGCMsgMasterSetWebAPIRoutingResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCMsgMasterSetWebAPIRoutingResponse>): CMsgGCMsgMasterSetWebAPIRoutingResponse {
    const message = createBaseCMsgGCMsgMasterSetWebAPIRoutingResponse();
    message.eresult = object.eresult ?? 0;
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

  fromJSON(object: any): CMsgGCMsgMasterSetClientMsgRoutingResponse {
    return { eresult: isSet(object.eresult) ? Number(object.eresult) : 0 };
  },

  toJSON(message: CMsgGCMsgMasterSetClientMsgRoutingResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCMsgMasterSetClientMsgRoutingResponse>): CMsgGCMsgMasterSetClientMsgRoutingResponse {
    return CMsgGCMsgMasterSetClientMsgRoutingResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgGCMsgMasterSetClientMsgRoutingResponse>,
  ): CMsgGCMsgMasterSetClientMsgRoutingResponse {
    const message = createBaseCMsgGCMsgMasterSetClientMsgRoutingResponse();
    message.eresult = object.eresult ?? 0;
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

  fromJSON(object: any): CMsgGCMsgSetOptions {
    return {
      options: Array.isArray(object?.options)
        ? object.options.map((e: any) => cMsgGCMsgSetOptions_OptionFromJSON(e))
        : [],
      clientMsgRanges: Array.isArray(object?.clientMsgRanges)
        ? object.clientMsgRanges.map((e: any) => CMsgGCMsgSetOptions_MessageRange.fromJSON(e))
        : [],
      gcsqlVersion: isSet(object.gcsqlVersion) ? cMsgGCMsgSetOptions_GCSQLVersionFromJSON(object.gcsqlVersion) : 1,
    };
  },

  toJSON(message: CMsgGCMsgSetOptions): unknown {
    const obj: any = {};
    if (message.options) {
      obj.options = message.options.map((e) => cMsgGCMsgSetOptions_OptionToJSON(e));
    } else {
      obj.options = [];
    }
    if (message.clientMsgRanges) {
      obj.clientMsgRanges = message.clientMsgRanges.map((e) =>
        e ? CMsgGCMsgSetOptions_MessageRange.toJSON(e) : undefined
      );
    } else {
      obj.clientMsgRanges = [];
    }
    message.gcsqlVersion !== undefined &&
      (obj.gcsqlVersion = cMsgGCMsgSetOptions_GCSQLVersionToJSON(message.gcsqlVersion));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCMsgSetOptions>): CMsgGCMsgSetOptions {
    return CMsgGCMsgSetOptions.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCMsgSetOptions>): CMsgGCMsgSetOptions {
    const message = createBaseCMsgGCMsgSetOptions();
    message.options = object.options?.map((e) => e) || [];
    message.clientMsgRanges = object.clientMsgRanges?.map((e) => CMsgGCMsgSetOptions_MessageRange.fromPartial(e)) || [];
    message.gcsqlVersion = object.gcsqlVersion ?? 1;
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

  fromJSON(object: any): CMsgGCMsgSetOptions_MessageRange {
    return { low: isSet(object.low) ? Number(object.low) : 0, high: isSet(object.high) ? Number(object.high) : 0 };
  },

  toJSON(message: CMsgGCMsgSetOptions_MessageRange): unknown {
    const obj: any = {};
    message.low !== undefined && (obj.low = Math.round(message.low));
    message.high !== undefined && (obj.high = Math.round(message.high));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCMsgSetOptions_MessageRange>): CMsgGCMsgSetOptions_MessageRange {
    return CMsgGCMsgSetOptions_MessageRange.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCMsgSetOptions_MessageRange>): CMsgGCMsgSetOptions_MessageRange {
    const message = createBaseCMsgGCMsgSetOptions_MessageRange();
    message.low = object.low ?? 0;
    message.high = object.high ?? 0;
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

  fromJSON(object: any): CMsgGCHUpdateSession {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      online: isSet(object.online) ? Boolean(object.online) : false,
      serverSteamId: isSet(object.serverSteamId) ? String(object.serverSteamId) : "0",
      serverAddr: isSet(object.serverAddr) ? Number(object.serverAddr) : 0,
      serverPort: isSet(object.serverPort) ? Number(object.serverPort) : 0,
      osType: isSet(object.osType) ? Number(object.osType) : 0,
      clientAddr: isSet(object.clientAddr) ? Number(object.clientAddr) : 0,
      extraFields: Array.isArray(object?.extraFields)
        ? object.extraFields.map((e: any) => CMsgGCHUpdateSession_ExtraField.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGCHUpdateSession): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.online !== undefined && (obj.online = message.online);
    message.serverSteamId !== undefined && (obj.serverSteamId = message.serverSteamId);
    message.serverAddr !== undefined && (obj.serverAddr = Math.round(message.serverAddr));
    message.serverPort !== undefined && (obj.serverPort = Math.round(message.serverPort));
    message.osType !== undefined && (obj.osType = Math.round(message.osType));
    message.clientAddr !== undefined && (obj.clientAddr = Math.round(message.clientAddr));
    if (message.extraFields) {
      obj.extraFields = message.extraFields.map((e) => e ? CMsgGCHUpdateSession_ExtraField.toJSON(e) : undefined);
    } else {
      obj.extraFields = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGCHUpdateSession>): CMsgGCHUpdateSession {
    return CMsgGCHUpdateSession.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCHUpdateSession>): CMsgGCHUpdateSession {
    const message = createBaseCMsgGCHUpdateSession();
    message.steamId = object.steamId ?? "0";
    message.appId = object.appId ?? 0;
    message.online = object.online ?? false;
    message.serverSteamId = object.serverSteamId ?? "0";
    message.serverAddr = object.serverAddr ?? 0;
    message.serverPort = object.serverPort ?? 0;
    message.osType = object.osType ?? 0;
    message.clientAddr = object.clientAddr ?? 0;
    message.extraFields = object.extraFields?.map((e) => CMsgGCHUpdateSession_ExtraField.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgGCHUpdateSession_ExtraField {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: CMsgGCHUpdateSession_ExtraField): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCHUpdateSession_ExtraField>): CMsgGCHUpdateSession_ExtraField {
    return CMsgGCHUpdateSession_ExtraField.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCHUpdateSession_ExtraField>): CMsgGCHUpdateSession_ExtraField {
    const message = createBaseCMsgGCHUpdateSession_ExtraField();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
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

  fromJSON(object: any): CMsgNotificationOfSuspiciousActivity {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      multipleInstances: isSet(object.multipleInstances)
        ? CMsgNotificationOfSuspiciousActivity_MultipleGameInstances.fromJSON(object.multipleInstances)
        : undefined,
    };
  },

  toJSON(message: CMsgNotificationOfSuspiciousActivity): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.multipleInstances !== undefined && (obj.multipleInstances = message.multipleInstances
      ? CMsgNotificationOfSuspiciousActivity_MultipleGameInstances.toJSON(message.multipleInstances)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgNotificationOfSuspiciousActivity>): CMsgNotificationOfSuspiciousActivity {
    return CMsgNotificationOfSuspiciousActivity.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgNotificationOfSuspiciousActivity>): CMsgNotificationOfSuspiciousActivity {
    const message = createBaseCMsgNotificationOfSuspiciousActivity();
    message.steamid = object.steamid ?? "0";
    message.appid = object.appid ?? 0;
    message.multipleInstances = (object.multipleInstances !== undefined && object.multipleInstances !== null)
      ? CMsgNotificationOfSuspiciousActivity_MultipleGameInstances.fromPartial(object.multipleInstances)
      : undefined;
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

  fromJSON(object: any): CMsgNotificationOfSuspiciousActivity_MultipleGameInstances {
    return {
      appInstanceCount: isSet(object.appInstanceCount) ? Number(object.appInstanceCount) : 0,
      otherSteamids: Array.isArray(object?.otherSteamids) ? object.otherSteamids.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CMsgNotificationOfSuspiciousActivity_MultipleGameInstances): unknown {
    const obj: any = {};
    message.appInstanceCount !== undefined && (obj.appInstanceCount = Math.round(message.appInstanceCount));
    if (message.otherSteamids) {
      obj.otherSteamids = message.otherSteamids.map((e) => e);
    } else {
      obj.otherSteamids = [];
    }
    return obj;
  },

  create(
    base?: DeepPartial<CMsgNotificationOfSuspiciousActivity_MultipleGameInstances>,
  ): CMsgNotificationOfSuspiciousActivity_MultipleGameInstances {
    return CMsgNotificationOfSuspiciousActivity_MultipleGameInstances.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgNotificationOfSuspiciousActivity_MultipleGameInstances>,
  ): CMsgNotificationOfSuspiciousActivity_MultipleGameInstances {
    const message = createBaseCMsgNotificationOfSuspiciousActivity_MultipleGameInstances();
    message.appInstanceCount = object.appInstanceCount ?? 0;
    message.otherSteamids = object.otherSteamids?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgDPPartnerMicroTxns {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      gcName: isSet(object.gcName) ? String(object.gcName) : "",
      partner: isSet(object.partner) ? CMsgDPPartnerMicroTxns_PartnerInfo.fromJSON(object.partner) : undefined,
      transactions: Array.isArray(object?.transactions)
        ? object.transactions.map((e: any) => CMsgDPPartnerMicroTxns_PartnerMicroTxn.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDPPartnerMicroTxns): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.gcName !== undefined && (obj.gcName = message.gcName);
    message.partner !== undefined &&
      (obj.partner = message.partner ? CMsgDPPartnerMicroTxns_PartnerInfo.toJSON(message.partner) : undefined);
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) =>
        e ? CMsgDPPartnerMicroTxns_PartnerMicroTxn.toJSON(e) : undefined
      );
    } else {
      obj.transactions = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgDPPartnerMicroTxns>): CMsgDPPartnerMicroTxns {
    return CMsgDPPartnerMicroTxns.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDPPartnerMicroTxns>): CMsgDPPartnerMicroTxns {
    const message = createBaseCMsgDPPartnerMicroTxns();
    message.appid = object.appid ?? 0;
    message.gcName = object.gcName ?? "";
    message.partner = (object.partner !== undefined && object.partner !== null)
      ? CMsgDPPartnerMicroTxns_PartnerInfo.fromPartial(object.partner)
      : undefined;
    message.transactions = object.transactions?.map((e) => CMsgDPPartnerMicroTxns_PartnerMicroTxn.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgDPPartnerMicroTxns_PartnerMicroTxn {
    return {
      initTime: isSet(object.initTime) ? Number(object.initTime) : 0,
      lastUpdateTime: isSet(object.lastUpdateTime) ? Number(object.lastUpdateTime) : 0,
      txnId: isSet(object.txnId) ? String(object.txnId) : "0",
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      lineItem: isSet(object.lineItem) ? Number(object.lineItem) : 0,
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
      defIndex: isSet(object.defIndex) ? Number(object.defIndex) : 0,
      price: isSet(object.price) ? String(object.price) : "0",
      tax: isSet(object.tax) ? String(object.tax) : "0",
      priceUsd: isSet(object.priceUsd) ? String(object.priceUsd) : "0",
      taxUsd: isSet(object.taxUsd) ? String(object.taxUsd) : "0",
      purchaseType: isSet(object.purchaseType) ? Number(object.purchaseType) : 0,
      steamTxnType: isSet(object.steamTxnType) ? Number(object.steamTxnType) : 0,
      countryCode: isSet(object.countryCode) ? String(object.countryCode) : "",
      regionCode: isSet(object.regionCode) ? String(object.regionCode) : "",
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      refTransId: isSet(object.refTransId) ? String(object.refTransId) : "0",
    };
  },

  toJSON(message: CMsgDPPartnerMicroTxns_PartnerMicroTxn): unknown {
    const obj: any = {};
    message.initTime !== undefined && (obj.initTime = Math.round(message.initTime));
    message.lastUpdateTime !== undefined && (obj.lastUpdateTime = Math.round(message.lastUpdateTime));
    message.txnId !== undefined && (obj.txnId = message.txnId);
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.lineItem !== undefined && (obj.lineItem = Math.round(message.lineItem));
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.defIndex !== undefined && (obj.defIndex = Math.round(message.defIndex));
    message.price !== undefined && (obj.price = message.price);
    message.tax !== undefined && (obj.tax = message.tax);
    message.priceUsd !== undefined && (obj.priceUsd = message.priceUsd);
    message.taxUsd !== undefined && (obj.taxUsd = message.taxUsd);
    message.purchaseType !== undefined && (obj.purchaseType = Math.round(message.purchaseType));
    message.steamTxnType !== undefined && (obj.steamTxnType = Math.round(message.steamTxnType));
    message.countryCode !== undefined && (obj.countryCode = message.countryCode);
    message.regionCode !== undefined && (obj.regionCode = message.regionCode);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.refTransId !== undefined && (obj.refTransId = message.refTransId);
    return obj;
  },

  create(base?: DeepPartial<CMsgDPPartnerMicroTxns_PartnerMicroTxn>): CMsgDPPartnerMicroTxns_PartnerMicroTxn {
    return CMsgDPPartnerMicroTxns_PartnerMicroTxn.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDPPartnerMicroTxns_PartnerMicroTxn>): CMsgDPPartnerMicroTxns_PartnerMicroTxn {
    const message = createBaseCMsgDPPartnerMicroTxns_PartnerMicroTxn();
    message.initTime = object.initTime ?? 0;
    message.lastUpdateTime = object.lastUpdateTime ?? 0;
    message.txnId = object.txnId ?? "0";
    message.accountId = object.accountId ?? 0;
    message.lineItem = object.lineItem ?? 0;
    message.itemId = object.itemId ?? "0";
    message.defIndex = object.defIndex ?? 0;
    message.price = object.price ?? "0";
    message.tax = object.tax ?? "0";
    message.priceUsd = object.priceUsd ?? "0";
    message.taxUsd = object.taxUsd ?? "0";
    message.purchaseType = object.purchaseType ?? 0;
    message.steamTxnType = object.steamTxnType ?? 0;
    message.countryCode = object.countryCode ?? "";
    message.regionCode = object.regionCode ?? "";
    message.quantity = object.quantity ?? 0;
    message.refTransId = object.refTransId ?? "0";
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

  fromJSON(object: any): CMsgDPPartnerMicroTxns_PartnerInfo {
    return {
      partnerId: isSet(object.partnerId) ? Number(object.partnerId) : 0,
      partnerName: isSet(object.partnerName) ? String(object.partnerName) : "",
      currencyCode: isSet(object.currencyCode) ? String(object.currencyCode) : "",
      currencyName: isSet(object.currencyName) ? String(object.currencyName) : "",
    };
  },

  toJSON(message: CMsgDPPartnerMicroTxns_PartnerInfo): unknown {
    const obj: any = {};
    message.partnerId !== undefined && (obj.partnerId = Math.round(message.partnerId));
    message.partnerName !== undefined && (obj.partnerName = message.partnerName);
    message.currencyCode !== undefined && (obj.currencyCode = message.currencyCode);
    message.currencyName !== undefined && (obj.currencyName = message.currencyName);
    return obj;
  },

  create(base?: DeepPartial<CMsgDPPartnerMicroTxns_PartnerInfo>): CMsgDPPartnerMicroTxns_PartnerInfo {
    return CMsgDPPartnerMicroTxns_PartnerInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDPPartnerMicroTxns_PartnerInfo>): CMsgDPPartnerMicroTxns_PartnerInfo {
    const message = createBaseCMsgDPPartnerMicroTxns_PartnerInfo();
    message.partnerId = object.partnerId ?? 0;
    message.partnerName = object.partnerName ?? "";
    message.currencyCode = object.currencyCode ?? "";
    message.currencyName = object.currencyName ?? "";
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

  fromJSON(object: any): CMsgDPPartnerMicroTxnsResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      eerrorcode: isSet(object.eerrorcode) ? cMsgDPPartnerMicroTxnsResponse_EErrorCodeFromJSON(object.eerrorcode) : 0,
    };
  },

  toJSON(message: CMsgDPPartnerMicroTxnsResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.eerrorcode !== undefined &&
      (obj.eerrorcode = cMsgDPPartnerMicroTxnsResponse_EErrorCodeToJSON(message.eerrorcode));
    return obj;
  },

  create(base?: DeepPartial<CMsgDPPartnerMicroTxnsResponse>): CMsgDPPartnerMicroTxnsResponse {
    return CMsgDPPartnerMicroTxnsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDPPartnerMicroTxnsResponse>): CMsgDPPartnerMicroTxnsResponse {
    const message = createBaseCMsgDPPartnerMicroTxnsResponse();
    message.eresult = object.eresult ?? 0;
    message.eerrorcode = object.eerrorcode ?? 0;
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

  fromJSON(object: any): CMsgGCHVacVerificationChange {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      isVerified: isSet(object.isVerified) ? Boolean(object.isVerified) : false,
    };
  },

  toJSON(message: CMsgGCHVacVerificationChange): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.isVerified !== undefined && (obj.isVerified = message.isVerified);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCHVacVerificationChange>): CMsgGCHVacVerificationChange {
    return CMsgGCHVacVerificationChange.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCHVacVerificationChange>): CMsgGCHVacVerificationChange {
    const message = createBaseCMsgGCHVacVerificationChange();
    message.steamid = object.steamid ?? "0";
    message.appid = object.appid ?? 0;
    message.isVerified = object.isVerified ?? false;
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

  fromJSON(object: any): CMsgGCHAccountTwoFactorChange {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      twofactorEnabled: isSet(object.twofactorEnabled) ? Boolean(object.twofactorEnabled) : false,
    };
  },

  toJSON(message: CMsgGCHAccountTwoFactorChange): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.twofactorEnabled !== undefined && (obj.twofactorEnabled = message.twofactorEnabled);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCHAccountTwoFactorChange>): CMsgGCHAccountTwoFactorChange {
    return CMsgGCHAccountTwoFactorChange.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCHAccountTwoFactorChange>): CMsgGCHAccountTwoFactorChange {
    const message = createBaseCMsgGCHAccountTwoFactorChange();
    message.steamid = object.steamid ?? "0";
    message.appid = object.appid ?? 0;
    message.twofactorEnabled = object.twofactorEnabled ?? false;
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

  fromJSON(object: any): CMsgGCCheckClanMembership {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      clanid: isSet(object.clanid) ? Number(object.clanid) : 0,
    };
  },

  toJSON(message: CMsgGCCheckClanMembership): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.clanid !== undefined && (obj.clanid = Math.round(message.clanid));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCCheckClanMembership>): CMsgGCCheckClanMembership {
    return CMsgGCCheckClanMembership.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCCheckClanMembership>): CMsgGCCheckClanMembership {
    const message = createBaseCMsgGCCheckClanMembership();
    message.steamid = object.steamid ?? "0";
    message.clanid = object.clanid ?? 0;
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

  fromJSON(object: any): CMsgGCCheckClanMembershipResponse {
    return { ismember: isSet(object.ismember) ? Boolean(object.ismember) : false };
  },

  toJSON(message: CMsgGCCheckClanMembershipResponse): unknown {
    const obj: any = {};
    message.ismember !== undefined && (obj.ismember = message.ismember);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCCheckClanMembershipResponse>): CMsgGCCheckClanMembershipResponse {
    return CMsgGCCheckClanMembershipResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCCheckClanMembershipResponse>): CMsgGCCheckClanMembershipResponse {
    const message = createBaseCMsgGCCheckClanMembershipResponse();
    message.ismember = object.ismember ?? false;
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

  fromJSON(object: any): CMsgGCHAppCheersReceived {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      cheerTargets: Array.isArray(object?.cheerTargets)
        ? object.cheerTargets.map((e: any) => CMsgGCHAppCheersReceived_CheerTarget.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGCHAppCheersReceived): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    if (message.cheerTargets) {
      obj.cheerTargets = message.cheerTargets.map((e) =>
        e ? CMsgGCHAppCheersReceived_CheerTarget.toJSON(e) : undefined
      );
    } else {
      obj.cheerTargets = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGCHAppCheersReceived>): CMsgGCHAppCheersReceived {
    return CMsgGCHAppCheersReceived.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCHAppCheersReceived>): CMsgGCHAppCheersReceived {
    const message = createBaseCMsgGCHAppCheersReceived();
    message.appid = object.appid ?? 0;
    message.cheerTargets = object.cheerTargets?.map((e) => CMsgGCHAppCheersReceived_CheerTarget.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgGCHAppCheersReceived_CheerTypeAmount {
    return {
      cheerType: isSet(object.cheerType) ? Number(object.cheerType) : 0,
      cheerAmount: isSet(object.cheerAmount) ? Number(object.cheerAmount) : 0,
    };
  },

  toJSON(message: CMsgGCHAppCheersReceived_CheerTypeAmount): unknown {
    const obj: any = {};
    message.cheerType !== undefined && (obj.cheerType = Math.round(message.cheerType));
    message.cheerAmount !== undefined && (obj.cheerAmount = Math.round(message.cheerAmount));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCHAppCheersReceived_CheerTypeAmount>): CMsgGCHAppCheersReceived_CheerTypeAmount {
    return CMsgGCHAppCheersReceived_CheerTypeAmount.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCHAppCheersReceived_CheerTypeAmount>): CMsgGCHAppCheersReceived_CheerTypeAmount {
    const message = createBaseCMsgGCHAppCheersReceived_CheerTypeAmount();
    message.cheerType = object.cheerType ?? 0;
    message.cheerAmount = object.cheerAmount ?? 0;
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

  fromJSON(object: any): CMsgGCHAppCheersReceived_CheerTarget {
    return {
      cheerTarget: isSet(object.cheerTarget) ? String(object.cheerTarget) : "0",
      cheerTypes: Array.isArray(object?.cheerTypes)
        ? object.cheerTypes.map((e: any) => CMsgGCHAppCheersReceived_CheerTypeAmount.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGCHAppCheersReceived_CheerTarget): unknown {
    const obj: any = {};
    message.cheerTarget !== undefined && (obj.cheerTarget = message.cheerTarget);
    if (message.cheerTypes) {
      obj.cheerTypes = message.cheerTypes.map((e) =>
        e ? CMsgGCHAppCheersReceived_CheerTypeAmount.toJSON(e) : undefined
      );
    } else {
      obj.cheerTypes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGCHAppCheersReceived_CheerTarget>): CMsgGCHAppCheersReceived_CheerTarget {
    return CMsgGCHAppCheersReceived_CheerTarget.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCHAppCheersReceived_CheerTarget>): CMsgGCHAppCheersReceived_CheerTarget {
    const message = createBaseCMsgGCHAppCheersReceived_CheerTarget();
    message.cheerTarget = object.cheerTarget ?? "0";
    message.cheerTypes = object.cheerTypes?.map((e) => CMsgGCHAppCheersReceived_CheerTypeAmount.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgGCHAppCheersGetAllowedTypes {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      cheerTarget: isSet(object.cheerTarget) ? String(object.cheerTarget) : "0",
    };
  },

  toJSON(message: CMsgGCHAppCheersGetAllowedTypes): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.cheerTarget !== undefined && (obj.cheerTarget = message.cheerTarget);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCHAppCheersGetAllowedTypes>): CMsgGCHAppCheersGetAllowedTypes {
    return CMsgGCHAppCheersGetAllowedTypes.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCHAppCheersGetAllowedTypes>): CMsgGCHAppCheersGetAllowedTypes {
    const message = createBaseCMsgGCHAppCheersGetAllowedTypes();
    message.appid = object.appid ?? 0;
    message.cheerTarget = object.cheerTarget ?? "0";
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

  fromJSON(object: any): CMsgGCHAppCheersGetAllowedTypesResponse {
    return {
      cheerTypesValidAllUsers: Array.isArray(object?.cheerTypesValidAllUsers)
        ? object.cheerTypesValidAllUsers.map((e: any) => Number(e))
        : [],
      cheerRemaps: Array.isArray(object?.cheerRemaps)
        ? object.cheerRemaps.map((e: any) => CMsgGCHAppCheersGetAllowedTypesResponse_CheerRemaps.fromJSON(e))
        : [],
      cacheDuration: isSet(object.cacheDuration) ? Number(object.cacheDuration) : 0,
    };
  },

  toJSON(message: CMsgGCHAppCheersGetAllowedTypesResponse): unknown {
    const obj: any = {};
    if (message.cheerTypesValidAllUsers) {
      obj.cheerTypesValidAllUsers = message.cheerTypesValidAllUsers.map((e) => Math.round(e));
    } else {
      obj.cheerTypesValidAllUsers = [];
    }
    if (message.cheerRemaps) {
      obj.cheerRemaps = message.cheerRemaps.map((e) =>
        e ? CMsgGCHAppCheersGetAllowedTypesResponse_CheerRemaps.toJSON(e) : undefined
      );
    } else {
      obj.cheerRemaps = [];
    }
    message.cacheDuration !== undefined && (obj.cacheDuration = Math.round(message.cacheDuration));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCHAppCheersGetAllowedTypesResponse>): CMsgGCHAppCheersGetAllowedTypesResponse {
    return CMsgGCHAppCheersGetAllowedTypesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCHAppCheersGetAllowedTypesResponse>): CMsgGCHAppCheersGetAllowedTypesResponse {
    const message = createBaseCMsgGCHAppCheersGetAllowedTypesResponse();
    message.cheerTypesValidAllUsers = object.cheerTypesValidAllUsers?.map((e) => e) || [];
    message.cheerRemaps =
      object.cheerRemaps?.map((e) => CMsgGCHAppCheersGetAllowedTypesResponse_CheerRemaps.fromPartial(e)) || [];
    message.cacheDuration = object.cacheDuration ?? 0;
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

  fromJSON(object: any): CMsgGCHAppCheersGetAllowedTypesResponse_CheerRemaps {
    return {
      originalCheerType: isSet(object.originalCheerType) ? Number(object.originalCheerType) : 0,
      remappedCheerType: isSet(object.remappedCheerType) ? Number(object.remappedCheerType) : 0,
      accountIds: Array.isArray(object?.accountIds) ? object.accountIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgGCHAppCheersGetAllowedTypesResponse_CheerRemaps): unknown {
    const obj: any = {};
    message.originalCheerType !== undefined && (obj.originalCheerType = Math.round(message.originalCheerType));
    message.remappedCheerType !== undefined && (obj.remappedCheerType = Math.round(message.remappedCheerType));
    if (message.accountIds) {
      obj.accountIds = message.accountIds.map((e) => Math.round(e));
    } else {
      obj.accountIds = [];
    }
    return obj;
  },

  create(
    base?: DeepPartial<CMsgGCHAppCheersGetAllowedTypesResponse_CheerRemaps>,
  ): CMsgGCHAppCheersGetAllowedTypesResponse_CheerRemaps {
    return CMsgGCHAppCheersGetAllowedTypesResponse_CheerRemaps.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgGCHAppCheersGetAllowedTypesResponse_CheerRemaps>,
  ): CMsgGCHAppCheersGetAllowedTypesResponse_CheerRemaps {
    const message = createBaseCMsgGCHAppCheersGetAllowedTypesResponse_CheerRemaps();
    message.originalCheerType = object.originalCheerType ?? 0;
    message.remappedCheerType = object.remappedCheerType ?? 0;
    message.accountIds = object.accountIds?.map((e) => e) || [];
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

  fromJSON(object: any): CGCSystemMsgReportExternalPurchaseRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      provider: isSet(object.provider) ? eMobilePaymentProviderFromJSON(object.provider) : 0,
      orderid: isSet(object.orderid) ? String(object.orderid) : "0",
      providerOrderid: isSet(object.providerOrderid) ? String(object.providerOrderid) : "",
      amount: isSet(object.amount) ? String(object.amount) : "0",
      currency: isSet(object.currency) ? String(object.currency) : "",
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      itemid: isSet(object.itemid) ? Number(object.itemid) : 0,
      itemDescription: isSet(object.itemDescription) ? String(object.itemDescription) : "",
      language: isSet(object.language) ? String(object.language) : "",
      category: isSet(object.category) ? String(object.category) : "",
      timeCreated: isSet(object.timeCreated) ? Number(object.timeCreated) : 0,
    };
  },

  toJSON(message: CGCSystemMsgReportExternalPurchaseRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.provider !== undefined && (obj.provider = eMobilePaymentProviderToJSON(message.provider));
    message.orderid !== undefined && (obj.orderid = message.orderid);
    message.providerOrderid !== undefined && (obj.providerOrderid = message.providerOrderid);
    message.amount !== undefined && (obj.amount = message.amount);
    message.currency !== undefined && (obj.currency = message.currency);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.itemid !== undefined && (obj.itemid = Math.round(message.itemid));
    message.itemDescription !== undefined && (obj.itemDescription = message.itemDescription);
    message.language !== undefined && (obj.language = message.language);
    message.category !== undefined && (obj.category = message.category);
    message.timeCreated !== undefined && (obj.timeCreated = Math.round(message.timeCreated));
    return obj;
  },

  create(base?: DeepPartial<CGCSystemMsgReportExternalPurchaseRequest>): CGCSystemMsgReportExternalPurchaseRequest {
    return CGCSystemMsgReportExternalPurchaseRequest.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CGCSystemMsgReportExternalPurchaseRequest>,
  ): CGCSystemMsgReportExternalPurchaseRequest {
    const message = createBaseCGCSystemMsgReportExternalPurchaseRequest();
    message.appid = object.appid ?? 0;
    message.steamid = object.steamid ?? "0";
    message.provider = object.provider ?? 0;
    message.orderid = object.orderid ?? "0";
    message.providerOrderid = object.providerOrderid ?? "";
    message.amount = object.amount ?? "0";
    message.currency = object.currency ?? "";
    message.quantity = object.quantity ?? 0;
    message.itemid = object.itemid ?? 0;
    message.itemDescription = object.itemDescription ?? "";
    message.language = object.language ?? "";
    message.category = object.category ?? "";
    message.timeCreated = object.timeCreated ?? 0;
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

  fromJSON(object: any): CGCSystemMsgReportExternalPurchaseResponse {
    return {
      transid: isSet(object.transid) ? String(object.transid) : "0",
      orderid: isSet(object.orderid) ? String(object.orderid) : "0",
    };
  },

  toJSON(message: CGCSystemMsgReportExternalPurchaseResponse): unknown {
    const obj: any = {};
    message.transid !== undefined && (obj.transid = message.transid);
    message.orderid !== undefined && (obj.orderid = message.orderid);
    return obj;
  },

  create(base?: DeepPartial<CGCSystemMsgReportExternalPurchaseResponse>): CGCSystemMsgReportExternalPurchaseResponse {
    return CGCSystemMsgReportExternalPurchaseResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CGCSystemMsgReportExternalPurchaseResponse>,
  ): CGCSystemMsgReportExternalPurchaseResponse {
    const message = createBaseCGCSystemMsgReportExternalPurchaseResponse();
    message.transid = object.transid ?? "0";
    message.orderid = object.orderid ?? "0";
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

  fromJSON(object: any): CWorkshopAddSpecialPaymentRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      gameitemid: isSet(object.gameitemid) ? Number(object.gameitemid) : 0,
      date: isSet(object.date) ? String(object.date) : "",
      paymentUsUsd: isSet(object.paymentUsUsd) ? String(object.paymentUsUsd) : "0",
      paymentRowUsd: isSet(object.paymentRowUsd) ? String(object.paymentRowUsd) : "0",
    };
  },

  toJSON(message: CWorkshopAddSpecialPaymentRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.gameitemid !== undefined && (obj.gameitemid = Math.round(message.gameitemid));
    message.date !== undefined && (obj.date = message.date);
    message.paymentUsUsd !== undefined && (obj.paymentUsUsd = message.paymentUsUsd);
    message.paymentRowUsd !== undefined && (obj.paymentRowUsd = message.paymentRowUsd);
    return obj;
  },

  create(base?: DeepPartial<CWorkshopAddSpecialPaymentRequest>): CWorkshopAddSpecialPaymentRequest {
    return CWorkshopAddSpecialPaymentRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CWorkshopAddSpecialPaymentRequest>): CWorkshopAddSpecialPaymentRequest {
    const message = createBaseCWorkshopAddSpecialPaymentRequest();
    message.appid = object.appid ?? 0;
    message.gameitemid = object.gameitemid ?? 0;
    message.date = object.date ?? "";
    message.paymentUsUsd = object.paymentUsUsd ?? "0";
    message.paymentRowUsd = object.paymentRowUsd ?? "0";
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

  fromJSON(_: any): CWorkshopAddSpecialPaymentResponse {
    return {};
  },

  toJSON(_: CWorkshopAddSpecialPaymentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CWorkshopAddSpecialPaymentResponse>): CWorkshopAddSpecialPaymentResponse {
    return CWorkshopAddSpecialPaymentResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CWorkshopAddSpecialPaymentResponse>): CWorkshopAddSpecialPaymentResponse {
    const message = createBaseCWorkshopAddSpecialPaymentResponse();
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

  fromJSON(object: any): CWorkshopGetSpecialPaymentsRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      gameitemid: isSet(object.gameitemid) ? Number(object.gameitemid) : 0,
      date: isSet(object.date) ? String(object.date) : "",
    };
  },

  toJSON(message: CWorkshopGetSpecialPaymentsRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.gameitemid !== undefined && (obj.gameitemid = Math.round(message.gameitemid));
    message.date !== undefined && (obj.date = message.date);
    return obj;
  },

  create(base?: DeepPartial<CWorkshopGetSpecialPaymentsRequest>): CWorkshopGetSpecialPaymentsRequest {
    return CWorkshopGetSpecialPaymentsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CWorkshopGetSpecialPaymentsRequest>): CWorkshopGetSpecialPaymentsRequest {
    const message = createBaseCWorkshopGetSpecialPaymentsRequest();
    message.appid = object.appid ?? 0;
    message.gameitemid = object.gameitemid ?? 0;
    message.date = object.date ?? "";
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

  fromJSON(object: any): CWorkshopGetSpecialPaymentsResponse {
    return {
      specialPayments: Array.isArray(object?.specialPayments)
        ? object.specialPayments.map((e: any) => CWorkshopGetSpecialPaymentsResponse_SpecialPayment.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CWorkshopGetSpecialPaymentsResponse): unknown {
    const obj: any = {};
    if (message.specialPayments) {
      obj.specialPayments = message.specialPayments.map((e) =>
        e ? CWorkshopGetSpecialPaymentsResponse_SpecialPayment.toJSON(e) : undefined
      );
    } else {
      obj.specialPayments = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CWorkshopGetSpecialPaymentsResponse>): CWorkshopGetSpecialPaymentsResponse {
    return CWorkshopGetSpecialPaymentsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CWorkshopGetSpecialPaymentsResponse>): CWorkshopGetSpecialPaymentsResponse {
    const message = createBaseCWorkshopGetSpecialPaymentsResponse();
    message.specialPayments =
      object.specialPayments?.map((e) => CWorkshopGetSpecialPaymentsResponse_SpecialPayment.fromPartial(e)) || [];
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

  fromJSON(object: any): CWorkshopGetSpecialPaymentsResponse_SpecialPayment {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      gameitemid: isSet(object.gameitemid) ? Number(object.gameitemid) : 0,
      date: isSet(object.date) ? String(object.date) : "",
      netPaymentUsUsd: isSet(object.netPaymentUsUsd) ? String(object.netPaymentUsUsd) : "0",
      netPaymentRowUsd: isSet(object.netPaymentRowUsd) ? String(object.netPaymentRowUsd) : "0",
    };
  },

  toJSON(message: CWorkshopGetSpecialPaymentsResponse_SpecialPayment): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.gameitemid !== undefined && (obj.gameitemid = Math.round(message.gameitemid));
    message.date !== undefined && (obj.date = message.date);
    message.netPaymentUsUsd !== undefined && (obj.netPaymentUsUsd = message.netPaymentUsUsd);
    message.netPaymentRowUsd !== undefined && (obj.netPaymentRowUsd = message.netPaymentRowUsd);
    return obj;
  },

  create(
    base?: DeepPartial<CWorkshopGetSpecialPaymentsResponse_SpecialPayment>,
  ): CWorkshopGetSpecialPaymentsResponse_SpecialPayment {
    return CWorkshopGetSpecialPaymentsResponse_SpecialPayment.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CWorkshopGetSpecialPaymentsResponse_SpecialPayment>,
  ): CWorkshopGetSpecialPaymentsResponse_SpecialPayment {
    const message = createBaseCWorkshopGetSpecialPaymentsResponse_SpecialPayment();
    message.appid = object.appid ?? 0;
    message.gameitemid = object.gameitemid ?? 0;
    message.date = object.date ?? "";
    message.netPaymentUsUsd = object.netPaymentUsUsd ?? "0";
    message.netPaymentRowUsd = object.netPaymentRowUsd ?? "0";
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
