/* eslint-disable */

export enum ETournamentTemplate {
  k_ETournamentTemplate_None = 0,
  k_ETournamentTemplate_AutomatedWin3 = 1,
}

export function eTournamentTemplateFromJSON(object: any): ETournamentTemplate {
  switch (object) {
    case 0:
    case "k_ETournamentTemplate_None":
      return ETournamentTemplate.k_ETournamentTemplate_None;
    case 1:
    case "k_ETournamentTemplate_AutomatedWin3":
      return ETournamentTemplate.k_ETournamentTemplate_AutomatedWin3;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETournamentTemplate");
  }
}

export function eTournamentTemplateToJSON(object: ETournamentTemplate): string {
  switch (object) {
    case ETournamentTemplate.k_ETournamentTemplate_None:
      return "k_ETournamentTemplate_None";
    case ETournamentTemplate.k_ETournamentTemplate_AutomatedWin3:
      return "k_ETournamentTemplate_AutomatedWin3";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETournamentTemplate");
  }
}

export enum ETournamentGameState {
  k_ETournamentGameState_Unknown = 0,
  k_ETournamentGameState_Canceled = 1,
  k_ETournamentGameState_Scheduled = 2,
  k_ETournamentGameState_Active = 3,
  k_ETournamentGameState_RadVictory = 20,
  k_ETournamentGameState_DireVictory = 21,
  k_ETournamentGameState_RadVictoryByForfeit = 22,
  k_ETournamentGameState_DireVictoryByForfeit = 23,
  k_ETournamentGameState_ServerFailure = 40,
  k_ETournamentGameState_NotNeeded = 41,
}

export function eTournamentGameStateFromJSON(object: any): ETournamentGameState {
  switch (object) {
    case 0:
    case "k_ETournamentGameState_Unknown":
      return ETournamentGameState.k_ETournamentGameState_Unknown;
    case 1:
    case "k_ETournamentGameState_Canceled":
      return ETournamentGameState.k_ETournamentGameState_Canceled;
    case 2:
    case "k_ETournamentGameState_Scheduled":
      return ETournamentGameState.k_ETournamentGameState_Scheduled;
    case 3:
    case "k_ETournamentGameState_Active":
      return ETournamentGameState.k_ETournamentGameState_Active;
    case 20:
    case "k_ETournamentGameState_RadVictory":
      return ETournamentGameState.k_ETournamentGameState_RadVictory;
    case 21:
    case "k_ETournamentGameState_DireVictory":
      return ETournamentGameState.k_ETournamentGameState_DireVictory;
    case 22:
    case "k_ETournamentGameState_RadVictoryByForfeit":
      return ETournamentGameState.k_ETournamentGameState_RadVictoryByForfeit;
    case 23:
    case "k_ETournamentGameState_DireVictoryByForfeit":
      return ETournamentGameState.k_ETournamentGameState_DireVictoryByForfeit;
    case 40:
    case "k_ETournamentGameState_ServerFailure":
      return ETournamentGameState.k_ETournamentGameState_ServerFailure;
    case 41:
    case "k_ETournamentGameState_NotNeeded":
      return ETournamentGameState.k_ETournamentGameState_NotNeeded;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETournamentGameState");
  }
}

export function eTournamentGameStateToJSON(object: ETournamentGameState): string {
  switch (object) {
    case ETournamentGameState.k_ETournamentGameState_Unknown:
      return "k_ETournamentGameState_Unknown";
    case ETournamentGameState.k_ETournamentGameState_Canceled:
      return "k_ETournamentGameState_Canceled";
    case ETournamentGameState.k_ETournamentGameState_Scheduled:
      return "k_ETournamentGameState_Scheduled";
    case ETournamentGameState.k_ETournamentGameState_Active:
      return "k_ETournamentGameState_Active";
    case ETournamentGameState.k_ETournamentGameState_RadVictory:
      return "k_ETournamentGameState_RadVictory";
    case ETournamentGameState.k_ETournamentGameState_DireVictory:
      return "k_ETournamentGameState_DireVictory";
    case ETournamentGameState.k_ETournamentGameState_RadVictoryByForfeit:
      return "k_ETournamentGameState_RadVictoryByForfeit";
    case ETournamentGameState.k_ETournamentGameState_DireVictoryByForfeit:
      return "k_ETournamentGameState_DireVictoryByForfeit";
    case ETournamentGameState.k_ETournamentGameState_ServerFailure:
      return "k_ETournamentGameState_ServerFailure";
    case ETournamentGameState.k_ETournamentGameState_NotNeeded:
      return "k_ETournamentGameState_NotNeeded";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETournamentGameState");
  }
}

