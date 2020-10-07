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
     * EDOTAGCMsg enum.
     * @exports EDOTAGCMsg
     * @enum {number}
     * @property {number} k_EMsgGCDOTABase=7000 k_EMsgGCDOTABase value
     * @property {number} k_EMsgGCGeneralResponse=7001 k_EMsgGCGeneralResponse value
     * @property {number} k_EMsgGCGameMatchSignOut=7004 k_EMsgGCGameMatchSignOut value
     * @property {number} k_EMsgGCGameMatchSignOutResponse=7005 k_EMsgGCGameMatchSignOutResponse value
     * @property {number} k_EMsgGCJoinChatChannel=7009 k_EMsgGCJoinChatChannel value
     * @property {number} k_EMsgGCJoinChatChannelResponse=7010 k_EMsgGCJoinChatChannelResponse value
     * @property {number} k_EMsgGCOtherJoinedChannel=7013 k_EMsgGCOtherJoinedChannel value
     * @property {number} k_EMsgGCOtherLeftChannel=7014 k_EMsgGCOtherLeftChannel value
     * @property {number} k_EMsgGCMatchHistoryList=7017 k_EMsgGCMatchHistoryList value
     * @property {number} k_EMsgServerToGCRequestStatus=7026 k_EMsgServerToGCRequestStatus value
     * @property {number} k_EMsgGCGetRecentMatches=7027 k_EMsgGCGetRecentMatches value
     * @property {number} k_EMsgGCRecentMatchesResponse=7028 k_EMsgGCRecentMatchesResponse value
     * @property {number} k_EMsgGCStartFindingMatch=7033 k_EMsgGCStartFindingMatch value
     * @property {number} k_EMsgGCConnectedPlayers=7034 k_EMsgGCConnectedPlayers value
     * @property {number} k_EMsgGCAbandonCurrentGame=7035 k_EMsgGCAbandonCurrentGame value
     * @property {number} k_EMsgGCStopFindingMatch=7036 k_EMsgGCStopFindingMatch value
     * @property {number} k_EMsgGCPracticeLobbyCreate=7038 k_EMsgGCPracticeLobbyCreate value
     * @property {number} k_EMsgGCPracticeLobbyLeave=7040 k_EMsgGCPracticeLobbyLeave value
     * @property {number} k_EMsgGCPracticeLobbyLaunch=7041 k_EMsgGCPracticeLobbyLaunch value
     * @property {number} k_EMsgGCPracticeLobbyList=7042 k_EMsgGCPracticeLobbyList value
     * @property {number} k_EMsgGCPracticeLobbyListResponse=7043 k_EMsgGCPracticeLobbyListResponse value
     * @property {number} k_EMsgGCPracticeLobbyJoin=7044 k_EMsgGCPracticeLobbyJoin value
     * @property {number} k_EMsgGCPracticeLobbySetDetails=7046 k_EMsgGCPracticeLobbySetDetails value
     * @property {number} k_EMsgGCPracticeLobbySetTeamSlot=7047 k_EMsgGCPracticeLobbySetTeamSlot value
     * @property {number} k_EMsgGCInitialQuestionnaireResponse=7049 k_EMsgGCInitialQuestionnaireResponse value
     * @property {number} k_EMsgGCPracticeLobbyResponse=7055 k_EMsgGCPracticeLobbyResponse value
     * @property {number} k_EMsgGCBroadcastNotification=7056 k_EMsgGCBroadcastNotification value
     * @property {number} k_EMsgGCLiveScoreboardUpdate=7057 k_EMsgGCLiveScoreboardUpdate value
     * @property {number} k_EMsgGCRequestChatChannelList=7060 k_EMsgGCRequestChatChannelList value
     * @property {number} k_EMsgGCRequestChatChannelListResponse=7061 k_EMsgGCRequestChatChannelListResponse value
     * @property {number} k_EMsgGCRequestMatches=7064 k_EMsgGCRequestMatches value
     * @property {number} k_EMsgGCRequestMatchesResponse=7065 k_EMsgGCRequestMatchesResponse value
     * @property {number} k_EMsgGCRequestPlayerResources=7068 k_EMsgGCRequestPlayerResources value
     * @property {number} k_EMsgGCRequestPlayerResourcesResponse=7069 k_EMsgGCRequestPlayerResourcesResponse value
     * @property {number} k_EMsgGCReadyUp=7070 k_EMsgGCReadyUp value
     * @property {number} k_EMsgGCKickedFromMatchmakingQueue=7071 k_EMsgGCKickedFromMatchmakingQueue value
     * @property {number} k_EMsgGCLeaverDetected=7072 k_EMsgGCLeaverDetected value
     * @property {number} k_EMsgGCSpectateFriendGame=7073 k_EMsgGCSpectateFriendGame value
     * @property {number} k_EMsgGCSpectateFriendGameResponse=7074 k_EMsgGCSpectateFriendGameResponse value
     * @property {number} k_EMsgGCPlayerReports=7075 k_EMsgGCPlayerReports value
     * @property {number} k_EMsgGCReportsRemainingRequest=7076 k_EMsgGCReportsRemainingRequest value
     * @property {number} k_EMsgGCReportsRemainingResponse=7077 k_EMsgGCReportsRemainingResponse value
     * @property {number} k_EMsgGCSubmitPlayerReport=7078 k_EMsgGCSubmitPlayerReport value
     * @property {number} k_EMsgGCSubmitPlayerReportResponse=7079 k_EMsgGCSubmitPlayerReportResponse value
     * @property {number} k_EMsgGCPracticeLobbyKick=7081 k_EMsgGCPracticeLobbyKick value
     * @property {number} k_EMsgGCReportCountsRequest=7082 k_EMsgGCReportCountsRequest value
     * @property {number} k_EMsgGCReportCountsResponse=7083 k_EMsgGCReportCountsResponse value
     * @property {number} k_EMsgGCRequestSaveGames=7084 k_EMsgGCRequestSaveGames value
     * @property {number} k_EMsgGCRequestSaveGamesServer=7085 k_EMsgGCRequestSaveGamesServer value
     * @property {number} k_EMsgGCRequestSaveGamesResponse=7086 k_EMsgGCRequestSaveGamesResponse value
     * @property {number} k_EMsgGCLeaverDetectedResponse=7087 k_EMsgGCLeaverDetectedResponse value
     * @property {number} k_EMsgGCPlayerFailedToConnect=7088 k_EMsgGCPlayerFailedToConnect value
     * @property {number} k_EMsgGCGCToRelayConnect=7089 k_EMsgGCGCToRelayConnect value
     * @property {number} k_EMsgGCGCToRelayConnectresponse=7090 k_EMsgGCGCToRelayConnectresponse value
     * @property {number} k_EMsgGCWatchGame=7091 k_EMsgGCWatchGame value
     * @property {number} k_EMsgGCWatchGameResponse=7092 k_EMsgGCWatchGameResponse value
     * @property {number} k_EMsgGCBanStatusRequest=7093 k_EMsgGCBanStatusRequest value
     * @property {number} k_EMsgGCBanStatusResponse=7094 k_EMsgGCBanStatusResponse value
     * @property {number} k_EMsgGCMatchDetailsRequest=7095 k_EMsgGCMatchDetailsRequest value
     * @property {number} k_EMsgGCMatchDetailsResponse=7096 k_EMsgGCMatchDetailsResponse value
     * @property {number} k_EMsgGCCancelWatchGame=7097 k_EMsgGCCancelWatchGame value
     * @property {number} k_EMsgGCPopup=7102 k_EMsgGCPopup value
     * @property {number} k_EMsgGCDOTAClearNotifySuccessfulReport=7104 k_EMsgGCDOTAClearNotifySuccessfulReport value
     * @property {number} k_EMsgGCFriendPracticeLobbyListRequest=7111 k_EMsgGCFriendPracticeLobbyListRequest value
     * @property {number} k_EMsgGCFriendPracticeLobbyListResponse=7112 k_EMsgGCFriendPracticeLobbyListResponse value
     * @property {number} k_EMsgGCPracticeLobbyJoinResponse=7113 k_EMsgGCPracticeLobbyJoinResponse value
     * @property {number} k_EMsgClientEconNotification_Job=7114 k_EMsgClientEconNotification_Job value
     * @property {number} k_EMsgGCCreateTeam=7115 k_EMsgGCCreateTeam value
     * @property {number} k_EMsgGCCreateTeamResponse=7116 k_EMsgGCCreateTeamResponse value
     * @property {number} k_EMsgGCTeamData=7121 k_EMsgGCTeamData value
     * @property {number} k_EMsgGCTeamInvite_InviterToGC=7122 k_EMsgGCTeamInvite_InviterToGC value
     * @property {number} k_EMsgGCTeamInvite_GCImmediateResponseToInviter=7123 k_EMsgGCTeamInvite_GCImmediateResponseToInviter value
     * @property {number} k_EMsgGCTeamInvite_GCRequestToInvitee=7124 k_EMsgGCTeamInvite_GCRequestToInvitee value
     * @property {number} k_EMsgGCTeamInvite_InviteeResponseToGC=7125 k_EMsgGCTeamInvite_InviteeResponseToGC value
     * @property {number} k_EMsgGCTeamInvite_GCResponseToInviter=7126 k_EMsgGCTeamInvite_GCResponseToInviter value
     * @property {number} k_EMsgGCTeamInvite_GCResponseToInvitee=7127 k_EMsgGCTeamInvite_GCResponseToInvitee value
     * @property {number} k_EMsgGCKickTeamMember=7128 k_EMsgGCKickTeamMember value
     * @property {number} k_EMsgGCKickTeamMemberResponse=7129 k_EMsgGCKickTeamMemberResponse value
     * @property {number} k_EMsgGCLeaveTeam=7130 k_EMsgGCLeaveTeam value
     * @property {number} k_EMsgGCLeaveTeamResponse=7131 k_EMsgGCLeaveTeamResponse value
     * @property {number} k_EMsgGCSuggestTeamMatchmaking=7132 k_EMsgGCSuggestTeamMatchmaking value
     * @property {number} k_EMsgGCPlayerHeroesFavoritesAdd=7133 k_EMsgGCPlayerHeroesFavoritesAdd value
     * @property {number} k_EMsgGCPlayerHeroesFavoritesRemove=7134 k_EMsgGCPlayerHeroesFavoritesRemove value
     * @property {number} k_EMsgGCApplyTeamToPracticeLobby=7142 k_EMsgGCApplyTeamToPracticeLobby value
     * @property {number} k_EMsgGCTransferTeamAdmin=7144 k_EMsgGCTransferTeamAdmin value
     * @property {number} k_EMsgGCPracticeLobbyJoinBroadcastChannel=7149 k_EMsgGCPracticeLobbyJoinBroadcastChannel value
     * @property {number} k_EMsgGC_TournamentItemEvent=7150 k_EMsgGC_TournamentItemEvent value
     * @property {number} k_EMsgGC_TournamentItemEventResponse=7151 k_EMsgGC_TournamentItemEventResponse value
     * @property {number} k_EMsgCastMatchVote=7152 k_EMsgCastMatchVote value
     * @property {number} k_EMsgCastMatchVoteResponse=7153 k_EMsgCastMatchVoteResponse value
     * @property {number} k_EMsgRetrieveMatchVote=7154 k_EMsgRetrieveMatchVote value
     * @property {number} k_EMsgRetrieveMatchVoteResponse=7155 k_EMsgRetrieveMatchVoteResponse value
     * @property {number} k_EMsgTeamFanfare=7156 k_EMsgTeamFanfare value
     * @property {number} k_EMsgResponseTeamFanfare=7157 k_EMsgResponseTeamFanfare value
     * @property {number} k_EMsgGC_GameServerUploadSaveGame=7158 k_EMsgGC_GameServerUploadSaveGame value
     * @property {number} k_EMsgGC_GameServerSaveGameResult=7159 k_EMsgGC_GameServerSaveGameResult value
     * @property {number} k_EMsgGC_GameServerGetLoadGame=7160 k_EMsgGC_GameServerGetLoadGame value
     * @property {number} k_EMsgGC_GameServerGetLoadGameResult=7161 k_EMsgGC_GameServerGetLoadGameResult value
     * @property {number} k_EMsgGCEditTeamDetails=7166 k_EMsgGCEditTeamDetails value
     * @property {number} k_EMsgGCEditTeamDetailsResponse=7167 k_EMsgGCEditTeamDetailsResponse value
     * @property {number} k_EMsgGCProTeamListRequest=7168 k_EMsgGCProTeamListRequest value
     * @property {number} k_EMsgGCProTeamListResponse=7169 k_EMsgGCProTeamListResponse value
     * @property {number} k_EMsgGCReadyUpStatus=7170 k_EMsgGCReadyUpStatus value
     * @property {number} k_EMsgGCHallOfFame=7171 k_EMsgGCHallOfFame value
     * @property {number} k_EMsgGCHallOfFameRequest=7172 k_EMsgGCHallOfFameRequest value
     * @property {number} k_EMsgGCHallOfFameResponse=7173 k_EMsgGCHallOfFameResponse value
     * @property {number} k_EMsgGCGenerateDiretidePrizeList=7174 k_EMsgGCGenerateDiretidePrizeList value
     * @property {number} k_EMsgGCRewardDiretidePrizes=7176 k_EMsgGCRewardDiretidePrizes value
     * @property {number} k_EMsgGCDiretidePrizesRewardedResponse=7177 k_EMsgGCDiretidePrizesRewardedResponse value
     * @property {number} k_EMsgGCHalloweenHighScoreRequest=7178 k_EMsgGCHalloweenHighScoreRequest value
     * @property {number} k_EMsgGCHalloweenHighScoreResponse=7179 k_EMsgGCHalloweenHighScoreResponse value
     * @property {number} k_EMsgGCGenerateDiretidePrizeListResponse=7180 k_EMsgGCGenerateDiretidePrizeListResponse value
     * @property {number} k_EMsgGCStorePromoPagesRequest=7182 k_EMsgGCStorePromoPagesRequest value
     * @property {number} k_EMsgGCStorePromoPagesResponse=7183 k_EMsgGCStorePromoPagesResponse value
     * @property {number} k_EMsgGCToGCMatchCompleted=7186 k_EMsgGCToGCMatchCompleted value
     * @property {number} k_EMsgGCBalancedShuffleLobby=7188 k_EMsgGCBalancedShuffleLobby value
     * @property {number} k_EMsgGCToGCCheckLeaguePermission=7189 k_EMsgGCToGCCheckLeaguePermission value
     * @property {number} k_EMsgGCToGCCheckLeaguePermissionResponse=7190 k_EMsgGCToGCCheckLeaguePermissionResponse value
     * @property {number} k_EMsgGCMatchmakingStatsRequest=7197 k_EMsgGCMatchmakingStatsRequest value
     * @property {number} k_EMsgGCMatchmakingStatsResponse=7198 k_EMsgGCMatchmakingStatsResponse value
     * @property {number} k_EMsgGCBotGameCreate=7199 k_EMsgGCBotGameCreate value
     * @property {number} k_EMsgGCSetMatchHistoryAccess=7200 k_EMsgGCSetMatchHistoryAccess value
     * @property {number} k_EMsgGCSetMatchHistoryAccessResponse=7201 k_EMsgGCSetMatchHistoryAccessResponse value
     * @property {number} k_EMsgUpgradeLeagueItem=7203 k_EMsgUpgradeLeagueItem value
     * @property {number} k_EMsgUpgradeLeagueItemResponse=7204 k_EMsgUpgradeLeagueItemResponse value
     * @property {number} k_EMsgGCTeamMemberProfileRequest=7205 k_EMsgGCTeamMemberProfileRequest value
     * @property {number} k_EMsgGCWatchDownloadedReplay=7206 k_EMsgGCWatchDownloadedReplay value
     * @property {number} k_EMsgGCSetMapLocationState=7207 k_EMsgGCSetMapLocationState value
     * @property {number} k_EMsgGCSetMapLocationStateResponse=7208 k_EMsgGCSetMapLocationStateResponse value
     * @property {number} k_EMsgGCResetMapLocations=7209 k_EMsgGCResetMapLocations value
     * @property {number} k_EMsgGCResetMapLocationsResponse=7210 k_EMsgGCResetMapLocationsResponse value
     * @property {number} k_EMsgRefreshPartnerAccountLink=7216 k_EMsgRefreshPartnerAccountLink value
     * @property {number} k_EMsgClientsRejoinChatChannels=7217 k_EMsgClientsRejoinChatChannels value
     * @property {number} k_EMsgGCToGCGetUserChatInfo=7218 k_EMsgGCToGCGetUserChatInfo value
     * @property {number} k_EMsgGCToGCGetUserChatInfoResponse=7219 k_EMsgGCToGCGetUserChatInfoResponse value
     * @property {number} k_EMsgGCToGCLeaveAllChatChannels=7220 k_EMsgGCToGCLeaveAllChatChannels value
     * @property {number} k_EMsgGCToGCUpdateAccountChatBan=7221 k_EMsgGCToGCUpdateAccountChatBan value
     * @property {number} k_EMsgGCToGCCanInviteUserToTeam=7234 k_EMsgGCToGCCanInviteUserToTeam value
     * @property {number} k_EMsgGCToGCCanInviteUserToTeamResponse=7235 k_EMsgGCToGCCanInviteUserToTeamResponse value
     * @property {number} k_EMsgGCToGCGetUserRank=7236 k_EMsgGCToGCGetUserRank value
     * @property {number} k_EMsgGCToGCGetUserRankResponse=7237 k_EMsgGCToGCGetUserRankResponse value
     * @property {number} k_EMsgGCToGCUpdateTeamStats=7240 k_EMsgGCToGCUpdateTeamStats value
     * @property {number} k_EMsgGCToGCValidateTeam=7241 k_EMsgGCToGCValidateTeam value
     * @property {number} k_EMsgGCToGCValidateTeamResponse=7242 k_EMsgGCToGCValidateTeamResponse value
     * @property {number} k_EMsgGCPassportDataRequest=7248 k_EMsgGCPassportDataRequest value
     * @property {number} k_EMsgGCPassportDataResponse=7249 k_EMsgGCPassportDataResponse value
     * @property {number} k_EMsgGCToGCGetLeagueAdmin=7255 k_EMsgGCToGCGetLeagueAdmin value
     * @property {number} k_EMsgGCToGCGetLeagueAdminResponse=7256 k_EMsgGCToGCGetLeagueAdminResponse value
     * @property {number} k_EMsgGCRequestLeaguePrizePool=7258 k_EMsgGCRequestLeaguePrizePool value
     * @property {number} k_EMsgGCRequestLeaguePrizePoolResponse=7259 k_EMsgGCRequestLeaguePrizePoolResponse value
     * @property {number} k_EMsgGCLeaveChatChannel=7272 k_EMsgGCLeaveChatChannel value
     * @property {number} k_EMsgGCChatMessage=7273 k_EMsgGCChatMessage value
     * @property {number} k_EMsgGCGetHeroStandings=7274 k_EMsgGCGetHeroStandings value
     * @property {number} k_EMsgGCGetHeroStandingsResponse=7275 k_EMsgGCGetHeroStandingsResponse value
     * @property {number} k_EMsgGCItemEditorReservationsRequest=7283 k_EMsgGCItemEditorReservationsRequest value
     * @property {number} k_EMsgGCItemEditorReservationsResponse=7284 k_EMsgGCItemEditorReservationsResponse value
     * @property {number} k_EMsgGCItemEditorReserveItemDef=7285 k_EMsgGCItemEditorReserveItemDef value
     * @property {number} k_EMsgGCItemEditorReserveItemDefResponse=7286 k_EMsgGCItemEditorReserveItemDefResponse value
     * @property {number} k_EMsgGCItemEditorReleaseReservation=7287 k_EMsgGCItemEditorReleaseReservation value
     * @property {number} k_EMsgGCItemEditorReleaseReservationResponse=7288 k_EMsgGCItemEditorReleaseReservationResponse value
     * @property {number} k_EMsgGCRewardTutorialPrizes=7289 k_EMsgGCRewardTutorialPrizes value
     * @property {number} k_EMsgGCLastHitChallengeHighScorePost=7290 k_EMsgGCLastHitChallengeHighScorePost value
     * @property {number} k_EMsgGCLastHitChallengeHighScoreRequest=7291 k_EMsgGCLastHitChallengeHighScoreRequest value
     * @property {number} k_EMsgGCLastHitChallengeHighScoreResponse=7292 k_EMsgGCLastHitChallengeHighScoreResponse value
     * @property {number} k_EMsgGCCreateFantasyLeagueRequest=7293 k_EMsgGCCreateFantasyLeagueRequest value
     * @property {number} k_EMsgGCCreateFantasyLeagueResponse=7294 k_EMsgGCCreateFantasyLeagueResponse value
     * @property {number} k_EMsgGCFantasyLeagueInfoRequest=7297 k_EMsgGCFantasyLeagueInfoRequest value
     * @property {number} k_EMsgGCFantasyLeagueInfoResponse=7298 k_EMsgGCFantasyLeagueInfoResponse value
     * @property {number} k_EMsgGCFantasyLeagueInfo=7299 k_EMsgGCFantasyLeagueInfo value
     * @property {number} k_EMsgGCCreateFantasyTeamRequest=7300 k_EMsgGCCreateFantasyTeamRequest value
     * @property {number} k_EMsgGCCreateFantasyTeamResponse=7301 k_EMsgGCCreateFantasyTeamResponse value
     * @property {number} k_EMsgGCEditFantasyTeamRequest=7302 k_EMsgGCEditFantasyTeamRequest value
     * @property {number} k_EMsgGCEditFantasyTeamResponse=7303 k_EMsgGCEditFantasyTeamResponse value
     * @property {number} k_EMsgGCFantasyTeamInfoRequestByFantasyLeagueID=7304 k_EMsgGCFantasyTeamInfoRequestByFantasyLeagueID value
     * @property {number} k_EMsgGCFantasyTeamInfoRequestByOwnerAccountID=7305 k_EMsgGCFantasyTeamInfoRequestByOwnerAccountID value
     * @property {number} k_EMsgGCFantasyTeamInfoResponse=7306 k_EMsgGCFantasyTeamInfoResponse value
     * @property {number} k_EMsgGCFantasyTeamInfo=7307 k_EMsgGCFantasyTeamInfo value
     * @property {number} k_EMsgGCFantasyLivePlayerStats=7308 k_EMsgGCFantasyLivePlayerStats value
     * @property {number} k_EMsgGCFantasyFinalPlayerStats=7309 k_EMsgGCFantasyFinalPlayerStats value
     * @property {number} k_EMsgGCFantasyMatch=7310 k_EMsgGCFantasyMatch value
     * @property {number} k_EMsgGCFantasyTeamScoreRequest=7312 k_EMsgGCFantasyTeamScoreRequest value
     * @property {number} k_EMsgGCFantasyTeamScoreResponse=7313 k_EMsgGCFantasyTeamScoreResponse value
     * @property {number} k_EMsgGCFantasyTeamStandingsRequest=7314 k_EMsgGCFantasyTeamStandingsRequest value
     * @property {number} k_EMsgGCFantasyTeamStandingsResponse=7315 k_EMsgGCFantasyTeamStandingsResponse value
     * @property {number} k_EMsgGCFantasyPlayerScoreRequest=7316 k_EMsgGCFantasyPlayerScoreRequest value
     * @property {number} k_EMsgGCFantasyPlayerScoreResponse=7317 k_EMsgGCFantasyPlayerScoreResponse value
     * @property {number} k_EMsgGCFantasyPlayerStandingsRequest=7318 k_EMsgGCFantasyPlayerStandingsRequest value
     * @property {number} k_EMsgGCFantasyPlayerStandingsResponse=7319 k_EMsgGCFantasyPlayerStandingsResponse value
     * @property {number} k_EMsgGCFlipLobbyTeams=7320 k_EMsgGCFlipLobbyTeams value
     * @property {number} k_EMsgGCCustomGameCreate=7321 k_EMsgGCCustomGameCreate value
     * @property {number} k_EMsgGCToGCProcessPlayerReportForTarget=7324 k_EMsgGCToGCProcessPlayerReportForTarget value
     * @property {number} k_EMsgGCToGCProcessReportSuccess=7325 k_EMsgGCToGCProcessReportSuccess value
     * @property {number} k_EMsgGCNotifyAccountFlagsChange=7326 k_EMsgGCNotifyAccountFlagsChange value
     * @property {number} k_EMsgGCSetProfilePrivacy=7327 k_EMsgGCSetProfilePrivacy value
     * @property {number} k_EMsgGCSetProfilePrivacyResponse=7328 k_EMsgGCSetProfilePrivacyResponse value
     * @property {number} k_EMsgGCFantasyLeagueCreateInfoRequest=7331 k_EMsgGCFantasyLeagueCreateInfoRequest value
     * @property {number} k_EMsgGCFantasyLeagueCreateInfoResponse=7332 k_EMsgGCFantasyLeagueCreateInfoResponse value
     * @property {number} k_EMsgGCFantasyLeagueInviteInfoRequest=7333 k_EMsgGCFantasyLeagueInviteInfoRequest value
     * @property {number} k_EMsgGCFantasyLeagueInviteInfoResponse=7334 k_EMsgGCFantasyLeagueInviteInfoResponse value
     * @property {number} k_EMsgGCClientIgnoredUser=7335 k_EMsgGCClientIgnoredUser value
     * @property {number} k_EMsgGCFantasyLeagueCreateRequest=7336 k_EMsgGCFantasyLeagueCreateRequest value
     * @property {number} k_EMsgGCFantasyLeagueCreateResponse=7337 k_EMsgGCFantasyLeagueCreateResponse value
     * @property {number} k_EMsgGCFantasyTeamCreateRequest=7338 k_EMsgGCFantasyTeamCreateRequest value
     * @property {number} k_EMsgGCFantasyTeamCreateResponse=7339 k_EMsgGCFantasyTeamCreateResponse value
     * @property {number} k_EMsgGCFantasyLeagueFriendJoinListRequest=7340 k_EMsgGCFantasyLeagueFriendJoinListRequest value
     * @property {number} k_EMsgGCFantasyLeagueFriendJoinListResponse=7341 k_EMsgGCFantasyLeagueFriendJoinListResponse value
     * @property {number} k_EMsgGCClientSuspended=7342 k_EMsgGCClientSuspended value
     * @property {number} k_EMsgGCPartyMemberSetCoach=7343 k_EMsgGCPartyMemberSetCoach value
     * @property {number} k_EMsgGCFantasyLeagueEditInvitesRequest=7344 k_EMsgGCFantasyLeagueEditInvitesRequest value
     * @property {number} k_EMsgGCFantasyLeagueEditInvitesResponse=7345 k_EMsgGCFantasyLeagueEditInvitesResponse value
     * @property {number} k_EMsgGCPracticeLobbySetCoach=7346 k_EMsgGCPracticeLobbySetCoach value
     * @property {number} k_EMsgGCFantasyLeagueEditInfoRequest=7347 k_EMsgGCFantasyLeagueEditInfoRequest value
     * @property {number} k_EMsgGCFantasyLeagueEditInfoResponse=7348 k_EMsgGCFantasyLeagueEditInfoResponse value
     * @property {number} k_EMsgGCFantasyLeagueDraftStatusRequest=7349 k_EMsgGCFantasyLeagueDraftStatusRequest value
     * @property {number} k_EMsgGCFantasyLeagueDraftStatus=7350 k_EMsgGCFantasyLeagueDraftStatus value
     * @property {number} k_EMsgGCFantasyLeagueDraftPlayerRequest=7351 k_EMsgGCFantasyLeagueDraftPlayerRequest value
     * @property {number} k_EMsgGCFantasyLeagueDraftPlayerResponse=7352 k_EMsgGCFantasyLeagueDraftPlayerResponse value
     * @property {number} k_EMsgGCFantasyLeagueMatchupsRequest=7353 k_EMsgGCFantasyLeagueMatchupsRequest value
     * @property {number} k_EMsgGCFantasyLeagueMatchupsResponse=7354 k_EMsgGCFantasyLeagueMatchupsResponse value
     * @property {number} k_EMsgGCFantasyTeamRosterSwapRequest=7355 k_EMsgGCFantasyTeamRosterSwapRequest value
     * @property {number} k_EMsgGCFantasyTeamRosterSwapResponse=7356 k_EMsgGCFantasyTeamRosterSwapResponse value
     * @property {number} k_EMsgGCFantasyTeamRosterRequest=7357 k_EMsgGCFantasyTeamRosterRequest value
     * @property {number} k_EMsgGCFantasyTeamRosterResponse=7358 k_EMsgGCFantasyTeamRosterResponse value
     * @property {number} k_EMsgGCFantasyTeamRosterAddDropRequest=7361 k_EMsgGCFantasyTeamRosterAddDropRequest value
     * @property {number} k_EMsgGCFantasyTeamRosterAddDropResponse=7362 k_EMsgGCFantasyTeamRosterAddDropResponse value
     * @property {number} k_EMsgPresentedClientTerminateDlg=7363 k_EMsgPresentedClientTerminateDlg value
     * @property {number} k_EMsgGCFantasyPlayerHisoricalStatsRequest=7364 k_EMsgGCFantasyPlayerHisoricalStatsRequest value
     * @property {number} k_EMsgGCFantasyPlayerHisoricalStatsResponse=7365 k_EMsgGCFantasyPlayerHisoricalStatsResponse value
     * @property {number} k_EMsgGCPCBangTimedRewardMessage=7366 k_EMsgGCPCBangTimedRewardMessage value
     * @property {number} k_EMsgGCLobbyUpdateBroadcastChannelInfo=7367 k_EMsgGCLobbyUpdateBroadcastChannelInfo value
     * @property {number} k_EMsgGCFantasyTeamTradesRequest=7368 k_EMsgGCFantasyTeamTradesRequest value
     * @property {number} k_EMsgGCFantasyTeamTradesResponse=7369 k_EMsgGCFantasyTeamTradesResponse value
     * @property {number} k_EMsgGCFantasyTeamTradeCancelRequest=7370 k_EMsgGCFantasyTeamTradeCancelRequest value
     * @property {number} k_EMsgGCFantasyTeamTradeCancelResponse=7371 k_EMsgGCFantasyTeamTradeCancelResponse value
     * @property {number} k_EMsgGCToGCGrantTournamentItem=7372 k_EMsgGCToGCGrantTournamentItem value
     * @property {number} k_EMsgGCProcessFantasyScheduledEvent=7373 k_EMsgGCProcessFantasyScheduledEvent value
     * @property {number} k_EMsgGCToGCUpgradeTwitchViewerItems=7375 k_EMsgGCToGCUpgradeTwitchViewerItems value
     * @property {number} k_EMsgGCToGCGetLiveMatchAffiliates=7376 k_EMsgGCToGCGetLiveMatchAffiliates value
     * @property {number} k_EMsgGCToGCGetLiveMatchAffiliatesResponse=7377 k_EMsgGCToGCGetLiveMatchAffiliatesResponse value
     * @property {number} k_EMsgGCToGCUpdatePlayerPennantCounts=7378 k_EMsgGCToGCUpdatePlayerPennantCounts value
     * @property {number} k_EMsgGCToGCGetPlayerPennantCounts=7379 k_EMsgGCToGCGetPlayerPennantCounts value
     * @property {number} k_EMsgGCToGCGetPlayerPennantCountsResponse=7380 k_EMsgGCToGCGetPlayerPennantCountsResponse value
     * @property {number} k_EMsgGCGameMatchSignOutPermissionRequest=7381 k_EMsgGCGameMatchSignOutPermissionRequest value
     * @property {number} k_EMsgGCGameMatchSignOutPermissionResponse=7382 k_EMsgGCGameMatchSignOutPermissionResponse value
     * @property {number} k_EMsgDOTAChatChannelMemberUpdate=7383 k_EMsgDOTAChatChannelMemberUpdate value
     * @property {number} k_EMsgDOTAAwardEventPoints=7384 k_EMsgDOTAAwardEventPoints value
     * @property {number} k_EMsgDOTAGetEventPoints=7387 k_EMsgDOTAGetEventPoints value
     * @property {number} k_EMsgDOTAGetEventPointsResponse=7388 k_EMsgDOTAGetEventPointsResponse value
     * @property {number} k_EMsgDOTASendFriendRecruits=7393 k_EMsgDOTASendFriendRecruits value
     * @property {number} k_EMsgDOTAFriendRecruitsRequest=7394 k_EMsgDOTAFriendRecruitsRequest value
     * @property {number} k_EMsgDOTAFriendRecruitsResponse=7395 k_EMsgDOTAFriendRecruitsResponse value
     * @property {number} k_EMsgDOTAFriendRecruitInviteAcceptDecline=7396 k_EMsgDOTAFriendRecruitInviteAcceptDecline value
     * @property {number} k_EMsgGCPartyLeaderWatchGamePrompt=7397 k_EMsgGCPartyLeaderWatchGamePrompt value
     * @property {number} k_EMsgDOTAFrostivusTimeElapsed=7398 k_EMsgDOTAFrostivusTimeElapsed value
     * @property {number} k_EMsgDOTALiveLeagueGameUpdate=7402 k_EMsgDOTALiveLeagueGameUpdate value
     * @property {number} k_EMsgDOTAChatGetUserList=7403 k_EMsgDOTAChatGetUserList value
     * @property {number} k_EMsgDOTAChatGetUserListResponse=7404 k_EMsgDOTAChatGetUserListResponse value
     * @property {number} k_EMsgGCCompendiumSetSelection=7405 k_EMsgGCCompendiumSetSelection value
     * @property {number} k_EMsgGCCompendiumDataRequest=7406 k_EMsgGCCompendiumDataRequest value
     * @property {number} k_EMsgGCCompendiumDataResponse=7407 k_EMsgGCCompendiumDataResponse value
     * @property {number} k_EMsgDOTAGetPlayerMatchHistory=7408 k_EMsgDOTAGetPlayerMatchHistory value
     * @property {number} k_EMsgDOTAGetPlayerMatchHistoryResponse=7409 k_EMsgDOTAGetPlayerMatchHistoryResponse value
     * @property {number} k_EMsgGCToGCMatchmakingAddParty=7410 k_EMsgGCToGCMatchmakingAddParty value
     * @property {number} k_EMsgGCToGCMatchmakingRemoveParty=7411 k_EMsgGCToGCMatchmakingRemoveParty value
     * @property {number} k_EMsgGCToGCMatchmakingRemoveAllParties=7412 k_EMsgGCToGCMatchmakingRemoveAllParties value
     * @property {number} k_EMsgGCToGCMatchmakingMatchFound=7413 k_EMsgGCToGCMatchmakingMatchFound value
     * @property {number} k_EMsgGCToGCUpdateMatchManagementStats=7414 k_EMsgGCToGCUpdateMatchManagementStats value
     * @property {number} k_EMsgGCToGCUpdateMatchmakingStats=7415 k_EMsgGCToGCUpdateMatchmakingStats value
     * @property {number} k_EMsgGCToServerPingRequest=7416 k_EMsgGCToServerPingRequest value
     * @property {number} k_EMsgGCToServerPingResponse=7417 k_EMsgGCToServerPingResponse value
     * @property {number} k_EMsgGCToServerConsoleCommand=7418 k_EMsgGCToServerConsoleCommand value
     * @property {number} k_EMsgGCMakeOffering=7423 k_EMsgGCMakeOffering value
     * @property {number} k_EMsgGCRequestOfferings=7424 k_EMsgGCRequestOfferings value
     * @property {number} k_EMsgGCRequestOfferingsResponse=7425 k_EMsgGCRequestOfferingsResponse value
     * @property {number} k_EMsgGCToGCProcessMatchLeaver=7426 k_EMsgGCToGCProcessMatchLeaver value
     * @property {number} k_EMsgGCNotificationsRequest=7427 k_EMsgGCNotificationsRequest value
     * @property {number} k_EMsgGCNotificationsResponse=7428 k_EMsgGCNotificationsResponse value
     * @property {number} k_EMsgGCToGCModifyNotification=7429 k_EMsgGCToGCModifyNotification value
     * @property {number} k_EMsgGCToGCSetNewNotifications=7430 k_EMsgGCToGCSetNewNotifications value
     * @property {number} k_EMsgGCLeagueAdminList=7434 k_EMsgGCLeagueAdminList value
     * @property {number} k_EMsgGCNotificationsMarkReadRequest=7435 k_EMsgGCNotificationsMarkReadRequest value
     * @property {number} k_EMsgGCFantasyMessageAdd=7436 k_EMsgGCFantasyMessageAdd value
     * @property {number} k_EMsgGCFantasyMessagesRequest=7437 k_EMsgGCFantasyMessagesRequest value
     * @property {number} k_EMsgGCFantasyMessagesResponse=7438 k_EMsgGCFantasyMessagesResponse value
     * @property {number} k_EMsgGCFantasyScheduledMatchesRequest=7439 k_EMsgGCFantasyScheduledMatchesRequest value
     * @property {number} k_EMsgGCFantasyScheduledMatchesResponse=7440 k_EMsgGCFantasyScheduledMatchesResponse value
     * @property {number} k_EMsgGCEventGameCreate=7443 k_EMsgGCEventGameCreate value
     * @property {number} k_EMsgGCPerfectWorldUserLookupRequest=7444 k_EMsgGCPerfectWorldUserLookupRequest value
     * @property {number} k_EMsgGCPerfectWorldUserLookupResponse=7445 k_EMsgGCPerfectWorldUserLookupResponse value
     * @property {number} k_EMsgGCFantasyRemoveOwner=7448 k_EMsgGCFantasyRemoveOwner value
     * @property {number} k_EMsgGCFantasyRemoveOwnerResponse=7449 k_EMsgGCFantasyRemoveOwnerResponse value
     * @property {number} k_EMsgGCRequestBatchPlayerResources=7450 k_EMsgGCRequestBatchPlayerResources value
     * @property {number} k_EMsgGCRequestBatchPlayerResourcesResponse=7451 k_EMsgGCRequestBatchPlayerResourcesResponse value
     * @property {number} k_EMsgGCToGCSendUpdateLeagues=7452 k_EMsgGCToGCSendUpdateLeagues value
     * @property {number} k_EMsgGCCompendiumSetSelectionResponse=7453 k_EMsgGCCompendiumSetSelectionResponse value
     * @property {number} k_EMsgGCPlayerInfoRequest=7454 k_EMsgGCPlayerInfoRequest value
     * @property {number} k_EMsgGCPlayerInfo=7455 k_EMsgGCPlayerInfo value
     * @property {number} k_EMsgGCPlayerInfoSubmit=7456 k_EMsgGCPlayerInfoSubmit value
     * @property {number} k_EMsgGCPlayerInfoSubmitResponse=7457 k_EMsgGCPlayerInfoSubmitResponse value
     * @property {number} k_EMsgGCToGCGetAccountLevel=7458 k_EMsgGCToGCGetAccountLevel value
     * @property {number} k_EMsgGCToGCGetAccountLevelResponse=7459 k_EMsgGCToGCGetAccountLevelResponse value
     * @property {number} k_EMsgGCToGCGetAccountPartner=7460 k_EMsgGCToGCGetAccountPartner value
     * @property {number} k_EMsgGCToGCGetAccountPartnerResponse=7461 k_EMsgGCToGCGetAccountPartnerResponse value
     * @property {number} k_EMsgDOTAGetWeekendTourneySchedule=7464 k_EMsgDOTAGetWeekendTourneySchedule value
     * @property {number} k_EMsgDOTAWeekendTourneySchedule=7465 k_EMsgDOTAWeekendTourneySchedule value
     * @property {number} k_EMsgGCJoinableCustomGameModesRequest=7466 k_EMsgGCJoinableCustomGameModesRequest value
     * @property {number} k_EMsgGCJoinableCustomGameModesResponse=7467 k_EMsgGCJoinableCustomGameModesResponse value
     * @property {number} k_EMsgGCJoinableCustomLobbiesRequest=7468 k_EMsgGCJoinableCustomLobbiesRequest value
     * @property {number} k_EMsgGCJoinableCustomLobbiesResponse=7469 k_EMsgGCJoinableCustomLobbiesResponse value
     * @property {number} k_EMsgGCQuickJoinCustomLobby=7470 k_EMsgGCQuickJoinCustomLobby value
     * @property {number} k_EMsgGCQuickJoinCustomLobbyResponse=7471 k_EMsgGCQuickJoinCustomLobbyResponse value
     * @property {number} k_EMsgGCToGCGrantEventPointAction=7472 k_EMsgGCToGCGrantEventPointAction value
     * @property {number} k_EMsgServerGrantSurveyPermission=7475 k_EMsgServerGrantSurveyPermission value
     * @property {number} k_EMsgServerGrantSurveyPermissionResponse=7476 k_EMsgServerGrantSurveyPermissionResponse value
     * @property {number} k_EMsgClientProvideSurveyResult=7477 k_EMsgClientProvideSurveyResult value
     * @property {number} k_EMsgGCToGCSetCompendiumSelection=7478 k_EMsgGCToGCSetCompendiumSelection value
     * @property {number} k_EMsgGCToGCUpdateTI4HeroQuest=7480 k_EMsgGCToGCUpdateTI4HeroQuest value
     * @property {number} k_EMsgGCCompendiumDataChanged=7481 k_EMsgGCCompendiumDataChanged value
     * @property {number} k_EMsgDOTAFantasyLeagueFindRequest=7482 k_EMsgDOTAFantasyLeagueFindRequest value
     * @property {number} k_EMsgDOTAFantasyLeagueFindResponse=7483 k_EMsgDOTAFantasyLeagueFindResponse value
     * @property {number} k_EMsgGCHasItemQuery=7484 k_EMsgGCHasItemQuery value
     * @property {number} k_EMsgGCHasItemResponse=7485 k_EMsgGCHasItemResponse value
     * @property {number} k_EMsgGCConsumeFantasyTicket=7486 k_EMsgGCConsumeFantasyTicket value
     * @property {number} k_EMsgGCConsumeFantasyTicketFailure=7487 k_EMsgGCConsumeFantasyTicketFailure value
     * @property {number} k_EMsgGCToGCGrantEventPointActionMsg=7488 k_EMsgGCToGCGrantEventPointActionMsg value
     * @property {number} k_EMsgClientToGCTrackDialogResult=7489 k_EMsgClientToGCTrackDialogResult value
     * @property {number} k_EMsgGCFantasyLeaveLeagueRequest=7490 k_EMsgGCFantasyLeaveLeagueRequest value
     * @property {number} k_EMsgGCFantasyLeaveLeagueResponse=7491 k_EMsgGCFantasyLeaveLeagueResponse value
     * @property {number} k_EMsgGCToGCGetCompendiumSelections=7492 k_EMsgGCToGCGetCompendiumSelections value
     * @property {number} k_EMsgGCToGCGetCompendiumSelectionsResponse=7493 k_EMsgGCToGCGetCompendiumSelectionsResponse value
     * @property {number} k_EMsgServerToGCMatchConnectionStats=7494 k_EMsgServerToGCMatchConnectionStats value
     * @property {number} k_EMsgGCToClientTournamentItemDrop=7495 k_EMsgGCToClientTournamentItemDrop value
     * @property {number} k_EMsgSQLDelayedGrantLeagueDrop=7496 k_EMsgSQLDelayedGrantLeagueDrop value
     * @property {number} k_EMsgServerGCUpdateSpectatorCount=7497 k_EMsgServerGCUpdateSpectatorCount value
     * @property {number} k_EMsgGCFantasyPlayerScoreDetailsRequest=7499 k_EMsgGCFantasyPlayerScoreDetailsRequest value
     * @property {number} k_EMsgGCFantasyPlayerScoreDetailsResponse=7500 k_EMsgGCFantasyPlayerScoreDetailsResponse value
     * @property {number} k_EMsgGCToGCEmoticonUnlock=7501 k_EMsgGCToGCEmoticonUnlock value
     * @property {number} k_EMsgSignOutDraftInfo=7502 k_EMsgSignOutDraftInfo value
     * @property {number} k_EMsgClientToGCEmoticonDataRequest=7503 k_EMsgClientToGCEmoticonDataRequest value
     * @property {number} k_EMsgGCToClientEmoticonData=7504 k_EMsgGCToClientEmoticonData value
     * @property {number} k_EMsgGCPracticeLobbyToggleBroadcastChannelCameramanStatus=7505 k_EMsgGCPracticeLobbyToggleBroadcastChannelCameramanStatus value
     * @property {number} k_EMsgGCToGCCreateWeekendTourneyRequest=7506 k_EMsgGCToGCCreateWeekendTourneyRequest value
     * @property {number} k_EMsgGCToGCCreateWeekendTourneyResponse=7507 k_EMsgGCToGCCreateWeekendTourneyResponse value
     * @property {number} k_EMsgClientToGCSetAdditionalEquips=7513 k_EMsgClientToGCSetAdditionalEquips value
     * @property {number} k_EMsgClientToGCGetAdditionalEquips=7514 k_EMsgClientToGCGetAdditionalEquips value
     * @property {number} k_EMsgClientToGCGetAdditionalEquipsResponse=7515 k_EMsgClientToGCGetAdditionalEquipsResponse value
     * @property {number} k_EMsgServerToGCGetAdditionalEquips=7516 k_EMsgServerToGCGetAdditionalEquips value
     * @property {number} k_EMsgServerToGCGetAdditionalEquipsResponse=7517 k_EMsgServerToGCGetAdditionalEquipsResponse value
     * @property {number} k_EMsgDOTARedeemItem=7518 k_EMsgDOTARedeemItem value
     * @property {number} k_EMsgDOTARedeemItemResponse=7519 k_EMsgDOTARedeemItemResponse value
     * @property {number} k_EMsgSQLGCToGCGrantAllHeroProgress=7520 k_EMsgSQLGCToGCGrantAllHeroProgress value
     * @property {number} k_EMsgClientToGCGetAllHeroProgress=7521 k_EMsgClientToGCGetAllHeroProgress value
     * @property {number} k_EMsgClientToGCGetAllHeroProgressResponse=7522 k_EMsgClientToGCGetAllHeroProgressResponse value
     * @property {number} k_EMsgGCToGCGetServerForClient=7523 k_EMsgGCToGCGetServerForClient value
     * @property {number} k_EMsgGCToGCGetServerForClientResponse=7524 k_EMsgGCToGCGetServerForClientResponse value
     * @property {number} k_EMsgSQLProcessTournamentGameOutcome=7525 k_EMsgSQLProcessTournamentGameOutcome value
     * @property {number} k_EMsgSQLGrantTrophyToAccount=7526 k_EMsgSQLGrantTrophyToAccount value
     * @property {number} k_EMsgClientToGCGetTrophyList=7527 k_EMsgClientToGCGetTrophyList value
     * @property {number} k_EMsgClientToGCGetTrophyListResponse=7528 k_EMsgClientToGCGetTrophyListResponse value
     * @property {number} k_EMsgGCToClientTrophyAwarded=7529 k_EMsgGCToClientTrophyAwarded value
     * @property {number} k_EMsgGCGameBotMatchSignOut=7530 k_EMsgGCGameBotMatchSignOut value
     * @property {number} k_EMsgGCGameBotMatchSignOutPermissionRequest=7531 k_EMsgGCGameBotMatchSignOutPermissionRequest value
     * @property {number} k_EMsgSignOutBotInfo=7532 k_EMsgSignOutBotInfo value
     * @property {number} k_EMsgGCToGCUpdateProfileCards=7533 k_EMsgGCToGCUpdateProfileCards value
     * @property {number} k_EMsgClientToGCGetProfileCard=7534 k_EMsgClientToGCGetProfileCard value
     * @property {number} k_EMsgClientToGCGetProfileCardResponse=7535 k_EMsgClientToGCGetProfileCardResponse value
     * @property {number} k_EMsgServerToGCGetProfileCard=7536 k_EMsgServerToGCGetProfileCard value
     * @property {number} k_EMsgServerToGCGetProfileCardResponse=7537 k_EMsgServerToGCGetProfileCardResponse value
     * @property {number} k_EMsgClientToGCSetProfileCardSlots=7538 k_EMsgClientToGCSetProfileCardSlots value
     * @property {number} k_EMsgGCToClientProfileCardUpdated=7539 k_EMsgGCToClientProfileCardUpdated value
     * @property {number} k_EMsgServerToGCVictoryPredictions=7540 k_EMsgServerToGCVictoryPredictions value
     * @property {number} k_EMsgClientToGCMarkNotificationListRead=7542 k_EMsgClientToGCMarkNotificationListRead value
     * @property {number} k_EMsgServerToGCSuspiciousActivity=7544 k_EMsgServerToGCSuspiciousActivity value
     * @property {number} k_EMsgSignOutCommunicationSummary=7545 k_EMsgSignOutCommunicationSummary value
     * @property {number} k_EMsgServerToGCRequestStatus_Response=7546 k_EMsgServerToGCRequestStatus_Response value
     * @property {number} k_EMsgClientToGCCreateHeroStatue=7547 k_EMsgClientToGCCreateHeroStatue value
     * @property {number} k_EMsgGCToClientHeroStatueCreateResult=7548 k_EMsgGCToClientHeroStatueCreateResult value
     * @property {number} k_EMsgGCGCToLANServerRelayConnect=7549 k_EMsgGCGCToLANServerRelayConnect value
     * @property {number} k_EMsgServerToGCGetIngameEventData=7551 k_EMsgServerToGCGetIngameEventData value
     * @property {number} k_EMsgGCToGCUpdateIngameEventDataBroadcast=7552 k_EMsgGCToGCUpdateIngameEventDataBroadcast value
     * @property {number} k_EMsgGCToServerIngameEventData_OraclePA=7553 k_EMsgGCToServerIngameEventData_OraclePA value
     * @property {number} k_EMsgServerToGCReportKillSummaries=7554 k_EMsgServerToGCReportKillSummaries value
     * @property {number} k_EMsgGCToGCReportKillSummaries=7555 k_EMsgGCToGCReportKillSummaries value
     * @property {number} k_EMsgGCToGCUpdateAssassinMinigame=7556 k_EMsgGCToGCUpdateAssassinMinigame value
     * @property {number} k_EMsgGCToGCFantasySetMatchLeague=7557 k_EMsgGCToGCFantasySetMatchLeague value
     * @property {number} k_EMsgGCToGCUpdatePlayerPredictions=7561 k_EMsgGCToGCUpdatePlayerPredictions value
     * @property {number} k_EMsgGCToServerPredictionResult=7562 k_EMsgGCToServerPredictionResult value
     * @property {number} k_EMsgServerToGCSignoutAwardAdditionalDrops=7563 k_EMsgServerToGCSignoutAwardAdditionalDrops value
     * @property {number} k_EMsgGCToGCSignoutAwardAdditionalDrops=7564 k_EMsgGCToGCSignoutAwardAdditionalDrops value
     * @property {number} k_EMsgGCToClientEventStatusChanged=7565 k_EMsgGCToClientEventStatusChanged value
     * @property {number} k_EMsgGCHasItemDefsQuery=7566 k_EMsgGCHasItemDefsQuery value
     * @property {number} k_EMsgGCHasItemDefsResponse=7567 k_EMsgGCHasItemDefsResponse value
     * @property {number} k_EMsgGCToGCReplayMonitorValidateReplay=7569 k_EMsgGCToGCReplayMonitorValidateReplay value
     * @property {number} k_EMsgLobbyEventPoints=7572 k_EMsgLobbyEventPoints value
     * @property {number} k_EMsgGCToGCGetCustomGameTickets=7573 k_EMsgGCToGCGetCustomGameTickets value
     * @property {number} k_EMsgGCToGCGetCustomGameTicketsResponse=7574 k_EMsgGCToGCGetCustomGameTicketsResponse value
     * @property {number} k_EMsgGCToGCCustomGamePlayed=7576 k_EMsgGCToGCCustomGamePlayed value
     * @property {number} k_EMsgGCToGCGrantEventPointsToUser=7577 k_EMsgGCToGCGrantEventPointsToUser value
     * @property {number} k_EMsgGCToGCSetEventMMPanicFlushTime=7578 k_EMsgGCToGCSetEventMMPanicFlushTime value
     * @property {number} k_EMsgGameserverCrashReport=7579 k_EMsgGameserverCrashReport value
     * @property {number} k_EMsgGameserverCrashReportResponse=7580 k_EMsgGameserverCrashReportResponse value
     * @property {number} k_EMsgGCToClientSteamDatagramTicket=7581 k_EMsgGCToClientSteamDatagramTicket value
     * @property {number} k_EMsgGCToGCGrantEventOwnership=7582 k_EMsgGCToGCGrantEventOwnership value
     * @property {number} k_EMsgGCToGCSendAccountsEventPoints=7583 k_EMsgGCToGCSendAccountsEventPoints value
     * @property {number} k_EMsgClientToGCRerollPlayerChallenge=7584 k_EMsgClientToGCRerollPlayerChallenge value
     * @property {number} k_EMsgServerToGCRerollPlayerChallenge=7585 k_EMsgServerToGCRerollPlayerChallenge value
     * @property {number} k_EMsgGCRerollPlayerChallengeResponse=7586 k_EMsgGCRerollPlayerChallengeResponse value
     * @property {number} k_EMsgSignOutUpdatePlayerChallenge=7587 k_EMsgSignOutUpdatePlayerChallenge value
     * @property {number} k_EMsgClientToGCSetPartyLeader=7588 k_EMsgClientToGCSetPartyLeader value
     * @property {number} k_EMsgClientToGCCancelPartyInvites=7589 k_EMsgClientToGCCancelPartyInvites value
     * @property {number} k_EMsgGCToGCMasterReloadAccount=7590 k_EMsgGCToGCMasterReloadAccount value
     * @property {number} k_EMsgSQLGrantLeagueMatchToTicketHolders=7592 k_EMsgSQLGrantLeagueMatchToTicketHolders value
     * @property {number} k_EMsgClientToGCSetAdditionalEquipsResponse=7593 k_EMsgClientToGCSetAdditionalEquipsResponse value
     * @property {number} k_EMsgGCToGCEmoticonUnlockNoRollback=7594 k_EMsgGCToGCEmoticonUnlockNoRollback value
     * @property {number} k_EMsgGCToGCGetCompendiumFanfare=7595 k_EMsgGCToGCGetCompendiumFanfare value
     * @property {number} k_EMsgGCToGCChatNewUserSession=7598 k_EMsgGCToGCChatNewUserSession value
     * @property {number} k_EMsgClientToGCApplyGemCombiner=7603 k_EMsgClientToGCApplyGemCombiner value
     * @property {number} k_EMsgClientToGCDOTACreateStaticRecipe=7604 k_EMsgClientToGCDOTACreateStaticRecipe value
     * @property {number} k_EMsgClientToGCDOTACreateStaticRecipeResponse=7605 k_EMsgClientToGCDOTACreateStaticRecipeResponse value
     * @property {number} k_EMsgClientToGCGetAllHeroOrder=7606 k_EMsgClientToGCGetAllHeroOrder value
     * @property {number} k_EMsgClientToGCGetAllHeroOrderResponse=7607 k_EMsgClientToGCGetAllHeroOrderResponse value
     * @property {number} k_EMsgSQLGCToGCGrantBadgePoints=7608 k_EMsgSQLGCToGCGrantBadgePoints value
     * @property {number} k_EMsgGCToGCGetAccountMatchStatus=7609 k_EMsgGCToGCGetAccountMatchStatus value
     * @property {number} k_EMsgGCToGCGetAccountMatchStatusResponse=7610 k_EMsgGCToGCGetAccountMatchStatusResponse value
     * @property {number} k_EMsgGCToGCCheckOwnsEntireEmoticonRange=7611 k_EMsgGCToGCCheckOwnsEntireEmoticonRange value
     * @property {number} k_EMsgGCToGCCheckOwnsEntireEmoticonRangeResponse=7612 k_EMsgGCToGCCheckOwnsEntireEmoticonRangeResponse value
     * @property {number} k_EMsgClientToGCRecycleHeroRelic=7619 k_EMsgClientToGCRecycleHeroRelic value
     * @property {number} k_EMsgClientToGCRecycleHeroRelicResponse=7620 k_EMsgClientToGCRecycleHeroRelicResponse value
     * @property {number} k_EMsgGCToGCRevokeEventOwnership=7621 k_EMsgGCToGCRevokeEventOwnership value
     * @property {number} k_EMsgGCToGCUnlockEventPointSpending=7622 k_EMsgGCToGCUnlockEventPointSpending value
     * @property {number} k_EMsgGCToClientRequestLaneSelection=7623 k_EMsgGCToClientRequestLaneSelection value
     * @property {number} k_EMsgGCToClientRequestLaneSelectionResponse=7624 k_EMsgGCToClientRequestLaneSelectionResponse value
     * @property {number} k_EMsgServerToGCCavernCrawlIsHeroActive=7625 k_EMsgServerToGCCavernCrawlIsHeroActive value
     * @property {number} k_EMsgServerToGCCavernCrawlIsHeroActiveResponse=7626 k_EMsgServerToGCCavernCrawlIsHeroActiveResponse value
     * @property {number} k_EMsgClientToGCPlayerCardSpecificPurchaseRequest=7627 k_EMsgClientToGCPlayerCardSpecificPurchaseRequest value
     * @property {number} k_EMsgClientToGCPlayerCardSpecificPurchaseResponse=7628 k_EMsgClientToGCPlayerCardSpecificPurchaseResponse value
     * @property {number} k_EMsgGCtoServerTensorflowInstance=7629 k_EMsgGCtoServerTensorflowInstance value
     * @property {number} k_EMsgSQLSetIsLeagueAdmin=7630 k_EMsgSQLSetIsLeagueAdmin value
     * @property {number} k_EMsgGCToGCGetLiveLeagueMatches=7631 k_EMsgGCToGCGetLiveLeagueMatches value
     * @property {number} k_EMsgGCToGCGetLiveLeagueMatchesResponse=7632 k_EMsgGCToGCGetLiveLeagueMatchesResponse value
     * @property {number} k_EMsgDOTALeagueInfoListAdminsRequest=7633 k_EMsgDOTALeagueInfoListAdminsRequest value
     * @property {number} k_EMsgDOTALeagueInfoListAdminsReponse=7634 k_EMsgDOTALeagueInfoListAdminsReponse value
     * @property {number} k_EMsgGCToGCLeagueMatchStarted=7645 k_EMsgGCToGCLeagueMatchStarted value
     * @property {number} k_EMsgGCToGCLeagueMatchCompleted=7646 k_EMsgGCToGCLeagueMatchCompleted value
     * @property {number} k_EMsgGCToGCLeagueMatchStartedResponse=7647 k_EMsgGCToGCLeagueMatchStartedResponse value
     * @property {number} k_EMsgDOTALeagueNodeRequest=7648 k_EMsgDOTALeagueNodeRequest value
     * @property {number} k_EMsgDOTALeagueNodeResponse=7649 k_EMsgDOTALeagueNodeResponse value
     * @property {number} k_EMsgDOTALeagueAvailableLobbyNodesRequest=7650 k_EMsgDOTALeagueAvailableLobbyNodesRequest value
     * @property {number} k_EMsgDOTALeagueAvailableLobbyNodes=7651 k_EMsgDOTALeagueAvailableLobbyNodes value
     * @property {number} k_EMsgGCToGCLeagueRequest=7652 k_EMsgGCToGCLeagueRequest value
     * @property {number} k_EMsgGCToGCLeagueResponse=7653 k_EMsgGCToGCLeagueResponse value
     * @property {number} k_EMsgGCToGCLeagueNodeGroupRequest=7654 k_EMsgGCToGCLeagueNodeGroupRequest value
     * @property {number} k_EMsgGCToGCLeagueNodeGroupResponse=7655 k_EMsgGCToGCLeagueNodeGroupResponse value
     * @property {number} k_EMsgGCToGCLeagueNodeRequest=7656 k_EMsgGCToGCLeagueNodeRequest value
     * @property {number} k_EMsgGCToGCLeagueNodeResponse=7657 k_EMsgGCToGCLeagueNodeResponse value
     * @property {number} k_EMsgGCToGCRealtimeStatsTerseRequest=7658 k_EMsgGCToGCRealtimeStatsTerseRequest value
     * @property {number} k_EMsgGCToGCRealtimeStatsTerseResponse=7659 k_EMsgGCToGCRealtimeStatsTerseResponse value
     * @property {number} k_EMsgGCToGCGetTopMatchesRequest=7660 k_EMsgGCToGCGetTopMatchesRequest value
     * @property {number} k_EMsgGCToGCGetTopMatchesResponse=7661 k_EMsgGCToGCGetTopMatchesResponse value
     * @property {number} k_EMsgClientToGCGetFilteredPlayers=7662 k_EMsgClientToGCGetFilteredPlayers value
     * @property {number} k_EMsgGCToClientGetFilteredPlayersResponse=7663 k_EMsgGCToClientGetFilteredPlayersResponse value
     * @property {number} k_EMsgClientToGCRemoveFilteredPlayer=7664 k_EMsgClientToGCRemoveFilteredPlayer value
     * @property {number} k_EMsgGCToClientRemoveFilteredPlayerResponse=7665 k_EMsgGCToClientRemoveFilteredPlayerResponse value
     * @property {number} k_EMsgGCToClientPlayerBeaconState=7666 k_EMsgGCToClientPlayerBeaconState value
     * @property {number} k_EMsgGCToClientPartyBeaconUpdate=7667 k_EMsgGCToClientPartyBeaconUpdate value
     * @property {number} k_EMsgGCToClientPartySearchInvite=7668 k_EMsgGCToClientPartySearchInvite value
     * @property {number} k_EMsgClientToGCUpdatePartyBeacon=7669 k_EMsgClientToGCUpdatePartyBeacon value
     * @property {number} k_EMsgClientToGCRequestActiveBeaconParties=7670 k_EMsgClientToGCRequestActiveBeaconParties value
     * @property {number} k_EMsgGCToClientRequestActiveBeaconPartiesResponse=7671 k_EMsgGCToClientRequestActiveBeaconPartiesResponse value
     * @property {number} k_EMsgClientToGCManageFavorites=7672 k_EMsgClientToGCManageFavorites value
     * @property {number} k_EMsgGCToClientManageFavoritesResponse=7673 k_EMsgGCToClientManageFavoritesResponse value
     * @property {number} k_EMsgClientToGCJoinPartyFromBeacon=7674 k_EMsgClientToGCJoinPartyFromBeacon value
     * @property {number} k_EMsgGCToClientJoinPartyFromBeaconResponse=7675 k_EMsgGCToClientJoinPartyFromBeaconResponse value
     * @property {number} k_EMsgClientToGCGetFavoritePlayers=7676 k_EMsgClientToGCGetFavoritePlayers value
     * @property {number} k_EMsgGCToClientGetFavoritePlayersResponse=7677 k_EMsgGCToClientGetFavoritePlayersResponse value
     * @property {number} k_EMsgClientToGCVerifyFavoritePlayers=7678 k_EMsgClientToGCVerifyFavoritePlayers value
     * @property {number} k_EMsgGCToClientVerifyFavoritePlayersResponse=7679 k_EMsgGCToClientVerifyFavoritePlayersResponse value
     * @property {number} k_EMsgGCToClientPartySearchInvites=7680 k_EMsgGCToClientPartySearchInvites value
     * @property {number} k_EMsgGCToClientRequestMMInfo=7681 k_EMsgGCToClientRequestMMInfo value
     * @property {number} k_EMsgClientToGCMMInfo=7682 k_EMsgClientToGCMMInfo value
     * @property {number} k_EMsgSignOutTextMuteInfo=7683 k_EMsgSignOutTextMuteInfo value
     * @property {number} k_EMsgGCDev_GrantWarKill=8001 k_EMsgGCDev_GrantWarKill value
     * @property {number} k_EMsgServerToGCLockCharmTrading=8004 k_EMsgServerToGCLockCharmTrading value
     * @property {number} k_EMsgClientToGCPlayerStatsRequest=8006 k_EMsgClientToGCPlayerStatsRequest value
     * @property {number} k_EMsgGCToClientPlayerStatsResponse=8007 k_EMsgGCToClientPlayerStatsResponse value
     * @property {number} k_EMsgGCClearPracticeLobbyTeam=8008 k_EMsgGCClearPracticeLobbyTeam value
     * @property {number} k_EMsgClientToGCFindTopSourceTVGames=8009 k_EMsgClientToGCFindTopSourceTVGames value
     * @property {number} k_EMsgGCToClientFindTopSourceTVGamesResponse=8010 k_EMsgGCToClientFindTopSourceTVGamesResponse value
     * @property {number} k_EMsgGCLobbyList=8011 k_EMsgGCLobbyList value
     * @property {number} k_EMsgGCLobbyListResponse=8012 k_EMsgGCLobbyListResponse value
     * @property {number} k_EMsgGCPlayerStatsMatchSignOut=8013 k_EMsgGCPlayerStatsMatchSignOut value
     * @property {number} k_EMsgClientToGCCustomGamePlayerCountRequest=8014 k_EMsgClientToGCCustomGamePlayerCountRequest value
     * @property {number} k_EMsgGCToClientCustomGamePlayerCountResponse=8015 k_EMsgGCToClientCustomGamePlayerCountResponse value
     * @property {number} k_EMsgClientToGCSocialFeedPostCommentRequest=8016 k_EMsgClientToGCSocialFeedPostCommentRequest value
     * @property {number} k_EMsgGCToClientSocialFeedPostCommentResponse=8017 k_EMsgGCToClientSocialFeedPostCommentResponse value
     * @property {number} k_EMsgClientToGCCustomGamesFriendsPlayedRequest=8018 k_EMsgClientToGCCustomGamesFriendsPlayedRequest value
     * @property {number} k_EMsgGCToClientCustomGamesFriendsPlayedResponse=8019 k_EMsgGCToClientCustomGamesFriendsPlayedResponse value
     * @property {number} k_EMsgClientToGCFriendsPlayedCustomGameRequest=8020 k_EMsgClientToGCFriendsPlayedCustomGameRequest value
     * @property {number} k_EMsgGCToClientFriendsPlayedCustomGameResponse=8021 k_EMsgGCToClientFriendsPlayedCustomGameResponse value
     * @property {number} k_EMsgGCTopCustomGamesList=8024 k_EMsgGCTopCustomGamesList value
     * @property {number} k_EMsgClientToGCSetPartyOpen=8029 k_EMsgClientToGCSetPartyOpen value
     * @property {number} k_EMsgClientToGCMergePartyInvite=8030 k_EMsgClientToGCMergePartyInvite value
     * @property {number} k_EMsgGCToClientMergeGroupInviteReply=8031 k_EMsgGCToClientMergeGroupInviteReply value
     * @property {number} k_EMsgClientToGCMergePartyResponse=8032 k_EMsgClientToGCMergePartyResponse value
     * @property {number} k_EMsgGCToClientMergePartyResponseReply=8033 k_EMsgGCToClientMergePartyResponseReply value
     * @property {number} k_EMsgClientToGCGetProfileCardStats=8034 k_EMsgClientToGCGetProfileCardStats value
     * @property {number} k_EMsgClientToGCGetProfileCardStatsResponse=8035 k_EMsgClientToGCGetProfileCardStatsResponse value
     * @property {number} k_EMsgClientToGCTopLeagueMatchesRequest=8036 k_EMsgClientToGCTopLeagueMatchesRequest value
     * @property {number} k_EMsgClientToGCTopFriendMatchesRequest=8037 k_EMsgClientToGCTopFriendMatchesRequest value
     * @property {number} k_EMsgGCToClientProfileCardStatsUpdated=8040 k_EMsgGCToClientProfileCardStatsUpdated value
     * @property {number} k_EMsgServerToGCRealtimeStats=8041 k_EMsgServerToGCRealtimeStats value
     * @property {number} k_EMsgGCToServerRealtimeStatsStartStop=8042 k_EMsgGCToServerRealtimeStatsStartStop value
     * @property {number} k_EMsgGCToGCGetServersForClients=8045 k_EMsgGCToGCGetServersForClients value
     * @property {number} k_EMsgGCToGCGetServersForClientsResponse=8046 k_EMsgGCToGCGetServersForClientsResponse value
     * @property {number} k_EMsgGCPracticeLobbyKickFromTeam=8047 k_EMsgGCPracticeLobbyKickFromTeam value
     * @property {number} k_EMsgDOTAChatGetMemberCount=8048 k_EMsgDOTAChatGetMemberCount value
     * @property {number} k_EMsgDOTAChatGetMemberCountResponse=8049 k_EMsgDOTAChatGetMemberCountResponse value
     * @property {number} k_EMsgClientToGCSocialFeedPostMessageRequest=8050 k_EMsgClientToGCSocialFeedPostMessageRequest value
     * @property {number} k_EMsgGCToClientSocialFeedPostMessageResponse=8051 k_EMsgGCToClientSocialFeedPostMessageResponse value
     * @property {number} k_EMsgCustomGameListenServerStartedLoading=8052 k_EMsgCustomGameListenServerStartedLoading value
     * @property {number} k_EMsgCustomGameClientFinishedLoading=8053 k_EMsgCustomGameClientFinishedLoading value
     * @property {number} k_EMsgGCPracticeLobbyCloseBroadcastChannel=8054 k_EMsgGCPracticeLobbyCloseBroadcastChannel value
     * @property {number} k_EMsgGCStartFindingMatchResponse=8055 k_EMsgGCStartFindingMatchResponse value
     * @property {number} k_EMsgSQLGCToGCGrantAccountFlag=8057 k_EMsgSQLGCToGCGrantAccountFlag value
     * @property {number} k_EMsgGCToGCGetAccountFlags=8058 k_EMsgGCToGCGetAccountFlags value
     * @property {number} k_EMsgGCToGCGetAccountFlagsResponse=8059 k_EMsgGCToGCGetAccountFlagsResponse value
     * @property {number} k_EMsgSignOutWagerStats=8060 k_EMsgSignOutWagerStats value
     * @property {number} k_EMsgGCToClientTopLeagueMatchesResponse=8061 k_EMsgGCToClientTopLeagueMatchesResponse value
     * @property {number} k_EMsgGCToClientTopFriendMatchesResponse=8062 k_EMsgGCToClientTopFriendMatchesResponse value
     * @property {number} k_EMsgClientToGCMatchesMinimalRequest=8063 k_EMsgClientToGCMatchesMinimalRequest value
     * @property {number} k_EMsgClientToGCMatchesMinimalResponse=8064 k_EMsgClientToGCMatchesMinimalResponse value
     * @property {number} k_EMsgGCToGCGetProfileBadgePoints=8065 k_EMsgGCToGCGetProfileBadgePoints value
     * @property {number} k_EMsgGCToGCGetProfileBadgePointsResponse=8066 k_EMsgGCToGCGetProfileBadgePointsResponse value
     * @property {number} k_EMsgGCToClientChatRegionsEnabled=8067 k_EMsgGCToClientChatRegionsEnabled value
     * @property {number} k_EMsgClientToGCPingData=8068 k_EMsgClientToGCPingData value
     * @property {number} k_EMsgServerToGCMatchDetailsRequest=8069 k_EMsgServerToGCMatchDetailsRequest value
     * @property {number} k_EMsgGCToServerMatchDetailsResponse=8070 k_EMsgGCToServerMatchDetailsResponse value
     * @property {number} k_EMsgGCToGCEnsureAccountInParty=8071 k_EMsgGCToGCEnsureAccountInParty value
     * @property {number} k_EMsgGCToGCEnsureAccountInPartyResponse=8072 k_EMsgGCToGCEnsureAccountInPartyResponse value
     * @property {number} k_EMsgClientToGCGetProfileTickets=8073 k_EMsgClientToGCGetProfileTickets value
     * @property {number} k_EMsgClientToGCGetProfileTicketsResponse=8074 k_EMsgClientToGCGetProfileTicketsResponse value
     * @property {number} k_EMsgGCToClientMatchGroupsVersion=8075 k_EMsgGCToClientMatchGroupsVersion value
     * @property {number} k_EMsgClientToGCH264Unsupported=8076 k_EMsgClientToGCH264Unsupported value
     * @property {number} k_EMsgClientToGCRequestH264Support=8077 k_EMsgClientToGCRequestH264Support value
     * @property {number} k_EMsgClientToGCGetQuestProgress=8078 k_EMsgClientToGCGetQuestProgress value
     * @property {number} k_EMsgClientToGCGetQuestProgressResponse=8079 k_EMsgClientToGCGetQuestProgressResponse value
     * @property {number} k_EMsgSignOutXPCoins=8080 k_EMsgSignOutXPCoins value
     * @property {number} k_EMsgGCToClientMatchSignedOut=8081 k_EMsgGCToClientMatchSignedOut value
     * @property {number} k_EMsgGCGetHeroStatsHistory=8082 k_EMsgGCGetHeroStatsHistory value
     * @property {number} k_EMsgGCGetHeroStatsHistoryResponse=8083 k_EMsgGCGetHeroStatsHistoryResponse value
     * @property {number} k_EMsgClientToGCPrivateChatInvite=8084 k_EMsgClientToGCPrivateChatInvite value
     * @property {number} k_EMsgClientToGCPrivateChatKick=8088 k_EMsgClientToGCPrivateChatKick value
     * @property {number} k_EMsgClientToGCPrivateChatPromote=8089 k_EMsgClientToGCPrivateChatPromote value
     * @property {number} k_EMsgClientToGCPrivateChatDemote=8090 k_EMsgClientToGCPrivateChatDemote value
     * @property {number} k_EMsgGCToClientPrivateChatResponse=8091 k_EMsgGCToClientPrivateChatResponse value
     * @property {number} k_EMsgClientToGCPrivateChatInfoRequest=8092 k_EMsgClientToGCPrivateChatInfoRequest value
     * @property {number} k_EMsgGCToClientPrivateChatInfoResponse=8093 k_EMsgGCToClientPrivateChatInfoResponse value
     * @property {number} k_EMsgClientToGCLatestConductScorecardRequest=8095 k_EMsgClientToGCLatestConductScorecardRequest value
     * @property {number} k_EMsgClientToGCLatestConductScorecard=8096 k_EMsgClientToGCLatestConductScorecard value
     * @property {number} k_EMsgServerToGCPostMatchTip=8097 k_EMsgServerToGCPostMatchTip value
     * @property {number} k_EMsgServerToGCPostMatchTipResponse=8098 k_EMsgServerToGCPostMatchTipResponse value
     * @property {number} k_EMsgClientToGCWageringRequest=8099 k_EMsgClientToGCWageringRequest value
     * @property {number} k_EMsgGCToClientWageringResponse=8100 k_EMsgGCToClientWageringResponse value
     * @property {number} k_EMsgClientToGCEventGoalsRequest=8103 k_EMsgClientToGCEventGoalsRequest value
     * @property {number} k_EMsgClientToGCEventGoalsResponse=8104 k_EMsgClientToGCEventGoalsResponse value
     * @property {number} k_EMsgClientToGCLeaguePredictions=8106 k_EMsgClientToGCLeaguePredictions value
     * @property {number} k_EMsgGCToClientLeaguePredictionsResponse=8107 k_EMsgGCToClientLeaguePredictionsResponse value
     * @property {number} k_EMsgGCToGCLeaguePredictionsUpdate=8108 k_EMsgGCToGCLeaguePredictionsUpdate value
     * @property {number} k_EMsgClientToGCSuspiciousActivity=8109 k_EMsgClientToGCSuspiciousActivity value
     * @property {number} k_EMsgGCToGCAddUserToPostGameChat=8110 k_EMsgGCToGCAddUserToPostGameChat value
     * @property {number} k_EMsgClientToGCHasPlayerVotedForMVP=8111 k_EMsgClientToGCHasPlayerVotedForMVP value
     * @property {number} k_EMsgClientToGCHasPlayerVotedForMVPResponse=8112 k_EMsgClientToGCHasPlayerVotedForMVPResponse value
     * @property {number} k_EMsgClientToGCVoteForMVP=8113 k_EMsgClientToGCVoteForMVP value
     * @property {number} k_EMsgClientToGCVoteForMVPResponse=8114 k_EMsgClientToGCVoteForMVPResponse value
     * @property {number} k_EMsgGCToGCGetEventOwnership=8115 k_EMsgGCToGCGetEventOwnership value
     * @property {number} k_EMsgGCToGCGetEventOwnershipResponse=8116 k_EMsgGCToGCGetEventOwnershipResponse value
     * @property {number} k_EMsgGCToClientAutomatedTournamentStateChange=8117 k_EMsgGCToClientAutomatedTournamentStateChange value
     * @property {number} k_EMsgClientToGCWeekendTourneyOpts=8118 k_EMsgClientToGCWeekendTourneyOpts value
     * @property {number} k_EMsgClientToGCWeekendTourneyOptsResponse=8119 k_EMsgClientToGCWeekendTourneyOptsResponse value
     * @property {number} k_EMsgClientToGCWeekendTourneyLeave=8120 k_EMsgClientToGCWeekendTourneyLeave value
     * @property {number} k_EMsgClientToGCWeekendTourneyLeaveResponse=8121 k_EMsgClientToGCWeekendTourneyLeaveResponse value
     * @property {number} k_EMsgClientToGCTeammateStatsRequest=8124 k_EMsgClientToGCTeammateStatsRequest value
     * @property {number} k_EMsgClientToGCTeammateStatsResponse=8125 k_EMsgClientToGCTeammateStatsResponse value
     * @property {number} k_EMsgClientToGCGetGiftPermissions=8126 k_EMsgClientToGCGetGiftPermissions value
     * @property {number} k_EMsgClientToGCGetGiftPermissionsResponse=8127 k_EMsgClientToGCGetGiftPermissionsResponse value
     * @property {number} k_EMsgClientToGCVoteForArcana=8128 k_EMsgClientToGCVoteForArcana value
     * @property {number} k_EMsgClientToGCVoteForArcanaResponse=8129 k_EMsgClientToGCVoteForArcanaResponse value
     * @property {number} k_EMsgClientToGCRequestArcanaVotesRemaining=8130 k_EMsgClientToGCRequestArcanaVotesRemaining value
     * @property {number} k_EMsgClientToGCRequestArcanaVotesRemainingResponse=8131 k_EMsgClientToGCRequestArcanaVotesRemainingResponse value
     * @property {number} k_EMsgGCTransferTeamAdminResponse=8132 k_EMsgGCTransferTeamAdminResponse value
     * @property {number} k_EMsgGCToClientTeamInfo=8135 k_EMsgGCToClientTeamInfo value
     * @property {number} k_EMsgGCToClientTeamsInfo=8136 k_EMsgGCToClientTeamsInfo value
     * @property {number} k_EMsgClientToGCMyTeamInfoRequest=8137 k_EMsgClientToGCMyTeamInfoRequest value
     * @property {number} k_EMsgClientToGCPublishUserStat=8140 k_EMsgClientToGCPublishUserStat value
     * @property {number} k_EMsgGCToGCSignoutSpendWager=8141 k_EMsgGCToGCSignoutSpendWager value
     * @property {number} k_EMsgGCSubmitLobbyMVPVote=8144 k_EMsgGCSubmitLobbyMVPVote value
     * @property {number} k_EMsgGCSubmitLobbyMVPVoteResponse=8145 k_EMsgGCSubmitLobbyMVPVoteResponse value
     * @property {number} k_EMsgSignOutCommunityGoalProgress=8150 k_EMsgSignOutCommunityGoalProgress value
     * @property {number} k_EMsgGCToClientLobbyMVPNotifyRecipient=8151 k_EMsgGCToClientLobbyMVPNotifyRecipient value
     * @property {number} k_EMsgGCToClientLobbyMVPAwarded=8152 k_EMsgGCToClientLobbyMVPAwarded value
     * @property {number} k_EMsgGCToClientQuestProgressUpdated=8153 k_EMsgGCToClientQuestProgressUpdated value
     * @property {number} k_EMsgGCToClientWageringUpdate=8154 k_EMsgGCToClientWageringUpdate value
     * @property {number} k_EMsgGCToClientArcanaVotesUpdate=8155 k_EMsgGCToClientArcanaVotesUpdate value
     * @property {number} k_EMsgClientToGCAddTI6TreeProgress=8156 k_EMsgClientToGCAddTI6TreeProgress value
     * @property {number} k_EMsgClientToGCSetSpectatorLobbyDetails=8157 k_EMsgClientToGCSetSpectatorLobbyDetails value
     * @property {number} k_EMsgClientToGCSetSpectatorLobbyDetailsResponse=8158 k_EMsgClientToGCSetSpectatorLobbyDetailsResponse value
     * @property {number} k_EMsgClientToGCCreateSpectatorLobby=8159 k_EMsgClientToGCCreateSpectatorLobby value
     * @property {number} k_EMsgClientToGCCreateSpectatorLobbyResponse=8160 k_EMsgClientToGCCreateSpectatorLobbyResponse value
     * @property {number} k_EMsgClientToGCSpectatorLobbyList=8161 k_EMsgClientToGCSpectatorLobbyList value
     * @property {number} k_EMsgClientToGCSpectatorLobbyListResponse=8162 k_EMsgClientToGCSpectatorLobbyListResponse value
     * @property {number} k_EMsgSpectatorLobbyGameDetails=8163 k_EMsgSpectatorLobbyGameDetails value
     * @property {number} k_EMsgServerToGCCompendiumInGamePredictionResults=8166 k_EMsgServerToGCCompendiumInGamePredictionResults value
     * @property {number} k_EMsgServerToGCCloseCompendiumInGamePredictionVoting=8167 k_EMsgServerToGCCloseCompendiumInGamePredictionVoting value
     * @property {number} k_EMsgClientToGCOpenPlayerCardPack=8168 k_EMsgClientToGCOpenPlayerCardPack value
     * @property {number} k_EMsgClientToGCOpenPlayerCardPackResponse=8169 k_EMsgClientToGCOpenPlayerCardPackResponse value
     * @property {number} k_EMsgClientToGCSelectCompendiumInGamePrediction=8170 k_EMsgClientToGCSelectCompendiumInGamePrediction value
     * @property {number} k_EMsgClientToGCSelectCompendiumInGamePredictionResponse=8171 k_EMsgClientToGCSelectCompendiumInGamePredictionResponse value
     * @property {number} k_EMsgClientToGCWeekendTourneyGetPlayerStats=8172 k_EMsgClientToGCWeekendTourneyGetPlayerStats value
     * @property {number} k_EMsgClientToGCWeekendTourneyGetPlayerStatsResponse=8173 k_EMsgClientToGCWeekendTourneyGetPlayerStatsResponse value
     * @property {number} k_EMsgClientToGCRecyclePlayerCard=8174 k_EMsgClientToGCRecyclePlayerCard value
     * @property {number} k_EMsgClientToGCRecyclePlayerCardResponse=8175 k_EMsgClientToGCRecyclePlayerCardResponse value
     * @property {number} k_EMsgClientToGCCreatePlayerCardPack=8176 k_EMsgClientToGCCreatePlayerCardPack value
     * @property {number} k_EMsgClientToGCCreatePlayerCardPackResponse=8177 k_EMsgClientToGCCreatePlayerCardPackResponse value
     * @property {number} k_EMsgClientToGCGetPlayerCardRosterRequest=8178 k_EMsgClientToGCGetPlayerCardRosterRequest value
     * @property {number} k_EMsgClientToGCGetPlayerCardRosterResponse=8179 k_EMsgClientToGCGetPlayerCardRosterResponse value
     * @property {number} k_EMsgClientToGCSetPlayerCardRosterRequest=8180 k_EMsgClientToGCSetPlayerCardRosterRequest value
     * @property {number} k_EMsgClientToGCSetPlayerCardRosterResponse=8181 k_EMsgClientToGCSetPlayerCardRosterResponse value
     * @property {number} k_EMsgServerToGCCloseCompendiumInGamePredictionVotingResponse=8183 k_EMsgServerToGCCloseCompendiumInGamePredictionVotingResponse value
     * @property {number} k_EMsgServerToGCCompendiumInGamePredictionResultsResponse=8185 k_EMsgServerToGCCompendiumInGamePredictionResultsResponse value
     * @property {number} k_EMsgLobbyBattleCupVictory=8186 k_EMsgLobbyBattleCupVictory value
     * @property {number} k_EMsgGCGetPlayerCardItemInfo=8187 k_EMsgGCGetPlayerCardItemInfo value
     * @property {number} k_EMsgGCGetPlayerCardItemInfoResponse=8188 k_EMsgGCGetPlayerCardItemInfoResponse value
     * @property {number} k_EMsgClientToGCRequestSteamDatagramTicket=8189 k_EMsgClientToGCRequestSteamDatagramTicket value
     * @property {number} k_EMsgClientToGCRequestSteamDatagramTicketResponse=8190 k_EMsgClientToGCRequestSteamDatagramTicketResponse value
     * @property {number} k_EMsgGCToClientBattlePassRollupRequest=8191 k_EMsgGCToClientBattlePassRollupRequest value
     * @property {number} k_EMsgGCToClientBattlePassRollupResponse=8192 k_EMsgGCToClientBattlePassRollupResponse value
     * @property {number} k_EMsgClientToGCTransferSeasonalMMRRequest=8193 k_EMsgClientToGCTransferSeasonalMMRRequest value
     * @property {number} k_EMsgClientToGCTransferSeasonalMMRResponse=8194 k_EMsgClientToGCTransferSeasonalMMRResponse value
     * @property {number} k_EMsgGCToGCPublicChatCommunicationBan=8195 k_EMsgGCToGCPublicChatCommunicationBan value
     * @property {number} k_EMsgGCToGCUpdateAccountPublicChatBan=8196 k_EMsgGCToGCUpdateAccountPublicChatBan value
     * @property {number} k_EMsgGCChatReportPublicSpam=8197 k_EMsgGCChatReportPublicSpam value
     * @property {number} k_EMsgClientToGCSetPartyBuilderOptions=8198 k_EMsgClientToGCSetPartyBuilderOptions value
     * @property {number} k_EMsgClientToGCSetPartyBuilderOptionsResponse=8199 k_EMsgClientToGCSetPartyBuilderOptionsResponse value
     * @property {number} k_EMsgGCToClientPlaytestStatus=8200 k_EMsgGCToClientPlaytestStatus value
     * @property {number} k_EMsgClientToGCJoinPlaytest=8201 k_EMsgClientToGCJoinPlaytest value
     * @property {number} k_EMsgClientToGCJoinPlaytestResponse=8202 k_EMsgClientToGCJoinPlaytestResponse value
     * @property {number} k_EMsgLobbyPlaytestDetails=8203 k_EMsgLobbyPlaytestDetails value
     * @property {number} k_EMsgDOTASetFavoriteTeam=8204 k_EMsgDOTASetFavoriteTeam value
     * @property {number} k_EMsgGCToClientBattlePassRollupListRequest=8205 k_EMsgGCToClientBattlePassRollupListRequest value
     * @property {number} k_EMsgGCToClientBattlePassRollupListResponse=8206 k_EMsgGCToClientBattlePassRollupListResponse value
     * @property {number} k_EMsgGCIsProQuery=8207 k_EMsgGCIsProQuery value
     * @property {number} k_EMsgGCIsProResponse=8208 k_EMsgGCIsProResponse value
     * @property {number} k_EMsgDOTAClaimEventAction=8209 k_EMsgDOTAClaimEventAction value
     * @property {number} k_EMsgDOTAClaimEventActionResponse=8210 k_EMsgDOTAClaimEventActionResponse value
     * @property {number} k_EMsgDOTAGetPeriodicResource=8211 k_EMsgDOTAGetPeriodicResource value
     * @property {number} k_EMsgDOTAGetPeriodicResourceResponse=8212 k_EMsgDOTAGetPeriodicResourceResponse value
     * @property {number} k_EMsgDOTAPeriodicResourceUpdated=8213 k_EMsgDOTAPeriodicResourceUpdated value
     * @property {number} k_EMsgServerToGCSpendWager=8214 k_EMsgServerToGCSpendWager value
     * @property {number} k_EMsgGCToGCSignoutSpendWagerToken=8215 k_EMsgGCToGCSignoutSpendWagerToken value
     * @property {number} k_EMsgSubmitTriviaQuestionAnswer=8216 k_EMsgSubmitTriviaQuestionAnswer value
     * @property {number} k_EMsgSubmitTriviaQuestionAnswerResponse=8217 k_EMsgSubmitTriviaQuestionAnswerResponse value
     * @property {number} k_EMsgClientToGCGiveTip=8218 k_EMsgClientToGCGiveTip value
     * @property {number} k_EMsgClientToGCGiveTipResponse=8219 k_EMsgClientToGCGiveTipResponse value
     * @property {number} k_EMsgStartTriviaSession=8220 k_EMsgStartTriviaSession value
     * @property {number} k_EMsgStartTriviaSessionResponse=8221 k_EMsgStartTriviaSessionResponse value
     * @property {number} k_EMsgAnchorPhoneNumberRequest=8222 k_EMsgAnchorPhoneNumberRequest value
     * @property {number} k_EMsgAnchorPhoneNumberResponse=8223 k_EMsgAnchorPhoneNumberResponse value
     * @property {number} k_EMsgUnanchorPhoneNumberRequest=8224 k_EMsgUnanchorPhoneNumberRequest value
     * @property {number} k_EMsgUnanchorPhoneNumberResponse=8225 k_EMsgUnanchorPhoneNumberResponse value
     * @property {number} k_EMsgGCToClientTipNotification=8226 k_EMsgGCToClientTipNotification value
     * @property {number} k_EMsgClientToGCRequestSlarkGameResult=8227 k_EMsgClientToGCRequestSlarkGameResult value
     * @property {number} k_EMsgClientToGCRequestSlarkGameResultResponse=8228 k_EMsgClientToGCRequestSlarkGameResultResponse value
     * @property {number} k_EMsgGCToGCSignoutSpendRankWager=8229 k_EMsgGCToGCSignoutSpendRankWager value
     * @property {number} k_EMsgGCToGCGetFavoriteTeam=8230 k_EMsgGCToGCGetFavoriteTeam value
     * @property {number} k_EMsgGCToGCGetFavoriteTeamResponse=8231 k_EMsgGCToGCGetFavoriteTeamResponse value
     * @property {number} k_EMsgSignOutEventGameData=8232 k_EMsgSignOutEventGameData value
     * @property {number} k_EMsgGCToClientAllStarVotesRequest=8233 k_EMsgGCToClientAllStarVotesRequest value
     * @property {number} k_EMsgGCToClientAllStarVotesReply=8234 k_EMsgGCToClientAllStarVotesReply value
     * @property {number} k_EMsgGCToClientAllStarVotesSubmit=8236 k_EMsgGCToClientAllStarVotesSubmit value
     * @property {number} k_EMsgGCToClientAllStarVotesSubmitReply=8237 k_EMsgGCToClientAllStarVotesSubmitReply value
     * @property {number} k_EMsgClientToGCQuickStatsRequest=8238 k_EMsgClientToGCQuickStatsRequest value
     * @property {number} k_EMsgClientToGCQuickStatsResponse=8239 k_EMsgClientToGCQuickStatsResponse value
     * @property {number} k_EMsgGCToGCSubtractEventPointsFromUser=8240 k_EMsgGCToGCSubtractEventPointsFromUser value
     * @property {number} k_EMsgSelectionPriorityChoiceRequest=8241 k_EMsgSelectionPriorityChoiceRequest value
     * @property {number} k_EMsgSelectionPriorityChoiceResponse=8242 k_EMsgSelectionPriorityChoiceResponse value
     * @property {number} k_EMsgGCToGCCompendiumInGamePredictionResults=8243 k_EMsgGCToGCCompendiumInGamePredictionResults value
     * @property {number} k_EMsgGameAutographReward=8244 k_EMsgGameAutographReward value
     * @property {number} k_EMsgGameAutographRewardResponse=8245 k_EMsgGameAutographRewardResponse value
     * @property {number} k_EMsgDestroyLobbyRequest=8246 k_EMsgDestroyLobbyRequest value
     * @property {number} k_EMsgDestroyLobbyResponse=8247 k_EMsgDestroyLobbyResponse value
     * @property {number} k_EMsgPurchaseItemWithEventPoints=8248 k_EMsgPurchaseItemWithEventPoints value
     * @property {number} k_EMsgPurchaseItemWithEventPointsResponse=8249 k_EMsgPurchaseItemWithEventPointsResponse value
     * @property {number} k_EMsgServerToGCMatchPlayerItemPurchaseHistory=8250 k_EMsgServerToGCMatchPlayerItemPurchaseHistory value
     * @property {number} k_EMsgGCToGCGrantPlusHeroMatchResults=8251 k_EMsgGCToGCGrantPlusHeroMatchResults value
     * @property {number} k_EMsgGCGetHeroTimedStats=8252 k_EMsgGCGetHeroTimedStats value
     * @property {number} k_EMsgGCGetHeroTimedStatsResponse=8253 k_EMsgGCGetHeroTimedStatsResponse value
     * @property {number} k_EMsgLobbyPlayerPlusSubscriptionData=8254 k_EMsgLobbyPlayerPlusSubscriptionData value
     * @property {number} k_EMsgServerToGCMatchStateHistory=8255 k_EMsgServerToGCMatchStateHistory value
     * @property {number} k_EMsgPurchaseHeroRelic=8256 k_EMsgPurchaseHeroRelic value
     * @property {number} k_EMsgPurchaseHeroRelicResponse=8257 k_EMsgPurchaseHeroRelicResponse value
     * @property {number} k_EMsgPurchaseHeroRandomRelic=8258 k_EMsgPurchaseHeroRandomRelic value
     * @property {number} k_EMsgPurchaseHeroRandomRelicResponse=8259 k_EMsgPurchaseHeroRandomRelicResponse value
     * @property {number} k_EMsgClientToGCClaimEventActionUsingItem=8260 k_EMsgClientToGCClaimEventActionUsingItem value
     * @property {number} k_EMsgClientToGCClaimEventActionUsingItemResponse=8261 k_EMsgClientToGCClaimEventActionUsingItemResponse value
     * @property {number} k_EMsgPartyReadyCheckRequest=8262 k_EMsgPartyReadyCheckRequest value
     * @property {number} k_EMsgPartyReadyCheckResponse=8263 k_EMsgPartyReadyCheckResponse value
     * @property {number} k_EMsgPartyReadyCheckAcknowledge=8264 k_EMsgPartyReadyCheckAcknowledge value
     * @property {number} k_EMsgGetRecentPlayTimeFriendsRequest=8265 k_EMsgGetRecentPlayTimeFriendsRequest value
     * @property {number} k_EMsgGetRecentPlayTimeFriendsResponse=8266 k_EMsgGetRecentPlayTimeFriendsResponse value
     * @property {number} k_EMsgGCToClientCommendNotification=8267 k_EMsgGCToClientCommendNotification value
     * @property {number} k_EMsgProfileRequest=8268 k_EMsgProfileRequest value
     * @property {number} k_EMsgProfileResponse=8269 k_EMsgProfileResponse value
     * @property {number} k_EMsgProfileUpdate=8270 k_EMsgProfileUpdate value
     * @property {number} k_EMsgProfileUpdateResponse=8271 k_EMsgProfileUpdateResponse value
     * @property {number} k_EMsgSuccessfulHero=8273 k_EMsgSuccessfulHero value
     * @property {number} k_EMsgHeroGlobalDataRequest=8274 k_EMsgHeroGlobalDataRequest value
     * @property {number} k_EMsgHeroGlobalDataResponse=8275 k_EMsgHeroGlobalDataResponse value
     * @property {number} k_EMsgClientToGCRequestPlusWeeklyChallengeResult=8276 k_EMsgClientToGCRequestPlusWeeklyChallengeResult value
     * @property {number} k_EMsgClientToGCRequestPlusWeeklyChallengeResultResponse=8277 k_EMsgClientToGCRequestPlusWeeklyChallengeResultResponse value
     * @property {number} k_EMsgGCToGCGrantPlusPrepaidTime=8278 k_EMsgGCToGCGrantPlusPrepaidTime value
     * @property {number} k_EMsgPrivateMetadataKeyRequest=8279 k_EMsgPrivateMetadataKeyRequest value
     * @property {number} k_EMsgPrivateMetadataKeyResponse=8280 k_EMsgPrivateMetadataKeyResponse value
     * @property {number} k_EMsgGCToGCReconcilePlusStatus=8281 k_EMsgGCToGCReconcilePlusStatus value
     * @property {number} k_EMsgGCToGCCheckPlusStatus=8282 k_EMsgGCToGCCheckPlusStatus value
     * @property {number} k_EMsgGCToGCCheckPlusStatusResponse=8283 k_EMsgGCToGCCheckPlusStatusResponse value
     * @property {number} k_EMsgGCToGCReconcilePlusAutoGrantItems=8284 k_EMsgGCToGCReconcilePlusAutoGrantItems value
     * @property {number} k_EMsgGCToGCReconcilePlusStatusUnreliable=8285 k_EMsgGCToGCReconcilePlusStatusUnreliable value
     * @property {number} k_EMsgActivatePlusFreeTrialRequest=8286 k_EMsgActivatePlusFreeTrialRequest value
     * @property {number} k_EMsgActivatePlusFreeTrialResponse=8287 k_EMsgActivatePlusFreeTrialResponse value
     * @property {number} k_EMsgGCToClientCavernCrawlMapPathCompleted=8288 k_EMsgGCToClientCavernCrawlMapPathCompleted value
     * @property {number} k_EMsgClientToGCCavernCrawlClaimRoom=8289 k_EMsgClientToGCCavernCrawlClaimRoom value
     * @property {number} k_EMsgClientToGCCavernCrawlClaimRoomResponse=8290 k_EMsgClientToGCCavernCrawlClaimRoomResponse value
     * @property {number} k_EMsgClientToGCCavernCrawlUseItemOnRoom=8291 k_EMsgClientToGCCavernCrawlUseItemOnRoom value
     * @property {number} k_EMsgClientToGCCavernCrawlUseItemOnRoomResponse=8292 k_EMsgClientToGCCavernCrawlUseItemOnRoomResponse value
     * @property {number} k_EMsgClientToGCCavernCrawlUseItemOnPath=8293 k_EMsgClientToGCCavernCrawlUseItemOnPath value
     * @property {number} k_EMsgClientToGCCavernCrawlUseItemOnPathResponse=8294 k_EMsgClientToGCCavernCrawlUseItemOnPathResponse value
     * @property {number} k_EMsgClientToGCCavernCrawlRequestMapState=8295 k_EMsgClientToGCCavernCrawlRequestMapState value
     * @property {number} k_EMsgClientToGCCavernCrawlRequestMapStateResponse=8296 k_EMsgClientToGCCavernCrawlRequestMapStateResponse value
     * @property {number} k_EMsgSignOutTips=8297 k_EMsgSignOutTips value
     * @property {number} k_EMsgClientToGCRequestEventPointLogV2=8298 k_EMsgClientToGCRequestEventPointLogV2 value
     * @property {number} k_EMsgClientToGCRequestEventPointLogResponseV2=8299 k_EMsgClientToGCRequestEventPointLogResponseV2 value
     * @property {number} k_EMsgClientToGCRequestEventTipsSummary=8300 k_EMsgClientToGCRequestEventTipsSummary value
     * @property {number} k_EMsgClientToGCRequestEventTipsSummaryResponse=8301 k_EMsgClientToGCRequestEventTipsSummaryResponse value
     * @property {number} k_EMsgHeroGlobalDataAllHeroes=8302 k_EMsgHeroGlobalDataAllHeroes value
     * @property {number} k_EMsgClientToGCRequestSocialFeed=8303 k_EMsgClientToGCRequestSocialFeed value
     * @property {number} k_EMsgClientToGCRequestSocialFeedResponse=8304 k_EMsgClientToGCRequestSocialFeedResponse value
     * @property {number} k_EMsgClientToGCRequestSocialFeedComments=8305 k_EMsgClientToGCRequestSocialFeedComments value
     * @property {number} k_EMsgClientToGCRequestSocialFeedCommentsResponse=8306 k_EMsgClientToGCRequestSocialFeedCommentsResponse value
     * @property {number} k_EMsgClientToGCCavernCrawlGetClaimedRoomCount=8308 k_EMsgClientToGCCavernCrawlGetClaimedRoomCount value
     * @property {number} k_EMsgClientToGCCavernCrawlGetClaimedRoomCountResponse=8309 k_EMsgClientToGCCavernCrawlGetClaimedRoomCountResponse value
     * @property {number} k_EMsgGCToGCReconcilePlusAutoGrantItemsUnreliable=8310 k_EMsgGCToGCReconcilePlusAutoGrantItemsUnreliable value
     * @property {number} k_EMsgServerToGCAddBroadcastTimelineEvent=8311 k_EMsgServerToGCAddBroadcastTimelineEvent value
     * @property {number} k_EMsgGCToServerUpdateSteamBroadcasting=8312 k_EMsgGCToServerUpdateSteamBroadcasting value
     * @property {number} k_EMsgClientToGCRecordContestVote=8313 k_EMsgClientToGCRecordContestVote value
     * @property {number} k_EMsgGCToClientRecordContestVoteResponse=8314 k_EMsgGCToClientRecordContestVoteResponse value
     * @property {number} k_EMsgGCToGCGrantAutograph=8315 k_EMsgGCToGCGrantAutograph value
     * @property {number} k_EMsgGCToGCGrantAutographResponse=8316 k_EMsgGCToGCGrantAutographResponse value
     * @property {number} k_EMsgSignOutConsumableUsage=8317 k_EMsgSignOutConsumableUsage value
     * @property {number} k_EMsgLobbyEventGameDetails=8318 k_EMsgLobbyEventGameDetails value
     * @property {number} k_EMsgDevGrantEventPoints=8319 k_EMsgDevGrantEventPoints value
     * @property {number} k_EMsgDevGrantEventPointsResponse=8320 k_EMsgDevGrantEventPointsResponse value
     * @property {number} k_EMsgDevGrantEventAction=8321 k_EMsgDevGrantEventAction value
     * @property {number} k_EMsgDevGrantEventActionResponse=8322 k_EMsgDevGrantEventActionResponse value
     * @property {number} k_EMsgDevResetEventState=8323 k_EMsgDevResetEventState value
     * @property {number} k_EMsgDevResetEventStateResponse=8324 k_EMsgDevResetEventStateResponse value
     * @property {number} k_EMsgGCToGCReconcileEventOwnership=8325 k_EMsgGCToGCReconcileEventOwnership value
     * @property {number} k_EMsgConsumeEventSupportGrantItem=8326 k_EMsgConsumeEventSupportGrantItem value
     * @property {number} k_EMsgConsumeEventSupportGrantItemResponse=8327 k_EMsgConsumeEventSupportGrantItemResponse value
     * @property {number} k_EMsgGCToClientClaimEventActionUsingItemCompleted=8328 k_EMsgGCToClientClaimEventActionUsingItemCompleted value
     * @property {number} k_EMsgGCToClientCavernCrawlMapUpdated=8329 k_EMsgGCToClientCavernCrawlMapUpdated value
     * @property {number} k_EMsgServerToGCRequestPlayerRecentAccomplishments=8330 k_EMsgServerToGCRequestPlayerRecentAccomplishments value
     * @property {number} k_EMsgServerToGCRequestPlayerRecentAccomplishmentsResponse=8331 k_EMsgServerToGCRequestPlayerRecentAccomplishmentsResponse value
     * @property {number} k_EMsgClientToGCRequestPlayerRecentAccomplishments=8332 k_EMsgClientToGCRequestPlayerRecentAccomplishments value
     * @property {number} k_EMsgClientToGCRequestPlayerRecentAccomplishmentsResponse=8333 k_EMsgClientToGCRequestPlayerRecentAccomplishmentsResponse value
     * @property {number} k_EMsgClientToGCRequestPlayerHeroRecentAccomplishments=8334 k_EMsgClientToGCRequestPlayerHeroRecentAccomplishments value
     * @property {number} k_EMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse=8335 k_EMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse value
     * @property {number} k_EMsgSignOutEventActionGrants=8336 k_EMsgSignOutEventActionGrants value
     * @property {number} k_EMsgClientToGCRequestPlayerCoachMatches=8337 k_EMsgClientToGCRequestPlayerCoachMatches value
     * @property {number} k_EMsgClientToGCRequestPlayerCoachMatchesResponse=8338 k_EMsgClientToGCRequestPlayerCoachMatchesResponse value
     * @property {number} k_EMsgClientToGCGetTicketCodesRequest=8339 k_EMsgClientToGCGetTicketCodesRequest value
     * @property {number} k_EMsgClientToGCGetTicketCodesResponse=8340 k_EMsgClientToGCGetTicketCodesResponse value
     * @property {number} k_EMsgClientToGCSubmitCoachTeammateRating=8341 k_EMsgClientToGCSubmitCoachTeammateRating value
     * @property {number} k_EMsgClientToGCSubmitCoachTeammateRatingResponse=8342 k_EMsgClientToGCSubmitCoachTeammateRatingResponse value
     * @property {number} k_EMsgGCToClientCoachTeammateRatingsChanged=8343 k_EMsgGCToClientCoachTeammateRatingsChanged value
     * @property {number} k_EMsgClientToGCVoteForLeagueGameMVP=8344 k_EMsgClientToGCVoteForLeagueGameMVP value
     * @property {number} k_EMsgClientToGCRequestPlayerCoachMatch=8345 k_EMsgClientToGCRequestPlayerCoachMatch value
     * @property {number} k_EMsgClientToGCRequestPlayerCoachMatchResponse=8346 k_EMsgClientToGCRequestPlayerCoachMatchResponse value
     * @property {number} k_EMsgClientToGCRequestContestVotes=8347 k_EMsgClientToGCRequestContestVotes value
     * @property {number} k_EMsgClientToGCRequestContestVotesResponse=8348 k_EMsgClientToGCRequestContestVotesResponse value
     * @property {number} k_EMsgClientToGCMVPVoteTimeout=8349 k_EMsgClientToGCMVPVoteTimeout value
     * @property {number} k_EMsgClientToGCMVPVoteTimeoutResponse=8350 k_EMsgClientToGCMVPVoteTimeoutResponse value
     * @property {number} k_EMsgClientToGCGetUnderlordsCDKeyRequest=8351 k_EMsgClientToGCGetUnderlordsCDKeyRequest value
     * @property {number} k_EMsgClientToGCGetUnderlordsCDKeyResponse=8352 k_EMsgClientToGCGetUnderlordsCDKeyResponse value
     * @property {number} k_EMsgDetailedGameStats=8353 k_EMsgDetailedGameStats value
     * @property {number} k_EMsgClientToGCSetFavoriteAllStarPlayer=8354 k_EMsgClientToGCSetFavoriteAllStarPlayer value
     * @property {number} k_EMsgClientToGCSetFavoriteAllStarPlayerResponse=8355 k_EMsgClientToGCSetFavoriteAllStarPlayerResponse value
     * @property {number} k_EMsgAllStarStats=8356 k_EMsgAllStarStats value
     * @property {number} k_EMsgClientToGCGetFavoriteAllStarPlayerRequest=8357 k_EMsgClientToGCGetFavoriteAllStarPlayerRequest value
     * @property {number} k_EMsgClientToGCGetFavoriteAllStarPlayerResponse=8358 k_EMsgClientToGCGetFavoriteAllStarPlayerResponse value
     * @property {number} k_EMsgClientToGCVerifyIntegrity=8359 k_EMsgClientToGCVerifyIntegrity value
     * @property {number} k_EMsgMatchMatchmakingStats=8360 k_EMsgMatchMatchmakingStats value
     * @property {number} k_EMsgClientToGCSubmitPlayerMatchSurvey=8361 k_EMsgClientToGCSubmitPlayerMatchSurvey value
     * @property {number} k_EMsgClientToGCSubmitPlayerMatchSurveyResponse=8362 k_EMsgClientToGCSubmitPlayerMatchSurveyResponse value
     * @property {number} k_EMsgSQLGCToGCGrantAllHeroProgressAccount=8363 k_EMsgSQLGCToGCGrantAllHeroProgressAccount value
     * @property {number} k_EMsgSQLGCToGCGrantAllHeroProgressVictory=8364 k_EMsgSQLGCToGCGrantAllHeroProgressVictory value
     * @property {number} k_EMsgDevDeleteEventActions=8365 k_EMsgDevDeleteEventActions value
     * @property {number} k_EMsgDevDeleteEventActionsResponse=8366 k_EMsgDevDeleteEventActionsResponse value
     * @property {number} k_eMsgGCToGCGetAllHeroCurrent=8635 k_eMsgGCToGCGetAllHeroCurrent value
     * @property {number} k_eMsgGCToGCGetAllHeroCurrentResponse=8636 k_eMsgGCToGCGetAllHeroCurrentResponse value
     * @property {number} k_EMsgGCSubmitPlayerAvoidRequest=8637 k_EMsgGCSubmitPlayerAvoidRequest value
     * @property {number} k_EMsgGCSubmitPlayerAvoidRequestResponse=8638 k_EMsgGCSubmitPlayerAvoidRequestResponse value
     * @property {number} k_EMsgGCToClientNotificationsUpdated=8639 k_EMsgGCToClientNotificationsUpdated value
     * @property {number} k_EMsgGCtoGCAssociatedExploiterAccountInfo=8640 k_EMsgGCtoGCAssociatedExploiterAccountInfo value
     * @property {number} k_EMsgGCtoGCAssociatedExploiterAccountInfoResponse=8641 k_EMsgGCtoGCAssociatedExploiterAccountInfoResponse value
     * @property {number} k_EMsgGCtoGCRequestRecalibrationCheck=8642 k_EMsgGCtoGCRequestRecalibrationCheck value
     * @property {number} k_EMsgGCToClientVACReminder=8643 k_EMsgGCToClientVACReminder value
     * @property {number} k_EMsgClientToGCUnderDraftBuy=8644 k_EMsgClientToGCUnderDraftBuy value
     * @property {number} k_EMsgClientToGCUnderDraftBuyResponse=8645 k_EMsgClientToGCUnderDraftBuyResponse value
     * @property {number} k_EMsgClientToGCUnderDraftReroll=8646 k_EMsgClientToGCUnderDraftReroll value
     * @property {number} k_EMsgClientToGCUnderDraftRerollResponse=8647 k_EMsgClientToGCUnderDraftRerollResponse value
     * @property {number} k_EMsgNeutralItemStats=8648 k_EMsgNeutralItemStats value
     * @property {number} k_EMsgClientToGCCreateGuild=8649 k_EMsgClientToGCCreateGuild value
     * @property {number} k_EMsgClientToGCCreateGuildResponse=8650 k_EMsgClientToGCCreateGuildResponse value
     * @property {number} k_EMsgClientToGCSetGuildInfo=8651 k_EMsgClientToGCSetGuildInfo value
     * @property {number} k_EMsgClientToGCSetGuildInfoResponse=8652 k_EMsgClientToGCSetGuildInfoResponse value
     * @property {number} k_EMsgClientToGCAddGuildRole=8653 k_EMsgClientToGCAddGuildRole value
     * @property {number} k_EMsgClientToGCAddGuildRoleResponse=8654 k_EMsgClientToGCAddGuildRoleResponse value
     * @property {number} k_EMsgClientToGCModifyGuildRole=8655 k_EMsgClientToGCModifyGuildRole value
     * @property {number} k_EMsgClientToGCModifyGuildRoleResponse=8656 k_EMsgClientToGCModifyGuildRoleResponse value
     * @property {number} k_EMsgClientToGCRemoveGuildRole=8657 k_EMsgClientToGCRemoveGuildRole value
     * @property {number} k_EMsgClientToGCRemoveGuildRoleResponse=8658 k_EMsgClientToGCRemoveGuildRoleResponse value
     * @property {number} k_EMsgClientToGCJoinGuild=8659 k_EMsgClientToGCJoinGuild value
     * @property {number} k_EMsgClientToGCJoinGuildResponse=8660 k_EMsgClientToGCJoinGuildResponse value
     * @property {number} k_EMsgClientToGCLeaveGuild=8661 k_EMsgClientToGCLeaveGuild value
     * @property {number} k_EMsgClientToGCLeaveGuildResponse=8662 k_EMsgClientToGCLeaveGuildResponse value
     * @property {number} k_EMsgClientToGCInviteToGuild=8663 k_EMsgClientToGCInviteToGuild value
     * @property {number} k_EMsgClientToGCInviteToGuildResponse=8664 k_EMsgClientToGCInviteToGuildResponse value
     * @property {number} k_EMsgClientToGCDeclineInviteToGuild=8665 k_EMsgClientToGCDeclineInviteToGuild value
     * @property {number} k_EMsgClientToGCDeclineInviteToGuildResponse=8666 k_EMsgClientToGCDeclineInviteToGuildResponse value
     * @property {number} k_EMsgClientToGCCancelInviteToGuild=8667 k_EMsgClientToGCCancelInviteToGuild value
     * @property {number} k_EMsgClientToGCCancelInviteToGuildResponse=8668 k_EMsgClientToGCCancelInviteToGuildResponse value
     * @property {number} k_EMsgClientToGCKickGuildMember=8669 k_EMsgClientToGCKickGuildMember value
     * @property {number} k_EMsgClientToGCKickGuildMemberResponse=8670 k_EMsgClientToGCKickGuildMemberResponse value
     * @property {number} k_EMsgClientToGCSetGuildMemberRole=8671 k_EMsgClientToGCSetGuildMemberRole value
     * @property {number} k_EMsgClientToGCSetGuildMemberRoleResponse=8672 k_EMsgClientToGCSetGuildMemberRoleResponse value
     * @property {number} k_EMsgClientToGCRequestGuildData=8673 k_EMsgClientToGCRequestGuildData value
     * @property {number} k_EMsgClientToGCRequestGuildDataResponse=8674 k_EMsgClientToGCRequestGuildDataResponse value
     * @property {number} k_EMsgGCToClientGuildDataUpdated=8675 k_EMsgGCToClientGuildDataUpdated value
     * @property {number} k_EMsgClientToGCRequestGuildMembership=8676 k_EMsgClientToGCRequestGuildMembership value
     * @property {number} k_EMsgClientToGCRequestGuildMembershipResponse=8677 k_EMsgClientToGCRequestGuildMembershipResponse value
     * @property {number} k_EMsgGCToClientGuildMembershipUpdated=8678 k_EMsgGCToClientGuildMembershipUpdated value
     * @property {number} k_EMsgClientToGCRequestGuildSummary=8679 k_EMsgClientToGCRequestGuildSummary value
     * @property {number} k_EMsgClientToGCRequestGuildSummaryResponse=8680 k_EMsgClientToGCRequestGuildSummaryResponse value
     * @property {number} k_EMsgClientToGCAcceptInviteToGuild=8681 k_EMsgClientToGCAcceptInviteToGuild value
     * @property {number} k_EMsgClientToGCAcceptInviteToGuildResponse=8682 k_EMsgClientToGCAcceptInviteToGuildResponse value
     * @property {number} k_EMsgClientToGCSetGuildRoleOrder=8683 k_EMsgClientToGCSetGuildRoleOrder value
     * @property {number} k_EMsgClientToGCSetGuildRoleOrderResponse=8684 k_EMsgClientToGCSetGuildRoleOrderResponse value
     * @property {number} k_EMsgClientToGCRequestGuildFeed=8685 k_EMsgClientToGCRequestGuildFeed value
     * @property {number} k_EMsgClientToGCRequestGuildFeedResponse=8686 k_EMsgClientToGCRequestGuildFeedResponse value
     * @property {number} k_EMsgClientToGCRequestAccountGuildEventData=8687 k_EMsgClientToGCRequestAccountGuildEventData value
     * @property {number} k_EMsgClientToGCRequestAccountGuildEventDataResponse=8688 k_EMsgClientToGCRequestAccountGuildEventDataResponse value
     * @property {number} k_EMsgGCToClientAccountGuildEventDataUpdated=8689 k_EMsgGCToClientAccountGuildEventDataUpdated value
     * @property {number} k_EMsgClientToGCRequestActiveGuildContracts=8690 k_EMsgClientToGCRequestActiveGuildContracts value
     * @property {number} k_EMsgClientToGCRequestActiveGuildContractsResponse=8691 k_EMsgClientToGCRequestActiveGuildContractsResponse value
     * @property {number} k_EMsgGCToClientActiveGuildContractsUpdated=8692 k_EMsgGCToClientActiveGuildContractsUpdated value
     * @property {number} k_EMsgGCToClientGuildFeedUpdated=8693 k_EMsgGCToClientGuildFeedUpdated value
     * @property {number} k_EMsgClientToGCSelectGuildContract=8694 k_EMsgClientToGCSelectGuildContract value
     * @property {number} k_EMsgClientToGCSelectGuildContractResponse=8695 k_EMsgClientToGCSelectGuildContractResponse value
     * @property {number} k_EMsgGCToGCCompleteGuildContracts=8696 k_EMsgGCToGCCompleteGuildContracts value
     * @property {number} k_EMsgClientToGCAddPlayerToGuildChat=8698 k_EMsgClientToGCAddPlayerToGuildChat value
     * @property {number} k_EMsgClientToGCAddPlayerToGuildChatResponse=8699 k_EMsgClientToGCAddPlayerToGuildChatResponse value
     * @property {number} k_EMsgClientToGCUnderDraftSell=8700 k_EMsgClientToGCUnderDraftSell value
     * @property {number} k_EMsgClientToGCUnderDraftSellResponse=8701 k_EMsgClientToGCUnderDraftSellResponse value
     * @property {number} k_EMsgClientToGCUnderDraftRequest=8702 k_EMsgClientToGCUnderDraftRequest value
     * @property {number} k_EMsgClientToGCUnderDraftResponse=8703 k_EMsgClientToGCUnderDraftResponse value
     * @property {number} k_EMsgClientToGCUnderDraftRedeemReward=8704 k_EMsgClientToGCUnderDraftRedeemReward value
     * @property {number} k_EMsgClientToGCUnderDraftRedeemRewardResponse=8705 k_EMsgClientToGCUnderDraftRedeemRewardResponse value
     * @property {number} k_EMsgClientToGCUnderDraftRedeemSpecialReward=8706 k_EMsgClientToGCUnderDraftRedeemSpecialReward value
     * @property {number} k_EMsgClientToGCUnderDraftRedeemSpecialRewardResponse=8707 k_EMsgClientToGCUnderDraftRedeemSpecialRewardResponse value
     * @property {number} k_EMsgGCToServerLobbyHeroBanRates=8708 k_EMsgGCToServerLobbyHeroBanRates value
     * @property {number} k_EMsgSetTeamFanContentStatus=8709 k_EMsgSetTeamFanContentStatus value
     * @property {number} k_EMsgSetTeamFanContentStatusResponse=8710 k_EMsgSetTeamFanContentStatusResponse value
     * @property {number} k_EMsgSignOutGuildContractProgress=8711 k_EMsgSignOutGuildContractProgress value
     * @property {number} k_EMsgSignOutMVPStats=8712 k_EMsgSignOutMVPStats value
     * @property {number} k_EMsgClientToGCRequestActiveGuildChallenge=8713 k_EMsgClientToGCRequestActiveGuildChallenge value
     * @property {number} k_EMsgClientToGCRequestActiveGuildChallengeResponse=8714 k_EMsgClientToGCRequestActiveGuildChallengeResponse value
     * @property {number} k_EMsgGCToClientActiveGuildChallengeUpdated=8715 k_EMsgGCToClientActiveGuildChallengeUpdated value
     * @property {number} k_EMsgSignOutGuildChallengeProgress=8720 k_EMsgSignOutGuildChallengeProgress value
     * @property {number} k_EMsgClientToGCRequestGuildEventMembers=8721 k_EMsgClientToGCRequestGuildEventMembers value
     * @property {number} k_EMsgClientToGCRequestGuildEventMembersResponse=8722 k_EMsgClientToGCRequestGuildEventMembersResponse value
     * @property {number} k_EMsgServerToGCRefreshGuildContract=8723 k_EMsgServerToGCRefreshGuildContract value
     * @property {number} k_EMsgServerToGCRefreshGuildContractResponse=8724 k_EMsgServerToGCRefreshGuildContractResponse value
     * @property {number} k_EMsgClientToGCReportGuildContent=8725 k_EMsgClientToGCReportGuildContent value
     * @property {number} k_EMsgClientToGCReportGuildContentResponse=8726 k_EMsgClientToGCReportGuildContentResponse value
     * @property {number} k_EMsgClientToGCRequestAccountGuildPersonaInfo=8727 k_EMsgClientToGCRequestAccountGuildPersonaInfo value
     * @property {number} k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse=8728 k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse value
     * @property {number} k_EMsgClientToGCRequestAccountGuildPersonaInfoBatch=8729 k_EMsgClientToGCRequestAccountGuildPersonaInfoBatch value
     * @property {number} k_EMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse=8730 k_EMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse value
     * @property {number} k_EMsgGCToClientUnderDraftGoldUpdated=8731 k_EMsgGCToClientUnderDraftGoldUpdated value
     * @property {number} k_EMsgGCToServerRecordTrainingData=8732 k_EMsgGCToServerRecordTrainingData value
     * @property {number} k_EMsgSignOutBounties=8733 k_EMsgSignOutBounties value
     * @property {number} k_EMsgLobbyGauntletProgress=8735 k_EMsgLobbyGauntletProgress value
     * @property {number} k_EMsgClientToGCSubmitDraftTriviaMatchAnswer=8736 k_EMsgClientToGCSubmitDraftTriviaMatchAnswer value
     * @property {number} k_EMsgClientToGCSubmitDraftTriviaMatchAnswerResponse=8737 k_EMsgClientToGCSubmitDraftTriviaMatchAnswerResponse value
     * @property {number} k_EMsgGCToGCSignoutSpendBounty=8738 k_EMsgGCToGCSignoutSpendBounty value
     * @property {number} k_EMsgClientToGCApplyGauntletTicket=8739 k_EMsgClientToGCApplyGauntletTicket value
     * @property {number} k_EMsgClientToGCUnderDraftRollBackBench=8740 k_EMsgClientToGCUnderDraftRollBackBench value
     * @property {number} k_EMsgClientToGCUnderDraftRollBackBenchResponse=8741 k_EMsgClientToGCUnderDraftRollBackBenchResponse value
     * @property {number} k_EMsgGCToGCGetEventActionScore=8742 k_EMsgGCToGCGetEventActionScore value
     * @property {number} k_EMsgGCToGCGetEventActionScoreResponse=8743 k_EMsgGCToGCGetEventActionScoreResponse value
     * @property {number} k_EMsgServerToGCGetGuildContracts=8744 k_EMsgServerToGCGetGuildContracts value
     * @property {number} k_EMsgServerToGCGetGuildContractsResponse=8745 k_EMsgServerToGCGetGuildContractsResponse value
     * @property {number} k_EMsgLobbyEventGameData=8746 k_EMsgLobbyEventGameData value
     * @property {number} k_EMsgGCToClientGuildMembersDataUpdated=8747 k_EMsgGCToClientGuildMembersDataUpdated value
     * @property {number} k_EMsgSignOutReportActivityMarkers=8748 k_EMsgSignOutReportActivityMarkers value
     * @property {number} k_EMsgSignOutDiretideCandy=8749 k_EMsgSignOutDiretideCandy value
     * @property {number} k_EMsgGCToClientPostGameItemAwardNotification=8750 k_EMsgGCToClientPostGameItemAwardNotification value
     */
    $root.EDOTAGCMsg = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[7000] = "k_EMsgGCDOTABase"] = 7000;
        values[valuesById[7001] = "k_EMsgGCGeneralResponse"] = 7001;
        values[valuesById[7004] = "k_EMsgGCGameMatchSignOut"] = 7004;
        values[valuesById[7005] = "k_EMsgGCGameMatchSignOutResponse"] = 7005;
        values[valuesById[7009] = "k_EMsgGCJoinChatChannel"] = 7009;
        values[valuesById[7010] = "k_EMsgGCJoinChatChannelResponse"] = 7010;
        values[valuesById[7013] = "k_EMsgGCOtherJoinedChannel"] = 7013;
        values[valuesById[7014] = "k_EMsgGCOtherLeftChannel"] = 7014;
        values[valuesById[7017] = "k_EMsgGCMatchHistoryList"] = 7017;
        values[valuesById[7026] = "k_EMsgServerToGCRequestStatus"] = 7026;
        values[valuesById[7027] = "k_EMsgGCGetRecentMatches"] = 7027;
        values[valuesById[7028] = "k_EMsgGCRecentMatchesResponse"] = 7028;
        values[valuesById[7033] = "k_EMsgGCStartFindingMatch"] = 7033;
        values[valuesById[7034] = "k_EMsgGCConnectedPlayers"] = 7034;
        values[valuesById[7035] = "k_EMsgGCAbandonCurrentGame"] = 7035;
        values[valuesById[7036] = "k_EMsgGCStopFindingMatch"] = 7036;
        values[valuesById[7038] = "k_EMsgGCPracticeLobbyCreate"] = 7038;
        values[valuesById[7040] = "k_EMsgGCPracticeLobbyLeave"] = 7040;
        values[valuesById[7041] = "k_EMsgGCPracticeLobbyLaunch"] = 7041;
        values[valuesById[7042] = "k_EMsgGCPracticeLobbyList"] = 7042;
        values[valuesById[7043] = "k_EMsgGCPracticeLobbyListResponse"] = 7043;
        values[valuesById[7044] = "k_EMsgGCPracticeLobbyJoin"] = 7044;
        values[valuesById[7046] = "k_EMsgGCPracticeLobbySetDetails"] = 7046;
        values[valuesById[7047] = "k_EMsgGCPracticeLobbySetTeamSlot"] = 7047;
        values[valuesById[7049] = "k_EMsgGCInitialQuestionnaireResponse"] = 7049;
        values[valuesById[7055] = "k_EMsgGCPracticeLobbyResponse"] = 7055;
        values[valuesById[7056] = "k_EMsgGCBroadcastNotification"] = 7056;
        values[valuesById[7057] = "k_EMsgGCLiveScoreboardUpdate"] = 7057;
        values[valuesById[7060] = "k_EMsgGCRequestChatChannelList"] = 7060;
        values[valuesById[7061] = "k_EMsgGCRequestChatChannelListResponse"] = 7061;
        values[valuesById[7064] = "k_EMsgGCRequestMatches"] = 7064;
        values[valuesById[7065] = "k_EMsgGCRequestMatchesResponse"] = 7065;
        values[valuesById[7068] = "k_EMsgGCRequestPlayerResources"] = 7068;
        values[valuesById[7069] = "k_EMsgGCRequestPlayerResourcesResponse"] = 7069;
        values[valuesById[7070] = "k_EMsgGCReadyUp"] = 7070;
        values[valuesById[7071] = "k_EMsgGCKickedFromMatchmakingQueue"] = 7071;
        values[valuesById[7072] = "k_EMsgGCLeaverDetected"] = 7072;
        values[valuesById[7073] = "k_EMsgGCSpectateFriendGame"] = 7073;
        values[valuesById[7074] = "k_EMsgGCSpectateFriendGameResponse"] = 7074;
        values[valuesById[7075] = "k_EMsgGCPlayerReports"] = 7075;
        values[valuesById[7076] = "k_EMsgGCReportsRemainingRequest"] = 7076;
        values[valuesById[7077] = "k_EMsgGCReportsRemainingResponse"] = 7077;
        values[valuesById[7078] = "k_EMsgGCSubmitPlayerReport"] = 7078;
        values[valuesById[7079] = "k_EMsgGCSubmitPlayerReportResponse"] = 7079;
        values[valuesById[7081] = "k_EMsgGCPracticeLobbyKick"] = 7081;
        values[valuesById[7082] = "k_EMsgGCReportCountsRequest"] = 7082;
        values[valuesById[7083] = "k_EMsgGCReportCountsResponse"] = 7083;
        values[valuesById[7084] = "k_EMsgGCRequestSaveGames"] = 7084;
        values[valuesById[7085] = "k_EMsgGCRequestSaveGamesServer"] = 7085;
        values[valuesById[7086] = "k_EMsgGCRequestSaveGamesResponse"] = 7086;
        values[valuesById[7087] = "k_EMsgGCLeaverDetectedResponse"] = 7087;
        values[valuesById[7088] = "k_EMsgGCPlayerFailedToConnect"] = 7088;
        values[valuesById[7089] = "k_EMsgGCGCToRelayConnect"] = 7089;
        values[valuesById[7090] = "k_EMsgGCGCToRelayConnectresponse"] = 7090;
        values[valuesById[7091] = "k_EMsgGCWatchGame"] = 7091;
        values[valuesById[7092] = "k_EMsgGCWatchGameResponse"] = 7092;
        values[valuesById[7093] = "k_EMsgGCBanStatusRequest"] = 7093;
        values[valuesById[7094] = "k_EMsgGCBanStatusResponse"] = 7094;
        values[valuesById[7095] = "k_EMsgGCMatchDetailsRequest"] = 7095;
        values[valuesById[7096] = "k_EMsgGCMatchDetailsResponse"] = 7096;
        values[valuesById[7097] = "k_EMsgGCCancelWatchGame"] = 7097;
        values[valuesById[7102] = "k_EMsgGCPopup"] = 7102;
        values[valuesById[7104] = "k_EMsgGCDOTAClearNotifySuccessfulReport"] = 7104;
        values[valuesById[7111] = "k_EMsgGCFriendPracticeLobbyListRequest"] = 7111;
        values[valuesById[7112] = "k_EMsgGCFriendPracticeLobbyListResponse"] = 7112;
        values[valuesById[7113] = "k_EMsgGCPracticeLobbyJoinResponse"] = 7113;
        values[valuesById[7114] = "k_EMsgClientEconNotification_Job"] = 7114;
        values[valuesById[7115] = "k_EMsgGCCreateTeam"] = 7115;
        values[valuesById[7116] = "k_EMsgGCCreateTeamResponse"] = 7116;
        values[valuesById[7121] = "k_EMsgGCTeamData"] = 7121;
        values[valuesById[7122] = "k_EMsgGCTeamInvite_InviterToGC"] = 7122;
        values[valuesById[7123] = "k_EMsgGCTeamInvite_GCImmediateResponseToInviter"] = 7123;
        values[valuesById[7124] = "k_EMsgGCTeamInvite_GCRequestToInvitee"] = 7124;
        values[valuesById[7125] = "k_EMsgGCTeamInvite_InviteeResponseToGC"] = 7125;
        values[valuesById[7126] = "k_EMsgGCTeamInvite_GCResponseToInviter"] = 7126;
        values[valuesById[7127] = "k_EMsgGCTeamInvite_GCResponseToInvitee"] = 7127;
        values[valuesById[7128] = "k_EMsgGCKickTeamMember"] = 7128;
        values[valuesById[7129] = "k_EMsgGCKickTeamMemberResponse"] = 7129;
        values[valuesById[7130] = "k_EMsgGCLeaveTeam"] = 7130;
        values[valuesById[7131] = "k_EMsgGCLeaveTeamResponse"] = 7131;
        values[valuesById[7132] = "k_EMsgGCSuggestTeamMatchmaking"] = 7132;
        values[valuesById[7133] = "k_EMsgGCPlayerHeroesFavoritesAdd"] = 7133;
        values[valuesById[7134] = "k_EMsgGCPlayerHeroesFavoritesRemove"] = 7134;
        values[valuesById[7142] = "k_EMsgGCApplyTeamToPracticeLobby"] = 7142;
        values[valuesById[7144] = "k_EMsgGCTransferTeamAdmin"] = 7144;
        values[valuesById[7149] = "k_EMsgGCPracticeLobbyJoinBroadcastChannel"] = 7149;
        values[valuesById[7150] = "k_EMsgGC_TournamentItemEvent"] = 7150;
        values[valuesById[7151] = "k_EMsgGC_TournamentItemEventResponse"] = 7151;
        values[valuesById[7152] = "k_EMsgCastMatchVote"] = 7152;
        values[valuesById[7153] = "k_EMsgCastMatchVoteResponse"] = 7153;
        values[valuesById[7154] = "k_EMsgRetrieveMatchVote"] = 7154;
        values[valuesById[7155] = "k_EMsgRetrieveMatchVoteResponse"] = 7155;
        values[valuesById[7156] = "k_EMsgTeamFanfare"] = 7156;
        values[valuesById[7157] = "k_EMsgResponseTeamFanfare"] = 7157;
        values[valuesById[7158] = "k_EMsgGC_GameServerUploadSaveGame"] = 7158;
        values[valuesById[7159] = "k_EMsgGC_GameServerSaveGameResult"] = 7159;
        values[valuesById[7160] = "k_EMsgGC_GameServerGetLoadGame"] = 7160;
        values[valuesById[7161] = "k_EMsgGC_GameServerGetLoadGameResult"] = 7161;
        values[valuesById[7166] = "k_EMsgGCEditTeamDetails"] = 7166;
        values[valuesById[7167] = "k_EMsgGCEditTeamDetailsResponse"] = 7167;
        values[valuesById[7168] = "k_EMsgGCProTeamListRequest"] = 7168;
        values[valuesById[7169] = "k_EMsgGCProTeamListResponse"] = 7169;
        values[valuesById[7170] = "k_EMsgGCReadyUpStatus"] = 7170;
        values[valuesById[7171] = "k_EMsgGCHallOfFame"] = 7171;
        values[valuesById[7172] = "k_EMsgGCHallOfFameRequest"] = 7172;
        values[valuesById[7173] = "k_EMsgGCHallOfFameResponse"] = 7173;
        values[valuesById[7174] = "k_EMsgGCGenerateDiretidePrizeList"] = 7174;
        values[valuesById[7176] = "k_EMsgGCRewardDiretidePrizes"] = 7176;
        values[valuesById[7177] = "k_EMsgGCDiretidePrizesRewardedResponse"] = 7177;
        values[valuesById[7178] = "k_EMsgGCHalloweenHighScoreRequest"] = 7178;
        values[valuesById[7179] = "k_EMsgGCHalloweenHighScoreResponse"] = 7179;
        values[valuesById[7180] = "k_EMsgGCGenerateDiretidePrizeListResponse"] = 7180;
        values[valuesById[7182] = "k_EMsgGCStorePromoPagesRequest"] = 7182;
        values[valuesById[7183] = "k_EMsgGCStorePromoPagesResponse"] = 7183;
        values[valuesById[7186] = "k_EMsgGCToGCMatchCompleted"] = 7186;
        values[valuesById[7188] = "k_EMsgGCBalancedShuffleLobby"] = 7188;
        values[valuesById[7189] = "k_EMsgGCToGCCheckLeaguePermission"] = 7189;
        values[valuesById[7190] = "k_EMsgGCToGCCheckLeaguePermissionResponse"] = 7190;
        values[valuesById[7197] = "k_EMsgGCMatchmakingStatsRequest"] = 7197;
        values[valuesById[7198] = "k_EMsgGCMatchmakingStatsResponse"] = 7198;
        values[valuesById[7199] = "k_EMsgGCBotGameCreate"] = 7199;
        values[valuesById[7200] = "k_EMsgGCSetMatchHistoryAccess"] = 7200;
        values[valuesById[7201] = "k_EMsgGCSetMatchHistoryAccessResponse"] = 7201;
        values[valuesById[7203] = "k_EMsgUpgradeLeagueItem"] = 7203;
        values[valuesById[7204] = "k_EMsgUpgradeLeagueItemResponse"] = 7204;
        values[valuesById[7205] = "k_EMsgGCTeamMemberProfileRequest"] = 7205;
        values[valuesById[7206] = "k_EMsgGCWatchDownloadedReplay"] = 7206;
        values[valuesById[7207] = "k_EMsgGCSetMapLocationState"] = 7207;
        values[valuesById[7208] = "k_EMsgGCSetMapLocationStateResponse"] = 7208;
        values[valuesById[7209] = "k_EMsgGCResetMapLocations"] = 7209;
        values[valuesById[7210] = "k_EMsgGCResetMapLocationsResponse"] = 7210;
        values[valuesById[7216] = "k_EMsgRefreshPartnerAccountLink"] = 7216;
        values[valuesById[7217] = "k_EMsgClientsRejoinChatChannels"] = 7217;
        values[valuesById[7218] = "k_EMsgGCToGCGetUserChatInfo"] = 7218;
        values[valuesById[7219] = "k_EMsgGCToGCGetUserChatInfoResponse"] = 7219;
        values[valuesById[7220] = "k_EMsgGCToGCLeaveAllChatChannels"] = 7220;
        values[valuesById[7221] = "k_EMsgGCToGCUpdateAccountChatBan"] = 7221;
        values[valuesById[7234] = "k_EMsgGCToGCCanInviteUserToTeam"] = 7234;
        values[valuesById[7235] = "k_EMsgGCToGCCanInviteUserToTeamResponse"] = 7235;
        values[valuesById[7236] = "k_EMsgGCToGCGetUserRank"] = 7236;
        values[valuesById[7237] = "k_EMsgGCToGCGetUserRankResponse"] = 7237;
        values[valuesById[7240] = "k_EMsgGCToGCUpdateTeamStats"] = 7240;
        values[valuesById[7241] = "k_EMsgGCToGCValidateTeam"] = 7241;
        values[valuesById[7242] = "k_EMsgGCToGCValidateTeamResponse"] = 7242;
        values[valuesById[7248] = "k_EMsgGCPassportDataRequest"] = 7248;
        values[valuesById[7249] = "k_EMsgGCPassportDataResponse"] = 7249;
        values[valuesById[7255] = "k_EMsgGCToGCGetLeagueAdmin"] = 7255;
        values[valuesById[7256] = "k_EMsgGCToGCGetLeagueAdminResponse"] = 7256;
        values[valuesById[7258] = "k_EMsgGCRequestLeaguePrizePool"] = 7258;
        values[valuesById[7259] = "k_EMsgGCRequestLeaguePrizePoolResponse"] = 7259;
        values[valuesById[7272] = "k_EMsgGCLeaveChatChannel"] = 7272;
        values[valuesById[7273] = "k_EMsgGCChatMessage"] = 7273;
        values[valuesById[7274] = "k_EMsgGCGetHeroStandings"] = 7274;
        values[valuesById[7275] = "k_EMsgGCGetHeroStandingsResponse"] = 7275;
        values[valuesById[7283] = "k_EMsgGCItemEditorReservationsRequest"] = 7283;
        values[valuesById[7284] = "k_EMsgGCItemEditorReservationsResponse"] = 7284;
        values[valuesById[7285] = "k_EMsgGCItemEditorReserveItemDef"] = 7285;
        values[valuesById[7286] = "k_EMsgGCItemEditorReserveItemDefResponse"] = 7286;
        values[valuesById[7287] = "k_EMsgGCItemEditorReleaseReservation"] = 7287;
        values[valuesById[7288] = "k_EMsgGCItemEditorReleaseReservationResponse"] = 7288;
        values[valuesById[7289] = "k_EMsgGCRewardTutorialPrizes"] = 7289;
        values[valuesById[7290] = "k_EMsgGCLastHitChallengeHighScorePost"] = 7290;
        values[valuesById[7291] = "k_EMsgGCLastHitChallengeHighScoreRequest"] = 7291;
        values[valuesById[7292] = "k_EMsgGCLastHitChallengeHighScoreResponse"] = 7292;
        values[valuesById[7293] = "k_EMsgGCCreateFantasyLeagueRequest"] = 7293;
        values[valuesById[7294] = "k_EMsgGCCreateFantasyLeagueResponse"] = 7294;
        values[valuesById[7297] = "k_EMsgGCFantasyLeagueInfoRequest"] = 7297;
        values[valuesById[7298] = "k_EMsgGCFantasyLeagueInfoResponse"] = 7298;
        values[valuesById[7299] = "k_EMsgGCFantasyLeagueInfo"] = 7299;
        values[valuesById[7300] = "k_EMsgGCCreateFantasyTeamRequest"] = 7300;
        values[valuesById[7301] = "k_EMsgGCCreateFantasyTeamResponse"] = 7301;
        values[valuesById[7302] = "k_EMsgGCEditFantasyTeamRequest"] = 7302;
        values[valuesById[7303] = "k_EMsgGCEditFantasyTeamResponse"] = 7303;
        values[valuesById[7304] = "k_EMsgGCFantasyTeamInfoRequestByFantasyLeagueID"] = 7304;
        values[valuesById[7305] = "k_EMsgGCFantasyTeamInfoRequestByOwnerAccountID"] = 7305;
        values[valuesById[7306] = "k_EMsgGCFantasyTeamInfoResponse"] = 7306;
        values[valuesById[7307] = "k_EMsgGCFantasyTeamInfo"] = 7307;
        values[valuesById[7308] = "k_EMsgGCFantasyLivePlayerStats"] = 7308;
        values[valuesById[7309] = "k_EMsgGCFantasyFinalPlayerStats"] = 7309;
        values[valuesById[7310] = "k_EMsgGCFantasyMatch"] = 7310;
        values[valuesById[7312] = "k_EMsgGCFantasyTeamScoreRequest"] = 7312;
        values[valuesById[7313] = "k_EMsgGCFantasyTeamScoreResponse"] = 7313;
        values[valuesById[7314] = "k_EMsgGCFantasyTeamStandingsRequest"] = 7314;
        values[valuesById[7315] = "k_EMsgGCFantasyTeamStandingsResponse"] = 7315;
        values[valuesById[7316] = "k_EMsgGCFantasyPlayerScoreRequest"] = 7316;
        values[valuesById[7317] = "k_EMsgGCFantasyPlayerScoreResponse"] = 7317;
        values[valuesById[7318] = "k_EMsgGCFantasyPlayerStandingsRequest"] = 7318;
        values[valuesById[7319] = "k_EMsgGCFantasyPlayerStandingsResponse"] = 7319;
        values[valuesById[7320] = "k_EMsgGCFlipLobbyTeams"] = 7320;
        values[valuesById[7321] = "k_EMsgGCCustomGameCreate"] = 7321;
        values[valuesById[7324] = "k_EMsgGCToGCProcessPlayerReportForTarget"] = 7324;
        values[valuesById[7325] = "k_EMsgGCToGCProcessReportSuccess"] = 7325;
        values[valuesById[7326] = "k_EMsgGCNotifyAccountFlagsChange"] = 7326;
        values[valuesById[7327] = "k_EMsgGCSetProfilePrivacy"] = 7327;
        values[valuesById[7328] = "k_EMsgGCSetProfilePrivacyResponse"] = 7328;
        values[valuesById[7331] = "k_EMsgGCFantasyLeagueCreateInfoRequest"] = 7331;
        values[valuesById[7332] = "k_EMsgGCFantasyLeagueCreateInfoResponse"] = 7332;
        values[valuesById[7333] = "k_EMsgGCFantasyLeagueInviteInfoRequest"] = 7333;
        values[valuesById[7334] = "k_EMsgGCFantasyLeagueInviteInfoResponse"] = 7334;
        values[valuesById[7335] = "k_EMsgGCClientIgnoredUser"] = 7335;
        values[valuesById[7336] = "k_EMsgGCFantasyLeagueCreateRequest"] = 7336;
        values[valuesById[7337] = "k_EMsgGCFantasyLeagueCreateResponse"] = 7337;
        values[valuesById[7338] = "k_EMsgGCFantasyTeamCreateRequest"] = 7338;
        values[valuesById[7339] = "k_EMsgGCFantasyTeamCreateResponse"] = 7339;
        values[valuesById[7340] = "k_EMsgGCFantasyLeagueFriendJoinListRequest"] = 7340;
        values[valuesById[7341] = "k_EMsgGCFantasyLeagueFriendJoinListResponse"] = 7341;
        values[valuesById[7342] = "k_EMsgGCClientSuspended"] = 7342;
        values[valuesById[7343] = "k_EMsgGCPartyMemberSetCoach"] = 7343;
        values[valuesById[7344] = "k_EMsgGCFantasyLeagueEditInvitesRequest"] = 7344;
        values[valuesById[7345] = "k_EMsgGCFantasyLeagueEditInvitesResponse"] = 7345;
        values[valuesById[7346] = "k_EMsgGCPracticeLobbySetCoach"] = 7346;
        values[valuesById[7347] = "k_EMsgGCFantasyLeagueEditInfoRequest"] = 7347;
        values[valuesById[7348] = "k_EMsgGCFantasyLeagueEditInfoResponse"] = 7348;
        values[valuesById[7349] = "k_EMsgGCFantasyLeagueDraftStatusRequest"] = 7349;
        values[valuesById[7350] = "k_EMsgGCFantasyLeagueDraftStatus"] = 7350;
        values[valuesById[7351] = "k_EMsgGCFantasyLeagueDraftPlayerRequest"] = 7351;
        values[valuesById[7352] = "k_EMsgGCFantasyLeagueDraftPlayerResponse"] = 7352;
        values[valuesById[7353] = "k_EMsgGCFantasyLeagueMatchupsRequest"] = 7353;
        values[valuesById[7354] = "k_EMsgGCFantasyLeagueMatchupsResponse"] = 7354;
        values[valuesById[7355] = "k_EMsgGCFantasyTeamRosterSwapRequest"] = 7355;
        values[valuesById[7356] = "k_EMsgGCFantasyTeamRosterSwapResponse"] = 7356;
        values[valuesById[7357] = "k_EMsgGCFantasyTeamRosterRequest"] = 7357;
        values[valuesById[7358] = "k_EMsgGCFantasyTeamRosterResponse"] = 7358;
        values[valuesById[7361] = "k_EMsgGCFantasyTeamRosterAddDropRequest"] = 7361;
        values[valuesById[7362] = "k_EMsgGCFantasyTeamRosterAddDropResponse"] = 7362;
        values[valuesById[7363] = "k_EMsgPresentedClientTerminateDlg"] = 7363;
        values[valuesById[7364] = "k_EMsgGCFantasyPlayerHisoricalStatsRequest"] = 7364;
        values[valuesById[7365] = "k_EMsgGCFantasyPlayerHisoricalStatsResponse"] = 7365;
        values[valuesById[7366] = "k_EMsgGCPCBangTimedRewardMessage"] = 7366;
        values[valuesById[7367] = "k_EMsgGCLobbyUpdateBroadcastChannelInfo"] = 7367;
        values[valuesById[7368] = "k_EMsgGCFantasyTeamTradesRequest"] = 7368;
        values[valuesById[7369] = "k_EMsgGCFantasyTeamTradesResponse"] = 7369;
        values[valuesById[7370] = "k_EMsgGCFantasyTeamTradeCancelRequest"] = 7370;
        values[valuesById[7371] = "k_EMsgGCFantasyTeamTradeCancelResponse"] = 7371;
        values[valuesById[7372] = "k_EMsgGCToGCGrantTournamentItem"] = 7372;
        values[valuesById[7373] = "k_EMsgGCProcessFantasyScheduledEvent"] = 7373;
        values[valuesById[7375] = "k_EMsgGCToGCUpgradeTwitchViewerItems"] = 7375;
        values[valuesById[7376] = "k_EMsgGCToGCGetLiveMatchAffiliates"] = 7376;
        values[valuesById[7377] = "k_EMsgGCToGCGetLiveMatchAffiliatesResponse"] = 7377;
        values[valuesById[7378] = "k_EMsgGCToGCUpdatePlayerPennantCounts"] = 7378;
        values[valuesById[7379] = "k_EMsgGCToGCGetPlayerPennantCounts"] = 7379;
        values[valuesById[7380] = "k_EMsgGCToGCGetPlayerPennantCountsResponse"] = 7380;
        values[valuesById[7381] = "k_EMsgGCGameMatchSignOutPermissionRequest"] = 7381;
        values[valuesById[7382] = "k_EMsgGCGameMatchSignOutPermissionResponse"] = 7382;
        values[valuesById[7383] = "k_EMsgDOTAChatChannelMemberUpdate"] = 7383;
        values[valuesById[7384] = "k_EMsgDOTAAwardEventPoints"] = 7384;
        values[valuesById[7387] = "k_EMsgDOTAGetEventPoints"] = 7387;
        values[valuesById[7388] = "k_EMsgDOTAGetEventPointsResponse"] = 7388;
        values[valuesById[7393] = "k_EMsgDOTASendFriendRecruits"] = 7393;
        values[valuesById[7394] = "k_EMsgDOTAFriendRecruitsRequest"] = 7394;
        values[valuesById[7395] = "k_EMsgDOTAFriendRecruitsResponse"] = 7395;
        values[valuesById[7396] = "k_EMsgDOTAFriendRecruitInviteAcceptDecline"] = 7396;
        values[valuesById[7397] = "k_EMsgGCPartyLeaderWatchGamePrompt"] = 7397;
        values[valuesById[7398] = "k_EMsgDOTAFrostivusTimeElapsed"] = 7398;
        values[valuesById[7402] = "k_EMsgDOTALiveLeagueGameUpdate"] = 7402;
        values[valuesById[7403] = "k_EMsgDOTAChatGetUserList"] = 7403;
        values[valuesById[7404] = "k_EMsgDOTAChatGetUserListResponse"] = 7404;
        values[valuesById[7405] = "k_EMsgGCCompendiumSetSelection"] = 7405;
        values[valuesById[7406] = "k_EMsgGCCompendiumDataRequest"] = 7406;
        values[valuesById[7407] = "k_EMsgGCCompendiumDataResponse"] = 7407;
        values[valuesById[7408] = "k_EMsgDOTAGetPlayerMatchHistory"] = 7408;
        values[valuesById[7409] = "k_EMsgDOTAGetPlayerMatchHistoryResponse"] = 7409;
        values[valuesById[7410] = "k_EMsgGCToGCMatchmakingAddParty"] = 7410;
        values[valuesById[7411] = "k_EMsgGCToGCMatchmakingRemoveParty"] = 7411;
        values[valuesById[7412] = "k_EMsgGCToGCMatchmakingRemoveAllParties"] = 7412;
        values[valuesById[7413] = "k_EMsgGCToGCMatchmakingMatchFound"] = 7413;
        values[valuesById[7414] = "k_EMsgGCToGCUpdateMatchManagementStats"] = 7414;
        values[valuesById[7415] = "k_EMsgGCToGCUpdateMatchmakingStats"] = 7415;
        values[valuesById[7416] = "k_EMsgGCToServerPingRequest"] = 7416;
        values[valuesById[7417] = "k_EMsgGCToServerPingResponse"] = 7417;
        values[valuesById[7418] = "k_EMsgGCToServerConsoleCommand"] = 7418;
        values[valuesById[7423] = "k_EMsgGCMakeOffering"] = 7423;
        values[valuesById[7424] = "k_EMsgGCRequestOfferings"] = 7424;
        values[valuesById[7425] = "k_EMsgGCRequestOfferingsResponse"] = 7425;
        values[valuesById[7426] = "k_EMsgGCToGCProcessMatchLeaver"] = 7426;
        values[valuesById[7427] = "k_EMsgGCNotificationsRequest"] = 7427;
        values[valuesById[7428] = "k_EMsgGCNotificationsResponse"] = 7428;
        values[valuesById[7429] = "k_EMsgGCToGCModifyNotification"] = 7429;
        values[valuesById[7430] = "k_EMsgGCToGCSetNewNotifications"] = 7430;
        values[valuesById[7434] = "k_EMsgGCLeagueAdminList"] = 7434;
        values[valuesById[7435] = "k_EMsgGCNotificationsMarkReadRequest"] = 7435;
        values[valuesById[7436] = "k_EMsgGCFantasyMessageAdd"] = 7436;
        values[valuesById[7437] = "k_EMsgGCFantasyMessagesRequest"] = 7437;
        values[valuesById[7438] = "k_EMsgGCFantasyMessagesResponse"] = 7438;
        values[valuesById[7439] = "k_EMsgGCFantasyScheduledMatchesRequest"] = 7439;
        values[valuesById[7440] = "k_EMsgGCFantasyScheduledMatchesResponse"] = 7440;
        values[valuesById[7443] = "k_EMsgGCEventGameCreate"] = 7443;
        values[valuesById[7444] = "k_EMsgGCPerfectWorldUserLookupRequest"] = 7444;
        values[valuesById[7445] = "k_EMsgGCPerfectWorldUserLookupResponse"] = 7445;
        values[valuesById[7448] = "k_EMsgGCFantasyRemoveOwner"] = 7448;
        values[valuesById[7449] = "k_EMsgGCFantasyRemoveOwnerResponse"] = 7449;
        values[valuesById[7450] = "k_EMsgGCRequestBatchPlayerResources"] = 7450;
        values[valuesById[7451] = "k_EMsgGCRequestBatchPlayerResourcesResponse"] = 7451;
        values[valuesById[7452] = "k_EMsgGCToGCSendUpdateLeagues"] = 7452;
        values[valuesById[7453] = "k_EMsgGCCompendiumSetSelectionResponse"] = 7453;
        values[valuesById[7454] = "k_EMsgGCPlayerInfoRequest"] = 7454;
        values[valuesById[7455] = "k_EMsgGCPlayerInfo"] = 7455;
        values[valuesById[7456] = "k_EMsgGCPlayerInfoSubmit"] = 7456;
        values[valuesById[7457] = "k_EMsgGCPlayerInfoSubmitResponse"] = 7457;
        values[valuesById[7458] = "k_EMsgGCToGCGetAccountLevel"] = 7458;
        values[valuesById[7459] = "k_EMsgGCToGCGetAccountLevelResponse"] = 7459;
        values[valuesById[7460] = "k_EMsgGCToGCGetAccountPartner"] = 7460;
        values[valuesById[7461] = "k_EMsgGCToGCGetAccountPartnerResponse"] = 7461;
        values[valuesById[7464] = "k_EMsgDOTAGetWeekendTourneySchedule"] = 7464;
        values[valuesById[7465] = "k_EMsgDOTAWeekendTourneySchedule"] = 7465;
        values[valuesById[7466] = "k_EMsgGCJoinableCustomGameModesRequest"] = 7466;
        values[valuesById[7467] = "k_EMsgGCJoinableCustomGameModesResponse"] = 7467;
        values[valuesById[7468] = "k_EMsgGCJoinableCustomLobbiesRequest"] = 7468;
        values[valuesById[7469] = "k_EMsgGCJoinableCustomLobbiesResponse"] = 7469;
        values[valuesById[7470] = "k_EMsgGCQuickJoinCustomLobby"] = 7470;
        values[valuesById[7471] = "k_EMsgGCQuickJoinCustomLobbyResponse"] = 7471;
        values[valuesById[7472] = "k_EMsgGCToGCGrantEventPointAction"] = 7472;
        values[valuesById[7475] = "k_EMsgServerGrantSurveyPermission"] = 7475;
        values[valuesById[7476] = "k_EMsgServerGrantSurveyPermissionResponse"] = 7476;
        values[valuesById[7477] = "k_EMsgClientProvideSurveyResult"] = 7477;
        values[valuesById[7478] = "k_EMsgGCToGCSetCompendiumSelection"] = 7478;
        values[valuesById[7480] = "k_EMsgGCToGCUpdateTI4HeroQuest"] = 7480;
        values[valuesById[7481] = "k_EMsgGCCompendiumDataChanged"] = 7481;
        values[valuesById[7482] = "k_EMsgDOTAFantasyLeagueFindRequest"] = 7482;
        values[valuesById[7483] = "k_EMsgDOTAFantasyLeagueFindResponse"] = 7483;
        values[valuesById[7484] = "k_EMsgGCHasItemQuery"] = 7484;
        values[valuesById[7485] = "k_EMsgGCHasItemResponse"] = 7485;
        values[valuesById[7486] = "k_EMsgGCConsumeFantasyTicket"] = 7486;
        values[valuesById[7487] = "k_EMsgGCConsumeFantasyTicketFailure"] = 7487;
        values[valuesById[7488] = "k_EMsgGCToGCGrantEventPointActionMsg"] = 7488;
        values[valuesById[7489] = "k_EMsgClientToGCTrackDialogResult"] = 7489;
        values[valuesById[7490] = "k_EMsgGCFantasyLeaveLeagueRequest"] = 7490;
        values[valuesById[7491] = "k_EMsgGCFantasyLeaveLeagueResponse"] = 7491;
        values[valuesById[7492] = "k_EMsgGCToGCGetCompendiumSelections"] = 7492;
        values[valuesById[7493] = "k_EMsgGCToGCGetCompendiumSelectionsResponse"] = 7493;
        values[valuesById[7494] = "k_EMsgServerToGCMatchConnectionStats"] = 7494;
        values[valuesById[7495] = "k_EMsgGCToClientTournamentItemDrop"] = 7495;
        values[valuesById[7496] = "k_EMsgSQLDelayedGrantLeagueDrop"] = 7496;
        values[valuesById[7497] = "k_EMsgServerGCUpdateSpectatorCount"] = 7497;
        values[valuesById[7499] = "k_EMsgGCFantasyPlayerScoreDetailsRequest"] = 7499;
        values[valuesById[7500] = "k_EMsgGCFantasyPlayerScoreDetailsResponse"] = 7500;
        values[valuesById[7501] = "k_EMsgGCToGCEmoticonUnlock"] = 7501;
        values[valuesById[7502] = "k_EMsgSignOutDraftInfo"] = 7502;
        values[valuesById[7503] = "k_EMsgClientToGCEmoticonDataRequest"] = 7503;
        values[valuesById[7504] = "k_EMsgGCToClientEmoticonData"] = 7504;
        values[valuesById[7505] = "k_EMsgGCPracticeLobbyToggleBroadcastChannelCameramanStatus"] = 7505;
        values[valuesById[7506] = "k_EMsgGCToGCCreateWeekendTourneyRequest"] = 7506;
        values[valuesById[7507] = "k_EMsgGCToGCCreateWeekendTourneyResponse"] = 7507;
        values[valuesById[7513] = "k_EMsgClientToGCSetAdditionalEquips"] = 7513;
        values[valuesById[7514] = "k_EMsgClientToGCGetAdditionalEquips"] = 7514;
        values[valuesById[7515] = "k_EMsgClientToGCGetAdditionalEquipsResponse"] = 7515;
        values[valuesById[7516] = "k_EMsgServerToGCGetAdditionalEquips"] = 7516;
        values[valuesById[7517] = "k_EMsgServerToGCGetAdditionalEquipsResponse"] = 7517;
        values[valuesById[7518] = "k_EMsgDOTARedeemItem"] = 7518;
        values[valuesById[7519] = "k_EMsgDOTARedeemItemResponse"] = 7519;
        values[valuesById[7520] = "k_EMsgSQLGCToGCGrantAllHeroProgress"] = 7520;
        values[valuesById[7521] = "k_EMsgClientToGCGetAllHeroProgress"] = 7521;
        values[valuesById[7522] = "k_EMsgClientToGCGetAllHeroProgressResponse"] = 7522;
        values[valuesById[7523] = "k_EMsgGCToGCGetServerForClient"] = 7523;
        values[valuesById[7524] = "k_EMsgGCToGCGetServerForClientResponse"] = 7524;
        values[valuesById[7525] = "k_EMsgSQLProcessTournamentGameOutcome"] = 7525;
        values[valuesById[7526] = "k_EMsgSQLGrantTrophyToAccount"] = 7526;
        values[valuesById[7527] = "k_EMsgClientToGCGetTrophyList"] = 7527;
        values[valuesById[7528] = "k_EMsgClientToGCGetTrophyListResponse"] = 7528;
        values[valuesById[7529] = "k_EMsgGCToClientTrophyAwarded"] = 7529;
        values[valuesById[7530] = "k_EMsgGCGameBotMatchSignOut"] = 7530;
        values[valuesById[7531] = "k_EMsgGCGameBotMatchSignOutPermissionRequest"] = 7531;
        values[valuesById[7532] = "k_EMsgSignOutBotInfo"] = 7532;
        values[valuesById[7533] = "k_EMsgGCToGCUpdateProfileCards"] = 7533;
        values[valuesById[7534] = "k_EMsgClientToGCGetProfileCard"] = 7534;
        values[valuesById[7535] = "k_EMsgClientToGCGetProfileCardResponse"] = 7535;
        values[valuesById[7536] = "k_EMsgServerToGCGetProfileCard"] = 7536;
        values[valuesById[7537] = "k_EMsgServerToGCGetProfileCardResponse"] = 7537;
        values[valuesById[7538] = "k_EMsgClientToGCSetProfileCardSlots"] = 7538;
        values[valuesById[7539] = "k_EMsgGCToClientProfileCardUpdated"] = 7539;
        values[valuesById[7540] = "k_EMsgServerToGCVictoryPredictions"] = 7540;
        values[valuesById[7542] = "k_EMsgClientToGCMarkNotificationListRead"] = 7542;
        values[valuesById[7544] = "k_EMsgServerToGCSuspiciousActivity"] = 7544;
        values[valuesById[7545] = "k_EMsgSignOutCommunicationSummary"] = 7545;
        values[valuesById[7546] = "k_EMsgServerToGCRequestStatus_Response"] = 7546;
        values[valuesById[7547] = "k_EMsgClientToGCCreateHeroStatue"] = 7547;
        values[valuesById[7548] = "k_EMsgGCToClientHeroStatueCreateResult"] = 7548;
        values[valuesById[7549] = "k_EMsgGCGCToLANServerRelayConnect"] = 7549;
        values[valuesById[7551] = "k_EMsgServerToGCGetIngameEventData"] = 7551;
        values[valuesById[7552] = "k_EMsgGCToGCUpdateIngameEventDataBroadcast"] = 7552;
        values[valuesById[7553] = "k_EMsgGCToServerIngameEventData_OraclePA"] = 7553;
        values[valuesById[7554] = "k_EMsgServerToGCReportKillSummaries"] = 7554;
        values[valuesById[7555] = "k_EMsgGCToGCReportKillSummaries"] = 7555;
        values[valuesById[7556] = "k_EMsgGCToGCUpdateAssassinMinigame"] = 7556;
        values[valuesById[7557] = "k_EMsgGCToGCFantasySetMatchLeague"] = 7557;
        values[valuesById[7561] = "k_EMsgGCToGCUpdatePlayerPredictions"] = 7561;
        values[valuesById[7562] = "k_EMsgGCToServerPredictionResult"] = 7562;
        values[valuesById[7563] = "k_EMsgServerToGCSignoutAwardAdditionalDrops"] = 7563;
        values[valuesById[7564] = "k_EMsgGCToGCSignoutAwardAdditionalDrops"] = 7564;
        values[valuesById[7565] = "k_EMsgGCToClientEventStatusChanged"] = 7565;
        values[valuesById[7566] = "k_EMsgGCHasItemDefsQuery"] = 7566;
        values[valuesById[7567] = "k_EMsgGCHasItemDefsResponse"] = 7567;
        values[valuesById[7569] = "k_EMsgGCToGCReplayMonitorValidateReplay"] = 7569;
        values[valuesById[7572] = "k_EMsgLobbyEventPoints"] = 7572;
        values[valuesById[7573] = "k_EMsgGCToGCGetCustomGameTickets"] = 7573;
        values[valuesById[7574] = "k_EMsgGCToGCGetCustomGameTicketsResponse"] = 7574;
        values[valuesById[7576] = "k_EMsgGCToGCCustomGamePlayed"] = 7576;
        values[valuesById[7577] = "k_EMsgGCToGCGrantEventPointsToUser"] = 7577;
        values[valuesById[7578] = "k_EMsgGCToGCSetEventMMPanicFlushTime"] = 7578;
        values[valuesById[7579] = "k_EMsgGameserverCrashReport"] = 7579;
        values[valuesById[7580] = "k_EMsgGameserverCrashReportResponse"] = 7580;
        values[valuesById[7581] = "k_EMsgGCToClientSteamDatagramTicket"] = 7581;
        values[valuesById[7582] = "k_EMsgGCToGCGrantEventOwnership"] = 7582;
        values[valuesById[7583] = "k_EMsgGCToGCSendAccountsEventPoints"] = 7583;
        values[valuesById[7584] = "k_EMsgClientToGCRerollPlayerChallenge"] = 7584;
        values[valuesById[7585] = "k_EMsgServerToGCRerollPlayerChallenge"] = 7585;
        values[valuesById[7586] = "k_EMsgGCRerollPlayerChallengeResponse"] = 7586;
        values[valuesById[7587] = "k_EMsgSignOutUpdatePlayerChallenge"] = 7587;
        values[valuesById[7588] = "k_EMsgClientToGCSetPartyLeader"] = 7588;
        values[valuesById[7589] = "k_EMsgClientToGCCancelPartyInvites"] = 7589;
        values[valuesById[7590] = "k_EMsgGCToGCMasterReloadAccount"] = 7590;
        values[valuesById[7592] = "k_EMsgSQLGrantLeagueMatchToTicketHolders"] = 7592;
        values[valuesById[7593] = "k_EMsgClientToGCSetAdditionalEquipsResponse"] = 7593;
        values[valuesById[7594] = "k_EMsgGCToGCEmoticonUnlockNoRollback"] = 7594;
        values[valuesById[7595] = "k_EMsgGCToGCGetCompendiumFanfare"] = 7595;
        values[valuesById[7598] = "k_EMsgGCToGCChatNewUserSession"] = 7598;
        values[valuesById[7603] = "k_EMsgClientToGCApplyGemCombiner"] = 7603;
        values[valuesById[7604] = "k_EMsgClientToGCDOTACreateStaticRecipe"] = 7604;
        values[valuesById[7605] = "k_EMsgClientToGCDOTACreateStaticRecipeResponse"] = 7605;
        values[valuesById[7606] = "k_EMsgClientToGCGetAllHeroOrder"] = 7606;
        values[valuesById[7607] = "k_EMsgClientToGCGetAllHeroOrderResponse"] = 7607;
        values[valuesById[7608] = "k_EMsgSQLGCToGCGrantBadgePoints"] = 7608;
        values[valuesById[7609] = "k_EMsgGCToGCGetAccountMatchStatus"] = 7609;
        values[valuesById[7610] = "k_EMsgGCToGCGetAccountMatchStatusResponse"] = 7610;
        values[valuesById[7611] = "k_EMsgGCToGCCheckOwnsEntireEmoticonRange"] = 7611;
        values[valuesById[7612] = "k_EMsgGCToGCCheckOwnsEntireEmoticonRangeResponse"] = 7612;
        values[valuesById[7619] = "k_EMsgClientToGCRecycleHeroRelic"] = 7619;
        values[valuesById[7620] = "k_EMsgClientToGCRecycleHeroRelicResponse"] = 7620;
        values[valuesById[7621] = "k_EMsgGCToGCRevokeEventOwnership"] = 7621;
        values[valuesById[7622] = "k_EMsgGCToGCUnlockEventPointSpending"] = 7622;
        values[valuesById[7623] = "k_EMsgGCToClientRequestLaneSelection"] = 7623;
        values[valuesById[7624] = "k_EMsgGCToClientRequestLaneSelectionResponse"] = 7624;
        values[valuesById[7625] = "k_EMsgServerToGCCavernCrawlIsHeroActive"] = 7625;
        values[valuesById[7626] = "k_EMsgServerToGCCavernCrawlIsHeroActiveResponse"] = 7626;
        values[valuesById[7627] = "k_EMsgClientToGCPlayerCardSpecificPurchaseRequest"] = 7627;
        values[valuesById[7628] = "k_EMsgClientToGCPlayerCardSpecificPurchaseResponse"] = 7628;
        values[valuesById[7629] = "k_EMsgGCtoServerTensorflowInstance"] = 7629;
        values[valuesById[7630] = "k_EMsgSQLSetIsLeagueAdmin"] = 7630;
        values[valuesById[7631] = "k_EMsgGCToGCGetLiveLeagueMatches"] = 7631;
        values[valuesById[7632] = "k_EMsgGCToGCGetLiveLeagueMatchesResponse"] = 7632;
        values[valuesById[7633] = "k_EMsgDOTALeagueInfoListAdminsRequest"] = 7633;
        values[valuesById[7634] = "k_EMsgDOTALeagueInfoListAdminsReponse"] = 7634;
        values[valuesById[7645] = "k_EMsgGCToGCLeagueMatchStarted"] = 7645;
        values[valuesById[7646] = "k_EMsgGCToGCLeagueMatchCompleted"] = 7646;
        values[valuesById[7647] = "k_EMsgGCToGCLeagueMatchStartedResponse"] = 7647;
        values[valuesById[7648] = "k_EMsgDOTALeagueNodeRequest"] = 7648;
        values[valuesById[7649] = "k_EMsgDOTALeagueNodeResponse"] = 7649;
        values[valuesById[7650] = "k_EMsgDOTALeagueAvailableLobbyNodesRequest"] = 7650;
        values[valuesById[7651] = "k_EMsgDOTALeagueAvailableLobbyNodes"] = 7651;
        values[valuesById[7652] = "k_EMsgGCToGCLeagueRequest"] = 7652;
        values[valuesById[7653] = "k_EMsgGCToGCLeagueResponse"] = 7653;
        values[valuesById[7654] = "k_EMsgGCToGCLeagueNodeGroupRequest"] = 7654;
        values[valuesById[7655] = "k_EMsgGCToGCLeagueNodeGroupResponse"] = 7655;
        values[valuesById[7656] = "k_EMsgGCToGCLeagueNodeRequest"] = 7656;
        values[valuesById[7657] = "k_EMsgGCToGCLeagueNodeResponse"] = 7657;
        values[valuesById[7658] = "k_EMsgGCToGCRealtimeStatsTerseRequest"] = 7658;
        values[valuesById[7659] = "k_EMsgGCToGCRealtimeStatsTerseResponse"] = 7659;
        values[valuesById[7660] = "k_EMsgGCToGCGetTopMatchesRequest"] = 7660;
        values[valuesById[7661] = "k_EMsgGCToGCGetTopMatchesResponse"] = 7661;
        values[valuesById[7662] = "k_EMsgClientToGCGetFilteredPlayers"] = 7662;
        values[valuesById[7663] = "k_EMsgGCToClientGetFilteredPlayersResponse"] = 7663;
        values[valuesById[7664] = "k_EMsgClientToGCRemoveFilteredPlayer"] = 7664;
        values[valuesById[7665] = "k_EMsgGCToClientRemoveFilteredPlayerResponse"] = 7665;
        values[valuesById[7666] = "k_EMsgGCToClientPlayerBeaconState"] = 7666;
        values[valuesById[7667] = "k_EMsgGCToClientPartyBeaconUpdate"] = 7667;
        values[valuesById[7668] = "k_EMsgGCToClientPartySearchInvite"] = 7668;
        values[valuesById[7669] = "k_EMsgClientToGCUpdatePartyBeacon"] = 7669;
        values[valuesById[7670] = "k_EMsgClientToGCRequestActiveBeaconParties"] = 7670;
        values[valuesById[7671] = "k_EMsgGCToClientRequestActiveBeaconPartiesResponse"] = 7671;
        values[valuesById[7672] = "k_EMsgClientToGCManageFavorites"] = 7672;
        values[valuesById[7673] = "k_EMsgGCToClientManageFavoritesResponse"] = 7673;
        values[valuesById[7674] = "k_EMsgClientToGCJoinPartyFromBeacon"] = 7674;
        values[valuesById[7675] = "k_EMsgGCToClientJoinPartyFromBeaconResponse"] = 7675;
        values[valuesById[7676] = "k_EMsgClientToGCGetFavoritePlayers"] = 7676;
        values[valuesById[7677] = "k_EMsgGCToClientGetFavoritePlayersResponse"] = 7677;
        values[valuesById[7678] = "k_EMsgClientToGCVerifyFavoritePlayers"] = 7678;
        values[valuesById[7679] = "k_EMsgGCToClientVerifyFavoritePlayersResponse"] = 7679;
        values[valuesById[7680] = "k_EMsgGCToClientPartySearchInvites"] = 7680;
        values[valuesById[7681] = "k_EMsgGCToClientRequestMMInfo"] = 7681;
        values[valuesById[7682] = "k_EMsgClientToGCMMInfo"] = 7682;
        values[valuesById[7683] = "k_EMsgSignOutTextMuteInfo"] = 7683;
        values[valuesById[8001] = "k_EMsgGCDev_GrantWarKill"] = 8001;
        values[valuesById[8004] = "k_EMsgServerToGCLockCharmTrading"] = 8004;
        values[valuesById[8006] = "k_EMsgClientToGCPlayerStatsRequest"] = 8006;
        values[valuesById[8007] = "k_EMsgGCToClientPlayerStatsResponse"] = 8007;
        values[valuesById[8008] = "k_EMsgGCClearPracticeLobbyTeam"] = 8008;
        values[valuesById[8009] = "k_EMsgClientToGCFindTopSourceTVGames"] = 8009;
        values[valuesById[8010] = "k_EMsgGCToClientFindTopSourceTVGamesResponse"] = 8010;
        values[valuesById[8011] = "k_EMsgGCLobbyList"] = 8011;
        values[valuesById[8012] = "k_EMsgGCLobbyListResponse"] = 8012;
        values[valuesById[8013] = "k_EMsgGCPlayerStatsMatchSignOut"] = 8013;
        values[valuesById[8014] = "k_EMsgClientToGCCustomGamePlayerCountRequest"] = 8014;
        values[valuesById[8015] = "k_EMsgGCToClientCustomGamePlayerCountResponse"] = 8015;
        values[valuesById[8016] = "k_EMsgClientToGCSocialFeedPostCommentRequest"] = 8016;
        values[valuesById[8017] = "k_EMsgGCToClientSocialFeedPostCommentResponse"] = 8017;
        values[valuesById[8018] = "k_EMsgClientToGCCustomGamesFriendsPlayedRequest"] = 8018;
        values[valuesById[8019] = "k_EMsgGCToClientCustomGamesFriendsPlayedResponse"] = 8019;
        values[valuesById[8020] = "k_EMsgClientToGCFriendsPlayedCustomGameRequest"] = 8020;
        values[valuesById[8021] = "k_EMsgGCToClientFriendsPlayedCustomGameResponse"] = 8021;
        values[valuesById[8024] = "k_EMsgGCTopCustomGamesList"] = 8024;
        values[valuesById[8029] = "k_EMsgClientToGCSetPartyOpen"] = 8029;
        values[valuesById[8030] = "k_EMsgClientToGCMergePartyInvite"] = 8030;
        values[valuesById[8031] = "k_EMsgGCToClientMergeGroupInviteReply"] = 8031;
        values[valuesById[8032] = "k_EMsgClientToGCMergePartyResponse"] = 8032;
        values[valuesById[8033] = "k_EMsgGCToClientMergePartyResponseReply"] = 8033;
        values[valuesById[8034] = "k_EMsgClientToGCGetProfileCardStats"] = 8034;
        values[valuesById[8035] = "k_EMsgClientToGCGetProfileCardStatsResponse"] = 8035;
        values[valuesById[8036] = "k_EMsgClientToGCTopLeagueMatchesRequest"] = 8036;
        values[valuesById[8037] = "k_EMsgClientToGCTopFriendMatchesRequest"] = 8037;
        values[valuesById[8040] = "k_EMsgGCToClientProfileCardStatsUpdated"] = 8040;
        values[valuesById[8041] = "k_EMsgServerToGCRealtimeStats"] = 8041;
        values[valuesById[8042] = "k_EMsgGCToServerRealtimeStatsStartStop"] = 8042;
        values[valuesById[8045] = "k_EMsgGCToGCGetServersForClients"] = 8045;
        values[valuesById[8046] = "k_EMsgGCToGCGetServersForClientsResponse"] = 8046;
        values[valuesById[8047] = "k_EMsgGCPracticeLobbyKickFromTeam"] = 8047;
        values[valuesById[8048] = "k_EMsgDOTAChatGetMemberCount"] = 8048;
        values[valuesById[8049] = "k_EMsgDOTAChatGetMemberCountResponse"] = 8049;
        values[valuesById[8050] = "k_EMsgClientToGCSocialFeedPostMessageRequest"] = 8050;
        values[valuesById[8051] = "k_EMsgGCToClientSocialFeedPostMessageResponse"] = 8051;
        values[valuesById[8052] = "k_EMsgCustomGameListenServerStartedLoading"] = 8052;
        values[valuesById[8053] = "k_EMsgCustomGameClientFinishedLoading"] = 8053;
        values[valuesById[8054] = "k_EMsgGCPracticeLobbyCloseBroadcastChannel"] = 8054;
        values[valuesById[8055] = "k_EMsgGCStartFindingMatchResponse"] = 8055;
        values[valuesById[8057] = "k_EMsgSQLGCToGCGrantAccountFlag"] = 8057;
        values[valuesById[8058] = "k_EMsgGCToGCGetAccountFlags"] = 8058;
        values[valuesById[8059] = "k_EMsgGCToGCGetAccountFlagsResponse"] = 8059;
        values[valuesById[8060] = "k_EMsgSignOutWagerStats"] = 8060;
        values[valuesById[8061] = "k_EMsgGCToClientTopLeagueMatchesResponse"] = 8061;
        values[valuesById[8062] = "k_EMsgGCToClientTopFriendMatchesResponse"] = 8062;
        values[valuesById[8063] = "k_EMsgClientToGCMatchesMinimalRequest"] = 8063;
        values[valuesById[8064] = "k_EMsgClientToGCMatchesMinimalResponse"] = 8064;
        values[valuesById[8065] = "k_EMsgGCToGCGetProfileBadgePoints"] = 8065;
        values[valuesById[8066] = "k_EMsgGCToGCGetProfileBadgePointsResponse"] = 8066;
        values[valuesById[8067] = "k_EMsgGCToClientChatRegionsEnabled"] = 8067;
        values[valuesById[8068] = "k_EMsgClientToGCPingData"] = 8068;
        values[valuesById[8069] = "k_EMsgServerToGCMatchDetailsRequest"] = 8069;
        values[valuesById[8070] = "k_EMsgGCToServerMatchDetailsResponse"] = 8070;
        values[valuesById[8071] = "k_EMsgGCToGCEnsureAccountInParty"] = 8071;
        values[valuesById[8072] = "k_EMsgGCToGCEnsureAccountInPartyResponse"] = 8072;
        values[valuesById[8073] = "k_EMsgClientToGCGetProfileTickets"] = 8073;
        values[valuesById[8074] = "k_EMsgClientToGCGetProfileTicketsResponse"] = 8074;
        values[valuesById[8075] = "k_EMsgGCToClientMatchGroupsVersion"] = 8075;
        values[valuesById[8076] = "k_EMsgClientToGCH264Unsupported"] = 8076;
        values[valuesById[8077] = "k_EMsgClientToGCRequestH264Support"] = 8077;
        values[valuesById[8078] = "k_EMsgClientToGCGetQuestProgress"] = 8078;
        values[valuesById[8079] = "k_EMsgClientToGCGetQuestProgressResponse"] = 8079;
        values[valuesById[8080] = "k_EMsgSignOutXPCoins"] = 8080;
        values[valuesById[8081] = "k_EMsgGCToClientMatchSignedOut"] = 8081;
        values[valuesById[8082] = "k_EMsgGCGetHeroStatsHistory"] = 8082;
        values[valuesById[8083] = "k_EMsgGCGetHeroStatsHistoryResponse"] = 8083;
        values[valuesById[8084] = "k_EMsgClientToGCPrivateChatInvite"] = 8084;
        values[valuesById[8088] = "k_EMsgClientToGCPrivateChatKick"] = 8088;
        values[valuesById[8089] = "k_EMsgClientToGCPrivateChatPromote"] = 8089;
        values[valuesById[8090] = "k_EMsgClientToGCPrivateChatDemote"] = 8090;
        values[valuesById[8091] = "k_EMsgGCToClientPrivateChatResponse"] = 8091;
        values[valuesById[8092] = "k_EMsgClientToGCPrivateChatInfoRequest"] = 8092;
        values[valuesById[8093] = "k_EMsgGCToClientPrivateChatInfoResponse"] = 8093;
        values[valuesById[8095] = "k_EMsgClientToGCLatestConductScorecardRequest"] = 8095;
        values[valuesById[8096] = "k_EMsgClientToGCLatestConductScorecard"] = 8096;
        values[valuesById[8097] = "k_EMsgServerToGCPostMatchTip"] = 8097;
        values[valuesById[8098] = "k_EMsgServerToGCPostMatchTipResponse"] = 8098;
        values[valuesById[8099] = "k_EMsgClientToGCWageringRequest"] = 8099;
        values[valuesById[8100] = "k_EMsgGCToClientWageringResponse"] = 8100;
        values[valuesById[8103] = "k_EMsgClientToGCEventGoalsRequest"] = 8103;
        values[valuesById[8104] = "k_EMsgClientToGCEventGoalsResponse"] = 8104;
        values[valuesById[8106] = "k_EMsgClientToGCLeaguePredictions"] = 8106;
        values[valuesById[8107] = "k_EMsgGCToClientLeaguePredictionsResponse"] = 8107;
        values[valuesById[8108] = "k_EMsgGCToGCLeaguePredictionsUpdate"] = 8108;
        values[valuesById[8109] = "k_EMsgClientToGCSuspiciousActivity"] = 8109;
        values[valuesById[8110] = "k_EMsgGCToGCAddUserToPostGameChat"] = 8110;
        values[valuesById[8111] = "k_EMsgClientToGCHasPlayerVotedForMVP"] = 8111;
        values[valuesById[8112] = "k_EMsgClientToGCHasPlayerVotedForMVPResponse"] = 8112;
        values[valuesById[8113] = "k_EMsgClientToGCVoteForMVP"] = 8113;
        values[valuesById[8114] = "k_EMsgClientToGCVoteForMVPResponse"] = 8114;
        values[valuesById[8115] = "k_EMsgGCToGCGetEventOwnership"] = 8115;
        values[valuesById[8116] = "k_EMsgGCToGCGetEventOwnershipResponse"] = 8116;
        values[valuesById[8117] = "k_EMsgGCToClientAutomatedTournamentStateChange"] = 8117;
        values[valuesById[8118] = "k_EMsgClientToGCWeekendTourneyOpts"] = 8118;
        values[valuesById[8119] = "k_EMsgClientToGCWeekendTourneyOptsResponse"] = 8119;
        values[valuesById[8120] = "k_EMsgClientToGCWeekendTourneyLeave"] = 8120;
        values[valuesById[8121] = "k_EMsgClientToGCWeekendTourneyLeaveResponse"] = 8121;
        values[valuesById[8124] = "k_EMsgClientToGCTeammateStatsRequest"] = 8124;
        values[valuesById[8125] = "k_EMsgClientToGCTeammateStatsResponse"] = 8125;
        values[valuesById[8126] = "k_EMsgClientToGCGetGiftPermissions"] = 8126;
        values[valuesById[8127] = "k_EMsgClientToGCGetGiftPermissionsResponse"] = 8127;
        values[valuesById[8128] = "k_EMsgClientToGCVoteForArcana"] = 8128;
        values[valuesById[8129] = "k_EMsgClientToGCVoteForArcanaResponse"] = 8129;
        values[valuesById[8130] = "k_EMsgClientToGCRequestArcanaVotesRemaining"] = 8130;
        values[valuesById[8131] = "k_EMsgClientToGCRequestArcanaVotesRemainingResponse"] = 8131;
        values[valuesById[8132] = "k_EMsgGCTransferTeamAdminResponse"] = 8132;
        values[valuesById[8135] = "k_EMsgGCToClientTeamInfo"] = 8135;
        values[valuesById[8136] = "k_EMsgGCToClientTeamsInfo"] = 8136;
        values[valuesById[8137] = "k_EMsgClientToGCMyTeamInfoRequest"] = 8137;
        values[valuesById[8140] = "k_EMsgClientToGCPublishUserStat"] = 8140;
        values[valuesById[8141] = "k_EMsgGCToGCSignoutSpendWager"] = 8141;
        values[valuesById[8144] = "k_EMsgGCSubmitLobbyMVPVote"] = 8144;
        values[valuesById[8145] = "k_EMsgGCSubmitLobbyMVPVoteResponse"] = 8145;
        values[valuesById[8150] = "k_EMsgSignOutCommunityGoalProgress"] = 8150;
        values[valuesById[8151] = "k_EMsgGCToClientLobbyMVPNotifyRecipient"] = 8151;
        values[valuesById[8152] = "k_EMsgGCToClientLobbyMVPAwarded"] = 8152;
        values[valuesById[8153] = "k_EMsgGCToClientQuestProgressUpdated"] = 8153;
        values[valuesById[8154] = "k_EMsgGCToClientWageringUpdate"] = 8154;
        values[valuesById[8155] = "k_EMsgGCToClientArcanaVotesUpdate"] = 8155;
        values[valuesById[8156] = "k_EMsgClientToGCAddTI6TreeProgress"] = 8156;
        values[valuesById[8157] = "k_EMsgClientToGCSetSpectatorLobbyDetails"] = 8157;
        values[valuesById[8158] = "k_EMsgClientToGCSetSpectatorLobbyDetailsResponse"] = 8158;
        values[valuesById[8159] = "k_EMsgClientToGCCreateSpectatorLobby"] = 8159;
        values[valuesById[8160] = "k_EMsgClientToGCCreateSpectatorLobbyResponse"] = 8160;
        values[valuesById[8161] = "k_EMsgClientToGCSpectatorLobbyList"] = 8161;
        values[valuesById[8162] = "k_EMsgClientToGCSpectatorLobbyListResponse"] = 8162;
        values[valuesById[8163] = "k_EMsgSpectatorLobbyGameDetails"] = 8163;
        values[valuesById[8166] = "k_EMsgServerToGCCompendiumInGamePredictionResults"] = 8166;
        values[valuesById[8167] = "k_EMsgServerToGCCloseCompendiumInGamePredictionVoting"] = 8167;
        values[valuesById[8168] = "k_EMsgClientToGCOpenPlayerCardPack"] = 8168;
        values[valuesById[8169] = "k_EMsgClientToGCOpenPlayerCardPackResponse"] = 8169;
        values[valuesById[8170] = "k_EMsgClientToGCSelectCompendiumInGamePrediction"] = 8170;
        values[valuesById[8171] = "k_EMsgClientToGCSelectCompendiumInGamePredictionResponse"] = 8171;
        values[valuesById[8172] = "k_EMsgClientToGCWeekendTourneyGetPlayerStats"] = 8172;
        values[valuesById[8173] = "k_EMsgClientToGCWeekendTourneyGetPlayerStatsResponse"] = 8173;
        values[valuesById[8174] = "k_EMsgClientToGCRecyclePlayerCard"] = 8174;
        values[valuesById[8175] = "k_EMsgClientToGCRecyclePlayerCardResponse"] = 8175;
        values[valuesById[8176] = "k_EMsgClientToGCCreatePlayerCardPack"] = 8176;
        values[valuesById[8177] = "k_EMsgClientToGCCreatePlayerCardPackResponse"] = 8177;
        values[valuesById[8178] = "k_EMsgClientToGCGetPlayerCardRosterRequest"] = 8178;
        values[valuesById[8179] = "k_EMsgClientToGCGetPlayerCardRosterResponse"] = 8179;
        values[valuesById[8180] = "k_EMsgClientToGCSetPlayerCardRosterRequest"] = 8180;
        values[valuesById[8181] = "k_EMsgClientToGCSetPlayerCardRosterResponse"] = 8181;
        values[valuesById[8183] = "k_EMsgServerToGCCloseCompendiumInGamePredictionVotingResponse"] = 8183;
        values[valuesById[8185] = "k_EMsgServerToGCCompendiumInGamePredictionResultsResponse"] = 8185;
        values[valuesById[8186] = "k_EMsgLobbyBattleCupVictory"] = 8186;
        values[valuesById[8187] = "k_EMsgGCGetPlayerCardItemInfo"] = 8187;
        values[valuesById[8188] = "k_EMsgGCGetPlayerCardItemInfoResponse"] = 8188;
        values[valuesById[8189] = "k_EMsgClientToGCRequestSteamDatagramTicket"] = 8189;
        values[valuesById[8190] = "k_EMsgClientToGCRequestSteamDatagramTicketResponse"] = 8190;
        values[valuesById[8191] = "k_EMsgGCToClientBattlePassRollupRequest"] = 8191;
        values[valuesById[8192] = "k_EMsgGCToClientBattlePassRollupResponse"] = 8192;
        values[valuesById[8193] = "k_EMsgClientToGCTransferSeasonalMMRRequest"] = 8193;
        values[valuesById[8194] = "k_EMsgClientToGCTransferSeasonalMMRResponse"] = 8194;
        values[valuesById[8195] = "k_EMsgGCToGCPublicChatCommunicationBan"] = 8195;
        values[valuesById[8196] = "k_EMsgGCToGCUpdateAccountPublicChatBan"] = 8196;
        values[valuesById[8197] = "k_EMsgGCChatReportPublicSpam"] = 8197;
        values[valuesById[8198] = "k_EMsgClientToGCSetPartyBuilderOptions"] = 8198;
        values[valuesById[8199] = "k_EMsgClientToGCSetPartyBuilderOptionsResponse"] = 8199;
        values[valuesById[8200] = "k_EMsgGCToClientPlaytestStatus"] = 8200;
        values[valuesById[8201] = "k_EMsgClientToGCJoinPlaytest"] = 8201;
        values[valuesById[8202] = "k_EMsgClientToGCJoinPlaytestResponse"] = 8202;
        values[valuesById[8203] = "k_EMsgLobbyPlaytestDetails"] = 8203;
        values[valuesById[8204] = "k_EMsgDOTASetFavoriteTeam"] = 8204;
        values[valuesById[8205] = "k_EMsgGCToClientBattlePassRollupListRequest"] = 8205;
        values[valuesById[8206] = "k_EMsgGCToClientBattlePassRollupListResponse"] = 8206;
        values[valuesById[8207] = "k_EMsgGCIsProQuery"] = 8207;
        values[valuesById[8208] = "k_EMsgGCIsProResponse"] = 8208;
        values[valuesById[8209] = "k_EMsgDOTAClaimEventAction"] = 8209;
        values[valuesById[8210] = "k_EMsgDOTAClaimEventActionResponse"] = 8210;
        values[valuesById[8211] = "k_EMsgDOTAGetPeriodicResource"] = 8211;
        values[valuesById[8212] = "k_EMsgDOTAGetPeriodicResourceResponse"] = 8212;
        values[valuesById[8213] = "k_EMsgDOTAPeriodicResourceUpdated"] = 8213;
        values[valuesById[8214] = "k_EMsgServerToGCSpendWager"] = 8214;
        values[valuesById[8215] = "k_EMsgGCToGCSignoutSpendWagerToken"] = 8215;
        values[valuesById[8216] = "k_EMsgSubmitTriviaQuestionAnswer"] = 8216;
        values[valuesById[8217] = "k_EMsgSubmitTriviaQuestionAnswerResponse"] = 8217;
        values[valuesById[8218] = "k_EMsgClientToGCGiveTip"] = 8218;
        values[valuesById[8219] = "k_EMsgClientToGCGiveTipResponse"] = 8219;
        values[valuesById[8220] = "k_EMsgStartTriviaSession"] = 8220;
        values[valuesById[8221] = "k_EMsgStartTriviaSessionResponse"] = 8221;
        values[valuesById[8222] = "k_EMsgAnchorPhoneNumberRequest"] = 8222;
        values[valuesById[8223] = "k_EMsgAnchorPhoneNumberResponse"] = 8223;
        values[valuesById[8224] = "k_EMsgUnanchorPhoneNumberRequest"] = 8224;
        values[valuesById[8225] = "k_EMsgUnanchorPhoneNumberResponse"] = 8225;
        values[valuesById[8226] = "k_EMsgGCToClientTipNotification"] = 8226;
        values[valuesById[8227] = "k_EMsgClientToGCRequestSlarkGameResult"] = 8227;
        values[valuesById[8228] = "k_EMsgClientToGCRequestSlarkGameResultResponse"] = 8228;
        values[valuesById[8229] = "k_EMsgGCToGCSignoutSpendRankWager"] = 8229;
        values[valuesById[8230] = "k_EMsgGCToGCGetFavoriteTeam"] = 8230;
        values[valuesById[8231] = "k_EMsgGCToGCGetFavoriteTeamResponse"] = 8231;
        values[valuesById[8232] = "k_EMsgSignOutEventGameData"] = 8232;
        values[valuesById[8233] = "k_EMsgGCToClientAllStarVotesRequest"] = 8233;
        values[valuesById[8234] = "k_EMsgGCToClientAllStarVotesReply"] = 8234;
        values[valuesById[8236] = "k_EMsgGCToClientAllStarVotesSubmit"] = 8236;
        values[valuesById[8237] = "k_EMsgGCToClientAllStarVotesSubmitReply"] = 8237;
        values[valuesById[8238] = "k_EMsgClientToGCQuickStatsRequest"] = 8238;
        values[valuesById[8239] = "k_EMsgClientToGCQuickStatsResponse"] = 8239;
        values[valuesById[8240] = "k_EMsgGCToGCSubtractEventPointsFromUser"] = 8240;
        values[valuesById[8241] = "k_EMsgSelectionPriorityChoiceRequest"] = 8241;
        values[valuesById[8242] = "k_EMsgSelectionPriorityChoiceResponse"] = 8242;
        values[valuesById[8243] = "k_EMsgGCToGCCompendiumInGamePredictionResults"] = 8243;
        values[valuesById[8244] = "k_EMsgGameAutographReward"] = 8244;
        values[valuesById[8245] = "k_EMsgGameAutographRewardResponse"] = 8245;
        values[valuesById[8246] = "k_EMsgDestroyLobbyRequest"] = 8246;
        values[valuesById[8247] = "k_EMsgDestroyLobbyResponse"] = 8247;
        values[valuesById[8248] = "k_EMsgPurchaseItemWithEventPoints"] = 8248;
        values[valuesById[8249] = "k_EMsgPurchaseItemWithEventPointsResponse"] = 8249;
        values[valuesById[8250] = "k_EMsgServerToGCMatchPlayerItemPurchaseHistory"] = 8250;
        values[valuesById[8251] = "k_EMsgGCToGCGrantPlusHeroMatchResults"] = 8251;
        values[valuesById[8252] = "k_EMsgGCGetHeroTimedStats"] = 8252;
        values[valuesById[8253] = "k_EMsgGCGetHeroTimedStatsResponse"] = 8253;
        values[valuesById[8254] = "k_EMsgLobbyPlayerPlusSubscriptionData"] = 8254;
        values[valuesById[8255] = "k_EMsgServerToGCMatchStateHistory"] = 8255;
        values[valuesById[8256] = "k_EMsgPurchaseHeroRelic"] = 8256;
        values[valuesById[8257] = "k_EMsgPurchaseHeroRelicResponse"] = 8257;
        values[valuesById[8258] = "k_EMsgPurchaseHeroRandomRelic"] = 8258;
        values[valuesById[8259] = "k_EMsgPurchaseHeroRandomRelicResponse"] = 8259;
        values[valuesById[8260] = "k_EMsgClientToGCClaimEventActionUsingItem"] = 8260;
        values[valuesById[8261] = "k_EMsgClientToGCClaimEventActionUsingItemResponse"] = 8261;
        values[valuesById[8262] = "k_EMsgPartyReadyCheckRequest"] = 8262;
        values[valuesById[8263] = "k_EMsgPartyReadyCheckResponse"] = 8263;
        values[valuesById[8264] = "k_EMsgPartyReadyCheckAcknowledge"] = 8264;
        values[valuesById[8265] = "k_EMsgGetRecentPlayTimeFriendsRequest"] = 8265;
        values[valuesById[8266] = "k_EMsgGetRecentPlayTimeFriendsResponse"] = 8266;
        values[valuesById[8267] = "k_EMsgGCToClientCommendNotification"] = 8267;
        values[valuesById[8268] = "k_EMsgProfileRequest"] = 8268;
        values[valuesById[8269] = "k_EMsgProfileResponse"] = 8269;
        values[valuesById[8270] = "k_EMsgProfileUpdate"] = 8270;
        values[valuesById[8271] = "k_EMsgProfileUpdateResponse"] = 8271;
        values[valuesById[8273] = "k_EMsgSuccessfulHero"] = 8273;
        values[valuesById[8274] = "k_EMsgHeroGlobalDataRequest"] = 8274;
        values[valuesById[8275] = "k_EMsgHeroGlobalDataResponse"] = 8275;
        values[valuesById[8276] = "k_EMsgClientToGCRequestPlusWeeklyChallengeResult"] = 8276;
        values[valuesById[8277] = "k_EMsgClientToGCRequestPlusWeeklyChallengeResultResponse"] = 8277;
        values[valuesById[8278] = "k_EMsgGCToGCGrantPlusPrepaidTime"] = 8278;
        values[valuesById[8279] = "k_EMsgPrivateMetadataKeyRequest"] = 8279;
        values[valuesById[8280] = "k_EMsgPrivateMetadataKeyResponse"] = 8280;
        values[valuesById[8281] = "k_EMsgGCToGCReconcilePlusStatus"] = 8281;
        values[valuesById[8282] = "k_EMsgGCToGCCheckPlusStatus"] = 8282;
        values[valuesById[8283] = "k_EMsgGCToGCCheckPlusStatusResponse"] = 8283;
        values[valuesById[8284] = "k_EMsgGCToGCReconcilePlusAutoGrantItems"] = 8284;
        values[valuesById[8285] = "k_EMsgGCToGCReconcilePlusStatusUnreliable"] = 8285;
        values[valuesById[8286] = "k_EMsgActivatePlusFreeTrialRequest"] = 8286;
        values[valuesById[8287] = "k_EMsgActivatePlusFreeTrialResponse"] = 8287;
        values[valuesById[8288] = "k_EMsgGCToClientCavernCrawlMapPathCompleted"] = 8288;
        values[valuesById[8289] = "k_EMsgClientToGCCavernCrawlClaimRoom"] = 8289;
        values[valuesById[8290] = "k_EMsgClientToGCCavernCrawlClaimRoomResponse"] = 8290;
        values[valuesById[8291] = "k_EMsgClientToGCCavernCrawlUseItemOnRoom"] = 8291;
        values[valuesById[8292] = "k_EMsgClientToGCCavernCrawlUseItemOnRoomResponse"] = 8292;
        values[valuesById[8293] = "k_EMsgClientToGCCavernCrawlUseItemOnPath"] = 8293;
        values[valuesById[8294] = "k_EMsgClientToGCCavernCrawlUseItemOnPathResponse"] = 8294;
        values[valuesById[8295] = "k_EMsgClientToGCCavernCrawlRequestMapState"] = 8295;
        values[valuesById[8296] = "k_EMsgClientToGCCavernCrawlRequestMapStateResponse"] = 8296;
        values[valuesById[8297] = "k_EMsgSignOutTips"] = 8297;
        values[valuesById[8298] = "k_EMsgClientToGCRequestEventPointLogV2"] = 8298;
        values[valuesById[8299] = "k_EMsgClientToGCRequestEventPointLogResponseV2"] = 8299;
        values[valuesById[8300] = "k_EMsgClientToGCRequestEventTipsSummary"] = 8300;
        values[valuesById[8301] = "k_EMsgClientToGCRequestEventTipsSummaryResponse"] = 8301;
        values[valuesById[8302] = "k_EMsgHeroGlobalDataAllHeroes"] = 8302;
        values[valuesById[8303] = "k_EMsgClientToGCRequestSocialFeed"] = 8303;
        values[valuesById[8304] = "k_EMsgClientToGCRequestSocialFeedResponse"] = 8304;
        values[valuesById[8305] = "k_EMsgClientToGCRequestSocialFeedComments"] = 8305;
        values[valuesById[8306] = "k_EMsgClientToGCRequestSocialFeedCommentsResponse"] = 8306;
        values[valuesById[8308] = "k_EMsgClientToGCCavernCrawlGetClaimedRoomCount"] = 8308;
        values[valuesById[8309] = "k_EMsgClientToGCCavernCrawlGetClaimedRoomCountResponse"] = 8309;
        values[valuesById[8310] = "k_EMsgGCToGCReconcilePlusAutoGrantItemsUnreliable"] = 8310;
        values[valuesById[8311] = "k_EMsgServerToGCAddBroadcastTimelineEvent"] = 8311;
        values[valuesById[8312] = "k_EMsgGCToServerUpdateSteamBroadcasting"] = 8312;
        values[valuesById[8313] = "k_EMsgClientToGCRecordContestVote"] = 8313;
        values[valuesById[8314] = "k_EMsgGCToClientRecordContestVoteResponse"] = 8314;
        values[valuesById[8315] = "k_EMsgGCToGCGrantAutograph"] = 8315;
        values[valuesById[8316] = "k_EMsgGCToGCGrantAutographResponse"] = 8316;
        values[valuesById[8317] = "k_EMsgSignOutConsumableUsage"] = 8317;
        values[valuesById[8318] = "k_EMsgLobbyEventGameDetails"] = 8318;
        values[valuesById[8319] = "k_EMsgDevGrantEventPoints"] = 8319;
        values[valuesById[8320] = "k_EMsgDevGrantEventPointsResponse"] = 8320;
        values[valuesById[8321] = "k_EMsgDevGrantEventAction"] = 8321;
        values[valuesById[8322] = "k_EMsgDevGrantEventActionResponse"] = 8322;
        values[valuesById[8323] = "k_EMsgDevResetEventState"] = 8323;
        values[valuesById[8324] = "k_EMsgDevResetEventStateResponse"] = 8324;
        values[valuesById[8325] = "k_EMsgGCToGCReconcileEventOwnership"] = 8325;
        values[valuesById[8326] = "k_EMsgConsumeEventSupportGrantItem"] = 8326;
        values[valuesById[8327] = "k_EMsgConsumeEventSupportGrantItemResponse"] = 8327;
        values[valuesById[8328] = "k_EMsgGCToClientClaimEventActionUsingItemCompleted"] = 8328;
        values[valuesById[8329] = "k_EMsgGCToClientCavernCrawlMapUpdated"] = 8329;
        values[valuesById[8330] = "k_EMsgServerToGCRequestPlayerRecentAccomplishments"] = 8330;
        values[valuesById[8331] = "k_EMsgServerToGCRequestPlayerRecentAccomplishmentsResponse"] = 8331;
        values[valuesById[8332] = "k_EMsgClientToGCRequestPlayerRecentAccomplishments"] = 8332;
        values[valuesById[8333] = "k_EMsgClientToGCRequestPlayerRecentAccomplishmentsResponse"] = 8333;
        values[valuesById[8334] = "k_EMsgClientToGCRequestPlayerHeroRecentAccomplishments"] = 8334;
        values[valuesById[8335] = "k_EMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse"] = 8335;
        values[valuesById[8336] = "k_EMsgSignOutEventActionGrants"] = 8336;
        values[valuesById[8337] = "k_EMsgClientToGCRequestPlayerCoachMatches"] = 8337;
        values[valuesById[8338] = "k_EMsgClientToGCRequestPlayerCoachMatchesResponse"] = 8338;
        values[valuesById[8339] = "k_EMsgClientToGCGetTicketCodesRequest"] = 8339;
        values[valuesById[8340] = "k_EMsgClientToGCGetTicketCodesResponse"] = 8340;
        values[valuesById[8341] = "k_EMsgClientToGCSubmitCoachTeammateRating"] = 8341;
        values[valuesById[8342] = "k_EMsgClientToGCSubmitCoachTeammateRatingResponse"] = 8342;
        values[valuesById[8343] = "k_EMsgGCToClientCoachTeammateRatingsChanged"] = 8343;
        values[valuesById[8344] = "k_EMsgClientToGCVoteForLeagueGameMVP"] = 8344;
        values[valuesById[8345] = "k_EMsgClientToGCRequestPlayerCoachMatch"] = 8345;
        values[valuesById[8346] = "k_EMsgClientToGCRequestPlayerCoachMatchResponse"] = 8346;
        values[valuesById[8347] = "k_EMsgClientToGCRequestContestVotes"] = 8347;
        values[valuesById[8348] = "k_EMsgClientToGCRequestContestVotesResponse"] = 8348;
        values[valuesById[8349] = "k_EMsgClientToGCMVPVoteTimeout"] = 8349;
        values[valuesById[8350] = "k_EMsgClientToGCMVPVoteTimeoutResponse"] = 8350;
        values[valuesById[8351] = "k_EMsgClientToGCGetUnderlordsCDKeyRequest"] = 8351;
        values[valuesById[8352] = "k_EMsgClientToGCGetUnderlordsCDKeyResponse"] = 8352;
        values[valuesById[8353] = "k_EMsgDetailedGameStats"] = 8353;
        values[valuesById[8354] = "k_EMsgClientToGCSetFavoriteAllStarPlayer"] = 8354;
        values[valuesById[8355] = "k_EMsgClientToGCSetFavoriteAllStarPlayerResponse"] = 8355;
        values[valuesById[8356] = "k_EMsgAllStarStats"] = 8356;
        values[valuesById[8357] = "k_EMsgClientToGCGetFavoriteAllStarPlayerRequest"] = 8357;
        values[valuesById[8358] = "k_EMsgClientToGCGetFavoriteAllStarPlayerResponse"] = 8358;
        values[valuesById[8359] = "k_EMsgClientToGCVerifyIntegrity"] = 8359;
        values[valuesById[8360] = "k_EMsgMatchMatchmakingStats"] = 8360;
        values[valuesById[8361] = "k_EMsgClientToGCSubmitPlayerMatchSurvey"] = 8361;
        values[valuesById[8362] = "k_EMsgClientToGCSubmitPlayerMatchSurveyResponse"] = 8362;
        values[valuesById[8363] = "k_EMsgSQLGCToGCGrantAllHeroProgressAccount"] = 8363;
        values[valuesById[8364] = "k_EMsgSQLGCToGCGrantAllHeroProgressVictory"] = 8364;
        values[valuesById[8365] = "k_EMsgDevDeleteEventActions"] = 8365;
        values[valuesById[8366] = "k_EMsgDevDeleteEventActionsResponse"] = 8366;
        values[valuesById[8635] = "k_eMsgGCToGCGetAllHeroCurrent"] = 8635;
        values[valuesById[8636] = "k_eMsgGCToGCGetAllHeroCurrentResponse"] = 8636;
        values[valuesById[8637] = "k_EMsgGCSubmitPlayerAvoidRequest"] = 8637;
        values[valuesById[8638] = "k_EMsgGCSubmitPlayerAvoidRequestResponse"] = 8638;
        values[valuesById[8639] = "k_EMsgGCToClientNotificationsUpdated"] = 8639;
        values[valuesById[8640] = "k_EMsgGCtoGCAssociatedExploiterAccountInfo"] = 8640;
        values[valuesById[8641] = "k_EMsgGCtoGCAssociatedExploiterAccountInfoResponse"] = 8641;
        values[valuesById[8642] = "k_EMsgGCtoGCRequestRecalibrationCheck"] = 8642;
        values[valuesById[8643] = "k_EMsgGCToClientVACReminder"] = 8643;
        values[valuesById[8644] = "k_EMsgClientToGCUnderDraftBuy"] = 8644;
        values[valuesById[8645] = "k_EMsgClientToGCUnderDraftBuyResponse"] = 8645;
        values[valuesById[8646] = "k_EMsgClientToGCUnderDraftReroll"] = 8646;
        values[valuesById[8647] = "k_EMsgClientToGCUnderDraftRerollResponse"] = 8647;
        values[valuesById[8648] = "k_EMsgNeutralItemStats"] = 8648;
        values[valuesById[8649] = "k_EMsgClientToGCCreateGuild"] = 8649;
        values[valuesById[8650] = "k_EMsgClientToGCCreateGuildResponse"] = 8650;
        values[valuesById[8651] = "k_EMsgClientToGCSetGuildInfo"] = 8651;
        values[valuesById[8652] = "k_EMsgClientToGCSetGuildInfoResponse"] = 8652;
        values[valuesById[8653] = "k_EMsgClientToGCAddGuildRole"] = 8653;
        values[valuesById[8654] = "k_EMsgClientToGCAddGuildRoleResponse"] = 8654;
        values[valuesById[8655] = "k_EMsgClientToGCModifyGuildRole"] = 8655;
        values[valuesById[8656] = "k_EMsgClientToGCModifyGuildRoleResponse"] = 8656;
        values[valuesById[8657] = "k_EMsgClientToGCRemoveGuildRole"] = 8657;
        values[valuesById[8658] = "k_EMsgClientToGCRemoveGuildRoleResponse"] = 8658;
        values[valuesById[8659] = "k_EMsgClientToGCJoinGuild"] = 8659;
        values[valuesById[8660] = "k_EMsgClientToGCJoinGuildResponse"] = 8660;
        values[valuesById[8661] = "k_EMsgClientToGCLeaveGuild"] = 8661;
        values[valuesById[8662] = "k_EMsgClientToGCLeaveGuildResponse"] = 8662;
        values[valuesById[8663] = "k_EMsgClientToGCInviteToGuild"] = 8663;
        values[valuesById[8664] = "k_EMsgClientToGCInviteToGuildResponse"] = 8664;
        values[valuesById[8665] = "k_EMsgClientToGCDeclineInviteToGuild"] = 8665;
        values[valuesById[8666] = "k_EMsgClientToGCDeclineInviteToGuildResponse"] = 8666;
        values[valuesById[8667] = "k_EMsgClientToGCCancelInviteToGuild"] = 8667;
        values[valuesById[8668] = "k_EMsgClientToGCCancelInviteToGuildResponse"] = 8668;
        values[valuesById[8669] = "k_EMsgClientToGCKickGuildMember"] = 8669;
        values[valuesById[8670] = "k_EMsgClientToGCKickGuildMemberResponse"] = 8670;
        values[valuesById[8671] = "k_EMsgClientToGCSetGuildMemberRole"] = 8671;
        values[valuesById[8672] = "k_EMsgClientToGCSetGuildMemberRoleResponse"] = 8672;
        values[valuesById[8673] = "k_EMsgClientToGCRequestGuildData"] = 8673;
        values[valuesById[8674] = "k_EMsgClientToGCRequestGuildDataResponse"] = 8674;
        values[valuesById[8675] = "k_EMsgGCToClientGuildDataUpdated"] = 8675;
        values[valuesById[8676] = "k_EMsgClientToGCRequestGuildMembership"] = 8676;
        values[valuesById[8677] = "k_EMsgClientToGCRequestGuildMembershipResponse"] = 8677;
        values[valuesById[8678] = "k_EMsgGCToClientGuildMembershipUpdated"] = 8678;
        values[valuesById[8679] = "k_EMsgClientToGCRequestGuildSummary"] = 8679;
        values[valuesById[8680] = "k_EMsgClientToGCRequestGuildSummaryResponse"] = 8680;
        values[valuesById[8681] = "k_EMsgClientToGCAcceptInviteToGuild"] = 8681;
        values[valuesById[8682] = "k_EMsgClientToGCAcceptInviteToGuildResponse"] = 8682;
        values[valuesById[8683] = "k_EMsgClientToGCSetGuildRoleOrder"] = 8683;
        values[valuesById[8684] = "k_EMsgClientToGCSetGuildRoleOrderResponse"] = 8684;
        values[valuesById[8685] = "k_EMsgClientToGCRequestGuildFeed"] = 8685;
        values[valuesById[8686] = "k_EMsgClientToGCRequestGuildFeedResponse"] = 8686;
        values[valuesById[8687] = "k_EMsgClientToGCRequestAccountGuildEventData"] = 8687;
        values[valuesById[8688] = "k_EMsgClientToGCRequestAccountGuildEventDataResponse"] = 8688;
        values[valuesById[8689] = "k_EMsgGCToClientAccountGuildEventDataUpdated"] = 8689;
        values[valuesById[8690] = "k_EMsgClientToGCRequestActiveGuildContracts"] = 8690;
        values[valuesById[8691] = "k_EMsgClientToGCRequestActiveGuildContractsResponse"] = 8691;
        values[valuesById[8692] = "k_EMsgGCToClientActiveGuildContractsUpdated"] = 8692;
        values[valuesById[8693] = "k_EMsgGCToClientGuildFeedUpdated"] = 8693;
        values[valuesById[8694] = "k_EMsgClientToGCSelectGuildContract"] = 8694;
        values[valuesById[8695] = "k_EMsgClientToGCSelectGuildContractResponse"] = 8695;
        values[valuesById[8696] = "k_EMsgGCToGCCompleteGuildContracts"] = 8696;
        values[valuesById[8698] = "k_EMsgClientToGCAddPlayerToGuildChat"] = 8698;
        values[valuesById[8699] = "k_EMsgClientToGCAddPlayerToGuildChatResponse"] = 8699;
        values[valuesById[8700] = "k_EMsgClientToGCUnderDraftSell"] = 8700;
        values[valuesById[8701] = "k_EMsgClientToGCUnderDraftSellResponse"] = 8701;
        values[valuesById[8702] = "k_EMsgClientToGCUnderDraftRequest"] = 8702;
        values[valuesById[8703] = "k_EMsgClientToGCUnderDraftResponse"] = 8703;
        values[valuesById[8704] = "k_EMsgClientToGCUnderDraftRedeemReward"] = 8704;
        values[valuesById[8705] = "k_EMsgClientToGCUnderDraftRedeemRewardResponse"] = 8705;
        values[valuesById[8706] = "k_EMsgClientToGCUnderDraftRedeemSpecialReward"] = 8706;
        values[valuesById[8707] = "k_EMsgClientToGCUnderDraftRedeemSpecialRewardResponse"] = 8707;
        values[valuesById[8708] = "k_EMsgGCToServerLobbyHeroBanRates"] = 8708;
        values[valuesById[8709] = "k_EMsgSetTeamFanContentStatus"] = 8709;
        values[valuesById[8710] = "k_EMsgSetTeamFanContentStatusResponse"] = 8710;
        values[valuesById[8711] = "k_EMsgSignOutGuildContractProgress"] = 8711;
        values[valuesById[8712] = "k_EMsgSignOutMVPStats"] = 8712;
        values[valuesById[8713] = "k_EMsgClientToGCRequestActiveGuildChallenge"] = 8713;
        values[valuesById[8714] = "k_EMsgClientToGCRequestActiveGuildChallengeResponse"] = 8714;
        values[valuesById[8715] = "k_EMsgGCToClientActiveGuildChallengeUpdated"] = 8715;
        values[valuesById[8720] = "k_EMsgSignOutGuildChallengeProgress"] = 8720;
        values[valuesById[8721] = "k_EMsgClientToGCRequestGuildEventMembers"] = 8721;
        values[valuesById[8722] = "k_EMsgClientToGCRequestGuildEventMembersResponse"] = 8722;
        values[valuesById[8723] = "k_EMsgServerToGCRefreshGuildContract"] = 8723;
        values[valuesById[8724] = "k_EMsgServerToGCRefreshGuildContractResponse"] = 8724;
        values[valuesById[8725] = "k_EMsgClientToGCReportGuildContent"] = 8725;
        values[valuesById[8726] = "k_EMsgClientToGCReportGuildContentResponse"] = 8726;
        values[valuesById[8727] = "k_EMsgClientToGCRequestAccountGuildPersonaInfo"] = 8727;
        values[valuesById[8728] = "k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse"] = 8728;
        values[valuesById[8729] = "k_EMsgClientToGCRequestAccountGuildPersonaInfoBatch"] = 8729;
        values[valuesById[8730] = "k_EMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse"] = 8730;
        values[valuesById[8731] = "k_EMsgGCToClientUnderDraftGoldUpdated"] = 8731;
        values[valuesById[8732] = "k_EMsgGCToServerRecordTrainingData"] = 8732;
        values[valuesById[8733] = "k_EMsgSignOutBounties"] = 8733;
        values[valuesById[8735] = "k_EMsgLobbyGauntletProgress"] = 8735;
        values[valuesById[8736] = "k_EMsgClientToGCSubmitDraftTriviaMatchAnswer"] = 8736;
        values[valuesById[8737] = "k_EMsgClientToGCSubmitDraftTriviaMatchAnswerResponse"] = 8737;
        values[valuesById[8738] = "k_EMsgGCToGCSignoutSpendBounty"] = 8738;
        values[valuesById[8739] = "k_EMsgClientToGCApplyGauntletTicket"] = 8739;
        values[valuesById[8740] = "k_EMsgClientToGCUnderDraftRollBackBench"] = 8740;
        values[valuesById[8741] = "k_EMsgClientToGCUnderDraftRollBackBenchResponse"] = 8741;
        values[valuesById[8742] = "k_EMsgGCToGCGetEventActionScore"] = 8742;
        values[valuesById[8743] = "k_EMsgGCToGCGetEventActionScoreResponse"] = 8743;
        values[valuesById[8744] = "k_EMsgServerToGCGetGuildContracts"] = 8744;
        values[valuesById[8745] = "k_EMsgServerToGCGetGuildContractsResponse"] = 8745;
        values[valuesById[8746] = "k_EMsgLobbyEventGameData"] = 8746;
        values[valuesById[8747] = "k_EMsgGCToClientGuildMembersDataUpdated"] = 8747;
        values[valuesById[8748] = "k_EMsgSignOutReportActivityMarkers"] = 8748;
        values[valuesById[8749] = "k_EMsgSignOutDiretideCandy"] = 8749;
        values[valuesById[8750] = "k_EMsgGCToClientPostGameItemAwardNotification"] = 8750;
        return values;
    })();

    return $root;
});
