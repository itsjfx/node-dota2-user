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

export function eSteamLearnDataTypeFromJSON(object: any): ESteamLearnDataType {
  switch (object) {
    case 0:
    case "STEAMLEARN_DATATYPE_INVALID":
      return ESteamLearnDataType.STEAMLEARN_DATATYPE_INVALID;
    case 1:
    case "STEAMLEARN_DATATYPE_INT32":
      return ESteamLearnDataType.STEAMLEARN_DATATYPE_INT32;
    case 2:
    case "STEAMLEARN_DATATYPE_FLOAT32":
      return ESteamLearnDataType.STEAMLEARN_DATATYPE_FLOAT32;
    case 3:
    case "STEAMLEARN_DATATYPE_BOOL":
      return ESteamLearnDataType.STEAMLEARN_DATATYPE_BOOL;
    case 4:
    case "STEAMLEARN_DATATYPE_STRING":
      return ESteamLearnDataType.STEAMLEARN_DATATYPE_STRING;
    case 5:
    case "STEAMLEARN_DATATYPE_OBJECT":
      return ESteamLearnDataType.STEAMLEARN_DATATYPE_OBJECT;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESteamLearnDataType");
  }
}

export function eSteamLearnDataTypeToJSON(object: ESteamLearnDataType): string {
  switch (object) {
    case ESteamLearnDataType.STEAMLEARN_DATATYPE_INVALID:
      return "STEAMLEARN_DATATYPE_INVALID";
    case ESteamLearnDataType.STEAMLEARN_DATATYPE_INT32:
      return "STEAMLEARN_DATATYPE_INT32";
    case ESteamLearnDataType.STEAMLEARN_DATATYPE_FLOAT32:
      return "STEAMLEARN_DATATYPE_FLOAT32";
    case ESteamLearnDataType.STEAMLEARN_DATATYPE_BOOL:
      return "STEAMLEARN_DATATYPE_BOOL";
    case ESteamLearnDataType.STEAMLEARN_DATATYPE_STRING:
      return "STEAMLEARN_DATATYPE_STRING";
    case ESteamLearnDataType.STEAMLEARN_DATATYPE_OBJECT:
      return "STEAMLEARN_DATATYPE_OBJECT";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESteamLearnDataType");
  }
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

export function eSteammLearnRegisterDataSourceResultFromJSON(object: any): ESteammLearnRegisterDataSourceResult {
  switch (object) {
    case 0:
    case "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR":
      return ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR;
    case 1:
    case "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_SUCCESS_CREATED":
      return ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_SUCCESS_CREATED;
    case 2:
    case "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_SUCCESS_FOUND":
      return ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_SUCCESS_FOUND;
    case 3:
    case "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_GENERIC":
      return ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_GENERIC;
    case 4:
    case "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_INVALID_NAME":
      return ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_INVALID_NAME;
    case 5:
    case "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_INVALID_VERSION":
      return ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_INVALID_VERSION;
    case 6:
    case "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_DATA_CHANGED":
      return ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_DATA_CHANGED;
    case 7:
    case "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_DATA_INVALID":
      return ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_DATA_INVALID;
    case 8:
    case "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_FORBIDDEN":
      return ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_FORBIDDEN;
    case 9:
    case "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_INVALID_TIMESTAMP":
      return ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_INVALID_TIMESTAMP;
    case 10:
    case "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_DISABLED":
      return ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_DISABLED;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum ESteammLearnRegisterDataSourceResult",
      );
  }
}

export function eSteammLearnRegisterDataSourceResultToJSON(object: ESteammLearnRegisterDataSourceResult): string {
  switch (object) {
    case ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR:
      return "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR";
    case ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_SUCCESS_CREATED:
      return "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_SUCCESS_CREATED";
    case ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_SUCCESS_FOUND:
      return "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_SUCCESS_FOUND";
    case ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_GENERIC:
      return "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_GENERIC";
    case ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_INVALID_NAME:
      return "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_INVALID_NAME";
    case ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_INVALID_VERSION:
      return "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_INVALID_VERSION";
    case ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_DATA_CHANGED:
      return "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_DATA_CHANGED";
    case ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_DATA_INVALID:
      return "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_DATA_INVALID";
    case ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_FORBIDDEN:
      return "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_FORBIDDEN";
    case ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_INVALID_TIMESTAMP:
      return "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_INVALID_TIMESTAMP";
    case ESteammLearnRegisterDataSourceResult.STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_DISABLED:
      return "STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_DISABLED";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum ESteammLearnRegisterDataSourceResult",
      );
  }
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

export function eSteamLearnCacheDataResultFromJSON(object: any): ESteamLearnCacheDataResult {
  switch (object) {
    case 0:
    case "STEAMLEARN_CACHE_DATA_ERROR":
      return ESteamLearnCacheDataResult.STEAMLEARN_CACHE_DATA_ERROR;
    case 1:
    case "STEAMLEARN_CACHE_DATA_SUCCESS":
      return ESteamLearnCacheDataResult.STEAMLEARN_CACHE_DATA_SUCCESS;
    case 2:
    case "STEAMLEARN_CACHE_DATA_ERROR_UNKNOWN_DATA_SOURCE":
      return ESteamLearnCacheDataResult.STEAMLEARN_CACHE_DATA_ERROR_UNKNOWN_DATA_SOURCE;
    case 3:
    case "STEAMLEARN_CACHE_DATA_ERROR_UNCACHED_DATA_SOURCE":
      return ESteamLearnCacheDataResult.STEAMLEARN_CACHE_DATA_ERROR_UNCACHED_DATA_SOURCE;
    case 4:
    case "STEAMLEARN_CACHE_DATA_ERROR_INVALID_KEYS":
      return ESteamLearnCacheDataResult.STEAMLEARN_CACHE_DATA_ERROR_INVALID_KEYS;
    case 5:
    case "STEAMLEARN_CACHE_DATA_ERROR_FORBIDDEN":
      return ESteamLearnCacheDataResult.STEAMLEARN_CACHE_DATA_ERROR_FORBIDDEN;
    case 6:
    case "STEAMLEARN_CACHE_DATA_ERROR_INVALID_TIMESTAMP":
      return ESteamLearnCacheDataResult.STEAMLEARN_CACHE_DATA_ERROR_INVALID_TIMESTAMP;
    case 7:
    case "STEAMLEARN_CACHE_DATA_DISABLED":
      return ESteamLearnCacheDataResult.STEAMLEARN_CACHE_DATA_DISABLED;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESteamLearnCacheDataResult");
  }
}

