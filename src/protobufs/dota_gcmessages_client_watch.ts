/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CMsgDOTAMatchMinimal } from "./dota_gcmessages_common";

export interface CSourceTVGameSmall {
  activateTime: number;
  deactivateTime: number;
  serverSteamId: string;
  lobbyId: string;
  leagueId: number;
  lobbyType: number;
  gameTime: number;
  delay: number;
  spectators: number;
  gameMode: number;
  averageMmr: number;
  matchId: string;
  seriesId: number;
  teamNameRadiant: string;
  teamNameDire: string;
  teamLogoRadiant: string;
  teamLogoDire: string;
  teamIdRadiant: number;
  teamIdDire: number;
  sortScore: number;
  lastUpdateTime: number;
  radiantLead: number;
  radiantScore: number;
  direScore: number;
  players: CSourceTVGameSmall_Player[];
  buildingState: number;
  weekendTourneyTournamentId: number;
  weekendTourneyDivision: number;
  weekendTourneySkillLevel: number;
  weekendTourneyBracketRound: number;
  customGameDifficulty: number;
}

export interface CSourceTVGameSmall_Player {
  accountId: number;
  heroId: number;
}

export interface CMsgClientToGCFindTopSourceTVGames {
  searchKey: string;
  leagueId: number;
  heroId: number;
  startGame: number;
  gameListIndex: number;
  lobbyIds: string[];
}

export interface CMsgGCToClientFindTopSourceTVGamesResponse {
  searchKey: string;
  leagueId: number;
  heroId: number;
  startGame: number;
  numGames: number;
  gameListIndex: number;
  gameList: CSourceTVGameSmall[];
  specificGames: boolean;
  botGame: CSourceTVGameSmall | undefined;
}

export interface CMsgGCToClientTopWeekendTourneyGames {
  liveGames: CSourceTVGameSmall[];
}

export interface CMsgClientToGCTopLeagueMatchesRequest {
}

export interface CMsgClientToGCTopFriendMatchesRequest {
}

export interface CMsgClientToGCMatchesMinimalRequest {
  matchIds: string[];
}

export interface CMsgClientToGCMatchesMinimalResponse {
  matches: CMsgDOTAMatchMinimal[];
  lastMatch: boolean;
}

export interface CMsgGCToClientTopLeagueMatchesResponse {
  matches: CMsgDOTAMatchMinimal[];
}

export interface CMsgGCToClientTopFriendMatchesResponse {
  matches: CMsgDOTAMatchMinimal[];
}

export interface CMsgSpectateFriendGame {
  steamId: string;
  live: boolean;
}

export interface CMsgSpectateFriendGameResponse {
  serverSteamid: string;
  watchLiveResult: CMsgSpectateFriendGameResponse_EWatchLiveResult;
}

export enum CMsgSpectateFriendGameResponse_EWatchLiveResult {
  SUCCESS = 0,
  ERROR_GENERIC = 1,
  ERROR_NO_PLUS = 2,
  ERROR_NOT_FRIENDS = 3,
  ERROR_LOBBY_NOT_FOUND = 4,
  ERROR_SPECTATOR_IN_A_LOBBY = 5,
  ERROR_LOBBY_IS_LAN = 6,
  ERROR_WRONG_LOBBY_TYPE = 7,
  ERROR_WRONG_LOBBY_STATE = 8,
  ERROR_PLAYER_NOT_PLAYER = 9,
  ERROR_TOO_MANY_SPECTATORS = 10,
  ERROR_SPECTATOR_SWITCHED_TEAMS = 11,
  ERROR_FRIENDS_ON_BOTH_SIDES = 12,
  ERROR_SPECTATOR_IN_THIS_LOBBY = 13,
  ERROR_LOBBY_IS_LEAGUE = 14,
}

export interface CDOTAReplayDownloadInfo {
  match: CMsgDOTAMatchMinimal | undefined;
  title: string;
  description: string;
  size: number;
  tags: string[];
  existsOnDisk: boolean;
}

export interface CDOTAReplayDownloadInfo_Highlight {
  timestamp: number;
  description: string;
}

export interface CMsgWatchGame {
  serverSteamid: string;
  clientVersion: number;
  watchServerSteamid: string;
  lobbyId: string;
  regions: number[];
}

export interface CMsgCancelWatchGame {
}

