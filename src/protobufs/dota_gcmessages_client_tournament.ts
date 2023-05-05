/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ETournamentGameState, ETournamentNodeState, ETournamentState, ETournamentTemplate } from "./dota_client_enums";

export enum ETournamentEvent {
  k_ETournamentEvent_None = 0,
  k_ETournamentEvent_TournamentCreated = 1,
  k_ETournamentEvent_TournamentsMerged = 2,
  k_ETournamentEvent_GameOutcome = 3,
  k_ETournamentEvent_TeamGivenBye = 4,
  k_ETournamentEvent_TournamentCanceledByAdmin = 5,
  k_ETournamentEvent_TeamAbandoned = 6,
  k_ETournamentEvent_ScheduledGameStarted = 7,
  k_ETournamentEvent_Canceled = 8,
  k_ETournamentEvent_TeamParticipationTimedOut_EntryFeeRefund = 9,
  k_ETournamentEvent_TeamParticipationTimedOut_EntryFeeForfeit = 10,
  k_ETournamentEvent_TeamParticipationTimedOut_GrantedVictory = 11,
}

export interface CMsgRequestWeekendTourneySchedule {
}

export interface CMsgWeekendTourneySchedule {
  divisions: CMsgWeekendTourneySchedule_Division[];
}

export interface CMsgWeekendTourneySchedule_Division {
  divisionCode: number;
  timeWindowOpen: number;
  timeWindowClose: number;
  timeWindowOpenNext: number;
  trophyId: number;
  freeWeekend: boolean;
}

export interface CMsgWeekendTourneyOpts {
  participating: boolean;
  divisionId: number;
  buyin: number;
  skillLevel: number;
  matchGroups: number;
  teamId: number;
  pickupTeamName: string;
  pickupTeamLogo: string;
}

export interface CMsgWeekendTourneyLeave {
}

export interface CMsgDOTATournament {
  tournamentId: number;
  divisionId: number;
  scheduleTime: number;
  skillLevel: number;
  tournamentTemplate: ETournamentTemplate;
  state: ETournamentState;
  stateSeqNum: number;
  seasonTrophyId: number;
  teams: CMsgDOTATournament_Team[];
  games: CMsgDOTATournament_Game[];
  nodes: CMsgDOTATournament_Node[];
}

export interface CMsgDOTATournament_Team {
  teamGid: string;
  nodeOrState: number;
  players: number[];
  playerBuyin: number[];
  playerSkillLevel: number[];
  matchGroupMask: number;
  teamId: number;
  teamName: string;
  teamBaseLogo: string;
  teamUiLogo: string;
}

export interface CMsgDOTATournament_Game {
  nodeIdx: number;
  lobbyId: string;
  matchId: string;
  teamAGood: boolean;
  state: ETournamentGameState;
  startTime: number;
}

export interface CMsgDOTATournament_Node {
  nodeId: number;
  teamIdxA: number;
  teamIdxB: number;
  nodeState: ETournamentNodeState;
}

export interface CMsgDOTATournamentStateChange {
  newTournamentId: number;
  event: ETournamentEvent;
  newTournamentState: ETournamentState;
  gameChanges: CMsgDOTATournamentStateChange_GameChange[];
  teamChanges: CMsgDOTATournamentStateChange_TeamChange[];
  mergedTournamentIds: number[];
  stateSeqNum: number;
}

export interface CMsgDOTATournamentStateChange_GameChange {
  matchId: string;
  newState: ETournamentGameState;
}

export interface CMsgDOTATournamentStateChange_TeamChange {
  teamGid: string;
  newNodeOrState: number;
  oldNodeOrState: number;
}

export interface CMsgDOTAWeekendTourneyPlayerSkillLevelStats {
  skillLevel: number;
  timesWon0: number;
  timesWon1: number;
  timesWon2: number;
  timesWon3: number;
  timesByeAndLost: number;
  timesByeAndWon: number;
  timesUnusualChamp: number;
  totalGamesWon: number;
  score: number;
}

