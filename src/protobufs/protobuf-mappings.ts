import * as protobufs from './index';
import { MessageFns } from './protobuf-utils';
export const ClientProtobufs = {
    [protobufs.EDOTAGCMsg.k_EMsgGCBroadcastNotification]: protobufs.CMsgDOTABroadcastNotification as MessageFns<protobufs.CMsgDOTABroadcastNotification>,
    [protobufs.EDOTAGCMsg.k_EMsgGCKickedFromMatchmakingQueue]: protobufs.CMsgDOTAKickedFromMatchmakingQueue as MessageFns<protobufs.CMsgDOTAKickedFromMatchmakingQueue>,
    [protobufs.EDOTAGCMsg.k_EMsgGCSpectateFriendGame]: protobufs.CMsgSpectateFriendGame as MessageFns<protobufs.CMsgSpectateFriendGame>,
    [protobufs.EDOTAGCMsg.k_EMsgGCReportsRemainingRequest]: protobufs.CMsgDOTAReportsRemainingRequest as MessageFns<protobufs.CMsgDOTAReportsRemainingRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgGCSubmitPlayerReport]: protobufs.CMsgDOTASubmitPlayerReport as MessageFns<protobufs.CMsgDOTASubmitPlayerReport>,
    [protobufs.EDOTAGCMsg.k_EMsgGCSubmitPlayerReportV2]: protobufs.CMsgDOTASubmitPlayerReportV2 as MessageFns<protobufs.CMsgDOTASubmitPlayerReportV2>,
    [protobufs.EDOTAGCMsg.k_EMsgGCSubmitPlayerReportResponseV2]: protobufs.CMsgDOTASubmitPlayerReportResponseV2 as MessageFns<protobufs.CMsgDOTASubmitPlayerReportResponseV2>,
    [protobufs.EDOTAGCMsg.k_EMsgGCWatchGame]: protobufs.CMsgWatchGame as MessageFns<protobufs.CMsgWatchGame>,
    [protobufs.EDOTAGCMsg.k_EMsgGCMatchDetailsRequest]: protobufs.CMsgGCMatchDetailsRequest as MessageFns<protobufs.CMsgGCMatchDetailsRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgGCCancelWatchGame]: protobufs.CMsgCancelWatchGame as MessageFns<protobufs.CMsgCancelWatchGame>,
    [protobufs.EDOTAGCMsg.k_EMsgGCPopup]: protobufs.CMsgDOTAPopup as MessageFns<protobufs.CMsgDOTAPopup>,
    [protobufs.EDOTAGCMsg.k_EMsgGCBalancedShuffleLobby]: protobufs.CMsgBalancedShuffleLobby as MessageFns<protobufs.CMsgBalancedShuffleLobby>,
    [protobufs.EDOTAGCMsg.k_EMsgGCMatchmakingStatsRequest]: protobufs.CMsgDOTAMatchmakingStatsRequest as MessageFns<protobufs.CMsgDOTAMatchmakingStatsRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgGCSetMatchHistoryAccess]: protobufs.CMsgDOTASetMatchHistoryAccess as MessageFns<protobufs.CMsgDOTASetMatchHistoryAccess>,
    [protobufs.EDOTAGCMsg.k_EMsgUpgradeLeagueItem]: protobufs.CMsgUpgradeLeagueItem as MessageFns<protobufs.CMsgUpgradeLeagueItem>,
    [protobufs.EDOTAGCMsg.k_EMsgGCWatchDownloadedReplay]: protobufs.CMsgGCWatchDownloadedReplay as MessageFns<protobufs.CMsgGCWatchDownloadedReplay>,
    [protobufs.EDOTAGCMsg.k_EMsgClientsRejoinChatChannels]: protobufs.CMsgClientsRejoinChatChannels as MessageFns<protobufs.CMsgClientsRejoinChatChannels>,
    [protobufs.EDOTAGCMsg.k_EMsgGCGetHeroStandings]: protobufs.CMsgGCGetHeroStandings as MessageFns<protobufs.CMsgGCGetHeroStandings>,
    [protobufs.EDOTAGCMsg.k_EMsgGCItemEditorReservationsRequest]: protobufs.CMsgGCItemEditorReservationsRequest as MessageFns<protobufs.CMsgGCItemEditorReservationsRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgGCItemEditorReserveItemDef]: protobufs.CMsgGCItemEditorReserveItemDef as MessageFns<protobufs.CMsgGCItemEditorReserveItemDef>,
    [protobufs.EDOTAGCMsg.k_EMsgGCItemEditorReleaseReservation]: protobufs.CMsgGCItemEditorReleaseReservation as MessageFns<protobufs.CMsgGCItemEditorReleaseReservation>,
    [protobufs.EDOTAGCMsg.k_EMsgGCFlipLobbyTeams]: protobufs.CMsgFlipLobbyTeams as MessageFns<protobufs.CMsgFlipLobbyTeams>,
    [protobufs.EDOTAGCMsg.k_EMsgGCNotifyAccountFlagsChange]: protobufs.CMsgDOTANotifyAccountFlagsChange as MessageFns<protobufs.CMsgDOTANotifyAccountFlagsChange>,
    [protobufs.EDOTAGCMsg.k_EMsgGCSetProfilePrivacy]: protobufs.CMsgDOTASetProfilePrivacy as MessageFns<protobufs.CMsgDOTASetProfilePrivacy>,
    [protobufs.EDOTAGCMsg.k_EMsgGCClientSuspended]: protobufs.CMsgClientSuspended as MessageFns<protobufs.CMsgClientSuspended>,
    [protobufs.EDOTAGCMsg.k_EMsgGCLobbyUpdateBroadcastChannelInfo]: protobufs.CMsgGCLobbyUpdateBroadcastChannelInfo as MessageFns<protobufs.CMsgGCLobbyUpdateBroadcastChannelInfo>,
    [protobufs.EDOTAGCMsg.k_EMsgDOTAGetEventPoints]: protobufs.CMsgDOTAGetEventPoints as MessageFns<protobufs.CMsgDOTAGetEventPoints>,
    [protobufs.EDOTAGCMsg.k_EMsgGCPartyLeaderWatchGamePrompt]: protobufs.CMsgPartyLeaderWatchGamePrompt as MessageFns<protobufs.CMsgPartyLeaderWatchGamePrompt>,
    [protobufs.EDOTAGCMsg.k_EMsgGCCompendiumDataRequest]: protobufs.CMsgDOTACompendiumDataRequest as MessageFns<protobufs.CMsgDOTACompendiumDataRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgDOTAGetPlayerMatchHistory]: protobufs.CMsgDOTAGetPlayerMatchHistory as MessageFns<protobufs.CMsgDOTAGetPlayerMatchHistory>,
    [protobufs.EDOTAGCMsg.k_EMsgGCNotificationsRequest]: protobufs.CMsgGCNotificationsRequest as MessageFns<protobufs.CMsgGCNotificationsRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgGCLeagueAdminList]: protobufs.CMsgLeagueAdminList as MessageFns<protobufs.CMsgLeagueAdminList>,
    [protobufs.EDOTAGCMsg.k_EMsgGCNotificationsMarkReadRequest]: protobufs.CMsgGCNotificationsMarkReadRequest as MessageFns<protobufs.CMsgGCNotificationsMarkReadRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgGCRankedPlayerInfoSubmit]: protobufs.CMsgGCRankedPlayerInfoSubmit as MessageFns<protobufs.CMsgGCRankedPlayerInfoSubmit>,
    [protobufs.EDOTAGCMsg.k_EMsgGCPlayerInfoSubmit]: protobufs.CMsgGCPlayerInfoSubmit as MessageFns<protobufs.CMsgGCPlayerInfoSubmit>,
    [protobufs.EDOTAGCMsg.k_EMsgGCHasItemQuery]: protobufs.CMsgDOTAHasItemQuery as MessageFns<protobufs.CMsgDOTAHasItemQuery>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCEmoticonDataRequest]: protobufs.CMsgClientToGCEmoticonDataRequest as MessageFns<protobufs.CMsgClientToGCEmoticonDataRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgDOTARedeemItem]: protobufs.CMsgDOTARedeemItem as MessageFns<protobufs.CMsgDOTARedeemItem>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetAllHeroProgress]: protobufs.CMsgClientToGCGetAllHeroProgress as MessageFns<protobufs.CMsgClientToGCGetAllHeroProgress>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetTrophyList]: protobufs.CMsgClientToGCGetTrophyList as MessageFns<protobufs.CMsgClientToGCGetTrophyList>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetProfileCard]: protobufs.CMsgClientToGCGetProfileCard as MessageFns<protobufs.CMsgClientToGCGetProfileCard>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetProfileCardSlots]: protobufs.CMsgClientToGCSetProfileCardSlots as MessageFns<protobufs.CMsgClientToGCSetProfileCardSlots>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCreateHeroStatue]: protobufs.CMsgClientToGCCreateHeroStatue as MessageFns<protobufs.CMsgClientToGCCreateHeroStatue>,
    [protobufs.EDOTAGCMsg.k_EMsgLobbyEventPoints]: protobufs.CMsgLobbyEventPoints as MessageFns<protobufs.CMsgLobbyEventPoints>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRerollPlayerChallenge]: protobufs.CMsgClientToGCRerollPlayerChallenge as MessageFns<protobufs.CMsgClientToGCRerollPlayerChallenge>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCApplyGemCombiner]: protobufs.CMsgClientToGCApplyGemCombiner as MessageFns<protobufs.CMsgClientToGCApplyGemCombiner>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetAllHeroOrder]: protobufs.CMsgClientToGCGetAllHeroOrder as MessageFns<protobufs.CMsgClientToGCGetAllHeroOrder>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPlayerCardSpecificPurchaseRequest]: protobufs.CMsgClientToGCPlayerCardSpecificPurchaseRequest as MessageFns<protobufs.CMsgClientToGCPlayerCardSpecificPurchaseRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetFilteredPlayers]: protobufs.CMsgClientToGCGetFilteredPlayers as MessageFns<protobufs.CMsgClientToGCGetFilteredPlayers>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRemoveFilteredPlayer]: protobufs.CMsgClientToGCRemoveFilteredPlayer as MessageFns<protobufs.CMsgClientToGCRemoveFilteredPlayer>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUpdatePartyBeacon]: protobufs.CMsgClientToGCUpdatePartyBeacon as MessageFns<protobufs.CMsgClientToGCUpdatePartyBeacon>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestActiveBeaconParties]: protobufs.CMsgClientToGCRequestActiveBeaconParties as MessageFns<protobufs.CMsgClientToGCRequestActiveBeaconParties>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCManageFavorites]: protobufs.CMsgClientToGCManageFavorites as MessageFns<protobufs.CMsgClientToGCManageFavorites>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCJoinPartyFromBeacon]: protobufs.CMsgClientToGCJoinPartyFromBeacon as MessageFns<protobufs.CMsgClientToGCJoinPartyFromBeacon>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetFavoritePlayers]: protobufs.CMsgClientToGCGetFavoritePlayers as MessageFns<protobufs.CMsgClientToGCGetFavoritePlayers>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCVerifyFavoritePlayers]: protobufs.CMsgClientToGCVerifyFavoritePlayers as MessageFns<protobufs.CMsgClientToGCVerifyFavoritePlayers>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPurchaseLabyrinthBlessings]: protobufs.CMsgClientToGCPurchaseLabyrinthBlessings as MessageFns<protobufs.CMsgClientToGCPurchaseLabyrinthBlessings>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPurchaseFilteredPlayerSlot]: protobufs.CMsgClientToGCPurchaseFilteredPlayerSlot as MessageFns<protobufs.CMsgClientToGCPurchaseFilteredPlayerSlot>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUpdateFilteredPlayerNote]: protobufs.CMsgClientToGCUpdateFilteredPlayerNote as MessageFns<protobufs.CMsgClientToGCUpdateFilteredPlayerNote>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCClaimSwag]: protobufs.CMsgClientToGCClaimSwag as MessageFns<protobufs.CMsgClientToGCClaimSwag>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPlayerStatsRequest]: protobufs.CMsgClientToGCPlayerStatsRequest as MessageFns<protobufs.CMsgClientToGCPlayerStatsRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCFindTopSourceTVGames]: protobufs.CMsgClientToGCFindTopSourceTVGames as MessageFns<protobufs.CMsgClientToGCFindTopSourceTVGames>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSocialFeedPostCommentRequest]: protobufs.CMsgClientToGCSocialFeedPostCommentRequest as MessageFns<protobufs.CMsgClientToGCSocialFeedPostCommentRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCustomGamesFriendsPlayedRequest]: protobufs.CMsgClientToGCCustomGamesFriendsPlayedRequest as MessageFns<protobufs.CMsgClientToGCCustomGamesFriendsPlayedRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCFriendsPlayedCustomGameRequest]: protobufs.CMsgClientToGCFriendsPlayedCustomGameRequest as MessageFns<protobufs.CMsgClientToGCFriendsPlayedCustomGameRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgGCTopCustomGamesList]: protobufs.CMsgGCTopCustomGamesList as MessageFns<protobufs.CMsgGCTopCustomGamesList>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetProfileCardStats]: protobufs.CMsgClientToGCGetProfileCardStats as MessageFns<protobufs.CMsgClientToGCGetProfileCardStats>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCTopLeagueMatchesRequest]: protobufs.CMsgClientToGCTopLeagueMatchesRequest as MessageFns<protobufs.CMsgClientToGCTopLeagueMatchesRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCTopFriendMatchesRequest]: protobufs.CMsgClientToGCTopFriendMatchesRequest as MessageFns<protobufs.CMsgClientToGCTopFriendMatchesRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSocialFeedPostMessageRequest]: protobufs.CMsgClientToGCSocialFeedPostMessageRequest as MessageFns<protobufs.CMsgClientToGCSocialFeedPostMessageRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgCustomGameListenServerStartedLoading]: protobufs.CMsgDOTACustomGameListenServerStartedLoading as MessageFns<protobufs.CMsgDOTACustomGameListenServerStartedLoading>,
    [protobufs.EDOTAGCMsg.k_EMsgCustomGameClientFinishedLoading]: protobufs.CMsgDOTACustomGameClientFinishedLoading as MessageFns<protobufs.CMsgDOTACustomGameClientFinishedLoading>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCMatchesMinimalRequest]: protobufs.CMsgClientToGCMatchesMinimalRequest as MessageFns<protobufs.CMsgClientToGCMatchesMinimalRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetProfileTickets]: protobufs.CMsgClientToGCGetProfileTickets as MessageFns<protobufs.CMsgClientToGCGetProfileTickets>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCH264Unsupported]: protobufs.CMsgClientToGCH264Unsupported as MessageFns<protobufs.CMsgClientToGCH264Unsupported>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetQuestProgress]: protobufs.CMsgClientToGCGetQuestProgress as MessageFns<protobufs.CMsgClientToGCGetQuestProgress>,
    [protobufs.EDOTAGCMsg.k_EMsgGCGetHeroStatsHistory]: protobufs.CMsgGCGetHeroStatsHistory as MessageFns<protobufs.CMsgGCGetHeroStatsHistory>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCWageringRequest]: protobufs.CMsgClientToGCWageringRequest as MessageFns<protobufs.CMsgClientToGCWageringRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCHasPlayerVotedForMVP]: protobufs.CMsgClientToGCHasPlayerVotedForMVP as MessageFns<protobufs.CMsgClientToGCHasPlayerVotedForMVP>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCVoteForMVP]: protobufs.CMsgClientToGCVoteForMVP as MessageFns<protobufs.CMsgClientToGCVoteForMVP>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCTeammateStatsRequest]: protobufs.CMsgClientToGCTeammateStatsRequest as MessageFns<protobufs.CMsgClientToGCTeammateStatsRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetGiftPermissions]: protobufs.CMsgClientToGCGetGiftPermissions as MessageFns<protobufs.CMsgClientToGCGetGiftPermissions>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCVoteForArcana]: protobufs.CMsgClientToGCVoteForArcana as MessageFns<protobufs.CMsgClientToGCVoteForArcana>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestArcanaVotesRemaining]: protobufs.CMsgClientToGCRequestArcanaVotesRemaining as MessageFns<protobufs.CMsgClientToGCRequestArcanaVotesRemaining>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPublishUserStat]: protobufs.CMsgClientToGCPublishUserStat as MessageFns<protobufs.CMsgClientToGCPublishUserStat>,
    [protobufs.EDOTAGCMsg.k_EMsgGCSubmitLobbyMVPVote]: protobufs.CMsgDOTASubmitLobbyMVPVote as MessageFns<protobufs.CMsgDOTASubmitLobbyMVPVote>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOpenPlayerCardPack]: protobufs.CMsgClientToGCOpenPlayerCardPack as MessageFns<protobufs.CMsgClientToGCOpenPlayerCardPack>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSelectCompendiumInGamePrediction]: protobufs.CMsgClientToGCSelectCompendiumInGamePrediction as MessageFns<protobufs.CMsgClientToGCSelectCompendiumInGamePrediction>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRecyclePlayerCard]: protobufs.CMsgClientToGCRecyclePlayerCard as MessageFns<protobufs.CMsgClientToGCRecyclePlayerCard>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCreatePlayerCardPack]: protobufs.CMsgClientToGCCreatePlayerCardPack as MessageFns<protobufs.CMsgClientToGCCreatePlayerCardPack>,
    [protobufs.EDOTAGCMsg.k_EMsgGCGetPlayerCardItemInfo]: protobufs.CMsgGCGetPlayerCardItemInfo as MessageFns<protobufs.CMsgGCGetPlayerCardItemInfo>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCTransferSeasonalMMRRequest]: protobufs.CMsgClientToGCTransferSeasonalMMRRequest as MessageFns<protobufs.CMsgClientToGCTransferSeasonalMMRRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCJoinPlaytest]: protobufs.CMsgClientToGCJoinPlaytest as MessageFns<protobufs.CMsgClientToGCJoinPlaytest>,
    [protobufs.EDOTAGCMsg.k_EMsgLobbyPlaytestDetails]: protobufs.CMsgLobbyPlaytestDetails as MessageFns<protobufs.CMsgLobbyPlaytestDetails>,
    [protobufs.EDOTAGCMsg.k_EMsgDOTASetFavoriteTeam]: protobufs.CMsgDOTASetFavoriteTeam as MessageFns<protobufs.CMsgDOTASetFavoriteTeam>,
    [protobufs.EDOTAGCMsg.k_EMsgDOTAClaimEventAction]: protobufs.CMsgDOTAClaimEventAction as MessageFns<protobufs.CMsgDOTAClaimEventAction>,
    [protobufs.EDOTAGCMsg.k_EMsgDOTAGetPeriodicResource]: protobufs.CMsgDOTAGetPeriodicResource as MessageFns<protobufs.CMsgDOTAGetPeriodicResource>,
    [protobufs.EDOTAGCMsg.k_EMsgDOTAPeriodicResourceUpdated]: protobufs.CMsgDOTAPeriodicResourceUpdated as MessageFns<protobufs.CMsgDOTAPeriodicResourceUpdated>,
    [protobufs.EDOTAGCMsg.k_EMsgSubmitTriviaQuestionAnswer]: protobufs.CMsgDOTASubmitTriviaQuestionAnswer as MessageFns<protobufs.CMsgDOTASubmitTriviaQuestionAnswer>,
    [protobufs.EDOTAGCMsg.k_EMsgStartTriviaSession]: protobufs.CMsgDOTAStartTriviaSession as MessageFns<protobufs.CMsgDOTAStartTriviaSession>,
    [protobufs.EDOTAGCMsg.k_EMsgAnchorPhoneNumberRequest]: protobufs.CMsgDOTAAnchorPhoneNumberRequest as MessageFns<protobufs.CMsgDOTAAnchorPhoneNumberRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgUnanchorPhoneNumberRequest]: protobufs.CMsgDOTAUnanchorPhoneNumberRequest as MessageFns<protobufs.CMsgDOTAUnanchorPhoneNumberRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCQuickStatsRequest]: protobufs.CMsgDOTAClientToGCQuickStatsRequest as MessageFns<protobufs.CMsgDOTAClientToGCQuickStatsRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgSelectionPriorityChoiceRequest]: protobufs.CMsgDOTASelectionPriorityChoiceRequest as MessageFns<protobufs.CMsgDOTASelectionPriorityChoiceRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgGameAutographReward]: protobufs.CMsgDOTAGameAutographReward as MessageFns<protobufs.CMsgDOTAGameAutographReward>,
    [protobufs.EDOTAGCMsg.k_EMsgDestroyLobbyRequest]: protobufs.CMsgDOTADestroyLobbyRequest as MessageFns<protobufs.CMsgDOTADestroyLobbyRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgPurchaseItemWithEventPoints]: protobufs.CMsgPurchaseItemWithEventPoints as MessageFns<protobufs.CMsgPurchaseItemWithEventPoints>,
    [protobufs.EDOTAGCMsg.k_EMsgPurchaseHeroRandomRelic]: protobufs.CMsgPurchaseHeroRandomRelic as MessageFns<protobufs.CMsgPurchaseHeroRandomRelic>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCClaimEventActionUsingItem]: protobufs.CMsgClientToGCClaimEventActionUsingItem as MessageFns<protobufs.CMsgClientToGCClaimEventActionUsingItem>,
    [protobufs.EDOTAGCMsg.k_EMsgPartyReadyCheckRequest]: protobufs.CMsgPartyReadyCheckRequest as MessageFns<protobufs.CMsgPartyReadyCheckRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgPartyReadyCheckAcknowledge]: protobufs.CMsgPartyReadyCheckAcknowledge as MessageFns<protobufs.CMsgPartyReadyCheckAcknowledge>,
    [protobufs.EDOTAGCMsg.k_EMsgGetRecentPlayTimeFriendsRequest]: protobufs.CMsgDOTAGetRecentPlayTimeFriendsRequest as MessageFns<protobufs.CMsgDOTAGetRecentPlayTimeFriendsRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgProfileRequest]: protobufs.CMsgProfileRequest as MessageFns<protobufs.CMsgProfileRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgProfileUpdate]: protobufs.CMsgProfileUpdate as MessageFns<protobufs.CMsgProfileUpdate>,
    [protobufs.EDOTAGCMsg.k_EMsgHeroGlobalDataRequest]: protobufs.CMsgHeroGlobalDataRequest as MessageFns<protobufs.CMsgHeroGlobalDataRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestPlusWeeklyChallengeResult]: protobufs.CMsgClientToGCRequestPlusWeeklyChallengeResult as MessageFns<protobufs.CMsgClientToGCRequestPlusWeeklyChallengeResult>,
    [protobufs.EDOTAGCMsg.k_EMsgPrivateMetadataKeyRequest]: protobufs.CMsgPrivateMetadataKeyRequest as MessageFns<protobufs.CMsgPrivateMetadataKeyRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlClaimRoom]: protobufs.CMsgClientToGCCavernCrawlClaimRoom as MessageFns<protobufs.CMsgClientToGCCavernCrawlClaimRoom>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlUseItemOnRoom]: protobufs.CMsgClientToGCCavernCrawlUseItemOnRoom as MessageFns<protobufs.CMsgClientToGCCavernCrawlUseItemOnRoom>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlUseItemOnPath]: protobufs.CMsgClientToGCCavernCrawlUseItemOnPath as MessageFns<protobufs.CMsgClientToGCCavernCrawlUseItemOnPath>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlRequestMapState]: protobufs.CMsgClientToGCCavernCrawlRequestMapState as MessageFns<protobufs.CMsgClientToGCCavernCrawlRequestMapState>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestEventPointLogV2]: protobufs.CMsgClientToGCRequestEventPointLogV2 as MessageFns<protobufs.CMsgClientToGCRequestEventPointLogV2>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestEventPointLogResponseV2]: protobufs.CMsgClientToGCRequestEventPointLogResponseV2 as MessageFns<protobufs.CMsgClientToGCRequestEventPointLogResponseV2>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlGetClaimedRoomCount]: protobufs.CMsgClientToGCCavernCrawlGetClaimedRoomCount as MessageFns<protobufs.CMsgClientToGCCavernCrawlGetClaimedRoomCount>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRecordContestVote]: protobufs.CMsgClientToGCRecordContestVote as MessageFns<protobufs.CMsgClientToGCRecordContestVote>,
    [protobufs.EDOTAGCMsg.k_EMsgLobbyEventGameDetails]: protobufs.CMsgLobbyEventGameDetails as MessageFns<protobufs.CMsgLobbyEventGameDetails>,
    [protobufs.EDOTAGCMsg.k_EMsgDevGrantEventPoints]: protobufs.CMsgDevGrantEventPoints as MessageFns<protobufs.CMsgDevGrantEventPoints>,
    [protobufs.EDOTAGCMsg.k_EMsgDevGrantEventAction]: protobufs.CMsgDevGrantEventAction as MessageFns<protobufs.CMsgDevGrantEventAction>,
    [protobufs.EDOTAGCMsg.k_EMsgDevResetEventState]: protobufs.CMsgDevResetEventState as MessageFns<protobufs.CMsgDevResetEventState>,
    [protobufs.EDOTAGCMsg.k_EMsgConsumeEventSupportGrantItem]: protobufs.CMsgConsumeEventSupportGrantItem as MessageFns<protobufs.CMsgConsumeEventSupportGrantItem>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestPlayerRecentAccomplishments]: protobufs.CMsgClientToGCRequestPlayerRecentAccomplishments as MessageFns<protobufs.CMsgClientToGCRequestPlayerRecentAccomplishments>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestPlayerHeroRecentAccomplishments]: protobufs.CMsgClientToGCRequestPlayerHeroRecentAccomplishments as MessageFns<protobufs.CMsgClientToGCRequestPlayerHeroRecentAccomplishments>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestContestVotes]: protobufs.CMsgClientToGCRequestContestVotes as MessageFns<protobufs.CMsgClientToGCRequestContestVotes>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCMVPVoteTimeout]: protobufs.CMsgClientToGCMVPVoteTimeout as MessageFns<protobufs.CMsgClientToGCMVPVoteTimeout>,
    [protobufs.EDOTAGCMsg.k_EMsgMatchMatchmakingStats]: protobufs.CMsgMatchMatchmakingStats as MessageFns<protobufs.CMsgMatchMatchmakingStats>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSubmitPlayerMatchSurvey]: protobufs.CMsgClientToGCSubmitPlayerMatchSurvey as MessageFns<protobufs.CMsgClientToGCSubmitPlayerMatchSurvey>,
    [protobufs.EDOTAGCMsg.k_EMsgDevDeleteEventActions]: protobufs.CMsgDevDeleteEventActions as MessageFns<protobufs.CMsgDevDeleteEventActions>,
    [protobufs.EDOTAGCMsg.k_EMsgGCSubmitPlayerAvoidRequest]: protobufs.CMsgDOTASubmitPlayerAvoidRequest as MessageFns<protobufs.CMsgDOTASubmitPlayerAvoidRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgGCtoGCAssociatedExploiterAccountInfo]: protobufs.CMsgGCtoGCAssociatedExploiterAccountInfo as MessageFns<protobufs.CMsgGCtoGCAssociatedExploiterAccountInfo>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftBuy]: protobufs.CMsgClientToGCUnderDraftBuy as MessageFns<protobufs.CMsgClientToGCUnderDraftBuy>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftReroll]: protobufs.CMsgClientToGCUnderDraftReroll as MessageFns<protobufs.CMsgClientToGCUnderDraftReroll>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftSell]: protobufs.CMsgClientToGCUnderDraftSell as MessageFns<protobufs.CMsgClientToGCUnderDraftSell>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftRequest]: protobufs.CMsgClientToGCUnderDraftRequest as MessageFns<protobufs.CMsgClientToGCUnderDraftRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftRedeemReward]: protobufs.CMsgClientToGCUnderDraftRedeemReward as MessageFns<protobufs.CMsgClientToGCUnderDraftRedeemReward>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestReporterUpdates]: protobufs.CMsgClientToGCRequestReporterUpdates as MessageFns<protobufs.CMsgClientToGCRequestReporterUpdates>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCAcknowledgeReporterUpdates]: protobufs.CMsgClientToGCAcknowledgeReporterUpdates as MessageFns<protobufs.CMsgClientToGCAcknowledgeReporterUpdates>,
    [protobufs.EDOTAGCMsg.k_EMsgLobbyFeaturedGamemodeProgress]: protobufs.CMsgLobbyFeaturedGamemodeProgress as MessageFns<protobufs.CMsgLobbyFeaturedGamemodeProgress>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSubmitDraftTriviaMatchAnswer]: protobufs.CMsgClientToGCSubmitDraftTriviaMatchAnswer as MessageFns<protobufs.CMsgClientToGCSubmitDraftTriviaMatchAnswer>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftRollBackBench]: protobufs.CMsgClientToGCUnderDraftRollBackBench as MessageFns<protobufs.CMsgClientToGCUnderDraftRollBackBench>,
    [protobufs.EDOTAGCMsg.k_EMsgLobbyEventGameData]: protobufs.CMsgLobbyEventGameData as MessageFns<protobufs.CMsgLobbyEventGameData>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetOWMatchDetails]: protobufs.CMsgClientToGCGetOWMatchDetails as MessageFns<protobufs.CMsgClientToGCGetOWMatchDetails>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSubmitOWConviction]: protobufs.CMsgClientToGCSubmitOWConviction as MessageFns<protobufs.CMsgClientToGCSubmitOWConviction>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRecalibrateMMR]: protobufs.CMsgClientToGCRecalibrateMMR as MessageFns<protobufs.CMsgClientToGCRecalibrateMMR>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCChinaSSAURLRequest]: protobufs.CMsgClientToGCChinaSSAURLRequest as MessageFns<protobufs.CMsgClientToGCChinaSSAURLRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCChinaSSAAcceptedRequest]: protobufs.CMsgClientToGCChinaSSAAcceptedRequest as MessageFns<protobufs.CMsgClientToGCChinaSSAAcceptedRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCStartWatchingOverwatch]: protobufs.CMsgClientToGCStartWatchingOverwatch as MessageFns<protobufs.CMsgClientToGCStartWatchingOverwatch>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCStopWatchingOverwatch]: protobufs.CMsgClientToGCStopWatchingOverwatch as MessageFns<protobufs.CMsgClientToGCStopWatchingOverwatch>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetDPCFavorites]: protobufs.CMsgClientToGCGetDPCFavorites as MessageFns<protobufs.CMsgClientToGCGetDPCFavorites>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetDPCFavoriteState]: protobufs.CMsgClientToGCSetDPCFavoriteState as MessageFns<protobufs.CMsgClientToGCSetDPCFavoriteState>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverwatchReplayError]: protobufs.CMsgClientToGCOverwatchReplayError as MessageFns<protobufs.CMsgClientToGCOverwatchReplayError>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetEventActiveSeasonID]: protobufs.CMsgClientToGCSetEventActiveSeasonID as MessageFns<protobufs.CMsgClientToGCSetEventActiveSeasonID>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCreateTeamPlayerCardPack]: protobufs.CMsgClientToGCCreateTeamPlayerCardPack as MessageFns<protobufs.CMsgClientToGCCreateTeamPlayerCardPack>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetStickerbookRequest]: protobufs.CMsgClientToGCGetStickerbookRequest as MessageFns<protobufs.CMsgClientToGCGetStickerbookRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCreateStickerbookPageRequest]: protobufs.CMsgClientToGCCreateStickerbookPageRequest as MessageFns<protobufs.CMsgClientToGCCreateStickerbookPageRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCDeleteStickerbookPageRequest]: protobufs.CMsgClientToGCDeleteStickerbookPageRequest as MessageFns<protobufs.CMsgClientToGCDeleteStickerbookPageRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPlaceStickersRequest]: protobufs.CMsgClientToGCPlaceStickersRequest as MessageFns<protobufs.CMsgClientToGCPlaceStickersRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPlaceCollectionStickersRequest]: protobufs.CMsgClientToGCPlaceCollectionStickersRequest as MessageFns<protobufs.CMsgClientToGCPlaceCollectionStickersRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOrderStickerbookTeamPageRequest]: protobufs.CMsgClientToGCOrderStickerbookTeamPageRequest as MessageFns<protobufs.CMsgClientToGCOrderStickerbookTeamPageRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetHeroSticker]: protobufs.CMsgClientToGCSetHeroSticker as MessageFns<protobufs.CMsgClientToGCSetHeroSticker>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetHeroStickers]: protobufs.CMsgClientToGCGetHeroStickers as MessageFns<protobufs.CMsgClientToGCGetHeroStickers>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetFavoritePage]: protobufs.CMsgClientToGCSetFavoritePage as MessageFns<protobufs.CMsgClientToGCSetFavoritePage>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCollectorsCacheAvailableDataRequest]: protobufs.CMsgClientToGCCollectorsCacheAvailableDataRequest as MessageFns<protobufs.CMsgClientToGCCollectorsCacheAvailableDataRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUploadMatchClip]: protobufs.CMsgClientToGCUploadMatchClip as MessageFns<protobufs.CMsgClientToGCUploadMatchClip>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRankRequest]: protobufs.CMsgClientToGCRankRequest as MessageFns<protobufs.CMsgClientToGCRankRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCMapStatsRequest]: protobufs.CMsgClientToGCMapStatsRequest as MessageFns<protobufs.CMsgClientToGCMapStatsRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRoadToTIGetQuests]: protobufs.CMsgClientToGCRoadToTIGetQuests as MessageFns<protobufs.CMsgClientToGCRoadToTIGetQuests>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRoadToTIGetActiveQuest]: protobufs.CMsgClientToGCRoadToTIGetActiveQuest as MessageFns<protobufs.CMsgClientToGCRoadToTIGetActiveQuest>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRoadToTIUseItem]: protobufs.CMsgClientToGCRoadToTIUseItem as MessageFns<protobufs.CMsgClientToGCRoadToTIUseItem>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRoadToTIDevForceQuest]: protobufs.CMsgClientToGCRoadToTIDevForceQuest as MessageFns<protobufs.CMsgClientToGCRoadToTIDevForceQuest>,
    [protobufs.EDOTAGCMsg.k_EMsgLobbyRoadToTIMatchQuestData]: protobufs.CMsgLobbyRoadToTIMatchQuestData as MessageFns<protobufs.CMsgLobbyRoadToTIMatchQuestData>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldGetUserData]: protobufs.CMsgClientToGCOverworldGetUserData as MessageFns<protobufs.CMsgClientToGCOverworldGetUserData>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldCompletePath]: protobufs.CMsgClientToGCOverworldCompletePath as MessageFns<protobufs.CMsgClientToGCOverworldCompletePath>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldClaimEncounterReward]: protobufs.CMsgClientToGCOverworldClaimEncounterReward as MessageFns<protobufs.CMsgClientToGCOverworldClaimEncounterReward>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldDevResetAll]: protobufs.CMsgClientToGCOverworldDevResetAll as MessageFns<protobufs.CMsgClientToGCOverworldDevResetAll>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldDevResetNode]: protobufs.CMsgClientToGCOverworldDevResetNode as MessageFns<protobufs.CMsgClientToGCOverworldDevResetNode>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldDevGrantTokens]: protobufs.CMsgClientToGCOverworldDevGrantTokens as MessageFns<protobufs.CMsgClientToGCOverworldDevGrantTokens>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldDevClearInventory]: protobufs.CMsgClientToGCOverworldDevClearInventory as MessageFns<protobufs.CMsgClientToGCOverworldDevClearInventory>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldMoveToNode]: protobufs.CMsgClientToGCOverworldMoveToNode as MessageFns<protobufs.CMsgClientToGCOverworldMoveToNode>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCNewBloomGift]: protobufs.CMsgClientToGCNewBloomGift as MessageFns<protobufs.CMsgClientToGCNewBloomGift>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetBannedHeroes]: protobufs.CMsgClientToGCSetBannedHeroes as MessageFns<protobufs.CMsgClientToGCSetBannedHeroes>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldTradeTokens]: protobufs.CMsgClientToGCOverworldTradeTokens as MessageFns<protobufs.CMsgClientToGCOverworldTradeTokens>,
    [protobufs.EDOTAGCMsg.k_EMsgOverworldEncounterTokenTreasureData]: protobufs.CMsgOverworldEncounterTokenTreasureData as MessageFns<protobufs.CMsgOverworldEncounterTokenTreasureData>,
    [protobufs.EDOTAGCMsg.k_EMsgOverworldEncounterTokenQuestData]: protobufs.CMsgOverworldEncounterTokenQuestData as MessageFns<protobufs.CMsgOverworldEncounterTokenQuestData>,
    [protobufs.EDOTAGCMsg.k_EMsgOverworldEncounterChooseHeroData]: protobufs.CMsgOverworldEncounterChooseHeroData as MessageFns<protobufs.CMsgOverworldEncounterChooseHeroData>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUpdateComicBookStats]: protobufs.CMsgClientToGCUpdateComicBookStats as MessageFns<protobufs.CMsgClientToGCUpdateComicBookStats>,
    [protobufs.EDOTAGCMsg.k_EMsgOverworldEncounterProgressData]: protobufs.CMsgOverworldEncounterProgressData as MessageFns<protobufs.CMsgOverworldEncounterProgressData>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldFeedback]: protobufs.CMsgClientToGCOverworldFeedback as MessageFns<protobufs.CMsgClientToGCOverworldFeedback>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldVisitEncounter]: protobufs.CMsgClientToGCOverworldVisitEncounter as MessageFns<protobufs.CMsgClientToGCOverworldVisitEncounter>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldGiftTokens]: protobufs.CMsgClientToGCOverworldGiftTokens as MessageFns<protobufs.CMsgClientToGCOverworldGiftTokens>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCDotaLabsFeedback]: protobufs.CMsgClientToGCDotaLabsFeedback as MessageFns<protobufs.CMsgClientToGCDotaLabsFeedback>,
    [protobufs.EDOTAGCMsg.k_EMsgOverworldEncounterPitFighterRewardData]: protobufs.CMsgOverworldEncounterPitFighterRewardData as MessageFns<protobufs.CMsgOverworldEncounterPitFighterRewardData>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldGetDynamicImage]: protobufs.CMsgClientToGCOverworldGetDynamicImage as MessageFns<protobufs.CMsgClientToGCOverworldGetDynamicImage>,
    [protobufs.EDOTAGCMsg.k_EMsgGCCompendiumRemoveAllSelections]: protobufs.CMsgDOTACompendiumRemoveAllSelections as MessageFns<protobufs.CMsgDOTACompendiumRemoveAllSelections>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldMinigameAction]: protobufs.CMsgClientToGCOverworldMinigameAction as MessageFns<protobufs.CMsgClientToGCOverworldMinigameAction>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldRequestTokensNeededByFriend]: protobufs.CMsgClientToGCOverworldRequestTokensNeededByFriend as MessageFns<protobufs.CMsgClientToGCOverworldRequestTokensNeededByFriend>,
    [protobufs.EGCBaseClientMsg.k_EMsgGCClientHello]: protobufs.CMsgClientHello as MessageFns<protobufs.CMsgClientHello>,
    [protobufs.EGCBaseClientMsg.k_EMsgGCServerConnectionStatus]: protobufs.CMsgConnectionStatus as MessageFns<protobufs.CMsgConnectionStatus>,
    [protobufs.ESOMsg.k_ESOMsg_CacheSubscriptionRefresh]: protobufs.CMsgSOCacheSubscriptionRefresh as MessageFns<protobufs.CMsgSOCacheSubscriptionRefresh>,
    [protobufs.ESOMsg.k_ESOMsg_CacheSubscribedUpToDate]: protobufs.CMsgSOCacheSubscribedUpToDate as MessageFns<protobufs.CMsgSOCacheSubscribedUpToDate>,
    [protobufs.EGCBaseMsg.k_EMsgGCInviteToParty]: protobufs.CMsgInviteToParty as MessageFns<protobufs.CMsgInviteToParty>,
    [protobufs.EGCBaseMsg.k_EMsgGCInvitationCreated]: protobufs.CMsgInvitationCreated as MessageFns<protobufs.CMsgInvitationCreated>,
    [protobufs.EGCBaseMsg.k_EMsgGCKickFromParty]: protobufs.CMsgKickFromParty as MessageFns<protobufs.CMsgKickFromParty>,
    [protobufs.EGCBaseMsg.k_EMsgGCLeaveParty]: protobufs.CMsgLeaveParty as MessageFns<protobufs.CMsgLeaveParty>,
    [protobufs.EGCBaseMsg.k_EMsgGCServerAvailable]: protobufs.CMsgServerAvailable as MessageFns<protobufs.CMsgServerAvailable>,
    [protobufs.EGCBaseMsg.k_EMsgGCLANServerAvailable]: protobufs.CMsgLANServerAvailable as MessageFns<protobufs.CMsgLANServerAvailable>,
    [protobufs.EGCBaseMsg.k_EMsgGCInviteToLobby]: protobufs.CMsgInviteToLobby as MessageFns<protobufs.CMsgInviteToLobby>,
    [protobufs.EGCBaseMsg.k_EMsgGCAdditionalWelcomeMsgList]: protobufs.CMsgGCAdditionalWelcomeMsgList as MessageFns<protobufs.CMsgGCAdditionalWelcomeMsgList>,
    [protobufs.EGCBaseMsg.k_EMsgClientToGCIntegrityStatus]: protobufs.CMsgClientToGCIntegrityStatus as MessageFns<protobufs.CMsgClientToGCIntegrityStatus>,
    [protobufs.EGCBaseMsg.k_EMsgClientToGCAggregateMetrics]: protobufs.CMsgClientToGCAggregateMetrics as MessageFns<protobufs.CMsgClientToGCAggregateMetrics>,
};
Object.freeze(ClientProtobufs);
export type ClientProtobufsType = {
    [protobufs.EDOTAGCMsg.k_EMsgGCBroadcastNotification]: protobufs.CMsgDOTABroadcastNotification;
    [protobufs.EDOTAGCMsg.k_EMsgGCKickedFromMatchmakingQueue]: protobufs.CMsgDOTAKickedFromMatchmakingQueue;
    [protobufs.EDOTAGCMsg.k_EMsgGCSpectateFriendGame]: protobufs.CMsgSpectateFriendGame;
    [protobufs.EDOTAGCMsg.k_EMsgGCReportsRemainingRequest]: protobufs.CMsgDOTAReportsRemainingRequest;
    [protobufs.EDOTAGCMsg.k_EMsgGCSubmitPlayerReport]: protobufs.CMsgDOTASubmitPlayerReport;
    [protobufs.EDOTAGCMsg.k_EMsgGCSubmitPlayerReportV2]: protobufs.CMsgDOTASubmitPlayerReportV2;
    [protobufs.EDOTAGCMsg.k_EMsgGCSubmitPlayerReportResponseV2]: protobufs.CMsgDOTASubmitPlayerReportResponseV2;
    [protobufs.EDOTAGCMsg.k_EMsgGCWatchGame]: protobufs.CMsgWatchGame;
    [protobufs.EDOTAGCMsg.k_EMsgGCMatchDetailsRequest]: protobufs.CMsgGCMatchDetailsRequest;
    [protobufs.EDOTAGCMsg.k_EMsgGCCancelWatchGame]: protobufs.CMsgCancelWatchGame;
    [protobufs.EDOTAGCMsg.k_EMsgGCPopup]: protobufs.CMsgDOTAPopup;
    [protobufs.EDOTAGCMsg.k_EMsgGCBalancedShuffleLobby]: protobufs.CMsgBalancedShuffleLobby;
    [protobufs.EDOTAGCMsg.k_EMsgGCMatchmakingStatsRequest]: protobufs.CMsgDOTAMatchmakingStatsRequest;
    [protobufs.EDOTAGCMsg.k_EMsgGCSetMatchHistoryAccess]: protobufs.CMsgDOTASetMatchHistoryAccess;
    [protobufs.EDOTAGCMsg.k_EMsgUpgradeLeagueItem]: protobufs.CMsgUpgradeLeagueItem;
    [protobufs.EDOTAGCMsg.k_EMsgGCWatchDownloadedReplay]: protobufs.CMsgGCWatchDownloadedReplay;
    [protobufs.EDOTAGCMsg.k_EMsgClientsRejoinChatChannels]: protobufs.CMsgClientsRejoinChatChannels;
    [protobufs.EDOTAGCMsg.k_EMsgGCGetHeroStandings]: protobufs.CMsgGCGetHeroStandings;
    [protobufs.EDOTAGCMsg.k_EMsgGCItemEditorReservationsRequest]: protobufs.CMsgGCItemEditorReservationsRequest;
    [protobufs.EDOTAGCMsg.k_EMsgGCItemEditorReserveItemDef]: protobufs.CMsgGCItemEditorReserveItemDef;
    [protobufs.EDOTAGCMsg.k_EMsgGCItemEditorReleaseReservation]: protobufs.CMsgGCItemEditorReleaseReservation;
    [protobufs.EDOTAGCMsg.k_EMsgGCFlipLobbyTeams]: protobufs.CMsgFlipLobbyTeams;
    [protobufs.EDOTAGCMsg.k_EMsgGCNotifyAccountFlagsChange]: protobufs.CMsgDOTANotifyAccountFlagsChange;
    [protobufs.EDOTAGCMsg.k_EMsgGCSetProfilePrivacy]: protobufs.CMsgDOTASetProfilePrivacy;
    [protobufs.EDOTAGCMsg.k_EMsgGCClientSuspended]: protobufs.CMsgClientSuspended;
    [protobufs.EDOTAGCMsg.k_EMsgGCLobbyUpdateBroadcastChannelInfo]: protobufs.CMsgGCLobbyUpdateBroadcastChannelInfo;
    [protobufs.EDOTAGCMsg.k_EMsgDOTAGetEventPoints]: protobufs.CMsgDOTAGetEventPoints;
    [protobufs.EDOTAGCMsg.k_EMsgGCPartyLeaderWatchGamePrompt]: protobufs.CMsgPartyLeaderWatchGamePrompt;
    [protobufs.EDOTAGCMsg.k_EMsgGCCompendiumDataRequest]: protobufs.CMsgDOTACompendiumDataRequest;
    [protobufs.EDOTAGCMsg.k_EMsgDOTAGetPlayerMatchHistory]: protobufs.CMsgDOTAGetPlayerMatchHistory;
    [protobufs.EDOTAGCMsg.k_EMsgGCNotificationsRequest]: protobufs.CMsgGCNotificationsRequest;
    [protobufs.EDOTAGCMsg.k_EMsgGCLeagueAdminList]: protobufs.CMsgLeagueAdminList;
    [protobufs.EDOTAGCMsg.k_EMsgGCNotificationsMarkReadRequest]: protobufs.CMsgGCNotificationsMarkReadRequest;
    [protobufs.EDOTAGCMsg.k_EMsgGCRankedPlayerInfoSubmit]: protobufs.CMsgGCRankedPlayerInfoSubmit;
    [protobufs.EDOTAGCMsg.k_EMsgGCPlayerInfoSubmit]: protobufs.CMsgGCPlayerInfoSubmit;
    [protobufs.EDOTAGCMsg.k_EMsgGCHasItemQuery]: protobufs.CMsgDOTAHasItemQuery;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCEmoticonDataRequest]: protobufs.CMsgClientToGCEmoticonDataRequest;
    [protobufs.EDOTAGCMsg.k_EMsgDOTARedeemItem]: protobufs.CMsgDOTARedeemItem;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetAllHeroProgress]: protobufs.CMsgClientToGCGetAllHeroProgress;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetTrophyList]: protobufs.CMsgClientToGCGetTrophyList;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetProfileCard]: protobufs.CMsgClientToGCGetProfileCard;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetProfileCardSlots]: protobufs.CMsgClientToGCSetProfileCardSlots;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCreateHeroStatue]: protobufs.CMsgClientToGCCreateHeroStatue;
    [protobufs.EDOTAGCMsg.k_EMsgLobbyEventPoints]: protobufs.CMsgLobbyEventPoints;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRerollPlayerChallenge]: protobufs.CMsgClientToGCRerollPlayerChallenge;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCApplyGemCombiner]: protobufs.CMsgClientToGCApplyGemCombiner;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetAllHeroOrder]: protobufs.CMsgClientToGCGetAllHeroOrder;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPlayerCardSpecificPurchaseRequest]: protobufs.CMsgClientToGCPlayerCardSpecificPurchaseRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetFilteredPlayers]: protobufs.CMsgClientToGCGetFilteredPlayers;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRemoveFilteredPlayer]: protobufs.CMsgClientToGCRemoveFilteredPlayer;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUpdatePartyBeacon]: protobufs.CMsgClientToGCUpdatePartyBeacon;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestActiveBeaconParties]: protobufs.CMsgClientToGCRequestActiveBeaconParties;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCManageFavorites]: protobufs.CMsgClientToGCManageFavorites;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCJoinPartyFromBeacon]: protobufs.CMsgClientToGCJoinPartyFromBeacon;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetFavoritePlayers]: protobufs.CMsgClientToGCGetFavoritePlayers;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCVerifyFavoritePlayers]: protobufs.CMsgClientToGCVerifyFavoritePlayers;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPurchaseLabyrinthBlessings]: protobufs.CMsgClientToGCPurchaseLabyrinthBlessings;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPurchaseFilteredPlayerSlot]: protobufs.CMsgClientToGCPurchaseFilteredPlayerSlot;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUpdateFilteredPlayerNote]: protobufs.CMsgClientToGCUpdateFilteredPlayerNote;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCClaimSwag]: protobufs.CMsgClientToGCClaimSwag;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPlayerStatsRequest]: protobufs.CMsgClientToGCPlayerStatsRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCFindTopSourceTVGames]: protobufs.CMsgClientToGCFindTopSourceTVGames;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSocialFeedPostCommentRequest]: protobufs.CMsgClientToGCSocialFeedPostCommentRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCustomGamesFriendsPlayedRequest]: protobufs.CMsgClientToGCCustomGamesFriendsPlayedRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCFriendsPlayedCustomGameRequest]: protobufs.CMsgClientToGCFriendsPlayedCustomGameRequest;
    [protobufs.EDOTAGCMsg.k_EMsgGCTopCustomGamesList]: protobufs.CMsgGCTopCustomGamesList;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetProfileCardStats]: protobufs.CMsgClientToGCGetProfileCardStats;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCTopLeagueMatchesRequest]: protobufs.CMsgClientToGCTopLeagueMatchesRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCTopFriendMatchesRequest]: protobufs.CMsgClientToGCTopFriendMatchesRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSocialFeedPostMessageRequest]: protobufs.CMsgClientToGCSocialFeedPostMessageRequest;
    [protobufs.EDOTAGCMsg.k_EMsgCustomGameListenServerStartedLoading]: protobufs.CMsgDOTACustomGameListenServerStartedLoading;
    [protobufs.EDOTAGCMsg.k_EMsgCustomGameClientFinishedLoading]: protobufs.CMsgDOTACustomGameClientFinishedLoading;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCMatchesMinimalRequest]: protobufs.CMsgClientToGCMatchesMinimalRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetProfileTickets]: protobufs.CMsgClientToGCGetProfileTickets;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCH264Unsupported]: protobufs.CMsgClientToGCH264Unsupported;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetQuestProgress]: protobufs.CMsgClientToGCGetQuestProgress;
    [protobufs.EDOTAGCMsg.k_EMsgGCGetHeroStatsHistory]: protobufs.CMsgGCGetHeroStatsHistory;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCWageringRequest]: protobufs.CMsgClientToGCWageringRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCHasPlayerVotedForMVP]: protobufs.CMsgClientToGCHasPlayerVotedForMVP;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCVoteForMVP]: protobufs.CMsgClientToGCVoteForMVP;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCTeammateStatsRequest]: protobufs.CMsgClientToGCTeammateStatsRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetGiftPermissions]: protobufs.CMsgClientToGCGetGiftPermissions;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCVoteForArcana]: protobufs.CMsgClientToGCVoteForArcana;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestArcanaVotesRemaining]: protobufs.CMsgClientToGCRequestArcanaVotesRemaining;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPublishUserStat]: protobufs.CMsgClientToGCPublishUserStat;
    [protobufs.EDOTAGCMsg.k_EMsgGCSubmitLobbyMVPVote]: protobufs.CMsgDOTASubmitLobbyMVPVote;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOpenPlayerCardPack]: protobufs.CMsgClientToGCOpenPlayerCardPack;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSelectCompendiumInGamePrediction]: protobufs.CMsgClientToGCSelectCompendiumInGamePrediction;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRecyclePlayerCard]: protobufs.CMsgClientToGCRecyclePlayerCard;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCreatePlayerCardPack]: protobufs.CMsgClientToGCCreatePlayerCardPack;
    [protobufs.EDOTAGCMsg.k_EMsgGCGetPlayerCardItemInfo]: protobufs.CMsgGCGetPlayerCardItemInfo;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCTransferSeasonalMMRRequest]: protobufs.CMsgClientToGCTransferSeasonalMMRRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCJoinPlaytest]: protobufs.CMsgClientToGCJoinPlaytest;
    [protobufs.EDOTAGCMsg.k_EMsgLobbyPlaytestDetails]: protobufs.CMsgLobbyPlaytestDetails;
    [protobufs.EDOTAGCMsg.k_EMsgDOTASetFavoriteTeam]: protobufs.CMsgDOTASetFavoriteTeam;
    [protobufs.EDOTAGCMsg.k_EMsgDOTAClaimEventAction]: protobufs.CMsgDOTAClaimEventAction;
    [protobufs.EDOTAGCMsg.k_EMsgDOTAGetPeriodicResource]: protobufs.CMsgDOTAGetPeriodicResource;
    [protobufs.EDOTAGCMsg.k_EMsgDOTAPeriodicResourceUpdated]: protobufs.CMsgDOTAPeriodicResourceUpdated;
    [protobufs.EDOTAGCMsg.k_EMsgSubmitTriviaQuestionAnswer]: protobufs.CMsgDOTASubmitTriviaQuestionAnswer;
    [protobufs.EDOTAGCMsg.k_EMsgStartTriviaSession]: protobufs.CMsgDOTAStartTriviaSession;
    [protobufs.EDOTAGCMsg.k_EMsgAnchorPhoneNumberRequest]: protobufs.CMsgDOTAAnchorPhoneNumberRequest;
    [protobufs.EDOTAGCMsg.k_EMsgUnanchorPhoneNumberRequest]: protobufs.CMsgDOTAUnanchorPhoneNumberRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCQuickStatsRequest]: protobufs.CMsgDOTAClientToGCQuickStatsRequest;
    [protobufs.EDOTAGCMsg.k_EMsgSelectionPriorityChoiceRequest]: protobufs.CMsgDOTASelectionPriorityChoiceRequest;
    [protobufs.EDOTAGCMsg.k_EMsgGameAutographReward]: protobufs.CMsgDOTAGameAutographReward;
    [protobufs.EDOTAGCMsg.k_EMsgDestroyLobbyRequest]: protobufs.CMsgDOTADestroyLobbyRequest;
    [protobufs.EDOTAGCMsg.k_EMsgPurchaseItemWithEventPoints]: protobufs.CMsgPurchaseItemWithEventPoints;
    [protobufs.EDOTAGCMsg.k_EMsgPurchaseHeroRandomRelic]: protobufs.CMsgPurchaseHeroRandomRelic;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCClaimEventActionUsingItem]: protobufs.CMsgClientToGCClaimEventActionUsingItem;
    [protobufs.EDOTAGCMsg.k_EMsgPartyReadyCheckRequest]: protobufs.CMsgPartyReadyCheckRequest;
    [protobufs.EDOTAGCMsg.k_EMsgPartyReadyCheckAcknowledge]: protobufs.CMsgPartyReadyCheckAcknowledge;
    [protobufs.EDOTAGCMsg.k_EMsgGetRecentPlayTimeFriendsRequest]: protobufs.CMsgDOTAGetRecentPlayTimeFriendsRequest;
    [protobufs.EDOTAGCMsg.k_EMsgProfileRequest]: protobufs.CMsgProfileRequest;
    [protobufs.EDOTAGCMsg.k_EMsgProfileUpdate]: protobufs.CMsgProfileUpdate;
    [protobufs.EDOTAGCMsg.k_EMsgHeroGlobalDataRequest]: protobufs.CMsgHeroGlobalDataRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestPlusWeeklyChallengeResult]: protobufs.CMsgClientToGCRequestPlusWeeklyChallengeResult;
    [protobufs.EDOTAGCMsg.k_EMsgPrivateMetadataKeyRequest]: protobufs.CMsgPrivateMetadataKeyRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlClaimRoom]: protobufs.CMsgClientToGCCavernCrawlClaimRoom;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlUseItemOnRoom]: protobufs.CMsgClientToGCCavernCrawlUseItemOnRoom;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlUseItemOnPath]: protobufs.CMsgClientToGCCavernCrawlUseItemOnPath;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlRequestMapState]: protobufs.CMsgClientToGCCavernCrawlRequestMapState;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestEventPointLogV2]: protobufs.CMsgClientToGCRequestEventPointLogV2;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestEventPointLogResponseV2]: protobufs.CMsgClientToGCRequestEventPointLogResponseV2;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlGetClaimedRoomCount]: protobufs.CMsgClientToGCCavernCrawlGetClaimedRoomCount;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRecordContestVote]: protobufs.CMsgClientToGCRecordContestVote;
    [protobufs.EDOTAGCMsg.k_EMsgLobbyEventGameDetails]: protobufs.CMsgLobbyEventGameDetails;
    [protobufs.EDOTAGCMsg.k_EMsgDevGrantEventPoints]: protobufs.CMsgDevGrantEventPoints;
    [protobufs.EDOTAGCMsg.k_EMsgDevGrantEventAction]: protobufs.CMsgDevGrantEventAction;
    [protobufs.EDOTAGCMsg.k_EMsgDevResetEventState]: protobufs.CMsgDevResetEventState;
    [protobufs.EDOTAGCMsg.k_EMsgConsumeEventSupportGrantItem]: protobufs.CMsgConsumeEventSupportGrantItem;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestPlayerRecentAccomplishments]: protobufs.CMsgClientToGCRequestPlayerRecentAccomplishments;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestPlayerHeroRecentAccomplishments]: protobufs.CMsgClientToGCRequestPlayerHeroRecentAccomplishments;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestContestVotes]: protobufs.CMsgClientToGCRequestContestVotes;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCMVPVoteTimeout]: protobufs.CMsgClientToGCMVPVoteTimeout;
    [protobufs.EDOTAGCMsg.k_EMsgMatchMatchmakingStats]: protobufs.CMsgMatchMatchmakingStats;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSubmitPlayerMatchSurvey]: protobufs.CMsgClientToGCSubmitPlayerMatchSurvey;
    [protobufs.EDOTAGCMsg.k_EMsgDevDeleteEventActions]: protobufs.CMsgDevDeleteEventActions;
    [protobufs.EDOTAGCMsg.k_EMsgGCSubmitPlayerAvoidRequest]: protobufs.CMsgDOTASubmitPlayerAvoidRequest;
    [protobufs.EDOTAGCMsg.k_EMsgGCtoGCAssociatedExploiterAccountInfo]: protobufs.CMsgGCtoGCAssociatedExploiterAccountInfo;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftBuy]: protobufs.CMsgClientToGCUnderDraftBuy;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftReroll]: protobufs.CMsgClientToGCUnderDraftReroll;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftSell]: protobufs.CMsgClientToGCUnderDraftSell;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftRequest]: protobufs.CMsgClientToGCUnderDraftRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftRedeemReward]: protobufs.CMsgClientToGCUnderDraftRedeemReward;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestReporterUpdates]: protobufs.CMsgClientToGCRequestReporterUpdates;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCAcknowledgeReporterUpdates]: protobufs.CMsgClientToGCAcknowledgeReporterUpdates;
    [protobufs.EDOTAGCMsg.k_EMsgLobbyFeaturedGamemodeProgress]: protobufs.CMsgLobbyFeaturedGamemodeProgress;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSubmitDraftTriviaMatchAnswer]: protobufs.CMsgClientToGCSubmitDraftTriviaMatchAnswer;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftRollBackBench]: protobufs.CMsgClientToGCUnderDraftRollBackBench;
    [protobufs.EDOTAGCMsg.k_EMsgLobbyEventGameData]: protobufs.CMsgLobbyEventGameData;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetOWMatchDetails]: protobufs.CMsgClientToGCGetOWMatchDetails;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSubmitOWConviction]: protobufs.CMsgClientToGCSubmitOWConviction;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRecalibrateMMR]: protobufs.CMsgClientToGCRecalibrateMMR;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCChinaSSAURLRequest]: protobufs.CMsgClientToGCChinaSSAURLRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCChinaSSAAcceptedRequest]: protobufs.CMsgClientToGCChinaSSAAcceptedRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCStartWatchingOverwatch]: protobufs.CMsgClientToGCStartWatchingOverwatch;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCStopWatchingOverwatch]: protobufs.CMsgClientToGCStopWatchingOverwatch;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetDPCFavorites]: protobufs.CMsgClientToGCGetDPCFavorites;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetDPCFavoriteState]: protobufs.CMsgClientToGCSetDPCFavoriteState;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverwatchReplayError]: protobufs.CMsgClientToGCOverwatchReplayError;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetEventActiveSeasonID]: protobufs.CMsgClientToGCSetEventActiveSeasonID;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCreateTeamPlayerCardPack]: protobufs.CMsgClientToGCCreateTeamPlayerCardPack;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetStickerbookRequest]: protobufs.CMsgClientToGCGetStickerbookRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCreateStickerbookPageRequest]: protobufs.CMsgClientToGCCreateStickerbookPageRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCDeleteStickerbookPageRequest]: protobufs.CMsgClientToGCDeleteStickerbookPageRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPlaceStickersRequest]: protobufs.CMsgClientToGCPlaceStickersRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPlaceCollectionStickersRequest]: protobufs.CMsgClientToGCPlaceCollectionStickersRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOrderStickerbookTeamPageRequest]: protobufs.CMsgClientToGCOrderStickerbookTeamPageRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetHeroSticker]: protobufs.CMsgClientToGCSetHeroSticker;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetHeroStickers]: protobufs.CMsgClientToGCGetHeroStickers;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetFavoritePage]: protobufs.CMsgClientToGCSetFavoritePage;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCollectorsCacheAvailableDataRequest]: protobufs.CMsgClientToGCCollectorsCacheAvailableDataRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUploadMatchClip]: protobufs.CMsgClientToGCUploadMatchClip;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRankRequest]: protobufs.CMsgClientToGCRankRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCMapStatsRequest]: protobufs.CMsgClientToGCMapStatsRequest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRoadToTIGetQuests]: protobufs.CMsgClientToGCRoadToTIGetQuests;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRoadToTIGetActiveQuest]: protobufs.CMsgClientToGCRoadToTIGetActiveQuest;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRoadToTIUseItem]: protobufs.CMsgClientToGCRoadToTIUseItem;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRoadToTIDevForceQuest]: protobufs.CMsgClientToGCRoadToTIDevForceQuest;
    [protobufs.EDOTAGCMsg.k_EMsgLobbyRoadToTIMatchQuestData]: protobufs.CMsgLobbyRoadToTIMatchQuestData;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldGetUserData]: protobufs.CMsgClientToGCOverworldGetUserData;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldCompletePath]: protobufs.CMsgClientToGCOverworldCompletePath;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldClaimEncounterReward]: protobufs.CMsgClientToGCOverworldClaimEncounterReward;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldDevResetAll]: protobufs.CMsgClientToGCOverworldDevResetAll;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldDevResetNode]: protobufs.CMsgClientToGCOverworldDevResetNode;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldDevGrantTokens]: protobufs.CMsgClientToGCOverworldDevGrantTokens;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldDevClearInventory]: protobufs.CMsgClientToGCOverworldDevClearInventory;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldMoveToNode]: protobufs.CMsgClientToGCOverworldMoveToNode;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCNewBloomGift]: protobufs.CMsgClientToGCNewBloomGift;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetBannedHeroes]: protobufs.CMsgClientToGCSetBannedHeroes;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldTradeTokens]: protobufs.CMsgClientToGCOverworldTradeTokens;
    [protobufs.EDOTAGCMsg.k_EMsgOverworldEncounterTokenTreasureData]: protobufs.CMsgOverworldEncounterTokenTreasureData;
    [protobufs.EDOTAGCMsg.k_EMsgOverworldEncounterTokenQuestData]: protobufs.CMsgOverworldEncounterTokenQuestData;
    [protobufs.EDOTAGCMsg.k_EMsgOverworldEncounterChooseHeroData]: protobufs.CMsgOverworldEncounterChooseHeroData;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUpdateComicBookStats]: protobufs.CMsgClientToGCUpdateComicBookStats;
    [protobufs.EDOTAGCMsg.k_EMsgOverworldEncounterProgressData]: protobufs.CMsgOverworldEncounterProgressData;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldFeedback]: protobufs.CMsgClientToGCOverworldFeedback;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldVisitEncounter]: protobufs.CMsgClientToGCOverworldVisitEncounter;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldGiftTokens]: protobufs.CMsgClientToGCOverworldGiftTokens;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCDotaLabsFeedback]: protobufs.CMsgClientToGCDotaLabsFeedback;
    [protobufs.EDOTAGCMsg.k_EMsgOverworldEncounterPitFighterRewardData]: protobufs.CMsgOverworldEncounterPitFighterRewardData;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldGetDynamicImage]: protobufs.CMsgClientToGCOverworldGetDynamicImage;
    [protobufs.EDOTAGCMsg.k_EMsgGCCompendiumRemoveAllSelections]: protobufs.CMsgDOTACompendiumRemoveAllSelections;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldMinigameAction]: protobufs.CMsgClientToGCOverworldMinigameAction;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldRequestTokensNeededByFriend]: protobufs.CMsgClientToGCOverworldRequestTokensNeededByFriend;
    [protobufs.EGCBaseClientMsg.k_EMsgGCClientHello]: protobufs.CMsgClientHello;
    [protobufs.EGCBaseClientMsg.k_EMsgGCServerConnectionStatus]: protobufs.CMsgConnectionStatus;
    [protobufs.ESOMsg.k_ESOMsg_CacheSubscriptionRefresh]: protobufs.CMsgSOCacheSubscriptionRefresh;
    [protobufs.ESOMsg.k_ESOMsg_CacheSubscribedUpToDate]: protobufs.CMsgSOCacheSubscribedUpToDate;
    [protobufs.EGCBaseMsg.k_EMsgGCInviteToParty]: protobufs.CMsgInviteToParty;
    [protobufs.EGCBaseMsg.k_EMsgGCInvitationCreated]: protobufs.CMsgInvitationCreated;
    [protobufs.EGCBaseMsg.k_EMsgGCKickFromParty]: protobufs.CMsgKickFromParty;
    [protobufs.EGCBaseMsg.k_EMsgGCLeaveParty]: protobufs.CMsgLeaveParty;
    [protobufs.EGCBaseMsg.k_EMsgGCServerAvailable]: protobufs.CMsgServerAvailable;
    [protobufs.EGCBaseMsg.k_EMsgGCLANServerAvailable]: protobufs.CMsgLANServerAvailable;
    [protobufs.EGCBaseMsg.k_EMsgGCInviteToLobby]: protobufs.CMsgInviteToLobby;
    [protobufs.EGCBaseMsg.k_EMsgGCAdditionalWelcomeMsgList]: protobufs.CMsgGCAdditionalWelcomeMsgList;
    [protobufs.EGCBaseMsg.k_EMsgClientToGCIntegrityStatus]: protobufs.CMsgClientToGCIntegrityStatus;
    [protobufs.EGCBaseMsg.k_EMsgClientToGCAggregateMetrics]: protobufs.CMsgClientToGCAggregateMetrics;
};
export const GCProtobufs = {
    [protobufs.EDOTAGCMsg.k_EMsgGCInitialQuestionnaireResponse]: protobufs.CMsgInitialQuestionnaireResponse as MessageFns<protobufs.CMsgInitialQuestionnaireResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCPracticeLobbyResponse]: protobufs.CMsgGenericResult as MessageFns<protobufs.CMsgGenericResult>,
    [protobufs.EDOTAGCMsg.k_EMsgGCSpectateFriendGameResponse]: protobufs.CMsgSpectateFriendGameResponse as MessageFns<protobufs.CMsgSpectateFriendGameResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCReportsRemainingResponse]: protobufs.CMsgDOTAReportsRemainingResponse as MessageFns<protobufs.CMsgDOTAReportsRemainingResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCSubmitPlayerReportResponse]: protobufs.CMsgDOTASubmitPlayerReportResponse as MessageFns<protobufs.CMsgDOTASubmitPlayerReportResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCWatchGameResponse]: protobufs.CMsgWatchGameResponse as MessageFns<protobufs.CMsgWatchGameResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCMatchDetailsResponse]: protobufs.CMsgGCMatchDetailsResponse as MessageFns<protobufs.CMsgGCMatchDetailsResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCMatchmakingStatsResponse]: protobufs.CMsgDOTAMatchmakingStatsResponse as MessageFns<protobufs.CMsgDOTAMatchmakingStatsResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCSetMatchHistoryAccessResponse]: protobufs.CMsgDOTASetMatchHistoryAccessResponse as MessageFns<protobufs.CMsgDOTASetMatchHistoryAccessResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgUpgradeLeagueItemResponse]: protobufs.CMsgUpgradeLeagueItemResponse as MessageFns<protobufs.CMsgUpgradeLeagueItemResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCGetHeroStandingsResponse]: protobufs.CMsgGCGetHeroStandingsResponse as MessageFns<protobufs.CMsgGCGetHeroStandingsResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCItemEditorReservationsResponse]: protobufs.CMsgGCItemEditorReservationsResponse as MessageFns<protobufs.CMsgGCItemEditorReservationsResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCItemEditorReserveItemDefResponse]: protobufs.CMsgGCItemEditorReserveItemDefResponse as MessageFns<protobufs.CMsgGCItemEditorReserveItemDefResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCItemEditorReleaseReservationResponse]: protobufs.CMsgGCItemEditorReleaseReservationResponse as MessageFns<protobufs.CMsgGCItemEditorReleaseReservationResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCSetProfilePrivacyResponse]: protobufs.CMsgDOTASetProfilePrivacyResponse as MessageFns<protobufs.CMsgDOTASetProfilePrivacyResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgDOTAGetEventPointsResponse]: protobufs.CMsgDOTAGetEventPointsResponse as MessageFns<protobufs.CMsgDOTAGetEventPointsResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCCompendiumDataResponse]: protobufs.CMsgDOTACompendiumDataResponse as MessageFns<protobufs.CMsgDOTACompendiumDataResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgDOTAGetPlayerMatchHistoryResponse]: protobufs.CMsgDOTAGetPlayerMatchHistoryResponse as MessageFns<protobufs.CMsgDOTAGetPlayerMatchHistoryResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCNotificationsResponse]: protobufs.CMsgGCNotificationsResponse as MessageFns<protobufs.CMsgGCNotificationsResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCRankedPlayerInfoSubmitResponse]: protobufs.CMsgGCRankedPlayerInfoSubmitResponse as MessageFns<protobufs.CMsgGCRankedPlayerInfoSubmitResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCPlayerInfoSubmitResponse]: protobufs.CMsgGCPlayerInfoSubmitResponse as MessageFns<protobufs.CMsgGCPlayerInfoSubmitResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCHasItemResponse]: protobufs.CMsgDOTAHasItemResponse as MessageFns<protobufs.CMsgDOTAHasItemResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientTournamentItemDrop]: protobufs.CMsgGCToClientTournamentItemDrop as MessageFns<protobufs.CMsgGCToClientTournamentItemDrop>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientEmoticonData]: protobufs.CMsgGCToClientEmoticonData as MessageFns<protobufs.CMsgGCToClientEmoticonData>,
    [protobufs.EDOTAGCMsg.k_EMsgDOTARedeemItemResponse]: protobufs.CMsgDOTARedeemItemResponse as MessageFns<protobufs.CMsgDOTARedeemItemResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetAllHeroProgressResponse]: protobufs.CMsgClientToGCGetAllHeroProgressResponse as MessageFns<protobufs.CMsgClientToGCGetAllHeroProgressResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetTrophyListResponse]: protobufs.CMsgClientToGCGetTrophyListResponse as MessageFns<protobufs.CMsgClientToGCGetTrophyListResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientTrophyAwarded]: protobufs.CMsgGCToClientTrophyAwarded as MessageFns<protobufs.CMsgGCToClientTrophyAwarded>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetProfileCardResponse]: protobufs.CMsgDOTAProfileCard as MessageFns<protobufs.CMsgDOTAProfileCard>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientHeroStatueCreateResult]: protobufs.CMsgGCToClientHeroStatueCreateResult as MessageFns<protobufs.CMsgGCToClientHeroStatueCreateResult>,
    [protobufs.EDOTAGCMsg.k_EMsgGCRerollPlayerChallengeResponse]: protobufs.CMsgGCRerollPlayerChallengeResponse as MessageFns<protobufs.CMsgGCRerollPlayerChallengeResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetAllHeroOrderResponse]: protobufs.CMsgClientToGCGetAllHeroOrderResponse as MessageFns<protobufs.CMsgClientToGCGetAllHeroOrderResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPlayerCardSpecificPurchaseResponse]: protobufs.CMsgClientToGCPlayerCardSpecificPurchaseResponse as MessageFns<protobufs.CMsgClientToGCPlayerCardSpecificPurchaseResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientGetFilteredPlayersResponse]: protobufs.CMsgGCToClientGetFilteredPlayersResponse as MessageFns<protobufs.CMsgGCToClientGetFilteredPlayersResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientRemoveFilteredPlayerResponse]: protobufs.CMsgGCToClientRemoveFilteredPlayerResponse as MessageFns<protobufs.CMsgGCToClientRemoveFilteredPlayerResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientPlayerBeaconState]: protobufs.CMsgGCToClientPlayerBeaconState as MessageFns<protobufs.CMsgGCToClientPlayerBeaconState>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientPartyBeaconUpdate]: protobufs.CMsgGCToClientPartyBeaconUpdate as MessageFns<protobufs.CMsgGCToClientPartyBeaconUpdate>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientPartySearchInvite]: protobufs.CMsgGCToClientPartySearchInvite as MessageFns<protobufs.CMsgGCToClientPartySearchInvite>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientRequestActiveBeaconPartiesResponse]: protobufs.CMsgGCToClientRequestActiveBeaconPartiesResponse as MessageFns<protobufs.CMsgGCToClientRequestActiveBeaconPartiesResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientManageFavoritesResponse]: protobufs.CMsgGCToClientManageFavoritesResponse as MessageFns<protobufs.CMsgGCToClientManageFavoritesResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientJoinPartyFromBeaconResponse]: protobufs.CMsgGCToClientJoinPartyFromBeaconResponse as MessageFns<protobufs.CMsgGCToClientJoinPartyFromBeaconResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientGetFavoritePlayersResponse]: protobufs.CMsgGCToClientGetFavoritePlayersResponse as MessageFns<protobufs.CMsgGCToClientGetFavoritePlayersResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientVerifyFavoritePlayersResponse]: protobufs.CMsgGCToClientVerifyFavoritePlayersResponse as MessageFns<protobufs.CMsgGCToClientVerifyFavoritePlayersResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientPartySearchInvites]: protobufs.CMsgGCToClientPartySearchInvites as MessageFns<protobufs.CMsgGCToClientPartySearchInvites>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPurchaseLabyrinthBlessingsResponse]: protobufs.CMsgClientToGCPurchaseLabyrinthBlessingsResponse as MessageFns<protobufs.CMsgClientToGCPurchaseLabyrinthBlessingsResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientPurchaseFilteredPlayerSlotResponse]: protobufs.CMsgGCToClientPurchaseFilteredPlayerSlotResponse as MessageFns<protobufs.CMsgGCToClientPurchaseFilteredPlayerSlotResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientUpdateFilteredPlayerNoteResponse]: protobufs.CMsgGCToClientUpdateFilteredPlayerNoteResponse as MessageFns<protobufs.CMsgGCToClientUpdateFilteredPlayerNoteResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientPlayerStatsResponse]: protobufs.CMsgGCToClientPlayerStatsResponse as MessageFns<protobufs.CMsgGCToClientPlayerStatsResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientFindTopSourceTVGamesResponse]: protobufs.CMsgGCToClientFindTopSourceTVGamesResponse as MessageFns<protobufs.CMsgGCToClientFindTopSourceTVGamesResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientSocialFeedPostCommentResponse]: protobufs.CMsgGCToClientSocialFeedPostCommentResponse as MessageFns<protobufs.CMsgGCToClientSocialFeedPostCommentResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientCustomGamesFriendsPlayedResponse]: protobufs.CMsgGCToClientCustomGamesFriendsPlayedResponse as MessageFns<protobufs.CMsgGCToClientCustomGamesFriendsPlayedResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientFriendsPlayedCustomGameResponse]: protobufs.CMsgGCToClientFriendsPlayedCustomGameResponse as MessageFns<protobufs.CMsgGCToClientFriendsPlayedCustomGameResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientSocialFeedPostMessageResponse]: protobufs.CMsgGCToClientSocialFeedPostMessageResponse as MessageFns<protobufs.CMsgGCToClientSocialFeedPostMessageResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientTopLeagueMatchesResponse]: protobufs.CMsgGCToClientTopLeagueMatchesResponse as MessageFns<protobufs.CMsgGCToClientTopLeagueMatchesResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientTopFriendMatchesResponse]: protobufs.CMsgGCToClientTopFriendMatchesResponse as MessageFns<protobufs.CMsgGCToClientTopFriendMatchesResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCMatchesMinimalResponse]: protobufs.CMsgClientToGCMatchesMinimalResponse as MessageFns<protobufs.CMsgClientToGCMatchesMinimalResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetProfileTicketsResponse]: protobufs.CMsgDOTAProfileTickets as MessageFns<protobufs.CMsgDOTAProfileTickets>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientMatchGroupsVersion]: protobufs.CMsgGCToClientMatchGroupsVersion as MessageFns<protobufs.CMsgGCToClientMatchGroupsVersion>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetQuestProgressResponse]: protobufs.CMsgClientToGCGetQuestProgressResponse as MessageFns<protobufs.CMsgClientToGCGetQuestProgressResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientMatchSignedOut]: protobufs.CMsgGCToClientMatchSignedOut as MessageFns<protobufs.CMsgGCToClientMatchSignedOut>,
    [protobufs.EDOTAGCMsg.k_EMsgGCGetHeroStatsHistoryResponse]: protobufs.CMsgGCGetHeroStatsHistoryResponse as MessageFns<protobufs.CMsgGCGetHeroStatsHistoryResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientWageringResponse]: protobufs.CMsgGCToClientWageringResponse as MessageFns<protobufs.CMsgGCToClientWageringResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCHasPlayerVotedForMVPResponse]: protobufs.CMsgClientToGCHasPlayerVotedForMVPResponse as MessageFns<protobufs.CMsgClientToGCHasPlayerVotedForMVPResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCVoteForMVPResponse]: protobufs.CMsgClientToGCVoteForMVPResponse as MessageFns<protobufs.CMsgClientToGCVoteForMVPResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCTeammateStatsResponse]: protobufs.CMsgClientToGCTeammateStatsResponse as MessageFns<protobufs.CMsgClientToGCTeammateStatsResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetGiftPermissionsResponse]: protobufs.CMsgClientToGCGetGiftPermissionsResponse as MessageFns<protobufs.CMsgClientToGCGetGiftPermissionsResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCVoteForArcanaResponse]: protobufs.CMsgClientToGCVoteForArcanaResponse as MessageFns<protobufs.CMsgClientToGCVoteForArcanaResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestArcanaVotesRemainingResponse]: protobufs.CMsgClientToGCRequestArcanaVotesRemainingResponse as MessageFns<protobufs.CMsgClientToGCRequestArcanaVotesRemainingResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCSubmitLobbyMVPVoteResponse]: protobufs.CMsgDOTASubmitLobbyMVPVoteResponse as MessageFns<protobufs.CMsgDOTASubmitLobbyMVPVoteResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientQuestProgressUpdated]: protobufs.CMsgGCToClientQuestProgressUpdated as MessageFns<protobufs.CMsgGCToClientQuestProgressUpdated>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientWageringUpdate]: protobufs.CMsgGCToClientWageringUpdate as MessageFns<protobufs.CMsgGCToClientWageringUpdate>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientArcanaVotesUpdate]: protobufs.CMsgGCToClientArcanaVotesUpdate as MessageFns<protobufs.CMsgGCToClientArcanaVotesUpdate>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOpenPlayerCardPackResponse]: protobufs.CMsgClientToGCOpenPlayerCardPackResponse as MessageFns<protobufs.CMsgClientToGCOpenPlayerCardPackResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSelectCompendiumInGamePredictionResponse]: protobufs.CMsgClientToGCSelectCompendiumInGamePredictionResponse as MessageFns<protobufs.CMsgClientToGCSelectCompendiumInGamePredictionResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRecyclePlayerCardResponse]: protobufs.CMsgClientToGCRecyclePlayerCardResponse as MessageFns<protobufs.CMsgClientToGCRecyclePlayerCardResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCreatePlayerCardPackResponse]: protobufs.CMsgClientToGCCreatePlayerCardPackResponse as MessageFns<protobufs.CMsgClientToGCCreatePlayerCardPackResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCGetPlayerCardItemInfoResponse]: protobufs.CMsgGCGetPlayerCardItemInfoResponse as MessageFns<protobufs.CMsgGCGetPlayerCardItemInfoResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientBattlePassRollupRequest]: protobufs.CMsgGCToClientBattlePassRollupRequest as MessageFns<protobufs.CMsgGCToClientBattlePassRollupRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientBattlePassRollupResponse]: protobufs.CMsgGCToClientBattlePassRollupResponse as MessageFns<protobufs.CMsgGCToClientBattlePassRollupResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCTransferSeasonalMMRResponse]: protobufs.CMsgClientToGCTransferSeasonalMMRResponse as MessageFns<protobufs.CMsgClientToGCTransferSeasonalMMRResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientPlaytestStatus]: protobufs.CMsgGCToClientPlaytestStatus as MessageFns<protobufs.CMsgGCToClientPlaytestStatus>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCJoinPlaytestResponse]: protobufs.CMsgClientToGCJoinPlaytestResponse as MessageFns<protobufs.CMsgClientToGCJoinPlaytestResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientBattlePassRollupListRequest]: protobufs.CMsgGCToClientBattlePassRollupListRequest as MessageFns<protobufs.CMsgGCToClientBattlePassRollupListRequest>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientBattlePassRollupListResponse]: protobufs.CMsgGCToClientBattlePassRollupListResponse as MessageFns<protobufs.CMsgGCToClientBattlePassRollupListResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgDOTAClaimEventActionResponse]: protobufs.CMsgDOTAClaimEventActionResponse as MessageFns<protobufs.CMsgDOTAClaimEventActionResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgDOTAGetPeriodicResourceResponse]: protobufs.CMsgDOTAGetPeriodicResourceResponse as MessageFns<protobufs.CMsgDOTAGetPeriodicResourceResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgSubmitTriviaQuestionAnswerResponse]: protobufs.CMsgDOTASubmitTriviaQuestionAnswerResponse as MessageFns<protobufs.CMsgDOTASubmitTriviaQuestionAnswerResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgStartTriviaSessionResponse]: protobufs.CMsgDOTAStartTriviaSessionResponse as MessageFns<protobufs.CMsgDOTAStartTriviaSessionResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgAnchorPhoneNumberResponse]: protobufs.CMsgDOTAAnchorPhoneNumberResponse as MessageFns<protobufs.CMsgDOTAAnchorPhoneNumberResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgUnanchorPhoneNumberResponse]: protobufs.CMsgDOTAUnanchorPhoneNumberResponse as MessageFns<protobufs.CMsgDOTAUnanchorPhoneNumberResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCQuickStatsResponse]: protobufs.CMsgDOTAClientToGCQuickStatsResponse as MessageFns<protobufs.CMsgDOTAClientToGCQuickStatsResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgSelectionPriorityChoiceResponse]: protobufs.CMsgDOTASelectionPriorityChoiceResponse as MessageFns<protobufs.CMsgDOTASelectionPriorityChoiceResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGameAutographRewardResponse]: protobufs.CMsgDOTAGameAutographRewardResponse as MessageFns<protobufs.CMsgDOTAGameAutographRewardResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgDestroyLobbyResponse]: protobufs.CMsgDOTADestroyLobbyResponse as MessageFns<protobufs.CMsgDOTADestroyLobbyResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgPurchaseItemWithEventPointsResponse]: protobufs.CMsgPurchaseItemWithEventPointsResponse as MessageFns<protobufs.CMsgPurchaseItemWithEventPointsResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgPurchaseHeroRandomRelicResponse]: protobufs.CMsgPurchaseHeroRandomRelicResponse as MessageFns<protobufs.CMsgPurchaseHeroRandomRelicResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCClaimEventActionUsingItemResponse]: protobufs.CMsgClientToGCClaimEventActionUsingItemResponse as MessageFns<protobufs.CMsgClientToGCClaimEventActionUsingItemResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgPartyReadyCheckResponse]: protobufs.CMsgPartyReadyCheckResponse as MessageFns<protobufs.CMsgPartyReadyCheckResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGetRecentPlayTimeFriendsResponse]: protobufs.CMsgDOTAGetRecentPlayTimeFriendsResponse as MessageFns<protobufs.CMsgDOTAGetRecentPlayTimeFriendsResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientCommendNotification]: protobufs.CMsgGCToClientCommendNotification as MessageFns<protobufs.CMsgGCToClientCommendNotification>,
    [protobufs.EDOTAGCMsg.k_EMsgProfileResponse]: protobufs.CMsgProfileResponse as MessageFns<protobufs.CMsgProfileResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgProfileUpdateResponse]: protobufs.CMsgProfileUpdateResponse as MessageFns<protobufs.CMsgProfileUpdateResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgHeroGlobalDataResponse]: protobufs.CMsgHeroGlobalDataResponse as MessageFns<protobufs.CMsgHeroGlobalDataResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestPlusWeeklyChallengeResultResponse]: protobufs.CMsgClientToGCRequestPlusWeeklyChallengeResultResponse as MessageFns<protobufs.CMsgClientToGCRequestPlusWeeklyChallengeResultResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgPrivateMetadataKeyResponse]: protobufs.CMsgPrivateMetadataKeyResponse as MessageFns<protobufs.CMsgPrivateMetadataKeyResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientCavernCrawlMapPathCompleted]: protobufs.CMsgGCToClientCavernCrawlMapPathCompleted as MessageFns<protobufs.CMsgGCToClientCavernCrawlMapPathCompleted>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlClaimRoomResponse]: protobufs.CMsgClientToGCCavernCrawlClaimRoomResponse as MessageFns<protobufs.CMsgClientToGCCavernCrawlClaimRoomResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlUseItemOnRoomResponse]: protobufs.CMsgClientToGCCavernCrawlUseItemOnRoomResponse as MessageFns<protobufs.CMsgClientToGCCavernCrawlUseItemOnRoomResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlUseItemOnPathResponse]: protobufs.CMsgClientToGCCavernCrawlUseItemOnPathResponse as MessageFns<protobufs.CMsgClientToGCCavernCrawlUseItemOnPathResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlRequestMapStateResponse]: protobufs.CMsgClientToGCCavernCrawlRequestMapStateResponse as MessageFns<protobufs.CMsgClientToGCCavernCrawlRequestMapStateResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlGetClaimedRoomCountResponse]: protobufs.CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse as MessageFns<protobufs.CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientRecordContestVoteResponse]: protobufs.CMsgGCToClientRecordContestVoteResponse as MessageFns<protobufs.CMsgGCToClientRecordContestVoteResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgDevGrantEventPointsResponse]: protobufs.CMsgDevGrantEventPointsResponse as MessageFns<protobufs.CMsgDevGrantEventPointsResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgDevGrantEventActionResponse]: protobufs.CMsgDevGrantEventActionResponse as MessageFns<protobufs.CMsgDevGrantEventActionResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgDevResetEventStateResponse]: protobufs.CMsgDevResetEventStateResponse as MessageFns<protobufs.CMsgDevResetEventStateResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgConsumeEventSupportGrantItemResponse]: protobufs.CMsgConsumeEventSupportGrantItemResponse as MessageFns<protobufs.CMsgConsumeEventSupportGrantItemResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientClaimEventActionUsingItemCompleted]: protobufs.CMsgGCToClientClaimEventActionUsingItemCompleted as MessageFns<protobufs.CMsgGCToClientClaimEventActionUsingItemCompleted>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientCavernCrawlMapUpdated]: protobufs.CMsgGCToClientCavernCrawlMapUpdated as MessageFns<protobufs.CMsgGCToClientCavernCrawlMapUpdated>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestPlayerRecentAccomplishmentsResponse]: protobufs.CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse as MessageFns<protobufs.CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse]: protobufs.CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse as MessageFns<protobufs.CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestContestVotesResponse]: protobufs.CMsgClientToGCRequestContestVotesResponse as MessageFns<protobufs.CMsgClientToGCRequestContestVotesResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCMVPVoteTimeoutResponse]: protobufs.CMsgClientToGCMVPVoteTimeoutResponse as MessageFns<protobufs.CMsgClientToGCMVPVoteTimeoutResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSubmitPlayerMatchSurveyResponse]: protobufs.CMsgClientToGCSubmitPlayerMatchSurveyResponse as MessageFns<protobufs.CMsgClientToGCSubmitPlayerMatchSurveyResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgDevDeleteEventActionsResponse]: protobufs.CMsgDevDeleteEventActionsResponse as MessageFns<protobufs.CMsgDevDeleteEventActionsResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCSubmitPlayerAvoidRequestResponse]: protobufs.CMsgDOTASubmitPlayerAvoidRequestResponse as MessageFns<protobufs.CMsgDOTASubmitPlayerAvoidRequestResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCtoGCAssociatedExploiterAccountInfoResponse]: protobufs.CMsgGCtoGCAssociatedExploiterAccountInfoResponse as MessageFns<protobufs.CMsgGCtoGCAssociatedExploiterAccountInfoResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientVACReminder]: protobufs.CMsgGCToClientVACReminder as MessageFns<protobufs.CMsgGCToClientVACReminder>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftBuyResponse]: protobufs.CMsgClientToGCUnderDraftBuyResponse as MessageFns<protobufs.CMsgClientToGCUnderDraftBuyResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftRerollResponse]: protobufs.CMsgClientToGCUnderDraftRerollResponse as MessageFns<protobufs.CMsgClientToGCUnderDraftRerollResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftSellResponse]: protobufs.CMsgClientToGCUnderDraftSellResponse as MessageFns<protobufs.CMsgClientToGCUnderDraftSellResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftResponse]: protobufs.CMsgClientToGCUnderDraftResponse as MessageFns<protobufs.CMsgClientToGCUnderDraftResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftRedeemRewardResponse]: protobufs.CMsgClientToGCUnderDraftRedeemRewardResponse as MessageFns<protobufs.CMsgClientToGCUnderDraftRedeemRewardResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestReporterUpdatesResponse]: protobufs.CMsgClientToGCRequestReporterUpdatesResponse as MessageFns<protobufs.CMsgClientToGCRequestReporterUpdatesResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSubmitDraftTriviaMatchAnswerResponse]: protobufs.CMsgClientToGCSubmitDraftTriviaMatchAnswerResponse as MessageFns<protobufs.CMsgClientToGCSubmitDraftTriviaMatchAnswerResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftRollBackBenchResponse]: protobufs.CMsgClientToGCUnderDraftRollBackBenchResponse as MessageFns<protobufs.CMsgClientToGCUnderDraftRollBackBenchResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetOWMatchDetailsResponse]: protobufs.CMsgClientToGCGetOWMatchDetailsResponse as MessageFns<protobufs.CMsgClientToGCGetOWMatchDetailsResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSubmitOWConvictionResponse]: protobufs.CMsgClientToGCSubmitOWConvictionResponse as MessageFns<protobufs.CMsgClientToGCSubmitOWConvictionResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRecalibrateMMRResponse]: protobufs.CMsgClientToGCRecalibrateMMRResponse as MessageFns<protobufs.CMsgClientToGCRecalibrateMMRResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCChinaSSAURLResponse]: protobufs.CMsgClientToGCChinaSSAURLResponse as MessageFns<protobufs.CMsgClientToGCChinaSSAURLResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCChinaSSAAcceptedResponse]: protobufs.CMsgClientToGCChinaSSAAcceptedResponse as MessageFns<protobufs.CMsgClientToGCChinaSSAAcceptedResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientOverwatchCasesAvailable]: protobufs.CMsgGCToClientOverwatchCasesAvailable as MessageFns<protobufs.CMsgGCToClientOverwatchCasesAvailable>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetDPCFavoritesResponse]: protobufs.CMsgClientToGCGetDPCFavoritesResponse as MessageFns<protobufs.CMsgClientToGCGetDPCFavoritesResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetDPCFavoriteStateResponse]: protobufs.CMsgClientToGCSetDPCFavoriteStateResponse as MessageFns<protobufs.CMsgClientToGCSetDPCFavoriteStateResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetEventActiveSeasonIDResponse]: protobufs.CMsgClientToGCSetEventActiveSeasonIDResponse as MessageFns<protobufs.CMsgClientToGCSetEventActiveSeasonIDResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCreateTeamPlayerCardPackResponse]: protobufs.CMsgClientToGCCreateTeamPlayerCardPackResponse as MessageFns<protobufs.CMsgClientToGCCreateTeamPlayerCardPackResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetStickerbookResponse]: protobufs.CMsgClientToGCGetStickerbookResponse as MessageFns<protobufs.CMsgClientToGCGetStickerbookResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCreateStickerbookPageResponse]: protobufs.CMsgClientToGCCreateStickerbookPageResponse as MessageFns<protobufs.CMsgClientToGCCreateStickerbookPageResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCDeleteStickerbookPageResponse]: protobufs.CMsgClientToGCDeleteStickerbookPageResponse as MessageFns<protobufs.CMsgClientToGCDeleteStickerbookPageResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPlaceStickersResponse]: protobufs.CMsgClientToGCPlaceStickersResponse as MessageFns<protobufs.CMsgClientToGCPlaceStickersResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPlaceCollectionStickersResponse]: protobufs.CMsgClientToGCPlaceCollectionStickersResponse as MessageFns<protobufs.CMsgClientToGCPlaceCollectionStickersResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOrderStickerbookTeamPageResponse]: protobufs.CMsgClientToGCOrderStickerbookTeamPageResponse as MessageFns<protobufs.CMsgClientToGCOrderStickerbookTeamPageResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetHeroStickerResponse]: protobufs.CMsgClientToGCSetHeroStickerResponse as MessageFns<protobufs.CMsgClientToGCSetHeroStickerResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetHeroStickersResponse]: protobufs.CMsgClientToGCGetHeroStickersResponse as MessageFns<protobufs.CMsgClientToGCGetHeroStickersResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetFavoritePageResponse]: protobufs.CMsgClientToGCSetFavoritePageResponse as MessageFns<protobufs.CMsgClientToGCSetFavoritePageResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientCollectorsCacheAvailableDataResponse]: protobufs.CMsgGCToClientCollectorsCacheAvailableDataResponse as MessageFns<protobufs.CMsgGCToClientCollectorsCacheAvailableDataResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientUploadMatchClipResponse]: protobufs.CMsgGCToClientUploadMatchClipResponse as MessageFns<protobufs.CMsgGCToClientUploadMatchClipResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientRankResponse]: protobufs.CMsgGCToClientRankResponse as MessageFns<protobufs.CMsgGCToClientRankResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientRankUpdate]: protobufs.CMsgGCToClientRankUpdate as MessageFns<protobufs.CMsgGCToClientRankUpdate>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientMapStatsResponse]: protobufs.CMsgGCToClientMapStatsResponse as MessageFns<protobufs.CMsgGCToClientMapStatsResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRoadToTIGetQuestsResponse]: protobufs.CMsgClientToGCRoadToTIGetQuestsResponse as MessageFns<protobufs.CMsgClientToGCRoadToTIGetQuestsResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRoadToTIGetActiveQuestResponse]: protobufs.CMsgClientToGCRoadToTIGetActiveQuestResponse as MessageFns<protobufs.CMsgClientToGCRoadToTIGetActiveQuestResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientRoadToTIQuestDataUpdated]: protobufs.CMsgGCToClientRoadToTIQuestDataUpdated as MessageFns<protobufs.CMsgGCToClientRoadToTIQuestDataUpdated>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRoadToTIUseItemResponse]: protobufs.CMsgClientToGCRoadToTIUseItemResponse as MessageFns<protobufs.CMsgClientToGCRoadToTIUseItemResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldGetUserDataResponse]: protobufs.CMsgClientToGCOverworldGetUserDataResponse as MessageFns<protobufs.CMsgClientToGCOverworldGetUserDataResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldCompletePathResponse]: protobufs.CMsgClientToGCOverworldCompletePathResponse as MessageFns<protobufs.CMsgClientToGCOverworldCompletePathResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldClaimEncounterRewardResponse]: protobufs.CMsgClientToGCOverworldClaimEncounterRewardResponse as MessageFns<protobufs.CMsgClientToGCOverworldClaimEncounterRewardResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldDevResetAllResponse]: protobufs.CMsgClientToGCOverworldDevResetAllResponse as MessageFns<protobufs.CMsgClientToGCOverworldDevResetAllResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldDevResetNodeResponse]: protobufs.CMsgClientToGCOverworldDevResetNodeResponse as MessageFns<protobufs.CMsgClientToGCOverworldDevResetNodeResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldDevGrantTokensResponse]: protobufs.CMsgClientToGCOverworldDevGrantTokensResponse as MessageFns<protobufs.CMsgClientToGCOverworldDevGrantTokensResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldDevClearInventoryResponse]: protobufs.CMsgClientToGCOverworldDevClearInventoryResponse as MessageFns<protobufs.CMsgClientToGCOverworldDevClearInventoryResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientOverworldUserDataUpdated]: protobufs.CMsgGCToClientOverworldUserDataUpdated as MessageFns<protobufs.CMsgGCToClientOverworldUserDataUpdated>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldMoveToNodeResponse]: protobufs.CMsgClientToGCOverworldMoveToNodeResponse as MessageFns<protobufs.CMsgClientToGCOverworldMoveToNodeResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCNewBloomGiftResponse]: protobufs.CMsgClientToGCNewBloomGiftResponse as MessageFns<protobufs.CMsgClientToGCNewBloomGiftResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldTradeTokensResponse]: protobufs.CMsgClientToGCOverworldTradeTokensResponse as MessageFns<protobufs.CMsgClientToGCOverworldTradeTokensResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldFeedbackResponse]: protobufs.CMsgClientToGCOverworldFeedbackResponse as MessageFns<protobufs.CMsgClientToGCOverworldFeedbackResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldVisitEncounterResponse]: protobufs.CMsgClientToGCOverworldVisitEncounterResponse as MessageFns<protobufs.CMsgClientToGCOverworldVisitEncounterResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldGiftTokensResponse]: protobufs.CMsgClientToGCOverworldGiftTokensResponse as MessageFns<protobufs.CMsgClientToGCOverworldGiftTokensResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCDotaLabsFeedbackResponse]: protobufs.CMsgClientToGCDotaLabsFeedbackResponse as MessageFns<protobufs.CMsgClientToGCDotaLabsFeedbackResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldGetDynamicImageResponse]: protobufs.CMsgClientToGCOverworldGetDynamicImageResponse as MessageFns<protobufs.CMsgClientToGCOverworldGetDynamicImageResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgGCCompendiumRemoveAllSelectionsResponse]: protobufs.CMsgDOTACompendiumRemoveAllSelectionsResponse as MessageFns<protobufs.CMsgDOTACompendiumRemoveAllSelectionsResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldMinigameActionResponse]: protobufs.CMsgClientToGCOverworldMinigameActionResponse as MessageFns<protobufs.CMsgClientToGCOverworldMinigameActionResponse>,
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldRequestTokensNeededByFriendResponse]: protobufs.CMsgClientToGCOverworldRequestTokensNeededByFriendResponse as MessageFns<protobufs.CMsgClientToGCOverworldRequestTokensNeededByFriendResponse>,
    [protobufs.EGCBaseClientMsg.k_EMsgGCToClientPollConvarRequest]: protobufs.CMsgGCToClientPollConvarRequest as MessageFns<protobufs.CMsgGCToClientPollConvarRequest>,
    [protobufs.EGCBaseClientMsg.k_EMsgGCToClientPollConvarResponse]: protobufs.CMsgGCToClientPollConvarResponse as MessageFns<protobufs.CMsgGCToClientPollConvarResponse>,
    [protobufs.EGCBaseClientMsg.k_EMsgGCToClientRequestDropped]: protobufs.CMsgGCToClientRequestDropped as MessageFns<protobufs.CMsgGCToClientRequestDropped>,
    [protobufs.EGCBaseClientMsg.k_EMsgGCClientWelcome]: protobufs.CMsgClientWelcome as MessageFns<protobufs.CMsgClientWelcome>,
    [protobufs.EGCBaseClientMsg.k_EMsgGCClientConnectionStatus]: protobufs.CMsgConnectionStatus as MessageFns<protobufs.CMsgConnectionStatus>,
    [protobufs.ESOMsg.k_ESOMsg_Create]: protobufs.CMsgSOSingleObject as MessageFns<protobufs.CMsgSOSingleObject>,
    [protobufs.ESOMsg.k_ESOMsg_Destroy]: protobufs.CMsgSOSingleObject as MessageFns<protobufs.CMsgSOSingleObject>,
    [protobufs.ESOMsg.k_ESOMsg_CacheSubscribed]: protobufs.CMsgSOCacheSubscribed as MessageFns<protobufs.CMsgSOCacheSubscribed>,
    [protobufs.ESOMsg.k_ESOMsg_CacheUnsubscribed]: protobufs.CMsgSOCacheUnsubscribed as MessageFns<protobufs.CMsgSOCacheUnsubscribed>,
    [protobufs.ESOMsg.k_ESOMsg_UpdateMultiple]: protobufs.CMsgSOMultipleObjects as MessageFns<protobufs.CMsgSOMultipleObjects>,
    [protobufs.EGCBaseMsg.k_EMsgGCPartyInviteResponse]: protobufs.CMsgPartyInviteResponse as MessageFns<protobufs.CMsgPartyInviteResponse>,
    [protobufs.EGCBaseMsg.k_EMsgGCLobbyInviteResponse]: protobufs.CMsgLobbyInviteResponse as MessageFns<protobufs.CMsgLobbyInviteResponse>,
    [protobufs.EGCBaseMsg.k_EMsgGCToClientPollFileRequest]: protobufs.CMsgGCToClientPollFileRequest as MessageFns<protobufs.CMsgGCToClientPollFileRequest>,
    [protobufs.EGCBaseMsg.k_EMsgGCToClientPollFileResponse]: protobufs.CMsgGCToClientPollFileResponse as MessageFns<protobufs.CMsgGCToClientPollFileResponse>,
    [protobufs.EGCBaseMsg.k_EMsgGCToClientApplyRemoteConVars]: protobufs.CMsgGCToClientApplyRemoteConVars as MessageFns<protobufs.CMsgGCToClientApplyRemoteConVars>,
    [protobufs.EGCBaseMsg.k_EMsgGCToClientAggregateMetricsBackoff]: protobufs.CMsgGCToClientAggregateMetricsBackoff as MessageFns<protobufs.CMsgGCToClientAggregateMetricsBackoff>,
};
Object.freeze(GCProtobufs);
export type GCProtobufsType = {
    [protobufs.EDOTAGCMsg.k_EMsgGCInitialQuestionnaireResponse]: protobufs.CMsgInitialQuestionnaireResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCPracticeLobbyResponse]: protobufs.CMsgGenericResult;
    [protobufs.EDOTAGCMsg.k_EMsgGCSpectateFriendGameResponse]: protobufs.CMsgSpectateFriendGameResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCReportsRemainingResponse]: protobufs.CMsgDOTAReportsRemainingResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCSubmitPlayerReportResponse]: protobufs.CMsgDOTASubmitPlayerReportResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCWatchGameResponse]: protobufs.CMsgWatchGameResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCMatchDetailsResponse]: protobufs.CMsgGCMatchDetailsResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCMatchmakingStatsResponse]: protobufs.CMsgDOTAMatchmakingStatsResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCSetMatchHistoryAccessResponse]: protobufs.CMsgDOTASetMatchHistoryAccessResponse;
    [protobufs.EDOTAGCMsg.k_EMsgUpgradeLeagueItemResponse]: protobufs.CMsgUpgradeLeagueItemResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCGetHeroStandingsResponse]: protobufs.CMsgGCGetHeroStandingsResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCItemEditorReservationsResponse]: protobufs.CMsgGCItemEditorReservationsResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCItemEditorReserveItemDefResponse]: protobufs.CMsgGCItemEditorReserveItemDefResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCItemEditorReleaseReservationResponse]: protobufs.CMsgGCItemEditorReleaseReservationResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCSetProfilePrivacyResponse]: protobufs.CMsgDOTASetProfilePrivacyResponse;
    [protobufs.EDOTAGCMsg.k_EMsgDOTAGetEventPointsResponse]: protobufs.CMsgDOTAGetEventPointsResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCCompendiumDataResponse]: protobufs.CMsgDOTACompendiumDataResponse;
    [protobufs.EDOTAGCMsg.k_EMsgDOTAGetPlayerMatchHistoryResponse]: protobufs.CMsgDOTAGetPlayerMatchHistoryResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCNotificationsResponse]: protobufs.CMsgGCNotificationsResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCRankedPlayerInfoSubmitResponse]: protobufs.CMsgGCRankedPlayerInfoSubmitResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCPlayerInfoSubmitResponse]: protobufs.CMsgGCPlayerInfoSubmitResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCHasItemResponse]: protobufs.CMsgDOTAHasItemResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientTournamentItemDrop]: protobufs.CMsgGCToClientTournamentItemDrop;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientEmoticonData]: protobufs.CMsgGCToClientEmoticonData;
    [protobufs.EDOTAGCMsg.k_EMsgDOTARedeemItemResponse]: protobufs.CMsgDOTARedeemItemResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetAllHeroProgressResponse]: protobufs.CMsgClientToGCGetAllHeroProgressResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetTrophyListResponse]: protobufs.CMsgClientToGCGetTrophyListResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientTrophyAwarded]: protobufs.CMsgGCToClientTrophyAwarded;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetProfileCardResponse]: protobufs.CMsgDOTAProfileCard;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientHeroStatueCreateResult]: protobufs.CMsgGCToClientHeroStatueCreateResult;
    [protobufs.EDOTAGCMsg.k_EMsgGCRerollPlayerChallengeResponse]: protobufs.CMsgGCRerollPlayerChallengeResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetAllHeroOrderResponse]: protobufs.CMsgClientToGCGetAllHeroOrderResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPlayerCardSpecificPurchaseResponse]: protobufs.CMsgClientToGCPlayerCardSpecificPurchaseResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientGetFilteredPlayersResponse]: protobufs.CMsgGCToClientGetFilteredPlayersResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientRemoveFilteredPlayerResponse]: protobufs.CMsgGCToClientRemoveFilteredPlayerResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientPlayerBeaconState]: protobufs.CMsgGCToClientPlayerBeaconState;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientPartyBeaconUpdate]: protobufs.CMsgGCToClientPartyBeaconUpdate;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientPartySearchInvite]: protobufs.CMsgGCToClientPartySearchInvite;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientRequestActiveBeaconPartiesResponse]: protobufs.CMsgGCToClientRequestActiveBeaconPartiesResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientManageFavoritesResponse]: protobufs.CMsgGCToClientManageFavoritesResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientJoinPartyFromBeaconResponse]: protobufs.CMsgGCToClientJoinPartyFromBeaconResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientGetFavoritePlayersResponse]: protobufs.CMsgGCToClientGetFavoritePlayersResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientVerifyFavoritePlayersResponse]: protobufs.CMsgGCToClientVerifyFavoritePlayersResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientPartySearchInvites]: protobufs.CMsgGCToClientPartySearchInvites;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPurchaseLabyrinthBlessingsResponse]: protobufs.CMsgClientToGCPurchaseLabyrinthBlessingsResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientPurchaseFilteredPlayerSlotResponse]: protobufs.CMsgGCToClientPurchaseFilteredPlayerSlotResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientUpdateFilteredPlayerNoteResponse]: protobufs.CMsgGCToClientUpdateFilteredPlayerNoteResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientPlayerStatsResponse]: protobufs.CMsgGCToClientPlayerStatsResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientFindTopSourceTVGamesResponse]: protobufs.CMsgGCToClientFindTopSourceTVGamesResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientSocialFeedPostCommentResponse]: protobufs.CMsgGCToClientSocialFeedPostCommentResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientCustomGamesFriendsPlayedResponse]: protobufs.CMsgGCToClientCustomGamesFriendsPlayedResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientFriendsPlayedCustomGameResponse]: protobufs.CMsgGCToClientFriendsPlayedCustomGameResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientSocialFeedPostMessageResponse]: protobufs.CMsgGCToClientSocialFeedPostMessageResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientTopLeagueMatchesResponse]: protobufs.CMsgGCToClientTopLeagueMatchesResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientTopFriendMatchesResponse]: protobufs.CMsgGCToClientTopFriendMatchesResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCMatchesMinimalResponse]: protobufs.CMsgClientToGCMatchesMinimalResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetProfileTicketsResponse]: protobufs.CMsgDOTAProfileTickets;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientMatchGroupsVersion]: protobufs.CMsgGCToClientMatchGroupsVersion;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetQuestProgressResponse]: protobufs.CMsgClientToGCGetQuestProgressResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientMatchSignedOut]: protobufs.CMsgGCToClientMatchSignedOut;
    [protobufs.EDOTAGCMsg.k_EMsgGCGetHeroStatsHistoryResponse]: protobufs.CMsgGCGetHeroStatsHistoryResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientWageringResponse]: protobufs.CMsgGCToClientWageringResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCHasPlayerVotedForMVPResponse]: protobufs.CMsgClientToGCHasPlayerVotedForMVPResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCVoteForMVPResponse]: protobufs.CMsgClientToGCVoteForMVPResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCTeammateStatsResponse]: protobufs.CMsgClientToGCTeammateStatsResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetGiftPermissionsResponse]: protobufs.CMsgClientToGCGetGiftPermissionsResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCVoteForArcanaResponse]: protobufs.CMsgClientToGCVoteForArcanaResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestArcanaVotesRemainingResponse]: protobufs.CMsgClientToGCRequestArcanaVotesRemainingResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCSubmitLobbyMVPVoteResponse]: protobufs.CMsgDOTASubmitLobbyMVPVoteResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientQuestProgressUpdated]: protobufs.CMsgGCToClientQuestProgressUpdated;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientWageringUpdate]: protobufs.CMsgGCToClientWageringUpdate;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientArcanaVotesUpdate]: protobufs.CMsgGCToClientArcanaVotesUpdate;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOpenPlayerCardPackResponse]: protobufs.CMsgClientToGCOpenPlayerCardPackResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSelectCompendiumInGamePredictionResponse]: protobufs.CMsgClientToGCSelectCompendiumInGamePredictionResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRecyclePlayerCardResponse]: protobufs.CMsgClientToGCRecyclePlayerCardResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCreatePlayerCardPackResponse]: protobufs.CMsgClientToGCCreatePlayerCardPackResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCGetPlayerCardItemInfoResponse]: protobufs.CMsgGCGetPlayerCardItemInfoResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientBattlePassRollupRequest]: protobufs.CMsgGCToClientBattlePassRollupRequest;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientBattlePassRollupResponse]: protobufs.CMsgGCToClientBattlePassRollupResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCTransferSeasonalMMRResponse]: protobufs.CMsgClientToGCTransferSeasonalMMRResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientPlaytestStatus]: protobufs.CMsgGCToClientPlaytestStatus;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCJoinPlaytestResponse]: protobufs.CMsgClientToGCJoinPlaytestResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientBattlePassRollupListRequest]: protobufs.CMsgGCToClientBattlePassRollupListRequest;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientBattlePassRollupListResponse]: protobufs.CMsgGCToClientBattlePassRollupListResponse;
    [protobufs.EDOTAGCMsg.k_EMsgDOTAClaimEventActionResponse]: protobufs.CMsgDOTAClaimEventActionResponse;
    [protobufs.EDOTAGCMsg.k_EMsgDOTAGetPeriodicResourceResponse]: protobufs.CMsgDOTAGetPeriodicResourceResponse;
    [protobufs.EDOTAGCMsg.k_EMsgSubmitTriviaQuestionAnswerResponse]: protobufs.CMsgDOTASubmitTriviaQuestionAnswerResponse;
    [protobufs.EDOTAGCMsg.k_EMsgStartTriviaSessionResponse]: protobufs.CMsgDOTAStartTriviaSessionResponse;
    [protobufs.EDOTAGCMsg.k_EMsgAnchorPhoneNumberResponse]: protobufs.CMsgDOTAAnchorPhoneNumberResponse;
    [protobufs.EDOTAGCMsg.k_EMsgUnanchorPhoneNumberResponse]: protobufs.CMsgDOTAUnanchorPhoneNumberResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCQuickStatsResponse]: protobufs.CMsgDOTAClientToGCQuickStatsResponse;
    [protobufs.EDOTAGCMsg.k_EMsgSelectionPriorityChoiceResponse]: protobufs.CMsgDOTASelectionPriorityChoiceResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGameAutographRewardResponse]: protobufs.CMsgDOTAGameAutographRewardResponse;
    [protobufs.EDOTAGCMsg.k_EMsgDestroyLobbyResponse]: protobufs.CMsgDOTADestroyLobbyResponse;
    [protobufs.EDOTAGCMsg.k_EMsgPurchaseItemWithEventPointsResponse]: protobufs.CMsgPurchaseItemWithEventPointsResponse;
    [protobufs.EDOTAGCMsg.k_EMsgPurchaseHeroRandomRelicResponse]: protobufs.CMsgPurchaseHeroRandomRelicResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCClaimEventActionUsingItemResponse]: protobufs.CMsgClientToGCClaimEventActionUsingItemResponse;
    [protobufs.EDOTAGCMsg.k_EMsgPartyReadyCheckResponse]: protobufs.CMsgPartyReadyCheckResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGetRecentPlayTimeFriendsResponse]: protobufs.CMsgDOTAGetRecentPlayTimeFriendsResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientCommendNotification]: protobufs.CMsgGCToClientCommendNotification;
    [protobufs.EDOTAGCMsg.k_EMsgProfileResponse]: protobufs.CMsgProfileResponse;
    [protobufs.EDOTAGCMsg.k_EMsgProfileUpdateResponse]: protobufs.CMsgProfileUpdateResponse;
    [protobufs.EDOTAGCMsg.k_EMsgHeroGlobalDataResponse]: protobufs.CMsgHeroGlobalDataResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestPlusWeeklyChallengeResultResponse]: protobufs.CMsgClientToGCRequestPlusWeeklyChallengeResultResponse;
    [protobufs.EDOTAGCMsg.k_EMsgPrivateMetadataKeyResponse]: protobufs.CMsgPrivateMetadataKeyResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientCavernCrawlMapPathCompleted]: protobufs.CMsgGCToClientCavernCrawlMapPathCompleted;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlClaimRoomResponse]: protobufs.CMsgClientToGCCavernCrawlClaimRoomResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlUseItemOnRoomResponse]: protobufs.CMsgClientToGCCavernCrawlUseItemOnRoomResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlUseItemOnPathResponse]: protobufs.CMsgClientToGCCavernCrawlUseItemOnPathResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlRequestMapStateResponse]: protobufs.CMsgClientToGCCavernCrawlRequestMapStateResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlGetClaimedRoomCountResponse]: protobufs.CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientRecordContestVoteResponse]: protobufs.CMsgGCToClientRecordContestVoteResponse;
    [protobufs.EDOTAGCMsg.k_EMsgDevGrantEventPointsResponse]: protobufs.CMsgDevGrantEventPointsResponse;
    [protobufs.EDOTAGCMsg.k_EMsgDevGrantEventActionResponse]: protobufs.CMsgDevGrantEventActionResponse;
    [protobufs.EDOTAGCMsg.k_EMsgDevResetEventStateResponse]: protobufs.CMsgDevResetEventStateResponse;
    [protobufs.EDOTAGCMsg.k_EMsgConsumeEventSupportGrantItemResponse]: protobufs.CMsgConsumeEventSupportGrantItemResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientClaimEventActionUsingItemCompleted]: protobufs.CMsgGCToClientClaimEventActionUsingItemCompleted;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientCavernCrawlMapUpdated]: protobufs.CMsgGCToClientCavernCrawlMapUpdated;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestPlayerRecentAccomplishmentsResponse]: protobufs.CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse]: protobufs.CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestContestVotesResponse]: protobufs.CMsgClientToGCRequestContestVotesResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCMVPVoteTimeoutResponse]: protobufs.CMsgClientToGCMVPVoteTimeoutResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSubmitPlayerMatchSurveyResponse]: protobufs.CMsgClientToGCSubmitPlayerMatchSurveyResponse;
    [protobufs.EDOTAGCMsg.k_EMsgDevDeleteEventActionsResponse]: protobufs.CMsgDevDeleteEventActionsResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCSubmitPlayerAvoidRequestResponse]: protobufs.CMsgDOTASubmitPlayerAvoidRequestResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCtoGCAssociatedExploiterAccountInfoResponse]: protobufs.CMsgGCtoGCAssociatedExploiterAccountInfoResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientVACReminder]: protobufs.CMsgGCToClientVACReminder;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftBuyResponse]: protobufs.CMsgClientToGCUnderDraftBuyResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftRerollResponse]: protobufs.CMsgClientToGCUnderDraftRerollResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftSellResponse]: protobufs.CMsgClientToGCUnderDraftSellResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftResponse]: protobufs.CMsgClientToGCUnderDraftResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftRedeemRewardResponse]: protobufs.CMsgClientToGCUnderDraftRedeemRewardResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestReporterUpdatesResponse]: protobufs.CMsgClientToGCRequestReporterUpdatesResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSubmitDraftTriviaMatchAnswerResponse]: protobufs.CMsgClientToGCSubmitDraftTriviaMatchAnswerResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftRollBackBenchResponse]: protobufs.CMsgClientToGCUnderDraftRollBackBenchResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetOWMatchDetailsResponse]: protobufs.CMsgClientToGCGetOWMatchDetailsResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSubmitOWConvictionResponse]: protobufs.CMsgClientToGCSubmitOWConvictionResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRecalibrateMMRResponse]: protobufs.CMsgClientToGCRecalibrateMMRResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCChinaSSAURLResponse]: protobufs.CMsgClientToGCChinaSSAURLResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCChinaSSAAcceptedResponse]: protobufs.CMsgClientToGCChinaSSAAcceptedResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientOverwatchCasesAvailable]: protobufs.CMsgGCToClientOverwatchCasesAvailable;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetDPCFavoritesResponse]: protobufs.CMsgClientToGCGetDPCFavoritesResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetDPCFavoriteStateResponse]: protobufs.CMsgClientToGCSetDPCFavoriteStateResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetEventActiveSeasonIDResponse]: protobufs.CMsgClientToGCSetEventActiveSeasonIDResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCreateTeamPlayerCardPackResponse]: protobufs.CMsgClientToGCCreateTeamPlayerCardPackResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetStickerbookResponse]: protobufs.CMsgClientToGCGetStickerbookResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCreateStickerbookPageResponse]: protobufs.CMsgClientToGCCreateStickerbookPageResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCDeleteStickerbookPageResponse]: protobufs.CMsgClientToGCDeleteStickerbookPageResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPlaceStickersResponse]: protobufs.CMsgClientToGCPlaceStickersResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPlaceCollectionStickersResponse]: protobufs.CMsgClientToGCPlaceCollectionStickersResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOrderStickerbookTeamPageResponse]: protobufs.CMsgClientToGCOrderStickerbookTeamPageResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetHeroStickerResponse]: protobufs.CMsgClientToGCSetHeroStickerResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetHeroStickersResponse]: protobufs.CMsgClientToGCGetHeroStickersResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetFavoritePageResponse]: protobufs.CMsgClientToGCSetFavoritePageResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientCollectorsCacheAvailableDataResponse]: protobufs.CMsgGCToClientCollectorsCacheAvailableDataResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientUploadMatchClipResponse]: protobufs.CMsgGCToClientUploadMatchClipResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientRankResponse]: protobufs.CMsgGCToClientRankResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientRankUpdate]: protobufs.CMsgGCToClientRankUpdate;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientMapStatsResponse]: protobufs.CMsgGCToClientMapStatsResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRoadToTIGetQuestsResponse]: protobufs.CMsgClientToGCRoadToTIGetQuestsResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRoadToTIGetActiveQuestResponse]: protobufs.CMsgClientToGCRoadToTIGetActiveQuestResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientRoadToTIQuestDataUpdated]: protobufs.CMsgGCToClientRoadToTIQuestDataUpdated;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRoadToTIUseItemResponse]: protobufs.CMsgClientToGCRoadToTIUseItemResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldGetUserDataResponse]: protobufs.CMsgClientToGCOverworldGetUserDataResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldCompletePathResponse]: protobufs.CMsgClientToGCOverworldCompletePathResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldClaimEncounterRewardResponse]: protobufs.CMsgClientToGCOverworldClaimEncounterRewardResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldDevResetAllResponse]: protobufs.CMsgClientToGCOverworldDevResetAllResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldDevResetNodeResponse]: protobufs.CMsgClientToGCOverworldDevResetNodeResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldDevGrantTokensResponse]: protobufs.CMsgClientToGCOverworldDevGrantTokensResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldDevClearInventoryResponse]: protobufs.CMsgClientToGCOverworldDevClearInventoryResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientOverworldUserDataUpdated]: protobufs.CMsgGCToClientOverworldUserDataUpdated;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldMoveToNodeResponse]: protobufs.CMsgClientToGCOverworldMoveToNodeResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCNewBloomGiftResponse]: protobufs.CMsgClientToGCNewBloomGiftResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldTradeTokensResponse]: protobufs.CMsgClientToGCOverworldTradeTokensResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldFeedbackResponse]: protobufs.CMsgClientToGCOverworldFeedbackResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldVisitEncounterResponse]: protobufs.CMsgClientToGCOverworldVisitEncounterResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldGiftTokensResponse]: protobufs.CMsgClientToGCOverworldGiftTokensResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCDotaLabsFeedbackResponse]: protobufs.CMsgClientToGCDotaLabsFeedbackResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldGetDynamicImageResponse]: protobufs.CMsgClientToGCOverworldGetDynamicImageResponse;
    [protobufs.EDOTAGCMsg.k_EMsgGCCompendiumRemoveAllSelectionsResponse]: protobufs.CMsgDOTACompendiumRemoveAllSelectionsResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldMinigameActionResponse]: protobufs.CMsgClientToGCOverworldMinigameActionResponse;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldRequestTokensNeededByFriendResponse]: protobufs.CMsgClientToGCOverworldRequestTokensNeededByFriendResponse;
    [protobufs.EGCBaseClientMsg.k_EMsgGCToClientPollConvarRequest]: protobufs.CMsgGCToClientPollConvarRequest;
    [protobufs.EGCBaseClientMsg.k_EMsgGCToClientPollConvarResponse]: protobufs.CMsgGCToClientPollConvarResponse;
    [protobufs.EGCBaseClientMsg.k_EMsgGCToClientRequestDropped]: protobufs.CMsgGCToClientRequestDropped;
    [protobufs.EGCBaseClientMsg.k_EMsgGCClientWelcome]: protobufs.CMsgClientWelcome;
    [protobufs.EGCBaseClientMsg.k_EMsgGCClientConnectionStatus]: protobufs.CMsgConnectionStatus;
    [protobufs.ESOMsg.k_ESOMsg_Create]: protobufs.CMsgSOSingleObject;
    [protobufs.ESOMsg.k_ESOMsg_Destroy]: protobufs.CMsgSOSingleObject;
    [protobufs.ESOMsg.k_ESOMsg_CacheSubscribed]: protobufs.CMsgSOCacheSubscribed;
    [protobufs.ESOMsg.k_ESOMsg_CacheUnsubscribed]: protobufs.CMsgSOCacheUnsubscribed;
    [protobufs.ESOMsg.k_ESOMsg_UpdateMultiple]: protobufs.CMsgSOMultipleObjects;
    [protobufs.EGCBaseMsg.k_EMsgGCPartyInviteResponse]: protobufs.CMsgPartyInviteResponse;
    [protobufs.EGCBaseMsg.k_EMsgGCLobbyInviteResponse]: protobufs.CMsgLobbyInviteResponse;
    [protobufs.EGCBaseMsg.k_EMsgGCToClientPollFileRequest]: protobufs.CMsgGCToClientPollFileRequest;
    [protobufs.EGCBaseMsg.k_EMsgGCToClientPollFileResponse]: protobufs.CMsgGCToClientPollFileResponse;
    [protobufs.EGCBaseMsg.k_EMsgGCToClientApplyRemoteConVars]: protobufs.CMsgGCToClientApplyRemoteConVars;
    [protobufs.EGCBaseMsg.k_EMsgGCToClientAggregateMetricsBackoff]: protobufs.CMsgGCToClientAggregateMetricsBackoff;
};
export type GCEvents = {
    [protobufs.EDOTAGCMsg.k_EMsgGCInitialQuestionnaireResponse]: (data: protobufs.CMsgInitialQuestionnaireResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCPracticeLobbyResponse]: (data: protobufs.CMsgGenericResult) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCSpectateFriendGameResponse]: (data: protobufs.CMsgSpectateFriendGameResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCReportsRemainingResponse]: (data: protobufs.CMsgDOTAReportsRemainingResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCSubmitPlayerReportResponse]: (data: protobufs.CMsgDOTASubmitPlayerReportResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCWatchGameResponse]: (data: protobufs.CMsgWatchGameResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCMatchDetailsResponse]: (data: protobufs.CMsgGCMatchDetailsResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCMatchmakingStatsResponse]: (data: protobufs.CMsgDOTAMatchmakingStatsResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCSetMatchHistoryAccessResponse]: (data: protobufs.CMsgDOTASetMatchHistoryAccessResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgUpgradeLeagueItemResponse]: (data: protobufs.CMsgUpgradeLeagueItemResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCGetHeroStandingsResponse]: (data: protobufs.CMsgGCGetHeroStandingsResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCItemEditorReservationsResponse]: (data: protobufs.CMsgGCItemEditorReservationsResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCItemEditorReserveItemDefResponse]: (data: protobufs.CMsgGCItemEditorReserveItemDefResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCItemEditorReleaseReservationResponse]: (data: protobufs.CMsgGCItemEditorReleaseReservationResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCSetProfilePrivacyResponse]: (data: protobufs.CMsgDOTASetProfilePrivacyResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgDOTAGetEventPointsResponse]: (data: protobufs.CMsgDOTAGetEventPointsResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCCompendiumDataResponse]: (data: protobufs.CMsgDOTACompendiumDataResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgDOTAGetPlayerMatchHistoryResponse]: (data: protobufs.CMsgDOTAGetPlayerMatchHistoryResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCNotificationsResponse]: (data: protobufs.CMsgGCNotificationsResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCRankedPlayerInfoSubmitResponse]: (data: protobufs.CMsgGCRankedPlayerInfoSubmitResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCPlayerInfoSubmitResponse]: (data: protobufs.CMsgGCPlayerInfoSubmitResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCHasItemResponse]: (data: protobufs.CMsgDOTAHasItemResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientTournamentItemDrop]: (data: protobufs.CMsgGCToClientTournamentItemDrop) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientEmoticonData]: (data: protobufs.CMsgGCToClientEmoticonData) => void;
    [protobufs.EDOTAGCMsg.k_EMsgDOTARedeemItemResponse]: (data: protobufs.CMsgDOTARedeemItemResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetAllHeroProgressResponse]: (data: protobufs.CMsgClientToGCGetAllHeroProgressResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetTrophyListResponse]: (data: protobufs.CMsgClientToGCGetTrophyListResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientTrophyAwarded]: (data: protobufs.CMsgGCToClientTrophyAwarded) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetProfileCardResponse]: (data: protobufs.CMsgDOTAProfileCard) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientHeroStatueCreateResult]: (data: protobufs.CMsgGCToClientHeroStatueCreateResult) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCRerollPlayerChallengeResponse]: (data: protobufs.CMsgGCRerollPlayerChallengeResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetAllHeroOrderResponse]: (data: protobufs.CMsgClientToGCGetAllHeroOrderResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPlayerCardSpecificPurchaseResponse]: (data: protobufs.CMsgClientToGCPlayerCardSpecificPurchaseResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientGetFilteredPlayersResponse]: (data: protobufs.CMsgGCToClientGetFilteredPlayersResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientRemoveFilteredPlayerResponse]: (data: protobufs.CMsgGCToClientRemoveFilteredPlayerResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientPlayerBeaconState]: (data: protobufs.CMsgGCToClientPlayerBeaconState) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientPartyBeaconUpdate]: (data: protobufs.CMsgGCToClientPartyBeaconUpdate) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientPartySearchInvite]: (data: protobufs.CMsgGCToClientPartySearchInvite) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientRequestActiveBeaconPartiesResponse]: (data: protobufs.CMsgGCToClientRequestActiveBeaconPartiesResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientManageFavoritesResponse]: (data: protobufs.CMsgGCToClientManageFavoritesResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientJoinPartyFromBeaconResponse]: (data: protobufs.CMsgGCToClientJoinPartyFromBeaconResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientGetFavoritePlayersResponse]: (data: protobufs.CMsgGCToClientGetFavoritePlayersResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientVerifyFavoritePlayersResponse]: (data: protobufs.CMsgGCToClientVerifyFavoritePlayersResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientPartySearchInvites]: (data: protobufs.CMsgGCToClientPartySearchInvites) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPurchaseLabyrinthBlessingsResponse]: (data: protobufs.CMsgClientToGCPurchaseLabyrinthBlessingsResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientPurchaseFilteredPlayerSlotResponse]: (data: protobufs.CMsgGCToClientPurchaseFilteredPlayerSlotResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientUpdateFilteredPlayerNoteResponse]: (data: protobufs.CMsgGCToClientUpdateFilteredPlayerNoteResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientPlayerStatsResponse]: (data: protobufs.CMsgGCToClientPlayerStatsResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientFindTopSourceTVGamesResponse]: (data: protobufs.CMsgGCToClientFindTopSourceTVGamesResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientSocialFeedPostCommentResponse]: (data: protobufs.CMsgGCToClientSocialFeedPostCommentResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientCustomGamesFriendsPlayedResponse]: (data: protobufs.CMsgGCToClientCustomGamesFriendsPlayedResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientFriendsPlayedCustomGameResponse]: (data: protobufs.CMsgGCToClientFriendsPlayedCustomGameResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientSocialFeedPostMessageResponse]: (data: protobufs.CMsgGCToClientSocialFeedPostMessageResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientTopLeagueMatchesResponse]: (data: protobufs.CMsgGCToClientTopLeagueMatchesResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientTopFriendMatchesResponse]: (data: protobufs.CMsgGCToClientTopFriendMatchesResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCMatchesMinimalResponse]: (data: protobufs.CMsgClientToGCMatchesMinimalResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetProfileTicketsResponse]: (data: protobufs.CMsgDOTAProfileTickets) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientMatchGroupsVersion]: (data: protobufs.CMsgGCToClientMatchGroupsVersion) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetQuestProgressResponse]: (data: protobufs.CMsgClientToGCGetQuestProgressResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientMatchSignedOut]: (data: protobufs.CMsgGCToClientMatchSignedOut) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCGetHeroStatsHistoryResponse]: (data: protobufs.CMsgGCGetHeroStatsHistoryResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientWageringResponse]: (data: protobufs.CMsgGCToClientWageringResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCHasPlayerVotedForMVPResponse]: (data: protobufs.CMsgClientToGCHasPlayerVotedForMVPResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCVoteForMVPResponse]: (data: protobufs.CMsgClientToGCVoteForMVPResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCTeammateStatsResponse]: (data: protobufs.CMsgClientToGCTeammateStatsResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetGiftPermissionsResponse]: (data: protobufs.CMsgClientToGCGetGiftPermissionsResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCVoteForArcanaResponse]: (data: protobufs.CMsgClientToGCVoteForArcanaResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestArcanaVotesRemainingResponse]: (data: protobufs.CMsgClientToGCRequestArcanaVotesRemainingResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCSubmitLobbyMVPVoteResponse]: (data: protobufs.CMsgDOTASubmitLobbyMVPVoteResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientQuestProgressUpdated]: (data: protobufs.CMsgGCToClientQuestProgressUpdated) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientWageringUpdate]: (data: protobufs.CMsgGCToClientWageringUpdate) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientArcanaVotesUpdate]: (data: protobufs.CMsgGCToClientArcanaVotesUpdate) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOpenPlayerCardPackResponse]: (data: protobufs.CMsgClientToGCOpenPlayerCardPackResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSelectCompendiumInGamePredictionResponse]: (data: protobufs.CMsgClientToGCSelectCompendiumInGamePredictionResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRecyclePlayerCardResponse]: (data: protobufs.CMsgClientToGCRecyclePlayerCardResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCreatePlayerCardPackResponse]: (data: protobufs.CMsgClientToGCCreatePlayerCardPackResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCGetPlayerCardItemInfoResponse]: (data: protobufs.CMsgGCGetPlayerCardItemInfoResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientBattlePassRollupRequest]: (data: protobufs.CMsgGCToClientBattlePassRollupRequest) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientBattlePassRollupResponse]: (data: protobufs.CMsgGCToClientBattlePassRollupResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCTransferSeasonalMMRResponse]: (data: protobufs.CMsgClientToGCTransferSeasonalMMRResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientPlaytestStatus]: (data: protobufs.CMsgGCToClientPlaytestStatus) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCJoinPlaytestResponse]: (data: protobufs.CMsgClientToGCJoinPlaytestResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientBattlePassRollupListRequest]: (data: protobufs.CMsgGCToClientBattlePassRollupListRequest) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientBattlePassRollupListResponse]: (data: protobufs.CMsgGCToClientBattlePassRollupListResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgDOTAClaimEventActionResponse]: (data: protobufs.CMsgDOTAClaimEventActionResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgDOTAGetPeriodicResourceResponse]: (data: protobufs.CMsgDOTAGetPeriodicResourceResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgSubmitTriviaQuestionAnswerResponse]: (data: protobufs.CMsgDOTASubmitTriviaQuestionAnswerResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgStartTriviaSessionResponse]: (data: protobufs.CMsgDOTAStartTriviaSessionResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgAnchorPhoneNumberResponse]: (data: protobufs.CMsgDOTAAnchorPhoneNumberResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgUnanchorPhoneNumberResponse]: (data: protobufs.CMsgDOTAUnanchorPhoneNumberResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCQuickStatsResponse]: (data: protobufs.CMsgDOTAClientToGCQuickStatsResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgSelectionPriorityChoiceResponse]: (data: protobufs.CMsgDOTASelectionPriorityChoiceResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGameAutographRewardResponse]: (data: protobufs.CMsgDOTAGameAutographRewardResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgDestroyLobbyResponse]: (data: protobufs.CMsgDOTADestroyLobbyResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgPurchaseItemWithEventPointsResponse]: (data: protobufs.CMsgPurchaseItemWithEventPointsResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgPurchaseHeroRandomRelicResponse]: (data: protobufs.CMsgPurchaseHeroRandomRelicResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCClaimEventActionUsingItemResponse]: (data: protobufs.CMsgClientToGCClaimEventActionUsingItemResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgPartyReadyCheckResponse]: (data: protobufs.CMsgPartyReadyCheckResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGetRecentPlayTimeFriendsResponse]: (data: protobufs.CMsgDOTAGetRecentPlayTimeFriendsResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientCommendNotification]: (data: protobufs.CMsgGCToClientCommendNotification) => void;
    [protobufs.EDOTAGCMsg.k_EMsgProfileResponse]: (data: protobufs.CMsgProfileResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgProfileUpdateResponse]: (data: protobufs.CMsgProfileUpdateResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgHeroGlobalDataResponse]: (data: protobufs.CMsgHeroGlobalDataResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestPlusWeeklyChallengeResultResponse]: (data: protobufs.CMsgClientToGCRequestPlusWeeklyChallengeResultResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgPrivateMetadataKeyResponse]: (data: protobufs.CMsgPrivateMetadataKeyResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientCavernCrawlMapPathCompleted]: (data: protobufs.CMsgGCToClientCavernCrawlMapPathCompleted) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlClaimRoomResponse]: (data: protobufs.CMsgClientToGCCavernCrawlClaimRoomResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlUseItemOnRoomResponse]: (data: protobufs.CMsgClientToGCCavernCrawlUseItemOnRoomResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlUseItemOnPathResponse]: (data: protobufs.CMsgClientToGCCavernCrawlUseItemOnPathResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlRequestMapStateResponse]: (data: protobufs.CMsgClientToGCCavernCrawlRequestMapStateResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCavernCrawlGetClaimedRoomCountResponse]: (data: protobufs.CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientRecordContestVoteResponse]: (data: protobufs.CMsgGCToClientRecordContestVoteResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgDevGrantEventPointsResponse]: (data: protobufs.CMsgDevGrantEventPointsResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgDevGrantEventActionResponse]: (data: protobufs.CMsgDevGrantEventActionResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgDevResetEventStateResponse]: (data: protobufs.CMsgDevResetEventStateResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgConsumeEventSupportGrantItemResponse]: (data: protobufs.CMsgConsumeEventSupportGrantItemResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientClaimEventActionUsingItemCompleted]: (data: protobufs.CMsgGCToClientClaimEventActionUsingItemCompleted) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientCavernCrawlMapUpdated]: (data: protobufs.CMsgGCToClientCavernCrawlMapUpdated) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestPlayerRecentAccomplishmentsResponse]: (data: protobufs.CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse]: (data: protobufs.CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestContestVotesResponse]: (data: protobufs.CMsgClientToGCRequestContestVotesResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCMVPVoteTimeoutResponse]: (data: protobufs.CMsgClientToGCMVPVoteTimeoutResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSubmitPlayerMatchSurveyResponse]: (data: protobufs.CMsgClientToGCSubmitPlayerMatchSurveyResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgDevDeleteEventActionsResponse]: (data: protobufs.CMsgDevDeleteEventActionsResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCSubmitPlayerAvoidRequestResponse]: (data: protobufs.CMsgDOTASubmitPlayerAvoidRequestResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCtoGCAssociatedExploiterAccountInfoResponse]: (data: protobufs.CMsgGCtoGCAssociatedExploiterAccountInfoResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientVACReminder]: (data: protobufs.CMsgGCToClientVACReminder) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftBuyResponse]: (data: protobufs.CMsgClientToGCUnderDraftBuyResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftRerollResponse]: (data: protobufs.CMsgClientToGCUnderDraftRerollResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftSellResponse]: (data: protobufs.CMsgClientToGCUnderDraftSellResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftResponse]: (data: protobufs.CMsgClientToGCUnderDraftResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftRedeemRewardResponse]: (data: protobufs.CMsgClientToGCUnderDraftRedeemRewardResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRequestReporterUpdatesResponse]: (data: protobufs.CMsgClientToGCRequestReporterUpdatesResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSubmitDraftTriviaMatchAnswerResponse]: (data: protobufs.CMsgClientToGCSubmitDraftTriviaMatchAnswerResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCUnderDraftRollBackBenchResponse]: (data: protobufs.CMsgClientToGCUnderDraftRollBackBenchResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetOWMatchDetailsResponse]: (data: protobufs.CMsgClientToGCGetOWMatchDetailsResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSubmitOWConvictionResponse]: (data: protobufs.CMsgClientToGCSubmitOWConvictionResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRecalibrateMMRResponse]: (data: protobufs.CMsgClientToGCRecalibrateMMRResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCChinaSSAURLResponse]: (data: protobufs.CMsgClientToGCChinaSSAURLResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCChinaSSAAcceptedResponse]: (data: protobufs.CMsgClientToGCChinaSSAAcceptedResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientOverwatchCasesAvailable]: (data: protobufs.CMsgGCToClientOverwatchCasesAvailable) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetDPCFavoritesResponse]: (data: protobufs.CMsgClientToGCGetDPCFavoritesResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetDPCFavoriteStateResponse]: (data: protobufs.CMsgClientToGCSetDPCFavoriteStateResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetEventActiveSeasonIDResponse]: (data: protobufs.CMsgClientToGCSetEventActiveSeasonIDResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCreateTeamPlayerCardPackResponse]: (data: protobufs.CMsgClientToGCCreateTeamPlayerCardPackResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetStickerbookResponse]: (data: protobufs.CMsgClientToGCGetStickerbookResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCCreateStickerbookPageResponse]: (data: protobufs.CMsgClientToGCCreateStickerbookPageResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCDeleteStickerbookPageResponse]: (data: protobufs.CMsgClientToGCDeleteStickerbookPageResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPlaceStickersResponse]: (data: protobufs.CMsgClientToGCPlaceStickersResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCPlaceCollectionStickersResponse]: (data: protobufs.CMsgClientToGCPlaceCollectionStickersResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOrderStickerbookTeamPageResponse]: (data: protobufs.CMsgClientToGCOrderStickerbookTeamPageResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetHeroStickerResponse]: (data: protobufs.CMsgClientToGCSetHeroStickerResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCGetHeroStickersResponse]: (data: protobufs.CMsgClientToGCGetHeroStickersResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCSetFavoritePageResponse]: (data: protobufs.CMsgClientToGCSetFavoritePageResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientCollectorsCacheAvailableDataResponse]: (data: protobufs.CMsgGCToClientCollectorsCacheAvailableDataResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientUploadMatchClipResponse]: (data: protobufs.CMsgGCToClientUploadMatchClipResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientRankResponse]: (data: protobufs.CMsgGCToClientRankResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientRankUpdate]: (data: protobufs.CMsgGCToClientRankUpdate) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientMapStatsResponse]: (data: protobufs.CMsgGCToClientMapStatsResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRoadToTIGetQuestsResponse]: (data: protobufs.CMsgClientToGCRoadToTIGetQuestsResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRoadToTIGetActiveQuestResponse]: (data: protobufs.CMsgClientToGCRoadToTIGetActiveQuestResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientRoadToTIQuestDataUpdated]: (data: protobufs.CMsgGCToClientRoadToTIQuestDataUpdated) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCRoadToTIUseItemResponse]: (data: protobufs.CMsgClientToGCRoadToTIUseItemResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldGetUserDataResponse]: (data: protobufs.CMsgClientToGCOverworldGetUserDataResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldCompletePathResponse]: (data: protobufs.CMsgClientToGCOverworldCompletePathResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldClaimEncounterRewardResponse]: (data: protobufs.CMsgClientToGCOverworldClaimEncounterRewardResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldDevResetAllResponse]: (data: protobufs.CMsgClientToGCOverworldDevResetAllResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldDevResetNodeResponse]: (data: protobufs.CMsgClientToGCOverworldDevResetNodeResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldDevGrantTokensResponse]: (data: protobufs.CMsgClientToGCOverworldDevGrantTokensResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldDevClearInventoryResponse]: (data: protobufs.CMsgClientToGCOverworldDevClearInventoryResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCToClientOverworldUserDataUpdated]: (data: protobufs.CMsgGCToClientOverworldUserDataUpdated) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldMoveToNodeResponse]: (data: protobufs.CMsgClientToGCOverworldMoveToNodeResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCNewBloomGiftResponse]: (data: protobufs.CMsgClientToGCNewBloomGiftResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldTradeTokensResponse]: (data: protobufs.CMsgClientToGCOverworldTradeTokensResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldFeedbackResponse]: (data: protobufs.CMsgClientToGCOverworldFeedbackResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldVisitEncounterResponse]: (data: protobufs.CMsgClientToGCOverworldVisitEncounterResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldGiftTokensResponse]: (data: protobufs.CMsgClientToGCOverworldGiftTokensResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCDotaLabsFeedbackResponse]: (data: protobufs.CMsgClientToGCDotaLabsFeedbackResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldGetDynamicImageResponse]: (data: protobufs.CMsgClientToGCOverworldGetDynamicImageResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgGCCompendiumRemoveAllSelectionsResponse]: (data: protobufs.CMsgDOTACompendiumRemoveAllSelectionsResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldMinigameActionResponse]: (data: protobufs.CMsgClientToGCOverworldMinigameActionResponse) => void;
    [protobufs.EDOTAGCMsg.k_EMsgClientToGCOverworldRequestTokensNeededByFriendResponse]: (data: protobufs.CMsgClientToGCOverworldRequestTokensNeededByFriendResponse) => void;
    [protobufs.EGCBaseClientMsg.k_EMsgGCToClientPollConvarRequest]: (data: protobufs.CMsgGCToClientPollConvarRequest) => void;
    [protobufs.EGCBaseClientMsg.k_EMsgGCToClientPollConvarResponse]: (data: protobufs.CMsgGCToClientPollConvarResponse) => void;
    [protobufs.EGCBaseClientMsg.k_EMsgGCToClientRequestDropped]: (data: protobufs.CMsgGCToClientRequestDropped) => void;
    [protobufs.EGCBaseClientMsg.k_EMsgGCClientWelcome]: (data: protobufs.CMsgClientWelcome) => void;
    [protobufs.EGCBaseClientMsg.k_EMsgGCClientConnectionStatus]: (data: protobufs.CMsgConnectionStatus) => void;
    [protobufs.ESOMsg.k_ESOMsg_Create]: (data: protobufs.CMsgSOSingleObject) => void;
    [protobufs.ESOMsg.k_ESOMsg_Destroy]: (data: protobufs.CMsgSOSingleObject) => void;
    [protobufs.ESOMsg.k_ESOMsg_CacheSubscribed]: (data: protobufs.CMsgSOCacheSubscribed) => void;
    [protobufs.ESOMsg.k_ESOMsg_CacheUnsubscribed]: (data: protobufs.CMsgSOCacheUnsubscribed) => void;
    [protobufs.ESOMsg.k_ESOMsg_UpdateMultiple]: (data: protobufs.CMsgSOMultipleObjects) => void;
    [protobufs.EGCBaseMsg.k_EMsgGCPartyInviteResponse]: (data: protobufs.CMsgPartyInviteResponse) => void;
    [protobufs.EGCBaseMsg.k_EMsgGCLobbyInviteResponse]: (data: protobufs.CMsgLobbyInviteResponse) => void;
    [protobufs.EGCBaseMsg.k_EMsgGCToClientPollFileRequest]: (data: protobufs.CMsgGCToClientPollFileRequest) => void;
    [protobufs.EGCBaseMsg.k_EMsgGCToClientPollFileResponse]: (data: protobufs.CMsgGCToClientPollFileResponse) => void;
    [protobufs.EGCBaseMsg.k_EMsgGCToClientApplyRemoteConVars]: (data: protobufs.CMsgGCToClientApplyRemoteConVars) => void;
    [protobufs.EGCBaseMsg.k_EMsgGCToClientAggregateMetricsBackoff]: (data: protobufs.CMsgGCToClientAggregateMetricsBackoff) => void;
};
export const AllProtobufs = { ...ClientProtobufs, ...GCProtobufs };
Object.freeze(AllProtobufs);
export type AllProtobufsType = ClientProtobufsType & GCProtobufsType;
