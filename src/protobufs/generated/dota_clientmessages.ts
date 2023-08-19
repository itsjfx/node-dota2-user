/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  CDOTAMsgDismissAllStatPopups,
  CDOTAMsgItemAlert,
  CDOTAMsgLocationPing,
  CDOTAMsgMapLine,
  CDOTAMsgSendStatPopup,
  CDOTAMsgUnitOrder,
  CDOTAMsgWorldLine,
  EDOTAVersusScenePlayerBehavior,
  eDOTAVersusScenePlayerBehaviorFromJSON,
  eDOTAVersusScenePlayerBehaviorToJSON,
  VersusSceneChatWheel,
  VersusScenePlayActivity,
  VersusScenePlaybackRate,
} from "./dota_commonmessages";
import {
  EEvent,
  eEventFromJSON,
  eEventToJSON,
  EOverwatchReportReason,
  eOverwatchReportReasonFromJSON,
  eOverwatchReportReasonToJSON,
} from "./dota_shared_enums";

export enum EDotaClientMessages {
  DOTA_CM_MapLine = 301,
  DOTA_CM_AspectRatio = 302,
  DOTA_CM_MapPing = 303,
  DOTA_CM_UnitsAutoAttack = 304,
  DOTA_CM_SearchString = 307,
  DOTA_CM_Pause = 308,
  DOTA_CM_ShopViewMode = 309,
  DOTA_CM_SetUnitShareFlag = 310,
  DOTA_CM_SwapRequest = 311,
  DOTA_CM_SwapAccept = 312,
  DOTA_CM_WorldLine = 313,
  DOTA_CM_RequestGraphUpdate = 314,
  DOTA_CM_ItemAlert = 315,
  DOTA_CM_ChatWheel = 316,
  DOTA_CM_SendStatPopup = 317,
  DOTA_CM_BeginLastHitChallenge = 318,
  DOTA_CM_UpdateQuickBuy = 319,
  DOTA_CM_UpdateCoachListen = 320,
  DOTA_CM_CoachHUDPing = 321,
  DOTA_CM_RecordVote = 322,
  DOTA_CM_UnitsAutoAttackAfterSpell = 323,
  DOTA_CM_WillPurchaseAlert = 324,
  DOTA_CM_PlayerShowCase = 325,
  DOTA_CM_TeleportRequiresHalt = 326,
  DOTA_CM_CameraZoomAmount = 327,
  DOTA_CM_BroadcasterUsingCamerman = 328,
  DOTA_CM_BroadcasterUsingAssistedCameraOperator = 329,
  DOTA_CM_EnemyItemAlert = 330,
  DOTA_CM_FreeInventory = 331,
  DOTA_CM_BuyBackStateAlert = 332,
  DOTA_CM_QuickBuyAlert = 333,
  DOTA_CM_HeroStatueLike = 334,
  DOTA_CM_ModifierAlert = 335,
  DOTA_CM_TeamShowcaseEditor = 336,
  DOTA_CM_HPManaAlert = 337,
  DOTA_CM_GlyphAlert = 338,
  DOTA_CM_TeamShowcaseClientData = 339,
  DOTA_CM_PlayTeamShowcase = 340,
  DOTA_CM_EventCNY2015Cmd = 341,
  DOTA_CM_FillEmptySlotsWithBots = 342,
  DOTA_CM_DemoHero = 343,
  DOTA_CM_AbilityLearnModeToggled = 344,
  DOTA_CM_AbilityStartUse = 345,
  DOTA_CM_ChallengeSelect = 346,
  DOTA_CM_ChallengeReroll = 347,
  DOTA_CM_ClickedBuff = 348,
  DOTA_CM_CoinWager = 349,
  DOTA_CM_ExecuteOrders = 350,
  DOTA_CM_XPAlert = 351,
  DOTA_CM_EventPointsTip = 353,
  DOTA_CM_KillMyHero = 355,
  DOTA_CM_QuestStatus = 356,
  DOTA_CM_ToggleAutoattack = 357,
  DOTA_CM_SpecialAbility = 358,
  DOTA_CM_KillcamDamageTaken = 359,
  DOTA_CM_SetEnemyStartingPosition = 360,
  DOTA_CM_SetDesiredWardPlacement = 361,
  DOTA_CM_RollDice = 362,
  DOTA_CM_FlipCoin = 363,
  DOTA_CM_RequestItemSuggestions = 364,
  DOTA_CM_MakeTeamCaptain = 365,
  DOTA_CM_CoinWagerToken = 366,
  DOTA_CM_RankWager = 367,
  DOTA_CM_DismissAllStatPopups = 368,
  DOTA_CM_HelpTipSystemStateChanged = 369,
  DOTA_CM_ChannelRequiresHalt = 370,
  DOTA_CM_RequestBulkCombatLog = 371,
  DOTA_CM_AbilityDraftRequestAbility = 372,
  DOTA_CM_GuideSelectOption = 373,
  DOTA_CM_GuideSelected = 374,
  DOTA_CM_DamageReport = 375,
  DOTA_CM_SalutePlayer = 376,
  DOTA_CM_SprayWheel = 377,
  DOTA_CM_TipAlert = 378,
  DOTA_CM_EmptyTeleportAlert = 379,
  DOTA_CM_RadarAlert = 380,
  DOTA_CM_TalentTreeAlert = 381,
  DOTA_CM_SetCavernMapVariant = 382,
  DOTA_CM_PauseGameOrder = 383,
  DOTA_CM_VersusScene_PlayerBehavior = 384,
  DOTA_CM_PlayerBounty = 385,
  DOTA_CM_PlayerBountyCancel = 386,
  DOTA_CM_EmptyItemSlotAlert = 388,
  DOTA_CM_AddOverwatchReportMarker = 389,
  DOTA_CM_AghsStatusAlert = 390,
  DOTA_CM_PerfReport = 391,
  DOTA_CM_ContextualTips_Subscribe = 393,
  DOTA_CM_ChatMessage = 394,
  DOTA_CM_AddCommunicationsReportMarker = 395,
  DOTA_CM_AddCommunicationsBlockMarker = 396,
  DOTA_CM_NeutralCampAlert = 397,
  DOTA_CM_DuelAccepted = 398,
  DOTA_CM_ChooseNeutralItem = 399,
  DOTA_CM_PlayerDraftPick = 800,
  DOTA_CM_PlayerDraftSuggest = 801,
  DOTA_CM_PlayerDraftPreferRole = 802,
  DOTA_CM_PlayerDraftPreferTeam = 803,
}

export function eDotaClientMessagesFromJSON(object: any): EDotaClientMessages {
  switch (object) {
    case 301:
    case "DOTA_CM_MapLine":
      return EDotaClientMessages.DOTA_CM_MapLine;
    case 302:
    case "DOTA_CM_AspectRatio":
      return EDotaClientMessages.DOTA_CM_AspectRatio;
    case 303:
    case "DOTA_CM_MapPing":
      return EDotaClientMessages.DOTA_CM_MapPing;
    case 304:
    case "DOTA_CM_UnitsAutoAttack":
      return EDotaClientMessages.DOTA_CM_UnitsAutoAttack;
    case 307:
    case "DOTA_CM_SearchString":
      return EDotaClientMessages.DOTA_CM_SearchString;
    case 308:
    case "DOTA_CM_Pause":
      return EDotaClientMessages.DOTA_CM_Pause;
    case 309:
    case "DOTA_CM_ShopViewMode":
      return EDotaClientMessages.DOTA_CM_ShopViewMode;
    case 310:
    case "DOTA_CM_SetUnitShareFlag":
      return EDotaClientMessages.DOTA_CM_SetUnitShareFlag;
    case 311:
    case "DOTA_CM_SwapRequest":
      return EDotaClientMessages.DOTA_CM_SwapRequest;
    case 312:
    case "DOTA_CM_SwapAccept":
      return EDotaClientMessages.DOTA_CM_SwapAccept;
    case 313:
    case "DOTA_CM_WorldLine":
      return EDotaClientMessages.DOTA_CM_WorldLine;
    case 314:
    case "DOTA_CM_RequestGraphUpdate":
      return EDotaClientMessages.DOTA_CM_RequestGraphUpdate;
    case 315:
    case "DOTA_CM_ItemAlert":
      return EDotaClientMessages.DOTA_CM_ItemAlert;
    case 316:
    case "DOTA_CM_ChatWheel":
      return EDotaClientMessages.DOTA_CM_ChatWheel;
    case 317:
    case "DOTA_CM_SendStatPopup":
      return EDotaClientMessages.DOTA_CM_SendStatPopup;
    case 318:
    case "DOTA_CM_BeginLastHitChallenge":
      return EDotaClientMessages.DOTA_CM_BeginLastHitChallenge;
    case 319:
    case "DOTA_CM_UpdateQuickBuy":
      return EDotaClientMessages.DOTA_CM_UpdateQuickBuy;
    case 320:
    case "DOTA_CM_UpdateCoachListen":
      return EDotaClientMessages.DOTA_CM_UpdateCoachListen;
    case 321:
    case "DOTA_CM_CoachHUDPing":
      return EDotaClientMessages.DOTA_CM_CoachHUDPing;
    case 322:
    case "DOTA_CM_RecordVote":
      return EDotaClientMessages.DOTA_CM_RecordVote;
    case 323:
    case "DOTA_CM_UnitsAutoAttackAfterSpell":
      return EDotaClientMessages.DOTA_CM_UnitsAutoAttackAfterSpell;
    case 324:
    case "DOTA_CM_WillPurchaseAlert":
      return EDotaClientMessages.DOTA_CM_WillPurchaseAlert;
    case 325:
    case "DOTA_CM_PlayerShowCase":
      return EDotaClientMessages.DOTA_CM_PlayerShowCase;
    case 326:
    case "DOTA_CM_TeleportRequiresHalt":
      return EDotaClientMessages.DOTA_CM_TeleportRequiresHalt;
    case 327:
    case "DOTA_CM_CameraZoomAmount":
      return EDotaClientMessages.DOTA_CM_CameraZoomAmount;
    case 328:
    case "DOTA_CM_BroadcasterUsingCamerman":
      return EDotaClientMessages.DOTA_CM_BroadcasterUsingCamerman;
    case 329:
    case "DOTA_CM_BroadcasterUsingAssistedCameraOperator":
      return EDotaClientMessages.DOTA_CM_BroadcasterUsingAssistedCameraOperator;
    case 330:
    case "DOTA_CM_EnemyItemAlert":
      return EDotaClientMessages.DOTA_CM_EnemyItemAlert;
    case 331:
    case "DOTA_CM_FreeInventory":
      return EDotaClientMessages.DOTA_CM_FreeInventory;
    case 332:
    case "DOTA_CM_BuyBackStateAlert":
      return EDotaClientMessages.DOTA_CM_BuyBackStateAlert;
    case 333:
    case "DOTA_CM_QuickBuyAlert":
      return EDotaClientMessages.DOTA_CM_QuickBuyAlert;
    case 334:
    case "DOTA_CM_HeroStatueLike":
      return EDotaClientMessages.DOTA_CM_HeroStatueLike;
    case 335:
    case "DOTA_CM_ModifierAlert":
      return EDotaClientMessages.DOTA_CM_ModifierAlert;
    case 336:
    case "DOTA_CM_TeamShowcaseEditor":
      return EDotaClientMessages.DOTA_CM_TeamShowcaseEditor;
    case 337:
    case "DOTA_CM_HPManaAlert":
      return EDotaClientMessages.DOTA_CM_HPManaAlert;
    case 338:
    case "DOTA_CM_GlyphAlert":
      return EDotaClientMessages.DOTA_CM_GlyphAlert;
    case 339:
    case "DOTA_CM_TeamShowcaseClientData":
      return EDotaClientMessages.DOTA_CM_TeamShowcaseClientData;
    case 340:
    case "DOTA_CM_PlayTeamShowcase":
      return EDotaClientMessages.DOTA_CM_PlayTeamShowcase;
    case 341:
    case "DOTA_CM_EventCNY2015Cmd":
      return EDotaClientMessages.DOTA_CM_EventCNY2015Cmd;
    case 342:
    case "DOTA_CM_FillEmptySlotsWithBots":
      return EDotaClientMessages.DOTA_CM_FillEmptySlotsWithBots;
    case 343:
    case "DOTA_CM_DemoHero":
      return EDotaClientMessages.DOTA_CM_DemoHero;
    case 344:
    case "DOTA_CM_AbilityLearnModeToggled":
      return EDotaClientMessages.DOTA_CM_AbilityLearnModeToggled;
    case 345:
    case "DOTA_CM_AbilityStartUse":
      return EDotaClientMessages.DOTA_CM_AbilityStartUse;
    case 346:
    case "DOTA_CM_ChallengeSelect":
      return EDotaClientMessages.DOTA_CM_ChallengeSelect;
    case 347:
    case "DOTA_CM_ChallengeReroll":
      return EDotaClientMessages.DOTA_CM_ChallengeReroll;
    case 348:
    case "DOTA_CM_ClickedBuff":
      return EDotaClientMessages.DOTA_CM_ClickedBuff;
    case 349:
    case "DOTA_CM_CoinWager":
      return EDotaClientMessages.DOTA_CM_CoinWager;
    case 350:
    case "DOTA_CM_ExecuteOrders":
      return EDotaClientMessages.DOTA_CM_ExecuteOrders;
    case 351:
    case "DOTA_CM_XPAlert":
      return EDotaClientMessages.DOTA_CM_XPAlert;
    case 353:
    case "DOTA_CM_EventPointsTip":
      return EDotaClientMessages.DOTA_CM_EventPointsTip;
    case 355:
    case "DOTA_CM_KillMyHero":
      return EDotaClientMessages.DOTA_CM_KillMyHero;
    case 356:
    case "DOTA_CM_QuestStatus":
      return EDotaClientMessages.DOTA_CM_QuestStatus;
    case 357:
    case "DOTA_CM_ToggleAutoattack":
      return EDotaClientMessages.DOTA_CM_ToggleAutoattack;
    case 358:
    case "DOTA_CM_SpecialAbility":
      return EDotaClientMessages.DOTA_CM_SpecialAbility;
    case 359:
    case "DOTA_CM_KillcamDamageTaken":
      return EDotaClientMessages.DOTA_CM_KillcamDamageTaken;
    case 360:
    case "DOTA_CM_SetEnemyStartingPosition":
      return EDotaClientMessages.DOTA_CM_SetEnemyStartingPosition;
    case 361:
    case "DOTA_CM_SetDesiredWardPlacement":
      return EDotaClientMessages.DOTA_CM_SetDesiredWardPlacement;
    case 362:
    case "DOTA_CM_RollDice":
      return EDotaClientMessages.DOTA_CM_RollDice;
    case 363:
    case "DOTA_CM_FlipCoin":
      return EDotaClientMessages.DOTA_CM_FlipCoin;
    case 364:
    case "DOTA_CM_RequestItemSuggestions":
      return EDotaClientMessages.DOTA_CM_RequestItemSuggestions;
    case 365:
    case "DOTA_CM_MakeTeamCaptain":
      return EDotaClientMessages.DOTA_CM_MakeTeamCaptain;
    case 366:
    case "DOTA_CM_CoinWagerToken":
      return EDotaClientMessages.DOTA_CM_CoinWagerToken;
    case 367:
    case "DOTA_CM_RankWager":
      return EDotaClientMessages.DOTA_CM_RankWager;
    case 368:
    case "DOTA_CM_DismissAllStatPopups":
      return EDotaClientMessages.DOTA_CM_DismissAllStatPopups;
    case 369:
    case "DOTA_CM_HelpTipSystemStateChanged":
      return EDotaClientMessages.DOTA_CM_HelpTipSystemStateChanged;
    case 370:
    case "DOTA_CM_ChannelRequiresHalt":
      return EDotaClientMessages.DOTA_CM_ChannelRequiresHalt;
    case 371:
    case "DOTA_CM_RequestBulkCombatLog":
      return EDotaClientMessages.DOTA_CM_RequestBulkCombatLog;
    case 372:
    case "DOTA_CM_AbilityDraftRequestAbility":
      return EDotaClientMessages.DOTA_CM_AbilityDraftRequestAbility;
    case 373:
    case "DOTA_CM_GuideSelectOption":
      return EDotaClientMessages.DOTA_CM_GuideSelectOption;
    case 374:
    case "DOTA_CM_GuideSelected":
      return EDotaClientMessages.DOTA_CM_GuideSelected;
    case 375:
    case "DOTA_CM_DamageReport":
      return EDotaClientMessages.DOTA_CM_DamageReport;
    case 376:
    case "DOTA_CM_SalutePlayer":
      return EDotaClientMessages.DOTA_CM_SalutePlayer;
    case 377:
    case "DOTA_CM_SprayWheel":
      return EDotaClientMessages.DOTA_CM_SprayWheel;
    case 378:
    case "DOTA_CM_TipAlert":
      return EDotaClientMessages.DOTA_CM_TipAlert;
    case 379:
    case "DOTA_CM_EmptyTeleportAlert":
      return EDotaClientMessages.DOTA_CM_EmptyTeleportAlert;
    case 380:
    case "DOTA_CM_RadarAlert":
      return EDotaClientMessages.DOTA_CM_RadarAlert;
    case 381:
    case "DOTA_CM_TalentTreeAlert":
      return EDotaClientMessages.DOTA_CM_TalentTreeAlert;
    case 382:
    case "DOTA_CM_SetCavernMapVariant":
      return EDotaClientMessages.DOTA_CM_SetCavernMapVariant;
    case 383:
    case "DOTA_CM_PauseGameOrder":
      return EDotaClientMessages.DOTA_CM_PauseGameOrder;
    case 384:
    case "DOTA_CM_VersusScene_PlayerBehavior":
      return EDotaClientMessages.DOTA_CM_VersusScene_PlayerBehavior;
    case 385:
    case "DOTA_CM_PlayerBounty":
      return EDotaClientMessages.DOTA_CM_PlayerBounty;
    case 386:
    case "DOTA_CM_PlayerBountyCancel":
      return EDotaClientMessages.DOTA_CM_PlayerBountyCancel;
    case 388:
    case "DOTA_CM_EmptyItemSlotAlert":
      return EDotaClientMessages.DOTA_CM_EmptyItemSlotAlert;
    case 389:
    case "DOTA_CM_AddOverwatchReportMarker":
      return EDotaClientMessages.DOTA_CM_AddOverwatchReportMarker;
    case 390:
    case "DOTA_CM_AghsStatusAlert":
      return EDotaClientMessages.DOTA_CM_AghsStatusAlert;
    case 391:
    case "DOTA_CM_PerfReport":
      return EDotaClientMessages.DOTA_CM_PerfReport;
    case 393:
    case "DOTA_CM_ContextualTips_Subscribe":
      return EDotaClientMessages.DOTA_CM_ContextualTips_Subscribe;
    case 394:
    case "DOTA_CM_ChatMessage":
      return EDotaClientMessages.DOTA_CM_ChatMessage;
    case 395:
    case "DOTA_CM_AddCommunicationsReportMarker":
      return EDotaClientMessages.DOTA_CM_AddCommunicationsReportMarker;
    case 396:
    case "DOTA_CM_AddCommunicationsBlockMarker":
      return EDotaClientMessages.DOTA_CM_AddCommunicationsBlockMarker;
    case 397:
    case "DOTA_CM_NeutralCampAlert":
      return EDotaClientMessages.DOTA_CM_NeutralCampAlert;
    case 398:
    case "DOTA_CM_DuelAccepted":
      return EDotaClientMessages.DOTA_CM_DuelAccepted;
    case 399:
    case "DOTA_CM_ChooseNeutralItem":
      return EDotaClientMessages.DOTA_CM_ChooseNeutralItem;
    case 800:
    case "DOTA_CM_PlayerDraftPick":
      return EDotaClientMessages.DOTA_CM_PlayerDraftPick;
    case 801:
    case "DOTA_CM_PlayerDraftSuggest":
      return EDotaClientMessages.DOTA_CM_PlayerDraftSuggest;
    case 802:
    case "DOTA_CM_PlayerDraftPreferRole":
      return EDotaClientMessages.DOTA_CM_PlayerDraftPreferRole;
    case 803:
    case "DOTA_CM_PlayerDraftPreferTeam":
      return EDotaClientMessages.DOTA_CM_PlayerDraftPreferTeam;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDotaClientMessages");
  }
}

