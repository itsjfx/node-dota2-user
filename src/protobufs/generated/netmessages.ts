/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CMsgQAngle, CMsgVector, CSVCMsgGameSessionConfiguration } from "./networkbasetypes";

export enum CLCMessages {
  clc_ClientInfo = 20,
  clc_Move = 21,
  clc_VoiceData = 22,
  clc_BaselineAck = 23,
  clc_ListenEvents = 24,
  clc_RespondCvarValue = 25,
  clc_FileCRCCheck = 26,
  clc_LoadingProgress = 27,
  clc_SplitPlayerConnect = 28,
  clc_ClientMessage = 29,
  clc_SplitPlayerDisconnect = 30,
  clc_ServerStatus = 31,
  clc_ServerPing = 32,
  clc_RequestPause = 33,
  clc_CmdKeyValues = 34,
  clc_RconServerDetails = 35,
  clc_HltvReplay = 36,
}

export function cLCMessagesFromJSON(object: any): CLCMessages {
  switch (object) {
    case 20:
    case "clc_ClientInfo":
      return CLCMessages.clc_ClientInfo;
    case 21:
    case "clc_Move":
      return CLCMessages.clc_Move;
    case 22:
    case "clc_VoiceData":
      return CLCMessages.clc_VoiceData;
    case 23:
    case "clc_BaselineAck":
      return CLCMessages.clc_BaselineAck;
    case 24:
    case "clc_ListenEvents":
      return CLCMessages.clc_ListenEvents;
    case 25:
    case "clc_RespondCvarValue":
      return CLCMessages.clc_RespondCvarValue;
    case 26:
    case "clc_FileCRCCheck":
      return CLCMessages.clc_FileCRCCheck;
    case 27:
    case "clc_LoadingProgress":
      return CLCMessages.clc_LoadingProgress;
    case 28:
    case "clc_SplitPlayerConnect":
      return CLCMessages.clc_SplitPlayerConnect;
    case 29:
    case "clc_ClientMessage":
      return CLCMessages.clc_ClientMessage;
    case 30:
    case "clc_SplitPlayerDisconnect":
      return CLCMessages.clc_SplitPlayerDisconnect;
    case 31:
    case "clc_ServerStatus":
      return CLCMessages.clc_ServerStatus;
    case 32:
    case "clc_ServerPing":
      return CLCMessages.clc_ServerPing;
    case 33:
    case "clc_RequestPause":
      return CLCMessages.clc_RequestPause;
    case 34:
    case "clc_CmdKeyValues":
      return CLCMessages.clc_CmdKeyValues;
    case 35:
    case "clc_RconServerDetails":
      return CLCMessages.clc_RconServerDetails;
    case 36:
    case "clc_HltvReplay":
      return CLCMessages.clc_HltvReplay;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CLCMessages");
  }
}

export function cLCMessagesToJSON(object: CLCMessages): string {
  switch (object) {
    case CLCMessages.clc_ClientInfo:
      return "clc_ClientInfo";
    case CLCMessages.clc_Move:
      return "clc_Move";
    case CLCMessages.clc_VoiceData:
      return "clc_VoiceData";
    case CLCMessages.clc_BaselineAck:
      return "clc_BaselineAck";
    case CLCMessages.clc_ListenEvents:
      return "clc_ListenEvents";
    case CLCMessages.clc_RespondCvarValue:
      return "clc_RespondCvarValue";
    case CLCMessages.clc_FileCRCCheck:
      return "clc_FileCRCCheck";
    case CLCMessages.clc_LoadingProgress:
      return "clc_LoadingProgress";
    case CLCMessages.clc_SplitPlayerConnect:
      return "clc_SplitPlayerConnect";
    case CLCMessages.clc_ClientMessage:
      return "clc_ClientMessage";
    case CLCMessages.clc_SplitPlayerDisconnect:
      return "clc_SplitPlayerDisconnect";
    case CLCMessages.clc_ServerStatus:
      return "clc_ServerStatus";
    case CLCMessages.clc_ServerPing:
      return "clc_ServerPing";
    case CLCMessages.clc_RequestPause:
      return "clc_RequestPause";
    case CLCMessages.clc_CmdKeyValues:
      return "clc_CmdKeyValues";
    case CLCMessages.clc_RconServerDetails:
      return "clc_RconServerDetails";
    case CLCMessages.clc_HltvReplay:
      return "clc_HltvReplay";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CLCMessages");
  }
}

export enum SVCMessages {
  svc_ServerInfo = 40,
  svc_FlattenedSerializer = 41,
  svc_ClassInfo = 42,
  svc_SetPause = 43,
  svc_CreateStringTable = 44,
  svc_UpdateStringTable = 45,
  svc_VoiceInit = 46,
  svc_VoiceData = 47,
  svc_Print = 48,
  svc_Sounds = 49,
  svc_SetView = 50,
  svc_ClearAllStringTables = 51,
  svc_CmdKeyValues = 52,
  svc_BSPDecal = 53,
  svc_SplitScreen = 54,
  svc_PacketEntities = 55,
  svc_Prefetch = 56,
  svc_Menu = 57,
  svc_GetCvarValue = 58,
  svc_StopSound = 59,
  svc_PeerList = 60,
  svc_PacketReliable = 61,
  svc_HLTVStatus = 62,
  svc_ServerSteamID = 63,
  svc_FullFrameSplit = 70,
  svc_RconServerDetails = 71,
  svc_UserMessage = 72,
  svc_HltvReplay = 73,
  svc_Broadcast_Command = 74,
  svc_HltvFixupOperatorStatus = 75,
}

export function sVCMessagesFromJSON(object: any): SVCMessages {
  switch (object) {
    case 40:
    case "svc_ServerInfo":
      return SVCMessages.svc_ServerInfo;
    case 41:
    case "svc_FlattenedSerializer":
      return SVCMessages.svc_FlattenedSerializer;
    case 42:
    case "svc_ClassInfo":
      return SVCMessages.svc_ClassInfo;
    case 43:
    case "svc_SetPause":
      return SVCMessages.svc_SetPause;
    case 44:
    case "svc_CreateStringTable":
      return SVCMessages.svc_CreateStringTable;
    case 45:
    case "svc_UpdateStringTable":
      return SVCMessages.svc_UpdateStringTable;
    case 46:
    case "svc_VoiceInit":
      return SVCMessages.svc_VoiceInit;
    case 47:
    case "svc_VoiceData":
      return SVCMessages.svc_VoiceData;
    case 48:
    case "svc_Print":
      return SVCMessages.svc_Print;
    case 49:
    case "svc_Sounds":
      return SVCMessages.svc_Sounds;
    case 50:
    case "svc_SetView":
      return SVCMessages.svc_SetView;
    case 51:
    case "svc_ClearAllStringTables":
      return SVCMessages.svc_ClearAllStringTables;
    case 52:
    case "svc_CmdKeyValues":
      return SVCMessages.svc_CmdKeyValues;
    case 53:
    case "svc_BSPDecal":
      return SVCMessages.svc_BSPDecal;
    case 54:
    case "svc_SplitScreen":
      return SVCMessages.svc_SplitScreen;
    case 55:
    case "svc_PacketEntities":
      return SVCMessages.svc_PacketEntities;
    case 56:
    case "svc_Prefetch":
      return SVCMessages.svc_Prefetch;
    case 57:
    case "svc_Menu":
      return SVCMessages.svc_Menu;
    case 58:
    case "svc_GetCvarValue":
      return SVCMessages.svc_GetCvarValue;
    case 59:
    case "svc_StopSound":
      return SVCMessages.svc_StopSound;
    case 60:
    case "svc_PeerList":
      return SVCMessages.svc_PeerList;
    case 61:
    case "svc_PacketReliable":
      return SVCMessages.svc_PacketReliable;
    case 62:
    case "svc_HLTVStatus":
      return SVCMessages.svc_HLTVStatus;
    case 63:
    case "svc_ServerSteamID":
      return SVCMessages.svc_ServerSteamID;
    case 70:
    case "svc_FullFrameSplit":
      return SVCMessages.svc_FullFrameSplit;
    case 71:
    case "svc_RconServerDetails":
      return SVCMessages.svc_RconServerDetails;
    case 72:
    case "svc_UserMessage":
      return SVCMessages.svc_UserMessage;
    case 73:
    case "svc_HltvReplay":
      return SVCMessages.svc_HltvReplay;
    case 74:
    case "svc_Broadcast_Command":
      return SVCMessages.svc_Broadcast_Command;
    case 75:
    case "svc_HltvFixupOperatorStatus":
      return SVCMessages.svc_HltvFixupOperatorStatus;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum SVCMessages");
  }
}

export function sVCMessagesToJSON(object: SVCMessages): string {
  switch (object) {
    case SVCMessages.svc_ServerInfo:
      return "svc_ServerInfo";
    case SVCMessages.svc_FlattenedSerializer:
      return "svc_FlattenedSerializer";
    case SVCMessages.svc_ClassInfo:
      return "svc_ClassInfo";
    case SVCMessages.svc_SetPause:
      return "svc_SetPause";
    case SVCMessages.svc_CreateStringTable:
      return "svc_CreateStringTable";
    case SVCMessages.svc_UpdateStringTable:
      return "svc_UpdateStringTable";
    case SVCMessages.svc_VoiceInit:
      return "svc_VoiceInit";
    case SVCMessages.svc_VoiceData:
      return "svc_VoiceData";
    case SVCMessages.svc_Print:
      return "svc_Print";
    case SVCMessages.svc_Sounds:
      return "svc_Sounds";
    case SVCMessages.svc_SetView:
      return "svc_SetView";
    case SVCMessages.svc_ClearAllStringTables:
      return "svc_ClearAllStringTables";
    case SVCMessages.svc_CmdKeyValues:
      return "svc_CmdKeyValues";
    case SVCMessages.svc_BSPDecal:
      return "svc_BSPDecal";
    case SVCMessages.svc_SplitScreen:
      return "svc_SplitScreen";
    case SVCMessages.svc_PacketEntities:
      return "svc_PacketEntities";
    case SVCMessages.svc_Prefetch:
      return "svc_Prefetch";
    case SVCMessages.svc_Menu:
      return "svc_Menu";
    case SVCMessages.svc_GetCvarValue:
      return "svc_GetCvarValue";
    case SVCMessages.svc_StopSound:
      return "svc_StopSound";
    case SVCMessages.svc_PeerList:
      return "svc_PeerList";
    case SVCMessages.svc_PacketReliable:
      return "svc_PacketReliable";
    case SVCMessages.svc_HLTVStatus:
      return "svc_HLTVStatus";
    case SVCMessages.svc_ServerSteamID:
      return "svc_ServerSteamID";
    case SVCMessages.svc_FullFrameSplit:
      return "svc_FullFrameSplit";
    case SVCMessages.svc_RconServerDetails:
      return "svc_RconServerDetails";
    case SVCMessages.svc_UserMessage:
      return "svc_UserMessage";
    case SVCMessages.svc_HltvReplay:
      return "svc_HltvReplay";
    case SVCMessages.svc_Broadcast_Command:
      return "svc_Broadcast_Command";
    case SVCMessages.svc_HltvFixupOperatorStatus:
      return "svc_HltvFixupOperatorStatus";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum SVCMessages");
  }
}

export enum VoiceDataFormatT {
  VOICEDATA_FORMAT_STEAM = 0,
  VOICEDATA_FORMAT_ENGINE = 1,
}

export function voiceDataFormatTFromJSON(object: any): VoiceDataFormatT {
  switch (object) {
    case 0:
    case "VOICEDATA_FORMAT_STEAM":
      return VoiceDataFormatT.VOICEDATA_FORMAT_STEAM;
    case 1:
    case "VOICEDATA_FORMAT_ENGINE":
      return VoiceDataFormatT.VOICEDATA_FORMAT_ENGINE;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum VoiceDataFormatT");
  }
}

export function voiceDataFormatTToJSON(object: VoiceDataFormatT): string {
  switch (object) {
    case VoiceDataFormatT.VOICEDATA_FORMAT_STEAM:
      return "VOICEDATA_FORMAT_STEAM";
    case VoiceDataFormatT.VOICEDATA_FORMAT_ENGINE:
      return "VOICEDATA_FORMAT_ENGINE";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum VoiceDataFormatT");
  }
}

export enum RequestPauseT {
  RP_PAUSE = 0,
  RP_UNPAUSE = 1,
  RP_TOGGLEPAUSE = 2,
}

export function requestPauseTFromJSON(object: any): RequestPauseT {
  switch (object) {
    case 0:
    case "RP_PAUSE":
      return RequestPauseT.RP_PAUSE;
    case 1:
    case "RP_UNPAUSE":
      return RequestPauseT.RP_UNPAUSE;
    case 2:
    case "RP_TOGGLEPAUSE":
      return RequestPauseT.RP_TOGGLEPAUSE;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum RequestPauseT");
  }
}

export function requestPauseTToJSON(object: RequestPauseT): string {
  switch (object) {
    case RequestPauseT.RP_PAUSE:
      return "RP_PAUSE";
    case RequestPauseT.RP_UNPAUSE:
      return "RP_UNPAUSE";
    case RequestPauseT.RP_TOGGLEPAUSE:
      return "RP_TOGGLEPAUSE";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum RequestPauseT");
  }
}

export enum PrefetchType {
  PFT_SOUND = 0,
}

export function prefetchTypeFromJSON(object: any): PrefetchType {
  switch (object) {
    case 0:
    case "PFT_SOUND":
      return PrefetchType.PFT_SOUND;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum PrefetchType");
  }
}

export function prefetchTypeToJSON(object: PrefetchType): string {
  switch (object) {
    case PrefetchType.PFT_SOUND:
      return "PFT_SOUND";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum PrefetchType");
  }
}

export enum ESplitScreenMessageType {
  MSG_SPLITSCREEN_ADDUSER = 0,
  MSG_SPLITSCREEN_REMOVEUSER = 1,
}

export function eSplitScreenMessageTypeFromJSON(object: any): ESplitScreenMessageType {
  switch (object) {
    case 0:
    case "MSG_SPLITSCREEN_ADDUSER":
      return ESplitScreenMessageType.MSG_SPLITSCREEN_ADDUSER;
    case 1:
    case "MSG_SPLITSCREEN_REMOVEUSER":
      return ESplitScreenMessageType.MSG_SPLITSCREEN_REMOVEUSER;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESplitScreenMessageType");
  }
}

export function eSplitScreenMessageTypeToJSON(object: ESplitScreenMessageType): string {
  switch (object) {
    case ESplitScreenMessageType.MSG_SPLITSCREEN_ADDUSER:
      return "MSG_SPLITSCREEN_ADDUSER";
    case ESplitScreenMessageType.MSG_SPLITSCREEN_REMOVEUSER:
      return "MSG_SPLITSCREEN_REMOVEUSER";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESplitScreenMessageType");
  }
}

export enum EQueryCvarValueStatus {
  eQueryCvarValueStatus_ValueIntact = 0,
  eQueryCvarValueStatus_CvarNotFound = 1,
  eQueryCvarValueStatus_NotACvar = 2,
  eQueryCvarValueStatus_CvarProtected = 3,
}

export function eQueryCvarValueStatusFromJSON(object: any): EQueryCvarValueStatus {
  switch (object) {
    case 0:
    case "eQueryCvarValueStatus_ValueIntact":
      return EQueryCvarValueStatus.eQueryCvarValueStatus_ValueIntact;
    case 1:
    case "eQueryCvarValueStatus_CvarNotFound":
      return EQueryCvarValueStatus.eQueryCvarValueStatus_CvarNotFound;
    case 2:
    case "eQueryCvarValueStatus_NotACvar":
      return EQueryCvarValueStatus.eQueryCvarValueStatus_NotACvar;
    case 3:
    case "eQueryCvarValueStatus_CvarProtected":
      return EQueryCvarValueStatus.eQueryCvarValueStatus_CvarProtected;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EQueryCvarValueStatus");
  }
}

export function eQueryCvarValueStatusToJSON(object: EQueryCvarValueStatus): string {
  switch (object) {
    case EQueryCvarValueStatus.eQueryCvarValueStatus_ValueIntact:
      return "eQueryCvarValueStatus_ValueIntact";
    case EQueryCvarValueStatus.eQueryCvarValueStatus_CvarNotFound:
      return "eQueryCvarValueStatus_CvarNotFound";
    case EQueryCvarValueStatus.eQueryCvarValueStatus_NotACvar:
      return "eQueryCvarValueStatus_NotACvar";
    case EQueryCvarValueStatus.eQueryCvarValueStatus_CvarProtected:
      return "eQueryCvarValueStatus_CvarProtected";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EQueryCvarValueStatus");
  }
}

export enum dialogType {
  DIALOG_MSG = 0,
  DIALOG_MENU = 1,
  DIALOG_TEXT = 2,
  DIALOG_ENTRY = 3,
  DIALOG_ASKCONNECT = 4,
}

export function dialogTypeFromJSON(object: any): dialogType {
  switch (object) {
    case 0:
    case "DIALOG_MSG":
      return dialogType.DIALOG_MSG;
    case 1:
    case "DIALOG_MENU":
      return dialogType.DIALOG_MENU;
    case 2:
    case "DIALOG_TEXT":
      return dialogType.DIALOG_TEXT;
    case 3:
    case "DIALOG_ENTRY":
      return dialogType.DIALOG_ENTRY;
    case 4:
    case "DIALOG_ASKCONNECT":
      return dialogType.DIALOG_ASKCONNECT;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dialogType");
  }
}

export function dialogTypeToJSON(object: dialogType): string {
  switch (object) {
    case dialogType.DIALOG_MSG:
      return "DIALOG_MSG";
    case dialogType.DIALOG_MENU:
      return "DIALOG_MENU";
    case dialogType.DIALOG_TEXT:
      return "DIALOG_TEXT";
    case dialogType.DIALOG_ENTRY:
      return "DIALOG_ENTRY";
    case dialogType.DIALOG_ASKCONNECT:
      return "DIALOG_ASKCONNECT";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dialogType");
  }
}

export enum SVCMessagesLowFrequency {
  svc_dummy = 600,
}

export function sVCMessagesLowFrequencyFromJSON(object: any): SVCMessagesLowFrequency {
  switch (object) {
    case 600:
    case "svc_dummy":
      return SVCMessagesLowFrequency.svc_dummy;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum SVCMessagesLowFrequency");
  }
}

export function sVCMessagesLowFrequencyToJSON(object: SVCMessagesLowFrequency): string {
  switch (object) {
    case SVCMessagesLowFrequency.svc_dummy:
      return "svc_dummy";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum SVCMessagesLowFrequency");
  }
}

export enum BidirectionalMessages {
  bi_RebroadcastGameEvent = 16,
  bi_RebroadcastSource = 17,
  bi_GameEvent = 18,
}

export function bidirectionalMessagesFromJSON(object: any): BidirectionalMessages {
  switch (object) {
    case 16:
    case "bi_RebroadcastGameEvent":
      return BidirectionalMessages.bi_RebroadcastGameEvent;
    case 17:
    case "bi_RebroadcastSource":
      return BidirectionalMessages.bi_RebroadcastSource;
    case 18:
    case "bi_GameEvent":
      return BidirectionalMessages.bi_GameEvent;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum BidirectionalMessages");
  }
}

export function bidirectionalMessagesToJSON(object: BidirectionalMessages): string {
  switch (object) {
    case BidirectionalMessages.bi_RebroadcastGameEvent:
      return "bi_RebroadcastGameEvent";
    case BidirectionalMessages.bi_RebroadcastSource:
      return "bi_RebroadcastSource";
    case BidirectionalMessages.bi_GameEvent:
      return "bi_GameEvent";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum BidirectionalMessages");
  }
}

export enum BidirectionalMessagesLowFrequency {
  bi_RelayInfo = 700,
  bi_RelayPacket = 701,
}

export function bidirectionalMessagesLowFrequencyFromJSON(object: any): BidirectionalMessagesLowFrequency {
  switch (object) {
    case 700:
    case "bi_RelayInfo":
      return BidirectionalMessagesLowFrequency.bi_RelayInfo;
    case 701:
    case "bi_RelayPacket":
      return BidirectionalMessagesLowFrequency.bi_RelayPacket;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum BidirectionalMessagesLowFrequency",
      );
  }
}

export function bidirectionalMessagesLowFrequencyToJSON(object: BidirectionalMessagesLowFrequency): string {
  switch (object) {
    case BidirectionalMessagesLowFrequency.bi_RelayInfo:
      return "bi_RelayInfo";
    case BidirectionalMessagesLowFrequency.bi_RelayPacket:
      return "bi_RelayPacket";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum BidirectionalMessagesLowFrequency",
      );
  }
}

export enum ReplayEventTypeT {
  REPLAY_EVENT_CANCEL = 0,
  REPLAY_EVENT_DEATH = 1,
  REPLAY_EVENT_GENERIC = 2,
  REPLAY_EVENT_STUCK_NEED_FULL_UPDATE = 3,
  REPLAY_EVENT_VICTORY = 4,
}

export function replayEventTypeTFromJSON(object: any): ReplayEventTypeT {
  switch (object) {
    case 0:
    case "REPLAY_EVENT_CANCEL":
      return ReplayEventTypeT.REPLAY_EVENT_CANCEL;
    case 1:
    case "REPLAY_EVENT_DEATH":
      return ReplayEventTypeT.REPLAY_EVENT_DEATH;
    case 2:
    case "REPLAY_EVENT_GENERIC":
      return ReplayEventTypeT.REPLAY_EVENT_GENERIC;
    case 3:
    case "REPLAY_EVENT_STUCK_NEED_FULL_UPDATE":
      return ReplayEventTypeT.REPLAY_EVENT_STUCK_NEED_FULL_UPDATE;
    case 4:
    case "REPLAY_EVENT_VICTORY":
      return ReplayEventTypeT.REPLAY_EVENT_VICTORY;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ReplayEventTypeT");
  }
}

export function replayEventTypeTToJSON(object: ReplayEventTypeT): string {
  switch (object) {
    case ReplayEventTypeT.REPLAY_EVENT_CANCEL:
      return "REPLAY_EVENT_CANCEL";
    case ReplayEventTypeT.REPLAY_EVENT_DEATH:
      return "REPLAY_EVENT_DEATH";
    case ReplayEventTypeT.REPLAY_EVENT_GENERIC:
      return "REPLAY_EVENT_GENERIC";
    case ReplayEventTypeT.REPLAY_EVENT_STUCK_NEED_FULL_UPDATE:
      return "REPLAY_EVENT_STUCK_NEED_FULL_UPDATE";
    case ReplayEventTypeT.REPLAY_EVENT_VICTORY:
      return "REPLAY_EVENT_VICTORY";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ReplayEventTypeT");
  }
}

