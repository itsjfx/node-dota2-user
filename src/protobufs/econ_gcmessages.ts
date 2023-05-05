/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { EGCMsgResponse } from "./econ_shared_enums";
import { CExtraMsgBlock } from "./gcsdk_gcmessages";

export enum EGCItemMsg {
  k_EMsgGCBase = 1000,
  k_EMsgGCSetItemPosition = 1001,
  k_EMsgGCDelete = 1004,
  k_EMsgGCVerifyCacheSubscription = 1005,
  k_EMsgClientToGCNameItem = 1006,
  k_EMsgGCPaintItem = 1009,
  k_EMsgGCPaintItemResponse = 1010,
  k_EMsgGCNameBaseItem = 1019,
  k_EMsgGCNameBaseItemResponse = 1020,
  k_EMsgGCUseItemRequest = 1025,
  k_EMsgGCUseItemResponse = 1026,
  k_EMsgGCGiftedItems = 1027,
  k_EMsgGCUnwrapGiftRequest = 1037,
  k_EMsgGCUnwrapGiftResponse = 1038,
  k_EMsgGCSortItems = 1041,
  k_EMsgGCBackpackSortFinished = 1058,
  k_EMsgGCAdjustItemEquippedState = 1059,
  k_EMsgGCItemAcknowledged = 1062,
  k_EMsgClientToGCNameItemResponse = 1068,
  k_EMsgGCApplyStrangePart = 1073,
  k_EMsgGCApplyPennantUpgrade = 1076,
  k_EMsgGCSetItemPositions = 1077,
  k_EMsgGCApplyEggEssence = 1078,
  k_EMsgGCNameEggEssenceResponse = 1079,
  k_EMsgGCExtractGems = 1086,
  k_EMsgGCAddSocket = 1087,
  k_EMsgGCAddItemToSocket = 1088,
  k_EMsgGCAddItemToSocketResponse = 1089,
  k_EMsgGCAddSocketResponse = 1090,
  k_EMsgGCResetStrangeGemCount = 1091,
  k_EMsgGCRequestCrateItems = 1092,
  k_EMsgGCRequestCrateItemsResponse = 1093,
  k_EMsgGCExtractGemsResponse = 1094,
  k_EMsgGCResetStrangeGemCountResponse = 1095,
  k_EMsgGCServerUseItemRequest = 1103,
  k_EMsgGCAddGiftItem = 1104,
  k_EMsgClientToGCRemoveItemGifterAttributes = 1109,
  k_EMsgClientToGCRemoveItemName = 1110,
  k_EMsgClientToGCRemoveItemDescription = 1111,
  k_EMsgClientToGCRemoveItemAttributeResponse = 1112,
  k_EMsgGCDev_NewItemRequest = 2001,
  k_EMsgGCDev_NewItemRequestResponse = 2002,
  k_EMsgGCDev_UnlockAllItemStylesRequest = 2003,
  k_EMsgGCDev_UnlockAllItemStylesResponse = 2004,
  k_EMsgGCStorePurchaseFinalize = 2504,
  k_EMsgGCStorePurchaseFinalizeResponse = 2505,
  k_EMsgGCStorePurchaseCancel = 2506,
  k_EMsgGCStorePurchaseCancelResponse = 2507,
  k_EMsgGCStorePurchaseInit = 2510,
  k_EMsgGCStorePurchaseInitResponse = 2511,
  k_EMsgGCToGCBannedWordListUpdated = 2515,
  k_EMsgGCToGCDirtySDOCache = 2516,
  k_EMsgGCToGCUpdateSQLKeyValue = 2518,
  k_EMsgGCToGCBroadcastConsoleCommand = 2521,
  k_EMsgGCServerVersionUpdated = 2522,
  k_EMsgGCApplyAutograph = 2523,
  k_EMsgGCToGCWebAPIAccountChanged = 2524,
  k_EMsgGCClientVersionUpdated = 2528,
  k_EMsgGCToGCUpdateWelcomeMsg = 2529,
  k_EMsgGCToGCPlayerStrangeCountAdjustments = 2535,
  k_EMsgGCRequestStoreSalesData = 2536,
  k_EMsgGCRequestStoreSalesDataResponse = 2537,
  k_EMsgGCRequestStoreSalesDataUpToDateResponse = 2538,
  k_EMsgGCToGCPingRequest = 2539,
  k_EMsgGCToGCPingResponse = 2540,
  k_EMsgGCToGCGetUserSessionServer = 2541,
  k_EMsgGCToGCGetUserSessionServerResponse = 2542,
  k_EMsgGCToGCGetUserServerMembers = 2543,
  k_EMsgGCToGCGetUserServerMembersResponse = 2544,
  k_EMsgGCToGCCanUseDropRateBonus = 2547,
  k_EMsgSQLAddDropRateBonus = 2548,
  k_EMsgGCToGCRefreshSOCache = 2549,
  k_EMsgGCToGCGrantAccountRolledItems = 2554,
  k_EMsgGCToGCGrantSelfMadeItemToAccount = 2555,
  k_EMsgGCStatueCraft = 2561,
  k_EMsgGCRedeemCode = 2562,
  k_EMsgGCRedeemCodeResponse = 2563,
  k_EMsgGCToGCItemConsumptionRollback = 2564,
  k_EMsgClientToGCWrapAndDeliverGift = 2565,
  k_EMsgClientToGCWrapAndDeliverGiftResponse = 2566,
  k_EMsgClientToGCUnpackBundleResponse = 2567,
  k_EMsgGCToClientStoreTransactionCompleted = 2568,
  k_EMsgClientToGCEquipItems = 2569,
  k_EMsgClientToGCEquipItemsResponse = 2570,
  k_EMsgClientToGCUnlockItemStyle = 2571,
  k_EMsgClientToGCUnlockItemStyleResponse = 2572,
  k_EMsgClientToGCSetItemInventoryCategory = 2573,
  k_EMsgClientToGCUnlockCrate = 2574,
  k_EMsgClientToGCUnlockCrateResponse = 2575,
  k_EMsgClientToGCUnpackBundle = 2576,
  k_EMsgClientToGCSetItemStyle = 2577,
  k_EMsgClientToGCSetItemStyleResponse = 2578,
  k_EMsgSQLGCToGCGrantBackpackSlots = 2580,
  k_EMsgClientToGCLookupAccountName = 2581,
  k_EMsgClientToGCLookupAccountNameResponse = 2582,
  k_EMsgClientToGCCreateStaticRecipe = 2584,
  k_EMsgClientToGCCreateStaticRecipeResponse = 2585,
  k_EMsgGCToGCStoreProcessCDKeyTransaction = 2586,
  k_EMsgGCToGCStoreProcessCDKeyTransactionResponse = 2587,
  k_EMsgGCToGCStoreProcessSettlement = 2588,
  k_EMsgGCToGCStoreProcessSettlementResponse = 2589,
  k_EMsgGCToGCConsoleOutput = 2590,
  k_EMsgGCToClientItemAges = 2591,
  k_EMsgGCToGCInternalTestMsg = 2592,
  k_EMsgGCToGCClientServerVersionsUpdated = 2593,
  k_EMsgGCUseMultipleItemsRequest = 2594,
  k_EMsgGCGetAccountSubscriptionItem = 2595,
  k_EMsgGCGetAccountSubscriptionItemResponse = 2596,
  k_EMsgGCToGCBroadcastMessageFromSub = 2598,
  k_EMsgGCToClientCurrencyPricePoints = 2599,
  k_EMsgGCToGCAddSubscriptionTime = 2600,
  k_EMsgGCToGCFlushSteamInventoryCache = 2601,
  k_EMsgGCRequestCrateEscalationLevel = 2602,
  k_EMsgGCRequestCrateEscalationLevelResponse = 2603,
  k_EMsgGCToGCUpdateSubscriptionItems = 2604,
  k_EMsgGCToGCSelfPing = 2605,
  k_EMsgGCToGCGetInfuxIntervalStats = 2606,
  k_EMsgGCToGCGetInfuxIntervalStatsResponse = 2607,
  k_EMsgGCToGCPurchaseSucceeded = 2608,
  k_EMsgClientToGCGetLimitedItemPurchaseQuantity = 2609,
  k_EMsgClientToGCGetLimitedItemPurchaseQuantityResponse = 2610,
  k_EMsgGCToGCBetaDeleteItems = 2611,
}

export enum EGCMsgInitiateTradeResponse {
  k_EGCMsgInitiateTradeResponse_Accepted = 0,
  k_EGCMsgInitiateTradeResponse_Declined = 1,
  k_EGCMsgInitiateTradeResponse_VAC_Banned_Initiator = 2,
  k_EGCMsgInitiateTradeResponse_VAC_Banned_Target = 3,
  k_EGCMsgInitiateTradeResponse_Target_Already_Trading = 4,
  k_EGCMsgInitiateTradeResponse_Disabled = 5,
  k_EGCMsgInitiateTradeResponse_NotLoggedIn = 6,
  k_EGCMsgInitiateTradeResponse_Cancel = 7,
  k_EGCMsgInitiateTradeResponse_TooSoon = 8,
  k_EGCMsgInitiateTradeResponse_TooSoonPenalty = 9,
  k_EGCMsgInitiateTradeResponse_Trade_Banned_Initiator = 10,
  k_EGCMsgInitiateTradeResponse_Trade_Banned_Target = 11,
  k_EGCMsgInitiateTradeResponse_Free_Account_Initiator_DEPRECATED = 12,
  k_EGCMsgInitiateTradeResponse_Shared_Account_Initiator = 13,
  k_EGCMsgInitiateTradeResponse_Service_Unavailable = 14,
  k_EGCMsgInitiateTradeResponse_Target_Blocked = 15,
  k_EGCMsgInitiateTradeResponse_NeedVerifiedEmail = 16,
  k_EGCMsgInitiateTradeResponse_NeedSteamGuard = 17,
  k_EGCMsgInitiateTradeResponse_SteamGuardDuration = 18,
  k_EGCMsgInitiateTradeResponse_TheyCannotTrade = 19,
  k_EGCMsgInitiateTradeResponse_Recent_Password_Reset = 20,
  k_EGCMsgInitiateTradeResponse_Using_New_Device = 21,
  k_EGCMsgInitiateTradeResponse_Sent_Invalid_Cookie = 22,
  k_EGCMsgInitiateTradeResponse_TooRecentFriend = 23,
  k_EGCMsgInitiateTradeResponse_WalledFundsNotTrusted = 24,
}

export interface CMsgApplyAutograph {
  autographItemId: string;
  itemItemId: string;
}

export interface CMsgAdjustItemEquippedState {
  itemId: string;
  newClass: number;
  newSlot: number;
  styleIndex: number;
}

export interface CMsgEconPlayerStrangeCountAdjustment {
  accountId: number;
  strangeCountAdjustments: CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment[];
  turboMode: boolean;
}

export interface CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment {
  eventType: number;
  itemId: string;
  adjustment: number;
}

export interface CMsgCraftingResponse {
  itemIds: string[];
}

export interface CMsgGCRequestStoreSalesData {
  version: number;
  currency: number;
}

export interface CMsgGCRequestStoreSalesDataResponse {
  salePrice: CMsgGCRequestStoreSalesDataResponse_Price[];
  version: number;
  expirationTime: number;
}

export interface CMsgGCRequestStoreSalesDataResponse_Price {
  itemDef: number;
  price: number;
}

export interface CMsgGCRequestStoreSalesDataUpToDateResponse {
  version: number;
  expirationTime: number;
}

export interface CMsgGCToGCPingRequest {
}

export interface CMsgGCToGCPingResponse {
}

export interface CMsgGCToGCGetUserSessionServer {
  accountId: number;
}

export interface CMsgGCToGCGetUserSessionServerResponse {
  serverSteamId: string;
  isOnline: boolean;
}

export interface CMsgGCToGCGetUserServerMembers {
  accountId: number;
  maxSpectators: number;
}

export interface CMsgGCToGCGetUserServerMembersResponse {
  memberAccountId: number[];
}

export interface CMsgLookupMultipleAccountNames {
  accountids: number[];
}

export interface CMsgLookupMultipleAccountNamesResponse {
  accounts: CMsgLookupMultipleAccountNamesResponse_Account[];
}

export interface CMsgLookupMultipleAccountNamesResponse_Account {
  accountid: number;
  persona: string;
}

export interface CMsgRequestCrateItems {
  crateItemDef: number;
}

export interface CMsgRequestCrateItemsResponse {
  response: number;
  itemDefs: number[];
  peekItemDefs: number[];
}

export enum CMsgRequestCrateItemsResponse_EResult {
  k_Succeeded = 0,
  k_Failed = 1,
}

export interface CMsgRequestCrateEscalationLevel {
  crateItemDef: number;
}

export interface CMsgRequestCrateEscalationLevelResponse {
  response: number;
  escalationLevel0: number;
  escalationLevel1: number;
  escalationLevel2: number;
  escalationLevel3: number;
}

export enum CMsgRequestCrateEscalationLevelResponse_EResult {
  k_Succeeded = 0,
  k_Failed = 1,
}

export interface CMsgGCToGCCanUseDropRateBonus {
  accountId: number;
  dropRateBonus: number;
  boosterType: number;
  exclusiveItemDef: number;
  allowEqualRate: boolean;
}

export interface CMsgSQLAddDropRateBonus {
  accountId: number;
  itemId: string;
  itemDef: number;
  dropRateBonus: number;
  boosterType: number;
  secondsDuration: number;
  endTimeStamp: number;
}

export interface CMsgSQLUpgradeBattleBooster {
  accountId: number;
  itemDef: number;
  bonusToAdd: number;
  boosterType: number;
}

export interface CMsgGCToGCRefreshSOCache {
  accountId: number;
  reload: boolean;
}

export interface CMsgGCToGCAddSubscriptionTime {
  accountId: number;
  matchingSubscriptionDefIndexes: number[];
  additionalSeconds: number;
}

export interface CMsgGCToGCGrantAccountRolledItems {
  accountId: number;
  items: CMsgGCToGCGrantAccountRolledItems_Item[];
  auditAction: number;
  auditData: string;
}

export interface CMsgGCToGCGrantAccountRolledItems_Item {
  itemDef: number;
  lootLists: string[];
  ignoreLimit: boolean;
  origin: number;
  dynamicAttributes: CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute[];
  additionalAuditEntries: CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry[];
  inventoryToken: number;
}

