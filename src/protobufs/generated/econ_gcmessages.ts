/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { EGCMsgResponse, eGCMsgResponseFromJSON, eGCMsgResponseToJSON } from "./econ_shared_enums";
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

export function eGCItemMsgFromJSON(object: any): EGCItemMsg {
  switch (object) {
    case 1000:
    case "k_EMsgGCBase":
      return EGCItemMsg.k_EMsgGCBase;
    case 1001:
    case "k_EMsgGCSetItemPosition":
      return EGCItemMsg.k_EMsgGCSetItemPosition;
    case 1004:
    case "k_EMsgGCDelete":
      return EGCItemMsg.k_EMsgGCDelete;
    case 1005:
    case "k_EMsgGCVerifyCacheSubscription":
      return EGCItemMsg.k_EMsgGCVerifyCacheSubscription;
    case 1006:
    case "k_EMsgClientToGCNameItem":
      return EGCItemMsg.k_EMsgClientToGCNameItem;
    case 1009:
    case "k_EMsgGCPaintItem":
      return EGCItemMsg.k_EMsgGCPaintItem;
    case 1010:
    case "k_EMsgGCPaintItemResponse":
      return EGCItemMsg.k_EMsgGCPaintItemResponse;
    case 1019:
    case "k_EMsgGCNameBaseItem":
      return EGCItemMsg.k_EMsgGCNameBaseItem;
    case 1020:
    case "k_EMsgGCNameBaseItemResponse":
      return EGCItemMsg.k_EMsgGCNameBaseItemResponse;
    case 1025:
    case "k_EMsgGCUseItemRequest":
      return EGCItemMsg.k_EMsgGCUseItemRequest;
    case 1026:
    case "k_EMsgGCUseItemResponse":
      return EGCItemMsg.k_EMsgGCUseItemResponse;
    case 1027:
    case "k_EMsgGCGiftedItems":
      return EGCItemMsg.k_EMsgGCGiftedItems;
    case 1037:
    case "k_EMsgGCUnwrapGiftRequest":
      return EGCItemMsg.k_EMsgGCUnwrapGiftRequest;
    case 1038:
    case "k_EMsgGCUnwrapGiftResponse":
      return EGCItemMsg.k_EMsgGCUnwrapGiftResponse;
    case 1041:
    case "k_EMsgGCSortItems":
      return EGCItemMsg.k_EMsgGCSortItems;
    case 1058:
    case "k_EMsgGCBackpackSortFinished":
      return EGCItemMsg.k_EMsgGCBackpackSortFinished;
    case 1059:
    case "k_EMsgGCAdjustItemEquippedState":
      return EGCItemMsg.k_EMsgGCAdjustItemEquippedState;
    case 1062:
    case "k_EMsgGCItemAcknowledged":
      return EGCItemMsg.k_EMsgGCItemAcknowledged;
    case 1068:
    case "k_EMsgClientToGCNameItemResponse":
      return EGCItemMsg.k_EMsgClientToGCNameItemResponse;
    case 1073:
    case "k_EMsgGCApplyStrangePart":
      return EGCItemMsg.k_EMsgGCApplyStrangePart;
    case 1076:
    case "k_EMsgGCApplyPennantUpgrade":
      return EGCItemMsg.k_EMsgGCApplyPennantUpgrade;
    case 1077:
    case "k_EMsgGCSetItemPositions":
      return EGCItemMsg.k_EMsgGCSetItemPositions;
    case 1078:
    case "k_EMsgGCApplyEggEssence":
      return EGCItemMsg.k_EMsgGCApplyEggEssence;
    case 1079:
    case "k_EMsgGCNameEggEssenceResponse":
      return EGCItemMsg.k_EMsgGCNameEggEssenceResponse;
    case 1086:
    case "k_EMsgGCExtractGems":
      return EGCItemMsg.k_EMsgGCExtractGems;
    case 1087:
    case "k_EMsgGCAddSocket":
      return EGCItemMsg.k_EMsgGCAddSocket;
    case 1088:
    case "k_EMsgGCAddItemToSocket":
      return EGCItemMsg.k_EMsgGCAddItemToSocket;
    case 1089:
    case "k_EMsgGCAddItemToSocketResponse":
      return EGCItemMsg.k_EMsgGCAddItemToSocketResponse;
    case 1090:
    case "k_EMsgGCAddSocketResponse":
      return EGCItemMsg.k_EMsgGCAddSocketResponse;
    case 1091:
    case "k_EMsgGCResetStrangeGemCount":
      return EGCItemMsg.k_EMsgGCResetStrangeGemCount;
    case 1092:
    case "k_EMsgGCRequestCrateItems":
      return EGCItemMsg.k_EMsgGCRequestCrateItems;
    case 1093:
    case "k_EMsgGCRequestCrateItemsResponse":
      return EGCItemMsg.k_EMsgGCRequestCrateItemsResponse;
    case 1094:
    case "k_EMsgGCExtractGemsResponse":
      return EGCItemMsg.k_EMsgGCExtractGemsResponse;
    case 1095:
    case "k_EMsgGCResetStrangeGemCountResponse":
      return EGCItemMsg.k_EMsgGCResetStrangeGemCountResponse;
    case 1103:
    case "k_EMsgGCServerUseItemRequest":
      return EGCItemMsg.k_EMsgGCServerUseItemRequest;
    case 1104:
    case "k_EMsgGCAddGiftItem":
      return EGCItemMsg.k_EMsgGCAddGiftItem;
    case 1109:
    case "k_EMsgClientToGCRemoveItemGifterAttributes":
      return EGCItemMsg.k_EMsgClientToGCRemoveItemGifterAttributes;
    case 1110:
    case "k_EMsgClientToGCRemoveItemName":
      return EGCItemMsg.k_EMsgClientToGCRemoveItemName;
    case 1111:
    case "k_EMsgClientToGCRemoveItemDescription":
      return EGCItemMsg.k_EMsgClientToGCRemoveItemDescription;
    case 1112:
    case "k_EMsgClientToGCRemoveItemAttributeResponse":
      return EGCItemMsg.k_EMsgClientToGCRemoveItemAttributeResponse;
    case 2001:
    case "k_EMsgGCDev_NewItemRequest":
      return EGCItemMsg.k_EMsgGCDev_NewItemRequest;
    case 2002:
    case "k_EMsgGCDev_NewItemRequestResponse":
      return EGCItemMsg.k_EMsgGCDev_NewItemRequestResponse;
    case 2003:
    case "k_EMsgGCDev_UnlockAllItemStylesRequest":
      return EGCItemMsg.k_EMsgGCDev_UnlockAllItemStylesRequest;
    case 2004:
    case "k_EMsgGCDev_UnlockAllItemStylesResponse":
      return EGCItemMsg.k_EMsgGCDev_UnlockAllItemStylesResponse;
    case 2504:
    case "k_EMsgGCStorePurchaseFinalize":
      return EGCItemMsg.k_EMsgGCStorePurchaseFinalize;
    case 2505:
    case "k_EMsgGCStorePurchaseFinalizeResponse":
      return EGCItemMsg.k_EMsgGCStorePurchaseFinalizeResponse;
    case 2506:
    case "k_EMsgGCStorePurchaseCancel":
      return EGCItemMsg.k_EMsgGCStorePurchaseCancel;
    case 2507:
    case "k_EMsgGCStorePurchaseCancelResponse":
      return EGCItemMsg.k_EMsgGCStorePurchaseCancelResponse;
    case 2510:
    case "k_EMsgGCStorePurchaseInit":
      return EGCItemMsg.k_EMsgGCStorePurchaseInit;
    case 2511:
    case "k_EMsgGCStorePurchaseInitResponse":
      return EGCItemMsg.k_EMsgGCStorePurchaseInitResponse;
    case 2515:
    case "k_EMsgGCToGCBannedWordListUpdated":
      return EGCItemMsg.k_EMsgGCToGCBannedWordListUpdated;
    case 2516:
    case "k_EMsgGCToGCDirtySDOCache":
      return EGCItemMsg.k_EMsgGCToGCDirtySDOCache;
    case 2518:
    case "k_EMsgGCToGCUpdateSQLKeyValue":
      return EGCItemMsg.k_EMsgGCToGCUpdateSQLKeyValue;
    case 2521:
    case "k_EMsgGCToGCBroadcastConsoleCommand":
      return EGCItemMsg.k_EMsgGCToGCBroadcastConsoleCommand;
    case 2522:
    case "k_EMsgGCServerVersionUpdated":
      return EGCItemMsg.k_EMsgGCServerVersionUpdated;
    case 2523:
    case "k_EMsgGCApplyAutograph":
      return EGCItemMsg.k_EMsgGCApplyAutograph;
    case 2524:
    case "k_EMsgGCToGCWebAPIAccountChanged":
      return EGCItemMsg.k_EMsgGCToGCWebAPIAccountChanged;
    case 2528:
    case "k_EMsgGCClientVersionUpdated":
      return EGCItemMsg.k_EMsgGCClientVersionUpdated;
    case 2529:
    case "k_EMsgGCToGCUpdateWelcomeMsg":
      return EGCItemMsg.k_EMsgGCToGCUpdateWelcomeMsg;
    case 2535:
    case "k_EMsgGCToGCPlayerStrangeCountAdjustments":
      return EGCItemMsg.k_EMsgGCToGCPlayerStrangeCountAdjustments;
    case 2536:
    case "k_EMsgGCRequestStoreSalesData":
      return EGCItemMsg.k_EMsgGCRequestStoreSalesData;
    case 2537:
    case "k_EMsgGCRequestStoreSalesDataResponse":
      return EGCItemMsg.k_EMsgGCRequestStoreSalesDataResponse;
    case 2538:
    case "k_EMsgGCRequestStoreSalesDataUpToDateResponse":
      return EGCItemMsg.k_EMsgGCRequestStoreSalesDataUpToDateResponse;
    case 2539:
    case "k_EMsgGCToGCPingRequest":
      return EGCItemMsg.k_EMsgGCToGCPingRequest;
    case 2540:
    case "k_EMsgGCToGCPingResponse":
      return EGCItemMsg.k_EMsgGCToGCPingResponse;
    case 2541:
    case "k_EMsgGCToGCGetUserSessionServer":
      return EGCItemMsg.k_EMsgGCToGCGetUserSessionServer;
    case 2542:
    case "k_EMsgGCToGCGetUserSessionServerResponse":
      return EGCItemMsg.k_EMsgGCToGCGetUserSessionServerResponse;
    case 2543:
    case "k_EMsgGCToGCGetUserServerMembers":
      return EGCItemMsg.k_EMsgGCToGCGetUserServerMembers;
    case 2544:
    case "k_EMsgGCToGCGetUserServerMembersResponse":
      return EGCItemMsg.k_EMsgGCToGCGetUserServerMembersResponse;
    case 2547:
    case "k_EMsgGCToGCCanUseDropRateBonus":
      return EGCItemMsg.k_EMsgGCToGCCanUseDropRateBonus;
    case 2548:
    case "k_EMsgSQLAddDropRateBonus":
      return EGCItemMsg.k_EMsgSQLAddDropRateBonus;
    case 2549:
    case "k_EMsgGCToGCRefreshSOCache":
      return EGCItemMsg.k_EMsgGCToGCRefreshSOCache;
    case 2554:
    case "k_EMsgGCToGCGrantAccountRolledItems":
      return EGCItemMsg.k_EMsgGCToGCGrantAccountRolledItems;
    case 2555:
    case "k_EMsgGCToGCGrantSelfMadeItemToAccount":
      return EGCItemMsg.k_EMsgGCToGCGrantSelfMadeItemToAccount;
    case 2561:
    case "k_EMsgGCStatueCraft":
      return EGCItemMsg.k_EMsgGCStatueCraft;
    case 2562:
    case "k_EMsgGCRedeemCode":
      return EGCItemMsg.k_EMsgGCRedeemCode;
    case 2563:
    case "k_EMsgGCRedeemCodeResponse":
      return EGCItemMsg.k_EMsgGCRedeemCodeResponse;
    case 2564:
    case "k_EMsgGCToGCItemConsumptionRollback":
      return EGCItemMsg.k_EMsgGCToGCItemConsumptionRollback;
    case 2565:
    case "k_EMsgClientToGCWrapAndDeliverGift":
      return EGCItemMsg.k_EMsgClientToGCWrapAndDeliverGift;
    case 2566:
    case "k_EMsgClientToGCWrapAndDeliverGiftResponse":
      return EGCItemMsg.k_EMsgClientToGCWrapAndDeliverGiftResponse;
    case 2567:
    case "k_EMsgClientToGCUnpackBundleResponse":
      return EGCItemMsg.k_EMsgClientToGCUnpackBundleResponse;
    case 2568:
    case "k_EMsgGCToClientStoreTransactionCompleted":
      return EGCItemMsg.k_EMsgGCToClientStoreTransactionCompleted;
    case 2569:
    case "k_EMsgClientToGCEquipItems":
      return EGCItemMsg.k_EMsgClientToGCEquipItems;
    case 2570:
    case "k_EMsgClientToGCEquipItemsResponse":
      return EGCItemMsg.k_EMsgClientToGCEquipItemsResponse;
    case 2571:
    case "k_EMsgClientToGCUnlockItemStyle":
      return EGCItemMsg.k_EMsgClientToGCUnlockItemStyle;
    case 2572:
    case "k_EMsgClientToGCUnlockItemStyleResponse":
      return EGCItemMsg.k_EMsgClientToGCUnlockItemStyleResponse;
    case 2573:
    case "k_EMsgClientToGCSetItemInventoryCategory":
      return EGCItemMsg.k_EMsgClientToGCSetItemInventoryCategory;
    case 2574:
    case "k_EMsgClientToGCUnlockCrate":
      return EGCItemMsg.k_EMsgClientToGCUnlockCrate;
    case 2575:
    case "k_EMsgClientToGCUnlockCrateResponse":
      return EGCItemMsg.k_EMsgClientToGCUnlockCrateResponse;
    case 2576:
    case "k_EMsgClientToGCUnpackBundle":
      return EGCItemMsg.k_EMsgClientToGCUnpackBundle;
    case 2577:
    case "k_EMsgClientToGCSetItemStyle":
      return EGCItemMsg.k_EMsgClientToGCSetItemStyle;
    case 2578:
    case "k_EMsgClientToGCSetItemStyleResponse":
      return EGCItemMsg.k_EMsgClientToGCSetItemStyleResponse;
    case 2580:
    case "k_EMsgSQLGCToGCGrantBackpackSlots":
      return EGCItemMsg.k_EMsgSQLGCToGCGrantBackpackSlots;
    case 2581:
    case "k_EMsgClientToGCLookupAccountName":
      return EGCItemMsg.k_EMsgClientToGCLookupAccountName;
    case 2582:
    case "k_EMsgClientToGCLookupAccountNameResponse":
      return EGCItemMsg.k_EMsgClientToGCLookupAccountNameResponse;
    case 2584:
    case "k_EMsgClientToGCCreateStaticRecipe":
      return EGCItemMsg.k_EMsgClientToGCCreateStaticRecipe;
    case 2585:
    case "k_EMsgClientToGCCreateStaticRecipeResponse":
      return EGCItemMsg.k_EMsgClientToGCCreateStaticRecipeResponse;
    case 2586:
    case "k_EMsgGCToGCStoreProcessCDKeyTransaction":
      return EGCItemMsg.k_EMsgGCToGCStoreProcessCDKeyTransaction;
    case 2587:
    case "k_EMsgGCToGCStoreProcessCDKeyTransactionResponse":
      return EGCItemMsg.k_EMsgGCToGCStoreProcessCDKeyTransactionResponse;
    case 2588:
    case "k_EMsgGCToGCStoreProcessSettlement":
      return EGCItemMsg.k_EMsgGCToGCStoreProcessSettlement;
    case 2589:
    case "k_EMsgGCToGCStoreProcessSettlementResponse":
      return EGCItemMsg.k_EMsgGCToGCStoreProcessSettlementResponse;
    case 2590:
    case "k_EMsgGCToGCConsoleOutput":
      return EGCItemMsg.k_EMsgGCToGCConsoleOutput;
    case 2591:
    case "k_EMsgGCToClientItemAges":
      return EGCItemMsg.k_EMsgGCToClientItemAges;
    case 2592:
    case "k_EMsgGCToGCInternalTestMsg":
      return EGCItemMsg.k_EMsgGCToGCInternalTestMsg;
    case 2593:
    case "k_EMsgGCToGCClientServerVersionsUpdated":
      return EGCItemMsg.k_EMsgGCToGCClientServerVersionsUpdated;
    case 2594:
    case "k_EMsgGCUseMultipleItemsRequest":
      return EGCItemMsg.k_EMsgGCUseMultipleItemsRequest;
    case 2595:
    case "k_EMsgGCGetAccountSubscriptionItem":
      return EGCItemMsg.k_EMsgGCGetAccountSubscriptionItem;
    case 2596:
    case "k_EMsgGCGetAccountSubscriptionItemResponse":
      return EGCItemMsg.k_EMsgGCGetAccountSubscriptionItemResponse;
    case 2598:
    case "k_EMsgGCToGCBroadcastMessageFromSub":
      return EGCItemMsg.k_EMsgGCToGCBroadcastMessageFromSub;
    case 2599:
    case "k_EMsgGCToClientCurrencyPricePoints":
      return EGCItemMsg.k_EMsgGCToClientCurrencyPricePoints;
    case 2600:
    case "k_EMsgGCToGCAddSubscriptionTime":
      return EGCItemMsg.k_EMsgGCToGCAddSubscriptionTime;
    case 2601:
    case "k_EMsgGCToGCFlushSteamInventoryCache":
      return EGCItemMsg.k_EMsgGCToGCFlushSteamInventoryCache;
    case 2602:
    case "k_EMsgGCRequestCrateEscalationLevel":
      return EGCItemMsg.k_EMsgGCRequestCrateEscalationLevel;
    case 2603:
    case "k_EMsgGCRequestCrateEscalationLevelResponse":
      return EGCItemMsg.k_EMsgGCRequestCrateEscalationLevelResponse;
    case 2604:
    case "k_EMsgGCToGCUpdateSubscriptionItems":
      return EGCItemMsg.k_EMsgGCToGCUpdateSubscriptionItems;
    case 2605:
    case "k_EMsgGCToGCSelfPing":
      return EGCItemMsg.k_EMsgGCToGCSelfPing;
    case 2606:
    case "k_EMsgGCToGCGetInfuxIntervalStats":
      return EGCItemMsg.k_EMsgGCToGCGetInfuxIntervalStats;
    case 2607:
    case "k_EMsgGCToGCGetInfuxIntervalStatsResponse":
      return EGCItemMsg.k_EMsgGCToGCGetInfuxIntervalStatsResponse;
    case 2608:
    case "k_EMsgGCToGCPurchaseSucceeded":
      return EGCItemMsg.k_EMsgGCToGCPurchaseSucceeded;
    case 2609:
    case "k_EMsgClientToGCGetLimitedItemPurchaseQuantity":
      return EGCItemMsg.k_EMsgClientToGCGetLimitedItemPurchaseQuantity;
    case 2610:
    case "k_EMsgClientToGCGetLimitedItemPurchaseQuantityResponse":
      return EGCItemMsg.k_EMsgClientToGCGetLimitedItemPurchaseQuantityResponse;
    case 2611:
    case "k_EMsgGCToGCBetaDeleteItems":
      return EGCItemMsg.k_EMsgGCToGCBetaDeleteItems;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EGCItemMsg");
  }
}

