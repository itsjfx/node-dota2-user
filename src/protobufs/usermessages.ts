/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CEntityMsg, CMsgQAngle, CMsgQuaternion, CMsgVector } from "./networkbasetypes";

export enum EBaseUserMessages {
  UM_AchievementEvent = 101,
  UM_CloseCaption = 102,
  UM_CloseCaptionDirect = 103,
  UM_CurrentTimescale = 104,
  UM_DesiredTimescale = 105,
  UM_Fade = 106,
  UM_GameTitle = 107,
  UM_HudMsg = 110,
  UM_HudText = 111,
  UM_ColoredText = 113,
  UM_RequestState = 114,
  UM_ResetHUD = 115,
  UM_Rumble = 116,
  UM_SayText = 117,
  UM_SayText2 = 118,
  UM_SayTextChannel = 119,
  UM_Shake = 120,
  UM_ShakeDir = 121,
  UM_TextMsg = 124,
  UM_ScreenTilt = 125,
  UM_VoiceMask = 128,
  UM_SendAudio = 130,
  UM_ItemPickup = 131,
  UM_AmmoDenied = 132,
  UM_ShowMenu = 134,
  UM_CreditsMsg = 135,
  UM_CloseCaptionPlaceholder = 142,
  UM_CameraTransition = 143,
  UM_AudioParameter = 144,
  UM_ParticleManager = 145,
  UM_HudError = 146,
  UM_CustomGameEvent = 148,
  UM_AnimGraphUpdate = 149,
  UM_HapticsManagerPulse = 150,
  UM_HapticsManagerEffect = 151,
  UM_CommandQueueState = 152,
  UM_UpdateCssClasses = 153,
  UM_ServerFrameTime = 154,
  UM_LagCompensationError = 155,
  UM_RequestDllStatus = 156,
  UM_RequestUtilAction = 157,
  UM_UtilActionResponse = 158,
  UM_DllStatusResponse = 159,
  UM_RequestInventory = 160,
  UM_InventoryResponse = 161,
  UM_MAX_BASE = 200,
}

export enum EBaseEntityMessages {
  EM_PlayJingle = 136,
  EM_ScreenOverlay = 137,
  EM_RemoveAllDecals = 138,
  EM_PropagateForce = 139,
  EM_DoSpark = 140,
  EM_FixAngle = 141,
}

export enum eRollType {
  ROLL_NONE = -1,
  ROLL_STATS = 0,
  ROLL_CREDITS = 1,
  ROLL_LATE_JOIN_LOGO = 2,
  ROLL_OUTTRO = 3,
}

export enum particleMessage {
  GAME_PARTICLE_MANAGER_EVENT_CREATE = 0,
  GAME_PARTICLE_MANAGER_EVENT_UPDATE = 1,
  GAME_PARTICLE_MANAGER_EVENT_UPDATE_FORWARD = 2,
  GAME_PARTICLE_MANAGER_EVENT_UPDATE_ORIENTATION = 3,
  GAME_PARTICLE_MANAGER_EVENT_UPDATE_FALLBACK = 4,
  GAME_PARTICLE_MANAGER_EVENT_UPDATE_ENT = 5,
  GAME_PARTICLE_MANAGER_EVENT_UPDATE_OFFSET = 6,
  GAME_PARTICLE_MANAGER_EVENT_DESTROY = 7,
  GAME_PARTICLE_MANAGER_EVENT_DESTROY_INVOLVING = 8,
  GAME_PARTICLE_MANAGER_EVENT_RELEASE = 9,
  GAME_PARTICLE_MANAGER_EVENT_LATENCY = 10,
  GAME_PARTICLE_MANAGER_EVENT_SHOULD_DRAW = 11,
  GAME_PARTICLE_MANAGER_EVENT_FROZEN = 12,
  GAME_PARTICLE_MANAGER_EVENT_CHANGE_CONTROL_POINT_ATTACHMENT = 13,
  GAME_PARTICLE_MANAGER_EVENT_UPDATE_ENTITY_POSITION = 14,
  GAME_PARTICLE_MANAGER_EVENT_SET_FOW_PROPERTIES = 15,
  GAME_PARTICLE_MANAGER_EVENT_SET_TEXT = 16,
  GAME_PARTICLE_MANAGER_EVENT_SET_SHOULD_CHECK_FOW = 17,
  GAME_PARTICLE_MANAGER_EVENT_SET_CONTROL_POINT_MODEL = 18,
  GAME_PARTICLE_MANAGER_EVENT_SET_CONTROL_POINT_SNAPSHOT = 19,
  GAME_PARTICLE_MANAGER_EVENT_SET_TEXTURE_ATTRIBUTE = 20,
  GAME_PARTICLE_MANAGER_EVENT_SET_SCENE_OBJECT_GENERIC_FLAG = 21,
  GAME_PARTICLE_MANAGER_EVENT_SET_SCENE_OBJECT_TINT_AND_DESAT = 22,
  GAME_PARTICLE_MANAGER_EVENT_DESTROY_NAMED = 23,
  GAME_PARTICLE_MANAGER_EVENT_SKIP_TO_TIME = 24,
  GAME_PARTICLE_MANAGER_EVENT_CAN_FREEZE = 25,
  GAME_PARTICLE_MANAGER_EVENT_SET_NAMED_VALUE_CONTEXT = 26,
  GAME_PARTICLE_MANAGER_EVENT_UPDATE_TRANSFORM = 27,
  GAME_PARTICLE_MANAGER_EVENT_FREEZE_TRANSITION_OVERRIDE = 28,
}

export enum EHapticPulseType {
  VR_HAND_HAPTIC_PULSE_LIGHT = 0,
  VR_HAND_HAPTIC_PULSE_MEDIUM = 1,
  VR_HAND_HAPTIC_PULSE_STRONG = 2,
}

export interface CUserMessageAchievementEvent {
  achievement: number;
}

export interface CUserMessageCloseCaption {
  hash: number;
  duration: number;
  fromPlayer: boolean;
  entIndex: number;
}

export interface CUserMessageCloseCaptionDirect {
  hash: number;
  duration: number;
  fromPlayer: boolean;
  entIndex: number;
}

export interface CUserMessageCloseCaptionPlaceholder {
  string: string;
  duration: number;
  fromPlayer: boolean;
  entIndex: number;
}

export interface CUserMessageCurrentTimescale {
  current: number;
}

export interface CUserMessageDesiredTimescale {
  desired: number;
  acceleration: number;
  minblendrate: number;
  blenddeltamultiplier: number;
}

export interface CUserMessageFade {
  duration: number;
  holdTime: number;
  flags: number;
  color: number;
}

export interface CUserMessageShake {
  command: number;
  amplitude: number;
  frequency: number;
  duration: number;
}

export interface CUserMessageShakeDir {
  shake: CUserMessageShake | undefined;
  direction: CMsgVector | undefined;
}

export interface CUserMessageScreenTilt {
  command: number;
  easeInOut: boolean;
  angle: CMsgVector | undefined;
  duration: number;
  time: number;
}

export interface CUserMessageSayText {
  playerindex: number;
  text: string;
  chat: boolean;
}

export interface CUserMessageSayText2 {
  entityindex: number;
  chat: boolean;
  messagename: string;
  param1: string;
  param2: string;
  param3: string;
  param4: string;
}

export interface CUserMessageHudMsg {
  channel: number;
  x: number;
  y: number;
  color1: number;
  color2: number;
  effect: number;
  message: string;
}

export interface CUserMessageHudText {
  message: string;
}

export interface CUserMessageTextMsg {
  dest: number;
  param: string[];
}

export interface CUserMessageGameTitle {
}

export interface CUserMessageResetHUD {
}

export interface CUserMessageSendAudio {
  soundname: string;
  stop: boolean;
}

export interface CUserMessageAudioParameter {
  parameterType: number;
  nameHashCode: number;
  value: number;
  intValue: number;
}

export interface CUserMessageVoiceMask {
  gamerulesMasks: number[];
  banMasks: number[];
  modEnable: boolean;
}

export interface CUserMessageRequestState {
}

export interface CUserMessageRumble {
  index: number;
  data: number;
  flags: number;
}

export interface CUserMessageSayTextChannel {
  player: number;
  channel: number;
  text: string;
}

export interface CUserMessageColoredText {
  color: number;
  text: string;
  reset: boolean;
  contextPlayerSlot: number;
  contextValue: number;
  contextTeamId: number;
}

export interface CUserMessageItemPickup {
  itemname: string;
}

export interface CUserMessageAmmoDenied {
  ammoId: number;
}

export interface CUserMessageShowMenu {
  validslots: number;
  displaytime: number;
  needmore: boolean;
  menustring: string;
}

export interface CUserMessageCreditsMsg {
  rolltype: eRollType;
  logoLength: number;
}

export interface CEntityMessagePlayJingle {
  entityMsg: CEntityMsg | undefined;
}

export interface CEntityMessageScreenOverlay {
  startEffect: boolean;
  entityMsg: CEntityMsg | undefined;
}

export interface CEntityMessageRemoveAllDecals {
  removeDecals: boolean;
  entityMsg: CEntityMsg | undefined;
}

export interface CEntityMessagePropagateForce {
  impulse: CMsgVector | undefined;
  entityMsg: CEntityMsg | undefined;
}

export interface CEntityMessageDoSpark {
  origin: CMsgVector | undefined;
  entityindex: number;
  radius: number;
  color: number;
  beams: number;
  thick: number;
  duration: number;
  entityMsg: CEntityMsg | undefined;
}

export interface CEntityMessageFixAngle {
  relative: boolean;
  angle: CMsgQAngle | undefined;
  entityMsg: CEntityMsg | undefined;
}

export interface CUserMessageCameraTransition {
  cameraType: number;
  duration: number;
  paramsDataDriven: CUserMessageCameraTransition_TransitionDataDriven | undefined;
}

export interface CUserMessageCameraTransition_TransitionDataDriven {
  filename: string;
  attachEntIndex: number;
  duration: number;
}

export interface CUserMsgParticleManager {
  type: particleMessage;
  index: number;
  releaseParticleIndex: CUserMsgParticleManager_ReleaseParticleIndex | undefined;
  createParticle: CUserMsgParticleManager_CreateParticle | undefined;
  destroyParticle: CUserMsgParticleManager_DestroyParticle | undefined;
  destroyParticleInvolving: CUserMsgParticleManager_DestroyParticleInvolving | undefined;
  updateParticle: CUserMsgParticleManager_UpdateParticleOBSOLETE | undefined;
  updateParticleFwd: CUserMsgParticleManager_UpdateParticleFwdOBSOLETE | undefined;
  updateParticleOrient: CUserMsgParticleManager_UpdateParticleOrientOBSOLETE | undefined;
  updateParticleFallback: CUserMsgParticleManager_UpdateParticleFallback | undefined;
  updateParticleOffset: CUserMsgParticleManager_UpdateParticleOffset | undefined;
  updateParticleEnt: CUserMsgParticleManager_UpdateParticleEnt | undefined;
  updateParticleShouldDraw: CUserMsgParticleManager_UpdateParticleShouldDraw | undefined;
  updateParticleSetFrozen: CUserMsgParticleManager_UpdateParticleSetFrozen | undefined;
  changeControlPointAttachment: CUserMsgParticleManager_ChangeControlPointAttachment | undefined;
  updateEntityPosition: CUserMsgParticleManager_UpdateEntityPosition | undefined;
  setParticleFowProperties: CUserMsgParticleManager_SetParticleFoWProperties | undefined;
  setParticleText: CUserMsgParticleManager_SetParticleText | undefined;
  setParticleShouldCheckFow: CUserMsgParticleManager_SetParticleShouldCheckFoW | undefined;
  setControlPointModel: CUserMsgParticleManager_SetControlPointModel | undefined;
  setControlPointSnapshot: CUserMsgParticleManager_SetControlPointSnapshot | undefined;
  setTextureAttribute: CUserMsgParticleManager_SetTextureAttribute | undefined;
  setSceneObjectGenericFlag: CUserMsgParticleManager_SetSceneObjectGenericFlag | undefined;
  setSceneObjectTintAndDesat: CUserMsgParticleManager_SetSceneObjectTintAndDesat | undefined;
  destroyParticleNamed: CUserMsgParticleManager_DestroyParticleNamed | undefined;
  particleSkipToTime: CUserMsgParticleManager_ParticleSkipToTime | undefined;
  particleCanFreeze: CUserMsgParticleManager_ParticleCanFreeze | undefined;
  setNamedValueContext: CUserMsgParticleManager_SetParticleNamedValueContext | undefined;
  updateParticleTransform: CUserMsgParticleManager_UpdateParticleTransform | undefined;
  particleFreezeTransitionOverride: CUserMsgParticleManager_ParticleFreezeTransitionOverride | undefined;
}

