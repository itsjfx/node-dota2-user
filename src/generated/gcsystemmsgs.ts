/* eslint-disable */

export enum ESOMsg {
  k_ESOMsg_Create = 21,
  k_ESOMsg_Update = 22,
  k_ESOMsg_Destroy = 23,
  k_ESOMsg_CacheSubscribed = 24,
  k_ESOMsg_CacheUnsubscribed = 25,
  k_ESOMsg_UpdateMultiple = 26,
  k_ESOMsg_CacheSubscriptionRefresh = 28,
  k_ESOMsg_CacheSubscribedUpToDate = 29,
}

export function eSOMsgFromJSON(object: any): ESOMsg {
  switch (object) {
    case 21:
    case "k_ESOMsg_Create":
      return ESOMsg.k_ESOMsg_Create;
    case 22:
    case "k_ESOMsg_Update":
      return ESOMsg.k_ESOMsg_Update;
    case 23:
    case "k_ESOMsg_Destroy":
      return ESOMsg.k_ESOMsg_Destroy;
    case 24:
    case "k_ESOMsg_CacheSubscribed":
      return ESOMsg.k_ESOMsg_CacheSubscribed;
    case 25:
    case "k_ESOMsg_CacheUnsubscribed":
      return ESOMsg.k_ESOMsg_CacheUnsubscribed;
    case 26:
    case "k_ESOMsg_UpdateMultiple":
      return ESOMsg.k_ESOMsg_UpdateMultiple;
    case 28:
    case "k_ESOMsg_CacheSubscriptionRefresh":
      return ESOMsg.k_ESOMsg_CacheSubscriptionRefresh;
    case 29:
    case "k_ESOMsg_CacheSubscribedUpToDate":
      return ESOMsg.k_ESOMsg_CacheSubscribedUpToDate;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESOMsg");
  }
}

export function eSOMsgToJSON(object: ESOMsg): string {
  switch (object) {
    case ESOMsg.k_ESOMsg_Create:
      return "k_ESOMsg_Create";
    case ESOMsg.k_ESOMsg_Update:
      return "k_ESOMsg_Update";
    case ESOMsg.k_ESOMsg_Destroy:
      return "k_ESOMsg_Destroy";
    case ESOMsg.k_ESOMsg_CacheSubscribed:
      return "k_ESOMsg_CacheSubscribed";
    case ESOMsg.k_ESOMsg_CacheUnsubscribed:
      return "k_ESOMsg_CacheUnsubscribed";
    case ESOMsg.k_ESOMsg_UpdateMultiple:
      return "k_ESOMsg_UpdateMultiple";
    case ESOMsg.k_ESOMsg_CacheSubscriptionRefresh:
      return "k_ESOMsg_CacheSubscriptionRefresh";
    case ESOMsg.k_ESOMsg_CacheSubscribedUpToDate:
      return "k_ESOMsg_CacheSubscribedUpToDate";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESOMsg");
  }
}

export enum EGCBaseClientMsg {
  k_EMsgGCPingRequest = 3001,
  k_EMsgGCPingResponse = 3002,
  k_EMsgGCToClientPollConvarRequest = 3003,
  k_EMsgGCToClientPollConvarResponse = 3004,
  k_EMsgGCCompressedMsgToClient = 3005,
  k_EMsgGCCompressedMsgToClient_Legacy = 523,
  k_EMsgGCToClientRequestDropped = 3006,
  k_EMsgGCClientWelcome = 4004,
  k_EMsgGCServerWelcome = 4005,
  k_EMsgGCClientHello = 4006,
  k_EMsgGCServerHello = 4007,
  k_EMsgGCClientConnectionStatus = 4009,
  k_EMsgGCServerConnectionStatus = 4010,
}

