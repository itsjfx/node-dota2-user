/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface CCloudGetUploadServerInfoRequest {
  appid: number;
}

export interface CCloudGetUploadServerInfoResponse {
  serverUrl: string;
}

export interface CCloudGetFileDetailsRequest {
  ugcid: string;
  appid: number;
}

export interface CCloudUserFile {
  appid: number;
  ugcid: string;
  filename: string;
  timestamp: string;
  fileSize: number;
  url: string;
  steamidCreator: string;
}

export interface CCloudGetFileDetailsResponse {
  details: CCloudUserFile | undefined;
}

export interface CCloudEnumerateUserFilesRequest {
  appid: number;
  extendedDetails: boolean;
  count: number;
  startIndex: number;
}

export interface CCloudEnumerateUserFilesResponse {
  files: CCloudUserFile[];
  totalFiles: number;
}

export interface CCloudDeleteRequest {
  filename: string;
  appid: number;
}

export interface CCloudDeleteResponse {
}

function createBaseCCloudGetUploadServerInfoRequest(): CCloudGetUploadServerInfoRequest {
  return { appid: 0 };
}

export const CCloudGetUploadServerInfoRequest = {
  encode(message: CCloudGetUploadServerInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudGetUploadServerInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudGetUploadServerInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.appid = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCloudGetUploadServerInfoRequest {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CCloudGetUploadServerInfoRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },
};

function createBaseCCloudGetUploadServerInfoResponse(): CCloudGetUploadServerInfoResponse {
  return { serverUrl: "" };
}

export const CCloudGetUploadServerInfoResponse = {
  encode(message: CCloudGetUploadServerInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverUrl !== "") {
      writer.uint32(10).string(message.serverUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudGetUploadServerInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudGetUploadServerInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.serverUrl = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCloudGetUploadServerInfoResponse {
    return { serverUrl: isSet(object.serverUrl) ? String(object.serverUrl) : "" };
  },

  toJSON(message: CCloudGetUploadServerInfoResponse): unknown {
    const obj: any = {};
    message.serverUrl !== undefined && (obj.serverUrl = message.serverUrl);
    return obj;
  },
};

function createBaseCCloudGetFileDetailsRequest(): CCloudGetFileDetailsRequest {
  return { ugcid: "0", appid: 0 };
}

export const CCloudGetFileDetailsRequest = {
  encode(message: CCloudGetFileDetailsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ugcid !== "0") {
      writer.uint32(8).uint64(message.ugcid);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudGetFileDetailsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudGetFileDetailsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ugcid = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.appid = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCloudGetFileDetailsRequest {
    return {
      ugcid: isSet(object.ugcid) ? String(object.ugcid) : "0",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
    };
  },

  toJSON(message: CCloudGetFileDetailsRequest): unknown {
    const obj: any = {};
    message.ugcid !== undefined && (obj.ugcid = message.ugcid);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },
};

function createBaseCCloudUserFile(): CCloudUserFile {
  return { appid: 0, ugcid: "0", filename: "", timestamp: "0", fileSize: 0, url: "", steamidCreator: "0" };
}

export const CCloudUserFile = {
  encode(message: CCloudUserFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.ugcid !== "0") {
      writer.uint32(16).uint64(message.ugcid);
    }
    if (message.filename !== "") {
      writer.uint32(26).string(message.filename);
    }
    if (message.timestamp !== "0") {
      writer.uint32(32).uint64(message.timestamp);
    }
    if (message.fileSize !== 0) {
      writer.uint32(40).uint32(message.fileSize);
    }
    if (message.url !== "") {
      writer.uint32(50).string(message.url);
    }
    if (message.steamidCreator !== "0") {
      writer.uint32(57).fixed64(message.steamidCreator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudUserFile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudUserFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.appid = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.ugcid = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.filename = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.timestamp = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.fileSize = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.url = reader.string();
          continue;
        case 7:
          if (tag != 57) {
            break;
          }

          message.steamidCreator = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCloudUserFile {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      ugcid: isSet(object.ugcid) ? String(object.ugcid) : "0",
      filename: isSet(object.filename) ? String(object.filename) : "",
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
      fileSize: isSet(object.fileSize) ? Number(object.fileSize) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      steamidCreator: isSet(object.steamidCreator) ? String(object.steamidCreator) : "0",
    };
  },

  toJSON(message: CCloudUserFile): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.ugcid !== undefined && (obj.ugcid = message.ugcid);
    message.filename !== undefined && (obj.filename = message.filename);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.fileSize !== undefined && (obj.fileSize = Math.round(message.fileSize));
    message.url !== undefined && (obj.url = message.url);
    message.steamidCreator !== undefined && (obj.steamidCreator = message.steamidCreator);
    return obj;
  },
};

function createBaseCCloudGetFileDetailsResponse(): CCloudGetFileDetailsResponse {
  return { details: undefined };
}

export const CCloudGetFileDetailsResponse = {
  encode(message: CCloudGetFileDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      CCloudUserFile.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudGetFileDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudGetFileDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.details = CCloudUserFile.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCloudGetFileDetailsResponse {
    return { details: isSet(object.details) ? CCloudUserFile.fromJSON(object.details) : undefined };
  },

  toJSON(message: CCloudGetFileDetailsResponse): unknown {
    const obj: any = {};
    message.details !== undefined &&
      (obj.details = message.details ? CCloudUserFile.toJSON(message.details) : undefined);
    return obj;
  },
};

function createBaseCCloudEnumerateUserFilesRequest(): CCloudEnumerateUserFilesRequest {
  return { appid: 0, extendedDetails: false, count: 0, startIndex: 0 };
}

export const CCloudEnumerateUserFilesRequest = {
  encode(message: CCloudEnumerateUserFilesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.extendedDetails === true) {
      writer.uint32(16).bool(message.extendedDetails);
    }
    if (message.count !== 0) {
      writer.uint32(24).uint32(message.count);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).uint32(message.startIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudEnumerateUserFilesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudEnumerateUserFilesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.appid = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.extendedDetails = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.count = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.startIndex = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCloudEnumerateUserFilesRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      extendedDetails: isSet(object.extendedDetails) ? Boolean(object.extendedDetails) : false,
      count: isSet(object.count) ? Number(object.count) : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
    };
  },

  toJSON(message: CCloudEnumerateUserFilesRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.extendedDetails !== undefined && (obj.extendedDetails = message.extendedDetails);
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.startIndex !== undefined && (obj.startIndex = Math.round(message.startIndex));
    return obj;
  },
};

function createBaseCCloudEnumerateUserFilesResponse(): CCloudEnumerateUserFilesResponse {
  return { files: [], totalFiles: 0 };
}

export const CCloudEnumerateUserFilesResponse = {
  encode(message: CCloudEnumerateUserFilesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.files) {
      CCloudUserFile.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalFiles !== 0) {
      writer.uint32(16).uint32(message.totalFiles);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudEnumerateUserFilesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudEnumerateUserFilesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.files.push(CCloudUserFile.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.totalFiles = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCloudEnumerateUserFilesResponse {
    return {
      files: Array.isArray(object?.files) ? object.files.map((e: any) => CCloudUserFile.fromJSON(e)) : [],
      totalFiles: isSet(object.totalFiles) ? Number(object.totalFiles) : 0,
    };
  },

  toJSON(message: CCloudEnumerateUserFilesResponse): unknown {
    const obj: any = {};
    if (message.files) {
      obj.files = message.files.map((e) => e ? CCloudUserFile.toJSON(e) : undefined);
    } else {
      obj.files = [];
    }
    message.totalFiles !== undefined && (obj.totalFiles = Math.round(message.totalFiles));
    return obj;
  },
};

function createBaseCCloudDeleteRequest(): CCloudDeleteRequest {
  return { filename: "", appid: 0 };
}

export const CCloudDeleteRequest = {
  encode(message: CCloudDeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filename !== "") {
      writer.uint32(10).string(message.filename);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudDeleteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudDeleteRequest();
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

          message.appid = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCloudDeleteRequest {
    return {
      filename: isSet(object.filename) ? String(object.filename) : "",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
    };
  },

  toJSON(message: CCloudDeleteRequest): unknown {
    const obj: any = {};
    message.filename !== undefined && (obj.filename = message.filename);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },
};

function createBaseCCloudDeleteResponse(): CCloudDeleteResponse {
  return {};
}

export const CCloudDeleteResponse = {
  encode(_: CCloudDeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudDeleteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudDeleteResponse();
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

  fromJSON(_: any): CCloudDeleteResponse {
    return {};
  },

  toJSON(_: CCloudDeleteResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

export interface Cloud {
  GetUploadServerInfo(request: CCloudGetUploadServerInfoRequest): Promise<CCloudGetUploadServerInfoResponse>;
  GetFileDetails(request: CCloudGetFileDetailsRequest): Promise<CCloudGetFileDetailsResponse>;
  EnumerateUserFiles(request: CCloudEnumerateUserFilesRequest): Promise<CCloudEnumerateUserFilesResponse>;
  Delete(request: CCloudDeleteRequest): Promise<CCloudDeleteResponse>;
}

export class CloudClientImpl implements Cloud {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Cloud";
    this.rpc = rpc;
    this.GetUploadServerInfo = this.GetUploadServerInfo.bind(this);
    this.GetFileDetails = this.GetFileDetails.bind(this);
    this.EnumerateUserFiles = this.EnumerateUserFiles.bind(this);
    this.Delete = this.Delete.bind(this);
  }
  GetUploadServerInfo(request: CCloudGetUploadServerInfoRequest): Promise<CCloudGetUploadServerInfoResponse> {
    const data = CCloudGetUploadServerInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetUploadServerInfo", data);
    return promise.then((data) => CCloudGetUploadServerInfoResponse.decode(_m0.Reader.create(data)));
  }

  GetFileDetails(request: CCloudGetFileDetailsRequest): Promise<CCloudGetFileDetailsResponse> {
    const data = CCloudGetFileDetailsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetFileDetails", data);
    return promise.then((data) => CCloudGetFileDetailsResponse.decode(_m0.Reader.create(data)));
  }

  EnumerateUserFiles(request: CCloudEnumerateUserFilesRequest): Promise<CCloudEnumerateUserFilesResponse> {
    const data = CCloudEnumerateUserFilesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EnumerateUserFiles", data);
    return promise.then((data) => CCloudEnumerateUserFilesResponse.decode(_m0.Reader.create(data)));
  }

  Delete(request: CCloudDeleteRequest): Promise<CCloudDeleteResponse> {
    const data = CCloudDeleteRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Delete", data);
    return promise.then((data) => CCloudDeleteResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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