export function eDotaClientMessagesToJSON(object: EDotaClientMessages): string {
  switch (object) {
    case EDotaClientMessages.DOTA_CM_MapLine:
      return "DOTA_CM_MapLine";
    case EDotaClientMessages.DOTA_CM_AspectRatio:
      return "DOTA_CM_AspectRatio";
    case EDotaClientMessages.DOTA_CM_MapPing:
      return "DOTA_CM_MapPing";
    case EDotaClientMessages.DOTA_CM_UnitsAutoAttack:
      return "DOTA_CM_UnitsAutoAttack";
    case EDotaClientMessages.DOTA_CM_SearchString:
      return "DOTA_CM_SearchString";
    case EDotaClientMessages.DOTA_CM_Pause:
      return "DOTA_CM_Pause";
    case EDotaClientMessages.DOTA_CM_ShopViewMode:
      return "DOTA_CM_ShopViewMode";
    case EDotaClientMessages.DOTA_CM_SetUnitShareFlag:
      return "DOTA_CM_SetUnitShareFlag";
    case EDotaClientMessages.DOTA_CM_SwapRequest:
      return "DOTA_CM_SwapRequest";
    case EDotaClientMessages.DOTA_CM_SwapAccept:
      return "DOTA_CM_SwapAccept";
    case EDotaClientMessages.DOTA_CM_WorldLine:
      return "DOTA_CM_WorldLine";
    case EDotaClientMessages.DOTA_CM_RequestGraphUpdate:
      return "DOTA_CM_RequestGraphUpdate";
    case EDotaClientMessages.DOTA_CM_ItemAlert:
      return "DOTA_CM_ItemAlert";
    case EDotaClientMessages.DOTA_CM_ChatWheel:
      return "DOTA_CM_ChatWheel";
    case EDotaClientMessages.DOTA_CM_SendStatPopup:
      return "DOTA_CM_SendStatPopup";
    case EDotaClientMessages.DOTA_CM_BeginLastHitChallenge:
      return "DOTA_CM_BeginLastHitChallenge";
    case EDotaClientMessages.DOTA_CM_UpdateQuickBuy:
      return "DOTA_CM_UpdateQuickBuy";
    case EDotaClientMessages.DOTA_CM_UpdateCoachListen:
      return "DOTA_CM_UpdateCoachListen";
    case EDotaClientMessages.DOTA_CM_CoachHUDPing:
      return "DOTA_CM_CoachHUDPing";
    case EDotaClientMessages.DOTA_CM_RecordVote:
      return "DOTA_CM_RecordVote";
    case EDotaClientMessages.DOTA_CM_UnitsAutoAttackAfterSpell:
      return "DOTA_CM_UnitsAutoAttackAfterSpell";
    case EDotaClientMessages.DOTA_CM_WillPurchaseAlert:
      return "DOTA_CM_WillPurchaseAlert";
    case EDotaClientMessages.DOTA_CM_PlayerShowCase:
      return "DOTA_CM_PlayerShowCase";
    case EDotaClientMessages.DOTA_CM_TeleportRequiresHalt:
      return "DOTA_CM_TeleportRequiresHalt";
    case EDotaClientMessages.DOTA_CM_CameraZoomAmount:
      return "DOTA_CM_CameraZoomAmount";
    case EDotaClientMessages.DOTA_CM_BroadcasterUsingCamerman:
      return "DOTA_CM_BroadcasterUsingCamerman";
    case EDotaClientMessages.DOTA_CM_BroadcasterUsingAssistedCameraOperator:
      return "DOTA_CM_BroadcasterUsingAssistedCameraOperator";
    case EDotaClientMessages.DOTA_CM_EnemyItemAlert:
      return "DOTA_CM_EnemyItemAlert";
    case EDotaClientMessages.DOTA_CM_FreeInventory:
      return "DOTA_CM_FreeInventory";
    case EDotaClientMessages.DOTA_CM_BuyBackStateAlert:
      return "DOTA_CM_BuyBackStateAlert";
    case EDotaClientMessages.DOTA_CM_QuickBuyAlert:
      return "DOTA_CM_QuickBuyAlert";
    case EDotaClientMessages.DOTA_CM_HeroStatueLike:
      return "DOTA_CM_HeroStatueLike";
    case EDotaClientMessages.DOTA_CM_ModifierAlert:
      return "DOTA_CM_ModifierAlert";
    case EDotaClientMessages.DOTA_CM_TeamShowcaseEditor:
      return "DOTA_CM_TeamShowcaseEditor";
    case EDotaClientMessages.DOTA_CM_HPManaAlert:
      return "DOTA_CM_HPManaAlert";
    case EDotaClientMessages.DOTA_CM_GlyphAlert:
      return "DOTA_CM_GlyphAlert";
    case EDotaClientMessages.DOTA_CM_TeamShowcaseClientData:
      return "DOTA_CM_TeamShowcaseClientData";
    case EDotaClientMessages.DOTA_CM_PlayTeamShowcase:
      return "DOTA_CM_PlayTeamShowcase";
    case EDotaClientMessages.DOTA_CM_EventCNY2015Cmd:
      return "DOTA_CM_EventCNY2015Cmd";
    case EDotaClientMessages.DOTA_CM_FillEmptySlotsWithBots:
      return "DOTA_CM_FillEmptySlotsWithBots";
    case EDotaClientMessages.DOTA_CM_DemoHero:
      return "DOTA_CM_DemoHero";
    case EDotaClientMessages.DOTA_CM_AbilityLearnModeToggled:
      return "DOTA_CM_AbilityLearnModeToggled";
    case EDotaClientMessages.DOTA_CM_AbilityStartUse:
      return "DOTA_CM_AbilityStartUse";
    case EDotaClientMessages.DOTA_CM_ChallengeSelect:
      return "DOTA_CM_ChallengeSelect";
    case EDotaClientMessages.DOTA_CM_ChallengeReroll:
      return "DOTA_CM_ChallengeReroll";
    case EDotaClientMessages.DOTA_CM_ClickedBuff:
      return "DOTA_CM_ClickedBuff";
    case EDotaClientMessages.DOTA_CM_CoinWager:
      return "DOTA_CM_CoinWager";
    case EDotaClientMessages.DOTA_CM_ExecuteOrders:
      return "DOTA_CM_ExecuteOrders";
    case EDotaClientMessages.DOTA_CM_XPAlert:
      return "DOTA_CM_XPAlert";
    case EDotaClientMessages.DOTA_CM_EventPointsTip:
      return "DOTA_CM_EventPointsTip";
    case EDotaClientMessages.DOTA_CM_KillMyHero:
      return "DOTA_CM_KillMyHero";
    case EDotaClientMessages.DOTA_CM_QuestStatus:
      return "DOTA_CM_QuestStatus";
    case EDotaClientMessages.DOTA_CM_ToggleAutoattack:
      return "DOTA_CM_ToggleAutoattack";
    case EDotaClientMessages.DOTA_CM_SpecialAbility:
      return "DOTA_CM_SpecialAbility";
    case EDotaClientMessages.DOTA_CM_KillcamDamageTaken:
      return "DOTA_CM_KillcamDamageTaken";
    case EDotaClientMessages.DOTA_CM_SetEnemyStartingPosition:
      return "DOTA_CM_SetEnemyStartingPosition";
    case EDotaClientMessages.DOTA_CM_SetDesiredWardPlacement:
      return "DOTA_CM_SetDesiredWardPlacement";
    case EDotaClientMessages.DOTA_CM_RollDice:
      return "DOTA_CM_RollDice";
    case EDotaClientMessages.DOTA_CM_FlipCoin:
      return "DOTA_CM_FlipCoin";
    case EDotaClientMessages.DOTA_CM_RequestItemSuggestions:
      return "DOTA_CM_RequestItemSuggestions";
    case EDotaClientMessages.DOTA_CM_MakeTeamCaptain:
      return "DOTA_CM_MakeTeamCaptain";
    case EDotaClientMessages.DOTA_CM_CoinWagerToken:
      return "DOTA_CM_CoinWagerToken";
    case EDotaClientMessages.DOTA_CM_RankWager:
      return "DOTA_CM_RankWager";
    case EDotaClientMessages.DOTA_CM_DismissAllStatPopups:
      return "DOTA_CM_DismissAllStatPopups";
    case EDotaClientMessages.DOTA_CM_HelpTipSystemStateChanged:
      return "DOTA_CM_HelpTipSystemStateChanged";
    case EDotaClientMessages.DOTA_CM_ChannelRequiresHalt:
      return "DOTA_CM_ChannelRequiresHalt";
    case EDotaClientMessages.DOTA_CM_RequestBulkCombatLog:
      return "DOTA_CM_RequestBulkCombatLog";
    case EDotaClientMessages.DOTA_CM_AbilityDraftRequestAbility:
      return "DOTA_CM_AbilityDraftRequestAbility";
    case EDotaClientMessages.DOTA_CM_GuideSelectOption:
      return "DOTA_CM_GuideSelectOption";
    case EDotaClientMessages.DOTA_CM_GuideSelected:
      return "DOTA_CM_GuideSelected";
    case EDotaClientMessages.DOTA_CM_DamageReport:
      return "DOTA_CM_DamageReport";
    case EDotaClientMessages.DOTA_CM_SalutePlayer:
      return "DOTA_CM_SalutePlayer";
    case EDotaClientMessages.DOTA_CM_SprayWheel:
      return "DOTA_CM_SprayWheel";
    case EDotaClientMessages.DOTA_CM_TipAlert:
      return "DOTA_CM_TipAlert";
    case EDotaClientMessages.DOTA_CM_EmptyTeleportAlert:
      return "DOTA_CM_EmptyTeleportAlert";
    case EDotaClientMessages.DOTA_CM_RadarAlert:
      return "DOTA_CM_RadarAlert";
    case EDotaClientMessages.DOTA_CM_TalentTreeAlert:
      return "DOTA_CM_TalentTreeAlert";
    case EDotaClientMessages.DOTA_CM_SetCavernMapVariant:
      return "DOTA_CM_SetCavernMapVariant";
    case EDotaClientMessages.DOTA_CM_PauseGameOrder:
      return "DOTA_CM_PauseGameOrder";
    case EDotaClientMessages.DOTA_CM_VersusScene_PlayerBehavior:
      return "DOTA_CM_VersusScene_PlayerBehavior";
    case EDotaClientMessages.DOTA_CM_PlayerBounty:
      return "DOTA_CM_PlayerBounty";
    case EDotaClientMessages.DOTA_CM_PlayerBountyCancel:
      return "DOTA_CM_PlayerBountyCancel";
    case EDotaClientMessages.DOTA_CM_EmptyItemSlotAlert:
      return "DOTA_CM_EmptyItemSlotAlert";
    case EDotaClientMessages.DOTA_CM_AddOverwatchReportMarker:
      return "DOTA_CM_AddOverwatchReportMarker";
    case EDotaClientMessages.DOTA_CM_AghsStatusAlert:
      return "DOTA_CM_AghsStatusAlert";
    case EDotaClientMessages.DOTA_CM_PerfReport:
      return "DOTA_CM_PerfReport";
    case EDotaClientMessages.DOTA_CM_ContextualTips_Subscribe:
      return "DOTA_CM_ContextualTips_Subscribe";
    case EDotaClientMessages.DOTA_CM_ChatMessage:
      return "DOTA_CM_ChatMessage";
    case EDotaClientMessages.DOTA_CM_AddCommunicationsReportMarker:
      return "DOTA_CM_AddCommunicationsReportMarker";
    case EDotaClientMessages.DOTA_CM_AddCommunicationsBlockMarker:
      return "DOTA_CM_AddCommunicationsBlockMarker";
    case EDotaClientMessages.DOTA_CM_NeutralCampAlert:
      return "DOTA_CM_NeutralCampAlert";
    case EDotaClientMessages.DOTA_CM_DuelAccepted:
      return "DOTA_CM_DuelAccepted";
    case EDotaClientMessages.DOTA_CM_ChooseNeutralItem:
      return "DOTA_CM_ChooseNeutralItem";
    case EDotaClientMessages.DOTA_CM_PlayerDraftPick:
      return "DOTA_CM_PlayerDraftPick";
    case EDotaClientMessages.DOTA_CM_PlayerDraftSuggest:
      return "DOTA_CM_PlayerDraftSuggest";
    case EDotaClientMessages.DOTA_CM_PlayerDraftPreferRole:
      return "DOTA_CM_PlayerDraftPreferRole";
    case EDotaClientMessages.DOTA_CM_PlayerDraftPreferTeam:
      return "DOTA_CM_PlayerDraftPreferTeam";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDotaClientMessages");
  }
}

export interface CDOTAClientMsgMapPing {
  locationPing: CDOTAMsgLocationPing | undefined;
}

export interface CDOTAClientMsgItemAlert {
  itemAlert: CDOTAMsgItemAlert | undefined;
}

export interface CDOTAClientMsgEnemyItemAlert {
  itemEntindex: number;
  runeType: number;
  itemLevel: number;
  primaryCharges: number;
  secondaryCharges: number;
}

export interface CDOTAClientMsgModifierAlert {
  buffInternalIndex: number;
  targetEntindex: number;
}

export interface CDOTAClientMsgClickedBuff {
  buffInternalIndex: number;
  targetEntindex: number;
}

export interface CDOTAClientMsgHPManaAlert {
  targetEntindex: number;
  showRawValues: boolean;
}

export interface CDOTAClientMsgNeutralCampAlert {
  spawnerEntindex: number;
  unitEntindex: number;
  stackRequest: boolean;
}

export interface CDOTAClientMsgGlyphAlert {
  negative: boolean;
}

export interface CDOTAClientMsgRadarAlert {
  negative: boolean;
}

export interface CDOTAClientMsgMapLine {
  mapline: CDOTAMsgMapLine | undefined;
}

export interface CDOTAClientMsgAspectRatio {
  ratio: number;
}

export interface CDOTAClientMsgUnitsAutoAttackMode {
  mode: CDOTAClientMsgUnitsAutoAttackMode_EMode;
  unitType: CDOTAClientMsgUnitsAutoAttackMode_EUnitType;
}

export enum CDOTAClientMsgUnitsAutoAttackMode_EMode {
  INVALID = -1,
  NEVER = 0,
  AFTER_SPELLCAST = 1,
  ALWAYS = 2,
}

export function cDOTAClientMsgUnitsAutoAttackMode_EModeFromJSON(object: any): CDOTAClientMsgUnitsAutoAttackMode_EMode {
  switch (object) {
    case -1:
    case "INVALID":
      return CDOTAClientMsgUnitsAutoAttackMode_EMode.INVALID;
    case 0:
    case "NEVER":
      return CDOTAClientMsgUnitsAutoAttackMode_EMode.NEVER;
    case 1:
    case "AFTER_SPELLCAST":
      return CDOTAClientMsgUnitsAutoAttackMode_EMode.AFTER_SPELLCAST;
    case 2:
    case "ALWAYS":
      return CDOTAClientMsgUnitsAutoAttackMode_EMode.ALWAYS;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CDOTAClientMsgUnitsAutoAttackMode_EMode",
      );
  }
}

export function cDOTAClientMsgUnitsAutoAttackMode_EModeToJSON(object: CDOTAClientMsgUnitsAutoAttackMode_EMode): string {
  switch (object) {
    case CDOTAClientMsgUnitsAutoAttackMode_EMode.INVALID:
      return "INVALID";
    case CDOTAClientMsgUnitsAutoAttackMode_EMode.NEVER:
      return "NEVER";
    case CDOTAClientMsgUnitsAutoAttackMode_EMode.AFTER_SPELLCAST:
      return "AFTER_SPELLCAST";
    case CDOTAClientMsgUnitsAutoAttackMode_EMode.ALWAYS:
      return "ALWAYS";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CDOTAClientMsgUnitsAutoAttackMode_EMode",
      );
  }
}

export enum CDOTAClientMsgUnitsAutoAttackMode_EUnitType {
  NORMAL = 0,
  SUMMONED = 1,
}

export function cDOTAClientMsgUnitsAutoAttackMode_EUnitTypeFromJSON(
  object: any,
): CDOTAClientMsgUnitsAutoAttackMode_EUnitType {
  switch (object) {
    case 0:
    case "NORMAL":
      return CDOTAClientMsgUnitsAutoAttackMode_EUnitType.NORMAL;
    case 1:
    case "SUMMONED":
      return CDOTAClientMsgUnitsAutoAttackMode_EUnitType.SUMMONED;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CDOTAClientMsgUnitsAutoAttackMode_EUnitType",
      );
  }
}

export function cDOTAClientMsgUnitsAutoAttackMode_EUnitTypeToJSON(
  object: CDOTAClientMsgUnitsAutoAttackMode_EUnitType,
): string {
  switch (object) {
    case CDOTAClientMsgUnitsAutoAttackMode_EUnitType.NORMAL:
      return "NORMAL";
    case CDOTAClientMsgUnitsAutoAttackMode_EUnitType.SUMMONED:
      return "SUMMONED";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CDOTAClientMsgUnitsAutoAttackMode_EUnitType",
      );
  }
}

export interface CDOTAClientMsgUnitsAutoAttackAfterSpell {
  enabled: boolean;
}

export interface CDOTAClientMsgTeleportRequiresHalt {
  enabled: boolean;
}

export interface CDOTAClientMsgChannelRequiresHalt {
  enabled: boolean;
}

export interface CDOTAClientMsgSearchString {
  search: string;
}

export interface CDOTAClientMsgPause {
}

export interface CDOTAClientMsgShopViewMode {
  mode: number;
}

export interface CDOTAClientMsgSetUnitShareFlag {
  playerId: number;
  flag: number;
  state: boolean;
}

export interface CDOTAClientMsgSwapRequest {
  playerId: number;
}

export interface CDOTAClientMsgSwapAccept {
  playerId: number;
}

export interface CDOTAClientMsgWorldLine {
  worldline: CDOTAMsgWorldLine | undefined;
}

export interface CDOTAClientMsgRequestGraphUpdate {
}

export interface CDOTAClientMsgChatWheel {
  chatMessageId: number;
  paramHeroId: number;
  emoticonId: number;
}

export interface CDOTAClientMsgSendStatPopup {
  statpopup: CDOTAMsgSendStatPopup | undefined;
}

export interface CDOTAClientMsgDismissAllStatPopups {
  dismissallmsg: CDOTAMsgDismissAllStatPopups | undefined;
}

export interface CDOTAClientMsgBeginLastHitChallenge {
  chosenLane: number;
  helperEnabled: boolean;
}

export interface CDOTAClientMsgUpdateQuickBuyItem {
  itemAbilityId: number;
  purchasable: boolean;
}

export interface CDOTAClientMsgUpdateQuickBuy {
  items: CDOTAClientMsgUpdateQuickBuyItem[];
}

export interface CDOTAClientMsgRecordVote {
  choiceIndex: number;
}

export interface CDOTAClientMsgWillPurchaseAlert {
  itemAbilityId: number;
  goldRemaining: number;
  suggestionPlayerId: number;
}

export interface CDOTAClientMsgBuyBackStateAlert {
}

export interface CDOTAClientMsgQuickBuyAlert {
  itemAbilityId: number;
  goldCost: number;
  itemCooldownSeconds: number;
  showBuyback: boolean;
}

export interface CDOTAClientMsgPlayerShowCase {
  showcase: boolean;
}

export interface CDOTAClientMsgCameraZoomAmount {
  zoomAmount: number;
}

export interface CDOTAClientMsgBroadcasterUsingCameraman {
  cameraman: boolean;
}

export interface CDOTAClientMsgBroadcasterUsingAssistedCameraOperator {
  enabled: boolean;
}

export interface CDOTAClientMsgFillEmptySlotsWithBots {
  fillwithbots: boolean;
}

export interface CDOTAClientMsgHeroStatueLike {
  ownerPlayerId: number;
}

export interface CDOTAClientMsgEventCNY2015Cmd {
  data: Buffer;
}

export interface CDOTAClientMsgDemoHero {
  heroId: number;
  heroIdToSpawn: number;
  itemDefs: number[];
  itemIds: string[];
  styleIndex: number;
  keepExistingDemohero: boolean;
}

export interface CDOTAClientMsgChallengeSelect {
  eventId: number;
  slotId: number;
  sequenceId: number;
}

export interface CDOTAClientMsgChallengeReroll {
  eventId: EEvent;
  slotId: number;
  sequenceId: number;
  heroId: number;
}

export interface CDOTAClientMsgCoinWager {
  wagerAmount: number;
}

export interface CDOTAClientMsgCoinWagerToken {
  wagerTokenItemId: string;
}

export interface CDOTAClientMsgRankWager {
  announceWager: boolean;
}

export interface CDOTAClientMsgPlayerBounty {
  playerId: number;
}

export interface CDOTAClientMsgEventPointsTip {
  recipientPlayerId: number;
}

export interface CDOTAClientMsgExecuteOrders {
  orders: CDOTAMsgUnitOrder[];
}

export interface CDOTAClientMsgXPAlert {
  targetEntindex: number;
  damageTaken: number;
}

export interface CDOTAClientMsgTalentTreeAlert {
  targetEntindex: number;
  abilityId: number;
  slot: number;
  learned: boolean;
}

export interface CDOTAClientMsgKillcamDamageTaken {
  targetEntindex: number;
  damageTaken: number;
  itemType: number;
  itemAbilityId: number;
  heroName: string;
  damageColor: string;
}

export interface CDOTAClientMsgKillMyHero {
}

export interface CDOTAClientMsgQuestStatus {
  questId: number;
  challengeId: number;
  progress: number;
  goal: number;
  query: number;
  failGametime: number;
  itemAbilityId: number;
}

export interface CDOTAClientMsgToggleAutoattack {
  mode: number;
  showMessage: boolean;
}

export interface CDOTAClientMsgSpecialAbility {
  abilityIndex: number;
  targetEntindex: number;
}

export interface CDOTAClientMsgSetEnemyStartingPosition {
  enemyPlayerId: number;
  enemyStartingPosition: number;
}

export interface CDOTAClientMsgSetDesiredWardPlacement {
  wardIndex: number;
  wardX: number;
  wardY: number;
}

export interface CDOTAClientMsgRollDice {
  channelType: number;
  rollMin: number;
  rollMax: number;
}

export interface CDOTAClientMsgFlipCoin {
  channelType: number;
}

export interface CDOTAClientMsgRequestItemSuggestions {
}

export interface CDOTAClientMsgMakeTeamCaptain {
  playerId: number;
}

export interface CDOTAClientMsgHelpTipSystemStateChanged {
  tipDisplayed: boolean;
}

export interface CDOTAClientMsgRequestBulkCombatLog {
  gameTime: number;
  duration: number;
  recentPlayerDeath: boolean;
  playerId: number;
}

export interface CDOTAClientMsgAbilityDraftRequestAbility {
  requestedAbilityId: number;
  ctrlIsDown: boolean;
}

export interface CDOTAClientMsgGuideSelectOption {
  option: number;
  forceRecalculate: boolean;
}

export interface CDOTAClientMsgGuideSelected {
  guideWorkshopId: string;
  isPlusGuide: boolean;
}

export interface CDOTAClientMsgDamageReport {
  targetHeroId: number;
  sourceHeroId: number;
  damageAmount: number;
  broadcast: boolean;
}

export interface CDOTAClientMsgSalutePlayer {
  targetPlayerId: number;
  eventId: number;
}

export interface CDOTAClientMsgTipAlert {
  tipText: string;
}

export interface CDOTAClientMsgEmptyTeleportAlert {
  targetEntindex: number;
}

export interface CDOTAClientMsgSetCavernMapVariant {
  mapVariant: number;
}

export interface CDOTAClientMsgPauseGameOrder {
  orderId: number;
  data: number;
}

export interface CDOTAClientMsgVersusScenePlayerBehavior {
  behavior: EDOTAVersusScenePlayerBehavior;
  playActivity: VersusScenePlayActivity | undefined;
  chatWheel: VersusSceneChatWheel | undefined;
  playbackRate: VersusScenePlaybackRate | undefined;
}

export interface CDOTAClientMsgEmptyItemSlotAlert {
  targetEntindex: number;
  slotIndex: number;
}