export function eGCBaseClientMsgFromJSON(object: any): EGCBaseClientMsg {
  switch (object) {
    case 3001:
    case "k_EMsgGCPingRequest":
      return EGCBaseClientMsg.k_EMsgGCPingRequest;
    case 3002:
    case "k_EMsgGCPingResponse":
      return EGCBaseClientMsg.k_EMsgGCPingResponse;
    case 3003:
    case "k_EMsgGCToClientPollConvarRequest":
      return EGCBaseClientMsg.k_EMsgGCToClientPollConvarRequest;
    case 3004:
    case "k_EMsgGCToClientPollConvarResponse":
      return EGCBaseClientMsg.k_EMsgGCToClientPollConvarResponse;
    case 3005:
    case "k_EMsgGCCompressedMsgToClient":
      return EGCBaseClientMsg.k_EMsgGCCompressedMsgToClient;
    case 523:
    case "k_EMsgGCCompressedMsgToClient_Legacy":
      return EGCBaseClientMsg.k_EMsgGCCompressedMsgToClient_Legacy;
    case 3006:
    case "k_EMsgGCToClientRequestDropped":
      return EGCBaseClientMsg.k_EMsgGCToClientRequestDropped;
    case 4004:
    case "k_EMsgGCClientWelcome":
      return EGCBaseClientMsg.k_EMsgGCClientWelcome;
    case 4005:
    case "k_EMsgGCServerWelcome":
      return EGCBaseClientMsg.k_EMsgGCServerWelcome;
    case 4006:
    case "k_EMsgGCClientHello":
      return EGCBaseClientMsg.k_EMsgGCClientHello;
    case 4007:
    case "k_EMsgGCServerHello":
      return EGCBaseClientMsg.k_EMsgGCServerHello;
    case 4009:
    case "k_EMsgGCClientConnectionStatus":
      return EGCBaseClientMsg.k_EMsgGCClientConnectionStatus;
    case 4010:
    case "k_EMsgGCServerConnectionStatus":
      return EGCBaseClientMsg.k_EMsgGCServerConnectionStatus;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EGCBaseClientMsg");
  }
}

export function eGCBaseClientMsgToJSON(object: EGCBaseClientMsg): string {
  switch (object) {
    case EGCBaseClientMsg.k_EMsgGCPingRequest:
      return "k_EMsgGCPingRequest";
    case EGCBaseClientMsg.k_EMsgGCPingResponse:
      return "k_EMsgGCPingResponse";
    case EGCBaseClientMsg.k_EMsgGCToClientPollConvarRequest:
      return "k_EMsgGCToClientPollConvarRequest";
    case EGCBaseClientMsg.k_EMsgGCToClientPollConvarResponse:
      return "k_EMsgGCToClientPollConvarResponse";
    case EGCBaseClientMsg.k_EMsgGCCompressedMsgToClient:
      return "k_EMsgGCCompressedMsgToClient";
    case EGCBaseClientMsg.k_EMsgGCCompressedMsgToClient_Legacy:
      return "k_EMsgGCCompressedMsgToClient_Legacy";
    case EGCBaseClientMsg.k_EMsgGCToClientRequestDropped:
      return "k_EMsgGCToClientRequestDropped";
    case EGCBaseClientMsg.k_EMsgGCClientWelcome:
      return "k_EMsgGCClientWelcome";
    case EGCBaseClientMsg.k_EMsgGCServerWelcome:
      return "k_EMsgGCServerWelcome";
    case EGCBaseClientMsg.k_EMsgGCClientHello:
      return "k_EMsgGCClientHello";
    case EGCBaseClientMsg.k_EMsgGCServerHello:
      return "k_EMsgGCServerHello";
    case EGCBaseClientMsg.k_EMsgGCClientConnectionStatus:
      return "k_EMsgGCClientConnectionStatus";
    case EGCBaseClientMsg.k_EMsgGCServerConnectionStatus:
      return "k_EMsgGCServerConnectionStatus";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EGCBaseClientMsg");
  }
}

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