export interface CCLCMsgClientInfo {
  sendTableCrc: number;
  serverCount: number;
  isHltv: boolean;
  friendsId: number;
  friendsName: string;
}

export interface CCLCMsgMove {
  data: Buffer;
  commandNumber: number;
  numCommands: number;
}

export interface CMsgVoiceAudio {
  format: VoiceDataFormatT;
  voiceData: Buffer;
  sequenceBytes: number;
  sectionNumber: number;
  sampleRate: number;
  uncompressedSampleOffset: number;
}

export interface CCLCMsgVoiceData {
  audio: CMsgVoiceAudio | undefined;
  xuid: string;
  tick: number;
}

export interface CCLCMsgBaselineAck {
  baselineTick: number;
  baselineNr: number;
}

export interface CCLCMsgListenEvents {
  eventMask: number[];
}

export interface CCLCMsgRespondCvarValue {
  cookie: number;
  statusCode: number;
  name: string;
  value: string;
}

export interface CCLCMsgFileCRCCheck {
  codePath: number;
  path: string;
  codeFilename: number;
  filename: string;
  crc: number;
}

export interface CCLCMsgLoadingProgress {
  progress: number;
}

export interface CCLCMsgSplitPlayerConnect {
  playername: string;
}

export interface CCLCMsgClientMessage {
  msgType: number;
  data: Buffer;
}

export interface CCLCMsgSplitPlayerDisconnect {
  slot: number;
}

export interface CCLCMsgServerStatus {
  simplified: boolean;
}

export interface CCLCMsgServerPing {
}

export interface CCLCMsgRequestPause {
  pauseType: RequestPauseT;
  pauseGroup: number;
}

export interface CCLCMsgCmdKeyValues {
  data: Buffer;
}

export interface CCLCMsgRconServerDetails {
  token: Buffer;
}

export interface CSVCMsgServerInfo {
  protocol: number;
  serverCount: number;
  isDedicated: boolean;
  isHltv: boolean;
  cOs: number;
  maxClients: number;
  maxClasses: number;
  playerSlot: number;
  tickInterval: number;
  gameDir: string;
  mapName: string;
  skyName: string;
  hostName: string;
  addonName: string;
  gameSessionConfig: CSVCMsgGameSessionConfiguration | undefined;
  gameSessionManifest: Buffer;
}

export interface CSVCMsgClassInfo {
  createOnClient: boolean;
  classes: CSVCMsgClassInfo_classT[];
}

export interface CSVCMsgClassInfo_classT {
  classId: number;
  dataTableName: string;
  className: string;
}

export interface CSVCMsgSetPause {
  paused: boolean;
}

export interface CSVCMsgVoiceInit {
  quality: number;
  codec: string;
  version: number;
}

export interface CSVCMsgPrint {
  text: string;
}

export interface CSVCMsgSounds {
  reliableSound: boolean;
  sounds: CSVCMsgSounds_sounddataT[];
}

export interface CSVCMsgSounds_sounddataT {
  originX: number;
  originY: number;
  originZ: number;
  volume: number;
  delayValue: number;
  sequenceNumber: number;
  entityIndex: number;
  channel: number;
  pitch: number;
  flags: number;
  soundNum: number;
  soundNumHandle: number;
  speakerEntity: number;
  randomSeed: number;
  soundLevel: number;
  isSentence: boolean;
  isAmbient: boolean;
  guid: number;
  soundResourceId: string;
}

export interface CSVCMsgPrefetch {
  soundIndex: number;
  resourceType: PrefetchType;
}

export interface CSVCMsgSetView {
  entityIndex: number;
  slot: number;
}

export interface CSVCMsgFixAngle {
  relative: boolean;
  angle: CMsgQAngle | undefined;
}

export interface CSVCMsgCrosshairAngle {
  angle: CMsgQAngle | undefined;
}

export interface CSVCMsgBSPDecal {
  pos: CMsgVector | undefined;
  decalTextureIndex: number;
  entityIndex: number;
  modelIndex: number;
  lowPriority: boolean;
}

export interface CSVCMsgSplitScreen {
  type: ESplitScreenMessageType;
  slot: number;
  playerIndex: number;
}

export interface CSVCMsgGetCvarValue {
  cookie: number;
  cvarName: string;
}

export interface CSVCMsgMenu {
  dialogType: number;
  menuKeyValues: Buffer;
}

export interface CSVCMsgUserMessage {
  msgType: number;
  msgData: Buffer;
  passthrough: number;
}

export interface CSVCMsgSendTable {
  isEnd: boolean;
  netTableName: string;
  needsDecoder: boolean;
  props: CSVCMsgSendTable_sendpropT[];
}

export interface CSVCMsgSendTable_sendpropT {
  type: number;
  varName: string;
  flags: number;
  priority: number;
  dtName: string;
  numElements: number;
  lowValue: number;
  highValue: number;
  numBits: number;
}

export interface CSVCMsgGameEventList {
  descriptors: CSVCMsgGameEventList_descriptorT[];
}

export interface CSVCMsgGameEventList_keyT {
  type: number;
  name: string;
}

export interface CSVCMsgGameEventList_descriptorT {
  eventid: number;
  name: string;
  keys: CSVCMsgGameEventList_keyT[];
}

export interface CSVCMsgPacketEntities {
  maxEntries: number;
  updatedEntries: number;
  isDelta: boolean;
  updateBaseline: boolean;
  baseline: number;
  deltaFrom: number;
  entityData: Buffer;
  pendingFullFrame: boolean;
  activeSpawngroupHandle: number;
  maxSpawngroupCreationsequence: number;
  lastCmdNumber: number;
  serverTick: number;
  serializedEntities: Buffer;
  commandQueueInfo: CSVCMsgPacketEntities_commandQueueInfoT | undefined;
  alternateBaselines: CSVCMsgPacketEntities_alternateBaselineT[];
}

export interface CSVCMsgPacketEntities_commandQueueInfoT {
  commandsQueued: number;
  commandQueueDesiredSize: number;
  starvedCommandTicks: number;
  timeDilationPercent: number;
  discardedCommandTicks: number;
}

export interface CSVCMsgPacketEntities_alternateBaselineT {
  entityIndex: number;
  baselineIndex: number;
}

export interface CSVCMsgTempEntities {
  reliable: boolean;
  numEntries: number;
  entityData: Buffer;
}

export interface CSVCMsgCreateStringTable {
  name: string;
  numEntries: number;
  userDataFixedSize: boolean;
  userDataSize: number;
  userDataSizeBits: number;
  flags: number;
  stringData: Buffer;
  uncompressedSize: number;
  dataCompressed: boolean;
  usingVarintBitcounts: boolean;
}

export interface CSVCMsgUpdateStringTable {
  tableId: number;
  numChangedEntries: number;
  stringData: Buffer;
}

export interface CSVCMsgVoiceData {
  audio: CMsgVoiceAudio | undefined;
  client: number;
  proximity: boolean;
  xuid: string;
  audibleMask: number;
  tick: number;
}

export interface CSVCMsgPacketReliable {
  tick: number;
  messagessize: number;
  state: boolean;
}

export interface CSVCMsgFullFrameSplit {
  tick: number;
  section: number;
  total: number;
  data: Buffer;
}

export interface CSVCMsgHLTVStatus {
  master: string;
  clients: number;
  slots: number;
  proxies: number;
}

export interface CSVCMsgServerSteamID {
  steamId: string;
}

export interface CSVCMsgCmdKeyValues {
  data: Buffer;
}

export interface CSVCMsgRconServerDetails {
  token: Buffer;
  details: string;
}

export interface CMsgIPCAddress {
  computerGuid: string;
  processId: number;
}

export interface CMsgServerPeer {
  playerSlot: number;
  steamid: string;
  ipc: CMsgIPCAddress | undefined;
  theyHearYou: boolean;
  youHearThem: boolean;
  isListenserverHost: boolean;
}

export interface CSVCMsgPeerList {
  peer: CMsgServerPeer[];
}

export interface CSVCMsgClearAllStringTables {
  mapname: string;
}

export interface ProtoFlattenedSerializerFieldT {
  varTypeSym: number;
  varNameSym: number;
  bitCount: number;
  lowValue: number;
  highValue: number;
  encodeFlags: number;
  fieldSerializerNameSym: number;
  fieldSerializerVersion: number;
  sendNodeSym: number;
  varEncoderSym: number;
}

export interface ProtoFlattenedSerializerT {
  serializerNameSym: number;
  serializerVersion: number;
  fieldsIndex: number[];
}

export interface CSVCMsgFlattenedSerializer {
  serializers: ProtoFlattenedSerializerT[];
  symbols: string[];
  fields: ProtoFlattenedSerializerFieldT[];
}

export interface CSVCMsgStopSound {
  guid: number;
}

export interface CBidirMsgRebroadcastGameEvent {
  posttoserver: boolean;
  buftype: number;
  clientbitcount: number;
  receivingclients: string;
}

export interface CBidirMsgRebroadcastSource {
  eventsource: number;
}

export interface CMsgServerNetworkStats {
  dedicated: boolean;
  cpuUsage: number;
  memoryUsedMb: number;
  memoryFreeMb: number;
  uptime: number;
  spawnCount: number;
  numClients: number;
  numBots: number;
  numSpectators: number;
  numTvRelays: number;
  fps: number;
  ports: CMsgServerNetworkStats_Port[];
  avgLatencyOut: number;
  avgLatencyIn: number;
  avgPacketsOut: number;
  avgPacketsIn: number;
  avgLossOut: number;
  avgLossIn: number;
  avgDataOut: number;
  avgDataIn: number;
  totalDataIn: string;
  totalPacketsIn: string;
  totalDataOut: string;
  totalPacketsOut: string;
  players: CMsgServerNetworkStats_Player[];
}

export interface CMsgServerNetworkStats_Port {
  port: number;
  name: string;
}

export interface CMsgServerNetworkStats_Player {
  steamid: string;
  remoteAddr: string;
  pingStddevMs: number;
  pingAvgMs: number;
  packetLossPct: number;
  isBot: boolean;
}

export interface CSVCMsgHltvReplay {
  delay: number;
  primaryTarget: number;
  replayStopAt: number;
  replayStartAt: number;
  replaySlowdownBegin: number;
  replaySlowdownEnd: number;
  replaySlowdownRate: number;
  reason: number;
}

export interface CCLCMsgHltvReplay {
  request: number;
  slowdownLength: number;
  slowdownRate: number;
  primaryTarget: number;
  eventTime: number;
}

export interface CSVCMsgBroadcastCommand {
  cmd: string;
}

export interface CCLCMsgHltvFixupOperatorTick {
  tick: number;
  propsData: Buffer;
  origin: CMsgVector | undefined;
  eyeAngles: CMsgQAngle | undefined;
  observerMode: number;
  cameramanScoreboard: boolean;
  observerTarget: number;
  viewOffset: CMsgVector | undefined;
}

export interface CSVCMsgHltvFixupOperatorStatus {
  mode: number;
  overrideOperatorName: string;
}

function createBaseCCLCMsgClientInfo(): CCLCMsgClientInfo {
  return { sendTableCrc: 0, serverCount: 0, isHltv: false, friendsId: 0, friendsName: "" };
}

