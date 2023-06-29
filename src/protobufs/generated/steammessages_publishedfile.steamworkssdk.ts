/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface CPublishedFileSubscribeRequest {
  publishedfileid: string;
  listType: number;
  appid: number;
  notifyClient: boolean;
}

export interface CPublishedFileSubscribeResponse {
}

export interface CPublishedFileUnsubscribeRequest {
  publishedfileid: string;
  listType: number;
  appid: number;
  notifyClient: boolean;
}

export interface CPublishedFileUnsubscribeResponse {
}

export interface CPublishedFilePublishRequest {
  appid: number;
  consumerAppid: number;
  cloudfilename: string;
  previewCloudfilename: string;
  title: string;
  fileDescription: string;
  fileType: number;
  consumerShortcutName: string;
  youtubeUsername: string;
  youtubeVideoid: string;
  visibility: number;
  redirectUri: string;
  tags: string[];
  collectionType: string;
  gameType: string;
  url: string;
}

export interface CPublishedFilePublishResponse {
  publishedfileid: string;
  redirectUri: string;
}

export interface CPublishedFileGetDetailsRequest {
  publishedfileids: string[];
  includetags: boolean;
  includeadditionalpreviews: boolean;
  includechildren: boolean;
  includekvtags: boolean;
  includevotes: boolean;
  shortDescription: boolean;
}

export interface PublishedFileDetails {
  result: number;
  publishedfileid: string;
  creator: string;
  creatorAppid: number;
  consumerAppid: number;
  consumerShortcutid: number;
  filename: string;
  fileSize: string;
  previewFileSize: string;
  fileUrl: string;
  previewUrl: string;
  youtubevideoid: string;
  url: string;
  hcontentFile: string;
  hcontentPreview: string;
  title: string;
  fileDescription: string;
  shortDescription: string;
  timeCreated: number;
  timeUpdated: number;
  visibility: number;
  flags: number;
  workshopFile: boolean;
  workshopAccepted: boolean;
  showSubscribeAll: boolean;
  numCommentsDeveloper: number;
  numCommentsPublic: number;
  banned: boolean;
  banReason: string;
  banner: string;
  canBeDeleted: boolean;
  incompatible: boolean;
  appName: string;
  fileType: number;
  canSubscribe: boolean;
  subscriptions: number;
  favorited: number;
  followers: number;
  lifetimeSubscriptions: number;
  lifetimeFavorited: number;
  lifetimeFollowers: number;
  views: number;
  imageWidth: number;
  imageHeight: number;
  imageUrl: string;
  spoilerTag: boolean;
  shortcutid: number;
  shortcutname: string;
  numChildren: number;
  numReports: number;
  previews: PublishedFileDetails_Preview[];
  tags: PublishedFileDetails_Tag[];
  children: PublishedFileDetails_Child[];
  kvtags: PublishedFileDetails_KVTag[];
  voteData: PublishedFileDetails_VoteData | undefined;
  timeSubscribed: number;
}

export interface PublishedFileDetails_Tag {
  tag: string;
  adminonly: boolean;
}

export interface PublishedFileDetails_Preview {
  previewid: string;
  sortorder: number;
  url: string;
  size: number;
  filename: string;
  youtubevideoid: string;
}

export interface PublishedFileDetails_Child {
  publishedfileid: string;
  sortorder: number;
  fileType: number;
}

export interface PublishedFileDetails_KVTag {
  key: string;
  value: string;
}

export interface PublishedFileDetails_VoteData {
  score: number;
  votesUp: number;
  votesDown: number;
}

export interface CPublishedFileGetDetailsResponse {
  publishedfiledetails: PublishedFileDetails[];
}

export interface CPublishedFileGetUserFilesRequest {
  appid: number;
  page: number;
  numperpage: number;
  sortmethod: string;
  totalonly: boolean;
  privacy: number;
  idsOnly: boolean;
  requiredtags: string[];
  excludedtags: string[];
}

export interface CPublishedFileGetUserFilesResponse {
  total: number;
  startindex: number;
  publishedfiledetails: PublishedFileDetails[];
  apps: CPublishedFileGetUserFilesResponse_App[];
}

export interface CPublishedFileGetUserFilesResponse_App {
  appid: number;
  name: string;
  shortcutid: number;
  private: boolean;
}

export interface CPublishedFileUpdateRequest {
  appid: number;
  publishedfileid: string;
  title: string;
  fileDescription: string;
  visibility: number;
  tags: string[];
  filename: string;
  previewFilename: string;
}

export interface CPublishedFileUpdateResponse {
}

export interface CPublishedFileRefreshVotingQueueRequest {
  appid: number;
  matchingFileType: number;
  tags: string[];
  matchAllTags: boolean;
  excludedTags: string[];
  desiredQueueSize: number;
}

export interface CPublishedFileRefreshVotingQueueResponse {
}

function createBaseCPublishedFileSubscribeRequest(): CPublishedFileSubscribeRequest {
  return { publishedfileid: "0", listType: 0, appid: 0, notifyClient: false };
}

export const CPublishedFileSubscribeRequest = {
  encode(message: CPublishedFileSubscribeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedfileid !== "0") {
      writer.uint32(8).uint64(message.publishedfileid);
    }
    if (message.listType !== 0) {
      writer.uint32(16).uint32(message.listType);
    }
    if (message.appid !== 0) {
      writer.uint32(24).int32(message.appid);
    }
    if (message.notifyClient === true) {
      writer.uint32(32).bool(message.notifyClient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileSubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileSubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.publishedfileid = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.listType = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.appid = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.notifyClient = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileSubscribeRequest {
    return {
      publishedfileid: isSet(object.publishedfileid) ? String(object.publishedfileid) : "0",
      listType: isSet(object.listType) ? Number(object.listType) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      notifyClient: isSet(object.notifyClient) ? Boolean(object.notifyClient) : false,
    };
  },

  toJSON(message: CPublishedFileSubscribeRequest): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = message.publishedfileid);
    message.listType !== undefined && (obj.listType = Math.round(message.listType));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.notifyClient !== undefined && (obj.notifyClient = message.notifyClient);
    return obj;
  },
};

function createBaseCPublishedFileSubscribeResponse(): CPublishedFileSubscribeResponse {
  return {};
}

