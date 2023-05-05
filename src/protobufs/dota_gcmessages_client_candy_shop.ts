/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { EEvent } from "./dota_shared_enums";

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

export enum ECandyShopRewardType {
  k_eCandyShopRewardType_None = 0,
  k_eCandyShopRewardType_Item = 1,
  k_eCandyShopRewardType_EventAction = 2,
  k_eCandyShopRewardType_EventPoints = 3,
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
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
