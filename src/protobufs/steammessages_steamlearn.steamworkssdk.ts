/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export enum ESteamLearnDataType {
  STEAMLEARN_DATATYPE_INVALID = 0,
  STEAMLEARN_DATATYPE_INT32 = 1,
  STEAMLEARN_DATATYPE_FLOAT32 = 2,
  STEAMLEARN_DATATYPE_BOOL = 3,
  STEAMLEARN_DATATYPE_STRING = 4,
  STEAMLEARN_DATATYPE_OBJECT = 5,
}

export enum ESteammLearnRegisterDataSourceResult {
  STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR = 0,
  STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_SUCCESS_CREATED = 1,
  STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_SUCCESS_FOUND = 2,
  STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_GENERIC = 3,
  STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_INVALID_NAME = 4,
  STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_INVALID_VERSION = 5,
  STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_DATA_CHANGED = 6,
  STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_DATA_INVALID = 7,
  STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_FORBIDDEN = 8,
  STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_INVALID_TIMESTAMP = 9,
  STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_DISABLED = 10,
}

export enum ESteamLearnCacheDataResult {
  STEAMLEARN_CACHE_DATA_ERROR = 0,
  STEAMLEARN_CACHE_DATA_SUCCESS = 1,
  STEAMLEARN_CACHE_DATA_ERROR_UNKNOWN_DATA_SOURCE = 2,
  STEAMLEARN_CACHE_DATA_ERROR_UNCACHED_DATA_SOURCE = 3,
  STEAMLEARN_CACHE_DATA_ERROR_INVALID_KEYS = 4,
  STEAMLEARN_CACHE_DATA_ERROR_FORBIDDEN = 5,
  STEAMLEARN_CACHE_DATA_ERROR_INVALID_TIMESTAMP = 6,
  STEAMLEARN_CACHE_DATA_DISABLED = 7,
}

export enum ESteamLearnSnapshotProjectResult {
  STEAMLEARN_SNAPSHOT_PROJECT_ERROR = 0,
  STEAMLEARN_SNAPSHOT_PROJECT_SUCCESS_STORED = 1,
  STEAMLEARN_SNAPSHOT_PROJECT_SUCCESS_QUEUED = 2,
  STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_PROJECT_ID = 3,
  STEAMLEARN_SNAPSHOT_PROJECT_ERROR_UNKNOWN_DATA_SOURCE = 4,
  STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_DATA_SOURCE_KEY = 5,
  STEAMLEARN_SNAPSHOT_PROJECT_ERROR_MISSING_CACHE_DURATION = 6,
  STEAMLEARN_SNAPSHOT_PROJECT_ERROR_NO_PUBLISHED_CONFIG = 7,
  STEAMLEARN_SNAPSHOT_PROJECT_ERROR_FORBIDDEN = 8,
  STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_TIMESTAMP = 9,
  STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INTERNAL_DATA_SOURCE_ERROR = 10,
  STEAMLEARN_SNAPSHOT_PROJECT_DISABLED = 11,
  STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_PUBLISHED_VERSION = 12,
}

export enum ESteamLearnGetHMACKeysResult {
  STEAMLEARN_GET_HMAC_KEYS_SUCCESS = 0,
}

export enum ESteamLearnInferenceResult {
  STEAMLEARN_INFERENCE_ERROR = 0,
  STEAMLEARN_INFERENCE_SUCCESS = 1,
  STEAMLEARN_INFERENCE_ERROR_INVALID_PROJECT_ID = 2,
  STEAMLEARN_INFERENCE_ERROR_MISSING_CACHED_SCHEMA_DATA = 3,
  STEAMLEARN_INFERENCE_ERROR_NO_PUBLISHED_CONFIG = 4,
  STEAMLEARN_INFERENCE_ERROR_FORBIDDEN = 5,
  STEAMLEARN_INFERENCE_ERROR_INVALID_TIMESTAMP = 6,
  STEAMLEARN_INFERENCE_ERROR_INVALID_PUBLISHED_VERSION = 7,
  STEAMLEARN_INFERENCE_ERROR_NO_FETCH_ID_FOUND = 8,
}