export function eGCItemMsgToJSON(object: EGCItemMsg): string {
  switch (object) {
    case EGCItemMsg.k_EMsgGCBase:
      return "k_EMsgGCBase";
    case EGCItemMsg.k_EMsgGCSetItemPosition:
      return "k_EMsgGCSetItemPosition";
    case EGCItemMsg.k_EMsgGCDelete:
      return "k_EMsgGCDelete";
    case EGCItemMsg.k_EMsgGCVerifyCacheSubscription:
      return "k_EMsgGCVerifyCacheSubscription";
    case EGCItemMsg.k_EMsgClientToGCNameItem:
      return "k_EMsgClientToGCNameItem";
    case EGCItemMsg.k_EMsgGCPaintItem:
      return "k_EMsgGCPaintItem";
    case EGCItemMsg.k_EMsgGCPaintItemResponse:
      return "k_EMsgGCPaintItemResponse";
    case EGCItemMsg.k_EMsgGCNameBaseItem:
      return "k_EMsgGCNameBaseItem";
    case EGCItemMsg.k_EMsgGCNameBaseItemResponse:
      return "k_EMsgGCNameBaseItemResponse";
    case EGCItemMsg.k_EMsgGCUseItemRequest:
      return "k_EMsgGCUseItemRequest";
    case EGCItemMsg.k_EMsgGCUseItemResponse:
      return "k_EMsgGCUseItemResponse";
    case EGCItemMsg.k_EMsgGCGiftedItems:
      return "k_EMsgGCGiftedItems";
    case EGCItemMsg.k_EMsgGCUnwrapGiftRequest:
      return "k_EMsgGCUnwrapGiftRequest";
    case EGCItemMsg.k_EMsgGCUnwrapGiftResponse:
      return "k_EMsgGCUnwrapGiftResponse";
    case EGCItemMsg.k_EMsgGCSortItems:
      return "k_EMsgGCSortItems";
    case EGCItemMsg.k_EMsgGCBackpackSortFinished:
      return "k_EMsgGCBackpackSortFinished";
    case EGCItemMsg.k_EMsgGCAdjustItemEquippedState:
      return "k_EMsgGCAdjustItemEquippedState";
    case EGCItemMsg.k_EMsgGCItemAcknowledged:
      return "k_EMsgGCItemAcknowledged";
    case EGCItemMsg.k_EMsgClientToGCNameItemResponse:
      return "k_EMsgClientToGCNameItemResponse";
    case EGCItemMsg.k_EMsgGCApplyStrangePart:
      return "k_EMsgGCApplyStrangePart";
    case EGCItemMsg.k_EMsgGCApplyPennantUpgrade:
      return "k_EMsgGCApplyPennantUpgrade";
    case EGCItemMsg.k_EMsgGCSetItemPositions:
      return "k_EMsgGCSetItemPositions";
    case EGCItemMsg.k_EMsgGCApplyEggEssence:
      return "k_EMsgGCApplyEggEssence";
    case EGCItemMsg.k_EMsgGCNameEggEssenceResponse:
      return "k_EMsgGCNameEggEssenceResponse";
    case EGCItemMsg.k_EMsgGCExtractGems:
      return "k_EMsgGCExtractGems";
    case EGCItemMsg.k_EMsgGCAddSocket:
      return "k_EMsgGCAddSocket";
    case EGCItemMsg.k_EMsgGCAddItemToSocket:
      return "k_EMsgGCAddItemToSocket";
    case EGCItemMsg.k_EMsgGCAddItemToSocketResponse:
      return "k_EMsgGCAddItemToSocketResponse";
    case EGCItemMsg.k_EMsgGCAddSocketResponse:
      return "k_EMsgGCAddSocketResponse";
    case EGCItemMsg.k_EMsgGCResetStrangeGemCount:
      return "k_EMsgGCResetStrangeGemCount";
    case EGCItemMsg.k_EMsgGCRequestCrateItems:
      return "k_EMsgGCRequestCrateItems";
    case EGCItemMsg.k_EMsgGCRequestCrateItemsResponse:
      return "k_EMsgGCRequestCrateItemsResponse";
    case EGCItemMsg.k_EMsgGCExtractGemsResponse:
      return "k_EMsgGCExtractGemsResponse";
    case EGCItemMsg.k_EMsgGCResetStrangeGemCountResponse:
      return "k_EMsgGCResetStrangeGemCountResponse";
    case EGCItemMsg.k_EMsgGCServerUseItemRequest:
      return "k_EMsgGCServerUseItemRequest";
    case EGCItemMsg.k_EMsgGCAddGiftItem:
      return "k_EMsgGCAddGiftItem";
    case EGCItemMsg.k_EMsgClientToGCRemoveItemGifterAttributes:
      return "k_EMsgClientToGCRemoveItemGifterAttributes";
    case EGCItemMsg.k_EMsgClientToGCRemoveItemName:
      return "k_EMsgClientToGCRemoveItemName";
    case EGCItemMsg.k_EMsgClientToGCRemoveItemDescription:
      return "k_EMsgClientToGCRemoveItemDescription";
    case EGCItemMsg.k_EMsgClientToGCRemoveItemAttributeResponse:
      return "k_EMsgClientToGCRemoveItemAttributeResponse";
    case EGCItemMsg.k_EMsgGCDev_NewItemRequest:
      return "k_EMsgGCDev_NewItemRequest";
    case EGCItemMsg.k_EMsgGCDev_NewItemRequestResponse:
      return "k_EMsgGCDev_NewItemRequestResponse";
    case EGCItemMsg.k_EMsgGCDev_UnlockAllItemStylesRequest:
      return "k_EMsgGCDev_UnlockAllItemStylesRequest";
    case EGCItemMsg.k_EMsgGCDev_UnlockAllItemStylesResponse:
      return "k_EMsgGCDev_UnlockAllItemStylesResponse";
    case EGCItemMsg.k_EMsgGCStorePurchaseFinalize:
      return "k_EMsgGCStorePurchaseFinalize";
    case EGCItemMsg.k_EMsgGCStorePurchaseFinalizeResponse:
      return "k_EMsgGCStorePurchaseFinalizeResponse";
    case EGCItemMsg.k_EMsgGCStorePurchaseCancel:
      return "k_EMsgGCStorePurchaseCancel";
    case EGCItemMsg.k_EMsgGCStorePurchaseCancelResponse:
      return "k_EMsgGCStorePurchaseCancelResponse";
    case EGCItemMsg.k_EMsgGCStorePurchaseInit:
      return "k_EMsgGCStorePurchaseInit";
    case EGCItemMsg.k_EMsgGCStorePurchaseInitResponse:
      return "k_EMsgGCStorePurchaseInitResponse";
    case EGCItemMsg.k_EMsgGCToGCBannedWordListUpdated:
      return "k_EMsgGCToGCBannedWordListUpdated";
    case EGCItemMsg.k_EMsgGCToGCDirtySDOCache:
      return "k_EMsgGCToGCDirtySDOCache";
    case EGCItemMsg.k_EMsgGCToGCUpdateSQLKeyValue:
      return "k_EMsgGCToGCUpdateSQLKeyValue";
    case EGCItemMsg.k_EMsgGCToGCBroadcastConsoleCommand:
      return "k_EMsgGCToGCBroadcastConsoleCommand";
    case EGCItemMsg.k_EMsgGCServerVersionUpdated:
      return "k_EMsgGCServerVersionUpdated";
    case EGCItemMsg.k_EMsgGCApplyAutograph:
      return "k_EMsgGCApplyAutograph";
    case EGCItemMsg.k_EMsgGCToGCWebAPIAccountChanged:
      return "k_EMsgGCToGCWebAPIAccountChanged";
    case EGCItemMsg.k_EMsgGCClientVersionUpdated:
      return "k_EMsgGCClientVersionUpdated";
    case EGCItemMsg.k_EMsgGCToGCUpdateWelcomeMsg:
      return "k_EMsgGCToGCUpdateWelcomeMsg";
    case EGCItemMsg.k_EMsgGCToGCPlayerStrangeCountAdjustments:
      return "k_EMsgGCToGCPlayerStrangeCountAdjustments";
    case EGCItemMsg.k_EMsgGCRequestStoreSalesData:
      return "k_EMsgGCRequestStoreSalesData";
    case EGCItemMsg.k_EMsgGCRequestStoreSalesDataResponse:
      return "k_EMsgGCRequestStoreSalesDataResponse";
    case EGCItemMsg.k_EMsgGCRequestStoreSalesDataUpToDateResponse:
      return "k_EMsgGCRequestStoreSalesDataUpToDateResponse";
    case EGCItemMsg.k_EMsgGCToGCPingRequest:
      return "k_EMsgGCToGCPingRequest";
    case EGCItemMsg.k_EMsgGCToGCPingResponse:
      return "k_EMsgGCToGCPingResponse";
    case EGCItemMsg.k_EMsgGCToGCGetUserSessionServer:
      return "k_EMsgGCToGCGetUserSessionServer";
    case EGCItemMsg.k_EMsgGCToGCGetUserSessionServerResponse:
      return "k_EMsgGCToGCGetUserSessionServerResponse";
    case EGCItemMsg.k_EMsgGCToGCGetUserServerMembers:
      return "k_EMsgGCToGCGetUserServerMembers";
    case EGCItemMsg.k_EMsgGCToGCGetUserServerMembersResponse:
      return "k_EMsgGCToGCGetUserServerMembersResponse";
    case EGCItemMsg.k_EMsgGCToGCCanUseDropRateBonus:
      return "k_EMsgGCToGCCanUseDropRateBonus";
    case EGCItemMsg.k_EMsgSQLAddDropRateBonus:
      return "k_EMsgSQLAddDropRateBonus";
    case EGCItemMsg.k_EMsgGCToGCRefreshSOCache:
      return "k_EMsgGCToGCRefreshSOCache";
    case EGCItemMsg.k_EMsgGCToGCGrantAccountRolledItems:
      return "k_EMsgGCToGCGrantAccountRolledItems";
    case EGCItemMsg.k_EMsgGCToGCGrantSelfMadeItemToAccount:
      return "k_EMsgGCToGCGrantSelfMadeItemToAccount";
    case EGCItemMsg.k_EMsgGCStatueCraft:
      return "k_EMsgGCStatueCraft";
    case EGCItemMsg.k_EMsgGCRedeemCode:
      return "k_EMsgGCRedeemCode";
    case EGCItemMsg.k_EMsgGCRedeemCodeResponse:
      return "k_EMsgGCRedeemCodeResponse";
    case EGCItemMsg.k_EMsgGCToGCItemConsumptionRollback:
      return "k_EMsgGCToGCItemConsumptionRollback";
    case EGCItemMsg.k_EMsgClientToGCWrapAndDeliverGift:
      return "k_EMsgClientToGCWrapAndDeliverGift";
    case EGCItemMsg.k_EMsgClientToGCWrapAndDeliverGiftResponse:
      return "k_EMsgClientToGCWrapAndDeliverGiftResponse";
    case EGCItemMsg.k_EMsgClientToGCUnpackBundleResponse:
      return "k_EMsgClientToGCUnpackBundleResponse";
    case EGCItemMsg.k_EMsgGCToClientStoreTransactionCompleted:
      return "k_EMsgGCToClientStoreTransactionCompleted";
    case EGCItemMsg.k_EMsgClientToGCEquipItems:
      return "k_EMsgClientToGCEquipItems";
    case EGCItemMsg.k_EMsgClientToGCEquipItemsResponse:
      return "k_EMsgClientToGCEquipItemsResponse";
    case EGCItemMsg.k_EMsgClientToGCUnlockItemStyle:
      return "k_EMsgClientToGCUnlockItemStyle";
    case EGCItemMsg.k_EMsgClientToGCUnlockItemStyleResponse:
      return "k_EMsgClientToGCUnlockItemStyleResponse";
    case EGCItemMsg.k_EMsgClientToGCSetItemInventoryCategory:
      return "k_EMsgClientToGCSetItemInventoryCategory";
    case EGCItemMsg.k_EMsgClientToGCUnlockCrate:
      return "k_EMsgClientToGCUnlockCrate";
    case EGCItemMsg.k_EMsgClientToGCUnlockCrateResponse:
      return "k_EMsgClientToGCUnlockCrateResponse";
    case EGCItemMsg.k_EMsgClientToGCUnpackBundle:
      return "k_EMsgClientToGCUnpackBundle";
    case EGCItemMsg.k_EMsgClientToGCSetItemStyle:
      return "k_EMsgClientToGCSetItemStyle";
    case EGCItemMsg.k_EMsgClientToGCSetItemStyleResponse:
      return "k_EMsgClientToGCSetItemStyleResponse";
    case EGCItemMsg.k_EMsgSQLGCToGCGrantBackpackSlots:
      return "k_EMsgSQLGCToGCGrantBackpackSlots";
    case EGCItemMsg.k_EMsgClientToGCLookupAccountName:
      return "k_EMsgClientToGCLookupAccountName";
    case EGCItemMsg.k_EMsgClientToGCLookupAccountNameResponse:
      return "k_EMsgClientToGCLookupAccountNameResponse";
    case EGCItemMsg.k_EMsgClientToGCCreateStaticRecipe:
      return "k_EMsgClientToGCCreateStaticRecipe";
    case EGCItemMsg.k_EMsgClientToGCCreateStaticRecipeResponse:
      return "k_EMsgClientToGCCreateStaticRecipeResponse";
    case EGCItemMsg.k_EMsgGCToGCStoreProcessCDKeyTransaction:
      return "k_EMsgGCToGCStoreProcessCDKeyTransaction";
    case EGCItemMsg.k_EMsgGCToGCStoreProcessCDKeyTransactionResponse:
      return "k_EMsgGCToGCStoreProcessCDKeyTransactionResponse";
    case EGCItemMsg.k_EMsgGCToGCStoreProcessSettlement:
      return "k_EMsgGCToGCStoreProcessSettlement";
    case EGCItemMsg.k_EMsgGCToGCStoreProcessSettlementResponse:
      return "k_EMsgGCToGCStoreProcessSettlementResponse";
    case EGCItemMsg.k_EMsgGCToGCConsoleOutput:
      return "k_EMsgGCToGCConsoleOutput";
    case EGCItemMsg.k_EMsgGCToClientItemAges:
      return "k_EMsgGCToClientItemAges";
    case EGCItemMsg.k_EMsgGCToGCInternalTestMsg:
      return "k_EMsgGCToGCInternalTestMsg";
    case EGCItemMsg.k_EMsgGCToGCClientServerVersionsUpdated:
      return "k_EMsgGCToGCClientServerVersionsUpdated";
    case EGCItemMsg.k_EMsgGCUseMultipleItemsRequest:
      return "k_EMsgGCUseMultipleItemsRequest";
    case EGCItemMsg.k_EMsgGCGetAccountSubscriptionItem:
      return "k_EMsgGCGetAccountSubscriptionItem";
    case EGCItemMsg.k_EMsgGCGetAccountSubscriptionItemResponse:
      return "k_EMsgGCGetAccountSubscriptionItemResponse";
    case EGCItemMsg.k_EMsgGCToGCBroadcastMessageFromSub:
      return "k_EMsgGCToGCBroadcastMessageFromSub";
    case EGCItemMsg.k_EMsgGCToClientCurrencyPricePoints:
      return "k_EMsgGCToClientCurrencyPricePoints";
    case EGCItemMsg.k_EMsgGCToGCAddSubscriptionTime:
      return "k_EMsgGCToGCAddSubscriptionTime";
    case EGCItemMsg.k_EMsgGCToGCFlushSteamInventoryCache:
      return "k_EMsgGCToGCFlushSteamInventoryCache";
    case EGCItemMsg.k_EMsgGCRequestCrateEscalationLevel:
      return "k_EMsgGCRequestCrateEscalationLevel";
    case EGCItemMsg.k_EMsgGCRequestCrateEscalationLevelResponse:
      return "k_EMsgGCRequestCrateEscalationLevelResponse";
    case EGCItemMsg.k_EMsgGCToGCUpdateSubscriptionItems:
      return "k_EMsgGCToGCUpdateSubscriptionItems";
    case EGCItemMsg.k_EMsgGCToGCSelfPing:
      return "k_EMsgGCToGCSelfPing";
    case EGCItemMsg.k_EMsgGCToGCGetInfuxIntervalStats:
      return "k_EMsgGCToGCGetInfuxIntervalStats";
    case EGCItemMsg.k_EMsgGCToGCGetInfuxIntervalStatsResponse:
      return "k_EMsgGCToGCGetInfuxIntervalStatsResponse";
    case EGCItemMsg.k_EMsgGCToGCPurchaseSucceeded:
      return "k_EMsgGCToGCPurchaseSucceeded";
    case EGCItemMsg.k_EMsgClientToGCGetLimitedItemPurchaseQuantity:
      return "k_EMsgClientToGCGetLimitedItemPurchaseQuantity";
    case EGCItemMsg.k_EMsgClientToGCGetLimitedItemPurchaseQuantityResponse:
      return "k_EMsgClientToGCGetLimitedItemPurchaseQuantityResponse";
    case EGCItemMsg.k_EMsgGCToGCBetaDeleteItems:
      return "k_EMsgGCToGCBetaDeleteItems";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EGCItemMsg");
  }
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

export function eGCMsgInitiateTradeResponseFromJSON(object: any): EGCMsgInitiateTradeResponse {
  switch (object) {
    case 0:
    case "k_EGCMsgInitiateTradeResponse_Accepted":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Accepted;
    case 1:
    case "k_EGCMsgInitiateTradeResponse_Declined":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Declined;
    case 2:
    case "k_EGCMsgInitiateTradeResponse_VAC_Banned_Initiator":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_VAC_Banned_Initiator;
    case 3:
    case "k_EGCMsgInitiateTradeResponse_VAC_Banned_Target":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_VAC_Banned_Target;
    case 4:
    case "k_EGCMsgInitiateTradeResponse_Target_Already_Trading":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Target_Already_Trading;
    case 5:
    case "k_EGCMsgInitiateTradeResponse_Disabled":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Disabled;
    case 6:
    case "k_EGCMsgInitiateTradeResponse_NotLoggedIn":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_NotLoggedIn;
    case 7:
    case "k_EGCMsgInitiateTradeResponse_Cancel":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Cancel;
    case 8:
    case "k_EGCMsgInitiateTradeResponse_TooSoon":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_TooSoon;
    case 9:
    case "k_EGCMsgInitiateTradeResponse_TooSoonPenalty":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_TooSoonPenalty;
    case 10:
    case "k_EGCMsgInitiateTradeResponse_Trade_Banned_Initiator":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Trade_Banned_Initiator;
    case 11:
    case "k_EGCMsgInitiateTradeResponse_Trade_Banned_Target":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Trade_Banned_Target;
    case 12:
    case "k_EGCMsgInitiateTradeResponse_Free_Account_Initiator_DEPRECATED":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Free_Account_Initiator_DEPRECATED;
    case 13:
    case "k_EGCMsgInitiateTradeResponse_Shared_Account_Initiator":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Shared_Account_Initiator;
    case 14:
    case "k_EGCMsgInitiateTradeResponse_Service_Unavailable":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Service_Unavailable;
    case 15:
    case "k_EGCMsgInitiateTradeResponse_Target_Blocked":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Target_Blocked;
    case 16:
    case "k_EGCMsgInitiateTradeResponse_NeedVerifiedEmail":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_NeedVerifiedEmail;
    case 17:
    case "k_EGCMsgInitiateTradeResponse_NeedSteamGuard":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_NeedSteamGuard;
    case 18:
    case "k_EGCMsgInitiateTradeResponse_SteamGuardDuration":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_SteamGuardDuration;
    case 19:
    case "k_EGCMsgInitiateTradeResponse_TheyCannotTrade":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_TheyCannotTrade;
    case 20:
    case "k_EGCMsgInitiateTradeResponse_Recent_Password_Reset":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Recent_Password_Reset;
    case 21:
    case "k_EGCMsgInitiateTradeResponse_Using_New_Device":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Using_New_Device;
    case 22:
    case "k_EGCMsgInitiateTradeResponse_Sent_Invalid_Cookie":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Sent_Invalid_Cookie;
    case 23:
    case "k_EGCMsgInitiateTradeResponse_TooRecentFriend":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_TooRecentFriend;
    case 24:
    case "k_EGCMsgInitiateTradeResponse_WalledFundsNotTrusted":
      return EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_WalledFundsNotTrusted;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EGCMsgInitiateTradeResponse");
  }
}

export function eGCMsgInitiateTradeResponseToJSON(object: EGCMsgInitiateTradeResponse): string {
  switch (object) {
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Accepted:
      return "k_EGCMsgInitiateTradeResponse_Accepted";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Declined:
      return "k_EGCMsgInitiateTradeResponse_Declined";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_VAC_Banned_Initiator:
      return "k_EGCMsgInitiateTradeResponse_VAC_Banned_Initiator";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_VAC_Banned_Target:
      return "k_EGCMsgInitiateTradeResponse_VAC_Banned_Target";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Target_Already_Trading:
      return "k_EGCMsgInitiateTradeResponse_Target_Already_Trading";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Disabled:
      return "k_EGCMsgInitiateTradeResponse_Disabled";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_NotLoggedIn:
      return "k_EGCMsgInitiateTradeResponse_NotLoggedIn";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Cancel:
      return "k_EGCMsgInitiateTradeResponse_Cancel";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_TooSoon:
      return "k_EGCMsgInitiateTradeResponse_TooSoon";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_TooSoonPenalty:
      return "k_EGCMsgInitiateTradeResponse_TooSoonPenalty";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Trade_Banned_Initiator:
      return "k_EGCMsgInitiateTradeResponse_Trade_Banned_Initiator";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Trade_Banned_Target:
      return "k_EGCMsgInitiateTradeResponse_Trade_Banned_Target";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Free_Account_Initiator_DEPRECATED:
      return "k_EGCMsgInitiateTradeResponse_Free_Account_Initiator_DEPRECATED";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Shared_Account_Initiator:
      return "k_EGCMsgInitiateTradeResponse_Shared_Account_Initiator";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Service_Unavailable:
      return "k_EGCMsgInitiateTradeResponse_Service_Unavailable";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Target_Blocked:
      return "k_EGCMsgInitiateTradeResponse_Target_Blocked";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_NeedVerifiedEmail:
      return "k_EGCMsgInitiateTradeResponse_NeedVerifiedEmail";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_NeedSteamGuard:
      return "k_EGCMsgInitiateTradeResponse_NeedSteamGuard";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_SteamGuardDuration:
      return "k_EGCMsgInitiateTradeResponse_SteamGuardDuration";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_TheyCannotTrade:
      return "k_EGCMsgInitiateTradeResponse_TheyCannotTrade";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Recent_Password_Reset:
      return "k_EGCMsgInitiateTradeResponse_Recent_Password_Reset";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Using_New_Device:
      return "k_EGCMsgInitiateTradeResponse_Using_New_Device";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_Sent_Invalid_Cookie:
      return "k_EGCMsgInitiateTradeResponse_Sent_Invalid_Cookie";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_TooRecentFriend:
      return "k_EGCMsgInitiateTradeResponse_TooRecentFriend";
    case EGCMsgInitiateTradeResponse.k_EGCMsgInitiateTradeResponse_WalledFundsNotTrusted:
      return "k_EGCMsgInitiateTradeResponse_WalledFundsNotTrusted";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EGCMsgInitiateTradeResponse");
  }
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

export function cMsgRequestCrateItemsResponse_EResultFromJSON(object: any): CMsgRequestCrateItemsResponse_EResult {
  switch (object) {
    case 0:
    case "k_Succeeded":
      return CMsgRequestCrateItemsResponse_EResult.k_Succeeded;
    case 1:
    case "k_Failed":
      return CMsgRequestCrateItemsResponse_EResult.k_Failed;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgRequestCrateItemsResponse_EResult",
      );
  }
}

export function cMsgRequestCrateItemsResponse_EResultToJSON(object: CMsgRequestCrateItemsResponse_EResult): string {
  switch (object) {
    case CMsgRequestCrateItemsResponse_EResult.k_Succeeded:
      return "k_Succeeded";
    case CMsgRequestCrateItemsResponse_EResult.k_Failed:
      return "k_Failed";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgRequestCrateItemsResponse_EResult",
      );
  }
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

export function cMsgRequestCrateEscalationLevelResponse_EResultFromJSON(
  object: any,
): CMsgRequestCrateEscalationLevelResponse_EResult {
  switch (object) {
    case 0:
    case "k_Succeeded":
      return CMsgRequestCrateEscalationLevelResponse_EResult.k_Succeeded;
    case 1:
    case "k_Failed":
      return CMsgRequestCrateEscalationLevelResponse_EResult.k_Failed;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgRequestCrateEscalationLevelResponse_EResult",
      );
  }
}

export function cMsgRequestCrateEscalationLevelResponse_EResultToJSON(
  object: CMsgRequestCrateEscalationLevelResponse_EResult,
): string {
  switch (object) {
    case CMsgRequestCrateEscalationLevelResponse_EResult.k_Succeeded:
      return "k_Succeeded";
    case CMsgRequestCrateEscalationLevelResponse_EResult.k_Failed:
      return "k_Failed";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgRequestCrateEscalationLevelResponse_EResult",
      );
  }
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

export function cMsgRedeemCodeResponse_EResultCodeFromJSON(object: any): CMsgRedeemCodeResponse_EResultCode {
  switch (object) {
    case 0:
    case "k_Succeeded":
      return CMsgRedeemCodeResponse_EResultCode.k_Succeeded;
    case 1:
    case "k_Failed_CodeNotFound":
      return CMsgRedeemCodeResponse_EResultCode.k_Failed_CodeNotFound;
    case 2:
    case "k_Failed_CodeAlreadyUsed":
      return CMsgRedeemCodeResponse_EResultCode.k_Failed_CodeAlreadyUsed;
    case 3:
    case "k_Failed_OtherError":
      return CMsgRedeemCodeResponse_EResultCode.k_Failed_OtherError;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgRedeemCodeResponse_EResultCode",
      );
  }
}

export function cMsgRedeemCodeResponse_EResultCodeToJSON(object: CMsgRedeemCodeResponse_EResultCode): string {
  switch (object) {
    case CMsgRedeemCodeResponse_EResultCode.k_Succeeded:
      return "k_Succeeded";
    case CMsgRedeemCodeResponse_EResultCode.k_Failed_CodeNotFound:
      return "k_Failed_CodeNotFound";
    case CMsgRedeemCodeResponse_EResultCode.k_Failed_CodeAlreadyUsed:
      return "k_Failed_CodeAlreadyUsed";
    case CMsgRedeemCodeResponse_EResultCode.k_Failed_OtherError:
      return "k_Failed_OtherError";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgRedeemCodeResponse_EResultCode",
      );
  }
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

export function cMsgClientToGCUnpackBundleResponse_EUnpackBundleFromJSON(
  object: any,
): CMsgClientToGCUnpackBundleResponse_EUnpackBundle {
  switch (object) {
    case 0:
    case "k_UnpackBundle_Succeeded":
      return CMsgClientToGCUnpackBundleResponse_EUnpackBundle.k_UnpackBundle_Succeeded;
    case 1:
    case "k_UnpackBundle_Failed_ItemIsNotBundle":
      return CMsgClientToGCUnpackBundleResponse_EUnpackBundle.k_UnpackBundle_Failed_ItemIsNotBundle;
    case 2:
    case "k_UnpackBundle_Failed_UnableToCreateContainedItem":
      return CMsgClientToGCUnpackBundleResponse_EUnpackBundle.k_UnpackBundle_Failed_UnableToCreateContainedItem;
    case 3:
    case "k_UnpackBundle_Failed_SOCacheError":
      return CMsgClientToGCUnpackBundleResponse_EUnpackBundle.k_UnpackBundle_Failed_SOCacheError;
    case 4:
    case "k_UnpackBundle_Failed_ItemIsInvalid":
      return CMsgClientToGCUnpackBundleResponse_EUnpackBundle.k_UnpackBundle_Failed_ItemIsInvalid;
    case 5:
    case "k_UnpackBundle_Failed_BadItemQuantity":
      return CMsgClientToGCUnpackBundleResponse_EUnpackBundle.k_UnpackBundle_Failed_BadItemQuantity;
    case 6:
    case "k_UnpackBundle_Failed_UnableToDeleteItem":
      return CMsgClientToGCUnpackBundleResponse_EUnpackBundle.k_UnpackBundle_Failed_UnableToDeleteItem;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCUnpackBundleResponse_EUnpackBundle",
      );
  }
}

export function cMsgClientToGCUnpackBundleResponse_EUnpackBundleToJSON(
  object: CMsgClientToGCUnpackBundleResponse_EUnpackBundle,
): string {
  switch (object) {
    case CMsgClientToGCUnpackBundleResponse_EUnpackBundle.k_UnpackBundle_Succeeded:
      return "k_UnpackBundle_Succeeded";
    case CMsgClientToGCUnpackBundleResponse_EUnpackBundle.k_UnpackBundle_Failed_ItemIsNotBundle:
      return "k_UnpackBundle_Failed_ItemIsNotBundle";
    case CMsgClientToGCUnpackBundleResponse_EUnpackBundle.k_UnpackBundle_Failed_UnableToCreateContainedItem:
      return "k_UnpackBundle_Failed_UnableToCreateContainedItem";
    case CMsgClientToGCUnpackBundleResponse_EUnpackBundle.k_UnpackBundle_Failed_SOCacheError:
      return "k_UnpackBundle_Failed_SOCacheError";
    case CMsgClientToGCUnpackBundleResponse_EUnpackBundle.k_UnpackBundle_Failed_ItemIsInvalid:
      return "k_UnpackBundle_Failed_ItemIsInvalid";
    case CMsgClientToGCUnpackBundleResponse_EUnpackBundle.k_UnpackBundle_Failed_BadItemQuantity:
      return "k_UnpackBundle_Failed_BadItemQuantity";
    case CMsgClientToGCUnpackBundleResponse_EUnpackBundle.k_UnpackBundle_Failed_UnableToDeleteItem:
      return "k_UnpackBundle_Failed_UnableToDeleteItem";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCUnpackBundleResponse_EUnpackBundle",
      );
  }
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

