/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  ETournamentGameState,
  eTournamentGameStateFromJSON,
  eTournamentGameStateToJSON,
  ETournamentNodeState,
  eTournamentNodeStateFromJSON,
  eTournamentNodeStateToJSON,
  ETournamentState,
  eTournamentStateFromJSON,
  eTournamentStateToJSON,
  ETournamentTemplate,
  eTournamentTemplateFromJSON,
  eTournamentTemplateToJSON,
} from "./dota_client_enums";

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

export function eTournamentEventFromJSON(object: any): ETournamentEvent {
  switch (object) {
    case 0:
    case "k_ETournamentEvent_None":
      return ETournamentEvent.k_ETournamentEvent_None;
    case 1:
    case "k_ETournamentEvent_TournamentCreated":
      return ETournamentEvent.k_ETournamentEvent_TournamentCreated;
    case 2:
    case "k_ETournamentEvent_TournamentsMerged":
      return ETournamentEvent.k_ETournamentEvent_TournamentsMerged;
    case 3:
    case "k_ETournamentEvent_GameOutcome":
      return ETournamentEvent.k_ETournamentEvent_GameOutcome;
    case 4:
    case "k_ETournamentEvent_TeamGivenBye":
      return ETournamentEvent.k_ETournamentEvent_TeamGivenBye;
    case 5:
    case "k_ETournamentEvent_TournamentCanceledByAdmin":
      return ETournamentEvent.k_ETournamentEvent_TournamentCanceledByAdmin;
    case 6:
    case "k_ETournamentEvent_TeamAbandoned":
      return ETournamentEvent.k_ETournamentEvent_TeamAbandoned;
    case 7:
    case "k_ETournamentEvent_ScheduledGameStarted":
      return ETournamentEvent.k_ETournamentEvent_ScheduledGameStarted;
    case 8:
    case "k_ETournamentEvent_Canceled":
      return ETournamentEvent.k_ETournamentEvent_Canceled;
    case 9:
    case "k_ETournamentEvent_TeamParticipationTimedOut_EntryFeeRefund":
      return ETournamentEvent.k_ETournamentEvent_TeamParticipationTimedOut_EntryFeeRefund;
    case 10:
    case "k_ETournamentEvent_TeamParticipationTimedOut_EntryFeeForfeit":
      return ETournamentEvent.k_ETournamentEvent_TeamParticipationTimedOut_EntryFeeForfeit;
    case 11:
    case "k_ETournamentEvent_TeamParticipationTimedOut_GrantedVictory":
      return ETournamentEvent.k_ETournamentEvent_TeamParticipationTimedOut_GrantedVictory;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETournamentEvent");
  }
}