export enum ETournamentTeamState {
  k_ETournamentTeamState_Unknown = 0,
  k_ETournamentTeamState_Node1 = 1,
  k_ETournamentTeamState_NodeMax = 1024,
  k_ETournamentTeamState_Eliminated = 14003,
  k_ETournamentTeamState_Forfeited = 14004,
  k_ETournamentTeamState_Finished1st = 15001,
  k_ETournamentTeamState_Finished2nd = 15002,
  k_ETournamentTeamState_Finished3rd = 15003,
  k_ETournamentTeamState_Finished4th = 15004,
  k_ETournamentTeamState_Finished5th = 15005,
  k_ETournamentTeamState_Finished6th = 15006,
  k_ETournamentTeamState_Finished7th = 15007,
  k_ETournamentTeamState_Finished8th = 15008,
  k_ETournamentTeamState_Finished9th = 15009,
  k_ETournamentTeamState_Finished10th = 15010,
  k_ETournamentTeamState_Finished11th = 15011,
  k_ETournamentTeamState_Finished12th = 15012,
  k_ETournamentTeamState_Finished13th = 15013,
  k_ETournamentTeamState_Finished14th = 15014,
  k_ETournamentTeamState_Finished15th = 15015,
  k_ETournamentTeamState_Finished16th = 15016,
}

export function eTournamentTeamStateFromJSON(object: any): ETournamentTeamState {
  switch (object) {
    case 0:
    case "k_ETournamentTeamState_Unknown":
      return ETournamentTeamState.k_ETournamentTeamState_Unknown;
    case 1:
    case "k_ETournamentTeamState_Node1":
      return ETournamentTeamState.k_ETournamentTeamState_Node1;
    case 1024:
    case "k_ETournamentTeamState_NodeMax":
      return ETournamentTeamState.k_ETournamentTeamState_NodeMax;
    case 14003:
    case "k_ETournamentTeamState_Eliminated":
      return ETournamentTeamState.k_ETournamentTeamState_Eliminated;
    case 14004:
    case "k_ETournamentTeamState_Forfeited":
      return ETournamentTeamState.k_ETournamentTeamState_Forfeited;
    case 15001:
    case "k_ETournamentTeamState_Finished1st":
      return ETournamentTeamState.k_ETournamentTeamState_Finished1st;
    case 15002:
    case "k_ETournamentTeamState_Finished2nd":
      return ETournamentTeamState.k_ETournamentTeamState_Finished2nd;
    case 15003:
    case "k_ETournamentTeamState_Finished3rd":
      return ETournamentTeamState.k_ETournamentTeamState_Finished3rd;
    case 15004:
    case "k_ETournamentTeamState_Finished4th":
      return ETournamentTeamState.k_ETournamentTeamState_Finished4th;
    case 15005:
    case "k_ETournamentTeamState_Finished5th":
      return ETournamentTeamState.k_ETournamentTeamState_Finished5th;
    case 15006:
    case "k_ETournamentTeamState_Finished6th":
      return ETournamentTeamState.k_ETournamentTeamState_Finished6th;
    case 15007:
    case "k_ETournamentTeamState_Finished7th":
      return ETournamentTeamState.k_ETournamentTeamState_Finished7th;
    case 15008:
    case "k_ETournamentTeamState_Finished8th":
      return ETournamentTeamState.k_ETournamentTeamState_Finished8th;
    case 15009:
    case "k_ETournamentTeamState_Finished9th":
      return ETournamentTeamState.k_ETournamentTeamState_Finished9th;
    case 15010:
    case "k_ETournamentTeamState_Finished10th":
      return ETournamentTeamState.k_ETournamentTeamState_Finished10th;
    case 15011:
    case "k_ETournamentTeamState_Finished11th":
      return ETournamentTeamState.k_ETournamentTeamState_Finished11th;
    case 15012:
    case "k_ETournamentTeamState_Finished12th":
      return ETournamentTeamState.k_ETournamentTeamState_Finished12th;
    case 15013:
    case "k_ETournamentTeamState_Finished13th":
      return ETournamentTeamState.k_ETournamentTeamState_Finished13th;
    case 15014:
    case "k_ETournamentTeamState_Finished14th":
      return ETournamentTeamState.k_ETournamentTeamState_Finished14th;
    case 15015:
    case "k_ETournamentTeamState_Finished15th":
      return ETournamentTeamState.k_ETournamentTeamState_Finished15th;
    case 15016:
    case "k_ETournamentTeamState_Finished16th":
      return ETournamentTeamState.k_ETournamentTeamState_Finished16th;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETournamentTeamState");
  }
}