export interface CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute {
  name: string;
  valueUint32: number;
  valueFloat: number;
  valueString: string;
}

export interface CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry {
  ownerAccountId: number;
  auditAction: number;
  auditData: string;
}

export interface CMsgGCToGCBetaDeleteItems {
  accountId: number;
  itemIds: string[];
  itemDefs: number[];
}

export interface CMsgGCToGCGrantSelfMadeItemToAccount {
  itemDefIndex: number;
  accountid: number;
}

export interface CMsgUseItem {
  itemId: string;
  targetSteamId: string;
  giftPotentialTargets: number[];
  duelClassLock: number;
  initiatorSteamId: string;
  itempackAckImmediately: boolean;
}

export interface CMsgServerUseItem {
  initiatorAccountId: number;
  useItemMsg: CMsgUseItem | undefined;
}

export interface CMsgUseMultipleItems {
  itemIds: string[];
}

export interface CGCStoreRechargeRedirectLineItem {
  itemDefId: number;
  quantity: number;
}

export interface CMsgGCEconSQLWorkItemEmbeddedRollbackData {
  accountId: number;
  deletedItemId: string;
  oldAuditAction: number;
  newAuditAction: number;
  expectedAuditAction: number;
}

export interface CMsgCraftStatue {
  heroid: number;
  sequencename: string;
  cycle: number;
  description: string;
  pedestalItemdef: number;
  toolid: string;
}

export interface CMsgRedeemCode {
  code: string;
}

export interface CMsgRedeemCodeResponse {
  response: number;
  itemId: string;
}

export enum CMsgRedeemCodeResponse_EResultCode {
  k_Succeeded = 0,
  k_Failed_CodeNotFound = 1,
  k_Failed_CodeAlreadyUsed = 2,
  k_Failed_OtherError = 3,
}

export interface CMsgDevNewItemRequest {
  itemDefName: string;
  lootListName: string;
  attrDefName: string[];
  attrValue: string[];
  itemQuality: number;
}

export interface CMsgDevNewItemRequestResponse {
  success: boolean;
}

export interface CMsgDevUnlockAllItemStyles {
  itemId: string;
}

export interface CMsgDevUnlockAllItemStylesResponse {
  success: boolean;
}

export interface CMsgGCGetAccountSubscriptionItem {
  accountId: number;
}

export interface CMsgGCGetAccountSubscriptionItemResponse {
  defIndex: number;
}

export interface CMsgGCAddGiftItem {
  accountId: number;
  itemId: string;
}

export interface CMsgClientToGCWrapAndDeliverGift {
  itemId: string;
  giveToAccountId: number;
  giftMessage: string;
}

export interface CMsgClientToGCWrapAndDeliverGiftResponse {
  response: EGCMsgResponse;
  giftingChargeUses: number;
  giftingChargeMax: number;
  giftingUses: number;
  giftingMax: number;
  giftingWindowHours: number;
  tradeRestriction: EGCMsgInitiateTradeResponse;
}

export interface CMsgClientToGCUnwrapGift {
  itemId: string;
}

export interface CMsgClientToGCGetGiftPermissions {
}

export interface CMsgClientToGCGetGiftPermissionsResponse {
  isUnlimited: boolean;
  hasTwoFactor: boolean;
  senderPermission: EGCMsgInitiateTradeResponse;
  friendshipAgeRequirement: number;
  friendshipAgeRequirementTwoFactor: number;
  friendPermissions: CMsgClientToGCGetGiftPermissionsResponse_FriendPermission[];
}

export interface CMsgClientToGCGetGiftPermissionsResponse_FriendPermission {
  accountId: number;
  permission: EGCMsgInitiateTradeResponse;
}

export interface CMsgClientToGCUnpackBundle {
  itemId: string;
}

export interface CMsgClientToGCUnpackBundleResponse {
  unpackedItemIds: string[];
  response: CMsgClientToGCUnpackBundleResponse_EUnpackBundle;
  unpackedItemDefIndexes: number[];
}

export enum CMsgClientToGCUnpackBundleResponse_EUnpackBundle {
  k_UnpackBundle_Succeeded = 0,
  k_UnpackBundle_Failed_ItemIsNotBundle = 1,
  k_UnpackBundle_Failed_UnableToCreateContainedItem = 2,
  k_UnpackBundle_Failed_SOCacheError = 3,
  k_UnpackBundle_Failed_ItemIsInvalid = 4,
  k_UnpackBundle_Failed_BadItemQuantity = 5,
  k_UnpackBundle_Failed_UnableToDeleteItem = 6,
}

export interface CMsgGCToClientStoreTransactionCompleted {
  txnId: string;
  itemIds: string[];
}

export interface CMsgClientToGCEquipItems {
  equips: CMsgAdjustItemEquippedState[];
}

export interface CMsgClientToGCEquipItemsResponse {
  soCacheVersionId: string;
}

export interface CMsgClientToGCSetItemStyle {
  itemId: string;
  styleIndex: number;
}

export interface CMsgClientToGCSetItemStyleResponse {
  response: CMsgClientToGCSetItemStyleResponse_ESetStyle;
}

export enum CMsgClientToGCSetItemStyleResponse_ESetStyle {
  k_SetStyle_Succeeded = 0,
  k_SetStyle_Failed = 1,
  k_SetStyle_Failed_StyleIsLocked = 2,
}

export interface CMsgClientToGCUnlockItemStyle {
  itemToUnlock: string;
  styleIndex: number;
  consumableItemIds: string[];
}

export interface CMsgClientToGCUnlockItemStyleResponse {
  response: CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle;
  itemId: string;
  styleIndex: number;
  stylePrereq: number;
}

export enum CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle {
  k_UnlockStyle_Succeeded = 0,
  k_UnlockStyle_Failed_PreReq = 1,
  k_UnlockStyle_Failed_CantAfford = 2,
  k_UnlockStyle_Failed_CantCommit = 3,
  k_UnlockStyle_Failed_CantLockCache = 4,
  k_UnlockStyle_Failed_CantAffordAttrib = 5,
  k_UnlockStyle_Failed_CantAffordGem = 6,
  k_UnlockStyle_Failed_NoCompendiumLevel = 7,
  k_UnlockStyle_Failed_AlreadyUnlocked = 8,
  k_UnlockStyle_Failed_OtherError = 9,
  k_UnlockStyle_Failed_ItemIsInvalid = 10,
  k_UnlockStyle_Failed_ToolIsInvalid = 11,
}

export interface CMsgClientToGCSetItemInventoryCategory {
  itemIds: string[];
  setToValue: number;
  removeCategories: number;
  addCategories: number;
}

export interface CMsgClientToGCUnlockCrate {
  crateItemId: string;
  keyItemId: string;
}

export interface CMsgClientToGCUnlockCrateResponse {
  result: EGCMsgResponse;
  grantedItems: CMsgClientToGCUnlockCrateResponse_Item[];
}

export interface CMsgClientToGCUnlockCrateResponse_Item {
  itemId: string;
  defIndex: number;
}

export interface CMsgClientToGCRemoveItemAttribute {
  itemId: string;
}

export interface CMsgClientToGCRemoveItemAttributeResponse {
  response: CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute;
  itemId: string;
}

export enum CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute {
  k_RemoveItemAttribute_Succeeded = 0,
  k_RemoveItemAttribute_Failed = 1,
  k_RemoveItemAttribute_Failed_ItemIsInvalid = 2,
  k_RemoveItemAttribute_Failed_AttributeCannotBeRemoved = 3,
  k_RemoveItemAttribute_Failed_AttributeDoesntExist = 4,
}

export interface CMsgClientToGCNameItem {
  subjectItemId: string;
  toolItemId: string;
  name: string;
}

export interface CMsgClientToGCNameItemResponse {
  response: CMsgClientToGCNameItemResponse_ENameItem;
  itemId: string;
}

export enum CMsgClientToGCNameItemResponse_ENameItem {
  k_NameItem_Succeeded = 0,
  k_NameItem_Failed = 1,
  k_NameItem_Failed_ToolIsInvalid = 2,
  k_NameItem_Failed_ItemIsInvalid = 3,
  k_NameItem_Failed_NameIsInvalid = 4,
}

export interface CMsgGCSetItemPosition {
  itemId: string;
  newPosition: number;
}

export interface CAttributeItemDynamicRecipeComponent {
  itemDef: number;
  itemQuality: number;
  itemFlags: number;
  attributesString: string;
  itemCount: number;
  itemsFulfilled: number;
  itemRarity: number;
  lootlist: string;
  fulfilledItemId: string;
  associatedItemDef: number;
}

export interface CProtoItemSocket {
  itemId: string;
  attrDefIndex: number;
  requiredType: number;
  requiredHero: string;
  gemDefIndex: number;
  notTradable: boolean;
  requiredItemSlot: string;
}

export interface CProtoItemSocketEmpty {
  socket: CProtoItemSocket | undefined;
}

export interface CProtoItemSocketEffect {
  socket: CProtoItemSocket | undefined;
  effect: number;
}

export interface CProtoItemSocketColor {
  socket: CProtoItemSocket | undefined;
  red: number;
  green: number;
  blue: number;
}

export interface CProtoItemSocketStrange {
  socket: CProtoItemSocket | undefined;
  strangeType: number;
  strangeValue: number;
}

export interface CProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY {
  socket: CProtoItemSocket | undefined;
  strangeType: number;
  strangeValue: number;
  abilityEffect: number;
}

export interface CProtoItemSocketSpectator {
  socket: CProtoItemSocket | undefined;
  gamesViewed: number;
  corporationId: number;
  leagueId: number;
  teamId: number;
}

export interface CProtoItemSocketAssetModifier {
  socket: CProtoItemSocket | undefined;
  assetModifier: number;
}

export interface CProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY {
  socket: CProtoItemSocket | undefined;
  assetModifier: number;
  animModifier: number;
  abilityEffect: number;
}

export interface CProtoItemSocketAutograph {
  socket: CProtoItemSocket | undefined;
  autograph: string;
  autographId: number;
  autographScore: number;
}

export interface CProtoItemSocketStaticVisuals {
  socket: CProtoItemSocket | undefined;
}

export interface CAttributeString {
  value: string;
}

export interface CWorkshopGetItemDailyRevenueRequest {
  appid: number;
  itemId: number;
  dateStart: number;
  dateEnd: number;
}

export interface CWorkshopGetItemDailyRevenueResponse {
  countryRevenue: CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue[];
}

export interface CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue {
  countryCode: string;
  date: number;
  revenueUsd: string;
  units: number;
}

export interface CWorkshopGetPackageDailyRevenueRequest {
  packageid: number;
  dateStart: number;
  dateEnd: number;
}

export interface CWorkshopGetPackageDailyRevenueResponse {
  countryRevenue: CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue[];
}

export interface CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue {
  countryCode: string;
  date: number;
  revenueUsd: string;
  units: number;
}

export interface CMsgSQLGCToGCGrantBackpackSlots {
  accountId: number;
  addSlots: number;
}

export interface CMsgClientToGCLookupAccountName {
  accountId: number;
}

export interface CMsgClientToGCLookupAccountNameResponse {
  accountId: number;
  accountName: string;
}

export interface CMsgClientToGCCreateStaticRecipe {
  items: CMsgClientToGCCreateStaticRecipe_Item[];
  recipeDefIndex: number;
}

export interface CMsgClientToGCCreateStaticRecipe_Item {
  itemId: string;
  slotId: number;
}

export interface CMsgClientToGCCreateStaticRecipeResponse {
  response: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
  outputItems: CMsgClientToGCCreateStaticRecipeResponse_OutputItem[];
  inputErrors: CMsgClientToGCCreateStaticRecipeResponse_InputError[];
  additionalOutputs: CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput[];
}

export enum CMsgClientToGCCreateStaticRecipeResponse_EResponse {
  eResponse_Success = 0,
  eResponse_OfferingDisabled = 1,
  eResponse_InvalidItems = 2,
  eResponse_InternalError = 3,
  eResponse_MissingLeague = 4,
  eResponse_MissingEvent = 5,
}

export interface CMsgClientToGCCreateStaticRecipeResponse_OutputItem {
  defIndex: number;
  itemId: string;
  slotId: number;
}

export interface CMsgClientToGCCreateStaticRecipeResponse_InputError {
  slotId: number;
  error: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
}

export interface CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput {
  slotId: number;
  value: string;
}

export interface CMsgProcessTransactionOrder {
  txnId: string;
  steamTxnId: string;
  partnerTxnId: string;
  steamId: string;
  timeStamp: number;
  watermark: string;
  purchaseReportStatus: number;
  currency: number;
  items: CMsgProcessTransactionOrder_Item[];
}

export interface CMsgProcessTransactionOrder_Item {
  itemDefIndex: number;
  itemPrice: number;
  quantity: number;
  categoryDesc: string;
  storePurchaseType: number;
  sourceReferenceId: string;
  parentStackIndex: number;
  defaultPrice: boolean;
  isUserFacing: boolean;
}

export interface CMsgGCToGCStoreProcessCDKeyTransaction {
  order: CMsgProcessTransactionOrder | undefined;
  reasonCode: number;
  partner: number;
}

export interface CMsgGCToGCStoreProcessCDKeyTransactionResponse {
  success: boolean;
}

export interface CMsgGCToGCStoreProcessSettlement {
  order: CMsgProcessTransactionOrder | undefined;
}

export interface CMsgGCToGCStoreProcessSettlementResponse {
  success: boolean;
}

export interface CMsgGCToGCBroadcastConsoleCommand {
  conCommand: string;
  reportOutput: boolean;
  sendingGc: number;
  outputInitiator: string;
}

export interface CMsgGCToGCConsoleOutput {
  initiator: string;
  sendingGc: number;
  msgs: CMsgGCToGCConsoleOutput_OutputLine[];
  isLastForSourceJob: boolean;
}

export interface CMsgGCToGCConsoleOutput_OutputLine {
  text: string;
  spewLevel: number;
}

export interface CMsgItemAges {
  maxItemIdTimestamps: CMsgItemAges_MaxItemIDTimestamp[];
}

export interface CMsgItemAges_MaxItemIDTimestamp {
  timestamp: number;
  maxItemId: string;
}

export interface CMsgGCToGCInternalTestMsg {
  sendingGc: number;
  senderId: string;
  context: number;
  messageId: number;
  messageBody: Buffer;
  jobIdSource: string;
  jobIdTarget: string;
}

