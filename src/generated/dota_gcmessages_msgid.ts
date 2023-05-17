/* eslint-disable */

export enum EDOTAGCMsg {
  k_EMsgGCDOTABase = 7000,
  k_EMsgGCGameMatchSignOut = 7004,
  k_EMsgGCGameMatchSignOutResponse = 7005,
  k_EMsgGCJoinChatChannel = 7009,
  k_EMsgGCJoinChatChannelResponse = 7010,
  k_EMsgGCOtherJoinedChannel = 7013,
  k_EMsgGCOtherLeftChannel = 7014,
  k_EMsgServerToGCRequestStatus = 7026,
  k_EMsgGCStartFindingMatch = 7033,
  k_EMsgGCConnectedPlayers = 7034,
  k_EMsgGCAbandonCurrentGame = 7035,
  k_EMsgGCStopFindingMatch = 7036,
  k_EMsgGCPracticeLobbyCreate = 7038,
  k_EMsgGCPracticeLobbyLeave = 7040,
  k_EMsgGCPracticeLobbyLaunch = 7041,
  k_EMsgGCPracticeLobbyList = 7042,
  k_EMsgGCPracticeLobbyListResponse = 7043,
  k_EMsgGCPracticeLobbyJoin = 7044,
  k_EMsgGCPracticeLobbySetDetails = 7046,
  k_EMsgGCPracticeLobbySetTeamSlot = 7047,
  k_EMsgGCInitialQuestionnaireResponse = 7049,
  k_EMsgGCPracticeLobbyResponse = 7055,
  k_EMsgGCBroadcastNotification = 7056,
  k_EMsgGCLiveScoreboardUpdate = 7057,
  k_EMsgGCRequestChatChannelList = 7060,
  k_EMsgGCRequestChatChannelListResponse = 7061,
  k_EMsgGCReadyUp = 7070,
  k_EMsgGCKickedFromMatchmakingQueue = 7071,
  k_EMsgGCLeaverDetected = 7072,
  k_EMsgGCSpectateFriendGame = 7073,
  k_EMsgGCSpectateFriendGameResponse = 7074,
  k_EMsgGCReportsRemainingRequest = 7076,
  k_EMsgGCReportsRemainingResponse = 7077,
  k_EMsgGCSubmitPlayerReport = 7078,
  k_EMsgGCSubmitPlayerReportResponse = 7079,
  k_EMsgGCPracticeLobbyKick = 7081,
  k_EMsgGCRequestSaveGames = 7084,
  k_EMsgGCRequestSaveGamesServer = 7085,
  k_EMsgGCRequestSaveGamesResponse = 7086,
  k_EMsgGCLeaverDetectedResponse = 7087,
  k_EMsgGCPlayerFailedToConnect = 7088,
  k_EMsgGCGCToRelayConnect = 7089,
  k_EMsgGCGCToRelayConnectresponse = 7090,
  k_EMsgGCWatchGame = 7091,
  k_EMsgGCWatchGameResponse = 7092,
  k_EMsgGCBanStatusRequest = 7093,
  k_EMsgGCBanStatusResponse = 7094,
  k_EMsgGCMatchDetailsRequest = 7095,
  k_EMsgGCMatchDetailsResponse = 7096,
  k_EMsgGCCancelWatchGame = 7097,
  k_EMsgGCPopup = 7102,
  k_EMsgGCFriendPracticeLobbyListRequest = 7111,
  k_EMsgGCFriendPracticeLobbyListResponse = 7112,
  k_EMsgGCPracticeLobbyJoinResponse = 7113,
  k_EMsgGCCreateTeam = 7115,
  k_EMsgGCCreateTeamResponse = 7116,
  k_EMsgGCTeamInvite_InviterToGC = 7122,
  k_EMsgGCTeamInvite_GCImmediateResponseToInviter = 7123,
  k_EMsgGCTeamInvite_GCRequestToInvitee = 7124,
  k_EMsgGCTeamInvite_InviteeResponseToGC = 7125,
  k_EMsgGCTeamInvite_GCResponseToInviter = 7126,
  k_EMsgGCTeamInvite_GCResponseToInvitee = 7127,
  k_EMsgGCKickTeamMember = 7128,
  k_EMsgGCKickTeamMemberResponse = 7129,
  k_EMsgGCLeaveTeam = 7130,
  k_EMsgGCLeaveTeamResponse = 7131,
  k_EMsgGCApplyTeamToPracticeLobby = 7142,
  k_EMsgGCTransferTeamAdmin = 7144,
  k_EMsgGCPracticeLobbyJoinBroadcastChannel = 7149,
  k_EMsgGC_TournamentItemEvent = 7150,
  k_EMsgGC_TournamentItemEventResponse = 7151,
  k_EMsgTeamFanfare = 7156,
  k_EMsgResponseTeamFanfare = 7157,
  k_EMsgGC_GameServerUploadSaveGame = 7158,
  k_EMsgGC_GameServerSaveGameResult = 7159,
  k_EMsgGC_GameServerGetLoadGame = 7160,
  k_EMsgGC_GameServerGetLoadGameResult = 7161,
  k_EMsgGCEditTeamDetails = 7166,
  k_EMsgGCEditTeamDetailsResponse = 7167,
  k_EMsgGCReadyUpStatus = 7170,
  k_EMsgGCToGCMatchCompleted = 7186,
  k_EMsgGCBalancedShuffleLobby = 7188,
  k_EMsgGCMatchmakingStatsRequest = 7197,
  k_EMsgGCMatchmakingStatsResponse = 7198,
  k_EMsgGCBotGameCreate = 7199,
  k_EMsgGCSetMatchHistoryAccess = 7200,
  k_EMsgGCSetMatchHistoryAccessResponse = 7201,
  k_EMsgUpgradeLeagueItem = 7203,
  k_EMsgUpgradeLeagueItemResponse = 7204,
  k_EMsgGCWatchDownloadedReplay = 7206,
  k_EMsgClientsRejoinChatChannels = 7217,
  k_EMsgGCToGCGetUserChatInfo = 7218,
  k_EMsgGCToGCGetUserChatInfoResponse = 7219,
  k_EMsgGCToGCLeaveAllChatChannels = 7220,
  k_EMsgGCToGCUpdateAccountChatBan = 7221,
  k_EMsgGCToGCCanInviteUserToTeam = 7234,
  k_EMsgGCToGCCanInviteUserToTeamResponse = 7235,
  k_EMsgGCToGCGetUserRank = 7236,
  k_EMsgGCToGCGetUserRankResponse = 7237,
  k_EMsgGCToGCUpdateTeamStats = 7240,
  k_EMsgGCToGCValidateTeam = 7241,
  k_EMsgGCToGCValidateTeamResponse = 7242,
  k_EMsgGCToGCGetLeagueAdmin = 7255,
  k_EMsgGCToGCGetLeagueAdminResponse = 7256,
  k_EMsgGCLeaveChatChannel = 7272,
  k_EMsgGCChatMessage = 7273,
  k_EMsgGCGetHeroStandings = 7274,
  k_EMsgGCGetHeroStandingsResponse = 7275,
  k_EMsgGCItemEditorReservationsRequest = 7283,
  k_EMsgGCItemEditorReservationsResponse = 7284,
  k_EMsgGCItemEditorReserveItemDef = 7285,
  k_EMsgGCItemEditorReserveItemDefResponse = 7286,
  k_EMsgGCItemEditorReleaseReservation = 7287,
  k_EMsgGCItemEditorReleaseReservationResponse = 7288,
  k_EMsgGCRewardTutorialPrizes = 7289,
  k_EMsgGCFantasyLivePlayerStats = 7308,
  k_EMsgGCFantasyFinalPlayerStats = 7309,
  k_EMsgGCFlipLobbyTeams = 7320,
  k_EMsgGCToGCProcessPlayerReportForTarget = 7324,
  k_EMsgGCToGCProcessReportSuccess = 7325,
  k_EMsgGCNotifyAccountFlagsChange = 7326,
  k_EMsgGCSetProfilePrivacy = 7327,
  k_EMsgGCSetProfilePrivacyResponse = 7328,
  k_EMsgGCClientSuspended = 7342,
  k_EMsgGCPartyMemberSetCoach = 7343,
  k_EMsgGCPracticeLobbySetCoach = 7346,
  k_EMsgGCChatModeratorBan = 7359,
  k_EMsgGCLobbyUpdateBroadcastChannelInfo = 7367,
  k_EMsgGCToGCGrantTournamentItem = 7372,
  k_EMsgGCToGCUpgradeTwitchViewerItems = 7375,
  k_EMsgGCToGCGetLiveMatchAffiliates = 7376,
  k_EMsgGCToGCGetLiveMatchAffiliatesResponse = 7377,
  k_EMsgGCToGCUpdatePlayerPennantCounts = 7378,
  k_EMsgGCToGCGetPlayerPennantCounts = 7379,
  k_EMsgGCToGCGetPlayerPennantCountsResponse = 7380,
  k_EMsgGCGameMatchSignOutPermissionRequest = 7381,
  k_EMsgGCGameMatchSignOutPermissionResponse = 7382,
  k_EMsgDOTAAwardEventPoints = 7384,
  k_EMsgDOTAGetEventPoints = 7387,
  k_EMsgDOTAGetEventPointsResponse = 7388,
  k_EMsgGCPartyLeaderWatchGamePrompt = 7397,
  k_EMsgGCCompendiumSetSelection = 7405,
  k_EMsgGCCompendiumDataRequest = 7406,
  k_EMsgGCCompendiumDataResponse = 7407,
  k_EMsgDOTAGetPlayerMatchHistory = 7408,
  k_EMsgDOTAGetPlayerMatchHistoryResponse = 7409,
  k_EMsgGCToGCMatchmakingAddParty = 7410,
  k_EMsgGCToGCMatchmakingRemoveParty = 7411,
  k_EMsgGCToGCMatchmakingRemoveAllParties = 7412,
  k_EMsgGCToGCMatchmakingMatchFound = 7413,
  k_EMsgGCToGCUpdateMatchManagementStats = 7414,
  k_EMsgGCToGCUpdateMatchmakingStats = 7415,
  k_EMsgGCToServerPingRequest = 7416,
  k_EMsgGCToServerPingResponse = 7417,
  k_EMsgGCToGCProcessMatchLeaver = 7426,
  k_EMsgGCNotificationsRequest = 7427,
  k_EMsgGCNotificationsResponse = 7428,
  k_EMsgGCToGCModifyNotification = 7429,
  k_EMsgGCLeagueAdminList = 7434,
  k_EMsgGCNotificationsMarkReadRequest = 7435,
  k_EMsgServerToGCRequestBatchPlayerResources = 7450,
  k_EMsgServerToGCRequestBatchPlayerResourcesResponse = 7451,
  k_EMsgGCCompendiumSetSelectionResponse = 7453,
  k_EMsgGCPlayerInfoSubmit = 7456,
  k_EMsgGCPlayerInfoSubmitResponse = 7457,
  k_EMsgGCToGCGetAccountLevel = 7458,
  k_EMsgGCToGCGetAccountLevelResponse = 7459,
  k_EMsgDOTAGetWeekendTourneySchedule = 7464,
  k_EMsgDOTAWeekendTourneySchedule = 7465,
  k_EMsgGCJoinableCustomGameModesRequest = 7466,
  k_EMsgGCJoinableCustomGameModesResponse = 7467,
  k_EMsgGCJoinableCustomLobbiesRequest = 7468,
  k_EMsgGCJoinableCustomLobbiesResponse = 7469,
  k_EMsgGCQuickJoinCustomLobby = 7470,
  k_EMsgGCQuickJoinCustomLobbyResponse = 7471,
  k_EMsgGCToGCGrantEventPointAction = 7472,
  k_EMsgGCToGCSetCompendiumSelection = 7478,
  k_EMsgGCHasItemQuery = 7484,
  k_EMsgGCHasItemResponse = 7485,
  k_EMsgGCToGCGrantEventPointActionMsg = 7488,
  k_EMsgGCToGCGetCompendiumSelections = 7492,
  k_EMsgGCToGCGetCompendiumSelectionsResponse = 7493,
  k_EMsgServerToGCMatchConnectionStats = 7494,
  k_EMsgGCToClientTournamentItemDrop = 7495,
  k_EMsgSQLDelayedGrantLeagueDrop = 7496,
  k_EMsgServerGCUpdateSpectatorCount = 7497,
  k_EMsgGCToGCEmoticonUnlock = 7501,
  k_EMsgSignOutDraftInfo = 7502,
  k_EMsgClientToGCEmoticonDataRequest = 7503,
  k_EMsgGCToClientEmoticonData = 7504,
  k_EMsgGCPracticeLobbyToggleBroadcastChannelCameramanStatus = 7505,
  k_EMsgDOTARedeemItem = 7518,
  k_EMsgDOTARedeemItemResponse = 7519,
  k_EMsgClientToGCGetAllHeroProgress = 7521,
  k_EMsgClientToGCGetAllHeroProgressResponse = 7522,
  k_EMsgGCToGCGetServerForClient = 7523,
  k_EMsgGCToGCGetServerForClientResponse = 7524,
  k_EMsgSQLProcessTournamentGameOutcome = 7525,
  k_EMsgSQLGrantTrophyToAccount = 7526,
  k_EMsgClientToGCGetTrophyList = 7527,
  k_EMsgClientToGCGetTrophyListResponse = 7528,
  k_EMsgGCToClientTrophyAwarded = 7529,
  k_EMsgGCGameBotMatchSignOut = 7530,
  k_EMsgGCGameBotMatchSignOutPermissionRequest = 7531,
  k_EMsgSignOutBotInfo = 7532,
  k_EMsgGCToGCUpdateProfileCards = 7533,
  k_EMsgClientToGCGetProfileCard = 7534,
  k_EMsgClientToGCGetProfileCardResponse = 7535,
  k_EMsgClientToGCGetBattleReport = 7536,
  k_EMsgClientToGCGetBattleReportResponse = 7537,
  k_EMsgClientToGCSetProfileCardSlots = 7538,
  k_EMsgGCToClientProfileCardUpdated = 7539,
  k_EMsgServerToGCVictoryPredictions = 7540,
  k_EMsgClientToGCGetBattleReportAggregateStats = 7541,
  k_EMsgClientToGCGetBattleReportAggregateStatsResponse = 7542,
  k_EMsgClientToGCGetBattleReportInfo = 7543,
  k_EMsgClientToGCGetBattleReportInfoResponse = 7544,
  k_EMsgSignOutCommunicationSummary = 7545,
  k_EMsgServerToGCRequestStatus_Response = 7546,
  k_EMsgClientToGCCreateHeroStatue = 7547,
  k_EMsgGCToClientHeroStatueCreateResult = 7548,
  k_EMsgGCGCToLANServerRelayConnect = 7549,
  k_EMsgClientToGCAcknowledgeBattleReport = 7550,
  k_EMsgClientToGCAcknowledgeBattleReportResponse = 7551,
  k_EMsgClientToGCGetBattleReportMatchHistory = 7552,
  k_EMsgClientToGCGetBattleReportMatchHistoryResponse = 7553,
  k_EMsgServerToGCReportKillSummaries = 7554,
  k_EMsgGCToGCUpdatePlayerPredictions = 7561,
  k_EMsgGCToServerPredictionResult = 7562,
  k_EMsgGCToGCReplayMonitorValidateReplay = 7569,
  k_EMsgLobbyEventPoints = 7572,
  k_EMsgGCToGCGetCustomGameTickets = 7573,
  k_EMsgGCToGCGetCustomGameTicketsResponse = 7574,
  k_EMsgGCToGCCustomGamePlayed = 7576,
  k_EMsgGCToGCGrantEventPointsToUser = 7577,
  k_EMsgGameserverCrashReport = 7579,
  k_EMsgGameserverCrashReportResponse = 7580,
  k_EMsgGCToClientSteamDatagramTicket = 7581,
  k_EMsgGCToGCSendAccountsEventPoints = 7583,
  k_EMsgClientToGCRerollPlayerChallenge = 7584,
  k_EMsgServerToGCRerollPlayerChallenge = 7585,
  k_EMsgGCRerollPlayerChallengeResponse = 7586,
  k_EMsgSignOutUpdatePlayerChallenge = 7587,
  k_EMsgClientToGCSetPartyLeader = 7588,
  k_EMsgClientToGCCancelPartyInvites = 7589,
  k_EMsgSQLGrantLeagueMatchToTicketHolders = 7592,
  k_EMsgGCToGCEmoticonUnlockNoRollback = 7594,
  k_EMsgClientToGCApplyGemCombiner = 7603,
  k_EMsgClientToGCGetAllHeroOrder = 7606,
  k_EMsgClientToGCGetAllHeroOrderResponse = 7607,
  k_EMsgSQLGCToGCGrantBadgePoints = 7608,
  k_EMsgGCToGCCheckOwnsEntireEmoticonRange = 7611,
  k_EMsgGCToGCCheckOwnsEntireEmoticonRangeResponse = 7612,
  k_EMsgGCToClientRequestLaneSelection = 7623,
  k_EMsgGCToClientRequestLaneSelectionResponse = 7624,
  k_EMsgServerToGCCavernCrawlIsHeroActive = 7625,
  k_EMsgServerToGCCavernCrawlIsHeroActiveResponse = 7626,
  k_EMsgClientToGCPlayerCardSpecificPurchaseRequest = 7627,
  k_EMsgClientToGCPlayerCardSpecificPurchaseResponse = 7628,
  k_EMsgGCtoServerTensorflowInstance = 7629,
  k_EMsgSQLSetIsLeagueAdmin = 7630,
  k_EMsgGCToGCGetLiveLeagueMatches = 7631,
  k_EMsgGCToGCGetLiveLeagueMatchesResponse = 7632,
  k_EMsgDOTALeagueInfoListAdminsRequest = 7633,
  k_EMsgDOTALeagueInfoListAdminsReponse = 7634,
  k_EMsgGCToGCLeagueMatchStarted = 7645,
  k_EMsgGCToGCLeagueMatchCompleted = 7646,
  k_EMsgGCToGCLeagueMatchStartedResponse = 7647,
  k_EMsgDOTALeagueAvailableLobbyNodesRequest = 7650,
  k_EMsgDOTALeagueAvailableLobbyNodes = 7651,
  k_EMsgGCToGCLeagueRequest = 7652,
  k_EMsgGCToGCLeagueResponse = 7653,
  k_EMsgGCToGCLeagueNodeGroupRequest = 7654,
  k_EMsgGCToGCLeagueNodeGroupResponse = 7655,
  k_EMsgGCToGCLeagueNodeRequest = 7656,
  k_EMsgGCToGCLeagueNodeResponse = 7657,
  k_EMsgGCToGCRealtimeStatsTerseRequest = 7658,
  k_EMsgGCToGCRealtimeStatsTerseResponse = 7659,
  k_EMsgGCToGCGetTopMatchesRequest = 7660,
  k_EMsgGCToGCGetTopMatchesResponse = 7661,
  k_EMsgClientToGCGetFilteredPlayers = 7662,
  k_EMsgGCToClientGetFilteredPlayersResponse = 7663,
  k_EMsgClientToGCRemoveFilteredPlayer = 7664,
  k_EMsgGCToClientRemoveFilteredPlayerResponse = 7665,
  k_EMsgGCToClientPlayerBeaconState = 7666,
  k_EMsgGCToClientPartyBeaconUpdate = 7667,
  k_EMsgGCToClientPartySearchInvite = 7668,
  k_EMsgClientToGCUpdatePartyBeacon = 7669,
  k_EMsgClientToGCRequestActiveBeaconParties = 7670,
  k_EMsgGCToClientRequestActiveBeaconPartiesResponse = 7671,
  k_EMsgClientToGCManageFavorites = 7672,
  k_EMsgGCToClientManageFavoritesResponse = 7673,
  k_EMsgClientToGCJoinPartyFromBeacon = 7674,
  k_EMsgGCToClientJoinPartyFromBeaconResponse = 7675,
  k_EMsgClientToGCGetFavoritePlayers = 7676,
  k_EMsgGCToClientGetFavoritePlayersResponse = 7677,
  k_EMsgClientToGCVerifyFavoritePlayers = 7678,
  k_EMsgGCToClientVerifyFavoritePlayersResponse = 7679,
  k_EMsgGCToClientPartySearchInvites = 7680,
  k_EMsgGCToClientRequestMMInfo = 7681,
  k_EMsgClientToGCMMInfo = 7682,
  k_EMsgSignOutTextMuteInfo = 7683,
  k_EMsgClientToGCPurchaseLabyrinthBlessings = 7684,
  k_EMsgClientToGCPurchaseLabyrinthBlessingsResponse = 7685,
  k_EMsgClientToGCPurchaseFilteredPlayerSlot = 7686,
  k_EMsgGCToClientPurchaseFilteredPlayerSlotResponse = 7687,
  k_EMsgClientToGCUpdateFilteredPlayerNote = 7688,
  k_EMsgGCToClientUpdateFilteredPlayerNoteResponse = 7689,
  k_EMsgClientToGCClaimSwag = 7690,
  k_EMsgGCToClientClaimSwagResponse = 7691,
  k_EMsgServerToGCLockCharmTrading = 8004,
  k_EMsgClientToGCPlayerStatsRequest = 8006,
  k_EMsgGCToClientPlayerStatsResponse = 8007,
  k_EMsgGCClearPracticeLobbyTeam = 8008,
  k_EMsgClientToGCFindTopSourceTVGames = 8009,
  k_EMsgGCToClientFindTopSourceTVGamesResponse = 8010,
  k_EMsgGCLobbyList = 8011,
  k_EMsgGCLobbyListResponse = 8012,
  k_EMsgGCPlayerStatsMatchSignOut = 8013,
  k_EMsgClientToGCSocialFeedPostCommentRequest = 8016,
  k_EMsgGCToClientSocialFeedPostCommentResponse = 8017,
  k_EMsgClientToGCCustomGamesFriendsPlayedRequest = 8018,
  k_EMsgGCToClientCustomGamesFriendsPlayedResponse = 8019,
  k_EMsgClientToGCFriendsPlayedCustomGameRequest = 8020,
  k_EMsgGCToClientFriendsPlayedCustomGameResponse = 8021,
  k_EMsgGCTopCustomGamesList = 8024,
  k_EMsgClientToGCSetPartyOpen = 8029,
  k_EMsgClientToGCMergePartyInvite = 8030,
  k_EMsgGCToClientMergeGroupInviteReply = 8031,
  k_EMsgClientToGCMergePartyResponse = 8032,
  k_EMsgGCToClientMergePartyResponseReply = 8033,
  k_EMsgClientToGCGetProfileCardStats = 8034,
  k_EMsgClientToGCGetProfileCardStatsResponse = 8035,
  k_EMsgClientToGCTopLeagueMatchesRequest = 8036,
  k_EMsgClientToGCTopFriendMatchesRequest = 8037,
  k_EMsgGCToClientProfileCardStatsUpdated = 8040,
  k_EMsgServerToGCRealtimeStats = 8041,
  k_EMsgGCToServerRealtimeStatsStartStop = 8042,
  k_EMsgGCToGCGetServersForClients = 8045,
  k_EMsgGCToGCGetServersForClientsResponse = 8046,
  k_EMsgGCPracticeLobbyKickFromTeam = 8047,
  k_EMsgDOTAChatGetMemberCount = 8048,
  k_EMsgDOTAChatGetMemberCountResponse = 8049,
  k_EMsgClientToGCSocialFeedPostMessageRequest = 8050,
  k_EMsgGCToClientSocialFeedPostMessageResponse = 8051,
  k_EMsgCustomGameListenServerStartedLoading = 8052,
  k_EMsgCustomGameClientFinishedLoading = 8053,
  k_EMsgGCPracticeLobbyCloseBroadcastChannel = 8054,
  k_EMsgGCStartFindingMatchResponse = 8055,
  k_EMsgSQLGCToGCGrantAccountFlag = 8057,
  k_EMsgGCToClientTopLeagueMatchesResponse = 8061,
  k_EMsgGCToClientTopFriendMatchesResponse = 8062,
  k_EMsgClientToGCMatchesMinimalRequest = 8063,
  k_EMsgClientToGCMatchesMinimalResponse = 8064,
  k_EMsgGCToClientChatRegionsEnabled = 8067,
  k_EMsgClientToGCPingData = 8068,
  k_EMsgGCToGCEnsureAccountInParty = 8071,
  k_EMsgGCToGCEnsureAccountInPartyResponse = 8072,
  k_EMsgClientToGCGetProfileTickets = 8073,
  k_EMsgClientToGCGetProfileTicketsResponse = 8074,
  k_EMsgGCToClientMatchGroupsVersion = 8075,
  k_EMsgClientToGCH264Unsupported = 8076,
  k_EMsgClientToGCGetQuestProgress = 8078,
  k_EMsgClientToGCGetQuestProgressResponse = 8079,
  k_EMsgSignOutXPCoins = 8080,
  k_EMsgGCToClientMatchSignedOut = 8081,
  k_EMsgGCGetHeroStatsHistory = 8082,
  k_EMsgGCGetHeroStatsHistoryResponse = 8083,
  k_EMsgClientToGCPrivateChatInvite = 8084,
  k_EMsgClientToGCPrivateChatKick = 8088,
  k_EMsgClientToGCPrivateChatPromote = 8089,
  k_EMsgClientToGCPrivateChatDemote = 8090,
  k_EMsgGCToClientPrivateChatResponse = 8091,
  k_EMsgClientToGCLatestConductScorecardRequest = 8095,
  k_EMsgClientToGCLatestConductScorecard = 8096,
  k_EMsgClientToGCWageringRequest = 8099,
  k_EMsgGCToClientWageringResponse = 8100,
  k_EMsgClientToGCEventGoalsRequest = 8103,
  k_EMsgClientToGCEventGoalsResponse = 8104,
  k_EMsgGCToGCLeaguePredictionsUpdate = 8108,
  k_EMsgGCToGCAddUserToPostGameChat = 8110,
  k_EMsgClientToGCHasPlayerVotedForMVP = 8111,
  k_EMsgClientToGCHasPlayerVotedForMVPResponse = 8112,
  k_EMsgClientToGCVoteForMVP = 8113,
  k_EMsgClientToGCVoteForMVPResponse = 8114,
  k_EMsgGCToGCGetEventOwnership = 8115,
  k_EMsgGCToGCGetEventOwnershipResponse = 8116,
  k_EMsgGCToClientAutomatedTournamentStateChange = 8117,
  k_EMsgClientToGCWeekendTourneyOpts = 8118,
  k_EMsgClientToGCWeekendTourneyOptsResponse = 8119,
  k_EMsgClientToGCWeekendTourneyLeave = 8120,
  k_EMsgClientToGCWeekendTourneyLeaveResponse = 8121,
  k_EMsgClientToGCTeammateStatsRequest = 8124,
  k_EMsgClientToGCTeammateStatsResponse = 8125,
  k_EMsgClientToGCGetGiftPermissions = 8126,
  k_EMsgClientToGCGetGiftPermissionsResponse = 8127,
  k_EMsgClientToGCVoteForArcana = 8128,
  k_EMsgClientToGCVoteForArcanaResponse = 8129,
  k_EMsgClientToGCRequestArcanaVotesRemaining = 8130,
  k_EMsgClientToGCRequestArcanaVotesRemainingResponse = 8131,
  k_EMsgGCTransferTeamAdminResponse = 8132,
  k_EMsgGCToClientTeamInfo = 8135,
  k_EMsgGCToClientTeamsInfo = 8136,
  k_EMsgClientToGCMyTeamInfoRequest = 8137,
  k_EMsgClientToGCPublishUserStat = 8140,
  k_EMsgGCToGCSignoutSpendWager = 8141,
  k_EMsgGCSubmitLobbyMVPVote = 8144,
  k_EMsgGCSubmitLobbyMVPVoteResponse = 8145,
  k_EMsgSignOutCommunityGoalProgress = 8150,
  k_EMsgGCToClientLobbyMVPAwarded = 8152,
  k_EMsgGCToClientQuestProgressUpdated = 8153,
  k_EMsgGCToClientWageringUpdate = 8154,
  k_EMsgGCToClientArcanaVotesUpdate = 8155,
  k_EMsgClientToGCSetSpectatorLobbyDetails = 8157,
  k_EMsgClientToGCSetSpectatorLobbyDetailsResponse = 8158,
  k_EMsgClientToGCCreateSpectatorLobby = 8159,
  k_EMsgClientToGCCreateSpectatorLobbyResponse = 8160,
  k_EMsgClientToGCSpectatorLobbyList = 8161,
  k_EMsgClientToGCSpectatorLobbyListResponse = 8162,
  k_EMsgSpectatorLobbyGameDetails = 8163,
  k_EMsgServerToGCCompendiumInGamePredictionResults = 8166,
  k_EMsgServerToGCCloseCompendiumInGamePredictionVoting = 8167,
  k_EMsgClientToGCOpenPlayerCardPack = 8168,
  k_EMsgClientToGCOpenPlayerCardPackResponse = 8169,
  k_EMsgClientToGCSelectCompendiumInGamePrediction = 8170,
  k_EMsgClientToGCSelectCompendiumInGamePredictionResponse = 8171,
  k_EMsgClientToGCWeekendTourneyGetPlayerStats = 8172,
  k_EMsgClientToGCWeekendTourneyGetPlayerStatsResponse = 8173,
  k_EMsgClientToGCRecyclePlayerCard = 8174,
  k_EMsgClientToGCRecyclePlayerCardResponse = 8175,
  k_EMsgClientToGCCreatePlayerCardPack = 8176,
  k_EMsgClientToGCCreatePlayerCardPackResponse = 8177,
  k_EMsgClientToGCGetPlayerCardRosterRequest = 8178,
  k_EMsgClientToGCGetPlayerCardRosterResponse = 8179,
  k_EMsgClientToGCSetPlayerCardRosterRequest = 8180,
  k_EMsgClientToGCSetPlayerCardRosterResponse = 8181,
  k_EMsgServerToGCCloseCompendiumInGamePredictionVotingResponse = 8183,
  k_EMsgLobbyBattleCupVictory = 8186,
  k_EMsgGCGetPlayerCardItemInfo = 8187,
  k_EMsgGCGetPlayerCardItemInfoResponse = 8188,
  k_EMsgClientToGCRequestSteamDatagramTicket = 8189,
  k_EMsgClientToGCRequestSteamDatagramTicketResponse = 8190,
  k_EMsgGCToClientBattlePassRollupRequest = 8191,
  k_EMsgGCToClientBattlePassRollupResponse = 8192,
  k_EMsgClientToGCTransferSeasonalMMRRequest = 8193,
  k_EMsgClientToGCTransferSeasonalMMRResponse = 8194,
  k_EMsgGCToGCPublicChatCommunicationBan = 8195,
  k_EMsgGCToGCUpdateAccountInfo = 8196,
  k_EMsgGCChatReportPublicSpam = 8197,
  k_EMsgClientToGCSetPartyBuilderOptions = 8198,
  k_EMsgClientToGCSetPartyBuilderOptionsResponse = 8199,
  k_EMsgGCToClientPlaytestStatus = 8200,
  k_EMsgClientToGCJoinPlaytest = 8201,
  k_EMsgClientToGCJoinPlaytestResponse = 8202,
  k_EMsgLobbyPlaytestDetails = 8203,
  k_EMsgDOTASetFavoriteTeam = 8204,
  k_EMsgGCToClientBattlePassRollupListRequest = 8205,
  k_EMsgGCToClientBattlePassRollupListResponse = 8206,
  k_EMsgDOTAClaimEventAction = 8209,
  k_EMsgDOTAClaimEventActionResponse = 8210,
  k_EMsgDOTAGetPeriodicResource = 8211,
  k_EMsgDOTAGetPeriodicResourceResponse = 8212,
  k_EMsgDOTAPeriodicResourceUpdated = 8213,
  k_EMsgServerToGCSpendWager = 8214,
  k_EMsgGCToGCSignoutSpendWagerToken = 8215,
  k_EMsgSubmitTriviaQuestionAnswer = 8216,
  k_EMsgSubmitTriviaQuestionAnswerResponse = 8217,
  k_EMsgClientToGCGiveTip = 8218,
  k_EMsgClientToGCGiveTipResponse = 8219,
  k_EMsgStartTriviaSession = 8220,
  k_EMsgStartTriviaSessionResponse = 8221,
  k_EMsgAnchorPhoneNumberRequest = 8222,
  k_EMsgAnchorPhoneNumberResponse = 8223,
  k_EMsgUnanchorPhoneNumberRequest = 8224,
  k_EMsgUnanchorPhoneNumberResponse = 8225,
  k_EMsgGCToGCSignoutSpendRankWager = 8229,
  k_EMsgGCToGCGetFavoriteTeam = 8230,
  k_EMsgGCToGCGetFavoriteTeamResponse = 8231,
  k_EMsgSignOutEventGameData = 8232,
  k_EMsgClientToGCQuickStatsRequest = 8238,
  k_EMsgClientToGCQuickStatsResponse = 8239,
  k_EMsgGCToGCSubtractEventPointsFromUser = 8240,
  k_EMsgSelectionPriorityChoiceRequest = 8241,
  k_EMsgSelectionPriorityChoiceResponse = 8242,
  k_EMsgGCToGCCompendiumInGamePredictionResults = 8243,
  k_EMsgGameAutographReward = 8244,
  k_EMsgGameAutographRewardResponse = 8245,
  k_EMsgDestroyLobbyRequest = 8246,
  k_EMsgDestroyLobbyResponse = 8247,
  k_EMsgPurchaseItemWithEventPoints = 8248,
  k_EMsgPurchaseItemWithEventPointsResponse = 8249,
  k_EMsgServerToGCMatchPlayerItemPurchaseHistory = 8250,
  k_EMsgGCToGCGrantPlusHeroMatchResults = 8251,
  k_EMsgServerToGCMatchStateHistory = 8255,
  k_EMsgPurchaseHeroRandomRelic = 8258,
  k_EMsgPurchaseHeroRandomRelicResponse = 8259,
  k_EMsgClientToGCClaimEventActionUsingItem = 8260,
  k_EMsgClientToGCClaimEventActionUsingItemResponse = 8261,
  k_EMsgPartyReadyCheckRequest = 8262,
  k_EMsgPartyReadyCheckResponse = 8263,
  k_EMsgPartyReadyCheckAcknowledge = 8264,
  k_EMsgGetRecentPlayTimeFriendsRequest = 8265,
  k_EMsgGetRecentPlayTimeFriendsResponse = 8266,
  k_EMsgGCToClientCommendNotification = 8267,
  k_EMsgProfileRequest = 8268,
  k_EMsgProfileResponse = 8269,
  k_EMsgProfileUpdate = 8270,
  k_EMsgProfileUpdateResponse = 8271,
  k_EMsgHeroGlobalDataRequest = 8274,
  k_EMsgHeroGlobalDataResponse = 8275,
  k_EMsgClientToGCRequestPlusWeeklyChallengeResult = 8276,
  k_EMsgClientToGCRequestPlusWeeklyChallengeResultResponse = 8277,
  k_EMsgGCToGCGrantPlusPrepaidTime = 8278,
  k_EMsgPrivateMetadataKeyRequest = 8279,
  k_EMsgPrivateMetadataKeyResponse = 8280,
  k_EMsgGCToGCReconcilePlusStatus = 8281,
  k_EMsgGCToGCCheckPlusStatus = 8282,
  k_EMsgGCToGCCheckPlusStatusResponse = 8283,
  k_EMsgGCToGCReconcilePlusAutoGrantItems = 8284,
  k_EMsgGCToGCReconcilePlusStatusUnreliable = 8285,
  k_EMsgGCToClientCavernCrawlMapPathCompleted = 8288,
  k_EMsgClientToGCCavernCrawlClaimRoom = 8289,
  k_EMsgClientToGCCavernCrawlClaimRoomResponse = 8290,
  k_EMsgClientToGCCavernCrawlUseItemOnRoom = 8291,
  k_EMsgClientToGCCavernCrawlUseItemOnRoomResponse = 8292,
  k_EMsgClientToGCCavernCrawlUseItemOnPath = 8293,
  k_EMsgClientToGCCavernCrawlUseItemOnPathResponse = 8294,
  k_EMsgClientToGCCavernCrawlRequestMapState = 8295,
  k_EMsgClientToGCCavernCrawlRequestMapStateResponse = 8296,
  k_EMsgSignOutTips = 8297,
  k_EMsgClientToGCRequestEventPointLogV2 = 8298,
  k_EMsgClientToGCRequestEventPointLogResponseV2 = 8299,
  k_EMsgClientToGCRequestEventTipsSummary = 8300,
  k_EMsgClientToGCRequestEventTipsSummaryResponse = 8301,
  k_EMsgClientToGCRequestSocialFeed = 8303,
  k_EMsgClientToGCRequestSocialFeedResponse = 8304,
  k_EMsgClientToGCRequestSocialFeedComments = 8305,
  k_EMsgClientToGCRequestSocialFeedCommentsResponse = 8306,
  k_EMsgClientToGCCavernCrawlGetClaimedRoomCount = 8308,
  k_EMsgClientToGCCavernCrawlGetClaimedRoomCountResponse = 8309,
  k_EMsgGCToGCReconcilePlusAutoGrantItemsUnreliable = 8310,
  k_EMsgServerToGCAddBroadcastTimelineEvent = 8311,
  k_EMsgGCToServerUpdateSteamBroadcasting = 8312,
  k_EMsgClientToGCRecordContestVote = 8313,
  k_EMsgGCToClientRecordContestVoteResponse = 8314,
  k_EMsgGCToGCGrantAutograph = 8315,
  k_EMsgGCToGCGrantAutographResponse = 8316,
  k_EMsgSignOutConsumableUsage = 8317,
  k_EMsgLobbyEventGameDetails = 8318,
  k_EMsgDevGrantEventPoints = 8319,
  k_EMsgDevGrantEventPointsResponse = 8320,
  k_EMsgDevGrantEventAction = 8321,
  k_EMsgDevGrantEventActionResponse = 8322,
  k_EMsgDevResetEventState = 8323,
  k_EMsgDevResetEventStateResponse = 8324,
  k_EMsgGCToGCReconcileEventOwnership = 8325,
  k_EMsgConsumeEventSupportGrantItem = 8326,
  k_EMsgConsumeEventSupportGrantItemResponse = 8327,
  k_EMsgGCToClientClaimEventActionUsingItemCompleted = 8328,
  k_EMsgGCToClientCavernCrawlMapUpdated = 8329,
  k_EMsgServerToGCRequestPlayerRecentAccomplishments = 8330,
  k_EMsgServerToGCRequestPlayerRecentAccomplishmentsResponse = 8331,
  k_EMsgClientToGCRequestPlayerRecentAccomplishments = 8332,
  k_EMsgClientToGCRequestPlayerRecentAccomplishmentsResponse = 8333,
  k_EMsgClientToGCRequestPlayerHeroRecentAccomplishments = 8334,
  k_EMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse = 8335,
  k_EMsgSignOutEventActionGrants = 8336,
  k_EMsgClientToGCRequestPlayerCoachMatches = 8337,
  k_EMsgClientToGCRequestPlayerCoachMatchesResponse = 8338,
  k_EMsgClientToGCSubmitCoachTeammateRating = 8341,
  k_EMsgClientToGCSubmitCoachTeammateRatingResponse = 8342,
  k_EMsgGCToClientCoachTeammateRatingsChanged = 8343,
  k_EMsgClientToGCRequestPlayerCoachMatch = 8345,
  k_EMsgClientToGCRequestPlayerCoachMatchResponse = 8346,
  k_EMsgClientToGCRequestContestVotes = 8347,
  k_EMsgClientToGCRequestContestVotesResponse = 8348,
  k_EMsgClientToGCMVPVoteTimeout = 8349,
  k_EMsgClientToGCMVPVoteTimeoutResponse = 8350,
  k_EMsgDetailedGameStats = 8353,
  k_EMsgMatchMatchmakingStats = 8360,
  k_EMsgClientToGCSubmitPlayerMatchSurvey = 8361,
  k_EMsgClientToGCSubmitPlayerMatchSurveyResponse = 8362,
  k_EMsgSQLGCToGCGrantAllHeroProgressAccount = 8363,
  k_EMsgSQLGCToGCGrantAllHeroProgressVictory = 8364,
  k_EMsgDevDeleteEventActions = 8365,
  k_EMsgDevDeleteEventActionsResponse = 8366,
  k_EMsgGCToGCGetAllHeroCurrent = 8635,
  k_EMsgGCToGCGetAllHeroCurrentResponse = 8636,
  k_EMsgGCSubmitPlayerAvoidRequest = 8637,
  k_EMsgGCSubmitPlayerAvoidRequestResponse = 8638,
  k_EMsgGCToClientNotificationsUpdated = 8639,
  k_EMsgGCtoGCAssociatedExploiterAccountInfo = 8640,
  k_EMsgGCtoGCAssociatedExploiterAccountInfoResponse = 8641,
  k_EMsgGCtoGCRequestRecalibrationCheck = 8642,
  k_EMsgGCToClientVACReminder = 8643,
  k_EMsgClientToGCUnderDraftBuy = 8644,
  k_EMsgClientToGCUnderDraftBuyResponse = 8645,
  k_EMsgClientToGCUnderDraftReroll = 8646,
  k_EMsgClientToGCUnderDraftRerollResponse = 8647,
  k_EMsgNeutralItemStats = 8648,
  k_EMsgClientToGCCreateGuild = 8649,
  k_EMsgClientToGCCreateGuildResponse = 8650,
  k_EMsgClientToGCSetGuildInfo = 8651,
  k_EMsgClientToGCSetGuildInfoResponse = 8652,
  k_EMsgClientToGCAddGuildRole = 8653,
  k_EMsgClientToGCAddGuildRoleResponse = 8654,
  k_EMsgClientToGCModifyGuildRole = 8655,
  k_EMsgClientToGCModifyGuildRoleResponse = 8656,
  k_EMsgClientToGCRemoveGuildRole = 8657,
  k_EMsgClientToGCRemoveGuildRoleResponse = 8658,
  k_EMsgClientToGCJoinGuild = 8659,
  k_EMsgClientToGCJoinGuildResponse = 8660,
  k_EMsgClientToGCLeaveGuild = 8661,
  k_EMsgClientToGCLeaveGuildResponse = 8662,
  k_EMsgClientToGCInviteToGuild = 8663,
  k_EMsgClientToGCInviteToGuildResponse = 8664,
  k_EMsgClientToGCDeclineInviteToGuild = 8665,
  k_EMsgClientToGCDeclineInviteToGuildResponse = 8666,
  k_EMsgClientToGCCancelInviteToGuild = 8667,
  k_EMsgClientToGCCancelInviteToGuildResponse = 8668,
  k_EMsgClientToGCKickGuildMember = 8669,
  k_EMsgClientToGCKickGuildMemberResponse = 8670,
  k_EMsgClientToGCSetGuildMemberRole = 8671,
  k_EMsgClientToGCSetGuildMemberRoleResponse = 8672,
  k_EMsgClientToGCRequestGuildData = 8673,
  k_EMsgClientToGCRequestGuildDataResponse = 8674,
  k_EMsgGCToClientGuildDataUpdated = 8675,
  k_EMsgClientToGCRequestGuildMembership = 8676,
  k_EMsgClientToGCRequestGuildMembershipResponse = 8677,
  k_EMsgGCToClientGuildMembershipUpdated = 8678,
  k_EMsgClientToGCAcceptInviteToGuild = 8681,
  k_EMsgClientToGCAcceptInviteToGuildResponse = 8682,
  k_EMsgClientToGCSetGuildRoleOrder = 8683,
  k_EMsgClientToGCSetGuildRoleOrderResponse = 8684,
  k_EMsgClientToGCRequestGuildFeed = 8685,
  k_EMsgClientToGCRequestGuildFeedResponse = 8686,
  k_EMsgClientToGCRequestAccountGuildEventData = 8687,
  k_EMsgClientToGCRequestAccountGuildEventDataResponse = 8688,
  k_EMsgGCToClientAccountGuildEventDataUpdated = 8689,
  k_EMsgClientToGCRequestActiveGuildContracts = 8690,
  k_EMsgClientToGCRequestActiveGuildContractsResponse = 8691,
  k_EMsgGCToClientActiveGuildContractsUpdated = 8692,
  k_EMsgGCToClientGuildFeedUpdated = 8693,
  k_EMsgClientToGCSelectGuildContract = 8694,
  k_EMsgClientToGCSelectGuildContractResponse = 8695,
  k_EMsgGCToGCCompleteGuildContracts = 8696,
  k_EMsgClientToGCAddPlayerToGuildChat = 8698,
  k_EMsgClientToGCAddPlayerToGuildChatResponse = 8699,
  k_EMsgClientToGCUnderDraftSell = 8700,
  k_EMsgClientToGCUnderDraftSellResponse = 8701,
  k_EMsgClientToGCUnderDraftRequest = 8702,
  k_EMsgClientToGCUnderDraftResponse = 8703,
  k_EMsgClientToGCUnderDraftRedeemReward = 8704,
  k_EMsgClientToGCUnderDraftRedeemRewardResponse = 8705,
  k_EMsgGCToServerLobbyHeroBanRates = 8708,
  k_EMsgSignOutGuildContractProgress = 8711,
  k_EMsgSignOutMVPStats = 8712,
  k_EMsgClientToGCRequestActiveGuildChallenge = 8713,
  k_EMsgClientToGCRequestActiveGuildChallengeResponse = 8714,
  k_EMsgGCToClientActiveGuildChallengeUpdated = 8715,
  k_EMsgSignOutGuildChallengeProgress = 8720,
  k_EMsgClientToGCRequestGuildEventMembers = 8721,
  k_EMsgClientToGCRequestGuildEventMembersResponse = 8722,
  k_EMsgClientToGCReportGuildContent = 8725,
  k_EMsgClientToGCReportGuildContentResponse = 8726,
  k_EMsgClientToGCRequestAccountGuildPersonaInfo = 8727,
  k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse = 8728,
  k_EMsgClientToGCRequestAccountGuildPersonaInfoBatch = 8729,
  k_EMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse = 8730,
  k_EMsgGCToClientUnderDraftGoldUpdated = 8731,
  k_EMsgGCToServerRecordTrainingData = 8732,
  k_EMsgSignOutBounties = 8733,
  k_EMsgLobbyFeaturedGamemodeProgress = 8734,
  k_EMsgLobbyGauntletProgress = 8735,
  k_EMsgClientToGCSubmitDraftTriviaMatchAnswer = 8736,
  k_EMsgClientToGCSubmitDraftTriviaMatchAnswerResponse = 8737,
  k_EMsgGCToGCSignoutSpendBounty = 8738,
  k_EMsgClientToGCApplyGauntletTicket = 8739,
  k_EMsgClientToGCUnderDraftRollBackBench = 8740,
  k_EMsgClientToGCUnderDraftRollBackBenchResponse = 8741,
  k_EMsgGCToGCGetEventActionScore = 8742,
  k_EMsgGCToGCGetEventActionScoreResponse = 8743,
  k_EMsgServerToGCGetGuildContracts = 8744,
  k_EMsgServerToGCGetGuildContractsResponse = 8745,
  k_EMsgLobbyEventGameData = 8746,
  k_EMsgGCToClientGuildMembersDataUpdated = 8747,
  k_EMsgSignOutReportActivityMarkers = 8748,
  k_EMsgSignOutDiretideCandy = 8749,
  k_EMsgGCToClientPostGameItemAwardNotification = 8750,
  k_EMsgClientToGCGetOWMatchDetails = 8751,
  k_EMsgClientToGCGetOWMatchDetailsResponse = 8752,
  k_EMsgClientToGCSubmitOWConviction = 8753,
  k_EMsgClientToGCSubmitOWConvictionResponse = 8754,
  k_EMsgGCToGCGetAccountSteamChina = 8755,
  k_EMsgGCToGCGetAccountSteamChinaResponse = 8756,
  k_EMsgClientToGCClaimLeaderboardRewards = 8757,
  k_EMsgClientToGCClaimLeaderboardRewardsResponse = 8758,
  k_EMsgClientToGCRecalibrateMMR = 8759,
  k_EMsgClientToGCRecalibrateMMRResponse = 8760,
  k_EMsgGCToGCGrantEventPointActionList = 8761,
  k_EMsgClientToGCChinaSSAURLRequest = 8764,
  k_EMsgClientToGCChinaSSAURLResponse = 8765,
  k_EMsgClientToGCChinaSSAAcceptedRequest = 8766,
  k_EMsgClientToGCChinaSSAAcceptedResponse = 8767,
  k_EMsgSignOutOverwatchSuspicion = 8768,
  k_EMsgServerToGCGetSuspicionConfig = 8769,
  k_EMsgServerToGCGetSuspicionConfigResponse = 8770,
  k_EMsgGCToGCGrantPlusHeroChallengeMatchResults = 8771,
  k_EMsgGCToClientOverwatchCasesAvailable = 8772,
  k_EMsgServerToGCAccountCheck = 8773,
  k_EMsgClientToGCStartWatchingOverwatch = 8774,
  k_EMsgClientToGCStopWatchingOverwatch = 8775,
  k_EMsgSignOutPerfData = 8776,
  k_EMsgClientToGCGetDPCFavorites = 8777,
  k_EMsgClientToGCGetDPCFavoritesResponse = 8778,
  k_EMsgClientToGCSetDPCFavoriteState = 8779,
  k_EMsgClientToGCSetDPCFavoriteStateResponse = 8780,
  k_EMsgClientToGCOverwatchReplayError = 8781,
  k_EMsgServerToGCPlayerChallengeHistory = 8782,
  k_EMsgSignOutBanData = 8783,
  k_EMsgWebapiDPCSeasonResults = 8784,
  k_EMsgClientToGCCoachFriend = 8785,
  k_EMsgClientToGCCoachFriendResponse = 8786,
  k_EMsgClientToGCRequestPrivateCoachingSession = 8787,
  k_EMsgClientToGCRequestPrivateCoachingSessionResponse = 8788,
  k_EMsgClientToGCAcceptPrivateCoachingSession = 8789,
  k_EMsgClientToGCAcceptPrivateCoachingSessionResponse = 8790,
  k_EMsgClientToGCLeavePrivateCoachingSession = 8791,
  k_EMsgClientToGCLeavePrivateCoachingSessionResponse = 8792,
  k_EMsgClientToGCGetCurrentPrivateCoachingSession = 8793,
  k_EMsgClientToGCGetCurrentPrivateCoachingSessionResponse = 8794,
  k_EMsgGCToClientPrivateCoachingSessionUpdated = 8795,
  k_EMsgClientToGCSubmitPrivateCoachingSessionRating = 8796,
  k_EMsgClientToGCSubmitPrivateCoachingSessionRatingResponse = 8797,
  k_EMsgClientToGCGetAvailablePrivateCoachingSessions = 8798,
  k_EMsgClientToGCGetAvailablePrivateCoachingSessionsResponse = 8799,
  k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummary = 8800,
  k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse = 8801,
  k_EMsgClientToGCJoinPrivateCoachingSessionLobby = 8802,
  k_EMsgClientToGCJoinPrivateCoachingSessionLobbyResponse = 8803,
  k_EMsgClientToGCRespondToCoachFriendRequest = 8804,
  k_EMsgClientToGCRespondToCoachFriendRequestResponse = 8805,
  k_EMsgClientToGCSetEventActiveSeasonID = 8806,
  k_EMsgClientToGCSetEventActiveSeasonIDResponse = 8807,
  k_EMsgServerToGCMatchPlayerNeutralItemEquipHistory = 8808,
  k_EMsgServerToGCCompendiumChosenInGamePredictions = 8809,
  k_EMsgClientToGCCreateTeamPlayerCardPack = 8810,
  k_EMsgClientToGCCreateTeamPlayerCardPackResponse = 8811,
  k_EMsgGCToServerSubmitCheerData = 8812,
  k_EMsgGCToServerCheerConfig = 8813,
  k_EMsgServerToGCGetCheerConfig = 8814,
  k_EMsgServerToGCGetCheerConfigResponse = 8815,
  k_EMsgGCToGCGrantAutographByID = 8816,
  k_EMsgGCToServerCheerScalesOverride = 8817,
  k_EMsgGCToServerGetCheerState = 8818,
  k_EMsgServerToGCReportCheerState = 8819,
  k_EMsgGCToServerScenarioSave = 8820,
  k_EMsgGCToServerAbilityDraftLobbyData = 8821,
  k_EMsgSignOutReportCommunications = 8822,
  k_EMsgClientToGCBatchGetPlayerCardRosterRequest = 8823,
  k_EMsgClientToGCBatchGetPlayerCardRosterResponse = 8824,
  k_EMsgClientToGCGetStickerbookRequest = 8825,
  k_EMsgClientToGCGetStickerbookResponse = 8826,
  k_EMsgClientToGCCreateStickerbookPageRequest = 8827,
  k_EMsgClientToGCCreateStickerbookPageResponse = 8828,
  k_EMsgClientToGCDeleteStickerbookPageRequest = 8829,
  k_EMsgClientToGCDeleteStickerbookPageResponse = 8830,
  k_EMsgClientToGCPlaceStickersRequest = 8831,
  k_EMsgClientToGCPlaceStickersResponse = 8832,
  k_EMsgClientToGCPlaceCollectionStickersRequest = 8833,
  k_EMsgClientToGCPlaceCollectionStickersResponse = 8834,
  k_EMsgClientToGCOrderStickerbookTeamPageRequest = 8835,
  k_EMsgClientToGCOrderStickerbookTeamPageResponse = 8836,
  k_EMsgServerToGCGetStickerHeroes = 8837,
  k_EMsgServerToGCGetStickerHeroesResponse = 8838,
  k_EMsgClientToGCCandyShopGetUserData = 8840,
  k_EMsgClientToGCCandyShopGetUserDataResponse = 8841,
  k_EMsgGCToClientCandyShopUserDataUpdated = 8842,
  k_EMsgClientToGCCandyShopPurchaseReward = 8843,
  k_EMsgClientToGCCandyShopPurchaseRewardResponse = 8844,
  k_EMsgClientToGCCandyShopDoExchange = 8845,
  k_EMsgClientToGCCandyShopDoExchangeResponse = 8846,
  k_EMsgClientToGCCandyShopDoVariableExchange = 8847,
  k_EMsgClientToGCCandyShopDoVariableExchangeResponse = 8848,
  k_EMsgClientToGCCandyShopRerollRewards = 8849,
  k_EMsgClientToGCCandyShopRerollRewardsResponse = 8850,
  k_EMsgClientToGCSetHeroSticker = 8851,
  k_EMsgClientToGCSetHeroStickerResponse = 8852,
  k_EMsgClientToGCGetHeroStickers = 8853,
  k_EMsgClientToGCGetHeroStickersResponse = 8854,
  k_EMsgClientToGCSetFavoritePage = 8855,
  k_EMsgClientToGCSetFavoritePageResponse = 8856,
  k_EMsgClientToGCCandyShopDevGrantCandy = 8857,
  k_EMsgClientToGCCandyShopDevGrantCandyResponse = 8858,
  k_EMsgClientToGCCandyShopDevClearInventory = 8859,
  k_EMsgClientToGCCandyShopDevClearInventoryResponse = 8860,
  k_EMsgClientToGCCandyShopOpenBags = 8861,
  k_EMsgClientToGCCandyShopOpenBagsResponse = 8862,
  k_EMsgClientToGCCandyShopDevGrantCandyBags = 8863,
  k_EMsgClientToGCCandyShopDevGrantCandyBagsResponse = 8864,
  k_EMsgClientToGCCandyShopDevShuffleExchange = 8865,
  k_EMsgClientToGCCandyShopDevShuffleExchangeResponse = 8866,
  k_EMsgClientToGCCandyShopDevGrantRerollCharges = 8867,
  k_EMsgClientToGCCandyShopDevGrantRerollChargesResponse = 8868,
  k_EMsgLobbyAdditionalAccountData = 8869,
  k_EMsgServerToGCLobbyInitialized = 8870,
  k_EMsgClientToGCCollectorsCacheAvailableDataRequest = 8871,
  k_EMsgGCToClientCollectorsCacheAvailableDataResponse = 8872,
  k_EMsgClientToGCUploadMatchClip = 8873,
  k_EMsgGCToClientUploadMatchClipResponse = 8874,
  k_EMsgGCToServerSetSteamLearnDisable = 8875,
  k_EMsgGCToServerSetSteamLearnKeysChanged = 8876,
  k_EMsgSignOutMuertaMinigame = 8877,
  k_EMsgGCToServerLobbyHeroRoleStats = 8878,
  k_EMsgClientToGCRankRequest = 8879,
  k_EMsgGCToClientRankResponse = 8880,
  k_EMsgGCToClientRankUpdate = 8881,
  k_EMsgSignOutMapStats = 8882,
  k_EMsgClientToGCMapStatsRequest = 8883,
  k_EMsgGCToClientMapStatsResponse = 8884,
  k_EMsgGCToServerSetSteamLearnInferencing = 8885,
}

