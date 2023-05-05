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
  VersusSceneChatWheel,
  VersusScenePlayActivity,
  VersusScenePlaybackRate,
} from "./dota_commonmessages";
import { EEvent, EOverwatchReportReason } from "./dota_shared_enums";

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

export enum CDOTAClientMsgUnitsAutoAttackMode_EUnitType {
  NORMAL = 0,
  SUMMONED = 1,
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
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