export interface CMsgGCToGCClientServerVersionsUpdated {
  clientMinAllowedVersion: number;
  clientActiveVersion: number;
  serverActiveVersion: number;
  serverDeployedVersion: number;
  whatChanged: number;
}

export interface CMsgGCToGCBroadcastMessageFromSub {
  msgId: number;
  serializedMsg: Buffer;
  accountIdList: number[];
  steamIdList: string[];
}

export interface CMsgGCToClientCurrencyPricePoints {
  priceKey: string[];
  currencies: CMsgGCToClientCurrencyPricePoints_Currency[];
}

export interface CMsgGCToClientCurrencyPricePoints_Currency {
  currencyId: number;
  currencyPrice: string[];
}

export interface CMsgBannedWordList {
  version: number;
  bannedWords: string[];
}

export interface CMsgGCToGCFlushSteamInventoryCache {
  keys: CMsgGCToGCFlushSteamInventoryCache_Key[];
}

export interface CMsgGCToGCFlushSteamInventoryCache_Key {
  steamid: string;
  contextid: string;
}

export interface CMsgGCToGCUpdateSubscriptionItems {
  accountId: number;
  alwaysNotify: boolean;
}

export interface CMsgGCToGCSelfPing {
  sampleId: number;
}

export interface CMsgGCToGCGetInfuxIntervalStats {
}

export interface CMsgGCToGCGetInfuxIntervalStatsResponse {
  statIds: number[];
  statTotal: string[];
  statSamples: number[];
  statMax: number[];
  sampleDurationMs: number;
}

export interface CMsgGCToGCPurchaseSucceeded {
}

export interface CMsgClientToGCGetLimitedItemPurchaseQuantity {
  itemDef: number;
}

export interface CMsgClientToGCGetLimitedItemPurchaseQuantityResponse {
  result: CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse;
  quantityPurchased: number;
}

export enum CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidItemDef = 5,
  k_eItemDefNotLimited = 6,
}

export interface CMsgGCToGCUpdateWelcomeMsg {
  server: boolean;
  newMsg: CExtraMsgBlock | undefined;
  broadcast: boolean;
}

function createBaseCMsgApplyAutograph(): CMsgApplyAutograph {
  return { autographItemId: "0", itemItemId: "0" };
}