export interface CUserMsgParticleManager_ReleaseParticleIndex {
}

export interface CUserMsgParticleManager_CreateParticle {
  particleNameIndex: string;
  attachType: number;
  entityHandle: number;
  entityHandleForModifiers: number;
  applyVoiceBanRules: boolean;
  teamBehavior: number;
  controlPointConfiguration: string;
}

export interface CUserMsgParticleManager_DestroyParticle {
  destroyImmediately: boolean;
}

export interface CUserMsgParticleManager_DestroyParticleInvolving {
  destroyImmediately: boolean;
  entityHandle: number;
}

export interface CUserMsgParticleManager_DestroyParticleNamed {
  particleNameIndex: string;
  entityHandle: number;
  destroyImmediately: boolean;
  playEndcap: boolean;
}

export interface CUserMsgParticleManager_UpdateParticleOBSOLETE {
  controlPoint: number;
  position: CMsgVector | undefined;
}

export interface CUserMsgParticleManager_UpdateParticleFwdOBSOLETE {
  controlPoint: number;
  forward: CMsgVector | undefined;
}

export interface CUserMsgParticleManager_UpdateParticleOrientOBSOLETE {
  controlPoint: number;
  forward: CMsgVector | undefined;
  deprecatedRight: CMsgVector | undefined;
  up: CMsgVector | undefined;
  left: CMsgVector | undefined;
}

export interface CUserMsgParticleManager_UpdateParticleTransform {
  controlPoint: number;
  position: CMsgVector | undefined;
  orientation: CMsgQuaternion | undefined;
  interpolationInterval: number;
}

export interface CUserMsgParticleManager_UpdateParticleFallback {
  controlPoint: number;
  position: CMsgVector | undefined;
}

export interface CUserMsgParticleManager_UpdateParticleOffset {
  controlPoint: number;
  originOffset: CMsgVector | undefined;
  angleOffset: CMsgQAngle | undefined;
}

export interface CUserMsgParticleManager_UpdateParticleEnt {
  controlPoint: number;
  entityHandle: number;
  attachType: number;
  attachment: number;
  fallbackPosition: CMsgVector | undefined;
  includeWearables: boolean;
  offsetPosition: CMsgVector | undefined;
  offsetAngles: CMsgQAngle | undefined;
}

export interface CUserMsgParticleManager_UpdateParticleSetFrozen {
  setFrozen: boolean;
  transitionDuration: number;
}

export interface CUserMsgParticleManager_UpdateParticleShouldDraw {
  shouldDraw: boolean;
}

export interface CUserMsgParticleManager_ChangeControlPointAttachment {
  attachmentOld: number;
  attachmentNew: number;
  entityHandle: number;
}

export interface CUserMsgParticleManager_UpdateEntityPosition {
  entityHandle: number;
  position: CMsgVector | undefined;
}

export interface CUserMsgParticleManager_SetParticleFoWProperties {
  fowControlPoint: number;
  fowControlPoint2: number;
  fowRadius: number;
}

export interface CUserMsgParticleManager_SetParticleShouldCheckFoW {
  checkFow: boolean;
}

export interface CUserMsgParticleManager_SetControlPointModel {
  controlPoint: number;
  modelName: string;
}

export interface CUserMsgParticleManager_SetControlPointSnapshot {
  controlPoint: number;
  snapshotName: string;
}

export interface CUserMsgParticleManager_SetParticleText {
  text: string;
}

export interface CUserMsgParticleManager_SetTextureAttribute {
  attributeName: string;
  textureName: string;
}

export interface CUserMsgParticleManager_SetSceneObjectGenericFlag {
  flagValue: boolean;
}

export interface CUserMsgParticleManager_SetSceneObjectTintAndDesat {
  tint: number;
  desat: number;
}

export interface CUserMsgParticleManager_ParticleSkipToTime {
  skipToTime: number;
}

export interface CUserMsgParticleManager_ParticleCanFreeze {
  canFreeze: boolean;
}

export interface CUserMsgParticleManager_ParticleFreezeTransitionOverride {
  freezeTransitionOverride: number;
}

export interface CUserMsgParticleManager_SetParticleNamedValueContext {
  floatValues: CUserMsgParticleManager_SetParticleNamedValueContext_FloatContextValue[];
  vectorValues: CUserMsgParticleManager_SetParticleNamedValueContext_VectorContextValue[];
  transformValues: CUserMsgParticleManager_SetParticleNamedValueContext_TransformContextValue[];
}

export interface CUserMsgParticleManager_SetParticleNamedValueContext_FloatContextValue {
  valueName: string;
  value: number;
}

export interface CUserMsgParticleManager_SetParticleNamedValueContext_VectorContextValue {
  valueName: string;
  value: CMsgVector | undefined;
  entIndex: number;
  attachmentName: string;
}

export interface CUserMsgParticleManager_SetParticleNamedValueContext_TransformContextValue {
  valueName: string;
  angles: CMsgQAngle | undefined;
  translation: CMsgVector | undefined;
  entIndex: number;
  attachmentName: string;
}

export interface CUserMsgHudError {
  orderId: number;
}

export interface CUserMsgCustomGameEvent {
  eventName: string;
  data: Buffer;
}

export interface CUserMessageHapticsManagerPulse {
  handId: number;
  effectAmplitude: number;
  effectFrequency: number;
  effectDuration: number;
}

export interface CUserMessageHapticsManagerEffect {
  handId: number;
  effectNameHashCode: number;
  effectScale: number;
}

export interface CUserMessageAnimStateGraphState {
  entityIndex: number;
  data: Buffer;
}

export interface CUserMessageCommandQueueState {
  playerSlot: number;
  commandQueueInfo: CUserMessageCommandQueueState_commandQueueInfoT | undefined;
}

export interface CUserMessageCommandQueueState_commandQueueInfoT {
  commandsQueued: number;
  commandQueueDesiredSize: number;
  starvedCommandTicks: number;
  timeDilationPercent: number;
}

export interface CUserMessageUpdateCssClasses {
  targetWorldPanel: number;
  cssClasses: string;
  isAdd: boolean;
}

export interface CUserMessageServerFrameTime {
  frameTime: number;
}

export interface CUserMessageLagCompensationError {
  distance: number;
}

export interface CUserMessageRequestDllStatus {
  dllAction: string;
  fullReport: boolean;
}

export interface CUserMessageRequestUtilAction {
  util1: number;
  util2: number;
  util3: number;
  util4: number;
  util5: number;
}

export interface CUserMessageUtilMsgResponse {
  crc: number;
  itemCount: number;
  crc2: number;
  itemCount2: number;
  crcPart: number[];
  crcPart2: number[];
  clientTimestamp: number;
  platform: number;
  itemdetails: CUserMessageUtilMsgResponse_ItemDetail[];
  itemgroup: number;
  totalCount: number;
  totalCount2: number;
}

export interface CUserMessageUtilMsgResponse_ItemDetail {
  index: number;
  hash: number;
  crc: number;
  name: string;
}

export interface CUserMessageDllStatus {
  fileReport: string;
  commandLine: string;
  totalFiles: number;
  processId: number;
  osversion: number;
  clientTime: string;
  diagnostics: CUserMessageDllStatus_CVDiagnostic[];
}

export interface CUserMessageDllStatus_CVDiagnostic {
  id: number;
  extended: number;
  value: string;
  stringValue: string;
}

export interface CUserMessageRequestInventory {
  inventory: number;
  offset: number;
  options: number;
}

export interface CUserMessageInventoryResponse {
  crc: number;
  itemCount: number;
  osversion: number;
  perfTime: number;
  clientTimestamp: number;
  platform: number;
  inventories: CUserMessageInventoryResponse_InventoryDetail[];
  inventories2: CUserMessageInventoryResponse_InventoryDetail[];
  invType: number;
  buildVersion: number;
  instance: number;
}

export interface CUserMessageInventoryResponse_InventoryDetail {
  index: number;
  primary: string;
  offset: string;
  first: string;
  base: string;
  name: string;
  baseName: string;
  baseDetail: number;
  baseTime: number;
  baseHash: number;
}

function createBaseCUserMessageAchievementEvent(): CUserMessageAchievementEvent {
  return { achievement: 0 };
}

