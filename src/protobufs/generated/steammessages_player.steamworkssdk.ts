/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export enum ENotificationSetting {
  k_ENotificationSettingNotifyUseDefault = 0,
  k_ENotificationSettingAlways = 1,
  k_ENotificationSettingNever = 2,
}

export function eNotificationSettingFromJSON(object: any): ENotificationSetting {
  switch (object) {
    case 0:
    case "k_ENotificationSettingNotifyUseDefault":
      return ENotificationSetting.k_ENotificationSettingNotifyUseDefault;
    case 1:
    case "k_ENotificationSettingAlways":
      return ENotificationSetting.k_ENotificationSettingAlways;
    case 2:
    case "k_ENotificationSettingNever":
      return ENotificationSetting.k_ENotificationSettingNever;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ENotificationSetting");
  }
}

export function eNotificationSettingToJSON(object: ENotificationSetting): string {
  switch (object) {
    case ENotificationSetting.k_ENotificationSettingNotifyUseDefault:
      return "k_ENotificationSettingNotifyUseDefault";
    case ENotificationSetting.k_ENotificationSettingAlways:
      return "k_ENotificationSettingAlways";
    case ENotificationSetting.k_ENotificationSettingNever:
      return "k_ENotificationSettingNever";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ENotificationSetting");
  }
}

export interface CPlayerGetMutualFriendsForIncomingInvitesRequest {
}

export interface CPlayerIncomingInviteMutualFriendList {
  steamid: string;
  mutualFriendAccountIds: number[];
}

export interface CPlayerGetMutualFriendsForIncomingInvitesResponse {
  incomingInviteMutualFriendsLists: CPlayerIncomingInviteMutualFriendList[];
}

export interface CPlayerGetFriendsGameplayInfoRequest {
  appid: number;
}

export interface CPlayerGetFriendsGameplayInfoResponse {
  yourInfo: CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo | undefined;
  inGame: CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo[];
  playedRecently: CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo[];
  playedEver: CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo[];
  owns: CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo[];
  inWishlist: CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo[];
}

export interface CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo {
  steamid: string;
  minutesPlayed: number;
  minutesPlayedForever: number;
}

export interface CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo {
  steamid: string;
  minutesPlayed: number;
  minutesPlayedForever: number;
  inWishlist: boolean;
  owned: boolean;
}

export interface CPlayerGetGameBadgeLevelsRequest {
  appid: number;
}

export interface CPlayerGetGameBadgeLevelsResponse {
  playerLevel: number;
  badges: CPlayerGetGameBadgeLevelsResponse_Badge[];
}

export interface CPlayerGetGameBadgeLevelsResponse_Badge {
  level: number;
  series: number;
  borderColor: number;
}

export interface CPlayerGetLastPlayedTimesRequest {
  minLastPlayed: number;
}

export interface CPlayerGetLastPlayedTimesResponse {
  games: CPlayerGetLastPlayedTimesResponse_Game[];
}

export interface CPlayerGetLastPlayedTimesResponse_Game {
  appid: number;
  lastPlaytime: number;
  playtime2weeks: number;
  playtimeForever: number;
  firstPlaytime: number;
}

export interface CPlayerAcceptSSARequest {
}

export interface CPlayerAcceptSSAResponse {
}

export interface CPlayerGetNicknameListRequest {
}

export interface CPlayerGetNicknameListResponse {
  nicknames: CPlayerGetNicknameListResponse_PlayerNickname[];
}

export interface CPlayerGetNicknameListResponse_PlayerNickname {
  accountid: number;
  nickname: string;
}

export interface CPlayerGetPerFriendPreferencesRequest {
}

export interface PerFriendPreferences {
  accountid: number;
  nickname: string;
  notificationsShowingame: ENotificationSetting;
  notificationsShowonline: ENotificationSetting;
  notificationsShowmessages: ENotificationSetting;
  soundsShowingame: ENotificationSetting;
  soundsShowonline: ENotificationSetting;
  soundsShowmessages: ENotificationSetting;
  notificationsSendmobile: ENotificationSetting;
}

export interface CPlayerGetPerFriendPreferencesResponse {
  preferences: PerFriendPreferences[];
}

export interface CPlayerSetPerFriendPreferencesRequest {
  preferences: PerFriendPreferences | undefined;
}

export interface CPlayerSetPerFriendPreferencesResponse {
}

export interface CPlayerAddFriendRequest {
  steamid: string;
}

export interface CPlayerAddFriendResponse {
  inviteSent: boolean;
  friendRelationship: number;
}

export interface CPlayerRemoveFriendRequest {
  steamid: string;
}

export interface CPlayerRemoveFriendResponse {
  friendRelationship: number;
}

export interface CPlayerIgnoreFriendRequest {
  steamid: string;
  unignore: boolean;
}

export interface CPlayerIgnoreFriendResponse {
  friendRelationship: number;
}

export interface CPlayerGetCommunityPreferencesRequest {
}

export interface CPlayerCommunityPreferences {
  hideAdultContentViolence: boolean;
  hideAdultContentSex: boolean;
  parenthesizeNicknames: boolean;
  timestampUpdated: number;
}

export interface CPlayerGetCommunityPreferencesResponse {
  preferences: CPlayerCommunityPreferences | undefined;
}

export interface CPlayerSetCommunityPreferencesRequest {
  preferences: CPlayerCommunityPreferences | undefined;
}

export interface CPlayerSetCommunityPreferencesResponse {
}

export interface CPlayerGetNewSteamAnnouncementStateRequest {
  language: number;
}

export interface CPlayerGetNewSteamAnnouncementStateResponse {
  state: number;
  announcementHeadline: string;
  announcementUrl: string;
  timePosted: number;
  announcementGid: string;
}

export interface CPlayerUpdateSteamAnnouncementLastReadRequest {
  announcementGid: string;
  timePosted: number;
}

export interface CPlayerUpdateSteamAnnouncementLastReadResponse {
}

function createBaseCPlayerGetMutualFriendsForIncomingInvitesRequest(): CPlayerGetMutualFriendsForIncomingInvitesRequest {
  return {};
}