export function eTournamentTeamStateToJSON(object: ETournamentTeamState): string {
  switch (object) {
    case ETournamentTeamState.k_ETournamentTeamState_Unknown:
      return "k_ETournamentTeamState_Unknown";
    case ETournamentTeamState.k_ETournamentTeamState_Node1:
      return "k_ETournamentTeamState_Node1";
    case ETournamentTeamState.k_ETournamentTeamState_NodeMax:
      return "k_ETournamentTeamState_NodeMax";
    case ETournamentTeamState.k_ETournamentTeamState_Eliminated:
      return "k_ETournamentTeamState_Eliminated";
    case ETournamentTeamState.k_ETournamentTeamState_Forfeited:
      return "k_ETournamentTeamState_Forfeited";
    case ETournamentTeamState.k_ETournamentTeamState_Finished1st:
      return "k_ETournamentTeamState_Finished1st";
    case ETournamentTeamState.k_ETournamentTeamState_Finished2nd:
      return "k_ETournamentTeamState_Finished2nd";
    case ETournamentTeamState.k_ETournamentTeamState_Finished3rd:
      return "k_ETournamentTeamState_Finished3rd";
    case ETournamentTeamState.k_ETournamentTeamState_Finished4th:
      return "k_ETournamentTeamState_Finished4th";
    case ETournamentTeamState.k_ETournamentTeamState_Finished5th:
      return "k_ETournamentTeamState_Finished5th";
    case ETournamentTeamState.k_ETournamentTeamState_Finished6th:
      return "k_ETournamentTeamState_Finished6th";
    case ETournamentTeamState.k_ETournamentTeamState_Finished7th:
      return "k_ETournamentTeamState_Finished7th";
    case ETournamentTeamState.k_ETournamentTeamState_Finished8th:
      return "k_ETournamentTeamState_Finished8th";
    case ETournamentTeamState.k_ETournamentTeamState_Finished9th:
      return "k_ETournamentTeamState_Finished9th";
    case ETournamentTeamState.k_ETournamentTeamState_Finished10th:
      return "k_ETournamentTeamState_Finished10th";
    case ETournamentTeamState.k_ETournamentTeamState_Finished11th:
      return "k_ETournamentTeamState_Finished11th";
    case ETournamentTeamState.k_ETournamentTeamState_Finished12th:
      return "k_ETournamentTeamState_Finished12th";
    case ETournamentTeamState.k_ETournamentTeamState_Finished13th:
      return "k_ETournamentTeamState_Finished13th";
    case ETournamentTeamState.k_ETournamentTeamState_Finished14th:
      return "k_ETournamentTeamState_Finished14th";
    case ETournamentTeamState.k_ETournamentTeamState_Finished15th:
      return "k_ETournamentTeamState_Finished15th";
    case ETournamentTeamState.k_ETournamentTeamState_Finished16th:
      return "k_ETournamentTeamState_Finished16th";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETournamentTeamState");
  }
}