export interface CMsgSteamLearnDataSourceDescObject {
  elements: CMsgSteamLearnDataSourceDescElement[];
}

export interface CMsgSteamLearnDataSourceDescElement {
  name: string;
  dataType: ESteamLearnDataType;
  object: CMsgSteamLearnDataSourceDescObject | undefined;
  count: number;
}

export interface CMsgSteamLearnDataSource {
  id: number;
  name: string;
  version: number;
  sourceDescription: string;
  structure: CMsgSteamLearnDataSourceDescObject | undefined;
  structureCrc: number;
  cacheDurationSeconds: number;
}

export interface CMsgSteamLearnDataObject {
  elements: CMsgSteamLearnDataElement[];
}

export interface CMsgSteamLearnDataElement {
  name: string;
  dataInt32s: number[];
  dataFloats: number[];
  dataBools: boolean[];
  dataStrings: string[];
  dataObjects: CMsgSteamLearnDataObject[];
}

export interface CMsgSteamLearnData {
  dataSourceId: number;
  keys: string[];
  dataObject: CMsgSteamLearnDataObject | undefined;
}

export interface CMsgSteamLearnDataList {
  data: CMsgSteamLearnData[];
}

export interface CMsgSteamLearnAccessData {
  publisherId: number;
  timestamp: number;
  randomValue: string;
}

export interface CMsgSteamLearnRegisterDataSourceRequest {
  accessToken: string;
  accessData: CMsgSteamLearnAccessData | undefined;
  dataSource: CMsgSteamLearnDataSource | undefined;
}

export interface CMsgSteamLearnRegisterDataSourceResponse {
  result: ESteammLearnRegisterDataSourceResult;
  dataSource: CMsgSteamLearnDataSource | undefined;
}

export interface CMsgSteamLearnCacheDataRequest {
  accessToken: string;
  accessData: CMsgSteamLearnAccessData | undefined;
  data: CMsgSteamLearnData | undefined;
}

export interface CMsgSteamLearnCacheDataResponse {
  cacheDataResult: ESteamLearnCacheDataResult;
}

export interface CMsgSteamLearnSnapshotProjectRequest {
  accessToken: string;
  accessData: CMsgSteamLearnAccessData | undefined;
  projectId: number;
  publishedVersion: number;
  keys: string[];
  data: CMsgSteamLearnData[];
  pendingDataLimitSeconds: number;
}

export interface CMsgSteamLearnSnapshotProjectResponse {
  snapshotResult: ESteamLearnSnapshotProjectResult;
}

export interface CMsgSteamLearnBatchOperationRequest {
  cacheDataRequests: CMsgSteamLearnCacheDataRequest[];
  snapshotRequests: CMsgSteamLearnSnapshotProjectRequest[];
}

export interface CMsgSteamLearnBatchOperationResponse {
  cacheDataResponses: CMsgSteamLearnCacheDataResponse[];
  snapshotResponses: CMsgSteamLearnSnapshotProjectResponse[];
}

export interface CMsgSteamLearnHMACKeys {
  registerDataSourceKey: string;
  cacheDataKeys: CMsgSteamLearnHMACKeys_CacheDataKeys[];
  snapshotProjectKeys: CMsgSteamLearnHMACKeys_SnapshotProjectKeys[];
}

export interface CMsgSteamLearnHMACKeys_CacheDataKeys {
  dataSourceId: number;
  version: number;
  key: string;
}

export interface CMsgSteamLearnHMACKeys_SnapshotProjectKeys {
  projectId: number;
  publishedVersion: number;
  key: string;
}

export interface CMsgSteamLearnGetHMACKeysRequest {
  appid: number;
}

export interface CMsgSteamLearnGetHMACKeysResponse {
  result: ESteamLearnGetHMACKeysResult;
  keys: CMsgSteamLearnHMACKeys | undefined;
}