export function eSteamLearnCacheDataResultToJSON(object: ESteamLearnCacheDataResult): string {
  switch (object) {
    case ESteamLearnCacheDataResult.STEAMLEARN_CACHE_DATA_ERROR:
      return "STEAMLEARN_CACHE_DATA_ERROR";
    case ESteamLearnCacheDataResult.STEAMLEARN_CACHE_DATA_SUCCESS:
      return "STEAMLEARN_CACHE_DATA_SUCCESS";
    case ESteamLearnCacheDataResult.STEAMLEARN_CACHE_DATA_ERROR_UNKNOWN_DATA_SOURCE:
      return "STEAMLEARN_CACHE_DATA_ERROR_UNKNOWN_DATA_SOURCE";
    case ESteamLearnCacheDataResult.STEAMLEARN_CACHE_DATA_ERROR_UNCACHED_DATA_SOURCE:
      return "STEAMLEARN_CACHE_DATA_ERROR_UNCACHED_DATA_SOURCE";
    case ESteamLearnCacheDataResult.STEAMLEARN_CACHE_DATA_ERROR_INVALID_KEYS:
      return "STEAMLEARN_CACHE_DATA_ERROR_INVALID_KEYS";
    case ESteamLearnCacheDataResult.STEAMLEARN_CACHE_DATA_ERROR_FORBIDDEN:
      return "STEAMLEARN_CACHE_DATA_ERROR_FORBIDDEN";
    case ESteamLearnCacheDataResult.STEAMLEARN_CACHE_DATA_ERROR_INVALID_TIMESTAMP:
      return "STEAMLEARN_CACHE_DATA_ERROR_INVALID_TIMESTAMP";
    case ESteamLearnCacheDataResult.STEAMLEARN_CACHE_DATA_DISABLED:
      return "STEAMLEARN_CACHE_DATA_DISABLED";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESteamLearnCacheDataResult");
  }
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

export function eSteamLearnSnapshotProjectResultFromJSON(object: any): ESteamLearnSnapshotProjectResult {
  switch (object) {
    case 0:
    case "STEAMLEARN_SNAPSHOT_PROJECT_ERROR":
      return ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_ERROR;
    case 1:
    case "STEAMLEARN_SNAPSHOT_PROJECT_SUCCESS_STORED":
      return ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_SUCCESS_STORED;
    case 2:
    case "STEAMLEARN_SNAPSHOT_PROJECT_SUCCESS_QUEUED":
      return ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_SUCCESS_QUEUED;
    case 3:
    case "STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_PROJECT_ID":
      return ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_PROJECT_ID;
    case 4:
    case "STEAMLEARN_SNAPSHOT_PROJECT_ERROR_UNKNOWN_DATA_SOURCE":
      return ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_ERROR_UNKNOWN_DATA_SOURCE;
    case 5:
    case "STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_DATA_SOURCE_KEY":
      return ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_DATA_SOURCE_KEY;
    case 6:
    case "STEAMLEARN_SNAPSHOT_PROJECT_ERROR_MISSING_CACHE_DURATION":
      return ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_ERROR_MISSING_CACHE_DURATION;
    case 7:
    case "STEAMLEARN_SNAPSHOT_PROJECT_ERROR_NO_PUBLISHED_CONFIG":
      return ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_ERROR_NO_PUBLISHED_CONFIG;
    case 8:
    case "STEAMLEARN_SNAPSHOT_PROJECT_ERROR_FORBIDDEN":
      return ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_ERROR_FORBIDDEN;
    case 9:
    case "STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_TIMESTAMP":
      return ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_TIMESTAMP;
    case 10:
    case "STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INTERNAL_DATA_SOURCE_ERROR":
      return ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INTERNAL_DATA_SOURCE_ERROR;
    case 11:
    case "STEAMLEARN_SNAPSHOT_PROJECT_DISABLED":
      return ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_DISABLED;
    case 12:
    case "STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_PUBLISHED_VERSION":
      return ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_PUBLISHED_VERSION;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum ESteamLearnSnapshotProjectResult",
      );
  }
}

export function eSteamLearnSnapshotProjectResultToJSON(object: ESteamLearnSnapshotProjectResult): string {
  switch (object) {
    case ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_ERROR:
      return "STEAMLEARN_SNAPSHOT_PROJECT_ERROR";
    case ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_SUCCESS_STORED:
      return "STEAMLEARN_SNAPSHOT_PROJECT_SUCCESS_STORED";
    case ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_SUCCESS_QUEUED:
      return "STEAMLEARN_SNAPSHOT_PROJECT_SUCCESS_QUEUED";
    case ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_PROJECT_ID:
      return "STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_PROJECT_ID";
    case ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_ERROR_UNKNOWN_DATA_SOURCE:
      return "STEAMLEARN_SNAPSHOT_PROJECT_ERROR_UNKNOWN_DATA_SOURCE";
    case ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_DATA_SOURCE_KEY:
      return "STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_DATA_SOURCE_KEY";
    case ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_ERROR_MISSING_CACHE_DURATION:
      return "STEAMLEARN_SNAPSHOT_PROJECT_ERROR_MISSING_CACHE_DURATION";
    case ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_ERROR_NO_PUBLISHED_CONFIG:
      return "STEAMLEARN_SNAPSHOT_PROJECT_ERROR_NO_PUBLISHED_CONFIG";
    case ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_ERROR_FORBIDDEN:
      return "STEAMLEARN_SNAPSHOT_PROJECT_ERROR_FORBIDDEN";
    case ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_TIMESTAMP:
      return "STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_TIMESTAMP";
    case ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INTERNAL_DATA_SOURCE_ERROR:
      return "STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INTERNAL_DATA_SOURCE_ERROR";
    case ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_DISABLED:
      return "STEAMLEARN_SNAPSHOT_PROJECT_DISABLED";
    case ESteamLearnSnapshotProjectResult.STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_PUBLISHED_VERSION:
      return "STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_PUBLISHED_VERSION";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum ESteamLearnSnapshotProjectResult",
      );
  }
}

export enum ESteamLearnGetHMACKeysResult {
  STEAMLEARN_GET_HMAC_KEYS_SUCCESS = 0,
}

export function eSteamLearnGetHMACKeysResultFromJSON(object: any): ESteamLearnGetHMACKeysResult {
  switch (object) {
    case 0:
    case "STEAMLEARN_GET_HMAC_KEYS_SUCCESS":
      return ESteamLearnGetHMACKeysResult.STEAMLEARN_GET_HMAC_KEYS_SUCCESS;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESteamLearnGetHMACKeysResult");
  }
}

export function eSteamLearnGetHMACKeysResultToJSON(object: ESteamLearnGetHMACKeysResult): string {
  switch (object) {
    case ESteamLearnGetHMACKeysResult.STEAMLEARN_GET_HMAC_KEYS_SUCCESS:
      return "STEAMLEARN_GET_HMAC_KEYS_SUCCESS";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESteamLearnGetHMACKeysResult");
  }
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
  STEAMLEARN_INFERENCE_ERROR_TOO_BUSY = 9,
}

export function eSteamLearnInferenceResultFromJSON(object: any): ESteamLearnInferenceResult {
  switch (object) {
    case 0:
    case "STEAMLEARN_INFERENCE_ERROR":
      return ESteamLearnInferenceResult.STEAMLEARN_INFERENCE_ERROR;
    case 1:
    case "STEAMLEARN_INFERENCE_SUCCESS":
      return ESteamLearnInferenceResult.STEAMLEARN_INFERENCE_SUCCESS;
    case 2:
    case "STEAMLEARN_INFERENCE_ERROR_INVALID_PROJECT_ID":
      return ESteamLearnInferenceResult.STEAMLEARN_INFERENCE_ERROR_INVALID_PROJECT_ID;
    case 3:
    case "STEAMLEARN_INFERENCE_ERROR_MISSING_CACHED_SCHEMA_DATA":
      return ESteamLearnInferenceResult.STEAMLEARN_INFERENCE_ERROR_MISSING_CACHED_SCHEMA_DATA;
    case 4:
    case "STEAMLEARN_INFERENCE_ERROR_NO_PUBLISHED_CONFIG":
      return ESteamLearnInferenceResult.STEAMLEARN_INFERENCE_ERROR_NO_PUBLISHED_CONFIG;
    case 5:
    case "STEAMLEARN_INFERENCE_ERROR_FORBIDDEN":
      return ESteamLearnInferenceResult.STEAMLEARN_INFERENCE_ERROR_FORBIDDEN;
    case 6:
    case "STEAMLEARN_INFERENCE_ERROR_INVALID_TIMESTAMP":
      return ESteamLearnInferenceResult.STEAMLEARN_INFERENCE_ERROR_INVALID_TIMESTAMP;
    case 7:
    case "STEAMLEARN_INFERENCE_ERROR_INVALID_PUBLISHED_VERSION":
      return ESteamLearnInferenceResult.STEAMLEARN_INFERENCE_ERROR_INVALID_PUBLISHED_VERSION;
    case 8:
    case "STEAMLEARN_INFERENCE_ERROR_NO_FETCH_ID_FOUND":
      return ESteamLearnInferenceResult.STEAMLEARN_INFERENCE_ERROR_NO_FETCH_ID_FOUND;
    case 9:
    case "STEAMLEARN_INFERENCE_ERROR_TOO_BUSY":
      return ESteamLearnInferenceResult.STEAMLEARN_INFERENCE_ERROR_TOO_BUSY;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESteamLearnInferenceResult");
  }
}

