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

export enum VoiceDataFormatT {
  VOICEDATA_FORMAT_STEAM = 0,
  VOICEDATA_FORMAT_ENGINE = 1,
}

export enum RequestPauseT {
  RP_PAUSE = 0,
  RP_UNPAUSE = 1,
  RP_TOGGLEPAUSE = 2,
}

export enum PrefetchType {
  PFT_SOUND = 0,
}

export enum ESplitScreenMessageType {
  MSG_SPLITSCREEN_ADDUSER = 0,
  MSG_SPLITSCREEN_REMOVEUSER = 1,
}

export enum EQueryCvarValueStatus {
  eQueryCvarValueStatus_ValueIntact = 0,
  eQueryCvarValueStatus_CvarNotFound = 1,
  eQueryCvarValueStatus_NotACvar = 2,
  eQueryCvarValueStatus_CvarProtected = 3,
}

export enum dialogType {
  DIALOG_MSG = 0,
  DIALOG_MENU = 1,
  DIALOG_TEXT = 2,
  DIALOG_ENTRY = 3,
  DIALOG_ASKCONNECT = 4,
}

export enum SVCMessagesLowFrequency {
  svc_dummy = 600,
}

export enum BidirectionalMessages {
  bi_RebroadcastGameEvent = 16,
  bi_RebroadcastSource = 17,
  bi_GameEvent = 18,
}

export enum BidirectionalMessagesLowFrequency {
  bi_RelayInfo = 700,
  bi_RelayPacket = 701,
}

export enum ReplayEventTypeT {
  REPLAY_EVENT_CANCEL = 0,
  REPLAY_EVENT_DEATH = 1,
  REPLAY_EVENT_GENERIC = 2,
  REPLAY_EVENT_STUCK_NEED_FULL_UPDATE = 3,
  REPLAY_EVENT_VICTORY = 4,
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
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
