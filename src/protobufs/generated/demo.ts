/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export enum EDemoCommands {
  DEM_Error = -1,
  DEM_Stop = 0,
  DEM_FileHeader = 1,
  DEM_FileInfo = 2,
  DEM_SyncTick = 3,
  DEM_SendTables = 4,
  DEM_ClassInfo = 5,
  DEM_StringTables = 6,
  DEM_Packet = 7,
  DEM_SignonPacket = 8,
  DEM_ConsoleCmd = 9,
  DEM_CustomData = 10,
  DEM_CustomDataCallbacks = 11,
  DEM_UserCmd = 12,
  DEM_FullPacket = 13,
  DEM_SaveGame = 14,
  DEM_SpawnGroups = 15,
  DEM_Max = 16,
  DEM_IsCompressed = 64,
}

export function eDemoCommandsFromJSON(object: any): EDemoCommands {
  switch (object) {
    case -1:
    case "DEM_Error":
      return EDemoCommands.DEM_Error;
    case 0:
    case "DEM_Stop":
      return EDemoCommands.DEM_Stop;
    case 1:
    case "DEM_FileHeader":
      return EDemoCommands.DEM_FileHeader;
    case 2:
    case "DEM_FileInfo":
      return EDemoCommands.DEM_FileInfo;
    case 3:
    case "DEM_SyncTick":
      return EDemoCommands.DEM_SyncTick;
    case 4:
    case "DEM_SendTables":
      return EDemoCommands.DEM_SendTables;
    case 5:
    case "DEM_ClassInfo":
      return EDemoCommands.DEM_ClassInfo;
    case 6:
    case "DEM_StringTables":
      return EDemoCommands.DEM_StringTables;
    case 7:
    case "DEM_Packet":
      return EDemoCommands.DEM_Packet;
    case 8:
    case "DEM_SignonPacket":
      return EDemoCommands.DEM_SignonPacket;
    case 9:
    case "DEM_ConsoleCmd":
      return EDemoCommands.DEM_ConsoleCmd;
    case 10:
    case "DEM_CustomData":
      return EDemoCommands.DEM_CustomData;
    case 11:
    case "DEM_CustomDataCallbacks":
      return EDemoCommands.DEM_CustomDataCallbacks;
    case 12:
    case "DEM_UserCmd":
      return EDemoCommands.DEM_UserCmd;
    case 13:
    case "DEM_FullPacket":
      return EDemoCommands.DEM_FullPacket;
    case 14:
    case "DEM_SaveGame":
      return EDemoCommands.DEM_SaveGame;
    case 15:
    case "DEM_SpawnGroups":
      return EDemoCommands.DEM_SpawnGroups;
    case 16:
    case "DEM_Max":
      return EDemoCommands.DEM_Max;
    case 64:
    case "DEM_IsCompressed":
      return EDemoCommands.DEM_IsCompressed;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDemoCommands");
  }
}

export function eDemoCommandsToJSON(object: EDemoCommands): string {
  switch (object) {
    case EDemoCommands.DEM_Error:
      return "DEM_Error";
    case EDemoCommands.DEM_Stop:
      return "DEM_Stop";
    case EDemoCommands.DEM_FileHeader:
      return "DEM_FileHeader";
    case EDemoCommands.DEM_FileInfo:
      return "DEM_FileInfo";
    case EDemoCommands.DEM_SyncTick:
      return "DEM_SyncTick";
    case EDemoCommands.DEM_SendTables:
      return "DEM_SendTables";
    case EDemoCommands.DEM_ClassInfo:
      return "DEM_ClassInfo";
    case EDemoCommands.DEM_StringTables:
      return "DEM_StringTables";
    case EDemoCommands.DEM_Packet:
      return "DEM_Packet";
    case EDemoCommands.DEM_SignonPacket:
      return "DEM_SignonPacket";
    case EDemoCommands.DEM_ConsoleCmd:
      return "DEM_ConsoleCmd";
    case EDemoCommands.DEM_CustomData:
      return "DEM_CustomData";
    case EDemoCommands.DEM_CustomDataCallbacks:
      return "DEM_CustomDataCallbacks";
    case EDemoCommands.DEM_UserCmd:
      return "DEM_UserCmd";
    case EDemoCommands.DEM_FullPacket:
      return "DEM_FullPacket";
    case EDemoCommands.DEM_SaveGame:
      return "DEM_SaveGame";
    case EDemoCommands.DEM_SpawnGroups:
      return "DEM_SpawnGroups";
    case EDemoCommands.DEM_Max:
      return "DEM_Max";
    case EDemoCommands.DEM_IsCompressed:
      return "DEM_IsCompressed";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDemoCommands");
  }
}

export interface CDemoFileHeader {
  demoFileStamp: string;
  networkProtocol: number;
  serverName: string;
  clientName: string;
  mapName: string;
  gameDirectory: string;
  fullpacketsVersion: number;
  allowClientsideEntities: boolean;
  allowClientsideParticles: boolean;
  addons: string;
  demoVersionName: string;
  demoVersionGuid: string;
  buildNum: number;
  game: string;
}

export interface CGameInfo {
  dota: CGameInfo_CDotaGameInfo | undefined;
}

export interface CGameInfo_CDotaGameInfo {
  matchId: string;
  gameMode: number;
  gameWinner: number;
  playerInfo: CGameInfo_CDotaGameInfo_CPlayerInfo[];
  leagueid: number;
  picksBans: CGameInfo_CDotaGameInfo_CHeroSelectEvent[];
  radiantTeamId: number;
  direTeamId: number;
  radiantTeamTag: string;
  direTeamTag: string;
  endTime: number;
}

