/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export enum ENotificationSetting {
  k_ENotificationSettingNotifyUseDefault = 0,
  k_ENotificationSettingAlways = 1,
  k_ENotificationSettingNever = 2,
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

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