export const CMsgApplyAutograph = {
  encode(message: CMsgApplyAutograph, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.autographItemId !== "0") {
      writer.uint32(8).uint64(message.autographItemId);
    }
    if (message.itemItemId !== "0") {
      writer.uint32(16).uint64(message.itemItemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgApplyAutograph {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgApplyAutograph();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.autographItemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.itemItemId = longToString(reader.uint64() as Long);
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

function createBaseCMsgAdjustItemEquippedState(): CMsgAdjustItemEquippedState {
  return { itemId: "0", newClass: 0, newSlot: 0, styleIndex: 0 };
}

export const CMsgAdjustItemEquippedState = {
  encode(message: CMsgAdjustItemEquippedState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "0") {
      writer.uint32(8).uint64(message.itemId);
    }
    if (message.newClass !== 0) {
      writer.uint32(16).uint32(message.newClass);
    }
    if (message.newSlot !== 0) {
      writer.uint32(24).uint32(message.newSlot);
    }
    if (message.styleIndex !== 0) {
      writer.uint32(32).uint32(message.styleIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAdjustItemEquippedState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAdjustItemEquippedState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.newClass = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.newSlot = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.styleIndex = reader.uint32();
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

function createBaseCMsgEconPlayerStrangeCountAdjustment(): CMsgEconPlayerStrangeCountAdjustment {
  return { accountId: 0, strangeCountAdjustments: [], turboMode: false };
}

export const CMsgEconPlayerStrangeCountAdjustment = {
  encode(message: CMsgEconPlayerStrangeCountAdjustment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    for (const v of message.strangeCountAdjustments) {
      CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.turboMode === true) {
      writer.uint32(24).bool(message.turboMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgEconPlayerStrangeCountAdjustment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgEconPlayerStrangeCountAdjustment();
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

          message.strangeCountAdjustments.push(
            CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.turboMode = reader.bool();
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

function createBaseCMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment(): CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment {
  return { eventType: 0, itemId: "0", adjustment: 0 };
}

export const CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment = {
  encode(
    message: CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.eventType !== 0) {
      writer.uint32(8).uint32(message.eventType);
    }
    if (message.itemId !== "0") {
      writer.uint32(16).uint64(message.itemId);
    }
    if (message.adjustment !== 0) {
      writer.uint32(24).uint32(message.adjustment);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventType = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.adjustment = reader.uint32();
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

function createBaseCMsgCraftingResponse(): CMsgCraftingResponse {
  return { itemIds: [] };
}

export const CMsgCraftingResponse = {
  encode(message: CMsgCraftingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.itemIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCraftingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCraftingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.itemIds.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.itemIds.push(longToString(reader.uint64() as Long));
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

function createBaseCMsgGCRequestStoreSalesData(): CMsgGCRequestStoreSalesData {
  return { version: 0, currency: 0 };
}

export const CMsgGCRequestStoreSalesData = {
  encode(message: CMsgGCRequestStoreSalesData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    if (message.currency !== 0) {
      writer.uint32(16).uint32(message.currency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCRequestStoreSalesData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCRequestStoreSalesData();
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

          message.currency = reader.uint32();
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

function createBaseCMsgGCRequestStoreSalesDataResponse(): CMsgGCRequestStoreSalesDataResponse {
  return { salePrice: [], version: 0, expirationTime: 0 };
}

export const CMsgGCRequestStoreSalesDataResponse = {
  encode(message: CMsgGCRequestStoreSalesDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.salePrice) {
      CMsgGCRequestStoreSalesDataResponse_Price.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.version !== 0) {
      writer.uint32(16).uint32(message.version);
    }
    if (message.expirationTime !== 0) {
      writer.uint32(24).uint32(message.expirationTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCRequestStoreSalesDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCRequestStoreSalesDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.salePrice.push(CMsgGCRequestStoreSalesDataResponse_Price.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.version = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.expirationTime = reader.uint32();
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

function createBaseCMsgGCRequestStoreSalesDataResponse_Price(): CMsgGCRequestStoreSalesDataResponse_Price {
  return { itemDef: 0, price: 0 };
}

export const CMsgGCRequestStoreSalesDataResponse_Price = {
  encode(message: CMsgGCRequestStoreSalesDataResponse_Price, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemDef !== 0) {
      writer.uint32(8).uint32(message.itemDef);
    }
    if (message.price !== 0) {
      writer.uint32(16).uint32(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCRequestStoreSalesDataResponse_Price {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCRequestStoreSalesDataResponse_Price();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemDef = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.price = reader.uint32();
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

function createBaseCMsgGCRequestStoreSalesDataUpToDateResponse(): CMsgGCRequestStoreSalesDataUpToDateResponse {
  return { version: 0, expirationTime: 0 };
}

export const CMsgGCRequestStoreSalesDataUpToDateResponse = {
  encode(message: CMsgGCRequestStoreSalesDataUpToDateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    if (message.expirationTime !== 0) {
      writer.uint32(16).uint32(message.expirationTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCRequestStoreSalesDataUpToDateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCRequestStoreSalesDataUpToDateResponse();
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

          message.expirationTime = reader.uint32();
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

function createBaseCMsgGCToGCPingRequest(): CMsgGCToGCPingRequest {
  return {};
}

export const CMsgGCToGCPingRequest = {
  encode(_: CMsgGCToGCPingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCPingRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCPingRequest();
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

function createBaseCMsgGCToGCPingResponse(): CMsgGCToGCPingResponse {
  return {};
}

export const CMsgGCToGCPingResponse = {
  encode(_: CMsgGCToGCPingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCPingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCPingResponse();
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

function createBaseCMsgGCToGCGetUserSessionServer(): CMsgGCToGCGetUserSessionServer {
  return { accountId: 0 };
}

export const CMsgGCToGCGetUserSessionServer = {
  encode(message: CMsgGCToGCGetUserSessionServer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCGetUserSessionServer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCGetUserSessionServer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountId = reader.uint32();
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

function createBaseCMsgGCToGCGetUserSessionServerResponse(): CMsgGCToGCGetUserSessionServerResponse {
  return { serverSteamId: "0", isOnline: false };
}

export const CMsgGCToGCGetUserSessionServerResponse = {
  encode(message: CMsgGCToGCGetUserSessionServerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverSteamId !== "0") {
      writer.uint32(9).fixed64(message.serverSteamId);
    }
    if (message.isOnline === true) {
      writer.uint32(16).bool(message.isOnline);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCGetUserSessionServerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCGetUserSessionServerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.serverSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.isOnline = reader.bool();
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

function createBaseCMsgGCToGCGetUserServerMembers(): CMsgGCToGCGetUserServerMembers {
  return { accountId: 0, maxSpectators: 0 };
}

export const CMsgGCToGCGetUserServerMembers = {
  encode(message: CMsgGCToGCGetUserServerMembers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.maxSpectators !== 0) {
      writer.uint32(16).uint32(message.maxSpectators);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCGetUserServerMembers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCGetUserServerMembers();
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
          if (tag != 16) {
            break;
          }

          message.maxSpectators = reader.uint32();
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

function createBaseCMsgGCToGCGetUserServerMembersResponse(): CMsgGCToGCGetUserServerMembersResponse {
  return { memberAccountId: [] };
}

export const CMsgGCToGCGetUserServerMembersResponse = {
  encode(message: CMsgGCToGCGetUserServerMembersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.memberAccountId) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCGetUserServerMembersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCGetUserServerMembersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.memberAccountId.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.memberAccountId.push(reader.uint32());
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

function createBaseCMsgLookupMultipleAccountNames(): CMsgLookupMultipleAccountNames {
  return { accountids: [] };
}

export const CMsgLookupMultipleAccountNames = {
  encode(message: CMsgLookupMultipleAccountNames, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.accountids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLookupMultipleAccountNames {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLookupMultipleAccountNames();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.accountids.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountids.push(reader.uint32());
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

function createBaseCMsgLookupMultipleAccountNamesResponse(): CMsgLookupMultipleAccountNamesResponse {
  return { accounts: [] };
}

export const CMsgLookupMultipleAccountNamesResponse = {
  encode(message: CMsgLookupMultipleAccountNamesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      CMsgLookupMultipleAccountNamesResponse_Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLookupMultipleAccountNamesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLookupMultipleAccountNamesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.accounts.push(CMsgLookupMultipleAccountNamesResponse_Account.decode(reader, reader.uint32()));
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

function createBaseCMsgLookupMultipleAccountNamesResponse_Account(): CMsgLookupMultipleAccountNamesResponse_Account {
  return { accountid: 0, persona: "" };
}

export const CMsgLookupMultipleAccountNamesResponse_Account = {
  encode(
    message: CMsgLookupMultipleAccountNamesResponse_Account,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (message.persona !== "") {
      writer.uint32(18).string(message.persona);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLookupMultipleAccountNamesResponse_Account {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLookupMultipleAccountNamesResponse_Account();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountid = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.persona = reader.string();
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

function createBaseCMsgRequestCrateItems(): CMsgRequestCrateItems {
  return { crateItemDef: 0 };
}

export const CMsgRequestCrateItems = {
  encode(message: CMsgRequestCrateItems, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.crateItemDef !== 0) {
      writer.uint32(8).uint32(message.crateItemDef);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRequestCrateItems {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRequestCrateItems();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.crateItemDef = reader.uint32();
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

function createBaseCMsgRequestCrateItemsResponse(): CMsgRequestCrateItemsResponse {
  return { response: 0, itemDefs: [], peekItemDefs: [] };
}

export const CMsgRequestCrateItemsResponse = {
  encode(message: CMsgRequestCrateItemsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).uint32(message.response);
    }
    writer.uint32(18).fork();
    for (const v of message.itemDefs) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.peekItemDefs) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRequestCrateItemsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRequestCrateItemsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.uint32();
          continue;
        case 2:
          if (tag == 16) {
            message.itemDefs.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.itemDefs.push(reader.uint32());
            }

            continue;
          }

          break;
        case 3:
          if (tag == 24) {
            message.peekItemDefs.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.peekItemDefs.push(reader.uint32());
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

function createBaseCMsgRequestCrateEscalationLevel(): CMsgRequestCrateEscalationLevel {
  return { crateItemDef: 0 };
}

export const CMsgRequestCrateEscalationLevel = {
  encode(message: CMsgRequestCrateEscalationLevel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.crateItemDef !== 0) {
      writer.uint32(8).uint32(message.crateItemDef);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRequestCrateEscalationLevel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRequestCrateEscalationLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.crateItemDef = reader.uint32();
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

function createBaseCMsgRequestCrateEscalationLevelResponse(): CMsgRequestCrateEscalationLevelResponse {
  return { response: 0, escalationLevel0: 0, escalationLevel1: 0, escalationLevel2: 0, escalationLevel3: 0 };
}

export const CMsgRequestCrateEscalationLevelResponse = {
  encode(message: CMsgRequestCrateEscalationLevelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).uint32(message.response);
    }
    if (message.escalationLevel0 !== 0) {
      writer.uint32(16).uint32(message.escalationLevel0);
    }
    if (message.escalationLevel1 !== 0) {
      writer.uint32(24).uint32(message.escalationLevel1);
    }
    if (message.escalationLevel2 !== 0) {
      writer.uint32(32).uint32(message.escalationLevel2);
    }
    if (message.escalationLevel3 !== 0) {
      writer.uint32(40).uint32(message.escalationLevel3);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRequestCrateEscalationLevelResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRequestCrateEscalationLevelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.escalationLevel0 = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.escalationLevel1 = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.escalationLevel2 = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.escalationLevel3 = reader.uint32();
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

function createBaseCMsgGCToGCCanUseDropRateBonus(): CMsgGCToGCCanUseDropRateBonus {
  return { accountId: 0, dropRateBonus: 0, boosterType: 0, exclusiveItemDef: 0, allowEqualRate: false };
}

export const CMsgGCToGCCanUseDropRateBonus = {
  encode(message: CMsgGCToGCCanUseDropRateBonus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.dropRateBonus !== 0) {
      writer.uint32(21).float(message.dropRateBonus);
    }
    if (message.boosterType !== 0) {
      writer.uint32(24).uint32(message.boosterType);
    }
    if (message.exclusiveItemDef !== 0) {
      writer.uint32(32).uint32(message.exclusiveItemDef);
    }
    if (message.allowEqualRate === true) {
      writer.uint32(40).bool(message.allowEqualRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCCanUseDropRateBonus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCCanUseDropRateBonus();
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

          message.dropRateBonus = reader.float();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.boosterType = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.exclusiveItemDef = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.allowEqualRate = reader.bool();
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

function createBaseCMsgSQLAddDropRateBonus(): CMsgSQLAddDropRateBonus {
  return {
    accountId: 0,
    itemId: "0",
    itemDef: 0,
    dropRateBonus: 0,
    boosterType: 0,
    secondsDuration: 0,
    endTimeStamp: 0,
  };
}

export const CMsgSQLAddDropRateBonus = {
  encode(message: CMsgSQLAddDropRateBonus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.itemId !== "0") {
      writer.uint32(16).uint64(message.itemId);
    }
    if (message.itemDef !== 0) {
      writer.uint32(24).uint32(message.itemDef);
    }
    if (message.dropRateBonus !== 0) {
      writer.uint32(37).float(message.dropRateBonus);
    }
    if (message.boosterType !== 0) {
      writer.uint32(40).uint32(message.boosterType);
    }
    if (message.secondsDuration !== 0) {
      writer.uint32(48).uint32(message.secondsDuration);
    }
    if (message.endTimeStamp !== 0) {
      writer.uint32(56).uint32(message.endTimeStamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSQLAddDropRateBonus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSQLAddDropRateBonus();
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
          if (tag != 16) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.itemDef = reader.uint32();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.dropRateBonus = reader.float();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.boosterType = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.secondsDuration = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.endTimeStamp = reader.uint32();
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

function createBaseCMsgSQLUpgradeBattleBooster(): CMsgSQLUpgradeBattleBooster {
  return { accountId: 0, itemDef: 0, bonusToAdd: 0, boosterType: 0 };
}

export const CMsgSQLUpgradeBattleBooster = {
  encode(message: CMsgSQLUpgradeBattleBooster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.itemDef !== 0) {
      writer.uint32(16).uint32(message.itemDef);
    }
    if (message.bonusToAdd !== 0) {
      writer.uint32(29).float(message.bonusToAdd);
    }
    if (message.boosterType !== 0) {
      writer.uint32(32).uint32(message.boosterType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSQLUpgradeBattleBooster {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSQLUpgradeBattleBooster();
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
          if (tag != 16) {
            break;
          }

          message.itemDef = reader.uint32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.bonusToAdd = reader.float();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.boosterType = reader.uint32();
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

function createBaseCMsgGCToGCRefreshSOCache(): CMsgGCToGCRefreshSOCache {
  return { accountId: 0, reload: false };
}

export const CMsgGCToGCRefreshSOCache = {
  encode(message: CMsgGCToGCRefreshSOCache, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.reload === true) {
      writer.uint32(16).bool(message.reload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCRefreshSOCache {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCRefreshSOCache();
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
          if (tag != 16) {
            break;
          }

          message.reload = reader.bool();
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

function createBaseCMsgGCToGCAddSubscriptionTime(): CMsgGCToGCAddSubscriptionTime {
  return { accountId: 0, matchingSubscriptionDefIndexes: [], additionalSeconds: 0 };
}

export const CMsgGCToGCAddSubscriptionTime = {
  encode(message: CMsgGCToGCAddSubscriptionTime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    writer.uint32(18).fork();
    for (const v of message.matchingSubscriptionDefIndexes) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.additionalSeconds !== 0) {
      writer.uint32(24).uint32(message.additionalSeconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCAddSubscriptionTime {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCAddSubscriptionTime();
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
          if (tag == 16) {
            message.matchingSubscriptionDefIndexes.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.matchingSubscriptionDefIndexes.push(reader.uint32());
            }

            continue;
          }

          break;
        case 3:
          if (tag != 24) {
            break;
          }

          message.additionalSeconds = reader.uint32();
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

function createBaseCMsgGCToGCGrantAccountRolledItems(): CMsgGCToGCGrantAccountRolledItems {
  return { accountId: 0, items: [], auditAction: 0, auditData: "0" };
}

export const CMsgGCToGCGrantAccountRolledItems = {
  encode(message: CMsgGCToGCGrantAccountRolledItems, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    for (const v of message.items) {
      CMsgGCToGCGrantAccountRolledItems_Item.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.auditAction !== 0) {
      writer.uint32(24).uint32(message.auditAction);
    }
    if (message.auditData !== "0") {
      writer.uint32(32).uint64(message.auditData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCGrantAccountRolledItems {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCGrantAccountRolledItems();
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

          message.items.push(CMsgGCToGCGrantAccountRolledItems_Item.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.auditAction = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.auditData = longToString(reader.uint64() as Long);
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

function createBaseCMsgGCToGCGrantAccountRolledItems_Item(): CMsgGCToGCGrantAccountRolledItems_Item {
  return {
    itemDef: 0,
    lootLists: [],
    ignoreLimit: false,
    origin: 0,
    dynamicAttributes: [],
    additionalAuditEntries: [],
    inventoryToken: 0,
  };
}

export const CMsgGCToGCGrantAccountRolledItems_Item = {
  encode(message: CMsgGCToGCGrantAccountRolledItems_Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemDef !== 0) {
      writer.uint32(8).uint32(message.itemDef);
    }
    for (const v of message.lootLists) {
      writer.uint32(18).string(v!);
    }
    if (message.ignoreLimit === true) {
      writer.uint32(24).bool(message.ignoreLimit);
    }
    if (message.origin !== 0) {
      writer.uint32(32).uint32(message.origin);
    }
    for (const v of message.dynamicAttributes) {
      CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.additionalAuditEntries) {
      CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.inventoryToken !== 0) {
      writer.uint32(56).uint32(message.inventoryToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCGrantAccountRolledItems_Item {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCGrantAccountRolledItems_Item();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemDef = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.lootLists.push(reader.string());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.ignoreLimit = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.origin = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.dynamicAttributes.push(
            CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute.decode(reader, reader.uint32()),
          );
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.additionalAuditEntries.push(
            CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry.decode(reader, reader.uint32()),
          );
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.inventoryToken = reader.uint32();
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

function createBaseCMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute(): CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute {
  return { name: "", valueUint32: 0, valueFloat: 0, valueString: "" };
}

export const CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute = {
  encode(
    message: CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.valueUint32 !== 0) {
      writer.uint32(16).uint32(message.valueUint32);
    }
    if (message.valueFloat !== 0) {
      writer.uint32(29).float(message.valueFloat);
    }
    if (message.valueString !== "") {
      writer.uint32(34).string(message.valueString);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute();
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
          if (tag != 16) {
            break;
          }

          message.valueUint32 = reader.uint32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.valueFloat = reader.float();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.valueString = reader.string();
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

function createBaseCMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry(): CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry {
  return { ownerAccountId: 0, auditAction: 0, auditData: "0" };
}

export const CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry = {
  encode(
    message: CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.ownerAccountId !== 0) {
      writer.uint32(8).uint32(message.ownerAccountId);
    }
    if (message.auditAction !== 0) {
      writer.uint32(16).uint32(message.auditAction);
    }
    if (message.auditData !== "0") {
      writer.uint32(24).uint64(message.auditData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ownerAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.auditAction = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.auditData = longToString(reader.uint64() as Long);
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

function createBaseCMsgGCToGCBetaDeleteItems(): CMsgGCToGCBetaDeleteItems {
  return { accountId: 0, itemIds: [], itemDefs: [] };
}

export const CMsgGCToGCBetaDeleteItems = {
  encode(message: CMsgGCToGCBetaDeleteItems, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    writer.uint32(18).fork();
    for (const v of message.itemIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.itemDefs) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCBetaDeleteItems {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCBetaDeleteItems();
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
          if (tag == 16) {
            message.itemIds.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.itemIds.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 3:
          if (tag == 24) {
            message.itemDefs.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.itemDefs.push(reader.uint32());
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

function createBaseCMsgGCToGCGrantSelfMadeItemToAccount(): CMsgGCToGCGrantSelfMadeItemToAccount {
  return { itemDefIndex: 0, accountid: 0 };
}

export const CMsgGCToGCGrantSelfMadeItemToAccount = {
  encode(message: CMsgGCToGCGrantSelfMadeItemToAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemDefIndex !== 0) {
      writer.uint32(8).uint32(message.itemDefIndex);
    }
    if (message.accountid !== 0) {
      writer.uint32(16).uint32(message.accountid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCGrantSelfMadeItemToAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCGrantSelfMadeItemToAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemDefIndex = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.accountid = reader.uint32();
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

function createBaseCMsgUseItem(): CMsgUseItem {
  return {
    itemId: "0",
    targetSteamId: "0",
    giftPotentialTargets: [],
    duelClassLock: 0,
    initiatorSteamId: "0",
    itempackAckImmediately: false,
  };
}

export const CMsgUseItem = {
  encode(message: CMsgUseItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "0") {
      writer.uint32(8).uint64(message.itemId);
    }
    if (message.targetSteamId !== "0") {
      writer.uint32(17).fixed64(message.targetSteamId);
    }
    writer.uint32(26).fork();
    for (const v of message.giftPotentialTargets) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.duelClassLock !== 0) {
      writer.uint32(32).uint32(message.duelClassLock);
    }
    if (message.initiatorSteamId !== "0") {
      writer.uint32(40).uint64(message.initiatorSteamId);
    }
    if (message.itempackAckImmediately === true) {
      writer.uint32(48).bool(message.itempackAckImmediately);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgUseItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgUseItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.targetSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag == 24) {
            message.giftPotentialTargets.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.giftPotentialTargets.push(reader.uint32());
            }

            continue;
          }

          break;
        case 4:
          if (tag != 32) {
            break;
          }

          message.duelClassLock = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.initiatorSteamId = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.itempackAckImmediately = reader.bool();
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

function createBaseCMsgServerUseItem(): CMsgServerUseItem {
  return { initiatorAccountId: 0, useItemMsg: undefined };
}

export const CMsgServerUseItem = {
  encode(message: CMsgServerUseItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initiatorAccountId !== 0) {
      writer.uint32(8).uint32(message.initiatorAccountId);
    }
    if (message.useItemMsg !== undefined) {
      CMsgUseItem.encode(message.useItemMsg, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerUseItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerUseItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.initiatorAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.useItemMsg = CMsgUseItem.decode(reader, reader.uint32());
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

function createBaseCMsgUseMultipleItems(): CMsgUseMultipleItems {
  return { itemIds: [] };
}

export const CMsgUseMultipleItems = {
  encode(message: CMsgUseMultipleItems, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.itemIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgUseMultipleItems {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgUseMultipleItems();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.itemIds.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.itemIds.push(longToString(reader.uint64() as Long));
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

function createBaseCGCStoreRechargeRedirectLineItem(): CGCStoreRechargeRedirectLineItem {
  return { itemDefId: 0, quantity: 0 };
}

export const CGCStoreRechargeRedirectLineItem = {
  encode(message: CGCStoreRechargeRedirectLineItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemDefId !== 0) {
      writer.uint32(8).uint32(message.itemDefId);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).uint32(message.quantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCStoreRechargeRedirectLineItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCStoreRechargeRedirectLineItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemDefId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.quantity = reader.uint32();
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

function createBaseCMsgGCEconSQLWorkItemEmbeddedRollbackData(): CMsgGCEconSQLWorkItemEmbeddedRollbackData {
  return { accountId: 0, deletedItemId: "0", oldAuditAction: 0, newAuditAction: 0, expectedAuditAction: 0 };
}

export const CMsgGCEconSQLWorkItemEmbeddedRollbackData = {
  encode(message: CMsgGCEconSQLWorkItemEmbeddedRollbackData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.deletedItemId !== "0") {
      writer.uint32(16).uint64(message.deletedItemId);
    }
    if (message.oldAuditAction !== 0) {
      writer.uint32(24).uint32(message.oldAuditAction);
    }
    if (message.newAuditAction !== 0) {
      writer.uint32(32).uint32(message.newAuditAction);
    }
    if (message.expectedAuditAction !== 0) {
      writer.uint32(40).uint32(message.expectedAuditAction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCEconSQLWorkItemEmbeddedRollbackData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCEconSQLWorkItemEmbeddedRollbackData();
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
          if (tag != 16) {
            break;
          }

          message.deletedItemId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.oldAuditAction = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.newAuditAction = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.expectedAuditAction = reader.uint32();
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

function createBaseCMsgCraftStatue(): CMsgCraftStatue {
  return { heroid: 0, sequencename: "", cycle: 0, description: "", pedestalItemdef: 0, toolid: "0" };
}

export const CMsgCraftStatue = {
  encode(message: CMsgCraftStatue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroid !== 0) {
      writer.uint32(8).uint32(message.heroid);
    }
    if (message.sequencename !== "") {
      writer.uint32(18).string(message.sequencename);
    }
    if (message.cycle !== 0) {
      writer.uint32(29).float(message.cycle);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.pedestalItemdef !== 0) {
      writer.uint32(40).uint32(message.pedestalItemdef);
    }
    if (message.toolid !== "0") {
      writer.uint32(48).uint64(message.toolid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCraftStatue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCraftStatue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.heroid = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.sequencename = reader.string();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.cycle = reader.float();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.pedestalItemdef = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.toolid = longToString(reader.uint64() as Long);
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

function createBaseCMsgRedeemCode(): CMsgRedeemCode {
  return { code: "" };
}

export const CMsgRedeemCode = {
  encode(message: CMsgRedeemCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRedeemCode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRedeemCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.code = reader.string();
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

function createBaseCMsgRedeemCodeResponse(): CMsgRedeemCodeResponse {
  return { response: 0, itemId: "0" };
}

export const CMsgRedeemCodeResponse = {
  encode(message: CMsgRedeemCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).uint32(message.response);
    }
    if (message.itemId !== "0") {
      writer.uint32(16).uint64(message.itemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRedeemCodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRedeemCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
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

function createBaseCMsgDevNewItemRequest(): CMsgDevNewItemRequest {
  return { itemDefName: "", lootListName: "", attrDefName: [], attrValue: [], itemQuality: 0 };
}

export const CMsgDevNewItemRequest = {
  encode(message: CMsgDevNewItemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemDefName !== "") {
      writer.uint32(26).string(message.itemDefName);
    }
    if (message.lootListName !== "") {
      writer.uint32(34).string(message.lootListName);
    }
    for (const v of message.attrDefName) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.attrValue) {
      writer.uint32(50).string(v!);
    }
    if (message.itemQuality !== 0) {
      writer.uint32(56).uint32(message.itemQuality);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDevNewItemRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDevNewItemRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag != 26) {
            break;
          }

          message.itemDefName = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.lootListName = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.attrDefName.push(reader.string());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.attrValue.push(reader.string());
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.itemQuality = reader.uint32();
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

function createBaseCMsgDevNewItemRequestResponse(): CMsgDevNewItemRequestResponse {
  return { success: false };
}

export const CMsgDevNewItemRequestResponse = {
  encode(message: CMsgDevNewItemRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDevNewItemRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDevNewItemRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
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
};

function createBaseCMsgDevUnlockAllItemStyles(): CMsgDevUnlockAllItemStyles {
  return { itemId: "0" };
}

export const CMsgDevUnlockAllItemStyles = {
  encode(message: CMsgDevUnlockAllItemStyles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "0") {
      writer.uint32(8).uint64(message.itemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDevUnlockAllItemStyles {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDevUnlockAllItemStyles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
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

function createBaseCMsgDevUnlockAllItemStylesResponse(): CMsgDevUnlockAllItemStylesResponse {
  return { success: false };
}

export const CMsgDevUnlockAllItemStylesResponse = {
  encode(message: CMsgDevUnlockAllItemStylesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDevUnlockAllItemStylesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDevUnlockAllItemStylesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
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
};

function createBaseCMsgGCGetAccountSubscriptionItem(): CMsgGCGetAccountSubscriptionItem {
  return { accountId: 0 };
}

export const CMsgGCGetAccountSubscriptionItem = {
  encode(message: CMsgGCGetAccountSubscriptionItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetAccountSubscriptionItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetAccountSubscriptionItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountId = reader.uint32();
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

function createBaseCMsgGCGetAccountSubscriptionItemResponse(): CMsgGCGetAccountSubscriptionItemResponse {
  return { defIndex: 0 };
}

export const CMsgGCGetAccountSubscriptionItemResponse = {
  encode(message: CMsgGCGetAccountSubscriptionItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defIndex !== 0) {
      writer.uint32(8).uint32(message.defIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetAccountSubscriptionItemResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetAccountSubscriptionItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.defIndex = reader.uint32();
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

function createBaseCMsgGCAddGiftItem(): CMsgGCAddGiftItem {
  return { accountId: 0, itemId: "0" };
}

export const CMsgGCAddGiftItem = {
  encode(message: CMsgGCAddGiftItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.itemId !== "0") {
      writer.uint32(16).uint64(message.itemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCAddGiftItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCAddGiftItem();
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
          if (tag != 16) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
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

function createBaseCMsgClientToGCWrapAndDeliverGift(): CMsgClientToGCWrapAndDeliverGift {
  return { itemId: "0", giveToAccountId: 0, giftMessage: "" };
}

export const CMsgClientToGCWrapAndDeliverGift = {
  encode(message: CMsgClientToGCWrapAndDeliverGift, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "0") {
      writer.uint32(8).uint64(message.itemId);
    }
    if (message.giveToAccountId !== 0) {
      writer.uint32(16).uint32(message.giveToAccountId);
    }
    if (message.giftMessage !== "") {
      writer.uint32(26).string(message.giftMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCWrapAndDeliverGift {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCWrapAndDeliverGift();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.giveToAccountId = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.giftMessage = reader.string();
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

function createBaseCMsgClientToGCWrapAndDeliverGiftResponse(): CMsgClientToGCWrapAndDeliverGiftResponse {
  return {
    response: 0,
    giftingChargeUses: 0,
    giftingChargeMax: 0,
    giftingUses: 0,
    giftingMax: 0,
    giftingWindowHours: 0,
    tradeRestriction: 0,
  };
}

export const CMsgClientToGCWrapAndDeliverGiftResponse = {
  encode(message: CMsgClientToGCWrapAndDeliverGiftResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    if (message.giftingChargeUses !== 0) {
      writer.uint32(16).uint32(message.giftingChargeUses);
    }
    if (message.giftingChargeMax !== 0) {
      writer.uint32(24).int32(message.giftingChargeMax);
    }
    if (message.giftingUses !== 0) {
      writer.uint32(32).uint32(message.giftingUses);
    }
    if (message.giftingMax !== 0) {
      writer.uint32(40).int32(message.giftingMax);
    }
    if (message.giftingWindowHours !== 0) {
      writer.uint32(48).uint32(message.giftingWindowHours);
    }
    if (message.tradeRestriction !== 0) {
      writer.uint32(56).int32(message.tradeRestriction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCWrapAndDeliverGiftResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCWrapAndDeliverGiftResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.giftingChargeUses = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.giftingChargeMax = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.giftingUses = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.giftingMax = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.giftingWindowHours = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.tradeRestriction = reader.int32() as any;
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

function createBaseCMsgClientToGCUnwrapGift(): CMsgClientToGCUnwrapGift {
  return { itemId: "0" };
}

export const CMsgClientToGCUnwrapGift = {
  encode(message: CMsgClientToGCUnwrapGift, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "0") {
      writer.uint32(8).uint64(message.itemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUnwrapGift {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUnwrapGift();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
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

function createBaseCMsgClientToGCGetGiftPermissions(): CMsgClientToGCGetGiftPermissions {
  return {};
}

export const CMsgClientToGCGetGiftPermissions = {
  encode(_: CMsgClientToGCGetGiftPermissions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetGiftPermissions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetGiftPermissions();
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

function createBaseCMsgClientToGCGetGiftPermissionsResponse(): CMsgClientToGCGetGiftPermissionsResponse {
  return {
    isUnlimited: false,
    hasTwoFactor: false,
    senderPermission: 0,
    friendshipAgeRequirement: 0,
    friendshipAgeRequirementTwoFactor: 0,
    friendPermissions: [],
  };
}

export const CMsgClientToGCGetGiftPermissionsResponse = {
  encode(message: CMsgClientToGCGetGiftPermissionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isUnlimited === true) {
      writer.uint32(8).bool(message.isUnlimited);
    }
    if (message.hasTwoFactor === true) {
      writer.uint32(24).bool(message.hasTwoFactor);
    }
    if (message.senderPermission !== 0) {
      writer.uint32(48).int32(message.senderPermission);
    }
    if (message.friendshipAgeRequirement !== 0) {
      writer.uint32(56).uint32(message.friendshipAgeRequirement);
    }
    if (message.friendshipAgeRequirementTwoFactor !== 0) {
      writer.uint32(64).uint32(message.friendshipAgeRequirementTwoFactor);
    }
    for (const v of message.friendPermissions) {
      CMsgClientToGCGetGiftPermissionsResponse_FriendPermission.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetGiftPermissionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetGiftPermissionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.isUnlimited = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.hasTwoFactor = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.senderPermission = reader.int32() as any;
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.friendshipAgeRequirement = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.friendshipAgeRequirementTwoFactor = reader.uint32();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.friendPermissions.push(
            CMsgClientToGCGetGiftPermissionsResponse_FriendPermission.decode(reader, reader.uint32()),
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

function createBaseCMsgClientToGCGetGiftPermissionsResponse_FriendPermission(): CMsgClientToGCGetGiftPermissionsResponse_FriendPermission {
  return { accountId: 0, permission: 0 };
}

export const CMsgClientToGCGetGiftPermissionsResponse_FriendPermission = {
  encode(
    message: CMsgClientToGCGetGiftPermissionsResponse_FriendPermission,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.permission !== 0) {
      writer.uint32(16).int32(message.permission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetGiftPermissionsResponse_FriendPermission {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetGiftPermissionsResponse_FriendPermission();
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
          if (tag != 16) {
            break;
          }

          message.permission = reader.int32() as any;
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

function createBaseCMsgClientToGCUnpackBundle(): CMsgClientToGCUnpackBundle {
  return { itemId: "0" };
}

export const CMsgClientToGCUnpackBundle = {
  encode(message: CMsgClientToGCUnpackBundle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "0") {
      writer.uint32(8).uint64(message.itemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUnpackBundle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUnpackBundle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
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

function createBaseCMsgClientToGCUnpackBundleResponse(): CMsgClientToGCUnpackBundleResponse {
  return { unpackedItemIds: [], response: 0, unpackedItemDefIndexes: [] };
}

export const CMsgClientToGCUnpackBundleResponse = {
  encode(message: CMsgClientToGCUnpackBundleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.unpackedItemIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.response !== 0) {
      writer.uint32(16).int32(message.response);
    }
    writer.uint32(26).fork();
    for (const v of message.unpackedItemDefIndexes) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUnpackBundleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUnpackBundleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.unpackedItemIds.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedItemIds.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 2:
          if (tag != 16) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
        case 3:
          if (tag == 24) {
            message.unpackedItemDefIndexes.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unpackedItemDefIndexes.push(reader.uint32());
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

function createBaseCMsgGCToClientStoreTransactionCompleted(): CMsgGCToClientStoreTransactionCompleted {
  return { txnId: "0", itemIds: [] };
}

export const CMsgGCToClientStoreTransactionCompleted = {
  encode(message: CMsgGCToClientStoreTransactionCompleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txnId !== "0") {
      writer.uint32(8).uint64(message.txnId);
    }
    writer.uint32(18).fork();
    for (const v of message.itemIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientStoreTransactionCompleted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientStoreTransactionCompleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.txnId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag == 16) {
            message.itemIds.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.itemIds.push(longToString(reader.uint64() as Long));
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

function createBaseCMsgClientToGCEquipItems(): CMsgClientToGCEquipItems {
  return { equips: [] };
}

export const CMsgClientToGCEquipItems = {
  encode(message: CMsgClientToGCEquipItems, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.equips) {
      CMsgAdjustItemEquippedState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCEquipItems {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCEquipItems();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.equips.push(CMsgAdjustItemEquippedState.decode(reader, reader.uint32()));
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

function createBaseCMsgClientToGCEquipItemsResponse(): CMsgClientToGCEquipItemsResponse {
  return { soCacheVersionId: "0" };
}

export const CMsgClientToGCEquipItemsResponse = {
  encode(message: CMsgClientToGCEquipItemsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.soCacheVersionId !== "0") {
      writer.uint32(9).fixed64(message.soCacheVersionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCEquipItemsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCEquipItemsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.soCacheVersionId = longToString(reader.fixed64() as Long);
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

function createBaseCMsgClientToGCSetItemStyle(): CMsgClientToGCSetItemStyle {
  return { itemId: "0", styleIndex: 0 };
}

export const CMsgClientToGCSetItemStyle = {
  encode(message: CMsgClientToGCSetItemStyle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "0") {
      writer.uint32(8).uint64(message.itemId);
    }
    if (message.styleIndex !== 0) {
      writer.uint32(16).uint32(message.styleIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSetItemStyle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSetItemStyle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.styleIndex = reader.uint32();
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

function createBaseCMsgClientToGCSetItemStyleResponse(): CMsgClientToGCSetItemStyleResponse {
  return { response: 0 };
}

export const CMsgClientToGCSetItemStyleResponse = {
  encode(message: CMsgClientToGCSetItemStyleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSetItemStyleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSetItemStyleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
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

function createBaseCMsgClientToGCUnlockItemStyle(): CMsgClientToGCUnlockItemStyle {
  return { itemToUnlock: "0", styleIndex: 0, consumableItemIds: [] };
}

export const CMsgClientToGCUnlockItemStyle = {
  encode(message: CMsgClientToGCUnlockItemStyle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemToUnlock !== "0") {
      writer.uint32(8).uint64(message.itemToUnlock);
    }
    if (message.styleIndex !== 0) {
      writer.uint32(16).uint32(message.styleIndex);
    }
    writer.uint32(26).fork();
    for (const v of message.consumableItemIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUnlockItemStyle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUnlockItemStyle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemToUnlock = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.styleIndex = reader.uint32();
          continue;
        case 3:
          if (tag == 24) {
            message.consumableItemIds.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.consumableItemIds.push(longToString(reader.uint64() as Long));
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

function createBaseCMsgClientToGCUnlockItemStyleResponse(): CMsgClientToGCUnlockItemStyleResponse {
  return { response: 0, itemId: "0", styleIndex: 0, stylePrereq: 0 };
}

export const CMsgClientToGCUnlockItemStyleResponse = {
  encode(message: CMsgClientToGCUnlockItemStyleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    if (message.itemId !== "0") {
      writer.uint32(16).uint64(message.itemId);
    }
    if (message.styleIndex !== 0) {
      writer.uint32(24).uint32(message.styleIndex);
    }
    if (message.stylePrereq !== 0) {
      writer.uint32(32).uint32(message.stylePrereq);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUnlockItemStyleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUnlockItemStyleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.styleIndex = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.stylePrereq = reader.uint32();
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

function createBaseCMsgClientToGCSetItemInventoryCategory(): CMsgClientToGCSetItemInventoryCategory {
  return { itemIds: [], setToValue: 0, removeCategories: 0, addCategories: 0 };
}

export const CMsgClientToGCSetItemInventoryCategory = {
  encode(message: CMsgClientToGCSetItemInventoryCategory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.itemIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.setToValue !== 0) {
      writer.uint32(16).uint32(message.setToValue);
    }
    if (message.removeCategories !== 0) {
      writer.uint32(24).uint32(message.removeCategories);
    }
    if (message.addCategories !== 0) {
      writer.uint32(32).uint32(message.addCategories);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSetItemInventoryCategory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSetItemInventoryCategory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.itemIds.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.itemIds.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 2:
          if (tag != 16) {
            break;
          }

          message.setToValue = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.removeCategories = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.addCategories = reader.uint32();
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

function createBaseCMsgClientToGCUnlockCrate(): CMsgClientToGCUnlockCrate {
  return { crateItemId: "0", keyItemId: "0" };
}

export const CMsgClientToGCUnlockCrate = {
  encode(message: CMsgClientToGCUnlockCrate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.crateItemId !== "0") {
      writer.uint32(8).uint64(message.crateItemId);
    }
    if (message.keyItemId !== "0") {
      writer.uint32(16).uint64(message.keyItemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUnlockCrate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUnlockCrate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.crateItemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.keyItemId = longToString(reader.uint64() as Long);
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

function createBaseCMsgClientToGCUnlockCrateResponse(): CMsgClientToGCUnlockCrateResponse {
  return { result: 0, grantedItems: [] };
}

export const CMsgClientToGCUnlockCrateResponse = {
  encode(message: CMsgClientToGCUnlockCrateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    for (const v of message.grantedItems) {
      CMsgClientToGCUnlockCrateResponse_Item.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUnlockCrateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUnlockCrateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.grantedItems.push(CMsgClientToGCUnlockCrateResponse_Item.decode(reader, reader.uint32()));
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

function createBaseCMsgClientToGCUnlockCrateResponse_Item(): CMsgClientToGCUnlockCrateResponse_Item {
  return { itemId: "0", defIndex: 0 };
}

export const CMsgClientToGCUnlockCrateResponse_Item = {
  encode(message: CMsgClientToGCUnlockCrateResponse_Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "0") {
      writer.uint32(8).uint64(message.itemId);
    }
    if (message.defIndex !== 0) {
      writer.uint32(16).uint32(message.defIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUnlockCrateResponse_Item {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUnlockCrateResponse_Item();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.defIndex = reader.uint32();
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

function createBaseCMsgClientToGCRemoveItemAttribute(): CMsgClientToGCRemoveItemAttribute {
  return { itemId: "0" };
}

export const CMsgClientToGCRemoveItemAttribute = {
  encode(message: CMsgClientToGCRemoveItemAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "0") {
      writer.uint32(8).uint64(message.itemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRemoveItemAttribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRemoveItemAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
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

function createBaseCMsgClientToGCRemoveItemAttributeResponse(): CMsgClientToGCRemoveItemAttributeResponse {
  return { response: 0, itemId: "0" };
}

export const CMsgClientToGCRemoveItemAttributeResponse = {
  encode(message: CMsgClientToGCRemoveItemAttributeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    if (message.itemId !== "0") {
      writer.uint32(16).uint64(message.itemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRemoveItemAttributeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRemoveItemAttributeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
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

function createBaseCMsgClientToGCNameItem(): CMsgClientToGCNameItem {
  return { subjectItemId: "0", toolItemId: "0", name: "" };
}

export const CMsgClientToGCNameItem = {
  encode(message: CMsgClientToGCNameItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subjectItemId !== "0") {
      writer.uint32(8).uint64(message.subjectItemId);
    }
    if (message.toolItemId !== "0") {
      writer.uint32(16).uint64(message.toolItemId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCNameItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCNameItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.subjectItemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.toolItemId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.name = reader.string();
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

function createBaseCMsgClientToGCNameItemResponse(): CMsgClientToGCNameItemResponse {
  return { response: 0, itemId: "0" };
}

export const CMsgClientToGCNameItemResponse = {
  encode(message: CMsgClientToGCNameItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    if (message.itemId !== "0") {
      writer.uint32(16).uint64(message.itemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCNameItemResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCNameItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
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

function createBaseCMsgGCSetItemPosition(): CMsgGCSetItemPosition {
  return { itemId: "0", newPosition: 0 };
}

export const CMsgGCSetItemPosition = {
  encode(message: CMsgGCSetItemPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "0") {
      writer.uint32(8).uint64(message.itemId);
    }
    if (message.newPosition !== 0) {
      writer.uint32(16).uint32(message.newPosition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCSetItemPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCSetItemPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.newPosition = reader.uint32();
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

function createBaseCAttributeItemDynamicRecipeComponent(): CAttributeItemDynamicRecipeComponent {
  return {
    itemDef: 0,
    itemQuality: 0,
    itemFlags: 0,
    attributesString: "",
    itemCount: 0,
    itemsFulfilled: 0,
    itemRarity: 0,
    lootlist: "",
    fulfilledItemId: "0",
    associatedItemDef: 0,
  };
}

export const CAttributeItemDynamicRecipeComponent = {
  encode(message: CAttributeItemDynamicRecipeComponent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemDef !== 0) {
      writer.uint32(8).uint32(message.itemDef);
    }
    if (message.itemQuality !== 0) {
      writer.uint32(16).uint32(message.itemQuality);
    }
    if (message.itemFlags !== 0) {
      writer.uint32(24).uint32(message.itemFlags);
    }
    if (message.attributesString !== "") {
      writer.uint32(34).string(message.attributesString);
    }
    if (message.itemCount !== 0) {
      writer.uint32(40).uint32(message.itemCount);
    }
    if (message.itemsFulfilled !== 0) {
      writer.uint32(48).uint32(message.itemsFulfilled);
    }
    if (message.itemRarity !== 0) {
      writer.uint32(56).uint32(message.itemRarity);
    }
    if (message.lootlist !== "") {
      writer.uint32(66).string(message.lootlist);
    }
    if (message.fulfilledItemId !== "0") {
      writer.uint32(72).uint64(message.fulfilledItemId);
    }
    if (message.associatedItemDef !== 0) {
      writer.uint32(80).uint32(message.associatedItemDef);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAttributeItemDynamicRecipeComponent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAttributeItemDynamicRecipeComponent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemDef = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.itemQuality = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.itemFlags = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.attributesString = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.itemCount = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.itemsFulfilled = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.itemRarity = reader.uint32();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.lootlist = reader.string();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.fulfilledItemId = longToString(reader.uint64() as Long);
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.associatedItemDef = reader.uint32();
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

function createBaseCProtoItemSocket(): CProtoItemSocket {
  return {
    itemId: "0",
    attrDefIndex: 0,
    requiredType: 0,
    requiredHero: "",
    gemDefIndex: 0,
    notTradable: false,
    requiredItemSlot: "",
  };
}

export const CProtoItemSocket = {
  encode(message: CProtoItemSocket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "0") {
      writer.uint32(8).uint64(message.itemId);
    }
    if (message.attrDefIndex !== 0) {
      writer.uint32(16).uint32(message.attrDefIndex);
    }
    if (message.requiredType !== 0) {
      writer.uint32(24).uint32(message.requiredType);
    }
    if (message.requiredHero !== "") {
      writer.uint32(34).string(message.requiredHero);
    }
    if (message.gemDefIndex !== 0) {
      writer.uint32(40).uint32(message.gemDefIndex);
    }
    if (message.notTradable === true) {
      writer.uint32(48).bool(message.notTradable);
    }
    if (message.requiredItemSlot !== "") {
      writer.uint32(58).string(message.requiredItemSlot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CProtoItemSocket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCProtoItemSocket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.attrDefIndex = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.requiredType = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.requiredHero = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.gemDefIndex = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.notTradable = reader.bool();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.requiredItemSlot = reader.string();
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

function createBaseCProtoItemSocketEmpty(): CProtoItemSocketEmpty {
  return { socket: undefined };
}

export const CProtoItemSocketEmpty = {
  encode(message: CProtoItemSocketEmpty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.socket !== undefined) {
      CProtoItemSocket.encode(message.socket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CProtoItemSocketEmpty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCProtoItemSocketEmpty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.socket = CProtoItemSocket.decode(reader, reader.uint32());
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

function createBaseCProtoItemSocketEffect(): CProtoItemSocketEffect {
  return { socket: undefined, effect: 0 };
}

export const CProtoItemSocketEffect = {
  encode(message: CProtoItemSocketEffect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.socket !== undefined) {
      CProtoItemSocket.encode(message.socket, writer.uint32(10).fork()).ldelim();
    }
    if (message.effect !== 0) {
      writer.uint32(16).uint32(message.effect);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CProtoItemSocketEffect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCProtoItemSocketEffect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.socket = CProtoItemSocket.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.effect = reader.uint32();
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

function createBaseCProtoItemSocketColor(): CProtoItemSocketColor {
  return { socket: undefined, red: 0, green: 0, blue: 0 };
}

export const CProtoItemSocketColor = {
  encode(message: CProtoItemSocketColor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.socket !== undefined) {
      CProtoItemSocket.encode(message.socket, writer.uint32(10).fork()).ldelim();
    }
    if (message.red !== 0) {
      writer.uint32(16).uint32(message.red);
    }
    if (message.green !== 0) {
      writer.uint32(24).uint32(message.green);
    }
    if (message.blue !== 0) {
      writer.uint32(32).uint32(message.blue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CProtoItemSocketColor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCProtoItemSocketColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.socket = CProtoItemSocket.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.red = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.green = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.blue = reader.uint32();
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

function createBaseCProtoItemSocketStrange(): CProtoItemSocketStrange {
  return { socket: undefined, strangeType: 0, strangeValue: 0 };
}

export const CProtoItemSocketStrange = {
  encode(message: CProtoItemSocketStrange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.socket !== undefined) {
      CProtoItemSocket.encode(message.socket, writer.uint32(10).fork()).ldelim();
    }
    if (message.strangeType !== 0) {
      writer.uint32(16).uint32(message.strangeType);
    }
    if (message.strangeValue !== 0) {
      writer.uint32(24).uint32(message.strangeValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CProtoItemSocketStrange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCProtoItemSocketStrange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.socket = CProtoItemSocket.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.strangeType = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.strangeValue = reader.uint32();
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

function createBaseCProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY(): CProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY {
  return { socket: undefined, strangeType: 0, strangeValue: 0, abilityEffect: 0 };
}

export const CProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY = {
  encode(
    message: CProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.socket !== undefined) {
      CProtoItemSocket.encode(message.socket, writer.uint32(10).fork()).ldelim();
    }
    if (message.strangeType !== 0) {
      writer.uint32(16).uint32(message.strangeType);
    }
    if (message.strangeValue !== 0) {
      writer.uint32(24).uint32(message.strangeValue);
    }
    if (message.abilityEffect !== 0) {
      writer.uint32(32).uint32(message.abilityEffect);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.socket = CProtoItemSocket.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.strangeType = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.strangeValue = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.abilityEffect = reader.uint32();
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

function createBaseCProtoItemSocketSpectator(): CProtoItemSocketSpectator {
  return { socket: undefined, gamesViewed: 0, corporationId: 0, leagueId: 0, teamId: 0 };
}

export const CProtoItemSocketSpectator = {
  encode(message: CProtoItemSocketSpectator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.socket !== undefined) {
      CProtoItemSocket.encode(message.socket, writer.uint32(10).fork()).ldelim();
    }
    if (message.gamesViewed !== 0) {
      writer.uint32(16).uint32(message.gamesViewed);
    }
    if (message.corporationId !== 0) {
      writer.uint32(24).uint32(message.corporationId);
    }
    if (message.leagueId !== 0) {
      writer.uint32(32).uint32(message.leagueId);
    }
    if (message.teamId !== 0) {
      writer.uint32(40).uint32(message.teamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CProtoItemSocketSpectator {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCProtoItemSocketSpectator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.socket = CProtoItemSocket.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.gamesViewed = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.corporationId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.teamId = reader.uint32();
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

function createBaseCProtoItemSocketAssetModifier(): CProtoItemSocketAssetModifier {
  return { socket: undefined, assetModifier: 0 };
}

export const CProtoItemSocketAssetModifier = {
  encode(message: CProtoItemSocketAssetModifier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.socket !== undefined) {
      CProtoItemSocket.encode(message.socket, writer.uint32(10).fork()).ldelim();
    }
    if (message.assetModifier !== 0) {
      writer.uint32(16).uint32(message.assetModifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CProtoItemSocketAssetModifier {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCProtoItemSocketAssetModifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.socket = CProtoItemSocket.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.assetModifier = reader.uint32();
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

function createBaseCProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY(): CProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY {
  return { socket: undefined, assetModifier: 0, animModifier: 0, abilityEffect: 0 };
}

export const CProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY = {
  encode(
    message: CProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.socket !== undefined) {
      CProtoItemSocket.encode(message.socket, writer.uint32(10).fork()).ldelim();
    }
    if (message.assetModifier !== 0) {
      writer.uint32(16).uint32(message.assetModifier);
    }
    if (message.animModifier !== 0) {
      writer.uint32(24).uint32(message.animModifier);
    }
    if (message.abilityEffect !== 0) {
      writer.uint32(32).uint32(message.abilityEffect);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.socket = CProtoItemSocket.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.assetModifier = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.animModifier = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.abilityEffect = reader.uint32();
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

function createBaseCProtoItemSocketAutograph(): CProtoItemSocketAutograph {
  return { socket: undefined, autograph: "", autographId: 0, autographScore: 0 };
}

export const CProtoItemSocketAutograph = {
  encode(message: CProtoItemSocketAutograph, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.socket !== undefined) {
      CProtoItemSocket.encode(message.socket, writer.uint32(10).fork()).ldelim();
    }
    if (message.autograph !== "") {
      writer.uint32(18).string(message.autograph);
    }
    if (message.autographId !== 0) {
      writer.uint32(24).uint32(message.autographId);
    }
    if (message.autographScore !== 0) {
      writer.uint32(32).uint32(message.autographScore);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CProtoItemSocketAutograph {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCProtoItemSocketAutograph();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.socket = CProtoItemSocket.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.autograph = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.autographId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.autographScore = reader.uint32();
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

function createBaseCProtoItemSocketStaticVisuals(): CProtoItemSocketStaticVisuals {
  return { socket: undefined };
}

export const CProtoItemSocketStaticVisuals = {
  encode(message: CProtoItemSocketStaticVisuals, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.socket !== undefined) {
      CProtoItemSocket.encode(message.socket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CProtoItemSocketStaticVisuals {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCProtoItemSocketStaticVisuals();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.socket = CProtoItemSocket.decode(reader, reader.uint32());
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

function createBaseCAttributeString(): CAttributeString {
  return { value: "" };
}

export const CAttributeString = {
  encode(message: CAttributeString, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAttributeString {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAttributeString();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
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

function createBaseCWorkshopGetItemDailyRevenueRequest(): CWorkshopGetItemDailyRevenueRequest {
  return { appid: 0, itemId: 0, dateStart: 0, dateEnd: 0 };
}

export const CWorkshopGetItemDailyRevenueRequest = {
  encode(message: CWorkshopGetItemDailyRevenueRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.itemId !== 0) {
      writer.uint32(16).uint32(message.itemId);
    }
    if (message.dateStart !== 0) {
      writer.uint32(24).uint32(message.dateStart);
    }
    if (message.dateEnd !== 0) {
      writer.uint32(32).uint32(message.dateEnd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CWorkshopGetItemDailyRevenueRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopGetItemDailyRevenueRequest();
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

          message.itemId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.dateStart = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.dateEnd = reader.uint32();
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

function createBaseCWorkshopGetItemDailyRevenueResponse(): CWorkshopGetItemDailyRevenueResponse {
  return { countryRevenue: [] };
}

export const CWorkshopGetItemDailyRevenueResponse = {
  encode(message: CWorkshopGetItemDailyRevenueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.countryRevenue) {
      CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CWorkshopGetItemDailyRevenueResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopGetItemDailyRevenueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.countryRevenue.push(
            CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue.decode(reader, reader.uint32()),
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

function createBaseCWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue(): CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue {
  return { countryCode: "", date: 0, revenueUsd: "0", units: 0 };
}

export const CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue = {
  encode(
    message: CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.countryCode !== "") {
      writer.uint32(10).string(message.countryCode);
    }
    if (message.date !== 0) {
      writer.uint32(16).uint32(message.date);
    }
    if (message.revenueUsd !== "0") {
      writer.uint32(24).int64(message.revenueUsd);
    }
    if (message.units !== 0) {
      writer.uint32(32).int32(message.units);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.countryCode = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.date = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.revenueUsd = longToString(reader.int64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.units = reader.int32();
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

function createBaseCWorkshopGetPackageDailyRevenueRequest(): CWorkshopGetPackageDailyRevenueRequest {
  return { packageid: 0, dateStart: 0, dateEnd: 0 };
}

export const CWorkshopGetPackageDailyRevenueRequest = {
  encode(message: CWorkshopGetPackageDailyRevenueRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packageid !== 0) {
      writer.uint32(8).uint32(message.packageid);
    }
    if (message.dateStart !== 0) {
      writer.uint32(16).uint32(message.dateStart);
    }
    if (message.dateEnd !== 0) {
      writer.uint32(24).uint32(message.dateEnd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CWorkshopGetPackageDailyRevenueRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopGetPackageDailyRevenueRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.packageid = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.dateStart = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.dateEnd = reader.uint32();
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

function createBaseCWorkshopGetPackageDailyRevenueResponse(): CWorkshopGetPackageDailyRevenueResponse {
  return { countryRevenue: [] };
}

export const CWorkshopGetPackageDailyRevenueResponse = {
  encode(message: CWorkshopGetPackageDailyRevenueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.countryRevenue) {
      CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CWorkshopGetPackageDailyRevenueResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopGetPackageDailyRevenueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.countryRevenue.push(
            CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue.decode(reader, reader.uint32()),
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

function createBaseCWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue(): CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue {
  return { countryCode: "", date: 0, revenueUsd: "0", units: 0 };
}

export const CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue = {
  encode(
    message: CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.countryCode !== "") {
      writer.uint32(10).string(message.countryCode);
    }
    if (message.date !== 0) {
      writer.uint32(16).uint32(message.date);
    }
    if (message.revenueUsd !== "0") {
      writer.uint32(24).int64(message.revenueUsd);
    }
    if (message.units !== 0) {
      writer.uint32(32).int32(message.units);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.countryCode = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.date = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.revenueUsd = longToString(reader.int64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.units = reader.int32();
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

function createBaseCMsgSQLGCToGCGrantBackpackSlots(): CMsgSQLGCToGCGrantBackpackSlots {
  return { accountId: 0, addSlots: 0 };
}

export const CMsgSQLGCToGCGrantBackpackSlots = {
  encode(message: CMsgSQLGCToGCGrantBackpackSlots, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.addSlots !== 0) {
      writer.uint32(16).uint32(message.addSlots);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSQLGCToGCGrantBackpackSlots {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSQLGCToGCGrantBackpackSlots();
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
          if (tag != 16) {
            break;
          }

          message.addSlots = reader.uint32();
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

function createBaseCMsgClientToGCLookupAccountName(): CMsgClientToGCLookupAccountName {
  return { accountId: 0 };
}

export const CMsgClientToGCLookupAccountName = {
  encode(message: CMsgClientToGCLookupAccountName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCLookupAccountName {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCLookupAccountName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountId = reader.uint32();
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

function createBaseCMsgClientToGCLookupAccountNameResponse(): CMsgClientToGCLookupAccountNameResponse {
  return { accountId: 0, accountName: "" };
}

export const CMsgClientToGCLookupAccountNameResponse = {
  encode(message: CMsgClientToGCLookupAccountNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.accountName !== "") {
      writer.uint32(18).string(message.accountName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCLookupAccountNameResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCLookupAccountNameResponse();
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

          message.accountName = reader.string();
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

function createBaseCMsgClientToGCCreateStaticRecipe(): CMsgClientToGCCreateStaticRecipe {
  return { items: [], recipeDefIndex: 0 };
}

export const CMsgClientToGCCreateStaticRecipe = {
  encode(message: CMsgClientToGCCreateStaticRecipe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      CMsgClientToGCCreateStaticRecipe_Item.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.recipeDefIndex !== 0) {
      writer.uint32(16).uint32(message.recipeDefIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCreateStaticRecipe {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCreateStaticRecipe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.items.push(CMsgClientToGCCreateStaticRecipe_Item.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.recipeDefIndex = reader.uint32();
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

function createBaseCMsgClientToGCCreateStaticRecipe_Item(): CMsgClientToGCCreateStaticRecipe_Item {
  return { itemId: "0", slotId: 0 };
}

export const CMsgClientToGCCreateStaticRecipe_Item = {
  encode(message: CMsgClientToGCCreateStaticRecipe_Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "0") {
      writer.uint32(8).uint64(message.itemId);
    }
    if (message.slotId !== 0) {
      writer.uint32(16).uint32(message.slotId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCreateStaticRecipe_Item {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCreateStaticRecipe_Item();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.slotId = reader.uint32();
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

function createBaseCMsgClientToGCCreateStaticRecipeResponse(): CMsgClientToGCCreateStaticRecipeResponse {
  return { response: 0, outputItems: [], inputErrors: [], additionalOutputs: [] };
}

export const CMsgClientToGCCreateStaticRecipeResponse = {
  encode(message: CMsgClientToGCCreateStaticRecipeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    for (const v of message.outputItems) {
      CMsgClientToGCCreateStaticRecipeResponse_OutputItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.inputErrors) {
      CMsgClientToGCCreateStaticRecipeResponse_InputError.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.additionalOutputs) {
      CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCreateStaticRecipeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCreateStaticRecipeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.outputItems.push(CMsgClientToGCCreateStaticRecipeResponse_OutputItem.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.inputErrors.push(CMsgClientToGCCreateStaticRecipeResponse_InputError.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.additionalOutputs.push(
            CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput.decode(reader, reader.uint32()),
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

function createBaseCMsgClientToGCCreateStaticRecipeResponse_OutputItem(): CMsgClientToGCCreateStaticRecipeResponse_OutputItem {
  return { defIndex: 0, itemId: "0", slotId: 0 };
}

export const CMsgClientToGCCreateStaticRecipeResponse_OutputItem = {
  encode(
    message: CMsgClientToGCCreateStaticRecipeResponse_OutputItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.defIndex !== 0) {
      writer.uint32(8).uint32(message.defIndex);
    }
    if (message.itemId !== "0") {
      writer.uint32(16).uint64(message.itemId);
    }
    if (message.slotId !== 0) {
      writer.uint32(24).uint32(message.slotId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCreateStaticRecipeResponse_OutputItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCreateStaticRecipeResponse_OutputItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.defIndex = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.slotId = reader.uint32();
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

function createBaseCMsgClientToGCCreateStaticRecipeResponse_InputError(): CMsgClientToGCCreateStaticRecipeResponse_InputError {
  return { slotId: 0, error: 0 };
}

export const CMsgClientToGCCreateStaticRecipeResponse_InputError = {
  encode(
    message: CMsgClientToGCCreateStaticRecipeResponse_InputError,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.slotId !== 0) {
      writer.uint32(8).uint32(message.slotId);
    }
    if (message.error !== 0) {
      writer.uint32(16).int32(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCreateStaticRecipeResponse_InputError {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCreateStaticRecipeResponse_InputError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.slotId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.error = reader.int32() as any;
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

function createBaseCMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput(): CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput {
  return { slotId: 0, value: "0" };
}

export const CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput = {
  encode(
    message: CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.slotId !== 0) {
      writer.uint32(8).uint32(message.slotId);
    }
    if (message.value !== "0") {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.slotId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.value = longToString(reader.uint64() as Long);
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

function createBaseCMsgProcessTransactionOrder(): CMsgProcessTransactionOrder {
  return {
    txnId: "0",
    steamTxnId: "0",
    partnerTxnId: "0",
    steamId: "0",
    timeStamp: 0,
    watermark: "0",
    purchaseReportStatus: 0,
    currency: 0,
    items: [],
  };
}

export const CMsgProcessTransactionOrder = {
  encode(message: CMsgProcessTransactionOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txnId !== "0") {
      writer.uint32(8).uint64(message.txnId);
    }
    if (message.steamTxnId !== "0") {
      writer.uint32(16).uint64(message.steamTxnId);
    }
    if (message.partnerTxnId !== "0") {
      writer.uint32(24).uint64(message.partnerTxnId);
    }
    if (message.steamId !== "0") {
      writer.uint32(33).fixed64(message.steamId);
    }
    if (message.timeStamp !== 0) {
      writer.uint32(40).uint32(message.timeStamp);
    }
    if (message.watermark !== "0") {
      writer.uint32(48).uint64(message.watermark);
    }
    if (message.purchaseReportStatus !== 0) {
      writer.uint32(56).int32(message.purchaseReportStatus);
    }
    if (message.currency !== 0) {
      writer.uint32(64).uint32(message.currency);
    }
    for (const v of message.items) {
      CMsgProcessTransactionOrder_Item.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgProcessTransactionOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgProcessTransactionOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.txnId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.steamTxnId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.partnerTxnId = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.steamId = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.timeStamp = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.watermark = longToString(reader.uint64() as Long);
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.purchaseReportStatus = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.currency = reader.uint32();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.items.push(CMsgProcessTransactionOrder_Item.decode(reader, reader.uint32()));
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

function createBaseCMsgProcessTransactionOrder_Item(): CMsgProcessTransactionOrder_Item {
  return {
    itemDefIndex: 0,
    itemPrice: 0,
    quantity: 0,
    categoryDesc: "",
    storePurchaseType: 0,
    sourceReferenceId: "0",
    parentStackIndex: 0,
    defaultPrice: false,
    isUserFacing: false,
  };
}

export const CMsgProcessTransactionOrder_Item = {
  encode(message: CMsgProcessTransactionOrder_Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemDefIndex !== 0) {
      writer.uint32(8).uint32(message.itemDefIndex);
    }
    if (message.itemPrice !== 0) {
      writer.uint32(16).uint32(message.itemPrice);
    }
    if (message.quantity !== 0) {
      writer.uint32(24).uint32(message.quantity);
    }
    if (message.categoryDesc !== "") {
      writer.uint32(34).string(message.categoryDesc);
    }
    if (message.storePurchaseType !== 0) {
      writer.uint32(40).uint32(message.storePurchaseType);
    }
    if (message.sourceReferenceId !== "0") {
      writer.uint32(48).uint64(message.sourceReferenceId);
    }
    if (message.parentStackIndex !== 0) {
      writer.uint32(56).int32(message.parentStackIndex);
    }
    if (message.defaultPrice === true) {
      writer.uint32(64).bool(message.defaultPrice);
    }
    if (message.isUserFacing === true) {
      writer.uint32(72).bool(message.isUserFacing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgProcessTransactionOrder_Item {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgProcessTransactionOrder_Item();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemDefIndex = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.itemPrice = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.quantity = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.categoryDesc = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.storePurchaseType = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.sourceReferenceId = longToString(reader.uint64() as Long);
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.parentStackIndex = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.defaultPrice = reader.bool();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.isUserFacing = reader.bool();
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

function createBaseCMsgGCToGCStoreProcessCDKeyTransaction(): CMsgGCToGCStoreProcessCDKeyTransaction {
  return { order: undefined, reasonCode: 0, partner: 0 };
}

export const CMsgGCToGCStoreProcessCDKeyTransaction = {
  encode(message: CMsgGCToGCStoreProcessCDKeyTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      CMsgProcessTransactionOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    if (message.reasonCode !== 0) {
      writer.uint32(16).uint32(message.reasonCode);
    }
    if (message.partner !== 0) {
      writer.uint32(24).uint32(message.partner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCStoreProcessCDKeyTransaction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCStoreProcessCDKeyTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.order = CMsgProcessTransactionOrder.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.reasonCode = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.partner = reader.uint32();
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

function createBaseCMsgGCToGCStoreProcessCDKeyTransactionResponse(): CMsgGCToGCStoreProcessCDKeyTransactionResponse {
  return { success: false };
}

export const CMsgGCToGCStoreProcessCDKeyTransactionResponse = {
  encode(
    message: CMsgGCToGCStoreProcessCDKeyTransactionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCStoreProcessCDKeyTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCStoreProcessCDKeyTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
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
};

function createBaseCMsgGCToGCStoreProcessSettlement(): CMsgGCToGCStoreProcessSettlement {
  return { order: undefined };
}

export const CMsgGCToGCStoreProcessSettlement = {
  encode(message: CMsgGCToGCStoreProcessSettlement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      CMsgProcessTransactionOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCStoreProcessSettlement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCStoreProcessSettlement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.order = CMsgProcessTransactionOrder.decode(reader, reader.uint32());
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

function createBaseCMsgGCToGCStoreProcessSettlementResponse(): CMsgGCToGCStoreProcessSettlementResponse {
  return { success: false };
}

export const CMsgGCToGCStoreProcessSettlementResponse = {
  encode(message: CMsgGCToGCStoreProcessSettlementResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCStoreProcessSettlementResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCStoreProcessSettlementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
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
};

function createBaseCMsgGCToGCBroadcastConsoleCommand(): CMsgGCToGCBroadcastConsoleCommand {
  return { conCommand: "", reportOutput: false, sendingGc: 0, outputInitiator: "" };
}

export const CMsgGCToGCBroadcastConsoleCommand = {
  encode(message: CMsgGCToGCBroadcastConsoleCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.conCommand !== "") {
      writer.uint32(10).string(message.conCommand);
    }
    if (message.reportOutput === true) {
      writer.uint32(16).bool(message.reportOutput);
    }
    if (message.sendingGc !== 0) {
      writer.uint32(24).int32(message.sendingGc);
    }
    if (message.outputInitiator !== "") {
      writer.uint32(34).string(message.outputInitiator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCBroadcastConsoleCommand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCBroadcastConsoleCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.conCommand = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.reportOutput = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.sendingGc = reader.int32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.outputInitiator = reader.string();
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

function createBaseCMsgGCToGCConsoleOutput(): CMsgGCToGCConsoleOutput {
  return { initiator: "", sendingGc: 0, msgs: [], isLastForSourceJob: false };
}

export const CMsgGCToGCConsoleOutput = {
  encode(message: CMsgGCToGCConsoleOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initiator !== "") {
      writer.uint32(10).string(message.initiator);
    }
    if (message.sendingGc !== 0) {
      writer.uint32(16).int32(message.sendingGc);
    }
    for (const v of message.msgs) {
      CMsgGCToGCConsoleOutput_OutputLine.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.isLastForSourceJob === true) {
      writer.uint32(32).bool(message.isLastForSourceJob);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCConsoleOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCConsoleOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.initiator = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.sendingGc = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.msgs.push(CMsgGCToGCConsoleOutput_OutputLine.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.isLastForSourceJob = reader.bool();
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

function createBaseCMsgGCToGCConsoleOutput_OutputLine(): CMsgGCToGCConsoleOutput_OutputLine {
  return { text: "", spewLevel: 0 };
}

export const CMsgGCToGCConsoleOutput_OutputLine = {
  encode(message: CMsgGCToGCConsoleOutput_OutputLine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.spewLevel !== 0) {
      writer.uint32(16).uint32(message.spewLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCConsoleOutput_OutputLine {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCConsoleOutput_OutputLine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.text = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.spewLevel = reader.uint32();
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

function createBaseCMsgItemAges(): CMsgItemAges {
  return { maxItemIdTimestamps: [] };
}

export const CMsgItemAges = {
  encode(message: CMsgItemAges, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.maxItemIdTimestamps) {
      CMsgItemAges_MaxItemIDTimestamp.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgItemAges {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgItemAges();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.maxItemIdTimestamps.push(CMsgItemAges_MaxItemIDTimestamp.decode(reader, reader.uint32()));
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

function createBaseCMsgItemAges_MaxItemIDTimestamp(): CMsgItemAges_MaxItemIDTimestamp {
  return { timestamp: 0, maxItemId: "0" };
}

export const CMsgItemAges_MaxItemIDTimestamp = {
  encode(message: CMsgItemAges_MaxItemIDTimestamp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).uint32(message.timestamp);
    }
    if (message.maxItemId !== "0") {
      writer.uint32(16).uint64(message.maxItemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgItemAges_MaxItemIDTimestamp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgItemAges_MaxItemIDTimestamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.timestamp = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.maxItemId = longToString(reader.uint64() as Long);
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

function createBaseCMsgGCToGCInternalTestMsg(): CMsgGCToGCInternalTestMsg {
  return {
    sendingGc: 0,
    senderId: "0",
    context: 0,
    messageId: 0,
    messageBody: Buffer.alloc(0),
    jobIdSource: "0",
    jobIdTarget: "0",
  };
}

export const CMsgGCToGCInternalTestMsg = {
  encode(message: CMsgGCToGCInternalTestMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sendingGc !== 0) {
      writer.uint32(8).int32(message.sendingGc);
    }
    if (message.senderId !== "0") {
      writer.uint32(17).fixed64(message.senderId);
    }
    if (message.context !== 0) {
      writer.uint32(24).uint32(message.context);
    }
    if (message.messageId !== 0) {
      writer.uint32(32).uint32(message.messageId);
    }
    if (message.messageBody.length !== 0) {
      writer.uint32(42).bytes(message.messageBody);
    }
    if (message.jobIdSource !== "0") {
      writer.uint32(49).fixed64(message.jobIdSource);
    }
    if (message.jobIdTarget !== "0") {
      writer.uint32(57).fixed64(message.jobIdTarget);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCInternalTestMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCInternalTestMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sendingGc = reader.int32();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.senderId = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.context = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.messageId = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.messageBody = reader.bytes() as Buffer;
          continue;
        case 6:
          if (tag != 49) {
            break;
          }

          message.jobIdSource = longToString(reader.fixed64() as Long);
          continue;
        case 7:
          if (tag != 57) {
            break;
          }

          message.jobIdTarget = longToString(reader.fixed64() as Long);
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

function createBaseCMsgGCToGCClientServerVersionsUpdated(): CMsgGCToGCClientServerVersionsUpdated {
  return {
    clientMinAllowedVersion: 0,
    clientActiveVersion: 0,
    serverActiveVersion: 0,
    serverDeployedVersion: 0,
    whatChanged: 0,
  };
}

export const CMsgGCToGCClientServerVersionsUpdated = {
  encode(message: CMsgGCToGCClientServerVersionsUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientMinAllowedVersion !== 0) {
      writer.uint32(8).uint32(message.clientMinAllowedVersion);
    }
    if (message.clientActiveVersion !== 0) {
      writer.uint32(16).uint32(message.clientActiveVersion);
    }
    if (message.serverActiveVersion !== 0) {
      writer.uint32(24).uint32(message.serverActiveVersion);
    }
    if (message.serverDeployedVersion !== 0) {
      writer.uint32(32).uint32(message.serverDeployedVersion);
    }
    if (message.whatChanged !== 0) {
      writer.uint32(40).uint32(message.whatChanged);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCClientServerVersionsUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCClientServerVersionsUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.clientMinAllowedVersion = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.clientActiveVersion = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.serverActiveVersion = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.serverDeployedVersion = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.whatChanged = reader.uint32();
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

function createBaseCMsgGCToGCBroadcastMessageFromSub(): CMsgGCToGCBroadcastMessageFromSub {
  return { msgId: 0, serializedMsg: Buffer.alloc(0), accountIdList: [], steamIdList: [] };
}

export const CMsgGCToGCBroadcastMessageFromSub = {
  encode(message: CMsgGCToGCBroadcastMessageFromSub, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgId !== 0) {
      writer.uint32(8).uint32(message.msgId);
    }
    if (message.serializedMsg.length !== 0) {
      writer.uint32(18).bytes(message.serializedMsg);
    }
    writer.uint32(26).fork();
    for (const v of message.accountIdList) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.steamIdList) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCBroadcastMessageFromSub {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCBroadcastMessageFromSub();
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

          message.serializedMsg = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag == 24) {
            message.accountIdList.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountIdList.push(reader.uint32());
            }

            continue;
          }

          break;
        case 4:
          if (tag == 33) {
            message.steamIdList.push(longToString(reader.fixed64() as Long));
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.steamIdList.push(longToString(reader.fixed64() as Long));
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

function createBaseCMsgGCToClientCurrencyPricePoints(): CMsgGCToClientCurrencyPricePoints {
  return { priceKey: [], currencies: [] };
}

export const CMsgGCToClientCurrencyPricePoints = {
  encode(message: CMsgGCToClientCurrencyPricePoints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.priceKey) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.currencies) {
      CMsgGCToClientCurrencyPricePoints_Currency.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientCurrencyPricePoints {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientCurrencyPricePoints();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.priceKey.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.priceKey.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 2:
          if (tag != 18) {
            break;
          }

          message.currencies.push(CMsgGCToClientCurrencyPricePoints_Currency.decode(reader, reader.uint32()));
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

function createBaseCMsgGCToClientCurrencyPricePoints_Currency(): CMsgGCToClientCurrencyPricePoints_Currency {
  return { currencyId: 0, currencyPrice: [] };
}

export const CMsgGCToClientCurrencyPricePoints_Currency = {
  encode(message: CMsgGCToClientCurrencyPricePoints_Currency, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currencyId !== 0) {
      writer.uint32(8).uint32(message.currencyId);
    }
    writer.uint32(18).fork();
    for (const v of message.currencyPrice) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientCurrencyPricePoints_Currency {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientCurrencyPricePoints_Currency();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.currencyId = reader.uint32();
          continue;
        case 2:
          if (tag == 16) {
            message.currencyPrice.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.currencyPrice.push(longToString(reader.uint64() as Long));
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

function createBaseCMsgBannedWordList(): CMsgBannedWordList {
  return { version: 0, bannedWords: [] };
}

export const CMsgBannedWordList = {
  encode(message: CMsgBannedWordList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    for (const v of message.bannedWords) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBannedWordList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBannedWordList();
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

          message.bannedWords.push(reader.string());
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

function createBaseCMsgGCToGCFlushSteamInventoryCache(): CMsgGCToGCFlushSteamInventoryCache {
  return { keys: [] };
}

export const CMsgGCToGCFlushSteamInventoryCache = {
  encode(message: CMsgGCToGCFlushSteamInventoryCache, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keys) {
      CMsgGCToGCFlushSteamInventoryCache_Key.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCFlushSteamInventoryCache {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCFlushSteamInventoryCache();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.keys.push(CMsgGCToGCFlushSteamInventoryCache_Key.decode(reader, reader.uint32()));
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

function createBaseCMsgGCToGCFlushSteamInventoryCache_Key(): CMsgGCToGCFlushSteamInventoryCache_Key {
  return { steamid: "0", contextid: "0" };
}

export const CMsgGCToGCFlushSteamInventoryCache_Key = {
  encode(message: CMsgGCToGCFlushSteamInventoryCache_Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(8).uint64(message.steamid);
    }
    if (message.contextid !== "0") {
      writer.uint32(16).uint64(message.contextid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCFlushSteamInventoryCache_Key {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCFlushSteamInventoryCache_Key();
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

          message.contextid = longToString(reader.uint64() as Long);
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

function createBaseCMsgGCToGCUpdateSubscriptionItems(): CMsgGCToGCUpdateSubscriptionItems {
  return { accountId: 0, alwaysNotify: false };
}

export const CMsgGCToGCUpdateSubscriptionItems = {
  encode(message: CMsgGCToGCUpdateSubscriptionItems, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.alwaysNotify === true) {
      writer.uint32(16).bool(message.alwaysNotify);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCUpdateSubscriptionItems {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCUpdateSubscriptionItems();
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
          if (tag != 16) {
            break;
          }

          message.alwaysNotify = reader.bool();
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

function createBaseCMsgGCToGCSelfPing(): CMsgGCToGCSelfPing {
  return { sampleId: 0 };
}

export const CMsgGCToGCSelfPing = {
  encode(message: CMsgGCToGCSelfPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sampleId !== 0) {
      writer.uint32(8).uint32(message.sampleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCSelfPing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCSelfPing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sampleId = reader.uint32();
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

function createBaseCMsgGCToGCGetInfuxIntervalStats(): CMsgGCToGCGetInfuxIntervalStats {
  return {};
}

export const CMsgGCToGCGetInfuxIntervalStats = {
  encode(_: CMsgGCToGCGetInfuxIntervalStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCGetInfuxIntervalStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCGetInfuxIntervalStats();
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

function createBaseCMsgGCToGCGetInfuxIntervalStatsResponse(): CMsgGCToGCGetInfuxIntervalStatsResponse {
  return { statIds: [], statTotal: [], statSamples: [], statMax: [], sampleDurationMs: 0 };
}

export const CMsgGCToGCGetInfuxIntervalStatsResponse = {
  encode(message: CMsgGCToGCGetInfuxIntervalStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.statIds) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.statTotal) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.statSamples) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.statMax) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.sampleDurationMs !== 0) {
      writer.uint32(40).uint32(message.sampleDurationMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCGetInfuxIntervalStatsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCGetInfuxIntervalStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 13) {
            message.statIds.push(reader.fixed32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.statIds.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 2:
          if (tag == 16) {
            message.statTotal.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.statTotal.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 3:
          if (tag == 24) {
            message.statSamples.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.statSamples.push(reader.uint32());
            }

            continue;
          }

          break;
        case 4:
          if (tag == 32) {
            message.statMax.push(reader.uint32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.statMax.push(reader.uint32());
            }

            continue;
          }

          break;
        case 5:
          if (tag != 40) {
            break;
          }

          message.sampleDurationMs = reader.uint32();
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

function createBaseCMsgGCToGCPurchaseSucceeded(): CMsgGCToGCPurchaseSucceeded {
  return {};
}

export const CMsgGCToGCPurchaseSucceeded = {
  encode(_: CMsgGCToGCPurchaseSucceeded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCPurchaseSucceeded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCPurchaseSucceeded();
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

function createBaseCMsgClientToGCGetLimitedItemPurchaseQuantity(): CMsgClientToGCGetLimitedItemPurchaseQuantity {
  return { itemDef: 0 };
}

export const CMsgClientToGCGetLimitedItemPurchaseQuantity = {
  encode(message: CMsgClientToGCGetLimitedItemPurchaseQuantity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemDef !== 0) {
      writer.uint32(8).uint32(message.itemDef);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetLimitedItemPurchaseQuantity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetLimitedItemPurchaseQuantity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemDef = reader.uint32();
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

function createBaseCMsgClientToGCGetLimitedItemPurchaseQuantityResponse(): CMsgClientToGCGetLimitedItemPurchaseQuantityResponse {
  return { result: 0, quantityPurchased: 0 };
}

export const CMsgClientToGCGetLimitedItemPurchaseQuantityResponse = {
  encode(
    message: CMsgClientToGCGetLimitedItemPurchaseQuantityResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.quantityPurchased !== 0) {
      writer.uint32(16).uint32(message.quantityPurchased);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetLimitedItemPurchaseQuantityResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetLimitedItemPurchaseQuantityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.quantityPurchased = reader.uint32();
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

function createBaseCMsgGCToGCUpdateWelcomeMsg(): CMsgGCToGCUpdateWelcomeMsg {
  return { server: false, newMsg: undefined, broadcast: false };
}

export const CMsgGCToGCUpdateWelcomeMsg = {
  encode(message: CMsgGCToGCUpdateWelcomeMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.server === true) {
      writer.uint32(8).bool(message.server);
    }
    if (message.newMsg !== undefined) {
      CExtraMsgBlock.encode(message.newMsg, writer.uint32(18).fork()).ldelim();
    }
    if (message.broadcast === true) {
      writer.uint32(24).bool(message.broadcast);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCUpdateWelcomeMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCUpdateWelcomeMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.server = reader.bool();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.newMsg = CExtraMsgBlock.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.broadcast = reader.bool();
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
