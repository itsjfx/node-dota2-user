/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { EEvent, eEventFromJSON, eEventToJSON } from "./dota_shared_enums";

export enum ECandyShopAuditAction {
  k_ECandyShopAuditAction_Invalid = 0,
  k_ECandyShopAuditAction_SupportModify = 1,
  k_ECandyShopAuditAction_PurchaseReward = 2,
  k_ECandyShopAuditAction_OpenBags = 3,
  k_ECandyShopAuditAction_RerollRewards = 4,
  k_ECandyShopAuditAction_DoVariableExchange = 5,
  k_ECandyShopAuditAction_DoExchange = 6,
  k_ECandyShopAuditAction_EventActionGrantInventorySizeIncrease = 7,
  k_ECandyShopAuditAction_EventActionGrantRerollChargesIncrease = 8,
}

export function eCandyShopAuditActionFromJSON(object: any): ECandyShopAuditAction {
  switch (object) {
    case 0:
    case "k_ECandyShopAuditAction_Invalid":
      return ECandyShopAuditAction.k_ECandyShopAuditAction_Invalid;
    case 1:
    case "k_ECandyShopAuditAction_SupportModify":
      return ECandyShopAuditAction.k_ECandyShopAuditAction_SupportModify;
    case 2:
    case "k_ECandyShopAuditAction_PurchaseReward":
      return ECandyShopAuditAction.k_ECandyShopAuditAction_PurchaseReward;
    case 3:
    case "k_ECandyShopAuditAction_OpenBags":
      return ECandyShopAuditAction.k_ECandyShopAuditAction_OpenBags;
    case 4:
    case "k_ECandyShopAuditAction_RerollRewards":
      return ECandyShopAuditAction.k_ECandyShopAuditAction_RerollRewards;
    case 5:
    case "k_ECandyShopAuditAction_DoVariableExchange":
      return ECandyShopAuditAction.k_ECandyShopAuditAction_DoVariableExchange;
    case 6:
    case "k_ECandyShopAuditAction_DoExchange":
      return ECandyShopAuditAction.k_ECandyShopAuditAction_DoExchange;
    case 7:
    case "k_ECandyShopAuditAction_EventActionGrantInventorySizeIncrease":
      return ECandyShopAuditAction.k_ECandyShopAuditAction_EventActionGrantInventorySizeIncrease;
    case 8:
    case "k_ECandyShopAuditAction_EventActionGrantRerollChargesIncrease":
      return ECandyShopAuditAction.k_ECandyShopAuditAction_EventActionGrantRerollChargesIncrease;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ECandyShopAuditAction");
  }
}

export function eCandyShopAuditActionToJSON(object: ECandyShopAuditAction): string {
  switch (object) {
    case ECandyShopAuditAction.k_ECandyShopAuditAction_Invalid:
      return "k_ECandyShopAuditAction_Invalid";
    case ECandyShopAuditAction.k_ECandyShopAuditAction_SupportModify:
      return "k_ECandyShopAuditAction_SupportModify";
    case ECandyShopAuditAction.k_ECandyShopAuditAction_PurchaseReward:
      return "k_ECandyShopAuditAction_PurchaseReward";
    case ECandyShopAuditAction.k_ECandyShopAuditAction_OpenBags:
      return "k_ECandyShopAuditAction_OpenBags";
    case ECandyShopAuditAction.k_ECandyShopAuditAction_RerollRewards:
      return "k_ECandyShopAuditAction_RerollRewards";
    case ECandyShopAuditAction.k_ECandyShopAuditAction_DoVariableExchange:
      return "k_ECandyShopAuditAction_DoVariableExchange";
    case ECandyShopAuditAction.k_ECandyShopAuditAction_DoExchange:
      return "k_ECandyShopAuditAction_DoExchange";
    case ECandyShopAuditAction.k_ECandyShopAuditAction_EventActionGrantInventorySizeIncrease:
      return "k_ECandyShopAuditAction_EventActionGrantInventorySizeIncrease";
    case ECandyShopAuditAction.k_ECandyShopAuditAction_EventActionGrantRerollChargesIncrease:
      return "k_ECandyShopAuditAction_EventActionGrantRerollChargesIncrease";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ECandyShopAuditAction");
  }
}

export enum ECandyShopRewardType {
  k_eCandyShopRewardType_None = 0,
  k_eCandyShopRewardType_Item = 1,
  k_eCandyShopRewardType_EventAction = 2,
  k_eCandyShopRewardType_EventPoints = 3,
}

export function eCandyShopRewardTypeFromJSON(object: any): ECandyShopRewardType {
  switch (object) {
    case 0:
    case "k_eCandyShopRewardType_None":
      return ECandyShopRewardType.k_eCandyShopRewardType_None;
    case 1:
    case "k_eCandyShopRewardType_Item":
      return ECandyShopRewardType.k_eCandyShopRewardType_Item;
    case 2:
    case "k_eCandyShopRewardType_EventAction":
      return ECandyShopRewardType.k_eCandyShopRewardType_EventAction;
    case 3:
    case "k_eCandyShopRewardType_EventPoints":
      return ECandyShopRewardType.k_eCandyShopRewardType_EventPoints;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ECandyShopRewardType");
  }
}

export function eCandyShopRewardTypeToJSON(object: ECandyShopRewardType): string {
  switch (object) {
    case ECandyShopRewardType.k_eCandyShopRewardType_None:
      return "k_eCandyShopRewardType_None";
    case ECandyShopRewardType.k_eCandyShopRewardType_Item:
      return "k_eCandyShopRewardType_Item";
    case ECandyShopRewardType.k_eCandyShopRewardType_EventAction:
      return "k_eCandyShopRewardType_EventAction";
    case ECandyShopRewardType.k_eCandyShopRewardType_EventPoints:
      return "k_eCandyShopRewardType_EventPoints";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ECandyShopRewardType");
  }
}

export interface CMsgCandyShopCandyCount {
  candyType: number;
  candyCount: number;
}

export interface CMsgCandyShopCandyQuantity {
  candyCounts: CMsgCandyShopCandyCount[];
}

export interface CMsgCandyShopExchangeRecipe {
  recipeId: number;
  input: CMsgCandyShopCandyQuantity | undefined;
  output: CMsgCandyShopCandyQuantity | undefined;
}

export interface CMsgCandyShopRewardDataItem {
  itemDef: number;
}

export interface CMsgCandyShopRewardDataEventAction {
  eventId: EEvent;
  actionId: number;
  quantity: number;
}

export interface CMsgCandyShopRewardDataEventPoints {
  eventId: EEvent;
  points: number;
}

export interface CMsgCandyShopReward {
  rewardId: number;
  rewardOptionId: number;
  price: CMsgCandyShopCandyQuantity | undefined;
  rewardType: ECandyShopRewardType;
  itemData: CMsgCandyShopRewardDataItem | undefined;
  eventActionData: CMsgCandyShopRewardDataEventAction | undefined;
  eventPointsData: CMsgCandyShopRewardDataEventPoints | undefined;
}

export interface CMsgCandyShopUserData {
  inventorySize: number;
  inventory: CMsgCandyShopCandyQuantity | undefined;
  exchangeResetTimestamp: number;
  exchangeRecipes: CMsgCandyShopExchangeRecipe[];
  activeRewards: CMsgCandyShopReward[];
  rerollCharges: number;
}

export interface CMsgClientToGCCandyShopGetUserData {
  candyShopId: number;
}

export interface CMsgClientToGCCandyShopGetUserDataResponse {
  response: CMsgClientToGCCandyShopGetUserDataResponse_EResponse;
  userData: CMsgCandyShopUserData | undefined;
}

export enum CMsgClientToGCCandyShopGetUserDataResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidShop = 5,
  k_eExpiredShop = 6,
}

export function cMsgClientToGCCandyShopGetUserDataResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCCandyShopGetUserDataResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCCandyShopGetUserDataResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCCandyShopGetUserDataResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCCandyShopGetUserDataResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCCandyShopGetUserDataResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCCandyShopGetUserDataResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidShop":
      return CMsgClientToGCCandyShopGetUserDataResponse_EResponse.k_eInvalidShop;
    case 6:
    case "k_eExpiredShop":
      return CMsgClientToGCCandyShopGetUserDataResponse_EResponse.k_eExpiredShop;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCandyShopGetUserDataResponse_EResponse",
      );
  }
}

export function cMsgClientToGCCandyShopGetUserDataResponse_EResponseToJSON(
  object: CMsgClientToGCCandyShopGetUserDataResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCCandyShopGetUserDataResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCCandyShopGetUserDataResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCCandyShopGetUserDataResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCCandyShopGetUserDataResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCCandyShopGetUserDataResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCCandyShopGetUserDataResponse_EResponse.k_eInvalidShop:
      return "k_eInvalidShop";
    case CMsgClientToGCCandyShopGetUserDataResponse_EResponse.k_eExpiredShop:
      return "k_eExpiredShop";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCandyShopGetUserDataResponse_EResponse",
      );
  }
}

export interface CMsgGCToClientCandyShopUserDataUpdated {
  candyShopId: number;
  userData: CMsgCandyShopUserData | undefined;
}

export interface CMsgClientToGCCandyShopPurchaseReward {
  candyShopId: number;
  rewardId: string;
}