export enum ETournamentState {
  k_ETournamentState_Unknown = 0,
  k_ETournamentState_CanceledByAdmin = 1,
  k_ETournamentState_Completed = 2,
  k_ETournamentState_Merged = 3,
  k_ETournamentState_ServerFailure = 4,
  k_ETournamentState_TeamAbandoned = 5,
  k_ETournamentState_TeamTimeoutForfeit = 6,
  k_ETournamentState_TeamTimeoutRefund = 7,
  k_ETournamentState_ServerFailureGrantedVictory = 8,
  k_ETournamentState_TeamTimeoutGrantedVictory = 9,
  k_ETournamentState_InProgress = 100,
  k_ETournamentState_WaitingToMerge = 101,
}

export function eTournamentStateFromJSON(object: any): ETournamentState {
  switch (object) {
    case 0:
    case "k_ETournamentState_Unknown":
      return ETournamentState.k_ETournamentState_Unknown;
    case 1:
    case "k_ETournamentState_CanceledByAdmin":
      return ETournamentState.k_ETournamentState_CanceledByAdmin;
    case 2:
    case "k_ETournamentState_Completed":
      return ETournamentState.k_ETournamentState_Completed;
    case 3:
    case "k_ETournamentState_Merged":
      return ETournamentState.k_ETournamentState_Merged;
    case 4:
    case "k_ETournamentState_ServerFailure":
      return ETournamentState.k_ETournamentState_ServerFailure;
    case 5:
    case "k_ETournamentState_TeamAbandoned":
      return ETournamentState.k_ETournamentState_TeamAbandoned;
    case 6:
    case "k_ETournamentState_TeamTimeoutForfeit":
      return ETournamentState.k_ETournamentState_TeamTimeoutForfeit;
    case 7:
    case "k_ETournamentState_TeamTimeoutRefund":
      return ETournamentState.k_ETournamentState_TeamTimeoutRefund;
    case 8:
    case "k_ETournamentState_ServerFailureGrantedVictory":
      return ETournamentState.k_ETournamentState_ServerFailureGrantedVictory;
    case 9:
    case "k_ETournamentState_TeamTimeoutGrantedVictory":
      return ETournamentState.k_ETournamentState_TeamTimeoutGrantedVictory;
    case 100:
    case "k_ETournamentState_InProgress":
      return ETournamentState.k_ETournamentState_InProgress;
    case 101:
    case "k_ETournamentState_WaitingToMerge":
      return ETournamentState.k_ETournamentState_WaitingToMerge;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETournamentState");
  }
}

export function eTournamentStateToJSON(object: ETournamentState): string {
  switch (object) {
    case ETournamentState.k_ETournamentState_Unknown:
      return "k_ETournamentState_Unknown";
    case ETournamentState.k_ETournamentState_CanceledByAdmin:
      return "k_ETournamentState_CanceledByAdmin";
    case ETournamentState.k_ETournamentState_Completed:
      return "k_ETournamentState_Completed";
    case ETournamentState.k_ETournamentState_Merged:
      return "k_ETournamentState_Merged";
    case ETournamentState.k_ETournamentState_ServerFailure:
      return "k_ETournamentState_ServerFailure";
    case ETournamentState.k_ETournamentState_TeamAbandoned:
      return "k_ETournamentState_TeamAbandoned";
    case ETournamentState.k_ETournamentState_TeamTimeoutForfeit:
      return "k_ETournamentState_TeamTimeoutForfeit";
    case ETournamentState.k_ETournamentState_TeamTimeoutRefund:
      return "k_ETournamentState_TeamTimeoutRefund";
    case ETournamentState.k_ETournamentState_ServerFailureGrantedVictory:
      return "k_ETournamentState_ServerFailureGrantedVictory";
    case ETournamentState.k_ETournamentState_TeamTimeoutGrantedVictory:
      return "k_ETournamentState_TeamTimeoutGrantedVictory";
    case ETournamentState.k_ETournamentState_InProgress:
      return "k_ETournamentState_InProgress";
    case ETournamentState.k_ETournamentState_WaitingToMerge:
      return "k_ETournamentState_WaitingToMerge";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETournamentState");
  }
}