export function eSteamLearnInferenceResultToJSON(object: ESteamLearnInferenceResult): string {
  switch (object) {
    case ESteamLearnInferenceResult.STEAMLEARN_INFERENCE_ERROR:
      return "STEAMLEARN_INFERENCE_ERROR";
    case ESteamLearnInferenceResult.STEAMLEARN_INFERENCE_SUCCESS:
      return "STEAMLEARN_INFERENCE_SUCCESS";
    case ESteamLearnInferenceResult.STEAMLEARN_INFERENCE_ERROR_INVALID_PROJECT_ID:
      return "STEAMLEARN_INFERENCE_ERROR_INVALID_PROJECT_ID";
    case ESteamLearnInferenceResult.STEAMLEARN_INFERENCE_ERROR_MISSING_CACHED_SCHEMA_DATA:
      return "STEAMLEARN_INFERENCE_ERROR_MISSING_CACHED_SCHEMA_DATA";
    case ESteamLearnInferenceResult.STEAMLEARN_INFERENCE_ERROR_NO_PUBLISHED_CONFIG:
      return "STEAMLEARN_INFERENCE_ERROR_NO_PUBLISHED_CONFIG";
    case ESteamLearnInferenceResult.STEAMLEARN_INFERENCE_ERROR_FORBIDDEN:
      return "STEAMLEARN_INFERENCE_ERROR_FORBIDDEN";
    case ESteamLearnInferenceResult.STEAMLEARN_INFERENCE_ERROR_INVALID_TIMESTAMP:
      return "STEAMLEARN_INFERENCE_ERROR_INVALID_TIMESTAMP";
    case ESteamLearnInferenceResult.STEAMLEARN_INFERENCE_ERROR_INVALID_PUBLISHED_VERSION:
      return "STEAMLEARN_INFERENCE_ERROR_INVALID_PUBLISHED_VERSION";
    case ESteamLearnInferenceResult.STEAMLEARN_INFERENCE_ERROR_NO_FETCH_ID_FOUND:
      return "STEAMLEARN_INFERENCE_ERROR_NO_FETCH_ID_FOUND";
    case ESteamLearnInferenceResult.STEAMLEARN_INFERENCE_ERROR_TOO_BUSY:
      return "STEAMLEARN_INFERENCE_ERROR_TOO_BUSY";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESteamLearnInferenceResult");
  }
}

export enum ESteamLearnInferenceMetadataResult {
  STEAMLEARN_INFERENCE_METADATA_ERROR = 0,
  STEAMLEARN_INFERENCE_METADATA_SUCCESS = 1,
  STEAMLEARN_INFERENCE_METADATA_ERROR_INVALID_PROJECT_ID = 2,
  STEAMLEARN_INFERENCE_METADATA_ERROR_NO_PUBLISHED_CONFIG = 3,
  STEAMLEARN_INFERENCE_METADATA_ERROR_FORBIDDEN = 4,
  STEAMLEARN_INFERENCE_METADATA_ERROR_INVALID_TIMESTAMP = 5,
  STEAMLEARN_INFERENCE_METADATA_ERROR_INVALID_PUBLISHED_VERSION = 6,
  STEAMLEARN_INFERENCE_METADATA_ERROR_NO_FETCH_ID_FOUND = 7,
}

export function eSteamLearnInferenceMetadataResultFromJSON(object: any): ESteamLearnInferenceMetadataResult {
  switch (object) {
    case 0:
    case "STEAMLEARN_INFERENCE_METADATA_ERROR":
      return ESteamLearnInferenceMetadataResult.STEAMLEARN_INFERENCE_METADATA_ERROR;
    case 1:
    case "STEAMLEARN_INFERENCE_METADATA_SUCCESS":
      return ESteamLearnInferenceMetadataResult.STEAMLEARN_INFERENCE_METADATA_SUCCESS;
    case 2:
    case "STEAMLEARN_INFERENCE_METADATA_ERROR_INVALID_PROJECT_ID":
      return ESteamLearnInferenceMetadataResult.STEAMLEARN_INFERENCE_METADATA_ERROR_INVALID_PROJECT_ID;
    case 3:
    case "STEAMLEARN_INFERENCE_METADATA_ERROR_NO_PUBLISHED_CONFIG":
      return ESteamLearnInferenceMetadataResult.STEAMLEARN_INFERENCE_METADATA_ERROR_NO_PUBLISHED_CONFIG;
    case 4:
    case "STEAMLEARN_INFERENCE_METADATA_ERROR_FORBIDDEN":
      return ESteamLearnInferenceMetadataResult.STEAMLEARN_INFERENCE_METADATA_ERROR_FORBIDDEN;
    case 5:
    case "STEAMLEARN_INFERENCE_METADATA_ERROR_INVALID_TIMESTAMP":
      return ESteamLearnInferenceMetadataResult.STEAMLEARN_INFERENCE_METADATA_ERROR_INVALID_TIMESTAMP;
    case 6:
    case "STEAMLEARN_INFERENCE_METADATA_ERROR_INVALID_PUBLISHED_VERSION":
      return ESteamLearnInferenceMetadataResult.STEAMLEARN_INFERENCE_METADATA_ERROR_INVALID_PUBLISHED_VERSION;
    case 7:
    case "STEAMLEARN_INFERENCE_METADATA_ERROR_NO_FETCH_ID_FOUND":
      return ESteamLearnInferenceMetadataResult.STEAMLEARN_INFERENCE_METADATA_ERROR_NO_FETCH_ID_FOUND;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum ESteamLearnInferenceMetadataResult",
      );
  }
}

export function eSteamLearnInferenceMetadataResultToJSON(object: ESteamLearnInferenceMetadataResult): string {
  switch (object) {
    case ESteamLearnInferenceMetadataResult.STEAMLEARN_INFERENCE_METADATA_ERROR:
      return "STEAMLEARN_INFERENCE_METADATA_ERROR";
    case ESteamLearnInferenceMetadataResult.STEAMLEARN_INFERENCE_METADATA_SUCCESS:
      return "STEAMLEARN_INFERENCE_METADATA_SUCCESS";
    case ESteamLearnInferenceMetadataResult.STEAMLEARN_INFERENCE_METADATA_ERROR_INVALID_PROJECT_ID:
      return "STEAMLEARN_INFERENCE_METADATA_ERROR_INVALID_PROJECT_ID";
    case ESteamLearnInferenceMetadataResult.STEAMLEARN_INFERENCE_METADATA_ERROR_NO_PUBLISHED_CONFIG:
      return "STEAMLEARN_INFERENCE_METADATA_ERROR_NO_PUBLISHED_CONFIG";
    case ESteamLearnInferenceMetadataResult.STEAMLEARN_INFERENCE_METADATA_ERROR_FORBIDDEN:
      return "STEAMLEARN_INFERENCE_METADATA_ERROR_FORBIDDEN";
    case ESteamLearnInferenceMetadataResult.STEAMLEARN_INFERENCE_METADATA_ERROR_INVALID_TIMESTAMP:
      return "STEAMLEARN_INFERENCE_METADATA_ERROR_INVALID_TIMESTAMP";
    case ESteamLearnInferenceMetadataResult.STEAMLEARN_INFERENCE_METADATA_ERROR_INVALID_PUBLISHED_VERSION:
      return "STEAMLEARN_INFERENCE_METADATA_ERROR_INVALID_PUBLISHED_VERSION";
    case ESteamLearnInferenceMetadataResult.STEAMLEARN_INFERENCE_METADATA_ERROR_NO_FETCH_ID_FOUND:
      return "STEAMLEARN_INFERENCE_METADATA_ERROR_NO_FETCH_ID_FOUND";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum ESteamLearnInferenceMetadataResult",
      );
  }
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

export interface CMsgSteamLearnInferenceMetadataRequest {
  accessToken: string;
  accessData: CMsgSteamLearnAccessData | undefined;
  projectId: number;
  publishedVersion: number;
  overrideTrainId: number;
}