export interface CGameInfo_CDotaGameInfo_CPlayerInfo {
  heroName: string;
  playerName: string;
  isFakeClient: boolean;
  steamid: string;
  gameTeam: number;
}

export interface CGameInfo_CDotaGameInfo_CHeroSelectEvent {
  isPick: boolean;
  team: number;
  heroId: number;
}

export interface CDemoFileInfo {
  playbackTime: number;
  playbackTicks: number;
  playbackFrames: number;
  gameInfo: CGameInfo | undefined;
}

export interface CDemoPacket {
  data: Buffer;
}

export interface CDemoFullPacket {
  stringTable: CDemoStringTables | undefined;
  packet: CDemoPacket | undefined;
}

export interface CDemoSaveGame {
  data: Buffer;
  steamId: string;
  signature: string;
  version: number;
}

export interface CDemoSyncTick {
}

export interface CDemoConsoleCmd {
  cmdstring: string;
}

export interface CDemoSendTables {
  data: Buffer;
}

export interface CDemoClassInfo {
  classes: CDemoClassInfo_classT[];
}

export interface CDemoClassInfo_classT {
  classId: number;
  networkName: string;
  tableName: string;
}

export interface CDemoCustomData {
  callbackIndex: number;
  data: Buffer;
}

export interface CDemoCustomDataCallbacks {
  saveId: string[];
}

export interface CDemoStringTables {
  tables: CDemoStringTables_tableT[];
}

export interface CDemoStringTables_itemsT {
  str: string;
  data: Buffer;
}

export interface CDemoStringTables_tableT {
  tableName: string;
  items: CDemoStringTables_itemsT[];
  itemsClientside: CDemoStringTables_itemsT[];
  tableFlags: number;
}

export interface CDemoStop {
}

export interface CDemoUserCmd {
  cmdNumber: number;
  data: Buffer;
}

export interface CDemoSpawnGroups {
  msgs: Buffer[];
}

function createBaseCDemoFileHeader(): CDemoFileHeader {
  return {
    demoFileStamp: "",
    networkProtocol: 0,
    serverName: "",
    clientName: "",
    mapName: "",
    gameDirectory: "",
    fullpacketsVersion: 0,
    allowClientsideEntities: false,
    allowClientsideParticles: false,
    addons: "",
    demoVersionName: "",
    demoVersionGuid: "",
    buildNum: 0,
    game: "",
  };
}