export const CPlayerGetMutualFriendsForIncomingInvitesRequest = {
  encode(_: CPlayerGetMutualFriendsForIncomingInvitesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetMutualFriendsForIncomingInvitesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetMutualFriendsForIncomingInvitesRequest();
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

  fromJSON(_: any): CPlayerGetMutualFriendsForIncomingInvitesRequest {
    return {};
  },

  toJSON(_: CPlayerGetMutualFriendsForIncomingInvitesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(
    base?: DeepPartial<CPlayerGetMutualFriendsForIncomingInvitesRequest>,
  ): CPlayerGetMutualFriendsForIncomingInvitesRequest {
    return CPlayerGetMutualFriendsForIncomingInvitesRequest.fromPartial(base ?? {});
  },

  fromPartial(
    _: DeepPartial<CPlayerGetMutualFriendsForIncomingInvitesRequest>,
  ): CPlayerGetMutualFriendsForIncomingInvitesRequest {
    const message = createBaseCPlayerGetMutualFriendsForIncomingInvitesRequest();
    return message;
  },
};

function createBaseCPlayerIncomingInviteMutualFriendList(): CPlayerIncomingInviteMutualFriendList {
  return { steamid: "0", mutualFriendAccountIds: [] };
}

export const CPlayerIncomingInviteMutualFriendList = {
  encode(message: CPlayerIncomingInviteMutualFriendList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    writer.uint32(18).fork();
    for (const v of message.mutualFriendAccountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerIncomingInviteMutualFriendList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerIncomingInviteMutualFriendList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.steamid = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag == 16) {
            message.mutualFriendAccountIds.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.mutualFriendAccountIds.push(reader.uint32());
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

  fromJSON(object: any): CPlayerIncomingInviteMutualFriendList {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      mutualFriendAccountIds: Array.isArray(object?.mutualFriendAccountIds)
        ? object.mutualFriendAccountIds.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CPlayerIncomingInviteMutualFriendList): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    if (message.mutualFriendAccountIds) {
      obj.mutualFriendAccountIds = message.mutualFriendAccountIds.map((e) => Math.round(e));
    } else {
      obj.mutualFriendAccountIds = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CPlayerIncomingInviteMutualFriendList>): CPlayerIncomingInviteMutualFriendList {
    return CPlayerIncomingInviteMutualFriendList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPlayerIncomingInviteMutualFriendList>): CPlayerIncomingInviteMutualFriendList {
    const message = createBaseCPlayerIncomingInviteMutualFriendList();
    message.steamid = object.steamid ?? "0";
    message.mutualFriendAccountIds = object.mutualFriendAccountIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseCPlayerGetMutualFriendsForIncomingInvitesResponse(): CPlayerGetMutualFriendsForIncomingInvitesResponse {
  return { incomingInviteMutualFriendsLists: [] };
}

export const CPlayerGetMutualFriendsForIncomingInvitesResponse = {
  encode(
    message: CPlayerGetMutualFriendsForIncomingInvitesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.incomingInviteMutualFriendsLists) {
      CPlayerIncomingInviteMutualFriendList.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetMutualFriendsForIncomingInvitesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetMutualFriendsForIncomingInvitesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.incomingInviteMutualFriendsLists.push(
            CPlayerIncomingInviteMutualFriendList.decode(reader, reader.uint32()),
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

  fromJSON(object: any): CPlayerGetMutualFriendsForIncomingInvitesResponse {
    return {
      incomingInviteMutualFriendsLists: Array.isArray(object?.incomingInviteMutualFriendsLists)
        ? object.incomingInviteMutualFriendsLists.map((e: any) => CPlayerIncomingInviteMutualFriendList.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPlayerGetMutualFriendsForIncomingInvitesResponse): unknown {
    const obj: any = {};
    if (message.incomingInviteMutualFriendsLists) {
      obj.incomingInviteMutualFriendsLists = message.incomingInviteMutualFriendsLists.map((e) =>
        e ? CPlayerIncomingInviteMutualFriendList.toJSON(e) : undefined
      );
    } else {
      obj.incomingInviteMutualFriendsLists = [];
    }
    return obj;
  },

  create(
    base?: DeepPartial<CPlayerGetMutualFriendsForIncomingInvitesResponse>,
  ): CPlayerGetMutualFriendsForIncomingInvitesResponse {
    return CPlayerGetMutualFriendsForIncomingInvitesResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CPlayerGetMutualFriendsForIncomingInvitesResponse>,
  ): CPlayerGetMutualFriendsForIncomingInvitesResponse {
    const message = createBaseCPlayerGetMutualFriendsForIncomingInvitesResponse();
    message.incomingInviteMutualFriendsLists =
      object.incomingInviteMutualFriendsLists?.map((e) => CPlayerIncomingInviteMutualFriendList.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPlayerGetFriendsGameplayInfoRequest(): CPlayerGetFriendsGameplayInfoRequest {
  return { appid: 0 };
}

export const CPlayerGetFriendsGameplayInfoRequest = {
  encode(message: CPlayerGetFriendsGameplayInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetFriendsGameplayInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetFriendsGameplayInfoRequest();
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

  fromJSON(object: any): CPlayerGetFriendsGameplayInfoRequest {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CPlayerGetFriendsGameplayInfoRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create(base?: DeepPartial<CPlayerGetFriendsGameplayInfoRequest>): CPlayerGetFriendsGameplayInfoRequest {
    return CPlayerGetFriendsGameplayInfoRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPlayerGetFriendsGameplayInfoRequest>): CPlayerGetFriendsGameplayInfoRequest {
    const message = createBaseCPlayerGetFriendsGameplayInfoRequest();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCPlayerGetFriendsGameplayInfoResponse(): CPlayerGetFriendsGameplayInfoResponse {
  return { yourInfo: undefined, inGame: [], playedRecently: [], playedEver: [], owns: [], inWishlist: [] };
}

export const CPlayerGetFriendsGameplayInfoResponse = {
  encode(message: CPlayerGetFriendsGameplayInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.yourInfo !== undefined) {
      CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo.encode(message.yourInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.inGame) {
      CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.playedRecently) {
      CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.playedEver) {
      CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.owns) {
      CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.inWishlist) {
      CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetFriendsGameplayInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetFriendsGameplayInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.yourInfo = CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.inGame.push(
            CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.playedRecently.push(
            CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.decode(reader, reader.uint32()),
          );
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.playedEver.push(
            CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.decode(reader, reader.uint32()),
          );
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.owns.push(CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.inWishlist.push(
            CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.decode(reader, reader.uint32()),
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

  fromJSON(object: any): CPlayerGetFriendsGameplayInfoResponse {
    return {
      yourInfo: isSet(object.yourInfo)
        ? CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo.fromJSON(object.yourInfo)
        : undefined,
      inGame: Array.isArray(object?.inGame)
        ? object.inGame.map((e: any) => CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromJSON(e))
        : [],
      playedRecently: Array.isArray(object?.playedRecently)
        ? object.playedRecently.map((e: any) => CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromJSON(e))
        : [],
      playedEver: Array.isArray(object?.playedEver)
        ? object.playedEver.map((e: any) => CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromJSON(e))
        : [],
      owns: Array.isArray(object?.owns)
        ? object.owns.map((e: any) => CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromJSON(e))
        : [],
      inWishlist: Array.isArray(object?.inWishlist)
        ? object.inWishlist.map((e: any) => CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPlayerGetFriendsGameplayInfoResponse): unknown {
    const obj: any = {};
    message.yourInfo !== undefined && (obj.yourInfo = message.yourInfo
      ? CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo.toJSON(message.yourInfo)
      : undefined);
    if (message.inGame) {
      obj.inGame = message.inGame.map((e) =>
        e ? CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.toJSON(e) : undefined
      );
    } else {
      obj.inGame = [];
    }
    if (message.playedRecently) {
      obj.playedRecently = message.playedRecently.map((e) =>
        e ? CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.toJSON(e) : undefined
      );
    } else {
      obj.playedRecently = [];
    }
    if (message.playedEver) {
      obj.playedEver = message.playedEver.map((e) =>
        e ? CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.toJSON(e) : undefined
      );
    } else {
      obj.playedEver = [];
    }
    if (message.owns) {
      obj.owns = message.owns.map((e) =>
        e ? CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.toJSON(e) : undefined
      );
    } else {
      obj.owns = [];
    }
    if (message.inWishlist) {
      obj.inWishlist = message.inWishlist.map((e) =>
        e ? CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.toJSON(e) : undefined
      );
    } else {
      obj.inWishlist = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CPlayerGetFriendsGameplayInfoResponse>): CPlayerGetFriendsGameplayInfoResponse {
    return CPlayerGetFriendsGameplayInfoResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPlayerGetFriendsGameplayInfoResponse>): CPlayerGetFriendsGameplayInfoResponse {
    const message = createBaseCPlayerGetFriendsGameplayInfoResponse();
    message.yourInfo = (object.yourInfo !== undefined && object.yourInfo !== null)
      ? CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo.fromPartial(object.yourInfo)
      : undefined;
    message.inGame =
      object.inGame?.map((e) => CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromPartial(e)) || [];
    message.playedRecently =
      object.playedRecently?.map((e) => CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromPartial(e)) || [];
    message.playedEver =
      object.playedEver?.map((e) => CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromPartial(e)) || [];
    message.owns = object.owns?.map((e) => CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromPartial(e)) ||
      [];
    message.inWishlist =
      object.inWishlist?.map((e) => CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo(): CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo {
  return { steamid: "0", minutesPlayed: 0, minutesPlayedForever: 0 };
}

export const CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo = {
  encode(
    message: CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.minutesPlayed !== 0) {
      writer.uint32(16).uint32(message.minutesPlayed);
    }
    if (message.minutesPlayedForever !== 0) {
      writer.uint32(24).uint32(message.minutesPlayedForever);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.steamid = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.minutesPlayed = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.minutesPlayedForever = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      minutesPlayed: isSet(object.minutesPlayed) ? Number(object.minutesPlayed) : 0,
      minutesPlayedForever: isSet(object.minutesPlayedForever) ? Number(object.minutesPlayedForever) : 0,
    };
  },

  toJSON(message: CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.minutesPlayed !== undefined && (obj.minutesPlayed = Math.round(message.minutesPlayed));
    message.minutesPlayedForever !== undefined && (obj.minutesPlayedForever = Math.round(message.minutesPlayedForever));
    return obj;
  },

  create(
    base?: DeepPartial<CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo>,
  ): CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo {
    return CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo>,
  ): CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo {
    const message = createBaseCPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo();
    message.steamid = object.steamid ?? "0";
    message.minutesPlayed = object.minutesPlayed ?? 0;
    message.minutesPlayedForever = object.minutesPlayedForever ?? 0;
    return message;
  },
};

function createBaseCPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo(): CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo {
  return { steamid: "0", minutesPlayed: 0, minutesPlayedForever: 0, inWishlist: false, owned: false };
}

export const CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo = {
  encode(
    message: CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.minutesPlayed !== 0) {
      writer.uint32(16).uint32(message.minutesPlayed);
    }
    if (message.minutesPlayedForever !== 0) {
      writer.uint32(24).uint32(message.minutesPlayedForever);
    }
    if (message.inWishlist === true) {
      writer.uint32(32).bool(message.inWishlist);
    }
    if (message.owned === true) {
      writer.uint32(40).bool(message.owned);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.steamid = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.minutesPlayed = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.minutesPlayedForever = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.inWishlist = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.owned = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      minutesPlayed: isSet(object.minutesPlayed) ? Number(object.minutesPlayed) : 0,
      minutesPlayedForever: isSet(object.minutesPlayedForever) ? Number(object.minutesPlayedForever) : 0,
      inWishlist: isSet(object.inWishlist) ? Boolean(object.inWishlist) : false,
      owned: isSet(object.owned) ? Boolean(object.owned) : false,
    };
  },

  toJSON(message: CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.minutesPlayed !== undefined && (obj.minutesPlayed = Math.round(message.minutesPlayed));
    message.minutesPlayedForever !== undefined && (obj.minutesPlayedForever = Math.round(message.minutesPlayedForever));
    message.inWishlist !== undefined && (obj.inWishlist = message.inWishlist);
    message.owned !== undefined && (obj.owned = message.owned);
    return obj;
  },

  create(
    base?: DeepPartial<CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo>,
  ): CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo {
    return CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo>,
  ): CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo {
    const message = createBaseCPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo();
    message.steamid = object.steamid ?? "0";
    message.minutesPlayed = object.minutesPlayed ?? 0;
    message.minutesPlayedForever = object.minutesPlayedForever ?? 0;
    message.inWishlist = object.inWishlist ?? false;
    message.owned = object.owned ?? false;
    return message;
  },
};

function createBaseCPlayerGetGameBadgeLevelsRequest(): CPlayerGetGameBadgeLevelsRequest {
  return { appid: 0 };
}

export const CPlayerGetGameBadgeLevelsRequest = {
  encode(message: CPlayerGetGameBadgeLevelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetGameBadgeLevelsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetGameBadgeLevelsRequest();
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

  fromJSON(object: any): CPlayerGetGameBadgeLevelsRequest {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CPlayerGetGameBadgeLevelsRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create(base?: DeepPartial<CPlayerGetGameBadgeLevelsRequest>): CPlayerGetGameBadgeLevelsRequest {
    return CPlayerGetGameBadgeLevelsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPlayerGetGameBadgeLevelsRequest>): CPlayerGetGameBadgeLevelsRequest {
    const message = createBaseCPlayerGetGameBadgeLevelsRequest();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCPlayerGetGameBadgeLevelsResponse(): CPlayerGetGameBadgeLevelsResponse {
  return { playerLevel: 0, badges: [] };
}

export const CPlayerGetGameBadgeLevelsResponse = {
  encode(message: CPlayerGetGameBadgeLevelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerLevel !== 0) {
      writer.uint32(8).uint32(message.playerLevel);
    }
    for (const v of message.badges) {
      CPlayerGetGameBadgeLevelsResponse_Badge.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetGameBadgeLevelsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetGameBadgeLevelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerLevel = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.badges.push(CPlayerGetGameBadgeLevelsResponse_Badge.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetGameBadgeLevelsResponse {
    return {
      playerLevel: isSet(object.playerLevel) ? Number(object.playerLevel) : 0,
      badges: Array.isArray(object?.badges)
        ? object.badges.map((e: any) => CPlayerGetGameBadgeLevelsResponse_Badge.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPlayerGetGameBadgeLevelsResponse): unknown {
    const obj: any = {};
    message.playerLevel !== undefined && (obj.playerLevel = Math.round(message.playerLevel));
    if (message.badges) {
      obj.badges = message.badges.map((e) => e ? CPlayerGetGameBadgeLevelsResponse_Badge.toJSON(e) : undefined);
    } else {
      obj.badges = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CPlayerGetGameBadgeLevelsResponse>): CPlayerGetGameBadgeLevelsResponse {
    return CPlayerGetGameBadgeLevelsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPlayerGetGameBadgeLevelsResponse>): CPlayerGetGameBadgeLevelsResponse {
    const message = createBaseCPlayerGetGameBadgeLevelsResponse();
    message.playerLevel = object.playerLevel ?? 0;
    message.badges = object.badges?.map((e) => CPlayerGetGameBadgeLevelsResponse_Badge.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPlayerGetGameBadgeLevelsResponse_Badge(): CPlayerGetGameBadgeLevelsResponse_Badge {
  return { level: 0, series: 0, borderColor: 0 };
}

export const CPlayerGetGameBadgeLevelsResponse_Badge = {
  encode(message: CPlayerGetGameBadgeLevelsResponse_Badge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.level !== 0) {
      writer.uint32(8).int32(message.level);
    }
    if (message.series !== 0) {
      writer.uint32(16).int32(message.series);
    }
    if (message.borderColor !== 0) {
      writer.uint32(24).uint32(message.borderColor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetGameBadgeLevelsResponse_Badge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetGameBadgeLevelsResponse_Badge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.level = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.series = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.borderColor = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetGameBadgeLevelsResponse_Badge {
    return {
      level: isSet(object.level) ? Number(object.level) : 0,
      series: isSet(object.series) ? Number(object.series) : 0,
      borderColor: isSet(object.borderColor) ? Number(object.borderColor) : 0,
    };
  },

  toJSON(message: CPlayerGetGameBadgeLevelsResponse_Badge): unknown {
    const obj: any = {};
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.series !== undefined && (obj.series = Math.round(message.series));
    message.borderColor !== undefined && (obj.borderColor = Math.round(message.borderColor));
    return obj;
  },

  create(base?: DeepPartial<CPlayerGetGameBadgeLevelsResponse_Badge>): CPlayerGetGameBadgeLevelsResponse_Badge {
    return CPlayerGetGameBadgeLevelsResponse_Badge.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPlayerGetGameBadgeLevelsResponse_Badge>): CPlayerGetGameBadgeLevelsResponse_Badge {
    const message = createBaseCPlayerGetGameBadgeLevelsResponse_Badge();
    message.level = object.level ?? 0;
    message.series = object.series ?? 0;
    message.borderColor = object.borderColor ?? 0;
    return message;
  },
};

function createBaseCPlayerGetLastPlayedTimesRequest(): CPlayerGetLastPlayedTimesRequest {
  return { minLastPlayed: 0 };
}

export const CPlayerGetLastPlayedTimesRequest = {
  encode(message: CPlayerGetLastPlayedTimesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minLastPlayed !== 0) {
      writer.uint32(8).uint32(message.minLastPlayed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetLastPlayedTimesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetLastPlayedTimesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.minLastPlayed = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetLastPlayedTimesRequest {
    return { minLastPlayed: isSet(object.minLastPlayed) ? Number(object.minLastPlayed) : 0 };
  },

  toJSON(message: CPlayerGetLastPlayedTimesRequest): unknown {
    const obj: any = {};
    message.minLastPlayed !== undefined && (obj.minLastPlayed = Math.round(message.minLastPlayed));
    return obj;
  },

  create(base?: DeepPartial<CPlayerGetLastPlayedTimesRequest>): CPlayerGetLastPlayedTimesRequest {
    return CPlayerGetLastPlayedTimesRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPlayerGetLastPlayedTimesRequest>): CPlayerGetLastPlayedTimesRequest {
    const message = createBaseCPlayerGetLastPlayedTimesRequest();
    message.minLastPlayed = object.minLastPlayed ?? 0;
    return message;
  },
};

function createBaseCPlayerGetLastPlayedTimesResponse(): CPlayerGetLastPlayedTimesResponse {
  return { games: [] };
}

export const CPlayerGetLastPlayedTimesResponse = {
  encode(message: CPlayerGetLastPlayedTimesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.games) {
      CPlayerGetLastPlayedTimesResponse_Game.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetLastPlayedTimesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetLastPlayedTimesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.games.push(CPlayerGetLastPlayedTimesResponse_Game.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetLastPlayedTimesResponse {
    return {
      games: Array.isArray(object?.games)
        ? object.games.map((e: any) => CPlayerGetLastPlayedTimesResponse_Game.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPlayerGetLastPlayedTimesResponse): unknown {
    const obj: any = {};
    if (message.games) {
      obj.games = message.games.map((e) => e ? CPlayerGetLastPlayedTimesResponse_Game.toJSON(e) : undefined);
    } else {
      obj.games = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CPlayerGetLastPlayedTimesResponse>): CPlayerGetLastPlayedTimesResponse {
    return CPlayerGetLastPlayedTimesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPlayerGetLastPlayedTimesResponse>): CPlayerGetLastPlayedTimesResponse {
    const message = createBaseCPlayerGetLastPlayedTimesResponse();
    message.games = object.games?.map((e) => CPlayerGetLastPlayedTimesResponse_Game.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPlayerGetLastPlayedTimesResponse_Game(): CPlayerGetLastPlayedTimesResponse_Game {
  return { appid: 0, lastPlaytime: 0, playtime2weeks: 0, playtimeForever: 0, firstPlaytime: 0 };
}

export const CPlayerGetLastPlayedTimesResponse_Game = {
  encode(message: CPlayerGetLastPlayedTimesResponse_Game, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).int32(message.appid);
    }
    if (message.lastPlaytime !== 0) {
      writer.uint32(16).uint32(message.lastPlaytime);
    }
    if (message.playtime2weeks !== 0) {
      writer.uint32(24).int32(message.playtime2weeks);
    }
    if (message.playtimeForever !== 0) {
      writer.uint32(32).int32(message.playtimeForever);
    }
    if (message.firstPlaytime !== 0) {
      writer.uint32(40).uint32(message.firstPlaytime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetLastPlayedTimesResponse_Game {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetLastPlayedTimesResponse_Game();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.appid = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.lastPlaytime = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.playtime2weeks = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.playtimeForever = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.firstPlaytime = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetLastPlayedTimesResponse_Game {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      lastPlaytime: isSet(object.lastPlaytime) ? Number(object.lastPlaytime) : 0,
      playtime2weeks: isSet(object.playtime2weeks) ? Number(object.playtime2weeks) : 0,
      playtimeForever: isSet(object.playtimeForever) ? Number(object.playtimeForever) : 0,
      firstPlaytime: isSet(object.firstPlaytime) ? Number(object.firstPlaytime) : 0,
    };
  },

  toJSON(message: CPlayerGetLastPlayedTimesResponse_Game): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.lastPlaytime !== undefined && (obj.lastPlaytime = Math.round(message.lastPlaytime));
    message.playtime2weeks !== undefined && (obj.playtime2weeks = Math.round(message.playtime2weeks));
    message.playtimeForever !== undefined && (obj.playtimeForever = Math.round(message.playtimeForever));
    message.firstPlaytime !== undefined && (obj.firstPlaytime = Math.round(message.firstPlaytime));
    return obj;
  },

  create(base?: DeepPartial<CPlayerGetLastPlayedTimesResponse_Game>): CPlayerGetLastPlayedTimesResponse_Game {
    return CPlayerGetLastPlayedTimesResponse_Game.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPlayerGetLastPlayedTimesResponse_Game>): CPlayerGetLastPlayedTimesResponse_Game {
    const message = createBaseCPlayerGetLastPlayedTimesResponse_Game();
    message.appid = object.appid ?? 0;
    message.lastPlaytime = object.lastPlaytime ?? 0;
    message.playtime2weeks = object.playtime2weeks ?? 0;
    message.playtimeForever = object.playtimeForever ?? 0;
    message.firstPlaytime = object.firstPlaytime ?? 0;
    return message;
  },
};

function createBaseCPlayerAcceptSSARequest(): CPlayerAcceptSSARequest {
  return {};
}

export const CPlayerAcceptSSARequest = {
  encode(_: CPlayerAcceptSSARequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerAcceptSSARequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerAcceptSSARequest();
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

  fromJSON(_: any): CPlayerAcceptSSARequest {
    return {};
  },

  toJSON(_: CPlayerAcceptSSARequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CPlayerAcceptSSARequest>): CPlayerAcceptSSARequest {
    return CPlayerAcceptSSARequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CPlayerAcceptSSARequest>): CPlayerAcceptSSARequest {
    const message = createBaseCPlayerAcceptSSARequest();
    return message;
  },
};

function createBaseCPlayerAcceptSSAResponse(): CPlayerAcceptSSAResponse {
  return {};
}

export const CPlayerAcceptSSAResponse = {
  encode(_: CPlayerAcceptSSAResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerAcceptSSAResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerAcceptSSAResponse();
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

  fromJSON(_: any): CPlayerAcceptSSAResponse {
    return {};
  },

  toJSON(_: CPlayerAcceptSSAResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CPlayerAcceptSSAResponse>): CPlayerAcceptSSAResponse {
    return CPlayerAcceptSSAResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CPlayerAcceptSSAResponse>): CPlayerAcceptSSAResponse {
    const message = createBaseCPlayerAcceptSSAResponse();
    return message;
  },
};

function createBaseCPlayerGetNicknameListRequest(): CPlayerGetNicknameListRequest {
  return {};
}

export const CPlayerGetNicknameListRequest = {
  encode(_: CPlayerGetNicknameListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetNicknameListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetNicknameListRequest();
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

  fromJSON(_: any): CPlayerGetNicknameListRequest {
    return {};
  },

  toJSON(_: CPlayerGetNicknameListRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CPlayerGetNicknameListRequest>): CPlayerGetNicknameListRequest {
    return CPlayerGetNicknameListRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CPlayerGetNicknameListRequest>): CPlayerGetNicknameListRequest {
    const message = createBaseCPlayerGetNicknameListRequest();
    return message;
  },
};

function createBaseCPlayerGetNicknameListResponse(): CPlayerGetNicknameListResponse {
  return { nicknames: [] };
}

export const CPlayerGetNicknameListResponse = {
  encode(message: CPlayerGetNicknameListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nicknames) {
      CPlayerGetNicknameListResponse_PlayerNickname.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetNicknameListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetNicknameListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.nicknames.push(CPlayerGetNicknameListResponse_PlayerNickname.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetNicknameListResponse {
    return {
      nicknames: Array.isArray(object?.nicknames)
        ? object.nicknames.map((e: any) => CPlayerGetNicknameListResponse_PlayerNickname.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPlayerGetNicknameListResponse): unknown {
    const obj: any = {};
    if (message.nicknames) {
      obj.nicknames = message.nicknames.map((e) =>
        e ? CPlayerGetNicknameListResponse_PlayerNickname.toJSON(e) : undefined
      );
    } else {
      obj.nicknames = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CPlayerGetNicknameListResponse>): CPlayerGetNicknameListResponse {
    return CPlayerGetNicknameListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPlayerGetNicknameListResponse>): CPlayerGetNicknameListResponse {
    const message = createBaseCPlayerGetNicknameListResponse();
    message.nicknames = object.nicknames?.map((e) => CPlayerGetNicknameListResponse_PlayerNickname.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseCPlayerGetNicknameListResponse_PlayerNickname(): CPlayerGetNicknameListResponse_PlayerNickname {
  return { accountid: 0, nickname: "" };
}

export const CPlayerGetNicknameListResponse_PlayerNickname = {
  encode(message: CPlayerGetNicknameListResponse_PlayerNickname, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(13).fixed32(message.accountid);
    }
    if (message.nickname !== "") {
      writer.uint32(18).string(message.nickname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetNicknameListResponse_PlayerNickname {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetNicknameListResponse_PlayerNickname();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.accountid = reader.fixed32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.nickname = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetNicknameListResponse_PlayerNickname {
    return {
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
    };
  },

  toJSON(message: CPlayerGetNicknameListResponse_PlayerNickname): unknown {
    const obj: any = {};
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.nickname !== undefined && (obj.nickname = message.nickname);
    return obj;
  },

  create(
    base?: DeepPartial<CPlayerGetNicknameListResponse_PlayerNickname>,
  ): CPlayerGetNicknameListResponse_PlayerNickname {
    return CPlayerGetNicknameListResponse_PlayerNickname.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CPlayerGetNicknameListResponse_PlayerNickname>,
  ): CPlayerGetNicknameListResponse_PlayerNickname {
    const message = createBaseCPlayerGetNicknameListResponse_PlayerNickname();
    message.accountid = object.accountid ?? 0;
    message.nickname = object.nickname ?? "";
    return message;
  },
};

function createBaseCPlayerGetPerFriendPreferencesRequest(): CPlayerGetPerFriendPreferencesRequest {
  return {};
}

export const CPlayerGetPerFriendPreferencesRequest = {
  encode(_: CPlayerGetPerFriendPreferencesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetPerFriendPreferencesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetPerFriendPreferencesRequest();
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

  fromJSON(_: any): CPlayerGetPerFriendPreferencesRequest {
    return {};
  },

  toJSON(_: CPlayerGetPerFriendPreferencesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CPlayerGetPerFriendPreferencesRequest>): CPlayerGetPerFriendPreferencesRequest {
    return CPlayerGetPerFriendPreferencesRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CPlayerGetPerFriendPreferencesRequest>): CPlayerGetPerFriendPreferencesRequest {
    const message = createBaseCPlayerGetPerFriendPreferencesRequest();
    return message;
  },
};

function createBasePerFriendPreferences(): PerFriendPreferences {
  return {
    accountid: 0,
    nickname: "",
    notificationsShowingame: 0,
    notificationsShowonline: 0,
    notificationsShowmessages: 0,
    soundsShowingame: 0,
    soundsShowonline: 0,
    soundsShowmessages: 0,
    notificationsSendmobile: 0,
  };
}

export const PerFriendPreferences = {
  encode(message: PerFriendPreferences, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(13).fixed32(message.accountid);
    }
    if (message.nickname !== "") {
      writer.uint32(18).string(message.nickname);
    }
    if (message.notificationsShowingame !== 0) {
      writer.uint32(24).int32(message.notificationsShowingame);
    }
    if (message.notificationsShowonline !== 0) {
      writer.uint32(32).int32(message.notificationsShowonline);
    }
    if (message.notificationsShowmessages !== 0) {
      writer.uint32(40).int32(message.notificationsShowmessages);
    }
    if (message.soundsShowingame !== 0) {
      writer.uint32(48).int32(message.soundsShowingame);
    }
    if (message.soundsShowonline !== 0) {
      writer.uint32(56).int32(message.soundsShowonline);
    }
    if (message.soundsShowmessages !== 0) {
      writer.uint32(64).int32(message.soundsShowmessages);
    }
    if (message.notificationsSendmobile !== 0) {
      writer.uint32(72).int32(message.notificationsSendmobile);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PerFriendPreferences {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerFriendPreferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.accountid = reader.fixed32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.nickname = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.notificationsShowingame = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.notificationsShowonline = reader.int32() as any;
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.notificationsShowmessages = reader.int32() as any;
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.soundsShowingame = reader.int32() as any;
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.soundsShowonline = reader.int32() as any;
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.soundsShowmessages = reader.int32() as any;
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.notificationsSendmobile = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PerFriendPreferences {
    return {
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      notificationsShowingame: isSet(object.notificationsShowingame)
        ? eNotificationSettingFromJSON(object.notificationsShowingame)
        : 0,
      notificationsShowonline: isSet(object.notificationsShowonline)
        ? eNotificationSettingFromJSON(object.notificationsShowonline)
        : 0,
      notificationsShowmessages: isSet(object.notificationsShowmessages)
        ? eNotificationSettingFromJSON(object.notificationsShowmessages)
        : 0,
      soundsShowingame: isSet(object.soundsShowingame) ? eNotificationSettingFromJSON(object.soundsShowingame) : 0,
      soundsShowonline: isSet(object.soundsShowonline) ? eNotificationSettingFromJSON(object.soundsShowonline) : 0,
      soundsShowmessages: isSet(object.soundsShowmessages)
        ? eNotificationSettingFromJSON(object.soundsShowmessages)
        : 0,
      notificationsSendmobile: isSet(object.notificationsSendmobile)
        ? eNotificationSettingFromJSON(object.notificationsSendmobile)
        : 0,
    };
  },

  toJSON(message: PerFriendPreferences): unknown {
    const obj: any = {};
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.nickname !== undefined && (obj.nickname = message.nickname);
    message.notificationsShowingame !== undefined &&
      (obj.notificationsShowingame = eNotificationSettingToJSON(message.notificationsShowingame));
    message.notificationsShowonline !== undefined &&
      (obj.notificationsShowonline = eNotificationSettingToJSON(message.notificationsShowonline));
    message.notificationsShowmessages !== undefined &&
      (obj.notificationsShowmessages = eNotificationSettingToJSON(message.notificationsShowmessages));
    message.soundsShowingame !== undefined &&
      (obj.soundsShowingame = eNotificationSettingToJSON(message.soundsShowingame));
    message.soundsShowonline !== undefined &&
      (obj.soundsShowonline = eNotificationSettingToJSON(message.soundsShowonline));
    message.soundsShowmessages !== undefined &&
      (obj.soundsShowmessages = eNotificationSettingToJSON(message.soundsShowmessages));
    message.notificationsSendmobile !== undefined &&
      (obj.notificationsSendmobile = eNotificationSettingToJSON(message.notificationsSendmobile));
    return obj;
  },

  create(base?: DeepPartial<PerFriendPreferences>): PerFriendPreferences {
    return PerFriendPreferences.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PerFriendPreferences>): PerFriendPreferences {
    const message = createBasePerFriendPreferences();
    message.accountid = object.accountid ?? 0;
    message.nickname = object.nickname ?? "";
    message.notificationsShowingame = object.notificationsShowingame ?? 0;
    message.notificationsShowonline = object.notificationsShowonline ?? 0;
    message.notificationsShowmessages = object.notificationsShowmessages ?? 0;
    message.soundsShowingame = object.soundsShowingame ?? 0;
    message.soundsShowonline = object.soundsShowonline ?? 0;
    message.soundsShowmessages = object.soundsShowmessages ?? 0;
    message.notificationsSendmobile = object.notificationsSendmobile ?? 0;
    return message;
  },
};

function createBaseCPlayerGetPerFriendPreferencesResponse(): CPlayerGetPerFriendPreferencesResponse {
  return { preferences: [] };
}

export const CPlayerGetPerFriendPreferencesResponse = {
  encode(message: CPlayerGetPerFriendPreferencesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.preferences) {
      PerFriendPreferences.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetPerFriendPreferencesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetPerFriendPreferencesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.preferences.push(PerFriendPreferences.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetPerFriendPreferencesResponse {
    return {
      preferences: Array.isArray(object?.preferences)
        ? object.preferences.map((e: any) => PerFriendPreferences.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPlayerGetPerFriendPreferencesResponse): unknown {
    const obj: any = {};
    if (message.preferences) {
      obj.preferences = message.preferences.map((e) => e ? PerFriendPreferences.toJSON(e) : undefined);
    } else {
      obj.preferences = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CPlayerGetPerFriendPreferencesResponse>): CPlayerGetPerFriendPreferencesResponse {
    return CPlayerGetPerFriendPreferencesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPlayerGetPerFriendPreferencesResponse>): CPlayerGetPerFriendPreferencesResponse {
    const message = createBaseCPlayerGetPerFriendPreferencesResponse();
    message.preferences = object.preferences?.map((e) => PerFriendPreferences.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPlayerSetPerFriendPreferencesRequest(): CPlayerSetPerFriendPreferencesRequest {
  return { preferences: undefined };
}

export const CPlayerSetPerFriendPreferencesRequest = {
  encode(message: CPlayerSetPerFriendPreferencesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.preferences !== undefined) {
      PerFriendPreferences.encode(message.preferences, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetPerFriendPreferencesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetPerFriendPreferencesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.preferences = PerFriendPreferences.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerSetPerFriendPreferencesRequest {
    return { preferences: isSet(object.preferences) ? PerFriendPreferences.fromJSON(object.preferences) : undefined };
  },

  toJSON(message: CPlayerSetPerFriendPreferencesRequest): unknown {
    const obj: any = {};
    message.preferences !== undefined &&
      (obj.preferences = message.preferences ? PerFriendPreferences.toJSON(message.preferences) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CPlayerSetPerFriendPreferencesRequest>): CPlayerSetPerFriendPreferencesRequest {
    return CPlayerSetPerFriendPreferencesRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPlayerSetPerFriendPreferencesRequest>): CPlayerSetPerFriendPreferencesRequest {
    const message = createBaseCPlayerSetPerFriendPreferencesRequest();
    message.preferences = (object.preferences !== undefined && object.preferences !== null)
      ? PerFriendPreferences.fromPartial(object.preferences)
      : undefined;
    return message;
  },
};

function createBaseCPlayerSetPerFriendPreferencesResponse(): CPlayerSetPerFriendPreferencesResponse {
  return {};
}

export const CPlayerSetPerFriendPreferencesResponse = {
  encode(_: CPlayerSetPerFriendPreferencesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetPerFriendPreferencesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetPerFriendPreferencesResponse();
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

  fromJSON(_: any): CPlayerSetPerFriendPreferencesResponse {
    return {};
  },

  toJSON(_: CPlayerSetPerFriendPreferencesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CPlayerSetPerFriendPreferencesResponse>): CPlayerSetPerFriendPreferencesResponse {
    return CPlayerSetPerFriendPreferencesResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CPlayerSetPerFriendPreferencesResponse>): CPlayerSetPerFriendPreferencesResponse {
    const message = createBaseCPlayerSetPerFriendPreferencesResponse();
    return message;
  },
};

function createBaseCPlayerAddFriendRequest(): CPlayerAddFriendRequest {
  return { steamid: "0" };
}

export const CPlayerAddFriendRequest = {
  encode(message: CPlayerAddFriendRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerAddFriendRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerAddFriendRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.steamid = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerAddFriendRequest {
    return { steamid: isSet(object.steamid) ? String(object.steamid) : "0" };
  },

  toJSON(message: CPlayerAddFriendRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create(base?: DeepPartial<CPlayerAddFriendRequest>): CPlayerAddFriendRequest {
    return CPlayerAddFriendRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPlayerAddFriendRequest>): CPlayerAddFriendRequest {
    const message = createBaseCPlayerAddFriendRequest();
    message.steamid = object.steamid ?? "0";
    return message;
  },
};

function createBaseCPlayerAddFriendResponse(): CPlayerAddFriendResponse {
  return { inviteSent: false, friendRelationship: 0 };
}

export const CPlayerAddFriendResponse = {
  encode(message: CPlayerAddFriendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteSent === true) {
      writer.uint32(8).bool(message.inviteSent);
    }
    if (message.friendRelationship !== 0) {
      writer.uint32(16).uint32(message.friendRelationship);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerAddFriendResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerAddFriendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.inviteSent = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.friendRelationship = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerAddFriendResponse {
    return {
      inviteSent: isSet(object.inviteSent) ? Boolean(object.inviteSent) : false,
      friendRelationship: isSet(object.friendRelationship) ? Number(object.friendRelationship) : 0,
    };
  },

  toJSON(message: CPlayerAddFriendResponse): unknown {
    const obj: any = {};
    message.inviteSent !== undefined && (obj.inviteSent = message.inviteSent);
    message.friendRelationship !== undefined && (obj.friendRelationship = Math.round(message.friendRelationship));
    return obj;
  },

  create(base?: DeepPartial<CPlayerAddFriendResponse>): CPlayerAddFriendResponse {
    return CPlayerAddFriendResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPlayerAddFriendResponse>): CPlayerAddFriendResponse {
    const message = createBaseCPlayerAddFriendResponse();
    message.inviteSent = object.inviteSent ?? false;
    message.friendRelationship = object.friendRelationship ?? 0;
    return message;
  },
};

function createBaseCPlayerRemoveFriendRequest(): CPlayerRemoveFriendRequest {
  return { steamid: "0" };
}

export const CPlayerRemoveFriendRequest = {
  encode(message: CPlayerRemoveFriendRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerRemoveFriendRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerRemoveFriendRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.steamid = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerRemoveFriendRequest {
    return { steamid: isSet(object.steamid) ? String(object.steamid) : "0" };
  },

  toJSON(message: CPlayerRemoveFriendRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create(base?: DeepPartial<CPlayerRemoveFriendRequest>): CPlayerRemoveFriendRequest {
    return CPlayerRemoveFriendRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPlayerRemoveFriendRequest>): CPlayerRemoveFriendRequest {
    const message = createBaseCPlayerRemoveFriendRequest();
    message.steamid = object.steamid ?? "0";
    return message;
  },
};

function createBaseCPlayerRemoveFriendResponse(): CPlayerRemoveFriendResponse {
  return { friendRelationship: 0 };
}

export const CPlayerRemoveFriendResponse = {
  encode(message: CPlayerRemoveFriendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.friendRelationship !== 0) {
      writer.uint32(8).uint32(message.friendRelationship);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerRemoveFriendResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerRemoveFriendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.friendRelationship = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerRemoveFriendResponse {
    return { friendRelationship: isSet(object.friendRelationship) ? Number(object.friendRelationship) : 0 };
  },

  toJSON(message: CPlayerRemoveFriendResponse): unknown {
    const obj: any = {};
    message.friendRelationship !== undefined && (obj.friendRelationship = Math.round(message.friendRelationship));
    return obj;
  },

  create(base?: DeepPartial<CPlayerRemoveFriendResponse>): CPlayerRemoveFriendResponse {
    return CPlayerRemoveFriendResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPlayerRemoveFriendResponse>): CPlayerRemoveFriendResponse {
    const message = createBaseCPlayerRemoveFriendResponse();
    message.friendRelationship = object.friendRelationship ?? 0;
    return message;
  },
};

function createBaseCPlayerIgnoreFriendRequest(): CPlayerIgnoreFriendRequest {
  return { steamid: "0", unignore: false };
}

export const CPlayerIgnoreFriendRequest = {
  encode(message: CPlayerIgnoreFriendRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.unignore === true) {
      writer.uint32(16).bool(message.unignore);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerIgnoreFriendRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerIgnoreFriendRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.steamid = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.unignore = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerIgnoreFriendRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      unignore: isSet(object.unignore) ? Boolean(object.unignore) : false,
    };
  },

  toJSON(message: CPlayerIgnoreFriendRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.unignore !== undefined && (obj.unignore = message.unignore);
    return obj;
  },

  create(base?: DeepPartial<CPlayerIgnoreFriendRequest>): CPlayerIgnoreFriendRequest {
    return CPlayerIgnoreFriendRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPlayerIgnoreFriendRequest>): CPlayerIgnoreFriendRequest {
    const message = createBaseCPlayerIgnoreFriendRequest();
    message.steamid = object.steamid ?? "0";
    message.unignore = object.unignore ?? false;
    return message;
  },
};

function createBaseCPlayerIgnoreFriendResponse(): CPlayerIgnoreFriendResponse {
  return { friendRelationship: 0 };
}

export const CPlayerIgnoreFriendResponse = {
  encode(message: CPlayerIgnoreFriendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.friendRelationship !== 0) {
      writer.uint32(8).uint32(message.friendRelationship);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerIgnoreFriendResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerIgnoreFriendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.friendRelationship = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerIgnoreFriendResponse {
    return { friendRelationship: isSet(object.friendRelationship) ? Number(object.friendRelationship) : 0 };
  },

  toJSON(message: CPlayerIgnoreFriendResponse): unknown {
    const obj: any = {};
    message.friendRelationship !== undefined && (obj.friendRelationship = Math.round(message.friendRelationship));
    return obj;
  },

  create(base?: DeepPartial<CPlayerIgnoreFriendResponse>): CPlayerIgnoreFriendResponse {
    return CPlayerIgnoreFriendResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPlayerIgnoreFriendResponse>): CPlayerIgnoreFriendResponse {
    const message = createBaseCPlayerIgnoreFriendResponse();
    message.friendRelationship = object.friendRelationship ?? 0;
    return message;
  },
};

function createBaseCPlayerGetCommunityPreferencesRequest(): CPlayerGetCommunityPreferencesRequest {
  return {};
}

export const CPlayerGetCommunityPreferencesRequest = {
  encode(_: CPlayerGetCommunityPreferencesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetCommunityPreferencesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetCommunityPreferencesRequest();
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

  fromJSON(_: any): CPlayerGetCommunityPreferencesRequest {
    return {};
  },

  toJSON(_: CPlayerGetCommunityPreferencesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CPlayerGetCommunityPreferencesRequest>): CPlayerGetCommunityPreferencesRequest {
    return CPlayerGetCommunityPreferencesRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CPlayerGetCommunityPreferencesRequest>): CPlayerGetCommunityPreferencesRequest {
    const message = createBaseCPlayerGetCommunityPreferencesRequest();
    return message;
  },
};

function createBaseCPlayerCommunityPreferences(): CPlayerCommunityPreferences {
  return {
    hideAdultContentViolence: false,
    hideAdultContentSex: false,
    parenthesizeNicknames: false,
    timestampUpdated: 0,
  };
}

export const CPlayerCommunityPreferences = {
  encode(message: CPlayerCommunityPreferences, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hideAdultContentViolence === true) {
      writer.uint32(8).bool(message.hideAdultContentViolence);
    }
    if (message.hideAdultContentSex === true) {
      writer.uint32(16).bool(message.hideAdultContentSex);
    }
    if (message.parenthesizeNicknames === true) {
      writer.uint32(32).bool(message.parenthesizeNicknames);
    }
    if (message.timestampUpdated !== 0) {
      writer.uint32(24).uint32(message.timestampUpdated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerCommunityPreferences {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerCommunityPreferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.hideAdultContentViolence = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.hideAdultContentSex = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.parenthesizeNicknames = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.timestampUpdated = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerCommunityPreferences {
    return {
      hideAdultContentViolence: isSet(object.hideAdultContentViolence)
        ? Boolean(object.hideAdultContentViolence)
        : false,
      hideAdultContentSex: isSet(object.hideAdultContentSex) ? Boolean(object.hideAdultContentSex) : false,
      parenthesizeNicknames: isSet(object.parenthesizeNicknames) ? Boolean(object.parenthesizeNicknames) : false,
      timestampUpdated: isSet(object.timestampUpdated) ? Number(object.timestampUpdated) : 0,
    };
  },

  toJSON(message: CPlayerCommunityPreferences): unknown {
    const obj: any = {};
    message.hideAdultContentViolence !== undefined && (obj.hideAdultContentViolence = message.hideAdultContentViolence);
    message.hideAdultContentSex !== undefined && (obj.hideAdultContentSex = message.hideAdultContentSex);
    message.parenthesizeNicknames !== undefined && (obj.parenthesizeNicknames = message.parenthesizeNicknames);
    message.timestampUpdated !== undefined && (obj.timestampUpdated = Math.round(message.timestampUpdated));
    return obj;
  },

  create(base?: DeepPartial<CPlayerCommunityPreferences>): CPlayerCommunityPreferences {
    return CPlayerCommunityPreferences.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPlayerCommunityPreferences>): CPlayerCommunityPreferences {
    const message = createBaseCPlayerCommunityPreferences();
    message.hideAdultContentViolence = object.hideAdultContentViolence ?? false;
    message.hideAdultContentSex = object.hideAdultContentSex ?? false;
    message.parenthesizeNicknames = object.parenthesizeNicknames ?? false;
    message.timestampUpdated = object.timestampUpdated ?? 0;
    return message;
  },
};

function createBaseCPlayerGetCommunityPreferencesResponse(): CPlayerGetCommunityPreferencesResponse {
  return { preferences: undefined };
}

export const CPlayerGetCommunityPreferencesResponse = {
  encode(message: CPlayerGetCommunityPreferencesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.preferences !== undefined) {
      CPlayerCommunityPreferences.encode(message.preferences, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetCommunityPreferencesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetCommunityPreferencesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.preferences = CPlayerCommunityPreferences.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetCommunityPreferencesResponse {
    return {
      preferences: isSet(object.preferences) ? CPlayerCommunityPreferences.fromJSON(object.preferences) : undefined,
    };
  },

  toJSON(message: CPlayerGetCommunityPreferencesResponse): unknown {
    const obj: any = {};
    message.preferences !== undefined &&
      (obj.preferences = message.preferences ? CPlayerCommunityPreferences.toJSON(message.preferences) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CPlayerGetCommunityPreferencesResponse>): CPlayerGetCommunityPreferencesResponse {
    return CPlayerGetCommunityPreferencesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPlayerGetCommunityPreferencesResponse>): CPlayerGetCommunityPreferencesResponse {
    const message = createBaseCPlayerGetCommunityPreferencesResponse();
    message.preferences = (object.preferences !== undefined && object.preferences !== null)
      ? CPlayerCommunityPreferences.fromPartial(object.preferences)
      : undefined;
    return message;
  },
};

function createBaseCPlayerSetCommunityPreferencesRequest(): CPlayerSetCommunityPreferencesRequest {
  return { preferences: undefined };
}

export const CPlayerSetCommunityPreferencesRequest = {
  encode(message: CPlayerSetCommunityPreferencesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.preferences !== undefined) {
      CPlayerCommunityPreferences.encode(message.preferences, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetCommunityPreferencesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetCommunityPreferencesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.preferences = CPlayerCommunityPreferences.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerSetCommunityPreferencesRequest {
    return {
      preferences: isSet(object.preferences) ? CPlayerCommunityPreferences.fromJSON(object.preferences) : undefined,
    };
  },

  toJSON(message: CPlayerSetCommunityPreferencesRequest): unknown {
    const obj: any = {};
    message.preferences !== undefined &&
      (obj.preferences = message.preferences ? CPlayerCommunityPreferences.toJSON(message.preferences) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CPlayerSetCommunityPreferencesRequest>): CPlayerSetCommunityPreferencesRequest {
    return CPlayerSetCommunityPreferencesRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPlayerSetCommunityPreferencesRequest>): CPlayerSetCommunityPreferencesRequest {
    const message = createBaseCPlayerSetCommunityPreferencesRequest();
    message.preferences = (object.preferences !== undefined && object.preferences !== null)
      ? CPlayerCommunityPreferences.fromPartial(object.preferences)
      : undefined;
    return message;
  },
};

function createBaseCPlayerSetCommunityPreferencesResponse(): CPlayerSetCommunityPreferencesResponse {
  return {};
}

export const CPlayerSetCommunityPreferencesResponse = {
  encode(_: CPlayerSetCommunityPreferencesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetCommunityPreferencesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetCommunityPreferencesResponse();
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

  fromJSON(_: any): CPlayerSetCommunityPreferencesResponse {
    return {};
  },

  toJSON(_: CPlayerSetCommunityPreferencesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CPlayerSetCommunityPreferencesResponse>): CPlayerSetCommunityPreferencesResponse {
    return CPlayerSetCommunityPreferencesResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CPlayerSetCommunityPreferencesResponse>): CPlayerSetCommunityPreferencesResponse {
    const message = createBaseCPlayerSetCommunityPreferencesResponse();
    return message;
  },
};

function createBaseCPlayerGetNewSteamAnnouncementStateRequest(): CPlayerGetNewSteamAnnouncementStateRequest {
  return { language: 0 };
}

export const CPlayerGetNewSteamAnnouncementStateRequest = {
  encode(message: CPlayerGetNewSteamAnnouncementStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.language !== 0) {
      writer.uint32(8).int32(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetNewSteamAnnouncementStateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetNewSteamAnnouncementStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.language = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetNewSteamAnnouncementStateRequest {
    return { language: isSet(object.language) ? Number(object.language) : 0 };
  },

  toJSON(message: CPlayerGetNewSteamAnnouncementStateRequest): unknown {
    const obj: any = {};
    message.language !== undefined && (obj.language = Math.round(message.language));
    return obj;
  },

  create(base?: DeepPartial<CPlayerGetNewSteamAnnouncementStateRequest>): CPlayerGetNewSteamAnnouncementStateRequest {
    return CPlayerGetNewSteamAnnouncementStateRequest.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CPlayerGetNewSteamAnnouncementStateRequest>,
  ): CPlayerGetNewSteamAnnouncementStateRequest {
    const message = createBaseCPlayerGetNewSteamAnnouncementStateRequest();
    message.language = object.language ?? 0;
    return message;
  },
};

function createBaseCPlayerGetNewSteamAnnouncementStateResponse(): CPlayerGetNewSteamAnnouncementStateResponse {
  return { state: 0, announcementHeadline: "", announcementUrl: "", timePosted: 0, announcementGid: "0" };
}

export const CPlayerGetNewSteamAnnouncementStateResponse = {
  encode(message: CPlayerGetNewSteamAnnouncementStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.announcementHeadline !== "") {
      writer.uint32(18).string(message.announcementHeadline);
    }
    if (message.announcementUrl !== "") {
      writer.uint32(26).string(message.announcementUrl);
    }
    if (message.timePosted !== 0) {
      writer.uint32(32).uint32(message.timePosted);
    }
    if (message.announcementGid !== "0") {
      writer.uint32(40).uint64(message.announcementGid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetNewSteamAnnouncementStateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetNewSteamAnnouncementStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.state = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.announcementHeadline = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.announcementUrl = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.timePosted = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.announcementGid = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetNewSteamAnnouncementStateResponse {
    return {
      state: isSet(object.state) ? Number(object.state) : 0,
      announcementHeadline: isSet(object.announcementHeadline) ? String(object.announcementHeadline) : "",
      announcementUrl: isSet(object.announcementUrl) ? String(object.announcementUrl) : "",
      timePosted: isSet(object.timePosted) ? Number(object.timePosted) : 0,
      announcementGid: isSet(object.announcementGid) ? String(object.announcementGid) : "0",
    };
  },

  toJSON(message: CPlayerGetNewSteamAnnouncementStateResponse): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = Math.round(message.state));
    message.announcementHeadline !== undefined && (obj.announcementHeadline = message.announcementHeadline);
    message.announcementUrl !== undefined && (obj.announcementUrl = message.announcementUrl);
    message.timePosted !== undefined && (obj.timePosted = Math.round(message.timePosted));
    message.announcementGid !== undefined && (obj.announcementGid = message.announcementGid);
    return obj;
  },

  create(base?: DeepPartial<CPlayerGetNewSteamAnnouncementStateResponse>): CPlayerGetNewSteamAnnouncementStateResponse {
    return CPlayerGetNewSteamAnnouncementStateResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CPlayerGetNewSteamAnnouncementStateResponse>,
  ): CPlayerGetNewSteamAnnouncementStateResponse {
    const message = createBaseCPlayerGetNewSteamAnnouncementStateResponse();
    message.state = object.state ?? 0;
    message.announcementHeadline = object.announcementHeadline ?? "";
    message.announcementUrl = object.announcementUrl ?? "";
    message.timePosted = object.timePosted ?? 0;
    message.announcementGid = object.announcementGid ?? "0";
    return message;
  },
};

function createBaseCPlayerUpdateSteamAnnouncementLastReadRequest(): CPlayerUpdateSteamAnnouncementLastReadRequest {
  return { announcementGid: "0", timePosted: 0 };
}

export const CPlayerUpdateSteamAnnouncementLastReadRequest = {
  encode(message: CPlayerUpdateSteamAnnouncementLastReadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.announcementGid !== "0") {
      writer.uint32(8).uint64(message.announcementGid);
    }
    if (message.timePosted !== 0) {
      writer.uint32(16).uint32(message.timePosted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerUpdateSteamAnnouncementLastReadRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerUpdateSteamAnnouncementLastReadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.announcementGid = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.timePosted = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPlayerUpdateSteamAnnouncementLastReadRequest {
    return {
      announcementGid: isSet(object.announcementGid) ? String(object.announcementGid) : "0",
      timePosted: isSet(object.timePosted) ? Number(object.timePosted) : 0,
    };
  },

  toJSON(message: CPlayerUpdateSteamAnnouncementLastReadRequest): unknown {
    const obj: any = {};
    message.announcementGid !== undefined && (obj.announcementGid = message.announcementGid);
    message.timePosted !== undefined && (obj.timePosted = Math.round(message.timePosted));
    return obj;
  },

  create(
    base?: DeepPartial<CPlayerUpdateSteamAnnouncementLastReadRequest>,
  ): CPlayerUpdateSteamAnnouncementLastReadRequest {
    return CPlayerUpdateSteamAnnouncementLastReadRequest.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CPlayerUpdateSteamAnnouncementLastReadRequest>,
  ): CPlayerUpdateSteamAnnouncementLastReadRequest {
    const message = createBaseCPlayerUpdateSteamAnnouncementLastReadRequest();
    message.announcementGid = object.announcementGid ?? "0";
    message.timePosted = object.timePosted ?? 0;
    return message;
  },
};

function createBaseCPlayerUpdateSteamAnnouncementLastReadResponse(): CPlayerUpdateSteamAnnouncementLastReadResponse {
  return {};
}

export const CPlayerUpdateSteamAnnouncementLastReadResponse = {
  encode(_: CPlayerUpdateSteamAnnouncementLastReadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerUpdateSteamAnnouncementLastReadResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerUpdateSteamAnnouncementLastReadResponse();
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

  fromJSON(_: any): CPlayerUpdateSteamAnnouncementLastReadResponse {
    return {};
  },

  toJSON(_: CPlayerUpdateSteamAnnouncementLastReadResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(
    base?: DeepPartial<CPlayerUpdateSteamAnnouncementLastReadResponse>,
  ): CPlayerUpdateSteamAnnouncementLastReadResponse {
    return CPlayerUpdateSteamAnnouncementLastReadResponse.fromPartial(base ?? {});
  },

  fromPartial(
    _: DeepPartial<CPlayerUpdateSteamAnnouncementLastReadResponse>,
  ): CPlayerUpdateSteamAnnouncementLastReadResponse {
    const message = createBaseCPlayerUpdateSteamAnnouncementLastReadResponse();
    return message;
  },
};

export interface Player {
  GetMutualFriendsForIncomingInvites(
    request: CPlayerGetMutualFriendsForIncomingInvitesRequest,
  ): Promise<CPlayerGetMutualFriendsForIncomingInvitesResponse>;
  GetFriendsGameplayInfo(request: CPlayerGetFriendsGameplayInfoRequest): Promise<CPlayerGetFriendsGameplayInfoResponse>;
  GetGameBadgeLevels(request: CPlayerGetGameBadgeLevelsRequest): Promise<CPlayerGetGameBadgeLevelsResponse>;
  ClientGetLastPlayedTimes(request: CPlayerGetLastPlayedTimesRequest): Promise<CPlayerGetLastPlayedTimesResponse>;
  AcceptSSA(request: CPlayerAcceptSSARequest): Promise<CPlayerAcceptSSAResponse>;
  GetNicknameList(request: CPlayerGetNicknameListRequest): Promise<CPlayerGetNicknameListResponse>;
  GetPerFriendPreferences(
    request: CPlayerGetPerFriendPreferencesRequest,
  ): Promise<CPlayerGetPerFriendPreferencesResponse>;
  SetPerFriendPreferences(
    request: CPlayerSetPerFriendPreferencesRequest,
  ): Promise<CPlayerSetPerFriendPreferencesResponse>;
  AddFriend(request: CPlayerAddFriendRequest): Promise<CPlayerAddFriendResponse>;
  RemoveFriend(request: CPlayerRemoveFriendRequest): Promise<CPlayerRemoveFriendResponse>;
  IgnoreFriend(request: CPlayerIgnoreFriendRequest): Promise<CPlayerIgnoreFriendResponse>;
  GetCommunityPreferences(
    request: CPlayerGetCommunityPreferencesRequest,
  ): Promise<CPlayerGetCommunityPreferencesResponse>;
  SetCommunityPreferences(
    request: CPlayerSetCommunityPreferencesRequest,
  ): Promise<CPlayerSetCommunityPreferencesResponse>;
  GetNewSteamAnnouncementState(
    request: CPlayerGetNewSteamAnnouncementStateRequest,
  ): Promise<CPlayerGetNewSteamAnnouncementStateResponse>;
  UpdateSteamAnnouncementLastRead(
    request: CPlayerUpdateSteamAnnouncementLastReadRequest,
  ): Promise<CPlayerUpdateSteamAnnouncementLastReadResponse>;
}

export class PlayerClientImpl implements Player {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Player";
    this.rpc = rpc;
    this.GetMutualFriendsForIncomingInvites = this.GetMutualFriendsForIncomingInvites.bind(this);
    this.GetFriendsGameplayInfo = this.GetFriendsGameplayInfo.bind(this);
    this.GetGameBadgeLevels = this.GetGameBadgeLevels.bind(this);
    this.ClientGetLastPlayedTimes = this.ClientGetLastPlayedTimes.bind(this);
    this.AcceptSSA = this.AcceptSSA.bind(this);
    this.GetNicknameList = this.GetNicknameList.bind(this);
    this.GetPerFriendPreferences = this.GetPerFriendPreferences.bind(this);
    this.SetPerFriendPreferences = this.SetPerFriendPreferences.bind(this);
    this.AddFriend = this.AddFriend.bind(this);
    this.RemoveFriend = this.RemoveFriend.bind(this);
    this.IgnoreFriend = this.IgnoreFriend.bind(this);
    this.GetCommunityPreferences = this.GetCommunityPreferences.bind(this);
    this.SetCommunityPreferences = this.SetCommunityPreferences.bind(this);
    this.GetNewSteamAnnouncementState = this.GetNewSteamAnnouncementState.bind(this);
    this.UpdateSteamAnnouncementLastRead = this.UpdateSteamAnnouncementLastRead.bind(this);
  }
  GetMutualFriendsForIncomingInvites(
    request: CPlayerGetMutualFriendsForIncomingInvitesRequest,
  ): Promise<CPlayerGetMutualFriendsForIncomingInvitesResponse> {
    const data = CPlayerGetMutualFriendsForIncomingInvitesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetMutualFriendsForIncomingInvites", data);
    return promise.then((data) => CPlayerGetMutualFriendsForIncomingInvitesResponse.decode(_m0.Reader.create(data)));
  }

  GetFriendsGameplayInfo(
    request: CPlayerGetFriendsGameplayInfoRequest,
  ): Promise<CPlayerGetFriendsGameplayInfoResponse> {
    const data = CPlayerGetFriendsGameplayInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetFriendsGameplayInfo", data);
    return promise.then((data) => CPlayerGetFriendsGameplayInfoResponse.decode(_m0.Reader.create(data)));
  }

  GetGameBadgeLevels(request: CPlayerGetGameBadgeLevelsRequest): Promise<CPlayerGetGameBadgeLevelsResponse> {
    const data = CPlayerGetGameBadgeLevelsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetGameBadgeLevels", data);
    return promise.then((data) => CPlayerGetGameBadgeLevelsResponse.decode(_m0.Reader.create(data)));
  }

  ClientGetLastPlayedTimes(request: CPlayerGetLastPlayedTimesRequest): Promise<CPlayerGetLastPlayedTimesResponse> {
    const data = CPlayerGetLastPlayedTimesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientGetLastPlayedTimes", data);
    return promise.then((data) => CPlayerGetLastPlayedTimesResponse.decode(_m0.Reader.create(data)));
  }

  AcceptSSA(request: CPlayerAcceptSSARequest): Promise<CPlayerAcceptSSAResponse> {
    const data = CPlayerAcceptSSARequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcceptSSA", data);
    return promise.then((data) => CPlayerAcceptSSAResponse.decode(_m0.Reader.create(data)));
  }

  GetNicknameList(request: CPlayerGetNicknameListRequest): Promise<CPlayerGetNicknameListResponse> {
    const data = CPlayerGetNicknameListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetNicknameList", data);
    return promise.then((data) => CPlayerGetNicknameListResponse.decode(_m0.Reader.create(data)));
  }

  GetPerFriendPreferences(
    request: CPlayerGetPerFriendPreferencesRequest,
  ): Promise<CPlayerGetPerFriendPreferencesResponse> {
    const data = CPlayerGetPerFriendPreferencesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetPerFriendPreferences", data);
    return promise.then((data) => CPlayerGetPerFriendPreferencesResponse.decode(_m0.Reader.create(data)));
  }

  SetPerFriendPreferences(
    request: CPlayerSetPerFriendPreferencesRequest,
  ): Promise<CPlayerSetPerFriendPreferencesResponse> {
    const data = CPlayerSetPerFriendPreferencesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetPerFriendPreferences", data);
    return promise.then((data) => CPlayerSetPerFriendPreferencesResponse.decode(_m0.Reader.create(data)));
  }

  AddFriend(request: CPlayerAddFriendRequest): Promise<CPlayerAddFriendResponse> {
    const data = CPlayerAddFriendRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddFriend", data);
    return promise.then((data) => CPlayerAddFriendResponse.decode(_m0.Reader.create(data)));
  }

  RemoveFriend(request: CPlayerRemoveFriendRequest): Promise<CPlayerRemoveFriendResponse> {
    const data = CPlayerRemoveFriendRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveFriend", data);
    return promise.then((data) => CPlayerRemoveFriendResponse.decode(_m0.Reader.create(data)));
  }

  IgnoreFriend(request: CPlayerIgnoreFriendRequest): Promise<CPlayerIgnoreFriendResponse> {
    const data = CPlayerIgnoreFriendRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "IgnoreFriend", data);
    return promise.then((data) => CPlayerIgnoreFriendResponse.decode(_m0.Reader.create(data)));
  }

  GetCommunityPreferences(
    request: CPlayerGetCommunityPreferencesRequest,
  ): Promise<CPlayerGetCommunityPreferencesResponse> {
    const data = CPlayerGetCommunityPreferencesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetCommunityPreferences", data);
    return promise.then((data) => CPlayerGetCommunityPreferencesResponse.decode(_m0.Reader.create(data)));
  }

  SetCommunityPreferences(
    request: CPlayerSetCommunityPreferencesRequest,
  ): Promise<CPlayerSetCommunityPreferencesResponse> {
    const data = CPlayerSetCommunityPreferencesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetCommunityPreferences", data);
    return promise.then((data) => CPlayerSetCommunityPreferencesResponse.decode(_m0.Reader.create(data)));
  }

  GetNewSteamAnnouncementState(
    request: CPlayerGetNewSteamAnnouncementStateRequest,
  ): Promise<CPlayerGetNewSteamAnnouncementStateResponse> {
    const data = CPlayerGetNewSteamAnnouncementStateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetNewSteamAnnouncementState", data);
    return promise.then((data) => CPlayerGetNewSteamAnnouncementStateResponse.decode(_m0.Reader.create(data)));
  }

  UpdateSteamAnnouncementLastRead(
    request: CPlayerUpdateSteamAnnouncementLastReadRequest,
  ): Promise<CPlayerUpdateSteamAnnouncementLastReadResponse> {
    const data = CPlayerUpdateSteamAnnouncementLastReadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateSteamAnnouncementLastRead", data);
    return promise.then((data) => CPlayerUpdateSteamAnnouncementLastReadResponse.decode(_m0.Reader.create(data)));
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