export const CCLCMsgClientInfo = {
  encode(message: CCLCMsgClientInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sendTableCrc !== 0) {
      writer.uint32(13).fixed32(message.sendTableCrc);
    }
    if (message.serverCount !== 0) {
      writer.uint32(16).uint32(message.serverCount);
    }
    if (message.isHltv === true) {
      writer.uint32(24).bool(message.isHltv);
    }
    if (message.friendsId !== 0) {
      writer.uint32(40).uint32(message.friendsId);
    }
    if (message.friendsName !== "") {
      writer.uint32(50).string(message.friendsName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCLCMsgClientInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCLCMsgClientInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.sendTableCrc = reader.fixed32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.serverCount = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isHltv = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.friendsId = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.friendsName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCLCMsgClientInfo {
    return {
      sendTableCrc: isSet(object.sendTableCrc) ? Number(object.sendTableCrc) : 0,
      serverCount: isSet(object.serverCount) ? Number(object.serverCount) : 0,
      isHltv: isSet(object.isHltv) ? Boolean(object.isHltv) : false,
      friendsId: isSet(object.friendsId) ? Number(object.friendsId) : 0,
      friendsName: isSet(object.friendsName) ? String(object.friendsName) : "",
    };
  },

  toJSON(message: CCLCMsgClientInfo): unknown {
    const obj: any = {};
    message.sendTableCrc !== undefined && (obj.sendTableCrc = Math.round(message.sendTableCrc));
    message.serverCount !== undefined && (obj.serverCount = Math.round(message.serverCount));
    message.isHltv !== undefined && (obj.isHltv = message.isHltv);
    message.friendsId !== undefined && (obj.friendsId = Math.round(message.friendsId));
    message.friendsName !== undefined && (obj.friendsName = message.friendsName);
    return obj;
  },

  create(base?: DeepPartial<CCLCMsgClientInfo>): CCLCMsgClientInfo {
    return CCLCMsgClientInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CCLCMsgClientInfo>): CCLCMsgClientInfo {
    const message = createBaseCCLCMsgClientInfo();
    message.sendTableCrc = object.sendTableCrc ?? 0;
    message.serverCount = object.serverCount ?? 0;
    message.isHltv = object.isHltv ?? false;
    message.friendsId = object.friendsId ?? 0;
    message.friendsName = object.friendsName ?? "";
    return message;
  },
};

function createBaseCCLCMsgMove(): CCLCMsgMove {
  return { data: Buffer.alloc(0), commandNumber: 0, numCommands: 0 };
}

export const CCLCMsgMove = {
  encode(message: CCLCMsgMove, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.commandNumber !== 0) {
      writer.uint32(32).uint32(message.commandNumber);
    }
    if (message.numCommands !== 0) {
      writer.uint32(40).uint32(message.numCommands);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCLCMsgMove {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCLCMsgMove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag != 26) {
            break;
          }

          message.data = reader.bytes() as Buffer;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.commandNumber = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.numCommands = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCLCMsgMove {
    return {
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
      commandNumber: isSet(object.commandNumber) ? Number(object.commandNumber) : 0,
      numCommands: isSet(object.numCommands) ? Number(object.numCommands) : 0,
    };
  },

  toJSON(message: CCLCMsgMove): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    message.commandNumber !== undefined && (obj.commandNumber = Math.round(message.commandNumber));
    message.numCommands !== undefined && (obj.numCommands = Math.round(message.numCommands));
    return obj;
  },

  create(base?: DeepPartial<CCLCMsgMove>): CCLCMsgMove {
    return CCLCMsgMove.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CCLCMsgMove>): CCLCMsgMove {
    const message = createBaseCCLCMsgMove();
    message.data = object.data ?? Buffer.alloc(0);
    message.commandNumber = object.commandNumber ?? 0;
    message.numCommands = object.numCommands ?? 0;
    return message;
  },
};

function createBaseCMsgVoiceAudio(): CMsgVoiceAudio {
  return {
    format: 0,
    voiceData: Buffer.alloc(0),
    sequenceBytes: 0,
    sectionNumber: 0,
    sampleRate: 0,
    uncompressedSampleOffset: 0,
  };
}

export const CMsgVoiceAudio = {
  encode(message: CMsgVoiceAudio, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.format !== 0) {
      writer.uint32(8).int32(message.format);
    }
    if (message.voiceData.length !== 0) {
      writer.uint32(18).bytes(message.voiceData);
    }
    if (message.sequenceBytes !== 0) {
      writer.uint32(24).int32(message.sequenceBytes);
    }
    if (message.sectionNumber !== 0) {
      writer.uint32(32).uint32(message.sectionNumber);
    }
    if (message.sampleRate !== 0) {
      writer.uint32(40).uint32(message.sampleRate);
    }
    if (message.uncompressedSampleOffset !== 0) {
      writer.uint32(48).uint32(message.uncompressedSampleOffset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgVoiceAudio {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgVoiceAudio();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.format = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.voiceData = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.sequenceBytes = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.sectionNumber = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.sampleRate = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.uncompressedSampleOffset = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgVoiceAudio {
    return {
      format: isSet(object.format) ? voiceDataFormatTFromJSON(object.format) : 0,
      voiceData: isSet(object.voiceData) ? Buffer.from(bytesFromBase64(object.voiceData)) : Buffer.alloc(0),
      sequenceBytes: isSet(object.sequenceBytes) ? Number(object.sequenceBytes) : 0,
      sectionNumber: isSet(object.sectionNumber) ? Number(object.sectionNumber) : 0,
      sampleRate: isSet(object.sampleRate) ? Number(object.sampleRate) : 0,
      uncompressedSampleOffset: isSet(object.uncompressedSampleOffset) ? Number(object.uncompressedSampleOffset) : 0,
    };
  },

  toJSON(message: CMsgVoiceAudio): unknown {
    const obj: any = {};
    message.format !== undefined && (obj.format = voiceDataFormatTToJSON(message.format));
    message.voiceData !== undefined &&
      (obj.voiceData = base64FromBytes(message.voiceData !== undefined ? message.voiceData : Buffer.alloc(0)));
    message.sequenceBytes !== undefined && (obj.sequenceBytes = Math.round(message.sequenceBytes));
    message.sectionNumber !== undefined && (obj.sectionNumber = Math.round(message.sectionNumber));
    message.sampleRate !== undefined && (obj.sampleRate = Math.round(message.sampleRate));
    message.uncompressedSampleOffset !== undefined &&
      (obj.uncompressedSampleOffset = Math.round(message.uncompressedSampleOffset));
    return obj;
  },

  create(base?: DeepPartial<CMsgVoiceAudio>): CMsgVoiceAudio {
    return CMsgVoiceAudio.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgVoiceAudio>): CMsgVoiceAudio {
    const message = createBaseCMsgVoiceAudio();
    message.format = object.format ?? 0;
    message.voiceData = object.voiceData ?? Buffer.alloc(0);
    message.sequenceBytes = object.sequenceBytes ?? 0;
    message.sectionNumber = object.sectionNumber ?? 0;
    message.sampleRate = object.sampleRate ?? 0;
    message.uncompressedSampleOffset = object.uncompressedSampleOffset ?? 0;
    return message;
  },
};

function createBaseCCLCMsgVoiceData(): CCLCMsgVoiceData {
  return { audio: undefined, xuid: "0", tick: 0 };
}

export const CCLCMsgVoiceData = {
  encode(message: CCLCMsgVoiceData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.audio !== undefined) {
      CMsgVoiceAudio.encode(message.audio, writer.uint32(10).fork()).ldelim();
    }
    if (message.xuid !== "0") {
      writer.uint32(17).fixed64(message.xuid);
    }
    if (message.tick !== 0) {
      writer.uint32(24).uint32(message.tick);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCLCMsgVoiceData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCLCMsgVoiceData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.audio = CMsgVoiceAudio.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.xuid = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.tick = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCLCMsgVoiceData {
    return {
      audio: isSet(object.audio) ? CMsgVoiceAudio.fromJSON(object.audio) : undefined,
      xuid: isSet(object.xuid) ? String(object.xuid) : "0",
      tick: isSet(object.tick) ? Number(object.tick) : 0,
    };
  },

  toJSON(message: CCLCMsgVoiceData): unknown {
    const obj: any = {};
    message.audio !== undefined && (obj.audio = message.audio ? CMsgVoiceAudio.toJSON(message.audio) : undefined);
    message.xuid !== undefined && (obj.xuid = message.xuid);
    message.tick !== undefined && (obj.tick = Math.round(message.tick));
    return obj;
  },

  create(base?: DeepPartial<CCLCMsgVoiceData>): CCLCMsgVoiceData {
    return CCLCMsgVoiceData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CCLCMsgVoiceData>): CCLCMsgVoiceData {
    const message = createBaseCCLCMsgVoiceData();
    message.audio = (object.audio !== undefined && object.audio !== null)
      ? CMsgVoiceAudio.fromPartial(object.audio)
      : undefined;
    message.xuid = object.xuid ?? "0";
    message.tick = object.tick ?? 0;
    return message;
  },
};

function createBaseCCLCMsgBaselineAck(): CCLCMsgBaselineAck {
  return { baselineTick: 0, baselineNr: 0 };
}

export const CCLCMsgBaselineAck = {
  encode(message: CCLCMsgBaselineAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baselineTick !== 0) {
      writer.uint32(8).int32(message.baselineTick);
    }
    if (message.baselineNr !== 0) {
      writer.uint32(16).int32(message.baselineNr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCLCMsgBaselineAck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCLCMsgBaselineAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.baselineTick = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.baselineNr = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCLCMsgBaselineAck {
    return {
      baselineTick: isSet(object.baselineTick) ? Number(object.baselineTick) : 0,
      baselineNr: isSet(object.baselineNr) ? Number(object.baselineNr) : 0,
    };
  },

  toJSON(message: CCLCMsgBaselineAck): unknown {
    const obj: any = {};
    message.baselineTick !== undefined && (obj.baselineTick = Math.round(message.baselineTick));
    message.baselineNr !== undefined && (obj.baselineNr = Math.round(message.baselineNr));
    return obj;
  },

  create(base?: DeepPartial<CCLCMsgBaselineAck>): CCLCMsgBaselineAck {
    return CCLCMsgBaselineAck.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CCLCMsgBaselineAck>): CCLCMsgBaselineAck {
    const message = createBaseCCLCMsgBaselineAck();
    message.baselineTick = object.baselineTick ?? 0;
    message.baselineNr = object.baselineNr ?? 0;
    return message;
  },
};

function createBaseCCLCMsgListenEvents(): CCLCMsgListenEvents {
  return { eventMask: [] };
}

export const CCLCMsgListenEvents = {
  encode(message: CCLCMsgListenEvents, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.eventMask) {
      writer.fixed32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCLCMsgListenEvents {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCLCMsgListenEvents();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 13) {
            message.eventMask.push(reader.fixed32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.eventMask.push(reader.fixed32());
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

  fromJSON(object: any): CCLCMsgListenEvents {
    return { eventMask: Array.isArray(object?.eventMask) ? object.eventMask.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CCLCMsgListenEvents): unknown {
    const obj: any = {};
    if (message.eventMask) {
      obj.eventMask = message.eventMask.map((e) => Math.round(e));
    } else {
      obj.eventMask = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CCLCMsgListenEvents>): CCLCMsgListenEvents {
    return CCLCMsgListenEvents.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CCLCMsgListenEvents>): CCLCMsgListenEvents {
    const message = createBaseCCLCMsgListenEvents();
    message.eventMask = object.eventMask?.map((e) => e) || [];
    return message;
  },
};

function createBaseCCLCMsgRespondCvarValue(): CCLCMsgRespondCvarValue {
  return { cookie: 0, statusCode: 0, name: "", value: "" };
}

export const CCLCMsgRespondCvarValue = {
  encode(message: CCLCMsgRespondCvarValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cookie !== 0) {
      writer.uint32(8).int32(message.cookie);
    }
    if (message.statusCode !== 0) {
      writer.uint32(16).int32(message.statusCode);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(34).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCLCMsgRespondCvarValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCLCMsgRespondCvarValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.cookie = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.statusCode = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag != 34) {
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

  fromJSON(object: any): CCLCMsgRespondCvarValue {
    return {
      cookie: isSet(object.cookie) ? Number(object.cookie) : 0,
      statusCode: isSet(object.statusCode) ? Number(object.statusCode) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: CCLCMsgRespondCvarValue): unknown {
    const obj: any = {};
    message.cookie !== undefined && (obj.cookie = Math.round(message.cookie));
    message.statusCode !== undefined && (obj.statusCode = Math.round(message.statusCode));
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(base?: DeepPartial<CCLCMsgRespondCvarValue>): CCLCMsgRespondCvarValue {
    return CCLCMsgRespondCvarValue.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CCLCMsgRespondCvarValue>): CCLCMsgRespondCvarValue {
    const message = createBaseCCLCMsgRespondCvarValue();
    message.cookie = object.cookie ?? 0;
    message.statusCode = object.statusCode ?? 0;
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCCLCMsgFileCRCCheck(): CCLCMsgFileCRCCheck {
  return { codePath: 0, path: "", codeFilename: 0, filename: "", crc: 0 };
}

export const CCLCMsgFileCRCCheck = {
  encode(message: CCLCMsgFileCRCCheck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codePath !== 0) {
      writer.uint32(8).int32(message.codePath);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.codeFilename !== 0) {
      writer.uint32(24).int32(message.codeFilename);
    }
    if (message.filename !== "") {
      writer.uint32(34).string(message.filename);
    }
    if (message.crc !== 0) {
      writer.uint32(45).fixed32(message.crc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCLCMsgFileCRCCheck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCLCMsgFileCRCCheck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.codePath = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.path = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.codeFilename = reader.int32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.filename = reader.string();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.crc = reader.fixed32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCLCMsgFileCRCCheck {
    return {
      codePath: isSet(object.codePath) ? Number(object.codePath) : 0,
      path: isSet(object.path) ? String(object.path) : "",
      codeFilename: isSet(object.codeFilename) ? Number(object.codeFilename) : 0,
      filename: isSet(object.filename) ? String(object.filename) : "",
      crc: isSet(object.crc) ? Number(object.crc) : 0,
    };
  },

  toJSON(message: CCLCMsgFileCRCCheck): unknown {
    const obj: any = {};
    message.codePath !== undefined && (obj.codePath = Math.round(message.codePath));
    message.path !== undefined && (obj.path = message.path);
    message.codeFilename !== undefined && (obj.codeFilename = Math.round(message.codeFilename));
    message.filename !== undefined && (obj.filename = message.filename);
    message.crc !== undefined && (obj.crc = Math.round(message.crc));
    return obj;
  },

  create(base?: DeepPartial<CCLCMsgFileCRCCheck>): CCLCMsgFileCRCCheck {
    return CCLCMsgFileCRCCheck.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CCLCMsgFileCRCCheck>): CCLCMsgFileCRCCheck {
    const message = createBaseCCLCMsgFileCRCCheck();
    message.codePath = object.codePath ?? 0;
    message.path = object.path ?? "";
    message.codeFilename = object.codeFilename ?? 0;
    message.filename = object.filename ?? "";
    message.crc = object.crc ?? 0;
    return message;
  },
};

function createBaseCCLCMsgLoadingProgress(): CCLCMsgLoadingProgress {
  return { progress: 0 };
}

export const CCLCMsgLoadingProgress = {
  encode(message: CCLCMsgLoadingProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.progress !== 0) {
      writer.uint32(8).int32(message.progress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCLCMsgLoadingProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCLCMsgLoadingProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.progress = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCLCMsgLoadingProgress {
    return { progress: isSet(object.progress) ? Number(object.progress) : 0 };
  },

  toJSON(message: CCLCMsgLoadingProgress): unknown {
    const obj: any = {};
    message.progress !== undefined && (obj.progress = Math.round(message.progress));
    return obj;
  },

  create(base?: DeepPartial<CCLCMsgLoadingProgress>): CCLCMsgLoadingProgress {
    return CCLCMsgLoadingProgress.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CCLCMsgLoadingProgress>): CCLCMsgLoadingProgress {
    const message = createBaseCCLCMsgLoadingProgress();
    message.progress = object.progress ?? 0;
    return message;
  },
};

function createBaseCCLCMsgSplitPlayerConnect(): CCLCMsgSplitPlayerConnect {
  return { playername: "" };
}

export const CCLCMsgSplitPlayerConnect = {
  encode(message: CCLCMsgSplitPlayerConnect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playername !== "") {
      writer.uint32(10).string(message.playername);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCLCMsgSplitPlayerConnect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCLCMsgSplitPlayerConnect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.playername = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCLCMsgSplitPlayerConnect {
    return { playername: isSet(object.playername) ? String(object.playername) : "" };
  },

  toJSON(message: CCLCMsgSplitPlayerConnect): unknown {
    const obj: any = {};
    message.playername !== undefined && (obj.playername = message.playername);
    return obj;
  },

  create(base?: DeepPartial<CCLCMsgSplitPlayerConnect>): CCLCMsgSplitPlayerConnect {
    return CCLCMsgSplitPlayerConnect.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CCLCMsgSplitPlayerConnect>): CCLCMsgSplitPlayerConnect {
    const message = createBaseCCLCMsgSplitPlayerConnect();
    message.playername = object.playername ?? "";
    return message;
  },
};

function createBaseCCLCMsgClientMessage(): CCLCMsgClientMessage {
  return { msgType: 0, data: Buffer.alloc(0) };
}

export const CCLCMsgClientMessage = {
  encode(message: CCLCMsgClientMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgType !== 0) {
      writer.uint32(8).int32(message.msgType);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCLCMsgClientMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCLCMsgClientMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.msgType = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.data = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCLCMsgClientMessage {
    return {
      msgType: isSet(object.msgType) ? Number(object.msgType) : 0,
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CCLCMsgClientMessage): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = Math.round(message.msgType));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CCLCMsgClientMessage>): CCLCMsgClientMessage {
    return CCLCMsgClientMessage.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CCLCMsgClientMessage>): CCLCMsgClientMessage {
    const message = createBaseCCLCMsgClientMessage();
    message.msgType = object.msgType ?? 0;
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCCLCMsgSplitPlayerDisconnect(): CCLCMsgSplitPlayerDisconnect {
  return { slot: 0 };
}

export const CCLCMsgSplitPlayerDisconnect = {
  encode(message: CCLCMsgSplitPlayerDisconnect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slot !== 0) {
      writer.uint32(8).int32(message.slot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCLCMsgSplitPlayerDisconnect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCLCMsgSplitPlayerDisconnect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.slot = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCLCMsgSplitPlayerDisconnect {
    return { slot: isSet(object.slot) ? Number(object.slot) : 0 };
  },

  toJSON(message: CCLCMsgSplitPlayerDisconnect): unknown {
    const obj: any = {};
    message.slot !== undefined && (obj.slot = Math.round(message.slot));
    return obj;
  },

  create(base?: DeepPartial<CCLCMsgSplitPlayerDisconnect>): CCLCMsgSplitPlayerDisconnect {
    return CCLCMsgSplitPlayerDisconnect.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CCLCMsgSplitPlayerDisconnect>): CCLCMsgSplitPlayerDisconnect {
    const message = createBaseCCLCMsgSplitPlayerDisconnect();
    message.slot = object.slot ?? 0;
    return message;
  },
};

function createBaseCCLCMsgServerStatus(): CCLCMsgServerStatus {
  return { simplified: false };
}

export const CCLCMsgServerStatus = {
  encode(message: CCLCMsgServerStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.simplified === true) {
      writer.uint32(8).bool(message.simplified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCLCMsgServerStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCLCMsgServerStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.simplified = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCLCMsgServerStatus {
    return { simplified: isSet(object.simplified) ? Boolean(object.simplified) : false };
  },

  toJSON(message: CCLCMsgServerStatus): unknown {
    const obj: any = {};
    message.simplified !== undefined && (obj.simplified = message.simplified);
    return obj;
  },

  create(base?: DeepPartial<CCLCMsgServerStatus>): CCLCMsgServerStatus {
    return CCLCMsgServerStatus.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CCLCMsgServerStatus>): CCLCMsgServerStatus {
    const message = createBaseCCLCMsgServerStatus();
    message.simplified = object.simplified ?? false;
    return message;
  },
};

function createBaseCCLCMsgServerPing(): CCLCMsgServerPing {
  return {};
}

export const CCLCMsgServerPing = {
  encode(_: CCLCMsgServerPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCLCMsgServerPing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCLCMsgServerPing();
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

  fromJSON(_: any): CCLCMsgServerPing {
    return {};
  },

  toJSON(_: CCLCMsgServerPing): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CCLCMsgServerPing>): CCLCMsgServerPing {
    return CCLCMsgServerPing.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CCLCMsgServerPing>): CCLCMsgServerPing {
    const message = createBaseCCLCMsgServerPing();
    return message;
  },
};

function createBaseCCLCMsgRequestPause(): CCLCMsgRequestPause {
  return { pauseType: 0, pauseGroup: 0 };
}

export const CCLCMsgRequestPause = {
  encode(message: CCLCMsgRequestPause, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pauseType !== 0) {
      writer.uint32(8).int32(message.pauseType);
    }
    if (message.pauseGroup !== 0) {
      writer.uint32(16).int32(message.pauseGroup);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCLCMsgRequestPause {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCLCMsgRequestPause();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.pauseType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.pauseGroup = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCLCMsgRequestPause {
    return {
      pauseType: isSet(object.pauseType) ? requestPauseTFromJSON(object.pauseType) : 0,
      pauseGroup: isSet(object.pauseGroup) ? Number(object.pauseGroup) : 0,
    };
  },

  toJSON(message: CCLCMsgRequestPause): unknown {
    const obj: any = {};
    message.pauseType !== undefined && (obj.pauseType = requestPauseTToJSON(message.pauseType));
    message.pauseGroup !== undefined && (obj.pauseGroup = Math.round(message.pauseGroup));
    return obj;
  },

  create(base?: DeepPartial<CCLCMsgRequestPause>): CCLCMsgRequestPause {
    return CCLCMsgRequestPause.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CCLCMsgRequestPause>): CCLCMsgRequestPause {
    const message = createBaseCCLCMsgRequestPause();
    message.pauseType = object.pauseType ?? 0;
    message.pauseGroup = object.pauseGroup ?? 0;
    return message;
  },
};

function createBaseCCLCMsgCmdKeyValues(): CCLCMsgCmdKeyValues {
  return { data: Buffer.alloc(0) };
}

export const CCLCMsgCmdKeyValues = {
  encode(message: CCLCMsgCmdKeyValues, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCLCMsgCmdKeyValues {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCLCMsgCmdKeyValues();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.data = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCLCMsgCmdKeyValues {
    return { data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0) };
  },

  toJSON(message: CCLCMsgCmdKeyValues): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CCLCMsgCmdKeyValues>): CCLCMsgCmdKeyValues {
    return CCLCMsgCmdKeyValues.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CCLCMsgCmdKeyValues>): CCLCMsgCmdKeyValues {
    const message = createBaseCCLCMsgCmdKeyValues();
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCCLCMsgRconServerDetails(): CCLCMsgRconServerDetails {
  return { token: Buffer.alloc(0) };
}

export const CCLCMsgRconServerDetails = {
  encode(message: CCLCMsgRconServerDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token.length !== 0) {
      writer.uint32(10).bytes(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCLCMsgRconServerDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCLCMsgRconServerDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.token = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCLCMsgRconServerDetails {
    return { token: isSet(object.token) ? Buffer.from(bytesFromBase64(object.token)) : Buffer.alloc(0) };
  },

  toJSON(message: CCLCMsgRconServerDetails): unknown {
    const obj: any = {};
    message.token !== undefined &&
      (obj.token = base64FromBytes(message.token !== undefined ? message.token : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CCLCMsgRconServerDetails>): CCLCMsgRconServerDetails {
    return CCLCMsgRconServerDetails.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CCLCMsgRconServerDetails>): CCLCMsgRconServerDetails {
    const message = createBaseCCLCMsgRconServerDetails();
    message.token = object.token ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCSVCMsgServerInfo(): CSVCMsgServerInfo {
  return {
    protocol: 0,
    serverCount: 0,
    isDedicated: false,
    isHltv: false,
    cOs: 0,
    maxClients: 0,
    maxClasses: 0,
    playerSlot: 0,
    tickInterval: 0,
    gameDir: "",
    mapName: "",
    skyName: "",
    hostName: "",
    addonName: "",
    gameSessionConfig: undefined,
    gameSessionManifest: Buffer.alloc(0),
  };
}

export const CSVCMsgServerInfo = {
  encode(message: CSVCMsgServerInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocol !== 0) {
      writer.uint32(8).int32(message.protocol);
    }
    if (message.serverCount !== 0) {
      writer.uint32(16).int32(message.serverCount);
    }
    if (message.isDedicated === true) {
      writer.uint32(24).bool(message.isDedicated);
    }
    if (message.isHltv === true) {
      writer.uint32(32).bool(message.isHltv);
    }
    if (message.cOs !== 0) {
      writer.uint32(48).int32(message.cOs);
    }
    if (message.maxClients !== 0) {
      writer.uint32(80).int32(message.maxClients);
    }
    if (message.maxClasses !== 0) {
      writer.uint32(88).int32(message.maxClasses);
    }
    if (message.playerSlot !== 0) {
      writer.uint32(96).int32(message.playerSlot);
    }
    if (message.tickInterval !== 0) {
      writer.uint32(109).float(message.tickInterval);
    }
    if (message.gameDir !== "") {
      writer.uint32(114).string(message.gameDir);
    }
    if (message.mapName !== "") {
      writer.uint32(122).string(message.mapName);
    }
    if (message.skyName !== "") {
      writer.uint32(130).string(message.skyName);
    }
    if (message.hostName !== "") {
      writer.uint32(138).string(message.hostName);
    }
    if (message.addonName !== "") {
      writer.uint32(146).string(message.addonName);
    }
    if (message.gameSessionConfig !== undefined) {
      CSVCMsgGameSessionConfiguration.encode(message.gameSessionConfig, writer.uint32(154).fork()).ldelim();
    }
    if (message.gameSessionManifest.length !== 0) {
      writer.uint32(162).bytes(message.gameSessionManifest);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgServerInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgServerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.protocol = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.serverCount = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isDedicated = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.isHltv = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.cOs = reader.int32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.maxClients = reader.int32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.maxClasses = reader.int32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.playerSlot = reader.int32();
          continue;
        case 13:
          if (tag != 109) {
            break;
          }

          message.tickInterval = reader.float();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.gameDir = reader.string();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.mapName = reader.string();
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.skyName = reader.string();
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.hostName = reader.string();
          continue;
        case 18:
          if (tag != 146) {
            break;
          }

          message.addonName = reader.string();
          continue;
        case 19:
          if (tag != 154) {
            break;
          }

          message.gameSessionConfig = CSVCMsgGameSessionConfiguration.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag != 162) {
            break;
          }

          message.gameSessionManifest = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgServerInfo {
    return {
      protocol: isSet(object.protocol) ? Number(object.protocol) : 0,
      serverCount: isSet(object.serverCount) ? Number(object.serverCount) : 0,
      isDedicated: isSet(object.isDedicated) ? Boolean(object.isDedicated) : false,
      isHltv: isSet(object.isHltv) ? Boolean(object.isHltv) : false,
      cOs: isSet(object.cOs) ? Number(object.cOs) : 0,
      maxClients: isSet(object.maxClients) ? Number(object.maxClients) : 0,
      maxClasses: isSet(object.maxClasses) ? Number(object.maxClasses) : 0,
      playerSlot: isSet(object.playerSlot) ? Number(object.playerSlot) : 0,
      tickInterval: isSet(object.tickInterval) ? Number(object.tickInterval) : 0,
      gameDir: isSet(object.gameDir) ? String(object.gameDir) : "",
      mapName: isSet(object.mapName) ? String(object.mapName) : "",
      skyName: isSet(object.skyName) ? String(object.skyName) : "",
      hostName: isSet(object.hostName) ? String(object.hostName) : "",
      addonName: isSet(object.addonName) ? String(object.addonName) : "",
      gameSessionConfig: isSet(object.gameSessionConfig)
        ? CSVCMsgGameSessionConfiguration.fromJSON(object.gameSessionConfig)
        : undefined,
      gameSessionManifest: isSet(object.gameSessionManifest)
        ? Buffer.from(bytesFromBase64(object.gameSessionManifest))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: CSVCMsgServerInfo): unknown {
    const obj: any = {};
    message.protocol !== undefined && (obj.protocol = Math.round(message.protocol));
    message.serverCount !== undefined && (obj.serverCount = Math.round(message.serverCount));
    message.isDedicated !== undefined && (obj.isDedicated = message.isDedicated);
    message.isHltv !== undefined && (obj.isHltv = message.isHltv);
    message.cOs !== undefined && (obj.cOs = Math.round(message.cOs));
    message.maxClients !== undefined && (obj.maxClients = Math.round(message.maxClients));
    message.maxClasses !== undefined && (obj.maxClasses = Math.round(message.maxClasses));
    message.playerSlot !== undefined && (obj.playerSlot = Math.round(message.playerSlot));
    message.tickInterval !== undefined && (obj.tickInterval = message.tickInterval);
    message.gameDir !== undefined && (obj.gameDir = message.gameDir);
    message.mapName !== undefined && (obj.mapName = message.mapName);
    message.skyName !== undefined && (obj.skyName = message.skyName);
    message.hostName !== undefined && (obj.hostName = message.hostName);
    message.addonName !== undefined && (obj.addonName = message.addonName);
    message.gameSessionConfig !== undefined && (obj.gameSessionConfig = message.gameSessionConfig
      ? CSVCMsgGameSessionConfiguration.toJSON(message.gameSessionConfig)
      : undefined);
    message.gameSessionManifest !== undefined &&
      (obj.gameSessionManifest = base64FromBytes(
        message.gameSessionManifest !== undefined ? message.gameSessionManifest : Buffer.alloc(0),
      ));
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgServerInfo>): CSVCMsgServerInfo {
    return CSVCMsgServerInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgServerInfo>): CSVCMsgServerInfo {
    const message = createBaseCSVCMsgServerInfo();
    message.protocol = object.protocol ?? 0;
    message.serverCount = object.serverCount ?? 0;
    message.isDedicated = object.isDedicated ?? false;
    message.isHltv = object.isHltv ?? false;
    message.cOs = object.cOs ?? 0;
    message.maxClients = object.maxClients ?? 0;
    message.maxClasses = object.maxClasses ?? 0;
    message.playerSlot = object.playerSlot ?? 0;
    message.tickInterval = object.tickInterval ?? 0;
    message.gameDir = object.gameDir ?? "";
    message.mapName = object.mapName ?? "";
    message.skyName = object.skyName ?? "";
    message.hostName = object.hostName ?? "";
    message.addonName = object.addonName ?? "";
    message.gameSessionConfig = (object.gameSessionConfig !== undefined && object.gameSessionConfig !== null)
      ? CSVCMsgGameSessionConfiguration.fromPartial(object.gameSessionConfig)
      : undefined;
    message.gameSessionManifest = object.gameSessionManifest ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCSVCMsgClassInfo(): CSVCMsgClassInfo {
  return { createOnClient: false, classes: [] };
}

export const CSVCMsgClassInfo = {
  encode(message: CSVCMsgClassInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.createOnClient === true) {
      writer.uint32(8).bool(message.createOnClient);
    }
    for (const v of message.classes) {
      CSVCMsgClassInfo_classT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgClassInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgClassInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.createOnClient = reader.bool();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.classes.push(CSVCMsgClassInfo_classT.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgClassInfo {
    return {
      createOnClient: isSet(object.createOnClient) ? Boolean(object.createOnClient) : false,
      classes: Array.isArray(object?.classes)
        ? object.classes.map((e: any) => CSVCMsgClassInfo_classT.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSVCMsgClassInfo): unknown {
    const obj: any = {};
    message.createOnClient !== undefined && (obj.createOnClient = message.createOnClient);
    if (message.classes) {
      obj.classes = message.classes.map((e) => e ? CSVCMsgClassInfo_classT.toJSON(e) : undefined);
    } else {
      obj.classes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgClassInfo>): CSVCMsgClassInfo {
    return CSVCMsgClassInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgClassInfo>): CSVCMsgClassInfo {
    const message = createBaseCSVCMsgClassInfo();
    message.createOnClient = object.createOnClient ?? false;
    message.classes = object.classes?.map((e) => CSVCMsgClassInfo_classT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSVCMsgClassInfo_classT(): CSVCMsgClassInfo_classT {
  return { classId: 0, dataTableName: "", className: "" };
}

export const CSVCMsgClassInfo_classT = {
  encode(message: CSVCMsgClassInfo_classT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== 0) {
      writer.uint32(8).int32(message.classId);
    }
    if (message.dataTableName !== "") {
      writer.uint32(18).string(message.dataTableName);
    }
    if (message.className !== "") {
      writer.uint32(26).string(message.className);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgClassInfo_classT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgClassInfo_classT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.classId = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.dataTableName = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.className = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgClassInfo_classT {
    return {
      classId: isSet(object.classId) ? Number(object.classId) : 0,
      dataTableName: isSet(object.dataTableName) ? String(object.dataTableName) : "",
      className: isSet(object.className) ? String(object.className) : "",
    };
  },

  toJSON(message: CSVCMsgClassInfo_classT): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = Math.round(message.classId));
    message.dataTableName !== undefined && (obj.dataTableName = message.dataTableName);
    message.className !== undefined && (obj.className = message.className);
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgClassInfo_classT>): CSVCMsgClassInfo_classT {
    return CSVCMsgClassInfo_classT.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgClassInfo_classT>): CSVCMsgClassInfo_classT {
    const message = createBaseCSVCMsgClassInfo_classT();
    message.classId = object.classId ?? 0;
    message.dataTableName = object.dataTableName ?? "";
    message.className = object.className ?? "";
    return message;
  },
};

function createBaseCSVCMsgSetPause(): CSVCMsgSetPause {
  return { paused: false };
}

export const CSVCMsgSetPause = {
  encode(message: CSVCMsgSetPause, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paused === true) {
      writer.uint32(8).bool(message.paused);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgSetPause {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgSetPause();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.paused = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgSetPause {
    return { paused: isSet(object.paused) ? Boolean(object.paused) : false };
  },

  toJSON(message: CSVCMsgSetPause): unknown {
    const obj: any = {};
    message.paused !== undefined && (obj.paused = message.paused);
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgSetPause>): CSVCMsgSetPause {
    return CSVCMsgSetPause.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgSetPause>): CSVCMsgSetPause {
    const message = createBaseCSVCMsgSetPause();
    message.paused = object.paused ?? false;
    return message;
  },
};

function createBaseCSVCMsgVoiceInit(): CSVCMsgVoiceInit {
  return { quality: 0, codec: "", version: 0 };
}

export const CSVCMsgVoiceInit = {
  encode(message: CSVCMsgVoiceInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quality !== 0) {
      writer.uint32(8).int32(message.quality);
    }
    if (message.codec !== "") {
      writer.uint32(18).string(message.codec);
    }
    if (message.version !== 0) {
      writer.uint32(24).int32(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgVoiceInit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgVoiceInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.quality = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.codec = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.version = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgVoiceInit {
    return {
      quality: isSet(object.quality) ? Number(object.quality) : 0,
      codec: isSet(object.codec) ? String(object.codec) : "",
      version: isSet(object.version) ? Number(object.version) : 0,
    };
  },

  toJSON(message: CSVCMsgVoiceInit): unknown {
    const obj: any = {};
    message.quality !== undefined && (obj.quality = Math.round(message.quality));
    message.codec !== undefined && (obj.codec = message.codec);
    message.version !== undefined && (obj.version = Math.round(message.version));
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgVoiceInit>): CSVCMsgVoiceInit {
    return CSVCMsgVoiceInit.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgVoiceInit>): CSVCMsgVoiceInit {
    const message = createBaseCSVCMsgVoiceInit();
    message.quality = object.quality ?? 0;
    message.codec = object.codec ?? "";
    message.version = object.version ?? 0;
    return message;
  },
};

function createBaseCSVCMsgPrint(): CSVCMsgPrint {
  return { text: "" };
}

export const CSVCMsgPrint = {
  encode(message: CSVCMsgPrint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgPrint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgPrint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgPrint {
    return { text: isSet(object.text) ? String(object.text) : "" };
  },

  toJSON(message: CSVCMsgPrint): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgPrint>): CSVCMsgPrint {
    return CSVCMsgPrint.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgPrint>): CSVCMsgPrint {
    const message = createBaseCSVCMsgPrint();
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseCSVCMsgSounds(): CSVCMsgSounds {
  return { reliableSound: false, sounds: [] };
}

export const CSVCMsgSounds = {
  encode(message: CSVCMsgSounds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reliableSound === true) {
      writer.uint32(8).bool(message.reliableSound);
    }
    for (const v of message.sounds) {
      CSVCMsgSounds_sounddataT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgSounds {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgSounds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.reliableSound = reader.bool();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.sounds.push(CSVCMsgSounds_sounddataT.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgSounds {
    return {
      reliableSound: isSet(object.reliableSound) ? Boolean(object.reliableSound) : false,
      sounds: Array.isArray(object?.sounds) ? object.sounds.map((e: any) => CSVCMsgSounds_sounddataT.fromJSON(e)) : [],
    };
  },

  toJSON(message: CSVCMsgSounds): unknown {
    const obj: any = {};
    message.reliableSound !== undefined && (obj.reliableSound = message.reliableSound);
    if (message.sounds) {
      obj.sounds = message.sounds.map((e) => e ? CSVCMsgSounds_sounddataT.toJSON(e) : undefined);
    } else {
      obj.sounds = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgSounds>): CSVCMsgSounds {
    return CSVCMsgSounds.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgSounds>): CSVCMsgSounds {
    const message = createBaseCSVCMsgSounds();
    message.reliableSound = object.reliableSound ?? false;
    message.sounds = object.sounds?.map((e) => CSVCMsgSounds_sounddataT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSVCMsgSounds_sounddataT(): CSVCMsgSounds_sounddataT {
  return {
    originX: 0,
    originY: 0,
    originZ: 0,
    volume: 0,
    delayValue: 0,
    sequenceNumber: 0,
    entityIndex: 0,
    channel: 0,
    pitch: 0,
    flags: 0,
    soundNum: 0,
    soundNumHandle: 0,
    speakerEntity: 0,
    randomSeed: 0,
    soundLevel: 0,
    isSentence: false,
    isAmbient: false,
    guid: 0,
    soundResourceId: "0",
  };
}

export const CSVCMsgSounds_sounddataT = {
  encode(message: CSVCMsgSounds_sounddataT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originX !== 0) {
      writer.uint32(8).sint32(message.originX);
    }
    if (message.originY !== 0) {
      writer.uint32(16).sint32(message.originY);
    }
    if (message.originZ !== 0) {
      writer.uint32(24).sint32(message.originZ);
    }
    if (message.volume !== 0) {
      writer.uint32(32).uint32(message.volume);
    }
    if (message.delayValue !== 0) {
      writer.uint32(45).float(message.delayValue);
    }
    if (message.sequenceNumber !== 0) {
      writer.uint32(48).int32(message.sequenceNumber);
    }
    if (message.entityIndex !== 0) {
      writer.uint32(56).int32(message.entityIndex);
    }
    if (message.channel !== 0) {
      writer.uint32(64).int32(message.channel);
    }
    if (message.pitch !== 0) {
      writer.uint32(72).int32(message.pitch);
    }
    if (message.flags !== 0) {
      writer.uint32(80).int32(message.flags);
    }
    if (message.soundNum !== 0) {
      writer.uint32(88).uint32(message.soundNum);
    }
    if (message.soundNumHandle !== 0) {
      writer.uint32(101).fixed32(message.soundNumHandle);
    }
    if (message.speakerEntity !== 0) {
      writer.uint32(104).int32(message.speakerEntity);
    }
    if (message.randomSeed !== 0) {
      writer.uint32(112).int32(message.randomSeed);
    }
    if (message.soundLevel !== 0) {
      writer.uint32(120).int32(message.soundLevel);
    }
    if (message.isSentence === true) {
      writer.uint32(128).bool(message.isSentence);
    }
    if (message.isAmbient === true) {
      writer.uint32(136).bool(message.isAmbient);
    }
    if (message.guid !== 0) {
      writer.uint32(144).uint32(message.guid);
    }
    if (message.soundResourceId !== "0") {
      writer.uint32(153).fixed64(message.soundResourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgSounds_sounddataT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgSounds_sounddataT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.originX = reader.sint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.originY = reader.sint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.originZ = reader.sint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.volume = reader.uint32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.delayValue = reader.float();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.sequenceNumber = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.entityIndex = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.channel = reader.int32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.pitch = reader.int32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.flags = reader.int32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.soundNum = reader.uint32();
          continue;
        case 12:
          if (tag != 101) {
            break;
          }

          message.soundNumHandle = reader.fixed32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.speakerEntity = reader.int32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.randomSeed = reader.int32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.soundLevel = reader.int32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.isSentence = reader.bool();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.isAmbient = reader.bool();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.guid = reader.uint32();
          continue;
        case 19:
          if (tag != 153) {
            break;
          }

          message.soundResourceId = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgSounds_sounddataT {
    return {
      originX: isSet(object.originX) ? Number(object.originX) : 0,
      originY: isSet(object.originY) ? Number(object.originY) : 0,
      originZ: isSet(object.originZ) ? Number(object.originZ) : 0,
      volume: isSet(object.volume) ? Number(object.volume) : 0,
      delayValue: isSet(object.delayValue) ? Number(object.delayValue) : 0,
      sequenceNumber: isSet(object.sequenceNumber) ? Number(object.sequenceNumber) : 0,
      entityIndex: isSet(object.entityIndex) ? Number(object.entityIndex) : 0,
      channel: isSet(object.channel) ? Number(object.channel) : 0,
      pitch: isSet(object.pitch) ? Number(object.pitch) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      soundNum: isSet(object.soundNum) ? Number(object.soundNum) : 0,
      soundNumHandle: isSet(object.soundNumHandle) ? Number(object.soundNumHandle) : 0,
      speakerEntity: isSet(object.speakerEntity) ? Number(object.speakerEntity) : 0,
      randomSeed: isSet(object.randomSeed) ? Number(object.randomSeed) : 0,
      soundLevel: isSet(object.soundLevel) ? Number(object.soundLevel) : 0,
      isSentence: isSet(object.isSentence) ? Boolean(object.isSentence) : false,
      isAmbient: isSet(object.isAmbient) ? Boolean(object.isAmbient) : false,
      guid: isSet(object.guid) ? Number(object.guid) : 0,
      soundResourceId: isSet(object.soundResourceId) ? String(object.soundResourceId) : "0",
    };
  },

  toJSON(message: CSVCMsgSounds_sounddataT): unknown {
    const obj: any = {};
    message.originX !== undefined && (obj.originX = Math.round(message.originX));
    message.originY !== undefined && (obj.originY = Math.round(message.originY));
    message.originZ !== undefined && (obj.originZ = Math.round(message.originZ));
    message.volume !== undefined && (obj.volume = Math.round(message.volume));
    message.delayValue !== undefined && (obj.delayValue = message.delayValue);
    message.sequenceNumber !== undefined && (obj.sequenceNumber = Math.round(message.sequenceNumber));
    message.entityIndex !== undefined && (obj.entityIndex = Math.round(message.entityIndex));
    message.channel !== undefined && (obj.channel = Math.round(message.channel));
    message.pitch !== undefined && (obj.pitch = Math.round(message.pitch));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.soundNum !== undefined && (obj.soundNum = Math.round(message.soundNum));
    message.soundNumHandle !== undefined && (obj.soundNumHandle = Math.round(message.soundNumHandle));
    message.speakerEntity !== undefined && (obj.speakerEntity = Math.round(message.speakerEntity));
    message.randomSeed !== undefined && (obj.randomSeed = Math.round(message.randomSeed));
    message.soundLevel !== undefined && (obj.soundLevel = Math.round(message.soundLevel));
    message.isSentence !== undefined && (obj.isSentence = message.isSentence);
    message.isAmbient !== undefined && (obj.isAmbient = message.isAmbient);
    message.guid !== undefined && (obj.guid = Math.round(message.guid));
    message.soundResourceId !== undefined && (obj.soundResourceId = message.soundResourceId);
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgSounds_sounddataT>): CSVCMsgSounds_sounddataT {
    return CSVCMsgSounds_sounddataT.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgSounds_sounddataT>): CSVCMsgSounds_sounddataT {
    const message = createBaseCSVCMsgSounds_sounddataT();
    message.originX = object.originX ?? 0;
    message.originY = object.originY ?? 0;
    message.originZ = object.originZ ?? 0;
    message.volume = object.volume ?? 0;
    message.delayValue = object.delayValue ?? 0;
    message.sequenceNumber = object.sequenceNumber ?? 0;
    message.entityIndex = object.entityIndex ?? 0;
    message.channel = object.channel ?? 0;
    message.pitch = object.pitch ?? 0;
    message.flags = object.flags ?? 0;
    message.soundNum = object.soundNum ?? 0;
    message.soundNumHandle = object.soundNumHandle ?? 0;
    message.speakerEntity = object.speakerEntity ?? 0;
    message.randomSeed = object.randomSeed ?? 0;
    message.soundLevel = object.soundLevel ?? 0;
    message.isSentence = object.isSentence ?? false;
    message.isAmbient = object.isAmbient ?? false;
    message.guid = object.guid ?? 0;
    message.soundResourceId = object.soundResourceId ?? "0";
    return message;
  },
};

function createBaseCSVCMsgPrefetch(): CSVCMsgPrefetch {
  return { soundIndex: 0, resourceType: 0 };
}

export const CSVCMsgPrefetch = {
  encode(message: CSVCMsgPrefetch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.soundIndex !== 0) {
      writer.uint32(8).int32(message.soundIndex);
    }
    if (message.resourceType !== 0) {
      writer.uint32(16).int32(message.resourceType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgPrefetch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgPrefetch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.soundIndex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.resourceType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgPrefetch {
    return {
      soundIndex: isSet(object.soundIndex) ? Number(object.soundIndex) : 0,
      resourceType: isSet(object.resourceType) ? prefetchTypeFromJSON(object.resourceType) : 0,
    };
  },

  toJSON(message: CSVCMsgPrefetch): unknown {
    const obj: any = {};
    message.soundIndex !== undefined && (obj.soundIndex = Math.round(message.soundIndex));
    message.resourceType !== undefined && (obj.resourceType = prefetchTypeToJSON(message.resourceType));
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgPrefetch>): CSVCMsgPrefetch {
    return CSVCMsgPrefetch.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgPrefetch>): CSVCMsgPrefetch {
    const message = createBaseCSVCMsgPrefetch();
    message.soundIndex = object.soundIndex ?? 0;
    message.resourceType = object.resourceType ?? 0;
    return message;
  },
};

function createBaseCSVCMsgSetView(): CSVCMsgSetView {
  return { entityIndex: 0, slot: 0 };
}

export const CSVCMsgSetView = {
  encode(message: CSVCMsgSetView, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityIndex !== 0) {
      writer.uint32(8).int32(message.entityIndex);
    }
    if (message.slot !== 0) {
      writer.uint32(16).int32(message.slot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgSetView {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgSetView();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entityIndex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.slot = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgSetView {
    return {
      entityIndex: isSet(object.entityIndex) ? Number(object.entityIndex) : 0,
      slot: isSet(object.slot) ? Number(object.slot) : 0,
    };
  },

  toJSON(message: CSVCMsgSetView): unknown {
    const obj: any = {};
    message.entityIndex !== undefined && (obj.entityIndex = Math.round(message.entityIndex));
    message.slot !== undefined && (obj.slot = Math.round(message.slot));
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgSetView>): CSVCMsgSetView {
    return CSVCMsgSetView.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgSetView>): CSVCMsgSetView {
    const message = createBaseCSVCMsgSetView();
    message.entityIndex = object.entityIndex ?? 0;
    message.slot = object.slot ?? 0;
    return message;
  },
};

function createBaseCSVCMsgFixAngle(): CSVCMsgFixAngle {
  return { relative: false, angle: undefined };
}

export const CSVCMsgFixAngle = {
  encode(message: CSVCMsgFixAngle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relative === true) {
      writer.uint32(8).bool(message.relative);
    }
    if (message.angle !== undefined) {
      CMsgQAngle.encode(message.angle, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgFixAngle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgFixAngle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.relative = reader.bool();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.angle = CMsgQAngle.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgFixAngle {
    return {
      relative: isSet(object.relative) ? Boolean(object.relative) : false,
      angle: isSet(object.angle) ? CMsgQAngle.fromJSON(object.angle) : undefined,
    };
  },

  toJSON(message: CSVCMsgFixAngle): unknown {
    const obj: any = {};
    message.relative !== undefined && (obj.relative = message.relative);
    message.angle !== undefined && (obj.angle = message.angle ? CMsgQAngle.toJSON(message.angle) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgFixAngle>): CSVCMsgFixAngle {
    return CSVCMsgFixAngle.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgFixAngle>): CSVCMsgFixAngle {
    const message = createBaseCSVCMsgFixAngle();
    message.relative = object.relative ?? false;
    message.angle = (object.angle !== undefined && object.angle !== null)
      ? CMsgQAngle.fromPartial(object.angle)
      : undefined;
    return message;
  },
};

function createBaseCSVCMsgCrosshairAngle(): CSVCMsgCrosshairAngle {
  return { angle: undefined };
}

export const CSVCMsgCrosshairAngle = {
  encode(message: CSVCMsgCrosshairAngle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.angle !== undefined) {
      CMsgQAngle.encode(message.angle, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgCrosshairAngle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgCrosshairAngle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.angle = CMsgQAngle.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgCrosshairAngle {
    return { angle: isSet(object.angle) ? CMsgQAngle.fromJSON(object.angle) : undefined };
  },

  toJSON(message: CSVCMsgCrosshairAngle): unknown {
    const obj: any = {};
    message.angle !== undefined && (obj.angle = message.angle ? CMsgQAngle.toJSON(message.angle) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgCrosshairAngle>): CSVCMsgCrosshairAngle {
    return CSVCMsgCrosshairAngle.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgCrosshairAngle>): CSVCMsgCrosshairAngle {
    const message = createBaseCSVCMsgCrosshairAngle();
    message.angle = (object.angle !== undefined && object.angle !== null)
      ? CMsgQAngle.fromPartial(object.angle)
      : undefined;
    return message;
  },
};

function createBaseCSVCMsgBSPDecal(): CSVCMsgBSPDecal {
  return { pos: undefined, decalTextureIndex: 0, entityIndex: 0, modelIndex: 0, lowPriority: false };
}

export const CSVCMsgBSPDecal = {
  encode(message: CSVCMsgBSPDecal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pos !== undefined) {
      CMsgVector.encode(message.pos, writer.uint32(10).fork()).ldelim();
    }
    if (message.decalTextureIndex !== 0) {
      writer.uint32(16).int32(message.decalTextureIndex);
    }
    if (message.entityIndex !== 0) {
      writer.uint32(24).int32(message.entityIndex);
    }
    if (message.modelIndex !== 0) {
      writer.uint32(32).int32(message.modelIndex);
    }
    if (message.lowPriority === true) {
      writer.uint32(40).bool(message.lowPriority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgBSPDecal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgBSPDecal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.pos = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.decalTextureIndex = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.entityIndex = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.modelIndex = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.lowPriority = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgBSPDecal {
    return {
      pos: isSet(object.pos) ? CMsgVector.fromJSON(object.pos) : undefined,
      decalTextureIndex: isSet(object.decalTextureIndex) ? Number(object.decalTextureIndex) : 0,
      entityIndex: isSet(object.entityIndex) ? Number(object.entityIndex) : 0,
      modelIndex: isSet(object.modelIndex) ? Number(object.modelIndex) : 0,
      lowPriority: isSet(object.lowPriority) ? Boolean(object.lowPriority) : false,
    };
  },

  toJSON(message: CSVCMsgBSPDecal): unknown {
    const obj: any = {};
    message.pos !== undefined && (obj.pos = message.pos ? CMsgVector.toJSON(message.pos) : undefined);
    message.decalTextureIndex !== undefined && (obj.decalTextureIndex = Math.round(message.decalTextureIndex));
    message.entityIndex !== undefined && (obj.entityIndex = Math.round(message.entityIndex));
    message.modelIndex !== undefined && (obj.modelIndex = Math.round(message.modelIndex));
    message.lowPriority !== undefined && (obj.lowPriority = message.lowPriority);
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgBSPDecal>): CSVCMsgBSPDecal {
    return CSVCMsgBSPDecal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgBSPDecal>): CSVCMsgBSPDecal {
    const message = createBaseCSVCMsgBSPDecal();
    message.pos = (object.pos !== undefined && object.pos !== null) ? CMsgVector.fromPartial(object.pos) : undefined;
    message.decalTextureIndex = object.decalTextureIndex ?? 0;
    message.entityIndex = object.entityIndex ?? 0;
    message.modelIndex = object.modelIndex ?? 0;
    message.lowPriority = object.lowPriority ?? false;
    return message;
  },
};

function createBaseCSVCMsgSplitScreen(): CSVCMsgSplitScreen {
  return { type: 0, slot: 0, playerIndex: 0 };
}

export const CSVCMsgSplitScreen = {
  encode(message: CSVCMsgSplitScreen, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.slot !== 0) {
      writer.uint32(16).int32(message.slot);
    }
    if (message.playerIndex !== 0) {
      writer.uint32(24).int32(message.playerIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgSplitScreen {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgSplitScreen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.slot = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.playerIndex = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgSplitScreen {
    return {
      type: isSet(object.type) ? eSplitScreenMessageTypeFromJSON(object.type) : 0,
      slot: isSet(object.slot) ? Number(object.slot) : 0,
      playerIndex: isSet(object.playerIndex) ? Number(object.playerIndex) : 0,
    };
  },

  toJSON(message: CSVCMsgSplitScreen): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = eSplitScreenMessageTypeToJSON(message.type));
    message.slot !== undefined && (obj.slot = Math.round(message.slot));
    message.playerIndex !== undefined && (obj.playerIndex = Math.round(message.playerIndex));
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgSplitScreen>): CSVCMsgSplitScreen {
    return CSVCMsgSplitScreen.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgSplitScreen>): CSVCMsgSplitScreen {
    const message = createBaseCSVCMsgSplitScreen();
    message.type = object.type ?? 0;
    message.slot = object.slot ?? 0;
    message.playerIndex = object.playerIndex ?? 0;
    return message;
  },
};

function createBaseCSVCMsgGetCvarValue(): CSVCMsgGetCvarValue {
  return { cookie: 0, cvarName: "" };
}

export const CSVCMsgGetCvarValue = {
  encode(message: CSVCMsgGetCvarValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cookie !== 0) {
      writer.uint32(8).int32(message.cookie);
    }
    if (message.cvarName !== "") {
      writer.uint32(18).string(message.cvarName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgGetCvarValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgGetCvarValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.cookie = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.cvarName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgGetCvarValue {
    return {
      cookie: isSet(object.cookie) ? Number(object.cookie) : 0,
      cvarName: isSet(object.cvarName) ? String(object.cvarName) : "",
    };
  },

  toJSON(message: CSVCMsgGetCvarValue): unknown {
    const obj: any = {};
    message.cookie !== undefined && (obj.cookie = Math.round(message.cookie));
    message.cvarName !== undefined && (obj.cvarName = message.cvarName);
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgGetCvarValue>): CSVCMsgGetCvarValue {
    return CSVCMsgGetCvarValue.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgGetCvarValue>): CSVCMsgGetCvarValue {
    const message = createBaseCSVCMsgGetCvarValue();
    message.cookie = object.cookie ?? 0;
    message.cvarName = object.cvarName ?? "";
    return message;
  },
};

function createBaseCSVCMsgMenu(): CSVCMsgMenu {
  return { dialogType: 0, menuKeyValues: Buffer.alloc(0) };
}

export const CSVCMsgMenu = {
  encode(message: CSVCMsgMenu, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dialogType !== 0) {
      writer.uint32(8).int32(message.dialogType);
    }
    if (message.menuKeyValues.length !== 0) {
      writer.uint32(18).bytes(message.menuKeyValues);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgMenu {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgMenu();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.dialogType = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.menuKeyValues = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgMenu {
    return {
      dialogType: isSet(object.dialogType) ? Number(object.dialogType) : 0,
      menuKeyValues: isSet(object.menuKeyValues) ? Buffer.from(bytesFromBase64(object.menuKeyValues)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CSVCMsgMenu): unknown {
    const obj: any = {};
    message.dialogType !== undefined && (obj.dialogType = Math.round(message.dialogType));
    message.menuKeyValues !== undefined &&
      (obj.menuKeyValues = base64FromBytes(
        message.menuKeyValues !== undefined ? message.menuKeyValues : Buffer.alloc(0),
      ));
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgMenu>): CSVCMsgMenu {
    return CSVCMsgMenu.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgMenu>): CSVCMsgMenu {
    const message = createBaseCSVCMsgMenu();
    message.dialogType = object.dialogType ?? 0;
    message.menuKeyValues = object.menuKeyValues ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCSVCMsgUserMessage(): CSVCMsgUserMessage {
  return { msgType: 0, msgData: Buffer.alloc(0), passthrough: 0 };
}

export const CSVCMsgUserMessage = {
  encode(message: CSVCMsgUserMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgType !== 0) {
      writer.uint32(8).int32(message.msgType);
    }
    if (message.msgData.length !== 0) {
      writer.uint32(18).bytes(message.msgData);
    }
    if (message.passthrough !== 0) {
      writer.uint32(24).int32(message.passthrough);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgUserMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgUserMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.msgType = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.msgData = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.passthrough = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgUserMessage {
    return {
      msgType: isSet(object.msgType) ? Number(object.msgType) : 0,
      msgData: isSet(object.msgData) ? Buffer.from(bytesFromBase64(object.msgData)) : Buffer.alloc(0),
      passthrough: isSet(object.passthrough) ? Number(object.passthrough) : 0,
    };
  },

  toJSON(message: CSVCMsgUserMessage): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = Math.round(message.msgType));
    message.msgData !== undefined &&
      (obj.msgData = base64FromBytes(message.msgData !== undefined ? message.msgData : Buffer.alloc(0)));
    message.passthrough !== undefined && (obj.passthrough = Math.round(message.passthrough));
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgUserMessage>): CSVCMsgUserMessage {
    return CSVCMsgUserMessage.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgUserMessage>): CSVCMsgUserMessage {
    const message = createBaseCSVCMsgUserMessage();
    message.msgType = object.msgType ?? 0;
    message.msgData = object.msgData ?? Buffer.alloc(0);
    message.passthrough = object.passthrough ?? 0;
    return message;
  },
};

function createBaseCSVCMsgSendTable(): CSVCMsgSendTable {
  return { isEnd: false, netTableName: "", needsDecoder: false, props: [] };
}

export const CSVCMsgSendTable = {
  encode(message: CSVCMsgSendTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isEnd === true) {
      writer.uint32(8).bool(message.isEnd);
    }
    if (message.netTableName !== "") {
      writer.uint32(18).string(message.netTableName);
    }
    if (message.needsDecoder === true) {
      writer.uint32(24).bool(message.needsDecoder);
    }
    for (const v of message.props) {
      CSVCMsgSendTable_sendpropT.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgSendTable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgSendTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.isEnd = reader.bool();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.netTableName = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.needsDecoder = reader.bool();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.props.push(CSVCMsgSendTable_sendpropT.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgSendTable {
    return {
      isEnd: isSet(object.isEnd) ? Boolean(object.isEnd) : false,
      netTableName: isSet(object.netTableName) ? String(object.netTableName) : "",
      needsDecoder: isSet(object.needsDecoder) ? Boolean(object.needsDecoder) : false,
      props: Array.isArray(object?.props) ? object.props.map((e: any) => CSVCMsgSendTable_sendpropT.fromJSON(e)) : [],
    };
  },

  toJSON(message: CSVCMsgSendTable): unknown {
    const obj: any = {};
    message.isEnd !== undefined && (obj.isEnd = message.isEnd);
    message.netTableName !== undefined && (obj.netTableName = message.netTableName);
    message.needsDecoder !== undefined && (obj.needsDecoder = message.needsDecoder);
    if (message.props) {
      obj.props = message.props.map((e) => e ? CSVCMsgSendTable_sendpropT.toJSON(e) : undefined);
    } else {
      obj.props = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgSendTable>): CSVCMsgSendTable {
    return CSVCMsgSendTable.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgSendTable>): CSVCMsgSendTable {
    const message = createBaseCSVCMsgSendTable();
    message.isEnd = object.isEnd ?? false;
    message.netTableName = object.netTableName ?? "";
    message.needsDecoder = object.needsDecoder ?? false;
    message.props = object.props?.map((e) => CSVCMsgSendTable_sendpropT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSVCMsgSendTable_sendpropT(): CSVCMsgSendTable_sendpropT {
  return {
    type: 0,
    varName: "",
    flags: 0,
    priority: 0,
    dtName: "",
    numElements: 0,
    lowValue: 0,
    highValue: 0,
    numBits: 0,
  };
}

export const CSVCMsgSendTable_sendpropT = {
  encode(message: CSVCMsgSendTable_sendpropT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.varName !== "") {
      writer.uint32(18).string(message.varName);
    }
    if (message.flags !== 0) {
      writer.uint32(24).int32(message.flags);
    }
    if (message.priority !== 0) {
      writer.uint32(32).int32(message.priority);
    }
    if (message.dtName !== "") {
      writer.uint32(42).string(message.dtName);
    }
    if (message.numElements !== 0) {
      writer.uint32(48).int32(message.numElements);
    }
    if (message.lowValue !== 0) {
      writer.uint32(61).float(message.lowValue);
    }
    if (message.highValue !== 0) {
      writer.uint32(69).float(message.highValue);
    }
    if (message.numBits !== 0) {
      writer.uint32(72).int32(message.numBits);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgSendTable_sendpropT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgSendTable_sendpropT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.type = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.varName = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.flags = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.priority = reader.int32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.dtName = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.numElements = reader.int32();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.lowValue = reader.float();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.highValue = reader.float();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.numBits = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgSendTable_sendpropT {
    return {
      type: isSet(object.type) ? Number(object.type) : 0,
      varName: isSet(object.varName) ? String(object.varName) : "",
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      priority: isSet(object.priority) ? Number(object.priority) : 0,
      dtName: isSet(object.dtName) ? String(object.dtName) : "",
      numElements: isSet(object.numElements) ? Number(object.numElements) : 0,
      lowValue: isSet(object.lowValue) ? Number(object.lowValue) : 0,
      highValue: isSet(object.highValue) ? Number(object.highValue) : 0,
      numBits: isSet(object.numBits) ? Number(object.numBits) : 0,
    };
  },

  toJSON(message: CSVCMsgSendTable_sendpropT): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.varName !== undefined && (obj.varName = message.varName);
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.priority !== undefined && (obj.priority = Math.round(message.priority));
    message.dtName !== undefined && (obj.dtName = message.dtName);
    message.numElements !== undefined && (obj.numElements = Math.round(message.numElements));
    message.lowValue !== undefined && (obj.lowValue = message.lowValue);
    message.highValue !== undefined && (obj.highValue = message.highValue);
    message.numBits !== undefined && (obj.numBits = Math.round(message.numBits));
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgSendTable_sendpropT>): CSVCMsgSendTable_sendpropT {
    return CSVCMsgSendTable_sendpropT.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgSendTable_sendpropT>): CSVCMsgSendTable_sendpropT {
    const message = createBaseCSVCMsgSendTable_sendpropT();
    message.type = object.type ?? 0;
    message.varName = object.varName ?? "";
    message.flags = object.flags ?? 0;
    message.priority = object.priority ?? 0;
    message.dtName = object.dtName ?? "";
    message.numElements = object.numElements ?? 0;
    message.lowValue = object.lowValue ?? 0;
    message.highValue = object.highValue ?? 0;
    message.numBits = object.numBits ?? 0;
    return message;
  },
};

function createBaseCSVCMsgGameEventList(): CSVCMsgGameEventList {
  return { descriptors: [] };
}

export const CSVCMsgGameEventList = {
  encode(message: CSVCMsgGameEventList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.descriptors) {
      CSVCMsgGameEventList_descriptorT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgGameEventList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgGameEventList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.descriptors.push(CSVCMsgGameEventList_descriptorT.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgGameEventList {
    return {
      descriptors: Array.isArray(object?.descriptors)
        ? object.descriptors.map((e: any) => CSVCMsgGameEventList_descriptorT.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSVCMsgGameEventList): unknown {
    const obj: any = {};
    if (message.descriptors) {
      obj.descriptors = message.descriptors.map((e) => e ? CSVCMsgGameEventList_descriptorT.toJSON(e) : undefined);
    } else {
      obj.descriptors = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgGameEventList>): CSVCMsgGameEventList {
    return CSVCMsgGameEventList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgGameEventList>): CSVCMsgGameEventList {
    const message = createBaseCSVCMsgGameEventList();
    message.descriptors = object.descriptors?.map((e) => CSVCMsgGameEventList_descriptorT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSVCMsgGameEventList_keyT(): CSVCMsgGameEventList_keyT {
  return { type: 0, name: "" };
}

export const CSVCMsgGameEventList_keyT = {
  encode(message: CSVCMsgGameEventList_keyT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgGameEventList_keyT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgGameEventList_keyT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.type = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
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

  fromJSON(object: any): CSVCMsgGameEventList_keyT {
    return { type: isSet(object.type) ? Number(object.type) : 0, name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: CSVCMsgGameEventList_keyT): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgGameEventList_keyT>): CSVCMsgGameEventList_keyT {
    return CSVCMsgGameEventList_keyT.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgGameEventList_keyT>): CSVCMsgGameEventList_keyT {
    const message = createBaseCSVCMsgGameEventList_keyT();
    message.type = object.type ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCSVCMsgGameEventList_descriptorT(): CSVCMsgGameEventList_descriptorT {
  return { eventid: 0, name: "", keys: [] };
}

export const CSVCMsgGameEventList_descriptorT = {
  encode(message: CSVCMsgGameEventList_descriptorT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventid !== 0) {
      writer.uint32(8).int32(message.eventid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.keys) {
      CSVCMsgGameEventList_keyT.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgGameEventList_descriptorT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgGameEventList_descriptorT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventid = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.keys.push(CSVCMsgGameEventList_keyT.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgGameEventList_descriptorT {
    return {
      eventid: isSet(object.eventid) ? Number(object.eventid) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => CSVCMsgGameEventList_keyT.fromJSON(e)) : [],
    };
  },

  toJSON(message: CSVCMsgGameEventList_descriptorT): unknown {
    const obj: any = {};
    message.eventid !== undefined && (obj.eventid = Math.round(message.eventid));
    message.name !== undefined && (obj.name = message.name);
    if (message.keys) {
      obj.keys = message.keys.map((e) => e ? CSVCMsgGameEventList_keyT.toJSON(e) : undefined);
    } else {
      obj.keys = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgGameEventList_descriptorT>): CSVCMsgGameEventList_descriptorT {
    return CSVCMsgGameEventList_descriptorT.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgGameEventList_descriptorT>): CSVCMsgGameEventList_descriptorT {
    const message = createBaseCSVCMsgGameEventList_descriptorT();
    message.eventid = object.eventid ?? 0;
    message.name = object.name ?? "";
    message.keys = object.keys?.map((e) => CSVCMsgGameEventList_keyT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSVCMsgPacketEntities(): CSVCMsgPacketEntities {
  return {
    maxEntries: 0,
    updatedEntries: 0,
    isDelta: false,
    updateBaseline: false,
    baseline: 0,
    deltaFrom: 0,
    entityData: Buffer.alloc(0),
    pendingFullFrame: false,
    activeSpawngroupHandle: 0,
    maxSpawngroupCreationsequence: 0,
    lastCmdNumber: 0,
    serverTick: 0,
    serializedEntities: Buffer.alloc(0),
    commandQueueInfo: undefined,
    alternateBaselines: [],
  };
}

export const CSVCMsgPacketEntities = {
  encode(message: CSVCMsgPacketEntities, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxEntries !== 0) {
      writer.uint32(8).int32(message.maxEntries);
    }
    if (message.updatedEntries !== 0) {
      writer.uint32(16).int32(message.updatedEntries);
    }
    if (message.isDelta === true) {
      writer.uint32(24).bool(message.isDelta);
    }
    if (message.updateBaseline === true) {
      writer.uint32(32).bool(message.updateBaseline);
    }
    if (message.baseline !== 0) {
      writer.uint32(40).int32(message.baseline);
    }
    if (message.deltaFrom !== 0) {
      writer.uint32(48).int32(message.deltaFrom);
    }
    if (message.entityData.length !== 0) {
      writer.uint32(58).bytes(message.entityData);
    }
    if (message.pendingFullFrame === true) {
      writer.uint32(64).bool(message.pendingFullFrame);
    }
    if (message.activeSpawngroupHandle !== 0) {
      writer.uint32(72).uint32(message.activeSpawngroupHandle);
    }
    if (message.maxSpawngroupCreationsequence !== 0) {
      writer.uint32(80).uint32(message.maxSpawngroupCreationsequence);
    }
    if (message.lastCmdNumber !== 0) {
      writer.uint32(88).uint32(message.lastCmdNumber);
    }
    if (message.serverTick !== 0) {
      writer.uint32(96).uint32(message.serverTick);
    }
    if (message.serializedEntities.length !== 0) {
      writer.uint32(106).bytes(message.serializedEntities);
    }
    if (message.commandQueueInfo !== undefined) {
      CSVCMsgPacketEntities_commandQueueInfoT.encode(message.commandQueueInfo, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.alternateBaselines) {
      CSVCMsgPacketEntities_alternateBaselineT.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgPacketEntities {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgPacketEntities();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.maxEntries = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.updatedEntries = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isDelta = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.updateBaseline = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.baseline = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.deltaFrom = reader.int32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.entityData = reader.bytes() as Buffer;
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.pendingFullFrame = reader.bool();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.activeSpawngroupHandle = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.maxSpawngroupCreationsequence = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.lastCmdNumber = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.serverTick = reader.uint32();
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.serializedEntities = reader.bytes() as Buffer;
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.commandQueueInfo = CSVCMsgPacketEntities_commandQueueInfoT.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.alternateBaselines.push(CSVCMsgPacketEntities_alternateBaselineT.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgPacketEntities {
    return {
      maxEntries: isSet(object.maxEntries) ? Number(object.maxEntries) : 0,
      updatedEntries: isSet(object.updatedEntries) ? Number(object.updatedEntries) : 0,
      isDelta: isSet(object.isDelta) ? Boolean(object.isDelta) : false,
      updateBaseline: isSet(object.updateBaseline) ? Boolean(object.updateBaseline) : false,
      baseline: isSet(object.baseline) ? Number(object.baseline) : 0,
      deltaFrom: isSet(object.deltaFrom) ? Number(object.deltaFrom) : 0,
      entityData: isSet(object.entityData) ? Buffer.from(bytesFromBase64(object.entityData)) : Buffer.alloc(0),
      pendingFullFrame: isSet(object.pendingFullFrame) ? Boolean(object.pendingFullFrame) : false,
      activeSpawngroupHandle: isSet(object.activeSpawngroupHandle) ? Number(object.activeSpawngroupHandle) : 0,
      maxSpawngroupCreationsequence: isSet(object.maxSpawngroupCreationsequence)
        ? Number(object.maxSpawngroupCreationsequence)
        : 0,
      lastCmdNumber: isSet(object.lastCmdNumber) ? Number(object.lastCmdNumber) : 0,
      serverTick: isSet(object.serverTick) ? Number(object.serverTick) : 0,
      serializedEntities: isSet(object.serializedEntities)
        ? Buffer.from(bytesFromBase64(object.serializedEntities))
        : Buffer.alloc(0),
      commandQueueInfo: isSet(object.commandQueueInfo)
        ? CSVCMsgPacketEntities_commandQueueInfoT.fromJSON(object.commandQueueInfo)
        : undefined,
      alternateBaselines: Array.isArray(object?.alternateBaselines)
        ? object.alternateBaselines.map((e: any) => CSVCMsgPacketEntities_alternateBaselineT.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSVCMsgPacketEntities): unknown {
    const obj: any = {};
    message.maxEntries !== undefined && (obj.maxEntries = Math.round(message.maxEntries));
    message.updatedEntries !== undefined && (obj.updatedEntries = Math.round(message.updatedEntries));
    message.isDelta !== undefined && (obj.isDelta = message.isDelta);
    message.updateBaseline !== undefined && (obj.updateBaseline = message.updateBaseline);
    message.baseline !== undefined && (obj.baseline = Math.round(message.baseline));
    message.deltaFrom !== undefined && (obj.deltaFrom = Math.round(message.deltaFrom));
    message.entityData !== undefined &&
      (obj.entityData = base64FromBytes(message.entityData !== undefined ? message.entityData : Buffer.alloc(0)));
    message.pendingFullFrame !== undefined && (obj.pendingFullFrame = message.pendingFullFrame);
    message.activeSpawngroupHandle !== undefined &&
      (obj.activeSpawngroupHandle = Math.round(message.activeSpawngroupHandle));
    message.maxSpawngroupCreationsequence !== undefined &&
      (obj.maxSpawngroupCreationsequence = Math.round(message.maxSpawngroupCreationsequence));
    message.lastCmdNumber !== undefined && (obj.lastCmdNumber = Math.round(message.lastCmdNumber));
    message.serverTick !== undefined && (obj.serverTick = Math.round(message.serverTick));
    message.serializedEntities !== undefined &&
      (obj.serializedEntities = base64FromBytes(
        message.serializedEntities !== undefined ? message.serializedEntities : Buffer.alloc(0),
      ));
    message.commandQueueInfo !== undefined && (obj.commandQueueInfo = message.commandQueueInfo
      ? CSVCMsgPacketEntities_commandQueueInfoT.toJSON(message.commandQueueInfo)
      : undefined);
    if (message.alternateBaselines) {
      obj.alternateBaselines = message.alternateBaselines.map((e) =>
        e ? CSVCMsgPacketEntities_alternateBaselineT.toJSON(e) : undefined
      );
    } else {
      obj.alternateBaselines = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgPacketEntities>): CSVCMsgPacketEntities {
    return CSVCMsgPacketEntities.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgPacketEntities>): CSVCMsgPacketEntities {
    const message = createBaseCSVCMsgPacketEntities();
    message.maxEntries = object.maxEntries ?? 0;
    message.updatedEntries = object.updatedEntries ?? 0;
    message.isDelta = object.isDelta ?? false;
    message.updateBaseline = object.updateBaseline ?? false;
    message.baseline = object.baseline ?? 0;
    message.deltaFrom = object.deltaFrom ?? 0;
    message.entityData = object.entityData ?? Buffer.alloc(0);
    message.pendingFullFrame = object.pendingFullFrame ?? false;
    message.activeSpawngroupHandle = object.activeSpawngroupHandle ?? 0;
    message.maxSpawngroupCreationsequence = object.maxSpawngroupCreationsequence ?? 0;
    message.lastCmdNumber = object.lastCmdNumber ?? 0;
    message.serverTick = object.serverTick ?? 0;
    message.serializedEntities = object.serializedEntities ?? Buffer.alloc(0);
    message.commandQueueInfo = (object.commandQueueInfo !== undefined && object.commandQueueInfo !== null)
      ? CSVCMsgPacketEntities_commandQueueInfoT.fromPartial(object.commandQueueInfo)
      : undefined;
    message.alternateBaselines =
      object.alternateBaselines?.map((e) => CSVCMsgPacketEntities_alternateBaselineT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSVCMsgPacketEntities_commandQueueInfoT(): CSVCMsgPacketEntities_commandQueueInfoT {
  return {
    commandsQueued: 0,
    commandQueueDesiredSize: 0,
    starvedCommandTicks: 0,
    timeDilationPercent: 0,
    discardedCommandTicks: 0,
  };
}

export const CSVCMsgPacketEntities_commandQueueInfoT = {
  encode(message: CSVCMsgPacketEntities_commandQueueInfoT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commandsQueued !== 0) {
      writer.uint32(8).uint32(message.commandsQueued);
    }
    if (message.commandQueueDesiredSize !== 0) {
      writer.uint32(16).uint32(message.commandQueueDesiredSize);
    }
    if (message.starvedCommandTicks !== 0) {
      writer.uint32(24).uint32(message.starvedCommandTicks);
    }
    if (message.timeDilationPercent !== 0) {
      writer.uint32(37).float(message.timeDilationPercent);
    }
    if (message.discardedCommandTicks !== 0) {
      writer.uint32(40).uint32(message.discardedCommandTicks);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgPacketEntities_commandQueueInfoT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgPacketEntities_commandQueueInfoT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.commandsQueued = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.commandQueueDesiredSize = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.starvedCommandTicks = reader.uint32();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.timeDilationPercent = reader.float();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.discardedCommandTicks = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgPacketEntities_commandQueueInfoT {
    return {
      commandsQueued: isSet(object.commandsQueued) ? Number(object.commandsQueued) : 0,
      commandQueueDesiredSize: isSet(object.commandQueueDesiredSize) ? Number(object.commandQueueDesiredSize) : 0,
      starvedCommandTicks: isSet(object.starvedCommandTicks) ? Number(object.starvedCommandTicks) : 0,
      timeDilationPercent: isSet(object.timeDilationPercent) ? Number(object.timeDilationPercent) : 0,
      discardedCommandTicks: isSet(object.discardedCommandTicks) ? Number(object.discardedCommandTicks) : 0,
    };
  },

  toJSON(message: CSVCMsgPacketEntities_commandQueueInfoT): unknown {
    const obj: any = {};
    message.commandsQueued !== undefined && (obj.commandsQueued = Math.round(message.commandsQueued));
    message.commandQueueDesiredSize !== undefined &&
      (obj.commandQueueDesiredSize = Math.round(message.commandQueueDesiredSize));
    message.starvedCommandTicks !== undefined && (obj.starvedCommandTicks = Math.round(message.starvedCommandTicks));
    message.timeDilationPercent !== undefined && (obj.timeDilationPercent = message.timeDilationPercent);
    message.discardedCommandTicks !== undefined &&
      (obj.discardedCommandTicks = Math.round(message.discardedCommandTicks));
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgPacketEntities_commandQueueInfoT>): CSVCMsgPacketEntities_commandQueueInfoT {
    return CSVCMsgPacketEntities_commandQueueInfoT.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgPacketEntities_commandQueueInfoT>): CSVCMsgPacketEntities_commandQueueInfoT {
    const message = createBaseCSVCMsgPacketEntities_commandQueueInfoT();
    message.commandsQueued = object.commandsQueued ?? 0;
    message.commandQueueDesiredSize = object.commandQueueDesiredSize ?? 0;
    message.starvedCommandTicks = object.starvedCommandTicks ?? 0;
    message.timeDilationPercent = object.timeDilationPercent ?? 0;
    message.discardedCommandTicks = object.discardedCommandTicks ?? 0;
    return message;
  },
};

function createBaseCSVCMsgPacketEntities_alternateBaselineT(): CSVCMsgPacketEntities_alternateBaselineT {
  return { entityIndex: 0, baselineIndex: 0 };
}

export const CSVCMsgPacketEntities_alternateBaselineT = {
  encode(message: CSVCMsgPacketEntities_alternateBaselineT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityIndex !== 0) {
      writer.uint32(8).int32(message.entityIndex);
    }
    if (message.baselineIndex !== 0) {
      writer.uint32(16).int32(message.baselineIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgPacketEntities_alternateBaselineT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgPacketEntities_alternateBaselineT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entityIndex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.baselineIndex = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgPacketEntities_alternateBaselineT {
    return {
      entityIndex: isSet(object.entityIndex) ? Number(object.entityIndex) : 0,
      baselineIndex: isSet(object.baselineIndex) ? Number(object.baselineIndex) : 0,
    };
  },

  toJSON(message: CSVCMsgPacketEntities_alternateBaselineT): unknown {
    const obj: any = {};
    message.entityIndex !== undefined && (obj.entityIndex = Math.round(message.entityIndex));
    message.baselineIndex !== undefined && (obj.baselineIndex = Math.round(message.baselineIndex));
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgPacketEntities_alternateBaselineT>): CSVCMsgPacketEntities_alternateBaselineT {
    return CSVCMsgPacketEntities_alternateBaselineT.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgPacketEntities_alternateBaselineT>): CSVCMsgPacketEntities_alternateBaselineT {
    const message = createBaseCSVCMsgPacketEntities_alternateBaselineT();
    message.entityIndex = object.entityIndex ?? 0;
    message.baselineIndex = object.baselineIndex ?? 0;
    return message;
  },
};

function createBaseCSVCMsgTempEntities(): CSVCMsgTempEntities {
  return { reliable: false, numEntries: 0, entityData: Buffer.alloc(0) };
}

export const CSVCMsgTempEntities = {
  encode(message: CSVCMsgTempEntities, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reliable === true) {
      writer.uint32(8).bool(message.reliable);
    }
    if (message.numEntries !== 0) {
      writer.uint32(16).int32(message.numEntries);
    }
    if (message.entityData.length !== 0) {
      writer.uint32(26).bytes(message.entityData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgTempEntities {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgTempEntities();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.reliable = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.numEntries = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.entityData = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgTempEntities {
    return {
      reliable: isSet(object.reliable) ? Boolean(object.reliable) : false,
      numEntries: isSet(object.numEntries) ? Number(object.numEntries) : 0,
      entityData: isSet(object.entityData) ? Buffer.from(bytesFromBase64(object.entityData)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CSVCMsgTempEntities): unknown {
    const obj: any = {};
    message.reliable !== undefined && (obj.reliable = message.reliable);
    message.numEntries !== undefined && (obj.numEntries = Math.round(message.numEntries));
    message.entityData !== undefined &&
      (obj.entityData = base64FromBytes(message.entityData !== undefined ? message.entityData : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgTempEntities>): CSVCMsgTempEntities {
    return CSVCMsgTempEntities.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgTempEntities>): CSVCMsgTempEntities {
    const message = createBaseCSVCMsgTempEntities();
    message.reliable = object.reliable ?? false;
    message.numEntries = object.numEntries ?? 0;
    message.entityData = object.entityData ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCSVCMsgCreateStringTable(): CSVCMsgCreateStringTable {
  return {
    name: "",
    numEntries: 0,
    userDataFixedSize: false,
    userDataSize: 0,
    userDataSizeBits: 0,
    flags: 0,
    stringData: Buffer.alloc(0),
    uncompressedSize: 0,
    dataCompressed: false,
    usingVarintBitcounts: false,
  };
}

export const CSVCMsgCreateStringTable = {
  encode(message: CSVCMsgCreateStringTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.numEntries !== 0) {
      writer.uint32(16).int32(message.numEntries);
    }
    if (message.userDataFixedSize === true) {
      writer.uint32(24).bool(message.userDataFixedSize);
    }
    if (message.userDataSize !== 0) {
      writer.uint32(32).int32(message.userDataSize);
    }
    if (message.userDataSizeBits !== 0) {
      writer.uint32(40).int32(message.userDataSizeBits);
    }
    if (message.flags !== 0) {
      writer.uint32(48).int32(message.flags);
    }
    if (message.stringData.length !== 0) {
      writer.uint32(58).bytes(message.stringData);
    }
    if (message.uncompressedSize !== 0) {
      writer.uint32(64).int32(message.uncompressedSize);
    }
    if (message.dataCompressed === true) {
      writer.uint32(72).bool(message.dataCompressed);
    }
    if (message.usingVarintBitcounts === true) {
      writer.uint32(80).bool(message.usingVarintBitcounts);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgCreateStringTable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgCreateStringTable();
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

          message.numEntries = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.userDataFixedSize = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.userDataSize = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.userDataSizeBits = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.flags = reader.int32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.stringData = reader.bytes() as Buffer;
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.uncompressedSize = reader.int32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.dataCompressed = reader.bool();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.usingVarintBitcounts = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgCreateStringTable {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      numEntries: isSet(object.numEntries) ? Number(object.numEntries) : 0,
      userDataFixedSize: isSet(object.userDataFixedSize) ? Boolean(object.userDataFixedSize) : false,
      userDataSize: isSet(object.userDataSize) ? Number(object.userDataSize) : 0,
      userDataSizeBits: isSet(object.userDataSizeBits) ? Number(object.userDataSizeBits) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      stringData: isSet(object.stringData) ? Buffer.from(bytesFromBase64(object.stringData)) : Buffer.alloc(0),
      uncompressedSize: isSet(object.uncompressedSize) ? Number(object.uncompressedSize) : 0,
      dataCompressed: isSet(object.dataCompressed) ? Boolean(object.dataCompressed) : false,
      usingVarintBitcounts: isSet(object.usingVarintBitcounts) ? Boolean(object.usingVarintBitcounts) : false,
    };
  },

  toJSON(message: CSVCMsgCreateStringTable): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.numEntries !== undefined && (obj.numEntries = Math.round(message.numEntries));
    message.userDataFixedSize !== undefined && (obj.userDataFixedSize = message.userDataFixedSize);
    message.userDataSize !== undefined && (obj.userDataSize = Math.round(message.userDataSize));
    message.userDataSizeBits !== undefined && (obj.userDataSizeBits = Math.round(message.userDataSizeBits));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.stringData !== undefined &&
      (obj.stringData = base64FromBytes(message.stringData !== undefined ? message.stringData : Buffer.alloc(0)));
    message.uncompressedSize !== undefined && (obj.uncompressedSize = Math.round(message.uncompressedSize));
    message.dataCompressed !== undefined && (obj.dataCompressed = message.dataCompressed);
    message.usingVarintBitcounts !== undefined && (obj.usingVarintBitcounts = message.usingVarintBitcounts);
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgCreateStringTable>): CSVCMsgCreateStringTable {
    return CSVCMsgCreateStringTable.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgCreateStringTable>): CSVCMsgCreateStringTable {
    const message = createBaseCSVCMsgCreateStringTable();
    message.name = object.name ?? "";
    message.numEntries = object.numEntries ?? 0;
    message.userDataFixedSize = object.userDataFixedSize ?? false;
    message.userDataSize = object.userDataSize ?? 0;
    message.userDataSizeBits = object.userDataSizeBits ?? 0;
    message.flags = object.flags ?? 0;
    message.stringData = object.stringData ?? Buffer.alloc(0);
    message.uncompressedSize = object.uncompressedSize ?? 0;
    message.dataCompressed = object.dataCompressed ?? false;
    message.usingVarintBitcounts = object.usingVarintBitcounts ?? false;
    return message;
  },
};

function createBaseCSVCMsgUpdateStringTable(): CSVCMsgUpdateStringTable {
  return { tableId: 0, numChangedEntries: 0, stringData: Buffer.alloc(0) };
}

export const CSVCMsgUpdateStringTable = {
  encode(message: CSVCMsgUpdateStringTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tableId !== 0) {
      writer.uint32(8).int32(message.tableId);
    }
    if (message.numChangedEntries !== 0) {
      writer.uint32(16).int32(message.numChangedEntries);
    }
    if (message.stringData.length !== 0) {
      writer.uint32(26).bytes(message.stringData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgUpdateStringTable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgUpdateStringTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.tableId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.numChangedEntries = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.stringData = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgUpdateStringTable {
    return {
      tableId: isSet(object.tableId) ? Number(object.tableId) : 0,
      numChangedEntries: isSet(object.numChangedEntries) ? Number(object.numChangedEntries) : 0,
      stringData: isSet(object.stringData) ? Buffer.from(bytesFromBase64(object.stringData)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CSVCMsgUpdateStringTable): unknown {
    const obj: any = {};
    message.tableId !== undefined && (obj.tableId = Math.round(message.tableId));
    message.numChangedEntries !== undefined && (obj.numChangedEntries = Math.round(message.numChangedEntries));
    message.stringData !== undefined &&
      (obj.stringData = base64FromBytes(message.stringData !== undefined ? message.stringData : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgUpdateStringTable>): CSVCMsgUpdateStringTable {
    return CSVCMsgUpdateStringTable.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgUpdateStringTable>): CSVCMsgUpdateStringTable {
    const message = createBaseCSVCMsgUpdateStringTable();
    message.tableId = object.tableId ?? 0;
    message.numChangedEntries = object.numChangedEntries ?? 0;
    message.stringData = object.stringData ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCSVCMsgVoiceData(): CSVCMsgVoiceData {
  return { audio: undefined, client: 0, proximity: false, xuid: "0", audibleMask: 0, tick: 0 };
}

export const CSVCMsgVoiceData = {
  encode(message: CSVCMsgVoiceData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.audio !== undefined) {
      CMsgVoiceAudio.encode(message.audio, writer.uint32(10).fork()).ldelim();
    }
    if (message.client !== 0) {
      writer.uint32(16).int32(message.client);
    }
    if (message.proximity === true) {
      writer.uint32(24).bool(message.proximity);
    }
    if (message.xuid !== "0") {
      writer.uint32(33).fixed64(message.xuid);
    }
    if (message.audibleMask !== 0) {
      writer.uint32(40).int32(message.audibleMask);
    }
    if (message.tick !== 0) {
      writer.uint32(48).uint32(message.tick);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgVoiceData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgVoiceData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.audio = CMsgVoiceAudio.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.client = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.proximity = reader.bool();
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.xuid = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.audibleMask = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.tick = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgVoiceData {
    return {
      audio: isSet(object.audio) ? CMsgVoiceAudio.fromJSON(object.audio) : undefined,
      client: isSet(object.client) ? Number(object.client) : 0,
      proximity: isSet(object.proximity) ? Boolean(object.proximity) : false,
      xuid: isSet(object.xuid) ? String(object.xuid) : "0",
      audibleMask: isSet(object.audibleMask) ? Number(object.audibleMask) : 0,
      tick: isSet(object.tick) ? Number(object.tick) : 0,
    };
  },

  toJSON(message: CSVCMsgVoiceData): unknown {
    const obj: any = {};
    message.audio !== undefined && (obj.audio = message.audio ? CMsgVoiceAudio.toJSON(message.audio) : undefined);
    message.client !== undefined && (obj.client = Math.round(message.client));
    message.proximity !== undefined && (obj.proximity = message.proximity);
    message.xuid !== undefined && (obj.xuid = message.xuid);
    message.audibleMask !== undefined && (obj.audibleMask = Math.round(message.audibleMask));
    message.tick !== undefined && (obj.tick = Math.round(message.tick));
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgVoiceData>): CSVCMsgVoiceData {
    return CSVCMsgVoiceData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgVoiceData>): CSVCMsgVoiceData {
    const message = createBaseCSVCMsgVoiceData();
    message.audio = (object.audio !== undefined && object.audio !== null)
      ? CMsgVoiceAudio.fromPartial(object.audio)
      : undefined;
    message.client = object.client ?? 0;
    message.proximity = object.proximity ?? false;
    message.xuid = object.xuid ?? "0";
    message.audibleMask = object.audibleMask ?? 0;
    message.tick = object.tick ?? 0;
    return message;
  },
};

function createBaseCSVCMsgPacketReliable(): CSVCMsgPacketReliable {
  return { tick: 0, messagessize: 0, state: false };
}

export const CSVCMsgPacketReliable = {
  encode(message: CSVCMsgPacketReliable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tick !== 0) {
      writer.uint32(8).int32(message.tick);
    }
    if (message.messagessize !== 0) {
      writer.uint32(16).int32(message.messagessize);
    }
    if (message.state === true) {
      writer.uint32(24).bool(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgPacketReliable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgPacketReliable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.tick = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.messagessize = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.state = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgPacketReliable {
    return {
      tick: isSet(object.tick) ? Number(object.tick) : 0,
      messagessize: isSet(object.messagessize) ? Number(object.messagessize) : 0,
      state: isSet(object.state) ? Boolean(object.state) : false,
    };
  },

  toJSON(message: CSVCMsgPacketReliable): unknown {
    const obj: any = {};
    message.tick !== undefined && (obj.tick = Math.round(message.tick));
    message.messagessize !== undefined && (obj.messagessize = Math.round(message.messagessize));
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgPacketReliable>): CSVCMsgPacketReliable {
    return CSVCMsgPacketReliable.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgPacketReliable>): CSVCMsgPacketReliable {
    const message = createBaseCSVCMsgPacketReliable();
    message.tick = object.tick ?? 0;
    message.messagessize = object.messagessize ?? 0;
    message.state = object.state ?? false;
    return message;
  },
};

function createBaseCSVCMsgFullFrameSplit(): CSVCMsgFullFrameSplit {
  return { tick: 0, section: 0, total: 0, data: Buffer.alloc(0) };
}

export const CSVCMsgFullFrameSplit = {
  encode(message: CSVCMsgFullFrameSplit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tick !== 0) {
      writer.uint32(8).int32(message.tick);
    }
    if (message.section !== 0) {
      writer.uint32(16).int32(message.section);
    }
    if (message.total !== 0) {
      writer.uint32(24).int32(message.total);
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgFullFrameSplit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgFullFrameSplit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.tick = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.section = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.total = reader.int32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.data = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgFullFrameSplit {
    return {
      tick: isSet(object.tick) ? Number(object.tick) : 0,
      section: isSet(object.section) ? Number(object.section) : 0,
      total: isSet(object.total) ? Number(object.total) : 0,
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CSVCMsgFullFrameSplit): unknown {
    const obj: any = {};
    message.tick !== undefined && (obj.tick = Math.round(message.tick));
    message.section !== undefined && (obj.section = Math.round(message.section));
    message.total !== undefined && (obj.total = Math.round(message.total));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgFullFrameSplit>): CSVCMsgFullFrameSplit {
    return CSVCMsgFullFrameSplit.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgFullFrameSplit>): CSVCMsgFullFrameSplit {
    const message = createBaseCSVCMsgFullFrameSplit();
    message.tick = object.tick ?? 0;
    message.section = object.section ?? 0;
    message.total = object.total ?? 0;
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCSVCMsgHLTVStatus(): CSVCMsgHLTVStatus {
  return { master: "", clients: 0, slots: 0, proxies: 0 };
}

export const CSVCMsgHLTVStatus = {
  encode(message: CSVCMsgHLTVStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.master !== "") {
      writer.uint32(10).string(message.master);
    }
    if (message.clients !== 0) {
      writer.uint32(16).int32(message.clients);
    }
    if (message.slots !== 0) {
      writer.uint32(24).int32(message.slots);
    }
    if (message.proxies !== 0) {
      writer.uint32(32).int32(message.proxies);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgHLTVStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgHLTVStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.master = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.clients = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.slots = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.proxies = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgHLTVStatus {
    return {
      master: isSet(object.master) ? String(object.master) : "",
      clients: isSet(object.clients) ? Number(object.clients) : 0,
      slots: isSet(object.slots) ? Number(object.slots) : 0,
      proxies: isSet(object.proxies) ? Number(object.proxies) : 0,
    };
  },

  toJSON(message: CSVCMsgHLTVStatus): unknown {
    const obj: any = {};
    message.master !== undefined && (obj.master = message.master);
    message.clients !== undefined && (obj.clients = Math.round(message.clients));
    message.slots !== undefined && (obj.slots = Math.round(message.slots));
    message.proxies !== undefined && (obj.proxies = Math.round(message.proxies));
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgHLTVStatus>): CSVCMsgHLTVStatus {
    return CSVCMsgHLTVStatus.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgHLTVStatus>): CSVCMsgHLTVStatus {
    const message = createBaseCSVCMsgHLTVStatus();
    message.master = object.master ?? "";
    message.clients = object.clients ?? 0;
    message.slots = object.slots ?? 0;
    message.proxies = object.proxies ?? 0;
    return message;
  },
};

function createBaseCSVCMsgServerSteamID(): CSVCMsgServerSteamID {
  return { steamId: "0" };
}

export const CSVCMsgServerSteamID = {
  encode(message: CSVCMsgServerSteamID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(8).uint64(message.steamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgServerSteamID {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgServerSteamID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.steamId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgServerSteamID {
    return { steamId: isSet(object.steamId) ? String(object.steamId) : "0" };
  },

  toJSON(message: CSVCMsgServerSteamID): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgServerSteamID>): CSVCMsgServerSteamID {
    return CSVCMsgServerSteamID.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgServerSteamID>): CSVCMsgServerSteamID {
    const message = createBaseCSVCMsgServerSteamID();
    message.steamId = object.steamId ?? "0";
    return message;
  },
};

function createBaseCSVCMsgCmdKeyValues(): CSVCMsgCmdKeyValues {
  return { data: Buffer.alloc(0) };
}

export const CSVCMsgCmdKeyValues = {
  encode(message: CSVCMsgCmdKeyValues, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgCmdKeyValues {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgCmdKeyValues();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.data = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgCmdKeyValues {
    return { data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0) };
  },

  toJSON(message: CSVCMsgCmdKeyValues): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgCmdKeyValues>): CSVCMsgCmdKeyValues {
    return CSVCMsgCmdKeyValues.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgCmdKeyValues>): CSVCMsgCmdKeyValues {
    const message = createBaseCSVCMsgCmdKeyValues();
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCSVCMsgRconServerDetails(): CSVCMsgRconServerDetails {
  return { token: Buffer.alloc(0), details: "" };
}

export const CSVCMsgRconServerDetails = {
  encode(message: CSVCMsgRconServerDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token.length !== 0) {
      writer.uint32(10).bytes(message.token);
    }
    if (message.details !== "") {
      writer.uint32(18).string(message.details);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgRconServerDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgRconServerDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.token = reader.bytes() as Buffer;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.details = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgRconServerDetails {
    return {
      token: isSet(object.token) ? Buffer.from(bytesFromBase64(object.token)) : Buffer.alloc(0),
      details: isSet(object.details) ? String(object.details) : "",
    };
  },

  toJSON(message: CSVCMsgRconServerDetails): unknown {
    const obj: any = {};
    message.token !== undefined &&
      (obj.token = base64FromBytes(message.token !== undefined ? message.token : Buffer.alloc(0)));
    message.details !== undefined && (obj.details = message.details);
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgRconServerDetails>): CSVCMsgRconServerDetails {
    return CSVCMsgRconServerDetails.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgRconServerDetails>): CSVCMsgRconServerDetails {
    const message = createBaseCSVCMsgRconServerDetails();
    message.token = object.token ?? Buffer.alloc(0);
    message.details = object.details ?? "";
    return message;
  },
};

function createBaseCMsgIPCAddress(): CMsgIPCAddress {
  return { computerGuid: "0", processId: 0 };
}

export const CMsgIPCAddress = {
  encode(message: CMsgIPCAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.computerGuid !== "0") {
      writer.uint32(9).fixed64(message.computerGuid);
    }
    if (message.processId !== 0) {
      writer.uint32(16).uint32(message.processId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgIPCAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgIPCAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.computerGuid = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.processId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgIPCAddress {
    return {
      computerGuid: isSet(object.computerGuid) ? String(object.computerGuid) : "0",
      processId: isSet(object.processId) ? Number(object.processId) : 0,
    };
  },

  toJSON(message: CMsgIPCAddress): unknown {
    const obj: any = {};
    message.computerGuid !== undefined && (obj.computerGuid = message.computerGuid);
    message.processId !== undefined && (obj.processId = Math.round(message.processId));
    return obj;
  },

  create(base?: DeepPartial<CMsgIPCAddress>): CMsgIPCAddress {
    return CMsgIPCAddress.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgIPCAddress>): CMsgIPCAddress {
    const message = createBaseCMsgIPCAddress();
    message.computerGuid = object.computerGuid ?? "0";
    message.processId = object.processId ?? 0;
    return message;
  },
};

function createBaseCMsgServerPeer(): CMsgServerPeer {
  return {
    playerSlot: 0,
    steamid: "0",
    ipc: undefined,
    theyHearYou: false,
    youHearThem: false,
    isListenserverHost: false,
  };
}

export const CMsgServerPeer = {
  encode(message: CMsgServerPeer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerSlot !== 0) {
      writer.uint32(8).int32(message.playerSlot);
    }
    if (message.steamid !== "0") {
      writer.uint32(17).fixed64(message.steamid);
    }
    if (message.ipc !== undefined) {
      CMsgIPCAddress.encode(message.ipc, writer.uint32(26).fork()).ldelim();
    }
    if (message.theyHearYou === true) {
      writer.uint32(32).bool(message.theyHearYou);
    }
    if (message.youHearThem === true) {
      writer.uint32(40).bool(message.youHearThem);
    }
    if (message.isListenserverHost === true) {
      writer.uint32(48).bool(message.isListenserverHost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerPeer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerPeer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerSlot = reader.int32();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.steamid = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.ipc = CMsgIPCAddress.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.theyHearYou = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.youHearThem = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.isListenserverHost = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerPeer {
    return {
      playerSlot: isSet(object.playerSlot) ? Number(object.playerSlot) : 0,
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      ipc: isSet(object.ipc) ? CMsgIPCAddress.fromJSON(object.ipc) : undefined,
      theyHearYou: isSet(object.theyHearYou) ? Boolean(object.theyHearYou) : false,
      youHearThem: isSet(object.youHearThem) ? Boolean(object.youHearThem) : false,
      isListenserverHost: isSet(object.isListenserverHost) ? Boolean(object.isListenserverHost) : false,
    };
  },

  toJSON(message: CMsgServerPeer): unknown {
    const obj: any = {};
    message.playerSlot !== undefined && (obj.playerSlot = Math.round(message.playerSlot));
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.ipc !== undefined && (obj.ipc = message.ipc ? CMsgIPCAddress.toJSON(message.ipc) : undefined);
    message.theyHearYou !== undefined && (obj.theyHearYou = message.theyHearYou);
    message.youHearThem !== undefined && (obj.youHearThem = message.youHearThem);
    message.isListenserverHost !== undefined && (obj.isListenserverHost = message.isListenserverHost);
    return obj;
  },

  create(base?: DeepPartial<CMsgServerPeer>): CMsgServerPeer {
    return CMsgServerPeer.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgServerPeer>): CMsgServerPeer {
    const message = createBaseCMsgServerPeer();
    message.playerSlot = object.playerSlot ?? 0;
    message.steamid = object.steamid ?? "0";
    message.ipc = (object.ipc !== undefined && object.ipc !== null)
      ? CMsgIPCAddress.fromPartial(object.ipc)
      : undefined;
    message.theyHearYou = object.theyHearYou ?? false;
    message.youHearThem = object.youHearThem ?? false;
    message.isListenserverHost = object.isListenserverHost ?? false;
    return message;
  },
};

function createBaseCSVCMsgPeerList(): CSVCMsgPeerList {
  return { peer: [] };
}

export const CSVCMsgPeerList = {
  encode(message: CSVCMsgPeerList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.peer) {
      CMsgServerPeer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgPeerList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgPeerList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.peer.push(CMsgServerPeer.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgPeerList {
    return { peer: Array.isArray(object?.peer) ? object.peer.map((e: any) => CMsgServerPeer.fromJSON(e)) : [] };
  },

  toJSON(message: CSVCMsgPeerList): unknown {
    const obj: any = {};
    if (message.peer) {
      obj.peer = message.peer.map((e) => e ? CMsgServerPeer.toJSON(e) : undefined);
    } else {
      obj.peer = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgPeerList>): CSVCMsgPeerList {
    return CSVCMsgPeerList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgPeerList>): CSVCMsgPeerList {
    const message = createBaseCSVCMsgPeerList();
    message.peer = object.peer?.map((e) => CMsgServerPeer.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSVCMsgClearAllStringTables(): CSVCMsgClearAllStringTables {
  return { mapname: "" };
}

export const CSVCMsgClearAllStringTables = {
  encode(message: CSVCMsgClearAllStringTables, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapname !== "") {
      writer.uint32(10).string(message.mapname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgClearAllStringTables {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgClearAllStringTables();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.mapname = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgClearAllStringTables {
    return { mapname: isSet(object.mapname) ? String(object.mapname) : "" };
  },

  toJSON(message: CSVCMsgClearAllStringTables): unknown {
    const obj: any = {};
    message.mapname !== undefined && (obj.mapname = message.mapname);
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgClearAllStringTables>): CSVCMsgClearAllStringTables {
    return CSVCMsgClearAllStringTables.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgClearAllStringTables>): CSVCMsgClearAllStringTables {
    const message = createBaseCSVCMsgClearAllStringTables();
    message.mapname = object.mapname ?? "";
    return message;
  },
};

function createBaseProtoFlattenedSerializerFieldT(): ProtoFlattenedSerializerFieldT {
  return {
    varTypeSym: 0,
    varNameSym: 0,
    bitCount: 0,
    lowValue: 0,
    highValue: 0,
    encodeFlags: 0,
    fieldSerializerNameSym: 0,
    fieldSerializerVersion: 0,
    sendNodeSym: 0,
    varEncoderSym: 0,
  };
}

export const ProtoFlattenedSerializerFieldT = {
  encode(message: ProtoFlattenedSerializerFieldT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.varTypeSym !== 0) {
      writer.uint32(8).int32(message.varTypeSym);
    }
    if (message.varNameSym !== 0) {
      writer.uint32(16).int32(message.varNameSym);
    }
    if (message.bitCount !== 0) {
      writer.uint32(24).int32(message.bitCount);
    }
    if (message.lowValue !== 0) {
      writer.uint32(37).float(message.lowValue);
    }
    if (message.highValue !== 0) {
      writer.uint32(45).float(message.highValue);
    }
    if (message.encodeFlags !== 0) {
      writer.uint32(48).int32(message.encodeFlags);
    }
    if (message.fieldSerializerNameSym !== 0) {
      writer.uint32(56).int32(message.fieldSerializerNameSym);
    }
    if (message.fieldSerializerVersion !== 0) {
      writer.uint32(64).int32(message.fieldSerializerVersion);
    }
    if (message.sendNodeSym !== 0) {
      writer.uint32(72).int32(message.sendNodeSym);
    }
    if (message.varEncoderSym !== 0) {
      writer.uint32(80).int32(message.varEncoderSym);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtoFlattenedSerializerFieldT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoFlattenedSerializerFieldT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.varTypeSym = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.varNameSym = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.bitCount = reader.int32();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.lowValue = reader.float();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.highValue = reader.float();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.encodeFlags = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.fieldSerializerNameSym = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.fieldSerializerVersion = reader.int32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.sendNodeSym = reader.int32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.varEncoderSym = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProtoFlattenedSerializerFieldT {
    return {
      varTypeSym: isSet(object.varTypeSym) ? Number(object.varTypeSym) : 0,
      varNameSym: isSet(object.varNameSym) ? Number(object.varNameSym) : 0,
      bitCount: isSet(object.bitCount) ? Number(object.bitCount) : 0,
      lowValue: isSet(object.lowValue) ? Number(object.lowValue) : 0,
      highValue: isSet(object.highValue) ? Number(object.highValue) : 0,
      encodeFlags: isSet(object.encodeFlags) ? Number(object.encodeFlags) : 0,
      fieldSerializerNameSym: isSet(object.fieldSerializerNameSym) ? Number(object.fieldSerializerNameSym) : 0,
      fieldSerializerVersion: isSet(object.fieldSerializerVersion) ? Number(object.fieldSerializerVersion) : 0,
      sendNodeSym: isSet(object.sendNodeSym) ? Number(object.sendNodeSym) : 0,
      varEncoderSym: isSet(object.varEncoderSym) ? Number(object.varEncoderSym) : 0,
    };
  },

  toJSON(message: ProtoFlattenedSerializerFieldT): unknown {
    const obj: any = {};
    message.varTypeSym !== undefined && (obj.varTypeSym = Math.round(message.varTypeSym));
    message.varNameSym !== undefined && (obj.varNameSym = Math.round(message.varNameSym));
    message.bitCount !== undefined && (obj.bitCount = Math.round(message.bitCount));
    message.lowValue !== undefined && (obj.lowValue = message.lowValue);
    message.highValue !== undefined && (obj.highValue = message.highValue);
    message.encodeFlags !== undefined && (obj.encodeFlags = Math.round(message.encodeFlags));
    message.fieldSerializerNameSym !== undefined &&
      (obj.fieldSerializerNameSym = Math.round(message.fieldSerializerNameSym));
    message.fieldSerializerVersion !== undefined &&
      (obj.fieldSerializerVersion = Math.round(message.fieldSerializerVersion));
    message.sendNodeSym !== undefined && (obj.sendNodeSym = Math.round(message.sendNodeSym));
    message.varEncoderSym !== undefined && (obj.varEncoderSym = Math.round(message.varEncoderSym));
    return obj;
  },

  create(base?: DeepPartial<ProtoFlattenedSerializerFieldT>): ProtoFlattenedSerializerFieldT {
    return ProtoFlattenedSerializerFieldT.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProtoFlattenedSerializerFieldT>): ProtoFlattenedSerializerFieldT {
    const message = createBaseProtoFlattenedSerializerFieldT();
    message.varTypeSym = object.varTypeSym ?? 0;
    message.varNameSym = object.varNameSym ?? 0;
    message.bitCount = object.bitCount ?? 0;
    message.lowValue = object.lowValue ?? 0;
    message.highValue = object.highValue ?? 0;
    message.encodeFlags = object.encodeFlags ?? 0;
    message.fieldSerializerNameSym = object.fieldSerializerNameSym ?? 0;
    message.fieldSerializerVersion = object.fieldSerializerVersion ?? 0;
    message.sendNodeSym = object.sendNodeSym ?? 0;
    message.varEncoderSym = object.varEncoderSym ?? 0;
    return message;
  },
};

function createBaseProtoFlattenedSerializerT(): ProtoFlattenedSerializerT {
  return { serializerNameSym: 0, serializerVersion: 0, fieldsIndex: [] };
}

export const ProtoFlattenedSerializerT = {
  encode(message: ProtoFlattenedSerializerT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serializerNameSym !== 0) {
      writer.uint32(8).int32(message.serializerNameSym);
    }
    if (message.serializerVersion !== 0) {
      writer.uint32(16).int32(message.serializerVersion);
    }
    writer.uint32(26).fork();
    for (const v of message.fieldsIndex) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtoFlattenedSerializerT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoFlattenedSerializerT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.serializerNameSym = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.serializerVersion = reader.int32();
          continue;
        case 3:
          if (tag == 24) {
            message.fieldsIndex.push(reader.int32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fieldsIndex.push(reader.int32());
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

  fromJSON(object: any): ProtoFlattenedSerializerT {
    return {
      serializerNameSym: isSet(object.serializerNameSym) ? Number(object.serializerNameSym) : 0,
      serializerVersion: isSet(object.serializerVersion) ? Number(object.serializerVersion) : 0,
      fieldsIndex: Array.isArray(object?.fieldsIndex) ? object.fieldsIndex.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: ProtoFlattenedSerializerT): unknown {
    const obj: any = {};
    message.serializerNameSym !== undefined && (obj.serializerNameSym = Math.round(message.serializerNameSym));
    message.serializerVersion !== undefined && (obj.serializerVersion = Math.round(message.serializerVersion));
    if (message.fieldsIndex) {
      obj.fieldsIndex = message.fieldsIndex.map((e) => Math.round(e));
    } else {
      obj.fieldsIndex = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ProtoFlattenedSerializerT>): ProtoFlattenedSerializerT {
    return ProtoFlattenedSerializerT.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProtoFlattenedSerializerT>): ProtoFlattenedSerializerT {
    const message = createBaseProtoFlattenedSerializerT();
    message.serializerNameSym = object.serializerNameSym ?? 0;
    message.serializerVersion = object.serializerVersion ?? 0;
    message.fieldsIndex = object.fieldsIndex?.map((e) => e) || [];
    return message;
  },
};

function createBaseCSVCMsgFlattenedSerializer(): CSVCMsgFlattenedSerializer {
  return { serializers: [], symbols: [], fields: [] };
}

export const CSVCMsgFlattenedSerializer = {
  encode(message: CSVCMsgFlattenedSerializer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.serializers) {
      ProtoFlattenedSerializerT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.symbols) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.fields) {
      ProtoFlattenedSerializerFieldT.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgFlattenedSerializer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgFlattenedSerializer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.serializers.push(ProtoFlattenedSerializerT.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.symbols.push(reader.string());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.fields.push(ProtoFlattenedSerializerFieldT.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgFlattenedSerializer {
    return {
      serializers: Array.isArray(object?.serializers)
        ? object.serializers.map((e: any) => ProtoFlattenedSerializerT.fromJSON(e))
        : [],
      symbols: Array.isArray(object?.symbols) ? object.symbols.map((e: any) => String(e)) : [],
      fields: Array.isArray(object?.fields)
        ? object.fields.map((e: any) => ProtoFlattenedSerializerFieldT.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSVCMsgFlattenedSerializer): unknown {
    const obj: any = {};
    if (message.serializers) {
      obj.serializers = message.serializers.map((e) => e ? ProtoFlattenedSerializerT.toJSON(e) : undefined);
    } else {
      obj.serializers = [];
    }
    if (message.symbols) {
      obj.symbols = message.symbols.map((e) => e);
    } else {
      obj.symbols = [];
    }
    if (message.fields) {
      obj.fields = message.fields.map((e) => e ? ProtoFlattenedSerializerFieldT.toJSON(e) : undefined);
    } else {
      obj.fields = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgFlattenedSerializer>): CSVCMsgFlattenedSerializer {
    return CSVCMsgFlattenedSerializer.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgFlattenedSerializer>): CSVCMsgFlattenedSerializer {
    const message = createBaseCSVCMsgFlattenedSerializer();
    message.serializers = object.serializers?.map((e) => ProtoFlattenedSerializerT.fromPartial(e)) || [];
    message.symbols = object.symbols?.map((e) => e) || [];
    message.fields = object.fields?.map((e) => ProtoFlattenedSerializerFieldT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSVCMsgStopSound(): CSVCMsgStopSound {
  return { guid: 0 };
}

export const CSVCMsgStopSound = {
  encode(message: CSVCMsgStopSound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guid !== 0) {
      writer.uint32(13).fixed32(message.guid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgStopSound {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgStopSound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.guid = reader.fixed32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgStopSound {
    return { guid: isSet(object.guid) ? Number(object.guid) : 0 };
  },

  toJSON(message: CSVCMsgStopSound): unknown {
    const obj: any = {};
    message.guid !== undefined && (obj.guid = Math.round(message.guid));
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgStopSound>): CSVCMsgStopSound {
    return CSVCMsgStopSound.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgStopSound>): CSVCMsgStopSound {
    const message = createBaseCSVCMsgStopSound();
    message.guid = object.guid ?? 0;
    return message;
  },
};

function createBaseCBidirMsgRebroadcastGameEvent(): CBidirMsgRebroadcastGameEvent {
  return { posttoserver: false, buftype: 0, clientbitcount: 0, receivingclients: "0" };
}

export const CBidirMsgRebroadcastGameEvent = {
  encode(message: CBidirMsgRebroadcastGameEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.posttoserver === true) {
      writer.uint32(8).bool(message.posttoserver);
    }
    if (message.buftype !== 0) {
      writer.uint32(16).int32(message.buftype);
    }
    if (message.clientbitcount !== 0) {
      writer.uint32(24).uint32(message.clientbitcount);
    }
    if (message.receivingclients !== "0") {
      writer.uint32(32).uint64(message.receivingclients);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBidirMsgRebroadcastGameEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBidirMsgRebroadcastGameEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.posttoserver = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.buftype = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.clientbitcount = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.receivingclients = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CBidirMsgRebroadcastGameEvent {
    return {
      posttoserver: isSet(object.posttoserver) ? Boolean(object.posttoserver) : false,
      buftype: isSet(object.buftype) ? Number(object.buftype) : 0,
      clientbitcount: isSet(object.clientbitcount) ? Number(object.clientbitcount) : 0,
      receivingclients: isSet(object.receivingclients) ? String(object.receivingclients) : "0",
    };
  },

  toJSON(message: CBidirMsgRebroadcastGameEvent): unknown {
    const obj: any = {};
    message.posttoserver !== undefined && (obj.posttoserver = message.posttoserver);
    message.buftype !== undefined && (obj.buftype = Math.round(message.buftype));
    message.clientbitcount !== undefined && (obj.clientbitcount = Math.round(message.clientbitcount));
    message.receivingclients !== undefined && (obj.receivingclients = message.receivingclients);
    return obj;
  },

  create(base?: DeepPartial<CBidirMsgRebroadcastGameEvent>): CBidirMsgRebroadcastGameEvent {
    return CBidirMsgRebroadcastGameEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CBidirMsgRebroadcastGameEvent>): CBidirMsgRebroadcastGameEvent {
    const message = createBaseCBidirMsgRebroadcastGameEvent();
    message.posttoserver = object.posttoserver ?? false;
    message.buftype = object.buftype ?? 0;
    message.clientbitcount = object.clientbitcount ?? 0;
    message.receivingclients = object.receivingclients ?? "0";
    return message;
  },
};

function createBaseCBidirMsgRebroadcastSource(): CBidirMsgRebroadcastSource {
  return { eventsource: 0 };
}

export const CBidirMsgRebroadcastSource = {
  encode(message: CBidirMsgRebroadcastSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventsource !== 0) {
      writer.uint32(8).int32(message.eventsource);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBidirMsgRebroadcastSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBidirMsgRebroadcastSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventsource = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CBidirMsgRebroadcastSource {
    return { eventsource: isSet(object.eventsource) ? Number(object.eventsource) : 0 };
  },

  toJSON(message: CBidirMsgRebroadcastSource): unknown {
    const obj: any = {};
    message.eventsource !== undefined && (obj.eventsource = Math.round(message.eventsource));
    return obj;
  },

  create(base?: DeepPartial<CBidirMsgRebroadcastSource>): CBidirMsgRebroadcastSource {
    return CBidirMsgRebroadcastSource.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CBidirMsgRebroadcastSource>): CBidirMsgRebroadcastSource {
    const message = createBaseCBidirMsgRebroadcastSource();
    message.eventsource = object.eventsource ?? 0;
    return message;
  },
};

function createBaseCMsgServerNetworkStats(): CMsgServerNetworkStats {
  return {
    dedicated: false,
    cpuUsage: 0,
    memoryUsedMb: 0,
    memoryFreeMb: 0,
    uptime: 0,
    spawnCount: 0,
    numClients: 0,
    numBots: 0,
    numSpectators: 0,
    numTvRelays: 0,
    fps: 0,
    ports: [],
    avgLatencyOut: 0,
    avgLatencyIn: 0,
    avgPacketsOut: 0,
    avgPacketsIn: 0,
    avgLossOut: 0,
    avgLossIn: 0,
    avgDataOut: 0,
    avgDataIn: 0,
    totalDataIn: "0",
    totalPacketsIn: "0",
    totalDataOut: "0",
    totalPacketsOut: "0",
    players: [],
  };
}

export const CMsgServerNetworkStats = {
  encode(message: CMsgServerNetworkStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dedicated === true) {
      writer.uint32(8).bool(message.dedicated);
    }
    if (message.cpuUsage !== 0) {
      writer.uint32(16).int32(message.cpuUsage);
    }
    if (message.memoryUsedMb !== 0) {
      writer.uint32(24).int32(message.memoryUsedMb);
    }
    if (message.memoryFreeMb !== 0) {
      writer.uint32(32).int32(message.memoryFreeMb);
    }
    if (message.uptime !== 0) {
      writer.uint32(40).int32(message.uptime);
    }
    if (message.spawnCount !== 0) {
      writer.uint32(48).int32(message.spawnCount);
    }
    if (message.numClients !== 0) {
      writer.uint32(64).int32(message.numClients);
    }
    if (message.numBots !== 0) {
      writer.uint32(72).int32(message.numBots);
    }
    if (message.numSpectators !== 0) {
      writer.uint32(80).int32(message.numSpectators);
    }
    if (message.numTvRelays !== 0) {
      writer.uint32(88).int32(message.numTvRelays);
    }
    if (message.fps !== 0) {
      writer.uint32(101).float(message.fps);
    }
    for (const v of message.ports) {
      CMsgServerNetworkStats_Port.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    if (message.avgLatencyOut !== 0) {
      writer.uint32(149).float(message.avgLatencyOut);
    }
    if (message.avgLatencyIn !== 0) {
      writer.uint32(157).float(message.avgLatencyIn);
    }
    if (message.avgPacketsOut !== 0) {
      writer.uint32(165).float(message.avgPacketsOut);
    }
    if (message.avgPacketsIn !== 0) {
      writer.uint32(173).float(message.avgPacketsIn);
    }
    if (message.avgLossOut !== 0) {
      writer.uint32(181).float(message.avgLossOut);
    }
    if (message.avgLossIn !== 0) {
      writer.uint32(189).float(message.avgLossIn);
    }
    if (message.avgDataOut !== 0) {
      writer.uint32(197).float(message.avgDataOut);
    }
    if (message.avgDataIn !== 0) {
      writer.uint32(205).float(message.avgDataIn);
    }
    if (message.totalDataIn !== "0") {
      writer.uint32(208).uint64(message.totalDataIn);
    }
    if (message.totalPacketsIn !== "0") {
      writer.uint32(216).uint64(message.totalPacketsIn);
    }
    if (message.totalDataOut !== "0") {
      writer.uint32(224).uint64(message.totalDataOut);
    }
    if (message.totalPacketsOut !== "0") {
      writer.uint32(232).uint64(message.totalPacketsOut);
    }
    for (const v of message.players) {
      CMsgServerNetworkStats_Player.encode(v!, writer.uint32(242).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerNetworkStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerNetworkStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.dedicated = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.cpuUsage = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.memoryUsedMb = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.memoryFreeMb = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.uptime = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.spawnCount = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.numClients = reader.int32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.numBots = reader.int32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.numSpectators = reader.int32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.numTvRelays = reader.int32();
          continue;
        case 12:
          if (tag != 101) {
            break;
          }

          message.fps = reader.float();
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.ports.push(CMsgServerNetworkStats_Port.decode(reader, reader.uint32()));
          continue;
        case 18:
          if (tag != 149) {
            break;
          }

          message.avgLatencyOut = reader.float();
          continue;
        case 19:
          if (tag != 157) {
            break;
          }

          message.avgLatencyIn = reader.float();
          continue;
        case 20:
          if (tag != 165) {
            break;
          }

          message.avgPacketsOut = reader.float();
          continue;
        case 21:
          if (tag != 173) {
            break;
          }

          message.avgPacketsIn = reader.float();
          continue;
        case 22:
          if (tag != 181) {
            break;
          }

          message.avgLossOut = reader.float();
          continue;
        case 23:
          if (tag != 189) {
            break;
          }

          message.avgLossIn = reader.float();
          continue;
        case 24:
          if (tag != 197) {
            break;
          }

          message.avgDataOut = reader.float();
          continue;
        case 25:
          if (tag != 205) {
            break;
          }

          message.avgDataIn = reader.float();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.totalDataIn = longToString(reader.uint64() as Long);
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.totalPacketsIn = longToString(reader.uint64() as Long);
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.totalDataOut = longToString(reader.uint64() as Long);
          continue;
        case 29:
          if (tag != 232) {
            break;
          }

          message.totalPacketsOut = longToString(reader.uint64() as Long);
          continue;
        case 30:
          if (tag != 242) {
            break;
          }

          message.players.push(CMsgServerNetworkStats_Player.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerNetworkStats {
    return {
      dedicated: isSet(object.dedicated) ? Boolean(object.dedicated) : false,
      cpuUsage: isSet(object.cpuUsage) ? Number(object.cpuUsage) : 0,
      memoryUsedMb: isSet(object.memoryUsedMb) ? Number(object.memoryUsedMb) : 0,
      memoryFreeMb: isSet(object.memoryFreeMb) ? Number(object.memoryFreeMb) : 0,
      uptime: isSet(object.uptime) ? Number(object.uptime) : 0,
      spawnCount: isSet(object.spawnCount) ? Number(object.spawnCount) : 0,
      numClients: isSet(object.numClients) ? Number(object.numClients) : 0,
      numBots: isSet(object.numBots) ? Number(object.numBots) : 0,
      numSpectators: isSet(object.numSpectators) ? Number(object.numSpectators) : 0,
      numTvRelays: isSet(object.numTvRelays) ? Number(object.numTvRelays) : 0,
      fps: isSet(object.fps) ? Number(object.fps) : 0,
      ports: Array.isArray(object?.ports) ? object.ports.map((e: any) => CMsgServerNetworkStats_Port.fromJSON(e)) : [],
      avgLatencyOut: isSet(object.avgLatencyOut) ? Number(object.avgLatencyOut) : 0,
      avgLatencyIn: isSet(object.avgLatencyIn) ? Number(object.avgLatencyIn) : 0,
      avgPacketsOut: isSet(object.avgPacketsOut) ? Number(object.avgPacketsOut) : 0,
      avgPacketsIn: isSet(object.avgPacketsIn) ? Number(object.avgPacketsIn) : 0,
      avgLossOut: isSet(object.avgLossOut) ? Number(object.avgLossOut) : 0,
      avgLossIn: isSet(object.avgLossIn) ? Number(object.avgLossIn) : 0,
      avgDataOut: isSet(object.avgDataOut) ? Number(object.avgDataOut) : 0,
      avgDataIn: isSet(object.avgDataIn) ? Number(object.avgDataIn) : 0,
      totalDataIn: isSet(object.totalDataIn) ? String(object.totalDataIn) : "0",
      totalPacketsIn: isSet(object.totalPacketsIn) ? String(object.totalPacketsIn) : "0",
      totalDataOut: isSet(object.totalDataOut) ? String(object.totalDataOut) : "0",
      totalPacketsOut: isSet(object.totalPacketsOut) ? String(object.totalPacketsOut) : "0",
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgServerNetworkStats_Player.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgServerNetworkStats): unknown {
    const obj: any = {};
    message.dedicated !== undefined && (obj.dedicated = message.dedicated);
    message.cpuUsage !== undefined && (obj.cpuUsage = Math.round(message.cpuUsage));
    message.memoryUsedMb !== undefined && (obj.memoryUsedMb = Math.round(message.memoryUsedMb));
    message.memoryFreeMb !== undefined && (obj.memoryFreeMb = Math.round(message.memoryFreeMb));
    message.uptime !== undefined && (obj.uptime = Math.round(message.uptime));
    message.spawnCount !== undefined && (obj.spawnCount = Math.round(message.spawnCount));
    message.numClients !== undefined && (obj.numClients = Math.round(message.numClients));
    message.numBots !== undefined && (obj.numBots = Math.round(message.numBots));
    message.numSpectators !== undefined && (obj.numSpectators = Math.round(message.numSpectators));
    message.numTvRelays !== undefined && (obj.numTvRelays = Math.round(message.numTvRelays));
    message.fps !== undefined && (obj.fps = message.fps);
    if (message.ports) {
      obj.ports = message.ports.map((e) => e ? CMsgServerNetworkStats_Port.toJSON(e) : undefined);
    } else {
      obj.ports = [];
    }
    message.avgLatencyOut !== undefined && (obj.avgLatencyOut = message.avgLatencyOut);
    message.avgLatencyIn !== undefined && (obj.avgLatencyIn = message.avgLatencyIn);
    message.avgPacketsOut !== undefined && (obj.avgPacketsOut = message.avgPacketsOut);
    message.avgPacketsIn !== undefined && (obj.avgPacketsIn = message.avgPacketsIn);
    message.avgLossOut !== undefined && (obj.avgLossOut = message.avgLossOut);
    message.avgLossIn !== undefined && (obj.avgLossIn = message.avgLossIn);
    message.avgDataOut !== undefined && (obj.avgDataOut = message.avgDataOut);
    message.avgDataIn !== undefined && (obj.avgDataIn = message.avgDataIn);
    message.totalDataIn !== undefined && (obj.totalDataIn = message.totalDataIn);
    message.totalPacketsIn !== undefined && (obj.totalPacketsIn = message.totalPacketsIn);
    message.totalDataOut !== undefined && (obj.totalDataOut = message.totalDataOut);
    message.totalPacketsOut !== undefined && (obj.totalPacketsOut = message.totalPacketsOut);
    if (message.players) {
      obj.players = message.players.map((e) => e ? CMsgServerNetworkStats_Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgServerNetworkStats>): CMsgServerNetworkStats {
    return CMsgServerNetworkStats.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgServerNetworkStats>): CMsgServerNetworkStats {
    const message = createBaseCMsgServerNetworkStats();
    message.dedicated = object.dedicated ?? false;
    message.cpuUsage = object.cpuUsage ?? 0;
    message.memoryUsedMb = object.memoryUsedMb ?? 0;
    message.memoryFreeMb = object.memoryFreeMb ?? 0;
    message.uptime = object.uptime ?? 0;
    message.spawnCount = object.spawnCount ?? 0;
    message.numClients = object.numClients ?? 0;
    message.numBots = object.numBots ?? 0;
    message.numSpectators = object.numSpectators ?? 0;
    message.numTvRelays = object.numTvRelays ?? 0;
    message.fps = object.fps ?? 0;
    message.ports = object.ports?.map((e) => CMsgServerNetworkStats_Port.fromPartial(e)) || [];
    message.avgLatencyOut = object.avgLatencyOut ?? 0;
    message.avgLatencyIn = object.avgLatencyIn ?? 0;
    message.avgPacketsOut = object.avgPacketsOut ?? 0;
    message.avgPacketsIn = object.avgPacketsIn ?? 0;
    message.avgLossOut = object.avgLossOut ?? 0;
    message.avgLossIn = object.avgLossIn ?? 0;
    message.avgDataOut = object.avgDataOut ?? 0;
    message.avgDataIn = object.avgDataIn ?? 0;
    message.totalDataIn = object.totalDataIn ?? "0";
    message.totalPacketsIn = object.totalPacketsIn ?? "0";
    message.totalDataOut = object.totalDataOut ?? "0";
    message.totalPacketsOut = object.totalPacketsOut ?? "0";
    message.players = object.players?.map((e) => CMsgServerNetworkStats_Player.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgServerNetworkStats_Port(): CMsgServerNetworkStats_Port {
  return { port: 0, name: "" };
}

export const CMsgServerNetworkStats_Port = {
  encode(message: CMsgServerNetworkStats_Port, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port !== 0) {
      writer.uint32(8).int32(message.port);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerNetworkStats_Port {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerNetworkStats_Port();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.port = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
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

  fromJSON(object: any): CMsgServerNetworkStats_Port {
    return { port: isSet(object.port) ? Number(object.port) : 0, name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: CMsgServerNetworkStats_Port): unknown {
    const obj: any = {};
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create(base?: DeepPartial<CMsgServerNetworkStats_Port>): CMsgServerNetworkStats_Port {
    return CMsgServerNetworkStats_Port.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgServerNetworkStats_Port>): CMsgServerNetworkStats_Port {
    const message = createBaseCMsgServerNetworkStats_Port();
    message.port = object.port ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCMsgServerNetworkStats_Player(): CMsgServerNetworkStats_Player {
  return { steamid: "0", remoteAddr: "", pingStddevMs: 0, pingAvgMs: 0, packetLossPct: 0, isBot: false };
}

export const CMsgServerNetworkStats_Player = {
  encode(message: CMsgServerNetworkStats_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(8).uint64(message.steamid);
    }
    if (message.remoteAddr !== "") {
      writer.uint32(18).string(message.remoteAddr);
    }
    if (message.pingStddevMs !== 0) {
      writer.uint32(24).int32(message.pingStddevMs);
    }
    if (message.pingAvgMs !== 0) {
      writer.uint32(32).int32(message.pingAvgMs);
    }
    if (message.packetLossPct !== 0) {
      writer.uint32(45).float(message.packetLossPct);
    }
    if (message.isBot === true) {
      writer.uint32(48).bool(message.isBot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerNetworkStats_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerNetworkStats_Player();
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
          if (tag != 18) {
            break;
          }

          message.remoteAddr = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.pingStddevMs = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.pingAvgMs = reader.int32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.packetLossPct = reader.float();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.isBot = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerNetworkStats_Player {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      remoteAddr: isSet(object.remoteAddr) ? String(object.remoteAddr) : "",
      pingStddevMs: isSet(object.pingStddevMs) ? Number(object.pingStddevMs) : 0,
      pingAvgMs: isSet(object.pingAvgMs) ? Number(object.pingAvgMs) : 0,
      packetLossPct: isSet(object.packetLossPct) ? Number(object.packetLossPct) : 0,
      isBot: isSet(object.isBot) ? Boolean(object.isBot) : false,
    };
  },

  toJSON(message: CMsgServerNetworkStats_Player): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.remoteAddr !== undefined && (obj.remoteAddr = message.remoteAddr);
    message.pingStddevMs !== undefined && (obj.pingStddevMs = Math.round(message.pingStddevMs));
    message.pingAvgMs !== undefined && (obj.pingAvgMs = Math.round(message.pingAvgMs));
    message.packetLossPct !== undefined && (obj.packetLossPct = message.packetLossPct);
    message.isBot !== undefined && (obj.isBot = message.isBot);
    return obj;
  },

  create(base?: DeepPartial<CMsgServerNetworkStats_Player>): CMsgServerNetworkStats_Player {
    return CMsgServerNetworkStats_Player.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgServerNetworkStats_Player>): CMsgServerNetworkStats_Player {
    const message = createBaseCMsgServerNetworkStats_Player();
    message.steamid = object.steamid ?? "0";
    message.remoteAddr = object.remoteAddr ?? "";
    message.pingStddevMs = object.pingStddevMs ?? 0;
    message.pingAvgMs = object.pingAvgMs ?? 0;
    message.packetLossPct = object.packetLossPct ?? 0;
    message.isBot = object.isBot ?? false;
    return message;
  },
};

function createBaseCSVCMsgHltvReplay(): CSVCMsgHltvReplay {
  return {
    delay: 0,
    primaryTarget: 0,
    replayStopAt: 0,
    replayStartAt: 0,
    replaySlowdownBegin: 0,
    replaySlowdownEnd: 0,
    replaySlowdownRate: 0,
    reason: 0,
  };
}

export const CSVCMsgHltvReplay = {
  encode(message: CSVCMsgHltvReplay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delay !== 0) {
      writer.uint32(8).int32(message.delay);
    }
    if (message.primaryTarget !== 0) {
      writer.uint32(16).int32(message.primaryTarget);
    }
    if (message.replayStopAt !== 0) {
      writer.uint32(24).int32(message.replayStopAt);
    }
    if (message.replayStartAt !== 0) {
      writer.uint32(32).int32(message.replayStartAt);
    }
    if (message.replaySlowdownBegin !== 0) {
      writer.uint32(40).int32(message.replaySlowdownBegin);
    }
    if (message.replaySlowdownEnd !== 0) {
      writer.uint32(48).int32(message.replaySlowdownEnd);
    }
    if (message.replaySlowdownRate !== 0) {
      writer.uint32(61).float(message.replaySlowdownRate);
    }
    if (message.reason !== 0) {
      writer.uint32(64).int32(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgHltvReplay {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgHltvReplay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.delay = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.primaryTarget = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.replayStopAt = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.replayStartAt = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.replaySlowdownBegin = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.replaySlowdownEnd = reader.int32();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.replaySlowdownRate = reader.float();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.reason = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgHltvReplay {
    return {
      delay: isSet(object.delay) ? Number(object.delay) : 0,
      primaryTarget: isSet(object.primaryTarget) ? Number(object.primaryTarget) : 0,
      replayStopAt: isSet(object.replayStopAt) ? Number(object.replayStopAt) : 0,
      replayStartAt: isSet(object.replayStartAt) ? Number(object.replayStartAt) : 0,
      replaySlowdownBegin: isSet(object.replaySlowdownBegin) ? Number(object.replaySlowdownBegin) : 0,
      replaySlowdownEnd: isSet(object.replaySlowdownEnd) ? Number(object.replaySlowdownEnd) : 0,
      replaySlowdownRate: isSet(object.replaySlowdownRate) ? Number(object.replaySlowdownRate) : 0,
      reason: isSet(object.reason) ? Number(object.reason) : 0,
    };
  },

  toJSON(message: CSVCMsgHltvReplay): unknown {
    const obj: any = {};
    message.delay !== undefined && (obj.delay = Math.round(message.delay));
    message.primaryTarget !== undefined && (obj.primaryTarget = Math.round(message.primaryTarget));
    message.replayStopAt !== undefined && (obj.replayStopAt = Math.round(message.replayStopAt));
    message.replayStartAt !== undefined && (obj.replayStartAt = Math.round(message.replayStartAt));
    message.replaySlowdownBegin !== undefined && (obj.replaySlowdownBegin = Math.round(message.replaySlowdownBegin));
    message.replaySlowdownEnd !== undefined && (obj.replaySlowdownEnd = Math.round(message.replaySlowdownEnd));
    message.replaySlowdownRate !== undefined && (obj.replaySlowdownRate = message.replaySlowdownRate);
    message.reason !== undefined && (obj.reason = Math.round(message.reason));
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgHltvReplay>): CSVCMsgHltvReplay {
    return CSVCMsgHltvReplay.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgHltvReplay>): CSVCMsgHltvReplay {
    const message = createBaseCSVCMsgHltvReplay();
    message.delay = object.delay ?? 0;
    message.primaryTarget = object.primaryTarget ?? 0;
    message.replayStopAt = object.replayStopAt ?? 0;
    message.replayStartAt = object.replayStartAt ?? 0;
    message.replaySlowdownBegin = object.replaySlowdownBegin ?? 0;
    message.replaySlowdownEnd = object.replaySlowdownEnd ?? 0;
    message.replaySlowdownRate = object.replaySlowdownRate ?? 0;
    message.reason = object.reason ?? 0;
    return message;
  },
};

function createBaseCCLCMsgHltvReplay(): CCLCMsgHltvReplay {
  return { request: 0, slowdownLength: 0, slowdownRate: 0, primaryTarget: 0, eventTime: 0 };
}

export const CCLCMsgHltvReplay = {
  encode(message: CCLCMsgHltvReplay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== 0) {
      writer.uint32(8).int32(message.request);
    }
    if (message.slowdownLength !== 0) {
      writer.uint32(21).float(message.slowdownLength);
    }
    if (message.slowdownRate !== 0) {
      writer.uint32(29).float(message.slowdownRate);
    }
    if (message.primaryTarget !== 0) {
      writer.uint32(32).int32(message.primaryTarget);
    }
    if (message.eventTime !== 0) {
      writer.uint32(45).float(message.eventTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCLCMsgHltvReplay {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCLCMsgHltvReplay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.request = reader.int32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.slowdownLength = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.slowdownRate = reader.float();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.primaryTarget = reader.int32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.eventTime = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCLCMsgHltvReplay {
    return {
      request: isSet(object.request) ? Number(object.request) : 0,
      slowdownLength: isSet(object.slowdownLength) ? Number(object.slowdownLength) : 0,
      slowdownRate: isSet(object.slowdownRate) ? Number(object.slowdownRate) : 0,
      primaryTarget: isSet(object.primaryTarget) ? Number(object.primaryTarget) : 0,
      eventTime: isSet(object.eventTime) ? Number(object.eventTime) : 0,
    };
  },

  toJSON(message: CCLCMsgHltvReplay): unknown {
    const obj: any = {};
    message.request !== undefined && (obj.request = Math.round(message.request));
    message.slowdownLength !== undefined && (obj.slowdownLength = message.slowdownLength);
    message.slowdownRate !== undefined && (obj.slowdownRate = message.slowdownRate);
    message.primaryTarget !== undefined && (obj.primaryTarget = Math.round(message.primaryTarget));
    message.eventTime !== undefined && (obj.eventTime = message.eventTime);
    return obj;
  },

  create(base?: DeepPartial<CCLCMsgHltvReplay>): CCLCMsgHltvReplay {
    return CCLCMsgHltvReplay.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CCLCMsgHltvReplay>): CCLCMsgHltvReplay {
    const message = createBaseCCLCMsgHltvReplay();
    message.request = object.request ?? 0;
    message.slowdownLength = object.slowdownLength ?? 0;
    message.slowdownRate = object.slowdownRate ?? 0;
    message.primaryTarget = object.primaryTarget ?? 0;
    message.eventTime = object.eventTime ?? 0;
    return message;
  },
};

function createBaseCSVCMsgBroadcastCommand(): CSVCMsgBroadcastCommand {
  return { cmd: "" };
}

export const CSVCMsgBroadcastCommand = {
  encode(message: CSVCMsgBroadcastCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cmd !== "") {
      writer.uint32(10).string(message.cmd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgBroadcastCommand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgBroadcastCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.cmd = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgBroadcastCommand {
    return { cmd: isSet(object.cmd) ? String(object.cmd) : "" };
  },

  toJSON(message: CSVCMsgBroadcastCommand): unknown {
    const obj: any = {};
    message.cmd !== undefined && (obj.cmd = message.cmd);
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgBroadcastCommand>): CSVCMsgBroadcastCommand {
    return CSVCMsgBroadcastCommand.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgBroadcastCommand>): CSVCMsgBroadcastCommand {
    const message = createBaseCSVCMsgBroadcastCommand();
    message.cmd = object.cmd ?? "";
    return message;
  },
};

function createBaseCCLCMsgHltvFixupOperatorTick(): CCLCMsgHltvFixupOperatorTick {
  return {
    tick: 0,
    propsData: Buffer.alloc(0),
    origin: undefined,
    eyeAngles: undefined,
    observerMode: 0,
    cameramanScoreboard: false,
    observerTarget: 0,
    viewOffset: undefined,
  };
}

export const CCLCMsgHltvFixupOperatorTick = {
  encode(message: CCLCMsgHltvFixupOperatorTick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tick !== 0) {
      writer.uint32(8).int32(message.tick);
    }
    if (message.propsData.length !== 0) {
      writer.uint32(18).bytes(message.propsData);
    }
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(26).fork()).ldelim();
    }
    if (message.eyeAngles !== undefined) {
      CMsgQAngle.encode(message.eyeAngles, writer.uint32(34).fork()).ldelim();
    }
    if (message.observerMode !== 0) {
      writer.uint32(40).int32(message.observerMode);
    }
    if (message.cameramanScoreboard === true) {
      writer.uint32(48).bool(message.cameramanScoreboard);
    }
    if (message.observerTarget !== 0) {
      writer.uint32(56).int32(message.observerTarget);
    }
    if (message.viewOffset !== undefined) {
      CMsgVector.encode(message.viewOffset, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCLCMsgHltvFixupOperatorTick {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCLCMsgHltvFixupOperatorTick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.tick = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.propsData = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.origin = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.eyeAngles = CMsgQAngle.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.observerMode = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.cameramanScoreboard = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.observerTarget = reader.int32();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.viewOffset = CMsgVector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCLCMsgHltvFixupOperatorTick {
    return {
      tick: isSet(object.tick) ? Number(object.tick) : 0,
      propsData: isSet(object.propsData) ? Buffer.from(bytesFromBase64(object.propsData)) : Buffer.alloc(0),
      origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
      eyeAngles: isSet(object.eyeAngles) ? CMsgQAngle.fromJSON(object.eyeAngles) : undefined,
      observerMode: isSet(object.observerMode) ? Number(object.observerMode) : 0,
      cameramanScoreboard: isSet(object.cameramanScoreboard) ? Boolean(object.cameramanScoreboard) : false,
      observerTarget: isSet(object.observerTarget) ? Number(object.observerTarget) : 0,
      viewOffset: isSet(object.viewOffset) ? CMsgVector.fromJSON(object.viewOffset) : undefined,
    };
  },

  toJSON(message: CCLCMsgHltvFixupOperatorTick): unknown {
    const obj: any = {};
    message.tick !== undefined && (obj.tick = Math.round(message.tick));
    message.propsData !== undefined &&
      (obj.propsData = base64FromBytes(message.propsData !== undefined ? message.propsData : Buffer.alloc(0)));
    message.origin !== undefined && (obj.origin = message.origin ? CMsgVector.toJSON(message.origin) : undefined);
    message.eyeAngles !== undefined &&
      (obj.eyeAngles = message.eyeAngles ? CMsgQAngle.toJSON(message.eyeAngles) : undefined);
    message.observerMode !== undefined && (obj.observerMode = Math.round(message.observerMode));
    message.cameramanScoreboard !== undefined && (obj.cameramanScoreboard = message.cameramanScoreboard);
    message.observerTarget !== undefined && (obj.observerTarget = Math.round(message.observerTarget));
    message.viewOffset !== undefined &&
      (obj.viewOffset = message.viewOffset ? CMsgVector.toJSON(message.viewOffset) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CCLCMsgHltvFixupOperatorTick>): CCLCMsgHltvFixupOperatorTick {
    return CCLCMsgHltvFixupOperatorTick.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CCLCMsgHltvFixupOperatorTick>): CCLCMsgHltvFixupOperatorTick {
    const message = createBaseCCLCMsgHltvFixupOperatorTick();
    message.tick = object.tick ?? 0;
    message.propsData = object.propsData ?? Buffer.alloc(0);
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? CMsgVector.fromPartial(object.origin)
      : undefined;
    message.eyeAngles = (object.eyeAngles !== undefined && object.eyeAngles !== null)
      ? CMsgQAngle.fromPartial(object.eyeAngles)
      : undefined;
    message.observerMode = object.observerMode ?? 0;
    message.cameramanScoreboard = object.cameramanScoreboard ?? false;
    message.observerTarget = object.observerTarget ?? 0;
    message.viewOffset = (object.viewOffset !== undefined && object.viewOffset !== null)
      ? CMsgVector.fromPartial(object.viewOffset)
      : undefined;
    return message;
  },
};

function createBaseCSVCMsgHltvFixupOperatorStatus(): CSVCMsgHltvFixupOperatorStatus {
  return { mode: 0, overrideOperatorName: "" };
}

export const CSVCMsgHltvFixupOperatorStatus = {
  encode(message: CSVCMsgHltvFixupOperatorStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).uint32(message.mode);
    }
    if (message.overrideOperatorName !== "") {
      writer.uint32(18).string(message.overrideOperatorName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgHltvFixupOperatorStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgHltvFixupOperatorStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.mode = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.overrideOperatorName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSVCMsgHltvFixupOperatorStatus {
    return {
      mode: isSet(object.mode) ? Number(object.mode) : 0,
      overrideOperatorName: isSet(object.overrideOperatorName) ? String(object.overrideOperatorName) : "",
    };
  },

  toJSON(message: CSVCMsgHltvFixupOperatorStatus): unknown {
    const obj: any = {};
    message.mode !== undefined && (obj.mode = Math.round(message.mode));
    message.overrideOperatorName !== undefined && (obj.overrideOperatorName = message.overrideOperatorName);
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgHltvFixupOperatorStatus>): CSVCMsgHltvFixupOperatorStatus {
    return CSVCMsgHltvFixupOperatorStatus.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgHltvFixupOperatorStatus>): CSVCMsgHltvFixupOperatorStatus {
    const message = createBaseCSVCMsgHltvFixupOperatorStatus();
    message.mode = object.mode ?? 0;
    message.overrideOperatorName = object.overrideOperatorName ?? "";
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