export interface CMsgSteamLearnInferenceMetadataBackendRequest {
  projectId: number;
  fetchId: number;
}

export interface CMsgSteamLearnInferenceMetadataResponse {
  inferenceMetadataResult: ESteamLearnInferenceMetadataResult;
  rowRange: CMsgSteamLearnInferenceMetadataResponse_RowRange | undefined;
  ranges: CMsgSteamLearnInferenceMetadataResponse_Range[];
  stdDevs: CMsgSteamLearnInferenceMetadataResponse_StdDev[];
  compactTables: CMsgSteamLearnInferenceMetadataResponse_CompactTable[];
  kmeans: CMsgSteamLearnInferenceMetadataResponse_KMeans[];
  snapshotHistogram: CMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram | undefined;
}

export interface CMsgSteamLearnInferenceMetadataResponse_RowRange {
  minRow: string;
  maxRow: string;
}

export interface CMsgSteamLearnInferenceMetadataResponse_Range {
  dataElementPath: string;
  minValue: number;
  maxValues: number;
}

export interface CMsgSteamLearnInferenceMetadataResponse_StdDev {
  dataElementPath: string;
  mean: number;
  stdDev: number;
}

export interface CMsgSteamLearnInferenceMetadataResponse_CompactTable {
  name: string;
  mapValues: CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry[];
  mapMappings: CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry[];
}

export interface CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry {
  value: number;
  mapping: number;
  count: string;
}

export interface CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry {
  key: number;
  value: CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry | undefined;
}

export interface CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry {
  key: number;
  value: CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry | undefined;
}

export interface CMsgSteamLearnInferenceMetadataResponse_KMeans {
  name: string;
  clusters: CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster[];
}

export interface CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster {
  x: number;
  y: number;
  radius: number;
  radius80pct: number;
}

export interface CMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram {
  minValue: number;
  maxValue: number;
  numBuckets: number;
  bucketCounts: number[];
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