export function cMsgClientToGCSetItemStyleResponse_ESetStyleFromJSON(
  object: any,
): CMsgClientToGCSetItemStyleResponse_ESetStyle {
  switch (object) {
    case 0:
    case "k_SetStyle_Succeeded":
      return CMsgClientToGCSetItemStyleResponse_ESetStyle.k_SetStyle_Succeeded;
    case 1:
    case "k_SetStyle_Failed":
      return CMsgClientToGCSetItemStyleResponse_ESetStyle.k_SetStyle_Failed;
    case 2:
    case "k_SetStyle_Failed_StyleIsLocked":
      return CMsgClientToGCSetItemStyleResponse_ESetStyle.k_SetStyle_Failed_StyleIsLocked;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCSetItemStyleResponse_ESetStyle",
      );
  }
}

export function cMsgClientToGCSetItemStyleResponse_ESetStyleToJSON(
  object: CMsgClientToGCSetItemStyleResponse_ESetStyle,
): string {
  switch (object) {
    case CMsgClientToGCSetItemStyleResponse_ESetStyle.k_SetStyle_Succeeded:
      return "k_SetStyle_Succeeded";
    case CMsgClientToGCSetItemStyleResponse_ESetStyle.k_SetStyle_Failed:
      return "k_SetStyle_Failed";
    case CMsgClientToGCSetItemStyleResponse_ESetStyle.k_SetStyle_Failed_StyleIsLocked:
      return "k_SetStyle_Failed_StyleIsLocked";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCSetItemStyleResponse_ESetStyle",
      );
  }
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

export function cMsgClientToGCUnlockItemStyleResponse_EUnlockStyleFromJSON(
  object: any,
): CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle {
  switch (object) {
    case 0:
    case "k_UnlockStyle_Succeeded":
      return CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Succeeded;
    case 1:
    case "k_UnlockStyle_Failed_PreReq":
      return CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_PreReq;
    case 2:
    case "k_UnlockStyle_Failed_CantAfford":
      return CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_CantAfford;
    case 3:
    case "k_UnlockStyle_Failed_CantCommit":
      return CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_CantCommit;
    case 4:
    case "k_UnlockStyle_Failed_CantLockCache":
      return CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_CantLockCache;
    case 5:
    case "k_UnlockStyle_Failed_CantAffordAttrib":
      return CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_CantAffordAttrib;
    case 6:
    case "k_UnlockStyle_Failed_CantAffordGem":
      return CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_CantAffordGem;
    case 7:
    case "k_UnlockStyle_Failed_NoCompendiumLevel":
      return CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_NoCompendiumLevel;
    case 8:
    case "k_UnlockStyle_Failed_AlreadyUnlocked":
      return CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_AlreadyUnlocked;
    case 9:
    case "k_UnlockStyle_Failed_OtherError":
      return CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_OtherError;
    case 10:
    case "k_UnlockStyle_Failed_ItemIsInvalid":
      return CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_ItemIsInvalid;
    case 11:
    case "k_UnlockStyle_Failed_ToolIsInvalid":
      return CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_ToolIsInvalid;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle",
      );
  }
}

export function cMsgClientToGCUnlockItemStyleResponse_EUnlockStyleToJSON(
  object: CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle,
): string {
  switch (object) {
    case CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Succeeded:
      return "k_UnlockStyle_Succeeded";
    case CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_PreReq:
      return "k_UnlockStyle_Failed_PreReq";
    case CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_CantAfford:
      return "k_UnlockStyle_Failed_CantAfford";
    case CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_CantCommit:
      return "k_UnlockStyle_Failed_CantCommit";
    case CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_CantLockCache:
      return "k_UnlockStyle_Failed_CantLockCache";
    case CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_CantAffordAttrib:
      return "k_UnlockStyle_Failed_CantAffordAttrib";
    case CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_CantAffordGem:
      return "k_UnlockStyle_Failed_CantAffordGem";
    case CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_NoCompendiumLevel:
      return "k_UnlockStyle_Failed_NoCompendiumLevel";
    case CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_AlreadyUnlocked:
      return "k_UnlockStyle_Failed_AlreadyUnlocked";
    case CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_OtherError:
      return "k_UnlockStyle_Failed_OtherError";
    case CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_ItemIsInvalid:
      return "k_UnlockStyle_Failed_ItemIsInvalid";
    case CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle.k_UnlockStyle_Failed_ToolIsInvalid:
      return "k_UnlockStyle_Failed_ToolIsInvalid";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle",
      );
  }
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

export function cMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttributeFromJSON(
  object: any,
): CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute {
  switch (object) {
    case 0:
    case "k_RemoveItemAttribute_Succeeded":
      return CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute.k_RemoveItemAttribute_Succeeded;
    case 1:
    case "k_RemoveItemAttribute_Failed":
      return CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute.k_RemoveItemAttribute_Failed;
    case 2:
    case "k_RemoveItemAttribute_Failed_ItemIsInvalid":
      return CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute.k_RemoveItemAttribute_Failed_ItemIsInvalid;
    case 3:
    case "k_RemoveItemAttribute_Failed_AttributeCannotBeRemoved":
      return CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute
        .k_RemoveItemAttribute_Failed_AttributeCannotBeRemoved;
    case 4:
    case "k_RemoveItemAttribute_Failed_AttributeDoesntExist":
      return CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute
        .k_RemoveItemAttribute_Failed_AttributeDoesntExist;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute",
      );
  }
}

export function cMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttributeToJSON(
  object: CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute,
): string {
  switch (object) {
    case CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute.k_RemoveItemAttribute_Succeeded:
      return "k_RemoveItemAttribute_Succeeded";
    case CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute.k_RemoveItemAttribute_Failed:
      return "k_RemoveItemAttribute_Failed";
    case CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute.k_RemoveItemAttribute_Failed_ItemIsInvalid:
      return "k_RemoveItemAttribute_Failed_ItemIsInvalid";
    case CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute
      .k_RemoveItemAttribute_Failed_AttributeCannotBeRemoved:
      return "k_RemoveItemAttribute_Failed_AttributeCannotBeRemoved";
    case CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute
      .k_RemoveItemAttribute_Failed_AttributeDoesntExist:
      return "k_RemoveItemAttribute_Failed_AttributeDoesntExist";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute",
      );
  }
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

export function cMsgClientToGCNameItemResponse_ENameItemFromJSON(
  object: any,
): CMsgClientToGCNameItemResponse_ENameItem {
  switch (object) {
    case 0:
    case "k_NameItem_Succeeded":
      return CMsgClientToGCNameItemResponse_ENameItem.k_NameItem_Succeeded;
    case 1:
    case "k_NameItem_Failed":
      return CMsgClientToGCNameItemResponse_ENameItem.k_NameItem_Failed;
    case 2:
    case "k_NameItem_Failed_ToolIsInvalid":
      return CMsgClientToGCNameItemResponse_ENameItem.k_NameItem_Failed_ToolIsInvalid;
    case 3:
    case "k_NameItem_Failed_ItemIsInvalid":
      return CMsgClientToGCNameItemResponse_ENameItem.k_NameItem_Failed_ItemIsInvalid;
    case 4:
    case "k_NameItem_Failed_NameIsInvalid":
      return CMsgClientToGCNameItemResponse_ENameItem.k_NameItem_Failed_NameIsInvalid;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCNameItemResponse_ENameItem",
      );
  }
}

export function cMsgClientToGCNameItemResponse_ENameItemToJSON(
  object: CMsgClientToGCNameItemResponse_ENameItem,
): string {
  switch (object) {
    case CMsgClientToGCNameItemResponse_ENameItem.k_NameItem_Succeeded:
      return "k_NameItem_Succeeded";
    case CMsgClientToGCNameItemResponse_ENameItem.k_NameItem_Failed:
      return "k_NameItem_Failed";
    case CMsgClientToGCNameItemResponse_ENameItem.k_NameItem_Failed_ToolIsInvalid:
      return "k_NameItem_Failed_ToolIsInvalid";
    case CMsgClientToGCNameItemResponse_ENameItem.k_NameItem_Failed_ItemIsInvalid:
      return "k_NameItem_Failed_ItemIsInvalid";
    case CMsgClientToGCNameItemResponse_ENameItem.k_NameItem_Failed_NameIsInvalid:
      return "k_NameItem_Failed_NameIsInvalid";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCNameItemResponse_ENameItem",
      );
  }
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

export function cMsgClientToGCCreateStaticRecipeResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCCreateStaticRecipeResponse_EResponse {
  switch (object) {
    case 0:
    case "eResponse_Success":
      return CMsgClientToGCCreateStaticRecipeResponse_EResponse.eResponse_Success;
    case 1:
    case "eResponse_OfferingDisabled":
      return CMsgClientToGCCreateStaticRecipeResponse_EResponse.eResponse_OfferingDisabled;
    case 2:
    case "eResponse_InvalidItems":
      return CMsgClientToGCCreateStaticRecipeResponse_EResponse.eResponse_InvalidItems;
    case 3:
    case "eResponse_InternalError":
      return CMsgClientToGCCreateStaticRecipeResponse_EResponse.eResponse_InternalError;
    case 4:
    case "eResponse_MissingLeague":
      return CMsgClientToGCCreateStaticRecipeResponse_EResponse.eResponse_MissingLeague;
    case 5:
    case "eResponse_MissingEvent":
      return CMsgClientToGCCreateStaticRecipeResponse_EResponse.eResponse_MissingEvent;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCreateStaticRecipeResponse_EResponse",
      );
  }
}

export function cMsgClientToGCCreateStaticRecipeResponse_EResponseToJSON(
  object: CMsgClientToGCCreateStaticRecipeResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCCreateStaticRecipeResponse_EResponse.eResponse_Success:
      return "eResponse_Success";
    case CMsgClientToGCCreateStaticRecipeResponse_EResponse.eResponse_OfferingDisabled:
      return "eResponse_OfferingDisabled";
    case CMsgClientToGCCreateStaticRecipeResponse_EResponse.eResponse_InvalidItems:
      return "eResponse_InvalidItems";
    case CMsgClientToGCCreateStaticRecipeResponse_EResponse.eResponse_InternalError:
      return "eResponse_InternalError";
    case CMsgClientToGCCreateStaticRecipeResponse_EResponse.eResponse_MissingLeague:
      return "eResponse_MissingLeague";
    case CMsgClientToGCCreateStaticRecipeResponse_EResponse.eResponse_MissingEvent:
      return "eResponse_MissingEvent";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCreateStaticRecipeResponse_EResponse",
      );
  }
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

export function cMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidItemDef":
      return CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse.k_eInvalidItemDef;
    case 6:
    case "k_eItemDefNotLimited":
      return CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse.k_eItemDefNotLimited;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse",
      );
  }
}