export function eDOTAGCMsgFromJSON(object: any): EDOTAGCMsg {
  switch (object) {
    case 7000:
    case "k_EMsgGCDOTABase":
      return EDOTAGCMsg.k_EMsgGCDOTABase;
    case 7004:
    case "k_EMsgGCGameMatchSignOut":
      return EDOTAGCMsg.k_EMsgGCGameMatchSignOut;
    case 7005:
    case "k_EMsgGCGameMatchSignOutResponse":
      return EDOTAGCMsg.k_EMsgGCGameMatchSignOutResponse;
    case 7009:
    case "k_EMsgGCJoinChatChannel":
      return EDOTAGCMsg.k_EMsgGCJoinChatChannel;
    case 7010:
    case "k_EMsgGCJoinChatChannelResponse":
      return EDOTAGCMsg.k_EMsgGCJoinChatChannelResponse;
    case 7013:
    case "k_EMsgGCOtherJoinedChannel":
      return EDOTAGCMsg.k_EMsgGCOtherJoinedChannel;
    case 7014:
    case "k_EMsgGCOtherLeftChannel":
      return EDOTAGCMsg.k_EMsgGCOtherLeftChannel;
    case 7026:
    case "k_EMsgServerToGCRequestStatus":
      return EDOTAGCMsg.k_EMsgServerToGCRequestStatus;
    case 7033:
    case "k_EMsgGCStartFindingMatch":
      return EDOTAGCMsg.k_EMsgGCStartFindingMatch;
    case 7034:
    case "k_EMsgGCConnectedPlayers":
      return EDOTAGCMsg.k_EMsgGCConnectedPlayers;
    case 7035:
    case "k_EMsgGCAbandonCurrentGame":
      return EDOTAGCMsg.k_EMsgGCAbandonCurrentGame;
    case 7036:
    case "k_EMsgGCStopFindingMatch":
      return EDOTAGCMsg.k_EMsgGCStopFindingMatch;
    case 7038:
    case "k_EMsgGCPracticeLobbyCreate":
      return EDOTAGCMsg.k_EMsgGCPracticeLobbyCreate;
    case 7040:
    case "k_EMsgGCPracticeLobbyLeave":
      return EDOTAGCMsg.k_EMsgGCPracticeLobbyLeave;
    case 7041:
    case "k_EMsgGCPracticeLobbyLaunch":
      return EDOTAGCMsg.k_EMsgGCPracticeLobbyLaunch;
    case 7042:
    case "k_EMsgGCPracticeLobbyList":
      return EDOTAGCMsg.k_EMsgGCPracticeLobbyList;
    case 7043:
    case "k_EMsgGCPracticeLobbyListResponse":
      return EDOTAGCMsg.k_EMsgGCPracticeLobbyListResponse;
    case 7044:
    case "k_EMsgGCPracticeLobbyJoin":
      return EDOTAGCMsg.k_EMsgGCPracticeLobbyJoin;
    case 7046:
    case "k_EMsgGCPracticeLobbySetDetails":
      return EDOTAGCMsg.k_EMsgGCPracticeLobbySetDetails;
    case 7047:
    case "k_EMsgGCPracticeLobbySetTeamSlot":
      return EDOTAGCMsg.k_EMsgGCPracticeLobbySetTeamSlot;
    case 7049:
    case "k_EMsgGCInitialQuestionnaireResponse":
      return EDOTAGCMsg.k_EMsgGCInitialQuestionnaireResponse;
    case 7055:
    case "k_EMsgGCPracticeLobbyResponse":
      return EDOTAGCMsg.k_EMsgGCPracticeLobbyResponse;
    case 7056:
    case "k_EMsgGCBroadcastNotification":
      return EDOTAGCMsg.k_EMsgGCBroadcastNotification;
    case 7057:
    case "k_EMsgGCLiveScoreboardUpdate":
      return EDOTAGCMsg.k_EMsgGCLiveScoreboardUpdate;
    case 7060:
    case "k_EMsgGCRequestChatChannelList":
      return EDOTAGCMsg.k_EMsgGCRequestChatChannelList;
    case 7061:
    case "k_EMsgGCRequestChatChannelListResponse":
      return EDOTAGCMsg.k_EMsgGCRequestChatChannelListResponse;
    case 7070:
    case "k_EMsgGCReadyUp":
      return EDOTAGCMsg.k_EMsgGCReadyUp;
    case 7071:
    case "k_EMsgGCKickedFromMatchmakingQueue":
      return EDOTAGCMsg.k_EMsgGCKickedFromMatchmakingQueue;
    case 7072:
    case "k_EMsgGCLeaverDetected":
      return EDOTAGCMsg.k_EMsgGCLeaverDetected;
    case 7073:
    case "k_EMsgGCSpectateFriendGame":
      return EDOTAGCMsg.k_EMsgGCSpectateFriendGame;
    case 7074:
    case "k_EMsgGCSpectateFriendGameResponse":
      return EDOTAGCMsg.k_EMsgGCSpectateFriendGameResponse;
    case 7076:
    case "k_EMsgGCReportsRemainingRequest":
      return EDOTAGCMsg.k_EMsgGCReportsRemainingRequest;
    case 7077:
    case "k_EMsgGCReportsRemainingResponse":
      return EDOTAGCMsg.k_EMsgGCReportsRemainingResponse;
    case 7078:
    case "k_EMsgGCSubmitPlayerReport":
      return EDOTAGCMsg.k_EMsgGCSubmitPlayerReport;
    case 7079:
    case "k_EMsgGCSubmitPlayerReportResponse":
      return EDOTAGCMsg.k_EMsgGCSubmitPlayerReportResponse;
    case 7081:
    case "k_EMsgGCPracticeLobbyKick":
      return EDOTAGCMsg.k_EMsgGCPracticeLobbyKick;
    case 7084:
    case "k_EMsgGCRequestSaveGames":
      return EDOTAGCMsg.k_EMsgGCRequestSaveGames;
    case 7085:
    case "k_EMsgGCRequestSaveGamesServer":
      return EDOTAGCMsg.k_EMsgGCRequestSaveGamesServer;
    case 7086:
    case "k_EMsgGCRequestSaveGamesResponse":
      return EDOTAGCMsg.k_EMsgGCRequestSaveGamesResponse;
    case 7087:
    case "k_EMsgGCLeaverDetectedResponse":
      return EDOTAGCMsg.k_EMsgGCLeaverDetectedResponse;
    case 7088:
    case "k_EMsgGCPlayerFailedToConnect":
      return EDOTAGCMsg.k_EMsgGCPlayerFailedToConnect;
    case 7089:
    case "k_EMsgGCGCToRelayConnect":
      return EDOTAGCMsg.k_EMsgGCGCToRelayConnect;
    case 7090:
    case "k_EMsgGCGCToRelayConnectresponse":
      return EDOTAGCMsg.k_EMsgGCGCToRelayConnectresponse;
    case 7091:
    case "k_EMsgGCWatchGame":
      return EDOTAGCMsg.k_EMsgGCWatchGame;
    case 7092:
    case "k_EMsgGCWatchGameResponse":
      return EDOTAGCMsg.k_EMsgGCWatchGameResponse;
    case 7093:
    case "k_EMsgGCBanStatusRequest":
      return EDOTAGCMsg.k_EMsgGCBanStatusRequest;
    case 7094:
    case "k_EMsgGCBanStatusResponse":
      return EDOTAGCMsg.k_EMsgGCBanStatusResponse;
    case 7095:
    case "k_EMsgGCMatchDetailsRequest":
      return EDOTAGCMsg.k_EMsgGCMatchDetailsRequest;
    case 7096:
    case "k_EMsgGCMatchDetailsResponse":
      return EDOTAGCMsg.k_EMsgGCMatchDetailsResponse;
    case 7097:
    case "k_EMsgGCCancelWatchGame":
      return EDOTAGCMsg.k_EMsgGCCancelWatchGame;
    case 7102:
    case "k_EMsgGCPopup":
      return EDOTAGCMsg.k_EMsgGCPopup;
    case 7111:
    case "k_EMsgGCFriendPracticeLobbyListRequest":
      return EDOTAGCMsg.k_EMsgGCFriendPracticeLobbyListRequest;
    case 7112:
    case "k_EMsgGCFriendPracticeLobbyListResponse":
      return EDOTAGCMsg.k_EMsgGCFriendPracticeLobbyListResponse;
    case 7113:
    case "k_EMsgGCPracticeLobbyJoinResponse":
      return EDOTAGCMsg.k_EMsgGCPracticeLobbyJoinResponse;
    case 7115:
    case "k_EMsgGCCreateTeam":
      return EDOTAGCMsg.k_EMsgGCCreateTeam;
    case 7116:
    case "k_EMsgGCCreateTeamResponse":
      return EDOTAGCMsg.k_EMsgGCCreateTeamResponse;
    case 7122:
    case "k_EMsgGCTeamInvite_InviterToGC":
      return EDOTAGCMsg.k_EMsgGCTeamInvite_InviterToGC;
    case 7123:
    case "k_EMsgGCTeamInvite_GCImmediateResponseToInviter":
      return EDOTAGCMsg.k_EMsgGCTeamInvite_GCImmediateResponseToInviter;
    case 7124:
    case "k_EMsgGCTeamInvite_GCRequestToInvitee":
      return EDOTAGCMsg.k_EMsgGCTeamInvite_GCRequestToInvitee;
    case 7125:
    case "k_EMsgGCTeamInvite_InviteeResponseToGC":
      return EDOTAGCMsg.k_EMsgGCTeamInvite_InviteeResponseToGC;
    case 7126:
    case "k_EMsgGCTeamInvite_GCResponseToInviter":
      return EDOTAGCMsg.k_EMsgGCTeamInvite_GCResponseToInviter;
    case 7127:
    case "k_EMsgGCTeamInvite_GCResponseToInvitee":
      return EDOTAGCMsg.k_EMsgGCTeamInvite_GCResponseToInvitee;
    case 7128:
    case "k_EMsgGCKickTeamMember":
      return EDOTAGCMsg.k_EMsgGCKickTeamMember;
    case 7129:
    case "k_EMsgGCKickTeamMemberResponse":
      return EDOTAGCMsg.k_EMsgGCKickTeamMemberResponse;
    case 7130:
    case "k_EMsgGCLeaveTeam":
      return EDOTAGCMsg.k_EMsgGCLeaveTeam;
    case 7131:
    case "k_EMsgGCLeaveTeamResponse":
      return EDOTAGCMsg.k_EMsgGCLeaveTeamResponse;
    case 7142:
    case "k_EMsgGCApplyTeamToPracticeLobby":
      return EDOTAGCMsg.k_EMsgGCApplyTeamToPracticeLobby;
    case 7144:
    case "k_EMsgGCTransferTeamAdmin":
      return EDOTAGCMsg.k_EMsgGCTransferTeamAdmin;
    case 7149:
    case "k_EMsgGCPracticeLobbyJoinBroadcastChannel":
      return EDOTAGCMsg.k_EMsgGCPracticeLobbyJoinBroadcastChannel;
    case 7150:
    case "k_EMsgGC_TournamentItemEvent":
      return EDOTAGCMsg.k_EMsgGC_TournamentItemEvent;
    case 7151:
    case "k_EMsgGC_TournamentItemEventResponse":
      return EDOTAGCMsg.k_EMsgGC_TournamentItemEventResponse;
    case 7156:
    case "k_EMsgTeamFanfare":
      return EDOTAGCMsg.k_EMsgTeamFanfare;
    case 7157:
    case "k_EMsgResponseTeamFanfare":
      return EDOTAGCMsg.k_EMsgResponseTeamFanfare;
    case 7158:
    case "k_EMsgGC_GameServerUploadSaveGame":
      return EDOTAGCMsg.k_EMsgGC_GameServerUploadSaveGame;
    case 7159:
    case "k_EMsgGC_GameServerSaveGameResult":
      return EDOTAGCMsg.k_EMsgGC_GameServerSaveGameResult;
    case 7160:
    case "k_EMsgGC_GameServerGetLoadGame":
      return EDOTAGCMsg.k_EMsgGC_GameServerGetLoadGame;
    case 7161:
    case "k_EMsgGC_GameServerGetLoadGameResult":
      return EDOTAGCMsg.k_EMsgGC_GameServerGetLoadGameResult;
    case 7166:
    case "k_EMsgGCEditTeamDetails":
      return EDOTAGCMsg.k_EMsgGCEditTeamDetails;
    case 7167:
    case "k_EMsgGCEditTeamDetailsResponse":
      return EDOTAGCMsg.k_EMsgGCEditTeamDetailsResponse;
    case 7170:
    case "k_EMsgGCReadyUpStatus":
      return EDOTAGCMsg.k_EMsgGCReadyUpStatus;
    case 7186:
    case "k_EMsgGCToGCMatchCompleted":
      return EDOTAGCMsg.k_EMsgGCToGCMatchCompleted;
    case 7188:
    case "k_EMsgGCBalancedShuffleLobby":
      return EDOTAGCMsg.k_EMsgGCBalancedShuffleLobby;
    case 7197:
    case "k_EMsgGCMatchmakingStatsRequest":
      return EDOTAGCMsg.k_EMsgGCMatchmakingStatsRequest;
    case 7198:
    case "k_EMsgGCMatchmakingStatsResponse":
      return EDOTAGCMsg.k_EMsgGCMatchmakingStatsResponse;
    case 7199:
    case "k_EMsgGCBotGameCreate":
      return EDOTAGCMsg.k_EMsgGCBotGameCreate;
    case 7200:
    case "k_EMsgGCSetMatchHistoryAccess":
      return EDOTAGCMsg.k_EMsgGCSetMatchHistoryAccess;
    case 7201:
    case "k_EMsgGCSetMatchHistoryAccessResponse":
      return EDOTAGCMsg.k_EMsgGCSetMatchHistoryAccessResponse;
    case 7203:
    case "k_EMsgUpgradeLeagueItem":
      return EDOTAGCMsg.k_EMsgUpgradeLeagueItem;
    case 7204:
    case "k_EMsgUpgradeLeagueItemResponse":
      return EDOTAGCMsg.k_EMsgUpgradeLeagueItemResponse;
    case 7206:
    case "k_EMsgGCWatchDownloadedReplay":
      return EDOTAGCMsg.k_EMsgGCWatchDownloadedReplay;
    case 7217:
    case "k_EMsgClientsRejoinChatChannels":
      return EDOTAGCMsg.k_EMsgClientsRejoinChatChannels;
    case 7218:
    case "k_EMsgGCToGCGetUserChatInfo":
      return EDOTAGCMsg.k_EMsgGCToGCGetUserChatInfo;
    case 7219:
    case "k_EMsgGCToGCGetUserChatInfoResponse":
      return EDOTAGCMsg.k_EMsgGCToGCGetUserChatInfoResponse;
    case 7220:
    case "k_EMsgGCToGCLeaveAllChatChannels":
      return EDOTAGCMsg.k_EMsgGCToGCLeaveAllChatChannels;
    case 7221:
    case "k_EMsgGCToGCUpdateAccountChatBan":
      return EDOTAGCMsg.k_EMsgGCToGCUpdateAccountChatBan;
    case 7234:
    case "k_EMsgGCToGCCanInviteUserToTeam":
      return EDOTAGCMsg.k_EMsgGCToGCCanInviteUserToTeam;
    case 7235:
    case "k_EMsgGCToGCCanInviteUserToTeamResponse":
      return EDOTAGCMsg.k_EMsgGCToGCCanInviteUserToTeamResponse;
    case 7236:
    case "k_EMsgGCToGCGetUserRank":
      return EDOTAGCMsg.k_EMsgGCToGCGetUserRank;
    case 7237:
    case "k_EMsgGCToGCGetUserRankResponse":
      return EDOTAGCMsg.k_EMsgGCToGCGetUserRankResponse;
    case 7240:
    case "k_EMsgGCToGCUpdateTeamStats":
      return EDOTAGCMsg.k_EMsgGCToGCUpdateTeamStats;
    case 7241:
    case "k_EMsgGCToGCValidateTeam":
      return EDOTAGCMsg.k_EMsgGCToGCValidateTeam;
    case 7242:
    case "k_EMsgGCToGCValidateTeamResponse":
      return EDOTAGCMsg.k_EMsgGCToGCValidateTeamResponse;
    case 7255:
    case "k_EMsgGCToGCGetLeagueAdmin":
      return EDOTAGCMsg.k_EMsgGCToGCGetLeagueAdmin;
    case 7256:
    case "k_EMsgGCToGCGetLeagueAdminResponse":
      return EDOTAGCMsg.k_EMsgGCToGCGetLeagueAdminResponse;
    case 7272:
    case "k_EMsgGCLeaveChatChannel":
      return EDOTAGCMsg.k_EMsgGCLeaveChatChannel;
    case 7273:
    case "k_EMsgGCChatMessage":
      return EDOTAGCMsg.k_EMsgGCChatMessage;
    case 7274:
    case "k_EMsgGCGetHeroStandings":
      return EDOTAGCMsg.k_EMsgGCGetHeroStandings;
    case 7275:
    case "k_EMsgGCGetHeroStandingsResponse":
      return EDOTAGCMsg.k_EMsgGCGetHeroStandingsResponse;
    case 7283:
    case "k_EMsgGCItemEditorReservationsRequest":
      return EDOTAGCMsg.k_EMsgGCItemEditorReservationsRequest;
    case 7284:
    case "k_EMsgGCItemEditorReservationsResponse":
      return EDOTAGCMsg.k_EMsgGCItemEditorReservationsResponse;
    case 7285:
    case "k_EMsgGCItemEditorReserveItemDef":
      return EDOTAGCMsg.k_EMsgGCItemEditorReserveItemDef;
    case 7286:
    case "k_EMsgGCItemEditorReserveItemDefResponse":
      return EDOTAGCMsg.k_EMsgGCItemEditorReserveItemDefResponse;
    case 7287:
    case "k_EMsgGCItemEditorReleaseReservation":
      return EDOTAGCMsg.k_EMsgGCItemEditorReleaseReservation;
    case 7288:
    case "k_EMsgGCItemEditorReleaseReservationResponse":
      return EDOTAGCMsg.k_EMsgGCItemEditorReleaseReservationResponse;
    case 7289:
    case "k_EMsgGCRewardTutorialPrizes":
      return EDOTAGCMsg.k_EMsgGCRewardTutorialPrizes;
    case 7308:
    case "k_EMsgGCFantasyLivePlayerStats":
      return EDOTAGCMsg.k_EMsgGCFantasyLivePlayerStats;
    case 7309:
    case "k_EMsgGCFantasyFinalPlayerStats":
      return EDOTAGCMsg.k_EMsgGCFantasyFinalPlayerStats;
    case 7320:
    case "k_EMsgGCFlipLobbyTeams":
      return EDOTAGCMsg.k_EMsgGCFlipLobbyTeams;
    case 7324:
    case "k_EMsgGCToGCProcessPlayerReportForTarget":
      return EDOTAGCMsg.k_EMsgGCToGCProcessPlayerReportForTarget;
    case 7325:
    case "k_EMsgGCToGCProcessReportSuccess":
      return EDOTAGCMsg.k_EMsgGCToGCProcessReportSuccess;
    case 7326:
    case "k_EMsgGCNotifyAccountFlagsChange":
      return EDOTAGCMsg.k_EMsgGCNotifyAccountFlagsChange;
    case 7327:
    case "k_EMsgGCSetProfilePrivacy":
      return EDOTAGCMsg.k_EMsgGCSetProfilePrivacy;
    case 7328:
    case "k_EMsgGCSetProfilePrivacyResponse":
      return EDOTAGCMsg.k_EMsgGCSetProfilePrivacyResponse;
    case 7342:
    case "k_EMsgGCClientSuspended":
      return EDOTAGCMsg.k_EMsgGCClientSuspended;
    case 7343:
    case "k_EMsgGCPartyMemberSetCoach":
      return EDOTAGCMsg.k_EMsgGCPartyMemberSetCoach;
    case 7346:
    case "k_EMsgGCPracticeLobbySetCoach":
      return EDOTAGCMsg.k_EMsgGCPracticeLobbySetCoach;
    case 7359:
    case "k_EMsgGCChatModeratorBan":
      return EDOTAGCMsg.k_EMsgGCChatModeratorBan;
    case 7367:
    case "k_EMsgGCLobbyUpdateBroadcastChannelInfo":
      return EDOTAGCMsg.k_EMsgGCLobbyUpdateBroadcastChannelInfo;
    case 7372:
    case "k_EMsgGCToGCGrantTournamentItem":
      return EDOTAGCMsg.k_EMsgGCToGCGrantTournamentItem;
    case 7375:
    case "k_EMsgGCToGCUpgradeTwitchViewerItems":
      return EDOTAGCMsg.k_EMsgGCToGCUpgradeTwitchViewerItems;
    case 7376:
    case "k_EMsgGCToGCGetLiveMatchAffiliates":
      return EDOTAGCMsg.k_EMsgGCToGCGetLiveMatchAffiliates;
    case 7377:
    case "k_EMsgGCToGCGetLiveMatchAffiliatesResponse":
      return EDOTAGCMsg.k_EMsgGCToGCGetLiveMatchAffiliatesResponse;
    case 7378:
    case "k_EMsgGCToGCUpdatePlayerPennantCounts":
      return EDOTAGCMsg.k_EMsgGCToGCUpdatePlayerPennantCounts;
    case 7379:
    case "k_EMsgGCToGCGetPlayerPennantCounts":
      return EDOTAGCMsg.k_EMsgGCToGCGetPlayerPennantCounts;
    case 7380:
    case "k_EMsgGCToGCGetPlayerPennantCountsResponse":
      return EDOTAGCMsg.k_EMsgGCToGCGetPlayerPennantCountsResponse;
    case 7381:
    case "k_EMsgGCGameMatchSignOutPermissionRequest":
      return EDOTAGCMsg.k_EMsgGCGameMatchSignOutPermissionRequest;
    case 7382:
    case "k_EMsgGCGameMatchSignOutPermissionResponse":
      return EDOTAGCMsg.k_EMsgGCGameMatchSignOutPermissionResponse;
    case 7384:
    case "k_EMsgDOTAAwardEventPoints":
      return EDOTAGCMsg.k_EMsgDOTAAwardEventPoints;
    case 7387:
    case "k_EMsgDOTAGetEventPoints":
      return EDOTAGCMsg.k_EMsgDOTAGetEventPoints;
    case 7388:
    case "k_EMsgDOTAGetEventPointsResponse":
      return EDOTAGCMsg.k_EMsgDOTAGetEventPointsResponse;
    case 7397:
    case "k_EMsgGCPartyLeaderWatchGamePrompt":
      return EDOTAGCMsg.k_EMsgGCPartyLeaderWatchGamePrompt;
    case 7405:
    case "k_EMsgGCCompendiumSetSelection":
      return EDOTAGCMsg.k_EMsgGCCompendiumSetSelection;
    case 7406:
    case "k_EMsgGCCompendiumDataRequest":
      return EDOTAGCMsg.k_EMsgGCCompendiumDataRequest;
    case 7407:
    case "k_EMsgGCCompendiumDataResponse":
      return EDOTAGCMsg.k_EMsgGCCompendiumDataResponse;
    case 7408:
    case "k_EMsgDOTAGetPlayerMatchHistory":
      return EDOTAGCMsg.k_EMsgDOTAGetPlayerMatchHistory;
    case 7409:
    case "k_EMsgDOTAGetPlayerMatchHistoryResponse":
      return EDOTAGCMsg.k_EMsgDOTAGetPlayerMatchHistoryResponse;
    case 7410:
    case "k_EMsgGCToGCMatchmakingAddParty":
      return EDOTAGCMsg.k_EMsgGCToGCMatchmakingAddParty;
    case 7411:
    case "k_EMsgGCToGCMatchmakingRemoveParty":
      return EDOTAGCMsg.k_EMsgGCToGCMatchmakingRemoveParty;
    case 7412:
    case "k_EMsgGCToGCMatchmakingRemoveAllParties":
      return EDOTAGCMsg.k_EMsgGCToGCMatchmakingRemoveAllParties;
    case 7413:
    case "k_EMsgGCToGCMatchmakingMatchFound":
      return EDOTAGCMsg.k_EMsgGCToGCMatchmakingMatchFound;
    case 7414:
    case "k_EMsgGCToGCUpdateMatchManagementStats":
      return EDOTAGCMsg.k_EMsgGCToGCUpdateMatchManagementStats;
    case 7415:
    case "k_EMsgGCToGCUpdateMatchmakingStats":
      return EDOTAGCMsg.k_EMsgGCToGCUpdateMatchmakingStats;
    case 7416:
    case "k_EMsgGCToServerPingRequest":
      return EDOTAGCMsg.k_EMsgGCToServerPingRequest;
    case 7417:
    case "k_EMsgGCToServerPingResponse":
      return EDOTAGCMsg.k_EMsgGCToServerPingResponse;
    case 7426:
    case "k_EMsgGCToGCProcessMatchLeaver":
      return EDOTAGCMsg.k_EMsgGCToGCProcessMatchLeaver;
    case 7427:
    case "k_EMsgGCNotificationsRequest":
      return EDOTAGCMsg.k_EMsgGCNotificationsRequest;
    case 7428:
    case "k_EMsgGCNotificationsResponse":
      return EDOTAGCMsg.k_EMsgGCNotificationsResponse;
    case 7429:
    case "k_EMsgGCToGCModifyNotification":
      return EDOTAGCMsg.k_EMsgGCToGCModifyNotification;
    case 7434:
    case "k_EMsgGCLeagueAdminList":
      return EDOTAGCMsg.k_EMsgGCLeagueAdminList;
    case 7435:
    case "k_EMsgGCNotificationsMarkReadRequest":
      return EDOTAGCMsg.k_EMsgGCNotificationsMarkReadRequest;
    case 7450:
    case "k_EMsgServerToGCRequestBatchPlayerResources":
      return EDOTAGCMsg.k_EMsgServerToGCRequestBatchPlayerResources;
    case 7451:
    case "k_EMsgServerToGCRequestBatchPlayerResourcesResponse":
      return EDOTAGCMsg.k_EMsgServerToGCRequestBatchPlayerResourcesResponse;
    case 7453:
    case "k_EMsgGCCompendiumSetSelectionResponse":
      return EDOTAGCMsg.k_EMsgGCCompendiumSetSelectionResponse;
    case 7456:
    case "k_EMsgGCPlayerInfoSubmit":
      return EDOTAGCMsg.k_EMsgGCPlayerInfoSubmit;
    case 7457:
    case "k_EMsgGCPlayerInfoSubmitResponse":
      return EDOTAGCMsg.k_EMsgGCPlayerInfoSubmitResponse;
    case 7458:
    case "k_EMsgGCToGCGetAccountLevel":
      return EDOTAGCMsg.k_EMsgGCToGCGetAccountLevel;
    case 7459:
    case "k_EMsgGCToGCGetAccountLevelResponse":
      return EDOTAGCMsg.k_EMsgGCToGCGetAccountLevelResponse;
    case 7464:
    case "k_EMsgDOTAGetWeekendTourneySchedule":
      return EDOTAGCMsg.k_EMsgDOTAGetWeekendTourneySchedule;
    case 7465:
    case "k_EMsgDOTAWeekendTourneySchedule":
      return EDOTAGCMsg.k_EMsgDOTAWeekendTourneySchedule;
    case 7466:
    case "k_EMsgGCJoinableCustomGameModesRequest":
      return EDOTAGCMsg.k_EMsgGCJoinableCustomGameModesRequest;
    case 7467:
    case "k_EMsgGCJoinableCustomGameModesResponse":
      return EDOTAGCMsg.k_EMsgGCJoinableCustomGameModesResponse;
    case 7468:
    case "k_EMsgGCJoinableCustomLobbiesRequest":
      return EDOTAGCMsg.k_EMsgGCJoinableCustomLobbiesRequest;
    case 7469:
    case "k_EMsgGCJoinableCustomLobbiesResponse":
      return EDOTAGCMsg.k_EMsgGCJoinableCustomLobbiesResponse;
    case 7470:
    case "k_EMsgGCQuickJoinCustomLobby":
      return EDOTAGCMsg.k_EMsgGCQuickJoinCustomLobby;
    case 7471:
    case "k_EMsgGCQuickJoinCustomLobbyResponse":
      return EDOTAGCMsg.k_EMsgGCQuickJoinCustomLobbyResponse;
    case 7472:
    case "k_EMsgGCToGCGrantEventPointAction":
      return EDOTAGCMsg.k_EMsgGCToGCGrantEventPointAction;
    case 7478:
    case "k_EMsgGCToGCSetCompendiumSelection":
      return EDOTAGCMsg.k_EMsgGCToGCSetCompendiumSelection;
    case 7484:
    case "k_EMsgGCHasItemQuery":
      return EDOTAGCMsg.k_EMsgGCHasItemQuery;
    case 7485:
    case "k_EMsgGCHasItemResponse":
      return EDOTAGCMsg.k_EMsgGCHasItemResponse;
    case 7488:
    case "k_EMsgGCToGCGrantEventPointActionMsg":
      return EDOTAGCMsg.k_EMsgGCToGCGrantEventPointActionMsg;
    case 7492:
    case "k_EMsgGCToGCGetCompendiumSelections":
      return EDOTAGCMsg.k_EMsgGCToGCGetCompendiumSelections;
    case 7493:
    case "k_EMsgGCToGCGetCompendiumSelectionsResponse":
      return EDOTAGCMsg.k_EMsgGCToGCGetCompendiumSelectionsResponse;
    case 7494:
    case "k_EMsgServerToGCMatchConnectionStats":
      return EDOTAGCMsg.k_EMsgServerToGCMatchConnectionStats;
    case 7495:
    case "k_EMsgGCToClientTournamentItemDrop":
      return EDOTAGCMsg.k_EMsgGCToClientTournamentItemDrop;
    case 7496:
    case "k_EMsgSQLDelayedGrantLeagueDrop":
      return EDOTAGCMsg.k_EMsgSQLDelayedGrantLeagueDrop;
    case 7497:
    case "k_EMsgServerGCUpdateSpectatorCount":
      return EDOTAGCMsg.k_EMsgServerGCUpdateSpectatorCount;
    case 7501:
    case "k_EMsgGCToGCEmoticonUnlock":
      return EDOTAGCMsg.k_EMsgGCToGCEmoticonUnlock;
    case 7502:
    case "k_EMsgSignOutDraftInfo":
      return EDOTAGCMsg.k_EMsgSignOutDraftInfo;
    case 7503:
    case "k_EMsgClientToGCEmoticonDataRequest":
      return EDOTAGCMsg.k_EMsgClientToGCEmoticonDataRequest;
    case 7504:
    case "k_EMsgGCToClientEmoticonData":
      return EDOTAGCMsg.k_EMsgGCToClientEmoticonData;
    case 7505:
    case "k_EMsgGCPracticeLobbyToggleBroadcastChannelCameramanStatus":
      return EDOTAGCMsg.k_EMsgGCPracticeLobbyToggleBroadcastChannelCameramanStatus;
    case 7518:
    case "k_EMsgDOTARedeemItem":
      return EDOTAGCMsg.k_EMsgDOTARedeemItem;
    case 7519:
    case "k_EMsgDOTARedeemItemResponse":
      return EDOTAGCMsg.k_EMsgDOTARedeemItemResponse;
    case 7521:
    case "k_EMsgClientToGCGetAllHeroProgress":
      return EDOTAGCMsg.k_EMsgClientToGCGetAllHeroProgress;
    case 7522:
    case "k_EMsgClientToGCGetAllHeroProgressResponse":
      return EDOTAGCMsg.k_EMsgClientToGCGetAllHeroProgressResponse;
    case 7523:
    case "k_EMsgGCToGCGetServerForClient":
      return EDOTAGCMsg.k_EMsgGCToGCGetServerForClient;
    case 7524:
    case "k_EMsgGCToGCGetServerForClientResponse":
      return EDOTAGCMsg.k_EMsgGCToGCGetServerForClientResponse;
    case 7525:
    case "k_EMsgSQLProcessTournamentGameOutcome":
      return EDOTAGCMsg.k_EMsgSQLProcessTournamentGameOutcome;
    case 7526:
    case "k_EMsgSQLGrantTrophyToAccount":
      return EDOTAGCMsg.k_EMsgSQLGrantTrophyToAccount;
    case 7527:
    case "k_EMsgClientToGCGetTrophyList":
      return EDOTAGCMsg.k_EMsgClientToGCGetTrophyList;
    case 7528:
    case "k_EMsgClientToGCGetTrophyListResponse":
      return EDOTAGCMsg.k_EMsgClientToGCGetTrophyListResponse;
    case 7529:
    case "k_EMsgGCToClientTrophyAwarded":
      return EDOTAGCMsg.k_EMsgGCToClientTrophyAwarded;
    case 7530:
    case "k_EMsgGCGameBotMatchSignOut":
      return EDOTAGCMsg.k_EMsgGCGameBotMatchSignOut;
    case 7531:
    case "k_EMsgGCGameBotMatchSignOutPermissionRequest":
      return EDOTAGCMsg.k_EMsgGCGameBotMatchSignOutPermissionRequest;
    case 7532:
    case "k_EMsgSignOutBotInfo":
      return EDOTAGCMsg.k_EMsgSignOutBotInfo;
    case 7533:
    case "k_EMsgGCToGCUpdateProfileCards":
      return EDOTAGCMsg.k_EMsgGCToGCUpdateProfileCards;
    case 7534:
    case "k_EMsgClientToGCGetProfileCard":
      return EDOTAGCMsg.k_EMsgClientToGCGetProfileCard;
    case 7535:
    case "k_EMsgClientToGCGetProfileCardResponse":
      return EDOTAGCMsg.k_EMsgClientToGCGetProfileCardResponse;
    case 7536:
    case "k_EMsgClientToGCGetBattleReport":
      return EDOTAGCMsg.k_EMsgClientToGCGetBattleReport;
    case 7537:
    case "k_EMsgClientToGCGetBattleReportResponse":
      return EDOTAGCMsg.k_EMsgClientToGCGetBattleReportResponse;
    case 7538:
    case "k_EMsgClientToGCSetProfileCardSlots":
      return EDOTAGCMsg.k_EMsgClientToGCSetProfileCardSlots;
    case 7539:
    case "k_EMsgGCToClientProfileCardUpdated":
      return EDOTAGCMsg.k_EMsgGCToClientProfileCardUpdated;
    case 7540:
    case "k_EMsgServerToGCVictoryPredictions":
      return EDOTAGCMsg.k_EMsgServerToGCVictoryPredictions;
    case 7541:
    case "k_EMsgClientToGCGetBattleReportAggregateStats":
      return EDOTAGCMsg.k_EMsgClientToGCGetBattleReportAggregateStats;
    case 7542:
    case "k_EMsgClientToGCGetBattleReportAggregateStatsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCGetBattleReportAggregateStatsResponse;
    case 7543:
    case "k_EMsgClientToGCGetBattleReportInfo":
      return EDOTAGCMsg.k_EMsgClientToGCGetBattleReportInfo;
    case 7544:
    case "k_EMsgClientToGCGetBattleReportInfoResponse":
      return EDOTAGCMsg.k_EMsgClientToGCGetBattleReportInfoResponse;
    case 7545:
    case "k_EMsgSignOutCommunicationSummary":
      return EDOTAGCMsg.k_EMsgSignOutCommunicationSummary;
    case 7546:
    case "k_EMsgServerToGCRequestStatus_Response":
      return EDOTAGCMsg.k_EMsgServerToGCRequestStatus_Response;
    case 7547:
    case "k_EMsgClientToGCCreateHeroStatue":
      return EDOTAGCMsg.k_EMsgClientToGCCreateHeroStatue;
    case 7548:
    case "k_EMsgGCToClientHeroStatueCreateResult":
      return EDOTAGCMsg.k_EMsgGCToClientHeroStatueCreateResult;
    case 7549:
    case "k_EMsgGCGCToLANServerRelayConnect":
      return EDOTAGCMsg.k_EMsgGCGCToLANServerRelayConnect;
    case 7550:
    case "k_EMsgClientToGCAcknowledgeBattleReport":
      return EDOTAGCMsg.k_EMsgClientToGCAcknowledgeBattleReport;
    case 7551:
    case "k_EMsgClientToGCAcknowledgeBattleReportResponse":
      return EDOTAGCMsg.k_EMsgClientToGCAcknowledgeBattleReportResponse;
    case 7552:
    case "k_EMsgClientToGCGetBattleReportMatchHistory":
      return EDOTAGCMsg.k_EMsgClientToGCGetBattleReportMatchHistory;
    case 7553:
    case "k_EMsgClientToGCGetBattleReportMatchHistoryResponse":
      return EDOTAGCMsg.k_EMsgClientToGCGetBattleReportMatchHistoryResponse;
    case 7554:
    case "k_EMsgServerToGCReportKillSummaries":
      return EDOTAGCMsg.k_EMsgServerToGCReportKillSummaries;
    case 7561:
    case "k_EMsgGCToGCUpdatePlayerPredictions":
      return EDOTAGCMsg.k_EMsgGCToGCUpdatePlayerPredictions;
    case 7562:
    case "k_EMsgGCToServerPredictionResult":
      return EDOTAGCMsg.k_EMsgGCToServerPredictionResult;
    case 7569:
    case "k_EMsgGCToGCReplayMonitorValidateReplay":
      return EDOTAGCMsg.k_EMsgGCToGCReplayMonitorValidateReplay;
    case 7572:
    case "k_EMsgLobbyEventPoints":
      return EDOTAGCMsg.k_EMsgLobbyEventPoints;
    case 7573:
    case "k_EMsgGCToGCGetCustomGameTickets":
      return EDOTAGCMsg.k_EMsgGCToGCGetCustomGameTickets;
    case 7574:
    case "k_EMsgGCToGCGetCustomGameTicketsResponse":
      return EDOTAGCMsg.k_EMsgGCToGCGetCustomGameTicketsResponse;
    case 7576:
    case "k_EMsgGCToGCCustomGamePlayed":
      return EDOTAGCMsg.k_EMsgGCToGCCustomGamePlayed;
    case 7577:
    case "k_EMsgGCToGCGrantEventPointsToUser":
      return EDOTAGCMsg.k_EMsgGCToGCGrantEventPointsToUser;
    case 7579:
    case "k_EMsgGameserverCrashReport":
      return EDOTAGCMsg.k_EMsgGameserverCrashReport;
    case 7580:
    case "k_EMsgGameserverCrashReportResponse":
      return EDOTAGCMsg.k_EMsgGameserverCrashReportResponse;
    case 7581:
    case "k_EMsgGCToClientSteamDatagramTicket":
      return EDOTAGCMsg.k_EMsgGCToClientSteamDatagramTicket;
    case 7583:
    case "k_EMsgGCToGCSendAccountsEventPoints":
      return EDOTAGCMsg.k_EMsgGCToGCSendAccountsEventPoints;
    case 7584:
    case "k_EMsgClientToGCRerollPlayerChallenge":
      return EDOTAGCMsg.k_EMsgClientToGCRerollPlayerChallenge;
    case 7585:
    case "k_EMsgServerToGCRerollPlayerChallenge":
      return EDOTAGCMsg.k_EMsgServerToGCRerollPlayerChallenge;
    case 7586:
    case "k_EMsgGCRerollPlayerChallengeResponse":
      return EDOTAGCMsg.k_EMsgGCRerollPlayerChallengeResponse;
    case 7587:
    case "k_EMsgSignOutUpdatePlayerChallenge":
      return EDOTAGCMsg.k_EMsgSignOutUpdatePlayerChallenge;
    case 7588:
    case "k_EMsgClientToGCSetPartyLeader":
      return EDOTAGCMsg.k_EMsgClientToGCSetPartyLeader;
    case 7589:
    case "k_EMsgClientToGCCancelPartyInvites":
      return EDOTAGCMsg.k_EMsgClientToGCCancelPartyInvites;
    case 7592:
    case "k_EMsgSQLGrantLeagueMatchToTicketHolders":
      return EDOTAGCMsg.k_EMsgSQLGrantLeagueMatchToTicketHolders;
    case 7594:
    case "k_EMsgGCToGCEmoticonUnlockNoRollback":
      return EDOTAGCMsg.k_EMsgGCToGCEmoticonUnlockNoRollback;
    case 7603:
    case "k_EMsgClientToGCApplyGemCombiner":
      return EDOTAGCMsg.k_EMsgClientToGCApplyGemCombiner;
    case 7606:
    case "k_EMsgClientToGCGetAllHeroOrder":
      return EDOTAGCMsg.k_EMsgClientToGCGetAllHeroOrder;
    case 7607:
    case "k_EMsgClientToGCGetAllHeroOrderResponse":
      return EDOTAGCMsg.k_EMsgClientToGCGetAllHeroOrderResponse;
    case 7608:
    case "k_EMsgSQLGCToGCGrantBadgePoints":
      return EDOTAGCMsg.k_EMsgSQLGCToGCGrantBadgePoints;
    case 7611:
    case "k_EMsgGCToGCCheckOwnsEntireEmoticonRange":
      return EDOTAGCMsg.k_EMsgGCToGCCheckOwnsEntireEmoticonRange;
    case 7612:
    case "k_EMsgGCToGCCheckOwnsEntireEmoticonRangeResponse":
      return EDOTAGCMsg.k_EMsgGCToGCCheckOwnsEntireEmoticonRangeResponse;
    case 7623:
    case "k_EMsgGCToClientRequestLaneSelection":
      return EDOTAGCMsg.k_EMsgGCToClientRequestLaneSelection;
    case 7624:
    case "k_EMsgGCToClientRequestLaneSelectionResponse":
      return EDOTAGCMsg.k_EMsgGCToClientRequestLaneSelectionResponse;
    case 7625:
    case "k_EMsgServerToGCCavernCrawlIsHeroActive":
      return EDOTAGCMsg.k_EMsgServerToGCCavernCrawlIsHeroActive;
    case 7626:
    case "k_EMsgServerToGCCavernCrawlIsHeroActiveResponse":
      return EDOTAGCMsg.k_EMsgServerToGCCavernCrawlIsHeroActiveResponse;
    case 7627:
    case "k_EMsgClientToGCPlayerCardSpecificPurchaseRequest":
      return EDOTAGCMsg.k_EMsgClientToGCPlayerCardSpecificPurchaseRequest;
    case 7628:
    case "k_EMsgClientToGCPlayerCardSpecificPurchaseResponse":
      return EDOTAGCMsg.k_EMsgClientToGCPlayerCardSpecificPurchaseResponse;
    case 7629:
    case "k_EMsgGCtoServerTensorflowInstance":
      return EDOTAGCMsg.k_EMsgGCtoServerTensorflowInstance;
    case 7630:
    case "k_EMsgSQLSetIsLeagueAdmin":
      return EDOTAGCMsg.k_EMsgSQLSetIsLeagueAdmin;
    case 7631:
    case "k_EMsgGCToGCGetLiveLeagueMatches":
      return EDOTAGCMsg.k_EMsgGCToGCGetLiveLeagueMatches;
    case 7632:
    case "k_EMsgGCToGCGetLiveLeagueMatchesResponse":
      return EDOTAGCMsg.k_EMsgGCToGCGetLiveLeagueMatchesResponse;
    case 7633:
    case "k_EMsgDOTALeagueInfoListAdminsRequest":
      return EDOTAGCMsg.k_EMsgDOTALeagueInfoListAdminsRequest;
    case 7634:
    case "k_EMsgDOTALeagueInfoListAdminsReponse":
      return EDOTAGCMsg.k_EMsgDOTALeagueInfoListAdminsReponse;
    case 7645:
    case "k_EMsgGCToGCLeagueMatchStarted":
      return EDOTAGCMsg.k_EMsgGCToGCLeagueMatchStarted;
    case 7646:
    case "k_EMsgGCToGCLeagueMatchCompleted":
      return EDOTAGCMsg.k_EMsgGCToGCLeagueMatchCompleted;
    case 7647:
    case "k_EMsgGCToGCLeagueMatchStartedResponse":
      return EDOTAGCMsg.k_EMsgGCToGCLeagueMatchStartedResponse;
    case 7650:
    case "k_EMsgDOTALeagueAvailableLobbyNodesRequest":
      return EDOTAGCMsg.k_EMsgDOTALeagueAvailableLobbyNodesRequest;
    case 7651:
    case "k_EMsgDOTALeagueAvailableLobbyNodes":
      return EDOTAGCMsg.k_EMsgDOTALeagueAvailableLobbyNodes;
    case 7652:
    case "k_EMsgGCToGCLeagueRequest":
      return EDOTAGCMsg.k_EMsgGCToGCLeagueRequest;
    case 7653:
    case "k_EMsgGCToGCLeagueResponse":
      return EDOTAGCMsg.k_EMsgGCToGCLeagueResponse;
    case 7654:
    case "k_EMsgGCToGCLeagueNodeGroupRequest":
      return EDOTAGCMsg.k_EMsgGCToGCLeagueNodeGroupRequest;
    case 7655:
    case "k_EMsgGCToGCLeagueNodeGroupResponse":
      return EDOTAGCMsg.k_EMsgGCToGCLeagueNodeGroupResponse;
    case 7656:
    case "k_EMsgGCToGCLeagueNodeRequest":
      return EDOTAGCMsg.k_EMsgGCToGCLeagueNodeRequest;
    case 7657:
    case "k_EMsgGCToGCLeagueNodeResponse":
      return EDOTAGCMsg.k_EMsgGCToGCLeagueNodeResponse;
    case 7658:
    case "k_EMsgGCToGCRealtimeStatsTerseRequest":
      return EDOTAGCMsg.k_EMsgGCToGCRealtimeStatsTerseRequest;
    case 7659:
    case "k_EMsgGCToGCRealtimeStatsTerseResponse":
      return EDOTAGCMsg.k_EMsgGCToGCRealtimeStatsTerseResponse;
    case 7660:
    case "k_EMsgGCToGCGetTopMatchesRequest":
      return EDOTAGCMsg.k_EMsgGCToGCGetTopMatchesRequest;
    case 7661:
    case "k_EMsgGCToGCGetTopMatchesResponse":
      return EDOTAGCMsg.k_EMsgGCToGCGetTopMatchesResponse;
    case 7662:
    case "k_EMsgClientToGCGetFilteredPlayers":
      return EDOTAGCMsg.k_EMsgClientToGCGetFilteredPlayers;
    case 7663:
    case "k_EMsgGCToClientGetFilteredPlayersResponse":
      return EDOTAGCMsg.k_EMsgGCToClientGetFilteredPlayersResponse;
    case 7664:
    case "k_EMsgClientToGCRemoveFilteredPlayer":
      return EDOTAGCMsg.k_EMsgClientToGCRemoveFilteredPlayer;
    case 7665:
    case "k_EMsgGCToClientRemoveFilteredPlayerResponse":
      return EDOTAGCMsg.k_EMsgGCToClientRemoveFilteredPlayerResponse;
    case 7666:
    case "k_EMsgGCToClientPlayerBeaconState":
      return EDOTAGCMsg.k_EMsgGCToClientPlayerBeaconState;
    case 7667:
    case "k_EMsgGCToClientPartyBeaconUpdate":
      return EDOTAGCMsg.k_EMsgGCToClientPartyBeaconUpdate;
    case 7668:
    case "k_EMsgGCToClientPartySearchInvite":
      return EDOTAGCMsg.k_EMsgGCToClientPartySearchInvite;
    case 7669:
    case "k_EMsgClientToGCUpdatePartyBeacon":
      return EDOTAGCMsg.k_EMsgClientToGCUpdatePartyBeacon;
    case 7670:
    case "k_EMsgClientToGCRequestActiveBeaconParties":
      return EDOTAGCMsg.k_EMsgClientToGCRequestActiveBeaconParties;
    case 7671:
    case "k_EMsgGCToClientRequestActiveBeaconPartiesResponse":
      return EDOTAGCMsg.k_EMsgGCToClientRequestActiveBeaconPartiesResponse;
    case 7672:
    case "k_EMsgClientToGCManageFavorites":
      return EDOTAGCMsg.k_EMsgClientToGCManageFavorites;
    case 7673:
    case "k_EMsgGCToClientManageFavoritesResponse":
      return EDOTAGCMsg.k_EMsgGCToClientManageFavoritesResponse;
    case 7674:
    case "k_EMsgClientToGCJoinPartyFromBeacon":
      return EDOTAGCMsg.k_EMsgClientToGCJoinPartyFromBeacon;
    case 7675:
    case "k_EMsgGCToClientJoinPartyFromBeaconResponse":
      return EDOTAGCMsg.k_EMsgGCToClientJoinPartyFromBeaconResponse;
    case 7676:
    case "k_EMsgClientToGCGetFavoritePlayers":
      return EDOTAGCMsg.k_EMsgClientToGCGetFavoritePlayers;
    case 7677:
    case "k_EMsgGCToClientGetFavoritePlayersResponse":
      return EDOTAGCMsg.k_EMsgGCToClientGetFavoritePlayersResponse;
    case 7678:
    case "k_EMsgClientToGCVerifyFavoritePlayers":
      return EDOTAGCMsg.k_EMsgClientToGCVerifyFavoritePlayers;
    case 7679:
    case "k_EMsgGCToClientVerifyFavoritePlayersResponse":
      return EDOTAGCMsg.k_EMsgGCToClientVerifyFavoritePlayersResponse;
    case 7680:
    case "k_EMsgGCToClientPartySearchInvites":
      return EDOTAGCMsg.k_EMsgGCToClientPartySearchInvites;
    case 7681:
    case "k_EMsgGCToClientRequestMMInfo":
      return EDOTAGCMsg.k_EMsgGCToClientRequestMMInfo;
    case 7682:
    case "k_EMsgClientToGCMMInfo":
      return EDOTAGCMsg.k_EMsgClientToGCMMInfo;
    case 7683:
    case "k_EMsgSignOutTextMuteInfo":
      return EDOTAGCMsg.k_EMsgSignOutTextMuteInfo;
    case 7684:
    case "k_EMsgClientToGCPurchaseLabyrinthBlessings":
      return EDOTAGCMsg.k_EMsgClientToGCPurchaseLabyrinthBlessings;
    case 7685:
    case "k_EMsgClientToGCPurchaseLabyrinthBlessingsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCPurchaseLabyrinthBlessingsResponse;
    case 7686:
    case "k_EMsgClientToGCPurchaseFilteredPlayerSlot":
      return EDOTAGCMsg.k_EMsgClientToGCPurchaseFilteredPlayerSlot;
    case 7687:
    case "k_EMsgGCToClientPurchaseFilteredPlayerSlotResponse":
      return EDOTAGCMsg.k_EMsgGCToClientPurchaseFilteredPlayerSlotResponse;
    case 7688:
    case "k_EMsgClientToGCUpdateFilteredPlayerNote":
      return EDOTAGCMsg.k_EMsgClientToGCUpdateFilteredPlayerNote;
    case 7689:
    case "k_EMsgGCToClientUpdateFilteredPlayerNoteResponse":
      return EDOTAGCMsg.k_EMsgGCToClientUpdateFilteredPlayerNoteResponse;
    case 7690:
    case "k_EMsgClientToGCClaimSwag":
      return EDOTAGCMsg.k_EMsgClientToGCClaimSwag;
    case 7691:
    case "k_EMsgGCToClientClaimSwagResponse":
      return EDOTAGCMsg.k_EMsgGCToClientClaimSwagResponse;
    case 8004:
    case "k_EMsgServerToGCLockCharmTrading":
      return EDOTAGCMsg.k_EMsgServerToGCLockCharmTrading;
    case 8006:
    case "k_EMsgClientToGCPlayerStatsRequest":
      return EDOTAGCMsg.k_EMsgClientToGCPlayerStatsRequest;
    case 8007:
    case "k_EMsgGCToClientPlayerStatsResponse":
      return EDOTAGCMsg.k_EMsgGCToClientPlayerStatsResponse;
    case 8008:
    case "k_EMsgGCClearPracticeLobbyTeam":
      return EDOTAGCMsg.k_EMsgGCClearPracticeLobbyTeam;
    case 8009:
    case "k_EMsgClientToGCFindTopSourceTVGames":
      return EDOTAGCMsg.k_EMsgClientToGCFindTopSourceTVGames;
    case 8010:
    case "k_EMsgGCToClientFindTopSourceTVGamesResponse":
      return EDOTAGCMsg.k_EMsgGCToClientFindTopSourceTVGamesResponse;
    case 8011:
    case "k_EMsgGCLobbyList":
      return EDOTAGCMsg.k_EMsgGCLobbyList;
    case 8012:
    case "k_EMsgGCLobbyListResponse":
      return EDOTAGCMsg.k_EMsgGCLobbyListResponse;
    case 8013:
    case "k_EMsgGCPlayerStatsMatchSignOut":
      return EDOTAGCMsg.k_EMsgGCPlayerStatsMatchSignOut;
    case 8016:
    case "k_EMsgClientToGCSocialFeedPostCommentRequest":
      return EDOTAGCMsg.k_EMsgClientToGCSocialFeedPostCommentRequest;
    case 8017:
    case "k_EMsgGCToClientSocialFeedPostCommentResponse":
      return EDOTAGCMsg.k_EMsgGCToClientSocialFeedPostCommentResponse;
    case 8018:
    case "k_EMsgClientToGCCustomGamesFriendsPlayedRequest":
      return EDOTAGCMsg.k_EMsgClientToGCCustomGamesFriendsPlayedRequest;
    case 8019:
    case "k_EMsgGCToClientCustomGamesFriendsPlayedResponse":
      return EDOTAGCMsg.k_EMsgGCToClientCustomGamesFriendsPlayedResponse;
    case 8020:
    case "k_EMsgClientToGCFriendsPlayedCustomGameRequest":
      return EDOTAGCMsg.k_EMsgClientToGCFriendsPlayedCustomGameRequest;
    case 8021:
    case "k_EMsgGCToClientFriendsPlayedCustomGameResponse":
      return EDOTAGCMsg.k_EMsgGCToClientFriendsPlayedCustomGameResponse;
    case 8024:
    case "k_EMsgGCTopCustomGamesList":
      return EDOTAGCMsg.k_EMsgGCTopCustomGamesList;
    case 8029:
    case "k_EMsgClientToGCSetPartyOpen":
      return EDOTAGCMsg.k_EMsgClientToGCSetPartyOpen;
    case 8030:
    case "k_EMsgClientToGCMergePartyInvite":
      return EDOTAGCMsg.k_EMsgClientToGCMergePartyInvite;
    case 8031:
    case "k_EMsgGCToClientMergeGroupInviteReply":
      return EDOTAGCMsg.k_EMsgGCToClientMergeGroupInviteReply;
    case 8032:
    case "k_EMsgClientToGCMergePartyResponse":
      return EDOTAGCMsg.k_EMsgClientToGCMergePartyResponse;
    case 8033:
    case "k_EMsgGCToClientMergePartyResponseReply":
      return EDOTAGCMsg.k_EMsgGCToClientMergePartyResponseReply;
    case 8034:
    case "k_EMsgClientToGCGetProfileCardStats":
      return EDOTAGCMsg.k_EMsgClientToGCGetProfileCardStats;
    case 8035:
    case "k_EMsgClientToGCGetProfileCardStatsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCGetProfileCardStatsResponse;
    case 8036:
    case "k_EMsgClientToGCTopLeagueMatchesRequest":
      return EDOTAGCMsg.k_EMsgClientToGCTopLeagueMatchesRequest;
    case 8037:
    case "k_EMsgClientToGCTopFriendMatchesRequest":
      return EDOTAGCMsg.k_EMsgClientToGCTopFriendMatchesRequest;
    case 8040:
    case "k_EMsgGCToClientProfileCardStatsUpdated":
      return EDOTAGCMsg.k_EMsgGCToClientProfileCardStatsUpdated;
    case 8041:
    case "k_EMsgServerToGCRealtimeStats":
      return EDOTAGCMsg.k_EMsgServerToGCRealtimeStats;
    case 8042:
    case "k_EMsgGCToServerRealtimeStatsStartStop":
      return EDOTAGCMsg.k_EMsgGCToServerRealtimeStatsStartStop;
    case 8045:
    case "k_EMsgGCToGCGetServersForClients":
      return EDOTAGCMsg.k_EMsgGCToGCGetServersForClients;
    case 8046:
    case "k_EMsgGCToGCGetServersForClientsResponse":
      return EDOTAGCMsg.k_EMsgGCToGCGetServersForClientsResponse;
    case 8047:
    case "k_EMsgGCPracticeLobbyKickFromTeam":
      return EDOTAGCMsg.k_EMsgGCPracticeLobbyKickFromTeam;
    case 8048:
    case "k_EMsgDOTAChatGetMemberCount":
      return EDOTAGCMsg.k_EMsgDOTAChatGetMemberCount;
    case 8049:
    case "k_EMsgDOTAChatGetMemberCountResponse":
      return EDOTAGCMsg.k_EMsgDOTAChatGetMemberCountResponse;
    case 8050:
    case "k_EMsgClientToGCSocialFeedPostMessageRequest":
      return EDOTAGCMsg.k_EMsgClientToGCSocialFeedPostMessageRequest;
    case 8051:
    case "k_EMsgGCToClientSocialFeedPostMessageResponse":
      return EDOTAGCMsg.k_EMsgGCToClientSocialFeedPostMessageResponse;
    case 8052:
    case "k_EMsgCustomGameListenServerStartedLoading":
      return EDOTAGCMsg.k_EMsgCustomGameListenServerStartedLoading;
    case 8053:
    case "k_EMsgCustomGameClientFinishedLoading":
      return EDOTAGCMsg.k_EMsgCustomGameClientFinishedLoading;
    case 8054:
    case "k_EMsgGCPracticeLobbyCloseBroadcastChannel":
      return EDOTAGCMsg.k_EMsgGCPracticeLobbyCloseBroadcastChannel;
    case 8055:
    case "k_EMsgGCStartFindingMatchResponse":
      return EDOTAGCMsg.k_EMsgGCStartFindingMatchResponse;
    case 8057:
    case "k_EMsgSQLGCToGCGrantAccountFlag":
      return EDOTAGCMsg.k_EMsgSQLGCToGCGrantAccountFlag;
    case 8061:
    case "k_EMsgGCToClientTopLeagueMatchesResponse":
      return EDOTAGCMsg.k_EMsgGCToClientTopLeagueMatchesResponse;
    case 8062:
    case "k_EMsgGCToClientTopFriendMatchesResponse":
      return EDOTAGCMsg.k_EMsgGCToClientTopFriendMatchesResponse;
    case 8063:
    case "k_EMsgClientToGCMatchesMinimalRequest":
      return EDOTAGCMsg.k_EMsgClientToGCMatchesMinimalRequest;
    case 8064:
    case "k_EMsgClientToGCMatchesMinimalResponse":
      return EDOTAGCMsg.k_EMsgClientToGCMatchesMinimalResponse;
    case 8067:
    case "k_EMsgGCToClientChatRegionsEnabled":
      return EDOTAGCMsg.k_EMsgGCToClientChatRegionsEnabled;
    case 8068:
    case "k_EMsgClientToGCPingData":
      return EDOTAGCMsg.k_EMsgClientToGCPingData;
    case 8071:
    case "k_EMsgGCToGCEnsureAccountInParty":
      return EDOTAGCMsg.k_EMsgGCToGCEnsureAccountInParty;
    case 8072:
    case "k_EMsgGCToGCEnsureAccountInPartyResponse":
      return EDOTAGCMsg.k_EMsgGCToGCEnsureAccountInPartyResponse;
    case 8073:
    case "k_EMsgClientToGCGetProfileTickets":
      return EDOTAGCMsg.k_EMsgClientToGCGetProfileTickets;
    case 8074:
    case "k_EMsgClientToGCGetProfileTicketsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCGetProfileTicketsResponse;
    case 8075:
    case "k_EMsgGCToClientMatchGroupsVersion":
      return EDOTAGCMsg.k_EMsgGCToClientMatchGroupsVersion;
    case 8076:
    case "k_EMsgClientToGCH264Unsupported":
      return EDOTAGCMsg.k_EMsgClientToGCH264Unsupported;
    case 8078:
    case "k_EMsgClientToGCGetQuestProgress":
      return EDOTAGCMsg.k_EMsgClientToGCGetQuestProgress;
    case 8079:
    case "k_EMsgClientToGCGetQuestProgressResponse":
      return EDOTAGCMsg.k_EMsgClientToGCGetQuestProgressResponse;
    case 8080:
    case "k_EMsgSignOutXPCoins":
      return EDOTAGCMsg.k_EMsgSignOutXPCoins;
    case 8081:
    case "k_EMsgGCToClientMatchSignedOut":
      return EDOTAGCMsg.k_EMsgGCToClientMatchSignedOut;
    case 8082:
    case "k_EMsgGCGetHeroStatsHistory":
      return EDOTAGCMsg.k_EMsgGCGetHeroStatsHistory;
    case 8083:
    case "k_EMsgGCGetHeroStatsHistoryResponse":
      return EDOTAGCMsg.k_EMsgGCGetHeroStatsHistoryResponse;
    case 8084:
    case "k_EMsgClientToGCPrivateChatInvite":
      return EDOTAGCMsg.k_EMsgClientToGCPrivateChatInvite;
    case 8088:
    case "k_EMsgClientToGCPrivateChatKick":
      return EDOTAGCMsg.k_EMsgClientToGCPrivateChatKick;
    case 8089:
    case "k_EMsgClientToGCPrivateChatPromote":
      return EDOTAGCMsg.k_EMsgClientToGCPrivateChatPromote;
    case 8090:
    case "k_EMsgClientToGCPrivateChatDemote":
      return EDOTAGCMsg.k_EMsgClientToGCPrivateChatDemote;
    case 8091:
    case "k_EMsgGCToClientPrivateChatResponse":
      return EDOTAGCMsg.k_EMsgGCToClientPrivateChatResponse;
    case 8095:
    case "k_EMsgClientToGCLatestConductScorecardRequest":
      return EDOTAGCMsg.k_EMsgClientToGCLatestConductScorecardRequest;
    case 8096:
    case "k_EMsgClientToGCLatestConductScorecard":
      return EDOTAGCMsg.k_EMsgClientToGCLatestConductScorecard;
    case 8099:
    case "k_EMsgClientToGCWageringRequest":
      return EDOTAGCMsg.k_EMsgClientToGCWageringRequest;
    case 8100:
    case "k_EMsgGCToClientWageringResponse":
      return EDOTAGCMsg.k_EMsgGCToClientWageringResponse;
    case 8103:
    case "k_EMsgClientToGCEventGoalsRequest":
      return EDOTAGCMsg.k_EMsgClientToGCEventGoalsRequest;
    case 8104:
    case "k_EMsgClientToGCEventGoalsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCEventGoalsResponse;
    case 8108:
    case "k_EMsgGCToGCLeaguePredictionsUpdate":
      return EDOTAGCMsg.k_EMsgGCToGCLeaguePredictionsUpdate;
    case 8110:
    case "k_EMsgGCToGCAddUserToPostGameChat":
      return EDOTAGCMsg.k_EMsgGCToGCAddUserToPostGameChat;
    case 8111:
    case "k_EMsgClientToGCHasPlayerVotedForMVP":
      return EDOTAGCMsg.k_EMsgClientToGCHasPlayerVotedForMVP;
    case 8112:
    case "k_EMsgClientToGCHasPlayerVotedForMVPResponse":
      return EDOTAGCMsg.k_EMsgClientToGCHasPlayerVotedForMVPResponse;
    case 8113:
    case "k_EMsgClientToGCVoteForMVP":
      return EDOTAGCMsg.k_EMsgClientToGCVoteForMVP;
    case 8114:
    case "k_EMsgClientToGCVoteForMVPResponse":
      return EDOTAGCMsg.k_EMsgClientToGCVoteForMVPResponse;
    case 8115:
    case "k_EMsgGCToGCGetEventOwnership":
      return EDOTAGCMsg.k_EMsgGCToGCGetEventOwnership;
    case 8116:
    case "k_EMsgGCToGCGetEventOwnershipResponse":
      return EDOTAGCMsg.k_EMsgGCToGCGetEventOwnershipResponse;
    case 8117:
    case "k_EMsgGCToClientAutomatedTournamentStateChange":
      return EDOTAGCMsg.k_EMsgGCToClientAutomatedTournamentStateChange;
    case 8118:
    case "k_EMsgClientToGCWeekendTourneyOpts":
      return EDOTAGCMsg.k_EMsgClientToGCWeekendTourneyOpts;
    case 8119:
    case "k_EMsgClientToGCWeekendTourneyOptsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCWeekendTourneyOptsResponse;
    case 8120:
    case "k_EMsgClientToGCWeekendTourneyLeave":
      return EDOTAGCMsg.k_EMsgClientToGCWeekendTourneyLeave;
    case 8121:
    case "k_EMsgClientToGCWeekendTourneyLeaveResponse":
      return EDOTAGCMsg.k_EMsgClientToGCWeekendTourneyLeaveResponse;
    case 8124:
    case "k_EMsgClientToGCTeammateStatsRequest":
      return EDOTAGCMsg.k_EMsgClientToGCTeammateStatsRequest;
    case 8125:
    case "k_EMsgClientToGCTeammateStatsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCTeammateStatsResponse;
    case 8126:
    case "k_EMsgClientToGCGetGiftPermissions":
      return EDOTAGCMsg.k_EMsgClientToGCGetGiftPermissions;
    case 8127:
    case "k_EMsgClientToGCGetGiftPermissionsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCGetGiftPermissionsResponse;
    case 8128:
    case "k_EMsgClientToGCVoteForArcana":
      return EDOTAGCMsg.k_EMsgClientToGCVoteForArcana;
    case 8129:
    case "k_EMsgClientToGCVoteForArcanaResponse":
      return EDOTAGCMsg.k_EMsgClientToGCVoteForArcanaResponse;
    case 8130:
    case "k_EMsgClientToGCRequestArcanaVotesRemaining":
      return EDOTAGCMsg.k_EMsgClientToGCRequestArcanaVotesRemaining;
    case 8131:
    case "k_EMsgClientToGCRequestArcanaVotesRemainingResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRequestArcanaVotesRemainingResponse;
    case 8132:
    case "k_EMsgGCTransferTeamAdminResponse":
      return EDOTAGCMsg.k_EMsgGCTransferTeamAdminResponse;
    case 8135:
    case "k_EMsgGCToClientTeamInfo":
      return EDOTAGCMsg.k_EMsgGCToClientTeamInfo;
    case 8136:
    case "k_EMsgGCToClientTeamsInfo":
      return EDOTAGCMsg.k_EMsgGCToClientTeamsInfo;
    case 8137:
    case "k_EMsgClientToGCMyTeamInfoRequest":
      return EDOTAGCMsg.k_EMsgClientToGCMyTeamInfoRequest;
    case 8140:
    case "k_EMsgClientToGCPublishUserStat":
      return EDOTAGCMsg.k_EMsgClientToGCPublishUserStat;
    case 8141:
    case "k_EMsgGCToGCSignoutSpendWager":
      return EDOTAGCMsg.k_EMsgGCToGCSignoutSpendWager;
    case 8144:
    case "k_EMsgGCSubmitLobbyMVPVote":
      return EDOTAGCMsg.k_EMsgGCSubmitLobbyMVPVote;
    case 8145:
    case "k_EMsgGCSubmitLobbyMVPVoteResponse":
      return EDOTAGCMsg.k_EMsgGCSubmitLobbyMVPVoteResponse;
    case 8150:
    case "k_EMsgSignOutCommunityGoalProgress":
      return EDOTAGCMsg.k_EMsgSignOutCommunityGoalProgress;
    case 8152:
    case "k_EMsgGCToClientLobbyMVPAwarded":
      return EDOTAGCMsg.k_EMsgGCToClientLobbyMVPAwarded;
    case 8153:
    case "k_EMsgGCToClientQuestProgressUpdated":
      return EDOTAGCMsg.k_EMsgGCToClientQuestProgressUpdated;
    case 8154:
    case "k_EMsgGCToClientWageringUpdate":
      return EDOTAGCMsg.k_EMsgGCToClientWageringUpdate;
    case 8155:
    case "k_EMsgGCToClientArcanaVotesUpdate":
      return EDOTAGCMsg.k_EMsgGCToClientArcanaVotesUpdate;
    case 8157:
    case "k_EMsgClientToGCSetSpectatorLobbyDetails":
      return EDOTAGCMsg.k_EMsgClientToGCSetSpectatorLobbyDetails;
    case 8158:
    case "k_EMsgClientToGCSetSpectatorLobbyDetailsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCSetSpectatorLobbyDetailsResponse;
    case 8159:
    case "k_EMsgClientToGCCreateSpectatorLobby":
      return EDOTAGCMsg.k_EMsgClientToGCCreateSpectatorLobby;
    case 8160:
    case "k_EMsgClientToGCCreateSpectatorLobbyResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCreateSpectatorLobbyResponse;
    case 8161:
    case "k_EMsgClientToGCSpectatorLobbyList":
      return EDOTAGCMsg.k_EMsgClientToGCSpectatorLobbyList;
    case 8162:
    case "k_EMsgClientToGCSpectatorLobbyListResponse":
      return EDOTAGCMsg.k_EMsgClientToGCSpectatorLobbyListResponse;
    case 8163:
    case "k_EMsgSpectatorLobbyGameDetails":
      return EDOTAGCMsg.k_EMsgSpectatorLobbyGameDetails;
    case 8166:
    case "k_EMsgServerToGCCompendiumInGamePredictionResults":
      return EDOTAGCMsg.k_EMsgServerToGCCompendiumInGamePredictionResults;
    case 8167:
    case "k_EMsgServerToGCCloseCompendiumInGamePredictionVoting":
      return EDOTAGCMsg.k_EMsgServerToGCCloseCompendiumInGamePredictionVoting;
    case 8168:
    case "k_EMsgClientToGCOpenPlayerCardPack":
      return EDOTAGCMsg.k_EMsgClientToGCOpenPlayerCardPack;
    case 8169:
    case "k_EMsgClientToGCOpenPlayerCardPackResponse":
      return EDOTAGCMsg.k_EMsgClientToGCOpenPlayerCardPackResponse;
    case 8170:
    case "k_EMsgClientToGCSelectCompendiumInGamePrediction":
      return EDOTAGCMsg.k_EMsgClientToGCSelectCompendiumInGamePrediction;
    case 8171:
    case "k_EMsgClientToGCSelectCompendiumInGamePredictionResponse":
      return EDOTAGCMsg.k_EMsgClientToGCSelectCompendiumInGamePredictionResponse;
    case 8172:
    case "k_EMsgClientToGCWeekendTourneyGetPlayerStats":
      return EDOTAGCMsg.k_EMsgClientToGCWeekendTourneyGetPlayerStats;
    case 8173:
    case "k_EMsgClientToGCWeekendTourneyGetPlayerStatsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCWeekendTourneyGetPlayerStatsResponse;
    case 8174:
    case "k_EMsgClientToGCRecyclePlayerCard":
      return EDOTAGCMsg.k_EMsgClientToGCRecyclePlayerCard;
    case 8175:
    case "k_EMsgClientToGCRecyclePlayerCardResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRecyclePlayerCardResponse;
    case 8176:
    case "k_EMsgClientToGCCreatePlayerCardPack":
      return EDOTAGCMsg.k_EMsgClientToGCCreatePlayerCardPack;
    case 8177:
    case "k_EMsgClientToGCCreatePlayerCardPackResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCreatePlayerCardPackResponse;
    case 8178:
    case "k_EMsgClientToGCGetPlayerCardRosterRequest":
      return EDOTAGCMsg.k_EMsgClientToGCGetPlayerCardRosterRequest;
    case 8179:
    case "k_EMsgClientToGCGetPlayerCardRosterResponse":
      return EDOTAGCMsg.k_EMsgClientToGCGetPlayerCardRosterResponse;
    case 8180:
    case "k_EMsgClientToGCSetPlayerCardRosterRequest":
      return EDOTAGCMsg.k_EMsgClientToGCSetPlayerCardRosterRequest;
    case 8181:
    case "k_EMsgClientToGCSetPlayerCardRosterResponse":
      return EDOTAGCMsg.k_EMsgClientToGCSetPlayerCardRosterResponse;
    case 8183:
    case "k_EMsgServerToGCCloseCompendiumInGamePredictionVotingResponse":
      return EDOTAGCMsg.k_EMsgServerToGCCloseCompendiumInGamePredictionVotingResponse;
    case 8186:
    case "k_EMsgLobbyBattleCupVictory":
      return EDOTAGCMsg.k_EMsgLobbyBattleCupVictory;
    case 8187:
    case "k_EMsgGCGetPlayerCardItemInfo":
      return EDOTAGCMsg.k_EMsgGCGetPlayerCardItemInfo;
    case 8188:
    case "k_EMsgGCGetPlayerCardItemInfoResponse":
      return EDOTAGCMsg.k_EMsgGCGetPlayerCardItemInfoResponse;
    case 8189:
    case "k_EMsgClientToGCRequestSteamDatagramTicket":
      return EDOTAGCMsg.k_EMsgClientToGCRequestSteamDatagramTicket;
    case 8190:
    case "k_EMsgClientToGCRequestSteamDatagramTicketResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRequestSteamDatagramTicketResponse;
    case 8191:
    case "k_EMsgGCToClientBattlePassRollupRequest":
      return EDOTAGCMsg.k_EMsgGCToClientBattlePassRollupRequest;
    case 8192:
    case "k_EMsgGCToClientBattlePassRollupResponse":
      return EDOTAGCMsg.k_EMsgGCToClientBattlePassRollupResponse;
    case 8193:
    case "k_EMsgClientToGCTransferSeasonalMMRRequest":
      return EDOTAGCMsg.k_EMsgClientToGCTransferSeasonalMMRRequest;
    case 8194:
    case "k_EMsgClientToGCTransferSeasonalMMRResponse":
      return EDOTAGCMsg.k_EMsgClientToGCTransferSeasonalMMRResponse;
    case 8195:
    case "k_EMsgGCToGCPublicChatCommunicationBan":
      return EDOTAGCMsg.k_EMsgGCToGCPublicChatCommunicationBan;
    case 8196:
    case "k_EMsgGCToGCUpdateAccountInfo":
      return EDOTAGCMsg.k_EMsgGCToGCUpdateAccountInfo;
    case 8197:
    case "k_EMsgGCChatReportPublicSpam":
      return EDOTAGCMsg.k_EMsgGCChatReportPublicSpam;
    case 8198:
    case "k_EMsgClientToGCSetPartyBuilderOptions":
      return EDOTAGCMsg.k_EMsgClientToGCSetPartyBuilderOptions;
    case 8199:
    case "k_EMsgClientToGCSetPartyBuilderOptionsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCSetPartyBuilderOptionsResponse;
    case 8200:
    case "k_EMsgGCToClientPlaytestStatus":
      return EDOTAGCMsg.k_EMsgGCToClientPlaytestStatus;
    case 8201:
    case "k_EMsgClientToGCJoinPlaytest":
      return EDOTAGCMsg.k_EMsgClientToGCJoinPlaytest;
    case 8202:
    case "k_EMsgClientToGCJoinPlaytestResponse":
      return EDOTAGCMsg.k_EMsgClientToGCJoinPlaytestResponse;
    case 8203:
    case "k_EMsgLobbyPlaytestDetails":
      return EDOTAGCMsg.k_EMsgLobbyPlaytestDetails;
    case 8204:
    case "k_EMsgDOTASetFavoriteTeam":
      return EDOTAGCMsg.k_EMsgDOTASetFavoriteTeam;
    case 8205:
    case "k_EMsgGCToClientBattlePassRollupListRequest":
      return EDOTAGCMsg.k_EMsgGCToClientBattlePassRollupListRequest;
    case 8206:
    case "k_EMsgGCToClientBattlePassRollupListResponse":
      return EDOTAGCMsg.k_EMsgGCToClientBattlePassRollupListResponse;
    case 8209:
    case "k_EMsgDOTAClaimEventAction":
      return EDOTAGCMsg.k_EMsgDOTAClaimEventAction;
    case 8210:
    case "k_EMsgDOTAClaimEventActionResponse":
      return EDOTAGCMsg.k_EMsgDOTAClaimEventActionResponse;
    case 8211:
    case "k_EMsgDOTAGetPeriodicResource":
      return EDOTAGCMsg.k_EMsgDOTAGetPeriodicResource;
    case 8212:
    case "k_EMsgDOTAGetPeriodicResourceResponse":
      return EDOTAGCMsg.k_EMsgDOTAGetPeriodicResourceResponse;
    case 8213:
    case "k_EMsgDOTAPeriodicResourceUpdated":
      return EDOTAGCMsg.k_EMsgDOTAPeriodicResourceUpdated;
    case 8214:
    case "k_EMsgServerToGCSpendWager":
      return EDOTAGCMsg.k_EMsgServerToGCSpendWager;
    case 8215:
    case "k_EMsgGCToGCSignoutSpendWagerToken":
      return EDOTAGCMsg.k_EMsgGCToGCSignoutSpendWagerToken;
    case 8216:
    case "k_EMsgSubmitTriviaQuestionAnswer":
      return EDOTAGCMsg.k_EMsgSubmitTriviaQuestionAnswer;
    case 8217:
    case "k_EMsgSubmitTriviaQuestionAnswerResponse":
      return EDOTAGCMsg.k_EMsgSubmitTriviaQuestionAnswerResponse;
    case 8218:
    case "k_EMsgClientToGCGiveTip":
      return EDOTAGCMsg.k_EMsgClientToGCGiveTip;
    case 8219:
    case "k_EMsgClientToGCGiveTipResponse":
      return EDOTAGCMsg.k_EMsgClientToGCGiveTipResponse;
    case 8220:
    case "k_EMsgStartTriviaSession":
      return EDOTAGCMsg.k_EMsgStartTriviaSession;
    case 8221:
    case "k_EMsgStartTriviaSessionResponse":
      return EDOTAGCMsg.k_EMsgStartTriviaSessionResponse;
    case 8222:
    case "k_EMsgAnchorPhoneNumberRequest":
      return EDOTAGCMsg.k_EMsgAnchorPhoneNumberRequest;
    case 8223:
    case "k_EMsgAnchorPhoneNumberResponse":
      return EDOTAGCMsg.k_EMsgAnchorPhoneNumberResponse;
    case 8224:
    case "k_EMsgUnanchorPhoneNumberRequest":
      return EDOTAGCMsg.k_EMsgUnanchorPhoneNumberRequest;
    case 8225:
    case "k_EMsgUnanchorPhoneNumberResponse":
      return EDOTAGCMsg.k_EMsgUnanchorPhoneNumberResponse;
    case 8229:
    case "k_EMsgGCToGCSignoutSpendRankWager":
      return EDOTAGCMsg.k_EMsgGCToGCSignoutSpendRankWager;
    case 8230:
    case "k_EMsgGCToGCGetFavoriteTeam":
      return EDOTAGCMsg.k_EMsgGCToGCGetFavoriteTeam;
    case 8231:
    case "k_EMsgGCToGCGetFavoriteTeamResponse":
      return EDOTAGCMsg.k_EMsgGCToGCGetFavoriteTeamResponse;
    case 8232:
    case "k_EMsgSignOutEventGameData":
      return EDOTAGCMsg.k_EMsgSignOutEventGameData;
    case 8238:
    case "k_EMsgClientToGCQuickStatsRequest":
      return EDOTAGCMsg.k_EMsgClientToGCQuickStatsRequest;
    case 8239:
    case "k_EMsgClientToGCQuickStatsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCQuickStatsResponse;
    case 8240:
    case "k_EMsgGCToGCSubtractEventPointsFromUser":
      return EDOTAGCMsg.k_EMsgGCToGCSubtractEventPointsFromUser;
    case 8241:
    case "k_EMsgSelectionPriorityChoiceRequest":
      return EDOTAGCMsg.k_EMsgSelectionPriorityChoiceRequest;
    case 8242:
    case "k_EMsgSelectionPriorityChoiceResponse":
      return EDOTAGCMsg.k_EMsgSelectionPriorityChoiceResponse;
    case 8243:
    case "k_EMsgGCToGCCompendiumInGamePredictionResults":
      return EDOTAGCMsg.k_EMsgGCToGCCompendiumInGamePredictionResults;
    case 8244:
    case "k_EMsgGameAutographReward":
      return EDOTAGCMsg.k_EMsgGameAutographReward;
    case 8245:
    case "k_EMsgGameAutographRewardResponse":
      return EDOTAGCMsg.k_EMsgGameAutographRewardResponse;
    case 8246:
    case "k_EMsgDestroyLobbyRequest":
      return EDOTAGCMsg.k_EMsgDestroyLobbyRequest;
    case 8247:
    case "k_EMsgDestroyLobbyResponse":
      return EDOTAGCMsg.k_EMsgDestroyLobbyResponse;
    case 8248:
    case "k_EMsgPurchaseItemWithEventPoints":
      return EDOTAGCMsg.k_EMsgPurchaseItemWithEventPoints;
    case 8249:
    case "k_EMsgPurchaseItemWithEventPointsResponse":
      return EDOTAGCMsg.k_EMsgPurchaseItemWithEventPointsResponse;
    case 8250:
    case "k_EMsgServerToGCMatchPlayerItemPurchaseHistory":
      return EDOTAGCMsg.k_EMsgServerToGCMatchPlayerItemPurchaseHistory;
    case 8251:
    case "k_EMsgGCToGCGrantPlusHeroMatchResults":
      return EDOTAGCMsg.k_EMsgGCToGCGrantPlusHeroMatchResults;
    case 8255:
    case "k_EMsgServerToGCMatchStateHistory":
      return EDOTAGCMsg.k_EMsgServerToGCMatchStateHistory;
    case 8258:
    case "k_EMsgPurchaseHeroRandomRelic":
      return EDOTAGCMsg.k_EMsgPurchaseHeroRandomRelic;
    case 8259:
    case "k_EMsgPurchaseHeroRandomRelicResponse":
      return EDOTAGCMsg.k_EMsgPurchaseHeroRandomRelicResponse;
    case 8260:
    case "k_EMsgClientToGCClaimEventActionUsingItem":
      return EDOTAGCMsg.k_EMsgClientToGCClaimEventActionUsingItem;
    case 8261:
    case "k_EMsgClientToGCClaimEventActionUsingItemResponse":
      return EDOTAGCMsg.k_EMsgClientToGCClaimEventActionUsingItemResponse;
    case 8262:
    case "k_EMsgPartyReadyCheckRequest":
      return EDOTAGCMsg.k_EMsgPartyReadyCheckRequest;
    case 8263:
    case "k_EMsgPartyReadyCheckResponse":
      return EDOTAGCMsg.k_EMsgPartyReadyCheckResponse;
    case 8264:
    case "k_EMsgPartyReadyCheckAcknowledge":
      return EDOTAGCMsg.k_EMsgPartyReadyCheckAcknowledge;
    case 8265:
    case "k_EMsgGetRecentPlayTimeFriendsRequest":
      return EDOTAGCMsg.k_EMsgGetRecentPlayTimeFriendsRequest;
    case 8266:
    case "k_EMsgGetRecentPlayTimeFriendsResponse":
      return EDOTAGCMsg.k_EMsgGetRecentPlayTimeFriendsResponse;
    case 8267:
    case "k_EMsgGCToClientCommendNotification":
      return EDOTAGCMsg.k_EMsgGCToClientCommendNotification;
    case 8268:
    case "k_EMsgProfileRequest":
      return EDOTAGCMsg.k_EMsgProfileRequest;
    case 8269:
    case "k_EMsgProfileResponse":
      return EDOTAGCMsg.k_EMsgProfileResponse;
    case 8270:
    case "k_EMsgProfileUpdate":
      return EDOTAGCMsg.k_EMsgProfileUpdate;
    case 8271:
    case "k_EMsgProfileUpdateResponse":
      return EDOTAGCMsg.k_EMsgProfileUpdateResponse;
    case 8274:
    case "k_EMsgHeroGlobalDataRequest":
      return EDOTAGCMsg.k_EMsgHeroGlobalDataRequest;
    case 8275:
    case "k_EMsgHeroGlobalDataResponse":
      return EDOTAGCMsg.k_EMsgHeroGlobalDataResponse;
    case 8276:
    case "k_EMsgClientToGCRequestPlusWeeklyChallengeResult":
      return EDOTAGCMsg.k_EMsgClientToGCRequestPlusWeeklyChallengeResult;
    case 8277:
    case "k_EMsgClientToGCRequestPlusWeeklyChallengeResultResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRequestPlusWeeklyChallengeResultResponse;
    case 8278:
    case "k_EMsgGCToGCGrantPlusPrepaidTime":
      return EDOTAGCMsg.k_EMsgGCToGCGrantPlusPrepaidTime;
    case 8279:
    case "k_EMsgPrivateMetadataKeyRequest":
      return EDOTAGCMsg.k_EMsgPrivateMetadataKeyRequest;
    case 8280:
    case "k_EMsgPrivateMetadataKeyResponse":
      return EDOTAGCMsg.k_EMsgPrivateMetadataKeyResponse;
    case 8281:
    case "k_EMsgGCToGCReconcilePlusStatus":
      return EDOTAGCMsg.k_EMsgGCToGCReconcilePlusStatus;
    case 8282:
    case "k_EMsgGCToGCCheckPlusStatus":
      return EDOTAGCMsg.k_EMsgGCToGCCheckPlusStatus;
    case 8283:
    case "k_EMsgGCToGCCheckPlusStatusResponse":
      return EDOTAGCMsg.k_EMsgGCToGCCheckPlusStatusResponse;
    case 8284:
    case "k_EMsgGCToGCReconcilePlusAutoGrantItems":
      return EDOTAGCMsg.k_EMsgGCToGCReconcilePlusAutoGrantItems;
    case 8285:
    case "k_EMsgGCToGCReconcilePlusStatusUnreliable":
      return EDOTAGCMsg.k_EMsgGCToGCReconcilePlusStatusUnreliable;
    case 8288:
    case "k_EMsgGCToClientCavernCrawlMapPathCompleted":
      return EDOTAGCMsg.k_EMsgGCToClientCavernCrawlMapPathCompleted;
    case 8289:
    case "k_EMsgClientToGCCavernCrawlClaimRoom":
      return EDOTAGCMsg.k_EMsgClientToGCCavernCrawlClaimRoom;
    case 8290:
    case "k_EMsgClientToGCCavernCrawlClaimRoomResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCavernCrawlClaimRoomResponse;
    case 8291:
    case "k_EMsgClientToGCCavernCrawlUseItemOnRoom":
      return EDOTAGCMsg.k_EMsgClientToGCCavernCrawlUseItemOnRoom;
    case 8292:
    case "k_EMsgClientToGCCavernCrawlUseItemOnRoomResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCavernCrawlUseItemOnRoomResponse;
    case 8293:
    case "k_EMsgClientToGCCavernCrawlUseItemOnPath":
      return EDOTAGCMsg.k_EMsgClientToGCCavernCrawlUseItemOnPath;
    case 8294:
    case "k_EMsgClientToGCCavernCrawlUseItemOnPathResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCavernCrawlUseItemOnPathResponse;
    case 8295:
    case "k_EMsgClientToGCCavernCrawlRequestMapState":
      return EDOTAGCMsg.k_EMsgClientToGCCavernCrawlRequestMapState;
    case 8296:
    case "k_EMsgClientToGCCavernCrawlRequestMapStateResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCavernCrawlRequestMapStateResponse;
    case 8297:
    case "k_EMsgSignOutTips":
      return EDOTAGCMsg.k_EMsgSignOutTips;
    case 8298:
    case "k_EMsgClientToGCRequestEventPointLogV2":
      return EDOTAGCMsg.k_EMsgClientToGCRequestEventPointLogV2;
    case 8299:
    case "k_EMsgClientToGCRequestEventPointLogResponseV2":
      return EDOTAGCMsg.k_EMsgClientToGCRequestEventPointLogResponseV2;
    case 8300:
    case "k_EMsgClientToGCRequestEventTipsSummary":
      return EDOTAGCMsg.k_EMsgClientToGCRequestEventTipsSummary;
    case 8301:
    case "k_EMsgClientToGCRequestEventTipsSummaryResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRequestEventTipsSummaryResponse;
    case 8303:
    case "k_EMsgClientToGCRequestSocialFeed":
      return EDOTAGCMsg.k_EMsgClientToGCRequestSocialFeed;
    case 8304:
    case "k_EMsgClientToGCRequestSocialFeedResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRequestSocialFeedResponse;
    case 8305:
    case "k_EMsgClientToGCRequestSocialFeedComments":
      return EDOTAGCMsg.k_EMsgClientToGCRequestSocialFeedComments;
    case 8306:
    case "k_EMsgClientToGCRequestSocialFeedCommentsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRequestSocialFeedCommentsResponse;
    case 8308:
    case "k_EMsgClientToGCCavernCrawlGetClaimedRoomCount":
      return EDOTAGCMsg.k_EMsgClientToGCCavernCrawlGetClaimedRoomCount;
    case 8309:
    case "k_EMsgClientToGCCavernCrawlGetClaimedRoomCountResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCavernCrawlGetClaimedRoomCountResponse;
    case 8310:
    case "k_EMsgGCToGCReconcilePlusAutoGrantItemsUnreliable":
      return EDOTAGCMsg.k_EMsgGCToGCReconcilePlusAutoGrantItemsUnreliable;
    case 8311:
    case "k_EMsgServerToGCAddBroadcastTimelineEvent":
      return EDOTAGCMsg.k_EMsgServerToGCAddBroadcastTimelineEvent;
    case 8312:
    case "k_EMsgGCToServerUpdateSteamBroadcasting":
      return EDOTAGCMsg.k_EMsgGCToServerUpdateSteamBroadcasting;
    case 8313:
    case "k_EMsgClientToGCRecordContestVote":
      return EDOTAGCMsg.k_EMsgClientToGCRecordContestVote;
    case 8314:
    case "k_EMsgGCToClientRecordContestVoteResponse":
      return EDOTAGCMsg.k_EMsgGCToClientRecordContestVoteResponse;
    case 8315:
    case "k_EMsgGCToGCGrantAutograph":
      return EDOTAGCMsg.k_EMsgGCToGCGrantAutograph;
    case 8316:
    case "k_EMsgGCToGCGrantAutographResponse":
      return EDOTAGCMsg.k_EMsgGCToGCGrantAutographResponse;
    case 8317:
    case "k_EMsgSignOutConsumableUsage":
      return EDOTAGCMsg.k_EMsgSignOutConsumableUsage;
    case 8318:
    case "k_EMsgLobbyEventGameDetails":
      return EDOTAGCMsg.k_EMsgLobbyEventGameDetails;
    case 8319:
    case "k_EMsgDevGrantEventPoints":
      return EDOTAGCMsg.k_EMsgDevGrantEventPoints;
    case 8320:
    case "k_EMsgDevGrantEventPointsResponse":
      return EDOTAGCMsg.k_EMsgDevGrantEventPointsResponse;
    case 8321:
    case "k_EMsgDevGrantEventAction":
      return EDOTAGCMsg.k_EMsgDevGrantEventAction;
    case 8322:
    case "k_EMsgDevGrantEventActionResponse":
      return EDOTAGCMsg.k_EMsgDevGrantEventActionResponse;
    case 8323:
    case "k_EMsgDevResetEventState":
      return EDOTAGCMsg.k_EMsgDevResetEventState;
    case 8324:
    case "k_EMsgDevResetEventStateResponse":
      return EDOTAGCMsg.k_EMsgDevResetEventStateResponse;
    case 8325:
    case "k_EMsgGCToGCReconcileEventOwnership":
      return EDOTAGCMsg.k_EMsgGCToGCReconcileEventOwnership;
    case 8326:
    case "k_EMsgConsumeEventSupportGrantItem":
      return EDOTAGCMsg.k_EMsgConsumeEventSupportGrantItem;
    case 8327:
    case "k_EMsgConsumeEventSupportGrantItemResponse":
      return EDOTAGCMsg.k_EMsgConsumeEventSupportGrantItemResponse;
    case 8328:
    case "k_EMsgGCToClientClaimEventActionUsingItemCompleted":
      return EDOTAGCMsg.k_EMsgGCToClientClaimEventActionUsingItemCompleted;
    case 8329:
    case "k_EMsgGCToClientCavernCrawlMapUpdated":
      return EDOTAGCMsg.k_EMsgGCToClientCavernCrawlMapUpdated;
    case 8330:
    case "k_EMsgServerToGCRequestPlayerRecentAccomplishments":
      return EDOTAGCMsg.k_EMsgServerToGCRequestPlayerRecentAccomplishments;
    case 8331:
    case "k_EMsgServerToGCRequestPlayerRecentAccomplishmentsResponse":
      return EDOTAGCMsg.k_EMsgServerToGCRequestPlayerRecentAccomplishmentsResponse;
    case 8332:
    case "k_EMsgClientToGCRequestPlayerRecentAccomplishments":
      return EDOTAGCMsg.k_EMsgClientToGCRequestPlayerRecentAccomplishments;
    case 8333:
    case "k_EMsgClientToGCRequestPlayerRecentAccomplishmentsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRequestPlayerRecentAccomplishmentsResponse;
    case 8334:
    case "k_EMsgClientToGCRequestPlayerHeroRecentAccomplishments":
      return EDOTAGCMsg.k_EMsgClientToGCRequestPlayerHeroRecentAccomplishments;
    case 8335:
    case "k_EMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse;
    case 8336:
    case "k_EMsgSignOutEventActionGrants":
      return EDOTAGCMsg.k_EMsgSignOutEventActionGrants;
    case 8337:
    case "k_EMsgClientToGCRequestPlayerCoachMatches":
      return EDOTAGCMsg.k_EMsgClientToGCRequestPlayerCoachMatches;
    case 8338:
    case "k_EMsgClientToGCRequestPlayerCoachMatchesResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRequestPlayerCoachMatchesResponse;
    case 8341:
    case "k_EMsgClientToGCSubmitCoachTeammateRating":
      return EDOTAGCMsg.k_EMsgClientToGCSubmitCoachTeammateRating;
    case 8342:
    case "k_EMsgClientToGCSubmitCoachTeammateRatingResponse":
      return EDOTAGCMsg.k_EMsgClientToGCSubmitCoachTeammateRatingResponse;
    case 8343:
    case "k_EMsgGCToClientCoachTeammateRatingsChanged":
      return EDOTAGCMsg.k_EMsgGCToClientCoachTeammateRatingsChanged;
    case 8345:
    case "k_EMsgClientToGCRequestPlayerCoachMatch":
      return EDOTAGCMsg.k_EMsgClientToGCRequestPlayerCoachMatch;
    case 8346:
    case "k_EMsgClientToGCRequestPlayerCoachMatchResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRequestPlayerCoachMatchResponse;
    case 8347:
    case "k_EMsgClientToGCRequestContestVotes":
      return EDOTAGCMsg.k_EMsgClientToGCRequestContestVotes;
    case 8348:
    case "k_EMsgClientToGCRequestContestVotesResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRequestContestVotesResponse;
    case 8349:
    case "k_EMsgClientToGCMVPVoteTimeout":
      return EDOTAGCMsg.k_EMsgClientToGCMVPVoteTimeout;
    case 8350:
    case "k_EMsgClientToGCMVPVoteTimeoutResponse":
      return EDOTAGCMsg.k_EMsgClientToGCMVPVoteTimeoutResponse;
    case 8353:
    case "k_EMsgDetailedGameStats":
      return EDOTAGCMsg.k_EMsgDetailedGameStats;
    case 8360:
    case "k_EMsgMatchMatchmakingStats":
      return EDOTAGCMsg.k_EMsgMatchMatchmakingStats;
    case 8361:
    case "k_EMsgClientToGCSubmitPlayerMatchSurvey":
      return EDOTAGCMsg.k_EMsgClientToGCSubmitPlayerMatchSurvey;
    case 8362:
    case "k_EMsgClientToGCSubmitPlayerMatchSurveyResponse":
      return EDOTAGCMsg.k_EMsgClientToGCSubmitPlayerMatchSurveyResponse;
    case 8363:
    case "k_EMsgSQLGCToGCGrantAllHeroProgressAccount":
      return EDOTAGCMsg.k_EMsgSQLGCToGCGrantAllHeroProgressAccount;
    case 8364:
    case "k_EMsgSQLGCToGCGrantAllHeroProgressVictory":
      return EDOTAGCMsg.k_EMsgSQLGCToGCGrantAllHeroProgressVictory;
    case 8365:
    case "k_EMsgDevDeleteEventActions":
      return EDOTAGCMsg.k_EMsgDevDeleteEventActions;
    case 8366:
    case "k_EMsgDevDeleteEventActionsResponse":
      return EDOTAGCMsg.k_EMsgDevDeleteEventActionsResponse;
    case 8635:
    case "k_EMsgGCToGCGetAllHeroCurrent":
      return EDOTAGCMsg.k_EMsgGCToGCGetAllHeroCurrent;
    case 8636:
    case "k_EMsgGCToGCGetAllHeroCurrentResponse":
      return EDOTAGCMsg.k_EMsgGCToGCGetAllHeroCurrentResponse;
    case 8637:
    case "k_EMsgGCSubmitPlayerAvoidRequest":
      return EDOTAGCMsg.k_EMsgGCSubmitPlayerAvoidRequest;
    case 8638:
    case "k_EMsgGCSubmitPlayerAvoidRequestResponse":
      return EDOTAGCMsg.k_EMsgGCSubmitPlayerAvoidRequestResponse;
    case 8639:
    case "k_EMsgGCToClientNotificationsUpdated":
      return EDOTAGCMsg.k_EMsgGCToClientNotificationsUpdated;
    case 8640:
    case "k_EMsgGCtoGCAssociatedExploiterAccountInfo":
      return EDOTAGCMsg.k_EMsgGCtoGCAssociatedExploiterAccountInfo;
    case 8641:
    case "k_EMsgGCtoGCAssociatedExploiterAccountInfoResponse":
      return EDOTAGCMsg.k_EMsgGCtoGCAssociatedExploiterAccountInfoResponse;
    case 8642:
    case "k_EMsgGCtoGCRequestRecalibrationCheck":
      return EDOTAGCMsg.k_EMsgGCtoGCRequestRecalibrationCheck;
    case 8643:
    case "k_EMsgGCToClientVACReminder":
      return EDOTAGCMsg.k_EMsgGCToClientVACReminder;
    case 8644:
    case "k_EMsgClientToGCUnderDraftBuy":
      return EDOTAGCMsg.k_EMsgClientToGCUnderDraftBuy;
    case 8645:
    case "k_EMsgClientToGCUnderDraftBuyResponse":
      return EDOTAGCMsg.k_EMsgClientToGCUnderDraftBuyResponse;
    case 8646:
    case "k_EMsgClientToGCUnderDraftReroll":
      return EDOTAGCMsg.k_EMsgClientToGCUnderDraftReroll;
    case 8647:
    case "k_EMsgClientToGCUnderDraftRerollResponse":
      return EDOTAGCMsg.k_EMsgClientToGCUnderDraftRerollResponse;
    case 8648:
    case "k_EMsgNeutralItemStats":
      return EDOTAGCMsg.k_EMsgNeutralItemStats;
    case 8649:
    case "k_EMsgClientToGCCreateGuild":
      return EDOTAGCMsg.k_EMsgClientToGCCreateGuild;
    case 8650:
    case "k_EMsgClientToGCCreateGuildResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCreateGuildResponse;
    case 8651:
    case "k_EMsgClientToGCSetGuildInfo":
      return EDOTAGCMsg.k_EMsgClientToGCSetGuildInfo;
    case 8652:
    case "k_EMsgClientToGCSetGuildInfoResponse":
      return EDOTAGCMsg.k_EMsgClientToGCSetGuildInfoResponse;
    case 8653:
    case "k_EMsgClientToGCAddGuildRole":
      return EDOTAGCMsg.k_EMsgClientToGCAddGuildRole;
    case 8654:
    case "k_EMsgClientToGCAddGuildRoleResponse":
      return EDOTAGCMsg.k_EMsgClientToGCAddGuildRoleResponse;
    case 8655:
    case "k_EMsgClientToGCModifyGuildRole":
      return EDOTAGCMsg.k_EMsgClientToGCModifyGuildRole;
    case 8656:
    case "k_EMsgClientToGCModifyGuildRoleResponse":
      return EDOTAGCMsg.k_EMsgClientToGCModifyGuildRoleResponse;
    case 8657:
    case "k_EMsgClientToGCRemoveGuildRole":
      return EDOTAGCMsg.k_EMsgClientToGCRemoveGuildRole;
    case 8658:
    case "k_EMsgClientToGCRemoveGuildRoleResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRemoveGuildRoleResponse;
    case 8659:
    case "k_EMsgClientToGCJoinGuild":
      return EDOTAGCMsg.k_EMsgClientToGCJoinGuild;
    case 8660:
    case "k_EMsgClientToGCJoinGuildResponse":
      return EDOTAGCMsg.k_EMsgClientToGCJoinGuildResponse;
    case 8661:
    case "k_EMsgClientToGCLeaveGuild":
      return EDOTAGCMsg.k_EMsgClientToGCLeaveGuild;
    case 8662:
    case "k_EMsgClientToGCLeaveGuildResponse":
      return EDOTAGCMsg.k_EMsgClientToGCLeaveGuildResponse;
    case 8663:
    case "k_EMsgClientToGCInviteToGuild":
      return EDOTAGCMsg.k_EMsgClientToGCInviteToGuild;
    case 8664:
    case "k_EMsgClientToGCInviteToGuildResponse":
      return EDOTAGCMsg.k_EMsgClientToGCInviteToGuildResponse;
    case 8665:
    case "k_EMsgClientToGCDeclineInviteToGuild":
      return EDOTAGCMsg.k_EMsgClientToGCDeclineInviteToGuild;
    case 8666:
    case "k_EMsgClientToGCDeclineInviteToGuildResponse":
      return EDOTAGCMsg.k_EMsgClientToGCDeclineInviteToGuildResponse;
    case 8667:
    case "k_EMsgClientToGCCancelInviteToGuild":
      return EDOTAGCMsg.k_EMsgClientToGCCancelInviteToGuild;
    case 8668:
    case "k_EMsgClientToGCCancelInviteToGuildResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCancelInviteToGuildResponse;
    case 8669:
    case "k_EMsgClientToGCKickGuildMember":
      return EDOTAGCMsg.k_EMsgClientToGCKickGuildMember;
    case 8670:
    case "k_EMsgClientToGCKickGuildMemberResponse":
      return EDOTAGCMsg.k_EMsgClientToGCKickGuildMemberResponse;
    case 8671:
    case "k_EMsgClientToGCSetGuildMemberRole":
      return EDOTAGCMsg.k_EMsgClientToGCSetGuildMemberRole;
    case 8672:
    case "k_EMsgClientToGCSetGuildMemberRoleResponse":
      return EDOTAGCMsg.k_EMsgClientToGCSetGuildMemberRoleResponse;
    case 8673:
    case "k_EMsgClientToGCRequestGuildData":
      return EDOTAGCMsg.k_EMsgClientToGCRequestGuildData;
    case 8674:
    case "k_EMsgClientToGCRequestGuildDataResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse;
    case 8675:
    case "k_EMsgGCToClientGuildDataUpdated":
      return EDOTAGCMsg.k_EMsgGCToClientGuildDataUpdated;
    case 8676:
    case "k_EMsgClientToGCRequestGuildMembership":
      return EDOTAGCMsg.k_EMsgClientToGCRequestGuildMembership;
    case 8677:
    case "k_EMsgClientToGCRequestGuildMembershipResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRequestGuildMembershipResponse;
    case 8678:
    case "k_EMsgGCToClientGuildMembershipUpdated":
      return EDOTAGCMsg.k_EMsgGCToClientGuildMembershipUpdated;
    case 8681:
    case "k_EMsgClientToGCAcceptInviteToGuild":
      return EDOTAGCMsg.k_EMsgClientToGCAcceptInviteToGuild;
    case 8682:
    case "k_EMsgClientToGCAcceptInviteToGuildResponse":
      return EDOTAGCMsg.k_EMsgClientToGCAcceptInviteToGuildResponse;
    case 8683:
    case "k_EMsgClientToGCSetGuildRoleOrder":
      return EDOTAGCMsg.k_EMsgClientToGCSetGuildRoleOrder;
    case 8684:
    case "k_EMsgClientToGCSetGuildRoleOrderResponse":
      return EDOTAGCMsg.k_EMsgClientToGCSetGuildRoleOrderResponse;
    case 8685:
    case "k_EMsgClientToGCRequestGuildFeed":
      return EDOTAGCMsg.k_EMsgClientToGCRequestGuildFeed;
    case 8686:
    case "k_EMsgClientToGCRequestGuildFeedResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRequestGuildFeedResponse;
    case 8687:
    case "k_EMsgClientToGCRequestAccountGuildEventData":
      return EDOTAGCMsg.k_EMsgClientToGCRequestAccountGuildEventData;
    case 8688:
    case "k_EMsgClientToGCRequestAccountGuildEventDataResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRequestAccountGuildEventDataResponse;
    case 8689:
    case "k_EMsgGCToClientAccountGuildEventDataUpdated":
      return EDOTAGCMsg.k_EMsgGCToClientAccountGuildEventDataUpdated;
    case 8690:
    case "k_EMsgClientToGCRequestActiveGuildContracts":
      return EDOTAGCMsg.k_EMsgClientToGCRequestActiveGuildContracts;
    case 8691:
    case "k_EMsgClientToGCRequestActiveGuildContractsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRequestActiveGuildContractsResponse;
    case 8692:
    case "k_EMsgGCToClientActiveGuildContractsUpdated":
      return EDOTAGCMsg.k_EMsgGCToClientActiveGuildContractsUpdated;
    case 8693:
    case "k_EMsgGCToClientGuildFeedUpdated":
      return EDOTAGCMsg.k_EMsgGCToClientGuildFeedUpdated;
    case 8694:
    case "k_EMsgClientToGCSelectGuildContract":
      return EDOTAGCMsg.k_EMsgClientToGCSelectGuildContract;
    case 8695:
    case "k_EMsgClientToGCSelectGuildContractResponse":
      return EDOTAGCMsg.k_EMsgClientToGCSelectGuildContractResponse;
    case 8696:
    case "k_EMsgGCToGCCompleteGuildContracts":
      return EDOTAGCMsg.k_EMsgGCToGCCompleteGuildContracts;
    case 8698:
    case "k_EMsgClientToGCAddPlayerToGuildChat":
      return EDOTAGCMsg.k_EMsgClientToGCAddPlayerToGuildChat;
    case 8699:
    case "k_EMsgClientToGCAddPlayerToGuildChatResponse":
      return EDOTAGCMsg.k_EMsgClientToGCAddPlayerToGuildChatResponse;
    case 8700:
    case "k_EMsgClientToGCUnderDraftSell":
      return EDOTAGCMsg.k_EMsgClientToGCUnderDraftSell;
    case 8701:
    case "k_EMsgClientToGCUnderDraftSellResponse":
      return EDOTAGCMsg.k_EMsgClientToGCUnderDraftSellResponse;
    case 8702:
    case "k_EMsgClientToGCUnderDraftRequest":
      return EDOTAGCMsg.k_EMsgClientToGCUnderDraftRequest;
    case 8703:
    case "k_EMsgClientToGCUnderDraftResponse":
      return EDOTAGCMsg.k_EMsgClientToGCUnderDraftResponse;
    case 8704:
    case "k_EMsgClientToGCUnderDraftRedeemReward":
      return EDOTAGCMsg.k_EMsgClientToGCUnderDraftRedeemReward;
    case 8705:
    case "k_EMsgClientToGCUnderDraftRedeemRewardResponse":
      return EDOTAGCMsg.k_EMsgClientToGCUnderDraftRedeemRewardResponse;
    case 8708:
    case "k_EMsgGCToServerLobbyHeroBanRates":
      return EDOTAGCMsg.k_EMsgGCToServerLobbyHeroBanRates;
    case 8711:
    case "k_EMsgSignOutGuildContractProgress":
      return EDOTAGCMsg.k_EMsgSignOutGuildContractProgress;
    case 8712:
    case "k_EMsgSignOutMVPStats":
      return EDOTAGCMsg.k_EMsgSignOutMVPStats;
    case 8713:
    case "k_EMsgClientToGCRequestActiveGuildChallenge":
      return EDOTAGCMsg.k_EMsgClientToGCRequestActiveGuildChallenge;
    case 8714:
    case "k_EMsgClientToGCRequestActiveGuildChallengeResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRequestActiveGuildChallengeResponse;
    case 8715:
    case "k_EMsgGCToClientActiveGuildChallengeUpdated":
      return EDOTAGCMsg.k_EMsgGCToClientActiveGuildChallengeUpdated;
    case 8720:
    case "k_EMsgSignOutGuildChallengeProgress":
      return EDOTAGCMsg.k_EMsgSignOutGuildChallengeProgress;
    case 8721:
    case "k_EMsgClientToGCRequestGuildEventMembers":
      return EDOTAGCMsg.k_EMsgClientToGCRequestGuildEventMembers;
    case 8722:
    case "k_EMsgClientToGCRequestGuildEventMembersResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRequestGuildEventMembersResponse;
    case 8725:
    case "k_EMsgClientToGCReportGuildContent":
      return EDOTAGCMsg.k_EMsgClientToGCReportGuildContent;
    case 8726:
    case "k_EMsgClientToGCReportGuildContentResponse":
      return EDOTAGCMsg.k_EMsgClientToGCReportGuildContentResponse;
    case 8727:
    case "k_EMsgClientToGCRequestAccountGuildPersonaInfo":
      return EDOTAGCMsg.k_EMsgClientToGCRequestAccountGuildPersonaInfo;
    case 8728:
    case "k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse;
    case 8729:
    case "k_EMsgClientToGCRequestAccountGuildPersonaInfoBatch":
      return EDOTAGCMsg.k_EMsgClientToGCRequestAccountGuildPersonaInfoBatch;
    case 8730:
    case "k_EMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse;
    case 8731:
    case "k_EMsgGCToClientUnderDraftGoldUpdated":
      return EDOTAGCMsg.k_EMsgGCToClientUnderDraftGoldUpdated;
    case 8732:
    case "k_EMsgGCToServerRecordTrainingData":
      return EDOTAGCMsg.k_EMsgGCToServerRecordTrainingData;
    case 8733:
    case "k_EMsgSignOutBounties":
      return EDOTAGCMsg.k_EMsgSignOutBounties;
    case 8734:
    case "k_EMsgLobbyFeaturedGamemodeProgress":
      return EDOTAGCMsg.k_EMsgLobbyFeaturedGamemodeProgress;
    case 8735:
    case "k_EMsgLobbyGauntletProgress":
      return EDOTAGCMsg.k_EMsgLobbyGauntletProgress;
    case 8736:
    case "k_EMsgClientToGCSubmitDraftTriviaMatchAnswer":
      return EDOTAGCMsg.k_EMsgClientToGCSubmitDraftTriviaMatchAnswer;
    case 8737:
    case "k_EMsgClientToGCSubmitDraftTriviaMatchAnswerResponse":
      return EDOTAGCMsg.k_EMsgClientToGCSubmitDraftTriviaMatchAnswerResponse;
    case 8738:
    case "k_EMsgGCToGCSignoutSpendBounty":
      return EDOTAGCMsg.k_EMsgGCToGCSignoutSpendBounty;
    case 8739:
    case "k_EMsgClientToGCApplyGauntletTicket":
      return EDOTAGCMsg.k_EMsgClientToGCApplyGauntletTicket;
    case 8740:
    case "k_EMsgClientToGCUnderDraftRollBackBench":
      return EDOTAGCMsg.k_EMsgClientToGCUnderDraftRollBackBench;
    case 8741:
    case "k_EMsgClientToGCUnderDraftRollBackBenchResponse":
      return EDOTAGCMsg.k_EMsgClientToGCUnderDraftRollBackBenchResponse;
    case 8742:
    case "k_EMsgGCToGCGetEventActionScore":
      return EDOTAGCMsg.k_EMsgGCToGCGetEventActionScore;
    case 8743:
    case "k_EMsgGCToGCGetEventActionScoreResponse":
      return EDOTAGCMsg.k_EMsgGCToGCGetEventActionScoreResponse;
    case 8744:
    case "k_EMsgServerToGCGetGuildContracts":
      return EDOTAGCMsg.k_EMsgServerToGCGetGuildContracts;
    case 8745:
    case "k_EMsgServerToGCGetGuildContractsResponse":
      return EDOTAGCMsg.k_EMsgServerToGCGetGuildContractsResponse;
    case 8746:
    case "k_EMsgLobbyEventGameData":
      return EDOTAGCMsg.k_EMsgLobbyEventGameData;
    case 8747:
    case "k_EMsgGCToClientGuildMembersDataUpdated":
      return EDOTAGCMsg.k_EMsgGCToClientGuildMembersDataUpdated;
    case 8748:
    case "k_EMsgSignOutReportActivityMarkers":
      return EDOTAGCMsg.k_EMsgSignOutReportActivityMarkers;
    case 8749:
    case "k_EMsgSignOutDiretideCandy":
      return EDOTAGCMsg.k_EMsgSignOutDiretideCandy;
    case 8750:
    case "k_EMsgGCToClientPostGameItemAwardNotification":
      return EDOTAGCMsg.k_EMsgGCToClientPostGameItemAwardNotification;
    case 8751:
    case "k_EMsgClientToGCGetOWMatchDetails":
      return EDOTAGCMsg.k_EMsgClientToGCGetOWMatchDetails;
    case 8752:
    case "k_EMsgClientToGCGetOWMatchDetailsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCGetOWMatchDetailsResponse;
    case 8753:
    case "k_EMsgClientToGCSubmitOWConviction":
      return EDOTAGCMsg.k_EMsgClientToGCSubmitOWConviction;
    case 8754:
    case "k_EMsgClientToGCSubmitOWConvictionResponse":
      return EDOTAGCMsg.k_EMsgClientToGCSubmitOWConvictionResponse;
    case 8755:
    case "k_EMsgGCToGCGetAccountSteamChina":
      return EDOTAGCMsg.k_EMsgGCToGCGetAccountSteamChina;
    case 8756:
    case "k_EMsgGCToGCGetAccountSteamChinaResponse":
      return EDOTAGCMsg.k_EMsgGCToGCGetAccountSteamChinaResponse;
    case 8757:
    case "k_EMsgClientToGCClaimLeaderboardRewards":
      return EDOTAGCMsg.k_EMsgClientToGCClaimLeaderboardRewards;
    case 8758:
    case "k_EMsgClientToGCClaimLeaderboardRewardsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCClaimLeaderboardRewardsResponse;
    case 8759:
    case "k_EMsgClientToGCRecalibrateMMR":
      return EDOTAGCMsg.k_EMsgClientToGCRecalibrateMMR;
    case 8760:
    case "k_EMsgClientToGCRecalibrateMMRResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRecalibrateMMRResponse;
    case 8761:
    case "k_EMsgGCToGCGrantEventPointActionList":
      return EDOTAGCMsg.k_EMsgGCToGCGrantEventPointActionList;
    case 8764:
    case "k_EMsgClientToGCChinaSSAURLRequest":
      return EDOTAGCMsg.k_EMsgClientToGCChinaSSAURLRequest;
    case 8765:
    case "k_EMsgClientToGCChinaSSAURLResponse":
      return EDOTAGCMsg.k_EMsgClientToGCChinaSSAURLResponse;
    case 8766:
    case "k_EMsgClientToGCChinaSSAAcceptedRequest":
      return EDOTAGCMsg.k_EMsgClientToGCChinaSSAAcceptedRequest;
    case 8767:
    case "k_EMsgClientToGCChinaSSAAcceptedResponse":
      return EDOTAGCMsg.k_EMsgClientToGCChinaSSAAcceptedResponse;
    case 8768:
    case "k_EMsgSignOutOverwatchSuspicion":
      return EDOTAGCMsg.k_EMsgSignOutOverwatchSuspicion;
    case 8769:
    case "k_EMsgServerToGCGetSuspicionConfig":
      return EDOTAGCMsg.k_EMsgServerToGCGetSuspicionConfig;
    case 8770:
    case "k_EMsgServerToGCGetSuspicionConfigResponse":
      return EDOTAGCMsg.k_EMsgServerToGCGetSuspicionConfigResponse;
    case 8771:
    case "k_EMsgGCToGCGrantPlusHeroChallengeMatchResults":
      return EDOTAGCMsg.k_EMsgGCToGCGrantPlusHeroChallengeMatchResults;
    case 8772:
    case "k_EMsgGCToClientOverwatchCasesAvailable":
      return EDOTAGCMsg.k_EMsgGCToClientOverwatchCasesAvailable;
    case 8773:
    case "k_EMsgServerToGCAccountCheck":
      return EDOTAGCMsg.k_EMsgServerToGCAccountCheck;
    case 8774:
    case "k_EMsgClientToGCStartWatchingOverwatch":
      return EDOTAGCMsg.k_EMsgClientToGCStartWatchingOverwatch;
    case 8775:
    case "k_EMsgClientToGCStopWatchingOverwatch":
      return EDOTAGCMsg.k_EMsgClientToGCStopWatchingOverwatch;
    case 8776:
    case "k_EMsgSignOutPerfData":
      return EDOTAGCMsg.k_EMsgSignOutPerfData;
    case 8777:
    case "k_EMsgClientToGCGetDPCFavorites":
      return EDOTAGCMsg.k_EMsgClientToGCGetDPCFavorites;
    case 8778:
    case "k_EMsgClientToGCGetDPCFavoritesResponse":
      return EDOTAGCMsg.k_EMsgClientToGCGetDPCFavoritesResponse;
    case 8779:
    case "k_EMsgClientToGCSetDPCFavoriteState":
      return EDOTAGCMsg.k_EMsgClientToGCSetDPCFavoriteState;
    case 8780:
    case "k_EMsgClientToGCSetDPCFavoriteStateResponse":
      return EDOTAGCMsg.k_EMsgClientToGCSetDPCFavoriteStateResponse;
    case 8781:
    case "k_EMsgClientToGCOverwatchReplayError":
      return EDOTAGCMsg.k_EMsgClientToGCOverwatchReplayError;
    case 8782:
    case "k_EMsgServerToGCPlayerChallengeHistory":
      return EDOTAGCMsg.k_EMsgServerToGCPlayerChallengeHistory;
    case 8783:
    case "k_EMsgSignOutBanData":
      return EDOTAGCMsg.k_EMsgSignOutBanData;
    case 8784:
    case "k_EMsgWebapiDPCSeasonResults":
      return EDOTAGCMsg.k_EMsgWebapiDPCSeasonResults;
    case 8785:
    case "k_EMsgClientToGCCoachFriend":
      return EDOTAGCMsg.k_EMsgClientToGCCoachFriend;
    case 8786:
    case "k_EMsgClientToGCCoachFriendResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCoachFriendResponse;
    case 8787:
    case "k_EMsgClientToGCRequestPrivateCoachingSession":
      return EDOTAGCMsg.k_EMsgClientToGCRequestPrivateCoachingSession;
    case 8788:
    case "k_EMsgClientToGCRequestPrivateCoachingSessionResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRequestPrivateCoachingSessionResponse;
    case 8789:
    case "k_EMsgClientToGCAcceptPrivateCoachingSession":
      return EDOTAGCMsg.k_EMsgClientToGCAcceptPrivateCoachingSession;
    case 8790:
    case "k_EMsgClientToGCAcceptPrivateCoachingSessionResponse":
      return EDOTAGCMsg.k_EMsgClientToGCAcceptPrivateCoachingSessionResponse;
    case 8791:
    case "k_EMsgClientToGCLeavePrivateCoachingSession":
      return EDOTAGCMsg.k_EMsgClientToGCLeavePrivateCoachingSession;
    case 8792:
    case "k_EMsgClientToGCLeavePrivateCoachingSessionResponse":
      return EDOTAGCMsg.k_EMsgClientToGCLeavePrivateCoachingSessionResponse;
    case 8793:
    case "k_EMsgClientToGCGetCurrentPrivateCoachingSession":
      return EDOTAGCMsg.k_EMsgClientToGCGetCurrentPrivateCoachingSession;
    case 8794:
    case "k_EMsgClientToGCGetCurrentPrivateCoachingSessionResponse":
      return EDOTAGCMsg.k_EMsgClientToGCGetCurrentPrivateCoachingSessionResponse;
    case 8795:
    case "k_EMsgGCToClientPrivateCoachingSessionUpdated":
      return EDOTAGCMsg.k_EMsgGCToClientPrivateCoachingSessionUpdated;
    case 8796:
    case "k_EMsgClientToGCSubmitPrivateCoachingSessionRating":
      return EDOTAGCMsg.k_EMsgClientToGCSubmitPrivateCoachingSessionRating;
    case 8797:
    case "k_EMsgClientToGCSubmitPrivateCoachingSessionRatingResponse":
      return EDOTAGCMsg.k_EMsgClientToGCSubmitPrivateCoachingSessionRatingResponse;
    case 8798:
    case "k_EMsgClientToGCGetAvailablePrivateCoachingSessions":
      return EDOTAGCMsg.k_EMsgClientToGCGetAvailablePrivateCoachingSessions;
    case 8799:
    case "k_EMsgClientToGCGetAvailablePrivateCoachingSessionsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCGetAvailablePrivateCoachingSessionsResponse;
    case 8800:
    case "k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummary":
      return EDOTAGCMsg.k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummary;
    case 8801:
    case "k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse":
      return EDOTAGCMsg.k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse;
    case 8802:
    case "k_EMsgClientToGCJoinPrivateCoachingSessionLobby":
      return EDOTAGCMsg.k_EMsgClientToGCJoinPrivateCoachingSessionLobby;
    case 8803:
    case "k_EMsgClientToGCJoinPrivateCoachingSessionLobbyResponse":
      return EDOTAGCMsg.k_EMsgClientToGCJoinPrivateCoachingSessionLobbyResponse;
    case 8804:
    case "k_EMsgClientToGCRespondToCoachFriendRequest":
      return EDOTAGCMsg.k_EMsgClientToGCRespondToCoachFriendRequest;
    case 8805:
    case "k_EMsgClientToGCRespondToCoachFriendRequestResponse":
      return EDOTAGCMsg.k_EMsgClientToGCRespondToCoachFriendRequestResponse;
    case 8806:
    case "k_EMsgClientToGCSetEventActiveSeasonID":
      return EDOTAGCMsg.k_EMsgClientToGCSetEventActiveSeasonID;
    case 8807:
    case "k_EMsgClientToGCSetEventActiveSeasonIDResponse":
      return EDOTAGCMsg.k_EMsgClientToGCSetEventActiveSeasonIDResponse;
    case 8808:
    case "k_EMsgServerToGCMatchPlayerNeutralItemEquipHistory":
      return EDOTAGCMsg.k_EMsgServerToGCMatchPlayerNeutralItemEquipHistory;
    case 8809:
    case "k_EMsgServerToGCCompendiumChosenInGamePredictions":
      return EDOTAGCMsg.k_EMsgServerToGCCompendiumChosenInGamePredictions;
    case 8810:
    case "k_EMsgClientToGCCreateTeamPlayerCardPack":
      return EDOTAGCMsg.k_EMsgClientToGCCreateTeamPlayerCardPack;
    case 8811:
    case "k_EMsgClientToGCCreateTeamPlayerCardPackResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCreateTeamPlayerCardPackResponse;
    case 8812:
    case "k_EMsgGCToServerSubmitCheerData":
      return EDOTAGCMsg.k_EMsgGCToServerSubmitCheerData;
    case 8813:
    case "k_EMsgGCToServerCheerConfig":
      return EDOTAGCMsg.k_EMsgGCToServerCheerConfig;
    case 8814:
    case "k_EMsgServerToGCGetCheerConfig":
      return EDOTAGCMsg.k_EMsgServerToGCGetCheerConfig;
    case 8815:
    case "k_EMsgServerToGCGetCheerConfigResponse":
      return EDOTAGCMsg.k_EMsgServerToGCGetCheerConfigResponse;
    case 8816:
    case "k_EMsgGCToGCGrantAutographByID":
      return EDOTAGCMsg.k_EMsgGCToGCGrantAutographByID;
    case 8817:
    case "k_EMsgGCToServerCheerScalesOverride":
      return EDOTAGCMsg.k_EMsgGCToServerCheerScalesOverride;
    case 8818:
    case "k_EMsgGCToServerGetCheerState":
      return EDOTAGCMsg.k_EMsgGCToServerGetCheerState;
    case 8819:
    case "k_EMsgServerToGCReportCheerState":
      return EDOTAGCMsg.k_EMsgServerToGCReportCheerState;
    case 8820:
    case "k_EMsgGCToServerScenarioSave":
      return EDOTAGCMsg.k_EMsgGCToServerScenarioSave;
    case 8821:
    case "k_EMsgGCToServerAbilityDraftLobbyData":
      return EDOTAGCMsg.k_EMsgGCToServerAbilityDraftLobbyData;
    case 8822:
    case "k_EMsgSignOutReportCommunications":
      return EDOTAGCMsg.k_EMsgSignOutReportCommunications;
    case 8823:
    case "k_EMsgClientToGCBatchGetPlayerCardRosterRequest":
      return EDOTAGCMsg.k_EMsgClientToGCBatchGetPlayerCardRosterRequest;
    case 8824:
    case "k_EMsgClientToGCBatchGetPlayerCardRosterResponse":
      return EDOTAGCMsg.k_EMsgClientToGCBatchGetPlayerCardRosterResponse;
    case 8825:
    case "k_EMsgClientToGCGetStickerbookRequest":
      return EDOTAGCMsg.k_EMsgClientToGCGetStickerbookRequest;
    case 8826:
    case "k_EMsgClientToGCGetStickerbookResponse":
      return EDOTAGCMsg.k_EMsgClientToGCGetStickerbookResponse;
    case 8827:
    case "k_EMsgClientToGCCreateStickerbookPageRequest":
      return EDOTAGCMsg.k_EMsgClientToGCCreateStickerbookPageRequest;
    case 8828:
    case "k_EMsgClientToGCCreateStickerbookPageResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCreateStickerbookPageResponse;
    case 8829:
    case "k_EMsgClientToGCDeleteStickerbookPageRequest":
      return EDOTAGCMsg.k_EMsgClientToGCDeleteStickerbookPageRequest;
    case 8830:
    case "k_EMsgClientToGCDeleteStickerbookPageResponse":
      return EDOTAGCMsg.k_EMsgClientToGCDeleteStickerbookPageResponse;
    case 8831:
    case "k_EMsgClientToGCPlaceStickersRequest":
      return EDOTAGCMsg.k_EMsgClientToGCPlaceStickersRequest;
    case 8832:
    case "k_EMsgClientToGCPlaceStickersResponse":
      return EDOTAGCMsg.k_EMsgClientToGCPlaceStickersResponse;
    case 8833:
    case "k_EMsgClientToGCPlaceCollectionStickersRequest":
      return EDOTAGCMsg.k_EMsgClientToGCPlaceCollectionStickersRequest;
    case 8834:
    case "k_EMsgClientToGCPlaceCollectionStickersResponse":
      return EDOTAGCMsg.k_EMsgClientToGCPlaceCollectionStickersResponse;
    case 8835:
    case "k_EMsgClientToGCOrderStickerbookTeamPageRequest":
      return EDOTAGCMsg.k_EMsgClientToGCOrderStickerbookTeamPageRequest;
    case 8836:
    case "k_EMsgClientToGCOrderStickerbookTeamPageResponse":
      return EDOTAGCMsg.k_EMsgClientToGCOrderStickerbookTeamPageResponse;
    case 8837:
    case "k_EMsgServerToGCGetStickerHeroes":
      return EDOTAGCMsg.k_EMsgServerToGCGetStickerHeroes;
    case 8838:
    case "k_EMsgServerToGCGetStickerHeroesResponse":
      return EDOTAGCMsg.k_EMsgServerToGCGetStickerHeroesResponse;
    case 8840:
    case "k_EMsgClientToGCCandyShopGetUserData":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopGetUserData;
    case 8841:
    case "k_EMsgClientToGCCandyShopGetUserDataResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopGetUserDataResponse;
    case 8842:
    case "k_EMsgGCToClientCandyShopUserDataUpdated":
      return EDOTAGCMsg.k_EMsgGCToClientCandyShopUserDataUpdated;
    case 8843:
    case "k_EMsgClientToGCCandyShopPurchaseReward":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopPurchaseReward;
    case 8844:
    case "k_EMsgClientToGCCandyShopPurchaseRewardResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopPurchaseRewardResponse;
    case 8845:
    case "k_EMsgClientToGCCandyShopDoExchange":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopDoExchange;
    case 8846:
    case "k_EMsgClientToGCCandyShopDoExchangeResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopDoExchangeResponse;
    case 8847:
    case "k_EMsgClientToGCCandyShopDoVariableExchange":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopDoVariableExchange;
    case 8848:
    case "k_EMsgClientToGCCandyShopDoVariableExchangeResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopDoVariableExchangeResponse;
    case 8849:
    case "k_EMsgClientToGCCandyShopRerollRewards":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopRerollRewards;
    case 8850:
    case "k_EMsgClientToGCCandyShopRerollRewardsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopRerollRewardsResponse;
    case 8851:
    case "k_EMsgClientToGCSetHeroSticker":
      return EDOTAGCMsg.k_EMsgClientToGCSetHeroSticker;
    case 8852:
    case "k_EMsgClientToGCSetHeroStickerResponse":
      return EDOTAGCMsg.k_EMsgClientToGCSetHeroStickerResponse;
    case 8853:
    case "k_EMsgClientToGCGetHeroStickers":
      return EDOTAGCMsg.k_EMsgClientToGCGetHeroStickers;
    case 8854:
    case "k_EMsgClientToGCGetHeroStickersResponse":
      return EDOTAGCMsg.k_EMsgClientToGCGetHeroStickersResponse;
    case 8855:
    case "k_EMsgClientToGCSetFavoritePage":
      return EDOTAGCMsg.k_EMsgClientToGCSetFavoritePage;
    case 8856:
    case "k_EMsgClientToGCSetFavoritePageResponse":
      return EDOTAGCMsg.k_EMsgClientToGCSetFavoritePageResponse;
    case 8857:
    case "k_EMsgClientToGCCandyShopDevGrantCandy":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopDevGrantCandy;
    case 8858:
    case "k_EMsgClientToGCCandyShopDevGrantCandyResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopDevGrantCandyResponse;
    case 8859:
    case "k_EMsgClientToGCCandyShopDevClearInventory":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopDevClearInventory;
    case 8860:
    case "k_EMsgClientToGCCandyShopDevClearInventoryResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopDevClearInventoryResponse;
    case 8861:
    case "k_EMsgClientToGCCandyShopOpenBags":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopOpenBags;
    case 8862:
    case "k_EMsgClientToGCCandyShopOpenBagsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopOpenBagsResponse;
    case 8863:
    case "k_EMsgClientToGCCandyShopDevGrantCandyBags":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopDevGrantCandyBags;
    case 8864:
    case "k_EMsgClientToGCCandyShopDevGrantCandyBagsResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopDevGrantCandyBagsResponse;
    case 8865:
    case "k_EMsgClientToGCCandyShopDevShuffleExchange":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopDevShuffleExchange;
    case 8866:
    case "k_EMsgClientToGCCandyShopDevShuffleExchangeResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopDevShuffleExchangeResponse;
    case 8867:
    case "k_EMsgClientToGCCandyShopDevGrantRerollCharges":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopDevGrantRerollCharges;
    case 8868:
    case "k_EMsgClientToGCCandyShopDevGrantRerollChargesResponse":
      return EDOTAGCMsg.k_EMsgClientToGCCandyShopDevGrantRerollChargesResponse;
    case 8869:
    case "k_EMsgLobbyAdditionalAccountData":
      return EDOTAGCMsg.k_EMsgLobbyAdditionalAccountData;
    case 8870:
    case "k_EMsgServerToGCLobbyInitialized":
      return EDOTAGCMsg.k_EMsgServerToGCLobbyInitialized;
    case 8871:
    case "k_EMsgClientToGCCollectorsCacheAvailableDataRequest":
      return EDOTAGCMsg.k_EMsgClientToGCCollectorsCacheAvailableDataRequest;
    case 8872:
    case "k_EMsgGCToClientCollectorsCacheAvailableDataResponse":
      return EDOTAGCMsg.k_EMsgGCToClientCollectorsCacheAvailableDataResponse;
    case 8873:
    case "k_EMsgClientToGCUploadMatchClip":
      return EDOTAGCMsg.k_EMsgClientToGCUploadMatchClip;
    case 8874:
    case "k_EMsgGCToClientUploadMatchClipResponse":
      return EDOTAGCMsg.k_EMsgGCToClientUploadMatchClipResponse;
    case 8875:
    case "k_EMsgGCToServerSetSteamLearnDisable":
      return EDOTAGCMsg.k_EMsgGCToServerSetSteamLearnDisable;
    case 8876:
    case "k_EMsgGCToServerSetSteamLearnKeysChanged":
      return EDOTAGCMsg.k_EMsgGCToServerSetSteamLearnKeysChanged;
    case 8877:
    case "k_EMsgSignOutMuertaMinigame":
      return EDOTAGCMsg.k_EMsgSignOutMuertaMinigame;
    case 8878:
    case "k_EMsgGCToServerLobbyHeroRoleStats":
      return EDOTAGCMsg.k_EMsgGCToServerLobbyHeroRoleStats;
    case 8879:
    case "k_EMsgClientToGCRankRequest":
      return EDOTAGCMsg.k_EMsgClientToGCRankRequest;
    case 8880:
    case "k_EMsgGCToClientRankResponse":
      return EDOTAGCMsg.k_EMsgGCToClientRankResponse;
    case 8881:
    case "k_EMsgGCToClientRankUpdate":
      return EDOTAGCMsg.k_EMsgGCToClientRankUpdate;
    case 8882:
    case "k_EMsgSignOutMapStats":
      return EDOTAGCMsg.k_EMsgSignOutMapStats;
    case 8883:
    case "k_EMsgClientToGCMapStatsRequest":
      return EDOTAGCMsg.k_EMsgClientToGCMapStatsRequest;
    case 8884:
    case "k_EMsgGCToClientMapStatsResponse":
      return EDOTAGCMsg.k_EMsgGCToClientMapStatsResponse;
    case 8885:
    case "k_EMsgGCToServerSetSteamLearnInferencing":
      return EDOTAGCMsg.k_EMsgGCToServerSetSteamLearnInferencing;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDOTAGCMsg");
  }
}

