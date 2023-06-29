/* eslint-disable */

export enum EMsg {
  k_EMsgInvalid = 0,
  k_EMsgMulti = 1,
  k_EMsgProtobufWrapped = 2,
  k_EMsgBaseGeneral = 100,
  k_EMsgGenericReply = 100,
  k_EMsgDestJobFailed = 113,
  k_EMsgAlert = 115,
  k_EMsgSCIDRequest = 120,
  k_EMsgSCIDResponse = 121,
  k_EMsgJobHeartbeat = 123,
  k_EMsgHubConnect = 124,
  k_EMsgSubscribe = 126,
  k_EMRouteMessage = 127,
  k_EMsgWGRequest = 130,
  k_EMsgWGResponse = 131,
  k_EMsgKeepAlive = 132,
  k_EMsgWebAPIJobRequest = 133,
  k_EMsgWebAPIJobResponse = 134,
  k_EMsgClientSessionStart = 135,
  k_EMsgClientSessionEnd = 136,
  k_EMsgClientSessionUpdate = 137,
  k_EMsgStatsDeprecated = 138,
  k_EMsgPing = 139,
  k_EMsgPingResponse = 140,
  k_EMsgStats = 141,
  k_EMsgRequestFullStatsBlock = 142,
  k_EMsgLoadDBOCacheItem = 143,
  k_EMsgLoadDBOCacheItemResponse = 144,
  k_EMsgInvalidateDBOCacheItems = 145,
  k_EMsgServiceMethod = 146,
  k_EMsgServiceMethodResponse = 147,
  k_EMsgClientPackageVersions = 148,
  k_EMsgTimestampRequest = 149,
  k_EMsgTimestampResponse = 150,
  k_EMsgServiceMethodCallFromClient = 151,
  k_EMsgServiceMethodSendToClient = 152,
  k_EMsgBaseShell = 200,
  k_EMsgAssignSysID = 200,
  k_EMsgExit = 201,
  k_EMsgDirRequest = 202,
  k_EMsgDirResponse = 203,
  k_EMsgZipRequest = 204,
  k_EMsgZipResponse = 205,
  k_EMsgUpdateRecordResponse = 215,
  k_EMsgUpdateCreditCardRequest = 221,
  k_EMsgUpdateUserBanResponse = 225,
  k_EMsgPrepareToExit = 226,
  k_EMsgContentDescriptionUpdate = 227,
  k_EMsgTestResetServer = 228,
  k_EMsgUniverseChanged = 229,
  k_EMsgShellConfigInfoUpdate = 230,
  k_EMsgRequestWindowsEventLogEntries = 233,
  k_EMsgProvideWindowsEventLogEntries = 234,
  k_EMsgShellSearchLogs = 235,
  k_EMsgShellSearchLogsResponse = 236,
  k_EMsgShellCheckWindowsUpdates = 237,
  k_EMsgShellCheckWindowsUpdatesResponse = 238,
  k_EMsgTestFlushDelayedSQL = 240,
  k_EMsgTestFlushDelayedSQLResponse = 241,
  k_EMsgEnsureExecuteScheduledTask_TEST = 242,
  k_EMsgEnsureExecuteScheduledTaskResponse_TEST = 243,
  k_EMsgUpdateScheduledTaskEnableState_TEST = 244,
  k_EMsgUpdateScheduledTaskEnableStateResponse_TEST = 245,
  k_EMsgContentDescriptionDeltaUpdate = 246,
  k_EMsgGMShellAndServerAddressUpdates = 247,
  k_EMsgBaseGM = 300,
  k_EMsgHeartbeat = 300,
  k_EMsgShellFailed = 301,
  k_EMsgExitShells = 307,
  k_EMsgExitShell = 308,
  k_EMsgGracefulExitShell = 309,
  k_EMsgLicenseProcessingComplete = 316,
  k_EMsgSetTestFlag = 317,
  k_EMsgQueuedEmailsComplete = 318,
  k_EMsgGMDRMSync = 320,
  k_EMsgPhysicalBoxInventory = 321,
  k_EMsgUpdateConfigFile = 322,
  k_EMsgTestInitDB = 323,
  k_EMsgGMWriteConfigToSQL = 324,
  k_EMsgGMLoadActivationCodes = 325,
  k_EMsgGMQueueForFBS = 326,
  k_EMsgGMSchemaConversionResults = 327,
  k_EMsgGMWriteShellFailureToSQL = 329,
  k_EMsgGMWriteStatsToSOS = 330,
  k_EMsgGMGetServiceMethodRouting = 331,
  k_EMsgGMGetServiceMethodRoutingResponse = 332,
  k_EMsgGMTestNextBuildSchemaConversion = 334,
  k_EMsgGMTestNextBuildSchemaConversionResponse = 335,
  k_EMsgExpectShellRestart = 336,
  k_EMsgHotFixProgress = 337,
  k_EMsgGMStatsForwardToAdminConnections = 338,
  k_EMsgGMGetModifiedConVars = 339,
  k_EMsgGMGetModifiedConVarsResponse = 340,
  k_EMsgBaseAIS = 400,
  k_EMsgAISRequestContentDescription = 402,
  k_EMsgAISUpdateAppInfo = 403,
  k_EMsgAISGetPackageChangeNumber = 405,
  k_EMsgAISGetPackageChangeNumberResponse = 406,
  k_EMsgAIGetAppGCFlags = 423,
  k_EMsgAIGetAppGCFlagsResponse = 424,
  k_EMsgAIGetAppList = 425,
  k_EMsgAIGetAppListResponse = 426,
  k_EMsgAISGetCouponDefinition = 429,
  k_EMsgAISGetCouponDefinitionResponse = 430,
  k_EMsgAISUpdateSubordinateContentDescription = 431,
  k_EMsgAISUpdateSubordinateContentDescriptionResponse = 432,
  k_EMsgAISTestEnableGC = 433,
  k_EMsgBaseAM = 500,
  k_EMsgAMUpdateUserBanRequest = 504,
  k_EMsgAMAddLicense = 505,
  k_EMsgAMSendSystemIMToUser = 508,
  k_EMsgAMExtendLicense = 509,
  k_EMsgAMAddMinutesToLicense = 510,
  k_EMsgAMCancelLicense = 511,
  k_EMsgAMInitPurchase = 512,
  k_EMsgAMPurchaseResponse = 513,
  k_EMsgAMGetFinalPrice = 514,
  k_EMsgAMGetFinalPriceResponse = 515,
  k_EMsgAMGetLegacyGameKey = 516,
  k_EMsgAMGetLegacyGameKeyResponse = 517,
  k_EMsgAMFindHungTransactions = 518,
  k_EMsgAMSetAccountTrustedRequest = 519,
  k_EMsgAMCancelPurchase = 522,
  k_EMsgAMNewChallenge = 523,
  k_EMsgAMLoadOEMTickets = 524,
  k_EMsgAMFixPendingPurchase = 525,
  k_EMsgAMFixPendingPurchaseResponse = 526,
  k_EMsgAMIsUserBanned = 527,
  k_EMsgAMRegisterKey = 528,
  k_EMsgAMLoadActivationCodes = 529,
  k_EMsgAMLoadActivationCodesResponse = 530,
  k_EMsgAMLookupKeyResponse = 531,
  k_EMsgAMLookupKey = 532,
  k_EMsgAMChatCleanup = 533,
  k_EMsgAMClanCleanup = 534,
  k_EMsgAMFixPendingRefund = 535,
  k_EMsgAMReverseChargeback = 536,
  k_EMsgAMReverseChargebackResponse = 537,
  k_EMsgAMClanCleanupList = 538,
  k_EMsgAMGetLicenses = 539,
  k_EMsgAMGetLicensesResponse = 540,
  k_EMsgAMSendCartRepurchase = 541,
  k_EMsgAMSendCartRepurchaseResponse = 542,
  k_EMsgAllowUserToPlayQuery = 550,
  k_EMsgAllowUserToPlayResponse = 551,
  k_EMsgAMVerfiyUser = 552,
  k_EMsgAMClientNotPlaying = 553,
  k_EMsgAMClientRequestFriendship = 554,
  k_EMsgAMRelayPublishStatus = 555,
  k_EMsgAMInitPurchaseResponse = 560,
  k_EMsgAMRevokePurchaseResponse = 561,
  k_EMsgAMRefreshGuestPasses = 563,
  k_EMsgAMGrantGuestPasses = 566,
  k_EMsgAMClanDataUpdated = 567,
  k_EMsgAMReloadAccount = 568,
  k_EMsgAMClientChatMsgRelay = 569,
  k_EMsgAMChatMulti = 570,
  k_EMsgAMClientChatInviteRelay = 571,
  k_EMsgAMChatInvite = 572,
  k_EMsgAMClientJoinChatRelay = 573,
  k_EMsgAMClientChatMemberInfoRelay = 574,
  k_EMsgAMPublishChatMemberInfo = 575,
  k_EMsgAMClientAcceptFriendInvite = 576,
  k_EMsgAMChatEnter = 577,
  k_EMsgAMClientPublishRemovalFromSource = 578,
  k_EMsgAMChatActionResult = 579,
  k_EMsgAMFindAccounts = 580,
  k_EMsgAMFindAccountsResponse = 581,
  k_EMsgAMIsAccountNameInUse = 582,
  k_EMsgAMIsAccountNameInUseResponse = 583,
  k_EMsgAMSetAccountFlags = 584,
  k_EMsgAMCreateClan = 586,
  k_EMsgAMCreateClanResponse = 587,
  k_EMsgAMGetClanDetails = 588,
  k_EMsgAMGetClanDetailsResponse = 589,
  k_EMsgAMSetPersonaName = 590,
  k_EMsgAMSetAvatar = 591,
  k_EMsgAMAuthenticateUser = 592,
  k_EMsgAMAuthenticateUserResponse = 593,
  k_EMsgAMP2PIntroducerMessage = 596,
  k_EMsgClientChatAction = 597,
  k_EMsgAMClientChatActionRelay = 598,
  k_EMsgBaseVS = 600,
  k_EMsgReqChallenge = 600,
  k_EMsgVACResponse = 601,
  k_EMsgReqChallengeTest = 602,
  k_EMsgVSMarkCheat = 604,
  k_EMsgVSAddCheat = 605,
  k_EMsgVSPurgeCodeModDB = 606,
  k_EMsgVSGetChallengeResults = 607,
  k_EMsgVSChallengeResultText = 608,
  k_EMsgVSReportLingerer = 609,
  k_EMsgVSRequestManagedChallenge = 610,
  k_EMsgVSLoadDBFinished = 611,
  k_EMsgBaseDRMS = 625,
  k_EMsgDRMBuildBlobRequest = 628,
  k_EMsgDRMBuildBlobResponse = 629,
  k_EMsgDRMResolveGuidRequest = 630,
  k_EMsgDRMResolveGuidResponse = 631,
  k_EMsgDRMVariabilityReport = 633,
  k_EMsgDRMVariabilityReportResponse = 634,
  k_EMsgDRMStabilityReport = 635,
  k_EMsgDRMStabilityReportResponse = 636,
  k_EMsgDRMDetailsReportRequest = 637,
  k_EMsgDRMDetailsReportResponse = 638,
  k_EMsgDRMProcessFile = 639,
  k_EMsgDRMAdminUpdate = 640,
  k_EMsgDRMAdminUpdateResponse = 641,
  k_EMsgDRMSync = 642,
  k_EMsgDRMSyncResponse = 643,
  k_EMsgDRMProcessFileResponse = 644,
  k_EMsgDRMEmptyGuidCache = 645,
  k_EMsgDRMEmptyGuidCacheResponse = 646,
  k_EMsgBaseCS = 650,
  k_EMsgBaseClient = 700,
  k_EMsgClientLogOn_Deprecated = 701,
  k_EMsgClientAnonLogOn_Deprecated = 702,
  k_EMsgClientHeartBeat = 703,
  k_EMsgClientVACResponse = 704,
  k_EMsgClientGamesPlayed_obsolete = 705,
  k_EMsgClientLogOff = 706,
  k_EMsgClientNoUDPConnectivity = 707,
  k_EMsgClientConnectionStats = 710,
  k_EMsgClientPingResponse = 712,
  k_EMsgClientRemoveFriend = 714,
  k_EMsgClientGamesPlayedNoDataBlob = 715,
  k_EMsgClientChangeStatus = 716,
  k_EMsgClientVacStatusResponse = 717,
  k_EMsgClientFriendMsg = 718,
  k_EMsgClientGameConnect_obsolete = 719,
  k_EMsgClientGamesPlayed2_obsolete = 720,
  k_EMsgClientGameEnded_obsolete = 721,
  k_EMsgClientSystemIM = 726,
  k_EMsgClientSystemIMAck = 727,
  k_EMsgClientGetLicenses = 728,
  k_EMsgClientGetLegacyGameKey = 730,
  k_EMsgClientContentServerLogOn_Deprecated = 731,
  k_EMsgClientAckVACBan2 = 732,
  k_EMsgClientGetPurchaseReceipts = 736,
  k_EMsgClientGamesPlayed3_obsolete = 738,
  k_EMsgClientAckGuestPass = 740,
  k_EMsgClientRedeemGuestPass = 741,
  k_EMsgClientGamesPlayed = 742,
  k_EMsgClientRegisterKey = 743,
  k_EMsgClientInviteUserToClan = 744,
  k_EMsgClientAcknowledgeClanInvite = 745,
  k_EMsgClientPurchaseWithMachineID = 746,
  k_EMsgClientAppUsageEvent = 747,
  k_EMsgClientLogOnResponse = 751,
  k_EMsgClientSetHeartbeatRate = 755,
  k_EMsgClientNotLoggedOnDeprecated = 756,
  k_EMsgClientLoggedOff = 757,
  k_EMsgGSApprove = 758,
  k_EMsgGSDeny = 759,
  k_EMsgGSKick = 760,
  k_EMsgClientPurchaseResponse = 763,
  k_EMsgClientPing = 764,
  k_EMsgClientNOP = 765,
  k_EMsgClientPersonaState = 766,
  k_EMsgClientFriendsList = 767,
  k_EMsgClientAccountInfo = 768,
  k_EMsgClientNewsUpdate = 771,
  k_EMsgClientGameConnectDeny = 773,
  k_EMsgGSStatusReply = 774,
  k_EMsgClientGameConnectTokens = 779,
  k_EMsgClientLicenseList = 780,
  k_EMsgClientVACBanStatus = 782,
  k_EMsgClientCMList = 783,
  k_EMsgClientEncryptPct = 784,
  k_EMsgClientGetLegacyGameKeyResponse = 785,
  k_EMsgClientAddFriend = 791,
  k_EMsgClientAddFriendResponse = 792,
  k_EMsgClientAckGuestPassResponse = 796,
  k_EMsgClientRedeemGuestPassResponse = 797,
  k_EMsgClientUpdateGuestPassesList = 798,
  k_EMsgClientChatMsg = 799,
  k_EMsgClientChatInvite = 800,
  k_EMsgClientJoinChat = 801,
  k_EMsgClientChatMemberInfo = 802,
  k_EMsgClientLogOnWithCredentials_Deprecated = 803,
  k_EMsgClientPasswordChangeResponse = 805,
  k_EMsgClientChatEnter = 807,
  k_EMsgClientFriendRemovedFromSource = 808,
  k_EMsgClientCreateChat = 809,
  k_EMsgClientCreateChatResponse = 810,
  k_EMsgClientP2PIntroducerMessage = 813,
  k_EMsgClientChatActionResult = 814,
  k_EMsgClientRequestFriendData = 815,
  k_EMsgClientGetUserStats = 818,
  k_EMsgClientGetUserStatsResponse = 819,
  k_EMsgClientStoreUserStats = 820,
  k_EMsgClientStoreUserStatsResponse = 821,
  k_EMsgClientClanState = 822,
  k_EMsgClientServiceModule = 830,
  k_EMsgClientServiceCall = 831,
  k_EMsgClientServiceCallResponse = 832,
  k_EMsgClientNatTraversalStatEvent = 839,
  k_EMsgClientSteamUsageEvent = 842,
  k_EMsgClientCheckPassword = 845,
  k_EMsgClientResetPassword = 846,
  k_EMsgClientCheckPasswordResponse = 848,
  k_EMsgClientResetPasswordResponse = 849,
  k_EMsgClientSessionToken = 850,
  k_EMsgClientDRMProblemReport = 851,
  k_EMsgClientSetIgnoreFriend = 855,
  k_EMsgClientSetIgnoreFriendResponse = 856,
  k_EMsgClientGetAppOwnershipTicket = 857,
  k_EMsgClientGetAppOwnershipTicketResponse = 858,
  k_EMsgClientGetLobbyListResponse = 860,
  k_EMsgClientServerList = 880,
  k_EMsgClientDRMBlobRequest = 896,
  k_EMsgClientDRMBlobResponse = 897,
  k_EMsgBaseGameServer = 900,
  k_EMsgGSDisconnectNotice = 901,
  k_EMsgGSStatus = 903,
  k_EMsgGSUserPlaying = 905,
  k_EMsgGSStatus2 = 906,
  k_EMsgGSStatusUpdate_Unused = 907,
  k_EMsgGSServerType = 908,
  k_EMsgGSPlayerList = 909,
  k_EMsgGSGetUserAchievementStatus = 910,
  k_EMsgGSGetUserAchievementStatusResponse = 911,
  k_EMsgGSGetPlayStats = 918,
  k_EMsgGSGetPlayStatsResponse = 919,
  k_EMsgGSGetUserGroupStatus = 920,
  k_EMsgAMGetUserGroupStatus = 921,
  k_EMsgAMGetUserGroupStatusResponse = 922,
  k_EMsgGSGetUserGroupStatusResponse = 923,
  k_EMsgGSGetReputation = 936,
  k_EMsgGSGetReputationResponse = 937,
  k_EMsgGSAssociateWithClan = 938,
  k_EMsgGSAssociateWithClanResponse = 939,
  k_EMsgGSComputeNewPlayerCompatibility = 940,
  k_EMsgGSComputeNewPlayerCompatibilityResponse = 941,
  k_EMsgBaseAdmin = 1000,
  k_EMsgAdminCmd = 1000,
  k_EMsgAdminCmdResponse = 1004,
  k_EMsgAdminLogListenRequest = 1005,
  k_EMsgAdminLogEvent = 1006,
  k_EMsgUniverseData = 1010,
  k_EMsgAdminSpew = 1019,
  k_EMsgAdminConsoleTitle = 1020,
  k_EMsgAdminGCSpew = 1023,
  k_EMsgAdminGCCommand = 1024,
  k_EMsgAdminGCGetCommandList = 1025,
  k_EMsgAdminGCGetCommandListResponse = 1026,
  k_EMsgFBSConnectionData = 1027,
  k_EMsgAdminMsgSpew = 1028,
  k_EMsgBaseFBS = 1100,
  k_EMsgFBSReqVersion = 1100,
  k_EMsgFBSVersionInfo = 1101,
  k_EMsgFBSForceRefresh = 1102,
  k_EMsgFBSForceBounce = 1103,
  k_EMsgFBSDeployPackage = 1104,
  k_EMsgFBSDeployResponse = 1105,
  k_EMsgFBSUpdateBootstrapper = 1106,
  k_EMsgFBSSetState = 1107,
  k_EMsgFBSApplyOSUpdates = 1108,
  k_EMsgFBSRunCMDScript = 1109,
  k_EMsgFBSRebootBox = 1110,
  k_EMsgFBSSetBigBrotherMode = 1111,
  k_EMsgFBSMinidumpServer = 1112,
  k_EMsgFBSDeployHotFixPackage = 1114,
  k_EMsgFBSDeployHotFixResponse = 1115,
  k_EMsgFBSDownloadHotFix = 1116,
  k_EMsgFBSDownloadHotFixResponse = 1117,
  k_EMsgFBSUpdateTargetConfigFile = 1118,
  k_EMsgFBSApplyAccountCred = 1119,
  k_EMsgFBSApplyAccountCredResponse = 1120,
  k_EMsgFBSSetShellCount = 1121,
  k_EMsgFBSTerminateShell = 1122,
  k_EMsgFBSQueryGMForRequest = 1123,
  k_EMsgFBSQueryGMResponse = 1124,
  k_EMsgFBSTerminateZombies = 1125,
  k_EMsgFBSInfoFromBootstrapper = 1126,
  k_EMsgFBSRebootBoxResponse = 1127,
  k_EMsgFBSBootstrapperPackageRequest = 1128,
  k_EMsgFBSBootstrapperPackageResponse = 1129,
  k_EMsgFBSBootstrapperGetPackageChunk = 1130,
  k_EMsgFBSBootstrapperGetPackageChunkResponse = 1131,
  k_EMsgFBSBootstrapperPackageTransferProgress = 1132,
  k_EMsgFBSRestartBootstrapper = 1133,
  k_EMsgFBSPauseFrozenDumps = 1134,
  k_EMsgBaseFileXfer = 1200,
  k_EMsgFileXferRequest = 1200,
  k_EMsgFileXferResponse = 1201,
  k_EMsgFileXferData = 1202,
  k_EMsgFileXferEnd = 1203,
  k_EMsgFileXferDataAck = 1204,
  k_EMsgBaseChannelAuth = 1300,
  k_EMsgChannelAuthChallenge = 1300,
  k_EMsgChannelAuthResponse = 1301,
  k_EMsgChannelAuthResult = 1302,
  k_EMsgChannelEncryptRequest = 1303,
  k_EMsgChannelEncryptResponse = 1304,
  k_EMsgChannelEncryptResult = 1305,
  k_EMsgBaseBS = 1400,
  k_EMsgBSPurchaseStart = 1401,
  k_EMsgBSPurchaseResponse = 1402,
  k_EMsgBSAuthenticateCCTrans = 1403,
  k_EMsgBSAuthenticateCCTransResponse = 1404,
  k_EMsgBSSettleComplete = 1406,
  k_EMsgBSInitPayPalTxn = 1408,
  k_EMsgBSInitPayPalTxnResponse = 1409,
  k_EMsgBSGetPayPalUserInfo = 1410,
  k_EMsgBSGetPayPalUserInfoResponse = 1411,
  k_EMsgBSPaymentInstrBan = 1417,
  k_EMsgBSPaymentInstrBanResponse = 1418,
  k_EMsgBSInitGCBankXferTxn = 1421,
  k_EMsgBSInitGCBankXferTxnResponse = 1422,
  k_EMsgBSCommitGCTxn = 1425,
  k_EMsgBSQueryTransactionStatus = 1426,
  k_EMsgBSQueryTransactionStatusResponse = 1427,
  k_EMsgBSQueryTxnExtendedInfo = 1433,
  k_EMsgBSQueryTxnExtendedInfoResponse = 1434,
  k_EMsgBSUpdateConversionRates = 1435,
  k_EMsgBSPurchaseRunFraudChecks = 1437,
  k_EMsgBSPurchaseRunFraudChecksResponse = 1438,
  k_EMsgBSQueryBankInformation = 1440,
  k_EMsgBSQueryBankInformationResponse = 1441,
  k_EMsgBSValidateXsollaSignature = 1445,
  k_EMsgBSValidateXsollaSignatureResponse = 1446,
  k_EMsgBSQiwiWalletInvoice = 1448,
  k_EMsgBSQiwiWalletInvoiceResponse = 1449,
  k_EMsgBSUpdateInventoryFromProPack = 1450,
  k_EMsgBSUpdateInventoryFromProPackResponse = 1451,
  k_EMsgBSSendShippingRequest = 1452,
  k_EMsgBSSendShippingRequestResponse = 1453,
  k_EMsgBSGetProPackOrderStatus = 1454,
  k_EMsgBSGetProPackOrderStatusResponse = 1455,
  k_EMsgBSCheckJobRunning = 1456,
  k_EMsgBSCheckJobRunningResponse = 1457,
  k_EMsgBSResetPackagePurchaseRateLimit = 1458,
  k_EMsgBSResetPackagePurchaseRateLimitResponse = 1459,
  k_EMsgBSUpdatePaymentData = 1460,
  k_EMsgBSUpdatePaymentDataResponse = 1461,
  k_EMsgBSGetBillingAddress = 1462,
  k_EMsgBSGetBillingAddressResponse = 1463,
  k_EMsgBSGetCreditCardInfo = 1464,
  k_EMsgBSGetCreditCardInfoResponse = 1465,
  k_EMsgBSRemoveExpiredPaymentData = 1468,
  k_EMsgBSRemoveExpiredPaymentDataResponse = 1469,
  k_EMsgBSConvertToCurrentKeys = 1470,
  k_EMsgBSConvertToCurrentKeysResponse = 1471,
  k_EMsgBSInitPurchase = 1472,
  k_EMsgBSInitPurchaseResponse = 1473,
  k_EMsgBSCompletePurchase = 1474,
  k_EMsgBSCompletePurchaseResponse = 1475,
  k_EMsgBSPruneCardUsageStats = 1476,
  k_EMsgBSPruneCardUsageStatsResponse = 1477,
  k_EMsgBSStoreBankInformation = 1478,
  k_EMsgBSStoreBankInformationResponse = 1479,
  k_EMsgBSVerifyPOSAKey = 1480,
  k_EMsgBSVerifyPOSAKeyResponse = 1481,
  k_EMsgBSReverseRedeemPOSAKey = 1482,
  k_EMsgBSReverseRedeemPOSAKeyResponse = 1483,
  k_EMsgBSQueryFindCreditCard = 1484,
  k_EMsgBSQueryFindCreditCardResponse = 1485,
  k_EMsgBSStatusInquiryPOSAKey = 1486,
  k_EMsgBSStatusInquiryPOSAKeyResponse = 1487,
  k_EMsgBSBoaCompraConfirmProductDelivery = 1494,
  k_EMsgBSBoaCompraConfirmProductDeliveryResponse = 1495,
  k_EMsgBSGenerateBoaCompraMD5 = 1496,
  k_EMsgBSGenerateBoaCompraMD5Response = 1497,
  k_EMsgBSCommitWPTxn = 1498,
  k_EMsgBSCommitAdyenTxn = 1499,
  k_EMsgBaseATS = 1500,
  k_EMsgATSStartStressTest = 1501,
  k_EMsgATSStopStressTest = 1502,
  k_EMsgATSRunFailServerTest = 1503,
  k_EMsgATSUFSPerfTestTask = 1504,
  k_EMsgATSUFSPerfTestResponse = 1505,
  k_EMsgATSCycleTCM = 1506,
  k_EMsgATSInitDRMSStressTest = 1507,
  k_EMsgATSCallTest = 1508,
  k_EMsgATSCallTestReply = 1509,
  k_EMsgATSStartExternalStress = 1510,
  k_EMsgATSExternalStressJobStart = 1511,
  k_EMsgATSExternalStressJobQueued = 1512,
  k_EMsgATSExternalStressJobRunning = 1513,
  k_EMsgATSExternalStressJobStopped = 1514,
  k_EMsgATSExternalStressJobStopAll = 1515,
  k_EMsgATSExternalStressActionResult = 1516,
  k_EMsgATSStarted = 1517,
  k_EMsgATSCSPerfTestTask = 1518,
  k_EMsgATSCSPerfTestResponse = 1519,
  k_EMsgBaseDP = 1600,
  k_EMsgDPSetPublishingState = 1601,
  k_EMsgDPUniquePlayersStat = 1603,
  k_EMsgDPStreamingUniquePlayersStat = 1604,
  k_EMsgDPBlockingStats = 1607,
  k_EMsgDPNatTraversalStats = 1608,
  k_EMsgDPCloudStats = 1612,
  k_EMsgDPGetPlayerCount = 1615,
  k_EMsgDPGetPlayerCountResponse = 1616,
  k_EMsgDPGameServersPlayersStats = 1617,
  k_EMsgClientDPCheckSpecialSurvey = 1620,
  k_EMsgClientDPCheckSpecialSurveyResponse = 1621,
  k_EMsgClientDPSendSpecialSurveyResponse = 1622,
  k_EMsgClientDPSendSpecialSurveyResponseReply = 1623,
  k_EMsgDPStoreSaleStatistics = 1624,
  k_EMsgDPPartnerMicroTxns = 1628,
  k_EMsgDPPartnerMicroTxnsResponse = 1629,
  k_EMsgDPVRUniquePlayersStat = 1631,
  k_EMsgBaseCM = 1700,
  k_EMsgCMSetAllowState = 1701,
  k_EMsgCMSpewAllowState = 1702,
  k_EMsgCMSessionRejected = 1703,
  k_EMsgCMSetSecrets = 1704,
  k_EMsgCMGetSecrets = 1705,
  k_EMsgBaseGC = 2200,
  k_EMsgGCCmdRevive = 2203,
  k_EMsgGCCmdDown = 2206,
  k_EMsgGCCmdDeploy = 2207,
  k_EMsgGCCmdDeployResponse = 2208,
  k_EMsgGCCmdSwitch = 2209,
  k_EMsgAMRefreshSessions = 2210,
  k_EMsgGCAchievementAwarded = 2212,
  k_EMsgGCSystemMessage = 2213,
  k_EMsgGCCmdStatus = 2216,
  k_EMsgGCRegisterWebInterfaces_Deprecated = 2217,
  k_EMsgGCGetAccountDetails_DEPRECATED = 2218,
  k_EMsgGCInterAppMessage = 2219,
  k_EMsgGCGetEmailTemplate = 2220,
  k_EMsgGCGetEmailTemplateResponse = 2221,
  k_EMsgGCHRelay = 2222,
  k_EMsgGCHRelayToClient = 2223,
  k_EMsgGCHUpdateSession = 2224,
  k_EMsgGCHRequestUpdateSession = 2225,
  k_EMsgGCHRequestStatus = 2226,
  k_EMsgGCHRequestStatusResponse = 2227,
  k_EMsgGCHAccountVacStatusChange = 2228,
  k_EMsgGCHSpawnGC = 2229,
  k_EMsgGCHSpawnGCResponse = 2230,
  k_EMsgGCHKillGC = 2231,
  k_EMsgGCHKillGCResponse = 2232,
  k_EMsgGCHAccountTradeBanStatusChange = 2233,
  k_EMsgGCHAccountLockStatusChange = 2234,
  k_EMsgGCHVacVerificationChange = 2235,
  k_EMsgGCHAccountPhoneNumberChange = 2236,
  k_EMsgGCHAccountTwoFactorChange = 2237,
  k_EMsgGCHInviteUserToLobby = 2238,
  k_EMsgGCHUpdateMultipleSessions = 2239,
  k_EMsgGCHMarkAppSessionsAuthoritative = 2240,
  k_EMsgGCHRecurringSubscriptionStatusChange = 2241,
  k_EMsgGCHAppCheersReceived = 2242,
  k_EMsgGCHAppCheersGetAllowedTypes = 2243,
  k_EMsgGCHAppCheersGetAllowedTypesResponse = 2244,
  k_EMsgGCHRoutingRulesFromGCHtoGM = 2245,
  k_EMsgGCHRoutingRulesToGCHfromGM = 2246,
  k_EMsgUpdateCMMessageRateRules = 2247,
  k_EMsgBaseP2P = 2500,
  k_EMsgP2PIntroducerMessage = 2502,
  k_EMsgBaseSM = 2900,
  k_EMsgSMExpensiveReport = 2902,
  k_EMsgSMHourlyReport = 2903,
  k_EMsgSMPartitionRenames = 2905,
  k_EMsgSMMonitorSpace = 2906,
  k_EMsgSMTestNextBuildSchemaConversion = 2907,
  k_EMsgSMTestNextBuildSchemaConversionResponse = 2908,
  k_EMsgBaseTest = 3000,
  k_EMsgFailServer = 3000,
  k_EMsgJobHeartbeatTest = 3001,
  k_EMsgJobHeartbeatTestResponse = 3002,
  k_EMsgBaseFTSRange = 3100,
  k_EMsgBaseCCSRange = 3150,
  k_EMsgCCSDeleteAllCommentsByAuthor = 3161,
  k_EMsgCCSDeleteAllCommentsByAuthorResponse = 3162,
  k_EMsgBaseLBSRange = 3200,
  k_EMsgLBSSetScore = 3201,
  k_EMsgLBSSetScoreResponse = 3202,
  k_EMsgLBSFindOrCreateLB = 3203,
  k_EMsgLBSFindOrCreateLBResponse = 3204,
  k_EMsgLBSGetLBEntries = 3205,
  k_EMsgLBSGetLBEntriesResponse = 3206,
  k_EMsgLBSGetLBList = 3207,
  k_EMsgLBSGetLBListResponse = 3208,
  k_EMsgLBSSetLBDetails = 3209,
  k_EMsgLBSDeleteLB = 3210,
  k_EMsgLBSDeleteLBEntry = 3211,
  k_EMsgLBSResetLB = 3212,
  k_EMsgLBSResetLBResponse = 3213,
  k_EMsgLBSDeleteLBResponse = 3214,
  k_EMsgBaseOGS = 3400,
  k_EMsgOGSBeginSession = 3401,
  k_EMsgOGSBeginSessionResponse = 3402,
  k_EMsgOGSEndSession = 3403,
  k_EMsgOGSEndSessionResponse = 3404,
  k_EMsgOGSWriteAppSessionRow = 3406,
  k_EMsgBaseBRP = 3600,
  k_EMsgBRPPostTransactionTax = 3629,
  k_EMsgBRPPostTransactionTaxResponse = 3630,
  k_EMsgBaseAMRange2 = 4000,
  k_EMsgAMCreateChat = 4001,
  k_EMsgAMCreateChatResponse = 4002,
  k_EMsgAMSetProfileURL = 4005,
  k_EMsgAMGetAccountEmailAddress = 4006,
  k_EMsgAMGetAccountEmailAddressResponse = 4007,
  k_EMsgAMRequestClanData = 4008,
  k_EMsgAMRouteToClients = 4009,
  k_EMsgAMLeaveClan = 4010,
  k_EMsgAMClanPermissions = 4011,
  k_EMsgAMClanPermissionsResponse = 4012,
  k_EMsgAMCreateClanEventDummyForRateLimiting = 4013,
  k_EMsgAMUpdateClanEventDummyForRateLimiting = 4015,
  k_EMsgAMSetClanPermissionSettings = 4021,
  k_EMsgAMSetClanPermissionSettingsResponse = 4022,
  k_EMsgAMGetClanPermissionSettings = 4023,
  k_EMsgAMGetClanPermissionSettingsResponse = 4024,
  k_EMsgAMPublishChatRoomInfo = 4025,
  k_EMsgClientChatRoomInfo = 4026,
  k_EMsgAMGetClanHistory = 4039,
  k_EMsgAMGetClanHistoryResponse = 4040,
  k_EMsgAMGetClanPermissionBits = 4041,
  k_EMsgAMGetClanPermissionBitsResponse = 4042,
  k_EMsgAMSetClanPermissionBits = 4043,
  k_EMsgAMSetClanPermissionBitsResponse = 4044,
  k_EMsgAMSessionInfoRequest = 4045,
  k_EMsgAMSessionInfoResponse = 4046,
  k_EMsgAMValidateWGToken = 4047,
  k_EMsgAMGetClanRank = 4050,
  k_EMsgAMGetClanRankResponse = 4051,
  k_EMsgAMSetClanRank = 4052,
  k_EMsgAMSetClanRankResponse = 4053,
  k_EMsgAMGetClanPOTW = 4054,
  k_EMsgAMGetClanPOTWResponse = 4055,
  k_EMsgAMSetClanPOTW = 4056,
  k_EMsgAMSetClanPOTWResponse = 4057,
  k_EMsgAMDumpUser = 4059,
  k_EMsgAMKickUserFromClan = 4060,
  k_EMsgAMAddFounderToClan = 4061,
  k_EMsgAMValidateWGTokenResponse = 4062,
  k_EMsgAMSetAccountDetails = 4064,
  k_EMsgAMGetChatBanList = 4065,
  k_EMsgAMGetChatBanListResponse = 4066,
  k_EMsgAMUnBanFromChat = 4067,
  k_EMsgAMSetClanDetails = 4068,
  k_EMsgUGSGetUserGameStats = 4073,
  k_EMsgUGSGetUserGameStatsResponse = 4074,
  k_EMsgAMCheckClanMembership = 4075,
  k_EMsgAMGetClanMembers = 4076,
  k_EMsgAMGetClanMembersResponse = 4077,
  k_EMsgAMNotifyChatOfClanChange = 4079,
  k_EMsgAMResubmitPurchase = 4080,
  k_EMsgAMAddFriend = 4081,
  k_EMsgAMAddFriendResponse = 4082,
  k_EMsgAMRemoveFriend = 4083,
  k_EMsgAMDumpClan = 4084,
  k_EMsgAMChangeClanOwner = 4085,
  k_EMsgAMCancelEasyCollect = 4086,
  k_EMsgAMCancelEasyCollectResponse = 4087,
  k_EMsgAMClansInCommon = 4090,
  k_EMsgAMClansInCommonResponse = 4091,
  k_EMsgAMIsValidAccountID = 4092,
  k_EMsgAMWipeFriendsList = 4095,
  k_EMsgAMSetIgnored = 4096,
  k_EMsgAMClansInCommonCountResponse = 4097,
  k_EMsgAMFriendsList = 4098,
  k_EMsgAMFriendsListResponse = 4099,
  k_EMsgAMFriendsInCommon = 4100,
  k_EMsgAMFriendsInCommonResponse = 4101,
  k_EMsgAMFriendsInCommonCountResponse = 4102,
  k_EMsgAMClansInCommonCount = 4103,
  k_EMsgAMChallengeVerdict = 4104,
  k_EMsgAMChallengeNotification = 4105,
  k_EMsgAMFindGSByIP = 4106,
  k_EMsgAMFoundGSByIP = 4107,
  k_EMsgAMGiftRevoked = 4108,
  k_EMsgAMUserClanList = 4110,
  k_EMsgAMUserClanListResponse = 4111,
  k_EMsgAMGetAccountDetails2 = 4112,
  k_EMsgAMGetAccountDetailsResponse2 = 4113,
  k_EMsgAMSetCommunityProfileSettings = 4114,
  k_EMsgAMSetCommunityProfileSettingsResponse = 4115,
  k_EMsgAMGetCommunityPrivacyState = 4116,
  k_EMsgAMGetCommunityPrivacyStateResponse = 4117,
  k_EMsgAMCheckClanInviteRateLimiting = 4118,
  k_EMsgUGSGetUserAchievementStatus = 4119,
  k_EMsgAMGetIgnored = 4120,
  k_EMsgAMGetIgnoredResponse = 4121,
  k_EMsgAMSetIgnoredResponse = 4122,
  k_EMsgAMSetFriendRelationshipNone = 4123,
  k_EMsgAMGetFriendRelationship = 4124,
  k_EMsgAMGetFriendRelationshipResponse = 4125,
  k_EMsgAMServiceModulesCache = 4126,
  k_EMsgAMServiceModulesCall = 4127,
  k_EMsgAMServiceModulesCallResponse = 4128,
  k_EMsgCommunityAddFriendNews = 4140,
  k_EMsgAMFindClanUser = 4143,
  k_EMsgAMFindClanUserResponse = 4144,
  k_EMsgAMBanFromChat = 4145,
  k_EMsgAMGetUserNewsSubscriptions = 4147,
  k_EMsgAMGetUserNewsSubscriptionsResponse = 4148,
  k_EMsgAMSetUserNewsSubscriptions = 4149,
  k_EMsgAMSendQueuedEmails = 4152,
  k_EMsgAMSetLicenseFlags = 4153,
  k_EMsgCommunityDeleteUserNews = 4155,
  k_EMsgAMGetAccountStatus = 4158,
  k_EMsgAMGetAccountStatusResponse = 4159,
  k_EMsgAMEditBanReason = 4160,
  k_EMsgAMCheckClanMembershipResponse = 4161,
  k_EMsgAMProbeClanMembershipList = 4162,
  k_EMsgAMProbeClanMembershipListResponse = 4163,
  k_EMsgUGSGetUserAchievementStatusResponse = 4164,
  k_EMsgAMGetFriendsLobbies = 4165,
  k_EMsgAMGetFriendsLobbiesResponse = 4166,
  k_EMsgAMGetUserFriendNewsResponse = 4172,
  k_EMsgCommunityGetUserFriendNews = 4173,
  k_EMsgAMGetUserClansNewsResponse = 4174,
  k_EMsgAMGetUserClansNews = 4175,
  k_EMsgAMGetPreviousCBAccount = 4184,
  k_EMsgAMGetPreviousCBAccountResponse = 4185,
  k_EMsgAMGetUserLicenseHistory = 4190,
  k_EMsgAMGetUserLicenseHistoryResponse = 4191,
  k_EMsgAMSupportChangePassword = 4194,
  k_EMsgAMSupportChangeEmail = 4195,
  k_EMsgAMResetUserVerificationGSByIP = 4197,
  k_EMsgAMUpdateGSPlayStats = 4198,
  k_EMsgAMSupportEnableOrDisable = 4199,
  k_EMsgAMGetPurchaseStatus = 4206,
  k_EMsgAMSupportIsAccountEnabled = 4209,
  k_EMsgAMSupportIsAccountEnabledResponse = 4210,
  k_EMsgUGSGetUserStats = 4211,
  k_EMsgAMGSSearch = 4213,
  k_EMsgChatServerRouteFriendMsg = 4219,
  k_EMsgAMTicketAuthRequestOrResponse = 4220,
  k_EMsgAMAddFreeLicense = 4224,
  k_EMsgAMValidateEmailLink = 4231,
  k_EMsgAMValidateEmailLinkResponse = 4232,
  k_EMsgUGSStoreUserStats = 4236,
  k_EMsgAMDeleteStoredCard = 4241,
  k_EMsgAMRevokeLegacyGameKeys = 4242,
  k_EMsgAMGetWalletDetails = 4244,
  k_EMsgAMGetWalletDetailsResponse = 4245,
  k_EMsgAMDeleteStoredPaymentInfo = 4246,
  k_EMsgAMGetStoredPaymentSummary = 4247,
  k_EMsgAMGetStoredPaymentSummaryResponse = 4248,
  k_EMsgAMGetWalletConversionRate = 4249,
  k_EMsgAMGetWalletConversionRateResponse = 4250,
  k_EMsgAMConvertWallet = 4251,
  k_EMsgAMConvertWalletResponse = 4252,
  k_EMsgAMSetPreApproval = 4255,
  k_EMsgAMSetPreApprovalResponse = 4256,
  k_EMsgAMCreateRefund = 4258,
  k_EMsgAMCreateChargeback = 4260,
  k_EMsgAMCreateDispute = 4262,
  k_EMsgAMClearDispute = 4264,
  k_EMsgAMCreateFinancialAdjustment = 4265,
  k_EMsgAMPlayerNicknameList = 4266,
  k_EMsgAMPlayerNicknameListResponse = 4267,
  k_EMsgAMGetUserCurrentGameInfo = 4269,
  k_EMsgAMGetUserCurrentGameInfoResponse = 4270,
  k_EMsgAMGetGSPlayerList = 4271,
  k_EMsgAMGetGSPlayerListResponse = 4272,
  k_EMsgAMGetSteamIDForMicroTxn = 4278,
  k_EMsgAMGetSteamIDForMicroTxnResponse = 4279,
  k_EMsgAMSetPartnerMember = 4280,
  k_EMsgAMRemovePublisherUser = 4281,
  k_EMsgAMGetUserLicenseList = 4282,
  k_EMsgAMGetUserLicenseListResponse = 4283,
  k_EMsgAMReloadGameGroupPolicy = 4284,
  k_EMsgAMAddFreeLicenseResponse = 4285,
  k_EMsgAMVACStatusUpdate = 4286,
  k_EMsgAMGetAccountDetails = 4287,
  k_EMsgAMGetAccountDetailsResponse = 4288,
  k_EMsgAMGetPlayerLinkDetails = 4289,
  k_EMsgAMGetPlayerLinkDetailsResponse = 4290,
  k_EMsgAMGetAccountFlagsForWGSpoofing = 4294,
  k_EMsgAMGetAccountFlagsForWGSpoofingResponse = 4295,
  k_EMsgAMGetClanOfficers = 4298,
  k_EMsgAMGetClanOfficersResponse = 4299,
  k_EMsgAMNameChange = 4300,
  k_EMsgAMGetNameHistory = 4301,
  k_EMsgAMGetNameHistoryResponse = 4302,
  k_EMsgAMUpdateProviderStatus = 4305,
  k_EMsgAMSupportRemoveAccountSecurity = 4307,
  k_EMsgAMIsAccountInCaptchaGracePeriod = 4308,
  k_EMsgAMIsAccountInCaptchaGracePeriodResponse = 4309,
  k_EMsgAMAccountPS3Unlink = 4310,
  k_EMsgAMAccountPS3UnlinkResponse = 4311,
  k_EMsgUGSStoreUserStatsResponse = 4312,
  k_EMsgAMGetAccountPSNInfo = 4313,
  k_EMsgAMGetAccountPSNInfoResponse = 4314,
  k_EMsgAMAuthenticatedPlayerList = 4315,
  k_EMsgAMGetUserGifts = 4316,
  k_EMsgAMGetUserGiftsResponse = 4317,
  k_EMsgAMTransferLockedGifts = 4320,
  k_EMsgAMTransferLockedGiftsResponse = 4321,
  k_EMsgAMPlayerHostedOnGameServer = 4322,
  k_EMsgAMGetAccountBanInfo = 4323,
  k_EMsgAMGetAccountBanInfoResponse = 4324,
  k_EMsgAMRecordBanEnforcement = 4325,
  k_EMsgAMRollbackGiftTransfer = 4326,
  k_EMsgAMRollbackGiftTransferResponse = 4327,
  k_EMsgAMHandlePendingTransaction = 4328,
  k_EMsgAMRequestClanDetails = 4329,
  k_EMsgAMDeleteStoredPaypalAgreement = 4330,
  k_EMsgAMGameServerUpdate = 4331,
  k_EMsgAMGameServerRemove = 4332,
  k_EMsgAMGetPaypalAgreements = 4333,
  k_EMsgAMGetPaypalAgreementsResponse = 4334,
  k_EMsgAMGameServerPlayerCompatibilityCheck = 4335,
  k_EMsgAMGameServerPlayerCompatibilityCheckResponse = 4336,
  k_EMsgAMRenewLicense = 4337,
  k_EMsgAMGetAccountCommunityBanInfo = 4338,
  k_EMsgAMGetAccountCommunityBanInfoResponse = 4339,
  k_EMsgAMGameServerAccountChangePassword = 4340,
  k_EMsgAMGameServerAccountDeleteAccount = 4341,
  k_EMsgAMRenewAgreement = 4342,
  k_EMsgAMXsollaPayment = 4344,
  k_EMsgAMXsollaPaymentResponse = 4345,
  k_EMsgAMAcctAllowedToPurchase = 4346,
  k_EMsgAMAcctAllowedToPurchaseResponse = 4347,
  k_EMsgAMSwapKioskDeposit = 4348,
  k_EMsgAMSwapKioskDepositResponse = 4349,
  k_EMsgAMSetUserGiftUnowned = 4350,
  k_EMsgAMSetUserGiftUnownedResponse = 4351,
  k_EMsgAMClaimUnownedUserGift = 4352,
  k_EMsgAMClaimUnownedUserGiftResponse = 4353,
  k_EMsgAMSetClanName = 4354,
  k_EMsgAMSetClanNameResponse = 4355,
  k_EMsgAMGrantCoupon = 4356,
  k_EMsgAMGrantCouponResponse = 4357,
  k_EMsgAMIsPackageRestrictedInUserCountry = 4358,
  k_EMsgAMIsPackageRestrictedInUserCountryResponse = 4359,
  k_EMsgAMHandlePendingTransactionResponse = 4360,
  k_EMsgAMGrantGuestPasses2 = 4361,
  k_EMsgAMGrantGuestPasses2Response = 4362,
  k_EMsgAMGetPlayerBanDetails = 4365,
  k_EMsgAMGetPlayerBanDetailsResponse = 4366,
  k_EMsgAMFinalizePurchase = 4367,
  k_EMsgAMFinalizePurchaseResponse = 4368,
  k_EMsgAMPersonaChangeResponse = 4372,
  k_EMsgAMGetClanDetailsForForumCreation = 4373,
  k_EMsgAMGetClanDetailsForForumCreationResponse = 4374,
  k_EMsgAMGetPendingNotificationCount = 4375,
  k_EMsgAMGetPendingNotificationCountResponse = 4376,
  k_EMsgAMPasswordHashUpgrade = 4377,
  k_EMsgAMBoaCompraPayment = 4380,
  k_EMsgAMBoaCompraPaymentResponse = 4381,
  k_EMsgAMCompleteExternalPurchase = 4383,
  k_EMsgAMCompleteExternalPurchaseResponse = 4384,
  k_EMsgAMResolveNegativeWalletCredits = 4385,
  k_EMsgAMResolveNegativeWalletCreditsResponse = 4386,
  k_EMsgAMPlayerGetClanBasicDetails = 4389,
  k_EMsgAMPlayerGetClanBasicDetailsResponse = 4390,
  k_EMsgAMMOLPayment = 4391,
  k_EMsgAMMOLPaymentResponse = 4392,
  k_EMsgGetUserIPCountry = 4393,
  k_EMsgGetUserIPCountryResponse = 4394,
  k_EMsgNotificationOfSuspiciousActivity = 4395,
  k_EMsgAMDegicaPayment = 4396,
  k_EMsgAMDegicaPaymentResponse = 4397,
  k_EMsgAMEClubPayment = 4398,
  k_EMsgAMEClubPaymentResponse = 4399,
  k_EMsgAMPayPalPaymentsHubPayment = 4400,
  k_EMsgAMPayPalPaymentsHubPaymentResponse = 4401,
  k_EMsgAMTwoFactorRecoverAuthenticatorRequest = 4402,
  k_EMsgAMTwoFactorRecoverAuthenticatorResponse = 4403,
  k_EMsgAMSmart2PayPayment = 4404,
  k_EMsgAMSmart2PayPaymentResponse = 4405,
  k_EMsgAMValidatePasswordResetCodeAndSendSmsRequest = 4406,
  k_EMsgAMValidatePasswordResetCodeAndSendSmsResponse = 4407,
  k_EMsgAMGetAccountResetDetailsRequest = 4408,
  k_EMsgAMGetAccountResetDetailsResponse = 4409,
  k_EMsgAMBitPayPayment = 4410,
  k_EMsgAMBitPayPaymentResponse = 4411,
  k_EMsgAMSendAccountInfoUpdate = 4412,
  k_EMsgAMSendScheduledGift = 4413,
  k_EMsgAMNodwinPayment = 4414,
  k_EMsgAMNodwinPaymentResponse = 4415,
  k_EMsgAMResolveWalletRevoke = 4416,
  k_EMsgAMResolveWalletReverseRevoke = 4417,
  k_EMsgAMFundedPayment = 4418,
  k_EMsgAMFundedPaymentResponse = 4419,
  k_EMsgAMRequestPersonaUpdateForChatServer = 4420,
  k_EMsgAMPerfectWorldPayment = 4421,
  k_EMsgAMPerfectWorldPaymentResponse = 4422,
  k_EMsgAMECommPayPayment = 4423,
  k_EMsgAMECommPayPaymentResponse = 4424,
  k_EMsgAMSetRemoteClientID = 4425,
  k_EMsgBasePSRange = 5000,
  k_EMsgPSCreateShoppingCart = 5001,
  k_EMsgPSCreateShoppingCartResponse = 5002,
  k_EMsgPSIsValidShoppingCart = 5003,
  k_EMsgPSIsValidShoppingCartResponse = 5004,
  k_EMsgPSRemoveLineItemFromShoppingCart = 5007,
  k_EMsgPSRemoveLineItemFromShoppingCartResponse = 5008,
  k_EMsgPSGetShoppingCartContents = 5009,
  k_EMsgPSGetShoppingCartContentsResponse = 5010,
  k_EMsgPSAddWalletCreditToShoppingCart = 5011,
  k_EMsgPSAddWalletCreditToShoppingCartResponse = 5012,
  k_EMsgBaseUFSRange = 5200,
  k_EMsgClientUFSUploadFileRequest = 5202,
  k_EMsgClientUFSUploadFileResponse = 5203,
  k_EMsgClientUFSUploadFileChunk = 5204,
  k_EMsgClientUFSUploadFileFinished = 5205,
  k_EMsgClientUFSGetFileListForApp = 5206,
  k_EMsgClientUFSGetFileListForAppResponse = 5207,
  k_EMsgClientUFSDownloadRequest = 5210,
  k_EMsgClientUFSDownloadResponse = 5211,
  k_EMsgClientUFSDownloadChunk = 5212,
  k_EMsgClientUFSLoginRequest = 5213,
  k_EMsgClientUFSLoginResponse = 5214,
  k_EMsgUFSReloadPartitionInfo = 5215,
  k_EMsgClientUFSTransferHeartbeat = 5216,
  k_EMsgUFSSynchronizeFile = 5217,
  k_EMsgUFSSynchronizeFileResponse = 5218,
  k_EMsgClientUFSDeleteFileRequest = 5219,
  k_EMsgClientUFSDeleteFileResponse = 5220,
  k_EMsgClientUFSGetUGCDetails = 5226,
  k_EMsgClientUFSGetUGCDetailsResponse = 5227,
  k_EMsgUFSUpdateFileFlags = 5228,
  k_EMsgUFSUpdateFileFlagsResponse = 5229,
  k_EMsgClientUFSGetSingleFileInfo = 5230,
  k_EMsgClientUFSGetSingleFileInfoResponse = 5231,
  k_EMsgClientUFSShareFile = 5232,
  k_EMsgClientUFSShareFileResponse = 5233,
  k_EMsgUFSReloadAccount = 5234,
  k_EMsgUFSReloadAccountResponse = 5235,
  k_EMsgUFSUpdateRecordBatched = 5236,
  k_EMsgUFSUpdateRecordBatchedResponse = 5237,
  k_EMsgUFSMigrateFile = 5238,
  k_EMsgUFSMigrateFileResponse = 5239,
  k_EMsgUFSGetUGCURLs = 5240,
  k_EMsgUFSGetUGCURLsResponse = 5241,
  k_EMsgUFSHttpUploadFileFinishRequest = 5242,
  k_EMsgUFSHttpUploadFileFinishResponse = 5243,
  k_EMsgUFSDownloadStartRequest = 5244,
  k_EMsgUFSDownloadStartResponse = 5245,
  k_EMsgUFSDownloadChunkRequest = 5246,
  k_EMsgUFSDownloadChunkResponse = 5247,
  k_EMsgUFSDownloadFinishRequest = 5248,
  k_EMsgUFSDownloadFinishResponse = 5249,
  k_EMsgUFSFlushURLCache = 5250,
  k_EMsgClientUFSUploadCommit = 5251,
  k_EMsgClientUFSUploadCommitResponse = 5252,
  k_EMsgUFSMigrateFileAppID = 5253,
  k_EMsgUFSMigrateFileAppIDResponse = 5254,
  k_EMsgBaseClient2 = 5400,
  k_EMsgClientRequestForgottenPasswordEmail = 5401,
  k_EMsgClientRequestForgottenPasswordEmailResponse = 5402,
  k_EMsgClientCreateAccountResponse = 5403,
  k_EMsgClientResetForgottenPassword = 5404,
  k_EMsgClientResetForgottenPasswordResponse = 5405,
  k_EMsgClientInformOfResetForgottenPassword = 5407,
  k_EMsgClientInformOfResetForgottenPasswordResponse = 5408,
  k_EMsgClientAnonUserLogOn_Deprecated = 5409,
  k_EMsgClientGamesPlayedWithDataBlob = 5410,
  k_EMsgClientUpdateUserGameInfo = 5411,
  k_EMsgClientFileToDownload = 5412,
  k_EMsgClientFileToDownloadResponse = 5413,
  k_EMsgClientLBSSetScore = 5414,
  k_EMsgClientLBSSetScoreResponse = 5415,
  k_EMsgClientLBSFindOrCreateLB = 5416,
  k_EMsgClientLBSFindOrCreateLBResponse = 5417,
  k_EMsgClientLBSGetLBEntries = 5418,
  k_EMsgClientLBSGetLBEntriesResponse = 5419,
  k_EMsgClientChatDeclined = 5426,
  k_EMsgClientFriendMsgIncoming = 5427,
  k_EMsgClientAuthList_Deprecated = 5428,
  k_EMsgClientTicketAuthComplete = 5429,
  k_EMsgClientIsLimitedAccount = 5430,
  k_EMsgClientRequestAuthList = 5431,
  k_EMsgClientAuthList = 5432,
  k_EMsgClientStat = 5433,
  k_EMsgClientP2PConnectionInfo = 5434,
  k_EMsgClientP2PConnectionFailInfo = 5435,
  k_EMsgClientGetDepotDecryptionKey = 5438,
  k_EMsgClientGetDepotDecryptionKeyResponse = 5439,
  k_EMsgClientEnableTestLicense = 5443,
  k_EMsgClientEnableTestLicenseResponse = 5444,
  k_EMsgClientDisableTestLicense = 5445,
  k_EMsgClientDisableTestLicenseResponse = 5446,
  k_EMsgClientRequestValidationMail = 5448,
  k_EMsgClientRequestValidationMailResponse = 5449,
  k_EMsgClientCheckAppBetaPassword = 5450,
  k_EMsgClientCheckAppBetaPasswordResponse = 5451,
  k_EMsgClientToGC = 5452,
  k_EMsgClientFromGC = 5453,
  k_EMsgClientEmailAddrInfo = 5456,
  k_EMsgClientPasswordChange3 = 5457,
  k_EMsgClientEmailChange3 = 5458,
  k_EMsgClientPersonalQAChange3 = 5459,
  k_EMsgClientResetForgottenPassword3 = 5460,
  k_EMsgClientRequestForgottenPasswordEmail3 = 5461,
  k_EMsgClientNewLoginKey = 5463,
  k_EMsgClientNewLoginKeyAccepted = 5464,
  k_EMsgClientLogOnWithHash_Deprecated = 5465,
  k_EMsgClientStoreUserStats2 = 5466,
  k_EMsgClientStatsUpdated = 5467,
  k_EMsgClientActivateOEMLicense = 5468,
  k_EMsgClientRegisterOEMMachine = 5469,
  k_EMsgClientRegisterOEMMachineResponse = 5470,
  k_EMsgClientRequestedClientStats = 5480,
  k_EMsgClientStat2Int32 = 5481,
  k_EMsgClientStat2 = 5482,
  k_EMsgClientVerifyPassword = 5483,
  k_EMsgClientVerifyPasswordResponse = 5484,
  k_EMsgClientDRMDownloadRequest = 5485,
  k_EMsgClientDRMDownloadResponse = 5486,
  k_EMsgClientDRMFinalResult = 5487,
  k_EMsgClientGetFriendsWhoPlayGame = 5488,
  k_EMsgClientGetFriendsWhoPlayGameResponse = 5489,
  k_EMsgClientOGSBeginSession = 5490,
  k_EMsgClientOGSBeginSessionResponse = 5491,
  k_EMsgClientOGSEndSession = 5492,
  k_EMsgClientOGSEndSessionResponse = 5493,
  k_EMsgClientOGSWriteRow = 5494,
  k_EMsgClientGetPeerContentInfo = 5495,
  k_EMsgClientGetPeerContentInfoResponse = 5496,
  k_EMsgClientStartPeerContentServer = 5497,
  k_EMsgClientStartPeerContentServerResponse = 5498,
  k_EMsgClientServerUnavailable = 5500,
  k_EMsgClientServersAvailable = 5501,
  k_EMsgClientRegisterAuthTicketWithCM = 5502,
  k_EMsgClientGCMsgFailed = 5503,
  k_EMsgClientMicroTxnAuthRequest = 5504,
  k_EMsgClientMicroTxnAuthorize = 5505,
  k_EMsgClientMicroTxnAuthorizeResponse = 5506,
  k_EMsgClientGetMicroTxnInfo = 5508,
  k_EMsgClientGetMicroTxnInfoResponse = 5509,
  k_EMsgClientDeregisterWithServer = 5511,
  k_EMsgClientSubscribeToPersonaFeed = 5512,
  k_EMsgClientLogon = 5514,
  k_EMsgClientGetClientDetails = 5515,
  k_EMsgClientGetClientDetailsResponse = 5516,
  k_EMsgClientReportOverlayDetourFailure = 5517,
  k_EMsgClientGetClientAppList = 5518,
  k_EMsgClientGetClientAppListResponse = 5519,
  k_EMsgClientInstallClientApp = 5520,
  k_EMsgClientInstallClientAppResponse = 5521,
  k_EMsgClientUninstallClientApp = 5522,
  k_EMsgClientUninstallClientAppResponse = 5523,
  k_EMsgClientSetClientAppUpdateState = 5524,
  k_EMsgClientSetClientAppUpdateStateResponse = 5525,
  k_EMsgClientRequestEncryptedAppTicket = 5526,
  k_EMsgClientRequestEncryptedAppTicketResponse = 5527,
  k_EMsgClientWalletInfoUpdate = 5528,
  k_EMsgClientLBSSetUGC = 5529,
  k_EMsgClientLBSSetUGCResponse = 5530,
  k_EMsgClientAMGetClanOfficers = 5531,
  k_EMsgClientAMGetClanOfficersResponse = 5532,
  k_EMsgClientFriendProfileInfo = 5535,
  k_EMsgClientFriendProfileInfoResponse = 5536,
  k_EMsgClientUpdateMachineAuth = 5537,
  k_EMsgClientUpdateMachineAuthResponse = 5538,
  k_EMsgClientReadMachineAuth = 5539,
  k_EMsgClientReadMachineAuthResponse = 5540,
  k_EMsgClientRequestMachineAuth = 5541,
  k_EMsgClientRequestMachineAuthResponse = 5542,
  k_EMsgClientScreenshotsChanged = 5543,
  k_EMsgClientGetCDNAuthToken = 5546,
  k_EMsgClientGetCDNAuthTokenResponse = 5547,
  k_EMsgClientDownloadRateStatistics = 5548,
  k_EMsgClientRequestAccountData = 5549,
  k_EMsgClientRequestAccountDataResponse = 5550,
  k_EMsgClientResetForgottenPassword4 = 5551,
  k_EMsgClientHideFriend = 5552,
  k_EMsgClientFriendsGroupsList = 5553,
  k_EMsgClientGetClanActivityCounts = 5554,
  k_EMsgClientGetClanActivityCountsResponse = 5555,
  k_EMsgClientOGSReportString = 5556,
  k_EMsgClientOGSReportBug = 5557,
  k_EMsgClientSentLogs = 5558,
  k_EMsgClientLogonGameServer = 5559,
  k_EMsgAMClientCreateFriendsGroup = 5560,
  k_EMsgAMClientCreateFriendsGroupResponse = 5561,
  k_EMsgAMClientDeleteFriendsGroup = 5562,
  k_EMsgAMClientDeleteFriendsGroupResponse = 5563,
  k_EMsgAMClientManageFriendsGroup = 5564,
  k_EMsgAMClientManageFriendsGroupResponse = 5565,
  k_EMsgAMClientAddFriendToGroup = 5566,
  k_EMsgAMClientAddFriendToGroupResponse = 5567,
  k_EMsgAMClientRemoveFriendFromGroup = 5568,
  k_EMsgAMClientRemoveFriendFromGroupResponse = 5569,
  k_EMsgClientAMGetPersonaNameHistory = 5570,
  k_EMsgClientAMGetPersonaNameHistoryResponse = 5571,
  k_EMsgClientRequestFreeLicense = 5572,
  k_EMsgClientRequestFreeLicenseResponse = 5573,
  k_EMsgClientDRMDownloadRequestWithCrashData = 5574,
  k_EMsgClientAuthListAck = 5575,
  k_EMsgClientItemAnnouncements = 5576,
  k_EMsgClientRequestItemAnnouncements = 5577,
  k_EMsgClientFriendMsgEchoToSender = 5578,
  k_EMsgClientCommentNotifications = 5582,
  k_EMsgClientRequestCommentNotifications = 5583,
  k_EMsgClientPersonaChangeResponse = 5584,
  k_EMsgClientRequestWebAPIAuthenticateUserNonce = 5585,
  k_EMsgClientRequestWebAPIAuthenticateUserNonceResponse = 5586,
  k_EMsgClientPlayerNicknameList = 5587,
  k_EMsgAMClientSetPlayerNickname = 5588,
  k_EMsgAMClientSetPlayerNicknameResponse = 5589,
  k_EMsgClientGetNumberOfCurrentPlayersDP = 5592,
  k_EMsgClientGetNumberOfCurrentPlayersDPResponse = 5593,
  k_EMsgClientServiceMethodLegacy = 5594,
  k_EMsgClientServiceMethodLegacyResponse = 5595,
  k_EMsgClientFriendUserStatusPublished = 5596,
  k_EMsgClientCurrentUIMode = 5597,
  k_EMsgClientVanityURLChangedNotification = 5598,
  k_EMsgClientUserNotifications = 5599,
  k_EMsgBaseDFS = 5600,
  k_EMsgDFSGetFile = 5601,
  k_EMsgDFSInstallLocalFile = 5602,
  k_EMsgDFSConnection = 5603,
  k_EMsgDFSConnectionReply = 5604,
  k_EMsgClientDFSAuthenticateRequest = 5605,
  k_EMsgClientDFSAuthenticateResponse = 5606,
  k_EMsgClientDFSEndSession = 5607,
  k_EMsgDFSPurgeFile = 5608,
  k_EMsgDFSRouteFile = 5609,
  k_EMsgDFSGetFileFromServer = 5610,
  k_EMsgDFSAcceptedResponse = 5611,
  k_EMsgDFSRequestPingback = 5612,
  k_EMsgDFSRecvTransmitFile = 5613,
  k_EMsgDFSSendTransmitFile = 5614,
  k_EMsgDFSRequestPingback2 = 5615,
  k_EMsgDFSResponsePingback2 = 5616,
  k_EMsgClientDFSDownloadStatus = 5617,
  k_EMsgDFSStartTransfer = 5618,
  k_EMsgDFSTransferComplete = 5619,
  k_EMsgDFSRouteFileResponse = 5620,
  k_EMsgClientNetworkingCertRequest = 5621,
  k_EMsgClientNetworkingCertRequestResponse = 5622,
  k_EMsgClientChallengeRequest = 5623,
  k_EMsgClientChallengeResponse = 5624,
  k_EMsgBadgeCraftedNotification = 5625,
  k_EMsgClientNetworkingMobileCertRequest = 5626,
  k_EMsgClientNetworkingMobileCertRequestResponse = 5627,
  k_EMsgBaseMDS = 5800,
  k_EMsgMDSGetDepotDecryptionKey = 5812,
  k_EMsgMDSGetDepotDecryptionKeyResponse = 5813,
  k_EMsgMDSContentServerConfigRequest = 5827,
  k_EMsgMDSContentServerConfig = 5828,
  k_EMsgMDSGetDepotManifest = 5829,
  k_EMsgMDSGetDepotManifestResponse = 5830,
  k_EMsgMDSGetDepotManifestChunk = 5831,
  k_EMsgMDSGetDepotChunk = 5832,
  k_EMsgMDSGetDepotChunkResponse = 5833,
  k_EMsgMDSGetDepotChunkChunk = 5834,
  k_EMsgMDSToCSFlushChunk = 5844,
  k_EMsgMDSMigrateChunk = 5847,
  k_EMsgMDSMigrateChunkResponse = 5848,
  k_EMsgMDSToCSFlushManifest = 5849,
  k_EMsgCSBase = 6200,
  k_EMsgCSPing = 6201,
  k_EMsgCSPingResponse = 6202,
  k_EMsgGMSBase = 6400,
  k_EMsgGMSGameServerReplicate = 6401,
  k_EMsgClientGMSServerQuery = 6403,
  k_EMsgGMSClientServerQueryResponse = 6404,
  k_EMsgAMGMSGameServerUpdate = 6405,
  k_EMsgAMGMSGameServerRemove = 6406,
  k_EMsgGameServerOutOfDate = 6407,
  k_EMsgDeviceAuthorizationBase = 6500,
  k_EMsgClientAuthorizeLocalDeviceRequest = 6501,
  k_EMsgClientAuthorizeLocalDeviceResponse = 6502,
  k_EMsgClientDeauthorizeDeviceRequest = 6503,
  k_EMsgClientDeauthorizeDevice = 6504,
  k_EMsgClientUseLocalDeviceAuthorizations = 6505,
  k_EMsgClientGetAuthorizedDevices = 6506,
  k_EMsgClientGetAuthorizedDevicesResponse = 6507,
  k_EMsgAMNotifySessionDeviceAuthorized = 6508,
  k_EMsgClientAuthorizeLocalDeviceNotification = 6509,
  k_EMsgMMSBase = 6600,
  k_EMsgClientMMSCreateLobby = 6601,
  k_EMsgClientMMSCreateLobbyResponse = 6602,
  k_EMsgClientMMSJoinLobby = 6603,
  k_EMsgClientMMSJoinLobbyResponse = 6604,
  k_EMsgClientMMSLeaveLobby = 6605,
  k_EMsgClientMMSLeaveLobbyResponse = 6606,
  k_EMsgClientMMSGetLobbyList = 6607,
  k_EMsgClientMMSGetLobbyListResponse = 6608,
  k_EMsgClientMMSSetLobbyData = 6609,
  k_EMsgClientMMSSetLobbyDataResponse = 6610,
  k_EMsgClientMMSGetLobbyData = 6611,
  k_EMsgClientMMSLobbyData = 6612,
  k_EMsgClientMMSSendLobbyChatMsg = 6613,
  k_EMsgClientMMSLobbyChatMsg = 6614,
  k_EMsgClientMMSSetLobbyOwner = 6615,
  k_EMsgClientMMSSetLobbyOwnerResponse = 6616,
  k_EMsgClientMMSSetLobbyGameServer = 6617,
  k_EMsgClientMMSLobbyGameServerSet = 6618,
  k_EMsgClientMMSUserJoinedLobby = 6619,
  k_EMsgClientMMSUserLeftLobby = 6620,
  k_EMsgClientMMSInviteToLobby = 6621,
  k_EMsgClientMMSFlushFrenemyListCache = 6622,
  k_EMsgClientMMSFlushFrenemyListCacheResponse = 6623,
  k_EMsgClientMMSSetLobbyLinked = 6624,
  k_EMsgClientMMSSetRatelimitPolicyOnClient = 6625,
  k_EMsgClientMMSGetLobbyStatus = 6626,
  k_EMsgClientMMSGetLobbyStatusResponse = 6627,
  k_EMsgMMSGetLobbyList = 6628,
  k_EMsgMMSGetLobbyListResponse = 6629,
  k_EMsgNonStdMsgBase = 6800,
  k_EMsgNonStdMsgMemcached = 6801,
  k_EMsgNonStdMsgHTTPServer = 6802,
  k_EMsgNonStdMsgHTTPClient = 6803,
  k_EMsgNonStdMsgWGResponse = 6804,
  k_EMsgNonStdMsgPHPSimulator = 6805,
  k_EMsgNonStdMsgChase = 6806,
  k_EMsgNonStdMsgDFSTransfer = 6807,
  k_EMsgNonStdMsgTests = 6808,
  k_EMsgNonStdMsgUMQpipeAAPL = 6809,
  k_EMSgNonStdMsgSyslog = 6810,
  k_EMsgNonStdMsgLogsink = 6811,
  k_EMsgNonStdMsgSteam2Emulator = 6812,
  k_EMsgNonStdMsgRTMPServer = 6813,
  k_EMsgNonStdMsgWebSocket = 6814,
  k_EMsgNonStdMsgRedis = 6815,
  k_EMsgUDSBase = 7000,
  k_EMsgClientUDSP2PSessionStarted = 7001,
  k_EMsgClientUDSP2PSessionEnded = 7002,
  k_EMsgUDSRenderUserAuth = 7003,
  k_EMsgUDSRenderUserAuthResponse = 7004,
  k_EMsgClientInviteToGame = 7005,
  k_EMsgUDSHasSession = 7006,
  k_EMsgUDSHasSessionResponse = 7007,
  k_EMsgMPASBase = 7100,
  k_EMsgMPASVacBanReset = 7101,
  k_EMsgKGSBase = 7200,
  k_EMsgUCMBase = 7300,
  k_EMsgClientUCMAddScreenshot = 7301,
  k_EMsgClientUCMAddScreenshotResponse = 7302,
  k_EMsgUCMResetCommunityContent = 7307,
  k_EMsgUCMResetCommunityContentResponse = 7308,
  k_EMsgClientUCMDeleteScreenshot = 7309,
  k_EMsgClientUCMDeleteScreenshotResponse = 7310,
  k_EMsgClientUCMPublishFile = 7311,
  k_EMsgClientUCMPublishFileResponse = 7312,
  k_EMsgClientUCMDeletePublishedFile = 7315,
  k_EMsgClientUCMDeletePublishedFileResponse = 7316,
  k_EMsgClientUCMUpdatePublishedFile = 7325,
  k_EMsgClientUCMUpdatePublishedFileResponse = 7326,
  k_EMsgUCMUpdatePublishedFile = 7327,
  k_EMsgUCMUpdatePublishedFileResponse = 7328,
  k_EMsgUCMUpdatePublishedFileStat = 7331,
  k_EMsgUCMReloadPublishedFile = 7337,
  k_EMsgUCMReloadUserFileListCaches = 7338,
  k_EMsgUCMPublishedFileReported = 7339,
  k_EMsgUCMPublishedFilePreviewAdd = 7341,
  k_EMsgUCMPublishedFilePreviewAddResponse = 7342,
  k_EMsgUCMPublishedFilePreviewRemove = 7343,
  k_EMsgUCMPublishedFilePreviewRemoveResponse = 7344,
  k_EMsgUCMPublishedFileSubscribed = 7349,
  k_EMsgUCMPublishedFileUnsubscribed = 7350,
  k_EMsgUCMPublishFile = 7351,
  k_EMsgUCMPublishFileResponse = 7352,
  k_EMsgUCMPublishedFileChildAdd = 7353,
  k_EMsgUCMPublishedFileChildAddResponse = 7354,
  k_EMsgUCMPublishedFileChildRemove = 7355,
  k_EMsgUCMPublishedFileChildRemoveResponse = 7356,
  k_EMsgUCMPublishedFileParentChanged = 7359,
  k_EMsgClientUCMSetUserPublishedFileAction = 7364,
  k_EMsgClientUCMSetUserPublishedFileActionResponse = 7365,
  k_EMsgClientUCMEnumeratePublishedFilesByUserAction = 7366,
  k_EMsgClientUCMEnumeratePublishedFilesByUserActionResponse = 7367,
  k_EMsgUCMGetUserSubscribedFiles = 7369,
  k_EMsgUCMGetUserSubscribedFilesResponse = 7370,
  k_EMsgUCMFixStatsPublishedFile = 7371,
  k_EMsgClientUCMEnumerateUserSubscribedFilesWithUpdates = 7378,
  k_EMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse = 7379,
  k_EMsgUCMPublishedFileContentUpdated = 7380,
  k_EMsgClientUCMPublishedFileUpdated = 7381,
  k_EMsgFSBase = 7500,
  k_EMsgClientRichPresenceUpload = 7501,
  k_EMsgClientRichPresenceRequest = 7502,
  k_EMsgClientRichPresenceInfo = 7503,
  k_EMsgFSRichPresenceRequest = 7504,
  k_EMsgFSRichPresenceResponse = 7505,
  k_EMsgFSComputeFrenematrix = 7506,
  k_EMsgFSComputeFrenematrixResponse = 7507,
  k_EMsgFSPlayStatusNotification = 7508,
  k_EMsgFSAddOrRemoveFollower = 7510,
  k_EMsgFSAddOrRemoveFollowerResponse = 7511,
  k_EMsgFSUpdateFollowingList = 7512,
  k_EMsgFSCommentNotification = 7513,
  k_EMsgFSCommentNotificationViewed = 7514,
  k_EMsgClientFSGetFollowerCount = 7515,
  k_EMsgClientFSGetFollowerCountResponse = 7516,
  k_EMsgClientFSGetIsFollowing = 7517,
  k_EMsgClientFSGetIsFollowingResponse = 7518,
  k_EMsgClientFSEnumerateFollowingList = 7519,
  k_EMsgClientFSEnumerateFollowingListResponse = 7520,
  k_EMsgFSGetPendingNotificationCount = 7521,
  k_EMsgFSGetPendingNotificationCountResponse = 7522,
  k_EMsgClientChatOfflineMessageNotification = 7523,
  k_EMsgClientChatRequestOfflineMessageCount = 7524,
  k_EMsgClientChatGetFriendMessageHistory = 7525,
  k_EMsgClientChatGetFriendMessageHistoryResponse = 7526,
  k_EMsgClientChatGetFriendMessageHistoryForOfflineMessages = 7527,
  k_EMsgClientFSGetFriendsSteamLevels = 7528,
  k_EMsgClientFSGetFriendsSteamLevelsResponse = 7529,
  k_EMsgAMRequestFriendData = 7530,
  k_EMsgDRMRange2 = 7600,
  k_EMsgCEGVersionSetEnableDisableRequest = 7600,
  k_EMsgCEGVersionSetEnableDisableResponse = 7601,
  k_EMsgCEGPropStatusDRMSRequest = 7602,
  k_EMsgCEGPropStatusDRMSResponse = 7603,
  k_EMsgCEGWhackFailureReportRequest = 7604,
  k_EMsgCEGWhackFailureReportResponse = 7605,
  k_EMsgDRMSFetchVersionSet = 7606,
  k_EMsgDRMSFetchVersionSetResponse = 7607,
  k_EMsgEconBase = 7700,
  k_EMsgEconTrading_InitiateTradeRequest = 7701,
  k_EMsgEconTrading_InitiateTradeProposed = 7702,
  k_EMsgEconTrading_InitiateTradeResponse = 7703,
  k_EMsgEconTrading_InitiateTradeResult = 7704,
  k_EMsgEconTrading_StartSession = 7705,
  k_EMsgEconTrading_CancelTradeRequest = 7706,
  k_EMsgEconFlushInventoryCache = 7707,
  k_EMsgEconFlushInventoryCacheResponse = 7708,
  k_EMsgEconCDKeyProcessTransaction = 7711,
  k_EMsgEconCDKeyProcessTransactionResponse = 7712,
  k_EMsgEconGetErrorLogs = 7713,
  k_EMsgEconGetErrorLogsResponse = 7714,
  k_EMsgRMRange = 7800,
  k_EMsgRMTestVerisignOTP = 7800,
  k_EMsgRMTestVerisignOTPResponse = 7801,
  k_EMsgRMDeleteMemcachedKeys = 7803,
  k_EMsgRMRemoteInvoke = 7804,
  k_EMsgBadLoginIPList = 7805,
  k_EMsgRMMsgTraceAddTrigger = 7806,
  k_EMsgRMMsgTraceRemoveTrigger = 7807,
  k_EMsgRMMsgTraceEvent = 7808,
  k_EMsgUGSBase = 7900,
  k_EMsgUGSUpdateGlobalStats = 7900,
  k_EMsgClientUGSGetGlobalStats = 7901,
  k_EMsgClientUGSGetGlobalStatsResponse = 7902,
  k_EMsgStoreBase = 8000,
  k_EMsgUMQBase = 8100,
  k_EMsgUMQLogonRequest = 8100,
  k_EMsgUMQLogonResponse = 8101,
  k_EMsgUMQLogoffRequest = 8102,
  k_EMsgUMQLogoffResponse = 8103,
  k_EMsgUMQSendChatMessage = 8104,
  k_EMsgUMQIncomingChatMessage = 8105,
  k_EMsgUMQPoll = 8106,
  k_EMsgUMQPollResults = 8107,
  k_EMsgUMQ2AM_ClientMsgBatch = 8108,
  k_EMsgWorkshopBase = 8200,
  k_EMsgWebAPIBase = 8300,
  k_EMsgWebAPIValidateOAuth2Token = 8300,
  k_EMsgWebAPIValidateOAuth2TokenResponse = 8301,
  k_EMsgWebAPIRegisterGCInterfaces = 8303,
  k_EMsgWebAPIInvalidateOAuthClientCache = 8304,
  k_EMsgWebAPIInvalidateOAuthTokenCache = 8305,
  k_EMsgWebAPISetSecrets = 8306,
  k_EMsgBackpackBase = 8400,
  k_EMsgBackpackAddToCurrency = 8401,
  k_EMsgBackpackAddToCurrencyResponse = 8402,
  k_EMsgCREBase = 8500,
  k_EMsgCREItemVoteSummary = 8503,
  k_EMsgCREItemVoteSummaryResponse = 8504,
  k_EMsgCREUpdateUserPublishedItemVote = 8507,
  k_EMsgCREUpdateUserPublishedItemVoteResponse = 8508,
  k_EMsgCREGetUserPublishedItemVoteDetails = 8509,
  k_EMsgCREGetUserPublishedItemVoteDetailsResponse = 8510,
  k_EMsgSecretsBase = 8600,
  k_EMsgSecretsRequestCredentialPair = 8600,
  k_EMsgSecretsCredentialPairResponse = 8601,
  k_EMsgBoxMonitorBase = 8700,
  k_EMsgBoxMonitorReportRequest = 8700,
  k_EMsgBoxMonitorReportResponse = 8701,
  k_EMsgLogsinkBase = 8800,
  k_EMsgLogsinkWriteReport = 8800,
  k_EMsgPICSBase = 8900,
  k_EMsgClientPICSChangesSinceRequest = 8901,
  k_EMsgClientPICSChangesSinceResponse = 8902,
  k_EMsgClientPICSProductInfoRequest = 8903,
  k_EMsgClientPICSProductInfoResponse = 8904,
  k_EMsgClientPICSAccessTokenRequest = 8905,
  k_EMsgClientPICSAccessTokenResponse = 8906,
  k_EMsgWorkerProcess = 9000,
  k_EMsgWorkerProcessPingRequest = 9000,
  k_EMsgWorkerProcessPingResponse = 9001,
  k_EMsgWorkerProcessShutdown = 9002,
  k_EMsgDRMWorkerProcess = 9100,
  k_EMsgDRMWorkerProcessDRMAndSign = 9100,
  k_EMsgDRMWorkerProcessDRMAndSignResponse = 9101,
  k_EMsgDRMWorkerProcessSteamworksInfoRequest = 9102,
  k_EMsgDRMWorkerProcessSteamworksInfoResponse = 9103,
  k_EMsgDRMWorkerProcessInstallDRMDLLRequest = 9104,
  k_EMsgDRMWorkerProcessInstallDRMDLLResponse = 9105,
  k_EMsgDRMWorkerProcessSecretIdStringRequest = 9106,
  k_EMsgDRMWorkerProcessSecretIdStringResponse = 9107,
  k_EMsgDRMWorkerProcessInstallProcessedFilesRequest = 9110,
  k_EMsgDRMWorkerProcessInstallProcessedFilesResponse = 9111,
  k_EMsgDRMWorkerProcessExamineBlobRequest = 9112,
  k_EMsgDRMWorkerProcessExamineBlobResponse = 9113,
  k_EMsgDRMWorkerProcessDescribeSecretRequest = 9114,
  k_EMsgDRMWorkerProcessDescribeSecretResponse = 9115,
  k_EMsgDRMWorkerProcessBackfillOriginalRequest = 9116,
  k_EMsgDRMWorkerProcessBackfillOriginalResponse = 9117,
  k_EMsgDRMWorkerProcessValidateDRMDLLRequest = 9118,
  k_EMsgDRMWorkerProcessValidateDRMDLLResponse = 9119,
  k_EMsgDRMWorkerProcessValidateFileRequest = 9120,
  k_EMsgDRMWorkerProcessValidateFileResponse = 9121,
  k_EMsgDRMWorkerProcessSplitAndInstallRequest = 9122,
  k_EMsgDRMWorkerProcessSplitAndInstallResponse = 9123,
  k_EMsgDRMWorkerProcessGetBlobRequest = 9124,
  k_EMsgDRMWorkerProcessGetBlobResponse = 9125,
  k_EMsgDRMWorkerProcessEvaluateCrashRequest = 9126,
  k_EMsgDRMWorkerProcessEvaluateCrashResponse = 9127,
  k_EMsgDRMWorkerProcessAnalyzeFileRequest = 9128,
  k_EMsgDRMWorkerProcessAnalyzeFileResponse = 9129,
  k_EMsgDRMWorkerProcessUnpackBlobRequest = 9130,
  k_EMsgDRMWorkerProcessUnpackBlobResponse = 9131,
  k_EMsgDRMWorkerProcessInstallAllRequest = 9132,
  k_EMsgDRMWorkerProcessInstallAllResponse = 9133,
  k_EMsgTestWorkerProcess = 9200,
  k_EMsgTestWorkerProcessLoadUnloadModuleRequest = 9200,
  k_EMsgTestWorkerProcessLoadUnloadModuleResponse = 9201,
  k_EMsgTestWorkerProcessServiceModuleCallRequest = 9202,
  k_EMsgTestWorkerProcessServiceModuleCallResponse = 9203,
  k_EMsgQuestServerBase = 9300,
  k_EMsgClientGetEmoticonList = 9330,
  k_EMsgClientEmoticonList = 9331,
  k_EMsgSLCBase = 9400,
  k_EMsgSLCUserSessionStatus = 9400,
  k_EMsgSLCRequestUserSessionStatus = 9401,
  k_EMsgSLCSharedLicensesLockStatus = 9402,
  k_EMsgClientSharedLibraryLockStatus = 9405,
  k_EMsgClientSharedLibraryStopPlaying = 9406,
  k_EMsgSLCOwnerLibraryChanged = 9407,
  k_EMsgSLCSharedLibraryChanged = 9408,
  k_EMsgRemoteClientBase = 9500,
  k_EMsgRemoteClientAuth_OBSOLETE = 9500,
  k_EMsgRemoteClientAuthResponse_OBSOLETE = 9501,
  k_EMsgRemoteClientAppStatus = 9502,
  k_EMsgRemoteClientStartStream = 9503,
  k_EMsgRemoteClientStartStreamResponse = 9504,
  k_EMsgRemoteClientPing = 9505,
  k_EMsgRemoteClientPingResponse = 9506,
  k_EMsgClientUnlockH264 = 9507,
  k_EMsgClientUnlockH264Response = 9508,
  k_EMsgRemoteClientAcceptEULA = 9509,
  k_EMsgRemoteClientGetControllerConfig = 9510,
  k_EMsgRemoteClientGetControllerConfigResponse = 9511,
  k_EMsgRemoteClientStreamingEnabled = 9512,
  k_EMsgClientUnlockHEVC_OBSOLETE = 9513,
  k_EMsgClientUnlockHEVCResponse_OBSOLETE = 9514,
  k_EMsgRemoteClientStatusRequest = 9515,
  k_EMsgRemoteClientStatusResponse = 9516,
  k_EMsgClientConcurrentSessionsBase = 9600,
  k_EMsgClientPlayingSessionState = 9600,
  k_EMsgClientKickPlayingSession = 9601,
  k_EMsgClientBroadcastBase = 9700,
  k_EMsgClientBroadcastInit = 9700,
  k_EMsgClientBroadcastFrames = 9701,
  k_EMsgClientBroadcastDisconnect = 9702,
  k_EMsgClientBroadcastUploadConfig = 9704,
  k_EMsgBaseClient3 = 9800,
  k_EMsgClientVoiceCallPreAuthorize = 9800,
  k_EMsgClientVoiceCallPreAuthorizeResponse = 9801,
  k_EMsgClientServerTimestampRequest = 9802,
  k_EMsgClientServerTimestampResponse = 9803,
  k_EMsgServiceMethodCallFromClientNonAuthed = 9804,
  k_EMsgClientHello = 9805,
  k_EMsgClientEnableOrDisableDownloads = 9806,
  k_EMsgClientEnableOrDisableDownloadsResponse = 9807,
  k_EMsgClientLANP2PBase = 9900,
  k_EMsgClientLANP2PRequestChunk = 9900,
  k_EMsgClientLANP2PRequestChunkResponse = 9901,
  k_EMsgClientPeerChunkRequest = 9902,
  k_EMsgClientPeerChunkResponse = 9903,
  k_EMsgClientLANP2PMax = 9999,
  k_EMsgBaseWatchdogServer = 10000,
  k_EMsgNotifyWatchdog = 10000,
  k_EMsgClientSiteLicenseBase = 10100,
  k_EMsgClientSiteLicenseSiteInfoNotification = 10100,
  k_EMsgClientSiteLicenseCheckout = 10101,
  k_EMsgClientSiteLicenseCheckoutResponse = 10102,
  k_EMsgClientSiteLicenseGetAvailableSeats = 10103,
  k_EMsgClientSiteLicenseGetAvailableSeatsResponse = 10104,
  k_EMsgClientSiteLicenseGetContentCacheInfo = 10105,
  k_EMsgClientSiteLicenseGetContentCacheInfoResponse = 10106,
  k_EMsgBaseChatServer = 12000,
  k_EMsgChatServerGetPendingNotificationCount = 12000,
  k_EMsgChatServerGetPendingNotificationCountResponse = 12001,
  k_EMsgBaseSecretServer = 12100,
  k_EMsgServerSecretChanged = 12100,
  k_EMsgBaseWG = 12200,
  k_EMsgWGConnectionProtocolError = 12200,
  k_EMsgWGConnectionValidateUserToken = 12201,
  k_EMsgWGConnectionValidateUserTokenResponse = 12202,
  k_EMsgWGConnectionLegacyWGRequest = 12203,
  k_EMsgWGConnectionLegacyWGResponse = 12204,
}

export function eMsgFromJSON(object: any): EMsg {
  switch (object) {
    case 0:
    case "k_EMsgInvalid":
      return EMsg.k_EMsgInvalid;
    case 1:
    case "k_EMsgMulti":
      return EMsg.k_EMsgMulti;
    case 2:
    case "k_EMsgProtobufWrapped":
      return EMsg.k_EMsgProtobufWrapped;
    case 100:
    case "k_EMsgBaseGeneral":
      return EMsg.k_EMsgBaseGeneral;
    case 100:
    case "k_EMsgGenericReply":
      return EMsg.k_EMsgGenericReply;
    case 113:
    case "k_EMsgDestJobFailed":
      return EMsg.k_EMsgDestJobFailed;
    case 115:
    case "k_EMsgAlert":
      return EMsg.k_EMsgAlert;
    case 120:
    case "k_EMsgSCIDRequest":
      return EMsg.k_EMsgSCIDRequest;
    case 121:
    case "k_EMsgSCIDResponse":
      return EMsg.k_EMsgSCIDResponse;
    case 123:
    case "k_EMsgJobHeartbeat":
      return EMsg.k_EMsgJobHeartbeat;
    case 124:
    case "k_EMsgHubConnect":
      return EMsg.k_EMsgHubConnect;
    case 126:
    case "k_EMsgSubscribe":
      return EMsg.k_EMsgSubscribe;
    case 127:
    case "k_EMRouteMessage":
      return EMsg.k_EMRouteMessage;
    case 130:
    case "k_EMsgWGRequest":
      return EMsg.k_EMsgWGRequest;
    case 131:
    case "k_EMsgWGResponse":
      return EMsg.k_EMsgWGResponse;
    case 132:
    case "k_EMsgKeepAlive":
      return EMsg.k_EMsgKeepAlive;
    case 133:
    case "k_EMsgWebAPIJobRequest":
      return EMsg.k_EMsgWebAPIJobRequest;
    case 134:
    case "k_EMsgWebAPIJobResponse":
      return EMsg.k_EMsgWebAPIJobResponse;
    case 135:
    case "k_EMsgClientSessionStart":
      return EMsg.k_EMsgClientSessionStart;
    case 136:
    case "k_EMsgClientSessionEnd":
      return EMsg.k_EMsgClientSessionEnd;
    case 137:
    case "k_EMsgClientSessionUpdate":
      return EMsg.k_EMsgClientSessionUpdate;
    case 138:
    case "k_EMsgStatsDeprecated":
      return EMsg.k_EMsgStatsDeprecated;
    case 139:
    case "k_EMsgPing":
      return EMsg.k_EMsgPing;
    case 140:
    case "k_EMsgPingResponse":
      return EMsg.k_EMsgPingResponse;
    case 141:
    case "k_EMsgStats":
      return EMsg.k_EMsgStats;
    case 142:
    case "k_EMsgRequestFullStatsBlock":
      return EMsg.k_EMsgRequestFullStatsBlock;
    case 143:
    case "k_EMsgLoadDBOCacheItem":
      return EMsg.k_EMsgLoadDBOCacheItem;
    case 144:
    case "k_EMsgLoadDBOCacheItemResponse":
      return EMsg.k_EMsgLoadDBOCacheItemResponse;
    case 145:
    case "k_EMsgInvalidateDBOCacheItems":
      return EMsg.k_EMsgInvalidateDBOCacheItems;
    case 146:
    case "k_EMsgServiceMethod":
      return EMsg.k_EMsgServiceMethod;
    case 147:
    case "k_EMsgServiceMethodResponse":
      return EMsg.k_EMsgServiceMethodResponse;
    case 148:
    case "k_EMsgClientPackageVersions":
      return EMsg.k_EMsgClientPackageVersions;
    case 149:
    case "k_EMsgTimestampRequest":
      return EMsg.k_EMsgTimestampRequest;
    case 150:
    case "k_EMsgTimestampResponse":
      return EMsg.k_EMsgTimestampResponse;
    case 151:
    case "k_EMsgServiceMethodCallFromClient":
      return EMsg.k_EMsgServiceMethodCallFromClient;
    case 152:
    case "k_EMsgServiceMethodSendToClient":
      return EMsg.k_EMsgServiceMethodSendToClient;
    case 200:
    case "k_EMsgBaseShell":
      return EMsg.k_EMsgBaseShell;
    case 200:
    case "k_EMsgAssignSysID":
      return EMsg.k_EMsgAssignSysID;
    case 201:
    case "k_EMsgExit":
      return EMsg.k_EMsgExit;
    case 202:
    case "k_EMsgDirRequest":
      return EMsg.k_EMsgDirRequest;
    case 203:
    case "k_EMsgDirResponse":
      return EMsg.k_EMsgDirResponse;
    case 204:
    case "k_EMsgZipRequest":
      return EMsg.k_EMsgZipRequest;
    case 205:
    case "k_EMsgZipResponse":
      return EMsg.k_EMsgZipResponse;
    case 215:
    case "k_EMsgUpdateRecordResponse":
      return EMsg.k_EMsgUpdateRecordResponse;
    case 221:
    case "k_EMsgUpdateCreditCardRequest":
      return EMsg.k_EMsgUpdateCreditCardRequest;
    case 225:
    case "k_EMsgUpdateUserBanResponse":
      return EMsg.k_EMsgUpdateUserBanResponse;
    case 226:
    case "k_EMsgPrepareToExit":
      return EMsg.k_EMsgPrepareToExit;
    case 227:
    case "k_EMsgContentDescriptionUpdate":
      return EMsg.k_EMsgContentDescriptionUpdate;
    case 228:
    case "k_EMsgTestResetServer":
      return EMsg.k_EMsgTestResetServer;
    case 229:
    case "k_EMsgUniverseChanged":
      return EMsg.k_EMsgUniverseChanged;
    case 230:
    case "k_EMsgShellConfigInfoUpdate":
      return EMsg.k_EMsgShellConfigInfoUpdate;
    case 233:
    case "k_EMsgRequestWindowsEventLogEntries":
      return EMsg.k_EMsgRequestWindowsEventLogEntries;
    case 234:
    case "k_EMsgProvideWindowsEventLogEntries":
      return EMsg.k_EMsgProvideWindowsEventLogEntries;
    case 235:
    case "k_EMsgShellSearchLogs":
      return EMsg.k_EMsgShellSearchLogs;
    case 236:
    case "k_EMsgShellSearchLogsResponse":
      return EMsg.k_EMsgShellSearchLogsResponse;
    case 237:
    case "k_EMsgShellCheckWindowsUpdates":
      return EMsg.k_EMsgShellCheckWindowsUpdates;
    case 238:
    case "k_EMsgShellCheckWindowsUpdatesResponse":
      return EMsg.k_EMsgShellCheckWindowsUpdatesResponse;
    case 240:
    case "k_EMsgTestFlushDelayedSQL":
      return EMsg.k_EMsgTestFlushDelayedSQL;
    case 241:
    case "k_EMsgTestFlushDelayedSQLResponse":
      return EMsg.k_EMsgTestFlushDelayedSQLResponse;
    case 242:
    case "k_EMsgEnsureExecuteScheduledTask_TEST":
      return EMsg.k_EMsgEnsureExecuteScheduledTask_TEST;
    case 243:
    case "k_EMsgEnsureExecuteScheduledTaskResponse_TEST":
      return EMsg.k_EMsgEnsureExecuteScheduledTaskResponse_TEST;
    case 244:
    case "k_EMsgUpdateScheduledTaskEnableState_TEST":
      return EMsg.k_EMsgUpdateScheduledTaskEnableState_TEST;
    case 245:
    case "k_EMsgUpdateScheduledTaskEnableStateResponse_TEST":
      return EMsg.k_EMsgUpdateScheduledTaskEnableStateResponse_TEST;
    case 246:
    case "k_EMsgContentDescriptionDeltaUpdate":
      return EMsg.k_EMsgContentDescriptionDeltaUpdate;
    case 247:
    case "k_EMsgGMShellAndServerAddressUpdates":
      return EMsg.k_EMsgGMShellAndServerAddressUpdates;
    case 300:
    case "k_EMsgBaseGM":
      return EMsg.k_EMsgBaseGM;
    case 300:
    case "k_EMsgHeartbeat":
      return EMsg.k_EMsgHeartbeat;
    case 301:
    case "k_EMsgShellFailed":
      return EMsg.k_EMsgShellFailed;
    case 307:
    case "k_EMsgExitShells":
      return EMsg.k_EMsgExitShells;
    case 308:
    case "k_EMsgExitShell":
      return EMsg.k_EMsgExitShell;
    case 309:
    case "k_EMsgGracefulExitShell":
      return EMsg.k_EMsgGracefulExitShell;
    case 316:
    case "k_EMsgLicenseProcessingComplete":
      return EMsg.k_EMsgLicenseProcessingComplete;
    case 317:
    case "k_EMsgSetTestFlag":
      return EMsg.k_EMsgSetTestFlag;
    case 318:
    case "k_EMsgQueuedEmailsComplete":
      return EMsg.k_EMsgQueuedEmailsComplete;
    case 320:
    case "k_EMsgGMDRMSync":
      return EMsg.k_EMsgGMDRMSync;
    case 321:
    case "k_EMsgPhysicalBoxInventory":
      return EMsg.k_EMsgPhysicalBoxInventory;
    case 322:
    case "k_EMsgUpdateConfigFile":
      return EMsg.k_EMsgUpdateConfigFile;
    case 323:
    case "k_EMsgTestInitDB":
      return EMsg.k_EMsgTestInitDB;
    case 324:
    case "k_EMsgGMWriteConfigToSQL":
      return EMsg.k_EMsgGMWriteConfigToSQL;
    case 325:
    case "k_EMsgGMLoadActivationCodes":
      return EMsg.k_EMsgGMLoadActivationCodes;
    case 326:
    case "k_EMsgGMQueueForFBS":
      return EMsg.k_EMsgGMQueueForFBS;
    case 327:
    case "k_EMsgGMSchemaConversionResults":
      return EMsg.k_EMsgGMSchemaConversionResults;
    case 329:
    case "k_EMsgGMWriteShellFailureToSQL":
      return EMsg.k_EMsgGMWriteShellFailureToSQL;
    case 330:
    case "k_EMsgGMWriteStatsToSOS":
      return EMsg.k_EMsgGMWriteStatsToSOS;
    case 331:
    case "k_EMsgGMGetServiceMethodRouting":
      return EMsg.k_EMsgGMGetServiceMethodRouting;
    case 332:
    case "k_EMsgGMGetServiceMethodRoutingResponse":
      return EMsg.k_EMsgGMGetServiceMethodRoutingResponse;
    case 334:
    case "k_EMsgGMTestNextBuildSchemaConversion":
      return EMsg.k_EMsgGMTestNextBuildSchemaConversion;
    case 335:
    case "k_EMsgGMTestNextBuildSchemaConversionResponse":
      return EMsg.k_EMsgGMTestNextBuildSchemaConversionResponse;
    case 336:
    case "k_EMsgExpectShellRestart":
      return EMsg.k_EMsgExpectShellRestart;
    case 337:
    case "k_EMsgHotFixProgress":
      return EMsg.k_EMsgHotFixProgress;
    case 338:
    case "k_EMsgGMStatsForwardToAdminConnections":
      return EMsg.k_EMsgGMStatsForwardToAdminConnections;
    case 339:
    case "k_EMsgGMGetModifiedConVars":
      return EMsg.k_EMsgGMGetModifiedConVars;
    case 340:
    case "k_EMsgGMGetModifiedConVarsResponse":
      return EMsg.k_EMsgGMGetModifiedConVarsResponse;
    case 400:
    case "k_EMsgBaseAIS":
      return EMsg.k_EMsgBaseAIS;
    case 402:
    case "k_EMsgAISRequestContentDescription":
      return EMsg.k_EMsgAISRequestContentDescription;
    case 403:
    case "k_EMsgAISUpdateAppInfo":
      return EMsg.k_EMsgAISUpdateAppInfo;
    case 405:
    case "k_EMsgAISGetPackageChangeNumber":
      return EMsg.k_EMsgAISGetPackageChangeNumber;
    case 406:
    case "k_EMsgAISGetPackageChangeNumberResponse":
      return EMsg.k_EMsgAISGetPackageChangeNumberResponse;
    case 423:
    case "k_EMsgAIGetAppGCFlags":
      return EMsg.k_EMsgAIGetAppGCFlags;
    case 424:
    case "k_EMsgAIGetAppGCFlagsResponse":
      return EMsg.k_EMsgAIGetAppGCFlagsResponse;
    case 425:
    case "k_EMsgAIGetAppList":
      return EMsg.k_EMsgAIGetAppList;
    case 426:
    case "k_EMsgAIGetAppListResponse":
      return EMsg.k_EMsgAIGetAppListResponse;
    case 429:
    case "k_EMsgAISGetCouponDefinition":
      return EMsg.k_EMsgAISGetCouponDefinition;
    case 430:
    case "k_EMsgAISGetCouponDefinitionResponse":
      return EMsg.k_EMsgAISGetCouponDefinitionResponse;
    case 431:
    case "k_EMsgAISUpdateSubordinateContentDescription":
      return EMsg.k_EMsgAISUpdateSubordinateContentDescription;
    case 432:
    case "k_EMsgAISUpdateSubordinateContentDescriptionResponse":
      return EMsg.k_EMsgAISUpdateSubordinateContentDescriptionResponse;
    case 433:
    case "k_EMsgAISTestEnableGC":
      return EMsg.k_EMsgAISTestEnableGC;
    case 500:
    case "k_EMsgBaseAM":
      return EMsg.k_EMsgBaseAM;
    case 504:
    case "k_EMsgAMUpdateUserBanRequest":
      return EMsg.k_EMsgAMUpdateUserBanRequest;
    case 505:
    case "k_EMsgAMAddLicense":
      return EMsg.k_EMsgAMAddLicense;
    case 508:
    case "k_EMsgAMSendSystemIMToUser":
      return EMsg.k_EMsgAMSendSystemIMToUser;
    case 509:
    case "k_EMsgAMExtendLicense":
      return EMsg.k_EMsgAMExtendLicense;
    case 510:
    case "k_EMsgAMAddMinutesToLicense":
      return EMsg.k_EMsgAMAddMinutesToLicense;
    case 511:
    case "k_EMsgAMCancelLicense":
      return EMsg.k_EMsgAMCancelLicense;
    case 512:
    case "k_EMsgAMInitPurchase":
      return EMsg.k_EMsgAMInitPurchase;
    case 513:
    case "k_EMsgAMPurchaseResponse":
      return EMsg.k_EMsgAMPurchaseResponse;
    case 514:
    case "k_EMsgAMGetFinalPrice":
      return EMsg.k_EMsgAMGetFinalPrice;
    case 515:
    case "k_EMsgAMGetFinalPriceResponse":
      return EMsg.k_EMsgAMGetFinalPriceResponse;
    case 516:
    case "k_EMsgAMGetLegacyGameKey":
      return EMsg.k_EMsgAMGetLegacyGameKey;
    case 517:
    case "k_EMsgAMGetLegacyGameKeyResponse":
      return EMsg.k_EMsgAMGetLegacyGameKeyResponse;
    case 518:
    case "k_EMsgAMFindHungTransactions":
      return EMsg.k_EMsgAMFindHungTransactions;
    case 519:
    case "k_EMsgAMSetAccountTrustedRequest":
      return EMsg.k_EMsgAMSetAccountTrustedRequest;
    case 522:
    case "k_EMsgAMCancelPurchase":
      return EMsg.k_EMsgAMCancelPurchase;
    case 523:
    case "k_EMsgAMNewChallenge":
      return EMsg.k_EMsgAMNewChallenge;
    case 524:
    case "k_EMsgAMLoadOEMTickets":
      return EMsg.k_EMsgAMLoadOEMTickets;
    case 525:
    case "k_EMsgAMFixPendingPurchase":
      return EMsg.k_EMsgAMFixPendingPurchase;
    case 526:
    case "k_EMsgAMFixPendingPurchaseResponse":
      return EMsg.k_EMsgAMFixPendingPurchaseResponse;
    case 527:
    case "k_EMsgAMIsUserBanned":
      return EMsg.k_EMsgAMIsUserBanned;
    case 528:
    case "k_EMsgAMRegisterKey":
      return EMsg.k_EMsgAMRegisterKey;
    case 529:
    case "k_EMsgAMLoadActivationCodes":
      return EMsg.k_EMsgAMLoadActivationCodes;
    case 530:
    case "k_EMsgAMLoadActivationCodesResponse":
      return EMsg.k_EMsgAMLoadActivationCodesResponse;
    case 531:
    case "k_EMsgAMLookupKeyResponse":
      return EMsg.k_EMsgAMLookupKeyResponse;
    case 532:
    case "k_EMsgAMLookupKey":
      return EMsg.k_EMsgAMLookupKey;
    case 533:
    case "k_EMsgAMChatCleanup":
      return EMsg.k_EMsgAMChatCleanup;
    case 534:
    case "k_EMsgAMClanCleanup":
      return EMsg.k_EMsgAMClanCleanup;
    case 535:
    case "k_EMsgAMFixPendingRefund":
      return EMsg.k_EMsgAMFixPendingRefund;
    case 536:
    case "k_EMsgAMReverseChargeback":
      return EMsg.k_EMsgAMReverseChargeback;
    case 537:
    case "k_EMsgAMReverseChargebackResponse":
      return EMsg.k_EMsgAMReverseChargebackResponse;
    case 538:
    case "k_EMsgAMClanCleanupList":
      return EMsg.k_EMsgAMClanCleanupList;
    case 539:
    case "k_EMsgAMGetLicenses":
      return EMsg.k_EMsgAMGetLicenses;
    case 540:
    case "k_EMsgAMGetLicensesResponse":
      return EMsg.k_EMsgAMGetLicensesResponse;
    case 541:
    case "k_EMsgAMSendCartRepurchase":
      return EMsg.k_EMsgAMSendCartRepurchase;
    case 542:
    case "k_EMsgAMSendCartRepurchaseResponse":
      return EMsg.k_EMsgAMSendCartRepurchaseResponse;
    case 550:
    case "k_EMsgAllowUserToPlayQuery":
      return EMsg.k_EMsgAllowUserToPlayQuery;
    case 551:
    case "k_EMsgAllowUserToPlayResponse":
      return EMsg.k_EMsgAllowUserToPlayResponse;
    case 552:
    case "k_EMsgAMVerfiyUser":
      return EMsg.k_EMsgAMVerfiyUser;
    case 553:
    case "k_EMsgAMClientNotPlaying":
      return EMsg.k_EMsgAMClientNotPlaying;
    case 554:
    case "k_EMsgAMClientRequestFriendship":
      return EMsg.k_EMsgAMClientRequestFriendship;
    case 555:
    case "k_EMsgAMRelayPublishStatus":
      return EMsg.k_EMsgAMRelayPublishStatus;
    case 560:
    case "k_EMsgAMInitPurchaseResponse":
      return EMsg.k_EMsgAMInitPurchaseResponse;
    case 561:
    case "k_EMsgAMRevokePurchaseResponse":
      return EMsg.k_EMsgAMRevokePurchaseResponse;
    case 563:
    case "k_EMsgAMRefreshGuestPasses":
      return EMsg.k_EMsgAMRefreshGuestPasses;
    case 566:
    case "k_EMsgAMGrantGuestPasses":
      return EMsg.k_EMsgAMGrantGuestPasses;
    case 567:
    case "k_EMsgAMClanDataUpdated":
      return EMsg.k_EMsgAMClanDataUpdated;
    case 568:
    case "k_EMsgAMReloadAccount":
      return EMsg.k_EMsgAMReloadAccount;
    case 569:
    case "k_EMsgAMClientChatMsgRelay":
      return EMsg.k_EMsgAMClientChatMsgRelay;
    case 570:
    case "k_EMsgAMChatMulti":
      return EMsg.k_EMsgAMChatMulti;
    case 571:
    case "k_EMsgAMClientChatInviteRelay":
      return EMsg.k_EMsgAMClientChatInviteRelay;
    case 572:
    case "k_EMsgAMChatInvite":
      return EMsg.k_EMsgAMChatInvite;
    case 573:
    case "k_EMsgAMClientJoinChatRelay":
      return EMsg.k_EMsgAMClientJoinChatRelay;
    case 574:
    case "k_EMsgAMClientChatMemberInfoRelay":
      return EMsg.k_EMsgAMClientChatMemberInfoRelay;
    case 575:
    case "k_EMsgAMPublishChatMemberInfo":
      return EMsg.k_EMsgAMPublishChatMemberInfo;
    case 576:
    case "k_EMsgAMClientAcceptFriendInvite":
      return EMsg.k_EMsgAMClientAcceptFriendInvite;
    case 577:
    case "k_EMsgAMChatEnter":
      return EMsg.k_EMsgAMChatEnter;
    case 578:
    case "k_EMsgAMClientPublishRemovalFromSource":
      return EMsg.k_EMsgAMClientPublishRemovalFromSource;
    case 579:
    case "k_EMsgAMChatActionResult":
      return EMsg.k_EMsgAMChatActionResult;
    case 580:
    case "k_EMsgAMFindAccounts":
      return EMsg.k_EMsgAMFindAccounts;
    case 581:
    case "k_EMsgAMFindAccountsResponse":
      return EMsg.k_EMsgAMFindAccountsResponse;
    case 582:
    case "k_EMsgAMIsAccountNameInUse":
      return EMsg.k_EMsgAMIsAccountNameInUse;
    case 583:
    case "k_EMsgAMIsAccountNameInUseResponse":
      return EMsg.k_EMsgAMIsAccountNameInUseResponse;
    case 584:
    case "k_EMsgAMSetAccountFlags":
      return EMsg.k_EMsgAMSetAccountFlags;
    case 586:
    case "k_EMsgAMCreateClan":
      return EMsg.k_EMsgAMCreateClan;
    case 587:
    case "k_EMsgAMCreateClanResponse":
      return EMsg.k_EMsgAMCreateClanResponse;
    case 588:
    case "k_EMsgAMGetClanDetails":
      return EMsg.k_EMsgAMGetClanDetails;
    case 589:
    case "k_EMsgAMGetClanDetailsResponse":
      return EMsg.k_EMsgAMGetClanDetailsResponse;
    case 590:
    case "k_EMsgAMSetPersonaName":
      return EMsg.k_EMsgAMSetPersonaName;
    case 591:
    case "k_EMsgAMSetAvatar":
      return EMsg.k_EMsgAMSetAvatar;
    case 592:
    case "k_EMsgAMAuthenticateUser":
      return EMsg.k_EMsgAMAuthenticateUser;
    case 593:
    case "k_EMsgAMAuthenticateUserResponse":
      return EMsg.k_EMsgAMAuthenticateUserResponse;
    case 596:
    case "k_EMsgAMP2PIntroducerMessage":
      return EMsg.k_EMsgAMP2PIntroducerMessage;
    case 597:
    case "k_EMsgClientChatAction":
      return EMsg.k_EMsgClientChatAction;
    case 598:
    case "k_EMsgAMClientChatActionRelay":
      return EMsg.k_EMsgAMClientChatActionRelay;
    case 600:
    case "k_EMsgBaseVS":
      return EMsg.k_EMsgBaseVS;
    case 600:
    case "k_EMsgReqChallenge":
      return EMsg.k_EMsgReqChallenge;
    case 601:
    case "k_EMsgVACResponse":
      return EMsg.k_EMsgVACResponse;
    case 602:
    case "k_EMsgReqChallengeTest":
      return EMsg.k_EMsgReqChallengeTest;
    case 604:
    case "k_EMsgVSMarkCheat":
      return EMsg.k_EMsgVSMarkCheat;
    case 605:
    case "k_EMsgVSAddCheat":
      return EMsg.k_EMsgVSAddCheat;
    case 606:
    case "k_EMsgVSPurgeCodeModDB":
      return EMsg.k_EMsgVSPurgeCodeModDB;
    case 607:
    case "k_EMsgVSGetChallengeResults":
      return EMsg.k_EMsgVSGetChallengeResults;
    case 608:
    case "k_EMsgVSChallengeResultText":
      return EMsg.k_EMsgVSChallengeResultText;
    case 609:
    case "k_EMsgVSReportLingerer":
      return EMsg.k_EMsgVSReportLingerer;
    case 610:
    case "k_EMsgVSRequestManagedChallenge":
      return EMsg.k_EMsgVSRequestManagedChallenge;
    case 611:
    case "k_EMsgVSLoadDBFinished":
      return EMsg.k_EMsgVSLoadDBFinished;
    case 625:
    case "k_EMsgBaseDRMS":
      return EMsg.k_EMsgBaseDRMS;
    case 628:
    case "k_EMsgDRMBuildBlobRequest":
      return EMsg.k_EMsgDRMBuildBlobRequest;
    case 629:
    case "k_EMsgDRMBuildBlobResponse":
      return EMsg.k_EMsgDRMBuildBlobResponse;
    case 630:
    case "k_EMsgDRMResolveGuidRequest":
      return EMsg.k_EMsgDRMResolveGuidRequest;
    case 631:
    case "k_EMsgDRMResolveGuidResponse":
      return EMsg.k_EMsgDRMResolveGuidResponse;
    case 633:
    case "k_EMsgDRMVariabilityReport":
      return EMsg.k_EMsgDRMVariabilityReport;
    case 634:
    case "k_EMsgDRMVariabilityReportResponse":
      return EMsg.k_EMsgDRMVariabilityReportResponse;
    case 635:
    case "k_EMsgDRMStabilityReport":
      return EMsg.k_EMsgDRMStabilityReport;
    case 636:
    case "k_EMsgDRMStabilityReportResponse":
      return EMsg.k_EMsgDRMStabilityReportResponse;
    case 637:
    case "k_EMsgDRMDetailsReportRequest":
      return EMsg.k_EMsgDRMDetailsReportRequest;
    case 638:
    case "k_EMsgDRMDetailsReportResponse":
      return EMsg.k_EMsgDRMDetailsReportResponse;
    case 639:
    case "k_EMsgDRMProcessFile":
      return EMsg.k_EMsgDRMProcessFile;
    case 640:
    case "k_EMsgDRMAdminUpdate":
      return EMsg.k_EMsgDRMAdminUpdate;
    case 641:
    case "k_EMsgDRMAdminUpdateResponse":
      return EMsg.k_EMsgDRMAdminUpdateResponse;
    case 642:
    case "k_EMsgDRMSync":
      return EMsg.k_EMsgDRMSync;
    case 643:
    case "k_EMsgDRMSyncResponse":
      return EMsg.k_EMsgDRMSyncResponse;
    case 644:
    case "k_EMsgDRMProcessFileResponse":
      return EMsg.k_EMsgDRMProcessFileResponse;
    case 645:
    case "k_EMsgDRMEmptyGuidCache":
      return EMsg.k_EMsgDRMEmptyGuidCache;
    case 646:
    case "k_EMsgDRMEmptyGuidCacheResponse":
      return EMsg.k_EMsgDRMEmptyGuidCacheResponse;
    case 650:
    case "k_EMsgBaseCS":
      return EMsg.k_EMsgBaseCS;
    case 700:
    case "k_EMsgBaseClient":
      return EMsg.k_EMsgBaseClient;
    case 701:
    case "k_EMsgClientLogOn_Deprecated":
      return EMsg.k_EMsgClientLogOn_Deprecated;
    case 702:
    case "k_EMsgClientAnonLogOn_Deprecated":
      return EMsg.k_EMsgClientAnonLogOn_Deprecated;
    case 703:
    case "k_EMsgClientHeartBeat":
      return EMsg.k_EMsgClientHeartBeat;
    case 704:
    case "k_EMsgClientVACResponse":
      return EMsg.k_EMsgClientVACResponse;
    case 705:
    case "k_EMsgClientGamesPlayed_obsolete":
      return EMsg.k_EMsgClientGamesPlayed_obsolete;
    case 706:
    case "k_EMsgClientLogOff":
      return EMsg.k_EMsgClientLogOff;
    case 707:
    case "k_EMsgClientNoUDPConnectivity":
      return EMsg.k_EMsgClientNoUDPConnectivity;
    case 710:
    case "k_EMsgClientConnectionStats":
      return EMsg.k_EMsgClientConnectionStats;
    case 712:
    case "k_EMsgClientPingResponse":
      return EMsg.k_EMsgClientPingResponse;
    case 714:
    case "k_EMsgClientRemoveFriend":
      return EMsg.k_EMsgClientRemoveFriend;
    case 715:
    case "k_EMsgClientGamesPlayedNoDataBlob":
      return EMsg.k_EMsgClientGamesPlayedNoDataBlob;
    case 716:
    case "k_EMsgClientChangeStatus":
      return EMsg.k_EMsgClientChangeStatus;
    case 717:
    case "k_EMsgClientVacStatusResponse":
      return EMsg.k_EMsgClientVacStatusResponse;
    case 718:
    case "k_EMsgClientFriendMsg":
      return EMsg.k_EMsgClientFriendMsg;
    case 719:
    case "k_EMsgClientGameConnect_obsolete":
      return EMsg.k_EMsgClientGameConnect_obsolete;
    case 720:
    case "k_EMsgClientGamesPlayed2_obsolete":
      return EMsg.k_EMsgClientGamesPlayed2_obsolete;
    case 721:
    case "k_EMsgClientGameEnded_obsolete":
      return EMsg.k_EMsgClientGameEnded_obsolete;
    case 726:
    case "k_EMsgClientSystemIM":
      return EMsg.k_EMsgClientSystemIM;
    case 727:
    case "k_EMsgClientSystemIMAck":
      return EMsg.k_EMsgClientSystemIMAck;
    case 728:
    case "k_EMsgClientGetLicenses":
      return EMsg.k_EMsgClientGetLicenses;
    case 730:
    case "k_EMsgClientGetLegacyGameKey":
      return EMsg.k_EMsgClientGetLegacyGameKey;
    case 731:
    case "k_EMsgClientContentServerLogOn_Deprecated":
      return EMsg.k_EMsgClientContentServerLogOn_Deprecated;
    case 732:
    case "k_EMsgClientAckVACBan2":
      return EMsg.k_EMsgClientAckVACBan2;
    case 736:
    case "k_EMsgClientGetPurchaseReceipts":
      return EMsg.k_EMsgClientGetPurchaseReceipts;
    case 738:
    case "k_EMsgClientGamesPlayed3_obsolete":
      return EMsg.k_EMsgClientGamesPlayed3_obsolete;
    case 740:
    case "k_EMsgClientAckGuestPass":
      return EMsg.k_EMsgClientAckGuestPass;
    case 741:
    case "k_EMsgClientRedeemGuestPass":
      return EMsg.k_EMsgClientRedeemGuestPass;
    case 742:
    case "k_EMsgClientGamesPlayed":
      return EMsg.k_EMsgClientGamesPlayed;
    case 743:
    case "k_EMsgClientRegisterKey":
      return EMsg.k_EMsgClientRegisterKey;
    case 744:
    case "k_EMsgClientInviteUserToClan":
      return EMsg.k_EMsgClientInviteUserToClan;
    case 745:
    case "k_EMsgClientAcknowledgeClanInvite":
      return EMsg.k_EMsgClientAcknowledgeClanInvite;
    case 746:
    case "k_EMsgClientPurchaseWithMachineID":
      return EMsg.k_EMsgClientPurchaseWithMachineID;
    case 747:
    case "k_EMsgClientAppUsageEvent":
      return EMsg.k_EMsgClientAppUsageEvent;
    case 751:
    case "k_EMsgClientLogOnResponse":
      return EMsg.k_EMsgClientLogOnResponse;
    case 755:
    case "k_EMsgClientSetHeartbeatRate":
      return EMsg.k_EMsgClientSetHeartbeatRate;
    case 756:
    case "k_EMsgClientNotLoggedOnDeprecated":
      return EMsg.k_EMsgClientNotLoggedOnDeprecated;
    case 757:
    case "k_EMsgClientLoggedOff":
      return EMsg.k_EMsgClientLoggedOff;
    case 758:
    case "k_EMsgGSApprove":
      return EMsg.k_EMsgGSApprove;
    case 759:
    case "k_EMsgGSDeny":
      return EMsg.k_EMsgGSDeny;
    case 760:
    case "k_EMsgGSKick":
      return EMsg.k_EMsgGSKick;
    case 763:
    case "k_EMsgClientPurchaseResponse":
      return EMsg.k_EMsgClientPurchaseResponse;
    case 764:
    case "k_EMsgClientPing":
      return EMsg.k_EMsgClientPing;
    case 765:
    case "k_EMsgClientNOP":
      return EMsg.k_EMsgClientNOP;
    case 766:
    case "k_EMsgClientPersonaState":
      return EMsg.k_EMsgClientPersonaState;
    case 767:
    case "k_EMsgClientFriendsList":
      return EMsg.k_EMsgClientFriendsList;
    case 768:
    case "k_EMsgClientAccountInfo":
      return EMsg.k_EMsgClientAccountInfo;
    case 771:
    case "k_EMsgClientNewsUpdate":
      return EMsg.k_EMsgClientNewsUpdate;
    case 773:
    case "k_EMsgClientGameConnectDeny":
      return EMsg.k_EMsgClientGameConnectDeny;
    case 774:
    case "k_EMsgGSStatusReply":
      return EMsg.k_EMsgGSStatusReply;
    case 779:
    case "k_EMsgClientGameConnectTokens":
      return EMsg.k_EMsgClientGameConnectTokens;
    case 780:
    case "k_EMsgClientLicenseList":
      return EMsg.k_EMsgClientLicenseList;
    case 782:
    case "k_EMsgClientVACBanStatus":
      return EMsg.k_EMsgClientVACBanStatus;
    case 783:
    case "k_EMsgClientCMList":
      return EMsg.k_EMsgClientCMList;
    case 784:
    case "k_EMsgClientEncryptPct":
      return EMsg.k_EMsgClientEncryptPct;
    case 785:
    case "k_EMsgClientGetLegacyGameKeyResponse":
      return EMsg.k_EMsgClientGetLegacyGameKeyResponse;
    case 791:
    case "k_EMsgClientAddFriend":
      return EMsg.k_EMsgClientAddFriend;
    case 792:
    case "k_EMsgClientAddFriendResponse":
      return EMsg.k_EMsgClientAddFriendResponse;
    case 796:
    case "k_EMsgClientAckGuestPassResponse":
      return EMsg.k_EMsgClientAckGuestPassResponse;
    case 797:
    case "k_EMsgClientRedeemGuestPassResponse":
      return EMsg.k_EMsgClientRedeemGuestPassResponse;
    case 798:
    case "k_EMsgClientUpdateGuestPassesList":
      return EMsg.k_EMsgClientUpdateGuestPassesList;
    case 799:
    case "k_EMsgClientChatMsg":
      return EMsg.k_EMsgClientChatMsg;
    case 800:
    case "k_EMsgClientChatInvite":
      return EMsg.k_EMsgClientChatInvite;
    case 801:
    case "k_EMsgClientJoinChat":
      return EMsg.k_EMsgClientJoinChat;
    case 802:
    case "k_EMsgClientChatMemberInfo":
      return EMsg.k_EMsgClientChatMemberInfo;
    case 803:
    case "k_EMsgClientLogOnWithCredentials_Deprecated":
      return EMsg.k_EMsgClientLogOnWithCredentials_Deprecated;
    case 805:
    case "k_EMsgClientPasswordChangeResponse":
      return EMsg.k_EMsgClientPasswordChangeResponse;
    case 807:
    case "k_EMsgClientChatEnter":
      return EMsg.k_EMsgClientChatEnter;
    case 808:
    case "k_EMsgClientFriendRemovedFromSource":
      return EMsg.k_EMsgClientFriendRemovedFromSource;
    case 809:
    case "k_EMsgClientCreateChat":
      return EMsg.k_EMsgClientCreateChat;
    case 810:
    case "k_EMsgClientCreateChatResponse":
      return EMsg.k_EMsgClientCreateChatResponse;
    case 813:
    case "k_EMsgClientP2PIntroducerMessage":
      return EMsg.k_EMsgClientP2PIntroducerMessage;
    case 814:
    case "k_EMsgClientChatActionResult":
      return EMsg.k_EMsgClientChatActionResult;
    case 815:
    case "k_EMsgClientRequestFriendData":
      return EMsg.k_EMsgClientRequestFriendData;
    case 818:
    case "k_EMsgClientGetUserStats":
      return EMsg.k_EMsgClientGetUserStats;
    case 819:
    case "k_EMsgClientGetUserStatsResponse":
      return EMsg.k_EMsgClientGetUserStatsResponse;
    case 820:
    case "k_EMsgClientStoreUserStats":
      return EMsg.k_EMsgClientStoreUserStats;
    case 821:
    case "k_EMsgClientStoreUserStatsResponse":
      return EMsg.k_EMsgClientStoreUserStatsResponse;
    case 822:
    case "k_EMsgClientClanState":
      return EMsg.k_EMsgClientClanState;
    case 830:
    case "k_EMsgClientServiceModule":
      return EMsg.k_EMsgClientServiceModule;
    case 831:
    case "k_EMsgClientServiceCall":
      return EMsg.k_EMsgClientServiceCall;
    case 832:
    case "k_EMsgClientServiceCallResponse":
      return EMsg.k_EMsgClientServiceCallResponse;
    case 839:
    case "k_EMsgClientNatTraversalStatEvent":
      return EMsg.k_EMsgClientNatTraversalStatEvent;
    case 842:
    case "k_EMsgClientSteamUsageEvent":
      return EMsg.k_EMsgClientSteamUsageEvent;
    case 845:
    case "k_EMsgClientCheckPassword":
      return EMsg.k_EMsgClientCheckPassword;
    case 846:
    case "k_EMsgClientResetPassword":
      return EMsg.k_EMsgClientResetPassword;
    case 848:
    case "k_EMsgClientCheckPasswordResponse":
      return EMsg.k_EMsgClientCheckPasswordResponse;
    case 849:
    case "k_EMsgClientResetPasswordResponse":
      return EMsg.k_EMsgClientResetPasswordResponse;
    case 850:
    case "k_EMsgClientSessionToken":
      return EMsg.k_EMsgClientSessionToken;
    case 851:
    case "k_EMsgClientDRMProblemReport":
      return EMsg.k_EMsgClientDRMProblemReport;
    case 855:
    case "k_EMsgClientSetIgnoreFriend":
      return EMsg.k_EMsgClientSetIgnoreFriend;
    case 856:
    case "k_EMsgClientSetIgnoreFriendResponse":
      return EMsg.k_EMsgClientSetIgnoreFriendResponse;
    case 857:
    case "k_EMsgClientGetAppOwnershipTicket":
      return EMsg.k_EMsgClientGetAppOwnershipTicket;
    case 858:
    case "k_EMsgClientGetAppOwnershipTicketResponse":
      return EMsg.k_EMsgClientGetAppOwnershipTicketResponse;
    case 860:
    case "k_EMsgClientGetLobbyListResponse":
      return EMsg.k_EMsgClientGetLobbyListResponse;
    case 880:
    case "k_EMsgClientServerList":
      return EMsg.k_EMsgClientServerList;
    case 896:
    case "k_EMsgClientDRMBlobRequest":
      return EMsg.k_EMsgClientDRMBlobRequest;
    case 897:
    case "k_EMsgClientDRMBlobResponse":
      return EMsg.k_EMsgClientDRMBlobResponse;
    case 900:
    case "k_EMsgBaseGameServer":
      return EMsg.k_EMsgBaseGameServer;
    case 901:
    case "k_EMsgGSDisconnectNotice":
      return EMsg.k_EMsgGSDisconnectNotice;
    case 903:
    case "k_EMsgGSStatus":
      return EMsg.k_EMsgGSStatus;
    case 905:
    case "k_EMsgGSUserPlaying":
      return EMsg.k_EMsgGSUserPlaying;
    case 906:
    case "k_EMsgGSStatus2":
      return EMsg.k_EMsgGSStatus2;
    case 907:
    case "k_EMsgGSStatusUpdate_Unused":
      return EMsg.k_EMsgGSStatusUpdate_Unused;
    case 908:
    case "k_EMsgGSServerType":
      return EMsg.k_EMsgGSServerType;
    case 909:
    case "k_EMsgGSPlayerList":
      return EMsg.k_EMsgGSPlayerList;
    case 910:
    case "k_EMsgGSGetUserAchievementStatus":
      return EMsg.k_EMsgGSGetUserAchievementStatus;
    case 911:
    case "k_EMsgGSGetUserAchievementStatusResponse":
      return EMsg.k_EMsgGSGetUserAchievementStatusResponse;
    case 918:
    case "k_EMsgGSGetPlayStats":
      return EMsg.k_EMsgGSGetPlayStats;
    case 919:
    case "k_EMsgGSGetPlayStatsResponse":
      return EMsg.k_EMsgGSGetPlayStatsResponse;
    case 920:
    case "k_EMsgGSGetUserGroupStatus":
      return EMsg.k_EMsgGSGetUserGroupStatus;
    case 921:
    case "k_EMsgAMGetUserGroupStatus":
      return EMsg.k_EMsgAMGetUserGroupStatus;
    case 922:
    case "k_EMsgAMGetUserGroupStatusResponse":
      return EMsg.k_EMsgAMGetUserGroupStatusResponse;
    case 923:
    case "k_EMsgGSGetUserGroupStatusResponse":
      return EMsg.k_EMsgGSGetUserGroupStatusResponse;
    case 936:
    case "k_EMsgGSGetReputation":
      return EMsg.k_EMsgGSGetReputation;
    case 937:
    case "k_EMsgGSGetReputationResponse":
      return EMsg.k_EMsgGSGetReputationResponse;
    case 938:
    case "k_EMsgGSAssociateWithClan":
      return EMsg.k_EMsgGSAssociateWithClan;
    case 939:
    case "k_EMsgGSAssociateWithClanResponse":
      return EMsg.k_EMsgGSAssociateWithClanResponse;
    case 940:
    case "k_EMsgGSComputeNewPlayerCompatibility":
      return EMsg.k_EMsgGSComputeNewPlayerCompatibility;
    case 941:
    case "k_EMsgGSComputeNewPlayerCompatibilityResponse":
      return EMsg.k_EMsgGSComputeNewPlayerCompatibilityResponse;
    case 1000:
    case "k_EMsgBaseAdmin":
      return EMsg.k_EMsgBaseAdmin;
    case 1000:
    case "k_EMsgAdminCmd":
      return EMsg.k_EMsgAdminCmd;
    case 1004:
    case "k_EMsgAdminCmdResponse":
      return EMsg.k_EMsgAdminCmdResponse;
    case 1005:
    case "k_EMsgAdminLogListenRequest":
      return EMsg.k_EMsgAdminLogListenRequest;
    case 1006:
    case "k_EMsgAdminLogEvent":
      return EMsg.k_EMsgAdminLogEvent;
    case 1010:
    case "k_EMsgUniverseData":
      return EMsg.k_EMsgUniverseData;
    case 1019:
    case "k_EMsgAdminSpew":
      return EMsg.k_EMsgAdminSpew;
    case 1020:
    case "k_EMsgAdminConsoleTitle":
      return EMsg.k_EMsgAdminConsoleTitle;
    case 1023:
    case "k_EMsgAdminGCSpew":
      return EMsg.k_EMsgAdminGCSpew;
    case 1024:
    case "k_EMsgAdminGCCommand":
      return EMsg.k_EMsgAdminGCCommand;
    case 1025:
    case "k_EMsgAdminGCGetCommandList":
      return EMsg.k_EMsgAdminGCGetCommandList;
    case 1026:
    case "k_EMsgAdminGCGetCommandListResponse":
      return EMsg.k_EMsgAdminGCGetCommandListResponse;
    case 1027:
    case "k_EMsgFBSConnectionData":
      return EMsg.k_EMsgFBSConnectionData;
    case 1028:
    case "k_EMsgAdminMsgSpew":
      return EMsg.k_EMsgAdminMsgSpew;
    case 1100:
    case "k_EMsgBaseFBS":
      return EMsg.k_EMsgBaseFBS;
    case 1100:
    case "k_EMsgFBSReqVersion":
      return EMsg.k_EMsgFBSReqVersion;
    case 1101:
    case "k_EMsgFBSVersionInfo":
      return EMsg.k_EMsgFBSVersionInfo;
    case 1102:
    case "k_EMsgFBSForceRefresh":
      return EMsg.k_EMsgFBSForceRefresh;
    case 1103:
    case "k_EMsgFBSForceBounce":
      return EMsg.k_EMsgFBSForceBounce;
    case 1104:
    case "k_EMsgFBSDeployPackage":
      return EMsg.k_EMsgFBSDeployPackage;
    case 1105:
    case "k_EMsgFBSDeployResponse":
      return EMsg.k_EMsgFBSDeployResponse;
    case 1106:
    case "k_EMsgFBSUpdateBootstrapper":
      return EMsg.k_EMsgFBSUpdateBootstrapper;
    case 1107:
    case "k_EMsgFBSSetState":
      return EMsg.k_EMsgFBSSetState;
    case 1108:
    case "k_EMsgFBSApplyOSUpdates":
      return EMsg.k_EMsgFBSApplyOSUpdates;
    case 1109:
    case "k_EMsgFBSRunCMDScript":
      return EMsg.k_EMsgFBSRunCMDScript;
    case 1110:
    case "k_EMsgFBSRebootBox":
      return EMsg.k_EMsgFBSRebootBox;
    case 1111:
    case "k_EMsgFBSSetBigBrotherMode":
      return EMsg.k_EMsgFBSSetBigBrotherMode;
    case 1112:
    case "k_EMsgFBSMinidumpServer":
      return EMsg.k_EMsgFBSMinidumpServer;
    case 1114:
    case "k_EMsgFBSDeployHotFixPackage":
      return EMsg.k_EMsgFBSDeployHotFixPackage;
    case 1115:
    case "k_EMsgFBSDeployHotFixResponse":
      return EMsg.k_EMsgFBSDeployHotFixResponse;
    case 1116:
    case "k_EMsgFBSDownloadHotFix":
      return EMsg.k_EMsgFBSDownloadHotFix;
    case 1117:
    case "k_EMsgFBSDownloadHotFixResponse":
      return EMsg.k_EMsgFBSDownloadHotFixResponse;
    case 1118:
    case "k_EMsgFBSUpdateTargetConfigFile":
      return EMsg.k_EMsgFBSUpdateTargetConfigFile;
    case 1119:
    case "k_EMsgFBSApplyAccountCred":
      return EMsg.k_EMsgFBSApplyAccountCred;
    case 1120:
    case "k_EMsgFBSApplyAccountCredResponse":
      return EMsg.k_EMsgFBSApplyAccountCredResponse;
    case 1121:
    case "k_EMsgFBSSetShellCount":
      return EMsg.k_EMsgFBSSetShellCount;
    case 1122:
    case "k_EMsgFBSTerminateShell":
      return EMsg.k_EMsgFBSTerminateShell;
    case 1123:
    case "k_EMsgFBSQueryGMForRequest":
      return EMsg.k_EMsgFBSQueryGMForRequest;
    case 1124:
    case "k_EMsgFBSQueryGMResponse":
      return EMsg.k_EMsgFBSQueryGMResponse;
    case 1125:
    case "k_EMsgFBSTerminateZombies":
      return EMsg.k_EMsgFBSTerminateZombies;
    case 1126:
    case "k_EMsgFBSInfoFromBootstrapper":
      return EMsg.k_EMsgFBSInfoFromBootstrapper;
    case 1127:
    case "k_EMsgFBSRebootBoxResponse":
      return EMsg.k_EMsgFBSRebootBoxResponse;
    case 1128:
    case "k_EMsgFBSBootstrapperPackageRequest":
      return EMsg.k_EMsgFBSBootstrapperPackageRequest;
    case 1129:
    case "k_EMsgFBSBootstrapperPackageResponse":
      return EMsg.k_EMsgFBSBootstrapperPackageResponse;
    case 1130:
    case "k_EMsgFBSBootstrapperGetPackageChunk":
      return EMsg.k_EMsgFBSBootstrapperGetPackageChunk;
    case 1131:
    case "k_EMsgFBSBootstrapperGetPackageChunkResponse":
      return EMsg.k_EMsgFBSBootstrapperGetPackageChunkResponse;
    case 1132:
    case "k_EMsgFBSBootstrapperPackageTransferProgress":
      return EMsg.k_EMsgFBSBootstrapperPackageTransferProgress;
    case 1133:
    case "k_EMsgFBSRestartBootstrapper":
      return EMsg.k_EMsgFBSRestartBootstrapper;
    case 1134:
    case "k_EMsgFBSPauseFrozenDumps":
      return EMsg.k_EMsgFBSPauseFrozenDumps;
    case 1200:
    case "k_EMsgBaseFileXfer":
      return EMsg.k_EMsgBaseFileXfer;
    case 1200:
    case "k_EMsgFileXferRequest":
      return EMsg.k_EMsgFileXferRequest;
    case 1201:
    case "k_EMsgFileXferResponse":
      return EMsg.k_EMsgFileXferResponse;
    case 1202:
    case "k_EMsgFileXferData":
      return EMsg.k_EMsgFileXferData;
    case 1203:
    case "k_EMsgFileXferEnd":
      return EMsg.k_EMsgFileXferEnd;
    case 1204:
    case "k_EMsgFileXferDataAck":
      return EMsg.k_EMsgFileXferDataAck;
    case 1300:
    case "k_EMsgBaseChannelAuth":
      return EMsg.k_EMsgBaseChannelAuth;
    case 1300:
    case "k_EMsgChannelAuthChallenge":
      return EMsg.k_EMsgChannelAuthChallenge;
    case 1301:
    case "k_EMsgChannelAuthResponse":
      return EMsg.k_EMsgChannelAuthResponse;
    case 1302:
    case "k_EMsgChannelAuthResult":
      return EMsg.k_EMsgChannelAuthResult;
    case 1303:
    case "k_EMsgChannelEncryptRequest":
      return EMsg.k_EMsgChannelEncryptRequest;
    case 1304:
    case "k_EMsgChannelEncryptResponse":
      return EMsg.k_EMsgChannelEncryptResponse;
    case 1305:
    case "k_EMsgChannelEncryptResult":
      return EMsg.k_EMsgChannelEncryptResult;
    case 1400:
    case "k_EMsgBaseBS":
      return EMsg.k_EMsgBaseBS;
    case 1401:
    case "k_EMsgBSPurchaseStart":
      return EMsg.k_EMsgBSPurchaseStart;
    case 1402:
    case "k_EMsgBSPurchaseResponse":
      return EMsg.k_EMsgBSPurchaseResponse;
    case 1403:
    case "k_EMsgBSAuthenticateCCTrans":
      return EMsg.k_EMsgBSAuthenticateCCTrans;
    case 1404:
    case "k_EMsgBSAuthenticateCCTransResponse":
      return EMsg.k_EMsgBSAuthenticateCCTransResponse;
    case 1406:
    case "k_EMsgBSSettleComplete":
      return EMsg.k_EMsgBSSettleComplete;
    case 1408:
    case "k_EMsgBSInitPayPalTxn":
      return EMsg.k_EMsgBSInitPayPalTxn;
    case 1409:
    case "k_EMsgBSInitPayPalTxnResponse":
      return EMsg.k_EMsgBSInitPayPalTxnResponse;
    case 1410:
    case "k_EMsgBSGetPayPalUserInfo":
      return EMsg.k_EMsgBSGetPayPalUserInfo;
    case 1411:
    case "k_EMsgBSGetPayPalUserInfoResponse":
      return EMsg.k_EMsgBSGetPayPalUserInfoResponse;
    case 1417:
    case "k_EMsgBSPaymentInstrBan":
      return EMsg.k_EMsgBSPaymentInstrBan;
    case 1418:
    case "k_EMsgBSPaymentInstrBanResponse":
      return EMsg.k_EMsgBSPaymentInstrBanResponse;
    case 1421:
    case "k_EMsgBSInitGCBankXferTxn":
      return EMsg.k_EMsgBSInitGCBankXferTxn;
    case 1422:
    case "k_EMsgBSInitGCBankXferTxnResponse":
      return EMsg.k_EMsgBSInitGCBankXferTxnResponse;
    case 1425:
    case "k_EMsgBSCommitGCTxn":
      return EMsg.k_EMsgBSCommitGCTxn;
    case 1426:
    case "k_EMsgBSQueryTransactionStatus":
      return EMsg.k_EMsgBSQueryTransactionStatus;
    case 1427:
    case "k_EMsgBSQueryTransactionStatusResponse":
      return EMsg.k_EMsgBSQueryTransactionStatusResponse;
    case 1433:
    case "k_EMsgBSQueryTxnExtendedInfo":
      return EMsg.k_EMsgBSQueryTxnExtendedInfo;
    case 1434:
    case "k_EMsgBSQueryTxnExtendedInfoResponse":
      return EMsg.k_EMsgBSQueryTxnExtendedInfoResponse;
    case 1435:
    case "k_EMsgBSUpdateConversionRates":
      return EMsg.k_EMsgBSUpdateConversionRates;
    case 1437:
    case "k_EMsgBSPurchaseRunFraudChecks":
      return EMsg.k_EMsgBSPurchaseRunFraudChecks;
    case 1438:
    case "k_EMsgBSPurchaseRunFraudChecksResponse":
      return EMsg.k_EMsgBSPurchaseRunFraudChecksResponse;
    case 1440:
    case "k_EMsgBSQueryBankInformation":
      return EMsg.k_EMsgBSQueryBankInformation;
    case 1441:
    case "k_EMsgBSQueryBankInformationResponse":
      return EMsg.k_EMsgBSQueryBankInformationResponse;
    case 1445:
    case "k_EMsgBSValidateXsollaSignature":
      return EMsg.k_EMsgBSValidateXsollaSignature;
    case 1446:
    case "k_EMsgBSValidateXsollaSignatureResponse":
      return EMsg.k_EMsgBSValidateXsollaSignatureResponse;
    case 1448:
    case "k_EMsgBSQiwiWalletInvoice":
      return EMsg.k_EMsgBSQiwiWalletInvoice;
    case 1449:
    case "k_EMsgBSQiwiWalletInvoiceResponse":
      return EMsg.k_EMsgBSQiwiWalletInvoiceResponse;
    case 1450:
    case "k_EMsgBSUpdateInventoryFromProPack":
      return EMsg.k_EMsgBSUpdateInventoryFromProPack;
    case 1451:
    case "k_EMsgBSUpdateInventoryFromProPackResponse":
      return EMsg.k_EMsgBSUpdateInventoryFromProPackResponse;
    case 1452:
    case "k_EMsgBSSendShippingRequest":
      return EMsg.k_EMsgBSSendShippingRequest;
    case 1453:
    case "k_EMsgBSSendShippingRequestResponse":
      return EMsg.k_EMsgBSSendShippingRequestResponse;
    case 1454:
    case "k_EMsgBSGetProPackOrderStatus":
      return EMsg.k_EMsgBSGetProPackOrderStatus;
    case 1455:
    case "k_EMsgBSGetProPackOrderStatusResponse":
      return EMsg.k_EMsgBSGetProPackOrderStatusResponse;
    case 1456:
    case "k_EMsgBSCheckJobRunning":
      return EMsg.k_EMsgBSCheckJobRunning;
    case 1457:
    case "k_EMsgBSCheckJobRunningResponse":
      return EMsg.k_EMsgBSCheckJobRunningResponse;
    case 1458:
    case "k_EMsgBSResetPackagePurchaseRateLimit":
      return EMsg.k_EMsgBSResetPackagePurchaseRateLimit;
    case 1459:
    case "k_EMsgBSResetPackagePurchaseRateLimitResponse":
      return EMsg.k_EMsgBSResetPackagePurchaseRateLimitResponse;
    case 1460:
    case "k_EMsgBSUpdatePaymentData":
      return EMsg.k_EMsgBSUpdatePaymentData;
    case 1461:
    case "k_EMsgBSUpdatePaymentDataResponse":
      return EMsg.k_EMsgBSUpdatePaymentDataResponse;
    case 1462:
    case "k_EMsgBSGetBillingAddress":
      return EMsg.k_EMsgBSGetBillingAddress;
    case 1463:
    case "k_EMsgBSGetBillingAddressResponse":
      return EMsg.k_EMsgBSGetBillingAddressResponse;
    case 1464:
    case "k_EMsgBSGetCreditCardInfo":
      return EMsg.k_EMsgBSGetCreditCardInfo;
    case 1465:
    case "k_EMsgBSGetCreditCardInfoResponse":
      return EMsg.k_EMsgBSGetCreditCardInfoResponse;
    case 1468:
    case "k_EMsgBSRemoveExpiredPaymentData":
      return EMsg.k_EMsgBSRemoveExpiredPaymentData;
    case 1469:
    case "k_EMsgBSRemoveExpiredPaymentDataResponse":
      return EMsg.k_EMsgBSRemoveExpiredPaymentDataResponse;
    case 1470:
    case "k_EMsgBSConvertToCurrentKeys":
      return EMsg.k_EMsgBSConvertToCurrentKeys;
    case 1471:
    case "k_EMsgBSConvertToCurrentKeysResponse":
      return EMsg.k_EMsgBSConvertToCurrentKeysResponse;
    case 1472:
    case "k_EMsgBSInitPurchase":
      return EMsg.k_EMsgBSInitPurchase;
    case 1473:
    case "k_EMsgBSInitPurchaseResponse":
      return EMsg.k_EMsgBSInitPurchaseResponse;
    case 1474:
    case "k_EMsgBSCompletePurchase":
      return EMsg.k_EMsgBSCompletePurchase;
    case 1475:
    case "k_EMsgBSCompletePurchaseResponse":
      return EMsg.k_EMsgBSCompletePurchaseResponse;
    case 1476:
    case "k_EMsgBSPruneCardUsageStats":
      return EMsg.k_EMsgBSPruneCardUsageStats;
    case 1477:
    case "k_EMsgBSPruneCardUsageStatsResponse":
      return EMsg.k_EMsgBSPruneCardUsageStatsResponse;
    case 1478:
    case "k_EMsgBSStoreBankInformation":
      return EMsg.k_EMsgBSStoreBankInformation;
    case 1479:
    case "k_EMsgBSStoreBankInformationResponse":
      return EMsg.k_EMsgBSStoreBankInformationResponse;
    case 1480:
    case "k_EMsgBSVerifyPOSAKey":
      return EMsg.k_EMsgBSVerifyPOSAKey;
    case 1481:
    case "k_EMsgBSVerifyPOSAKeyResponse":
      return EMsg.k_EMsgBSVerifyPOSAKeyResponse;
    case 1482:
    case "k_EMsgBSReverseRedeemPOSAKey":
      return EMsg.k_EMsgBSReverseRedeemPOSAKey;
    case 1483:
    case "k_EMsgBSReverseRedeemPOSAKeyResponse":
      return EMsg.k_EMsgBSReverseRedeemPOSAKeyResponse;
    case 1484:
    case "k_EMsgBSQueryFindCreditCard":
      return EMsg.k_EMsgBSQueryFindCreditCard;
    case 1485:
    case "k_EMsgBSQueryFindCreditCardResponse":
      return EMsg.k_EMsgBSQueryFindCreditCardResponse;
    case 1486:
    case "k_EMsgBSStatusInquiryPOSAKey":
      return EMsg.k_EMsgBSStatusInquiryPOSAKey;
    case 1487:
    case "k_EMsgBSStatusInquiryPOSAKeyResponse":
      return EMsg.k_EMsgBSStatusInquiryPOSAKeyResponse;
    case 1494:
    case "k_EMsgBSBoaCompraConfirmProductDelivery":
      return EMsg.k_EMsgBSBoaCompraConfirmProductDelivery;
    case 1495:
    case "k_EMsgBSBoaCompraConfirmProductDeliveryResponse":
      return EMsg.k_EMsgBSBoaCompraConfirmProductDeliveryResponse;
    case 1496:
    case "k_EMsgBSGenerateBoaCompraMD5":
      return EMsg.k_EMsgBSGenerateBoaCompraMD5;
    case 1497:
    case "k_EMsgBSGenerateBoaCompraMD5Response":
      return EMsg.k_EMsgBSGenerateBoaCompraMD5Response;
    case 1498:
    case "k_EMsgBSCommitWPTxn":
      return EMsg.k_EMsgBSCommitWPTxn;
    case 1499:
    case "k_EMsgBSCommitAdyenTxn":
      return EMsg.k_EMsgBSCommitAdyenTxn;
    case 1500:
    case "k_EMsgBaseATS":
      return EMsg.k_EMsgBaseATS;
    case 1501:
    case "k_EMsgATSStartStressTest":
      return EMsg.k_EMsgATSStartStressTest;
    case 1502:
    case "k_EMsgATSStopStressTest":
      return EMsg.k_EMsgATSStopStressTest;
    case 1503:
    case "k_EMsgATSRunFailServerTest":
      return EMsg.k_EMsgATSRunFailServerTest;
    case 1504:
    case "k_EMsgATSUFSPerfTestTask":
      return EMsg.k_EMsgATSUFSPerfTestTask;
    case 1505:
    case "k_EMsgATSUFSPerfTestResponse":
      return EMsg.k_EMsgATSUFSPerfTestResponse;
    case 1506:
    case "k_EMsgATSCycleTCM":
      return EMsg.k_EMsgATSCycleTCM;
    case 1507:
    case "k_EMsgATSInitDRMSStressTest":
      return EMsg.k_EMsgATSInitDRMSStressTest;
    case 1508:
    case "k_EMsgATSCallTest":
      return EMsg.k_EMsgATSCallTest;
    case 1509:
    case "k_EMsgATSCallTestReply":
      return EMsg.k_EMsgATSCallTestReply;
    case 1510:
    case "k_EMsgATSStartExternalStress":
      return EMsg.k_EMsgATSStartExternalStress;
    case 1511:
    case "k_EMsgATSExternalStressJobStart":
      return EMsg.k_EMsgATSExternalStressJobStart;
    case 1512:
    case "k_EMsgATSExternalStressJobQueued":
      return EMsg.k_EMsgATSExternalStressJobQueued;
    case 1513:
    case "k_EMsgATSExternalStressJobRunning":
      return EMsg.k_EMsgATSExternalStressJobRunning;
    case 1514:
    case "k_EMsgATSExternalStressJobStopped":
      return EMsg.k_EMsgATSExternalStressJobStopped;
    case 1515:
    case "k_EMsgATSExternalStressJobStopAll":
      return EMsg.k_EMsgATSExternalStressJobStopAll;
    case 1516:
    case "k_EMsgATSExternalStressActionResult":
      return EMsg.k_EMsgATSExternalStressActionResult;
    case 1517:
    case "k_EMsgATSStarted":
      return EMsg.k_EMsgATSStarted;
    case 1518:
    case "k_EMsgATSCSPerfTestTask":
      return EMsg.k_EMsgATSCSPerfTestTask;
    case 1519:
    case "k_EMsgATSCSPerfTestResponse":
      return EMsg.k_EMsgATSCSPerfTestResponse;
    case 1600:
    case "k_EMsgBaseDP":
      return EMsg.k_EMsgBaseDP;
    case 1601:
    case "k_EMsgDPSetPublishingState":
      return EMsg.k_EMsgDPSetPublishingState;
    case 1603:
    case "k_EMsgDPUniquePlayersStat":
      return EMsg.k_EMsgDPUniquePlayersStat;
    case 1604:
    case "k_EMsgDPStreamingUniquePlayersStat":
      return EMsg.k_EMsgDPStreamingUniquePlayersStat;
    case 1607:
    case "k_EMsgDPBlockingStats":
      return EMsg.k_EMsgDPBlockingStats;
    case 1608:
    case "k_EMsgDPNatTraversalStats":
      return EMsg.k_EMsgDPNatTraversalStats;
    case 1612:
    case "k_EMsgDPCloudStats":
      return EMsg.k_EMsgDPCloudStats;
    case 1615:
    case "k_EMsgDPGetPlayerCount":
      return EMsg.k_EMsgDPGetPlayerCount;
    case 1616:
    case "k_EMsgDPGetPlayerCountResponse":
      return EMsg.k_EMsgDPGetPlayerCountResponse;
    case 1617:
    case "k_EMsgDPGameServersPlayersStats":
      return EMsg.k_EMsgDPGameServersPlayersStats;
    case 1620:
    case "k_EMsgClientDPCheckSpecialSurvey":
      return EMsg.k_EMsgClientDPCheckSpecialSurvey;
    case 1621:
    case "k_EMsgClientDPCheckSpecialSurveyResponse":
      return EMsg.k_EMsgClientDPCheckSpecialSurveyResponse;
    case 1622:
    case "k_EMsgClientDPSendSpecialSurveyResponse":
      return EMsg.k_EMsgClientDPSendSpecialSurveyResponse;
    case 1623:
    case "k_EMsgClientDPSendSpecialSurveyResponseReply":
      return EMsg.k_EMsgClientDPSendSpecialSurveyResponseReply;
    case 1624:
    case "k_EMsgDPStoreSaleStatistics":
      return EMsg.k_EMsgDPStoreSaleStatistics;
    case 1628:
    case "k_EMsgDPPartnerMicroTxns":
      return EMsg.k_EMsgDPPartnerMicroTxns;
    case 1629:
    case "k_EMsgDPPartnerMicroTxnsResponse":
      return EMsg.k_EMsgDPPartnerMicroTxnsResponse;
    case 1631:
    case "k_EMsgDPVRUniquePlayersStat":
      return EMsg.k_EMsgDPVRUniquePlayersStat;
    case 1700:
    case "k_EMsgBaseCM":
      return EMsg.k_EMsgBaseCM;
    case 1701:
    case "k_EMsgCMSetAllowState":
      return EMsg.k_EMsgCMSetAllowState;
    case 1702:
    case "k_EMsgCMSpewAllowState":
      return EMsg.k_EMsgCMSpewAllowState;
    case 1703:
    case "k_EMsgCMSessionRejected":
      return EMsg.k_EMsgCMSessionRejected;
    case 1704:
    case "k_EMsgCMSetSecrets":
      return EMsg.k_EMsgCMSetSecrets;
    case 1705:
    case "k_EMsgCMGetSecrets":
      return EMsg.k_EMsgCMGetSecrets;
    case 2200:
    case "k_EMsgBaseGC":
      return EMsg.k_EMsgBaseGC;
    case 2203:
    case "k_EMsgGCCmdRevive":
      return EMsg.k_EMsgGCCmdRevive;
    case 2206:
    case "k_EMsgGCCmdDown":
      return EMsg.k_EMsgGCCmdDown;
    case 2207:
    case "k_EMsgGCCmdDeploy":
      return EMsg.k_EMsgGCCmdDeploy;
    case 2208:
    case "k_EMsgGCCmdDeployResponse":
      return EMsg.k_EMsgGCCmdDeployResponse;
    case 2209:
    case "k_EMsgGCCmdSwitch":
      return EMsg.k_EMsgGCCmdSwitch;
    case 2210:
    case "k_EMsgAMRefreshSessions":
      return EMsg.k_EMsgAMRefreshSessions;
    case 2212:
    case "k_EMsgGCAchievementAwarded":
      return EMsg.k_EMsgGCAchievementAwarded;
    case 2213:
    case "k_EMsgGCSystemMessage":
      return EMsg.k_EMsgGCSystemMessage;
    case 2216:
    case "k_EMsgGCCmdStatus":
      return EMsg.k_EMsgGCCmdStatus;
    case 2217:
    case "k_EMsgGCRegisterWebInterfaces_Deprecated":
      return EMsg.k_EMsgGCRegisterWebInterfaces_Deprecated;
    case 2218:
    case "k_EMsgGCGetAccountDetails_DEPRECATED":
      return EMsg.k_EMsgGCGetAccountDetails_DEPRECATED;
    case 2219:
    case "k_EMsgGCInterAppMessage":
      return EMsg.k_EMsgGCInterAppMessage;
    case 2220:
    case "k_EMsgGCGetEmailTemplate":
      return EMsg.k_EMsgGCGetEmailTemplate;
    case 2221:
    case "k_EMsgGCGetEmailTemplateResponse":
      return EMsg.k_EMsgGCGetEmailTemplateResponse;
    case 2222:
    case "k_EMsgGCHRelay":
      return EMsg.k_EMsgGCHRelay;
    case 2223:
    case "k_EMsgGCHRelayToClient":
      return EMsg.k_EMsgGCHRelayToClient;
    case 2224:
    case "k_EMsgGCHUpdateSession":
      return EMsg.k_EMsgGCHUpdateSession;
    case 2225:
    case "k_EMsgGCHRequestUpdateSession":
      return EMsg.k_EMsgGCHRequestUpdateSession;
    case 2226:
    case "k_EMsgGCHRequestStatus":
      return EMsg.k_EMsgGCHRequestStatus;
    case 2227:
    case "k_EMsgGCHRequestStatusResponse":
      return EMsg.k_EMsgGCHRequestStatusResponse;
    case 2228:
    case "k_EMsgGCHAccountVacStatusChange":
      return EMsg.k_EMsgGCHAccountVacStatusChange;
    case 2229:
    case "k_EMsgGCHSpawnGC":
      return EMsg.k_EMsgGCHSpawnGC;
    case 2230:
    case "k_EMsgGCHSpawnGCResponse":
      return EMsg.k_EMsgGCHSpawnGCResponse;
    case 2231:
    case "k_EMsgGCHKillGC":
      return EMsg.k_EMsgGCHKillGC;
    case 2232:
    case "k_EMsgGCHKillGCResponse":
      return EMsg.k_EMsgGCHKillGCResponse;
    case 2233:
    case "k_EMsgGCHAccountTradeBanStatusChange":
      return EMsg.k_EMsgGCHAccountTradeBanStatusChange;
    case 2234:
    case "k_EMsgGCHAccountLockStatusChange":
      return EMsg.k_EMsgGCHAccountLockStatusChange;
    case 2235:
    case "k_EMsgGCHVacVerificationChange":
      return EMsg.k_EMsgGCHVacVerificationChange;
    case 2236:
    case "k_EMsgGCHAccountPhoneNumberChange":
      return EMsg.k_EMsgGCHAccountPhoneNumberChange;
    case 2237:
    case "k_EMsgGCHAccountTwoFactorChange":
      return EMsg.k_EMsgGCHAccountTwoFactorChange;
    case 2238:
    case "k_EMsgGCHInviteUserToLobby":
      return EMsg.k_EMsgGCHInviteUserToLobby;
    case 2239:
    case "k_EMsgGCHUpdateMultipleSessions":
      return EMsg.k_EMsgGCHUpdateMultipleSessions;
    case 2240:
    case "k_EMsgGCHMarkAppSessionsAuthoritative":
      return EMsg.k_EMsgGCHMarkAppSessionsAuthoritative;
    case 2241:
    case "k_EMsgGCHRecurringSubscriptionStatusChange":
      return EMsg.k_EMsgGCHRecurringSubscriptionStatusChange;
    case 2242:
    case "k_EMsgGCHAppCheersReceived":
      return EMsg.k_EMsgGCHAppCheersReceived;
    case 2243:
    case "k_EMsgGCHAppCheersGetAllowedTypes":
      return EMsg.k_EMsgGCHAppCheersGetAllowedTypes;
    case 2244:
    case "k_EMsgGCHAppCheersGetAllowedTypesResponse":
      return EMsg.k_EMsgGCHAppCheersGetAllowedTypesResponse;
    case 2245:
    case "k_EMsgGCHRoutingRulesFromGCHtoGM":
      return EMsg.k_EMsgGCHRoutingRulesFromGCHtoGM;
    case 2246:
    case "k_EMsgGCHRoutingRulesToGCHfromGM":
      return EMsg.k_EMsgGCHRoutingRulesToGCHfromGM;
    case 2247:
    case "k_EMsgUpdateCMMessageRateRules":
      return EMsg.k_EMsgUpdateCMMessageRateRules;
    case 2500:
    case "k_EMsgBaseP2P":
      return EMsg.k_EMsgBaseP2P;
    case 2502:
    case "k_EMsgP2PIntroducerMessage":
      return EMsg.k_EMsgP2PIntroducerMessage;
    case 2900:
    case "k_EMsgBaseSM":
      return EMsg.k_EMsgBaseSM;
    case 2902:
    case "k_EMsgSMExpensiveReport":
      return EMsg.k_EMsgSMExpensiveReport;
    case 2903:
    case "k_EMsgSMHourlyReport":
      return EMsg.k_EMsgSMHourlyReport;
    case 2905:
    case "k_EMsgSMPartitionRenames":
      return EMsg.k_EMsgSMPartitionRenames;
    case 2906:
    case "k_EMsgSMMonitorSpace":
      return EMsg.k_EMsgSMMonitorSpace;
    case 2907:
    case "k_EMsgSMTestNextBuildSchemaConversion":
      return EMsg.k_EMsgSMTestNextBuildSchemaConversion;
    case 2908:
    case "k_EMsgSMTestNextBuildSchemaConversionResponse":
      return EMsg.k_EMsgSMTestNextBuildSchemaConversionResponse;
    case 3000:
    case "k_EMsgBaseTest":
      return EMsg.k_EMsgBaseTest;
    case 3000:
    case "k_EMsgFailServer":
      return EMsg.k_EMsgFailServer;
    case 3001:
    case "k_EMsgJobHeartbeatTest":
      return EMsg.k_EMsgJobHeartbeatTest;
    case 3002:
    case "k_EMsgJobHeartbeatTestResponse":
      return EMsg.k_EMsgJobHeartbeatTestResponse;
    case 3100:
    case "k_EMsgBaseFTSRange":
      return EMsg.k_EMsgBaseFTSRange;
    case 3150:
    case "k_EMsgBaseCCSRange":
      return EMsg.k_EMsgBaseCCSRange;
    case 3161:
    case "k_EMsgCCSDeleteAllCommentsByAuthor":
      return EMsg.k_EMsgCCSDeleteAllCommentsByAuthor;
    case 3162:
    case "k_EMsgCCSDeleteAllCommentsByAuthorResponse":
      return EMsg.k_EMsgCCSDeleteAllCommentsByAuthorResponse;
    case 3200:
    case "k_EMsgBaseLBSRange":
      return EMsg.k_EMsgBaseLBSRange;
    case 3201:
    case "k_EMsgLBSSetScore":
      return EMsg.k_EMsgLBSSetScore;
    case 3202:
    case "k_EMsgLBSSetScoreResponse":
      return EMsg.k_EMsgLBSSetScoreResponse;
    case 3203:
    case "k_EMsgLBSFindOrCreateLB":
      return EMsg.k_EMsgLBSFindOrCreateLB;
    case 3204:
    case "k_EMsgLBSFindOrCreateLBResponse":
      return EMsg.k_EMsgLBSFindOrCreateLBResponse;
    case 3205:
    case "k_EMsgLBSGetLBEntries":
      return EMsg.k_EMsgLBSGetLBEntries;
    case 3206:
    case "k_EMsgLBSGetLBEntriesResponse":
      return EMsg.k_EMsgLBSGetLBEntriesResponse;
    case 3207:
    case "k_EMsgLBSGetLBList":
      return EMsg.k_EMsgLBSGetLBList;
    case 3208:
    case "k_EMsgLBSGetLBListResponse":
      return EMsg.k_EMsgLBSGetLBListResponse;
    case 3209:
    case "k_EMsgLBSSetLBDetails":
      return EMsg.k_EMsgLBSSetLBDetails;
    case 3210:
    case "k_EMsgLBSDeleteLB":
      return EMsg.k_EMsgLBSDeleteLB;
    case 3211:
    case "k_EMsgLBSDeleteLBEntry":
      return EMsg.k_EMsgLBSDeleteLBEntry;
    case 3212:
    case "k_EMsgLBSResetLB":
      return EMsg.k_EMsgLBSResetLB;
    case 3213:
    case "k_EMsgLBSResetLBResponse":
      return EMsg.k_EMsgLBSResetLBResponse;
    case 3214:
    case "k_EMsgLBSDeleteLBResponse":
      return EMsg.k_EMsgLBSDeleteLBResponse;
    case 3400:
    case "k_EMsgBaseOGS":
      return EMsg.k_EMsgBaseOGS;
    case 3401:
    case "k_EMsgOGSBeginSession":
      return EMsg.k_EMsgOGSBeginSession;
    case 3402:
    case "k_EMsgOGSBeginSessionResponse":
      return EMsg.k_EMsgOGSBeginSessionResponse;
    case 3403:
    case "k_EMsgOGSEndSession":
      return EMsg.k_EMsgOGSEndSession;
    case 3404:
    case "k_EMsgOGSEndSessionResponse":
      return EMsg.k_EMsgOGSEndSessionResponse;
    case 3406:
    case "k_EMsgOGSWriteAppSessionRow":
      return EMsg.k_EMsgOGSWriteAppSessionRow;
    case 3600:
    case "k_EMsgBaseBRP":
      return EMsg.k_EMsgBaseBRP;
    case 3629:
    case "k_EMsgBRPPostTransactionTax":
      return EMsg.k_EMsgBRPPostTransactionTax;
    case 3630:
    case "k_EMsgBRPPostTransactionTaxResponse":
      return EMsg.k_EMsgBRPPostTransactionTaxResponse;
    case 4000:
    case "k_EMsgBaseAMRange2":
      return EMsg.k_EMsgBaseAMRange2;
    case 4001:
    case "k_EMsgAMCreateChat":
      return EMsg.k_EMsgAMCreateChat;
    case 4002:
    case "k_EMsgAMCreateChatResponse":
      return EMsg.k_EMsgAMCreateChatResponse;
    case 4005:
    case "k_EMsgAMSetProfileURL":
      return EMsg.k_EMsgAMSetProfileURL;
    case 4006:
    case "k_EMsgAMGetAccountEmailAddress":
      return EMsg.k_EMsgAMGetAccountEmailAddress;
    case 4007:
    case "k_EMsgAMGetAccountEmailAddressResponse":
      return EMsg.k_EMsgAMGetAccountEmailAddressResponse;
    case 4008:
    case "k_EMsgAMRequestClanData":
      return EMsg.k_EMsgAMRequestClanData;
    case 4009:
    case "k_EMsgAMRouteToClients":
      return EMsg.k_EMsgAMRouteToClients;
    case 4010:
    case "k_EMsgAMLeaveClan":
      return EMsg.k_EMsgAMLeaveClan;
    case 4011:
    case "k_EMsgAMClanPermissions":
      return EMsg.k_EMsgAMClanPermissions;
    case 4012:
    case "k_EMsgAMClanPermissionsResponse":
      return EMsg.k_EMsgAMClanPermissionsResponse;
    case 4013:
    case "k_EMsgAMCreateClanEventDummyForRateLimiting":
      return EMsg.k_EMsgAMCreateClanEventDummyForRateLimiting;
    case 4015:
    case "k_EMsgAMUpdateClanEventDummyForRateLimiting":
      return EMsg.k_EMsgAMUpdateClanEventDummyForRateLimiting;
    case 4021:
    case "k_EMsgAMSetClanPermissionSettings":
      return EMsg.k_EMsgAMSetClanPermissionSettings;
    case 4022:
    case "k_EMsgAMSetClanPermissionSettingsResponse":
      return EMsg.k_EMsgAMSetClanPermissionSettingsResponse;
    case 4023:
    case "k_EMsgAMGetClanPermissionSettings":
      return EMsg.k_EMsgAMGetClanPermissionSettings;
    case 4024:
    case "k_EMsgAMGetClanPermissionSettingsResponse":
      return EMsg.k_EMsgAMGetClanPermissionSettingsResponse;
    case 4025:
    case "k_EMsgAMPublishChatRoomInfo":
      return EMsg.k_EMsgAMPublishChatRoomInfo;
    case 4026:
    case "k_EMsgClientChatRoomInfo":
      return EMsg.k_EMsgClientChatRoomInfo;
    case 4039:
    case "k_EMsgAMGetClanHistory":
      return EMsg.k_EMsgAMGetClanHistory;
    case 4040:
    case "k_EMsgAMGetClanHistoryResponse":
      return EMsg.k_EMsgAMGetClanHistoryResponse;
    case 4041:
    case "k_EMsgAMGetClanPermissionBits":
      return EMsg.k_EMsgAMGetClanPermissionBits;
    case 4042:
    case "k_EMsgAMGetClanPermissionBitsResponse":
      return EMsg.k_EMsgAMGetClanPermissionBitsResponse;
    case 4043:
    case "k_EMsgAMSetClanPermissionBits":
      return EMsg.k_EMsgAMSetClanPermissionBits;
    case 4044:
    case "k_EMsgAMSetClanPermissionBitsResponse":
      return EMsg.k_EMsgAMSetClanPermissionBitsResponse;
    case 4045:
    case "k_EMsgAMSessionInfoRequest":
      return EMsg.k_EMsgAMSessionInfoRequest;
    case 4046:
    case "k_EMsgAMSessionInfoResponse":
      return EMsg.k_EMsgAMSessionInfoResponse;
    case 4047:
    case "k_EMsgAMValidateWGToken":
      return EMsg.k_EMsgAMValidateWGToken;
    case 4050:
    case "k_EMsgAMGetClanRank":
      return EMsg.k_EMsgAMGetClanRank;
    case 4051:
    case "k_EMsgAMGetClanRankResponse":
      return EMsg.k_EMsgAMGetClanRankResponse;
    case 4052:
    case "k_EMsgAMSetClanRank":
      return EMsg.k_EMsgAMSetClanRank;
    case 4053:
    case "k_EMsgAMSetClanRankResponse":
      return EMsg.k_EMsgAMSetClanRankResponse;
    case 4054:
    case "k_EMsgAMGetClanPOTW":
      return EMsg.k_EMsgAMGetClanPOTW;
    case 4055:
    case "k_EMsgAMGetClanPOTWResponse":
      return EMsg.k_EMsgAMGetClanPOTWResponse;
    case 4056:
    case "k_EMsgAMSetClanPOTW":
      return EMsg.k_EMsgAMSetClanPOTW;
    case 4057:
    case "k_EMsgAMSetClanPOTWResponse":
      return EMsg.k_EMsgAMSetClanPOTWResponse;
    case 4059:
    case "k_EMsgAMDumpUser":
      return EMsg.k_EMsgAMDumpUser;
    case 4060:
    case "k_EMsgAMKickUserFromClan":
      return EMsg.k_EMsgAMKickUserFromClan;
    case 4061:
    case "k_EMsgAMAddFounderToClan":
      return EMsg.k_EMsgAMAddFounderToClan;
    case 4062:
    case "k_EMsgAMValidateWGTokenResponse":
      return EMsg.k_EMsgAMValidateWGTokenResponse;
    case 4064:
    case "k_EMsgAMSetAccountDetails":
      return EMsg.k_EMsgAMSetAccountDetails;
    case 4065:
    case "k_EMsgAMGetChatBanList":
      return EMsg.k_EMsgAMGetChatBanList;
    case 4066:
    case "k_EMsgAMGetChatBanListResponse":
      return EMsg.k_EMsgAMGetChatBanListResponse;
    case 4067:
    case "k_EMsgAMUnBanFromChat":
      return EMsg.k_EMsgAMUnBanFromChat;
    case 4068:
    case "k_EMsgAMSetClanDetails":
      return EMsg.k_EMsgAMSetClanDetails;
    case 4073:
    case "k_EMsgUGSGetUserGameStats":
      return EMsg.k_EMsgUGSGetUserGameStats;
    case 4074:
    case "k_EMsgUGSGetUserGameStatsResponse":
      return EMsg.k_EMsgUGSGetUserGameStatsResponse;
    case 4075:
    case "k_EMsgAMCheckClanMembership":
      return EMsg.k_EMsgAMCheckClanMembership;
    case 4076:
    case "k_EMsgAMGetClanMembers":
      return EMsg.k_EMsgAMGetClanMembers;
    case 4077:
    case "k_EMsgAMGetClanMembersResponse":
      return EMsg.k_EMsgAMGetClanMembersResponse;
    case 4079:
    case "k_EMsgAMNotifyChatOfClanChange":
      return EMsg.k_EMsgAMNotifyChatOfClanChange;
    case 4080:
    case "k_EMsgAMResubmitPurchase":
      return EMsg.k_EMsgAMResubmitPurchase;
    case 4081:
    case "k_EMsgAMAddFriend":
      return EMsg.k_EMsgAMAddFriend;
    case 4082:
    case "k_EMsgAMAddFriendResponse":
      return EMsg.k_EMsgAMAddFriendResponse;
    case 4083:
    case "k_EMsgAMRemoveFriend":
      return EMsg.k_EMsgAMRemoveFriend;
    case 4084:
    case "k_EMsgAMDumpClan":
      return EMsg.k_EMsgAMDumpClan;
    case 4085:
    case "k_EMsgAMChangeClanOwner":
      return EMsg.k_EMsgAMChangeClanOwner;
    case 4086:
    case "k_EMsgAMCancelEasyCollect":
      return EMsg.k_EMsgAMCancelEasyCollect;
    case 4087:
    case "k_EMsgAMCancelEasyCollectResponse":
      return EMsg.k_EMsgAMCancelEasyCollectResponse;
    case 4090:
    case "k_EMsgAMClansInCommon":
      return EMsg.k_EMsgAMClansInCommon;
    case 4091:
    case "k_EMsgAMClansInCommonResponse":
      return EMsg.k_EMsgAMClansInCommonResponse;
    case 4092:
    case "k_EMsgAMIsValidAccountID":
      return EMsg.k_EMsgAMIsValidAccountID;
    case 4095:
    case "k_EMsgAMWipeFriendsList":
      return EMsg.k_EMsgAMWipeFriendsList;
    case 4096:
    case "k_EMsgAMSetIgnored":
      return EMsg.k_EMsgAMSetIgnored;
    case 4097:
    case "k_EMsgAMClansInCommonCountResponse":
      return EMsg.k_EMsgAMClansInCommonCountResponse;
    case 4098:
    case "k_EMsgAMFriendsList":
      return EMsg.k_EMsgAMFriendsList;
    case 4099:
    case "k_EMsgAMFriendsListResponse":
      return EMsg.k_EMsgAMFriendsListResponse;
    case 4100:
    case "k_EMsgAMFriendsInCommon":
      return EMsg.k_EMsgAMFriendsInCommon;
    case 4101:
    case "k_EMsgAMFriendsInCommonResponse":
      return EMsg.k_EMsgAMFriendsInCommonResponse;
    case 4102:
    case "k_EMsgAMFriendsInCommonCountResponse":
      return EMsg.k_EMsgAMFriendsInCommonCountResponse;
    case 4103:
    case "k_EMsgAMClansInCommonCount":
      return EMsg.k_EMsgAMClansInCommonCount;
    case 4104:
    case "k_EMsgAMChallengeVerdict":
      return EMsg.k_EMsgAMChallengeVerdict;
    case 4105:
    case "k_EMsgAMChallengeNotification":
      return EMsg.k_EMsgAMChallengeNotification;
    case 4106:
    case "k_EMsgAMFindGSByIP":
      return EMsg.k_EMsgAMFindGSByIP;
    case 4107:
    case "k_EMsgAMFoundGSByIP":
      return EMsg.k_EMsgAMFoundGSByIP;
    case 4108:
    case "k_EMsgAMGiftRevoked":
      return EMsg.k_EMsgAMGiftRevoked;
    case 4110:
    case "k_EMsgAMUserClanList":
      return EMsg.k_EMsgAMUserClanList;
    case 4111:
    case "k_EMsgAMUserClanListResponse":
      return EMsg.k_EMsgAMUserClanListResponse;
    case 4112:
    case "k_EMsgAMGetAccountDetails2":
      return EMsg.k_EMsgAMGetAccountDetails2;
    case 4113:
    case "k_EMsgAMGetAccountDetailsResponse2":
      return EMsg.k_EMsgAMGetAccountDetailsResponse2;
    case 4114:
    case "k_EMsgAMSetCommunityProfileSettings":
      return EMsg.k_EMsgAMSetCommunityProfileSettings;
    case 4115:
    case "k_EMsgAMSetCommunityProfileSettingsResponse":
      return EMsg.k_EMsgAMSetCommunityProfileSettingsResponse;
    case 4116:
    case "k_EMsgAMGetCommunityPrivacyState":
      return EMsg.k_EMsgAMGetCommunityPrivacyState;
    case 4117:
    case "k_EMsgAMGetCommunityPrivacyStateResponse":
      return EMsg.k_EMsgAMGetCommunityPrivacyStateResponse;
    case 4118:
    case "k_EMsgAMCheckClanInviteRateLimiting":
      return EMsg.k_EMsgAMCheckClanInviteRateLimiting;
    case 4119:
    case "k_EMsgUGSGetUserAchievementStatus":
      return EMsg.k_EMsgUGSGetUserAchievementStatus;
    case 4120:
    case "k_EMsgAMGetIgnored":
      return EMsg.k_EMsgAMGetIgnored;
    case 4121:
    case "k_EMsgAMGetIgnoredResponse":
      return EMsg.k_EMsgAMGetIgnoredResponse;
    case 4122:
    case "k_EMsgAMSetIgnoredResponse":
      return EMsg.k_EMsgAMSetIgnoredResponse;
    case 4123:
    case "k_EMsgAMSetFriendRelationshipNone":
      return EMsg.k_EMsgAMSetFriendRelationshipNone;
    case 4124:
    case "k_EMsgAMGetFriendRelationship":
      return EMsg.k_EMsgAMGetFriendRelationship;
    case 4125:
    case "k_EMsgAMGetFriendRelationshipResponse":
      return EMsg.k_EMsgAMGetFriendRelationshipResponse;
    case 4126:
    case "k_EMsgAMServiceModulesCache":
      return EMsg.k_EMsgAMServiceModulesCache;
    case 4127:
    case "k_EMsgAMServiceModulesCall":
      return EMsg.k_EMsgAMServiceModulesCall;
    case 4128:
    case "k_EMsgAMServiceModulesCallResponse":
      return EMsg.k_EMsgAMServiceModulesCallResponse;
    case 4140:
    case "k_EMsgCommunityAddFriendNews":
      return EMsg.k_EMsgCommunityAddFriendNews;
    case 4143:
    case "k_EMsgAMFindClanUser":
      return EMsg.k_EMsgAMFindClanUser;
    case 4144:
    case "k_EMsgAMFindClanUserResponse":
      return EMsg.k_EMsgAMFindClanUserResponse;
    case 4145:
    case "k_EMsgAMBanFromChat":
      return EMsg.k_EMsgAMBanFromChat;
    case 4147:
    case "k_EMsgAMGetUserNewsSubscriptions":
      return EMsg.k_EMsgAMGetUserNewsSubscriptions;
    case 4148:
    case "k_EMsgAMGetUserNewsSubscriptionsResponse":
      return EMsg.k_EMsgAMGetUserNewsSubscriptionsResponse;
    case 4149:
    case "k_EMsgAMSetUserNewsSubscriptions":
      return EMsg.k_EMsgAMSetUserNewsSubscriptions;
    case 4152:
    case "k_EMsgAMSendQueuedEmails":
      return EMsg.k_EMsgAMSendQueuedEmails;
    case 4153:
    case "k_EMsgAMSetLicenseFlags":
      return EMsg.k_EMsgAMSetLicenseFlags;
    case 4155:
    case "k_EMsgCommunityDeleteUserNews":
      return EMsg.k_EMsgCommunityDeleteUserNews;
    case 4158:
    case "k_EMsgAMGetAccountStatus":
      return EMsg.k_EMsgAMGetAccountStatus;
    case 4159:
    case "k_EMsgAMGetAccountStatusResponse":
      return EMsg.k_EMsgAMGetAccountStatusResponse;
    case 4160:
    case "k_EMsgAMEditBanReason":
      return EMsg.k_EMsgAMEditBanReason;
    case 4161:
    case "k_EMsgAMCheckClanMembershipResponse":
      return EMsg.k_EMsgAMCheckClanMembershipResponse;
    case 4162:
    case "k_EMsgAMProbeClanMembershipList":
      return EMsg.k_EMsgAMProbeClanMembershipList;
    case 4163:
    case "k_EMsgAMProbeClanMembershipListResponse":
      return EMsg.k_EMsgAMProbeClanMembershipListResponse;
    case 4164:
    case "k_EMsgUGSGetUserAchievementStatusResponse":
      return EMsg.k_EMsgUGSGetUserAchievementStatusResponse;
    case 4165:
    case "k_EMsgAMGetFriendsLobbies":
      return EMsg.k_EMsgAMGetFriendsLobbies;
    case 4166:
    case "k_EMsgAMGetFriendsLobbiesResponse":
      return EMsg.k_EMsgAMGetFriendsLobbiesResponse;
    case 4172:
    case "k_EMsgAMGetUserFriendNewsResponse":
      return EMsg.k_EMsgAMGetUserFriendNewsResponse;
    case 4173:
    case "k_EMsgCommunityGetUserFriendNews":
      return EMsg.k_EMsgCommunityGetUserFriendNews;
    case 4174:
    case "k_EMsgAMGetUserClansNewsResponse":
      return EMsg.k_EMsgAMGetUserClansNewsResponse;
    case 4175:
    case "k_EMsgAMGetUserClansNews":
      return EMsg.k_EMsgAMGetUserClansNews;
    case 4184:
    case "k_EMsgAMGetPreviousCBAccount":
      return EMsg.k_EMsgAMGetPreviousCBAccount;
    case 4185:
    case "k_EMsgAMGetPreviousCBAccountResponse":
      return EMsg.k_EMsgAMGetPreviousCBAccountResponse;
    case 4190:
    case "k_EMsgAMGetUserLicenseHistory":
      return EMsg.k_EMsgAMGetUserLicenseHistory;
    case 4191:
    case "k_EMsgAMGetUserLicenseHistoryResponse":
      return EMsg.k_EMsgAMGetUserLicenseHistoryResponse;
    case 4194:
    case "k_EMsgAMSupportChangePassword":
      return EMsg.k_EMsgAMSupportChangePassword;
    case 4195:
    case "k_EMsgAMSupportChangeEmail":
      return EMsg.k_EMsgAMSupportChangeEmail;
    case 4197:
    case "k_EMsgAMResetUserVerificationGSByIP":
      return EMsg.k_EMsgAMResetUserVerificationGSByIP;
    case 4198:
    case "k_EMsgAMUpdateGSPlayStats":
      return EMsg.k_EMsgAMUpdateGSPlayStats;
    case 4199:
    case "k_EMsgAMSupportEnableOrDisable":
      return EMsg.k_EMsgAMSupportEnableOrDisable;
    case 4206:
    case "k_EMsgAMGetPurchaseStatus":
      return EMsg.k_EMsgAMGetPurchaseStatus;
    case 4209:
    case "k_EMsgAMSupportIsAccountEnabled":
      return EMsg.k_EMsgAMSupportIsAccountEnabled;
    case 4210:
    case "k_EMsgAMSupportIsAccountEnabledResponse":
      return EMsg.k_EMsgAMSupportIsAccountEnabledResponse;
    case 4211:
    case "k_EMsgUGSGetUserStats":
      return EMsg.k_EMsgUGSGetUserStats;
    case 4213:
    case "k_EMsgAMGSSearch":
      return EMsg.k_EMsgAMGSSearch;
    case 4219:
    case "k_EMsgChatServerRouteFriendMsg":
      return EMsg.k_EMsgChatServerRouteFriendMsg;
    case 4220:
    case "k_EMsgAMTicketAuthRequestOrResponse":
      return EMsg.k_EMsgAMTicketAuthRequestOrResponse;
    case 4224:
    case "k_EMsgAMAddFreeLicense":
      return EMsg.k_EMsgAMAddFreeLicense;
    case 4231:
    case "k_EMsgAMValidateEmailLink":
      return EMsg.k_EMsgAMValidateEmailLink;
    case 4232:
    case "k_EMsgAMValidateEmailLinkResponse":
      return EMsg.k_EMsgAMValidateEmailLinkResponse;
    case 4236:
    case "k_EMsgUGSStoreUserStats":
      return EMsg.k_EMsgUGSStoreUserStats;
    case 4241:
    case "k_EMsgAMDeleteStoredCard":
      return EMsg.k_EMsgAMDeleteStoredCard;
    case 4242:
    case "k_EMsgAMRevokeLegacyGameKeys":
      return EMsg.k_EMsgAMRevokeLegacyGameKeys;
    case 4244:
    case "k_EMsgAMGetWalletDetails":
      return EMsg.k_EMsgAMGetWalletDetails;
    case 4245:
    case "k_EMsgAMGetWalletDetailsResponse":
      return EMsg.k_EMsgAMGetWalletDetailsResponse;
    case 4246:
    case "k_EMsgAMDeleteStoredPaymentInfo":
      return EMsg.k_EMsgAMDeleteStoredPaymentInfo;
    case 4247:
    case "k_EMsgAMGetStoredPaymentSummary":
      return EMsg.k_EMsgAMGetStoredPaymentSummary;
    case 4248:
    case "k_EMsgAMGetStoredPaymentSummaryResponse":
      return EMsg.k_EMsgAMGetStoredPaymentSummaryResponse;
    case 4249:
    case "k_EMsgAMGetWalletConversionRate":
      return EMsg.k_EMsgAMGetWalletConversionRate;
    case 4250:
    case "k_EMsgAMGetWalletConversionRateResponse":
      return EMsg.k_EMsgAMGetWalletConversionRateResponse;
    case 4251:
    case "k_EMsgAMConvertWallet":
      return EMsg.k_EMsgAMConvertWallet;
    case 4252:
    case "k_EMsgAMConvertWalletResponse":
      return EMsg.k_EMsgAMConvertWalletResponse;
    case 4255:
    case "k_EMsgAMSetPreApproval":
      return EMsg.k_EMsgAMSetPreApproval;
    case 4256:
    case "k_EMsgAMSetPreApprovalResponse":
      return EMsg.k_EMsgAMSetPreApprovalResponse;
    case 4258:
    case "k_EMsgAMCreateRefund":
      return EMsg.k_EMsgAMCreateRefund;
    case 4260:
    case "k_EMsgAMCreateChargeback":
      return EMsg.k_EMsgAMCreateChargeback;
    case 4262:
    case "k_EMsgAMCreateDispute":
      return EMsg.k_EMsgAMCreateDispute;
    case 4264:
    case "k_EMsgAMClearDispute":
      return EMsg.k_EMsgAMClearDispute;
    case 4265:
    case "k_EMsgAMCreateFinancialAdjustment":
      return EMsg.k_EMsgAMCreateFinancialAdjustment;
    case 4266:
    case "k_EMsgAMPlayerNicknameList":
      return EMsg.k_EMsgAMPlayerNicknameList;
    case 4267:
    case "k_EMsgAMPlayerNicknameListResponse":
      return EMsg.k_EMsgAMPlayerNicknameListResponse;
    case 4269:
    case "k_EMsgAMGetUserCurrentGameInfo":
      return EMsg.k_EMsgAMGetUserCurrentGameInfo;
    case 4270:
    case "k_EMsgAMGetUserCurrentGameInfoResponse":
      return EMsg.k_EMsgAMGetUserCurrentGameInfoResponse;
    case 4271:
    case "k_EMsgAMGetGSPlayerList":
      return EMsg.k_EMsgAMGetGSPlayerList;
    case 4272:
    case "k_EMsgAMGetGSPlayerListResponse":
      return EMsg.k_EMsgAMGetGSPlayerListResponse;
    case 4278:
    case "k_EMsgAMGetSteamIDForMicroTxn":
      return EMsg.k_EMsgAMGetSteamIDForMicroTxn;
    case 4279:
    case "k_EMsgAMGetSteamIDForMicroTxnResponse":
      return EMsg.k_EMsgAMGetSteamIDForMicroTxnResponse;
    case 4280:
    case "k_EMsgAMSetPartnerMember":
      return EMsg.k_EMsgAMSetPartnerMember;
    case 4281:
    case "k_EMsgAMRemovePublisherUser":
      return EMsg.k_EMsgAMRemovePublisherUser;
    case 4282:
    case "k_EMsgAMGetUserLicenseList":
      return EMsg.k_EMsgAMGetUserLicenseList;
    case 4283:
    case "k_EMsgAMGetUserLicenseListResponse":
      return EMsg.k_EMsgAMGetUserLicenseListResponse;
    case 4284:
    case "k_EMsgAMReloadGameGroupPolicy":
      return EMsg.k_EMsgAMReloadGameGroupPolicy;
    case 4285:
    case "k_EMsgAMAddFreeLicenseResponse":
      return EMsg.k_EMsgAMAddFreeLicenseResponse;
    case 4286:
    case "k_EMsgAMVACStatusUpdate":
      return EMsg.k_EMsgAMVACStatusUpdate;
    case 4287:
    case "k_EMsgAMGetAccountDetails":
      return EMsg.k_EMsgAMGetAccountDetails;
    case 4288:
    case "k_EMsgAMGetAccountDetailsResponse":
      return EMsg.k_EMsgAMGetAccountDetailsResponse;
    case 4289:
    case "k_EMsgAMGetPlayerLinkDetails":
      return EMsg.k_EMsgAMGetPlayerLinkDetails;
    case 4290:
    case "k_EMsgAMGetPlayerLinkDetailsResponse":
      return EMsg.k_EMsgAMGetPlayerLinkDetailsResponse;
    case 4294:
    case "k_EMsgAMGetAccountFlagsForWGSpoofing":
      return EMsg.k_EMsgAMGetAccountFlagsForWGSpoofing;
    case 4295:
    case "k_EMsgAMGetAccountFlagsForWGSpoofingResponse":
      return EMsg.k_EMsgAMGetAccountFlagsForWGSpoofingResponse;
    case 4298:
    case "k_EMsgAMGetClanOfficers":
      return EMsg.k_EMsgAMGetClanOfficers;
    case 4299:
    case "k_EMsgAMGetClanOfficersResponse":
      return EMsg.k_EMsgAMGetClanOfficersResponse;
    case 4300:
    case "k_EMsgAMNameChange":
      return EMsg.k_EMsgAMNameChange;
    case 4301:
    case "k_EMsgAMGetNameHistory":
      return EMsg.k_EMsgAMGetNameHistory;
    case 4302:
    case "k_EMsgAMGetNameHistoryResponse":
      return EMsg.k_EMsgAMGetNameHistoryResponse;
    case 4305:
    case "k_EMsgAMUpdateProviderStatus":
      return EMsg.k_EMsgAMUpdateProviderStatus;
    case 4307:
    case "k_EMsgAMSupportRemoveAccountSecurity":
      return EMsg.k_EMsgAMSupportRemoveAccountSecurity;
    case 4308:
    case "k_EMsgAMIsAccountInCaptchaGracePeriod":
      return EMsg.k_EMsgAMIsAccountInCaptchaGracePeriod;
    case 4309:
    case "k_EMsgAMIsAccountInCaptchaGracePeriodResponse":
      return EMsg.k_EMsgAMIsAccountInCaptchaGracePeriodResponse;
    case 4310:
    case "k_EMsgAMAccountPS3Unlink":
      return EMsg.k_EMsgAMAccountPS3Unlink;
    case 4311:
    case "k_EMsgAMAccountPS3UnlinkResponse":
      return EMsg.k_EMsgAMAccountPS3UnlinkResponse;
    case 4312:
    case "k_EMsgUGSStoreUserStatsResponse":
      return EMsg.k_EMsgUGSStoreUserStatsResponse;
    case 4313:
    case "k_EMsgAMGetAccountPSNInfo":
      return EMsg.k_EMsgAMGetAccountPSNInfo;
    case 4314:
    case "k_EMsgAMGetAccountPSNInfoResponse":
      return EMsg.k_EMsgAMGetAccountPSNInfoResponse;
    case 4315:
    case "k_EMsgAMAuthenticatedPlayerList":
      return EMsg.k_EMsgAMAuthenticatedPlayerList;
    case 4316:
    case "k_EMsgAMGetUserGifts":
      return EMsg.k_EMsgAMGetUserGifts;
    case 4317:
    case "k_EMsgAMGetUserGiftsResponse":
      return EMsg.k_EMsgAMGetUserGiftsResponse;
    case 4320:
    case "k_EMsgAMTransferLockedGifts":
      return EMsg.k_EMsgAMTransferLockedGifts;
    case 4321:
    case "k_EMsgAMTransferLockedGiftsResponse":
      return EMsg.k_EMsgAMTransferLockedGiftsResponse;
    case 4322:
    case "k_EMsgAMPlayerHostedOnGameServer":
      return EMsg.k_EMsgAMPlayerHostedOnGameServer;
    case 4323:
    case "k_EMsgAMGetAccountBanInfo":
      return EMsg.k_EMsgAMGetAccountBanInfo;
    case 4324:
    case "k_EMsgAMGetAccountBanInfoResponse":
      return EMsg.k_EMsgAMGetAccountBanInfoResponse;
    case 4325:
    case "k_EMsgAMRecordBanEnforcement":
      return EMsg.k_EMsgAMRecordBanEnforcement;
    case 4326:
    case "k_EMsgAMRollbackGiftTransfer":
      return EMsg.k_EMsgAMRollbackGiftTransfer;
    case 4327:
    case "k_EMsgAMRollbackGiftTransferResponse":
      return EMsg.k_EMsgAMRollbackGiftTransferResponse;
    case 4328:
    case "k_EMsgAMHandlePendingTransaction":
      return EMsg.k_EMsgAMHandlePendingTransaction;
    case 4329:
    case "k_EMsgAMRequestClanDetails":
      return EMsg.k_EMsgAMRequestClanDetails;
    case 4330:
    case "k_EMsgAMDeleteStoredPaypalAgreement":
      return EMsg.k_EMsgAMDeleteStoredPaypalAgreement;
    case 4331:
    case "k_EMsgAMGameServerUpdate":
      return EMsg.k_EMsgAMGameServerUpdate;
    case 4332:
    case "k_EMsgAMGameServerRemove":
      return EMsg.k_EMsgAMGameServerRemove;
    case 4333:
    case "k_EMsgAMGetPaypalAgreements":
      return EMsg.k_EMsgAMGetPaypalAgreements;
    case 4334:
    case "k_EMsgAMGetPaypalAgreementsResponse":
      return EMsg.k_EMsgAMGetPaypalAgreementsResponse;
    case 4335:
    case "k_EMsgAMGameServerPlayerCompatibilityCheck":
      return EMsg.k_EMsgAMGameServerPlayerCompatibilityCheck;
    case 4336:
    case "k_EMsgAMGameServerPlayerCompatibilityCheckResponse":
      return EMsg.k_EMsgAMGameServerPlayerCompatibilityCheckResponse;
    case 4337:
    case "k_EMsgAMRenewLicense":
      return EMsg.k_EMsgAMRenewLicense;
    case 4338:
    case "k_EMsgAMGetAccountCommunityBanInfo":
      return EMsg.k_EMsgAMGetAccountCommunityBanInfo;
    case 4339:
    case "k_EMsgAMGetAccountCommunityBanInfoResponse":
      return EMsg.k_EMsgAMGetAccountCommunityBanInfoResponse;
    case 4340:
    case "k_EMsgAMGameServerAccountChangePassword":
      return EMsg.k_EMsgAMGameServerAccountChangePassword;
    case 4341:
    case "k_EMsgAMGameServerAccountDeleteAccount":
      return EMsg.k_EMsgAMGameServerAccountDeleteAccount;
    case 4342:
    case "k_EMsgAMRenewAgreement":
      return EMsg.k_EMsgAMRenewAgreement;
    case 4344:
    case "k_EMsgAMXsollaPayment":
      return EMsg.k_EMsgAMXsollaPayment;
    case 4345:
    case "k_EMsgAMXsollaPaymentResponse":
      return EMsg.k_EMsgAMXsollaPaymentResponse;
    case 4346:
    case "k_EMsgAMAcctAllowedToPurchase":
      return EMsg.k_EMsgAMAcctAllowedToPurchase;
    case 4347:
    case "k_EMsgAMAcctAllowedToPurchaseResponse":
      return EMsg.k_EMsgAMAcctAllowedToPurchaseResponse;
    case 4348:
    case "k_EMsgAMSwapKioskDeposit":
      return EMsg.k_EMsgAMSwapKioskDeposit;
    case 4349:
    case "k_EMsgAMSwapKioskDepositResponse":
      return EMsg.k_EMsgAMSwapKioskDepositResponse;
    case 4350:
    case "k_EMsgAMSetUserGiftUnowned":
      return EMsg.k_EMsgAMSetUserGiftUnowned;
    case 4351:
    case "k_EMsgAMSetUserGiftUnownedResponse":
      return EMsg.k_EMsgAMSetUserGiftUnownedResponse;
    case 4352:
    case "k_EMsgAMClaimUnownedUserGift":
      return EMsg.k_EMsgAMClaimUnownedUserGift;
    case 4353:
    case "k_EMsgAMClaimUnownedUserGiftResponse":
      return EMsg.k_EMsgAMClaimUnownedUserGiftResponse;
    case 4354:
    case "k_EMsgAMSetClanName":
      return EMsg.k_EMsgAMSetClanName;
    case 4355:
    case "k_EMsgAMSetClanNameResponse":
      return EMsg.k_EMsgAMSetClanNameResponse;
    case 4356:
    case "k_EMsgAMGrantCoupon":
      return EMsg.k_EMsgAMGrantCoupon;
    case 4357:
    case "k_EMsgAMGrantCouponResponse":
      return EMsg.k_EMsgAMGrantCouponResponse;
    case 4358:
    case "k_EMsgAMIsPackageRestrictedInUserCountry":
      return EMsg.k_EMsgAMIsPackageRestrictedInUserCountry;
    case 4359:
    case "k_EMsgAMIsPackageRestrictedInUserCountryResponse":
      return EMsg.k_EMsgAMIsPackageRestrictedInUserCountryResponse;
    case 4360:
    case "k_EMsgAMHandlePendingTransactionResponse":
      return EMsg.k_EMsgAMHandlePendingTransactionResponse;
    case 4361:
    case "k_EMsgAMGrantGuestPasses2":
      return EMsg.k_EMsgAMGrantGuestPasses2;
    case 4362:
    case "k_EMsgAMGrantGuestPasses2Response":
      return EMsg.k_EMsgAMGrantGuestPasses2Response;
    case 4365:
    case "k_EMsgAMGetPlayerBanDetails":
      return EMsg.k_EMsgAMGetPlayerBanDetails;
    case 4366:
    case "k_EMsgAMGetPlayerBanDetailsResponse":
      return EMsg.k_EMsgAMGetPlayerBanDetailsResponse;
    case 4367:
    case "k_EMsgAMFinalizePurchase":
      return EMsg.k_EMsgAMFinalizePurchase;
    case 4368:
    case "k_EMsgAMFinalizePurchaseResponse":
      return EMsg.k_EMsgAMFinalizePurchaseResponse;
    case 4372:
    case "k_EMsgAMPersonaChangeResponse":
      return EMsg.k_EMsgAMPersonaChangeResponse;
    case 4373:
    case "k_EMsgAMGetClanDetailsForForumCreation":
      return EMsg.k_EMsgAMGetClanDetailsForForumCreation;
    case 4374:
    case "k_EMsgAMGetClanDetailsForForumCreationResponse":
      return EMsg.k_EMsgAMGetClanDetailsForForumCreationResponse;
    case 4375:
    case "k_EMsgAMGetPendingNotificationCount":
      return EMsg.k_EMsgAMGetPendingNotificationCount;
    case 4376:
    case "k_EMsgAMGetPendingNotificationCountResponse":
      return EMsg.k_EMsgAMGetPendingNotificationCountResponse;
    case 4377:
    case "k_EMsgAMPasswordHashUpgrade":
      return EMsg.k_EMsgAMPasswordHashUpgrade;
    case 4380:
    case "k_EMsgAMBoaCompraPayment":
      return EMsg.k_EMsgAMBoaCompraPayment;
    case 4381:
    case "k_EMsgAMBoaCompraPaymentResponse":
      return EMsg.k_EMsgAMBoaCompraPaymentResponse;
    case 4383:
    case "k_EMsgAMCompleteExternalPurchase":
      return EMsg.k_EMsgAMCompleteExternalPurchase;
    case 4384:
    case "k_EMsgAMCompleteExternalPurchaseResponse":
      return EMsg.k_EMsgAMCompleteExternalPurchaseResponse;
    case 4385:
    case "k_EMsgAMResolveNegativeWalletCredits":
      return EMsg.k_EMsgAMResolveNegativeWalletCredits;
    case 4386:
    case "k_EMsgAMResolveNegativeWalletCreditsResponse":
      return EMsg.k_EMsgAMResolveNegativeWalletCreditsResponse;
    case 4389:
    case "k_EMsgAMPlayerGetClanBasicDetails":
      return EMsg.k_EMsgAMPlayerGetClanBasicDetails;
    case 4390:
    case "k_EMsgAMPlayerGetClanBasicDetailsResponse":
      return EMsg.k_EMsgAMPlayerGetClanBasicDetailsResponse;
    case 4391:
    case "k_EMsgAMMOLPayment":
      return EMsg.k_EMsgAMMOLPayment;
    case 4392:
    case "k_EMsgAMMOLPaymentResponse":
      return EMsg.k_EMsgAMMOLPaymentResponse;
    case 4393:
    case "k_EMsgGetUserIPCountry":
      return EMsg.k_EMsgGetUserIPCountry;
    case 4394:
    case "k_EMsgGetUserIPCountryResponse":
      return EMsg.k_EMsgGetUserIPCountryResponse;
    case 4395:
    case "k_EMsgNotificationOfSuspiciousActivity":
      return EMsg.k_EMsgNotificationOfSuspiciousActivity;
    case 4396:
    case "k_EMsgAMDegicaPayment":
      return EMsg.k_EMsgAMDegicaPayment;
    case 4397:
    case "k_EMsgAMDegicaPaymentResponse":
      return EMsg.k_EMsgAMDegicaPaymentResponse;
    case 4398:
    case "k_EMsgAMEClubPayment":
      return EMsg.k_EMsgAMEClubPayment;
    case 4399:
    case "k_EMsgAMEClubPaymentResponse":
      return EMsg.k_EMsgAMEClubPaymentResponse;
    case 4400:
    case "k_EMsgAMPayPalPaymentsHubPayment":
      return EMsg.k_EMsgAMPayPalPaymentsHubPayment;
    case 4401:
    case "k_EMsgAMPayPalPaymentsHubPaymentResponse":
      return EMsg.k_EMsgAMPayPalPaymentsHubPaymentResponse;
    case 4402:
    case "k_EMsgAMTwoFactorRecoverAuthenticatorRequest":
      return EMsg.k_EMsgAMTwoFactorRecoverAuthenticatorRequest;
    case 4403:
    case "k_EMsgAMTwoFactorRecoverAuthenticatorResponse":
      return EMsg.k_EMsgAMTwoFactorRecoverAuthenticatorResponse;
    case 4404:
    case "k_EMsgAMSmart2PayPayment":
      return EMsg.k_EMsgAMSmart2PayPayment;
    case 4405:
    case "k_EMsgAMSmart2PayPaymentResponse":
      return EMsg.k_EMsgAMSmart2PayPaymentResponse;
    case 4406:
    case "k_EMsgAMValidatePasswordResetCodeAndSendSmsRequest":
      return EMsg.k_EMsgAMValidatePasswordResetCodeAndSendSmsRequest;
    case 4407:
    case "k_EMsgAMValidatePasswordResetCodeAndSendSmsResponse":
      return EMsg.k_EMsgAMValidatePasswordResetCodeAndSendSmsResponse;
    case 4408:
    case "k_EMsgAMGetAccountResetDetailsRequest":
      return EMsg.k_EMsgAMGetAccountResetDetailsRequest;
    case 4409:
    case "k_EMsgAMGetAccountResetDetailsResponse":
      return EMsg.k_EMsgAMGetAccountResetDetailsResponse;
    case 4410:
    case "k_EMsgAMBitPayPayment":
      return EMsg.k_EMsgAMBitPayPayment;
    case 4411:
    case "k_EMsgAMBitPayPaymentResponse":
      return EMsg.k_EMsgAMBitPayPaymentResponse;
    case 4412:
    case "k_EMsgAMSendAccountInfoUpdate":
      return EMsg.k_EMsgAMSendAccountInfoUpdate;
    case 4413:
    case "k_EMsgAMSendScheduledGift":
      return EMsg.k_EMsgAMSendScheduledGift;
    case 4414:
    case "k_EMsgAMNodwinPayment":
      return EMsg.k_EMsgAMNodwinPayment;
    case 4415:
    case "k_EMsgAMNodwinPaymentResponse":
      return EMsg.k_EMsgAMNodwinPaymentResponse;
    case 4416:
    case "k_EMsgAMResolveWalletRevoke":
      return EMsg.k_EMsgAMResolveWalletRevoke;
    case 4417:
    case "k_EMsgAMResolveWalletReverseRevoke":
      return EMsg.k_EMsgAMResolveWalletReverseRevoke;
    case 4418:
    case "k_EMsgAMFundedPayment":
      return EMsg.k_EMsgAMFundedPayment;
    case 4419:
    case "k_EMsgAMFundedPaymentResponse":
      return EMsg.k_EMsgAMFundedPaymentResponse;
    case 4420:
    case "k_EMsgAMRequestPersonaUpdateForChatServer":
      return EMsg.k_EMsgAMRequestPersonaUpdateForChatServer;
    case 4421:
    case "k_EMsgAMPerfectWorldPayment":
      return EMsg.k_EMsgAMPerfectWorldPayment;
    case 4422:
    case "k_EMsgAMPerfectWorldPaymentResponse":
      return EMsg.k_EMsgAMPerfectWorldPaymentResponse;
    case 4423:
    case "k_EMsgAMECommPayPayment":
      return EMsg.k_EMsgAMECommPayPayment;
    case 4424:
    case "k_EMsgAMECommPayPaymentResponse":
      return EMsg.k_EMsgAMECommPayPaymentResponse;
    case 4425:
    case "k_EMsgAMSetRemoteClientID":
      return EMsg.k_EMsgAMSetRemoteClientID;
    case 5000:
    case "k_EMsgBasePSRange":
      return EMsg.k_EMsgBasePSRange;
    case 5001:
    case "k_EMsgPSCreateShoppingCart":
      return EMsg.k_EMsgPSCreateShoppingCart;
    case 5002:
    case "k_EMsgPSCreateShoppingCartResponse":
      return EMsg.k_EMsgPSCreateShoppingCartResponse;
    case 5003:
    case "k_EMsgPSIsValidShoppingCart":
      return EMsg.k_EMsgPSIsValidShoppingCart;
    case 5004:
    case "k_EMsgPSIsValidShoppingCartResponse":
      return EMsg.k_EMsgPSIsValidShoppingCartResponse;
    case 5007:
    case "k_EMsgPSRemoveLineItemFromShoppingCart":
      return EMsg.k_EMsgPSRemoveLineItemFromShoppingCart;
    case 5008:
    case "k_EMsgPSRemoveLineItemFromShoppingCartResponse":
      return EMsg.k_EMsgPSRemoveLineItemFromShoppingCartResponse;
    case 5009:
    case "k_EMsgPSGetShoppingCartContents":
      return EMsg.k_EMsgPSGetShoppingCartContents;
    case 5010:
    case "k_EMsgPSGetShoppingCartContentsResponse":
      return EMsg.k_EMsgPSGetShoppingCartContentsResponse;
    case 5011:
    case "k_EMsgPSAddWalletCreditToShoppingCart":
      return EMsg.k_EMsgPSAddWalletCreditToShoppingCart;
    case 5012:
    case "k_EMsgPSAddWalletCreditToShoppingCartResponse":
      return EMsg.k_EMsgPSAddWalletCreditToShoppingCartResponse;
    case 5200:
    case "k_EMsgBaseUFSRange":
      return EMsg.k_EMsgBaseUFSRange;
    case 5202:
    case "k_EMsgClientUFSUploadFileRequest":
      return EMsg.k_EMsgClientUFSUploadFileRequest;
    case 5203:
    case "k_EMsgClientUFSUploadFileResponse":
      return EMsg.k_EMsgClientUFSUploadFileResponse;
    case 5204:
    case "k_EMsgClientUFSUploadFileChunk":
      return EMsg.k_EMsgClientUFSUploadFileChunk;
    case 5205:
    case "k_EMsgClientUFSUploadFileFinished":
      return EMsg.k_EMsgClientUFSUploadFileFinished;
    case 5206:
    case "k_EMsgClientUFSGetFileListForApp":
      return EMsg.k_EMsgClientUFSGetFileListForApp;
    case 5207:
    case "k_EMsgClientUFSGetFileListForAppResponse":
      return EMsg.k_EMsgClientUFSGetFileListForAppResponse;
    case 5210:
    case "k_EMsgClientUFSDownloadRequest":
      return EMsg.k_EMsgClientUFSDownloadRequest;
    case 5211:
    case "k_EMsgClientUFSDownloadResponse":
      return EMsg.k_EMsgClientUFSDownloadResponse;
    case 5212:
    case "k_EMsgClientUFSDownloadChunk":
      return EMsg.k_EMsgClientUFSDownloadChunk;
    case 5213:
    case "k_EMsgClientUFSLoginRequest":
      return EMsg.k_EMsgClientUFSLoginRequest;
    case 5214:
    case "k_EMsgClientUFSLoginResponse":
      return EMsg.k_EMsgClientUFSLoginResponse;
    case 5215:
    case "k_EMsgUFSReloadPartitionInfo":
      return EMsg.k_EMsgUFSReloadPartitionInfo;
    case 5216:
    case "k_EMsgClientUFSTransferHeartbeat":
      return EMsg.k_EMsgClientUFSTransferHeartbeat;
    case 5217:
    case "k_EMsgUFSSynchronizeFile":
      return EMsg.k_EMsgUFSSynchronizeFile;
    case 5218:
    case "k_EMsgUFSSynchronizeFileResponse":
      return EMsg.k_EMsgUFSSynchronizeFileResponse;
    case 5219:
    case "k_EMsgClientUFSDeleteFileRequest":
      return EMsg.k_EMsgClientUFSDeleteFileRequest;
    case 5220:
    case "k_EMsgClientUFSDeleteFileResponse":
      return EMsg.k_EMsgClientUFSDeleteFileResponse;
    case 5226:
    case "k_EMsgClientUFSGetUGCDetails":
      return EMsg.k_EMsgClientUFSGetUGCDetails;
    case 5227:
    case "k_EMsgClientUFSGetUGCDetailsResponse":
      return EMsg.k_EMsgClientUFSGetUGCDetailsResponse;
    case 5228:
    case "k_EMsgUFSUpdateFileFlags":
      return EMsg.k_EMsgUFSUpdateFileFlags;
    case 5229:
    case "k_EMsgUFSUpdateFileFlagsResponse":
      return EMsg.k_EMsgUFSUpdateFileFlagsResponse;
    case 5230:
    case "k_EMsgClientUFSGetSingleFileInfo":
      return EMsg.k_EMsgClientUFSGetSingleFileInfo;
    case 5231:
    case "k_EMsgClientUFSGetSingleFileInfoResponse":
      return EMsg.k_EMsgClientUFSGetSingleFileInfoResponse;
    case 5232:
    case "k_EMsgClientUFSShareFile":
      return EMsg.k_EMsgClientUFSShareFile;
    case 5233:
    case "k_EMsgClientUFSShareFileResponse":
      return EMsg.k_EMsgClientUFSShareFileResponse;
    case 5234:
    case "k_EMsgUFSReloadAccount":
      return EMsg.k_EMsgUFSReloadAccount;
    case 5235:
    case "k_EMsgUFSReloadAccountResponse":
      return EMsg.k_EMsgUFSReloadAccountResponse;
    case 5236:
    case "k_EMsgUFSUpdateRecordBatched":
      return EMsg.k_EMsgUFSUpdateRecordBatched;
    case 5237:
    case "k_EMsgUFSUpdateRecordBatchedResponse":
      return EMsg.k_EMsgUFSUpdateRecordBatchedResponse;
    case 5238:
    case "k_EMsgUFSMigrateFile":
      return EMsg.k_EMsgUFSMigrateFile;
    case 5239:
    case "k_EMsgUFSMigrateFileResponse":
      return EMsg.k_EMsgUFSMigrateFileResponse;
    case 5240:
    case "k_EMsgUFSGetUGCURLs":
      return EMsg.k_EMsgUFSGetUGCURLs;
    case 5241:
    case "k_EMsgUFSGetUGCURLsResponse":
      return EMsg.k_EMsgUFSGetUGCURLsResponse;
    case 5242:
    case "k_EMsgUFSHttpUploadFileFinishRequest":
      return EMsg.k_EMsgUFSHttpUploadFileFinishRequest;
    case 5243:
    case "k_EMsgUFSHttpUploadFileFinishResponse":
      return EMsg.k_EMsgUFSHttpUploadFileFinishResponse;
    case 5244:
    case "k_EMsgUFSDownloadStartRequest":
      return EMsg.k_EMsgUFSDownloadStartRequest;
    case 5245:
    case "k_EMsgUFSDownloadStartResponse":
      return EMsg.k_EMsgUFSDownloadStartResponse;
    case 5246:
    case "k_EMsgUFSDownloadChunkRequest":
      return EMsg.k_EMsgUFSDownloadChunkRequest;
    case 5247:
    case "k_EMsgUFSDownloadChunkResponse":
      return EMsg.k_EMsgUFSDownloadChunkResponse;
    case 5248:
    case "k_EMsgUFSDownloadFinishRequest":
      return EMsg.k_EMsgUFSDownloadFinishRequest;
    case 5249:
    case "k_EMsgUFSDownloadFinishResponse":
      return EMsg.k_EMsgUFSDownloadFinishResponse;
    case 5250:
    case "k_EMsgUFSFlushURLCache":
      return EMsg.k_EMsgUFSFlushURLCache;
    case 5251:
    case "k_EMsgClientUFSUploadCommit":
      return EMsg.k_EMsgClientUFSUploadCommit;
    case 5252:
    case "k_EMsgClientUFSUploadCommitResponse":
      return EMsg.k_EMsgClientUFSUploadCommitResponse;
    case 5253:
    case "k_EMsgUFSMigrateFileAppID":
      return EMsg.k_EMsgUFSMigrateFileAppID;
    case 5254:
    case "k_EMsgUFSMigrateFileAppIDResponse":
      return EMsg.k_EMsgUFSMigrateFileAppIDResponse;
    case 5400:
    case "k_EMsgBaseClient2":
      return EMsg.k_EMsgBaseClient2;
    case 5401:
    case "k_EMsgClientRequestForgottenPasswordEmail":
      return EMsg.k_EMsgClientRequestForgottenPasswordEmail;
    case 5402:
    case "k_EMsgClientRequestForgottenPasswordEmailResponse":
      return EMsg.k_EMsgClientRequestForgottenPasswordEmailResponse;
    case 5403:
    case "k_EMsgClientCreateAccountResponse":
      return EMsg.k_EMsgClientCreateAccountResponse;
    case 5404:
    case "k_EMsgClientResetForgottenPassword":
      return EMsg.k_EMsgClientResetForgottenPassword;
    case 5405:
    case "k_EMsgClientResetForgottenPasswordResponse":
      return EMsg.k_EMsgClientResetForgottenPasswordResponse;
    case 5407:
    case "k_EMsgClientInformOfResetForgottenPassword":
      return EMsg.k_EMsgClientInformOfResetForgottenPassword;
    case 5408:
    case "k_EMsgClientInformOfResetForgottenPasswordResponse":
      return EMsg.k_EMsgClientInformOfResetForgottenPasswordResponse;
    case 5409:
    case "k_EMsgClientAnonUserLogOn_Deprecated":
      return EMsg.k_EMsgClientAnonUserLogOn_Deprecated;
    case 5410:
    case "k_EMsgClientGamesPlayedWithDataBlob":
      return EMsg.k_EMsgClientGamesPlayedWithDataBlob;
    case 5411:
    case "k_EMsgClientUpdateUserGameInfo":
      return EMsg.k_EMsgClientUpdateUserGameInfo;
    case 5412:
    case "k_EMsgClientFileToDownload":
      return EMsg.k_EMsgClientFileToDownload;
    case 5413:
    case "k_EMsgClientFileToDownloadResponse":
      return EMsg.k_EMsgClientFileToDownloadResponse;
    case 5414:
    case "k_EMsgClientLBSSetScore":
      return EMsg.k_EMsgClientLBSSetScore;
    case 5415:
    case "k_EMsgClientLBSSetScoreResponse":
      return EMsg.k_EMsgClientLBSSetScoreResponse;
    case 5416:
    case "k_EMsgClientLBSFindOrCreateLB":
      return EMsg.k_EMsgClientLBSFindOrCreateLB;
    case 5417:
    case "k_EMsgClientLBSFindOrCreateLBResponse":
      return EMsg.k_EMsgClientLBSFindOrCreateLBResponse;
    case 5418:
    case "k_EMsgClientLBSGetLBEntries":
      return EMsg.k_EMsgClientLBSGetLBEntries;
    case 5419:
    case "k_EMsgClientLBSGetLBEntriesResponse":
      return EMsg.k_EMsgClientLBSGetLBEntriesResponse;
    case 5426:
    case "k_EMsgClientChatDeclined":
      return EMsg.k_EMsgClientChatDeclined;
    case 5427:
    case "k_EMsgClientFriendMsgIncoming":
      return EMsg.k_EMsgClientFriendMsgIncoming;
    case 5428:
    case "k_EMsgClientAuthList_Deprecated":
      return EMsg.k_EMsgClientAuthList_Deprecated;
    case 5429:
    case "k_EMsgClientTicketAuthComplete":
      return EMsg.k_EMsgClientTicketAuthComplete;
    case 5430:
    case "k_EMsgClientIsLimitedAccount":
      return EMsg.k_EMsgClientIsLimitedAccount;
    case 5431:
    case "k_EMsgClientRequestAuthList":
      return EMsg.k_EMsgClientRequestAuthList;
    case 5432:
    case "k_EMsgClientAuthList":
      return EMsg.k_EMsgClientAuthList;
    case 5433:
    case "k_EMsgClientStat":
      return EMsg.k_EMsgClientStat;
    case 5434:
    case "k_EMsgClientP2PConnectionInfo":
      return EMsg.k_EMsgClientP2PConnectionInfo;
    case 5435:
    case "k_EMsgClientP2PConnectionFailInfo":
      return EMsg.k_EMsgClientP2PConnectionFailInfo;
    case 5438:
    case "k_EMsgClientGetDepotDecryptionKey":
      return EMsg.k_EMsgClientGetDepotDecryptionKey;
    case 5439:
    case "k_EMsgClientGetDepotDecryptionKeyResponse":
      return EMsg.k_EMsgClientGetDepotDecryptionKeyResponse;
    case 5443:
    case "k_EMsgClientEnableTestLicense":
      return EMsg.k_EMsgClientEnableTestLicense;
    case 5444:
    case "k_EMsgClientEnableTestLicenseResponse":
      return EMsg.k_EMsgClientEnableTestLicenseResponse;
    case 5445:
    case "k_EMsgClientDisableTestLicense":
      return EMsg.k_EMsgClientDisableTestLicense;
    case 5446:
    case "k_EMsgClientDisableTestLicenseResponse":
      return EMsg.k_EMsgClientDisableTestLicenseResponse;
    case 5448:
    case "k_EMsgClientRequestValidationMail":
      return EMsg.k_EMsgClientRequestValidationMail;
    case 5449:
    case "k_EMsgClientRequestValidationMailResponse":
      return EMsg.k_EMsgClientRequestValidationMailResponse;
    case 5450:
    case "k_EMsgClientCheckAppBetaPassword":
      return EMsg.k_EMsgClientCheckAppBetaPassword;
    case 5451:
    case "k_EMsgClientCheckAppBetaPasswordResponse":
      return EMsg.k_EMsgClientCheckAppBetaPasswordResponse;
    case 5452:
    case "k_EMsgClientToGC":
      return EMsg.k_EMsgClientToGC;
    case 5453:
    case "k_EMsgClientFromGC":
      return EMsg.k_EMsgClientFromGC;
    case 5456:
    case "k_EMsgClientEmailAddrInfo":
      return EMsg.k_EMsgClientEmailAddrInfo;
    case 5457:
    case "k_EMsgClientPasswordChange3":
      return EMsg.k_EMsgClientPasswordChange3;
    case 5458:
    case "k_EMsgClientEmailChange3":
      return EMsg.k_EMsgClientEmailChange3;
    case 5459:
    case "k_EMsgClientPersonalQAChange3":
      return EMsg.k_EMsgClientPersonalQAChange3;
    case 5460:
    case "k_EMsgClientResetForgottenPassword3":
      return EMsg.k_EMsgClientResetForgottenPassword3;
    case 5461:
    case "k_EMsgClientRequestForgottenPasswordEmail3":
      return EMsg.k_EMsgClientRequestForgottenPasswordEmail3;
    case 5463:
    case "k_EMsgClientNewLoginKey":
      return EMsg.k_EMsgClientNewLoginKey;
    case 5464:
    case "k_EMsgClientNewLoginKeyAccepted":
      return EMsg.k_EMsgClientNewLoginKeyAccepted;
    case 5465:
    case "k_EMsgClientLogOnWithHash_Deprecated":
      return EMsg.k_EMsgClientLogOnWithHash_Deprecated;
    case 5466:
    case "k_EMsgClientStoreUserStats2":
      return EMsg.k_EMsgClientStoreUserStats2;
    case 5467:
    case "k_EMsgClientStatsUpdated":
      return EMsg.k_EMsgClientStatsUpdated;
    case 5468:
    case "k_EMsgClientActivateOEMLicense":
      return EMsg.k_EMsgClientActivateOEMLicense;
    case 5469:
    case "k_EMsgClientRegisterOEMMachine":
      return EMsg.k_EMsgClientRegisterOEMMachine;
    case 5470:
    case "k_EMsgClientRegisterOEMMachineResponse":
      return EMsg.k_EMsgClientRegisterOEMMachineResponse;
    case 5480:
    case "k_EMsgClientRequestedClientStats":
      return EMsg.k_EMsgClientRequestedClientStats;
    case 5481:
    case "k_EMsgClientStat2Int32":
      return EMsg.k_EMsgClientStat2Int32;
    case 5482:
    case "k_EMsgClientStat2":
      return EMsg.k_EMsgClientStat2;
    case 5483:
    case "k_EMsgClientVerifyPassword":
      return EMsg.k_EMsgClientVerifyPassword;
    case 5484:
    case "k_EMsgClientVerifyPasswordResponse":
      return EMsg.k_EMsgClientVerifyPasswordResponse;
    case 5485:
    case "k_EMsgClientDRMDownloadRequest":
      return EMsg.k_EMsgClientDRMDownloadRequest;
    case 5486:
    case "k_EMsgClientDRMDownloadResponse":
      return EMsg.k_EMsgClientDRMDownloadResponse;
    case 5487:
    case "k_EMsgClientDRMFinalResult":
      return EMsg.k_EMsgClientDRMFinalResult;
    case 5488:
    case "k_EMsgClientGetFriendsWhoPlayGame":
      return EMsg.k_EMsgClientGetFriendsWhoPlayGame;
    case 5489:
    case "k_EMsgClientGetFriendsWhoPlayGameResponse":
      return EMsg.k_EMsgClientGetFriendsWhoPlayGameResponse;
    case 5490:
    case "k_EMsgClientOGSBeginSession":
      return EMsg.k_EMsgClientOGSBeginSession;
    case 5491:
    case "k_EMsgClientOGSBeginSessionResponse":
      return EMsg.k_EMsgClientOGSBeginSessionResponse;
    case 5492:
    case "k_EMsgClientOGSEndSession":
      return EMsg.k_EMsgClientOGSEndSession;
    case 5493:
    case "k_EMsgClientOGSEndSessionResponse":
      return EMsg.k_EMsgClientOGSEndSessionResponse;
    case 5494:
    case "k_EMsgClientOGSWriteRow":
      return EMsg.k_EMsgClientOGSWriteRow;
    case 5495:
    case "k_EMsgClientGetPeerContentInfo":
      return EMsg.k_EMsgClientGetPeerContentInfo;
    case 5496:
    case "k_EMsgClientGetPeerContentInfoResponse":
      return EMsg.k_EMsgClientGetPeerContentInfoResponse;
    case 5497:
    case "k_EMsgClientStartPeerContentServer":
      return EMsg.k_EMsgClientStartPeerContentServer;
    case 5498:
    case "k_EMsgClientStartPeerContentServerResponse":
      return EMsg.k_EMsgClientStartPeerContentServerResponse;
    case 5500:
    case "k_EMsgClientServerUnavailable":
      return EMsg.k_EMsgClientServerUnavailable;
    case 5501:
    case "k_EMsgClientServersAvailable":
      return EMsg.k_EMsgClientServersAvailable;
    case 5502:
    case "k_EMsgClientRegisterAuthTicketWithCM":
      return EMsg.k_EMsgClientRegisterAuthTicketWithCM;
    case 5503:
    case "k_EMsgClientGCMsgFailed":
      return EMsg.k_EMsgClientGCMsgFailed;
    case 5504:
    case "k_EMsgClientMicroTxnAuthRequest":
      return EMsg.k_EMsgClientMicroTxnAuthRequest;
    case 5505:
    case "k_EMsgClientMicroTxnAuthorize":
      return EMsg.k_EMsgClientMicroTxnAuthorize;
    case 5506:
    case "k_EMsgClientMicroTxnAuthorizeResponse":
      return EMsg.k_EMsgClientMicroTxnAuthorizeResponse;
    case 5508:
    case "k_EMsgClientGetMicroTxnInfo":
      return EMsg.k_EMsgClientGetMicroTxnInfo;
    case 5509:
    case "k_EMsgClientGetMicroTxnInfoResponse":
      return EMsg.k_EMsgClientGetMicroTxnInfoResponse;
    case 5511:
    case "k_EMsgClientDeregisterWithServer":
      return EMsg.k_EMsgClientDeregisterWithServer;
    case 5512:
    case "k_EMsgClientSubscribeToPersonaFeed":
      return EMsg.k_EMsgClientSubscribeToPersonaFeed;
    case 5514:
    case "k_EMsgClientLogon":
      return EMsg.k_EMsgClientLogon;
    case 5515:
    case "k_EMsgClientGetClientDetails":
      return EMsg.k_EMsgClientGetClientDetails;
    case 5516:
    case "k_EMsgClientGetClientDetailsResponse":
      return EMsg.k_EMsgClientGetClientDetailsResponse;
    case 5517:
    case "k_EMsgClientReportOverlayDetourFailure":
      return EMsg.k_EMsgClientReportOverlayDetourFailure;
    case 5518:
    case "k_EMsgClientGetClientAppList":
      return EMsg.k_EMsgClientGetClientAppList;
    case 5519:
    case "k_EMsgClientGetClientAppListResponse":
      return EMsg.k_EMsgClientGetClientAppListResponse;
    case 5520:
    case "k_EMsgClientInstallClientApp":
      return EMsg.k_EMsgClientInstallClientApp;
    case 5521:
    case "k_EMsgClientInstallClientAppResponse":
      return EMsg.k_EMsgClientInstallClientAppResponse;
    case 5522:
    case "k_EMsgClientUninstallClientApp":
      return EMsg.k_EMsgClientUninstallClientApp;
    case 5523:
    case "k_EMsgClientUninstallClientAppResponse":
      return EMsg.k_EMsgClientUninstallClientAppResponse;
    case 5524:
    case "k_EMsgClientSetClientAppUpdateState":
      return EMsg.k_EMsgClientSetClientAppUpdateState;
    case 5525:
    case "k_EMsgClientSetClientAppUpdateStateResponse":
      return EMsg.k_EMsgClientSetClientAppUpdateStateResponse;
    case 5526:
    case "k_EMsgClientRequestEncryptedAppTicket":
      return EMsg.k_EMsgClientRequestEncryptedAppTicket;
    case 5527:
    case "k_EMsgClientRequestEncryptedAppTicketResponse":
      return EMsg.k_EMsgClientRequestEncryptedAppTicketResponse;
    case 5528:
    case "k_EMsgClientWalletInfoUpdate":
      return EMsg.k_EMsgClientWalletInfoUpdate;
    case 5529:
    case "k_EMsgClientLBSSetUGC":
      return EMsg.k_EMsgClientLBSSetUGC;
    case 5530:
    case "k_EMsgClientLBSSetUGCResponse":
      return EMsg.k_EMsgClientLBSSetUGCResponse;
    case 5531:
    case "k_EMsgClientAMGetClanOfficers":
      return EMsg.k_EMsgClientAMGetClanOfficers;
    case 5532:
    case "k_EMsgClientAMGetClanOfficersResponse":
      return EMsg.k_EMsgClientAMGetClanOfficersResponse;
    case 5535:
    case "k_EMsgClientFriendProfileInfo":
      return EMsg.k_EMsgClientFriendProfileInfo;
    case 5536:
    case "k_EMsgClientFriendProfileInfoResponse":
      return EMsg.k_EMsgClientFriendProfileInfoResponse;
    case 5537:
    case "k_EMsgClientUpdateMachineAuth":
      return EMsg.k_EMsgClientUpdateMachineAuth;
    case 5538:
    case "k_EMsgClientUpdateMachineAuthResponse":
      return EMsg.k_EMsgClientUpdateMachineAuthResponse;
    case 5539:
    case "k_EMsgClientReadMachineAuth":
      return EMsg.k_EMsgClientReadMachineAuth;
    case 5540:
    case "k_EMsgClientReadMachineAuthResponse":
      return EMsg.k_EMsgClientReadMachineAuthResponse;
    case 5541:
    case "k_EMsgClientRequestMachineAuth":
      return EMsg.k_EMsgClientRequestMachineAuth;
    case 5542:
    case "k_EMsgClientRequestMachineAuthResponse":
      return EMsg.k_EMsgClientRequestMachineAuthResponse;
    case 5543:
    case "k_EMsgClientScreenshotsChanged":
      return EMsg.k_EMsgClientScreenshotsChanged;
    case 5546:
    case "k_EMsgClientGetCDNAuthToken":
      return EMsg.k_EMsgClientGetCDNAuthToken;
    case 5547:
    case "k_EMsgClientGetCDNAuthTokenResponse":
      return EMsg.k_EMsgClientGetCDNAuthTokenResponse;
    case 5548:
    case "k_EMsgClientDownloadRateStatistics":
      return EMsg.k_EMsgClientDownloadRateStatistics;
    case 5549:
    case "k_EMsgClientRequestAccountData":
      return EMsg.k_EMsgClientRequestAccountData;
    case 5550:
    case "k_EMsgClientRequestAccountDataResponse":
      return EMsg.k_EMsgClientRequestAccountDataResponse;
    case 5551:
    case "k_EMsgClientResetForgottenPassword4":
      return EMsg.k_EMsgClientResetForgottenPassword4;
    case 5552:
    case "k_EMsgClientHideFriend":
      return EMsg.k_EMsgClientHideFriend;
    case 5553:
    case "k_EMsgClientFriendsGroupsList":
      return EMsg.k_EMsgClientFriendsGroupsList;
    case 5554:
    case "k_EMsgClientGetClanActivityCounts":
      return EMsg.k_EMsgClientGetClanActivityCounts;
    case 5555:
    case "k_EMsgClientGetClanActivityCountsResponse":
      return EMsg.k_EMsgClientGetClanActivityCountsResponse;
    case 5556:
    case "k_EMsgClientOGSReportString":
      return EMsg.k_EMsgClientOGSReportString;
    case 5557:
    case "k_EMsgClientOGSReportBug":
      return EMsg.k_EMsgClientOGSReportBug;
    case 5558:
    case "k_EMsgClientSentLogs":
      return EMsg.k_EMsgClientSentLogs;
    case 5559:
    case "k_EMsgClientLogonGameServer":
      return EMsg.k_EMsgClientLogonGameServer;
    case 5560:
    case "k_EMsgAMClientCreateFriendsGroup":
      return EMsg.k_EMsgAMClientCreateFriendsGroup;
    case 5561:
    case "k_EMsgAMClientCreateFriendsGroupResponse":
      return EMsg.k_EMsgAMClientCreateFriendsGroupResponse;
    case 5562:
    case "k_EMsgAMClientDeleteFriendsGroup":
      return EMsg.k_EMsgAMClientDeleteFriendsGroup;
    case 5563:
    case "k_EMsgAMClientDeleteFriendsGroupResponse":
      return EMsg.k_EMsgAMClientDeleteFriendsGroupResponse;
    case 5564:
    case "k_EMsgAMClientManageFriendsGroup":
      return EMsg.k_EMsgAMClientManageFriendsGroup;
    case 5565:
    case "k_EMsgAMClientManageFriendsGroupResponse":
      return EMsg.k_EMsgAMClientManageFriendsGroupResponse;
    case 5566:
    case "k_EMsgAMClientAddFriendToGroup":
      return EMsg.k_EMsgAMClientAddFriendToGroup;
    case 5567:
    case "k_EMsgAMClientAddFriendToGroupResponse":
      return EMsg.k_EMsgAMClientAddFriendToGroupResponse;
    case 5568:
    case "k_EMsgAMClientRemoveFriendFromGroup":
      return EMsg.k_EMsgAMClientRemoveFriendFromGroup;
    case 5569:
    case "k_EMsgAMClientRemoveFriendFromGroupResponse":
      return EMsg.k_EMsgAMClientRemoveFriendFromGroupResponse;
    case 5570:
    case "k_EMsgClientAMGetPersonaNameHistory":
      return EMsg.k_EMsgClientAMGetPersonaNameHistory;
    case 5571:
    case "k_EMsgClientAMGetPersonaNameHistoryResponse":
      return EMsg.k_EMsgClientAMGetPersonaNameHistoryResponse;
    case 5572:
    case "k_EMsgClientRequestFreeLicense":
      return EMsg.k_EMsgClientRequestFreeLicense;
    case 5573:
    case "k_EMsgClientRequestFreeLicenseResponse":
      return EMsg.k_EMsgClientRequestFreeLicenseResponse;
    case 5574:
    case "k_EMsgClientDRMDownloadRequestWithCrashData":
      return EMsg.k_EMsgClientDRMDownloadRequestWithCrashData;
    case 5575:
    case "k_EMsgClientAuthListAck":
      return EMsg.k_EMsgClientAuthListAck;
    case 5576:
    case "k_EMsgClientItemAnnouncements":
      return EMsg.k_EMsgClientItemAnnouncements;
    case 5577:
    case "k_EMsgClientRequestItemAnnouncements":
      return EMsg.k_EMsgClientRequestItemAnnouncements;
    case 5578:
    case "k_EMsgClientFriendMsgEchoToSender":
      return EMsg.k_EMsgClientFriendMsgEchoToSender;
    case 5582:
    case "k_EMsgClientCommentNotifications":
      return EMsg.k_EMsgClientCommentNotifications;
    case 5583:
    case "k_EMsgClientRequestCommentNotifications":
      return EMsg.k_EMsgClientRequestCommentNotifications;
    case 5584:
    case "k_EMsgClientPersonaChangeResponse":
      return EMsg.k_EMsgClientPersonaChangeResponse;
    case 5585:
    case "k_EMsgClientRequestWebAPIAuthenticateUserNonce":
      return EMsg.k_EMsgClientRequestWebAPIAuthenticateUserNonce;
    case 5586:
    case "k_EMsgClientRequestWebAPIAuthenticateUserNonceResponse":
      return EMsg.k_EMsgClientRequestWebAPIAuthenticateUserNonceResponse;
    case 5587:
    case "k_EMsgClientPlayerNicknameList":
      return EMsg.k_EMsgClientPlayerNicknameList;
    case 5588:
    case "k_EMsgAMClientSetPlayerNickname":
      return EMsg.k_EMsgAMClientSetPlayerNickname;
    case 5589:
    case "k_EMsgAMClientSetPlayerNicknameResponse":
      return EMsg.k_EMsgAMClientSetPlayerNicknameResponse;
    case 5592:
    case "k_EMsgClientGetNumberOfCurrentPlayersDP":
      return EMsg.k_EMsgClientGetNumberOfCurrentPlayersDP;
    case 5593:
    case "k_EMsgClientGetNumberOfCurrentPlayersDPResponse":
      return EMsg.k_EMsgClientGetNumberOfCurrentPlayersDPResponse;
    case 5594:
    case "k_EMsgClientServiceMethodLegacy":
      return EMsg.k_EMsgClientServiceMethodLegacy;
    case 5595:
    case "k_EMsgClientServiceMethodLegacyResponse":
      return EMsg.k_EMsgClientServiceMethodLegacyResponse;
    case 5596:
    case "k_EMsgClientFriendUserStatusPublished":
      return EMsg.k_EMsgClientFriendUserStatusPublished;
    case 5597:
    case "k_EMsgClientCurrentUIMode":
      return EMsg.k_EMsgClientCurrentUIMode;
    case 5598:
    case "k_EMsgClientVanityURLChangedNotification":
      return EMsg.k_EMsgClientVanityURLChangedNotification;
    case 5599:
    case "k_EMsgClientUserNotifications":
      return EMsg.k_EMsgClientUserNotifications;
    case 5600:
    case "k_EMsgBaseDFS":
      return EMsg.k_EMsgBaseDFS;
    case 5601:
    case "k_EMsgDFSGetFile":
      return EMsg.k_EMsgDFSGetFile;
    case 5602:
    case "k_EMsgDFSInstallLocalFile":
      return EMsg.k_EMsgDFSInstallLocalFile;
    case 5603:
    case "k_EMsgDFSConnection":
      return EMsg.k_EMsgDFSConnection;
    case 5604:
    case "k_EMsgDFSConnectionReply":
      return EMsg.k_EMsgDFSConnectionReply;
    case 5605:
    case "k_EMsgClientDFSAuthenticateRequest":
      return EMsg.k_EMsgClientDFSAuthenticateRequest;
    case 5606:
    case "k_EMsgClientDFSAuthenticateResponse":
      return EMsg.k_EMsgClientDFSAuthenticateResponse;
    case 5607:
    case "k_EMsgClientDFSEndSession":
      return EMsg.k_EMsgClientDFSEndSession;
    case 5608:
    case "k_EMsgDFSPurgeFile":
      return EMsg.k_EMsgDFSPurgeFile;
    case 5609:
    case "k_EMsgDFSRouteFile":
      return EMsg.k_EMsgDFSRouteFile;
    case 5610:
    case "k_EMsgDFSGetFileFromServer":
      return EMsg.k_EMsgDFSGetFileFromServer;
    case 5611:
    case "k_EMsgDFSAcceptedResponse":
      return EMsg.k_EMsgDFSAcceptedResponse;
    case 5612:
    case "k_EMsgDFSRequestPingback":
      return EMsg.k_EMsgDFSRequestPingback;
    case 5613:
    case "k_EMsgDFSRecvTransmitFile":
      return EMsg.k_EMsgDFSRecvTransmitFile;
    case 5614:
    case "k_EMsgDFSSendTransmitFile":
      return EMsg.k_EMsgDFSSendTransmitFile;
    case 5615:
    case "k_EMsgDFSRequestPingback2":
      return EMsg.k_EMsgDFSRequestPingback2;
    case 5616:
    case "k_EMsgDFSResponsePingback2":
      return EMsg.k_EMsgDFSResponsePingback2;
    case 5617:
    case "k_EMsgClientDFSDownloadStatus":
      return EMsg.k_EMsgClientDFSDownloadStatus;
    case 5618:
    case "k_EMsgDFSStartTransfer":
      return EMsg.k_EMsgDFSStartTransfer;
    case 5619:
    case "k_EMsgDFSTransferComplete":
      return EMsg.k_EMsgDFSTransferComplete;
    case 5620:
    case "k_EMsgDFSRouteFileResponse":
      return EMsg.k_EMsgDFSRouteFileResponse;
    case 5621:
    case "k_EMsgClientNetworkingCertRequest":
      return EMsg.k_EMsgClientNetworkingCertRequest;
    case 5622:
    case "k_EMsgClientNetworkingCertRequestResponse":
      return EMsg.k_EMsgClientNetworkingCertRequestResponse;
    case 5623:
    case "k_EMsgClientChallengeRequest":
      return EMsg.k_EMsgClientChallengeRequest;
    case 5624:
    case "k_EMsgClientChallengeResponse":
      return EMsg.k_EMsgClientChallengeResponse;
    case 5625:
    case "k_EMsgBadgeCraftedNotification":
      return EMsg.k_EMsgBadgeCraftedNotification;
    case 5626:
    case "k_EMsgClientNetworkingMobileCertRequest":
      return EMsg.k_EMsgClientNetworkingMobileCertRequest;
    case 5627:
    case "k_EMsgClientNetworkingMobileCertRequestResponse":
      return EMsg.k_EMsgClientNetworkingMobileCertRequestResponse;
    case 5800:
    case "k_EMsgBaseMDS":
      return EMsg.k_EMsgBaseMDS;
    case 5812:
    case "k_EMsgMDSGetDepotDecryptionKey":
      return EMsg.k_EMsgMDSGetDepotDecryptionKey;
    case 5813:
    case "k_EMsgMDSGetDepotDecryptionKeyResponse":
      return EMsg.k_EMsgMDSGetDepotDecryptionKeyResponse;
    case 5827:
    case "k_EMsgMDSContentServerConfigRequest":
      return EMsg.k_EMsgMDSContentServerConfigRequest;
    case 5828:
    case "k_EMsgMDSContentServerConfig":
      return EMsg.k_EMsgMDSContentServerConfig;
    case 5829:
    case "k_EMsgMDSGetDepotManifest":
      return EMsg.k_EMsgMDSGetDepotManifest;
    case 5830:
    case "k_EMsgMDSGetDepotManifestResponse":
      return EMsg.k_EMsgMDSGetDepotManifestResponse;
    case 5831:
    case "k_EMsgMDSGetDepotManifestChunk":
      return EMsg.k_EMsgMDSGetDepotManifestChunk;
    case 5832:
    case "k_EMsgMDSGetDepotChunk":
      return EMsg.k_EMsgMDSGetDepotChunk;
    case 5833:
    case "k_EMsgMDSGetDepotChunkResponse":
      return EMsg.k_EMsgMDSGetDepotChunkResponse;
    case 5834:
    case "k_EMsgMDSGetDepotChunkChunk":
      return EMsg.k_EMsgMDSGetDepotChunkChunk;
    case 5844:
    case "k_EMsgMDSToCSFlushChunk":
      return EMsg.k_EMsgMDSToCSFlushChunk;
    case 5847:
    case "k_EMsgMDSMigrateChunk":
      return EMsg.k_EMsgMDSMigrateChunk;
    case 5848:
    case "k_EMsgMDSMigrateChunkResponse":
      return EMsg.k_EMsgMDSMigrateChunkResponse;
    case 5849:
    case "k_EMsgMDSToCSFlushManifest":
      return EMsg.k_EMsgMDSToCSFlushManifest;
    case 6200:
    case "k_EMsgCSBase":
      return EMsg.k_EMsgCSBase;
    case 6201:
    case "k_EMsgCSPing":
      return EMsg.k_EMsgCSPing;
    case 6202:
    case "k_EMsgCSPingResponse":
      return EMsg.k_EMsgCSPingResponse;
    case 6400:
    case "k_EMsgGMSBase":
      return EMsg.k_EMsgGMSBase;
    case 6401:
    case "k_EMsgGMSGameServerReplicate":
      return EMsg.k_EMsgGMSGameServerReplicate;
    case 6403:
    case "k_EMsgClientGMSServerQuery":
      return EMsg.k_EMsgClientGMSServerQuery;
    case 6404:
    case "k_EMsgGMSClientServerQueryResponse":
      return EMsg.k_EMsgGMSClientServerQueryResponse;
    case 6405:
    case "k_EMsgAMGMSGameServerUpdate":
      return EMsg.k_EMsgAMGMSGameServerUpdate;
    case 6406:
    case "k_EMsgAMGMSGameServerRemove":
      return EMsg.k_EMsgAMGMSGameServerRemove;
    case 6407:
    case "k_EMsgGameServerOutOfDate":
      return EMsg.k_EMsgGameServerOutOfDate;
    case 6500:
    case "k_EMsgDeviceAuthorizationBase":
      return EMsg.k_EMsgDeviceAuthorizationBase;
    case 6501:
    case "k_EMsgClientAuthorizeLocalDeviceRequest":
      return EMsg.k_EMsgClientAuthorizeLocalDeviceRequest;
    case 6502:
    case "k_EMsgClientAuthorizeLocalDeviceResponse":
      return EMsg.k_EMsgClientAuthorizeLocalDeviceResponse;
    case 6503:
    case "k_EMsgClientDeauthorizeDeviceRequest":
      return EMsg.k_EMsgClientDeauthorizeDeviceRequest;
    case 6504:
    case "k_EMsgClientDeauthorizeDevice":
      return EMsg.k_EMsgClientDeauthorizeDevice;
    case 6505:
    case "k_EMsgClientUseLocalDeviceAuthorizations":
      return EMsg.k_EMsgClientUseLocalDeviceAuthorizations;
    case 6506:
    case "k_EMsgClientGetAuthorizedDevices":
      return EMsg.k_EMsgClientGetAuthorizedDevices;
    case 6507:
    case "k_EMsgClientGetAuthorizedDevicesResponse":
      return EMsg.k_EMsgClientGetAuthorizedDevicesResponse;
    case 6508:
    case "k_EMsgAMNotifySessionDeviceAuthorized":
      return EMsg.k_EMsgAMNotifySessionDeviceAuthorized;
    case 6509:
    case "k_EMsgClientAuthorizeLocalDeviceNotification":
      return EMsg.k_EMsgClientAuthorizeLocalDeviceNotification;
    case 6600:
    case "k_EMsgMMSBase":
      return EMsg.k_EMsgMMSBase;
    case 6601:
    case "k_EMsgClientMMSCreateLobby":
      return EMsg.k_EMsgClientMMSCreateLobby;
    case 6602:
    case "k_EMsgClientMMSCreateLobbyResponse":
      return EMsg.k_EMsgClientMMSCreateLobbyResponse;
    case 6603:
    case "k_EMsgClientMMSJoinLobby":
      return EMsg.k_EMsgClientMMSJoinLobby;
    case 6604:
    case "k_EMsgClientMMSJoinLobbyResponse":
      return EMsg.k_EMsgClientMMSJoinLobbyResponse;
    case 6605:
    case "k_EMsgClientMMSLeaveLobby":
      return EMsg.k_EMsgClientMMSLeaveLobby;
    case 6606:
    case "k_EMsgClientMMSLeaveLobbyResponse":
      return EMsg.k_EMsgClientMMSLeaveLobbyResponse;
    case 6607:
    case "k_EMsgClientMMSGetLobbyList":
      return EMsg.k_EMsgClientMMSGetLobbyList;
    case 6608:
    case "k_EMsgClientMMSGetLobbyListResponse":
      return EMsg.k_EMsgClientMMSGetLobbyListResponse;
    case 6609:
    case "k_EMsgClientMMSSetLobbyData":
      return EMsg.k_EMsgClientMMSSetLobbyData;
    case 6610:
    case "k_EMsgClientMMSSetLobbyDataResponse":
      return EMsg.k_EMsgClientMMSSetLobbyDataResponse;
    case 6611:
    case "k_EMsgClientMMSGetLobbyData":
      return EMsg.k_EMsgClientMMSGetLobbyData;
    case 6612:
    case "k_EMsgClientMMSLobbyData":
      return EMsg.k_EMsgClientMMSLobbyData;
    case 6613:
    case "k_EMsgClientMMSSendLobbyChatMsg":
      return EMsg.k_EMsgClientMMSSendLobbyChatMsg;
    case 6614:
    case "k_EMsgClientMMSLobbyChatMsg":
      return EMsg.k_EMsgClientMMSLobbyChatMsg;
    case 6615:
    case "k_EMsgClientMMSSetLobbyOwner":
      return EMsg.k_EMsgClientMMSSetLobbyOwner;
    case 6616:
    case "k_EMsgClientMMSSetLobbyOwnerResponse":
      return EMsg.k_EMsgClientMMSSetLobbyOwnerResponse;
    case 6617:
    case "k_EMsgClientMMSSetLobbyGameServer":
      return EMsg.k_EMsgClientMMSSetLobbyGameServer;
    case 6618:
    case "k_EMsgClientMMSLobbyGameServerSet":
      return EMsg.k_EMsgClientMMSLobbyGameServerSet;
    case 6619:
    case "k_EMsgClientMMSUserJoinedLobby":
      return EMsg.k_EMsgClientMMSUserJoinedLobby;
    case 6620:
    case "k_EMsgClientMMSUserLeftLobby":
      return EMsg.k_EMsgClientMMSUserLeftLobby;
    case 6621:
    case "k_EMsgClientMMSInviteToLobby":
      return EMsg.k_EMsgClientMMSInviteToLobby;
    case 6622:
    case "k_EMsgClientMMSFlushFrenemyListCache":
      return EMsg.k_EMsgClientMMSFlushFrenemyListCache;
    case 6623:
    case "k_EMsgClientMMSFlushFrenemyListCacheResponse":
      return EMsg.k_EMsgClientMMSFlushFrenemyListCacheResponse;
    case 6624:
    case "k_EMsgClientMMSSetLobbyLinked":
      return EMsg.k_EMsgClientMMSSetLobbyLinked;
    case 6625:
    case "k_EMsgClientMMSSetRatelimitPolicyOnClient":
      return EMsg.k_EMsgClientMMSSetRatelimitPolicyOnClient;
    case 6626:
    case "k_EMsgClientMMSGetLobbyStatus":
      return EMsg.k_EMsgClientMMSGetLobbyStatus;
    case 6627:
    case "k_EMsgClientMMSGetLobbyStatusResponse":
      return EMsg.k_EMsgClientMMSGetLobbyStatusResponse;
    case 6628:
    case "k_EMsgMMSGetLobbyList":
      return EMsg.k_EMsgMMSGetLobbyList;
    case 6629:
    case "k_EMsgMMSGetLobbyListResponse":
      return EMsg.k_EMsgMMSGetLobbyListResponse;
    case 6800:
    case "k_EMsgNonStdMsgBase":
      return EMsg.k_EMsgNonStdMsgBase;
    case 6801:
    case "k_EMsgNonStdMsgMemcached":
      return EMsg.k_EMsgNonStdMsgMemcached;
    case 6802:
    case "k_EMsgNonStdMsgHTTPServer":
      return EMsg.k_EMsgNonStdMsgHTTPServer;
    case 6803:
    case "k_EMsgNonStdMsgHTTPClient":
      return EMsg.k_EMsgNonStdMsgHTTPClient;
    case 6804:
    case "k_EMsgNonStdMsgWGResponse":
      return EMsg.k_EMsgNonStdMsgWGResponse;
    case 6805:
    case "k_EMsgNonStdMsgPHPSimulator":
      return EMsg.k_EMsgNonStdMsgPHPSimulator;
    case 6806:
    case "k_EMsgNonStdMsgChase":
      return EMsg.k_EMsgNonStdMsgChase;
    case 6807:
    case "k_EMsgNonStdMsgDFSTransfer":
      return EMsg.k_EMsgNonStdMsgDFSTransfer;
    case 6808:
    case "k_EMsgNonStdMsgTests":
      return EMsg.k_EMsgNonStdMsgTests;
    case 6809:
    case "k_EMsgNonStdMsgUMQpipeAAPL":
      return EMsg.k_EMsgNonStdMsgUMQpipeAAPL;
    case 6810:
    case "k_EMSgNonStdMsgSyslog":
      return EMsg.k_EMSgNonStdMsgSyslog;
    case 6811:
    case "k_EMsgNonStdMsgLogsink":
      return EMsg.k_EMsgNonStdMsgLogsink;
    case 6812:
    case "k_EMsgNonStdMsgSteam2Emulator":
      return EMsg.k_EMsgNonStdMsgSteam2Emulator;
    case 6813:
    case "k_EMsgNonStdMsgRTMPServer":
      return EMsg.k_EMsgNonStdMsgRTMPServer;
    case 6814:
    case "k_EMsgNonStdMsgWebSocket":
      return EMsg.k_EMsgNonStdMsgWebSocket;
    case 6815:
    case "k_EMsgNonStdMsgRedis":
      return EMsg.k_EMsgNonStdMsgRedis;
    case 7000:
    case "k_EMsgUDSBase":
      return EMsg.k_EMsgUDSBase;
    case 7001:
    case "k_EMsgClientUDSP2PSessionStarted":
      return EMsg.k_EMsgClientUDSP2PSessionStarted;
    case 7002:
    case "k_EMsgClientUDSP2PSessionEnded":
      return EMsg.k_EMsgClientUDSP2PSessionEnded;
    case 7003:
    case "k_EMsgUDSRenderUserAuth":
      return EMsg.k_EMsgUDSRenderUserAuth;
    case 7004:
    case "k_EMsgUDSRenderUserAuthResponse":
      return EMsg.k_EMsgUDSRenderUserAuthResponse;
    case 7005:
    case "k_EMsgClientInviteToGame":
      return EMsg.k_EMsgClientInviteToGame;
    case 7006:
    case "k_EMsgUDSHasSession":
      return EMsg.k_EMsgUDSHasSession;
    case 7007:
    case "k_EMsgUDSHasSessionResponse":
      return EMsg.k_EMsgUDSHasSessionResponse;
    case 7100:
    case "k_EMsgMPASBase":
      return EMsg.k_EMsgMPASBase;
    case 7101:
    case "k_EMsgMPASVacBanReset":
      return EMsg.k_EMsgMPASVacBanReset;
    case 7200:
    case "k_EMsgKGSBase":
      return EMsg.k_EMsgKGSBase;
    case 7300:
    case "k_EMsgUCMBase":
      return EMsg.k_EMsgUCMBase;
    case 7301:
    case "k_EMsgClientUCMAddScreenshot":
      return EMsg.k_EMsgClientUCMAddScreenshot;
    case 7302:
    case "k_EMsgClientUCMAddScreenshotResponse":
      return EMsg.k_EMsgClientUCMAddScreenshotResponse;
    case 7307:
    case "k_EMsgUCMResetCommunityContent":
      return EMsg.k_EMsgUCMResetCommunityContent;
    case 7308:
    case "k_EMsgUCMResetCommunityContentResponse":
      return EMsg.k_EMsgUCMResetCommunityContentResponse;
    case 7309:
    case "k_EMsgClientUCMDeleteScreenshot":
      return EMsg.k_EMsgClientUCMDeleteScreenshot;
    case 7310:
    case "k_EMsgClientUCMDeleteScreenshotResponse":
      return EMsg.k_EMsgClientUCMDeleteScreenshotResponse;
    case 7311:
    case "k_EMsgClientUCMPublishFile":
      return EMsg.k_EMsgClientUCMPublishFile;
    case 7312:
    case "k_EMsgClientUCMPublishFileResponse":
      return EMsg.k_EMsgClientUCMPublishFileResponse;
    case 7315:
    case "k_EMsgClientUCMDeletePublishedFile":
      return EMsg.k_EMsgClientUCMDeletePublishedFile;
    case 7316:
    case "k_EMsgClientUCMDeletePublishedFileResponse":
      return EMsg.k_EMsgClientUCMDeletePublishedFileResponse;
    case 7325:
    case "k_EMsgClientUCMUpdatePublishedFile":
      return EMsg.k_EMsgClientUCMUpdatePublishedFile;
    case 7326:
    case "k_EMsgClientUCMUpdatePublishedFileResponse":
      return EMsg.k_EMsgClientUCMUpdatePublishedFileResponse;
    case 7327:
    case "k_EMsgUCMUpdatePublishedFile":
      return EMsg.k_EMsgUCMUpdatePublishedFile;
    case 7328:
    case "k_EMsgUCMUpdatePublishedFileResponse":
      return EMsg.k_EMsgUCMUpdatePublishedFileResponse;
    case 7331:
    case "k_EMsgUCMUpdatePublishedFileStat":
      return EMsg.k_EMsgUCMUpdatePublishedFileStat;
    case 7337:
    case "k_EMsgUCMReloadPublishedFile":
      return EMsg.k_EMsgUCMReloadPublishedFile;
    case 7338:
    case "k_EMsgUCMReloadUserFileListCaches":
      return EMsg.k_EMsgUCMReloadUserFileListCaches;
    case 7339:
    case "k_EMsgUCMPublishedFileReported":
      return EMsg.k_EMsgUCMPublishedFileReported;
    case 7341:
    case "k_EMsgUCMPublishedFilePreviewAdd":
      return EMsg.k_EMsgUCMPublishedFilePreviewAdd;
    case 7342:
    case "k_EMsgUCMPublishedFilePreviewAddResponse":
      return EMsg.k_EMsgUCMPublishedFilePreviewAddResponse;
    case 7343:
    case "k_EMsgUCMPublishedFilePreviewRemove":
      return EMsg.k_EMsgUCMPublishedFilePreviewRemove;
    case 7344:
    case "k_EMsgUCMPublishedFilePreviewRemoveResponse":
      return EMsg.k_EMsgUCMPublishedFilePreviewRemoveResponse;
    case 7349:
    case "k_EMsgUCMPublishedFileSubscribed":
      return EMsg.k_EMsgUCMPublishedFileSubscribed;
    case 7350:
    case "k_EMsgUCMPublishedFileUnsubscribed":
      return EMsg.k_EMsgUCMPublishedFileUnsubscribed;
    case 7351:
    case "k_EMsgUCMPublishFile":
      return EMsg.k_EMsgUCMPublishFile;
    case 7352:
    case "k_EMsgUCMPublishFileResponse":
      return EMsg.k_EMsgUCMPublishFileResponse;
    case 7353:
    case "k_EMsgUCMPublishedFileChildAdd":
      return EMsg.k_EMsgUCMPublishedFileChildAdd;
    case 7354:
    case "k_EMsgUCMPublishedFileChildAddResponse":
      return EMsg.k_EMsgUCMPublishedFileChildAddResponse;
    case 7355:
    case "k_EMsgUCMPublishedFileChildRemove":
      return EMsg.k_EMsgUCMPublishedFileChildRemove;
    case 7356:
    case "k_EMsgUCMPublishedFileChildRemoveResponse":
      return EMsg.k_EMsgUCMPublishedFileChildRemoveResponse;
    case 7359:
    case "k_EMsgUCMPublishedFileParentChanged":
      return EMsg.k_EMsgUCMPublishedFileParentChanged;
    case 7364:
    case "k_EMsgClientUCMSetUserPublishedFileAction":
      return EMsg.k_EMsgClientUCMSetUserPublishedFileAction;
    case 7365:
    case "k_EMsgClientUCMSetUserPublishedFileActionResponse":
      return EMsg.k_EMsgClientUCMSetUserPublishedFileActionResponse;
    case 7366:
    case "k_EMsgClientUCMEnumeratePublishedFilesByUserAction":
      return EMsg.k_EMsgClientUCMEnumeratePublishedFilesByUserAction;
    case 7367:
    case "k_EMsgClientUCMEnumeratePublishedFilesByUserActionResponse":
      return EMsg.k_EMsgClientUCMEnumeratePublishedFilesByUserActionResponse;
    case 7369:
    case "k_EMsgUCMGetUserSubscribedFiles":
      return EMsg.k_EMsgUCMGetUserSubscribedFiles;
    case 7370:
    case "k_EMsgUCMGetUserSubscribedFilesResponse":
      return EMsg.k_EMsgUCMGetUserSubscribedFilesResponse;
    case 7371:
    case "k_EMsgUCMFixStatsPublishedFile":
      return EMsg.k_EMsgUCMFixStatsPublishedFile;
    case 7378:
    case "k_EMsgClientUCMEnumerateUserSubscribedFilesWithUpdates":
      return EMsg.k_EMsgClientUCMEnumerateUserSubscribedFilesWithUpdates;
    case 7379:
    case "k_EMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse":
      return EMsg.k_EMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse;
    case 7380:
    case "k_EMsgUCMPublishedFileContentUpdated":
      return EMsg.k_EMsgUCMPublishedFileContentUpdated;
    case 7381:
    case "k_EMsgClientUCMPublishedFileUpdated":
      return EMsg.k_EMsgClientUCMPublishedFileUpdated;
    case 7500:
    case "k_EMsgFSBase":
      return EMsg.k_EMsgFSBase;
    case 7501:
    case "k_EMsgClientRichPresenceUpload":
      return EMsg.k_EMsgClientRichPresenceUpload;
    case 7502:
    case "k_EMsgClientRichPresenceRequest":
      return EMsg.k_EMsgClientRichPresenceRequest;
    case 7503:
    case "k_EMsgClientRichPresenceInfo":
      return EMsg.k_EMsgClientRichPresenceInfo;
    case 7504:
    case "k_EMsgFSRichPresenceRequest":
      return EMsg.k_EMsgFSRichPresenceRequest;
    case 7505:
    case "k_EMsgFSRichPresenceResponse":
      return EMsg.k_EMsgFSRichPresenceResponse;
    case 7506:
    case "k_EMsgFSComputeFrenematrix":
      return EMsg.k_EMsgFSComputeFrenematrix;
    case 7507:
    case "k_EMsgFSComputeFrenematrixResponse":
      return EMsg.k_EMsgFSComputeFrenematrixResponse;
    case 7508:
    case "k_EMsgFSPlayStatusNotification":
      return EMsg.k_EMsgFSPlayStatusNotification;
    case 7510:
    case "k_EMsgFSAddOrRemoveFollower":
      return EMsg.k_EMsgFSAddOrRemoveFollower;
    case 7511:
    case "k_EMsgFSAddOrRemoveFollowerResponse":
      return EMsg.k_EMsgFSAddOrRemoveFollowerResponse;
    case 7512:
    case "k_EMsgFSUpdateFollowingList":
      return EMsg.k_EMsgFSUpdateFollowingList;
    case 7513:
    case "k_EMsgFSCommentNotification":
      return EMsg.k_EMsgFSCommentNotification;
    case 7514:
    case "k_EMsgFSCommentNotificationViewed":
      return EMsg.k_EMsgFSCommentNotificationViewed;
    case 7515:
    case "k_EMsgClientFSGetFollowerCount":
      return EMsg.k_EMsgClientFSGetFollowerCount;
    case 7516:
    case "k_EMsgClientFSGetFollowerCountResponse":
      return EMsg.k_EMsgClientFSGetFollowerCountResponse;
    case 7517:
    case "k_EMsgClientFSGetIsFollowing":
      return EMsg.k_EMsgClientFSGetIsFollowing;
    case 7518:
    case "k_EMsgClientFSGetIsFollowingResponse":
      return EMsg.k_EMsgClientFSGetIsFollowingResponse;
    case 7519:
    case "k_EMsgClientFSEnumerateFollowingList":
      return EMsg.k_EMsgClientFSEnumerateFollowingList;
    case 7520:
    case "k_EMsgClientFSEnumerateFollowingListResponse":
      return EMsg.k_EMsgClientFSEnumerateFollowingListResponse;
    case 7521:
    case "k_EMsgFSGetPendingNotificationCount":
      return EMsg.k_EMsgFSGetPendingNotificationCount;
    case 7522:
    case "k_EMsgFSGetPendingNotificationCountResponse":
      return EMsg.k_EMsgFSGetPendingNotificationCountResponse;
    case 7523:
    case "k_EMsgClientChatOfflineMessageNotification":
      return EMsg.k_EMsgClientChatOfflineMessageNotification;
    case 7524:
    case "k_EMsgClientChatRequestOfflineMessageCount":
      return EMsg.k_EMsgClientChatRequestOfflineMessageCount;
    case 7525:
    case "k_EMsgClientChatGetFriendMessageHistory":
      return EMsg.k_EMsgClientChatGetFriendMessageHistory;
    case 7526:
    case "k_EMsgClientChatGetFriendMessageHistoryResponse":
      return EMsg.k_EMsgClientChatGetFriendMessageHistoryResponse;
    case 7527:
    case "k_EMsgClientChatGetFriendMessageHistoryForOfflineMessages":
      return EMsg.k_EMsgClientChatGetFriendMessageHistoryForOfflineMessages;
    case 7528:
    case "k_EMsgClientFSGetFriendsSteamLevels":
      return EMsg.k_EMsgClientFSGetFriendsSteamLevels;
    case 7529:
    case "k_EMsgClientFSGetFriendsSteamLevelsResponse":
      return EMsg.k_EMsgClientFSGetFriendsSteamLevelsResponse;
    case 7530:
    case "k_EMsgAMRequestFriendData":
      return EMsg.k_EMsgAMRequestFriendData;
    case 7600:
    case "k_EMsgDRMRange2":
      return EMsg.k_EMsgDRMRange2;
    case 7600:
    case "k_EMsgCEGVersionSetEnableDisableRequest":
      return EMsg.k_EMsgCEGVersionSetEnableDisableRequest;
    case 7601:
    case "k_EMsgCEGVersionSetEnableDisableResponse":
      return EMsg.k_EMsgCEGVersionSetEnableDisableResponse;
    case 7602:
    case "k_EMsgCEGPropStatusDRMSRequest":
      return EMsg.k_EMsgCEGPropStatusDRMSRequest;
    case 7603:
    case "k_EMsgCEGPropStatusDRMSResponse":
      return EMsg.k_EMsgCEGPropStatusDRMSResponse;
    case 7604:
    case "k_EMsgCEGWhackFailureReportRequest":
      return EMsg.k_EMsgCEGWhackFailureReportRequest;
    case 7605:
    case "k_EMsgCEGWhackFailureReportResponse":
      return EMsg.k_EMsgCEGWhackFailureReportResponse;
    case 7606:
    case "k_EMsgDRMSFetchVersionSet":
      return EMsg.k_EMsgDRMSFetchVersionSet;
    case 7607:
    case "k_EMsgDRMSFetchVersionSetResponse":
      return EMsg.k_EMsgDRMSFetchVersionSetResponse;
    case 7700:
    case "k_EMsgEconBase":
      return EMsg.k_EMsgEconBase;
    case 7701:
    case "k_EMsgEconTrading_InitiateTradeRequest":
      return EMsg.k_EMsgEconTrading_InitiateTradeRequest;
    case 7702:
    case "k_EMsgEconTrading_InitiateTradeProposed":
      return EMsg.k_EMsgEconTrading_InitiateTradeProposed;
    case 7703:
    case "k_EMsgEconTrading_InitiateTradeResponse":
      return EMsg.k_EMsgEconTrading_InitiateTradeResponse;
    case 7704:
    case "k_EMsgEconTrading_InitiateTradeResult":
      return EMsg.k_EMsgEconTrading_InitiateTradeResult;
    case 7705:
    case "k_EMsgEconTrading_StartSession":
      return EMsg.k_EMsgEconTrading_StartSession;
    case 7706:
    case "k_EMsgEconTrading_CancelTradeRequest":
      return EMsg.k_EMsgEconTrading_CancelTradeRequest;
    case 7707:
    case "k_EMsgEconFlushInventoryCache":
      return EMsg.k_EMsgEconFlushInventoryCache;
    case 7708:
    case "k_EMsgEconFlushInventoryCacheResponse":
      return EMsg.k_EMsgEconFlushInventoryCacheResponse;
    case 7711:
    case "k_EMsgEconCDKeyProcessTransaction":
      return EMsg.k_EMsgEconCDKeyProcessTransaction;
    case 7712:
    case "k_EMsgEconCDKeyProcessTransactionResponse":
      return EMsg.k_EMsgEconCDKeyProcessTransactionResponse;
    case 7713:
    case "k_EMsgEconGetErrorLogs":
      return EMsg.k_EMsgEconGetErrorLogs;
    case 7714:
    case "k_EMsgEconGetErrorLogsResponse":
      return EMsg.k_EMsgEconGetErrorLogsResponse;
    case 7800:
    case "k_EMsgRMRange":
      return EMsg.k_EMsgRMRange;
    case 7800:
    case "k_EMsgRMTestVerisignOTP":
      return EMsg.k_EMsgRMTestVerisignOTP;
    case 7801:
    case "k_EMsgRMTestVerisignOTPResponse":
      return EMsg.k_EMsgRMTestVerisignOTPResponse;
    case 7803:
    case "k_EMsgRMDeleteMemcachedKeys":
      return EMsg.k_EMsgRMDeleteMemcachedKeys;
    case 7804:
    case "k_EMsgRMRemoteInvoke":
      return EMsg.k_EMsgRMRemoteInvoke;
    case 7805:
    case "k_EMsgBadLoginIPList":
      return EMsg.k_EMsgBadLoginIPList;
    case 7806:
    case "k_EMsgRMMsgTraceAddTrigger":
      return EMsg.k_EMsgRMMsgTraceAddTrigger;
    case 7807:
    case "k_EMsgRMMsgTraceRemoveTrigger":
      return EMsg.k_EMsgRMMsgTraceRemoveTrigger;
    case 7808:
    case "k_EMsgRMMsgTraceEvent":
      return EMsg.k_EMsgRMMsgTraceEvent;
    case 7900:
    case "k_EMsgUGSBase":
      return EMsg.k_EMsgUGSBase;
    case 7900:
    case "k_EMsgUGSUpdateGlobalStats":
      return EMsg.k_EMsgUGSUpdateGlobalStats;
    case 7901:
    case "k_EMsgClientUGSGetGlobalStats":
      return EMsg.k_EMsgClientUGSGetGlobalStats;
    case 7902:
    case "k_EMsgClientUGSGetGlobalStatsResponse":
      return EMsg.k_EMsgClientUGSGetGlobalStatsResponse;
    case 8000:
    case "k_EMsgStoreBase":
      return EMsg.k_EMsgStoreBase;
    case 8100:
    case "k_EMsgUMQBase":
      return EMsg.k_EMsgUMQBase;
    case 8100:
    case "k_EMsgUMQLogonRequest":
      return EMsg.k_EMsgUMQLogonRequest;
    case 8101:
    case "k_EMsgUMQLogonResponse":
      return EMsg.k_EMsgUMQLogonResponse;
    case 8102:
    case "k_EMsgUMQLogoffRequest":
      return EMsg.k_EMsgUMQLogoffRequest;
    case 8103:
    case "k_EMsgUMQLogoffResponse":
      return EMsg.k_EMsgUMQLogoffResponse;
    case 8104:
    case "k_EMsgUMQSendChatMessage":
      return EMsg.k_EMsgUMQSendChatMessage;
    case 8105:
    case "k_EMsgUMQIncomingChatMessage":
      return EMsg.k_EMsgUMQIncomingChatMessage;
    case 8106:
    case "k_EMsgUMQPoll":
      return EMsg.k_EMsgUMQPoll;
    case 8107:
    case "k_EMsgUMQPollResults":
      return EMsg.k_EMsgUMQPollResults;
    case 8108:
    case "k_EMsgUMQ2AM_ClientMsgBatch":
      return EMsg.k_EMsgUMQ2AM_ClientMsgBatch;
    case 8200:
    case "k_EMsgWorkshopBase":
      return EMsg.k_EMsgWorkshopBase;
    case 8300:
    case "k_EMsgWebAPIBase":
      return EMsg.k_EMsgWebAPIBase;
    case 8300:
    case "k_EMsgWebAPIValidateOAuth2Token":
      return EMsg.k_EMsgWebAPIValidateOAuth2Token;
    case 8301:
    case "k_EMsgWebAPIValidateOAuth2TokenResponse":
      return EMsg.k_EMsgWebAPIValidateOAuth2TokenResponse;
    case 8303:
    case "k_EMsgWebAPIRegisterGCInterfaces":
      return EMsg.k_EMsgWebAPIRegisterGCInterfaces;
    case 8304:
    case "k_EMsgWebAPIInvalidateOAuthClientCache":
      return EMsg.k_EMsgWebAPIInvalidateOAuthClientCache;
    case 8305:
    case "k_EMsgWebAPIInvalidateOAuthTokenCache":
      return EMsg.k_EMsgWebAPIInvalidateOAuthTokenCache;
    case 8306:
    case "k_EMsgWebAPISetSecrets":
      return EMsg.k_EMsgWebAPISetSecrets;
    case 8400:
    case "k_EMsgBackpackBase":
      return EMsg.k_EMsgBackpackBase;
    case 8401:
    case "k_EMsgBackpackAddToCurrency":
      return EMsg.k_EMsgBackpackAddToCurrency;
    case 8402:
    case "k_EMsgBackpackAddToCurrencyResponse":
      return EMsg.k_EMsgBackpackAddToCurrencyResponse;
    case 8500:
    case "k_EMsgCREBase":
      return EMsg.k_EMsgCREBase;
    case 8503:
    case "k_EMsgCREItemVoteSummary":
      return EMsg.k_EMsgCREItemVoteSummary;
    case 8504:
    case "k_EMsgCREItemVoteSummaryResponse":
      return EMsg.k_EMsgCREItemVoteSummaryResponse;
    case 8507:
    case "k_EMsgCREUpdateUserPublishedItemVote":
      return EMsg.k_EMsgCREUpdateUserPublishedItemVote;
    case 8508:
    case "k_EMsgCREUpdateUserPublishedItemVoteResponse":
      return EMsg.k_EMsgCREUpdateUserPublishedItemVoteResponse;
    case 8509:
    case "k_EMsgCREGetUserPublishedItemVoteDetails":
      return EMsg.k_EMsgCREGetUserPublishedItemVoteDetails;
    case 8510:
    case "k_EMsgCREGetUserPublishedItemVoteDetailsResponse":
      return EMsg.k_EMsgCREGetUserPublishedItemVoteDetailsResponse;
    case 8600:
    case "k_EMsgSecretsBase":
      return EMsg.k_EMsgSecretsBase;
    case 8600:
    case "k_EMsgSecretsRequestCredentialPair":
      return EMsg.k_EMsgSecretsRequestCredentialPair;
    case 8601:
    case "k_EMsgSecretsCredentialPairResponse":
      return EMsg.k_EMsgSecretsCredentialPairResponse;
    case 8700:
    case "k_EMsgBoxMonitorBase":
      return EMsg.k_EMsgBoxMonitorBase;
    case 8700:
    case "k_EMsgBoxMonitorReportRequest":
      return EMsg.k_EMsgBoxMonitorReportRequest;
    case 8701:
    case "k_EMsgBoxMonitorReportResponse":
      return EMsg.k_EMsgBoxMonitorReportResponse;
    case 8800:
    case "k_EMsgLogsinkBase":
      return EMsg.k_EMsgLogsinkBase;
    case 8800:
    case "k_EMsgLogsinkWriteReport":
      return EMsg.k_EMsgLogsinkWriteReport;
    case 8900:
    case "k_EMsgPICSBase":
      return EMsg.k_EMsgPICSBase;
    case 8901:
    case "k_EMsgClientPICSChangesSinceRequest":
      return EMsg.k_EMsgClientPICSChangesSinceRequest;
    case 8902:
    case "k_EMsgClientPICSChangesSinceResponse":
      return EMsg.k_EMsgClientPICSChangesSinceResponse;
    case 8903:
    case "k_EMsgClientPICSProductInfoRequest":
      return EMsg.k_EMsgClientPICSProductInfoRequest;
    case 8904:
    case "k_EMsgClientPICSProductInfoResponse":
      return EMsg.k_EMsgClientPICSProductInfoResponse;
    case 8905:
    case "k_EMsgClientPICSAccessTokenRequest":
      return EMsg.k_EMsgClientPICSAccessTokenRequest;
    case 8906:
    case "k_EMsgClientPICSAccessTokenResponse":
      return EMsg.k_EMsgClientPICSAccessTokenResponse;
    case 9000:
    case "k_EMsgWorkerProcess":
      return EMsg.k_EMsgWorkerProcess;
    case 9000:
    case "k_EMsgWorkerProcessPingRequest":
      return EMsg.k_EMsgWorkerProcessPingRequest;
    case 9001:
    case "k_EMsgWorkerProcessPingResponse":
      return EMsg.k_EMsgWorkerProcessPingResponse;
    case 9002:
    case "k_EMsgWorkerProcessShutdown":
      return EMsg.k_EMsgWorkerProcessShutdown;
    case 9100:
    case "k_EMsgDRMWorkerProcess":
      return EMsg.k_EMsgDRMWorkerProcess;
    case 9100:
    case "k_EMsgDRMWorkerProcessDRMAndSign":
      return EMsg.k_EMsgDRMWorkerProcessDRMAndSign;
    case 9101:
    case "k_EMsgDRMWorkerProcessDRMAndSignResponse":
      return EMsg.k_EMsgDRMWorkerProcessDRMAndSignResponse;
    case 9102:
    case "k_EMsgDRMWorkerProcessSteamworksInfoRequest":
      return EMsg.k_EMsgDRMWorkerProcessSteamworksInfoRequest;
    case 9103:
    case "k_EMsgDRMWorkerProcessSteamworksInfoResponse":
      return EMsg.k_EMsgDRMWorkerProcessSteamworksInfoResponse;
    case 9104:
    case "k_EMsgDRMWorkerProcessInstallDRMDLLRequest":
      return EMsg.k_EMsgDRMWorkerProcessInstallDRMDLLRequest;
    case 9105:
    case "k_EMsgDRMWorkerProcessInstallDRMDLLResponse":
      return EMsg.k_EMsgDRMWorkerProcessInstallDRMDLLResponse;
    case 9106:
    case "k_EMsgDRMWorkerProcessSecretIdStringRequest":
      return EMsg.k_EMsgDRMWorkerProcessSecretIdStringRequest;
    case 9107:
    case "k_EMsgDRMWorkerProcessSecretIdStringResponse":
      return EMsg.k_EMsgDRMWorkerProcessSecretIdStringResponse;
    case 9110:
    case "k_EMsgDRMWorkerProcessInstallProcessedFilesRequest":
      return EMsg.k_EMsgDRMWorkerProcessInstallProcessedFilesRequest;
    case 9111:
    case "k_EMsgDRMWorkerProcessInstallProcessedFilesResponse":
      return EMsg.k_EMsgDRMWorkerProcessInstallProcessedFilesResponse;
    case 9112:
    case "k_EMsgDRMWorkerProcessExamineBlobRequest":
      return EMsg.k_EMsgDRMWorkerProcessExamineBlobRequest;
    case 9113:
    case "k_EMsgDRMWorkerProcessExamineBlobResponse":
      return EMsg.k_EMsgDRMWorkerProcessExamineBlobResponse;
    case 9114:
    case "k_EMsgDRMWorkerProcessDescribeSecretRequest":
      return EMsg.k_EMsgDRMWorkerProcessDescribeSecretRequest;
    case 9115:
    case "k_EMsgDRMWorkerProcessDescribeSecretResponse":
      return EMsg.k_EMsgDRMWorkerProcessDescribeSecretResponse;
    case 9116:
    case "k_EMsgDRMWorkerProcessBackfillOriginalRequest":
      return EMsg.k_EMsgDRMWorkerProcessBackfillOriginalRequest;
    case 9117:
    case "k_EMsgDRMWorkerProcessBackfillOriginalResponse":
      return EMsg.k_EMsgDRMWorkerProcessBackfillOriginalResponse;
    case 9118:
    case "k_EMsgDRMWorkerProcessValidateDRMDLLRequest":
      return EMsg.k_EMsgDRMWorkerProcessValidateDRMDLLRequest;
    case 9119:
    case "k_EMsgDRMWorkerProcessValidateDRMDLLResponse":
      return EMsg.k_EMsgDRMWorkerProcessValidateDRMDLLResponse;
    case 9120:
    case "k_EMsgDRMWorkerProcessValidateFileRequest":
      return EMsg.k_EMsgDRMWorkerProcessValidateFileRequest;
    case 9121:
    case "k_EMsgDRMWorkerProcessValidateFileResponse":
      return EMsg.k_EMsgDRMWorkerProcessValidateFileResponse;
    case 9122:
    case "k_EMsgDRMWorkerProcessSplitAndInstallRequest":
      return EMsg.k_EMsgDRMWorkerProcessSplitAndInstallRequest;
    case 9123:
    case "k_EMsgDRMWorkerProcessSplitAndInstallResponse":
      return EMsg.k_EMsgDRMWorkerProcessSplitAndInstallResponse;
    case 9124:
    case "k_EMsgDRMWorkerProcessGetBlobRequest":
      return EMsg.k_EMsgDRMWorkerProcessGetBlobRequest;
    case 9125:
    case "k_EMsgDRMWorkerProcessGetBlobResponse":
      return EMsg.k_EMsgDRMWorkerProcessGetBlobResponse;
    case 9126:
    case "k_EMsgDRMWorkerProcessEvaluateCrashRequest":
      return EMsg.k_EMsgDRMWorkerProcessEvaluateCrashRequest;
    case 9127:
    case "k_EMsgDRMWorkerProcessEvaluateCrashResponse":
      return EMsg.k_EMsgDRMWorkerProcessEvaluateCrashResponse;
    case 9128:
    case "k_EMsgDRMWorkerProcessAnalyzeFileRequest":
      return EMsg.k_EMsgDRMWorkerProcessAnalyzeFileRequest;
    case 9129:
    case "k_EMsgDRMWorkerProcessAnalyzeFileResponse":
      return EMsg.k_EMsgDRMWorkerProcessAnalyzeFileResponse;
    case 9130:
    case "k_EMsgDRMWorkerProcessUnpackBlobRequest":
      return EMsg.k_EMsgDRMWorkerProcessUnpackBlobRequest;
    case 9131:
    case "k_EMsgDRMWorkerProcessUnpackBlobResponse":
      return EMsg.k_EMsgDRMWorkerProcessUnpackBlobResponse;
    case 9132:
    case "k_EMsgDRMWorkerProcessInstallAllRequest":
      return EMsg.k_EMsgDRMWorkerProcessInstallAllRequest;
    case 9133:
    case "k_EMsgDRMWorkerProcessInstallAllResponse":
      return EMsg.k_EMsgDRMWorkerProcessInstallAllResponse;
    case 9200:
    case "k_EMsgTestWorkerProcess":
      return EMsg.k_EMsgTestWorkerProcess;
    case 9200:
    case "k_EMsgTestWorkerProcessLoadUnloadModuleRequest":
      return EMsg.k_EMsgTestWorkerProcessLoadUnloadModuleRequest;
    case 9201:
    case "k_EMsgTestWorkerProcessLoadUnloadModuleResponse":
      return EMsg.k_EMsgTestWorkerProcessLoadUnloadModuleResponse;
    case 9202:
    case "k_EMsgTestWorkerProcessServiceModuleCallRequest":
      return EMsg.k_EMsgTestWorkerProcessServiceModuleCallRequest;
    case 9203:
    case "k_EMsgTestWorkerProcessServiceModuleCallResponse":
      return EMsg.k_EMsgTestWorkerProcessServiceModuleCallResponse;
    case 9300:
    case "k_EMsgQuestServerBase":
      return EMsg.k_EMsgQuestServerBase;
    case 9330:
    case "k_EMsgClientGetEmoticonList":
      return EMsg.k_EMsgClientGetEmoticonList;
    case 9331:
    case "k_EMsgClientEmoticonList":
      return EMsg.k_EMsgClientEmoticonList;
    case 9400:
    case "k_EMsgSLCBase":
      return EMsg.k_EMsgSLCBase;
    case 9400:
    case "k_EMsgSLCUserSessionStatus":
      return EMsg.k_EMsgSLCUserSessionStatus;
    case 9401:
    case "k_EMsgSLCRequestUserSessionStatus":
      return EMsg.k_EMsgSLCRequestUserSessionStatus;
    case 9402:
    case "k_EMsgSLCSharedLicensesLockStatus":
      return EMsg.k_EMsgSLCSharedLicensesLockStatus;
    case 9405:
    case "k_EMsgClientSharedLibraryLockStatus":
      return EMsg.k_EMsgClientSharedLibraryLockStatus;
    case 9406:
    case "k_EMsgClientSharedLibraryStopPlaying":
      return EMsg.k_EMsgClientSharedLibraryStopPlaying;
    case 9407:
    case "k_EMsgSLCOwnerLibraryChanged":
      return EMsg.k_EMsgSLCOwnerLibraryChanged;
    case 9408:
    case "k_EMsgSLCSharedLibraryChanged":
      return EMsg.k_EMsgSLCSharedLibraryChanged;
    case 9500:
    case "k_EMsgRemoteClientBase":
      return EMsg.k_EMsgRemoteClientBase;
    case 9500:
    case "k_EMsgRemoteClientAuth_OBSOLETE":
      return EMsg.k_EMsgRemoteClientAuth_OBSOLETE;
    case 9501:
    case "k_EMsgRemoteClientAuthResponse_OBSOLETE":
      return EMsg.k_EMsgRemoteClientAuthResponse_OBSOLETE;
    case 9502:
    case "k_EMsgRemoteClientAppStatus":
      return EMsg.k_EMsgRemoteClientAppStatus;
    case 9503:
    case "k_EMsgRemoteClientStartStream":
      return EMsg.k_EMsgRemoteClientStartStream;
    case 9504:
    case "k_EMsgRemoteClientStartStreamResponse":
      return EMsg.k_EMsgRemoteClientStartStreamResponse;
    case 9505:
    case "k_EMsgRemoteClientPing":
      return EMsg.k_EMsgRemoteClientPing;
    case 9506:
    case "k_EMsgRemoteClientPingResponse":
      return EMsg.k_EMsgRemoteClientPingResponse;
    case 9507:
    case "k_EMsgClientUnlockH264":
      return EMsg.k_EMsgClientUnlockH264;
    case 9508:
    case "k_EMsgClientUnlockH264Response":
      return EMsg.k_EMsgClientUnlockH264Response;
    case 9509:
    case "k_EMsgRemoteClientAcceptEULA":
      return EMsg.k_EMsgRemoteClientAcceptEULA;
    case 9510:
    case "k_EMsgRemoteClientGetControllerConfig":
      return EMsg.k_EMsgRemoteClientGetControllerConfig;
    case 9511:
    case "k_EMsgRemoteClientGetControllerConfigResponse":
      return EMsg.k_EMsgRemoteClientGetControllerConfigResponse;
    case 9512:
    case "k_EMsgRemoteClientStreamingEnabled":
      return EMsg.k_EMsgRemoteClientStreamingEnabled;
    case 9513:
    case "k_EMsgClientUnlockHEVC_OBSOLETE":
      return EMsg.k_EMsgClientUnlockHEVC_OBSOLETE;
    case 9514:
    case "k_EMsgClientUnlockHEVCResponse_OBSOLETE":
      return EMsg.k_EMsgClientUnlockHEVCResponse_OBSOLETE;
    case 9515:
    case "k_EMsgRemoteClientStatusRequest":
      return EMsg.k_EMsgRemoteClientStatusRequest;
    case 9516:
    case "k_EMsgRemoteClientStatusResponse":
      return EMsg.k_EMsgRemoteClientStatusResponse;
    case 9600:
    case "k_EMsgClientConcurrentSessionsBase":
      return EMsg.k_EMsgClientConcurrentSessionsBase;
    case 9600:
    case "k_EMsgClientPlayingSessionState":
      return EMsg.k_EMsgClientPlayingSessionState;
    case 9601:
    case "k_EMsgClientKickPlayingSession":
      return EMsg.k_EMsgClientKickPlayingSession;
    case 9700:
    case "k_EMsgClientBroadcastBase":
      return EMsg.k_EMsgClientBroadcastBase;
    case 9700:
    case "k_EMsgClientBroadcastInit":
      return EMsg.k_EMsgClientBroadcastInit;
    case 9701:
    case "k_EMsgClientBroadcastFrames":
      return EMsg.k_EMsgClientBroadcastFrames;
    case 9702:
    case "k_EMsgClientBroadcastDisconnect":
      return EMsg.k_EMsgClientBroadcastDisconnect;
    case 9704:
    case "k_EMsgClientBroadcastUploadConfig":
      return EMsg.k_EMsgClientBroadcastUploadConfig;
    case 9800:
    case "k_EMsgBaseClient3":
      return EMsg.k_EMsgBaseClient3;
    case 9800:
    case "k_EMsgClientVoiceCallPreAuthorize":
      return EMsg.k_EMsgClientVoiceCallPreAuthorize;
    case 9801:
    case "k_EMsgClientVoiceCallPreAuthorizeResponse":
      return EMsg.k_EMsgClientVoiceCallPreAuthorizeResponse;
    case 9802:
    case "k_EMsgClientServerTimestampRequest":
      return EMsg.k_EMsgClientServerTimestampRequest;
    case 9803:
    case "k_EMsgClientServerTimestampResponse":
      return EMsg.k_EMsgClientServerTimestampResponse;
    case 9804:
    case "k_EMsgServiceMethodCallFromClientNonAuthed":
      return EMsg.k_EMsgServiceMethodCallFromClientNonAuthed;
    case 9805:
    case "k_EMsgClientHello":
      return EMsg.k_EMsgClientHello;
    case 9806:
    case "k_EMsgClientEnableOrDisableDownloads":
      return EMsg.k_EMsgClientEnableOrDisableDownloads;
    case 9807:
    case "k_EMsgClientEnableOrDisableDownloadsResponse":
      return EMsg.k_EMsgClientEnableOrDisableDownloadsResponse;
    case 9900:
    case "k_EMsgClientLANP2PBase":
      return EMsg.k_EMsgClientLANP2PBase;
    case 9900:
    case "k_EMsgClientLANP2PRequestChunk":
      return EMsg.k_EMsgClientLANP2PRequestChunk;
    case 9901:
    case "k_EMsgClientLANP2PRequestChunkResponse":
      return EMsg.k_EMsgClientLANP2PRequestChunkResponse;
    case 9902:
    case "k_EMsgClientPeerChunkRequest":
      return EMsg.k_EMsgClientPeerChunkRequest;
    case 9903:
    case "k_EMsgClientPeerChunkResponse":
      return EMsg.k_EMsgClientPeerChunkResponse;
    case 9999:
    case "k_EMsgClientLANP2PMax":
      return EMsg.k_EMsgClientLANP2PMax;
    case 10000:
    case "k_EMsgBaseWatchdogServer":
      return EMsg.k_EMsgBaseWatchdogServer;
    case 10000:
    case "k_EMsgNotifyWatchdog":
      return EMsg.k_EMsgNotifyWatchdog;
    case 10100:
    case "k_EMsgClientSiteLicenseBase":
      return EMsg.k_EMsgClientSiteLicenseBase;
    case 10100:
    case "k_EMsgClientSiteLicenseSiteInfoNotification":
      return EMsg.k_EMsgClientSiteLicenseSiteInfoNotification;
    case 10101:
    case "k_EMsgClientSiteLicenseCheckout":
      return EMsg.k_EMsgClientSiteLicenseCheckout;
    case 10102:
    case "k_EMsgClientSiteLicenseCheckoutResponse":
      return EMsg.k_EMsgClientSiteLicenseCheckoutResponse;
    case 10103:
    case "k_EMsgClientSiteLicenseGetAvailableSeats":
      return EMsg.k_EMsgClientSiteLicenseGetAvailableSeats;
    case 10104:
    case "k_EMsgClientSiteLicenseGetAvailableSeatsResponse":
      return EMsg.k_EMsgClientSiteLicenseGetAvailableSeatsResponse;
    case 10105:
    case "k_EMsgClientSiteLicenseGetContentCacheInfo":
      return EMsg.k_EMsgClientSiteLicenseGetContentCacheInfo;
    case 10106:
    case "k_EMsgClientSiteLicenseGetContentCacheInfoResponse":
      return EMsg.k_EMsgClientSiteLicenseGetContentCacheInfoResponse;
    case 12000:
    case "k_EMsgBaseChatServer":
      return EMsg.k_EMsgBaseChatServer;
    case 12000:
    case "k_EMsgChatServerGetPendingNotificationCount":
      return EMsg.k_EMsgChatServerGetPendingNotificationCount;
    case 12001:
    case "k_EMsgChatServerGetPendingNotificationCountResponse":
      return EMsg.k_EMsgChatServerGetPendingNotificationCountResponse;
    case 12100:
    case "k_EMsgBaseSecretServer":
      return EMsg.k_EMsgBaseSecretServer;
    case 12100:
    case "k_EMsgServerSecretChanged":
      return EMsg.k_EMsgServerSecretChanged;
    case 12200:
    case "k_EMsgBaseWG":
      return EMsg.k_EMsgBaseWG;
    case 12200:
    case "k_EMsgWGConnectionProtocolError":
      return EMsg.k_EMsgWGConnectionProtocolError;
    case 12201:
    case "k_EMsgWGConnectionValidateUserToken":
      return EMsg.k_EMsgWGConnectionValidateUserToken;
    case 12202:
    case "k_EMsgWGConnectionValidateUserTokenResponse":
      return EMsg.k_EMsgWGConnectionValidateUserTokenResponse;
    case 12203:
    case "k_EMsgWGConnectionLegacyWGRequest":
      return EMsg.k_EMsgWGConnectionLegacyWGRequest;
    case 12204:
    case "k_EMsgWGConnectionLegacyWGResponse":
      return EMsg.k_EMsgWGConnectionLegacyWGResponse;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EMsg");
  }
}

export function eMsgToJSON(object: EMsg): string {
  switch (object) {
    case EMsg.k_EMsgInvalid:
      return "k_EMsgInvalid";
    case EMsg.k_EMsgMulti:
      return "k_EMsgMulti";
    case EMsg.k_EMsgProtobufWrapped:
      return "k_EMsgProtobufWrapped";
    case EMsg.k_EMsgBaseGeneral:
      return "k_EMsgBaseGeneral";
    case EMsg.k_EMsgGenericReply:
      return "k_EMsgGenericReply";
    case EMsg.k_EMsgDestJobFailed:
      return "k_EMsgDestJobFailed";
    case EMsg.k_EMsgAlert:
      return "k_EMsgAlert";
    case EMsg.k_EMsgSCIDRequest:
      return "k_EMsgSCIDRequest";
    case EMsg.k_EMsgSCIDResponse:
      return "k_EMsgSCIDResponse";
    case EMsg.k_EMsgJobHeartbeat:
      return "k_EMsgJobHeartbeat";
    case EMsg.k_EMsgHubConnect:
      return "k_EMsgHubConnect";
    case EMsg.k_EMsgSubscribe:
      return "k_EMsgSubscribe";
    case EMsg.k_EMRouteMessage:
      return "k_EMRouteMessage";
    case EMsg.k_EMsgWGRequest:
      return "k_EMsgWGRequest";
    case EMsg.k_EMsgWGResponse:
      return "k_EMsgWGResponse";
    case EMsg.k_EMsgKeepAlive:
      return "k_EMsgKeepAlive";
    case EMsg.k_EMsgWebAPIJobRequest:
      return "k_EMsgWebAPIJobRequest";
    case EMsg.k_EMsgWebAPIJobResponse:
      return "k_EMsgWebAPIJobResponse";
    case EMsg.k_EMsgClientSessionStart:
      return "k_EMsgClientSessionStart";
    case EMsg.k_EMsgClientSessionEnd:
      return "k_EMsgClientSessionEnd";
    case EMsg.k_EMsgClientSessionUpdate:
      return "k_EMsgClientSessionUpdate";
    case EMsg.k_EMsgStatsDeprecated:
      return "k_EMsgStatsDeprecated";
    case EMsg.k_EMsgPing:
      return "k_EMsgPing";
    case EMsg.k_EMsgPingResponse:
      return "k_EMsgPingResponse";
    case EMsg.k_EMsgStats:
      return "k_EMsgStats";
    case EMsg.k_EMsgRequestFullStatsBlock:
      return "k_EMsgRequestFullStatsBlock";
    case EMsg.k_EMsgLoadDBOCacheItem:
      return "k_EMsgLoadDBOCacheItem";
    case EMsg.k_EMsgLoadDBOCacheItemResponse:
      return "k_EMsgLoadDBOCacheItemResponse";
    case EMsg.k_EMsgInvalidateDBOCacheItems:
      return "k_EMsgInvalidateDBOCacheItems";
    case EMsg.k_EMsgServiceMethod:
      return "k_EMsgServiceMethod";
    case EMsg.k_EMsgServiceMethodResponse:
      return "k_EMsgServiceMethodResponse";
    case EMsg.k_EMsgClientPackageVersions:
      return "k_EMsgClientPackageVersions";
    case EMsg.k_EMsgTimestampRequest:
      return "k_EMsgTimestampRequest";
    case EMsg.k_EMsgTimestampResponse:
      return "k_EMsgTimestampResponse";
    case EMsg.k_EMsgServiceMethodCallFromClient:
      return "k_EMsgServiceMethodCallFromClient";
    case EMsg.k_EMsgServiceMethodSendToClient:
      return "k_EMsgServiceMethodSendToClient";
    case EMsg.k_EMsgBaseShell:
      return "k_EMsgBaseShell";
    case EMsg.k_EMsgAssignSysID:
      return "k_EMsgAssignSysID";
    case EMsg.k_EMsgExit:
      return "k_EMsgExit";
    case EMsg.k_EMsgDirRequest:
      return "k_EMsgDirRequest";
    case EMsg.k_EMsgDirResponse:
      return "k_EMsgDirResponse";
    case EMsg.k_EMsgZipRequest:
      return "k_EMsgZipRequest";
    case EMsg.k_EMsgZipResponse:
      return "k_EMsgZipResponse";
    case EMsg.k_EMsgUpdateRecordResponse:
      return "k_EMsgUpdateRecordResponse";
    case EMsg.k_EMsgUpdateCreditCardRequest:
      return "k_EMsgUpdateCreditCardRequest";
    case EMsg.k_EMsgUpdateUserBanResponse:
      return "k_EMsgUpdateUserBanResponse";
    case EMsg.k_EMsgPrepareToExit:
      return "k_EMsgPrepareToExit";
    case EMsg.k_EMsgContentDescriptionUpdate:
      return "k_EMsgContentDescriptionUpdate";
    case EMsg.k_EMsgTestResetServer:
      return "k_EMsgTestResetServer";
    case EMsg.k_EMsgUniverseChanged:
      return "k_EMsgUniverseChanged";
    case EMsg.k_EMsgShellConfigInfoUpdate:
      return "k_EMsgShellConfigInfoUpdate";
    case EMsg.k_EMsgRequestWindowsEventLogEntries:
      return "k_EMsgRequestWindowsEventLogEntries";
    case EMsg.k_EMsgProvideWindowsEventLogEntries:
      return "k_EMsgProvideWindowsEventLogEntries";
    case EMsg.k_EMsgShellSearchLogs:
      return "k_EMsgShellSearchLogs";
    case EMsg.k_EMsgShellSearchLogsResponse:
      return "k_EMsgShellSearchLogsResponse";
    case EMsg.k_EMsgShellCheckWindowsUpdates:
      return "k_EMsgShellCheckWindowsUpdates";
    case EMsg.k_EMsgShellCheckWindowsUpdatesResponse:
      return "k_EMsgShellCheckWindowsUpdatesResponse";
    case EMsg.k_EMsgTestFlushDelayedSQL:
      return "k_EMsgTestFlushDelayedSQL";
    case EMsg.k_EMsgTestFlushDelayedSQLResponse:
      return "k_EMsgTestFlushDelayedSQLResponse";
    case EMsg.k_EMsgEnsureExecuteScheduledTask_TEST:
      return "k_EMsgEnsureExecuteScheduledTask_TEST";
    case EMsg.k_EMsgEnsureExecuteScheduledTaskResponse_TEST:
      return "k_EMsgEnsureExecuteScheduledTaskResponse_TEST";
    case EMsg.k_EMsgUpdateScheduledTaskEnableState_TEST:
      return "k_EMsgUpdateScheduledTaskEnableState_TEST";
    case EMsg.k_EMsgUpdateScheduledTaskEnableStateResponse_TEST:
      return "k_EMsgUpdateScheduledTaskEnableStateResponse_TEST";
    case EMsg.k_EMsgContentDescriptionDeltaUpdate:
      return "k_EMsgContentDescriptionDeltaUpdate";
    case EMsg.k_EMsgGMShellAndServerAddressUpdates:
      return "k_EMsgGMShellAndServerAddressUpdates";
    case EMsg.k_EMsgBaseGM:
      return "k_EMsgBaseGM";
    case EMsg.k_EMsgHeartbeat:
      return "k_EMsgHeartbeat";
    case EMsg.k_EMsgShellFailed:
      return "k_EMsgShellFailed";
    case EMsg.k_EMsgExitShells:
      return "k_EMsgExitShells";
    case EMsg.k_EMsgExitShell:
      return "k_EMsgExitShell";
    case EMsg.k_EMsgGracefulExitShell:
      return "k_EMsgGracefulExitShell";
    case EMsg.k_EMsgLicenseProcessingComplete:
      return "k_EMsgLicenseProcessingComplete";
    case EMsg.k_EMsgSetTestFlag:
      return "k_EMsgSetTestFlag";
    case EMsg.k_EMsgQueuedEmailsComplete:
      return "k_EMsgQueuedEmailsComplete";
    case EMsg.k_EMsgGMDRMSync:
      return "k_EMsgGMDRMSync";
    case EMsg.k_EMsgPhysicalBoxInventory:
      return "k_EMsgPhysicalBoxInventory";
    case EMsg.k_EMsgUpdateConfigFile:
      return "k_EMsgUpdateConfigFile";
    case EMsg.k_EMsgTestInitDB:
      return "k_EMsgTestInitDB";
    case EMsg.k_EMsgGMWriteConfigToSQL:
      return "k_EMsgGMWriteConfigToSQL";
    case EMsg.k_EMsgGMLoadActivationCodes:
      return "k_EMsgGMLoadActivationCodes";
    case EMsg.k_EMsgGMQueueForFBS:
      return "k_EMsgGMQueueForFBS";
    case EMsg.k_EMsgGMSchemaConversionResults:
      return "k_EMsgGMSchemaConversionResults";
    case EMsg.k_EMsgGMWriteShellFailureToSQL:
      return "k_EMsgGMWriteShellFailureToSQL";
    case EMsg.k_EMsgGMWriteStatsToSOS:
      return "k_EMsgGMWriteStatsToSOS";
    case EMsg.k_EMsgGMGetServiceMethodRouting:
      return "k_EMsgGMGetServiceMethodRouting";
    case EMsg.k_EMsgGMGetServiceMethodRoutingResponse:
      return "k_EMsgGMGetServiceMethodRoutingResponse";
    case EMsg.k_EMsgGMTestNextBuildSchemaConversion:
      return "k_EMsgGMTestNextBuildSchemaConversion";
    case EMsg.k_EMsgGMTestNextBuildSchemaConversionResponse:
      return "k_EMsgGMTestNextBuildSchemaConversionResponse";
    case EMsg.k_EMsgExpectShellRestart:
      return "k_EMsgExpectShellRestart";
    case EMsg.k_EMsgHotFixProgress:
      return "k_EMsgHotFixProgress";
    case EMsg.k_EMsgGMStatsForwardToAdminConnections:
      return "k_EMsgGMStatsForwardToAdminConnections";
    case EMsg.k_EMsgGMGetModifiedConVars:
      return "k_EMsgGMGetModifiedConVars";
    case EMsg.k_EMsgGMGetModifiedConVarsResponse:
      return "k_EMsgGMGetModifiedConVarsResponse";
    case EMsg.k_EMsgBaseAIS:
      return "k_EMsgBaseAIS";
    case EMsg.k_EMsgAISRequestContentDescription:
      return "k_EMsgAISRequestContentDescription";
    case EMsg.k_EMsgAISUpdateAppInfo:
      return "k_EMsgAISUpdateAppInfo";
    case EMsg.k_EMsgAISGetPackageChangeNumber:
      return "k_EMsgAISGetPackageChangeNumber";
    case EMsg.k_EMsgAISGetPackageChangeNumberResponse:
      return "k_EMsgAISGetPackageChangeNumberResponse";
    case EMsg.k_EMsgAIGetAppGCFlags:
      return "k_EMsgAIGetAppGCFlags";
    case EMsg.k_EMsgAIGetAppGCFlagsResponse:
      return "k_EMsgAIGetAppGCFlagsResponse";
    case EMsg.k_EMsgAIGetAppList:
      return "k_EMsgAIGetAppList";
    case EMsg.k_EMsgAIGetAppListResponse:
      return "k_EMsgAIGetAppListResponse";
    case EMsg.k_EMsgAISGetCouponDefinition:
      return "k_EMsgAISGetCouponDefinition";
    case EMsg.k_EMsgAISGetCouponDefinitionResponse:
      return "k_EMsgAISGetCouponDefinitionResponse";
    case EMsg.k_EMsgAISUpdateSubordinateContentDescription:
      return "k_EMsgAISUpdateSubordinateContentDescription";
    case EMsg.k_EMsgAISUpdateSubordinateContentDescriptionResponse:
      return "k_EMsgAISUpdateSubordinateContentDescriptionResponse";
    case EMsg.k_EMsgAISTestEnableGC:
      return "k_EMsgAISTestEnableGC";
    case EMsg.k_EMsgBaseAM:
      return "k_EMsgBaseAM";
    case EMsg.k_EMsgAMUpdateUserBanRequest:
      return "k_EMsgAMUpdateUserBanRequest";
    case EMsg.k_EMsgAMAddLicense:
      return "k_EMsgAMAddLicense";
    case EMsg.k_EMsgAMSendSystemIMToUser:
      return "k_EMsgAMSendSystemIMToUser";
    case EMsg.k_EMsgAMExtendLicense:
      return "k_EMsgAMExtendLicense";
    case EMsg.k_EMsgAMAddMinutesToLicense:
      return "k_EMsgAMAddMinutesToLicense";
    case EMsg.k_EMsgAMCancelLicense:
      return "k_EMsgAMCancelLicense";
    case EMsg.k_EMsgAMInitPurchase:
      return "k_EMsgAMInitPurchase";
    case EMsg.k_EMsgAMPurchaseResponse:
      return "k_EMsgAMPurchaseResponse";
    case EMsg.k_EMsgAMGetFinalPrice:
      return "k_EMsgAMGetFinalPrice";
    case EMsg.k_EMsgAMGetFinalPriceResponse:
      return "k_EMsgAMGetFinalPriceResponse";
    case EMsg.k_EMsgAMGetLegacyGameKey:
      return "k_EMsgAMGetLegacyGameKey";
    case EMsg.k_EMsgAMGetLegacyGameKeyResponse:
      return "k_EMsgAMGetLegacyGameKeyResponse";
    case EMsg.k_EMsgAMFindHungTransactions:
      return "k_EMsgAMFindHungTransactions";
    case EMsg.k_EMsgAMSetAccountTrustedRequest:
      return "k_EMsgAMSetAccountTrustedRequest";
    case EMsg.k_EMsgAMCancelPurchase:
      return "k_EMsgAMCancelPurchase";
    case EMsg.k_EMsgAMNewChallenge:
      return "k_EMsgAMNewChallenge";
    case EMsg.k_EMsgAMLoadOEMTickets:
      return "k_EMsgAMLoadOEMTickets";
    case EMsg.k_EMsgAMFixPendingPurchase:
      return "k_EMsgAMFixPendingPurchase";
    case EMsg.k_EMsgAMFixPendingPurchaseResponse:
      return "k_EMsgAMFixPendingPurchaseResponse";
    case EMsg.k_EMsgAMIsUserBanned:
      return "k_EMsgAMIsUserBanned";
    case EMsg.k_EMsgAMRegisterKey:
      return "k_EMsgAMRegisterKey";
    case EMsg.k_EMsgAMLoadActivationCodes:
      return "k_EMsgAMLoadActivationCodes";
    case EMsg.k_EMsgAMLoadActivationCodesResponse:
      return "k_EMsgAMLoadActivationCodesResponse";
    case EMsg.k_EMsgAMLookupKeyResponse:
      return "k_EMsgAMLookupKeyResponse";
    case EMsg.k_EMsgAMLookupKey:
      return "k_EMsgAMLookupKey";
    case EMsg.k_EMsgAMChatCleanup:
      return "k_EMsgAMChatCleanup";
    case EMsg.k_EMsgAMClanCleanup:
      return "k_EMsgAMClanCleanup";
    case EMsg.k_EMsgAMFixPendingRefund:
      return "k_EMsgAMFixPendingRefund";
    case EMsg.k_EMsgAMReverseChargeback:
      return "k_EMsgAMReverseChargeback";
    case EMsg.k_EMsgAMReverseChargebackResponse:
      return "k_EMsgAMReverseChargebackResponse";
    case EMsg.k_EMsgAMClanCleanupList:
      return "k_EMsgAMClanCleanupList";
    case EMsg.k_EMsgAMGetLicenses:
      return "k_EMsgAMGetLicenses";
    case EMsg.k_EMsgAMGetLicensesResponse:
      return "k_EMsgAMGetLicensesResponse";
    case EMsg.k_EMsgAMSendCartRepurchase:
      return "k_EMsgAMSendCartRepurchase";
    case EMsg.k_EMsgAMSendCartRepurchaseResponse:
      return "k_EMsgAMSendCartRepurchaseResponse";
    case EMsg.k_EMsgAllowUserToPlayQuery:
      return "k_EMsgAllowUserToPlayQuery";
    case EMsg.k_EMsgAllowUserToPlayResponse:
      return "k_EMsgAllowUserToPlayResponse";
    case EMsg.k_EMsgAMVerfiyUser:
      return "k_EMsgAMVerfiyUser";
    case EMsg.k_EMsgAMClientNotPlaying:
      return "k_EMsgAMClientNotPlaying";
    case EMsg.k_EMsgAMClientRequestFriendship:
      return "k_EMsgAMClientRequestFriendship";
    case EMsg.k_EMsgAMRelayPublishStatus:
      return "k_EMsgAMRelayPublishStatus";
    case EMsg.k_EMsgAMInitPurchaseResponse:
      return "k_EMsgAMInitPurchaseResponse";
    case EMsg.k_EMsgAMRevokePurchaseResponse:
      return "k_EMsgAMRevokePurchaseResponse";
    case EMsg.k_EMsgAMRefreshGuestPasses:
      return "k_EMsgAMRefreshGuestPasses";
    case EMsg.k_EMsgAMGrantGuestPasses:
      return "k_EMsgAMGrantGuestPasses";
    case EMsg.k_EMsgAMClanDataUpdated:
      return "k_EMsgAMClanDataUpdated";
    case EMsg.k_EMsgAMReloadAccount:
      return "k_EMsgAMReloadAccount";
    case EMsg.k_EMsgAMClientChatMsgRelay:
      return "k_EMsgAMClientChatMsgRelay";
    case EMsg.k_EMsgAMChatMulti:
      return "k_EMsgAMChatMulti";
    case EMsg.k_EMsgAMClientChatInviteRelay:
      return "k_EMsgAMClientChatInviteRelay";
    case EMsg.k_EMsgAMChatInvite:
      return "k_EMsgAMChatInvite";
    case EMsg.k_EMsgAMClientJoinChatRelay:
      return "k_EMsgAMClientJoinChatRelay";
    case EMsg.k_EMsgAMClientChatMemberInfoRelay:
      return "k_EMsgAMClientChatMemberInfoRelay";
    case EMsg.k_EMsgAMPublishChatMemberInfo:
      return "k_EMsgAMPublishChatMemberInfo";
    case EMsg.k_EMsgAMClientAcceptFriendInvite:
      return "k_EMsgAMClientAcceptFriendInvite";
    case EMsg.k_EMsgAMChatEnter:
      return "k_EMsgAMChatEnter";
    case EMsg.k_EMsgAMClientPublishRemovalFromSource:
      return "k_EMsgAMClientPublishRemovalFromSource";
    case EMsg.k_EMsgAMChatActionResult:
      return "k_EMsgAMChatActionResult";
    case EMsg.k_EMsgAMFindAccounts:
      return "k_EMsgAMFindAccounts";
    case EMsg.k_EMsgAMFindAccountsResponse:
      return "k_EMsgAMFindAccountsResponse";
    case EMsg.k_EMsgAMIsAccountNameInUse:
      return "k_EMsgAMIsAccountNameInUse";
    case EMsg.k_EMsgAMIsAccountNameInUseResponse:
      return "k_EMsgAMIsAccountNameInUseResponse";
    case EMsg.k_EMsgAMSetAccountFlags:
      return "k_EMsgAMSetAccountFlags";
    case EMsg.k_EMsgAMCreateClan:
      return "k_EMsgAMCreateClan";
    case EMsg.k_EMsgAMCreateClanResponse:
      return "k_EMsgAMCreateClanResponse";
    case EMsg.k_EMsgAMGetClanDetails:
      return "k_EMsgAMGetClanDetails";
    case EMsg.k_EMsgAMGetClanDetailsResponse:
      return "k_EMsgAMGetClanDetailsResponse";
    case EMsg.k_EMsgAMSetPersonaName:
      return "k_EMsgAMSetPersonaName";
    case EMsg.k_EMsgAMSetAvatar:
      return "k_EMsgAMSetAvatar";
    case EMsg.k_EMsgAMAuthenticateUser:
      return "k_EMsgAMAuthenticateUser";
    case EMsg.k_EMsgAMAuthenticateUserResponse:
      return "k_EMsgAMAuthenticateUserResponse";
    case EMsg.k_EMsgAMP2PIntroducerMessage:
      return "k_EMsgAMP2PIntroducerMessage";
    case EMsg.k_EMsgClientChatAction:
      return "k_EMsgClientChatAction";
    case EMsg.k_EMsgAMClientChatActionRelay:
      return "k_EMsgAMClientChatActionRelay";
    case EMsg.k_EMsgBaseVS:
      return "k_EMsgBaseVS";
    case EMsg.k_EMsgReqChallenge:
      return "k_EMsgReqChallenge";
    case EMsg.k_EMsgVACResponse:
      return "k_EMsgVACResponse";
    case EMsg.k_EMsgReqChallengeTest:
      return "k_EMsgReqChallengeTest";
    case EMsg.k_EMsgVSMarkCheat:
      return "k_EMsgVSMarkCheat";
    case EMsg.k_EMsgVSAddCheat:
      return "k_EMsgVSAddCheat";
    case EMsg.k_EMsgVSPurgeCodeModDB:
      return "k_EMsgVSPurgeCodeModDB";
    case EMsg.k_EMsgVSGetChallengeResults:
      return "k_EMsgVSGetChallengeResults";
    case EMsg.k_EMsgVSChallengeResultText:
      return "k_EMsgVSChallengeResultText";
    case EMsg.k_EMsgVSReportLingerer:
      return "k_EMsgVSReportLingerer";
    case EMsg.k_EMsgVSRequestManagedChallenge:
      return "k_EMsgVSRequestManagedChallenge";
    case EMsg.k_EMsgVSLoadDBFinished:
      return "k_EMsgVSLoadDBFinished";
    case EMsg.k_EMsgBaseDRMS:
      return "k_EMsgBaseDRMS";
    case EMsg.k_EMsgDRMBuildBlobRequest:
      return "k_EMsgDRMBuildBlobRequest";
    case EMsg.k_EMsgDRMBuildBlobResponse:
      return "k_EMsgDRMBuildBlobResponse";
    case EMsg.k_EMsgDRMResolveGuidRequest:
      return "k_EMsgDRMResolveGuidRequest";
    case EMsg.k_EMsgDRMResolveGuidResponse:
      return "k_EMsgDRMResolveGuidResponse";
    case EMsg.k_EMsgDRMVariabilityReport:
      return "k_EMsgDRMVariabilityReport";
    case EMsg.k_EMsgDRMVariabilityReportResponse:
      return "k_EMsgDRMVariabilityReportResponse";
    case EMsg.k_EMsgDRMStabilityReport:
      return "k_EMsgDRMStabilityReport";
    case EMsg.k_EMsgDRMStabilityReportResponse:
      return "k_EMsgDRMStabilityReportResponse";
    case EMsg.k_EMsgDRMDetailsReportRequest:
      return "k_EMsgDRMDetailsReportRequest";
    case EMsg.k_EMsgDRMDetailsReportResponse:
      return "k_EMsgDRMDetailsReportResponse";
    case EMsg.k_EMsgDRMProcessFile:
      return "k_EMsgDRMProcessFile";
    case EMsg.k_EMsgDRMAdminUpdate:
      return "k_EMsgDRMAdminUpdate";
    case EMsg.k_EMsgDRMAdminUpdateResponse:
      return "k_EMsgDRMAdminUpdateResponse";
    case EMsg.k_EMsgDRMSync:
      return "k_EMsgDRMSync";
    case EMsg.k_EMsgDRMSyncResponse:
      return "k_EMsgDRMSyncResponse";
    case EMsg.k_EMsgDRMProcessFileResponse:
      return "k_EMsgDRMProcessFileResponse";
    case EMsg.k_EMsgDRMEmptyGuidCache:
      return "k_EMsgDRMEmptyGuidCache";
    case EMsg.k_EMsgDRMEmptyGuidCacheResponse:
      return "k_EMsgDRMEmptyGuidCacheResponse";
    case EMsg.k_EMsgBaseCS:
      return "k_EMsgBaseCS";
    case EMsg.k_EMsgBaseClient:
      return "k_EMsgBaseClient";
    case EMsg.k_EMsgClientLogOn_Deprecated:
      return "k_EMsgClientLogOn_Deprecated";
    case EMsg.k_EMsgClientAnonLogOn_Deprecated:
      return "k_EMsgClientAnonLogOn_Deprecated";
    case EMsg.k_EMsgClientHeartBeat:
      return "k_EMsgClientHeartBeat";
    case EMsg.k_EMsgClientVACResponse:
      return "k_EMsgClientVACResponse";
    case EMsg.k_EMsgClientGamesPlayed_obsolete:
      return "k_EMsgClientGamesPlayed_obsolete";
    case EMsg.k_EMsgClientLogOff:
      return "k_EMsgClientLogOff";
    case EMsg.k_EMsgClientNoUDPConnectivity:
      return "k_EMsgClientNoUDPConnectivity";
    case EMsg.k_EMsgClientConnectionStats:
      return "k_EMsgClientConnectionStats";
    case EMsg.k_EMsgClientPingResponse:
      return "k_EMsgClientPingResponse";
    case EMsg.k_EMsgClientRemoveFriend:
      return "k_EMsgClientRemoveFriend";
    case EMsg.k_EMsgClientGamesPlayedNoDataBlob:
      return "k_EMsgClientGamesPlayedNoDataBlob";
    case EMsg.k_EMsgClientChangeStatus:
      return "k_EMsgClientChangeStatus";
    case EMsg.k_EMsgClientVacStatusResponse:
      return "k_EMsgClientVacStatusResponse";
    case EMsg.k_EMsgClientFriendMsg:
      return "k_EMsgClientFriendMsg";
    case EMsg.k_EMsgClientGameConnect_obsolete:
      return "k_EMsgClientGameConnect_obsolete";
    case EMsg.k_EMsgClientGamesPlayed2_obsolete:
      return "k_EMsgClientGamesPlayed2_obsolete";
    case EMsg.k_EMsgClientGameEnded_obsolete:
      return "k_EMsgClientGameEnded_obsolete";
    case EMsg.k_EMsgClientSystemIM:
      return "k_EMsgClientSystemIM";
    case EMsg.k_EMsgClientSystemIMAck:
      return "k_EMsgClientSystemIMAck";
    case EMsg.k_EMsgClientGetLicenses:
      return "k_EMsgClientGetLicenses";
    case EMsg.k_EMsgClientGetLegacyGameKey:
      return "k_EMsgClientGetLegacyGameKey";
    case EMsg.k_EMsgClientContentServerLogOn_Deprecated:
      return "k_EMsgClientContentServerLogOn_Deprecated";
    case EMsg.k_EMsgClientAckVACBan2:
      return "k_EMsgClientAckVACBan2";
    case EMsg.k_EMsgClientGetPurchaseReceipts:
      return "k_EMsgClientGetPurchaseReceipts";
    case EMsg.k_EMsgClientGamesPlayed3_obsolete:
      return "k_EMsgClientGamesPlayed3_obsolete";
    case EMsg.k_EMsgClientAckGuestPass:
      return "k_EMsgClientAckGuestPass";
    case EMsg.k_EMsgClientRedeemGuestPass:
      return "k_EMsgClientRedeemGuestPass";
    case EMsg.k_EMsgClientGamesPlayed:
      return "k_EMsgClientGamesPlayed";
    case EMsg.k_EMsgClientRegisterKey:
      return "k_EMsgClientRegisterKey";
    case EMsg.k_EMsgClientInviteUserToClan:
      return "k_EMsgClientInviteUserToClan";
    case EMsg.k_EMsgClientAcknowledgeClanInvite:
      return "k_EMsgClientAcknowledgeClanInvite";
    case EMsg.k_EMsgClientPurchaseWithMachineID:
      return "k_EMsgClientPurchaseWithMachineID";
    case EMsg.k_EMsgClientAppUsageEvent:
      return "k_EMsgClientAppUsageEvent";
    case EMsg.k_EMsgClientLogOnResponse:
      return "k_EMsgClientLogOnResponse";
    case EMsg.k_EMsgClientSetHeartbeatRate:
      return "k_EMsgClientSetHeartbeatRate";
    case EMsg.k_EMsgClientNotLoggedOnDeprecated:
      return "k_EMsgClientNotLoggedOnDeprecated";
    case EMsg.k_EMsgClientLoggedOff:
      return "k_EMsgClientLoggedOff";
    case EMsg.k_EMsgGSApprove:
      return "k_EMsgGSApprove";
    case EMsg.k_EMsgGSDeny:
      return "k_EMsgGSDeny";
    case EMsg.k_EMsgGSKick:
      return "k_EMsgGSKick";
    case EMsg.k_EMsgClientPurchaseResponse:
      return "k_EMsgClientPurchaseResponse";
    case EMsg.k_EMsgClientPing:
      return "k_EMsgClientPing";
    case EMsg.k_EMsgClientNOP:
      return "k_EMsgClientNOP";
    case EMsg.k_EMsgClientPersonaState:
      return "k_EMsgClientPersonaState";
    case EMsg.k_EMsgClientFriendsList:
      return "k_EMsgClientFriendsList";
    case EMsg.k_EMsgClientAccountInfo:
      return "k_EMsgClientAccountInfo";
    case EMsg.k_EMsgClientNewsUpdate:
      return "k_EMsgClientNewsUpdate";
    case EMsg.k_EMsgClientGameConnectDeny:
      return "k_EMsgClientGameConnectDeny";
    case EMsg.k_EMsgGSStatusReply:
      return "k_EMsgGSStatusReply";
    case EMsg.k_EMsgClientGameConnectTokens:
      return "k_EMsgClientGameConnectTokens";
    case EMsg.k_EMsgClientLicenseList:
      return "k_EMsgClientLicenseList";
    case EMsg.k_EMsgClientVACBanStatus:
      return "k_EMsgClientVACBanStatus";
    case EMsg.k_EMsgClientCMList:
      return "k_EMsgClientCMList";
    case EMsg.k_EMsgClientEncryptPct:
      return "k_EMsgClientEncryptPct";
    case EMsg.k_EMsgClientGetLegacyGameKeyResponse:
      return "k_EMsgClientGetLegacyGameKeyResponse";
    case EMsg.k_EMsgClientAddFriend:
      return "k_EMsgClientAddFriend";
    case EMsg.k_EMsgClientAddFriendResponse:
      return "k_EMsgClientAddFriendResponse";
    case EMsg.k_EMsgClientAckGuestPassResponse:
      return "k_EMsgClientAckGuestPassResponse";
    case EMsg.k_EMsgClientRedeemGuestPassResponse:
      return "k_EMsgClientRedeemGuestPassResponse";
    case EMsg.k_EMsgClientUpdateGuestPassesList:
      return "k_EMsgClientUpdateGuestPassesList";
    case EMsg.k_EMsgClientChatMsg:
      return "k_EMsgClientChatMsg";
    case EMsg.k_EMsgClientChatInvite:
      return "k_EMsgClientChatInvite";
    case EMsg.k_EMsgClientJoinChat:
      return "k_EMsgClientJoinChat";
    case EMsg.k_EMsgClientChatMemberInfo:
      return "k_EMsgClientChatMemberInfo";
    case EMsg.k_EMsgClientLogOnWithCredentials_Deprecated:
      return "k_EMsgClientLogOnWithCredentials_Deprecated";
    case EMsg.k_EMsgClientPasswordChangeResponse:
      return "k_EMsgClientPasswordChangeResponse";
    case EMsg.k_EMsgClientChatEnter:
      return "k_EMsgClientChatEnter";
    case EMsg.k_EMsgClientFriendRemovedFromSource:
      return "k_EMsgClientFriendRemovedFromSource";
    case EMsg.k_EMsgClientCreateChat:
      return "k_EMsgClientCreateChat";
    case EMsg.k_EMsgClientCreateChatResponse:
      return "k_EMsgClientCreateChatResponse";
    case EMsg.k_EMsgClientP2PIntroducerMessage:
      return "k_EMsgClientP2PIntroducerMessage";
    case EMsg.k_EMsgClientChatActionResult:
      return "k_EMsgClientChatActionResult";
    case EMsg.k_EMsgClientRequestFriendData:
      return "k_EMsgClientRequestFriendData";
    case EMsg.k_EMsgClientGetUserStats:
      return "k_EMsgClientGetUserStats";
    case EMsg.k_EMsgClientGetUserStatsResponse:
      return "k_EMsgClientGetUserStatsResponse";
    case EMsg.k_EMsgClientStoreUserStats:
      return "k_EMsgClientStoreUserStats";
    case EMsg.k_EMsgClientStoreUserStatsResponse:
      return "k_EMsgClientStoreUserStatsResponse";
    case EMsg.k_EMsgClientClanState:
      return "k_EMsgClientClanState";
    case EMsg.k_EMsgClientServiceModule:
      return "k_EMsgClientServiceModule";
    case EMsg.k_EMsgClientServiceCall:
      return "k_EMsgClientServiceCall";
    case EMsg.k_EMsgClientServiceCallResponse:
      return "k_EMsgClientServiceCallResponse";
    case EMsg.k_EMsgClientNatTraversalStatEvent:
      return "k_EMsgClientNatTraversalStatEvent";
    case EMsg.k_EMsgClientSteamUsageEvent:
      return "k_EMsgClientSteamUsageEvent";
    case EMsg.k_EMsgClientCheckPassword:
      return "k_EMsgClientCheckPassword";
    case EMsg.k_EMsgClientResetPassword:
      return "k_EMsgClientResetPassword";
    case EMsg.k_EMsgClientCheckPasswordResponse:
      return "k_EMsgClientCheckPasswordResponse";
    case EMsg.k_EMsgClientResetPasswordResponse:
      return "k_EMsgClientResetPasswordResponse";
    case EMsg.k_EMsgClientSessionToken:
      return "k_EMsgClientSessionToken";
    case EMsg.k_EMsgClientDRMProblemReport:
      return "k_EMsgClientDRMProblemReport";
    case EMsg.k_EMsgClientSetIgnoreFriend:
      return "k_EMsgClientSetIgnoreFriend";
    case EMsg.k_EMsgClientSetIgnoreFriendResponse:
      return "k_EMsgClientSetIgnoreFriendResponse";
    case EMsg.k_EMsgClientGetAppOwnershipTicket:
      return "k_EMsgClientGetAppOwnershipTicket";
    case EMsg.k_EMsgClientGetAppOwnershipTicketResponse:
      return "k_EMsgClientGetAppOwnershipTicketResponse";
    case EMsg.k_EMsgClientGetLobbyListResponse:
      return "k_EMsgClientGetLobbyListResponse";
    case EMsg.k_EMsgClientServerList:
      return "k_EMsgClientServerList";
    case EMsg.k_EMsgClientDRMBlobRequest:
      return "k_EMsgClientDRMBlobRequest";
    case EMsg.k_EMsgClientDRMBlobResponse:
      return "k_EMsgClientDRMBlobResponse";
    case EMsg.k_EMsgBaseGameServer:
      return "k_EMsgBaseGameServer";
    case EMsg.k_EMsgGSDisconnectNotice:
      return "k_EMsgGSDisconnectNotice";
    case EMsg.k_EMsgGSStatus:
      return "k_EMsgGSStatus";
    case EMsg.k_EMsgGSUserPlaying:
      return "k_EMsgGSUserPlaying";
    case EMsg.k_EMsgGSStatus2:
      return "k_EMsgGSStatus2";
    case EMsg.k_EMsgGSStatusUpdate_Unused:
      return "k_EMsgGSStatusUpdate_Unused";
    case EMsg.k_EMsgGSServerType:
      return "k_EMsgGSServerType";
    case EMsg.k_EMsgGSPlayerList:
      return "k_EMsgGSPlayerList";
    case EMsg.k_EMsgGSGetUserAchievementStatus:
      return "k_EMsgGSGetUserAchievementStatus";
    case EMsg.k_EMsgGSGetUserAchievementStatusResponse:
      return "k_EMsgGSGetUserAchievementStatusResponse";
    case EMsg.k_EMsgGSGetPlayStats:
      return "k_EMsgGSGetPlayStats";
    case EMsg.k_EMsgGSGetPlayStatsResponse:
      return "k_EMsgGSGetPlayStatsResponse";
    case EMsg.k_EMsgGSGetUserGroupStatus:
      return "k_EMsgGSGetUserGroupStatus";
    case EMsg.k_EMsgAMGetUserGroupStatus:
      return "k_EMsgAMGetUserGroupStatus";
    case EMsg.k_EMsgAMGetUserGroupStatusResponse:
      return "k_EMsgAMGetUserGroupStatusResponse";
    case EMsg.k_EMsgGSGetUserGroupStatusResponse:
      return "k_EMsgGSGetUserGroupStatusResponse";
    case EMsg.k_EMsgGSGetReputation:
      return "k_EMsgGSGetReputation";
    case EMsg.k_EMsgGSGetReputationResponse:
      return "k_EMsgGSGetReputationResponse";
    case EMsg.k_EMsgGSAssociateWithClan:
      return "k_EMsgGSAssociateWithClan";
    case EMsg.k_EMsgGSAssociateWithClanResponse:
      return "k_EMsgGSAssociateWithClanResponse";
    case EMsg.k_EMsgGSComputeNewPlayerCompatibility:
      return "k_EMsgGSComputeNewPlayerCompatibility";
    case EMsg.k_EMsgGSComputeNewPlayerCompatibilityResponse:
      return "k_EMsgGSComputeNewPlayerCompatibilityResponse";
    case EMsg.k_EMsgBaseAdmin:
      return "k_EMsgBaseAdmin";
    case EMsg.k_EMsgAdminCmd:
      return "k_EMsgAdminCmd";
    case EMsg.k_EMsgAdminCmdResponse:
      return "k_EMsgAdminCmdResponse";
    case EMsg.k_EMsgAdminLogListenRequest:
      return "k_EMsgAdminLogListenRequest";
    case EMsg.k_EMsgAdminLogEvent:
      return "k_EMsgAdminLogEvent";
    case EMsg.k_EMsgUniverseData:
      return "k_EMsgUniverseData";
    case EMsg.k_EMsgAdminSpew:
      return "k_EMsgAdminSpew";
    case EMsg.k_EMsgAdminConsoleTitle:
      return "k_EMsgAdminConsoleTitle";
    case EMsg.k_EMsgAdminGCSpew:
      return "k_EMsgAdminGCSpew";
    case EMsg.k_EMsgAdminGCCommand:
      return "k_EMsgAdminGCCommand";
    case EMsg.k_EMsgAdminGCGetCommandList:
      return "k_EMsgAdminGCGetCommandList";
    case EMsg.k_EMsgAdminGCGetCommandListResponse:
      return "k_EMsgAdminGCGetCommandListResponse";
    case EMsg.k_EMsgFBSConnectionData:
      return "k_EMsgFBSConnectionData";
    case EMsg.k_EMsgAdminMsgSpew:
      return "k_EMsgAdminMsgSpew";
    case EMsg.k_EMsgBaseFBS:
      return "k_EMsgBaseFBS";
    case EMsg.k_EMsgFBSReqVersion:
      return "k_EMsgFBSReqVersion";
    case EMsg.k_EMsgFBSVersionInfo:
      return "k_EMsgFBSVersionInfo";
    case EMsg.k_EMsgFBSForceRefresh:
      return "k_EMsgFBSForceRefresh";
    case EMsg.k_EMsgFBSForceBounce:
      return "k_EMsgFBSForceBounce";
    case EMsg.k_EMsgFBSDeployPackage:
      return "k_EMsgFBSDeployPackage";
    case EMsg.k_EMsgFBSDeployResponse:
      return "k_EMsgFBSDeployResponse";
    case EMsg.k_EMsgFBSUpdateBootstrapper:
      return "k_EMsgFBSUpdateBootstrapper";
    case EMsg.k_EMsgFBSSetState:
      return "k_EMsgFBSSetState";
    case EMsg.k_EMsgFBSApplyOSUpdates:
      return "k_EMsgFBSApplyOSUpdates";
    case EMsg.k_EMsgFBSRunCMDScript:
      return "k_EMsgFBSRunCMDScript";
    case EMsg.k_EMsgFBSRebootBox:
      return "k_EMsgFBSRebootBox";
    case EMsg.k_EMsgFBSSetBigBrotherMode:
      return "k_EMsgFBSSetBigBrotherMode";
    case EMsg.k_EMsgFBSMinidumpServer:
      return "k_EMsgFBSMinidumpServer";
    case EMsg.k_EMsgFBSDeployHotFixPackage:
      return "k_EMsgFBSDeployHotFixPackage";
    case EMsg.k_EMsgFBSDeployHotFixResponse:
      return "k_EMsgFBSDeployHotFixResponse";
    case EMsg.k_EMsgFBSDownloadHotFix:
      return "k_EMsgFBSDownloadHotFix";
    case EMsg.k_EMsgFBSDownloadHotFixResponse:
      return "k_EMsgFBSDownloadHotFixResponse";
    case EMsg.k_EMsgFBSUpdateTargetConfigFile:
      return "k_EMsgFBSUpdateTargetConfigFile";
    case EMsg.k_EMsgFBSApplyAccountCred:
      return "k_EMsgFBSApplyAccountCred";
    case EMsg.k_EMsgFBSApplyAccountCredResponse:
      return "k_EMsgFBSApplyAccountCredResponse";
    case EMsg.k_EMsgFBSSetShellCount:
      return "k_EMsgFBSSetShellCount";
    case EMsg.k_EMsgFBSTerminateShell:
      return "k_EMsgFBSTerminateShell";
    case EMsg.k_EMsgFBSQueryGMForRequest:
      return "k_EMsgFBSQueryGMForRequest";
    case EMsg.k_EMsgFBSQueryGMResponse:
      return "k_EMsgFBSQueryGMResponse";
    case EMsg.k_EMsgFBSTerminateZombies:
      return "k_EMsgFBSTerminateZombies";
    case EMsg.k_EMsgFBSInfoFromBootstrapper:
      return "k_EMsgFBSInfoFromBootstrapper";
    case EMsg.k_EMsgFBSRebootBoxResponse:
      return "k_EMsgFBSRebootBoxResponse";
    case EMsg.k_EMsgFBSBootstrapperPackageRequest:
      return "k_EMsgFBSBootstrapperPackageRequest";
    case EMsg.k_EMsgFBSBootstrapperPackageResponse:
      return "k_EMsgFBSBootstrapperPackageResponse";
    case EMsg.k_EMsgFBSBootstrapperGetPackageChunk:
      return "k_EMsgFBSBootstrapperGetPackageChunk";
    case EMsg.k_EMsgFBSBootstrapperGetPackageChunkResponse:
      return "k_EMsgFBSBootstrapperGetPackageChunkResponse";
    case EMsg.k_EMsgFBSBootstrapperPackageTransferProgress:
      return "k_EMsgFBSBootstrapperPackageTransferProgress";
    case EMsg.k_EMsgFBSRestartBootstrapper:
      return "k_EMsgFBSRestartBootstrapper";
    case EMsg.k_EMsgFBSPauseFrozenDumps:
      return "k_EMsgFBSPauseFrozenDumps";
    case EMsg.k_EMsgBaseFileXfer:
      return "k_EMsgBaseFileXfer";
    case EMsg.k_EMsgFileXferRequest:
      return "k_EMsgFileXferRequest";
    case EMsg.k_EMsgFileXferResponse:
      return "k_EMsgFileXferResponse";
    case EMsg.k_EMsgFileXferData:
      return "k_EMsgFileXferData";
    case EMsg.k_EMsgFileXferEnd:
      return "k_EMsgFileXferEnd";
    case EMsg.k_EMsgFileXferDataAck:
      return "k_EMsgFileXferDataAck";
    case EMsg.k_EMsgBaseChannelAuth:
      return "k_EMsgBaseChannelAuth";
    case EMsg.k_EMsgChannelAuthChallenge:
      return "k_EMsgChannelAuthChallenge";
    case EMsg.k_EMsgChannelAuthResponse:
      return "k_EMsgChannelAuthResponse";
    case EMsg.k_EMsgChannelAuthResult:
      return "k_EMsgChannelAuthResult";
    case EMsg.k_EMsgChannelEncryptRequest:
      return "k_EMsgChannelEncryptRequest";
    case EMsg.k_EMsgChannelEncryptResponse:
      return "k_EMsgChannelEncryptResponse";
    case EMsg.k_EMsgChannelEncryptResult:
      return "k_EMsgChannelEncryptResult";
    case EMsg.k_EMsgBaseBS:
      return "k_EMsgBaseBS";
    case EMsg.k_EMsgBSPurchaseStart:
      return "k_EMsgBSPurchaseStart";
    case EMsg.k_EMsgBSPurchaseResponse:
      return "k_EMsgBSPurchaseResponse";
    case EMsg.k_EMsgBSAuthenticateCCTrans:
      return "k_EMsgBSAuthenticateCCTrans";
    case EMsg.k_EMsgBSAuthenticateCCTransResponse:
      return "k_EMsgBSAuthenticateCCTransResponse";
    case EMsg.k_EMsgBSSettleComplete:
      return "k_EMsgBSSettleComplete";
    case EMsg.k_EMsgBSInitPayPalTxn:
      return "k_EMsgBSInitPayPalTxn";
    case EMsg.k_EMsgBSInitPayPalTxnResponse:
      return "k_EMsgBSInitPayPalTxnResponse";
    case EMsg.k_EMsgBSGetPayPalUserInfo:
      return "k_EMsgBSGetPayPalUserInfo";
    case EMsg.k_EMsgBSGetPayPalUserInfoResponse:
      return "k_EMsgBSGetPayPalUserInfoResponse";
    case EMsg.k_EMsgBSPaymentInstrBan:
      return "k_EMsgBSPaymentInstrBan";
    case EMsg.k_EMsgBSPaymentInstrBanResponse:
      return "k_EMsgBSPaymentInstrBanResponse";
    case EMsg.k_EMsgBSInitGCBankXferTxn:
      return "k_EMsgBSInitGCBankXferTxn";
    case EMsg.k_EMsgBSInitGCBankXferTxnResponse:
      return "k_EMsgBSInitGCBankXferTxnResponse";
    case EMsg.k_EMsgBSCommitGCTxn:
      return "k_EMsgBSCommitGCTxn";
    case EMsg.k_EMsgBSQueryTransactionStatus:
      return "k_EMsgBSQueryTransactionStatus";
    case EMsg.k_EMsgBSQueryTransactionStatusResponse:
      return "k_EMsgBSQueryTransactionStatusResponse";
    case EMsg.k_EMsgBSQueryTxnExtendedInfo:
      return "k_EMsgBSQueryTxnExtendedInfo";
    case EMsg.k_EMsgBSQueryTxnExtendedInfoResponse:
      return "k_EMsgBSQueryTxnExtendedInfoResponse";
    case EMsg.k_EMsgBSUpdateConversionRates:
      return "k_EMsgBSUpdateConversionRates";
    case EMsg.k_EMsgBSPurchaseRunFraudChecks:
      return "k_EMsgBSPurchaseRunFraudChecks";
    case EMsg.k_EMsgBSPurchaseRunFraudChecksResponse:
      return "k_EMsgBSPurchaseRunFraudChecksResponse";
    case EMsg.k_EMsgBSQueryBankInformation:
      return "k_EMsgBSQueryBankInformation";
    case EMsg.k_EMsgBSQueryBankInformationResponse:
      return "k_EMsgBSQueryBankInformationResponse";
    case EMsg.k_EMsgBSValidateXsollaSignature:
      return "k_EMsgBSValidateXsollaSignature";
    case EMsg.k_EMsgBSValidateXsollaSignatureResponse:
      return "k_EMsgBSValidateXsollaSignatureResponse";
    case EMsg.k_EMsgBSQiwiWalletInvoice:
      return "k_EMsgBSQiwiWalletInvoice";
    case EMsg.k_EMsgBSQiwiWalletInvoiceResponse:
      return "k_EMsgBSQiwiWalletInvoiceResponse";
    case EMsg.k_EMsgBSUpdateInventoryFromProPack:
      return "k_EMsgBSUpdateInventoryFromProPack";
    case EMsg.k_EMsgBSUpdateInventoryFromProPackResponse:
      return "k_EMsgBSUpdateInventoryFromProPackResponse";
    case EMsg.k_EMsgBSSendShippingRequest:
      return "k_EMsgBSSendShippingRequest";
    case EMsg.k_EMsgBSSendShippingRequestResponse:
      return "k_EMsgBSSendShippingRequestResponse";
    case EMsg.k_EMsgBSGetProPackOrderStatus:
      return "k_EMsgBSGetProPackOrderStatus";
    case EMsg.k_EMsgBSGetProPackOrderStatusResponse:
      return "k_EMsgBSGetProPackOrderStatusResponse";
    case EMsg.k_EMsgBSCheckJobRunning:
      return "k_EMsgBSCheckJobRunning";
    case EMsg.k_EMsgBSCheckJobRunningResponse:
      return "k_EMsgBSCheckJobRunningResponse";
    case EMsg.k_EMsgBSResetPackagePurchaseRateLimit:
      return "k_EMsgBSResetPackagePurchaseRateLimit";
    case EMsg.k_EMsgBSResetPackagePurchaseRateLimitResponse:
      return "k_EMsgBSResetPackagePurchaseRateLimitResponse";
    case EMsg.k_EMsgBSUpdatePaymentData:
      return "k_EMsgBSUpdatePaymentData";
    case EMsg.k_EMsgBSUpdatePaymentDataResponse:
      return "k_EMsgBSUpdatePaymentDataResponse";
    case EMsg.k_EMsgBSGetBillingAddress:
      return "k_EMsgBSGetBillingAddress";
    case EMsg.k_EMsgBSGetBillingAddressResponse:
      return "k_EMsgBSGetBillingAddressResponse";
    case EMsg.k_EMsgBSGetCreditCardInfo:
      return "k_EMsgBSGetCreditCardInfo";
    case EMsg.k_EMsgBSGetCreditCardInfoResponse:
      return "k_EMsgBSGetCreditCardInfoResponse";
    case EMsg.k_EMsgBSRemoveExpiredPaymentData:
      return "k_EMsgBSRemoveExpiredPaymentData";
    case EMsg.k_EMsgBSRemoveExpiredPaymentDataResponse:
      return "k_EMsgBSRemoveExpiredPaymentDataResponse";
    case EMsg.k_EMsgBSConvertToCurrentKeys:
      return "k_EMsgBSConvertToCurrentKeys";
    case EMsg.k_EMsgBSConvertToCurrentKeysResponse:
      return "k_EMsgBSConvertToCurrentKeysResponse";
    case EMsg.k_EMsgBSInitPurchase:
      return "k_EMsgBSInitPurchase";
    case EMsg.k_EMsgBSInitPurchaseResponse:
      return "k_EMsgBSInitPurchaseResponse";
    case EMsg.k_EMsgBSCompletePurchase:
      return "k_EMsgBSCompletePurchase";
    case EMsg.k_EMsgBSCompletePurchaseResponse:
      return "k_EMsgBSCompletePurchaseResponse";
    case EMsg.k_EMsgBSPruneCardUsageStats:
      return "k_EMsgBSPruneCardUsageStats";
    case EMsg.k_EMsgBSPruneCardUsageStatsResponse:
      return "k_EMsgBSPruneCardUsageStatsResponse";
    case EMsg.k_EMsgBSStoreBankInformation:
      return "k_EMsgBSStoreBankInformation";
    case EMsg.k_EMsgBSStoreBankInformationResponse:
      return "k_EMsgBSStoreBankInformationResponse";
    case EMsg.k_EMsgBSVerifyPOSAKey:
      return "k_EMsgBSVerifyPOSAKey";
    case EMsg.k_EMsgBSVerifyPOSAKeyResponse:
      return "k_EMsgBSVerifyPOSAKeyResponse";
    case EMsg.k_EMsgBSReverseRedeemPOSAKey:
      return "k_EMsgBSReverseRedeemPOSAKey";
    case EMsg.k_EMsgBSReverseRedeemPOSAKeyResponse:
      return "k_EMsgBSReverseRedeemPOSAKeyResponse";
    case EMsg.k_EMsgBSQueryFindCreditCard:
      return "k_EMsgBSQueryFindCreditCard";
    case EMsg.k_EMsgBSQueryFindCreditCardResponse:
      return "k_EMsgBSQueryFindCreditCardResponse";
    case EMsg.k_EMsgBSStatusInquiryPOSAKey:
      return "k_EMsgBSStatusInquiryPOSAKey";
    case EMsg.k_EMsgBSStatusInquiryPOSAKeyResponse:
      return "k_EMsgBSStatusInquiryPOSAKeyResponse";
    case EMsg.k_EMsgBSBoaCompraConfirmProductDelivery:
      return "k_EMsgBSBoaCompraConfirmProductDelivery";
    case EMsg.k_EMsgBSBoaCompraConfirmProductDeliveryResponse:
      return "k_EMsgBSBoaCompraConfirmProductDeliveryResponse";
    case EMsg.k_EMsgBSGenerateBoaCompraMD5:
      return "k_EMsgBSGenerateBoaCompraMD5";
    case EMsg.k_EMsgBSGenerateBoaCompraMD5Response:
      return "k_EMsgBSGenerateBoaCompraMD5Response";
    case EMsg.k_EMsgBSCommitWPTxn:
      return "k_EMsgBSCommitWPTxn";
    case EMsg.k_EMsgBSCommitAdyenTxn:
      return "k_EMsgBSCommitAdyenTxn";
    case EMsg.k_EMsgBaseATS:
      return "k_EMsgBaseATS";
    case EMsg.k_EMsgATSStartStressTest:
      return "k_EMsgATSStartStressTest";
    case EMsg.k_EMsgATSStopStressTest:
      return "k_EMsgATSStopStressTest";
    case EMsg.k_EMsgATSRunFailServerTest:
      return "k_EMsgATSRunFailServerTest";
    case EMsg.k_EMsgATSUFSPerfTestTask:
      return "k_EMsgATSUFSPerfTestTask";
    case EMsg.k_EMsgATSUFSPerfTestResponse:
      return "k_EMsgATSUFSPerfTestResponse";
    case EMsg.k_EMsgATSCycleTCM:
      return "k_EMsgATSCycleTCM";
    case EMsg.k_EMsgATSInitDRMSStressTest:
      return "k_EMsgATSInitDRMSStressTest";
    case EMsg.k_EMsgATSCallTest:
      return "k_EMsgATSCallTest";
    case EMsg.k_EMsgATSCallTestReply:
      return "k_EMsgATSCallTestReply";
    case EMsg.k_EMsgATSStartExternalStress:
      return "k_EMsgATSStartExternalStress";
    case EMsg.k_EMsgATSExternalStressJobStart:
      return "k_EMsgATSExternalStressJobStart";
    case EMsg.k_EMsgATSExternalStressJobQueued:
      return "k_EMsgATSExternalStressJobQueued";
    case EMsg.k_EMsgATSExternalStressJobRunning:
      return "k_EMsgATSExternalStressJobRunning";
    case EMsg.k_EMsgATSExternalStressJobStopped:
      return "k_EMsgATSExternalStressJobStopped";
    case EMsg.k_EMsgATSExternalStressJobStopAll:
      return "k_EMsgATSExternalStressJobStopAll";
    case EMsg.k_EMsgATSExternalStressActionResult:
      return "k_EMsgATSExternalStressActionResult";
    case EMsg.k_EMsgATSStarted:
      return "k_EMsgATSStarted";
    case EMsg.k_EMsgATSCSPerfTestTask:
      return "k_EMsgATSCSPerfTestTask";
    case EMsg.k_EMsgATSCSPerfTestResponse:
      return "k_EMsgATSCSPerfTestResponse";
    case EMsg.k_EMsgBaseDP:
      return "k_EMsgBaseDP";
    case EMsg.k_EMsgDPSetPublishingState:
      return "k_EMsgDPSetPublishingState";
    case EMsg.k_EMsgDPUniquePlayersStat:
      return "k_EMsgDPUniquePlayersStat";
    case EMsg.k_EMsgDPStreamingUniquePlayersStat:
      return "k_EMsgDPStreamingUniquePlayersStat";
    case EMsg.k_EMsgDPBlockingStats:
      return "k_EMsgDPBlockingStats";
    case EMsg.k_EMsgDPNatTraversalStats:
      return "k_EMsgDPNatTraversalStats";
    case EMsg.k_EMsgDPCloudStats:
      return "k_EMsgDPCloudStats";
    case EMsg.k_EMsgDPGetPlayerCount:
      return "k_EMsgDPGetPlayerCount";
    case EMsg.k_EMsgDPGetPlayerCountResponse:
      return "k_EMsgDPGetPlayerCountResponse";
    case EMsg.k_EMsgDPGameServersPlayersStats:
      return "k_EMsgDPGameServersPlayersStats";
    case EMsg.k_EMsgClientDPCheckSpecialSurvey:
      return "k_EMsgClientDPCheckSpecialSurvey";
    case EMsg.k_EMsgClientDPCheckSpecialSurveyResponse:
      return "k_EMsgClientDPCheckSpecialSurveyResponse";
    case EMsg.k_EMsgClientDPSendSpecialSurveyResponse:
      return "k_EMsgClientDPSendSpecialSurveyResponse";
    case EMsg.k_EMsgClientDPSendSpecialSurveyResponseReply:
      return "k_EMsgClientDPSendSpecialSurveyResponseReply";
    case EMsg.k_EMsgDPStoreSaleStatistics:
      return "k_EMsgDPStoreSaleStatistics";
    case EMsg.k_EMsgDPPartnerMicroTxns:
      return "k_EMsgDPPartnerMicroTxns";
    case EMsg.k_EMsgDPPartnerMicroTxnsResponse:
      return "k_EMsgDPPartnerMicroTxnsResponse";
    case EMsg.k_EMsgDPVRUniquePlayersStat:
      return "k_EMsgDPVRUniquePlayersStat";
    case EMsg.k_EMsgBaseCM:
      return "k_EMsgBaseCM";
    case EMsg.k_EMsgCMSetAllowState:
      return "k_EMsgCMSetAllowState";
    case EMsg.k_EMsgCMSpewAllowState:
      return "k_EMsgCMSpewAllowState";
    case EMsg.k_EMsgCMSessionRejected:
      return "k_EMsgCMSessionRejected";
    case EMsg.k_EMsgCMSetSecrets:
      return "k_EMsgCMSetSecrets";
    case EMsg.k_EMsgCMGetSecrets:
      return "k_EMsgCMGetSecrets";
    case EMsg.k_EMsgBaseGC:
      return "k_EMsgBaseGC";
    case EMsg.k_EMsgGCCmdRevive:
      return "k_EMsgGCCmdRevive";
    case EMsg.k_EMsgGCCmdDown:
      return "k_EMsgGCCmdDown";
    case EMsg.k_EMsgGCCmdDeploy:
      return "k_EMsgGCCmdDeploy";
    case EMsg.k_EMsgGCCmdDeployResponse:
      return "k_EMsgGCCmdDeployResponse";
    case EMsg.k_EMsgGCCmdSwitch:
      return "k_EMsgGCCmdSwitch";
    case EMsg.k_EMsgAMRefreshSessions:
      return "k_EMsgAMRefreshSessions";
    case EMsg.k_EMsgGCAchievementAwarded:
      return "k_EMsgGCAchievementAwarded";
    case EMsg.k_EMsgGCSystemMessage:
      return "k_EMsgGCSystemMessage";
    case EMsg.k_EMsgGCCmdStatus:
      return "k_EMsgGCCmdStatus";
    case EMsg.k_EMsgGCRegisterWebInterfaces_Deprecated:
      return "k_EMsgGCRegisterWebInterfaces_Deprecated";
    case EMsg.k_EMsgGCGetAccountDetails_DEPRECATED:
      return "k_EMsgGCGetAccountDetails_DEPRECATED";
    case EMsg.k_EMsgGCInterAppMessage:
      return "k_EMsgGCInterAppMessage";
    case EMsg.k_EMsgGCGetEmailTemplate:
      return "k_EMsgGCGetEmailTemplate";
    case EMsg.k_EMsgGCGetEmailTemplateResponse:
      return "k_EMsgGCGetEmailTemplateResponse";
    case EMsg.k_EMsgGCHRelay:
      return "k_EMsgGCHRelay";
    case EMsg.k_EMsgGCHRelayToClient:
      return "k_EMsgGCHRelayToClient";
    case EMsg.k_EMsgGCHUpdateSession:
      return "k_EMsgGCHUpdateSession";
    case EMsg.k_EMsgGCHRequestUpdateSession:
      return "k_EMsgGCHRequestUpdateSession";
    case EMsg.k_EMsgGCHRequestStatus:
      return "k_EMsgGCHRequestStatus";
    case EMsg.k_EMsgGCHRequestStatusResponse:
      return "k_EMsgGCHRequestStatusResponse";
    case EMsg.k_EMsgGCHAccountVacStatusChange:
      return "k_EMsgGCHAccountVacStatusChange";
    case EMsg.k_EMsgGCHSpawnGC:
      return "k_EMsgGCHSpawnGC";
    case EMsg.k_EMsgGCHSpawnGCResponse:
      return "k_EMsgGCHSpawnGCResponse";
    case EMsg.k_EMsgGCHKillGC:
      return "k_EMsgGCHKillGC";
    case EMsg.k_EMsgGCHKillGCResponse:
      return "k_EMsgGCHKillGCResponse";
    case EMsg.k_EMsgGCHAccountTradeBanStatusChange:
      return "k_EMsgGCHAccountTradeBanStatusChange";
    case EMsg.k_EMsgGCHAccountLockStatusChange:
      return "k_EMsgGCHAccountLockStatusChange";
    case EMsg.k_EMsgGCHVacVerificationChange:
      return "k_EMsgGCHVacVerificationChange";
    case EMsg.k_EMsgGCHAccountPhoneNumberChange:
      return "k_EMsgGCHAccountPhoneNumberChange";
    case EMsg.k_EMsgGCHAccountTwoFactorChange:
      return "k_EMsgGCHAccountTwoFactorChange";
    case EMsg.k_EMsgGCHInviteUserToLobby:
      return "k_EMsgGCHInviteUserToLobby";
    case EMsg.k_EMsgGCHUpdateMultipleSessions:
      return "k_EMsgGCHUpdateMultipleSessions";
    case EMsg.k_EMsgGCHMarkAppSessionsAuthoritative:
      return "k_EMsgGCHMarkAppSessionsAuthoritative";
    case EMsg.k_EMsgGCHRecurringSubscriptionStatusChange:
      return "k_EMsgGCHRecurringSubscriptionStatusChange";
    case EMsg.k_EMsgGCHAppCheersReceived:
      return "k_EMsgGCHAppCheersReceived";
    case EMsg.k_EMsgGCHAppCheersGetAllowedTypes:
      return "k_EMsgGCHAppCheersGetAllowedTypes";
    case EMsg.k_EMsgGCHAppCheersGetAllowedTypesResponse:
      return "k_EMsgGCHAppCheersGetAllowedTypesResponse";
    case EMsg.k_EMsgGCHRoutingRulesFromGCHtoGM:
      return "k_EMsgGCHRoutingRulesFromGCHtoGM";
    case EMsg.k_EMsgGCHRoutingRulesToGCHfromGM:
      return "k_EMsgGCHRoutingRulesToGCHfromGM";
    case EMsg.k_EMsgUpdateCMMessageRateRules:
      return "k_EMsgUpdateCMMessageRateRules";
    case EMsg.k_EMsgBaseP2P:
      return "k_EMsgBaseP2P";
    case EMsg.k_EMsgP2PIntroducerMessage:
      return "k_EMsgP2PIntroducerMessage";
    case EMsg.k_EMsgBaseSM:
      return "k_EMsgBaseSM";
    case EMsg.k_EMsgSMExpensiveReport:
      return "k_EMsgSMExpensiveReport";
    case EMsg.k_EMsgSMHourlyReport:
      return "k_EMsgSMHourlyReport";
    case EMsg.k_EMsgSMPartitionRenames:
      return "k_EMsgSMPartitionRenames";
    case EMsg.k_EMsgSMMonitorSpace:
      return "k_EMsgSMMonitorSpace";
    case EMsg.k_EMsgSMTestNextBuildSchemaConversion:
      return "k_EMsgSMTestNextBuildSchemaConversion";
    case EMsg.k_EMsgSMTestNextBuildSchemaConversionResponse:
      return "k_EMsgSMTestNextBuildSchemaConversionResponse";
    case EMsg.k_EMsgBaseTest:
      return "k_EMsgBaseTest";
    case EMsg.k_EMsgFailServer:
      return "k_EMsgFailServer";
    case EMsg.k_EMsgJobHeartbeatTest:
      return "k_EMsgJobHeartbeatTest";
    case EMsg.k_EMsgJobHeartbeatTestResponse:
      return "k_EMsgJobHeartbeatTestResponse";
    case EMsg.k_EMsgBaseFTSRange:
      return "k_EMsgBaseFTSRange";
    case EMsg.k_EMsgBaseCCSRange:
      return "k_EMsgBaseCCSRange";
    case EMsg.k_EMsgCCSDeleteAllCommentsByAuthor:
      return "k_EMsgCCSDeleteAllCommentsByAuthor";
    case EMsg.k_EMsgCCSDeleteAllCommentsByAuthorResponse:
      return "k_EMsgCCSDeleteAllCommentsByAuthorResponse";
    case EMsg.k_EMsgBaseLBSRange:
      return "k_EMsgBaseLBSRange";
    case EMsg.k_EMsgLBSSetScore:
      return "k_EMsgLBSSetScore";
    case EMsg.k_EMsgLBSSetScoreResponse:
      return "k_EMsgLBSSetScoreResponse";
    case EMsg.k_EMsgLBSFindOrCreateLB:
      return "k_EMsgLBSFindOrCreateLB";
    case EMsg.k_EMsgLBSFindOrCreateLBResponse:
      return "k_EMsgLBSFindOrCreateLBResponse";
    case EMsg.k_EMsgLBSGetLBEntries:
      return "k_EMsgLBSGetLBEntries";
    case EMsg.k_EMsgLBSGetLBEntriesResponse:
      return "k_EMsgLBSGetLBEntriesResponse";
    case EMsg.k_EMsgLBSGetLBList:
      return "k_EMsgLBSGetLBList";
    case EMsg.k_EMsgLBSGetLBListResponse:
      return "k_EMsgLBSGetLBListResponse";
    case EMsg.k_EMsgLBSSetLBDetails:
      return "k_EMsgLBSSetLBDetails";
    case EMsg.k_EMsgLBSDeleteLB:
      return "k_EMsgLBSDeleteLB";
    case EMsg.k_EMsgLBSDeleteLBEntry:
      return "k_EMsgLBSDeleteLBEntry";
    case EMsg.k_EMsgLBSResetLB:
      return "k_EMsgLBSResetLB";
    case EMsg.k_EMsgLBSResetLBResponse:
      return "k_EMsgLBSResetLBResponse";
    case EMsg.k_EMsgLBSDeleteLBResponse:
      return "k_EMsgLBSDeleteLBResponse";
    case EMsg.k_EMsgBaseOGS:
      return "k_EMsgBaseOGS";
    case EMsg.k_EMsgOGSBeginSession:
      return "k_EMsgOGSBeginSession";
    case EMsg.k_EMsgOGSBeginSessionResponse:
      return "k_EMsgOGSBeginSessionResponse";
    case EMsg.k_EMsgOGSEndSession:
      return "k_EMsgOGSEndSession";
    case EMsg.k_EMsgOGSEndSessionResponse:
      return "k_EMsgOGSEndSessionResponse";
    case EMsg.k_EMsgOGSWriteAppSessionRow:
      return "k_EMsgOGSWriteAppSessionRow";
    case EMsg.k_EMsgBaseBRP:
      return "k_EMsgBaseBRP";
    case EMsg.k_EMsgBRPPostTransactionTax:
      return "k_EMsgBRPPostTransactionTax";
    case EMsg.k_EMsgBRPPostTransactionTaxResponse:
      return "k_EMsgBRPPostTransactionTaxResponse";
    case EMsg.k_EMsgBaseAMRange2:
      return "k_EMsgBaseAMRange2";
    case EMsg.k_EMsgAMCreateChat:
      return "k_EMsgAMCreateChat";
    case EMsg.k_EMsgAMCreateChatResponse:
      return "k_EMsgAMCreateChatResponse";
    case EMsg.k_EMsgAMSetProfileURL:
      return "k_EMsgAMSetProfileURL";
    case EMsg.k_EMsgAMGetAccountEmailAddress:
      return "k_EMsgAMGetAccountEmailAddress";
    case EMsg.k_EMsgAMGetAccountEmailAddressResponse:
      return "k_EMsgAMGetAccountEmailAddressResponse";
    case EMsg.k_EMsgAMRequestClanData:
      return "k_EMsgAMRequestClanData";
    case EMsg.k_EMsgAMRouteToClients:
      return "k_EMsgAMRouteToClients";
    case EMsg.k_EMsgAMLeaveClan:
      return "k_EMsgAMLeaveClan";
    case EMsg.k_EMsgAMClanPermissions:
      return "k_EMsgAMClanPermissions";
    case EMsg.k_EMsgAMClanPermissionsResponse:
      return "k_EMsgAMClanPermissionsResponse";
    case EMsg.k_EMsgAMCreateClanEventDummyForRateLimiting:
      return "k_EMsgAMCreateClanEventDummyForRateLimiting";
    case EMsg.k_EMsgAMUpdateClanEventDummyForRateLimiting:
      return "k_EMsgAMUpdateClanEventDummyForRateLimiting";
    case EMsg.k_EMsgAMSetClanPermissionSettings:
      return "k_EMsgAMSetClanPermissionSettings";
    case EMsg.k_EMsgAMSetClanPermissionSettingsResponse:
      return "k_EMsgAMSetClanPermissionSettingsResponse";
    case EMsg.k_EMsgAMGetClanPermissionSettings:
      return "k_EMsgAMGetClanPermissionSettings";
    case EMsg.k_EMsgAMGetClanPermissionSettingsResponse:
      return "k_EMsgAMGetClanPermissionSettingsResponse";
    case EMsg.k_EMsgAMPublishChatRoomInfo:
      return "k_EMsgAMPublishChatRoomInfo";
    case EMsg.k_EMsgClientChatRoomInfo:
      return "k_EMsgClientChatRoomInfo";
    case EMsg.k_EMsgAMGetClanHistory:
      return "k_EMsgAMGetClanHistory";
    case EMsg.k_EMsgAMGetClanHistoryResponse:
      return "k_EMsgAMGetClanHistoryResponse";
    case EMsg.k_EMsgAMGetClanPermissionBits:
      return "k_EMsgAMGetClanPermissionBits";
    case EMsg.k_EMsgAMGetClanPermissionBitsResponse:
      return "k_EMsgAMGetClanPermissionBitsResponse";
    case EMsg.k_EMsgAMSetClanPermissionBits:
      return "k_EMsgAMSetClanPermissionBits";
    case EMsg.k_EMsgAMSetClanPermissionBitsResponse:
      return "k_EMsgAMSetClanPermissionBitsResponse";
    case EMsg.k_EMsgAMSessionInfoRequest:
      return "k_EMsgAMSessionInfoRequest";
    case EMsg.k_EMsgAMSessionInfoResponse:
      return "k_EMsgAMSessionInfoResponse";
    case EMsg.k_EMsgAMValidateWGToken:
      return "k_EMsgAMValidateWGToken";
    case EMsg.k_EMsgAMGetClanRank:
      return "k_EMsgAMGetClanRank";
    case EMsg.k_EMsgAMGetClanRankResponse:
      return "k_EMsgAMGetClanRankResponse";
    case EMsg.k_EMsgAMSetClanRank:
      return "k_EMsgAMSetClanRank";
    case EMsg.k_EMsgAMSetClanRankResponse:
      return "k_EMsgAMSetClanRankResponse";
    case EMsg.k_EMsgAMGetClanPOTW:
      return "k_EMsgAMGetClanPOTW";
    case EMsg.k_EMsgAMGetClanPOTWResponse:
      return "k_EMsgAMGetClanPOTWResponse";
    case EMsg.k_EMsgAMSetClanPOTW:
      return "k_EMsgAMSetClanPOTW";
    case EMsg.k_EMsgAMSetClanPOTWResponse:
      return "k_EMsgAMSetClanPOTWResponse";
    case EMsg.k_EMsgAMDumpUser:
      return "k_EMsgAMDumpUser";
    case EMsg.k_EMsgAMKickUserFromClan:
      return "k_EMsgAMKickUserFromClan";
    case EMsg.k_EMsgAMAddFounderToClan:
      return "k_EMsgAMAddFounderToClan";
    case EMsg.k_EMsgAMValidateWGTokenResponse:
      return "k_EMsgAMValidateWGTokenResponse";
    case EMsg.k_EMsgAMSetAccountDetails:
      return "k_EMsgAMSetAccountDetails";
    case EMsg.k_EMsgAMGetChatBanList:
      return "k_EMsgAMGetChatBanList";
    case EMsg.k_EMsgAMGetChatBanListResponse:
      return "k_EMsgAMGetChatBanListResponse";
    case EMsg.k_EMsgAMUnBanFromChat:
      return "k_EMsgAMUnBanFromChat";
    case EMsg.k_EMsgAMSetClanDetails:
      return "k_EMsgAMSetClanDetails";
    case EMsg.k_EMsgUGSGetUserGameStats:
      return "k_EMsgUGSGetUserGameStats";
    case EMsg.k_EMsgUGSGetUserGameStatsResponse:
      return "k_EMsgUGSGetUserGameStatsResponse";
    case EMsg.k_EMsgAMCheckClanMembership:
      return "k_EMsgAMCheckClanMembership";
    case EMsg.k_EMsgAMGetClanMembers:
      return "k_EMsgAMGetClanMembers";
    case EMsg.k_EMsgAMGetClanMembersResponse:
      return "k_EMsgAMGetClanMembersResponse";
    case EMsg.k_EMsgAMNotifyChatOfClanChange:
      return "k_EMsgAMNotifyChatOfClanChange";
    case EMsg.k_EMsgAMResubmitPurchase:
      return "k_EMsgAMResubmitPurchase";
    case EMsg.k_EMsgAMAddFriend:
      return "k_EMsgAMAddFriend";
    case EMsg.k_EMsgAMAddFriendResponse:
      return "k_EMsgAMAddFriendResponse";
    case EMsg.k_EMsgAMRemoveFriend:
      return "k_EMsgAMRemoveFriend";
    case EMsg.k_EMsgAMDumpClan:
      return "k_EMsgAMDumpClan";
    case EMsg.k_EMsgAMChangeClanOwner:
      return "k_EMsgAMChangeClanOwner";
    case EMsg.k_EMsgAMCancelEasyCollect:
      return "k_EMsgAMCancelEasyCollect";
    case EMsg.k_EMsgAMCancelEasyCollectResponse:
      return "k_EMsgAMCancelEasyCollectResponse";
    case EMsg.k_EMsgAMClansInCommon:
      return "k_EMsgAMClansInCommon";
    case EMsg.k_EMsgAMClansInCommonResponse:
      return "k_EMsgAMClansInCommonResponse";
    case EMsg.k_EMsgAMIsValidAccountID:
      return "k_EMsgAMIsValidAccountID";
    case EMsg.k_EMsgAMWipeFriendsList:
      return "k_EMsgAMWipeFriendsList";
    case EMsg.k_EMsgAMSetIgnored:
      return "k_EMsgAMSetIgnored";
    case EMsg.k_EMsgAMClansInCommonCountResponse:
      return "k_EMsgAMClansInCommonCountResponse";
    case EMsg.k_EMsgAMFriendsList:
      return "k_EMsgAMFriendsList";
    case EMsg.k_EMsgAMFriendsListResponse:
      return "k_EMsgAMFriendsListResponse";
    case EMsg.k_EMsgAMFriendsInCommon:
      return "k_EMsgAMFriendsInCommon";
    case EMsg.k_EMsgAMFriendsInCommonResponse:
      return "k_EMsgAMFriendsInCommonResponse";
    case EMsg.k_EMsgAMFriendsInCommonCountResponse:
      return "k_EMsgAMFriendsInCommonCountResponse";
    case EMsg.k_EMsgAMClansInCommonCount:
      return "k_EMsgAMClansInCommonCount";
    case EMsg.k_EMsgAMChallengeVerdict:
      return "k_EMsgAMChallengeVerdict";
    case EMsg.k_EMsgAMChallengeNotification:
      return "k_EMsgAMChallengeNotification";
    case EMsg.k_EMsgAMFindGSByIP:
      return "k_EMsgAMFindGSByIP";
    case EMsg.k_EMsgAMFoundGSByIP:
      return "k_EMsgAMFoundGSByIP";
    case EMsg.k_EMsgAMGiftRevoked:
      return "k_EMsgAMGiftRevoked";
    case EMsg.k_EMsgAMUserClanList:
      return "k_EMsgAMUserClanList";
    case EMsg.k_EMsgAMUserClanListResponse:
      return "k_EMsgAMUserClanListResponse";
    case EMsg.k_EMsgAMGetAccountDetails2:
      return "k_EMsgAMGetAccountDetails2";
    case EMsg.k_EMsgAMGetAccountDetailsResponse2:
      return "k_EMsgAMGetAccountDetailsResponse2";
    case EMsg.k_EMsgAMSetCommunityProfileSettings:
      return "k_EMsgAMSetCommunityProfileSettings";
    case EMsg.k_EMsgAMSetCommunityProfileSettingsResponse:
      return "k_EMsgAMSetCommunityProfileSettingsResponse";
    case EMsg.k_EMsgAMGetCommunityPrivacyState:
      return "k_EMsgAMGetCommunityPrivacyState";
    case EMsg.k_EMsgAMGetCommunityPrivacyStateResponse:
      return "k_EMsgAMGetCommunityPrivacyStateResponse";
    case EMsg.k_EMsgAMCheckClanInviteRateLimiting:
      return "k_EMsgAMCheckClanInviteRateLimiting";
    case EMsg.k_EMsgUGSGetUserAchievementStatus:
      return "k_EMsgUGSGetUserAchievementStatus";
    case EMsg.k_EMsgAMGetIgnored:
      return "k_EMsgAMGetIgnored";
    case EMsg.k_EMsgAMGetIgnoredResponse:
      return "k_EMsgAMGetIgnoredResponse";
    case EMsg.k_EMsgAMSetIgnoredResponse:
      return "k_EMsgAMSetIgnoredResponse";
    case EMsg.k_EMsgAMSetFriendRelationshipNone:
      return "k_EMsgAMSetFriendRelationshipNone";
    case EMsg.k_EMsgAMGetFriendRelationship:
      return "k_EMsgAMGetFriendRelationship";
    case EMsg.k_EMsgAMGetFriendRelationshipResponse:
      return "k_EMsgAMGetFriendRelationshipResponse";
    case EMsg.k_EMsgAMServiceModulesCache:
      return "k_EMsgAMServiceModulesCache";
    case EMsg.k_EMsgAMServiceModulesCall:
      return "k_EMsgAMServiceModulesCall";
    case EMsg.k_EMsgAMServiceModulesCallResponse:
      return "k_EMsgAMServiceModulesCallResponse";
    case EMsg.k_EMsgCommunityAddFriendNews:
      return "k_EMsgCommunityAddFriendNews";
    case EMsg.k_EMsgAMFindClanUser:
      return "k_EMsgAMFindClanUser";
    case EMsg.k_EMsgAMFindClanUserResponse:
      return "k_EMsgAMFindClanUserResponse";
    case EMsg.k_EMsgAMBanFromChat:
      return "k_EMsgAMBanFromChat";
    case EMsg.k_EMsgAMGetUserNewsSubscriptions:
      return "k_EMsgAMGetUserNewsSubscriptions";
    case EMsg.k_EMsgAMGetUserNewsSubscriptionsResponse:
      return "k_EMsgAMGetUserNewsSubscriptionsResponse";
    case EMsg.k_EMsgAMSetUserNewsSubscriptions:
      return "k_EMsgAMSetUserNewsSubscriptions";
    case EMsg.k_EMsgAMSendQueuedEmails:
      return "k_EMsgAMSendQueuedEmails";
    case EMsg.k_EMsgAMSetLicenseFlags:
      return "k_EMsgAMSetLicenseFlags";
    case EMsg.k_EMsgCommunityDeleteUserNews:
      return "k_EMsgCommunityDeleteUserNews";
    case EMsg.k_EMsgAMGetAccountStatus:
      return "k_EMsgAMGetAccountStatus";
    case EMsg.k_EMsgAMGetAccountStatusResponse:
      return "k_EMsgAMGetAccountStatusResponse";
    case EMsg.k_EMsgAMEditBanReason:
      return "k_EMsgAMEditBanReason";
    case EMsg.k_EMsgAMCheckClanMembershipResponse:
      return "k_EMsgAMCheckClanMembershipResponse";
    case EMsg.k_EMsgAMProbeClanMembershipList:
      return "k_EMsgAMProbeClanMembershipList";
    case EMsg.k_EMsgAMProbeClanMembershipListResponse:
      return "k_EMsgAMProbeClanMembershipListResponse";
    case EMsg.k_EMsgUGSGetUserAchievementStatusResponse:
      return "k_EMsgUGSGetUserAchievementStatusResponse";
    case EMsg.k_EMsgAMGetFriendsLobbies:
      return "k_EMsgAMGetFriendsLobbies";
    case EMsg.k_EMsgAMGetFriendsLobbiesResponse:
      return "k_EMsgAMGetFriendsLobbiesResponse";
    case EMsg.k_EMsgAMGetUserFriendNewsResponse:
      return "k_EMsgAMGetUserFriendNewsResponse";
    case EMsg.k_EMsgCommunityGetUserFriendNews:
      return "k_EMsgCommunityGetUserFriendNews";
    case EMsg.k_EMsgAMGetUserClansNewsResponse:
      return "k_EMsgAMGetUserClansNewsResponse";
    case EMsg.k_EMsgAMGetUserClansNews:
      return "k_EMsgAMGetUserClansNews";
    case EMsg.k_EMsgAMGetPreviousCBAccount:
      return "k_EMsgAMGetPreviousCBAccount";
    case EMsg.k_EMsgAMGetPreviousCBAccountResponse:
      return "k_EMsgAMGetPreviousCBAccountResponse";
    case EMsg.k_EMsgAMGetUserLicenseHistory:
      return "k_EMsgAMGetUserLicenseHistory";
    case EMsg.k_EMsgAMGetUserLicenseHistoryResponse:
      return "k_EMsgAMGetUserLicenseHistoryResponse";
    case EMsg.k_EMsgAMSupportChangePassword:
      return "k_EMsgAMSupportChangePassword";
    case EMsg.k_EMsgAMSupportChangeEmail:
      return "k_EMsgAMSupportChangeEmail";
    case EMsg.k_EMsgAMResetUserVerificationGSByIP:
      return "k_EMsgAMResetUserVerificationGSByIP";
    case EMsg.k_EMsgAMUpdateGSPlayStats:
      return "k_EMsgAMUpdateGSPlayStats";
    case EMsg.k_EMsgAMSupportEnableOrDisable:
      return "k_EMsgAMSupportEnableOrDisable";
    case EMsg.k_EMsgAMGetPurchaseStatus:
      return "k_EMsgAMGetPurchaseStatus";
    case EMsg.k_EMsgAMSupportIsAccountEnabled:
      return "k_EMsgAMSupportIsAccountEnabled";
    case EMsg.k_EMsgAMSupportIsAccountEnabledResponse:
      return "k_EMsgAMSupportIsAccountEnabledResponse";
    case EMsg.k_EMsgUGSGetUserStats:
      return "k_EMsgUGSGetUserStats";
    case EMsg.k_EMsgAMGSSearch:
      return "k_EMsgAMGSSearch";
    case EMsg.k_EMsgChatServerRouteFriendMsg:
      return "k_EMsgChatServerRouteFriendMsg";
    case EMsg.k_EMsgAMTicketAuthRequestOrResponse:
      return "k_EMsgAMTicketAuthRequestOrResponse";
    case EMsg.k_EMsgAMAddFreeLicense:
      return "k_EMsgAMAddFreeLicense";
    case EMsg.k_EMsgAMValidateEmailLink:
      return "k_EMsgAMValidateEmailLink";
    case EMsg.k_EMsgAMValidateEmailLinkResponse:
      return "k_EMsgAMValidateEmailLinkResponse";
    case EMsg.k_EMsgUGSStoreUserStats:
      return "k_EMsgUGSStoreUserStats";
    case EMsg.k_EMsgAMDeleteStoredCard:
      return "k_EMsgAMDeleteStoredCard";
    case EMsg.k_EMsgAMRevokeLegacyGameKeys:
      return "k_EMsgAMRevokeLegacyGameKeys";
    case EMsg.k_EMsgAMGetWalletDetails:
      return "k_EMsgAMGetWalletDetails";
    case EMsg.k_EMsgAMGetWalletDetailsResponse:
      return "k_EMsgAMGetWalletDetailsResponse";
    case EMsg.k_EMsgAMDeleteStoredPaymentInfo:
      return "k_EMsgAMDeleteStoredPaymentInfo";
    case EMsg.k_EMsgAMGetStoredPaymentSummary:
      return "k_EMsgAMGetStoredPaymentSummary";
    case EMsg.k_EMsgAMGetStoredPaymentSummaryResponse:
      return "k_EMsgAMGetStoredPaymentSummaryResponse";
    case EMsg.k_EMsgAMGetWalletConversionRate:
      return "k_EMsgAMGetWalletConversionRate";
    case EMsg.k_EMsgAMGetWalletConversionRateResponse:
      return "k_EMsgAMGetWalletConversionRateResponse";
    case EMsg.k_EMsgAMConvertWallet:
      return "k_EMsgAMConvertWallet";
    case EMsg.k_EMsgAMConvertWalletResponse:
      return "k_EMsgAMConvertWalletResponse";
    case EMsg.k_EMsgAMSetPreApproval:
      return "k_EMsgAMSetPreApproval";
    case EMsg.k_EMsgAMSetPreApprovalResponse:
      return "k_EMsgAMSetPreApprovalResponse";
    case EMsg.k_EMsgAMCreateRefund:
      return "k_EMsgAMCreateRefund";
    case EMsg.k_EMsgAMCreateChargeback:
      return "k_EMsgAMCreateChargeback";
    case EMsg.k_EMsgAMCreateDispute:
      return "k_EMsgAMCreateDispute";
    case EMsg.k_EMsgAMClearDispute:
      return "k_EMsgAMClearDispute";
    case EMsg.k_EMsgAMCreateFinancialAdjustment:
      return "k_EMsgAMCreateFinancialAdjustment";
    case EMsg.k_EMsgAMPlayerNicknameList:
      return "k_EMsgAMPlayerNicknameList";
    case EMsg.k_EMsgAMPlayerNicknameListResponse:
      return "k_EMsgAMPlayerNicknameListResponse";
    case EMsg.k_EMsgAMGetUserCurrentGameInfo:
      return "k_EMsgAMGetUserCurrentGameInfo";
    case EMsg.k_EMsgAMGetUserCurrentGameInfoResponse:
      return "k_EMsgAMGetUserCurrentGameInfoResponse";
    case EMsg.k_EMsgAMGetGSPlayerList:
      return "k_EMsgAMGetGSPlayerList";
    case EMsg.k_EMsgAMGetGSPlayerListResponse:
      return "k_EMsgAMGetGSPlayerListResponse";
    case EMsg.k_EMsgAMGetSteamIDForMicroTxn:
      return "k_EMsgAMGetSteamIDForMicroTxn";
    case EMsg.k_EMsgAMGetSteamIDForMicroTxnResponse:
      return "k_EMsgAMGetSteamIDForMicroTxnResponse";
    case EMsg.k_EMsgAMSetPartnerMember:
      return "k_EMsgAMSetPartnerMember";
    case EMsg.k_EMsgAMRemovePublisherUser:
      return "k_EMsgAMRemovePublisherUser";
    case EMsg.k_EMsgAMGetUserLicenseList:
      return "k_EMsgAMGetUserLicenseList";
    case EMsg.k_EMsgAMGetUserLicenseListResponse:
      return "k_EMsgAMGetUserLicenseListResponse";
    case EMsg.k_EMsgAMReloadGameGroupPolicy:
      return "k_EMsgAMReloadGameGroupPolicy";
    case EMsg.k_EMsgAMAddFreeLicenseResponse:
      return "k_EMsgAMAddFreeLicenseResponse";
    case EMsg.k_EMsgAMVACStatusUpdate:
      return "k_EMsgAMVACStatusUpdate";
    case EMsg.k_EMsgAMGetAccountDetails:
      return "k_EMsgAMGetAccountDetails";
    case EMsg.k_EMsgAMGetAccountDetailsResponse:
      return "k_EMsgAMGetAccountDetailsResponse";
    case EMsg.k_EMsgAMGetPlayerLinkDetails:
      return "k_EMsgAMGetPlayerLinkDetails";
    case EMsg.k_EMsgAMGetPlayerLinkDetailsResponse:
      return "k_EMsgAMGetPlayerLinkDetailsResponse";
    case EMsg.k_EMsgAMGetAccountFlagsForWGSpoofing:
      return "k_EMsgAMGetAccountFlagsForWGSpoofing";
    case EMsg.k_EMsgAMGetAccountFlagsForWGSpoofingResponse:
      return "k_EMsgAMGetAccountFlagsForWGSpoofingResponse";
    case EMsg.k_EMsgAMGetClanOfficers:
      return "k_EMsgAMGetClanOfficers";
    case EMsg.k_EMsgAMGetClanOfficersResponse:
      return "k_EMsgAMGetClanOfficersResponse";
    case EMsg.k_EMsgAMNameChange:
      return "k_EMsgAMNameChange";
    case EMsg.k_EMsgAMGetNameHistory:
      return "k_EMsgAMGetNameHistory";
    case EMsg.k_EMsgAMGetNameHistoryResponse:
      return "k_EMsgAMGetNameHistoryResponse";
    case EMsg.k_EMsgAMUpdateProviderStatus:
      return "k_EMsgAMUpdateProviderStatus";
    case EMsg.k_EMsgAMSupportRemoveAccountSecurity:
      return "k_EMsgAMSupportRemoveAccountSecurity";
    case EMsg.k_EMsgAMIsAccountInCaptchaGracePeriod:
      return "k_EMsgAMIsAccountInCaptchaGracePeriod";
    case EMsg.k_EMsgAMIsAccountInCaptchaGracePeriodResponse:
      return "k_EMsgAMIsAccountInCaptchaGracePeriodResponse";
    case EMsg.k_EMsgAMAccountPS3Unlink:
      return "k_EMsgAMAccountPS3Unlink";
    case EMsg.k_EMsgAMAccountPS3UnlinkResponse:
      return "k_EMsgAMAccountPS3UnlinkResponse";
    case EMsg.k_EMsgUGSStoreUserStatsResponse:
      return "k_EMsgUGSStoreUserStatsResponse";
    case EMsg.k_EMsgAMGetAccountPSNInfo:
      return "k_EMsgAMGetAccountPSNInfo";
    case EMsg.k_EMsgAMGetAccountPSNInfoResponse:
      return "k_EMsgAMGetAccountPSNInfoResponse";
    case EMsg.k_EMsgAMAuthenticatedPlayerList:
      return "k_EMsgAMAuthenticatedPlayerList";
    case EMsg.k_EMsgAMGetUserGifts:
      return "k_EMsgAMGetUserGifts";
    case EMsg.k_EMsgAMGetUserGiftsResponse:
      return "k_EMsgAMGetUserGiftsResponse";
    case EMsg.k_EMsgAMTransferLockedGifts:
      return "k_EMsgAMTransferLockedGifts";
    case EMsg.k_EMsgAMTransferLockedGiftsResponse:
      return "k_EMsgAMTransferLockedGiftsResponse";
    case EMsg.k_EMsgAMPlayerHostedOnGameServer:
      return "k_EMsgAMPlayerHostedOnGameServer";
    case EMsg.k_EMsgAMGetAccountBanInfo:
      return "k_EMsgAMGetAccountBanInfo";
    case EMsg.k_EMsgAMGetAccountBanInfoResponse:
      return "k_EMsgAMGetAccountBanInfoResponse";
    case EMsg.k_EMsgAMRecordBanEnforcement:
      return "k_EMsgAMRecordBanEnforcement";
    case EMsg.k_EMsgAMRollbackGiftTransfer:
      return "k_EMsgAMRollbackGiftTransfer";
    case EMsg.k_EMsgAMRollbackGiftTransferResponse:
      return "k_EMsgAMRollbackGiftTransferResponse";
    case EMsg.k_EMsgAMHandlePendingTransaction:
      return "k_EMsgAMHandlePendingTransaction";
    case EMsg.k_EMsgAMRequestClanDetails:
      return "k_EMsgAMRequestClanDetails";
    case EMsg.k_EMsgAMDeleteStoredPaypalAgreement:
      return "k_EMsgAMDeleteStoredPaypalAgreement";
    case EMsg.k_EMsgAMGameServerUpdate:
      return "k_EMsgAMGameServerUpdate";
    case EMsg.k_EMsgAMGameServerRemove:
      return "k_EMsgAMGameServerRemove";
    case EMsg.k_EMsgAMGetPaypalAgreements:
      return "k_EMsgAMGetPaypalAgreements";
    case EMsg.k_EMsgAMGetPaypalAgreementsResponse:
      return "k_EMsgAMGetPaypalAgreementsResponse";
    case EMsg.k_EMsgAMGameServerPlayerCompatibilityCheck:
      return "k_EMsgAMGameServerPlayerCompatibilityCheck";
    case EMsg.k_EMsgAMGameServerPlayerCompatibilityCheckResponse:
      return "k_EMsgAMGameServerPlayerCompatibilityCheckResponse";
    case EMsg.k_EMsgAMRenewLicense:
      return "k_EMsgAMRenewLicense";
    case EMsg.k_EMsgAMGetAccountCommunityBanInfo:
      return "k_EMsgAMGetAccountCommunityBanInfo";
    case EMsg.k_EMsgAMGetAccountCommunityBanInfoResponse:
      return "k_EMsgAMGetAccountCommunityBanInfoResponse";
    case EMsg.k_EMsgAMGameServerAccountChangePassword:
      return "k_EMsgAMGameServerAccountChangePassword";
    case EMsg.k_EMsgAMGameServerAccountDeleteAccount:
      return "k_EMsgAMGameServerAccountDeleteAccount";
    case EMsg.k_EMsgAMRenewAgreement:
      return "k_EMsgAMRenewAgreement";
    case EMsg.k_EMsgAMXsollaPayment:
      return "k_EMsgAMXsollaPayment";
    case EMsg.k_EMsgAMXsollaPaymentResponse:
      return "k_EMsgAMXsollaPaymentResponse";
    case EMsg.k_EMsgAMAcctAllowedToPurchase:
      return "k_EMsgAMAcctAllowedToPurchase";
    case EMsg.k_EMsgAMAcctAllowedToPurchaseResponse:
      return "k_EMsgAMAcctAllowedToPurchaseResponse";
    case EMsg.k_EMsgAMSwapKioskDeposit:
      return "k_EMsgAMSwapKioskDeposit";
    case EMsg.k_EMsgAMSwapKioskDepositResponse:
      return "k_EMsgAMSwapKioskDepositResponse";
    case EMsg.k_EMsgAMSetUserGiftUnowned:
      return "k_EMsgAMSetUserGiftUnowned";
    case EMsg.k_EMsgAMSetUserGiftUnownedResponse:
      return "k_EMsgAMSetUserGiftUnownedResponse";
    case EMsg.k_EMsgAMClaimUnownedUserGift:
      return "k_EMsgAMClaimUnownedUserGift";
    case EMsg.k_EMsgAMClaimUnownedUserGiftResponse:
      return "k_EMsgAMClaimUnownedUserGiftResponse";
    case EMsg.k_EMsgAMSetClanName:
      return "k_EMsgAMSetClanName";
    case EMsg.k_EMsgAMSetClanNameResponse:
      return "k_EMsgAMSetClanNameResponse";
    case EMsg.k_EMsgAMGrantCoupon:
      return "k_EMsgAMGrantCoupon";
    case EMsg.k_EMsgAMGrantCouponResponse:
      return "k_EMsgAMGrantCouponResponse";
    case EMsg.k_EMsgAMIsPackageRestrictedInUserCountry:
      return "k_EMsgAMIsPackageRestrictedInUserCountry";
    case EMsg.k_EMsgAMIsPackageRestrictedInUserCountryResponse:
      return "k_EMsgAMIsPackageRestrictedInUserCountryResponse";
    case EMsg.k_EMsgAMHandlePendingTransactionResponse:
      return "k_EMsgAMHandlePendingTransactionResponse";
    case EMsg.k_EMsgAMGrantGuestPasses2:
      return "k_EMsgAMGrantGuestPasses2";
    case EMsg.k_EMsgAMGrantGuestPasses2Response:
      return "k_EMsgAMGrantGuestPasses2Response";
    case EMsg.k_EMsgAMGetPlayerBanDetails:
      return "k_EMsgAMGetPlayerBanDetails";
    case EMsg.k_EMsgAMGetPlayerBanDetailsResponse:
      return "k_EMsgAMGetPlayerBanDetailsResponse";
    case EMsg.k_EMsgAMFinalizePurchase:
      return "k_EMsgAMFinalizePurchase";
    case EMsg.k_EMsgAMFinalizePurchaseResponse:
      return "k_EMsgAMFinalizePurchaseResponse";
    case EMsg.k_EMsgAMPersonaChangeResponse:
      return "k_EMsgAMPersonaChangeResponse";
    case EMsg.k_EMsgAMGetClanDetailsForForumCreation:
      return "k_EMsgAMGetClanDetailsForForumCreation";
    case EMsg.k_EMsgAMGetClanDetailsForForumCreationResponse:
      return "k_EMsgAMGetClanDetailsForForumCreationResponse";
    case EMsg.k_EMsgAMGetPendingNotificationCount:
      return "k_EMsgAMGetPendingNotificationCount";
    case EMsg.k_EMsgAMGetPendingNotificationCountResponse:
      return "k_EMsgAMGetPendingNotificationCountResponse";
    case EMsg.k_EMsgAMPasswordHashUpgrade:
      return "k_EMsgAMPasswordHashUpgrade";
    case EMsg.k_EMsgAMBoaCompraPayment:
      return "k_EMsgAMBoaCompraPayment";
    case EMsg.k_EMsgAMBoaCompraPaymentResponse:
      return "k_EMsgAMBoaCompraPaymentResponse";
    case EMsg.k_EMsgAMCompleteExternalPurchase:
      return "k_EMsgAMCompleteExternalPurchase";
    case EMsg.k_EMsgAMCompleteExternalPurchaseResponse:
      return "k_EMsgAMCompleteExternalPurchaseResponse";
    case EMsg.k_EMsgAMResolveNegativeWalletCredits:
      return "k_EMsgAMResolveNegativeWalletCredits";
    case EMsg.k_EMsgAMResolveNegativeWalletCreditsResponse:
      return "k_EMsgAMResolveNegativeWalletCreditsResponse";
    case EMsg.k_EMsgAMPlayerGetClanBasicDetails:
      return "k_EMsgAMPlayerGetClanBasicDetails";
    case EMsg.k_EMsgAMPlayerGetClanBasicDetailsResponse:
      return "k_EMsgAMPlayerGetClanBasicDetailsResponse";
    case EMsg.k_EMsgAMMOLPayment:
      return "k_EMsgAMMOLPayment";
    case EMsg.k_EMsgAMMOLPaymentResponse:
      return "k_EMsgAMMOLPaymentResponse";
    case EMsg.k_EMsgGetUserIPCountry:
      return "k_EMsgGetUserIPCountry";
    case EMsg.k_EMsgGetUserIPCountryResponse:
      return "k_EMsgGetUserIPCountryResponse";
    case EMsg.k_EMsgNotificationOfSuspiciousActivity:
      return "k_EMsgNotificationOfSuspiciousActivity";
    case EMsg.k_EMsgAMDegicaPayment:
      return "k_EMsgAMDegicaPayment";
    case EMsg.k_EMsgAMDegicaPaymentResponse:
      return "k_EMsgAMDegicaPaymentResponse";
    case EMsg.k_EMsgAMEClubPayment:
      return "k_EMsgAMEClubPayment";
    case EMsg.k_EMsgAMEClubPaymentResponse:
      return "k_EMsgAMEClubPaymentResponse";
    case EMsg.k_EMsgAMPayPalPaymentsHubPayment:
      return "k_EMsgAMPayPalPaymentsHubPayment";
    case EMsg.k_EMsgAMPayPalPaymentsHubPaymentResponse:
      return "k_EMsgAMPayPalPaymentsHubPaymentResponse";
    case EMsg.k_EMsgAMTwoFactorRecoverAuthenticatorRequest:
      return "k_EMsgAMTwoFactorRecoverAuthenticatorRequest";
    case EMsg.k_EMsgAMTwoFactorRecoverAuthenticatorResponse:
      return "k_EMsgAMTwoFactorRecoverAuthenticatorResponse";
    case EMsg.k_EMsgAMSmart2PayPayment:
      return "k_EMsgAMSmart2PayPayment";
    case EMsg.k_EMsgAMSmart2PayPaymentResponse:
      return "k_EMsgAMSmart2PayPaymentResponse";
    case EMsg.k_EMsgAMValidatePasswordResetCodeAndSendSmsRequest:
      return "k_EMsgAMValidatePasswordResetCodeAndSendSmsRequest";
    case EMsg.k_EMsgAMValidatePasswordResetCodeAndSendSmsResponse:
      return "k_EMsgAMValidatePasswordResetCodeAndSendSmsResponse";
    case EMsg.k_EMsgAMGetAccountResetDetailsRequest:
      return "k_EMsgAMGetAccountResetDetailsRequest";
    case EMsg.k_EMsgAMGetAccountResetDetailsResponse:
      return "k_EMsgAMGetAccountResetDetailsResponse";
    case EMsg.k_EMsgAMBitPayPayment:
      return "k_EMsgAMBitPayPayment";
    case EMsg.k_EMsgAMBitPayPaymentResponse:
      return "k_EMsgAMBitPayPaymentResponse";
    case EMsg.k_EMsgAMSendAccountInfoUpdate:
      return "k_EMsgAMSendAccountInfoUpdate";
    case EMsg.k_EMsgAMSendScheduledGift:
      return "k_EMsgAMSendScheduledGift";
    case EMsg.k_EMsgAMNodwinPayment:
      return "k_EMsgAMNodwinPayment";
    case EMsg.k_EMsgAMNodwinPaymentResponse:
      return "k_EMsgAMNodwinPaymentResponse";
    case EMsg.k_EMsgAMResolveWalletRevoke:
      return "k_EMsgAMResolveWalletRevoke";
    case EMsg.k_EMsgAMResolveWalletReverseRevoke:
      return "k_EMsgAMResolveWalletReverseRevoke";
    case EMsg.k_EMsgAMFundedPayment:
      return "k_EMsgAMFundedPayment";
    case EMsg.k_EMsgAMFundedPaymentResponse:
      return "k_EMsgAMFundedPaymentResponse";
    case EMsg.k_EMsgAMRequestPersonaUpdateForChatServer:
      return "k_EMsgAMRequestPersonaUpdateForChatServer";
    case EMsg.k_EMsgAMPerfectWorldPayment:
      return "k_EMsgAMPerfectWorldPayment";
    case EMsg.k_EMsgAMPerfectWorldPaymentResponse:
      return "k_EMsgAMPerfectWorldPaymentResponse";
    case EMsg.k_EMsgAMECommPayPayment:
      return "k_EMsgAMECommPayPayment";
    case EMsg.k_EMsgAMECommPayPaymentResponse:
      return "k_EMsgAMECommPayPaymentResponse";
    case EMsg.k_EMsgAMSetRemoteClientID:
      return "k_EMsgAMSetRemoteClientID";
    case EMsg.k_EMsgBasePSRange:
      return "k_EMsgBasePSRange";
    case EMsg.k_EMsgPSCreateShoppingCart:
      return "k_EMsgPSCreateShoppingCart";
    case EMsg.k_EMsgPSCreateShoppingCartResponse:
      return "k_EMsgPSCreateShoppingCartResponse";
    case EMsg.k_EMsgPSIsValidShoppingCart:
      return "k_EMsgPSIsValidShoppingCart";
    case EMsg.k_EMsgPSIsValidShoppingCartResponse:
      return "k_EMsgPSIsValidShoppingCartResponse";
    case EMsg.k_EMsgPSRemoveLineItemFromShoppingCart:
      return "k_EMsgPSRemoveLineItemFromShoppingCart";
    case EMsg.k_EMsgPSRemoveLineItemFromShoppingCartResponse:
      return "k_EMsgPSRemoveLineItemFromShoppingCartResponse";
    case EMsg.k_EMsgPSGetShoppingCartContents:
      return "k_EMsgPSGetShoppingCartContents";
    case EMsg.k_EMsgPSGetShoppingCartContentsResponse:
      return "k_EMsgPSGetShoppingCartContentsResponse";
    case EMsg.k_EMsgPSAddWalletCreditToShoppingCart:
      return "k_EMsgPSAddWalletCreditToShoppingCart";
    case EMsg.k_EMsgPSAddWalletCreditToShoppingCartResponse:
      return "k_EMsgPSAddWalletCreditToShoppingCartResponse";
    case EMsg.k_EMsgBaseUFSRange:
      return "k_EMsgBaseUFSRange";
    case EMsg.k_EMsgClientUFSUploadFileRequest:
      return "k_EMsgClientUFSUploadFileRequest";
    case EMsg.k_EMsgClientUFSUploadFileResponse:
      return "k_EMsgClientUFSUploadFileResponse";
    case EMsg.k_EMsgClientUFSUploadFileChunk:
      return "k_EMsgClientUFSUploadFileChunk";
    case EMsg.k_EMsgClientUFSUploadFileFinished:
      return "k_EMsgClientUFSUploadFileFinished";
    case EMsg.k_EMsgClientUFSGetFileListForApp:
      return "k_EMsgClientUFSGetFileListForApp";
    case EMsg.k_EMsgClientUFSGetFileListForAppResponse:
      return "k_EMsgClientUFSGetFileListForAppResponse";
    case EMsg.k_EMsgClientUFSDownloadRequest:
      return "k_EMsgClientUFSDownloadRequest";
    case EMsg.k_EMsgClientUFSDownloadResponse:
      return "k_EMsgClientUFSDownloadResponse";
    case EMsg.k_EMsgClientUFSDownloadChunk:
      return "k_EMsgClientUFSDownloadChunk";
    case EMsg.k_EMsgClientUFSLoginRequest:
      return "k_EMsgClientUFSLoginRequest";
    case EMsg.k_EMsgClientUFSLoginResponse:
      return "k_EMsgClientUFSLoginResponse";
    case EMsg.k_EMsgUFSReloadPartitionInfo:
      return "k_EMsgUFSReloadPartitionInfo";
    case EMsg.k_EMsgClientUFSTransferHeartbeat:
      return "k_EMsgClientUFSTransferHeartbeat";
    case EMsg.k_EMsgUFSSynchronizeFile:
      return "k_EMsgUFSSynchronizeFile";
    case EMsg.k_EMsgUFSSynchronizeFileResponse:
      return "k_EMsgUFSSynchronizeFileResponse";
    case EMsg.k_EMsgClientUFSDeleteFileRequest:
      return "k_EMsgClientUFSDeleteFileRequest";
    case EMsg.k_EMsgClientUFSDeleteFileResponse:
      return "k_EMsgClientUFSDeleteFileResponse";
    case EMsg.k_EMsgClientUFSGetUGCDetails:
      return "k_EMsgClientUFSGetUGCDetails";
    case EMsg.k_EMsgClientUFSGetUGCDetailsResponse:
      return "k_EMsgClientUFSGetUGCDetailsResponse";
    case EMsg.k_EMsgUFSUpdateFileFlags:
      return "k_EMsgUFSUpdateFileFlags";
    case EMsg.k_EMsgUFSUpdateFileFlagsResponse:
      return "k_EMsgUFSUpdateFileFlagsResponse";
    case EMsg.k_EMsgClientUFSGetSingleFileInfo:
      return "k_EMsgClientUFSGetSingleFileInfo";
    case EMsg.k_EMsgClientUFSGetSingleFileInfoResponse:
      return "k_EMsgClientUFSGetSingleFileInfoResponse";
    case EMsg.k_EMsgClientUFSShareFile:
      return "k_EMsgClientUFSShareFile";
    case EMsg.k_EMsgClientUFSShareFileResponse:
      return "k_EMsgClientUFSShareFileResponse";
    case EMsg.k_EMsgUFSReloadAccount:
      return "k_EMsgUFSReloadAccount";
    case EMsg.k_EMsgUFSReloadAccountResponse:
      return "k_EMsgUFSReloadAccountResponse";
    case EMsg.k_EMsgUFSUpdateRecordBatched:
      return "k_EMsgUFSUpdateRecordBatched";
    case EMsg.k_EMsgUFSUpdateRecordBatchedResponse:
      return "k_EMsgUFSUpdateRecordBatchedResponse";
    case EMsg.k_EMsgUFSMigrateFile:
      return "k_EMsgUFSMigrateFile";
    case EMsg.k_EMsgUFSMigrateFileResponse:
      return "k_EMsgUFSMigrateFileResponse";
    case EMsg.k_EMsgUFSGetUGCURLs:
      return "k_EMsgUFSGetUGCURLs";
    case EMsg.k_EMsgUFSGetUGCURLsResponse:
      return "k_EMsgUFSGetUGCURLsResponse";
    case EMsg.k_EMsgUFSHttpUploadFileFinishRequest:
      return "k_EMsgUFSHttpUploadFileFinishRequest";
    case EMsg.k_EMsgUFSHttpUploadFileFinishResponse:
      return "k_EMsgUFSHttpUploadFileFinishResponse";
    case EMsg.k_EMsgUFSDownloadStartRequest:
      return "k_EMsgUFSDownloadStartRequest";
    case EMsg.k_EMsgUFSDownloadStartResponse:
      return "k_EMsgUFSDownloadStartResponse";
    case EMsg.k_EMsgUFSDownloadChunkRequest:
      return "k_EMsgUFSDownloadChunkRequest";
    case EMsg.k_EMsgUFSDownloadChunkResponse:
      return "k_EMsgUFSDownloadChunkResponse";
    case EMsg.k_EMsgUFSDownloadFinishRequest:
      return "k_EMsgUFSDownloadFinishRequest";
    case EMsg.k_EMsgUFSDownloadFinishResponse:
      return "k_EMsgUFSDownloadFinishResponse";
    case EMsg.k_EMsgUFSFlushURLCache:
      return "k_EMsgUFSFlushURLCache";
    case EMsg.k_EMsgClientUFSUploadCommit:
      return "k_EMsgClientUFSUploadCommit";
    case EMsg.k_EMsgClientUFSUploadCommitResponse:
      return "k_EMsgClientUFSUploadCommitResponse";
    case EMsg.k_EMsgUFSMigrateFileAppID:
      return "k_EMsgUFSMigrateFileAppID";
    case EMsg.k_EMsgUFSMigrateFileAppIDResponse:
      return "k_EMsgUFSMigrateFileAppIDResponse";
    case EMsg.k_EMsgBaseClient2:
      return "k_EMsgBaseClient2";
    case EMsg.k_EMsgClientRequestForgottenPasswordEmail:
      return "k_EMsgClientRequestForgottenPasswordEmail";
    case EMsg.k_EMsgClientRequestForgottenPasswordEmailResponse:
      return "k_EMsgClientRequestForgottenPasswordEmailResponse";
    case EMsg.k_EMsgClientCreateAccountResponse:
      return "k_EMsgClientCreateAccountResponse";
    case EMsg.k_EMsgClientResetForgottenPassword:
      return "k_EMsgClientResetForgottenPassword";
    case EMsg.k_EMsgClientResetForgottenPasswordResponse:
      return "k_EMsgClientResetForgottenPasswordResponse";
    case EMsg.k_EMsgClientInformOfResetForgottenPassword:
      return "k_EMsgClientInformOfResetForgottenPassword";
    case EMsg.k_EMsgClientInformOfResetForgottenPasswordResponse:
      return "k_EMsgClientInformOfResetForgottenPasswordResponse";
    case EMsg.k_EMsgClientAnonUserLogOn_Deprecated:
      return "k_EMsgClientAnonUserLogOn_Deprecated";
    case EMsg.k_EMsgClientGamesPlayedWithDataBlob:
      return "k_EMsgClientGamesPlayedWithDataBlob";
    case EMsg.k_EMsgClientUpdateUserGameInfo:
      return "k_EMsgClientUpdateUserGameInfo";
    case EMsg.k_EMsgClientFileToDownload:
      return "k_EMsgClientFileToDownload";
    case EMsg.k_EMsgClientFileToDownloadResponse:
      return "k_EMsgClientFileToDownloadResponse";
    case EMsg.k_EMsgClientLBSSetScore:
      return "k_EMsgClientLBSSetScore";
    case EMsg.k_EMsgClientLBSSetScoreResponse:
      return "k_EMsgClientLBSSetScoreResponse";
    case EMsg.k_EMsgClientLBSFindOrCreateLB:
      return "k_EMsgClientLBSFindOrCreateLB";
    case EMsg.k_EMsgClientLBSFindOrCreateLBResponse:
      return "k_EMsgClientLBSFindOrCreateLBResponse";
    case EMsg.k_EMsgClientLBSGetLBEntries:
      return "k_EMsgClientLBSGetLBEntries";
    case EMsg.k_EMsgClientLBSGetLBEntriesResponse:
      return "k_EMsgClientLBSGetLBEntriesResponse";
    case EMsg.k_EMsgClientChatDeclined:
      return "k_EMsgClientChatDeclined";
    case EMsg.k_EMsgClientFriendMsgIncoming:
      return "k_EMsgClientFriendMsgIncoming";
    case EMsg.k_EMsgClientAuthList_Deprecated:
      return "k_EMsgClientAuthList_Deprecated";
    case EMsg.k_EMsgClientTicketAuthComplete:
      return "k_EMsgClientTicketAuthComplete";
    case EMsg.k_EMsgClientIsLimitedAccount:
      return "k_EMsgClientIsLimitedAccount";
    case EMsg.k_EMsgClientRequestAuthList:
      return "k_EMsgClientRequestAuthList";
    case EMsg.k_EMsgClientAuthList:
      return "k_EMsgClientAuthList";
    case EMsg.k_EMsgClientStat:
      return "k_EMsgClientStat";
    case EMsg.k_EMsgClientP2PConnectionInfo:
      return "k_EMsgClientP2PConnectionInfo";
    case EMsg.k_EMsgClientP2PConnectionFailInfo:
      return "k_EMsgClientP2PConnectionFailInfo";
    case EMsg.k_EMsgClientGetDepotDecryptionKey:
      return "k_EMsgClientGetDepotDecryptionKey";
    case EMsg.k_EMsgClientGetDepotDecryptionKeyResponse:
      return "k_EMsgClientGetDepotDecryptionKeyResponse";
    case EMsg.k_EMsgClientEnableTestLicense:
      return "k_EMsgClientEnableTestLicense";
    case EMsg.k_EMsgClientEnableTestLicenseResponse:
      return "k_EMsgClientEnableTestLicenseResponse";
    case EMsg.k_EMsgClientDisableTestLicense:
      return "k_EMsgClientDisableTestLicense";
    case EMsg.k_EMsgClientDisableTestLicenseResponse:
      return "k_EMsgClientDisableTestLicenseResponse";
    case EMsg.k_EMsgClientRequestValidationMail:
      return "k_EMsgClientRequestValidationMail";
    case EMsg.k_EMsgClientRequestValidationMailResponse:
      return "k_EMsgClientRequestValidationMailResponse";
    case EMsg.k_EMsgClientCheckAppBetaPassword:
      return "k_EMsgClientCheckAppBetaPassword";
    case EMsg.k_EMsgClientCheckAppBetaPasswordResponse:
      return "k_EMsgClientCheckAppBetaPasswordResponse";
    case EMsg.k_EMsgClientToGC:
      return "k_EMsgClientToGC";
    case EMsg.k_EMsgClientFromGC:
      return "k_EMsgClientFromGC";
    case EMsg.k_EMsgClientEmailAddrInfo:
      return "k_EMsgClientEmailAddrInfo";
    case EMsg.k_EMsgClientPasswordChange3:
      return "k_EMsgClientPasswordChange3";
    case EMsg.k_EMsgClientEmailChange3:
      return "k_EMsgClientEmailChange3";
    case EMsg.k_EMsgClientPersonalQAChange3:
      return "k_EMsgClientPersonalQAChange3";
    case EMsg.k_EMsgClientResetForgottenPassword3:
      return "k_EMsgClientResetForgottenPassword3";
    case EMsg.k_EMsgClientRequestForgottenPasswordEmail3:
      return "k_EMsgClientRequestForgottenPasswordEmail3";
    case EMsg.k_EMsgClientNewLoginKey:
      return "k_EMsgClientNewLoginKey";
    case EMsg.k_EMsgClientNewLoginKeyAccepted:
      return "k_EMsgClientNewLoginKeyAccepted";
    case EMsg.k_EMsgClientLogOnWithHash_Deprecated:
      return "k_EMsgClientLogOnWithHash_Deprecated";
    case EMsg.k_EMsgClientStoreUserStats2:
      return "k_EMsgClientStoreUserStats2";
    case EMsg.k_EMsgClientStatsUpdated:
      return "k_EMsgClientStatsUpdated";
    case EMsg.k_EMsgClientActivateOEMLicense:
      return "k_EMsgClientActivateOEMLicense";
    case EMsg.k_EMsgClientRegisterOEMMachine:
      return "k_EMsgClientRegisterOEMMachine";
    case EMsg.k_EMsgClientRegisterOEMMachineResponse:
      return "k_EMsgClientRegisterOEMMachineResponse";
    case EMsg.k_EMsgClientRequestedClientStats:
      return "k_EMsgClientRequestedClientStats";
    case EMsg.k_EMsgClientStat2Int32:
      return "k_EMsgClientStat2Int32";
    case EMsg.k_EMsgClientStat2:
      return "k_EMsgClientStat2";
    case EMsg.k_EMsgClientVerifyPassword:
      return "k_EMsgClientVerifyPassword";
    case EMsg.k_EMsgClientVerifyPasswordResponse:
      return "k_EMsgClientVerifyPasswordResponse";
    case EMsg.k_EMsgClientDRMDownloadRequest:
      return "k_EMsgClientDRMDownloadRequest";
    case EMsg.k_EMsgClientDRMDownloadResponse:
      return "k_EMsgClientDRMDownloadResponse";
    case EMsg.k_EMsgClientDRMFinalResult:
      return "k_EMsgClientDRMFinalResult";
    case EMsg.k_EMsgClientGetFriendsWhoPlayGame:
      return "k_EMsgClientGetFriendsWhoPlayGame";
    case EMsg.k_EMsgClientGetFriendsWhoPlayGameResponse:
      return "k_EMsgClientGetFriendsWhoPlayGameResponse";
    case EMsg.k_EMsgClientOGSBeginSession:
      return "k_EMsgClientOGSBeginSession";
    case EMsg.k_EMsgClientOGSBeginSessionResponse:
      return "k_EMsgClientOGSBeginSessionResponse";
    case EMsg.k_EMsgClientOGSEndSession:
      return "k_EMsgClientOGSEndSession";
    case EMsg.k_EMsgClientOGSEndSessionResponse:
      return "k_EMsgClientOGSEndSessionResponse";
    case EMsg.k_EMsgClientOGSWriteRow:
      return "k_EMsgClientOGSWriteRow";
    case EMsg.k_EMsgClientGetPeerContentInfo:
      return "k_EMsgClientGetPeerContentInfo";
    case EMsg.k_EMsgClientGetPeerContentInfoResponse:
      return "k_EMsgClientGetPeerContentInfoResponse";
    case EMsg.k_EMsgClientStartPeerContentServer:
      return "k_EMsgClientStartPeerContentServer";
    case EMsg.k_EMsgClientStartPeerContentServerResponse:
      return "k_EMsgClientStartPeerContentServerResponse";
    case EMsg.k_EMsgClientServerUnavailable:
      return "k_EMsgClientServerUnavailable";
    case EMsg.k_EMsgClientServersAvailable:
      return "k_EMsgClientServersAvailable";
    case EMsg.k_EMsgClientRegisterAuthTicketWithCM:
      return "k_EMsgClientRegisterAuthTicketWithCM";
    case EMsg.k_EMsgClientGCMsgFailed:
      return "k_EMsgClientGCMsgFailed";
    case EMsg.k_EMsgClientMicroTxnAuthRequest:
      return "k_EMsgClientMicroTxnAuthRequest";
    case EMsg.k_EMsgClientMicroTxnAuthorize:
      return "k_EMsgClientMicroTxnAuthorize";
    case EMsg.k_EMsgClientMicroTxnAuthorizeResponse:
      return "k_EMsgClientMicroTxnAuthorizeResponse";
    case EMsg.k_EMsgClientGetMicroTxnInfo:
      return "k_EMsgClientGetMicroTxnInfo";
    case EMsg.k_EMsgClientGetMicroTxnInfoResponse:
      return "k_EMsgClientGetMicroTxnInfoResponse";
    case EMsg.k_EMsgClientDeregisterWithServer:
      return "k_EMsgClientDeregisterWithServer";
    case EMsg.k_EMsgClientSubscribeToPersonaFeed:
      return "k_EMsgClientSubscribeToPersonaFeed";
    case EMsg.k_EMsgClientLogon:
      return "k_EMsgClientLogon";
    case EMsg.k_EMsgClientGetClientDetails:
      return "k_EMsgClientGetClientDetails";
    case EMsg.k_EMsgClientGetClientDetailsResponse:
      return "k_EMsgClientGetClientDetailsResponse";
    case EMsg.k_EMsgClientReportOverlayDetourFailure:
      return "k_EMsgClientReportOverlayDetourFailure";
    case EMsg.k_EMsgClientGetClientAppList:
      return "k_EMsgClientGetClientAppList";
    case EMsg.k_EMsgClientGetClientAppListResponse:
      return "k_EMsgClientGetClientAppListResponse";
    case EMsg.k_EMsgClientInstallClientApp:
      return "k_EMsgClientInstallClientApp";
    case EMsg.k_EMsgClientInstallClientAppResponse:
      return "k_EMsgClientInstallClientAppResponse";
    case EMsg.k_EMsgClientUninstallClientApp:
      return "k_EMsgClientUninstallClientApp";
    case EMsg.k_EMsgClientUninstallClientAppResponse:
      return "k_EMsgClientUninstallClientAppResponse";
    case EMsg.k_EMsgClientSetClientAppUpdateState:
      return "k_EMsgClientSetClientAppUpdateState";
    case EMsg.k_EMsgClientSetClientAppUpdateStateResponse:
      return "k_EMsgClientSetClientAppUpdateStateResponse";
    case EMsg.k_EMsgClientRequestEncryptedAppTicket:
      return "k_EMsgClientRequestEncryptedAppTicket";
    case EMsg.k_EMsgClientRequestEncryptedAppTicketResponse:
      return "k_EMsgClientRequestEncryptedAppTicketResponse";
    case EMsg.k_EMsgClientWalletInfoUpdate:
      return "k_EMsgClientWalletInfoUpdate";
    case EMsg.k_EMsgClientLBSSetUGC:
      return "k_EMsgClientLBSSetUGC";
    case EMsg.k_EMsgClientLBSSetUGCResponse:
      return "k_EMsgClientLBSSetUGCResponse";
    case EMsg.k_EMsgClientAMGetClanOfficers:
      return "k_EMsgClientAMGetClanOfficers";
    case EMsg.k_EMsgClientAMGetClanOfficersResponse:
      return "k_EMsgClientAMGetClanOfficersResponse";
    case EMsg.k_EMsgClientFriendProfileInfo:
      return "k_EMsgClientFriendProfileInfo";
    case EMsg.k_EMsgClientFriendProfileInfoResponse:
      return "k_EMsgClientFriendProfileInfoResponse";
    case EMsg.k_EMsgClientUpdateMachineAuth:
      return "k_EMsgClientUpdateMachineAuth";
    case EMsg.k_EMsgClientUpdateMachineAuthResponse:
      return "k_EMsgClientUpdateMachineAuthResponse";
    case EMsg.k_EMsgClientReadMachineAuth:
      return "k_EMsgClientReadMachineAuth";
    case EMsg.k_EMsgClientReadMachineAuthResponse:
      return "k_EMsgClientReadMachineAuthResponse";
    case EMsg.k_EMsgClientRequestMachineAuth:
      return "k_EMsgClientRequestMachineAuth";
    case EMsg.k_EMsgClientRequestMachineAuthResponse:
      return "k_EMsgClientRequestMachineAuthResponse";
    case EMsg.k_EMsgClientScreenshotsChanged:
      return "k_EMsgClientScreenshotsChanged";
    case EMsg.k_EMsgClientGetCDNAuthToken:
      return "k_EMsgClientGetCDNAuthToken";
    case EMsg.k_EMsgClientGetCDNAuthTokenResponse:
      return "k_EMsgClientGetCDNAuthTokenResponse";
    case EMsg.k_EMsgClientDownloadRateStatistics:
      return "k_EMsgClientDownloadRateStatistics";
    case EMsg.k_EMsgClientRequestAccountData:
      return "k_EMsgClientRequestAccountData";
    case EMsg.k_EMsgClientRequestAccountDataResponse:
      return "k_EMsgClientRequestAccountDataResponse";
    case EMsg.k_EMsgClientResetForgottenPassword4:
      return "k_EMsgClientResetForgottenPassword4";
    case EMsg.k_EMsgClientHideFriend:
      return "k_EMsgClientHideFriend";
    case EMsg.k_EMsgClientFriendsGroupsList:
      return "k_EMsgClientFriendsGroupsList";
    case EMsg.k_EMsgClientGetClanActivityCounts:
      return "k_EMsgClientGetClanActivityCounts";
    case EMsg.k_EMsgClientGetClanActivityCountsResponse:
      return "k_EMsgClientGetClanActivityCountsResponse";
    case EMsg.k_EMsgClientOGSReportString:
      return "k_EMsgClientOGSReportString";
    case EMsg.k_EMsgClientOGSReportBug:
      return "k_EMsgClientOGSReportBug";
    case EMsg.k_EMsgClientSentLogs:
      return "k_EMsgClientSentLogs";
    case EMsg.k_EMsgClientLogonGameServer:
      return "k_EMsgClientLogonGameServer";
    case EMsg.k_EMsgAMClientCreateFriendsGroup:
      return "k_EMsgAMClientCreateFriendsGroup";
    case EMsg.k_EMsgAMClientCreateFriendsGroupResponse:
      return "k_EMsgAMClientCreateFriendsGroupResponse";
    case EMsg.k_EMsgAMClientDeleteFriendsGroup:
      return "k_EMsgAMClientDeleteFriendsGroup";
    case EMsg.k_EMsgAMClientDeleteFriendsGroupResponse:
      return "k_EMsgAMClientDeleteFriendsGroupResponse";
    case EMsg.k_EMsgAMClientManageFriendsGroup:
      return "k_EMsgAMClientManageFriendsGroup";
    case EMsg.k_EMsgAMClientManageFriendsGroupResponse:
      return "k_EMsgAMClientManageFriendsGroupResponse";
    case EMsg.k_EMsgAMClientAddFriendToGroup:
      return "k_EMsgAMClientAddFriendToGroup";
    case EMsg.k_EMsgAMClientAddFriendToGroupResponse:
      return "k_EMsgAMClientAddFriendToGroupResponse";
    case EMsg.k_EMsgAMClientRemoveFriendFromGroup:
      return "k_EMsgAMClientRemoveFriendFromGroup";
    case EMsg.k_EMsgAMClientRemoveFriendFromGroupResponse:
      return "k_EMsgAMClientRemoveFriendFromGroupResponse";
    case EMsg.k_EMsgClientAMGetPersonaNameHistory:
      return "k_EMsgClientAMGetPersonaNameHistory";
    case EMsg.k_EMsgClientAMGetPersonaNameHistoryResponse:
      return "k_EMsgClientAMGetPersonaNameHistoryResponse";
    case EMsg.k_EMsgClientRequestFreeLicense:
      return "k_EMsgClientRequestFreeLicense";
    case EMsg.k_EMsgClientRequestFreeLicenseResponse:
      return "k_EMsgClientRequestFreeLicenseResponse";
    case EMsg.k_EMsgClientDRMDownloadRequestWithCrashData:
      return "k_EMsgClientDRMDownloadRequestWithCrashData";
    case EMsg.k_EMsgClientAuthListAck:
      return "k_EMsgClientAuthListAck";
    case EMsg.k_EMsgClientItemAnnouncements:
      return "k_EMsgClientItemAnnouncements";
    case EMsg.k_EMsgClientRequestItemAnnouncements:
      return "k_EMsgClientRequestItemAnnouncements";
    case EMsg.k_EMsgClientFriendMsgEchoToSender:
      return "k_EMsgClientFriendMsgEchoToSender";
    case EMsg.k_EMsgClientCommentNotifications:
      return "k_EMsgClientCommentNotifications";
    case EMsg.k_EMsgClientRequestCommentNotifications:
      return "k_EMsgClientRequestCommentNotifications";
    case EMsg.k_EMsgClientPersonaChangeResponse:
      return "k_EMsgClientPersonaChangeResponse";
    case EMsg.k_EMsgClientRequestWebAPIAuthenticateUserNonce:
      return "k_EMsgClientRequestWebAPIAuthenticateUserNonce";
    case EMsg.k_EMsgClientRequestWebAPIAuthenticateUserNonceResponse:
      return "k_EMsgClientRequestWebAPIAuthenticateUserNonceResponse";
    case EMsg.k_EMsgClientPlayerNicknameList:
      return "k_EMsgClientPlayerNicknameList";
    case EMsg.k_EMsgAMClientSetPlayerNickname:
      return "k_EMsgAMClientSetPlayerNickname";
    case EMsg.k_EMsgAMClientSetPlayerNicknameResponse:
      return "k_EMsgAMClientSetPlayerNicknameResponse";
    case EMsg.k_EMsgClientGetNumberOfCurrentPlayersDP:
      return "k_EMsgClientGetNumberOfCurrentPlayersDP";
    case EMsg.k_EMsgClientGetNumberOfCurrentPlayersDPResponse:
      return "k_EMsgClientGetNumberOfCurrentPlayersDPResponse";
    case EMsg.k_EMsgClientServiceMethodLegacy:
      return "k_EMsgClientServiceMethodLegacy";
    case EMsg.k_EMsgClientServiceMethodLegacyResponse:
      return "k_EMsgClientServiceMethodLegacyResponse";
    case EMsg.k_EMsgClientFriendUserStatusPublished:
      return "k_EMsgClientFriendUserStatusPublished";
    case EMsg.k_EMsgClientCurrentUIMode:
      return "k_EMsgClientCurrentUIMode";
    case EMsg.k_EMsgClientVanityURLChangedNotification:
      return "k_EMsgClientVanityURLChangedNotification";
    case EMsg.k_EMsgClientUserNotifications:
      return "k_EMsgClientUserNotifications";
    case EMsg.k_EMsgBaseDFS:
      return "k_EMsgBaseDFS";
    case EMsg.k_EMsgDFSGetFile:
      return "k_EMsgDFSGetFile";
    case EMsg.k_EMsgDFSInstallLocalFile:
      return "k_EMsgDFSInstallLocalFile";
    case EMsg.k_EMsgDFSConnection:
      return "k_EMsgDFSConnection";
    case EMsg.k_EMsgDFSConnectionReply:
      return "k_EMsgDFSConnectionReply";
    case EMsg.k_EMsgClientDFSAuthenticateRequest:
      return "k_EMsgClientDFSAuthenticateRequest";
    case EMsg.k_EMsgClientDFSAuthenticateResponse:
      return "k_EMsgClientDFSAuthenticateResponse";
    case EMsg.k_EMsgClientDFSEndSession:
      return "k_EMsgClientDFSEndSession";
    case EMsg.k_EMsgDFSPurgeFile:
      return "k_EMsgDFSPurgeFile";
    case EMsg.k_EMsgDFSRouteFile:
      return "k_EMsgDFSRouteFile";
    case EMsg.k_EMsgDFSGetFileFromServer:
      return "k_EMsgDFSGetFileFromServer";
    case EMsg.k_EMsgDFSAcceptedResponse:
      return "k_EMsgDFSAcceptedResponse";
    case EMsg.k_EMsgDFSRequestPingback:
      return "k_EMsgDFSRequestPingback";
    case EMsg.k_EMsgDFSRecvTransmitFile:
      return "k_EMsgDFSRecvTransmitFile";
    case EMsg.k_EMsgDFSSendTransmitFile:
      return "k_EMsgDFSSendTransmitFile";
    case EMsg.k_EMsgDFSRequestPingback2:
      return "k_EMsgDFSRequestPingback2";
    case EMsg.k_EMsgDFSResponsePingback2:
      return "k_EMsgDFSResponsePingback2";
    case EMsg.k_EMsgClientDFSDownloadStatus:
      return "k_EMsgClientDFSDownloadStatus";
    case EMsg.k_EMsgDFSStartTransfer:
      return "k_EMsgDFSStartTransfer";
    case EMsg.k_EMsgDFSTransferComplete:
      return "k_EMsgDFSTransferComplete";
    case EMsg.k_EMsgDFSRouteFileResponse:
      return "k_EMsgDFSRouteFileResponse";
    case EMsg.k_EMsgClientNetworkingCertRequest:
      return "k_EMsgClientNetworkingCertRequest";
    case EMsg.k_EMsgClientNetworkingCertRequestResponse:
      return "k_EMsgClientNetworkingCertRequestResponse";
    case EMsg.k_EMsgClientChallengeRequest:
      return "k_EMsgClientChallengeRequest";
    case EMsg.k_EMsgClientChallengeResponse:
      return "k_EMsgClientChallengeResponse";
    case EMsg.k_EMsgBadgeCraftedNotification:
      return "k_EMsgBadgeCraftedNotification";
    case EMsg.k_EMsgClientNetworkingMobileCertRequest:
      return "k_EMsgClientNetworkingMobileCertRequest";
    case EMsg.k_EMsgClientNetworkingMobileCertRequestResponse:
      return "k_EMsgClientNetworkingMobileCertRequestResponse";
    case EMsg.k_EMsgBaseMDS:
      return "k_EMsgBaseMDS";
    case EMsg.k_EMsgMDSGetDepotDecryptionKey:
      return "k_EMsgMDSGetDepotDecryptionKey";
    case EMsg.k_EMsgMDSGetDepotDecryptionKeyResponse:
      return "k_EMsgMDSGetDepotDecryptionKeyResponse";
    case EMsg.k_EMsgMDSContentServerConfigRequest:
      return "k_EMsgMDSContentServerConfigRequest";
    case EMsg.k_EMsgMDSContentServerConfig:
      return "k_EMsgMDSContentServerConfig";
    case EMsg.k_EMsgMDSGetDepotManifest:
      return "k_EMsgMDSGetDepotManifest";
    case EMsg.k_EMsgMDSGetDepotManifestResponse:
      return "k_EMsgMDSGetDepotManifestResponse";
    case EMsg.k_EMsgMDSGetDepotManifestChunk:
      return "k_EMsgMDSGetDepotManifestChunk";
    case EMsg.k_EMsgMDSGetDepotChunk:
      return "k_EMsgMDSGetDepotChunk";
    case EMsg.k_EMsgMDSGetDepotChunkResponse:
      return "k_EMsgMDSGetDepotChunkResponse";
    case EMsg.k_EMsgMDSGetDepotChunkChunk:
      return "k_EMsgMDSGetDepotChunkChunk";
    case EMsg.k_EMsgMDSToCSFlushChunk:
      return "k_EMsgMDSToCSFlushChunk";
    case EMsg.k_EMsgMDSMigrateChunk:
      return "k_EMsgMDSMigrateChunk";
    case EMsg.k_EMsgMDSMigrateChunkResponse:
      return "k_EMsgMDSMigrateChunkResponse";
    case EMsg.k_EMsgMDSToCSFlushManifest:
      return "k_EMsgMDSToCSFlushManifest";
    case EMsg.k_EMsgCSBase:
      return "k_EMsgCSBase";
    case EMsg.k_EMsgCSPing:
      return "k_EMsgCSPing";
    case EMsg.k_EMsgCSPingResponse:
      return "k_EMsgCSPingResponse";
    case EMsg.k_EMsgGMSBase:
      return "k_EMsgGMSBase";
    case EMsg.k_EMsgGMSGameServerReplicate:
      return "k_EMsgGMSGameServerReplicate";
    case EMsg.k_EMsgClientGMSServerQuery:
      return "k_EMsgClientGMSServerQuery";
    case EMsg.k_EMsgGMSClientServerQueryResponse:
      return "k_EMsgGMSClientServerQueryResponse";
    case EMsg.k_EMsgAMGMSGameServerUpdate:
      return "k_EMsgAMGMSGameServerUpdate";
    case EMsg.k_EMsgAMGMSGameServerRemove:
      return "k_EMsgAMGMSGameServerRemove";
    case EMsg.k_EMsgGameServerOutOfDate:
      return "k_EMsgGameServerOutOfDate";
    case EMsg.k_EMsgDeviceAuthorizationBase:
      return "k_EMsgDeviceAuthorizationBase";
    case EMsg.k_EMsgClientAuthorizeLocalDeviceRequest:
      return "k_EMsgClientAuthorizeLocalDeviceRequest";
    case EMsg.k_EMsgClientAuthorizeLocalDeviceResponse:
      return "k_EMsgClientAuthorizeLocalDeviceResponse";
    case EMsg.k_EMsgClientDeauthorizeDeviceRequest:
      return "k_EMsgClientDeauthorizeDeviceRequest";
    case EMsg.k_EMsgClientDeauthorizeDevice:
      return "k_EMsgClientDeauthorizeDevice";
    case EMsg.k_EMsgClientUseLocalDeviceAuthorizations:
      return "k_EMsgClientUseLocalDeviceAuthorizations";
    case EMsg.k_EMsgClientGetAuthorizedDevices:
      return "k_EMsgClientGetAuthorizedDevices";
    case EMsg.k_EMsgClientGetAuthorizedDevicesResponse:
      return "k_EMsgClientGetAuthorizedDevicesResponse";
    case EMsg.k_EMsgAMNotifySessionDeviceAuthorized:
      return "k_EMsgAMNotifySessionDeviceAuthorized";
    case EMsg.k_EMsgClientAuthorizeLocalDeviceNotification:
      return "k_EMsgClientAuthorizeLocalDeviceNotification";
    case EMsg.k_EMsgMMSBase:
      return "k_EMsgMMSBase";
    case EMsg.k_EMsgClientMMSCreateLobby:
      return "k_EMsgClientMMSCreateLobby";
    case EMsg.k_EMsgClientMMSCreateLobbyResponse:
      return "k_EMsgClientMMSCreateLobbyResponse";
    case EMsg.k_EMsgClientMMSJoinLobby:
      return "k_EMsgClientMMSJoinLobby";
    case EMsg.k_EMsgClientMMSJoinLobbyResponse:
      return "k_EMsgClientMMSJoinLobbyResponse";
    case EMsg.k_EMsgClientMMSLeaveLobby:
      return "k_EMsgClientMMSLeaveLobby";
    case EMsg.k_EMsgClientMMSLeaveLobbyResponse:
      return "k_EMsgClientMMSLeaveLobbyResponse";
    case EMsg.k_EMsgClientMMSGetLobbyList:
      return "k_EMsgClientMMSGetLobbyList";
    case EMsg.k_EMsgClientMMSGetLobbyListResponse:
      return "k_EMsgClientMMSGetLobbyListResponse";
    case EMsg.k_EMsgClientMMSSetLobbyData:
      return "k_EMsgClientMMSSetLobbyData";
    case EMsg.k_EMsgClientMMSSetLobbyDataResponse:
      return "k_EMsgClientMMSSetLobbyDataResponse";
    case EMsg.k_EMsgClientMMSGetLobbyData:
      return "k_EMsgClientMMSGetLobbyData";
    case EMsg.k_EMsgClientMMSLobbyData:
      return "k_EMsgClientMMSLobbyData";
    case EMsg.k_EMsgClientMMSSendLobbyChatMsg:
      return "k_EMsgClientMMSSendLobbyChatMsg";
    case EMsg.k_EMsgClientMMSLobbyChatMsg:
      return "k_EMsgClientMMSLobbyChatMsg";
    case EMsg.k_EMsgClientMMSSetLobbyOwner:
      return "k_EMsgClientMMSSetLobbyOwner";
    case EMsg.k_EMsgClientMMSSetLobbyOwnerResponse:
      return "k_EMsgClientMMSSetLobbyOwnerResponse";
    case EMsg.k_EMsgClientMMSSetLobbyGameServer:
      return "k_EMsgClientMMSSetLobbyGameServer";
    case EMsg.k_EMsgClientMMSLobbyGameServerSet:
      return "k_EMsgClientMMSLobbyGameServerSet";
    case EMsg.k_EMsgClientMMSUserJoinedLobby:
      return "k_EMsgClientMMSUserJoinedLobby";
    case EMsg.k_EMsgClientMMSUserLeftLobby:
      return "k_EMsgClientMMSUserLeftLobby";
    case EMsg.k_EMsgClientMMSInviteToLobby:
      return "k_EMsgClientMMSInviteToLobby";
    case EMsg.k_EMsgClientMMSFlushFrenemyListCache:
      return "k_EMsgClientMMSFlushFrenemyListCache";
    case EMsg.k_EMsgClientMMSFlushFrenemyListCacheResponse:
      return "k_EMsgClientMMSFlushFrenemyListCacheResponse";
    case EMsg.k_EMsgClientMMSSetLobbyLinked:
      return "k_EMsgClientMMSSetLobbyLinked";
    case EMsg.k_EMsgClientMMSSetRatelimitPolicyOnClient:
      return "k_EMsgClientMMSSetRatelimitPolicyOnClient";
    case EMsg.k_EMsgClientMMSGetLobbyStatus:
      return "k_EMsgClientMMSGetLobbyStatus";
    case EMsg.k_EMsgClientMMSGetLobbyStatusResponse:
      return "k_EMsgClientMMSGetLobbyStatusResponse";
    case EMsg.k_EMsgMMSGetLobbyList:
      return "k_EMsgMMSGetLobbyList";
    case EMsg.k_EMsgMMSGetLobbyListResponse:
      return "k_EMsgMMSGetLobbyListResponse";
    case EMsg.k_EMsgNonStdMsgBase:
      return "k_EMsgNonStdMsgBase";
    case EMsg.k_EMsgNonStdMsgMemcached:
      return "k_EMsgNonStdMsgMemcached";
    case EMsg.k_EMsgNonStdMsgHTTPServer:
      return "k_EMsgNonStdMsgHTTPServer";
    case EMsg.k_EMsgNonStdMsgHTTPClient:
      return "k_EMsgNonStdMsgHTTPClient";
    case EMsg.k_EMsgNonStdMsgWGResponse:
      return "k_EMsgNonStdMsgWGResponse";
    case EMsg.k_EMsgNonStdMsgPHPSimulator:
      return "k_EMsgNonStdMsgPHPSimulator";
    case EMsg.k_EMsgNonStdMsgChase:
      return "k_EMsgNonStdMsgChase";
    case EMsg.k_EMsgNonStdMsgDFSTransfer:
      return "k_EMsgNonStdMsgDFSTransfer";
    case EMsg.k_EMsgNonStdMsgTests:
      return "k_EMsgNonStdMsgTests";
    case EMsg.k_EMsgNonStdMsgUMQpipeAAPL:
      return "k_EMsgNonStdMsgUMQpipeAAPL";
    case EMsg.k_EMSgNonStdMsgSyslog:
      return "k_EMSgNonStdMsgSyslog";
    case EMsg.k_EMsgNonStdMsgLogsink:
      return "k_EMsgNonStdMsgLogsink";
    case EMsg.k_EMsgNonStdMsgSteam2Emulator:
      return "k_EMsgNonStdMsgSteam2Emulator";
    case EMsg.k_EMsgNonStdMsgRTMPServer:
      return "k_EMsgNonStdMsgRTMPServer";
    case EMsg.k_EMsgNonStdMsgWebSocket:
      return "k_EMsgNonStdMsgWebSocket";
    case EMsg.k_EMsgNonStdMsgRedis:
      return "k_EMsgNonStdMsgRedis";
    case EMsg.k_EMsgUDSBase:
      return "k_EMsgUDSBase";
    case EMsg.k_EMsgClientUDSP2PSessionStarted:
      return "k_EMsgClientUDSP2PSessionStarted";
    case EMsg.k_EMsgClientUDSP2PSessionEnded:
      return "k_EMsgClientUDSP2PSessionEnded";
    case EMsg.k_EMsgUDSRenderUserAuth:
      return "k_EMsgUDSRenderUserAuth";
    case EMsg.k_EMsgUDSRenderUserAuthResponse:
      return "k_EMsgUDSRenderUserAuthResponse";
    case EMsg.k_EMsgClientInviteToGame:
      return "k_EMsgClientInviteToGame";
    case EMsg.k_EMsgUDSHasSession:
      return "k_EMsgUDSHasSession";
    case EMsg.k_EMsgUDSHasSessionResponse:
      return "k_EMsgUDSHasSessionResponse";
    case EMsg.k_EMsgMPASBase:
      return "k_EMsgMPASBase";
    case EMsg.k_EMsgMPASVacBanReset:
      return "k_EMsgMPASVacBanReset";
    case EMsg.k_EMsgKGSBase:
      return "k_EMsgKGSBase";
    case EMsg.k_EMsgUCMBase:
      return "k_EMsgUCMBase";
    case EMsg.k_EMsgClientUCMAddScreenshot:
      return "k_EMsgClientUCMAddScreenshot";
    case EMsg.k_EMsgClientUCMAddScreenshotResponse:
      return "k_EMsgClientUCMAddScreenshotResponse";
    case EMsg.k_EMsgUCMResetCommunityContent:
      return "k_EMsgUCMResetCommunityContent";
    case EMsg.k_EMsgUCMResetCommunityContentResponse:
      return "k_EMsgUCMResetCommunityContentResponse";
    case EMsg.k_EMsgClientUCMDeleteScreenshot:
      return "k_EMsgClientUCMDeleteScreenshot";
    case EMsg.k_EMsgClientUCMDeleteScreenshotResponse:
      return "k_EMsgClientUCMDeleteScreenshotResponse";
    case EMsg.k_EMsgClientUCMPublishFile:
      return "k_EMsgClientUCMPublishFile";
    case EMsg.k_EMsgClientUCMPublishFileResponse:
      return "k_EMsgClientUCMPublishFileResponse";
    case EMsg.k_EMsgClientUCMDeletePublishedFile:
      return "k_EMsgClientUCMDeletePublishedFile";
    case EMsg.k_EMsgClientUCMDeletePublishedFileResponse:
      return "k_EMsgClientUCMDeletePublishedFileResponse";
    case EMsg.k_EMsgClientUCMUpdatePublishedFile:
      return "k_EMsgClientUCMUpdatePublishedFile";
    case EMsg.k_EMsgClientUCMUpdatePublishedFileResponse:
      return "k_EMsgClientUCMUpdatePublishedFileResponse";
    case EMsg.k_EMsgUCMUpdatePublishedFile:
      return "k_EMsgUCMUpdatePublishedFile";
    case EMsg.k_EMsgUCMUpdatePublishedFileResponse:
      return "k_EMsgUCMUpdatePublishedFileResponse";
    case EMsg.k_EMsgUCMUpdatePublishedFileStat:
      return "k_EMsgUCMUpdatePublishedFileStat";
    case EMsg.k_EMsgUCMReloadPublishedFile:
      return "k_EMsgUCMReloadPublishedFile";
    case EMsg.k_EMsgUCMReloadUserFileListCaches:
      return "k_EMsgUCMReloadUserFileListCaches";
    case EMsg.k_EMsgUCMPublishedFileReported:
      return "k_EMsgUCMPublishedFileReported";
    case EMsg.k_EMsgUCMPublishedFilePreviewAdd:
      return "k_EMsgUCMPublishedFilePreviewAdd";
    case EMsg.k_EMsgUCMPublishedFilePreviewAddResponse:
      return "k_EMsgUCMPublishedFilePreviewAddResponse";
    case EMsg.k_EMsgUCMPublishedFilePreviewRemove:
      return "k_EMsgUCMPublishedFilePreviewRemove";
    case EMsg.k_EMsgUCMPublishedFilePreviewRemoveResponse:
      return "k_EMsgUCMPublishedFilePreviewRemoveResponse";
    case EMsg.k_EMsgUCMPublishedFileSubscribed:
      return "k_EMsgUCMPublishedFileSubscribed";
    case EMsg.k_EMsgUCMPublishedFileUnsubscribed:
      return "k_EMsgUCMPublishedFileUnsubscribed";
    case EMsg.k_EMsgUCMPublishFile:
      return "k_EMsgUCMPublishFile";
    case EMsg.k_EMsgUCMPublishFileResponse:
      return "k_EMsgUCMPublishFileResponse";
    case EMsg.k_EMsgUCMPublishedFileChildAdd:
      return "k_EMsgUCMPublishedFileChildAdd";
    case EMsg.k_EMsgUCMPublishedFileChildAddResponse:
      return "k_EMsgUCMPublishedFileChildAddResponse";
    case EMsg.k_EMsgUCMPublishedFileChildRemove:
      return "k_EMsgUCMPublishedFileChildRemove";
    case EMsg.k_EMsgUCMPublishedFileChildRemoveResponse:
      return "k_EMsgUCMPublishedFileChildRemoveResponse";
    case EMsg.k_EMsgUCMPublishedFileParentChanged:
      return "k_EMsgUCMPublishedFileParentChanged";
    case EMsg.k_EMsgClientUCMSetUserPublishedFileAction:
      return "k_EMsgClientUCMSetUserPublishedFileAction";
    case EMsg.k_EMsgClientUCMSetUserPublishedFileActionResponse:
      return "k_EMsgClientUCMSetUserPublishedFileActionResponse";
    case EMsg.k_EMsgClientUCMEnumeratePublishedFilesByUserAction:
      return "k_EMsgClientUCMEnumeratePublishedFilesByUserAction";
    case EMsg.k_EMsgClientUCMEnumeratePublishedFilesByUserActionResponse:
      return "k_EMsgClientUCMEnumeratePublishedFilesByUserActionResponse";
    case EMsg.k_EMsgUCMGetUserSubscribedFiles:
      return "k_EMsgUCMGetUserSubscribedFiles";
    case EMsg.k_EMsgUCMGetUserSubscribedFilesResponse:
      return "k_EMsgUCMGetUserSubscribedFilesResponse";
    case EMsg.k_EMsgUCMFixStatsPublishedFile:
      return "k_EMsgUCMFixStatsPublishedFile";
    case EMsg.k_EMsgClientUCMEnumerateUserSubscribedFilesWithUpdates:
      return "k_EMsgClientUCMEnumerateUserSubscribedFilesWithUpdates";
    case EMsg.k_EMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse:
      return "k_EMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse";
    case EMsg.k_EMsgUCMPublishedFileContentUpdated:
      return "k_EMsgUCMPublishedFileContentUpdated";
    case EMsg.k_EMsgClientUCMPublishedFileUpdated:
      return "k_EMsgClientUCMPublishedFileUpdated";
    case EMsg.k_EMsgFSBase:
      return "k_EMsgFSBase";
    case EMsg.k_EMsgClientRichPresenceUpload:
      return "k_EMsgClientRichPresenceUpload";
    case EMsg.k_EMsgClientRichPresenceRequest:
      return "k_EMsgClientRichPresenceRequest";
    case EMsg.k_EMsgClientRichPresenceInfo:
      return "k_EMsgClientRichPresenceInfo";
    case EMsg.k_EMsgFSRichPresenceRequest:
      return "k_EMsgFSRichPresenceRequest";
    case EMsg.k_EMsgFSRichPresenceResponse:
      return "k_EMsgFSRichPresenceResponse";
    case EMsg.k_EMsgFSComputeFrenematrix:
      return "k_EMsgFSComputeFrenematrix";
    case EMsg.k_EMsgFSComputeFrenematrixResponse:
      return "k_EMsgFSComputeFrenematrixResponse";
    case EMsg.k_EMsgFSPlayStatusNotification:
      return "k_EMsgFSPlayStatusNotification";
    case EMsg.k_EMsgFSAddOrRemoveFollower:
      return "k_EMsgFSAddOrRemoveFollower";
    case EMsg.k_EMsgFSAddOrRemoveFollowerResponse:
      return "k_EMsgFSAddOrRemoveFollowerResponse";
    case EMsg.k_EMsgFSUpdateFollowingList:
      return "k_EMsgFSUpdateFollowingList";
    case EMsg.k_EMsgFSCommentNotification:
      return "k_EMsgFSCommentNotification";
    case EMsg.k_EMsgFSCommentNotificationViewed:
      return "k_EMsgFSCommentNotificationViewed";
    case EMsg.k_EMsgClientFSGetFollowerCount:
      return "k_EMsgClientFSGetFollowerCount";
    case EMsg.k_EMsgClientFSGetFollowerCountResponse:
      return "k_EMsgClientFSGetFollowerCountResponse";
    case EMsg.k_EMsgClientFSGetIsFollowing:
      return "k_EMsgClientFSGetIsFollowing";
    case EMsg.k_EMsgClientFSGetIsFollowingResponse:
      return "k_EMsgClientFSGetIsFollowingResponse";
    case EMsg.k_EMsgClientFSEnumerateFollowingList:
      return "k_EMsgClientFSEnumerateFollowingList";
    case EMsg.k_EMsgClientFSEnumerateFollowingListResponse:
      return "k_EMsgClientFSEnumerateFollowingListResponse";
    case EMsg.k_EMsgFSGetPendingNotificationCount:
      return "k_EMsgFSGetPendingNotificationCount";
    case EMsg.k_EMsgFSGetPendingNotificationCountResponse:
      return "k_EMsgFSGetPendingNotificationCountResponse";
    case EMsg.k_EMsgClientChatOfflineMessageNotification:
      return "k_EMsgClientChatOfflineMessageNotification";
    case EMsg.k_EMsgClientChatRequestOfflineMessageCount:
      return "k_EMsgClientChatRequestOfflineMessageCount";
    case EMsg.k_EMsgClientChatGetFriendMessageHistory:
      return "k_EMsgClientChatGetFriendMessageHistory";
    case EMsg.k_EMsgClientChatGetFriendMessageHistoryResponse:
      return "k_EMsgClientChatGetFriendMessageHistoryResponse";
    case EMsg.k_EMsgClientChatGetFriendMessageHistoryForOfflineMessages:
      return "k_EMsgClientChatGetFriendMessageHistoryForOfflineMessages";
    case EMsg.k_EMsgClientFSGetFriendsSteamLevels:
      return "k_EMsgClientFSGetFriendsSteamLevels";
    case EMsg.k_EMsgClientFSGetFriendsSteamLevelsResponse:
      return "k_EMsgClientFSGetFriendsSteamLevelsResponse";
    case EMsg.k_EMsgAMRequestFriendData:
      return "k_EMsgAMRequestFriendData";
    case EMsg.k_EMsgDRMRange2:
      return "k_EMsgDRMRange2";
    case EMsg.k_EMsgCEGVersionSetEnableDisableRequest:
      return "k_EMsgCEGVersionSetEnableDisableRequest";
    case EMsg.k_EMsgCEGVersionSetEnableDisableResponse:
      return "k_EMsgCEGVersionSetEnableDisableResponse";
    case EMsg.k_EMsgCEGPropStatusDRMSRequest:
      return "k_EMsgCEGPropStatusDRMSRequest";
    case EMsg.k_EMsgCEGPropStatusDRMSResponse:
      return "k_EMsgCEGPropStatusDRMSResponse";
    case EMsg.k_EMsgCEGWhackFailureReportRequest:
      return "k_EMsgCEGWhackFailureReportRequest";
    case EMsg.k_EMsgCEGWhackFailureReportResponse:
      return "k_EMsgCEGWhackFailureReportResponse";
    case EMsg.k_EMsgDRMSFetchVersionSet:
      return "k_EMsgDRMSFetchVersionSet";
    case EMsg.k_EMsgDRMSFetchVersionSetResponse:
      return "k_EMsgDRMSFetchVersionSetResponse";
    case EMsg.k_EMsgEconBase:
      return "k_EMsgEconBase";
    case EMsg.k_EMsgEconTrading_InitiateTradeRequest:
      return "k_EMsgEconTrading_InitiateTradeRequest";
    case EMsg.k_EMsgEconTrading_InitiateTradeProposed:
      return "k_EMsgEconTrading_InitiateTradeProposed";
    case EMsg.k_EMsgEconTrading_InitiateTradeResponse:
      return "k_EMsgEconTrading_InitiateTradeResponse";
    case EMsg.k_EMsgEconTrading_InitiateTradeResult:
      return "k_EMsgEconTrading_InitiateTradeResult";
    case EMsg.k_EMsgEconTrading_StartSession:
      return "k_EMsgEconTrading_StartSession";
    case EMsg.k_EMsgEconTrading_CancelTradeRequest:
      return "k_EMsgEconTrading_CancelTradeRequest";
    case EMsg.k_EMsgEconFlushInventoryCache:
      return "k_EMsgEconFlushInventoryCache";
    case EMsg.k_EMsgEconFlushInventoryCacheResponse:
      return "k_EMsgEconFlushInventoryCacheResponse";
    case EMsg.k_EMsgEconCDKeyProcessTransaction:
      return "k_EMsgEconCDKeyProcessTransaction";
    case EMsg.k_EMsgEconCDKeyProcessTransactionResponse:
      return "k_EMsgEconCDKeyProcessTransactionResponse";
    case EMsg.k_EMsgEconGetErrorLogs:
      return "k_EMsgEconGetErrorLogs";
    case EMsg.k_EMsgEconGetErrorLogsResponse:
      return "k_EMsgEconGetErrorLogsResponse";
    case EMsg.k_EMsgRMRange:
      return "k_EMsgRMRange";
    case EMsg.k_EMsgRMTestVerisignOTP:
      return "k_EMsgRMTestVerisignOTP";
    case EMsg.k_EMsgRMTestVerisignOTPResponse:
      return "k_EMsgRMTestVerisignOTPResponse";
    case EMsg.k_EMsgRMDeleteMemcachedKeys:
      return "k_EMsgRMDeleteMemcachedKeys";
    case EMsg.k_EMsgRMRemoteInvoke:
      return "k_EMsgRMRemoteInvoke";
    case EMsg.k_EMsgBadLoginIPList:
      return "k_EMsgBadLoginIPList";
    case EMsg.k_EMsgRMMsgTraceAddTrigger:
      return "k_EMsgRMMsgTraceAddTrigger";
    case EMsg.k_EMsgRMMsgTraceRemoveTrigger:
      return "k_EMsgRMMsgTraceRemoveTrigger";
    case EMsg.k_EMsgRMMsgTraceEvent:
      return "k_EMsgRMMsgTraceEvent";
    case EMsg.k_EMsgUGSBase:
      return "k_EMsgUGSBase";
    case EMsg.k_EMsgUGSUpdateGlobalStats:
      return "k_EMsgUGSUpdateGlobalStats";
    case EMsg.k_EMsgClientUGSGetGlobalStats:
      return "k_EMsgClientUGSGetGlobalStats";
    case EMsg.k_EMsgClientUGSGetGlobalStatsResponse:
      return "k_EMsgClientUGSGetGlobalStatsResponse";
    case EMsg.k_EMsgStoreBase:
      return "k_EMsgStoreBase";
    case EMsg.k_EMsgUMQBase:
      return "k_EMsgUMQBase";
    case EMsg.k_EMsgUMQLogonRequest:
      return "k_EMsgUMQLogonRequest";
    case EMsg.k_EMsgUMQLogonResponse:
      return "k_EMsgUMQLogonResponse";
    case EMsg.k_EMsgUMQLogoffRequest:
      return "k_EMsgUMQLogoffRequest";
    case EMsg.k_EMsgUMQLogoffResponse:
      return "k_EMsgUMQLogoffResponse";
    case EMsg.k_EMsgUMQSendChatMessage:
      return "k_EMsgUMQSendChatMessage";
    case EMsg.k_EMsgUMQIncomingChatMessage:
      return "k_EMsgUMQIncomingChatMessage";
    case EMsg.k_EMsgUMQPoll:
      return "k_EMsgUMQPoll";
    case EMsg.k_EMsgUMQPollResults:
      return "k_EMsgUMQPollResults";
    case EMsg.k_EMsgUMQ2AM_ClientMsgBatch:
      return "k_EMsgUMQ2AM_ClientMsgBatch";
    case EMsg.k_EMsgWorkshopBase:
      return "k_EMsgWorkshopBase";
    case EMsg.k_EMsgWebAPIBase:
      return "k_EMsgWebAPIBase";
    case EMsg.k_EMsgWebAPIValidateOAuth2Token:
      return "k_EMsgWebAPIValidateOAuth2Token";
    case EMsg.k_EMsgWebAPIValidateOAuth2TokenResponse:
      return "k_EMsgWebAPIValidateOAuth2TokenResponse";
    case EMsg.k_EMsgWebAPIRegisterGCInterfaces:
      return "k_EMsgWebAPIRegisterGCInterfaces";
    case EMsg.k_EMsgWebAPIInvalidateOAuthClientCache:
      return "k_EMsgWebAPIInvalidateOAuthClientCache";
    case EMsg.k_EMsgWebAPIInvalidateOAuthTokenCache:
      return "k_EMsgWebAPIInvalidateOAuthTokenCache";
    case EMsg.k_EMsgWebAPISetSecrets:
      return "k_EMsgWebAPISetSecrets";
    case EMsg.k_EMsgBackpackBase:
      return "k_EMsgBackpackBase";
    case EMsg.k_EMsgBackpackAddToCurrency:
      return "k_EMsgBackpackAddToCurrency";
    case EMsg.k_EMsgBackpackAddToCurrencyResponse:
      return "k_EMsgBackpackAddToCurrencyResponse";
    case EMsg.k_EMsgCREBase:
      return "k_EMsgCREBase";
    case EMsg.k_EMsgCREItemVoteSummary:
      return "k_EMsgCREItemVoteSummary";
    case EMsg.k_EMsgCREItemVoteSummaryResponse:
      return "k_EMsgCREItemVoteSummaryResponse";
    case EMsg.k_EMsgCREUpdateUserPublishedItemVote:
      return "k_EMsgCREUpdateUserPublishedItemVote";
    case EMsg.k_EMsgCREUpdateUserPublishedItemVoteResponse:
      return "k_EMsgCREUpdateUserPublishedItemVoteResponse";
    case EMsg.k_EMsgCREGetUserPublishedItemVoteDetails:
      return "k_EMsgCREGetUserPublishedItemVoteDetails";
    case EMsg.k_EMsgCREGetUserPublishedItemVoteDetailsResponse:
      return "k_EMsgCREGetUserPublishedItemVoteDetailsResponse";
    case EMsg.k_EMsgSecretsBase:
      return "k_EMsgSecretsBase";
    case EMsg.k_EMsgSecretsRequestCredentialPair:
      return "k_EMsgSecretsRequestCredentialPair";
    case EMsg.k_EMsgSecretsCredentialPairResponse:
      return "k_EMsgSecretsCredentialPairResponse";
    case EMsg.k_EMsgBoxMonitorBase:
      return "k_EMsgBoxMonitorBase";
    case EMsg.k_EMsgBoxMonitorReportRequest:
      return "k_EMsgBoxMonitorReportRequest";
    case EMsg.k_EMsgBoxMonitorReportResponse:
      return "k_EMsgBoxMonitorReportResponse";
    case EMsg.k_EMsgLogsinkBase:
      return "k_EMsgLogsinkBase";
    case EMsg.k_EMsgLogsinkWriteReport:
      return "k_EMsgLogsinkWriteReport";
    case EMsg.k_EMsgPICSBase:
      return "k_EMsgPICSBase";
    case EMsg.k_EMsgClientPICSChangesSinceRequest:
      return "k_EMsgClientPICSChangesSinceRequest";
    case EMsg.k_EMsgClientPICSChangesSinceResponse:
      return "k_EMsgClientPICSChangesSinceResponse";
    case EMsg.k_EMsgClientPICSProductInfoRequest:
      return "k_EMsgClientPICSProductInfoRequest";
    case EMsg.k_EMsgClientPICSProductInfoResponse:
      return "k_EMsgClientPICSProductInfoResponse";
    case EMsg.k_EMsgClientPICSAccessTokenRequest:
      return "k_EMsgClientPICSAccessTokenRequest";
    case EMsg.k_EMsgClientPICSAccessTokenResponse:
      return "k_EMsgClientPICSAccessTokenResponse";
    case EMsg.k_EMsgWorkerProcess:
      return "k_EMsgWorkerProcess";
    case EMsg.k_EMsgWorkerProcessPingRequest:
      return "k_EMsgWorkerProcessPingRequest";
    case EMsg.k_EMsgWorkerProcessPingResponse:
      return "k_EMsgWorkerProcessPingResponse";
    case EMsg.k_EMsgWorkerProcessShutdown:
      return "k_EMsgWorkerProcessShutdown";
    case EMsg.k_EMsgDRMWorkerProcess:
      return "k_EMsgDRMWorkerProcess";
    case EMsg.k_EMsgDRMWorkerProcessDRMAndSign:
      return "k_EMsgDRMWorkerProcessDRMAndSign";
    case EMsg.k_EMsgDRMWorkerProcessDRMAndSignResponse:
      return "k_EMsgDRMWorkerProcessDRMAndSignResponse";
    case EMsg.k_EMsgDRMWorkerProcessSteamworksInfoRequest:
      return "k_EMsgDRMWorkerProcessSteamworksInfoRequest";
    case EMsg.k_EMsgDRMWorkerProcessSteamworksInfoResponse:
      return "k_EMsgDRMWorkerProcessSteamworksInfoResponse";
    case EMsg.k_EMsgDRMWorkerProcessInstallDRMDLLRequest:
      return "k_EMsgDRMWorkerProcessInstallDRMDLLRequest";
    case EMsg.k_EMsgDRMWorkerProcessInstallDRMDLLResponse:
      return "k_EMsgDRMWorkerProcessInstallDRMDLLResponse";
    case EMsg.k_EMsgDRMWorkerProcessSecretIdStringRequest:
      return "k_EMsgDRMWorkerProcessSecretIdStringRequest";
    case EMsg.k_EMsgDRMWorkerProcessSecretIdStringResponse:
      return "k_EMsgDRMWorkerProcessSecretIdStringResponse";
    case EMsg.k_EMsgDRMWorkerProcessInstallProcessedFilesRequest:
      return "k_EMsgDRMWorkerProcessInstallProcessedFilesRequest";
    case EMsg.k_EMsgDRMWorkerProcessInstallProcessedFilesResponse:
      return "k_EMsgDRMWorkerProcessInstallProcessedFilesResponse";
    case EMsg.k_EMsgDRMWorkerProcessExamineBlobRequest:
      return "k_EMsgDRMWorkerProcessExamineBlobRequest";
    case EMsg.k_EMsgDRMWorkerProcessExamineBlobResponse:
      return "k_EMsgDRMWorkerProcessExamineBlobResponse";
    case EMsg.k_EMsgDRMWorkerProcessDescribeSecretRequest:
      return "k_EMsgDRMWorkerProcessDescribeSecretRequest";
    case EMsg.k_EMsgDRMWorkerProcessDescribeSecretResponse:
      return "k_EMsgDRMWorkerProcessDescribeSecretResponse";
    case EMsg.k_EMsgDRMWorkerProcessBackfillOriginalRequest:
      return "k_EMsgDRMWorkerProcessBackfillOriginalRequest";
    case EMsg.k_EMsgDRMWorkerProcessBackfillOriginalResponse:
      return "k_EMsgDRMWorkerProcessBackfillOriginalResponse";
    case EMsg.k_EMsgDRMWorkerProcessValidateDRMDLLRequest:
      return "k_EMsgDRMWorkerProcessValidateDRMDLLRequest";
    case EMsg.k_EMsgDRMWorkerProcessValidateDRMDLLResponse:
      return "k_EMsgDRMWorkerProcessValidateDRMDLLResponse";
    case EMsg.k_EMsgDRMWorkerProcessValidateFileRequest:
      return "k_EMsgDRMWorkerProcessValidateFileRequest";
    case EMsg.k_EMsgDRMWorkerProcessValidateFileResponse:
      return "k_EMsgDRMWorkerProcessValidateFileResponse";
    case EMsg.k_EMsgDRMWorkerProcessSplitAndInstallRequest:
      return "k_EMsgDRMWorkerProcessSplitAndInstallRequest";
    case EMsg.k_EMsgDRMWorkerProcessSplitAndInstallResponse:
      return "k_EMsgDRMWorkerProcessSplitAndInstallResponse";
    case EMsg.k_EMsgDRMWorkerProcessGetBlobRequest:
      return "k_EMsgDRMWorkerProcessGetBlobRequest";
    case EMsg.k_EMsgDRMWorkerProcessGetBlobResponse:
      return "k_EMsgDRMWorkerProcessGetBlobResponse";
    case EMsg.k_EMsgDRMWorkerProcessEvaluateCrashRequest:
      return "k_EMsgDRMWorkerProcessEvaluateCrashRequest";
    case EMsg.k_EMsgDRMWorkerProcessEvaluateCrashResponse:
      return "k_EMsgDRMWorkerProcessEvaluateCrashResponse";
    case EMsg.k_EMsgDRMWorkerProcessAnalyzeFileRequest:
      return "k_EMsgDRMWorkerProcessAnalyzeFileRequest";
    case EMsg.k_EMsgDRMWorkerProcessAnalyzeFileResponse:
      return "k_EMsgDRMWorkerProcessAnalyzeFileResponse";
    case EMsg.k_EMsgDRMWorkerProcessUnpackBlobRequest:
      return "k_EMsgDRMWorkerProcessUnpackBlobRequest";
    case EMsg.k_EMsgDRMWorkerProcessUnpackBlobResponse:
      return "k_EMsgDRMWorkerProcessUnpackBlobResponse";
    case EMsg.k_EMsgDRMWorkerProcessInstallAllRequest:
      return "k_EMsgDRMWorkerProcessInstallAllRequest";
    case EMsg.k_EMsgDRMWorkerProcessInstallAllResponse:
      return "k_EMsgDRMWorkerProcessInstallAllResponse";
    case EMsg.k_EMsgTestWorkerProcess:
      return "k_EMsgTestWorkerProcess";
    case EMsg.k_EMsgTestWorkerProcessLoadUnloadModuleRequest:
      return "k_EMsgTestWorkerProcessLoadUnloadModuleRequest";
    case EMsg.k_EMsgTestWorkerProcessLoadUnloadModuleResponse:
      return "k_EMsgTestWorkerProcessLoadUnloadModuleResponse";
    case EMsg.k_EMsgTestWorkerProcessServiceModuleCallRequest:
      return "k_EMsgTestWorkerProcessServiceModuleCallRequest";
    case EMsg.k_EMsgTestWorkerProcessServiceModuleCallResponse:
      return "k_EMsgTestWorkerProcessServiceModuleCallResponse";
    case EMsg.k_EMsgQuestServerBase:
      return "k_EMsgQuestServerBase";
    case EMsg.k_EMsgClientGetEmoticonList:
      return "k_EMsgClientGetEmoticonList";
    case EMsg.k_EMsgClientEmoticonList:
      return "k_EMsgClientEmoticonList";
    case EMsg.k_EMsgSLCBase:
      return "k_EMsgSLCBase";
    case EMsg.k_EMsgSLCUserSessionStatus:
      return "k_EMsgSLCUserSessionStatus";
    case EMsg.k_EMsgSLCRequestUserSessionStatus:
      return "k_EMsgSLCRequestUserSessionStatus";
    case EMsg.k_EMsgSLCSharedLicensesLockStatus:
      return "k_EMsgSLCSharedLicensesLockStatus";
    case EMsg.k_EMsgClientSharedLibraryLockStatus:
      return "k_EMsgClientSharedLibraryLockStatus";
    case EMsg.k_EMsgClientSharedLibraryStopPlaying:
      return "k_EMsgClientSharedLibraryStopPlaying";
    case EMsg.k_EMsgSLCOwnerLibraryChanged:
      return "k_EMsgSLCOwnerLibraryChanged";
    case EMsg.k_EMsgSLCSharedLibraryChanged:
      return "k_EMsgSLCSharedLibraryChanged";
    case EMsg.k_EMsgRemoteClientBase:
      return "k_EMsgRemoteClientBase";
    case EMsg.k_EMsgRemoteClientAuth_OBSOLETE:
      return "k_EMsgRemoteClientAuth_OBSOLETE";
    case EMsg.k_EMsgRemoteClientAuthResponse_OBSOLETE:
      return "k_EMsgRemoteClientAuthResponse_OBSOLETE";
    case EMsg.k_EMsgRemoteClientAppStatus:
      return "k_EMsgRemoteClientAppStatus";
    case EMsg.k_EMsgRemoteClientStartStream:
      return "k_EMsgRemoteClientStartStream";
    case EMsg.k_EMsgRemoteClientStartStreamResponse:
      return "k_EMsgRemoteClientStartStreamResponse";
    case EMsg.k_EMsgRemoteClientPing:
      return "k_EMsgRemoteClientPing";
    case EMsg.k_EMsgRemoteClientPingResponse:
      return "k_EMsgRemoteClientPingResponse";
    case EMsg.k_EMsgClientUnlockH264:
      return "k_EMsgClientUnlockH264";
    case EMsg.k_EMsgClientUnlockH264Response:
      return "k_EMsgClientUnlockH264Response";
    case EMsg.k_EMsgRemoteClientAcceptEULA:
      return "k_EMsgRemoteClientAcceptEULA";
    case EMsg.k_EMsgRemoteClientGetControllerConfig:
      return "k_EMsgRemoteClientGetControllerConfig";
    case EMsg.k_EMsgRemoteClientGetControllerConfigResponse:
      return "k_EMsgRemoteClientGetControllerConfigResponse";
    case EMsg.k_EMsgRemoteClientStreamingEnabled:
      return "k_EMsgRemoteClientStreamingEnabled";
    case EMsg.k_EMsgClientUnlockHEVC_OBSOLETE:
      return "k_EMsgClientUnlockHEVC_OBSOLETE";
    case EMsg.k_EMsgClientUnlockHEVCResponse_OBSOLETE:
      return "k_EMsgClientUnlockHEVCResponse_OBSOLETE";
    case EMsg.k_EMsgRemoteClientStatusRequest:
      return "k_EMsgRemoteClientStatusRequest";
    case EMsg.k_EMsgRemoteClientStatusResponse:
      return "k_EMsgRemoteClientStatusResponse";
    case EMsg.k_EMsgClientConcurrentSessionsBase:
      return "k_EMsgClientConcurrentSessionsBase";
    case EMsg.k_EMsgClientPlayingSessionState:
      return "k_EMsgClientPlayingSessionState";
    case EMsg.k_EMsgClientKickPlayingSession:
      return "k_EMsgClientKickPlayingSession";
    case EMsg.k_EMsgClientBroadcastBase:
      return "k_EMsgClientBroadcastBase";
    case EMsg.k_EMsgClientBroadcastInit:
      return "k_EMsgClientBroadcastInit";
    case EMsg.k_EMsgClientBroadcastFrames:
      return "k_EMsgClientBroadcastFrames";
    case EMsg.k_EMsgClientBroadcastDisconnect:
      return "k_EMsgClientBroadcastDisconnect";
    case EMsg.k_EMsgClientBroadcastUploadConfig:
      return "k_EMsgClientBroadcastUploadConfig";
    case EMsg.k_EMsgBaseClient3:
      return "k_EMsgBaseClient3";
    case EMsg.k_EMsgClientVoiceCallPreAuthorize:
      return "k_EMsgClientVoiceCallPreAuthorize";
    case EMsg.k_EMsgClientVoiceCallPreAuthorizeResponse:
      return "k_EMsgClientVoiceCallPreAuthorizeResponse";
    case EMsg.k_EMsgClientServerTimestampRequest:
      return "k_EMsgClientServerTimestampRequest";
    case EMsg.k_EMsgClientServerTimestampResponse:
      return "k_EMsgClientServerTimestampResponse";
    case EMsg.k_EMsgServiceMethodCallFromClientNonAuthed:
      return "k_EMsgServiceMethodCallFromClientNonAuthed";
    case EMsg.k_EMsgClientHello:
      return "k_EMsgClientHello";
    case EMsg.k_EMsgClientEnableOrDisableDownloads:
      return "k_EMsgClientEnableOrDisableDownloads";
    case EMsg.k_EMsgClientEnableOrDisableDownloadsResponse:
      return "k_EMsgClientEnableOrDisableDownloadsResponse";
    case EMsg.k_EMsgClientLANP2PBase:
      return "k_EMsgClientLANP2PBase";
    case EMsg.k_EMsgClientLANP2PRequestChunk:
      return "k_EMsgClientLANP2PRequestChunk";
    case EMsg.k_EMsgClientLANP2PRequestChunkResponse:
      return "k_EMsgClientLANP2PRequestChunkResponse";
    case EMsg.k_EMsgClientPeerChunkRequest:
      return "k_EMsgClientPeerChunkRequest";
    case EMsg.k_EMsgClientPeerChunkResponse:
      return "k_EMsgClientPeerChunkResponse";
    case EMsg.k_EMsgClientLANP2PMax:
      return "k_EMsgClientLANP2PMax";
    case EMsg.k_EMsgBaseWatchdogServer:
      return "k_EMsgBaseWatchdogServer";
    case EMsg.k_EMsgNotifyWatchdog:
      return "k_EMsgNotifyWatchdog";
    case EMsg.k_EMsgClientSiteLicenseBase:
      return "k_EMsgClientSiteLicenseBase";
    case EMsg.k_EMsgClientSiteLicenseSiteInfoNotification:
      return "k_EMsgClientSiteLicenseSiteInfoNotification";
    case EMsg.k_EMsgClientSiteLicenseCheckout:
      return "k_EMsgClientSiteLicenseCheckout";
    case EMsg.k_EMsgClientSiteLicenseCheckoutResponse:
      return "k_EMsgClientSiteLicenseCheckoutResponse";
    case EMsg.k_EMsgClientSiteLicenseGetAvailableSeats:
      return "k_EMsgClientSiteLicenseGetAvailableSeats";
    case EMsg.k_EMsgClientSiteLicenseGetAvailableSeatsResponse:
      return "k_EMsgClientSiteLicenseGetAvailableSeatsResponse";
    case EMsg.k_EMsgClientSiteLicenseGetContentCacheInfo:
      return "k_EMsgClientSiteLicenseGetContentCacheInfo";
    case EMsg.k_EMsgClientSiteLicenseGetContentCacheInfoResponse:
      return "k_EMsgClientSiteLicenseGetContentCacheInfoResponse";
    case EMsg.k_EMsgBaseChatServer:
      return "k_EMsgBaseChatServer";
    case EMsg.k_EMsgChatServerGetPendingNotificationCount:
      return "k_EMsgChatServerGetPendingNotificationCount";
    case EMsg.k_EMsgChatServerGetPendingNotificationCountResponse:
      return "k_EMsgChatServerGetPendingNotificationCountResponse";
    case EMsg.k_EMsgBaseSecretServer:
      return "k_EMsgBaseSecretServer";
    case EMsg.k_EMsgServerSecretChanged:
      return "k_EMsgServerSecretChanged";
    case EMsg.k_EMsgBaseWG:
      return "k_EMsgBaseWG";
    case EMsg.k_EMsgWGConnectionProtocolError:
      return "k_EMsgWGConnectionProtocolError";
    case EMsg.k_EMsgWGConnectionValidateUserToken:
      return "k_EMsgWGConnectionValidateUserToken";
    case EMsg.k_EMsgWGConnectionValidateUserTokenResponse:
      return "k_EMsgWGConnectionValidateUserTokenResponse";
    case EMsg.k_EMsgWGConnectionLegacyWGRequest:
      return "k_EMsgWGConnectionLegacyWGRequest";
    case EMsg.k_EMsgWGConnectionLegacyWGResponse:
      return "k_EMsgWGConnectionLegacyWGResponse";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EMsg");
  }
}

export enum EClientPersonaStateFlag {
  k_EClientPersonaStateFlagStatus = 1,
  k_EClientPersonaStateFlagPlayerName = 2,
  k_EClientPersonaStateFlagQueryPort = 4,
  k_EClientPersonaStateFlagSourceID = 8,
  k_EClientPersonaStateFlagPresence = 16,
  k_EClientPersonaStateFlagLastSeen = 64,
  k_EClientPersonaStateFlagUserClanRank = 128,
  k_EClientPersonaStateGameExtraInfo = 256,
  k_EClientPersonaStateGameDataBlob = 512,
  k_EClientPersonaStateFlagClanData = 1024,
  k_EClientPersonaStateFlagFacebook = 2048,
  k_EClientPersonaStateFlagRichPresence = 4096,
  k_EClientPersonaStateFlagBroadcast = 8192,
  k_EClientPersonaStateFlagWatching = 16384,
}

export function eClientPersonaStateFlagFromJSON(object: any): EClientPersonaStateFlag {
  switch (object) {
    case 1:
    case "k_EClientPersonaStateFlagStatus":
      return EClientPersonaStateFlag.k_EClientPersonaStateFlagStatus;
    case 2:
    case "k_EClientPersonaStateFlagPlayerName":
      return EClientPersonaStateFlag.k_EClientPersonaStateFlagPlayerName;
    case 4:
    case "k_EClientPersonaStateFlagQueryPort":
      return EClientPersonaStateFlag.k_EClientPersonaStateFlagQueryPort;
    case 8:
    case "k_EClientPersonaStateFlagSourceID":
      return EClientPersonaStateFlag.k_EClientPersonaStateFlagSourceID;
    case 16:
    case "k_EClientPersonaStateFlagPresence":
      return EClientPersonaStateFlag.k_EClientPersonaStateFlagPresence;
    case 64:
    case "k_EClientPersonaStateFlagLastSeen":
      return EClientPersonaStateFlag.k_EClientPersonaStateFlagLastSeen;
    case 128:
    case "k_EClientPersonaStateFlagUserClanRank":
      return EClientPersonaStateFlag.k_EClientPersonaStateFlagUserClanRank;
    case 256:
    case "k_EClientPersonaStateGameExtraInfo":
      return EClientPersonaStateFlag.k_EClientPersonaStateGameExtraInfo;
    case 512:
    case "k_EClientPersonaStateGameDataBlob":
      return EClientPersonaStateFlag.k_EClientPersonaStateGameDataBlob;
    case 1024:
    case "k_EClientPersonaStateFlagClanData":
      return EClientPersonaStateFlag.k_EClientPersonaStateFlagClanData;
    case 2048:
    case "k_EClientPersonaStateFlagFacebook":
      return EClientPersonaStateFlag.k_EClientPersonaStateFlagFacebook;
    case 4096:
    case "k_EClientPersonaStateFlagRichPresence":
      return EClientPersonaStateFlag.k_EClientPersonaStateFlagRichPresence;
    case 8192:
    case "k_EClientPersonaStateFlagBroadcast":
      return EClientPersonaStateFlag.k_EClientPersonaStateFlagBroadcast;
    case 16384:
    case "k_EClientPersonaStateFlagWatching":
      return EClientPersonaStateFlag.k_EClientPersonaStateFlagWatching;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EClientPersonaStateFlag");
  }
}

export function eClientPersonaStateFlagToJSON(object: EClientPersonaStateFlag): string {
  switch (object) {
    case EClientPersonaStateFlag.k_EClientPersonaStateFlagStatus:
      return "k_EClientPersonaStateFlagStatus";
    case EClientPersonaStateFlag.k_EClientPersonaStateFlagPlayerName:
      return "k_EClientPersonaStateFlagPlayerName";
    case EClientPersonaStateFlag.k_EClientPersonaStateFlagQueryPort:
      return "k_EClientPersonaStateFlagQueryPort";
    case EClientPersonaStateFlag.k_EClientPersonaStateFlagSourceID:
      return "k_EClientPersonaStateFlagSourceID";
    case EClientPersonaStateFlag.k_EClientPersonaStateFlagPresence:
      return "k_EClientPersonaStateFlagPresence";
    case EClientPersonaStateFlag.k_EClientPersonaStateFlagLastSeen:
      return "k_EClientPersonaStateFlagLastSeen";
    case EClientPersonaStateFlag.k_EClientPersonaStateFlagUserClanRank:
      return "k_EClientPersonaStateFlagUserClanRank";
    case EClientPersonaStateFlag.k_EClientPersonaStateGameExtraInfo:
      return "k_EClientPersonaStateGameExtraInfo";
    case EClientPersonaStateFlag.k_EClientPersonaStateGameDataBlob:
      return "k_EClientPersonaStateGameDataBlob";
    case EClientPersonaStateFlag.k_EClientPersonaStateFlagClanData:
      return "k_EClientPersonaStateFlagClanData";
    case EClientPersonaStateFlag.k_EClientPersonaStateFlagFacebook:
      return "k_EClientPersonaStateFlagFacebook";
    case EClientPersonaStateFlag.k_EClientPersonaStateFlagRichPresence:
      return "k_EClientPersonaStateFlagRichPresence";
    case EClientPersonaStateFlag.k_EClientPersonaStateFlagBroadcast:
      return "k_EClientPersonaStateFlagBroadcast";
    case EClientPersonaStateFlag.k_EClientPersonaStateFlagWatching:
      return "k_EClientPersonaStateFlagWatching";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EClientPersonaStateFlag");
  }
}

export enum EMsgClanAccountFlags {
  k_EMsgClanAccountFlagPublic = 1,
  k_EMsgClanAccountFlagLarge = 2,
  k_EMsgClanAccountFlagLocked = 4,
  k_EMsgClanAccountFlagDisabled = 8,
  k_EMsgClanAccountFlagOGG = 16,
}

export function eMsgClanAccountFlagsFromJSON(object: any): EMsgClanAccountFlags {
  switch (object) {
    case 1:
    case "k_EMsgClanAccountFlagPublic":
      return EMsgClanAccountFlags.k_EMsgClanAccountFlagPublic;
    case 2:
    case "k_EMsgClanAccountFlagLarge":
      return EMsgClanAccountFlags.k_EMsgClanAccountFlagLarge;
    case 4:
    case "k_EMsgClanAccountFlagLocked":
      return EMsgClanAccountFlags.k_EMsgClanAccountFlagLocked;
    case 8:
    case "k_EMsgClanAccountFlagDisabled":
      return EMsgClanAccountFlags.k_EMsgClanAccountFlagDisabled;
    case 16:
    case "k_EMsgClanAccountFlagOGG":
      return EMsgClanAccountFlags.k_EMsgClanAccountFlagOGG;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EMsgClanAccountFlags");
  }
}

export function eMsgClanAccountFlagsToJSON(object: EMsgClanAccountFlags): string {
  switch (object) {
    case EMsgClanAccountFlags.k_EMsgClanAccountFlagPublic:
      return "k_EMsgClanAccountFlagPublic";
    case EMsgClanAccountFlags.k_EMsgClanAccountFlagLarge:
      return "k_EMsgClanAccountFlagLarge";
    case EMsgClanAccountFlags.k_EMsgClanAccountFlagLocked:
      return "k_EMsgClanAccountFlagLocked";
    case EMsgClanAccountFlags.k_EMsgClanAccountFlagDisabled:
      return "k_EMsgClanAccountFlagDisabled";
    case EMsgClanAccountFlags.k_EMsgClanAccountFlagOGG:
      return "k_EMsgClanAccountFlagOGG";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EMsgClanAccountFlags");
  }
}

export enum ESteamReviewScore {
  k_ESteamReviewScore_OverwhelminglyPositive = 9,
  k_ESteamReviewScore_VeryPositive = 8,
  k_ESteamReviewScore_Positive = 7,
  k_ESteamReviewScore_MostlyPositive = 6,
  k_ESteamReviewScore_Mixed = 5,
  k_ESteamReviewScore_MostlyNegative = 4,
  k_ESteamReviewScore_Negative = 3,
  k_ESteamReviewScore_VeryNegative = 2,
  k_ESteamReviewScore_OverwhelminglyNegative = 1,
  k_ESteamReviewScore_None = 0,
}

export function eSteamReviewScoreFromJSON(object: any): ESteamReviewScore {
  switch (object) {
    case 9:
    case "k_ESteamReviewScore_OverwhelminglyPositive":
      return ESteamReviewScore.k_ESteamReviewScore_OverwhelminglyPositive;
    case 8:
    case "k_ESteamReviewScore_VeryPositive":
      return ESteamReviewScore.k_ESteamReviewScore_VeryPositive;
    case 7:
    case "k_ESteamReviewScore_Positive":
      return ESteamReviewScore.k_ESteamReviewScore_Positive;
    case 6:
    case "k_ESteamReviewScore_MostlyPositive":
      return ESteamReviewScore.k_ESteamReviewScore_MostlyPositive;
    case 5:
    case "k_ESteamReviewScore_Mixed":
      return ESteamReviewScore.k_ESteamReviewScore_Mixed;
    case 4:
    case "k_ESteamReviewScore_MostlyNegative":
      return ESteamReviewScore.k_ESteamReviewScore_MostlyNegative;
    case 3:
    case "k_ESteamReviewScore_Negative":
      return ESteamReviewScore.k_ESteamReviewScore_Negative;
    case 2:
    case "k_ESteamReviewScore_VeryNegative":
      return ESteamReviewScore.k_ESteamReviewScore_VeryNegative;
    case 1:
    case "k_ESteamReviewScore_OverwhelminglyNegative":
      return ESteamReviewScore.k_ESteamReviewScore_OverwhelminglyNegative;
    case 0:
    case "k_ESteamReviewScore_None":
      return ESteamReviewScore.k_ESteamReviewScore_None;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESteamReviewScore");
  }
}

export function eSteamReviewScoreToJSON(object: ESteamReviewScore): string {
  switch (object) {
    case ESteamReviewScore.k_ESteamReviewScore_OverwhelminglyPositive:
      return "k_ESteamReviewScore_OverwhelminglyPositive";
    case ESteamReviewScore.k_ESteamReviewScore_VeryPositive:
      return "k_ESteamReviewScore_VeryPositive";
    case ESteamReviewScore.k_ESteamReviewScore_Positive:
      return "k_ESteamReviewScore_Positive";
    case ESteamReviewScore.k_ESteamReviewScore_MostlyPositive:
      return "k_ESteamReviewScore_MostlyPositive";
    case ESteamReviewScore.k_ESteamReviewScore_Mixed:
      return "k_ESteamReviewScore_Mixed";
    case ESteamReviewScore.k_ESteamReviewScore_MostlyNegative:
      return "k_ESteamReviewScore_MostlyNegative";
    case ESteamReviewScore.k_ESteamReviewScore_Negative:
      return "k_ESteamReviewScore_Negative";
    case ESteamReviewScore.k_ESteamReviewScore_VeryNegative:
      return "k_ESteamReviewScore_VeryNegative";
    case ESteamReviewScore.k_ESteamReviewScore_OverwhelminglyNegative:
      return "k_ESteamReviewScore_OverwhelminglyNegative";
    case ESteamReviewScore.k_ESteamReviewScore_None:
      return "k_ESteamReviewScore_None";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESteamReviewScore");
  }
}

export enum ECodecUsagePlatform {
  k_ECodecUsagePlatformUnknown = 0,
  k_ECodecUsagePlatformWindows = 1,
  k_ECodecUsagePlatformMacOS = 2,
  k_ECodecUsagePlatformLinux = 3,
  k_ECodecUsagePlatformSteamDeck = 4,
}

export function eCodecUsagePlatformFromJSON(object: any): ECodecUsagePlatform {
  switch (object) {
    case 0:
    case "k_ECodecUsagePlatformUnknown":
      return ECodecUsagePlatform.k_ECodecUsagePlatformUnknown;
    case 1:
    case "k_ECodecUsagePlatformWindows":
      return ECodecUsagePlatform.k_ECodecUsagePlatformWindows;
    case 2:
    case "k_ECodecUsagePlatformMacOS":
      return ECodecUsagePlatform.k_ECodecUsagePlatformMacOS;
    case 3:
    case "k_ECodecUsagePlatformLinux":
      return ECodecUsagePlatform.k_ECodecUsagePlatformLinux;
    case 4:
    case "k_ECodecUsagePlatformSteamDeck":
      return ECodecUsagePlatform.k_ECodecUsagePlatformSteamDeck;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ECodecUsagePlatform");
  }
}

export function eCodecUsagePlatformToJSON(object: ECodecUsagePlatform): string {
  switch (object) {
    case ECodecUsagePlatform.k_ECodecUsagePlatformUnknown:
      return "k_ECodecUsagePlatformUnknown";
    case ECodecUsagePlatform.k_ECodecUsagePlatformWindows:
      return "k_ECodecUsagePlatformWindows";
    case ECodecUsagePlatform.k_ECodecUsagePlatformMacOS:
      return "k_ECodecUsagePlatformMacOS";
    case ECodecUsagePlatform.k_ECodecUsagePlatformLinux:
      return "k_ECodecUsagePlatformLinux";
    case ECodecUsagePlatform.k_ECodecUsagePlatformSteamDeck:
      return "k_ECodecUsagePlatformSteamDeck";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ECodecUsagePlatform");
  }
}

export enum ECodecUsageReason {
  k_ECodecUsageReasonUnknown = 0,
  k_ECodecUsageReasonRemotePlay = 1,
  k_ECodecUsageReasonBroadcasting = 2,
  k_ECodecUsageReasonGameVideo = 3,
}

export function eCodecUsageReasonFromJSON(object: any): ECodecUsageReason {
  switch (object) {
    case 0:
    case "k_ECodecUsageReasonUnknown":
      return ECodecUsageReason.k_ECodecUsageReasonUnknown;
    case 1:
    case "k_ECodecUsageReasonRemotePlay":
      return ECodecUsageReason.k_ECodecUsageReasonRemotePlay;
    case 2:
    case "k_ECodecUsageReasonBroadcasting":
      return ECodecUsageReason.k_ECodecUsageReasonBroadcasting;
    case 3:
    case "k_ECodecUsageReasonGameVideo":
      return ECodecUsageReason.k_ECodecUsageReasonGameVideo;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ECodecUsageReason");
  }
}

export function eCodecUsageReasonToJSON(object: ECodecUsageReason): string {
  switch (object) {
    case ECodecUsageReason.k_ECodecUsageReasonUnknown:
      return "k_ECodecUsageReasonUnknown";
    case ECodecUsageReason.k_ECodecUsageReasonRemotePlay:
      return "k_ECodecUsageReasonRemotePlay";
    case ECodecUsageReason.k_ECodecUsageReasonBroadcasting:
      return "k_ECodecUsageReasonBroadcasting";
    case ECodecUsageReason.k_ECodecUsageReasonGameVideo:
      return "k_ECodecUsageReasonGameVideo";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ECodecUsageReason");
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
