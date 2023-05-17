/* eslint-disable */

export enum EProtoExecutionSite {
  k_EProtoExecutionSiteUnknown = 0,
  k_EProtoExecutionSiteSteamClient = 3,
}

export function eProtoExecutionSiteFromJSON(object: any): EProtoExecutionSite {
  switch (object) {
    case 0:
    case "k_EProtoExecutionSiteUnknown":
      return EProtoExecutionSite.k_EProtoExecutionSiteUnknown;
    case 3:
    case "k_EProtoExecutionSiteSteamClient":
      return EProtoExecutionSite.k_EProtoExecutionSiteSteamClient;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EProtoExecutionSite");
  }
}

export function eProtoExecutionSiteToJSON(object: EProtoExecutionSite): string {
  switch (object) {
    case EProtoExecutionSite.k_EProtoExecutionSiteUnknown:
      return "k_EProtoExecutionSiteUnknown";
    case EProtoExecutionSite.k_EProtoExecutionSiteSteamClient:
      return "k_EProtoExecutionSiteSteamClient";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EProtoExecutionSite");
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
