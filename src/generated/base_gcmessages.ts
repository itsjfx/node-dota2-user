/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CExtraMsgBlock } from "./gcsdk_gcmessages";
import { EGCPlatform, eGCPlatformFromJSON, eGCPlatformToJSON } from "./steammessages";

export enum EGCBaseMsg {
  k_EMsgGCReplicateConVars = 4002,
  k_EMsgGCConVarUpdated = 4003,
  k_EMsgGCInviteToParty = 4501,
  k_EMsgGCInvitationCreated = 4502,
  k_EMsgGCPartyInviteResponse = 4503,
  k_EMsgGCKickFromParty = 4504,
  k_EMsgGCLeaveParty = 4505,
  k_EMsgGCServerAvailable = 4506,
  k_EMsgGCClientConnectToServer = 4507,
  k_EMsgGCGameServerInfo = 4508,
  k_EMsgGCLANServerAvailable = 4511,
  k_EMsgGCInviteToLobby = 4512,
  k_EMsgGCLobbyInviteResponse = 4513,
  k_EMsgGCToClientPollFileRequest = 4514,
  k_EMsgGCToClientPollFileResponse = 4515,
  k_EMsgGCToGCPerformManualOp = 4516,
  k_EMsgGCToGCPerformManualOpCompleted = 4517,
  k_EMsgGCToGCReloadServerRegionSettings = 4518,
  k_EMsgGCAdditionalWelcomeMsgList = 4519,
  k_EMsgGCToClientApplyRemoteConVars = 4520,
  k_EMsgGCToServerApplyRemoteConVars = 4521,
  k_EMsgClientToGCIntegrityStatus = 4522,
  k_EMsgClientToGCAggregateMetrics = 4523,
  k_EMsgGCToClientAggregateMetricsBackoff = 4524,
}

export function eGCBaseMsgFromJSON(object: any): EGCBaseMsg {
  switch (object) {
    case 4002:
    case "k_EMsgGCReplicateConVars":
      return EGCBaseMsg.k_EMsgGCReplicateConVars;
    case 4003:
    case "k_EMsgGCConVarUpdated":
      return EGCBaseMsg.k_EMsgGCConVarUpdated;
    case 4501:
    case "k_EMsgGCInviteToParty":
      return EGCBaseMsg.k_EMsgGCInviteToParty;
    case 4502:
    case "k_EMsgGCInvitationCreated":
      return EGCBaseMsg.k_EMsgGCInvitationCreated;
    case 4503:
    case "k_EMsgGCPartyInviteResponse":
      return EGCBaseMsg.k_EMsgGCPartyInviteResponse;
    case 4504:
    case "k_EMsgGCKickFromParty":
      return EGCBaseMsg.k_EMsgGCKickFromParty;
    case 4505:
    case "k_EMsgGCLeaveParty":
      return EGCBaseMsg.k_EMsgGCLeaveParty;
    case 4506:
    case "k_EMsgGCServerAvailable":
      return EGCBaseMsg.k_EMsgGCServerAvailable;
    case 4507:
    case "k_EMsgGCClientConnectToServer":
      return EGCBaseMsg.k_EMsgGCClientConnectToServer;
    case 4508:
    case "k_EMsgGCGameServerInfo":
      return EGCBaseMsg.k_EMsgGCGameServerInfo;
    case 4511:
    case "k_EMsgGCLANServerAvailable":
      return EGCBaseMsg.k_EMsgGCLANServerAvailable;
    case 4512:
    case "k_EMsgGCInviteToLobby":
      return EGCBaseMsg.k_EMsgGCInviteToLobby;
    case 4513:
    case "k_EMsgGCLobbyInviteResponse":
      return EGCBaseMsg.k_EMsgGCLobbyInviteResponse;
    case 4514:
    case "k_EMsgGCToClientPollFileRequest":
      return EGCBaseMsg.k_EMsgGCToClientPollFileRequest;
    case 4515:
    case "k_EMsgGCToClientPollFileResponse":
      return EGCBaseMsg.k_EMsgGCToClientPollFileResponse;
    case 4516:
    case "k_EMsgGCToGCPerformManualOp":
      return EGCBaseMsg.k_EMsgGCToGCPerformManualOp;
    case 4517:
    case "k_EMsgGCToGCPerformManualOpCompleted":
      return EGCBaseMsg.k_EMsgGCToGCPerformManualOpCompleted;
    case 4518:
    case "k_EMsgGCToGCReloadServerRegionSettings":
      return EGCBaseMsg.k_EMsgGCToGCReloadServerRegionSettings;
    case 4519:
    case "k_EMsgGCAdditionalWelcomeMsgList":
      return EGCBaseMsg.k_EMsgGCAdditionalWelcomeMsgList;
    case 4520:
    case "k_EMsgGCToClientApplyRemoteConVars":
      return EGCBaseMsg.k_EMsgGCToClientApplyRemoteConVars;
    case 4521:
    case "k_EMsgGCToServerApplyRemoteConVars":
      return EGCBaseMsg.k_EMsgGCToServerApplyRemoteConVars;
    case 4522:
    case "k_EMsgClientToGCIntegrityStatus":
      return EGCBaseMsg.k_EMsgClientToGCIntegrityStatus;
    case 4523:
    case "k_EMsgClientToGCAggregateMetrics":
      return EGCBaseMsg.k_EMsgClientToGCAggregateMetrics;
    case 4524:
    case "k_EMsgGCToClientAggregateMetricsBackoff":
      return EGCBaseMsg.k_EMsgGCToClientAggregateMetricsBackoff;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EGCBaseMsg");
  }
}

export function eGCBaseMsgToJSON(object: EGCBaseMsg): string {
  switch (object) {
    case EGCBaseMsg.k_EMsgGCReplicateConVars:
      return "k_EMsgGCReplicateConVars";
    case EGCBaseMsg.k_EMsgGCConVarUpdated:
      return "k_EMsgGCConVarUpdated";
    case EGCBaseMsg.k_EMsgGCInviteToParty:
      return "k_EMsgGCInviteToParty";
    case EGCBaseMsg.k_EMsgGCInvitationCreated:
      return "k_EMsgGCInvitationCreated";
    case EGCBaseMsg.k_EMsgGCPartyInviteResponse:
      return "k_EMsgGCPartyInviteResponse";
    case EGCBaseMsg.k_EMsgGCKickFromParty:
      return "k_EMsgGCKickFromParty";
    case EGCBaseMsg.k_EMsgGCLeaveParty:
      return "k_EMsgGCLeaveParty";
    case EGCBaseMsg.k_EMsgGCServerAvailable:
      return "k_EMsgGCServerAvailable";
    case EGCBaseMsg.k_EMsgGCClientConnectToServer:
      return "k_EMsgGCClientConnectToServer";
    case EGCBaseMsg.k_EMsgGCGameServerInfo:
      return "k_EMsgGCGameServerInfo";
    case EGCBaseMsg.k_EMsgGCLANServerAvailable:
      return "k_EMsgGCLANServerAvailable";
    case EGCBaseMsg.k_EMsgGCInviteToLobby:
      return "k_EMsgGCInviteToLobby";
    case EGCBaseMsg.k_EMsgGCLobbyInviteResponse:
      return "k_EMsgGCLobbyInviteResponse";
    case EGCBaseMsg.k_EMsgGCToClientPollFileRequest:
      return "k_EMsgGCToClientPollFileRequest";
    case EGCBaseMsg.k_EMsgGCToClientPollFileResponse:
      return "k_EMsgGCToClientPollFileResponse";
    case EGCBaseMsg.k_EMsgGCToGCPerformManualOp:
      return "k_EMsgGCToGCPerformManualOp";
    case EGCBaseMsg.k_EMsgGCToGCPerformManualOpCompleted:
      return "k_EMsgGCToGCPerformManualOpCompleted";
    case EGCBaseMsg.k_EMsgGCToGCReloadServerRegionSettings:
      return "k_EMsgGCToGCReloadServerRegionSettings";
    case EGCBaseMsg.k_EMsgGCAdditionalWelcomeMsgList:
      return "k_EMsgGCAdditionalWelcomeMsgList";
    case EGCBaseMsg.k_EMsgGCToClientApplyRemoteConVars:
      return "k_EMsgGCToClientApplyRemoteConVars";
    case EGCBaseMsg.k_EMsgGCToServerApplyRemoteConVars:
      return "k_EMsgGCToServerApplyRemoteConVars";
    case EGCBaseMsg.k_EMsgClientToGCIntegrityStatus:
      return "k_EMsgClientToGCIntegrityStatus";
    case EGCBaseMsg.k_EMsgClientToGCAggregateMetrics:
      return "k_EMsgClientToGCAggregateMetrics";
    case EGCBaseMsg.k_EMsgGCToClientAggregateMetricsBackoff:
      return "k_EMsgGCToClientAggregateMetricsBackoff";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EGCBaseMsg");
  }
}

export enum ECustomGameInstallStatus {
  k_ECustomGameInstallStatus_Unknown = 0,
  k_ECustomGameInstallStatus_Ready = 1,
  k_ECustomGameInstallStatus_Busy = 2,
  k_ECustomGameInstallStatus_FailedGeneric = 101,
  k_ECustomGameInstallStatus_FailedInternalError = 102,
  k_ECustomGameInstallStatus_RequestedTimestampTooOld = 103,
  k_ECustomGameInstallStatus_RequestedTimestampTooNew = 104,
  k_ECustomGameInstallStatus_CRCMismatch = 105,
  k_ECustomGameInstallStatus_FailedSteam = 106,
  k_ECustomGameInstallStatus_FailedCanceled = 107,
}

export function eCustomGameInstallStatusFromJSON(object: any): ECustomGameInstallStatus {
  switch (object) {
    case 0:
    case "k_ECustomGameInstallStatus_Unknown":
      return ECustomGameInstallStatus.k_ECustomGameInstallStatus_Unknown;
    case 1:
    case "k_ECustomGameInstallStatus_Ready":
      return ECustomGameInstallStatus.k_ECustomGameInstallStatus_Ready;
    case 2:
    case "k_ECustomGameInstallStatus_Busy":
      return ECustomGameInstallStatus.k_ECustomGameInstallStatus_Busy;
    case 101:
    case "k_ECustomGameInstallStatus_FailedGeneric":
      return ECustomGameInstallStatus.k_ECustomGameInstallStatus_FailedGeneric;
    case 102:
    case "k_ECustomGameInstallStatus_FailedInternalError":
      return ECustomGameInstallStatus.k_ECustomGameInstallStatus_FailedInternalError;
    case 103:
    case "k_ECustomGameInstallStatus_RequestedTimestampTooOld":
      return ECustomGameInstallStatus.k_ECustomGameInstallStatus_RequestedTimestampTooOld;
    case 104:
    case "k_ECustomGameInstallStatus_RequestedTimestampTooNew":
      return ECustomGameInstallStatus.k_ECustomGameInstallStatus_RequestedTimestampTooNew;
    case 105:
    case "k_ECustomGameInstallStatus_CRCMismatch":
      return ECustomGameInstallStatus.k_ECustomGameInstallStatus_CRCMismatch;
    case 106:
    case "k_ECustomGameInstallStatus_FailedSteam":
      return ECustomGameInstallStatus.k_ECustomGameInstallStatus_FailedSteam;
    case 107:
    case "k_ECustomGameInstallStatus_FailedCanceled":
      return ECustomGameInstallStatus.k_ECustomGameInstallStatus_FailedCanceled;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ECustomGameInstallStatus");
  }
}

export function eCustomGameInstallStatusToJSON(object: ECustomGameInstallStatus): string {
  switch (object) {
    case ECustomGameInstallStatus.k_ECustomGameInstallStatus_Unknown:
      return "k_ECustomGameInstallStatus_Unknown";
    case ECustomGameInstallStatus.k_ECustomGameInstallStatus_Ready:
      return "k_ECustomGameInstallStatus_Ready";
    case ECustomGameInstallStatus.k_ECustomGameInstallStatus_Busy:
      return "k_ECustomGameInstallStatus_Busy";
    case ECustomGameInstallStatus.k_ECustomGameInstallStatus_FailedGeneric:
      return "k_ECustomGameInstallStatus_FailedGeneric";
    case ECustomGameInstallStatus.k_ECustomGameInstallStatus_FailedInternalError:
      return "k_ECustomGameInstallStatus_FailedInternalError";
    case ECustomGameInstallStatus.k_ECustomGameInstallStatus_RequestedTimestampTooOld:
      return "k_ECustomGameInstallStatus_RequestedTimestampTooOld";
    case ECustomGameInstallStatus.k_ECustomGameInstallStatus_RequestedTimestampTooNew:
      return "k_ECustomGameInstallStatus_RequestedTimestampTooNew";
    case ECustomGameInstallStatus.k_ECustomGameInstallStatus_CRCMismatch:
      return "k_ECustomGameInstallStatus_CRCMismatch";
    case ECustomGameInstallStatus.k_ECustomGameInstallStatus_FailedSteam:
      return "k_ECustomGameInstallStatus_FailedSteam";
    case ECustomGameInstallStatus.k_ECustomGameInstallStatus_FailedCanceled:
      return "k_ECustomGameInstallStatus_FailedCanceled";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ECustomGameInstallStatus");
  }
}