export interface CMsgWatchGameResponse {
  watchGameResult: CMsgWatchGameResponse_WatchGameResult;
  sourceTvPublicAddr: number;
  sourceTvPrivateAddr: number;
  sourceTvPort: number;
  gameServerSteamid: string;
  watchServerSteamid: string;
  watchTvUniqueSecretCode: string;
}

export enum CMsgWatchGameResponse_WatchGameResult {
  PENDING = 0,
  READY = 1,
  GAMESERVERNOTFOUND = 2,
  UNAVAILABLE = 3,
  CANCELLED = 4,
  INCOMPATIBLEVERSION = 5,
  MISSINGLEAGUESUBSCRIPTION = 6,
  LOBBYNOTFOUND = 7,
}

export interface CMsgPartyLeaderWatchGamePrompt {
  gameServerSteamid: string;
}

export interface CDOTABroadcasterInfo {
  accountId: number;
  serverSteamId: string;
  live: boolean;
  teamNameRadiant: string;
  teamNameDire: string;
  seriesGame: number;
  upcomingBroadcastTimestamp: number;
  allowLiveVideo: boolean;
  nodeType: number;
  nodeName: string;
}

export interface CMsgDOTASeries {
  seriesId: number;
  seriesType: number;
  team1: CMsgDOTASeries_TeamInfo | undefined;
  team2: CMsgDOTASeries_TeamInfo | undefined;
  matchMinimal: CMsgDOTAMatchMinimal[];
  liveGame: CMsgDOTASeries_LiveGame | undefined;
}

export interface CMsgDOTASeries_TeamInfo {
  teamId: number;
  teamName: string;
  teamLogoUrl: string;
  wagerCount: number;
}

export interface CMsgDOTASeries_LiveGame {
  serverSteamId: string;
  teamRadiant: CMsgDOTASeries_TeamInfo | undefined;
  teamDire: CMsgDOTASeries_TeamInfo | undefined;
  teamRadiantScore: number;
  teamDireScore: number;
}

function createBaseCSourceTVGameSmall(): CSourceTVGameSmall {
  return {
    activateTime: 0,
    deactivateTime: 0,
    serverSteamId: "0",
    lobbyId: "0",
    leagueId: 0,
    lobbyType: 0,
    gameTime: 0,
    delay: 0,
    spectators: 0,
    gameMode: 0,
    averageMmr: 0,
    matchId: "0",
    seriesId: 0,
    teamNameRadiant: "",
    teamNameDire: "",
    teamLogoRadiant: "0",
    teamLogoDire: "0",
    teamIdRadiant: 0,
    teamIdDire: 0,
    sortScore: 0,
    lastUpdateTime: 0,
    radiantLead: 0,
    radiantScore: 0,
    direScore: 0,
    players: [],
    buildingState: 0,
    weekendTourneyTournamentId: 0,
    weekendTourneyDivision: 0,
    weekendTourneySkillLevel: 0,
    weekendTourneyBracketRound: 0,
    customGameDifficulty: 0,
  };
}

