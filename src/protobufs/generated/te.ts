/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CMsgQAngle, CMsgVector } from "./networkbasetypes";

export enum ETEProtobufIds {
  TE_EffectDispatchId = 400,
  TE_ArmorRicochetId = 401,
  TE_BeamEntPointId = 402,
  TE_BeamEntsId = 403,
  TE_BeamPointsId = 404,
  TE_BeamRingId = 405,
  TE_BSPDecalId = 407,
  TE_BubblesId = 408,
  TE_BubbleTrailId = 409,
  TE_DecalId = 410,
  TE_WorldDecalId = 411,
  TE_EnergySplashId = 412,
  TE_FizzId = 413,
  TE_ShatterSurfaceId = 414,
  TE_GlowSpriteId = 415,
  TE_ImpactId = 416,
  TE_MuzzleFlashId = 417,
  TE_BloodStreamId = 418,
  TE_ExplosionId = 419,
  TE_DustId = 420,
  TE_LargeFunnelId = 421,
  TE_SparksId = 422,
  TE_PhysicsPropId = 423,
  TE_PlayerDecalId = 424,
  TE_ProjectedDecalId = 425,
  TE_SmokeId = 426,
}

export function eTEProtobufIdsFromJSON(object: any): ETEProtobufIds {
  switch (object) {
    case 400:
    case "TE_EffectDispatchId":
      return ETEProtobufIds.TE_EffectDispatchId;
    case 401:
    case "TE_ArmorRicochetId":
      return ETEProtobufIds.TE_ArmorRicochetId;
    case 402:
    case "TE_BeamEntPointId":
      return ETEProtobufIds.TE_BeamEntPointId;
    case 403:
    case "TE_BeamEntsId":
      return ETEProtobufIds.TE_BeamEntsId;
    case 404:
    case "TE_BeamPointsId":
      return ETEProtobufIds.TE_BeamPointsId;
    case 405:
    case "TE_BeamRingId":
      return ETEProtobufIds.TE_BeamRingId;
    case 407:
    case "TE_BSPDecalId":
      return ETEProtobufIds.TE_BSPDecalId;
    case 408:
    case "TE_BubblesId":
      return ETEProtobufIds.TE_BubblesId;
    case 409:
    case "TE_BubbleTrailId":
      return ETEProtobufIds.TE_BubbleTrailId;
    case 410:
    case "TE_DecalId":
      return ETEProtobufIds.TE_DecalId;
    case 411:
    case "TE_WorldDecalId":
      return ETEProtobufIds.TE_WorldDecalId;
    case 412:
    case "TE_EnergySplashId":
      return ETEProtobufIds.TE_EnergySplashId;
    case 413:
    case "TE_FizzId":
      return ETEProtobufIds.TE_FizzId;
    case 414:
    case "TE_ShatterSurfaceId":
      return ETEProtobufIds.TE_ShatterSurfaceId;
    case 415:
    case "TE_GlowSpriteId":
      return ETEProtobufIds.TE_GlowSpriteId;
    case 416:
    case "TE_ImpactId":
      return ETEProtobufIds.TE_ImpactId;
    case 417:
    case "TE_MuzzleFlashId":
      return ETEProtobufIds.TE_MuzzleFlashId;
    case 418:
    case "TE_BloodStreamId":
      return ETEProtobufIds.TE_BloodStreamId;
    case 419:
    case "TE_ExplosionId":
      return ETEProtobufIds.TE_ExplosionId;
    case 420:
    case "TE_DustId":
      return ETEProtobufIds.TE_DustId;
    case 421:
    case "TE_LargeFunnelId":
      return ETEProtobufIds.TE_LargeFunnelId;
    case 422:
    case "TE_SparksId":
      return ETEProtobufIds.TE_SparksId;
    case 423:
    case "TE_PhysicsPropId":
      return ETEProtobufIds.TE_PhysicsPropId;
    case 424:
    case "TE_PlayerDecalId":
      return ETEProtobufIds.TE_PlayerDecalId;
    case 425:
    case "TE_ProjectedDecalId":
      return ETEProtobufIds.TE_ProjectedDecalId;
    case 426:
    case "TE_SmokeId":
      return ETEProtobufIds.TE_SmokeId;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETEProtobufIds");
  }
}

export function eTEProtobufIdsToJSON(object: ETEProtobufIds): string {
  switch (object) {
    case ETEProtobufIds.TE_EffectDispatchId:
      return "TE_EffectDispatchId";
    case ETEProtobufIds.TE_ArmorRicochetId:
      return "TE_ArmorRicochetId";
    case ETEProtobufIds.TE_BeamEntPointId:
      return "TE_BeamEntPointId";
    case ETEProtobufIds.TE_BeamEntsId:
      return "TE_BeamEntsId";
    case ETEProtobufIds.TE_BeamPointsId:
      return "TE_BeamPointsId";
    case ETEProtobufIds.TE_BeamRingId:
      return "TE_BeamRingId";
    case ETEProtobufIds.TE_BSPDecalId:
      return "TE_BSPDecalId";
    case ETEProtobufIds.TE_BubblesId:
      return "TE_BubblesId";
    case ETEProtobufIds.TE_BubbleTrailId:
      return "TE_BubbleTrailId";
    case ETEProtobufIds.TE_DecalId:
      return "TE_DecalId";
    case ETEProtobufIds.TE_WorldDecalId:
      return "TE_WorldDecalId";
    case ETEProtobufIds.TE_EnergySplashId:
      return "TE_EnergySplashId";
    case ETEProtobufIds.TE_FizzId:
      return "TE_FizzId";
    case ETEProtobufIds.TE_ShatterSurfaceId:
      return "TE_ShatterSurfaceId";
    case ETEProtobufIds.TE_GlowSpriteId:
      return "TE_GlowSpriteId";
    case ETEProtobufIds.TE_ImpactId:
      return "TE_ImpactId";
    case ETEProtobufIds.TE_MuzzleFlashId:
      return "TE_MuzzleFlashId";
    case ETEProtobufIds.TE_BloodStreamId:
      return "TE_BloodStreamId";
    case ETEProtobufIds.TE_ExplosionId:
      return "TE_ExplosionId";
    case ETEProtobufIds.TE_DustId:
      return "TE_DustId";
    case ETEProtobufIds.TE_LargeFunnelId:
      return "TE_LargeFunnelId";
    case ETEProtobufIds.TE_SparksId:
      return "TE_SparksId";
    case ETEProtobufIds.TE_PhysicsPropId:
      return "TE_PhysicsPropId";
    case ETEProtobufIds.TE_PlayerDecalId:
      return "TE_PlayerDecalId";
    case ETEProtobufIds.TE_ProjectedDecalId:
      return "TE_ProjectedDecalId";
    case ETEProtobufIds.TE_SmokeId:
      return "TE_SmokeId";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETEProtobufIds");
  }
}

export interface CMsgTEArmorRicochet {
  pos: CMsgVector | undefined;
  dir: CMsgVector | undefined;
}

export interface CMsgTEBaseBeam {
  modelindex: string;
  haloindex: string;
  startframe: number;
  framerate: number;
  life: number;
  width: number;
  endwidth: number;
  fadelength: number;
  amplitude: number;
  color: number;
  speed: number;
  flags: number;
}

export interface CMsgTEBeamEntPoint {
  base: CMsgTEBaseBeam | undefined;
  startentity: number;
  endentity: number;
  start: CMsgVector | undefined;
  end: CMsgVector | undefined;
}

export interface CMsgTEBeamEnts {
  base: CMsgTEBaseBeam | undefined;
  startentity: number;
  endentity: number;
}

export interface CMsgTEBeamPoints {
  base: CMsgTEBaseBeam | undefined;
  start: CMsgVector | undefined;
  end: CMsgVector | undefined;
}

export interface CMsgTEBeamRing {
  base: CMsgTEBaseBeam | undefined;
  startentity: number;
  endentity: number;
}

export interface CMsgTEBSPDecal {
  origin: CMsgVector | undefined;
  normal: CMsgVector | undefined;
  saxis: CMsgVector | undefined;
  entity: number;
  index: number;
}

export interface CMsgTEBubbles {
  mins: CMsgVector | undefined;
  maxs: CMsgVector | undefined;
  height: number;
  count: number;
  speed: number;
}

export interface CMsgTEBubbleTrail {
  mins: CMsgVector | undefined;
  maxs: CMsgVector | undefined;
  waterz: number;
  count: number;
  speed: number;
}

export interface CMsgTEDecal {
  origin: CMsgVector | undefined;
  start: CMsgVector | undefined;
  entity: number;
  hitbox: number;
  index: number;
}

export interface CMsgEffectData {
  origin: CMsgVector | undefined;
  start: CMsgVector | undefined;
  normal: CMsgVector | undefined;
  angles: CMsgQAngle | undefined;
  entity: number;
  otherentity: number;
  scale: number;
  magnitude: number;
  radius: number;
  surfaceprop: number;
  effectindex: string;
  damagetype: number;
  material: number;
  hitbox: number;
  color: number;
  flags: number;
  attachmentindex: number;
  effectname: number;
  attachmentname: number;
}

export interface CMsgTEEffectDispatch {
  effectdata: CMsgEffectData | undefined;
}

export interface CMsgTEEnergySplash {
  pos: CMsgVector | undefined;
  dir: CMsgVector | undefined;
  explosive: boolean;
}

export interface CMsgTEFizz {
  entity: number;
  density: number;
  current: number;
}

export interface CMsgTEShatterSurface {
  origin: CMsgVector | undefined;
  angles: CMsgQAngle | undefined;
  force: CMsgVector | undefined;
  forcepos: CMsgVector | undefined;
  width: number;
  height: number;
  shardsize: number;
  surfacetype: number;
  frontcolor: number;
  backcolor: number;
}