export interface CMsgClientToGCCandyShopPurchaseRewardResponse {
  response: CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse;
}

export enum CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidShop = 5,
  k_eInvalidReward = 6,
  k_eNotEnoughCandy = 7,
  k_eExpiredShop = 8,
}

export function cMsgClientToGCCandyShopPurchaseRewardResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidShop":
      return CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse.k_eInvalidShop;
    case 6:
    case "k_eInvalidReward":
      return CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse.k_eInvalidReward;
    case 7:
    case "k_eNotEnoughCandy":
      return CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse.k_eNotEnoughCandy;
    case 8:
    case "k_eExpiredShop":
      return CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse.k_eExpiredShop;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse",
      );
  }
}

export function cMsgClientToGCCandyShopPurchaseRewardResponse_EResponseToJSON(
  object: CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse.k_eInvalidShop:
      return "k_eInvalidShop";
    case CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse.k_eInvalidReward:
      return "k_eInvalidReward";
    case CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse.k_eNotEnoughCandy:
      return "k_eNotEnoughCandy";
    case CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse.k_eExpiredShop:
      return "k_eExpiredShop";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCandyShopPurchaseRewardResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCCandyShopOpenBags {
  candyShopId: number;
  bagCount: number;
}

export interface CMsgClientToGCCandyShopOpenBagsResponse {
  response: CMsgClientToGCCandyShopOpenBagsResponse_EResponse;
}

export enum CMsgClientToGCCandyShopOpenBagsResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidShop = 5,
  k_eInvalidItem = 6,
  k_eNotEnoughBags = 7,
  k_eNotEnoughSpace = 8,
  k_eExpiredShop = 9,
}

export function cMsgClientToGCCandyShopOpenBagsResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCCandyShopOpenBagsResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCCandyShopOpenBagsResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCCandyShopOpenBagsResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCCandyShopOpenBagsResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCCandyShopOpenBagsResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCCandyShopOpenBagsResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidShop":
      return CMsgClientToGCCandyShopOpenBagsResponse_EResponse.k_eInvalidShop;
    case 6:
    case "k_eInvalidItem":
      return CMsgClientToGCCandyShopOpenBagsResponse_EResponse.k_eInvalidItem;
    case 7:
    case "k_eNotEnoughBags":
      return CMsgClientToGCCandyShopOpenBagsResponse_EResponse.k_eNotEnoughBags;
    case 8:
    case "k_eNotEnoughSpace":
      return CMsgClientToGCCandyShopOpenBagsResponse_EResponse.k_eNotEnoughSpace;
    case 9:
    case "k_eExpiredShop":
      return CMsgClientToGCCandyShopOpenBagsResponse_EResponse.k_eExpiredShop;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCandyShopOpenBagsResponse_EResponse",
      );
  }
}

export function cMsgClientToGCCandyShopOpenBagsResponse_EResponseToJSON(
  object: CMsgClientToGCCandyShopOpenBagsResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCCandyShopOpenBagsResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCCandyShopOpenBagsResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCCandyShopOpenBagsResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCCandyShopOpenBagsResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCCandyShopOpenBagsResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCCandyShopOpenBagsResponse_EResponse.k_eInvalidShop:
      return "k_eInvalidShop";
    case CMsgClientToGCCandyShopOpenBagsResponse_EResponse.k_eInvalidItem:
      return "k_eInvalidItem";
    case CMsgClientToGCCandyShopOpenBagsResponse_EResponse.k_eNotEnoughBags:
      return "k_eNotEnoughBags";
    case CMsgClientToGCCandyShopOpenBagsResponse_EResponse.k_eNotEnoughSpace:
      return "k_eNotEnoughSpace";
    case CMsgClientToGCCandyShopOpenBagsResponse_EResponse.k_eExpiredShop:
      return "k_eExpiredShop";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCandyShopOpenBagsResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCCandyShopDoExchange {
  candyShopId: number;
  recipeId: number;
}

export interface CMsgClientToGCCandyShopDoExchangeResponse {
  response: CMsgClientToGCCandyShopDoExchangeResponse_EResponse;
}

export enum CMsgClientToGCCandyShopDoExchangeResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidShop = 5,
  k_eNotEnoughCandy = 6,
  k_eInvalidRecipe = 7,
  k_eNotEnoughSpace = 8,
  k_eExpiredShop = 9,
}

export function cMsgClientToGCCandyShopDoExchangeResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCCandyShopDoExchangeResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCCandyShopDoExchangeResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCCandyShopDoExchangeResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCCandyShopDoExchangeResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCCandyShopDoExchangeResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCCandyShopDoExchangeResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidShop":
      return CMsgClientToGCCandyShopDoExchangeResponse_EResponse.k_eInvalidShop;
    case 6:
    case "k_eNotEnoughCandy":
      return CMsgClientToGCCandyShopDoExchangeResponse_EResponse.k_eNotEnoughCandy;
    case 7:
    case "k_eInvalidRecipe":
      return CMsgClientToGCCandyShopDoExchangeResponse_EResponse.k_eInvalidRecipe;
    case 8:
    case "k_eNotEnoughSpace":
      return CMsgClientToGCCandyShopDoExchangeResponse_EResponse.k_eNotEnoughSpace;
    case 9:
    case "k_eExpiredShop":
      return CMsgClientToGCCandyShopDoExchangeResponse_EResponse.k_eExpiredShop;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCandyShopDoExchangeResponse_EResponse",
      );
  }
}

export function cMsgClientToGCCandyShopDoExchangeResponse_EResponseToJSON(
  object: CMsgClientToGCCandyShopDoExchangeResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCCandyShopDoExchangeResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCCandyShopDoExchangeResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCCandyShopDoExchangeResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCCandyShopDoExchangeResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCCandyShopDoExchangeResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCCandyShopDoExchangeResponse_EResponse.k_eInvalidShop:
      return "k_eInvalidShop";
    case CMsgClientToGCCandyShopDoExchangeResponse_EResponse.k_eNotEnoughCandy:
      return "k_eNotEnoughCandy";
    case CMsgClientToGCCandyShopDoExchangeResponse_EResponse.k_eInvalidRecipe:
      return "k_eInvalidRecipe";
    case CMsgClientToGCCandyShopDoExchangeResponse_EResponse.k_eNotEnoughSpace:
      return "k_eNotEnoughSpace";
    case CMsgClientToGCCandyShopDoExchangeResponse_EResponse.k_eExpiredShop:
      return "k_eExpiredShop";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCandyShopDoExchangeResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCCandyShopDoVariableExchange {
  candyShopId: number;
  input: CMsgCandyShopCandyQuantity | undefined;
  output: CMsgCandyShopCandyQuantity | undefined;
}

export interface CMsgClientToGCCandyShopDoVariableExchangeResponse {
  response: CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse;
}

export enum CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidShop = 5,
  k_eNotEnoughCandy = 6,
  k_eInvalidRecipe = 7,
  k_eNotEnoughSpace = 8,
  k_eExpiredShop = 9,
}

export function cMsgClientToGCCandyShopDoVariableExchangeResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidShop":
      return CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse.k_eInvalidShop;
    case 6:
    case "k_eNotEnoughCandy":
      return CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse.k_eNotEnoughCandy;
    case 7:
    case "k_eInvalidRecipe":
      return CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse.k_eInvalidRecipe;
    case 8:
    case "k_eNotEnoughSpace":
      return CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse.k_eNotEnoughSpace;
    case 9:
    case "k_eExpiredShop":
      return CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse.k_eExpiredShop;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse",
      );
  }
}

export function cMsgClientToGCCandyShopDoVariableExchangeResponse_EResponseToJSON(
  object: CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse.k_eInvalidShop:
      return "k_eInvalidShop";
    case CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse.k_eNotEnoughCandy:
      return "k_eNotEnoughCandy";
    case CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse.k_eInvalidRecipe:
      return "k_eInvalidRecipe";
    case CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse.k_eNotEnoughSpace:
      return "k_eNotEnoughSpace";
    case CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse.k_eExpiredShop:
      return "k_eExpiredShop";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCandyShopDoVariableExchangeResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCCandyShopRerollRewards {
  candyShopId: number;
}

export interface CMsgClientToGCCandyShopRerollRewardsResponse {
  response: CMsgClientToGCCandyShopRerollRewardsResponse_EResponse;
}

export enum CMsgClientToGCCandyShopRerollRewardsResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidShop = 5,
  k_eNoRerollCharges = 6,
  k_eExpiredShop = 7,
}

export function cMsgClientToGCCandyShopRerollRewardsResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCCandyShopRerollRewardsResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCCandyShopRerollRewardsResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCCandyShopRerollRewardsResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCCandyShopRerollRewardsResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCCandyShopRerollRewardsResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCCandyShopRerollRewardsResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidShop":
      return CMsgClientToGCCandyShopRerollRewardsResponse_EResponse.k_eInvalidShop;
    case 6:
    case "k_eNoRerollCharges":
      return CMsgClientToGCCandyShopRerollRewardsResponse_EResponse.k_eNoRerollCharges;
    case 7:
    case "k_eExpiredShop":
      return CMsgClientToGCCandyShopRerollRewardsResponse_EResponse.k_eExpiredShop;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCandyShopRerollRewardsResponse_EResponse",
      );
  }
}