export interface CMsgDOTAWeekendTourneyPlayerStats {
  accountId: number;
  seasonTrophyId: number;
  skillLevels: CMsgDOTAWeekendTourneyPlayerSkillLevelStats[];
  currentTier: number;
}

export interface CMsgDOTAWeekendTourneyPlayerStatsRequest {
  accountId: number;
  seasonTrophyId: number;
}

export interface CMsgDOTAWeekendTourneyPlayerHistory {
  accountId: number;
  tournaments: CMsgDOTAWeekendTourneyPlayerHistory_Tournament[];
}

export interface CMsgDOTAWeekendTourneyPlayerHistory_Tournament {
  tournamentId: number;
  startTime: number;
  tournamentTier: number;
  teamId: number;
  teamDate: number;
  teamResult: number;
  accountId: number[];
  teamName: string;
  seasonTrophyId: number;
}

export interface CMsgDOTAWeekendTourneyParticipationDetails {
  divisions: CMsgDOTAWeekendTourneyParticipationDetails_Division[];
}

export interface CMsgDOTAWeekendTourneyParticipationDetails_Tier {
  tier: number;
  players: number;
  teams: number;
  winningTeams: number;
  playersStreak2: number;
  playersStreak3: number;
  playersStreak4: number;
  playersStreak5: number;
}

export interface CMsgDOTAWeekendTourneyParticipationDetails_Division {
  divisionId: number;
  scheduleTime: number;
  tiers: CMsgDOTAWeekendTourneyParticipationDetails_Tier[];
}

function createBaseCMsgRequestWeekendTourneySchedule(): CMsgRequestWeekendTourneySchedule {
  return {};
}

