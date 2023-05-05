/* eslint-disable */
import _m0 from "protobufjs/minimal";

export enum EGCEconBaseMsg {
  k_EMsgGCGenericResult = 2579,
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
};
