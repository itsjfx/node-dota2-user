/* eslint-disable */
import _m0 from "protobufjs/minimal";

export enum EGCEconBaseMsg {
  k_EMsgGCGenericResult = 2579,
}

export function eGCEconBaseMsgFromJSON(object: any): EGCEconBaseMsg {
  switch (object) {
    case 2579:
    case "k_EMsgGCGenericResult":
      return EGCEconBaseMsg.k_EMsgGCGenericResult;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EGCEconBaseMsg");
  }
}

export function eGCEconBaseMsgToJSON(object: EGCEconBaseMsg): string {
  switch (object) {
    case EGCEconBaseMsg.k_EMsgGCGenericResult:
      return "k_EMsgGCGenericResult";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EGCEconBaseMsg");
  }
}

export enum EGCMsgResponse {
  k_EGCMsgResponseOK = 0,
  k_EGCMsgResponseDenied = 1,
  k_EGCMsgResponseServerError = 2,
  k_EGCMsgResponseTimeout = 3,
  k_EGCMsgResponseInvalid = 4,
  k_EGCMsgResponseNoMatch = 5,
  k_EGCMsgResponseUnknownError = 6,
  k_EGCMsgResponseNotLoggedOn = 7,
  k_EGCMsgFailedToCreate = 8,
}

export function eGCMsgResponseFromJSON(object: any): EGCMsgResponse {
  switch (object) {
    case 0:
    case "k_EGCMsgResponseOK":
      return EGCMsgResponse.k_EGCMsgResponseOK;
    case 1:
    case "k_EGCMsgResponseDenied":
      return EGCMsgResponse.k_EGCMsgResponseDenied;
    case 2:
    case "k_EGCMsgResponseServerError":
      return EGCMsgResponse.k_EGCMsgResponseServerError;
    case 3:
    case "k_EGCMsgResponseTimeout":
      return EGCMsgResponse.k_EGCMsgResponseTimeout;
    case 4:
    case "k_EGCMsgResponseInvalid":
      return EGCMsgResponse.k_EGCMsgResponseInvalid;
    case 5:
    case "k_EGCMsgResponseNoMatch":
      return EGCMsgResponse.k_EGCMsgResponseNoMatch;
    case 6:
    case "k_EGCMsgResponseUnknownError":
      return EGCMsgResponse.k_EGCMsgResponseUnknownError;
    case 7:
    case "k_EGCMsgResponseNotLoggedOn":
      return EGCMsgResponse.k_EGCMsgResponseNotLoggedOn;
    case 8:
    case "k_EGCMsgFailedToCreate":
      return EGCMsgResponse.k_EGCMsgFailedToCreate;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EGCMsgResponse");
  }
}

export function eGCMsgResponseToJSON(object: EGCMsgResponse): string {
  switch (object) {
    case EGCMsgResponse.k_EGCMsgResponseOK:
      return "k_EGCMsgResponseOK";
    case EGCMsgResponse.k_EGCMsgResponseDenied:
      return "k_EGCMsgResponseDenied";
    case EGCMsgResponse.k_EGCMsgResponseServerError:
      return "k_EGCMsgResponseServerError";
    case EGCMsgResponse.k_EGCMsgResponseTimeout:
      return "k_EGCMsgResponseTimeout";
    case EGCMsgResponse.k_EGCMsgResponseInvalid:
      return "k_EGCMsgResponseInvalid";
    case EGCMsgResponse.k_EGCMsgResponseNoMatch:
      return "k_EGCMsgResponseNoMatch";
    case EGCMsgResponse.k_EGCMsgResponseUnknownError:
      return "k_EGCMsgResponseUnknownError";
    case EGCMsgResponse.k_EGCMsgResponseNotLoggedOn:
      return "k_EGCMsgResponseNotLoggedOn";
    case EGCMsgResponse.k_EGCMsgFailedToCreate:
      return "k_EGCMsgFailedToCreate";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EGCMsgResponse");
  }
}

export enum EGCMsgUseItemResponse {
  k_EGCMsgUseItemResponse_ItemUsed = 0,
  k_EGCMsgUseItemResponse_GiftNoOtherPlayers = 1,
  k_EGCMsgUseItemResponse_ServerError = 2,
  k_EGCMsgUseItemResponse_MiniGameAlreadyStarted = 3,
  k_EGCMsgUseItemResponse_ItemUsed_ItemsGranted = 4,
  k_EGCMsgUseItemResponse_DropRateBonusAlreadyGranted = 5,
  k_EGCMsgUseItemResponse_NotInLowPriorityPool = 6,
  k_EGCMsgUseItemResponse_NotHighEnoughLevel = 7,
  k_EGCMsgUseItemResponse_EventNotActive = 8,
  k_EGCMsgUseItemResponse_ItemUsed_EventPointsGranted = 9,
  k_EGCMsgUseItemResponse_MissingRequirement = 10,
  k_EGCMsgUseItemResponse_EmoticonUnlock_NoNew = 11,
  k_EGCMsgUseItemResponse_EmoticonUnlock_Complete = 12,
  k_EGCMsgUseItemResponse_ItemUsed_Compendium = 13,
}