export interface CGCStorePurchaseInitLineItem {
  itemDefId: number;
  quantity: number;
  costInLocalCurrency: number;
  purchaseType: number;
  sourceReferenceId: string;
}

export interface CMsgGCStorePurchaseInit {
  country: string;
  language: number;
  currency: number;
  lineItems: CGCStorePurchaseInitLineItem[];
}

export interface CMsgGCStorePurchaseInitResponse {
  result: number;
  txnId: string;
}

export interface CMsgClientPingData {
  relayCodes: number[];
  relayPings: number[];
  regionCodes: number[];
  regionPings: number[];
  regionPingFailedBitmask: number;
}

export interface CMsgInviteToParty {
  steamId: string;
  clientVersion: number;
  teamId: number;
  asCoach: boolean;
  pingData: CMsgClientPingData | undefined;
}

export interface CMsgInviteToLobby {
  steamId: string;
  clientVersion: number;
}

export interface CMsgInvitationCreated {
  groupId: string;
  steamId: string;
  userOffline: boolean;
}

export interface CMsgPartyInviteResponse {
  partyId: string;
  accept: boolean;
  clientVersion: number;
  pingData: CMsgClientPingData | undefined;
}

export interface CMsgLobbyInviteResponse {
  lobbyId: string;
  accept: boolean;
  clientVersion: number;
  customGameCrc: string;
  customGameTimestamp: number;
}

export interface CMsgKickFromParty {
  steamId: string;
}

export interface CMsgLeaveParty {
}

export interface CMsgCustomGameInstallStatus {
  status: ECustomGameInstallStatus;
  message: string;
  latestTimestampFromSteam: number;
}

export interface CMsgServerAvailable {
  customGameInstallStatus: CMsgCustomGameInstallStatus | undefined;
}

export interface CMsgLANServerAvailable {
  lobbyId: string;
}

export interface CSOEconGameAccountClient {
  additionalBackpackSlots: number;
  trialAccount: boolean;
  eligibleForOnlinePlay: boolean;
  needToChooseMostHelpfulFriend: boolean;
  inCoachesList: boolean;
  tradeBanExpiration: number;
  duelBanExpiration: number;
  madeFirstPurchase: boolean;
}

export interface CMsgApplyStrangePart {
  strangePartItemId: string;
  itemItemId: string;
}

export interface CMsgApplyPennantUpgrade {
  upgradeItemId: string;
  pennantItemId: string;
}

export interface CMsgApplyEggEssence {
  essenceItemId: string;
  eggItemId: string;
}

export interface CSOEconItemAttribute {
  defIndex: number;
  value: number;
  valueBytes: Buffer;
}

export interface CSOEconItemEquipped {
  newClass: number;
  newSlot: number;
}

export interface CSOEconItem {
  id: string;
  accountId: number;
  inventory: number;
  defIndex: number;
  quantity: number;
  level: number;
  quality: number;
  flags: number;
  origin: number;
  attribute: CSOEconItemAttribute[];
  interiorItem: CSOEconItem | undefined;
  style: number;
  originalId: string;
  equippedState: CSOEconItemEquipped[];
}

export interface CMsgSortItems {
  sortType: number;
}

export interface CMsgConVarValue {
  name: string;
  value: string;
}

export interface CMsgReplicateConVars {
  convars: CMsgConVarValue[];
}

export interface CMsgItemAcknowledged {
  accountId: number;
  inventory: number;
  defIndex: number;
  quality: number;
  rarity: number;
  origin: number;
}

export interface CMsgSetItemPositions {
  itemPositions: CMsgSetItemPositions_ItemPosition[];
}

export interface CMsgSetItemPositions_ItemPosition {
  itemId: string;
  position: number;
}

export interface CMsgGCStorePurchaseCancel {
  txnId: string;
}

export interface CMsgGCStorePurchaseCancelResponse {
  result: number;
}

export interface CMsgGCStorePurchaseFinalize {
  txnId: string;
}

export interface CMsgGCStorePurchaseFinalizeResponse {
  result: number;
  itemIds: string[];
}

export interface CMsgGCToGCBannedWordListUpdated {
  groupId: number;
}

export interface CMsgGCToGCDirtySDOCache {
  sdoType: number;
  keyUint64: string;
}

export interface CMsgSDONoMemcached {
}

export interface CMsgGCToGCUpdateSQLKeyValue {
  keyName: string;
}

export interface CMsgGCServerVersionUpdated {
  serverVersion: number;
}

export interface CMsgGCClientVersionUpdated {
  clientVersion: number;
}

export interface CMsgGCToGCWebAPIAccountChanged {
}

export interface CMsgExtractGems {
  toolItemId: string;
  itemItemId: string;
  itemSocketId: number;
}

export interface CMsgExtractGemsResponse {
  itemId: string;
  response: CMsgExtractGemsResponse_EExtractGems;
}

export enum CMsgExtractGemsResponse_EExtractGems {
  k_ExtractGems_Succeeded = 0,
  k_ExtractGems_Failed_ToolIsInvalid = 1,
  k_ExtractGems_Failed_ItemIsInvalid = 2,
  k_ExtractGems_Failed_ToolCannotRemoveGem = 3,
  k_ExtractGems_Failed_FailedToRemoveGem = 4,
}

export function cMsgExtractGemsResponse_EExtractGemsFromJSON(object: any): CMsgExtractGemsResponse_EExtractGems {
  switch (object) {
    case 0:
    case "k_ExtractGems_Succeeded":
      return CMsgExtractGemsResponse_EExtractGems.k_ExtractGems_Succeeded;
    case 1:
    case "k_ExtractGems_Failed_ToolIsInvalid":
      return CMsgExtractGemsResponse_EExtractGems.k_ExtractGems_Failed_ToolIsInvalid;
    case 2:
    case "k_ExtractGems_Failed_ItemIsInvalid":
      return CMsgExtractGemsResponse_EExtractGems.k_ExtractGems_Failed_ItemIsInvalid;
    case 3:
    case "k_ExtractGems_Failed_ToolCannotRemoveGem":
      return CMsgExtractGemsResponse_EExtractGems.k_ExtractGems_Failed_ToolCannotRemoveGem;
    case 4:
    case "k_ExtractGems_Failed_FailedToRemoveGem":
      return CMsgExtractGemsResponse_EExtractGems.k_ExtractGems_Failed_FailedToRemoveGem;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgExtractGemsResponse_EExtractGems",
      );
  }
}

export function cMsgExtractGemsResponse_EExtractGemsToJSON(object: CMsgExtractGemsResponse_EExtractGems): string {
  switch (object) {
    case CMsgExtractGemsResponse_EExtractGems.k_ExtractGems_Succeeded:
      return "k_ExtractGems_Succeeded";
    case CMsgExtractGemsResponse_EExtractGems.k_ExtractGems_Failed_ToolIsInvalid:
      return "k_ExtractGems_Failed_ToolIsInvalid";
    case CMsgExtractGemsResponse_EExtractGems.k_ExtractGems_Failed_ItemIsInvalid:
      return "k_ExtractGems_Failed_ItemIsInvalid";
    case CMsgExtractGemsResponse_EExtractGems.k_ExtractGems_Failed_ToolCannotRemoveGem:
      return "k_ExtractGems_Failed_ToolCannotRemoveGem";
    case CMsgExtractGemsResponse_EExtractGems.k_ExtractGems_Failed_FailedToRemoveGem:
      return "k_ExtractGems_Failed_FailedToRemoveGem";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgExtractGemsResponse_EExtractGems",
      );
  }
}

export interface CMsgAddSocket {
  toolItemId: string;
  itemItemId: string;
  unusual: boolean;
}

export interface CMsgAddSocketResponse {
  itemId: string;
  updatedSocketIndex: number[];
  response: CMsgAddSocketResponse_EAddSocket;
}

export enum CMsgAddSocketResponse_EAddSocket {
  k_AddSocket_Succeeded = 0,
  k_AddSocket_Failed_ToolIsInvalid = 1,
  k_AddSocket_Failed_ItemCannotBeSocketed = 2,
  k_AddSocket_Failed_FailedToAddSocket = 3,
}

export function cMsgAddSocketResponse_EAddSocketFromJSON(object: any): CMsgAddSocketResponse_EAddSocket {
  switch (object) {
    case 0:
    case "k_AddSocket_Succeeded":
      return CMsgAddSocketResponse_EAddSocket.k_AddSocket_Succeeded;
    case 1:
    case "k_AddSocket_Failed_ToolIsInvalid":
      return CMsgAddSocketResponse_EAddSocket.k_AddSocket_Failed_ToolIsInvalid;
    case 2:
    case "k_AddSocket_Failed_ItemCannotBeSocketed":
      return CMsgAddSocketResponse_EAddSocket.k_AddSocket_Failed_ItemCannotBeSocketed;
    case 3:
    case "k_AddSocket_Failed_FailedToAddSocket":
      return CMsgAddSocketResponse_EAddSocket.k_AddSocket_Failed_FailedToAddSocket;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgAddSocketResponse_EAddSocket",
      );
  }
}

export function cMsgAddSocketResponse_EAddSocketToJSON(object: CMsgAddSocketResponse_EAddSocket): string {
  switch (object) {
    case CMsgAddSocketResponse_EAddSocket.k_AddSocket_Succeeded:
      return "k_AddSocket_Succeeded";
    case CMsgAddSocketResponse_EAddSocket.k_AddSocket_Failed_ToolIsInvalid:
      return "k_AddSocket_Failed_ToolIsInvalid";
    case CMsgAddSocketResponse_EAddSocket.k_AddSocket_Failed_ItemCannotBeSocketed:
      return "k_AddSocket_Failed_ItemCannotBeSocketed";
    case CMsgAddSocketResponse_EAddSocket.k_AddSocket_Failed_FailedToAddSocket:
      return "k_AddSocket_Failed_FailedToAddSocket";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgAddSocketResponse_EAddSocket",
      );
  }
}

export interface CMsgAddItemToSocketData {
  gemItemId: string;
  socketIndex: number;
}

export interface CMsgAddItemToSocket {
  itemItemId: string;
  gemsToSocket: CMsgAddItemToSocketData[];
}

export interface CMsgAddItemToSocketResponse {
  itemItemId: string;
  updatedSocketIndex: number[];
  response: CMsgAddItemToSocketResponse_EAddGem;
}

export enum CMsgAddItemToSocketResponse_EAddGem {
  k_AddGem_Succeeded = 0,
  k_AddGem_Failed_GemIsInvalid = 1,
  k_AddGem_Failed_ItemIsInvalid = 2,
  k_AddGem_Failed_FailedToAddGem = 3,
  k_AddGem_Failed_InvalidGemTypeForSocket = 4,
  k_AddGem_Failed_InvalidGemTypeForHero = 5,
  k_AddGem_Failed_InvalidGemTypeForSlot = 6,
  k_AddGem_Failed_SocketContainsUnremovableGem = 7,
}

export function cMsgAddItemToSocketResponse_EAddGemFromJSON(object: any): CMsgAddItemToSocketResponse_EAddGem {
  switch (object) {
    case 0:
    case "k_AddGem_Succeeded":
      return CMsgAddItemToSocketResponse_EAddGem.k_AddGem_Succeeded;
    case 1:
    case "k_AddGem_Failed_GemIsInvalid":
      return CMsgAddItemToSocketResponse_EAddGem.k_AddGem_Failed_GemIsInvalid;
    case 2:
    case "k_AddGem_Failed_ItemIsInvalid":
      return CMsgAddItemToSocketResponse_EAddGem.k_AddGem_Failed_ItemIsInvalid;
    case 3:
    case "k_AddGem_Failed_FailedToAddGem":
      return CMsgAddItemToSocketResponse_EAddGem.k_AddGem_Failed_FailedToAddGem;
    case 4:
    case "k_AddGem_Failed_InvalidGemTypeForSocket":
      return CMsgAddItemToSocketResponse_EAddGem.k_AddGem_Failed_InvalidGemTypeForSocket;
    case 5:
    case "k_AddGem_Failed_InvalidGemTypeForHero":
      return CMsgAddItemToSocketResponse_EAddGem.k_AddGem_Failed_InvalidGemTypeForHero;
    case 6:
    case "k_AddGem_Failed_InvalidGemTypeForSlot":
      return CMsgAddItemToSocketResponse_EAddGem.k_AddGem_Failed_InvalidGemTypeForSlot;
    case 7:
    case "k_AddGem_Failed_SocketContainsUnremovableGem":
      return CMsgAddItemToSocketResponse_EAddGem.k_AddGem_Failed_SocketContainsUnremovableGem;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgAddItemToSocketResponse_EAddGem",
      );
  }
}

