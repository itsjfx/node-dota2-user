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
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