  fromJSON(object: any): CMsgSteamLearnDataSourceDescObject {
    return {
      elements: Array.isArray(object?.elements)
        ? object.elements.map((e: any) => CMsgSteamLearnDataSourceDescElement.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSteamLearnDataSourceDescObject): unknown {
    const obj: any = {};
    if (message.elements) {
      obj.elements = message.elements.map((e) => e ? CMsgSteamLearnDataSourceDescElement.toJSON(e) : undefined);
    } else {
      obj.elements = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnDataSourceDescElement {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      dataType: isSet(object.dataType) ? eSteamLearnDataTypeFromJSON(object.dataType) : 0,
      object: isSet(object.object) ? CMsgSteamLearnDataSourceDescObject.fromJSON(object.object) : undefined,
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: CMsgSteamLearnDataSourceDescElement): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.dataType !== undefined && (obj.dataType = eSteamLearnDataTypeToJSON(message.dataType));
    message.object !== undefined &&
      (obj.object = message.object ? CMsgSteamLearnDataSourceDescObject.toJSON(message.object) : undefined);
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnDataSource {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      version: isSet(object.version) ? Number(object.version) : 0,
      sourceDescription: isSet(object.sourceDescription) ? String(object.sourceDescription) : "",
      structure: isSet(object.structure) ? CMsgSteamLearnDataSourceDescObject.fromJSON(object.structure) : undefined,
      structureCrc: isSet(object.structureCrc) ? Number(object.structureCrc) : 0,
      cacheDurationSeconds: isSet(object.cacheDurationSeconds) ? Number(object.cacheDurationSeconds) : 0,
    };
  },

  toJSON(message: CMsgSteamLearnDataSource): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.sourceDescription !== undefined && (obj.sourceDescription = message.sourceDescription);
    message.structure !== undefined &&
      (obj.structure = message.structure ? CMsgSteamLearnDataSourceDescObject.toJSON(message.structure) : undefined);
    message.structureCrc !== undefined && (obj.structureCrc = Math.round(message.structureCrc));
    message.cacheDurationSeconds !== undefined && (obj.cacheDurationSeconds = Math.round(message.cacheDurationSeconds));
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnDataObject {
    return {
      elements: Array.isArray(object?.elements)
        ? object.elements.map((e: any) => CMsgSteamLearnDataElement.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSteamLearnDataObject): unknown {
    const obj: any = {};
    if (message.elements) {
      obj.elements = message.elements.map((e) => e ? CMsgSteamLearnDataElement.toJSON(e) : undefined);
    } else {
      obj.elements = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnDataElement {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      dataInt32s: Array.isArray(object?.dataInt32s) ? object.dataInt32s.map((e: any) => Number(e)) : [],
      dataFloats: Array.isArray(object?.dataFloats) ? object.dataFloats.map((e: any) => Number(e)) : [],
      dataBools: Array.isArray(object?.dataBools) ? object.dataBools.map((e: any) => Boolean(e)) : [],
      dataStrings: Array.isArray(object?.dataStrings) ? object.dataStrings.map((e: any) => String(e)) : [],
      dataObjects: Array.isArray(object?.dataObjects)
        ? object.dataObjects.map((e: any) => CMsgSteamLearnDataObject.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSteamLearnDataElement): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.dataInt32s) {
      obj.dataInt32s = message.dataInt32s.map((e) => Math.round(e));
    } else {
      obj.dataInt32s = [];
    }
    if (message.dataFloats) {
      obj.dataFloats = message.dataFloats.map((e) => e);
    } else {
      obj.dataFloats = [];
    }
    if (message.dataBools) {
      obj.dataBools = message.dataBools.map((e) => e);
    } else {
      obj.dataBools = [];
    }
    if (message.dataStrings) {
      obj.dataStrings = message.dataStrings.map((e) => e);
    } else {
      obj.dataStrings = [];
    }
    if (message.dataObjects) {
      obj.dataObjects = message.dataObjects.map((e) => e ? CMsgSteamLearnDataObject.toJSON(e) : undefined);
    } else {
      obj.dataObjects = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnData {
    return {
      dataSourceId: isSet(object.dataSourceId) ? Number(object.dataSourceId) : 0,
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => String(e)) : [],
      dataObject: isSet(object.dataObject) ? CMsgSteamLearnDataObject.fromJSON(object.dataObject) : undefined,
    };
  },

  toJSON(message: CMsgSteamLearnData): unknown {
    const obj: any = {};
    message.dataSourceId !== undefined && (obj.dataSourceId = Math.round(message.dataSourceId));
    if (message.keys) {
      obj.keys = message.keys.map((e) => e);
    } else {
      obj.keys = [];
    }
    message.dataObject !== undefined &&
      (obj.dataObject = message.dataObject ? CMsgSteamLearnDataObject.toJSON(message.dataObject) : undefined);
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnDataList {
    return { data: Array.isArray(object?.data) ? object.data.map((e: any) => CMsgSteamLearnData.fromJSON(e)) : [] };
  },

  toJSON(message: CMsgSteamLearnDataList): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) => e ? CMsgSteamLearnData.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnAccessData {
    return {
      publisherId: isSet(object.publisherId) ? Number(object.publisherId) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      randomValue: isSet(object.randomValue) ? String(object.randomValue) : "0",
    };
  },

  toJSON(message: CMsgSteamLearnAccessData): unknown {
    const obj: any = {};
    message.publisherId !== undefined && (obj.publisherId = Math.round(message.publisherId));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.randomValue !== undefined && (obj.randomValue = message.randomValue);
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnRegisterDataSourceRequest {
    return {
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      accessData: isSet(object.accessData) ? CMsgSteamLearnAccessData.fromJSON(object.accessData) : undefined,
      dataSource: isSet(object.dataSource) ? CMsgSteamLearnDataSource.fromJSON(object.dataSource) : undefined,
    };
  },

  toJSON(message: CMsgSteamLearnRegisterDataSourceRequest): unknown {
    const obj: any = {};
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    message.accessData !== undefined &&
      (obj.accessData = message.accessData ? CMsgSteamLearnAccessData.toJSON(message.accessData) : undefined);
    message.dataSource !== undefined &&
      (obj.dataSource = message.dataSource ? CMsgSteamLearnDataSource.toJSON(message.dataSource) : undefined);
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnRegisterDataSourceResponse {
    return {
      result: isSet(object.result) ? eSteammLearnRegisterDataSourceResultFromJSON(object.result) : 0,
      dataSource: isSet(object.dataSource) ? CMsgSteamLearnDataSource.fromJSON(object.dataSource) : undefined,
    };
  },

  toJSON(message: CMsgSteamLearnRegisterDataSourceResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = eSteammLearnRegisterDataSourceResultToJSON(message.result));
    message.dataSource !== undefined &&
      (obj.dataSource = message.dataSource ? CMsgSteamLearnDataSource.toJSON(message.dataSource) : undefined);
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnCacheDataRequest {
    return {
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      accessData: isSet(object.accessData) ? CMsgSteamLearnAccessData.fromJSON(object.accessData) : undefined,
      data: isSet(object.data) ? CMsgSteamLearnData.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: CMsgSteamLearnCacheDataRequest): unknown {
    const obj: any = {};
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    message.accessData !== undefined &&
      (obj.accessData = message.accessData ? CMsgSteamLearnAccessData.toJSON(message.accessData) : undefined);
    message.data !== undefined && (obj.data = message.data ? CMsgSteamLearnData.toJSON(message.data) : undefined);
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnCacheDataResponse {
    return {
      cacheDataResult: isSet(object.cacheDataResult) ? eSteamLearnCacheDataResultFromJSON(object.cacheDataResult) : 0,
    };
  },

  toJSON(message: CMsgSteamLearnCacheDataResponse): unknown {
    const obj: any = {};
    message.cacheDataResult !== undefined &&
      (obj.cacheDataResult = eSteamLearnCacheDataResultToJSON(message.cacheDataResult));
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnSnapshotProjectRequest {
    return {
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      accessData: isSet(object.accessData) ? CMsgSteamLearnAccessData.fromJSON(object.accessData) : undefined,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      publishedVersion: isSet(object.publishedVersion) ? Number(object.publishedVersion) : 0,
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => String(e)) : [],
      data: Array.isArray(object?.data) ? object.data.map((e: any) => CMsgSteamLearnData.fromJSON(e)) : [],
      pendingDataLimitSeconds: isSet(object.pendingDataLimitSeconds) ? Number(object.pendingDataLimitSeconds) : 0,
    };
  },

  toJSON(message: CMsgSteamLearnSnapshotProjectRequest): unknown {
    const obj: any = {};
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    message.accessData !== undefined &&
      (obj.accessData = message.accessData ? CMsgSteamLearnAccessData.toJSON(message.accessData) : undefined);
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.publishedVersion !== undefined && (obj.publishedVersion = Math.round(message.publishedVersion));
    if (message.keys) {
      obj.keys = message.keys.map((e) => e);
    } else {
      obj.keys = [];
    }
    if (message.data) {
      obj.data = message.data.map((e) => e ? CMsgSteamLearnData.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    message.pendingDataLimitSeconds !== undefined &&
      (obj.pendingDataLimitSeconds = Math.round(message.pendingDataLimitSeconds));
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnSnapshotProjectResponse {
    return {
      snapshotResult: isSet(object.snapshotResult)
        ? eSteamLearnSnapshotProjectResultFromJSON(object.snapshotResult)
        : 0,
    };
  },

  toJSON(message: CMsgSteamLearnSnapshotProjectResponse): unknown {
    const obj: any = {};
    message.snapshotResult !== undefined &&
      (obj.snapshotResult = eSteamLearnSnapshotProjectResultToJSON(message.snapshotResult));
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnBatchOperationRequest {
    return {
      cacheDataRequests: Array.isArray(object?.cacheDataRequests)
        ? object.cacheDataRequests.map((e: any) => CMsgSteamLearnCacheDataRequest.fromJSON(e))
        : [],
      snapshotRequests: Array.isArray(object?.snapshotRequests)
        ? object.snapshotRequests.map((e: any) => CMsgSteamLearnSnapshotProjectRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSteamLearnBatchOperationRequest): unknown {
    const obj: any = {};
    if (message.cacheDataRequests) {
      obj.cacheDataRequests = message.cacheDataRequests.map((e) =>
        e ? CMsgSteamLearnCacheDataRequest.toJSON(e) : undefined
      );
    } else {
      obj.cacheDataRequests = [];
    }
    if (message.snapshotRequests) {
      obj.snapshotRequests = message.snapshotRequests.map((e) =>
        e ? CMsgSteamLearnSnapshotProjectRequest.toJSON(e) : undefined
      );
    } else {
      obj.snapshotRequests = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnBatchOperationResponse {
    return {
      cacheDataResponses: Array.isArray(object?.cacheDataResponses)
        ? object.cacheDataResponses.map((e: any) => CMsgSteamLearnCacheDataResponse.fromJSON(e))
        : [],
      snapshotResponses: Array.isArray(object?.snapshotResponses)
        ? object.snapshotResponses.map((e: any) => CMsgSteamLearnSnapshotProjectResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSteamLearnBatchOperationResponse): unknown {
    const obj: any = {};
    if (message.cacheDataResponses) {
      obj.cacheDataResponses = message.cacheDataResponses.map((e) =>
        e ? CMsgSteamLearnCacheDataResponse.toJSON(e) : undefined
      );
    } else {
      obj.cacheDataResponses = [];
    }
    if (message.snapshotResponses) {
      obj.snapshotResponses = message.snapshotResponses.map((e) =>
        e ? CMsgSteamLearnSnapshotProjectResponse.toJSON(e) : undefined
      );
    } else {
      obj.snapshotResponses = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnHMACKeys {
    return {
      registerDataSourceKey: isSet(object.registerDataSourceKey) ? String(object.registerDataSourceKey) : "",
      cacheDataKeys: Array.isArray(object?.cacheDataKeys)
        ? object.cacheDataKeys.map((e: any) => CMsgSteamLearnHMACKeys_CacheDataKeys.fromJSON(e))
        : [],
      snapshotProjectKeys: Array.isArray(object?.snapshotProjectKeys)
        ? object.snapshotProjectKeys.map((e: any) => CMsgSteamLearnHMACKeys_SnapshotProjectKeys.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSteamLearnHMACKeys): unknown {
    const obj: any = {};
    message.registerDataSourceKey !== undefined && (obj.registerDataSourceKey = message.registerDataSourceKey);
    if (message.cacheDataKeys) {
      obj.cacheDataKeys = message.cacheDataKeys.map((e) =>
        e ? CMsgSteamLearnHMACKeys_CacheDataKeys.toJSON(e) : undefined
      );
    } else {
      obj.cacheDataKeys = [];
    }
    if (message.snapshotProjectKeys) {
      obj.snapshotProjectKeys = message.snapshotProjectKeys.map((e) =>
        e ? CMsgSteamLearnHMACKeys_SnapshotProjectKeys.toJSON(e) : undefined
      );
    } else {
      obj.snapshotProjectKeys = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnHMACKeys_CacheDataKeys {
    return {
      dataSourceId: isSet(object.dataSourceId) ? Number(object.dataSourceId) : 0,
      version: isSet(object.version) ? Number(object.version) : 0,
      key: isSet(object.key) ? String(object.key) : "",
    };
  },

  toJSON(message: CMsgSteamLearnHMACKeys_CacheDataKeys): unknown {
    const obj: any = {};
    message.dataSourceId !== undefined && (obj.dataSourceId = Math.round(message.dataSourceId));
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.key !== undefined && (obj.key = message.key);
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnHMACKeys_SnapshotProjectKeys {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      publishedVersion: isSet(object.publishedVersion) ? Number(object.publishedVersion) : 0,
      key: isSet(object.key) ? String(object.key) : "",
    };
  },

  toJSON(message: CMsgSteamLearnHMACKeys_SnapshotProjectKeys): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.publishedVersion !== undefined && (obj.publishedVersion = Math.round(message.publishedVersion));
    message.key !== undefined && (obj.key = message.key);
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnGetHMACKeysRequest {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CMsgSteamLearnGetHMACKeysRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnGetHMACKeysResponse {
    return {
      result: isSet(object.result) ? eSteamLearnGetHMACKeysResultFromJSON(object.result) : 0,
      keys: isSet(object.keys) ? CMsgSteamLearnHMACKeys.fromJSON(object.keys) : undefined,
    };
  },

  toJSON(message: CMsgSteamLearnGetHMACKeysResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = eSteamLearnGetHMACKeysResultToJSON(message.result));
    message.keys !== undefined && (obj.keys = message.keys ? CMsgSteamLearnHMACKeys.toJSON(message.keys) : undefined);
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnInferenceRequest {
    return {
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      accessData: isSet(object.accessData) ? CMsgSteamLearnAccessData.fromJSON(object.accessData) : undefined,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      publishedVersion: isSet(object.publishedVersion) ? Number(object.publishedVersion) : 0,
      overrideTrainId: isSet(object.overrideTrainId) ? Number(object.overrideTrainId) : 0,
      data: isSet(object.data) ? CMsgSteamLearnDataList.fromJSON(object.data) : undefined,
      additionalData: Array.isArray(object?.additionalData) ? object.additionalData.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgSteamLearnInferenceRequest): unknown {
    const obj: any = {};
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    message.accessData !== undefined &&
      (obj.accessData = message.accessData ? CMsgSteamLearnAccessData.toJSON(message.accessData) : undefined);
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.publishedVersion !== undefined && (obj.publishedVersion = Math.round(message.publishedVersion));
    message.overrideTrainId !== undefined && (obj.overrideTrainId = Math.round(message.overrideTrainId));
    message.data !== undefined && (obj.data = message.data ? CMsgSteamLearnDataList.toJSON(message.data) : undefined);
    if (message.additionalData) {
      obj.additionalData = message.additionalData.map((e) => e);
    } else {
      obj.additionalData = [];
    }
    return obj;
  },
};

function createBaseCMsgSteamLearnInferenceMetadataRequest(): CMsgSteamLearnInferenceMetadataRequest {
  return { accessToken: "", accessData: undefined, projectId: 0, publishedVersion: 0, overrideTrainId: 0 };
}

export const CMsgSteamLearnInferenceMetadataRequest = {
  encode(message: CMsgSteamLearnInferenceMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnInferenceMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnInferenceMetadataRequest();
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
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamLearnInferenceMetadataRequest {
    return {
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      accessData: isSet(object.accessData) ? CMsgSteamLearnAccessData.fromJSON(object.accessData) : undefined,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      publishedVersion: isSet(object.publishedVersion) ? Number(object.publishedVersion) : 0,
      overrideTrainId: isSet(object.overrideTrainId) ? Number(object.overrideTrainId) : 0,
    };
  },

  toJSON(message: CMsgSteamLearnInferenceMetadataRequest): unknown {
    const obj: any = {};
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    message.accessData !== undefined &&
      (obj.accessData = message.accessData ? CMsgSteamLearnAccessData.toJSON(message.accessData) : undefined);
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.publishedVersion !== undefined && (obj.publishedVersion = Math.round(message.publishedVersion));
    message.overrideTrainId !== undefined && (obj.overrideTrainId = Math.round(message.overrideTrainId));
    return obj;
  },
};

function createBaseCMsgSteamLearnInferenceMetadataBackendRequest(): CMsgSteamLearnInferenceMetadataBackendRequest {
  return { projectId: 0, fetchId: 0 };
}

export const CMsgSteamLearnInferenceMetadataBackendRequest = {
  encode(message: CMsgSteamLearnInferenceMetadataBackendRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).uint32(message.projectId);
    }
    if (message.fetchId !== 0) {
      writer.uint32(16).uint32(message.fetchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnInferenceMetadataBackendRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnInferenceMetadataBackendRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.projectId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.fetchId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamLearnInferenceMetadataBackendRequest {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      fetchId: isSet(object.fetchId) ? Number(object.fetchId) : 0,
    };
  },

  toJSON(message: CMsgSteamLearnInferenceMetadataBackendRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.fetchId !== undefined && (obj.fetchId = Math.round(message.fetchId));
    return obj;
  },
};

function createBaseCMsgSteamLearnInferenceMetadataResponse(): CMsgSteamLearnInferenceMetadataResponse {
  return {
    inferenceMetadataResult: 0,
    rowRange: undefined,
    ranges: [],
    stdDevs: [],
    compactTables: [],
    kmeans: [],
    snapshotHistogram: undefined,
  };
}

export const CMsgSteamLearnInferenceMetadataResponse = {
  encode(message: CMsgSteamLearnInferenceMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inferenceMetadataResult !== 0) {
      writer.uint32(8).int32(message.inferenceMetadataResult);
    }
    if (message.rowRange !== undefined) {
      CMsgSteamLearnInferenceMetadataResponse_RowRange.encode(message.rowRange, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.ranges) {
      CMsgSteamLearnInferenceMetadataResponse_Range.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.stdDevs) {
      CMsgSteamLearnInferenceMetadataResponse_StdDev.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.compactTables) {
      CMsgSteamLearnInferenceMetadataResponse_CompactTable.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.kmeans) {
      CMsgSteamLearnInferenceMetadataResponse_KMeans.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.snapshotHistogram !== undefined) {
      CMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram.encode(
        message.snapshotHistogram,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnInferenceMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnInferenceMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.inferenceMetadataResult = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.rowRange = CMsgSteamLearnInferenceMetadataResponse_RowRange.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.ranges.push(CMsgSteamLearnInferenceMetadataResponse_Range.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.stdDevs.push(CMsgSteamLearnInferenceMetadataResponse_StdDev.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.compactTables.push(
            CMsgSteamLearnInferenceMetadataResponse_CompactTable.decode(reader, reader.uint32()),
          );
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.kmeans.push(CMsgSteamLearnInferenceMetadataResponse_KMeans.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.snapshotHistogram = CMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram.decode(
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

  fromJSON(object: any): CMsgSteamLearnInferenceMetadataResponse {
    return {
      inferenceMetadataResult: isSet(object.inferenceMetadataResult)
        ? eSteamLearnInferenceMetadataResultFromJSON(object.inferenceMetadataResult)
        : 0,
      rowRange: isSet(object.rowRange)
        ? CMsgSteamLearnInferenceMetadataResponse_RowRange.fromJSON(object.rowRange)
        : undefined,
      ranges: Array.isArray(object?.ranges)
        ? object.ranges.map((e: any) => CMsgSteamLearnInferenceMetadataResponse_Range.fromJSON(e))
        : [],
      stdDevs: Array.isArray(object?.stdDevs)
        ? object.stdDevs.map((e: any) => CMsgSteamLearnInferenceMetadataResponse_StdDev.fromJSON(e))
        : [],
      compactTables: Array.isArray(object?.compactTables)
        ? object.compactTables.map((e: any) => CMsgSteamLearnInferenceMetadataResponse_CompactTable.fromJSON(e))
        : [],
      kmeans: Array.isArray(object?.kmeans)
        ? object.kmeans.map((e: any) => CMsgSteamLearnInferenceMetadataResponse_KMeans.fromJSON(e))
        : [],
      snapshotHistogram: isSet(object.snapshotHistogram)
        ? CMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram.fromJSON(object.snapshotHistogram)
        : undefined,
    };
  },

  toJSON(message: CMsgSteamLearnInferenceMetadataResponse): unknown {
    const obj: any = {};
    message.inferenceMetadataResult !== undefined &&
      (obj.inferenceMetadataResult = eSteamLearnInferenceMetadataResultToJSON(message.inferenceMetadataResult));
    message.rowRange !== undefined && (obj.rowRange = message.rowRange
      ? CMsgSteamLearnInferenceMetadataResponse_RowRange.toJSON(message.rowRange)
      : undefined);
    if (message.ranges) {
      obj.ranges = message.ranges.map((e) => e ? CMsgSteamLearnInferenceMetadataResponse_Range.toJSON(e) : undefined);
    } else {
      obj.ranges = [];
    }
    if (message.stdDevs) {
      obj.stdDevs = message.stdDevs.map((e) =>
        e ? CMsgSteamLearnInferenceMetadataResponse_StdDev.toJSON(e) : undefined
      );
    } else {
      obj.stdDevs = [];
    }
    if (message.compactTables) {
      obj.compactTables = message.compactTables.map((e) =>
        e ? CMsgSteamLearnInferenceMetadataResponse_CompactTable.toJSON(e) : undefined
      );
    } else {
      obj.compactTables = [];
    }
    if (message.kmeans) {
      obj.kmeans = message.kmeans.map((e) => e ? CMsgSteamLearnInferenceMetadataResponse_KMeans.toJSON(e) : undefined);
    } else {
      obj.kmeans = [];
    }
    message.snapshotHistogram !== undefined && (obj.snapshotHistogram = message.snapshotHistogram
      ? CMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram.toJSON(message.snapshotHistogram)
      : undefined);
    return obj;
  },
};

function createBaseCMsgSteamLearnInferenceMetadataResponse_RowRange(): CMsgSteamLearnInferenceMetadataResponse_RowRange {
  return { minRow: "0", maxRow: "0" };
}

export const CMsgSteamLearnInferenceMetadataResponse_RowRange = {
  encode(
    message: CMsgSteamLearnInferenceMetadataResponse_RowRange,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.minRow !== "0") {
      writer.uint32(8).uint64(message.minRow);
    }
    if (message.maxRow !== "0") {
      writer.uint32(16).uint64(message.maxRow);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnInferenceMetadataResponse_RowRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnInferenceMetadataResponse_RowRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.minRow = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.maxRow = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamLearnInferenceMetadataResponse_RowRange {
    return {
      minRow: isSet(object.minRow) ? String(object.minRow) : "0",
      maxRow: isSet(object.maxRow) ? String(object.maxRow) : "0",
    };
  },

  toJSON(message: CMsgSteamLearnInferenceMetadataResponse_RowRange): unknown {
    const obj: any = {};
    message.minRow !== undefined && (obj.minRow = message.minRow);
    message.maxRow !== undefined && (obj.maxRow = message.maxRow);
    return obj;
  },
};

function createBaseCMsgSteamLearnInferenceMetadataResponse_Range(): CMsgSteamLearnInferenceMetadataResponse_Range {
  return { dataElementPath: "", minValue: 0, maxValues: 0 };
}

export const CMsgSteamLearnInferenceMetadataResponse_Range = {
  encode(message: CMsgSteamLearnInferenceMetadataResponse_Range, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataElementPath !== "") {
      writer.uint32(10).string(message.dataElementPath);
    }
    if (message.minValue !== 0) {
      writer.uint32(16).int32(message.minValue);
    }
    if (message.maxValues !== 0) {
      writer.uint32(24).int32(message.maxValues);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnInferenceMetadataResponse_Range {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnInferenceMetadataResponse_Range();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.dataElementPath = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.minValue = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.maxValues = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamLearnInferenceMetadataResponse_Range {
    return {
      dataElementPath: isSet(object.dataElementPath) ? String(object.dataElementPath) : "",
      minValue: isSet(object.minValue) ? Number(object.minValue) : 0,
      maxValues: isSet(object.maxValues) ? Number(object.maxValues) : 0,
    };
  },

  toJSON(message: CMsgSteamLearnInferenceMetadataResponse_Range): unknown {
    const obj: any = {};
    message.dataElementPath !== undefined && (obj.dataElementPath = message.dataElementPath);
    message.minValue !== undefined && (obj.minValue = Math.round(message.minValue));
    message.maxValues !== undefined && (obj.maxValues = Math.round(message.maxValues));
    return obj;
  },
};

function createBaseCMsgSteamLearnInferenceMetadataResponse_StdDev(): CMsgSteamLearnInferenceMetadataResponse_StdDev {
  return { dataElementPath: "", mean: 0, stdDev: 0 };
}

export const CMsgSteamLearnInferenceMetadataResponse_StdDev = {
  encode(
    message: CMsgSteamLearnInferenceMetadataResponse_StdDev,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.dataElementPath !== "") {
      writer.uint32(10).string(message.dataElementPath);
    }
    if (message.mean !== 0) {
      writer.uint32(16).int32(message.mean);
    }
    if (message.stdDev !== 0) {
      writer.uint32(24).uint32(message.stdDev);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnInferenceMetadataResponse_StdDev {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnInferenceMetadataResponse_StdDev();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.dataElementPath = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.mean = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.stdDev = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamLearnInferenceMetadataResponse_StdDev {
    return {
      dataElementPath: isSet(object.dataElementPath) ? String(object.dataElementPath) : "",
      mean: isSet(object.mean) ? Number(object.mean) : 0,
      stdDev: isSet(object.stdDev) ? Number(object.stdDev) : 0,
    };
  },

  toJSON(message: CMsgSteamLearnInferenceMetadataResponse_StdDev): unknown {
    const obj: any = {};
    message.dataElementPath !== undefined && (obj.dataElementPath = message.dataElementPath);
    message.mean !== undefined && (obj.mean = Math.round(message.mean));
    message.stdDev !== undefined && (obj.stdDev = Math.round(message.stdDev));
    return obj;
  },
};

function createBaseCMsgSteamLearnInferenceMetadataResponse_CompactTable(): CMsgSteamLearnInferenceMetadataResponse_CompactTable {
  return { name: "", mapValues: [], mapMappings: [] };
}

export const CMsgSteamLearnInferenceMetadataResponse_CompactTable = {
  encode(
    message: CMsgSteamLearnInferenceMetadataResponse_CompactTable,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.mapValues) {
      CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.mapMappings) {
      CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry.encode(v!, writer.uint32(26).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnInferenceMetadataResponse_CompactTable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnInferenceMetadataResponse_CompactTable();
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
          if (tag != 18) {
            break;
          }

          message.mapValues.push(
            CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.mapMappings.push(
            CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry.decode(reader, reader.uint32()),
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

  fromJSON(object: any): CMsgSteamLearnInferenceMetadataResponse_CompactTable {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      mapValues: Array.isArray(object?.mapValues)
        ? object.mapValues.map((e: any) =>
          CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry.fromJSON(e)
        )
        : [],
      mapMappings: Array.isArray(object?.mapMappings)
        ? object.mapMappings.map((e: any) =>
          CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CMsgSteamLearnInferenceMetadataResponse_CompactTable): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.mapValues) {
      obj.mapValues = message.mapValues.map((e) =>
        e ? CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry.toJSON(e) : undefined
      );
    } else {
      obj.mapValues = [];
    }
    if (message.mapMappings) {
      obj.mapMappings = message.mapMappings.map((e) =>
        e ? CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry.toJSON(e) : undefined
      );
    } else {
      obj.mapMappings = [];
    }
    return obj;
  },
};

function createBaseCMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry(): CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry {
  return { value: 0, mapping: 0, count: "0" };
}

export const CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry = {
  encode(
    message: CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).uint32(message.value);
    }
    if (message.mapping !== 0) {
      writer.uint32(16).uint32(message.mapping);
    }
    if (message.count !== "0") {
      writer.uint32(24).uint64(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.value = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.mapping = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.count = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry {
    return {
      value: isSet(object.value) ? Number(object.value) : 0,
      mapping: isSet(object.mapping) ? Number(object.mapping) : 0,
      count: isSet(object.count) ? String(object.count) : "0",
    };
  },

  toJSON(message: CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    message.mapping !== undefined && (obj.mapping = Math.round(message.mapping));
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },
};

function createBaseCMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry(): CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry {
  return { key: 0, value: undefined };
}

export const CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry = {
  encode(
    message: CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry.encode(message.value, writer.uint32(18).fork())
        .ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.key = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value)
        ? CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = message.value
      ? CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry.toJSON(message.value)
      : undefined);
    return obj;
  },
};

function createBaseCMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry(): CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry {
  return { key: 0, value: undefined };
}

export const CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry = {
  encode(
    message: CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry.encode(message.value, writer.uint32(18).fork())
        .ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.key = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value)
        ? CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = message.value
      ? CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry.toJSON(message.value)
      : undefined);
    return obj;
  },
};

function createBaseCMsgSteamLearnInferenceMetadataResponse_KMeans(): CMsgSteamLearnInferenceMetadataResponse_KMeans {
  return { name: "", clusters: [] };
}

export const CMsgSteamLearnInferenceMetadataResponse_KMeans = {
  encode(
    message: CMsgSteamLearnInferenceMetadataResponse_KMeans,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.clusters) {
      CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnInferenceMetadataResponse_KMeans {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnInferenceMetadataResponse_KMeans();
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
          if (tag != 18) {
            break;
          }

          message.clusters.push(CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamLearnInferenceMetadataResponse_KMeans {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      clusters: Array.isArray(object?.clusters)
        ? object.clusters.map((e: any) => CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSteamLearnInferenceMetadataResponse_KMeans): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.clusters) {
      obj.clusters = message.clusters.map((e) =>
        e ? CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster.toJSON(e) : undefined
      );
    } else {
      obj.clusters = [];
    }
    return obj;
  },
};

function createBaseCMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster(): CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster {
  return { x: 0, y: 0, radius: 0, radius80pct: 0 };
}

export const CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster = {
  encode(
    message: CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.radius !== 0) {
      writer.uint32(29).float(message.radius);
    }
    if (message.radius80pct !== 0) {
      writer.uint32(37).float(message.radius80pct);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.x = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.y = reader.float();
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

          message.radius80pct = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
      radius80pct: isSet(object.radius80pct) ? Number(object.radius80pct) : 0,
    };
  },

  toJSON(message: CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.radius !== undefined && (obj.radius = message.radius);
    message.radius80pct !== undefined && (obj.radius80pct = message.radius80pct);
    return obj;
  },
};

function createBaseCMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram(): CMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram {
  return { minValue: 0, maxValue: 0, numBuckets: 0, bucketCounts: [] };
}

export const CMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram = {
  encode(
    message: CMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.minValue !== 0) {
      writer.uint32(13).float(message.minValue);
    }
    if (message.maxValue !== 0) {
      writer.uint32(21).float(message.maxValue);
    }
    if (message.numBuckets !== 0) {
      writer.uint32(24).uint32(message.numBuckets);
    }
    writer.uint32(34).fork();
    for (const v of message.bucketCounts) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.minValue = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.maxValue = reader.float();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.numBuckets = reader.uint32();
          continue;
        case 4:
          if (tag == 32) {
            message.bucketCounts.push(reader.uint32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.bucketCounts.push(reader.uint32());
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

  fromJSON(object: any): CMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram {
    return {
      minValue: isSet(object.minValue) ? Number(object.minValue) : 0,
      maxValue: isSet(object.maxValue) ? Number(object.maxValue) : 0,
      numBuckets: isSet(object.numBuckets) ? Number(object.numBuckets) : 0,
      bucketCounts: Array.isArray(object?.bucketCounts) ? object.bucketCounts.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram): unknown {
    const obj: any = {};
    message.minValue !== undefined && (obj.minValue = message.minValue);
    message.maxValue !== undefined && (obj.maxValue = message.maxValue);
    message.numBuckets !== undefined && (obj.numBuckets = Math.round(message.numBuckets));
    if (message.bucketCounts) {
      obj.bucketCounts = message.bucketCounts.map((e) => Math.round(e));
    } else {
      obj.bucketCounts = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnInferenceBackendResponse {
    return {
      outputs: Array.isArray(object?.outputs)
        ? object.outputs.map((e: any) => CMsgSteamLearnInferenceBackendResponse_Output.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSteamLearnInferenceBackendResponse): unknown {
    const obj: any = {};
    if (message.outputs) {
      obj.outputs = message.outputs.map((e) => e ? CMsgSteamLearnInferenceBackendResponse_Output.toJSON(e) : undefined);
    } else {
      obj.outputs = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput {
    return { value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput {
    return {
      weight: Array.isArray(object?.weight) ? object.weight.map((e: any) => Number(e)) : [],
      value: Array.isArray(object?.value) ? object.value.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput): unknown {
    const obj: any = {};
    if (message.weight) {
      obj.weight = message.weight.map((e) => e);
    } else {
      obj.weight = [];
    }
    if (message.value) {
      obj.value = message.value.map((e) => e);
    } else {
      obj.value = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput {
    return {
      weight: Array.isArray(object?.weight) ? object.weight.map((e: any) => Number(e)) : [],
      value: Array.isArray(object?.value) ? object.value.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput): unknown {
    const obj: any = {};
    if (message.weight) {
      obj.weight = message.weight.map((e) => e);
    } else {
      obj.weight = [];
    }
    if (message.value) {
      obj.value = message.value.map((e) => e);
    } else {
      obj.value = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnInferenceBackendResponse_Output {
    return {
      binaryCrossentropy: isSet(object.binaryCrossentropy)
        ? CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput.fromJSON(object.binaryCrossentropy)
        : undefined,
      categoricalCrossentropy: isSet(object.categoricalCrossentropy)
        ? CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput.fromJSON(object.categoricalCrossentropy)
        : undefined,
      multiBinaryCrossentropy: isSet(object.multiBinaryCrossentropy)
        ? CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput.fromJSON(object.multiBinaryCrossentropy)
        : undefined,
    };
  },

  toJSON(message: CMsgSteamLearnInferenceBackendResponse_Output): unknown {
    const obj: any = {};
    message.binaryCrossentropy !== undefined && (obj.binaryCrossentropy = message.binaryCrossentropy
      ? CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput.toJSON(message.binaryCrossentropy)
      : undefined);
    message.categoricalCrossentropy !== undefined && (obj.categoricalCrossentropy = message.categoricalCrossentropy
      ? CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput.toJSON(message.categoricalCrossentropy)
      : undefined);
    message.multiBinaryCrossentropy !== undefined && (obj.multiBinaryCrossentropy = message.multiBinaryCrossentropy
      ? CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput.toJSON(message.multiBinaryCrossentropy)
      : undefined);
    return obj;
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

  fromJSON(object: any): CMsgSteamLearnInferenceResponse {
    return {
      inferenceResult: isSet(object.inferenceResult) ? eSteamLearnInferenceResultFromJSON(object.inferenceResult) : 0,
      backendResponse: isSet(object.backendResponse)
        ? CMsgSteamLearnInferenceBackendResponse.fromJSON(object.backendResponse)
        : undefined,
    };
  },

  toJSON(message: CMsgSteamLearnInferenceResponse): unknown {
    const obj: any = {};
    message.inferenceResult !== undefined &&
      (obj.inferenceResult = eSteamLearnInferenceResultToJSON(message.inferenceResult));
    message.backendResponse !== undefined && (obj.backendResponse = message.backendResponse
      ? CMsgSteamLearnInferenceBackendResponse.toJSON(message.backendResponse)
      : undefined);
    return obj;
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
  InferenceMetadata(request: CMsgSteamLearnInferenceMetadataRequest): Promise<CMsgSteamLearnInferenceMetadataResponse>;
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
    this.InferenceMetadata = this.InferenceMetadata.bind(this);
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

  InferenceMetadata(request: CMsgSteamLearnInferenceMetadataRequest): Promise<CMsgSteamLearnInferenceMetadataResponse> {
    const data = CMsgSteamLearnInferenceMetadataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "InferenceMetadata", data);
    return promise.then((data) => CMsgSteamLearnInferenceMetadataResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
