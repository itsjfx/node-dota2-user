/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    /**
     * ETournamentTemplate enum.
     * @exports ETournamentTemplate
     * @enum {number}
     * @property {number} k_ETournamentTemplate_None=0 k_ETournamentTemplate_None value
     * @property {number} k_ETournamentTemplate_AutomatedWin3=1 k_ETournamentTemplate_AutomatedWin3 value
     */
    $root.ETournamentTemplate = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ETournamentTemplate_None"] = 0;
        values[valuesById[1] = "k_ETournamentTemplate_AutomatedWin3"] = 1;
        return values;
    })();
    
    /**
     * ETournamentGameState enum.
     * @exports ETournamentGameState
     * @enum {number}
     * @property {number} k_ETournamentGameState_Unknown=0 k_ETournamentGameState_Unknown value
     * @property {number} k_ETournamentGameState_Canceled=1 k_ETournamentGameState_Canceled value
     * @property {number} k_ETournamentGameState_Scheduled=2 k_ETournamentGameState_Scheduled value
     * @property {number} k_ETournamentGameState_Active=3 k_ETournamentGameState_Active value
     * @property {number} k_ETournamentGameState_RadVictory=20 k_ETournamentGameState_RadVictory value
     * @property {number} k_ETournamentGameState_DireVictory=21 k_ETournamentGameState_DireVictory value
     * @property {number} k_ETournamentGameState_RadVictoryByForfeit=22 k_ETournamentGameState_RadVictoryByForfeit value
     * @property {number} k_ETournamentGameState_DireVictoryByForfeit=23 k_ETournamentGameState_DireVictoryByForfeit value
     * @property {number} k_ETournamentGameState_ServerFailure=40 k_ETournamentGameState_ServerFailure value
     * @property {number} k_ETournamentGameState_NotNeeded=41 k_ETournamentGameState_NotNeeded value
     */
    $root.ETournamentGameState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ETournamentGameState_Unknown"] = 0;
        values[valuesById[1] = "k_ETournamentGameState_Canceled"] = 1;
        values[valuesById[2] = "k_ETournamentGameState_Scheduled"] = 2;
        values[valuesById[3] = "k_ETournamentGameState_Active"] = 3;
        values[valuesById[20] = "k_ETournamentGameState_RadVictory"] = 20;
        values[valuesById[21] = "k_ETournamentGameState_DireVictory"] = 21;
        values[valuesById[22] = "k_ETournamentGameState_RadVictoryByForfeit"] = 22;
        values[valuesById[23] = "k_ETournamentGameState_DireVictoryByForfeit"] = 23;
        values[valuesById[40] = "k_ETournamentGameState_ServerFailure"] = 40;
        values[valuesById[41] = "k_ETournamentGameState_NotNeeded"] = 41;
        return values;
    })();
    
    /**
     * ETournamentTeamState enum.
     * @exports ETournamentTeamState
     * @enum {number}
     * @property {number} k_ETournamentTeamState_Unknown=0 k_ETournamentTeamState_Unknown value
     * @property {number} k_ETournamentTeamState_Node1=1 k_ETournamentTeamState_Node1 value
     * @property {number} k_ETournamentTeamState_NodeMax=1024 k_ETournamentTeamState_NodeMax value
     * @property {number} k_ETournamentTeamState_Eliminated=14003 k_ETournamentTeamState_Eliminated value
     * @property {number} k_ETournamentTeamState_Forfeited=14004 k_ETournamentTeamState_Forfeited value
     * @property {number} k_ETournamentTeamState_Finished1st=15001 k_ETournamentTeamState_Finished1st value
     * @property {number} k_ETournamentTeamState_Finished2nd=15002 k_ETournamentTeamState_Finished2nd value
     * @property {number} k_ETournamentTeamState_Finished3rd=15003 k_ETournamentTeamState_Finished3rd value
     * @property {number} k_ETournamentTeamState_Finished4th=15004 k_ETournamentTeamState_Finished4th value
     * @property {number} k_ETournamentTeamState_Finished5th=15005 k_ETournamentTeamState_Finished5th value
     * @property {number} k_ETournamentTeamState_Finished6th=15006 k_ETournamentTeamState_Finished6th value
     * @property {number} k_ETournamentTeamState_Finished7th=15007 k_ETournamentTeamState_Finished7th value
     * @property {number} k_ETournamentTeamState_Finished8th=15008 k_ETournamentTeamState_Finished8th value
     * @property {number} k_ETournamentTeamState_Finished9th=15009 k_ETournamentTeamState_Finished9th value
     * @property {number} k_ETournamentTeamState_Finished10th=15010 k_ETournamentTeamState_Finished10th value
     * @property {number} k_ETournamentTeamState_Finished11th=15011 k_ETournamentTeamState_Finished11th value
     * @property {number} k_ETournamentTeamState_Finished12th=15012 k_ETournamentTeamState_Finished12th value
     * @property {number} k_ETournamentTeamState_Finished13th=15013 k_ETournamentTeamState_Finished13th value
     * @property {number} k_ETournamentTeamState_Finished14th=15014 k_ETournamentTeamState_Finished14th value
     * @property {number} k_ETournamentTeamState_Finished15th=15015 k_ETournamentTeamState_Finished15th value
     * @property {number} k_ETournamentTeamState_Finished16th=15016 k_ETournamentTeamState_Finished16th value
     */
    $root.ETournamentTeamState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ETournamentTeamState_Unknown"] = 0;
        values[valuesById[1] = "k_ETournamentTeamState_Node1"] = 1;
        values[valuesById[1024] = "k_ETournamentTeamState_NodeMax"] = 1024;
        values[valuesById[14003] = "k_ETournamentTeamState_Eliminated"] = 14003;
        values[valuesById[14004] = "k_ETournamentTeamState_Forfeited"] = 14004;
        values[valuesById[15001] = "k_ETournamentTeamState_Finished1st"] = 15001;
        values[valuesById[15002] = "k_ETournamentTeamState_Finished2nd"] = 15002;
        values[valuesById[15003] = "k_ETournamentTeamState_Finished3rd"] = 15003;
        values[valuesById[15004] = "k_ETournamentTeamState_Finished4th"] = 15004;
        values[valuesById[15005] = "k_ETournamentTeamState_Finished5th"] = 15005;
        values[valuesById[15006] = "k_ETournamentTeamState_Finished6th"] = 15006;
        values[valuesById[15007] = "k_ETournamentTeamState_Finished7th"] = 15007;
        values[valuesById[15008] = "k_ETournamentTeamState_Finished8th"] = 15008;
        values[valuesById[15009] = "k_ETournamentTeamState_Finished9th"] = 15009;
        values[valuesById[15010] = "k_ETournamentTeamState_Finished10th"] = 15010;
        values[valuesById[15011] = "k_ETournamentTeamState_Finished11th"] = 15011;
        values[valuesById[15012] = "k_ETournamentTeamState_Finished12th"] = 15012;
        values[valuesById[15013] = "k_ETournamentTeamState_Finished13th"] = 15013;
        values[valuesById[15014] = "k_ETournamentTeamState_Finished14th"] = 15014;
        values[valuesById[15015] = "k_ETournamentTeamState_Finished15th"] = 15015;
        values[valuesById[15016] = "k_ETournamentTeamState_Finished16th"] = 15016;
        return values;
    })();
    
    /**
     * ETournamentState enum.
     * @exports ETournamentState
     * @enum {number}
     * @property {number} k_ETournamentState_Unknown=0 k_ETournamentState_Unknown value
     * @property {number} k_ETournamentState_CanceledByAdmin=1 k_ETournamentState_CanceledByAdmin value
     * @property {number} k_ETournamentState_Completed=2 k_ETournamentState_Completed value
     * @property {number} k_ETournamentState_Merged=3 k_ETournamentState_Merged value
     * @property {number} k_ETournamentState_ServerFailure=4 k_ETournamentState_ServerFailure value
     * @property {number} k_ETournamentState_TeamAbandoned=5 k_ETournamentState_TeamAbandoned value
     * @property {number} k_ETournamentState_TeamTimeoutForfeit=6 k_ETournamentState_TeamTimeoutForfeit value
     * @property {number} k_ETournamentState_TeamTimeoutRefund=7 k_ETournamentState_TeamTimeoutRefund value
     * @property {number} k_ETournamentState_ServerFailureGrantedVictory=8 k_ETournamentState_ServerFailureGrantedVictory value
     * @property {number} k_ETournamentState_TeamTimeoutGrantedVictory=9 k_ETournamentState_TeamTimeoutGrantedVictory value
     * @property {number} k_ETournamentState_InProgress=100 k_ETournamentState_InProgress value
     * @property {number} k_ETournamentState_WaitingToMerge=101 k_ETournamentState_WaitingToMerge value
     */
    $root.ETournamentState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ETournamentState_Unknown"] = 0;
        values[valuesById[1] = "k_ETournamentState_CanceledByAdmin"] = 1;
        values[valuesById[2] = "k_ETournamentState_Completed"] = 2;
        values[valuesById[3] = "k_ETournamentState_Merged"] = 3;
        values[valuesById[4] = "k_ETournamentState_ServerFailure"] = 4;
        values[valuesById[5] = "k_ETournamentState_TeamAbandoned"] = 5;
        values[valuesById[6] = "k_ETournamentState_TeamTimeoutForfeit"] = 6;
        values[valuesById[7] = "k_ETournamentState_TeamTimeoutRefund"] = 7;
        values[valuesById[8] = "k_ETournamentState_ServerFailureGrantedVictory"] = 8;
        values[valuesById[9] = "k_ETournamentState_TeamTimeoutGrantedVictory"] = 9;
        values[valuesById[100] = "k_ETournamentState_InProgress"] = 100;
        values[valuesById[101] = "k_ETournamentState_WaitingToMerge"] = 101;
        return values;
    })();
    
    /**
     * ETournamentNodeState enum.
     * @exports ETournamentNodeState
     * @enum {number}
     * @property {number} k_ETournamentNodeState_Unknown=0 k_ETournamentNodeState_Unknown value
     * @property {number} k_ETournamentNodeState_Canceled=1 k_ETournamentNodeState_Canceled value
     * @property {number} k_ETournamentNodeState_TeamsNotYetAssigned=2 k_ETournamentNodeState_TeamsNotYetAssigned value
     * @property {number} k_ETournamentNodeState_InBetweenGames=3 k_ETournamentNodeState_InBetweenGames value
     * @property {number} k_ETournamentNodeState_GameInProgress=4 k_ETournamentNodeState_GameInProgress value
     * @property {number} k_ETournamentNodeState_A_Won=5 k_ETournamentNodeState_A_Won value
     * @property {number} k_ETournamentNodeState_B_Won=6 k_ETournamentNodeState_B_Won value
     * @property {number} k_ETournamentNodeState_A_WonByForfeit=7 k_ETournamentNodeState_A_WonByForfeit value
     * @property {number} k_ETournamentNodeState_B_WonByForfeit=8 k_ETournamentNodeState_B_WonByForfeit value
     * @property {number} k_ETournamentNodeState_A_Bye=9 k_ETournamentNodeState_A_Bye value
     * @property {number} k_ETournamentNodeState_A_Abandoned=10 k_ETournamentNodeState_A_Abandoned value
     * @property {number} k_ETournamentNodeState_ServerFailure=11 k_ETournamentNodeState_ServerFailure value
     * @property {number} k_ETournamentNodeState_A_TimeoutForfeit=12 k_ETournamentNodeState_A_TimeoutForfeit value
     * @property {number} k_ETournamentNodeState_A_TimeoutRefund=13 k_ETournamentNodeState_A_TimeoutRefund value
     */
    $root.ETournamentNodeState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ETournamentNodeState_Unknown"] = 0;
        values[valuesById[1] = "k_ETournamentNodeState_Canceled"] = 1;
        values[valuesById[2] = "k_ETournamentNodeState_TeamsNotYetAssigned"] = 2;
        values[valuesById[3] = "k_ETournamentNodeState_InBetweenGames"] = 3;
        values[valuesById[4] = "k_ETournamentNodeState_GameInProgress"] = 4;
        values[valuesById[5] = "k_ETournamentNodeState_A_Won"] = 5;
        values[valuesById[6] = "k_ETournamentNodeState_B_Won"] = 6;
        values[valuesById[7] = "k_ETournamentNodeState_A_WonByForfeit"] = 7;
        values[valuesById[8] = "k_ETournamentNodeState_B_WonByForfeit"] = 8;
        values[valuesById[9] = "k_ETournamentNodeState_A_Bye"] = 9;
        values[valuesById[10] = "k_ETournamentNodeState_A_Abandoned"] = 10;
        values[valuesById[11] = "k_ETournamentNodeState_ServerFailure"] = 11;
        values[valuesById[12] = "k_ETournamentNodeState_A_TimeoutForfeit"] = 12;
        values[valuesById[13] = "k_ETournamentNodeState_A_TimeoutRefund"] = 13;
        return values;
    })();
    
    /**
     * EDOTAGroupMergeResult enum.
     * @exports EDOTAGroupMergeResult
     * @enum {number}
     * @property {number} k_EDOTAGroupMergeResult_OK=0 k_EDOTAGroupMergeResult_OK value
     * @property {number} k_EDOTAGroupMergeResult_FAILED_GENERIC=1 k_EDOTAGroupMergeResult_FAILED_GENERIC value
     * @property {number} k_EDOTAGroupMergeResult_NOT_LEADER=2 k_EDOTAGroupMergeResult_NOT_LEADER value
     * @property {number} k_EDOTAGroupMergeResult_TOO_MANY_PLAYERS=3 k_EDOTAGroupMergeResult_TOO_MANY_PLAYERS value
     * @property {number} k_EDOTAGroupMergeResult_TOO_MANY_COACHES=4 k_EDOTAGroupMergeResult_TOO_MANY_COACHES value
     * @property {number} k_EDOTAGroupMergeResult_ENGINE_MISMATCH=5 k_EDOTAGroupMergeResult_ENGINE_MISMATCH value
     * @property {number} k_EDOTAGroupMergeResult_NO_SUCH_GROUP=6 k_EDOTAGroupMergeResult_NO_SUCH_GROUP value
     * @property {number} k_EDOTAGroupMergeResult_OTHER_GROUP_NOT_OPEN=7 k_EDOTAGroupMergeResult_OTHER_GROUP_NOT_OPEN value
     * @property {number} k_EDOTAGroupMergeResult_ALREADY_INVITED=8 k_EDOTAGroupMergeResult_ALREADY_INVITED value
     * @property {number} k_EDOTAGroupMergeResult_NOT_INVITED=9 k_EDOTAGroupMergeResult_NOT_INVITED value
     */
    $root.EDOTAGroupMergeResult = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EDOTAGroupMergeResult_OK"] = 0;
        values[valuesById[1] = "k_EDOTAGroupMergeResult_FAILED_GENERIC"] = 1;
        values[valuesById[2] = "k_EDOTAGroupMergeResult_NOT_LEADER"] = 2;
        values[valuesById[3] = "k_EDOTAGroupMergeResult_TOO_MANY_PLAYERS"] = 3;
        values[valuesById[4] = "k_EDOTAGroupMergeResult_TOO_MANY_COACHES"] = 4;
        values[valuesById[5] = "k_EDOTAGroupMergeResult_ENGINE_MISMATCH"] = 5;
        values[valuesById[6] = "k_EDOTAGroupMergeResult_NO_SUCH_GROUP"] = 6;
        values[valuesById[7] = "k_EDOTAGroupMergeResult_OTHER_GROUP_NOT_OPEN"] = 7;
        values[valuesById[8] = "k_EDOTAGroupMergeResult_ALREADY_INVITED"] = 8;
        values[valuesById[9] = "k_EDOTAGroupMergeResult_NOT_INVITED"] = 9;
        return values;
    })();
    
    /**
     * EPartyBeaconType enum.
     * @exports EPartyBeaconType
     * @enum {number}
     * @property {number} k_EPartyBeaconType_Available=0 k_EPartyBeaconType_Available value
     * @property {number} k_EPartyBeaconType_Joinable=1 k_EPartyBeaconType_Joinable value
     */
    $root.EPartyBeaconType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EPartyBeaconType_Available"] = 0;
        values[valuesById[1] = "k_EPartyBeaconType_Joinable"] = 1;
        return values;
    })();

    return $root;
});
