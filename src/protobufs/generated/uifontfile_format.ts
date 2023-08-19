/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface CUIFontFilePB {
  fontFileName: string;
  opentypeFontData: Buffer;
}

export interface CUIFontFilePackagePB {
  packageVersion: number;
  encryptedFontFiles: CUIFontFilePackagePB_CUIEncryptedFontFilePB[];
}

export interface CUIFontFilePackagePB_CUIEncryptedFontFilePB {
  encryptedContents: Buffer;
}

function createBaseCUIFontFilePB(): CUIFontFilePB {
  return { fontFileName: "", opentypeFontData: Buffer.alloc(0) };
}

export const CUIFontFilePB = {
  encode(message: CUIFontFilePB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fontFileName !== "") {
      writer.uint32(10).string(message.fontFileName);
    }
    if (message.opentypeFontData.length !== 0) {
      writer.uint32(18).bytes(message.opentypeFontData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUIFontFilePB {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUIFontFilePB();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.fontFileName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.opentypeFontData = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CUIFontFilePB {
    return {
      fontFileName: isSet(object.fontFileName) ? String(object.fontFileName) : "",
      opentypeFontData: isSet(object.opentypeFontData)
        ? Buffer.from(bytesFromBase64(object.opentypeFontData))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: CUIFontFilePB): unknown {
    const obj: any = {};
    message.fontFileName !== undefined && (obj.fontFileName = message.fontFileName);
    message.opentypeFontData !== undefined &&
      (obj.opentypeFontData = base64FromBytes(
        message.opentypeFontData !== undefined ? message.opentypeFontData : Buffer.alloc(0),
      ));
    return obj;
  },

  create(base?: DeepPartial<CUIFontFilePB>): CUIFontFilePB {
    return CUIFontFilePB.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CUIFontFilePB>): CUIFontFilePB {
    const message = createBaseCUIFontFilePB();
    message.fontFileName = object.fontFileName ?? "";
    message.opentypeFontData = object.opentypeFontData ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCUIFontFilePackagePB(): CUIFontFilePackagePB {
  return { packageVersion: 0, encryptedFontFiles: [] };
}

export const CUIFontFilePackagePB = {
  encode(message: CUIFontFilePackagePB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packageVersion !== 0) {
      writer.uint32(8).uint32(message.packageVersion);
    }
    for (const v of message.encryptedFontFiles) {
      CUIFontFilePackagePB_CUIEncryptedFontFilePB.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUIFontFilePackagePB {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUIFontFilePackagePB();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.packageVersion = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.encryptedFontFiles.push(CUIFontFilePackagePB_CUIEncryptedFontFilePB.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CUIFontFilePackagePB {
    return {
      packageVersion: isSet(object.packageVersion) ? Number(object.packageVersion) : 0,
      encryptedFontFiles: Array.isArray(object?.encryptedFontFiles)
        ? object.encryptedFontFiles.map((e: any) => CUIFontFilePackagePB_CUIEncryptedFontFilePB.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CUIFontFilePackagePB): unknown {
    const obj: any = {};
    message.packageVersion !== undefined && (obj.packageVersion = Math.round(message.packageVersion));
    if (message.encryptedFontFiles) {
      obj.encryptedFontFiles = message.encryptedFontFiles.map((e) =>
        e ? CUIFontFilePackagePB_CUIEncryptedFontFilePB.toJSON(e) : undefined
      );
    } else {
      obj.encryptedFontFiles = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CUIFontFilePackagePB>): CUIFontFilePackagePB {
    return CUIFontFilePackagePB.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CUIFontFilePackagePB>): CUIFontFilePackagePB {
    const message = createBaseCUIFontFilePackagePB();
    message.packageVersion = object.packageVersion ?? 0;
    message.encryptedFontFiles =
      object.encryptedFontFiles?.map((e) => CUIFontFilePackagePB_CUIEncryptedFontFilePB.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCUIFontFilePackagePB_CUIEncryptedFontFilePB(): CUIFontFilePackagePB_CUIEncryptedFontFilePB {
  return { encryptedContents: Buffer.alloc(0) };
}

export const CUIFontFilePackagePB_CUIEncryptedFontFilePB = {
  encode(message: CUIFontFilePackagePB_CUIEncryptedFontFilePB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encryptedContents.length !== 0) {
      writer.uint32(10).bytes(message.encryptedContents);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUIFontFilePackagePB_CUIEncryptedFontFilePB {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUIFontFilePackagePB_CUIEncryptedFontFilePB();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.encryptedContents = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CUIFontFilePackagePB_CUIEncryptedFontFilePB {
    return {
      encryptedContents: isSet(object.encryptedContents)
        ? Buffer.from(bytesFromBase64(object.encryptedContents))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: CUIFontFilePackagePB_CUIEncryptedFontFilePB): unknown {
    const obj: any = {};
    message.encryptedContents !== undefined &&
      (obj.encryptedContents = base64FromBytes(
        message.encryptedContents !== undefined ? message.encryptedContents : Buffer.alloc(0),
      ));
    return obj;
  },

  create(base?: DeepPartial<CUIFontFilePackagePB_CUIEncryptedFontFilePB>): CUIFontFilePackagePB_CUIEncryptedFontFilePB {
    return CUIFontFilePackagePB_CUIEncryptedFontFilePB.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CUIFontFilePackagePB_CUIEncryptedFontFilePB>,
  ): CUIFontFilePackagePB_CUIEncryptedFontFilePB {
    const message = createBaseCUIFontFilePackagePB_CUIEncryptedFontFilePB();
    message.encryptedContents = object.encryptedContents ?? Buffer.alloc(0);
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