export const CPublishedFileSubscribeResponse = {
  encode(_: CPublishedFileSubscribeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileSubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileSubscribeResponse();
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

  fromJSON(_: any): CPublishedFileSubscribeResponse {
    return {};
  },

  toJSON(_: CPublishedFileSubscribeResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCPublishedFileUnsubscribeRequest(): CPublishedFileUnsubscribeRequest {
  return { publishedfileid: "0", listType: 0, appid: 0, notifyClient: false };
}

export const CPublishedFileUnsubscribeRequest = {
  encode(message: CPublishedFileUnsubscribeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedfileid !== "0") {
      writer.uint32(8).uint64(message.publishedfileid);
    }
    if (message.listType !== 0) {
      writer.uint32(16).uint32(message.listType);
    }
    if (message.appid !== 0) {
      writer.uint32(24).int32(message.appid);
    }
    if (message.notifyClient === true) {
      writer.uint32(32).bool(message.notifyClient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileUnsubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileUnsubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.publishedfileid = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.listType = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.appid = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.notifyClient = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileUnsubscribeRequest {
    return {
      publishedfileid: isSet(object.publishedfileid) ? String(object.publishedfileid) : "0",
      listType: isSet(object.listType) ? Number(object.listType) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      notifyClient: isSet(object.notifyClient) ? Boolean(object.notifyClient) : false,
    };
  },

  toJSON(message: CPublishedFileUnsubscribeRequest): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = message.publishedfileid);
    message.listType !== undefined && (obj.listType = Math.round(message.listType));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.notifyClient !== undefined && (obj.notifyClient = message.notifyClient);
    return obj;
  },
};

function createBaseCPublishedFileUnsubscribeResponse(): CPublishedFileUnsubscribeResponse {
  return {};
}

export const CPublishedFileUnsubscribeResponse = {
  encode(_: CPublishedFileUnsubscribeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileUnsubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileUnsubscribeResponse();
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

  fromJSON(_: any): CPublishedFileUnsubscribeResponse {
    return {};
  },

  toJSON(_: CPublishedFileUnsubscribeResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCPublishedFilePublishRequest(): CPublishedFilePublishRequest {
  return {
    appid: 0,
    consumerAppid: 0,
    cloudfilename: "",
    previewCloudfilename: "",
    title: "",
    fileDescription: "",
    fileType: 0,
    consumerShortcutName: "",
    youtubeUsername: "",
    youtubeVideoid: "",
    visibility: 0,
    redirectUri: "",
    tags: [],
    collectionType: "",
    gameType: "",
    url: "",
  };
}

export const CPublishedFilePublishRequest = {
  encode(message: CPublishedFilePublishRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.consumerAppid !== 0) {
      writer.uint32(16).uint32(message.consumerAppid);
    }
    if (message.cloudfilename !== "") {
      writer.uint32(26).string(message.cloudfilename);
    }
    if (message.previewCloudfilename !== "") {
      writer.uint32(34).string(message.previewCloudfilename);
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.fileDescription !== "") {
      writer.uint32(50).string(message.fileDescription);
    }
    if (message.fileType !== 0) {
      writer.uint32(56).uint32(message.fileType);
    }
    if (message.consumerShortcutName !== "") {
      writer.uint32(66).string(message.consumerShortcutName);
    }
    if (message.youtubeUsername !== "") {
      writer.uint32(74).string(message.youtubeUsername);
    }
    if (message.youtubeVideoid !== "") {
      writer.uint32(82).string(message.youtubeVideoid);
    }
    if (message.visibility !== 0) {
      writer.uint32(88).uint32(message.visibility);
    }
    if (message.redirectUri !== "") {
      writer.uint32(98).string(message.redirectUri);
    }
    for (const v of message.tags) {
      writer.uint32(106).string(v!);
    }
    if (message.collectionType !== "") {
      writer.uint32(114).string(message.collectionType);
    }
    if (message.gameType !== "") {
      writer.uint32(122).string(message.gameType);
    }
    if (message.url !== "") {
      writer.uint32(130).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFilePublishRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFilePublishRequest();
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

          message.consumerAppid = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.cloudfilename = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.previewCloudfilename = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.title = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.fileDescription = reader.string();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.fileType = reader.uint32();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.consumerShortcutName = reader.string();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.youtubeUsername = reader.string();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.youtubeVideoid = reader.string();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.visibility = reader.uint32();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.redirectUri = reader.string();
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.collectionType = reader.string();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.gameType = reader.string();
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPublishedFilePublishRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      consumerAppid: isSet(object.consumerAppid) ? Number(object.consumerAppid) : 0,
      cloudfilename: isSet(object.cloudfilename) ? String(object.cloudfilename) : "",
      previewCloudfilename: isSet(object.previewCloudfilename) ? String(object.previewCloudfilename) : "",
      title: isSet(object.title) ? String(object.title) : "",
      fileDescription: isSet(object.fileDescription) ? String(object.fileDescription) : "",
      fileType: isSet(object.fileType) ? Number(object.fileType) : 0,
      consumerShortcutName: isSet(object.consumerShortcutName) ? String(object.consumerShortcutName) : "",
      youtubeUsername: isSet(object.youtubeUsername) ? String(object.youtubeUsername) : "",
      youtubeVideoid: isSet(object.youtubeVideoid) ? String(object.youtubeVideoid) : "",
      visibility: isSet(object.visibility) ? Number(object.visibility) : 0,
      redirectUri: isSet(object.redirectUri) ? String(object.redirectUri) : "",
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      collectionType: isSet(object.collectionType) ? String(object.collectionType) : "",
      gameType: isSet(object.gameType) ? String(object.gameType) : "",
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: CPublishedFilePublishRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.consumerAppid !== undefined && (obj.consumerAppid = Math.round(message.consumerAppid));
    message.cloudfilename !== undefined && (obj.cloudfilename = message.cloudfilename);
    message.previewCloudfilename !== undefined && (obj.previewCloudfilename = message.previewCloudfilename);
    message.title !== undefined && (obj.title = message.title);
    message.fileDescription !== undefined && (obj.fileDescription = message.fileDescription);
    message.fileType !== undefined && (obj.fileType = Math.round(message.fileType));
    message.consumerShortcutName !== undefined && (obj.consumerShortcutName = message.consumerShortcutName);
    message.youtubeUsername !== undefined && (obj.youtubeUsername = message.youtubeUsername);
    message.youtubeVideoid !== undefined && (obj.youtubeVideoid = message.youtubeVideoid);
    message.visibility !== undefined && (obj.visibility = Math.round(message.visibility));
    message.redirectUri !== undefined && (obj.redirectUri = message.redirectUri);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.collectionType !== undefined && (obj.collectionType = message.collectionType);
    message.gameType !== undefined && (obj.gameType = message.gameType);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },
};

function createBaseCPublishedFilePublishResponse(): CPublishedFilePublishResponse {
  return { publishedfileid: "0", redirectUri: "" };
}

export const CPublishedFilePublishResponse = {
  encode(message: CPublishedFilePublishResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedfileid !== "0") {
      writer.uint32(8).uint64(message.publishedfileid);
    }
    if (message.redirectUri !== "") {
      writer.uint32(18).string(message.redirectUri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFilePublishResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFilePublishResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.publishedfileid = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.redirectUri = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPublishedFilePublishResponse {
    return {
      publishedfileid: isSet(object.publishedfileid) ? String(object.publishedfileid) : "0",
      redirectUri: isSet(object.redirectUri) ? String(object.redirectUri) : "",
    };
  },

  toJSON(message: CPublishedFilePublishResponse): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = message.publishedfileid);
    message.redirectUri !== undefined && (obj.redirectUri = message.redirectUri);
    return obj;
  },
};

function createBaseCPublishedFileGetDetailsRequest(): CPublishedFileGetDetailsRequest {
  return {
    publishedfileids: [],
    includetags: false,
    includeadditionalpreviews: false,
    includechildren: false,
    includekvtags: false,
    includevotes: false,
    shortDescription: false,
  };
}

export const CPublishedFileGetDetailsRequest = {
  encode(message: CPublishedFileGetDetailsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.publishedfileids) {
      writer.fixed64(v);
    }
    writer.ldelim();
    if (message.includetags === true) {
      writer.uint32(16).bool(message.includetags);
    }
    if (message.includeadditionalpreviews === true) {
      writer.uint32(24).bool(message.includeadditionalpreviews);
    }
    if (message.includechildren === true) {
      writer.uint32(32).bool(message.includechildren);
    }
    if (message.includekvtags === true) {
      writer.uint32(40).bool(message.includekvtags);
    }
    if (message.includevotes === true) {
      writer.uint32(48).bool(message.includevotes);
    }
    if (message.shortDescription === true) {
      writer.uint32(64).bool(message.shortDescription);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetDetailsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetDetailsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 9) {
            message.publishedfileids.push(longToString(reader.fixed64() as Long));
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.publishedfileids.push(longToString(reader.fixed64() as Long));
            }

            continue;
          }

          break;
        case 2:
          if (tag != 16) {
            break;
          }

          message.includetags = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.includeadditionalpreviews = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.includechildren = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.includekvtags = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.includevotes = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.shortDescription = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetDetailsRequest {
    return {
      publishedfileids: Array.isArray(object?.publishedfileids)
        ? object.publishedfileids.map((e: any) => String(e))
        : [],
      includetags: isSet(object.includetags) ? Boolean(object.includetags) : false,
      includeadditionalpreviews: isSet(object.includeadditionalpreviews)
        ? Boolean(object.includeadditionalpreviews)
        : false,
      includechildren: isSet(object.includechildren) ? Boolean(object.includechildren) : false,
      includekvtags: isSet(object.includekvtags) ? Boolean(object.includekvtags) : false,
      includevotes: isSet(object.includevotes) ? Boolean(object.includevotes) : false,
      shortDescription: isSet(object.shortDescription) ? Boolean(object.shortDescription) : false,
    };
  },

  toJSON(message: CPublishedFileGetDetailsRequest): unknown {
    const obj: any = {};
    if (message.publishedfileids) {
      obj.publishedfileids = message.publishedfileids.map((e) => e);
    } else {
      obj.publishedfileids = [];
    }
    message.includetags !== undefined && (obj.includetags = message.includetags);
    message.includeadditionalpreviews !== undefined &&
      (obj.includeadditionalpreviews = message.includeadditionalpreviews);
    message.includechildren !== undefined && (obj.includechildren = message.includechildren);
    message.includekvtags !== undefined && (obj.includekvtags = message.includekvtags);
    message.includevotes !== undefined && (obj.includevotes = message.includevotes);
    message.shortDescription !== undefined && (obj.shortDescription = message.shortDescription);
    return obj;
  },
};

function createBasePublishedFileDetails(): PublishedFileDetails {
  return {
    result: 0,
    publishedfileid: "0",
    creator: "0",
    creatorAppid: 0,
    consumerAppid: 0,
    consumerShortcutid: 0,
    filename: "",
    fileSize: "0",
    previewFileSize: "0",
    fileUrl: "",
    previewUrl: "",
    youtubevideoid: "",
    url: "",
    hcontentFile: "0",
    hcontentPreview: "0",
    title: "",
    fileDescription: "",
    shortDescription: "",
    timeCreated: 0,
    timeUpdated: 0,
    visibility: 0,
    flags: 0,
    workshopFile: false,
    workshopAccepted: false,
    showSubscribeAll: false,
    numCommentsDeveloper: 0,
    numCommentsPublic: 0,
    banned: false,
    banReason: "",
    banner: "0",
    canBeDeleted: false,
    incompatible: false,
    appName: "",
    fileType: 0,
    canSubscribe: false,
    subscriptions: 0,
    favorited: 0,
    followers: 0,
    lifetimeSubscriptions: 0,
    lifetimeFavorited: 0,
    lifetimeFollowers: 0,
    views: 0,
    imageWidth: 0,
    imageHeight: 0,
    imageUrl: "",
    spoilerTag: false,
    shortcutid: 0,
    shortcutname: "",
    numChildren: 0,
    numReports: 0,
    previews: [],
    tags: [],
    children: [],
    kvtags: [],
    voteData: undefined,
    timeSubscribed: 0,
  };
}

export const PublishedFileDetails = {
  encode(message: PublishedFileDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.publishedfileid !== "0") {
      writer.uint32(16).uint64(message.publishedfileid);
    }
    if (message.creator !== "0") {
      writer.uint32(25).fixed64(message.creator);
    }
    if (message.creatorAppid !== 0) {
      writer.uint32(32).uint32(message.creatorAppid);
    }
    if (message.consumerAppid !== 0) {
      writer.uint32(40).uint32(message.consumerAppid);
    }
    if (message.consumerShortcutid !== 0) {
      writer.uint32(48).uint32(message.consumerShortcutid);
    }
    if (message.filename !== "") {
      writer.uint32(58).string(message.filename);
    }
    if (message.fileSize !== "0") {
      writer.uint32(64).uint64(message.fileSize);
    }
    if (message.previewFileSize !== "0") {
      writer.uint32(72).uint64(message.previewFileSize);
    }
    if (message.fileUrl !== "") {
      writer.uint32(82).string(message.fileUrl);
    }
    if (message.previewUrl !== "") {
      writer.uint32(90).string(message.previewUrl);
    }
    if (message.youtubevideoid !== "") {
      writer.uint32(98).string(message.youtubevideoid);
    }
    if (message.url !== "") {
      writer.uint32(106).string(message.url);
    }
    if (message.hcontentFile !== "0") {
      writer.uint32(113).fixed64(message.hcontentFile);
    }
    if (message.hcontentPreview !== "0") {
      writer.uint32(121).fixed64(message.hcontentPreview);
    }
    if (message.title !== "") {
      writer.uint32(130).string(message.title);
    }
    if (message.fileDescription !== "") {
      writer.uint32(138).string(message.fileDescription);
    }
    if (message.shortDescription !== "") {
      writer.uint32(146).string(message.shortDescription);
    }
    if (message.timeCreated !== 0) {
      writer.uint32(152).uint32(message.timeCreated);
    }
    if (message.timeUpdated !== 0) {
      writer.uint32(160).uint32(message.timeUpdated);
    }
    if (message.visibility !== 0) {
      writer.uint32(168).uint32(message.visibility);
    }
    if (message.flags !== 0) {
      writer.uint32(176).uint32(message.flags);
    }
    if (message.workshopFile === true) {
      writer.uint32(184).bool(message.workshopFile);
    }
    if (message.workshopAccepted === true) {
      writer.uint32(192).bool(message.workshopAccepted);
    }
    if (message.showSubscribeAll === true) {
      writer.uint32(200).bool(message.showSubscribeAll);
    }
    if (message.numCommentsDeveloper !== 0) {
      writer.uint32(208).int32(message.numCommentsDeveloper);
    }
    if (message.numCommentsPublic !== 0) {
      writer.uint32(216).int32(message.numCommentsPublic);
    }
    if (message.banned === true) {
      writer.uint32(224).bool(message.banned);
    }
    if (message.banReason !== "") {
      writer.uint32(234).string(message.banReason);
    }
    if (message.banner !== "0") {
      writer.uint32(241).fixed64(message.banner);
    }
    if (message.canBeDeleted === true) {
      writer.uint32(248).bool(message.canBeDeleted);
    }
    if (message.incompatible === true) {
      writer.uint32(256).bool(message.incompatible);
    }
    if (message.appName !== "") {
      writer.uint32(266).string(message.appName);
    }
    if (message.fileType !== 0) {
      writer.uint32(272).uint32(message.fileType);
    }
    if (message.canSubscribe === true) {
      writer.uint32(280).bool(message.canSubscribe);
    }
    if (message.subscriptions !== 0) {
      writer.uint32(288).uint32(message.subscriptions);
    }
    if (message.favorited !== 0) {
      writer.uint32(296).uint32(message.favorited);
    }
    if (message.followers !== 0) {
      writer.uint32(304).uint32(message.followers);
    }
    if (message.lifetimeSubscriptions !== 0) {
      writer.uint32(312).uint32(message.lifetimeSubscriptions);
    }
    if (message.lifetimeFavorited !== 0) {
      writer.uint32(320).uint32(message.lifetimeFavorited);
    }
    if (message.lifetimeFollowers !== 0) {
      writer.uint32(328).uint32(message.lifetimeFollowers);
    }
    if (message.views !== 0) {
      writer.uint32(336).uint32(message.views);
    }
    if (message.imageWidth !== 0) {
      writer.uint32(344).uint32(message.imageWidth);
    }
    if (message.imageHeight !== 0) {
      writer.uint32(352).uint32(message.imageHeight);
    }
    if (message.imageUrl !== "") {
      writer.uint32(362).string(message.imageUrl);
    }
    if (message.spoilerTag === true) {
      writer.uint32(368).bool(message.spoilerTag);
    }
    if (message.shortcutid !== 0) {
      writer.uint32(376).uint32(message.shortcutid);
    }
    if (message.shortcutname !== "") {
      writer.uint32(386).string(message.shortcutname);
    }
    if (message.numChildren !== 0) {
      writer.uint32(392).uint32(message.numChildren);
    }
    if (message.numReports !== 0) {
      writer.uint32(400).uint32(message.numReports);
    }
    for (const v of message.previews) {
      PublishedFileDetails_Preview.encode(v!, writer.uint32(410).fork()).ldelim();
    }
    for (const v of message.tags) {
      PublishedFileDetails_Tag.encode(v!, writer.uint32(418).fork()).ldelim();
    }
    for (const v of message.children) {
      PublishedFileDetails_Child.encode(v!, writer.uint32(426).fork()).ldelim();
    }
    for (const v of message.kvtags) {
      PublishedFileDetails_KVTag.encode(v!, writer.uint32(434).fork()).ldelim();
    }
    if (message.voteData !== undefined) {
      PublishedFileDetails_VoteData.encode(message.voteData, writer.uint32(442).fork()).ldelim();
    }
    if (message.timeSubscribed !== 0) {
      writer.uint32(448).uint32(message.timeSubscribed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishedFileDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishedFileDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.publishedfileid = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.creator = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.creatorAppid = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.consumerAppid = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.consumerShortcutid = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.filename = reader.string();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.fileSize = longToString(reader.uint64() as Long);
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.previewFileSize = longToString(reader.uint64() as Long);
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.fileUrl = reader.string();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.previewUrl = reader.string();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.youtubevideoid = reader.string();
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.url = reader.string();
          continue;
        case 14:
          if (tag != 113) {
            break;
          }

          message.hcontentFile = longToString(reader.fixed64() as Long);
          continue;
        case 15:
          if (tag != 121) {
            break;
          }

          message.hcontentPreview = longToString(reader.fixed64() as Long);
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.title = reader.string();
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.fileDescription = reader.string();
          continue;
        case 18:
          if (tag != 146) {
            break;
          }

          message.shortDescription = reader.string();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.timeCreated = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.timeUpdated = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.visibility = reader.uint32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.workshopFile = reader.bool();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.workshopAccepted = reader.bool();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.showSubscribeAll = reader.bool();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.numCommentsDeveloper = reader.int32();
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.numCommentsPublic = reader.int32();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.banned = reader.bool();
          continue;
        case 29:
          if (tag != 234) {
            break;
          }

          message.banReason = reader.string();
          continue;
        case 30:
          if (tag != 241) {
            break;
          }

          message.banner = longToString(reader.fixed64() as Long);
          continue;
        case 31:
          if (tag != 248) {
            break;
          }

          message.canBeDeleted = reader.bool();
          continue;
        case 32:
          if (tag != 256) {
            break;
          }

          message.incompatible = reader.bool();
          continue;
        case 33:
          if (tag != 266) {
            break;
          }

          message.appName = reader.string();
          continue;
        case 34:
          if (tag != 272) {
            break;
          }

          message.fileType = reader.uint32();
          continue;
        case 35:
          if (tag != 280) {
            break;
          }

          message.canSubscribe = reader.bool();
          continue;
        case 36:
          if (tag != 288) {
            break;
          }

          message.subscriptions = reader.uint32();
          continue;
        case 37:
          if (tag != 296) {
            break;
          }

          message.favorited = reader.uint32();
          continue;
        case 38:
          if (tag != 304) {
            break;
          }

          message.followers = reader.uint32();
          continue;
        case 39:
          if (tag != 312) {
            break;
          }

          message.lifetimeSubscriptions = reader.uint32();
          continue;
        case 40:
          if (tag != 320) {
            break;
          }

          message.lifetimeFavorited = reader.uint32();
          continue;
        case 41:
          if (tag != 328) {
            break;
          }

          message.lifetimeFollowers = reader.uint32();
          continue;
        case 42:
          if (tag != 336) {
            break;
          }

          message.views = reader.uint32();
          continue;
        case 43:
          if (tag != 344) {
            break;
          }

          message.imageWidth = reader.uint32();
          continue;
        case 44:
          if (tag != 352) {
            break;
          }

          message.imageHeight = reader.uint32();
          continue;
        case 45:
          if (tag != 362) {
            break;
          }

          message.imageUrl = reader.string();
          continue;
        case 46:
          if (tag != 368) {
            break;
          }

          message.spoilerTag = reader.bool();
          continue;
        case 47:
          if (tag != 376) {
            break;
          }

          message.shortcutid = reader.uint32();
          continue;
        case 48:
          if (tag != 386) {
            break;
          }

          message.shortcutname = reader.string();
          continue;
        case 49:
          if (tag != 392) {
            break;
          }

          message.numChildren = reader.uint32();
          continue;
        case 50:
          if (tag != 400) {
            break;
          }

          message.numReports = reader.uint32();
          continue;
        case 51:
          if (tag != 410) {
            break;
          }

          message.previews.push(PublishedFileDetails_Preview.decode(reader, reader.uint32()));
          continue;
        case 52:
          if (tag != 418) {
            break;
          }

          message.tags.push(PublishedFileDetails_Tag.decode(reader, reader.uint32()));
          continue;
        case 53:
          if (tag != 426) {
            break;
          }

          message.children.push(PublishedFileDetails_Child.decode(reader, reader.uint32()));
          continue;
        case 54:
          if (tag != 434) {
            break;
          }

          message.kvtags.push(PublishedFileDetails_KVTag.decode(reader, reader.uint32()));
          continue;
        case 55:
          if (tag != 442) {
            break;
          }

          message.voteData = PublishedFileDetails_VoteData.decode(reader, reader.uint32());
          continue;
        case 56:
          if (tag != 448) {
            break;
          }

          message.timeSubscribed = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublishedFileDetails {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      publishedfileid: isSet(object.publishedfileid) ? String(object.publishedfileid) : "0",
      creator: isSet(object.creator) ? String(object.creator) : "0",
      creatorAppid: isSet(object.creatorAppid) ? Number(object.creatorAppid) : 0,
      consumerAppid: isSet(object.consumerAppid) ? Number(object.consumerAppid) : 0,
      consumerShortcutid: isSet(object.consumerShortcutid) ? Number(object.consumerShortcutid) : 0,
      filename: isSet(object.filename) ? String(object.filename) : "",
      fileSize: isSet(object.fileSize) ? String(object.fileSize) : "0",
      previewFileSize: isSet(object.previewFileSize) ? String(object.previewFileSize) : "0",
      fileUrl: isSet(object.fileUrl) ? String(object.fileUrl) : "",
      previewUrl: isSet(object.previewUrl) ? String(object.previewUrl) : "",
      youtubevideoid: isSet(object.youtubevideoid) ? String(object.youtubevideoid) : "",
      url: isSet(object.url) ? String(object.url) : "",
      hcontentFile: isSet(object.hcontentFile) ? String(object.hcontentFile) : "0",
      hcontentPreview: isSet(object.hcontentPreview) ? String(object.hcontentPreview) : "0",
      title: isSet(object.title) ? String(object.title) : "",
      fileDescription: isSet(object.fileDescription) ? String(object.fileDescription) : "",
      shortDescription: isSet(object.shortDescription) ? String(object.shortDescription) : "",
      timeCreated: isSet(object.timeCreated) ? Number(object.timeCreated) : 0,
      timeUpdated: isSet(object.timeUpdated) ? Number(object.timeUpdated) : 0,
      visibility: isSet(object.visibility) ? Number(object.visibility) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      workshopFile: isSet(object.workshopFile) ? Boolean(object.workshopFile) : false,
      workshopAccepted: isSet(object.workshopAccepted) ? Boolean(object.workshopAccepted) : false,
      showSubscribeAll: isSet(object.showSubscribeAll) ? Boolean(object.showSubscribeAll) : false,
      numCommentsDeveloper: isSet(object.numCommentsDeveloper) ? Number(object.numCommentsDeveloper) : 0,
      numCommentsPublic: isSet(object.numCommentsPublic) ? Number(object.numCommentsPublic) : 0,
      banned: isSet(object.banned) ? Boolean(object.banned) : false,
      banReason: isSet(object.banReason) ? String(object.banReason) : "",
      banner: isSet(object.banner) ? String(object.banner) : "0",
      canBeDeleted: isSet(object.canBeDeleted) ? Boolean(object.canBeDeleted) : false,
      incompatible: isSet(object.incompatible) ? Boolean(object.incompatible) : false,
      appName: isSet(object.appName) ? String(object.appName) : "",
      fileType: isSet(object.fileType) ? Number(object.fileType) : 0,
      canSubscribe: isSet(object.canSubscribe) ? Boolean(object.canSubscribe) : false,
      subscriptions: isSet(object.subscriptions) ? Number(object.subscriptions) : 0,
      favorited: isSet(object.favorited) ? Number(object.favorited) : 0,
      followers: isSet(object.followers) ? Number(object.followers) : 0,
      lifetimeSubscriptions: isSet(object.lifetimeSubscriptions) ? Number(object.lifetimeSubscriptions) : 0,
      lifetimeFavorited: isSet(object.lifetimeFavorited) ? Number(object.lifetimeFavorited) : 0,
      lifetimeFollowers: isSet(object.lifetimeFollowers) ? Number(object.lifetimeFollowers) : 0,
      views: isSet(object.views) ? Number(object.views) : 0,
      imageWidth: isSet(object.imageWidth) ? Number(object.imageWidth) : 0,
      imageHeight: isSet(object.imageHeight) ? Number(object.imageHeight) : 0,
      imageUrl: isSet(object.imageUrl) ? String(object.imageUrl) : "",
      spoilerTag: isSet(object.spoilerTag) ? Boolean(object.spoilerTag) : false,
      shortcutid: isSet(object.shortcutid) ? Number(object.shortcutid) : 0,
      shortcutname: isSet(object.shortcutname) ? String(object.shortcutname) : "",
      numChildren: isSet(object.numChildren) ? Number(object.numChildren) : 0,
      numReports: isSet(object.numReports) ? Number(object.numReports) : 0,
      previews: Array.isArray(object?.previews)
        ? object.previews.map((e: any) => PublishedFileDetails_Preview.fromJSON(e))
        : [],
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => PublishedFileDetails_Tag.fromJSON(e)) : [],
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) => PublishedFileDetails_Child.fromJSON(e))
        : [],
      kvtags: Array.isArray(object?.kvtags)
        ? object.kvtags.map((e: any) => PublishedFileDetails_KVTag.fromJSON(e))
        : [],
      voteData: isSet(object.voteData) ? PublishedFileDetails_VoteData.fromJSON(object.voteData) : undefined,
      timeSubscribed: isSet(object.timeSubscribed) ? Number(object.timeSubscribed) : 0,
    };
  },

  toJSON(message: PublishedFileDetails): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.publishedfileid !== undefined && (obj.publishedfileid = message.publishedfileid);
    message.creator !== undefined && (obj.creator = message.creator);
    message.creatorAppid !== undefined && (obj.creatorAppid = Math.round(message.creatorAppid));
    message.consumerAppid !== undefined && (obj.consumerAppid = Math.round(message.consumerAppid));
    message.consumerShortcutid !== undefined && (obj.consumerShortcutid = Math.round(message.consumerShortcutid));
    message.filename !== undefined && (obj.filename = message.filename);
    message.fileSize !== undefined && (obj.fileSize = message.fileSize);
    message.previewFileSize !== undefined && (obj.previewFileSize = message.previewFileSize);
    message.fileUrl !== undefined && (obj.fileUrl = message.fileUrl);
    message.previewUrl !== undefined && (obj.previewUrl = message.previewUrl);
    message.youtubevideoid !== undefined && (obj.youtubevideoid = message.youtubevideoid);
    message.url !== undefined && (obj.url = message.url);
    message.hcontentFile !== undefined && (obj.hcontentFile = message.hcontentFile);
    message.hcontentPreview !== undefined && (obj.hcontentPreview = message.hcontentPreview);
    message.title !== undefined && (obj.title = message.title);
    message.fileDescription !== undefined && (obj.fileDescription = message.fileDescription);
    message.shortDescription !== undefined && (obj.shortDescription = message.shortDescription);
    message.timeCreated !== undefined && (obj.timeCreated = Math.round(message.timeCreated));
    message.timeUpdated !== undefined && (obj.timeUpdated = Math.round(message.timeUpdated));
    message.visibility !== undefined && (obj.visibility = Math.round(message.visibility));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.workshopFile !== undefined && (obj.workshopFile = message.workshopFile);
    message.workshopAccepted !== undefined && (obj.workshopAccepted = message.workshopAccepted);
    message.showSubscribeAll !== undefined && (obj.showSubscribeAll = message.showSubscribeAll);
    message.numCommentsDeveloper !== undefined && (obj.numCommentsDeveloper = Math.round(message.numCommentsDeveloper));
    message.numCommentsPublic !== undefined && (obj.numCommentsPublic = Math.round(message.numCommentsPublic));
    message.banned !== undefined && (obj.banned = message.banned);
    message.banReason !== undefined && (obj.banReason = message.banReason);
    message.banner !== undefined && (obj.banner = message.banner);
    message.canBeDeleted !== undefined && (obj.canBeDeleted = message.canBeDeleted);
    message.incompatible !== undefined && (obj.incompatible = message.incompatible);
    message.appName !== undefined && (obj.appName = message.appName);
    message.fileType !== undefined && (obj.fileType = Math.round(message.fileType));
    message.canSubscribe !== undefined && (obj.canSubscribe = message.canSubscribe);
    message.subscriptions !== undefined && (obj.subscriptions = Math.round(message.subscriptions));
    message.favorited !== undefined && (obj.favorited = Math.round(message.favorited));
    message.followers !== undefined && (obj.followers = Math.round(message.followers));
    message.lifetimeSubscriptions !== undefined &&
      (obj.lifetimeSubscriptions = Math.round(message.lifetimeSubscriptions));
    message.lifetimeFavorited !== undefined && (obj.lifetimeFavorited = Math.round(message.lifetimeFavorited));
    message.lifetimeFollowers !== undefined && (obj.lifetimeFollowers = Math.round(message.lifetimeFollowers));
    message.views !== undefined && (obj.views = Math.round(message.views));
    message.imageWidth !== undefined && (obj.imageWidth = Math.round(message.imageWidth));
    message.imageHeight !== undefined && (obj.imageHeight = Math.round(message.imageHeight));
    message.imageUrl !== undefined && (obj.imageUrl = message.imageUrl);
    message.spoilerTag !== undefined && (obj.spoilerTag = message.spoilerTag);
    message.shortcutid !== undefined && (obj.shortcutid = Math.round(message.shortcutid));
    message.shortcutname !== undefined && (obj.shortcutname = message.shortcutname);
    message.numChildren !== undefined && (obj.numChildren = Math.round(message.numChildren));
    message.numReports !== undefined && (obj.numReports = Math.round(message.numReports));
    if (message.previews) {
      obj.previews = message.previews.map((e) => e ? PublishedFileDetails_Preview.toJSON(e) : undefined);
    } else {
      obj.previews = [];
    }
    if (message.tags) {
      obj.tags = message.tags.map((e) => e ? PublishedFileDetails_Tag.toJSON(e) : undefined);
    } else {
      obj.tags = [];
    }
    if (message.children) {
      obj.children = message.children.map((e) => e ? PublishedFileDetails_Child.toJSON(e) : undefined);
    } else {
      obj.children = [];
    }
    if (message.kvtags) {
      obj.kvtags = message.kvtags.map((e) => e ? PublishedFileDetails_KVTag.toJSON(e) : undefined);
    } else {
      obj.kvtags = [];
    }
    message.voteData !== undefined &&
      (obj.voteData = message.voteData ? PublishedFileDetails_VoteData.toJSON(message.voteData) : undefined);
    message.timeSubscribed !== undefined && (obj.timeSubscribed = Math.round(message.timeSubscribed));
    return obj;
  },
};

function createBasePublishedFileDetails_Tag(): PublishedFileDetails_Tag {
  return { tag: "", adminonly: false };
}

export const PublishedFileDetails_Tag = {
  encode(message: PublishedFileDetails_Tag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tag !== "") {
      writer.uint32(10).string(message.tag);
    }
    if (message.adminonly === true) {
      writer.uint32(16).bool(message.adminonly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishedFileDetails_Tag {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishedFileDetails_Tag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.tag = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.adminonly = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublishedFileDetails_Tag {
    return {
      tag: isSet(object.tag) ? String(object.tag) : "",
      adminonly: isSet(object.adminonly) ? Boolean(object.adminonly) : false,
    };
  },

  toJSON(message: PublishedFileDetails_Tag): unknown {
    const obj: any = {};
    message.tag !== undefined && (obj.tag = message.tag);
    message.adminonly !== undefined && (obj.adminonly = message.adminonly);
    return obj;
  },
};

function createBasePublishedFileDetails_Preview(): PublishedFileDetails_Preview {
  return { previewid: "0", sortorder: 0, url: "", size: 0, filename: "", youtubevideoid: "" };
}

export const PublishedFileDetails_Preview = {
  encode(message: PublishedFileDetails_Preview, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.previewid !== "0") {
      writer.uint32(8).uint64(message.previewid);
    }
    if (message.sortorder !== 0) {
      writer.uint32(16).uint32(message.sortorder);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    if (message.size !== 0) {
      writer.uint32(32).uint32(message.size);
    }
    if (message.filename !== "") {
      writer.uint32(42).string(message.filename);
    }
    if (message.youtubevideoid !== "") {
      writer.uint32(50).string(message.youtubevideoid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishedFileDetails_Preview {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishedFileDetails_Preview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.previewid = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.sortorder = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.url = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.size = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.filename = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.youtubevideoid = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublishedFileDetails_Preview {
    return {
      previewid: isSet(object.previewid) ? String(object.previewid) : "0",
      sortorder: isSet(object.sortorder) ? Number(object.sortorder) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      size: isSet(object.size) ? Number(object.size) : 0,
      filename: isSet(object.filename) ? String(object.filename) : "",
      youtubevideoid: isSet(object.youtubevideoid) ? String(object.youtubevideoid) : "",
    };
  },

  toJSON(message: PublishedFileDetails_Preview): unknown {
    const obj: any = {};
    message.previewid !== undefined && (obj.previewid = message.previewid);
    message.sortorder !== undefined && (obj.sortorder = Math.round(message.sortorder));
    message.url !== undefined && (obj.url = message.url);
    message.size !== undefined && (obj.size = Math.round(message.size));
    message.filename !== undefined && (obj.filename = message.filename);
    message.youtubevideoid !== undefined && (obj.youtubevideoid = message.youtubevideoid);
    return obj;
  },
};

function createBasePublishedFileDetails_Child(): PublishedFileDetails_Child {
  return { publishedfileid: "0", sortorder: 0, fileType: 0 };
}

export const PublishedFileDetails_Child = {
  encode(message: PublishedFileDetails_Child, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedfileid !== "0") {
      writer.uint32(8).uint64(message.publishedfileid);
    }
    if (message.sortorder !== 0) {
      writer.uint32(16).uint32(message.sortorder);
    }
    if (message.fileType !== 0) {
      writer.uint32(24).uint32(message.fileType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishedFileDetails_Child {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishedFileDetails_Child();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.publishedfileid = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.sortorder = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.fileType = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublishedFileDetails_Child {
    return {
      publishedfileid: isSet(object.publishedfileid) ? String(object.publishedfileid) : "0",
      sortorder: isSet(object.sortorder) ? Number(object.sortorder) : 0,
      fileType: isSet(object.fileType) ? Number(object.fileType) : 0,
    };
  },

  toJSON(message: PublishedFileDetails_Child): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = message.publishedfileid);
    message.sortorder !== undefined && (obj.sortorder = Math.round(message.sortorder));
    message.fileType !== undefined && (obj.fileType = Math.round(message.fileType));
    return obj;
  },
};

function createBasePublishedFileDetails_KVTag(): PublishedFileDetails_KVTag {
  return { key: "", value: "" };
}

export const PublishedFileDetails_KVTag = {
  encode(message: PublishedFileDetails_KVTag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishedFileDetails_KVTag {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishedFileDetails_KVTag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublishedFileDetails_KVTag {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: PublishedFileDetails_KVTag): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

function createBasePublishedFileDetails_VoteData(): PublishedFileDetails_VoteData {
  return { score: 0, votesUp: 0, votesDown: 0 };
}

export const PublishedFileDetails_VoteData = {
  encode(message: PublishedFileDetails_VoteData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.score !== 0) {
      writer.uint32(13).float(message.score);
    }
    if (message.votesUp !== 0) {
      writer.uint32(16).uint32(message.votesUp);
    }
    if (message.votesDown !== 0) {
      writer.uint32(24).uint32(message.votesDown);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishedFileDetails_VoteData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishedFileDetails_VoteData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.score = reader.float();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.votesUp = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.votesDown = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublishedFileDetails_VoteData {
    return {
      score: isSet(object.score) ? Number(object.score) : 0,
      votesUp: isSet(object.votesUp) ? Number(object.votesUp) : 0,
      votesDown: isSet(object.votesDown) ? Number(object.votesDown) : 0,
    };
  },

  toJSON(message: PublishedFileDetails_VoteData): unknown {
    const obj: any = {};
    message.score !== undefined && (obj.score = message.score);
    message.votesUp !== undefined && (obj.votesUp = Math.round(message.votesUp));
    message.votesDown !== undefined && (obj.votesDown = Math.round(message.votesDown));
    return obj;
  },
};

function createBaseCPublishedFileGetDetailsResponse(): CPublishedFileGetDetailsResponse {
  return { publishedfiledetails: [] };
}

export const CPublishedFileGetDetailsResponse = {
  encode(message: CPublishedFileGetDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.publishedfiledetails) {
      PublishedFileDetails.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.publishedfiledetails.push(PublishedFileDetails.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetDetailsResponse {
    return {
      publishedfiledetails: Array.isArray(object?.publishedfiledetails)
        ? object.publishedfiledetails.map((e: any) => PublishedFileDetails.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPublishedFileGetDetailsResponse): unknown {
    const obj: any = {};
    if (message.publishedfiledetails) {
      obj.publishedfiledetails = message.publishedfiledetails.map((e) =>
        e ? PublishedFileDetails.toJSON(e) : undefined
      );
    } else {
      obj.publishedfiledetails = [];
    }
    return obj;
  },
};

function createBaseCPublishedFileGetUserFilesRequest(): CPublishedFileGetUserFilesRequest {
  return {
    appid: 0,
    page: 0,
    numperpage: 0,
    sortmethod: "",
    totalonly: false,
    privacy: 0,
    idsOnly: false,
    requiredtags: [],
    excludedtags: [],
  };
}

export const CPublishedFileGetUserFilesRequest = {
  encode(message: CPublishedFileGetUserFilesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.page !== 0) {
      writer.uint32(24).uint32(message.page);
    }
    if (message.numperpage !== 0) {
      writer.uint32(32).uint32(message.numperpage);
    }
    if (message.sortmethod !== "") {
      writer.uint32(50).string(message.sortmethod);
    }
    if (message.totalonly === true) {
      writer.uint32(56).bool(message.totalonly);
    }
    if (message.privacy !== 0) {
      writer.uint32(72).uint32(message.privacy);
    }
    if (message.idsOnly === true) {
      writer.uint32(80).bool(message.idsOnly);
    }
    for (const v of message.requiredtags) {
      writer.uint32(90).string(v!);
    }
    for (const v of message.excludedtags) {
      writer.uint32(98).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetUserFilesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetUserFilesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.appid = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.page = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.numperpage = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.sortmethod = reader.string();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.totalonly = reader.bool();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.privacy = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.idsOnly = reader.bool();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.requiredtags.push(reader.string());
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.excludedtags.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetUserFilesRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      page: isSet(object.page) ? Number(object.page) : 0,
      numperpage: isSet(object.numperpage) ? Number(object.numperpage) : 0,
      sortmethod: isSet(object.sortmethod) ? String(object.sortmethod) : "",
      totalonly: isSet(object.totalonly) ? Boolean(object.totalonly) : false,
      privacy: isSet(object.privacy) ? Number(object.privacy) : 0,
      idsOnly: isSet(object.idsOnly) ? Boolean(object.idsOnly) : false,
      requiredtags: Array.isArray(object?.requiredtags) ? object.requiredtags.map((e: any) => String(e)) : [],
      excludedtags: Array.isArray(object?.excludedtags) ? object.excludedtags.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CPublishedFileGetUserFilesRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.page !== undefined && (obj.page = Math.round(message.page));
    message.numperpage !== undefined && (obj.numperpage = Math.round(message.numperpage));
    message.sortmethod !== undefined && (obj.sortmethod = message.sortmethod);
    message.totalonly !== undefined && (obj.totalonly = message.totalonly);
    message.privacy !== undefined && (obj.privacy = Math.round(message.privacy));
    message.idsOnly !== undefined && (obj.idsOnly = message.idsOnly);
    if (message.requiredtags) {
      obj.requiredtags = message.requiredtags.map((e) => e);
    } else {
      obj.requiredtags = [];
    }
    if (message.excludedtags) {
      obj.excludedtags = message.excludedtags.map((e) => e);
    } else {
      obj.excludedtags = [];
    }
    return obj;
  },
};

function createBaseCPublishedFileGetUserFilesResponse(): CPublishedFileGetUserFilesResponse {
  return { total: 0, startindex: 0, publishedfiledetails: [], apps: [] };
}

export const CPublishedFileGetUserFilesResponse = {
  encode(message: CPublishedFileGetUserFilesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total !== 0) {
      writer.uint32(8).uint32(message.total);
    }
    if (message.startindex !== 0) {
      writer.uint32(16).uint32(message.startindex);
    }
    for (const v of message.publishedfiledetails) {
      PublishedFileDetails.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.apps) {
      CPublishedFileGetUserFilesResponse_App.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetUserFilesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetUserFilesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.total = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.startindex = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.publishedfiledetails.push(PublishedFileDetails.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.apps.push(CPublishedFileGetUserFilesResponse_App.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetUserFilesResponse {
    return {
      total: isSet(object.total) ? Number(object.total) : 0,
      startindex: isSet(object.startindex) ? Number(object.startindex) : 0,
      publishedfiledetails: Array.isArray(object?.publishedfiledetails)
        ? object.publishedfiledetails.map((e: any) => PublishedFileDetails.fromJSON(e))
        : [],
      apps: Array.isArray(object?.apps)
        ? object.apps.map((e: any) => CPublishedFileGetUserFilesResponse_App.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPublishedFileGetUserFilesResponse): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = Math.round(message.total));
    message.startindex !== undefined && (obj.startindex = Math.round(message.startindex));
    if (message.publishedfiledetails) {
      obj.publishedfiledetails = message.publishedfiledetails.map((e) =>
        e ? PublishedFileDetails.toJSON(e) : undefined
      );
    } else {
      obj.publishedfiledetails = [];
    }
    if (message.apps) {
      obj.apps = message.apps.map((e) => e ? CPublishedFileGetUserFilesResponse_App.toJSON(e) : undefined);
    } else {
      obj.apps = [];
    }
    return obj;
  },
};

function createBaseCPublishedFileGetUserFilesResponse_App(): CPublishedFileGetUserFilesResponse_App {
  return { appid: 0, name: "", shortcutid: 0, private: false };
}

export const CPublishedFileGetUserFilesResponse_App = {
  encode(message: CPublishedFileGetUserFilesResponse_App, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.shortcutid !== 0) {
      writer.uint32(24).uint32(message.shortcutid);
    }
    if (message.private === true) {
      writer.uint32(32).bool(message.private);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetUserFilesResponse_App {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetUserFilesResponse_App();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.shortcutid = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.private = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetUserFilesResponse_App {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      shortcutid: isSet(object.shortcutid) ? Number(object.shortcutid) : 0,
      private: isSet(object.private) ? Boolean(object.private) : false,
    };
  },

  toJSON(message: CPublishedFileGetUserFilesResponse_App): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.name !== undefined && (obj.name = message.name);
    message.shortcutid !== undefined && (obj.shortcutid = Math.round(message.shortcutid));
    message.private !== undefined && (obj.private = message.private);
    return obj;
  },
};

function createBaseCPublishedFileUpdateRequest(): CPublishedFileUpdateRequest {
  return {
    appid: 0,
    publishedfileid: "0",
    title: "",
    fileDescription: "",
    visibility: 0,
    tags: [],
    filename: "",
    previewFilename: "",
  };
}

export const CPublishedFileUpdateRequest = {
  encode(message: CPublishedFileUpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.publishedfileid !== "0") {
      writer.uint32(17).fixed64(message.publishedfileid);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.fileDescription !== "") {
      writer.uint32(34).string(message.fileDescription);
    }
    if (message.visibility !== 0) {
      writer.uint32(40).uint32(message.visibility);
    }
    for (const v of message.tags) {
      writer.uint32(50).string(v!);
    }
    if (message.filename !== "") {
      writer.uint32(58).string(message.filename);
    }
    if (message.previewFilename !== "") {
      writer.uint32(66).string(message.previewFilename);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileUpdateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileUpdateRequest();
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
          if (tag != 17) {
            break;
          }

          message.publishedfileid = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.title = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.fileDescription = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.visibility = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.filename = reader.string();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.previewFilename = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileUpdateRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      publishedfileid: isSet(object.publishedfileid) ? String(object.publishedfileid) : "0",
      title: isSet(object.title) ? String(object.title) : "",
      fileDescription: isSet(object.fileDescription) ? String(object.fileDescription) : "",
      visibility: isSet(object.visibility) ? Number(object.visibility) : 0,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      filename: isSet(object.filename) ? String(object.filename) : "",
      previewFilename: isSet(object.previewFilename) ? String(object.previewFilename) : "",
    };
  },

  toJSON(message: CPublishedFileUpdateRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.publishedfileid !== undefined && (obj.publishedfileid = message.publishedfileid);
    message.title !== undefined && (obj.title = message.title);
    message.fileDescription !== undefined && (obj.fileDescription = message.fileDescription);
    message.visibility !== undefined && (obj.visibility = Math.round(message.visibility));
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.filename !== undefined && (obj.filename = message.filename);
    message.previewFilename !== undefined && (obj.previewFilename = message.previewFilename);
    return obj;
  },
};

function createBaseCPublishedFileUpdateResponse(): CPublishedFileUpdateResponse {
  return {};
}

export const CPublishedFileUpdateResponse = {
  encode(_: CPublishedFileUpdateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileUpdateResponse();
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

  fromJSON(_: any): CPublishedFileUpdateResponse {
    return {};
  },

  toJSON(_: CPublishedFileUpdateResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCPublishedFileRefreshVotingQueueRequest(): CPublishedFileRefreshVotingQueueRequest {
  return { appid: 0, matchingFileType: 0, tags: [], matchAllTags: false, excludedTags: [], desiredQueueSize: 0 };
}

export const CPublishedFileRefreshVotingQueueRequest = {
  encode(message: CPublishedFileRefreshVotingQueueRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.matchingFileType !== 0) {
      writer.uint32(16).uint32(message.matchingFileType);
    }
    for (const v of message.tags) {
      writer.uint32(26).string(v!);
    }
    if (message.matchAllTags === true) {
      writer.uint32(32).bool(message.matchAllTags);
    }
    for (const v of message.excludedTags) {
      writer.uint32(42).string(v!);
    }
    if (message.desiredQueueSize !== 0) {
      writer.uint32(48).uint32(message.desiredQueueSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileRefreshVotingQueueRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileRefreshVotingQueueRequest();
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

          message.matchingFileType = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.matchAllTags = reader.bool();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.excludedTags.push(reader.string());
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.desiredQueueSize = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileRefreshVotingQueueRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      matchingFileType: isSet(object.matchingFileType) ? Number(object.matchingFileType) : 0,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      matchAllTags: isSet(object.matchAllTags) ? Boolean(object.matchAllTags) : false,
      excludedTags: Array.isArray(object?.excludedTags) ? object.excludedTags.map((e: any) => String(e)) : [],
      desiredQueueSize: isSet(object.desiredQueueSize) ? Number(object.desiredQueueSize) : 0,
    };
  },

  toJSON(message: CPublishedFileRefreshVotingQueueRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.matchingFileType !== undefined && (obj.matchingFileType = Math.round(message.matchingFileType));
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.matchAllTags !== undefined && (obj.matchAllTags = message.matchAllTags);
    if (message.excludedTags) {
      obj.excludedTags = message.excludedTags.map((e) => e);
    } else {
      obj.excludedTags = [];
    }
    message.desiredQueueSize !== undefined && (obj.desiredQueueSize = Math.round(message.desiredQueueSize));
    return obj;
  },
};

function createBaseCPublishedFileRefreshVotingQueueResponse(): CPublishedFileRefreshVotingQueueResponse {
  return {};
}

export const CPublishedFileRefreshVotingQueueResponse = {
  encode(_: CPublishedFileRefreshVotingQueueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileRefreshVotingQueueResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileRefreshVotingQueueResponse();
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

  fromJSON(_: any): CPublishedFileRefreshVotingQueueResponse {
    return {};
  },

  toJSON(_: CPublishedFileRefreshVotingQueueResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

export interface PublishedFile {
  Subscribe(request: CPublishedFileSubscribeRequest): Promise<CPublishedFileSubscribeResponse>;
  Unsubscribe(request: CPublishedFileUnsubscribeRequest): Promise<CPublishedFileUnsubscribeResponse>;
  Publish(request: CPublishedFilePublishRequest): Promise<CPublishedFilePublishResponse>;
  GetDetails(request: CPublishedFileGetDetailsRequest): Promise<CPublishedFileGetDetailsResponse>;
  GetUserFiles(request: CPublishedFileGetUserFilesRequest): Promise<CPublishedFileGetUserFilesResponse>;
  Update(request: CPublishedFileUpdateRequest): Promise<CPublishedFileUpdateResponse>;
  RefreshVotingQueue(
    request: CPublishedFileRefreshVotingQueueRequest,
  ): Promise<CPublishedFileRefreshVotingQueueResponse>;
}

export class PublishedFileClientImpl implements PublishedFile {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "PublishedFile";
    this.rpc = rpc;
    this.Subscribe = this.Subscribe.bind(this);
    this.Unsubscribe = this.Unsubscribe.bind(this);
    this.Publish = this.Publish.bind(this);
    this.GetDetails = this.GetDetails.bind(this);
    this.GetUserFiles = this.GetUserFiles.bind(this);
    this.Update = this.Update.bind(this);
    this.RefreshVotingQueue = this.RefreshVotingQueue.bind(this);
  }
  Subscribe(request: CPublishedFileSubscribeRequest): Promise<CPublishedFileSubscribeResponse> {
    const data = CPublishedFileSubscribeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Subscribe", data);
    return promise.then((data) => CPublishedFileSubscribeResponse.decode(_m0.Reader.create(data)));
  }

  Unsubscribe(request: CPublishedFileUnsubscribeRequest): Promise<CPublishedFileUnsubscribeResponse> {
    const data = CPublishedFileUnsubscribeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Unsubscribe", data);
    return promise.then((data) => CPublishedFileUnsubscribeResponse.decode(_m0.Reader.create(data)));
  }

  Publish(request: CPublishedFilePublishRequest): Promise<CPublishedFilePublishResponse> {
    const data = CPublishedFilePublishRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Publish", data);
    return promise.then((data) => CPublishedFilePublishResponse.decode(_m0.Reader.create(data)));
  }

  GetDetails(request: CPublishedFileGetDetailsRequest): Promise<CPublishedFileGetDetailsResponse> {
    const data = CPublishedFileGetDetailsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetDetails", data);
    return promise.then((data) => CPublishedFileGetDetailsResponse.decode(_m0.Reader.create(data)));
  }

  GetUserFiles(request: CPublishedFileGetUserFilesRequest): Promise<CPublishedFileGetUserFilesResponse> {
    const data = CPublishedFileGetUserFilesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetUserFiles", data);
    return promise.then((data) => CPublishedFileGetUserFilesResponse.decode(_m0.Reader.create(data)));
  }

  Update(request: CPublishedFileUpdateRequest): Promise<CPublishedFileUpdateResponse> {
    const data = CPublishedFileUpdateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Update", data);
    return promise.then((data) => CPublishedFileUpdateResponse.decode(_m0.Reader.create(data)));
  }

  RefreshVotingQueue(
    request: CPublishedFileRefreshVotingQueueRequest,
  ): Promise<CPublishedFileRefreshVotingQueueResponse> {
    const data = CPublishedFileRefreshVotingQueueRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RefreshVotingQueue", data);
    return promise.then((data) => CPublishedFileRefreshVotingQueueResponse.decode(_m0.Reader.create(data)));
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
