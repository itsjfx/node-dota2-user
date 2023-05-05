/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  CDOTAMsgCoachHUDPing,
  CDOTAMsgDismissAllStatPopups,
  CDOTAMsgItemAlert,
  CDOTAMsgLocationPing,
  CDOTAMsgMapLine,
  CDOTAMsgSendStatPopup,
  CDOTAMsgWorldLine,
  EDOTAVersusScenePlayerBehavior,
  eDOTAVersusScenePlayerBehaviorFromJSON,
  eDOTAVersusScenePlayerBehaviorToJSON,
  VersusSceneChatWheel,
  VersusScenePlayActivity,
  VersusScenePlaybackRate,
} from "./dota_commonmessages";
import { CMsgDOTACombatLogEntry } from "./dota_shared_enums";
import { CEntityMsg, CMsgVector, CMsgVector2D } from "./networkbasetypes";

export enum EDotaUserMessages {
  DOTA_UM_AddUnitToSelection = 464,
  DOTA_UM_AIDebugLine = 465,
  DOTA_UM_ChatEvent = 466,
  DOTA_UM_CombatHeroPositions = 467,
  DOTA_UM_CombatLogData = 468,
  DOTA_UM_CombatLogBulkData = 470,
  DOTA_UM_CreateLinearProjectile = 471,
  DOTA_UM_DestroyLinearProjectile = 472,
  DOTA_UM_DodgeTrackingProjectiles = 473,
  DOTA_UM_GlobalLightColor = 474,
  DOTA_UM_GlobalLightDirection = 475,
  DOTA_UM_InvalidCommand = 476,
  DOTA_UM_LocationPing = 477,
  DOTA_UM_MapLine = 478,
  DOTA_UM_MiniKillCamInfo = 479,
  DOTA_UM_MinimapDebugPoint = 480,
  DOTA_UM_MinimapEvent = 481,
  DOTA_UM_NevermoreRequiem = 482,
  DOTA_UM_OverheadEvent = 483,
  DOTA_UM_SetNextAutobuyItem = 484,
  DOTA_UM_SharedCooldown = 485,
  DOTA_UM_SpectatorPlayerClick = 486,
  DOTA_UM_TutorialTipInfo = 487,
  DOTA_UM_UnitEvent = 488,
  DOTA_UM_ParticleManager = 489,
  DOTA_UM_BotChat = 490,
  DOTA_UM_HudError = 491,
  DOTA_UM_ItemPurchased = 492,
  DOTA_UM_Ping = 493,
  DOTA_UM_ItemFound = 494,
  DOTA_UM_CharacterSpeakConcept = 495,
  DOTA_UM_SwapVerify = 496,
  DOTA_UM_WorldLine = 497,
  DOTA_UM_TournamentDrop = 498,
  DOTA_UM_ItemAlert = 499,
  DOTA_UM_HalloweenDrops = 500,
  DOTA_UM_ChatWheel = 501,
  DOTA_UM_ReceivedXmasGift = 502,
  DOTA_UM_UpdateSharedContent = 503,
  DOTA_UM_TutorialRequestExp = 504,
  DOTA_UM_TutorialPingMinimap = 505,
  DOTA_UM_GamerulesStateChanged = 506,
  DOTA_UM_ShowSurvey = 507,
  DOTA_UM_TutorialFade = 508,
  DOTA_UM_AddQuestLogEntry = 509,
  DOTA_UM_SendStatPopup = 510,
  DOTA_UM_TutorialFinish = 511,
  DOTA_UM_SendRoshanPopup = 512,
  DOTA_UM_SendGenericToolTip = 513,
  DOTA_UM_SendFinalGold = 514,
  DOTA_UM_CustomMsg = 515,
  DOTA_UM_CoachHUDPing = 516,
  DOTA_UM_ClientLoadGridNav = 517,
  DOTA_UM_TE_Projectile = 518,
  DOTA_UM_TE_ProjectileLoc = 519,
  DOTA_UM_TE_DotaBloodImpact = 520,
  DOTA_UM_TE_UnitAnimation = 521,
  DOTA_UM_TE_UnitAnimationEnd = 522,
  DOTA_UM_AbilityPing = 523,
  DOTA_UM_ShowGenericPopup = 524,
  DOTA_UM_VoteStart = 525,
  DOTA_UM_VoteUpdate = 526,
  DOTA_UM_VoteEnd = 527,
  DOTA_UM_BoosterState = 528,
  DOTA_UM_WillPurchaseAlert = 529,
  DOTA_UM_TutorialMinimapPosition = 530,
  DOTA_UM_PlayerMMR = 531,
  DOTA_UM_AbilitySteal = 532,
  DOTA_UM_CourierKilledAlert = 533,
  DOTA_UM_EnemyItemAlert = 534,
  DOTA_UM_StatsMatchDetails = 535,
  DOTA_UM_MiniTaunt = 536,
  DOTA_UM_BuyBackStateAlert = 537,
  DOTA_UM_SpeechBubble = 538,
  DOTA_UM_CustomHeaderMessage = 539,
  DOTA_UM_QuickBuyAlert = 540,
  DOTA_UM_StatsHeroDetails = 541,
  DOTA_UM_PredictionResult = 542,
  DOTA_UM_ModifierAlert = 543,
  DOTA_UM_HPManaAlert = 544,
  DOTA_UM_GlyphAlert = 545,
  DOTA_UM_BeastChat = 546,
  DOTA_UM_SpectatorPlayerUnitOrders = 547,
  DOTA_UM_CustomHudElement_Create = 548,
  DOTA_UM_CustomHudElement_Modify = 549,
  DOTA_UM_CustomHudElement_Destroy = 550,
  DOTA_UM_CompendiumState = 551,
  DOTA_UM_ProjectionAbility = 552,
  DOTA_UM_ProjectionEvent = 553,
  DOTA_UM_CombatLogDataHLTV = 554,
  DOTA_UM_XPAlert = 555,
  DOTA_UM_UpdateQuestProgress = 556,
  DOTA_UM_MatchMetadata = 557,
  DOTA_UM_MatchDetails = 558,
  DOTA_UM_QuestStatus = 559,
  DOTA_UM_SuggestHeroPick = 560,
  DOTA_UM_SuggestHeroRole = 561,
  DOTA_UM_KillcamDamageTaken = 562,
  DOTA_UM_SelectPenaltyGold = 563,
  DOTA_UM_RollDiceResult = 564,
  DOTA_UM_FlipCoinResult = 565,
  DOTA_UM_RequestItemSuggestions = 566,
  DOTA_UM_TeamCaptainChanged = 567,
  DOTA_UM_SendRoshanSpectatorPhase = 568,
  DOTA_UM_ChatWheelCooldown = 569,
  DOTA_UM_DismissAllStatPopups = 570,
  DOTA_UM_TE_DestroyProjectile = 571,
  DOTA_UM_HeroRelicProgress = 572,
  DOTA_UM_AbilityDraftRequestAbility = 573,
  DOTA_UM_ItemSold = 574,
  DOTA_UM_DamageReport = 575,
  DOTA_UM_SalutePlayer = 576,
  DOTA_UM_TipAlert = 577,
  DOTA_UM_ReplaceQueryUnit = 578,
  DOTA_UM_EmptyTeleportAlert = 579,
  DOTA_UM_MarsArenaOfBloodAttack = 580,
  DOTA_UM_ESArcanaCombo = 581,
  DOTA_UM_ESArcanaComboSummary = 582,
  DOTA_UM_HighFiveLeftHanging = 583,
  DOTA_UM_HighFiveCompleted = 584,
  DOTA_UM_ShovelUnearth = 585,
  DOTA_EM_InvokerSpellCast = 586,
  DOTA_UM_RadarAlert = 587,
  DOTA_UM_AllStarEvent = 588,
  DOTA_UM_TalentTreeAlert = 589,
  DOTA_UM_QueuedOrderRemoved = 590,
  DOTA_UM_DebugChallenge = 591,
  DOTA_UM_OMArcanaCombo = 592,
  DOTA_UM_FoundNeutralItem = 593,
  DOTA_UM_OutpostCaptured = 594,
  DOTA_UM_OutpostGrantedXP = 595,
  DOTA_UM_MoveCameraToUnit = 596,
  DOTA_UM_PauseMinigameData = 597,
  DOTA_UM_VersusScene_PlayerBehavior = 598,
  DOTA_UM_QoP_ArcanaSummary = 600,
  DOTA_UM_HotPotato_Created = 601,
  DOTA_UM_HotPotato_Exploded = 602,
  DOTA_UM_WK_Arcana_Progress = 603,
  DOTA_UM_GuildChallenge_Progress = 604,
  DOTA_UM_WRArcanaProgress = 605,
  DOTA_UM_WRArcanaSummary = 606,
  DOTA_UM_EmptyItemSlotAlert = 607,
  DOTA_UM_AghsStatusAlert = 608,
  DOTA_UM_PingConfirmation = 609,
  DOTA_UM_MutedPlayers = 610,
  DOTA_UM_ContextualTip = 611,
  DOTA_UM_ChatMessage = 612,
  DOTA_UM_NeutralCampAlert = 613,
  DOTA_UM_RockPaperScissorsStarted = 614,
  DOTA_UM_RockPaperScissorsFinished = 615,
  DOTA_UM_DuelOpponentKilled = 616,
  DOTA_UM_DuelAccepted = 617,
  DOTA_UM_DuelRequested = 618,
  DOTA_UM_MuertaReleaseEvent_AssignedTargetKilled = 619,
  DOTA_UM_PlayerDraftSuggestPick = 620,
  DOTA_UM_PlayerDraftPick = 621,
}

export function eDotaUserMessagesFromJSON(object: any): EDotaUserMessages {
  switch (object) {
    case 464:
    case "DOTA_UM_AddUnitToSelection":
      return EDotaUserMessages.DOTA_UM_AddUnitToSelection;
    case 465:
    case "DOTA_UM_AIDebugLine":
      return EDotaUserMessages.DOTA_UM_AIDebugLine;
    case 466:
    case "DOTA_UM_ChatEvent":
      return EDotaUserMessages.DOTA_UM_ChatEvent;
    case 467:
    case "DOTA_UM_CombatHeroPositions":
      return EDotaUserMessages.DOTA_UM_CombatHeroPositions;
    case 468:
    case "DOTA_UM_CombatLogData":
      return EDotaUserMessages.DOTA_UM_CombatLogData;
    case 470:
    case "DOTA_UM_CombatLogBulkData":
      return EDotaUserMessages.DOTA_UM_CombatLogBulkData;
    case 471:
    case "DOTA_UM_CreateLinearProjectile":
      return EDotaUserMessages.DOTA_UM_CreateLinearProjectile;
    case 472:
    case "DOTA_UM_DestroyLinearProjectile":
      return EDotaUserMessages.DOTA_UM_DestroyLinearProjectile;
    case 473:
    case "DOTA_UM_DodgeTrackingProjectiles":
      return EDotaUserMessages.DOTA_UM_DodgeTrackingProjectiles;
    case 474:
    case "DOTA_UM_GlobalLightColor":
      return EDotaUserMessages.DOTA_UM_GlobalLightColor;
    case 475:
    case "DOTA_UM_GlobalLightDirection":
      return EDotaUserMessages.DOTA_UM_GlobalLightDirection;
    case 476:
    case "DOTA_UM_InvalidCommand":
      return EDotaUserMessages.DOTA_UM_InvalidCommand;
    case 477:
    case "DOTA_UM_LocationPing":
      return EDotaUserMessages.DOTA_UM_LocationPing;
    case 478:
    case "DOTA_UM_MapLine":
      return EDotaUserMessages.DOTA_UM_MapLine;
    case 479:
    case "DOTA_UM_MiniKillCamInfo":
      return EDotaUserMessages.DOTA_UM_MiniKillCamInfo;
    case 480:
    case "DOTA_UM_MinimapDebugPoint":
      return EDotaUserMessages.DOTA_UM_MinimapDebugPoint;
    case 481:
    case "DOTA_UM_MinimapEvent":
      return EDotaUserMessages.DOTA_UM_MinimapEvent;
    case 482:
    case "DOTA_UM_NevermoreRequiem":
      return EDotaUserMessages.DOTA_UM_NevermoreRequiem;
    case 483:
    case "DOTA_UM_OverheadEvent":
      return EDotaUserMessages.DOTA_UM_OverheadEvent;
    case 484:
    case "DOTA_UM_SetNextAutobuyItem":
      return EDotaUserMessages.DOTA_UM_SetNextAutobuyItem;
    case 485:
    case "DOTA_UM_SharedCooldown":
      return EDotaUserMessages.DOTA_UM_SharedCooldown;
    case 486:
    case "DOTA_UM_SpectatorPlayerClick":
      return EDotaUserMessages.DOTA_UM_SpectatorPlayerClick;
    case 487:
    case "DOTA_UM_TutorialTipInfo":
      return EDotaUserMessages.DOTA_UM_TutorialTipInfo;
    case 488:
    case "DOTA_UM_UnitEvent":
      return EDotaUserMessages.DOTA_UM_UnitEvent;
    case 489:
    case "DOTA_UM_ParticleManager":
      return EDotaUserMessages.DOTA_UM_ParticleManager;
    case 490:
    case "DOTA_UM_BotChat":
      return EDotaUserMessages.DOTA_UM_BotChat;
    case 491:
    case "DOTA_UM_HudError":
      return EDotaUserMessages.DOTA_UM_HudError;
    case 492:
    case "DOTA_UM_ItemPurchased":
      return EDotaUserMessages.DOTA_UM_ItemPurchased;
    case 493:
    case "DOTA_UM_Ping":
      return EDotaUserMessages.DOTA_UM_Ping;
    case 494:
    case "DOTA_UM_ItemFound":
      return EDotaUserMessages.DOTA_UM_ItemFound;
    case 495:
    case "DOTA_UM_CharacterSpeakConcept":
      return EDotaUserMessages.DOTA_UM_CharacterSpeakConcept;
    case 496:
    case "DOTA_UM_SwapVerify":
      return EDotaUserMessages.DOTA_UM_SwapVerify;
    case 497:
    case "DOTA_UM_WorldLine":
      return EDotaUserMessages.DOTA_UM_WorldLine;
    case 498:
    case "DOTA_UM_TournamentDrop":
      return EDotaUserMessages.DOTA_UM_TournamentDrop;
    case 499:
    case "DOTA_UM_ItemAlert":
      return EDotaUserMessages.DOTA_UM_ItemAlert;
    case 500:
    case "DOTA_UM_HalloweenDrops":
      return EDotaUserMessages.DOTA_UM_HalloweenDrops;
    case 501:
    case "DOTA_UM_ChatWheel":
      return EDotaUserMessages.DOTA_UM_ChatWheel;
    case 502:
    case "DOTA_UM_ReceivedXmasGift":
      return EDotaUserMessages.DOTA_UM_ReceivedXmasGift;
    case 503:
    case "DOTA_UM_UpdateSharedContent":
      return EDotaUserMessages.DOTA_UM_UpdateSharedContent;
    case 504:
    case "DOTA_UM_TutorialRequestExp":
      return EDotaUserMessages.DOTA_UM_TutorialRequestExp;
    case 505:
    case "DOTA_UM_TutorialPingMinimap":
      return EDotaUserMessages.DOTA_UM_TutorialPingMinimap;
    case 506:
    case "DOTA_UM_GamerulesStateChanged":
      return EDotaUserMessages.DOTA_UM_GamerulesStateChanged;
    case 507:
    case "DOTA_UM_ShowSurvey":
      return EDotaUserMessages.DOTA_UM_ShowSurvey;
    case 508:
    case "DOTA_UM_TutorialFade":
      return EDotaUserMessages.DOTA_UM_TutorialFade;
    case 509:
    case "DOTA_UM_AddQuestLogEntry":
      return EDotaUserMessages.DOTA_UM_AddQuestLogEntry;
    case 510:
    case "DOTA_UM_SendStatPopup":
      return EDotaUserMessages.DOTA_UM_SendStatPopup;
    case 511:
    case "DOTA_UM_TutorialFinish":
      return EDotaUserMessages.DOTA_UM_TutorialFinish;
    case 512:
    case "DOTA_UM_SendRoshanPopup":
      return EDotaUserMessages.DOTA_UM_SendRoshanPopup;
    case 513:
    case "DOTA_UM_SendGenericToolTip":
      return EDotaUserMessages.DOTA_UM_SendGenericToolTip;
    case 514:
    case "DOTA_UM_SendFinalGold":
      return EDotaUserMessages.DOTA_UM_SendFinalGold;
    case 515:
    case "DOTA_UM_CustomMsg":
      return EDotaUserMessages.DOTA_UM_CustomMsg;
    case 516:
    case "DOTA_UM_CoachHUDPing":
      return EDotaUserMessages.DOTA_UM_CoachHUDPing;
    case 517:
    case "DOTA_UM_ClientLoadGridNav":
      return EDotaUserMessages.DOTA_UM_ClientLoadGridNav;
    case 518:
    case "DOTA_UM_TE_Projectile":
      return EDotaUserMessages.DOTA_UM_TE_Projectile;
    case 519:
    case "DOTA_UM_TE_ProjectileLoc":
      return EDotaUserMessages.DOTA_UM_TE_ProjectileLoc;
    case 520:
    case "DOTA_UM_TE_DotaBloodImpact":
      return EDotaUserMessages.DOTA_UM_TE_DotaBloodImpact;
    case 521:
    case "DOTA_UM_TE_UnitAnimation":
      return EDotaUserMessages.DOTA_UM_TE_UnitAnimation;
    case 522:
    case "DOTA_UM_TE_UnitAnimationEnd":
      return EDotaUserMessages.DOTA_UM_TE_UnitAnimationEnd;
    case 523:
    case "DOTA_UM_AbilityPing":
      return EDotaUserMessages.DOTA_UM_AbilityPing;
    case 524:
    case "DOTA_UM_ShowGenericPopup":
      return EDotaUserMessages.DOTA_UM_ShowGenericPopup;
    case 525:
    case "DOTA_UM_VoteStart":
      return EDotaUserMessages.DOTA_UM_VoteStart;
    case 526:
    case "DOTA_UM_VoteUpdate":
      return EDotaUserMessages.DOTA_UM_VoteUpdate;
    case 527:
    case "DOTA_UM_VoteEnd":
      return EDotaUserMessages.DOTA_UM_VoteEnd;
    case 528:
    case "DOTA_UM_BoosterState":
      return EDotaUserMessages.DOTA_UM_BoosterState;
    case 529:
    case "DOTA_UM_WillPurchaseAlert":
      return EDotaUserMessages.DOTA_UM_WillPurchaseAlert;
    case 530:
    case "DOTA_UM_TutorialMinimapPosition":
      return EDotaUserMessages.DOTA_UM_TutorialMinimapPosition;
    case 531:
    case "DOTA_UM_PlayerMMR":
      return EDotaUserMessages.DOTA_UM_PlayerMMR;
    case 532:
    case "DOTA_UM_AbilitySteal":
      return EDotaUserMessages.DOTA_UM_AbilitySteal;
    case 533:
    case "DOTA_UM_CourierKilledAlert":
      return EDotaUserMessages.DOTA_UM_CourierKilledAlert;
    case 534:
    case "DOTA_UM_EnemyItemAlert":
      return EDotaUserMessages.DOTA_UM_EnemyItemAlert;
    case 535:
    case "DOTA_UM_StatsMatchDetails":
      return EDotaUserMessages.DOTA_UM_StatsMatchDetails;
    case 536:
    case "DOTA_UM_MiniTaunt":
      return EDotaUserMessages.DOTA_UM_MiniTaunt;
    case 537:
    case "DOTA_UM_BuyBackStateAlert":
      return EDotaUserMessages.DOTA_UM_BuyBackStateAlert;
    case 538:
    case "DOTA_UM_SpeechBubble":
      return EDotaUserMessages.DOTA_UM_SpeechBubble;
    case 539:
    case "DOTA_UM_CustomHeaderMessage":
      return EDotaUserMessages.DOTA_UM_CustomHeaderMessage;
    case 540:
    case "DOTA_UM_QuickBuyAlert":
      return EDotaUserMessages.DOTA_UM_QuickBuyAlert;
    case 541:
    case "DOTA_UM_StatsHeroDetails":
      return EDotaUserMessages.DOTA_UM_StatsHeroDetails;
    case 542:
    case "DOTA_UM_PredictionResult":
      return EDotaUserMessages.DOTA_UM_PredictionResult;
    case 543:
    case "DOTA_UM_ModifierAlert":
      return EDotaUserMessages.DOTA_UM_ModifierAlert;
    case 544:
    case "DOTA_UM_HPManaAlert":
      return EDotaUserMessages.DOTA_UM_HPManaAlert;
    case 545:
    case "DOTA_UM_GlyphAlert":
      return EDotaUserMessages.DOTA_UM_GlyphAlert;
    case 546:
    case "DOTA_UM_BeastChat":
      return EDotaUserMessages.DOTA_UM_BeastChat;
    case 547:
    case "DOTA_UM_SpectatorPlayerUnitOrders":
      return EDotaUserMessages.DOTA_UM_SpectatorPlayerUnitOrders;
    case 548:
    case "DOTA_UM_CustomHudElement_Create":
      return EDotaUserMessages.DOTA_UM_CustomHudElement_Create;
    case 549:
    case "DOTA_UM_CustomHudElement_Modify":
      return EDotaUserMessages.DOTA_UM_CustomHudElement_Modify;
    case 550:
    case "DOTA_UM_CustomHudElement_Destroy":
      return EDotaUserMessages.DOTA_UM_CustomHudElement_Destroy;
    case 551:
    case "DOTA_UM_CompendiumState":
      return EDotaUserMessages.DOTA_UM_CompendiumState;
    case 552:
    case "DOTA_UM_ProjectionAbility":
      return EDotaUserMessages.DOTA_UM_ProjectionAbility;
    case 553:
    case "DOTA_UM_ProjectionEvent":
      return EDotaUserMessages.DOTA_UM_ProjectionEvent;
    case 554:
    case "DOTA_UM_CombatLogDataHLTV":
      return EDotaUserMessages.DOTA_UM_CombatLogDataHLTV;
    case 555:
    case "DOTA_UM_XPAlert":
      return EDotaUserMessages.DOTA_UM_XPAlert;
    case 556:
    case "DOTA_UM_UpdateQuestProgress":
      return EDotaUserMessages.DOTA_UM_UpdateQuestProgress;
    case 557:
    case "DOTA_UM_MatchMetadata":
      return EDotaUserMessages.DOTA_UM_MatchMetadata;
    case 558:
    case "DOTA_UM_MatchDetails":
      return EDotaUserMessages.DOTA_UM_MatchDetails;
    case 559:
    case "DOTA_UM_QuestStatus":
      return EDotaUserMessages.DOTA_UM_QuestStatus;
    case 560:
    case "DOTA_UM_SuggestHeroPick":
      return EDotaUserMessages.DOTA_UM_SuggestHeroPick;
    case 561:
    case "DOTA_UM_SuggestHeroRole":
      return EDotaUserMessages.DOTA_UM_SuggestHeroRole;
    case 562:
    case "DOTA_UM_KillcamDamageTaken":
      return EDotaUserMessages.DOTA_UM_KillcamDamageTaken;
    case 563:
    case "DOTA_UM_SelectPenaltyGold":
      return EDotaUserMessages.DOTA_UM_SelectPenaltyGold;
    case 564:
    case "DOTA_UM_RollDiceResult":
      return EDotaUserMessages.DOTA_UM_RollDiceResult;
    case 565:
    case "DOTA_UM_FlipCoinResult":
      return EDotaUserMessages.DOTA_UM_FlipCoinResult;
    case 566:
    case "DOTA_UM_RequestItemSuggestions":
      return EDotaUserMessages.DOTA_UM_RequestItemSuggestions;
    case 567:
    case "DOTA_UM_TeamCaptainChanged":
      return EDotaUserMessages.DOTA_UM_TeamCaptainChanged;
    case 568:
    case "DOTA_UM_SendRoshanSpectatorPhase":
      return EDotaUserMessages.DOTA_UM_SendRoshanSpectatorPhase;
    case 569:
    case "DOTA_UM_ChatWheelCooldown":
      return EDotaUserMessages.DOTA_UM_ChatWheelCooldown;
    case 570:
    case "DOTA_UM_DismissAllStatPopups":
      return EDotaUserMessages.DOTA_UM_DismissAllStatPopups;
    case 571:
    case "DOTA_UM_TE_DestroyProjectile":
      return EDotaUserMessages.DOTA_UM_TE_DestroyProjectile;
    case 572:
    case "DOTA_UM_HeroRelicProgress":
      return EDotaUserMessages.DOTA_UM_HeroRelicProgress;
    case 573:
    case "DOTA_UM_AbilityDraftRequestAbility":
      return EDotaUserMessages.DOTA_UM_AbilityDraftRequestAbility;
    case 574:
    case "DOTA_UM_ItemSold":
      return EDotaUserMessages.DOTA_UM_ItemSold;
    case 575:
    case "DOTA_UM_DamageReport":
      return EDotaUserMessages.DOTA_UM_DamageReport;
    case 576:
    case "DOTA_UM_SalutePlayer":
      return EDotaUserMessages.DOTA_UM_SalutePlayer;
    case 577:
    case "DOTA_UM_TipAlert":
      return EDotaUserMessages.DOTA_UM_TipAlert;
    case 578:
    case "DOTA_UM_ReplaceQueryUnit":
      return EDotaUserMessages.DOTA_UM_ReplaceQueryUnit;
    case 579:
    case "DOTA_UM_EmptyTeleportAlert":
      return EDotaUserMessages.DOTA_UM_EmptyTeleportAlert;
    case 580:
    case "DOTA_UM_MarsArenaOfBloodAttack":
      return EDotaUserMessages.DOTA_UM_MarsArenaOfBloodAttack;
    case 581:
    case "DOTA_UM_ESArcanaCombo":
      return EDotaUserMessages.DOTA_UM_ESArcanaCombo;
    case 582:
    case "DOTA_UM_ESArcanaComboSummary":
      return EDotaUserMessages.DOTA_UM_ESArcanaComboSummary;
    case 583:
    case "DOTA_UM_HighFiveLeftHanging":
      return EDotaUserMessages.DOTA_UM_HighFiveLeftHanging;
    case 584:
    case "DOTA_UM_HighFiveCompleted":
      return EDotaUserMessages.DOTA_UM_HighFiveCompleted;
    case 585:
    case "DOTA_UM_ShovelUnearth":
      return EDotaUserMessages.DOTA_UM_ShovelUnearth;
    case 586:
    case "DOTA_EM_InvokerSpellCast":
      return EDotaUserMessages.DOTA_EM_InvokerSpellCast;
    case 587:
    case "DOTA_UM_RadarAlert":
      return EDotaUserMessages.DOTA_UM_RadarAlert;
    case 588:
    case "DOTA_UM_AllStarEvent":
      return EDotaUserMessages.DOTA_UM_AllStarEvent;
    case 589:
    case "DOTA_UM_TalentTreeAlert":
      return EDotaUserMessages.DOTA_UM_TalentTreeAlert;
    case 590:
    case "DOTA_UM_QueuedOrderRemoved":
      return EDotaUserMessages.DOTA_UM_QueuedOrderRemoved;
    case 591:
    case "DOTA_UM_DebugChallenge":
      return EDotaUserMessages.DOTA_UM_DebugChallenge;
    case 592:
    case "DOTA_UM_OMArcanaCombo":
      return EDotaUserMessages.DOTA_UM_OMArcanaCombo;
    case 593:
    case "DOTA_UM_FoundNeutralItem":
      return EDotaUserMessages.DOTA_UM_FoundNeutralItem;
    case 594:
    case "DOTA_UM_OutpostCaptured":
      return EDotaUserMessages.DOTA_UM_OutpostCaptured;
    case 595:
    case "DOTA_UM_OutpostGrantedXP":
      return EDotaUserMessages.DOTA_UM_OutpostGrantedXP;
    case 596:
    case "DOTA_UM_MoveCameraToUnit":
      return EDotaUserMessages.DOTA_UM_MoveCameraToUnit;
    case 597:
    case "DOTA_UM_PauseMinigameData":
      return EDotaUserMessages.DOTA_UM_PauseMinigameData;
    case 598:
    case "DOTA_UM_VersusScene_PlayerBehavior":
      return EDotaUserMessages.DOTA_UM_VersusScene_PlayerBehavior;
    case 600:
    case "DOTA_UM_QoP_ArcanaSummary":
      return EDotaUserMessages.DOTA_UM_QoP_ArcanaSummary;
    case 601:
    case "DOTA_UM_HotPotato_Created":
      return EDotaUserMessages.DOTA_UM_HotPotato_Created;
    case 602:
    case "DOTA_UM_HotPotato_Exploded":
      return EDotaUserMessages.DOTA_UM_HotPotato_Exploded;
    case 603:
    case "DOTA_UM_WK_Arcana_Progress":
      return EDotaUserMessages.DOTA_UM_WK_Arcana_Progress;
    case 604:
    case "DOTA_UM_GuildChallenge_Progress":
      return EDotaUserMessages.DOTA_UM_GuildChallenge_Progress;
    case 605:
    case "DOTA_UM_WRArcanaProgress":
      return EDotaUserMessages.DOTA_UM_WRArcanaProgress;
    case 606:
    case "DOTA_UM_WRArcanaSummary":
      return EDotaUserMessages.DOTA_UM_WRArcanaSummary;
    case 607:
    case "DOTA_UM_EmptyItemSlotAlert":
      return EDotaUserMessages.DOTA_UM_EmptyItemSlotAlert;
    case 608:
    case "DOTA_UM_AghsStatusAlert":
      return EDotaUserMessages.DOTA_UM_AghsStatusAlert;
    case 609:
    case "DOTA_UM_PingConfirmation":
      return EDotaUserMessages.DOTA_UM_PingConfirmation;
    case 610:
    case "DOTA_UM_MutedPlayers":
      return EDotaUserMessages.DOTA_UM_MutedPlayers;
    case 611:
    case "DOTA_UM_ContextualTip":
      return EDotaUserMessages.DOTA_UM_ContextualTip;
    case 612:
    case "DOTA_UM_ChatMessage":
      return EDotaUserMessages.DOTA_UM_ChatMessage;
    case 613:
    case "DOTA_UM_NeutralCampAlert":
      return EDotaUserMessages.DOTA_UM_NeutralCampAlert;
    case 614:
    case "DOTA_UM_RockPaperScissorsStarted":
      return EDotaUserMessages.DOTA_UM_RockPaperScissorsStarted;
    case 615:
    case "DOTA_UM_RockPaperScissorsFinished":
      return EDotaUserMessages.DOTA_UM_RockPaperScissorsFinished;
    case 616:
    case "DOTA_UM_DuelOpponentKilled":
      return EDotaUserMessages.DOTA_UM_DuelOpponentKilled;
    case 617:
    case "DOTA_UM_DuelAccepted":
      return EDotaUserMessages.DOTA_UM_DuelAccepted;
    case 618:
    case "DOTA_UM_DuelRequested":
      return EDotaUserMessages.DOTA_UM_DuelRequested;
    case 619:
    case "DOTA_UM_MuertaReleaseEvent_AssignedTargetKilled":
      return EDotaUserMessages.DOTA_UM_MuertaReleaseEvent_AssignedTargetKilled;
    case 620:
    case "DOTA_UM_PlayerDraftSuggestPick":
      return EDotaUserMessages.DOTA_UM_PlayerDraftSuggestPick;
    case 621:
    case "DOTA_UM_PlayerDraftPick":
      return EDotaUserMessages.DOTA_UM_PlayerDraftPick;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDotaUserMessages");
  }
}

export function eDotaUserMessagesToJSON(object: EDotaUserMessages): string {
  switch (object) {
    case EDotaUserMessages.DOTA_UM_AddUnitToSelection:
      return "DOTA_UM_AddUnitToSelection";
    case EDotaUserMessages.DOTA_UM_AIDebugLine:
      return "DOTA_UM_AIDebugLine";
    case EDotaUserMessages.DOTA_UM_ChatEvent:
      return "DOTA_UM_ChatEvent";
    case EDotaUserMessages.DOTA_UM_CombatHeroPositions:
      return "DOTA_UM_CombatHeroPositions";
    case EDotaUserMessages.DOTA_UM_CombatLogData:
      return "DOTA_UM_CombatLogData";
    case EDotaUserMessages.DOTA_UM_CombatLogBulkData:
      return "DOTA_UM_CombatLogBulkData";
    case EDotaUserMessages.DOTA_UM_CreateLinearProjectile:
      return "DOTA_UM_CreateLinearProjectile";
    case EDotaUserMessages.DOTA_UM_DestroyLinearProjectile:
      return "DOTA_UM_DestroyLinearProjectile";
    case EDotaUserMessages.DOTA_UM_DodgeTrackingProjectiles:
      return "DOTA_UM_DodgeTrackingProjectiles";
    case EDotaUserMessages.DOTA_UM_GlobalLightColor:
      return "DOTA_UM_GlobalLightColor";
    case EDotaUserMessages.DOTA_UM_GlobalLightDirection:
      return "DOTA_UM_GlobalLightDirection";
    case EDotaUserMessages.DOTA_UM_InvalidCommand:
      return "DOTA_UM_InvalidCommand";
    case EDotaUserMessages.DOTA_UM_LocationPing:
      return "DOTA_UM_LocationPing";
    case EDotaUserMessages.DOTA_UM_MapLine:
      return "DOTA_UM_MapLine";
    case EDotaUserMessages.DOTA_UM_MiniKillCamInfo:
      return "DOTA_UM_MiniKillCamInfo";
    case EDotaUserMessages.DOTA_UM_MinimapDebugPoint:
      return "DOTA_UM_MinimapDebugPoint";
    case EDotaUserMessages.DOTA_UM_MinimapEvent:
      return "DOTA_UM_MinimapEvent";
    case EDotaUserMessages.DOTA_UM_NevermoreRequiem:
      return "DOTA_UM_NevermoreRequiem";
    case EDotaUserMessages.DOTA_UM_OverheadEvent:
      return "DOTA_UM_OverheadEvent";
    case EDotaUserMessages.DOTA_UM_SetNextAutobuyItem:
      return "DOTA_UM_SetNextAutobuyItem";
    case EDotaUserMessages.DOTA_UM_SharedCooldown:
      return "DOTA_UM_SharedCooldown";
    case EDotaUserMessages.DOTA_UM_SpectatorPlayerClick:
      return "DOTA_UM_SpectatorPlayerClick";
    case EDotaUserMessages.DOTA_UM_TutorialTipInfo:
      return "DOTA_UM_TutorialTipInfo";
    case EDotaUserMessages.DOTA_UM_UnitEvent:
      return "DOTA_UM_UnitEvent";
    case EDotaUserMessages.DOTA_UM_ParticleManager:
      return "DOTA_UM_ParticleManager";
    case EDotaUserMessages.DOTA_UM_BotChat:
      return "DOTA_UM_BotChat";
    case EDotaUserMessages.DOTA_UM_HudError:
      return "DOTA_UM_HudError";
    case EDotaUserMessages.DOTA_UM_ItemPurchased:
      return "DOTA_UM_ItemPurchased";
    case EDotaUserMessages.DOTA_UM_Ping:
      return "DOTA_UM_Ping";
    case EDotaUserMessages.DOTA_UM_ItemFound:
      return "DOTA_UM_ItemFound";
    case EDotaUserMessages.DOTA_UM_CharacterSpeakConcept:
      return "DOTA_UM_CharacterSpeakConcept";
    case EDotaUserMessages.DOTA_UM_SwapVerify:
      return "DOTA_UM_SwapVerify";
    case EDotaUserMessages.DOTA_UM_WorldLine:
      return "DOTA_UM_WorldLine";
    case EDotaUserMessages.DOTA_UM_TournamentDrop:
      return "DOTA_UM_TournamentDrop";
    case EDotaUserMessages.DOTA_UM_ItemAlert:
      return "DOTA_UM_ItemAlert";
    case EDotaUserMessages.DOTA_UM_HalloweenDrops:
      return "DOTA_UM_HalloweenDrops";
    case EDotaUserMessages.DOTA_UM_ChatWheel:
      return "DOTA_UM_ChatWheel";
    case EDotaUserMessages.DOTA_UM_ReceivedXmasGift:
      return "DOTA_UM_ReceivedXmasGift";
    case EDotaUserMessages.DOTA_UM_UpdateSharedContent:
      return "DOTA_UM_UpdateSharedContent";
    case EDotaUserMessages.DOTA_UM_TutorialRequestExp:
      return "DOTA_UM_TutorialRequestExp";
    case EDotaUserMessages.DOTA_UM_TutorialPingMinimap:
      return "DOTA_UM_TutorialPingMinimap";
    case EDotaUserMessages.DOTA_UM_GamerulesStateChanged:
      return "DOTA_UM_GamerulesStateChanged";
    case EDotaUserMessages.DOTA_UM_ShowSurvey:
      return "DOTA_UM_ShowSurvey";
    case EDotaUserMessages.DOTA_UM_TutorialFade:
      return "DOTA_UM_TutorialFade";
    case EDotaUserMessages.DOTA_UM_AddQuestLogEntry:
      return "DOTA_UM_AddQuestLogEntry";
    case EDotaUserMessages.DOTA_UM_SendStatPopup:
      return "DOTA_UM_SendStatPopup";
    case EDotaUserMessages.DOTA_UM_TutorialFinish:
      return "DOTA_UM_TutorialFinish";
    case EDotaUserMessages.DOTA_UM_SendRoshanPopup:
      return "DOTA_UM_SendRoshanPopup";
    case EDotaUserMessages.DOTA_UM_SendGenericToolTip:
      return "DOTA_UM_SendGenericToolTip";
    case EDotaUserMessages.DOTA_UM_SendFinalGold:
      return "DOTA_UM_SendFinalGold";
    case EDotaUserMessages.DOTA_UM_CustomMsg:
      return "DOTA_UM_CustomMsg";
    case EDotaUserMessages.DOTA_UM_CoachHUDPing:
      return "DOTA_UM_CoachHUDPing";
    case EDotaUserMessages.DOTA_UM_ClientLoadGridNav:
      return "DOTA_UM_ClientLoadGridNav";
    case EDotaUserMessages.DOTA_UM_TE_Projectile:
      return "DOTA_UM_TE_Projectile";
    case EDotaUserMessages.DOTA_UM_TE_ProjectileLoc:
      return "DOTA_UM_TE_ProjectileLoc";
    case EDotaUserMessages.DOTA_UM_TE_DotaBloodImpact:
      return "DOTA_UM_TE_DotaBloodImpact";
    case EDotaUserMessages.DOTA_UM_TE_UnitAnimation:
      return "DOTA_UM_TE_UnitAnimation";
    case EDotaUserMessages.DOTA_UM_TE_UnitAnimationEnd:
      return "DOTA_UM_TE_UnitAnimationEnd";
    case EDotaUserMessages.DOTA_UM_AbilityPing:
      return "DOTA_UM_AbilityPing";
    case EDotaUserMessages.DOTA_UM_ShowGenericPopup:
      return "DOTA_UM_ShowGenericPopup";
    case EDotaUserMessages.DOTA_UM_VoteStart:
      return "DOTA_UM_VoteStart";
    case EDotaUserMessages.DOTA_UM_VoteUpdate:
      return "DOTA_UM_VoteUpdate";
    case EDotaUserMessages.DOTA_UM_VoteEnd:
      return "DOTA_UM_VoteEnd";
    case EDotaUserMessages.DOTA_UM_BoosterState:
      return "DOTA_UM_BoosterState";
    case EDotaUserMessages.DOTA_UM_WillPurchaseAlert:
      return "DOTA_UM_WillPurchaseAlert";
    case EDotaUserMessages.DOTA_UM_TutorialMinimapPosition:
      return "DOTA_UM_TutorialMinimapPosition";
    case EDotaUserMessages.DOTA_UM_PlayerMMR:
      return "DOTA_UM_PlayerMMR";
    case EDotaUserMessages.DOTA_UM_AbilitySteal:
      return "DOTA_UM_AbilitySteal";
    case EDotaUserMessages.DOTA_UM_CourierKilledAlert:
      return "DOTA_UM_CourierKilledAlert";
    case EDotaUserMessages.DOTA_UM_EnemyItemAlert:
      return "DOTA_UM_EnemyItemAlert";
    case EDotaUserMessages.DOTA_UM_StatsMatchDetails:
      return "DOTA_UM_StatsMatchDetails";
    case EDotaUserMessages.DOTA_UM_MiniTaunt:
      return "DOTA_UM_MiniTaunt";
    case EDotaUserMessages.DOTA_UM_BuyBackStateAlert:
      return "DOTA_UM_BuyBackStateAlert";
    case EDotaUserMessages.DOTA_UM_SpeechBubble:
      return "DOTA_UM_SpeechBubble";
    case EDotaUserMessages.DOTA_UM_CustomHeaderMessage:
      return "DOTA_UM_CustomHeaderMessage";
    case EDotaUserMessages.DOTA_UM_QuickBuyAlert:
      return "DOTA_UM_QuickBuyAlert";
    case EDotaUserMessages.DOTA_UM_StatsHeroDetails:
      return "DOTA_UM_StatsHeroDetails";
    case EDotaUserMessages.DOTA_UM_PredictionResult:
      return "DOTA_UM_PredictionResult";
    case EDotaUserMessages.DOTA_UM_ModifierAlert:
      return "DOTA_UM_ModifierAlert";
    case EDotaUserMessages.DOTA_UM_HPManaAlert:
      return "DOTA_UM_HPManaAlert";
    case EDotaUserMessages.DOTA_UM_GlyphAlert:
      return "DOTA_UM_GlyphAlert";
    case EDotaUserMessages.DOTA_UM_BeastChat:
      return "DOTA_UM_BeastChat";
    case EDotaUserMessages.DOTA_UM_SpectatorPlayerUnitOrders:
      return "DOTA_UM_SpectatorPlayerUnitOrders";
    case EDotaUserMessages.DOTA_UM_CustomHudElement_Create:
      return "DOTA_UM_CustomHudElement_Create";
    case EDotaUserMessages.DOTA_UM_CustomHudElement_Modify:
      return "DOTA_UM_CustomHudElement_Modify";
    case EDotaUserMessages.DOTA_UM_CustomHudElement_Destroy:
      return "DOTA_UM_CustomHudElement_Destroy";
    case EDotaUserMessages.DOTA_UM_CompendiumState:
      return "DOTA_UM_CompendiumState";
    case EDotaUserMessages.DOTA_UM_ProjectionAbility:
      return "DOTA_UM_ProjectionAbility";
    case EDotaUserMessages.DOTA_UM_ProjectionEvent:
      return "DOTA_UM_ProjectionEvent";
    case EDotaUserMessages.DOTA_UM_CombatLogDataHLTV:
      return "DOTA_UM_CombatLogDataHLTV";
    case EDotaUserMessages.DOTA_UM_XPAlert:
      return "DOTA_UM_XPAlert";
    case EDotaUserMessages.DOTA_UM_UpdateQuestProgress:
      return "DOTA_UM_UpdateQuestProgress";
    case EDotaUserMessages.DOTA_UM_MatchMetadata:
      return "DOTA_UM_MatchMetadata";
    case EDotaUserMessages.DOTA_UM_MatchDetails:
      return "DOTA_UM_MatchDetails";
    case EDotaUserMessages.DOTA_UM_QuestStatus:
      return "DOTA_UM_QuestStatus";
    case EDotaUserMessages.DOTA_UM_SuggestHeroPick:
      return "DOTA_UM_SuggestHeroPick";
    case EDotaUserMessages.DOTA_UM_SuggestHeroRole:
      return "DOTA_UM_SuggestHeroRole";
    case EDotaUserMessages.DOTA_UM_KillcamDamageTaken:
      return "DOTA_UM_KillcamDamageTaken";
    case EDotaUserMessages.DOTA_UM_SelectPenaltyGold:
      return "DOTA_UM_SelectPenaltyGold";
    case EDotaUserMessages.DOTA_UM_RollDiceResult:
      return "DOTA_UM_RollDiceResult";
    case EDotaUserMessages.DOTA_UM_FlipCoinResult:
      return "DOTA_UM_FlipCoinResult";
    case EDotaUserMessages.DOTA_UM_RequestItemSuggestions:
      return "DOTA_UM_RequestItemSuggestions";
    case EDotaUserMessages.DOTA_UM_TeamCaptainChanged:
      return "DOTA_UM_TeamCaptainChanged";
    case EDotaUserMessages.DOTA_UM_SendRoshanSpectatorPhase:
      return "DOTA_UM_SendRoshanSpectatorPhase";
    case EDotaUserMessages.DOTA_UM_ChatWheelCooldown:
      return "DOTA_UM_ChatWheelCooldown";
    case EDotaUserMessages.DOTA_UM_DismissAllStatPopups:
      return "DOTA_UM_DismissAllStatPopups";
    case EDotaUserMessages.DOTA_UM_TE_DestroyProjectile:
      return "DOTA_UM_TE_DestroyProjectile";
    case EDotaUserMessages.DOTA_UM_HeroRelicProgress:
      return "DOTA_UM_HeroRelicProgress";
    case EDotaUserMessages.DOTA_UM_AbilityDraftRequestAbility:
      return "DOTA_UM_AbilityDraftRequestAbility";
    case EDotaUserMessages.DOTA_UM_ItemSold:
      return "DOTA_UM_ItemSold";
    case EDotaUserMessages.DOTA_UM_DamageReport:
      return "DOTA_UM_DamageReport";
    case EDotaUserMessages.DOTA_UM_SalutePlayer:
      return "DOTA_UM_SalutePlayer";
    case EDotaUserMessages.DOTA_UM_TipAlert:
      return "DOTA_UM_TipAlert";
    case EDotaUserMessages.DOTA_UM_ReplaceQueryUnit:
      return "DOTA_UM_ReplaceQueryUnit";
    case EDotaUserMessages.DOTA_UM_EmptyTeleportAlert:
      return "DOTA_UM_EmptyTeleportAlert";
    case EDotaUserMessages.DOTA_UM_MarsArenaOfBloodAttack:
      return "DOTA_UM_MarsArenaOfBloodAttack";
    case EDotaUserMessages.DOTA_UM_ESArcanaCombo:
      return "DOTA_UM_ESArcanaCombo";
    case EDotaUserMessages.DOTA_UM_ESArcanaComboSummary:
      return "DOTA_UM_ESArcanaComboSummary";
    case EDotaUserMessages.DOTA_UM_HighFiveLeftHanging:
      return "DOTA_UM_HighFiveLeftHanging";
    case EDotaUserMessages.DOTA_UM_HighFiveCompleted:
      return "DOTA_UM_HighFiveCompleted";
    case EDotaUserMessages.DOTA_UM_ShovelUnearth:
      return "DOTA_UM_ShovelUnearth";
    case EDotaUserMessages.DOTA_EM_InvokerSpellCast:
      return "DOTA_EM_InvokerSpellCast";
    case EDotaUserMessages.DOTA_UM_RadarAlert:
      return "DOTA_UM_RadarAlert";
    case EDotaUserMessages.DOTA_UM_AllStarEvent:
      return "DOTA_UM_AllStarEvent";
    case EDotaUserMessages.DOTA_UM_TalentTreeAlert:
      return "DOTA_UM_TalentTreeAlert";
    case EDotaUserMessages.DOTA_UM_QueuedOrderRemoved:
      return "DOTA_UM_QueuedOrderRemoved";
    case EDotaUserMessages.DOTA_UM_DebugChallenge:
      return "DOTA_UM_DebugChallenge";
    case EDotaUserMessages.DOTA_UM_OMArcanaCombo:
      return "DOTA_UM_OMArcanaCombo";
    case EDotaUserMessages.DOTA_UM_FoundNeutralItem:
      return "DOTA_UM_FoundNeutralItem";
    case EDotaUserMessages.DOTA_UM_OutpostCaptured:
      return "DOTA_UM_OutpostCaptured";
    case EDotaUserMessages.DOTA_UM_OutpostGrantedXP:
      return "DOTA_UM_OutpostGrantedXP";
    case EDotaUserMessages.DOTA_UM_MoveCameraToUnit:
      return "DOTA_UM_MoveCameraToUnit";
    case EDotaUserMessages.DOTA_UM_PauseMinigameData:
      return "DOTA_UM_PauseMinigameData";
    case EDotaUserMessages.DOTA_UM_VersusScene_PlayerBehavior:
      return "DOTA_UM_VersusScene_PlayerBehavior";
    case EDotaUserMessages.DOTA_UM_QoP_ArcanaSummary:
      return "DOTA_UM_QoP_ArcanaSummary";
    case EDotaUserMessages.DOTA_UM_HotPotato_Created:
      return "DOTA_UM_HotPotato_Created";
    case EDotaUserMessages.DOTA_UM_HotPotato_Exploded:
      return "DOTA_UM_HotPotato_Exploded";
    case EDotaUserMessages.DOTA_UM_WK_Arcana_Progress:
      return "DOTA_UM_WK_Arcana_Progress";
    case EDotaUserMessages.DOTA_UM_GuildChallenge_Progress:
      return "DOTA_UM_GuildChallenge_Progress";
    case EDotaUserMessages.DOTA_UM_WRArcanaProgress:
      return "DOTA_UM_WRArcanaProgress";
    case EDotaUserMessages.DOTA_UM_WRArcanaSummary:
      return "DOTA_UM_WRArcanaSummary";
    case EDotaUserMessages.DOTA_UM_EmptyItemSlotAlert:
      return "DOTA_UM_EmptyItemSlotAlert";
    case EDotaUserMessages.DOTA_UM_AghsStatusAlert:
      return "DOTA_UM_AghsStatusAlert";
    case EDotaUserMessages.DOTA_UM_PingConfirmation:
      return "DOTA_UM_PingConfirmation";
    case EDotaUserMessages.DOTA_UM_MutedPlayers:
      return "DOTA_UM_MutedPlayers";
    case EDotaUserMessages.DOTA_UM_ContextualTip:
      return "DOTA_UM_ContextualTip";
    case EDotaUserMessages.DOTA_UM_ChatMessage:
      return "DOTA_UM_ChatMessage";
    case EDotaUserMessages.DOTA_UM_NeutralCampAlert:
      return "DOTA_UM_NeutralCampAlert";
    case EDotaUserMessages.DOTA_UM_RockPaperScissorsStarted:
      return "DOTA_UM_RockPaperScissorsStarted";
    case EDotaUserMessages.DOTA_UM_RockPaperScissorsFinished:
      return "DOTA_UM_RockPaperScissorsFinished";
    case EDotaUserMessages.DOTA_UM_DuelOpponentKilled:
      return "DOTA_UM_DuelOpponentKilled";
    case EDotaUserMessages.DOTA_UM_DuelAccepted:
      return "DOTA_UM_DuelAccepted";
    case EDotaUserMessages.DOTA_UM_DuelRequested:
      return "DOTA_UM_DuelRequested";
    case EDotaUserMessages.DOTA_UM_MuertaReleaseEvent_AssignedTargetKilled:
      return "DOTA_UM_MuertaReleaseEvent_AssignedTargetKilled";
    case EDotaUserMessages.DOTA_UM_PlayerDraftSuggestPick:
      return "DOTA_UM_PlayerDraftSuggestPick";
    case EDotaUserMessages.DOTA_UM_PlayerDraftPick:
      return "DOTA_UM_PlayerDraftPick";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDotaUserMessages");
  }
}

export enum dotaChatMessage {
  CHAT_MESSAGE_INVALID = -1,
  CHAT_MESSAGE_HERO_KILL = 0,
  CHAT_MESSAGE_HERO_DENY = 1,
  CHAT_MESSAGE_BARRACKS_KILL = 2,
  CHAT_MESSAGE_TOWER_KILL = 3,
  CHAT_MESSAGE_TOWER_DENY = 4,
  CHAT_MESSAGE_FIRSTBLOOD = 5,
  CHAT_MESSAGE_STREAK_KILL = 6,
  CHAT_MESSAGE_BUYBACK = 7,
  CHAT_MESSAGE_AEGIS = 8,
  CHAT_MESSAGE_ROSHAN_KILL = 9,
  CHAT_MESSAGE_COURIER_LOST = 10,
  CHAT_MESSAGE_COURIER_RESPAWNED = 11,
  CHAT_MESSAGE_GLYPH_USED = 12,
  CHAT_MESSAGE_ITEM_PURCHASE = 13,
  CHAT_MESSAGE_CONNECT = 14,
  CHAT_MESSAGE_DISCONNECT = 15,
  CHAT_MESSAGE_DISCONNECT_WAIT_FOR_RECONNECT = 16,
  CHAT_MESSAGE_DISCONNECT_TIME_REMAINING = 17,
  CHAT_MESSAGE_DISCONNECT_TIME_REMAINING_PLURAL = 18,
  CHAT_MESSAGE_RECONNECT = 19,
  CHAT_MESSAGE_PLAYER_LEFT = 20,
  CHAT_MESSAGE_SAFE_TO_LEAVE = 21,
  CHAT_MESSAGE_RUNE_PICKUP = 22,
  CHAT_MESSAGE_RUNE_BOTTLE = 23,
  CHAT_MESSAGE_RUNE_DENY = 114,
  CHAT_MESSAGE_INTHEBAG = 24,
  CHAT_MESSAGE_SECRETSHOP = 25,
  CHAT_MESSAGE_ITEM_AUTOPURCHASED = 26,
  CHAT_MESSAGE_ITEMS_COMBINED = 27,
  CHAT_MESSAGE_SUPER_CREEPS = 28,
  CHAT_MESSAGE_CANT_USE_ACTION_ITEM = 29,
  CHAT_MESSAGE_CANTPAUSE = 31,
  CHAT_MESSAGE_NOPAUSESLEFT = 32,
  CHAT_MESSAGE_CANTPAUSEYET = 33,
  CHAT_MESSAGE_PAUSED = 34,
  CHAT_MESSAGE_UNPAUSE_COUNTDOWN = 35,
  CHAT_MESSAGE_UNPAUSED = 36,
  CHAT_MESSAGE_AUTO_UNPAUSED = 37,
  CHAT_MESSAGE_YOUPAUSED = 38,
  CHAT_MESSAGE_CANTUNPAUSETEAM = 39,
  CHAT_MESSAGE_VOICE_TEXT_BANNED = 41,
  CHAT_MESSAGE_SPECTATORS_WATCHING_THIS_GAME = 42,
  CHAT_MESSAGE_REPORT_REMINDER = 43,
  CHAT_MESSAGE_ECON_ITEM = 44,
  CHAT_MESSAGE_TAUNT = 45,
  CHAT_MESSAGE_RANDOM = 46,
  CHAT_MESSAGE_RD_TURN = 47,
  CHAT_MESSAGE_DROP_RATE_BONUS = 49,
  CHAT_MESSAGE_NO_BATTLE_POINTS = 50,
  CHAT_MESSAGE_DENIED_AEGIS = 51,
  CHAT_MESSAGE_INFORMATIONAL = 52,
  CHAT_MESSAGE_AEGIS_STOLEN = 53,
  CHAT_MESSAGE_ROSHAN_CANDY = 54,
  CHAT_MESSAGE_ITEM_GIFTED = 55,
  CHAT_MESSAGE_HERO_KILL_WITH_GREEVIL = 56,
  CHAT_MESSAGE_HOLDOUT_TOWER_DESTROYED = 57,
  CHAT_MESSAGE_HOLDOUT_WALL_DESTROYED = 58,
  CHAT_MESSAGE_HOLDOUT_WALL_FINISHED = 59,
  CHAT_MESSAGE_PLAYER_LEFT_LIMITED_HERO = 62,
  CHAT_MESSAGE_ABANDON_LIMITED_HERO_EXPLANATION = 63,
  CHAT_MESSAGE_DISCONNECT_LIMITED_HERO = 64,
  CHAT_MESSAGE_LOW_PRIORITY_COMPLETED_EXPLANATION = 65,
  CHAT_MESSAGE_RECRUITMENT_DROP_RATE_BONUS = 66,
  CHAT_MESSAGE_FROSTIVUS_SHINING_BOOSTER_ACTIVE = 67,
  CHAT_MESSAGE_PLAYER_LEFT_AFK = 73,
  CHAT_MESSAGE_PLAYER_LEFT_DISCONNECTED_TOO_LONG = 74,
  CHAT_MESSAGE_PLAYER_ABANDONED = 75,
  CHAT_MESSAGE_PLAYER_ABANDONED_AFK = 76,
  CHAT_MESSAGE_PLAYER_ABANDONED_DISCONNECTED_TOO_LONG = 77,
  CHAT_MESSAGE_WILL_NOT_BE_SCORED = 78,
  CHAT_MESSAGE_WILL_NOT_BE_SCORED_RANKED = 79,
  CHAT_MESSAGE_WILL_NOT_BE_SCORED_NETWORK = 80,
  CHAT_MESSAGE_WILL_NOT_BE_SCORED_NETWORK_RANKED = 81,
  CHAT_MESSAGE_CAN_QUIT_WITHOUT_ABANDON = 82,
  CHAT_MESSAGE_RANKED_GAME_STILL_SCORED_LEAVERS_GET_LOSS = 83,
  CHAT_MESSAGE_ABANDON_RANKED_BEFORE_FIRST_BLOOD_PARTY = 84,
  CHAT_MESSAGE_COMPENDIUM_LEVEL = 85,
  CHAT_MESSAGE_VICTORY_PREDICTION_STREAK = 86,
  CHAT_MESSAGE_ASSASSIN_ANNOUNCE = 87,
  CHAT_MESSAGE_ASSASSIN_SUCCESS = 88,
  CHAT_MESSAGE_ASSASSIN_DENIED = 89,
  CHAT_MESSAGE_VICTORY_PREDICTION_SINGLE_USER_CONFIRM = 90,
  CHAT_MESSAGE_EFFIGY_KILL = 91,
  CHAT_MESSAGE_VOICE_TEXT_BANNED_OVERFLOW = 92,
  CHAT_MESSAGE_YEAR_BEAST_KILLED = 93,
  CHAT_MESSAGE_PAUSE_COUNTDOWN = 94,
  CHAT_MESSAGE_COINS_WAGERED = 95,
  CHAT_MESSAGE_HERO_NOMINATED_BAN = 96,
  CHAT_MESSAGE_HERO_BANNED = 97,
  CHAT_MESSAGE_HERO_BAN_COUNT = 98,
  CHAT_MESSAGE_RIVER_PAINTED = 99,
  CHAT_MESSAGE_SCAN_USED = 100,
  CHAT_MESSAGE_SHRINE_KILLED = 101,
  CHAT_MESSAGE_WAGER_TOKEN_SPENT = 102,
  CHAT_MESSAGE_RANK_WAGER = 103,
  CHAT_MESSAGE_NEW_PLAYER_REMINDER = 104,
  CHAT_MESSAGE_OBSERVER_WARD_KILLED = 105,
  CHAT_MESSAGE_SENTRY_WARD_KILLED = 106,
  CHAT_MESSAGE_ITEM_PLACED_IN_NEUTRAL_STASH = 107,
  CHAT_MESSAGE_HERO_CHOICE_INVALID = 108,
  CHAT_MESSAGE_BOUNTY = 109,
  CHAT_MESSAGE_ABILITY_DRAFT_START = 110,
  CHAT_MESSAGE_HERO_FOUND_CANDY = 111,
  CHAT_MESSAGE_ABILITY_DRAFT_RANDOMED = 112,
  CHAT_MESSAGE_PRIVATE_COACH_CONNECTED = 113,
  CHAT_MESSAGE_CANT_PAUSE_TOO_EARLY = 115,
  CHAT_MESSAGE_HERO_KILL_WITH_PENGUIN = 116,
}

export function dotaChatMessageFromJSON(object: any): dotaChatMessage {
  switch (object) {
    case -1:
    case "CHAT_MESSAGE_INVALID":
      return dotaChatMessage.CHAT_MESSAGE_INVALID;
    case 0:
    case "CHAT_MESSAGE_HERO_KILL":
      return dotaChatMessage.CHAT_MESSAGE_HERO_KILL;
    case 1:
    case "CHAT_MESSAGE_HERO_DENY":
      return dotaChatMessage.CHAT_MESSAGE_HERO_DENY;
    case 2:
    case "CHAT_MESSAGE_BARRACKS_KILL":
      return dotaChatMessage.CHAT_MESSAGE_BARRACKS_KILL;
    case 3:
    case "CHAT_MESSAGE_TOWER_KILL":
      return dotaChatMessage.CHAT_MESSAGE_TOWER_KILL;
    case 4:
    case "CHAT_MESSAGE_TOWER_DENY":
      return dotaChatMessage.CHAT_MESSAGE_TOWER_DENY;
    case 5:
    case "CHAT_MESSAGE_FIRSTBLOOD":
      return dotaChatMessage.CHAT_MESSAGE_FIRSTBLOOD;
    case 6:
    case "CHAT_MESSAGE_STREAK_KILL":
      return dotaChatMessage.CHAT_MESSAGE_STREAK_KILL;
    case 7:
    case "CHAT_MESSAGE_BUYBACK":
      return dotaChatMessage.CHAT_MESSAGE_BUYBACK;
    case 8:
    case "CHAT_MESSAGE_AEGIS":
      return dotaChatMessage.CHAT_MESSAGE_AEGIS;
    case 9:
    case "CHAT_MESSAGE_ROSHAN_KILL":
      return dotaChatMessage.CHAT_MESSAGE_ROSHAN_KILL;
    case 10:
    case "CHAT_MESSAGE_COURIER_LOST":
      return dotaChatMessage.CHAT_MESSAGE_COURIER_LOST;
    case 11:
    case "CHAT_MESSAGE_COURIER_RESPAWNED":
      return dotaChatMessage.CHAT_MESSAGE_COURIER_RESPAWNED;
    case 12:
    case "CHAT_MESSAGE_GLYPH_USED":
      return dotaChatMessage.CHAT_MESSAGE_GLYPH_USED;
    case 13:
    case "CHAT_MESSAGE_ITEM_PURCHASE":
      return dotaChatMessage.CHAT_MESSAGE_ITEM_PURCHASE;
    case 14:
    case "CHAT_MESSAGE_CONNECT":
      return dotaChatMessage.CHAT_MESSAGE_CONNECT;
    case 15:
    case "CHAT_MESSAGE_DISCONNECT":
      return dotaChatMessage.CHAT_MESSAGE_DISCONNECT;
    case 16:
    case "CHAT_MESSAGE_DISCONNECT_WAIT_FOR_RECONNECT":
      return dotaChatMessage.CHAT_MESSAGE_DISCONNECT_WAIT_FOR_RECONNECT;
    case 17:
    case "CHAT_MESSAGE_DISCONNECT_TIME_REMAINING":
      return dotaChatMessage.CHAT_MESSAGE_DISCONNECT_TIME_REMAINING;
    case 18:
    case "CHAT_MESSAGE_DISCONNECT_TIME_REMAINING_PLURAL":
      return dotaChatMessage.CHAT_MESSAGE_DISCONNECT_TIME_REMAINING_PLURAL;
    case 19:
    case "CHAT_MESSAGE_RECONNECT":
      return dotaChatMessage.CHAT_MESSAGE_RECONNECT;
    case 20:
    case "CHAT_MESSAGE_PLAYER_LEFT":
      return dotaChatMessage.CHAT_MESSAGE_PLAYER_LEFT;
    case 21:
    case "CHAT_MESSAGE_SAFE_TO_LEAVE":
      return dotaChatMessage.CHAT_MESSAGE_SAFE_TO_LEAVE;
    case 22:
    case "CHAT_MESSAGE_RUNE_PICKUP":
      return dotaChatMessage.CHAT_MESSAGE_RUNE_PICKUP;
    case 23:
    case "CHAT_MESSAGE_RUNE_BOTTLE":
      return dotaChatMessage.CHAT_MESSAGE_RUNE_BOTTLE;
    case 114:
    case "CHAT_MESSAGE_RUNE_DENY":
      return dotaChatMessage.CHAT_MESSAGE_RUNE_DENY;
    case 24:
    case "CHAT_MESSAGE_INTHEBAG":
      return dotaChatMessage.CHAT_MESSAGE_INTHEBAG;
    case 25:
    case "CHAT_MESSAGE_SECRETSHOP":
      return dotaChatMessage.CHAT_MESSAGE_SECRETSHOP;
    case 26:
    case "CHAT_MESSAGE_ITEM_AUTOPURCHASED":
      return dotaChatMessage.CHAT_MESSAGE_ITEM_AUTOPURCHASED;
    case 27:
    case "CHAT_MESSAGE_ITEMS_COMBINED":
      return dotaChatMessage.CHAT_MESSAGE_ITEMS_COMBINED;
    case 28:
    case "CHAT_MESSAGE_SUPER_CREEPS":
      return dotaChatMessage.CHAT_MESSAGE_SUPER_CREEPS;
    case 29:
    case "CHAT_MESSAGE_CANT_USE_ACTION_ITEM":
      return dotaChatMessage.CHAT_MESSAGE_CANT_USE_ACTION_ITEM;
    case 31:
    case "CHAT_MESSAGE_CANTPAUSE":
      return dotaChatMessage.CHAT_MESSAGE_CANTPAUSE;
    case 32:
    case "CHAT_MESSAGE_NOPAUSESLEFT":
      return dotaChatMessage.CHAT_MESSAGE_NOPAUSESLEFT;
    case 33:
    case "CHAT_MESSAGE_CANTPAUSEYET":
      return dotaChatMessage.CHAT_MESSAGE_CANTPAUSEYET;
    case 34:
    case "CHAT_MESSAGE_PAUSED":
      return dotaChatMessage.CHAT_MESSAGE_PAUSED;
    case 35:
    case "CHAT_MESSAGE_UNPAUSE_COUNTDOWN":
      return dotaChatMessage.CHAT_MESSAGE_UNPAUSE_COUNTDOWN;
    case 36:
    case "CHAT_MESSAGE_UNPAUSED":
      return dotaChatMessage.CHAT_MESSAGE_UNPAUSED;
    case 37:
    case "CHAT_MESSAGE_AUTO_UNPAUSED":
      return dotaChatMessage.CHAT_MESSAGE_AUTO_UNPAUSED;
    case 38:
    case "CHAT_MESSAGE_YOUPAUSED":
      return dotaChatMessage.CHAT_MESSAGE_YOUPAUSED;
    case 39:
    case "CHAT_MESSAGE_CANTUNPAUSETEAM":
      return dotaChatMessage.CHAT_MESSAGE_CANTUNPAUSETEAM;
    case 41:
    case "CHAT_MESSAGE_VOICE_TEXT_BANNED":
      return dotaChatMessage.CHAT_MESSAGE_VOICE_TEXT_BANNED;
    case 42:
    case "CHAT_MESSAGE_SPECTATORS_WATCHING_THIS_GAME":
      return dotaChatMessage.CHAT_MESSAGE_SPECTATORS_WATCHING_THIS_GAME;
    case 43:
    case "CHAT_MESSAGE_REPORT_REMINDER":
      return dotaChatMessage.CHAT_MESSAGE_REPORT_REMINDER;
    case 44:
    case "CHAT_MESSAGE_ECON_ITEM":
      return dotaChatMessage.CHAT_MESSAGE_ECON_ITEM;
    case 45:
    case "CHAT_MESSAGE_TAUNT":
      return dotaChatMessage.CHAT_MESSAGE_TAUNT;
    case 46:
    case "CHAT_MESSAGE_RANDOM":
      return dotaChatMessage.CHAT_MESSAGE_RANDOM;
    case 47:
    case "CHAT_MESSAGE_RD_TURN":
      return dotaChatMessage.CHAT_MESSAGE_RD_TURN;
    case 49:
    case "CHAT_MESSAGE_DROP_RATE_BONUS":
      return dotaChatMessage.CHAT_MESSAGE_DROP_RATE_BONUS;
    case 50:
    case "CHAT_MESSAGE_NO_BATTLE_POINTS":
      return dotaChatMessage.CHAT_MESSAGE_NO_BATTLE_POINTS;
    case 51:
    case "CHAT_MESSAGE_DENIED_AEGIS":
      return dotaChatMessage.CHAT_MESSAGE_DENIED_AEGIS;
    case 52:
    case "CHAT_MESSAGE_INFORMATIONAL":
      return dotaChatMessage.CHAT_MESSAGE_INFORMATIONAL;
    case 53:
    case "CHAT_MESSAGE_AEGIS_STOLEN":
      return dotaChatMessage.CHAT_MESSAGE_AEGIS_STOLEN;
    case 54:
    case "CHAT_MESSAGE_ROSHAN_CANDY":
      return dotaChatMessage.CHAT_MESSAGE_ROSHAN_CANDY;
    case 55:
    case "CHAT_MESSAGE_ITEM_GIFTED":
      return dotaChatMessage.CHAT_MESSAGE_ITEM_GIFTED;
    case 56:
    case "CHAT_MESSAGE_HERO_KILL_WITH_GREEVIL":
      return dotaChatMessage.CHAT_MESSAGE_HERO_KILL_WITH_GREEVIL;
    case 57:
    case "CHAT_MESSAGE_HOLDOUT_TOWER_DESTROYED":
      return dotaChatMessage.CHAT_MESSAGE_HOLDOUT_TOWER_DESTROYED;
    case 58:
    case "CHAT_MESSAGE_HOLDOUT_WALL_DESTROYED":
      return dotaChatMessage.CHAT_MESSAGE_HOLDOUT_WALL_DESTROYED;
    case 59:
    case "CHAT_MESSAGE_HOLDOUT_WALL_FINISHED":
      return dotaChatMessage.CHAT_MESSAGE_HOLDOUT_WALL_FINISHED;
    case 62:
    case "CHAT_MESSAGE_PLAYER_LEFT_LIMITED_HERO":
      return dotaChatMessage.CHAT_MESSAGE_PLAYER_LEFT_LIMITED_HERO;
    case 63:
    case "CHAT_MESSAGE_ABANDON_LIMITED_HERO_EXPLANATION":
      return dotaChatMessage.CHAT_MESSAGE_ABANDON_LIMITED_HERO_EXPLANATION;
    case 64:
    case "CHAT_MESSAGE_DISCONNECT_LIMITED_HERO":
      return dotaChatMessage.CHAT_MESSAGE_DISCONNECT_LIMITED_HERO;
    case 65:
    case "CHAT_MESSAGE_LOW_PRIORITY_COMPLETED_EXPLANATION":
      return dotaChatMessage.CHAT_MESSAGE_LOW_PRIORITY_COMPLETED_EXPLANATION;
    case 66:
    case "CHAT_MESSAGE_RECRUITMENT_DROP_RATE_BONUS":
      return dotaChatMessage.CHAT_MESSAGE_RECRUITMENT_DROP_RATE_BONUS;
    case 67:
    case "CHAT_MESSAGE_FROSTIVUS_SHINING_BOOSTER_ACTIVE":
      return dotaChatMessage.CHAT_MESSAGE_FROSTIVUS_SHINING_BOOSTER_ACTIVE;
    case 73:
    case "CHAT_MESSAGE_PLAYER_LEFT_AFK":
      return dotaChatMessage.CHAT_MESSAGE_PLAYER_LEFT_AFK;
    case 74:
    case "CHAT_MESSAGE_PLAYER_LEFT_DISCONNECTED_TOO_LONG":
      return dotaChatMessage.CHAT_MESSAGE_PLAYER_LEFT_DISCONNECTED_TOO_LONG;
    case 75:
    case "CHAT_MESSAGE_PLAYER_ABANDONED":
      return dotaChatMessage.CHAT_MESSAGE_PLAYER_ABANDONED;
    case 76:
    case "CHAT_MESSAGE_PLAYER_ABANDONED_AFK":
      return dotaChatMessage.CHAT_MESSAGE_PLAYER_ABANDONED_AFK;
    case 77:
    case "CHAT_MESSAGE_PLAYER_ABANDONED_DISCONNECTED_TOO_LONG":
      return dotaChatMessage.CHAT_MESSAGE_PLAYER_ABANDONED_DISCONNECTED_TOO_LONG;
    case 78:
    case "CHAT_MESSAGE_WILL_NOT_BE_SCORED":
      return dotaChatMessage.CHAT_MESSAGE_WILL_NOT_BE_SCORED;
    case 79:
    case "CHAT_MESSAGE_WILL_NOT_BE_SCORED_RANKED":
      return dotaChatMessage.CHAT_MESSAGE_WILL_NOT_BE_SCORED_RANKED;
    case 80:
    case "CHAT_MESSAGE_WILL_NOT_BE_SCORED_NETWORK":
      return dotaChatMessage.CHAT_MESSAGE_WILL_NOT_BE_SCORED_NETWORK;
    case 81:
    case "CHAT_MESSAGE_WILL_NOT_BE_SCORED_NETWORK_RANKED":
      return dotaChatMessage.CHAT_MESSAGE_WILL_NOT_BE_SCORED_NETWORK_RANKED;
    case 82:
    case "CHAT_MESSAGE_CAN_QUIT_WITHOUT_ABANDON":
      return dotaChatMessage.CHAT_MESSAGE_CAN_QUIT_WITHOUT_ABANDON;
    case 83:
    case "CHAT_MESSAGE_RANKED_GAME_STILL_SCORED_LEAVERS_GET_LOSS":
      return dotaChatMessage.CHAT_MESSAGE_RANKED_GAME_STILL_SCORED_LEAVERS_GET_LOSS;
    case 84:
    case "CHAT_MESSAGE_ABANDON_RANKED_BEFORE_FIRST_BLOOD_PARTY":
      return dotaChatMessage.CHAT_MESSAGE_ABANDON_RANKED_BEFORE_FIRST_BLOOD_PARTY;
    case 85:
    case "CHAT_MESSAGE_COMPENDIUM_LEVEL":
      return dotaChatMessage.CHAT_MESSAGE_COMPENDIUM_LEVEL;
    case 86:
    case "CHAT_MESSAGE_VICTORY_PREDICTION_STREAK":
      return dotaChatMessage.CHAT_MESSAGE_VICTORY_PREDICTION_STREAK;
    case 87:
    case "CHAT_MESSAGE_ASSASSIN_ANNOUNCE":
      return dotaChatMessage.CHAT_MESSAGE_ASSASSIN_ANNOUNCE;
    case 88:
    case "CHAT_MESSAGE_ASSASSIN_SUCCESS":
      return dotaChatMessage.CHAT_MESSAGE_ASSASSIN_SUCCESS;
    case 89:
    case "CHAT_MESSAGE_ASSASSIN_DENIED":
      return dotaChatMessage.CHAT_MESSAGE_ASSASSIN_DENIED;
    case 90:
    case "CHAT_MESSAGE_VICTORY_PREDICTION_SINGLE_USER_CONFIRM":
      return dotaChatMessage.CHAT_MESSAGE_VICTORY_PREDICTION_SINGLE_USER_CONFIRM;
    case 91:
    case "CHAT_MESSAGE_EFFIGY_KILL":
      return dotaChatMessage.CHAT_MESSAGE_EFFIGY_KILL;
    case 92:
    case "CHAT_MESSAGE_VOICE_TEXT_BANNED_OVERFLOW":
      return dotaChatMessage.CHAT_MESSAGE_VOICE_TEXT_BANNED_OVERFLOW;
    case 93:
    case "CHAT_MESSAGE_YEAR_BEAST_KILLED":
      return dotaChatMessage.CHAT_MESSAGE_YEAR_BEAST_KILLED;
    case 94:
    case "CHAT_MESSAGE_PAUSE_COUNTDOWN":
      return dotaChatMessage.CHAT_MESSAGE_PAUSE_COUNTDOWN;
    case 95:
    case "CHAT_MESSAGE_COINS_WAGERED":
      return dotaChatMessage.CHAT_MESSAGE_COINS_WAGERED;
    case 96:
    case "CHAT_MESSAGE_HERO_NOMINATED_BAN":
      return dotaChatMessage.CHAT_MESSAGE_HERO_NOMINATED_BAN;
    case 97:
    case "CHAT_MESSAGE_HERO_BANNED":
      return dotaChatMessage.CHAT_MESSAGE_HERO_BANNED;
    case 98:
    case "CHAT_MESSAGE_HERO_BAN_COUNT":
      return dotaChatMessage.CHAT_MESSAGE_HERO_BAN_COUNT;
    case 99:
    case "CHAT_MESSAGE_RIVER_PAINTED":
      return dotaChatMessage.CHAT_MESSAGE_RIVER_PAINTED;
    case 100:
    case "CHAT_MESSAGE_SCAN_USED":
      return dotaChatMessage.CHAT_MESSAGE_SCAN_USED;
    case 101:
    case "CHAT_MESSAGE_SHRINE_KILLED":
      return dotaChatMessage.CHAT_MESSAGE_SHRINE_KILLED;
    case 102:
    case "CHAT_MESSAGE_WAGER_TOKEN_SPENT":
      return dotaChatMessage.CHAT_MESSAGE_WAGER_TOKEN_SPENT;
    case 103:
    case "CHAT_MESSAGE_RANK_WAGER":
      return dotaChatMessage.CHAT_MESSAGE_RANK_WAGER;
    case 104:
    case "CHAT_MESSAGE_NEW_PLAYER_REMINDER":
      return dotaChatMessage.CHAT_MESSAGE_NEW_PLAYER_REMINDER;
    case 105:
    case "CHAT_MESSAGE_OBSERVER_WARD_KILLED":
      return dotaChatMessage.CHAT_MESSAGE_OBSERVER_WARD_KILLED;
    case 106:
    case "CHAT_MESSAGE_SENTRY_WARD_KILLED":
      return dotaChatMessage.CHAT_MESSAGE_SENTRY_WARD_KILLED;
    case 107:
    case "CHAT_MESSAGE_ITEM_PLACED_IN_NEUTRAL_STASH":
      return dotaChatMessage.CHAT_MESSAGE_ITEM_PLACED_IN_NEUTRAL_STASH;
    case 108:
    case "CHAT_MESSAGE_HERO_CHOICE_INVALID":
      return dotaChatMessage.CHAT_MESSAGE_HERO_CHOICE_INVALID;
    case 109:
    case "CHAT_MESSAGE_BOUNTY":
      return dotaChatMessage.CHAT_MESSAGE_BOUNTY;
    case 110:
    case "CHAT_MESSAGE_ABILITY_DRAFT_START":
      return dotaChatMessage.CHAT_MESSAGE_ABILITY_DRAFT_START;
    case 111:
    case "CHAT_MESSAGE_HERO_FOUND_CANDY":
      return dotaChatMessage.CHAT_MESSAGE_HERO_FOUND_CANDY;
    case 112:
    case "CHAT_MESSAGE_ABILITY_DRAFT_RANDOMED":
      return dotaChatMessage.CHAT_MESSAGE_ABILITY_DRAFT_RANDOMED;
    case 113:
    case "CHAT_MESSAGE_PRIVATE_COACH_CONNECTED":
      return dotaChatMessage.CHAT_MESSAGE_PRIVATE_COACH_CONNECTED;
    case 115:
    case "CHAT_MESSAGE_CANT_PAUSE_TOO_EARLY":
      return dotaChatMessage.CHAT_MESSAGE_CANT_PAUSE_TOO_EARLY;
    case 116:
    case "CHAT_MESSAGE_HERO_KILL_WITH_PENGUIN":
      return dotaChatMessage.CHAT_MESSAGE_HERO_KILL_WITH_PENGUIN;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaChatMessage");
  }
}

export function dotaChatMessageToJSON(object: dotaChatMessage): string {
  switch (object) {
    case dotaChatMessage.CHAT_MESSAGE_INVALID:
      return "CHAT_MESSAGE_INVALID";
    case dotaChatMessage.CHAT_MESSAGE_HERO_KILL:
      return "CHAT_MESSAGE_HERO_KILL";
    case dotaChatMessage.CHAT_MESSAGE_HERO_DENY:
      return "CHAT_MESSAGE_HERO_DENY";
    case dotaChatMessage.CHAT_MESSAGE_BARRACKS_KILL:
      return "CHAT_MESSAGE_BARRACKS_KILL";
    case dotaChatMessage.CHAT_MESSAGE_TOWER_KILL:
      return "CHAT_MESSAGE_TOWER_KILL";
    case dotaChatMessage.CHAT_MESSAGE_TOWER_DENY:
      return "CHAT_MESSAGE_TOWER_DENY";
    case dotaChatMessage.CHAT_MESSAGE_FIRSTBLOOD:
      return "CHAT_MESSAGE_FIRSTBLOOD";
    case dotaChatMessage.CHAT_MESSAGE_STREAK_KILL:
      return "CHAT_MESSAGE_STREAK_KILL";
    case dotaChatMessage.CHAT_MESSAGE_BUYBACK:
      return "CHAT_MESSAGE_BUYBACK";
    case dotaChatMessage.CHAT_MESSAGE_AEGIS:
      return "CHAT_MESSAGE_AEGIS";
    case dotaChatMessage.CHAT_MESSAGE_ROSHAN_KILL:
      return "CHAT_MESSAGE_ROSHAN_KILL";
    case dotaChatMessage.CHAT_MESSAGE_COURIER_LOST:
      return "CHAT_MESSAGE_COURIER_LOST";
    case dotaChatMessage.CHAT_MESSAGE_COURIER_RESPAWNED:
      return "CHAT_MESSAGE_COURIER_RESPAWNED";
    case dotaChatMessage.CHAT_MESSAGE_GLYPH_USED:
      return "CHAT_MESSAGE_GLYPH_USED";
    case dotaChatMessage.CHAT_MESSAGE_ITEM_PURCHASE:
      return "CHAT_MESSAGE_ITEM_PURCHASE";
    case dotaChatMessage.CHAT_MESSAGE_CONNECT:
      return "CHAT_MESSAGE_CONNECT";
    case dotaChatMessage.CHAT_MESSAGE_DISCONNECT:
      return "CHAT_MESSAGE_DISCONNECT";
    case dotaChatMessage.CHAT_MESSAGE_DISCONNECT_WAIT_FOR_RECONNECT:
      return "CHAT_MESSAGE_DISCONNECT_WAIT_FOR_RECONNECT";
    case dotaChatMessage.CHAT_MESSAGE_DISCONNECT_TIME_REMAINING:
      return "CHAT_MESSAGE_DISCONNECT_TIME_REMAINING";
    case dotaChatMessage.CHAT_MESSAGE_DISCONNECT_TIME_REMAINING_PLURAL:
      return "CHAT_MESSAGE_DISCONNECT_TIME_REMAINING_PLURAL";
    case dotaChatMessage.CHAT_MESSAGE_RECONNECT:
      return "CHAT_MESSAGE_RECONNECT";
    case dotaChatMessage.CHAT_MESSAGE_PLAYER_LEFT:
      return "CHAT_MESSAGE_PLAYER_LEFT";
    case dotaChatMessage.CHAT_MESSAGE_SAFE_TO_LEAVE:
      return "CHAT_MESSAGE_SAFE_TO_LEAVE";
    case dotaChatMessage.CHAT_MESSAGE_RUNE_PICKUP:
      return "CHAT_MESSAGE_RUNE_PICKUP";
    case dotaChatMessage.CHAT_MESSAGE_RUNE_BOTTLE:
      return "CHAT_MESSAGE_RUNE_BOTTLE";
    case dotaChatMessage.CHAT_MESSAGE_RUNE_DENY:
      return "CHAT_MESSAGE_RUNE_DENY";
    case dotaChatMessage.CHAT_MESSAGE_INTHEBAG:
      return "CHAT_MESSAGE_INTHEBAG";
    case dotaChatMessage.CHAT_MESSAGE_SECRETSHOP:
      return "CHAT_MESSAGE_SECRETSHOP";
    case dotaChatMessage.CHAT_MESSAGE_ITEM_AUTOPURCHASED:
      return "CHAT_MESSAGE_ITEM_AUTOPURCHASED";
    case dotaChatMessage.CHAT_MESSAGE_ITEMS_COMBINED:
      return "CHAT_MESSAGE_ITEMS_COMBINED";
    case dotaChatMessage.CHAT_MESSAGE_SUPER_CREEPS:
      return "CHAT_MESSAGE_SUPER_CREEPS";
    case dotaChatMessage.CHAT_MESSAGE_CANT_USE_ACTION_ITEM:
      return "CHAT_MESSAGE_CANT_USE_ACTION_ITEM";
    case dotaChatMessage.CHAT_MESSAGE_CANTPAUSE:
      return "CHAT_MESSAGE_CANTPAUSE";
    case dotaChatMessage.CHAT_MESSAGE_NOPAUSESLEFT:
      return "CHAT_MESSAGE_NOPAUSESLEFT";
    case dotaChatMessage.CHAT_MESSAGE_CANTPAUSEYET:
      return "CHAT_MESSAGE_CANTPAUSEYET";
    case dotaChatMessage.CHAT_MESSAGE_PAUSED:
      return "CHAT_MESSAGE_PAUSED";
    case dotaChatMessage.CHAT_MESSAGE_UNPAUSE_COUNTDOWN:
      return "CHAT_MESSAGE_UNPAUSE_COUNTDOWN";
    case dotaChatMessage.CHAT_MESSAGE_UNPAUSED:
      return "CHAT_MESSAGE_UNPAUSED";
    case dotaChatMessage.CHAT_MESSAGE_AUTO_UNPAUSED:
      return "CHAT_MESSAGE_AUTO_UNPAUSED";
    case dotaChatMessage.CHAT_MESSAGE_YOUPAUSED:
      return "CHAT_MESSAGE_YOUPAUSED";
    case dotaChatMessage.CHAT_MESSAGE_CANTUNPAUSETEAM:
      return "CHAT_MESSAGE_CANTUNPAUSETEAM";
    case dotaChatMessage.CHAT_MESSAGE_VOICE_TEXT_BANNED:
      return "CHAT_MESSAGE_VOICE_TEXT_BANNED";
    case dotaChatMessage.CHAT_MESSAGE_SPECTATORS_WATCHING_THIS_GAME:
      return "CHAT_MESSAGE_SPECTATORS_WATCHING_THIS_GAME";
    case dotaChatMessage.CHAT_MESSAGE_REPORT_REMINDER:
      return "CHAT_MESSAGE_REPORT_REMINDER";
    case dotaChatMessage.CHAT_MESSAGE_ECON_ITEM:
      return "CHAT_MESSAGE_ECON_ITEM";
    case dotaChatMessage.CHAT_MESSAGE_TAUNT:
      return "CHAT_MESSAGE_TAUNT";
    case dotaChatMessage.CHAT_MESSAGE_RANDOM:
      return "CHAT_MESSAGE_RANDOM";
    case dotaChatMessage.CHAT_MESSAGE_RD_TURN:
      return "CHAT_MESSAGE_RD_TURN";
    case dotaChatMessage.CHAT_MESSAGE_DROP_RATE_BONUS:
      return "CHAT_MESSAGE_DROP_RATE_BONUS";
    case dotaChatMessage.CHAT_MESSAGE_NO_BATTLE_POINTS:
      return "CHAT_MESSAGE_NO_BATTLE_POINTS";
    case dotaChatMessage.CHAT_MESSAGE_DENIED_AEGIS:
      return "CHAT_MESSAGE_DENIED_AEGIS";
    case dotaChatMessage.CHAT_MESSAGE_INFORMATIONAL:
      return "CHAT_MESSAGE_INFORMATIONAL";
    case dotaChatMessage.CHAT_MESSAGE_AEGIS_STOLEN:
      return "CHAT_MESSAGE_AEGIS_STOLEN";
    case dotaChatMessage.CHAT_MESSAGE_ROSHAN_CANDY:
      return "CHAT_MESSAGE_ROSHAN_CANDY";
    case dotaChatMessage.CHAT_MESSAGE_ITEM_GIFTED:
      return "CHAT_MESSAGE_ITEM_GIFTED";
    case dotaChatMessage.CHAT_MESSAGE_HERO_KILL_WITH_GREEVIL:
      return "CHAT_MESSAGE_HERO_KILL_WITH_GREEVIL";
    case dotaChatMessage.CHAT_MESSAGE_HOLDOUT_TOWER_DESTROYED:
      return "CHAT_MESSAGE_HOLDOUT_TOWER_DESTROYED";
    case dotaChatMessage.CHAT_MESSAGE_HOLDOUT_WALL_DESTROYED:
      return "CHAT_MESSAGE_HOLDOUT_WALL_DESTROYED";
    case dotaChatMessage.CHAT_MESSAGE_HOLDOUT_WALL_FINISHED:
      return "CHAT_MESSAGE_HOLDOUT_WALL_FINISHED";
    case dotaChatMessage.CHAT_MESSAGE_PLAYER_LEFT_LIMITED_HERO:
      return "CHAT_MESSAGE_PLAYER_LEFT_LIMITED_HERO";
    case dotaChatMessage.CHAT_MESSAGE_ABANDON_LIMITED_HERO_EXPLANATION:
      return "CHAT_MESSAGE_ABANDON_LIMITED_HERO_EXPLANATION";
    case dotaChatMessage.CHAT_MESSAGE_DISCONNECT_LIMITED_HERO:
      return "CHAT_MESSAGE_DISCONNECT_LIMITED_HERO";
    case dotaChatMessage.CHAT_MESSAGE_LOW_PRIORITY_COMPLETED_EXPLANATION:
      return "CHAT_MESSAGE_LOW_PRIORITY_COMPLETED_EXPLANATION";
    case dotaChatMessage.CHAT_MESSAGE_RECRUITMENT_DROP_RATE_BONUS:
      return "CHAT_MESSAGE_RECRUITMENT_DROP_RATE_BONUS";
    case dotaChatMessage.CHAT_MESSAGE_FROSTIVUS_SHINING_BOOSTER_ACTIVE:
      return "CHAT_MESSAGE_FROSTIVUS_SHINING_BOOSTER_ACTIVE";
    case dotaChatMessage.CHAT_MESSAGE_PLAYER_LEFT_AFK:
      return "CHAT_MESSAGE_PLAYER_LEFT_AFK";
    case dotaChatMessage.CHAT_MESSAGE_PLAYER_LEFT_DISCONNECTED_TOO_LONG:
      return "CHAT_MESSAGE_PLAYER_LEFT_DISCONNECTED_TOO_LONG";
    case dotaChatMessage.CHAT_MESSAGE_PLAYER_ABANDONED:
      return "CHAT_MESSAGE_PLAYER_ABANDONED";
    case dotaChatMessage.CHAT_MESSAGE_PLAYER_ABANDONED_AFK:
      return "CHAT_MESSAGE_PLAYER_ABANDONED_AFK";
    case dotaChatMessage.CHAT_MESSAGE_PLAYER_ABANDONED_DISCONNECTED_TOO_LONG:
      return "CHAT_MESSAGE_PLAYER_ABANDONED_DISCONNECTED_TOO_LONG";
    case dotaChatMessage.CHAT_MESSAGE_WILL_NOT_BE_SCORED:
      return "CHAT_MESSAGE_WILL_NOT_BE_SCORED";
    case dotaChatMessage.CHAT_MESSAGE_WILL_NOT_BE_SCORED_RANKED:
      return "CHAT_MESSAGE_WILL_NOT_BE_SCORED_RANKED";
    case dotaChatMessage.CHAT_MESSAGE_WILL_NOT_BE_SCORED_NETWORK:
      return "CHAT_MESSAGE_WILL_NOT_BE_SCORED_NETWORK";
    case dotaChatMessage.CHAT_MESSAGE_WILL_NOT_BE_SCORED_NETWORK_RANKED:
      return "CHAT_MESSAGE_WILL_NOT_BE_SCORED_NETWORK_RANKED";
    case dotaChatMessage.CHAT_MESSAGE_CAN_QUIT_WITHOUT_ABANDON:
      return "CHAT_MESSAGE_CAN_QUIT_WITHOUT_ABANDON";
    case dotaChatMessage.CHAT_MESSAGE_RANKED_GAME_STILL_SCORED_LEAVERS_GET_LOSS:
      return "CHAT_MESSAGE_RANKED_GAME_STILL_SCORED_LEAVERS_GET_LOSS";
    case dotaChatMessage.CHAT_MESSAGE_ABANDON_RANKED_BEFORE_FIRST_BLOOD_PARTY:
      return "CHAT_MESSAGE_ABANDON_RANKED_BEFORE_FIRST_BLOOD_PARTY";
    case dotaChatMessage.CHAT_MESSAGE_COMPENDIUM_LEVEL:
      return "CHAT_MESSAGE_COMPENDIUM_LEVEL";
    case dotaChatMessage.CHAT_MESSAGE_VICTORY_PREDICTION_STREAK:
      return "CHAT_MESSAGE_VICTORY_PREDICTION_STREAK";
    case dotaChatMessage.CHAT_MESSAGE_ASSASSIN_ANNOUNCE:
      return "CHAT_MESSAGE_ASSASSIN_ANNOUNCE";
    case dotaChatMessage.CHAT_MESSAGE_ASSASSIN_SUCCESS:
      return "CHAT_MESSAGE_ASSASSIN_SUCCESS";
    case dotaChatMessage.CHAT_MESSAGE_ASSASSIN_DENIED:
      return "CHAT_MESSAGE_ASSASSIN_DENIED";
    case dotaChatMessage.CHAT_MESSAGE_VICTORY_PREDICTION_SINGLE_USER_CONFIRM:
      return "CHAT_MESSAGE_VICTORY_PREDICTION_SINGLE_USER_CONFIRM";
    case dotaChatMessage.CHAT_MESSAGE_EFFIGY_KILL:
      return "CHAT_MESSAGE_EFFIGY_KILL";
    case dotaChatMessage.CHAT_MESSAGE_VOICE_TEXT_BANNED_OVERFLOW:
      return "CHAT_MESSAGE_VOICE_TEXT_BANNED_OVERFLOW";
    case dotaChatMessage.CHAT_MESSAGE_YEAR_BEAST_KILLED:
      return "CHAT_MESSAGE_YEAR_BEAST_KILLED";
    case dotaChatMessage.CHAT_MESSAGE_PAUSE_COUNTDOWN:
      return "CHAT_MESSAGE_PAUSE_COUNTDOWN";
    case dotaChatMessage.CHAT_MESSAGE_COINS_WAGERED:
      return "CHAT_MESSAGE_COINS_WAGERED";
    case dotaChatMessage.CHAT_MESSAGE_HERO_NOMINATED_BAN:
      return "CHAT_MESSAGE_HERO_NOMINATED_BAN";
    case dotaChatMessage.CHAT_MESSAGE_HERO_BANNED:
      return "CHAT_MESSAGE_HERO_BANNED";
    case dotaChatMessage.CHAT_MESSAGE_HERO_BAN_COUNT:
      return "CHAT_MESSAGE_HERO_BAN_COUNT";
    case dotaChatMessage.CHAT_MESSAGE_RIVER_PAINTED:
      return "CHAT_MESSAGE_RIVER_PAINTED";
    case dotaChatMessage.CHAT_MESSAGE_SCAN_USED:
      return "CHAT_MESSAGE_SCAN_USED";
    case dotaChatMessage.CHAT_MESSAGE_SHRINE_KILLED:
      return "CHAT_MESSAGE_SHRINE_KILLED";
    case dotaChatMessage.CHAT_MESSAGE_WAGER_TOKEN_SPENT:
      return "CHAT_MESSAGE_WAGER_TOKEN_SPENT";
    case dotaChatMessage.CHAT_MESSAGE_RANK_WAGER:
      return "CHAT_MESSAGE_RANK_WAGER";
    case dotaChatMessage.CHAT_MESSAGE_NEW_PLAYER_REMINDER:
      return "CHAT_MESSAGE_NEW_PLAYER_REMINDER";
    case dotaChatMessage.CHAT_MESSAGE_OBSERVER_WARD_KILLED:
      return "CHAT_MESSAGE_OBSERVER_WARD_KILLED";
    case dotaChatMessage.CHAT_MESSAGE_SENTRY_WARD_KILLED:
      return "CHAT_MESSAGE_SENTRY_WARD_KILLED";
    case dotaChatMessage.CHAT_MESSAGE_ITEM_PLACED_IN_NEUTRAL_STASH:
      return "CHAT_MESSAGE_ITEM_PLACED_IN_NEUTRAL_STASH";
    case dotaChatMessage.CHAT_MESSAGE_HERO_CHOICE_INVALID:
      return "CHAT_MESSAGE_HERO_CHOICE_INVALID";
    case dotaChatMessage.CHAT_MESSAGE_BOUNTY:
      return "CHAT_MESSAGE_BOUNTY";
    case dotaChatMessage.CHAT_MESSAGE_ABILITY_DRAFT_START:
      return "CHAT_MESSAGE_ABILITY_DRAFT_START";
    case dotaChatMessage.CHAT_MESSAGE_HERO_FOUND_CANDY:
      return "CHAT_MESSAGE_HERO_FOUND_CANDY";
    case dotaChatMessage.CHAT_MESSAGE_ABILITY_DRAFT_RANDOMED:
      return "CHAT_MESSAGE_ABILITY_DRAFT_RANDOMED";
    case dotaChatMessage.CHAT_MESSAGE_PRIVATE_COACH_CONNECTED:
      return "CHAT_MESSAGE_PRIVATE_COACH_CONNECTED";
    case dotaChatMessage.CHAT_MESSAGE_CANT_PAUSE_TOO_EARLY:
      return "CHAT_MESSAGE_CANT_PAUSE_TOO_EARLY";
    case dotaChatMessage.CHAT_MESSAGE_HERO_KILL_WITH_PENGUIN:
      return "CHAT_MESSAGE_HERO_KILL_WITH_PENGUIN";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaChatMessage");
  }
}

export enum dotaNoBattlePointsReasons {
  NO_BATTLE_POINTS_WRONG_LOBBY_TYPE = 1,
  NO_BATTLE_POINTS_PRACTICE_BOTS = 2,
  NO_BATTLE_POINTS_CHEATS_ENABLED = 3,
  NO_BATTLE_POINTS_LOW_PRIORITY = 4,
}

export function dotaNoBattlePointsReasonsFromJSON(object: any): dotaNoBattlePointsReasons {
  switch (object) {
    case 1:
    case "NO_BATTLE_POINTS_WRONG_LOBBY_TYPE":
      return dotaNoBattlePointsReasons.NO_BATTLE_POINTS_WRONG_LOBBY_TYPE;
    case 2:
    case "NO_BATTLE_POINTS_PRACTICE_BOTS":
      return dotaNoBattlePointsReasons.NO_BATTLE_POINTS_PRACTICE_BOTS;
    case 3:
    case "NO_BATTLE_POINTS_CHEATS_ENABLED":
      return dotaNoBattlePointsReasons.NO_BATTLE_POINTS_CHEATS_ENABLED;
    case 4:
    case "NO_BATTLE_POINTS_LOW_PRIORITY":
      return dotaNoBattlePointsReasons.NO_BATTLE_POINTS_LOW_PRIORITY;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaNoBattlePointsReasons");
  }
}

export function dotaNoBattlePointsReasonsToJSON(object: dotaNoBattlePointsReasons): string {
  switch (object) {
    case dotaNoBattlePointsReasons.NO_BATTLE_POINTS_WRONG_LOBBY_TYPE:
      return "NO_BATTLE_POINTS_WRONG_LOBBY_TYPE";
    case dotaNoBattlePointsReasons.NO_BATTLE_POINTS_PRACTICE_BOTS:
      return "NO_BATTLE_POINTS_PRACTICE_BOTS";
    case dotaNoBattlePointsReasons.NO_BATTLE_POINTS_CHEATS_ENABLED:
      return "NO_BATTLE_POINTS_CHEATS_ENABLED";
    case dotaNoBattlePointsReasons.NO_BATTLE_POINTS_LOW_PRIORITY:
      return "NO_BATTLE_POINTS_LOW_PRIORITY";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaNoBattlePointsReasons");
  }
}

export enum dotaChatInformational {
  INFO_COOP_BATTLE_POINTS_RULES = 1,
  INFO_FROSTIVUS_ABANDON_REMINDER = 2,
  INFO_RANKED_REMINDER = 3,
  INFO_COOP_LOW_PRIORITY_PASSIVE_REMINDER = 4,
  INFO_CUSTOM_GAME_PENALTY_REMINDER = 5,
}

export function dotaChatInformationalFromJSON(object: any): dotaChatInformational {
  switch (object) {
    case 1:
    case "INFO_COOP_BATTLE_POINTS_RULES":
      return dotaChatInformational.INFO_COOP_BATTLE_POINTS_RULES;
    case 2:
    case "INFO_FROSTIVUS_ABANDON_REMINDER":
      return dotaChatInformational.INFO_FROSTIVUS_ABANDON_REMINDER;
    case 3:
    case "INFO_RANKED_REMINDER":
      return dotaChatInformational.INFO_RANKED_REMINDER;
    case 4:
    case "INFO_COOP_LOW_PRIORITY_PASSIVE_REMINDER":
      return dotaChatInformational.INFO_COOP_LOW_PRIORITY_PASSIVE_REMINDER;
    case 5:
    case "INFO_CUSTOM_GAME_PENALTY_REMINDER":
      return dotaChatInformational.INFO_CUSTOM_GAME_PENALTY_REMINDER;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaChatInformational");
  }
}

export function dotaChatInformationalToJSON(object: dotaChatInformational): string {
  switch (object) {
    case dotaChatInformational.INFO_COOP_BATTLE_POINTS_RULES:
      return "INFO_COOP_BATTLE_POINTS_RULES";
    case dotaChatInformational.INFO_FROSTIVUS_ABANDON_REMINDER:
      return "INFO_FROSTIVUS_ABANDON_REMINDER";
    case dotaChatInformational.INFO_RANKED_REMINDER:
      return "INFO_RANKED_REMINDER";
    case dotaChatInformational.INFO_COOP_LOW_PRIORITY_PASSIVE_REMINDER:
      return "INFO_COOP_LOW_PRIORITY_PASSIVE_REMINDER";
    case dotaChatInformational.INFO_CUSTOM_GAME_PENALTY_REMINDER:
      return "INFO_CUSTOM_GAME_PENALTY_REMINDER";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaChatInformational");
  }
}

export enum dotaAbilityPingType {
  ABILITY_PING_READY = 1,
  ABILITY_PING_MANA = 2,
  ABILITY_PING_COOLDOWN = 3,
  ABILITY_PING_ENEMY = 4,
  ABILITY_PING_UNLEARNED = 5,
  ABILITY_PING_INBACKPACK = 6,
  ABILITY_PING_INSTASH = 7,
  ABILITY_PING_ONCOURIER = 8,
  ABILITY_PING_ALLY = 9,
  ABILITY_PING_LEARN_READY = 10,
  ABILITY_PING_WILL_LEARN = 11,
  ABILITY_PING_FUTURE_LEARN = 12,
  ABILITY_PING_NEUTRAL_OFFER = 13,
  ABILITY_PING_NEUTRAL_REQUEST = 14,
  ABILITY_PING_NEUTRAL_EQUIP = 15,
  ABILITY_PING_INCOURIERBACKPACK = 16,
}

export function dotaAbilityPingTypeFromJSON(object: any): dotaAbilityPingType {
  switch (object) {
    case 1:
    case "ABILITY_PING_READY":
      return dotaAbilityPingType.ABILITY_PING_READY;
    case 2:
    case "ABILITY_PING_MANA":
      return dotaAbilityPingType.ABILITY_PING_MANA;
    case 3:
    case "ABILITY_PING_COOLDOWN":
      return dotaAbilityPingType.ABILITY_PING_COOLDOWN;
    case 4:
    case "ABILITY_PING_ENEMY":
      return dotaAbilityPingType.ABILITY_PING_ENEMY;
    case 5:
    case "ABILITY_PING_UNLEARNED":
      return dotaAbilityPingType.ABILITY_PING_UNLEARNED;
    case 6:
    case "ABILITY_PING_INBACKPACK":
      return dotaAbilityPingType.ABILITY_PING_INBACKPACK;
    case 7:
    case "ABILITY_PING_INSTASH":
      return dotaAbilityPingType.ABILITY_PING_INSTASH;
    case 8:
    case "ABILITY_PING_ONCOURIER":
      return dotaAbilityPingType.ABILITY_PING_ONCOURIER;
    case 9:
    case "ABILITY_PING_ALLY":
      return dotaAbilityPingType.ABILITY_PING_ALLY;
    case 10:
    case "ABILITY_PING_LEARN_READY":
      return dotaAbilityPingType.ABILITY_PING_LEARN_READY;
    case 11:
    case "ABILITY_PING_WILL_LEARN":
      return dotaAbilityPingType.ABILITY_PING_WILL_LEARN;
    case 12:
    case "ABILITY_PING_FUTURE_LEARN":
      return dotaAbilityPingType.ABILITY_PING_FUTURE_LEARN;
    case 13:
    case "ABILITY_PING_NEUTRAL_OFFER":
      return dotaAbilityPingType.ABILITY_PING_NEUTRAL_OFFER;
    case 14:
    case "ABILITY_PING_NEUTRAL_REQUEST":
      return dotaAbilityPingType.ABILITY_PING_NEUTRAL_REQUEST;
    case 15:
    case "ABILITY_PING_NEUTRAL_EQUIP":
      return dotaAbilityPingType.ABILITY_PING_NEUTRAL_EQUIP;
    case 16:
    case "ABILITY_PING_INCOURIERBACKPACK":
      return dotaAbilityPingType.ABILITY_PING_INCOURIERBACKPACK;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaAbilityPingType");
  }
}

export function dotaAbilityPingTypeToJSON(object: dotaAbilityPingType): string {
  switch (object) {
    case dotaAbilityPingType.ABILITY_PING_READY:
      return "ABILITY_PING_READY";
    case dotaAbilityPingType.ABILITY_PING_MANA:
      return "ABILITY_PING_MANA";
    case dotaAbilityPingType.ABILITY_PING_COOLDOWN:
      return "ABILITY_PING_COOLDOWN";
    case dotaAbilityPingType.ABILITY_PING_ENEMY:
      return "ABILITY_PING_ENEMY";
    case dotaAbilityPingType.ABILITY_PING_UNLEARNED:
      return "ABILITY_PING_UNLEARNED";
    case dotaAbilityPingType.ABILITY_PING_INBACKPACK:
      return "ABILITY_PING_INBACKPACK";
    case dotaAbilityPingType.ABILITY_PING_INSTASH:
      return "ABILITY_PING_INSTASH";
    case dotaAbilityPingType.ABILITY_PING_ONCOURIER:
      return "ABILITY_PING_ONCOURIER";
    case dotaAbilityPingType.ABILITY_PING_ALLY:
      return "ABILITY_PING_ALLY";
    case dotaAbilityPingType.ABILITY_PING_LEARN_READY:
      return "ABILITY_PING_LEARN_READY";
    case dotaAbilityPingType.ABILITY_PING_WILL_LEARN:
      return "ABILITY_PING_WILL_LEARN";
    case dotaAbilityPingType.ABILITY_PING_FUTURE_LEARN:
      return "ABILITY_PING_FUTURE_LEARN";
    case dotaAbilityPingType.ABILITY_PING_NEUTRAL_OFFER:
      return "ABILITY_PING_NEUTRAL_OFFER";
    case dotaAbilityPingType.ABILITY_PING_NEUTRAL_REQUEST:
      return "ABILITY_PING_NEUTRAL_REQUEST";
    case dotaAbilityPingType.ABILITY_PING_NEUTRAL_EQUIP:
      return "ABILITY_PING_NEUTRAL_EQUIP";
    case dotaAbilityPingType.ABILITY_PING_INCOURIERBACKPACK:
      return "ABILITY_PING_INCOURIERBACKPACK";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaAbilityPingType");
  }
}

export enum dotaReplayStateEvent {
  DOTA_REPLAY_STATE_EVENT_GAME_START = 1,
  DOTA_REPLAY_STATE_EVENT_STARTING_HORN = 2,
  DOTA_REPLAY_STATE_EVENT_FIRST_BLOOD = 3,
  DOTA_REPLAY_STATE_EVENT_SHOWCASE = 4,
  DOTA_REPLAY_STATE_EVENT_POST_GAME = 5,
  DOTA_REPLAY_STATE_EVENT_WAIT_FOR_MAP = 6,
}

export function dotaReplayStateEventFromJSON(object: any): dotaReplayStateEvent {
  switch (object) {
    case 1:
    case "DOTA_REPLAY_STATE_EVENT_GAME_START":
      return dotaReplayStateEvent.DOTA_REPLAY_STATE_EVENT_GAME_START;
    case 2:
    case "DOTA_REPLAY_STATE_EVENT_STARTING_HORN":
      return dotaReplayStateEvent.DOTA_REPLAY_STATE_EVENT_STARTING_HORN;
    case 3:
    case "DOTA_REPLAY_STATE_EVENT_FIRST_BLOOD":
      return dotaReplayStateEvent.DOTA_REPLAY_STATE_EVENT_FIRST_BLOOD;
    case 4:
    case "DOTA_REPLAY_STATE_EVENT_SHOWCASE":
      return dotaReplayStateEvent.DOTA_REPLAY_STATE_EVENT_SHOWCASE;
    case 5:
    case "DOTA_REPLAY_STATE_EVENT_POST_GAME":
      return dotaReplayStateEvent.DOTA_REPLAY_STATE_EVENT_POST_GAME;
    case 6:
    case "DOTA_REPLAY_STATE_EVENT_WAIT_FOR_MAP":
      return dotaReplayStateEvent.DOTA_REPLAY_STATE_EVENT_WAIT_FOR_MAP;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaReplayStateEvent");
  }
}

export function dotaReplayStateEventToJSON(object: dotaReplayStateEvent): string {
  switch (object) {
    case dotaReplayStateEvent.DOTA_REPLAY_STATE_EVENT_GAME_START:
      return "DOTA_REPLAY_STATE_EVENT_GAME_START";
    case dotaReplayStateEvent.DOTA_REPLAY_STATE_EVENT_STARTING_HORN:
      return "DOTA_REPLAY_STATE_EVENT_STARTING_HORN";
    case dotaReplayStateEvent.DOTA_REPLAY_STATE_EVENT_FIRST_BLOOD:
      return "DOTA_REPLAY_STATE_EVENT_FIRST_BLOOD";
    case dotaReplayStateEvent.DOTA_REPLAY_STATE_EVENT_SHOWCASE:
      return "DOTA_REPLAY_STATE_EVENT_SHOWCASE";
    case dotaReplayStateEvent.DOTA_REPLAY_STATE_EVENT_POST_GAME:
      return "DOTA_REPLAY_STATE_EVENT_POST_GAME";
    case dotaReplayStateEvent.DOTA_REPLAY_STATE_EVENT_WAIT_FOR_MAP:
      return "DOTA_REPLAY_STATE_EVENT_WAIT_FOR_MAP";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaReplayStateEvent");
  }
}

export enum EDotaEntityMessages {
  DOTA_UNIT_SPEECH = 0,
  DOTA_UNIT_SPEECH_MUTE = 1,
  DOTA_UNIT_ADD_GESTURE = 2,
  DOTA_UNIT_REMOVE_GESTURE = 3,
  DOTA_UNIT_REMOVE_ALL_GESTURES = 4,
  DOTA_UNIT_FADE_GESTURE = 6,
  DOTA_UNIT_SPEECH_CLIENTSIDE_RULES = 7,
}

export function eDotaEntityMessagesFromJSON(object: any): EDotaEntityMessages {
  switch (object) {
    case 0:
    case "DOTA_UNIT_SPEECH":
      return EDotaEntityMessages.DOTA_UNIT_SPEECH;
    case 1:
    case "DOTA_UNIT_SPEECH_MUTE":
      return EDotaEntityMessages.DOTA_UNIT_SPEECH_MUTE;
    case 2:
    case "DOTA_UNIT_ADD_GESTURE":
      return EDotaEntityMessages.DOTA_UNIT_ADD_GESTURE;
    case 3:
    case "DOTA_UNIT_REMOVE_GESTURE":
      return EDotaEntityMessages.DOTA_UNIT_REMOVE_GESTURE;
    case 4:
    case "DOTA_UNIT_REMOVE_ALL_GESTURES":
      return EDotaEntityMessages.DOTA_UNIT_REMOVE_ALL_GESTURES;
    case 6:
    case "DOTA_UNIT_FADE_GESTURE":
      return EDotaEntityMessages.DOTA_UNIT_FADE_GESTURE;
    case 7:
    case "DOTA_UNIT_SPEECH_CLIENTSIDE_RULES":
      return EDotaEntityMessages.DOTA_UNIT_SPEECH_CLIENTSIDE_RULES;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDotaEntityMessages");
  }
}

export function eDotaEntityMessagesToJSON(object: EDotaEntityMessages): string {
  switch (object) {
    case EDotaEntityMessages.DOTA_UNIT_SPEECH:
      return "DOTA_UNIT_SPEECH";
    case EDotaEntityMessages.DOTA_UNIT_SPEECH_MUTE:
      return "DOTA_UNIT_SPEECH_MUTE";
    case EDotaEntityMessages.DOTA_UNIT_ADD_GESTURE:
      return "DOTA_UNIT_ADD_GESTURE";
    case EDotaEntityMessages.DOTA_UNIT_REMOVE_GESTURE:
      return "DOTA_UNIT_REMOVE_GESTURE";
    case EDotaEntityMessages.DOTA_UNIT_REMOVE_ALL_GESTURES:
      return "DOTA_UNIT_REMOVE_ALL_GESTURES";
    case EDotaEntityMessages.DOTA_UNIT_FADE_GESTURE:
      return "DOTA_UNIT_FADE_GESTURE";
    case EDotaEntityMessages.DOTA_UNIT_SPEECH_CLIENTSIDE_RULES:
      return "DOTA_UNIT_SPEECH_CLIENTSIDE_RULES";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDotaEntityMessages");
  }
}

export enum dotaOverheadAlert {
  OVERHEAD_ALERT_GOLD = 0,
  OVERHEAD_ALERT_DENY = 1,
  OVERHEAD_ALERT_CRITICAL = 2,
  OVERHEAD_ALERT_XP = 3,
  OVERHEAD_ALERT_BONUS_SPELL_DAMAGE = 4,
  OVERHEAD_ALERT_MISS = 5,
  OVERHEAD_ALERT_DAMAGE = 6,
  OVERHEAD_ALERT_EVADE = 7,
  OVERHEAD_ALERT_BLOCK = 8,
  OVERHEAD_ALERT_BONUS_POISON_DAMAGE = 9,
  OVERHEAD_ALERT_HEAL = 10,
  OVERHEAD_ALERT_MANA_ADD = 11,
  OVERHEAD_ALERT_MANA_LOSS = 12,
  OVERHEAD_ALERT_LAST_HIT_EARLY = 13,
  OVERHEAD_ALERT_LAST_HIT_CLOSE = 14,
  OVERHEAD_ALERT_LAST_HIT_MISS = 15,
  OVERHEAD_ALERT_MAGICAL_BLOCK = 16,
  OVERHEAD_ALERT_INCOMING_DAMAGE = 17,
  OVERHEAD_ALERT_OUTGOING_DAMAGE = 18,
  OVERHEAD_ALERT_DISABLE_RESIST = 19,
  OVERHEAD_ALERT_DEATH = 20,
  OVERHEAD_ALERT_BLOCKED = 21,
  OVERHEAD_ALERT_ITEM_RECEIVED = 22,
  OVERHEAD_ALERT_SHARD = 23,
  OVERHEAD_ALERT_DEADLY_BLOW = 24,
}

export function dotaOverheadAlertFromJSON(object: any): dotaOverheadAlert {
  switch (object) {
    case 0:
    case "OVERHEAD_ALERT_GOLD":
      return dotaOverheadAlert.OVERHEAD_ALERT_GOLD;
    case 1:
    case "OVERHEAD_ALERT_DENY":
      return dotaOverheadAlert.OVERHEAD_ALERT_DENY;
    case 2:
    case "OVERHEAD_ALERT_CRITICAL":
      return dotaOverheadAlert.OVERHEAD_ALERT_CRITICAL;
    case 3:
    case "OVERHEAD_ALERT_XP":
      return dotaOverheadAlert.OVERHEAD_ALERT_XP;
    case 4:
    case "OVERHEAD_ALERT_BONUS_SPELL_DAMAGE":
      return dotaOverheadAlert.OVERHEAD_ALERT_BONUS_SPELL_DAMAGE;
    case 5:
    case "OVERHEAD_ALERT_MISS":
      return dotaOverheadAlert.OVERHEAD_ALERT_MISS;
    case 6:
    case "OVERHEAD_ALERT_DAMAGE":
      return dotaOverheadAlert.OVERHEAD_ALERT_DAMAGE;
    case 7:
    case "OVERHEAD_ALERT_EVADE":
      return dotaOverheadAlert.OVERHEAD_ALERT_EVADE;
    case 8:
    case "OVERHEAD_ALERT_BLOCK":
      return dotaOverheadAlert.OVERHEAD_ALERT_BLOCK;
    case 9:
    case "OVERHEAD_ALERT_BONUS_POISON_DAMAGE":
      return dotaOverheadAlert.OVERHEAD_ALERT_BONUS_POISON_DAMAGE;
    case 10:
    case "OVERHEAD_ALERT_HEAL":
      return dotaOverheadAlert.OVERHEAD_ALERT_HEAL;
    case 11:
    case "OVERHEAD_ALERT_MANA_ADD":
      return dotaOverheadAlert.OVERHEAD_ALERT_MANA_ADD;
    case 12:
    case "OVERHEAD_ALERT_MANA_LOSS":
      return dotaOverheadAlert.OVERHEAD_ALERT_MANA_LOSS;
    case 13:
    case "OVERHEAD_ALERT_LAST_HIT_EARLY":
      return dotaOverheadAlert.OVERHEAD_ALERT_LAST_HIT_EARLY;
    case 14:
    case "OVERHEAD_ALERT_LAST_HIT_CLOSE":
      return dotaOverheadAlert.OVERHEAD_ALERT_LAST_HIT_CLOSE;
    case 15:
    case "OVERHEAD_ALERT_LAST_HIT_MISS":
      return dotaOverheadAlert.OVERHEAD_ALERT_LAST_HIT_MISS;
    case 16:
    case "OVERHEAD_ALERT_MAGICAL_BLOCK":
      return dotaOverheadAlert.OVERHEAD_ALERT_MAGICAL_BLOCK;
    case 17:
    case "OVERHEAD_ALERT_INCOMING_DAMAGE":
      return dotaOverheadAlert.OVERHEAD_ALERT_INCOMING_DAMAGE;
    case 18:
    case "OVERHEAD_ALERT_OUTGOING_DAMAGE":
      return dotaOverheadAlert.OVERHEAD_ALERT_OUTGOING_DAMAGE;
    case 19:
    case "OVERHEAD_ALERT_DISABLE_RESIST":
      return dotaOverheadAlert.OVERHEAD_ALERT_DISABLE_RESIST;
    case 20:
    case "OVERHEAD_ALERT_DEATH":
      return dotaOverheadAlert.OVERHEAD_ALERT_DEATH;
    case 21:
    case "OVERHEAD_ALERT_BLOCKED":
      return dotaOverheadAlert.OVERHEAD_ALERT_BLOCKED;
    case 22:
    case "OVERHEAD_ALERT_ITEM_RECEIVED":
      return dotaOverheadAlert.OVERHEAD_ALERT_ITEM_RECEIVED;
    case 23:
    case "OVERHEAD_ALERT_SHARD":
      return dotaOverheadAlert.OVERHEAD_ALERT_SHARD;
    case 24:
    case "OVERHEAD_ALERT_DEADLY_BLOW":
      return dotaOverheadAlert.OVERHEAD_ALERT_DEADLY_BLOW;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaOverheadAlert");
  }
}

export function dotaOverheadAlertToJSON(object: dotaOverheadAlert): string {
  switch (object) {
    case dotaOverheadAlert.OVERHEAD_ALERT_GOLD:
      return "OVERHEAD_ALERT_GOLD";
    case dotaOverheadAlert.OVERHEAD_ALERT_DENY:
      return "OVERHEAD_ALERT_DENY";
    case dotaOverheadAlert.OVERHEAD_ALERT_CRITICAL:
      return "OVERHEAD_ALERT_CRITICAL";
    case dotaOverheadAlert.OVERHEAD_ALERT_XP:
      return "OVERHEAD_ALERT_XP";
    case dotaOverheadAlert.OVERHEAD_ALERT_BONUS_SPELL_DAMAGE:
      return "OVERHEAD_ALERT_BONUS_SPELL_DAMAGE";
    case dotaOverheadAlert.OVERHEAD_ALERT_MISS:
      return "OVERHEAD_ALERT_MISS";
    case dotaOverheadAlert.OVERHEAD_ALERT_DAMAGE:
      return "OVERHEAD_ALERT_DAMAGE";
    case dotaOverheadAlert.OVERHEAD_ALERT_EVADE:
      return "OVERHEAD_ALERT_EVADE";
    case dotaOverheadAlert.OVERHEAD_ALERT_BLOCK:
      return "OVERHEAD_ALERT_BLOCK";
    case dotaOverheadAlert.OVERHEAD_ALERT_BONUS_POISON_DAMAGE:
      return "OVERHEAD_ALERT_BONUS_POISON_DAMAGE";
    case dotaOverheadAlert.OVERHEAD_ALERT_HEAL:
      return "OVERHEAD_ALERT_HEAL";
    case dotaOverheadAlert.OVERHEAD_ALERT_MANA_ADD:
      return "OVERHEAD_ALERT_MANA_ADD";
    case dotaOverheadAlert.OVERHEAD_ALERT_MANA_LOSS:
      return "OVERHEAD_ALERT_MANA_LOSS";
    case dotaOverheadAlert.OVERHEAD_ALERT_LAST_HIT_EARLY:
      return "OVERHEAD_ALERT_LAST_HIT_EARLY";
    case dotaOverheadAlert.OVERHEAD_ALERT_LAST_HIT_CLOSE:
      return "OVERHEAD_ALERT_LAST_HIT_CLOSE";
    case dotaOverheadAlert.OVERHEAD_ALERT_LAST_HIT_MISS:
      return "OVERHEAD_ALERT_LAST_HIT_MISS";
    case dotaOverheadAlert.OVERHEAD_ALERT_MAGICAL_BLOCK:
      return "OVERHEAD_ALERT_MAGICAL_BLOCK";
    case dotaOverheadAlert.OVERHEAD_ALERT_INCOMING_DAMAGE:
      return "OVERHEAD_ALERT_INCOMING_DAMAGE";
    case dotaOverheadAlert.OVERHEAD_ALERT_OUTGOING_DAMAGE:
      return "OVERHEAD_ALERT_OUTGOING_DAMAGE";
    case dotaOverheadAlert.OVERHEAD_ALERT_DISABLE_RESIST:
      return "OVERHEAD_ALERT_DISABLE_RESIST";
    case dotaOverheadAlert.OVERHEAD_ALERT_DEATH:
      return "OVERHEAD_ALERT_DEATH";
    case dotaOverheadAlert.OVERHEAD_ALERT_BLOCKED:
      return "OVERHEAD_ALERT_BLOCKED";
    case dotaOverheadAlert.OVERHEAD_ALERT_ITEM_RECEIVED:
      return "OVERHEAD_ALERT_ITEM_RECEIVED";
    case dotaOverheadAlert.OVERHEAD_ALERT_SHARD:
      return "OVERHEAD_ALERT_SHARD";
    case dotaOverheadAlert.OVERHEAD_ALERT_DEADLY_BLOW:
      return "OVERHEAD_ALERT_DEADLY_BLOW";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaOverheadAlert");
  }
}

export enum dotaRoshanPhase {
  k_SRSP_ROSHAN_ALIVE = 0,
  k_SRSP_ROSHAN_BASE_TIMER = 1,
  k_SRSP_ROSHAN_VISIBLE_TIMER = 2,
}

export function dotaRoshanPhaseFromJSON(object: any): dotaRoshanPhase {
  switch (object) {
    case 0:
    case "k_SRSP_ROSHAN_ALIVE":
      return dotaRoshanPhase.k_SRSP_ROSHAN_ALIVE;
    case 1:
    case "k_SRSP_ROSHAN_BASE_TIMER":
      return dotaRoshanPhase.k_SRSP_ROSHAN_BASE_TIMER;
    case 2:
    case "k_SRSP_ROSHAN_VISIBLE_TIMER":
      return dotaRoshanPhase.k_SRSP_ROSHAN_VISIBLE_TIMER;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaRoshanPhase");
  }
}

export function dotaRoshanPhaseToJSON(object: dotaRoshanPhase): string {
  switch (object) {
    case dotaRoshanPhase.k_SRSP_ROSHAN_ALIVE:
      return "k_SRSP_ROSHAN_ALIVE";
    case dotaRoshanPhase.k_SRSP_ROSHAN_BASE_TIMER:
      return "k_SRSP_ROSHAN_BASE_TIMER";
    case dotaRoshanPhase.k_SRSP_ROSHAN_VISIBLE_TIMER:
      return "k_SRSP_ROSHAN_VISIBLE_TIMER";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaRoshanPhase");
  }
}

export enum dotaPositionCategory {
  DOTA_POSITION_NONE = 0,
  DOTA_POSITION_BOTTOM_LANE = 1,
  DOTA_POSITION_MID_LANE = 2,
  DOTA_POSITION_TOP_LANE = 3,
  DOTA_POSITION_RADIANT_JUNGLE = 4,
  DOTA_POSITION_DIRE_JUNGLE = 5,
  DOTA_POSITION_RADIANT_ANCIENTS = 6,
  DOTA_POSITION_DIRE_ANCIENTS = 7,
  DOTA_POSITION_RADIANT_SECRET_SHOP = 8,
  DOTA_POSITION_DIRE_SECRET_SHOP = 9,
  DOTA_POSITION_RIVER = 10,
  DOTA_POSITION_ROSHAN_PIT = 11,
  DOTA_POSITION_RADIANT_BASE = 12,
  DOTA_POSITION_DIRE_BASE = 13,
  DOTA_POSITION_FOUNTAIN = 14,
  DOTA_POSITION_OTHER = 15,
}

export function dotaPositionCategoryFromJSON(object: any): dotaPositionCategory {
  switch (object) {
    case 0:
    case "DOTA_POSITION_NONE":
      return dotaPositionCategory.DOTA_POSITION_NONE;
    case 1:
    case "DOTA_POSITION_BOTTOM_LANE":
      return dotaPositionCategory.DOTA_POSITION_BOTTOM_LANE;
    case 2:
    case "DOTA_POSITION_MID_LANE":
      return dotaPositionCategory.DOTA_POSITION_MID_LANE;
    case 3:
    case "DOTA_POSITION_TOP_LANE":
      return dotaPositionCategory.DOTA_POSITION_TOP_LANE;
    case 4:
    case "DOTA_POSITION_RADIANT_JUNGLE":
      return dotaPositionCategory.DOTA_POSITION_RADIANT_JUNGLE;
    case 5:
    case "DOTA_POSITION_DIRE_JUNGLE":
      return dotaPositionCategory.DOTA_POSITION_DIRE_JUNGLE;
    case 6:
    case "DOTA_POSITION_RADIANT_ANCIENTS":
      return dotaPositionCategory.DOTA_POSITION_RADIANT_ANCIENTS;
    case 7:
    case "DOTA_POSITION_DIRE_ANCIENTS":
      return dotaPositionCategory.DOTA_POSITION_DIRE_ANCIENTS;
    case 8:
    case "DOTA_POSITION_RADIANT_SECRET_SHOP":
      return dotaPositionCategory.DOTA_POSITION_RADIANT_SECRET_SHOP;
    case 9:
    case "DOTA_POSITION_DIRE_SECRET_SHOP":
      return dotaPositionCategory.DOTA_POSITION_DIRE_SECRET_SHOP;
    case 10:
    case "DOTA_POSITION_RIVER":
      return dotaPositionCategory.DOTA_POSITION_RIVER;
    case 11:
    case "DOTA_POSITION_ROSHAN_PIT":
      return dotaPositionCategory.DOTA_POSITION_ROSHAN_PIT;
    case 12:
    case "DOTA_POSITION_RADIANT_BASE":
      return dotaPositionCategory.DOTA_POSITION_RADIANT_BASE;
    case 13:
    case "DOTA_POSITION_DIRE_BASE":
      return dotaPositionCategory.DOTA_POSITION_DIRE_BASE;
    case 14:
    case "DOTA_POSITION_FOUNTAIN":
      return dotaPositionCategory.DOTA_POSITION_FOUNTAIN;
    case 15:
    case "DOTA_POSITION_OTHER":
      return dotaPositionCategory.DOTA_POSITION_OTHER;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaPositionCategory");
  }
}

export function dotaPositionCategoryToJSON(object: dotaPositionCategory): string {
  switch (object) {
    case dotaPositionCategory.DOTA_POSITION_NONE:
      return "DOTA_POSITION_NONE";
    case dotaPositionCategory.DOTA_POSITION_BOTTOM_LANE:
      return "DOTA_POSITION_BOTTOM_LANE";
    case dotaPositionCategory.DOTA_POSITION_MID_LANE:
      return "DOTA_POSITION_MID_LANE";
    case dotaPositionCategory.DOTA_POSITION_TOP_LANE:
      return "DOTA_POSITION_TOP_LANE";
    case dotaPositionCategory.DOTA_POSITION_RADIANT_JUNGLE:
      return "DOTA_POSITION_RADIANT_JUNGLE";
    case dotaPositionCategory.DOTA_POSITION_DIRE_JUNGLE:
      return "DOTA_POSITION_DIRE_JUNGLE";
    case dotaPositionCategory.DOTA_POSITION_RADIANT_ANCIENTS:
      return "DOTA_POSITION_RADIANT_ANCIENTS";
    case dotaPositionCategory.DOTA_POSITION_DIRE_ANCIENTS:
      return "DOTA_POSITION_DIRE_ANCIENTS";
    case dotaPositionCategory.DOTA_POSITION_RADIANT_SECRET_SHOP:
      return "DOTA_POSITION_RADIANT_SECRET_SHOP";
    case dotaPositionCategory.DOTA_POSITION_DIRE_SECRET_SHOP:
      return "DOTA_POSITION_DIRE_SECRET_SHOP";
    case dotaPositionCategory.DOTA_POSITION_RIVER:
      return "DOTA_POSITION_RIVER";
    case dotaPositionCategory.DOTA_POSITION_ROSHAN_PIT:
      return "DOTA_POSITION_ROSHAN_PIT";
    case dotaPositionCategory.DOTA_POSITION_RADIANT_BASE:
      return "DOTA_POSITION_RADIANT_BASE";
    case dotaPositionCategory.DOTA_POSITION_DIRE_BASE:
      return "DOTA_POSITION_DIRE_BASE";
    case dotaPositionCategory.DOTA_POSITION_FOUNTAIN:
      return "DOTA_POSITION_FOUNTAIN";
    case dotaPositionCategory.DOTA_POSITION_OTHER:
      return "DOTA_POSITION_OTHER";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaPositionCategory");
  }
}

export enum dotaAbilityTargetType {
  DOTA_ABILITY_TARGET_NONE = 0,
  DOTA_ABILITY_TARGET_SELF = 1,
  DOTA_ABILITY_TARGET_ALLY_HERO = 2,
  DOTA_ABILITY_TARGET_ALLY_CREEP = 3,
  DOTA_ABILITY_TARGET_ENEMY_HERO = 4,
  DOTA_ABILITY_TARGET_ENEMY_CREEP = 5,
}

export function dotaAbilityTargetTypeFromJSON(object: any): dotaAbilityTargetType {
  switch (object) {
    case 0:
    case "DOTA_ABILITY_TARGET_NONE":
      return dotaAbilityTargetType.DOTA_ABILITY_TARGET_NONE;
    case 1:
    case "DOTA_ABILITY_TARGET_SELF":
      return dotaAbilityTargetType.DOTA_ABILITY_TARGET_SELF;
    case 2:
    case "DOTA_ABILITY_TARGET_ALLY_HERO":
      return dotaAbilityTargetType.DOTA_ABILITY_TARGET_ALLY_HERO;
    case 3:
    case "DOTA_ABILITY_TARGET_ALLY_CREEP":
      return dotaAbilityTargetType.DOTA_ABILITY_TARGET_ALLY_CREEP;
    case 4:
    case "DOTA_ABILITY_TARGET_ENEMY_HERO":
      return dotaAbilityTargetType.DOTA_ABILITY_TARGET_ENEMY_HERO;
    case 5:
    case "DOTA_ABILITY_TARGET_ENEMY_CREEP":
      return dotaAbilityTargetType.DOTA_ABILITY_TARGET_ENEMY_CREEP;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaAbilityTargetType");
  }
}

export function dotaAbilityTargetTypeToJSON(object: dotaAbilityTargetType): string {
  switch (object) {
    case dotaAbilityTargetType.DOTA_ABILITY_TARGET_NONE:
      return "DOTA_ABILITY_TARGET_NONE";
    case dotaAbilityTargetType.DOTA_ABILITY_TARGET_SELF:
      return "DOTA_ABILITY_TARGET_SELF";
    case dotaAbilityTargetType.DOTA_ABILITY_TARGET_ALLY_HERO:
      return "DOTA_ABILITY_TARGET_ALLY_HERO";
    case dotaAbilityTargetType.DOTA_ABILITY_TARGET_ALLY_CREEP:
      return "DOTA_ABILITY_TARGET_ALLY_CREEP";
    case dotaAbilityTargetType.DOTA_ABILITY_TARGET_ENEMY_HERO:
      return "DOTA_ABILITY_TARGET_ENEMY_HERO";
    case dotaAbilityTargetType.DOTA_ABILITY_TARGET_ENEMY_CREEP:
      return "DOTA_ABILITY_TARGET_ENEMY_CREEP";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaAbilityTargetType");
  }
}

export enum EHeroStatType {
  k_EHeroStatType_None = 0,
  k_EHeroStatType_AxeTotalDamage = 2000,
  k_EHeroStatType_BattleHungerDamage = 2001,
  k_EHeroStatType_CounterHelixDamage = 2002,
  k_EHeroStatType_CullingBladeDamage = 2003,
  k_EHeroStatType_BerserkersCallCastCount = 2004,
  k_EHeroStatType_BerserkersCallHeroesHitAverage = 2005,
  k_EHeroStatType_BerserkersCallOtherUnitsHit = 2006,
  k_EHeroStatType_BerserkersCallHeroAttacksTaken = 2007,
  k_EHeroStatType_BerserkersCallOtherAttacksTaken = 2008,
  k_EHeroStatType_BattleHungerCastCount = 2009,
  k_EHeroStatType_BattleHungerPotentialDuration = 2010,
  k_EHeroStatType_BattleHungerAverageDuration = 2011,
  k_EHeroStatType_CounterHelixProcCount = 2012,
  k_EHeroStatType_CounterHelixHeroProcCount = 2013,
  k_EHeroStatType_CounterHelixHeroesHitAverage = 2014,
  k_EHeroStatType_CounterHelixOtherUnitsHitCount = 2015,
  k_EHeroStatType_CullingBladeCastCount = 2016,
  k_EHeroStatType_CullingBladeKillCount = 2017,
  k_EHeroStatType_CullingBladeAverageHealthCulled = 2018,
  k_EHeroStatType_CullingBladeAverageDamageAvailable = 2019,
  k_EHeroStatType_CullingBladeHeroBuffAverage = 2020,
}

export function eHeroStatTypeFromJSON(object: any): EHeroStatType {
  switch (object) {
    case 0:
    case "k_EHeroStatType_None":
      return EHeroStatType.k_EHeroStatType_None;
    case 2000:
    case "k_EHeroStatType_AxeTotalDamage":
      return EHeroStatType.k_EHeroStatType_AxeTotalDamage;
    case 2001:
    case "k_EHeroStatType_BattleHungerDamage":
      return EHeroStatType.k_EHeroStatType_BattleHungerDamage;
    case 2002:
    case "k_EHeroStatType_CounterHelixDamage":
      return EHeroStatType.k_EHeroStatType_CounterHelixDamage;
    case 2003:
    case "k_EHeroStatType_CullingBladeDamage":
      return EHeroStatType.k_EHeroStatType_CullingBladeDamage;
    case 2004:
    case "k_EHeroStatType_BerserkersCallCastCount":
      return EHeroStatType.k_EHeroStatType_BerserkersCallCastCount;
    case 2005:
    case "k_EHeroStatType_BerserkersCallHeroesHitAverage":
      return EHeroStatType.k_EHeroStatType_BerserkersCallHeroesHitAverage;
    case 2006:
    case "k_EHeroStatType_BerserkersCallOtherUnitsHit":
      return EHeroStatType.k_EHeroStatType_BerserkersCallOtherUnitsHit;
    case 2007:
    case "k_EHeroStatType_BerserkersCallHeroAttacksTaken":
      return EHeroStatType.k_EHeroStatType_BerserkersCallHeroAttacksTaken;
    case 2008:
    case "k_EHeroStatType_BerserkersCallOtherAttacksTaken":
      return EHeroStatType.k_EHeroStatType_BerserkersCallOtherAttacksTaken;
    case 2009:
    case "k_EHeroStatType_BattleHungerCastCount":
      return EHeroStatType.k_EHeroStatType_BattleHungerCastCount;
    case 2010:
    case "k_EHeroStatType_BattleHungerPotentialDuration":
      return EHeroStatType.k_EHeroStatType_BattleHungerPotentialDuration;
    case 2011:
    case "k_EHeroStatType_BattleHungerAverageDuration":
      return EHeroStatType.k_EHeroStatType_BattleHungerAverageDuration;
    case 2012:
    case "k_EHeroStatType_CounterHelixProcCount":
      return EHeroStatType.k_EHeroStatType_CounterHelixProcCount;
    case 2013:
    case "k_EHeroStatType_CounterHelixHeroProcCount":
      return EHeroStatType.k_EHeroStatType_CounterHelixHeroProcCount;
    case 2014:
    case "k_EHeroStatType_CounterHelixHeroesHitAverage":
      return EHeroStatType.k_EHeroStatType_CounterHelixHeroesHitAverage;
    case 2015:
    case "k_EHeroStatType_CounterHelixOtherUnitsHitCount":
      return EHeroStatType.k_EHeroStatType_CounterHelixOtherUnitsHitCount;
    case 2016:
    case "k_EHeroStatType_CullingBladeCastCount":
      return EHeroStatType.k_EHeroStatType_CullingBladeCastCount;
    case 2017:
    case "k_EHeroStatType_CullingBladeKillCount":
      return EHeroStatType.k_EHeroStatType_CullingBladeKillCount;
    case 2018:
    case "k_EHeroStatType_CullingBladeAverageHealthCulled":
      return EHeroStatType.k_EHeroStatType_CullingBladeAverageHealthCulled;
    case 2019:
    case "k_EHeroStatType_CullingBladeAverageDamageAvailable":
      return EHeroStatType.k_EHeroStatType_CullingBladeAverageDamageAvailable;
    case 2020:
    case "k_EHeroStatType_CullingBladeHeroBuffAverage":
      return EHeroStatType.k_EHeroStatType_CullingBladeHeroBuffAverage;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EHeroStatType");
  }
}

export function eHeroStatTypeToJSON(object: EHeroStatType): string {
  switch (object) {
    case EHeroStatType.k_EHeroStatType_None:
      return "k_EHeroStatType_None";
    case EHeroStatType.k_EHeroStatType_AxeTotalDamage:
      return "k_EHeroStatType_AxeTotalDamage";
    case EHeroStatType.k_EHeroStatType_BattleHungerDamage:
      return "k_EHeroStatType_BattleHungerDamage";
    case EHeroStatType.k_EHeroStatType_CounterHelixDamage:
      return "k_EHeroStatType_CounterHelixDamage";
    case EHeroStatType.k_EHeroStatType_CullingBladeDamage:
      return "k_EHeroStatType_CullingBladeDamage";
    case EHeroStatType.k_EHeroStatType_BerserkersCallCastCount:
      return "k_EHeroStatType_BerserkersCallCastCount";
    case EHeroStatType.k_EHeroStatType_BerserkersCallHeroesHitAverage:
      return "k_EHeroStatType_BerserkersCallHeroesHitAverage";
    case EHeroStatType.k_EHeroStatType_BerserkersCallOtherUnitsHit:
      return "k_EHeroStatType_BerserkersCallOtherUnitsHit";
    case EHeroStatType.k_EHeroStatType_BerserkersCallHeroAttacksTaken:
      return "k_EHeroStatType_BerserkersCallHeroAttacksTaken";
    case EHeroStatType.k_EHeroStatType_BerserkersCallOtherAttacksTaken:
      return "k_EHeroStatType_BerserkersCallOtherAttacksTaken";
    case EHeroStatType.k_EHeroStatType_BattleHungerCastCount:
      return "k_EHeroStatType_BattleHungerCastCount";
    case EHeroStatType.k_EHeroStatType_BattleHungerPotentialDuration:
      return "k_EHeroStatType_BattleHungerPotentialDuration";
    case EHeroStatType.k_EHeroStatType_BattleHungerAverageDuration:
      return "k_EHeroStatType_BattleHungerAverageDuration";
    case EHeroStatType.k_EHeroStatType_CounterHelixProcCount:
      return "k_EHeroStatType_CounterHelixProcCount";
    case EHeroStatType.k_EHeroStatType_CounterHelixHeroProcCount:
      return "k_EHeroStatType_CounterHelixHeroProcCount";
    case EHeroStatType.k_EHeroStatType_CounterHelixHeroesHitAverage:
      return "k_EHeroStatType_CounterHelixHeroesHitAverage";
    case EHeroStatType.k_EHeroStatType_CounterHelixOtherUnitsHitCount:
      return "k_EHeroStatType_CounterHelixOtherUnitsHitCount";
    case EHeroStatType.k_EHeroStatType_CullingBladeCastCount:
      return "k_EHeroStatType_CullingBladeCastCount";
    case EHeroStatType.k_EHeroStatType_CullingBladeKillCount:
      return "k_EHeroStatType_CullingBladeKillCount";
    case EHeroStatType.k_EHeroStatType_CullingBladeAverageHealthCulled:
      return "k_EHeroStatType_CullingBladeAverageHealthCulled";
    case EHeroStatType.k_EHeroStatType_CullingBladeAverageDamageAvailable:
      return "k_EHeroStatType_CullingBladeAverageDamageAvailable";
    case EHeroStatType.k_EHeroStatType_CullingBladeHeroBuffAverage:
      return "k_EHeroStatType_CullingBladeHeroBuffAverage";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EHeroStatType");
  }
}

export enum EPlayerVoiceListenState {
  kPVLS_None = 0,
  kPVLS_DeniedChatBanned = 1,
  kPVLS_DeniedPartner = 2,
  kPVLS_DeniedHLTVTalkerNotSpectator = 3,
  kPVLS_DeniedHLTVNoTalkerPlayerID = 4,
  kPVLS_DeniedHLTVTalkerNotBroadcaster = 5,
  kPVLS_DeniedTeamSpectator = 6,
  kPVLS_DeniedStudent = 8,
  kPVLS_DeniedPrivateCoach = 9,
  kPVLS_Denied = 64,
  kPVLS_AllowHLTVTalkerIsBroadcaster = 65,
  kPVLS_AllowCoBroadcaster = 66,
  kPVLS_AllowAllChat = 67,
  kPVLS_AllowStudentToCoach = 68,
  kPVLS_AllowFellowStudent = 69,
  kPVLS_AllowTalkerIsCoach = 70,
  kPVLS_AllowCoachHearTeam = 71,
  kPVLS_AllowSameTeam = 72,
  kPVLS_AllowShowcase = 73,
  kPVLS_AllowPrivateCoach = 74,
}

export function ePlayerVoiceListenStateFromJSON(object: any): EPlayerVoiceListenState {
  switch (object) {
    case 0:
    case "kPVLS_None":
      return EPlayerVoiceListenState.kPVLS_None;
    case 1:
    case "kPVLS_DeniedChatBanned":
      return EPlayerVoiceListenState.kPVLS_DeniedChatBanned;
    case 2:
    case "kPVLS_DeniedPartner":
      return EPlayerVoiceListenState.kPVLS_DeniedPartner;
    case 3:
    case "kPVLS_DeniedHLTVTalkerNotSpectator":
      return EPlayerVoiceListenState.kPVLS_DeniedHLTVTalkerNotSpectator;
    case 4:
    case "kPVLS_DeniedHLTVNoTalkerPlayerID":
      return EPlayerVoiceListenState.kPVLS_DeniedHLTVNoTalkerPlayerID;
    case 5:
    case "kPVLS_DeniedHLTVTalkerNotBroadcaster":
      return EPlayerVoiceListenState.kPVLS_DeniedHLTVTalkerNotBroadcaster;
    case 6:
    case "kPVLS_DeniedTeamSpectator":
      return EPlayerVoiceListenState.kPVLS_DeniedTeamSpectator;
    case 8:
    case "kPVLS_DeniedStudent":
      return EPlayerVoiceListenState.kPVLS_DeniedStudent;
    case 9:
    case "kPVLS_DeniedPrivateCoach":
      return EPlayerVoiceListenState.kPVLS_DeniedPrivateCoach;
    case 64:
    case "kPVLS_Denied":
      return EPlayerVoiceListenState.kPVLS_Denied;
    case 65:
    case "kPVLS_AllowHLTVTalkerIsBroadcaster":
      return EPlayerVoiceListenState.kPVLS_AllowHLTVTalkerIsBroadcaster;
    case 66:
    case "kPVLS_AllowCoBroadcaster":
      return EPlayerVoiceListenState.kPVLS_AllowCoBroadcaster;
    case 67:
    case "kPVLS_AllowAllChat":
      return EPlayerVoiceListenState.kPVLS_AllowAllChat;
    case 68:
    case "kPVLS_AllowStudentToCoach":
      return EPlayerVoiceListenState.kPVLS_AllowStudentToCoach;
    case 69:
    case "kPVLS_AllowFellowStudent":
      return EPlayerVoiceListenState.kPVLS_AllowFellowStudent;
    case 70:
    case "kPVLS_AllowTalkerIsCoach":
      return EPlayerVoiceListenState.kPVLS_AllowTalkerIsCoach;
    case 71:
    case "kPVLS_AllowCoachHearTeam":
      return EPlayerVoiceListenState.kPVLS_AllowCoachHearTeam;
    case 72:
    case "kPVLS_AllowSameTeam":
      return EPlayerVoiceListenState.kPVLS_AllowSameTeam;
    case 73:
    case "kPVLS_AllowShowcase":
      return EPlayerVoiceListenState.kPVLS_AllowShowcase;
    case 74:
    case "kPVLS_AllowPrivateCoach":
      return EPlayerVoiceListenState.kPVLS_AllowPrivateCoach;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EPlayerVoiceListenState");
  }
}

export function ePlayerVoiceListenStateToJSON(object: EPlayerVoiceListenState): string {
  switch (object) {
    case EPlayerVoiceListenState.kPVLS_None:
      return "kPVLS_None";
    case EPlayerVoiceListenState.kPVLS_DeniedChatBanned:
      return "kPVLS_DeniedChatBanned";
    case EPlayerVoiceListenState.kPVLS_DeniedPartner:
      return "kPVLS_DeniedPartner";
    case EPlayerVoiceListenState.kPVLS_DeniedHLTVTalkerNotSpectator:
      return "kPVLS_DeniedHLTVTalkerNotSpectator";
    case EPlayerVoiceListenState.kPVLS_DeniedHLTVNoTalkerPlayerID:
      return "kPVLS_DeniedHLTVNoTalkerPlayerID";
    case EPlayerVoiceListenState.kPVLS_DeniedHLTVTalkerNotBroadcaster:
      return "kPVLS_DeniedHLTVTalkerNotBroadcaster";
    case EPlayerVoiceListenState.kPVLS_DeniedTeamSpectator:
      return "kPVLS_DeniedTeamSpectator";
    case EPlayerVoiceListenState.kPVLS_DeniedStudent:
      return "kPVLS_DeniedStudent";
    case EPlayerVoiceListenState.kPVLS_DeniedPrivateCoach:
      return "kPVLS_DeniedPrivateCoach";
    case EPlayerVoiceListenState.kPVLS_Denied:
      return "kPVLS_Denied";
    case EPlayerVoiceListenState.kPVLS_AllowHLTVTalkerIsBroadcaster:
      return "kPVLS_AllowHLTVTalkerIsBroadcaster";
    case EPlayerVoiceListenState.kPVLS_AllowCoBroadcaster:
      return "kPVLS_AllowCoBroadcaster";
    case EPlayerVoiceListenState.kPVLS_AllowAllChat:
      return "kPVLS_AllowAllChat";
    case EPlayerVoiceListenState.kPVLS_AllowStudentToCoach:
      return "kPVLS_AllowStudentToCoach";
    case EPlayerVoiceListenState.kPVLS_AllowFellowStudent:
      return "kPVLS_AllowFellowStudent";
    case EPlayerVoiceListenState.kPVLS_AllowTalkerIsCoach:
      return "kPVLS_AllowTalkerIsCoach";
    case EPlayerVoiceListenState.kPVLS_AllowCoachHearTeam:
      return "kPVLS_AllowCoachHearTeam";
    case EPlayerVoiceListenState.kPVLS_AllowSameTeam:
      return "kPVLS_AllowSameTeam";
    case EPlayerVoiceListenState.kPVLS_AllowShowcase:
      return "kPVLS_AllowShowcase";
    case EPlayerVoiceListenState.kPVLS_AllowPrivateCoach:
      return "kPVLS_AllowPrivateCoach";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EPlayerVoiceListenState");
  }
}

export enum EProjectionEvent {
  ePE_FirstBlood = 0,
  ePE_Killstreak_godlike = 1,
}

export function eProjectionEventFromJSON(object: any): EProjectionEvent {
  switch (object) {
    case 0:
    case "ePE_FirstBlood":
      return EProjectionEvent.ePE_FirstBlood;
    case 1:
    case "ePE_Killstreak_godlike":
      return EProjectionEvent.ePE_Killstreak_godlike;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EProjectionEvent");
  }
}

export function eProjectionEventToJSON(object: EProjectionEvent): string {
  switch (object) {
    case EProjectionEvent.ePE_FirstBlood:
      return "ePE_FirstBlood";
    case EProjectionEvent.ePE_Killstreak_godlike:
      return "ePE_Killstreak_godlike";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EProjectionEvent");
  }
}

export interface CDOTAUserMsgAIDebugLine {
  message: string;
}

export interface CDOTAUserMsgPing {
  ping: number;
  loss: number;
}

export interface CDOTAUserMsgSwapVerify {
  playerId: number;
}

export interface CDOTAUserMsgChatEvent {
  type: dotaChatMessage;
  value: number;
  playerid1: number;
  playerid2: number;
  playerid3: number;
  playerid4: number;
  playerid5: number;
  playerid6: number;
  value2: number;
  value3: number;
}

export interface CDOTAUserMsgBotChat {
  playerId: number;
  message: string;
  target: string;
  teamOnly: boolean;
}

export interface CDOTAUserMsgCombatHeroPositions {
  index: number;
  time: number;
  worldPos: CMsgVector2D | undefined;
  health: number;
}

export interface CDOTAUserMsgCombatLogBulkData {
  combatEntries: CMsgDOTACombatLogEntry[];
  timestamp: number;
  duration: number;
  playerId: number;
  requestTime: number;
}

export interface CDOTAUserMsgProjectileParticleCPData {
  controlPoint: number;
  vector: CMsgVector | undefined;
}

export interface CDOTAUserMsgMiniKillCamInfo {
  attackers: CDOTAUserMsgMiniKillCamInfo_Attacker[];
}

export interface CDOTAUserMsgMiniKillCamInfo_Attacker {
  attacker: number;
  totalDamage: number;
  abilities: CDOTAUserMsgMiniKillCamInfo_Attacker_Ability[];
  attackerName: string;
}

export interface CDOTAUserMsgMiniKillCamInfo_Attacker_Ability {
  abilityId: number;
  damage: number;
}

export interface CDOTAUserMsgGlobalLightColor {
  color: number;
  duration: number;
}

export interface CDOTAUserMsgGlobalLightDirection {
  direction: CMsgVector | undefined;
  duration: number;
}

export interface CDOTAUserMsgLocationPing {
  playerId: number;
  locationPing: CDOTAMsgLocationPing | undefined;
}

export interface CDOTAUserMsgPingConfirmation {
  playerIdOfOriginalPinger: number;
  entityIndex: number;
  iconType: number;
  location: CMsgVector | undefined;
}

export interface CDOTAUserMsgItemAlert {
  playerId: number;
  itemAlert: CDOTAMsgItemAlert | undefined;
}

export interface CDOTAUserMsgEnemyItemAlert {
  playerId: number;
  targetPlayerId: number;
  itemAbilityId: number;
  runeType: number;
  entityId: number;
  itemLevel: number;
  primaryCharges: number;
  secondaryCharges: number;
}

export interface CDOTAUserMsgModifierAlert {
  playerId: number;
  className: string;
  stackCount: number;
  isDebuff: boolean;
  targetEntindex: number;
  secondsRemaining: number;
}

export interface CDOTAUserMsgHPManaAlert {
  playerId: number;
  targetEntindex: number;
  showRawValues: boolean;
}

export interface CDOTAUserMsgNeutralCampAlert {
  playerId: number;
  spawnerEntindex: number;
  unitEntindex: number;
  stackCount: number;
  campType: number;
  stackRequest: boolean;
  stackIntention: boolean;
}

export interface CDOTAUserMsgGlyphAlert {
  playerId: number;
  negative: boolean;
}

export interface CDOTAUserMsgRadarAlert {
  playerId: number;
  negative: boolean;
}

export interface CDOTAUserMsgWillPurchaseAlert {
  itemAbilityId: number;
  playerId: number;
  goldRemaining: number;
  suggestionPlayerId: number;
}

export interface CDOTAUserMsgEmptyTeleportAlert {
  sourcePlayerId: number;
  targetPlayerId: number;
  cooldownSeconds: number;
}

export interface CDOTAUserMsgMarsArenaOfBloodAttack {
  sourceEhandle: number;
  targetEhandle: number;
  warriorIndex: number;
}

export interface CDOTAEntityMsgInvokerSpellCast {
  entityMsg: CEntityMsg | undefined;
  castActivity: number;
}

export interface CDOTAUserMsgBuyBackStateAlert {
  playerId: number;
}

export interface CDOTAUserMsgQuickBuyAlert {
  playerId: number;
  itemAbilityId: number;
  goldCost: number;
  itemCooldownSeconds: number;
  showBuyback: boolean;
}

export interface CDOTAUserMsgCourierKilledAlert {
  team: number;
  goldValue: number;
  entityHandle: number;
  timestamp: number;
  lostItems: CDOTAUserMsgCourierKilledAlert_LostItem[];
  killerPlayerId: number;
  owningPlayerId: number;
}

export interface CDOTAUserMsgCourierKilledAlert_LostItem {
  itemAbilityId: number;
  quantity: number;
}

export interface CDOTAUserMsgMinimapEvent {
  eventType: number;
  entityHandle: number;
  x: number;
  y: number;
  duration: number;
  targetEntityHandle: number;
}

export interface CDOTAUserMsgMapLine {
  playerId: number;
  mapline: CDOTAMsgMapLine | undefined;
}

export interface CDOTAUserMsgMinimapDebugPoint {
  location: CMsgVector | undefined;
  color: number;
  size: number;
  duration: number;
  index: number;
}

export interface CDOTAUserMsgCreateLinearProjectile {
  origin: CMsgVector | undefined;
  velocity: CMsgVector2D | undefined;
  entindex: number;
  particleIndex: string;
  handle: number;
  acceleration: CMsgVector2D | undefined;
  maxSpeed: number;
  fowRadius: number;
  stickyFowReveal: boolean;
  distance: number;
  colorgemcolor: number;
  particleCpData: CDOTAUserMsgProjectileParticleCPData[];
}

export interface CDOTAUserMsgDestroyLinearProjectile {
  handle: number;
}

export interface CDOTAUserMsgDodgeTrackingProjectiles {
  entindex: number;
  attacksOnly: boolean;
}

export interface CDOTAUserMsgSpectatorPlayerClick {
  entindex: number;
  orderType: number;
  targetIndex: number;
}

export interface CDOTAUserMsgSpectatorPlayerUnitOrders {
  entindex: number;
  orderType: number;
  units: number[];
  targetIndex: number;
  abilityId: number;
  position: CMsgVector | undefined;
  queue: boolean;
  sequenceNumber: number;
  flags: number;
}

export interface CDOTAUserMsgNevermoreRequiem {
  entityHandle: number;
  lines: number;
  origin: CMsgVector | undefined;
  reverse: boolean;
}

export interface CDOTAUserMsgInvalidCommand {
  message: string;
  sequenceNumber: number;
}

export interface CDOTAUserMsgHudError {
  orderId: number;
  sequenceNumber: number;
}

export interface CDOTAUserMsgSharedCooldown {
  entindex: number;
  name: string;
  cooldown: number;
  nameIndex: number;
}

export interface CDOTAUserMsgSetNextAutobuyItem {
  name: string;
}

export interface CDOTAUserMsgHalloweenDrops {
  itemDefs: number[];
  playerIds: number[];
  prizeList: number;
}

export interface CDOTAUserMsgPredictionResult {
  accountId: number;
  matchId: string;
  correct: boolean;
  predictions: CDOTAUserMsgPredictionResult_Prediction[];
}

export interface CDOTAUserMsgPredictionResult_Prediction {
  itemDef: number;
  numCorrect: number;
  numFails: number;
  result: CDOTAUserMsgPredictionResult_Prediction_EResult;
  grantedItemDefs: number[];
}

export enum CDOTAUserMsgPredictionResult_Prediction_EResult {
  k_eResult_ItemGranted = 1,
  k_eResult_Destroyed = 2,
}

export function cDOTAUserMsgPredictionResult_Prediction_EResultFromJSON(
  object: any,
): CDOTAUserMsgPredictionResult_Prediction_EResult {
  switch (object) {
    case 1:
    case "k_eResult_ItemGranted":
      return CDOTAUserMsgPredictionResult_Prediction_EResult.k_eResult_ItemGranted;
    case 2:
    case "k_eResult_Destroyed":
      return CDOTAUserMsgPredictionResult_Prediction_EResult.k_eResult_Destroyed;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CDOTAUserMsgPredictionResult_Prediction_EResult",
      );
  }
}

export function cDOTAUserMsgPredictionResult_Prediction_EResultToJSON(
  object: CDOTAUserMsgPredictionResult_Prediction_EResult,
): string {
  switch (object) {
    case CDOTAUserMsgPredictionResult_Prediction_EResult.k_eResult_ItemGranted:
      return "k_eResult_ItemGranted";
    case CDOTAUserMsgPredictionResult_Prediction_EResult.k_eResult_Destroyed:
      return "k_eResult_Destroyed";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CDOTAUserMsgPredictionResult_Prediction_EResult",
      );
  }
}

export interface CDOTAResponseQuerySerialized {
  facts: CDOTAResponseQuerySerialized_Fact[];
}

export interface CDOTAResponseQuerySerialized_Fact {
  key: number;
  valtype: CDOTAResponseQuerySerialized_Fact_ValueType;
  valNumeric: number;
  valString: string;
  valStringtableIndex: number;
  valIntNumeric: number;
}

export enum CDOTAResponseQuerySerialized_Fact_ValueType {
  NUMERIC = 1,
  STRING = 2,
  STRINGTABLE_INDEX = 3,
  INT_NUMERIC = 4,
}

export function cDOTAResponseQuerySerialized_Fact_ValueTypeFromJSON(
  object: any,
): CDOTAResponseQuerySerialized_Fact_ValueType {
  switch (object) {
    case 1:
    case "NUMERIC":
      return CDOTAResponseQuerySerialized_Fact_ValueType.NUMERIC;
    case 2:
    case "STRING":
      return CDOTAResponseQuerySerialized_Fact_ValueType.STRING;
    case 3:
    case "STRINGTABLE_INDEX":
      return CDOTAResponseQuerySerialized_Fact_ValueType.STRINGTABLE_INDEX;
    case 4:
    case "INT_NUMERIC":
      return CDOTAResponseQuerySerialized_Fact_ValueType.INT_NUMERIC;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CDOTAResponseQuerySerialized_Fact_ValueType",
      );
  }
}

export function cDOTAResponseQuerySerialized_Fact_ValueTypeToJSON(
  object: CDOTAResponseQuerySerialized_Fact_ValueType,
): string {
  switch (object) {
    case CDOTAResponseQuerySerialized_Fact_ValueType.NUMERIC:
      return "NUMERIC";
    case CDOTAResponseQuerySerialized_Fact_ValueType.STRING:
      return "STRING";
    case CDOTAResponseQuerySerialized_Fact_ValueType.STRINGTABLE_INDEX:
      return "STRINGTABLE_INDEX";
    case CDOTAResponseQuerySerialized_Fact_ValueType.INT_NUMERIC:
      return "INT_NUMERIC";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CDOTAResponseQuerySerialized_Fact_ValueType",
      );
  }
}

export interface CDOTASpeechMatchOnClient {
  speechConcept: number;
  recipientType: number;
  responsequery: CDOTAResponseQuerySerialized | undefined;
  randomseed: number;
}

export interface CDOTAUserMsgUnitEvent {
  msgType: EDotaEntityMessages;
  entityIndex: number;
  speech: CDOTAUserMsgUnitEvent_Speech | undefined;
  speechMute: CDOTAUserMsgUnitEvent_SpeechMute | undefined;
  addGesture: CDOTAUserMsgUnitEvent_AddGesture | undefined;
  removeGesture: CDOTAUserMsgUnitEvent_RemoveGesture | undefined;
  bloodImpact: CDOTAUserMsgUnitEvent_BloodImpact | undefined;
  fadeGesture: CDOTAUserMsgUnitEvent_FadeGesture | undefined;
  speechMatchOnClient: CDOTASpeechMatchOnClient | undefined;
}

export interface CDOTAUserMsgUnitEvent_Interval {
  start: number;
  range: number;
}

export interface CDOTAUserMsgUnitEvent_Speech {
  speechConcept: number;
  response: string;
  recipientType: number;
  muteable: boolean;
  predelay: CDOTAUserMsgUnitEvent_Interval | undefined;
  flags: number;
}

export interface CDOTAUserMsgUnitEvent_SpeechMute {
  delay: number;
}

export interface CDOTAUserMsgUnitEvent_AddGesture {
  activity: number;
  slot: number;
  fadeIn: number;
  fadeOut: number;
  playbackRate: number;
  sequenceVariant: number;
}

export interface CDOTAUserMsgUnitEvent_RemoveGesture {
  activity: number;
}

export interface CDOTAUserMsgUnitEvent_BloodImpact {
  scale: number;
  xNormal: number;
  yNormal: number;
}

export interface CDOTAUserMsgUnitEvent_FadeGesture {
  activity: number;
}

export interface CDOTAUserMsgItemPurchased {
  itemAbilityId: number;
}

export interface CDOTAUserMsgItemSold {
  itemAbilityId: number;
}

export interface CDOTAUserMsgItemFound {
  player: number;
  quality: number;
  rarity: number;
  method: number;
  itemdef: number;
}

export interface CDOTAUserMsgOverheadEvent {
  messageType: dotaOverheadAlert;
  value: number;
  targetPlayerEntindex: number;
  targetEntindex: number;
  sourcePlayerEntindex: number;
}

export interface CDOTAUserMsgTutorialTipInfo {
  name: string;
  progress: number;
}

export interface CDOTAUserMsgTutorialFinish {
  heading: string;
  emblem: string;
  body: string;
  success: boolean;
}

export interface CDOTAUserMsgTutorialMinimapPosition {
}

export interface CDOTAUserMsgSendGenericToolTip {
  title: string;
  text: string;
  entindex: number;
  close: boolean;
}

export interface CDOTAUserMsgWorldLine {
  playerId: number;
  worldline: CDOTAMsgWorldLine | undefined;
}

export interface CDOTAUserMsgChatWheel {
  chatMessageId: number;
  playerId: number;
  accountId: number;
  paramHeroId: number;
  emoticonId: number;
}

export interface CDOTAUserMsgReceivedXmasGift {
  playerId: number;
  itemName: string;
  inventorySlot: number;
}

export interface CDOTAUserMsgShowSurvey {
  surveyId: number;
  matchId: string;
  responseStyle: string;
  teammateHeroId: number;
  teammateName: string;
  teammateAccountId: number;
}

export interface CDOTAUserMsgUpdateSharedContent {
  slotType: number;
}

export interface CDOTAUserMsgTutorialRequestExp {
}

export interface CDOTAUserMsgTutorialFade {
  tgtAlpha: number;
}

export interface CDOTAUserMsgTutorialPingMinimap {
  playerId: number;
  posX: number;
  posY: number;
  posZ: number;
  entityIndex: number;
}

export interface CDOTAUserMsgGamerulesStateChanged {
  state: number;
}

export interface CDOTAUserMsgAddQuestLogEntry {
  npcName: string;
  npcDialog: string;
}

export interface CDOTAUserMsgSendStatPopup {
  playerId: number;
  statpopup: CDOTAMsgSendStatPopup | undefined;
}

export interface CDOTAUserMsgDismissAllStatPopups {
  dismissallmsg: CDOTAMsgDismissAllStatPopups | undefined;
}

export interface CDOTAUserMsgSendRoshanSpectatorPhase {
  phase: dotaRoshanPhase;
  phaseStartTime: number;
  phaseLength: number;
}

export interface CDOTAUserMsgSendRoshanPopup {
  reclaimed: boolean;
  gametime: number;
}

export interface CDOTAUserMsgSendFinalGold {
  reliableGold: number[];
  unreliableGold: number[];
}

export interface CDOTAUserMsgCustomMsg {
  message: string;
  playerId: number;
  value: number;
}

export interface CDOTAUserMsgCoachHUDPing {
  playerId: number;
  hudPing: CDOTAMsgCoachHUDPing | undefined;
}

export interface CDOTAUserMsgClientLoadGridNav {
}

export interface CDOTAUserMsgTEProjectile {
  source: number;
  target: number;
  moveSpeed: number;
  sourceAttachment: number;
  particleSystemHandle: string;
  dodgeable: boolean;
  isAttack: boolean;
  expireTime: number;
  maximpacttime: number;
  colorgemcolor: number;
  launchTick: number;
  handle: number;
  targetLoc: CMsgVector | undefined;
  particleCpData: CDOTAUserMsgProjectileParticleCPData[];
  additionalParticleSystemHandle: string;
}

export interface CDOTAUserMsgTEProjectileLoc {
  sourceLoc: CMsgVector | undefined;
  target: number;
  moveSpeed: number;
  particleSystemHandle: string;
  dodgeable: boolean;
  isAttack: boolean;
  expireTime: number;
  targetLoc: CMsgVector | undefined;
  colorgemcolor: number;
  launchTick: number;
  handle: number;
  source: number;
  sourceAttachment: number;
  particleCpData: CDOTAUserMsgProjectileParticleCPData[];
  additionalParticleSystemHandle: string;
}

export interface CDOTAUserMsgTEDestroyProjectile {
  handle: number;
}

export interface CDOTAUserMsgTEDotaBloodImpact {
  entity: number;
  scale: number;
  xnormal: number;
  ynormal: number;
}

export interface CDOTAUserMsgAbilityPing {
  playerId: number;
  abilityId: number;
  type: dotaAbilityPingType;
  cooldownSeconds: number;
  level: number;
  passive: boolean;
  manaNeeded: number;
  entityId: number;
  primaryCharges: number;
  secondaryCharges: number;
  ctrlHeld: boolean;
  reclaimTime: number;
}

export interface CDOTAUserMsgTEUnitAnimation {
  entity: number;
  sequenceVariant: number;
  playbackrate: number;
  castpoint: number;
  type: number;
  activity: number;
  lagCompensationTime: number;
}

export interface CDOTAUserMsgTEUnitAnimationEnd {
  entity: number;
  snap: boolean;
}

export interface CDOTAUserMsgShowGenericPopup {
  header: string;
  body: string;
  param1: string;
  param2: string;
  tintScreen: boolean;
  showNoOtherDialogs: boolean;
}

export interface CDOTAUserMsgVoteStart {
  title: string;
  duration: number;
  choiceCount: number;
  choices: string[];
}

export interface CDOTAUserMsgVoteUpdate {
  choiceCounts: number[];
}

export interface CDOTAUserMsgVoteEnd {
  selectedChoice: number;
}

export interface CDOTAUserMsgBoosterStatePlayer {
  playerId: number;
  bonus: number;
  eventBonus: number;
  bonusItemId: number;
  eventBonusItemId: number;
}

export interface CDOTAUserMsgBoosterState {
  boostedPlayers: CDOTAUserMsgBoosterStatePlayer[];
}

export interface CDOTAUserMsgPlayerMMR {
  mmr: number[];
}

export interface CDOTAUserMsgAbilitySteal {
  playerId: number;
  abilityId: number;
  abilityLevel: number;
}

export interface CDOTAUserMsgStatsHeroLookup {
  playerId: number;
  heroId: number;
  heroName: string;
  persona: string;
}

export interface CDOTAUserMsgStatsHeroPositionInfo {
  averagePosition: number;
  positionDetails: CDOTAUserMsgStatsHeroPositionInfo_PositionPair[];
}

export interface CDOTAUserMsgStatsHeroPositionInfo_PositionPair {
  positionCategory: dotaPositionCategory;
  positionCount: number;
}

export interface CDOTAUserMsgStatsHeroMinuteDetails {
  lastHits: number;
  heroKills: number;
  heroDamage: number;
  towerDamage: number;
  positionInfo: CDOTAUserMsgStatsHeroPositionInfo | undefined;
  totalXp: number;
  netWorth: number;
  harvestedCreepGold: number;
  claimedFarm: number;
  wardsPlaced: number;
  runesCollected: number;
  tpsUsed: number;
  manaSpent: number[];
  damageAbsorbed: number[];
  damageDone: number[];
}

export interface CDOTAUserMsgStatsTeamMinuteDetails {
  playerStats: CDOTAUserMsgStatsHeroMinuteDetails[];
  towerKills: number;
  barrackKills: number;
  availableLaneCreepGold: number;
  balanceKillValue: number;
  balanceTowerValue: number;
  balanceBarracksValue: number;
  balanceGoldValue: number;
  balanceXpValue: number;
  lanePerformance: CDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance[];
}

export interface CDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance {
  locationCategory: number;
  statType: number;
  value: number;
}

export interface CDOTAUserMsgStatsPlayerKillShare {
  playerId: number;
  killSharePercent: number;
  playerLocX: number;
  playerLocY: number;
  healthPercent: number;
  manaPercent: number;
}

export interface CDOTAUserMsgStatsKillDetails {
  victimId: number;
  killShares: CDOTAUserMsgStatsPlayerKillShare[];
  damageToKill: number;
  effectiveHealth: number;
  deathTime: number;
  killerId: number;
}

export interface CDOTAUserMsgStatsMatchDetails {
  heroLookup: CDOTAUserMsgStatsHeroLookup[];
  radiantStats: CDOTAUserMsgStatsTeamMinuteDetails[];
  direStats: CDOTAUserMsgStatsTeamMinuteDetails[];
  radiantKills: CDOTAUserMsgStatsKillDetails[];
  direKills: CDOTAUserMsgStatsKillDetails[];
  fightDetails: CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails[];
}

export interface CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails {
  participants: number[];
  deaths: number[];
  goldDelta: number;
  xpDelta: number;
}

export interface CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails {
  startTime: number;
  endTime: number;
  radiantFightDetails: CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails | undefined;
  direFightDetails: CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails | undefined;
}

export interface CDOTAUserMsgMiniTaunt {
  tauntingPlayerId: number;
}

export interface CDOTAUserMsgSpeechBubble {
  destroyAll: boolean;
}

export interface CDOTAUserMsgCustomHeaderMessage {
  playerId: number;
  duration: number;
  message: string;
  value: number;
}

export interface CMsgHeroAbilityStat {
  statType: EHeroStatType;
  intValue: number;
  floatValue: number;
}

export interface CMsgCombatAnalyzerPlayerStat {
  accountId: number;
  heroAbilityStats: CMsgHeroAbilityStat[];
}

export interface CMsgCombatAnalyzerStats {
  matchId: string;
  playerStats: CMsgCombatAnalyzerPlayerStat[];
}

export interface CDOTAUserMsgBeastChat {
  team: number;
  format: string;
  message: string;
  target: string;
}

export interface CDOTAUserMsgCustomHudElementCreate {
  elementId: string;
  layoutFilename: string;
  data: Buffer;
}

export interface CDOTAUserMsgCustomHudElementModify {
  elementId: string;
  modifyVisible: boolean;
  data: Buffer;
}

export interface CDOTAUserMsgCustomHudElementDestroy {
  elementId: string;
}

export interface CDOTAUserMsgCompendiumStatePlayer {
  playerId: number;
  level: number;
}

export interface CDOTAUserMsgCompendiumState {
  compendiumPlayers: CDOTAUserMsgCompendiumStatePlayer[];
}

export interface CDOTAUserMsgProjectionAbility {
  abilityId: number;
  casterEntIndex: number;
  casterTeam: number;
  channelEnd: boolean;
  origin: CMsgVector | undefined;
  trackCasterOnly: boolean;
  endTime: number;
  victimEntIndex: number;
}

export interface CDOTAUserMsgProjectionEvent {
  eventId: EProjectionEvent;
  team: number;
}

export interface CDOTAUserMsgXPAlert {
  playerId: number;
  targetEntindex: number;
}

export interface CDOTAUserMsgTalentTreeAlert {
  playerId: number;
  targetEntindex: number;
  abilityId: number;
  slot: number;
  learned: boolean;
}

export interface CDOTAUserMsgUpdateQuestProgress {
}

export interface CDOTAUserMsgQuestStatus {
  playerId: number;
  questId: number;
  challengeId: number;
  progress: number;
  goal: number;
  query: number;
  failGametime: number;
  itemAbilityId: number;
}

export interface CDOTAUserMsgSuggestHeroPick {
  playerId: number;
  heroId: number;
  ban: boolean;
}

export interface CDOTAUserMsgSuggestHeroRole {
  playerId: number;
  heroRole: string;
}

export interface CDOTAUserMsgKillcamDamageTaken {
  playerId: number;
  damageTaken: number;
  itemType: number;
  itemAbilityId: number;
  heroName: string;
  damageColor: string;
}

export interface CDOTAUserMsgSelectPenaltyGold {
  playerId: number;
  cost: number;
}

export interface CDOTAUserMsgRollDiceResult {
  playerId: number;
  channelType: number;
  rollMin: number;
  rollMax: number;
  result: number;
}

export interface CDOTAUserMsgFlipCoinResult {
  playerId: number;
  channelType: number;
  result: boolean;
}

export interface CDOTAUserMessageRequestItemSuggestions {
  playerId: number;
}

export interface CDOTAUserMessageTeamCaptainChanged {
  team: number;
  captainPlayerId: number;
}

export interface CDOTAUserMsgChatWheelCooldown {
  messageId: number;
  cooldownRemaining: number;
}

export interface CDOTAUserMsgHeroRelicProgress {
  heroRelicType: number;
  value: number;
  ehandle: number;
  eventId: number;
  valueDisplay: number;
}

export interface CDOTAUserMsgAbilityDraftRequestAbility {
  playerId: number;
  requestedAbilityId: number;
  ctrlIsDown: boolean;
}

export interface CDOTAUserMsgDamageReport {
  playerId: number;
  targetHeroId: number;
  sourceHeroId: number;
  damageAmount: number;
  broadcast: boolean;
}

export interface CDOTAUserMsgSalutePlayer {
  sourcePlayerId: number;
  targetPlayerId: number;
  tipAmount: number;
  eventId: number;
  customTipStyle: string;
  numRecentTips: number;
}

export interface CDOTAUserMsgTipAlert {
  playerId: number;
  tipText: string;
}

export interface CDOTAUserMsgReplaceQueryUnit {
  playerId: number;
  sourceEntindex: number;
  targetEntindex: number;
}

export interface CDOTAUserMsgESArcanaCombo {
  ehandle: number;
  comboCount: number;
  arcanaLevel: number;
}

export interface CDOTAUserMsgESArcanaComboSummary {
  ehandle: number;
  comboCount: number;
  damageAmount: number;
}

export interface CDOTAUserMsgOMArcanaCombo {
  ehandle: number;
  multicastAmount: number;
  arcanaLevel: number;
  multicastChance: number;
}

export interface CDOTAUserMsgHighFiveCompleted {
  playerId1: number;
  playerId2: number;
  specialHighFive: boolean;
  specialEntindex: number;
}

export interface CDOTAUserMsgHighFiveLeftHanging {
  playerId: number;
}

export interface CDOTAUserMsgShovelUnearth {
  playerId: number;
  allChat: boolean;
  locstring: string;
  quantity: number;
}

export interface CDOTAUserMsgAllStarEvent {
  sourcePlayerId: number;
  targetPlayerId: number;
  pointAmount: number;
  eventId: number;
  playerScores: CDOTAUserMsgAllStarEvent_PlayerScore[];
}

export interface CDOTAUserMsgAllStarEvent_PlayerScore {
  playerId: number;
  scoreSansKda: number;
}

export interface CDOTAUserMsgQueuedOrderRemoved {
  unitOrderSequence: number[];
}

export interface CDOTAUserMsgDebugChallenge {
  challengeType: number;
  challengeQueryId: number;
  eventId: number;
  instanceId: number;
  challengeVar0: number;
  challengeVar1: number;
  challengeMaxRank: number;
}

export interface CDOTAUserMsgFoundNeutralItem {
  playerId: number;
  itemAbilityId: number;
  itemTier: number;
  tierItemCount: number;
}

export interface CDOTAUserMsgOutpostCaptured {
  outpostEntindex: number;
  teamId: number;
}

export interface CDOTAUserMsgOutpostGrantedXP {
  teamId: number;
  xpAmount: number;
}

export interface CDOTAUserMsgMoveCameraToUnit {
  unitEhandle: number;
}

export interface CDOTAUserMsgPauseMinigameData {
  dataBits: CDOTAUserMsgPauseMinigameData_DataBit[];
}

export interface CDOTAUserMsgPauseMinigameData_DataBit {
  index: number;
  data: number;
  dataExtra: string;
}

export interface CDOTAUserMsgVersusScenePlayerBehavior {
  playerId: number;
  behavior: EDOTAVersusScenePlayerBehavior;
  playActivity: VersusScenePlayActivity | undefined;
  chatWheel: VersusSceneChatWheel | undefined;
  playbackRate: VersusScenePlaybackRate | undefined;
}

export interface CDOTAUserMsgQoPArcanaSummary {
  ehandle: number;
  arcanaLevel: number;
  playersHit: number;
  playersKilled: number;
}

export interface CDOTAUserMsgHotPotatoCreated {
  playerId1: number;
  playerId2: number;
}

export interface CDOTAUserMsgHotPotatoExploded {
  playerId: number;
}

export interface CDOTAUserMsgWKArcanaProgress {
  ehandle: number;
  arcanaLevel: number;
  heroId: number;
}

export interface CDOTAUserMsgGuildChallengeProgress {
  playerProgress: CDOTAUserMsgGuildChallengeProgress_PlayerProgress[];
  guildId: number;
  challengeInstanceId: number;
  challengeParameter: number;
  challengeType: CDOTAUserMsgGuildChallengeProgress_EChallengeType;
  challengeProgressAtStart: number;
  complete: boolean;
}

export enum CDOTAUserMsgGuildChallengeProgress_EChallengeType {
  k_EChallengeType_Invalid = 0,
  k_EChallengeType_Cooperative = 1,
  k_EChallengeType_Contract = 2,
}

export function cDOTAUserMsgGuildChallengeProgress_EChallengeTypeFromJSON(
  object: any,
): CDOTAUserMsgGuildChallengeProgress_EChallengeType {
  switch (object) {
    case 0:
    case "k_EChallengeType_Invalid":
      return CDOTAUserMsgGuildChallengeProgress_EChallengeType.k_EChallengeType_Invalid;
    case 1:
    case "k_EChallengeType_Cooperative":
      return CDOTAUserMsgGuildChallengeProgress_EChallengeType.k_EChallengeType_Cooperative;
    case 2:
    case "k_EChallengeType_Contract":
      return CDOTAUserMsgGuildChallengeProgress_EChallengeType.k_EChallengeType_Contract;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CDOTAUserMsgGuildChallengeProgress_EChallengeType",
      );
  }
}

export function cDOTAUserMsgGuildChallengeProgress_EChallengeTypeToJSON(
  object: CDOTAUserMsgGuildChallengeProgress_EChallengeType,
): string {
  switch (object) {
    case CDOTAUserMsgGuildChallengeProgress_EChallengeType.k_EChallengeType_Invalid:
      return "k_EChallengeType_Invalid";
    case CDOTAUserMsgGuildChallengeProgress_EChallengeType.k_EChallengeType_Cooperative:
      return "k_EChallengeType_Cooperative";
    case CDOTAUserMsgGuildChallengeProgress_EChallengeType.k_EChallengeType_Contract:
      return "k_EChallengeType_Contract";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CDOTAUserMsgGuildChallengeProgress_EChallengeType",
      );
  }
}

export interface CDOTAUserMsgGuildChallengeProgress_PlayerProgress {
  playerId: number;
  progress: number;
}

export interface CDOTAUserMsgWRArcanaProgress {
  ehandle: number;
  targetEhandle: number;
  arrowsLanded: number;
  damageDealt: number;
  targetHp: number;
  targetMaxHp: number;
  arcanaLevel: number;
}

export interface CDOTAUserMsgWRArcanaSummary {
  ehandle: number;
  targetEhandle: number;
  arrowsLanded: number;
  damageDealt: number;
  targetHp: number;
  targetMaxHp: number;
  arcanaLevel: number;
  success: boolean;
}

export interface CDOTAUserMsgEmptyItemSlotAlert {
  sourcePlayerId: number;
  targetPlayerId: number;
  slotIndex: number;
  cooldownSeconds: number;
}

export interface CDOTAUserMsgAghsStatusAlert {
  sourcePlayerId: number;
  targetPlayerId: number;
  targetEntindex: number;
  alertType: number;
  hasScepter: boolean;
  hasShard: boolean;
}

export interface CDOTAUserMsgMutedPlayers {
  textMutedPlayerIds: number[];
  voiceMutedPlayerIds: number[];
}

export interface CDOTAUserMsgContextualTip {
  tipId: number;
  referencedAbilities: string[];
  referencedUnits: string[];
  panoramaClasses: string[];
  forceAnnotation: boolean;
  variant: number;
  intParam: number;
  intParam2: number;
  floatParam: number;
  floatParam2: number;
  stringParam: string;
  stringParam2: string;
  tipTextOverride: string;
  tipAnnotationOverride: string;
  panoramaSnippet: string;
}

export interface CDOTAUserMsgChatMessage {
  sourcePlayerId: number;
  channelType: number;
  messageText: string;
}

export interface CDOTAUserMsgRockPaperScissorsStarted {
  playerIdSource: number;
  playerIdTarget: number;
}

export interface CDOTAUserMsgRockPaperScissorsFinished {
  playerId1: number;
  playerId2: number;
  player1Choice: number;
  player2Choice: number;
}

export interface CDOTAUserMsgDuelOpponentKilled {
  playerIdWinner: number;
  playerIdLoser: number;
}

export interface CDOTAUserMsgDuelAccepted {
  playerId1: number;
  playerId2: number;
}

export interface CDOTAUserMsgDuelRequested {
  playerIdRequestor: number;
}

export interface CDOTAUserMsgMuertaReleaseEventAssignedTargetKilled {
  playerIdKiller: number;
  playerIdTarget: number;
  points: number;
  pointsTotal: number;
  lastHit: boolean;
}

export interface CDOTAUserMsgPlayerDraftSuggestPick {
  playerId: number;
  suggestionPlayerId: number;
}

export interface CDOTAUserMsgPlayerDraftPick {
  playerIdCaptain: number;
  playerIdTarget: number;
  team: number;
}

function createBaseCDOTAUserMsgAIDebugLine(): CDOTAUserMsgAIDebugLine {
  return { message: "" };
}

export const CDOTAUserMsgAIDebugLine = {
  encode(message: CDOTAUserMsgAIDebugLine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgAIDebugLine {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgAIDebugLine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgAIDebugLine {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: CDOTAUserMsgAIDebugLine): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },
};

function createBaseCDOTAUserMsgPing(): CDOTAUserMsgPing {
  return { ping: 0, loss: 0 };
}

export const CDOTAUserMsgPing = {
  encode(message: CDOTAUserMsgPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ping !== 0) {
      writer.uint32(16).uint32(message.ping);
    }
    if (message.loss !== 0) {
      writer.uint32(24).uint32(message.loss);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgPing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgPing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 16) {
            break;
          }

          message.ping = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.loss = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgPing {
    return { ping: isSet(object.ping) ? Number(object.ping) : 0, loss: isSet(object.loss) ? Number(object.loss) : 0 };
  },

  toJSON(message: CDOTAUserMsgPing): unknown {
    const obj: any = {};
    message.ping !== undefined && (obj.ping = Math.round(message.ping));
    message.loss !== undefined && (obj.loss = Math.round(message.loss));
    return obj;
  },
};

function createBaseCDOTAUserMsgSwapVerify(): CDOTAUserMsgSwapVerify {
  return { playerId: 0 };
}

export const CDOTAUserMsgSwapVerify = {
  encode(message: CDOTAUserMsgSwapVerify, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSwapVerify {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSwapVerify();
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

  fromJSON(object: any): CDOTAUserMsgSwapVerify {
    return { playerId: isSet(object.playerId) ? Number(object.playerId) : 0 };
  },

  toJSON(message: CDOTAUserMsgSwapVerify): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    return obj;
  },
};

function createBaseCDOTAUserMsgChatEvent(): CDOTAUserMsgChatEvent {
  return {
    type: 0,
    value: 0,
    playerid1: 0,
    playerid2: 0,
    playerid3: 0,
    playerid4: 0,
    playerid5: 0,
    playerid6: 0,
    value2: 0,
    value3: 0,
  };
}

export const CDOTAUserMsgChatEvent = {
  encode(message: CDOTAUserMsgChatEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    if (message.playerid1 !== 0) {
      writer.uint32(24).sint32(message.playerid1);
    }
    if (message.playerid2 !== 0) {
      writer.uint32(32).sint32(message.playerid2);
    }
    if (message.playerid3 !== 0) {
      writer.uint32(40).sint32(message.playerid3);
    }
    if (message.playerid4 !== 0) {
      writer.uint32(48).sint32(message.playerid4);
    }
    if (message.playerid5 !== 0) {
      writer.uint32(56).sint32(message.playerid5);
    }
    if (message.playerid6 !== 0) {
      writer.uint32(64).sint32(message.playerid6);
    }
    if (message.value2 !== 0) {
      writer.uint32(72).uint32(message.value2);
    }
    if (message.value3 !== 0) {
      writer.uint32(80).uint32(message.value3);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgChatEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgChatEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.value = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.playerid1 = reader.sint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.playerid2 = reader.sint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.playerid3 = reader.sint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.playerid4 = reader.sint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.playerid5 = reader.sint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.playerid6 = reader.sint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.value2 = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.value3 = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgChatEvent {
    return {
      type: isSet(object.type) ? dotaChatMessageFromJSON(object.type) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
      playerid1: isSet(object.playerid1) ? Number(object.playerid1) : 0,
      playerid2: isSet(object.playerid2) ? Number(object.playerid2) : 0,
      playerid3: isSet(object.playerid3) ? Number(object.playerid3) : 0,
      playerid4: isSet(object.playerid4) ? Number(object.playerid4) : 0,
      playerid5: isSet(object.playerid5) ? Number(object.playerid5) : 0,
      playerid6: isSet(object.playerid6) ? Number(object.playerid6) : 0,
      value2: isSet(object.value2) ? Number(object.value2) : 0,
      value3: isSet(object.value3) ? Number(object.value3) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgChatEvent): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = dotaChatMessageToJSON(message.type));
    message.value !== undefined && (obj.value = Math.round(message.value));
    message.playerid1 !== undefined && (obj.playerid1 = Math.round(message.playerid1));
    message.playerid2 !== undefined && (obj.playerid2 = Math.round(message.playerid2));
    message.playerid3 !== undefined && (obj.playerid3 = Math.round(message.playerid3));
    message.playerid4 !== undefined && (obj.playerid4 = Math.round(message.playerid4));
    message.playerid5 !== undefined && (obj.playerid5 = Math.round(message.playerid5));
    message.playerid6 !== undefined && (obj.playerid6 = Math.round(message.playerid6));
    message.value2 !== undefined && (obj.value2 = Math.round(message.value2));
    message.value3 !== undefined && (obj.value3 = Math.round(message.value3));
    return obj;
  },
};

function createBaseCDOTAUserMsgBotChat(): CDOTAUserMsgBotChat {
  return { playerId: 0, message: "", target: "", teamOnly: false };
}

export const CDOTAUserMsgBotChat = {
  encode(message: CDOTAUserMsgBotChat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.target !== "") {
      writer.uint32(34).string(message.target);
    }
    if (message.teamOnly === true) {
      writer.uint32(40).bool(message.teamOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgBotChat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgBotChat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.message = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.target = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.teamOnly = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgBotChat {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      target: isSet(object.target) ? String(object.target) : "",
      teamOnly: isSet(object.teamOnly) ? Boolean(object.teamOnly) : false,
    };
  },

  toJSON(message: CDOTAUserMsgBotChat): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.message !== undefined && (obj.message = message.message);
    message.target !== undefined && (obj.target = message.target);
    message.teamOnly !== undefined && (obj.teamOnly = message.teamOnly);
    return obj;
  },
};

function createBaseCDOTAUserMsgCombatHeroPositions(): CDOTAUserMsgCombatHeroPositions {
  return { index: 0, time: 0, worldPos: undefined, health: 0 };
}

export const CDOTAUserMsgCombatHeroPositions = {
  encode(message: CDOTAUserMsgCombatHeroPositions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.time !== 0) {
      writer.uint32(16).int32(message.time);
    }
    if (message.worldPos !== undefined) {
      CMsgVector2D.encode(message.worldPos, writer.uint32(26).fork()).ldelim();
    }
    if (message.health !== 0) {
      writer.uint32(32).int32(message.health);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCombatHeroPositions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCombatHeroPositions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.time = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.worldPos = CMsgVector2D.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.health = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgCombatHeroPositions {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      time: isSet(object.time) ? Number(object.time) : 0,
      worldPos: isSet(object.worldPos) ? CMsgVector2D.fromJSON(object.worldPos) : undefined,
      health: isSet(object.health) ? Number(object.health) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgCombatHeroPositions): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.worldPos !== undefined &&
      (obj.worldPos = message.worldPos ? CMsgVector2D.toJSON(message.worldPos) : undefined);
    message.health !== undefined && (obj.health = Math.round(message.health));
    return obj;
  },
};

function createBaseCDOTAUserMsgCombatLogBulkData(): CDOTAUserMsgCombatLogBulkData {
  return { combatEntries: [], timestamp: 0, duration: 0, playerId: 0, requestTime: 0 };
}

export const CDOTAUserMsgCombatLogBulkData = {
  encode(message: CDOTAUserMsgCombatLogBulkData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.combatEntries) {
      CMsgDOTACombatLogEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.timestamp !== 0) {
      writer.uint32(21).float(message.timestamp);
    }
    if (message.duration !== 0) {
      writer.uint32(29).float(message.duration);
    }
    if (message.playerId !== 0) {
      writer.uint32(32).int32(message.playerId);
    }
    if (message.requestTime !== 0) {
      writer.uint32(45).float(message.requestTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCombatLogBulkData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCombatLogBulkData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.combatEntries.push(CMsgDOTACombatLogEntry.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.timestamp = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.duration = reader.float();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.playerId = reader.int32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.requestTime = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgCombatLogBulkData {
    return {
      combatEntries: Array.isArray(object?.combatEntries)
        ? object.combatEntries.map((e: any) => CMsgDOTACombatLogEntry.fromJSON(e))
        : [],
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      requestTime: isSet(object.requestTime) ? Number(object.requestTime) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgCombatLogBulkData): unknown {
    const obj: any = {};
    if (message.combatEntries) {
      obj.combatEntries = message.combatEntries.map((e) => e ? CMsgDOTACombatLogEntry.toJSON(e) : undefined);
    } else {
      obj.combatEntries = [];
    }
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.duration !== undefined && (obj.duration = message.duration);
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.requestTime !== undefined && (obj.requestTime = message.requestTime);
    return obj;
  },
};

function createBaseCDOTAUserMsgProjectileParticleCPData(): CDOTAUserMsgProjectileParticleCPData {
  return { controlPoint: 0, vector: undefined };
}

export const CDOTAUserMsgProjectileParticleCPData = {
  encode(message: CDOTAUserMsgProjectileParticleCPData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.controlPoint !== 0) {
      writer.uint32(8).int32(message.controlPoint);
    }
    if (message.vector !== undefined) {
      CMsgVector.encode(message.vector, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgProjectileParticleCPData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgProjectileParticleCPData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.controlPoint = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.vector = CMsgVector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgProjectileParticleCPData {
    return {
      controlPoint: isSet(object.controlPoint) ? Number(object.controlPoint) : 0,
      vector: isSet(object.vector) ? CMsgVector.fromJSON(object.vector) : undefined,
    };
  },

  toJSON(message: CDOTAUserMsgProjectileParticleCPData): unknown {
    const obj: any = {};
    message.controlPoint !== undefined && (obj.controlPoint = Math.round(message.controlPoint));
    message.vector !== undefined && (obj.vector = message.vector ? CMsgVector.toJSON(message.vector) : undefined);
    return obj;
  },
};

function createBaseCDOTAUserMsgMiniKillCamInfo(): CDOTAUserMsgMiniKillCamInfo {
  return { attackers: [] };
}

export const CDOTAUserMsgMiniKillCamInfo = {
  encode(message: CDOTAUserMsgMiniKillCamInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attackers) {
      CDOTAUserMsgMiniKillCamInfo_Attacker.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMiniKillCamInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMiniKillCamInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.attackers.push(CDOTAUserMsgMiniKillCamInfo_Attacker.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgMiniKillCamInfo {
    return {
      attackers: Array.isArray(object?.attackers)
        ? object.attackers.map((e: any) => CDOTAUserMsgMiniKillCamInfo_Attacker.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDOTAUserMsgMiniKillCamInfo): unknown {
    const obj: any = {};
    if (message.attackers) {
      obj.attackers = message.attackers.map((e) => e ? CDOTAUserMsgMiniKillCamInfo_Attacker.toJSON(e) : undefined);
    } else {
      obj.attackers = [];
    }
    return obj;
  },
};

function createBaseCDOTAUserMsgMiniKillCamInfo_Attacker(): CDOTAUserMsgMiniKillCamInfo_Attacker {
  return { attacker: 0, totalDamage: 0, abilities: [], attackerName: "" };
}

export const CDOTAUserMsgMiniKillCamInfo_Attacker = {
  encode(message: CDOTAUserMsgMiniKillCamInfo_Attacker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attacker !== 0) {
      writer.uint32(8).uint32(message.attacker);
    }
    if (message.totalDamage !== 0) {
      writer.uint32(16).int32(message.totalDamage);
    }
    for (const v of message.abilities) {
      CDOTAUserMsgMiniKillCamInfo_Attacker_Ability.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.attackerName !== "") {
      writer.uint32(34).string(message.attackerName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMiniKillCamInfo_Attacker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMiniKillCamInfo_Attacker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.attacker = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.totalDamage = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.abilities.push(CDOTAUserMsgMiniKillCamInfo_Attacker_Ability.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.attackerName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgMiniKillCamInfo_Attacker {
    return {
      attacker: isSet(object.attacker) ? Number(object.attacker) : 0,
      totalDamage: isSet(object.totalDamage) ? Number(object.totalDamage) : 0,
      abilities: Array.isArray(object?.abilities)
        ? object.abilities.map((e: any) => CDOTAUserMsgMiniKillCamInfo_Attacker_Ability.fromJSON(e))
        : [],
      attackerName: isSet(object.attackerName) ? String(object.attackerName) : "",
    };
  },

  toJSON(message: CDOTAUserMsgMiniKillCamInfo_Attacker): unknown {
    const obj: any = {};
    message.attacker !== undefined && (obj.attacker = Math.round(message.attacker));
    message.totalDamage !== undefined && (obj.totalDamage = Math.round(message.totalDamage));
    if (message.abilities) {
      obj.abilities = message.abilities.map((e) =>
        e ? CDOTAUserMsgMiniKillCamInfo_Attacker_Ability.toJSON(e) : undefined
      );
    } else {
      obj.abilities = [];
    }
    message.attackerName !== undefined && (obj.attackerName = message.attackerName);
    return obj;
  },
};

function createBaseCDOTAUserMsgMiniKillCamInfo_Attacker_Ability(): CDOTAUserMsgMiniKillCamInfo_Attacker_Ability {
  return { abilityId: 0, damage: 0 };
}

export const CDOTAUserMsgMiniKillCamInfo_Attacker_Ability = {
  encode(message: CDOTAUserMsgMiniKillCamInfo_Attacker_Ability, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.abilityId !== 0) {
      writer.uint32(8).int32(message.abilityId);
    }
    if (message.damage !== 0) {
      writer.uint32(16).int32(message.damage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMiniKillCamInfo_Attacker_Ability {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMiniKillCamInfo_Attacker_Ability();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.abilityId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.damage = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgMiniKillCamInfo_Attacker_Ability {
    return {
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      damage: isSet(object.damage) ? Number(object.damage) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgMiniKillCamInfo_Attacker_Ability): unknown {
    const obj: any = {};
    message.abilityId !== undefined && (obj.abilityId = Math.round(message.abilityId));
    message.damage !== undefined && (obj.damage = Math.round(message.damage));
    return obj;
  },
};

function createBaseCDOTAUserMsgGlobalLightColor(): CDOTAUserMsgGlobalLightColor {
  return { color: 0, duration: 0 };
}

export const CDOTAUserMsgGlobalLightColor = {
  encode(message: CDOTAUserMsgGlobalLightColor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.color !== 0) {
      writer.uint32(8).uint32(message.color);
    }
    if (message.duration !== 0) {
      writer.uint32(21).float(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgGlobalLightColor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgGlobalLightColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.color = reader.uint32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.duration = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgGlobalLightColor {
    return {
      color: isSet(object.color) ? Number(object.color) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgGlobalLightColor): unknown {
    const obj: any = {};
    message.color !== undefined && (obj.color = Math.round(message.color));
    message.duration !== undefined && (obj.duration = message.duration);
    return obj;
  },
};

function createBaseCDOTAUserMsgGlobalLightDirection(): CDOTAUserMsgGlobalLightDirection {
  return { direction: undefined, duration: 0 };
}

export const CDOTAUserMsgGlobalLightDirection = {
  encode(message: CDOTAUserMsgGlobalLightDirection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.direction !== undefined) {
      CMsgVector.encode(message.direction, writer.uint32(10).fork()).ldelim();
    }
    if (message.duration !== 0) {
      writer.uint32(21).float(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgGlobalLightDirection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgGlobalLightDirection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.direction = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.duration = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgGlobalLightDirection {
    return {
      direction: isSet(object.direction) ? CMsgVector.fromJSON(object.direction) : undefined,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgGlobalLightDirection): unknown {
    const obj: any = {};
    message.direction !== undefined &&
      (obj.direction = message.direction ? CMsgVector.toJSON(message.direction) : undefined);
    message.duration !== undefined && (obj.duration = message.duration);
    return obj;
  },
};

function createBaseCDOTAUserMsgLocationPing(): CDOTAUserMsgLocationPing {
  return { playerId: 0, locationPing: undefined };
}

export const CDOTAUserMsgLocationPing = {
  encode(message: CDOTAUserMsgLocationPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.locationPing !== undefined) {
      CDOTAMsgLocationPing.encode(message.locationPing, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgLocationPing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgLocationPing();
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
          if (tag != 18) {
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

  fromJSON(object: any): CDOTAUserMsgLocationPing {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      locationPing: isSet(object.locationPing) ? CDOTAMsgLocationPing.fromJSON(object.locationPing) : undefined,
    };
  },

  toJSON(message: CDOTAUserMsgLocationPing): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.locationPing !== undefined &&
      (obj.locationPing = message.locationPing ? CDOTAMsgLocationPing.toJSON(message.locationPing) : undefined);
    return obj;
  },
};

function createBaseCDOTAUserMsgPingConfirmation(): CDOTAUserMsgPingConfirmation {
  return { playerIdOfOriginalPinger: 0, entityIndex: 0, iconType: 0, location: undefined };
}

export const CDOTAUserMsgPingConfirmation = {
  encode(message: CDOTAUserMsgPingConfirmation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerIdOfOriginalPinger !== 0) {
      writer.uint32(8).int32(message.playerIdOfOriginalPinger);
    }
    if (message.entityIndex !== 0) {
      writer.uint32(16).uint32(message.entityIndex);
    }
    if (message.iconType !== 0) {
      writer.uint32(24).uint32(message.iconType);
    }
    if (message.location !== undefined) {
      CMsgVector.encode(message.location, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgPingConfirmation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgPingConfirmation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerIdOfOriginalPinger = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.entityIndex = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.iconType = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.location = CMsgVector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgPingConfirmation {
    return {
      playerIdOfOriginalPinger: isSet(object.playerIdOfOriginalPinger) ? Number(object.playerIdOfOriginalPinger) : 0,
      entityIndex: isSet(object.entityIndex) ? Number(object.entityIndex) : 0,
      iconType: isSet(object.iconType) ? Number(object.iconType) : 0,
      location: isSet(object.location) ? CMsgVector.fromJSON(object.location) : undefined,
    };
  },

  toJSON(message: CDOTAUserMsgPingConfirmation): unknown {
    const obj: any = {};
    message.playerIdOfOriginalPinger !== undefined &&
      (obj.playerIdOfOriginalPinger = Math.round(message.playerIdOfOriginalPinger));
    message.entityIndex !== undefined && (obj.entityIndex = Math.round(message.entityIndex));
    message.iconType !== undefined && (obj.iconType = Math.round(message.iconType));
    message.location !== undefined &&
      (obj.location = message.location ? CMsgVector.toJSON(message.location) : undefined);
    return obj;
  },
};

function createBaseCDOTAUserMsgItemAlert(): CDOTAUserMsgItemAlert {
  return { playerId: 0, itemAlert: undefined };
}

export const CDOTAUserMsgItemAlert = {
  encode(message: CDOTAUserMsgItemAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.itemAlert !== undefined) {
      CDOTAMsgItemAlert.encode(message.itemAlert, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgItemAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgItemAlert();
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
          if (tag != 18) {
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

  fromJSON(object: any): CDOTAUserMsgItemAlert {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      itemAlert: isSet(object.itemAlert) ? CDOTAMsgItemAlert.fromJSON(object.itemAlert) : undefined,
    };
  },

  toJSON(message: CDOTAUserMsgItemAlert): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.itemAlert !== undefined &&
      (obj.itemAlert = message.itemAlert ? CDOTAMsgItemAlert.toJSON(message.itemAlert) : undefined);
    return obj;
  },
};

function createBaseCDOTAUserMsgEnemyItemAlert(): CDOTAUserMsgEnemyItemAlert {
  return {
    playerId: 0,
    targetPlayerId: 0,
    itemAbilityId: 0,
    runeType: 0,
    entityId: 0,
    itemLevel: 0,
    primaryCharges: 0,
    secondaryCharges: 0,
  };
}

export const CDOTAUserMsgEnemyItemAlert = {
  encode(message: CDOTAUserMsgEnemyItemAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.targetPlayerId !== 0) {
      writer.uint32(16).int32(message.targetPlayerId);
    }
    if (message.itemAbilityId !== 0) {
      writer.uint32(24).int32(message.itemAbilityId);
    }
    if (message.runeType !== 0) {
      writer.uint32(32).int32(message.runeType);
    }
    if (message.entityId !== 0) {
      writer.uint32(40).int32(message.entityId);
    }
    if (message.itemLevel !== 0) {
      writer.uint32(48).int32(message.itemLevel);
    }
    if (message.primaryCharges !== 0) {
      writer.uint32(56).int32(message.primaryCharges);
    }
    if (message.secondaryCharges !== 0) {
      writer.uint32(64).int32(message.secondaryCharges);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgEnemyItemAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgEnemyItemAlert();
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

          message.targetPlayerId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.itemAbilityId = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.runeType = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.entityId = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.itemLevel = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.primaryCharges = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
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

  fromJSON(object: any): CDOTAUserMsgEnemyItemAlert {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      targetPlayerId: isSet(object.targetPlayerId) ? Number(object.targetPlayerId) : 0,
      itemAbilityId: isSet(object.itemAbilityId) ? Number(object.itemAbilityId) : 0,
      runeType: isSet(object.runeType) ? Number(object.runeType) : 0,
      entityId: isSet(object.entityId) ? Number(object.entityId) : 0,
      itemLevel: isSet(object.itemLevel) ? Number(object.itemLevel) : 0,
      primaryCharges: isSet(object.primaryCharges) ? Number(object.primaryCharges) : 0,
      secondaryCharges: isSet(object.secondaryCharges) ? Number(object.secondaryCharges) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgEnemyItemAlert): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.targetPlayerId !== undefined && (obj.targetPlayerId = Math.round(message.targetPlayerId));
    message.itemAbilityId !== undefined && (obj.itemAbilityId = Math.round(message.itemAbilityId));
    message.runeType !== undefined && (obj.runeType = Math.round(message.runeType));
    message.entityId !== undefined && (obj.entityId = Math.round(message.entityId));
    message.itemLevel !== undefined && (obj.itemLevel = Math.round(message.itemLevel));
    message.primaryCharges !== undefined && (obj.primaryCharges = Math.round(message.primaryCharges));
    message.secondaryCharges !== undefined && (obj.secondaryCharges = Math.round(message.secondaryCharges));
    return obj;
  },
};

function createBaseCDOTAUserMsgModifierAlert(): CDOTAUserMsgModifierAlert {
  return { playerId: 0, className: "", stackCount: 0, isDebuff: false, targetEntindex: 0, secondsRemaining: 0 };
}

export const CDOTAUserMsgModifierAlert = {
  encode(message: CDOTAUserMsgModifierAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.className !== "") {
      writer.uint32(18).string(message.className);
    }
    if (message.stackCount !== 0) {
      writer.uint32(24).uint32(message.stackCount);
    }
    if (message.isDebuff === true) {
      writer.uint32(32).bool(message.isDebuff);
    }
    if (message.targetEntindex !== 0) {
      writer.uint32(40).int32(message.targetEntindex);
    }
    if (message.secondsRemaining !== 0) {
      writer.uint32(53).float(message.secondsRemaining);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgModifierAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgModifierAlert();
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
          if (tag != 18) {
            break;
          }

          message.className = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.stackCount = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.isDebuff = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.targetEntindex = reader.int32();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.secondsRemaining = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgModifierAlert {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      className: isSet(object.className) ? String(object.className) : "",
      stackCount: isSet(object.stackCount) ? Number(object.stackCount) : 0,
      isDebuff: isSet(object.isDebuff) ? Boolean(object.isDebuff) : false,
      targetEntindex: isSet(object.targetEntindex) ? Number(object.targetEntindex) : 0,
      secondsRemaining: isSet(object.secondsRemaining) ? Number(object.secondsRemaining) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgModifierAlert): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.className !== undefined && (obj.className = message.className);
    message.stackCount !== undefined && (obj.stackCount = Math.round(message.stackCount));
    message.isDebuff !== undefined && (obj.isDebuff = message.isDebuff);
    message.targetEntindex !== undefined && (obj.targetEntindex = Math.round(message.targetEntindex));
    message.secondsRemaining !== undefined && (obj.secondsRemaining = message.secondsRemaining);
    return obj;
  },
};

function createBaseCDOTAUserMsgHPManaAlert(): CDOTAUserMsgHPManaAlert {
  return { playerId: 0, targetEntindex: 0, showRawValues: false };
}

export const CDOTAUserMsgHPManaAlert = {
  encode(message: CDOTAUserMsgHPManaAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.targetEntindex !== 0) {
      writer.uint32(16).int32(message.targetEntindex);
    }
    if (message.showRawValues === true) {
      writer.uint32(24).bool(message.showRawValues);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgHPManaAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgHPManaAlert();
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

          message.targetEntindex = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
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

  fromJSON(object: any): CDOTAUserMsgHPManaAlert {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      targetEntindex: isSet(object.targetEntindex) ? Number(object.targetEntindex) : 0,
      showRawValues: isSet(object.showRawValues) ? Boolean(object.showRawValues) : false,
    };
  },

  toJSON(message: CDOTAUserMsgHPManaAlert): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.targetEntindex !== undefined && (obj.targetEntindex = Math.round(message.targetEntindex));
    message.showRawValues !== undefined && (obj.showRawValues = message.showRawValues);
    return obj;
  },
};

function createBaseCDOTAUserMsgNeutralCampAlert(): CDOTAUserMsgNeutralCampAlert {
  return {
    playerId: 0,
    spawnerEntindex: 0,
    unitEntindex: 0,
    stackCount: 0,
    campType: 0,
    stackRequest: false,
    stackIntention: false,
  };
}

export const CDOTAUserMsgNeutralCampAlert = {
  encode(message: CDOTAUserMsgNeutralCampAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.spawnerEntindex !== 0) {
      writer.uint32(16).int32(message.spawnerEntindex);
    }
    if (message.unitEntindex !== 0) {
      writer.uint32(24).int32(message.unitEntindex);
    }
    if (message.stackCount !== 0) {
      writer.uint32(32).int32(message.stackCount);
    }
    if (message.campType !== 0) {
      writer.uint32(40).int32(message.campType);
    }
    if (message.stackRequest === true) {
      writer.uint32(48).bool(message.stackRequest);
    }
    if (message.stackIntention === true) {
      writer.uint32(56).bool(message.stackIntention);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgNeutralCampAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgNeutralCampAlert();
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

          message.spawnerEntindex = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.unitEntindex = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.stackCount = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.campType = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.stackRequest = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.stackIntention = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgNeutralCampAlert {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      spawnerEntindex: isSet(object.spawnerEntindex) ? Number(object.spawnerEntindex) : 0,
      unitEntindex: isSet(object.unitEntindex) ? Number(object.unitEntindex) : 0,
      stackCount: isSet(object.stackCount) ? Number(object.stackCount) : 0,
      campType: isSet(object.campType) ? Number(object.campType) : 0,
      stackRequest: isSet(object.stackRequest) ? Boolean(object.stackRequest) : false,
      stackIntention: isSet(object.stackIntention) ? Boolean(object.stackIntention) : false,
    };
  },

  toJSON(message: CDOTAUserMsgNeutralCampAlert): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.spawnerEntindex !== undefined && (obj.spawnerEntindex = Math.round(message.spawnerEntindex));
    message.unitEntindex !== undefined && (obj.unitEntindex = Math.round(message.unitEntindex));
    message.stackCount !== undefined && (obj.stackCount = Math.round(message.stackCount));
    message.campType !== undefined && (obj.campType = Math.round(message.campType));
    message.stackRequest !== undefined && (obj.stackRequest = message.stackRequest);
    message.stackIntention !== undefined && (obj.stackIntention = message.stackIntention);
    return obj;
  },
};

function createBaseCDOTAUserMsgGlyphAlert(): CDOTAUserMsgGlyphAlert {
  return { playerId: 0, negative: false };
}

export const CDOTAUserMsgGlyphAlert = {
  encode(message: CDOTAUserMsgGlyphAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.negative === true) {
      writer.uint32(16).bool(message.negative);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgGlyphAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgGlyphAlert();
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

  fromJSON(object: any): CDOTAUserMsgGlyphAlert {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      negative: isSet(object.negative) ? Boolean(object.negative) : false,
    };
  },

  toJSON(message: CDOTAUserMsgGlyphAlert): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.negative !== undefined && (obj.negative = message.negative);
    return obj;
  },
};

function createBaseCDOTAUserMsgRadarAlert(): CDOTAUserMsgRadarAlert {
  return { playerId: 0, negative: false };
}

export const CDOTAUserMsgRadarAlert = {
  encode(message: CDOTAUserMsgRadarAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.negative === true) {
      writer.uint32(16).bool(message.negative);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgRadarAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgRadarAlert();
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

  fromJSON(object: any): CDOTAUserMsgRadarAlert {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      negative: isSet(object.negative) ? Boolean(object.negative) : false,
    };
  },

  toJSON(message: CDOTAUserMsgRadarAlert): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.negative !== undefined && (obj.negative = message.negative);
    return obj;
  },
};

function createBaseCDOTAUserMsgWillPurchaseAlert(): CDOTAUserMsgWillPurchaseAlert {
  return { itemAbilityId: 0, playerId: 0, goldRemaining: 0, suggestionPlayerId: 0 };
}

export const CDOTAUserMsgWillPurchaseAlert = {
  encode(message: CDOTAUserMsgWillPurchaseAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemAbilityId !== 0) {
      writer.uint32(8).int32(message.itemAbilityId);
    }
    if (message.playerId !== 0) {
      writer.uint32(16).int32(message.playerId);
    }
    if (message.goldRemaining !== 0) {
      writer.uint32(24).uint32(message.goldRemaining);
    }
    if (message.suggestionPlayerId !== 0) {
      writer.uint32(32).int32(message.suggestionPlayerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgWillPurchaseAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgWillPurchaseAlert();
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

          message.playerId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.goldRemaining = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
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

  fromJSON(object: any): CDOTAUserMsgWillPurchaseAlert {
    return {
      itemAbilityId: isSet(object.itemAbilityId) ? Number(object.itemAbilityId) : 0,
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      goldRemaining: isSet(object.goldRemaining) ? Number(object.goldRemaining) : 0,
      suggestionPlayerId: isSet(object.suggestionPlayerId) ? Number(object.suggestionPlayerId) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgWillPurchaseAlert): unknown {
    const obj: any = {};
    message.itemAbilityId !== undefined && (obj.itemAbilityId = Math.round(message.itemAbilityId));
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.goldRemaining !== undefined && (obj.goldRemaining = Math.round(message.goldRemaining));
    message.suggestionPlayerId !== undefined && (obj.suggestionPlayerId = Math.round(message.suggestionPlayerId));
    return obj;
  },
};

function createBaseCDOTAUserMsgEmptyTeleportAlert(): CDOTAUserMsgEmptyTeleportAlert {
  return { sourcePlayerId: 0, targetPlayerId: 0, cooldownSeconds: 0 };
}

export const CDOTAUserMsgEmptyTeleportAlert = {
  encode(message: CDOTAUserMsgEmptyTeleportAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourcePlayerId !== 0) {
      writer.uint32(8).int32(message.sourcePlayerId);
    }
    if (message.targetPlayerId !== 0) {
      writer.uint32(16).int32(message.targetPlayerId);
    }
    if (message.cooldownSeconds !== 0) {
      writer.uint32(24).int32(message.cooldownSeconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgEmptyTeleportAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgEmptyTeleportAlert();
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

          message.cooldownSeconds = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgEmptyTeleportAlert {
    return {
      sourcePlayerId: isSet(object.sourcePlayerId) ? Number(object.sourcePlayerId) : 0,
      targetPlayerId: isSet(object.targetPlayerId) ? Number(object.targetPlayerId) : 0,
      cooldownSeconds: isSet(object.cooldownSeconds) ? Number(object.cooldownSeconds) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgEmptyTeleportAlert): unknown {
    const obj: any = {};
    message.sourcePlayerId !== undefined && (obj.sourcePlayerId = Math.round(message.sourcePlayerId));
    message.targetPlayerId !== undefined && (obj.targetPlayerId = Math.round(message.targetPlayerId));
    message.cooldownSeconds !== undefined && (obj.cooldownSeconds = Math.round(message.cooldownSeconds));
    return obj;
  },
};

function createBaseCDOTAUserMsgMarsArenaOfBloodAttack(): CDOTAUserMsgMarsArenaOfBloodAttack {
  return { sourceEhandle: 0, targetEhandle: 0, warriorIndex: 0 };
}

export const CDOTAUserMsgMarsArenaOfBloodAttack = {
  encode(message: CDOTAUserMsgMarsArenaOfBloodAttack, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceEhandle !== 0) {
      writer.uint32(8).uint32(message.sourceEhandle);
    }
    if (message.targetEhandle !== 0) {
      writer.uint32(16).uint32(message.targetEhandle);
    }
    if (message.warriorIndex !== 0) {
      writer.uint32(24).int32(message.warriorIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMarsArenaOfBloodAttack {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMarsArenaOfBloodAttack();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sourceEhandle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetEhandle = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.warriorIndex = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgMarsArenaOfBloodAttack {
    return {
      sourceEhandle: isSet(object.sourceEhandle) ? Number(object.sourceEhandle) : 0,
      targetEhandle: isSet(object.targetEhandle) ? Number(object.targetEhandle) : 0,
      warriorIndex: isSet(object.warriorIndex) ? Number(object.warriorIndex) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgMarsArenaOfBloodAttack): unknown {
    const obj: any = {};
    message.sourceEhandle !== undefined && (obj.sourceEhandle = Math.round(message.sourceEhandle));
    message.targetEhandle !== undefined && (obj.targetEhandle = Math.round(message.targetEhandle));
    message.warriorIndex !== undefined && (obj.warriorIndex = Math.round(message.warriorIndex));
    return obj;
  },
};

function createBaseCDOTAEntityMsgInvokerSpellCast(): CDOTAEntityMsgInvokerSpellCast {
  return { entityMsg: undefined, castActivity: 0 };
}

export const CDOTAEntityMsgInvokerSpellCast = {
  encode(message: CDOTAEntityMsgInvokerSpellCast, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityMsg !== undefined) {
      CEntityMsg.encode(message.entityMsg, writer.uint32(10).fork()).ldelim();
    }
    if (message.castActivity !== 0) {
      writer.uint32(16).int32(message.castActivity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAEntityMsgInvokerSpellCast {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAEntityMsgInvokerSpellCast();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.entityMsg = CEntityMsg.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.castActivity = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAEntityMsgInvokerSpellCast {
    return {
      entityMsg: isSet(object.entityMsg) ? CEntityMsg.fromJSON(object.entityMsg) : undefined,
      castActivity: isSet(object.castActivity) ? Number(object.castActivity) : 0,
    };
  },

  toJSON(message: CDOTAEntityMsgInvokerSpellCast): unknown {
    const obj: any = {};
    message.entityMsg !== undefined &&
      (obj.entityMsg = message.entityMsg ? CEntityMsg.toJSON(message.entityMsg) : undefined);
    message.castActivity !== undefined && (obj.castActivity = Math.round(message.castActivity));
    return obj;
  },
};

function createBaseCDOTAUserMsgBuyBackStateAlert(): CDOTAUserMsgBuyBackStateAlert {
  return { playerId: 0 };
}

export const CDOTAUserMsgBuyBackStateAlert = {
  encode(message: CDOTAUserMsgBuyBackStateAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgBuyBackStateAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgBuyBackStateAlert();
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

  fromJSON(object: any): CDOTAUserMsgBuyBackStateAlert {
    return { playerId: isSet(object.playerId) ? Number(object.playerId) : 0 };
  },

  toJSON(message: CDOTAUserMsgBuyBackStateAlert): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    return obj;
  },
};

function createBaseCDOTAUserMsgQuickBuyAlert(): CDOTAUserMsgQuickBuyAlert {
  return { playerId: 0, itemAbilityId: 0, goldCost: 0, itemCooldownSeconds: 0, showBuyback: false };
}

export const CDOTAUserMsgQuickBuyAlert = {
  encode(message: CDOTAUserMsgQuickBuyAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.itemAbilityId !== 0) {
      writer.uint32(16).int32(message.itemAbilityId);
    }
    if (message.goldCost !== 0) {
      writer.uint32(24).int32(message.goldCost);
    }
    if (message.itemCooldownSeconds !== 0) {
      writer.uint32(32).int32(message.itemCooldownSeconds);
    }
    if (message.showBuyback === true) {
      writer.uint32(40).bool(message.showBuyback);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgQuickBuyAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgQuickBuyAlert();
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

          message.itemAbilityId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.goldCost = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.itemCooldownSeconds = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
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

  fromJSON(object: any): CDOTAUserMsgQuickBuyAlert {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      itemAbilityId: isSet(object.itemAbilityId) ? Number(object.itemAbilityId) : 0,
      goldCost: isSet(object.goldCost) ? Number(object.goldCost) : 0,
      itemCooldownSeconds: isSet(object.itemCooldownSeconds) ? Number(object.itemCooldownSeconds) : 0,
      showBuyback: isSet(object.showBuyback) ? Boolean(object.showBuyback) : false,
    };
  },

  toJSON(message: CDOTAUserMsgQuickBuyAlert): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.itemAbilityId !== undefined && (obj.itemAbilityId = Math.round(message.itemAbilityId));
    message.goldCost !== undefined && (obj.goldCost = Math.round(message.goldCost));
    message.itemCooldownSeconds !== undefined && (obj.itemCooldownSeconds = Math.round(message.itemCooldownSeconds));
    message.showBuyback !== undefined && (obj.showBuyback = message.showBuyback);
    return obj;
  },
};

function createBaseCDOTAUserMsgCourierKilledAlert(): CDOTAUserMsgCourierKilledAlert {
  return { team: 0, goldValue: 0, entityHandle: 0, timestamp: 0, lostItems: [], killerPlayerId: 0, owningPlayerId: 0 };
}

export const CDOTAUserMsgCourierKilledAlert = {
  encode(message: CDOTAUserMsgCourierKilledAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.team !== 0) {
      writer.uint32(8).uint32(message.team);
    }
    if (message.goldValue !== 0) {
      writer.uint32(16).uint32(message.goldValue);
    }
    if (message.entityHandle !== 0) {
      writer.uint32(24).uint32(message.entityHandle);
    }
    if (message.timestamp !== 0) {
      writer.uint32(32).int32(message.timestamp);
    }
    for (const v of message.lostItems) {
      CDOTAUserMsgCourierKilledAlert_LostItem.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.killerPlayerId !== 0) {
      writer.uint32(48).int32(message.killerPlayerId);
    }
    if (message.owningPlayerId !== 0) {
      writer.uint32(56).int32(message.owningPlayerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCourierKilledAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCourierKilledAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.team = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.goldValue = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.entityHandle = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.timestamp = reader.int32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.lostItems.push(CDOTAUserMsgCourierKilledAlert_LostItem.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.killerPlayerId = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.owningPlayerId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgCourierKilledAlert {
    return {
      team: isSet(object.team) ? Number(object.team) : 0,
      goldValue: isSet(object.goldValue) ? Number(object.goldValue) : 0,
      entityHandle: isSet(object.entityHandle) ? Number(object.entityHandle) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      lostItems: Array.isArray(object?.lostItems)
        ? object.lostItems.map((e: any) => CDOTAUserMsgCourierKilledAlert_LostItem.fromJSON(e))
        : [],
      killerPlayerId: isSet(object.killerPlayerId) ? Number(object.killerPlayerId) : 0,
      owningPlayerId: isSet(object.owningPlayerId) ? Number(object.owningPlayerId) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgCourierKilledAlert): unknown {
    const obj: any = {};
    message.team !== undefined && (obj.team = Math.round(message.team));
    message.goldValue !== undefined && (obj.goldValue = Math.round(message.goldValue));
    message.entityHandle !== undefined && (obj.entityHandle = Math.round(message.entityHandle));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    if (message.lostItems) {
      obj.lostItems = message.lostItems.map((e) => e ? CDOTAUserMsgCourierKilledAlert_LostItem.toJSON(e) : undefined);
    } else {
      obj.lostItems = [];
    }
    message.killerPlayerId !== undefined && (obj.killerPlayerId = Math.round(message.killerPlayerId));
    message.owningPlayerId !== undefined && (obj.owningPlayerId = Math.round(message.owningPlayerId));
    return obj;
  },
};

function createBaseCDOTAUserMsgCourierKilledAlert_LostItem(): CDOTAUserMsgCourierKilledAlert_LostItem {
  return { itemAbilityId: 0, quantity: 0 };
}

export const CDOTAUserMsgCourierKilledAlert_LostItem = {
  encode(message: CDOTAUserMsgCourierKilledAlert_LostItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemAbilityId !== 0) {
      writer.uint32(8).int32(message.itemAbilityId);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).uint32(message.quantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCourierKilledAlert_LostItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCourierKilledAlert_LostItem();
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

          message.quantity = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgCourierKilledAlert_LostItem {
    return {
      itemAbilityId: isSet(object.itemAbilityId) ? Number(object.itemAbilityId) : 0,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgCourierKilledAlert_LostItem): unknown {
    const obj: any = {};
    message.itemAbilityId !== undefined && (obj.itemAbilityId = Math.round(message.itemAbilityId));
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    return obj;
  },
};

function createBaseCDOTAUserMsgMinimapEvent(): CDOTAUserMsgMinimapEvent {
  return { eventType: 0, entityHandle: 0, x: 0, y: 0, duration: 0, targetEntityHandle: 0 };
}

export const CDOTAUserMsgMinimapEvent = {
  encode(message: CDOTAUserMsgMinimapEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventType !== 0) {
      writer.uint32(8).int32(message.eventType);
    }
    if (message.entityHandle !== 0) {
      writer.uint32(16).uint32(message.entityHandle);
    }
    if (message.x !== 0) {
      writer.uint32(24).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(32).int32(message.y);
    }
    if (message.duration !== 0) {
      writer.uint32(40).int32(message.duration);
    }
    if (message.targetEntityHandle !== 0) {
      writer.uint32(48).uint32(message.targetEntityHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMinimapEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMinimapEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventType = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.entityHandle = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.x = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.y = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.duration = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.targetEntityHandle = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgMinimapEvent {
    return {
      eventType: isSet(object.eventType) ? Number(object.eventType) : 0,
      entityHandle: isSet(object.entityHandle) ? Number(object.entityHandle) : 0,
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      targetEntityHandle: isSet(object.targetEntityHandle) ? Number(object.targetEntityHandle) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgMinimapEvent): unknown {
    const obj: any = {};
    message.eventType !== undefined && (obj.eventType = Math.round(message.eventType));
    message.entityHandle !== undefined && (obj.entityHandle = Math.round(message.entityHandle));
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.targetEntityHandle !== undefined && (obj.targetEntityHandle = Math.round(message.targetEntityHandle));
    return obj;
  },
};

function createBaseCDOTAUserMsgMapLine(): CDOTAUserMsgMapLine {
  return { playerId: 0, mapline: undefined };
}

export const CDOTAUserMsgMapLine = {
  encode(message: CDOTAUserMsgMapLine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.mapline !== undefined) {
      CDOTAMsgMapLine.encode(message.mapline, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMapLine {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMapLine();
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
          if (tag != 18) {
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

  fromJSON(object: any): CDOTAUserMsgMapLine {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      mapline: isSet(object.mapline) ? CDOTAMsgMapLine.fromJSON(object.mapline) : undefined,
    };
  },

  toJSON(message: CDOTAUserMsgMapLine): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.mapline !== undefined &&
      (obj.mapline = message.mapline ? CDOTAMsgMapLine.toJSON(message.mapline) : undefined);
    return obj;
  },
};

function createBaseCDOTAUserMsgMinimapDebugPoint(): CDOTAUserMsgMinimapDebugPoint {
  return { location: undefined, color: 0, size: 0, duration: 0, index: 0 };
}

export const CDOTAUserMsgMinimapDebugPoint = {
  encode(message: CDOTAUserMsgMinimapDebugPoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== undefined) {
      CMsgVector.encode(message.location, writer.uint32(10).fork()).ldelim();
    }
    if (message.color !== 0) {
      writer.uint32(16).uint32(message.color);
    }
    if (message.size !== 0) {
      writer.uint32(24).int32(message.size);
    }
    if (message.duration !== 0) {
      writer.uint32(37).float(message.duration);
    }
    if (message.index !== 0) {
      writer.uint32(40).int32(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMinimapDebugPoint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMinimapDebugPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.location = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.color = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.size = reader.int32();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.duration = reader.float();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.index = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgMinimapDebugPoint {
    return {
      location: isSet(object.location) ? CMsgVector.fromJSON(object.location) : undefined,
      color: isSet(object.color) ? Number(object.color) : 0,
      size: isSet(object.size) ? Number(object.size) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      index: isSet(object.index) ? Number(object.index) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgMinimapDebugPoint): unknown {
    const obj: any = {};
    message.location !== undefined &&
      (obj.location = message.location ? CMsgVector.toJSON(message.location) : undefined);
    message.color !== undefined && (obj.color = Math.round(message.color));
    message.size !== undefined && (obj.size = Math.round(message.size));
    message.duration !== undefined && (obj.duration = message.duration);
    message.index !== undefined && (obj.index = Math.round(message.index));
    return obj;
  },
};

function createBaseCDOTAUserMsgCreateLinearProjectile(): CDOTAUserMsgCreateLinearProjectile {
  return {
    origin: undefined,
    velocity: undefined,
    entindex: 0,
    particleIndex: "0",
    handle: 0,
    acceleration: undefined,
    maxSpeed: 0,
    fowRadius: 0,
    stickyFowReveal: false,
    distance: 0,
    colorgemcolor: 0,
    particleCpData: [],
  };
}

export const CDOTAUserMsgCreateLinearProjectile = {
  encode(message: CDOTAUserMsgCreateLinearProjectile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.velocity !== undefined) {
      CMsgVector2D.encode(message.velocity, writer.uint32(18).fork()).ldelim();
    }
    if (message.entindex !== 0) {
      writer.uint32(32).int32(message.entindex);
    }
    if (message.particleIndex !== "0") {
      writer.uint32(40).uint64(message.particleIndex);
    }
    if (message.handle !== 0) {
      writer.uint32(48).int32(message.handle);
    }
    if (message.acceleration !== undefined) {
      CMsgVector2D.encode(message.acceleration, writer.uint32(58).fork()).ldelim();
    }
    if (message.maxSpeed !== 0) {
      writer.uint32(69).float(message.maxSpeed);
    }
    if (message.fowRadius !== 0) {
      writer.uint32(77).float(message.fowRadius);
    }
    if (message.stickyFowReveal === true) {
      writer.uint32(80).bool(message.stickyFowReveal);
    }
    if (message.distance !== 0) {
      writer.uint32(93).float(message.distance);
    }
    if (message.colorgemcolor !== 0) {
      writer.uint32(101).fixed32(message.colorgemcolor);
    }
    for (const v of message.particleCpData) {
      CDOTAUserMsgProjectileParticleCPData.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCreateLinearProjectile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCreateLinearProjectile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.origin = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.velocity = CMsgVector2D.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.entindex = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.particleIndex = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.handle = reader.int32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.acceleration = CMsgVector2D.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.maxSpeed = reader.float();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.fowRadius = reader.float();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.stickyFowReveal = reader.bool();
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.distance = reader.float();
          continue;
        case 12:
          if (tag != 101) {
            break;
          }

          message.colorgemcolor = reader.fixed32();
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.particleCpData.push(CDOTAUserMsgProjectileParticleCPData.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgCreateLinearProjectile {
    return {
      origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
      velocity: isSet(object.velocity) ? CMsgVector2D.fromJSON(object.velocity) : undefined,
      entindex: isSet(object.entindex) ? Number(object.entindex) : 0,
      particleIndex: isSet(object.particleIndex) ? String(object.particleIndex) : "0",
      handle: isSet(object.handle) ? Number(object.handle) : 0,
      acceleration: isSet(object.acceleration) ? CMsgVector2D.fromJSON(object.acceleration) : undefined,
      maxSpeed: isSet(object.maxSpeed) ? Number(object.maxSpeed) : 0,
      fowRadius: isSet(object.fowRadius) ? Number(object.fowRadius) : 0,
      stickyFowReveal: isSet(object.stickyFowReveal) ? Boolean(object.stickyFowReveal) : false,
      distance: isSet(object.distance) ? Number(object.distance) : 0,
      colorgemcolor: isSet(object.colorgemcolor) ? Number(object.colorgemcolor) : 0,
      particleCpData: Array.isArray(object?.particleCpData)
        ? object.particleCpData.map((e: any) => CDOTAUserMsgProjectileParticleCPData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDOTAUserMsgCreateLinearProjectile): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? CMsgVector.toJSON(message.origin) : undefined);
    message.velocity !== undefined &&
      (obj.velocity = message.velocity ? CMsgVector2D.toJSON(message.velocity) : undefined);
    message.entindex !== undefined && (obj.entindex = Math.round(message.entindex));
    message.particleIndex !== undefined && (obj.particleIndex = message.particleIndex);
    message.handle !== undefined && (obj.handle = Math.round(message.handle));
    message.acceleration !== undefined &&
      (obj.acceleration = message.acceleration ? CMsgVector2D.toJSON(message.acceleration) : undefined);
    message.maxSpeed !== undefined && (obj.maxSpeed = message.maxSpeed);
    message.fowRadius !== undefined && (obj.fowRadius = message.fowRadius);
    message.stickyFowReveal !== undefined && (obj.stickyFowReveal = message.stickyFowReveal);
    message.distance !== undefined && (obj.distance = message.distance);
    message.colorgemcolor !== undefined && (obj.colorgemcolor = Math.round(message.colorgemcolor));
    if (message.particleCpData) {
      obj.particleCpData = message.particleCpData.map((e) =>
        e ? CDOTAUserMsgProjectileParticleCPData.toJSON(e) : undefined
      );
    } else {
      obj.particleCpData = [];
    }
    return obj;
  },
};

function createBaseCDOTAUserMsgDestroyLinearProjectile(): CDOTAUserMsgDestroyLinearProjectile {
  return { handle: 0 };
}

export const CDOTAUserMsgDestroyLinearProjectile = {
  encode(message: CDOTAUserMsgDestroyLinearProjectile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.handle !== 0) {
      writer.uint32(8).int32(message.handle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgDestroyLinearProjectile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgDestroyLinearProjectile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.handle = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgDestroyLinearProjectile {
    return { handle: isSet(object.handle) ? Number(object.handle) : 0 };
  },

  toJSON(message: CDOTAUserMsgDestroyLinearProjectile): unknown {
    const obj: any = {};
    message.handle !== undefined && (obj.handle = Math.round(message.handle));
    return obj;
  },
};

function createBaseCDOTAUserMsgDodgeTrackingProjectiles(): CDOTAUserMsgDodgeTrackingProjectiles {
  return { entindex: 0, attacksOnly: false };
}

export const CDOTAUserMsgDodgeTrackingProjectiles = {
  encode(message: CDOTAUserMsgDodgeTrackingProjectiles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entindex !== 0) {
      writer.uint32(8).int32(message.entindex);
    }
    if (message.attacksOnly === true) {
      writer.uint32(16).bool(message.attacksOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgDodgeTrackingProjectiles {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgDodgeTrackingProjectiles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entindex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.attacksOnly = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgDodgeTrackingProjectiles {
    return {
      entindex: isSet(object.entindex) ? Number(object.entindex) : 0,
      attacksOnly: isSet(object.attacksOnly) ? Boolean(object.attacksOnly) : false,
    };
  },

  toJSON(message: CDOTAUserMsgDodgeTrackingProjectiles): unknown {
    const obj: any = {};
    message.entindex !== undefined && (obj.entindex = Math.round(message.entindex));
    message.attacksOnly !== undefined && (obj.attacksOnly = message.attacksOnly);
    return obj;
  },
};

function createBaseCDOTAUserMsgSpectatorPlayerClick(): CDOTAUserMsgSpectatorPlayerClick {
  return { entindex: 0, orderType: 0, targetIndex: 0 };
}

export const CDOTAUserMsgSpectatorPlayerClick = {
  encode(message: CDOTAUserMsgSpectatorPlayerClick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entindex !== 0) {
      writer.uint32(8).int32(message.entindex);
    }
    if (message.orderType !== 0) {
      writer.uint32(16).int32(message.orderType);
    }
    if (message.targetIndex !== 0) {
      writer.uint32(24).int32(message.targetIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSpectatorPlayerClick {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSpectatorPlayerClick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entindex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.orderType = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.targetIndex = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgSpectatorPlayerClick {
    return {
      entindex: isSet(object.entindex) ? Number(object.entindex) : 0,
      orderType: isSet(object.orderType) ? Number(object.orderType) : 0,
      targetIndex: isSet(object.targetIndex) ? Number(object.targetIndex) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgSpectatorPlayerClick): unknown {
    const obj: any = {};
    message.entindex !== undefined && (obj.entindex = Math.round(message.entindex));
    message.orderType !== undefined && (obj.orderType = Math.round(message.orderType));
    message.targetIndex !== undefined && (obj.targetIndex = Math.round(message.targetIndex));
    return obj;
  },
};

function createBaseCDOTAUserMsgSpectatorPlayerUnitOrders(): CDOTAUserMsgSpectatorPlayerUnitOrders {
  return {
    entindex: 0,
    orderType: 0,
    units: [],
    targetIndex: 0,
    abilityId: 0,
    position: undefined,
    queue: false,
    sequenceNumber: 0,
    flags: 0,
  };
}

export const CDOTAUserMsgSpectatorPlayerUnitOrders = {
  encode(message: CDOTAUserMsgSpectatorPlayerUnitOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entindex !== 0) {
      writer.uint32(8).int32(message.entindex);
    }
    if (message.orderType !== 0) {
      writer.uint32(16).int32(message.orderType);
    }
    writer.uint32(26).fork();
    for (const v of message.units) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.targetIndex !== 0) {
      writer.uint32(32).int32(message.targetIndex);
    }
    if (message.abilityId !== 0) {
      writer.uint32(40).int32(message.abilityId);
    }
    if (message.position !== undefined) {
      CMsgVector.encode(message.position, writer.uint32(50).fork()).ldelim();
    }
    if (message.queue === true) {
      writer.uint32(56).bool(message.queue);
    }
    if (message.sequenceNumber !== 0) {
      writer.uint32(64).int32(message.sequenceNumber);
    }
    if (message.flags !== 0) {
      writer.uint32(72).uint32(message.flags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSpectatorPlayerUnitOrders {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSpectatorPlayerUnitOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entindex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.orderType = reader.int32();
          continue;
        case 3:
          if (tag == 24) {
            message.units.push(reader.int32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.units.push(reader.int32());
            }

            continue;
          }

          break;
        case 4:
          if (tag != 32) {
            break;
          }

          message.targetIndex = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.abilityId = reader.int32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.position = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.queue = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.sequenceNumber = reader.int32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.flags = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgSpectatorPlayerUnitOrders {
    return {
      entindex: isSet(object.entindex) ? Number(object.entindex) : 0,
      orderType: isSet(object.orderType) ? Number(object.orderType) : 0,
      units: Array.isArray(object?.units) ? object.units.map((e: any) => Number(e)) : [],
      targetIndex: isSet(object.targetIndex) ? Number(object.targetIndex) : 0,
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      position: isSet(object.position) ? CMsgVector.fromJSON(object.position) : undefined,
      queue: isSet(object.queue) ? Boolean(object.queue) : false,
      sequenceNumber: isSet(object.sequenceNumber) ? Number(object.sequenceNumber) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgSpectatorPlayerUnitOrders): unknown {
    const obj: any = {};
    message.entindex !== undefined && (obj.entindex = Math.round(message.entindex));
    message.orderType !== undefined && (obj.orderType = Math.round(message.orderType));
    if (message.units) {
      obj.units = message.units.map((e) => Math.round(e));
    } else {
      obj.units = [];
    }
    message.targetIndex !== undefined && (obj.targetIndex = Math.round(message.targetIndex));
    message.abilityId !== undefined && (obj.abilityId = Math.round(message.abilityId));
    message.position !== undefined &&
      (obj.position = message.position ? CMsgVector.toJSON(message.position) : undefined);
    message.queue !== undefined && (obj.queue = message.queue);
    message.sequenceNumber !== undefined && (obj.sequenceNumber = Math.round(message.sequenceNumber));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    return obj;
  },
};

function createBaseCDOTAUserMsgNevermoreRequiem(): CDOTAUserMsgNevermoreRequiem {
  return { entityHandle: 0, lines: 0, origin: undefined, reverse: false };
}

export const CDOTAUserMsgNevermoreRequiem = {
  encode(message: CDOTAUserMsgNevermoreRequiem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityHandle !== 0) {
      writer.uint32(8).uint32(message.entityHandle);
    }
    if (message.lines !== 0) {
      writer.uint32(16).int32(message.lines);
    }
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(26).fork()).ldelim();
    }
    if (message.reverse === true) {
      writer.uint32(32).bool(message.reverse);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgNevermoreRequiem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgNevermoreRequiem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entityHandle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.lines = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.origin = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.reverse = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgNevermoreRequiem {
    return {
      entityHandle: isSet(object.entityHandle) ? Number(object.entityHandle) : 0,
      lines: isSet(object.lines) ? Number(object.lines) : 0,
      origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
      reverse: isSet(object.reverse) ? Boolean(object.reverse) : false,
    };
  },

  toJSON(message: CDOTAUserMsgNevermoreRequiem): unknown {
    const obj: any = {};
    message.entityHandle !== undefined && (obj.entityHandle = Math.round(message.entityHandle));
    message.lines !== undefined && (obj.lines = Math.round(message.lines));
    message.origin !== undefined && (obj.origin = message.origin ? CMsgVector.toJSON(message.origin) : undefined);
    message.reverse !== undefined && (obj.reverse = message.reverse);
    return obj;
  },
};

function createBaseCDOTAUserMsgInvalidCommand(): CDOTAUserMsgInvalidCommand {
  return { message: "", sequenceNumber: 0 };
}

export const CDOTAUserMsgInvalidCommand = {
  encode(message: CDOTAUserMsgInvalidCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.sequenceNumber !== 0) {
      writer.uint32(16).int32(message.sequenceNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgInvalidCommand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgInvalidCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.message = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.sequenceNumber = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgInvalidCommand {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      sequenceNumber: isSet(object.sequenceNumber) ? Number(object.sequenceNumber) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgInvalidCommand): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.sequenceNumber !== undefined && (obj.sequenceNumber = Math.round(message.sequenceNumber));
    return obj;
  },
};

function createBaseCDOTAUserMsgHudError(): CDOTAUserMsgHudError {
  return { orderId: 0, sequenceNumber: 0 };
}

export const CDOTAUserMsgHudError = {
  encode(message: CDOTAUserMsgHudError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== 0) {
      writer.uint32(8).int32(message.orderId);
    }
    if (message.sequenceNumber !== 0) {
      writer.uint32(16).int32(message.sequenceNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgHudError {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgHudError();
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

          message.sequenceNumber = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgHudError {
    return {
      orderId: isSet(object.orderId) ? Number(object.orderId) : 0,
      sequenceNumber: isSet(object.sequenceNumber) ? Number(object.sequenceNumber) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgHudError): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = Math.round(message.orderId));
    message.sequenceNumber !== undefined && (obj.sequenceNumber = Math.round(message.sequenceNumber));
    return obj;
  },
};

function createBaseCDOTAUserMsgSharedCooldown(): CDOTAUserMsgSharedCooldown {
  return { entindex: 0, name: "", cooldown: 0, nameIndex: 0 };
}

export const CDOTAUserMsgSharedCooldown = {
  encode(message: CDOTAUserMsgSharedCooldown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entindex !== 0) {
      writer.uint32(8).int32(message.entindex);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.cooldown !== 0) {
      writer.uint32(29).float(message.cooldown);
    }
    if (message.nameIndex !== 0) {
      writer.uint32(32).int32(message.nameIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSharedCooldown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSharedCooldown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entindex = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.cooldown = reader.float();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.nameIndex = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgSharedCooldown {
    return {
      entindex: isSet(object.entindex) ? Number(object.entindex) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      cooldown: isSet(object.cooldown) ? Number(object.cooldown) : 0,
      nameIndex: isSet(object.nameIndex) ? Number(object.nameIndex) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgSharedCooldown): unknown {
    const obj: any = {};
    message.entindex !== undefined && (obj.entindex = Math.round(message.entindex));
    message.name !== undefined && (obj.name = message.name);
    message.cooldown !== undefined && (obj.cooldown = message.cooldown);
    message.nameIndex !== undefined && (obj.nameIndex = Math.round(message.nameIndex));
    return obj;
  },
};

function createBaseCDOTAUserMsgSetNextAutobuyItem(): CDOTAUserMsgSetNextAutobuyItem {
  return { name: "" };
}

export const CDOTAUserMsgSetNextAutobuyItem = {
  encode(message: CDOTAUserMsgSetNextAutobuyItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSetNextAutobuyItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSetNextAutobuyItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgSetNextAutobuyItem {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: CDOTAUserMsgSetNextAutobuyItem): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
};

function createBaseCDOTAUserMsgHalloweenDrops(): CDOTAUserMsgHalloweenDrops {
  return { itemDefs: [], playerIds: [], prizeList: 0 };
}

export const CDOTAUserMsgHalloweenDrops = {
  encode(message: CDOTAUserMsgHalloweenDrops, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.itemDefs) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.playerIds) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.prizeList !== 0) {
      writer.uint32(24).uint32(message.prizeList);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgHalloweenDrops {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgHalloweenDrops();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.itemDefs.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.itemDefs.push(reader.uint32());
            }

            continue;
          }

          break;
        case 2:
          if (tag == 16) {
            message.playerIds.push(reader.int32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.playerIds.push(reader.int32());
            }

            continue;
          }

          break;
        case 3:
          if (tag != 24) {
            break;
          }

          message.prizeList = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgHalloweenDrops {
    return {
      itemDefs: Array.isArray(object?.itemDefs) ? object.itemDefs.map((e: any) => Number(e)) : [],
      playerIds: Array.isArray(object?.playerIds) ? object.playerIds.map((e: any) => Number(e)) : [],
      prizeList: isSet(object.prizeList) ? Number(object.prizeList) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgHalloweenDrops): unknown {
    const obj: any = {};
    if (message.itemDefs) {
      obj.itemDefs = message.itemDefs.map((e) => Math.round(e));
    } else {
      obj.itemDefs = [];
    }
    if (message.playerIds) {
      obj.playerIds = message.playerIds.map((e) => Math.round(e));
    } else {
      obj.playerIds = [];
    }
    message.prizeList !== undefined && (obj.prizeList = Math.round(message.prizeList));
    return obj;
  },
};

function createBaseCDOTAUserMsgPredictionResult(): CDOTAUserMsgPredictionResult {
  return { accountId: 0, matchId: "0", correct: false, predictions: [] };
}

export const CDOTAUserMsgPredictionResult = {
  encode(message: CDOTAUserMsgPredictionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.matchId !== "0") {
      writer.uint32(16).uint64(message.matchId);
    }
    if (message.correct === true) {
      writer.uint32(24).bool(message.correct);
    }
    for (const v of message.predictions) {
      CDOTAUserMsgPredictionResult_Prediction.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgPredictionResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgPredictionResult();
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

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.correct = reader.bool();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.predictions.push(CDOTAUserMsgPredictionResult_Prediction.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgPredictionResult {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      correct: isSet(object.correct) ? Boolean(object.correct) : false,
      predictions: Array.isArray(object?.predictions)
        ? object.predictions.map((e: any) => CDOTAUserMsgPredictionResult_Prediction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDOTAUserMsgPredictionResult): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.correct !== undefined && (obj.correct = message.correct);
    if (message.predictions) {
      obj.predictions = message.predictions.map((e) =>
        e ? CDOTAUserMsgPredictionResult_Prediction.toJSON(e) : undefined
      );
    } else {
      obj.predictions = [];
    }
    return obj;
  },
};

function createBaseCDOTAUserMsgPredictionResult_Prediction(): CDOTAUserMsgPredictionResult_Prediction {
  return { itemDef: 0, numCorrect: 0, numFails: 0, result: 1, grantedItemDefs: [] };
}

export const CDOTAUserMsgPredictionResult_Prediction = {
  encode(message: CDOTAUserMsgPredictionResult_Prediction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemDef !== 0) {
      writer.uint32(8).uint32(message.itemDef);
    }
    if (message.numCorrect !== 0) {
      writer.uint32(16).uint32(message.numCorrect);
    }
    if (message.numFails !== 0) {
      writer.uint32(24).uint32(message.numFails);
    }
    if (message.result !== 1) {
      writer.uint32(32).int32(message.result);
    }
    writer.uint32(50).fork();
    for (const v of message.grantedItemDefs) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgPredictionResult_Prediction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgPredictionResult_Prediction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemDef = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.numCorrect = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.numFails = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 6:
          if (tag == 48) {
            message.grantedItemDefs.push(reader.uint32());
            continue;
          }

          if (tag == 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.grantedItemDefs.push(reader.uint32());
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

  fromJSON(object: any): CDOTAUserMsgPredictionResult_Prediction {
    return {
      itemDef: isSet(object.itemDef) ? Number(object.itemDef) : 0,
      numCorrect: isSet(object.numCorrect) ? Number(object.numCorrect) : 0,
      numFails: isSet(object.numFails) ? Number(object.numFails) : 0,
      result: isSet(object.result) ? cDOTAUserMsgPredictionResult_Prediction_EResultFromJSON(object.result) : 1,
      grantedItemDefs: Array.isArray(object?.grantedItemDefs) ? object.grantedItemDefs.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CDOTAUserMsgPredictionResult_Prediction): unknown {
    const obj: any = {};
    message.itemDef !== undefined && (obj.itemDef = Math.round(message.itemDef));
    message.numCorrect !== undefined && (obj.numCorrect = Math.round(message.numCorrect));
    message.numFails !== undefined && (obj.numFails = Math.round(message.numFails));
    message.result !== undefined &&
      (obj.result = cDOTAUserMsgPredictionResult_Prediction_EResultToJSON(message.result));
    if (message.grantedItemDefs) {
      obj.grantedItemDefs = message.grantedItemDefs.map((e) => Math.round(e));
    } else {
      obj.grantedItemDefs = [];
    }
    return obj;
  },
};

function createBaseCDOTAResponseQuerySerialized(): CDOTAResponseQuerySerialized {
  return { facts: [] };
}

export const CDOTAResponseQuerySerialized = {
  encode(message: CDOTAResponseQuerySerialized, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.facts) {
      CDOTAResponseQuerySerialized_Fact.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAResponseQuerySerialized {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAResponseQuerySerialized();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.facts.push(CDOTAResponseQuerySerialized_Fact.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAResponseQuerySerialized {
    return {
      facts: Array.isArray(object?.facts)
        ? object.facts.map((e: any) => CDOTAResponseQuerySerialized_Fact.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDOTAResponseQuerySerialized): unknown {
    const obj: any = {};
    if (message.facts) {
      obj.facts = message.facts.map((e) => e ? CDOTAResponseQuerySerialized_Fact.toJSON(e) : undefined);
    } else {
      obj.facts = [];
    }
    return obj;
  },
};

function createBaseCDOTAResponseQuerySerialized_Fact(): CDOTAResponseQuerySerialized_Fact {
  return { key: 0, valtype: 1, valNumeric: 0, valString: "", valStringtableIndex: 0, valIntNumeric: 0 };
}

export const CDOTAResponseQuerySerialized_Fact = {
  encode(message: CDOTAResponseQuerySerialized_Fact, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.valtype !== 1) {
      writer.uint32(16).int32(message.valtype);
    }
    if (message.valNumeric !== 0) {
      writer.uint32(29).float(message.valNumeric);
    }
    if (message.valString !== "") {
      writer.uint32(34).string(message.valString);
    }
    if (message.valStringtableIndex !== 0) {
      writer.uint32(40).int32(message.valStringtableIndex);
    }
    if (message.valIntNumeric !== 0) {
      writer.uint32(48).sint32(message.valIntNumeric);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAResponseQuerySerialized_Fact {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAResponseQuerySerialized_Fact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.valtype = reader.int32() as any;
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.valNumeric = reader.float();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.valString = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.valStringtableIndex = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.valIntNumeric = reader.sint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAResponseQuerySerialized_Fact {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      valtype: isSet(object.valtype) ? cDOTAResponseQuerySerialized_Fact_ValueTypeFromJSON(object.valtype) : 1,
      valNumeric: isSet(object.valNumeric) ? Number(object.valNumeric) : 0,
      valString: isSet(object.valString) ? String(object.valString) : "",
      valStringtableIndex: isSet(object.valStringtableIndex) ? Number(object.valStringtableIndex) : 0,
      valIntNumeric: isSet(object.valIntNumeric) ? Number(object.valIntNumeric) : 0,
    };
  },

  toJSON(message: CDOTAResponseQuerySerialized_Fact): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.valtype !== undefined && (obj.valtype = cDOTAResponseQuerySerialized_Fact_ValueTypeToJSON(message.valtype));
    message.valNumeric !== undefined && (obj.valNumeric = message.valNumeric);
    message.valString !== undefined && (obj.valString = message.valString);
    message.valStringtableIndex !== undefined && (obj.valStringtableIndex = Math.round(message.valStringtableIndex));
    message.valIntNumeric !== undefined && (obj.valIntNumeric = Math.round(message.valIntNumeric));
    return obj;
  },
};

function createBaseCDOTASpeechMatchOnClient(): CDOTASpeechMatchOnClient {
  return { speechConcept: 0, recipientType: 0, responsequery: undefined, randomseed: 0 };
}

export const CDOTASpeechMatchOnClient = {
  encode(message: CDOTASpeechMatchOnClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.speechConcept !== 0) {
      writer.uint32(8).int32(message.speechConcept);
    }
    if (message.recipientType !== 0) {
      writer.uint32(16).int32(message.recipientType);
    }
    if (message.responsequery !== undefined) {
      CDOTAResponseQuerySerialized.encode(message.responsequery, writer.uint32(26).fork()).ldelim();
    }
    if (message.randomseed !== 0) {
      writer.uint32(37).sfixed32(message.randomseed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTASpeechMatchOnClient {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTASpeechMatchOnClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.speechConcept = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.recipientType = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.responsequery = CDOTAResponseQuerySerialized.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.randomseed = reader.sfixed32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTASpeechMatchOnClient {
    return {
      speechConcept: isSet(object.speechConcept) ? Number(object.speechConcept) : 0,
      recipientType: isSet(object.recipientType) ? Number(object.recipientType) : 0,
      responsequery: isSet(object.responsequery)
        ? CDOTAResponseQuerySerialized.fromJSON(object.responsequery)
        : undefined,
      randomseed: isSet(object.randomseed) ? Number(object.randomseed) : 0,
    };
  },

  toJSON(message: CDOTASpeechMatchOnClient): unknown {
    const obj: any = {};
    message.speechConcept !== undefined && (obj.speechConcept = Math.round(message.speechConcept));
    message.recipientType !== undefined && (obj.recipientType = Math.round(message.recipientType));
    message.responsequery !== undefined && (obj.responsequery = message.responsequery
      ? CDOTAResponseQuerySerialized.toJSON(message.responsequery)
      : undefined);
    message.randomseed !== undefined && (obj.randomseed = Math.round(message.randomseed));
    return obj;
  },
};

function createBaseCDOTAUserMsgUnitEvent(): CDOTAUserMsgUnitEvent {
  return {
    msgType: 0,
    entityIndex: 0,
    speech: undefined,
    speechMute: undefined,
    addGesture: undefined,
    removeGesture: undefined,
    bloodImpact: undefined,
    fadeGesture: undefined,
    speechMatchOnClient: undefined,
  };
}

export const CDOTAUserMsgUnitEvent = {
  encode(message: CDOTAUserMsgUnitEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgType !== 0) {
      writer.uint32(8).int32(message.msgType);
    }
    if (message.entityIndex !== 0) {
      writer.uint32(16).int32(message.entityIndex);
    }
    if (message.speech !== undefined) {
      CDOTAUserMsgUnitEvent_Speech.encode(message.speech, writer.uint32(26).fork()).ldelim();
    }
    if (message.speechMute !== undefined) {
      CDOTAUserMsgUnitEvent_SpeechMute.encode(message.speechMute, writer.uint32(34).fork()).ldelim();
    }
    if (message.addGesture !== undefined) {
      CDOTAUserMsgUnitEvent_AddGesture.encode(message.addGesture, writer.uint32(42).fork()).ldelim();
    }
    if (message.removeGesture !== undefined) {
      CDOTAUserMsgUnitEvent_RemoveGesture.encode(message.removeGesture, writer.uint32(50).fork()).ldelim();
    }
    if (message.bloodImpact !== undefined) {
      CDOTAUserMsgUnitEvent_BloodImpact.encode(message.bloodImpact, writer.uint32(58).fork()).ldelim();
    }
    if (message.fadeGesture !== undefined) {
      CDOTAUserMsgUnitEvent_FadeGesture.encode(message.fadeGesture, writer.uint32(66).fork()).ldelim();
    }
    if (message.speechMatchOnClient !== undefined) {
      CDOTASpeechMatchOnClient.encode(message.speechMatchOnClient, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgUnitEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgUnitEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.msgType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.entityIndex = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.speech = CDOTAUserMsgUnitEvent_Speech.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.speechMute = CDOTAUserMsgUnitEvent_SpeechMute.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.addGesture = CDOTAUserMsgUnitEvent_AddGesture.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.removeGesture = CDOTAUserMsgUnitEvent_RemoveGesture.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.bloodImpact = CDOTAUserMsgUnitEvent_BloodImpact.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.fadeGesture = CDOTAUserMsgUnitEvent_FadeGesture.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.speechMatchOnClient = CDOTASpeechMatchOnClient.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgUnitEvent {
    return {
      msgType: isSet(object.msgType) ? eDotaEntityMessagesFromJSON(object.msgType) : 0,
      entityIndex: isSet(object.entityIndex) ? Number(object.entityIndex) : 0,
      speech: isSet(object.speech) ? CDOTAUserMsgUnitEvent_Speech.fromJSON(object.speech) : undefined,
      speechMute: isSet(object.speechMute) ? CDOTAUserMsgUnitEvent_SpeechMute.fromJSON(object.speechMute) : undefined,
      addGesture: isSet(object.addGesture) ? CDOTAUserMsgUnitEvent_AddGesture.fromJSON(object.addGesture) : undefined,
      removeGesture: isSet(object.removeGesture)
        ? CDOTAUserMsgUnitEvent_RemoveGesture.fromJSON(object.removeGesture)
        : undefined,
      bloodImpact: isSet(object.bloodImpact)
        ? CDOTAUserMsgUnitEvent_BloodImpact.fromJSON(object.bloodImpact)
        : undefined,
      fadeGesture: isSet(object.fadeGesture)
        ? CDOTAUserMsgUnitEvent_FadeGesture.fromJSON(object.fadeGesture)
        : undefined,
      speechMatchOnClient: isSet(object.speechMatchOnClient)
        ? CDOTASpeechMatchOnClient.fromJSON(object.speechMatchOnClient)
        : undefined,
    };
  },

  toJSON(message: CDOTAUserMsgUnitEvent): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = eDotaEntityMessagesToJSON(message.msgType));
    message.entityIndex !== undefined && (obj.entityIndex = Math.round(message.entityIndex));
    message.speech !== undefined &&
      (obj.speech = message.speech ? CDOTAUserMsgUnitEvent_Speech.toJSON(message.speech) : undefined);
    message.speechMute !== undefined &&
      (obj.speechMute = message.speechMute ? CDOTAUserMsgUnitEvent_SpeechMute.toJSON(message.speechMute) : undefined);
    message.addGesture !== undefined &&
      (obj.addGesture = message.addGesture ? CDOTAUserMsgUnitEvent_AddGesture.toJSON(message.addGesture) : undefined);
    message.removeGesture !== undefined && (obj.removeGesture = message.removeGesture
      ? CDOTAUserMsgUnitEvent_RemoveGesture.toJSON(message.removeGesture)
      : undefined);
    message.bloodImpact !== undefined &&
      (obj.bloodImpact = message.bloodImpact
        ? CDOTAUserMsgUnitEvent_BloodImpact.toJSON(message.bloodImpact)
        : undefined);
    message.fadeGesture !== undefined &&
      (obj.fadeGesture = message.fadeGesture
        ? CDOTAUserMsgUnitEvent_FadeGesture.toJSON(message.fadeGesture)
        : undefined);
    message.speechMatchOnClient !== undefined && (obj.speechMatchOnClient = message.speechMatchOnClient
      ? CDOTASpeechMatchOnClient.toJSON(message.speechMatchOnClient)
      : undefined);
    return obj;
  },
};

function createBaseCDOTAUserMsgUnitEvent_Interval(): CDOTAUserMsgUnitEvent_Interval {
  return { start: 0, range: 0 };
}

export const CDOTAUserMsgUnitEvent_Interval = {
  encode(message: CDOTAUserMsgUnitEvent_Interval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== 0) {
      writer.uint32(13).float(message.start);
    }
    if (message.range !== 0) {
      writer.uint32(21).float(message.range);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgUnitEvent_Interval {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgUnitEvent_Interval();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.start = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.range = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgUnitEvent_Interval {
    return {
      start: isSet(object.start) ? Number(object.start) : 0,
      range: isSet(object.range) ? Number(object.range) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgUnitEvent_Interval): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = message.start);
    message.range !== undefined && (obj.range = message.range);
    return obj;
  },
};

function createBaseCDOTAUserMsgUnitEvent_Speech(): CDOTAUserMsgUnitEvent_Speech {
  return { speechConcept: 0, response: "", recipientType: 0, muteable: false, predelay: undefined, flags: 0 };
}

export const CDOTAUserMsgUnitEvent_Speech = {
  encode(message: CDOTAUserMsgUnitEvent_Speech, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.speechConcept !== 0) {
      writer.uint32(8).int32(message.speechConcept);
    }
    if (message.response !== "") {
      writer.uint32(18).string(message.response);
    }
    if (message.recipientType !== 0) {
      writer.uint32(24).int32(message.recipientType);
    }
    if (message.muteable === true) {
      writer.uint32(40).bool(message.muteable);
    }
    if (message.predelay !== undefined) {
      CDOTAUserMsgUnitEvent_Interval.encode(message.predelay, writer.uint32(50).fork()).ldelim();
    }
    if (message.flags !== 0) {
      writer.uint32(56).uint32(message.flags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgUnitEvent_Speech {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgUnitEvent_Speech();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.speechConcept = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.response = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.recipientType = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.muteable = reader.bool();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.predelay = CDOTAUserMsgUnitEvent_Interval.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.flags = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgUnitEvent_Speech {
    return {
      speechConcept: isSet(object.speechConcept) ? Number(object.speechConcept) : 0,
      response: isSet(object.response) ? String(object.response) : "",
      recipientType: isSet(object.recipientType) ? Number(object.recipientType) : 0,
      muteable: isSet(object.muteable) ? Boolean(object.muteable) : false,
      predelay: isSet(object.predelay) ? CDOTAUserMsgUnitEvent_Interval.fromJSON(object.predelay) : undefined,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgUnitEvent_Speech): unknown {
    const obj: any = {};
    message.speechConcept !== undefined && (obj.speechConcept = Math.round(message.speechConcept));
    message.response !== undefined && (obj.response = message.response);
    message.recipientType !== undefined && (obj.recipientType = Math.round(message.recipientType));
    message.muteable !== undefined && (obj.muteable = message.muteable);
    message.predelay !== undefined &&
      (obj.predelay = message.predelay ? CDOTAUserMsgUnitEvent_Interval.toJSON(message.predelay) : undefined);
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    return obj;
  },
};

function createBaseCDOTAUserMsgUnitEvent_SpeechMute(): CDOTAUserMsgUnitEvent_SpeechMute {
  return { delay: 0 };
}

export const CDOTAUserMsgUnitEvent_SpeechMute = {
  encode(message: CDOTAUserMsgUnitEvent_SpeechMute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delay !== 0) {
      writer.uint32(13).float(message.delay);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgUnitEvent_SpeechMute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgUnitEvent_SpeechMute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.delay = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgUnitEvent_SpeechMute {
    return { delay: isSet(object.delay) ? Number(object.delay) : 0 };
  },

  toJSON(message: CDOTAUserMsgUnitEvent_SpeechMute): unknown {
    const obj: any = {};
    message.delay !== undefined && (obj.delay = message.delay);
    return obj;
  },
};

function createBaseCDOTAUserMsgUnitEvent_AddGesture(): CDOTAUserMsgUnitEvent_AddGesture {
  return { activity: 0, slot: 0, fadeIn: 0, fadeOut: 0, playbackRate: 0, sequenceVariant: 0 };
}

export const CDOTAUserMsgUnitEvent_AddGesture = {
  encode(message: CDOTAUserMsgUnitEvent_AddGesture, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activity !== 0) {
      writer.uint32(8).int32(message.activity);
    }
    if (message.slot !== 0) {
      writer.uint32(16).int32(message.slot);
    }
    if (message.fadeIn !== 0) {
      writer.uint32(29).float(message.fadeIn);
    }
    if (message.fadeOut !== 0) {
      writer.uint32(37).float(message.fadeOut);
    }
    if (message.playbackRate !== 0) {
      writer.uint32(45).float(message.playbackRate);
    }
    if (message.sequenceVariant !== 0) {
      writer.uint32(48).int32(message.sequenceVariant);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgUnitEvent_AddGesture {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgUnitEvent_AddGesture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.activity = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.slot = reader.int32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.fadeIn = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.fadeOut = reader.float();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.playbackRate = reader.float();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.sequenceVariant = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgUnitEvent_AddGesture {
    return {
      activity: isSet(object.activity) ? Number(object.activity) : 0,
      slot: isSet(object.slot) ? Number(object.slot) : 0,
      fadeIn: isSet(object.fadeIn) ? Number(object.fadeIn) : 0,
      fadeOut: isSet(object.fadeOut) ? Number(object.fadeOut) : 0,
      playbackRate: isSet(object.playbackRate) ? Number(object.playbackRate) : 0,
      sequenceVariant: isSet(object.sequenceVariant) ? Number(object.sequenceVariant) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgUnitEvent_AddGesture): unknown {
    const obj: any = {};
    message.activity !== undefined && (obj.activity = Math.round(message.activity));
    message.slot !== undefined && (obj.slot = Math.round(message.slot));
    message.fadeIn !== undefined && (obj.fadeIn = message.fadeIn);
    message.fadeOut !== undefined && (obj.fadeOut = message.fadeOut);
    message.playbackRate !== undefined && (obj.playbackRate = message.playbackRate);
    message.sequenceVariant !== undefined && (obj.sequenceVariant = Math.round(message.sequenceVariant));
    return obj;
  },
};

function createBaseCDOTAUserMsgUnitEvent_RemoveGesture(): CDOTAUserMsgUnitEvent_RemoveGesture {
  return { activity: 0 };
}

export const CDOTAUserMsgUnitEvent_RemoveGesture = {
  encode(message: CDOTAUserMsgUnitEvent_RemoveGesture, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activity !== 0) {
      writer.uint32(8).int32(message.activity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgUnitEvent_RemoveGesture {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgUnitEvent_RemoveGesture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.activity = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgUnitEvent_RemoveGesture {
    return { activity: isSet(object.activity) ? Number(object.activity) : 0 };
  },

  toJSON(message: CDOTAUserMsgUnitEvent_RemoveGesture): unknown {
    const obj: any = {};
    message.activity !== undefined && (obj.activity = Math.round(message.activity));
    return obj;
  },
};

function createBaseCDOTAUserMsgUnitEvent_BloodImpact(): CDOTAUserMsgUnitEvent_BloodImpact {
  return { scale: 0, xNormal: 0, yNormal: 0 };
}

export const CDOTAUserMsgUnitEvent_BloodImpact = {
  encode(message: CDOTAUserMsgUnitEvent_BloodImpact, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scale !== 0) {
      writer.uint32(8).int32(message.scale);
    }
    if (message.xNormal !== 0) {
      writer.uint32(16).int32(message.xNormal);
    }
    if (message.yNormal !== 0) {
      writer.uint32(24).int32(message.yNormal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgUnitEvent_BloodImpact {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgUnitEvent_BloodImpact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.scale = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.xNormal = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.yNormal = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgUnitEvent_BloodImpact {
    return {
      scale: isSet(object.scale) ? Number(object.scale) : 0,
      xNormal: isSet(object.xNormal) ? Number(object.xNormal) : 0,
      yNormal: isSet(object.yNormal) ? Number(object.yNormal) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgUnitEvent_BloodImpact): unknown {
    const obj: any = {};
    message.scale !== undefined && (obj.scale = Math.round(message.scale));
    message.xNormal !== undefined && (obj.xNormal = Math.round(message.xNormal));
    message.yNormal !== undefined && (obj.yNormal = Math.round(message.yNormal));
    return obj;
  },
};

function createBaseCDOTAUserMsgUnitEvent_FadeGesture(): CDOTAUserMsgUnitEvent_FadeGesture {
  return { activity: 0 };
}

export const CDOTAUserMsgUnitEvent_FadeGesture = {
  encode(message: CDOTAUserMsgUnitEvent_FadeGesture, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activity !== 0) {
      writer.uint32(8).int32(message.activity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgUnitEvent_FadeGesture {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgUnitEvent_FadeGesture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.activity = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgUnitEvent_FadeGesture {
    return { activity: isSet(object.activity) ? Number(object.activity) : 0 };
  },

  toJSON(message: CDOTAUserMsgUnitEvent_FadeGesture): unknown {
    const obj: any = {};
    message.activity !== undefined && (obj.activity = Math.round(message.activity));
    return obj;
  },
};

function createBaseCDOTAUserMsgItemPurchased(): CDOTAUserMsgItemPurchased {
  return { itemAbilityId: 0 };
}

export const CDOTAUserMsgItemPurchased = {
  encode(message: CDOTAUserMsgItemPurchased, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemAbilityId !== 0) {
      writer.uint32(8).int32(message.itemAbilityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgItemPurchased {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgItemPurchased();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
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

  fromJSON(object: any): CDOTAUserMsgItemPurchased {
    return { itemAbilityId: isSet(object.itemAbilityId) ? Number(object.itemAbilityId) : 0 };
  },

  toJSON(message: CDOTAUserMsgItemPurchased): unknown {
    const obj: any = {};
    message.itemAbilityId !== undefined && (obj.itemAbilityId = Math.round(message.itemAbilityId));
    return obj;
  },
};

function createBaseCDOTAUserMsgItemSold(): CDOTAUserMsgItemSold {
  return { itemAbilityId: 0 };
}

export const CDOTAUserMsgItemSold = {
  encode(message: CDOTAUserMsgItemSold, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemAbilityId !== 0) {
      writer.uint32(8).int32(message.itemAbilityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgItemSold {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgItemSold();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
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

  fromJSON(object: any): CDOTAUserMsgItemSold {
    return { itemAbilityId: isSet(object.itemAbilityId) ? Number(object.itemAbilityId) : 0 };
  },

  toJSON(message: CDOTAUserMsgItemSold): unknown {
    const obj: any = {};
    message.itemAbilityId !== undefined && (obj.itemAbilityId = Math.round(message.itemAbilityId));
    return obj;
  },
};

function createBaseCDOTAUserMsgItemFound(): CDOTAUserMsgItemFound {
  return { player: 0, quality: 0, rarity: 0, method: 0, itemdef: 0 };
}

export const CDOTAUserMsgItemFound = {
  encode(message: CDOTAUserMsgItemFound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.player !== 0) {
      writer.uint32(8).int32(message.player);
    }
    if (message.quality !== 0) {
      writer.uint32(16).int32(message.quality);
    }
    if (message.rarity !== 0) {
      writer.uint32(24).int32(message.rarity);
    }
    if (message.method !== 0) {
      writer.uint32(32).int32(message.method);
    }
    if (message.itemdef !== 0) {
      writer.uint32(40).uint32(message.itemdef);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgItemFound {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgItemFound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.player = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.quality = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.rarity = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.method = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.itemdef = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgItemFound {
    return {
      player: isSet(object.player) ? Number(object.player) : 0,
      quality: isSet(object.quality) ? Number(object.quality) : 0,
      rarity: isSet(object.rarity) ? Number(object.rarity) : 0,
      method: isSet(object.method) ? Number(object.method) : 0,
      itemdef: isSet(object.itemdef) ? Number(object.itemdef) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgItemFound): unknown {
    const obj: any = {};
    message.player !== undefined && (obj.player = Math.round(message.player));
    message.quality !== undefined && (obj.quality = Math.round(message.quality));
    message.rarity !== undefined && (obj.rarity = Math.round(message.rarity));
    message.method !== undefined && (obj.method = Math.round(message.method));
    message.itemdef !== undefined && (obj.itemdef = Math.round(message.itemdef));
    return obj;
  },
};

function createBaseCDOTAUserMsgOverheadEvent(): CDOTAUserMsgOverheadEvent {
  return { messageType: 0, value: 0, targetPlayerEntindex: 0, targetEntindex: 0, sourcePlayerEntindex: 0 };
}

export const CDOTAUserMsgOverheadEvent = {
  encode(message: CDOTAUserMsgOverheadEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageType !== 0) {
      writer.uint32(8).int32(message.messageType);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    if (message.targetPlayerEntindex !== 0) {
      writer.uint32(24).int32(message.targetPlayerEntindex);
    }
    if (message.targetEntindex !== 0) {
      writer.uint32(32).int32(message.targetEntindex);
    }
    if (message.sourcePlayerEntindex !== 0) {
      writer.uint32(40).int32(message.sourcePlayerEntindex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgOverheadEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgOverheadEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.messageType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.value = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.targetPlayerEntindex = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.targetEntindex = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.sourcePlayerEntindex = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgOverheadEvent {
    return {
      messageType: isSet(object.messageType) ? dotaOverheadAlertFromJSON(object.messageType) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
      targetPlayerEntindex: isSet(object.targetPlayerEntindex) ? Number(object.targetPlayerEntindex) : 0,
      targetEntindex: isSet(object.targetEntindex) ? Number(object.targetEntindex) : 0,
      sourcePlayerEntindex: isSet(object.sourcePlayerEntindex) ? Number(object.sourcePlayerEntindex) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgOverheadEvent): unknown {
    const obj: any = {};
    message.messageType !== undefined && (obj.messageType = dotaOverheadAlertToJSON(message.messageType));
    message.value !== undefined && (obj.value = Math.round(message.value));
    message.targetPlayerEntindex !== undefined && (obj.targetPlayerEntindex = Math.round(message.targetPlayerEntindex));
    message.targetEntindex !== undefined && (obj.targetEntindex = Math.round(message.targetEntindex));
    message.sourcePlayerEntindex !== undefined && (obj.sourcePlayerEntindex = Math.round(message.sourcePlayerEntindex));
    return obj;
  },
};

function createBaseCDOTAUserMsgTutorialTipInfo(): CDOTAUserMsgTutorialTipInfo {
  return { name: "", progress: 0 };
}

export const CDOTAUserMsgTutorialTipInfo = {
  encode(message: CDOTAUserMsgTutorialTipInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.progress !== 0) {
      writer.uint32(16).int32(message.progress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTutorialTipInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTutorialTipInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.progress = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgTutorialTipInfo {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      progress: isSet(object.progress) ? Number(object.progress) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgTutorialTipInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.progress !== undefined && (obj.progress = Math.round(message.progress));
    return obj;
  },
};

function createBaseCDOTAUserMsgTutorialFinish(): CDOTAUserMsgTutorialFinish {
  return { heading: "", emblem: "", body: "", success: false };
}

export const CDOTAUserMsgTutorialFinish = {
  encode(message: CDOTAUserMsgTutorialFinish, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heading !== "") {
      writer.uint32(10).string(message.heading);
    }
    if (message.emblem !== "") {
      writer.uint32(18).string(message.emblem);
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    if (message.success === true) {
      writer.uint32(32).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTutorialFinish {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTutorialFinish();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.heading = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.emblem = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.body = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.success = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgTutorialFinish {
    return {
      heading: isSet(object.heading) ? String(object.heading) : "",
      emblem: isSet(object.emblem) ? String(object.emblem) : "",
      body: isSet(object.body) ? String(object.body) : "",
      success: isSet(object.success) ? Boolean(object.success) : false,
    };
  },

  toJSON(message: CDOTAUserMsgTutorialFinish): unknown {
    const obj: any = {};
    message.heading !== undefined && (obj.heading = message.heading);
    message.emblem !== undefined && (obj.emblem = message.emblem);
    message.body !== undefined && (obj.body = message.body);
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
};

function createBaseCDOTAUserMsgTutorialMinimapPosition(): CDOTAUserMsgTutorialMinimapPosition {
  return {};
}

export const CDOTAUserMsgTutorialMinimapPosition = {
  encode(_: CDOTAUserMsgTutorialMinimapPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTutorialMinimapPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTutorialMinimapPosition();
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

  fromJSON(_: any): CDOTAUserMsgTutorialMinimapPosition {
    return {};
  },

  toJSON(_: CDOTAUserMsgTutorialMinimapPosition): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCDOTAUserMsgSendGenericToolTip(): CDOTAUserMsgSendGenericToolTip {
  return { title: "", text: "", entindex: 0, close: false };
}

export const CDOTAUserMsgSendGenericToolTip = {
  encode(message: CDOTAUserMsgSendGenericToolTip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    if (message.entindex !== 0) {
      writer.uint32(24).int32(message.entindex);
    }
    if (message.close === true) {
      writer.uint32(32).bool(message.close);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSendGenericToolTip {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSendGenericToolTip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.text = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.entindex = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.close = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgSendGenericToolTip {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      text: isSet(object.text) ? String(object.text) : "",
      entindex: isSet(object.entindex) ? Number(object.entindex) : 0,
      close: isSet(object.close) ? Boolean(object.close) : false,
    };
  },

  toJSON(message: CDOTAUserMsgSendGenericToolTip): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.text !== undefined && (obj.text = message.text);
    message.entindex !== undefined && (obj.entindex = Math.round(message.entindex));
    message.close !== undefined && (obj.close = message.close);
    return obj;
  },
};

function createBaseCDOTAUserMsgWorldLine(): CDOTAUserMsgWorldLine {
  return { playerId: 0, worldline: undefined };
}

export const CDOTAUserMsgWorldLine = {
  encode(message: CDOTAUserMsgWorldLine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.worldline !== undefined) {
      CDOTAMsgWorldLine.encode(message.worldline, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgWorldLine {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgWorldLine();
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
          if (tag != 18) {
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

  fromJSON(object: any): CDOTAUserMsgWorldLine {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      worldline: isSet(object.worldline) ? CDOTAMsgWorldLine.fromJSON(object.worldline) : undefined,
    };
  },

  toJSON(message: CDOTAUserMsgWorldLine): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.worldline !== undefined &&
      (obj.worldline = message.worldline ? CDOTAMsgWorldLine.toJSON(message.worldline) : undefined);
    return obj;
  },
};

function createBaseCDOTAUserMsgChatWheel(): CDOTAUserMsgChatWheel {
  return { chatMessageId: 0, playerId: 0, accountId: 0, paramHeroId: 0, emoticonId: 0 };
}

export const CDOTAUserMsgChatWheel = {
  encode(message: CDOTAUserMsgChatWheel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatMessageId !== 0) {
      writer.uint32(8).uint32(message.chatMessageId);
    }
    if (message.playerId !== 0) {
      writer.uint32(16).int32(message.playerId);
    }
    if (message.accountId !== 0) {
      writer.uint32(24).uint32(message.accountId);
    }
    if (message.paramHeroId !== 0) {
      writer.uint32(32).uint32(message.paramHeroId);
    }
    if (message.emoticonId !== 0) {
      writer.uint32(40).uint32(message.emoticonId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgChatWheel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgChatWheel();
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

          message.playerId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.paramHeroId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
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

  fromJSON(object: any): CDOTAUserMsgChatWheel {
    return {
      chatMessageId: isSet(object.chatMessageId) ? Number(object.chatMessageId) : 0,
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      paramHeroId: isSet(object.paramHeroId) ? Number(object.paramHeroId) : 0,
      emoticonId: isSet(object.emoticonId) ? Number(object.emoticonId) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgChatWheel): unknown {
    const obj: any = {};
    message.chatMessageId !== undefined && (obj.chatMessageId = Math.round(message.chatMessageId));
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.paramHeroId !== undefined && (obj.paramHeroId = Math.round(message.paramHeroId));
    message.emoticonId !== undefined && (obj.emoticonId = Math.round(message.emoticonId));
    return obj;
  },
};

function createBaseCDOTAUserMsgReceivedXmasGift(): CDOTAUserMsgReceivedXmasGift {
  return { playerId: 0, itemName: "", inventorySlot: 0 };
}

export const CDOTAUserMsgReceivedXmasGift = {
  encode(message: CDOTAUserMsgReceivedXmasGift, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.itemName !== "") {
      writer.uint32(18).string(message.itemName);
    }
    if (message.inventorySlot !== 0) {
      writer.uint32(24).int32(message.inventorySlot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgReceivedXmasGift {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgReceivedXmasGift();
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
          if (tag != 18) {
            break;
          }

          message.itemName = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.inventorySlot = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgReceivedXmasGift {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      itemName: isSet(object.itemName) ? String(object.itemName) : "",
      inventorySlot: isSet(object.inventorySlot) ? Number(object.inventorySlot) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgReceivedXmasGift): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.itemName !== undefined && (obj.itemName = message.itemName);
    message.inventorySlot !== undefined && (obj.inventorySlot = Math.round(message.inventorySlot));
    return obj;
  },
};

function createBaseCDOTAUserMsgShowSurvey(): CDOTAUserMsgShowSurvey {
  return { surveyId: 0, matchId: "0", responseStyle: "", teammateHeroId: 0, teammateName: "", teammateAccountId: 0 };
}

export const CDOTAUserMsgShowSurvey = {
  encode(message: CDOTAUserMsgShowSurvey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.surveyId !== 0) {
      writer.uint32(8).int32(message.surveyId);
    }
    if (message.matchId !== "0") {
      writer.uint32(16).uint64(message.matchId);
    }
    if (message.responseStyle !== "") {
      writer.uint32(26).string(message.responseStyle);
    }
    if (message.teammateHeroId !== 0) {
      writer.uint32(32).uint32(message.teammateHeroId);
    }
    if (message.teammateName !== "") {
      writer.uint32(42).string(message.teammateName);
    }
    if (message.teammateAccountId !== 0) {
      writer.uint32(48).uint32(message.teammateAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgShowSurvey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgShowSurvey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.surveyId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.responseStyle = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.teammateHeroId = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.teammateName = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.teammateAccountId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgShowSurvey {
    return {
      surveyId: isSet(object.surveyId) ? Number(object.surveyId) : 0,
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      responseStyle: isSet(object.responseStyle) ? String(object.responseStyle) : "",
      teammateHeroId: isSet(object.teammateHeroId) ? Number(object.teammateHeroId) : 0,
      teammateName: isSet(object.teammateName) ? String(object.teammateName) : "",
      teammateAccountId: isSet(object.teammateAccountId) ? Number(object.teammateAccountId) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgShowSurvey): unknown {
    const obj: any = {};
    message.surveyId !== undefined && (obj.surveyId = Math.round(message.surveyId));
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.responseStyle !== undefined && (obj.responseStyle = message.responseStyle);
    message.teammateHeroId !== undefined && (obj.teammateHeroId = Math.round(message.teammateHeroId));
    message.teammateName !== undefined && (obj.teammateName = message.teammateName);
    message.teammateAccountId !== undefined && (obj.teammateAccountId = Math.round(message.teammateAccountId));
    return obj;
  },
};

function createBaseCDOTAUserMsgUpdateSharedContent(): CDOTAUserMsgUpdateSharedContent {
  return { slotType: 0 };
}

export const CDOTAUserMsgUpdateSharedContent = {
  encode(message: CDOTAUserMsgUpdateSharedContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slotType !== 0) {
      writer.uint32(8).int32(message.slotType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgUpdateSharedContent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgUpdateSharedContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.slotType = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgUpdateSharedContent {
    return { slotType: isSet(object.slotType) ? Number(object.slotType) : 0 };
  },

  toJSON(message: CDOTAUserMsgUpdateSharedContent): unknown {
    const obj: any = {};
    message.slotType !== undefined && (obj.slotType = Math.round(message.slotType));
    return obj;
  },
};

function createBaseCDOTAUserMsgTutorialRequestExp(): CDOTAUserMsgTutorialRequestExp {
  return {};
}

export const CDOTAUserMsgTutorialRequestExp = {
  encode(_: CDOTAUserMsgTutorialRequestExp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTutorialRequestExp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTutorialRequestExp();
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

  fromJSON(_: any): CDOTAUserMsgTutorialRequestExp {
    return {};
  },

  toJSON(_: CDOTAUserMsgTutorialRequestExp): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCDOTAUserMsgTutorialFade(): CDOTAUserMsgTutorialFade {
  return { tgtAlpha: 0 };
}

export const CDOTAUserMsgTutorialFade = {
  encode(message: CDOTAUserMsgTutorialFade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tgtAlpha !== 0) {
      writer.uint32(8).int32(message.tgtAlpha);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTutorialFade {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTutorialFade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.tgtAlpha = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgTutorialFade {
    return { tgtAlpha: isSet(object.tgtAlpha) ? Number(object.tgtAlpha) : 0 };
  },

  toJSON(message: CDOTAUserMsgTutorialFade): unknown {
    const obj: any = {};
    message.tgtAlpha !== undefined && (obj.tgtAlpha = Math.round(message.tgtAlpha));
    return obj;
  },
};

function createBaseCDOTAUserMsgTutorialPingMinimap(): CDOTAUserMsgTutorialPingMinimap {
  return { playerId: 0, posX: 0, posY: 0, posZ: 0, entityIndex: 0 };
}

export const CDOTAUserMsgTutorialPingMinimap = {
  encode(message: CDOTAUserMsgTutorialPingMinimap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.posX !== 0) {
      writer.uint32(21).float(message.posX);
    }
    if (message.posY !== 0) {
      writer.uint32(29).float(message.posY);
    }
    if (message.posZ !== 0) {
      writer.uint32(37).float(message.posZ);
    }
    if (message.entityIndex !== 0) {
      writer.uint32(40).int32(message.entityIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTutorialPingMinimap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTutorialPingMinimap();
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
          if (tag != 21) {
            break;
          }

          message.posX = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.posY = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.posZ = reader.float();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.entityIndex = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgTutorialPingMinimap {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      posX: isSet(object.posX) ? Number(object.posX) : 0,
      posY: isSet(object.posY) ? Number(object.posY) : 0,
      posZ: isSet(object.posZ) ? Number(object.posZ) : 0,
      entityIndex: isSet(object.entityIndex) ? Number(object.entityIndex) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgTutorialPingMinimap): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.posX !== undefined && (obj.posX = message.posX);
    message.posY !== undefined && (obj.posY = message.posY);
    message.posZ !== undefined && (obj.posZ = message.posZ);
    message.entityIndex !== undefined && (obj.entityIndex = Math.round(message.entityIndex));
    return obj;
  },
};

function createBaseCDOTAUserMsgGamerulesStateChanged(): CDOTAUserMsgGamerulesStateChanged {
  return { state: 0 };
}

export const CDOTAUserMsgGamerulesStateChanged = {
  encode(message: CDOTAUserMsgGamerulesStateChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).uint32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgGamerulesStateChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgGamerulesStateChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.state = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgGamerulesStateChanged {
    return { state: isSet(object.state) ? Number(object.state) : 0 };
  },

  toJSON(message: CDOTAUserMsgGamerulesStateChanged): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = Math.round(message.state));
    return obj;
  },
};

function createBaseCDOTAUserMsgAddQuestLogEntry(): CDOTAUserMsgAddQuestLogEntry {
  return { npcName: "", npcDialog: "" };
}

export const CDOTAUserMsgAddQuestLogEntry = {
  encode(message: CDOTAUserMsgAddQuestLogEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.npcName !== "") {
      writer.uint32(10).string(message.npcName);
    }
    if (message.npcDialog !== "") {
      writer.uint32(18).string(message.npcDialog);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgAddQuestLogEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgAddQuestLogEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.npcName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.npcDialog = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgAddQuestLogEntry {
    return {
      npcName: isSet(object.npcName) ? String(object.npcName) : "",
      npcDialog: isSet(object.npcDialog) ? String(object.npcDialog) : "",
    };
  },

  toJSON(message: CDOTAUserMsgAddQuestLogEntry): unknown {
    const obj: any = {};
    message.npcName !== undefined && (obj.npcName = message.npcName);
    message.npcDialog !== undefined && (obj.npcDialog = message.npcDialog);
    return obj;
  },
};

function createBaseCDOTAUserMsgSendStatPopup(): CDOTAUserMsgSendStatPopup {
  return { playerId: 0, statpopup: undefined };
}

export const CDOTAUserMsgSendStatPopup = {
  encode(message: CDOTAUserMsgSendStatPopup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.statpopup !== undefined) {
      CDOTAMsgSendStatPopup.encode(message.statpopup, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSendStatPopup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSendStatPopup();
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
          if (tag != 18) {
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

  fromJSON(object: any): CDOTAUserMsgSendStatPopup {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      statpopup: isSet(object.statpopup) ? CDOTAMsgSendStatPopup.fromJSON(object.statpopup) : undefined,
    };
  },

  toJSON(message: CDOTAUserMsgSendStatPopup): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.statpopup !== undefined &&
      (obj.statpopup = message.statpopup ? CDOTAMsgSendStatPopup.toJSON(message.statpopup) : undefined);
    return obj;
  },
};

function createBaseCDOTAUserMsgDismissAllStatPopups(): CDOTAUserMsgDismissAllStatPopups {
  return { dismissallmsg: undefined };
}

export const CDOTAUserMsgDismissAllStatPopups = {
  encode(message: CDOTAUserMsgDismissAllStatPopups, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dismissallmsg !== undefined) {
      CDOTAMsgDismissAllStatPopups.encode(message.dismissallmsg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgDismissAllStatPopups {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgDismissAllStatPopups();
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

  fromJSON(object: any): CDOTAUserMsgDismissAllStatPopups {
    return {
      dismissallmsg: isSet(object.dismissallmsg)
        ? CDOTAMsgDismissAllStatPopups.fromJSON(object.dismissallmsg)
        : undefined,
    };
  },

  toJSON(message: CDOTAUserMsgDismissAllStatPopups): unknown {
    const obj: any = {};
    message.dismissallmsg !== undefined && (obj.dismissallmsg = message.dismissallmsg
      ? CDOTAMsgDismissAllStatPopups.toJSON(message.dismissallmsg)
      : undefined);
    return obj;
  },
};

function createBaseCDOTAUserMsgSendRoshanSpectatorPhase(): CDOTAUserMsgSendRoshanSpectatorPhase {
  return { phase: 0, phaseStartTime: 0, phaseLength: 0 };
}

export const CDOTAUserMsgSendRoshanSpectatorPhase = {
  encode(message: CDOTAUserMsgSendRoshanSpectatorPhase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.phase !== 0) {
      writer.uint32(8).int32(message.phase);
    }
    if (message.phaseStartTime !== 0) {
      writer.uint32(16).int32(message.phaseStartTime);
    }
    if (message.phaseLength !== 0) {
      writer.uint32(24).int32(message.phaseLength);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSendRoshanSpectatorPhase {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSendRoshanSpectatorPhase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.phase = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.phaseStartTime = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.phaseLength = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgSendRoshanSpectatorPhase {
    return {
      phase: isSet(object.phase) ? dotaRoshanPhaseFromJSON(object.phase) : 0,
      phaseStartTime: isSet(object.phaseStartTime) ? Number(object.phaseStartTime) : 0,
      phaseLength: isSet(object.phaseLength) ? Number(object.phaseLength) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgSendRoshanSpectatorPhase): unknown {
    const obj: any = {};
    message.phase !== undefined && (obj.phase = dotaRoshanPhaseToJSON(message.phase));
    message.phaseStartTime !== undefined && (obj.phaseStartTime = Math.round(message.phaseStartTime));
    message.phaseLength !== undefined && (obj.phaseLength = Math.round(message.phaseLength));
    return obj;
  },
};

function createBaseCDOTAUserMsgSendRoshanPopup(): CDOTAUserMsgSendRoshanPopup {
  return { reclaimed: false, gametime: 0 };
}

export const CDOTAUserMsgSendRoshanPopup = {
  encode(message: CDOTAUserMsgSendRoshanPopup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reclaimed === true) {
      writer.uint32(8).bool(message.reclaimed);
    }
    if (message.gametime !== 0) {
      writer.uint32(16).int32(message.gametime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSendRoshanPopup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSendRoshanPopup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.reclaimed = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.gametime = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgSendRoshanPopup {
    return {
      reclaimed: isSet(object.reclaimed) ? Boolean(object.reclaimed) : false,
      gametime: isSet(object.gametime) ? Number(object.gametime) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgSendRoshanPopup): unknown {
    const obj: any = {};
    message.reclaimed !== undefined && (obj.reclaimed = message.reclaimed);
    message.gametime !== undefined && (obj.gametime = Math.round(message.gametime));
    return obj;
  },
};

function createBaseCDOTAUserMsgSendFinalGold(): CDOTAUserMsgSendFinalGold {
  return { reliableGold: [], unreliableGold: [] };
}

export const CDOTAUserMsgSendFinalGold = {
  encode(message: CDOTAUserMsgSendFinalGold, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.reliableGold) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.unreliableGold) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSendFinalGold {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSendFinalGold();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.reliableGold.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.reliableGold.push(reader.uint32());
            }

            continue;
          }

          break;
        case 2:
          if (tag == 16) {
            message.unreliableGold.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unreliableGold.push(reader.uint32());
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

  fromJSON(object: any): CDOTAUserMsgSendFinalGold {
    return {
      reliableGold: Array.isArray(object?.reliableGold) ? object.reliableGold.map((e: any) => Number(e)) : [],
      unreliableGold: Array.isArray(object?.unreliableGold) ? object.unreliableGold.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CDOTAUserMsgSendFinalGold): unknown {
    const obj: any = {};
    if (message.reliableGold) {
      obj.reliableGold = message.reliableGold.map((e) => Math.round(e));
    } else {
      obj.reliableGold = [];
    }
    if (message.unreliableGold) {
      obj.unreliableGold = message.unreliableGold.map((e) => Math.round(e));
    } else {
      obj.unreliableGold = [];
    }
    return obj;
  },
};

function createBaseCDOTAUserMsgCustomMsg(): CDOTAUserMsgCustomMsg {
  return { message: "", playerId: 0, value: 0 };
}

export const CDOTAUserMsgCustomMsg = {
  encode(message: CDOTAUserMsgCustomMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.playerId !== 0) {
      writer.uint32(16).int32(message.playerId);
    }
    if (message.value !== 0) {
      writer.uint32(24).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCustomMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCustomMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.message = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.value = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgCustomMsg {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgCustomMsg): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },
};

function createBaseCDOTAUserMsgCoachHUDPing(): CDOTAUserMsgCoachHUDPing {
  return { playerId: 0, hudPing: undefined };
}

export const CDOTAUserMsgCoachHUDPing = {
  encode(message: CDOTAUserMsgCoachHUDPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.hudPing !== undefined) {
      CDOTAMsgCoachHUDPing.encode(message.hudPing, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCoachHUDPing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCoachHUDPing();
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
          if (tag != 18) {
            break;
          }

          message.hudPing = CDOTAMsgCoachHUDPing.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgCoachHUDPing {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      hudPing: isSet(object.hudPing) ? CDOTAMsgCoachHUDPing.fromJSON(object.hudPing) : undefined,
    };
  },

  toJSON(message: CDOTAUserMsgCoachHUDPing): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.hudPing !== undefined &&
      (obj.hudPing = message.hudPing ? CDOTAMsgCoachHUDPing.toJSON(message.hudPing) : undefined);
    return obj;
  },
};

function createBaseCDOTAUserMsgClientLoadGridNav(): CDOTAUserMsgClientLoadGridNav {
  return {};
}

export const CDOTAUserMsgClientLoadGridNav = {
  encode(_: CDOTAUserMsgClientLoadGridNav, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgClientLoadGridNav {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgClientLoadGridNav();
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

  fromJSON(_: any): CDOTAUserMsgClientLoadGridNav {
    return {};
  },

  toJSON(_: CDOTAUserMsgClientLoadGridNav): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCDOTAUserMsgTEProjectile(): CDOTAUserMsgTEProjectile {
  return {
    source: 0,
    target: 0,
    moveSpeed: 0,
    sourceAttachment: 0,
    particleSystemHandle: "0",
    dodgeable: false,
    isAttack: false,
    expireTime: 0,
    maximpacttime: 0,
    colorgemcolor: 0,
    launchTick: 0,
    handle: 0,
    targetLoc: undefined,
    particleCpData: [],
    additionalParticleSystemHandle: "0",
  };
}

export const CDOTAUserMsgTEProjectile = {
  encode(message: CDOTAUserMsgTEProjectile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).uint32(message.source);
    }
    if (message.target !== 0) {
      writer.uint32(16).uint32(message.target);
    }
    if (message.moveSpeed !== 0) {
      writer.uint32(24).int32(message.moveSpeed);
    }
    if (message.sourceAttachment !== 0) {
      writer.uint32(32).int32(message.sourceAttachment);
    }
    if (message.particleSystemHandle !== "0") {
      writer.uint32(40).int64(message.particleSystemHandle);
    }
    if (message.dodgeable === true) {
      writer.uint32(48).bool(message.dodgeable);
    }
    if (message.isAttack === true) {
      writer.uint32(56).bool(message.isAttack);
    }
    if (message.expireTime !== 0) {
      writer.uint32(77).float(message.expireTime);
    }
    if (message.maximpacttime !== 0) {
      writer.uint32(85).float(message.maximpacttime);
    }
    if (message.colorgemcolor !== 0) {
      writer.uint32(93).fixed32(message.colorgemcolor);
    }
    if (message.launchTick !== 0) {
      writer.uint32(96).int32(message.launchTick);
    }
    if (message.handle !== 0) {
      writer.uint32(104).int32(message.handle);
    }
    if (message.targetLoc !== undefined) {
      CMsgVector.encode(message.targetLoc, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.particleCpData) {
      CDOTAUserMsgProjectileParticleCPData.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.additionalParticleSystemHandle !== "0") {
      writer.uint32(128).int64(message.additionalParticleSystemHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTEProjectile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTEProjectile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.target = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.moveSpeed = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.sourceAttachment = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.particleSystemHandle = longToString(reader.int64() as Long);
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.dodgeable = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.isAttack = reader.bool();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.expireTime = reader.float();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.maximpacttime = reader.float();
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.colorgemcolor = reader.fixed32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.launchTick = reader.int32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.handle = reader.int32();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.targetLoc = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.particleCpData.push(CDOTAUserMsgProjectileParticleCPData.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.additionalParticleSystemHandle = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgTEProjectile {
    return {
      source: isSet(object.source) ? Number(object.source) : 0,
      target: isSet(object.target) ? Number(object.target) : 0,
      moveSpeed: isSet(object.moveSpeed) ? Number(object.moveSpeed) : 0,
      sourceAttachment: isSet(object.sourceAttachment) ? Number(object.sourceAttachment) : 0,
      particleSystemHandle: isSet(object.particleSystemHandle) ? String(object.particleSystemHandle) : "0",
      dodgeable: isSet(object.dodgeable) ? Boolean(object.dodgeable) : false,
      isAttack: isSet(object.isAttack) ? Boolean(object.isAttack) : false,
      expireTime: isSet(object.expireTime) ? Number(object.expireTime) : 0,
      maximpacttime: isSet(object.maximpacttime) ? Number(object.maximpacttime) : 0,
      colorgemcolor: isSet(object.colorgemcolor) ? Number(object.colorgemcolor) : 0,
      launchTick: isSet(object.launchTick) ? Number(object.launchTick) : 0,
      handle: isSet(object.handle) ? Number(object.handle) : 0,
      targetLoc: isSet(object.targetLoc) ? CMsgVector.fromJSON(object.targetLoc) : undefined,
      particleCpData: Array.isArray(object?.particleCpData)
        ? object.particleCpData.map((e: any) => CDOTAUserMsgProjectileParticleCPData.fromJSON(e))
        : [],
      additionalParticleSystemHandle: isSet(object.additionalParticleSystemHandle)
        ? String(object.additionalParticleSystemHandle)
        : "0",
    };
  },

  toJSON(message: CDOTAUserMsgTEProjectile): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = Math.round(message.source));
    message.target !== undefined && (obj.target = Math.round(message.target));
    message.moveSpeed !== undefined && (obj.moveSpeed = Math.round(message.moveSpeed));
    message.sourceAttachment !== undefined && (obj.sourceAttachment = Math.round(message.sourceAttachment));
    message.particleSystemHandle !== undefined && (obj.particleSystemHandle = message.particleSystemHandle);
    message.dodgeable !== undefined && (obj.dodgeable = message.dodgeable);
    message.isAttack !== undefined && (obj.isAttack = message.isAttack);
    message.expireTime !== undefined && (obj.expireTime = message.expireTime);
    message.maximpacttime !== undefined && (obj.maximpacttime = message.maximpacttime);
    message.colorgemcolor !== undefined && (obj.colorgemcolor = Math.round(message.colorgemcolor));
    message.launchTick !== undefined && (obj.launchTick = Math.round(message.launchTick));
    message.handle !== undefined && (obj.handle = Math.round(message.handle));
    message.targetLoc !== undefined &&
      (obj.targetLoc = message.targetLoc ? CMsgVector.toJSON(message.targetLoc) : undefined);
    if (message.particleCpData) {
      obj.particleCpData = message.particleCpData.map((e) =>
        e ? CDOTAUserMsgProjectileParticleCPData.toJSON(e) : undefined
      );
    } else {
      obj.particleCpData = [];
    }
    message.additionalParticleSystemHandle !== undefined &&
      (obj.additionalParticleSystemHandle = message.additionalParticleSystemHandle);
    return obj;
  },
};

function createBaseCDOTAUserMsgTEProjectileLoc(): CDOTAUserMsgTEProjectileLoc {
  return {
    sourceLoc: undefined,
    target: 0,
    moveSpeed: 0,
    particleSystemHandle: "0",
    dodgeable: false,
    isAttack: false,
    expireTime: 0,
    targetLoc: undefined,
    colorgemcolor: 0,
    launchTick: 0,
    handle: 0,
    source: 0,
    sourceAttachment: 0,
    particleCpData: [],
    additionalParticleSystemHandle: "0",
  };
}

export const CDOTAUserMsgTEProjectileLoc = {
  encode(message: CDOTAUserMsgTEProjectileLoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceLoc !== undefined) {
      CMsgVector.encode(message.sourceLoc, writer.uint32(10).fork()).ldelim();
    }
    if (message.target !== 0) {
      writer.uint32(16).uint32(message.target);
    }
    if (message.moveSpeed !== 0) {
      writer.uint32(24).int32(message.moveSpeed);
    }
    if (message.particleSystemHandle !== "0") {
      writer.uint32(32).int64(message.particleSystemHandle);
    }
    if (message.dodgeable === true) {
      writer.uint32(40).bool(message.dodgeable);
    }
    if (message.isAttack === true) {
      writer.uint32(48).bool(message.isAttack);
    }
    if (message.expireTime !== 0) {
      writer.uint32(77).float(message.expireTime);
    }
    if (message.targetLoc !== undefined) {
      CMsgVector.encode(message.targetLoc, writer.uint32(82).fork()).ldelim();
    }
    if (message.colorgemcolor !== 0) {
      writer.uint32(93).fixed32(message.colorgemcolor);
    }
    if (message.launchTick !== 0) {
      writer.uint32(96).int32(message.launchTick);
    }
    if (message.handle !== 0) {
      writer.uint32(104).int32(message.handle);
    }
    if (message.source !== 0) {
      writer.uint32(112).uint32(message.source);
    }
    if (message.sourceAttachment !== 0) {
      writer.uint32(120).int32(message.sourceAttachment);
    }
    for (const v of message.particleCpData) {
      CDOTAUserMsgProjectileParticleCPData.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    if (message.additionalParticleSystemHandle !== "0") {
      writer.uint32(136).int64(message.additionalParticleSystemHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTEProjectileLoc {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTEProjectileLoc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.sourceLoc = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.target = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.moveSpeed = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.particleSystemHandle = longToString(reader.int64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.dodgeable = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.isAttack = reader.bool();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.expireTime = reader.float();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.targetLoc = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.colorgemcolor = reader.fixed32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.launchTick = reader.int32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.handle = reader.int32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.source = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.sourceAttachment = reader.int32();
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.particleCpData.push(CDOTAUserMsgProjectileParticleCPData.decode(reader, reader.uint32()));
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.additionalParticleSystemHandle = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgTEProjectileLoc {
    return {
      sourceLoc: isSet(object.sourceLoc) ? CMsgVector.fromJSON(object.sourceLoc) : undefined,
      target: isSet(object.target) ? Number(object.target) : 0,
      moveSpeed: isSet(object.moveSpeed) ? Number(object.moveSpeed) : 0,
      particleSystemHandle: isSet(object.particleSystemHandle) ? String(object.particleSystemHandle) : "0",
      dodgeable: isSet(object.dodgeable) ? Boolean(object.dodgeable) : false,
      isAttack: isSet(object.isAttack) ? Boolean(object.isAttack) : false,
      expireTime: isSet(object.expireTime) ? Number(object.expireTime) : 0,
      targetLoc: isSet(object.targetLoc) ? CMsgVector.fromJSON(object.targetLoc) : undefined,
      colorgemcolor: isSet(object.colorgemcolor) ? Number(object.colorgemcolor) : 0,
      launchTick: isSet(object.launchTick) ? Number(object.launchTick) : 0,
      handle: isSet(object.handle) ? Number(object.handle) : 0,
      source: isSet(object.source) ? Number(object.source) : 0,
      sourceAttachment: isSet(object.sourceAttachment) ? Number(object.sourceAttachment) : 0,
      particleCpData: Array.isArray(object?.particleCpData)
        ? object.particleCpData.map((e: any) => CDOTAUserMsgProjectileParticleCPData.fromJSON(e))
        : [],
      additionalParticleSystemHandle: isSet(object.additionalParticleSystemHandle)
        ? String(object.additionalParticleSystemHandle)
        : "0",
    };
  },

  toJSON(message: CDOTAUserMsgTEProjectileLoc): unknown {
    const obj: any = {};
    message.sourceLoc !== undefined &&
      (obj.sourceLoc = message.sourceLoc ? CMsgVector.toJSON(message.sourceLoc) : undefined);
    message.target !== undefined && (obj.target = Math.round(message.target));
    message.moveSpeed !== undefined && (obj.moveSpeed = Math.round(message.moveSpeed));
    message.particleSystemHandle !== undefined && (obj.particleSystemHandle = message.particleSystemHandle);
    message.dodgeable !== undefined && (obj.dodgeable = message.dodgeable);
    message.isAttack !== undefined && (obj.isAttack = message.isAttack);
    message.expireTime !== undefined && (obj.expireTime = message.expireTime);
    message.targetLoc !== undefined &&
      (obj.targetLoc = message.targetLoc ? CMsgVector.toJSON(message.targetLoc) : undefined);
    message.colorgemcolor !== undefined && (obj.colorgemcolor = Math.round(message.colorgemcolor));
    message.launchTick !== undefined && (obj.launchTick = Math.round(message.launchTick));
    message.handle !== undefined && (obj.handle = Math.round(message.handle));
    message.source !== undefined && (obj.source = Math.round(message.source));
    message.sourceAttachment !== undefined && (obj.sourceAttachment = Math.round(message.sourceAttachment));
    if (message.particleCpData) {
      obj.particleCpData = message.particleCpData.map((e) =>
        e ? CDOTAUserMsgProjectileParticleCPData.toJSON(e) : undefined
      );
    } else {
      obj.particleCpData = [];
    }
    message.additionalParticleSystemHandle !== undefined &&
      (obj.additionalParticleSystemHandle = message.additionalParticleSystemHandle);
    return obj;
  },
};

function createBaseCDOTAUserMsgTEDestroyProjectile(): CDOTAUserMsgTEDestroyProjectile {
  return { handle: 0 };
}

export const CDOTAUserMsgTEDestroyProjectile = {
  encode(message: CDOTAUserMsgTEDestroyProjectile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.handle !== 0) {
      writer.uint32(8).int32(message.handle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTEDestroyProjectile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTEDestroyProjectile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.handle = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgTEDestroyProjectile {
    return { handle: isSet(object.handle) ? Number(object.handle) : 0 };
  },

  toJSON(message: CDOTAUserMsgTEDestroyProjectile): unknown {
    const obj: any = {};
    message.handle !== undefined && (obj.handle = Math.round(message.handle));
    return obj;
  },
};

function createBaseCDOTAUserMsgTEDotaBloodImpact(): CDOTAUserMsgTEDotaBloodImpact {
  return { entity: 0, scale: 0, xnormal: 0, ynormal: 0 };
}

export const CDOTAUserMsgTEDotaBloodImpact = {
  encode(message: CDOTAUserMsgTEDotaBloodImpact, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== 0) {
      writer.uint32(8).uint32(message.entity);
    }
    if (message.scale !== 0) {
      writer.uint32(21).float(message.scale);
    }
    if (message.xnormal !== 0) {
      writer.uint32(29).float(message.xnormal);
    }
    if (message.ynormal !== 0) {
      writer.uint32(37).float(message.ynormal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTEDotaBloodImpact {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTEDotaBloodImpact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entity = reader.uint32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.scale = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.xnormal = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.ynormal = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgTEDotaBloodImpact {
    return {
      entity: isSet(object.entity) ? Number(object.entity) : 0,
      scale: isSet(object.scale) ? Number(object.scale) : 0,
      xnormal: isSet(object.xnormal) ? Number(object.xnormal) : 0,
      ynormal: isSet(object.ynormal) ? Number(object.ynormal) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgTEDotaBloodImpact): unknown {
    const obj: any = {};
    message.entity !== undefined && (obj.entity = Math.round(message.entity));
    message.scale !== undefined && (obj.scale = message.scale);
    message.xnormal !== undefined && (obj.xnormal = message.xnormal);
    message.ynormal !== undefined && (obj.ynormal = message.ynormal);
    return obj;
  },
};

function createBaseCDOTAUserMsgAbilityPing(): CDOTAUserMsgAbilityPing {
  return {
    playerId: 0,
    abilityId: 0,
    type: 1,
    cooldownSeconds: 0,
    level: 0,
    passive: false,
    manaNeeded: 0,
    entityId: 0,
    primaryCharges: 0,
    secondaryCharges: 0,
    ctrlHeld: false,
    reclaimTime: 0,
  };
}

export const CDOTAUserMsgAbilityPing = {
  encode(message: CDOTAUserMsgAbilityPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.abilityId !== 0) {
      writer.uint32(16).int32(message.abilityId);
    }
    if (message.type !== 1) {
      writer.uint32(24).int32(message.type);
    }
    if (message.cooldownSeconds !== 0) {
      writer.uint32(32).uint32(message.cooldownSeconds);
    }
    if (message.level !== 0) {
      writer.uint32(40).uint32(message.level);
    }
    if (message.passive === true) {
      writer.uint32(48).bool(message.passive);
    }
    if (message.manaNeeded !== 0) {
      writer.uint32(56).uint32(message.manaNeeded);
    }
    if (message.entityId !== 0) {
      writer.uint32(64).uint32(message.entityId);
    }
    if (message.primaryCharges !== 0) {
      writer.uint32(72).int32(message.primaryCharges);
    }
    if (message.secondaryCharges !== 0) {
      writer.uint32(80).int32(message.secondaryCharges);
    }
    if (message.ctrlHeld === true) {
      writer.uint32(96).bool(message.ctrlHeld);
    }
    if (message.reclaimTime !== 0) {
      writer.uint32(109).float(message.reclaimTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgAbilityPing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgAbilityPing();
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

          message.abilityId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.cooldownSeconds = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.passive = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.manaNeeded = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.entityId = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.primaryCharges = reader.int32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.secondaryCharges = reader.int32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.ctrlHeld = reader.bool();
          continue;
        case 13:
          if (tag != 109) {
            break;
          }

          message.reclaimTime = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgAbilityPing {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      type: isSet(object.type) ? dotaAbilityPingTypeFromJSON(object.type) : 1,
      cooldownSeconds: isSet(object.cooldownSeconds) ? Number(object.cooldownSeconds) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      passive: isSet(object.passive) ? Boolean(object.passive) : false,
      manaNeeded: isSet(object.manaNeeded) ? Number(object.manaNeeded) : 0,
      entityId: isSet(object.entityId) ? Number(object.entityId) : 0,
      primaryCharges: isSet(object.primaryCharges) ? Number(object.primaryCharges) : 0,
      secondaryCharges: isSet(object.secondaryCharges) ? Number(object.secondaryCharges) : 0,
      ctrlHeld: isSet(object.ctrlHeld) ? Boolean(object.ctrlHeld) : false,
      reclaimTime: isSet(object.reclaimTime) ? Number(object.reclaimTime) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgAbilityPing): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.abilityId !== undefined && (obj.abilityId = Math.round(message.abilityId));
    message.type !== undefined && (obj.type = dotaAbilityPingTypeToJSON(message.type));
    message.cooldownSeconds !== undefined && (obj.cooldownSeconds = Math.round(message.cooldownSeconds));
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.passive !== undefined && (obj.passive = message.passive);
    message.manaNeeded !== undefined && (obj.manaNeeded = Math.round(message.manaNeeded));
    message.entityId !== undefined && (obj.entityId = Math.round(message.entityId));
    message.primaryCharges !== undefined && (obj.primaryCharges = Math.round(message.primaryCharges));
    message.secondaryCharges !== undefined && (obj.secondaryCharges = Math.round(message.secondaryCharges));
    message.ctrlHeld !== undefined && (obj.ctrlHeld = message.ctrlHeld);
    message.reclaimTime !== undefined && (obj.reclaimTime = message.reclaimTime);
    return obj;
  },
};

function createBaseCDOTAUserMsgTEUnitAnimation(): CDOTAUserMsgTEUnitAnimation {
  return { entity: 0, sequenceVariant: 0, playbackrate: 0, castpoint: 0, type: 0, activity: 0, lagCompensationTime: 0 };
}

export const CDOTAUserMsgTEUnitAnimation = {
  encode(message: CDOTAUserMsgTEUnitAnimation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== 0) {
      writer.uint32(8).uint32(message.entity);
    }
    if (message.sequenceVariant !== 0) {
      writer.uint32(16).int32(message.sequenceVariant);
    }
    if (message.playbackrate !== 0) {
      writer.uint32(29).float(message.playbackrate);
    }
    if (message.castpoint !== 0) {
      writer.uint32(37).float(message.castpoint);
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    if (message.activity !== 0) {
      writer.uint32(48).int32(message.activity);
    }
    if (message.lagCompensationTime !== 0) {
      writer.uint32(61).float(message.lagCompensationTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTEUnitAnimation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTEUnitAnimation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entity = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.sequenceVariant = reader.int32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.playbackrate = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.castpoint = reader.float();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.type = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.activity = reader.int32();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.lagCompensationTime = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgTEUnitAnimation {
    return {
      entity: isSet(object.entity) ? Number(object.entity) : 0,
      sequenceVariant: isSet(object.sequenceVariant) ? Number(object.sequenceVariant) : 0,
      playbackrate: isSet(object.playbackrate) ? Number(object.playbackrate) : 0,
      castpoint: isSet(object.castpoint) ? Number(object.castpoint) : 0,
      type: isSet(object.type) ? Number(object.type) : 0,
      activity: isSet(object.activity) ? Number(object.activity) : 0,
      lagCompensationTime: isSet(object.lagCompensationTime) ? Number(object.lagCompensationTime) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgTEUnitAnimation): unknown {
    const obj: any = {};
    message.entity !== undefined && (obj.entity = Math.round(message.entity));
    message.sequenceVariant !== undefined && (obj.sequenceVariant = Math.round(message.sequenceVariant));
    message.playbackrate !== undefined && (obj.playbackrate = message.playbackrate);
    message.castpoint !== undefined && (obj.castpoint = message.castpoint);
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.activity !== undefined && (obj.activity = Math.round(message.activity));
    message.lagCompensationTime !== undefined && (obj.lagCompensationTime = message.lagCompensationTime);
    return obj;
  },
};

function createBaseCDOTAUserMsgTEUnitAnimationEnd(): CDOTAUserMsgTEUnitAnimationEnd {
  return { entity: 0, snap: false };
}

export const CDOTAUserMsgTEUnitAnimationEnd = {
  encode(message: CDOTAUserMsgTEUnitAnimationEnd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== 0) {
      writer.uint32(8).uint32(message.entity);
    }
    if (message.snap === true) {
      writer.uint32(16).bool(message.snap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTEUnitAnimationEnd {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTEUnitAnimationEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entity = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.snap = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgTEUnitAnimationEnd {
    return {
      entity: isSet(object.entity) ? Number(object.entity) : 0,
      snap: isSet(object.snap) ? Boolean(object.snap) : false,
    };
  },

  toJSON(message: CDOTAUserMsgTEUnitAnimationEnd): unknown {
    const obj: any = {};
    message.entity !== undefined && (obj.entity = Math.round(message.entity));
    message.snap !== undefined && (obj.snap = message.snap);
    return obj;
  },
};

function createBaseCDOTAUserMsgShowGenericPopup(): CDOTAUserMsgShowGenericPopup {
  return { header: "", body: "", param1: "", param2: "", tintScreen: false, showNoOtherDialogs: false };
}

export const CDOTAUserMsgShowGenericPopup = {
  encode(message: CDOTAUserMsgShowGenericPopup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== "") {
      writer.uint32(10).string(message.header);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    if (message.param1 !== "") {
      writer.uint32(26).string(message.param1);
    }
    if (message.param2 !== "") {
      writer.uint32(34).string(message.param2);
    }
    if (message.tintScreen === true) {
      writer.uint32(40).bool(message.tintScreen);
    }
    if (message.showNoOtherDialogs === true) {
      writer.uint32(48).bool(message.showNoOtherDialogs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgShowGenericPopup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgShowGenericPopup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.header = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.body = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.param1 = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.param2 = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.tintScreen = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.showNoOtherDialogs = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgShowGenericPopup {
    return {
      header: isSet(object.header) ? String(object.header) : "",
      body: isSet(object.body) ? String(object.body) : "",
      param1: isSet(object.param1) ? String(object.param1) : "",
      param2: isSet(object.param2) ? String(object.param2) : "",
      tintScreen: isSet(object.tintScreen) ? Boolean(object.tintScreen) : false,
      showNoOtherDialogs: isSet(object.showNoOtherDialogs) ? Boolean(object.showNoOtherDialogs) : false,
    };
  },

  toJSON(message: CDOTAUserMsgShowGenericPopup): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header);
    message.body !== undefined && (obj.body = message.body);
    message.param1 !== undefined && (obj.param1 = message.param1);
    message.param2 !== undefined && (obj.param2 = message.param2);
    message.tintScreen !== undefined && (obj.tintScreen = message.tintScreen);
    message.showNoOtherDialogs !== undefined && (obj.showNoOtherDialogs = message.showNoOtherDialogs);
    return obj;
  },
};

function createBaseCDOTAUserMsgVoteStart(): CDOTAUserMsgVoteStart {
  return { title: "", duration: 0, choiceCount: 0, choices: [] };
}

export const CDOTAUserMsgVoteStart = {
  encode(message: CDOTAUserMsgVoteStart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.duration !== 0) {
      writer.uint32(21).float(message.duration);
    }
    if (message.choiceCount !== 0) {
      writer.uint32(24).int32(message.choiceCount);
    }
    for (const v of message.choices) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgVoteStart {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgVoteStart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.title = reader.string();
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

          message.choiceCount = reader.int32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.choices.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgVoteStart {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      choiceCount: isSet(object.choiceCount) ? Number(object.choiceCount) : 0,
      choices: Array.isArray(object?.choices) ? object.choices.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CDOTAUserMsgVoteStart): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.duration !== undefined && (obj.duration = message.duration);
    message.choiceCount !== undefined && (obj.choiceCount = Math.round(message.choiceCount));
    if (message.choices) {
      obj.choices = message.choices.map((e) => e);
    } else {
      obj.choices = [];
    }
    return obj;
  },
};

function createBaseCDOTAUserMsgVoteUpdate(): CDOTAUserMsgVoteUpdate {
  return { choiceCounts: [] };
}

export const CDOTAUserMsgVoteUpdate = {
  encode(message: CDOTAUserMsgVoteUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.choiceCounts) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgVoteUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgVoteUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.choiceCounts.push(reader.int32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.choiceCounts.push(reader.int32());
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

  fromJSON(object: any): CDOTAUserMsgVoteUpdate {
    return { choiceCounts: Array.isArray(object?.choiceCounts) ? object.choiceCounts.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CDOTAUserMsgVoteUpdate): unknown {
    const obj: any = {};
    if (message.choiceCounts) {
      obj.choiceCounts = message.choiceCounts.map((e) => Math.round(e));
    } else {
      obj.choiceCounts = [];
    }
    return obj;
  },
};

function createBaseCDOTAUserMsgVoteEnd(): CDOTAUserMsgVoteEnd {
  return { selectedChoice: 0 };
}

export const CDOTAUserMsgVoteEnd = {
  encode(message: CDOTAUserMsgVoteEnd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selectedChoice !== 0) {
      writer.uint32(8).int32(message.selectedChoice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgVoteEnd {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgVoteEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.selectedChoice = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgVoteEnd {
    return { selectedChoice: isSet(object.selectedChoice) ? Number(object.selectedChoice) : 0 };
  },

  toJSON(message: CDOTAUserMsgVoteEnd): unknown {
    const obj: any = {};
    message.selectedChoice !== undefined && (obj.selectedChoice = Math.round(message.selectedChoice));
    return obj;
  },
};

function createBaseCDOTAUserMsgBoosterStatePlayer(): CDOTAUserMsgBoosterStatePlayer {
  return { playerId: 0, bonus: 0, eventBonus: 0, bonusItemId: 0, eventBonusItemId: 0 };
}

export const CDOTAUserMsgBoosterStatePlayer = {
  encode(message: CDOTAUserMsgBoosterStatePlayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.bonus !== 0) {
      writer.uint32(21).float(message.bonus);
    }
    if (message.eventBonus !== 0) {
      writer.uint32(29).float(message.eventBonus);
    }
    if (message.bonusItemId !== 0) {
      writer.uint32(32).uint32(message.bonusItemId);
    }
    if (message.eventBonusItemId !== 0) {
      writer.uint32(40).uint32(message.eventBonusItemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgBoosterStatePlayer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgBoosterStatePlayer();
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
          if (tag != 21) {
            break;
          }

          message.bonus = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.eventBonus = reader.float();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.bonusItemId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.eventBonusItemId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgBoosterStatePlayer {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      bonus: isSet(object.bonus) ? Number(object.bonus) : 0,
      eventBonus: isSet(object.eventBonus) ? Number(object.eventBonus) : 0,
      bonusItemId: isSet(object.bonusItemId) ? Number(object.bonusItemId) : 0,
      eventBonusItemId: isSet(object.eventBonusItemId) ? Number(object.eventBonusItemId) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgBoosterStatePlayer): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.bonus !== undefined && (obj.bonus = message.bonus);
    message.eventBonus !== undefined && (obj.eventBonus = message.eventBonus);
    message.bonusItemId !== undefined && (obj.bonusItemId = Math.round(message.bonusItemId));
    message.eventBonusItemId !== undefined && (obj.eventBonusItemId = Math.round(message.eventBonusItemId));
    return obj;
  },
};

function createBaseCDOTAUserMsgBoosterState(): CDOTAUserMsgBoosterState {
  return { boostedPlayers: [] };
}

export const CDOTAUserMsgBoosterState = {
  encode(message: CDOTAUserMsgBoosterState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.boostedPlayers) {
      CDOTAUserMsgBoosterStatePlayer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgBoosterState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgBoosterState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.boostedPlayers.push(CDOTAUserMsgBoosterStatePlayer.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgBoosterState {
    return {
      boostedPlayers: Array.isArray(object?.boostedPlayers)
        ? object.boostedPlayers.map((e: any) => CDOTAUserMsgBoosterStatePlayer.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDOTAUserMsgBoosterState): unknown {
    const obj: any = {};
    if (message.boostedPlayers) {
      obj.boostedPlayers = message.boostedPlayers.map((e) => e ? CDOTAUserMsgBoosterStatePlayer.toJSON(e) : undefined);
    } else {
      obj.boostedPlayers = [];
    }
    return obj;
  },
};

function createBaseCDOTAUserMsgPlayerMMR(): CDOTAUserMsgPlayerMMR {
  return { mmr: [] };
}

export const CDOTAUserMsgPlayerMMR = {
  encode(message: CDOTAUserMsgPlayerMMR, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.mmr) {
      writer.sint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgPlayerMMR {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgPlayerMMR();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.mmr.push(reader.sint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.mmr.push(reader.sint32());
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

  fromJSON(object: any): CDOTAUserMsgPlayerMMR {
    return { mmr: Array.isArray(object?.mmr) ? object.mmr.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CDOTAUserMsgPlayerMMR): unknown {
    const obj: any = {};
    if (message.mmr) {
      obj.mmr = message.mmr.map((e) => Math.round(e));
    } else {
      obj.mmr = [];
    }
    return obj;
  },
};

function createBaseCDOTAUserMsgAbilitySteal(): CDOTAUserMsgAbilitySteal {
  return { playerId: 0, abilityId: 0, abilityLevel: 0 };
}

export const CDOTAUserMsgAbilitySteal = {
  encode(message: CDOTAUserMsgAbilitySteal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.abilityId !== 0) {
      writer.uint32(16).int32(message.abilityId);
    }
    if (message.abilityLevel !== 0) {
      writer.uint32(24).uint32(message.abilityLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgAbilitySteal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgAbilitySteal();
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

          message.abilityId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.abilityLevel = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgAbilitySteal {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      abilityLevel: isSet(object.abilityLevel) ? Number(object.abilityLevel) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgAbilitySteal): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.abilityId !== undefined && (obj.abilityId = Math.round(message.abilityId));
    message.abilityLevel !== undefined && (obj.abilityLevel = Math.round(message.abilityLevel));
    return obj;
  },
};

function createBaseCDOTAUserMsgStatsHeroLookup(): CDOTAUserMsgStatsHeroLookup {
  return { playerId: 0, heroId: 0, heroName: "", persona: "" };
}

export const CDOTAUserMsgStatsHeroLookup = {
  encode(message: CDOTAUserMsgStatsHeroLookup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.heroId !== 0) {
      writer.uint32(16).int32(message.heroId);
    }
    if (message.heroName !== "") {
      writer.uint32(26).string(message.heroName);
    }
    if (message.persona !== "") {
      writer.uint32(34).string(message.persona);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgStatsHeroLookup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsHeroLookup();
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

          message.heroId = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.heroName = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.persona = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgStatsHeroLookup {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      heroName: isSet(object.heroName) ? String(object.heroName) : "",
      persona: isSet(object.persona) ? String(object.persona) : "",
    };
  },

  toJSON(message: CDOTAUserMsgStatsHeroLookup): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.heroName !== undefined && (obj.heroName = message.heroName);
    message.persona !== undefined && (obj.persona = message.persona);
    return obj;
  },
};

function createBaseCDOTAUserMsgStatsHeroPositionInfo(): CDOTAUserMsgStatsHeroPositionInfo {
  return { averagePosition: 0, positionDetails: [] };
}

export const CDOTAUserMsgStatsHeroPositionInfo = {
  encode(message: CDOTAUserMsgStatsHeroPositionInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.averagePosition !== 0) {
      writer.uint32(13).float(message.averagePosition);
    }
    for (const v of message.positionDetails) {
      CDOTAUserMsgStatsHeroPositionInfo_PositionPair.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgStatsHeroPositionInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsHeroPositionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.averagePosition = reader.float();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.positionDetails.push(CDOTAUserMsgStatsHeroPositionInfo_PositionPair.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgStatsHeroPositionInfo {
    return {
      averagePosition: isSet(object.averagePosition) ? Number(object.averagePosition) : 0,
      positionDetails: Array.isArray(object?.positionDetails)
        ? object.positionDetails.map((e: any) => CDOTAUserMsgStatsHeroPositionInfo_PositionPair.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDOTAUserMsgStatsHeroPositionInfo): unknown {
    const obj: any = {};
    message.averagePosition !== undefined && (obj.averagePosition = message.averagePosition);
    if (message.positionDetails) {
      obj.positionDetails = message.positionDetails.map((e) =>
        e ? CDOTAUserMsgStatsHeroPositionInfo_PositionPair.toJSON(e) : undefined
      );
    } else {
      obj.positionDetails = [];
    }
    return obj;
  },
};

function createBaseCDOTAUserMsgStatsHeroPositionInfo_PositionPair(): CDOTAUserMsgStatsHeroPositionInfo_PositionPair {
  return { positionCategory: 0, positionCount: 0 };
}

export const CDOTAUserMsgStatsHeroPositionInfo_PositionPair = {
  encode(
    message: CDOTAUserMsgStatsHeroPositionInfo_PositionPair,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.positionCategory !== 0) {
      writer.uint32(8).int32(message.positionCategory);
    }
    if (message.positionCount !== 0) {
      writer.uint32(16).uint32(message.positionCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgStatsHeroPositionInfo_PositionPair {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsHeroPositionInfo_PositionPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.positionCategory = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.positionCount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgStatsHeroPositionInfo_PositionPair {
    return {
      positionCategory: isSet(object.positionCategory) ? dotaPositionCategoryFromJSON(object.positionCategory) : 0,
      positionCount: isSet(object.positionCount) ? Number(object.positionCount) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgStatsHeroPositionInfo_PositionPair): unknown {
    const obj: any = {};
    message.positionCategory !== undefined &&
      (obj.positionCategory = dotaPositionCategoryToJSON(message.positionCategory));
    message.positionCount !== undefined && (obj.positionCount = Math.round(message.positionCount));
    return obj;
  },
};

function createBaseCDOTAUserMsgStatsHeroMinuteDetails(): CDOTAUserMsgStatsHeroMinuteDetails {
  return {
    lastHits: 0,
    heroKills: 0,
    heroDamage: 0,
    towerDamage: 0,
    positionInfo: undefined,
    totalXp: 0,
    netWorth: 0,
    harvestedCreepGold: 0,
    claimedFarm: 0,
    wardsPlaced: 0,
    runesCollected: 0,
    tpsUsed: 0,
    manaSpent: [],
    damageAbsorbed: [],
    damageDone: [],
  };
}

export const CDOTAUserMsgStatsHeroMinuteDetails = {
  encode(message: CDOTAUserMsgStatsHeroMinuteDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastHits !== 0) {
      writer.uint32(8).uint32(message.lastHits);
    }
    if (message.heroKills !== 0) {
      writer.uint32(16).uint32(message.heroKills);
    }
    if (message.heroDamage !== 0) {
      writer.uint32(24).uint32(message.heroDamage);
    }
    if (message.towerDamage !== 0) {
      writer.uint32(32).uint32(message.towerDamage);
    }
    if (message.positionInfo !== undefined) {
      CDOTAUserMsgStatsHeroPositionInfo.encode(message.positionInfo, writer.uint32(42).fork()).ldelim();
    }
    if (message.totalXp !== 0) {
      writer.uint32(48).uint32(message.totalXp);
    }
    if (message.netWorth !== 0) {
      writer.uint32(56).uint32(message.netWorth);
    }
    if (message.harvestedCreepGold !== 0) {
      writer.uint32(64).uint32(message.harvestedCreepGold);
    }
    if (message.claimedFarm !== 0) {
      writer.uint32(72).uint32(message.claimedFarm);
    }
    if (message.wardsPlaced !== 0) {
      writer.uint32(80).uint32(message.wardsPlaced);
    }
    if (message.runesCollected !== 0) {
      writer.uint32(88).uint32(message.runesCollected);
    }
    if (message.tpsUsed !== 0) {
      writer.uint32(96).uint32(message.tpsUsed);
    }
    writer.uint32(106).fork();
    for (const v of message.manaSpent) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(114).fork();
    for (const v of message.damageAbsorbed) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(122).fork();
    for (const v of message.damageDone) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgStatsHeroMinuteDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsHeroMinuteDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.lastHits = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.heroKills = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.heroDamage = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.towerDamage = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.positionInfo = CDOTAUserMsgStatsHeroPositionInfo.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.totalXp = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.netWorth = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.harvestedCreepGold = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.claimedFarm = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.wardsPlaced = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.runesCollected = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.tpsUsed = reader.uint32();
          continue;
        case 13:
          if (tag == 104) {
            message.manaSpent.push(reader.uint32());
            continue;
          }

          if (tag == 106) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.manaSpent.push(reader.uint32());
            }

            continue;
          }

          break;
        case 14:
          if (tag == 112) {
            message.damageAbsorbed.push(reader.uint32());
            continue;
          }

          if (tag == 114) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.damageAbsorbed.push(reader.uint32());
            }

            continue;
          }

          break;
        case 15:
          if (tag == 120) {
            message.damageDone.push(reader.uint32());
            continue;
          }

          if (tag == 122) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.damageDone.push(reader.uint32());
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

  fromJSON(object: any): CDOTAUserMsgStatsHeroMinuteDetails {
    return {
      lastHits: isSet(object.lastHits) ? Number(object.lastHits) : 0,
      heroKills: isSet(object.heroKills) ? Number(object.heroKills) : 0,
      heroDamage: isSet(object.heroDamage) ? Number(object.heroDamage) : 0,
      towerDamage: isSet(object.towerDamage) ? Number(object.towerDamage) : 0,
      positionInfo: isSet(object.positionInfo)
        ? CDOTAUserMsgStatsHeroPositionInfo.fromJSON(object.positionInfo)
        : undefined,
      totalXp: isSet(object.totalXp) ? Number(object.totalXp) : 0,
      netWorth: isSet(object.netWorth) ? Number(object.netWorth) : 0,
      harvestedCreepGold: isSet(object.harvestedCreepGold) ? Number(object.harvestedCreepGold) : 0,
      claimedFarm: isSet(object.claimedFarm) ? Number(object.claimedFarm) : 0,
      wardsPlaced: isSet(object.wardsPlaced) ? Number(object.wardsPlaced) : 0,
      runesCollected: isSet(object.runesCollected) ? Number(object.runesCollected) : 0,
      tpsUsed: isSet(object.tpsUsed) ? Number(object.tpsUsed) : 0,
      manaSpent: Array.isArray(object?.manaSpent) ? object.manaSpent.map((e: any) => Number(e)) : [],
      damageAbsorbed: Array.isArray(object?.damageAbsorbed) ? object.damageAbsorbed.map((e: any) => Number(e)) : [],
      damageDone: Array.isArray(object?.damageDone) ? object.damageDone.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CDOTAUserMsgStatsHeroMinuteDetails): unknown {
    const obj: any = {};
    message.lastHits !== undefined && (obj.lastHits = Math.round(message.lastHits));
    message.heroKills !== undefined && (obj.heroKills = Math.round(message.heroKills));
    message.heroDamage !== undefined && (obj.heroDamage = Math.round(message.heroDamage));
    message.towerDamage !== undefined && (obj.towerDamage = Math.round(message.towerDamage));
    message.positionInfo !== undefined && (obj.positionInfo = message.positionInfo
      ? CDOTAUserMsgStatsHeroPositionInfo.toJSON(message.positionInfo)
      : undefined);
    message.totalXp !== undefined && (obj.totalXp = Math.round(message.totalXp));
    message.netWorth !== undefined && (obj.netWorth = Math.round(message.netWorth));
    message.harvestedCreepGold !== undefined && (obj.harvestedCreepGold = Math.round(message.harvestedCreepGold));
    message.claimedFarm !== undefined && (obj.claimedFarm = Math.round(message.claimedFarm));
    message.wardsPlaced !== undefined && (obj.wardsPlaced = Math.round(message.wardsPlaced));
    message.runesCollected !== undefined && (obj.runesCollected = Math.round(message.runesCollected));
    message.tpsUsed !== undefined && (obj.tpsUsed = Math.round(message.tpsUsed));
    if (message.manaSpent) {
      obj.manaSpent = message.manaSpent.map((e) => Math.round(e));
    } else {
      obj.manaSpent = [];
    }
    if (message.damageAbsorbed) {
      obj.damageAbsorbed = message.damageAbsorbed.map((e) => Math.round(e));
    } else {
      obj.damageAbsorbed = [];
    }
    if (message.damageDone) {
      obj.damageDone = message.damageDone.map((e) => Math.round(e));
    } else {
      obj.damageDone = [];
    }
    return obj;
  },
};

function createBaseCDOTAUserMsgStatsTeamMinuteDetails(): CDOTAUserMsgStatsTeamMinuteDetails {
  return {
    playerStats: [],
    towerKills: 0,
    barrackKills: 0,
    availableLaneCreepGold: 0,
    balanceKillValue: 0,
    balanceTowerValue: 0,
    balanceBarracksValue: 0,
    balanceGoldValue: 0,
    balanceXpValue: 0,
    lanePerformance: [],
  };
}

export const CDOTAUserMsgStatsTeamMinuteDetails = {
  encode(message: CDOTAUserMsgStatsTeamMinuteDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.playerStats) {
      CDOTAUserMsgStatsHeroMinuteDetails.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.towerKills !== 0) {
      writer.uint32(16).uint32(message.towerKills);
    }
    if (message.barrackKills !== 0) {
      writer.uint32(24).uint32(message.barrackKills);
    }
    if (message.availableLaneCreepGold !== 0) {
      writer.uint32(32).uint32(message.availableLaneCreepGold);
    }
    if (message.balanceKillValue !== 0) {
      writer.uint32(40).uint32(message.balanceKillValue);
    }
    if (message.balanceTowerValue !== 0) {
      writer.uint32(48).uint32(message.balanceTowerValue);
    }
    if (message.balanceBarracksValue !== 0) {
      writer.uint32(56).uint32(message.balanceBarracksValue);
    }
    if (message.balanceGoldValue !== 0) {
      writer.uint32(64).uint32(message.balanceGoldValue);
    }
    if (message.balanceXpValue !== 0) {
      writer.uint32(72).uint32(message.balanceXpValue);
    }
    for (const v of message.lanePerformance) {
      CDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgStatsTeamMinuteDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsTeamMinuteDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.playerStats.push(CDOTAUserMsgStatsHeroMinuteDetails.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.towerKills = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.barrackKills = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.availableLaneCreepGold = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.balanceKillValue = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.balanceTowerValue = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.balanceBarracksValue = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.balanceGoldValue = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.balanceXpValue = reader.uint32();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.lanePerformance.push(
            CDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgStatsTeamMinuteDetails {
    return {
      playerStats: Array.isArray(object?.playerStats)
        ? object.playerStats.map((e: any) => CDOTAUserMsgStatsHeroMinuteDetails.fromJSON(e))
        : [],
      towerKills: isSet(object.towerKills) ? Number(object.towerKills) : 0,
      barrackKills: isSet(object.barrackKills) ? Number(object.barrackKills) : 0,
      availableLaneCreepGold: isSet(object.availableLaneCreepGold) ? Number(object.availableLaneCreepGold) : 0,
      balanceKillValue: isSet(object.balanceKillValue) ? Number(object.balanceKillValue) : 0,
      balanceTowerValue: isSet(object.balanceTowerValue) ? Number(object.balanceTowerValue) : 0,
      balanceBarracksValue: isSet(object.balanceBarracksValue) ? Number(object.balanceBarracksValue) : 0,
      balanceGoldValue: isSet(object.balanceGoldValue) ? Number(object.balanceGoldValue) : 0,
      balanceXpValue: isSet(object.balanceXpValue) ? Number(object.balanceXpValue) : 0,
      lanePerformance: Array.isArray(object?.lanePerformance)
        ? object.lanePerformance.map((e: any) => CDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDOTAUserMsgStatsTeamMinuteDetails): unknown {
    const obj: any = {};
    if (message.playerStats) {
      obj.playerStats = message.playerStats.map((e) => e ? CDOTAUserMsgStatsHeroMinuteDetails.toJSON(e) : undefined);
    } else {
      obj.playerStats = [];
    }
    message.towerKills !== undefined && (obj.towerKills = Math.round(message.towerKills));
    message.barrackKills !== undefined && (obj.barrackKills = Math.round(message.barrackKills));
    message.availableLaneCreepGold !== undefined &&
      (obj.availableLaneCreepGold = Math.round(message.availableLaneCreepGold));
    message.balanceKillValue !== undefined && (obj.balanceKillValue = Math.round(message.balanceKillValue));
    message.balanceTowerValue !== undefined && (obj.balanceTowerValue = Math.round(message.balanceTowerValue));
    message.balanceBarracksValue !== undefined && (obj.balanceBarracksValue = Math.round(message.balanceBarracksValue));
    message.balanceGoldValue !== undefined && (obj.balanceGoldValue = Math.round(message.balanceGoldValue));
    message.balanceXpValue !== undefined && (obj.balanceXpValue = Math.round(message.balanceXpValue));
    if (message.lanePerformance) {
      obj.lanePerformance = message.lanePerformance.map((e) =>
        e ? CDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance.toJSON(e) : undefined
      );
    } else {
      obj.lanePerformance = [];
    }
    return obj;
  },
};

function createBaseCDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance(): CDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance {
  return { locationCategory: 0, statType: 0, value: 0 };
}

export const CDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance = {
  encode(
    message: CDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.locationCategory !== 0) {
      writer.uint32(8).uint32(message.locationCategory);
    }
    if (message.statType !== 0) {
      writer.uint32(16).uint32(message.statType);
    }
    if (message.value !== 0) {
      writer.uint32(24).uint32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.locationCategory = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.statType = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.value = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance {
    return {
      locationCategory: isSet(object.locationCategory) ? Number(object.locationCategory) : 0,
      statType: isSet(object.statType) ? Number(object.statType) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance): unknown {
    const obj: any = {};
    message.locationCategory !== undefined && (obj.locationCategory = Math.round(message.locationCategory));
    message.statType !== undefined && (obj.statType = Math.round(message.statType));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },
};

function createBaseCDOTAUserMsgStatsPlayerKillShare(): CDOTAUserMsgStatsPlayerKillShare {
  return { playerId: 0, killSharePercent: 0, playerLocX: 0, playerLocY: 0, healthPercent: 0, manaPercent: 0 };
}

export const CDOTAUserMsgStatsPlayerKillShare = {
  encode(message: CDOTAUserMsgStatsPlayerKillShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.killSharePercent !== 0) {
      writer.uint32(21).float(message.killSharePercent);
    }
    if (message.playerLocX !== 0) {
      writer.uint32(29).float(message.playerLocX);
    }
    if (message.playerLocY !== 0) {
      writer.uint32(37).float(message.playerLocY);
    }
    if (message.healthPercent !== 0) {
      writer.uint32(45).float(message.healthPercent);
    }
    if (message.manaPercent !== 0) {
      writer.uint32(53).float(message.manaPercent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgStatsPlayerKillShare {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsPlayerKillShare();
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
          if (tag != 21) {
            break;
          }

          message.killSharePercent = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.playerLocX = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.playerLocY = reader.float();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.healthPercent = reader.float();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.manaPercent = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgStatsPlayerKillShare {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      killSharePercent: isSet(object.killSharePercent) ? Number(object.killSharePercent) : 0,
      playerLocX: isSet(object.playerLocX) ? Number(object.playerLocX) : 0,
      playerLocY: isSet(object.playerLocY) ? Number(object.playerLocY) : 0,
      healthPercent: isSet(object.healthPercent) ? Number(object.healthPercent) : 0,
      manaPercent: isSet(object.manaPercent) ? Number(object.manaPercent) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgStatsPlayerKillShare): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.killSharePercent !== undefined && (obj.killSharePercent = message.killSharePercent);
    message.playerLocX !== undefined && (obj.playerLocX = message.playerLocX);
    message.playerLocY !== undefined && (obj.playerLocY = message.playerLocY);
    message.healthPercent !== undefined && (obj.healthPercent = message.healthPercent);
    message.manaPercent !== undefined && (obj.manaPercent = message.manaPercent);
    return obj;
  },
};

function createBaseCDOTAUserMsgStatsKillDetails(): CDOTAUserMsgStatsKillDetails {
  return { victimId: 0, killShares: [], damageToKill: 0, effectiveHealth: 0, deathTime: 0, killerId: 0 };
}

export const CDOTAUserMsgStatsKillDetails = {
  encode(message: CDOTAUserMsgStatsKillDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.victimId !== 0) {
      writer.uint32(8).int32(message.victimId);
    }
    for (const v of message.killShares) {
      CDOTAUserMsgStatsPlayerKillShare.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.damageToKill !== 0) {
      writer.uint32(24).uint32(message.damageToKill);
    }
    if (message.effectiveHealth !== 0) {
      writer.uint32(32).uint32(message.effectiveHealth);
    }
    if (message.deathTime !== 0) {
      writer.uint32(45).float(message.deathTime);
    }
    if (message.killerId !== 0) {
      writer.uint32(48).int32(message.killerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgStatsKillDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsKillDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.victimId = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.killShares.push(CDOTAUserMsgStatsPlayerKillShare.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.damageToKill = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.effectiveHealth = reader.uint32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.deathTime = reader.float();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.killerId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgStatsKillDetails {
    return {
      victimId: isSet(object.victimId) ? Number(object.victimId) : 0,
      killShares: Array.isArray(object?.killShares)
        ? object.killShares.map((e: any) => CDOTAUserMsgStatsPlayerKillShare.fromJSON(e))
        : [],
      damageToKill: isSet(object.damageToKill) ? Number(object.damageToKill) : 0,
      effectiveHealth: isSet(object.effectiveHealth) ? Number(object.effectiveHealth) : 0,
      deathTime: isSet(object.deathTime) ? Number(object.deathTime) : 0,
      killerId: isSet(object.killerId) ? Number(object.killerId) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgStatsKillDetails): unknown {
    const obj: any = {};
    message.victimId !== undefined && (obj.victimId = Math.round(message.victimId));
    if (message.killShares) {
      obj.killShares = message.killShares.map((e) => e ? CDOTAUserMsgStatsPlayerKillShare.toJSON(e) : undefined);
    } else {
      obj.killShares = [];
    }
    message.damageToKill !== undefined && (obj.damageToKill = Math.round(message.damageToKill));
    message.effectiveHealth !== undefined && (obj.effectiveHealth = Math.round(message.effectiveHealth));
    message.deathTime !== undefined && (obj.deathTime = message.deathTime);
    message.killerId !== undefined && (obj.killerId = Math.round(message.killerId));
    return obj;
  },
};

function createBaseCDOTAUserMsgStatsMatchDetails(): CDOTAUserMsgStatsMatchDetails {
  return { heroLookup: [], radiantStats: [], direStats: [], radiantKills: [], direKills: [], fightDetails: [] };
}

export const CDOTAUserMsgStatsMatchDetails = {
  encode(message: CDOTAUserMsgStatsMatchDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.heroLookup) {
      CDOTAUserMsgStatsHeroLookup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.radiantStats) {
      CDOTAUserMsgStatsTeamMinuteDetails.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.direStats) {
      CDOTAUserMsgStatsTeamMinuteDetails.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.radiantKills) {
      CDOTAUserMsgStatsKillDetails.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.direKills) {
      CDOTAUserMsgStatsKillDetails.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.fightDetails) {
      CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgStatsMatchDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsMatchDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.heroLookup.push(CDOTAUserMsgStatsHeroLookup.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.radiantStats.push(CDOTAUserMsgStatsTeamMinuteDetails.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.direStats.push(CDOTAUserMsgStatsTeamMinuteDetails.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.radiantKills.push(CDOTAUserMsgStatsKillDetails.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.direKills.push(CDOTAUserMsgStatsKillDetails.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.fightDetails.push(
            CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgStatsMatchDetails {
    return {
      heroLookup: Array.isArray(object?.heroLookup)
        ? object.heroLookup.map((e: any) => CDOTAUserMsgStatsHeroLookup.fromJSON(e))
        : [],
      radiantStats: Array.isArray(object?.radiantStats)
        ? object.radiantStats.map((e: any) => CDOTAUserMsgStatsTeamMinuteDetails.fromJSON(e))
        : [],
      direStats: Array.isArray(object?.direStats)
        ? object.direStats.map((e: any) => CDOTAUserMsgStatsTeamMinuteDetails.fromJSON(e))
        : [],
      radiantKills: Array.isArray(object?.radiantKills)
        ? object.radiantKills.map((e: any) => CDOTAUserMsgStatsKillDetails.fromJSON(e))
        : [],
      direKills: Array.isArray(object?.direKills)
        ? object.direKills.map((e: any) => CDOTAUserMsgStatsKillDetails.fromJSON(e))
        : [],
      fightDetails: Array.isArray(object?.fightDetails)
        ? object.fightDetails.map((e: any) => CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDOTAUserMsgStatsMatchDetails): unknown {
    const obj: any = {};
    if (message.heroLookup) {
      obj.heroLookup = message.heroLookup.map((e) => e ? CDOTAUserMsgStatsHeroLookup.toJSON(e) : undefined);
    } else {
      obj.heroLookup = [];
    }
    if (message.radiantStats) {
      obj.radiantStats = message.radiantStats.map((e) => e ? CDOTAUserMsgStatsTeamMinuteDetails.toJSON(e) : undefined);
    } else {
      obj.radiantStats = [];
    }
    if (message.direStats) {
      obj.direStats = message.direStats.map((e) => e ? CDOTAUserMsgStatsTeamMinuteDetails.toJSON(e) : undefined);
    } else {
      obj.direStats = [];
    }
    if (message.radiantKills) {
      obj.radiantKills = message.radiantKills.map((e) => e ? CDOTAUserMsgStatsKillDetails.toJSON(e) : undefined);
    } else {
      obj.radiantKills = [];
    }
    if (message.direKills) {
      obj.direKills = message.direKills.map((e) => e ? CDOTAUserMsgStatsKillDetails.toJSON(e) : undefined);
    } else {
      obj.direKills = [];
    }
    if (message.fightDetails) {
      obj.fightDetails = message.fightDetails.map((e) =>
        e ? CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails.toJSON(e) : undefined
      );
    } else {
      obj.fightDetails = [];
    }
    return obj;
  },
};

function createBaseCDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails(): CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails {
  return { participants: [], deaths: [], goldDelta: 0, xpDelta: 0 };
}

export const CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails = {
  encode(
    message: CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.participants) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.deaths) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.goldDelta !== 0) {
      writer.uint32(24).uint32(message.goldDelta);
    }
    if (message.xpDelta !== 0) {
      writer.uint32(32).uint32(message.xpDelta);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.participants.push(reader.int32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.participants.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag == 16) {
            message.deaths.push(reader.int32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.deaths.push(reader.int32());
            }

            continue;
          }

          break;
        case 3:
          if (tag != 24) {
            break;
          }

          message.goldDelta = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.xpDelta = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails {
    return {
      participants: Array.isArray(object?.participants) ? object.participants.map((e: any) => Number(e)) : [],
      deaths: Array.isArray(object?.deaths) ? object.deaths.map((e: any) => Number(e)) : [],
      goldDelta: isSet(object.goldDelta) ? Number(object.goldDelta) : 0,
      xpDelta: isSet(object.xpDelta) ? Number(object.xpDelta) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails): unknown {
    const obj: any = {};
    if (message.participants) {
      obj.participants = message.participants.map((e) => Math.round(e));
    } else {
      obj.participants = [];
    }
    if (message.deaths) {
      obj.deaths = message.deaths.map((e) => Math.round(e));
    } else {
      obj.deaths = [];
    }
    message.goldDelta !== undefined && (obj.goldDelta = Math.round(message.goldDelta));
    message.xpDelta !== undefined && (obj.xpDelta = Math.round(message.xpDelta));
    return obj;
  },
};

function createBaseCDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails(): CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails {
  return { startTime: 0, endTime: 0, radiantFightDetails: undefined, direFightDetails: undefined };
}

export const CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails = {
  encode(
    message: CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.startTime !== 0) {
      writer.uint32(13).float(message.startTime);
    }
    if (message.endTime !== 0) {
      writer.uint32(21).float(message.endTime);
    }
    if (message.radiantFightDetails !== undefined) {
      CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails.encode(
        message.radiantFightDetails,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.direFightDetails !== undefined) {
      CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails.encode(
        message.direFightDetails,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.startTime = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.endTime = reader.float();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.radiantFightDetails = CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.direFightDetails = CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails {
    return {
      startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
      endTime: isSet(object.endTime) ? Number(object.endTime) : 0,
      radiantFightDetails: isSet(object.radiantFightDetails)
        ? CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails.fromJSON(object.radiantFightDetails)
        : undefined,
      direFightDetails: isSet(object.direFightDetails)
        ? CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails.fromJSON(object.direFightDetails)
        : undefined,
    };
  },

  toJSON(message: CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails): unknown {
    const obj: any = {};
    message.startTime !== undefined && (obj.startTime = message.startTime);
    message.endTime !== undefined && (obj.endTime = message.endTime);
    message.radiantFightDetails !== undefined && (obj.radiantFightDetails = message.radiantFightDetails
      ? CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails.toJSON(message.radiantFightDetails)
      : undefined);
    message.direFightDetails !== undefined && (obj.direFightDetails = message.direFightDetails
      ? CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails.toJSON(message.direFightDetails)
      : undefined);
    return obj;
  },
};

function createBaseCDOTAUserMsgMiniTaunt(): CDOTAUserMsgMiniTaunt {
  return { tauntingPlayerId: 0 };
}

export const CDOTAUserMsgMiniTaunt = {
  encode(message: CDOTAUserMsgMiniTaunt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tauntingPlayerId !== 0) {
      writer.uint32(8).int32(message.tauntingPlayerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMiniTaunt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMiniTaunt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.tauntingPlayerId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgMiniTaunt {
    return { tauntingPlayerId: isSet(object.tauntingPlayerId) ? Number(object.tauntingPlayerId) : 0 };
  },

  toJSON(message: CDOTAUserMsgMiniTaunt): unknown {
    const obj: any = {};
    message.tauntingPlayerId !== undefined && (obj.tauntingPlayerId = Math.round(message.tauntingPlayerId));
    return obj;
  },
};

function createBaseCDOTAUserMsgSpeechBubble(): CDOTAUserMsgSpeechBubble {
  return { destroyAll: false };
}

export const CDOTAUserMsgSpeechBubble = {
  encode(message: CDOTAUserMsgSpeechBubble, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destroyAll === true) {
      writer.uint32(8).bool(message.destroyAll);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSpeechBubble {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSpeechBubble();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.destroyAll = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgSpeechBubble {
    return { destroyAll: isSet(object.destroyAll) ? Boolean(object.destroyAll) : false };
  },

  toJSON(message: CDOTAUserMsgSpeechBubble): unknown {
    const obj: any = {};
    message.destroyAll !== undefined && (obj.destroyAll = message.destroyAll);
    return obj;
  },
};

function createBaseCDOTAUserMsgCustomHeaderMessage(): CDOTAUserMsgCustomHeaderMessage {
  return { playerId: 0, duration: 0, message: "", value: 0 };
}

export const CDOTAUserMsgCustomHeaderMessage = {
  encode(message: CDOTAUserMsgCustomHeaderMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.duration !== 0) {
      writer.uint32(21).float(message.duration);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.value !== 0) {
      writer.uint32(32).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCustomHeaderMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCustomHeaderMessage();
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
          if (tag != 21) {
            break;
          }

          message.duration = reader.float();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.message = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.value = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgCustomHeaderMessage {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgCustomHeaderMessage): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.duration !== undefined && (obj.duration = message.duration);
    message.message !== undefined && (obj.message = message.message);
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },
};

function createBaseCMsgHeroAbilityStat(): CMsgHeroAbilityStat {
  return { statType: 0, intValue: 0, floatValue: 0 };
}

export const CMsgHeroAbilityStat = {
  encode(message: CMsgHeroAbilityStat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statType !== 0) {
      writer.uint32(8).int32(message.statType);
    }
    if (message.intValue !== 0) {
      writer.uint32(16).int32(message.intValue);
    }
    if (message.floatValue !== 0) {
      writer.uint32(29).float(message.floatValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHeroAbilityStat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHeroAbilityStat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.statType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.intValue = reader.int32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.floatValue = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgHeroAbilityStat {
    return {
      statType: isSet(object.statType) ? eHeroStatTypeFromJSON(object.statType) : 0,
      intValue: isSet(object.intValue) ? Number(object.intValue) : 0,
      floatValue: isSet(object.floatValue) ? Number(object.floatValue) : 0,
    };
  },

  toJSON(message: CMsgHeroAbilityStat): unknown {
    const obj: any = {};
    message.statType !== undefined && (obj.statType = eHeroStatTypeToJSON(message.statType));
    message.intValue !== undefined && (obj.intValue = Math.round(message.intValue));
    message.floatValue !== undefined && (obj.floatValue = message.floatValue);
    return obj;
  },
};

function createBaseCMsgCombatAnalyzerPlayerStat(): CMsgCombatAnalyzerPlayerStat {
  return { accountId: 0, heroAbilityStats: [] };
}

export const CMsgCombatAnalyzerPlayerStat = {
  encode(message: CMsgCombatAnalyzerPlayerStat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    for (const v of message.heroAbilityStats) {
      CMsgHeroAbilityStat.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCombatAnalyzerPlayerStat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCombatAnalyzerPlayerStat();
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
          if (tag != 18) {
            break;
          }

          message.heroAbilityStats.push(CMsgHeroAbilityStat.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgCombatAnalyzerPlayerStat {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      heroAbilityStats: Array.isArray(object?.heroAbilityStats)
        ? object.heroAbilityStats.map((e: any) => CMsgHeroAbilityStat.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgCombatAnalyzerPlayerStat): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    if (message.heroAbilityStats) {
      obj.heroAbilityStats = message.heroAbilityStats.map((e) => e ? CMsgHeroAbilityStat.toJSON(e) : undefined);
    } else {
      obj.heroAbilityStats = [];
    }
    return obj;
  },
};

function createBaseCMsgCombatAnalyzerStats(): CMsgCombatAnalyzerStats {
  return { matchId: "0", playerStats: [] };
}

export const CMsgCombatAnalyzerStats = {
  encode(message: CMsgCombatAnalyzerStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    for (const v of message.playerStats) {
      CMsgCombatAnalyzerPlayerStat.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCombatAnalyzerStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCombatAnalyzerStats();
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
          if (tag != 18) {
            break;
          }

          message.playerStats.push(CMsgCombatAnalyzerPlayerStat.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgCombatAnalyzerStats {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      playerStats: Array.isArray(object?.playerStats)
        ? object.playerStats.map((e: any) => CMsgCombatAnalyzerPlayerStat.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgCombatAnalyzerStats): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    if (message.playerStats) {
      obj.playerStats = message.playerStats.map((e) => e ? CMsgCombatAnalyzerPlayerStat.toJSON(e) : undefined);
    } else {
      obj.playerStats = [];
    }
    return obj;
  },
};

function createBaseCDOTAUserMsgBeastChat(): CDOTAUserMsgBeastChat {
  return { team: 0, format: "", message: "", target: "" };
}

export const CDOTAUserMsgBeastChat = {
  encode(message: CDOTAUserMsgBeastChat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.team !== 0) {
      writer.uint32(8).uint32(message.team);
    }
    if (message.format !== "") {
      writer.uint32(18).string(message.format);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.target !== "") {
      writer.uint32(34).string(message.target);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgBeastChat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgBeastChat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.team = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.format = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.message = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.target = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgBeastChat {
    return {
      team: isSet(object.team) ? Number(object.team) : 0,
      format: isSet(object.format) ? String(object.format) : "",
      message: isSet(object.message) ? String(object.message) : "",
      target: isSet(object.target) ? String(object.target) : "",
    };
  },

  toJSON(message: CDOTAUserMsgBeastChat): unknown {
    const obj: any = {};
    message.team !== undefined && (obj.team = Math.round(message.team));
    message.format !== undefined && (obj.format = message.format);
    message.message !== undefined && (obj.message = message.message);
    message.target !== undefined && (obj.target = message.target);
    return obj;
  },
};

function createBaseCDOTAUserMsgCustomHudElementCreate(): CDOTAUserMsgCustomHudElementCreate {
  return { elementId: "", layoutFilename: "", data: Buffer.alloc(0) };
}

export const CDOTAUserMsgCustomHudElementCreate = {
  encode(message: CDOTAUserMsgCustomHudElementCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.elementId !== "") {
      writer.uint32(10).string(message.elementId);
    }
    if (message.layoutFilename !== "") {
      writer.uint32(18).string(message.layoutFilename);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCustomHudElementCreate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCustomHudElementCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.elementId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.layoutFilename = reader.string();
          continue;
        case 3:
          if (tag != 26) {
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

  fromJSON(object: any): CDOTAUserMsgCustomHudElementCreate {
    return {
      elementId: isSet(object.elementId) ? String(object.elementId) : "",
      layoutFilename: isSet(object.layoutFilename) ? String(object.layoutFilename) : "",
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CDOTAUserMsgCustomHudElementCreate): unknown {
    const obj: any = {};
    message.elementId !== undefined && (obj.elementId = message.elementId);
    message.layoutFilename !== undefined && (obj.layoutFilename = message.layoutFilename);
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },
};

function createBaseCDOTAUserMsgCustomHudElementModify(): CDOTAUserMsgCustomHudElementModify {
  return { elementId: "", modifyVisible: false, data: Buffer.alloc(0) };
}

export const CDOTAUserMsgCustomHudElementModify = {
  encode(message: CDOTAUserMsgCustomHudElementModify, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.elementId !== "") {
      writer.uint32(10).string(message.elementId);
    }
    if (message.modifyVisible === true) {
      writer.uint32(16).bool(message.modifyVisible);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCustomHudElementModify {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCustomHudElementModify();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.elementId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.modifyVisible = reader.bool();
          continue;
        case 3:
          if (tag != 26) {
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

  fromJSON(object: any): CDOTAUserMsgCustomHudElementModify {
    return {
      elementId: isSet(object.elementId) ? String(object.elementId) : "",
      modifyVisible: isSet(object.modifyVisible) ? Boolean(object.modifyVisible) : false,
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CDOTAUserMsgCustomHudElementModify): unknown {
    const obj: any = {};
    message.elementId !== undefined && (obj.elementId = message.elementId);
    message.modifyVisible !== undefined && (obj.modifyVisible = message.modifyVisible);
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },
};

function createBaseCDOTAUserMsgCustomHudElementDestroy(): CDOTAUserMsgCustomHudElementDestroy {
  return { elementId: "" };
}

export const CDOTAUserMsgCustomHudElementDestroy = {
  encode(message: CDOTAUserMsgCustomHudElementDestroy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.elementId !== "") {
      writer.uint32(10).string(message.elementId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCustomHudElementDestroy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCustomHudElementDestroy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.elementId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgCustomHudElementDestroy {
    return { elementId: isSet(object.elementId) ? String(object.elementId) : "" };
  },

  toJSON(message: CDOTAUserMsgCustomHudElementDestroy): unknown {
    const obj: any = {};
    message.elementId !== undefined && (obj.elementId = message.elementId);
    return obj;
  },
};

function createBaseCDOTAUserMsgCompendiumStatePlayer(): CDOTAUserMsgCompendiumStatePlayer {
  return { playerId: 0, level: 0 };
}

export const CDOTAUserMsgCompendiumStatePlayer = {
  encode(message: CDOTAUserMsgCompendiumStatePlayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.level !== 0) {
      writer.uint32(16).uint32(message.level);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCompendiumStatePlayer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCompendiumStatePlayer();
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

          message.level = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgCompendiumStatePlayer {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgCompendiumStatePlayer): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.level !== undefined && (obj.level = Math.round(message.level));
    return obj;
  },
};

function createBaseCDOTAUserMsgCompendiumState(): CDOTAUserMsgCompendiumState {
  return { compendiumPlayers: [] };
}

export const CDOTAUserMsgCompendiumState = {
  encode(message: CDOTAUserMsgCompendiumState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.compendiumPlayers) {
      CDOTAUserMsgCompendiumStatePlayer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCompendiumState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCompendiumState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.compendiumPlayers.push(CDOTAUserMsgCompendiumStatePlayer.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgCompendiumState {
    return {
      compendiumPlayers: Array.isArray(object?.compendiumPlayers)
        ? object.compendiumPlayers.map((e: any) => CDOTAUserMsgCompendiumStatePlayer.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDOTAUserMsgCompendiumState): unknown {
    const obj: any = {};
    if (message.compendiumPlayers) {
      obj.compendiumPlayers = message.compendiumPlayers.map((e) =>
        e ? CDOTAUserMsgCompendiumStatePlayer.toJSON(e) : undefined
      );
    } else {
      obj.compendiumPlayers = [];
    }
    return obj;
  },
};

function createBaseCDOTAUserMsgProjectionAbility(): CDOTAUserMsgProjectionAbility {
  return {
    abilityId: 0,
    casterEntIndex: 0,
    casterTeam: 0,
    channelEnd: false,
    origin: undefined,
    trackCasterOnly: false,
    endTime: 0,
    victimEntIndex: 0,
  };
}

export const CDOTAUserMsgProjectionAbility = {
  encode(message: CDOTAUserMsgProjectionAbility, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.abilityId !== 0) {
      writer.uint32(8).int32(message.abilityId);
    }
    if (message.casterEntIndex !== 0) {
      writer.uint32(16).int32(message.casterEntIndex);
    }
    if (message.casterTeam !== 0) {
      writer.uint32(24).int32(message.casterTeam);
    }
    if (message.channelEnd === true) {
      writer.uint32(32).bool(message.channelEnd);
    }
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(42).fork()).ldelim();
    }
    if (message.trackCasterOnly === true) {
      writer.uint32(48).bool(message.trackCasterOnly);
    }
    if (message.endTime !== 0) {
      writer.uint32(61).float(message.endTime);
    }
    if (message.victimEntIndex !== 0) {
      writer.uint32(64).int32(message.victimEntIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgProjectionAbility {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgProjectionAbility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.abilityId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.casterEntIndex = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.casterTeam = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.channelEnd = reader.bool();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.origin = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.trackCasterOnly = reader.bool();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.endTime = reader.float();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.victimEntIndex = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgProjectionAbility {
    return {
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      casterEntIndex: isSet(object.casterEntIndex) ? Number(object.casterEntIndex) : 0,
      casterTeam: isSet(object.casterTeam) ? Number(object.casterTeam) : 0,
      channelEnd: isSet(object.channelEnd) ? Boolean(object.channelEnd) : false,
      origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
      trackCasterOnly: isSet(object.trackCasterOnly) ? Boolean(object.trackCasterOnly) : false,
      endTime: isSet(object.endTime) ? Number(object.endTime) : 0,
      victimEntIndex: isSet(object.victimEntIndex) ? Number(object.victimEntIndex) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgProjectionAbility): unknown {
    const obj: any = {};
    message.abilityId !== undefined && (obj.abilityId = Math.round(message.abilityId));
    message.casterEntIndex !== undefined && (obj.casterEntIndex = Math.round(message.casterEntIndex));
    message.casterTeam !== undefined && (obj.casterTeam = Math.round(message.casterTeam));
    message.channelEnd !== undefined && (obj.channelEnd = message.channelEnd);
    message.origin !== undefined && (obj.origin = message.origin ? CMsgVector.toJSON(message.origin) : undefined);
    message.trackCasterOnly !== undefined && (obj.trackCasterOnly = message.trackCasterOnly);
    message.endTime !== undefined && (obj.endTime = message.endTime);
    message.victimEntIndex !== undefined && (obj.victimEntIndex = Math.round(message.victimEntIndex));
    return obj;
  },
};

function createBaseCDOTAUserMsgProjectionEvent(): CDOTAUserMsgProjectionEvent {
  return { eventId: 0, team: 0 };
}

export const CDOTAUserMsgProjectionEvent = {
  encode(message: CDOTAUserMsgProjectionEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.team !== 0) {
      writer.uint32(16).uint32(message.team);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgProjectionEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgProjectionEvent();
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

          message.team = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgProjectionEvent {
    return {
      eventId: isSet(object.eventId) ? eProjectionEventFromJSON(object.eventId) : 0,
      team: isSet(object.team) ? Number(object.team) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgProjectionEvent): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = eProjectionEventToJSON(message.eventId));
    message.team !== undefined && (obj.team = Math.round(message.team));
    return obj;
  },
};

function createBaseCDOTAUserMsgXPAlert(): CDOTAUserMsgXPAlert {
  return { playerId: 0, targetEntindex: 0 };
}

export const CDOTAUserMsgXPAlert = {
  encode(message: CDOTAUserMsgXPAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.targetEntindex !== 0) {
      writer.uint32(16).int32(message.targetEntindex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgXPAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgXPAlert();
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

  fromJSON(object: any): CDOTAUserMsgXPAlert {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      targetEntindex: isSet(object.targetEntindex) ? Number(object.targetEntindex) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgXPAlert): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.targetEntindex !== undefined && (obj.targetEntindex = Math.round(message.targetEntindex));
    return obj;
  },
};

function createBaseCDOTAUserMsgTalentTreeAlert(): CDOTAUserMsgTalentTreeAlert {
  return { playerId: 0, targetEntindex: 0, abilityId: 0, slot: 0, learned: false };
}

export const CDOTAUserMsgTalentTreeAlert = {
  encode(message: CDOTAUserMsgTalentTreeAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.targetEntindex !== 0) {
      writer.uint32(16).int32(message.targetEntindex);
    }
    if (message.abilityId !== 0) {
      writer.uint32(24).int32(message.abilityId);
    }
    if (message.slot !== 0) {
      writer.uint32(32).int32(message.slot);
    }
    if (message.learned === true) {
      writer.uint32(40).bool(message.learned);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTalentTreeAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTalentTreeAlert();
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

          message.targetEntindex = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.abilityId = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.slot = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
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

  fromJSON(object: any): CDOTAUserMsgTalentTreeAlert {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      targetEntindex: isSet(object.targetEntindex) ? Number(object.targetEntindex) : 0,
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      slot: isSet(object.slot) ? Number(object.slot) : 0,
      learned: isSet(object.learned) ? Boolean(object.learned) : false,
    };
  },

  toJSON(message: CDOTAUserMsgTalentTreeAlert): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.targetEntindex !== undefined && (obj.targetEntindex = Math.round(message.targetEntindex));
    message.abilityId !== undefined && (obj.abilityId = Math.round(message.abilityId));
    message.slot !== undefined && (obj.slot = Math.round(message.slot));
    message.learned !== undefined && (obj.learned = message.learned);
    return obj;
  },
};

function createBaseCDOTAUserMsgUpdateQuestProgress(): CDOTAUserMsgUpdateQuestProgress {
  return {};
}

export const CDOTAUserMsgUpdateQuestProgress = {
  encode(_: CDOTAUserMsgUpdateQuestProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgUpdateQuestProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgUpdateQuestProgress();
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

  fromJSON(_: any): CDOTAUserMsgUpdateQuestProgress {
    return {};
  },

  toJSON(_: CDOTAUserMsgUpdateQuestProgress): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCDOTAUserMsgQuestStatus(): CDOTAUserMsgQuestStatus {
  return { playerId: 0, questId: 0, challengeId: 0, progress: 0, goal: 0, query: 0, failGametime: 0, itemAbilityId: 0 };
}

export const CDOTAUserMsgQuestStatus = {
  encode(message: CDOTAUserMsgQuestStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.questId !== 0) {
      writer.uint32(16).uint32(message.questId);
    }
    if (message.challengeId !== 0) {
      writer.uint32(24).uint32(message.challengeId);
    }
    if (message.progress !== 0) {
      writer.uint32(32).uint32(message.progress);
    }
    if (message.goal !== 0) {
      writer.uint32(40).uint32(message.goal);
    }
    if (message.query !== 0) {
      writer.uint32(48).uint32(message.query);
    }
    if (message.failGametime !== 0) {
      writer.uint32(61).float(message.failGametime);
    }
    if (message.itemAbilityId !== 0) {
      writer.uint32(64).int32(message.itemAbilityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgQuestStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgQuestStatus();
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

          message.questId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.challengeId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.progress = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.goal = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.query = reader.uint32();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.failGametime = reader.float();
          continue;
        case 8:
          if (tag != 64) {
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

  fromJSON(object: any): CDOTAUserMsgQuestStatus {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      questId: isSet(object.questId) ? Number(object.questId) : 0,
      challengeId: isSet(object.challengeId) ? Number(object.challengeId) : 0,
      progress: isSet(object.progress) ? Number(object.progress) : 0,
      goal: isSet(object.goal) ? Number(object.goal) : 0,
      query: isSet(object.query) ? Number(object.query) : 0,
      failGametime: isSet(object.failGametime) ? Number(object.failGametime) : 0,
      itemAbilityId: isSet(object.itemAbilityId) ? Number(object.itemAbilityId) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgQuestStatus): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.questId !== undefined && (obj.questId = Math.round(message.questId));
    message.challengeId !== undefined && (obj.challengeId = Math.round(message.challengeId));
    message.progress !== undefined && (obj.progress = Math.round(message.progress));
    message.goal !== undefined && (obj.goal = Math.round(message.goal));
    message.query !== undefined && (obj.query = Math.round(message.query));
    message.failGametime !== undefined && (obj.failGametime = message.failGametime);
    message.itemAbilityId !== undefined && (obj.itemAbilityId = Math.round(message.itemAbilityId));
    return obj;
  },
};

function createBaseCDOTAUserMsgSuggestHeroPick(): CDOTAUserMsgSuggestHeroPick {
  return { playerId: 0, heroId: 0, ban: false };
}

export const CDOTAUserMsgSuggestHeroPick = {
  encode(message: CDOTAUserMsgSuggestHeroPick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.heroId !== 0) {
      writer.uint32(16).uint32(message.heroId);
    }
    if (message.ban === true) {
      writer.uint32(24).bool(message.ban);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSuggestHeroPick {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSuggestHeroPick();
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

          message.heroId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.ban = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgSuggestHeroPick {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      ban: isSet(object.ban) ? Boolean(object.ban) : false,
    };
  },

  toJSON(message: CDOTAUserMsgSuggestHeroPick): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.ban !== undefined && (obj.ban = message.ban);
    return obj;
  },
};

function createBaseCDOTAUserMsgSuggestHeroRole(): CDOTAUserMsgSuggestHeroRole {
  return { playerId: 0, heroRole: "" };
}

export const CDOTAUserMsgSuggestHeroRole = {
  encode(message: CDOTAUserMsgSuggestHeroRole, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.heroRole !== "") {
      writer.uint32(18).string(message.heroRole);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSuggestHeroRole {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSuggestHeroRole();
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
          if (tag != 18) {
            break;
          }

          message.heroRole = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgSuggestHeroRole {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      heroRole: isSet(object.heroRole) ? String(object.heroRole) : "",
    };
  },

  toJSON(message: CDOTAUserMsgSuggestHeroRole): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.heroRole !== undefined && (obj.heroRole = message.heroRole);
    return obj;
  },
};

function createBaseCDOTAUserMsgKillcamDamageTaken(): CDOTAUserMsgKillcamDamageTaken {
  return { playerId: 0, damageTaken: 0, itemType: 0, itemAbilityId: 0, heroName: "", damageColor: "" };
}

export const CDOTAUserMsgKillcamDamageTaken = {
  encode(message: CDOTAUserMsgKillcamDamageTaken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgKillcamDamageTaken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgKillcamDamageTaken();
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

  fromJSON(object: any): CDOTAUserMsgKillcamDamageTaken {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      damageTaken: isSet(object.damageTaken) ? Number(object.damageTaken) : 0,
      itemType: isSet(object.itemType) ? Number(object.itemType) : 0,
      itemAbilityId: isSet(object.itemAbilityId) ? Number(object.itemAbilityId) : 0,
      heroName: isSet(object.heroName) ? String(object.heroName) : "",
      damageColor: isSet(object.damageColor) ? String(object.damageColor) : "",
    };
  },

  toJSON(message: CDOTAUserMsgKillcamDamageTaken): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.damageTaken !== undefined && (obj.damageTaken = Math.round(message.damageTaken));
    message.itemType !== undefined && (obj.itemType = Math.round(message.itemType));
    message.itemAbilityId !== undefined && (obj.itemAbilityId = Math.round(message.itemAbilityId));
    message.heroName !== undefined && (obj.heroName = message.heroName);
    message.damageColor !== undefined && (obj.damageColor = message.damageColor);
    return obj;
  },
};

function createBaseCDOTAUserMsgSelectPenaltyGold(): CDOTAUserMsgSelectPenaltyGold {
  return { playerId: 0, cost: 0 };
}

export const CDOTAUserMsgSelectPenaltyGold = {
  encode(message: CDOTAUserMsgSelectPenaltyGold, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.cost !== 0) {
      writer.uint32(16).sint32(message.cost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSelectPenaltyGold {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSelectPenaltyGold();
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

          message.cost = reader.sint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgSelectPenaltyGold {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      cost: isSet(object.cost) ? Number(object.cost) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgSelectPenaltyGold): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.cost !== undefined && (obj.cost = Math.round(message.cost));
    return obj;
  },
};

function createBaseCDOTAUserMsgRollDiceResult(): CDOTAUserMsgRollDiceResult {
  return { playerId: 0, channelType: 0, rollMin: 0, rollMax: 0, result: 0 };
}

export const CDOTAUserMsgRollDiceResult = {
  encode(message: CDOTAUserMsgRollDiceResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.channelType !== 0) {
      writer.uint32(16).uint32(message.channelType);
    }
    if (message.rollMin !== 0) {
      writer.uint32(24).uint32(message.rollMin);
    }
    if (message.rollMax !== 0) {
      writer.uint32(32).uint32(message.rollMax);
    }
    if (message.result !== 0) {
      writer.uint32(40).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgRollDiceResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgRollDiceResult();
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

          message.channelType = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.rollMin = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.rollMax = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.result = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgRollDiceResult {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      channelType: isSet(object.channelType) ? Number(object.channelType) : 0,
      rollMin: isSet(object.rollMin) ? Number(object.rollMin) : 0,
      rollMax: isSet(object.rollMax) ? Number(object.rollMax) : 0,
      result: isSet(object.result) ? Number(object.result) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgRollDiceResult): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.channelType !== undefined && (obj.channelType = Math.round(message.channelType));
    message.rollMin !== undefined && (obj.rollMin = Math.round(message.rollMin));
    message.rollMax !== undefined && (obj.rollMax = Math.round(message.rollMax));
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },
};

function createBaseCDOTAUserMsgFlipCoinResult(): CDOTAUserMsgFlipCoinResult {
  return { playerId: 0, channelType: 0, result: false };
}

export const CDOTAUserMsgFlipCoinResult = {
  encode(message: CDOTAUserMsgFlipCoinResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.channelType !== 0) {
      writer.uint32(16).uint32(message.channelType);
    }
    if (message.result === true) {
      writer.uint32(24).bool(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgFlipCoinResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgFlipCoinResult();
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

          message.channelType = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.result = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgFlipCoinResult {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      channelType: isSet(object.channelType) ? Number(object.channelType) : 0,
      result: isSet(object.result) ? Boolean(object.result) : false,
    };
  },

  toJSON(message: CDOTAUserMsgFlipCoinResult): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.channelType !== undefined && (obj.channelType = Math.round(message.channelType));
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },
};

function createBaseCDOTAUserMessageRequestItemSuggestions(): CDOTAUserMessageRequestItemSuggestions {
  return { playerId: 0 };
}

export const CDOTAUserMessageRequestItemSuggestions = {
  encode(message: CDOTAUserMessageRequestItemSuggestions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMessageRequestItemSuggestions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMessageRequestItemSuggestions();
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

  fromJSON(object: any): CDOTAUserMessageRequestItemSuggestions {
    return { playerId: isSet(object.playerId) ? Number(object.playerId) : 0 };
  },

  toJSON(message: CDOTAUserMessageRequestItemSuggestions): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    return obj;
  },
};

function createBaseCDOTAUserMessageTeamCaptainChanged(): CDOTAUserMessageTeamCaptainChanged {
  return { team: 0, captainPlayerId: 0 };
}

export const CDOTAUserMessageTeamCaptainChanged = {
  encode(message: CDOTAUserMessageTeamCaptainChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.team !== 0) {
      writer.uint32(8).uint32(message.team);
    }
    if (message.captainPlayerId !== 0) {
      writer.uint32(16).int32(message.captainPlayerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMessageTeamCaptainChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMessageTeamCaptainChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.team = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.captainPlayerId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMessageTeamCaptainChanged {
    return {
      team: isSet(object.team) ? Number(object.team) : 0,
      captainPlayerId: isSet(object.captainPlayerId) ? Number(object.captainPlayerId) : 0,
    };
  },

  toJSON(message: CDOTAUserMessageTeamCaptainChanged): unknown {
    const obj: any = {};
    message.team !== undefined && (obj.team = Math.round(message.team));
    message.captainPlayerId !== undefined && (obj.captainPlayerId = Math.round(message.captainPlayerId));
    return obj;
  },
};

function createBaseCDOTAUserMsgChatWheelCooldown(): CDOTAUserMsgChatWheelCooldown {
  return { messageId: 0, cooldownRemaining: 0 };
}

export const CDOTAUserMsgChatWheelCooldown = {
  encode(message: CDOTAUserMsgChatWheelCooldown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageId !== 0) {
      writer.uint32(8).uint32(message.messageId);
    }
    if (message.cooldownRemaining !== 0) {
      writer.uint32(21).float(message.cooldownRemaining);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgChatWheelCooldown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgChatWheelCooldown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.messageId = reader.uint32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.cooldownRemaining = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgChatWheelCooldown {
    return {
      messageId: isSet(object.messageId) ? Number(object.messageId) : 0,
      cooldownRemaining: isSet(object.cooldownRemaining) ? Number(object.cooldownRemaining) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgChatWheelCooldown): unknown {
    const obj: any = {};
    message.messageId !== undefined && (obj.messageId = Math.round(message.messageId));
    message.cooldownRemaining !== undefined && (obj.cooldownRemaining = message.cooldownRemaining);
    return obj;
  },
};

function createBaseCDOTAUserMsgHeroRelicProgress(): CDOTAUserMsgHeroRelicProgress {
  return { heroRelicType: 0, value: 0, ehandle: 0, eventId: 0, valueDisplay: 0 };
}

export const CDOTAUserMsgHeroRelicProgress = {
  encode(message: CDOTAUserMsgHeroRelicProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroRelicType !== 0) {
      writer.uint32(8).uint32(message.heroRelicType);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    if (message.ehandle !== 0) {
      writer.uint32(24).uint32(message.ehandle);
    }
    if (message.eventId !== 0) {
      writer.uint32(32).uint32(message.eventId);
    }
    if (message.valueDisplay !== 0) {
      writer.uint32(45).float(message.valueDisplay);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgHeroRelicProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgHeroRelicProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.heroRelicType = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.value = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.ehandle = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.valueDisplay = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgHeroRelicProgress {
    return {
      heroRelicType: isSet(object.heroRelicType) ? Number(object.heroRelicType) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
      ehandle: isSet(object.ehandle) ? Number(object.ehandle) : 0,
      eventId: isSet(object.eventId) ? Number(object.eventId) : 0,
      valueDisplay: isSet(object.valueDisplay) ? Number(object.valueDisplay) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgHeroRelicProgress): unknown {
    const obj: any = {};
    message.heroRelicType !== undefined && (obj.heroRelicType = Math.round(message.heroRelicType));
    message.value !== undefined && (obj.value = Math.round(message.value));
    message.ehandle !== undefined && (obj.ehandle = Math.round(message.ehandle));
    message.eventId !== undefined && (obj.eventId = Math.round(message.eventId));
    message.valueDisplay !== undefined && (obj.valueDisplay = message.valueDisplay);
    return obj;
  },
};

function createBaseCDOTAUserMsgAbilityDraftRequestAbility(): CDOTAUserMsgAbilityDraftRequestAbility {
  return { playerId: 0, requestedAbilityId: 0, ctrlIsDown: false };
}

export const CDOTAUserMsgAbilityDraftRequestAbility = {
  encode(message: CDOTAUserMsgAbilityDraftRequestAbility, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.requestedAbilityId !== 0) {
      writer.uint32(16).int32(message.requestedAbilityId);
    }
    if (message.ctrlIsDown === true) {
      writer.uint32(24).bool(message.ctrlIsDown);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgAbilityDraftRequestAbility {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgAbilityDraftRequestAbility();
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

          message.requestedAbilityId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
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

  fromJSON(object: any): CDOTAUserMsgAbilityDraftRequestAbility {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      requestedAbilityId: isSet(object.requestedAbilityId) ? Number(object.requestedAbilityId) : 0,
      ctrlIsDown: isSet(object.ctrlIsDown) ? Boolean(object.ctrlIsDown) : false,
    };
  },

  toJSON(message: CDOTAUserMsgAbilityDraftRequestAbility): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.requestedAbilityId !== undefined && (obj.requestedAbilityId = Math.round(message.requestedAbilityId));
    message.ctrlIsDown !== undefined && (obj.ctrlIsDown = message.ctrlIsDown);
    return obj;
  },
};

function createBaseCDOTAUserMsgDamageReport(): CDOTAUserMsgDamageReport {
  return { playerId: 0, targetHeroId: 0, sourceHeroId: 0, damageAmount: 0, broadcast: false };
}

export const CDOTAUserMsgDamageReport = {
  encode(message: CDOTAUserMsgDamageReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.targetHeroId !== 0) {
      writer.uint32(16).uint32(message.targetHeroId);
    }
    if (message.sourceHeroId !== 0) {
      writer.uint32(24).uint32(message.sourceHeroId);
    }
    if (message.damageAmount !== 0) {
      writer.uint32(32).int32(message.damageAmount);
    }
    if (message.broadcast === true) {
      writer.uint32(40).bool(message.broadcast);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgDamageReport {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgDamageReport();
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

          message.targetHeroId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.sourceHeroId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.damageAmount = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
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

  fromJSON(object: any): CDOTAUserMsgDamageReport {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      targetHeroId: isSet(object.targetHeroId) ? Number(object.targetHeroId) : 0,
      sourceHeroId: isSet(object.sourceHeroId) ? Number(object.sourceHeroId) : 0,
      damageAmount: isSet(object.damageAmount) ? Number(object.damageAmount) : 0,
      broadcast: isSet(object.broadcast) ? Boolean(object.broadcast) : false,
    };
  },

  toJSON(message: CDOTAUserMsgDamageReport): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.targetHeroId !== undefined && (obj.targetHeroId = Math.round(message.targetHeroId));
    message.sourceHeroId !== undefined && (obj.sourceHeroId = Math.round(message.sourceHeroId));
    message.damageAmount !== undefined && (obj.damageAmount = Math.round(message.damageAmount));
    message.broadcast !== undefined && (obj.broadcast = message.broadcast);
    return obj;
  },
};

function createBaseCDOTAUserMsgSalutePlayer(): CDOTAUserMsgSalutePlayer {
  return { sourcePlayerId: 0, targetPlayerId: 0, tipAmount: 0, eventId: 0, customTipStyle: "", numRecentTips: 0 };
}

export const CDOTAUserMsgSalutePlayer = {
  encode(message: CDOTAUserMsgSalutePlayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourcePlayerId !== 0) {
      writer.uint32(8).int32(message.sourcePlayerId);
    }
    if (message.targetPlayerId !== 0) {
      writer.uint32(16).int32(message.targetPlayerId);
    }
    if (message.tipAmount !== 0) {
      writer.uint32(24).uint32(message.tipAmount);
    }
    if (message.eventId !== 0) {
      writer.uint32(32).uint32(message.eventId);
    }
    if (message.customTipStyle !== "") {
      writer.uint32(42).string(message.customTipStyle);
    }
    if (message.numRecentTips !== 0) {
      writer.uint32(48).uint32(message.numRecentTips);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSalutePlayer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSalutePlayer();
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

          message.tipAmount = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.customTipStyle = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.numRecentTips = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgSalutePlayer {
    return {
      sourcePlayerId: isSet(object.sourcePlayerId) ? Number(object.sourcePlayerId) : 0,
      targetPlayerId: isSet(object.targetPlayerId) ? Number(object.targetPlayerId) : 0,
      tipAmount: isSet(object.tipAmount) ? Number(object.tipAmount) : 0,
      eventId: isSet(object.eventId) ? Number(object.eventId) : 0,
      customTipStyle: isSet(object.customTipStyle) ? String(object.customTipStyle) : "",
      numRecentTips: isSet(object.numRecentTips) ? Number(object.numRecentTips) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgSalutePlayer): unknown {
    const obj: any = {};
    message.sourcePlayerId !== undefined && (obj.sourcePlayerId = Math.round(message.sourcePlayerId));
    message.targetPlayerId !== undefined && (obj.targetPlayerId = Math.round(message.targetPlayerId));
    message.tipAmount !== undefined && (obj.tipAmount = Math.round(message.tipAmount));
    message.eventId !== undefined && (obj.eventId = Math.round(message.eventId));
    message.customTipStyle !== undefined && (obj.customTipStyle = message.customTipStyle);
    message.numRecentTips !== undefined && (obj.numRecentTips = Math.round(message.numRecentTips));
    return obj;
  },
};

function createBaseCDOTAUserMsgTipAlert(): CDOTAUserMsgTipAlert {
  return { playerId: 0, tipText: "" };
}

export const CDOTAUserMsgTipAlert = {
  encode(message: CDOTAUserMsgTipAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.tipText !== "") {
      writer.uint32(18).string(message.tipText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTipAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTipAlert();
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
          if (tag != 18) {
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

  fromJSON(object: any): CDOTAUserMsgTipAlert {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      tipText: isSet(object.tipText) ? String(object.tipText) : "",
    };
  },

  toJSON(message: CDOTAUserMsgTipAlert): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.tipText !== undefined && (obj.tipText = message.tipText);
    return obj;
  },
};

function createBaseCDOTAUserMsgReplaceQueryUnit(): CDOTAUserMsgReplaceQueryUnit {
  return { playerId: 0, sourceEntindex: 0, targetEntindex: 0 };
}

export const CDOTAUserMsgReplaceQueryUnit = {
  encode(message: CDOTAUserMsgReplaceQueryUnit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.sourceEntindex !== 0) {
      writer.uint32(16).int32(message.sourceEntindex);
    }
    if (message.targetEntindex !== 0) {
      writer.uint32(24).int32(message.targetEntindex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgReplaceQueryUnit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgReplaceQueryUnit();
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

          message.sourceEntindex = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
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

  fromJSON(object: any): CDOTAUserMsgReplaceQueryUnit {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      sourceEntindex: isSet(object.sourceEntindex) ? Number(object.sourceEntindex) : 0,
      targetEntindex: isSet(object.targetEntindex) ? Number(object.targetEntindex) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgReplaceQueryUnit): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.sourceEntindex !== undefined && (obj.sourceEntindex = Math.round(message.sourceEntindex));
    message.targetEntindex !== undefined && (obj.targetEntindex = Math.round(message.targetEntindex));
    return obj;
  },
};

function createBaseCDOTAUserMsgESArcanaCombo(): CDOTAUserMsgESArcanaCombo {
  return { ehandle: 0, comboCount: 0, arcanaLevel: 0 };
}

export const CDOTAUserMsgESArcanaCombo = {
  encode(message: CDOTAUserMsgESArcanaCombo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ehandle !== 0) {
      writer.uint32(8).uint32(message.ehandle);
    }
    if (message.comboCount !== 0) {
      writer.uint32(16).uint32(message.comboCount);
    }
    if (message.arcanaLevel !== 0) {
      writer.uint32(24).uint32(message.arcanaLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgESArcanaCombo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgESArcanaCombo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ehandle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.comboCount = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.arcanaLevel = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgESArcanaCombo {
    return {
      ehandle: isSet(object.ehandle) ? Number(object.ehandle) : 0,
      comboCount: isSet(object.comboCount) ? Number(object.comboCount) : 0,
      arcanaLevel: isSet(object.arcanaLevel) ? Number(object.arcanaLevel) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgESArcanaCombo): unknown {
    const obj: any = {};
    message.ehandle !== undefined && (obj.ehandle = Math.round(message.ehandle));
    message.comboCount !== undefined && (obj.comboCount = Math.round(message.comboCount));
    message.arcanaLevel !== undefined && (obj.arcanaLevel = Math.round(message.arcanaLevel));
    return obj;
  },
};

function createBaseCDOTAUserMsgESArcanaComboSummary(): CDOTAUserMsgESArcanaComboSummary {
  return { ehandle: 0, comboCount: 0, damageAmount: 0 };
}

export const CDOTAUserMsgESArcanaComboSummary = {
  encode(message: CDOTAUserMsgESArcanaComboSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ehandle !== 0) {
      writer.uint32(8).uint32(message.ehandle);
    }
    if (message.comboCount !== 0) {
      writer.uint32(16).uint32(message.comboCount);
    }
    if (message.damageAmount !== 0) {
      writer.uint32(24).uint32(message.damageAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgESArcanaComboSummary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgESArcanaComboSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ehandle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.comboCount = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.damageAmount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgESArcanaComboSummary {
    return {
      ehandle: isSet(object.ehandle) ? Number(object.ehandle) : 0,
      comboCount: isSet(object.comboCount) ? Number(object.comboCount) : 0,
      damageAmount: isSet(object.damageAmount) ? Number(object.damageAmount) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgESArcanaComboSummary): unknown {
    const obj: any = {};
    message.ehandle !== undefined && (obj.ehandle = Math.round(message.ehandle));
    message.comboCount !== undefined && (obj.comboCount = Math.round(message.comboCount));
    message.damageAmount !== undefined && (obj.damageAmount = Math.round(message.damageAmount));
    return obj;
  },
};

function createBaseCDOTAUserMsgOMArcanaCombo(): CDOTAUserMsgOMArcanaCombo {
  return { ehandle: 0, multicastAmount: 0, arcanaLevel: 0, multicastChance: 0 };
}

export const CDOTAUserMsgOMArcanaCombo = {
  encode(message: CDOTAUserMsgOMArcanaCombo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ehandle !== 0) {
      writer.uint32(8).uint32(message.ehandle);
    }
    if (message.multicastAmount !== 0) {
      writer.uint32(16).uint32(message.multicastAmount);
    }
    if (message.arcanaLevel !== 0) {
      writer.uint32(24).uint32(message.arcanaLevel);
    }
    if (message.multicastChance !== 0) {
      writer.uint32(32).uint32(message.multicastChance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgOMArcanaCombo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgOMArcanaCombo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ehandle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.multicastAmount = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.arcanaLevel = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.multicastChance = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgOMArcanaCombo {
    return {
      ehandle: isSet(object.ehandle) ? Number(object.ehandle) : 0,
      multicastAmount: isSet(object.multicastAmount) ? Number(object.multicastAmount) : 0,
      arcanaLevel: isSet(object.arcanaLevel) ? Number(object.arcanaLevel) : 0,
      multicastChance: isSet(object.multicastChance) ? Number(object.multicastChance) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgOMArcanaCombo): unknown {
    const obj: any = {};
    message.ehandle !== undefined && (obj.ehandle = Math.round(message.ehandle));
    message.multicastAmount !== undefined && (obj.multicastAmount = Math.round(message.multicastAmount));
    message.arcanaLevel !== undefined && (obj.arcanaLevel = Math.round(message.arcanaLevel));
    message.multicastChance !== undefined && (obj.multicastChance = Math.round(message.multicastChance));
    return obj;
  },
};

function createBaseCDOTAUserMsgHighFiveCompleted(): CDOTAUserMsgHighFiveCompleted {
  return { playerId1: 0, playerId2: 0, specialHighFive: false, specialEntindex: 0 };
}

export const CDOTAUserMsgHighFiveCompleted = {
  encode(message: CDOTAUserMsgHighFiveCompleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId1 !== 0) {
      writer.uint32(8).int32(message.playerId1);
    }
    if (message.playerId2 !== 0) {
      writer.uint32(16).int32(message.playerId2);
    }
    if (message.specialHighFive === true) {
      writer.uint32(24).bool(message.specialHighFive);
    }
    if (message.specialEntindex !== 0) {
      writer.uint32(32).int32(message.specialEntindex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgHighFiveCompleted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgHighFiveCompleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId1 = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerId2 = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.specialHighFive = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.specialEntindex = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgHighFiveCompleted {
    return {
      playerId1: isSet(object.playerId1) ? Number(object.playerId1) : 0,
      playerId2: isSet(object.playerId2) ? Number(object.playerId2) : 0,
      specialHighFive: isSet(object.specialHighFive) ? Boolean(object.specialHighFive) : false,
      specialEntindex: isSet(object.specialEntindex) ? Number(object.specialEntindex) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgHighFiveCompleted): unknown {
    const obj: any = {};
    message.playerId1 !== undefined && (obj.playerId1 = Math.round(message.playerId1));
    message.playerId2 !== undefined && (obj.playerId2 = Math.round(message.playerId2));
    message.specialHighFive !== undefined && (obj.specialHighFive = message.specialHighFive);
    message.specialEntindex !== undefined && (obj.specialEntindex = Math.round(message.specialEntindex));
    return obj;
  },
};

function createBaseCDOTAUserMsgHighFiveLeftHanging(): CDOTAUserMsgHighFiveLeftHanging {
  return { playerId: 0 };
}

export const CDOTAUserMsgHighFiveLeftHanging = {
  encode(message: CDOTAUserMsgHighFiveLeftHanging, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgHighFiveLeftHanging {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgHighFiveLeftHanging();
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

  fromJSON(object: any): CDOTAUserMsgHighFiveLeftHanging {
    return { playerId: isSet(object.playerId) ? Number(object.playerId) : 0 };
  },

  toJSON(message: CDOTAUserMsgHighFiveLeftHanging): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    return obj;
  },
};

function createBaseCDOTAUserMsgShovelUnearth(): CDOTAUserMsgShovelUnearth {
  return { playerId: 0, allChat: false, locstring: "", quantity: 0 };
}

export const CDOTAUserMsgShovelUnearth = {
  encode(message: CDOTAUserMsgShovelUnearth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.allChat === true) {
      writer.uint32(16).bool(message.allChat);
    }
    if (message.locstring !== "") {
      writer.uint32(26).string(message.locstring);
    }
    if (message.quantity !== 0) {
      writer.uint32(32).uint32(message.quantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgShovelUnearth {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgShovelUnearth();
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

          message.allChat = reader.bool();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.locstring = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.quantity = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgShovelUnearth {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      allChat: isSet(object.allChat) ? Boolean(object.allChat) : false,
      locstring: isSet(object.locstring) ? String(object.locstring) : "",
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgShovelUnearth): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.allChat !== undefined && (obj.allChat = message.allChat);
    message.locstring !== undefined && (obj.locstring = message.locstring);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    return obj;
  },
};

function createBaseCDOTAUserMsgAllStarEvent(): CDOTAUserMsgAllStarEvent {
  return { sourcePlayerId: 0, targetPlayerId: 0, pointAmount: 0, eventId: 0, playerScores: [] };
}

export const CDOTAUserMsgAllStarEvent = {
  encode(message: CDOTAUserMsgAllStarEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourcePlayerId !== 0) {
      writer.uint32(8).int32(message.sourcePlayerId);
    }
    if (message.targetPlayerId !== 0) {
      writer.uint32(16).int32(message.targetPlayerId);
    }
    if (message.pointAmount !== 0) {
      writer.uint32(24).uint32(message.pointAmount);
    }
    if (message.eventId !== 0) {
      writer.uint32(32).uint32(message.eventId);
    }
    for (const v of message.playerScores) {
      CDOTAUserMsgAllStarEvent_PlayerScore.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgAllStarEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgAllStarEvent();
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

          message.pointAmount = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.playerScores.push(CDOTAUserMsgAllStarEvent_PlayerScore.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgAllStarEvent {
    return {
      sourcePlayerId: isSet(object.sourcePlayerId) ? Number(object.sourcePlayerId) : 0,
      targetPlayerId: isSet(object.targetPlayerId) ? Number(object.targetPlayerId) : 0,
      pointAmount: isSet(object.pointAmount) ? Number(object.pointAmount) : 0,
      eventId: isSet(object.eventId) ? Number(object.eventId) : 0,
      playerScores: Array.isArray(object?.playerScores)
        ? object.playerScores.map((e: any) => CDOTAUserMsgAllStarEvent_PlayerScore.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDOTAUserMsgAllStarEvent): unknown {
    const obj: any = {};
    message.sourcePlayerId !== undefined && (obj.sourcePlayerId = Math.round(message.sourcePlayerId));
    message.targetPlayerId !== undefined && (obj.targetPlayerId = Math.round(message.targetPlayerId));
    message.pointAmount !== undefined && (obj.pointAmount = Math.round(message.pointAmount));
    message.eventId !== undefined && (obj.eventId = Math.round(message.eventId));
    if (message.playerScores) {
      obj.playerScores = message.playerScores.map((e) =>
        e ? CDOTAUserMsgAllStarEvent_PlayerScore.toJSON(e) : undefined
      );
    } else {
      obj.playerScores = [];
    }
    return obj;
  },
};

function createBaseCDOTAUserMsgAllStarEvent_PlayerScore(): CDOTAUserMsgAllStarEvent_PlayerScore {
  return { playerId: 0, scoreSansKda: 0 };
}

export const CDOTAUserMsgAllStarEvent_PlayerScore = {
  encode(message: CDOTAUserMsgAllStarEvent_PlayerScore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.scoreSansKda !== 0) {
      writer.uint32(16).uint32(message.scoreSansKda);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgAllStarEvent_PlayerScore {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgAllStarEvent_PlayerScore();
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

          message.scoreSansKda = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgAllStarEvent_PlayerScore {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      scoreSansKda: isSet(object.scoreSansKda) ? Number(object.scoreSansKda) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgAllStarEvent_PlayerScore): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.scoreSansKda !== undefined && (obj.scoreSansKda = Math.round(message.scoreSansKda));
    return obj;
  },
};

function createBaseCDOTAUserMsgQueuedOrderRemoved(): CDOTAUserMsgQueuedOrderRemoved {
  return { unitOrderSequence: [] };
}

export const CDOTAUserMsgQueuedOrderRemoved = {
  encode(message: CDOTAUserMsgQueuedOrderRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.unitOrderSequence) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgQueuedOrderRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgQueuedOrderRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.unitOrderSequence.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unitOrderSequence.push(reader.uint32());
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

  fromJSON(object: any): CDOTAUserMsgQueuedOrderRemoved {
    return {
      unitOrderSequence: Array.isArray(object?.unitOrderSequence)
        ? object.unitOrderSequence.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CDOTAUserMsgQueuedOrderRemoved): unknown {
    const obj: any = {};
    if (message.unitOrderSequence) {
      obj.unitOrderSequence = message.unitOrderSequence.map((e) => Math.round(e));
    } else {
      obj.unitOrderSequence = [];
    }
    return obj;
  },
};

function createBaseCDOTAUserMsgDebugChallenge(): CDOTAUserMsgDebugChallenge {
  return {
    challengeType: 0,
    challengeQueryId: 0,
    eventId: 0,
    instanceId: 0,
    challengeVar0: 0,
    challengeVar1: 0,
    challengeMaxRank: 0,
  };
}

export const CDOTAUserMsgDebugChallenge = {
  encode(message: CDOTAUserMsgDebugChallenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challengeType !== 0) {
      writer.uint32(8).uint32(message.challengeType);
    }
    if (message.challengeQueryId !== 0) {
      writer.uint32(16).uint32(message.challengeQueryId);
    }
    if (message.eventId !== 0) {
      writer.uint32(24).uint32(message.eventId);
    }
    if (message.instanceId !== 0) {
      writer.uint32(32).uint32(message.instanceId);
    }
    if (message.challengeVar0 !== 0) {
      writer.uint32(40).uint32(message.challengeVar0);
    }
    if (message.challengeVar1 !== 0) {
      writer.uint32(48).uint32(message.challengeVar1);
    }
    if (message.challengeMaxRank !== 0) {
      writer.uint32(56).uint32(message.challengeMaxRank);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgDebugChallenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgDebugChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.challengeType = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.challengeQueryId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.instanceId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.challengeVar0 = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.challengeVar1 = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.challengeMaxRank = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgDebugChallenge {
    return {
      challengeType: isSet(object.challengeType) ? Number(object.challengeType) : 0,
      challengeQueryId: isSet(object.challengeQueryId) ? Number(object.challengeQueryId) : 0,
      eventId: isSet(object.eventId) ? Number(object.eventId) : 0,
      instanceId: isSet(object.instanceId) ? Number(object.instanceId) : 0,
      challengeVar0: isSet(object.challengeVar0) ? Number(object.challengeVar0) : 0,
      challengeVar1: isSet(object.challengeVar1) ? Number(object.challengeVar1) : 0,
      challengeMaxRank: isSet(object.challengeMaxRank) ? Number(object.challengeMaxRank) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgDebugChallenge): unknown {
    const obj: any = {};
    message.challengeType !== undefined && (obj.challengeType = Math.round(message.challengeType));
    message.challengeQueryId !== undefined && (obj.challengeQueryId = Math.round(message.challengeQueryId));
    message.eventId !== undefined && (obj.eventId = Math.round(message.eventId));
    message.instanceId !== undefined && (obj.instanceId = Math.round(message.instanceId));
    message.challengeVar0 !== undefined && (obj.challengeVar0 = Math.round(message.challengeVar0));
    message.challengeVar1 !== undefined && (obj.challengeVar1 = Math.round(message.challengeVar1));
    message.challengeMaxRank !== undefined && (obj.challengeMaxRank = Math.round(message.challengeMaxRank));
    return obj;
  },
};

function createBaseCDOTAUserMsgFoundNeutralItem(): CDOTAUserMsgFoundNeutralItem {
  return { playerId: 0, itemAbilityId: 0, itemTier: 0, tierItemCount: 0 };
}

export const CDOTAUserMsgFoundNeutralItem = {
  encode(message: CDOTAUserMsgFoundNeutralItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.itemAbilityId !== 0) {
      writer.uint32(16).int32(message.itemAbilityId);
    }
    if (message.itemTier !== 0) {
      writer.uint32(24).uint32(message.itemTier);
    }
    if (message.tierItemCount !== 0) {
      writer.uint32(32).uint32(message.tierItemCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgFoundNeutralItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgFoundNeutralItem();
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

          message.itemAbilityId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.itemTier = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.tierItemCount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgFoundNeutralItem {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      itemAbilityId: isSet(object.itemAbilityId) ? Number(object.itemAbilityId) : 0,
      itemTier: isSet(object.itemTier) ? Number(object.itemTier) : 0,
      tierItemCount: isSet(object.tierItemCount) ? Number(object.tierItemCount) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgFoundNeutralItem): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.itemAbilityId !== undefined && (obj.itemAbilityId = Math.round(message.itemAbilityId));
    message.itemTier !== undefined && (obj.itemTier = Math.round(message.itemTier));
    message.tierItemCount !== undefined && (obj.tierItemCount = Math.round(message.tierItemCount));
    return obj;
  },
};

function createBaseCDOTAUserMsgOutpostCaptured(): CDOTAUserMsgOutpostCaptured {
  return { outpostEntindex: 0, teamId: 0 };
}

export const CDOTAUserMsgOutpostCaptured = {
  encode(message: CDOTAUserMsgOutpostCaptured, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.outpostEntindex !== 0) {
      writer.uint32(8).int32(message.outpostEntindex);
    }
    if (message.teamId !== 0) {
      writer.uint32(16).uint32(message.teamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgOutpostCaptured {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgOutpostCaptured();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.outpostEntindex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgOutpostCaptured {
    return {
      outpostEntindex: isSet(object.outpostEntindex) ? Number(object.outpostEntindex) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgOutpostCaptured): unknown {
    const obj: any = {};
    message.outpostEntindex !== undefined && (obj.outpostEntindex = Math.round(message.outpostEntindex));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    return obj;
  },
};

function createBaseCDOTAUserMsgOutpostGrantedXP(): CDOTAUserMsgOutpostGrantedXP {
  return { teamId: 0, xpAmount: 0 };
}

export const CDOTAUserMsgOutpostGrantedXP = {
  encode(message: CDOTAUserMsgOutpostGrantedXP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamId !== 0) {
      writer.uint32(8).uint32(message.teamId);
    }
    if (message.xpAmount !== 0) {
      writer.uint32(16).uint32(message.xpAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgOutpostGrantedXP {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgOutpostGrantedXP();
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
          if (tag != 16) {
            break;
          }

          message.xpAmount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgOutpostGrantedXP {
    return {
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      xpAmount: isSet(object.xpAmount) ? Number(object.xpAmount) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgOutpostGrantedXP): unknown {
    const obj: any = {};
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.xpAmount !== undefined && (obj.xpAmount = Math.round(message.xpAmount));
    return obj;
  },
};

function createBaseCDOTAUserMsgMoveCameraToUnit(): CDOTAUserMsgMoveCameraToUnit {
  return { unitEhandle: 0 };
}

export const CDOTAUserMsgMoveCameraToUnit = {
  encode(message: CDOTAUserMsgMoveCameraToUnit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unitEhandle !== 0) {
      writer.uint32(8).uint32(message.unitEhandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMoveCameraToUnit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMoveCameraToUnit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.unitEhandle = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgMoveCameraToUnit {
    return { unitEhandle: isSet(object.unitEhandle) ? Number(object.unitEhandle) : 0 };
  },

  toJSON(message: CDOTAUserMsgMoveCameraToUnit): unknown {
    const obj: any = {};
    message.unitEhandle !== undefined && (obj.unitEhandle = Math.round(message.unitEhandle));
    return obj;
  },
};

function createBaseCDOTAUserMsgPauseMinigameData(): CDOTAUserMsgPauseMinigameData {
  return { dataBits: [] };
}

export const CDOTAUserMsgPauseMinigameData = {
  encode(message: CDOTAUserMsgPauseMinigameData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.dataBits) {
      CDOTAUserMsgPauseMinigameData_DataBit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgPauseMinigameData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgPauseMinigameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.dataBits.push(CDOTAUserMsgPauseMinigameData_DataBit.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgPauseMinigameData {
    return {
      dataBits: Array.isArray(object?.dataBits)
        ? object.dataBits.map((e: any) => CDOTAUserMsgPauseMinigameData_DataBit.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDOTAUserMsgPauseMinigameData): unknown {
    const obj: any = {};
    if (message.dataBits) {
      obj.dataBits = message.dataBits.map((e) => e ? CDOTAUserMsgPauseMinigameData_DataBit.toJSON(e) : undefined);
    } else {
      obj.dataBits = [];
    }
    return obj;
  },
};

function createBaseCDOTAUserMsgPauseMinigameData_DataBit(): CDOTAUserMsgPauseMinigameData_DataBit {
  return { index: 0, data: 0, dataExtra: "0" };
}

export const CDOTAUserMsgPauseMinigameData_DataBit = {
  encode(message: CDOTAUserMsgPauseMinigameData_DataBit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.data !== 0) {
      writer.uint32(16).int32(message.data);
    }
    if (message.dataExtra !== "0") {
      writer.uint32(24).int64(message.dataExtra);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgPauseMinigameData_DataBit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgPauseMinigameData_DataBit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.data = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.dataExtra = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgPauseMinigameData_DataBit {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      data: isSet(object.data) ? Number(object.data) : 0,
      dataExtra: isSet(object.dataExtra) ? String(object.dataExtra) : "0",
    };
  },

  toJSON(message: CDOTAUserMsgPauseMinigameData_DataBit): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.data !== undefined && (obj.data = Math.round(message.data));
    message.dataExtra !== undefined && (obj.dataExtra = message.dataExtra);
    return obj;
  },
};

function createBaseCDOTAUserMsgVersusScenePlayerBehavior(): CDOTAUserMsgVersusScenePlayerBehavior {
  return { playerId: 0, behavior: 1, playActivity: undefined, chatWheel: undefined, playbackRate: undefined };
}

export const CDOTAUserMsgVersusScenePlayerBehavior = {
  encode(message: CDOTAUserMsgVersusScenePlayerBehavior, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.behavior !== 1) {
      writer.uint32(16).int32(message.behavior);
    }
    if (message.playActivity !== undefined) {
      VersusScenePlayActivity.encode(message.playActivity, writer.uint32(26).fork()).ldelim();
    }
    if (message.chatWheel !== undefined) {
      VersusSceneChatWheel.encode(message.chatWheel, writer.uint32(34).fork()).ldelim();
    }
    if (message.playbackRate !== undefined) {
      VersusScenePlaybackRate.encode(message.playbackRate, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgVersusScenePlayerBehavior {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgVersusScenePlayerBehavior();
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

          message.behavior = reader.int32() as any;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.playActivity = VersusScenePlayActivity.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.chatWheel = VersusSceneChatWheel.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
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

  fromJSON(object: any): CDOTAUserMsgVersusScenePlayerBehavior {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      behavior: isSet(object.behavior) ? eDOTAVersusScenePlayerBehaviorFromJSON(object.behavior) : 1,
      playActivity: isSet(object.playActivity) ? VersusScenePlayActivity.fromJSON(object.playActivity) : undefined,
      chatWheel: isSet(object.chatWheel) ? VersusSceneChatWheel.fromJSON(object.chatWheel) : undefined,
      playbackRate: isSet(object.playbackRate) ? VersusScenePlaybackRate.fromJSON(object.playbackRate) : undefined,
    };
  },

  toJSON(message: CDOTAUserMsgVersusScenePlayerBehavior): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.behavior !== undefined && (obj.behavior = eDOTAVersusScenePlayerBehaviorToJSON(message.behavior));
    message.playActivity !== undefined &&
      (obj.playActivity = message.playActivity ? VersusScenePlayActivity.toJSON(message.playActivity) : undefined);
    message.chatWheel !== undefined &&
      (obj.chatWheel = message.chatWheel ? VersusSceneChatWheel.toJSON(message.chatWheel) : undefined);
    message.playbackRate !== undefined &&
      (obj.playbackRate = message.playbackRate ? VersusScenePlaybackRate.toJSON(message.playbackRate) : undefined);
    return obj;
  },
};

function createBaseCDOTAUserMsgQoPArcanaSummary(): CDOTAUserMsgQoPArcanaSummary {
  return { ehandle: 0, arcanaLevel: 0, playersHit: 0, playersKilled: 0 };
}

export const CDOTAUserMsgQoPArcanaSummary = {
  encode(message: CDOTAUserMsgQoPArcanaSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ehandle !== 0) {
      writer.uint32(8).uint32(message.ehandle);
    }
    if (message.arcanaLevel !== 0) {
      writer.uint32(16).uint32(message.arcanaLevel);
    }
    if (message.playersHit !== 0) {
      writer.uint32(24).uint32(message.playersHit);
    }
    if (message.playersKilled !== 0) {
      writer.uint32(32).uint32(message.playersKilled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgQoPArcanaSummary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgQoPArcanaSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ehandle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.arcanaLevel = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.playersHit = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.playersKilled = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgQoPArcanaSummary {
    return {
      ehandle: isSet(object.ehandle) ? Number(object.ehandle) : 0,
      arcanaLevel: isSet(object.arcanaLevel) ? Number(object.arcanaLevel) : 0,
      playersHit: isSet(object.playersHit) ? Number(object.playersHit) : 0,
      playersKilled: isSet(object.playersKilled) ? Number(object.playersKilled) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgQoPArcanaSummary): unknown {
    const obj: any = {};
    message.ehandle !== undefined && (obj.ehandle = Math.round(message.ehandle));
    message.arcanaLevel !== undefined && (obj.arcanaLevel = Math.round(message.arcanaLevel));
    message.playersHit !== undefined && (obj.playersHit = Math.round(message.playersHit));
    message.playersKilled !== undefined && (obj.playersKilled = Math.round(message.playersKilled));
    return obj;
  },
};

function createBaseCDOTAUserMsgHotPotatoCreated(): CDOTAUserMsgHotPotatoCreated {
  return { playerId1: 0, playerId2: 0 };
}

export const CDOTAUserMsgHotPotatoCreated = {
  encode(message: CDOTAUserMsgHotPotatoCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId1 !== 0) {
      writer.uint32(8).int32(message.playerId1);
    }
    if (message.playerId2 !== 0) {
      writer.uint32(16).int32(message.playerId2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgHotPotatoCreated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgHotPotatoCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId1 = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerId2 = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgHotPotatoCreated {
    return {
      playerId1: isSet(object.playerId1) ? Number(object.playerId1) : 0,
      playerId2: isSet(object.playerId2) ? Number(object.playerId2) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgHotPotatoCreated): unknown {
    const obj: any = {};
    message.playerId1 !== undefined && (obj.playerId1 = Math.round(message.playerId1));
    message.playerId2 !== undefined && (obj.playerId2 = Math.round(message.playerId2));
    return obj;
  },
};

function createBaseCDOTAUserMsgHotPotatoExploded(): CDOTAUserMsgHotPotatoExploded {
  return { playerId: 0 };
}

export const CDOTAUserMsgHotPotatoExploded = {
  encode(message: CDOTAUserMsgHotPotatoExploded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgHotPotatoExploded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgHotPotatoExploded();
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

  fromJSON(object: any): CDOTAUserMsgHotPotatoExploded {
    return { playerId: isSet(object.playerId) ? Number(object.playerId) : 0 };
  },

  toJSON(message: CDOTAUserMsgHotPotatoExploded): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    return obj;
  },
};

function createBaseCDOTAUserMsgWKArcanaProgress(): CDOTAUserMsgWKArcanaProgress {
  return { ehandle: 0, arcanaLevel: 0, heroId: 0 };
}

export const CDOTAUserMsgWKArcanaProgress = {
  encode(message: CDOTAUserMsgWKArcanaProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ehandle !== 0) {
      writer.uint32(8).uint32(message.ehandle);
    }
    if (message.arcanaLevel !== 0) {
      writer.uint32(16).uint32(message.arcanaLevel);
    }
    if (message.heroId !== 0) {
      writer.uint32(24).uint32(message.heroId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgWKArcanaProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgWKArcanaProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ehandle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.arcanaLevel = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
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

  fromJSON(object: any): CDOTAUserMsgWKArcanaProgress {
    return {
      ehandle: isSet(object.ehandle) ? Number(object.ehandle) : 0,
      arcanaLevel: isSet(object.arcanaLevel) ? Number(object.arcanaLevel) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgWKArcanaProgress): unknown {
    const obj: any = {};
    message.ehandle !== undefined && (obj.ehandle = Math.round(message.ehandle));
    message.arcanaLevel !== undefined && (obj.arcanaLevel = Math.round(message.arcanaLevel));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    return obj;
  },
};

function createBaseCDOTAUserMsgGuildChallengeProgress(): CDOTAUserMsgGuildChallengeProgress {
  return {
    playerProgress: [],
    guildId: 0,
    challengeInstanceId: 0,
    challengeParameter: 0,
    challengeType: 0,
    challengeProgressAtStart: 0,
    complete: false,
  };
}

export const CDOTAUserMsgGuildChallengeProgress = {
  encode(message: CDOTAUserMsgGuildChallengeProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.playerProgress) {
      CDOTAUserMsgGuildChallengeProgress_PlayerProgress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.guildId !== 0) {
      writer.uint32(16).uint32(message.guildId);
    }
    if (message.challengeInstanceId !== 0) {
      writer.uint32(24).uint32(message.challengeInstanceId);
    }
    if (message.challengeParameter !== 0) {
      writer.uint32(32).uint32(message.challengeParameter);
    }
    if (message.challengeType !== 0) {
      writer.uint32(40).int32(message.challengeType);
    }
    if (message.challengeProgressAtStart !== 0) {
      writer.uint32(56).uint32(message.challengeProgressAtStart);
    }
    if (message.complete === true) {
      writer.uint32(64).bool(message.complete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgGuildChallengeProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgGuildChallengeProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.playerProgress.push(
            CDOTAUserMsgGuildChallengeProgress_PlayerProgress.decode(reader, reader.uint32()),
          );
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.challengeInstanceId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.challengeParameter = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.challengeType = reader.int32() as any;
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.challengeProgressAtStart = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.complete = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgGuildChallengeProgress {
    return {
      playerProgress: Array.isArray(object?.playerProgress)
        ? object.playerProgress.map((e: any) => CDOTAUserMsgGuildChallengeProgress_PlayerProgress.fromJSON(e))
        : [],
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      challengeInstanceId: isSet(object.challengeInstanceId) ? Number(object.challengeInstanceId) : 0,
      challengeParameter: isSet(object.challengeParameter) ? Number(object.challengeParameter) : 0,
      challengeType: isSet(object.challengeType)
        ? cDOTAUserMsgGuildChallengeProgress_EChallengeTypeFromJSON(object.challengeType)
        : 0,
      challengeProgressAtStart: isSet(object.challengeProgressAtStart) ? Number(object.challengeProgressAtStart) : 0,
      complete: isSet(object.complete) ? Boolean(object.complete) : false,
    };
  },

  toJSON(message: CDOTAUserMsgGuildChallengeProgress): unknown {
    const obj: any = {};
    if (message.playerProgress) {
      obj.playerProgress = message.playerProgress.map((e) =>
        e ? CDOTAUserMsgGuildChallengeProgress_PlayerProgress.toJSON(e) : undefined
      );
    } else {
      obj.playerProgress = [];
    }
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.challengeInstanceId !== undefined && (obj.challengeInstanceId = Math.round(message.challengeInstanceId));
    message.challengeParameter !== undefined && (obj.challengeParameter = Math.round(message.challengeParameter));
    message.challengeType !== undefined &&
      (obj.challengeType = cDOTAUserMsgGuildChallengeProgress_EChallengeTypeToJSON(message.challengeType));
    message.challengeProgressAtStart !== undefined &&
      (obj.challengeProgressAtStart = Math.round(message.challengeProgressAtStart));
    message.complete !== undefined && (obj.complete = message.complete);
    return obj;
  },
};

function createBaseCDOTAUserMsgGuildChallengeProgress_PlayerProgress(): CDOTAUserMsgGuildChallengeProgress_PlayerProgress {
  return { playerId: 0, progress: 0 };
}

export const CDOTAUserMsgGuildChallengeProgress_PlayerProgress = {
  encode(
    message: CDOTAUserMsgGuildChallengeProgress_PlayerProgress,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.progress !== 0) {
      writer.uint32(48).uint32(message.progress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgGuildChallengeProgress_PlayerProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgGuildChallengeProgress_PlayerProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.progress = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgGuildChallengeProgress_PlayerProgress {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      progress: isSet(object.progress) ? Number(object.progress) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgGuildChallengeProgress_PlayerProgress): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.progress !== undefined && (obj.progress = Math.round(message.progress));
    return obj;
  },
};

function createBaseCDOTAUserMsgWRArcanaProgress(): CDOTAUserMsgWRArcanaProgress {
  return { ehandle: 0, targetEhandle: 0, arrowsLanded: 0, damageDealt: 0, targetHp: 0, targetMaxHp: 0, arcanaLevel: 0 };
}

export const CDOTAUserMsgWRArcanaProgress = {
  encode(message: CDOTAUserMsgWRArcanaProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ehandle !== 0) {
      writer.uint32(8).uint32(message.ehandle);
    }
    if (message.targetEhandle !== 0) {
      writer.uint32(16).uint32(message.targetEhandle);
    }
    if (message.arrowsLanded !== 0) {
      writer.uint32(24).uint32(message.arrowsLanded);
    }
    if (message.damageDealt !== 0) {
      writer.uint32(32).uint32(message.damageDealt);
    }
    if (message.targetHp !== 0) {
      writer.uint32(40).uint32(message.targetHp);
    }
    if (message.targetMaxHp !== 0) {
      writer.uint32(48).uint32(message.targetMaxHp);
    }
    if (message.arcanaLevel !== 0) {
      writer.uint32(56).uint32(message.arcanaLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgWRArcanaProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgWRArcanaProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ehandle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetEhandle = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.arrowsLanded = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.damageDealt = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.targetHp = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.targetMaxHp = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.arcanaLevel = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgWRArcanaProgress {
    return {
      ehandle: isSet(object.ehandle) ? Number(object.ehandle) : 0,
      targetEhandle: isSet(object.targetEhandle) ? Number(object.targetEhandle) : 0,
      arrowsLanded: isSet(object.arrowsLanded) ? Number(object.arrowsLanded) : 0,
      damageDealt: isSet(object.damageDealt) ? Number(object.damageDealt) : 0,
      targetHp: isSet(object.targetHp) ? Number(object.targetHp) : 0,
      targetMaxHp: isSet(object.targetMaxHp) ? Number(object.targetMaxHp) : 0,
      arcanaLevel: isSet(object.arcanaLevel) ? Number(object.arcanaLevel) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgWRArcanaProgress): unknown {
    const obj: any = {};
    message.ehandle !== undefined && (obj.ehandle = Math.round(message.ehandle));
    message.targetEhandle !== undefined && (obj.targetEhandle = Math.round(message.targetEhandle));
    message.arrowsLanded !== undefined && (obj.arrowsLanded = Math.round(message.arrowsLanded));
    message.damageDealt !== undefined && (obj.damageDealt = Math.round(message.damageDealt));
    message.targetHp !== undefined && (obj.targetHp = Math.round(message.targetHp));
    message.targetMaxHp !== undefined && (obj.targetMaxHp = Math.round(message.targetMaxHp));
    message.arcanaLevel !== undefined && (obj.arcanaLevel = Math.round(message.arcanaLevel));
    return obj;
  },
};

function createBaseCDOTAUserMsgWRArcanaSummary(): CDOTAUserMsgWRArcanaSummary {
  return {
    ehandle: 0,
    targetEhandle: 0,
    arrowsLanded: 0,
    damageDealt: 0,
    targetHp: 0,
    targetMaxHp: 0,
    arcanaLevel: 0,
    success: false,
  };
}

export const CDOTAUserMsgWRArcanaSummary = {
  encode(message: CDOTAUserMsgWRArcanaSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ehandle !== 0) {
      writer.uint32(8).uint32(message.ehandle);
    }
    if (message.targetEhandle !== 0) {
      writer.uint32(16).uint32(message.targetEhandle);
    }
    if (message.arrowsLanded !== 0) {
      writer.uint32(24).uint32(message.arrowsLanded);
    }
    if (message.damageDealt !== 0) {
      writer.uint32(32).uint32(message.damageDealt);
    }
    if (message.targetHp !== 0) {
      writer.uint32(40).uint32(message.targetHp);
    }
    if (message.targetMaxHp !== 0) {
      writer.uint32(48).uint32(message.targetMaxHp);
    }
    if (message.arcanaLevel !== 0) {
      writer.uint32(56).uint32(message.arcanaLevel);
    }
    if (message.success === true) {
      writer.uint32(64).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgWRArcanaSummary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgWRArcanaSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ehandle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetEhandle = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.arrowsLanded = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.damageDealt = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.targetHp = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.targetMaxHp = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.arcanaLevel = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.success = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgWRArcanaSummary {
    return {
      ehandle: isSet(object.ehandle) ? Number(object.ehandle) : 0,
      targetEhandle: isSet(object.targetEhandle) ? Number(object.targetEhandle) : 0,
      arrowsLanded: isSet(object.arrowsLanded) ? Number(object.arrowsLanded) : 0,
      damageDealt: isSet(object.damageDealt) ? Number(object.damageDealt) : 0,
      targetHp: isSet(object.targetHp) ? Number(object.targetHp) : 0,
      targetMaxHp: isSet(object.targetMaxHp) ? Number(object.targetMaxHp) : 0,
      arcanaLevel: isSet(object.arcanaLevel) ? Number(object.arcanaLevel) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
    };
  },

  toJSON(message: CDOTAUserMsgWRArcanaSummary): unknown {
    const obj: any = {};
    message.ehandle !== undefined && (obj.ehandle = Math.round(message.ehandle));
    message.targetEhandle !== undefined && (obj.targetEhandle = Math.round(message.targetEhandle));
    message.arrowsLanded !== undefined && (obj.arrowsLanded = Math.round(message.arrowsLanded));
    message.damageDealt !== undefined && (obj.damageDealt = Math.round(message.damageDealt));
    message.targetHp !== undefined && (obj.targetHp = Math.round(message.targetHp));
    message.targetMaxHp !== undefined && (obj.targetMaxHp = Math.round(message.targetMaxHp));
    message.arcanaLevel !== undefined && (obj.arcanaLevel = Math.round(message.arcanaLevel));
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
};

function createBaseCDOTAUserMsgEmptyItemSlotAlert(): CDOTAUserMsgEmptyItemSlotAlert {
  return { sourcePlayerId: 0, targetPlayerId: 0, slotIndex: 0, cooldownSeconds: 0 };
}

export const CDOTAUserMsgEmptyItemSlotAlert = {
  encode(message: CDOTAUserMsgEmptyItemSlotAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourcePlayerId !== 0) {
      writer.uint32(8).int32(message.sourcePlayerId);
    }
    if (message.targetPlayerId !== 0) {
      writer.uint32(16).int32(message.targetPlayerId);
    }
    if (message.slotIndex !== 0) {
      writer.uint32(24).int32(message.slotIndex);
    }
    if (message.cooldownSeconds !== 0) {
      writer.uint32(32).int32(message.cooldownSeconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgEmptyItemSlotAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgEmptyItemSlotAlert();
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

          message.slotIndex = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.cooldownSeconds = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgEmptyItemSlotAlert {
    return {
      sourcePlayerId: isSet(object.sourcePlayerId) ? Number(object.sourcePlayerId) : 0,
      targetPlayerId: isSet(object.targetPlayerId) ? Number(object.targetPlayerId) : 0,
      slotIndex: isSet(object.slotIndex) ? Number(object.slotIndex) : 0,
      cooldownSeconds: isSet(object.cooldownSeconds) ? Number(object.cooldownSeconds) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgEmptyItemSlotAlert): unknown {
    const obj: any = {};
    message.sourcePlayerId !== undefined && (obj.sourcePlayerId = Math.round(message.sourcePlayerId));
    message.targetPlayerId !== undefined && (obj.targetPlayerId = Math.round(message.targetPlayerId));
    message.slotIndex !== undefined && (obj.slotIndex = Math.round(message.slotIndex));
    message.cooldownSeconds !== undefined && (obj.cooldownSeconds = Math.round(message.cooldownSeconds));
    return obj;
  },
};

function createBaseCDOTAUserMsgAghsStatusAlert(): CDOTAUserMsgAghsStatusAlert {
  return { sourcePlayerId: 0, targetPlayerId: 0, targetEntindex: 0, alertType: 0, hasScepter: false, hasShard: false };
}

export const CDOTAUserMsgAghsStatusAlert = {
  encode(message: CDOTAUserMsgAghsStatusAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.hasScepter === true) {
      writer.uint32(40).bool(message.hasScepter);
    }
    if (message.hasShard === true) {
      writer.uint32(48).bool(message.hasShard);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgAghsStatusAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgAghsStatusAlert();
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
        case 5:
          if (tag != 40) {
            break;
          }

          message.hasScepter = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.hasShard = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgAghsStatusAlert {
    return {
      sourcePlayerId: isSet(object.sourcePlayerId) ? Number(object.sourcePlayerId) : 0,
      targetPlayerId: isSet(object.targetPlayerId) ? Number(object.targetPlayerId) : 0,
      targetEntindex: isSet(object.targetEntindex) ? Number(object.targetEntindex) : 0,
      alertType: isSet(object.alertType) ? Number(object.alertType) : 0,
      hasScepter: isSet(object.hasScepter) ? Boolean(object.hasScepter) : false,
      hasShard: isSet(object.hasShard) ? Boolean(object.hasShard) : false,
    };
  },

  toJSON(message: CDOTAUserMsgAghsStatusAlert): unknown {
    const obj: any = {};
    message.sourcePlayerId !== undefined && (obj.sourcePlayerId = Math.round(message.sourcePlayerId));
    message.targetPlayerId !== undefined && (obj.targetPlayerId = Math.round(message.targetPlayerId));
    message.targetEntindex !== undefined && (obj.targetEntindex = Math.round(message.targetEntindex));
    message.alertType !== undefined && (obj.alertType = Math.round(message.alertType));
    message.hasScepter !== undefined && (obj.hasScepter = message.hasScepter);
    message.hasShard !== undefined && (obj.hasShard = message.hasShard);
    return obj;
  },
};

function createBaseCDOTAUserMsgMutedPlayers(): CDOTAUserMsgMutedPlayers {
  return { textMutedPlayerIds: [], voiceMutedPlayerIds: [] };
}

export const CDOTAUserMsgMutedPlayers = {
  encode(message: CDOTAUserMsgMutedPlayers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.textMutedPlayerIds) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.voiceMutedPlayerIds) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMutedPlayers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMutedPlayers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.textMutedPlayerIds.push(reader.int32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.textMutedPlayerIds.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag == 16) {
            message.voiceMutedPlayerIds.push(reader.int32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.voiceMutedPlayerIds.push(reader.int32());
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

  fromJSON(object: any): CDOTAUserMsgMutedPlayers {
    return {
      textMutedPlayerIds: Array.isArray(object?.textMutedPlayerIds)
        ? object.textMutedPlayerIds.map((e: any) => Number(e))
        : [],
      voiceMutedPlayerIds: Array.isArray(object?.voiceMutedPlayerIds)
        ? object.voiceMutedPlayerIds.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CDOTAUserMsgMutedPlayers): unknown {
    const obj: any = {};
    if (message.textMutedPlayerIds) {
      obj.textMutedPlayerIds = message.textMutedPlayerIds.map((e) => Math.round(e));
    } else {
      obj.textMutedPlayerIds = [];
    }
    if (message.voiceMutedPlayerIds) {
      obj.voiceMutedPlayerIds = message.voiceMutedPlayerIds.map((e) => Math.round(e));
    } else {
      obj.voiceMutedPlayerIds = [];
    }
    return obj;
  },
};

function createBaseCDOTAUserMsgContextualTip(): CDOTAUserMsgContextualTip {
  return {
    tipId: 0,
    referencedAbilities: [],
    referencedUnits: [],
    panoramaClasses: [],
    forceAnnotation: false,
    variant: 0,
    intParam: 0,
    intParam2: 0,
    floatParam: 0,
    floatParam2: 0,
    stringParam: "",
    stringParam2: "",
    tipTextOverride: "",
    tipAnnotationOverride: "",
    panoramaSnippet: "",
  };
}

export const CDOTAUserMsgContextualTip = {
  encode(message: CDOTAUserMsgContextualTip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tipId !== 0) {
      writer.uint32(8).int32(message.tipId);
    }
    for (const v of message.referencedAbilities) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.referencedUnits) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.panoramaClasses) {
      writer.uint32(34).string(v!);
    }
    if (message.forceAnnotation === true) {
      writer.uint32(40).bool(message.forceAnnotation);
    }
    if (message.variant !== 0) {
      writer.uint32(48).int32(message.variant);
    }
    if (message.intParam !== 0) {
      writer.uint32(56).int32(message.intParam);
    }
    if (message.intParam2 !== 0) {
      writer.uint32(64).int32(message.intParam2);
    }
    if (message.floatParam !== 0) {
      writer.uint32(77).float(message.floatParam);
    }
    if (message.floatParam2 !== 0) {
      writer.uint32(85).float(message.floatParam2);
    }
    if (message.stringParam !== "") {
      writer.uint32(90).string(message.stringParam);
    }
    if (message.stringParam2 !== "") {
      writer.uint32(98).string(message.stringParam2);
    }
    if (message.tipTextOverride !== "") {
      writer.uint32(106).string(message.tipTextOverride);
    }
    if (message.tipAnnotationOverride !== "") {
      writer.uint32(114).string(message.tipAnnotationOverride);
    }
    if (message.panoramaSnippet !== "") {
      writer.uint32(122).string(message.panoramaSnippet);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgContextualTip {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgContextualTip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.tipId = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.referencedAbilities.push(reader.string());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.referencedUnits.push(reader.string());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.panoramaClasses.push(reader.string());
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.forceAnnotation = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.variant = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.intParam = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.intParam2 = reader.int32();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.floatParam = reader.float();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.floatParam2 = reader.float();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.stringParam = reader.string();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.stringParam2 = reader.string();
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.tipTextOverride = reader.string();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.tipAnnotationOverride = reader.string();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.panoramaSnippet = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgContextualTip {
    return {
      tipId: isSet(object.tipId) ? Number(object.tipId) : 0,
      referencedAbilities: Array.isArray(object?.referencedAbilities)
        ? object.referencedAbilities.map((e: any) => String(e))
        : [],
      referencedUnits: Array.isArray(object?.referencedUnits) ? object.referencedUnits.map((e: any) => String(e)) : [],
      panoramaClasses: Array.isArray(object?.panoramaClasses) ? object.panoramaClasses.map((e: any) => String(e)) : [],
      forceAnnotation: isSet(object.forceAnnotation) ? Boolean(object.forceAnnotation) : false,
      variant: isSet(object.variant) ? Number(object.variant) : 0,
      intParam: isSet(object.intParam) ? Number(object.intParam) : 0,
      intParam2: isSet(object.intParam2) ? Number(object.intParam2) : 0,
      floatParam: isSet(object.floatParam) ? Number(object.floatParam) : 0,
      floatParam2: isSet(object.floatParam2) ? Number(object.floatParam2) : 0,
      stringParam: isSet(object.stringParam) ? String(object.stringParam) : "",
      stringParam2: isSet(object.stringParam2) ? String(object.stringParam2) : "",
      tipTextOverride: isSet(object.tipTextOverride) ? String(object.tipTextOverride) : "",
      tipAnnotationOverride: isSet(object.tipAnnotationOverride) ? String(object.tipAnnotationOverride) : "",
      panoramaSnippet: isSet(object.panoramaSnippet) ? String(object.panoramaSnippet) : "",
    };
  },

  toJSON(message: CDOTAUserMsgContextualTip): unknown {
    const obj: any = {};
    message.tipId !== undefined && (obj.tipId = Math.round(message.tipId));
    if (message.referencedAbilities) {
      obj.referencedAbilities = message.referencedAbilities.map((e) => e);
    } else {
      obj.referencedAbilities = [];
    }
    if (message.referencedUnits) {
      obj.referencedUnits = message.referencedUnits.map((e) => e);
    } else {
      obj.referencedUnits = [];
    }
    if (message.panoramaClasses) {
      obj.panoramaClasses = message.panoramaClasses.map((e) => e);
    } else {
      obj.panoramaClasses = [];
    }
    message.forceAnnotation !== undefined && (obj.forceAnnotation = message.forceAnnotation);
    message.variant !== undefined && (obj.variant = Math.round(message.variant));
    message.intParam !== undefined && (obj.intParam = Math.round(message.intParam));
    message.intParam2 !== undefined && (obj.intParam2 = Math.round(message.intParam2));
    message.floatParam !== undefined && (obj.floatParam = message.floatParam);
    message.floatParam2 !== undefined && (obj.floatParam2 = message.floatParam2);
    message.stringParam !== undefined && (obj.stringParam = message.stringParam);
    message.stringParam2 !== undefined && (obj.stringParam2 = message.stringParam2);
    message.tipTextOverride !== undefined && (obj.tipTextOverride = message.tipTextOverride);
    message.tipAnnotationOverride !== undefined && (obj.tipAnnotationOverride = message.tipAnnotationOverride);
    message.panoramaSnippet !== undefined && (obj.panoramaSnippet = message.panoramaSnippet);
    return obj;
  },
};

function createBaseCDOTAUserMsgChatMessage(): CDOTAUserMsgChatMessage {
  return { sourcePlayerId: 0, channelType: 0, messageText: "" };
}

export const CDOTAUserMsgChatMessage = {
  encode(message: CDOTAUserMsgChatMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourcePlayerId !== 0) {
      writer.uint32(8).int32(message.sourcePlayerId);
    }
    if (message.channelType !== 0) {
      writer.uint32(16).uint32(message.channelType);
    }
    if (message.messageText !== "") {
      writer.uint32(26).string(message.messageText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgChatMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgChatMessage();
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

          message.channelType = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
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

  fromJSON(object: any): CDOTAUserMsgChatMessage {
    return {
      sourcePlayerId: isSet(object.sourcePlayerId) ? Number(object.sourcePlayerId) : 0,
      channelType: isSet(object.channelType) ? Number(object.channelType) : 0,
      messageText: isSet(object.messageText) ? String(object.messageText) : "",
    };
  },

  toJSON(message: CDOTAUserMsgChatMessage): unknown {
    const obj: any = {};
    message.sourcePlayerId !== undefined && (obj.sourcePlayerId = Math.round(message.sourcePlayerId));
    message.channelType !== undefined && (obj.channelType = Math.round(message.channelType));
    message.messageText !== undefined && (obj.messageText = message.messageText);
    return obj;
  },
};

function createBaseCDOTAUserMsgRockPaperScissorsStarted(): CDOTAUserMsgRockPaperScissorsStarted {
  return { playerIdSource: 0, playerIdTarget: 0 };
}

export const CDOTAUserMsgRockPaperScissorsStarted = {
  encode(message: CDOTAUserMsgRockPaperScissorsStarted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerIdSource !== 0) {
      writer.uint32(8).int32(message.playerIdSource);
    }
    if (message.playerIdTarget !== 0) {
      writer.uint32(16).int32(message.playerIdTarget);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgRockPaperScissorsStarted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgRockPaperScissorsStarted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerIdSource = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerIdTarget = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgRockPaperScissorsStarted {
    return {
      playerIdSource: isSet(object.playerIdSource) ? Number(object.playerIdSource) : 0,
      playerIdTarget: isSet(object.playerIdTarget) ? Number(object.playerIdTarget) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgRockPaperScissorsStarted): unknown {
    const obj: any = {};
    message.playerIdSource !== undefined && (obj.playerIdSource = Math.round(message.playerIdSource));
    message.playerIdTarget !== undefined && (obj.playerIdTarget = Math.round(message.playerIdTarget));
    return obj;
  },
};

function createBaseCDOTAUserMsgRockPaperScissorsFinished(): CDOTAUserMsgRockPaperScissorsFinished {
  return { playerId1: 0, playerId2: 0, player1Choice: 0, player2Choice: 0 };
}

export const CDOTAUserMsgRockPaperScissorsFinished = {
  encode(message: CDOTAUserMsgRockPaperScissorsFinished, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId1 !== 0) {
      writer.uint32(8).int32(message.playerId1);
    }
    if (message.playerId2 !== 0) {
      writer.uint32(16).int32(message.playerId2);
    }
    if (message.player1Choice !== 0) {
      writer.uint32(24).int32(message.player1Choice);
    }
    if (message.player2Choice !== 0) {
      writer.uint32(32).int32(message.player2Choice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgRockPaperScissorsFinished {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgRockPaperScissorsFinished();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId1 = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerId2 = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.player1Choice = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.player2Choice = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgRockPaperScissorsFinished {
    return {
      playerId1: isSet(object.playerId1) ? Number(object.playerId1) : 0,
      playerId2: isSet(object.playerId2) ? Number(object.playerId2) : 0,
      player1Choice: isSet(object.player1Choice) ? Number(object.player1Choice) : 0,
      player2Choice: isSet(object.player2Choice) ? Number(object.player2Choice) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgRockPaperScissorsFinished): unknown {
    const obj: any = {};
    message.playerId1 !== undefined && (obj.playerId1 = Math.round(message.playerId1));
    message.playerId2 !== undefined && (obj.playerId2 = Math.round(message.playerId2));
    message.player1Choice !== undefined && (obj.player1Choice = Math.round(message.player1Choice));
    message.player2Choice !== undefined && (obj.player2Choice = Math.round(message.player2Choice));
    return obj;
  },
};

function createBaseCDOTAUserMsgDuelOpponentKilled(): CDOTAUserMsgDuelOpponentKilled {
  return { playerIdWinner: 0, playerIdLoser: 0 };
}

export const CDOTAUserMsgDuelOpponentKilled = {
  encode(message: CDOTAUserMsgDuelOpponentKilled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerIdWinner !== 0) {
      writer.uint32(8).int32(message.playerIdWinner);
    }
    if (message.playerIdLoser !== 0) {
      writer.uint32(16).int32(message.playerIdLoser);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgDuelOpponentKilled {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgDuelOpponentKilled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerIdWinner = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerIdLoser = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgDuelOpponentKilled {
    return {
      playerIdWinner: isSet(object.playerIdWinner) ? Number(object.playerIdWinner) : 0,
      playerIdLoser: isSet(object.playerIdLoser) ? Number(object.playerIdLoser) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgDuelOpponentKilled): unknown {
    const obj: any = {};
    message.playerIdWinner !== undefined && (obj.playerIdWinner = Math.round(message.playerIdWinner));
    message.playerIdLoser !== undefined && (obj.playerIdLoser = Math.round(message.playerIdLoser));
    return obj;
  },
};

function createBaseCDOTAUserMsgDuelAccepted(): CDOTAUserMsgDuelAccepted {
  return { playerId1: 0, playerId2: 0 };
}

export const CDOTAUserMsgDuelAccepted = {
  encode(message: CDOTAUserMsgDuelAccepted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId1 !== 0) {
      writer.uint32(8).int32(message.playerId1);
    }
    if (message.playerId2 !== 0) {
      writer.uint32(16).int32(message.playerId2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgDuelAccepted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgDuelAccepted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId1 = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerId2 = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgDuelAccepted {
    return {
      playerId1: isSet(object.playerId1) ? Number(object.playerId1) : 0,
      playerId2: isSet(object.playerId2) ? Number(object.playerId2) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgDuelAccepted): unknown {
    const obj: any = {};
    message.playerId1 !== undefined && (obj.playerId1 = Math.round(message.playerId1));
    message.playerId2 !== undefined && (obj.playerId2 = Math.round(message.playerId2));
    return obj;
  },
};

function createBaseCDOTAUserMsgDuelRequested(): CDOTAUserMsgDuelRequested {
  return { playerIdRequestor: 0 };
}

export const CDOTAUserMsgDuelRequested = {
  encode(message: CDOTAUserMsgDuelRequested, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerIdRequestor !== 0) {
      writer.uint32(8).int32(message.playerIdRequestor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgDuelRequested {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgDuelRequested();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerIdRequestor = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgDuelRequested {
    return { playerIdRequestor: isSet(object.playerIdRequestor) ? Number(object.playerIdRequestor) : 0 };
  },

  toJSON(message: CDOTAUserMsgDuelRequested): unknown {
    const obj: any = {};
    message.playerIdRequestor !== undefined && (obj.playerIdRequestor = Math.round(message.playerIdRequestor));
    return obj;
  },
};

function createBaseCDOTAUserMsgMuertaReleaseEventAssignedTargetKilled(): CDOTAUserMsgMuertaReleaseEventAssignedTargetKilled {
  return { playerIdKiller: 0, playerIdTarget: 0, points: 0, pointsTotal: 0, lastHit: false };
}

export const CDOTAUserMsgMuertaReleaseEventAssignedTargetKilled = {
  encode(
    message: CDOTAUserMsgMuertaReleaseEventAssignedTargetKilled,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playerIdKiller !== 0) {
      writer.uint32(8).int32(message.playerIdKiller);
    }
    if (message.playerIdTarget !== 0) {
      writer.uint32(16).int32(message.playerIdTarget);
    }
    if (message.points !== 0) {
      writer.uint32(24).int32(message.points);
    }
    if (message.pointsTotal !== 0) {
      writer.uint32(32).int32(message.pointsTotal);
    }
    if (message.lastHit === true) {
      writer.uint32(40).bool(message.lastHit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMuertaReleaseEventAssignedTargetKilled {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMuertaReleaseEventAssignedTargetKilled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerIdKiller = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerIdTarget = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.points = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.pointsTotal = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.lastHit = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAUserMsgMuertaReleaseEventAssignedTargetKilled {
    return {
      playerIdKiller: isSet(object.playerIdKiller) ? Number(object.playerIdKiller) : 0,
      playerIdTarget: isSet(object.playerIdTarget) ? Number(object.playerIdTarget) : 0,
      points: isSet(object.points) ? Number(object.points) : 0,
      pointsTotal: isSet(object.pointsTotal) ? Number(object.pointsTotal) : 0,
      lastHit: isSet(object.lastHit) ? Boolean(object.lastHit) : false,
    };
  },

  toJSON(message: CDOTAUserMsgMuertaReleaseEventAssignedTargetKilled): unknown {
    const obj: any = {};
    message.playerIdKiller !== undefined && (obj.playerIdKiller = Math.round(message.playerIdKiller));
    message.playerIdTarget !== undefined && (obj.playerIdTarget = Math.round(message.playerIdTarget));
    message.points !== undefined && (obj.points = Math.round(message.points));
    message.pointsTotal !== undefined && (obj.pointsTotal = Math.round(message.pointsTotal));
    message.lastHit !== undefined && (obj.lastHit = message.lastHit);
    return obj;
  },
};

function createBaseCDOTAUserMsgPlayerDraftSuggestPick(): CDOTAUserMsgPlayerDraftSuggestPick {
  return { playerId: 0, suggestionPlayerId: 0 };
}

export const CDOTAUserMsgPlayerDraftSuggestPick = {
  encode(message: CDOTAUserMsgPlayerDraftSuggestPick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.suggestionPlayerId !== 0) {
      writer.uint32(16).int32(message.suggestionPlayerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgPlayerDraftSuggestPick {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgPlayerDraftSuggestPick();
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

  fromJSON(object: any): CDOTAUserMsgPlayerDraftSuggestPick {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      suggestionPlayerId: isSet(object.suggestionPlayerId) ? Number(object.suggestionPlayerId) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgPlayerDraftSuggestPick): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.suggestionPlayerId !== undefined && (obj.suggestionPlayerId = Math.round(message.suggestionPlayerId));
    return obj;
  },
};

function createBaseCDOTAUserMsgPlayerDraftPick(): CDOTAUserMsgPlayerDraftPick {
  return { playerIdCaptain: 0, playerIdTarget: 0, team: 0 };
}

export const CDOTAUserMsgPlayerDraftPick = {
  encode(message: CDOTAUserMsgPlayerDraftPick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerIdCaptain !== 0) {
      writer.uint32(8).int32(message.playerIdCaptain);
    }
    if (message.playerIdTarget !== 0) {
      writer.uint32(16).int32(message.playerIdTarget);
    }
    if (message.team !== 0) {
      writer.uint32(24).int32(message.team);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgPlayerDraftPick {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgPlayerDraftPick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerIdCaptain = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerIdTarget = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
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

  fromJSON(object: any): CDOTAUserMsgPlayerDraftPick {
    return {
      playerIdCaptain: isSet(object.playerIdCaptain) ? Number(object.playerIdCaptain) : 0,
      playerIdTarget: isSet(object.playerIdTarget) ? Number(object.playerIdTarget) : 0,
      team: isSet(object.team) ? Number(object.team) : 0,
    };
  },

  toJSON(message: CDOTAUserMsgPlayerDraftPick): unknown {
    const obj: any = {};
    message.playerIdCaptain !== undefined && (obj.playerIdCaptain = Math.round(message.playerIdCaptain));
    message.playerIdTarget !== undefined && (obj.playerIdTarget = Math.round(message.playerIdTarget));
    message.team !== undefined && (obj.team = Math.round(message.team));
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