export interface CMsgTEGlowSprite {
  origin: CMsgVector | undefined;
  scale: number;
  life: number;
  brightness: number;
}

export interface CMsgTEImpact {
  origin: CMsgVector | undefined;
  normal: CMsgVector | undefined;
  type: number;
}

export interface CMsgTEMuzzleFlash {
  origin: CMsgVector | undefined;
  angles: CMsgQAngle | undefined;
  scale: number;
  type: number;
}

export interface CMsgTEBloodStream {
  origin: CMsgVector | undefined;
  direction: CMsgVector | undefined;
  color: number;
  amount: number;
}

export interface CMsgTEExplosion {
  origin: CMsgVector | undefined;
  framerate: number;
  flags: number;
  normal: CMsgVector | undefined;
  materialtype: number;
  radius: number;
  magnitude: number;
  scale: number;
  affectRagdolls: boolean;
  effectName: string;
  explosionType: number;
}

export interface CMsgTEDust {
  origin: CMsgVector | undefined;
  size: number;
  speed: number;
  direction: CMsgVector | undefined;
}

export interface CMsgTELargeFunnel {
  origin: CMsgVector | undefined;
  reversed: number;
}

export interface CMsgTESparks {
  origin: CMsgVector | undefined;
  magnitude: number;
  length: number;
  direction: CMsgVector | undefined;
}

export interface CMsgTEPhysicsProp {
  origin: CMsgVector | undefined;
  velocity: CMsgVector | undefined;
  angles: CMsgQAngle | undefined;
  skin: number;
  flags: number;
  effects: number;
  color: number;
  modelindex: string;
  unusedBreakmodelsnottomake: number;
  scale: number;
}

export interface CMsgTEPlayerDecal {
  origin: CMsgVector | undefined;
  player: number;
  entity: number;
}

export interface CMsgTEProjectedDecal {
  origin: CMsgVector | undefined;
  angles: CMsgQAngle | undefined;
  index: number;
  distance: number;
}

export interface CMsgTESmoke {
  origin: CMsgVector | undefined;
  scale: number;
}

export interface CMsgTEWorldDecal {
  origin: CMsgVector | undefined;
  normal: CMsgVector | undefined;
  index: number;
}

function createBaseCMsgTEArmorRicochet(): CMsgTEArmorRicochet {
  return { pos: undefined, dir: undefined };
}