export const CDemoFileHeader = {
  encode(message: CDemoFileHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.demoFileStamp !== "") {
      writer.uint32(10).string(message.demoFileStamp);
    }
    if (message.networkProtocol !== 0) {
      writer.uint32(16).int32(message.networkProtocol);
    }
    if (message.serverName !== "") {
      writer.uint32(26).string(message.serverName);
    }
    if (message.clientName !== "") {
      writer.uint32(34).string(message.clientName);
    }
    if (message.mapName !== "") {
      writer.uint32(42).string(message.mapName);
    }
    if (message.gameDirectory !== "") {
      writer.uint32(50).string(message.gameDirectory);
    }
    if (message.fullpacketsVersion !== 0) {
      writer.uint32(56).int32(message.fullpacketsVersion);
    }
    if (message.allowClientsideEntities === true) {
      writer.uint32(64).bool(message.allowClientsideEntities);
    }
    if (message.allowClientsideParticles === true) {
      writer.uint32(72).bool(message.allowClientsideParticles);
    }
    if (message.addons !== "") {
      writer.uint32(82).string(message.addons);
    }
    if (message.demoVersionName !== "") {
      writer.uint32(90).string(message.demoVersionName);
    }
    if (message.demoVersionGuid !== "") {
      writer.uint32(98).string(message.demoVersionGuid);
    }
    if (message.buildNum !== 0) {
      writer.uint32(104).int32(message.buildNum);
    }
    if (message.game !== "") {
      writer.uint32(114).string(message.game);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDemoFileHeader {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDemoFileHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.demoFileStamp = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.networkProtocol = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.serverName = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.clientName = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.mapName = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.gameDirectory = reader.string();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.fullpacketsVersion = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.allowClientsideEntities = reader.bool();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.allowClientsideParticles = reader.bool();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.addons = reader.string();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.demoVersionName = reader.string();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.demoVersionGuid = reader.string();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.buildNum = reader.int32();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.game = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDemoFileHeader {
    return {
      demoFileStamp: isSet(object.demoFileStamp) ? String(object.demoFileStamp) : "",
      networkProtocol: isSet(object.networkProtocol) ? Number(object.networkProtocol) : 0,
      serverName: isSet(object.serverName) ? String(object.serverName) : "",
      clientName: isSet(object.clientName) ? String(object.clientName) : "",
      mapName: isSet(object.mapName) ? String(object.mapName) : "",
      gameDirectory: isSet(object.gameDirectory) ? String(object.gameDirectory) : "",
      fullpacketsVersion: isSet(object.fullpacketsVersion) ? Number(object.fullpacketsVersion) : 0,
      allowClientsideEntities: isSet(object.allowClientsideEntities) ? Boolean(object.allowClientsideEntities) : false,
      allowClientsideParticles: isSet(object.allowClientsideParticles)
        ? Boolean(object.allowClientsideParticles)
        : false,
      addons: isSet(object.addons) ? String(object.addons) : "",
      demoVersionName: isSet(object.demoVersionName) ? String(object.demoVersionName) : "",
      demoVersionGuid: isSet(object.demoVersionGuid) ? String(object.demoVersionGuid) : "",
      buildNum: isSet(object.buildNum) ? Number(object.buildNum) : 0,
      game: isSet(object.game) ? String(object.game) : "",
    };
  },

  toJSON(message: CDemoFileHeader): unknown {
    const obj: any = {};
    message.demoFileStamp !== undefined && (obj.demoFileStamp = message.demoFileStamp);
    message.networkProtocol !== undefined && (obj.networkProtocol = Math.round(message.networkProtocol));
    message.serverName !== undefined && (obj.serverName = message.serverName);
    message.clientName !== undefined && (obj.clientName = message.clientName);
    message.mapName !== undefined && (obj.mapName = message.mapName);
    message.gameDirectory !== undefined && (obj.gameDirectory = message.gameDirectory);
    message.fullpacketsVersion !== undefined && (obj.fullpacketsVersion = Math.round(message.fullpacketsVersion));
    message.allowClientsideEntities !== undefined && (obj.allowClientsideEntities = message.allowClientsideEntities);
    message.allowClientsideParticles !== undefined && (obj.allowClientsideParticles = message.allowClientsideParticles);
    message.addons !== undefined && (obj.addons = message.addons);
    message.demoVersionName !== undefined && (obj.demoVersionName = message.demoVersionName);
    message.demoVersionGuid !== undefined && (obj.demoVersionGuid = message.demoVersionGuid);
    message.buildNum !== undefined && (obj.buildNum = Math.round(message.buildNum));
    message.game !== undefined && (obj.game = message.game);
    return obj;
  },

  create(base?: DeepPartial<CDemoFileHeader>): CDemoFileHeader {
    return CDemoFileHeader.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDemoFileHeader>): CDemoFileHeader {
    const message = createBaseCDemoFileHeader();
    message.demoFileStamp = object.demoFileStamp ?? "";
    message.networkProtocol = object.networkProtocol ?? 0;
    message.serverName = object.serverName ?? "";
    message.clientName = object.clientName ?? "";
    message.mapName = object.mapName ?? "";
    message.gameDirectory = object.gameDirectory ?? "";
    message.fullpacketsVersion = object.fullpacketsVersion ?? 0;
    message.allowClientsideEntities = object.allowClientsideEntities ?? false;
    message.allowClientsideParticles = object.allowClientsideParticles ?? false;
    message.addons = object.addons ?? "";
    message.demoVersionName = object.demoVersionName ?? "";
    message.demoVersionGuid = object.demoVersionGuid ?? "";
    message.buildNum = object.buildNum ?? 0;
    message.game = object.game ?? "";
    return message;
  },
};

function createBaseCGameInfo(): CGameInfo {
  return { dota: undefined };
}

export const CGameInfo = {
  encode(message: CGameInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dota !== undefined) {
      CGameInfo_CDotaGameInfo.encode(message.dota, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag != 34) {
            break;
          }

          message.dota = CGameInfo_CDotaGameInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CGameInfo {
    return { dota: isSet(object.dota) ? CGameInfo_CDotaGameInfo.fromJSON(object.dota) : undefined };
  },

  toJSON(message: CGameInfo): unknown {
    const obj: any = {};
    message.dota !== undefined && (obj.dota = message.dota ? CGameInfo_CDotaGameInfo.toJSON(message.dota) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CGameInfo>): CGameInfo {
    return CGameInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CGameInfo>): CGameInfo {
    const message = createBaseCGameInfo();
    message.dota = (object.dota !== undefined && object.dota !== null)
      ? CGameInfo_CDotaGameInfo.fromPartial(object.dota)
      : undefined;
    return message;
  },
};

function createBaseCGameInfo_CDotaGameInfo(): CGameInfo_CDotaGameInfo {
  return {
    matchId: "0",
    gameMode: 0,
    gameWinner: 0,
    playerInfo: [],
    leagueid: 0,
    picksBans: [],
    radiantTeamId: 0,
    direTeamId: 0,
    radiantTeamTag: "",
    direTeamTag: "",
    endTime: 0,
  };
}

export const CGameInfo_CDotaGameInfo = {
  encode(message: CGameInfo_CDotaGameInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.gameMode !== 0) {
      writer.uint32(16).int32(message.gameMode);
    }
    if (message.gameWinner !== 0) {
      writer.uint32(24).int32(message.gameWinner);
    }
    for (const v of message.playerInfo) {
      CGameInfo_CDotaGameInfo_CPlayerInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.leagueid !== 0) {
      writer.uint32(40).uint32(message.leagueid);
    }
    for (const v of message.picksBans) {
      CGameInfo_CDotaGameInfo_CHeroSelectEvent.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.radiantTeamId !== 0) {
      writer.uint32(56).uint32(message.radiantTeamId);
    }
    if (message.direTeamId !== 0) {
      writer.uint32(64).uint32(message.direTeamId);
    }
    if (message.radiantTeamTag !== "") {
      writer.uint32(74).string(message.radiantTeamTag);
    }
    if (message.direTeamTag !== "") {
      writer.uint32(82).string(message.direTeamTag);
    }
    if (message.endTime !== 0) {
      writer.uint32(88).uint32(message.endTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameInfo_CDotaGameInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameInfo_CDotaGameInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.gameMode = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.gameWinner = reader.int32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.playerInfo.push(CGameInfo_CDotaGameInfo_CPlayerInfo.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.leagueid = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.picksBans.push(CGameInfo_CDotaGameInfo_CHeroSelectEvent.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.radiantTeamId = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.direTeamId = reader.uint32();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.radiantTeamTag = reader.string();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.direTeamTag = reader.string();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.endTime = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CGameInfo_CDotaGameInfo {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      gameMode: isSet(object.gameMode) ? Number(object.gameMode) : 0,
      gameWinner: isSet(object.gameWinner) ? Number(object.gameWinner) : 0,
      playerInfo: Array.isArray(object?.playerInfo)
        ? object.playerInfo.map((e: any) => CGameInfo_CDotaGameInfo_CPlayerInfo.fromJSON(e))
        : [],
      leagueid: isSet(object.leagueid) ? Number(object.leagueid) : 0,
      picksBans: Array.isArray(object?.picksBans)
        ? object.picksBans.map((e: any) => CGameInfo_CDotaGameInfo_CHeroSelectEvent.fromJSON(e))
        : [],
      radiantTeamId: isSet(object.radiantTeamId) ? Number(object.radiantTeamId) : 0,
      direTeamId: isSet(object.direTeamId) ? Number(object.direTeamId) : 0,
      radiantTeamTag: isSet(object.radiantTeamTag) ? String(object.radiantTeamTag) : "",
      direTeamTag: isSet(object.direTeamTag) ? String(object.direTeamTag) : "",
      endTime: isSet(object.endTime) ? Number(object.endTime) : 0,
    };
  },

  toJSON(message: CGameInfo_CDotaGameInfo): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.gameMode !== undefined && (obj.gameMode = Math.round(message.gameMode));
    message.gameWinner !== undefined && (obj.gameWinner = Math.round(message.gameWinner));
    if (message.playerInfo) {
      obj.playerInfo = message.playerInfo.map((e) => e ? CGameInfo_CDotaGameInfo_CPlayerInfo.toJSON(e) : undefined);
    } else {
      obj.playerInfo = [];
    }
    message.leagueid !== undefined && (obj.leagueid = Math.round(message.leagueid));
    if (message.picksBans) {
      obj.picksBans = message.picksBans.map((e) => e ? CGameInfo_CDotaGameInfo_CHeroSelectEvent.toJSON(e) : undefined);
    } else {
      obj.picksBans = [];
    }
    message.radiantTeamId !== undefined && (obj.radiantTeamId = Math.round(message.radiantTeamId));
    message.direTeamId !== undefined && (obj.direTeamId = Math.round(message.direTeamId));
    message.radiantTeamTag !== undefined && (obj.radiantTeamTag = message.radiantTeamTag);
    message.direTeamTag !== undefined && (obj.direTeamTag = message.direTeamTag);
    message.endTime !== undefined && (obj.endTime = Math.round(message.endTime));
    return obj;
  },

  create(base?: DeepPartial<CGameInfo_CDotaGameInfo>): CGameInfo_CDotaGameInfo {
    return CGameInfo_CDotaGameInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CGameInfo_CDotaGameInfo>): CGameInfo_CDotaGameInfo {
    const message = createBaseCGameInfo_CDotaGameInfo();
    message.matchId = object.matchId ?? "0";
    message.gameMode = object.gameMode ?? 0;
    message.gameWinner = object.gameWinner ?? 0;
    message.playerInfo = object.playerInfo?.map((e) => CGameInfo_CDotaGameInfo_CPlayerInfo.fromPartial(e)) || [];
    message.leagueid = object.leagueid ?? 0;
    message.picksBans = object.picksBans?.map((e) => CGameInfo_CDotaGameInfo_CHeroSelectEvent.fromPartial(e)) || [];
    message.radiantTeamId = object.radiantTeamId ?? 0;
    message.direTeamId = object.direTeamId ?? 0;
    message.radiantTeamTag = object.radiantTeamTag ?? "";
    message.direTeamTag = object.direTeamTag ?? "";
    message.endTime = object.endTime ?? 0;
    return message;
  },
};

function createBaseCGameInfo_CDotaGameInfo_CPlayerInfo(): CGameInfo_CDotaGameInfo_CPlayerInfo {
  return { heroName: "", playerName: "", isFakeClient: false, steamid: "0", gameTeam: 0 };
}

export const CGameInfo_CDotaGameInfo_CPlayerInfo = {
  encode(message: CGameInfo_CDotaGameInfo_CPlayerInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroName !== "") {
      writer.uint32(10).string(message.heroName);
    }
    if (message.playerName !== "") {
      writer.uint32(18).string(message.playerName);
    }
    if (message.isFakeClient === true) {
      writer.uint32(24).bool(message.isFakeClient);
    }
    if (message.steamid !== "0") {
      writer.uint32(32).uint64(message.steamid);
    }
    if (message.gameTeam !== 0) {
      writer.uint32(40).int32(message.gameTeam);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameInfo_CDotaGameInfo_CPlayerInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameInfo_CDotaGameInfo_CPlayerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.heroName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.playerName = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isFakeClient = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.steamid = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.gameTeam = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CGameInfo_CDotaGameInfo_CPlayerInfo {
    return {
      heroName: isSet(object.heroName) ? String(object.heroName) : "",
      playerName: isSet(object.playerName) ? String(object.playerName) : "",
      isFakeClient: isSet(object.isFakeClient) ? Boolean(object.isFakeClient) : false,
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      gameTeam: isSet(object.gameTeam) ? Number(object.gameTeam) : 0,
    };
  },

  toJSON(message: CGameInfo_CDotaGameInfo_CPlayerInfo): unknown {
    const obj: any = {};
    message.heroName !== undefined && (obj.heroName = message.heroName);
    message.playerName !== undefined && (obj.playerName = message.playerName);
    message.isFakeClient !== undefined && (obj.isFakeClient = message.isFakeClient);
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.gameTeam !== undefined && (obj.gameTeam = Math.round(message.gameTeam));
    return obj;
  },

  create(base?: DeepPartial<CGameInfo_CDotaGameInfo_CPlayerInfo>): CGameInfo_CDotaGameInfo_CPlayerInfo {
    return CGameInfo_CDotaGameInfo_CPlayerInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CGameInfo_CDotaGameInfo_CPlayerInfo>): CGameInfo_CDotaGameInfo_CPlayerInfo {
    const message = createBaseCGameInfo_CDotaGameInfo_CPlayerInfo();
    message.heroName = object.heroName ?? "";
    message.playerName = object.playerName ?? "";
    message.isFakeClient = object.isFakeClient ?? false;
    message.steamid = object.steamid ?? "0";
    message.gameTeam = object.gameTeam ?? 0;
    return message;
  },
};

function createBaseCGameInfo_CDotaGameInfo_CHeroSelectEvent(): CGameInfo_CDotaGameInfo_CHeroSelectEvent {
  return { isPick: false, team: 0, heroId: 0 };
}

export const CGameInfo_CDotaGameInfo_CHeroSelectEvent = {
  encode(message: CGameInfo_CDotaGameInfo_CHeroSelectEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isPick === true) {
      writer.uint32(8).bool(message.isPick);
    }
    if (message.team !== 0) {
      writer.uint32(16).uint32(message.team);
    }
    if (message.heroId !== 0) {
      writer.uint32(24).uint32(message.heroId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameInfo_CDotaGameInfo_CHeroSelectEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameInfo_CDotaGameInfo_CHeroSelectEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.isPick = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.team = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CGameInfo_CDotaGameInfo_CHeroSelectEvent {
    return {
      isPick: isSet(object.isPick) ? Boolean(object.isPick) : false,
      team: isSet(object.team) ? Number(object.team) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
    };
  },

  toJSON(message: CGameInfo_CDotaGameInfo_CHeroSelectEvent): unknown {
    const obj: any = {};
    message.isPick !== undefined && (obj.isPick = message.isPick);
    message.team !== undefined && (obj.team = Math.round(message.team));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    return obj;
  },

  create(base?: DeepPartial<CGameInfo_CDotaGameInfo_CHeroSelectEvent>): CGameInfo_CDotaGameInfo_CHeroSelectEvent {
    return CGameInfo_CDotaGameInfo_CHeroSelectEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CGameInfo_CDotaGameInfo_CHeroSelectEvent>): CGameInfo_CDotaGameInfo_CHeroSelectEvent {
    const message = createBaseCGameInfo_CDotaGameInfo_CHeroSelectEvent();
    message.isPick = object.isPick ?? false;
    message.team = object.team ?? 0;
    message.heroId = object.heroId ?? 0;
    return message;
  },
};

function createBaseCDemoFileInfo(): CDemoFileInfo {
  return { playbackTime: 0, playbackTicks: 0, playbackFrames: 0, gameInfo: undefined };
}

export const CDemoFileInfo = {
  encode(message: CDemoFileInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playbackTime !== 0) {
      writer.uint32(13).float(message.playbackTime);
    }
    if (message.playbackTicks !== 0) {
      writer.uint32(16).int32(message.playbackTicks);
    }
    if (message.playbackFrames !== 0) {
      writer.uint32(24).int32(message.playbackFrames);
    }
    if (message.gameInfo !== undefined) {
      CGameInfo.encode(message.gameInfo, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDemoFileInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDemoFileInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.playbackTime = reader.float();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playbackTicks = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.playbackFrames = reader.int32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.gameInfo = CGameInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDemoFileInfo {
    return {
      playbackTime: isSet(object.playbackTime) ? Number(object.playbackTime) : 0,
      playbackTicks: isSet(object.playbackTicks) ? Number(object.playbackTicks) : 0,
      playbackFrames: isSet(object.playbackFrames) ? Number(object.playbackFrames) : 0,
      gameInfo: isSet(object.gameInfo) ? CGameInfo.fromJSON(object.gameInfo) : undefined,
    };
  },

  toJSON(message: CDemoFileInfo): unknown {
    const obj: any = {};
    message.playbackTime !== undefined && (obj.playbackTime = message.playbackTime);
    message.playbackTicks !== undefined && (obj.playbackTicks = Math.round(message.playbackTicks));
    message.playbackFrames !== undefined && (obj.playbackFrames = Math.round(message.playbackFrames));
    message.gameInfo !== undefined &&
      (obj.gameInfo = message.gameInfo ? CGameInfo.toJSON(message.gameInfo) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CDemoFileInfo>): CDemoFileInfo {
    return CDemoFileInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDemoFileInfo>): CDemoFileInfo {
    const message = createBaseCDemoFileInfo();
    message.playbackTime = object.playbackTime ?? 0;
    message.playbackTicks = object.playbackTicks ?? 0;
    message.playbackFrames = object.playbackFrames ?? 0;
    message.gameInfo = (object.gameInfo !== undefined && object.gameInfo !== null)
      ? CGameInfo.fromPartial(object.gameInfo)
      : undefined;
    return message;
  },
};

function createBaseCDemoPacket(): CDemoPacket {
  return { data: Buffer.alloc(0) };
}

export const CDemoPacket = {
  encode(message: CDemoPacket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDemoPacket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDemoPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag != 26) {
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

  fromJSON(object: any): CDemoPacket {
    return { data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0) };
  },

  toJSON(message: CDemoPacket): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CDemoPacket>): CDemoPacket {
    return CDemoPacket.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDemoPacket>): CDemoPacket {
    const message = createBaseCDemoPacket();
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCDemoFullPacket(): CDemoFullPacket {
  return { stringTable: undefined, packet: undefined };
}

export const CDemoFullPacket = {
  encode(message: CDemoFullPacket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stringTable !== undefined) {
      CDemoStringTables.encode(message.stringTable, writer.uint32(10).fork()).ldelim();
    }
    if (message.packet !== undefined) {
      CDemoPacket.encode(message.packet, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDemoFullPacket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDemoFullPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.stringTable = CDemoStringTables.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.packet = CDemoPacket.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDemoFullPacket {
    return {
      stringTable: isSet(object.stringTable) ? CDemoStringTables.fromJSON(object.stringTable) : undefined,
      packet: isSet(object.packet) ? CDemoPacket.fromJSON(object.packet) : undefined,
    };
  },

  toJSON(message: CDemoFullPacket): unknown {
    const obj: any = {};
    message.stringTable !== undefined &&
      (obj.stringTable = message.stringTable ? CDemoStringTables.toJSON(message.stringTable) : undefined);
    message.packet !== undefined && (obj.packet = message.packet ? CDemoPacket.toJSON(message.packet) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CDemoFullPacket>): CDemoFullPacket {
    return CDemoFullPacket.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDemoFullPacket>): CDemoFullPacket {
    const message = createBaseCDemoFullPacket();
    message.stringTable = (object.stringTable !== undefined && object.stringTable !== null)
      ? CDemoStringTables.fromPartial(object.stringTable)
      : undefined;
    message.packet = (object.packet !== undefined && object.packet !== null)
      ? CDemoPacket.fromPartial(object.packet)
      : undefined;
    return message;
  },
};

function createBaseCDemoSaveGame(): CDemoSaveGame {
  return { data: Buffer.alloc(0), steamId: "0", signature: "0", version: 0 };
}

export const CDemoSaveGame = {
  encode(message: CDemoSaveGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.steamId !== "0") {
      writer.uint32(17).fixed64(message.steamId);
    }
    if (message.signature !== "0") {
      writer.uint32(25).fixed64(message.signature);
    }
    if (message.version !== 0) {
      writer.uint32(32).int32(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDemoSaveGame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDemoSaveGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.data = reader.bytes() as Buffer;
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.steamId = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.signature = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 32) {
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

  fromJSON(object: any): CDemoSaveGame {
    return {
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      signature: isSet(object.signature) ? String(object.signature) : "0",
      version: isSet(object.version) ? Number(object.version) : 0,
    };
  },

  toJSON(message: CDemoSaveGame): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.signature !== undefined && (obj.signature = message.signature);
    message.version !== undefined && (obj.version = Math.round(message.version));
    return obj;
  },

  create(base?: DeepPartial<CDemoSaveGame>): CDemoSaveGame {
    return CDemoSaveGame.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDemoSaveGame>): CDemoSaveGame {
    const message = createBaseCDemoSaveGame();
    message.data = object.data ?? Buffer.alloc(0);
    message.steamId = object.steamId ?? "0";
    message.signature = object.signature ?? "0";
    message.version = object.version ?? 0;
    return message;
  },
};

function createBaseCDemoSyncTick(): CDemoSyncTick {
  return {};
}

export const CDemoSyncTick = {
  encode(_: CDemoSyncTick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDemoSyncTick {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDemoSyncTick();
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

  fromJSON(_: any): CDemoSyncTick {
    return {};
  },

  toJSON(_: CDemoSyncTick): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CDemoSyncTick>): CDemoSyncTick {
    return CDemoSyncTick.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CDemoSyncTick>): CDemoSyncTick {
    const message = createBaseCDemoSyncTick();
    return message;
  },
};

function createBaseCDemoConsoleCmd(): CDemoConsoleCmd {
  return { cmdstring: "" };
}

export const CDemoConsoleCmd = {
  encode(message: CDemoConsoleCmd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cmdstring !== "") {
      writer.uint32(10).string(message.cmdstring);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDemoConsoleCmd {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDemoConsoleCmd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.cmdstring = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDemoConsoleCmd {
    return { cmdstring: isSet(object.cmdstring) ? String(object.cmdstring) : "" };
  },

  toJSON(message: CDemoConsoleCmd): unknown {
    const obj: any = {};
    message.cmdstring !== undefined && (obj.cmdstring = message.cmdstring);
    return obj;
  },

  create(base?: DeepPartial<CDemoConsoleCmd>): CDemoConsoleCmd {
    return CDemoConsoleCmd.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDemoConsoleCmd>): CDemoConsoleCmd {
    const message = createBaseCDemoConsoleCmd();
    message.cmdstring = object.cmdstring ?? "";
    return message;
  },
};

function createBaseCDemoSendTables(): CDemoSendTables {
  return { data: Buffer.alloc(0) };
}

export const CDemoSendTables = {
  encode(message: CDemoSendTables, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDemoSendTables {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDemoSendTables();
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

  fromJSON(object: any): CDemoSendTables {
    return { data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0) };
  },

  toJSON(message: CDemoSendTables): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CDemoSendTables>): CDemoSendTables {
    return CDemoSendTables.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDemoSendTables>): CDemoSendTables {
    const message = createBaseCDemoSendTables();
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCDemoClassInfo(): CDemoClassInfo {
  return { classes: [] };
}

export const CDemoClassInfo = {
  encode(message: CDemoClassInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.classes) {
      CDemoClassInfo_classT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDemoClassInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDemoClassInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.classes.push(CDemoClassInfo_classT.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDemoClassInfo {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => CDemoClassInfo_classT.fromJSON(e)) : [],
    };
  },

  toJSON(message: CDemoClassInfo): unknown {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map((e) => e ? CDemoClassInfo_classT.toJSON(e) : undefined);
    } else {
      obj.classes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CDemoClassInfo>): CDemoClassInfo {
    return CDemoClassInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDemoClassInfo>): CDemoClassInfo {
    const message = createBaseCDemoClassInfo();
    message.classes = object.classes?.map((e) => CDemoClassInfo_classT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCDemoClassInfo_classT(): CDemoClassInfo_classT {
  return { classId: 0, networkName: "", tableName: "" };
}

export const CDemoClassInfo_classT = {
  encode(message: CDemoClassInfo_classT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== 0) {
      writer.uint32(8).int32(message.classId);
    }
    if (message.networkName !== "") {
      writer.uint32(18).string(message.networkName);
    }
    if (message.tableName !== "") {
      writer.uint32(26).string(message.tableName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDemoClassInfo_classT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDemoClassInfo_classT();
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

          message.networkName = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.tableName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDemoClassInfo_classT {
    return {
      classId: isSet(object.classId) ? Number(object.classId) : 0,
      networkName: isSet(object.networkName) ? String(object.networkName) : "",
      tableName: isSet(object.tableName) ? String(object.tableName) : "",
    };
  },

  toJSON(message: CDemoClassInfo_classT): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = Math.round(message.classId));
    message.networkName !== undefined && (obj.networkName = message.networkName);
    message.tableName !== undefined && (obj.tableName = message.tableName);
    return obj;
  },

  create(base?: DeepPartial<CDemoClassInfo_classT>): CDemoClassInfo_classT {
    return CDemoClassInfo_classT.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDemoClassInfo_classT>): CDemoClassInfo_classT {
    const message = createBaseCDemoClassInfo_classT();
    message.classId = object.classId ?? 0;
    message.networkName = object.networkName ?? "";
    message.tableName = object.tableName ?? "";
    return message;
  },
};

function createBaseCDemoCustomData(): CDemoCustomData {
  return { callbackIndex: 0, data: Buffer.alloc(0) };
}

export const CDemoCustomData = {
  encode(message: CDemoCustomData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.callbackIndex !== 0) {
      writer.uint32(8).int32(message.callbackIndex);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDemoCustomData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDemoCustomData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.callbackIndex = reader.int32();
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

  fromJSON(object: any): CDemoCustomData {
    return {
      callbackIndex: isSet(object.callbackIndex) ? Number(object.callbackIndex) : 0,
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CDemoCustomData): unknown {
    const obj: any = {};
    message.callbackIndex !== undefined && (obj.callbackIndex = Math.round(message.callbackIndex));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CDemoCustomData>): CDemoCustomData {
    return CDemoCustomData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDemoCustomData>): CDemoCustomData {
    const message = createBaseCDemoCustomData();
    message.callbackIndex = object.callbackIndex ?? 0;
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCDemoCustomDataCallbacks(): CDemoCustomDataCallbacks {
  return { saveId: [] };
}

export const CDemoCustomDataCallbacks = {
  encode(message: CDemoCustomDataCallbacks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.saveId) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDemoCustomDataCallbacks {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDemoCustomDataCallbacks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.saveId.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDemoCustomDataCallbacks {
    return { saveId: Array.isArray(object?.saveId) ? object.saveId.map((e: any) => String(e)) : [] };
  },

  toJSON(message: CDemoCustomDataCallbacks): unknown {
    const obj: any = {};
    if (message.saveId) {
      obj.saveId = message.saveId.map((e) => e);
    } else {
      obj.saveId = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CDemoCustomDataCallbacks>): CDemoCustomDataCallbacks {
    return CDemoCustomDataCallbacks.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDemoCustomDataCallbacks>): CDemoCustomDataCallbacks {
    const message = createBaseCDemoCustomDataCallbacks();
    message.saveId = object.saveId?.map((e) => e) || [];
    return message;
  },
};

function createBaseCDemoStringTables(): CDemoStringTables {
  return { tables: [] };
}

export const CDemoStringTables = {
  encode(message: CDemoStringTables, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tables) {
      CDemoStringTables_tableT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDemoStringTables {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDemoStringTables();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.tables.push(CDemoStringTables_tableT.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDemoStringTables {
    return {
      tables: Array.isArray(object?.tables) ? object.tables.map((e: any) => CDemoStringTables_tableT.fromJSON(e)) : [],
    };
  },

  toJSON(message: CDemoStringTables): unknown {
    const obj: any = {};
    if (message.tables) {
      obj.tables = message.tables.map((e) => e ? CDemoStringTables_tableT.toJSON(e) : undefined);
    } else {
      obj.tables = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CDemoStringTables>): CDemoStringTables {
    return CDemoStringTables.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDemoStringTables>): CDemoStringTables {
    const message = createBaseCDemoStringTables();
    message.tables = object.tables?.map((e) => CDemoStringTables_tableT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCDemoStringTables_itemsT(): CDemoStringTables_itemsT {
  return { str: "", data: Buffer.alloc(0) };
}

export const CDemoStringTables_itemsT = {
  encode(message: CDemoStringTables_itemsT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.str !== "") {
      writer.uint32(10).string(message.str);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDemoStringTables_itemsT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDemoStringTables_itemsT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.str = reader.string();
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

  fromJSON(object: any): CDemoStringTables_itemsT {
    return {
      str: isSet(object.str) ? String(object.str) : "",
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CDemoStringTables_itemsT): unknown {
    const obj: any = {};
    message.str !== undefined && (obj.str = message.str);
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CDemoStringTables_itemsT>): CDemoStringTables_itemsT {
    return CDemoStringTables_itemsT.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDemoStringTables_itemsT>): CDemoStringTables_itemsT {
    const message = createBaseCDemoStringTables_itemsT();
    message.str = object.str ?? "";
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCDemoStringTables_tableT(): CDemoStringTables_tableT {
  return { tableName: "", items: [], itemsClientside: [], tableFlags: 0 };
}

export const CDemoStringTables_tableT = {
  encode(message: CDemoStringTables_tableT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tableName !== "") {
      writer.uint32(10).string(message.tableName);
    }
    for (const v of message.items) {
      CDemoStringTables_itemsT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.itemsClientside) {
      CDemoStringTables_itemsT.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.tableFlags !== 0) {
      writer.uint32(32).int32(message.tableFlags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDemoStringTables_tableT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDemoStringTables_tableT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.tableName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.items.push(CDemoStringTables_itemsT.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.itemsClientside.push(CDemoStringTables_itemsT.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.tableFlags = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDemoStringTables_tableT {
    return {
      tableName: isSet(object.tableName) ? String(object.tableName) : "",
      items: Array.isArray(object?.items) ? object.items.map((e: any) => CDemoStringTables_itemsT.fromJSON(e)) : [],
      itemsClientside: Array.isArray(object?.itemsClientside)
        ? object.itemsClientside.map((e: any) => CDemoStringTables_itemsT.fromJSON(e))
        : [],
      tableFlags: isSet(object.tableFlags) ? Number(object.tableFlags) : 0,
    };
  },

  toJSON(message: CDemoStringTables_tableT): unknown {
    const obj: any = {};
    message.tableName !== undefined && (obj.tableName = message.tableName);
    if (message.items) {
      obj.items = message.items.map((e) => e ? CDemoStringTables_itemsT.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    if (message.itemsClientside) {
      obj.itemsClientside = message.itemsClientside.map((e) => e ? CDemoStringTables_itemsT.toJSON(e) : undefined);
    } else {
      obj.itemsClientside = [];
    }
    message.tableFlags !== undefined && (obj.tableFlags = Math.round(message.tableFlags));
    return obj;
  },

  create(base?: DeepPartial<CDemoStringTables_tableT>): CDemoStringTables_tableT {
    return CDemoStringTables_tableT.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDemoStringTables_tableT>): CDemoStringTables_tableT {
    const message = createBaseCDemoStringTables_tableT();
    message.tableName = object.tableName ?? "";
    message.items = object.items?.map((e) => CDemoStringTables_itemsT.fromPartial(e)) || [];
    message.itemsClientside = object.itemsClientside?.map((e) => CDemoStringTables_itemsT.fromPartial(e)) || [];
    message.tableFlags = object.tableFlags ?? 0;
    return message;
  },
};

function createBaseCDemoStop(): CDemoStop {
  return {};
}

export const CDemoStop = {
  encode(_: CDemoStop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDemoStop {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDemoStop();
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

  fromJSON(_: any): CDemoStop {
    return {};
  },

  toJSON(_: CDemoStop): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CDemoStop>): CDemoStop {
    return CDemoStop.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CDemoStop>): CDemoStop {
    const message = createBaseCDemoStop();
    return message;
  },
};

function createBaseCDemoUserCmd(): CDemoUserCmd {
  return { cmdNumber: 0, data: Buffer.alloc(0) };
}

export const CDemoUserCmd = {
  encode(message: CDemoUserCmd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cmdNumber !== 0) {
      writer.uint32(8).int32(message.cmdNumber);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDemoUserCmd {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDemoUserCmd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.cmdNumber = reader.int32();
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

  fromJSON(object: any): CDemoUserCmd {
    return {
      cmdNumber: isSet(object.cmdNumber) ? Number(object.cmdNumber) : 0,
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CDemoUserCmd): unknown {
    const obj: any = {};
    message.cmdNumber !== undefined && (obj.cmdNumber = Math.round(message.cmdNumber));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CDemoUserCmd>): CDemoUserCmd {
    return CDemoUserCmd.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDemoUserCmd>): CDemoUserCmd {
    const message = createBaseCDemoUserCmd();
    message.cmdNumber = object.cmdNumber ?? 0;
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCDemoSpawnGroups(): CDemoSpawnGroups {
  return { msgs: [] };
}

export const CDemoSpawnGroups = {
  encode(message: CDemoSpawnGroups, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.msgs) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDemoSpawnGroups {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDemoSpawnGroups();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag != 26) {
            break;
          }

          message.msgs.push(reader.bytes() as Buffer);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDemoSpawnGroups {
    return { msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => Buffer.from(bytesFromBase64(e))) : [] };
  },

  toJSON(message: CDemoSpawnGroups): unknown {
    const obj: any = {};
    if (message.msgs) {
      obj.msgs = message.msgs.map((e) => base64FromBytes(e !== undefined ? e : Buffer.alloc(0)));
    } else {
      obj.msgs = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CDemoSpawnGroups>): CDemoSpawnGroups {
    return CDemoSpawnGroups.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDemoSpawnGroups>): CDemoSpawnGroups {
    const message = createBaseCDemoSpawnGroups();
    message.msgs = object.msgs?.map((e) => e) || [];
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