export const CSourceTVGameSmall = {
  encode(message: CSourceTVGameSmall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activateTime !== 0) {
      writer.uint32(8).uint32(message.activateTime);
    }
    if (message.deactivateTime !== 0) {
      writer.uint32(16).uint32(message.deactivateTime);
    }
    if (message.serverSteamId !== "0") {
      writer.uint32(24).uint64(message.serverSteamId);
    }
    if (message.lobbyId !== "0") {
      writer.uint32(32).uint64(message.lobbyId);
    }
    if (message.leagueId !== 0) {
      writer.uint32(40).uint32(message.leagueId);
    }
    if (message.lobbyType !== 0) {
      writer.uint32(48).uint32(message.lobbyType);
    }
    if (message.gameTime !== 0) {
      writer.uint32(56).int32(message.gameTime);
    }
    if (message.delay !== 0) {
      writer.uint32(64).uint32(message.delay);
    }
    if (message.spectators !== 0) {
      writer.uint32(72).uint32(message.spectators);
    }
    if (message.gameMode !== 0) {
      writer.uint32(80).uint32(message.gameMode);
    }
    if (message.averageMmr !== 0) {
      writer.uint32(88).uint32(message.averageMmr);
    }
    if (message.matchId !== "0") {
      writer.uint32(96).uint64(message.matchId);
    }
    if (message.seriesId !== 0) {
      writer.uint32(104).uint32(message.seriesId);
    }
    if (message.teamNameRadiant !== "") {
      writer.uint32(122).string(message.teamNameRadiant);
    }
    if (message.teamNameDire !== "") {
      writer.uint32(130).string(message.teamNameDire);
    }
    if (message.teamLogoRadiant !== "0") {
      writer.uint32(193).fixed64(message.teamLogoRadiant);
    }
    if (message.teamLogoDire !== "0") {
      writer.uint32(201).fixed64(message.teamLogoDire);
    }
    if (message.teamIdRadiant !== 0) {
      writer.uint32(240).uint32(message.teamIdRadiant);
    }
    if (message.teamIdDire !== 0) {
      writer.uint32(248).uint32(message.teamIdDire);
    }
    if (message.sortScore !== 0) {
      writer.uint32(136).uint32(message.sortScore);
    }
    if (message.lastUpdateTime !== 0) {
      writer.uint32(149).float(message.lastUpdateTime);
    }
    if (message.radiantLead !== 0) {
      writer.uint32(152).int32(message.radiantLead);
    }
    if (message.radiantScore !== 0) {
      writer.uint32(160).uint32(message.radiantScore);
    }
    if (message.direScore !== 0) {
      writer.uint32(168).uint32(message.direScore);
    }
    for (const v of message.players) {
      CSourceTVGameSmall_Player.encode(v!, writer.uint32(178).fork()).ldelim();
    }
    if (message.buildingState !== 0) {
      writer.uint32(189).fixed32(message.buildingState);
    }
    if (message.weekendTourneyTournamentId !== 0) {
      writer.uint32(208).uint32(message.weekendTourneyTournamentId);
    }
    if (message.weekendTourneyDivision !== 0) {
      writer.uint32(216).uint32(message.weekendTourneyDivision);
    }
    if (message.weekendTourneySkillLevel !== 0) {
      writer.uint32(224).uint32(message.weekendTourneySkillLevel);
    }
    if (message.weekendTourneyBracketRound !== 0) {
      writer.uint32(232).uint32(message.weekendTourneyBracketRound);
    }
    if (message.customGameDifficulty !== 0) {
      writer.uint32(256).uint32(message.customGameDifficulty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSourceTVGameSmall {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSourceTVGameSmall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.activateTime = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.deactivateTime = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.serverSteamId = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.lobbyId = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.lobbyType = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.gameTime = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.delay = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.spectators = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.gameMode = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.averageMmr = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.seriesId = reader.uint32();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.teamNameRadiant = reader.string();
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.teamNameDire = reader.string();
          continue;
        case 24:
          if (tag != 193) {
            break;
          }

          message.teamLogoRadiant = longToString(reader.fixed64() as Long);
          continue;
        case 25:
          if (tag != 201) {
            break;
          }

          message.teamLogoDire = longToString(reader.fixed64() as Long);
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.teamIdRadiant = reader.uint32();
          continue;
        case 31:
          if (tag != 248) {
            break;
          }

          message.teamIdDire = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.sortScore = reader.uint32();
          continue;
        case 18:
          if (tag != 149) {
            break;
          }

          message.lastUpdateTime = reader.float();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.radiantLead = reader.int32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.radiantScore = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.direScore = reader.uint32();
          continue;
        case 22:
          if (tag != 178) {
            break;
          }

          message.players.push(CSourceTVGameSmall_Player.decode(reader, reader.uint32()));
          continue;
        case 23:
          if (tag != 189) {
            break;
          }

          message.buildingState = reader.fixed32();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.weekendTourneyTournamentId = reader.uint32();
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.weekendTourneyDivision = reader.uint32();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.weekendTourneySkillLevel = reader.uint32();
          continue;
        case 29:
          if (tag != 232) {
            break;
          }

          message.weekendTourneyBracketRound = reader.uint32();
          continue;
        case 32:
          if (tag != 256) {
            break;
          }

          message.customGameDifficulty = reader.uint32();
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

function createBaseCSourceTVGameSmall_Player(): CSourceTVGameSmall_Player {
  return { accountId: 0, heroId: 0 };
}

export const CSourceTVGameSmall_Player = {
  encode(message: CSourceTVGameSmall_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.heroId !== 0) {
      writer.uint32(16).uint32(message.heroId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSourceTVGameSmall_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSourceTVGameSmall_Player();
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

function createBaseCMsgClientToGCFindTopSourceTVGames(): CMsgClientToGCFindTopSourceTVGames {
  return { searchKey: "", leagueId: 0, heroId: 0, startGame: 0, gameListIndex: 0, lobbyIds: [] };
}

export const CMsgClientToGCFindTopSourceTVGames = {
  encode(message: CMsgClientToGCFindTopSourceTVGames, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.searchKey !== "") {
      writer.uint32(10).string(message.searchKey);
    }
    if (message.leagueId !== 0) {
      writer.uint32(16).uint32(message.leagueId);
    }
    if (message.heroId !== 0) {
      writer.uint32(24).uint32(message.heroId);
    }
    if (message.startGame !== 0) {
      writer.uint32(32).uint32(message.startGame);
    }
    if (message.gameListIndex !== 0) {
      writer.uint32(40).uint32(message.gameListIndex);
    }
    writer.uint32(50).fork();
    for (const v of message.lobbyIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCFindTopSourceTVGames {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCFindTopSourceTVGames();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.searchKey = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.startGame = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.gameListIndex = reader.uint32();
          continue;
        case 6:
          if (tag == 48) {
            message.lobbyIds.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lobbyIds.push(longToString(reader.uint64() as Long));
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

function createBaseCMsgGCToClientFindTopSourceTVGamesResponse(): CMsgGCToClientFindTopSourceTVGamesResponse {
  return {
    searchKey: "",
    leagueId: 0,
    heroId: 0,
    startGame: 0,
    numGames: 0,
    gameListIndex: 0,
    gameList: [],
    specificGames: false,
    botGame: undefined,
  };
}

export const CMsgGCToClientFindTopSourceTVGamesResponse = {
  encode(message: CMsgGCToClientFindTopSourceTVGamesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.searchKey !== "") {
      writer.uint32(10).string(message.searchKey);
    }
    if (message.leagueId !== 0) {
      writer.uint32(16).uint32(message.leagueId);
    }
    if (message.heroId !== 0) {
      writer.uint32(24).uint32(message.heroId);
    }
    if (message.startGame !== 0) {
      writer.uint32(32).uint32(message.startGame);
    }
    if (message.numGames !== 0) {
      writer.uint32(40).uint32(message.numGames);
    }
    if (message.gameListIndex !== 0) {
      writer.uint32(48).uint32(message.gameListIndex);
    }
    for (const v of message.gameList) {
      CSourceTVGameSmall.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.specificGames === true) {
      writer.uint32(64).bool(message.specificGames);
    }
    if (message.botGame !== undefined) {
      CSourceTVGameSmall.encode(message.botGame, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientFindTopSourceTVGamesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientFindTopSourceTVGamesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.searchKey = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.startGame = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.numGames = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.gameListIndex = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.gameList.push(CSourceTVGameSmall.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.specificGames = reader.bool();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.botGame = CSourceTVGameSmall.decode(reader, reader.uint32());
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

function createBaseCMsgGCToClientTopWeekendTourneyGames(): CMsgGCToClientTopWeekendTourneyGames {
  return { liveGames: [] };
}

export const CMsgGCToClientTopWeekendTourneyGames = {
  encode(message: CMsgGCToClientTopWeekendTourneyGames, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liveGames) {
      CSourceTVGameSmall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientTopWeekendTourneyGames {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientTopWeekendTourneyGames();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.liveGames.push(CSourceTVGameSmall.decode(reader, reader.uint32()));
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

function createBaseCMsgClientToGCTopLeagueMatchesRequest(): CMsgClientToGCTopLeagueMatchesRequest {
  return {};
}

export const CMsgClientToGCTopLeagueMatchesRequest = {
  encode(_: CMsgClientToGCTopLeagueMatchesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCTopLeagueMatchesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCTopLeagueMatchesRequest();
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

function createBaseCMsgClientToGCTopFriendMatchesRequest(): CMsgClientToGCTopFriendMatchesRequest {
  return {};
}

export const CMsgClientToGCTopFriendMatchesRequest = {
  encode(_: CMsgClientToGCTopFriendMatchesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCTopFriendMatchesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCTopFriendMatchesRequest();
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

function createBaseCMsgClientToGCMatchesMinimalRequest(): CMsgClientToGCMatchesMinimalRequest {
  return { matchIds: [] };
}

export const CMsgClientToGCMatchesMinimalRequest = {
  encode(message: CMsgClientToGCMatchesMinimalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.matchIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCMatchesMinimalRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCMatchesMinimalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.matchIds.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.matchIds.push(longToString(reader.uint64() as Long));
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

function createBaseCMsgClientToGCMatchesMinimalResponse(): CMsgClientToGCMatchesMinimalResponse {
  return { matches: [], lastMatch: false };
}

export const CMsgClientToGCMatchesMinimalResponse = {
  encode(message: CMsgClientToGCMatchesMinimalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.matches) {
      CMsgDOTAMatchMinimal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastMatch === true) {
      writer.uint32(16).bool(message.lastMatch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCMatchesMinimalResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCMatchesMinimalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.matches.push(CMsgDOTAMatchMinimal.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.lastMatch = reader.bool();
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

function createBaseCMsgGCToClientTopLeagueMatchesResponse(): CMsgGCToClientTopLeagueMatchesResponse {
  return { matches: [] };
}

export const CMsgGCToClientTopLeagueMatchesResponse = {
  encode(message: CMsgGCToClientTopLeagueMatchesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.matches) {
      CMsgDOTAMatchMinimal.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientTopLeagueMatchesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientTopLeagueMatchesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.matches.push(CMsgDOTAMatchMinimal.decode(reader, reader.uint32()));
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

function createBaseCMsgGCToClientTopFriendMatchesResponse(): CMsgGCToClientTopFriendMatchesResponse {
  return { matches: [] };
}

export const CMsgGCToClientTopFriendMatchesResponse = {
  encode(message: CMsgGCToClientTopFriendMatchesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.matches) {
      CMsgDOTAMatchMinimal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientTopFriendMatchesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientTopFriendMatchesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.matches.push(CMsgDOTAMatchMinimal.decode(reader, reader.uint32()));
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

function createBaseCMsgSpectateFriendGame(): CMsgSpectateFriendGame {
  return { steamId: "0", live: false };
}

export const CMsgSpectateFriendGame = {
  encode(message: CMsgSpectateFriendGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.live === true) {
      writer.uint32(16).bool(message.live);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSpectateFriendGame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSpectateFriendGame();
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

          message.live = reader.bool();
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

function createBaseCMsgSpectateFriendGameResponse(): CMsgSpectateFriendGameResponse {
  return { serverSteamid: "0", watchLiveResult: 0 };
}

export const CMsgSpectateFriendGameResponse = {
  encode(message: CMsgSpectateFriendGameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverSteamid !== "0") {
      writer.uint32(33).fixed64(message.serverSteamid);
    }
    if (message.watchLiveResult !== 0) {
      writer.uint32(40).int32(message.watchLiveResult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSpectateFriendGameResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSpectateFriendGameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag != 33) {
            break;
          }

          message.serverSteamid = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.watchLiveResult = reader.int32() as any;
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

function createBaseCDOTAReplayDownloadInfo(): CDOTAReplayDownloadInfo {
  return { match: undefined, title: "", description: "", size: 0, tags: [], existsOnDisk: false };
}

export const CDOTAReplayDownloadInfo = {
  encode(message: CDOTAReplayDownloadInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.match !== undefined) {
      CMsgDOTAMatchMinimal.encode(message.match, writer.uint32(10).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.size !== 0) {
      writer.uint32(32).uint32(message.size);
    }
    for (const v of message.tags) {
      writer.uint32(42).string(v!);
    }
    if (message.existsOnDisk === true) {
      writer.uint32(48).bool(message.existsOnDisk);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAReplayDownloadInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAReplayDownloadInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.match = CMsgDOTAMatchMinimal.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.title = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.size = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.existsOnDisk = reader.bool();
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

function createBaseCDOTAReplayDownloadInfo_Highlight(): CDOTAReplayDownloadInfo_Highlight {
  return { timestamp: 0, description: "" };
}

export const CDOTAReplayDownloadInfo_Highlight = {
  encode(message: CDOTAReplayDownloadInfo_Highlight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).uint32(message.timestamp);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAReplayDownloadInfo_Highlight {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAReplayDownloadInfo_Highlight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.timestamp = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.description = reader.string();
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

function createBaseCMsgWatchGame(): CMsgWatchGame {
  return { serverSteamid: "0", clientVersion: 0, watchServerSteamid: "0", lobbyId: "0", regions: [] };
}

export const CMsgWatchGame = {
  encode(message: CMsgWatchGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverSteamid !== "0") {
      writer.uint32(9).fixed64(message.serverSteamid);
    }
    if (message.clientVersion !== 0) {
      writer.uint32(16).uint32(message.clientVersion);
    }
    if (message.watchServerSteamid !== "0") {
      writer.uint32(25).fixed64(message.watchServerSteamid);
    }
    if (message.lobbyId !== "0") {
      writer.uint32(32).uint64(message.lobbyId);
    }
    writer.uint32(42).fork();
    for (const v of message.regions) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgWatchGame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgWatchGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.serverSteamid = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.clientVersion = reader.uint32();
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.watchServerSteamid = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.lobbyId = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag == 40) {
            message.regions.push(reader.uint32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.regions.push(reader.uint32());
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

function createBaseCMsgCancelWatchGame(): CMsgCancelWatchGame {
  return {};
}

export const CMsgCancelWatchGame = {
  encode(_: CMsgCancelWatchGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCancelWatchGame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCancelWatchGame();
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

function createBaseCMsgWatchGameResponse(): CMsgWatchGameResponse {
  return {
    watchGameResult: 0,
    sourceTvPublicAddr: 0,
    sourceTvPrivateAddr: 0,
    sourceTvPort: 0,
    gameServerSteamid: "0",
    watchServerSteamid: "0",
    watchTvUniqueSecretCode: "0",
  };
}

export const CMsgWatchGameResponse = {
  encode(message: CMsgWatchGameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.watchGameResult !== 0) {
      writer.uint32(8).int32(message.watchGameResult);
    }
    if (message.sourceTvPublicAddr !== 0) {
      writer.uint32(16).uint32(message.sourceTvPublicAddr);
    }
    if (message.sourceTvPrivateAddr !== 0) {
      writer.uint32(24).uint32(message.sourceTvPrivateAddr);
    }
    if (message.sourceTvPort !== 0) {
      writer.uint32(32).uint32(message.sourceTvPort);
    }
    if (message.gameServerSteamid !== "0") {
      writer.uint32(41).fixed64(message.gameServerSteamid);
    }
    if (message.watchServerSteamid !== "0") {
      writer.uint32(49).fixed64(message.watchServerSteamid);
    }
    if (message.watchTvUniqueSecretCode !== "0") {
      writer.uint32(57).fixed64(message.watchTvUniqueSecretCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgWatchGameResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgWatchGameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.watchGameResult = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.sourceTvPublicAddr = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.sourceTvPrivateAddr = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.sourceTvPort = reader.uint32();
          continue;
        case 5:
          if (tag != 41) {
            break;
          }

          message.gameServerSteamid = longToString(reader.fixed64() as Long);
          continue;
        case 6:
          if (tag != 49) {
            break;
          }

          message.watchServerSteamid = longToString(reader.fixed64() as Long);
          continue;
        case 7:
          if (tag != 57) {
            break;
          }

          message.watchTvUniqueSecretCode = longToString(reader.fixed64() as Long);
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

function createBaseCMsgPartyLeaderWatchGamePrompt(): CMsgPartyLeaderWatchGamePrompt {
  return { gameServerSteamid: "0" };
}

export const CMsgPartyLeaderWatchGamePrompt = {
  encode(message: CMsgPartyLeaderWatchGamePrompt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameServerSteamid !== "0") {
      writer.uint32(41).fixed64(message.gameServerSteamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPartyLeaderWatchGamePrompt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPartyLeaderWatchGamePrompt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if (tag != 41) {
            break;
          }

          message.gameServerSteamid = longToString(reader.fixed64() as Long);
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

function createBaseCDOTABroadcasterInfo(): CDOTABroadcasterInfo {
  return {
    accountId: 0,
    serverSteamId: "0",
    live: false,
    teamNameRadiant: "",
    teamNameDire: "",
    seriesGame: 0,
    upcomingBroadcastTimestamp: 0,
    allowLiveVideo: false,
    nodeType: 0,
    nodeName: "",
  };
}

export const CDOTABroadcasterInfo = {
  encode(message: CDOTABroadcasterInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.serverSteamId !== "0") {
      writer.uint32(17).fixed64(message.serverSteamId);
    }
    if (message.live === true) {
      writer.uint32(24).bool(message.live);
    }
    if (message.teamNameRadiant !== "") {
      writer.uint32(34).string(message.teamNameRadiant);
    }
    if (message.teamNameDire !== "") {
      writer.uint32(42).string(message.teamNameDire);
    }
    if (message.seriesGame !== 0) {
      writer.uint32(56).uint32(message.seriesGame);
    }
    if (message.upcomingBroadcastTimestamp !== 0) {
      writer.uint32(72).uint32(message.upcomingBroadcastTimestamp);
    }
    if (message.allowLiveVideo === true) {
      writer.uint32(80).bool(message.allowLiveVideo);
    }
    if (message.nodeType !== 0) {
      writer.uint32(88).uint32(message.nodeType);
    }
    if (message.nodeName !== "") {
      writer.uint32(98).string(message.nodeName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTABroadcasterInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTABroadcasterInfo();
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
          if (tag != 17) {
            break;
          }

          message.serverSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.live = reader.bool();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.teamNameRadiant = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.teamNameDire = reader.string();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.seriesGame = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.upcomingBroadcastTimestamp = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.allowLiveVideo = reader.bool();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.nodeType = reader.uint32();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.nodeName = reader.string();
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

function createBaseCMsgDOTASeries(): CMsgDOTASeries {
  return { seriesId: 0, seriesType: 0, team1: undefined, team2: undefined, matchMinimal: [], liveGame: undefined };
}

export const CMsgDOTASeries = {
  encode(message: CMsgDOTASeries, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seriesId !== 0) {
      writer.uint32(8).uint32(message.seriesId);
    }
    if (message.seriesType !== 0) {
      writer.uint32(16).uint32(message.seriesType);
    }
    if (message.team1 !== undefined) {
      CMsgDOTASeries_TeamInfo.encode(message.team1, writer.uint32(26).fork()).ldelim();
    }
    if (message.team2 !== undefined) {
      CMsgDOTASeries_TeamInfo.encode(message.team2, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.matchMinimal) {
      CMsgDOTAMatchMinimal.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.liveGame !== undefined) {
      CMsgDOTASeries_LiveGame.encode(message.liveGame, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASeries {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASeries();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.seriesId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.seriesType = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.team1 = CMsgDOTASeries_TeamInfo.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.team2 = CMsgDOTASeries_TeamInfo.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.matchMinimal.push(CMsgDOTAMatchMinimal.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.liveGame = CMsgDOTASeries_LiveGame.decode(reader, reader.uint32());
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

function createBaseCMsgDOTASeries_TeamInfo(): CMsgDOTASeries_TeamInfo {
  return { teamId: 0, teamName: "", teamLogoUrl: "", wagerCount: 0 };
}

export const CMsgDOTASeries_TeamInfo = {
  encode(message: CMsgDOTASeries_TeamInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamId !== 0) {
      writer.uint32(8).uint32(message.teamId);
    }
    if (message.teamName !== "") {
      writer.uint32(18).string(message.teamName);
    }
    if (message.teamLogoUrl !== "") {
      writer.uint32(26).string(message.teamLogoUrl);
    }
    if (message.wagerCount !== 0) {
      writer.uint32(32).uint32(message.wagerCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASeries_TeamInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASeries_TeamInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.teamName = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.teamLogoUrl = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.wagerCount = reader.uint32();
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

function createBaseCMsgDOTASeries_LiveGame(): CMsgDOTASeries_LiveGame {
  return { serverSteamId: "0", teamRadiant: undefined, teamDire: undefined, teamRadiantScore: 0, teamDireScore: 0 };
}

export const CMsgDOTASeries_LiveGame = {
  encode(message: CMsgDOTASeries_LiveGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverSteamId !== "0") {
      writer.uint32(9).fixed64(message.serverSteamId);
    }
    if (message.teamRadiant !== undefined) {
      CMsgDOTASeries_TeamInfo.encode(message.teamRadiant, writer.uint32(18).fork()).ldelim();
    }
    if (message.teamDire !== undefined) {
      CMsgDOTASeries_TeamInfo.encode(message.teamDire, writer.uint32(26).fork()).ldelim();
    }
    if (message.teamRadiantScore !== 0) {
      writer.uint32(32).uint32(message.teamRadiantScore);
    }
    if (message.teamDireScore !== 0) {
      writer.uint32(40).uint32(message.teamDireScore);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASeries_LiveGame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASeries_LiveGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.serverSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.teamRadiant = CMsgDOTASeries_TeamInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.teamDire = CMsgDOTASeries_TeamInfo.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.teamRadiantScore = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.teamDireScore = reader.uint32();
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
