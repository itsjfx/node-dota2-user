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
};