export enum ETournamentNodeState {
  k_ETournamentNodeState_Unknown = 0,
  k_ETournamentNodeState_Canceled = 1,
  k_ETournamentNodeState_TeamsNotYetAssigned = 2,
  k_ETournamentNodeState_InBetweenGames = 3,
  k_ETournamentNodeState_GameInProgress = 4,
  k_ETournamentNodeState_A_Won = 5,
  k_ETournamentNodeState_B_Won = 6,
  k_ETournamentNodeState_A_WonByForfeit = 7,
  k_ETournamentNodeState_B_WonByForfeit = 8,
  k_ETournamentNodeState_A_Bye = 9,
  k_ETournamentNodeState_A_Abandoned = 10,
  k_ETournamentNodeState_ServerFailure = 11,
  k_ETournamentNodeState_A_TimeoutForfeit = 12,
  k_ETournamentNodeState_A_TimeoutRefund = 13,
}

export function eTournamentNodeStateFromJSON(object: any): ETournamentNodeState {
  switch (object) {
    case 0:
    case "k_ETournamentNodeState_Unknown":
      return ETournamentNodeState.k_ETournamentNodeState_Unknown;
    case 1:
    case "k_ETournamentNodeState_Canceled":
      return ETournamentNodeState.k_ETournamentNodeState_Canceled;
    case 2:
    case "k_ETournamentNodeState_TeamsNotYetAssigned":
      return ETournamentNodeState.k_ETournamentNodeState_TeamsNotYetAssigned;
    case 3:
    case "k_ETournamentNodeState_InBetweenGames":
      return ETournamentNodeState.k_ETournamentNodeState_InBetweenGames;
    case 4:
    case "k_ETournamentNodeState_GameInProgress":
      return ETournamentNodeState.k_ETournamentNodeState_GameInProgress;
    case 5:
    case "k_ETournamentNodeState_A_Won":
      return ETournamentNodeState.k_ETournamentNodeState_A_Won;
    case 6:
    case "k_ETournamentNodeState_B_Won":
      return ETournamentNodeState.k_ETournamentNodeState_B_Won;
    case 7:
    case "k_ETournamentNodeState_A_WonByForfeit":
      return ETournamentNodeState.k_ETournamentNodeState_A_WonByForfeit;
    case 8:
    case "k_ETournamentNodeState_B_WonByForfeit":
      return ETournamentNodeState.k_ETournamentNodeState_B_WonByForfeit;
    case 9:
    case "k_ETournamentNodeState_A_Bye":
      return ETournamentNodeState.k_ETournamentNodeState_A_Bye;
    case 10:
    case "k_ETournamentNodeState_A_Abandoned":
      return ETournamentNodeState.k_ETournamentNodeState_A_Abandoned;
    case 11:
    case "k_ETournamentNodeState_ServerFailure":
      return ETournamentNodeState.k_ETournamentNodeState_ServerFailure;
    case 12:
    case "k_ETournamentNodeState_A_TimeoutForfeit":
      return ETournamentNodeState.k_ETournamentNodeState_A_TimeoutForfeit;
    case 13:
    case "k_ETournamentNodeState_A_TimeoutRefund":
      return ETournamentNodeState.k_ETournamentNodeState_A_TimeoutRefund;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETournamentNodeState");
  }
}

