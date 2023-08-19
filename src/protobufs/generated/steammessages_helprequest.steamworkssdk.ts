/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface CHelpRequestLogsUploadUserApplicationLogRequest {
  appid: number;
  logType: string;
  versionString: string;
  logContents: string;
}

export interface CHelpRequestLogsUploadUserApplicationLogResponse {
  id: string;
}

function createBaseCHelpRequestLogsUploadUserApplicationLogRequest(): CHelpRequestLogsUploadUserApplicationLogRequest {
  return { appid: 0, logType: "", versionString: "", logContents: "" };
}

export const CHelpRequestLogsUploadUserApplicationLogRequest = {
  encode(
    message: CHelpRequestLogsUploadUserApplicationLogRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.logType !== "") {
      writer.uint32(18).string(message.logType);
    }
    if (message.versionString !== "") {
      writer.uint32(26).string(message.versionString);
    }
    if (message.logContents !== "") {
      writer.uint32(34).string(message.logContents);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHelpRequestLogsUploadUserApplicationLogRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHelpRequestLogsUploadUserApplicationLogRequest();
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
          if (tag != 18) {
            break;
          }

          message.logType = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.versionString = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.logContents = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CHelpRequestLogsUploadUserApplicationLogRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      logType: isSet(object.logType) ? String(object.logType) : "",
      versionString: isSet(object.versionString) ? String(object.versionString) : "",
      logContents: isSet(object.logContents) ? String(object.logContents) : "",
    };
  },

  toJSON(message: CHelpRequestLogsUploadUserApplicationLogRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.logType !== undefined && (obj.logType = message.logType);
    message.versionString !== undefined && (obj.versionString = message.versionString);
    message.logContents !== undefined && (obj.logContents = message.logContents);
    return obj;
  },

  create(
    base?: DeepPartial<CHelpRequestLogsUploadUserApplicationLogRequest>,
  ): CHelpRequestLogsUploadUserApplicationLogRequest {
    return CHelpRequestLogsUploadUserApplicationLogRequest.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CHelpRequestLogsUploadUserApplicationLogRequest>,
  ): CHelpRequestLogsUploadUserApplicationLogRequest {
    const message = createBaseCHelpRequestLogsUploadUserApplicationLogRequest();
    message.appid = object.appid ?? 0;
    message.logType = object.logType ?? "";
    message.versionString = object.versionString ?? "";
    message.logContents = object.logContents ?? "";
    return message;
  },
};

function createBaseCHelpRequestLogsUploadUserApplicationLogResponse(): CHelpRequestLogsUploadUserApplicationLogResponse {
  return { id: "0" };
}

export const CHelpRequestLogsUploadUserApplicationLogResponse = {
  encode(
    message: CHelpRequestLogsUploadUserApplicationLogResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHelpRequestLogsUploadUserApplicationLogResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHelpRequestLogsUploadUserApplicationLogResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CHelpRequestLogsUploadUserApplicationLogResponse {
    return { id: isSet(object.id) ? String(object.id) : "0" };
  },

  toJSON(message: CHelpRequestLogsUploadUserApplicationLogResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(
    base?: DeepPartial<CHelpRequestLogsUploadUserApplicationLogResponse>,
  ): CHelpRequestLogsUploadUserApplicationLogResponse {
    return CHelpRequestLogsUploadUserApplicationLogResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CHelpRequestLogsUploadUserApplicationLogResponse>,
  ): CHelpRequestLogsUploadUserApplicationLogResponse {
    const message = createBaseCHelpRequestLogsUploadUserApplicationLogResponse();
    message.id = object.id ?? "0";
    return message;
  },
};

export interface HelpRequestLogs {
  UploadUserApplicationLog(
    request: CHelpRequestLogsUploadUserApplicationLogRequest,
  ): Promise<CHelpRequestLogsUploadUserApplicationLogResponse>;
}

export class HelpRequestLogsClientImpl implements HelpRequestLogs {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "HelpRequestLogs";
    this.rpc = rpc;
    this.UploadUserApplicationLog = this.UploadUserApplicationLog.bind(this);
  }
  UploadUserApplicationLog(
    request: CHelpRequestLogsUploadUserApplicationLogRequest,
  ): Promise<CHelpRequestLogsUploadUserApplicationLogResponse> {
    const data = CHelpRequestLogsUploadUserApplicationLogRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UploadUserApplicationLog", data);
    return promise.then((data) => CHelpRequestLogsUploadUserApplicationLogResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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