export function eGCMsgUseItemResponseFromJSON(object: any): EGCMsgUseItemResponse {
  switch (object) {
    case 0:
    case "k_EGCMsgUseItemResponse_ItemUsed":
      return EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_ItemUsed;
    case 1:
    case "k_EGCMsgUseItemResponse_GiftNoOtherPlayers":
      return EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_GiftNoOtherPlayers;
    case 2:
    case "k_EGCMsgUseItemResponse_ServerError":
      return EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_ServerError;
    case 3:
    case "k_EGCMsgUseItemResponse_MiniGameAlreadyStarted":
      return EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_MiniGameAlreadyStarted;
    case 4:
    case "k_EGCMsgUseItemResponse_ItemUsed_ItemsGranted":
      return EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_ItemUsed_ItemsGranted;
    case 5:
    case "k_EGCMsgUseItemResponse_DropRateBonusAlreadyGranted":
      return EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_DropRateBonusAlreadyGranted;
    case 6:
    case "k_EGCMsgUseItemResponse_NotInLowPriorityPool":
      return EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_NotInLowPriorityPool;
    case 7:
    case "k_EGCMsgUseItemResponse_NotHighEnoughLevel":
      return EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_NotHighEnoughLevel;
    case 8:
    case "k_EGCMsgUseItemResponse_EventNotActive":
      return EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_EventNotActive;
    case 9:
    case "k_EGCMsgUseItemResponse_ItemUsed_EventPointsGranted":
      return EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_ItemUsed_EventPointsGranted;
    case 10:
    case "k_EGCMsgUseItemResponse_MissingRequirement":
      return EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_MissingRequirement;
    case 11:
    case "k_EGCMsgUseItemResponse_EmoticonUnlock_NoNew":
      return EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_EmoticonUnlock_NoNew;
    case 12:
    case "k_EGCMsgUseItemResponse_EmoticonUnlock_Complete":
      return EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_EmoticonUnlock_Complete;
    case 13:
    case "k_EGCMsgUseItemResponse_ItemUsed_Compendium":
      return EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_ItemUsed_Compendium;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EGCMsgUseItemResponse");
  }
}

export function eGCMsgUseItemResponseToJSON(object: EGCMsgUseItemResponse): string {
  switch (object) {
    case EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_ItemUsed:
      return "k_EGCMsgUseItemResponse_ItemUsed";
    case EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_GiftNoOtherPlayers:
      return "k_EGCMsgUseItemResponse_GiftNoOtherPlayers";
    case EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_ServerError:
      return "k_EGCMsgUseItemResponse_ServerError";
    case EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_MiniGameAlreadyStarted:
      return "k_EGCMsgUseItemResponse_MiniGameAlreadyStarted";
    case EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_ItemUsed_ItemsGranted:
      return "k_EGCMsgUseItemResponse_ItemUsed_ItemsGranted";
    case EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_DropRateBonusAlreadyGranted:
      return "k_EGCMsgUseItemResponse_DropRateBonusAlreadyGranted";
    case EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_NotInLowPriorityPool:
      return "k_EGCMsgUseItemResponse_NotInLowPriorityPool";
    case EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_NotHighEnoughLevel:
      return "k_EGCMsgUseItemResponse_NotHighEnoughLevel";
    case EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_EventNotActive:
      return "k_EGCMsgUseItemResponse_EventNotActive";
    case EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_ItemUsed_EventPointsGranted:
      return "k_EGCMsgUseItemResponse_ItemUsed_EventPointsGranted";
    case EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_MissingRequirement:
      return "k_EGCMsgUseItemResponse_MissingRequirement";
    case EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_EmoticonUnlock_NoNew:
      return "k_EGCMsgUseItemResponse_EmoticonUnlock_NoNew";
    case EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_EmoticonUnlock_Complete:
      return "k_EGCMsgUseItemResponse_EmoticonUnlock_Complete";
    case EGCMsgUseItemResponse.k_EGCMsgUseItemResponse_ItemUsed_Compendium:
      return "k_EGCMsgUseItemResponse_ItemUsed_Compendium";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EGCMsgUseItemResponse");
  }
}

export interface CMsgGenericResult {
  eresult: number;
  debugMessage: string;
}

function createBaseCMsgGenericResult(): CMsgGenericResult {
  return { eresult: 0, debugMessage: "" };
}

export const CMsgGenericResult = {
  encode(message: CMsgGenericResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).uint32(message.eresult);
    }
    if (message.debugMessage !== "") {
      writer.uint32(18).string(message.debugMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGenericResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGenericResult();
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
          if (tag != 18) {
            break;
          }

          message.debugMessage = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGenericResult {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      debugMessage: isSet(object.debugMessage) ? String(object.debugMessage) : "",
    };
  },

  toJSON(message: CMsgGenericResult): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.debugMessage !== undefined && (obj.debugMessage = message.debugMessage);
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