export function cMsgClientToGCCandyShopRerollRewardsResponse_EResponseToJSON(
  object: CMsgClientToGCCandyShopRerollRewardsResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCCandyShopRerollRewardsResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCCandyShopRerollRewardsResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCCandyShopRerollRewardsResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCCandyShopRerollRewardsResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCCandyShopRerollRewardsResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCCandyShopRerollRewardsResponse_EResponse.k_eInvalidShop:
      return "k_eInvalidShop";
    case CMsgClientToGCCandyShopRerollRewardsResponse_EResponse.k_eNoRerollCharges:
      return "k_eNoRerollCharges";
    case CMsgClientToGCCandyShopRerollRewardsResponse_EResponse.k_eExpiredShop:
      return "k_eExpiredShop";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCandyShopRerollRewardsResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCCandyShopDevGrantCandy {
  candyShopId: number;
  candyQuantity: CMsgCandyShopCandyQuantity | undefined;
}

export interface CMsgClientToGCCandyShopDevGrantCandyResponse {
  response: CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse;
}

export enum CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eNotAllowed = 5,
  k_eInvalidShop = 6,
  k_eNotEnoughSpace = 7,
}

export function cMsgClientToGCCandyShopDevGrantCandyResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eNotAllowed":
      return CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse.k_eNotAllowed;
    case 6:
    case "k_eInvalidShop":
      return CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse.k_eInvalidShop;
    case 7:
    case "k_eNotEnoughSpace":
      return CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse.k_eNotEnoughSpace;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse",
      );
  }
}

export function cMsgClientToGCCandyShopDevGrantCandyResponse_EResponseToJSON(
  object: CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse.k_eNotAllowed:
      return "k_eNotAllowed";
    case CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse.k_eInvalidShop:
      return "k_eInvalidShop";
    case CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse.k_eNotEnoughSpace:
      return "k_eNotEnoughSpace";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCandyShopDevGrantCandyResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCCandyShopDevClearInventory {
  candyShopId: number;
}

export interface CMsgClientToGCCandyShopDevClearInventoryResponse {
  response: CMsgClientToGCCandyShopDevClearInventoryResponse_EResponse;
}

export enum CMsgClientToGCCandyShopDevClearInventoryResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eNotAllowed = 5,
  k_eInvalidShop = 6,
}

export function cMsgClientToGCCandyShopDevClearInventoryResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCCandyShopDevClearInventoryResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCCandyShopDevClearInventoryResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCCandyShopDevClearInventoryResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCCandyShopDevClearInventoryResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCCandyShopDevClearInventoryResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCCandyShopDevClearInventoryResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eNotAllowed":
      return CMsgClientToGCCandyShopDevClearInventoryResponse_EResponse.k_eNotAllowed;
    case 6:
    case "k_eInvalidShop":
      return CMsgClientToGCCandyShopDevClearInventoryResponse_EResponse.k_eInvalidShop;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCandyShopDevClearInventoryResponse_EResponse",
      );
  }
}

export function cMsgClientToGCCandyShopDevClearInventoryResponse_EResponseToJSON(
  object: CMsgClientToGCCandyShopDevClearInventoryResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCCandyShopDevClearInventoryResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCCandyShopDevClearInventoryResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCCandyShopDevClearInventoryResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCCandyShopDevClearInventoryResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCCandyShopDevClearInventoryResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCCandyShopDevClearInventoryResponse_EResponse.k_eNotAllowed:
      return "k_eNotAllowed";
    case CMsgClientToGCCandyShopDevClearInventoryResponse_EResponse.k_eInvalidShop:
      return "k_eInvalidShop";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCandyShopDevClearInventoryResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCCandyShopDevGrantCandyBags {
  candyShopId: number;
  quantity: number;
}

export interface CMsgClientToGCCandyShopDevGrantCandyBagsResponse {
  response: CMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponse;
}

export enum CMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eNotAllowed = 5,
  k_eInvalidShop = 6,
}

export function cMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eNotAllowed":
      return CMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponse.k_eNotAllowed;
    case 6:
    case "k_eInvalidShop":
      return CMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponse.k_eInvalidShop;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponse",
      );
  }
}

export function cMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponseToJSON(
  object: CMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponse.k_eNotAllowed:
      return "k_eNotAllowed";
    case CMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponse.k_eInvalidShop:
      return "k_eInvalidShop";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCCandyShopDevShuffleExchange {
  candyShopId: number;
}

export interface CMsgClientToGCCandyShopDevShuffleExchangeResponse {
  response: CMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponse;
}

export enum CMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eNotAllowed = 5,
  k_eInvalidShop = 6,
}

export function cMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eNotAllowed":
      return CMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponse.k_eNotAllowed;
    case 6:
    case "k_eInvalidShop":
      return CMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponse.k_eInvalidShop;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponse",
      );
  }
}

export function cMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponseToJSON(
  object: CMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponse.k_eNotAllowed:
      return "k_eNotAllowed";
    case CMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponse.k_eInvalidShop:
      return "k_eInvalidShop";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCCandyShopDevGrantRerollCharges {
  candyShopId: number;
  rerollCharges: number;
}

export interface CMsgClientToGCCandyShopDevGrantRerollChargesResponse {
  response: CMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponse;
}

export enum CMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eNotAllowed = 5,
  k_eInvalidShop = 6,
}

export function cMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eNotAllowed":
      return CMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponse.k_eNotAllowed;
    case 6:
    case "k_eInvalidShop":
      return CMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponse.k_eInvalidShop;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponse",
      );
  }
}

export function cMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponseToJSON(
  object: CMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponse.k_eNotAllowed:
      return "k_eNotAllowed";
    case CMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponse.k_eInvalidShop:
      return "k_eInvalidShop";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponse",
      );
  }
}

function createBaseCMsgCandyShopCandyCount(): CMsgCandyShopCandyCount {
  return { candyType: 0, candyCount: 0 };
}