export function eTournamentNodeStateToJSON(object: ETournamentNodeState): string {
  switch (object) {
    case ETournamentNodeState.k_ETournamentNodeState_Unknown:
      return "k_ETournamentNodeState_Unknown";
    case ETournamentNodeState.k_ETournamentNodeState_Canceled:
      return "k_ETournamentNodeState_Canceled";
    case ETournamentNodeState.k_ETournamentNodeState_TeamsNotYetAssigned:
      return "k_ETournamentNodeState_TeamsNotYetAssigned";
    case ETournamentNodeState.k_ETournamentNodeState_InBetweenGames:
      return "k_ETournamentNodeState_InBetweenGames";
    case ETournamentNodeState.k_ETournamentNodeState_GameInProgress:
      return "k_ETournamentNodeState_GameInProgress";
    case ETournamentNodeState.k_ETournamentNodeState_A_Won:
      return "k_ETournamentNodeState_A_Won";
    case ETournamentNodeState.k_ETournamentNodeState_B_Won:
      return "k_ETournamentNodeState_B_Won";
    case ETournamentNodeState.k_ETournamentNodeState_A_WonByForfeit:
      return "k_ETournamentNodeState_A_WonByForfeit";
    case ETournamentNodeState.k_ETournamentNodeState_B_WonByForfeit:
      return "k_ETournamentNodeState_B_WonByForfeit";
    case ETournamentNodeState.k_ETournamentNodeState_A_Bye:
      return "k_ETournamentNodeState_A_Bye";
    case ETournamentNodeState.k_ETournamentNodeState_A_Abandoned:
      return "k_ETournamentNodeState_A_Abandoned";
    case ETournamentNodeState.k_ETournamentNodeState_ServerFailure:
      return "k_ETournamentNodeState_ServerFailure";
    case ETournamentNodeState.k_ETournamentNodeState_A_TimeoutForfeit:
      return "k_ETournamentNodeState_A_TimeoutForfeit";
    case ETournamentNodeState.k_ETournamentNodeState_A_TimeoutRefund:
      return "k_ETournamentNodeState_A_TimeoutRefund";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETournamentNodeState");
  }
}

export enum EDOTAGroupMergeResult {
  k_EDOTAGroupMergeResult_OK = 0,
  k_EDOTAGroupMergeResult_FAILED_GENERIC = 1,
  k_EDOTAGroupMergeResult_NOT_LEADER = 2,
  k_EDOTAGroupMergeResult_TOO_MANY_PLAYERS = 3,
  k_EDOTAGroupMergeResult_TOO_MANY_COACHES = 4,
  k_EDOTAGroupMergeResult_ENGINE_MISMATCH = 5,
  k_EDOTAGroupMergeResult_NO_SUCH_GROUP = 6,
  k_EDOTAGroupMergeResult_OTHER_GROUP_NOT_OPEN = 7,
  k_EDOTAGroupMergeResult_ALREADY_INVITED = 8,
  k_EDOTAGroupMergeResult_NOT_INVITED = 9,
}

export function eDOTAGroupMergeResultFromJSON(object: any): EDOTAGroupMergeResult {
  switch (object) {
    case 0:
    case "k_EDOTAGroupMergeResult_OK":
      return EDOTAGroupMergeResult.k_EDOTAGroupMergeResult_OK;
    case 1:
    case "k_EDOTAGroupMergeResult_FAILED_GENERIC":
      return EDOTAGroupMergeResult.k_EDOTAGroupMergeResult_FAILED_GENERIC;
    case 2:
    case "k_EDOTAGroupMergeResult_NOT_LEADER":
      return EDOTAGroupMergeResult.k_EDOTAGroupMergeResult_NOT_LEADER;
    case 3:
    case "k_EDOTAGroupMergeResult_TOO_MANY_PLAYERS":
      return EDOTAGroupMergeResult.k_EDOTAGroupMergeResult_TOO_MANY_PLAYERS;
    case 4:
    case "k_EDOTAGroupMergeResult_TOO_MANY_COACHES":
      return EDOTAGroupMergeResult.k_EDOTAGroupMergeResult_TOO_MANY_COACHES;
    case 5:
    case "k_EDOTAGroupMergeResult_ENGINE_MISMATCH":
      return EDOTAGroupMergeResult.k_EDOTAGroupMergeResult_ENGINE_MISMATCH;
    case 6:
    case "k_EDOTAGroupMergeResult_NO_SUCH_GROUP":
      return EDOTAGroupMergeResult.k_EDOTAGroupMergeResult_NO_SUCH_GROUP;
    case 7:
    case "k_EDOTAGroupMergeResult_OTHER_GROUP_NOT_OPEN":
      return EDOTAGroupMergeResult.k_EDOTAGroupMergeResult_OTHER_GROUP_NOT_OPEN;
    case 8:
    case "k_EDOTAGroupMergeResult_ALREADY_INVITED":
      return EDOTAGroupMergeResult.k_EDOTAGroupMergeResult_ALREADY_INVITED;
    case 9:
    case "k_EDOTAGroupMergeResult_NOT_INVITED":
      return EDOTAGroupMergeResult.k_EDOTAGroupMergeResult_NOT_INVITED;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDOTAGroupMergeResult");
  }
}