export const CMsgRequestWeekendTourneySchedule = {
  encode(_: CMsgRequestWeekendTourneySchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRequestWeekendTourneySchedule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRequestWeekendTourneySchedule();
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

function createBaseCMsgWeekendTourneySchedule(): CMsgWeekendTourneySchedule {
  return { divisions: [] };
}

export const CMsgWeekendTourneySchedule = {
  encode(message: CMsgWeekendTourneySchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.divisions) {
      CMsgWeekendTourneySchedule_Division.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgWeekendTourneySchedule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgWeekendTourneySchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.divisions.push(CMsgWeekendTourneySchedule_Division.decode(reader, reader.uint32()));
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

function createBaseCMsgWeekendTourneySchedule_Division(): CMsgWeekendTourneySchedule_Division {
  return {
    divisionCode: 0,
    timeWindowOpen: 0,
    timeWindowClose: 0,
    timeWindowOpenNext: 0,
    trophyId: 0,
    freeWeekend: false,
  };
}

export const CMsgWeekendTourneySchedule_Division = {
  encode(message: CMsgWeekendTourneySchedule_Division, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.divisionCode !== 0) {
      writer.uint32(8).uint32(message.divisionCode);
    }
    if (message.timeWindowOpen !== 0) {
      writer.uint32(16).uint32(message.timeWindowOpen);
    }
    if (message.timeWindowClose !== 0) {
      writer.uint32(24).uint32(message.timeWindowClose);
    }
    if (message.timeWindowOpenNext !== 0) {
      writer.uint32(32).uint32(message.timeWindowOpenNext);
    }
    if (message.trophyId !== 0) {
      writer.uint32(40).uint32(message.trophyId);
    }
    if (message.freeWeekend === true) {
      writer.uint32(48).bool(message.freeWeekend);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgWeekendTourneySchedule_Division {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgWeekendTourneySchedule_Division();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.divisionCode = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.timeWindowOpen = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.timeWindowClose = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.timeWindowOpenNext = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.trophyId = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.freeWeekend = reader.bool();
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

function createBaseCMsgWeekendTourneyOpts(): CMsgWeekendTourneyOpts {
  return {
    participating: false,
    divisionId: 0,
    buyin: 0,
    skillLevel: 0,
    matchGroups: 0,
    teamId: 0,
    pickupTeamName: "",
    pickupTeamLogo: "0",
  };
}

export const CMsgWeekendTourneyOpts = {
  encode(message: CMsgWeekendTourneyOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.participating === true) {
      writer.uint32(8).bool(message.participating);
    }
    if (message.divisionId !== 0) {
      writer.uint32(16).uint32(message.divisionId);
    }
    if (message.buyin !== 0) {
      writer.uint32(24).uint32(message.buyin);
    }
    if (message.skillLevel !== 0) {
      writer.uint32(32).uint32(message.skillLevel);
    }
    if (message.matchGroups !== 0) {
      writer.uint32(40).uint32(message.matchGroups);
    }
    if (message.teamId !== 0) {
      writer.uint32(48).uint32(message.teamId);
    }
    if (message.pickupTeamName !== "") {
      writer.uint32(58).string(message.pickupTeamName);
    }
    if (message.pickupTeamLogo !== "0") {
      writer.uint32(64).uint64(message.pickupTeamLogo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgWeekendTourneyOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgWeekendTourneyOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.participating = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.divisionId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.buyin = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.skillLevel = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.matchGroups = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.pickupTeamName = reader.string();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.pickupTeamLogo = longToString(reader.uint64() as Long);
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

function createBaseCMsgWeekendTourneyLeave(): CMsgWeekendTourneyLeave {
  return {};
}

export const CMsgWeekendTourneyLeave = {
  encode(_: CMsgWeekendTourneyLeave, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgWeekendTourneyLeave {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgWeekendTourneyLeave();
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

function createBaseCMsgDOTATournament(): CMsgDOTATournament {
  return {
    tournamentId: 0,
    divisionId: 0,
    scheduleTime: 0,
    skillLevel: 0,
    tournamentTemplate: 0,
    state: 0,
    stateSeqNum: 0,
    seasonTrophyId: 0,
    teams: [],
    games: [],
    nodes: [],
  };
}

export const CMsgDOTATournament = {
  encode(message: CMsgDOTATournament, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tournamentId !== 0) {
      writer.uint32(8).uint32(message.tournamentId);
    }
    if (message.divisionId !== 0) {
      writer.uint32(16).uint32(message.divisionId);
    }
    if (message.scheduleTime !== 0) {
      writer.uint32(24).uint32(message.scheduleTime);
    }
    if (message.skillLevel !== 0) {
      writer.uint32(32).uint32(message.skillLevel);
    }
    if (message.tournamentTemplate !== 0) {
      writer.uint32(40).int32(message.tournamentTemplate);
    }
    if (message.state !== 0) {
      writer.uint32(48).int32(message.state);
    }
    if (message.stateSeqNum !== 0) {
      writer.uint32(80).uint32(message.stateSeqNum);
    }
    if (message.seasonTrophyId !== 0) {
      writer.uint32(88).uint32(message.seasonTrophyId);
    }
    for (const v of message.teams) {
      CMsgDOTATournament_Team.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.games) {
      CMsgDOTATournament_Game.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.nodes) {
      CMsgDOTATournament_Node.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATournament {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATournament();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.tournamentId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.divisionId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.scheduleTime = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.skillLevel = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.tournamentTemplate = reader.int32() as any;
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.stateSeqNum = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.seasonTrophyId = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.teams.push(CMsgDOTATournament_Team.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.games.push(CMsgDOTATournament_Game.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.nodes.push(CMsgDOTATournament_Node.decode(reader, reader.uint32()));
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

function createBaseCMsgDOTATournament_Team(): CMsgDOTATournament_Team {
  return {
    teamGid: "0",
    nodeOrState: 0,
    players: [],
    playerBuyin: [],
    playerSkillLevel: [],
    matchGroupMask: 0,
    teamId: 0,
    teamName: "",
    teamBaseLogo: "0",
    teamUiLogo: "0",
  };
}

export const CMsgDOTATournament_Team = {
  encode(message: CMsgDOTATournament_Team, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamGid !== "0") {
      writer.uint32(9).fixed64(message.teamGid);
    }
    if (message.nodeOrState !== 0) {
      writer.uint32(16).uint32(message.nodeOrState);
    }
    writer.uint32(26).fork();
    for (const v of message.players) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(74).fork();
    for (const v of message.playerBuyin) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(82).fork();
    for (const v of message.playerSkillLevel) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.matchGroupMask !== 0) {
      writer.uint32(96).uint32(message.matchGroupMask);
    }
    if (message.teamId !== 0) {
      writer.uint32(32).uint32(message.teamId);
    }
    if (message.teamName !== "") {
      writer.uint32(42).string(message.teamName);
    }
    if (message.teamBaseLogo !== "0") {
      writer.uint32(56).uint64(message.teamBaseLogo);
    }
    if (message.teamUiLogo !== "0") {
      writer.uint32(64).uint64(message.teamUiLogo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATournament_Team {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATournament_Team();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.teamGid = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.nodeOrState = reader.uint32();
          continue;
        case 3:
          if (tag == 24) {
            message.players.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.players.push(reader.uint32());
            }

            continue;
          }

          break;
        case 9:
          if (tag == 72) {
            message.playerBuyin.push(reader.uint32());
            continue;
          }

          if (tag == 74) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.playerBuyin.push(reader.uint32());
            }

            continue;
          }

          break;
        case 10:
          if (tag == 80) {
            message.playerSkillLevel.push(reader.uint32());
            continue;
          }

          if (tag == 82) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.playerSkillLevel.push(reader.uint32());
            }

            continue;
          }

          break;
        case 12:
          if (tag != 96) {
            break;
          }

          message.matchGroupMask = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.teamName = reader.string();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.teamBaseLogo = longToString(reader.uint64() as Long);
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.teamUiLogo = longToString(reader.uint64() as Long);
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

function createBaseCMsgDOTATournament_Game(): CMsgDOTATournament_Game {
  return { nodeIdx: 0, lobbyId: "0", matchId: "0", teamAGood: false, state: 0, startTime: 0 };
}

export const CMsgDOTATournament_Game = {
  encode(message: CMsgDOTATournament_Game, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeIdx !== 0) {
      writer.uint32(8).uint32(message.nodeIdx);
    }
    if (message.lobbyId !== "0") {
      writer.uint32(17).fixed64(message.lobbyId);
    }
    if (message.matchId !== "0") {
      writer.uint32(24).uint64(message.matchId);
    }
    if (message.teamAGood === true) {
      writer.uint32(32).bool(message.teamAGood);
    }
    if (message.state !== 0) {
      writer.uint32(40).int32(message.state);
    }
    if (message.startTime !== 0) {
      writer.uint32(48).uint32(message.startTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATournament_Game {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATournament_Game();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.nodeIdx = reader.uint32();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.lobbyId = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.teamAGood = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.startTime = reader.uint32();
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

function createBaseCMsgDOTATournament_Node(): CMsgDOTATournament_Node {
  return { nodeId: 0, teamIdxA: 0, teamIdxB: 0, nodeState: 0 };
}

export const CMsgDOTATournament_Node = {
  encode(message: CMsgDOTATournament_Node, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== 0) {
      writer.uint32(8).uint32(message.nodeId);
    }
    if (message.teamIdxA !== 0) {
      writer.uint32(16).uint32(message.teamIdxA);
    }
    if (message.teamIdxB !== 0) {
      writer.uint32(24).uint32(message.teamIdxB);
    }
    if (message.nodeState !== 0) {
      writer.uint32(32).int32(message.nodeState);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATournament_Node {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATournament_Node();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.nodeId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.teamIdxA = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.teamIdxB = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.nodeState = reader.int32() as any;
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

function createBaseCMsgDOTATournamentStateChange(): CMsgDOTATournamentStateChange {
  return {
    newTournamentId: 0,
    event: 0,
    newTournamentState: 0,
    gameChanges: [],
    teamChanges: [],
    mergedTournamentIds: [],
    stateSeqNum: 0,
  };
}

export const CMsgDOTATournamentStateChange = {
  encode(message: CMsgDOTATournamentStateChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newTournamentId !== 0) {
      writer.uint32(8).uint32(message.newTournamentId);
    }
    if (message.event !== 0) {
      writer.uint32(16).int32(message.event);
    }
    if (message.newTournamentState !== 0) {
      writer.uint32(24).int32(message.newTournamentState);
    }
    for (const v of message.gameChanges) {
      CMsgDOTATournamentStateChange_GameChange.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.teamChanges) {
      CMsgDOTATournamentStateChange_TeamChange.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(50).fork();
    for (const v of message.mergedTournamentIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.stateSeqNum !== 0) {
      writer.uint32(56).uint32(message.stateSeqNum);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATournamentStateChange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATournamentStateChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.newTournamentId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.event = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.newTournamentState = reader.int32() as any;
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.gameChanges.push(CMsgDOTATournamentStateChange_GameChange.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.teamChanges.push(CMsgDOTATournamentStateChange_TeamChange.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag == 48) {
            message.mergedTournamentIds.push(reader.uint32());
            continue;
          }

          if (tag == 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.mergedTournamentIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 7:
          if (tag != 56) {
            break;
          }

          message.stateSeqNum = reader.uint32();
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

function createBaseCMsgDOTATournamentStateChange_GameChange(): CMsgDOTATournamentStateChange_GameChange {
  return { matchId: "0", newState: 0 };
}

export const CMsgDOTATournamentStateChange_GameChange = {
  encode(message: CMsgDOTATournamentStateChange_GameChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.newState !== 0) {
      writer.uint32(16).int32(message.newState);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATournamentStateChange_GameChange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATournamentStateChange_GameChange();
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

          message.newState = reader.int32() as any;
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

function createBaseCMsgDOTATournamentStateChange_TeamChange(): CMsgDOTATournamentStateChange_TeamChange {
  return { teamGid: "0", newNodeOrState: 0, oldNodeOrState: 0 };
}

export const CMsgDOTATournamentStateChange_TeamChange = {
  encode(message: CMsgDOTATournamentStateChange_TeamChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamGid !== "0") {
      writer.uint32(8).uint64(message.teamGid);
    }
    if (message.newNodeOrState !== 0) {
      writer.uint32(16).uint32(message.newNodeOrState);
    }
    if (message.oldNodeOrState !== 0) {
      writer.uint32(24).uint32(message.oldNodeOrState);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATournamentStateChange_TeamChange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATournamentStateChange_TeamChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.teamGid = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.newNodeOrState = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.oldNodeOrState = reader.uint32();
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

function createBaseCMsgDOTAWeekendTourneyPlayerSkillLevelStats(): CMsgDOTAWeekendTourneyPlayerSkillLevelStats {
  return {
    skillLevel: 0,
    timesWon0: 0,
    timesWon1: 0,
    timesWon2: 0,
    timesWon3: 0,
    timesByeAndLost: 0,
    timesByeAndWon: 0,
    timesUnusualChamp: 0,
    totalGamesWon: 0,
    score: 0,
  };
}

export const CMsgDOTAWeekendTourneyPlayerSkillLevelStats = {
  encode(message: CMsgDOTAWeekendTourneyPlayerSkillLevelStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.skillLevel !== 0) {
      writer.uint32(8).uint32(message.skillLevel);
    }
    if (message.timesWon0 !== 0) {
      writer.uint32(16).uint32(message.timesWon0);
    }
    if (message.timesWon1 !== 0) {
      writer.uint32(24).uint32(message.timesWon1);
    }
    if (message.timesWon2 !== 0) {
      writer.uint32(32).uint32(message.timesWon2);
    }
    if (message.timesWon3 !== 0) {
      writer.uint32(40).uint32(message.timesWon3);
    }
    if (message.timesByeAndLost !== 0) {
      writer.uint32(48).uint32(message.timesByeAndLost);
    }
    if (message.timesByeAndWon !== 0) {
      writer.uint32(56).uint32(message.timesByeAndWon);
    }
    if (message.timesUnusualChamp !== 0) {
      writer.uint32(80).uint32(message.timesUnusualChamp);
    }
    if (message.totalGamesWon !== 0) {
      writer.uint32(64).uint32(message.totalGamesWon);
    }
    if (message.score !== 0) {
      writer.uint32(72).uint32(message.score);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAWeekendTourneyPlayerSkillLevelStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAWeekendTourneyPlayerSkillLevelStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.skillLevel = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.timesWon0 = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.timesWon1 = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.timesWon2 = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.timesWon3 = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.timesByeAndLost = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.timesByeAndWon = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.timesUnusualChamp = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.totalGamesWon = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.score = reader.uint32();
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

function createBaseCMsgDOTAWeekendTourneyPlayerStats(): CMsgDOTAWeekendTourneyPlayerStats {
  return { accountId: 0, seasonTrophyId: 0, skillLevels: [], currentTier: 0 };
}

export const CMsgDOTAWeekendTourneyPlayerStats = {
  encode(message: CMsgDOTAWeekendTourneyPlayerStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.seasonTrophyId !== 0) {
      writer.uint32(16).uint32(message.seasonTrophyId);
    }
    for (const v of message.skillLevels) {
      CMsgDOTAWeekendTourneyPlayerSkillLevelStats.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.currentTier !== 0) {
      writer.uint32(32).uint32(message.currentTier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAWeekendTourneyPlayerStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAWeekendTourneyPlayerStats();
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

          message.seasonTrophyId = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.skillLevels.push(CMsgDOTAWeekendTourneyPlayerSkillLevelStats.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.currentTier = reader.uint32();
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

function createBaseCMsgDOTAWeekendTourneyPlayerStatsRequest(): CMsgDOTAWeekendTourneyPlayerStatsRequest {
  return { accountId: 0, seasonTrophyId: 0 };
}

export const CMsgDOTAWeekendTourneyPlayerStatsRequest = {
  encode(message: CMsgDOTAWeekendTourneyPlayerStatsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.seasonTrophyId !== 0) {
      writer.uint32(16).uint32(message.seasonTrophyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAWeekendTourneyPlayerStatsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAWeekendTourneyPlayerStatsRequest();
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

          message.seasonTrophyId = reader.uint32();
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

function createBaseCMsgDOTAWeekendTourneyPlayerHistory(): CMsgDOTAWeekendTourneyPlayerHistory {
  return { accountId: 0, tournaments: [] };
}

export const CMsgDOTAWeekendTourneyPlayerHistory = {
  encode(message: CMsgDOTAWeekendTourneyPlayerHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    for (const v of message.tournaments) {
      CMsgDOTAWeekendTourneyPlayerHistory_Tournament.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAWeekendTourneyPlayerHistory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAWeekendTourneyPlayerHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.tournaments.push(CMsgDOTAWeekendTourneyPlayerHistory_Tournament.decode(reader, reader.uint32()));
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

function createBaseCMsgDOTAWeekendTourneyPlayerHistory_Tournament(): CMsgDOTAWeekendTourneyPlayerHistory_Tournament {
  return {
    tournamentId: 0,
    startTime: 0,
    tournamentTier: 0,
    teamId: 0,
    teamDate: 0,
    teamResult: 0,
    accountId: [],
    teamName: "",
    seasonTrophyId: 0,
  };
}

export const CMsgDOTAWeekendTourneyPlayerHistory_Tournament = {
  encode(
    message: CMsgDOTAWeekendTourneyPlayerHistory_Tournament,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tournamentId !== 0) {
      writer.uint32(8).uint32(message.tournamentId);
    }
    if (message.startTime !== 0) {
      writer.uint32(16).uint32(message.startTime);
    }
    if (message.tournamentTier !== 0) {
      writer.uint32(24).uint32(message.tournamentTier);
    }
    if (message.teamId !== 0) {
      writer.uint32(32).uint32(message.teamId);
    }
    if (message.teamDate !== 0) {
      writer.uint32(40).uint32(message.teamDate);
    }
    if (message.teamResult !== 0) {
      writer.uint32(48).uint32(message.teamResult);
    }
    writer.uint32(58).fork();
    for (const v of message.accountId) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.teamName !== "") {
      writer.uint32(66).string(message.teamName);
    }
    if (message.seasonTrophyId !== 0) {
      writer.uint32(72).uint32(message.seasonTrophyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAWeekendTourneyPlayerHistory_Tournament {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAWeekendTourneyPlayerHistory_Tournament();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.tournamentId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.startTime = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.tournamentTier = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.teamDate = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.teamResult = reader.uint32();
          continue;
        case 7:
          if (tag == 56) {
            message.accountId.push(reader.uint32());
            continue;
          }

          if (tag == 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountId.push(reader.uint32());
            }

            continue;
          }

          break;
        case 8:
          if (tag != 66) {
            break;
          }

          message.teamName = reader.string();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.seasonTrophyId = reader.uint32();
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

function createBaseCMsgDOTAWeekendTourneyParticipationDetails(): CMsgDOTAWeekendTourneyParticipationDetails {
  return { divisions: [] };
}

export const CMsgDOTAWeekendTourneyParticipationDetails = {
  encode(message: CMsgDOTAWeekendTourneyParticipationDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.divisions) {
      CMsgDOTAWeekendTourneyParticipationDetails_Division.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAWeekendTourneyParticipationDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAWeekendTourneyParticipationDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.divisions.push(CMsgDOTAWeekendTourneyParticipationDetails_Division.decode(reader, reader.uint32()));
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

function createBaseCMsgDOTAWeekendTourneyParticipationDetails_Tier(): CMsgDOTAWeekendTourneyParticipationDetails_Tier {
  return {
    tier: 0,
    players: 0,
    teams: 0,
    winningTeams: 0,
    playersStreak2: 0,
    playersStreak3: 0,
    playersStreak4: 0,
    playersStreak5: 0,
  };
}

export const CMsgDOTAWeekendTourneyParticipationDetails_Tier = {
  encode(
    message: CMsgDOTAWeekendTourneyParticipationDetails_Tier,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tier !== 0) {
      writer.uint32(8).uint32(message.tier);
    }
    if (message.players !== 0) {
      writer.uint32(16).uint32(message.players);
    }
    if (message.teams !== 0) {
      writer.uint32(24).uint32(message.teams);
    }
    if (message.winningTeams !== 0) {
      writer.uint32(32).uint32(message.winningTeams);
    }
    if (message.playersStreak2 !== 0) {
      writer.uint32(40).uint32(message.playersStreak2);
    }
    if (message.playersStreak3 !== 0) {
      writer.uint32(48).uint32(message.playersStreak3);
    }
    if (message.playersStreak4 !== 0) {
      writer.uint32(56).uint32(message.playersStreak4);
    }
    if (message.playersStreak5 !== 0) {
      writer.uint32(64).uint32(message.playersStreak5);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAWeekendTourneyParticipationDetails_Tier {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAWeekendTourneyParticipationDetails_Tier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.tier = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.players = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.teams = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.winningTeams = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.playersStreak2 = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.playersStreak3 = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.playersStreak4 = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.playersStreak5 = reader.uint32();
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

function createBaseCMsgDOTAWeekendTourneyParticipationDetails_Division(): CMsgDOTAWeekendTourneyParticipationDetails_Division {
  return { divisionId: 0, scheduleTime: 0, tiers: [] };
}

export const CMsgDOTAWeekendTourneyParticipationDetails_Division = {
  encode(
    message: CMsgDOTAWeekendTourneyParticipationDetails_Division,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.divisionId !== 0) {
      writer.uint32(8).uint32(message.divisionId);
    }
    if (message.scheduleTime !== 0) {
      writer.uint32(16).uint32(message.scheduleTime);
    }
    for (const v of message.tiers) {
      CMsgDOTAWeekendTourneyParticipationDetails_Tier.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAWeekendTourneyParticipationDetails_Division {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAWeekendTourneyParticipationDetails_Division();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.divisionId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.scheduleTime = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.tiers.push(CMsgDOTAWeekendTourneyParticipationDetails_Tier.decode(reader, reader.uint32()));
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