export interface CDOTAClientMsgAddOverwatchReportMarker {
  targetPlayerId: number;
  reason: EOverwatchReportReason;
  secondsAgo: number;
}

export interface CDOTAClientMsgAddCommunicationsReportMarker {
  targetPlayerId: number;
}

export interface CDOTAClientMsgAddCommunicationsBlockMarker {
  targetPlayerId: number;
}

export interface CDOTAClientMsgAghsStatusAlert {
  sourcePlayerId: number;
  targetPlayerId: number;
  targetEntindex: number;
  alertType: number;
}

export interface CDOTAClientMsgPerfReport {
  averageFrameTime: number;
  maxFrameTime: number;
  averageComputeTime: number;
  maxComputeTime: number;
  averageClientTickTime: number;
  maxClientTickTime: number;
  averageClientSimulateTime: number;
  maxClientSimulateTime: number;
  averageOutputTime: number;
  maxOutputTime: number;
  averageWaitForRenderingToCompleteTime: number;
  maxWaitForRenderingToCompleteTime: number;
  averageSwapTime: number;
  maxSwapTime: number;
  averageFrameUpdateTime: number;
  maxFrameUpdateTime: number;
  averageIdleTime: number;
  maxIdleTime: number;
  averageInputProcessingTime: number;
  maxInputProcessingTime: number;
}

export interface CDOTAClientMsgContextualTipsSubscribeEntry {
  unsubscribe: boolean;
  tipId: number;
  priorDisplayCount: number;
  variantsSeen: number[];
}

export interface CDOTAClientMsgContextualTipsSubscribe {
  tips: CDOTAClientMsgContextualTipsSubscribeEntry[];
}

export interface CDOTAClientMsgChatMessage {
  channelType: number;
  messageText: string;
}

export interface CDOTAClientMsgDuelAccepted {
  challengerPlayerId: number;
  accepterPlayerId: number;
}

export interface CDOTAClientMsgChooseNeutralItem {
  neutralItemIndex: number;
  targetEntindex: number;
  slotIndex: number;
}

export interface CDOTAClientMsgPlayerDraftPick {
  playerId: number;
}

export interface CDOTAClientMsgPlayerDraftSuggest {
  playerId: number;
}

export interface CDOTAClientMsgPlayerDraftPreferRole {
  roleIdx: number;
  desired: boolean;
}

export interface CDOTAClientMsgPlayerDraftPreferTeam {
  team: number;
}

function createBaseCDOTAClientMsgMapPing(): CDOTAClientMsgMapPing {
  return { locationPing: undefined };
}