export const CUserMessageAchievementEvent = {
  encode(message: CUserMessageAchievementEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.achievement !== 0) {
      writer.uint32(8).uint32(message.achievement);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageAchievementEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageAchievementEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.achievement = reader.uint32();
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

function createBaseCUserMessageCloseCaption(): CUserMessageCloseCaption {
  return { hash: 0, duration: 0, fromPlayer: false, entIndex: 0 };
}

export const CUserMessageCloseCaption = {
  encode(message: CUserMessageCloseCaption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== 0) {
      writer.uint32(13).fixed32(message.hash);
    }
    if (message.duration !== 0) {
      writer.uint32(21).float(message.duration);
    }
    if (message.fromPlayer === true) {
      writer.uint32(24).bool(message.fromPlayer);
    }
    if (message.entIndex !== 0) {
      writer.uint32(32).int32(message.entIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageCloseCaption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageCloseCaption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.hash = reader.fixed32();
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

          message.fromPlayer = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.entIndex = reader.int32();
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

function createBaseCUserMessageCloseCaptionDirect(): CUserMessageCloseCaptionDirect {
  return { hash: 0, duration: 0, fromPlayer: false, entIndex: 0 };
}

export const CUserMessageCloseCaptionDirect = {
  encode(message: CUserMessageCloseCaptionDirect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== 0) {
      writer.uint32(13).fixed32(message.hash);
    }
    if (message.duration !== 0) {
      writer.uint32(21).float(message.duration);
    }
    if (message.fromPlayer === true) {
      writer.uint32(24).bool(message.fromPlayer);
    }
    if (message.entIndex !== 0) {
      writer.uint32(32).int32(message.entIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageCloseCaptionDirect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageCloseCaptionDirect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.hash = reader.fixed32();
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

          message.fromPlayer = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.entIndex = reader.int32();
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

function createBaseCUserMessageCloseCaptionPlaceholder(): CUserMessageCloseCaptionPlaceholder {
  return { string: "", duration: 0, fromPlayer: false, entIndex: 0 };
}

export const CUserMessageCloseCaptionPlaceholder = {
  encode(message: CUserMessageCloseCaptionPlaceholder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.string !== "") {
      writer.uint32(10).string(message.string);
    }
    if (message.duration !== 0) {
      writer.uint32(21).float(message.duration);
    }
    if (message.fromPlayer === true) {
      writer.uint32(24).bool(message.fromPlayer);
    }
    if (message.entIndex !== 0) {
      writer.uint32(32).int32(message.entIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageCloseCaptionPlaceholder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageCloseCaptionPlaceholder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.string = reader.string();
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

          message.fromPlayer = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.entIndex = reader.int32();
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

function createBaseCUserMessageCurrentTimescale(): CUserMessageCurrentTimescale {
  return { current: 0 };
}

export const CUserMessageCurrentTimescale = {
  encode(message: CUserMessageCurrentTimescale, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.current !== 0) {
      writer.uint32(13).float(message.current);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageCurrentTimescale {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageCurrentTimescale();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.current = reader.float();
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

function createBaseCUserMessageDesiredTimescale(): CUserMessageDesiredTimescale {
  return { desired: 0, acceleration: 0, minblendrate: 0, blenddeltamultiplier: 0 };
}

export const CUserMessageDesiredTimescale = {
  encode(message: CUserMessageDesiredTimescale, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.desired !== 0) {
      writer.uint32(13).float(message.desired);
    }
    if (message.acceleration !== 0) {
      writer.uint32(21).float(message.acceleration);
    }
    if (message.minblendrate !== 0) {
      writer.uint32(29).float(message.minblendrate);
    }
    if (message.blenddeltamultiplier !== 0) {
      writer.uint32(37).float(message.blenddeltamultiplier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageDesiredTimescale {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageDesiredTimescale();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.desired = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.acceleration = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.minblendrate = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.blenddeltamultiplier = reader.float();
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

function createBaseCUserMessageFade(): CUserMessageFade {
  return { duration: 0, holdTime: 0, flags: 0, color: 0 };
}

export const CUserMessageFade = {
  encode(message: CUserMessageFade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duration !== 0) {
      writer.uint32(8).uint32(message.duration);
    }
    if (message.holdTime !== 0) {
      writer.uint32(16).uint32(message.holdTime);
    }
    if (message.flags !== 0) {
      writer.uint32(24).uint32(message.flags);
    }
    if (message.color !== 0) {
      writer.uint32(37).fixed32(message.color);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageFade {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageFade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.duration = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.holdTime = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.color = reader.fixed32();
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

function createBaseCUserMessageShake(): CUserMessageShake {
  return { command: 0, amplitude: 0, frequency: 0, duration: 0 };
}

export const CUserMessageShake = {
  encode(message: CUserMessageShake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.command !== 0) {
      writer.uint32(8).uint32(message.command);
    }
    if (message.amplitude !== 0) {
      writer.uint32(21).float(message.amplitude);
    }
    if (message.frequency !== 0) {
      writer.uint32(29).float(message.frequency);
    }
    if (message.duration !== 0) {
      writer.uint32(37).float(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageShake {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageShake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.command = reader.uint32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.amplitude = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.frequency = reader.float();
          continue;
        case 4:
          if (tag != 37) {
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
};

function createBaseCUserMessageShakeDir(): CUserMessageShakeDir {
  return { shake: undefined, direction: undefined };
}

export const CUserMessageShakeDir = {
  encode(message: CUserMessageShakeDir, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shake !== undefined) {
      CUserMessageShake.encode(message.shake, writer.uint32(10).fork()).ldelim();
    }
    if (message.direction !== undefined) {
      CMsgVector.encode(message.direction, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageShakeDir {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageShakeDir();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shake = CUserMessageShake.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.direction = CMsgVector.decode(reader, reader.uint32());
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

function createBaseCUserMessageScreenTilt(): CUserMessageScreenTilt {
  return { command: 0, easeInOut: false, angle: undefined, duration: 0, time: 0 };
}

export const CUserMessageScreenTilt = {
  encode(message: CUserMessageScreenTilt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.command !== 0) {
      writer.uint32(8).uint32(message.command);
    }
    if (message.easeInOut === true) {
      writer.uint32(16).bool(message.easeInOut);
    }
    if (message.angle !== undefined) {
      CMsgVector.encode(message.angle, writer.uint32(26).fork()).ldelim();
    }
    if (message.duration !== 0) {
      writer.uint32(37).float(message.duration);
    }
    if (message.time !== 0) {
      writer.uint32(45).float(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageScreenTilt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageScreenTilt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.command = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.easeInOut = reader.bool();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.angle = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.duration = reader.float();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.time = reader.float();
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

function createBaseCUserMessageSayText(): CUserMessageSayText {
  return { playerindex: 0, text: "", chat: false };
}

export const CUserMessageSayText = {
  encode(message: CUserMessageSayText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerindex !== 0) {
      writer.uint32(8).int32(message.playerindex);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    if (message.chat === true) {
      writer.uint32(24).bool(message.chat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageSayText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageSayText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerindex = reader.int32();
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

          message.chat = reader.bool();
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

function createBaseCUserMessageSayText2(): CUserMessageSayText2 {
  return { entityindex: 0, chat: false, messagename: "", param1: "", param2: "", param3: "", param4: "" };
}

export const CUserMessageSayText2 = {
  encode(message: CUserMessageSayText2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityindex !== 0) {
      writer.uint32(8).int32(message.entityindex);
    }
    if (message.chat === true) {
      writer.uint32(16).bool(message.chat);
    }
    if (message.messagename !== "") {
      writer.uint32(26).string(message.messagename);
    }
    if (message.param1 !== "") {
      writer.uint32(34).string(message.param1);
    }
    if (message.param2 !== "") {
      writer.uint32(42).string(message.param2);
    }
    if (message.param3 !== "") {
      writer.uint32(50).string(message.param3);
    }
    if (message.param4 !== "") {
      writer.uint32(58).string(message.param4);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageSayText2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageSayText2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entityindex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.chat = reader.bool();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.messagename = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.param1 = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.param2 = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.param3 = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.param4 = reader.string();
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

function createBaseCUserMessageHudMsg(): CUserMessageHudMsg {
  return { channel: 0, x: 0, y: 0, color1: 0, color2: 0, effect: 0, message: "" };
}

export const CUserMessageHudMsg = {
  encode(message: CUserMessageHudMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel !== 0) {
      writer.uint32(8).uint32(message.channel);
    }
    if (message.x !== 0) {
      writer.uint32(21).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(29).float(message.y);
    }
    if (message.color1 !== 0) {
      writer.uint32(37).fixed32(message.color1);
    }
    if (message.color2 !== 0) {
      writer.uint32(45).fixed32(message.color2);
    }
    if (message.effect !== 0) {
      writer.uint32(48).uint32(message.effect);
    }
    if (message.message !== "") {
      writer.uint32(90).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageHudMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageHudMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.channel = reader.uint32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.x = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.y = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.color1 = reader.fixed32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.color2 = reader.fixed32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.effect = reader.uint32();
          continue;
        case 11:
          if (tag != 90) {
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
};

function createBaseCUserMessageHudText(): CUserMessageHudText {
  return { message: "" };
}

export const CUserMessageHudText = {
  encode(message: CUserMessageHudText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageHudText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageHudText();
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
};

function createBaseCUserMessageTextMsg(): CUserMessageTextMsg {
  return { dest: 0, param: [] };
}

export const CUserMessageTextMsg = {
  encode(message: CUserMessageTextMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dest !== 0) {
      writer.uint32(8).uint32(message.dest);
    }
    for (const v of message.param) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageTextMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageTextMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.dest = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.param.push(reader.string());
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

function createBaseCUserMessageGameTitle(): CUserMessageGameTitle {
  return {};
}

export const CUserMessageGameTitle = {
  encode(_: CUserMessageGameTitle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageGameTitle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageGameTitle();
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

function createBaseCUserMessageResetHUD(): CUserMessageResetHUD {
  return {};
}

export const CUserMessageResetHUD = {
  encode(_: CUserMessageResetHUD, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageResetHUD {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageResetHUD();
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

function createBaseCUserMessageSendAudio(): CUserMessageSendAudio {
  return { soundname: "", stop: false };
}

export const CUserMessageSendAudio = {
  encode(message: CUserMessageSendAudio, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.soundname !== "") {
      writer.uint32(10).string(message.soundname);
    }
    if (message.stop === true) {
      writer.uint32(16).bool(message.stop);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageSendAudio {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageSendAudio();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.soundname = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.stop = reader.bool();
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

function createBaseCUserMessageAudioParameter(): CUserMessageAudioParameter {
  return { parameterType: 0, nameHashCode: 0, value: 0, intValue: 0 };
}

export const CUserMessageAudioParameter = {
  encode(message: CUserMessageAudioParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parameterType !== 0) {
      writer.uint32(8).uint32(message.parameterType);
    }
    if (message.nameHashCode !== 0) {
      writer.uint32(16).uint32(message.nameHashCode);
    }
    if (message.value !== 0) {
      writer.uint32(29).float(message.value);
    }
    if (message.intValue !== 0) {
      writer.uint32(32).uint32(message.intValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageAudioParameter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageAudioParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.parameterType = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.nameHashCode = reader.uint32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.value = reader.float();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.intValue = reader.uint32();
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

function createBaseCUserMessageVoiceMask(): CUserMessageVoiceMask {
  return { gamerulesMasks: [], banMasks: [], modEnable: false };
}

export const CUserMessageVoiceMask = {
  encode(message: CUserMessageVoiceMask, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.gamerulesMasks) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.banMasks) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.modEnable === true) {
      writer.uint32(24).bool(message.modEnable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageVoiceMask {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageVoiceMask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.gamerulesMasks.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.gamerulesMasks.push(reader.uint32());
            }

            continue;
          }

          break;
        case 2:
          if (tag == 16) {
            message.banMasks.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.banMasks.push(reader.uint32());
            }

            continue;
          }

          break;
        case 3:
          if (tag != 24) {
            break;
          }

          message.modEnable = reader.bool();
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

function createBaseCUserMessageRequestState(): CUserMessageRequestState {
  return {};
}

export const CUserMessageRequestState = {
  encode(_: CUserMessageRequestState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageRequestState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageRequestState();
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

function createBaseCUserMessageRumble(): CUserMessageRumble {
  return { index: 0, data: 0, flags: 0 };
}

export const CUserMessageRumble = {
  encode(message: CUserMessageRumble, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).int32(message.index);
    }
    if (message.data !== 0) {
      writer.uint32(16).int32(message.data);
    }
    if (message.flags !== 0) {
      writer.uint32(24).int32(message.flags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageRumble {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageRumble();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.index = reader.int32();
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

          message.flags = reader.int32();
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

function createBaseCUserMessageSayTextChannel(): CUserMessageSayTextChannel {
  return { player: 0, channel: 0, text: "" };
}

export const CUserMessageSayTextChannel = {
  encode(message: CUserMessageSayTextChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.player !== 0) {
      writer.uint32(8).int32(message.player);
    }
    if (message.channel !== 0) {
      writer.uint32(16).int32(message.channel);
    }
    if (message.text !== "") {
      writer.uint32(26).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageSayTextChannel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageSayTextChannel();
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

          message.channel = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.text = reader.string();
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

function createBaseCUserMessageColoredText(): CUserMessageColoredText {
  return { color: 0, text: "", reset: false, contextPlayerSlot: 0, contextValue: 0, contextTeamId: 0 };
}

export const CUserMessageColoredText = {
  encode(message: CUserMessageColoredText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.color !== 0) {
      writer.uint32(8).uint32(message.color);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    if (message.reset === true) {
      writer.uint32(24).bool(message.reset);
    }
    if (message.contextPlayerSlot !== 0) {
      writer.uint32(32).int32(message.contextPlayerSlot);
    }
    if (message.contextValue !== 0) {
      writer.uint32(40).int32(message.contextValue);
    }
    if (message.contextTeamId !== 0) {
      writer.uint32(48).int32(message.contextTeamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageColoredText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageColoredText();
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
          if (tag != 18) {
            break;
          }

          message.text = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.reset = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.contextPlayerSlot = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.contextValue = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.contextTeamId = reader.int32();
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

function createBaseCUserMessageItemPickup(): CUserMessageItemPickup {
  return { itemname: "" };
}

export const CUserMessageItemPickup = {
  encode(message: CUserMessageItemPickup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemname !== "") {
      writer.uint32(10).string(message.itemname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageItemPickup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageItemPickup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.itemname = reader.string();
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

function createBaseCUserMessageAmmoDenied(): CUserMessageAmmoDenied {
  return { ammoId: 0 };
}

export const CUserMessageAmmoDenied = {
  encode(message: CUserMessageAmmoDenied, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ammoId !== 0) {
      writer.uint32(8).uint32(message.ammoId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageAmmoDenied {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageAmmoDenied();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ammoId = reader.uint32();
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

function createBaseCUserMessageShowMenu(): CUserMessageShowMenu {
  return { validslots: 0, displaytime: 0, needmore: false, menustring: "" };
}

export const CUserMessageShowMenu = {
  encode(message: CUserMessageShowMenu, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validslots !== 0) {
      writer.uint32(8).uint32(message.validslots);
    }
    if (message.displaytime !== 0) {
      writer.uint32(16).uint32(message.displaytime);
    }
    if (message.needmore === true) {
      writer.uint32(24).bool(message.needmore);
    }
    if (message.menustring !== "") {
      writer.uint32(34).string(message.menustring);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageShowMenu {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageShowMenu();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.validslots = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.displaytime = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.needmore = reader.bool();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.menustring = reader.string();
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

function createBaseCUserMessageCreditsMsg(): CUserMessageCreditsMsg {
  return { rolltype: 0, logoLength: 0 };
}

export const CUserMessageCreditsMsg = {
  encode(message: CUserMessageCreditsMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rolltype !== 0) {
      writer.uint32(8).int32(message.rolltype);
    }
    if (message.logoLength !== 0) {
      writer.uint32(21).float(message.logoLength);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageCreditsMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageCreditsMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.rolltype = reader.int32() as any;
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.logoLength = reader.float();
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

function createBaseCEntityMessagePlayJingle(): CEntityMessagePlayJingle {
  return { entityMsg: undefined };
}

export const CEntityMessagePlayJingle = {
  encode(message: CEntityMessagePlayJingle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityMsg !== undefined) {
      CEntityMsg.encode(message.entityMsg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEntityMessagePlayJingle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEntityMessagePlayJingle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.entityMsg = CEntityMsg.decode(reader, reader.uint32());
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

function createBaseCEntityMessageScreenOverlay(): CEntityMessageScreenOverlay {
  return { startEffect: false, entityMsg: undefined };
}

export const CEntityMessageScreenOverlay = {
  encode(message: CEntityMessageScreenOverlay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startEffect === true) {
      writer.uint32(8).bool(message.startEffect);
    }
    if (message.entityMsg !== undefined) {
      CEntityMsg.encode(message.entityMsg, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEntityMessageScreenOverlay {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEntityMessageScreenOverlay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.startEffect = reader.bool();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.entityMsg = CEntityMsg.decode(reader, reader.uint32());
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

function createBaseCEntityMessageRemoveAllDecals(): CEntityMessageRemoveAllDecals {
  return { removeDecals: false, entityMsg: undefined };
}

export const CEntityMessageRemoveAllDecals = {
  encode(message: CEntityMessageRemoveAllDecals, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.removeDecals === true) {
      writer.uint32(8).bool(message.removeDecals);
    }
    if (message.entityMsg !== undefined) {
      CEntityMsg.encode(message.entityMsg, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEntityMessageRemoveAllDecals {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEntityMessageRemoveAllDecals();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.removeDecals = reader.bool();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.entityMsg = CEntityMsg.decode(reader, reader.uint32());
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

function createBaseCEntityMessagePropagateForce(): CEntityMessagePropagateForce {
  return { impulse: undefined, entityMsg: undefined };
}

export const CEntityMessagePropagateForce = {
  encode(message: CEntityMessagePropagateForce, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.impulse !== undefined) {
      CMsgVector.encode(message.impulse, writer.uint32(10).fork()).ldelim();
    }
    if (message.entityMsg !== undefined) {
      CEntityMsg.encode(message.entityMsg, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEntityMessagePropagateForce {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEntityMessagePropagateForce();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.impulse = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.entityMsg = CEntityMsg.decode(reader, reader.uint32());
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

function createBaseCEntityMessageDoSpark(): CEntityMessageDoSpark {
  return {
    origin: undefined,
    entityindex: 0,
    radius: 0,
    color: 0,
    beams: 0,
    thick: 0,
    duration: 0,
    entityMsg: undefined,
  };
}

export const CEntityMessageDoSpark = {
  encode(message: CEntityMessageDoSpark, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.entityindex !== 0) {
      writer.uint32(16).int32(message.entityindex);
    }
    if (message.radius !== 0) {
      writer.uint32(29).float(message.radius);
    }
    if (message.color !== 0) {
      writer.uint32(37).fixed32(message.color);
    }
    if (message.beams !== 0) {
      writer.uint32(40).uint32(message.beams);
    }
    if (message.thick !== 0) {
      writer.uint32(53).float(message.thick);
    }
    if (message.duration !== 0) {
      writer.uint32(61).float(message.duration);
    }
    if (message.entityMsg !== undefined) {
      CEntityMsg.encode(message.entityMsg, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEntityMessageDoSpark {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEntityMessageDoSpark();
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
          if (tag != 16) {
            break;
          }

          message.entityindex = reader.int32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.radius = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.color = reader.fixed32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.beams = reader.uint32();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.thick = reader.float();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.duration = reader.float();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.entityMsg = CEntityMsg.decode(reader, reader.uint32());
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

function createBaseCEntityMessageFixAngle(): CEntityMessageFixAngle {
  return { relative: false, angle: undefined, entityMsg: undefined };
}

export const CEntityMessageFixAngle = {
  encode(message: CEntityMessageFixAngle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relative === true) {
      writer.uint32(8).bool(message.relative);
    }
    if (message.angle !== undefined) {
      CMsgQAngle.encode(message.angle, writer.uint32(18).fork()).ldelim();
    }
    if (message.entityMsg !== undefined) {
      CEntityMsg.encode(message.entityMsg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEntityMessageFixAngle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEntityMessageFixAngle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.relative = reader.bool();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.angle = CMsgQAngle.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.entityMsg = CEntityMsg.decode(reader, reader.uint32());
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

function createBaseCUserMessageCameraTransition(): CUserMessageCameraTransition {
  return { cameraType: 0, duration: 0, paramsDataDriven: undefined };
}

export const CUserMessageCameraTransition = {
  encode(message: CUserMessageCameraTransition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cameraType !== 0) {
      writer.uint32(8).uint32(message.cameraType);
    }
    if (message.duration !== 0) {
      writer.uint32(21).float(message.duration);
    }
    if (message.paramsDataDriven !== undefined) {
      CUserMessageCameraTransition_TransitionDataDriven.encode(message.paramsDataDriven, writer.uint32(26).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageCameraTransition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageCameraTransition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.cameraType = reader.uint32();
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

          message.paramsDataDriven = CUserMessageCameraTransition_TransitionDataDriven.decode(reader, reader.uint32());
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

function createBaseCUserMessageCameraTransition_TransitionDataDriven(): CUserMessageCameraTransition_TransitionDataDriven {
  return { filename: "", attachEntIndex: 0, duration: 0 };
}

export const CUserMessageCameraTransition_TransitionDataDriven = {
  encode(
    message: CUserMessageCameraTransition_TransitionDataDriven,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.filename !== "") {
      writer.uint32(10).string(message.filename);
    }
    if (message.attachEntIndex !== 0) {
      writer.uint32(16).int32(message.attachEntIndex);
    }
    if (message.duration !== 0) {
      writer.uint32(29).float(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageCameraTransition_TransitionDataDriven {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageCameraTransition_TransitionDataDriven();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.filename = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.attachEntIndex = reader.int32();
          continue;
        case 3:
          if (tag != 29) {
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
};

function createBaseCUserMsgParticleManager(): CUserMsgParticleManager {
  return {
    type: 0,
    index: 0,
    releaseParticleIndex: undefined,
    createParticle: undefined,
    destroyParticle: undefined,
    destroyParticleInvolving: undefined,
    updateParticle: undefined,
    updateParticleFwd: undefined,
    updateParticleOrient: undefined,
    updateParticleFallback: undefined,
    updateParticleOffset: undefined,
    updateParticleEnt: undefined,
    updateParticleShouldDraw: undefined,
    updateParticleSetFrozen: undefined,
    changeControlPointAttachment: undefined,
    updateEntityPosition: undefined,
    setParticleFowProperties: undefined,
    setParticleText: undefined,
    setParticleShouldCheckFow: undefined,
    setControlPointModel: undefined,
    setControlPointSnapshot: undefined,
    setTextureAttribute: undefined,
    setSceneObjectGenericFlag: undefined,
    setSceneObjectTintAndDesat: undefined,
    destroyParticleNamed: undefined,
    particleSkipToTime: undefined,
    particleCanFreeze: undefined,
    setNamedValueContext: undefined,
    updateParticleTransform: undefined,
    particleFreezeTransitionOverride: undefined,
  };
}

export const CUserMsgParticleManager = {
  encode(message: CUserMsgParticleManager, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    if (message.releaseParticleIndex !== undefined) {
      CUserMsgParticleManager_ReleaseParticleIndex.encode(message.releaseParticleIndex, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.createParticle !== undefined) {
      CUserMsgParticleManager_CreateParticle.encode(message.createParticle, writer.uint32(34).fork()).ldelim();
    }
    if (message.destroyParticle !== undefined) {
      CUserMsgParticleManager_DestroyParticle.encode(message.destroyParticle, writer.uint32(42).fork()).ldelim();
    }
    if (message.destroyParticleInvolving !== undefined) {
      CUserMsgParticleManager_DestroyParticleInvolving.encode(
        message.destroyParticleInvolving,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.updateParticle !== undefined) {
      CUserMsgParticleManager_UpdateParticleOBSOLETE.encode(message.updateParticle, writer.uint32(58).fork()).ldelim();
    }
    if (message.updateParticleFwd !== undefined) {
      CUserMsgParticleManager_UpdateParticleFwdOBSOLETE.encode(message.updateParticleFwd, writer.uint32(66).fork())
        .ldelim();
    }
    if (message.updateParticleOrient !== undefined) {
      CUserMsgParticleManager_UpdateParticleOrientOBSOLETE.encode(
        message.updateParticleOrient,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.updateParticleFallback !== undefined) {
      CUserMsgParticleManager_UpdateParticleFallback.encode(message.updateParticleFallback, writer.uint32(82).fork())
        .ldelim();
    }
    if (message.updateParticleOffset !== undefined) {
      CUserMsgParticleManager_UpdateParticleOffset.encode(message.updateParticleOffset, writer.uint32(90).fork())
        .ldelim();
    }
    if (message.updateParticleEnt !== undefined) {
      CUserMsgParticleManager_UpdateParticleEnt.encode(message.updateParticleEnt, writer.uint32(98).fork()).ldelim();
    }
    if (message.updateParticleShouldDraw !== undefined) {
      CUserMsgParticleManager_UpdateParticleShouldDraw.encode(
        message.updateParticleShouldDraw,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.updateParticleSetFrozen !== undefined) {
      CUserMsgParticleManager_UpdateParticleSetFrozen.encode(message.updateParticleSetFrozen, writer.uint32(122).fork())
        .ldelim();
    }
    if (message.changeControlPointAttachment !== undefined) {
      CUserMsgParticleManager_ChangeControlPointAttachment.encode(
        message.changeControlPointAttachment,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.updateEntityPosition !== undefined) {
      CUserMsgParticleManager_UpdateEntityPosition.encode(message.updateEntityPosition, writer.uint32(138).fork())
        .ldelim();
    }
    if (message.setParticleFowProperties !== undefined) {
      CUserMsgParticleManager_SetParticleFoWProperties.encode(
        message.setParticleFowProperties,
        writer.uint32(146).fork(),
      ).ldelim();
    }
    if (message.setParticleText !== undefined) {
      CUserMsgParticleManager_SetParticleText.encode(message.setParticleText, writer.uint32(154).fork()).ldelim();
    }
    if (message.setParticleShouldCheckFow !== undefined) {
      CUserMsgParticleManager_SetParticleShouldCheckFoW.encode(
        message.setParticleShouldCheckFow,
        writer.uint32(162).fork(),
      ).ldelim();
    }
    if (message.setControlPointModel !== undefined) {
      CUserMsgParticleManager_SetControlPointModel.encode(message.setControlPointModel, writer.uint32(170).fork())
        .ldelim();
    }
    if (message.setControlPointSnapshot !== undefined) {
      CUserMsgParticleManager_SetControlPointSnapshot.encode(message.setControlPointSnapshot, writer.uint32(178).fork())
        .ldelim();
    }
    if (message.setTextureAttribute !== undefined) {
      CUserMsgParticleManager_SetTextureAttribute.encode(message.setTextureAttribute, writer.uint32(186).fork())
        .ldelim();
    }
    if (message.setSceneObjectGenericFlag !== undefined) {
      CUserMsgParticleManager_SetSceneObjectGenericFlag.encode(
        message.setSceneObjectGenericFlag,
        writer.uint32(194).fork(),
      ).ldelim();
    }
    if (message.setSceneObjectTintAndDesat !== undefined) {
      CUserMsgParticleManager_SetSceneObjectTintAndDesat.encode(
        message.setSceneObjectTintAndDesat,
        writer.uint32(202).fork(),
      ).ldelim();
    }
    if (message.destroyParticleNamed !== undefined) {
      CUserMsgParticleManager_DestroyParticleNamed.encode(message.destroyParticleNamed, writer.uint32(210).fork())
        .ldelim();
    }
    if (message.particleSkipToTime !== undefined) {
      CUserMsgParticleManager_ParticleSkipToTime.encode(message.particleSkipToTime, writer.uint32(218).fork()).ldelim();
    }
    if (message.particleCanFreeze !== undefined) {
      CUserMsgParticleManager_ParticleCanFreeze.encode(message.particleCanFreeze, writer.uint32(226).fork()).ldelim();
    }
    if (message.setNamedValueContext !== undefined) {
      CUserMsgParticleManager_SetParticleNamedValueContext.encode(
        message.setNamedValueContext,
        writer.uint32(234).fork(),
      ).ldelim();
    }
    if (message.updateParticleTransform !== undefined) {
      CUserMsgParticleManager_UpdateParticleTransform.encode(message.updateParticleTransform, writer.uint32(242).fork())
        .ldelim();
    }
    if (message.particleFreezeTransitionOverride !== undefined) {
      CUserMsgParticleManager_ParticleFreezeTransitionOverride.encode(
        message.particleFreezeTransitionOverride,
        writer.uint32(250).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager();
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

          message.index = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.releaseParticleIndex = CUserMsgParticleManager_ReleaseParticleIndex.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.createParticle = CUserMsgParticleManager_CreateParticle.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.destroyParticle = CUserMsgParticleManager_DestroyParticle.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.destroyParticleInvolving = CUserMsgParticleManager_DestroyParticleInvolving.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.updateParticle = CUserMsgParticleManager_UpdateParticleOBSOLETE.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.updateParticleFwd = CUserMsgParticleManager_UpdateParticleFwdOBSOLETE.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.updateParticleOrient = CUserMsgParticleManager_UpdateParticleOrientOBSOLETE.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.updateParticleFallback = CUserMsgParticleManager_UpdateParticleFallback.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.updateParticleOffset = CUserMsgParticleManager_UpdateParticleOffset.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.updateParticleEnt = CUserMsgParticleManager_UpdateParticleEnt.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.updateParticleShouldDraw = CUserMsgParticleManager_UpdateParticleShouldDraw.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.updateParticleSetFrozen = CUserMsgParticleManager_UpdateParticleSetFrozen.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.changeControlPointAttachment = CUserMsgParticleManager_ChangeControlPointAttachment.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.updateEntityPosition = CUserMsgParticleManager_UpdateEntityPosition.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag != 146) {
            break;
          }

          message.setParticleFowProperties = CUserMsgParticleManager_SetParticleFoWProperties.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 19:
          if (tag != 154) {
            break;
          }

          message.setParticleText = CUserMsgParticleManager_SetParticleText.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag != 162) {
            break;
          }

          message.setParticleShouldCheckFow = CUserMsgParticleManager_SetParticleShouldCheckFoW.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 21:
          if (tag != 170) {
            break;
          }

          message.setControlPointModel = CUserMsgParticleManager_SetControlPointModel.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag != 178) {
            break;
          }

          message.setControlPointSnapshot = CUserMsgParticleManager_SetControlPointSnapshot.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 23:
          if (tag != 186) {
            break;
          }

          message.setTextureAttribute = CUserMsgParticleManager_SetTextureAttribute.decode(reader, reader.uint32());
          continue;
        case 24:
          if (tag != 194) {
            break;
          }

          message.setSceneObjectGenericFlag = CUserMsgParticleManager_SetSceneObjectGenericFlag.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 25:
          if (tag != 202) {
            break;
          }

          message.setSceneObjectTintAndDesat = CUserMsgParticleManager_SetSceneObjectTintAndDesat.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 26:
          if (tag != 210) {
            break;
          }

          message.destroyParticleNamed = CUserMsgParticleManager_DestroyParticleNamed.decode(reader, reader.uint32());
          continue;
        case 27:
          if (tag != 218) {
            break;
          }

          message.particleSkipToTime = CUserMsgParticleManager_ParticleSkipToTime.decode(reader, reader.uint32());
          continue;
        case 28:
          if (tag != 226) {
            break;
          }

          message.particleCanFreeze = CUserMsgParticleManager_ParticleCanFreeze.decode(reader, reader.uint32());
          continue;
        case 29:
          if (tag != 234) {
            break;
          }

          message.setNamedValueContext = CUserMsgParticleManager_SetParticleNamedValueContext.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 30:
          if (tag != 242) {
            break;
          }

          message.updateParticleTransform = CUserMsgParticleManager_UpdateParticleTransform.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 31:
          if (tag != 250) {
            break;
          }

          message.particleFreezeTransitionOverride = CUserMsgParticleManager_ParticleFreezeTransitionOverride.decode(
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
};

function createBaseCUserMsgParticleManager_ReleaseParticleIndex(): CUserMsgParticleManager_ReleaseParticleIndex {
  return {};
}

export const CUserMsgParticleManager_ReleaseParticleIndex = {
  encode(_: CUserMsgParticleManager_ReleaseParticleIndex, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_ReleaseParticleIndex {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_ReleaseParticleIndex();
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

function createBaseCUserMsgParticleManager_CreateParticle(): CUserMsgParticleManager_CreateParticle {
  return {
    particleNameIndex: "0",
    attachType: 0,
    entityHandle: 0,
    entityHandleForModifiers: 0,
    applyVoiceBanRules: false,
    teamBehavior: 0,
    controlPointConfiguration: "",
  };
}

export const CUserMsgParticleManager_CreateParticle = {
  encode(message: CUserMsgParticleManager_CreateParticle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.particleNameIndex !== "0") {
      writer.uint32(9).fixed64(message.particleNameIndex);
    }
    if (message.attachType !== 0) {
      writer.uint32(16).int32(message.attachType);
    }
    if (message.entityHandle !== 0) {
      writer.uint32(24).uint32(message.entityHandle);
    }
    if (message.entityHandleForModifiers !== 0) {
      writer.uint32(32).uint32(message.entityHandleForModifiers);
    }
    if (message.applyVoiceBanRules === true) {
      writer.uint32(40).bool(message.applyVoiceBanRules);
    }
    if (message.teamBehavior !== 0) {
      writer.uint32(48).int32(message.teamBehavior);
    }
    if (message.controlPointConfiguration !== "") {
      writer.uint32(58).string(message.controlPointConfiguration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_CreateParticle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_CreateParticle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.particleNameIndex = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.attachType = reader.int32();
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

          message.entityHandleForModifiers = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.applyVoiceBanRules = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.teamBehavior = reader.int32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.controlPointConfiguration = reader.string();
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

function createBaseCUserMsgParticleManager_DestroyParticle(): CUserMsgParticleManager_DestroyParticle {
  return { destroyImmediately: false };
}

export const CUserMsgParticleManager_DestroyParticle = {
  encode(message: CUserMsgParticleManager_DestroyParticle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destroyImmediately === true) {
      writer.uint32(8).bool(message.destroyImmediately);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_DestroyParticle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_DestroyParticle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.destroyImmediately = reader.bool();
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

function createBaseCUserMsgParticleManager_DestroyParticleInvolving(): CUserMsgParticleManager_DestroyParticleInvolving {
  return { destroyImmediately: false, entityHandle: 0 };
}

export const CUserMsgParticleManager_DestroyParticleInvolving = {
  encode(
    message: CUserMsgParticleManager_DestroyParticleInvolving,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.destroyImmediately === true) {
      writer.uint32(8).bool(message.destroyImmediately);
    }
    if (message.entityHandle !== 0) {
      writer.uint32(24).uint32(message.entityHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_DestroyParticleInvolving {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_DestroyParticleInvolving();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.destroyImmediately = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.entityHandle = reader.uint32();
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

function createBaseCUserMsgParticleManager_DestroyParticleNamed(): CUserMsgParticleManager_DestroyParticleNamed {
  return { particleNameIndex: "0", entityHandle: 0, destroyImmediately: false, playEndcap: false };
}

export const CUserMsgParticleManager_DestroyParticleNamed = {
  encode(message: CUserMsgParticleManager_DestroyParticleNamed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.particleNameIndex !== "0") {
      writer.uint32(9).fixed64(message.particleNameIndex);
    }
    if (message.entityHandle !== 0) {
      writer.uint32(16).uint32(message.entityHandle);
    }
    if (message.destroyImmediately === true) {
      writer.uint32(24).bool(message.destroyImmediately);
    }
    if (message.playEndcap === true) {
      writer.uint32(32).bool(message.playEndcap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_DestroyParticleNamed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_DestroyParticleNamed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.particleNameIndex = longToString(reader.fixed64() as Long);
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

          message.destroyImmediately = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.playEndcap = reader.bool();
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

function createBaseCUserMsgParticleManager_UpdateParticleOBSOLETE(): CUserMsgParticleManager_UpdateParticleOBSOLETE {
  return { controlPoint: 0, position: undefined };
}

export const CUserMsgParticleManager_UpdateParticleOBSOLETE = {
  encode(
    message: CUserMsgParticleManager_UpdateParticleOBSOLETE,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.controlPoint !== 0) {
      writer.uint32(8).int32(message.controlPoint);
    }
    if (message.position !== undefined) {
      CMsgVector.encode(message.position, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_UpdateParticleOBSOLETE {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_UpdateParticleOBSOLETE();
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

          message.position = CMsgVector.decode(reader, reader.uint32());
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

function createBaseCUserMsgParticleManager_UpdateParticleFwdOBSOLETE(): CUserMsgParticleManager_UpdateParticleFwdOBSOLETE {
  return { controlPoint: 0, forward: undefined };
}

export const CUserMsgParticleManager_UpdateParticleFwdOBSOLETE = {
  encode(
    message: CUserMsgParticleManager_UpdateParticleFwdOBSOLETE,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.controlPoint !== 0) {
      writer.uint32(8).int32(message.controlPoint);
    }
    if (message.forward !== undefined) {
      CMsgVector.encode(message.forward, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_UpdateParticleFwdOBSOLETE {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_UpdateParticleFwdOBSOLETE();
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

          message.forward = CMsgVector.decode(reader, reader.uint32());
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

function createBaseCUserMsgParticleManager_UpdateParticleOrientOBSOLETE(): CUserMsgParticleManager_UpdateParticleOrientOBSOLETE {
  return { controlPoint: 0, forward: undefined, deprecatedRight: undefined, up: undefined, left: undefined };
}

export const CUserMsgParticleManager_UpdateParticleOrientOBSOLETE = {
  encode(
    message: CUserMsgParticleManager_UpdateParticleOrientOBSOLETE,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.controlPoint !== 0) {
      writer.uint32(8).int32(message.controlPoint);
    }
    if (message.forward !== undefined) {
      CMsgVector.encode(message.forward, writer.uint32(18).fork()).ldelim();
    }
    if (message.deprecatedRight !== undefined) {
      CMsgVector.encode(message.deprecatedRight, writer.uint32(26).fork()).ldelim();
    }
    if (message.up !== undefined) {
      CMsgVector.encode(message.up, writer.uint32(34).fork()).ldelim();
    }
    if (message.left !== undefined) {
      CMsgVector.encode(message.left, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_UpdateParticleOrientOBSOLETE {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_UpdateParticleOrientOBSOLETE();
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

          message.forward = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.deprecatedRight = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.up = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.left = CMsgVector.decode(reader, reader.uint32());
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

function createBaseCUserMsgParticleManager_UpdateParticleTransform(): CUserMsgParticleManager_UpdateParticleTransform {
  return { controlPoint: 0, position: undefined, orientation: undefined, interpolationInterval: 0 };
}

export const CUserMsgParticleManager_UpdateParticleTransform = {
  encode(
    message: CUserMsgParticleManager_UpdateParticleTransform,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.controlPoint !== 0) {
      writer.uint32(8).int32(message.controlPoint);
    }
    if (message.position !== undefined) {
      CMsgVector.encode(message.position, writer.uint32(18).fork()).ldelim();
    }
    if (message.orientation !== undefined) {
      CMsgQuaternion.encode(message.orientation, writer.uint32(26).fork()).ldelim();
    }
    if (message.interpolationInterval !== 0) {
      writer.uint32(37).float(message.interpolationInterval);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_UpdateParticleTransform {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_UpdateParticleTransform();
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

          message.position = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.orientation = CMsgQuaternion.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.interpolationInterval = reader.float();
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

function createBaseCUserMsgParticleManager_UpdateParticleFallback(): CUserMsgParticleManager_UpdateParticleFallback {
  return { controlPoint: 0, position: undefined };
}

export const CUserMsgParticleManager_UpdateParticleFallback = {
  encode(
    message: CUserMsgParticleManager_UpdateParticleFallback,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.controlPoint !== 0) {
      writer.uint32(8).int32(message.controlPoint);
    }
    if (message.position !== undefined) {
      CMsgVector.encode(message.position, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_UpdateParticleFallback {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_UpdateParticleFallback();
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

          message.position = CMsgVector.decode(reader, reader.uint32());
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

function createBaseCUserMsgParticleManager_UpdateParticleOffset(): CUserMsgParticleManager_UpdateParticleOffset {
  return { controlPoint: 0, originOffset: undefined, angleOffset: undefined };
}

export const CUserMsgParticleManager_UpdateParticleOffset = {
  encode(message: CUserMsgParticleManager_UpdateParticleOffset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.controlPoint !== 0) {
      writer.uint32(8).int32(message.controlPoint);
    }
    if (message.originOffset !== undefined) {
      CMsgVector.encode(message.originOffset, writer.uint32(18).fork()).ldelim();
    }
    if (message.angleOffset !== undefined) {
      CMsgQAngle.encode(message.angleOffset, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_UpdateParticleOffset {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_UpdateParticleOffset();
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

          message.originOffset = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.angleOffset = CMsgQAngle.decode(reader, reader.uint32());
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

function createBaseCUserMsgParticleManager_UpdateParticleEnt(): CUserMsgParticleManager_UpdateParticleEnt {
  return {
    controlPoint: 0,
    entityHandle: 0,
    attachType: 0,
    attachment: 0,
    fallbackPosition: undefined,
    includeWearables: false,
    offsetPosition: undefined,
    offsetAngles: undefined,
  };
}

export const CUserMsgParticleManager_UpdateParticleEnt = {
  encode(message: CUserMsgParticleManager_UpdateParticleEnt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.controlPoint !== 0) {
      writer.uint32(8).int32(message.controlPoint);
    }
    if (message.entityHandle !== 0) {
      writer.uint32(16).uint32(message.entityHandle);
    }
    if (message.attachType !== 0) {
      writer.uint32(24).int32(message.attachType);
    }
    if (message.attachment !== 0) {
      writer.uint32(32).int32(message.attachment);
    }
    if (message.fallbackPosition !== undefined) {
      CMsgVector.encode(message.fallbackPosition, writer.uint32(42).fork()).ldelim();
    }
    if (message.includeWearables === true) {
      writer.uint32(48).bool(message.includeWearables);
    }
    if (message.offsetPosition !== undefined) {
      CMsgVector.encode(message.offsetPosition, writer.uint32(58).fork()).ldelim();
    }
    if (message.offsetAngles !== undefined) {
      CMsgQAngle.encode(message.offsetAngles, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_UpdateParticleEnt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_UpdateParticleEnt();
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
          if (tag != 16) {
            break;
          }

          message.entityHandle = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.attachType = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.attachment = reader.int32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.fallbackPosition = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.includeWearables = reader.bool();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.offsetPosition = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.offsetAngles = CMsgQAngle.decode(reader, reader.uint32());
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

function createBaseCUserMsgParticleManager_UpdateParticleSetFrozen(): CUserMsgParticleManager_UpdateParticleSetFrozen {
  return { setFrozen: false, transitionDuration: 0 };
}

export const CUserMsgParticleManager_UpdateParticleSetFrozen = {
  encode(
    message: CUserMsgParticleManager_UpdateParticleSetFrozen,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.setFrozen === true) {
      writer.uint32(8).bool(message.setFrozen);
    }
    if (message.transitionDuration !== 0) {
      writer.uint32(21).float(message.transitionDuration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_UpdateParticleSetFrozen {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_UpdateParticleSetFrozen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.setFrozen = reader.bool();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.transitionDuration = reader.float();
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

function createBaseCUserMsgParticleManager_UpdateParticleShouldDraw(): CUserMsgParticleManager_UpdateParticleShouldDraw {
  return { shouldDraw: false };
}

export const CUserMsgParticleManager_UpdateParticleShouldDraw = {
  encode(
    message: CUserMsgParticleManager_UpdateParticleShouldDraw,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shouldDraw === true) {
      writer.uint32(8).bool(message.shouldDraw);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_UpdateParticleShouldDraw {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_UpdateParticleShouldDraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.shouldDraw = reader.bool();
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

function createBaseCUserMsgParticleManager_ChangeControlPointAttachment(): CUserMsgParticleManager_ChangeControlPointAttachment {
  return { attachmentOld: 0, attachmentNew: 0, entityHandle: 0 };
}

export const CUserMsgParticleManager_ChangeControlPointAttachment = {
  encode(
    message: CUserMsgParticleManager_ChangeControlPointAttachment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.attachmentOld !== 0) {
      writer.uint32(8).int32(message.attachmentOld);
    }
    if (message.attachmentNew !== 0) {
      writer.uint32(16).int32(message.attachmentNew);
    }
    if (message.entityHandle !== 0) {
      writer.uint32(24).uint32(message.entityHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_ChangeControlPointAttachment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_ChangeControlPointAttachment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.attachmentOld = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.attachmentNew = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.entityHandle = reader.uint32();
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

function createBaseCUserMsgParticleManager_UpdateEntityPosition(): CUserMsgParticleManager_UpdateEntityPosition {
  return { entityHandle: 0, position: undefined };
}

export const CUserMsgParticleManager_UpdateEntityPosition = {
  encode(message: CUserMsgParticleManager_UpdateEntityPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityHandle !== 0) {
      writer.uint32(8).uint32(message.entityHandle);
    }
    if (message.position !== undefined) {
      CMsgVector.encode(message.position, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_UpdateEntityPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_UpdateEntityPosition();
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
          if (tag != 18) {
            break;
          }

          message.position = CMsgVector.decode(reader, reader.uint32());
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

function createBaseCUserMsgParticleManager_SetParticleFoWProperties(): CUserMsgParticleManager_SetParticleFoWProperties {
  return { fowControlPoint: 0, fowControlPoint2: 0, fowRadius: 0 };
}

export const CUserMsgParticleManager_SetParticleFoWProperties = {
  encode(
    message: CUserMsgParticleManager_SetParticleFoWProperties,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.fowControlPoint !== 0) {
      writer.uint32(8).int32(message.fowControlPoint);
    }
    if (message.fowControlPoint2 !== 0) {
      writer.uint32(16).int32(message.fowControlPoint2);
    }
    if (message.fowRadius !== 0) {
      writer.uint32(29).float(message.fowRadius);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_SetParticleFoWProperties {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_SetParticleFoWProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.fowControlPoint = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.fowControlPoint2 = reader.int32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.fowRadius = reader.float();
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

function createBaseCUserMsgParticleManager_SetParticleShouldCheckFoW(): CUserMsgParticleManager_SetParticleShouldCheckFoW {
  return { checkFow: false };
}

export const CUserMsgParticleManager_SetParticleShouldCheckFoW = {
  encode(
    message: CUserMsgParticleManager_SetParticleShouldCheckFoW,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.checkFow === true) {
      writer.uint32(8).bool(message.checkFow);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_SetParticleShouldCheckFoW {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_SetParticleShouldCheckFoW();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.checkFow = reader.bool();
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

function createBaseCUserMsgParticleManager_SetControlPointModel(): CUserMsgParticleManager_SetControlPointModel {
  return { controlPoint: 0, modelName: "" };
}

export const CUserMsgParticleManager_SetControlPointModel = {
  encode(message: CUserMsgParticleManager_SetControlPointModel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.controlPoint !== 0) {
      writer.uint32(8).int32(message.controlPoint);
    }
    if (message.modelName !== "") {
      writer.uint32(18).string(message.modelName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_SetControlPointModel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_SetControlPointModel();
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

          message.modelName = reader.string();
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

function createBaseCUserMsgParticleManager_SetControlPointSnapshot(): CUserMsgParticleManager_SetControlPointSnapshot {
  return { controlPoint: 0, snapshotName: "" };
}

export const CUserMsgParticleManager_SetControlPointSnapshot = {
  encode(
    message: CUserMsgParticleManager_SetControlPointSnapshot,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.controlPoint !== 0) {
      writer.uint32(8).int32(message.controlPoint);
    }
    if (message.snapshotName !== "") {
      writer.uint32(18).string(message.snapshotName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_SetControlPointSnapshot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_SetControlPointSnapshot();
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

          message.snapshotName = reader.string();
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

function createBaseCUserMsgParticleManager_SetParticleText(): CUserMsgParticleManager_SetParticleText {
  return { text: "" };
}

export const CUserMsgParticleManager_SetParticleText = {
  encode(message: CUserMsgParticleManager_SetParticleText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_SetParticleText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_SetParticleText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.text = reader.string();
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

function createBaseCUserMsgParticleManager_SetTextureAttribute(): CUserMsgParticleManager_SetTextureAttribute {
  return { attributeName: "", textureName: "" };
}

export const CUserMsgParticleManager_SetTextureAttribute = {
  encode(message: CUserMsgParticleManager_SetTextureAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attributeName !== "") {
      writer.uint32(10).string(message.attributeName);
    }
    if (message.textureName !== "") {
      writer.uint32(18).string(message.textureName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_SetTextureAttribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_SetTextureAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.attributeName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.textureName = reader.string();
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

function createBaseCUserMsgParticleManager_SetSceneObjectGenericFlag(): CUserMsgParticleManager_SetSceneObjectGenericFlag {
  return { flagValue: false };
}

export const CUserMsgParticleManager_SetSceneObjectGenericFlag = {
  encode(
    message: CUserMsgParticleManager_SetSceneObjectGenericFlag,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.flagValue === true) {
      writer.uint32(8).bool(message.flagValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_SetSceneObjectGenericFlag {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_SetSceneObjectGenericFlag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.flagValue = reader.bool();
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

function createBaseCUserMsgParticleManager_SetSceneObjectTintAndDesat(): CUserMsgParticleManager_SetSceneObjectTintAndDesat {
  return { tint: 0, desat: 0 };
}

export const CUserMsgParticleManager_SetSceneObjectTintAndDesat = {
  encode(
    message: CUserMsgParticleManager_SetSceneObjectTintAndDesat,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tint !== 0) {
      writer.uint32(13).fixed32(message.tint);
    }
    if (message.desat !== 0) {
      writer.uint32(21).float(message.desat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_SetSceneObjectTintAndDesat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_SetSceneObjectTintAndDesat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.tint = reader.fixed32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.desat = reader.float();
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

function createBaseCUserMsgParticleManager_ParticleSkipToTime(): CUserMsgParticleManager_ParticleSkipToTime {
  return { skipToTime: 0 };
}

export const CUserMsgParticleManager_ParticleSkipToTime = {
  encode(message: CUserMsgParticleManager_ParticleSkipToTime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.skipToTime !== 0) {
      writer.uint32(13).float(message.skipToTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_ParticleSkipToTime {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_ParticleSkipToTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.skipToTime = reader.float();
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

function createBaseCUserMsgParticleManager_ParticleCanFreeze(): CUserMsgParticleManager_ParticleCanFreeze {
  return { canFreeze: false };
}

export const CUserMsgParticleManager_ParticleCanFreeze = {
  encode(message: CUserMsgParticleManager_ParticleCanFreeze, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.canFreeze === true) {
      writer.uint32(8).bool(message.canFreeze);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_ParticleCanFreeze {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_ParticleCanFreeze();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.canFreeze = reader.bool();
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

function createBaseCUserMsgParticleManager_ParticleFreezeTransitionOverride(): CUserMsgParticleManager_ParticleFreezeTransitionOverride {
  return { freezeTransitionOverride: 0 };
}

export const CUserMsgParticleManager_ParticleFreezeTransitionOverride = {
  encode(
    message: CUserMsgParticleManager_ParticleFreezeTransitionOverride,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.freezeTransitionOverride !== 0) {
      writer.uint32(13).float(message.freezeTransitionOverride);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_ParticleFreezeTransitionOverride {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_ParticleFreezeTransitionOverride();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.freezeTransitionOverride = reader.float();
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

function createBaseCUserMsgParticleManager_SetParticleNamedValueContext(): CUserMsgParticleManager_SetParticleNamedValueContext {
  return { floatValues: [], vectorValues: [], transformValues: [] };
}

export const CUserMsgParticleManager_SetParticleNamedValueContext = {
  encode(
    message: CUserMsgParticleManager_SetParticleNamedValueContext,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.floatValues) {
      CUserMsgParticleManager_SetParticleNamedValueContext_FloatContextValue.encode(v!, writer.uint32(10).fork())
        .ldelim();
    }
    for (const v of message.vectorValues) {
      CUserMsgParticleManager_SetParticleNamedValueContext_VectorContextValue.encode(v!, writer.uint32(18).fork())
        .ldelim();
    }
    for (const v of message.transformValues) {
      CUserMsgParticleManager_SetParticleNamedValueContext_TransformContextValue.encode(v!, writer.uint32(26).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgParticleManager_SetParticleNamedValueContext {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_SetParticleNamedValueContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.floatValues.push(
            CUserMsgParticleManager_SetParticleNamedValueContext_FloatContextValue.decode(reader, reader.uint32()),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.vectorValues.push(
            CUserMsgParticleManager_SetParticleNamedValueContext_VectorContextValue.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.transformValues.push(
            CUserMsgParticleManager_SetParticleNamedValueContext_TransformContextValue.decode(reader, reader.uint32()),
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
};

function createBaseCUserMsgParticleManager_SetParticleNamedValueContext_FloatContextValue(): CUserMsgParticleManager_SetParticleNamedValueContext_FloatContextValue {
  return { valueName: "", value: 0 };
}

export const CUserMsgParticleManager_SetParticleNamedValueContext_FloatContextValue = {
  encode(
    message: CUserMsgParticleManager_SetParticleNamedValueContext_FloatContextValue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.valueName !== "") {
      writer.uint32(10).string(message.valueName);
    }
    if (message.value !== 0) {
      writer.uint32(21).float(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CUserMsgParticleManager_SetParticleNamedValueContext_FloatContextValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_SetParticleNamedValueContext_FloatContextValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.valueName = reader.string();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.value = reader.float();
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

function createBaseCUserMsgParticleManager_SetParticleNamedValueContext_VectorContextValue(): CUserMsgParticleManager_SetParticleNamedValueContext_VectorContextValue {
  return { valueName: "", value: undefined, entIndex: 0, attachmentName: "" };
}

export const CUserMsgParticleManager_SetParticleNamedValueContext_VectorContextValue = {
  encode(
    message: CUserMsgParticleManager_SetParticleNamedValueContext_VectorContextValue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.valueName !== "") {
      writer.uint32(10).string(message.valueName);
    }
    if (message.value !== undefined) {
      CMsgVector.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    if (message.entIndex !== 0) {
      writer.uint32(24).uint32(message.entIndex);
    }
    if (message.attachmentName !== "") {
      writer.uint32(34).string(message.attachmentName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CUserMsgParticleManager_SetParticleNamedValueContext_VectorContextValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_SetParticleNamedValueContext_VectorContextValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.valueName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.entIndex = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.attachmentName = reader.string();
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

function createBaseCUserMsgParticleManager_SetParticleNamedValueContext_TransformContextValue(): CUserMsgParticleManager_SetParticleNamedValueContext_TransformContextValue {
  return { valueName: "", angles: undefined, translation: undefined, entIndex: 0, attachmentName: "" };
}

export const CUserMsgParticleManager_SetParticleNamedValueContext_TransformContextValue = {
  encode(
    message: CUserMsgParticleManager_SetParticleNamedValueContext_TransformContextValue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.valueName !== "") {
      writer.uint32(10).string(message.valueName);
    }
    if (message.angles !== undefined) {
      CMsgQAngle.encode(message.angles, writer.uint32(18).fork()).ldelim();
    }
    if (message.translation !== undefined) {
      CMsgVector.encode(message.translation, writer.uint32(26).fork()).ldelim();
    }
    if (message.entIndex !== 0) {
      writer.uint32(32).uint32(message.entIndex);
    }
    if (message.attachmentName !== "") {
      writer.uint32(42).string(message.attachmentName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CUserMsgParticleManager_SetParticleNamedValueContext_TransformContextValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgParticleManager_SetParticleNamedValueContext_TransformContextValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.valueName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.angles = CMsgQAngle.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.translation = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.entIndex = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.attachmentName = reader.string();
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

function createBaseCUserMsgHudError(): CUserMsgHudError {
  return { orderId: 0 };
}

export const CUserMsgHudError = {
  encode(message: CUserMsgHudError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== 0) {
      writer.uint32(8).int32(message.orderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgHudError {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgHudError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.orderId = reader.int32();
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

function createBaseCUserMsgCustomGameEvent(): CUserMsgCustomGameEvent {
  return { eventName: "", data: Buffer.alloc(0) };
}

export const CUserMsgCustomGameEvent = {
  encode(message: CUserMsgCustomGameEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventName !== "") {
      writer.uint32(10).string(message.eventName);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMsgCustomGameEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMsgCustomGameEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.eventName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
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

function createBaseCUserMessageHapticsManagerPulse(): CUserMessageHapticsManagerPulse {
  return { handId: 0, effectAmplitude: 0, effectFrequency: 0, effectDuration: 0 };
}

export const CUserMessageHapticsManagerPulse = {
  encode(message: CUserMessageHapticsManagerPulse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.handId !== 0) {
      writer.uint32(8).int32(message.handId);
    }
    if (message.effectAmplitude !== 0) {
      writer.uint32(21).float(message.effectAmplitude);
    }
    if (message.effectFrequency !== 0) {
      writer.uint32(29).float(message.effectFrequency);
    }
    if (message.effectDuration !== 0) {
      writer.uint32(37).float(message.effectDuration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageHapticsManagerPulse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageHapticsManagerPulse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.handId = reader.int32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.effectAmplitude = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.effectFrequency = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.effectDuration = reader.float();
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

function createBaseCUserMessageHapticsManagerEffect(): CUserMessageHapticsManagerEffect {
  return { handId: 0, effectNameHashCode: 0, effectScale: 0 };
}

export const CUserMessageHapticsManagerEffect = {
  encode(message: CUserMessageHapticsManagerEffect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.handId !== 0) {
      writer.uint32(8).int32(message.handId);
    }
    if (message.effectNameHashCode !== 0) {
      writer.uint32(16).uint32(message.effectNameHashCode);
    }
    if (message.effectScale !== 0) {
      writer.uint32(29).float(message.effectScale);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageHapticsManagerEffect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageHapticsManagerEffect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.handId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.effectNameHashCode = reader.uint32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.effectScale = reader.float();
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

function createBaseCUserMessageAnimStateGraphState(): CUserMessageAnimStateGraphState {
  return { entityIndex: 0, data: Buffer.alloc(0) };
}

export const CUserMessageAnimStateGraphState = {
  encode(message: CUserMessageAnimStateGraphState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityIndex !== 0) {
      writer.uint32(8).int32(message.entityIndex);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageAnimStateGraphState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageAnimStateGraphState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entityIndex = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
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

function createBaseCUserMessageCommandQueueState(): CUserMessageCommandQueueState {
  return { playerSlot: 0, commandQueueInfo: undefined };
}

export const CUserMessageCommandQueueState = {
  encode(message: CUserMessageCommandQueueState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerSlot !== 0) {
      writer.uint32(8).int32(message.playerSlot);
    }
    if (message.commandQueueInfo !== undefined) {
      CUserMessageCommandQueueState_commandQueueInfoT.encode(message.commandQueueInfo, writer.uint32(18).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageCommandQueueState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageCommandQueueState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerSlot = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.commandQueueInfo = CUserMessageCommandQueueState_commandQueueInfoT.decode(reader, reader.uint32());
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

function createBaseCUserMessageCommandQueueState_commandQueueInfoT(): CUserMessageCommandQueueState_commandQueueInfoT {
  return { commandsQueued: 0, commandQueueDesiredSize: 0, starvedCommandTicks: 0, timeDilationPercent: 0 };
}

export const CUserMessageCommandQueueState_commandQueueInfoT = {
  encode(
    message: CUserMessageCommandQueueState_commandQueueInfoT,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.commandsQueued !== 0) {
      writer.uint32(8).uint32(message.commandsQueued);
    }
    if (message.commandQueueDesiredSize !== 0) {
      writer.uint32(16).uint32(message.commandQueueDesiredSize);
    }
    if (message.starvedCommandTicks !== 0) {
      writer.uint32(24).uint32(message.starvedCommandTicks);
    }
    if (message.timeDilationPercent !== 0) {
      writer.uint32(32).int32(message.timeDilationPercent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageCommandQueueState_commandQueueInfoT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageCommandQueueState_commandQueueInfoT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.commandsQueued = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.commandQueueDesiredSize = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.starvedCommandTicks = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.timeDilationPercent = reader.int32();
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

function createBaseCUserMessageUpdateCssClasses(): CUserMessageUpdateCssClasses {
  return { targetWorldPanel: 0, cssClasses: "", isAdd: false };
}

export const CUserMessageUpdateCssClasses = {
  encode(message: CUserMessageUpdateCssClasses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetWorldPanel !== 0) {
      writer.uint32(8).int32(message.targetWorldPanel);
    }
    if (message.cssClasses !== "") {
      writer.uint32(18).string(message.cssClasses);
    }
    if (message.isAdd === true) {
      writer.uint32(24).bool(message.isAdd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageUpdateCssClasses {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageUpdateCssClasses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.targetWorldPanel = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.cssClasses = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isAdd = reader.bool();
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

function createBaseCUserMessageServerFrameTime(): CUserMessageServerFrameTime {
  return { frameTime: 0 };
}

export const CUserMessageServerFrameTime = {
  encode(message: CUserMessageServerFrameTime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.frameTime !== 0) {
      writer.uint32(13).float(message.frameTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageServerFrameTime {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageServerFrameTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.frameTime = reader.float();
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

function createBaseCUserMessageLagCompensationError(): CUserMessageLagCompensationError {
  return { distance: 0 };
}

export const CUserMessageLagCompensationError = {
  encode(message: CUserMessageLagCompensationError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distance !== 0) {
      writer.uint32(13).float(message.distance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageLagCompensationError {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageLagCompensationError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.distance = reader.float();
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

function createBaseCUserMessageRequestDllStatus(): CUserMessageRequestDllStatus {
  return { dllAction: "", fullReport: false };
}

export const CUserMessageRequestDllStatus = {
  encode(message: CUserMessageRequestDllStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dllAction !== "") {
      writer.uint32(10).string(message.dllAction);
    }
    if (message.fullReport === true) {
      writer.uint32(16).bool(message.fullReport);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageRequestDllStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageRequestDllStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.dllAction = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.fullReport = reader.bool();
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

function createBaseCUserMessageRequestUtilAction(): CUserMessageRequestUtilAction {
  return { util1: 0, util2: 0, util3: 0, util4: 0, util5: 0 };
}

export const CUserMessageRequestUtilAction = {
  encode(message: CUserMessageRequestUtilAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.util1 !== 0) {
      writer.uint32(16).int32(message.util1);
    }
    if (message.util2 !== 0) {
      writer.uint32(24).int32(message.util2);
    }
    if (message.util3 !== 0) {
      writer.uint32(32).int32(message.util3);
    }
    if (message.util4 !== 0) {
      writer.uint32(40).int32(message.util4);
    }
    if (message.util5 !== 0) {
      writer.uint32(48).int32(message.util5);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageRequestUtilAction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageRequestUtilAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 16) {
            break;
          }

          message.util1 = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.util2 = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.util3 = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.util4 = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.util5 = reader.int32();
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

function createBaseCUserMessageUtilMsgResponse(): CUserMessageUtilMsgResponse {
  return {
    crc: 0,
    itemCount: 0,
    crc2: 0,
    itemCount2: 0,
    crcPart: [],
    crcPart2: [],
    clientTimestamp: 0,
    platform: 0,
    itemdetails: [],
    itemgroup: 0,
    totalCount: 0,
    totalCount2: 0,
  };
}

export const CUserMessageUtilMsgResponse = {
  encode(message: CUserMessageUtilMsgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.crc !== 0) {
      writer.uint32(13).fixed32(message.crc);
    }
    if (message.itemCount !== 0) {
      writer.uint32(16).int32(message.itemCount);
    }
    if (message.crc2 !== 0) {
      writer.uint32(29).fixed32(message.crc2);
    }
    if (message.itemCount2 !== 0) {
      writer.uint32(32).int32(message.itemCount2);
    }
    writer.uint32(42).fork();
    for (const v of message.crcPart) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(50).fork();
    for (const v of message.crcPart2) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.clientTimestamp !== 0) {
      writer.uint32(56).int32(message.clientTimestamp);
    }
    if (message.platform !== 0) {
      writer.uint32(64).int32(message.platform);
    }
    for (const v of message.itemdetails) {
      CUserMessageUtilMsgResponse_ItemDetail.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.itemgroup !== 0) {
      writer.uint32(80).int32(message.itemgroup);
    }
    if (message.totalCount !== 0) {
      writer.uint32(88).int32(message.totalCount);
    }
    if (message.totalCount2 !== 0) {
      writer.uint32(96).int32(message.totalCount2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageUtilMsgResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageUtilMsgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.crc = reader.fixed32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.itemCount = reader.int32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.crc2 = reader.fixed32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.itemCount2 = reader.int32();
          continue;
        case 5:
          if (tag == 40) {
            message.crcPart.push(reader.int32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.crcPart.push(reader.int32());
            }

            continue;
          }

          break;
        case 6:
          if (tag == 48) {
            message.crcPart2.push(reader.int32());
            continue;
          }

          if (tag == 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.crcPart2.push(reader.int32());
            }

            continue;
          }

          break;
        case 7:
          if (tag != 56) {
            break;
          }

          message.clientTimestamp = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.platform = reader.int32();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.itemdetails.push(CUserMessageUtilMsgResponse_ItemDetail.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.itemgroup = reader.int32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.totalCount = reader.int32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.totalCount2 = reader.int32();
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

function createBaseCUserMessageUtilMsgResponse_ItemDetail(): CUserMessageUtilMsgResponse_ItemDetail {
  return { index: 0, hash: 0, crc: 0, name: "" };
}

export const CUserMessageUtilMsgResponse_ItemDetail = {
  encode(message: CUserMessageUtilMsgResponse_ItemDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).int32(message.index);
    }
    if (message.hash !== 0) {
      writer.uint32(16).int32(message.hash);
    }
    if (message.crc !== 0) {
      writer.uint32(24).int32(message.crc);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageUtilMsgResponse_ItemDetail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageUtilMsgResponse_ItemDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.index = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.hash = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.crc = reader.int32();
          continue;
        case 4:
          if (tag != 34) {
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
};

function createBaseCUserMessageDllStatus(): CUserMessageDllStatus {
  return {
    fileReport: "",
    commandLine: "",
    totalFiles: 0,
    processId: 0,
    osversion: 0,
    clientTime: "0",
    diagnostics: [],
  };
}

export const CUserMessageDllStatus = {
  encode(message: CUserMessageDllStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fileReport !== "") {
      writer.uint32(10).string(message.fileReport);
    }
    if (message.commandLine !== "") {
      writer.uint32(18).string(message.commandLine);
    }
    if (message.totalFiles !== 0) {
      writer.uint32(24).uint32(message.totalFiles);
    }
    if (message.processId !== 0) {
      writer.uint32(32).uint32(message.processId);
    }
    if (message.osversion !== 0) {
      writer.uint32(40).int32(message.osversion);
    }
    if (message.clientTime !== "0") {
      writer.uint32(48).uint64(message.clientTime);
    }
    for (const v of message.diagnostics) {
      CUserMessageDllStatus_CVDiagnostic.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageDllStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageDllStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.fileReport = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.commandLine = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.totalFiles = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.processId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.osversion = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.clientTime = longToString(reader.uint64() as Long);
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.diagnostics.push(CUserMessageDllStatus_CVDiagnostic.decode(reader, reader.uint32()));
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

function createBaseCUserMessageDllStatus_CVDiagnostic(): CUserMessageDllStatus_CVDiagnostic {
  return { id: 0, extended: 0, value: "0", stringValue: "" };
}

export const CUserMessageDllStatus_CVDiagnostic = {
  encode(message: CUserMessageDllStatus_CVDiagnostic, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.extended !== 0) {
      writer.uint32(16).uint32(message.extended);
    }
    if (message.value !== "0") {
      writer.uint32(24).uint64(message.value);
    }
    if (message.stringValue !== "") {
      writer.uint32(34).string(message.stringValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageDllStatus_CVDiagnostic {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageDllStatus_CVDiagnostic();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.extended = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.value = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.stringValue = reader.string();
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

function createBaseCUserMessageRequestInventory(): CUserMessageRequestInventory {
  return { inventory: 0, offset: 0, options: 0 };
}

export const CUserMessageRequestInventory = {
  encode(message: CUserMessageRequestInventory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inventory !== 0) {
      writer.uint32(8).int32(message.inventory);
    }
    if (message.offset !== 0) {
      writer.uint32(16).int32(message.offset);
    }
    if (message.options !== 0) {
      writer.uint32(24).int32(message.options);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageRequestInventory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageRequestInventory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.inventory = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.offset = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.options = reader.int32();
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

function createBaseCUserMessageInventoryResponse(): CUserMessageInventoryResponse {
  return {
    crc: 0,
    itemCount: 0,
    osversion: 0,
    perfTime: 0,
    clientTimestamp: 0,
    platform: 0,
    inventories: [],
    inventories2: [],
    invType: 0,
    buildVersion: 0,
    instance: 0,
  };
}

export const CUserMessageInventoryResponse = {
  encode(message: CUserMessageInventoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.crc !== 0) {
      writer.uint32(13).fixed32(message.crc);
    }
    if (message.itemCount !== 0) {
      writer.uint32(16).int32(message.itemCount);
    }
    if (message.osversion !== 0) {
      writer.uint32(40).int32(message.osversion);
    }
    if (message.perfTime !== 0) {
      writer.uint32(48).int32(message.perfTime);
    }
    if (message.clientTimestamp !== 0) {
      writer.uint32(56).int32(message.clientTimestamp);
    }
    if (message.platform !== 0) {
      writer.uint32(64).int32(message.platform);
    }
    for (const v of message.inventories) {
      CUserMessageInventoryResponse_InventoryDetail.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.inventories2) {
      CUserMessageInventoryResponse_InventoryDetail.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.invType !== 0) {
      writer.uint32(88).int32(message.invType);
    }
    if (message.buildVersion !== 0) {
      writer.uint32(96).int32(message.buildVersion);
    }
    if (message.instance !== 0) {
      writer.uint32(104).int32(message.instance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageInventoryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageInventoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.crc = reader.fixed32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.itemCount = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.osversion = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.perfTime = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.clientTimestamp = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.platform = reader.int32();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.inventories.push(CUserMessageInventoryResponse_InventoryDetail.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.inventories2.push(CUserMessageInventoryResponse_InventoryDetail.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.invType = reader.int32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.buildVersion = reader.int32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.instance = reader.int32();
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

function createBaseCUserMessageInventoryResponse_InventoryDetail(): CUserMessageInventoryResponse_InventoryDetail {
  return {
    index: 0,
    primary: "0",
    offset: "0",
    first: "0",
    base: "0",
    name: "",
    baseName: "",
    baseDetail: 0,
    baseTime: 0,
    baseHash: 0,
  };
}

export const CUserMessageInventoryResponse_InventoryDetail = {
  encode(message: CUserMessageInventoryResponse_InventoryDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).int32(message.index);
    }
    if (message.primary !== "0") {
      writer.uint32(16).int64(message.primary);
    }
    if (message.offset !== "0") {
      writer.uint32(24).int64(message.offset);
    }
    if (message.first !== "0") {
      writer.uint32(32).int64(message.first);
    }
    if (message.base !== "0") {
      writer.uint32(40).int64(message.base);
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.baseName !== "") {
      writer.uint32(58).string(message.baseName);
    }
    if (message.baseDetail !== 0) {
      writer.uint32(64).int32(message.baseDetail);
    }
    if (message.baseTime !== 0) {
      writer.uint32(72).int32(message.baseTime);
    }
    if (message.baseHash !== 0) {
      writer.uint32(80).int32(message.baseHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserMessageInventoryResponse_InventoryDetail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserMessageInventoryResponse_InventoryDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.index = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.primary = longToString(reader.int64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.offset = longToString(reader.int64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.first = longToString(reader.int64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.base = longToString(reader.int64() as Long);
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.name = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.baseName = reader.string();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.baseDetail = reader.int32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.baseTime = reader.int32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.baseHash = reader.int32();
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