export function eDOTAGCMsgToJSON(object: EDOTAGCMsg): string {
  switch (object) {
    case EDOTAGCMsg.k_EMsgGCDOTABase:
      return "k_EMsgGCDOTABase";
    case EDOTAGCMsg.k_EMsgGCGameMatchSignOut:
      return "k_EMsgGCGameMatchSignOut";
    case EDOTAGCMsg.k_EMsgGCGameMatchSignOutResponse:
      return "k_EMsgGCGameMatchSignOutResponse";
    case EDOTAGCMsg.k_EMsgGCJoinChatChannel:
      return "k_EMsgGCJoinChatChannel";
    case EDOTAGCMsg.k_EMsgGCJoinChatChannelResponse:
      return "k_EMsgGCJoinChatChannelResponse";
    case EDOTAGCMsg.k_EMsgGCOtherJoinedChannel:
      return "k_EMsgGCOtherJoinedChannel";
    case EDOTAGCMsg.k_EMsgGCOtherLeftChannel:
      return "k_EMsgGCOtherLeftChannel";
    case EDOTAGCMsg.k_EMsgServerToGCRequestStatus:
      return "k_EMsgServerToGCRequestStatus";
    case EDOTAGCMsg.k_EMsgGCStartFindingMatch:
      return "k_EMsgGCStartFindingMatch";
    case EDOTAGCMsg.k_EMsgGCConnectedPlayers:
      return "k_EMsgGCConnectedPlayers";
    case EDOTAGCMsg.k_EMsgGCAbandonCurrentGame:
      return "k_EMsgGCAbandonCurrentGame";
    case EDOTAGCMsg.k_EMsgGCStopFindingMatch:
      return "k_EMsgGCStopFindingMatch";
    case EDOTAGCMsg.k_EMsgGCPracticeLobbyCreate:
      return "k_EMsgGCPracticeLobbyCreate";
    case EDOTAGCMsg.k_EMsgGCPracticeLobbyLeave:
      return "k_EMsgGCPracticeLobbyLeave";
    case EDOTAGCMsg.k_EMsgGCPracticeLobbyLaunch:
      return "k_EMsgGCPracticeLobbyLaunch";
    case EDOTAGCMsg.k_EMsgGCPracticeLobbyList:
      return "k_EMsgGCPracticeLobbyList";
    case EDOTAGCMsg.k_EMsgGCPracticeLobbyListResponse:
      return "k_EMsgGCPracticeLobbyListResponse";
    case EDOTAGCMsg.k_EMsgGCPracticeLobbyJoin:
      return "k_EMsgGCPracticeLobbyJoin";
    case EDOTAGCMsg.k_EMsgGCPracticeLobbySetDetails:
      return "k_EMsgGCPracticeLobbySetDetails";
    case EDOTAGCMsg.k_EMsgGCPracticeLobbySetTeamSlot:
      return "k_EMsgGCPracticeLobbySetTeamSlot";
    case EDOTAGCMsg.k_EMsgGCInitialQuestionnaireResponse:
      return "k_EMsgGCInitialQuestionnaireResponse";
    case EDOTAGCMsg.k_EMsgGCPracticeLobbyResponse:
      return "k_EMsgGCPracticeLobbyResponse";
    case EDOTAGCMsg.k_EMsgGCBroadcastNotification:
      return "k_EMsgGCBroadcastNotification";
    case EDOTAGCMsg.k_EMsgGCLiveScoreboardUpdate:
      return "k_EMsgGCLiveScoreboardUpdate";
    case EDOTAGCMsg.k_EMsgGCRequestChatChannelList:
      return "k_EMsgGCRequestChatChannelList";
    case EDOTAGCMsg.k_EMsgGCRequestChatChannelListResponse:
      return "k_EMsgGCRequestChatChannelListResponse";
    case EDOTAGCMsg.k_EMsgGCReadyUp:
      return "k_EMsgGCReadyUp";
    case EDOTAGCMsg.k_EMsgGCKickedFromMatchmakingQueue:
      return "k_EMsgGCKickedFromMatchmakingQueue";
    case EDOTAGCMsg.k_EMsgGCLeaverDetected:
      return "k_EMsgGCLeaverDetected";
    case EDOTAGCMsg.k_EMsgGCSpectateFriendGame:
      return "k_EMsgGCSpectateFriendGame";
    case EDOTAGCMsg.k_EMsgGCSpectateFriendGameResponse:
      return "k_EMsgGCSpectateFriendGameResponse";
    case EDOTAGCMsg.k_EMsgGCReportsRemainingRequest:
      return "k_EMsgGCReportsRemainingRequest";
    case EDOTAGCMsg.k_EMsgGCReportsRemainingResponse:
      return "k_EMsgGCReportsRemainingResponse";
    case EDOTAGCMsg.k_EMsgGCSubmitPlayerReport:
      return "k_EMsgGCSubmitPlayerReport";
    case EDOTAGCMsg.k_EMsgGCSubmitPlayerReportResponse:
      return "k_EMsgGCSubmitPlayerReportResponse";
    case EDOTAGCMsg.k_EMsgGCPracticeLobbyKick:
      return "k_EMsgGCPracticeLobbyKick";
    case EDOTAGCMsg.k_EMsgGCRequestSaveGames:
      return "k_EMsgGCRequestSaveGames";
    case EDOTAGCMsg.k_EMsgGCRequestSaveGamesServer:
      return "k_EMsgGCRequestSaveGamesServer";
    case EDOTAGCMsg.k_EMsgGCRequestSaveGamesResponse:
      return "k_EMsgGCRequestSaveGamesResponse";
    case EDOTAGCMsg.k_EMsgGCLeaverDetectedResponse:
      return "k_EMsgGCLeaverDetectedResponse";
    case EDOTAGCMsg.k_EMsgGCPlayerFailedToConnect:
      return "k_EMsgGCPlayerFailedToConnect";
    case EDOTAGCMsg.k_EMsgGCGCToRelayConnect:
      return "k_EMsgGCGCToRelayConnect";
    case EDOTAGCMsg.k_EMsgGCGCToRelayConnectresponse:
      return "k_EMsgGCGCToRelayConnectresponse";
    case EDOTAGCMsg.k_EMsgGCWatchGame:
      return "k_EMsgGCWatchGame";
    case EDOTAGCMsg.k_EMsgGCWatchGameResponse:
      return "k_EMsgGCWatchGameResponse";
    case EDOTAGCMsg.k_EMsgGCBanStatusRequest:
      return "k_EMsgGCBanStatusRequest";
    case EDOTAGCMsg.k_EMsgGCBanStatusResponse:
      return "k_EMsgGCBanStatusResponse";
    case EDOTAGCMsg.k_EMsgGCMatchDetailsRequest:
      return "k_EMsgGCMatchDetailsRequest";
    case EDOTAGCMsg.k_EMsgGCMatchDetailsResponse:
      return "k_EMsgGCMatchDetailsResponse";
    case EDOTAGCMsg.k_EMsgGCCancelWatchGame:
      return "k_EMsgGCCancelWatchGame";
    case EDOTAGCMsg.k_EMsgGCPopup:
      return "k_EMsgGCPopup";
    case EDOTAGCMsg.k_EMsgGCFriendPracticeLobbyListRequest:
      return "k_EMsgGCFriendPracticeLobbyListRequest";
    case EDOTAGCMsg.k_EMsgGCFriendPracticeLobbyListResponse:
      return "k_EMsgGCFriendPracticeLobbyListResponse";
    case EDOTAGCMsg.k_EMsgGCPracticeLobbyJoinResponse:
      return "k_EMsgGCPracticeLobbyJoinResponse";
    case EDOTAGCMsg.k_EMsgGCCreateTeam:
      return "k_EMsgGCCreateTeam";
    case EDOTAGCMsg.k_EMsgGCCreateTeamResponse:
      return "k_EMsgGCCreateTeamResponse";
    case EDOTAGCMsg.k_EMsgGCTeamInvite_InviterToGC:
      return "k_EMsgGCTeamInvite_InviterToGC";
    case EDOTAGCMsg.k_EMsgGCTeamInvite_GCImmediateResponseToInviter:
      return "k_EMsgGCTeamInvite_GCImmediateResponseToInviter";
    case EDOTAGCMsg.k_EMsgGCTeamInvite_GCRequestToInvitee:
      return "k_EMsgGCTeamInvite_GCRequestToInvitee";
    case EDOTAGCMsg.k_EMsgGCTeamInvite_InviteeResponseToGC:
      return "k_EMsgGCTeamInvite_InviteeResponseToGC";
    case EDOTAGCMsg.k_EMsgGCTeamInvite_GCResponseToInviter:
      return "k_EMsgGCTeamInvite_GCResponseToInviter";
    case EDOTAGCMsg.k_EMsgGCTeamInvite_GCResponseToInvitee:
      return "k_EMsgGCTeamInvite_GCResponseToInvitee";
    case EDOTAGCMsg.k_EMsgGCKickTeamMember:
      return "k_EMsgGCKickTeamMember";
    case EDOTAGCMsg.k_EMsgGCKickTeamMemberResponse:
      return "k_EMsgGCKickTeamMemberResponse";
    case EDOTAGCMsg.k_EMsgGCLeaveTeam:
      return "k_EMsgGCLeaveTeam";
    case EDOTAGCMsg.k_EMsgGCLeaveTeamResponse:
      return "k_EMsgGCLeaveTeamResponse";
    case EDOTAGCMsg.k_EMsgGCApplyTeamToPracticeLobby:
      return "k_EMsgGCApplyTeamToPracticeLobby";
    case EDOTAGCMsg.k_EMsgGCTransferTeamAdmin:
      return "k_EMsgGCTransferTeamAdmin";
    case EDOTAGCMsg.k_EMsgGCPracticeLobbyJoinBroadcastChannel:
      return "k_EMsgGCPracticeLobbyJoinBroadcastChannel";
    case EDOTAGCMsg.k_EMsgGC_TournamentItemEvent:
      return "k_EMsgGC_TournamentItemEvent";
    case EDOTAGCMsg.k_EMsgGC_TournamentItemEventResponse:
      return "k_EMsgGC_TournamentItemEventResponse";
    case EDOTAGCMsg.k_EMsgTeamFanfare:
      return "k_EMsgTeamFanfare";
    case EDOTAGCMsg.k_EMsgResponseTeamFanfare:
      return "k_EMsgResponseTeamFanfare";
    case EDOTAGCMsg.k_EMsgGC_GameServerUploadSaveGame:
      return "k_EMsgGC_GameServerUploadSaveGame";
    case EDOTAGCMsg.k_EMsgGC_GameServerSaveGameResult:
      return "k_EMsgGC_GameServerSaveGameResult";
    case EDOTAGCMsg.k_EMsgGC_GameServerGetLoadGame:
      return "k_EMsgGC_GameServerGetLoadGame";
    case EDOTAGCMsg.k_EMsgGC_GameServerGetLoadGameResult:
      return "k_EMsgGC_GameServerGetLoadGameResult";
    case EDOTAGCMsg.k_EMsgGCEditTeamDetails:
      return "k_EMsgGCEditTeamDetails";
    case EDOTAGCMsg.k_EMsgGCEditTeamDetailsResponse:
      return "k_EMsgGCEditTeamDetailsResponse";
    case EDOTAGCMsg.k_EMsgGCReadyUpStatus:
      return "k_EMsgGCReadyUpStatus";
    case EDOTAGCMsg.k_EMsgGCToGCMatchCompleted:
      return "k_EMsgGCToGCMatchCompleted";
    case EDOTAGCMsg.k_EMsgGCBalancedShuffleLobby:
      return "k_EMsgGCBalancedShuffleLobby";
    case EDOTAGCMsg.k_EMsgGCMatchmakingStatsRequest:
      return "k_EMsgGCMatchmakingStatsRequest";
    case EDOTAGCMsg.k_EMsgGCMatchmakingStatsResponse:
      return "k_EMsgGCMatchmakingStatsResponse";
    case EDOTAGCMsg.k_EMsgGCBotGameCreate:
      return "k_EMsgGCBotGameCreate";
    case EDOTAGCMsg.k_EMsgGCSetMatchHistoryAccess:
      return "k_EMsgGCSetMatchHistoryAccess";
    case EDOTAGCMsg.k_EMsgGCSetMatchHistoryAccessResponse:
      return "k_EMsgGCSetMatchHistoryAccessResponse";
    case EDOTAGCMsg.k_EMsgUpgradeLeagueItem:
      return "k_EMsgUpgradeLeagueItem";
    case EDOTAGCMsg.k_EMsgUpgradeLeagueItemResponse:
      return "k_EMsgUpgradeLeagueItemResponse";
    case EDOTAGCMsg.k_EMsgGCWatchDownloadedReplay:
      return "k_EMsgGCWatchDownloadedReplay";
    case EDOTAGCMsg.k_EMsgClientsRejoinChatChannels:
      return "k_EMsgClientsRejoinChatChannels";
    case EDOTAGCMsg.k_EMsgGCToGCGetUserChatInfo:
      return "k_EMsgGCToGCGetUserChatInfo";
    case EDOTAGCMsg.k_EMsgGCToGCGetUserChatInfoResponse:
      return "k_EMsgGCToGCGetUserChatInfoResponse";
    case EDOTAGCMsg.k_EMsgGCToGCLeaveAllChatChannels:
      return "k_EMsgGCToGCLeaveAllChatChannels";
    case EDOTAGCMsg.k_EMsgGCToGCUpdateAccountChatBan:
      return "k_EMsgGCToGCUpdateAccountChatBan";
    case EDOTAGCMsg.k_EMsgGCToGCCanInviteUserToTeam:
      return "k_EMsgGCToGCCanInviteUserToTeam";
    case EDOTAGCMsg.k_EMsgGCToGCCanInviteUserToTeamResponse:
      return "k_EMsgGCToGCCanInviteUserToTeamResponse";
    case EDOTAGCMsg.k_EMsgGCToGCGetUserRank:
      return "k_EMsgGCToGCGetUserRank";
    case EDOTAGCMsg.k_EMsgGCToGCGetUserRankResponse:
      return "k_EMsgGCToGCGetUserRankResponse";
    case EDOTAGCMsg.k_EMsgGCToGCUpdateTeamStats:
      return "k_EMsgGCToGCUpdateTeamStats";
    case EDOTAGCMsg.k_EMsgGCToGCValidateTeam:
      return "k_EMsgGCToGCValidateTeam";
    case EDOTAGCMsg.k_EMsgGCToGCValidateTeamResponse:
      return "k_EMsgGCToGCValidateTeamResponse";
    case EDOTAGCMsg.k_EMsgGCToGCGetLeagueAdmin:
      return "k_EMsgGCToGCGetLeagueAdmin";
    case EDOTAGCMsg.k_EMsgGCToGCGetLeagueAdminResponse:
      return "k_EMsgGCToGCGetLeagueAdminResponse";
    case EDOTAGCMsg.k_EMsgGCLeaveChatChannel:
      return "k_EMsgGCLeaveChatChannel";
    case EDOTAGCMsg.k_EMsgGCChatMessage:
      return "k_EMsgGCChatMessage";
    case EDOTAGCMsg.k_EMsgGCGetHeroStandings:
      return "k_EMsgGCGetHeroStandings";
    case EDOTAGCMsg.k_EMsgGCGetHeroStandingsResponse:
      return "k_EMsgGCGetHeroStandingsResponse";
    case EDOTAGCMsg.k_EMsgGCItemEditorReservationsRequest:
      return "k_EMsgGCItemEditorReservationsRequest";
    case EDOTAGCMsg.k_EMsgGCItemEditorReservationsResponse:
      return "k_EMsgGCItemEditorReservationsResponse";
    case EDOTAGCMsg.k_EMsgGCItemEditorReserveItemDef:
      return "k_EMsgGCItemEditorReserveItemDef";
    case EDOTAGCMsg.k_EMsgGCItemEditorReserveItemDefResponse:
      return "k_EMsgGCItemEditorReserveItemDefResponse";
    case EDOTAGCMsg.k_EMsgGCItemEditorReleaseReservation:
      return "k_EMsgGCItemEditorReleaseReservation";
    case EDOTAGCMsg.k_EMsgGCItemEditorReleaseReservationResponse:
      return "k_EMsgGCItemEditorReleaseReservationResponse";
    case EDOTAGCMsg.k_EMsgGCRewardTutorialPrizes:
      return "k_EMsgGCRewardTutorialPrizes";
    case EDOTAGCMsg.k_EMsgGCFantasyLivePlayerStats:
      return "k_EMsgGCFantasyLivePlayerStats";
    case EDOTAGCMsg.k_EMsgGCFantasyFinalPlayerStats:
      return "k_EMsgGCFantasyFinalPlayerStats";
    case EDOTAGCMsg.k_EMsgGCFlipLobbyTeams:
      return "k_EMsgGCFlipLobbyTeams";
    case EDOTAGCMsg.k_EMsgGCToGCProcessPlayerReportForTarget:
      return "k_EMsgGCToGCProcessPlayerReportForTarget";
    case EDOTAGCMsg.k_EMsgGCToGCProcessReportSuccess:
      return "k_EMsgGCToGCProcessReportSuccess";
    case EDOTAGCMsg.k_EMsgGCNotifyAccountFlagsChange:
      return "k_EMsgGCNotifyAccountFlagsChange";
    case EDOTAGCMsg.k_EMsgGCSetProfilePrivacy:
      return "k_EMsgGCSetProfilePrivacy";
    case EDOTAGCMsg.k_EMsgGCSetProfilePrivacyResponse:
      return "k_EMsgGCSetProfilePrivacyResponse";
    case EDOTAGCMsg.k_EMsgGCClientSuspended:
      return "k_EMsgGCClientSuspended";
    case EDOTAGCMsg.k_EMsgGCPartyMemberSetCoach:
      return "k_EMsgGCPartyMemberSetCoach";
    case EDOTAGCMsg.k_EMsgGCPracticeLobbySetCoach:
      return "k_EMsgGCPracticeLobbySetCoach";
    case EDOTAGCMsg.k_EMsgGCChatModeratorBan:
      return "k_EMsgGCChatModeratorBan";
    case EDOTAGCMsg.k_EMsgGCLobbyUpdateBroadcastChannelInfo:
      return "k_EMsgGCLobbyUpdateBroadcastChannelInfo";
    case EDOTAGCMsg.k_EMsgGCToGCGrantTournamentItem:
      return "k_EMsgGCToGCGrantTournamentItem";
    case EDOTAGCMsg.k_EMsgGCToGCUpgradeTwitchViewerItems:
      return "k_EMsgGCToGCUpgradeTwitchViewerItems";
    case EDOTAGCMsg.k_EMsgGCToGCGetLiveMatchAffiliates:
      return "k_EMsgGCToGCGetLiveMatchAffiliates";
    case EDOTAGCMsg.k_EMsgGCToGCGetLiveMatchAffiliatesResponse:
      return "k_EMsgGCToGCGetLiveMatchAffiliatesResponse";
    case EDOTAGCMsg.k_EMsgGCToGCUpdatePlayerPennantCounts:
      return "k_EMsgGCToGCUpdatePlayerPennantCounts";
    case EDOTAGCMsg.k_EMsgGCToGCGetPlayerPennantCounts:
      return "k_EMsgGCToGCGetPlayerPennantCounts";
    case EDOTAGCMsg.k_EMsgGCToGCGetPlayerPennantCountsResponse:
      return "k_EMsgGCToGCGetPlayerPennantCountsResponse";
    case EDOTAGCMsg.k_EMsgGCGameMatchSignOutPermissionRequest:
      return "k_EMsgGCGameMatchSignOutPermissionRequest";
    case EDOTAGCMsg.k_EMsgGCGameMatchSignOutPermissionResponse:
      return "k_EMsgGCGameMatchSignOutPermissionResponse";
    case EDOTAGCMsg.k_EMsgDOTAAwardEventPoints:
      return "k_EMsgDOTAAwardEventPoints";
    case EDOTAGCMsg.k_EMsgDOTAGetEventPoints:
      return "k_EMsgDOTAGetEventPoints";
    case EDOTAGCMsg.k_EMsgDOTAGetEventPointsResponse:
      return "k_EMsgDOTAGetEventPointsResponse";
    case EDOTAGCMsg.k_EMsgGCPartyLeaderWatchGamePrompt:
      return "k_EMsgGCPartyLeaderWatchGamePrompt";
    case EDOTAGCMsg.k_EMsgGCCompendiumSetSelection:
      return "k_EMsgGCCompendiumSetSelection";
    case EDOTAGCMsg.k_EMsgGCCompendiumDataRequest:
      return "k_EMsgGCCompendiumDataRequest";
    case EDOTAGCMsg.k_EMsgGCCompendiumDataResponse:
      return "k_EMsgGCCompendiumDataResponse";
    case EDOTAGCMsg.k_EMsgDOTAGetPlayerMatchHistory:
      return "k_EMsgDOTAGetPlayerMatchHistory";
    case EDOTAGCMsg.k_EMsgDOTAGetPlayerMatchHistoryResponse:
      return "k_EMsgDOTAGetPlayerMatchHistoryResponse";
    case EDOTAGCMsg.k_EMsgGCToGCMatchmakingAddParty:
      return "k_EMsgGCToGCMatchmakingAddParty";
    case EDOTAGCMsg.k_EMsgGCToGCMatchmakingRemoveParty:
      return "k_EMsgGCToGCMatchmakingRemoveParty";
    case EDOTAGCMsg.k_EMsgGCToGCMatchmakingRemoveAllParties:
      return "k_EMsgGCToGCMatchmakingRemoveAllParties";
    case EDOTAGCMsg.k_EMsgGCToGCMatchmakingMatchFound:
      return "k_EMsgGCToGCMatchmakingMatchFound";
    case EDOTAGCMsg.k_EMsgGCToGCUpdateMatchManagementStats:
      return "k_EMsgGCToGCUpdateMatchManagementStats";
    case EDOTAGCMsg.k_EMsgGCToGCUpdateMatchmakingStats:
      return "k_EMsgGCToGCUpdateMatchmakingStats";
    case EDOTAGCMsg.k_EMsgGCToServerPingRequest:
      return "k_EMsgGCToServerPingRequest";
    case EDOTAGCMsg.k_EMsgGCToServerPingResponse:
      return "k_EMsgGCToServerPingResponse";
    case EDOTAGCMsg.k_EMsgGCToGCProcessMatchLeaver:
      return "k_EMsgGCToGCProcessMatchLeaver";
    case EDOTAGCMsg.k_EMsgGCNotificationsRequest:
      return "k_EMsgGCNotificationsRequest";
    case EDOTAGCMsg.k_EMsgGCNotificationsResponse:
      return "k_EMsgGCNotificationsResponse";
    case EDOTAGCMsg.k_EMsgGCToGCModifyNotification:
      return "k_EMsgGCToGCModifyNotification";
    case EDOTAGCMsg.k_EMsgGCLeagueAdminList:
      return "k_EMsgGCLeagueAdminList";
    case EDOTAGCMsg.k_EMsgGCNotificationsMarkReadRequest:
      return "k_EMsgGCNotificationsMarkReadRequest";
    case EDOTAGCMsg.k_EMsgServerToGCRequestBatchPlayerResources:
      return "k_EMsgServerToGCRequestBatchPlayerResources";
    case EDOTAGCMsg.k_EMsgServerToGCRequestBatchPlayerResourcesResponse:
      return "k_EMsgServerToGCRequestBatchPlayerResourcesResponse";
    case EDOTAGCMsg.k_EMsgGCCompendiumSetSelectionResponse:
      return "k_EMsgGCCompendiumSetSelectionResponse";
    case EDOTAGCMsg.k_EMsgGCPlayerInfoSubmit:
      return "k_EMsgGCPlayerInfoSubmit";
    case EDOTAGCMsg.k_EMsgGCPlayerInfoSubmitResponse:
      return "k_EMsgGCPlayerInfoSubmitResponse";
    case EDOTAGCMsg.k_EMsgGCToGCGetAccountLevel:
      return "k_EMsgGCToGCGetAccountLevel";
    case EDOTAGCMsg.k_EMsgGCToGCGetAccountLevelResponse:
      return "k_EMsgGCToGCGetAccountLevelResponse";
    case EDOTAGCMsg.k_EMsgDOTAGetWeekendTourneySchedule:
      return "k_EMsgDOTAGetWeekendTourneySchedule";
    case EDOTAGCMsg.k_EMsgDOTAWeekendTourneySchedule:
      return "k_EMsgDOTAWeekendTourneySchedule";
    case EDOTAGCMsg.k_EMsgGCJoinableCustomGameModesRequest:
      return "k_EMsgGCJoinableCustomGameModesRequest";
    case EDOTAGCMsg.k_EMsgGCJoinableCustomGameModesResponse:
      return "k_EMsgGCJoinableCustomGameModesResponse";
    case EDOTAGCMsg.k_EMsgGCJoinableCustomLobbiesRequest:
      return "k_EMsgGCJoinableCustomLobbiesRequest";
    case EDOTAGCMsg.k_EMsgGCJoinableCustomLobbiesResponse:
      return "k_EMsgGCJoinableCustomLobbiesResponse";
    case EDOTAGCMsg.k_EMsgGCQuickJoinCustomLobby:
      return "k_EMsgGCQuickJoinCustomLobby";
    case EDOTAGCMsg.k_EMsgGCQuickJoinCustomLobbyResponse:
      return "k_EMsgGCQuickJoinCustomLobbyResponse";
    case EDOTAGCMsg.k_EMsgGCToGCGrantEventPointAction:
      return "k_EMsgGCToGCGrantEventPointAction";
    case EDOTAGCMsg.k_EMsgGCToGCSetCompendiumSelection:
      return "k_EMsgGCToGCSetCompendiumSelection";
    case EDOTAGCMsg.k_EMsgGCHasItemQuery:
      return "k_EMsgGCHasItemQuery";
    case EDOTAGCMsg.k_EMsgGCHasItemResponse:
      return "k_EMsgGCHasItemResponse";
    case EDOTAGCMsg.k_EMsgGCToGCGrantEventPointActionMsg:
      return "k_EMsgGCToGCGrantEventPointActionMsg";
    case EDOTAGCMsg.k_EMsgGCToGCGetCompendiumSelections:
      return "k_EMsgGCToGCGetCompendiumSelections";
    case EDOTAGCMsg.k_EMsgGCToGCGetCompendiumSelectionsResponse:
      return "k_EMsgGCToGCGetCompendiumSelectionsResponse";
    case EDOTAGCMsg.k_EMsgServerToGCMatchConnectionStats:
      return "k_EMsgServerToGCMatchConnectionStats";
    case EDOTAGCMsg.k_EMsgGCToClientTournamentItemDrop:
      return "k_EMsgGCToClientTournamentItemDrop";
    case EDOTAGCMsg.k_EMsgSQLDelayedGrantLeagueDrop:
      return "k_EMsgSQLDelayedGrantLeagueDrop";
    case EDOTAGCMsg.k_EMsgServerGCUpdateSpectatorCount:
      return "k_EMsgServerGCUpdateSpectatorCount";
    case EDOTAGCMsg.k_EMsgGCToGCEmoticonUnlock:
      return "k_EMsgGCToGCEmoticonUnlock";
    case EDOTAGCMsg.k_EMsgSignOutDraftInfo:
      return "k_EMsgSignOutDraftInfo";
    case EDOTAGCMsg.k_EMsgClientToGCEmoticonDataRequest:
      return "k_EMsgClientToGCEmoticonDataRequest";
    case EDOTAGCMsg.k_EMsgGCToClientEmoticonData:
      return "k_EMsgGCToClientEmoticonData";
    case EDOTAGCMsg.k_EMsgGCPracticeLobbyToggleBroadcastChannelCameramanStatus:
      return "k_EMsgGCPracticeLobbyToggleBroadcastChannelCameramanStatus";
    case EDOTAGCMsg.k_EMsgDOTARedeemItem:
      return "k_EMsgDOTARedeemItem";
    case EDOTAGCMsg.k_EMsgDOTARedeemItemResponse:
      return "k_EMsgDOTARedeemItemResponse";
    case EDOTAGCMsg.k_EMsgClientToGCGetAllHeroProgress:
      return "k_EMsgClientToGCGetAllHeroProgress";
    case EDOTAGCMsg.k_EMsgClientToGCGetAllHeroProgressResponse:
      return "k_EMsgClientToGCGetAllHeroProgressResponse";
    case EDOTAGCMsg.k_EMsgGCToGCGetServerForClient:
      return "k_EMsgGCToGCGetServerForClient";
    case EDOTAGCMsg.k_EMsgGCToGCGetServerForClientResponse:
      return "k_EMsgGCToGCGetServerForClientResponse";
    case EDOTAGCMsg.k_EMsgSQLProcessTournamentGameOutcome:
      return "k_EMsgSQLProcessTournamentGameOutcome";
    case EDOTAGCMsg.k_EMsgSQLGrantTrophyToAccount:
      return "k_EMsgSQLGrantTrophyToAccount";
    case EDOTAGCMsg.k_EMsgClientToGCGetTrophyList:
      return "k_EMsgClientToGCGetTrophyList";
    case EDOTAGCMsg.k_EMsgClientToGCGetTrophyListResponse:
      return "k_EMsgClientToGCGetTrophyListResponse";
    case EDOTAGCMsg.k_EMsgGCToClientTrophyAwarded:
      return "k_EMsgGCToClientTrophyAwarded";
    case EDOTAGCMsg.k_EMsgGCGameBotMatchSignOut:
      return "k_EMsgGCGameBotMatchSignOut";
    case EDOTAGCMsg.k_EMsgGCGameBotMatchSignOutPermissionRequest:
      return "k_EMsgGCGameBotMatchSignOutPermissionRequest";
    case EDOTAGCMsg.k_EMsgSignOutBotInfo:
      return "k_EMsgSignOutBotInfo";
    case EDOTAGCMsg.k_EMsgGCToGCUpdateProfileCards:
      return "k_EMsgGCToGCUpdateProfileCards";
    case EDOTAGCMsg.k_EMsgClientToGCGetProfileCard:
      return "k_EMsgClientToGCGetProfileCard";
    case EDOTAGCMsg.k_EMsgClientToGCGetProfileCardResponse:
      return "k_EMsgClientToGCGetProfileCardResponse";
    case EDOTAGCMsg.k_EMsgClientToGCGetBattleReport:
      return "k_EMsgClientToGCGetBattleReport";
    case EDOTAGCMsg.k_EMsgClientToGCGetBattleReportResponse:
      return "k_EMsgClientToGCGetBattleReportResponse";
    case EDOTAGCMsg.k_EMsgClientToGCSetProfileCardSlots:
      return "k_EMsgClientToGCSetProfileCardSlots";
    case EDOTAGCMsg.k_EMsgGCToClientProfileCardUpdated:
      return "k_EMsgGCToClientProfileCardUpdated";
    case EDOTAGCMsg.k_EMsgServerToGCVictoryPredictions:
      return "k_EMsgServerToGCVictoryPredictions";
    case EDOTAGCMsg.k_EMsgClientToGCGetBattleReportAggregateStats:
      return "k_EMsgClientToGCGetBattleReportAggregateStats";
    case EDOTAGCMsg.k_EMsgClientToGCGetBattleReportAggregateStatsResponse:
      return "k_EMsgClientToGCGetBattleReportAggregateStatsResponse";
    case EDOTAGCMsg.k_EMsgClientToGCGetBattleReportInfo:
      return "k_EMsgClientToGCGetBattleReportInfo";
    case EDOTAGCMsg.k_EMsgClientToGCGetBattleReportInfoResponse:
      return "k_EMsgClientToGCGetBattleReportInfoResponse";
    case EDOTAGCMsg.k_EMsgSignOutCommunicationSummary:
      return "k_EMsgSignOutCommunicationSummary";
    case EDOTAGCMsg.k_EMsgServerToGCRequestStatus_Response:
      return "k_EMsgServerToGCRequestStatus_Response";
    case EDOTAGCMsg.k_EMsgClientToGCCreateHeroStatue:
      return "k_EMsgClientToGCCreateHeroStatue";
    case EDOTAGCMsg.k_EMsgGCToClientHeroStatueCreateResult:
      return "k_EMsgGCToClientHeroStatueCreateResult";
    case EDOTAGCMsg.k_EMsgGCGCToLANServerRelayConnect:
      return "k_EMsgGCGCToLANServerRelayConnect";
    case EDOTAGCMsg.k_EMsgClientToGCAcknowledgeBattleReport:
      return "k_EMsgClientToGCAcknowledgeBattleReport";
    case EDOTAGCMsg.k_EMsgClientToGCAcknowledgeBattleReportResponse:
      return "k_EMsgClientToGCAcknowledgeBattleReportResponse";
    case EDOTAGCMsg.k_EMsgClientToGCGetBattleReportMatchHistory:
      return "k_EMsgClientToGCGetBattleReportMatchHistory";
    case EDOTAGCMsg.k_EMsgClientToGCGetBattleReportMatchHistoryResponse:
      return "k_EMsgClientToGCGetBattleReportMatchHistoryResponse";
    case EDOTAGCMsg.k_EMsgServerToGCReportKillSummaries:
      return "k_EMsgServerToGCReportKillSummaries";
    case EDOTAGCMsg.k_EMsgGCToGCUpdatePlayerPredictions:
      return "k_EMsgGCToGCUpdatePlayerPredictions";
    case EDOTAGCMsg.k_EMsgGCToServerPredictionResult:
      return "k_EMsgGCToServerPredictionResult";
    case EDOTAGCMsg.k_EMsgGCToGCReplayMonitorValidateReplay:
      return "k_EMsgGCToGCReplayMonitorValidateReplay";
    case EDOTAGCMsg.k_EMsgLobbyEventPoints:
      return "k_EMsgLobbyEventPoints";
    case EDOTAGCMsg.k_EMsgGCToGCGetCustomGameTickets:
      return "k_EMsgGCToGCGetCustomGameTickets";
    case EDOTAGCMsg.k_EMsgGCToGCGetCustomGameTicketsResponse:
      return "k_EMsgGCToGCGetCustomGameTicketsResponse";
    case EDOTAGCMsg.k_EMsgGCToGCCustomGamePlayed:
      return "k_EMsgGCToGCCustomGamePlayed";
    case EDOTAGCMsg.k_EMsgGCToGCGrantEventPointsToUser:
      return "k_EMsgGCToGCGrantEventPointsToUser";
    case EDOTAGCMsg.k_EMsgGameserverCrashReport:
      return "k_EMsgGameserverCrashReport";
    case EDOTAGCMsg.k_EMsgGameserverCrashReportResponse:
      return "k_EMsgGameserverCrashReportResponse";
    case EDOTAGCMsg.k_EMsgGCToClientSteamDatagramTicket:
      return "k_EMsgGCToClientSteamDatagramTicket";
    case EDOTAGCMsg.k_EMsgGCToGCSendAccountsEventPoints:
      return "k_EMsgGCToGCSendAccountsEventPoints";
    case EDOTAGCMsg.k_EMsgClientToGCRerollPlayerChallenge:
      return "k_EMsgClientToGCRerollPlayerChallenge";
    case EDOTAGCMsg.k_EMsgServerToGCRerollPlayerChallenge:
      return "k_EMsgServerToGCRerollPlayerChallenge";
    case EDOTAGCMsg.k_EMsgGCRerollPlayerChallengeResponse:
      return "k_EMsgGCRerollPlayerChallengeResponse";
    case EDOTAGCMsg.k_EMsgSignOutUpdatePlayerChallenge:
      return "k_EMsgSignOutUpdatePlayerChallenge";
    case EDOTAGCMsg.k_EMsgClientToGCSetPartyLeader:
      return "k_EMsgClientToGCSetPartyLeader";
    case EDOTAGCMsg.k_EMsgClientToGCCancelPartyInvites:
      return "k_EMsgClientToGCCancelPartyInvites";
    case EDOTAGCMsg.k_EMsgSQLGrantLeagueMatchToTicketHolders:
      return "k_EMsgSQLGrantLeagueMatchToTicketHolders";
    case EDOTAGCMsg.k_EMsgGCToGCEmoticonUnlockNoRollback:
      return "k_EMsgGCToGCEmoticonUnlockNoRollback";
    case EDOTAGCMsg.k_EMsgClientToGCApplyGemCombiner:
      return "k_EMsgClientToGCApplyGemCombiner";
    case EDOTAGCMsg.k_EMsgClientToGCGetAllHeroOrder:
      return "k_EMsgClientToGCGetAllHeroOrder";
    case EDOTAGCMsg.k_EMsgClientToGCGetAllHeroOrderResponse:
      return "k_EMsgClientToGCGetAllHeroOrderResponse";
    case EDOTAGCMsg.k_EMsgSQLGCToGCGrantBadgePoints:
      return "k_EMsgSQLGCToGCGrantBadgePoints";
    case EDOTAGCMsg.k_EMsgGCToGCCheckOwnsEntireEmoticonRange:
      return "k_EMsgGCToGCCheckOwnsEntireEmoticonRange";
    case EDOTAGCMsg.k_EMsgGCToGCCheckOwnsEntireEmoticonRangeResponse:
      return "k_EMsgGCToGCCheckOwnsEntireEmoticonRangeResponse";
    case EDOTAGCMsg.k_EMsgGCToClientRequestLaneSelection:
      return "k_EMsgGCToClientRequestLaneSelection";
    case EDOTAGCMsg.k_EMsgGCToClientRequestLaneSelectionResponse:
      return "k_EMsgGCToClientRequestLaneSelectionResponse";
    case EDOTAGCMsg.k_EMsgServerToGCCavernCrawlIsHeroActive:
      return "k_EMsgServerToGCCavernCrawlIsHeroActive";
    case EDOTAGCMsg.k_EMsgServerToGCCavernCrawlIsHeroActiveResponse:
      return "k_EMsgServerToGCCavernCrawlIsHeroActiveResponse";
    case EDOTAGCMsg.k_EMsgClientToGCPlayerCardSpecificPurchaseRequest:
      return "k_EMsgClientToGCPlayerCardSpecificPurchaseRequest";
    case EDOTAGCMsg.k_EMsgClientToGCPlayerCardSpecificPurchaseResponse:
      return "k_EMsgClientToGCPlayerCardSpecificPurchaseResponse";
    case EDOTAGCMsg.k_EMsgGCtoServerTensorflowInstance:
      return "k_EMsgGCtoServerTensorflowInstance";
    case EDOTAGCMsg.k_EMsgSQLSetIsLeagueAdmin:
      return "k_EMsgSQLSetIsLeagueAdmin";
    case EDOTAGCMsg.k_EMsgGCToGCGetLiveLeagueMatches:
      return "k_EMsgGCToGCGetLiveLeagueMatches";
    case EDOTAGCMsg.k_EMsgGCToGCGetLiveLeagueMatchesResponse:
      return "k_EMsgGCToGCGetLiveLeagueMatchesResponse";
    case EDOTAGCMsg.k_EMsgDOTALeagueInfoListAdminsRequest:
      return "k_EMsgDOTALeagueInfoListAdminsRequest";
    case EDOTAGCMsg.k_EMsgDOTALeagueInfoListAdminsReponse:
      return "k_EMsgDOTALeagueInfoListAdminsReponse";
    case EDOTAGCMsg.k_EMsgGCToGCLeagueMatchStarted:
      return "k_EMsgGCToGCLeagueMatchStarted";
    case EDOTAGCMsg.k_EMsgGCToGCLeagueMatchCompleted:
      return "k_EMsgGCToGCLeagueMatchCompleted";
    case EDOTAGCMsg.k_EMsgGCToGCLeagueMatchStartedResponse:
      return "k_EMsgGCToGCLeagueMatchStartedResponse";
    case EDOTAGCMsg.k_EMsgDOTALeagueAvailableLobbyNodesRequest:
      return "k_EMsgDOTALeagueAvailableLobbyNodesRequest";
    case EDOTAGCMsg.k_EMsgDOTALeagueAvailableLobbyNodes:
      return "k_EMsgDOTALeagueAvailableLobbyNodes";
    case EDOTAGCMsg.k_EMsgGCToGCLeagueRequest:
      return "k_EMsgGCToGCLeagueRequest";
    case EDOTAGCMsg.k_EMsgGCToGCLeagueResponse:
      return "k_EMsgGCToGCLeagueResponse";
    case EDOTAGCMsg.k_EMsgGCToGCLeagueNodeGroupRequest:
      return "k_EMsgGCToGCLeagueNodeGroupRequest";
    case EDOTAGCMsg.k_EMsgGCToGCLeagueNodeGroupResponse:
      return "k_EMsgGCToGCLeagueNodeGroupResponse";
    case EDOTAGCMsg.k_EMsgGCToGCLeagueNodeRequest:
      return "k_EMsgGCToGCLeagueNodeRequest";
    case EDOTAGCMsg.k_EMsgGCToGCLeagueNodeResponse:
      return "k_EMsgGCToGCLeagueNodeResponse";
    case EDOTAGCMsg.k_EMsgGCToGCRealtimeStatsTerseRequest:
      return "k_EMsgGCToGCRealtimeStatsTerseRequest";
    case EDOTAGCMsg.k_EMsgGCToGCRealtimeStatsTerseResponse:
      return "k_EMsgGCToGCRealtimeStatsTerseResponse";
    case EDOTAGCMsg.k_EMsgGCToGCGetTopMatchesRequest:
      return "k_EMsgGCToGCGetTopMatchesRequest";
    case EDOTAGCMsg.k_EMsgGCToGCGetTopMatchesResponse:
      return "k_EMsgGCToGCGetTopMatchesResponse";
    case EDOTAGCMsg.k_EMsgClientToGCGetFilteredPlayers:
      return "k_EMsgClientToGCGetFilteredPlayers";
    case EDOTAGCMsg.k_EMsgGCToClientGetFilteredPlayersResponse:
      return "k_EMsgGCToClientGetFilteredPlayersResponse";
    case EDOTAGCMsg.k_EMsgClientToGCRemoveFilteredPlayer:
      return "k_EMsgClientToGCRemoveFilteredPlayer";
    case EDOTAGCMsg.k_EMsgGCToClientRemoveFilteredPlayerResponse:
      return "k_EMsgGCToClientRemoveFilteredPlayerResponse";
    case EDOTAGCMsg.k_EMsgGCToClientPlayerBeaconState:
      return "k_EMsgGCToClientPlayerBeaconState";
    case EDOTAGCMsg.k_EMsgGCToClientPartyBeaconUpdate:
      return "k_EMsgGCToClientPartyBeaconUpdate";
    case EDOTAGCMsg.k_EMsgGCToClientPartySearchInvite:
      return "k_EMsgGCToClientPartySearchInvite";
    case EDOTAGCMsg.k_EMsgClientToGCUpdatePartyBeacon:
      return "k_EMsgClientToGCUpdatePartyBeacon";
    case EDOTAGCMsg.k_EMsgClientToGCRequestActiveBeaconParties:
      return "k_EMsgClientToGCRequestActiveBeaconParties";
    case EDOTAGCMsg.k_EMsgGCToClientRequestActiveBeaconPartiesResponse:
      return "k_EMsgGCToClientRequestActiveBeaconPartiesResponse";
    case EDOTAGCMsg.k_EMsgClientToGCManageFavorites:
      return "k_EMsgClientToGCManageFavorites";
    case EDOTAGCMsg.k_EMsgGCToClientManageFavoritesResponse:
      return "k_EMsgGCToClientManageFavoritesResponse";
    case EDOTAGCMsg.k_EMsgClientToGCJoinPartyFromBeacon:
      return "k_EMsgClientToGCJoinPartyFromBeacon";
    case EDOTAGCMsg.k_EMsgGCToClientJoinPartyFromBeaconResponse:
      return "k_EMsgGCToClientJoinPartyFromBeaconResponse";
    case EDOTAGCMsg.k_EMsgClientToGCGetFavoritePlayers:
      return "k_EMsgClientToGCGetFavoritePlayers";
    case EDOTAGCMsg.k_EMsgGCToClientGetFavoritePlayersResponse:
      return "k_EMsgGCToClientGetFavoritePlayersResponse";
    case EDOTAGCMsg.k_EMsgClientToGCVerifyFavoritePlayers:
      return "k_EMsgClientToGCVerifyFavoritePlayers";
    case EDOTAGCMsg.k_EMsgGCToClientVerifyFavoritePlayersResponse:
      return "k_EMsgGCToClientVerifyFavoritePlayersResponse";
    case EDOTAGCMsg.k_EMsgGCToClientPartySearchInvites:
      return "k_EMsgGCToClientPartySearchInvites";
    case EDOTAGCMsg.k_EMsgGCToClientRequestMMInfo:
      return "k_EMsgGCToClientRequestMMInfo";
    case EDOTAGCMsg.k_EMsgClientToGCMMInfo:
      return "k_EMsgClientToGCMMInfo";
    case EDOTAGCMsg.k_EMsgSignOutTextMuteInfo:
      return "k_EMsgSignOutTextMuteInfo";
    case EDOTAGCMsg.k_EMsgClientToGCPurchaseLabyrinthBlessings:
      return "k_EMsgClientToGCPurchaseLabyrinthBlessings";
    case EDOTAGCMsg.k_EMsgClientToGCPurchaseLabyrinthBlessingsResponse:
      return "k_EMsgClientToGCPurchaseLabyrinthBlessingsResponse";
    case EDOTAGCMsg.k_EMsgClientToGCPurchaseFilteredPlayerSlot:
      return "k_EMsgClientToGCPurchaseFilteredPlayerSlot";
    case EDOTAGCMsg.k_EMsgGCToClientPurchaseFilteredPlayerSlotResponse:
      return "k_EMsgGCToClientPurchaseFilteredPlayerSlotResponse";
    case EDOTAGCMsg.k_EMsgClientToGCUpdateFilteredPlayerNote:
      return "k_EMsgClientToGCUpdateFilteredPlayerNote";
    case EDOTAGCMsg.k_EMsgGCToClientUpdateFilteredPlayerNoteResponse:
      return "k_EMsgGCToClientUpdateFilteredPlayerNoteResponse";
    case EDOTAGCMsg.k_EMsgClientToGCClaimSwag:
      return "k_EMsgClientToGCClaimSwag";
    case EDOTAGCMsg.k_EMsgGCToClientClaimSwagResponse:
      return "k_EMsgGCToClientClaimSwagResponse";
    case EDOTAGCMsg.k_EMsgServerToGCLockCharmTrading:
      return "k_EMsgServerToGCLockCharmTrading";
    case EDOTAGCMsg.k_EMsgClientToGCPlayerStatsRequest:
      return "k_EMsgClientToGCPlayerStatsRequest";
    case EDOTAGCMsg.k_EMsgGCToClientPlayerStatsResponse:
      return "k_EMsgGCToClientPlayerStatsResponse";
    case EDOTAGCMsg.k_EMsgGCClearPracticeLobbyTeam:
      return "k_EMsgGCClearPracticeLobbyTeam";
    case EDOTAGCMsg.k_EMsgClientToGCFindTopSourceTVGames:
      return "k_EMsgClientToGCFindTopSourceTVGames";
    case EDOTAGCMsg.k_EMsgGCToClientFindTopSourceTVGamesResponse:
      return "k_EMsgGCToClientFindTopSourceTVGamesResponse";
    case EDOTAGCMsg.k_EMsgGCLobbyList:
      return "k_EMsgGCLobbyList";
    case EDOTAGCMsg.k_EMsgGCLobbyListResponse:
      return "k_EMsgGCLobbyListResponse";
    case EDOTAGCMsg.k_EMsgGCPlayerStatsMatchSignOut:
      return "k_EMsgGCPlayerStatsMatchSignOut";
    case EDOTAGCMsg.k_EMsgClientToGCSocialFeedPostCommentRequest:
      return "k_EMsgClientToGCSocialFeedPostCommentRequest";
    case EDOTAGCMsg.k_EMsgGCToClientSocialFeedPostCommentResponse:
      return "k_EMsgGCToClientSocialFeedPostCommentResponse";
    case EDOTAGCMsg.k_EMsgClientToGCCustomGamesFriendsPlayedRequest:
      return "k_EMsgClientToGCCustomGamesFriendsPlayedRequest";
    case EDOTAGCMsg.k_EMsgGCToClientCustomGamesFriendsPlayedResponse:
      return "k_EMsgGCToClientCustomGamesFriendsPlayedResponse";
    case EDOTAGCMsg.k_EMsgClientToGCFriendsPlayedCustomGameRequest:
      return "k_EMsgClientToGCFriendsPlayedCustomGameRequest";
    case EDOTAGCMsg.k_EMsgGCToClientFriendsPlayedCustomGameResponse:
      return "k_EMsgGCToClientFriendsPlayedCustomGameResponse";
    case EDOTAGCMsg.k_EMsgGCTopCustomGamesList:
      return "k_EMsgGCTopCustomGamesList";
    case EDOTAGCMsg.k_EMsgClientToGCSetPartyOpen:
      return "k_EMsgClientToGCSetPartyOpen";
    case EDOTAGCMsg.k_EMsgClientToGCMergePartyInvite:
      return "k_EMsgClientToGCMergePartyInvite";
    case EDOTAGCMsg.k_EMsgGCToClientMergeGroupInviteReply:
      return "k_EMsgGCToClientMergeGroupInviteReply";
    case EDOTAGCMsg.k_EMsgClientToGCMergePartyResponse:
      return "k_EMsgClientToGCMergePartyResponse";
    case EDOTAGCMsg.k_EMsgGCToClientMergePartyResponseReply:
      return "k_EMsgGCToClientMergePartyResponseReply";
    case EDOTAGCMsg.k_EMsgClientToGCGetProfileCardStats:
      return "k_EMsgClientToGCGetProfileCardStats";
    case EDOTAGCMsg.k_EMsgClientToGCGetProfileCardStatsResponse:
      return "k_EMsgClientToGCGetProfileCardStatsResponse";
    case EDOTAGCMsg.k_EMsgClientToGCTopLeagueMatchesRequest:
      return "k_EMsgClientToGCTopLeagueMatchesRequest";
    case EDOTAGCMsg.k_EMsgClientToGCTopFriendMatchesRequest:
      return "k_EMsgClientToGCTopFriendMatchesRequest";
    case EDOTAGCMsg.k_EMsgGCToClientProfileCardStatsUpdated:
      return "k_EMsgGCToClientProfileCardStatsUpdated";
    case EDOTAGCMsg.k_EMsgServerToGCRealtimeStats:
      return "k_EMsgServerToGCRealtimeStats";
    case EDOTAGCMsg.k_EMsgGCToServerRealtimeStatsStartStop:
      return "k_EMsgGCToServerRealtimeStatsStartStop";
    case EDOTAGCMsg.k_EMsgGCToGCGetServersForClients:
      return "k_EMsgGCToGCGetServersForClients";
    case EDOTAGCMsg.k_EMsgGCToGCGetServersForClientsResponse:
      return "k_EMsgGCToGCGetServersForClientsResponse";
    case EDOTAGCMsg.k_EMsgGCPracticeLobbyKickFromTeam:
      return "k_EMsgGCPracticeLobbyKickFromTeam";
    case EDOTAGCMsg.k_EMsgDOTAChatGetMemberCount:
      return "k_EMsgDOTAChatGetMemberCount";
    case EDOTAGCMsg.k_EMsgDOTAChatGetMemberCountResponse:
      return "k_EMsgDOTAChatGetMemberCountResponse";
    case EDOTAGCMsg.k_EMsgClientToGCSocialFeedPostMessageRequest:
      return "k_EMsgClientToGCSocialFeedPostMessageRequest";
    case EDOTAGCMsg.k_EMsgGCToClientSocialFeedPostMessageResponse:
      return "k_EMsgGCToClientSocialFeedPostMessageResponse";
    case EDOTAGCMsg.k_EMsgCustomGameListenServerStartedLoading:
      return "k_EMsgCustomGameListenServerStartedLoading";
    case EDOTAGCMsg.k_EMsgCustomGameClientFinishedLoading:
      return "k_EMsgCustomGameClientFinishedLoading";
    case EDOTAGCMsg.k_EMsgGCPracticeLobbyCloseBroadcastChannel:
      return "k_EMsgGCPracticeLobbyCloseBroadcastChannel";
    case EDOTAGCMsg.k_EMsgGCStartFindingMatchResponse:
      return "k_EMsgGCStartFindingMatchResponse";
    case EDOTAGCMsg.k_EMsgSQLGCToGCGrantAccountFlag:
      return "k_EMsgSQLGCToGCGrantAccountFlag";
    case EDOTAGCMsg.k_EMsgGCToClientTopLeagueMatchesResponse:
      return "k_EMsgGCToClientTopLeagueMatchesResponse";
    case EDOTAGCMsg.k_EMsgGCToClientTopFriendMatchesResponse:
      return "k_EMsgGCToClientTopFriendMatchesResponse";
    case EDOTAGCMsg.k_EMsgClientToGCMatchesMinimalRequest:
      return "k_EMsgClientToGCMatchesMinimalRequest";
    case EDOTAGCMsg.k_EMsgClientToGCMatchesMinimalResponse:
      return "k_EMsgClientToGCMatchesMinimalResponse";
    case EDOTAGCMsg.k_EMsgGCToClientChatRegionsEnabled:
      return "k_EMsgGCToClientChatRegionsEnabled";
    case EDOTAGCMsg.k_EMsgClientToGCPingData:
      return "k_EMsgClientToGCPingData";
    case EDOTAGCMsg.k_EMsgGCToGCEnsureAccountInParty:
      return "k_EMsgGCToGCEnsureAccountInParty";
    case EDOTAGCMsg.k_EMsgGCToGCEnsureAccountInPartyResponse:
      return "k_EMsgGCToGCEnsureAccountInPartyResponse";
    case EDOTAGCMsg.k_EMsgClientToGCGetProfileTickets:
      return "k_EMsgClientToGCGetProfileTickets";
    case EDOTAGCMsg.k_EMsgClientToGCGetProfileTicketsResponse:
      return "k_EMsgClientToGCGetProfileTicketsResponse";
    case EDOTAGCMsg.k_EMsgGCToClientMatchGroupsVersion:
      return "k_EMsgGCToClientMatchGroupsVersion";
    case EDOTAGCMsg.k_EMsgClientToGCH264Unsupported:
      return "k_EMsgClientToGCH264Unsupported";
    case EDOTAGCMsg.k_EMsgClientToGCGetQuestProgress:
      return "k_EMsgClientToGCGetQuestProgress";
    case EDOTAGCMsg.k_EMsgClientToGCGetQuestProgressResponse:
      return "k_EMsgClientToGCGetQuestProgressResponse";
    case EDOTAGCMsg.k_EMsgSignOutXPCoins:
      return "k_EMsgSignOutXPCoins";
    case EDOTAGCMsg.k_EMsgGCToClientMatchSignedOut:
      return "k_EMsgGCToClientMatchSignedOut";
    case EDOTAGCMsg.k_EMsgGCGetHeroStatsHistory:
      return "k_EMsgGCGetHeroStatsHistory";
    case EDOTAGCMsg.k_EMsgGCGetHeroStatsHistoryResponse:
      return "k_EMsgGCGetHeroStatsHistoryResponse";
    case EDOTAGCMsg.k_EMsgClientToGCPrivateChatInvite:
      return "k_EMsgClientToGCPrivateChatInvite";
    case EDOTAGCMsg.k_EMsgClientToGCPrivateChatKick:
      return "k_EMsgClientToGCPrivateChatKick";
    case EDOTAGCMsg.k_EMsgClientToGCPrivateChatPromote:
      return "k_EMsgClientToGCPrivateChatPromote";
    case EDOTAGCMsg.k_EMsgClientToGCPrivateChatDemote:
      return "k_EMsgClientToGCPrivateChatDemote";
    case EDOTAGCMsg.k_EMsgGCToClientPrivateChatResponse:
      return "k_EMsgGCToClientPrivateChatResponse";
    case EDOTAGCMsg.k_EMsgClientToGCLatestConductScorecardRequest:
      return "k_EMsgClientToGCLatestConductScorecardRequest";
    case EDOTAGCMsg.k_EMsgClientToGCLatestConductScorecard:
      return "k_EMsgClientToGCLatestConductScorecard";
    case EDOTAGCMsg.k_EMsgClientToGCWageringRequest:
      return "k_EMsgClientToGCWageringRequest";
    case EDOTAGCMsg.k_EMsgGCToClientWageringResponse:
      return "k_EMsgGCToClientWageringResponse";
    case EDOTAGCMsg.k_EMsgClientToGCEventGoalsRequest:
      return "k_EMsgClientToGCEventGoalsRequest";
    case EDOTAGCMsg.k_EMsgClientToGCEventGoalsResponse:
      return "k_EMsgClientToGCEventGoalsResponse";
    case EDOTAGCMsg.k_EMsgGCToGCLeaguePredictionsUpdate:
      return "k_EMsgGCToGCLeaguePredictionsUpdate";
    case EDOTAGCMsg.k_EMsgGCToGCAddUserToPostGameChat:
      return "k_EMsgGCToGCAddUserToPostGameChat";
    case EDOTAGCMsg.k_EMsgClientToGCHasPlayerVotedForMVP:
      return "k_EMsgClientToGCHasPlayerVotedForMVP";
    case EDOTAGCMsg.k_EMsgClientToGCHasPlayerVotedForMVPResponse:
      return "k_EMsgClientToGCHasPlayerVotedForMVPResponse";
    case EDOTAGCMsg.k_EMsgClientToGCVoteForMVP:
      return "k_EMsgClientToGCVoteForMVP";
    case EDOTAGCMsg.k_EMsgClientToGCVoteForMVPResponse:
      return "k_EMsgClientToGCVoteForMVPResponse";
    case EDOTAGCMsg.k_EMsgGCToGCGetEventOwnership:
      return "k_EMsgGCToGCGetEventOwnership";
    case EDOTAGCMsg.k_EMsgGCToGCGetEventOwnershipResponse:
      return "k_EMsgGCToGCGetEventOwnershipResponse";
    case EDOTAGCMsg.k_EMsgGCToClientAutomatedTournamentStateChange:
      return "k_EMsgGCToClientAutomatedTournamentStateChange";
    case EDOTAGCMsg.k_EMsgClientToGCWeekendTourneyOpts:
      return "k_EMsgClientToGCWeekendTourneyOpts";
    case EDOTAGCMsg.k_EMsgClientToGCWeekendTourneyOptsResponse:
      return "k_EMsgClientToGCWeekendTourneyOptsResponse";
    case EDOTAGCMsg.k_EMsgClientToGCWeekendTourneyLeave:
      return "k_EMsgClientToGCWeekendTourneyLeave";
    case EDOTAGCMsg.k_EMsgClientToGCWeekendTourneyLeaveResponse:
      return "k_EMsgClientToGCWeekendTourneyLeaveResponse";
    case EDOTAGCMsg.k_EMsgClientToGCTeammateStatsRequest:
      return "k_EMsgClientToGCTeammateStatsRequest";
    case EDOTAGCMsg.k_EMsgClientToGCTeammateStatsResponse:
      return "k_EMsgClientToGCTeammateStatsResponse";
    case EDOTAGCMsg.k_EMsgClientToGCGetGiftPermissions:
      return "k_EMsgClientToGCGetGiftPermissions";
    case EDOTAGCMsg.k_EMsgClientToGCGetGiftPermissionsResponse:
      return "k_EMsgClientToGCGetGiftPermissionsResponse";
    case EDOTAGCMsg.k_EMsgClientToGCVoteForArcana:
      return "k_EMsgClientToGCVoteForArcana";
    case EDOTAGCMsg.k_EMsgClientToGCVoteForArcanaResponse:
      return "k_EMsgClientToGCVoteForArcanaResponse";
    case EDOTAGCMsg.k_EMsgClientToGCRequestArcanaVotesRemaining:
      return "k_EMsgClientToGCRequestArcanaVotesRemaining";
    case EDOTAGCMsg.k_EMsgClientToGCRequestArcanaVotesRemainingResponse:
      return "k_EMsgClientToGCRequestArcanaVotesRemainingResponse";
    case EDOTAGCMsg.k_EMsgGCTransferTeamAdminResponse:
      return "k_EMsgGCTransferTeamAdminResponse";
    case EDOTAGCMsg.k_EMsgGCToClientTeamInfo:
      return "k_EMsgGCToClientTeamInfo";
    case EDOTAGCMsg.k_EMsgGCToClientTeamsInfo:
      return "k_EMsgGCToClientTeamsInfo";
    case EDOTAGCMsg.k_EMsgClientToGCMyTeamInfoRequest:
      return "k_EMsgClientToGCMyTeamInfoRequest";
    case EDOTAGCMsg.k_EMsgClientToGCPublishUserStat:
      return "k_EMsgClientToGCPublishUserStat";
    case EDOTAGCMsg.k_EMsgGCToGCSignoutSpendWager:
      return "k_EMsgGCToGCSignoutSpendWager";
    case EDOTAGCMsg.k_EMsgGCSubmitLobbyMVPVote:
      return "k_EMsgGCSubmitLobbyMVPVote";
    case EDOTAGCMsg.k_EMsgGCSubmitLobbyMVPVoteResponse:
      return "k_EMsgGCSubmitLobbyMVPVoteResponse";
    case EDOTAGCMsg.k_EMsgSignOutCommunityGoalProgress:
      return "k_EMsgSignOutCommunityGoalProgress";
    case EDOTAGCMsg.k_EMsgGCToClientLobbyMVPAwarded:
      return "k_EMsgGCToClientLobbyMVPAwarded";
    case EDOTAGCMsg.k_EMsgGCToClientQuestProgressUpdated:
      return "k_EMsgGCToClientQuestProgressUpdated";
    case EDOTAGCMsg.k_EMsgGCToClientWageringUpdate:
      return "k_EMsgGCToClientWageringUpdate";
    case EDOTAGCMsg.k_EMsgGCToClientArcanaVotesUpdate:
      return "k_EMsgGCToClientArcanaVotesUpdate";
    case EDOTAGCMsg.k_EMsgClientToGCSetSpectatorLobbyDetails:
      return "k_EMsgClientToGCSetSpectatorLobbyDetails";
    case EDOTAGCMsg.k_EMsgClientToGCSetSpectatorLobbyDetailsResponse:
      return "k_EMsgClientToGCSetSpectatorLobbyDetailsResponse";
    case EDOTAGCMsg.k_EMsgClientToGCCreateSpectatorLobby:
      return "k_EMsgClientToGCCreateSpectatorLobby";
    case EDOTAGCMsg.k_EMsgClientToGCCreateSpectatorLobbyResponse:
      return "k_EMsgClientToGCCreateSpectatorLobbyResponse";
    case EDOTAGCMsg.k_EMsgClientToGCSpectatorLobbyList:
      return "k_EMsgClientToGCSpectatorLobbyList";
    case EDOTAGCMsg.k_EMsgClientToGCSpectatorLobbyListResponse:
      return "k_EMsgClientToGCSpectatorLobbyListResponse";
    case EDOTAGCMsg.k_EMsgSpectatorLobbyGameDetails:
      return "k_EMsgSpectatorLobbyGameDetails";
    case EDOTAGCMsg.k_EMsgServerToGCCompendiumInGamePredictionResults:
      return "k_EMsgServerToGCCompendiumInGamePredictionResults";
    case EDOTAGCMsg.k_EMsgServerToGCCloseCompendiumInGamePredictionVoting:
      return "k_EMsgServerToGCCloseCompendiumInGamePredictionVoting";
    case EDOTAGCMsg.k_EMsgClientToGCOpenPlayerCardPack:
      return "k_EMsgClientToGCOpenPlayerCardPack";
    case EDOTAGCMsg.k_EMsgClientToGCOpenPlayerCardPackResponse:
      return "k_EMsgClientToGCOpenPlayerCardPackResponse";
    case EDOTAGCMsg.k_EMsgClientToGCSelectCompendiumInGamePrediction:
      return "k_EMsgClientToGCSelectCompendiumInGamePrediction";
    case EDOTAGCMsg.k_EMsgClientToGCSelectCompendiumInGamePredictionResponse:
      return "k_EMsgClientToGCSelectCompendiumInGamePredictionResponse";
    case EDOTAGCMsg.k_EMsgClientToGCWeekendTourneyGetPlayerStats:
      return "k_EMsgClientToGCWeekendTourneyGetPlayerStats";
    case EDOTAGCMsg.k_EMsgClientToGCWeekendTourneyGetPlayerStatsResponse:
      return "k_EMsgClientToGCWeekendTourneyGetPlayerStatsResponse";
    case EDOTAGCMsg.k_EMsgClientToGCRecyclePlayerCard:
      return "k_EMsgClientToGCRecyclePlayerCard";
    case EDOTAGCMsg.k_EMsgClientToGCRecyclePlayerCardResponse:
      return "k_EMsgClientToGCRecyclePlayerCardResponse";
    case EDOTAGCMsg.k_EMsgClientToGCCreatePlayerCardPack:
      return "k_EMsgClientToGCCreatePlayerCardPack";
    case EDOTAGCMsg.k_EMsgClientToGCCreatePlayerCardPackResponse:
      return "k_EMsgClientToGCCreatePlayerCardPackResponse";
    case EDOTAGCMsg.k_EMsgClientToGCGetPlayerCardRosterRequest:
      return "k_EMsgClientToGCGetPlayerCardRosterRequest";
    case EDOTAGCMsg.k_EMsgClientToGCGetPlayerCardRosterResponse:
      return "k_EMsgClientToGCGetPlayerCardRosterResponse";
    case EDOTAGCMsg.k_EMsgClientToGCSetPlayerCardRosterRequest:
      return "k_EMsgClientToGCSetPlayerCardRosterRequest";
    case EDOTAGCMsg.k_EMsgClientToGCSetPlayerCardRosterResponse:
      return "k_EMsgClientToGCSetPlayerCardRosterResponse";
    case EDOTAGCMsg.k_EMsgServerToGCCloseCompendiumInGamePredictionVotingResponse:
      return "k_EMsgServerToGCCloseCompendiumInGamePredictionVotingResponse";
    case EDOTAGCMsg.k_EMsgLobbyBattleCupVictory:
      return "k_EMsgLobbyBattleCupVictory";
    case EDOTAGCMsg.k_EMsgGCGetPlayerCardItemInfo:
      return "k_EMsgGCGetPlayerCardItemInfo";
    case EDOTAGCMsg.k_EMsgGCGetPlayerCardItemInfoResponse:
      return "k_EMsgGCGetPlayerCardItemInfoResponse";
    case EDOTAGCMsg.k_EMsgClientToGCRequestSteamDatagramTicket:
      return "k_EMsgClientToGCRequestSteamDatagramTicket";
    case EDOTAGCMsg.k_EMsgClientToGCRequestSteamDatagramTicketResponse:
      return "k_EMsgClientToGCRequestSteamDatagramTicketResponse";
    case EDOTAGCMsg.k_EMsgGCToClientBattlePassRollupRequest:
      return "k_EMsgGCToClientBattlePassRollupRequest";
    case EDOTAGCMsg.k_EMsgGCToClientBattlePassRollupResponse:
      return "k_EMsgGCToClientBattlePassRollupResponse";
    case EDOTAGCMsg.k_EMsgClientToGCTransferSeasonalMMRRequest:
      return "k_EMsgClientToGCTransferSeasonalMMRRequest";
    case EDOTAGCMsg.k_EMsgClientToGCTransferSeasonalMMRResponse:
      return "k_EMsgClientToGCTransferSeasonalMMRResponse";
    case EDOTAGCMsg.k_EMsgGCToGCPublicChatCommunicationBan:
      return "k_EMsgGCToGCPublicChatCommunicationBan";
    case EDOTAGCMsg.k_EMsgGCToGCUpdateAccountInfo:
      return "k_EMsgGCToGCUpdateAccountInfo";
    case EDOTAGCMsg.k_EMsgGCChatReportPublicSpam:
      return "k_EMsgGCChatReportPublicSpam";
    case EDOTAGCMsg.k_EMsgClientToGCSetPartyBuilderOptions:
      return "k_EMsgClientToGCSetPartyBuilderOptions";
    case EDOTAGCMsg.k_EMsgClientToGCSetPartyBuilderOptionsResponse:
      return "k_EMsgClientToGCSetPartyBuilderOptionsResponse";
    case EDOTAGCMsg.k_EMsgGCToClientPlaytestStatus:
      return "k_EMsgGCToClientPlaytestStatus";
    case EDOTAGCMsg.k_EMsgClientToGCJoinPlaytest:
      return "k_EMsgClientToGCJoinPlaytest";
    case EDOTAGCMsg.k_EMsgClientToGCJoinPlaytestResponse:
      return "k_EMsgClientToGCJoinPlaytestResponse";
    case EDOTAGCMsg.k_EMsgLobbyPlaytestDetails:
      return "k_EMsgLobbyPlaytestDetails";
    case EDOTAGCMsg.k_EMsgDOTASetFavoriteTeam:
      return "k_EMsgDOTASetFavoriteTeam";
    case EDOTAGCMsg.k_EMsgGCToClientBattlePassRollupListRequest:
      return "k_EMsgGCToClientBattlePassRollupListRequest";
    case EDOTAGCMsg.k_EMsgGCToClientBattlePassRollupListResponse:
      return "k_EMsgGCToClientBattlePassRollupListResponse";
    case EDOTAGCMsg.k_EMsgDOTAClaimEventAction:
      return "k_EMsgDOTAClaimEventAction";
    case EDOTAGCMsg.k_EMsgDOTAClaimEventActionResponse:
      return "k_EMsgDOTAClaimEventActionResponse";
    case EDOTAGCMsg.k_EMsgDOTAGetPeriodicResource:
      return "k_EMsgDOTAGetPeriodicResource";
    case EDOTAGCMsg.k_EMsgDOTAGetPeriodicResourceResponse:
      return "k_EMsgDOTAGetPeriodicResourceResponse";
    case EDOTAGCMsg.k_EMsgDOTAPeriodicResourceUpdated:
      return "k_EMsgDOTAPeriodicResourceUpdated";
    case EDOTAGCMsg.k_EMsgServerToGCSpendWager:
      return "k_EMsgServerToGCSpendWager";
    case EDOTAGCMsg.k_EMsgGCToGCSignoutSpendWagerToken:
      return "k_EMsgGCToGCSignoutSpendWagerToken";
    case EDOTAGCMsg.k_EMsgSubmitTriviaQuestionAnswer:
      return "k_EMsgSubmitTriviaQuestionAnswer";
    case EDOTAGCMsg.k_EMsgSubmitTriviaQuestionAnswerResponse:
      return "k_EMsgSubmitTriviaQuestionAnswerResponse";
    case EDOTAGCMsg.k_EMsgClientToGCGiveTip:
      return "k_EMsgClientToGCGiveTip";
    case EDOTAGCMsg.k_EMsgClientToGCGiveTipResponse:
      return "k_EMsgClientToGCGiveTipResponse";
    case EDOTAGCMsg.k_EMsgStartTriviaSession:
      return "k_EMsgStartTriviaSession";
    case EDOTAGCMsg.k_EMsgStartTriviaSessionResponse:
      return "k_EMsgStartTriviaSessionResponse";
    case EDOTAGCMsg.k_EMsgAnchorPhoneNumberRequest:
      return "k_EMsgAnchorPhoneNumberRequest";
    case EDOTAGCMsg.k_EMsgAnchorPhoneNumberResponse:
      return "k_EMsgAnchorPhoneNumberResponse";
    case EDOTAGCMsg.k_EMsgUnanchorPhoneNumberRequest:
      return "k_EMsgUnanchorPhoneNumberRequest";
    case EDOTAGCMsg.k_EMsgUnanchorPhoneNumberResponse:
      return "k_EMsgUnanchorPhoneNumberResponse";
    case EDOTAGCMsg.k_EMsgGCToGCSignoutSpendRankWager:
      return "k_EMsgGCToGCSignoutSpendRankWager";
    case EDOTAGCMsg.k_EMsgGCToGCGetFavoriteTeam:
      return "k_EMsgGCToGCGetFavoriteTeam";
    case EDOTAGCMsg.k_EMsgGCToGCGetFavoriteTeamResponse:
      return "k_EMsgGCToGCGetFavoriteTeamResponse";
    case EDOTAGCMsg.k_EMsgSignOutEventGameData:
      return "k_EMsgSignOutEventGameData";
    case EDOTAGCMsg.k_EMsgClientToGCQuickStatsRequest:
      return "k_EMsgClientToGCQuickStatsRequest";
    case EDOTAGCMsg.k_EMsgClientToGCQuickStatsResponse:
      return "k_EMsgClientToGCQuickStatsResponse";
    case EDOTAGCMsg.k_EMsgGCToGCSubtractEventPointsFromUser:
      return "k_EMsgGCToGCSubtractEventPointsFromUser";
    case EDOTAGCMsg.k_EMsgSelectionPriorityChoiceRequest:
      return "k_EMsgSelectionPriorityChoiceRequest";
    case EDOTAGCMsg.k_EMsgSelectionPriorityChoiceResponse:
      return "k_EMsgSelectionPriorityChoiceResponse";
    case EDOTAGCMsg.k_EMsgGCToGCCompendiumInGamePredictionResults:
      return "k_EMsgGCToGCCompendiumInGamePredictionResults";
    case EDOTAGCMsg.k_EMsgGameAutographReward:
      return "k_EMsgGameAutographReward";
    case EDOTAGCMsg.k_EMsgGameAutographRewardResponse:
      return "k_EMsgGameAutographRewardResponse";
    case EDOTAGCMsg.k_EMsgDestroyLobbyRequest:
      return "k_EMsgDestroyLobbyRequest";
    case EDOTAGCMsg.k_EMsgDestroyLobbyResponse:
      return "k_EMsgDestroyLobbyResponse";
    case EDOTAGCMsg.k_EMsgPurchaseItemWithEventPoints:
      return "k_EMsgPurchaseItemWithEventPoints";
    case EDOTAGCMsg.k_EMsgPurchaseItemWithEventPointsResponse:
      return "k_EMsgPurchaseItemWithEventPointsResponse";
    case EDOTAGCMsg.k_EMsgServerToGCMatchPlayerItemPurchaseHistory:
      return "k_EMsgServerToGCMatchPlayerItemPurchaseHistory";
    case EDOTAGCMsg.k_EMsgGCToGCGrantPlusHeroMatchResults:
      return "k_EMsgGCToGCGrantPlusHeroMatchResults";
    case EDOTAGCMsg.k_EMsgServerToGCMatchStateHistory:
      return "k_EMsgServerToGCMatchStateHistory";
    case EDOTAGCMsg.k_EMsgPurchaseHeroRandomRelic:
      return "k_EMsgPurchaseHeroRandomRelic";
    case EDOTAGCMsg.k_EMsgPurchaseHeroRandomRelicResponse:
      return "k_EMsgPurchaseHeroRandomRelicResponse";
    case EDOTAGCMsg.k_EMsgClientToGCClaimEventActionUsingItem:
      return "k_EMsgClientToGCClaimEventActionUsingItem";
    case EDOTAGCMsg.k_EMsgClientToGCClaimEventActionUsingItemResponse:
      return "k_EMsgClientToGCClaimEventActionUsingItemResponse";
    case EDOTAGCMsg.k_EMsgPartyReadyCheckRequest:
      return "k_EMsgPartyReadyCheckRequest";
    case EDOTAGCMsg.k_EMsgPartyReadyCheckResponse:
      return "k_EMsgPartyReadyCheckResponse";
    case EDOTAGCMsg.k_EMsgPartyReadyCheckAcknowledge:
      return "k_EMsgPartyReadyCheckAcknowledge";
    case EDOTAGCMsg.k_EMsgGetRecentPlayTimeFriendsRequest:
      return "k_EMsgGetRecentPlayTimeFriendsRequest";
    case EDOTAGCMsg.k_EMsgGetRecentPlayTimeFriendsResponse:
      return "k_EMsgGetRecentPlayTimeFriendsResponse";
    case EDOTAGCMsg.k_EMsgGCToClientCommendNotification:
      return "k_EMsgGCToClientCommendNotification";
    case EDOTAGCMsg.k_EMsgProfileRequest:
      return "k_EMsgProfileRequest";
    case EDOTAGCMsg.k_EMsgProfileResponse:
      return "k_EMsgProfileResponse";
    case EDOTAGCMsg.k_EMsgProfileUpdate:
      return "k_EMsgProfileUpdate";
    case EDOTAGCMsg.k_EMsgProfileUpdateResponse:
      return "k_EMsgProfileUpdateResponse";
    case EDOTAGCMsg.k_EMsgHeroGlobalDataRequest:
      return "k_EMsgHeroGlobalDataRequest";
    case EDOTAGCMsg.k_EMsgHeroGlobalDataResponse:
      return "k_EMsgHeroGlobalDataResponse";
    case EDOTAGCMsg.k_EMsgClientToGCRequestPlusWeeklyChallengeResult:
      return "k_EMsgClientToGCRequestPlusWeeklyChallengeResult";
    case EDOTAGCMsg.k_EMsgClientToGCRequestPlusWeeklyChallengeResultResponse:
      return "k_EMsgClientToGCRequestPlusWeeklyChallengeResultResponse";
    case EDOTAGCMsg.k_EMsgGCToGCGrantPlusPrepaidTime:
      return "k_EMsgGCToGCGrantPlusPrepaidTime";
    case EDOTAGCMsg.k_EMsgPrivateMetadataKeyRequest:
      return "k_EMsgPrivateMetadataKeyRequest";
    case EDOTAGCMsg.k_EMsgPrivateMetadataKeyResponse:
      return "k_EMsgPrivateMetadataKeyResponse";
    case EDOTAGCMsg.k_EMsgGCToGCReconcilePlusStatus:
      return "k_EMsgGCToGCReconcilePlusStatus";
    case EDOTAGCMsg.k_EMsgGCToGCCheckPlusStatus:
      return "k_EMsgGCToGCCheckPlusStatus";
    case EDOTAGCMsg.k_EMsgGCToGCCheckPlusStatusResponse:
      return "k_EMsgGCToGCCheckPlusStatusResponse";
    case EDOTAGCMsg.k_EMsgGCToGCReconcilePlusAutoGrantItems:
      return "k_EMsgGCToGCReconcilePlusAutoGrantItems";
    case EDOTAGCMsg.k_EMsgGCToGCReconcilePlusStatusUnreliable:
      return "k_EMsgGCToGCReconcilePlusStatusUnreliable";
    case EDOTAGCMsg.k_EMsgGCToClientCavernCrawlMapPathCompleted:
      return "k_EMsgGCToClientCavernCrawlMapPathCompleted";
    case EDOTAGCMsg.k_EMsgClientToGCCavernCrawlClaimRoom:
      return "k_EMsgClientToGCCavernCrawlClaimRoom";
    case EDOTAGCMsg.k_EMsgClientToGCCavernCrawlClaimRoomResponse:
      return "k_EMsgClientToGCCavernCrawlClaimRoomResponse";
    case EDOTAGCMsg.k_EMsgClientToGCCavernCrawlUseItemOnRoom:
      return "k_EMsgClientToGCCavernCrawlUseItemOnRoom";
    case EDOTAGCMsg.k_EMsgClientToGCCavernCrawlUseItemOnRoomResponse:
      return "k_EMsgClientToGCCavernCrawlUseItemOnRoomResponse";
    case EDOTAGCMsg.k_EMsgClientToGCCavernCrawlUseItemOnPath:
      return "k_EMsgClientToGCCavernCrawlUseItemOnPath";
    case EDOTAGCMsg.k_EMsgClientToGCCavernCrawlUseItemOnPathResponse:
      return "k_EMsgClientToGCCavernCrawlUseItemOnPathResponse";
    case EDOTAGCMsg.k_EMsgClientToGCCavernCrawlRequestMapState:
      return "k_EMsgClientToGCCavernCrawlRequestMapState";
    case EDOTAGCMsg.k_EMsgClientToGCCavernCrawlRequestMapStateResponse:
      return "k_EMsgClientToGCCavernCrawlRequestMapStateResponse";
    case EDOTAGCMsg.k_EMsgSignOutTips:
      return "k_EMsgSignOutTips";
    case EDOTAGCMsg.k_EMsgClientToGCRequestEventPointLogV2:
      return "k_EMsgClientToGCRequestEventPointLogV2";
    case EDOTAGCMsg.k_EMsgClientToGCRequestEventPointLogResponseV2:
      return "k_EMsgClientToGCRequestEventPointLogResponseV2";
    case EDOTAGCMsg.k_EMsgClientToGCRequestEventTipsSummary:
      return "k_EMsgClientToGCRequestEventTipsSummary";
    case EDOTAGCMsg.k_EMsgClientToGCRequestEventTipsSummaryResponse:
      return "k_EMsgClientToGCRequestEventTipsSummaryResponse";
    case EDOTAGCMsg.k_EMsgClientToGCRequestSocialFeed:
      return "k_EMsgClientToGCRequestSocialFeed";
    case EDOTAGCMsg.k_EMsgClientToGCRequestSocialFeedResponse:
      return "k_EMsgClientToGCRequestSocialFeedResponse";
    case EDOTAGCMsg.k_EMsgClientToGCRequestSocialFeedComments:
      return "k_EMsgClientToGCRequestSocialFeedComments";
    case EDOTAGCMsg.k_EMsgClientToGCRequestSocialFeedCommentsResponse:
      return "k_EMsgClientToGCRequestSocialFeedCommentsResponse";
    case EDOTAGCMsg.k_EMsgClientToGCCavernCrawlGetClaimedRoomCount:
      return "k_EMsgClientToGCCavernCrawlGetClaimedRoomCount";
    case EDOTAGCMsg.k_EMsgClientToGCCavernCrawlGetClaimedRoomCountResponse:
      return "k_EMsgClientToGCCavernCrawlGetClaimedRoomCountResponse";
    case EDOTAGCMsg.k_EMsgGCToGCReconcilePlusAutoGrantItemsUnreliable:
      return "k_EMsgGCToGCReconcilePlusAutoGrantItemsUnreliable";
    case EDOTAGCMsg.k_EMsgServerToGCAddBroadcastTimelineEvent:
      return "k_EMsgServerToGCAddBroadcastTimelineEvent";
    case EDOTAGCMsg.k_EMsgGCToServerUpdateSteamBroadcasting:
      return "k_EMsgGCToServerUpdateSteamBroadcasting";
    case EDOTAGCMsg.k_EMsgClientToGCRecordContestVote:
      return "k_EMsgClientToGCRecordContestVote";
    case EDOTAGCMsg.k_EMsgGCToClientRecordContestVoteResponse:
      return "k_EMsgGCToClientRecordContestVoteResponse";
    case EDOTAGCMsg.k_EMsgGCToGCGrantAutograph:
      return "k_EMsgGCToGCGrantAutograph";
    case EDOTAGCMsg.k_EMsgGCToGCGrantAutographResponse:
      return "k_EMsgGCToGCGrantAutographResponse";
    case EDOTAGCMsg.k_EMsgSignOutConsumableUsage:
      return "k_EMsgSignOutConsumableUsage";
    case EDOTAGCMsg.k_EMsgLobbyEventGameDetails:
      return "k_EMsgLobbyEventGameDetails";
    case EDOTAGCMsg.k_EMsgDevGrantEventPoints:
      return "k_EMsgDevGrantEventPoints";
    case EDOTAGCMsg.k_EMsgDevGrantEventPointsResponse:
      return "k_EMsgDevGrantEventPointsResponse";
    case EDOTAGCMsg.k_EMsgDevGrantEventAction:
      return "k_EMsgDevGrantEventAction";
    case EDOTAGCMsg.k_EMsgDevGrantEventActionResponse:
      return "k_EMsgDevGrantEventActionResponse";
    case EDOTAGCMsg.k_EMsgDevResetEventState:
      return "k_EMsgDevResetEventState";
    case EDOTAGCMsg.k_EMsgDevResetEventStateResponse:
      return "k_EMsgDevResetEventStateResponse";
    case EDOTAGCMsg.k_EMsgGCToGCReconcileEventOwnership:
      return "k_EMsgGCToGCReconcileEventOwnership";
    case EDOTAGCMsg.k_EMsgConsumeEventSupportGrantItem:
      return "k_EMsgConsumeEventSupportGrantItem";
    case EDOTAGCMsg.k_EMsgConsumeEventSupportGrantItemResponse:
      return "k_EMsgConsumeEventSupportGrantItemResponse";
    case EDOTAGCMsg.k_EMsgGCToClientClaimEventActionUsingItemCompleted:
      return "k_EMsgGCToClientClaimEventActionUsingItemCompleted";
    case EDOTAGCMsg.k_EMsgGCToClientCavernCrawlMapUpdated:
      return "k_EMsgGCToClientCavernCrawlMapUpdated";
    case EDOTAGCMsg.k_EMsgServerToGCRequestPlayerRecentAccomplishments:
      return "k_EMsgServerToGCRequestPlayerRecentAccomplishments";
    case EDOTAGCMsg.k_EMsgServerToGCRequestPlayerRecentAccomplishmentsResponse:
      return "k_EMsgServerToGCRequestPlayerRecentAccomplishmentsResponse";
    case EDOTAGCMsg.k_EMsgClientToGCRequestPlayerRecentAccomplishments:
      return "k_EMsgClientToGCRequestPlayerRecentAccomplishments";
    case EDOTAGCMsg.k_EMsgClientToGCRequestPlayerRecentAccomplishmentsResponse:
      return "k_EMsgClientToGCRequestPlayerRecentAccomplishmentsResponse";
    case EDOTAGCMsg.k_EMsgClientToGCRequestPlayerHeroRecentAccomplishments:
      return "k_EMsgClientToGCRequestPlayerHeroRecentAccomplishments";
    case EDOTAGCMsg.k_EMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse:
      return "k_EMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse";
    case EDOTAGCMsg.k_EMsgSignOutEventActionGrants:
      return "k_EMsgSignOutEventActionGrants";
    case EDOTAGCMsg.k_EMsgClientToGCRequestPlayerCoachMatches:
      return "k_EMsgClientToGCRequestPlayerCoachMatches";
    case EDOTAGCMsg.k_EMsgClientToGCRequestPlayerCoachMatchesResponse:
      return "k_EMsgClientToGCRequestPlayerCoachMatchesResponse";
    case EDOTAGCMsg.k_EMsgClientToGCSubmitCoachTeammateRating:
      return "k_EMsgClientToGCSubmitCoachTeammateRating";
    case EDOTAGCMsg.k_EMsgClientToGCSubmitCoachTeammateRatingResponse:
      return "k_EMsgClientToGCSubmitCoachTeammateRatingResponse";
    case EDOTAGCMsg.k_EMsgGCToClientCoachTeammateRatingsChanged:
      return "k_EMsgGCToClientCoachTeammateRatingsChanged";
    case EDOTAGCMsg.k_EMsgClientToGCRequestPlayerCoachMatch:
      return "k_EMsgClientToGCRequestPlayerCoachMatch";
    case EDOTAGCMsg.k_EMsgClientToGCRequestPlayerCoachMatchResponse:
      return "k_EMsgClientToGCRequestPlayerCoachMatchResponse";
    case EDOTAGCMsg.k_EMsgClientToGCRequestContestVotes:
      return "k_EMsgClientToGCRequestContestVotes";
    case EDOTAGCMsg.k_EMsgClientToGCRequestContestVotesResponse:
      return "k_EMsgClientToGCRequestContestVotesResponse";
    case EDOTAGCMsg.k_EMsgClientToGCMVPVoteTimeout:
      return "k_EMsgClientToGCMVPVoteTimeout";
    case EDOTAGCMsg.k_EMsgClientToGCMVPVoteTimeoutResponse:
      return "k_EMsgClientToGCMVPVoteTimeoutResponse";
    case EDOTAGCMsg.k_EMsgDetailedGameStats:
      return "k_EMsgDetailedGameStats";
    case EDOTAGCMsg.k_EMsgMatchMatchmakingStats:
      return "k_EMsgMatchMatchmakingStats";
    case EDOTAGCMsg.k_EMsgClientToGCSubmitPlayerMatchSurvey:
      return "k_EMsgClientToGCSubmitPlayerMatchSurvey";
    case EDOTAGCMsg.k_EMsgClientToGCSubmitPlayerMatchSurveyResponse:
      return "k_EMsgClientToGCSubmitPlayerMatchSurveyResponse";
    case EDOTAGCMsg.k_EMsgSQLGCToGCGrantAllHeroProgressAccount:
      return "k_EMsgSQLGCToGCGrantAllHeroProgressAccount";
    case EDOTAGCMsg.k_EMsgSQLGCToGCGrantAllHeroProgressVictory:
      return "k_EMsgSQLGCToGCGrantAllHeroProgressVictory";
    case EDOTAGCMsg.k_EMsgDevDeleteEventActions:
      return "k_EMsgDevDeleteEventActions";
    case EDOTAGCMsg.k_EMsgDevDeleteEventActionsResponse:
      return "k_EMsgDevDeleteEventActionsResponse";
    case EDOTAGCMsg.k_EMsgGCToGCGetAllHeroCurrent:
      return "k_EMsgGCToGCGetAllHeroCurrent";
    case EDOTAGCMsg.k_EMsgGCToGCGetAllHeroCurrentResponse:
      return "k_EMsgGCToGCGetAllHeroCurrentResponse";
    case EDOTAGCMsg.k_EMsgGCSubmitPlayerAvoidRequest:
      return "k_EMsgGCSubmitPlayerAvoidRequest";
    case EDOTAGCMsg.k_EMsgGCSubmitPlayerAvoidRequestResponse:
      return "k_EMsgGCSubmitPlayerAvoidRequestResponse";
    case EDOTAGCMsg.k_EMsgGCToClientNotificationsUpdated:
      return "k_EMsgGCToClientNotificationsUpdated";
    case EDOTAGCMsg.k_EMsgGCtoGCAssociatedExploiterAccountInfo:
      return "k_EMsgGCtoGCAssociatedExploiterAccountInfo";
    case EDOTAGCMsg.k_EMsgGCtoGCAssociatedExploiterAccountInfoResponse:
      return "k_EMsgGCtoGCAssociatedExploiterAccountInfoResponse";
    case EDOTAGCMsg.k_EMsgGCtoGCRequestRecalibrationCheck:
      return "k_EMsgGCtoGCRequestRecalibrationCheck";
    case EDOTAGCMsg.k_EMsgGCToClientVACReminder:
      return "k_EMsgGCToClientVACReminder";
    case EDOTAGCMsg.k_EMsgClientToGCUnderDraftBuy:
      return "k_EMsgClientToGCUnderDraftBuy";
    case EDOTAGCMsg.k_EMsgClientToGCUnderDraftBuyResponse:
      return "k_EMsgClientToGCUnderDraftBuyResponse";
    case EDOTAGCMsg.k_EMsgClientToGCUnderDraftReroll:
      return "k_EMsgClientToGCUnderDraftReroll";
    case EDOTAGCMsg.k_EMsgClientToGCUnderDraftRerollResponse:
      return "k_EMsgClientToGCUnderDraftRerollResponse";
    case EDOTAGCMsg.k_EMsgNeutralItemStats:
      return "k_EMsgNeutralItemStats";
    case EDOTAGCMsg.k_EMsgClientToGCCreateGuild:
      return "k_EMsgClientToGCCreateGuild";
    case EDOTAGCMsg.k_EMsgClientToGCCreateGuildResponse:
      return "k_EMsgClientToGCCreateGuildResponse";
    case EDOTAGCMsg.k_EMsgClientToGCSetGuildInfo:
      return "k_EMsgClientToGCSetGuildInfo";
    case EDOTAGCMsg.k_EMsgClientToGCSetGuildInfoResponse:
      return "k_EMsgClientToGCSetGuildInfoResponse";
    case EDOTAGCMsg.k_EMsgClientToGCAddGuildRole:
      return "k_EMsgClientToGCAddGuildRole";
    case EDOTAGCMsg.k_EMsgClientToGCAddGuildRoleResponse:
      return "k_EMsgClientToGCAddGuildRoleResponse";
    case EDOTAGCMsg.k_EMsgClientToGCModifyGuildRole:
      return "k_EMsgClientToGCModifyGuildRole";
    case EDOTAGCMsg.k_EMsgClientToGCModifyGuildRoleResponse:
      return "k_EMsgClientToGCModifyGuildRoleResponse";
    case EDOTAGCMsg.k_EMsgClientToGCRemoveGuildRole:
      return "k_EMsgClientToGCRemoveGuildRole";
    case EDOTAGCMsg.k_EMsgClientToGCRemoveGuildRoleResponse:
      return "k_EMsgClientToGCRemoveGuildRoleResponse";
    case EDOTAGCMsg.k_EMsgClientToGCJoinGuild:
      return "k_EMsgClientToGCJoinGuild";
    case EDOTAGCMsg.k_EMsgClientToGCJoinGuildResponse:
      return "k_EMsgClientToGCJoinGuildResponse";
    case EDOTAGCMsg.k_EMsgClientToGCLeaveGuild:
      return "k_EMsgClientToGCLeaveGuild";
    case EDOTAGCMsg.k_EMsgClientToGCLeaveGuildResponse:
      return "k_EMsgClientToGCLeaveGuildResponse";
    case EDOTAGCMsg.k_EMsgClientToGCInviteToGuild:
      return "k_EMsgClientToGCInviteToGuild";
    case EDOTAGCMsg.k_EMsgClientToGCInviteToGuildResponse:
      return "k_EMsgClientToGCInviteToGuildResponse";
    case EDOTAGCMsg.k_EMsgClientToGCDeclineInviteToGuild:
      return "k_EMsgClientToGCDeclineInviteToGuild";
    case EDOTAGCMsg.k_EMsgClientToGCDeclineInviteToGuildResponse:
      return "k_EMsgClientToGCDeclineInviteToGuildResponse";
    case EDOTAGCMsg.k_EMsgClientToGCCancelInviteToGuild:
      return "k_EMsgClientToGCCancelInviteToGuild";
    case EDOTAGCMsg.k_EMsgClientToGCCancelInviteToGuildResponse:
      return "k_EMsgClientToGCCancelInviteToGuildResponse";
    case EDOTAGCMsg.k_EMsgClientToGCKickGuildMember:
      return "k_EMsgClientToGCKickGuildMember";
    case EDOTAGCMsg.k_EMsgClientToGCKickGuildMemberResponse:
      return "k_EMsgClientToGCKickGuildMemberResponse";
    case EDOTAGCMsg.k_EMsgClientToGCSetGuildMemberRole:
      return "k_EMsgClientToGCSetGuildMemberRole";
    case EDOTAGCMsg.k_EMsgClientToGCSetGuildMemberRoleResponse:
      return "k_EMsgClientToGCSetGuildMemberRoleResponse";
    case EDOTAGCMsg.k_EMsgClientToGCRequestGuildData:
      return "k_EMsgClientToGCRequestGuildData";
    case EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse:
      return "k_EMsgClientToGCRequestGuildDataResponse";
    case EDOTAGCMsg.k_EMsgGCToClientGuildDataUpdated:
      return "k_EMsgGCToClientGuildDataUpdated";
    case EDOTAGCMsg.k_EMsgClientToGCRequestGuildMembership:
      return "k_EMsgClientToGCRequestGuildMembership";
    case EDOTAGCMsg.k_EMsgClientToGCRequestGuildMembershipResponse:
      return "k_EMsgClientToGCRequestGuildMembershipResponse";
    case EDOTAGCMsg.k_EMsgGCToClientGuildMembershipUpdated:
      return "k_EMsgGCToClientGuildMembershipUpdated";
    case EDOTAGCMsg.k_EMsgClientToGCAcceptInviteToGuild:
      return "k_EMsgClientToGCAcceptInviteToGuild";
    case EDOTAGCMsg.k_EMsgClientToGCAcceptInviteToGuildResponse:
      return "k_EMsgClientToGCAcceptInviteToGuildResponse";
    case EDOTAGCMsg.k_EMsgClientToGCSetGuildRoleOrder:
      return "k_EMsgClientToGCSetGuildRoleOrder";
    case EDOTAGCMsg.k_EMsgClientToGCSetGuildRoleOrderResponse:
      return "k_EMsgClientToGCSetGuildRoleOrderResponse";
    case EDOTAGCMsg.k_EMsgClientToGCRequestGuildFeed:
      return "k_EMsgClientToGCRequestGuildFeed";
    case EDOTAGCMsg.k_EMsgClientToGCRequestGuildFeedResponse:
      return "k_EMsgClientToGCRequestGuildFeedResponse";
    case EDOTAGCMsg.k_EMsgClientToGCRequestAccountGuildEventData:
      return "k_EMsgClientToGCRequestAccountGuildEventData";
    case EDOTAGCMsg.k_EMsgClientToGCRequestAccountGuildEventDataResponse:
      return "k_EMsgClientToGCRequestAccountGuildEventDataResponse";
    case EDOTAGCMsg.k_EMsgGCToClientAccountGuildEventDataUpdated:
      return "k_EMsgGCToClientAccountGuildEventDataUpdated";
    case EDOTAGCMsg.k_EMsgClientToGCRequestActiveGuildContracts:
      return "k_EMsgClientToGCRequestActiveGuildContracts";
    case EDOTAGCMsg.k_EMsgClientToGCRequestActiveGuildContractsResponse:
      return "k_EMsgClientToGCRequestActiveGuildContractsResponse";
    case EDOTAGCMsg.k_EMsgGCToClientActiveGuildContractsUpdated:
      return "k_EMsgGCToClientActiveGuildContractsUpdated";
    case EDOTAGCMsg.k_EMsgGCToClientGuildFeedUpdated:
      return "k_EMsgGCToClientGuildFeedUpdated";
    case EDOTAGCMsg.k_EMsgClientToGCSelectGuildContract:
      return "k_EMsgClientToGCSelectGuildContract";
    case EDOTAGCMsg.k_EMsgClientToGCSelectGuildContractResponse:
      return "k_EMsgClientToGCSelectGuildContractResponse";
    case EDOTAGCMsg.k_EMsgGCToGCCompleteGuildContracts:
      return "k_EMsgGCToGCCompleteGuildContracts";
    case EDOTAGCMsg.k_EMsgClientToGCAddPlayerToGuildChat:
      return "k_EMsgClientToGCAddPlayerToGuildChat";
    case EDOTAGCMsg.k_EMsgClientToGCAddPlayerToGuildChatResponse:
      return "k_EMsgClientToGCAddPlayerToGuildChatResponse";
    case EDOTAGCMsg.k_EMsgClientToGCUnderDraftSell:
      return "k_EMsgClientToGCUnderDraftSell";
    case EDOTAGCMsg.k_EMsgClientToGCUnderDraftSellResponse:
      return "k_EMsgClientToGCUnderDraftSellResponse";
    case EDOTAGCMsg.k_EMsgClientToGCUnderDraftRequest:
      return "k_EMsgClientToGCUnderDraftRequest";
    case EDOTAGCMsg.k_EMsgClientToGCUnderDraftResponse:
      return "k_EMsgClientToGCUnderDraftResponse";
    case EDOTAGCMsg.k_EMsgClientToGCUnderDraftRedeemReward:
      return "k_EMsgClientToGCUnderDraftRedeemReward";
    case EDOTAGCMsg.k_EMsgClientToGCUnderDraftRedeemRewardResponse:
      return "k_EMsgClientToGCUnderDraftRedeemRewardResponse";
    case EDOTAGCMsg.k_EMsgGCToServerLobbyHeroBanRates:
      return "k_EMsgGCToServerLobbyHeroBanRates";
    case EDOTAGCMsg.k_EMsgSignOutGuildContractProgress:
      return "k_EMsgSignOutGuildContractProgress";
    case EDOTAGCMsg.k_EMsgSignOutMVPStats:
      return "k_EMsgSignOutMVPStats";
    case EDOTAGCMsg.k_EMsgClientToGCRequestActiveGuildChallenge:
      return "k_EMsgClientToGCRequestActiveGuildChallenge";
    case EDOTAGCMsg.k_EMsgClientToGCRequestActiveGuildChallengeResponse:
      return "k_EMsgClientToGCRequestActiveGuildChallengeResponse";
    case EDOTAGCMsg.k_EMsgGCToClientActiveGuildChallengeUpdated:
      return "k_EMsgGCToClientActiveGuildChallengeUpdated";
    case EDOTAGCMsg.k_EMsgSignOutGuildChallengeProgress:
      return "k_EMsgSignOutGuildChallengeProgress";
    case EDOTAGCMsg.k_EMsgClientToGCRequestGuildEventMembers:
      return "k_EMsgClientToGCRequestGuildEventMembers";
    case EDOTAGCMsg.k_EMsgClientToGCRequestGuildEventMembersResponse:
      return "k_EMsgClientToGCRequestGuildEventMembersResponse";
    case EDOTAGCMsg.k_EMsgClientToGCReportGuildContent:
      return "k_EMsgClientToGCReportGuildContent";
    case EDOTAGCMsg.k_EMsgClientToGCReportGuildContentResponse:
      return "k_EMsgClientToGCReportGuildContentResponse";
    case EDOTAGCMsg.k_EMsgClientToGCRequestAccountGuildPersonaInfo:
      return "k_EMsgClientToGCRequestAccountGuildPersonaInfo";
    case EDOTAGCMsg.k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse:
      return "k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse";
    case EDOTAGCMsg.k_EMsgClientToGCRequestAccountGuildPersonaInfoBatch:
      return "k_EMsgClientToGCRequestAccountGuildPersonaInfoBatch";
    case EDOTAGCMsg.k_EMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse:
      return "k_EMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse";
    case EDOTAGCMsg.k_EMsgGCToClientUnderDraftGoldUpdated:
      return "k_EMsgGCToClientUnderDraftGoldUpdated";
    case EDOTAGCMsg.k_EMsgGCToServerRecordTrainingData:
      return "k_EMsgGCToServerRecordTrainingData";
    case EDOTAGCMsg.k_EMsgSignOutBounties:
      return "k_EMsgSignOutBounties";
    case EDOTAGCMsg.k_EMsgLobbyFeaturedGamemodeProgress:
      return "k_EMsgLobbyFeaturedGamemodeProgress";
    case EDOTAGCMsg.k_EMsgLobbyGauntletProgress:
      return "k_EMsgLobbyGauntletProgress";
    case EDOTAGCMsg.k_EMsgClientToGCSubmitDraftTriviaMatchAnswer:
      return "k_EMsgClientToGCSubmitDraftTriviaMatchAnswer";
    case EDOTAGCMsg.k_EMsgClientToGCSubmitDraftTriviaMatchAnswerResponse:
      return "k_EMsgClientToGCSubmitDraftTriviaMatchAnswerResponse";
    case EDOTAGCMsg.k_EMsgGCToGCSignoutSpendBounty:
      return "k_EMsgGCToGCSignoutSpendBounty";
    case EDOTAGCMsg.k_EMsgClientToGCApplyGauntletTicket:
      return "k_EMsgClientToGCApplyGauntletTicket";
    case EDOTAGCMsg.k_EMsgClientToGCUnderDraftRollBackBench:
      return "k_EMsgClientToGCUnderDraftRollBackBench";
    case EDOTAGCMsg.k_EMsgClientToGCUnderDraftRollBackBenchResponse:
      return "k_EMsgClientToGCUnderDraftRollBackBenchResponse";
    case EDOTAGCMsg.k_EMsgGCToGCGetEventActionScore:
      return "k_EMsgGCToGCGetEventActionScore";
    case EDOTAGCMsg.k_EMsgGCToGCGetEventActionScoreResponse:
      return "k_EMsgGCToGCGetEventActionScoreResponse";
    case EDOTAGCMsg.k_EMsgServerToGCGetGuildContracts:
      return "k_EMsgServerToGCGetGuildContracts";
    case EDOTAGCMsg.k_EMsgServerToGCGetGuildContractsResponse:
      return "k_EMsgServerToGCGetGuildContractsResponse";
    case EDOTAGCMsg.k_EMsgLobbyEventGameData:
      return "k_EMsgLobbyEventGameData";
    case EDOTAGCMsg.k_EMsgGCToClientGuildMembersDataUpdated:
      return "k_EMsgGCToClientGuildMembersDataUpdated";
    case EDOTAGCMsg.k_EMsgSignOutReportActivityMarkers:
      return "k_EMsgSignOutReportActivityMarkers";
    case EDOTAGCMsg.k_EMsgSignOutDiretideCandy:
      return "k_EMsgSignOutDiretideCandy";
    case EDOTAGCMsg.k_EMsgGCToClientPostGameItemAwardNotification:
      return "k_EMsgGCToClientPostGameItemAwardNotification";
    case EDOTAGCMsg.k_EMsgClientToGCGetOWMatchDetails:
      return "k_EMsgClientToGCGetOWMatchDetails";
    case EDOTAGCMsg.k_EMsgClientToGCGetOWMatchDetailsResponse:
      return "k_EMsgClientToGCGetOWMatchDetailsResponse";
    case EDOTAGCMsg.k_EMsgClientToGCSubmitOWConviction:
      return "k_EMsgClientToGCSubmitOWConviction";
    case EDOTAGCMsg.k_EMsgClientToGCSubmitOWConvictionResponse:
      return "k_EMsgClientToGCSubmitOWConvictionResponse";
    case EDOTAGCMsg.k_EMsgGCToGCGetAccountSteamChina:
      return "k_EMsgGCToGCGetAccountSteamChina";
    case EDOTAGCMsg.k_EMsgGCToGCGetAccountSteamChinaResponse:
      return "k_EMsgGCToGCGetAccountSteamChinaResponse";
    case EDOTAGCMsg.k_EMsgClientToGCClaimLeaderboardRewards:
      return "k_EMsgClientToGCClaimLeaderboardRewards";
    case EDOTAGCMsg.k_EMsgClientToGCClaimLeaderboardRewardsResponse:
      return "k_EMsgClientToGCClaimLeaderboardRewardsResponse";
    case EDOTAGCMsg.k_EMsgClientToGCRecalibrateMMR:
      return "k_EMsgClientToGCRecalibrateMMR";
    case EDOTAGCMsg.k_EMsgClientToGCRecalibrateMMRResponse:
      return "k_EMsgClientToGCRecalibrateMMRResponse";
    case EDOTAGCMsg.k_EMsgGCToGCGrantEventPointActionList:
      return "k_EMsgGCToGCGrantEventPointActionList";
    case EDOTAGCMsg.k_EMsgClientToGCChinaSSAURLRequest:
      return "k_EMsgClientToGCChinaSSAURLRequest";
    case EDOTAGCMsg.k_EMsgClientToGCChinaSSAURLResponse:
      return "k_EMsgClientToGCChinaSSAURLResponse";
    case EDOTAGCMsg.k_EMsgClientToGCChinaSSAAcceptedRequest:
      return "k_EMsgClientToGCChinaSSAAcceptedRequest";
    case EDOTAGCMsg.k_EMsgClientToGCChinaSSAAcceptedResponse:
      return "k_EMsgClientToGCChinaSSAAcceptedResponse";
    case EDOTAGCMsg.k_EMsgSignOutOverwatchSuspicion:
      return "k_EMsgSignOutOverwatchSuspicion";
    case EDOTAGCMsg.k_EMsgServerToGCGetSuspicionConfig:
      return "k_EMsgServerToGCGetSuspicionConfig";
    case EDOTAGCMsg.k_EMsgServerToGCGetSuspicionConfigResponse:
      return "k_EMsgServerToGCGetSuspicionConfigResponse";
    case EDOTAGCMsg.k_EMsgGCToGCGrantPlusHeroChallengeMatchResults:
      return "k_EMsgGCToGCGrantPlusHeroChallengeMatchResults";
    case EDOTAGCMsg.k_EMsgGCToClientOverwatchCasesAvailable:
      return "k_EMsgGCToClientOverwatchCasesAvailable";
    case EDOTAGCMsg.k_EMsgServerToGCAccountCheck:
      return "k_EMsgServerToGCAccountCheck";
    case EDOTAGCMsg.k_EMsgClientToGCStartWatchingOverwatch:
      return "k_EMsgClientToGCStartWatchingOverwatch";
    case EDOTAGCMsg.k_EMsgClientToGCStopWatchingOverwatch:
      return "k_EMsgClientToGCStopWatchingOverwatch";
    case EDOTAGCMsg.k_EMsgSignOutPerfData:
      return "k_EMsgSignOutPerfData";
    case EDOTAGCMsg.k_EMsgClientToGCGetDPCFavorites:
      return "k_EMsgClientToGCGetDPCFavorites";
    case EDOTAGCMsg.k_EMsgClientToGCGetDPCFavoritesResponse:
      return "k_EMsgClientToGCGetDPCFavoritesResponse";
    case EDOTAGCMsg.k_EMsgClientToGCSetDPCFavoriteState:
      return "k_EMsgClientToGCSetDPCFavoriteState";
    case EDOTAGCMsg.k_EMsgClientToGCSetDPCFavoriteStateResponse:
      return "k_EMsgClientToGCSetDPCFavoriteStateResponse";
    case EDOTAGCMsg.k_EMsgClientToGCOverwatchReplayError:
      return "k_EMsgClientToGCOverwatchReplayError";
    case EDOTAGCMsg.k_EMsgServerToGCPlayerChallengeHistory:
      return "k_EMsgServerToGCPlayerChallengeHistory";
    case EDOTAGCMsg.k_EMsgSignOutBanData:
      return "k_EMsgSignOutBanData";
    case EDOTAGCMsg.k_EMsgWebapiDPCSeasonResults:
      return "k_EMsgWebapiDPCSeasonResults";
    case EDOTAGCMsg.k_EMsgClientToGCCoachFriend:
      return "k_EMsgClientToGCCoachFriend";
    case EDOTAGCMsg.k_EMsgClientToGCCoachFriendResponse:
      return "k_EMsgClientToGCCoachFriendResponse";
    case EDOTAGCMsg.k_EMsgClientToGCRequestPrivateCoachingSession:
      return "k_EMsgClientToGCRequestPrivateCoachingSession";
    case EDOTAGCMsg.k_EMsgClientToGCRequestPrivateCoachingSessionResponse:
      return "k_EMsgClientToGCRequestPrivateCoachingSessionResponse";
    case EDOTAGCMsg.k_EMsgClientToGCAcceptPrivateCoachingSession:
      return "k_EMsgClientToGCAcceptPrivateCoachingSession";
    case EDOTAGCMsg.k_EMsgClientToGCAcceptPrivateCoachingSessionResponse:
      return "k_EMsgClientToGCAcceptPrivateCoachingSessionResponse";
    case EDOTAGCMsg.k_EMsgClientToGCLeavePrivateCoachingSession:
      return "k_EMsgClientToGCLeavePrivateCoachingSession";
    case EDOTAGCMsg.k_EMsgClientToGCLeavePrivateCoachingSessionResponse:
      return "k_EMsgClientToGCLeavePrivateCoachingSessionResponse";
    case EDOTAGCMsg.k_EMsgClientToGCGetCurrentPrivateCoachingSession:
      return "k_EMsgClientToGCGetCurrentPrivateCoachingSession";
    case EDOTAGCMsg.k_EMsgClientToGCGetCurrentPrivateCoachingSessionResponse:
      return "k_EMsgClientToGCGetCurrentPrivateCoachingSessionResponse";
    case EDOTAGCMsg.k_EMsgGCToClientPrivateCoachingSessionUpdated:
      return "k_EMsgGCToClientPrivateCoachingSessionUpdated";
    case EDOTAGCMsg.k_EMsgClientToGCSubmitPrivateCoachingSessionRating:
      return "k_EMsgClientToGCSubmitPrivateCoachingSessionRating";
    case EDOTAGCMsg.k_EMsgClientToGCSubmitPrivateCoachingSessionRatingResponse:
      return "k_EMsgClientToGCSubmitPrivateCoachingSessionRatingResponse";
    case EDOTAGCMsg.k_EMsgClientToGCGetAvailablePrivateCoachingSessions:
      return "k_EMsgClientToGCGetAvailablePrivateCoachingSessions";
    case EDOTAGCMsg.k_EMsgClientToGCGetAvailablePrivateCoachingSessionsResponse:
      return "k_EMsgClientToGCGetAvailablePrivateCoachingSessionsResponse";
    case EDOTAGCMsg.k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummary:
      return "k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummary";
    case EDOTAGCMsg.k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse:
      return "k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse";
    case EDOTAGCMsg.k_EMsgClientToGCJoinPrivateCoachingSessionLobby:
      return "k_EMsgClientToGCJoinPrivateCoachingSessionLobby";
    case EDOTAGCMsg.k_EMsgClientToGCJoinPrivateCoachingSessionLobbyResponse:
      return "k_EMsgClientToGCJoinPrivateCoachingSessionLobbyResponse";
    case EDOTAGCMsg.k_EMsgClientToGCRespondToCoachFriendRequest:
      return "k_EMsgClientToGCRespondToCoachFriendRequest";
    case EDOTAGCMsg.k_EMsgClientToGCRespondToCoachFriendRequestResponse:
      return "k_EMsgClientToGCRespondToCoachFriendRequestResponse";
    case EDOTAGCMsg.k_EMsgClientToGCSetEventActiveSeasonID:
      return "k_EMsgClientToGCSetEventActiveSeasonID";
    case EDOTAGCMsg.k_EMsgClientToGCSetEventActiveSeasonIDResponse:
      return "k_EMsgClientToGCSetEventActiveSeasonIDResponse";
    case EDOTAGCMsg.k_EMsgServerToGCMatchPlayerNeutralItemEquipHistory:
      return "k_EMsgServerToGCMatchPlayerNeutralItemEquipHistory";
    case EDOTAGCMsg.k_EMsgServerToGCCompendiumChosenInGamePredictions:
      return "k_EMsgServerToGCCompendiumChosenInGamePredictions";
    case EDOTAGCMsg.k_EMsgClientToGCCreateTeamPlayerCardPack:
      return "k_EMsgClientToGCCreateTeamPlayerCardPack";
    case EDOTAGCMsg.k_EMsgClientToGCCreateTeamPlayerCardPackResponse:
      return "k_EMsgClientToGCCreateTeamPlayerCardPackResponse";
    case EDOTAGCMsg.k_EMsgGCToServerSubmitCheerData:
      return "k_EMsgGCToServerSubmitCheerData";
    case EDOTAGCMsg.k_EMsgGCToServerCheerConfig:
      return "k_EMsgGCToServerCheerConfig";
    case EDOTAGCMsg.k_EMsgServerToGCGetCheerConfig:
      return "k_EMsgServerToGCGetCheerConfig";
    case EDOTAGCMsg.k_EMsgServerToGCGetCheerConfigResponse:
      return "k_EMsgServerToGCGetCheerConfigResponse";
    case EDOTAGCMsg.k_EMsgGCToGCGrantAutographByID:
      return "k_EMsgGCToGCGrantAutographByID";
    case EDOTAGCMsg.k_EMsgGCToServerCheerScalesOverride:
      return "k_EMsgGCToServerCheerScalesOverride";
    case EDOTAGCMsg.k_EMsgGCToServerGetCheerState:
      return "k_EMsgGCToServerGetCheerState";
    case EDOTAGCMsg.k_EMsgServerToGCReportCheerState:
      return "k_EMsgServerToGCReportCheerState";
    case EDOTAGCMsg.k_EMsgGCToServerScenarioSave:
      return "k_EMsgGCToServerScenarioSave";
    case EDOTAGCMsg.k_EMsgGCToServerAbilityDraftLobbyData:
      return "k_EMsgGCToServerAbilityDraftLobbyData";
    case EDOTAGCMsg.k_EMsgSignOutReportCommunications:
      return "k_EMsgSignOutReportCommunications";
    case EDOTAGCMsg.k_EMsgClientToGCBatchGetPlayerCardRosterRequest:
      return "k_EMsgClientToGCBatchGetPlayerCardRosterRequest";
    case EDOTAGCMsg.k_EMsgClientToGCBatchGetPlayerCardRosterResponse:
      return "k_EMsgClientToGCBatchGetPlayerCardRosterResponse";
    case EDOTAGCMsg.k_EMsgClientToGCGetStickerbookRequest:
      return "k_EMsgClientToGCGetStickerbookRequest";
    case EDOTAGCMsg.k_EMsgClientToGCGetStickerbookResponse:
      return "k_EMsgClientToGCGetStickerbookResponse";
    case EDOTAGCMsg.k_EMsgClientToGCCreateStickerbookPageRequest:
      return "k_EMsgClientToGCCreateStickerbookPageRequest";
    case EDOTAGCMsg.k_EMsgClientToGCCreateStickerbookPageResponse:
      return "k_EMsgClientToGCCreateStickerbookPageResponse";
    case EDOTAGCMsg.k_EMsgClientToGCDeleteStickerbookPageRequest:
      return "k_EMsgClientToGCDeleteStickerbookPageRequest";
    case EDOTAGCMsg.k_EMsgClientToGCDeleteStickerbookPageResponse:
      return "k_EMsgClientToGCDeleteStickerbookPageResponse";
    case EDOTAGCMsg.k_EMsgClientToGCPlaceStickersRequest:
      return "k_EMsgClientToGCPlaceStickersRequest";
    case EDOTAGCMsg.k_EMsgClientToGCPlaceStickersResponse:
      return "k_EMsgClientToGCPlaceStickersResponse";
    case EDOTAGCMsg.k_EMsgClientToGCPlaceCollectionStickersRequest:
      return "k_EMsgClientToGCPlaceCollectionStickersRequest";
    case EDOTAGCMsg.k_EMsgClientToGCPlaceCollectionStickersResponse:
      return "k_EMsgClientToGCPlaceCollectionStickersResponse";
    case EDOTAGCMsg.k_EMsgClientToGCOrderStickerbookTeamPageRequest:
      return "k_EMsgClientToGCOrderStickerbookTeamPageRequest";
    case EDOTAGCMsg.k_EMsgClientToGCOrderStickerbookTeamPageResponse:
      return "k_EMsgClientToGCOrderStickerbookTeamPageResponse";
    case EDOTAGCMsg.k_EMsgServerToGCGetStickerHeroes:
      return "k_EMsgServerToGCGetStickerHeroes";
    case EDOTAGCMsg.k_EMsgServerToGCGetStickerHeroesResponse:
      return "k_EMsgServerToGCGetStickerHeroesResponse";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopGetUserData:
      return "k_EMsgClientToGCCandyShopGetUserData";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopGetUserDataResponse:
      return "k_EMsgClientToGCCandyShopGetUserDataResponse";
    case EDOTAGCMsg.k_EMsgGCToClientCandyShopUserDataUpdated:
      return "k_EMsgGCToClientCandyShopUserDataUpdated";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopPurchaseReward:
      return "k_EMsgClientToGCCandyShopPurchaseReward";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopPurchaseRewardResponse:
      return "k_EMsgClientToGCCandyShopPurchaseRewardResponse";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopDoExchange:
      return "k_EMsgClientToGCCandyShopDoExchange";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopDoExchangeResponse:
      return "k_EMsgClientToGCCandyShopDoExchangeResponse";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopDoVariableExchange:
      return "k_EMsgClientToGCCandyShopDoVariableExchange";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopDoVariableExchangeResponse:
      return "k_EMsgClientToGCCandyShopDoVariableExchangeResponse";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopRerollRewards:
      return "k_EMsgClientToGCCandyShopRerollRewards";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopRerollRewardsResponse:
      return "k_EMsgClientToGCCandyShopRerollRewardsResponse";
    case EDOTAGCMsg.k_EMsgClientToGCSetHeroSticker:
      return "k_EMsgClientToGCSetHeroSticker";
    case EDOTAGCMsg.k_EMsgClientToGCSetHeroStickerResponse:
      return "k_EMsgClientToGCSetHeroStickerResponse";
    case EDOTAGCMsg.k_EMsgClientToGCGetHeroStickers:
      return "k_EMsgClientToGCGetHeroStickers";
    case EDOTAGCMsg.k_EMsgClientToGCGetHeroStickersResponse:
      return "k_EMsgClientToGCGetHeroStickersResponse";
    case EDOTAGCMsg.k_EMsgClientToGCSetFavoritePage:
      return "k_EMsgClientToGCSetFavoritePage";
    case EDOTAGCMsg.k_EMsgClientToGCSetFavoritePageResponse:
      return "k_EMsgClientToGCSetFavoritePageResponse";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopDevGrantCandy:
      return "k_EMsgClientToGCCandyShopDevGrantCandy";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopDevGrantCandyResponse:
      return "k_EMsgClientToGCCandyShopDevGrantCandyResponse";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopDevClearInventory:
      return "k_EMsgClientToGCCandyShopDevClearInventory";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopDevClearInventoryResponse:
      return "k_EMsgClientToGCCandyShopDevClearInventoryResponse";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopOpenBags:
      return "k_EMsgClientToGCCandyShopOpenBags";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopOpenBagsResponse:
      return "k_EMsgClientToGCCandyShopOpenBagsResponse";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopDevGrantCandyBags:
      return "k_EMsgClientToGCCandyShopDevGrantCandyBags";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopDevGrantCandyBagsResponse:
      return "k_EMsgClientToGCCandyShopDevGrantCandyBagsResponse";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopDevShuffleExchange:
      return "k_EMsgClientToGCCandyShopDevShuffleExchange";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopDevShuffleExchangeResponse:
      return "k_EMsgClientToGCCandyShopDevShuffleExchangeResponse";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopDevGrantRerollCharges:
      return "k_EMsgClientToGCCandyShopDevGrantRerollCharges";
    case EDOTAGCMsg.k_EMsgClientToGCCandyShopDevGrantRerollChargesResponse:
      return "k_EMsgClientToGCCandyShopDevGrantRerollChargesResponse";
    case EDOTAGCMsg.k_EMsgLobbyAdditionalAccountData:
      return "k_EMsgLobbyAdditionalAccountData";
    case EDOTAGCMsg.k_EMsgServerToGCLobbyInitialized:
      return "k_EMsgServerToGCLobbyInitialized";
    case EDOTAGCMsg.k_EMsgClientToGCCollectorsCacheAvailableDataRequest:
      return "k_EMsgClientToGCCollectorsCacheAvailableDataRequest";
    case EDOTAGCMsg.k_EMsgGCToClientCollectorsCacheAvailableDataResponse:
      return "k_EMsgGCToClientCollectorsCacheAvailableDataResponse";
    case EDOTAGCMsg.k_EMsgClientToGCUploadMatchClip:
      return "k_EMsgClientToGCUploadMatchClip";
    case EDOTAGCMsg.k_EMsgGCToClientUploadMatchClipResponse:
      return "k_EMsgGCToClientUploadMatchClipResponse";
    case EDOTAGCMsg.k_EMsgGCToServerSetSteamLearnDisable:
      return "k_EMsgGCToServerSetSteamLearnDisable";
    case EDOTAGCMsg.k_EMsgGCToServerSetSteamLearnKeysChanged:
      return "k_EMsgGCToServerSetSteamLearnKeysChanged";
    case EDOTAGCMsg.k_EMsgSignOutMuertaMinigame:
      return "k_EMsgSignOutMuertaMinigame";
    case EDOTAGCMsg.k_EMsgGCToServerLobbyHeroRoleStats:
      return "k_EMsgGCToServerLobbyHeroRoleStats";
    case EDOTAGCMsg.k_EMsgClientToGCRankRequest:
      return "k_EMsgClientToGCRankRequest";
    case EDOTAGCMsg.k_EMsgGCToClientRankResponse:
      return "k_EMsgGCToClientRankResponse";
    case EDOTAGCMsg.k_EMsgGCToClientRankUpdate:
      return "k_EMsgGCToClientRankUpdate";
    case EDOTAGCMsg.k_EMsgSignOutMapStats:
      return "k_EMsgSignOutMapStats";
    case EDOTAGCMsg.k_EMsgClientToGCMapStatsRequest:
      return "k_EMsgClientToGCMapStatsRequest";
    case EDOTAGCMsg.k_EMsgGCToClientMapStatsResponse:
      return "k_EMsgGCToClientMapStatsResponse";
    case EDOTAGCMsg.k_EMsgGCToServerSetSteamLearnInferencing:
      return "k_EMsgGCToServerSetSteamLearnInferencing";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDOTAGCMsg");
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