export interface CMsgSteamLearnInferenceRequest {
  accessToken: string;
  accessData: CMsgSteamLearnAccessData | undefined;
  projectId: number;
  publishedVersion: number;
  overrideTrainId: number;
  data: CMsgSteamLearnDataList | undefined;
  additionalData: number[];
}

export interface CMsgSteamLearnInferenceBackendResponse {
  outputs: CMsgSteamLearnInferenceBackendResponse_Output[];
}

export interface CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput {
  value: number;
}

export interface CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput {
  weight: number[];
  value: number[];
}

export interface CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput {
  weight: number[];
  value: number[];
}

export interface CMsgSteamLearnInferenceBackendResponse_Output {
  binaryCrossentropy?: CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput | undefined;
  categoricalCrossentropy?: CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput | undefined;
  multiBinaryCrossentropy?: CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput | undefined;
}

export interface CMsgSteamLearnInferenceResponse {
  inferenceResult: ESteamLearnInferenceResult;
  backendResponse: CMsgSteamLearnInferenceBackendResponse | undefined;
}

function createBaseCMsgSteamLearnDataSourceDescObject(): CMsgSteamLearnDataSourceDescObject {
  return { elements: [] };
}

export const CMsgSteamLearnDataSourceDescObject = {
  encode(message: CMsgSteamLearnDataSourceDescObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.elements) {
      CMsgSteamLearnDataSourceDescElement.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnDataSourceDescObject {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnDataSourceDescObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.elements.push(CMsgSteamLearnDataSourceDescElement.decode(reader, reader.uint32()));
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

function createBaseCMsgSteamLearnDataSourceDescElement(): CMsgSteamLearnDataSourceDescElement {
  return { name: "", dataType: 0, object: undefined, count: 0 };
}

export const CMsgSteamLearnDataSourceDescElement = {
  encode(message: CMsgSteamLearnDataSourceDescElement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.dataType !== 0) {
      writer.uint32(16).int32(message.dataType);
    }
    if (message.object !== undefined) {
      CMsgSteamLearnDataSourceDescObject.encode(message.object, writer.uint32(26).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(32).uint32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnDataSourceDescElement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnDataSourceDescElement();
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

          message.dataType = reader.int32() as any;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.object = CMsgSteamLearnDataSourceDescObject.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.count = reader.uint32();
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

function createBaseCMsgSteamLearnDataSource(): CMsgSteamLearnDataSource {
  return {
    id: 0,
    name: "",
    version: 0,
    sourceDescription: "",
    structure: undefined,
    structureCrc: 0,
    cacheDurationSeconds: 0,
  };
}

export const CMsgSteamLearnDataSource = {
  encode(message: CMsgSteamLearnDataSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.version !== 0) {
      writer.uint32(24).uint32(message.version);
    }
    if (message.sourceDescription !== "") {
      writer.uint32(34).string(message.sourceDescription);
    }
    if (message.structure !== undefined) {
      CMsgSteamLearnDataSourceDescObject.encode(message.structure, writer.uint32(42).fork()).ldelim();
    }
    if (message.structureCrc !== 0) {
      writer.uint32(48).uint32(message.structureCrc);
    }
    if (message.cacheDurationSeconds !== 0) {
      writer.uint32(56).uint32(message.cacheDurationSeconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnDataSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnDataSource();
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
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.version = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.sourceDescription = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.structure = CMsgSteamLearnDataSourceDescObject.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.structureCrc = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.cacheDurationSeconds = reader.uint32();
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

function createBaseCMsgSteamLearnDataObject(): CMsgSteamLearnDataObject {
  return { elements: [] };
}

export const CMsgSteamLearnDataObject = {
  encode(message: CMsgSteamLearnDataObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.elements) {
      CMsgSteamLearnDataElement.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnDataObject {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnDataObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.elements.push(CMsgSteamLearnDataElement.decode(reader, reader.uint32()));
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

function createBaseCMsgSteamLearnDataElement(): CMsgSteamLearnDataElement {
  return { name: "", dataInt32s: [], dataFloats: [], dataBools: [], dataStrings: [], dataObjects: [] };
}

export const CMsgSteamLearnDataElement = {
  encode(message: CMsgSteamLearnDataElement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    writer.uint32(162).fork();
    for (const v of message.dataInt32s) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(170).fork();
    for (const v of message.dataFloats) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(178).fork();
    for (const v of message.dataBools) {
      writer.bool(v);
    }
    writer.ldelim();
    for (const v of message.dataStrings) {
      writer.uint32(186).string(v!);
    }
    for (const v of message.dataObjects) {
      CMsgSteamLearnDataObject.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnDataElement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnDataElement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 20:
          if (tag == 160) {
            message.dataInt32s.push(reader.int32());
            continue;
          }

          if (tag == 162) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dataInt32s.push(reader.int32());
            }

            continue;
          }

          break;
        case 21:
          if (tag == 173) {
            message.dataFloats.push(reader.float());
            continue;
          }

          if (tag == 170) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dataFloats.push(reader.float());
            }

            continue;
          }

          break;
        case 22:
          if (tag == 176) {
            message.dataBools.push(reader.bool());
            continue;
          }

          if (tag == 178) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dataBools.push(reader.bool());
            }

            continue;
          }

          break;
        case 23:
          if (tag != 186) {
            break;
          }

          message.dataStrings.push(reader.string());
          continue;
        case 24:
          if (tag != 194) {
            break;
          }

          message.dataObjects.push(CMsgSteamLearnDataObject.decode(reader, reader.uint32()));
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

function createBaseCMsgSteamLearnData(): CMsgSteamLearnData {
  return { dataSourceId: 0, keys: [], dataObject: undefined };
}

export const CMsgSteamLearnData = {
  encode(message: CMsgSteamLearnData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataSourceId !== 0) {
      writer.uint32(8).uint32(message.dataSourceId);
    }
    writer.uint32(18).fork();
    for (const v of message.keys) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.dataObject !== undefined) {
      CMsgSteamLearnDataObject.encode(message.dataObject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.dataSourceId = reader.uint32();
          continue;
        case 2:
          if (tag == 16) {
            message.keys.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.keys.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 3:
          if (tag != 26) {
            break;
          }

          message.dataObject = CMsgSteamLearnDataObject.decode(reader, reader.uint32());
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

function createBaseCMsgSteamLearnDataList(): CMsgSteamLearnDataList {
  return { data: [] };
}

export const CMsgSteamLearnDataList = {
  encode(message: CMsgSteamLearnDataList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      CMsgSteamLearnData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnDataList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnDataList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.data.push(CMsgSteamLearnData.decode(reader, reader.uint32()));
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

function createBaseCMsgSteamLearnAccessData(): CMsgSteamLearnAccessData {
  return { publisherId: 0, timestamp: 0, randomValue: "0" };
}

export const CMsgSteamLearnAccessData = {
  encode(message: CMsgSteamLearnAccessData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publisherId !== 0) {
      writer.uint32(8).uint32(message.publisherId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    if (message.randomValue !== "0") {
      writer.uint32(24).uint64(message.randomValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnAccessData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnAccessData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.publisherId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.timestamp = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.randomValue = longToString(reader.uint64() as Long);
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

function createBaseCMsgSteamLearnRegisterDataSourceRequest(): CMsgSteamLearnRegisterDataSourceRequest {
  return { accessToken: "", accessData: undefined, dataSource: undefined };
}

export const CMsgSteamLearnRegisterDataSourceRequest = {
  encode(message: CMsgSteamLearnRegisterDataSourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    if (message.accessData !== undefined) {
      CMsgSteamLearnAccessData.encode(message.accessData, writer.uint32(18).fork()).ldelim();
    }
    if (message.dataSource !== undefined) {
      CMsgSteamLearnDataSource.encode(message.dataSource, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnRegisterDataSourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnRegisterDataSourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.accessToken = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.accessData = CMsgSteamLearnAccessData.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.dataSource = CMsgSteamLearnDataSource.decode(reader, reader.uint32());
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

function createBaseCMsgSteamLearnRegisterDataSourceResponse(): CMsgSteamLearnRegisterDataSourceResponse {
  return { result: 0, dataSource: undefined };
}

export const CMsgSteamLearnRegisterDataSourceResponse = {
  encode(message: CMsgSteamLearnRegisterDataSourceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.dataSource !== undefined) {
      CMsgSteamLearnDataSource.encode(message.dataSource, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnRegisterDataSourceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnRegisterDataSourceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.dataSource = CMsgSteamLearnDataSource.decode(reader, reader.uint32());
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

function createBaseCMsgSteamLearnCacheDataRequest(): CMsgSteamLearnCacheDataRequest {
  return { accessToken: "", accessData: undefined, data: undefined };
}

export const CMsgSteamLearnCacheDataRequest = {
  encode(message: CMsgSteamLearnCacheDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    if (message.accessData !== undefined) {
      CMsgSteamLearnAccessData.encode(message.accessData, writer.uint32(18).fork()).ldelim();
    }
    if (message.data !== undefined) {
      CMsgSteamLearnData.encode(message.data, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnCacheDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnCacheDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.accessToken = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.accessData = CMsgSteamLearnAccessData.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.data = CMsgSteamLearnData.decode(reader, reader.uint32());
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

function createBaseCMsgSteamLearnCacheDataResponse(): CMsgSteamLearnCacheDataResponse {
  return { cacheDataResult: 0 };
}

export const CMsgSteamLearnCacheDataResponse = {
  encode(message: CMsgSteamLearnCacheDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cacheDataResult !== 0) {
      writer.uint32(8).int32(message.cacheDataResult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnCacheDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnCacheDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.cacheDataResult = reader.int32() as any;
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

function createBaseCMsgSteamLearnSnapshotProjectRequest(): CMsgSteamLearnSnapshotProjectRequest {
  return {
    accessToken: "",
    accessData: undefined,
    projectId: 0,
    publishedVersion: 0,
    keys: [],
    data: [],
    pendingDataLimitSeconds: 0,
  };
}

export const CMsgSteamLearnSnapshotProjectRequest = {
  encode(message: CMsgSteamLearnSnapshotProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    if (message.accessData !== undefined) {
      CMsgSteamLearnAccessData.encode(message.accessData, writer.uint32(18).fork()).ldelim();
    }
    if (message.projectId !== 0) {
      writer.uint32(24).uint32(message.projectId);
    }
    if (message.publishedVersion !== 0) {
      writer.uint32(56).uint32(message.publishedVersion);
    }
    writer.uint32(34).fork();
    for (const v of message.keys) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.data) {
      CMsgSteamLearnData.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.pendingDataLimitSeconds !== 0) {
      writer.uint32(48).uint32(message.pendingDataLimitSeconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnSnapshotProjectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnSnapshotProjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.accessToken = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.accessData = CMsgSteamLearnAccessData.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.projectId = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.publishedVersion = reader.uint32();
          continue;
        case 4:
          if (tag == 32) {
            message.keys.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.keys.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 5:
          if (tag != 42) {
            break;
          }

          message.data.push(CMsgSteamLearnData.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.pendingDataLimitSeconds = reader.uint32();
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

function createBaseCMsgSteamLearnSnapshotProjectResponse(): CMsgSteamLearnSnapshotProjectResponse {
  return { snapshotResult: 0 };
}

export const CMsgSteamLearnSnapshotProjectResponse = {
  encode(message: CMsgSteamLearnSnapshotProjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotResult !== 0) {
      writer.uint32(8).int32(message.snapshotResult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnSnapshotProjectResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnSnapshotProjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.snapshotResult = reader.int32() as any;
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

function createBaseCMsgSteamLearnBatchOperationRequest(): CMsgSteamLearnBatchOperationRequest {
  return { cacheDataRequests: [], snapshotRequests: [] };
}

export const CMsgSteamLearnBatchOperationRequest = {
  encode(message: CMsgSteamLearnBatchOperationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cacheDataRequests) {
      CMsgSteamLearnCacheDataRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.snapshotRequests) {
      CMsgSteamLearnSnapshotProjectRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnBatchOperationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnBatchOperationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.cacheDataRequests.push(CMsgSteamLearnCacheDataRequest.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.snapshotRequests.push(CMsgSteamLearnSnapshotProjectRequest.decode(reader, reader.uint32()));
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

function createBaseCMsgSteamLearnBatchOperationResponse(): CMsgSteamLearnBatchOperationResponse {
  return { cacheDataResponses: [], snapshotResponses: [] };
}

export const CMsgSteamLearnBatchOperationResponse = {
  encode(message: CMsgSteamLearnBatchOperationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cacheDataResponses) {
      CMsgSteamLearnCacheDataResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.snapshotResponses) {
      CMsgSteamLearnSnapshotProjectResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnBatchOperationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnBatchOperationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.cacheDataResponses.push(CMsgSteamLearnCacheDataResponse.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.snapshotResponses.push(CMsgSteamLearnSnapshotProjectResponse.decode(reader, reader.uint32()));
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

function createBaseCMsgSteamLearnHMACKeys(): CMsgSteamLearnHMACKeys {
  return { registerDataSourceKey: "", cacheDataKeys: [], snapshotProjectKeys: [] };
}

export const CMsgSteamLearnHMACKeys = {
  encode(message: CMsgSteamLearnHMACKeys, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registerDataSourceKey !== "") {
      writer.uint32(10).string(message.registerDataSourceKey);
    }
    for (const v of message.cacheDataKeys) {
      CMsgSteamLearnHMACKeys_CacheDataKeys.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.snapshotProjectKeys) {
      CMsgSteamLearnHMACKeys_SnapshotProjectKeys.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnHMACKeys {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnHMACKeys();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.registerDataSourceKey = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.cacheDataKeys.push(CMsgSteamLearnHMACKeys_CacheDataKeys.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.snapshotProjectKeys.push(CMsgSteamLearnHMACKeys_SnapshotProjectKeys.decode(reader, reader.uint32()));
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

function createBaseCMsgSteamLearnHMACKeys_CacheDataKeys(): CMsgSteamLearnHMACKeys_CacheDataKeys {
  return { dataSourceId: 0, version: 0, key: "" };
}

export const CMsgSteamLearnHMACKeys_CacheDataKeys = {
  encode(message: CMsgSteamLearnHMACKeys_CacheDataKeys, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataSourceId !== 0) {
      writer.uint32(8).uint32(message.dataSourceId);
    }
    if (message.version !== 0) {
      writer.uint32(24).uint32(message.version);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnHMACKeys_CacheDataKeys {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnHMACKeys_CacheDataKeys();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.dataSourceId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.version = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.key = reader.string();
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

function createBaseCMsgSteamLearnHMACKeys_SnapshotProjectKeys(): CMsgSteamLearnHMACKeys_SnapshotProjectKeys {
  return { projectId: 0, publishedVersion: 0, key: "" };
}

export const CMsgSteamLearnHMACKeys_SnapshotProjectKeys = {
  encode(message: CMsgSteamLearnHMACKeys_SnapshotProjectKeys, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).uint32(message.projectId);
    }
    if (message.publishedVersion !== 0) {
      writer.uint32(24).uint32(message.publishedVersion);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnHMACKeys_SnapshotProjectKeys {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnHMACKeys_SnapshotProjectKeys();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.projectId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.publishedVersion = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.key = reader.string();
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

function createBaseCMsgSteamLearnGetHMACKeysRequest(): CMsgSteamLearnGetHMACKeysRequest {
  return { appid: 0 };
}

export const CMsgSteamLearnGetHMACKeysRequest = {
  encode(message: CMsgSteamLearnGetHMACKeysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnGetHMACKeysRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnGetHMACKeysRequest();
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
};

function createBaseCMsgSteamLearnGetHMACKeysResponse(): CMsgSteamLearnGetHMACKeysResponse {
  return { result: 0, keys: undefined };
}

export const CMsgSteamLearnGetHMACKeysResponse = {
  encode(message: CMsgSteamLearnGetHMACKeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.keys !== undefined) {
      CMsgSteamLearnHMACKeys.encode(message.keys, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnGetHMACKeysResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnGetHMACKeysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.keys = CMsgSteamLearnHMACKeys.decode(reader, reader.uint32());
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

function createBaseCMsgSteamLearnInferenceRequest(): CMsgSteamLearnInferenceRequest {
  return {
    accessToken: "",
    accessData: undefined,
    projectId: 0,
    publishedVersion: 0,
    overrideTrainId: 0,
    data: undefined,
    additionalData: [],
  };
}

export const CMsgSteamLearnInferenceRequest = {
  encode(message: CMsgSteamLearnInferenceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    if (message.accessData !== undefined) {
      CMsgSteamLearnAccessData.encode(message.accessData, writer.uint32(18).fork()).ldelim();
    }
    if (message.projectId !== 0) {
      writer.uint32(24).uint32(message.projectId);
    }
    if (message.publishedVersion !== 0) {
      writer.uint32(32).uint32(message.publishedVersion);
    }
    if (message.overrideTrainId !== 0) {
      writer.uint32(40).uint32(message.overrideTrainId);
    }
    if (message.data !== undefined) {
      CMsgSteamLearnDataList.encode(message.data, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).fork();
    for (const v of message.additionalData) {
      writer.float(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnInferenceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnInferenceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.accessToken = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.accessData = CMsgSteamLearnAccessData.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.projectId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.publishedVersion = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.overrideTrainId = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.data = CMsgSteamLearnDataList.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag == 61) {
            message.additionalData.push(reader.float());
            continue;
          }

          if (tag == 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.additionalData.push(reader.float());
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

function createBaseCMsgSteamLearnInferenceBackendResponse(): CMsgSteamLearnInferenceBackendResponse {
  return { outputs: [] };
}

export const CMsgSteamLearnInferenceBackendResponse = {
  encode(message: CMsgSteamLearnInferenceBackendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.outputs) {
      CMsgSteamLearnInferenceBackendResponse_Output.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnInferenceBackendResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnInferenceBackendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.outputs.push(CMsgSteamLearnInferenceBackendResponse_Output.decode(reader, reader.uint32()));
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

function createBaseCMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput(): CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput {
  return { value: 0 };
}

export const CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput = {
  encode(
    message: CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(13).float(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
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

function createBaseCMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput(): CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput {
  return { weight: [], value: [] };
}

export const CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput = {
  encode(
    message: CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.weight) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.value) {
      writer.float(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 13) {
            message.weight.push(reader.float());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.weight.push(reader.float());
            }

            continue;
          }

          break;
        case 2:
          if (tag == 21) {
            message.value.push(reader.float());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.value.push(reader.float());
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

function createBaseCMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput(): CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput {
  return { weight: [], value: [] };
}

export const CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput = {
  encode(
    message: CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.weight) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.value) {
      writer.float(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 13) {
            message.weight.push(reader.float());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.weight.push(reader.float());
            }

            continue;
          }

          break;
        case 2:
          if (tag == 21) {
            message.value.push(reader.float());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.value.push(reader.float());
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

function createBaseCMsgSteamLearnInferenceBackendResponse_Output(): CMsgSteamLearnInferenceBackendResponse_Output {
  return { binaryCrossentropy: undefined, categoricalCrossentropy: undefined, multiBinaryCrossentropy: undefined };
}

export const CMsgSteamLearnInferenceBackendResponse_Output = {
  encode(message: CMsgSteamLearnInferenceBackendResponse_Output, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.binaryCrossentropy !== undefined) {
      CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput.encode(
        message.binaryCrossentropy,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.categoricalCrossentropy !== undefined) {
      CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput.encode(
        message.categoricalCrossentropy,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.multiBinaryCrossentropy !== undefined) {
      CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput.encode(
        message.multiBinaryCrossentropy,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnInferenceBackendResponse_Output {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnInferenceBackendResponse_Output();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.binaryCrossentropy = CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.categoricalCrossentropy = CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.multiBinaryCrossentropy = CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput.decode(
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

function createBaseCMsgSteamLearnInferenceResponse(): CMsgSteamLearnInferenceResponse {
  return { inferenceResult: 0, backendResponse: undefined };
}

export const CMsgSteamLearnInferenceResponse = {
  encode(message: CMsgSteamLearnInferenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inferenceResult !== 0) {
      writer.uint32(8).int32(message.inferenceResult);
    }
    if (message.backendResponse !== undefined) {
      CMsgSteamLearnInferenceBackendResponse.encode(message.backendResponse, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnInferenceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnInferenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.inferenceResult = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.backendResponse = CMsgSteamLearnInferenceBackendResponse.decode(reader, reader.uint32());
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

export interface SteamLearn {
  RegisterDataSource(
    request: CMsgSteamLearnRegisterDataSourceRequest,
  ): Promise<CMsgSteamLearnRegisterDataSourceResponse>;
  CacheData(request: CMsgSteamLearnCacheDataRequest): Promise<CMsgSteamLearnCacheDataResponse>;
  SnapshotProject(request: CMsgSteamLearnSnapshotProjectRequest): Promise<CMsgSteamLearnSnapshotProjectResponse>;
  BatchOperation(request: CMsgSteamLearnBatchOperationRequest): Promise<CMsgSteamLearnBatchOperationResponse>;
  GetHMACKeys(request: CMsgSteamLearnGetHMACKeysRequest): Promise<CMsgSteamLearnGetHMACKeysResponse>;
  Inference(request: CMsgSteamLearnInferenceRequest): Promise<CMsgSteamLearnInferenceResponse>;
}

export class SteamLearnClientImpl implements SteamLearn {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "SteamLearn";
    this.rpc = rpc;
    this.RegisterDataSource = this.RegisterDataSource.bind(this);
    this.CacheData = this.CacheData.bind(this);
    this.SnapshotProject = this.SnapshotProject.bind(this);
    this.BatchOperation = this.BatchOperation.bind(this);
    this.GetHMACKeys = this.GetHMACKeys.bind(this);
    this.Inference = this.Inference.bind(this);
  }
  RegisterDataSource(
    request: CMsgSteamLearnRegisterDataSourceRequest,
  ): Promise<CMsgSteamLearnRegisterDataSourceResponse> {
    const data = CMsgSteamLearnRegisterDataSourceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterDataSource", data);
    return promise.then((data) => CMsgSteamLearnRegisterDataSourceResponse.decode(_m0.Reader.create(data)));
  }

  CacheData(request: CMsgSteamLearnCacheDataRequest): Promise<CMsgSteamLearnCacheDataResponse> {
    const data = CMsgSteamLearnCacheDataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CacheData", data);
    return promise.then((data) => CMsgSteamLearnCacheDataResponse.decode(_m0.Reader.create(data)));
  }

  SnapshotProject(request: CMsgSteamLearnSnapshotProjectRequest): Promise<CMsgSteamLearnSnapshotProjectResponse> {
    const data = CMsgSteamLearnSnapshotProjectRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SnapshotProject", data);
    return promise.then((data) => CMsgSteamLearnSnapshotProjectResponse.decode(_m0.Reader.create(data)));
  }

  BatchOperation(request: CMsgSteamLearnBatchOperationRequest): Promise<CMsgSteamLearnBatchOperationResponse> {
    const data = CMsgSteamLearnBatchOperationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BatchOperation", data);
    return promise.then((data) => CMsgSteamLearnBatchOperationResponse.decode(_m0.Reader.create(data)));
  }

  GetHMACKeys(request: CMsgSteamLearnGetHMACKeysRequest): Promise<CMsgSteamLearnGetHMACKeysResponse> {
    const data = CMsgSteamLearnGetHMACKeysRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetHMACKeys", data);
    return promise.then((data) => CMsgSteamLearnGetHMACKeysResponse.decode(_m0.Reader.create(data)));
  }

  Inference(request: CMsgSteamLearnInferenceRequest): Promise<CMsgSteamLearnInferenceResponse> {
    const data = CMsgSteamLearnInferenceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Inference", data);
    return promise.then((data) => CMsgSteamLearnInferenceResponse.decode(_m0.Reader.create(data)));
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