export const CMsgTEArmorRicochet = {
  encode(message: CMsgTEArmorRicochet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pos !== undefined) {
      CMsgVector.encode(message.pos, writer.uint32(10).fork()).ldelim();
    }
    if (message.dir !== undefined) {
      CMsgVector.encode(message.dir, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEArmorRicochet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEArmorRicochet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.pos = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.dir = CMsgVector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTEArmorRicochet {
    return {
      pos: isSet(object.pos) ? CMsgVector.fromJSON(object.pos) : undefined,
      dir: isSet(object.dir) ? CMsgVector.fromJSON(object.dir) : undefined,
    };
  },

  toJSON(message: CMsgTEArmorRicochet): unknown {
    const obj: any = {};
    message.pos !== undefined && (obj.pos = message.pos ? CMsgVector.toJSON(message.pos) : undefined);
    message.dir !== undefined && (obj.dir = message.dir ? CMsgVector.toJSON(message.dir) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgTEArmorRicochet>): CMsgTEArmorRicochet {
    return CMsgTEArmorRicochet.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEArmorRicochet>): CMsgTEArmorRicochet {
    const message = createBaseCMsgTEArmorRicochet();
    message.pos = (object.pos !== undefined && object.pos !== null) ? CMsgVector.fromPartial(object.pos) : undefined;
    message.dir = (object.dir !== undefined && object.dir !== null) ? CMsgVector.fromPartial(object.dir) : undefined;
    return message;
  },
};

function createBaseCMsgTEBaseBeam(): CMsgTEBaseBeam {
  return {
    modelindex: "0",
    haloindex: "0",
    startframe: 0,
    framerate: 0,
    life: 0,
    width: 0,
    endwidth: 0,
    fadelength: 0,
    amplitude: 0,
    color: 0,
    speed: 0,
    flags: 0,
  };
}

export const CMsgTEBaseBeam = {
  encode(message: CMsgTEBaseBeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.modelindex !== "0") {
      writer.uint32(9).fixed64(message.modelindex);
    }
    if (message.haloindex !== "0") {
      writer.uint32(17).fixed64(message.haloindex);
    }
    if (message.startframe !== 0) {
      writer.uint32(24).uint32(message.startframe);
    }
    if (message.framerate !== 0) {
      writer.uint32(32).uint32(message.framerate);
    }
    if (message.life !== 0) {
      writer.uint32(45).float(message.life);
    }
    if (message.width !== 0) {
      writer.uint32(53).float(message.width);
    }
    if (message.endwidth !== 0) {
      writer.uint32(61).float(message.endwidth);
    }
    if (message.fadelength !== 0) {
      writer.uint32(64).uint32(message.fadelength);
    }
    if (message.amplitude !== 0) {
      writer.uint32(77).float(message.amplitude);
    }
    if (message.color !== 0) {
      writer.uint32(85).fixed32(message.color);
    }
    if (message.speed !== 0) {
      writer.uint32(88).uint32(message.speed);
    }
    if (message.flags !== 0) {
      writer.uint32(96).uint32(message.flags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEBaseBeam {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEBaseBeam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.modelindex = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.haloindex = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.startframe = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.framerate = reader.uint32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.life = reader.float();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.width = reader.float();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.endwidth = reader.float();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.fadelength = reader.uint32();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.amplitude = reader.float();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.color = reader.fixed32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.speed = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
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

  fromJSON(object: any): CMsgTEBaseBeam {
    return {
      modelindex: isSet(object.modelindex) ? String(object.modelindex) : "0",
      haloindex: isSet(object.haloindex) ? String(object.haloindex) : "0",
      startframe: isSet(object.startframe) ? Number(object.startframe) : 0,
      framerate: isSet(object.framerate) ? Number(object.framerate) : 0,
      life: isSet(object.life) ? Number(object.life) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      endwidth: isSet(object.endwidth) ? Number(object.endwidth) : 0,
      fadelength: isSet(object.fadelength) ? Number(object.fadelength) : 0,
      amplitude: isSet(object.amplitude) ? Number(object.amplitude) : 0,
      color: isSet(object.color) ? Number(object.color) : 0,
      speed: isSet(object.speed) ? Number(object.speed) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
    };
  },

  toJSON(message: CMsgTEBaseBeam): unknown {
    const obj: any = {};
    message.modelindex !== undefined && (obj.modelindex = message.modelindex);
    message.haloindex !== undefined && (obj.haloindex = message.haloindex);
    message.startframe !== undefined && (obj.startframe = Math.round(message.startframe));
    message.framerate !== undefined && (obj.framerate = Math.round(message.framerate));
    message.life !== undefined && (obj.life = message.life);
    message.width !== undefined && (obj.width = message.width);
    message.endwidth !== undefined && (obj.endwidth = message.endwidth);
    message.fadelength !== undefined && (obj.fadelength = Math.round(message.fadelength));
    message.amplitude !== undefined && (obj.amplitude = message.amplitude);
    message.color !== undefined && (obj.color = Math.round(message.color));
    message.speed !== undefined && (obj.speed = Math.round(message.speed));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    return obj;
  },

  create(base?: DeepPartial<CMsgTEBaseBeam>): CMsgTEBaseBeam {
    return CMsgTEBaseBeam.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEBaseBeam>): CMsgTEBaseBeam {
    const message = createBaseCMsgTEBaseBeam();
    message.modelindex = object.modelindex ?? "0";
    message.haloindex = object.haloindex ?? "0";
    message.startframe = object.startframe ?? 0;
    message.framerate = object.framerate ?? 0;
    message.life = object.life ?? 0;
    message.width = object.width ?? 0;
    message.endwidth = object.endwidth ?? 0;
    message.fadelength = object.fadelength ?? 0;
    message.amplitude = object.amplitude ?? 0;
    message.color = object.color ?? 0;
    message.speed = object.speed ?? 0;
    message.flags = object.flags ?? 0;
    return message;
  },
};

function createBaseCMsgTEBeamEntPoint(): CMsgTEBeamEntPoint {
  return { base: undefined, startentity: 0, endentity: 0, start: undefined, end: undefined };
}

export const CMsgTEBeamEntPoint = {
  encode(message: CMsgTEBeamEntPoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== undefined) {
      CMsgTEBaseBeam.encode(message.base, writer.uint32(10).fork()).ldelim();
    }
    if (message.startentity !== 0) {
      writer.uint32(16).uint32(message.startentity);
    }
    if (message.endentity !== 0) {
      writer.uint32(24).uint32(message.endentity);
    }
    if (message.start !== undefined) {
      CMsgVector.encode(message.start, writer.uint32(34).fork()).ldelim();
    }
    if (message.end !== undefined) {
      CMsgVector.encode(message.end, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEBeamEntPoint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEBeamEntPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.base = CMsgTEBaseBeam.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.startentity = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.endentity = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.start = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.end = CMsgVector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTEBeamEntPoint {
    return {
      base: isSet(object.base) ? CMsgTEBaseBeam.fromJSON(object.base) : undefined,
      startentity: isSet(object.startentity) ? Number(object.startentity) : 0,
      endentity: isSet(object.endentity) ? Number(object.endentity) : 0,
      start: isSet(object.start) ? CMsgVector.fromJSON(object.start) : undefined,
      end: isSet(object.end) ? CMsgVector.fromJSON(object.end) : undefined,
    };
  },

  toJSON(message: CMsgTEBeamEntPoint): unknown {
    const obj: any = {};
    message.base !== undefined && (obj.base = message.base ? CMsgTEBaseBeam.toJSON(message.base) : undefined);
    message.startentity !== undefined && (obj.startentity = Math.round(message.startentity));
    message.endentity !== undefined && (obj.endentity = Math.round(message.endentity));
    message.start !== undefined && (obj.start = message.start ? CMsgVector.toJSON(message.start) : undefined);
    message.end !== undefined && (obj.end = message.end ? CMsgVector.toJSON(message.end) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgTEBeamEntPoint>): CMsgTEBeamEntPoint {
    return CMsgTEBeamEntPoint.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEBeamEntPoint>): CMsgTEBeamEntPoint {
    const message = createBaseCMsgTEBeamEntPoint();
    message.base = (object.base !== undefined && object.base !== null)
      ? CMsgTEBaseBeam.fromPartial(object.base)
      : undefined;
    message.startentity = object.startentity ?? 0;
    message.endentity = object.endentity ?? 0;
    message.start = (object.start !== undefined && object.start !== null)
      ? CMsgVector.fromPartial(object.start)
      : undefined;
    message.end = (object.end !== undefined && object.end !== null) ? CMsgVector.fromPartial(object.end) : undefined;
    return message;
  },
};

function createBaseCMsgTEBeamEnts(): CMsgTEBeamEnts {
  return { base: undefined, startentity: 0, endentity: 0 };
}

export const CMsgTEBeamEnts = {
  encode(message: CMsgTEBeamEnts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== undefined) {
      CMsgTEBaseBeam.encode(message.base, writer.uint32(10).fork()).ldelim();
    }
    if (message.startentity !== 0) {
      writer.uint32(16).uint32(message.startentity);
    }
    if (message.endentity !== 0) {
      writer.uint32(24).uint32(message.endentity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEBeamEnts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEBeamEnts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.base = CMsgTEBaseBeam.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.startentity = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.endentity = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTEBeamEnts {
    return {
      base: isSet(object.base) ? CMsgTEBaseBeam.fromJSON(object.base) : undefined,
      startentity: isSet(object.startentity) ? Number(object.startentity) : 0,
      endentity: isSet(object.endentity) ? Number(object.endentity) : 0,
    };
  },

  toJSON(message: CMsgTEBeamEnts): unknown {
    const obj: any = {};
    message.base !== undefined && (obj.base = message.base ? CMsgTEBaseBeam.toJSON(message.base) : undefined);
    message.startentity !== undefined && (obj.startentity = Math.round(message.startentity));
    message.endentity !== undefined && (obj.endentity = Math.round(message.endentity));
    return obj;
  },

  create(base?: DeepPartial<CMsgTEBeamEnts>): CMsgTEBeamEnts {
    return CMsgTEBeamEnts.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEBeamEnts>): CMsgTEBeamEnts {
    const message = createBaseCMsgTEBeamEnts();
    message.base = (object.base !== undefined && object.base !== null)
      ? CMsgTEBaseBeam.fromPartial(object.base)
      : undefined;
    message.startentity = object.startentity ?? 0;
    message.endentity = object.endentity ?? 0;
    return message;
  },
};

function createBaseCMsgTEBeamPoints(): CMsgTEBeamPoints {
  return { base: undefined, start: undefined, end: undefined };
}

export const CMsgTEBeamPoints = {
  encode(message: CMsgTEBeamPoints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== undefined) {
      CMsgTEBaseBeam.encode(message.base, writer.uint32(10).fork()).ldelim();
    }
    if (message.start !== undefined) {
      CMsgVector.encode(message.start, writer.uint32(18).fork()).ldelim();
    }
    if (message.end !== undefined) {
      CMsgVector.encode(message.end, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEBeamPoints {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEBeamPoints();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.base = CMsgTEBaseBeam.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.start = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.end = CMsgVector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTEBeamPoints {
    return {
      base: isSet(object.base) ? CMsgTEBaseBeam.fromJSON(object.base) : undefined,
      start: isSet(object.start) ? CMsgVector.fromJSON(object.start) : undefined,
      end: isSet(object.end) ? CMsgVector.fromJSON(object.end) : undefined,
    };
  },

  toJSON(message: CMsgTEBeamPoints): unknown {
    const obj: any = {};
    message.base !== undefined && (obj.base = message.base ? CMsgTEBaseBeam.toJSON(message.base) : undefined);
    message.start !== undefined && (obj.start = message.start ? CMsgVector.toJSON(message.start) : undefined);
    message.end !== undefined && (obj.end = message.end ? CMsgVector.toJSON(message.end) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgTEBeamPoints>): CMsgTEBeamPoints {
    return CMsgTEBeamPoints.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEBeamPoints>): CMsgTEBeamPoints {
    const message = createBaseCMsgTEBeamPoints();
    message.base = (object.base !== undefined && object.base !== null)
      ? CMsgTEBaseBeam.fromPartial(object.base)
      : undefined;
    message.start = (object.start !== undefined && object.start !== null)
      ? CMsgVector.fromPartial(object.start)
      : undefined;
    message.end = (object.end !== undefined && object.end !== null) ? CMsgVector.fromPartial(object.end) : undefined;
    return message;
  },
};

function createBaseCMsgTEBeamRing(): CMsgTEBeamRing {
  return { base: undefined, startentity: 0, endentity: 0 };
}

export const CMsgTEBeamRing = {
  encode(message: CMsgTEBeamRing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== undefined) {
      CMsgTEBaseBeam.encode(message.base, writer.uint32(10).fork()).ldelim();
    }
    if (message.startentity !== 0) {
      writer.uint32(16).uint32(message.startentity);
    }
    if (message.endentity !== 0) {
      writer.uint32(24).uint32(message.endentity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEBeamRing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEBeamRing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.base = CMsgTEBaseBeam.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.startentity = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.endentity = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTEBeamRing {
    return {
      base: isSet(object.base) ? CMsgTEBaseBeam.fromJSON(object.base) : undefined,
      startentity: isSet(object.startentity) ? Number(object.startentity) : 0,
      endentity: isSet(object.endentity) ? Number(object.endentity) : 0,
    };
  },

  toJSON(message: CMsgTEBeamRing): unknown {
    const obj: any = {};
    message.base !== undefined && (obj.base = message.base ? CMsgTEBaseBeam.toJSON(message.base) : undefined);
    message.startentity !== undefined && (obj.startentity = Math.round(message.startentity));
    message.endentity !== undefined && (obj.endentity = Math.round(message.endentity));
    return obj;
  },

  create(base?: DeepPartial<CMsgTEBeamRing>): CMsgTEBeamRing {
    return CMsgTEBeamRing.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEBeamRing>): CMsgTEBeamRing {
    const message = createBaseCMsgTEBeamRing();
    message.base = (object.base !== undefined && object.base !== null)
      ? CMsgTEBaseBeam.fromPartial(object.base)
      : undefined;
    message.startentity = object.startentity ?? 0;
    message.endentity = object.endentity ?? 0;
    return message;
  },
};

function createBaseCMsgTEBSPDecal(): CMsgTEBSPDecal {
  return { origin: undefined, normal: undefined, saxis: undefined, entity: 0, index: 0 };
}

export const CMsgTEBSPDecal = {
  encode(message: CMsgTEBSPDecal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.normal !== undefined) {
      CMsgVector.encode(message.normal, writer.uint32(18).fork()).ldelim();
    }
    if (message.saxis !== undefined) {
      CMsgVector.encode(message.saxis, writer.uint32(26).fork()).ldelim();
    }
    if (message.entity !== 0) {
      writer.uint32(32).int32(message.entity);
    }
    if (message.index !== 0) {
      writer.uint32(40).uint32(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEBSPDecal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEBSPDecal();
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

          message.normal = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.saxis = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.entity = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.index = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTEBSPDecal {
    return {
      origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
      normal: isSet(object.normal) ? CMsgVector.fromJSON(object.normal) : undefined,
      saxis: isSet(object.saxis) ? CMsgVector.fromJSON(object.saxis) : undefined,
      entity: isSet(object.entity) ? Number(object.entity) : 0,
      index: isSet(object.index) ? Number(object.index) : 0,
    };
  },

  toJSON(message: CMsgTEBSPDecal): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? CMsgVector.toJSON(message.origin) : undefined);
    message.normal !== undefined && (obj.normal = message.normal ? CMsgVector.toJSON(message.normal) : undefined);
    message.saxis !== undefined && (obj.saxis = message.saxis ? CMsgVector.toJSON(message.saxis) : undefined);
    message.entity !== undefined && (obj.entity = Math.round(message.entity));
    message.index !== undefined && (obj.index = Math.round(message.index));
    return obj;
  },

  create(base?: DeepPartial<CMsgTEBSPDecal>): CMsgTEBSPDecal {
    return CMsgTEBSPDecal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEBSPDecal>): CMsgTEBSPDecal {
    const message = createBaseCMsgTEBSPDecal();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? CMsgVector.fromPartial(object.origin)
      : undefined;
    message.normal = (object.normal !== undefined && object.normal !== null)
      ? CMsgVector.fromPartial(object.normal)
      : undefined;
    message.saxis = (object.saxis !== undefined && object.saxis !== null)
      ? CMsgVector.fromPartial(object.saxis)
      : undefined;
    message.entity = object.entity ?? 0;
    message.index = object.index ?? 0;
    return message;
  },
};

function createBaseCMsgTEBubbles(): CMsgTEBubbles {
  return { mins: undefined, maxs: undefined, height: 0, count: 0, speed: 0 };
}

export const CMsgTEBubbles = {
  encode(message: CMsgTEBubbles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mins !== undefined) {
      CMsgVector.encode(message.mins, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxs !== undefined) {
      CMsgVector.encode(message.maxs, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== 0) {
      writer.uint32(29).float(message.height);
    }
    if (message.count !== 0) {
      writer.uint32(32).uint32(message.count);
    }
    if (message.speed !== 0) {
      writer.uint32(45).float(message.speed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEBubbles {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEBubbles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.mins = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.maxs = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.height = reader.float();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.count = reader.uint32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.speed = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTEBubbles {
    return {
      mins: isSet(object.mins) ? CMsgVector.fromJSON(object.mins) : undefined,
      maxs: isSet(object.maxs) ? CMsgVector.fromJSON(object.maxs) : undefined,
      height: isSet(object.height) ? Number(object.height) : 0,
      count: isSet(object.count) ? Number(object.count) : 0,
      speed: isSet(object.speed) ? Number(object.speed) : 0,
    };
  },

  toJSON(message: CMsgTEBubbles): unknown {
    const obj: any = {};
    message.mins !== undefined && (obj.mins = message.mins ? CMsgVector.toJSON(message.mins) : undefined);
    message.maxs !== undefined && (obj.maxs = message.maxs ? CMsgVector.toJSON(message.maxs) : undefined);
    message.height !== undefined && (obj.height = message.height);
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.speed !== undefined && (obj.speed = message.speed);
    return obj;
  },

  create(base?: DeepPartial<CMsgTEBubbles>): CMsgTEBubbles {
    return CMsgTEBubbles.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEBubbles>): CMsgTEBubbles {
    const message = createBaseCMsgTEBubbles();
    message.mins = (object.mins !== undefined && object.mins !== null)
      ? CMsgVector.fromPartial(object.mins)
      : undefined;
    message.maxs = (object.maxs !== undefined && object.maxs !== null)
      ? CMsgVector.fromPartial(object.maxs)
      : undefined;
    message.height = object.height ?? 0;
    message.count = object.count ?? 0;
    message.speed = object.speed ?? 0;
    return message;
  },
};

function createBaseCMsgTEBubbleTrail(): CMsgTEBubbleTrail {
  return { mins: undefined, maxs: undefined, waterz: 0, count: 0, speed: 0 };
}

export const CMsgTEBubbleTrail = {
  encode(message: CMsgTEBubbleTrail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mins !== undefined) {
      CMsgVector.encode(message.mins, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxs !== undefined) {
      CMsgVector.encode(message.maxs, writer.uint32(18).fork()).ldelim();
    }
    if (message.waterz !== 0) {
      writer.uint32(29).float(message.waterz);
    }
    if (message.count !== 0) {
      writer.uint32(32).uint32(message.count);
    }
    if (message.speed !== 0) {
      writer.uint32(45).float(message.speed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEBubbleTrail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEBubbleTrail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.mins = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.maxs = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.waterz = reader.float();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.count = reader.uint32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.speed = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTEBubbleTrail {
    return {
      mins: isSet(object.mins) ? CMsgVector.fromJSON(object.mins) : undefined,
      maxs: isSet(object.maxs) ? CMsgVector.fromJSON(object.maxs) : undefined,
      waterz: isSet(object.waterz) ? Number(object.waterz) : 0,
      count: isSet(object.count) ? Number(object.count) : 0,
      speed: isSet(object.speed) ? Number(object.speed) : 0,
    };
  },

  toJSON(message: CMsgTEBubbleTrail): unknown {
    const obj: any = {};
    message.mins !== undefined && (obj.mins = message.mins ? CMsgVector.toJSON(message.mins) : undefined);
    message.maxs !== undefined && (obj.maxs = message.maxs ? CMsgVector.toJSON(message.maxs) : undefined);
    message.waterz !== undefined && (obj.waterz = message.waterz);
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.speed !== undefined && (obj.speed = message.speed);
    return obj;
  },

  create(base?: DeepPartial<CMsgTEBubbleTrail>): CMsgTEBubbleTrail {
    return CMsgTEBubbleTrail.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEBubbleTrail>): CMsgTEBubbleTrail {
    const message = createBaseCMsgTEBubbleTrail();
    message.mins = (object.mins !== undefined && object.mins !== null)
      ? CMsgVector.fromPartial(object.mins)
      : undefined;
    message.maxs = (object.maxs !== undefined && object.maxs !== null)
      ? CMsgVector.fromPartial(object.maxs)
      : undefined;
    message.waterz = object.waterz ?? 0;
    message.count = object.count ?? 0;
    message.speed = object.speed ?? 0;
    return message;
  },
};

function createBaseCMsgTEDecal(): CMsgTEDecal {
  return { origin: undefined, start: undefined, entity: 0, hitbox: 0, index: 0 };
}

export const CMsgTEDecal = {
  encode(message: CMsgTEDecal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.start !== undefined) {
      CMsgVector.encode(message.start, writer.uint32(18).fork()).ldelim();
    }
    if (message.entity !== 0) {
      writer.uint32(24).int32(message.entity);
    }
    if (message.hitbox !== 0) {
      writer.uint32(32).uint32(message.hitbox);
    }
    if (message.index !== 0) {
      writer.uint32(40).uint32(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEDecal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEDecal();
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

          message.start = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.entity = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.hitbox = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.index = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTEDecal {
    return {
      origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
      start: isSet(object.start) ? CMsgVector.fromJSON(object.start) : undefined,
      entity: isSet(object.entity) ? Number(object.entity) : 0,
      hitbox: isSet(object.hitbox) ? Number(object.hitbox) : 0,
      index: isSet(object.index) ? Number(object.index) : 0,
    };
  },

  toJSON(message: CMsgTEDecal): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? CMsgVector.toJSON(message.origin) : undefined);
    message.start !== undefined && (obj.start = message.start ? CMsgVector.toJSON(message.start) : undefined);
    message.entity !== undefined && (obj.entity = Math.round(message.entity));
    message.hitbox !== undefined && (obj.hitbox = Math.round(message.hitbox));
    message.index !== undefined && (obj.index = Math.round(message.index));
    return obj;
  },

  create(base?: DeepPartial<CMsgTEDecal>): CMsgTEDecal {
    return CMsgTEDecal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEDecal>): CMsgTEDecal {
    const message = createBaseCMsgTEDecal();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? CMsgVector.fromPartial(object.origin)
      : undefined;
    message.start = (object.start !== undefined && object.start !== null)
      ? CMsgVector.fromPartial(object.start)
      : undefined;
    message.entity = object.entity ?? 0;
    message.hitbox = object.hitbox ?? 0;
    message.index = object.index ?? 0;
    return message;
  },
};

function createBaseCMsgEffectData(): CMsgEffectData {
  return {
    origin: undefined,
    start: undefined,
    normal: undefined,
    angles: undefined,
    entity: 0,
    otherentity: 0,
    scale: 0,
    magnitude: 0,
    radius: 0,
    surfaceprop: 0,
    effectindex: "0",
    damagetype: 0,
    material: 0,
    hitbox: 0,
    color: 0,
    flags: 0,
    attachmentindex: 0,
    effectname: 0,
    attachmentname: 0,
  };
}

export const CMsgEffectData = {
  encode(message: CMsgEffectData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.start !== undefined) {
      CMsgVector.encode(message.start, writer.uint32(18).fork()).ldelim();
    }
    if (message.normal !== undefined) {
      CMsgVector.encode(message.normal, writer.uint32(26).fork()).ldelim();
    }
    if (message.angles !== undefined) {
      CMsgQAngle.encode(message.angles, writer.uint32(34).fork()).ldelim();
    }
    if (message.entity !== 0) {
      writer.uint32(45).fixed32(message.entity);
    }
    if (message.otherentity !== 0) {
      writer.uint32(53).fixed32(message.otherentity);
    }
    if (message.scale !== 0) {
      writer.uint32(61).float(message.scale);
    }
    if (message.magnitude !== 0) {
      writer.uint32(69).float(message.magnitude);
    }
    if (message.radius !== 0) {
      writer.uint32(77).float(message.radius);
    }
    if (message.surfaceprop !== 0) {
      writer.uint32(85).fixed32(message.surfaceprop);
    }
    if (message.effectindex !== "0") {
      writer.uint32(89).fixed64(message.effectindex);
    }
    if (message.damagetype !== 0) {
      writer.uint32(96).uint32(message.damagetype);
    }
    if (message.material !== 0) {
      writer.uint32(104).uint32(message.material);
    }
    if (message.hitbox !== 0) {
      writer.uint32(112).uint32(message.hitbox);
    }
    if (message.color !== 0) {
      writer.uint32(120).uint32(message.color);
    }
    if (message.flags !== 0) {
      writer.uint32(128).uint32(message.flags);
    }
    if (message.attachmentindex !== 0) {
      writer.uint32(136).int32(message.attachmentindex);
    }
    if (message.effectname !== 0) {
      writer.uint32(144).uint32(message.effectname);
    }
    if (message.attachmentname !== 0) {
      writer.uint32(152).uint32(message.attachmentname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgEffectData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgEffectData();
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

          message.start = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.normal = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.angles = CMsgQAngle.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.entity = reader.fixed32();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.otherentity = reader.fixed32();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.scale = reader.float();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.magnitude = reader.float();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.radius = reader.float();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.surfaceprop = reader.fixed32();
          continue;
        case 11:
          if (tag != 89) {
            break;
          }

          message.effectindex = longToString(reader.fixed64() as Long);
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.damagetype = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.material = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.hitbox = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.color = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.attachmentindex = reader.int32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.effectname = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.attachmentname = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgEffectData {
    return {
      origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
      start: isSet(object.start) ? CMsgVector.fromJSON(object.start) : undefined,
      normal: isSet(object.normal) ? CMsgVector.fromJSON(object.normal) : undefined,
      angles: isSet(object.angles) ? CMsgQAngle.fromJSON(object.angles) : undefined,
      entity: isSet(object.entity) ? Number(object.entity) : 0,
      otherentity: isSet(object.otherentity) ? Number(object.otherentity) : 0,
      scale: isSet(object.scale) ? Number(object.scale) : 0,
      magnitude: isSet(object.magnitude) ? Number(object.magnitude) : 0,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
      surfaceprop: isSet(object.surfaceprop) ? Number(object.surfaceprop) : 0,
      effectindex: isSet(object.effectindex) ? String(object.effectindex) : "0",
      damagetype: isSet(object.damagetype) ? Number(object.damagetype) : 0,
      material: isSet(object.material) ? Number(object.material) : 0,
      hitbox: isSet(object.hitbox) ? Number(object.hitbox) : 0,
      color: isSet(object.color) ? Number(object.color) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      attachmentindex: isSet(object.attachmentindex) ? Number(object.attachmentindex) : 0,
      effectname: isSet(object.effectname) ? Number(object.effectname) : 0,
      attachmentname: isSet(object.attachmentname) ? Number(object.attachmentname) : 0,
    };
  },

  toJSON(message: CMsgEffectData): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? CMsgVector.toJSON(message.origin) : undefined);
    message.start !== undefined && (obj.start = message.start ? CMsgVector.toJSON(message.start) : undefined);
    message.normal !== undefined && (obj.normal = message.normal ? CMsgVector.toJSON(message.normal) : undefined);
    message.angles !== undefined && (obj.angles = message.angles ? CMsgQAngle.toJSON(message.angles) : undefined);
    message.entity !== undefined && (obj.entity = Math.round(message.entity));
    message.otherentity !== undefined && (obj.otherentity = Math.round(message.otherentity));
    message.scale !== undefined && (obj.scale = message.scale);
    message.magnitude !== undefined && (obj.magnitude = message.magnitude);
    message.radius !== undefined && (obj.radius = message.radius);
    message.surfaceprop !== undefined && (obj.surfaceprop = Math.round(message.surfaceprop));
    message.effectindex !== undefined && (obj.effectindex = message.effectindex);
    message.damagetype !== undefined && (obj.damagetype = Math.round(message.damagetype));
    message.material !== undefined && (obj.material = Math.round(message.material));
    message.hitbox !== undefined && (obj.hitbox = Math.round(message.hitbox));
    message.color !== undefined && (obj.color = Math.round(message.color));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.attachmentindex !== undefined && (obj.attachmentindex = Math.round(message.attachmentindex));
    message.effectname !== undefined && (obj.effectname = Math.round(message.effectname));
    message.attachmentname !== undefined && (obj.attachmentname = Math.round(message.attachmentname));
    return obj;
  },

  create(base?: DeepPartial<CMsgEffectData>): CMsgEffectData {
    return CMsgEffectData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgEffectData>): CMsgEffectData {
    const message = createBaseCMsgEffectData();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? CMsgVector.fromPartial(object.origin)
      : undefined;
    message.start = (object.start !== undefined && object.start !== null)
      ? CMsgVector.fromPartial(object.start)
      : undefined;
    message.normal = (object.normal !== undefined && object.normal !== null)
      ? CMsgVector.fromPartial(object.normal)
      : undefined;
    message.angles = (object.angles !== undefined && object.angles !== null)
      ? CMsgQAngle.fromPartial(object.angles)
      : undefined;
    message.entity = object.entity ?? 0;
    message.otherentity = object.otherentity ?? 0;
    message.scale = object.scale ?? 0;
    message.magnitude = object.magnitude ?? 0;
    message.radius = object.radius ?? 0;
    message.surfaceprop = object.surfaceprop ?? 0;
    message.effectindex = object.effectindex ?? "0";
    message.damagetype = object.damagetype ?? 0;
    message.material = object.material ?? 0;
    message.hitbox = object.hitbox ?? 0;
    message.color = object.color ?? 0;
    message.flags = object.flags ?? 0;
    message.attachmentindex = object.attachmentindex ?? 0;
    message.effectname = object.effectname ?? 0;
    message.attachmentname = object.attachmentname ?? 0;
    return message;
  },
};

function createBaseCMsgTEEffectDispatch(): CMsgTEEffectDispatch {
  return { effectdata: undefined };
}

export const CMsgTEEffectDispatch = {
  encode(message: CMsgTEEffectDispatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effectdata !== undefined) {
      CMsgEffectData.encode(message.effectdata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEEffectDispatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEEffectDispatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.effectdata = CMsgEffectData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTEEffectDispatch {
    return { effectdata: isSet(object.effectdata) ? CMsgEffectData.fromJSON(object.effectdata) : undefined };
  },

  toJSON(message: CMsgTEEffectDispatch): unknown {
    const obj: any = {};
    message.effectdata !== undefined &&
      (obj.effectdata = message.effectdata ? CMsgEffectData.toJSON(message.effectdata) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgTEEffectDispatch>): CMsgTEEffectDispatch {
    return CMsgTEEffectDispatch.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEEffectDispatch>): CMsgTEEffectDispatch {
    const message = createBaseCMsgTEEffectDispatch();
    message.effectdata = (object.effectdata !== undefined && object.effectdata !== null)
      ? CMsgEffectData.fromPartial(object.effectdata)
      : undefined;
    return message;
  },
};

function createBaseCMsgTEEnergySplash(): CMsgTEEnergySplash {
  return { pos: undefined, dir: undefined, explosive: false };
}

export const CMsgTEEnergySplash = {
  encode(message: CMsgTEEnergySplash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pos !== undefined) {
      CMsgVector.encode(message.pos, writer.uint32(10).fork()).ldelim();
    }
    if (message.dir !== undefined) {
      CMsgVector.encode(message.dir, writer.uint32(18).fork()).ldelim();
    }
    if (message.explosive === true) {
      writer.uint32(24).bool(message.explosive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEEnergySplash {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEEnergySplash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.pos = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.dir = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.explosive = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTEEnergySplash {
    return {
      pos: isSet(object.pos) ? CMsgVector.fromJSON(object.pos) : undefined,
      dir: isSet(object.dir) ? CMsgVector.fromJSON(object.dir) : undefined,
      explosive: isSet(object.explosive) ? Boolean(object.explosive) : false,
    };
  },

  toJSON(message: CMsgTEEnergySplash): unknown {
    const obj: any = {};
    message.pos !== undefined && (obj.pos = message.pos ? CMsgVector.toJSON(message.pos) : undefined);
    message.dir !== undefined && (obj.dir = message.dir ? CMsgVector.toJSON(message.dir) : undefined);
    message.explosive !== undefined && (obj.explosive = message.explosive);
    return obj;
  },

  create(base?: DeepPartial<CMsgTEEnergySplash>): CMsgTEEnergySplash {
    return CMsgTEEnergySplash.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEEnergySplash>): CMsgTEEnergySplash {
    const message = createBaseCMsgTEEnergySplash();
    message.pos = (object.pos !== undefined && object.pos !== null) ? CMsgVector.fromPartial(object.pos) : undefined;
    message.dir = (object.dir !== undefined && object.dir !== null) ? CMsgVector.fromPartial(object.dir) : undefined;
    message.explosive = object.explosive ?? false;
    return message;
  },
};

function createBaseCMsgTEFizz(): CMsgTEFizz {
  return { entity: 0, density: 0, current: 0 };
}

export const CMsgTEFizz = {
  encode(message: CMsgTEFizz, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== 0) {
      writer.uint32(8).int32(message.entity);
    }
    if (message.density !== 0) {
      writer.uint32(16).uint32(message.density);
    }
    if (message.current !== 0) {
      writer.uint32(24).int32(message.current);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEFizz {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEFizz();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entity = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.density = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.current = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTEFizz {
    return {
      entity: isSet(object.entity) ? Number(object.entity) : 0,
      density: isSet(object.density) ? Number(object.density) : 0,
      current: isSet(object.current) ? Number(object.current) : 0,
    };
  },

  toJSON(message: CMsgTEFizz): unknown {
    const obj: any = {};
    message.entity !== undefined && (obj.entity = Math.round(message.entity));
    message.density !== undefined && (obj.density = Math.round(message.density));
    message.current !== undefined && (obj.current = Math.round(message.current));
    return obj;
  },

  create(base?: DeepPartial<CMsgTEFizz>): CMsgTEFizz {
    return CMsgTEFizz.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEFizz>): CMsgTEFizz {
    const message = createBaseCMsgTEFizz();
    message.entity = object.entity ?? 0;
    message.density = object.density ?? 0;
    message.current = object.current ?? 0;
    return message;
  },
};

function createBaseCMsgTEShatterSurface(): CMsgTEShatterSurface {
  return {
    origin: undefined,
    angles: undefined,
    force: undefined,
    forcepos: undefined,
    width: 0,
    height: 0,
    shardsize: 0,
    surfacetype: 0,
    frontcolor: 0,
    backcolor: 0,
  };
}

export const CMsgTEShatterSurface = {
  encode(message: CMsgTEShatterSurface, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.angles !== undefined) {
      CMsgQAngle.encode(message.angles, writer.uint32(18).fork()).ldelim();
    }
    if (message.force !== undefined) {
      CMsgVector.encode(message.force, writer.uint32(26).fork()).ldelim();
    }
    if (message.forcepos !== undefined) {
      CMsgVector.encode(message.forcepos, writer.uint32(34).fork()).ldelim();
    }
    if (message.width !== 0) {
      writer.uint32(45).float(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(53).float(message.height);
    }
    if (message.shardsize !== 0) {
      writer.uint32(61).float(message.shardsize);
    }
    if (message.surfacetype !== 0) {
      writer.uint32(64).uint32(message.surfacetype);
    }
    if (message.frontcolor !== 0) {
      writer.uint32(77).fixed32(message.frontcolor);
    }
    if (message.backcolor !== 0) {
      writer.uint32(85).fixed32(message.backcolor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEShatterSurface {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEShatterSurface();
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

          message.angles = CMsgQAngle.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.force = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.forcepos = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.width = reader.float();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.height = reader.float();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.shardsize = reader.float();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.surfacetype = reader.uint32();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.frontcolor = reader.fixed32();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.backcolor = reader.fixed32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTEShatterSurface {
    return {
      origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
      angles: isSet(object.angles) ? CMsgQAngle.fromJSON(object.angles) : undefined,
      force: isSet(object.force) ? CMsgVector.fromJSON(object.force) : undefined,
      forcepos: isSet(object.forcepos) ? CMsgVector.fromJSON(object.forcepos) : undefined,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      shardsize: isSet(object.shardsize) ? Number(object.shardsize) : 0,
      surfacetype: isSet(object.surfacetype) ? Number(object.surfacetype) : 0,
      frontcolor: isSet(object.frontcolor) ? Number(object.frontcolor) : 0,
      backcolor: isSet(object.backcolor) ? Number(object.backcolor) : 0,
    };
  },

  toJSON(message: CMsgTEShatterSurface): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? CMsgVector.toJSON(message.origin) : undefined);
    message.angles !== undefined && (obj.angles = message.angles ? CMsgQAngle.toJSON(message.angles) : undefined);
    message.force !== undefined && (obj.force = message.force ? CMsgVector.toJSON(message.force) : undefined);
    message.forcepos !== undefined &&
      (obj.forcepos = message.forcepos ? CMsgVector.toJSON(message.forcepos) : undefined);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.shardsize !== undefined && (obj.shardsize = message.shardsize);
    message.surfacetype !== undefined && (obj.surfacetype = Math.round(message.surfacetype));
    message.frontcolor !== undefined && (obj.frontcolor = Math.round(message.frontcolor));
    message.backcolor !== undefined && (obj.backcolor = Math.round(message.backcolor));
    return obj;
  },

  create(base?: DeepPartial<CMsgTEShatterSurface>): CMsgTEShatterSurface {
    return CMsgTEShatterSurface.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEShatterSurface>): CMsgTEShatterSurface {
    const message = createBaseCMsgTEShatterSurface();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? CMsgVector.fromPartial(object.origin)
      : undefined;
    message.angles = (object.angles !== undefined && object.angles !== null)
      ? CMsgQAngle.fromPartial(object.angles)
      : undefined;
    message.force = (object.force !== undefined && object.force !== null)
      ? CMsgVector.fromPartial(object.force)
      : undefined;
    message.forcepos = (object.forcepos !== undefined && object.forcepos !== null)
      ? CMsgVector.fromPartial(object.forcepos)
      : undefined;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.shardsize = object.shardsize ?? 0;
    message.surfacetype = object.surfacetype ?? 0;
    message.frontcolor = object.frontcolor ?? 0;
    message.backcolor = object.backcolor ?? 0;
    return message;
  },
};

function createBaseCMsgTEGlowSprite(): CMsgTEGlowSprite {
  return { origin: undefined, scale: 0, life: 0, brightness: 0 };
}

export const CMsgTEGlowSprite = {
  encode(message: CMsgTEGlowSprite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.scale !== 0) {
      writer.uint32(21).float(message.scale);
    }
    if (message.life !== 0) {
      writer.uint32(29).float(message.life);
    }
    if (message.brightness !== 0) {
      writer.uint32(32).uint32(message.brightness);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEGlowSprite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEGlowSprite();
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
          if (tag != 21) {
            break;
          }

          message.scale = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.life = reader.float();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.brightness = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTEGlowSprite {
    return {
      origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
      scale: isSet(object.scale) ? Number(object.scale) : 0,
      life: isSet(object.life) ? Number(object.life) : 0,
      brightness: isSet(object.brightness) ? Number(object.brightness) : 0,
    };
  },

  toJSON(message: CMsgTEGlowSprite): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? CMsgVector.toJSON(message.origin) : undefined);
    message.scale !== undefined && (obj.scale = message.scale);
    message.life !== undefined && (obj.life = message.life);
    message.brightness !== undefined && (obj.brightness = Math.round(message.brightness));
    return obj;
  },

  create(base?: DeepPartial<CMsgTEGlowSprite>): CMsgTEGlowSprite {
    return CMsgTEGlowSprite.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEGlowSprite>): CMsgTEGlowSprite {
    const message = createBaseCMsgTEGlowSprite();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? CMsgVector.fromPartial(object.origin)
      : undefined;
    message.scale = object.scale ?? 0;
    message.life = object.life ?? 0;
    message.brightness = object.brightness ?? 0;
    return message;
  },
};

function createBaseCMsgTEImpact(): CMsgTEImpact {
  return { origin: undefined, normal: undefined, type: 0 };
}

export const CMsgTEImpact = {
  encode(message: CMsgTEImpact, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.normal !== undefined) {
      CMsgVector.encode(message.normal, writer.uint32(18).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(24).uint32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEImpact {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEImpact();
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

          message.normal = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.type = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTEImpact {
    return {
      origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
      normal: isSet(object.normal) ? CMsgVector.fromJSON(object.normal) : undefined,
      type: isSet(object.type) ? Number(object.type) : 0,
    };
  },

  toJSON(message: CMsgTEImpact): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? CMsgVector.toJSON(message.origin) : undefined);
    message.normal !== undefined && (obj.normal = message.normal ? CMsgVector.toJSON(message.normal) : undefined);
    message.type !== undefined && (obj.type = Math.round(message.type));
    return obj;
  },

  create(base?: DeepPartial<CMsgTEImpact>): CMsgTEImpact {
    return CMsgTEImpact.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEImpact>): CMsgTEImpact {
    const message = createBaseCMsgTEImpact();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? CMsgVector.fromPartial(object.origin)
      : undefined;
    message.normal = (object.normal !== undefined && object.normal !== null)
      ? CMsgVector.fromPartial(object.normal)
      : undefined;
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseCMsgTEMuzzleFlash(): CMsgTEMuzzleFlash {
  return { origin: undefined, angles: undefined, scale: 0, type: 0 };
}

export const CMsgTEMuzzleFlash = {
  encode(message: CMsgTEMuzzleFlash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.angles !== undefined) {
      CMsgQAngle.encode(message.angles, writer.uint32(18).fork()).ldelim();
    }
    if (message.scale !== 0) {
      writer.uint32(29).float(message.scale);
    }
    if (message.type !== 0) {
      writer.uint32(32).uint32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEMuzzleFlash {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEMuzzleFlash();
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

          message.angles = CMsgQAngle.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.scale = reader.float();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.type = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTEMuzzleFlash {
    return {
      origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
      angles: isSet(object.angles) ? CMsgQAngle.fromJSON(object.angles) : undefined,
      scale: isSet(object.scale) ? Number(object.scale) : 0,
      type: isSet(object.type) ? Number(object.type) : 0,
    };
  },

  toJSON(message: CMsgTEMuzzleFlash): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? CMsgVector.toJSON(message.origin) : undefined);
    message.angles !== undefined && (obj.angles = message.angles ? CMsgQAngle.toJSON(message.angles) : undefined);
    message.scale !== undefined && (obj.scale = message.scale);
    message.type !== undefined && (obj.type = Math.round(message.type));
    return obj;
  },

  create(base?: DeepPartial<CMsgTEMuzzleFlash>): CMsgTEMuzzleFlash {
    return CMsgTEMuzzleFlash.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEMuzzleFlash>): CMsgTEMuzzleFlash {
    const message = createBaseCMsgTEMuzzleFlash();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? CMsgVector.fromPartial(object.origin)
      : undefined;
    message.angles = (object.angles !== undefined && object.angles !== null)
      ? CMsgQAngle.fromPartial(object.angles)
      : undefined;
    message.scale = object.scale ?? 0;
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseCMsgTEBloodStream(): CMsgTEBloodStream {
  return { origin: undefined, direction: undefined, color: 0, amount: 0 };
}

export const CMsgTEBloodStream = {
  encode(message: CMsgTEBloodStream, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.direction !== undefined) {
      CMsgVector.encode(message.direction, writer.uint32(18).fork()).ldelim();
    }
    if (message.color !== 0) {
      writer.uint32(29).fixed32(message.color);
    }
    if (message.amount !== 0) {
      writer.uint32(32).uint32(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEBloodStream {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEBloodStream();
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

          message.direction = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.color = reader.fixed32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.amount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTEBloodStream {
    return {
      origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
      direction: isSet(object.direction) ? CMsgVector.fromJSON(object.direction) : undefined,
      color: isSet(object.color) ? Number(object.color) : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: CMsgTEBloodStream): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? CMsgVector.toJSON(message.origin) : undefined);
    message.direction !== undefined &&
      (obj.direction = message.direction ? CMsgVector.toJSON(message.direction) : undefined);
    message.color !== undefined && (obj.color = Math.round(message.color));
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  create(base?: DeepPartial<CMsgTEBloodStream>): CMsgTEBloodStream {
    return CMsgTEBloodStream.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEBloodStream>): CMsgTEBloodStream {
    const message = createBaseCMsgTEBloodStream();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? CMsgVector.fromPartial(object.origin)
      : undefined;
    message.direction = (object.direction !== undefined && object.direction !== null)
      ? CMsgVector.fromPartial(object.direction)
      : undefined;
    message.color = object.color ?? 0;
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseCMsgTEExplosion(): CMsgTEExplosion {
  return {
    origin: undefined,
    framerate: 0,
    flags: 0,
    normal: undefined,
    materialtype: 0,
    radius: 0,
    magnitude: 0,
    scale: 0,
    affectRagdolls: false,
    effectName: "",
    explosionType: 0,
  };
}

export const CMsgTEExplosion = {
  encode(message: CMsgTEExplosion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.framerate !== 0) {
      writer.uint32(16).uint32(message.framerate);
    }
    if (message.flags !== 0) {
      writer.uint32(24).uint32(message.flags);
    }
    if (message.normal !== undefined) {
      CMsgVector.encode(message.normal, writer.uint32(34).fork()).ldelim();
    }
    if (message.materialtype !== 0) {
      writer.uint32(40).uint32(message.materialtype);
    }
    if (message.radius !== 0) {
      writer.uint32(48).uint32(message.radius);
    }
    if (message.magnitude !== 0) {
      writer.uint32(56).uint32(message.magnitude);
    }
    if (message.scale !== 0) {
      writer.uint32(69).float(message.scale);
    }
    if (message.affectRagdolls === true) {
      writer.uint32(72).bool(message.affectRagdolls);
    }
    if (message.effectName !== "") {
      writer.uint32(82).string(message.effectName);
    }
    if (message.explosionType !== 0) {
      writer.uint32(88).uint32(message.explosionType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEExplosion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEExplosion();
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

          message.framerate = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.normal = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.materialtype = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.radius = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.magnitude = reader.uint32();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.scale = reader.float();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.affectRagdolls = reader.bool();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.effectName = reader.string();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.explosionType = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTEExplosion {
    return {
      origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
      framerate: isSet(object.framerate) ? Number(object.framerate) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      normal: isSet(object.normal) ? CMsgVector.fromJSON(object.normal) : undefined,
      materialtype: isSet(object.materialtype) ? Number(object.materialtype) : 0,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
      magnitude: isSet(object.magnitude) ? Number(object.magnitude) : 0,
      scale: isSet(object.scale) ? Number(object.scale) : 0,
      affectRagdolls: isSet(object.affectRagdolls) ? Boolean(object.affectRagdolls) : false,
      effectName: isSet(object.effectName) ? String(object.effectName) : "",
      explosionType: isSet(object.explosionType) ? Number(object.explosionType) : 0,
    };
  },

  toJSON(message: CMsgTEExplosion): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? CMsgVector.toJSON(message.origin) : undefined);
    message.framerate !== undefined && (obj.framerate = Math.round(message.framerate));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.normal !== undefined && (obj.normal = message.normal ? CMsgVector.toJSON(message.normal) : undefined);
    message.materialtype !== undefined && (obj.materialtype = Math.round(message.materialtype));
    message.radius !== undefined && (obj.radius = Math.round(message.radius));
    message.magnitude !== undefined && (obj.magnitude = Math.round(message.magnitude));
    message.scale !== undefined && (obj.scale = message.scale);
    message.affectRagdolls !== undefined && (obj.affectRagdolls = message.affectRagdolls);
    message.effectName !== undefined && (obj.effectName = message.effectName);
    message.explosionType !== undefined && (obj.explosionType = Math.round(message.explosionType));
    return obj;
  },

  create(base?: DeepPartial<CMsgTEExplosion>): CMsgTEExplosion {
    return CMsgTEExplosion.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEExplosion>): CMsgTEExplosion {
    const message = createBaseCMsgTEExplosion();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? CMsgVector.fromPartial(object.origin)
      : undefined;
    message.framerate = object.framerate ?? 0;
    message.flags = object.flags ?? 0;
    message.normal = (object.normal !== undefined && object.normal !== null)
      ? CMsgVector.fromPartial(object.normal)
      : undefined;
    message.materialtype = object.materialtype ?? 0;
    message.radius = object.radius ?? 0;
    message.magnitude = object.magnitude ?? 0;
    message.scale = object.scale ?? 0;
    message.affectRagdolls = object.affectRagdolls ?? false;
    message.effectName = object.effectName ?? "";
    message.explosionType = object.explosionType ?? 0;
    return message;
  },
};

function createBaseCMsgTEDust(): CMsgTEDust {
  return { origin: undefined, size: 0, speed: 0, direction: undefined };
}

export const CMsgTEDust = {
  encode(message: CMsgTEDust, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.size !== 0) {
      writer.uint32(21).float(message.size);
    }
    if (message.speed !== 0) {
      writer.uint32(29).float(message.speed);
    }
    if (message.direction !== undefined) {
      CMsgVector.encode(message.direction, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEDust {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEDust();
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
          if (tag != 21) {
            break;
          }

          message.size = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.speed = reader.float();
          continue;
        case 4:
          if (tag != 34) {
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

  fromJSON(object: any): CMsgTEDust {
    return {
      origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
      size: isSet(object.size) ? Number(object.size) : 0,
      speed: isSet(object.speed) ? Number(object.speed) : 0,
      direction: isSet(object.direction) ? CMsgVector.fromJSON(object.direction) : undefined,
    };
  },

  toJSON(message: CMsgTEDust): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? CMsgVector.toJSON(message.origin) : undefined);
    message.size !== undefined && (obj.size = message.size);
    message.speed !== undefined && (obj.speed = message.speed);
    message.direction !== undefined &&
      (obj.direction = message.direction ? CMsgVector.toJSON(message.direction) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgTEDust>): CMsgTEDust {
    return CMsgTEDust.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEDust>): CMsgTEDust {
    const message = createBaseCMsgTEDust();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? CMsgVector.fromPartial(object.origin)
      : undefined;
    message.size = object.size ?? 0;
    message.speed = object.speed ?? 0;
    message.direction = (object.direction !== undefined && object.direction !== null)
      ? CMsgVector.fromPartial(object.direction)
      : undefined;
    return message;
  },
};

function createBaseCMsgTELargeFunnel(): CMsgTELargeFunnel {
  return { origin: undefined, reversed: 0 };
}

export const CMsgTELargeFunnel = {
  encode(message: CMsgTELargeFunnel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.reversed !== 0) {
      writer.uint32(16).uint32(message.reversed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTELargeFunnel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTELargeFunnel();
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

          message.reversed = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTELargeFunnel {
    return {
      origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
      reversed: isSet(object.reversed) ? Number(object.reversed) : 0,
    };
  },

  toJSON(message: CMsgTELargeFunnel): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? CMsgVector.toJSON(message.origin) : undefined);
    message.reversed !== undefined && (obj.reversed = Math.round(message.reversed));
    return obj;
  },

  create(base?: DeepPartial<CMsgTELargeFunnel>): CMsgTELargeFunnel {
    return CMsgTELargeFunnel.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTELargeFunnel>): CMsgTELargeFunnel {
    const message = createBaseCMsgTELargeFunnel();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? CMsgVector.fromPartial(object.origin)
      : undefined;
    message.reversed = object.reversed ?? 0;
    return message;
  },
};

function createBaseCMsgTESparks(): CMsgTESparks {
  return { origin: undefined, magnitude: 0, length: 0, direction: undefined };
}

export const CMsgTESparks = {
  encode(message: CMsgTESparks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.magnitude !== 0) {
      writer.uint32(16).uint32(message.magnitude);
    }
    if (message.length !== 0) {
      writer.uint32(24).uint32(message.length);
    }
    if (message.direction !== undefined) {
      CMsgVector.encode(message.direction, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTESparks {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTESparks();
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

          message.magnitude = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.length = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
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

  fromJSON(object: any): CMsgTESparks {
    return {
      origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
      magnitude: isSet(object.magnitude) ? Number(object.magnitude) : 0,
      length: isSet(object.length) ? Number(object.length) : 0,
      direction: isSet(object.direction) ? CMsgVector.fromJSON(object.direction) : undefined,
    };
  },

  toJSON(message: CMsgTESparks): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? CMsgVector.toJSON(message.origin) : undefined);
    message.magnitude !== undefined && (obj.magnitude = Math.round(message.magnitude));
    message.length !== undefined && (obj.length = Math.round(message.length));
    message.direction !== undefined &&
      (obj.direction = message.direction ? CMsgVector.toJSON(message.direction) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgTESparks>): CMsgTESparks {
    return CMsgTESparks.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTESparks>): CMsgTESparks {
    const message = createBaseCMsgTESparks();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? CMsgVector.fromPartial(object.origin)
      : undefined;
    message.magnitude = object.magnitude ?? 0;
    message.length = object.length ?? 0;
    message.direction = (object.direction !== undefined && object.direction !== null)
      ? CMsgVector.fromPartial(object.direction)
      : undefined;
    return message;
  },
};

function createBaseCMsgTEPhysicsProp(): CMsgTEPhysicsProp {
  return {
    origin: undefined,
    velocity: undefined,
    angles: undefined,
    skin: 0,
    flags: 0,
    effects: 0,
    color: 0,
    modelindex: "0",
    unusedBreakmodelsnottomake: 0,
    scale: 0,
  };
}

export const CMsgTEPhysicsProp = {
  encode(message: CMsgTEPhysicsProp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.velocity !== undefined) {
      CMsgVector.encode(message.velocity, writer.uint32(18).fork()).ldelim();
    }
    if (message.angles !== undefined) {
      CMsgQAngle.encode(message.angles, writer.uint32(26).fork()).ldelim();
    }
    if (message.skin !== 0) {
      writer.uint32(37).fixed32(message.skin);
    }
    if (message.flags !== 0) {
      writer.uint32(40).uint32(message.flags);
    }
    if (message.effects !== 0) {
      writer.uint32(48).uint32(message.effects);
    }
    if (message.color !== 0) {
      writer.uint32(61).fixed32(message.color);
    }
    if (message.modelindex !== "0") {
      writer.uint32(65).fixed64(message.modelindex);
    }
    if (message.unusedBreakmodelsnottomake !== 0) {
      writer.uint32(72).uint32(message.unusedBreakmodelsnottomake);
    }
    if (message.scale !== 0) {
      writer.uint32(85).float(message.scale);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEPhysicsProp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEPhysicsProp();
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

          message.velocity = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.angles = CMsgQAngle.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.skin = reader.fixed32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.effects = reader.uint32();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.color = reader.fixed32();
          continue;
        case 8:
          if (tag != 65) {
            break;
          }

          message.modelindex = longToString(reader.fixed64() as Long);
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.unusedBreakmodelsnottomake = reader.uint32();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.scale = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTEPhysicsProp {
    return {
      origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
      velocity: isSet(object.velocity) ? CMsgVector.fromJSON(object.velocity) : undefined,
      angles: isSet(object.angles) ? CMsgQAngle.fromJSON(object.angles) : undefined,
      skin: isSet(object.skin) ? Number(object.skin) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      effects: isSet(object.effects) ? Number(object.effects) : 0,
      color: isSet(object.color) ? Number(object.color) : 0,
      modelindex: isSet(object.modelindex) ? String(object.modelindex) : "0",
      unusedBreakmodelsnottomake: isSet(object.unusedBreakmodelsnottomake)
        ? Number(object.unusedBreakmodelsnottomake)
        : 0,
      scale: isSet(object.scale) ? Number(object.scale) : 0,
    };
  },

  toJSON(message: CMsgTEPhysicsProp): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? CMsgVector.toJSON(message.origin) : undefined);
    message.velocity !== undefined &&
      (obj.velocity = message.velocity ? CMsgVector.toJSON(message.velocity) : undefined);
    message.angles !== undefined && (obj.angles = message.angles ? CMsgQAngle.toJSON(message.angles) : undefined);
    message.skin !== undefined && (obj.skin = Math.round(message.skin));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.effects !== undefined && (obj.effects = Math.round(message.effects));
    message.color !== undefined && (obj.color = Math.round(message.color));
    message.modelindex !== undefined && (obj.modelindex = message.modelindex);
    message.unusedBreakmodelsnottomake !== undefined &&
      (obj.unusedBreakmodelsnottomake = Math.round(message.unusedBreakmodelsnottomake));
    message.scale !== undefined && (obj.scale = message.scale);
    return obj;
  },

  create(base?: DeepPartial<CMsgTEPhysicsProp>): CMsgTEPhysicsProp {
    return CMsgTEPhysicsProp.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEPhysicsProp>): CMsgTEPhysicsProp {
    const message = createBaseCMsgTEPhysicsProp();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? CMsgVector.fromPartial(object.origin)
      : undefined;
    message.velocity = (object.velocity !== undefined && object.velocity !== null)
      ? CMsgVector.fromPartial(object.velocity)
      : undefined;
    message.angles = (object.angles !== undefined && object.angles !== null)
      ? CMsgQAngle.fromPartial(object.angles)
      : undefined;
    message.skin = object.skin ?? 0;
    message.flags = object.flags ?? 0;
    message.effects = object.effects ?? 0;
    message.color = object.color ?? 0;
    message.modelindex = object.modelindex ?? "0";
    message.unusedBreakmodelsnottomake = object.unusedBreakmodelsnottomake ?? 0;
    message.scale = object.scale ?? 0;
    return message;
  },
};

function createBaseCMsgTEPlayerDecal(): CMsgTEPlayerDecal {
  return { origin: undefined, player: 0, entity: 0 };
}

export const CMsgTEPlayerDecal = {
  encode(message: CMsgTEPlayerDecal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.player !== 0) {
      writer.uint32(16).int32(message.player);
    }
    if (message.entity !== 0) {
      writer.uint32(24).int32(message.entity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEPlayerDecal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEPlayerDecal();
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

          message.player = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.entity = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTEPlayerDecal {
    return {
      origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
      player: isSet(object.player) ? Number(object.player) : 0,
      entity: isSet(object.entity) ? Number(object.entity) : 0,
    };
  },

  toJSON(message: CMsgTEPlayerDecal): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? CMsgVector.toJSON(message.origin) : undefined);
    message.player !== undefined && (obj.player = Math.round(message.player));
    message.entity !== undefined && (obj.entity = Math.round(message.entity));
    return obj;
  },

  create(base?: DeepPartial<CMsgTEPlayerDecal>): CMsgTEPlayerDecal {
    return CMsgTEPlayerDecal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEPlayerDecal>): CMsgTEPlayerDecal {
    const message = createBaseCMsgTEPlayerDecal();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? CMsgVector.fromPartial(object.origin)
      : undefined;
    message.player = object.player ?? 0;
    message.entity = object.entity ?? 0;
    return message;
  },
};

function createBaseCMsgTEProjectedDecal(): CMsgTEProjectedDecal {
  return { origin: undefined, angles: undefined, index: 0, distance: 0 };
}

export const CMsgTEProjectedDecal = {
  encode(message: CMsgTEProjectedDecal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.angles !== undefined) {
      CMsgQAngle.encode(message.angles, writer.uint32(18).fork()).ldelim();
    }
    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }
    if (message.distance !== 0) {
      writer.uint32(37).float(message.distance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEProjectedDecal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEProjectedDecal();
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

          message.angles = CMsgQAngle.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 4:
          if (tag != 37) {
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

  fromJSON(object: any): CMsgTEProjectedDecal {
    return {
      origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
      angles: isSet(object.angles) ? CMsgQAngle.fromJSON(object.angles) : undefined,
      index: isSet(object.index) ? Number(object.index) : 0,
      distance: isSet(object.distance) ? Number(object.distance) : 0,
    };
  },

  toJSON(message: CMsgTEProjectedDecal): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? CMsgVector.toJSON(message.origin) : undefined);
    message.angles !== undefined && (obj.angles = message.angles ? CMsgQAngle.toJSON(message.angles) : undefined);
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.distance !== undefined && (obj.distance = message.distance);
    return obj;
  },

  create(base?: DeepPartial<CMsgTEProjectedDecal>): CMsgTEProjectedDecal {
    return CMsgTEProjectedDecal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEProjectedDecal>): CMsgTEProjectedDecal {
    const message = createBaseCMsgTEProjectedDecal();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? CMsgVector.fromPartial(object.origin)
      : undefined;
    message.angles = (object.angles !== undefined && object.angles !== null)
      ? CMsgQAngle.fromPartial(object.angles)
      : undefined;
    message.index = object.index ?? 0;
    message.distance = object.distance ?? 0;
    return message;
  },
};

function createBaseCMsgTESmoke(): CMsgTESmoke {
  return { origin: undefined, scale: 0 };
}

export const CMsgTESmoke = {
  encode(message: CMsgTESmoke, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.scale !== 0) {
      writer.uint32(21).float(message.scale);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTESmoke {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTESmoke();
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
          if (tag != 21) {
            break;
          }

          message.scale = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTESmoke {
    return {
      origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
      scale: isSet(object.scale) ? Number(object.scale) : 0,
    };
  },

  toJSON(message: CMsgTESmoke): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? CMsgVector.toJSON(message.origin) : undefined);
    message.scale !== undefined && (obj.scale = message.scale);
    return obj;
  },

  create(base?: DeepPartial<CMsgTESmoke>): CMsgTESmoke {
    return CMsgTESmoke.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTESmoke>): CMsgTESmoke {
    const message = createBaseCMsgTESmoke();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? CMsgVector.fromPartial(object.origin)
      : undefined;
    message.scale = object.scale ?? 0;
    return message;
  },
};

function createBaseCMsgTEWorldDecal(): CMsgTEWorldDecal {
  return { origin: undefined, normal: undefined, index: 0 };
}

export const CMsgTEWorldDecal = {
  encode(message: CMsgTEWorldDecal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.normal !== undefined) {
      CMsgVector.encode(message.normal, writer.uint32(18).fork()).ldelim();
    }
    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTEWorldDecal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTEWorldDecal();
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

          message.normal = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.index = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTEWorldDecal {
    return {
      origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
      normal: isSet(object.normal) ? CMsgVector.fromJSON(object.normal) : undefined,
      index: isSet(object.index) ? Number(object.index) : 0,
    };
  },

  toJSON(message: CMsgTEWorldDecal): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? CMsgVector.toJSON(message.origin) : undefined);
    message.normal !== undefined && (obj.normal = message.normal ? CMsgVector.toJSON(message.normal) : undefined);
    message.index !== undefined && (obj.index = Math.round(message.index));
    return obj;
  },

  create(base?: DeepPartial<CMsgTEWorldDecal>): CMsgTEWorldDecal {
    return CMsgTEWorldDecal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTEWorldDecal>): CMsgTEWorldDecal {
    const message = createBaseCMsgTEWorldDecal();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? CMsgVector.fromPartial(object.origin)
      : undefined;
    message.normal = (object.normal !== undefined && object.normal !== null)
      ? CMsgVector.fromPartial(object.normal)
      : undefined;
    message.index = object.index ?? 0;
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