export function cMsgAddItemToSocketResponse_EAddGemToJSON(object: CMsgAddItemToSocketResponse_EAddGem): string {
  switch (object) {
    case CMsgAddItemToSocketResponse_EAddGem.k_AddGem_Succeeded:
      return "k_AddGem_Succeeded";
    case CMsgAddItemToSocketResponse_EAddGem.k_AddGem_Failed_GemIsInvalid:
      return "k_AddGem_Failed_GemIsInvalid";
    case CMsgAddItemToSocketResponse_EAddGem.k_AddGem_Failed_ItemIsInvalid:
      return "k_AddGem_Failed_ItemIsInvalid";
    case CMsgAddItemToSocketResponse_EAddGem.k_AddGem_Failed_FailedToAddGem:
      return "k_AddGem_Failed_FailedToAddGem";
    case CMsgAddItemToSocketResponse_EAddGem.k_AddGem_Failed_InvalidGemTypeForSocket:
      return "k_AddGem_Failed_InvalidGemTypeForSocket";
    case CMsgAddItemToSocketResponse_EAddGem.k_AddGem_Failed_InvalidGemTypeForHero:
      return "k_AddGem_Failed_InvalidGemTypeForHero";
    case CMsgAddItemToSocketResponse_EAddGem.k_AddGem_Failed_InvalidGemTypeForSlot:
      return "k_AddGem_Failed_InvalidGemTypeForSlot";
    case CMsgAddItemToSocketResponse_EAddGem.k_AddGem_Failed_SocketContainsUnremovableGem:
      return "k_AddGem_Failed_SocketContainsUnremovableGem";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgAddItemToSocketResponse_EAddGem",
      );
  }
}

export interface CMsgResetStrangeGemCount {
  itemItemId: string;
  socketIndex: number;
}

export interface CMsgResetStrangeGemCountResponse {
  response: CMsgResetStrangeGemCountResponse_EResetGem;
}

export enum CMsgResetStrangeGemCountResponse_EResetGem {
  k_ResetGem_Succeeded = 0,
  k_ResetGem_Failed_FailedToResetGem = 1,
  k_ResetGem_Failed_ItemIsInvalid = 2,
  k_ResetGem_Failed_InvalidSocketId = 3,
  k_ResetGem_Failed_SocketCannotBeReset = 4,
}

export function cMsgResetStrangeGemCountResponse_EResetGemFromJSON(
  object: any,
): CMsgResetStrangeGemCountResponse_EResetGem {
  switch (object) {
    case 0:
    case "k_ResetGem_Succeeded":
      return CMsgResetStrangeGemCountResponse_EResetGem.k_ResetGem_Succeeded;
    case 1:
    case "k_ResetGem_Failed_FailedToResetGem":
      return CMsgResetStrangeGemCountResponse_EResetGem.k_ResetGem_Failed_FailedToResetGem;
    case 2:
    case "k_ResetGem_Failed_ItemIsInvalid":
      return CMsgResetStrangeGemCountResponse_EResetGem.k_ResetGem_Failed_ItemIsInvalid;
    case 3:
    case "k_ResetGem_Failed_InvalidSocketId":
      return CMsgResetStrangeGemCountResponse_EResetGem.k_ResetGem_Failed_InvalidSocketId;
    case 4:
    case "k_ResetGem_Failed_SocketCannotBeReset":
      return CMsgResetStrangeGemCountResponse_EResetGem.k_ResetGem_Failed_SocketCannotBeReset;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgResetStrangeGemCountResponse_EResetGem",
      );
  }
}

export function cMsgResetStrangeGemCountResponse_EResetGemToJSON(
  object: CMsgResetStrangeGemCountResponse_EResetGem,
): string {
  switch (object) {
    case CMsgResetStrangeGemCountResponse_EResetGem.k_ResetGem_Succeeded:
      return "k_ResetGem_Succeeded";
    case CMsgResetStrangeGemCountResponse_EResetGem.k_ResetGem_Failed_FailedToResetGem:
      return "k_ResetGem_Failed_FailedToResetGem";
    case CMsgResetStrangeGemCountResponse_EResetGem.k_ResetGem_Failed_ItemIsInvalid:
      return "k_ResetGem_Failed_ItemIsInvalid";
    case CMsgResetStrangeGemCountResponse_EResetGem.k_ResetGem_Failed_InvalidSocketId:
      return "k_ResetGem_Failed_InvalidSocketId";
    case CMsgResetStrangeGemCountResponse_EResetGem.k_ResetGem_Failed_SocketCannotBeReset:
      return "k_ResetGem_Failed_SocketCannotBeReset";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgResetStrangeGemCountResponse_EResetGem",
      );
  }
}

export interface CMsgGCToClientPollFileRequest {
  fileName: string;
  clientVersion: number;
  pollId: number;
}

export interface CMsgGCToClientPollFileResponse {
  pollId: number;
  fileSize: number;
  fileCrc: number;
}

export interface CMsgGCToGCPerformManualOp {
  opId: string;
  groupCode: number;
}

export interface CMsgGCToGCPerformManualOpCompleted {
  success: boolean;
  sourceGc: number;
}

export interface CMsgGCToGCReloadServerRegionSettings {
}

export interface CMsgGCAdditionalWelcomeMsgList {
  welcomeMessages: CExtraMsgBlock[];
}

export interface CMsgApplyRemoteConVars {
  conVars: CMsgApplyRemoteConVars_ConVar[];
}

export interface CMsgApplyRemoteConVars_ConVar {
  name: string;
  value: string;
  versionMin: number;
  versionMax: number;
  platform: EGCPlatform;
}

export interface CMsgGCToClientApplyRemoteConVars {
  msg: CMsgApplyRemoteConVars | undefined;
}

export interface CMsgGCToServerApplyRemoteConVars {
  msg: CMsgApplyRemoteConVars | undefined;
}

export interface CMsgClientToGCIntegrityStatus {
  report: string;
  secureAllowed: boolean;
  diagnostics: CMsgClientToGCIntegrityStatus_keyvalue[];
}

export interface CMsgClientToGCIntegrityStatus_keyvalue {
  id: number;
  extended: number;
  value: string;
  stringValue: string;
}

export interface CMsgClientToGCAggregateMetrics {
  metrics: CMsgClientToGCAggregateMetrics_SingleMetric[];
}

export interface CMsgClientToGCAggregateMetrics_SingleMetric {
  metricName: string;
  metricCount: number;
}

export interface CMsgGCToClientAggregateMetricsBackoff {
  uploadRateModifier: number;
}

function createBaseCGCStorePurchaseInitLineItem(): CGCStorePurchaseInitLineItem {
  return { itemDefId: 0, quantity: 0, costInLocalCurrency: 0, purchaseType: 0, sourceReferenceId: "0" };
}