export function cMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponseToJSON(
  object: CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse.k_eInvalidItemDef:
      return "k_eInvalidItemDef";
    case CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse.k_eItemDefNotLimited:
      return "k_eItemDefNotLimited";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse",
      );
  }
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

  fromJSON(object: any): CMsgApplyAutograph {
    return {
      autographItemId: isSet(object.autographItemId) ? String(object.autographItemId) : "0",
      itemItemId: isSet(object.itemItemId) ? String(object.itemItemId) : "0",
    };
  },

  toJSON(message: CMsgApplyAutograph): unknown {
    const obj: any = {};
    message.autographItemId !== undefined && (obj.autographItemId = message.autographItemId);
    message.itemItemId !== undefined && (obj.itemItemId = message.itemItemId);
    return obj;
  },

  create(base?: DeepPartial<CMsgApplyAutograph>): CMsgApplyAutograph {
    return CMsgApplyAutograph.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgApplyAutograph>): CMsgApplyAutograph {
    const message = createBaseCMsgApplyAutograph();
    message.autographItemId = object.autographItemId ?? "0";
    message.itemItemId = object.itemItemId ?? "0";
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

  fromJSON(object: any): CMsgAdjustItemEquippedState {
    return {
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
      newClass: isSet(object.newClass) ? Number(object.newClass) : 0,
      newSlot: isSet(object.newSlot) ? Number(object.newSlot) : 0,
      styleIndex: isSet(object.styleIndex) ? Number(object.styleIndex) : 0,
    };
  },

  toJSON(message: CMsgAdjustItemEquippedState): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.newClass !== undefined && (obj.newClass = Math.round(message.newClass));
    message.newSlot !== undefined && (obj.newSlot = Math.round(message.newSlot));
    message.styleIndex !== undefined && (obj.styleIndex = Math.round(message.styleIndex));
    return obj;
  },

  create(base?: DeepPartial<CMsgAdjustItemEquippedState>): CMsgAdjustItemEquippedState {
    return CMsgAdjustItemEquippedState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAdjustItemEquippedState>): CMsgAdjustItemEquippedState {
    const message = createBaseCMsgAdjustItemEquippedState();
    message.itemId = object.itemId ?? "0";
    message.newClass = object.newClass ?? 0;
    message.newSlot = object.newSlot ?? 0;
    message.styleIndex = object.styleIndex ?? 0;
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

  fromJSON(object: any): CMsgEconPlayerStrangeCountAdjustment {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      strangeCountAdjustments: Array.isArray(object?.strangeCountAdjustments)
        ? object.strangeCountAdjustments.map((e: any) =>
          CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment.fromJSON(e)
        )
        : [],
      turboMode: isSet(object.turboMode) ? Boolean(object.turboMode) : false,
    };
  },

  toJSON(message: CMsgEconPlayerStrangeCountAdjustment): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    if (message.strangeCountAdjustments) {
      obj.strangeCountAdjustments = message.strangeCountAdjustments.map((e) =>
        e ? CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment.toJSON(e) : undefined
      );
    } else {
      obj.strangeCountAdjustments = [];
    }
    message.turboMode !== undefined && (obj.turboMode = message.turboMode);
    return obj;
  },

  create(base?: DeepPartial<CMsgEconPlayerStrangeCountAdjustment>): CMsgEconPlayerStrangeCountAdjustment {
    return CMsgEconPlayerStrangeCountAdjustment.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgEconPlayerStrangeCountAdjustment>): CMsgEconPlayerStrangeCountAdjustment {
    const message = createBaseCMsgEconPlayerStrangeCountAdjustment();
    message.accountId = object.accountId ?? 0;
    message.strangeCountAdjustments =
      object.strangeCountAdjustments?.map((e) =>
        CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment.fromPartial(e)
      ) || [];
    message.turboMode = object.turboMode ?? false;
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

  fromJSON(object: any): CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment {
    return {
      eventType: isSet(object.eventType) ? Number(object.eventType) : 0,
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
      adjustment: isSet(object.adjustment) ? Number(object.adjustment) : 0,
    };
  },

  toJSON(message: CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment): unknown {
    const obj: any = {};
    message.eventType !== undefined && (obj.eventType = Math.round(message.eventType));
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.adjustment !== undefined && (obj.adjustment = Math.round(message.adjustment));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment>,
  ): CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment {
    return CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment>,
  ): CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment {
    const message = createBaseCMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment();
    message.eventType = object.eventType ?? 0;
    message.itemId = object.itemId ?? "0";
    message.adjustment = object.adjustment ?? 0;
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

  fromJSON(object: any): CMsgCraftingResponse {
    return { itemIds: Array.isArray(object?.itemIds) ? object.itemIds.map((e: any) => String(e)) : [] };
  },

  toJSON(message: CMsgCraftingResponse): unknown {
    const obj: any = {};
    if (message.itemIds) {
      obj.itemIds = message.itemIds.map((e) => e);
    } else {
      obj.itemIds = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgCraftingResponse>): CMsgCraftingResponse {
    return CMsgCraftingResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgCraftingResponse>): CMsgCraftingResponse {
    const message = createBaseCMsgCraftingResponse();
    message.itemIds = object.itemIds?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgGCRequestStoreSalesData {
    return {
      version: isSet(object.version) ? Number(object.version) : 0,
      currency: isSet(object.currency) ? Number(object.currency) : 0,
    };
  },

  toJSON(message: CMsgGCRequestStoreSalesData): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.currency !== undefined && (obj.currency = Math.round(message.currency));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCRequestStoreSalesData>): CMsgGCRequestStoreSalesData {
    return CMsgGCRequestStoreSalesData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCRequestStoreSalesData>): CMsgGCRequestStoreSalesData {
    const message = createBaseCMsgGCRequestStoreSalesData();
    message.version = object.version ?? 0;
    message.currency = object.currency ?? 0;
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

  fromJSON(object: any): CMsgGCRequestStoreSalesDataResponse {
    return {
      salePrice: Array.isArray(object?.salePrice)
        ? object.salePrice.map((e: any) => CMsgGCRequestStoreSalesDataResponse_Price.fromJSON(e))
        : [],
      version: isSet(object.version) ? Number(object.version) : 0,
      expirationTime: isSet(object.expirationTime) ? Number(object.expirationTime) : 0,
    };
  },

  toJSON(message: CMsgGCRequestStoreSalesDataResponse): unknown {
    const obj: any = {};
    if (message.salePrice) {
      obj.salePrice = message.salePrice.map((e) => e ? CMsgGCRequestStoreSalesDataResponse_Price.toJSON(e) : undefined);
    } else {
      obj.salePrice = [];
    }
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.expirationTime !== undefined && (obj.expirationTime = Math.round(message.expirationTime));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCRequestStoreSalesDataResponse>): CMsgGCRequestStoreSalesDataResponse {
    return CMsgGCRequestStoreSalesDataResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCRequestStoreSalesDataResponse>): CMsgGCRequestStoreSalesDataResponse {
    const message = createBaseCMsgGCRequestStoreSalesDataResponse();
    message.salePrice = object.salePrice?.map((e) => CMsgGCRequestStoreSalesDataResponse_Price.fromPartial(e)) || [];
    message.version = object.version ?? 0;
    message.expirationTime = object.expirationTime ?? 0;
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

  fromJSON(object: any): CMsgGCRequestStoreSalesDataResponse_Price {
    return {
      itemDef: isSet(object.itemDef) ? Number(object.itemDef) : 0,
      price: isSet(object.price) ? Number(object.price) : 0,
    };
  },

  toJSON(message: CMsgGCRequestStoreSalesDataResponse_Price): unknown {
    const obj: any = {};
    message.itemDef !== undefined && (obj.itemDef = Math.round(message.itemDef));
    message.price !== undefined && (obj.price = Math.round(message.price));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCRequestStoreSalesDataResponse_Price>): CMsgGCRequestStoreSalesDataResponse_Price {
    return CMsgGCRequestStoreSalesDataResponse_Price.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgGCRequestStoreSalesDataResponse_Price>,
  ): CMsgGCRequestStoreSalesDataResponse_Price {
    const message = createBaseCMsgGCRequestStoreSalesDataResponse_Price();
    message.itemDef = object.itemDef ?? 0;
    message.price = object.price ?? 0;
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

  fromJSON(object: any): CMsgGCRequestStoreSalesDataUpToDateResponse {
    return {
      version: isSet(object.version) ? Number(object.version) : 0,
      expirationTime: isSet(object.expirationTime) ? Number(object.expirationTime) : 0,
    };
  },

  toJSON(message: CMsgGCRequestStoreSalesDataUpToDateResponse): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.expirationTime !== undefined && (obj.expirationTime = Math.round(message.expirationTime));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCRequestStoreSalesDataUpToDateResponse>): CMsgGCRequestStoreSalesDataUpToDateResponse {
    return CMsgGCRequestStoreSalesDataUpToDateResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgGCRequestStoreSalesDataUpToDateResponse>,
  ): CMsgGCRequestStoreSalesDataUpToDateResponse {
    const message = createBaseCMsgGCRequestStoreSalesDataUpToDateResponse();
    message.version = object.version ?? 0;
    message.expirationTime = object.expirationTime ?? 0;
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

  fromJSON(_: any): CMsgGCToGCPingRequest {
    return {};
  },

  toJSON(_: CMsgGCToGCPingRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCPingRequest>): CMsgGCToGCPingRequest {
    return CMsgGCToGCPingRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CMsgGCToGCPingRequest>): CMsgGCToGCPingRequest {
    const message = createBaseCMsgGCToGCPingRequest();
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

  fromJSON(_: any): CMsgGCToGCPingResponse {
    return {};
  },

  toJSON(_: CMsgGCToGCPingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCPingResponse>): CMsgGCToGCPingResponse {
    return CMsgGCToGCPingResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CMsgGCToGCPingResponse>): CMsgGCToGCPingResponse {
    const message = createBaseCMsgGCToGCPingResponse();
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

  fromJSON(object: any): CMsgGCToGCGetUserSessionServer {
    return { accountId: isSet(object.accountId) ? Number(object.accountId) : 0 };
  },

  toJSON(message: CMsgGCToGCGetUserSessionServer): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCGetUserSessionServer>): CMsgGCToGCGetUserSessionServer {
    return CMsgGCToGCGetUserSessionServer.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCGetUserSessionServer>): CMsgGCToGCGetUserSessionServer {
    const message = createBaseCMsgGCToGCGetUserSessionServer();
    message.accountId = object.accountId ?? 0;
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

  fromJSON(object: any): CMsgGCToGCGetUserSessionServerResponse {
    return {
      serverSteamId: isSet(object.serverSteamId) ? String(object.serverSteamId) : "0",
      isOnline: isSet(object.isOnline) ? Boolean(object.isOnline) : false,
    };
  },

  toJSON(message: CMsgGCToGCGetUserSessionServerResponse): unknown {
    const obj: any = {};
    message.serverSteamId !== undefined && (obj.serverSteamId = message.serverSteamId);
    message.isOnline !== undefined && (obj.isOnline = message.isOnline);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCGetUserSessionServerResponse>): CMsgGCToGCGetUserSessionServerResponse {
    return CMsgGCToGCGetUserSessionServerResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCGetUserSessionServerResponse>): CMsgGCToGCGetUserSessionServerResponse {
    const message = createBaseCMsgGCToGCGetUserSessionServerResponse();
    message.serverSteamId = object.serverSteamId ?? "0";
    message.isOnline = object.isOnline ?? false;
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

  fromJSON(object: any): CMsgGCToGCGetUserServerMembers {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      maxSpectators: isSet(object.maxSpectators) ? Number(object.maxSpectators) : 0,
    };
  },

  toJSON(message: CMsgGCToGCGetUserServerMembers): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.maxSpectators !== undefined && (obj.maxSpectators = Math.round(message.maxSpectators));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCGetUserServerMembers>): CMsgGCToGCGetUserServerMembers {
    return CMsgGCToGCGetUserServerMembers.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCGetUserServerMembers>): CMsgGCToGCGetUserServerMembers {
    const message = createBaseCMsgGCToGCGetUserServerMembers();
    message.accountId = object.accountId ?? 0;
    message.maxSpectators = object.maxSpectators ?? 0;
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

  fromJSON(object: any): CMsgGCToGCGetUserServerMembersResponse {
    return {
      memberAccountId: Array.isArray(object?.memberAccountId) ? object.memberAccountId.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgGCToGCGetUserServerMembersResponse): unknown {
    const obj: any = {};
    if (message.memberAccountId) {
      obj.memberAccountId = message.memberAccountId.map((e) => Math.round(e));
    } else {
      obj.memberAccountId = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCGetUserServerMembersResponse>): CMsgGCToGCGetUserServerMembersResponse {
    return CMsgGCToGCGetUserServerMembersResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCGetUserServerMembersResponse>): CMsgGCToGCGetUserServerMembersResponse {
    const message = createBaseCMsgGCToGCGetUserServerMembersResponse();
    message.memberAccountId = object.memberAccountId?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgLookupMultipleAccountNames {
    return { accountids: Array.isArray(object?.accountids) ? object.accountids.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CMsgLookupMultipleAccountNames): unknown {
    const obj: any = {};
    if (message.accountids) {
      obj.accountids = message.accountids.map((e) => Math.round(e));
    } else {
      obj.accountids = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgLookupMultipleAccountNames>): CMsgLookupMultipleAccountNames {
    return CMsgLookupMultipleAccountNames.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgLookupMultipleAccountNames>): CMsgLookupMultipleAccountNames {
    const message = createBaseCMsgLookupMultipleAccountNames();
    message.accountids = object.accountids?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgLookupMultipleAccountNamesResponse {
    return {
      accounts: Array.isArray(object?.accounts)
        ? object.accounts.map((e: any) => CMsgLookupMultipleAccountNamesResponse_Account.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgLookupMultipleAccountNamesResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) =>
        e ? CMsgLookupMultipleAccountNamesResponse_Account.toJSON(e) : undefined
      );
    } else {
      obj.accounts = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgLookupMultipleAccountNamesResponse>): CMsgLookupMultipleAccountNamesResponse {
    return CMsgLookupMultipleAccountNamesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgLookupMultipleAccountNamesResponse>): CMsgLookupMultipleAccountNamesResponse {
    const message = createBaseCMsgLookupMultipleAccountNamesResponse();
    message.accounts = object.accounts?.map((e) => CMsgLookupMultipleAccountNamesResponse_Account.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgLookupMultipleAccountNamesResponse_Account {
    return {
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      persona: isSet(object.persona) ? String(object.persona) : "",
    };
  },

  toJSON(message: CMsgLookupMultipleAccountNamesResponse_Account): unknown {
    const obj: any = {};
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.persona !== undefined && (obj.persona = message.persona);
    return obj;
  },

  create(
    base?: DeepPartial<CMsgLookupMultipleAccountNamesResponse_Account>,
  ): CMsgLookupMultipleAccountNamesResponse_Account {
    return CMsgLookupMultipleAccountNamesResponse_Account.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgLookupMultipleAccountNamesResponse_Account>,
  ): CMsgLookupMultipleAccountNamesResponse_Account {
    const message = createBaseCMsgLookupMultipleAccountNamesResponse_Account();
    message.accountid = object.accountid ?? 0;
    message.persona = object.persona ?? "";
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

  fromJSON(object: any): CMsgRequestCrateItems {
    return { crateItemDef: isSet(object.crateItemDef) ? Number(object.crateItemDef) : 0 };
  },

  toJSON(message: CMsgRequestCrateItems): unknown {
    const obj: any = {};
    message.crateItemDef !== undefined && (obj.crateItemDef = Math.round(message.crateItemDef));
    return obj;
  },

  create(base?: DeepPartial<CMsgRequestCrateItems>): CMsgRequestCrateItems {
    return CMsgRequestCrateItems.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgRequestCrateItems>): CMsgRequestCrateItems {
    const message = createBaseCMsgRequestCrateItems();
    message.crateItemDef = object.crateItemDef ?? 0;
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

  fromJSON(object: any): CMsgRequestCrateItemsResponse {
    return {
      response: isSet(object.response) ? Number(object.response) : 0,
      itemDefs: Array.isArray(object?.itemDefs) ? object.itemDefs.map((e: any) => Number(e)) : [],
      peekItemDefs: Array.isArray(object?.peekItemDefs) ? object.peekItemDefs.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgRequestCrateItemsResponse): unknown {
    const obj: any = {};
    message.response !== undefined && (obj.response = Math.round(message.response));
    if (message.itemDefs) {
      obj.itemDefs = message.itemDefs.map((e) => Math.round(e));
    } else {
      obj.itemDefs = [];
    }
    if (message.peekItemDefs) {
      obj.peekItemDefs = message.peekItemDefs.map((e) => Math.round(e));
    } else {
      obj.peekItemDefs = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgRequestCrateItemsResponse>): CMsgRequestCrateItemsResponse {
    return CMsgRequestCrateItemsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgRequestCrateItemsResponse>): CMsgRequestCrateItemsResponse {
    const message = createBaseCMsgRequestCrateItemsResponse();
    message.response = object.response ?? 0;
    message.itemDefs = object.itemDefs?.map((e) => e) || [];
    message.peekItemDefs = object.peekItemDefs?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgRequestCrateEscalationLevel {
    return { crateItemDef: isSet(object.crateItemDef) ? Number(object.crateItemDef) : 0 };
  },

  toJSON(message: CMsgRequestCrateEscalationLevel): unknown {
    const obj: any = {};
    message.crateItemDef !== undefined && (obj.crateItemDef = Math.round(message.crateItemDef));
    return obj;
  },

  create(base?: DeepPartial<CMsgRequestCrateEscalationLevel>): CMsgRequestCrateEscalationLevel {
    return CMsgRequestCrateEscalationLevel.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgRequestCrateEscalationLevel>): CMsgRequestCrateEscalationLevel {
    const message = createBaseCMsgRequestCrateEscalationLevel();
    message.crateItemDef = object.crateItemDef ?? 0;
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

  fromJSON(object: any): CMsgRequestCrateEscalationLevelResponse {
    return {
      response: isSet(object.response) ? Number(object.response) : 0,
      escalationLevel0: isSet(object.escalationLevel0) ? Number(object.escalationLevel0) : 0,
      escalationLevel1: isSet(object.escalationLevel1) ? Number(object.escalationLevel1) : 0,
      escalationLevel2: isSet(object.escalationLevel2) ? Number(object.escalationLevel2) : 0,
      escalationLevel3: isSet(object.escalationLevel3) ? Number(object.escalationLevel3) : 0,
    };
  },

  toJSON(message: CMsgRequestCrateEscalationLevelResponse): unknown {
    const obj: any = {};
    message.response !== undefined && (obj.response = Math.round(message.response));
    message.escalationLevel0 !== undefined && (obj.escalationLevel0 = Math.round(message.escalationLevel0));
    message.escalationLevel1 !== undefined && (obj.escalationLevel1 = Math.round(message.escalationLevel1));
    message.escalationLevel2 !== undefined && (obj.escalationLevel2 = Math.round(message.escalationLevel2));
    message.escalationLevel3 !== undefined && (obj.escalationLevel3 = Math.round(message.escalationLevel3));
    return obj;
  },

  create(base?: DeepPartial<CMsgRequestCrateEscalationLevelResponse>): CMsgRequestCrateEscalationLevelResponse {
    return CMsgRequestCrateEscalationLevelResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgRequestCrateEscalationLevelResponse>): CMsgRequestCrateEscalationLevelResponse {
    const message = createBaseCMsgRequestCrateEscalationLevelResponse();
    message.response = object.response ?? 0;
    message.escalationLevel0 = object.escalationLevel0 ?? 0;
    message.escalationLevel1 = object.escalationLevel1 ?? 0;
    message.escalationLevel2 = object.escalationLevel2 ?? 0;
    message.escalationLevel3 = object.escalationLevel3 ?? 0;
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

  fromJSON(object: any): CMsgGCToGCCanUseDropRateBonus {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      dropRateBonus: isSet(object.dropRateBonus) ? Number(object.dropRateBonus) : 0,
      boosterType: isSet(object.boosterType) ? Number(object.boosterType) : 0,
      exclusiveItemDef: isSet(object.exclusiveItemDef) ? Number(object.exclusiveItemDef) : 0,
      allowEqualRate: isSet(object.allowEqualRate) ? Boolean(object.allowEqualRate) : false,
    };
  },

  toJSON(message: CMsgGCToGCCanUseDropRateBonus): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.dropRateBonus !== undefined && (obj.dropRateBonus = message.dropRateBonus);
    message.boosterType !== undefined && (obj.boosterType = Math.round(message.boosterType));
    message.exclusiveItemDef !== undefined && (obj.exclusiveItemDef = Math.round(message.exclusiveItemDef));
    message.allowEqualRate !== undefined && (obj.allowEqualRate = message.allowEqualRate);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCCanUseDropRateBonus>): CMsgGCToGCCanUseDropRateBonus {
    return CMsgGCToGCCanUseDropRateBonus.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCCanUseDropRateBonus>): CMsgGCToGCCanUseDropRateBonus {
    const message = createBaseCMsgGCToGCCanUseDropRateBonus();
    message.accountId = object.accountId ?? 0;
    message.dropRateBonus = object.dropRateBonus ?? 0;
    message.boosterType = object.boosterType ?? 0;
    message.exclusiveItemDef = object.exclusiveItemDef ?? 0;
    message.allowEqualRate = object.allowEqualRate ?? false;
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

  fromJSON(object: any): CMsgSQLAddDropRateBonus {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
      itemDef: isSet(object.itemDef) ? Number(object.itemDef) : 0,
      dropRateBonus: isSet(object.dropRateBonus) ? Number(object.dropRateBonus) : 0,
      boosterType: isSet(object.boosterType) ? Number(object.boosterType) : 0,
      secondsDuration: isSet(object.secondsDuration) ? Number(object.secondsDuration) : 0,
      endTimeStamp: isSet(object.endTimeStamp) ? Number(object.endTimeStamp) : 0,
    };
  },

  toJSON(message: CMsgSQLAddDropRateBonus): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.itemDef !== undefined && (obj.itemDef = Math.round(message.itemDef));
    message.dropRateBonus !== undefined && (obj.dropRateBonus = message.dropRateBonus);
    message.boosterType !== undefined && (obj.boosterType = Math.round(message.boosterType));
    message.secondsDuration !== undefined && (obj.secondsDuration = Math.round(message.secondsDuration));
    message.endTimeStamp !== undefined && (obj.endTimeStamp = Math.round(message.endTimeStamp));
    return obj;
  },

  create(base?: DeepPartial<CMsgSQLAddDropRateBonus>): CMsgSQLAddDropRateBonus {
    return CMsgSQLAddDropRateBonus.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSQLAddDropRateBonus>): CMsgSQLAddDropRateBonus {
    const message = createBaseCMsgSQLAddDropRateBonus();
    message.accountId = object.accountId ?? 0;
    message.itemId = object.itemId ?? "0";
    message.itemDef = object.itemDef ?? 0;
    message.dropRateBonus = object.dropRateBonus ?? 0;
    message.boosterType = object.boosterType ?? 0;
    message.secondsDuration = object.secondsDuration ?? 0;
    message.endTimeStamp = object.endTimeStamp ?? 0;
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

  fromJSON(object: any): CMsgSQLUpgradeBattleBooster {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      itemDef: isSet(object.itemDef) ? Number(object.itemDef) : 0,
      bonusToAdd: isSet(object.bonusToAdd) ? Number(object.bonusToAdd) : 0,
      boosterType: isSet(object.boosterType) ? Number(object.boosterType) : 0,
    };
  },

  toJSON(message: CMsgSQLUpgradeBattleBooster): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.itemDef !== undefined && (obj.itemDef = Math.round(message.itemDef));
    message.bonusToAdd !== undefined && (obj.bonusToAdd = message.bonusToAdd);
    message.boosterType !== undefined && (obj.boosterType = Math.round(message.boosterType));
    return obj;
  },

  create(base?: DeepPartial<CMsgSQLUpgradeBattleBooster>): CMsgSQLUpgradeBattleBooster {
    return CMsgSQLUpgradeBattleBooster.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSQLUpgradeBattleBooster>): CMsgSQLUpgradeBattleBooster {
    const message = createBaseCMsgSQLUpgradeBattleBooster();
    message.accountId = object.accountId ?? 0;
    message.itemDef = object.itemDef ?? 0;
    message.bonusToAdd = object.bonusToAdd ?? 0;
    message.boosterType = object.boosterType ?? 0;
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

  fromJSON(object: any): CMsgGCToGCRefreshSOCache {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      reload: isSet(object.reload) ? Boolean(object.reload) : false,
    };
  },

  toJSON(message: CMsgGCToGCRefreshSOCache): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.reload !== undefined && (obj.reload = message.reload);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCRefreshSOCache>): CMsgGCToGCRefreshSOCache {
    return CMsgGCToGCRefreshSOCache.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCRefreshSOCache>): CMsgGCToGCRefreshSOCache {
    const message = createBaseCMsgGCToGCRefreshSOCache();
    message.accountId = object.accountId ?? 0;
    message.reload = object.reload ?? false;
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

  fromJSON(object: any): CMsgGCToGCAddSubscriptionTime {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      matchingSubscriptionDefIndexes: Array.isArray(object?.matchingSubscriptionDefIndexes)
        ? object.matchingSubscriptionDefIndexes.map((e: any) => Number(e))
        : [],
      additionalSeconds: isSet(object.additionalSeconds) ? Number(object.additionalSeconds) : 0,
    };
  },

  toJSON(message: CMsgGCToGCAddSubscriptionTime): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    if (message.matchingSubscriptionDefIndexes) {
      obj.matchingSubscriptionDefIndexes = message.matchingSubscriptionDefIndexes.map((e) => Math.round(e));
    } else {
      obj.matchingSubscriptionDefIndexes = [];
    }
    message.additionalSeconds !== undefined && (obj.additionalSeconds = Math.round(message.additionalSeconds));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCAddSubscriptionTime>): CMsgGCToGCAddSubscriptionTime {
    return CMsgGCToGCAddSubscriptionTime.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCAddSubscriptionTime>): CMsgGCToGCAddSubscriptionTime {
    const message = createBaseCMsgGCToGCAddSubscriptionTime();
    message.accountId = object.accountId ?? 0;
    message.matchingSubscriptionDefIndexes = object.matchingSubscriptionDefIndexes?.map((e) => e) || [];
    message.additionalSeconds = object.additionalSeconds ?? 0;
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

  fromJSON(object: any): CMsgGCToGCGrantAccountRolledItems {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => CMsgGCToGCGrantAccountRolledItems_Item.fromJSON(e))
        : [],
      auditAction: isSet(object.auditAction) ? Number(object.auditAction) : 0,
      auditData: isSet(object.auditData) ? String(object.auditData) : "0",
    };
  },

  toJSON(message: CMsgGCToGCGrantAccountRolledItems): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    if (message.items) {
      obj.items = message.items.map((e) => e ? CMsgGCToGCGrantAccountRolledItems_Item.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.auditAction !== undefined && (obj.auditAction = Math.round(message.auditAction));
    message.auditData !== undefined && (obj.auditData = message.auditData);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCGrantAccountRolledItems>): CMsgGCToGCGrantAccountRolledItems {
    return CMsgGCToGCGrantAccountRolledItems.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCGrantAccountRolledItems>): CMsgGCToGCGrantAccountRolledItems {
    const message = createBaseCMsgGCToGCGrantAccountRolledItems();
    message.accountId = object.accountId ?? 0;
    message.items = object.items?.map((e) => CMsgGCToGCGrantAccountRolledItems_Item.fromPartial(e)) || [];
    message.auditAction = object.auditAction ?? 0;
    message.auditData = object.auditData ?? "0";
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

  fromJSON(object: any): CMsgGCToGCGrantAccountRolledItems_Item {
    return {
      itemDef: isSet(object.itemDef) ? Number(object.itemDef) : 0,
      lootLists: Array.isArray(object?.lootLists) ? object.lootLists.map((e: any) => String(e)) : [],
      ignoreLimit: isSet(object.ignoreLimit) ? Boolean(object.ignoreLimit) : false,
      origin: isSet(object.origin) ? Number(object.origin) : 0,
      dynamicAttributes: Array.isArray(object?.dynamicAttributes)
        ? object.dynamicAttributes.map((e: any) => CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute.fromJSON(e))
        : [],
      additionalAuditEntries: Array.isArray(object?.additionalAuditEntries)
        ? object.additionalAuditEntries.map((e: any) =>
          CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry.fromJSON(e)
        )
        : [],
      inventoryToken: isSet(object.inventoryToken) ? Number(object.inventoryToken) : 0,
    };
  },

  toJSON(message: CMsgGCToGCGrantAccountRolledItems_Item): unknown {
    const obj: any = {};
    message.itemDef !== undefined && (obj.itemDef = Math.round(message.itemDef));
    if (message.lootLists) {
      obj.lootLists = message.lootLists.map((e) => e);
    } else {
      obj.lootLists = [];
    }
    message.ignoreLimit !== undefined && (obj.ignoreLimit = message.ignoreLimit);
    message.origin !== undefined && (obj.origin = Math.round(message.origin));
    if (message.dynamicAttributes) {
      obj.dynamicAttributes = message.dynamicAttributes.map((e) =>
        e ? CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute.toJSON(e) : undefined
      );
    } else {
      obj.dynamicAttributes = [];
    }
    if (message.additionalAuditEntries) {
      obj.additionalAuditEntries = message.additionalAuditEntries.map((e) =>
        e ? CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry.toJSON(e) : undefined
      );
    } else {
      obj.additionalAuditEntries = [];
    }
    message.inventoryToken !== undefined && (obj.inventoryToken = Math.round(message.inventoryToken));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCGrantAccountRolledItems_Item>): CMsgGCToGCGrantAccountRolledItems_Item {
    return CMsgGCToGCGrantAccountRolledItems_Item.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCGrantAccountRolledItems_Item>): CMsgGCToGCGrantAccountRolledItems_Item {
    const message = createBaseCMsgGCToGCGrantAccountRolledItems_Item();
    message.itemDef = object.itemDef ?? 0;
    message.lootLists = object.lootLists?.map((e) => e) || [];
    message.ignoreLimit = object.ignoreLimit ?? false;
    message.origin = object.origin ?? 0;
    message.dynamicAttributes =
      object.dynamicAttributes?.map((e) => CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute.fromPartial(e)) ||
      [];
    message.additionalAuditEntries =
      object.additionalAuditEntries?.map((e) =>
        CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry.fromPartial(e)
      ) || [];
    message.inventoryToken = object.inventoryToken ?? 0;
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

  fromJSON(object: any): CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      valueUint32: isSet(object.valueUint32) ? Number(object.valueUint32) : 0,
      valueFloat: isSet(object.valueFloat) ? Number(object.valueFloat) : 0,
      valueString: isSet(object.valueString) ? String(object.valueString) : "",
    };
  },

  toJSON(message: CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.valueUint32 !== undefined && (obj.valueUint32 = Math.round(message.valueUint32));
    message.valueFloat !== undefined && (obj.valueFloat = message.valueFloat);
    message.valueString !== undefined && (obj.valueString = message.valueString);
    return obj;
  },

  create(
    base?: DeepPartial<CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute>,
  ): CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute {
    return CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute>,
  ): CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute {
    const message = createBaseCMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute();
    message.name = object.name ?? "";
    message.valueUint32 = object.valueUint32 ?? 0;
    message.valueFloat = object.valueFloat ?? 0;
    message.valueString = object.valueString ?? "";
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

  fromJSON(object: any): CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry {
    return {
      ownerAccountId: isSet(object.ownerAccountId) ? Number(object.ownerAccountId) : 0,
      auditAction: isSet(object.auditAction) ? Number(object.auditAction) : 0,
      auditData: isSet(object.auditData) ? String(object.auditData) : "0",
    };
  },

  toJSON(message: CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry): unknown {
    const obj: any = {};
    message.ownerAccountId !== undefined && (obj.ownerAccountId = Math.round(message.ownerAccountId));
    message.auditAction !== undefined && (obj.auditAction = Math.round(message.auditAction));
    message.auditData !== undefined && (obj.auditData = message.auditData);
    return obj;
  },

  create(
    base?: DeepPartial<CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry>,
  ): CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry {
    return CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry>,
  ): CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry {
    const message = createBaseCMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry();
    message.ownerAccountId = object.ownerAccountId ?? 0;
    message.auditAction = object.auditAction ?? 0;
    message.auditData = object.auditData ?? "0";
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

  fromJSON(object: any): CMsgGCToGCBetaDeleteItems {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      itemIds: Array.isArray(object?.itemIds) ? object.itemIds.map((e: any) => String(e)) : [],
      itemDefs: Array.isArray(object?.itemDefs) ? object.itemDefs.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgGCToGCBetaDeleteItems): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    if (message.itemIds) {
      obj.itemIds = message.itemIds.map((e) => e);
    } else {
      obj.itemIds = [];
    }
    if (message.itemDefs) {
      obj.itemDefs = message.itemDefs.map((e) => Math.round(e));
    } else {
      obj.itemDefs = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCBetaDeleteItems>): CMsgGCToGCBetaDeleteItems {
    return CMsgGCToGCBetaDeleteItems.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCBetaDeleteItems>): CMsgGCToGCBetaDeleteItems {
    const message = createBaseCMsgGCToGCBetaDeleteItems();
    message.accountId = object.accountId ?? 0;
    message.itemIds = object.itemIds?.map((e) => e) || [];
    message.itemDefs = object.itemDefs?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgGCToGCGrantSelfMadeItemToAccount {
    return {
      itemDefIndex: isSet(object.itemDefIndex) ? Number(object.itemDefIndex) : 0,
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
    };
  },

  toJSON(message: CMsgGCToGCGrantSelfMadeItemToAccount): unknown {
    const obj: any = {};
    message.itemDefIndex !== undefined && (obj.itemDefIndex = Math.round(message.itemDefIndex));
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCGrantSelfMadeItemToAccount>): CMsgGCToGCGrantSelfMadeItemToAccount {
    return CMsgGCToGCGrantSelfMadeItemToAccount.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCGrantSelfMadeItemToAccount>): CMsgGCToGCGrantSelfMadeItemToAccount {
    const message = createBaseCMsgGCToGCGrantSelfMadeItemToAccount();
    message.itemDefIndex = object.itemDefIndex ?? 0;
    message.accountid = object.accountid ?? 0;
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

  fromJSON(object: any): CMsgUseItem {
    return {
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
      targetSteamId: isSet(object.targetSteamId) ? String(object.targetSteamId) : "0",
      giftPotentialTargets: Array.isArray(object?.giftPotentialTargets)
        ? object.giftPotentialTargets.map((e: any) => Number(e))
        : [],
      duelClassLock: isSet(object.duelClassLock) ? Number(object.duelClassLock) : 0,
      initiatorSteamId: isSet(object.initiatorSteamId) ? String(object.initiatorSteamId) : "0",
      itempackAckImmediately: isSet(object.itempackAckImmediately) ? Boolean(object.itempackAckImmediately) : false,
    };
  },

  toJSON(message: CMsgUseItem): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.targetSteamId !== undefined && (obj.targetSteamId = message.targetSteamId);
    if (message.giftPotentialTargets) {
      obj.giftPotentialTargets = message.giftPotentialTargets.map((e) => Math.round(e));
    } else {
      obj.giftPotentialTargets = [];
    }
    message.duelClassLock !== undefined && (obj.duelClassLock = Math.round(message.duelClassLock));
    message.initiatorSteamId !== undefined && (obj.initiatorSteamId = message.initiatorSteamId);
    message.itempackAckImmediately !== undefined && (obj.itempackAckImmediately = message.itempackAckImmediately);
    return obj;
  },

  create(base?: DeepPartial<CMsgUseItem>): CMsgUseItem {
    return CMsgUseItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgUseItem>): CMsgUseItem {
    const message = createBaseCMsgUseItem();
    message.itemId = object.itemId ?? "0";
    message.targetSteamId = object.targetSteamId ?? "0";
    message.giftPotentialTargets = object.giftPotentialTargets?.map((e) => e) || [];
    message.duelClassLock = object.duelClassLock ?? 0;
    message.initiatorSteamId = object.initiatorSteamId ?? "0";
    message.itempackAckImmediately = object.itempackAckImmediately ?? false;
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

  fromJSON(object: any): CMsgServerUseItem {
    return {
      initiatorAccountId: isSet(object.initiatorAccountId) ? Number(object.initiatorAccountId) : 0,
      useItemMsg: isSet(object.useItemMsg) ? CMsgUseItem.fromJSON(object.useItemMsg) : undefined,
    };
  },

  toJSON(message: CMsgServerUseItem): unknown {
    const obj: any = {};
    message.initiatorAccountId !== undefined && (obj.initiatorAccountId = Math.round(message.initiatorAccountId));
    message.useItemMsg !== undefined &&
      (obj.useItemMsg = message.useItemMsg ? CMsgUseItem.toJSON(message.useItemMsg) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgServerUseItem>): CMsgServerUseItem {
    return CMsgServerUseItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgServerUseItem>): CMsgServerUseItem {
    const message = createBaseCMsgServerUseItem();
    message.initiatorAccountId = object.initiatorAccountId ?? 0;
    message.useItemMsg = (object.useItemMsg !== undefined && object.useItemMsg !== null)
      ? CMsgUseItem.fromPartial(object.useItemMsg)
      : undefined;
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

  fromJSON(object: any): CMsgUseMultipleItems {
    return { itemIds: Array.isArray(object?.itemIds) ? object.itemIds.map((e: any) => String(e)) : [] };
  },

  toJSON(message: CMsgUseMultipleItems): unknown {
    const obj: any = {};
    if (message.itemIds) {
      obj.itemIds = message.itemIds.map((e) => e);
    } else {
      obj.itemIds = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgUseMultipleItems>): CMsgUseMultipleItems {
    return CMsgUseMultipleItems.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgUseMultipleItems>): CMsgUseMultipleItems {
    const message = createBaseCMsgUseMultipleItems();
    message.itemIds = object.itemIds?.map((e) => e) || [];
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

  fromJSON(object: any): CGCStoreRechargeRedirectLineItem {
    return {
      itemDefId: isSet(object.itemDefId) ? Number(object.itemDefId) : 0,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
    };
  },

  toJSON(message: CGCStoreRechargeRedirectLineItem): unknown {
    const obj: any = {};
    message.itemDefId !== undefined && (obj.itemDefId = Math.round(message.itemDefId));
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    return obj;
  },

  create(base?: DeepPartial<CGCStoreRechargeRedirectLineItem>): CGCStoreRechargeRedirectLineItem {
    return CGCStoreRechargeRedirectLineItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CGCStoreRechargeRedirectLineItem>): CGCStoreRechargeRedirectLineItem {
    const message = createBaseCGCStoreRechargeRedirectLineItem();
    message.itemDefId = object.itemDefId ?? 0;
    message.quantity = object.quantity ?? 0;
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

  fromJSON(object: any): CMsgGCEconSQLWorkItemEmbeddedRollbackData {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      deletedItemId: isSet(object.deletedItemId) ? String(object.deletedItemId) : "0",
      oldAuditAction: isSet(object.oldAuditAction) ? Number(object.oldAuditAction) : 0,
      newAuditAction: isSet(object.newAuditAction) ? Number(object.newAuditAction) : 0,
      expectedAuditAction: isSet(object.expectedAuditAction) ? Number(object.expectedAuditAction) : 0,
    };
  },

  toJSON(message: CMsgGCEconSQLWorkItemEmbeddedRollbackData): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.deletedItemId !== undefined && (obj.deletedItemId = message.deletedItemId);
    message.oldAuditAction !== undefined && (obj.oldAuditAction = Math.round(message.oldAuditAction));
    message.newAuditAction !== undefined && (obj.newAuditAction = Math.round(message.newAuditAction));
    message.expectedAuditAction !== undefined && (obj.expectedAuditAction = Math.round(message.expectedAuditAction));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCEconSQLWorkItemEmbeddedRollbackData>): CMsgGCEconSQLWorkItemEmbeddedRollbackData {
    return CMsgGCEconSQLWorkItemEmbeddedRollbackData.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgGCEconSQLWorkItemEmbeddedRollbackData>,
  ): CMsgGCEconSQLWorkItemEmbeddedRollbackData {
    const message = createBaseCMsgGCEconSQLWorkItemEmbeddedRollbackData();
    message.accountId = object.accountId ?? 0;
    message.deletedItemId = object.deletedItemId ?? "0";
    message.oldAuditAction = object.oldAuditAction ?? 0;
    message.newAuditAction = object.newAuditAction ?? 0;
    message.expectedAuditAction = object.expectedAuditAction ?? 0;
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

  fromJSON(object: any): CMsgCraftStatue {
    return {
      heroid: isSet(object.heroid) ? Number(object.heroid) : 0,
      sequencename: isSet(object.sequencename) ? String(object.sequencename) : "",
      cycle: isSet(object.cycle) ? Number(object.cycle) : 0,
      description: isSet(object.description) ? String(object.description) : "",
      pedestalItemdef: isSet(object.pedestalItemdef) ? Number(object.pedestalItemdef) : 0,
      toolid: isSet(object.toolid) ? String(object.toolid) : "0",
    };
  },

  toJSON(message: CMsgCraftStatue): unknown {
    const obj: any = {};
    message.heroid !== undefined && (obj.heroid = Math.round(message.heroid));
    message.sequencename !== undefined && (obj.sequencename = message.sequencename);
    message.cycle !== undefined && (obj.cycle = message.cycle);
    message.description !== undefined && (obj.description = message.description);
    message.pedestalItemdef !== undefined && (obj.pedestalItemdef = Math.round(message.pedestalItemdef));
    message.toolid !== undefined && (obj.toolid = message.toolid);
    return obj;
  },

  create(base?: DeepPartial<CMsgCraftStatue>): CMsgCraftStatue {
    return CMsgCraftStatue.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgCraftStatue>): CMsgCraftStatue {
    const message = createBaseCMsgCraftStatue();
    message.heroid = object.heroid ?? 0;
    message.sequencename = object.sequencename ?? "";
    message.cycle = object.cycle ?? 0;
    message.description = object.description ?? "";
    message.pedestalItemdef = object.pedestalItemdef ?? 0;
    message.toolid = object.toolid ?? "0";
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

  fromJSON(object: any): CMsgRedeemCode {
    return { code: isSet(object.code) ? String(object.code) : "" };
  },

  toJSON(message: CMsgRedeemCode): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    return obj;
  },

  create(base?: DeepPartial<CMsgRedeemCode>): CMsgRedeemCode {
    return CMsgRedeemCode.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgRedeemCode>): CMsgRedeemCode {
    const message = createBaseCMsgRedeemCode();
    message.code = object.code ?? "";
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

  fromJSON(object: any): CMsgRedeemCodeResponse {
    return {
      response: isSet(object.response) ? Number(object.response) : 0,
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
    };
  },

  toJSON(message: CMsgRedeemCodeResponse): unknown {
    const obj: any = {};
    message.response !== undefined && (obj.response = Math.round(message.response));
    message.itemId !== undefined && (obj.itemId = message.itemId);
    return obj;
  },

  create(base?: DeepPartial<CMsgRedeemCodeResponse>): CMsgRedeemCodeResponse {
    return CMsgRedeemCodeResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgRedeemCodeResponse>): CMsgRedeemCodeResponse {
    const message = createBaseCMsgRedeemCodeResponse();
    message.response = object.response ?? 0;
    message.itemId = object.itemId ?? "0";
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

  fromJSON(object: any): CMsgDevNewItemRequest {
    return {
      itemDefName: isSet(object.itemDefName) ? String(object.itemDefName) : "",
      lootListName: isSet(object.lootListName) ? String(object.lootListName) : "",
      attrDefName: Array.isArray(object?.attrDefName) ? object.attrDefName.map((e: any) => String(e)) : [],
      attrValue: Array.isArray(object?.attrValue) ? object.attrValue.map((e: any) => String(e)) : [],
      itemQuality: isSet(object.itemQuality) ? Number(object.itemQuality) : 0,
    };
  },

  toJSON(message: CMsgDevNewItemRequest): unknown {
    const obj: any = {};
    message.itemDefName !== undefined && (obj.itemDefName = message.itemDefName);
    message.lootListName !== undefined && (obj.lootListName = message.lootListName);
    if (message.attrDefName) {
      obj.attrDefName = message.attrDefName.map((e) => e);
    } else {
      obj.attrDefName = [];
    }
    if (message.attrValue) {
      obj.attrValue = message.attrValue.map((e) => e);
    } else {
      obj.attrValue = [];
    }
    message.itemQuality !== undefined && (obj.itemQuality = Math.round(message.itemQuality));
    return obj;
  },

  create(base?: DeepPartial<CMsgDevNewItemRequest>): CMsgDevNewItemRequest {
    return CMsgDevNewItemRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDevNewItemRequest>): CMsgDevNewItemRequest {
    const message = createBaseCMsgDevNewItemRequest();
    message.itemDefName = object.itemDefName ?? "";
    message.lootListName = object.lootListName ?? "";
    message.attrDefName = object.attrDefName?.map((e) => e) || [];
    message.attrValue = object.attrValue?.map((e) => e) || [];
    message.itemQuality = object.itemQuality ?? 0;
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

  fromJSON(object: any): CMsgDevNewItemRequestResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: CMsgDevNewItemRequestResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create(base?: DeepPartial<CMsgDevNewItemRequestResponse>): CMsgDevNewItemRequestResponse {
    return CMsgDevNewItemRequestResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDevNewItemRequestResponse>): CMsgDevNewItemRequestResponse {
    const message = createBaseCMsgDevNewItemRequestResponse();
    message.success = object.success ?? false;
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

  fromJSON(object: any): CMsgDevUnlockAllItemStyles {
    return { itemId: isSet(object.itemId) ? String(object.itemId) : "0" };
  },

  toJSON(message: CMsgDevUnlockAllItemStyles): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    return obj;
  },

  create(base?: DeepPartial<CMsgDevUnlockAllItemStyles>): CMsgDevUnlockAllItemStyles {
    return CMsgDevUnlockAllItemStyles.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDevUnlockAllItemStyles>): CMsgDevUnlockAllItemStyles {
    const message = createBaseCMsgDevUnlockAllItemStyles();
    message.itemId = object.itemId ?? "0";
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

  fromJSON(object: any): CMsgDevUnlockAllItemStylesResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: CMsgDevUnlockAllItemStylesResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create(base?: DeepPartial<CMsgDevUnlockAllItemStylesResponse>): CMsgDevUnlockAllItemStylesResponse {
    return CMsgDevUnlockAllItemStylesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDevUnlockAllItemStylesResponse>): CMsgDevUnlockAllItemStylesResponse {
    const message = createBaseCMsgDevUnlockAllItemStylesResponse();
    message.success = object.success ?? false;
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

  fromJSON(object: any): CMsgGCGetAccountSubscriptionItem {
    return { accountId: isSet(object.accountId) ? Number(object.accountId) : 0 };
  },

  toJSON(message: CMsgGCGetAccountSubscriptionItem): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCGetAccountSubscriptionItem>): CMsgGCGetAccountSubscriptionItem {
    return CMsgGCGetAccountSubscriptionItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCGetAccountSubscriptionItem>): CMsgGCGetAccountSubscriptionItem {
    const message = createBaseCMsgGCGetAccountSubscriptionItem();
    message.accountId = object.accountId ?? 0;
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

  fromJSON(object: any): CMsgGCGetAccountSubscriptionItemResponse {
    return { defIndex: isSet(object.defIndex) ? Number(object.defIndex) : 0 };
  },

  toJSON(message: CMsgGCGetAccountSubscriptionItemResponse): unknown {
    const obj: any = {};
    message.defIndex !== undefined && (obj.defIndex = Math.round(message.defIndex));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCGetAccountSubscriptionItemResponse>): CMsgGCGetAccountSubscriptionItemResponse {
    return CMsgGCGetAccountSubscriptionItemResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCGetAccountSubscriptionItemResponse>): CMsgGCGetAccountSubscriptionItemResponse {
    const message = createBaseCMsgGCGetAccountSubscriptionItemResponse();
    message.defIndex = object.defIndex ?? 0;
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

  fromJSON(object: any): CMsgGCAddGiftItem {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
    };
  },

  toJSON(message: CMsgGCAddGiftItem): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.itemId !== undefined && (obj.itemId = message.itemId);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCAddGiftItem>): CMsgGCAddGiftItem {
    return CMsgGCAddGiftItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCAddGiftItem>): CMsgGCAddGiftItem {
    const message = createBaseCMsgGCAddGiftItem();
    message.accountId = object.accountId ?? 0;
    message.itemId = object.itemId ?? "0";
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

  fromJSON(object: any): CMsgClientToGCWrapAndDeliverGift {
    return {
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
      giveToAccountId: isSet(object.giveToAccountId) ? Number(object.giveToAccountId) : 0,
      giftMessage: isSet(object.giftMessage) ? String(object.giftMessage) : "",
    };
  },

  toJSON(message: CMsgClientToGCWrapAndDeliverGift): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.giveToAccountId !== undefined && (obj.giveToAccountId = Math.round(message.giveToAccountId));
    message.giftMessage !== undefined && (obj.giftMessage = message.giftMessage);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCWrapAndDeliverGift>): CMsgClientToGCWrapAndDeliverGift {
    return CMsgClientToGCWrapAndDeliverGift.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCWrapAndDeliverGift>): CMsgClientToGCWrapAndDeliverGift {
    const message = createBaseCMsgClientToGCWrapAndDeliverGift();
    message.itemId = object.itemId ?? "0";
    message.giveToAccountId = object.giveToAccountId ?? 0;
    message.giftMessage = object.giftMessage ?? "";
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

  fromJSON(object: any): CMsgClientToGCWrapAndDeliverGiftResponse {
    return {
      response: isSet(object.response) ? eGCMsgResponseFromJSON(object.response) : 0,
      giftingChargeUses: isSet(object.giftingChargeUses) ? Number(object.giftingChargeUses) : 0,
      giftingChargeMax: isSet(object.giftingChargeMax) ? Number(object.giftingChargeMax) : 0,
      giftingUses: isSet(object.giftingUses) ? Number(object.giftingUses) : 0,
      giftingMax: isSet(object.giftingMax) ? Number(object.giftingMax) : 0,
      giftingWindowHours: isSet(object.giftingWindowHours) ? Number(object.giftingWindowHours) : 0,
      tradeRestriction: isSet(object.tradeRestriction)
        ? eGCMsgInitiateTradeResponseFromJSON(object.tradeRestriction)
        : 0,
    };
  },

  toJSON(message: CMsgClientToGCWrapAndDeliverGiftResponse): unknown {
    const obj: any = {};
    message.response !== undefined && (obj.response = eGCMsgResponseToJSON(message.response));
    message.giftingChargeUses !== undefined && (obj.giftingChargeUses = Math.round(message.giftingChargeUses));
    message.giftingChargeMax !== undefined && (obj.giftingChargeMax = Math.round(message.giftingChargeMax));
    message.giftingUses !== undefined && (obj.giftingUses = Math.round(message.giftingUses));
    message.giftingMax !== undefined && (obj.giftingMax = Math.round(message.giftingMax));
    message.giftingWindowHours !== undefined && (obj.giftingWindowHours = Math.round(message.giftingWindowHours));
    message.tradeRestriction !== undefined &&
      (obj.tradeRestriction = eGCMsgInitiateTradeResponseToJSON(message.tradeRestriction));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCWrapAndDeliverGiftResponse>): CMsgClientToGCWrapAndDeliverGiftResponse {
    return CMsgClientToGCWrapAndDeliverGiftResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCWrapAndDeliverGiftResponse>): CMsgClientToGCWrapAndDeliverGiftResponse {
    const message = createBaseCMsgClientToGCWrapAndDeliverGiftResponse();
    message.response = object.response ?? 0;
    message.giftingChargeUses = object.giftingChargeUses ?? 0;
    message.giftingChargeMax = object.giftingChargeMax ?? 0;
    message.giftingUses = object.giftingUses ?? 0;
    message.giftingMax = object.giftingMax ?? 0;
    message.giftingWindowHours = object.giftingWindowHours ?? 0;
    message.tradeRestriction = object.tradeRestriction ?? 0;
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

  fromJSON(object: any): CMsgClientToGCUnwrapGift {
    return { itemId: isSet(object.itemId) ? String(object.itemId) : "0" };
  },

  toJSON(message: CMsgClientToGCUnwrapGift): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCUnwrapGift>): CMsgClientToGCUnwrapGift {
    return CMsgClientToGCUnwrapGift.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCUnwrapGift>): CMsgClientToGCUnwrapGift {
    const message = createBaseCMsgClientToGCUnwrapGift();
    message.itemId = object.itemId ?? "0";
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

  fromJSON(_: any): CMsgClientToGCGetGiftPermissions {
    return {};
  },

  toJSON(_: CMsgClientToGCGetGiftPermissions): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCGetGiftPermissions>): CMsgClientToGCGetGiftPermissions {
    return CMsgClientToGCGetGiftPermissions.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CMsgClientToGCGetGiftPermissions>): CMsgClientToGCGetGiftPermissions {
    const message = createBaseCMsgClientToGCGetGiftPermissions();
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

  fromJSON(object: any): CMsgClientToGCGetGiftPermissionsResponse {
    return {
      isUnlimited: isSet(object.isUnlimited) ? Boolean(object.isUnlimited) : false,
      hasTwoFactor: isSet(object.hasTwoFactor) ? Boolean(object.hasTwoFactor) : false,
      senderPermission: isSet(object.senderPermission)
        ? eGCMsgInitiateTradeResponseFromJSON(object.senderPermission)
        : 0,
      friendshipAgeRequirement: isSet(object.friendshipAgeRequirement) ? Number(object.friendshipAgeRequirement) : 0,
      friendshipAgeRequirementTwoFactor: isSet(object.friendshipAgeRequirementTwoFactor)
        ? Number(object.friendshipAgeRequirementTwoFactor)
        : 0,
      friendPermissions: Array.isArray(object?.friendPermissions)
        ? object.friendPermissions.map((e: any) =>
          CMsgClientToGCGetGiftPermissionsResponse_FriendPermission.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CMsgClientToGCGetGiftPermissionsResponse): unknown {
    const obj: any = {};
    message.isUnlimited !== undefined && (obj.isUnlimited = message.isUnlimited);
    message.hasTwoFactor !== undefined && (obj.hasTwoFactor = message.hasTwoFactor);
    message.senderPermission !== undefined &&
      (obj.senderPermission = eGCMsgInitiateTradeResponseToJSON(message.senderPermission));
    message.friendshipAgeRequirement !== undefined &&
      (obj.friendshipAgeRequirement = Math.round(message.friendshipAgeRequirement));
    message.friendshipAgeRequirementTwoFactor !== undefined &&
      (obj.friendshipAgeRequirementTwoFactor = Math.round(message.friendshipAgeRequirementTwoFactor));
    if (message.friendPermissions) {
      obj.friendPermissions = message.friendPermissions.map((e) =>
        e ? CMsgClientToGCGetGiftPermissionsResponse_FriendPermission.toJSON(e) : undefined
      );
    } else {
      obj.friendPermissions = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCGetGiftPermissionsResponse>): CMsgClientToGCGetGiftPermissionsResponse {
    return CMsgClientToGCGetGiftPermissionsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCGetGiftPermissionsResponse>): CMsgClientToGCGetGiftPermissionsResponse {
    const message = createBaseCMsgClientToGCGetGiftPermissionsResponse();
    message.isUnlimited = object.isUnlimited ?? false;
    message.hasTwoFactor = object.hasTwoFactor ?? false;
    message.senderPermission = object.senderPermission ?? 0;
    message.friendshipAgeRequirement = object.friendshipAgeRequirement ?? 0;
    message.friendshipAgeRequirementTwoFactor = object.friendshipAgeRequirementTwoFactor ?? 0;
    message.friendPermissions =
      object.friendPermissions?.map((e) => CMsgClientToGCGetGiftPermissionsResponse_FriendPermission.fromPartial(e)) ||
      [];
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

  fromJSON(object: any): CMsgClientToGCGetGiftPermissionsResponse_FriendPermission {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      permission: isSet(object.permission) ? eGCMsgInitiateTradeResponseFromJSON(object.permission) : 0,
    };
  },

  toJSON(message: CMsgClientToGCGetGiftPermissionsResponse_FriendPermission): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.permission !== undefined && (obj.permission = eGCMsgInitiateTradeResponseToJSON(message.permission));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCGetGiftPermissionsResponse_FriendPermission>,
  ): CMsgClientToGCGetGiftPermissionsResponse_FriendPermission {
    return CMsgClientToGCGetGiftPermissionsResponse_FriendPermission.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCGetGiftPermissionsResponse_FriendPermission>,
  ): CMsgClientToGCGetGiftPermissionsResponse_FriendPermission {
    const message = createBaseCMsgClientToGCGetGiftPermissionsResponse_FriendPermission();
    message.accountId = object.accountId ?? 0;
    message.permission = object.permission ?? 0;
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

  fromJSON(object: any): CMsgClientToGCUnpackBundle {
    return { itemId: isSet(object.itemId) ? String(object.itemId) : "0" };
  },

  toJSON(message: CMsgClientToGCUnpackBundle): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCUnpackBundle>): CMsgClientToGCUnpackBundle {
    return CMsgClientToGCUnpackBundle.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCUnpackBundle>): CMsgClientToGCUnpackBundle {
    const message = createBaseCMsgClientToGCUnpackBundle();
    message.itemId = object.itemId ?? "0";
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

  fromJSON(object: any): CMsgClientToGCUnpackBundleResponse {
    return {
      unpackedItemIds: Array.isArray(object?.unpackedItemIds) ? object.unpackedItemIds.map((e: any) => String(e)) : [],
      response: isSet(object.response) ? cMsgClientToGCUnpackBundleResponse_EUnpackBundleFromJSON(object.response) : 0,
      unpackedItemDefIndexes: Array.isArray(object?.unpackedItemDefIndexes)
        ? object.unpackedItemDefIndexes.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CMsgClientToGCUnpackBundleResponse): unknown {
    const obj: any = {};
    if (message.unpackedItemIds) {
      obj.unpackedItemIds = message.unpackedItemIds.map((e) => e);
    } else {
      obj.unpackedItemIds = [];
    }
    message.response !== undefined &&
      (obj.response = cMsgClientToGCUnpackBundleResponse_EUnpackBundleToJSON(message.response));
    if (message.unpackedItemDefIndexes) {
      obj.unpackedItemDefIndexes = message.unpackedItemDefIndexes.map((e) => Math.round(e));
    } else {
      obj.unpackedItemDefIndexes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCUnpackBundleResponse>): CMsgClientToGCUnpackBundleResponse {
    return CMsgClientToGCUnpackBundleResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCUnpackBundleResponse>): CMsgClientToGCUnpackBundleResponse {
    const message = createBaseCMsgClientToGCUnpackBundleResponse();
    message.unpackedItemIds = object.unpackedItemIds?.map((e) => e) || [];
    message.response = object.response ?? 0;
    message.unpackedItemDefIndexes = object.unpackedItemDefIndexes?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgGCToClientStoreTransactionCompleted {
    return {
      txnId: isSet(object.txnId) ? String(object.txnId) : "0",
      itemIds: Array.isArray(object?.itemIds) ? object.itemIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CMsgGCToClientStoreTransactionCompleted): unknown {
    const obj: any = {};
    message.txnId !== undefined && (obj.txnId = message.txnId);
    if (message.itemIds) {
      obj.itemIds = message.itemIds.map((e) => e);
    } else {
      obj.itemIds = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToClientStoreTransactionCompleted>): CMsgGCToClientStoreTransactionCompleted {
    return CMsgGCToClientStoreTransactionCompleted.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToClientStoreTransactionCompleted>): CMsgGCToClientStoreTransactionCompleted {
    const message = createBaseCMsgGCToClientStoreTransactionCompleted();
    message.txnId = object.txnId ?? "0";
    message.itemIds = object.itemIds?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgClientToGCEquipItems {
    return {
      equips: Array.isArray(object?.equips)
        ? object.equips.map((e: any) => CMsgAdjustItemEquippedState.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientToGCEquipItems): unknown {
    const obj: any = {};
    if (message.equips) {
      obj.equips = message.equips.map((e) => e ? CMsgAdjustItemEquippedState.toJSON(e) : undefined);
    } else {
      obj.equips = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCEquipItems>): CMsgClientToGCEquipItems {
    return CMsgClientToGCEquipItems.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCEquipItems>): CMsgClientToGCEquipItems {
    const message = createBaseCMsgClientToGCEquipItems();
    message.equips = object.equips?.map((e) => CMsgAdjustItemEquippedState.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgClientToGCEquipItemsResponse {
    return { soCacheVersionId: isSet(object.soCacheVersionId) ? String(object.soCacheVersionId) : "0" };
  },

  toJSON(message: CMsgClientToGCEquipItemsResponse): unknown {
    const obj: any = {};
    message.soCacheVersionId !== undefined && (obj.soCacheVersionId = message.soCacheVersionId);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCEquipItemsResponse>): CMsgClientToGCEquipItemsResponse {
    return CMsgClientToGCEquipItemsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCEquipItemsResponse>): CMsgClientToGCEquipItemsResponse {
    const message = createBaseCMsgClientToGCEquipItemsResponse();
    message.soCacheVersionId = object.soCacheVersionId ?? "0";
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

  fromJSON(object: any): CMsgClientToGCSetItemStyle {
    return {
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
      styleIndex: isSet(object.styleIndex) ? Number(object.styleIndex) : 0,
    };
  },

  toJSON(message: CMsgClientToGCSetItemStyle): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.styleIndex !== undefined && (obj.styleIndex = Math.round(message.styleIndex));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCSetItemStyle>): CMsgClientToGCSetItemStyle {
    return CMsgClientToGCSetItemStyle.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCSetItemStyle>): CMsgClientToGCSetItemStyle {
    const message = createBaseCMsgClientToGCSetItemStyle();
    message.itemId = object.itemId ?? "0";
    message.styleIndex = object.styleIndex ?? 0;
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

  fromJSON(object: any): CMsgClientToGCSetItemStyleResponse {
    return {
      response: isSet(object.response) ? cMsgClientToGCSetItemStyleResponse_ESetStyleFromJSON(object.response) : 0,
    };
  },

  toJSON(message: CMsgClientToGCSetItemStyleResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = cMsgClientToGCSetItemStyleResponse_ESetStyleToJSON(message.response));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCSetItemStyleResponse>): CMsgClientToGCSetItemStyleResponse {
    return CMsgClientToGCSetItemStyleResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCSetItemStyleResponse>): CMsgClientToGCSetItemStyleResponse {
    const message = createBaseCMsgClientToGCSetItemStyleResponse();
    message.response = object.response ?? 0;
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

  fromJSON(object: any): CMsgClientToGCUnlockItemStyle {
    return {
      itemToUnlock: isSet(object.itemToUnlock) ? String(object.itemToUnlock) : "0",
      styleIndex: isSet(object.styleIndex) ? Number(object.styleIndex) : 0,
      consumableItemIds: Array.isArray(object?.consumableItemIds)
        ? object.consumableItemIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: CMsgClientToGCUnlockItemStyle): unknown {
    const obj: any = {};
    message.itemToUnlock !== undefined && (obj.itemToUnlock = message.itemToUnlock);
    message.styleIndex !== undefined && (obj.styleIndex = Math.round(message.styleIndex));
    if (message.consumableItemIds) {
      obj.consumableItemIds = message.consumableItemIds.map((e) => e);
    } else {
      obj.consumableItemIds = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCUnlockItemStyle>): CMsgClientToGCUnlockItemStyle {
    return CMsgClientToGCUnlockItemStyle.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCUnlockItemStyle>): CMsgClientToGCUnlockItemStyle {
    const message = createBaseCMsgClientToGCUnlockItemStyle();
    message.itemToUnlock = object.itemToUnlock ?? "0";
    message.styleIndex = object.styleIndex ?? 0;
    message.consumableItemIds = object.consumableItemIds?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgClientToGCUnlockItemStyleResponse {
    return {
      response: isSet(object.response)
        ? cMsgClientToGCUnlockItemStyleResponse_EUnlockStyleFromJSON(object.response)
        : 0,
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
      styleIndex: isSet(object.styleIndex) ? Number(object.styleIndex) : 0,
      stylePrereq: isSet(object.stylePrereq) ? Number(object.stylePrereq) : 0,
    };
  },

  toJSON(message: CMsgClientToGCUnlockItemStyleResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = cMsgClientToGCUnlockItemStyleResponse_EUnlockStyleToJSON(message.response));
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.styleIndex !== undefined && (obj.styleIndex = Math.round(message.styleIndex));
    message.stylePrereq !== undefined && (obj.stylePrereq = Math.round(message.stylePrereq));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCUnlockItemStyleResponse>): CMsgClientToGCUnlockItemStyleResponse {
    return CMsgClientToGCUnlockItemStyleResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCUnlockItemStyleResponse>): CMsgClientToGCUnlockItemStyleResponse {
    const message = createBaseCMsgClientToGCUnlockItemStyleResponse();
    message.response = object.response ?? 0;
    message.itemId = object.itemId ?? "0";
    message.styleIndex = object.styleIndex ?? 0;
    message.stylePrereq = object.stylePrereq ?? 0;
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

  fromJSON(object: any): CMsgClientToGCSetItemInventoryCategory {
    return {
      itemIds: Array.isArray(object?.itemIds) ? object.itemIds.map((e: any) => String(e)) : [],
      setToValue: isSet(object.setToValue) ? Number(object.setToValue) : 0,
      removeCategories: isSet(object.removeCategories) ? Number(object.removeCategories) : 0,
      addCategories: isSet(object.addCategories) ? Number(object.addCategories) : 0,
    };
  },

  toJSON(message: CMsgClientToGCSetItemInventoryCategory): unknown {
    const obj: any = {};
    if (message.itemIds) {
      obj.itemIds = message.itemIds.map((e) => e);
    } else {
      obj.itemIds = [];
    }
    message.setToValue !== undefined && (obj.setToValue = Math.round(message.setToValue));
    message.removeCategories !== undefined && (obj.removeCategories = Math.round(message.removeCategories));
    message.addCategories !== undefined && (obj.addCategories = Math.round(message.addCategories));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCSetItemInventoryCategory>): CMsgClientToGCSetItemInventoryCategory {
    return CMsgClientToGCSetItemInventoryCategory.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCSetItemInventoryCategory>): CMsgClientToGCSetItemInventoryCategory {
    const message = createBaseCMsgClientToGCSetItemInventoryCategory();
    message.itemIds = object.itemIds?.map((e) => e) || [];
    message.setToValue = object.setToValue ?? 0;
    message.removeCategories = object.removeCategories ?? 0;
    message.addCategories = object.addCategories ?? 0;
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

  fromJSON(object: any): CMsgClientToGCUnlockCrate {
    return {
      crateItemId: isSet(object.crateItemId) ? String(object.crateItemId) : "0",
      keyItemId: isSet(object.keyItemId) ? String(object.keyItemId) : "0",
    };
  },

  toJSON(message: CMsgClientToGCUnlockCrate): unknown {
    const obj: any = {};
    message.crateItemId !== undefined && (obj.crateItemId = message.crateItemId);
    message.keyItemId !== undefined && (obj.keyItemId = message.keyItemId);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCUnlockCrate>): CMsgClientToGCUnlockCrate {
    return CMsgClientToGCUnlockCrate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCUnlockCrate>): CMsgClientToGCUnlockCrate {
    const message = createBaseCMsgClientToGCUnlockCrate();
    message.crateItemId = object.crateItemId ?? "0";
    message.keyItemId = object.keyItemId ?? "0";
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

  fromJSON(object: any): CMsgClientToGCUnlockCrateResponse {
    return {
      result: isSet(object.result) ? eGCMsgResponseFromJSON(object.result) : 0,
      grantedItems: Array.isArray(object?.grantedItems)
        ? object.grantedItems.map((e: any) => CMsgClientToGCUnlockCrateResponse_Item.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientToGCUnlockCrateResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = eGCMsgResponseToJSON(message.result));
    if (message.grantedItems) {
      obj.grantedItems = message.grantedItems.map((e) =>
        e ? CMsgClientToGCUnlockCrateResponse_Item.toJSON(e) : undefined
      );
    } else {
      obj.grantedItems = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCUnlockCrateResponse>): CMsgClientToGCUnlockCrateResponse {
    return CMsgClientToGCUnlockCrateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCUnlockCrateResponse>): CMsgClientToGCUnlockCrateResponse {
    const message = createBaseCMsgClientToGCUnlockCrateResponse();
    message.result = object.result ?? 0;
    message.grantedItems = object.grantedItems?.map((e) => CMsgClientToGCUnlockCrateResponse_Item.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgClientToGCUnlockCrateResponse_Item {
    return {
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
      defIndex: isSet(object.defIndex) ? Number(object.defIndex) : 0,
    };
  },

  toJSON(message: CMsgClientToGCUnlockCrateResponse_Item): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.defIndex !== undefined && (obj.defIndex = Math.round(message.defIndex));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCUnlockCrateResponse_Item>): CMsgClientToGCUnlockCrateResponse_Item {
    return CMsgClientToGCUnlockCrateResponse_Item.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCUnlockCrateResponse_Item>): CMsgClientToGCUnlockCrateResponse_Item {
    const message = createBaseCMsgClientToGCUnlockCrateResponse_Item();
    message.itemId = object.itemId ?? "0";
    message.defIndex = object.defIndex ?? 0;
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

  fromJSON(object: any): CMsgClientToGCRemoveItemAttribute {
    return { itemId: isSet(object.itemId) ? String(object.itemId) : "0" };
  },

  toJSON(message: CMsgClientToGCRemoveItemAttribute): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCRemoveItemAttribute>): CMsgClientToGCRemoveItemAttribute {
    return CMsgClientToGCRemoveItemAttribute.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCRemoveItemAttribute>): CMsgClientToGCRemoveItemAttribute {
    const message = createBaseCMsgClientToGCRemoveItemAttribute();
    message.itemId = object.itemId ?? "0";
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

  fromJSON(object: any): CMsgClientToGCRemoveItemAttributeResponse {
    return {
      response: isSet(object.response)
        ? cMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttributeFromJSON(object.response)
        : 0,
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
    };
  },

  toJSON(message: CMsgClientToGCRemoveItemAttributeResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = cMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttributeToJSON(message.response));
    message.itemId !== undefined && (obj.itemId = message.itemId);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCRemoveItemAttributeResponse>): CMsgClientToGCRemoveItemAttributeResponse {
    return CMsgClientToGCRemoveItemAttributeResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCRemoveItemAttributeResponse>,
  ): CMsgClientToGCRemoveItemAttributeResponse {
    const message = createBaseCMsgClientToGCRemoveItemAttributeResponse();
    message.response = object.response ?? 0;
    message.itemId = object.itemId ?? "0";
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

  fromJSON(object: any): CMsgClientToGCNameItem {
    return {
      subjectItemId: isSet(object.subjectItemId) ? String(object.subjectItemId) : "0",
      toolItemId: isSet(object.toolItemId) ? String(object.toolItemId) : "0",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: CMsgClientToGCNameItem): unknown {
    const obj: any = {};
    message.subjectItemId !== undefined && (obj.subjectItemId = message.subjectItemId);
    message.toolItemId !== undefined && (obj.toolItemId = message.toolItemId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCNameItem>): CMsgClientToGCNameItem {
    return CMsgClientToGCNameItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCNameItem>): CMsgClientToGCNameItem {
    const message = createBaseCMsgClientToGCNameItem();
    message.subjectItemId = object.subjectItemId ?? "0";
    message.toolItemId = object.toolItemId ?? "0";
    message.name = object.name ?? "";
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

  fromJSON(object: any): CMsgClientToGCNameItemResponse {
    return {
      response: isSet(object.response) ? cMsgClientToGCNameItemResponse_ENameItemFromJSON(object.response) : 0,
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
    };
  },

  toJSON(message: CMsgClientToGCNameItemResponse): unknown {
    const obj: any = {};
    message.response !== undefined && (obj.response = cMsgClientToGCNameItemResponse_ENameItemToJSON(message.response));
    message.itemId !== undefined && (obj.itemId = message.itemId);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCNameItemResponse>): CMsgClientToGCNameItemResponse {
    return CMsgClientToGCNameItemResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCNameItemResponse>): CMsgClientToGCNameItemResponse {
    const message = createBaseCMsgClientToGCNameItemResponse();
    message.response = object.response ?? 0;
    message.itemId = object.itemId ?? "0";
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

  fromJSON(object: any): CMsgGCSetItemPosition {
    return {
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
      newPosition: isSet(object.newPosition) ? Number(object.newPosition) : 0,
    };
  },

  toJSON(message: CMsgGCSetItemPosition): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.newPosition !== undefined && (obj.newPosition = Math.round(message.newPosition));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCSetItemPosition>): CMsgGCSetItemPosition {
    return CMsgGCSetItemPosition.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCSetItemPosition>): CMsgGCSetItemPosition {
    const message = createBaseCMsgGCSetItemPosition();
    message.itemId = object.itemId ?? "0";
    message.newPosition = object.newPosition ?? 0;
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

  fromJSON(object: any): CAttributeItemDynamicRecipeComponent {
    return {
      itemDef: isSet(object.itemDef) ? Number(object.itemDef) : 0,
      itemQuality: isSet(object.itemQuality) ? Number(object.itemQuality) : 0,
      itemFlags: isSet(object.itemFlags) ? Number(object.itemFlags) : 0,
      attributesString: isSet(object.attributesString) ? String(object.attributesString) : "",
      itemCount: isSet(object.itemCount) ? Number(object.itemCount) : 0,
      itemsFulfilled: isSet(object.itemsFulfilled) ? Number(object.itemsFulfilled) : 0,
      itemRarity: isSet(object.itemRarity) ? Number(object.itemRarity) : 0,
      lootlist: isSet(object.lootlist) ? String(object.lootlist) : "",
      fulfilledItemId: isSet(object.fulfilledItemId) ? String(object.fulfilledItemId) : "0",
      associatedItemDef: isSet(object.associatedItemDef) ? Number(object.associatedItemDef) : 0,
    };
  },

  toJSON(message: CAttributeItemDynamicRecipeComponent): unknown {
    const obj: any = {};
    message.itemDef !== undefined && (obj.itemDef = Math.round(message.itemDef));
    message.itemQuality !== undefined && (obj.itemQuality = Math.round(message.itemQuality));
    message.itemFlags !== undefined && (obj.itemFlags = Math.round(message.itemFlags));
    message.attributesString !== undefined && (obj.attributesString = message.attributesString);
    message.itemCount !== undefined && (obj.itemCount = Math.round(message.itemCount));
    message.itemsFulfilled !== undefined && (obj.itemsFulfilled = Math.round(message.itemsFulfilled));
    message.itemRarity !== undefined && (obj.itemRarity = Math.round(message.itemRarity));
    message.lootlist !== undefined && (obj.lootlist = message.lootlist);
    message.fulfilledItemId !== undefined && (obj.fulfilledItemId = message.fulfilledItemId);
    message.associatedItemDef !== undefined && (obj.associatedItemDef = Math.round(message.associatedItemDef));
    return obj;
  },

  create(base?: DeepPartial<CAttributeItemDynamicRecipeComponent>): CAttributeItemDynamicRecipeComponent {
    return CAttributeItemDynamicRecipeComponent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CAttributeItemDynamicRecipeComponent>): CAttributeItemDynamicRecipeComponent {
    const message = createBaseCAttributeItemDynamicRecipeComponent();
    message.itemDef = object.itemDef ?? 0;
    message.itemQuality = object.itemQuality ?? 0;
    message.itemFlags = object.itemFlags ?? 0;
    message.attributesString = object.attributesString ?? "";
    message.itemCount = object.itemCount ?? 0;
    message.itemsFulfilled = object.itemsFulfilled ?? 0;
    message.itemRarity = object.itemRarity ?? 0;
    message.lootlist = object.lootlist ?? "";
    message.fulfilledItemId = object.fulfilledItemId ?? "0";
    message.associatedItemDef = object.associatedItemDef ?? 0;
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

  fromJSON(object: any): CProtoItemSocket {
    return {
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
      attrDefIndex: isSet(object.attrDefIndex) ? Number(object.attrDefIndex) : 0,
      requiredType: isSet(object.requiredType) ? Number(object.requiredType) : 0,
      requiredHero: isSet(object.requiredHero) ? String(object.requiredHero) : "",
      gemDefIndex: isSet(object.gemDefIndex) ? Number(object.gemDefIndex) : 0,
      notTradable: isSet(object.notTradable) ? Boolean(object.notTradable) : false,
      requiredItemSlot: isSet(object.requiredItemSlot) ? String(object.requiredItemSlot) : "",
    };
  },

  toJSON(message: CProtoItemSocket): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.attrDefIndex !== undefined && (obj.attrDefIndex = Math.round(message.attrDefIndex));
    message.requiredType !== undefined && (obj.requiredType = Math.round(message.requiredType));
    message.requiredHero !== undefined && (obj.requiredHero = message.requiredHero);
    message.gemDefIndex !== undefined && (obj.gemDefIndex = Math.round(message.gemDefIndex));
    message.notTradable !== undefined && (obj.notTradable = message.notTradable);
    message.requiredItemSlot !== undefined && (obj.requiredItemSlot = message.requiredItemSlot);
    return obj;
  },

  create(base?: DeepPartial<CProtoItemSocket>): CProtoItemSocket {
    return CProtoItemSocket.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CProtoItemSocket>): CProtoItemSocket {
    const message = createBaseCProtoItemSocket();
    message.itemId = object.itemId ?? "0";
    message.attrDefIndex = object.attrDefIndex ?? 0;
    message.requiredType = object.requiredType ?? 0;
    message.requiredHero = object.requiredHero ?? "";
    message.gemDefIndex = object.gemDefIndex ?? 0;
    message.notTradable = object.notTradable ?? false;
    message.requiredItemSlot = object.requiredItemSlot ?? "";
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

  fromJSON(object: any): CProtoItemSocketEmpty {
    return { socket: isSet(object.socket) ? CProtoItemSocket.fromJSON(object.socket) : undefined };
  },

  toJSON(message: CProtoItemSocketEmpty): unknown {
    const obj: any = {};
    message.socket !== undefined && (obj.socket = message.socket ? CProtoItemSocket.toJSON(message.socket) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CProtoItemSocketEmpty>): CProtoItemSocketEmpty {
    return CProtoItemSocketEmpty.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CProtoItemSocketEmpty>): CProtoItemSocketEmpty {
    const message = createBaseCProtoItemSocketEmpty();
    message.socket = (object.socket !== undefined && object.socket !== null)
      ? CProtoItemSocket.fromPartial(object.socket)
      : undefined;
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

  fromJSON(object: any): CProtoItemSocketEffect {
    return {
      socket: isSet(object.socket) ? CProtoItemSocket.fromJSON(object.socket) : undefined,
      effect: isSet(object.effect) ? Number(object.effect) : 0,
    };
  },

  toJSON(message: CProtoItemSocketEffect): unknown {
    const obj: any = {};
    message.socket !== undefined && (obj.socket = message.socket ? CProtoItemSocket.toJSON(message.socket) : undefined);
    message.effect !== undefined && (obj.effect = Math.round(message.effect));
    return obj;
  },

  create(base?: DeepPartial<CProtoItemSocketEffect>): CProtoItemSocketEffect {
    return CProtoItemSocketEffect.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CProtoItemSocketEffect>): CProtoItemSocketEffect {
    const message = createBaseCProtoItemSocketEffect();
    message.socket = (object.socket !== undefined && object.socket !== null)
      ? CProtoItemSocket.fromPartial(object.socket)
      : undefined;
    message.effect = object.effect ?? 0;
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

  fromJSON(object: any): CProtoItemSocketColor {
    return {
      socket: isSet(object.socket) ? CProtoItemSocket.fromJSON(object.socket) : undefined,
      red: isSet(object.red) ? Number(object.red) : 0,
      green: isSet(object.green) ? Number(object.green) : 0,
      blue: isSet(object.blue) ? Number(object.blue) : 0,
    };
  },

  toJSON(message: CProtoItemSocketColor): unknown {
    const obj: any = {};
    message.socket !== undefined && (obj.socket = message.socket ? CProtoItemSocket.toJSON(message.socket) : undefined);
    message.red !== undefined && (obj.red = Math.round(message.red));
    message.green !== undefined && (obj.green = Math.round(message.green));
    message.blue !== undefined && (obj.blue = Math.round(message.blue));
    return obj;
  },

  create(base?: DeepPartial<CProtoItemSocketColor>): CProtoItemSocketColor {
    return CProtoItemSocketColor.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CProtoItemSocketColor>): CProtoItemSocketColor {
    const message = createBaseCProtoItemSocketColor();
    message.socket = (object.socket !== undefined && object.socket !== null)
      ? CProtoItemSocket.fromPartial(object.socket)
      : undefined;
    message.red = object.red ?? 0;
    message.green = object.green ?? 0;
    message.blue = object.blue ?? 0;
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

  fromJSON(object: any): CProtoItemSocketStrange {
    return {
      socket: isSet(object.socket) ? CProtoItemSocket.fromJSON(object.socket) : undefined,
      strangeType: isSet(object.strangeType) ? Number(object.strangeType) : 0,
      strangeValue: isSet(object.strangeValue) ? Number(object.strangeValue) : 0,
    };
  },

  toJSON(message: CProtoItemSocketStrange): unknown {
    const obj: any = {};
    message.socket !== undefined && (obj.socket = message.socket ? CProtoItemSocket.toJSON(message.socket) : undefined);
    message.strangeType !== undefined && (obj.strangeType = Math.round(message.strangeType));
    message.strangeValue !== undefined && (obj.strangeValue = Math.round(message.strangeValue));
    return obj;
  },

  create(base?: DeepPartial<CProtoItemSocketStrange>): CProtoItemSocketStrange {
    return CProtoItemSocketStrange.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CProtoItemSocketStrange>): CProtoItemSocketStrange {
    const message = createBaseCProtoItemSocketStrange();
    message.socket = (object.socket !== undefined && object.socket !== null)
      ? CProtoItemSocket.fromPartial(object.socket)
      : undefined;
    message.strangeType = object.strangeType ?? 0;
    message.strangeValue = object.strangeValue ?? 0;
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

  fromJSON(object: any): CProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY {
    return {
      socket: isSet(object.socket) ? CProtoItemSocket.fromJSON(object.socket) : undefined,
      strangeType: isSet(object.strangeType) ? Number(object.strangeType) : 0,
      strangeValue: isSet(object.strangeValue) ? Number(object.strangeValue) : 0,
      abilityEffect: isSet(object.abilityEffect) ? Number(object.abilityEffect) : 0,
    };
  },

  toJSON(message: CProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY): unknown {
    const obj: any = {};
    message.socket !== undefined && (obj.socket = message.socket ? CProtoItemSocket.toJSON(message.socket) : undefined);
    message.strangeType !== undefined && (obj.strangeType = Math.round(message.strangeType));
    message.strangeValue !== undefined && (obj.strangeValue = Math.round(message.strangeValue));
    message.abilityEffect !== undefined && (obj.abilityEffect = Math.round(message.abilityEffect));
    return obj;
  },

  create(
    base?: DeepPartial<CProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY>,
  ): CProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY {
    return CProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY>,
  ): CProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY {
    const message = createBaseCProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY();
    message.socket = (object.socket !== undefined && object.socket !== null)
      ? CProtoItemSocket.fromPartial(object.socket)
      : undefined;
    message.strangeType = object.strangeType ?? 0;
    message.strangeValue = object.strangeValue ?? 0;
    message.abilityEffect = object.abilityEffect ?? 0;
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

  fromJSON(object: any): CProtoItemSocketSpectator {
    return {
      socket: isSet(object.socket) ? CProtoItemSocket.fromJSON(object.socket) : undefined,
      gamesViewed: isSet(object.gamesViewed) ? Number(object.gamesViewed) : 0,
      corporationId: isSet(object.corporationId) ? Number(object.corporationId) : 0,
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
    };
  },

  toJSON(message: CProtoItemSocketSpectator): unknown {
    const obj: any = {};
    message.socket !== undefined && (obj.socket = message.socket ? CProtoItemSocket.toJSON(message.socket) : undefined);
    message.gamesViewed !== undefined && (obj.gamesViewed = Math.round(message.gamesViewed));
    message.corporationId !== undefined && (obj.corporationId = Math.round(message.corporationId));
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    return obj;
  },

  create(base?: DeepPartial<CProtoItemSocketSpectator>): CProtoItemSocketSpectator {
    return CProtoItemSocketSpectator.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CProtoItemSocketSpectator>): CProtoItemSocketSpectator {
    const message = createBaseCProtoItemSocketSpectator();
    message.socket = (object.socket !== undefined && object.socket !== null)
      ? CProtoItemSocket.fromPartial(object.socket)
      : undefined;
    message.gamesViewed = object.gamesViewed ?? 0;
    message.corporationId = object.corporationId ?? 0;
    message.leagueId = object.leagueId ?? 0;
    message.teamId = object.teamId ?? 0;
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

  fromJSON(object: any): CProtoItemSocketAssetModifier {
    return {
      socket: isSet(object.socket) ? CProtoItemSocket.fromJSON(object.socket) : undefined,
      assetModifier: isSet(object.assetModifier) ? Number(object.assetModifier) : 0,
    };
  },

  toJSON(message: CProtoItemSocketAssetModifier): unknown {
    const obj: any = {};
    message.socket !== undefined && (obj.socket = message.socket ? CProtoItemSocket.toJSON(message.socket) : undefined);
    message.assetModifier !== undefined && (obj.assetModifier = Math.round(message.assetModifier));
    return obj;
  },

  create(base?: DeepPartial<CProtoItemSocketAssetModifier>): CProtoItemSocketAssetModifier {
    return CProtoItemSocketAssetModifier.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CProtoItemSocketAssetModifier>): CProtoItemSocketAssetModifier {
    const message = createBaseCProtoItemSocketAssetModifier();
    message.socket = (object.socket !== undefined && object.socket !== null)
      ? CProtoItemSocket.fromPartial(object.socket)
      : undefined;
    message.assetModifier = object.assetModifier ?? 0;
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

  fromJSON(object: any): CProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY {
    return {
      socket: isSet(object.socket) ? CProtoItemSocket.fromJSON(object.socket) : undefined,
      assetModifier: isSet(object.assetModifier) ? Number(object.assetModifier) : 0,
      animModifier: isSet(object.animModifier) ? Number(object.animModifier) : 0,
      abilityEffect: isSet(object.abilityEffect) ? Number(object.abilityEffect) : 0,
    };
  },

  toJSON(message: CProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY): unknown {
    const obj: any = {};
    message.socket !== undefined && (obj.socket = message.socket ? CProtoItemSocket.toJSON(message.socket) : undefined);
    message.assetModifier !== undefined && (obj.assetModifier = Math.round(message.assetModifier));
    message.animModifier !== undefined && (obj.animModifier = Math.round(message.animModifier));
    message.abilityEffect !== undefined && (obj.abilityEffect = Math.round(message.abilityEffect));
    return obj;
  },

  create(
    base?: DeepPartial<CProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY>,
  ): CProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY {
    return CProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY>,
  ): CProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY {
    const message = createBaseCProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY();
    message.socket = (object.socket !== undefined && object.socket !== null)
      ? CProtoItemSocket.fromPartial(object.socket)
      : undefined;
    message.assetModifier = object.assetModifier ?? 0;
    message.animModifier = object.animModifier ?? 0;
    message.abilityEffect = object.abilityEffect ?? 0;
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

  fromJSON(object: any): CProtoItemSocketAutograph {
    return {
      socket: isSet(object.socket) ? CProtoItemSocket.fromJSON(object.socket) : undefined,
      autograph: isSet(object.autograph) ? String(object.autograph) : "",
      autographId: isSet(object.autographId) ? Number(object.autographId) : 0,
      autographScore: isSet(object.autographScore) ? Number(object.autographScore) : 0,
    };
  },

  toJSON(message: CProtoItemSocketAutograph): unknown {
    const obj: any = {};
    message.socket !== undefined && (obj.socket = message.socket ? CProtoItemSocket.toJSON(message.socket) : undefined);
    message.autograph !== undefined && (obj.autograph = message.autograph);
    message.autographId !== undefined && (obj.autographId = Math.round(message.autographId));
    message.autographScore !== undefined && (obj.autographScore = Math.round(message.autographScore));
    return obj;
  },

  create(base?: DeepPartial<CProtoItemSocketAutograph>): CProtoItemSocketAutograph {
    return CProtoItemSocketAutograph.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CProtoItemSocketAutograph>): CProtoItemSocketAutograph {
    const message = createBaseCProtoItemSocketAutograph();
    message.socket = (object.socket !== undefined && object.socket !== null)
      ? CProtoItemSocket.fromPartial(object.socket)
      : undefined;
    message.autograph = object.autograph ?? "";
    message.autographId = object.autographId ?? 0;
    message.autographScore = object.autographScore ?? 0;
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

  fromJSON(object: any): CProtoItemSocketStaticVisuals {
    return { socket: isSet(object.socket) ? CProtoItemSocket.fromJSON(object.socket) : undefined };
  },

  toJSON(message: CProtoItemSocketStaticVisuals): unknown {
    const obj: any = {};
    message.socket !== undefined && (obj.socket = message.socket ? CProtoItemSocket.toJSON(message.socket) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CProtoItemSocketStaticVisuals>): CProtoItemSocketStaticVisuals {
    return CProtoItemSocketStaticVisuals.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CProtoItemSocketStaticVisuals>): CProtoItemSocketStaticVisuals {
    const message = createBaseCProtoItemSocketStaticVisuals();
    message.socket = (object.socket !== undefined && object.socket !== null)
      ? CProtoItemSocket.fromPartial(object.socket)
      : undefined;
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

  fromJSON(object: any): CAttributeString {
    return { value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: CAttributeString): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(base?: DeepPartial<CAttributeString>): CAttributeString {
    return CAttributeString.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CAttributeString>): CAttributeString {
    const message = createBaseCAttributeString();
    message.value = object.value ?? "";
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

  fromJSON(object: any): CWorkshopGetItemDailyRevenueRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      itemId: isSet(object.itemId) ? Number(object.itemId) : 0,
      dateStart: isSet(object.dateStart) ? Number(object.dateStart) : 0,
      dateEnd: isSet(object.dateEnd) ? Number(object.dateEnd) : 0,
    };
  },

  toJSON(message: CWorkshopGetItemDailyRevenueRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.itemId !== undefined && (obj.itemId = Math.round(message.itemId));
    message.dateStart !== undefined && (obj.dateStart = Math.round(message.dateStart));
    message.dateEnd !== undefined && (obj.dateEnd = Math.round(message.dateEnd));
    return obj;
  },

  create(base?: DeepPartial<CWorkshopGetItemDailyRevenueRequest>): CWorkshopGetItemDailyRevenueRequest {
    return CWorkshopGetItemDailyRevenueRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CWorkshopGetItemDailyRevenueRequest>): CWorkshopGetItemDailyRevenueRequest {
    const message = createBaseCWorkshopGetItemDailyRevenueRequest();
    message.appid = object.appid ?? 0;
    message.itemId = object.itemId ?? 0;
    message.dateStart = object.dateStart ?? 0;
    message.dateEnd = object.dateEnd ?? 0;
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

  fromJSON(object: any): CWorkshopGetItemDailyRevenueResponse {
    return {
      countryRevenue: Array.isArray(object?.countryRevenue)
        ? object.countryRevenue.map((e: any) => CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CWorkshopGetItemDailyRevenueResponse): unknown {
    const obj: any = {};
    if (message.countryRevenue) {
      obj.countryRevenue = message.countryRevenue.map((e) =>
        e ? CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue.toJSON(e) : undefined
      );
    } else {
      obj.countryRevenue = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CWorkshopGetItemDailyRevenueResponse>): CWorkshopGetItemDailyRevenueResponse {
    return CWorkshopGetItemDailyRevenueResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CWorkshopGetItemDailyRevenueResponse>): CWorkshopGetItemDailyRevenueResponse {
    const message = createBaseCWorkshopGetItemDailyRevenueResponse();
    message.countryRevenue =
      object.countryRevenue?.map((e) => CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue.fromPartial(e)) || [];
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

  fromJSON(object: any): CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue {
    return {
      countryCode: isSet(object.countryCode) ? String(object.countryCode) : "",
      date: isSet(object.date) ? Number(object.date) : 0,
      revenueUsd: isSet(object.revenueUsd) ? String(object.revenueUsd) : "0",
      units: isSet(object.units) ? Number(object.units) : 0,
    };
  },

  toJSON(message: CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue): unknown {
    const obj: any = {};
    message.countryCode !== undefined && (obj.countryCode = message.countryCode);
    message.date !== undefined && (obj.date = Math.round(message.date));
    message.revenueUsd !== undefined && (obj.revenueUsd = message.revenueUsd);
    message.units !== undefined && (obj.units = Math.round(message.units));
    return obj;
  },

  create(
    base?: DeepPartial<CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue>,
  ): CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue {
    return CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue>,
  ): CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue {
    const message = createBaseCWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue();
    message.countryCode = object.countryCode ?? "";
    message.date = object.date ?? 0;
    message.revenueUsd = object.revenueUsd ?? "0";
    message.units = object.units ?? 0;
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

  fromJSON(object: any): CWorkshopGetPackageDailyRevenueRequest {
    return {
      packageid: isSet(object.packageid) ? Number(object.packageid) : 0,
      dateStart: isSet(object.dateStart) ? Number(object.dateStart) : 0,
      dateEnd: isSet(object.dateEnd) ? Number(object.dateEnd) : 0,
    };
  },

  toJSON(message: CWorkshopGetPackageDailyRevenueRequest): unknown {
    const obj: any = {};
    message.packageid !== undefined && (obj.packageid = Math.round(message.packageid));
    message.dateStart !== undefined && (obj.dateStart = Math.round(message.dateStart));
    message.dateEnd !== undefined && (obj.dateEnd = Math.round(message.dateEnd));
    return obj;
  },

  create(base?: DeepPartial<CWorkshopGetPackageDailyRevenueRequest>): CWorkshopGetPackageDailyRevenueRequest {
    return CWorkshopGetPackageDailyRevenueRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CWorkshopGetPackageDailyRevenueRequest>): CWorkshopGetPackageDailyRevenueRequest {
    const message = createBaseCWorkshopGetPackageDailyRevenueRequest();
    message.packageid = object.packageid ?? 0;
    message.dateStart = object.dateStart ?? 0;
    message.dateEnd = object.dateEnd ?? 0;
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

  fromJSON(object: any): CWorkshopGetPackageDailyRevenueResponse {
    return {
      countryRevenue: Array.isArray(object?.countryRevenue)
        ? object.countryRevenue.map((e: any) => CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CWorkshopGetPackageDailyRevenueResponse): unknown {
    const obj: any = {};
    if (message.countryRevenue) {
      obj.countryRevenue = message.countryRevenue.map((e) =>
        e ? CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue.toJSON(e) : undefined
      );
    } else {
      obj.countryRevenue = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CWorkshopGetPackageDailyRevenueResponse>): CWorkshopGetPackageDailyRevenueResponse {
    return CWorkshopGetPackageDailyRevenueResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CWorkshopGetPackageDailyRevenueResponse>): CWorkshopGetPackageDailyRevenueResponse {
    const message = createBaseCWorkshopGetPackageDailyRevenueResponse();
    message.countryRevenue =
      object.countryRevenue?.map((e) => CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue.fromPartial(e)) ||
      [];
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

  fromJSON(object: any): CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue {
    return {
      countryCode: isSet(object.countryCode) ? String(object.countryCode) : "",
      date: isSet(object.date) ? Number(object.date) : 0,
      revenueUsd: isSet(object.revenueUsd) ? String(object.revenueUsd) : "0",
      units: isSet(object.units) ? Number(object.units) : 0,
    };
  },

  toJSON(message: CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue): unknown {
    const obj: any = {};
    message.countryCode !== undefined && (obj.countryCode = message.countryCode);
    message.date !== undefined && (obj.date = Math.round(message.date));
    message.revenueUsd !== undefined && (obj.revenueUsd = message.revenueUsd);
    message.units !== undefined && (obj.units = Math.round(message.units));
    return obj;
  },

  create(
    base?: DeepPartial<CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue>,
  ): CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue {
    return CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue>,
  ): CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue {
    const message = createBaseCWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue();
    message.countryCode = object.countryCode ?? "";
    message.date = object.date ?? 0;
    message.revenueUsd = object.revenueUsd ?? "0";
    message.units = object.units ?? 0;
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

  fromJSON(object: any): CMsgSQLGCToGCGrantBackpackSlots {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      addSlots: isSet(object.addSlots) ? Number(object.addSlots) : 0,
    };
  },

  toJSON(message: CMsgSQLGCToGCGrantBackpackSlots): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.addSlots !== undefined && (obj.addSlots = Math.round(message.addSlots));
    return obj;
  },

  create(base?: DeepPartial<CMsgSQLGCToGCGrantBackpackSlots>): CMsgSQLGCToGCGrantBackpackSlots {
    return CMsgSQLGCToGCGrantBackpackSlots.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSQLGCToGCGrantBackpackSlots>): CMsgSQLGCToGCGrantBackpackSlots {
    const message = createBaseCMsgSQLGCToGCGrantBackpackSlots();
    message.accountId = object.accountId ?? 0;
    message.addSlots = object.addSlots ?? 0;
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

  fromJSON(object: any): CMsgClientToGCLookupAccountName {
    return { accountId: isSet(object.accountId) ? Number(object.accountId) : 0 };
  },

  toJSON(message: CMsgClientToGCLookupAccountName): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCLookupAccountName>): CMsgClientToGCLookupAccountName {
    return CMsgClientToGCLookupAccountName.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCLookupAccountName>): CMsgClientToGCLookupAccountName {
    const message = createBaseCMsgClientToGCLookupAccountName();
    message.accountId = object.accountId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCLookupAccountNameResponse {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      accountName: isSet(object.accountName) ? String(object.accountName) : "",
    };
  },

  toJSON(message: CMsgClientToGCLookupAccountNameResponse): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.accountName !== undefined && (obj.accountName = message.accountName);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCLookupAccountNameResponse>): CMsgClientToGCLookupAccountNameResponse {
    return CMsgClientToGCLookupAccountNameResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCLookupAccountNameResponse>): CMsgClientToGCLookupAccountNameResponse {
    const message = createBaseCMsgClientToGCLookupAccountNameResponse();
    message.accountId = object.accountId ?? 0;
    message.accountName = object.accountName ?? "";
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

  fromJSON(object: any): CMsgClientToGCCreateStaticRecipe {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => CMsgClientToGCCreateStaticRecipe_Item.fromJSON(e))
        : [],
      recipeDefIndex: isSet(object.recipeDefIndex) ? Number(object.recipeDefIndex) : 0,
    };
  },

  toJSON(message: CMsgClientToGCCreateStaticRecipe): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? CMsgClientToGCCreateStaticRecipe_Item.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.recipeDefIndex !== undefined && (obj.recipeDefIndex = Math.round(message.recipeDefIndex));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCCreateStaticRecipe>): CMsgClientToGCCreateStaticRecipe {
    return CMsgClientToGCCreateStaticRecipe.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCCreateStaticRecipe>): CMsgClientToGCCreateStaticRecipe {
    const message = createBaseCMsgClientToGCCreateStaticRecipe();
    message.items = object.items?.map((e) => CMsgClientToGCCreateStaticRecipe_Item.fromPartial(e)) || [];
    message.recipeDefIndex = object.recipeDefIndex ?? 0;
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

  fromJSON(object: any): CMsgClientToGCCreateStaticRecipe_Item {
    return {
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
      slotId: isSet(object.slotId) ? Number(object.slotId) : 0,
    };
  },

  toJSON(message: CMsgClientToGCCreateStaticRecipe_Item): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.slotId !== undefined && (obj.slotId = Math.round(message.slotId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCCreateStaticRecipe_Item>): CMsgClientToGCCreateStaticRecipe_Item {
    return CMsgClientToGCCreateStaticRecipe_Item.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCCreateStaticRecipe_Item>): CMsgClientToGCCreateStaticRecipe_Item {
    const message = createBaseCMsgClientToGCCreateStaticRecipe_Item();
    message.itemId = object.itemId ?? "0";
    message.slotId = object.slotId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCCreateStaticRecipeResponse {
    return {
      response: isSet(object.response)
        ? cMsgClientToGCCreateStaticRecipeResponse_EResponseFromJSON(object.response)
        : 0,
      outputItems: Array.isArray(object?.outputItems)
        ? object.outputItems.map((e: any) => CMsgClientToGCCreateStaticRecipeResponse_OutputItem.fromJSON(e))
        : [],
      inputErrors: Array.isArray(object?.inputErrors)
        ? object.inputErrors.map((e: any) => CMsgClientToGCCreateStaticRecipeResponse_InputError.fromJSON(e))
        : [],
      additionalOutputs: Array.isArray(object?.additionalOutputs)
        ? object.additionalOutputs.map((e: any) =>
          CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CMsgClientToGCCreateStaticRecipeResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = cMsgClientToGCCreateStaticRecipeResponse_EResponseToJSON(message.response));
    if (message.outputItems) {
      obj.outputItems = message.outputItems.map((e) =>
        e ? CMsgClientToGCCreateStaticRecipeResponse_OutputItem.toJSON(e) : undefined
      );
    } else {
      obj.outputItems = [];
    }
    if (message.inputErrors) {
      obj.inputErrors = message.inputErrors.map((e) =>
        e ? CMsgClientToGCCreateStaticRecipeResponse_InputError.toJSON(e) : undefined
      );
    } else {
      obj.inputErrors = [];
    }
    if (message.additionalOutputs) {
      obj.additionalOutputs = message.additionalOutputs.map((e) =>
        e ? CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput.toJSON(e) : undefined
      );
    } else {
      obj.additionalOutputs = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCCreateStaticRecipeResponse>): CMsgClientToGCCreateStaticRecipeResponse {
    return CMsgClientToGCCreateStaticRecipeResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCCreateStaticRecipeResponse>): CMsgClientToGCCreateStaticRecipeResponse {
    const message = createBaseCMsgClientToGCCreateStaticRecipeResponse();
    message.response = object.response ?? 0;
    message.outputItems =
      object.outputItems?.map((e) => CMsgClientToGCCreateStaticRecipeResponse_OutputItem.fromPartial(e)) || [];
    message.inputErrors =
      object.inputErrors?.map((e) => CMsgClientToGCCreateStaticRecipeResponse_InputError.fromPartial(e)) || [];
    message.additionalOutputs =
      object.additionalOutputs?.map((e) => CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput.fromPartial(e)) ||
      [];
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

  fromJSON(object: any): CMsgClientToGCCreateStaticRecipeResponse_OutputItem {
    return {
      defIndex: isSet(object.defIndex) ? Number(object.defIndex) : 0,
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
      slotId: isSet(object.slotId) ? Number(object.slotId) : 0,
    };
  },

  toJSON(message: CMsgClientToGCCreateStaticRecipeResponse_OutputItem): unknown {
    const obj: any = {};
    message.defIndex !== undefined && (obj.defIndex = Math.round(message.defIndex));
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.slotId !== undefined && (obj.slotId = Math.round(message.slotId));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCCreateStaticRecipeResponse_OutputItem>,
  ): CMsgClientToGCCreateStaticRecipeResponse_OutputItem {
    return CMsgClientToGCCreateStaticRecipeResponse_OutputItem.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCCreateStaticRecipeResponse_OutputItem>,
  ): CMsgClientToGCCreateStaticRecipeResponse_OutputItem {
    const message = createBaseCMsgClientToGCCreateStaticRecipeResponse_OutputItem();
    message.defIndex = object.defIndex ?? 0;
    message.itemId = object.itemId ?? "0";
    message.slotId = object.slotId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCCreateStaticRecipeResponse_InputError {
    return {
      slotId: isSet(object.slotId) ? Number(object.slotId) : 0,
      error: isSet(object.error) ? cMsgClientToGCCreateStaticRecipeResponse_EResponseFromJSON(object.error) : 0,
    };
  },

  toJSON(message: CMsgClientToGCCreateStaticRecipeResponse_InputError): unknown {
    const obj: any = {};
    message.slotId !== undefined && (obj.slotId = Math.round(message.slotId));
    message.error !== undefined &&
      (obj.error = cMsgClientToGCCreateStaticRecipeResponse_EResponseToJSON(message.error));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCCreateStaticRecipeResponse_InputError>,
  ): CMsgClientToGCCreateStaticRecipeResponse_InputError {
    return CMsgClientToGCCreateStaticRecipeResponse_InputError.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCCreateStaticRecipeResponse_InputError>,
  ): CMsgClientToGCCreateStaticRecipeResponse_InputError {
    const message = createBaseCMsgClientToGCCreateStaticRecipeResponse_InputError();
    message.slotId = object.slotId ?? 0;
    message.error = object.error ?? 0;
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

  fromJSON(object: any): CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput {
    return {
      slotId: isSet(object.slotId) ? Number(object.slotId) : 0,
      value: isSet(object.value) ? String(object.value) : "0",
    };
  },

  toJSON(message: CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput): unknown {
    const obj: any = {};
    message.slotId !== undefined && (obj.slotId = Math.round(message.slotId));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput>,
  ): CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput {
    return CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput>,
  ): CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput {
    const message = createBaseCMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput();
    message.slotId = object.slotId ?? 0;
    message.value = object.value ?? "0";
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

  fromJSON(object: any): CMsgProcessTransactionOrder {
    return {
      txnId: isSet(object.txnId) ? String(object.txnId) : "0",
      steamTxnId: isSet(object.steamTxnId) ? String(object.steamTxnId) : "0",
      partnerTxnId: isSet(object.partnerTxnId) ? String(object.partnerTxnId) : "0",
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      timeStamp: isSet(object.timeStamp) ? Number(object.timeStamp) : 0,
      watermark: isSet(object.watermark) ? String(object.watermark) : "0",
      purchaseReportStatus: isSet(object.purchaseReportStatus) ? Number(object.purchaseReportStatus) : 0,
      currency: isSet(object.currency) ? Number(object.currency) : 0,
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => CMsgProcessTransactionOrder_Item.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgProcessTransactionOrder): unknown {
    const obj: any = {};
    message.txnId !== undefined && (obj.txnId = message.txnId);
    message.steamTxnId !== undefined && (obj.steamTxnId = message.steamTxnId);
    message.partnerTxnId !== undefined && (obj.partnerTxnId = message.partnerTxnId);
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.timeStamp !== undefined && (obj.timeStamp = Math.round(message.timeStamp));
    message.watermark !== undefined && (obj.watermark = message.watermark);
    message.purchaseReportStatus !== undefined && (obj.purchaseReportStatus = Math.round(message.purchaseReportStatus));
    message.currency !== undefined && (obj.currency = Math.round(message.currency));
    if (message.items) {
      obj.items = message.items.map((e) => e ? CMsgProcessTransactionOrder_Item.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgProcessTransactionOrder>): CMsgProcessTransactionOrder {
    return CMsgProcessTransactionOrder.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgProcessTransactionOrder>): CMsgProcessTransactionOrder {
    const message = createBaseCMsgProcessTransactionOrder();
    message.txnId = object.txnId ?? "0";
    message.steamTxnId = object.steamTxnId ?? "0";
    message.partnerTxnId = object.partnerTxnId ?? "0";
    message.steamId = object.steamId ?? "0";
    message.timeStamp = object.timeStamp ?? 0;
    message.watermark = object.watermark ?? "0";
    message.purchaseReportStatus = object.purchaseReportStatus ?? 0;
    message.currency = object.currency ?? 0;
    message.items = object.items?.map((e) => CMsgProcessTransactionOrder_Item.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgProcessTransactionOrder_Item {
    return {
      itemDefIndex: isSet(object.itemDefIndex) ? Number(object.itemDefIndex) : 0,
      itemPrice: isSet(object.itemPrice) ? Number(object.itemPrice) : 0,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      categoryDesc: isSet(object.categoryDesc) ? String(object.categoryDesc) : "",
      storePurchaseType: isSet(object.storePurchaseType) ? Number(object.storePurchaseType) : 0,
      sourceReferenceId: isSet(object.sourceReferenceId) ? String(object.sourceReferenceId) : "0",
      parentStackIndex: isSet(object.parentStackIndex) ? Number(object.parentStackIndex) : 0,
      defaultPrice: isSet(object.defaultPrice) ? Boolean(object.defaultPrice) : false,
      isUserFacing: isSet(object.isUserFacing) ? Boolean(object.isUserFacing) : false,
    };
  },

  toJSON(message: CMsgProcessTransactionOrder_Item): unknown {
    const obj: any = {};
    message.itemDefIndex !== undefined && (obj.itemDefIndex = Math.round(message.itemDefIndex));
    message.itemPrice !== undefined && (obj.itemPrice = Math.round(message.itemPrice));
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.categoryDesc !== undefined && (obj.categoryDesc = message.categoryDesc);
    message.storePurchaseType !== undefined && (obj.storePurchaseType = Math.round(message.storePurchaseType));
    message.sourceReferenceId !== undefined && (obj.sourceReferenceId = message.sourceReferenceId);
    message.parentStackIndex !== undefined && (obj.parentStackIndex = Math.round(message.parentStackIndex));
    message.defaultPrice !== undefined && (obj.defaultPrice = message.defaultPrice);
    message.isUserFacing !== undefined && (obj.isUserFacing = message.isUserFacing);
    return obj;
  },

  create(base?: DeepPartial<CMsgProcessTransactionOrder_Item>): CMsgProcessTransactionOrder_Item {
    return CMsgProcessTransactionOrder_Item.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgProcessTransactionOrder_Item>): CMsgProcessTransactionOrder_Item {
    const message = createBaseCMsgProcessTransactionOrder_Item();
    message.itemDefIndex = object.itemDefIndex ?? 0;
    message.itemPrice = object.itemPrice ?? 0;
    message.quantity = object.quantity ?? 0;
    message.categoryDesc = object.categoryDesc ?? "";
    message.storePurchaseType = object.storePurchaseType ?? 0;
    message.sourceReferenceId = object.sourceReferenceId ?? "0";
    message.parentStackIndex = object.parentStackIndex ?? 0;
    message.defaultPrice = object.defaultPrice ?? false;
    message.isUserFacing = object.isUserFacing ?? false;
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

  fromJSON(object: any): CMsgGCToGCStoreProcessCDKeyTransaction {
    return {
      order: isSet(object.order) ? CMsgProcessTransactionOrder.fromJSON(object.order) : undefined,
      reasonCode: isSet(object.reasonCode) ? Number(object.reasonCode) : 0,
      partner: isSet(object.partner) ? Number(object.partner) : 0,
    };
  },

  toJSON(message: CMsgGCToGCStoreProcessCDKeyTransaction): unknown {
    const obj: any = {};
    message.order !== undefined &&
      (obj.order = message.order ? CMsgProcessTransactionOrder.toJSON(message.order) : undefined);
    message.reasonCode !== undefined && (obj.reasonCode = Math.round(message.reasonCode));
    message.partner !== undefined && (obj.partner = Math.round(message.partner));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCStoreProcessCDKeyTransaction>): CMsgGCToGCStoreProcessCDKeyTransaction {
    return CMsgGCToGCStoreProcessCDKeyTransaction.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCStoreProcessCDKeyTransaction>): CMsgGCToGCStoreProcessCDKeyTransaction {
    const message = createBaseCMsgGCToGCStoreProcessCDKeyTransaction();
    message.order = (object.order !== undefined && object.order !== null)
      ? CMsgProcessTransactionOrder.fromPartial(object.order)
      : undefined;
    message.reasonCode = object.reasonCode ?? 0;
    message.partner = object.partner ?? 0;
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

  fromJSON(object: any): CMsgGCToGCStoreProcessCDKeyTransactionResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: CMsgGCToGCStoreProcessCDKeyTransactionResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create(
    base?: DeepPartial<CMsgGCToGCStoreProcessCDKeyTransactionResponse>,
  ): CMsgGCToGCStoreProcessCDKeyTransactionResponse {
    return CMsgGCToGCStoreProcessCDKeyTransactionResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgGCToGCStoreProcessCDKeyTransactionResponse>,
  ): CMsgGCToGCStoreProcessCDKeyTransactionResponse {
    const message = createBaseCMsgGCToGCStoreProcessCDKeyTransactionResponse();
    message.success = object.success ?? false;
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

  fromJSON(object: any): CMsgGCToGCStoreProcessSettlement {
    return { order: isSet(object.order) ? CMsgProcessTransactionOrder.fromJSON(object.order) : undefined };
  },

  toJSON(message: CMsgGCToGCStoreProcessSettlement): unknown {
    const obj: any = {};
    message.order !== undefined &&
      (obj.order = message.order ? CMsgProcessTransactionOrder.toJSON(message.order) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCStoreProcessSettlement>): CMsgGCToGCStoreProcessSettlement {
    return CMsgGCToGCStoreProcessSettlement.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCStoreProcessSettlement>): CMsgGCToGCStoreProcessSettlement {
    const message = createBaseCMsgGCToGCStoreProcessSettlement();
    message.order = (object.order !== undefined && object.order !== null)
      ? CMsgProcessTransactionOrder.fromPartial(object.order)
      : undefined;
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

  fromJSON(object: any): CMsgGCToGCStoreProcessSettlementResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: CMsgGCToGCStoreProcessSettlementResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCStoreProcessSettlementResponse>): CMsgGCToGCStoreProcessSettlementResponse {
    return CMsgGCToGCStoreProcessSettlementResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCStoreProcessSettlementResponse>): CMsgGCToGCStoreProcessSettlementResponse {
    const message = createBaseCMsgGCToGCStoreProcessSettlementResponse();
    message.success = object.success ?? false;
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

  fromJSON(object: any): CMsgGCToGCBroadcastConsoleCommand {
    return {
      conCommand: isSet(object.conCommand) ? String(object.conCommand) : "",
      reportOutput: isSet(object.reportOutput) ? Boolean(object.reportOutput) : false,
      sendingGc: isSet(object.sendingGc) ? Number(object.sendingGc) : 0,
      outputInitiator: isSet(object.outputInitiator) ? String(object.outputInitiator) : "",
    };
  },

  toJSON(message: CMsgGCToGCBroadcastConsoleCommand): unknown {
    const obj: any = {};
    message.conCommand !== undefined && (obj.conCommand = message.conCommand);
    message.reportOutput !== undefined && (obj.reportOutput = message.reportOutput);
    message.sendingGc !== undefined && (obj.sendingGc = Math.round(message.sendingGc));
    message.outputInitiator !== undefined && (obj.outputInitiator = message.outputInitiator);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCBroadcastConsoleCommand>): CMsgGCToGCBroadcastConsoleCommand {
    return CMsgGCToGCBroadcastConsoleCommand.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCBroadcastConsoleCommand>): CMsgGCToGCBroadcastConsoleCommand {
    const message = createBaseCMsgGCToGCBroadcastConsoleCommand();
    message.conCommand = object.conCommand ?? "";
    message.reportOutput = object.reportOutput ?? false;
    message.sendingGc = object.sendingGc ?? 0;
    message.outputInitiator = object.outputInitiator ?? "";
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

  fromJSON(object: any): CMsgGCToGCConsoleOutput {
    return {
      initiator: isSet(object.initiator) ? String(object.initiator) : "",
      sendingGc: isSet(object.sendingGc) ? Number(object.sendingGc) : 0,
      msgs: Array.isArray(object?.msgs)
        ? object.msgs.map((e: any) => CMsgGCToGCConsoleOutput_OutputLine.fromJSON(e))
        : [],
      isLastForSourceJob: isSet(object.isLastForSourceJob) ? Boolean(object.isLastForSourceJob) : false,
    };
  },

  toJSON(message: CMsgGCToGCConsoleOutput): unknown {
    const obj: any = {};
    message.initiator !== undefined && (obj.initiator = message.initiator);
    message.sendingGc !== undefined && (obj.sendingGc = Math.round(message.sendingGc));
    if (message.msgs) {
      obj.msgs = message.msgs.map((e) => e ? CMsgGCToGCConsoleOutput_OutputLine.toJSON(e) : undefined);
    } else {
      obj.msgs = [];
    }
    message.isLastForSourceJob !== undefined && (obj.isLastForSourceJob = message.isLastForSourceJob);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCConsoleOutput>): CMsgGCToGCConsoleOutput {
    return CMsgGCToGCConsoleOutput.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCConsoleOutput>): CMsgGCToGCConsoleOutput {
    const message = createBaseCMsgGCToGCConsoleOutput();
    message.initiator = object.initiator ?? "";
    message.sendingGc = object.sendingGc ?? 0;
    message.msgs = object.msgs?.map((e) => CMsgGCToGCConsoleOutput_OutputLine.fromPartial(e)) || [];
    message.isLastForSourceJob = object.isLastForSourceJob ?? false;
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

  fromJSON(object: any): CMsgGCToGCConsoleOutput_OutputLine {
    return {
      text: isSet(object.text) ? String(object.text) : "",
      spewLevel: isSet(object.spewLevel) ? Number(object.spewLevel) : 0,
    };
  },

  toJSON(message: CMsgGCToGCConsoleOutput_OutputLine): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    message.spewLevel !== undefined && (obj.spewLevel = Math.round(message.spewLevel));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCConsoleOutput_OutputLine>): CMsgGCToGCConsoleOutput_OutputLine {
    return CMsgGCToGCConsoleOutput_OutputLine.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCConsoleOutput_OutputLine>): CMsgGCToGCConsoleOutput_OutputLine {
    const message = createBaseCMsgGCToGCConsoleOutput_OutputLine();
    message.text = object.text ?? "";
    message.spewLevel = object.spewLevel ?? 0;
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

  fromJSON(object: any): CMsgItemAges {
    return {
      maxItemIdTimestamps: Array.isArray(object?.maxItemIdTimestamps)
        ? object.maxItemIdTimestamps.map((e: any) => CMsgItemAges_MaxItemIDTimestamp.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgItemAges): unknown {
    const obj: any = {};
    if (message.maxItemIdTimestamps) {
      obj.maxItemIdTimestamps = message.maxItemIdTimestamps.map((e) =>
        e ? CMsgItemAges_MaxItemIDTimestamp.toJSON(e) : undefined
      );
    } else {
      obj.maxItemIdTimestamps = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgItemAges>): CMsgItemAges {
    return CMsgItemAges.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgItemAges>): CMsgItemAges {
    const message = createBaseCMsgItemAges();
    message.maxItemIdTimestamps =
      object.maxItemIdTimestamps?.map((e) => CMsgItemAges_MaxItemIDTimestamp.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgItemAges_MaxItemIDTimestamp {
    return {
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      maxItemId: isSet(object.maxItemId) ? String(object.maxItemId) : "0",
    };
  },

  toJSON(message: CMsgItemAges_MaxItemIDTimestamp): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.maxItemId !== undefined && (obj.maxItemId = message.maxItemId);
    return obj;
  },

  create(base?: DeepPartial<CMsgItemAges_MaxItemIDTimestamp>): CMsgItemAges_MaxItemIDTimestamp {
    return CMsgItemAges_MaxItemIDTimestamp.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgItemAges_MaxItemIDTimestamp>): CMsgItemAges_MaxItemIDTimestamp {
    const message = createBaseCMsgItemAges_MaxItemIDTimestamp();
    message.timestamp = object.timestamp ?? 0;
    message.maxItemId = object.maxItemId ?? "0";
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

  fromJSON(object: any): CMsgGCToGCInternalTestMsg {
    return {
      sendingGc: isSet(object.sendingGc) ? Number(object.sendingGc) : 0,
      senderId: isSet(object.senderId) ? String(object.senderId) : "0",
      context: isSet(object.context) ? Number(object.context) : 0,
      messageId: isSet(object.messageId) ? Number(object.messageId) : 0,
      messageBody: isSet(object.messageBody) ? Buffer.from(bytesFromBase64(object.messageBody)) : Buffer.alloc(0),
      jobIdSource: isSet(object.jobIdSource) ? String(object.jobIdSource) : "0",
      jobIdTarget: isSet(object.jobIdTarget) ? String(object.jobIdTarget) : "0",
    };
  },

  toJSON(message: CMsgGCToGCInternalTestMsg): unknown {
    const obj: any = {};
    message.sendingGc !== undefined && (obj.sendingGc = Math.round(message.sendingGc));
    message.senderId !== undefined && (obj.senderId = message.senderId);
    message.context !== undefined && (obj.context = Math.round(message.context));
    message.messageId !== undefined && (obj.messageId = Math.round(message.messageId));
    message.messageBody !== undefined &&
      (obj.messageBody = base64FromBytes(message.messageBody !== undefined ? message.messageBody : Buffer.alloc(0)));
    message.jobIdSource !== undefined && (obj.jobIdSource = message.jobIdSource);
    message.jobIdTarget !== undefined && (obj.jobIdTarget = message.jobIdTarget);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCInternalTestMsg>): CMsgGCToGCInternalTestMsg {
    return CMsgGCToGCInternalTestMsg.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCInternalTestMsg>): CMsgGCToGCInternalTestMsg {
    const message = createBaseCMsgGCToGCInternalTestMsg();
    message.sendingGc = object.sendingGc ?? 0;
    message.senderId = object.senderId ?? "0";
    message.context = object.context ?? 0;
    message.messageId = object.messageId ?? 0;
    message.messageBody = object.messageBody ?? Buffer.alloc(0);
    message.jobIdSource = object.jobIdSource ?? "0";
    message.jobIdTarget = object.jobIdTarget ?? "0";
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

  fromJSON(object: any): CMsgGCToGCClientServerVersionsUpdated {
    return {
      clientMinAllowedVersion: isSet(object.clientMinAllowedVersion) ? Number(object.clientMinAllowedVersion) : 0,
      clientActiveVersion: isSet(object.clientActiveVersion) ? Number(object.clientActiveVersion) : 0,
      serverActiveVersion: isSet(object.serverActiveVersion) ? Number(object.serverActiveVersion) : 0,
      serverDeployedVersion: isSet(object.serverDeployedVersion) ? Number(object.serverDeployedVersion) : 0,
      whatChanged: isSet(object.whatChanged) ? Number(object.whatChanged) : 0,
    };
  },

  toJSON(message: CMsgGCToGCClientServerVersionsUpdated): unknown {
    const obj: any = {};
    message.clientMinAllowedVersion !== undefined &&
      (obj.clientMinAllowedVersion = Math.round(message.clientMinAllowedVersion));
    message.clientActiveVersion !== undefined && (obj.clientActiveVersion = Math.round(message.clientActiveVersion));
    message.serverActiveVersion !== undefined && (obj.serverActiveVersion = Math.round(message.serverActiveVersion));
    message.serverDeployedVersion !== undefined &&
      (obj.serverDeployedVersion = Math.round(message.serverDeployedVersion));
    message.whatChanged !== undefined && (obj.whatChanged = Math.round(message.whatChanged));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCClientServerVersionsUpdated>): CMsgGCToGCClientServerVersionsUpdated {
    return CMsgGCToGCClientServerVersionsUpdated.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCClientServerVersionsUpdated>): CMsgGCToGCClientServerVersionsUpdated {
    const message = createBaseCMsgGCToGCClientServerVersionsUpdated();
    message.clientMinAllowedVersion = object.clientMinAllowedVersion ?? 0;
    message.clientActiveVersion = object.clientActiveVersion ?? 0;
    message.serverActiveVersion = object.serverActiveVersion ?? 0;
    message.serverDeployedVersion = object.serverDeployedVersion ?? 0;
    message.whatChanged = object.whatChanged ?? 0;
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

  fromJSON(object: any): CMsgGCToGCBroadcastMessageFromSub {
    return {
      msgId: isSet(object.msgId) ? Number(object.msgId) : 0,
      serializedMsg: isSet(object.serializedMsg) ? Buffer.from(bytesFromBase64(object.serializedMsg)) : Buffer.alloc(0),
      accountIdList: Array.isArray(object?.accountIdList) ? object.accountIdList.map((e: any) => Number(e)) : [],
      steamIdList: Array.isArray(object?.steamIdList) ? object.steamIdList.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CMsgGCToGCBroadcastMessageFromSub): unknown {
    const obj: any = {};
    message.msgId !== undefined && (obj.msgId = Math.round(message.msgId));
    message.serializedMsg !== undefined &&
      (obj.serializedMsg = base64FromBytes(
        message.serializedMsg !== undefined ? message.serializedMsg : Buffer.alloc(0),
      ));
    if (message.accountIdList) {
      obj.accountIdList = message.accountIdList.map((e) => Math.round(e));
    } else {
      obj.accountIdList = [];
    }
    if (message.steamIdList) {
      obj.steamIdList = message.steamIdList.map((e) => e);
    } else {
      obj.steamIdList = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCBroadcastMessageFromSub>): CMsgGCToGCBroadcastMessageFromSub {
    return CMsgGCToGCBroadcastMessageFromSub.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCBroadcastMessageFromSub>): CMsgGCToGCBroadcastMessageFromSub {
    const message = createBaseCMsgGCToGCBroadcastMessageFromSub();
    message.msgId = object.msgId ?? 0;
    message.serializedMsg = object.serializedMsg ?? Buffer.alloc(0);
    message.accountIdList = object.accountIdList?.map((e) => e) || [];
    message.steamIdList = object.steamIdList?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgGCToClientCurrencyPricePoints {
    return {
      priceKey: Array.isArray(object?.priceKey) ? object.priceKey.map((e: any) => String(e)) : [],
      currencies: Array.isArray(object?.currencies)
        ? object.currencies.map((e: any) => CMsgGCToClientCurrencyPricePoints_Currency.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGCToClientCurrencyPricePoints): unknown {
    const obj: any = {};
    if (message.priceKey) {
      obj.priceKey = message.priceKey.map((e) => e);
    } else {
      obj.priceKey = [];
    }
    if (message.currencies) {
      obj.currencies = message.currencies.map((e) =>
        e ? CMsgGCToClientCurrencyPricePoints_Currency.toJSON(e) : undefined
      );
    } else {
      obj.currencies = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToClientCurrencyPricePoints>): CMsgGCToClientCurrencyPricePoints {
    return CMsgGCToClientCurrencyPricePoints.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToClientCurrencyPricePoints>): CMsgGCToClientCurrencyPricePoints {
    const message = createBaseCMsgGCToClientCurrencyPricePoints();
    message.priceKey = object.priceKey?.map((e) => e) || [];
    message.currencies = object.currencies?.map((e) => CMsgGCToClientCurrencyPricePoints_Currency.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgGCToClientCurrencyPricePoints_Currency {
    return {
      currencyId: isSet(object.currencyId) ? Number(object.currencyId) : 0,
      currencyPrice: Array.isArray(object?.currencyPrice) ? object.currencyPrice.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CMsgGCToClientCurrencyPricePoints_Currency): unknown {
    const obj: any = {};
    message.currencyId !== undefined && (obj.currencyId = Math.round(message.currencyId));
    if (message.currencyPrice) {
      obj.currencyPrice = message.currencyPrice.map((e) => e);
    } else {
      obj.currencyPrice = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToClientCurrencyPricePoints_Currency>): CMsgGCToClientCurrencyPricePoints_Currency {
    return CMsgGCToClientCurrencyPricePoints_Currency.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgGCToClientCurrencyPricePoints_Currency>,
  ): CMsgGCToClientCurrencyPricePoints_Currency {
    const message = createBaseCMsgGCToClientCurrencyPricePoints_Currency();
    message.currencyId = object.currencyId ?? 0;
    message.currencyPrice = object.currencyPrice?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgBannedWordList {
    return {
      version: isSet(object.version) ? Number(object.version) : 0,
      bannedWords: Array.isArray(object?.bannedWords) ? object.bannedWords.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CMsgBannedWordList): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = Math.round(message.version));
    if (message.bannedWords) {
      obj.bannedWords = message.bannedWords.map((e) => e);
    } else {
      obj.bannedWords = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgBannedWordList>): CMsgBannedWordList {
    return CMsgBannedWordList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgBannedWordList>): CMsgBannedWordList {
    const message = createBaseCMsgBannedWordList();
    message.version = object.version ?? 0;
    message.bannedWords = object.bannedWords?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgGCToGCFlushSteamInventoryCache {
    return {
      keys: Array.isArray(object?.keys)
        ? object.keys.map((e: any) => CMsgGCToGCFlushSteamInventoryCache_Key.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGCToGCFlushSteamInventoryCache): unknown {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map((e) => e ? CMsgGCToGCFlushSteamInventoryCache_Key.toJSON(e) : undefined);
    } else {
      obj.keys = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCFlushSteamInventoryCache>): CMsgGCToGCFlushSteamInventoryCache {
    return CMsgGCToGCFlushSteamInventoryCache.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCFlushSteamInventoryCache>): CMsgGCToGCFlushSteamInventoryCache {
    const message = createBaseCMsgGCToGCFlushSteamInventoryCache();
    message.keys = object.keys?.map((e) => CMsgGCToGCFlushSteamInventoryCache_Key.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgGCToGCFlushSteamInventoryCache_Key {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      contextid: isSet(object.contextid) ? String(object.contextid) : "0",
    };
  },

  toJSON(message: CMsgGCToGCFlushSteamInventoryCache_Key): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.contextid !== undefined && (obj.contextid = message.contextid);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCFlushSteamInventoryCache_Key>): CMsgGCToGCFlushSteamInventoryCache_Key {
    return CMsgGCToGCFlushSteamInventoryCache_Key.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCFlushSteamInventoryCache_Key>): CMsgGCToGCFlushSteamInventoryCache_Key {
    const message = createBaseCMsgGCToGCFlushSteamInventoryCache_Key();
    message.steamid = object.steamid ?? "0";
    message.contextid = object.contextid ?? "0";
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

  fromJSON(object: any): CMsgGCToGCUpdateSubscriptionItems {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      alwaysNotify: isSet(object.alwaysNotify) ? Boolean(object.alwaysNotify) : false,
    };
  },

  toJSON(message: CMsgGCToGCUpdateSubscriptionItems): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.alwaysNotify !== undefined && (obj.alwaysNotify = message.alwaysNotify);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCUpdateSubscriptionItems>): CMsgGCToGCUpdateSubscriptionItems {
    return CMsgGCToGCUpdateSubscriptionItems.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCUpdateSubscriptionItems>): CMsgGCToGCUpdateSubscriptionItems {
    const message = createBaseCMsgGCToGCUpdateSubscriptionItems();
    message.accountId = object.accountId ?? 0;
    message.alwaysNotify = object.alwaysNotify ?? false;
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

  fromJSON(object: any): CMsgGCToGCSelfPing {
    return { sampleId: isSet(object.sampleId) ? Number(object.sampleId) : 0 };
  },

  toJSON(message: CMsgGCToGCSelfPing): unknown {
    const obj: any = {};
    message.sampleId !== undefined && (obj.sampleId = Math.round(message.sampleId));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCSelfPing>): CMsgGCToGCSelfPing {
    return CMsgGCToGCSelfPing.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCSelfPing>): CMsgGCToGCSelfPing {
    const message = createBaseCMsgGCToGCSelfPing();
    message.sampleId = object.sampleId ?? 0;
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

  fromJSON(_: any): CMsgGCToGCGetInfuxIntervalStats {
    return {};
  },

  toJSON(_: CMsgGCToGCGetInfuxIntervalStats): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCGetInfuxIntervalStats>): CMsgGCToGCGetInfuxIntervalStats {
    return CMsgGCToGCGetInfuxIntervalStats.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CMsgGCToGCGetInfuxIntervalStats>): CMsgGCToGCGetInfuxIntervalStats {
    const message = createBaseCMsgGCToGCGetInfuxIntervalStats();
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

  fromJSON(object: any): CMsgGCToGCGetInfuxIntervalStatsResponse {
    return {
      statIds: Array.isArray(object?.statIds) ? object.statIds.map((e: any) => Number(e)) : [],
      statTotal: Array.isArray(object?.statTotal) ? object.statTotal.map((e: any) => String(e)) : [],
      statSamples: Array.isArray(object?.statSamples) ? object.statSamples.map((e: any) => Number(e)) : [],
      statMax: Array.isArray(object?.statMax) ? object.statMax.map((e: any) => Number(e)) : [],
      sampleDurationMs: isSet(object.sampleDurationMs) ? Number(object.sampleDurationMs) : 0,
    };
  },

  toJSON(message: CMsgGCToGCGetInfuxIntervalStatsResponse): unknown {
    const obj: any = {};
    if (message.statIds) {
      obj.statIds = message.statIds.map((e) => Math.round(e));
    } else {
      obj.statIds = [];
    }
    if (message.statTotal) {
      obj.statTotal = message.statTotal.map((e) => e);
    } else {
      obj.statTotal = [];
    }
    if (message.statSamples) {
      obj.statSamples = message.statSamples.map((e) => Math.round(e));
    } else {
      obj.statSamples = [];
    }
    if (message.statMax) {
      obj.statMax = message.statMax.map((e) => Math.round(e));
    } else {
      obj.statMax = [];
    }
    message.sampleDurationMs !== undefined && (obj.sampleDurationMs = Math.round(message.sampleDurationMs));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCGetInfuxIntervalStatsResponse>): CMsgGCToGCGetInfuxIntervalStatsResponse {
    return CMsgGCToGCGetInfuxIntervalStatsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCGetInfuxIntervalStatsResponse>): CMsgGCToGCGetInfuxIntervalStatsResponse {
    const message = createBaseCMsgGCToGCGetInfuxIntervalStatsResponse();
    message.statIds = object.statIds?.map((e) => e) || [];
    message.statTotal = object.statTotal?.map((e) => e) || [];
    message.statSamples = object.statSamples?.map((e) => e) || [];
    message.statMax = object.statMax?.map((e) => e) || [];
    message.sampleDurationMs = object.sampleDurationMs ?? 0;
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

  fromJSON(_: any): CMsgGCToGCPurchaseSucceeded {
    return {};
  },

  toJSON(_: CMsgGCToGCPurchaseSucceeded): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCPurchaseSucceeded>): CMsgGCToGCPurchaseSucceeded {
    return CMsgGCToGCPurchaseSucceeded.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CMsgGCToGCPurchaseSucceeded>): CMsgGCToGCPurchaseSucceeded {
    const message = createBaseCMsgGCToGCPurchaseSucceeded();
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

  fromJSON(object: any): CMsgClientToGCGetLimitedItemPurchaseQuantity {
    return { itemDef: isSet(object.itemDef) ? Number(object.itemDef) : 0 };
  },

  toJSON(message: CMsgClientToGCGetLimitedItemPurchaseQuantity): unknown {
    const obj: any = {};
    message.itemDef !== undefined && (obj.itemDef = Math.round(message.itemDef));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCGetLimitedItemPurchaseQuantity>,
  ): CMsgClientToGCGetLimitedItemPurchaseQuantity {
    return CMsgClientToGCGetLimitedItemPurchaseQuantity.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCGetLimitedItemPurchaseQuantity>,
  ): CMsgClientToGCGetLimitedItemPurchaseQuantity {
    const message = createBaseCMsgClientToGCGetLimitedItemPurchaseQuantity();
    message.itemDef = object.itemDef ?? 0;
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

  fromJSON(object: any): CMsgClientToGCGetLimitedItemPurchaseQuantityResponse {
    return {
      result: isSet(object.result)
        ? cMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponseFromJSON(object.result)
        : 0,
      quantityPurchased: isSet(object.quantityPurchased) ? Number(object.quantityPurchased) : 0,
    };
  },

  toJSON(message: CMsgClientToGCGetLimitedItemPurchaseQuantityResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponseToJSON(message.result));
    message.quantityPurchased !== undefined && (obj.quantityPurchased = Math.round(message.quantityPurchased));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCGetLimitedItemPurchaseQuantityResponse>,
  ): CMsgClientToGCGetLimitedItemPurchaseQuantityResponse {
    return CMsgClientToGCGetLimitedItemPurchaseQuantityResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCGetLimitedItemPurchaseQuantityResponse>,
  ): CMsgClientToGCGetLimitedItemPurchaseQuantityResponse {
    const message = createBaseCMsgClientToGCGetLimitedItemPurchaseQuantityResponse();
    message.result = object.result ?? 0;
    message.quantityPurchased = object.quantityPurchased ?? 0;
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

  fromJSON(object: any): CMsgGCToGCUpdateWelcomeMsg {
    return {
      server: isSet(object.server) ? Boolean(object.server) : false,
      newMsg: isSet(object.newMsg) ? CExtraMsgBlock.fromJSON(object.newMsg) : undefined,
      broadcast: isSet(object.broadcast) ? Boolean(object.broadcast) : false,
    };
  },

  toJSON(message: CMsgGCToGCUpdateWelcomeMsg): unknown {
    const obj: any = {};
    message.server !== undefined && (obj.server = message.server);
    message.newMsg !== undefined && (obj.newMsg = message.newMsg ? CExtraMsgBlock.toJSON(message.newMsg) : undefined);
    message.broadcast !== undefined && (obj.broadcast = message.broadcast);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToGCUpdateWelcomeMsg>): CMsgGCToGCUpdateWelcomeMsg {
    return CMsgGCToGCUpdateWelcomeMsg.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToGCUpdateWelcomeMsg>): CMsgGCToGCUpdateWelcomeMsg {
    const message = createBaseCMsgGCToGCUpdateWelcomeMsg();
    message.server = object.server ?? false;
    message.newMsg = (object.newMsg !== undefined && object.newMsg !== null)
      ? CExtraMsgBlock.fromPartial(object.newMsg)
      : undefined;
    message.broadcast = object.broadcast ?? false;
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
