// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.0
//   protoc               v6.30.1
// source: steammessages_unified_base.steamworkssdk.proto

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
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum EProtoExecutionSite");
  }
}

export function eProtoExecutionSiteToJSON(object: EProtoExecutionSite): string {
  switch (object) {
    case EProtoExecutionSite.k_EProtoExecutionSiteUnknown:
      return "k_EProtoExecutionSiteUnknown";
    case EProtoExecutionSite.k_EProtoExecutionSiteSteamClient:
      return "k_EProtoExecutionSiteSteamClient";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum EProtoExecutionSite");
  }
}