export function eTournamentEventToJSON(object: ETournamentEvent): string {
  switch (object) {
    case ETournamentEvent.k_ETournamentEvent_None:
      return "k_ETournamentEvent_None";
    case ETournamentEvent.k_ETournamentEvent_TournamentCreated:
      return "k_ETournamentEvent_TournamentCreated";
    case ETournamentEvent.k_ETournamentEvent_TournamentsMerged:
      return "k_ETournamentEvent_TournamentsMerged";
    case ETournamentEvent.k_ETournamentEvent_GameOutcome:
      return "k_ETournamentEvent_GameOutcome";
    case ETournamentEvent.k_ETournamentEvent_TeamGivenBye:
      return "k_ETournamentEvent_TeamGivenBye";
    case ETournamentEvent.k_ETournamentEvent_TournamentCanceledByAdmin:
      return "k_ETournamentEvent_TournamentCanceledByAdmin";
    case ETournamentEvent.k_ETournamentEvent_TeamAbandoned:
      return "k_ETournamentEvent_TeamAbandoned";
    case ETournamentEvent.k_ETournamentEvent_ScheduledGameStarted:
      return "k_ETournamentEvent_ScheduledGameStarted";
    case ETournamentEvent.k_ETournamentEvent_Canceled:
      return "k_ETournamentEvent_Canceled";
    case ETournamentEvent.k_ETournamentEvent_TeamParticipationTimedOut_EntryFeeRefund:
      return "k_ETournamentEvent_TeamParticipationTimedOut_EntryFeeRefund";
    case ETournamentEvent.k_ETournamentEvent_TeamParticipationTimedOut_EntryFeeForfeit:
      return "k_ETournamentEvent_TeamParticipationTimedOut_EntryFeeForfeit";
    case ETournamentEvent.k_ETournamentEvent_TeamParticipationTimedOut_GrantedVictory:
      return "k_ETournamentEvent_TeamParticipationTimedOut_GrantedVictory";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETournamentEvent");
  }
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

  fromJSON(_: any): CMsgRequestWeekendTourneySchedule {
    return {};
  },

  toJSON(_: CMsgRequestWeekendTourneySchedule): unknown {
    const obj: any = {};
    return obj;
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

  fromJSON(object: any): CMsgWeekendTourneySchedule {
    return {
      divisions: Array.isArray(object?.divisions)
        ? object.divisions.map((e: any) => CMsgWeekendTourneySchedule_Division.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgWeekendTourneySchedule): unknown {
    const obj: any = {};
    if (message.divisions) {
      obj.divisions = message.divisions.map((e) => e ? CMsgWeekendTourneySchedule_Division.toJSON(e) : undefined);
    } else {
      obj.divisions = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgWeekendTourneySchedule_Division {
    return {
      divisionCode: isSet(object.divisionCode) ? Number(object.divisionCode) : 0,
      timeWindowOpen: isSet(object.timeWindowOpen) ? Number(object.timeWindowOpen) : 0,
      timeWindowClose: isSet(object.timeWindowClose) ? Number(object.timeWindowClose) : 0,
      timeWindowOpenNext: isSet(object.timeWindowOpenNext) ? Number(object.timeWindowOpenNext) : 0,
      trophyId: isSet(object.trophyId) ? Number(object.trophyId) : 0,
      freeWeekend: isSet(object.freeWeekend) ? Boolean(object.freeWeekend) : false,
    };
  },

  toJSON(message: CMsgWeekendTourneySchedule_Division): unknown {
    const obj: any = {};
    message.divisionCode !== undefined && (obj.divisionCode = Math.round(message.divisionCode));
    message.timeWindowOpen !== undefined && (obj.timeWindowOpen = Math.round(message.timeWindowOpen));
    message.timeWindowClose !== undefined && (obj.timeWindowClose = Math.round(message.timeWindowClose));
    message.timeWindowOpenNext !== undefined && (obj.timeWindowOpenNext = Math.round(message.timeWindowOpenNext));
    message.trophyId !== undefined && (obj.trophyId = Math.round(message.trophyId));
    message.freeWeekend !== undefined && (obj.freeWeekend = message.freeWeekend);
    return obj;
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

  fromJSON(object: any): CMsgWeekendTourneyOpts {
    return {
      participating: isSet(object.participating) ? Boolean(object.participating) : false,
      divisionId: isSet(object.divisionId) ? Number(object.divisionId) : 0,
      buyin: isSet(object.buyin) ? Number(object.buyin) : 0,
      skillLevel: isSet(object.skillLevel) ? Number(object.skillLevel) : 0,
      matchGroups: isSet(object.matchGroups) ? Number(object.matchGroups) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      pickupTeamName: isSet(object.pickupTeamName) ? String(object.pickupTeamName) : "",
      pickupTeamLogo: isSet(object.pickupTeamLogo) ? String(object.pickupTeamLogo) : "0",
    };
  },

  toJSON(message: CMsgWeekendTourneyOpts): unknown {
    const obj: any = {};
    message.participating !== undefined && (obj.participating = message.participating);
    message.divisionId !== undefined && (obj.divisionId = Math.round(message.divisionId));
    message.buyin !== undefined && (obj.buyin = Math.round(message.buyin));
    message.skillLevel !== undefined && (obj.skillLevel = Math.round(message.skillLevel));
    message.matchGroups !== undefined && (obj.matchGroups = Math.round(message.matchGroups));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.pickupTeamName !== undefined && (obj.pickupTeamName = message.pickupTeamName);
    message.pickupTeamLogo !== undefined && (obj.pickupTeamLogo = message.pickupTeamLogo);
    return obj;
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

  fromJSON(_: any): CMsgWeekendTourneyLeave {
    return {};
  },

  toJSON(_: CMsgWeekendTourneyLeave): unknown {
    const obj: any = {};
    return obj;
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

  fromJSON(object: any): CMsgDOTATournament {
    return {
      tournamentId: isSet(object.tournamentId) ? Number(object.tournamentId) : 0,
      divisionId: isSet(object.divisionId) ? Number(object.divisionId) : 0,
      scheduleTime: isSet(object.scheduleTime) ? Number(object.scheduleTime) : 0,
      skillLevel: isSet(object.skillLevel) ? Number(object.skillLevel) : 0,
      tournamentTemplate: isSet(object.tournamentTemplate) ? eTournamentTemplateFromJSON(object.tournamentTemplate) : 0,
      state: isSet(object.state) ? eTournamentStateFromJSON(object.state) : 0,
      stateSeqNum: isSet(object.stateSeqNum) ? Number(object.stateSeqNum) : 0,
      seasonTrophyId: isSet(object.seasonTrophyId) ? Number(object.seasonTrophyId) : 0,
      teams: Array.isArray(object?.teams) ? object.teams.map((e: any) => CMsgDOTATournament_Team.fromJSON(e)) : [],
      games: Array.isArray(object?.games) ? object.games.map((e: any) => CMsgDOTATournament_Game.fromJSON(e)) : [],
      nodes: Array.isArray(object?.nodes) ? object.nodes.map((e: any) => CMsgDOTATournament_Node.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgDOTATournament): unknown {
    const obj: any = {};
    message.tournamentId !== undefined && (obj.tournamentId = Math.round(message.tournamentId));
    message.divisionId !== undefined && (obj.divisionId = Math.round(message.divisionId));
    message.scheduleTime !== undefined && (obj.scheduleTime = Math.round(message.scheduleTime));
    message.skillLevel !== undefined && (obj.skillLevel = Math.round(message.skillLevel));
    message.tournamentTemplate !== undefined &&
      (obj.tournamentTemplate = eTournamentTemplateToJSON(message.tournamentTemplate));
    message.state !== undefined && (obj.state = eTournamentStateToJSON(message.state));
    message.stateSeqNum !== undefined && (obj.stateSeqNum = Math.round(message.stateSeqNum));
    message.seasonTrophyId !== undefined && (obj.seasonTrophyId = Math.round(message.seasonTrophyId));
    if (message.teams) {
      obj.teams = message.teams.map((e) => e ? CMsgDOTATournament_Team.toJSON(e) : undefined);
    } else {
      obj.teams = [];
    }
    if (message.games) {
      obj.games = message.games.map((e) => e ? CMsgDOTATournament_Game.toJSON(e) : undefined);
    } else {
      obj.games = [];
    }
    if (message.nodes) {
      obj.nodes = message.nodes.map((e) => e ? CMsgDOTATournament_Node.toJSON(e) : undefined);
    } else {
      obj.nodes = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgDOTATournament_Team {
    return {
      teamGid: isSet(object.teamGid) ? String(object.teamGid) : "0",
      nodeOrState: isSet(object.nodeOrState) ? Number(object.nodeOrState) : 0,
      players: Array.isArray(object?.players) ? object.players.map((e: any) => Number(e)) : [],
      playerBuyin: Array.isArray(object?.playerBuyin) ? object.playerBuyin.map((e: any) => Number(e)) : [],
      playerSkillLevel: Array.isArray(object?.playerSkillLevel)
        ? object.playerSkillLevel.map((e: any) => Number(e))
        : [],
      matchGroupMask: isSet(object.matchGroupMask) ? Number(object.matchGroupMask) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      teamName: isSet(object.teamName) ? String(object.teamName) : "",
      teamBaseLogo: isSet(object.teamBaseLogo) ? String(object.teamBaseLogo) : "0",
      teamUiLogo: isSet(object.teamUiLogo) ? String(object.teamUiLogo) : "0",
    };
  },

  toJSON(message: CMsgDOTATournament_Team): unknown {
    const obj: any = {};
    message.teamGid !== undefined && (obj.teamGid = message.teamGid);
    message.nodeOrState !== undefined && (obj.nodeOrState = Math.round(message.nodeOrState));
    if (message.players) {
      obj.players = message.players.map((e) => Math.round(e));
    } else {
      obj.players = [];
    }
    if (message.playerBuyin) {
      obj.playerBuyin = message.playerBuyin.map((e) => Math.round(e));
    } else {
      obj.playerBuyin = [];
    }
    if (message.playerSkillLevel) {
      obj.playerSkillLevel = message.playerSkillLevel.map((e) => Math.round(e));
    } else {
      obj.playerSkillLevel = [];
    }
    message.matchGroupMask !== undefined && (obj.matchGroupMask = Math.round(message.matchGroupMask));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.teamName !== undefined && (obj.teamName = message.teamName);
    message.teamBaseLogo !== undefined && (obj.teamBaseLogo = message.teamBaseLogo);
    message.teamUiLogo !== undefined && (obj.teamUiLogo = message.teamUiLogo);
    return obj;
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

  fromJSON(object: any): CMsgDOTATournament_Game {
    return {
      nodeIdx: isSet(object.nodeIdx) ? Number(object.nodeIdx) : 0,
      lobbyId: isSet(object.lobbyId) ? String(object.lobbyId) : "0",
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      teamAGood: isSet(object.teamAGood) ? Boolean(object.teamAGood) : false,
      state: isSet(object.state) ? eTournamentGameStateFromJSON(object.state) : 0,
      startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
    };
  },

  toJSON(message: CMsgDOTATournament_Game): unknown {
    const obj: any = {};
    message.nodeIdx !== undefined && (obj.nodeIdx = Math.round(message.nodeIdx));
    message.lobbyId !== undefined && (obj.lobbyId = message.lobbyId);
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.teamAGood !== undefined && (obj.teamAGood = message.teamAGood);
    message.state !== undefined && (obj.state = eTournamentGameStateToJSON(message.state));
    message.startTime !== undefined && (obj.startTime = Math.round(message.startTime));
    return obj;
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

  fromJSON(object: any): CMsgDOTATournament_Node {
    return {
      nodeId: isSet(object.nodeId) ? Number(object.nodeId) : 0,
      teamIdxA: isSet(object.teamIdxA) ? Number(object.teamIdxA) : 0,
      teamIdxB: isSet(object.teamIdxB) ? Number(object.teamIdxB) : 0,
      nodeState: isSet(object.nodeState) ? eTournamentNodeStateFromJSON(object.nodeState) : 0,
    };
  },

  toJSON(message: CMsgDOTATournament_Node): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = Math.round(message.nodeId));
    message.teamIdxA !== undefined && (obj.teamIdxA = Math.round(message.teamIdxA));
    message.teamIdxB !== undefined && (obj.teamIdxB = Math.round(message.teamIdxB));
    message.nodeState !== undefined && (obj.nodeState = eTournamentNodeStateToJSON(message.nodeState));
    return obj;
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

  fromJSON(object: any): CMsgDOTATournamentStateChange {
    return {
      newTournamentId: isSet(object.newTournamentId) ? Number(object.newTournamentId) : 0,
      event: isSet(object.event) ? eTournamentEventFromJSON(object.event) : 0,
      newTournamentState: isSet(object.newTournamentState) ? eTournamentStateFromJSON(object.newTournamentState) : 0,
      gameChanges: Array.isArray(object?.gameChanges)
        ? object.gameChanges.map((e: any) => CMsgDOTATournamentStateChange_GameChange.fromJSON(e))
        : [],
      teamChanges: Array.isArray(object?.teamChanges)
        ? object.teamChanges.map((e: any) => CMsgDOTATournamentStateChange_TeamChange.fromJSON(e))
        : [],
      mergedTournamentIds: Array.isArray(object?.mergedTournamentIds)
        ? object.mergedTournamentIds.map((e: any) => Number(e))
        : [],
      stateSeqNum: isSet(object.stateSeqNum) ? Number(object.stateSeqNum) : 0,
    };
  },

  toJSON(message: CMsgDOTATournamentStateChange): unknown {
    const obj: any = {};
    message.newTournamentId !== undefined && (obj.newTournamentId = Math.round(message.newTournamentId));
    message.event !== undefined && (obj.event = eTournamentEventToJSON(message.event));
    message.newTournamentState !== undefined &&
      (obj.newTournamentState = eTournamentStateToJSON(message.newTournamentState));
    if (message.gameChanges) {
      obj.gameChanges = message.gameChanges.map((e) =>
        e ? CMsgDOTATournamentStateChange_GameChange.toJSON(e) : undefined
      );
    } else {
      obj.gameChanges = [];
    }
    if (message.teamChanges) {
      obj.teamChanges = message.teamChanges.map((e) =>
        e ? CMsgDOTATournamentStateChange_TeamChange.toJSON(e) : undefined
      );
    } else {
      obj.teamChanges = [];
    }
    if (message.mergedTournamentIds) {
      obj.mergedTournamentIds = message.mergedTournamentIds.map((e) => Math.round(e));
    } else {
      obj.mergedTournamentIds = [];
    }
    message.stateSeqNum !== undefined && (obj.stateSeqNum = Math.round(message.stateSeqNum));
    return obj;
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

  fromJSON(object: any): CMsgDOTATournamentStateChange_GameChange {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      newState: isSet(object.newState) ? eTournamentGameStateFromJSON(object.newState) : 0,
    };
  },

  toJSON(message: CMsgDOTATournamentStateChange_GameChange): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.newState !== undefined && (obj.newState = eTournamentGameStateToJSON(message.newState));
    return obj;
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

  fromJSON(object: any): CMsgDOTATournamentStateChange_TeamChange {
    return {
      teamGid: isSet(object.teamGid) ? String(object.teamGid) : "0",
      newNodeOrState: isSet(object.newNodeOrState) ? Number(object.newNodeOrState) : 0,
      oldNodeOrState: isSet(object.oldNodeOrState) ? Number(object.oldNodeOrState) : 0,
    };
  },

  toJSON(message: CMsgDOTATournamentStateChange_TeamChange): unknown {
    const obj: any = {};
    message.teamGid !== undefined && (obj.teamGid = message.teamGid);
    message.newNodeOrState !== undefined && (obj.newNodeOrState = Math.round(message.newNodeOrState));
    message.oldNodeOrState !== undefined && (obj.oldNodeOrState = Math.round(message.oldNodeOrState));
    return obj;
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

  fromJSON(object: any): CMsgDOTAWeekendTourneyPlayerSkillLevelStats {
    return {
      skillLevel: isSet(object.skillLevel) ? Number(object.skillLevel) : 0,
      timesWon0: isSet(object.timesWon0) ? Number(object.timesWon0) : 0,
      timesWon1: isSet(object.timesWon1) ? Number(object.timesWon1) : 0,
      timesWon2: isSet(object.timesWon2) ? Number(object.timesWon2) : 0,
      timesWon3: isSet(object.timesWon3) ? Number(object.timesWon3) : 0,
      timesByeAndLost: isSet(object.timesByeAndLost) ? Number(object.timesByeAndLost) : 0,
      timesByeAndWon: isSet(object.timesByeAndWon) ? Number(object.timesByeAndWon) : 0,
      timesUnusualChamp: isSet(object.timesUnusualChamp) ? Number(object.timesUnusualChamp) : 0,
      totalGamesWon: isSet(object.totalGamesWon) ? Number(object.totalGamesWon) : 0,
      score: isSet(object.score) ? Number(object.score) : 0,
    };
  },

  toJSON(message: CMsgDOTAWeekendTourneyPlayerSkillLevelStats): unknown {
    const obj: any = {};
    message.skillLevel !== undefined && (obj.skillLevel = Math.round(message.skillLevel));
    message.timesWon0 !== undefined && (obj.timesWon0 = Math.round(message.timesWon0));
    message.timesWon1 !== undefined && (obj.timesWon1 = Math.round(message.timesWon1));
    message.timesWon2 !== undefined && (obj.timesWon2 = Math.round(message.timesWon2));
    message.timesWon3 !== undefined && (obj.timesWon3 = Math.round(message.timesWon3));
    message.timesByeAndLost !== undefined && (obj.timesByeAndLost = Math.round(message.timesByeAndLost));
    message.timesByeAndWon !== undefined && (obj.timesByeAndWon = Math.round(message.timesByeAndWon));
    message.timesUnusualChamp !== undefined && (obj.timesUnusualChamp = Math.round(message.timesUnusualChamp));
    message.totalGamesWon !== undefined && (obj.totalGamesWon = Math.round(message.totalGamesWon));
    message.score !== undefined && (obj.score = Math.round(message.score));
    return obj;
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

  fromJSON(object: any): CMsgDOTAWeekendTourneyPlayerStats {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      seasonTrophyId: isSet(object.seasonTrophyId) ? Number(object.seasonTrophyId) : 0,
      skillLevels: Array.isArray(object?.skillLevels)
        ? object.skillLevels.map((e: any) => CMsgDOTAWeekendTourneyPlayerSkillLevelStats.fromJSON(e))
        : [],
      currentTier: isSet(object.currentTier) ? Number(object.currentTier) : 0,
    };
  },

  toJSON(message: CMsgDOTAWeekendTourneyPlayerStats): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.seasonTrophyId !== undefined && (obj.seasonTrophyId = Math.round(message.seasonTrophyId));
    if (message.skillLevels) {
      obj.skillLevels = message.skillLevels.map((e) =>
        e ? CMsgDOTAWeekendTourneyPlayerSkillLevelStats.toJSON(e) : undefined
      );
    } else {
      obj.skillLevels = [];
    }
    message.currentTier !== undefined && (obj.currentTier = Math.round(message.currentTier));
    return obj;
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

  fromJSON(object: any): CMsgDOTAWeekendTourneyPlayerStatsRequest {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      seasonTrophyId: isSet(object.seasonTrophyId) ? Number(object.seasonTrophyId) : 0,
    };
  },

  toJSON(message: CMsgDOTAWeekendTourneyPlayerStatsRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.seasonTrophyId !== undefined && (obj.seasonTrophyId = Math.round(message.seasonTrophyId));
    return obj;
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

  fromJSON(object: any): CMsgDOTAWeekendTourneyPlayerHistory {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      tournaments: Array.isArray(object?.tournaments)
        ? object.tournaments.map((e: any) => CMsgDOTAWeekendTourneyPlayerHistory_Tournament.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTAWeekendTourneyPlayerHistory): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    if (message.tournaments) {
      obj.tournaments = message.tournaments.map((e) =>
        e ? CMsgDOTAWeekendTourneyPlayerHistory_Tournament.toJSON(e) : undefined
      );
    } else {
      obj.tournaments = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgDOTAWeekendTourneyPlayerHistory_Tournament {
    return {
      tournamentId: isSet(object.tournamentId) ? Number(object.tournamentId) : 0,
      startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
      tournamentTier: isSet(object.tournamentTier) ? Number(object.tournamentTier) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      teamDate: isSet(object.teamDate) ? Number(object.teamDate) : 0,
      teamResult: isSet(object.teamResult) ? Number(object.teamResult) : 0,
      accountId: Array.isArray(object?.accountId) ? object.accountId.map((e: any) => Number(e)) : [],
      teamName: isSet(object.teamName) ? String(object.teamName) : "",
      seasonTrophyId: isSet(object.seasonTrophyId) ? Number(object.seasonTrophyId) : 0,
    };
  },

  toJSON(message: CMsgDOTAWeekendTourneyPlayerHistory_Tournament): unknown {
    const obj: any = {};
    message.tournamentId !== undefined && (obj.tournamentId = Math.round(message.tournamentId));
    message.startTime !== undefined && (obj.startTime = Math.round(message.startTime));
    message.tournamentTier !== undefined && (obj.tournamentTier = Math.round(message.tournamentTier));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.teamDate !== undefined && (obj.teamDate = Math.round(message.teamDate));
    message.teamResult !== undefined && (obj.teamResult = Math.round(message.teamResult));
    if (message.accountId) {
      obj.accountId = message.accountId.map((e) => Math.round(e));
    } else {
      obj.accountId = [];
    }
    message.teamName !== undefined && (obj.teamName = message.teamName);
    message.seasonTrophyId !== undefined && (obj.seasonTrophyId = Math.round(message.seasonTrophyId));
    return obj;
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

  fromJSON(object: any): CMsgDOTAWeekendTourneyParticipationDetails {
    return {
      divisions: Array.isArray(object?.divisions)
        ? object.divisions.map((e: any) => CMsgDOTAWeekendTourneyParticipationDetails_Division.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTAWeekendTourneyParticipationDetails): unknown {
    const obj: any = {};
    if (message.divisions) {
      obj.divisions = message.divisions.map((e) =>
        e ? CMsgDOTAWeekendTourneyParticipationDetails_Division.toJSON(e) : undefined
      );
    } else {
      obj.divisions = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgDOTAWeekendTourneyParticipationDetails_Tier {
    return {
      tier: isSet(object.tier) ? Number(object.tier) : 0,
      players: isSet(object.players) ? Number(object.players) : 0,
      teams: isSet(object.teams) ? Number(object.teams) : 0,
      winningTeams: isSet(object.winningTeams) ? Number(object.winningTeams) : 0,
      playersStreak2: isSet(object.playersStreak2) ? Number(object.playersStreak2) : 0,
      playersStreak3: isSet(object.playersStreak3) ? Number(object.playersStreak3) : 0,
      playersStreak4: isSet(object.playersStreak4) ? Number(object.playersStreak4) : 0,
      playersStreak5: isSet(object.playersStreak5) ? Number(object.playersStreak5) : 0,
    };
  },

  toJSON(message: CMsgDOTAWeekendTourneyParticipationDetails_Tier): unknown {
    const obj: any = {};
    message.tier !== undefined && (obj.tier = Math.round(message.tier));
    message.players !== undefined && (obj.players = Math.round(message.players));
    message.teams !== undefined && (obj.teams = Math.round(message.teams));
    message.winningTeams !== undefined && (obj.winningTeams = Math.round(message.winningTeams));
    message.playersStreak2 !== undefined && (obj.playersStreak2 = Math.round(message.playersStreak2));
    message.playersStreak3 !== undefined && (obj.playersStreak3 = Math.round(message.playersStreak3));
    message.playersStreak4 !== undefined && (obj.playersStreak4 = Math.round(message.playersStreak4));
    message.playersStreak5 !== undefined && (obj.playersStreak5 = Math.round(message.playersStreak5));
    return obj;
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

  fromJSON(object: any): CMsgDOTAWeekendTourneyParticipationDetails_Division {
    return {
      divisionId: isSet(object.divisionId) ? Number(object.divisionId) : 0,
      scheduleTime: isSet(object.scheduleTime) ? Number(object.scheduleTime) : 0,
      tiers: Array.isArray(object?.tiers)
        ? object.tiers.map((e: any) => CMsgDOTAWeekendTourneyParticipationDetails_Tier.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTAWeekendTourneyParticipationDetails_Division): unknown {
    const obj: any = {};
    message.divisionId !== undefined && (obj.divisionId = Math.round(message.divisionId));
    message.scheduleTime !== undefined && (obj.scheduleTime = Math.round(message.scheduleTime));
    if (message.tiers) {
      obj.tiers = message.tiers.map((e) => e ? CMsgDOTAWeekendTourneyParticipationDetails_Tier.toJSON(e) : undefined);
    } else {
      obj.tiers = [];
    }
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