export const CDOTAClientMsgMapPing = {
  encode(message: CDOTAClientMsgMapPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.locationPing !== undefined) {
      CDOTAMsgLocationPing.encode(message.locationPing, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgMapPing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgMapPing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.locationPing = CDOTAMsgLocationPing.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgMapPing {
    return {
      locationPing: isSet(object.locationPing) ? CDOTAMsgLocationPing.fromJSON(object.locationPing) : undefined,
    };
  },

  toJSON(message: CDOTAClientMsgMapPing): unknown {
    const obj: any = {};
    message.locationPing !== undefined &&
      (obj.locationPing = message.locationPing ? CDOTAMsgLocationPing.toJSON(message.locationPing) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgMapPing>): CDOTAClientMsgMapPing {
    return CDOTAClientMsgMapPing.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgMapPing>): CDOTAClientMsgMapPing {
    const message = createBaseCDOTAClientMsgMapPing();
    message.locationPing = (object.locationPing !== undefined && object.locationPing !== null)
      ? CDOTAMsgLocationPing.fromPartial(object.locationPing)
      : undefined;
    return message;
  },
};

function createBaseCDOTAClientMsgItemAlert(): CDOTAClientMsgItemAlert {
  return { itemAlert: undefined };
}

export const CDOTAClientMsgItemAlert = {
  encode(message: CDOTAClientMsgItemAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemAlert !== undefined) {
      CDOTAMsgItemAlert.encode(message.itemAlert, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgItemAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgItemAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.itemAlert = CDOTAMsgItemAlert.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgItemAlert {
    return { itemAlert: isSet(object.itemAlert) ? CDOTAMsgItemAlert.fromJSON(object.itemAlert) : undefined };
  },

  toJSON(message: CDOTAClientMsgItemAlert): unknown {
    const obj: any = {};
    message.itemAlert !== undefined &&
      (obj.itemAlert = message.itemAlert ? CDOTAMsgItemAlert.toJSON(message.itemAlert) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgItemAlert>): CDOTAClientMsgItemAlert {
    return CDOTAClientMsgItemAlert.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgItemAlert>): CDOTAClientMsgItemAlert {
    const message = createBaseCDOTAClientMsgItemAlert();
    message.itemAlert = (object.itemAlert !== undefined && object.itemAlert !== null)
      ? CDOTAMsgItemAlert.fromPartial(object.itemAlert)
      : undefined;
    return message;
  },
};

function createBaseCDOTAClientMsgEnemyItemAlert(): CDOTAClientMsgEnemyItemAlert {
  return { itemEntindex: 0, runeType: 0, itemLevel: 0, primaryCharges: 0, secondaryCharges: 0 };
}

export const CDOTAClientMsgEnemyItemAlert = {
  encode(message: CDOTAClientMsgEnemyItemAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemEntindex !== 0) {
      writer.uint32(8).int32(message.itemEntindex);
    }
    if (message.runeType !== 0) {
      writer.uint32(16).int32(message.runeType);
    }
    if (message.itemLevel !== 0) {
      writer.uint32(24).int32(message.itemLevel);
    }
    if (message.primaryCharges !== 0) {
      writer.uint32(32).int32(message.primaryCharges);
    }
    if (message.secondaryCharges !== 0) {
      writer.uint32(40).int32(message.secondaryCharges);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgEnemyItemAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgEnemyItemAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemEntindex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.runeType = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.itemLevel = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.primaryCharges = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.secondaryCharges = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgEnemyItemAlert {
    return {
      itemEntindex: isSet(object.itemEntindex) ? Number(object.itemEntindex) : 0,
      runeType: isSet(object.runeType) ? Number(object.runeType) : 0,
      itemLevel: isSet(object.itemLevel) ? Number(object.itemLevel) : 0,
      primaryCharges: isSet(object.primaryCharges) ? Number(object.primaryCharges) : 0,
      secondaryCharges: isSet(object.secondaryCharges) ? Number(object.secondaryCharges) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgEnemyItemAlert): unknown {
    const obj: any = {};
    message.itemEntindex !== undefined && (obj.itemEntindex = Math.round(message.itemEntindex));
    message.runeType !== undefined && (obj.runeType = Math.round(message.runeType));
    message.itemLevel !== undefined && (obj.itemLevel = Math.round(message.itemLevel));
    message.primaryCharges !== undefined && (obj.primaryCharges = Math.round(message.primaryCharges));
    message.secondaryCharges !== undefined && (obj.secondaryCharges = Math.round(message.secondaryCharges));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgEnemyItemAlert>): CDOTAClientMsgEnemyItemAlert {
    return CDOTAClientMsgEnemyItemAlert.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgEnemyItemAlert>): CDOTAClientMsgEnemyItemAlert {
    const message = createBaseCDOTAClientMsgEnemyItemAlert();
    message.itemEntindex = object.itemEntindex ?? 0;
    message.runeType = object.runeType ?? 0;
    message.itemLevel = object.itemLevel ?? 0;
    message.primaryCharges = object.primaryCharges ?? 0;
    message.secondaryCharges = object.secondaryCharges ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgModifierAlert(): CDOTAClientMsgModifierAlert {
  return { buffInternalIndex: 0, targetEntindex: 0 };
}

export const CDOTAClientMsgModifierAlert = {
  encode(message: CDOTAClientMsgModifierAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.buffInternalIndex !== 0) {
      writer.uint32(8).int32(message.buffInternalIndex);
    }
    if (message.targetEntindex !== 0) {
      writer.uint32(16).int32(message.targetEntindex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgModifierAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgModifierAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.buffInternalIndex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetEntindex = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgModifierAlert {
    return {
      buffInternalIndex: isSet(object.buffInternalIndex) ? Number(object.buffInternalIndex) : 0,
      targetEntindex: isSet(object.targetEntindex) ? Number(object.targetEntindex) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgModifierAlert): unknown {
    const obj: any = {};
    message.buffInternalIndex !== undefined && (obj.buffInternalIndex = Math.round(message.buffInternalIndex));
    message.targetEntindex !== undefined && (obj.targetEntindex = Math.round(message.targetEntindex));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgModifierAlert>): CDOTAClientMsgModifierAlert {
    return CDOTAClientMsgModifierAlert.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgModifierAlert>): CDOTAClientMsgModifierAlert {
    const message = createBaseCDOTAClientMsgModifierAlert();
    message.buffInternalIndex = object.buffInternalIndex ?? 0;
    message.targetEntindex = object.targetEntindex ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgClickedBuff(): CDOTAClientMsgClickedBuff {
  return { buffInternalIndex: 0, targetEntindex: 0 };
}

export const CDOTAClientMsgClickedBuff = {
  encode(message: CDOTAClientMsgClickedBuff, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.buffInternalIndex !== 0) {
      writer.uint32(8).int32(message.buffInternalIndex);
    }
    if (message.targetEntindex !== 0) {
      writer.uint32(16).int32(message.targetEntindex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgClickedBuff {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgClickedBuff();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.buffInternalIndex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetEntindex = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgClickedBuff {
    return {
      buffInternalIndex: isSet(object.buffInternalIndex) ? Number(object.buffInternalIndex) : 0,
      targetEntindex: isSet(object.targetEntindex) ? Number(object.targetEntindex) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgClickedBuff): unknown {
    const obj: any = {};
    message.buffInternalIndex !== undefined && (obj.buffInternalIndex = Math.round(message.buffInternalIndex));
    message.targetEntindex !== undefined && (obj.targetEntindex = Math.round(message.targetEntindex));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgClickedBuff>): CDOTAClientMsgClickedBuff {
    return CDOTAClientMsgClickedBuff.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgClickedBuff>): CDOTAClientMsgClickedBuff {
    const message = createBaseCDOTAClientMsgClickedBuff();
    message.buffInternalIndex = object.buffInternalIndex ?? 0;
    message.targetEntindex = object.targetEntindex ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgHPManaAlert(): CDOTAClientMsgHPManaAlert {
  return { targetEntindex: 0, showRawValues: false };
}

export const CDOTAClientMsgHPManaAlert = {
  encode(message: CDOTAClientMsgHPManaAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetEntindex !== 0) {
      writer.uint32(8).int32(message.targetEntindex);
    }
    if (message.showRawValues === true) {
      writer.uint32(16).bool(message.showRawValues);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgHPManaAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgHPManaAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.targetEntindex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.showRawValues = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgHPManaAlert {
    return {
      targetEntindex: isSet(object.targetEntindex) ? Number(object.targetEntindex) : 0,
      showRawValues: isSet(object.showRawValues) ? Boolean(object.showRawValues) : false,
    };
  },

  toJSON(message: CDOTAClientMsgHPManaAlert): unknown {
    const obj: any = {};
    message.targetEntindex !== undefined && (obj.targetEntindex = Math.round(message.targetEntindex));
    message.showRawValues !== undefined && (obj.showRawValues = message.showRawValues);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgHPManaAlert>): CDOTAClientMsgHPManaAlert {
    return CDOTAClientMsgHPManaAlert.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgHPManaAlert>): CDOTAClientMsgHPManaAlert {
    const message = createBaseCDOTAClientMsgHPManaAlert();
    message.targetEntindex = object.targetEntindex ?? 0;
    message.showRawValues = object.showRawValues ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgNeutralCampAlert(): CDOTAClientMsgNeutralCampAlert {
  return { spawnerEntindex: 0, unitEntindex: 0, stackRequest: false };
}

export const CDOTAClientMsgNeutralCampAlert = {
  encode(message: CDOTAClientMsgNeutralCampAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spawnerEntindex !== 0) {
      writer.uint32(8).int32(message.spawnerEntindex);
    }
    if (message.unitEntindex !== 0) {
      writer.uint32(16).int32(message.unitEntindex);
    }
    if (message.stackRequest === true) {
      writer.uint32(24).bool(message.stackRequest);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgNeutralCampAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgNeutralCampAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.spawnerEntindex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.unitEntindex = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.stackRequest = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgNeutralCampAlert {
    return {
      spawnerEntindex: isSet(object.spawnerEntindex) ? Number(object.spawnerEntindex) : 0,
      unitEntindex: isSet(object.unitEntindex) ? Number(object.unitEntindex) : 0,
      stackRequest: isSet(object.stackRequest) ? Boolean(object.stackRequest) : false,
    };
  },

  toJSON(message: CDOTAClientMsgNeutralCampAlert): unknown {
    const obj: any = {};
    message.spawnerEntindex !== undefined && (obj.spawnerEntindex = Math.round(message.spawnerEntindex));
    message.unitEntindex !== undefined && (obj.unitEntindex = Math.round(message.unitEntindex));
    message.stackRequest !== undefined && (obj.stackRequest = message.stackRequest);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgNeutralCampAlert>): CDOTAClientMsgNeutralCampAlert {
    return CDOTAClientMsgNeutralCampAlert.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgNeutralCampAlert>): CDOTAClientMsgNeutralCampAlert {
    const message = createBaseCDOTAClientMsgNeutralCampAlert();
    message.spawnerEntindex = object.spawnerEntindex ?? 0;
    message.unitEntindex = object.unitEntindex ?? 0;
    message.stackRequest = object.stackRequest ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgGlyphAlert(): CDOTAClientMsgGlyphAlert {
  return { negative: false };
}

export const CDOTAClientMsgGlyphAlert = {
  encode(message: CDOTAClientMsgGlyphAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.negative === true) {
      writer.uint32(8).bool(message.negative);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgGlyphAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgGlyphAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.negative = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgGlyphAlert {
    return { negative: isSet(object.negative) ? Boolean(object.negative) : false };
  },

  toJSON(message: CDOTAClientMsgGlyphAlert): unknown {
    const obj: any = {};
    message.negative !== undefined && (obj.negative = message.negative);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgGlyphAlert>): CDOTAClientMsgGlyphAlert {
    return CDOTAClientMsgGlyphAlert.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgGlyphAlert>): CDOTAClientMsgGlyphAlert {
    const message = createBaseCDOTAClientMsgGlyphAlert();
    message.negative = object.negative ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgRadarAlert(): CDOTAClientMsgRadarAlert {
  return { negative: false };
}

export const CDOTAClientMsgRadarAlert = {
  encode(message: CDOTAClientMsgRadarAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.negative === true) {
      writer.uint32(8).bool(message.negative);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgRadarAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgRadarAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.negative = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgRadarAlert {
    return { negative: isSet(object.negative) ? Boolean(object.negative) : false };
  },

  toJSON(message: CDOTAClientMsgRadarAlert): unknown {
    const obj: any = {};
    message.negative !== undefined && (obj.negative = message.negative);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgRadarAlert>): CDOTAClientMsgRadarAlert {
    return CDOTAClientMsgRadarAlert.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgRadarAlert>): CDOTAClientMsgRadarAlert {
    const message = createBaseCDOTAClientMsgRadarAlert();
    message.negative = object.negative ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgMapLine(): CDOTAClientMsgMapLine {
  return { mapline: undefined };
}

export const CDOTAClientMsgMapLine = {
  encode(message: CDOTAClientMsgMapLine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapline !== undefined) {
      CDOTAMsgMapLine.encode(message.mapline, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgMapLine {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgMapLine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.mapline = CDOTAMsgMapLine.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgMapLine {
    return { mapline: isSet(object.mapline) ? CDOTAMsgMapLine.fromJSON(object.mapline) : undefined };
  },

  toJSON(message: CDOTAClientMsgMapLine): unknown {
    const obj: any = {};
    message.mapline !== undefined &&
      (obj.mapline = message.mapline ? CDOTAMsgMapLine.toJSON(message.mapline) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgMapLine>): CDOTAClientMsgMapLine {
    return CDOTAClientMsgMapLine.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgMapLine>): CDOTAClientMsgMapLine {
    const message = createBaseCDOTAClientMsgMapLine();
    message.mapline = (object.mapline !== undefined && object.mapline !== null)
      ? CDOTAMsgMapLine.fromPartial(object.mapline)
      : undefined;
    return message;
  },
};

function createBaseCDOTAClientMsgAspectRatio(): CDOTAClientMsgAspectRatio {
  return { ratio: 0 };
}

export const CDOTAClientMsgAspectRatio = {
  encode(message: CDOTAClientMsgAspectRatio, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ratio !== 0) {
      writer.uint32(13).float(message.ratio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgAspectRatio {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgAspectRatio();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.ratio = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgAspectRatio {
    return { ratio: isSet(object.ratio) ? Number(object.ratio) : 0 };
  },

  toJSON(message: CDOTAClientMsgAspectRatio): unknown {
    const obj: any = {};
    message.ratio !== undefined && (obj.ratio = message.ratio);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgAspectRatio>): CDOTAClientMsgAspectRatio {
    return CDOTAClientMsgAspectRatio.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgAspectRatio>): CDOTAClientMsgAspectRatio {
    const message = createBaseCDOTAClientMsgAspectRatio();
    message.ratio = object.ratio ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgUnitsAutoAttackMode(): CDOTAClientMsgUnitsAutoAttackMode {
  return { mode: 0, unitType: 0 };
}

export const CDOTAClientMsgUnitsAutoAttackMode = {
  encode(message: CDOTAClientMsgUnitsAutoAttackMode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.unitType !== 0) {
      writer.uint32(16).int32(message.unitType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgUnitsAutoAttackMode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgUnitsAutoAttackMode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.mode = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.unitType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgUnitsAutoAttackMode {
    return {
      mode: isSet(object.mode) ? cDOTAClientMsgUnitsAutoAttackMode_EModeFromJSON(object.mode) : 0,
      unitType: isSet(object.unitType) ? cDOTAClientMsgUnitsAutoAttackMode_EUnitTypeFromJSON(object.unitType) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgUnitsAutoAttackMode): unknown {
    const obj: any = {};
    message.mode !== undefined && (obj.mode = cDOTAClientMsgUnitsAutoAttackMode_EModeToJSON(message.mode));
    message.unitType !== undefined &&
      (obj.unitType = cDOTAClientMsgUnitsAutoAttackMode_EUnitTypeToJSON(message.unitType));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgUnitsAutoAttackMode>): CDOTAClientMsgUnitsAutoAttackMode {
    return CDOTAClientMsgUnitsAutoAttackMode.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgUnitsAutoAttackMode>): CDOTAClientMsgUnitsAutoAttackMode {
    const message = createBaseCDOTAClientMsgUnitsAutoAttackMode();
    message.mode = object.mode ?? 0;
    message.unitType = object.unitType ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgUnitsAutoAttackAfterSpell(): CDOTAClientMsgUnitsAutoAttackAfterSpell {
  return { enabled: false };
}

export const CDOTAClientMsgUnitsAutoAttackAfterSpell = {
  encode(message: CDOTAClientMsgUnitsAutoAttackAfterSpell, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgUnitsAutoAttackAfterSpell {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgUnitsAutoAttackAfterSpell();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgUnitsAutoAttackAfterSpell {
    return { enabled: isSet(object.enabled) ? Boolean(object.enabled) : false };
  },

  toJSON(message: CDOTAClientMsgUnitsAutoAttackAfterSpell): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgUnitsAutoAttackAfterSpell>): CDOTAClientMsgUnitsAutoAttackAfterSpell {
    return CDOTAClientMsgUnitsAutoAttackAfterSpell.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgUnitsAutoAttackAfterSpell>): CDOTAClientMsgUnitsAutoAttackAfterSpell {
    const message = createBaseCDOTAClientMsgUnitsAutoAttackAfterSpell();
    message.enabled = object.enabled ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgTeleportRequiresHalt(): CDOTAClientMsgTeleportRequiresHalt {
  return { enabled: false };
}

export const CDOTAClientMsgTeleportRequiresHalt = {
  encode(message: CDOTAClientMsgTeleportRequiresHalt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgTeleportRequiresHalt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgTeleportRequiresHalt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgTeleportRequiresHalt {
    return { enabled: isSet(object.enabled) ? Boolean(object.enabled) : false };
  },

  toJSON(message: CDOTAClientMsgTeleportRequiresHalt): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgTeleportRequiresHalt>): CDOTAClientMsgTeleportRequiresHalt {
    return CDOTAClientMsgTeleportRequiresHalt.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgTeleportRequiresHalt>): CDOTAClientMsgTeleportRequiresHalt {
    const message = createBaseCDOTAClientMsgTeleportRequiresHalt();
    message.enabled = object.enabled ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgChannelRequiresHalt(): CDOTAClientMsgChannelRequiresHalt {
  return { enabled: false };
}

export const CDOTAClientMsgChannelRequiresHalt = {
  encode(message: CDOTAClientMsgChannelRequiresHalt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgChannelRequiresHalt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgChannelRequiresHalt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgChannelRequiresHalt {
    return { enabled: isSet(object.enabled) ? Boolean(object.enabled) : false };
  },

  toJSON(message: CDOTAClientMsgChannelRequiresHalt): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgChannelRequiresHalt>): CDOTAClientMsgChannelRequiresHalt {
    return CDOTAClientMsgChannelRequiresHalt.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgChannelRequiresHalt>): CDOTAClientMsgChannelRequiresHalt {
    const message = createBaseCDOTAClientMsgChannelRequiresHalt();
    message.enabled = object.enabled ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgSearchString(): CDOTAClientMsgSearchString {
  return { search: "" };
}

export const CDOTAClientMsgSearchString = {
  encode(message: CDOTAClientMsgSearchString, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.search !== "") {
      writer.uint32(10).string(message.search);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgSearchString {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgSearchString();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.search = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgSearchString {
    return { search: isSet(object.search) ? String(object.search) : "" };
  },

  toJSON(message: CDOTAClientMsgSearchString): unknown {
    const obj: any = {};
    message.search !== undefined && (obj.search = message.search);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgSearchString>): CDOTAClientMsgSearchString {
    return CDOTAClientMsgSearchString.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgSearchString>): CDOTAClientMsgSearchString {
    const message = createBaseCDOTAClientMsgSearchString();
    message.search = object.search ?? "";
    return message;
  },
};

function createBaseCDOTAClientMsgPause(): CDOTAClientMsgPause {
  return {};
}

export const CDOTAClientMsgPause = {
  encode(_: CDOTAClientMsgPause, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgPause {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgPause();
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

  fromJSON(_: any): CDOTAClientMsgPause {
    return {};
  },

  toJSON(_: CDOTAClientMsgPause): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgPause>): CDOTAClientMsgPause {
    return CDOTAClientMsgPause.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CDOTAClientMsgPause>): CDOTAClientMsgPause {
    const message = createBaseCDOTAClientMsgPause();
    return message;
  },
};

function createBaseCDOTAClientMsgShopViewMode(): CDOTAClientMsgShopViewMode {
  return { mode: 0 };
}

export const CDOTAClientMsgShopViewMode = {
  encode(message: CDOTAClientMsgShopViewMode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).uint32(message.mode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgShopViewMode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgShopViewMode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.mode = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgShopViewMode {
    return { mode: isSet(object.mode) ? Number(object.mode) : 0 };
  },

  toJSON(message: CDOTAClientMsgShopViewMode): unknown {
    const obj: any = {};
    message.mode !== undefined && (obj.mode = Math.round(message.mode));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgShopViewMode>): CDOTAClientMsgShopViewMode {
    return CDOTAClientMsgShopViewMode.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgShopViewMode>): CDOTAClientMsgShopViewMode {
    const message = createBaseCDOTAClientMsgShopViewMode();
    message.mode = object.mode ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgSetUnitShareFlag(): CDOTAClientMsgSetUnitShareFlag {
  return { playerId: 0, flag: 0, state: false };
}

export const CDOTAClientMsgSetUnitShareFlag = {
  encode(message: CDOTAClientMsgSetUnitShareFlag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.flag !== 0) {
      writer.uint32(16).uint32(message.flag);
    }
    if (message.state === true) {
      writer.uint32(24).bool(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgSetUnitShareFlag {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgSetUnitShareFlag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.flag = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.state = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgSetUnitShareFlag {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      flag: isSet(object.flag) ? Number(object.flag) : 0,
      state: isSet(object.state) ? Boolean(object.state) : false,
    };
  },

  toJSON(message: CDOTAClientMsgSetUnitShareFlag): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.flag !== undefined && (obj.flag = Math.round(message.flag));
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgSetUnitShareFlag>): CDOTAClientMsgSetUnitShareFlag {
    return CDOTAClientMsgSetUnitShareFlag.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgSetUnitShareFlag>): CDOTAClientMsgSetUnitShareFlag {
    const message = createBaseCDOTAClientMsgSetUnitShareFlag();
    message.playerId = object.playerId ?? 0;
    message.flag = object.flag ?? 0;
    message.state = object.state ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgSwapRequest(): CDOTAClientMsgSwapRequest {
  return { playerId: 0 };
}

export const CDOTAClientMsgSwapRequest = {
  encode(message: CDOTAClientMsgSwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgSwapRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgSwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgSwapRequest {
    return { playerId: isSet(object.playerId) ? Number(object.playerId) : 0 };
  },

  toJSON(message: CDOTAClientMsgSwapRequest): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgSwapRequest>): CDOTAClientMsgSwapRequest {
    return CDOTAClientMsgSwapRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgSwapRequest>): CDOTAClientMsgSwapRequest {
    const message = createBaseCDOTAClientMsgSwapRequest();
    message.playerId = object.playerId ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgSwapAccept(): CDOTAClientMsgSwapAccept {
  return { playerId: 0 };
}

export const CDOTAClientMsgSwapAccept = {
  encode(message: CDOTAClientMsgSwapAccept, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgSwapAccept {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgSwapAccept();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgSwapAccept {
    return { playerId: isSet(object.playerId) ? Number(object.playerId) : 0 };
  },

  toJSON(message: CDOTAClientMsgSwapAccept): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgSwapAccept>): CDOTAClientMsgSwapAccept {
    return CDOTAClientMsgSwapAccept.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgSwapAccept>): CDOTAClientMsgSwapAccept {
    const message = createBaseCDOTAClientMsgSwapAccept();
    message.playerId = object.playerId ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgWorldLine(): CDOTAClientMsgWorldLine {
  return { worldline: undefined };
}

export const CDOTAClientMsgWorldLine = {
  encode(message: CDOTAClientMsgWorldLine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.worldline !== undefined) {
      CDOTAMsgWorldLine.encode(message.worldline, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgWorldLine {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgWorldLine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.worldline = CDOTAMsgWorldLine.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgWorldLine {
    return { worldline: isSet(object.worldline) ? CDOTAMsgWorldLine.fromJSON(object.worldline) : undefined };
  },

  toJSON(message: CDOTAClientMsgWorldLine): unknown {
    const obj: any = {};
    message.worldline !== undefined &&
      (obj.worldline = message.worldline ? CDOTAMsgWorldLine.toJSON(message.worldline) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgWorldLine>): CDOTAClientMsgWorldLine {
    return CDOTAClientMsgWorldLine.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgWorldLine>): CDOTAClientMsgWorldLine {
    const message = createBaseCDOTAClientMsgWorldLine();
    message.worldline = (object.worldline !== undefined && object.worldline !== null)
      ? CDOTAMsgWorldLine.fromPartial(object.worldline)
      : undefined;
    return message;
  },
};

function createBaseCDOTAClientMsgRequestGraphUpdate(): CDOTAClientMsgRequestGraphUpdate {
  return {};
}

export const CDOTAClientMsgRequestGraphUpdate = {
  encode(_: CDOTAClientMsgRequestGraphUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgRequestGraphUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgRequestGraphUpdate();
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

  fromJSON(_: any): CDOTAClientMsgRequestGraphUpdate {
    return {};
  },

  toJSON(_: CDOTAClientMsgRequestGraphUpdate): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgRequestGraphUpdate>): CDOTAClientMsgRequestGraphUpdate {
    return CDOTAClientMsgRequestGraphUpdate.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CDOTAClientMsgRequestGraphUpdate>): CDOTAClientMsgRequestGraphUpdate {
    const message = createBaseCDOTAClientMsgRequestGraphUpdate();
    return message;
  },
};

function createBaseCDOTAClientMsgChatWheel(): CDOTAClientMsgChatWheel {
  return { chatMessageId: 0, paramHeroId: 0, emoticonId: 0 };
}

export const CDOTAClientMsgChatWheel = {
  encode(message: CDOTAClientMsgChatWheel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatMessageId !== 0) {
      writer.uint32(8).uint32(message.chatMessageId);
    }
    if (message.paramHeroId !== 0) {
      writer.uint32(16).uint32(message.paramHeroId);
    }
    if (message.emoticonId !== 0) {
      writer.uint32(24).uint32(message.emoticonId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgChatWheel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgChatWheel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.chatMessageId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.paramHeroId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.emoticonId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgChatWheel {
    return {
      chatMessageId: isSet(object.chatMessageId) ? Number(object.chatMessageId) : 0,
      paramHeroId: isSet(object.paramHeroId) ? Number(object.paramHeroId) : 0,
      emoticonId: isSet(object.emoticonId) ? Number(object.emoticonId) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgChatWheel): unknown {
    const obj: any = {};
    message.chatMessageId !== undefined && (obj.chatMessageId = Math.round(message.chatMessageId));
    message.paramHeroId !== undefined && (obj.paramHeroId = Math.round(message.paramHeroId));
    message.emoticonId !== undefined && (obj.emoticonId = Math.round(message.emoticonId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgChatWheel>): CDOTAClientMsgChatWheel {
    return CDOTAClientMsgChatWheel.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgChatWheel>): CDOTAClientMsgChatWheel {
    const message = createBaseCDOTAClientMsgChatWheel();
    message.chatMessageId = object.chatMessageId ?? 0;
    message.paramHeroId = object.paramHeroId ?? 0;
    message.emoticonId = object.emoticonId ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgSendStatPopup(): CDOTAClientMsgSendStatPopup {
  return { statpopup: undefined };
}

export const CDOTAClientMsgSendStatPopup = {
  encode(message: CDOTAClientMsgSendStatPopup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statpopup !== undefined) {
      CDOTAMsgSendStatPopup.encode(message.statpopup, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgSendStatPopup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgSendStatPopup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.statpopup = CDOTAMsgSendStatPopup.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgSendStatPopup {
    return { statpopup: isSet(object.statpopup) ? CDOTAMsgSendStatPopup.fromJSON(object.statpopup) : undefined };
  },

  toJSON(message: CDOTAClientMsgSendStatPopup): unknown {
    const obj: any = {};
    message.statpopup !== undefined &&
      (obj.statpopup = message.statpopup ? CDOTAMsgSendStatPopup.toJSON(message.statpopup) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgSendStatPopup>): CDOTAClientMsgSendStatPopup {
    return CDOTAClientMsgSendStatPopup.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgSendStatPopup>): CDOTAClientMsgSendStatPopup {
    const message = createBaseCDOTAClientMsgSendStatPopup();
    message.statpopup = (object.statpopup !== undefined && object.statpopup !== null)
      ? CDOTAMsgSendStatPopup.fromPartial(object.statpopup)
      : undefined;
    return message;
  },
};

function createBaseCDOTAClientMsgDismissAllStatPopups(): CDOTAClientMsgDismissAllStatPopups {
  return { dismissallmsg: undefined };
}

export const CDOTAClientMsgDismissAllStatPopups = {
  encode(message: CDOTAClientMsgDismissAllStatPopups, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dismissallmsg !== undefined) {
      CDOTAMsgDismissAllStatPopups.encode(message.dismissallmsg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgDismissAllStatPopups {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgDismissAllStatPopups();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.dismissallmsg = CDOTAMsgDismissAllStatPopups.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgDismissAllStatPopups {
    return {
      dismissallmsg: isSet(object.dismissallmsg)
        ? CDOTAMsgDismissAllStatPopups.fromJSON(object.dismissallmsg)
        : undefined,
    };
  },

  toJSON(message: CDOTAClientMsgDismissAllStatPopups): unknown {
    const obj: any = {};
    message.dismissallmsg !== undefined && (obj.dismissallmsg = message.dismissallmsg
      ? CDOTAMsgDismissAllStatPopups.toJSON(message.dismissallmsg)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgDismissAllStatPopups>): CDOTAClientMsgDismissAllStatPopups {
    return CDOTAClientMsgDismissAllStatPopups.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgDismissAllStatPopups>): CDOTAClientMsgDismissAllStatPopups {
    const message = createBaseCDOTAClientMsgDismissAllStatPopups();
    message.dismissallmsg = (object.dismissallmsg !== undefined && object.dismissallmsg !== null)
      ? CDOTAMsgDismissAllStatPopups.fromPartial(object.dismissallmsg)
      : undefined;
    return message;
  },
};

function createBaseCDOTAClientMsgBeginLastHitChallenge(): CDOTAClientMsgBeginLastHitChallenge {
  return { chosenLane: 0, helperEnabled: false };
}

export const CDOTAClientMsgBeginLastHitChallenge = {
  encode(message: CDOTAClientMsgBeginLastHitChallenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chosenLane !== 0) {
      writer.uint32(8).uint32(message.chosenLane);
    }
    if (message.helperEnabled === true) {
      writer.uint32(16).bool(message.helperEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgBeginLastHitChallenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgBeginLastHitChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.chosenLane = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.helperEnabled = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgBeginLastHitChallenge {
    return {
      chosenLane: isSet(object.chosenLane) ? Number(object.chosenLane) : 0,
      helperEnabled: isSet(object.helperEnabled) ? Boolean(object.helperEnabled) : false,
    };
  },

  toJSON(message: CDOTAClientMsgBeginLastHitChallenge): unknown {
    const obj: any = {};
    message.chosenLane !== undefined && (obj.chosenLane = Math.round(message.chosenLane));
    message.helperEnabled !== undefined && (obj.helperEnabled = message.helperEnabled);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgBeginLastHitChallenge>): CDOTAClientMsgBeginLastHitChallenge {
    return CDOTAClientMsgBeginLastHitChallenge.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgBeginLastHitChallenge>): CDOTAClientMsgBeginLastHitChallenge {
    const message = createBaseCDOTAClientMsgBeginLastHitChallenge();
    message.chosenLane = object.chosenLane ?? 0;
    message.helperEnabled = object.helperEnabled ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgUpdateQuickBuyItem(): CDOTAClientMsgUpdateQuickBuyItem {
  return { itemAbilityId: 0, purchasable: false };
}

export const CDOTAClientMsgUpdateQuickBuyItem = {
  encode(message: CDOTAClientMsgUpdateQuickBuyItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemAbilityId !== 0) {
      writer.uint32(8).int32(message.itemAbilityId);
    }
    if (message.purchasable === true) {
      writer.uint32(16).bool(message.purchasable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgUpdateQuickBuyItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgUpdateQuickBuyItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemAbilityId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.purchasable = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgUpdateQuickBuyItem {
    return {
      itemAbilityId: isSet(object.itemAbilityId) ? Number(object.itemAbilityId) : 0,
      purchasable: isSet(object.purchasable) ? Boolean(object.purchasable) : false,
    };
  },

  toJSON(message: CDOTAClientMsgUpdateQuickBuyItem): unknown {
    const obj: any = {};
    message.itemAbilityId !== undefined && (obj.itemAbilityId = Math.round(message.itemAbilityId));
    message.purchasable !== undefined && (obj.purchasable = message.purchasable);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgUpdateQuickBuyItem>): CDOTAClientMsgUpdateQuickBuyItem {
    return CDOTAClientMsgUpdateQuickBuyItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgUpdateQuickBuyItem>): CDOTAClientMsgUpdateQuickBuyItem {
    const message = createBaseCDOTAClientMsgUpdateQuickBuyItem();
    message.itemAbilityId = object.itemAbilityId ?? 0;
    message.purchasable = object.purchasable ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgUpdateQuickBuy(): CDOTAClientMsgUpdateQuickBuy {
  return { items: [] };
}

export const CDOTAClientMsgUpdateQuickBuy = {
  encode(message: CDOTAClientMsgUpdateQuickBuy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      CDOTAClientMsgUpdateQuickBuyItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgUpdateQuickBuy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgUpdateQuickBuy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.items.push(CDOTAClientMsgUpdateQuickBuyItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgUpdateQuickBuy {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => CDOTAClientMsgUpdateQuickBuyItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDOTAClientMsgUpdateQuickBuy): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? CDOTAClientMsgUpdateQuickBuyItem.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgUpdateQuickBuy>): CDOTAClientMsgUpdateQuickBuy {
    return CDOTAClientMsgUpdateQuickBuy.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgUpdateQuickBuy>): CDOTAClientMsgUpdateQuickBuy {
    const message = createBaseCDOTAClientMsgUpdateQuickBuy();
    message.items = object.items?.map((e) => CDOTAClientMsgUpdateQuickBuyItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCDOTAClientMsgRecordVote(): CDOTAClientMsgRecordVote {
  return { choiceIndex: 0 };
}

export const CDOTAClientMsgRecordVote = {
  encode(message: CDOTAClientMsgRecordVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.choiceIndex !== 0) {
      writer.uint32(8).int32(message.choiceIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgRecordVote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgRecordVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.choiceIndex = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgRecordVote {
    return { choiceIndex: isSet(object.choiceIndex) ? Number(object.choiceIndex) : 0 };
  },

  toJSON(message: CDOTAClientMsgRecordVote): unknown {
    const obj: any = {};
    message.choiceIndex !== undefined && (obj.choiceIndex = Math.round(message.choiceIndex));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgRecordVote>): CDOTAClientMsgRecordVote {
    return CDOTAClientMsgRecordVote.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgRecordVote>): CDOTAClientMsgRecordVote {
    const message = createBaseCDOTAClientMsgRecordVote();
    message.choiceIndex = object.choiceIndex ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgWillPurchaseAlert(): CDOTAClientMsgWillPurchaseAlert {
  return { itemAbilityId: 0, goldRemaining: 0, suggestionPlayerId: 0 };
}

export const CDOTAClientMsgWillPurchaseAlert = {
  encode(message: CDOTAClientMsgWillPurchaseAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemAbilityId !== 0) {
      writer.uint32(8).int32(message.itemAbilityId);
    }
    if (message.goldRemaining !== 0) {
      writer.uint32(16).uint32(message.goldRemaining);
    }
    if (message.suggestionPlayerId !== 0) {
      writer.uint32(24).int32(message.suggestionPlayerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgWillPurchaseAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgWillPurchaseAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemAbilityId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.goldRemaining = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.suggestionPlayerId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgWillPurchaseAlert {
    return {
      itemAbilityId: isSet(object.itemAbilityId) ? Number(object.itemAbilityId) : 0,
      goldRemaining: isSet(object.goldRemaining) ? Number(object.goldRemaining) : 0,
      suggestionPlayerId: isSet(object.suggestionPlayerId) ? Number(object.suggestionPlayerId) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgWillPurchaseAlert): unknown {
    const obj: any = {};
    message.itemAbilityId !== undefined && (obj.itemAbilityId = Math.round(message.itemAbilityId));
    message.goldRemaining !== undefined && (obj.goldRemaining = Math.round(message.goldRemaining));
    message.suggestionPlayerId !== undefined && (obj.suggestionPlayerId = Math.round(message.suggestionPlayerId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgWillPurchaseAlert>): CDOTAClientMsgWillPurchaseAlert {
    return CDOTAClientMsgWillPurchaseAlert.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgWillPurchaseAlert>): CDOTAClientMsgWillPurchaseAlert {
    const message = createBaseCDOTAClientMsgWillPurchaseAlert();
    message.itemAbilityId = object.itemAbilityId ?? 0;
    message.goldRemaining = object.goldRemaining ?? 0;
    message.suggestionPlayerId = object.suggestionPlayerId ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgBuyBackStateAlert(): CDOTAClientMsgBuyBackStateAlert {
  return {};
}

export const CDOTAClientMsgBuyBackStateAlert = {
  encode(_: CDOTAClientMsgBuyBackStateAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgBuyBackStateAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgBuyBackStateAlert();
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

  fromJSON(_: any): CDOTAClientMsgBuyBackStateAlert {
    return {};
  },

  toJSON(_: CDOTAClientMsgBuyBackStateAlert): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgBuyBackStateAlert>): CDOTAClientMsgBuyBackStateAlert {
    return CDOTAClientMsgBuyBackStateAlert.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CDOTAClientMsgBuyBackStateAlert>): CDOTAClientMsgBuyBackStateAlert {
    const message = createBaseCDOTAClientMsgBuyBackStateAlert();
    return message;
  },
};

function createBaseCDOTAClientMsgQuickBuyAlert(): CDOTAClientMsgQuickBuyAlert {
  return { itemAbilityId: 0, goldCost: 0, itemCooldownSeconds: 0, showBuyback: false };
}

export const CDOTAClientMsgQuickBuyAlert = {
  encode(message: CDOTAClientMsgQuickBuyAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemAbilityId !== 0) {
      writer.uint32(8).int32(message.itemAbilityId);
    }
    if (message.goldCost !== 0) {
      writer.uint32(16).int32(message.goldCost);
    }
    if (message.itemCooldownSeconds !== 0) {
      writer.uint32(24).int32(message.itemCooldownSeconds);
    }
    if (message.showBuyback === true) {
      writer.uint32(32).bool(message.showBuyback);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgQuickBuyAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgQuickBuyAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemAbilityId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.goldCost = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.itemCooldownSeconds = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.showBuyback = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgQuickBuyAlert {
    return {
      itemAbilityId: isSet(object.itemAbilityId) ? Number(object.itemAbilityId) : 0,
      goldCost: isSet(object.goldCost) ? Number(object.goldCost) : 0,
      itemCooldownSeconds: isSet(object.itemCooldownSeconds) ? Number(object.itemCooldownSeconds) : 0,
      showBuyback: isSet(object.showBuyback) ? Boolean(object.showBuyback) : false,
    };
  },

  toJSON(message: CDOTAClientMsgQuickBuyAlert): unknown {
    const obj: any = {};
    message.itemAbilityId !== undefined && (obj.itemAbilityId = Math.round(message.itemAbilityId));
    message.goldCost !== undefined && (obj.goldCost = Math.round(message.goldCost));
    message.itemCooldownSeconds !== undefined && (obj.itemCooldownSeconds = Math.round(message.itemCooldownSeconds));
    message.showBuyback !== undefined && (obj.showBuyback = message.showBuyback);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgQuickBuyAlert>): CDOTAClientMsgQuickBuyAlert {
    return CDOTAClientMsgQuickBuyAlert.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgQuickBuyAlert>): CDOTAClientMsgQuickBuyAlert {
    const message = createBaseCDOTAClientMsgQuickBuyAlert();
    message.itemAbilityId = object.itemAbilityId ?? 0;
    message.goldCost = object.goldCost ?? 0;
    message.itemCooldownSeconds = object.itemCooldownSeconds ?? 0;
    message.showBuyback = object.showBuyback ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgPlayerShowCase(): CDOTAClientMsgPlayerShowCase {
  return { showcase: false };
}

export const CDOTAClientMsgPlayerShowCase = {
  encode(message: CDOTAClientMsgPlayerShowCase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.showcase === true) {
      writer.uint32(8).bool(message.showcase);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgPlayerShowCase {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgPlayerShowCase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.showcase = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgPlayerShowCase {
    return { showcase: isSet(object.showcase) ? Boolean(object.showcase) : false };
  },

  toJSON(message: CDOTAClientMsgPlayerShowCase): unknown {
    const obj: any = {};
    message.showcase !== undefined && (obj.showcase = message.showcase);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgPlayerShowCase>): CDOTAClientMsgPlayerShowCase {
    return CDOTAClientMsgPlayerShowCase.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgPlayerShowCase>): CDOTAClientMsgPlayerShowCase {
    const message = createBaseCDOTAClientMsgPlayerShowCase();
    message.showcase = object.showcase ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgCameraZoomAmount(): CDOTAClientMsgCameraZoomAmount {
  return { zoomAmount: 0 };
}

export const CDOTAClientMsgCameraZoomAmount = {
  encode(message: CDOTAClientMsgCameraZoomAmount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoomAmount !== 0) {
      writer.uint32(13).float(message.zoomAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgCameraZoomAmount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgCameraZoomAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.zoomAmount = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgCameraZoomAmount {
    return { zoomAmount: isSet(object.zoomAmount) ? Number(object.zoomAmount) : 0 };
  },

  toJSON(message: CDOTAClientMsgCameraZoomAmount): unknown {
    const obj: any = {};
    message.zoomAmount !== undefined && (obj.zoomAmount = message.zoomAmount);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgCameraZoomAmount>): CDOTAClientMsgCameraZoomAmount {
    return CDOTAClientMsgCameraZoomAmount.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgCameraZoomAmount>): CDOTAClientMsgCameraZoomAmount {
    const message = createBaseCDOTAClientMsgCameraZoomAmount();
    message.zoomAmount = object.zoomAmount ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgBroadcasterUsingCameraman(): CDOTAClientMsgBroadcasterUsingCameraman {
  return { cameraman: false };
}

export const CDOTAClientMsgBroadcasterUsingCameraman = {
  encode(message: CDOTAClientMsgBroadcasterUsingCameraman, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cameraman === true) {
      writer.uint32(8).bool(message.cameraman);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgBroadcasterUsingCameraman {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgBroadcasterUsingCameraman();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.cameraman = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgBroadcasterUsingCameraman {
    return { cameraman: isSet(object.cameraman) ? Boolean(object.cameraman) : false };
  },

  toJSON(message: CDOTAClientMsgBroadcasterUsingCameraman): unknown {
    const obj: any = {};
    message.cameraman !== undefined && (obj.cameraman = message.cameraman);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgBroadcasterUsingCameraman>): CDOTAClientMsgBroadcasterUsingCameraman {
    return CDOTAClientMsgBroadcasterUsingCameraman.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgBroadcasterUsingCameraman>): CDOTAClientMsgBroadcasterUsingCameraman {
    const message = createBaseCDOTAClientMsgBroadcasterUsingCameraman();
    message.cameraman = object.cameraman ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgBroadcasterUsingAssistedCameraOperator(): CDOTAClientMsgBroadcasterUsingAssistedCameraOperator {
  return { enabled: false };
}

export const CDOTAClientMsgBroadcasterUsingAssistedCameraOperator = {
  encode(
    message: CDOTAClientMsgBroadcasterUsingAssistedCameraOperator,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgBroadcasterUsingAssistedCameraOperator {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgBroadcasterUsingAssistedCameraOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgBroadcasterUsingAssistedCameraOperator {
    return { enabled: isSet(object.enabled) ? Boolean(object.enabled) : false };
  },

  toJSON(message: CDOTAClientMsgBroadcasterUsingAssistedCameraOperator): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  create(
    base?: DeepPartial<CDOTAClientMsgBroadcasterUsingAssistedCameraOperator>,
  ): CDOTAClientMsgBroadcasterUsingAssistedCameraOperator {
    return CDOTAClientMsgBroadcasterUsingAssistedCameraOperator.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAClientMsgBroadcasterUsingAssistedCameraOperator>,
  ): CDOTAClientMsgBroadcasterUsingAssistedCameraOperator {
    const message = createBaseCDOTAClientMsgBroadcasterUsingAssistedCameraOperator();
    message.enabled = object.enabled ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgFillEmptySlotsWithBots(): CDOTAClientMsgFillEmptySlotsWithBots {
  return { fillwithbots: false };
}

export const CDOTAClientMsgFillEmptySlotsWithBots = {
  encode(message: CDOTAClientMsgFillEmptySlotsWithBots, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fillwithbots === true) {
      writer.uint32(8).bool(message.fillwithbots);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgFillEmptySlotsWithBots {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgFillEmptySlotsWithBots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.fillwithbots = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgFillEmptySlotsWithBots {
    return { fillwithbots: isSet(object.fillwithbots) ? Boolean(object.fillwithbots) : false };
  },

  toJSON(message: CDOTAClientMsgFillEmptySlotsWithBots): unknown {
    const obj: any = {};
    message.fillwithbots !== undefined && (obj.fillwithbots = message.fillwithbots);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgFillEmptySlotsWithBots>): CDOTAClientMsgFillEmptySlotsWithBots {
    return CDOTAClientMsgFillEmptySlotsWithBots.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgFillEmptySlotsWithBots>): CDOTAClientMsgFillEmptySlotsWithBots {
    const message = createBaseCDOTAClientMsgFillEmptySlotsWithBots();
    message.fillwithbots = object.fillwithbots ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgHeroStatueLike(): CDOTAClientMsgHeroStatueLike {
  return { ownerPlayerId: 0 };
}

export const CDOTAClientMsgHeroStatueLike = {
  encode(message: CDOTAClientMsgHeroStatueLike, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerPlayerId !== 0) {
      writer.uint32(8).int32(message.ownerPlayerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgHeroStatueLike {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgHeroStatueLike();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ownerPlayerId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgHeroStatueLike {
    return { ownerPlayerId: isSet(object.ownerPlayerId) ? Number(object.ownerPlayerId) : 0 };
  },

  toJSON(message: CDOTAClientMsgHeroStatueLike): unknown {
    const obj: any = {};
    message.ownerPlayerId !== undefined && (obj.ownerPlayerId = Math.round(message.ownerPlayerId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgHeroStatueLike>): CDOTAClientMsgHeroStatueLike {
    return CDOTAClientMsgHeroStatueLike.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgHeroStatueLike>): CDOTAClientMsgHeroStatueLike {
    const message = createBaseCDOTAClientMsgHeroStatueLike();
    message.ownerPlayerId = object.ownerPlayerId ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgEventCNY2015Cmd(): CDOTAClientMsgEventCNY2015Cmd {
  return { data: Buffer.alloc(0) };
}

export const CDOTAClientMsgEventCNY2015Cmd = {
  encode(message: CDOTAClientMsgEventCNY2015Cmd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgEventCNY2015Cmd {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgEventCNY2015Cmd();
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

  fromJSON(object: any): CDOTAClientMsgEventCNY2015Cmd {
    return { data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0) };
  },

  toJSON(message: CDOTAClientMsgEventCNY2015Cmd): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgEventCNY2015Cmd>): CDOTAClientMsgEventCNY2015Cmd {
    return CDOTAClientMsgEventCNY2015Cmd.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgEventCNY2015Cmd>): CDOTAClientMsgEventCNY2015Cmd {
    const message = createBaseCDOTAClientMsgEventCNY2015Cmd();
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCDOTAClientMsgDemoHero(): CDOTAClientMsgDemoHero {
  return { heroId: 0, heroIdToSpawn: 0, itemDefs: [], itemIds: [], styleIndex: 0, keepExistingDemohero: false };
}

export const CDOTAClientMsgDemoHero = {
  encode(message: CDOTAClientMsgDemoHero, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).int32(message.heroId);
    }
    if (message.heroIdToSpawn !== 0) {
      writer.uint32(16).int32(message.heroIdToSpawn);
    }
    writer.uint32(26).fork();
    for (const v of message.itemDefs) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.itemIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.styleIndex !== 0) {
      writer.uint32(40).uint32(message.styleIndex);
    }
    if (message.keepExistingDemohero === true) {
      writer.uint32(48).bool(message.keepExistingDemohero);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgDemoHero {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgDemoHero();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.heroId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.heroIdToSpawn = reader.int32();
          continue;
        case 3:
          if (tag == 24) {
            message.itemDefs.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.itemDefs.push(reader.uint32());
            }

            continue;
          }

          break;
        case 4:
          if (tag == 32) {
            message.itemIds.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.itemIds.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 5:
          if (tag != 40) {
            break;
          }

          message.styleIndex = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.keepExistingDemohero = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgDemoHero {
    return {
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      heroIdToSpawn: isSet(object.heroIdToSpawn) ? Number(object.heroIdToSpawn) : 0,
      itemDefs: Array.isArray(object?.itemDefs) ? object.itemDefs.map((e: any) => Number(e)) : [],
      itemIds: Array.isArray(object?.itemIds) ? object.itemIds.map((e: any) => String(e)) : [],
      styleIndex: isSet(object.styleIndex) ? Number(object.styleIndex) : 0,
      keepExistingDemohero: isSet(object.keepExistingDemohero) ? Boolean(object.keepExistingDemohero) : false,
    };
  },

  toJSON(message: CDOTAClientMsgDemoHero): unknown {
    const obj: any = {};
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.heroIdToSpawn !== undefined && (obj.heroIdToSpawn = Math.round(message.heroIdToSpawn));
    if (message.itemDefs) {
      obj.itemDefs = message.itemDefs.map((e) => Math.round(e));
    } else {
      obj.itemDefs = [];
    }
    if (message.itemIds) {
      obj.itemIds = message.itemIds.map((e) => e);
    } else {
      obj.itemIds = [];
    }
    message.styleIndex !== undefined && (obj.styleIndex = Math.round(message.styleIndex));
    message.keepExistingDemohero !== undefined && (obj.keepExistingDemohero = message.keepExistingDemohero);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgDemoHero>): CDOTAClientMsgDemoHero {
    return CDOTAClientMsgDemoHero.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgDemoHero>): CDOTAClientMsgDemoHero {
    const message = createBaseCDOTAClientMsgDemoHero();
    message.heroId = object.heroId ?? 0;
    message.heroIdToSpawn = object.heroIdToSpawn ?? 0;
    message.itemDefs = object.itemDefs?.map((e) => e) || [];
    message.itemIds = object.itemIds?.map((e) => e) || [];
    message.styleIndex = object.styleIndex ?? 0;
    message.keepExistingDemohero = object.keepExistingDemohero ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgChallengeSelect(): CDOTAClientMsgChallengeSelect {
  return { eventId: 0, slotId: 0, sequenceId: 0 };
}

export const CDOTAClientMsgChallengeSelect = {
  encode(message: CDOTAClientMsgChallengeSelect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    if (message.slotId !== 0) {
      writer.uint32(16).uint32(message.slotId);
    }
    if (message.sequenceId !== 0) {
      writer.uint32(24).uint32(message.sequenceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgChallengeSelect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgChallengeSelect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.slotId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.sequenceId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgChallengeSelect {
    return {
      eventId: isSet(object.eventId) ? Number(object.eventId) : 0,
      slotId: isSet(object.slotId) ? Number(object.slotId) : 0,
      sequenceId: isSet(object.sequenceId) ? Number(object.sequenceId) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgChallengeSelect): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = Math.round(message.eventId));
    message.slotId !== undefined && (obj.slotId = Math.round(message.slotId));
    message.sequenceId !== undefined && (obj.sequenceId = Math.round(message.sequenceId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgChallengeSelect>): CDOTAClientMsgChallengeSelect {
    return CDOTAClientMsgChallengeSelect.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgChallengeSelect>): CDOTAClientMsgChallengeSelect {
    const message = createBaseCDOTAClientMsgChallengeSelect();
    message.eventId = object.eventId ?? 0;
    message.slotId = object.slotId ?? 0;
    message.sequenceId = object.sequenceId ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgChallengeReroll(): CDOTAClientMsgChallengeReroll {
  return { eventId: 0, slotId: 0, sequenceId: 0, heroId: 0 };
}

export const CDOTAClientMsgChallengeReroll = {
  encode(message: CDOTAClientMsgChallengeReroll, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.slotId !== 0) {
      writer.uint32(16).uint32(message.slotId);
    }
    if (message.sequenceId !== 0) {
      writer.uint32(24).uint32(message.sequenceId);
    }
    if (message.heroId !== 0) {
      writer.uint32(32).uint32(message.heroId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgChallengeReroll {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgChallengeReroll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventId = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.slotId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.sequenceId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
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

  fromJSON(object: any): CDOTAClientMsgChallengeReroll {
    return {
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      slotId: isSet(object.slotId) ? Number(object.slotId) : 0,
      sequenceId: isSet(object.sequenceId) ? Number(object.sequenceId) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgChallengeReroll): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    message.slotId !== undefined && (obj.slotId = Math.round(message.slotId));
    message.sequenceId !== undefined && (obj.sequenceId = Math.round(message.sequenceId));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgChallengeReroll>): CDOTAClientMsgChallengeReroll {
    return CDOTAClientMsgChallengeReroll.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgChallengeReroll>): CDOTAClientMsgChallengeReroll {
    const message = createBaseCDOTAClientMsgChallengeReroll();
    message.eventId = object.eventId ?? 0;
    message.slotId = object.slotId ?? 0;
    message.sequenceId = object.sequenceId ?? 0;
    message.heroId = object.heroId ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgCoinWager(): CDOTAClientMsgCoinWager {
  return { wagerAmount: 0 };
}

export const CDOTAClientMsgCoinWager = {
  encode(message: CDOTAClientMsgCoinWager, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wagerAmount !== 0) {
      writer.uint32(8).uint32(message.wagerAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgCoinWager {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgCoinWager();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.wagerAmount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgCoinWager {
    return { wagerAmount: isSet(object.wagerAmount) ? Number(object.wagerAmount) : 0 };
  },

  toJSON(message: CDOTAClientMsgCoinWager): unknown {
    const obj: any = {};
    message.wagerAmount !== undefined && (obj.wagerAmount = Math.round(message.wagerAmount));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgCoinWager>): CDOTAClientMsgCoinWager {
    return CDOTAClientMsgCoinWager.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgCoinWager>): CDOTAClientMsgCoinWager {
    const message = createBaseCDOTAClientMsgCoinWager();
    message.wagerAmount = object.wagerAmount ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgCoinWagerToken(): CDOTAClientMsgCoinWagerToken {
  return { wagerTokenItemId: "0" };
}

export const CDOTAClientMsgCoinWagerToken = {
  encode(message: CDOTAClientMsgCoinWagerToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wagerTokenItemId !== "0") {
      writer.uint32(8).uint64(message.wagerTokenItemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgCoinWagerToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgCoinWagerToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.wagerTokenItemId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgCoinWagerToken {
    return { wagerTokenItemId: isSet(object.wagerTokenItemId) ? String(object.wagerTokenItemId) : "0" };
  },

  toJSON(message: CDOTAClientMsgCoinWagerToken): unknown {
    const obj: any = {};
    message.wagerTokenItemId !== undefined && (obj.wagerTokenItemId = message.wagerTokenItemId);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgCoinWagerToken>): CDOTAClientMsgCoinWagerToken {
    return CDOTAClientMsgCoinWagerToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgCoinWagerToken>): CDOTAClientMsgCoinWagerToken {
    const message = createBaseCDOTAClientMsgCoinWagerToken();
    message.wagerTokenItemId = object.wagerTokenItemId ?? "0";
    return message;
  },
};

function createBaseCDOTAClientMsgRankWager(): CDOTAClientMsgRankWager {
  return { announceWager: false };
}

export const CDOTAClientMsgRankWager = {
  encode(message: CDOTAClientMsgRankWager, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.announceWager === true) {
      writer.uint32(8).bool(message.announceWager);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgRankWager {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgRankWager();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.announceWager = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgRankWager {
    return { announceWager: isSet(object.announceWager) ? Boolean(object.announceWager) : false };
  },

  toJSON(message: CDOTAClientMsgRankWager): unknown {
    const obj: any = {};
    message.announceWager !== undefined && (obj.announceWager = message.announceWager);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgRankWager>): CDOTAClientMsgRankWager {
    return CDOTAClientMsgRankWager.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgRankWager>): CDOTAClientMsgRankWager {
    const message = createBaseCDOTAClientMsgRankWager();
    message.announceWager = object.announceWager ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgPlayerBounty(): CDOTAClientMsgPlayerBounty {
  return { playerId: 0 };
}

export const CDOTAClientMsgPlayerBounty = {
  encode(message: CDOTAClientMsgPlayerBounty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgPlayerBounty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgPlayerBounty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgPlayerBounty {
    return { playerId: isSet(object.playerId) ? Number(object.playerId) : 0 };
  },

  toJSON(message: CDOTAClientMsgPlayerBounty): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgPlayerBounty>): CDOTAClientMsgPlayerBounty {
    return CDOTAClientMsgPlayerBounty.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgPlayerBounty>): CDOTAClientMsgPlayerBounty {
    const message = createBaseCDOTAClientMsgPlayerBounty();
    message.playerId = object.playerId ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgEventPointsTip(): CDOTAClientMsgEventPointsTip {
  return { recipientPlayerId: 0 };
}

export const CDOTAClientMsgEventPointsTip = {
  encode(message: CDOTAClientMsgEventPointsTip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recipientPlayerId !== 0) {
      writer.uint32(8).int32(message.recipientPlayerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgEventPointsTip {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgEventPointsTip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.recipientPlayerId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgEventPointsTip {
    return { recipientPlayerId: isSet(object.recipientPlayerId) ? Number(object.recipientPlayerId) : 0 };
  },

  toJSON(message: CDOTAClientMsgEventPointsTip): unknown {
    const obj: any = {};
    message.recipientPlayerId !== undefined && (obj.recipientPlayerId = Math.round(message.recipientPlayerId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgEventPointsTip>): CDOTAClientMsgEventPointsTip {
    return CDOTAClientMsgEventPointsTip.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgEventPointsTip>): CDOTAClientMsgEventPointsTip {
    const message = createBaseCDOTAClientMsgEventPointsTip();
    message.recipientPlayerId = object.recipientPlayerId ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgExecuteOrders(): CDOTAClientMsgExecuteOrders {
  return { orders: [] };
}

export const CDOTAClientMsgExecuteOrders = {
  encode(message: CDOTAClientMsgExecuteOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      CDOTAMsgUnitOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgExecuteOrders {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgExecuteOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.orders.push(CDOTAMsgUnitOrder.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgExecuteOrders {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => CDOTAMsgUnitOrder.fromJSON(e)) : [],
    };
  },

  toJSON(message: CDOTAClientMsgExecuteOrders): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => e ? CDOTAMsgUnitOrder.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgExecuteOrders>): CDOTAClientMsgExecuteOrders {
    return CDOTAClientMsgExecuteOrders.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgExecuteOrders>): CDOTAClientMsgExecuteOrders {
    const message = createBaseCDOTAClientMsgExecuteOrders();
    message.orders = object.orders?.map((e) => CDOTAMsgUnitOrder.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCDOTAClientMsgXPAlert(): CDOTAClientMsgXPAlert {
  return { targetEntindex: 0, damageTaken: 0 };
}

export const CDOTAClientMsgXPAlert = {
  encode(message: CDOTAClientMsgXPAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetEntindex !== 0) {
      writer.uint32(8).int32(message.targetEntindex);
    }
    if (message.damageTaken !== 0) {
      writer.uint32(16).uint32(message.damageTaken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgXPAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgXPAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.targetEntindex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.damageTaken = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgXPAlert {
    return {
      targetEntindex: isSet(object.targetEntindex) ? Number(object.targetEntindex) : 0,
      damageTaken: isSet(object.damageTaken) ? Number(object.damageTaken) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgXPAlert): unknown {
    const obj: any = {};
    message.targetEntindex !== undefined && (obj.targetEntindex = Math.round(message.targetEntindex));
    message.damageTaken !== undefined && (obj.damageTaken = Math.round(message.damageTaken));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgXPAlert>): CDOTAClientMsgXPAlert {
    return CDOTAClientMsgXPAlert.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgXPAlert>): CDOTAClientMsgXPAlert {
    const message = createBaseCDOTAClientMsgXPAlert();
    message.targetEntindex = object.targetEntindex ?? 0;
    message.damageTaken = object.damageTaken ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgTalentTreeAlert(): CDOTAClientMsgTalentTreeAlert {
  return { targetEntindex: 0, abilityId: 0, slot: 0, learned: false };
}

export const CDOTAClientMsgTalentTreeAlert = {
  encode(message: CDOTAClientMsgTalentTreeAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetEntindex !== 0) {
      writer.uint32(8).int32(message.targetEntindex);
    }
    if (message.abilityId !== 0) {
      writer.uint32(16).int32(message.abilityId);
    }
    if (message.slot !== 0) {
      writer.uint32(24).int32(message.slot);
    }
    if (message.learned === true) {
      writer.uint32(32).bool(message.learned);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgTalentTreeAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgTalentTreeAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.targetEntindex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.abilityId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.slot = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.learned = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgTalentTreeAlert {
    return {
      targetEntindex: isSet(object.targetEntindex) ? Number(object.targetEntindex) : 0,
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      slot: isSet(object.slot) ? Number(object.slot) : 0,
      learned: isSet(object.learned) ? Boolean(object.learned) : false,
    };
  },

  toJSON(message: CDOTAClientMsgTalentTreeAlert): unknown {
    const obj: any = {};
    message.targetEntindex !== undefined && (obj.targetEntindex = Math.round(message.targetEntindex));
    message.abilityId !== undefined && (obj.abilityId = Math.round(message.abilityId));
    message.slot !== undefined && (obj.slot = Math.round(message.slot));
    message.learned !== undefined && (obj.learned = message.learned);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgTalentTreeAlert>): CDOTAClientMsgTalentTreeAlert {
    return CDOTAClientMsgTalentTreeAlert.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgTalentTreeAlert>): CDOTAClientMsgTalentTreeAlert {
    const message = createBaseCDOTAClientMsgTalentTreeAlert();
    message.targetEntindex = object.targetEntindex ?? 0;
    message.abilityId = object.abilityId ?? 0;
    message.slot = object.slot ?? 0;
    message.learned = object.learned ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgKillcamDamageTaken(): CDOTAClientMsgKillcamDamageTaken {
  return { targetEntindex: 0, damageTaken: 0, itemType: 0, itemAbilityId: 0, heroName: "", damageColor: "" };
}

export const CDOTAClientMsgKillcamDamageTaken = {
  encode(message: CDOTAClientMsgKillcamDamageTaken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetEntindex !== 0) {
      writer.uint32(8).int32(message.targetEntindex);
    }
    if (message.damageTaken !== 0) {
      writer.uint32(16).uint32(message.damageTaken);
    }
    if (message.itemType !== 0) {
      writer.uint32(24).uint32(message.itemType);
    }
    if (message.itemAbilityId !== 0) {
      writer.uint32(32).int32(message.itemAbilityId);
    }
    if (message.heroName !== "") {
      writer.uint32(42).string(message.heroName);
    }
    if (message.damageColor !== "") {
      writer.uint32(50).string(message.damageColor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgKillcamDamageTaken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgKillcamDamageTaken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.targetEntindex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.damageTaken = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.itemType = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.itemAbilityId = reader.int32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.heroName = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.damageColor = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgKillcamDamageTaken {
    return {
      targetEntindex: isSet(object.targetEntindex) ? Number(object.targetEntindex) : 0,
      damageTaken: isSet(object.damageTaken) ? Number(object.damageTaken) : 0,
      itemType: isSet(object.itemType) ? Number(object.itemType) : 0,
      itemAbilityId: isSet(object.itemAbilityId) ? Number(object.itemAbilityId) : 0,
      heroName: isSet(object.heroName) ? String(object.heroName) : "",
      damageColor: isSet(object.damageColor) ? String(object.damageColor) : "",
    };
  },

  toJSON(message: CDOTAClientMsgKillcamDamageTaken): unknown {
    const obj: any = {};
    message.targetEntindex !== undefined && (obj.targetEntindex = Math.round(message.targetEntindex));
    message.damageTaken !== undefined && (obj.damageTaken = Math.round(message.damageTaken));
    message.itemType !== undefined && (obj.itemType = Math.round(message.itemType));
    message.itemAbilityId !== undefined && (obj.itemAbilityId = Math.round(message.itemAbilityId));
    message.heroName !== undefined && (obj.heroName = message.heroName);
    message.damageColor !== undefined && (obj.damageColor = message.damageColor);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgKillcamDamageTaken>): CDOTAClientMsgKillcamDamageTaken {
    return CDOTAClientMsgKillcamDamageTaken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgKillcamDamageTaken>): CDOTAClientMsgKillcamDamageTaken {
    const message = createBaseCDOTAClientMsgKillcamDamageTaken();
    message.targetEntindex = object.targetEntindex ?? 0;
    message.damageTaken = object.damageTaken ?? 0;
    message.itemType = object.itemType ?? 0;
    message.itemAbilityId = object.itemAbilityId ?? 0;
    message.heroName = object.heroName ?? "";
    message.damageColor = object.damageColor ?? "";
    return message;
  },
};

function createBaseCDOTAClientMsgKillMyHero(): CDOTAClientMsgKillMyHero {
  return {};
}

export const CDOTAClientMsgKillMyHero = {
  encode(_: CDOTAClientMsgKillMyHero, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgKillMyHero {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgKillMyHero();
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

  fromJSON(_: any): CDOTAClientMsgKillMyHero {
    return {};
  },

  toJSON(_: CDOTAClientMsgKillMyHero): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgKillMyHero>): CDOTAClientMsgKillMyHero {
    return CDOTAClientMsgKillMyHero.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CDOTAClientMsgKillMyHero>): CDOTAClientMsgKillMyHero {
    const message = createBaseCDOTAClientMsgKillMyHero();
    return message;
  },
};

function createBaseCDOTAClientMsgQuestStatus(): CDOTAClientMsgQuestStatus {
  return { questId: 0, challengeId: 0, progress: 0, goal: 0, query: 0, failGametime: 0, itemAbilityId: 0 };
}

export const CDOTAClientMsgQuestStatus = {
  encode(message: CDOTAClientMsgQuestStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.questId !== 0) {
      writer.uint32(8).uint32(message.questId);
    }
    if (message.challengeId !== 0) {
      writer.uint32(16).uint32(message.challengeId);
    }
    if (message.progress !== 0) {
      writer.uint32(24).uint32(message.progress);
    }
    if (message.goal !== 0) {
      writer.uint32(32).uint32(message.goal);
    }
    if (message.query !== 0) {
      writer.uint32(40).uint32(message.query);
    }
    if (message.failGametime !== 0) {
      writer.uint32(53).float(message.failGametime);
    }
    if (message.itemAbilityId !== 0) {
      writer.uint32(56).int32(message.itemAbilityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgQuestStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgQuestStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.questId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.challengeId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.progress = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.goal = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.query = reader.uint32();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.failGametime = reader.float();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.itemAbilityId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgQuestStatus {
    return {
      questId: isSet(object.questId) ? Number(object.questId) : 0,
      challengeId: isSet(object.challengeId) ? Number(object.challengeId) : 0,
      progress: isSet(object.progress) ? Number(object.progress) : 0,
      goal: isSet(object.goal) ? Number(object.goal) : 0,
      query: isSet(object.query) ? Number(object.query) : 0,
      failGametime: isSet(object.failGametime) ? Number(object.failGametime) : 0,
      itemAbilityId: isSet(object.itemAbilityId) ? Number(object.itemAbilityId) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgQuestStatus): unknown {
    const obj: any = {};
    message.questId !== undefined && (obj.questId = Math.round(message.questId));
    message.challengeId !== undefined && (obj.challengeId = Math.round(message.challengeId));
    message.progress !== undefined && (obj.progress = Math.round(message.progress));
    message.goal !== undefined && (obj.goal = Math.round(message.goal));
    message.query !== undefined && (obj.query = Math.round(message.query));
    message.failGametime !== undefined && (obj.failGametime = message.failGametime);
    message.itemAbilityId !== undefined && (obj.itemAbilityId = Math.round(message.itemAbilityId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgQuestStatus>): CDOTAClientMsgQuestStatus {
    return CDOTAClientMsgQuestStatus.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgQuestStatus>): CDOTAClientMsgQuestStatus {
    const message = createBaseCDOTAClientMsgQuestStatus();
    message.questId = object.questId ?? 0;
    message.challengeId = object.challengeId ?? 0;
    message.progress = object.progress ?? 0;
    message.goal = object.goal ?? 0;
    message.query = object.query ?? 0;
    message.failGametime = object.failGametime ?? 0;
    message.itemAbilityId = object.itemAbilityId ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgToggleAutoattack(): CDOTAClientMsgToggleAutoattack {
  return { mode: 0, showMessage: false };
}

export const CDOTAClientMsgToggleAutoattack = {
  encode(message: CDOTAClientMsgToggleAutoattack, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.showMessage === true) {
      writer.uint32(16).bool(message.showMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgToggleAutoattack {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgToggleAutoattack();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.mode = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.showMessage = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgToggleAutoattack {
    return {
      mode: isSet(object.mode) ? Number(object.mode) : 0,
      showMessage: isSet(object.showMessage) ? Boolean(object.showMessage) : false,
    };
  },

  toJSON(message: CDOTAClientMsgToggleAutoattack): unknown {
    const obj: any = {};
    message.mode !== undefined && (obj.mode = Math.round(message.mode));
    message.showMessage !== undefined && (obj.showMessage = message.showMessage);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgToggleAutoattack>): CDOTAClientMsgToggleAutoattack {
    return CDOTAClientMsgToggleAutoattack.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgToggleAutoattack>): CDOTAClientMsgToggleAutoattack {
    const message = createBaseCDOTAClientMsgToggleAutoattack();
    message.mode = object.mode ?? 0;
    message.showMessage = object.showMessage ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgSpecialAbility(): CDOTAClientMsgSpecialAbility {
  return { abilityIndex: 0, targetEntindex: 0 };
}

export const CDOTAClientMsgSpecialAbility = {
  encode(message: CDOTAClientMsgSpecialAbility, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.abilityIndex !== 0) {
      writer.uint32(8).uint32(message.abilityIndex);
    }
    if (message.targetEntindex !== 0) {
      writer.uint32(16).int32(message.targetEntindex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgSpecialAbility {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgSpecialAbility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.abilityIndex = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetEntindex = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgSpecialAbility {
    return {
      abilityIndex: isSet(object.abilityIndex) ? Number(object.abilityIndex) : 0,
      targetEntindex: isSet(object.targetEntindex) ? Number(object.targetEntindex) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgSpecialAbility): unknown {
    const obj: any = {};
    message.abilityIndex !== undefined && (obj.abilityIndex = Math.round(message.abilityIndex));
    message.targetEntindex !== undefined && (obj.targetEntindex = Math.round(message.targetEntindex));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgSpecialAbility>): CDOTAClientMsgSpecialAbility {
    return CDOTAClientMsgSpecialAbility.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgSpecialAbility>): CDOTAClientMsgSpecialAbility {
    const message = createBaseCDOTAClientMsgSpecialAbility();
    message.abilityIndex = object.abilityIndex ?? 0;
    message.targetEntindex = object.targetEntindex ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgSetEnemyStartingPosition(): CDOTAClientMsgSetEnemyStartingPosition {
  return { enemyPlayerId: 0, enemyStartingPosition: 0 };
}

export const CDOTAClientMsgSetEnemyStartingPosition = {
  encode(message: CDOTAClientMsgSetEnemyStartingPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enemyPlayerId !== 0) {
      writer.uint32(8).int32(message.enemyPlayerId);
    }
    if (message.enemyStartingPosition !== 0) {
      writer.uint32(16).uint32(message.enemyStartingPosition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgSetEnemyStartingPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgSetEnemyStartingPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.enemyPlayerId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.enemyStartingPosition = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgSetEnemyStartingPosition {
    return {
      enemyPlayerId: isSet(object.enemyPlayerId) ? Number(object.enemyPlayerId) : 0,
      enemyStartingPosition: isSet(object.enemyStartingPosition) ? Number(object.enemyStartingPosition) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgSetEnemyStartingPosition): unknown {
    const obj: any = {};
    message.enemyPlayerId !== undefined && (obj.enemyPlayerId = Math.round(message.enemyPlayerId));
    message.enemyStartingPosition !== undefined &&
      (obj.enemyStartingPosition = Math.round(message.enemyStartingPosition));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgSetEnemyStartingPosition>): CDOTAClientMsgSetEnemyStartingPosition {
    return CDOTAClientMsgSetEnemyStartingPosition.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgSetEnemyStartingPosition>): CDOTAClientMsgSetEnemyStartingPosition {
    const message = createBaseCDOTAClientMsgSetEnemyStartingPosition();
    message.enemyPlayerId = object.enemyPlayerId ?? 0;
    message.enemyStartingPosition = object.enemyStartingPosition ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgSetDesiredWardPlacement(): CDOTAClientMsgSetDesiredWardPlacement {
  return { wardIndex: 0, wardX: 0, wardY: 0 };
}

export const CDOTAClientMsgSetDesiredWardPlacement = {
  encode(message: CDOTAClientMsgSetDesiredWardPlacement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wardIndex !== 0) {
      writer.uint32(8).uint32(message.wardIndex);
    }
    if (message.wardX !== 0) {
      writer.uint32(21).float(message.wardX);
    }
    if (message.wardY !== 0) {
      writer.uint32(29).float(message.wardY);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgSetDesiredWardPlacement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgSetDesiredWardPlacement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.wardIndex = reader.uint32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.wardX = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.wardY = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgSetDesiredWardPlacement {
    return {
      wardIndex: isSet(object.wardIndex) ? Number(object.wardIndex) : 0,
      wardX: isSet(object.wardX) ? Number(object.wardX) : 0,
      wardY: isSet(object.wardY) ? Number(object.wardY) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgSetDesiredWardPlacement): unknown {
    const obj: any = {};
    message.wardIndex !== undefined && (obj.wardIndex = Math.round(message.wardIndex));
    message.wardX !== undefined && (obj.wardX = message.wardX);
    message.wardY !== undefined && (obj.wardY = message.wardY);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgSetDesiredWardPlacement>): CDOTAClientMsgSetDesiredWardPlacement {
    return CDOTAClientMsgSetDesiredWardPlacement.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgSetDesiredWardPlacement>): CDOTAClientMsgSetDesiredWardPlacement {
    const message = createBaseCDOTAClientMsgSetDesiredWardPlacement();
    message.wardIndex = object.wardIndex ?? 0;
    message.wardX = object.wardX ?? 0;
    message.wardY = object.wardY ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgRollDice(): CDOTAClientMsgRollDice {
  return { channelType: 0, rollMin: 0, rollMax: 0 };
}

export const CDOTAClientMsgRollDice = {
  encode(message: CDOTAClientMsgRollDice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelType !== 0) {
      writer.uint32(8).uint32(message.channelType);
    }
    if (message.rollMin !== 0) {
      writer.uint32(16).uint32(message.rollMin);
    }
    if (message.rollMax !== 0) {
      writer.uint32(24).uint32(message.rollMax);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgRollDice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgRollDice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.channelType = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.rollMin = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.rollMax = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgRollDice {
    return {
      channelType: isSet(object.channelType) ? Number(object.channelType) : 0,
      rollMin: isSet(object.rollMin) ? Number(object.rollMin) : 0,
      rollMax: isSet(object.rollMax) ? Number(object.rollMax) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgRollDice): unknown {
    const obj: any = {};
    message.channelType !== undefined && (obj.channelType = Math.round(message.channelType));
    message.rollMin !== undefined && (obj.rollMin = Math.round(message.rollMin));
    message.rollMax !== undefined && (obj.rollMax = Math.round(message.rollMax));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgRollDice>): CDOTAClientMsgRollDice {
    return CDOTAClientMsgRollDice.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgRollDice>): CDOTAClientMsgRollDice {
    const message = createBaseCDOTAClientMsgRollDice();
    message.channelType = object.channelType ?? 0;
    message.rollMin = object.rollMin ?? 0;
    message.rollMax = object.rollMax ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgFlipCoin(): CDOTAClientMsgFlipCoin {
  return { channelType: 0 };
}

export const CDOTAClientMsgFlipCoin = {
  encode(message: CDOTAClientMsgFlipCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelType !== 0) {
      writer.uint32(8).uint32(message.channelType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgFlipCoin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgFlipCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.channelType = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgFlipCoin {
    return { channelType: isSet(object.channelType) ? Number(object.channelType) : 0 };
  },

  toJSON(message: CDOTAClientMsgFlipCoin): unknown {
    const obj: any = {};
    message.channelType !== undefined && (obj.channelType = Math.round(message.channelType));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgFlipCoin>): CDOTAClientMsgFlipCoin {
    return CDOTAClientMsgFlipCoin.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgFlipCoin>): CDOTAClientMsgFlipCoin {
    const message = createBaseCDOTAClientMsgFlipCoin();
    message.channelType = object.channelType ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgRequestItemSuggestions(): CDOTAClientMsgRequestItemSuggestions {
  return {};
}

export const CDOTAClientMsgRequestItemSuggestions = {
  encode(_: CDOTAClientMsgRequestItemSuggestions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgRequestItemSuggestions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgRequestItemSuggestions();
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

  fromJSON(_: any): CDOTAClientMsgRequestItemSuggestions {
    return {};
  },

  toJSON(_: CDOTAClientMsgRequestItemSuggestions): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgRequestItemSuggestions>): CDOTAClientMsgRequestItemSuggestions {
    return CDOTAClientMsgRequestItemSuggestions.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CDOTAClientMsgRequestItemSuggestions>): CDOTAClientMsgRequestItemSuggestions {
    const message = createBaseCDOTAClientMsgRequestItemSuggestions();
    return message;
  },
};

function createBaseCDOTAClientMsgMakeTeamCaptain(): CDOTAClientMsgMakeTeamCaptain {
  return { playerId: 0 };
}

export const CDOTAClientMsgMakeTeamCaptain = {
  encode(message: CDOTAClientMsgMakeTeamCaptain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgMakeTeamCaptain {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgMakeTeamCaptain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgMakeTeamCaptain {
    return { playerId: isSet(object.playerId) ? Number(object.playerId) : 0 };
  },

  toJSON(message: CDOTAClientMsgMakeTeamCaptain): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgMakeTeamCaptain>): CDOTAClientMsgMakeTeamCaptain {
    return CDOTAClientMsgMakeTeamCaptain.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgMakeTeamCaptain>): CDOTAClientMsgMakeTeamCaptain {
    const message = createBaseCDOTAClientMsgMakeTeamCaptain();
    message.playerId = object.playerId ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgHelpTipSystemStateChanged(): CDOTAClientMsgHelpTipSystemStateChanged {
  return { tipDisplayed: false };
}

export const CDOTAClientMsgHelpTipSystemStateChanged = {
  encode(message: CDOTAClientMsgHelpTipSystemStateChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tipDisplayed === true) {
      writer.uint32(8).bool(message.tipDisplayed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgHelpTipSystemStateChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgHelpTipSystemStateChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.tipDisplayed = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgHelpTipSystemStateChanged {
    return { tipDisplayed: isSet(object.tipDisplayed) ? Boolean(object.tipDisplayed) : false };
  },

  toJSON(message: CDOTAClientMsgHelpTipSystemStateChanged): unknown {
    const obj: any = {};
    message.tipDisplayed !== undefined && (obj.tipDisplayed = message.tipDisplayed);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgHelpTipSystemStateChanged>): CDOTAClientMsgHelpTipSystemStateChanged {
    return CDOTAClientMsgHelpTipSystemStateChanged.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgHelpTipSystemStateChanged>): CDOTAClientMsgHelpTipSystemStateChanged {
    const message = createBaseCDOTAClientMsgHelpTipSystemStateChanged();
    message.tipDisplayed = object.tipDisplayed ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgRequestBulkCombatLog(): CDOTAClientMsgRequestBulkCombatLog {
  return { gameTime: 0, duration: 0, recentPlayerDeath: false, playerId: 0 };
}

export const CDOTAClientMsgRequestBulkCombatLog = {
  encode(message: CDOTAClientMsgRequestBulkCombatLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameTime !== 0) {
      writer.uint32(13).float(message.gameTime);
    }
    if (message.duration !== 0) {
      writer.uint32(21).float(message.duration);
    }
    if (message.recentPlayerDeath === true) {
      writer.uint32(24).bool(message.recentPlayerDeath);
    }
    if (message.playerId !== 0) {
      writer.uint32(32).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgRequestBulkCombatLog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgRequestBulkCombatLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.gameTime = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.duration = reader.float();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.recentPlayerDeath = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.playerId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgRequestBulkCombatLog {
    return {
      gameTime: isSet(object.gameTime) ? Number(object.gameTime) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      recentPlayerDeath: isSet(object.recentPlayerDeath) ? Boolean(object.recentPlayerDeath) : false,
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgRequestBulkCombatLog): unknown {
    const obj: any = {};
    message.gameTime !== undefined && (obj.gameTime = message.gameTime);
    message.duration !== undefined && (obj.duration = message.duration);
    message.recentPlayerDeath !== undefined && (obj.recentPlayerDeath = message.recentPlayerDeath);
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgRequestBulkCombatLog>): CDOTAClientMsgRequestBulkCombatLog {
    return CDOTAClientMsgRequestBulkCombatLog.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgRequestBulkCombatLog>): CDOTAClientMsgRequestBulkCombatLog {
    const message = createBaseCDOTAClientMsgRequestBulkCombatLog();
    message.gameTime = object.gameTime ?? 0;
    message.duration = object.duration ?? 0;
    message.recentPlayerDeath = object.recentPlayerDeath ?? false;
    message.playerId = object.playerId ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgAbilityDraftRequestAbility(): CDOTAClientMsgAbilityDraftRequestAbility {
  return { requestedAbilityId: 0, ctrlIsDown: false };
}

export const CDOTAClientMsgAbilityDraftRequestAbility = {
  encode(message: CDOTAClientMsgAbilityDraftRequestAbility, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestedAbilityId !== 0) {
      writer.uint32(8).int32(message.requestedAbilityId);
    }
    if (message.ctrlIsDown === true) {
      writer.uint32(16).bool(message.ctrlIsDown);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgAbilityDraftRequestAbility {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgAbilityDraftRequestAbility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.requestedAbilityId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.ctrlIsDown = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgAbilityDraftRequestAbility {
    return {
      requestedAbilityId: isSet(object.requestedAbilityId) ? Number(object.requestedAbilityId) : 0,
      ctrlIsDown: isSet(object.ctrlIsDown) ? Boolean(object.ctrlIsDown) : false,
    };
  },

  toJSON(message: CDOTAClientMsgAbilityDraftRequestAbility): unknown {
    const obj: any = {};
    message.requestedAbilityId !== undefined && (obj.requestedAbilityId = Math.round(message.requestedAbilityId));
    message.ctrlIsDown !== undefined && (obj.ctrlIsDown = message.ctrlIsDown);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgAbilityDraftRequestAbility>): CDOTAClientMsgAbilityDraftRequestAbility {
    return CDOTAClientMsgAbilityDraftRequestAbility.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgAbilityDraftRequestAbility>): CDOTAClientMsgAbilityDraftRequestAbility {
    const message = createBaseCDOTAClientMsgAbilityDraftRequestAbility();
    message.requestedAbilityId = object.requestedAbilityId ?? 0;
    message.ctrlIsDown = object.ctrlIsDown ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgGuideSelectOption(): CDOTAClientMsgGuideSelectOption {
  return { option: 0, forceRecalculate: false };
}

export const CDOTAClientMsgGuideSelectOption = {
  encode(message: CDOTAClientMsgGuideSelectOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.option !== 0) {
      writer.uint32(8).uint32(message.option);
    }
    if (message.forceRecalculate === true) {
      writer.uint32(16).bool(message.forceRecalculate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgGuideSelectOption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgGuideSelectOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.option = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.forceRecalculate = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgGuideSelectOption {
    return {
      option: isSet(object.option) ? Number(object.option) : 0,
      forceRecalculate: isSet(object.forceRecalculate) ? Boolean(object.forceRecalculate) : false,
    };
  },

  toJSON(message: CDOTAClientMsgGuideSelectOption): unknown {
    const obj: any = {};
    message.option !== undefined && (obj.option = Math.round(message.option));
    message.forceRecalculate !== undefined && (obj.forceRecalculate = message.forceRecalculate);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgGuideSelectOption>): CDOTAClientMsgGuideSelectOption {
    return CDOTAClientMsgGuideSelectOption.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgGuideSelectOption>): CDOTAClientMsgGuideSelectOption {
    const message = createBaseCDOTAClientMsgGuideSelectOption();
    message.option = object.option ?? 0;
    message.forceRecalculate = object.forceRecalculate ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgGuideSelected(): CDOTAClientMsgGuideSelected {
  return { guideWorkshopId: "0", isPlusGuide: false };
}

export const CDOTAClientMsgGuideSelected = {
  encode(message: CDOTAClientMsgGuideSelected, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guideWorkshopId !== "0") {
      writer.uint32(8).uint64(message.guideWorkshopId);
    }
    if (message.isPlusGuide === true) {
      writer.uint32(16).bool(message.isPlusGuide);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgGuideSelected {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgGuideSelected();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guideWorkshopId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.isPlusGuide = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgGuideSelected {
    return {
      guideWorkshopId: isSet(object.guideWorkshopId) ? String(object.guideWorkshopId) : "0",
      isPlusGuide: isSet(object.isPlusGuide) ? Boolean(object.isPlusGuide) : false,
    };
  },

  toJSON(message: CDOTAClientMsgGuideSelected): unknown {
    const obj: any = {};
    message.guideWorkshopId !== undefined && (obj.guideWorkshopId = message.guideWorkshopId);
    message.isPlusGuide !== undefined && (obj.isPlusGuide = message.isPlusGuide);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgGuideSelected>): CDOTAClientMsgGuideSelected {
    return CDOTAClientMsgGuideSelected.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgGuideSelected>): CDOTAClientMsgGuideSelected {
    const message = createBaseCDOTAClientMsgGuideSelected();
    message.guideWorkshopId = object.guideWorkshopId ?? "0";
    message.isPlusGuide = object.isPlusGuide ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgDamageReport(): CDOTAClientMsgDamageReport {
  return { targetHeroId: 0, sourceHeroId: 0, damageAmount: 0, broadcast: false };
}

export const CDOTAClientMsgDamageReport = {
  encode(message: CDOTAClientMsgDamageReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetHeroId !== 0) {
      writer.uint32(8).uint32(message.targetHeroId);
    }
    if (message.sourceHeroId !== 0) {
      writer.uint32(16).uint32(message.sourceHeroId);
    }
    if (message.damageAmount !== 0) {
      writer.uint32(24).int32(message.damageAmount);
    }
    if (message.broadcast === true) {
      writer.uint32(32).bool(message.broadcast);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgDamageReport {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgDamageReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.targetHeroId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.sourceHeroId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.damageAmount = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.broadcast = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgDamageReport {
    return {
      targetHeroId: isSet(object.targetHeroId) ? Number(object.targetHeroId) : 0,
      sourceHeroId: isSet(object.sourceHeroId) ? Number(object.sourceHeroId) : 0,
      damageAmount: isSet(object.damageAmount) ? Number(object.damageAmount) : 0,
      broadcast: isSet(object.broadcast) ? Boolean(object.broadcast) : false,
    };
  },

  toJSON(message: CDOTAClientMsgDamageReport): unknown {
    const obj: any = {};
    message.targetHeroId !== undefined && (obj.targetHeroId = Math.round(message.targetHeroId));
    message.sourceHeroId !== undefined && (obj.sourceHeroId = Math.round(message.sourceHeroId));
    message.damageAmount !== undefined && (obj.damageAmount = Math.round(message.damageAmount));
    message.broadcast !== undefined && (obj.broadcast = message.broadcast);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgDamageReport>): CDOTAClientMsgDamageReport {
    return CDOTAClientMsgDamageReport.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgDamageReport>): CDOTAClientMsgDamageReport {
    const message = createBaseCDOTAClientMsgDamageReport();
    message.targetHeroId = object.targetHeroId ?? 0;
    message.sourceHeroId = object.sourceHeroId ?? 0;
    message.damageAmount = object.damageAmount ?? 0;
    message.broadcast = object.broadcast ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgSalutePlayer(): CDOTAClientMsgSalutePlayer {
  return { targetPlayerId: 0, eventId: 0 };
}

export const CDOTAClientMsgSalutePlayer = {
  encode(message: CDOTAClientMsgSalutePlayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetPlayerId !== 0) {
      writer.uint32(8).int32(message.targetPlayerId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).int32(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgSalutePlayer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgSalutePlayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.targetPlayerId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.eventId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgSalutePlayer {
    return {
      targetPlayerId: isSet(object.targetPlayerId) ? Number(object.targetPlayerId) : 0,
      eventId: isSet(object.eventId) ? Number(object.eventId) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgSalutePlayer): unknown {
    const obj: any = {};
    message.targetPlayerId !== undefined && (obj.targetPlayerId = Math.round(message.targetPlayerId));
    message.eventId !== undefined && (obj.eventId = Math.round(message.eventId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgSalutePlayer>): CDOTAClientMsgSalutePlayer {
    return CDOTAClientMsgSalutePlayer.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgSalutePlayer>): CDOTAClientMsgSalutePlayer {
    const message = createBaseCDOTAClientMsgSalutePlayer();
    message.targetPlayerId = object.targetPlayerId ?? 0;
    message.eventId = object.eventId ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgTipAlert(): CDOTAClientMsgTipAlert {
  return { tipText: "" };
}

export const CDOTAClientMsgTipAlert = {
  encode(message: CDOTAClientMsgTipAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tipText !== "") {
      writer.uint32(10).string(message.tipText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgTipAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgTipAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.tipText = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgTipAlert {
    return { tipText: isSet(object.tipText) ? String(object.tipText) : "" };
  },

  toJSON(message: CDOTAClientMsgTipAlert): unknown {
    const obj: any = {};
    message.tipText !== undefined && (obj.tipText = message.tipText);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgTipAlert>): CDOTAClientMsgTipAlert {
    return CDOTAClientMsgTipAlert.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgTipAlert>): CDOTAClientMsgTipAlert {
    const message = createBaseCDOTAClientMsgTipAlert();
    message.tipText = object.tipText ?? "";
    return message;
  },
};

function createBaseCDOTAClientMsgEmptyTeleportAlert(): CDOTAClientMsgEmptyTeleportAlert {
  return { targetEntindex: 0 };
}

export const CDOTAClientMsgEmptyTeleportAlert = {
  encode(message: CDOTAClientMsgEmptyTeleportAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetEntindex !== 0) {
      writer.uint32(8).int32(message.targetEntindex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgEmptyTeleportAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgEmptyTeleportAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.targetEntindex = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgEmptyTeleportAlert {
    return { targetEntindex: isSet(object.targetEntindex) ? Number(object.targetEntindex) : 0 };
  },

  toJSON(message: CDOTAClientMsgEmptyTeleportAlert): unknown {
    const obj: any = {};
    message.targetEntindex !== undefined && (obj.targetEntindex = Math.round(message.targetEntindex));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgEmptyTeleportAlert>): CDOTAClientMsgEmptyTeleportAlert {
    return CDOTAClientMsgEmptyTeleportAlert.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgEmptyTeleportAlert>): CDOTAClientMsgEmptyTeleportAlert {
    const message = createBaseCDOTAClientMsgEmptyTeleportAlert();
    message.targetEntindex = object.targetEntindex ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgSetCavernMapVariant(): CDOTAClientMsgSetCavernMapVariant {
  return { mapVariant: 0 };
}

export const CDOTAClientMsgSetCavernMapVariant = {
  encode(message: CDOTAClientMsgSetCavernMapVariant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapVariant !== 0) {
      writer.uint32(8).uint32(message.mapVariant);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgSetCavernMapVariant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgSetCavernMapVariant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.mapVariant = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgSetCavernMapVariant {
    return { mapVariant: isSet(object.mapVariant) ? Number(object.mapVariant) : 0 };
  },

  toJSON(message: CDOTAClientMsgSetCavernMapVariant): unknown {
    const obj: any = {};
    message.mapVariant !== undefined && (obj.mapVariant = Math.round(message.mapVariant));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgSetCavernMapVariant>): CDOTAClientMsgSetCavernMapVariant {
    return CDOTAClientMsgSetCavernMapVariant.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgSetCavernMapVariant>): CDOTAClientMsgSetCavernMapVariant {
    const message = createBaseCDOTAClientMsgSetCavernMapVariant();
    message.mapVariant = object.mapVariant ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgPauseGameOrder(): CDOTAClientMsgPauseGameOrder {
  return { orderId: 0, data: 0 };
}

export const CDOTAClientMsgPauseGameOrder = {
  encode(message: CDOTAClientMsgPauseGameOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== 0) {
      writer.uint32(8).int32(message.orderId);
    }
    if (message.data !== 0) {
      writer.uint32(16).int32(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgPauseGameOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgPauseGameOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.orderId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.data = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgPauseGameOrder {
    return {
      orderId: isSet(object.orderId) ? Number(object.orderId) : 0,
      data: isSet(object.data) ? Number(object.data) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgPauseGameOrder): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = Math.round(message.orderId));
    message.data !== undefined && (obj.data = Math.round(message.data));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgPauseGameOrder>): CDOTAClientMsgPauseGameOrder {
    return CDOTAClientMsgPauseGameOrder.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgPauseGameOrder>): CDOTAClientMsgPauseGameOrder {
    const message = createBaseCDOTAClientMsgPauseGameOrder();
    message.orderId = object.orderId ?? 0;
    message.data = object.data ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgVersusScenePlayerBehavior(): CDOTAClientMsgVersusScenePlayerBehavior {
  return { behavior: 1, playActivity: undefined, chatWheel: undefined, playbackRate: undefined };
}

export const CDOTAClientMsgVersusScenePlayerBehavior = {
  encode(message: CDOTAClientMsgVersusScenePlayerBehavior, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.behavior !== 1) {
      writer.uint32(8).int32(message.behavior);
    }
    if (message.playActivity !== undefined) {
      VersusScenePlayActivity.encode(message.playActivity, writer.uint32(18).fork()).ldelim();
    }
    if (message.chatWheel !== undefined) {
      VersusSceneChatWheel.encode(message.chatWheel, writer.uint32(26).fork()).ldelim();
    }
    if (message.playbackRate !== undefined) {
      VersusScenePlaybackRate.encode(message.playbackRate, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgVersusScenePlayerBehavior {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgVersusScenePlayerBehavior();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.behavior = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.playActivity = VersusScenePlayActivity.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.chatWheel = VersusSceneChatWheel.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.playbackRate = VersusScenePlaybackRate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgVersusScenePlayerBehavior {
    return {
      behavior: isSet(object.behavior) ? eDOTAVersusScenePlayerBehaviorFromJSON(object.behavior) : 1,
      playActivity: isSet(object.playActivity) ? VersusScenePlayActivity.fromJSON(object.playActivity) : undefined,
      chatWheel: isSet(object.chatWheel) ? VersusSceneChatWheel.fromJSON(object.chatWheel) : undefined,
      playbackRate: isSet(object.playbackRate) ? VersusScenePlaybackRate.fromJSON(object.playbackRate) : undefined,
    };
  },

  toJSON(message: CDOTAClientMsgVersusScenePlayerBehavior): unknown {
    const obj: any = {};
    message.behavior !== undefined && (obj.behavior = eDOTAVersusScenePlayerBehaviorToJSON(message.behavior));
    message.playActivity !== undefined &&
      (obj.playActivity = message.playActivity ? VersusScenePlayActivity.toJSON(message.playActivity) : undefined);
    message.chatWheel !== undefined &&
      (obj.chatWheel = message.chatWheel ? VersusSceneChatWheel.toJSON(message.chatWheel) : undefined);
    message.playbackRate !== undefined &&
      (obj.playbackRate = message.playbackRate ? VersusScenePlaybackRate.toJSON(message.playbackRate) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgVersusScenePlayerBehavior>): CDOTAClientMsgVersusScenePlayerBehavior {
    return CDOTAClientMsgVersusScenePlayerBehavior.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgVersusScenePlayerBehavior>): CDOTAClientMsgVersusScenePlayerBehavior {
    const message = createBaseCDOTAClientMsgVersusScenePlayerBehavior();
    message.behavior = object.behavior ?? 1;
    message.playActivity = (object.playActivity !== undefined && object.playActivity !== null)
      ? VersusScenePlayActivity.fromPartial(object.playActivity)
      : undefined;
    message.chatWheel = (object.chatWheel !== undefined && object.chatWheel !== null)
      ? VersusSceneChatWheel.fromPartial(object.chatWheel)
      : undefined;
    message.playbackRate = (object.playbackRate !== undefined && object.playbackRate !== null)
      ? VersusScenePlaybackRate.fromPartial(object.playbackRate)
      : undefined;
    return message;
  },
};

function createBaseCDOTAClientMsgEmptyItemSlotAlert(): CDOTAClientMsgEmptyItemSlotAlert {
  return { targetEntindex: 0, slotIndex: 0 };
}

export const CDOTAClientMsgEmptyItemSlotAlert = {
  encode(message: CDOTAClientMsgEmptyItemSlotAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetEntindex !== 0) {
      writer.uint32(8).int32(message.targetEntindex);
    }
    if (message.slotIndex !== 0) {
      writer.uint32(16).int32(message.slotIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgEmptyItemSlotAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgEmptyItemSlotAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.targetEntindex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.slotIndex = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgEmptyItemSlotAlert {
    return {
      targetEntindex: isSet(object.targetEntindex) ? Number(object.targetEntindex) : 0,
      slotIndex: isSet(object.slotIndex) ? Number(object.slotIndex) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgEmptyItemSlotAlert): unknown {
    const obj: any = {};
    message.targetEntindex !== undefined && (obj.targetEntindex = Math.round(message.targetEntindex));
    message.slotIndex !== undefined && (obj.slotIndex = Math.round(message.slotIndex));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgEmptyItemSlotAlert>): CDOTAClientMsgEmptyItemSlotAlert {
    return CDOTAClientMsgEmptyItemSlotAlert.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgEmptyItemSlotAlert>): CDOTAClientMsgEmptyItemSlotAlert {
    const message = createBaseCDOTAClientMsgEmptyItemSlotAlert();
    message.targetEntindex = object.targetEntindex ?? 0;
    message.slotIndex = object.slotIndex ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgAddOverwatchReportMarker(): CDOTAClientMsgAddOverwatchReportMarker {
  return { targetPlayerId: 0, reason: 0, secondsAgo: 0 };
}

export const CDOTAClientMsgAddOverwatchReportMarker = {
  encode(message: CDOTAClientMsgAddOverwatchReportMarker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetPlayerId !== 0) {
      writer.uint32(8).int32(message.targetPlayerId);
    }
    if (message.reason !== 0) {
      writer.uint32(16).int32(message.reason);
    }
    if (message.secondsAgo !== 0) {
      writer.uint32(32).uint32(message.secondsAgo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgAddOverwatchReportMarker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgAddOverwatchReportMarker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.targetPlayerId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.reason = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.secondsAgo = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgAddOverwatchReportMarker {
    return {
      targetPlayerId: isSet(object.targetPlayerId) ? Number(object.targetPlayerId) : 0,
      reason: isSet(object.reason) ? eOverwatchReportReasonFromJSON(object.reason) : 0,
      secondsAgo: isSet(object.secondsAgo) ? Number(object.secondsAgo) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgAddOverwatchReportMarker): unknown {
    const obj: any = {};
    message.targetPlayerId !== undefined && (obj.targetPlayerId = Math.round(message.targetPlayerId));
    message.reason !== undefined && (obj.reason = eOverwatchReportReasonToJSON(message.reason));
    message.secondsAgo !== undefined && (obj.secondsAgo = Math.round(message.secondsAgo));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgAddOverwatchReportMarker>): CDOTAClientMsgAddOverwatchReportMarker {
    return CDOTAClientMsgAddOverwatchReportMarker.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgAddOverwatchReportMarker>): CDOTAClientMsgAddOverwatchReportMarker {
    const message = createBaseCDOTAClientMsgAddOverwatchReportMarker();
    message.targetPlayerId = object.targetPlayerId ?? 0;
    message.reason = object.reason ?? 0;
    message.secondsAgo = object.secondsAgo ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgAddCommunicationsReportMarker(): CDOTAClientMsgAddCommunicationsReportMarker {
  return { targetPlayerId: 0 };
}

export const CDOTAClientMsgAddCommunicationsReportMarker = {
  encode(message: CDOTAClientMsgAddCommunicationsReportMarker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetPlayerId !== 0) {
      writer.uint32(8).int32(message.targetPlayerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgAddCommunicationsReportMarker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgAddCommunicationsReportMarker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.targetPlayerId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgAddCommunicationsReportMarker {
    return { targetPlayerId: isSet(object.targetPlayerId) ? Number(object.targetPlayerId) : 0 };
  },

  toJSON(message: CDOTAClientMsgAddCommunicationsReportMarker): unknown {
    const obj: any = {};
    message.targetPlayerId !== undefined && (obj.targetPlayerId = Math.round(message.targetPlayerId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgAddCommunicationsReportMarker>): CDOTAClientMsgAddCommunicationsReportMarker {
    return CDOTAClientMsgAddCommunicationsReportMarker.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAClientMsgAddCommunicationsReportMarker>,
  ): CDOTAClientMsgAddCommunicationsReportMarker {
    const message = createBaseCDOTAClientMsgAddCommunicationsReportMarker();
    message.targetPlayerId = object.targetPlayerId ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgAddCommunicationsBlockMarker(): CDOTAClientMsgAddCommunicationsBlockMarker {
  return { targetPlayerId: 0 };
}

export const CDOTAClientMsgAddCommunicationsBlockMarker = {
  encode(message: CDOTAClientMsgAddCommunicationsBlockMarker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetPlayerId !== 0) {
      writer.uint32(8).int32(message.targetPlayerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgAddCommunicationsBlockMarker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgAddCommunicationsBlockMarker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.targetPlayerId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgAddCommunicationsBlockMarker {
    return { targetPlayerId: isSet(object.targetPlayerId) ? Number(object.targetPlayerId) : 0 };
  },

  toJSON(message: CDOTAClientMsgAddCommunicationsBlockMarker): unknown {
    const obj: any = {};
    message.targetPlayerId !== undefined && (obj.targetPlayerId = Math.round(message.targetPlayerId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgAddCommunicationsBlockMarker>): CDOTAClientMsgAddCommunicationsBlockMarker {
    return CDOTAClientMsgAddCommunicationsBlockMarker.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAClientMsgAddCommunicationsBlockMarker>,
  ): CDOTAClientMsgAddCommunicationsBlockMarker {
    const message = createBaseCDOTAClientMsgAddCommunicationsBlockMarker();
    message.targetPlayerId = object.targetPlayerId ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgAghsStatusAlert(): CDOTAClientMsgAghsStatusAlert {
  return { sourcePlayerId: 0, targetPlayerId: 0, targetEntindex: 0, alertType: 0 };
}

export const CDOTAClientMsgAghsStatusAlert = {
  encode(message: CDOTAClientMsgAghsStatusAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourcePlayerId !== 0) {
      writer.uint32(8).int32(message.sourcePlayerId);
    }
    if (message.targetPlayerId !== 0) {
      writer.uint32(16).int32(message.targetPlayerId);
    }
    if (message.targetEntindex !== 0) {
      writer.uint32(24).int32(message.targetEntindex);
    }
    if (message.alertType !== 0) {
      writer.uint32(32).uint32(message.alertType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgAghsStatusAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgAghsStatusAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sourcePlayerId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetPlayerId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.targetEntindex = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.alertType = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgAghsStatusAlert {
    return {
      sourcePlayerId: isSet(object.sourcePlayerId) ? Number(object.sourcePlayerId) : 0,
      targetPlayerId: isSet(object.targetPlayerId) ? Number(object.targetPlayerId) : 0,
      targetEntindex: isSet(object.targetEntindex) ? Number(object.targetEntindex) : 0,
      alertType: isSet(object.alertType) ? Number(object.alertType) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgAghsStatusAlert): unknown {
    const obj: any = {};
    message.sourcePlayerId !== undefined && (obj.sourcePlayerId = Math.round(message.sourcePlayerId));
    message.targetPlayerId !== undefined && (obj.targetPlayerId = Math.round(message.targetPlayerId));
    message.targetEntindex !== undefined && (obj.targetEntindex = Math.round(message.targetEntindex));
    message.alertType !== undefined && (obj.alertType = Math.round(message.alertType));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgAghsStatusAlert>): CDOTAClientMsgAghsStatusAlert {
    return CDOTAClientMsgAghsStatusAlert.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgAghsStatusAlert>): CDOTAClientMsgAghsStatusAlert {
    const message = createBaseCDOTAClientMsgAghsStatusAlert();
    message.sourcePlayerId = object.sourcePlayerId ?? 0;
    message.targetPlayerId = object.targetPlayerId ?? 0;
    message.targetEntindex = object.targetEntindex ?? 0;
    message.alertType = object.alertType ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgPerfReport(): CDOTAClientMsgPerfReport {
  return {
    averageFrameTime: 0,
    maxFrameTime: 0,
    averageComputeTime: 0,
    maxComputeTime: 0,
    averageClientTickTime: 0,
    maxClientTickTime: 0,
    averageClientSimulateTime: 0,
    maxClientSimulateTime: 0,
    averageOutputTime: 0,
    maxOutputTime: 0,
    averageWaitForRenderingToCompleteTime: 0,
    maxWaitForRenderingToCompleteTime: 0,
    averageSwapTime: 0,
    maxSwapTime: 0,
    averageFrameUpdateTime: 0,
    maxFrameUpdateTime: 0,
    averageIdleTime: 0,
    maxIdleTime: 0,
    averageInputProcessingTime: 0,
    maxInputProcessingTime: 0,
  };
}

export const CDOTAClientMsgPerfReport = {
  encode(message: CDOTAClientMsgPerfReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.averageFrameTime !== 0) {
      writer.uint32(13).float(message.averageFrameTime);
    }
    if (message.maxFrameTime !== 0) {
      writer.uint32(21).float(message.maxFrameTime);
    }
    if (message.averageComputeTime !== 0) {
      writer.uint32(29).float(message.averageComputeTime);
    }
    if (message.maxComputeTime !== 0) {
      writer.uint32(37).float(message.maxComputeTime);
    }
    if (message.averageClientTickTime !== 0) {
      writer.uint32(45).float(message.averageClientTickTime);
    }
    if (message.maxClientTickTime !== 0) {
      writer.uint32(53).float(message.maxClientTickTime);
    }
    if (message.averageClientSimulateTime !== 0) {
      writer.uint32(61).float(message.averageClientSimulateTime);
    }
    if (message.maxClientSimulateTime !== 0) {
      writer.uint32(69).float(message.maxClientSimulateTime);
    }
    if (message.averageOutputTime !== 0) {
      writer.uint32(77).float(message.averageOutputTime);
    }
    if (message.maxOutputTime !== 0) {
      writer.uint32(85).float(message.maxOutputTime);
    }
    if (message.averageWaitForRenderingToCompleteTime !== 0) {
      writer.uint32(93).float(message.averageWaitForRenderingToCompleteTime);
    }
    if (message.maxWaitForRenderingToCompleteTime !== 0) {
      writer.uint32(101).float(message.maxWaitForRenderingToCompleteTime);
    }
    if (message.averageSwapTime !== 0) {
      writer.uint32(109).float(message.averageSwapTime);
    }
    if (message.maxSwapTime !== 0) {
      writer.uint32(117).float(message.maxSwapTime);
    }
    if (message.averageFrameUpdateTime !== 0) {
      writer.uint32(125).float(message.averageFrameUpdateTime);
    }
    if (message.maxFrameUpdateTime !== 0) {
      writer.uint32(133).float(message.maxFrameUpdateTime);
    }
    if (message.averageIdleTime !== 0) {
      writer.uint32(141).float(message.averageIdleTime);
    }
    if (message.maxIdleTime !== 0) {
      writer.uint32(149).float(message.maxIdleTime);
    }
    if (message.averageInputProcessingTime !== 0) {
      writer.uint32(157).float(message.averageInputProcessingTime);
    }
    if (message.maxInputProcessingTime !== 0) {
      writer.uint32(165).float(message.maxInputProcessingTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgPerfReport {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgPerfReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.averageFrameTime = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.maxFrameTime = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.averageComputeTime = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.maxComputeTime = reader.float();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.averageClientTickTime = reader.float();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.maxClientTickTime = reader.float();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.averageClientSimulateTime = reader.float();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.maxClientSimulateTime = reader.float();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.averageOutputTime = reader.float();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.maxOutputTime = reader.float();
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.averageWaitForRenderingToCompleteTime = reader.float();
          continue;
        case 12:
          if (tag != 101) {
            break;
          }

          message.maxWaitForRenderingToCompleteTime = reader.float();
          continue;
        case 13:
          if (tag != 109) {
            break;
          }

          message.averageSwapTime = reader.float();
          continue;
        case 14:
          if (tag != 117) {
            break;
          }

          message.maxSwapTime = reader.float();
          continue;
        case 15:
          if (tag != 125) {
            break;
          }

          message.averageFrameUpdateTime = reader.float();
          continue;
        case 16:
          if (tag != 133) {
            break;
          }

          message.maxFrameUpdateTime = reader.float();
          continue;
        case 17:
          if (tag != 141) {
            break;
          }

          message.averageIdleTime = reader.float();
          continue;
        case 18:
          if (tag != 149) {
            break;
          }

          message.maxIdleTime = reader.float();
          continue;
        case 19:
          if (tag != 157) {
            break;
          }

          message.averageInputProcessingTime = reader.float();
          continue;
        case 20:
          if (tag != 165) {
            break;
          }

          message.maxInputProcessingTime = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgPerfReport {
    return {
      averageFrameTime: isSet(object.averageFrameTime) ? Number(object.averageFrameTime) : 0,
      maxFrameTime: isSet(object.maxFrameTime) ? Number(object.maxFrameTime) : 0,
      averageComputeTime: isSet(object.averageComputeTime) ? Number(object.averageComputeTime) : 0,
      maxComputeTime: isSet(object.maxComputeTime) ? Number(object.maxComputeTime) : 0,
      averageClientTickTime: isSet(object.averageClientTickTime) ? Number(object.averageClientTickTime) : 0,
      maxClientTickTime: isSet(object.maxClientTickTime) ? Number(object.maxClientTickTime) : 0,
      averageClientSimulateTime: isSet(object.averageClientSimulateTime) ? Number(object.averageClientSimulateTime) : 0,
      maxClientSimulateTime: isSet(object.maxClientSimulateTime) ? Number(object.maxClientSimulateTime) : 0,
      averageOutputTime: isSet(object.averageOutputTime) ? Number(object.averageOutputTime) : 0,
      maxOutputTime: isSet(object.maxOutputTime) ? Number(object.maxOutputTime) : 0,
      averageWaitForRenderingToCompleteTime: isSet(object.averageWaitForRenderingToCompleteTime)
        ? Number(object.averageWaitForRenderingToCompleteTime)
        : 0,
      maxWaitForRenderingToCompleteTime: isSet(object.maxWaitForRenderingToCompleteTime)
        ? Number(object.maxWaitForRenderingToCompleteTime)
        : 0,
      averageSwapTime: isSet(object.averageSwapTime) ? Number(object.averageSwapTime) : 0,
      maxSwapTime: isSet(object.maxSwapTime) ? Number(object.maxSwapTime) : 0,
      averageFrameUpdateTime: isSet(object.averageFrameUpdateTime) ? Number(object.averageFrameUpdateTime) : 0,
      maxFrameUpdateTime: isSet(object.maxFrameUpdateTime) ? Number(object.maxFrameUpdateTime) : 0,
      averageIdleTime: isSet(object.averageIdleTime) ? Number(object.averageIdleTime) : 0,
      maxIdleTime: isSet(object.maxIdleTime) ? Number(object.maxIdleTime) : 0,
      averageInputProcessingTime: isSet(object.averageInputProcessingTime)
        ? Number(object.averageInputProcessingTime)
        : 0,
      maxInputProcessingTime: isSet(object.maxInputProcessingTime) ? Number(object.maxInputProcessingTime) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgPerfReport): unknown {
    const obj: any = {};
    message.averageFrameTime !== undefined && (obj.averageFrameTime = message.averageFrameTime);
    message.maxFrameTime !== undefined && (obj.maxFrameTime = message.maxFrameTime);
    message.averageComputeTime !== undefined && (obj.averageComputeTime = message.averageComputeTime);
    message.maxComputeTime !== undefined && (obj.maxComputeTime = message.maxComputeTime);
    message.averageClientTickTime !== undefined && (obj.averageClientTickTime = message.averageClientTickTime);
    message.maxClientTickTime !== undefined && (obj.maxClientTickTime = message.maxClientTickTime);
    message.averageClientSimulateTime !== undefined &&
      (obj.averageClientSimulateTime = message.averageClientSimulateTime);
    message.maxClientSimulateTime !== undefined && (obj.maxClientSimulateTime = message.maxClientSimulateTime);
    message.averageOutputTime !== undefined && (obj.averageOutputTime = message.averageOutputTime);
    message.maxOutputTime !== undefined && (obj.maxOutputTime = message.maxOutputTime);
    message.averageWaitForRenderingToCompleteTime !== undefined &&
      (obj.averageWaitForRenderingToCompleteTime = message.averageWaitForRenderingToCompleteTime);
    message.maxWaitForRenderingToCompleteTime !== undefined &&
      (obj.maxWaitForRenderingToCompleteTime = message.maxWaitForRenderingToCompleteTime);
    message.averageSwapTime !== undefined && (obj.averageSwapTime = message.averageSwapTime);
    message.maxSwapTime !== undefined && (obj.maxSwapTime = message.maxSwapTime);
    message.averageFrameUpdateTime !== undefined && (obj.averageFrameUpdateTime = message.averageFrameUpdateTime);
    message.maxFrameUpdateTime !== undefined && (obj.maxFrameUpdateTime = message.maxFrameUpdateTime);
    message.averageIdleTime !== undefined && (obj.averageIdleTime = message.averageIdleTime);
    message.maxIdleTime !== undefined && (obj.maxIdleTime = message.maxIdleTime);
    message.averageInputProcessingTime !== undefined &&
      (obj.averageInputProcessingTime = message.averageInputProcessingTime);
    message.maxInputProcessingTime !== undefined && (obj.maxInputProcessingTime = message.maxInputProcessingTime);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgPerfReport>): CDOTAClientMsgPerfReport {
    return CDOTAClientMsgPerfReport.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgPerfReport>): CDOTAClientMsgPerfReport {
    const message = createBaseCDOTAClientMsgPerfReport();
    message.averageFrameTime = object.averageFrameTime ?? 0;
    message.maxFrameTime = object.maxFrameTime ?? 0;
    message.averageComputeTime = object.averageComputeTime ?? 0;
    message.maxComputeTime = object.maxComputeTime ?? 0;
    message.averageClientTickTime = object.averageClientTickTime ?? 0;
    message.maxClientTickTime = object.maxClientTickTime ?? 0;
    message.averageClientSimulateTime = object.averageClientSimulateTime ?? 0;
    message.maxClientSimulateTime = object.maxClientSimulateTime ?? 0;
    message.averageOutputTime = object.averageOutputTime ?? 0;
    message.maxOutputTime = object.maxOutputTime ?? 0;
    message.averageWaitForRenderingToCompleteTime = object.averageWaitForRenderingToCompleteTime ?? 0;
    message.maxWaitForRenderingToCompleteTime = object.maxWaitForRenderingToCompleteTime ?? 0;
    message.averageSwapTime = object.averageSwapTime ?? 0;
    message.maxSwapTime = object.maxSwapTime ?? 0;
    message.averageFrameUpdateTime = object.averageFrameUpdateTime ?? 0;
    message.maxFrameUpdateTime = object.maxFrameUpdateTime ?? 0;
    message.averageIdleTime = object.averageIdleTime ?? 0;
    message.maxIdleTime = object.maxIdleTime ?? 0;
    message.averageInputProcessingTime = object.averageInputProcessingTime ?? 0;
    message.maxInputProcessingTime = object.maxInputProcessingTime ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgContextualTipsSubscribeEntry(): CDOTAClientMsgContextualTipsSubscribeEntry {
  return { unsubscribe: false, tipId: 0, priorDisplayCount: 0, variantsSeen: [] };
}

export const CDOTAClientMsgContextualTipsSubscribeEntry = {
  encode(message: CDOTAClientMsgContextualTipsSubscribeEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unsubscribe === true) {
      writer.uint32(8).bool(message.unsubscribe);
    }
    if (message.tipId !== 0) {
      writer.uint32(16).int32(message.tipId);
    }
    if (message.priorDisplayCount !== 0) {
      writer.uint32(24).int32(message.priorDisplayCount);
    }
    writer.uint32(34).fork();
    for (const v of message.variantsSeen) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgContextualTipsSubscribeEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgContextualTipsSubscribeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.unsubscribe = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.tipId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.priorDisplayCount = reader.int32();
          continue;
        case 4:
          if (tag == 32) {
            message.variantsSeen.push(reader.int32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.variantsSeen.push(reader.int32());
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

  fromJSON(object: any): CDOTAClientMsgContextualTipsSubscribeEntry {
    return {
      unsubscribe: isSet(object.unsubscribe) ? Boolean(object.unsubscribe) : false,
      tipId: isSet(object.tipId) ? Number(object.tipId) : 0,
      priorDisplayCount: isSet(object.priorDisplayCount) ? Number(object.priorDisplayCount) : 0,
      variantsSeen: Array.isArray(object?.variantsSeen) ? object.variantsSeen.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CDOTAClientMsgContextualTipsSubscribeEntry): unknown {
    const obj: any = {};
    message.unsubscribe !== undefined && (obj.unsubscribe = message.unsubscribe);
    message.tipId !== undefined && (obj.tipId = Math.round(message.tipId));
    message.priorDisplayCount !== undefined && (obj.priorDisplayCount = Math.round(message.priorDisplayCount));
    if (message.variantsSeen) {
      obj.variantsSeen = message.variantsSeen.map((e) => Math.round(e));
    } else {
      obj.variantsSeen = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgContextualTipsSubscribeEntry>): CDOTAClientMsgContextualTipsSubscribeEntry {
    return CDOTAClientMsgContextualTipsSubscribeEntry.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAClientMsgContextualTipsSubscribeEntry>,
  ): CDOTAClientMsgContextualTipsSubscribeEntry {
    const message = createBaseCDOTAClientMsgContextualTipsSubscribeEntry();
    message.unsubscribe = object.unsubscribe ?? false;
    message.tipId = object.tipId ?? 0;
    message.priorDisplayCount = object.priorDisplayCount ?? 0;
    message.variantsSeen = object.variantsSeen?.map((e) => e) || [];
    return message;
  },
};

function createBaseCDOTAClientMsgContextualTipsSubscribe(): CDOTAClientMsgContextualTipsSubscribe {
  return { tips: [] };
}

export const CDOTAClientMsgContextualTipsSubscribe = {
  encode(message: CDOTAClientMsgContextualTipsSubscribe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tips) {
      CDOTAClientMsgContextualTipsSubscribeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgContextualTipsSubscribe {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgContextualTipsSubscribe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.tips.push(CDOTAClientMsgContextualTipsSubscribeEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgContextualTipsSubscribe {
    return {
      tips: Array.isArray(object?.tips)
        ? object.tips.map((e: any) => CDOTAClientMsgContextualTipsSubscribeEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDOTAClientMsgContextualTipsSubscribe): unknown {
    const obj: any = {};
    if (message.tips) {
      obj.tips = message.tips.map((e) => e ? CDOTAClientMsgContextualTipsSubscribeEntry.toJSON(e) : undefined);
    } else {
      obj.tips = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgContextualTipsSubscribe>): CDOTAClientMsgContextualTipsSubscribe {
    return CDOTAClientMsgContextualTipsSubscribe.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgContextualTipsSubscribe>): CDOTAClientMsgContextualTipsSubscribe {
    const message = createBaseCDOTAClientMsgContextualTipsSubscribe();
    message.tips = object.tips?.map((e) => CDOTAClientMsgContextualTipsSubscribeEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCDOTAClientMsgChatMessage(): CDOTAClientMsgChatMessage {
  return { channelType: 0, messageText: "" };
}

export const CDOTAClientMsgChatMessage = {
  encode(message: CDOTAClientMsgChatMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelType !== 0) {
      writer.uint32(8).uint32(message.channelType);
    }
    if (message.messageText !== "") {
      writer.uint32(18).string(message.messageText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgChatMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgChatMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.channelType = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.messageText = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgChatMessage {
    return {
      channelType: isSet(object.channelType) ? Number(object.channelType) : 0,
      messageText: isSet(object.messageText) ? String(object.messageText) : "",
    };
  },

  toJSON(message: CDOTAClientMsgChatMessage): unknown {
    const obj: any = {};
    message.channelType !== undefined && (obj.channelType = Math.round(message.channelType));
    message.messageText !== undefined && (obj.messageText = message.messageText);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgChatMessage>): CDOTAClientMsgChatMessage {
    return CDOTAClientMsgChatMessage.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgChatMessage>): CDOTAClientMsgChatMessage {
    const message = createBaseCDOTAClientMsgChatMessage();
    message.channelType = object.channelType ?? 0;
    message.messageText = object.messageText ?? "";
    return message;
  },
};

function createBaseCDOTAClientMsgDuelAccepted(): CDOTAClientMsgDuelAccepted {
  return { challengerPlayerId: 0, accepterPlayerId: 0 };
}

export const CDOTAClientMsgDuelAccepted = {
  encode(message: CDOTAClientMsgDuelAccepted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challengerPlayerId !== 0) {
      writer.uint32(8).int32(message.challengerPlayerId);
    }
    if (message.accepterPlayerId !== 0) {
      writer.uint32(16).int32(message.accepterPlayerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgDuelAccepted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgDuelAccepted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.challengerPlayerId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.accepterPlayerId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgDuelAccepted {
    return {
      challengerPlayerId: isSet(object.challengerPlayerId) ? Number(object.challengerPlayerId) : 0,
      accepterPlayerId: isSet(object.accepterPlayerId) ? Number(object.accepterPlayerId) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgDuelAccepted): unknown {
    const obj: any = {};
    message.challengerPlayerId !== undefined && (obj.challengerPlayerId = Math.round(message.challengerPlayerId));
    message.accepterPlayerId !== undefined && (obj.accepterPlayerId = Math.round(message.accepterPlayerId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgDuelAccepted>): CDOTAClientMsgDuelAccepted {
    return CDOTAClientMsgDuelAccepted.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgDuelAccepted>): CDOTAClientMsgDuelAccepted {
    const message = createBaseCDOTAClientMsgDuelAccepted();
    message.challengerPlayerId = object.challengerPlayerId ?? 0;
    message.accepterPlayerId = object.accepterPlayerId ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgChooseNeutralItem(): CDOTAClientMsgChooseNeutralItem {
  return { neutralItemIndex: 0, targetEntindex: 0, slotIndex: 0 };
}

export const CDOTAClientMsgChooseNeutralItem = {
  encode(message: CDOTAClientMsgChooseNeutralItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.neutralItemIndex !== 0) {
      writer.uint32(8).int32(message.neutralItemIndex);
    }
    if (message.targetEntindex !== 0) {
      writer.uint32(16).int32(message.targetEntindex);
    }
    if (message.slotIndex !== 0) {
      writer.uint32(24).int32(message.slotIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgChooseNeutralItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgChooseNeutralItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.neutralItemIndex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetEntindex = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.slotIndex = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgChooseNeutralItem {
    return {
      neutralItemIndex: isSet(object.neutralItemIndex) ? Number(object.neutralItemIndex) : 0,
      targetEntindex: isSet(object.targetEntindex) ? Number(object.targetEntindex) : 0,
      slotIndex: isSet(object.slotIndex) ? Number(object.slotIndex) : 0,
    };
  },

  toJSON(message: CDOTAClientMsgChooseNeutralItem): unknown {
    const obj: any = {};
    message.neutralItemIndex !== undefined && (obj.neutralItemIndex = Math.round(message.neutralItemIndex));
    message.targetEntindex !== undefined && (obj.targetEntindex = Math.round(message.targetEntindex));
    message.slotIndex !== undefined && (obj.slotIndex = Math.round(message.slotIndex));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgChooseNeutralItem>): CDOTAClientMsgChooseNeutralItem {
    return CDOTAClientMsgChooseNeutralItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgChooseNeutralItem>): CDOTAClientMsgChooseNeutralItem {
    const message = createBaseCDOTAClientMsgChooseNeutralItem();
    message.neutralItemIndex = object.neutralItemIndex ?? 0;
    message.targetEntindex = object.targetEntindex ?? 0;
    message.slotIndex = object.slotIndex ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgPlayerDraftPick(): CDOTAClientMsgPlayerDraftPick {
  return { playerId: 0 };
}

export const CDOTAClientMsgPlayerDraftPick = {
  encode(message: CDOTAClientMsgPlayerDraftPick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgPlayerDraftPick {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgPlayerDraftPick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgPlayerDraftPick {
    return { playerId: isSet(object.playerId) ? Number(object.playerId) : 0 };
  },

  toJSON(message: CDOTAClientMsgPlayerDraftPick): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgPlayerDraftPick>): CDOTAClientMsgPlayerDraftPick {
    return CDOTAClientMsgPlayerDraftPick.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgPlayerDraftPick>): CDOTAClientMsgPlayerDraftPick {
    const message = createBaseCDOTAClientMsgPlayerDraftPick();
    message.playerId = object.playerId ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgPlayerDraftSuggest(): CDOTAClientMsgPlayerDraftSuggest {
  return { playerId: 0 };
}

export const CDOTAClientMsgPlayerDraftSuggest = {
  encode(message: CDOTAClientMsgPlayerDraftSuggest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgPlayerDraftSuggest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgPlayerDraftSuggest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgPlayerDraftSuggest {
    return { playerId: isSet(object.playerId) ? Number(object.playerId) : 0 };
  },

  toJSON(message: CDOTAClientMsgPlayerDraftSuggest): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgPlayerDraftSuggest>): CDOTAClientMsgPlayerDraftSuggest {
    return CDOTAClientMsgPlayerDraftSuggest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgPlayerDraftSuggest>): CDOTAClientMsgPlayerDraftSuggest {
    const message = createBaseCDOTAClientMsgPlayerDraftSuggest();
    message.playerId = object.playerId ?? 0;
    return message;
  },
};

function createBaseCDOTAClientMsgPlayerDraftPreferRole(): CDOTAClientMsgPlayerDraftPreferRole {
  return { roleIdx: 0, desired: false };
}

export const CDOTAClientMsgPlayerDraftPreferRole = {
  encode(message: CDOTAClientMsgPlayerDraftPreferRole, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.roleIdx !== 0) {
      writer.uint32(8).int32(message.roleIdx);
    }
    if (message.desired === true) {
      writer.uint32(16).bool(message.desired);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgPlayerDraftPreferRole {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgPlayerDraftPreferRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.roleIdx = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.desired = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgPlayerDraftPreferRole {
    return {
      roleIdx: isSet(object.roleIdx) ? Number(object.roleIdx) : 0,
      desired: isSet(object.desired) ? Boolean(object.desired) : false,
    };
  },

  toJSON(message: CDOTAClientMsgPlayerDraftPreferRole): unknown {
    const obj: any = {};
    message.roleIdx !== undefined && (obj.roleIdx = Math.round(message.roleIdx));
    message.desired !== undefined && (obj.desired = message.desired);
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgPlayerDraftPreferRole>): CDOTAClientMsgPlayerDraftPreferRole {
    return CDOTAClientMsgPlayerDraftPreferRole.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgPlayerDraftPreferRole>): CDOTAClientMsgPlayerDraftPreferRole {
    const message = createBaseCDOTAClientMsgPlayerDraftPreferRole();
    message.roleIdx = object.roleIdx ?? 0;
    message.desired = object.desired ?? false;
    return message;
  },
};

function createBaseCDOTAClientMsgPlayerDraftPreferTeam(): CDOTAClientMsgPlayerDraftPreferTeam {
  return { team: 0 };
}

export const CDOTAClientMsgPlayerDraftPreferTeam = {
  encode(message: CDOTAClientMsgPlayerDraftPreferTeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.team !== 0) {
      writer.uint32(8).int32(message.team);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientMsgPlayerDraftPreferTeam {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientMsgPlayerDraftPreferTeam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.team = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAClientMsgPlayerDraftPreferTeam {
    return { team: isSet(object.team) ? Number(object.team) : 0 };
  },

  toJSON(message: CDOTAClientMsgPlayerDraftPreferTeam): unknown {
    const obj: any = {};
    message.team !== undefined && (obj.team = Math.round(message.team));
    return obj;
  },

  create(base?: DeepPartial<CDOTAClientMsgPlayerDraftPreferTeam>): CDOTAClientMsgPlayerDraftPreferTeam {
    return CDOTAClientMsgPlayerDraftPreferTeam.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAClientMsgPlayerDraftPreferTeam>): CDOTAClientMsgPlayerDraftPreferTeam {
    const message = createBaseCDOTAClientMsgPlayerDraftPreferTeam();
    message.team = object.team ?? 0;
    return message;
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

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

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