export const CMsgCandyShopCandyCount = {
  encode(message: CMsgCandyShopCandyCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.candyType !== 0) {
      writer.uint32(8).uint32(message.candyType);
    }
    if (message.candyCount !== 0) {
      writer.uint32(16).uint32(message.candyCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCandyShopCandyCount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCandyShopCandyCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.candyType = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.candyCount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgCandyShopCandyCount {
    return {
      candyType: isSet(object.candyType) ? Number(object.candyType) : 0,
      candyCount: isSet(object.candyCount) ? Number(object.candyCount) : 0,
    };
  },

  toJSON(message: CMsgCandyShopCandyCount): unknown {
    const obj: any = {};
    message.candyType !== undefined && (obj.candyType = Math.round(message.candyType));
    message.candyCount !== undefined && (obj.candyCount = Math.round(message.candyCount));
    return obj;
  },

  create(base?: DeepPartial<CMsgCandyShopCandyCount>): CMsgCandyShopCandyCount {
    return CMsgCandyShopCandyCount.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgCandyShopCandyCount>): CMsgCandyShopCandyCount {
    const message = createBaseCMsgCandyShopCandyCount();
    message.candyType = object.candyType ?? 0;
    message.candyCount = object.candyCount ?? 0;
    return message;
  },
};

function createBaseCMsgCandyShopCandyQuantity(): CMsgCandyShopCandyQuantity {
  return { candyCounts: [] };
}

export const CMsgCandyShopCandyQuantity = {
  encode(message: CMsgCandyShopCandyQuantity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.candyCounts) {
      CMsgCandyShopCandyCount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCandyShopCandyQuantity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCandyShopCandyQuantity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.candyCounts.push(CMsgCandyShopCandyCount.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgCandyShopCandyQuantity {
    return {
      candyCounts: Array.isArray(object?.candyCounts)
        ? object.candyCounts.map((e: any) => CMsgCandyShopCandyCount.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgCandyShopCandyQuantity): unknown {
    const obj: any = {};
    if (message.candyCounts) {
      obj.candyCounts = message.candyCounts.map((e) => e ? CMsgCandyShopCandyCount.toJSON(e) : undefined);
    } else {
      obj.candyCounts = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgCandyShopCandyQuantity>): CMsgCandyShopCandyQuantity {
    return CMsgCandyShopCandyQuantity.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgCandyShopCandyQuantity>): CMsgCandyShopCandyQuantity {
    const message = createBaseCMsgCandyShopCandyQuantity();
    message.candyCounts = object.candyCounts?.map((e) => CMsgCandyShopCandyCount.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgCandyShopExchangeRecipe(): CMsgCandyShopExchangeRecipe {
  return { recipeId: 0, input: undefined, output: undefined };
}

export const CMsgCandyShopExchangeRecipe = {
  encode(message: CMsgCandyShopExchangeRecipe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recipeId !== 0) {
      writer.uint32(8).uint32(message.recipeId);
    }
    if (message.input !== undefined) {
      CMsgCandyShopCandyQuantity.encode(message.input, writer.uint32(18).fork()).ldelim();
    }
    if (message.output !== undefined) {
      CMsgCandyShopCandyQuantity.encode(message.output, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCandyShopExchangeRecipe {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCandyShopExchangeRecipe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.recipeId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.input = CMsgCandyShopCandyQuantity.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.output = CMsgCandyShopCandyQuantity.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgCandyShopExchangeRecipe {
    return {
      recipeId: isSet(object.recipeId) ? Number(object.recipeId) : 0,
      input: isSet(object.input) ? CMsgCandyShopCandyQuantity.fromJSON(object.input) : undefined,
      output: isSet(object.output) ? CMsgCandyShopCandyQuantity.fromJSON(object.output) : undefined,
    };
  },

  toJSON(message: CMsgCandyShopExchangeRecipe): unknown {
    const obj: any = {};
    message.recipeId !== undefined && (obj.recipeId = Math.round(message.recipeId));
    message.input !== undefined &&
      (obj.input = message.input ? CMsgCandyShopCandyQuantity.toJSON(message.input) : undefined);
    message.output !== undefined &&
      (obj.output = message.output ? CMsgCandyShopCandyQuantity.toJSON(message.output) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgCandyShopExchangeRecipe>): CMsgCandyShopExchangeRecipe {
    return CMsgCandyShopExchangeRecipe.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgCandyShopExchangeRecipe>): CMsgCandyShopExchangeRecipe {
    const message = createBaseCMsgCandyShopExchangeRecipe();
    message.recipeId = object.recipeId ?? 0;
    message.input = (object.input !== undefined && object.input !== null)
      ? CMsgCandyShopCandyQuantity.fromPartial(object.input)
      : undefined;
    message.output = (object.output !== undefined && object.output !== null)
      ? CMsgCandyShopCandyQuantity.fromPartial(object.output)
      : undefined;
    return message;
  },
};

function createBaseCMsgCandyShopRewardDataItem(): CMsgCandyShopRewardDataItem {
  return { itemDef: 0 };
}

export const CMsgCandyShopRewardDataItem = {
  encode(message: CMsgCandyShopRewardDataItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemDef !== 0) {
      writer.uint32(8).uint32(message.itemDef);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCandyShopRewardDataItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCandyShopRewardDataItem();
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

  fromJSON(object: any): CMsgCandyShopRewardDataItem {
    return { itemDef: isSet(object.itemDef) ? Number(object.itemDef) : 0 };
  },

  toJSON(message: CMsgCandyShopRewardDataItem): unknown {
    const obj: any = {};
    message.itemDef !== undefined && (obj.itemDef = Math.round(message.itemDef));
    return obj;
  },

  create(base?: DeepPartial<CMsgCandyShopRewardDataItem>): CMsgCandyShopRewardDataItem {
    return CMsgCandyShopRewardDataItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgCandyShopRewardDataItem>): CMsgCandyShopRewardDataItem {
    const message = createBaseCMsgCandyShopRewardDataItem();
    message.itemDef = object.itemDef ?? 0;
    return message;
  },
};

function createBaseCMsgCandyShopRewardDataEventAction(): CMsgCandyShopRewardDataEventAction {
  return { eventId: 0, actionId: 0, quantity: 0 };
}

export const CMsgCandyShopRewardDataEventAction = {
  encode(message: CMsgCandyShopRewardDataEventAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.actionId !== 0) {
      writer.uint32(16).uint32(message.actionId);
    }
    if (message.quantity !== 0) {
      writer.uint32(24).uint32(message.quantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCandyShopRewardDataEventAction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCandyShopRewardDataEventAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventId = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.actionId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
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

  fromJSON(object: any): CMsgCandyShopRewardDataEventAction {
    return {
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      actionId: isSet(object.actionId) ? Number(object.actionId) : 0,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
    };
  },

  toJSON(message: CMsgCandyShopRewardDataEventAction): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    message.actionId !== undefined && (obj.actionId = Math.round(message.actionId));
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    return obj;
  },

  create(base?: DeepPartial<CMsgCandyShopRewardDataEventAction>): CMsgCandyShopRewardDataEventAction {
    return CMsgCandyShopRewardDataEventAction.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgCandyShopRewardDataEventAction>): CMsgCandyShopRewardDataEventAction {
    const message = createBaseCMsgCandyShopRewardDataEventAction();
    message.eventId = object.eventId ?? 0;
    message.actionId = object.actionId ?? 0;
    message.quantity = object.quantity ?? 0;
    return message;
  },
};

function createBaseCMsgCandyShopRewardDataEventPoints(): CMsgCandyShopRewardDataEventPoints {
  return { eventId: 0, points: 0 };
}

export const CMsgCandyShopRewardDataEventPoints = {
  encode(message: CMsgCandyShopRewardDataEventPoints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.points !== 0) {
      writer.uint32(16).uint32(message.points);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCandyShopRewardDataEventPoints {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCandyShopRewardDataEventPoints();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventId = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.points = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgCandyShopRewardDataEventPoints {
    return {
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      points: isSet(object.points) ? Number(object.points) : 0,
    };
  },

  toJSON(message: CMsgCandyShopRewardDataEventPoints): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    message.points !== undefined && (obj.points = Math.round(message.points));
    return obj;
  },

  create(base?: DeepPartial<CMsgCandyShopRewardDataEventPoints>): CMsgCandyShopRewardDataEventPoints {
    return CMsgCandyShopRewardDataEventPoints.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgCandyShopRewardDataEventPoints>): CMsgCandyShopRewardDataEventPoints {
    const message = createBaseCMsgCandyShopRewardDataEventPoints();
    message.eventId = object.eventId ?? 0;
    message.points = object.points ?? 0;
    return message;
  },
};

function createBaseCMsgCandyShopReward(): CMsgCandyShopReward {
  return {
    rewardId: 0,
    rewardOptionId: 0,
    price: undefined,
    rewardType: 0,
    itemData: undefined,
    eventActionData: undefined,
    eventPointsData: undefined,
  };
}

export const CMsgCandyShopReward = {
  encode(message: CMsgCandyShopReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardId !== 0) {
      writer.uint32(8).uint32(message.rewardId);
    }
    if (message.rewardOptionId !== 0) {
      writer.uint32(16).uint32(message.rewardOptionId);
    }
    if (message.price !== undefined) {
      CMsgCandyShopCandyQuantity.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (message.rewardType !== 0) {
      writer.uint32(32).int32(message.rewardType);
    }
    if (message.itemData !== undefined) {
      CMsgCandyShopRewardDataItem.encode(message.itemData, writer.uint32(42).fork()).ldelim();
    }
    if (message.eventActionData !== undefined) {
      CMsgCandyShopRewardDataEventAction.encode(message.eventActionData, writer.uint32(50).fork()).ldelim();
    }
    if (message.eventPointsData !== undefined) {
      CMsgCandyShopRewardDataEventPoints.encode(message.eventPointsData, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCandyShopReward {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCandyShopReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.rewardId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.rewardOptionId = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.price = CMsgCandyShopCandyQuantity.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.rewardType = reader.int32() as any;
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.itemData = CMsgCandyShopRewardDataItem.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.eventActionData = CMsgCandyShopRewardDataEventAction.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.eventPointsData = CMsgCandyShopRewardDataEventPoints.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgCandyShopReward {
    return {
      rewardId: isSet(object.rewardId) ? Number(object.rewardId) : 0,
      rewardOptionId: isSet(object.rewardOptionId) ? Number(object.rewardOptionId) : 0,
      price: isSet(object.price) ? CMsgCandyShopCandyQuantity.fromJSON(object.price) : undefined,
      rewardType: isSet(object.rewardType) ? eCandyShopRewardTypeFromJSON(object.rewardType) : 0,
      itemData: isSet(object.itemData) ? CMsgCandyShopRewardDataItem.fromJSON(object.itemData) : undefined,
      eventActionData: isSet(object.eventActionData)
        ? CMsgCandyShopRewardDataEventAction.fromJSON(object.eventActionData)
        : undefined,
      eventPointsData: isSet(object.eventPointsData)
        ? CMsgCandyShopRewardDataEventPoints.fromJSON(object.eventPointsData)
        : undefined,
    };
  },

  toJSON(message: CMsgCandyShopReward): unknown {
    const obj: any = {};
    message.rewardId !== undefined && (obj.rewardId = Math.round(message.rewardId));
    message.rewardOptionId !== undefined && (obj.rewardOptionId = Math.round(message.rewardOptionId));
    message.price !== undefined &&
      (obj.price = message.price ? CMsgCandyShopCandyQuantity.toJSON(message.price) : undefined);
    message.rewardType !== undefined && (obj.rewardType = eCandyShopRewardTypeToJSON(message.rewardType));
    message.itemData !== undefined &&
      (obj.itemData = message.itemData ? CMsgCandyShopRewardDataItem.toJSON(message.itemData) : undefined);
    message.eventActionData !== undefined && (obj.eventActionData = message.eventActionData
      ? CMsgCandyShopRewardDataEventAction.toJSON(message.eventActionData)
      : undefined);
    message.eventPointsData !== undefined && (obj.eventPointsData = message.eventPointsData
      ? CMsgCandyShopRewardDataEventPoints.toJSON(message.eventPointsData)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgCandyShopReward>): CMsgCandyShopReward {
    return CMsgCandyShopReward.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgCandyShopReward>): CMsgCandyShopReward {
    const message = createBaseCMsgCandyShopReward();
    message.rewardId = object.rewardId ?? 0;
    message.rewardOptionId = object.rewardOptionId ?? 0;
    message.price = (object.price !== undefined && object.price !== null)
      ? CMsgCandyShopCandyQuantity.fromPartial(object.price)
      : undefined;
    message.rewardType = object.rewardType ?? 0;
    message.itemData = (object.itemData !== undefined && object.itemData !== null)
      ? CMsgCandyShopRewardDataItem.fromPartial(object.itemData)
      : undefined;
    message.eventActionData = (object.eventActionData !== undefined && object.eventActionData !== null)
      ? CMsgCandyShopRewardDataEventAction.fromPartial(object.eventActionData)
      : undefined;
    message.eventPointsData = (object.eventPointsData !== undefined && object.eventPointsData !== null)
      ? CMsgCandyShopRewardDataEventPoints.fromPartial(object.eventPointsData)
      : undefined;
    return message;
  },
};

function createBaseCMsgCandyShopUserData(): CMsgCandyShopUserData {
  return {
    inventorySize: 0,
    inventory: undefined,
    exchangeResetTimestamp: 0,
    exchangeRecipes: [],
    activeRewards: [],
    rerollCharges: 0,
  };
}

export const CMsgCandyShopUserData = {
  encode(message: CMsgCandyShopUserData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inventorySize !== 0) {
      writer.uint32(8).uint32(message.inventorySize);
    }
    if (message.inventory !== undefined) {
      CMsgCandyShopCandyQuantity.encode(message.inventory, writer.uint32(18).fork()).ldelim();
    }
    if (message.exchangeResetTimestamp !== 0) {
      writer.uint32(29).fixed32(message.exchangeResetTimestamp);
    }
    for (const v of message.exchangeRecipes) {
      CMsgCandyShopExchangeRecipe.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.activeRewards) {
      CMsgCandyShopReward.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.rerollCharges !== 0) {
      writer.uint32(48).uint32(message.rerollCharges);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCandyShopUserData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCandyShopUserData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.inventorySize = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.inventory = CMsgCandyShopCandyQuantity.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.exchangeResetTimestamp = reader.fixed32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.exchangeRecipes.push(CMsgCandyShopExchangeRecipe.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.activeRewards.push(CMsgCandyShopReward.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.rerollCharges = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgCandyShopUserData {
    return {
      inventorySize: isSet(object.inventorySize) ? Number(object.inventorySize) : 0,
      inventory: isSet(object.inventory) ? CMsgCandyShopCandyQuantity.fromJSON(object.inventory) : undefined,
      exchangeResetTimestamp: isSet(object.exchangeResetTimestamp) ? Number(object.exchangeResetTimestamp) : 0,
      exchangeRecipes: Array.isArray(object?.exchangeRecipes)
        ? object.exchangeRecipes.map((e: any) => CMsgCandyShopExchangeRecipe.fromJSON(e))
        : [],
      activeRewards: Array.isArray(object?.activeRewards)
        ? object.activeRewards.map((e: any) => CMsgCandyShopReward.fromJSON(e))
        : [],
      rerollCharges: isSet(object.rerollCharges) ? Number(object.rerollCharges) : 0,
    };
  },

  toJSON(message: CMsgCandyShopUserData): unknown {
    const obj: any = {};
    message.inventorySize !== undefined && (obj.inventorySize = Math.round(message.inventorySize));
    message.inventory !== undefined &&
      (obj.inventory = message.inventory ? CMsgCandyShopCandyQuantity.toJSON(message.inventory) : undefined);
    message.exchangeResetTimestamp !== undefined &&
      (obj.exchangeResetTimestamp = Math.round(message.exchangeResetTimestamp));
    if (message.exchangeRecipes) {
      obj.exchangeRecipes = message.exchangeRecipes.map((e) => e ? CMsgCandyShopExchangeRecipe.toJSON(e) : undefined);
    } else {
      obj.exchangeRecipes = [];
    }
    if (message.activeRewards) {
      obj.activeRewards = message.activeRewards.map((e) => e ? CMsgCandyShopReward.toJSON(e) : undefined);
    } else {
      obj.activeRewards = [];
    }
    message.rerollCharges !== undefined && (obj.rerollCharges = Math.round(message.rerollCharges));
    return obj;
  },

  create(base?: DeepPartial<CMsgCandyShopUserData>): CMsgCandyShopUserData {
    return CMsgCandyShopUserData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgCandyShopUserData>): CMsgCandyShopUserData {
    const message = createBaseCMsgCandyShopUserData();
    message.inventorySize = object.inventorySize ?? 0;
    message.inventory = (object.inventory !== undefined && object.inventory !== null)
      ? CMsgCandyShopCandyQuantity.fromPartial(object.inventory)
      : undefined;
    message.exchangeResetTimestamp = object.exchangeResetTimestamp ?? 0;
    message.exchangeRecipes = object.exchangeRecipes?.map((e) => CMsgCandyShopExchangeRecipe.fromPartial(e)) || [];
    message.activeRewards = object.activeRewards?.map((e) => CMsgCandyShopReward.fromPartial(e)) || [];
    message.rerollCharges = object.rerollCharges ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopGetUserData(): CMsgClientToGCCandyShopGetUserData {
  return { candyShopId: 0 };
}

export const CMsgClientToGCCandyShopGetUserData = {
  encode(message: CMsgClientToGCCandyShopGetUserData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.candyShopId !== 0) {
      writer.uint32(8).uint32(message.candyShopId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopGetUserData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopGetUserData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.candyShopId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCCandyShopGetUserData {
    return { candyShopId: isSet(object.candyShopId) ? Number(object.candyShopId) : 0 };
  },

  toJSON(message: CMsgClientToGCCandyShopGetUserData): unknown {
    const obj: any = {};
    message.candyShopId !== undefined && (obj.candyShopId = Math.round(message.candyShopId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCCandyShopGetUserData>): CMsgClientToGCCandyShopGetUserData {
    return CMsgClientToGCCandyShopGetUserData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCCandyShopGetUserData>): CMsgClientToGCCandyShopGetUserData {
    const message = createBaseCMsgClientToGCCandyShopGetUserData();
    message.candyShopId = object.candyShopId ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopGetUserDataResponse(): CMsgClientToGCCandyShopGetUserDataResponse {
  return { response: 0, userData: undefined };
}

export const CMsgClientToGCCandyShopGetUserDataResponse = {
  encode(message: CMsgClientToGCCandyShopGetUserDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    if (message.userData !== undefined) {
      CMsgCandyShopUserData.encode(message.userData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopGetUserDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopGetUserDataResponse();
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

          message.userData = CMsgCandyShopUserData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCCandyShopGetUserDataResponse {
    return {
      response: isSet(object.response)
        ? cMsgClientToGCCandyShopGetUserDataResponse_EResponseFromJSON(object.response)
        : 0,
      userData: isSet(object.userData) ? CMsgCandyShopUserData.fromJSON(object.userData) : undefined,
    };
  },

  toJSON(message: CMsgClientToGCCandyShopGetUserDataResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = cMsgClientToGCCandyShopGetUserDataResponse_EResponseToJSON(message.response));
    message.userData !== undefined &&
      (obj.userData = message.userData ? CMsgCandyShopUserData.toJSON(message.userData) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCCandyShopGetUserDataResponse>): CMsgClientToGCCandyShopGetUserDataResponse {
    return CMsgClientToGCCandyShopGetUserDataResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCCandyShopGetUserDataResponse>,
  ): CMsgClientToGCCandyShopGetUserDataResponse {
    const message = createBaseCMsgClientToGCCandyShopGetUserDataResponse();
    message.response = object.response ?? 0;
    message.userData = (object.userData !== undefined && object.userData !== null)
      ? CMsgCandyShopUserData.fromPartial(object.userData)
      : undefined;
    return message;
  },
};

function createBaseCMsgGCToClientCandyShopUserDataUpdated(): CMsgGCToClientCandyShopUserDataUpdated {
  return { candyShopId: 0, userData: undefined };
}

export const CMsgGCToClientCandyShopUserDataUpdated = {
  encode(message: CMsgGCToClientCandyShopUserDataUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.candyShopId !== 0) {
      writer.uint32(8).uint32(message.candyShopId);
    }
    if (message.userData !== undefined) {
      CMsgCandyShopUserData.encode(message.userData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientCandyShopUserDataUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientCandyShopUserDataUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.candyShopId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.userData = CMsgCandyShopUserData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToClientCandyShopUserDataUpdated {
    return {
      candyShopId: isSet(object.candyShopId) ? Number(object.candyShopId) : 0,
      userData: isSet(object.userData) ? CMsgCandyShopUserData.fromJSON(object.userData) : undefined,
    };
  },

  toJSON(message: CMsgGCToClientCandyShopUserDataUpdated): unknown {
    const obj: any = {};
    message.candyShopId !== undefined && (obj.candyShopId = Math.round(message.candyShopId));
    message.userData !== undefined &&
      (obj.userData = message.userData ? CMsgCandyShopUserData.toJSON(message.userData) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToClientCandyShopUserDataUpdated>): CMsgGCToClientCandyShopUserDataUpdated {
    return CMsgGCToClientCandyShopUserDataUpdated.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToClientCandyShopUserDataUpdated>): CMsgGCToClientCandyShopUserDataUpdated {
    const message = createBaseCMsgGCToClientCandyShopUserDataUpdated();
    message.candyShopId = object.candyShopId ?? 0;
    message.userData = (object.userData !== undefined && object.userData !== null)
      ? CMsgCandyShopUserData.fromPartial(object.userData)
      : undefined;
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopPurchaseReward(): CMsgClientToGCCandyShopPurchaseReward {
  return { candyShopId: 0, rewardId: "0" };
}

export const CMsgClientToGCCandyShopPurchaseReward = {
  encode(message: CMsgClientToGCCandyShopPurchaseReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.candyShopId !== 0) {
      writer.uint32(8).uint32(message.candyShopId);
    }
    if (message.rewardId !== "0") {
      writer.uint32(16).uint64(message.rewardId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopPurchaseReward {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopPurchaseReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.candyShopId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.rewardId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCCandyShopPurchaseReward {
    return {
      candyShopId: isSet(object.candyShopId) ? Number(object.candyShopId) : 0,
      rewardId: isSet(object.rewardId) ? String(object.rewardId) : "0",
    };
  },

  toJSON(message: CMsgClientToGCCandyShopPurchaseReward): unknown {
    const obj: any = {};
    message.candyShopId !== undefined && (obj.candyShopId = Math.round(message.candyShopId));
    message.rewardId !== undefined && (obj.rewardId = message.rewardId);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCCandyShopPurchaseReward>): CMsgClientToGCCandyShopPurchaseReward {
    return CMsgClientToGCCandyShopPurchaseReward.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCCandyShopPurchaseReward>): CMsgClientToGCCandyShopPurchaseReward {
    const message = createBaseCMsgClientToGCCandyShopPurchaseReward();
    message.candyShopId = object.candyShopId ?? 0;
    message.rewardId = object.rewardId ?? "0";
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopPurchaseRewardResponse(): CMsgClientToGCCandyShopPurchaseRewardResponse {
  return { response: 0 };
}

export const CMsgClientToGCCandyShopPurchaseRewardResponse = {
  encode(message: CMsgClientToGCCandyShopPurchaseRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopPurchaseRewardResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopPurchaseRewardResponse();
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

  fromJSON(object: any): CMsgClientToGCCandyShopPurchaseRewardResponse {
    return {
      response: isSet(object.response)
        ? cMsgClientToGCCandyShopPurchaseRewardResponse_EResponseFromJSON(object.response)
        : 0,
    };
  },

  toJSON(message: CMsgClientToGCCandyShopPurchaseRewardResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = cMsgClientToGCCandyShopPurchaseRewardResponse_EResponseToJSON(message.response));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCCandyShopPurchaseRewardResponse>,
  ): CMsgClientToGCCandyShopPurchaseRewardResponse {
    return CMsgClientToGCCandyShopPurchaseRewardResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCCandyShopPurchaseRewardResponse>,
  ): CMsgClientToGCCandyShopPurchaseRewardResponse {
    const message = createBaseCMsgClientToGCCandyShopPurchaseRewardResponse();
    message.response = object.response ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopOpenBags(): CMsgClientToGCCandyShopOpenBags {
  return { candyShopId: 0, bagCount: 0 };
}

export const CMsgClientToGCCandyShopOpenBags = {
  encode(message: CMsgClientToGCCandyShopOpenBags, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.candyShopId !== 0) {
      writer.uint32(8).uint32(message.candyShopId);
    }
    if (message.bagCount !== 0) {
      writer.uint32(16).uint32(message.bagCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopOpenBags {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopOpenBags();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.candyShopId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.bagCount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCCandyShopOpenBags {
    return {
      candyShopId: isSet(object.candyShopId) ? Number(object.candyShopId) : 0,
      bagCount: isSet(object.bagCount) ? Number(object.bagCount) : 0,
    };
  },

  toJSON(message: CMsgClientToGCCandyShopOpenBags): unknown {
    const obj: any = {};
    message.candyShopId !== undefined && (obj.candyShopId = Math.round(message.candyShopId));
    message.bagCount !== undefined && (obj.bagCount = Math.round(message.bagCount));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCCandyShopOpenBags>): CMsgClientToGCCandyShopOpenBags {
    return CMsgClientToGCCandyShopOpenBags.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCCandyShopOpenBags>): CMsgClientToGCCandyShopOpenBags {
    const message = createBaseCMsgClientToGCCandyShopOpenBags();
    message.candyShopId = object.candyShopId ?? 0;
    message.bagCount = object.bagCount ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopOpenBagsResponse(): CMsgClientToGCCandyShopOpenBagsResponse {
  return { response: 0 };
}

export const CMsgClientToGCCandyShopOpenBagsResponse = {
  encode(message: CMsgClientToGCCandyShopOpenBagsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopOpenBagsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopOpenBagsResponse();
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

  fromJSON(object: any): CMsgClientToGCCandyShopOpenBagsResponse {
    return {
      response: isSet(object.response) ? cMsgClientToGCCandyShopOpenBagsResponse_EResponseFromJSON(object.response) : 0,
    };
  },

  toJSON(message: CMsgClientToGCCandyShopOpenBagsResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = cMsgClientToGCCandyShopOpenBagsResponse_EResponseToJSON(message.response));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCCandyShopOpenBagsResponse>): CMsgClientToGCCandyShopOpenBagsResponse {
    return CMsgClientToGCCandyShopOpenBagsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCCandyShopOpenBagsResponse>): CMsgClientToGCCandyShopOpenBagsResponse {
    const message = createBaseCMsgClientToGCCandyShopOpenBagsResponse();
    message.response = object.response ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopDoExchange(): CMsgClientToGCCandyShopDoExchange {
  return { candyShopId: 0, recipeId: 0 };
}

export const CMsgClientToGCCandyShopDoExchange = {
  encode(message: CMsgClientToGCCandyShopDoExchange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.candyShopId !== 0) {
      writer.uint32(8).uint32(message.candyShopId);
    }
    if (message.recipeId !== 0) {
      writer.uint32(16).uint32(message.recipeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopDoExchange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopDoExchange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.candyShopId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.recipeId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCCandyShopDoExchange {
    return {
      candyShopId: isSet(object.candyShopId) ? Number(object.candyShopId) : 0,
      recipeId: isSet(object.recipeId) ? Number(object.recipeId) : 0,
    };
  },

  toJSON(message: CMsgClientToGCCandyShopDoExchange): unknown {
    const obj: any = {};
    message.candyShopId !== undefined && (obj.candyShopId = Math.round(message.candyShopId));
    message.recipeId !== undefined && (obj.recipeId = Math.round(message.recipeId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCCandyShopDoExchange>): CMsgClientToGCCandyShopDoExchange {
    return CMsgClientToGCCandyShopDoExchange.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCCandyShopDoExchange>): CMsgClientToGCCandyShopDoExchange {
    const message = createBaseCMsgClientToGCCandyShopDoExchange();
    message.candyShopId = object.candyShopId ?? 0;
    message.recipeId = object.recipeId ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopDoExchangeResponse(): CMsgClientToGCCandyShopDoExchangeResponse {
  return { response: 0 };
}

export const CMsgClientToGCCandyShopDoExchangeResponse = {
  encode(message: CMsgClientToGCCandyShopDoExchangeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopDoExchangeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopDoExchangeResponse();
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

  fromJSON(object: any): CMsgClientToGCCandyShopDoExchangeResponse {
    return {
      response: isSet(object.response)
        ? cMsgClientToGCCandyShopDoExchangeResponse_EResponseFromJSON(object.response)
        : 0,
    };
  },

  toJSON(message: CMsgClientToGCCandyShopDoExchangeResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = cMsgClientToGCCandyShopDoExchangeResponse_EResponseToJSON(message.response));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCCandyShopDoExchangeResponse>): CMsgClientToGCCandyShopDoExchangeResponse {
    return CMsgClientToGCCandyShopDoExchangeResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCCandyShopDoExchangeResponse>,
  ): CMsgClientToGCCandyShopDoExchangeResponse {
    const message = createBaseCMsgClientToGCCandyShopDoExchangeResponse();
    message.response = object.response ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopDoVariableExchange(): CMsgClientToGCCandyShopDoVariableExchange {
  return { candyShopId: 0, input: undefined, output: undefined };
}

export const CMsgClientToGCCandyShopDoVariableExchange = {
  encode(message: CMsgClientToGCCandyShopDoVariableExchange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.candyShopId !== 0) {
      writer.uint32(8).uint32(message.candyShopId);
    }
    if (message.input !== undefined) {
      CMsgCandyShopCandyQuantity.encode(message.input, writer.uint32(18).fork()).ldelim();
    }
    if (message.output !== undefined) {
      CMsgCandyShopCandyQuantity.encode(message.output, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopDoVariableExchange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopDoVariableExchange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.candyShopId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.input = CMsgCandyShopCandyQuantity.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.output = CMsgCandyShopCandyQuantity.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCCandyShopDoVariableExchange {
    return {
      candyShopId: isSet(object.candyShopId) ? Number(object.candyShopId) : 0,
      input: isSet(object.input) ? CMsgCandyShopCandyQuantity.fromJSON(object.input) : undefined,
      output: isSet(object.output) ? CMsgCandyShopCandyQuantity.fromJSON(object.output) : undefined,
    };
  },

  toJSON(message: CMsgClientToGCCandyShopDoVariableExchange): unknown {
    const obj: any = {};
    message.candyShopId !== undefined && (obj.candyShopId = Math.round(message.candyShopId));
    message.input !== undefined &&
      (obj.input = message.input ? CMsgCandyShopCandyQuantity.toJSON(message.input) : undefined);
    message.output !== undefined &&
      (obj.output = message.output ? CMsgCandyShopCandyQuantity.toJSON(message.output) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCCandyShopDoVariableExchange>): CMsgClientToGCCandyShopDoVariableExchange {
    return CMsgClientToGCCandyShopDoVariableExchange.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCCandyShopDoVariableExchange>,
  ): CMsgClientToGCCandyShopDoVariableExchange {
    const message = createBaseCMsgClientToGCCandyShopDoVariableExchange();
    message.candyShopId = object.candyShopId ?? 0;
    message.input = (object.input !== undefined && object.input !== null)
      ? CMsgCandyShopCandyQuantity.fromPartial(object.input)
      : undefined;
    message.output = (object.output !== undefined && object.output !== null)
      ? CMsgCandyShopCandyQuantity.fromPartial(object.output)
      : undefined;
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopDoVariableExchangeResponse(): CMsgClientToGCCandyShopDoVariableExchangeResponse {
  return { response: 0 };
}

export const CMsgClientToGCCandyShopDoVariableExchangeResponse = {
  encode(
    message: CMsgClientToGCCandyShopDoVariableExchangeResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopDoVariableExchangeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopDoVariableExchangeResponse();
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

  fromJSON(object: any): CMsgClientToGCCandyShopDoVariableExchangeResponse {
    return {
      response: isSet(object.response)
        ? cMsgClientToGCCandyShopDoVariableExchangeResponse_EResponseFromJSON(object.response)
        : 0,
    };
  },

  toJSON(message: CMsgClientToGCCandyShopDoVariableExchangeResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = cMsgClientToGCCandyShopDoVariableExchangeResponse_EResponseToJSON(message.response));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCCandyShopDoVariableExchangeResponse>,
  ): CMsgClientToGCCandyShopDoVariableExchangeResponse {
    return CMsgClientToGCCandyShopDoVariableExchangeResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCCandyShopDoVariableExchangeResponse>,
  ): CMsgClientToGCCandyShopDoVariableExchangeResponse {
    const message = createBaseCMsgClientToGCCandyShopDoVariableExchangeResponse();
    message.response = object.response ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopRerollRewards(): CMsgClientToGCCandyShopRerollRewards {
  return { candyShopId: 0 };
}

export const CMsgClientToGCCandyShopRerollRewards = {
  encode(message: CMsgClientToGCCandyShopRerollRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.candyShopId !== 0) {
      writer.uint32(8).uint32(message.candyShopId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopRerollRewards {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopRerollRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.candyShopId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCCandyShopRerollRewards {
    return { candyShopId: isSet(object.candyShopId) ? Number(object.candyShopId) : 0 };
  },

  toJSON(message: CMsgClientToGCCandyShopRerollRewards): unknown {
    const obj: any = {};
    message.candyShopId !== undefined && (obj.candyShopId = Math.round(message.candyShopId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCCandyShopRerollRewards>): CMsgClientToGCCandyShopRerollRewards {
    return CMsgClientToGCCandyShopRerollRewards.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCCandyShopRerollRewards>): CMsgClientToGCCandyShopRerollRewards {
    const message = createBaseCMsgClientToGCCandyShopRerollRewards();
    message.candyShopId = object.candyShopId ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopRerollRewardsResponse(): CMsgClientToGCCandyShopRerollRewardsResponse {
  return { response: 0 };
}

export const CMsgClientToGCCandyShopRerollRewardsResponse = {
  encode(message: CMsgClientToGCCandyShopRerollRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopRerollRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopRerollRewardsResponse();
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

  fromJSON(object: any): CMsgClientToGCCandyShopRerollRewardsResponse {
    return {
      response: isSet(object.response)
        ? cMsgClientToGCCandyShopRerollRewardsResponse_EResponseFromJSON(object.response)
        : 0,
    };
  },

  toJSON(message: CMsgClientToGCCandyShopRerollRewardsResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = cMsgClientToGCCandyShopRerollRewardsResponse_EResponseToJSON(message.response));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCCandyShopRerollRewardsResponse>,
  ): CMsgClientToGCCandyShopRerollRewardsResponse {
    return CMsgClientToGCCandyShopRerollRewardsResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCCandyShopRerollRewardsResponse>,
  ): CMsgClientToGCCandyShopRerollRewardsResponse {
    const message = createBaseCMsgClientToGCCandyShopRerollRewardsResponse();
    message.response = object.response ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopDevGrantCandy(): CMsgClientToGCCandyShopDevGrantCandy {
  return { candyShopId: 0, candyQuantity: undefined };
}

export const CMsgClientToGCCandyShopDevGrantCandy = {
  encode(message: CMsgClientToGCCandyShopDevGrantCandy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.candyShopId !== 0) {
      writer.uint32(8).uint32(message.candyShopId);
    }
    if (message.candyQuantity !== undefined) {
      CMsgCandyShopCandyQuantity.encode(message.candyQuantity, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopDevGrantCandy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopDevGrantCandy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.candyShopId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.candyQuantity = CMsgCandyShopCandyQuantity.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCCandyShopDevGrantCandy {
    return {
      candyShopId: isSet(object.candyShopId) ? Number(object.candyShopId) : 0,
      candyQuantity: isSet(object.candyQuantity)
        ? CMsgCandyShopCandyQuantity.fromJSON(object.candyQuantity)
        : undefined,
    };
  },

  toJSON(message: CMsgClientToGCCandyShopDevGrantCandy): unknown {
    const obj: any = {};
    message.candyShopId !== undefined && (obj.candyShopId = Math.round(message.candyShopId));
    message.candyQuantity !== undefined &&
      (obj.candyQuantity = message.candyQuantity
        ? CMsgCandyShopCandyQuantity.toJSON(message.candyQuantity)
        : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCCandyShopDevGrantCandy>): CMsgClientToGCCandyShopDevGrantCandy {
    return CMsgClientToGCCandyShopDevGrantCandy.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCCandyShopDevGrantCandy>): CMsgClientToGCCandyShopDevGrantCandy {
    const message = createBaseCMsgClientToGCCandyShopDevGrantCandy();
    message.candyShopId = object.candyShopId ?? 0;
    message.candyQuantity = (object.candyQuantity !== undefined && object.candyQuantity !== null)
      ? CMsgCandyShopCandyQuantity.fromPartial(object.candyQuantity)
      : undefined;
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopDevGrantCandyResponse(): CMsgClientToGCCandyShopDevGrantCandyResponse {
  return { response: 0 };
}

export const CMsgClientToGCCandyShopDevGrantCandyResponse = {
  encode(message: CMsgClientToGCCandyShopDevGrantCandyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopDevGrantCandyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopDevGrantCandyResponse();
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

  fromJSON(object: any): CMsgClientToGCCandyShopDevGrantCandyResponse {
    return {
      response: isSet(object.response)
        ? cMsgClientToGCCandyShopDevGrantCandyResponse_EResponseFromJSON(object.response)
        : 0,
    };
  },

  toJSON(message: CMsgClientToGCCandyShopDevGrantCandyResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = cMsgClientToGCCandyShopDevGrantCandyResponse_EResponseToJSON(message.response));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCCandyShopDevGrantCandyResponse>,
  ): CMsgClientToGCCandyShopDevGrantCandyResponse {
    return CMsgClientToGCCandyShopDevGrantCandyResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCCandyShopDevGrantCandyResponse>,
  ): CMsgClientToGCCandyShopDevGrantCandyResponse {
    const message = createBaseCMsgClientToGCCandyShopDevGrantCandyResponse();
    message.response = object.response ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopDevClearInventory(): CMsgClientToGCCandyShopDevClearInventory {
  return { candyShopId: 0 };
}

export const CMsgClientToGCCandyShopDevClearInventory = {
  encode(message: CMsgClientToGCCandyShopDevClearInventory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.candyShopId !== 0) {
      writer.uint32(8).uint32(message.candyShopId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopDevClearInventory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopDevClearInventory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.candyShopId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCCandyShopDevClearInventory {
    return { candyShopId: isSet(object.candyShopId) ? Number(object.candyShopId) : 0 };
  },

  toJSON(message: CMsgClientToGCCandyShopDevClearInventory): unknown {
    const obj: any = {};
    message.candyShopId !== undefined && (obj.candyShopId = Math.round(message.candyShopId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCCandyShopDevClearInventory>): CMsgClientToGCCandyShopDevClearInventory {
    return CMsgClientToGCCandyShopDevClearInventory.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCCandyShopDevClearInventory>): CMsgClientToGCCandyShopDevClearInventory {
    const message = createBaseCMsgClientToGCCandyShopDevClearInventory();
    message.candyShopId = object.candyShopId ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopDevClearInventoryResponse(): CMsgClientToGCCandyShopDevClearInventoryResponse {
  return { response: 0 };
}

export const CMsgClientToGCCandyShopDevClearInventoryResponse = {
  encode(
    message: CMsgClientToGCCandyShopDevClearInventoryResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopDevClearInventoryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopDevClearInventoryResponse();
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

  fromJSON(object: any): CMsgClientToGCCandyShopDevClearInventoryResponse {
    return {
      response: isSet(object.response)
        ? cMsgClientToGCCandyShopDevClearInventoryResponse_EResponseFromJSON(object.response)
        : 0,
    };
  },

  toJSON(message: CMsgClientToGCCandyShopDevClearInventoryResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = cMsgClientToGCCandyShopDevClearInventoryResponse_EResponseToJSON(message.response));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCCandyShopDevClearInventoryResponse>,
  ): CMsgClientToGCCandyShopDevClearInventoryResponse {
    return CMsgClientToGCCandyShopDevClearInventoryResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCCandyShopDevClearInventoryResponse>,
  ): CMsgClientToGCCandyShopDevClearInventoryResponse {
    const message = createBaseCMsgClientToGCCandyShopDevClearInventoryResponse();
    message.response = object.response ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopDevGrantCandyBags(): CMsgClientToGCCandyShopDevGrantCandyBags {
  return { candyShopId: 0, quantity: 0 };
}

export const CMsgClientToGCCandyShopDevGrantCandyBags = {
  encode(message: CMsgClientToGCCandyShopDevGrantCandyBags, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.candyShopId !== 0) {
      writer.uint32(8).uint32(message.candyShopId);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).uint32(message.quantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopDevGrantCandyBags {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopDevGrantCandyBags();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.candyShopId = reader.uint32();
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

  fromJSON(object: any): CMsgClientToGCCandyShopDevGrantCandyBags {
    return {
      candyShopId: isSet(object.candyShopId) ? Number(object.candyShopId) : 0,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
    };
  },

  toJSON(message: CMsgClientToGCCandyShopDevGrantCandyBags): unknown {
    const obj: any = {};
    message.candyShopId !== undefined && (obj.candyShopId = Math.round(message.candyShopId));
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCCandyShopDevGrantCandyBags>): CMsgClientToGCCandyShopDevGrantCandyBags {
    return CMsgClientToGCCandyShopDevGrantCandyBags.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCCandyShopDevGrantCandyBags>): CMsgClientToGCCandyShopDevGrantCandyBags {
    const message = createBaseCMsgClientToGCCandyShopDevGrantCandyBags();
    message.candyShopId = object.candyShopId ?? 0;
    message.quantity = object.quantity ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopDevGrantCandyBagsResponse(): CMsgClientToGCCandyShopDevGrantCandyBagsResponse {
  return { response: 0 };
}

export const CMsgClientToGCCandyShopDevGrantCandyBagsResponse = {
  encode(
    message: CMsgClientToGCCandyShopDevGrantCandyBagsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopDevGrantCandyBagsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopDevGrantCandyBagsResponse();
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

  fromJSON(object: any): CMsgClientToGCCandyShopDevGrantCandyBagsResponse {
    return {
      response: isSet(object.response)
        ? cMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponseFromJSON(object.response)
        : 0,
    };
  },

  toJSON(message: CMsgClientToGCCandyShopDevGrantCandyBagsResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = cMsgClientToGCCandyShopDevGrantCandyBagsResponse_EResponseToJSON(message.response));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCCandyShopDevGrantCandyBagsResponse>,
  ): CMsgClientToGCCandyShopDevGrantCandyBagsResponse {
    return CMsgClientToGCCandyShopDevGrantCandyBagsResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCCandyShopDevGrantCandyBagsResponse>,
  ): CMsgClientToGCCandyShopDevGrantCandyBagsResponse {
    const message = createBaseCMsgClientToGCCandyShopDevGrantCandyBagsResponse();
    message.response = object.response ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopDevShuffleExchange(): CMsgClientToGCCandyShopDevShuffleExchange {
  return { candyShopId: 0 };
}

export const CMsgClientToGCCandyShopDevShuffleExchange = {
  encode(message: CMsgClientToGCCandyShopDevShuffleExchange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.candyShopId !== 0) {
      writer.uint32(8).uint32(message.candyShopId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopDevShuffleExchange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopDevShuffleExchange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.candyShopId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCCandyShopDevShuffleExchange {
    return { candyShopId: isSet(object.candyShopId) ? Number(object.candyShopId) : 0 };
  },

  toJSON(message: CMsgClientToGCCandyShopDevShuffleExchange): unknown {
    const obj: any = {};
    message.candyShopId !== undefined && (obj.candyShopId = Math.round(message.candyShopId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCCandyShopDevShuffleExchange>): CMsgClientToGCCandyShopDevShuffleExchange {
    return CMsgClientToGCCandyShopDevShuffleExchange.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCCandyShopDevShuffleExchange>,
  ): CMsgClientToGCCandyShopDevShuffleExchange {
    const message = createBaseCMsgClientToGCCandyShopDevShuffleExchange();
    message.candyShopId = object.candyShopId ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopDevShuffleExchangeResponse(): CMsgClientToGCCandyShopDevShuffleExchangeResponse {
  return { response: 0 };
}

export const CMsgClientToGCCandyShopDevShuffleExchangeResponse = {
  encode(
    message: CMsgClientToGCCandyShopDevShuffleExchangeResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopDevShuffleExchangeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopDevShuffleExchangeResponse();
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

  fromJSON(object: any): CMsgClientToGCCandyShopDevShuffleExchangeResponse {
    return {
      response: isSet(object.response)
        ? cMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponseFromJSON(object.response)
        : 0,
    };
  },

  toJSON(message: CMsgClientToGCCandyShopDevShuffleExchangeResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = cMsgClientToGCCandyShopDevShuffleExchangeResponse_EResponseToJSON(message.response));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCCandyShopDevShuffleExchangeResponse>,
  ): CMsgClientToGCCandyShopDevShuffleExchangeResponse {
    return CMsgClientToGCCandyShopDevShuffleExchangeResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCCandyShopDevShuffleExchangeResponse>,
  ): CMsgClientToGCCandyShopDevShuffleExchangeResponse {
    const message = createBaseCMsgClientToGCCandyShopDevShuffleExchangeResponse();
    message.response = object.response ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopDevGrantRerollCharges(): CMsgClientToGCCandyShopDevGrantRerollCharges {
  return { candyShopId: 0, rerollCharges: 0 };
}

export const CMsgClientToGCCandyShopDevGrantRerollCharges = {
  encode(message: CMsgClientToGCCandyShopDevGrantRerollCharges, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.candyShopId !== 0) {
      writer.uint32(8).uint32(message.candyShopId);
    }
    if (message.rerollCharges !== 0) {
      writer.uint32(16).uint32(message.rerollCharges);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopDevGrantRerollCharges {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopDevGrantRerollCharges();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.candyShopId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.rerollCharges = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCCandyShopDevGrantRerollCharges {
    return {
      candyShopId: isSet(object.candyShopId) ? Number(object.candyShopId) : 0,
      rerollCharges: isSet(object.rerollCharges) ? Number(object.rerollCharges) : 0,
    };
  },

  toJSON(message: CMsgClientToGCCandyShopDevGrantRerollCharges): unknown {
    const obj: any = {};
    message.candyShopId !== undefined && (obj.candyShopId = Math.round(message.candyShopId));
    message.rerollCharges !== undefined && (obj.rerollCharges = Math.round(message.rerollCharges));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCCandyShopDevGrantRerollCharges>,
  ): CMsgClientToGCCandyShopDevGrantRerollCharges {
    return CMsgClientToGCCandyShopDevGrantRerollCharges.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCCandyShopDevGrantRerollCharges>,
  ): CMsgClientToGCCandyShopDevGrantRerollCharges {
    const message = createBaseCMsgClientToGCCandyShopDevGrantRerollCharges();
    message.candyShopId = object.candyShopId ?? 0;
    message.rerollCharges = object.rerollCharges ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCCandyShopDevGrantRerollChargesResponse(): CMsgClientToGCCandyShopDevGrantRerollChargesResponse {
  return { response: 0 };
}

export const CMsgClientToGCCandyShopDevGrantRerollChargesResponse = {
  encode(
    message: CMsgClientToGCCandyShopDevGrantRerollChargesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCandyShopDevGrantRerollChargesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCandyShopDevGrantRerollChargesResponse();
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

  fromJSON(object: any): CMsgClientToGCCandyShopDevGrantRerollChargesResponse {
    return {
      response: isSet(object.response)
        ? cMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponseFromJSON(object.response)
        : 0,
    };
  },

  toJSON(message: CMsgClientToGCCandyShopDevGrantRerollChargesResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = cMsgClientToGCCandyShopDevGrantRerollChargesResponse_EResponseToJSON(message.response));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCCandyShopDevGrantRerollChargesResponse>,
  ): CMsgClientToGCCandyShopDevGrantRerollChargesResponse {
    return CMsgClientToGCCandyShopDevGrantRerollChargesResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCCandyShopDevGrantRerollChargesResponse>,
  ): CMsgClientToGCCandyShopDevGrantRerollChargesResponse {
    const message = createBaseCMsgClientToGCCandyShopDevGrantRerollChargesResponse();
    message.response = object.response ?? 0;
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