export const CGCStorePurchaseInitLineItem = {
  encode(message: CGCStorePurchaseInitLineItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemDefId !== 0) {
      writer.uint32(8).uint32(message.itemDefId);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).uint32(message.quantity);
    }
    if (message.costInLocalCurrency !== 0) {
      writer.uint32(24).uint32(message.costInLocalCurrency);
    }
    if (message.purchaseType !== 0) {
      writer.uint32(32).uint32(message.purchaseType);
    }
    if (message.sourceReferenceId !== "0") {
      writer.uint32(40).uint64(message.sourceReferenceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCStorePurchaseInitLineItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCStorePurchaseInitLineItem();
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
        case 3:
          if (tag != 24) {
            break;
          }

          message.costInLocalCurrency = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.purchaseType = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.sourceReferenceId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CGCStorePurchaseInitLineItem {
    return {
      itemDefId: isSet(object.itemDefId) ? Number(object.itemDefId) : 0,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      costInLocalCurrency: isSet(object.costInLocalCurrency) ? Number(object.costInLocalCurrency) : 0,
      purchaseType: isSet(object.purchaseType) ? Number(object.purchaseType) : 0,
      sourceReferenceId: isSet(object.sourceReferenceId) ? String(object.sourceReferenceId) : "0",
    };
  },

  toJSON(message: CGCStorePurchaseInitLineItem): unknown {
    const obj: any = {};
    message.itemDefId !== undefined && (obj.itemDefId = Math.round(message.itemDefId));
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.costInLocalCurrency !== undefined && (obj.costInLocalCurrency = Math.round(message.costInLocalCurrency));
    message.purchaseType !== undefined && (obj.purchaseType = Math.round(message.purchaseType));
    message.sourceReferenceId !== undefined && (obj.sourceReferenceId = message.sourceReferenceId);
    return obj;
  },
};

function createBaseCMsgGCStorePurchaseInit(): CMsgGCStorePurchaseInit {
  return { country: "", language: 0, currency: 0, lineItems: [] };
}

export const CMsgGCStorePurchaseInit = {
  encode(message: CMsgGCStorePurchaseInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.country !== "") {
      writer.uint32(10).string(message.country);
    }
    if (message.language !== 0) {
      writer.uint32(16).int32(message.language);
    }
    if (message.currency !== 0) {
      writer.uint32(24).int32(message.currency);
    }
    for (const v of message.lineItems) {
      CGCStorePurchaseInitLineItem.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCStorePurchaseInit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCStorePurchaseInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.country = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.language = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.currency = reader.int32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.lineItems.push(CGCStorePurchaseInitLineItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCStorePurchaseInit {
    return {
      country: isSet(object.country) ? String(object.country) : "",
      language: isSet(object.language) ? Number(object.language) : 0,
      currency: isSet(object.currency) ? Number(object.currency) : 0,
      lineItems: Array.isArray(object?.lineItems)
        ? object.lineItems.map((e: any) => CGCStorePurchaseInitLineItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGCStorePurchaseInit): unknown {
    const obj: any = {};
    message.country !== undefined && (obj.country = message.country);
    message.language !== undefined && (obj.language = Math.round(message.language));
    message.currency !== undefined && (obj.currency = Math.round(message.currency));
    if (message.lineItems) {
      obj.lineItems = message.lineItems.map((e) => e ? CGCStorePurchaseInitLineItem.toJSON(e) : undefined);
    } else {
      obj.lineItems = [];
    }
    return obj;
  },
};

function createBaseCMsgGCStorePurchaseInitResponse(): CMsgGCStorePurchaseInitResponse {
  return { result: 0, txnId: "0" };
}

export const CMsgGCStorePurchaseInitResponse = {
  encode(message: CMsgGCStorePurchaseInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.txnId !== "0") {
      writer.uint32(16).uint64(message.txnId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCStorePurchaseInitResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCStorePurchaseInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.txnId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCStorePurchaseInitResponse {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      txnId: isSet(object.txnId) ? String(object.txnId) : "0",
    };
  },

  toJSON(message: CMsgGCStorePurchaseInitResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.txnId !== undefined && (obj.txnId = message.txnId);
    return obj;
  },
};

function createBaseCMsgClientPingData(): CMsgClientPingData {
  return { relayCodes: [], relayPings: [], regionCodes: [], regionPings: [], regionPingFailedBitmask: 0 };
}

export const CMsgClientPingData = {
  encode(message: CMsgClientPingData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(34).fork();
    for (const v of message.relayCodes) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.relayPings) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(66).fork();
    for (const v of message.regionCodes) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(74).fork();
    for (const v of message.regionPings) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.regionPingFailedBitmask !== 0) {
      writer.uint32(80).uint32(message.regionPingFailedBitmask);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientPingData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientPingData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag == 37) {
            message.relayCodes.push(reader.fixed32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.relayCodes.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 5:
          if (tag == 40) {
            message.relayPings.push(reader.uint32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.relayPings.push(reader.uint32());
            }

            continue;
          }

          break;
        case 8:
          if (tag == 64) {
            message.regionCodes.push(reader.uint32());
            continue;
          }

          if (tag == 66) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.regionCodes.push(reader.uint32());
            }

            continue;
          }

          break;
        case 9:
          if (tag == 72) {
            message.regionPings.push(reader.uint32());
            continue;
          }

          if (tag == 74) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.regionPings.push(reader.uint32());
            }

            continue;
          }

          break;
        case 10:
          if (tag != 80) {
            break;
          }

          message.regionPingFailedBitmask = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientPingData {
    return {
      relayCodes: Array.isArray(object?.relayCodes) ? object.relayCodes.map((e: any) => Number(e)) : [],
      relayPings: Array.isArray(object?.relayPings) ? object.relayPings.map((e: any) => Number(e)) : [],
      regionCodes: Array.isArray(object?.regionCodes) ? object.regionCodes.map((e: any) => Number(e)) : [],
      regionPings: Array.isArray(object?.regionPings) ? object.regionPings.map((e: any) => Number(e)) : [],
      regionPingFailedBitmask: isSet(object.regionPingFailedBitmask) ? Number(object.regionPingFailedBitmask) : 0,
    };
  },

  toJSON(message: CMsgClientPingData): unknown {
    const obj: any = {};
    if (message.relayCodes) {
      obj.relayCodes = message.relayCodes.map((e) => Math.round(e));
    } else {
      obj.relayCodes = [];
    }
    if (message.relayPings) {
      obj.relayPings = message.relayPings.map((e) => Math.round(e));
    } else {
      obj.relayPings = [];
    }
    if (message.regionCodes) {
      obj.regionCodes = message.regionCodes.map((e) => Math.round(e));
    } else {
      obj.regionCodes = [];
    }
    if (message.regionPings) {
      obj.regionPings = message.regionPings.map((e) => Math.round(e));
    } else {
      obj.regionPings = [];
    }
    message.regionPingFailedBitmask !== undefined &&
      (obj.regionPingFailedBitmask = Math.round(message.regionPingFailedBitmask));
    return obj;
  },
};

function createBaseCMsgInviteToParty(): CMsgInviteToParty {
  return { steamId: "0", clientVersion: 0, teamId: 0, asCoach: false, pingData: undefined };
}

export const CMsgInviteToParty = {
  encode(message: CMsgInviteToParty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.clientVersion !== 0) {
      writer.uint32(16).uint32(message.clientVersion);
    }
    if (message.teamId !== 0) {
      writer.uint32(24).uint32(message.teamId);
    }
    if (message.asCoach === true) {
      writer.uint32(32).bool(message.asCoach);
    }
    if (message.pingData !== undefined) {
      CMsgClientPingData.encode(message.pingData, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgInviteToParty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgInviteToParty();
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

          message.clientVersion = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.asCoach = reader.bool();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.pingData = CMsgClientPingData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgInviteToParty {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      clientVersion: isSet(object.clientVersion) ? Number(object.clientVersion) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      asCoach: isSet(object.asCoach) ? Boolean(object.asCoach) : false,
      pingData: isSet(object.pingData) ? CMsgClientPingData.fromJSON(object.pingData) : undefined,
    };
  },

  toJSON(message: CMsgInviteToParty): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.clientVersion !== undefined && (obj.clientVersion = Math.round(message.clientVersion));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.asCoach !== undefined && (obj.asCoach = message.asCoach);
    message.pingData !== undefined &&
      (obj.pingData = message.pingData ? CMsgClientPingData.toJSON(message.pingData) : undefined);
    return obj;
  },
};

function createBaseCMsgInviteToLobby(): CMsgInviteToLobby {
  return { steamId: "0", clientVersion: 0 };
}

export const CMsgInviteToLobby = {
  encode(message: CMsgInviteToLobby, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.clientVersion !== 0) {
      writer.uint32(16).uint32(message.clientVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgInviteToLobby {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgInviteToLobby();
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

          message.clientVersion = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgInviteToLobby {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      clientVersion: isSet(object.clientVersion) ? Number(object.clientVersion) : 0,
    };
  },

  toJSON(message: CMsgInviteToLobby): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.clientVersion !== undefined && (obj.clientVersion = Math.round(message.clientVersion));
    return obj;
  },
};

function createBaseCMsgInvitationCreated(): CMsgInvitationCreated {
  return { groupId: "0", steamId: "0", userOffline: false };
}

export const CMsgInvitationCreated = {
  encode(message: CMsgInvitationCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "0") {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.steamId !== "0") {
      writer.uint32(17).fixed64(message.steamId);
    }
    if (message.userOffline === true) {
      writer.uint32(24).bool(message.userOffline);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgInvitationCreated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgInvitationCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.groupId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.steamId = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.userOffline = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgInvitationCreated {
    return {
      groupId: isSet(object.groupId) ? String(object.groupId) : "0",
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      userOffline: isSet(object.userOffline) ? Boolean(object.userOffline) : false,
    };
  },

  toJSON(message: CMsgInvitationCreated): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.userOffline !== undefined && (obj.userOffline = message.userOffline);
    return obj;
  },
};

function createBaseCMsgPartyInviteResponse(): CMsgPartyInviteResponse {
  return { partyId: "0", accept: false, clientVersion: 0, pingData: undefined };
}

export const CMsgPartyInviteResponse = {
  encode(message: CMsgPartyInviteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.partyId !== "0") {
      writer.uint32(8).uint64(message.partyId);
    }
    if (message.accept === true) {
      writer.uint32(16).bool(message.accept);
    }
    if (message.clientVersion !== 0) {
      writer.uint32(24).uint32(message.clientVersion);
    }
    if (message.pingData !== undefined) {
      CMsgClientPingData.encode(message.pingData, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPartyInviteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPartyInviteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.partyId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.accept = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.clientVersion = reader.uint32();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.pingData = CMsgClientPingData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgPartyInviteResponse {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "0",
      accept: isSet(object.accept) ? Boolean(object.accept) : false,
      clientVersion: isSet(object.clientVersion) ? Number(object.clientVersion) : 0,
      pingData: isSet(object.pingData) ? CMsgClientPingData.fromJSON(object.pingData) : undefined,
    };
  },

  toJSON(message: CMsgPartyInviteResponse): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.accept !== undefined && (obj.accept = message.accept);
    message.clientVersion !== undefined && (obj.clientVersion = Math.round(message.clientVersion));
    message.pingData !== undefined &&
      (obj.pingData = message.pingData ? CMsgClientPingData.toJSON(message.pingData) : undefined);
    return obj;
  },
};

function createBaseCMsgLobbyInviteResponse(): CMsgLobbyInviteResponse {
  return { lobbyId: "0", accept: false, clientVersion: 0, customGameCrc: "0", customGameTimestamp: 0 };
}

export const CMsgLobbyInviteResponse = {
  encode(message: CMsgLobbyInviteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lobbyId !== "0") {
      writer.uint32(9).fixed64(message.lobbyId);
    }
    if (message.accept === true) {
      writer.uint32(16).bool(message.accept);
    }
    if (message.clientVersion !== 0) {
      writer.uint32(24).uint32(message.clientVersion);
    }
    if (message.customGameCrc !== "0") {
      writer.uint32(49).fixed64(message.customGameCrc);
    }
    if (message.customGameTimestamp !== 0) {
      writer.uint32(61).fixed32(message.customGameTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLobbyInviteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLobbyInviteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.lobbyId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.accept = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.clientVersion = reader.uint32();
          continue;
        case 6:
          if (tag != 49) {
            break;
          }

          message.customGameCrc = longToString(reader.fixed64() as Long);
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.customGameTimestamp = reader.fixed32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgLobbyInviteResponse {
    return {
      lobbyId: isSet(object.lobbyId) ? String(object.lobbyId) : "0",
      accept: isSet(object.accept) ? Boolean(object.accept) : false,
      clientVersion: isSet(object.clientVersion) ? Number(object.clientVersion) : 0,
      customGameCrc: isSet(object.customGameCrc) ? String(object.customGameCrc) : "0",
      customGameTimestamp: isSet(object.customGameTimestamp) ? Number(object.customGameTimestamp) : 0,
    };
  },

  toJSON(message: CMsgLobbyInviteResponse): unknown {
    const obj: any = {};
    message.lobbyId !== undefined && (obj.lobbyId = message.lobbyId);
    message.accept !== undefined && (obj.accept = message.accept);
    message.clientVersion !== undefined && (obj.clientVersion = Math.round(message.clientVersion));
    message.customGameCrc !== undefined && (obj.customGameCrc = message.customGameCrc);
    message.customGameTimestamp !== undefined && (obj.customGameTimestamp = Math.round(message.customGameTimestamp));
    return obj;
  },
};

function createBaseCMsgKickFromParty(): CMsgKickFromParty {
  return { steamId: "0" };
}

export const CMsgKickFromParty = {
  encode(message: CMsgKickFromParty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgKickFromParty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgKickFromParty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.steamId = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgKickFromParty {
    return { steamId: isSet(object.steamId) ? String(object.steamId) : "0" };
  },

  toJSON(message: CMsgKickFromParty): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    return obj;
  },
};

function createBaseCMsgLeaveParty(): CMsgLeaveParty {
  return {};
}

export const CMsgLeaveParty = {
  encode(_: CMsgLeaveParty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLeaveParty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLeaveParty();
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

  fromJSON(_: any): CMsgLeaveParty {
    return {};
  },

  toJSON(_: CMsgLeaveParty): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgCustomGameInstallStatus(): CMsgCustomGameInstallStatus {
  return { status: 0, message: "", latestTimestampFromSteam: 0 };
}

export const CMsgCustomGameInstallStatus = {
  encode(message: CMsgCustomGameInstallStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.latestTimestampFromSteam !== 0) {
      writer.uint32(29).fixed32(message.latestTimestampFromSteam);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCustomGameInstallStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCustomGameInstallStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.latestTimestampFromSteam = reader.fixed32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgCustomGameInstallStatus {
    return {
      status: isSet(object.status) ? eCustomGameInstallStatusFromJSON(object.status) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      latestTimestampFromSteam: isSet(object.latestTimestampFromSteam) ? Number(object.latestTimestampFromSteam) : 0,
    };
  },

  toJSON(message: CMsgCustomGameInstallStatus): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = eCustomGameInstallStatusToJSON(message.status));
    message.message !== undefined && (obj.message = message.message);
    message.latestTimestampFromSteam !== undefined &&
      (obj.latestTimestampFromSteam = Math.round(message.latestTimestampFromSteam));
    return obj;
  },
};

function createBaseCMsgServerAvailable(): CMsgServerAvailable {
  return { customGameInstallStatus: undefined };
}

export const CMsgServerAvailable = {
  encode(message: CMsgServerAvailable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customGameInstallStatus !== undefined) {
      CMsgCustomGameInstallStatus.encode(message.customGameInstallStatus, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerAvailable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerAvailable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.customGameInstallStatus = CMsgCustomGameInstallStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerAvailable {
    return {
      customGameInstallStatus: isSet(object.customGameInstallStatus)
        ? CMsgCustomGameInstallStatus.fromJSON(object.customGameInstallStatus)
        : undefined,
    };
  },

  toJSON(message: CMsgServerAvailable): unknown {
    const obj: any = {};
    message.customGameInstallStatus !== undefined && (obj.customGameInstallStatus = message.customGameInstallStatus
      ? CMsgCustomGameInstallStatus.toJSON(message.customGameInstallStatus)
      : undefined);
    return obj;
  },
};

function createBaseCMsgLANServerAvailable(): CMsgLANServerAvailable {
  return { lobbyId: "0" };
}

export const CMsgLANServerAvailable = {
  encode(message: CMsgLANServerAvailable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lobbyId !== "0") {
      writer.uint32(9).fixed64(message.lobbyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLANServerAvailable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLANServerAvailable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.lobbyId = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgLANServerAvailable {
    return { lobbyId: isSet(object.lobbyId) ? String(object.lobbyId) : "0" };
  },

  toJSON(message: CMsgLANServerAvailable): unknown {
    const obj: any = {};
    message.lobbyId !== undefined && (obj.lobbyId = message.lobbyId);
    return obj;
  },
};

function createBaseCSOEconGameAccountClient(): CSOEconGameAccountClient {
  return {
    additionalBackpackSlots: 0,
    trialAccount: false,
    eligibleForOnlinePlay: false,
    needToChooseMostHelpfulFriend: false,
    inCoachesList: false,
    tradeBanExpiration: 0,
    duelBanExpiration: 0,
    madeFirstPurchase: false,
  };
}

export const CSOEconGameAccountClient = {
  encode(message: CSOEconGameAccountClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.additionalBackpackSlots !== 0) {
      writer.uint32(8).uint32(message.additionalBackpackSlots);
    }
    if (message.trialAccount === true) {
      writer.uint32(16).bool(message.trialAccount);
    }
    if (message.eligibleForOnlinePlay === true) {
      writer.uint32(24).bool(message.eligibleForOnlinePlay);
    }
    if (message.needToChooseMostHelpfulFriend === true) {
      writer.uint32(32).bool(message.needToChooseMostHelpfulFriend);
    }
    if (message.inCoachesList === true) {
      writer.uint32(40).bool(message.inCoachesList);
    }
    if (message.tradeBanExpiration !== 0) {
      writer.uint32(53).fixed32(message.tradeBanExpiration);
    }
    if (message.duelBanExpiration !== 0) {
      writer.uint32(61).fixed32(message.duelBanExpiration);
    }
    if (message.madeFirstPurchase === true) {
      writer.uint32(72).bool(message.madeFirstPurchase);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSOEconGameAccountClient {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSOEconGameAccountClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.additionalBackpackSlots = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.trialAccount = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.eligibleForOnlinePlay = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.needToChooseMostHelpfulFriend = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.inCoachesList = reader.bool();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.tradeBanExpiration = reader.fixed32();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.duelBanExpiration = reader.fixed32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.madeFirstPurchase = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSOEconGameAccountClient {
    return {
      additionalBackpackSlots: isSet(object.additionalBackpackSlots) ? Number(object.additionalBackpackSlots) : 0,
      trialAccount: isSet(object.trialAccount) ? Boolean(object.trialAccount) : false,
      eligibleForOnlinePlay: isSet(object.eligibleForOnlinePlay) ? Boolean(object.eligibleForOnlinePlay) : false,
      needToChooseMostHelpfulFriend: isSet(object.needToChooseMostHelpfulFriend)
        ? Boolean(object.needToChooseMostHelpfulFriend)
        : false,
      inCoachesList: isSet(object.inCoachesList) ? Boolean(object.inCoachesList) : false,
      tradeBanExpiration: isSet(object.tradeBanExpiration) ? Number(object.tradeBanExpiration) : 0,
      duelBanExpiration: isSet(object.duelBanExpiration) ? Number(object.duelBanExpiration) : 0,
      madeFirstPurchase: isSet(object.madeFirstPurchase) ? Boolean(object.madeFirstPurchase) : false,
    };
  },

  toJSON(message: CSOEconGameAccountClient): unknown {
    const obj: any = {};
    message.additionalBackpackSlots !== undefined &&
      (obj.additionalBackpackSlots = Math.round(message.additionalBackpackSlots));
    message.trialAccount !== undefined && (obj.trialAccount = message.trialAccount);
    message.eligibleForOnlinePlay !== undefined && (obj.eligibleForOnlinePlay = message.eligibleForOnlinePlay);
    message.needToChooseMostHelpfulFriend !== undefined &&
      (obj.needToChooseMostHelpfulFriend = message.needToChooseMostHelpfulFriend);
    message.inCoachesList !== undefined && (obj.inCoachesList = message.inCoachesList);
    message.tradeBanExpiration !== undefined && (obj.tradeBanExpiration = Math.round(message.tradeBanExpiration));
    message.duelBanExpiration !== undefined && (obj.duelBanExpiration = Math.round(message.duelBanExpiration));
    message.madeFirstPurchase !== undefined && (obj.madeFirstPurchase = message.madeFirstPurchase);
    return obj;
  },
};

function createBaseCMsgApplyStrangePart(): CMsgApplyStrangePart {
  return { strangePartItemId: "0", itemItemId: "0" };
}

export const CMsgApplyStrangePart = {
  encode(message: CMsgApplyStrangePart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.strangePartItemId !== "0") {
      writer.uint32(8).uint64(message.strangePartItemId);
    }
    if (message.itemItemId !== "0") {
      writer.uint32(16).uint64(message.itemItemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgApplyStrangePart {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgApplyStrangePart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.strangePartItemId = longToString(reader.uint64() as Long);
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

  fromJSON(object: any): CMsgApplyStrangePart {
    return {
      strangePartItemId: isSet(object.strangePartItemId) ? String(object.strangePartItemId) : "0",
      itemItemId: isSet(object.itemItemId) ? String(object.itemItemId) : "0",
    };
  },

  toJSON(message: CMsgApplyStrangePart): unknown {
    const obj: any = {};
    message.strangePartItemId !== undefined && (obj.strangePartItemId = message.strangePartItemId);
    message.itemItemId !== undefined && (obj.itemItemId = message.itemItemId);
    return obj;
  },
};

function createBaseCMsgApplyPennantUpgrade(): CMsgApplyPennantUpgrade {
  return { upgradeItemId: "0", pennantItemId: "0" };
}

export const CMsgApplyPennantUpgrade = {
  encode(message: CMsgApplyPennantUpgrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.upgradeItemId !== "0") {
      writer.uint32(8).uint64(message.upgradeItemId);
    }
    if (message.pennantItemId !== "0") {
      writer.uint32(16).uint64(message.pennantItemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgApplyPennantUpgrade {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgApplyPennantUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.upgradeItemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.pennantItemId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgApplyPennantUpgrade {
    return {
      upgradeItemId: isSet(object.upgradeItemId) ? String(object.upgradeItemId) : "0",
      pennantItemId: isSet(object.pennantItemId) ? String(object.pennantItemId) : "0",
    };
  },

  toJSON(message: CMsgApplyPennantUpgrade): unknown {
    const obj: any = {};
    message.upgradeItemId !== undefined && (obj.upgradeItemId = message.upgradeItemId);
    message.pennantItemId !== undefined && (obj.pennantItemId = message.pennantItemId);
    return obj;
  },
};

function createBaseCMsgApplyEggEssence(): CMsgApplyEggEssence {
  return { essenceItemId: "0", eggItemId: "0" };
}

export const CMsgApplyEggEssence = {
  encode(message: CMsgApplyEggEssence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.essenceItemId !== "0") {
      writer.uint32(8).uint64(message.essenceItemId);
    }
    if (message.eggItemId !== "0") {
      writer.uint32(16).uint64(message.eggItemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgApplyEggEssence {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgApplyEggEssence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.essenceItemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.eggItemId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgApplyEggEssence {
    return {
      essenceItemId: isSet(object.essenceItemId) ? String(object.essenceItemId) : "0",
      eggItemId: isSet(object.eggItemId) ? String(object.eggItemId) : "0",
    };
  },

  toJSON(message: CMsgApplyEggEssence): unknown {
    const obj: any = {};
    message.essenceItemId !== undefined && (obj.essenceItemId = message.essenceItemId);
    message.eggItemId !== undefined && (obj.eggItemId = message.eggItemId);
    return obj;
  },
};

function createBaseCSOEconItemAttribute(): CSOEconItemAttribute {
  return { defIndex: 0, value: 0, valueBytes: Buffer.alloc(0) };
}

export const CSOEconItemAttribute = {
  encode(message: CSOEconItemAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defIndex !== 0) {
      writer.uint32(8).uint32(message.defIndex);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    if (message.valueBytes.length !== 0) {
      writer.uint32(26).bytes(message.valueBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSOEconItemAttribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSOEconItemAttribute();
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

          message.value = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.valueBytes = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSOEconItemAttribute {
    return {
      defIndex: isSet(object.defIndex) ? Number(object.defIndex) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
      valueBytes: isSet(object.valueBytes) ? Buffer.from(bytesFromBase64(object.valueBytes)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CSOEconItemAttribute): unknown {
    const obj: any = {};
    message.defIndex !== undefined && (obj.defIndex = Math.round(message.defIndex));
    message.value !== undefined && (obj.value = Math.round(message.value));
    message.valueBytes !== undefined &&
      (obj.valueBytes = base64FromBytes(message.valueBytes !== undefined ? message.valueBytes : Buffer.alloc(0)));
    return obj;
  },
};

function createBaseCSOEconItemEquipped(): CSOEconItemEquipped {
  return { newClass: 0, newSlot: 0 };
}

export const CSOEconItemEquipped = {
  encode(message: CSOEconItemEquipped, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newClass !== 0) {
      writer.uint32(8).uint32(message.newClass);
    }
    if (message.newSlot !== 0) {
      writer.uint32(16).uint32(message.newSlot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSOEconItemEquipped {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSOEconItemEquipped();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.newClass = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.newSlot = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSOEconItemEquipped {
    return {
      newClass: isSet(object.newClass) ? Number(object.newClass) : 0,
      newSlot: isSet(object.newSlot) ? Number(object.newSlot) : 0,
    };
  },

  toJSON(message: CSOEconItemEquipped): unknown {
    const obj: any = {};
    message.newClass !== undefined && (obj.newClass = Math.round(message.newClass));
    message.newSlot !== undefined && (obj.newSlot = Math.round(message.newSlot));
    return obj;
  },
};

function createBaseCSOEconItem(): CSOEconItem {
  return {
    id: "0",
    accountId: 0,
    inventory: 0,
    defIndex: 0,
    quantity: 0,
    level: 0,
    quality: 0,
    flags: 0,
    origin: 0,
    attribute: [],
    interiorItem: undefined,
    style: 0,
    originalId: "0",
    equippedState: [],
  };
}

export const CSOEconItem = {
  encode(message: CSOEconItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint32(message.accountId);
    }
    if (message.inventory !== 0) {
      writer.uint32(24).uint32(message.inventory);
    }
    if (message.defIndex !== 0) {
      writer.uint32(32).uint32(message.defIndex);
    }
    if (message.quantity !== 0) {
      writer.uint32(40).uint32(message.quantity);
    }
    if (message.level !== 0) {
      writer.uint32(48).uint32(message.level);
    }
    if (message.quality !== 0) {
      writer.uint32(56).uint32(message.quality);
    }
    if (message.flags !== 0) {
      writer.uint32(64).uint32(message.flags);
    }
    if (message.origin !== 0) {
      writer.uint32(72).uint32(message.origin);
    }
    for (const v of message.attribute) {
      CSOEconItemAttribute.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.interiorItem !== undefined) {
      CSOEconItem.encode(message.interiorItem, writer.uint32(106).fork()).ldelim();
    }
    if (message.style !== 0) {
      writer.uint32(120).uint32(message.style);
    }
    if (message.originalId !== "0") {
      writer.uint32(128).uint64(message.originalId);
    }
    for (const v of message.equippedState) {
      CSOEconItemEquipped.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSOEconItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSOEconItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = longToString(reader.uint64() as Long);
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

          message.inventory = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.defIndex = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.quantity = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.quality = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.origin = reader.uint32();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.attribute.push(CSOEconItemAttribute.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.interiorItem = CSOEconItem.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.style = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.originalId = longToString(reader.uint64() as Long);
          continue;
        case 18:
          if (tag != 146) {
            break;
          }

          message.equippedState.push(CSOEconItemEquipped.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSOEconItem {
    return {
      id: isSet(object.id) ? String(object.id) : "0",
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      inventory: isSet(object.inventory) ? Number(object.inventory) : 0,
      defIndex: isSet(object.defIndex) ? Number(object.defIndex) : 0,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      quality: isSet(object.quality) ? Number(object.quality) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      origin: isSet(object.origin) ? Number(object.origin) : 0,
      attribute: Array.isArray(object?.attribute)
        ? object.attribute.map((e: any) => CSOEconItemAttribute.fromJSON(e))
        : [],
      interiorItem: isSet(object.interiorItem) ? CSOEconItem.fromJSON(object.interiorItem) : undefined,
      style: isSet(object.style) ? Number(object.style) : 0,
      originalId: isSet(object.originalId) ? String(object.originalId) : "0",
      equippedState: Array.isArray(object?.equippedState)
        ? object.equippedState.map((e: any) => CSOEconItemEquipped.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSOEconItem): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.inventory !== undefined && (obj.inventory = Math.round(message.inventory));
    message.defIndex !== undefined && (obj.defIndex = Math.round(message.defIndex));
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.quality !== undefined && (obj.quality = Math.round(message.quality));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.origin !== undefined && (obj.origin = Math.round(message.origin));
    if (message.attribute) {
      obj.attribute = message.attribute.map((e) => e ? CSOEconItemAttribute.toJSON(e) : undefined);
    } else {
      obj.attribute = [];
    }
    message.interiorItem !== undefined &&
      (obj.interiorItem = message.interiorItem ? CSOEconItem.toJSON(message.interiorItem) : undefined);
    message.style !== undefined && (obj.style = Math.round(message.style));
    message.originalId !== undefined && (obj.originalId = message.originalId);
    if (message.equippedState) {
      obj.equippedState = message.equippedState.map((e) => e ? CSOEconItemEquipped.toJSON(e) : undefined);
    } else {
      obj.equippedState = [];
    }
    return obj;
  },
};

function createBaseCMsgSortItems(): CMsgSortItems {
  return { sortType: 0 };
}

export const CMsgSortItems = {
  encode(message: CMsgSortItems, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sortType !== 0) {
      writer.uint32(8).uint32(message.sortType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSortItems {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSortItems();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sortType = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSortItems {
    return { sortType: isSet(object.sortType) ? Number(object.sortType) : 0 };
  },

  toJSON(message: CMsgSortItems): unknown {
    const obj: any = {};
    message.sortType !== undefined && (obj.sortType = Math.round(message.sortType));
    return obj;
  },
};

function createBaseCMsgConVarValue(): CMsgConVarValue {
  return { name: "", value: "" };
}

export const CMsgConVarValue = {
  encode(message: CMsgConVarValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgConVarValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgConVarValue();
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

  fromJSON(object: any): CMsgConVarValue {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: CMsgConVarValue): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

function createBaseCMsgReplicateConVars(): CMsgReplicateConVars {
  return { convars: [] };
}

export const CMsgReplicateConVars = {
  encode(message: CMsgReplicateConVars, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.convars) {
      CMsgConVarValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgReplicateConVars {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgReplicateConVars();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.convars.push(CMsgConVarValue.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgReplicateConVars {
    return {
      convars: Array.isArray(object?.convars) ? object.convars.map((e: any) => CMsgConVarValue.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgReplicateConVars): unknown {
    const obj: any = {};
    if (message.convars) {
      obj.convars = message.convars.map((e) => e ? CMsgConVarValue.toJSON(e) : undefined);
    } else {
      obj.convars = [];
    }
    return obj;
  },
};

function createBaseCMsgItemAcknowledged(): CMsgItemAcknowledged {
  return { accountId: 0, inventory: 0, defIndex: 0, quality: 0, rarity: 0, origin: 0 };
}

export const CMsgItemAcknowledged = {
  encode(message: CMsgItemAcknowledged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.inventory !== 0) {
      writer.uint32(16).uint32(message.inventory);
    }
    if (message.defIndex !== 0) {
      writer.uint32(24).uint32(message.defIndex);
    }
    if (message.quality !== 0) {
      writer.uint32(32).uint32(message.quality);
    }
    if (message.rarity !== 0) {
      writer.uint32(40).uint32(message.rarity);
    }
    if (message.origin !== 0) {
      writer.uint32(48).uint32(message.origin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgItemAcknowledged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgItemAcknowledged();
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

          message.inventory = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.defIndex = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.quality = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.rarity = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.origin = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgItemAcknowledged {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      inventory: isSet(object.inventory) ? Number(object.inventory) : 0,
      defIndex: isSet(object.defIndex) ? Number(object.defIndex) : 0,
      quality: isSet(object.quality) ? Number(object.quality) : 0,
      rarity: isSet(object.rarity) ? Number(object.rarity) : 0,
      origin: isSet(object.origin) ? Number(object.origin) : 0,
    };
  },

  toJSON(message: CMsgItemAcknowledged): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.inventory !== undefined && (obj.inventory = Math.round(message.inventory));
    message.defIndex !== undefined && (obj.defIndex = Math.round(message.defIndex));
    message.quality !== undefined && (obj.quality = Math.round(message.quality));
    message.rarity !== undefined && (obj.rarity = Math.round(message.rarity));
    message.origin !== undefined && (obj.origin = Math.round(message.origin));
    return obj;
  },
};

function createBaseCMsgSetItemPositions(): CMsgSetItemPositions {
  return { itemPositions: [] };
}

export const CMsgSetItemPositions = {
  encode(message: CMsgSetItemPositions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.itemPositions) {
      CMsgSetItemPositions_ItemPosition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetItemPositions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetItemPositions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.itemPositions.push(CMsgSetItemPositions_ItemPosition.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSetItemPositions {
    return {
      itemPositions: Array.isArray(object?.itemPositions)
        ? object.itemPositions.map((e: any) => CMsgSetItemPositions_ItemPosition.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSetItemPositions): unknown {
    const obj: any = {};
    if (message.itemPositions) {
      obj.itemPositions = message.itemPositions.map((e) => e ? CMsgSetItemPositions_ItemPosition.toJSON(e) : undefined);
    } else {
      obj.itemPositions = [];
    }
    return obj;
  },
};

function createBaseCMsgSetItemPositions_ItemPosition(): CMsgSetItemPositions_ItemPosition {
  return { itemId: "0", position: 0 };
}

export const CMsgSetItemPositions_ItemPosition = {
  encode(message: CMsgSetItemPositions_ItemPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "0") {
      writer.uint32(8).uint64(message.itemId);
    }
    if (message.position !== 0) {
      writer.uint32(16).uint32(message.position);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetItemPositions_ItemPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetItemPositions_ItemPosition();
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

          message.position = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSetItemPositions_ItemPosition {
    return {
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
      position: isSet(object.position) ? Number(object.position) : 0,
    };
  },

  toJSON(message: CMsgSetItemPositions_ItemPosition): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.position !== undefined && (obj.position = Math.round(message.position));
    return obj;
  },
};

function createBaseCMsgGCStorePurchaseCancel(): CMsgGCStorePurchaseCancel {
  return { txnId: "0" };
}

export const CMsgGCStorePurchaseCancel = {
  encode(message: CMsgGCStorePurchaseCancel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txnId !== "0") {
      writer.uint32(8).uint64(message.txnId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCStorePurchaseCancel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCStorePurchaseCancel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.txnId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCStorePurchaseCancel {
    return { txnId: isSet(object.txnId) ? String(object.txnId) : "0" };
  },

  toJSON(message: CMsgGCStorePurchaseCancel): unknown {
    const obj: any = {};
    message.txnId !== undefined && (obj.txnId = message.txnId);
    return obj;
  },
};

function createBaseCMsgGCStorePurchaseCancelResponse(): CMsgGCStorePurchaseCancelResponse {
  return { result: 0 };
}

export const CMsgGCStorePurchaseCancelResponse = {
  encode(message: CMsgGCStorePurchaseCancelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCStorePurchaseCancelResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCStorePurchaseCancelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
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

  fromJSON(object: any): CMsgGCStorePurchaseCancelResponse {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: CMsgGCStorePurchaseCancelResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },
};

function createBaseCMsgGCStorePurchaseFinalize(): CMsgGCStorePurchaseFinalize {
  return { txnId: "0" };
}

export const CMsgGCStorePurchaseFinalize = {
  encode(message: CMsgGCStorePurchaseFinalize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txnId !== "0") {
      writer.uint32(8).uint64(message.txnId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCStorePurchaseFinalize {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCStorePurchaseFinalize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.txnId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCStorePurchaseFinalize {
    return { txnId: isSet(object.txnId) ? String(object.txnId) : "0" };
  },

  toJSON(message: CMsgGCStorePurchaseFinalize): unknown {
    const obj: any = {};
    message.txnId !== undefined && (obj.txnId = message.txnId);
    return obj;
  },
};

function createBaseCMsgGCStorePurchaseFinalizeResponse(): CMsgGCStorePurchaseFinalizeResponse {
  return { result: 0, itemIds: [] };
}

export const CMsgGCStorePurchaseFinalizeResponse = {
  encode(message: CMsgGCStorePurchaseFinalizeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    writer.uint32(18).fork();
    for (const v of message.itemIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCStorePurchaseFinalizeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCStorePurchaseFinalizeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.uint32();
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

  fromJSON(object: any): CMsgGCStorePurchaseFinalizeResponse {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      itemIds: Array.isArray(object?.itemIds) ? object.itemIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CMsgGCStorePurchaseFinalizeResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    if (message.itemIds) {
      obj.itemIds = message.itemIds.map((e) => e);
    } else {
      obj.itemIds = [];
    }
    return obj;
  },
};

function createBaseCMsgGCToGCBannedWordListUpdated(): CMsgGCToGCBannedWordListUpdated {
  return { groupId: 0 };
}

export const CMsgGCToGCBannedWordListUpdated = {
  encode(message: CMsgGCToGCBannedWordListUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).uint32(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCBannedWordListUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCBannedWordListUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.groupId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToGCBannedWordListUpdated {
    return { groupId: isSet(object.groupId) ? Number(object.groupId) : 0 };
  },

  toJSON(message: CMsgGCToGCBannedWordListUpdated): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));
    return obj;
  },
};

function createBaseCMsgGCToGCDirtySDOCache(): CMsgGCToGCDirtySDOCache {
  return { sdoType: 0, keyUint64: "0" };
}

export const CMsgGCToGCDirtySDOCache = {
  encode(message: CMsgGCToGCDirtySDOCache, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sdoType !== 0) {
      writer.uint32(8).uint32(message.sdoType);
    }
    if (message.keyUint64 !== "0") {
      writer.uint32(16).uint64(message.keyUint64);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCDirtySDOCache {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCDirtySDOCache();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sdoType = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.keyUint64 = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToGCDirtySDOCache {
    return {
      sdoType: isSet(object.sdoType) ? Number(object.sdoType) : 0,
      keyUint64: isSet(object.keyUint64) ? String(object.keyUint64) : "0",
    };
  },

  toJSON(message: CMsgGCToGCDirtySDOCache): unknown {
    const obj: any = {};
    message.sdoType !== undefined && (obj.sdoType = Math.round(message.sdoType));
    message.keyUint64 !== undefined && (obj.keyUint64 = message.keyUint64);
    return obj;
  },
};

function createBaseCMsgSDONoMemcached(): CMsgSDONoMemcached {
  return {};
}

export const CMsgSDONoMemcached = {
  encode(_: CMsgSDONoMemcached, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSDONoMemcached {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSDONoMemcached();
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

  fromJSON(_: any): CMsgSDONoMemcached {
    return {};
  },

  toJSON(_: CMsgSDONoMemcached): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgGCToGCUpdateSQLKeyValue(): CMsgGCToGCUpdateSQLKeyValue {
  return { keyName: "" };
}

export const CMsgGCToGCUpdateSQLKeyValue = {
  encode(message: CMsgGCToGCUpdateSQLKeyValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyName !== "") {
      writer.uint32(10).string(message.keyName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCUpdateSQLKeyValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCUpdateSQLKeyValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.keyName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToGCUpdateSQLKeyValue {
    return { keyName: isSet(object.keyName) ? String(object.keyName) : "" };
  },

  toJSON(message: CMsgGCToGCUpdateSQLKeyValue): unknown {
    const obj: any = {};
    message.keyName !== undefined && (obj.keyName = message.keyName);
    return obj;
  },
};

function createBaseCMsgGCServerVersionUpdated(): CMsgGCServerVersionUpdated {
  return { serverVersion: 0 };
}

export const CMsgGCServerVersionUpdated = {
  encode(message: CMsgGCServerVersionUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverVersion !== 0) {
      writer.uint32(8).uint32(message.serverVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCServerVersionUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCServerVersionUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.serverVersion = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCServerVersionUpdated {
    return { serverVersion: isSet(object.serverVersion) ? Number(object.serverVersion) : 0 };
  },

  toJSON(message: CMsgGCServerVersionUpdated): unknown {
    const obj: any = {};
    message.serverVersion !== undefined && (obj.serverVersion = Math.round(message.serverVersion));
    return obj;
  },
};

function createBaseCMsgGCClientVersionUpdated(): CMsgGCClientVersionUpdated {
  return { clientVersion: 0 };
}

export const CMsgGCClientVersionUpdated = {
  encode(message: CMsgGCClientVersionUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientVersion !== 0) {
      writer.uint32(8).uint32(message.clientVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCClientVersionUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCClientVersionUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.clientVersion = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCClientVersionUpdated {
    return { clientVersion: isSet(object.clientVersion) ? Number(object.clientVersion) : 0 };
  },

  toJSON(message: CMsgGCClientVersionUpdated): unknown {
    const obj: any = {};
    message.clientVersion !== undefined && (obj.clientVersion = Math.round(message.clientVersion));
    return obj;
  },
};

function createBaseCMsgGCToGCWebAPIAccountChanged(): CMsgGCToGCWebAPIAccountChanged {
  return {};
}

export const CMsgGCToGCWebAPIAccountChanged = {
  encode(_: CMsgGCToGCWebAPIAccountChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCWebAPIAccountChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCWebAPIAccountChanged();
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

  fromJSON(_: any): CMsgGCToGCWebAPIAccountChanged {
    return {};
  },

  toJSON(_: CMsgGCToGCWebAPIAccountChanged): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgExtractGems(): CMsgExtractGems {
  return { toolItemId: "0", itemItemId: "0", itemSocketId: 0 };
}

export const CMsgExtractGems = {
  encode(message: CMsgExtractGems, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.toolItemId !== "0") {
      writer.uint32(8).uint64(message.toolItemId);
    }
    if (message.itemItemId !== "0") {
      writer.uint32(16).uint64(message.itemItemId);
    }
    if (message.itemSocketId !== 0) {
      writer.uint32(24).uint32(message.itemSocketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgExtractGems {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgExtractGems();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.toolItemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.itemItemId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.itemSocketId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgExtractGems {
    return {
      toolItemId: isSet(object.toolItemId) ? String(object.toolItemId) : "0",
      itemItemId: isSet(object.itemItemId) ? String(object.itemItemId) : "0",
      itemSocketId: isSet(object.itemSocketId) ? Number(object.itemSocketId) : 0,
    };
  },

  toJSON(message: CMsgExtractGems): unknown {
    const obj: any = {};
    message.toolItemId !== undefined && (obj.toolItemId = message.toolItemId);
    message.itemItemId !== undefined && (obj.itemItemId = message.itemItemId);
    message.itemSocketId !== undefined && (obj.itemSocketId = Math.round(message.itemSocketId));
    return obj;
  },
};

function createBaseCMsgExtractGemsResponse(): CMsgExtractGemsResponse {
  return { itemId: "0", response: 0 };
}

export const CMsgExtractGemsResponse = {
  encode(message: CMsgExtractGemsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "0") {
      writer.uint32(8).uint64(message.itemId);
    }
    if (message.response !== 0) {
      writer.uint32(16).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgExtractGemsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgExtractGemsResponse();
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

  fromJSON(object: any): CMsgExtractGemsResponse {
    return {
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
      response: isSet(object.response) ? cMsgExtractGemsResponse_EExtractGemsFromJSON(object.response) : 0,
    };
  },

  toJSON(message: CMsgExtractGemsResponse): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.response !== undefined && (obj.response = cMsgExtractGemsResponse_EExtractGemsToJSON(message.response));
    return obj;
  },
};

function createBaseCMsgAddSocket(): CMsgAddSocket {
  return { toolItemId: "0", itemItemId: "0", unusual: false };
}

export const CMsgAddSocket = {
  encode(message: CMsgAddSocket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.toolItemId !== "0") {
      writer.uint32(8).uint64(message.toolItemId);
    }
    if (message.itemItemId !== "0") {
      writer.uint32(16).uint64(message.itemItemId);
    }
    if (message.unusual === true) {
      writer.uint32(24).bool(message.unusual);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAddSocket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAddSocket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.toolItemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.itemItemId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.unusual = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgAddSocket {
    return {
      toolItemId: isSet(object.toolItemId) ? String(object.toolItemId) : "0",
      itemItemId: isSet(object.itemItemId) ? String(object.itemItemId) : "0",
      unusual: isSet(object.unusual) ? Boolean(object.unusual) : false,
    };
  },

  toJSON(message: CMsgAddSocket): unknown {
    const obj: any = {};
    message.toolItemId !== undefined && (obj.toolItemId = message.toolItemId);
    message.itemItemId !== undefined && (obj.itemItemId = message.itemItemId);
    message.unusual !== undefined && (obj.unusual = message.unusual);
    return obj;
  },
};

function createBaseCMsgAddSocketResponse(): CMsgAddSocketResponse {
  return { itemId: "0", updatedSocketIndex: [], response: 0 };
}

export const CMsgAddSocketResponse = {
  encode(message: CMsgAddSocketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "0") {
      writer.uint32(8).uint64(message.itemId);
    }
    writer.uint32(18).fork();
    for (const v of message.updatedSocketIndex) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.response !== 0) {
      writer.uint32(24).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAddSocketResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAddSocketResponse();
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
          if (tag == 16) {
            message.updatedSocketIndex.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.updatedSocketIndex.push(reader.uint32());
            }

            continue;
          }

          break;
        case 3:
          if (tag != 24) {
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

  fromJSON(object: any): CMsgAddSocketResponse {
    return {
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
      updatedSocketIndex: Array.isArray(object?.updatedSocketIndex)
        ? object.updatedSocketIndex.map((e: any) => Number(e))
        : [],
      response: isSet(object.response) ? cMsgAddSocketResponse_EAddSocketFromJSON(object.response) : 0,
    };
  },

  toJSON(message: CMsgAddSocketResponse): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    if (message.updatedSocketIndex) {
      obj.updatedSocketIndex = message.updatedSocketIndex.map((e) => Math.round(e));
    } else {
      obj.updatedSocketIndex = [];
    }
    message.response !== undefined && (obj.response = cMsgAddSocketResponse_EAddSocketToJSON(message.response));
    return obj;
  },
};

function createBaseCMsgAddItemToSocketData(): CMsgAddItemToSocketData {
  return { gemItemId: "0", socketIndex: 0 };
}

export const CMsgAddItemToSocketData = {
  encode(message: CMsgAddItemToSocketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gemItemId !== "0") {
      writer.uint32(8).uint64(message.gemItemId);
    }
    if (message.socketIndex !== 0) {
      writer.uint32(16).uint32(message.socketIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAddItemToSocketData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAddItemToSocketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.gemItemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.socketIndex = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgAddItemToSocketData {
    return {
      gemItemId: isSet(object.gemItemId) ? String(object.gemItemId) : "0",
      socketIndex: isSet(object.socketIndex) ? Number(object.socketIndex) : 0,
    };
  },

  toJSON(message: CMsgAddItemToSocketData): unknown {
    const obj: any = {};
    message.gemItemId !== undefined && (obj.gemItemId = message.gemItemId);
    message.socketIndex !== undefined && (obj.socketIndex = Math.round(message.socketIndex));
    return obj;
  },
};

function createBaseCMsgAddItemToSocket(): CMsgAddItemToSocket {
  return { itemItemId: "0", gemsToSocket: [] };
}

export const CMsgAddItemToSocket = {
  encode(message: CMsgAddItemToSocket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemItemId !== "0") {
      writer.uint32(8).uint64(message.itemItemId);
    }
    for (const v of message.gemsToSocket) {
      CMsgAddItemToSocketData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAddItemToSocket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAddItemToSocket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemItemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.gemsToSocket.push(CMsgAddItemToSocketData.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgAddItemToSocket {
    return {
      itemItemId: isSet(object.itemItemId) ? String(object.itemItemId) : "0",
      gemsToSocket: Array.isArray(object?.gemsToSocket)
        ? object.gemsToSocket.map((e: any) => CMsgAddItemToSocketData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgAddItemToSocket): unknown {
    const obj: any = {};
    message.itemItemId !== undefined && (obj.itemItemId = message.itemItemId);
    if (message.gemsToSocket) {
      obj.gemsToSocket = message.gemsToSocket.map((e) => e ? CMsgAddItemToSocketData.toJSON(e) : undefined);
    } else {
      obj.gemsToSocket = [];
    }
    return obj;
  },
};

function createBaseCMsgAddItemToSocketResponse(): CMsgAddItemToSocketResponse {
  return { itemItemId: "0", updatedSocketIndex: [], response: 0 };
}

export const CMsgAddItemToSocketResponse = {
  encode(message: CMsgAddItemToSocketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemItemId !== "0") {
      writer.uint32(8).uint64(message.itemItemId);
    }
    writer.uint32(18).fork();
    for (const v of message.updatedSocketIndex) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.response !== 0) {
      writer.uint32(24).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAddItemToSocketResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAddItemToSocketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemItemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag == 16) {
            message.updatedSocketIndex.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.updatedSocketIndex.push(reader.uint32());
            }

            continue;
          }

          break;
        case 3:
          if (tag != 24) {
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

  fromJSON(object: any): CMsgAddItemToSocketResponse {
    return {
      itemItemId: isSet(object.itemItemId) ? String(object.itemItemId) : "0",
      updatedSocketIndex: Array.isArray(object?.updatedSocketIndex)
        ? object.updatedSocketIndex.map((e: any) => Number(e))
        : [],
      response: isSet(object.response) ? cMsgAddItemToSocketResponse_EAddGemFromJSON(object.response) : 0,
    };
  },

  toJSON(message: CMsgAddItemToSocketResponse): unknown {
    const obj: any = {};
    message.itemItemId !== undefined && (obj.itemItemId = message.itemItemId);
    if (message.updatedSocketIndex) {
      obj.updatedSocketIndex = message.updatedSocketIndex.map((e) => Math.round(e));
    } else {
      obj.updatedSocketIndex = [];
    }
    message.response !== undefined && (obj.response = cMsgAddItemToSocketResponse_EAddGemToJSON(message.response));
    return obj;
  },
};

function createBaseCMsgResetStrangeGemCount(): CMsgResetStrangeGemCount {
  return { itemItemId: "0", socketIndex: 0 };
}

export const CMsgResetStrangeGemCount = {
  encode(message: CMsgResetStrangeGemCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemItemId !== "0") {
      writer.uint32(8).uint64(message.itemItemId);
    }
    if (message.socketIndex !== 0) {
      writer.uint32(16).uint32(message.socketIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgResetStrangeGemCount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgResetStrangeGemCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemItemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.socketIndex = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgResetStrangeGemCount {
    return {
      itemItemId: isSet(object.itemItemId) ? String(object.itemItemId) : "0",
      socketIndex: isSet(object.socketIndex) ? Number(object.socketIndex) : 0,
    };
  },

  toJSON(message: CMsgResetStrangeGemCount): unknown {
    const obj: any = {};
    message.itemItemId !== undefined && (obj.itemItemId = message.itemItemId);
    message.socketIndex !== undefined && (obj.socketIndex = Math.round(message.socketIndex));
    return obj;
  },
};

function createBaseCMsgResetStrangeGemCountResponse(): CMsgResetStrangeGemCountResponse {
  return { response: 0 };
}

export const CMsgResetStrangeGemCountResponse = {
  encode(message: CMsgResetStrangeGemCountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgResetStrangeGemCountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgResetStrangeGemCountResponse();
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

  fromJSON(object: any): CMsgResetStrangeGemCountResponse {
    return {
      response: isSet(object.response) ? cMsgResetStrangeGemCountResponse_EResetGemFromJSON(object.response) : 0,
    };
  },

  toJSON(message: CMsgResetStrangeGemCountResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = cMsgResetStrangeGemCountResponse_EResetGemToJSON(message.response));
    return obj;
  },
};

function createBaseCMsgGCToClientPollFileRequest(): CMsgGCToClientPollFileRequest {
  return { fileName: "", clientVersion: 0, pollId: 0 };
}

export const CMsgGCToClientPollFileRequest = {
  encode(message: CMsgGCToClientPollFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fileName !== "") {
      writer.uint32(10).string(message.fileName);
    }
    if (message.clientVersion !== 0) {
      writer.uint32(16).uint32(message.clientVersion);
    }
    if (message.pollId !== 0) {
      writer.uint32(24).uint32(message.pollId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientPollFileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientPollFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.fileName = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.clientVersion = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.pollId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToClientPollFileRequest {
    return {
      fileName: isSet(object.fileName) ? String(object.fileName) : "",
      clientVersion: isSet(object.clientVersion) ? Number(object.clientVersion) : 0,
      pollId: isSet(object.pollId) ? Number(object.pollId) : 0,
    };
  },

  toJSON(message: CMsgGCToClientPollFileRequest): unknown {
    const obj: any = {};
    message.fileName !== undefined && (obj.fileName = message.fileName);
    message.clientVersion !== undefined && (obj.clientVersion = Math.round(message.clientVersion));
    message.pollId !== undefined && (obj.pollId = Math.round(message.pollId));
    return obj;
  },
};

function createBaseCMsgGCToClientPollFileResponse(): CMsgGCToClientPollFileResponse {
  return { pollId: 0, fileSize: 0, fileCrc: 0 };
}

export const CMsgGCToClientPollFileResponse = {
  encode(message: CMsgGCToClientPollFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pollId !== 0) {
      writer.uint32(8).uint32(message.pollId);
    }
    if (message.fileSize !== 0) {
      writer.uint32(16).uint32(message.fileSize);
    }
    if (message.fileCrc !== 0) {
      writer.uint32(24).uint32(message.fileCrc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientPollFileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientPollFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.pollId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.fileSize = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.fileCrc = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToClientPollFileResponse {
    return {
      pollId: isSet(object.pollId) ? Number(object.pollId) : 0,
      fileSize: isSet(object.fileSize) ? Number(object.fileSize) : 0,
      fileCrc: isSet(object.fileCrc) ? Number(object.fileCrc) : 0,
    };
  },

  toJSON(message: CMsgGCToClientPollFileResponse): unknown {
    const obj: any = {};
    message.pollId !== undefined && (obj.pollId = Math.round(message.pollId));
    message.fileSize !== undefined && (obj.fileSize = Math.round(message.fileSize));
    message.fileCrc !== undefined && (obj.fileCrc = Math.round(message.fileCrc));
    return obj;
  },
};

function createBaseCMsgGCToGCPerformManualOp(): CMsgGCToGCPerformManualOp {
  return { opId: "0", groupCode: 0 };
}

export const CMsgGCToGCPerformManualOp = {
  encode(message: CMsgGCToGCPerformManualOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.opId !== "0") {
      writer.uint32(8).uint64(message.opId);
    }
    if (message.groupCode !== 0) {
      writer.uint32(16).uint32(message.groupCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCPerformManualOp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCPerformManualOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.opId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.groupCode = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToGCPerformManualOp {
    return {
      opId: isSet(object.opId) ? String(object.opId) : "0",
      groupCode: isSet(object.groupCode) ? Number(object.groupCode) : 0,
    };
  },

  toJSON(message: CMsgGCToGCPerformManualOp): unknown {
    const obj: any = {};
    message.opId !== undefined && (obj.opId = message.opId);
    message.groupCode !== undefined && (obj.groupCode = Math.round(message.groupCode));
    return obj;
  },
};

function createBaseCMsgGCToGCPerformManualOpCompleted(): CMsgGCToGCPerformManualOpCompleted {
  return { success: false, sourceGc: 0 };
}

export const CMsgGCToGCPerformManualOpCompleted = {
  encode(message: CMsgGCToGCPerformManualOpCompleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.sourceGc !== 0) {
      writer.uint32(16).int32(message.sourceGc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCPerformManualOpCompleted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCPerformManualOpCompleted();
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

          message.sourceGc = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToGCPerformManualOpCompleted {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      sourceGc: isSet(object.sourceGc) ? Number(object.sourceGc) : 0,
    };
  },

  toJSON(message: CMsgGCToGCPerformManualOpCompleted): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.sourceGc !== undefined && (obj.sourceGc = Math.round(message.sourceGc));
    return obj;
  },
};

function createBaseCMsgGCToGCReloadServerRegionSettings(): CMsgGCToGCReloadServerRegionSettings {
  return {};
}

export const CMsgGCToGCReloadServerRegionSettings = {
  encode(_: CMsgGCToGCReloadServerRegionSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCReloadServerRegionSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCReloadServerRegionSettings();
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

  fromJSON(_: any): CMsgGCToGCReloadServerRegionSettings {
    return {};
  },

  toJSON(_: CMsgGCToGCReloadServerRegionSettings): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgGCAdditionalWelcomeMsgList(): CMsgGCAdditionalWelcomeMsgList {
  return { welcomeMessages: [] };
}

export const CMsgGCAdditionalWelcomeMsgList = {
  encode(message: CMsgGCAdditionalWelcomeMsgList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.welcomeMessages) {
      CExtraMsgBlock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCAdditionalWelcomeMsgList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCAdditionalWelcomeMsgList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.welcomeMessages.push(CExtraMsgBlock.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCAdditionalWelcomeMsgList {
    return {
      welcomeMessages: Array.isArray(object?.welcomeMessages)
        ? object.welcomeMessages.map((e: any) => CExtraMsgBlock.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGCAdditionalWelcomeMsgList): unknown {
    const obj: any = {};
    if (message.welcomeMessages) {
      obj.welcomeMessages = message.welcomeMessages.map((e) => e ? CExtraMsgBlock.toJSON(e) : undefined);
    } else {
      obj.welcomeMessages = [];
    }
    return obj;
  },
};

function createBaseCMsgApplyRemoteConVars(): CMsgApplyRemoteConVars {
  return { conVars: [] };
}

export const CMsgApplyRemoteConVars = {
  encode(message: CMsgApplyRemoteConVars, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.conVars) {
      CMsgApplyRemoteConVars_ConVar.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgApplyRemoteConVars {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgApplyRemoteConVars();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.conVars.push(CMsgApplyRemoteConVars_ConVar.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgApplyRemoteConVars {
    return {
      conVars: Array.isArray(object?.conVars)
        ? object.conVars.map((e: any) => CMsgApplyRemoteConVars_ConVar.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgApplyRemoteConVars): unknown {
    const obj: any = {};
    if (message.conVars) {
      obj.conVars = message.conVars.map((e) => e ? CMsgApplyRemoteConVars_ConVar.toJSON(e) : undefined);
    } else {
      obj.conVars = [];
    }
    return obj;
  },
};

function createBaseCMsgApplyRemoteConVars_ConVar(): CMsgApplyRemoteConVars_ConVar {
  return { name: "", value: "", versionMin: 0, versionMax: 0, platform: 0 };
}

export const CMsgApplyRemoteConVars_ConVar = {
  encode(message: CMsgApplyRemoteConVars_ConVar, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.versionMin !== 0) {
      writer.uint32(24).uint32(message.versionMin);
    }
    if (message.versionMax !== 0) {
      writer.uint32(32).uint32(message.versionMax);
    }
    if (message.platform !== 0) {
      writer.uint32(40).int32(message.platform);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgApplyRemoteConVars_ConVar {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgApplyRemoteConVars_ConVar();
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
        case 3:
          if (tag != 24) {
            break;
          }

          message.versionMin = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.versionMax = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.platform = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgApplyRemoteConVars_ConVar {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
      versionMin: isSet(object.versionMin) ? Number(object.versionMin) : 0,
      versionMax: isSet(object.versionMax) ? Number(object.versionMax) : 0,
      platform: isSet(object.platform) ? eGCPlatformFromJSON(object.platform) : 0,
    };
  },

  toJSON(message: CMsgApplyRemoteConVars_ConVar): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    message.versionMin !== undefined && (obj.versionMin = Math.round(message.versionMin));
    message.versionMax !== undefined && (obj.versionMax = Math.round(message.versionMax));
    message.platform !== undefined && (obj.platform = eGCPlatformToJSON(message.platform));
    return obj;
  },
};

function createBaseCMsgGCToClientApplyRemoteConVars(): CMsgGCToClientApplyRemoteConVars {
  return { msg: undefined };
}

export const CMsgGCToClientApplyRemoteConVars = {
  encode(message: CMsgGCToClientApplyRemoteConVars, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msg !== undefined) {
      CMsgApplyRemoteConVars.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientApplyRemoteConVars {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientApplyRemoteConVars();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.msg = CMsgApplyRemoteConVars.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToClientApplyRemoteConVars {
    return { msg: isSet(object.msg) ? CMsgApplyRemoteConVars.fromJSON(object.msg) : undefined };
  },

  toJSON(message: CMsgGCToClientApplyRemoteConVars): unknown {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg ? CMsgApplyRemoteConVars.toJSON(message.msg) : undefined);
    return obj;
  },
};

function createBaseCMsgGCToServerApplyRemoteConVars(): CMsgGCToServerApplyRemoteConVars {
  return { msg: undefined };
}

export const CMsgGCToServerApplyRemoteConVars = {
  encode(message: CMsgGCToServerApplyRemoteConVars, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msg !== undefined) {
      CMsgApplyRemoteConVars.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToServerApplyRemoteConVars {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToServerApplyRemoteConVars();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.msg = CMsgApplyRemoteConVars.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToServerApplyRemoteConVars {
    return { msg: isSet(object.msg) ? CMsgApplyRemoteConVars.fromJSON(object.msg) : undefined };
  },

  toJSON(message: CMsgGCToServerApplyRemoteConVars): unknown {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg ? CMsgApplyRemoteConVars.toJSON(message.msg) : undefined);
    return obj;
  },
};

function createBaseCMsgClientToGCIntegrityStatus(): CMsgClientToGCIntegrityStatus {
  return { report: "", secureAllowed: false, diagnostics: [] };
}

export const CMsgClientToGCIntegrityStatus = {
  encode(message: CMsgClientToGCIntegrityStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.report !== "") {
      writer.uint32(10).string(message.report);
    }
    if (message.secureAllowed === true) {
      writer.uint32(16).bool(message.secureAllowed);
    }
    for (const v of message.diagnostics) {
      CMsgClientToGCIntegrityStatus_keyvalue.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCIntegrityStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCIntegrityStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.report = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.secureAllowed = reader.bool();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.diagnostics.push(CMsgClientToGCIntegrityStatus_keyvalue.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCIntegrityStatus {
    return {
      report: isSet(object.report) ? String(object.report) : "",
      secureAllowed: isSet(object.secureAllowed) ? Boolean(object.secureAllowed) : false,
      diagnostics: Array.isArray(object?.diagnostics)
        ? object.diagnostics.map((e: any) => CMsgClientToGCIntegrityStatus_keyvalue.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientToGCIntegrityStatus): unknown {
    const obj: any = {};
    message.report !== undefined && (obj.report = message.report);
    message.secureAllowed !== undefined && (obj.secureAllowed = message.secureAllowed);
    if (message.diagnostics) {
      obj.diagnostics = message.diagnostics.map((e) =>
        e ? CMsgClientToGCIntegrityStatus_keyvalue.toJSON(e) : undefined
      );
    } else {
      obj.diagnostics = [];
    }
    return obj;
  },
};

function createBaseCMsgClientToGCIntegrityStatus_keyvalue(): CMsgClientToGCIntegrityStatus_keyvalue {
  return { id: 0, extended: 0, value: "0", stringValue: "" };
}

export const CMsgClientToGCIntegrityStatus_keyvalue = {
  encode(message: CMsgClientToGCIntegrityStatus_keyvalue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.extended !== 0) {
      writer.uint32(16).uint32(message.extended);
    }
    if (message.value !== "0") {
      writer.uint32(24).uint64(message.value);
    }
    if (message.stringValue !== "") {
      writer.uint32(34).string(message.stringValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCIntegrityStatus_keyvalue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCIntegrityStatus_keyvalue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.extended = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.value = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.stringValue = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCIntegrityStatus_keyvalue {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      extended: isSet(object.extended) ? Number(object.extended) : 0,
      value: isSet(object.value) ? String(object.value) : "0",
      stringValue: isSet(object.stringValue) ? String(object.stringValue) : "",
    };
  },

  toJSON(message: CMsgClientToGCIntegrityStatus_keyvalue): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.extended !== undefined && (obj.extended = Math.round(message.extended));
    message.value !== undefined && (obj.value = message.value);
    message.stringValue !== undefined && (obj.stringValue = message.stringValue);
    return obj;
  },
};

function createBaseCMsgClientToGCAggregateMetrics(): CMsgClientToGCAggregateMetrics {
  return { metrics: [] };
}

export const CMsgClientToGCAggregateMetrics = {
  encode(message: CMsgClientToGCAggregateMetrics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.metrics) {
      CMsgClientToGCAggregateMetrics_SingleMetric.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCAggregateMetrics {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCAggregateMetrics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.metrics.push(CMsgClientToGCAggregateMetrics_SingleMetric.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCAggregateMetrics {
    return {
      metrics: Array.isArray(object?.metrics)
        ? object.metrics.map((e: any) => CMsgClientToGCAggregateMetrics_SingleMetric.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientToGCAggregateMetrics): unknown {
    const obj: any = {};
    if (message.metrics) {
      obj.metrics = message.metrics.map((e) => e ? CMsgClientToGCAggregateMetrics_SingleMetric.toJSON(e) : undefined);
    } else {
      obj.metrics = [];
    }
    return obj;
  },
};

function createBaseCMsgClientToGCAggregateMetrics_SingleMetric(): CMsgClientToGCAggregateMetrics_SingleMetric {
  return { metricName: "", metricCount: 0 };
}

export const CMsgClientToGCAggregateMetrics_SingleMetric = {
  encode(message: CMsgClientToGCAggregateMetrics_SingleMetric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metricName !== "") {
      writer.uint32(10).string(message.metricName);
    }
    if (message.metricCount !== 0) {
      writer.uint32(16).uint32(message.metricCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCAggregateMetrics_SingleMetric {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCAggregateMetrics_SingleMetric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.metricName = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.metricCount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCAggregateMetrics_SingleMetric {
    return {
      metricName: isSet(object.metricName) ? String(object.metricName) : "",
      metricCount: isSet(object.metricCount) ? Number(object.metricCount) : 0,
    };
  },

  toJSON(message: CMsgClientToGCAggregateMetrics_SingleMetric): unknown {
    const obj: any = {};
    message.metricName !== undefined && (obj.metricName = message.metricName);
    message.metricCount !== undefined && (obj.metricCount = Math.round(message.metricCount));
    return obj;
  },
};

function createBaseCMsgGCToClientAggregateMetricsBackoff(): CMsgGCToClientAggregateMetricsBackoff {
  return { uploadRateModifier: 0 };
}

export const CMsgGCToClientAggregateMetricsBackoff = {
  encode(message: CMsgGCToClientAggregateMetricsBackoff, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uploadRateModifier !== 0) {
      writer.uint32(13).float(message.uploadRateModifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientAggregateMetricsBackoff {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientAggregateMetricsBackoff();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.uploadRateModifier = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToClientAggregateMetricsBackoff {
    return { uploadRateModifier: isSet(object.uploadRateModifier) ? Number(object.uploadRateModifier) : 0 };
  },

  toJSON(message: CMsgGCToClientAggregateMetricsBackoff): unknown {
    const obj: any = {};
    message.uploadRateModifier !== undefined && (obj.uploadRateModifier = message.uploadRateModifier);
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