export function eDOTAGroupMergeResultToJSON(object: EDOTAGroupMergeResult): string {
  switch (object) {
    case EDOTAGroupMergeResult.k_EDOTAGroupMergeResult_OK:
      return "k_EDOTAGroupMergeResult_OK";
    case EDOTAGroupMergeResult.k_EDOTAGroupMergeResult_FAILED_GENERIC:
      return "k_EDOTAGroupMergeResult_FAILED_GENERIC";
    case EDOTAGroupMergeResult.k_EDOTAGroupMergeResult_NOT_LEADER:
      return "k_EDOTAGroupMergeResult_NOT_LEADER";
    case EDOTAGroupMergeResult.k_EDOTAGroupMergeResult_TOO_MANY_PLAYERS:
      return "k_EDOTAGroupMergeResult_TOO_MANY_PLAYERS";
    case EDOTAGroupMergeResult.k_EDOTAGroupMergeResult_TOO_MANY_COACHES:
      return "k_EDOTAGroupMergeResult_TOO_MANY_COACHES";
    case EDOTAGroupMergeResult.k_EDOTAGroupMergeResult_ENGINE_MISMATCH:
      return "k_EDOTAGroupMergeResult_ENGINE_MISMATCH";
    case EDOTAGroupMergeResult.k_EDOTAGroupMergeResult_NO_SUCH_GROUP:
      return "k_EDOTAGroupMergeResult_NO_SUCH_GROUP";
    case EDOTAGroupMergeResult.k_EDOTAGroupMergeResult_OTHER_GROUP_NOT_OPEN:
      return "k_EDOTAGroupMergeResult_OTHER_GROUP_NOT_OPEN";
    case EDOTAGroupMergeResult.k_EDOTAGroupMergeResult_ALREADY_INVITED:
      return "k_EDOTAGroupMergeResult_ALREADY_INVITED";
    case EDOTAGroupMergeResult.k_EDOTAGroupMergeResult_NOT_INVITED:
      return "k_EDOTAGroupMergeResult_NOT_INVITED";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDOTAGroupMergeResult");
  }
}

export enum EPartyBeaconType {
  k_EPartyBeaconType_Available = 0,
  k_EPartyBeaconType_Joinable = 1,
}

export function ePartyBeaconTypeFromJSON(object: any): EPartyBeaconType {
  switch (object) {
    case 0:
    case "k_EPartyBeaconType_Available":
      return EPartyBeaconType.k_EPartyBeaconType_Available;
    case 1:
    case "k_EPartyBeaconType_Joinable":
      return EPartyBeaconType.k_EPartyBeaconType_Joinable;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EPartyBeaconType");
  }
}

export function ePartyBeaconTypeToJSON(object: EPartyBeaconType): string {
  switch (object) {
    case EPartyBeaconType.k_EPartyBeaconType_Available:
      return "k_EPartyBeaconType_Available";
    case EPartyBeaconType.k_EPartyBeaconType_Joinable:
      return "k_EPartyBeaconType_Joinable";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EPartyBeaconType");
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
