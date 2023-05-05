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
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
