/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export enum EBanContentCheckResult {
  k_EBanContentCheckResult_NotScanned = 0,
  k_EBanContentCheckResult_Reset = 1,
  k_EBanContentCheckResult_NeedsChecking = 2,
  k_EBanContentCheckResult_VeryUnlikely = 5,
  k_EBanContentCheckResult_Unlikely = 30,
  k_EBanContentCheckResult_Possible = 50,
  k_EBanContentCheckResult_Likely = 75,
  k_EBanContentCheckResult_VeryLikely = 100,
}

export function eBanContentCheckResultFromJSON(object: any): EBanContentCheckResult {
  switch (object) {
    case 0:
    case "k_EBanContentCheckResult_NotScanned":
      return EBanContentCheckResult.k_EBanContentCheckResult_NotScanned;
    case 1:
    case "k_EBanContentCheckResult_Reset":
      return EBanContentCheckResult.k_EBanContentCheckResult_Reset;
    case 2:
    case "k_EBanContentCheckResult_NeedsChecking":
      return EBanContentCheckResult.k_EBanContentCheckResult_NeedsChecking;
    case 5:
    case "k_EBanContentCheckResult_VeryUnlikely":
      return EBanContentCheckResult.k_EBanContentCheckResult_VeryUnlikely;
    case 30:
    case "k_EBanContentCheckResult_Unlikely":
      return EBanContentCheckResult.k_EBanContentCheckResult_Unlikely;
    case 50:
    case "k_EBanContentCheckResult_Possible":
      return EBanContentCheckResult.k_EBanContentCheckResult_Possible;
    case 75:
    case "k_EBanContentCheckResult_Likely":
      return EBanContentCheckResult.k_EBanContentCheckResult_Likely;
    case 100:
    case "k_EBanContentCheckResult_VeryLikely":
      return EBanContentCheckResult.k_EBanContentCheckResult_VeryLikely;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EBanContentCheckResult");
  }
}

export function eBanContentCheckResultToJSON(object: EBanContentCheckResult): string {
  switch (object) {
    case EBanContentCheckResult.k_EBanContentCheckResult_NotScanned:
      return "k_EBanContentCheckResult_NotScanned";
    case EBanContentCheckResult.k_EBanContentCheckResult_Reset:
      return "k_EBanContentCheckResult_Reset";
    case EBanContentCheckResult.k_EBanContentCheckResult_NeedsChecking:
      return "k_EBanContentCheckResult_NeedsChecking";
    case EBanContentCheckResult.k_EBanContentCheckResult_VeryUnlikely:
      return "k_EBanContentCheckResult_VeryUnlikely";
    case EBanContentCheckResult.k_EBanContentCheckResult_Unlikely:
      return "k_EBanContentCheckResult_Unlikely";
    case EBanContentCheckResult.k_EBanContentCheckResult_Possible:
      return "k_EBanContentCheckResult_Possible";
    case EBanContentCheckResult.k_EBanContentCheckResult_Likely:
      return "k_EBanContentCheckResult_Likely";
    case EBanContentCheckResult.k_EBanContentCheckResult_VeryLikely:
      return "k_EBanContentCheckResult_VeryLikely";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EBanContentCheckResult");
  }
}

export enum EProtoClanEventType {
  k_EClanOtherEvent = 1,
  k_EClanGameEvent = 2,
  k_EClanPartyEvent = 3,
  k_EClanMeetingEvent = 4,
  k_EClanSpecialCauseEvent = 5,
  k_EClanMusicAndArtsEvent = 6,
  k_EClanSportsEvent = 7,
  k_EClanTripEvent = 8,
  k_EClanChatEvent = 9,
  k_EClanGameReleaseEvent = 10,
  k_EClanBroadcastEvent = 11,
  k_EClanSmallUpdateEvent = 12,
  k_EClanPreAnnounceMajorUpdateEvent = 13,
  k_EClanMajorUpdateEvent = 14,
  k_EClanDLCReleaseEvent = 15,
  k_EClanFutureReleaseEvent = 16,
  k_EClanESportTournamentStreamEvent = 17,
  k_EClanDevStreamEvent = 18,
  k_EClanFamousStreamEvent = 19,
  k_EClanGameSalesEvent = 20,
  k_EClanGameItemSalesEvent = 21,
  k_EClanInGameBonusXPEvent = 22,
  k_EClanInGameLootEvent = 23,
  k_EClanInGamePerksEvent = 24,
  k_EClanInGameChallengeEvent = 25,
  k_EClanInGameContestEvent = 26,
  k_EClanIRLEvent = 27,
  k_EClanNewsEvent = 28,
  k_EClanBetaReleaseEvent = 29,
  k_EClanInGameContentReleaseEvent = 30,
  k_EClanFreeTrial = 31,
  k_EClanSeasonRelease = 32,
  k_EClanSeasonUpdate = 33,
  k_EClanCrosspostEvent = 34,
  k_EClanInGameEventGeneral = 35,
}

export function eProtoClanEventTypeFromJSON(object: any): EProtoClanEventType {
  switch (object) {
    case 1:
    case "k_EClanOtherEvent":
      return EProtoClanEventType.k_EClanOtherEvent;
    case 2:
    case "k_EClanGameEvent":
      return EProtoClanEventType.k_EClanGameEvent;
    case 3:
    case "k_EClanPartyEvent":
      return EProtoClanEventType.k_EClanPartyEvent;
    case 4:
    case "k_EClanMeetingEvent":
      return EProtoClanEventType.k_EClanMeetingEvent;
    case 5:
    case "k_EClanSpecialCauseEvent":
      return EProtoClanEventType.k_EClanSpecialCauseEvent;
    case 6:
    case "k_EClanMusicAndArtsEvent":
      return EProtoClanEventType.k_EClanMusicAndArtsEvent;
    case 7:
    case "k_EClanSportsEvent":
      return EProtoClanEventType.k_EClanSportsEvent;
    case 8:
    case "k_EClanTripEvent":
      return EProtoClanEventType.k_EClanTripEvent;
    case 9:
    case "k_EClanChatEvent":
      return EProtoClanEventType.k_EClanChatEvent;
    case 10:
    case "k_EClanGameReleaseEvent":
      return EProtoClanEventType.k_EClanGameReleaseEvent;
    case 11:
    case "k_EClanBroadcastEvent":
      return EProtoClanEventType.k_EClanBroadcastEvent;
    case 12:
    case "k_EClanSmallUpdateEvent":
      return EProtoClanEventType.k_EClanSmallUpdateEvent;
    case 13:
    case "k_EClanPreAnnounceMajorUpdateEvent":
      return EProtoClanEventType.k_EClanPreAnnounceMajorUpdateEvent;
    case 14:
    case "k_EClanMajorUpdateEvent":
      return EProtoClanEventType.k_EClanMajorUpdateEvent;
    case 15:
    case "k_EClanDLCReleaseEvent":
      return EProtoClanEventType.k_EClanDLCReleaseEvent;
    case 16:
    case "k_EClanFutureReleaseEvent":
      return EProtoClanEventType.k_EClanFutureReleaseEvent;
    case 17:
    case "k_EClanESportTournamentStreamEvent":
      return EProtoClanEventType.k_EClanESportTournamentStreamEvent;
    case 18:
    case "k_EClanDevStreamEvent":
      return EProtoClanEventType.k_EClanDevStreamEvent;
    case 19:
    case "k_EClanFamousStreamEvent":
      return EProtoClanEventType.k_EClanFamousStreamEvent;
    case 20:
    case "k_EClanGameSalesEvent":
      return EProtoClanEventType.k_EClanGameSalesEvent;
    case 21:
    case "k_EClanGameItemSalesEvent":
      return EProtoClanEventType.k_EClanGameItemSalesEvent;
    case 22:
    case "k_EClanInGameBonusXPEvent":
      return EProtoClanEventType.k_EClanInGameBonusXPEvent;
    case 23:
    case "k_EClanInGameLootEvent":
      return EProtoClanEventType.k_EClanInGameLootEvent;
    case 24:
    case "k_EClanInGamePerksEvent":
      return EProtoClanEventType.k_EClanInGamePerksEvent;
    case 25:
    case "k_EClanInGameChallengeEvent":
      return EProtoClanEventType.k_EClanInGameChallengeEvent;
    case 26:
    case "k_EClanInGameContestEvent":
      return EProtoClanEventType.k_EClanInGameContestEvent;
    case 27:
    case "k_EClanIRLEvent":
      return EProtoClanEventType.k_EClanIRLEvent;
    case 28:
    case "k_EClanNewsEvent":
      return EProtoClanEventType.k_EClanNewsEvent;
    case 29:
    case "k_EClanBetaReleaseEvent":
      return EProtoClanEventType.k_EClanBetaReleaseEvent;
    case 30:
    case "k_EClanInGameContentReleaseEvent":
      return EProtoClanEventType.k_EClanInGameContentReleaseEvent;
    case 31:
    case "k_EClanFreeTrial":
      return EProtoClanEventType.k_EClanFreeTrial;
    case 32:
    case "k_EClanSeasonRelease":
      return EProtoClanEventType.k_EClanSeasonRelease;
    case 33:
    case "k_EClanSeasonUpdate":
      return EProtoClanEventType.k_EClanSeasonUpdate;
    case 34:
    case "k_EClanCrosspostEvent":
      return EProtoClanEventType.k_EClanCrosspostEvent;
    case 35:
    case "k_EClanInGameEventGeneral":
      return EProtoClanEventType.k_EClanInGameEventGeneral;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EProtoClanEventType");
  }
}

export function eProtoClanEventTypeToJSON(object: EProtoClanEventType): string {
  switch (object) {
    case EProtoClanEventType.k_EClanOtherEvent:
      return "k_EClanOtherEvent";
    case EProtoClanEventType.k_EClanGameEvent:
      return "k_EClanGameEvent";
    case EProtoClanEventType.k_EClanPartyEvent:
      return "k_EClanPartyEvent";
    case EProtoClanEventType.k_EClanMeetingEvent:
      return "k_EClanMeetingEvent";
    case EProtoClanEventType.k_EClanSpecialCauseEvent:
      return "k_EClanSpecialCauseEvent";
    case EProtoClanEventType.k_EClanMusicAndArtsEvent:
      return "k_EClanMusicAndArtsEvent";
    case EProtoClanEventType.k_EClanSportsEvent:
      return "k_EClanSportsEvent";
    case EProtoClanEventType.k_EClanTripEvent:
      return "k_EClanTripEvent";
    case EProtoClanEventType.k_EClanChatEvent:
      return "k_EClanChatEvent";
    case EProtoClanEventType.k_EClanGameReleaseEvent:
      return "k_EClanGameReleaseEvent";
    case EProtoClanEventType.k_EClanBroadcastEvent:
      return "k_EClanBroadcastEvent";
    case EProtoClanEventType.k_EClanSmallUpdateEvent:
      return "k_EClanSmallUpdateEvent";
    case EProtoClanEventType.k_EClanPreAnnounceMajorUpdateEvent:
      return "k_EClanPreAnnounceMajorUpdateEvent";
    case EProtoClanEventType.k_EClanMajorUpdateEvent:
      return "k_EClanMajorUpdateEvent";
    case EProtoClanEventType.k_EClanDLCReleaseEvent:
      return "k_EClanDLCReleaseEvent";
    case EProtoClanEventType.k_EClanFutureReleaseEvent:
      return "k_EClanFutureReleaseEvent";
    case EProtoClanEventType.k_EClanESportTournamentStreamEvent:
      return "k_EClanESportTournamentStreamEvent";
    case EProtoClanEventType.k_EClanDevStreamEvent:
      return "k_EClanDevStreamEvent";
    case EProtoClanEventType.k_EClanFamousStreamEvent:
      return "k_EClanFamousStreamEvent";
    case EProtoClanEventType.k_EClanGameSalesEvent:
      return "k_EClanGameSalesEvent";
    case EProtoClanEventType.k_EClanGameItemSalesEvent:
      return "k_EClanGameItemSalesEvent";
    case EProtoClanEventType.k_EClanInGameBonusXPEvent:
      return "k_EClanInGameBonusXPEvent";
    case EProtoClanEventType.k_EClanInGameLootEvent:
      return "k_EClanInGameLootEvent";
    case EProtoClanEventType.k_EClanInGamePerksEvent:
      return "k_EClanInGamePerksEvent";
    case EProtoClanEventType.k_EClanInGameChallengeEvent:
      return "k_EClanInGameChallengeEvent";
    case EProtoClanEventType.k_EClanInGameContestEvent:
      return "k_EClanInGameContestEvent";
    case EProtoClanEventType.k_EClanIRLEvent:
      return "k_EClanIRLEvent";
    case EProtoClanEventType.k_EClanNewsEvent:
      return "k_EClanNewsEvent";
    case EProtoClanEventType.k_EClanBetaReleaseEvent:
      return "k_EClanBetaReleaseEvent";
    case EProtoClanEventType.k_EClanInGameContentReleaseEvent:
      return "k_EClanInGameContentReleaseEvent";
    case EProtoClanEventType.k_EClanFreeTrial:
      return "k_EClanFreeTrial";
    case EProtoClanEventType.k_EClanSeasonRelease:
      return "k_EClanSeasonRelease";
    case EProtoClanEventType.k_EClanSeasonUpdate:
      return "k_EClanSeasonUpdate";
    case EProtoClanEventType.k_EClanCrosspostEvent:
      return "k_EClanCrosspostEvent";
    case EProtoClanEventType.k_EClanInGameEventGeneral:
      return "k_EClanInGameEventGeneral";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EProtoClanEventType");
  }
}

export enum PartnerEventNotificationType {
  k_EEventStart = 0,
  k_EEventBroadcastStart = 1,
  k_EEventMatchStart = 2,
  k_EEventPartnerMaxType = 3,
}

export function partnerEventNotificationTypeFromJSON(object: any): PartnerEventNotificationType {
  switch (object) {
    case 0:
    case "k_EEventStart":
      return PartnerEventNotificationType.k_EEventStart;
    case 1:
    case "k_EEventBroadcastStart":
      return PartnerEventNotificationType.k_EEventBroadcastStart;
    case 2:
    case "k_EEventMatchStart":
      return PartnerEventNotificationType.k_EEventMatchStart;
    case 3:
    case "k_EEventPartnerMaxType":
      return PartnerEventNotificationType.k_EEventPartnerMaxType;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum PartnerEventNotificationType");
  }
}

export function partnerEventNotificationTypeToJSON(object: PartnerEventNotificationType): string {
  switch (object) {
    case PartnerEventNotificationType.k_EEventStart:
      return "k_EEventStart";
    case PartnerEventNotificationType.k_EEventBroadcastStart:
      return "k_EEventBroadcastStart";
    case PartnerEventNotificationType.k_EEventMatchStart:
      return "k_EEventMatchStart";
    case PartnerEventNotificationType.k_EEventPartnerMaxType:
      return "k_EEventPartnerMaxType";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum PartnerEventNotificationType");
  }
}

export interface CMsgIPAddress {
  v4?: number | undefined;
  v6?: Buffer | undefined;
}

export interface CMsgIPAddressBucket {
  originalIpAddress: CMsgIPAddress | undefined;
  bucket: string;
}

export interface CMsgGCRoutingProtoBufHeader {
  dstGcidQueue: string;
  dstGcDirIndex: number;
}

export interface CMsgProtoBufHeader {
  steamid: string;
  clientSessionid: number;
  routingAppid: number;
  jobidSource: string;
  jobidTarget: string;
  targetJobName: string;
  seqNum: number;
  eresult: number;
  errorMessage: string;
  authAccountFlags: number;
  tokenSource: number;
  adminSpoofingUser: boolean;
  transportError: number;
  messageid: string;
  publisherGroupId: number;
  sysid: number;
  traceTag: string;
  webapiKeyId: number;
  isFromExternalSource: boolean;
  forwardToSysid: number[];
  cmSysid: number;
  launcherType: number;
  realm: number;
  timeoutMs: number;
  debugSource: string;
  debugSourceStringIndex: number;
  tokenId: string;
  routingGc: CMsgGCRoutingProtoBufHeader | undefined;
  sessionDisposition: CMsgProtoBufHeader_ESessionDisposition;
  wgToken: string;
  webuiAuthKey: string;
  ip?: number | undefined;
  ipV6?: Buffer | undefined;
}

export enum CMsgProtoBufHeader_ESessionDisposition {
  k_ESessionDispositionNormal = 0,
  k_ESessionDispositionDisconnect = 1,
}

export function cMsgProtoBufHeader_ESessionDispositionFromJSON(object: any): CMsgProtoBufHeader_ESessionDisposition {
  switch (object) {
    case 0:
    case "k_ESessionDispositionNormal":
      return CMsgProtoBufHeader_ESessionDisposition.k_ESessionDispositionNormal;
    case 1:
    case "k_ESessionDispositionDisconnect":
      return CMsgProtoBufHeader_ESessionDisposition.k_ESessionDispositionDisconnect;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgProtoBufHeader_ESessionDisposition",
      );
  }
}

export function cMsgProtoBufHeader_ESessionDispositionToJSON(object: CMsgProtoBufHeader_ESessionDisposition): string {
  switch (object) {
    case CMsgProtoBufHeader_ESessionDisposition.k_ESessionDispositionNormal:
      return "k_ESessionDispositionNormal";
    case CMsgProtoBufHeader_ESessionDisposition.k_ESessionDispositionDisconnect:
      return "k_ESessionDispositionDisconnect";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgProtoBufHeader_ESessionDisposition",
      );
  }
}

export interface CMsgMulti {
  sizeUnzipped: number;
  messageBody: Buffer;
}

export interface CMsgProtobufWrapped {
  messageBody: Buffer;
}

export interface CMsgAuthTicket {
  estate: number;
  eresult: number;
  steamid: string;
  gameid: string;
  hSteamPipe: number;
  ticketCrc: number;
  ticket: Buffer;
  serverSecret: Buffer;
  ticketType: number;
}

export interface CCDDBAppDetailCommon {
  appid: number;
  name: string;
  icon: string;
  tool: boolean;
  demo: boolean;
  media: boolean;
  communityVisibleStats: boolean;
  friendlyName: string;
  propagation: string;
  hasAdultContent: boolean;
  isVisibleInSteamChina: boolean;
  appType: number;
  hasAdultContentSex: boolean;
  hasAdultContentViolence: boolean;
  contentDescriptorids: number[];
}

export interface CMsgAppRights {
  editInfo: boolean;
  publish: boolean;
  viewErrorData: boolean;
  download: boolean;
  uploadCdkeys: boolean;
  generateCdkeys: boolean;
  viewFinancials: boolean;
  manageCeg: boolean;
  manageSigning: boolean;
  manageCdkeys: boolean;
  editMarketing: boolean;
  economySupport: boolean;
  economySupportSupervisor: boolean;
  managePricing: boolean;
  broadcastLive: boolean;
  viewMarketingTraffic: boolean;
  editStoreDisplayContent: boolean;
}

export interface CCuratorPreferences {
  supportedLanguages: number;
  platformWindows: boolean;
  platformMac: boolean;
  platformLinux: boolean;
  vrContent: boolean;
  adultContentViolence: boolean;
  adultContentSex: boolean;
  timestampUpdated: number;
  tagidsCurated: number[];
  tagidsFiltered: number[];
  websiteTitle: string;
  websiteUrl: string;
  discussionUrl: string;
  showBroadcast: boolean;
}

export interface CLocalizationToken {
  language: number;
  localizedString: string;
}

export interface CClanEventUserNewsTuple {
  clanid: number;
  eventGid: string;
  announcementGid: string;
  rtimeStart: number;
  rtimeEnd: number;
  priorityScore: number;
  type: number;
  clampRangeSlot: number;
  appid: number;
  rtime32LastModified: number;
}

export interface CClanMatchEventByRange {
  rtimeBefore: number;
  rtimeAfter: number;
  qualified: number;
  events: CClanEventUserNewsTuple[];
}

export interface CCommunityClanAnnouncementInfo {
  gid: string;
  clanid: string;
  posterid: string;
  headline: string;
  posttime: number;
  updatetime: number;
  body: string;
  commentcount: number;
  tags: string[];
  language: number;
  hidden: boolean;
  forumTopicId: string;
  eventGid: string;
  voteupcount: number;
  votedowncount: number;
  banCheckResult: EBanContentCheckResult;
  banned: boolean;
}

export interface CClanEventData {
  gid: string;
  clanSteamid: string;
  eventName: string;
  eventType: EProtoClanEventType;
  appid: number;
  serverAddress: string;
  serverPassword: string;
  rtime32StartTime: number;
  rtime32EndTime: number;
  commentCount: number;
  creatorSteamid: string;
  lastUpdateSteamid: string;
  eventNotes: string;
  jsondata: string;
  announcementBody: CCommunityClanAnnouncementInfo | undefined;
  published: boolean;
  hidden: boolean;
  rtime32VisibilityStart: number;
  rtime32VisibilityEnd: number;
  broadcasterAccountid: number;
  followerCount: number;
  ignoreCount: number;
  forumTopicId: string;
  rtime32LastModified: number;
  newsPostGid: string;
  rtimeModReviewed: number;
  featuredAppTagid: number;
  referencedAppids: number[];
  buildId: number;
  buildBranch: string;
}

export interface CBillingAddress {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  usState: string;
  countryCode: string;
  postcode: string;
  zipPlus4: number;
  phone: string;
}

export interface CPackageReservationStatus {
  packageid: number;
  reservationState: number;
  queuePosition: number;
  totalQueueSize: number;
  reservationCountryCode: string;
  expired: boolean;
  timeExpires: number;
  timeReserved: number;
}

export interface CMsgKeyValuePair {
  name: string;
  value: string;
}

export interface CMsgKeyValueSet {
  pairs: CMsgKeyValuePair[];
}

export interface UserContentDescriptorPreferences {
  contentDescriptorsToExclude: UserContentDescriptorPreferences_ContentDescriptor[];
}

export interface UserContentDescriptorPreferences_ContentDescriptor {
  contentDescriptorid: number;
  timestampAdded: number;
}

function createBaseCMsgIPAddress(): CMsgIPAddress {
  return { v4: undefined, v6: undefined };
}

export const CMsgIPAddress = {
  encode(message: CMsgIPAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.v4 !== undefined) {
      writer.uint32(13).fixed32(message.v4);
    }
    if (message.v6 !== undefined) {
      writer.uint32(18).bytes(message.v6);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgIPAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgIPAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.v4 = reader.fixed32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.v6 = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgIPAddress {
    return {
      v4: isSet(object.v4) ? Number(object.v4) : undefined,
      v6: isSet(object.v6) ? Buffer.from(bytesFromBase64(object.v6)) : undefined,
    };
  },

  toJSON(message: CMsgIPAddress): unknown {
    const obj: any = {};
    message.v4 !== undefined && (obj.v4 = Math.round(message.v4));
    message.v6 !== undefined && (obj.v6 = message.v6 !== undefined ? base64FromBytes(message.v6) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgIPAddress>): CMsgIPAddress {
    return CMsgIPAddress.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgIPAddress>): CMsgIPAddress {
    const message = createBaseCMsgIPAddress();
    message.v4 = object.v4 ?? undefined;
    message.v6 = object.v6 ?? undefined;
    return message;
  },
};

function createBaseCMsgIPAddressBucket(): CMsgIPAddressBucket {
  return { originalIpAddress: undefined, bucket: "0" };
}

export const CMsgIPAddressBucket = {
  encode(message: CMsgIPAddressBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originalIpAddress !== undefined) {
      CMsgIPAddress.encode(message.originalIpAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.bucket !== "0") {
      writer.uint32(17).fixed64(message.bucket);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgIPAddressBucket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgIPAddressBucket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.originalIpAddress = CMsgIPAddress.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.bucket = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgIPAddressBucket {
    return {
      originalIpAddress: isSet(object.originalIpAddress) ? CMsgIPAddress.fromJSON(object.originalIpAddress) : undefined,
      bucket: isSet(object.bucket) ? String(object.bucket) : "0",
    };
  },

  toJSON(message: CMsgIPAddressBucket): unknown {
    const obj: any = {};
    message.originalIpAddress !== undefined &&
      (obj.originalIpAddress = message.originalIpAddress ? CMsgIPAddress.toJSON(message.originalIpAddress) : undefined);
    message.bucket !== undefined && (obj.bucket = message.bucket);
    return obj;
  },

  create(base?: DeepPartial<CMsgIPAddressBucket>): CMsgIPAddressBucket {
    return CMsgIPAddressBucket.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgIPAddressBucket>): CMsgIPAddressBucket {
    const message = createBaseCMsgIPAddressBucket();
    message.originalIpAddress = (object.originalIpAddress !== undefined && object.originalIpAddress !== null)
      ? CMsgIPAddress.fromPartial(object.originalIpAddress)
      : undefined;
    message.bucket = object.bucket ?? "0";
    return message;
  },
};

function createBaseCMsgGCRoutingProtoBufHeader(): CMsgGCRoutingProtoBufHeader {
  return { dstGcidQueue: "0", dstGcDirIndex: 0 };
}

export const CMsgGCRoutingProtoBufHeader = {
  encode(message: CMsgGCRoutingProtoBufHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dstGcidQueue !== "0") {
      writer.uint32(8).uint64(message.dstGcidQueue);
    }
    if (message.dstGcDirIndex !== 0) {
      writer.uint32(16).uint32(message.dstGcDirIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCRoutingProtoBufHeader {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCRoutingProtoBufHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.dstGcidQueue = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.dstGcDirIndex = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCRoutingProtoBufHeader {
    return {
      dstGcidQueue: isSet(object.dstGcidQueue) ? String(object.dstGcidQueue) : "0",
      dstGcDirIndex: isSet(object.dstGcDirIndex) ? Number(object.dstGcDirIndex) : 0,
    };
  },

  toJSON(message: CMsgGCRoutingProtoBufHeader): unknown {
    const obj: any = {};
    message.dstGcidQueue !== undefined && (obj.dstGcidQueue = message.dstGcidQueue);
    message.dstGcDirIndex !== undefined && (obj.dstGcDirIndex = Math.round(message.dstGcDirIndex));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCRoutingProtoBufHeader>): CMsgGCRoutingProtoBufHeader {
    return CMsgGCRoutingProtoBufHeader.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCRoutingProtoBufHeader>): CMsgGCRoutingProtoBufHeader {
    const message = createBaseCMsgGCRoutingProtoBufHeader();
    message.dstGcidQueue = object.dstGcidQueue ?? "0";
    message.dstGcDirIndex = object.dstGcDirIndex ?? 0;
    return message;
  },
};

function createBaseCMsgProtoBufHeader(): CMsgProtoBufHeader {
  return {
    steamid: "0",
    clientSessionid: 0,
    routingAppid: 0,
    jobidSource: "0",
    jobidTarget: "0",
    targetJobName: "",
    seqNum: 0,
    eresult: 0,
    errorMessage: "",
    authAccountFlags: 0,
    tokenSource: 0,
    adminSpoofingUser: false,
    transportError: 0,
    messageid: "0",
    publisherGroupId: 0,
    sysid: 0,
    traceTag: "0",
    webapiKeyId: 0,
    isFromExternalSource: false,
    forwardToSysid: [],
    cmSysid: 0,
    launcherType: 0,
    realm: 0,
    timeoutMs: 0,
    debugSource: "",
    debugSourceStringIndex: 0,
    tokenId: "0",
    routingGc: undefined,
    sessionDisposition: 0,
    wgToken: "",
    webuiAuthKey: "",
    ip: undefined,
    ipV6: undefined,
  };
}

export const CMsgProtoBufHeader = {
  encode(message: CMsgProtoBufHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.clientSessionid !== 0) {
      writer.uint32(16).int32(message.clientSessionid);
    }
    if (message.routingAppid !== 0) {
      writer.uint32(24).uint32(message.routingAppid);
    }
    if (message.jobidSource !== "0") {
      writer.uint32(81).fixed64(message.jobidSource);
    }
    if (message.jobidTarget !== "0") {
      writer.uint32(89).fixed64(message.jobidTarget);
    }
    if (message.targetJobName !== "") {
      writer.uint32(98).string(message.targetJobName);
    }
    if (message.seqNum !== 0) {
      writer.uint32(192).int32(message.seqNum);
    }
    if (message.eresult !== 0) {
      writer.uint32(104).int32(message.eresult);
    }
    if (message.errorMessage !== "") {
      writer.uint32(114).string(message.errorMessage);
    }
    if (message.authAccountFlags !== 0) {
      writer.uint32(128).uint32(message.authAccountFlags);
    }
    if (message.tokenSource !== 0) {
      writer.uint32(176).uint32(message.tokenSource);
    }
    if (message.adminSpoofingUser === true) {
      writer.uint32(184).bool(message.adminSpoofingUser);
    }
    if (message.transportError !== 0) {
      writer.uint32(136).int32(message.transportError);
    }
    if (message.messageid !== "0") {
      writer.uint32(144).uint64(message.messageid);
    }
    if (message.publisherGroupId !== 0) {
      writer.uint32(152).uint32(message.publisherGroupId);
    }
    if (message.sysid !== 0) {
      writer.uint32(160).uint32(message.sysid);
    }
    if (message.traceTag !== "0") {
      writer.uint32(168).uint64(message.traceTag);
    }
    if (message.webapiKeyId !== 0) {
      writer.uint32(200).uint32(message.webapiKeyId);
    }
    if (message.isFromExternalSource === true) {
      writer.uint32(208).bool(message.isFromExternalSource);
    }
    writer.uint32(218).fork();
    for (const v of message.forwardToSysid) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.cmSysid !== 0) {
      writer.uint32(224).uint32(message.cmSysid);
    }
    if (message.launcherType !== 0) {
      writer.uint32(248).uint32(message.launcherType);
    }
    if (message.realm !== 0) {
      writer.uint32(256).uint32(message.realm);
    }
    if (message.timeoutMs !== 0) {
      writer.uint32(264).int32(message.timeoutMs);
    }
    if (message.debugSource !== "") {
      writer.uint32(274).string(message.debugSource);
    }
    if (message.debugSourceStringIndex !== 0) {
      writer.uint32(280).uint32(message.debugSourceStringIndex);
    }
    if (message.tokenId !== "0") {
      writer.uint32(288).uint64(message.tokenId);
    }
    if (message.routingGc !== undefined) {
      CMsgGCRoutingProtoBufHeader.encode(message.routingGc, writer.uint32(298).fork()).ldelim();
    }
    if (message.sessionDisposition !== 0) {
      writer.uint32(304).int32(message.sessionDisposition);
    }
    if (message.wgToken !== "") {
      writer.uint32(314).string(message.wgToken);
    }
    if (message.webuiAuthKey !== "") {
      writer.uint32(322).string(message.webuiAuthKey);
    }
    if (message.ip !== undefined) {
      writer.uint32(120).uint32(message.ip);
    }
    if (message.ipV6 !== undefined) {
      writer.uint32(234).bytes(message.ipV6);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgProtoBufHeader {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgProtoBufHeader();
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

          message.clientSessionid = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.routingAppid = reader.uint32();
          continue;
        case 10:
          if (tag != 81) {
            break;
          }

          message.jobidSource = longToString(reader.fixed64() as Long);
          continue;
        case 11:
          if (tag != 89) {
            break;
          }

          message.jobidTarget = longToString(reader.fixed64() as Long);
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.targetJobName = reader.string();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.seqNum = reader.int32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.eresult = reader.int32();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.errorMessage = reader.string();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.authAccountFlags = reader.uint32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.tokenSource = reader.uint32();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.adminSpoofingUser = reader.bool();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.transportError = reader.int32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.messageid = longToString(reader.uint64() as Long);
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.publisherGroupId = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.sysid = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.traceTag = longToString(reader.uint64() as Long);
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.webapiKeyId = reader.uint32();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.isFromExternalSource = reader.bool();
          continue;
        case 27:
          if (tag == 216) {
            message.forwardToSysid.push(reader.uint32());
            continue;
          }

          if (tag == 218) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.forwardToSysid.push(reader.uint32());
            }

            continue;
          }

          break;
        case 28:
          if (tag != 224) {
            break;
          }

          message.cmSysid = reader.uint32();
          continue;
        case 31:
          if (tag != 248) {
            break;
          }

          message.launcherType = reader.uint32();
          continue;
        case 32:
          if (tag != 256) {
            break;
          }

          message.realm = reader.uint32();
          continue;
        case 33:
          if (tag != 264) {
            break;
          }

          message.timeoutMs = reader.int32();
          continue;
        case 34:
          if (tag != 274) {
            break;
          }

          message.debugSource = reader.string();
          continue;
        case 35:
          if (tag != 280) {
            break;
          }

          message.debugSourceStringIndex = reader.uint32();
          continue;
        case 36:
          if (tag != 288) {
            break;
          }

          message.tokenId = longToString(reader.uint64() as Long);
          continue;
        case 37:
          if (tag != 298) {
            break;
          }

          message.routingGc = CMsgGCRoutingProtoBufHeader.decode(reader, reader.uint32());
          continue;
        case 38:
          if (tag != 304) {
            break;
          }

          message.sessionDisposition = reader.int32() as any;
          continue;
        case 39:
          if (tag != 314) {
            break;
          }

          message.wgToken = reader.string();
          continue;
        case 40:
          if (tag != 322) {
            break;
          }

          message.webuiAuthKey = reader.string();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.ip = reader.uint32();
          continue;
        case 29:
          if (tag != 234) {
            break;
          }

          message.ipV6 = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgProtoBufHeader {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      clientSessionid: isSet(object.clientSessionid) ? Number(object.clientSessionid) : 0,
      routingAppid: isSet(object.routingAppid) ? Number(object.routingAppid) : 0,
      jobidSource: isSet(object.jobidSource) ? String(object.jobidSource) : "0",
      jobidTarget: isSet(object.jobidTarget) ? String(object.jobidTarget) : "0",
      targetJobName: isSet(object.targetJobName) ? String(object.targetJobName) : "",
      seqNum: isSet(object.seqNum) ? Number(object.seqNum) : 0,
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : "",
      authAccountFlags: isSet(object.authAccountFlags) ? Number(object.authAccountFlags) : 0,
      tokenSource: isSet(object.tokenSource) ? Number(object.tokenSource) : 0,
      adminSpoofingUser: isSet(object.adminSpoofingUser) ? Boolean(object.adminSpoofingUser) : false,
      transportError: isSet(object.transportError) ? Number(object.transportError) : 0,
      messageid: isSet(object.messageid) ? String(object.messageid) : "0",
      publisherGroupId: isSet(object.publisherGroupId) ? Number(object.publisherGroupId) : 0,
      sysid: isSet(object.sysid) ? Number(object.sysid) : 0,
      traceTag: isSet(object.traceTag) ? String(object.traceTag) : "0",
      webapiKeyId: isSet(object.webapiKeyId) ? Number(object.webapiKeyId) : 0,
      isFromExternalSource: isSet(object.isFromExternalSource) ? Boolean(object.isFromExternalSource) : false,
      forwardToSysid: Array.isArray(object?.forwardToSysid) ? object.forwardToSysid.map((e: any) => Number(e)) : [],
      cmSysid: isSet(object.cmSysid) ? Number(object.cmSysid) : 0,
      launcherType: isSet(object.launcherType) ? Number(object.launcherType) : 0,
      realm: isSet(object.realm) ? Number(object.realm) : 0,
      timeoutMs: isSet(object.timeoutMs) ? Number(object.timeoutMs) : 0,
      debugSource: isSet(object.debugSource) ? String(object.debugSource) : "",
      debugSourceStringIndex: isSet(object.debugSourceStringIndex) ? Number(object.debugSourceStringIndex) : 0,
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "0",
      routingGc: isSet(object.routingGc) ? CMsgGCRoutingProtoBufHeader.fromJSON(object.routingGc) : undefined,
      sessionDisposition: isSet(object.sessionDisposition)
        ? cMsgProtoBufHeader_ESessionDispositionFromJSON(object.sessionDisposition)
        : 0,
      wgToken: isSet(object.wgToken) ? String(object.wgToken) : "",
      webuiAuthKey: isSet(object.webuiAuthKey) ? String(object.webuiAuthKey) : "",
      ip: isSet(object.ip) ? Number(object.ip) : undefined,
      ipV6: isSet(object.ipV6) ? Buffer.from(bytesFromBase64(object.ipV6)) : undefined,
    };
  },

  toJSON(message: CMsgProtoBufHeader): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.clientSessionid !== undefined && (obj.clientSessionid = Math.round(message.clientSessionid));
    message.routingAppid !== undefined && (obj.routingAppid = Math.round(message.routingAppid));
    message.jobidSource !== undefined && (obj.jobidSource = message.jobidSource);
    message.jobidTarget !== undefined && (obj.jobidTarget = message.jobidTarget);
    message.targetJobName !== undefined && (obj.targetJobName = message.targetJobName);
    message.seqNum !== undefined && (obj.seqNum = Math.round(message.seqNum));
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    message.authAccountFlags !== undefined && (obj.authAccountFlags = Math.round(message.authAccountFlags));
    message.tokenSource !== undefined && (obj.tokenSource = Math.round(message.tokenSource));
    message.adminSpoofingUser !== undefined && (obj.adminSpoofingUser = message.adminSpoofingUser);
    message.transportError !== undefined && (obj.transportError = Math.round(message.transportError));
    message.messageid !== undefined && (obj.messageid = message.messageid);
    message.publisherGroupId !== undefined && (obj.publisherGroupId = Math.round(message.publisherGroupId));
    message.sysid !== undefined && (obj.sysid = Math.round(message.sysid));
    message.traceTag !== undefined && (obj.traceTag = message.traceTag);
    message.webapiKeyId !== undefined && (obj.webapiKeyId = Math.round(message.webapiKeyId));
    message.isFromExternalSource !== undefined && (obj.isFromExternalSource = message.isFromExternalSource);
    if (message.forwardToSysid) {
      obj.forwardToSysid = message.forwardToSysid.map((e) => Math.round(e));
    } else {
      obj.forwardToSysid = [];
    }
    message.cmSysid !== undefined && (obj.cmSysid = Math.round(message.cmSysid));
    message.launcherType !== undefined && (obj.launcherType = Math.round(message.launcherType));
    message.realm !== undefined && (obj.realm = Math.round(message.realm));
    message.timeoutMs !== undefined && (obj.timeoutMs = Math.round(message.timeoutMs));
    message.debugSource !== undefined && (obj.debugSource = message.debugSource);
    message.debugSourceStringIndex !== undefined &&
      (obj.debugSourceStringIndex = Math.round(message.debugSourceStringIndex));
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.routingGc !== undefined &&
      (obj.routingGc = message.routingGc ? CMsgGCRoutingProtoBufHeader.toJSON(message.routingGc) : undefined);
    message.sessionDisposition !== undefined &&
      (obj.sessionDisposition = cMsgProtoBufHeader_ESessionDispositionToJSON(message.sessionDisposition));
    message.wgToken !== undefined && (obj.wgToken = message.wgToken);
    message.webuiAuthKey !== undefined && (obj.webuiAuthKey = message.webuiAuthKey);
    message.ip !== undefined && (obj.ip = Math.round(message.ip));
    message.ipV6 !== undefined && (obj.ipV6 = message.ipV6 !== undefined ? base64FromBytes(message.ipV6) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgProtoBufHeader>): CMsgProtoBufHeader {
    return CMsgProtoBufHeader.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgProtoBufHeader>): CMsgProtoBufHeader {
    const message = createBaseCMsgProtoBufHeader();
    message.steamid = object.steamid ?? "0";
    message.clientSessionid = object.clientSessionid ?? 0;
    message.routingAppid = object.routingAppid ?? 0;
    message.jobidSource = object.jobidSource ?? "0";
    message.jobidTarget = object.jobidTarget ?? "0";
    message.targetJobName = object.targetJobName ?? "";
    message.seqNum = object.seqNum ?? 0;
    message.eresult = object.eresult ?? 0;
    message.errorMessage = object.errorMessage ?? "";
    message.authAccountFlags = object.authAccountFlags ?? 0;
    message.tokenSource = object.tokenSource ?? 0;
    message.adminSpoofingUser = object.adminSpoofingUser ?? false;
    message.transportError = object.transportError ?? 0;
    message.messageid = object.messageid ?? "0";
    message.publisherGroupId = object.publisherGroupId ?? 0;
    message.sysid = object.sysid ?? 0;
    message.traceTag = object.traceTag ?? "0";
    message.webapiKeyId = object.webapiKeyId ?? 0;
    message.isFromExternalSource = object.isFromExternalSource ?? false;
    message.forwardToSysid = object.forwardToSysid?.map((e) => e) || [];
    message.cmSysid = object.cmSysid ?? 0;
    message.launcherType = object.launcherType ?? 0;
    message.realm = object.realm ?? 0;
    message.timeoutMs = object.timeoutMs ?? 0;
    message.debugSource = object.debugSource ?? "";
    message.debugSourceStringIndex = object.debugSourceStringIndex ?? 0;
    message.tokenId = object.tokenId ?? "0";
    message.routingGc = (object.routingGc !== undefined && object.routingGc !== null)
      ? CMsgGCRoutingProtoBufHeader.fromPartial(object.routingGc)
      : undefined;
    message.sessionDisposition = object.sessionDisposition ?? 0;
    message.wgToken = object.wgToken ?? "";
    message.webuiAuthKey = object.webuiAuthKey ?? "";
    message.ip = object.ip ?? undefined;
    message.ipV6 = object.ipV6 ?? undefined;
    return message;
  },
};

function createBaseCMsgMulti(): CMsgMulti {
  return { sizeUnzipped: 0, messageBody: Buffer.alloc(0) };
}

export const CMsgMulti = {
  encode(message: CMsgMulti, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sizeUnzipped !== 0) {
      writer.uint32(8).uint32(message.sizeUnzipped);
    }
    if (message.messageBody.length !== 0) {
      writer.uint32(18).bytes(message.messageBody);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMulti {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMulti();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sizeUnzipped = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.messageBody = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgMulti {
    return {
      sizeUnzipped: isSet(object.sizeUnzipped) ? Number(object.sizeUnzipped) : 0,
      messageBody: isSet(object.messageBody) ? Buffer.from(bytesFromBase64(object.messageBody)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgMulti): unknown {
    const obj: any = {};
    message.sizeUnzipped !== undefined && (obj.sizeUnzipped = Math.round(message.sizeUnzipped));
    message.messageBody !== undefined &&
      (obj.messageBody = base64FromBytes(message.messageBody !== undefined ? message.messageBody : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CMsgMulti>): CMsgMulti {
    return CMsgMulti.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgMulti>): CMsgMulti {
    const message = createBaseCMsgMulti();
    message.sizeUnzipped = object.sizeUnzipped ?? 0;
    message.messageBody = object.messageBody ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgProtobufWrapped(): CMsgProtobufWrapped {
  return { messageBody: Buffer.alloc(0) };
}

export const CMsgProtobufWrapped = {
  encode(message: CMsgProtobufWrapped, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageBody.length !== 0) {
      writer.uint32(10).bytes(message.messageBody);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgProtobufWrapped {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgProtobufWrapped();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.messageBody = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgProtobufWrapped {
    return {
      messageBody: isSet(object.messageBody) ? Buffer.from(bytesFromBase64(object.messageBody)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgProtobufWrapped): unknown {
    const obj: any = {};
    message.messageBody !== undefined &&
      (obj.messageBody = base64FromBytes(message.messageBody !== undefined ? message.messageBody : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CMsgProtobufWrapped>): CMsgProtobufWrapped {
    return CMsgProtobufWrapped.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgProtobufWrapped>): CMsgProtobufWrapped {
    const message = createBaseCMsgProtobufWrapped();
    message.messageBody = object.messageBody ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgAuthTicket(): CMsgAuthTicket {
  return {
    estate: 0,
    eresult: 0,
    steamid: "0",
    gameid: "0",
    hSteamPipe: 0,
    ticketCrc: 0,
    ticket: Buffer.alloc(0),
    serverSecret: Buffer.alloc(0),
    ticketType: 0,
  };
}

export const CMsgAuthTicket = {
  encode(message: CMsgAuthTicket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.estate !== 0) {
      writer.uint32(8).uint32(message.estate);
    }
    if (message.eresult !== 0) {
      writer.uint32(16).uint32(message.eresult);
    }
    if (message.steamid !== "0") {
      writer.uint32(25).fixed64(message.steamid);
    }
    if (message.gameid !== "0") {
      writer.uint32(33).fixed64(message.gameid);
    }
    if (message.hSteamPipe !== 0) {
      writer.uint32(40).uint32(message.hSteamPipe);
    }
    if (message.ticketCrc !== 0) {
      writer.uint32(48).uint32(message.ticketCrc);
    }
    if (message.ticket.length !== 0) {
      writer.uint32(58).bytes(message.ticket);
    }
    if (message.serverSecret.length !== 0) {
      writer.uint32(66).bytes(message.serverSecret);
    }
    if (message.ticketType !== 0) {
      writer.uint32(72).uint32(message.ticketType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAuthTicket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAuthTicket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.estate = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.eresult = reader.uint32();
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.steamid = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.gameid = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.hSteamPipe = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.ticketCrc = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.ticket = reader.bytes() as Buffer;
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.serverSecret = reader.bytes() as Buffer;
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.ticketType = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgAuthTicket {
    return {
      estate: isSet(object.estate) ? Number(object.estate) : 0,
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      gameid: isSet(object.gameid) ? String(object.gameid) : "0",
      hSteamPipe: isSet(object.hSteamPipe) ? Number(object.hSteamPipe) : 0,
      ticketCrc: isSet(object.ticketCrc) ? Number(object.ticketCrc) : 0,
      ticket: isSet(object.ticket) ? Buffer.from(bytesFromBase64(object.ticket)) : Buffer.alloc(0),
      serverSecret: isSet(object.serverSecret) ? Buffer.from(bytesFromBase64(object.serverSecret)) : Buffer.alloc(0),
      ticketType: isSet(object.ticketType) ? Number(object.ticketType) : 0,
    };
  },

  toJSON(message: CMsgAuthTicket): unknown {
    const obj: any = {};
    message.estate !== undefined && (obj.estate = Math.round(message.estate));
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.gameid !== undefined && (obj.gameid = message.gameid);
    message.hSteamPipe !== undefined && (obj.hSteamPipe = Math.round(message.hSteamPipe));
    message.ticketCrc !== undefined && (obj.ticketCrc = Math.round(message.ticketCrc));
    message.ticket !== undefined &&
      (obj.ticket = base64FromBytes(message.ticket !== undefined ? message.ticket : Buffer.alloc(0)));
    message.serverSecret !== undefined &&
      (obj.serverSecret = base64FromBytes(message.serverSecret !== undefined ? message.serverSecret : Buffer.alloc(0)));
    message.ticketType !== undefined && (obj.ticketType = Math.round(message.ticketType));
    return obj;
  },

  create(base?: DeepPartial<CMsgAuthTicket>): CMsgAuthTicket {
    return CMsgAuthTicket.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAuthTicket>): CMsgAuthTicket {
    const message = createBaseCMsgAuthTicket();
    message.estate = object.estate ?? 0;
    message.eresult = object.eresult ?? 0;
    message.steamid = object.steamid ?? "0";
    message.gameid = object.gameid ?? "0";
    message.hSteamPipe = object.hSteamPipe ?? 0;
    message.ticketCrc = object.ticketCrc ?? 0;
    message.ticket = object.ticket ?? Buffer.alloc(0);
    message.serverSecret = object.serverSecret ?? Buffer.alloc(0);
    message.ticketType = object.ticketType ?? 0;
    return message;
  },
};

function createBaseCCDDBAppDetailCommon(): CCDDBAppDetailCommon {
  return {
    appid: 0,
    name: "",
    icon: "",
    tool: false,
    demo: false,
    media: false,
    communityVisibleStats: false,
    friendlyName: "",
    propagation: "",
    hasAdultContent: false,
    isVisibleInSteamChina: false,
    appType: 0,
    hasAdultContentSex: false,
    hasAdultContentViolence: false,
    contentDescriptorids: [],
  };
}

export const CCDDBAppDetailCommon = {
  encode(message: CCDDBAppDetailCommon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.icon !== "") {
      writer.uint32(26).string(message.icon);
    }
    if (message.tool === true) {
      writer.uint32(48).bool(message.tool);
    }
    if (message.demo === true) {
      writer.uint32(56).bool(message.demo);
    }
    if (message.media === true) {
      writer.uint32(64).bool(message.media);
    }
    if (message.communityVisibleStats === true) {
      writer.uint32(72).bool(message.communityVisibleStats);
    }
    if (message.friendlyName !== "") {
      writer.uint32(82).string(message.friendlyName);
    }
    if (message.propagation !== "") {
      writer.uint32(90).string(message.propagation);
    }
    if (message.hasAdultContent === true) {
      writer.uint32(96).bool(message.hasAdultContent);
    }
    if (message.isVisibleInSteamChina === true) {
      writer.uint32(104).bool(message.isVisibleInSteamChina);
    }
    if (message.appType !== 0) {
      writer.uint32(112).uint32(message.appType);
    }
    if (message.hasAdultContentSex === true) {
      writer.uint32(120).bool(message.hasAdultContentSex);
    }
    if (message.hasAdultContentViolence === true) {
      writer.uint32(128).bool(message.hasAdultContentViolence);
    }
    writer.uint32(138).fork();
    for (const v of message.contentDescriptorids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCDDBAppDetailCommon {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCDDBAppDetailCommon();
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
          if (tag != 26) {
            break;
          }

          message.icon = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.tool = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.demo = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.media = reader.bool();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.communityVisibleStats = reader.bool();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.friendlyName = reader.string();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.propagation = reader.string();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.hasAdultContent = reader.bool();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.isVisibleInSteamChina = reader.bool();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.appType = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.hasAdultContentSex = reader.bool();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.hasAdultContentViolence = reader.bool();
          continue;
        case 17:
          if (tag == 136) {
            message.contentDescriptorids.push(reader.uint32());
            continue;
          }

          if (tag == 138) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.contentDescriptorids.push(reader.uint32());
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

  fromJSON(object: any): CCDDBAppDetailCommon {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      icon: isSet(object.icon) ? String(object.icon) : "",
      tool: isSet(object.tool) ? Boolean(object.tool) : false,
      demo: isSet(object.demo) ? Boolean(object.demo) : false,
      media: isSet(object.media) ? Boolean(object.media) : false,
      communityVisibleStats: isSet(object.communityVisibleStats) ? Boolean(object.communityVisibleStats) : false,
      friendlyName: isSet(object.friendlyName) ? String(object.friendlyName) : "",
      propagation: isSet(object.propagation) ? String(object.propagation) : "",
      hasAdultContent: isSet(object.hasAdultContent) ? Boolean(object.hasAdultContent) : false,
      isVisibleInSteamChina: isSet(object.isVisibleInSteamChina) ? Boolean(object.isVisibleInSteamChina) : false,
      appType: isSet(object.appType) ? Number(object.appType) : 0,
      hasAdultContentSex: isSet(object.hasAdultContentSex) ? Boolean(object.hasAdultContentSex) : false,
      hasAdultContentViolence: isSet(object.hasAdultContentViolence) ? Boolean(object.hasAdultContentViolence) : false,
      contentDescriptorids: Array.isArray(object?.contentDescriptorids)
        ? object.contentDescriptorids.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CCDDBAppDetailCommon): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.name !== undefined && (obj.name = message.name);
    message.icon !== undefined && (obj.icon = message.icon);
    message.tool !== undefined && (obj.tool = message.tool);
    message.demo !== undefined && (obj.demo = message.demo);
    message.media !== undefined && (obj.media = message.media);
    message.communityVisibleStats !== undefined && (obj.communityVisibleStats = message.communityVisibleStats);
    message.friendlyName !== undefined && (obj.friendlyName = message.friendlyName);
    message.propagation !== undefined && (obj.propagation = message.propagation);
    message.hasAdultContent !== undefined && (obj.hasAdultContent = message.hasAdultContent);
    message.isVisibleInSteamChina !== undefined && (obj.isVisibleInSteamChina = message.isVisibleInSteamChina);
    message.appType !== undefined && (obj.appType = Math.round(message.appType));
    message.hasAdultContentSex !== undefined && (obj.hasAdultContentSex = message.hasAdultContentSex);
    message.hasAdultContentViolence !== undefined && (obj.hasAdultContentViolence = message.hasAdultContentViolence);
    if (message.contentDescriptorids) {
      obj.contentDescriptorids = message.contentDescriptorids.map((e) => Math.round(e));
    } else {
      obj.contentDescriptorids = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CCDDBAppDetailCommon>): CCDDBAppDetailCommon {
    return CCDDBAppDetailCommon.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CCDDBAppDetailCommon>): CCDDBAppDetailCommon {
    const message = createBaseCCDDBAppDetailCommon();
    message.appid = object.appid ?? 0;
    message.name = object.name ?? "";
    message.icon = object.icon ?? "";
    message.tool = object.tool ?? false;
    message.demo = object.demo ?? false;
    message.media = object.media ?? false;
    message.communityVisibleStats = object.communityVisibleStats ?? false;
    message.friendlyName = object.friendlyName ?? "";
    message.propagation = object.propagation ?? "";
    message.hasAdultContent = object.hasAdultContent ?? false;
    message.isVisibleInSteamChina = object.isVisibleInSteamChina ?? false;
    message.appType = object.appType ?? 0;
    message.hasAdultContentSex = object.hasAdultContentSex ?? false;
    message.hasAdultContentViolence = object.hasAdultContentViolence ?? false;
    message.contentDescriptorids = object.contentDescriptorids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgAppRights(): CMsgAppRights {
  return {
    editInfo: false,
    publish: false,
    viewErrorData: false,
    download: false,
    uploadCdkeys: false,
    generateCdkeys: false,
    viewFinancials: false,
    manageCeg: false,
    manageSigning: false,
    manageCdkeys: false,
    editMarketing: false,
    economySupport: false,
    economySupportSupervisor: false,
    managePricing: false,
    broadcastLive: false,
    viewMarketingTraffic: false,
    editStoreDisplayContent: false,
  };
}

export const CMsgAppRights = {
  encode(message: CMsgAppRights, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.editInfo === true) {
      writer.uint32(8).bool(message.editInfo);
    }
    if (message.publish === true) {
      writer.uint32(16).bool(message.publish);
    }
    if (message.viewErrorData === true) {
      writer.uint32(24).bool(message.viewErrorData);
    }
    if (message.download === true) {
      writer.uint32(32).bool(message.download);
    }
    if (message.uploadCdkeys === true) {
      writer.uint32(40).bool(message.uploadCdkeys);
    }
    if (message.generateCdkeys === true) {
      writer.uint32(48).bool(message.generateCdkeys);
    }
    if (message.viewFinancials === true) {
      writer.uint32(56).bool(message.viewFinancials);
    }
    if (message.manageCeg === true) {
      writer.uint32(64).bool(message.manageCeg);
    }
    if (message.manageSigning === true) {
      writer.uint32(72).bool(message.manageSigning);
    }
    if (message.manageCdkeys === true) {
      writer.uint32(80).bool(message.manageCdkeys);
    }
    if (message.editMarketing === true) {
      writer.uint32(88).bool(message.editMarketing);
    }
    if (message.economySupport === true) {
      writer.uint32(96).bool(message.economySupport);
    }
    if (message.economySupportSupervisor === true) {
      writer.uint32(104).bool(message.economySupportSupervisor);
    }
    if (message.managePricing === true) {
      writer.uint32(112).bool(message.managePricing);
    }
    if (message.broadcastLive === true) {
      writer.uint32(120).bool(message.broadcastLive);
    }
    if (message.viewMarketingTraffic === true) {
      writer.uint32(128).bool(message.viewMarketingTraffic);
    }
    if (message.editStoreDisplayContent === true) {
      writer.uint32(136).bool(message.editStoreDisplayContent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAppRights {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAppRights();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.editInfo = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.publish = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.viewErrorData = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.download = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.uploadCdkeys = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.generateCdkeys = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.viewFinancials = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.manageCeg = reader.bool();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.manageSigning = reader.bool();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.manageCdkeys = reader.bool();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.editMarketing = reader.bool();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.economySupport = reader.bool();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.economySupportSupervisor = reader.bool();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.managePricing = reader.bool();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.broadcastLive = reader.bool();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.viewMarketingTraffic = reader.bool();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.editStoreDisplayContent = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgAppRights {
    return {
      editInfo: isSet(object.editInfo) ? Boolean(object.editInfo) : false,
      publish: isSet(object.publish) ? Boolean(object.publish) : false,
      viewErrorData: isSet(object.viewErrorData) ? Boolean(object.viewErrorData) : false,
      download: isSet(object.download) ? Boolean(object.download) : false,
      uploadCdkeys: isSet(object.uploadCdkeys) ? Boolean(object.uploadCdkeys) : false,
      generateCdkeys: isSet(object.generateCdkeys) ? Boolean(object.generateCdkeys) : false,
      viewFinancials: isSet(object.viewFinancials) ? Boolean(object.viewFinancials) : false,
      manageCeg: isSet(object.manageCeg) ? Boolean(object.manageCeg) : false,
      manageSigning: isSet(object.manageSigning) ? Boolean(object.manageSigning) : false,
      manageCdkeys: isSet(object.manageCdkeys) ? Boolean(object.manageCdkeys) : false,
      editMarketing: isSet(object.editMarketing) ? Boolean(object.editMarketing) : false,
      economySupport: isSet(object.economySupport) ? Boolean(object.economySupport) : false,
      economySupportSupervisor: isSet(object.economySupportSupervisor)
        ? Boolean(object.economySupportSupervisor)
        : false,
      managePricing: isSet(object.managePricing) ? Boolean(object.managePricing) : false,
      broadcastLive: isSet(object.broadcastLive) ? Boolean(object.broadcastLive) : false,
      viewMarketingTraffic: isSet(object.viewMarketingTraffic) ? Boolean(object.viewMarketingTraffic) : false,
      editStoreDisplayContent: isSet(object.editStoreDisplayContent) ? Boolean(object.editStoreDisplayContent) : false,
    };
  },

  toJSON(message: CMsgAppRights): unknown {
    const obj: any = {};
    message.editInfo !== undefined && (obj.editInfo = message.editInfo);
    message.publish !== undefined && (obj.publish = message.publish);
    message.viewErrorData !== undefined && (obj.viewErrorData = message.viewErrorData);
    message.download !== undefined && (obj.download = message.download);
    message.uploadCdkeys !== undefined && (obj.uploadCdkeys = message.uploadCdkeys);
    message.generateCdkeys !== undefined && (obj.generateCdkeys = message.generateCdkeys);
    message.viewFinancials !== undefined && (obj.viewFinancials = message.viewFinancials);
    message.manageCeg !== undefined && (obj.manageCeg = message.manageCeg);
    message.manageSigning !== undefined && (obj.manageSigning = message.manageSigning);
    message.manageCdkeys !== undefined && (obj.manageCdkeys = message.manageCdkeys);
    message.editMarketing !== undefined && (obj.editMarketing = message.editMarketing);
    message.economySupport !== undefined && (obj.economySupport = message.economySupport);
    message.economySupportSupervisor !== undefined && (obj.economySupportSupervisor = message.economySupportSupervisor);
    message.managePricing !== undefined && (obj.managePricing = message.managePricing);
    message.broadcastLive !== undefined && (obj.broadcastLive = message.broadcastLive);
    message.viewMarketingTraffic !== undefined && (obj.viewMarketingTraffic = message.viewMarketingTraffic);
    message.editStoreDisplayContent !== undefined && (obj.editStoreDisplayContent = message.editStoreDisplayContent);
    return obj;
  },

  create(base?: DeepPartial<CMsgAppRights>): CMsgAppRights {
    return CMsgAppRights.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAppRights>): CMsgAppRights {
    const message = createBaseCMsgAppRights();
    message.editInfo = object.editInfo ?? false;
    message.publish = object.publish ?? false;
    message.viewErrorData = object.viewErrorData ?? false;
    message.download = object.download ?? false;
    message.uploadCdkeys = object.uploadCdkeys ?? false;
    message.generateCdkeys = object.generateCdkeys ?? false;
    message.viewFinancials = object.viewFinancials ?? false;
    message.manageCeg = object.manageCeg ?? false;
    message.manageSigning = object.manageSigning ?? false;
    message.manageCdkeys = object.manageCdkeys ?? false;
    message.editMarketing = object.editMarketing ?? false;
    message.economySupport = object.economySupport ?? false;
    message.economySupportSupervisor = object.economySupportSupervisor ?? false;
    message.managePricing = object.managePricing ?? false;
    message.broadcastLive = object.broadcastLive ?? false;
    message.viewMarketingTraffic = object.viewMarketingTraffic ?? false;
    message.editStoreDisplayContent = object.editStoreDisplayContent ?? false;
    return message;
  },
};

function createBaseCCuratorPreferences(): CCuratorPreferences {
  return {
    supportedLanguages: 0,
    platformWindows: false,
    platformMac: false,
    platformLinux: false,
    vrContent: false,
    adultContentViolence: false,
    adultContentSex: false,
    timestampUpdated: 0,
    tagidsCurated: [],
    tagidsFiltered: [],
    websiteTitle: "",
    websiteUrl: "",
    discussionUrl: "",
    showBroadcast: false,
  };
}

export const CCuratorPreferences = {
  encode(message: CCuratorPreferences, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.supportedLanguages !== 0) {
      writer.uint32(8).uint32(message.supportedLanguages);
    }
    if (message.platformWindows === true) {
      writer.uint32(16).bool(message.platformWindows);
    }
    if (message.platformMac === true) {
      writer.uint32(24).bool(message.platformMac);
    }
    if (message.platformLinux === true) {
      writer.uint32(32).bool(message.platformLinux);
    }
    if (message.vrContent === true) {
      writer.uint32(40).bool(message.vrContent);
    }
    if (message.adultContentViolence === true) {
      writer.uint32(48).bool(message.adultContentViolence);
    }
    if (message.adultContentSex === true) {
      writer.uint32(56).bool(message.adultContentSex);
    }
    if (message.timestampUpdated !== 0) {
      writer.uint32(64).uint32(message.timestampUpdated);
    }
    writer.uint32(74).fork();
    for (const v of message.tagidsCurated) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(82).fork();
    for (const v of message.tagidsFiltered) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.websiteTitle !== "") {
      writer.uint32(90).string(message.websiteTitle);
    }
    if (message.websiteUrl !== "") {
      writer.uint32(98).string(message.websiteUrl);
    }
    if (message.discussionUrl !== "") {
      writer.uint32(106).string(message.discussionUrl);
    }
    if (message.showBroadcast === true) {
      writer.uint32(112).bool(message.showBroadcast);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCuratorPreferences {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCuratorPreferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.supportedLanguages = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.platformWindows = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.platformMac = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.platformLinux = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.vrContent = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.adultContentViolence = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.adultContentSex = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.timestampUpdated = reader.uint32();
          continue;
        case 9:
          if (tag == 72) {
            message.tagidsCurated.push(reader.uint32());
            continue;
          }

          if (tag == 74) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tagidsCurated.push(reader.uint32());
            }

            continue;
          }

          break;
        case 10:
          if (tag == 80) {
            message.tagidsFiltered.push(reader.uint32());
            continue;
          }

          if (tag == 82) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tagidsFiltered.push(reader.uint32());
            }

            continue;
          }

          break;
        case 11:
          if (tag != 90) {
            break;
          }

          message.websiteTitle = reader.string();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.websiteUrl = reader.string();
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.discussionUrl = reader.string();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.showBroadcast = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCuratorPreferences {
    return {
      supportedLanguages: isSet(object.supportedLanguages) ? Number(object.supportedLanguages) : 0,
      platformWindows: isSet(object.platformWindows) ? Boolean(object.platformWindows) : false,
      platformMac: isSet(object.platformMac) ? Boolean(object.platformMac) : false,
      platformLinux: isSet(object.platformLinux) ? Boolean(object.platformLinux) : false,
      vrContent: isSet(object.vrContent) ? Boolean(object.vrContent) : false,
      adultContentViolence: isSet(object.adultContentViolence) ? Boolean(object.adultContentViolence) : false,
      adultContentSex: isSet(object.adultContentSex) ? Boolean(object.adultContentSex) : false,
      timestampUpdated: isSet(object.timestampUpdated) ? Number(object.timestampUpdated) : 0,
      tagidsCurated: Array.isArray(object?.tagidsCurated) ? object.tagidsCurated.map((e: any) => Number(e)) : [],
      tagidsFiltered: Array.isArray(object?.tagidsFiltered) ? object.tagidsFiltered.map((e: any) => Number(e)) : [],
      websiteTitle: isSet(object.websiteTitle) ? String(object.websiteTitle) : "",
      websiteUrl: isSet(object.websiteUrl) ? String(object.websiteUrl) : "",
      discussionUrl: isSet(object.discussionUrl) ? String(object.discussionUrl) : "",
      showBroadcast: isSet(object.showBroadcast) ? Boolean(object.showBroadcast) : false,
    };
  },

  toJSON(message: CCuratorPreferences): unknown {
    const obj: any = {};
    message.supportedLanguages !== undefined && (obj.supportedLanguages = Math.round(message.supportedLanguages));
    message.platformWindows !== undefined && (obj.platformWindows = message.platformWindows);
    message.platformMac !== undefined && (obj.platformMac = message.platformMac);
    message.platformLinux !== undefined && (obj.platformLinux = message.platformLinux);
    message.vrContent !== undefined && (obj.vrContent = message.vrContent);
    message.adultContentViolence !== undefined && (obj.adultContentViolence = message.adultContentViolence);
    message.adultContentSex !== undefined && (obj.adultContentSex = message.adultContentSex);
    message.timestampUpdated !== undefined && (obj.timestampUpdated = Math.round(message.timestampUpdated));
    if (message.tagidsCurated) {
      obj.tagidsCurated = message.tagidsCurated.map((e) => Math.round(e));
    } else {
      obj.tagidsCurated = [];
    }
    if (message.tagidsFiltered) {
      obj.tagidsFiltered = message.tagidsFiltered.map((e) => Math.round(e));
    } else {
      obj.tagidsFiltered = [];
    }
    message.websiteTitle !== undefined && (obj.websiteTitle = message.websiteTitle);
    message.websiteUrl !== undefined && (obj.websiteUrl = message.websiteUrl);
    message.discussionUrl !== undefined && (obj.discussionUrl = message.discussionUrl);
    message.showBroadcast !== undefined && (obj.showBroadcast = message.showBroadcast);
    return obj;
  },

  create(base?: DeepPartial<CCuratorPreferences>): CCuratorPreferences {
    return CCuratorPreferences.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CCuratorPreferences>): CCuratorPreferences {
    const message = createBaseCCuratorPreferences();
    message.supportedLanguages = object.supportedLanguages ?? 0;
    message.platformWindows = object.platformWindows ?? false;
    message.platformMac = object.platformMac ?? false;
    message.platformLinux = object.platformLinux ?? false;
    message.vrContent = object.vrContent ?? false;
    message.adultContentViolence = object.adultContentViolence ?? false;
    message.adultContentSex = object.adultContentSex ?? false;
    message.timestampUpdated = object.timestampUpdated ?? 0;
    message.tagidsCurated = object.tagidsCurated?.map((e) => e) || [];
    message.tagidsFiltered = object.tagidsFiltered?.map((e) => e) || [];
    message.websiteTitle = object.websiteTitle ?? "";
    message.websiteUrl = object.websiteUrl ?? "";
    message.discussionUrl = object.discussionUrl ?? "";
    message.showBroadcast = object.showBroadcast ?? false;
    return message;
  },
};

function createBaseCLocalizationToken(): CLocalizationToken {
  return { language: 0, localizedString: "" };
}

export const CLocalizationToken = {
  encode(message: CLocalizationToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.language !== 0) {
      writer.uint32(8).uint32(message.language);
    }
    if (message.localizedString !== "") {
      writer.uint32(18).string(message.localizedString);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CLocalizationToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCLocalizationToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.language = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.localizedString = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CLocalizationToken {
    return {
      language: isSet(object.language) ? Number(object.language) : 0,
      localizedString: isSet(object.localizedString) ? String(object.localizedString) : "",
    };
  },

  toJSON(message: CLocalizationToken): unknown {
    const obj: any = {};
    message.language !== undefined && (obj.language = Math.round(message.language));
    message.localizedString !== undefined && (obj.localizedString = message.localizedString);
    return obj;
  },

  create(base?: DeepPartial<CLocalizationToken>): CLocalizationToken {
    return CLocalizationToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CLocalizationToken>): CLocalizationToken {
    const message = createBaseCLocalizationToken();
    message.language = object.language ?? 0;
    message.localizedString = object.localizedString ?? "";
    return message;
  },
};

function createBaseCClanEventUserNewsTuple(): CClanEventUserNewsTuple {
  return {
    clanid: 0,
    eventGid: "0",
    announcementGid: "0",
    rtimeStart: 0,
    rtimeEnd: 0,
    priorityScore: 0,
    type: 0,
    clampRangeSlot: 0,
    appid: 0,
    rtime32LastModified: 0,
  };
}

export const CClanEventUserNewsTuple = {
  encode(message: CClanEventUserNewsTuple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clanid !== 0) {
      writer.uint32(8).uint32(message.clanid);
    }
    if (message.eventGid !== "0") {
      writer.uint32(17).fixed64(message.eventGid);
    }
    if (message.announcementGid !== "0") {
      writer.uint32(25).fixed64(message.announcementGid);
    }
    if (message.rtimeStart !== 0) {
      writer.uint32(32).uint32(message.rtimeStart);
    }
    if (message.rtimeEnd !== 0) {
      writer.uint32(40).uint32(message.rtimeEnd);
    }
    if (message.priorityScore !== 0) {
      writer.uint32(48).uint32(message.priorityScore);
    }
    if (message.type !== 0) {
      writer.uint32(56).uint32(message.type);
    }
    if (message.clampRangeSlot !== 0) {
      writer.uint32(64).uint32(message.clampRangeSlot);
    }
    if (message.appid !== 0) {
      writer.uint32(72).uint32(message.appid);
    }
    if (message.rtime32LastModified !== 0) {
      writer.uint32(80).uint32(message.rtime32LastModified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClanEventUserNewsTuple {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClanEventUserNewsTuple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.clanid = reader.uint32();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.eventGid = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.announcementGid = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.rtimeStart = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.rtimeEnd = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.priorityScore = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.type = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.clampRangeSlot = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.appid = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.rtime32LastModified = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CClanEventUserNewsTuple {
    return {
      clanid: isSet(object.clanid) ? Number(object.clanid) : 0,
      eventGid: isSet(object.eventGid) ? String(object.eventGid) : "0",
      announcementGid: isSet(object.announcementGid) ? String(object.announcementGid) : "0",
      rtimeStart: isSet(object.rtimeStart) ? Number(object.rtimeStart) : 0,
      rtimeEnd: isSet(object.rtimeEnd) ? Number(object.rtimeEnd) : 0,
      priorityScore: isSet(object.priorityScore) ? Number(object.priorityScore) : 0,
      type: isSet(object.type) ? Number(object.type) : 0,
      clampRangeSlot: isSet(object.clampRangeSlot) ? Number(object.clampRangeSlot) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      rtime32LastModified: isSet(object.rtime32LastModified) ? Number(object.rtime32LastModified) : 0,
    };
  },

  toJSON(message: CClanEventUserNewsTuple): unknown {
    const obj: any = {};
    message.clanid !== undefined && (obj.clanid = Math.round(message.clanid));
    message.eventGid !== undefined && (obj.eventGid = message.eventGid);
    message.announcementGid !== undefined && (obj.announcementGid = message.announcementGid);
    message.rtimeStart !== undefined && (obj.rtimeStart = Math.round(message.rtimeStart));
    message.rtimeEnd !== undefined && (obj.rtimeEnd = Math.round(message.rtimeEnd));
    message.priorityScore !== undefined && (obj.priorityScore = Math.round(message.priorityScore));
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.clampRangeSlot !== undefined && (obj.clampRangeSlot = Math.round(message.clampRangeSlot));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.rtime32LastModified !== undefined && (obj.rtime32LastModified = Math.round(message.rtime32LastModified));
    return obj;
  },

  create(base?: DeepPartial<CClanEventUserNewsTuple>): CClanEventUserNewsTuple {
    return CClanEventUserNewsTuple.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CClanEventUserNewsTuple>): CClanEventUserNewsTuple {
    const message = createBaseCClanEventUserNewsTuple();
    message.clanid = object.clanid ?? 0;
    message.eventGid = object.eventGid ?? "0";
    message.announcementGid = object.announcementGid ?? "0";
    message.rtimeStart = object.rtimeStart ?? 0;
    message.rtimeEnd = object.rtimeEnd ?? 0;
    message.priorityScore = object.priorityScore ?? 0;
    message.type = object.type ?? 0;
    message.clampRangeSlot = object.clampRangeSlot ?? 0;
    message.appid = object.appid ?? 0;
    message.rtime32LastModified = object.rtime32LastModified ?? 0;
    return message;
  },
};

function createBaseCClanMatchEventByRange(): CClanMatchEventByRange {
  return { rtimeBefore: 0, rtimeAfter: 0, qualified: 0, events: [] };
}

export const CClanMatchEventByRange = {
  encode(message: CClanMatchEventByRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rtimeBefore !== 0) {
      writer.uint32(8).uint32(message.rtimeBefore);
    }
    if (message.rtimeAfter !== 0) {
      writer.uint32(16).uint32(message.rtimeAfter);
    }
    if (message.qualified !== 0) {
      writer.uint32(24).uint32(message.qualified);
    }
    for (const v of message.events) {
      CClanEventUserNewsTuple.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClanMatchEventByRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClanMatchEventByRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.rtimeBefore = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.rtimeAfter = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.qualified = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.events.push(CClanEventUserNewsTuple.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CClanMatchEventByRange {
    return {
      rtimeBefore: isSet(object.rtimeBefore) ? Number(object.rtimeBefore) : 0,
      rtimeAfter: isSet(object.rtimeAfter) ? Number(object.rtimeAfter) : 0,
      qualified: isSet(object.qualified) ? Number(object.qualified) : 0,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => CClanEventUserNewsTuple.fromJSON(e)) : [],
    };
  },

  toJSON(message: CClanMatchEventByRange): unknown {
    const obj: any = {};
    message.rtimeBefore !== undefined && (obj.rtimeBefore = Math.round(message.rtimeBefore));
    message.rtimeAfter !== undefined && (obj.rtimeAfter = Math.round(message.rtimeAfter));
    message.qualified !== undefined && (obj.qualified = Math.round(message.qualified));
    if (message.events) {
      obj.events = message.events.map((e) => e ? CClanEventUserNewsTuple.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CClanMatchEventByRange>): CClanMatchEventByRange {
    return CClanMatchEventByRange.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CClanMatchEventByRange>): CClanMatchEventByRange {
    const message = createBaseCClanMatchEventByRange();
    message.rtimeBefore = object.rtimeBefore ?? 0;
    message.rtimeAfter = object.rtimeAfter ?? 0;
    message.qualified = object.qualified ?? 0;
    message.events = object.events?.map((e) => CClanEventUserNewsTuple.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCCommunityClanAnnouncementInfo(): CCommunityClanAnnouncementInfo {
  return {
    gid: "0",
    clanid: "0",
    posterid: "0",
    headline: "",
    posttime: 0,
    updatetime: 0,
    body: "",
    commentcount: 0,
    tags: [],
    language: 0,
    hidden: false,
    forumTopicId: "0",
    eventGid: "0",
    voteupcount: 0,
    votedowncount: 0,
    banCheckResult: 0,
    banned: false,
  };
}

export const CCommunityClanAnnouncementInfo = {
  encode(message: CCommunityClanAnnouncementInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gid !== "0") {
      writer.uint32(8).uint64(message.gid);
    }
    if (message.clanid !== "0") {
      writer.uint32(16).uint64(message.clanid);
    }
    if (message.posterid !== "0") {
      writer.uint32(24).uint64(message.posterid);
    }
    if (message.headline !== "") {
      writer.uint32(34).string(message.headline);
    }
    if (message.posttime !== 0) {
      writer.uint32(40).uint32(message.posttime);
    }
    if (message.updatetime !== 0) {
      writer.uint32(48).uint32(message.updatetime);
    }
    if (message.body !== "") {
      writer.uint32(58).string(message.body);
    }
    if (message.commentcount !== 0) {
      writer.uint32(64).int32(message.commentcount);
    }
    for (const v of message.tags) {
      writer.uint32(74).string(v!);
    }
    if (message.language !== 0) {
      writer.uint32(80).int32(message.language);
    }
    if (message.hidden === true) {
      writer.uint32(88).bool(message.hidden);
    }
    if (message.forumTopicId !== "0") {
      writer.uint32(97).fixed64(message.forumTopicId);
    }
    if (message.eventGid !== "0") {
      writer.uint32(105).fixed64(message.eventGid);
    }
    if (message.voteupcount !== 0) {
      writer.uint32(112).int32(message.voteupcount);
    }
    if (message.votedowncount !== 0) {
      writer.uint32(120).int32(message.votedowncount);
    }
    if (message.banCheckResult !== 0) {
      writer.uint32(128).int32(message.banCheckResult);
    }
    if (message.banned === true) {
      writer.uint32(136).bool(message.banned);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCommunityClanAnnouncementInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCommunityClanAnnouncementInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.gid = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.clanid = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.posterid = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.headline = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.posttime = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.updatetime = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.body = reader.string();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.commentcount = reader.int32();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.language = reader.int32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.hidden = reader.bool();
          continue;
        case 12:
          if (tag != 97) {
            break;
          }

          message.forumTopicId = longToString(reader.fixed64() as Long);
          continue;
        case 13:
          if (tag != 105) {
            break;
          }

          message.eventGid = longToString(reader.fixed64() as Long);
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.voteupcount = reader.int32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.votedowncount = reader.int32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.banCheckResult = reader.int32() as any;
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.banned = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCommunityClanAnnouncementInfo {
    return {
      gid: isSet(object.gid) ? String(object.gid) : "0",
      clanid: isSet(object.clanid) ? String(object.clanid) : "0",
      posterid: isSet(object.posterid) ? String(object.posterid) : "0",
      headline: isSet(object.headline) ? String(object.headline) : "",
      posttime: isSet(object.posttime) ? Number(object.posttime) : 0,
      updatetime: isSet(object.updatetime) ? Number(object.updatetime) : 0,
      body: isSet(object.body) ? String(object.body) : "",
      commentcount: isSet(object.commentcount) ? Number(object.commentcount) : 0,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      language: isSet(object.language) ? Number(object.language) : 0,
      hidden: isSet(object.hidden) ? Boolean(object.hidden) : false,
      forumTopicId: isSet(object.forumTopicId) ? String(object.forumTopicId) : "0",
      eventGid: isSet(object.eventGid) ? String(object.eventGid) : "0",
      voteupcount: isSet(object.voteupcount) ? Number(object.voteupcount) : 0,
      votedowncount: isSet(object.votedowncount) ? Number(object.votedowncount) : 0,
      banCheckResult: isSet(object.banCheckResult) ? eBanContentCheckResultFromJSON(object.banCheckResult) : 0,
      banned: isSet(object.banned) ? Boolean(object.banned) : false,
    };
  },

  toJSON(message: CCommunityClanAnnouncementInfo): unknown {
    const obj: any = {};
    message.gid !== undefined && (obj.gid = message.gid);
    message.clanid !== undefined && (obj.clanid = message.clanid);
    message.posterid !== undefined && (obj.posterid = message.posterid);
    message.headline !== undefined && (obj.headline = message.headline);
    message.posttime !== undefined && (obj.posttime = Math.round(message.posttime));
    message.updatetime !== undefined && (obj.updatetime = Math.round(message.updatetime));
    message.body !== undefined && (obj.body = message.body);
    message.commentcount !== undefined && (obj.commentcount = Math.round(message.commentcount));
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.language !== undefined && (obj.language = Math.round(message.language));
    message.hidden !== undefined && (obj.hidden = message.hidden);
    message.forumTopicId !== undefined && (obj.forumTopicId = message.forumTopicId);
    message.eventGid !== undefined && (obj.eventGid = message.eventGid);
    message.voteupcount !== undefined && (obj.voteupcount = Math.round(message.voteupcount));
    message.votedowncount !== undefined && (obj.votedowncount = Math.round(message.votedowncount));
    message.banCheckResult !== undefined && (obj.banCheckResult = eBanContentCheckResultToJSON(message.banCheckResult));
    message.banned !== undefined && (obj.banned = message.banned);
    return obj;
  },

  create(base?: DeepPartial<CCommunityClanAnnouncementInfo>): CCommunityClanAnnouncementInfo {
    return CCommunityClanAnnouncementInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CCommunityClanAnnouncementInfo>): CCommunityClanAnnouncementInfo {
    const message = createBaseCCommunityClanAnnouncementInfo();
    message.gid = object.gid ?? "0";
    message.clanid = object.clanid ?? "0";
    message.posterid = object.posterid ?? "0";
    message.headline = object.headline ?? "";
    message.posttime = object.posttime ?? 0;
    message.updatetime = object.updatetime ?? 0;
    message.body = object.body ?? "";
    message.commentcount = object.commentcount ?? 0;
    message.tags = object.tags?.map((e) => e) || [];
    message.language = object.language ?? 0;
    message.hidden = object.hidden ?? false;
    message.forumTopicId = object.forumTopicId ?? "0";
    message.eventGid = object.eventGid ?? "0";
    message.voteupcount = object.voteupcount ?? 0;
    message.votedowncount = object.votedowncount ?? 0;
    message.banCheckResult = object.banCheckResult ?? 0;
    message.banned = object.banned ?? false;
    return message;
  },
};

function createBaseCClanEventData(): CClanEventData {
  return {
    gid: "0",
    clanSteamid: "0",
    eventName: "",
    eventType: 1,
    appid: 0,
    serverAddress: "",
    serverPassword: "",
    rtime32StartTime: 0,
    rtime32EndTime: 0,
    commentCount: 0,
    creatorSteamid: "0",
    lastUpdateSteamid: "0",
    eventNotes: "",
    jsondata: "",
    announcementBody: undefined,
    published: false,
    hidden: false,
    rtime32VisibilityStart: 0,
    rtime32VisibilityEnd: 0,
    broadcasterAccountid: 0,
    followerCount: 0,
    ignoreCount: 0,
    forumTopicId: "0",
    rtime32LastModified: 0,
    newsPostGid: "0",
    rtimeModReviewed: 0,
    featuredAppTagid: 0,
    referencedAppids: [],
    buildId: 0,
    buildBranch: "",
  };
}

export const CClanEventData = {
  encode(message: CClanEventData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gid !== "0") {
      writer.uint32(9).fixed64(message.gid);
    }
    if (message.clanSteamid !== "0") {
      writer.uint32(17).fixed64(message.clanSteamid);
    }
    if (message.eventName !== "") {
      writer.uint32(26).string(message.eventName);
    }
    if (message.eventType !== 1) {
      writer.uint32(32).int32(message.eventType);
    }
    if (message.appid !== 0) {
      writer.uint32(40).uint32(message.appid);
    }
    if (message.serverAddress !== "") {
      writer.uint32(50).string(message.serverAddress);
    }
    if (message.serverPassword !== "") {
      writer.uint32(58).string(message.serverPassword);
    }
    if (message.rtime32StartTime !== 0) {
      writer.uint32(64).uint32(message.rtime32StartTime);
    }
    if (message.rtime32EndTime !== 0) {
      writer.uint32(72).uint32(message.rtime32EndTime);
    }
    if (message.commentCount !== 0) {
      writer.uint32(80).int32(message.commentCount);
    }
    if (message.creatorSteamid !== "0") {
      writer.uint32(89).fixed64(message.creatorSteamid);
    }
    if (message.lastUpdateSteamid !== "0") {
      writer.uint32(97).fixed64(message.lastUpdateSteamid);
    }
    if (message.eventNotes !== "") {
      writer.uint32(106).string(message.eventNotes);
    }
    if (message.jsondata !== "") {
      writer.uint32(114).string(message.jsondata);
    }
    if (message.announcementBody !== undefined) {
      CCommunityClanAnnouncementInfo.encode(message.announcementBody, writer.uint32(122).fork()).ldelim();
    }
    if (message.published === true) {
      writer.uint32(128).bool(message.published);
    }
    if (message.hidden === true) {
      writer.uint32(136).bool(message.hidden);
    }
    if (message.rtime32VisibilityStart !== 0) {
      writer.uint32(144).uint32(message.rtime32VisibilityStart);
    }
    if (message.rtime32VisibilityEnd !== 0) {
      writer.uint32(152).uint32(message.rtime32VisibilityEnd);
    }
    if (message.broadcasterAccountid !== 0) {
      writer.uint32(160).uint32(message.broadcasterAccountid);
    }
    if (message.followerCount !== 0) {
      writer.uint32(168).uint32(message.followerCount);
    }
    if (message.ignoreCount !== 0) {
      writer.uint32(176).uint32(message.ignoreCount);
    }
    if (message.forumTopicId !== "0") {
      writer.uint32(185).fixed64(message.forumTopicId);
    }
    if (message.rtime32LastModified !== 0) {
      writer.uint32(192).uint32(message.rtime32LastModified);
    }
    if (message.newsPostGid !== "0") {
      writer.uint32(201).fixed64(message.newsPostGid);
    }
    if (message.rtimeModReviewed !== 0) {
      writer.uint32(208).uint32(message.rtimeModReviewed);
    }
    if (message.featuredAppTagid !== 0) {
      writer.uint32(216).uint32(message.featuredAppTagid);
    }
    writer.uint32(226).fork();
    for (const v of message.referencedAppids) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.buildId !== 0) {
      writer.uint32(232).uint32(message.buildId);
    }
    if (message.buildBranch !== "") {
      writer.uint32(242).string(message.buildBranch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClanEventData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClanEventData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.gid = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.clanSteamid = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.eventName = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.eventType = reader.int32() as any;
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.appid = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.serverAddress = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.serverPassword = reader.string();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.rtime32StartTime = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.rtime32EndTime = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.commentCount = reader.int32();
          continue;
        case 11:
          if (tag != 89) {
            break;
          }

          message.creatorSteamid = longToString(reader.fixed64() as Long);
          continue;
        case 12:
          if (tag != 97) {
            break;
          }

          message.lastUpdateSteamid = longToString(reader.fixed64() as Long);
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.eventNotes = reader.string();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.jsondata = reader.string();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.announcementBody = CCommunityClanAnnouncementInfo.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.published = reader.bool();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.hidden = reader.bool();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.rtime32VisibilityStart = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.rtime32VisibilityEnd = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.broadcasterAccountid = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.followerCount = reader.uint32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.ignoreCount = reader.uint32();
          continue;
        case 23:
          if (tag != 185) {
            break;
          }

          message.forumTopicId = longToString(reader.fixed64() as Long);
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.rtime32LastModified = reader.uint32();
          continue;
        case 25:
          if (tag != 201) {
            break;
          }

          message.newsPostGid = longToString(reader.fixed64() as Long);
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.rtimeModReviewed = reader.uint32();
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.featuredAppTagid = reader.uint32();
          continue;
        case 28:
          if (tag == 224) {
            message.referencedAppids.push(reader.uint32());
            continue;
          }

          if (tag == 226) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.referencedAppids.push(reader.uint32());
            }

            continue;
          }

          break;
        case 29:
          if (tag != 232) {
            break;
          }

          message.buildId = reader.uint32();
          continue;
        case 30:
          if (tag != 242) {
            break;
          }

          message.buildBranch = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CClanEventData {
    return {
      gid: isSet(object.gid) ? String(object.gid) : "0",
      clanSteamid: isSet(object.clanSteamid) ? String(object.clanSteamid) : "0",
      eventName: isSet(object.eventName) ? String(object.eventName) : "",
      eventType: isSet(object.eventType) ? eProtoClanEventTypeFromJSON(object.eventType) : 1,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      serverAddress: isSet(object.serverAddress) ? String(object.serverAddress) : "",
      serverPassword: isSet(object.serverPassword) ? String(object.serverPassword) : "",
      rtime32StartTime: isSet(object.rtime32StartTime) ? Number(object.rtime32StartTime) : 0,
      rtime32EndTime: isSet(object.rtime32EndTime) ? Number(object.rtime32EndTime) : 0,
      commentCount: isSet(object.commentCount) ? Number(object.commentCount) : 0,
      creatorSteamid: isSet(object.creatorSteamid) ? String(object.creatorSteamid) : "0",
      lastUpdateSteamid: isSet(object.lastUpdateSteamid) ? String(object.lastUpdateSteamid) : "0",
      eventNotes: isSet(object.eventNotes) ? String(object.eventNotes) : "",
      jsondata: isSet(object.jsondata) ? String(object.jsondata) : "",
      announcementBody: isSet(object.announcementBody)
        ? CCommunityClanAnnouncementInfo.fromJSON(object.announcementBody)
        : undefined,
      published: isSet(object.published) ? Boolean(object.published) : false,
      hidden: isSet(object.hidden) ? Boolean(object.hidden) : false,
      rtime32VisibilityStart: isSet(object.rtime32VisibilityStart) ? Number(object.rtime32VisibilityStart) : 0,
      rtime32VisibilityEnd: isSet(object.rtime32VisibilityEnd) ? Number(object.rtime32VisibilityEnd) : 0,
      broadcasterAccountid: isSet(object.broadcasterAccountid) ? Number(object.broadcasterAccountid) : 0,
      followerCount: isSet(object.followerCount) ? Number(object.followerCount) : 0,
      ignoreCount: isSet(object.ignoreCount) ? Number(object.ignoreCount) : 0,
      forumTopicId: isSet(object.forumTopicId) ? String(object.forumTopicId) : "0",
      rtime32LastModified: isSet(object.rtime32LastModified) ? Number(object.rtime32LastModified) : 0,
      newsPostGid: isSet(object.newsPostGid) ? String(object.newsPostGid) : "0",
      rtimeModReviewed: isSet(object.rtimeModReviewed) ? Number(object.rtimeModReviewed) : 0,
      featuredAppTagid: isSet(object.featuredAppTagid) ? Number(object.featuredAppTagid) : 0,
      referencedAppids: Array.isArray(object?.referencedAppids)
        ? object.referencedAppids.map((e: any) => Number(e))
        : [],
      buildId: isSet(object.buildId) ? Number(object.buildId) : 0,
      buildBranch: isSet(object.buildBranch) ? String(object.buildBranch) : "",
    };
  },

  toJSON(message: CClanEventData): unknown {
    const obj: any = {};
    message.gid !== undefined && (obj.gid = message.gid);
    message.clanSteamid !== undefined && (obj.clanSteamid = message.clanSteamid);
    message.eventName !== undefined && (obj.eventName = message.eventName);
    message.eventType !== undefined && (obj.eventType = eProtoClanEventTypeToJSON(message.eventType));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.serverAddress !== undefined && (obj.serverAddress = message.serverAddress);
    message.serverPassword !== undefined && (obj.serverPassword = message.serverPassword);
    message.rtime32StartTime !== undefined && (obj.rtime32StartTime = Math.round(message.rtime32StartTime));
    message.rtime32EndTime !== undefined && (obj.rtime32EndTime = Math.round(message.rtime32EndTime));
    message.commentCount !== undefined && (obj.commentCount = Math.round(message.commentCount));
    message.creatorSteamid !== undefined && (obj.creatorSteamid = message.creatorSteamid);
    message.lastUpdateSteamid !== undefined && (obj.lastUpdateSteamid = message.lastUpdateSteamid);
    message.eventNotes !== undefined && (obj.eventNotes = message.eventNotes);
    message.jsondata !== undefined && (obj.jsondata = message.jsondata);
    message.announcementBody !== undefined && (obj.announcementBody = message.announcementBody
      ? CCommunityClanAnnouncementInfo.toJSON(message.announcementBody)
      : undefined);
    message.published !== undefined && (obj.published = message.published);
    message.hidden !== undefined && (obj.hidden = message.hidden);
    message.rtime32VisibilityStart !== undefined &&
      (obj.rtime32VisibilityStart = Math.round(message.rtime32VisibilityStart));
    message.rtime32VisibilityEnd !== undefined && (obj.rtime32VisibilityEnd = Math.round(message.rtime32VisibilityEnd));
    message.broadcasterAccountid !== undefined && (obj.broadcasterAccountid = Math.round(message.broadcasterAccountid));
    message.followerCount !== undefined && (obj.followerCount = Math.round(message.followerCount));
    message.ignoreCount !== undefined && (obj.ignoreCount = Math.round(message.ignoreCount));
    message.forumTopicId !== undefined && (obj.forumTopicId = message.forumTopicId);
    message.rtime32LastModified !== undefined && (obj.rtime32LastModified = Math.round(message.rtime32LastModified));
    message.newsPostGid !== undefined && (obj.newsPostGid = message.newsPostGid);
    message.rtimeModReviewed !== undefined && (obj.rtimeModReviewed = Math.round(message.rtimeModReviewed));
    message.featuredAppTagid !== undefined && (obj.featuredAppTagid = Math.round(message.featuredAppTagid));
    if (message.referencedAppids) {
      obj.referencedAppids = message.referencedAppids.map((e) => Math.round(e));
    } else {
      obj.referencedAppids = [];
    }
    message.buildId !== undefined && (obj.buildId = Math.round(message.buildId));
    message.buildBranch !== undefined && (obj.buildBranch = message.buildBranch);
    return obj;
  },

  create(base?: DeepPartial<CClanEventData>): CClanEventData {
    return CClanEventData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CClanEventData>): CClanEventData {
    const message = createBaseCClanEventData();
    message.gid = object.gid ?? "0";
    message.clanSteamid = object.clanSteamid ?? "0";
    message.eventName = object.eventName ?? "";
    message.eventType = object.eventType ?? 1;
    message.appid = object.appid ?? 0;
    message.serverAddress = object.serverAddress ?? "";
    message.serverPassword = object.serverPassword ?? "";
    message.rtime32StartTime = object.rtime32StartTime ?? 0;
    message.rtime32EndTime = object.rtime32EndTime ?? 0;
    message.commentCount = object.commentCount ?? 0;
    message.creatorSteamid = object.creatorSteamid ?? "0";
    message.lastUpdateSteamid = object.lastUpdateSteamid ?? "0";
    message.eventNotes = object.eventNotes ?? "";
    message.jsondata = object.jsondata ?? "";
    message.announcementBody = (object.announcementBody !== undefined && object.announcementBody !== null)
      ? CCommunityClanAnnouncementInfo.fromPartial(object.announcementBody)
      : undefined;
    message.published = object.published ?? false;
    message.hidden = object.hidden ?? false;
    message.rtime32VisibilityStart = object.rtime32VisibilityStart ?? 0;
    message.rtime32VisibilityEnd = object.rtime32VisibilityEnd ?? 0;
    message.broadcasterAccountid = object.broadcasterAccountid ?? 0;
    message.followerCount = object.followerCount ?? 0;
    message.ignoreCount = object.ignoreCount ?? 0;
    message.forumTopicId = object.forumTopicId ?? "0";
    message.rtime32LastModified = object.rtime32LastModified ?? 0;
    message.newsPostGid = object.newsPostGid ?? "0";
    message.rtimeModReviewed = object.rtimeModReviewed ?? 0;
    message.featuredAppTagid = object.featuredAppTagid ?? 0;
    message.referencedAppids = object.referencedAppids?.map((e) => e) || [];
    message.buildId = object.buildId ?? 0;
    message.buildBranch = object.buildBranch ?? "";
    return message;
  },
};

function createBaseCBillingAddress(): CBillingAddress {
  return {
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    usState: "",
    countryCode: "",
    postcode: "",
    zipPlus4: 0,
    phone: "",
  };
}

export const CBillingAddress = {
  encode(message: CBillingAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.firstName !== "") {
      writer.uint32(10).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(18).string(message.lastName);
    }
    if (message.address1 !== "") {
      writer.uint32(26).string(message.address1);
    }
    if (message.address2 !== "") {
      writer.uint32(34).string(message.address2);
    }
    if (message.city !== "") {
      writer.uint32(42).string(message.city);
    }
    if (message.usState !== "") {
      writer.uint32(50).string(message.usState);
    }
    if (message.countryCode !== "") {
      writer.uint32(58).string(message.countryCode);
    }
    if (message.postcode !== "") {
      writer.uint32(66).string(message.postcode);
    }
    if (message.zipPlus4 !== 0) {
      writer.uint32(72).int32(message.zipPlus4);
    }
    if (message.phone !== "") {
      writer.uint32(82).string(message.phone);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBillingAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBillingAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.firstName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.lastName = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.address1 = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.address2 = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.city = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.usState = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.countryCode = reader.string();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.postcode = reader.string();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.zipPlus4 = reader.int32();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.phone = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CBillingAddress {
    return {
      firstName: isSet(object.firstName) ? String(object.firstName) : "",
      lastName: isSet(object.lastName) ? String(object.lastName) : "",
      address1: isSet(object.address1) ? String(object.address1) : "",
      address2: isSet(object.address2) ? String(object.address2) : "",
      city: isSet(object.city) ? String(object.city) : "",
      usState: isSet(object.usState) ? String(object.usState) : "",
      countryCode: isSet(object.countryCode) ? String(object.countryCode) : "",
      postcode: isSet(object.postcode) ? String(object.postcode) : "",
      zipPlus4: isSet(object.zipPlus4) ? Number(object.zipPlus4) : 0,
      phone: isSet(object.phone) ? String(object.phone) : "",
    };
  },

  toJSON(message: CBillingAddress): unknown {
    const obj: any = {};
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.address1 !== undefined && (obj.address1 = message.address1);
    message.address2 !== undefined && (obj.address2 = message.address2);
    message.city !== undefined && (obj.city = message.city);
    message.usState !== undefined && (obj.usState = message.usState);
    message.countryCode !== undefined && (obj.countryCode = message.countryCode);
    message.postcode !== undefined && (obj.postcode = message.postcode);
    message.zipPlus4 !== undefined && (obj.zipPlus4 = Math.round(message.zipPlus4));
    message.phone !== undefined && (obj.phone = message.phone);
    return obj;
  },

  create(base?: DeepPartial<CBillingAddress>): CBillingAddress {
    return CBillingAddress.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CBillingAddress>): CBillingAddress {
    const message = createBaseCBillingAddress();
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.address1 = object.address1 ?? "";
    message.address2 = object.address2 ?? "";
    message.city = object.city ?? "";
    message.usState = object.usState ?? "";
    message.countryCode = object.countryCode ?? "";
    message.postcode = object.postcode ?? "";
    message.zipPlus4 = object.zipPlus4 ?? 0;
    message.phone = object.phone ?? "";
    return message;
  },
};

function createBaseCPackageReservationStatus(): CPackageReservationStatus {
  return {
    packageid: 0,
    reservationState: 0,
    queuePosition: 0,
    totalQueueSize: 0,
    reservationCountryCode: "",
    expired: false,
    timeExpires: 0,
    timeReserved: 0,
  };
}

export const CPackageReservationStatus = {
  encode(message: CPackageReservationStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packageid !== 0) {
      writer.uint32(8).uint32(message.packageid);
    }
    if (message.reservationState !== 0) {
      writer.uint32(16).int32(message.reservationState);
    }
    if (message.queuePosition !== 0) {
      writer.uint32(24).int32(message.queuePosition);
    }
    if (message.totalQueueSize !== 0) {
      writer.uint32(32).int32(message.totalQueueSize);
    }
    if (message.reservationCountryCode !== "") {
      writer.uint32(42).string(message.reservationCountryCode);
    }
    if (message.expired === true) {
      writer.uint32(48).bool(message.expired);
    }
    if (message.timeExpires !== 0) {
      writer.uint32(56).uint32(message.timeExpires);
    }
    if (message.timeReserved !== 0) {
      writer.uint32(64).uint32(message.timeReserved);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPackageReservationStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPackageReservationStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.packageid = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.reservationState = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.queuePosition = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.totalQueueSize = reader.int32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.reservationCountryCode = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.expired = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.timeExpires = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.timeReserved = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPackageReservationStatus {
    return {
      packageid: isSet(object.packageid) ? Number(object.packageid) : 0,
      reservationState: isSet(object.reservationState) ? Number(object.reservationState) : 0,
      queuePosition: isSet(object.queuePosition) ? Number(object.queuePosition) : 0,
      totalQueueSize: isSet(object.totalQueueSize) ? Number(object.totalQueueSize) : 0,
      reservationCountryCode: isSet(object.reservationCountryCode) ? String(object.reservationCountryCode) : "",
      expired: isSet(object.expired) ? Boolean(object.expired) : false,
      timeExpires: isSet(object.timeExpires) ? Number(object.timeExpires) : 0,
      timeReserved: isSet(object.timeReserved) ? Number(object.timeReserved) : 0,
    };
  },

  toJSON(message: CPackageReservationStatus): unknown {
    const obj: any = {};
    message.packageid !== undefined && (obj.packageid = Math.round(message.packageid));
    message.reservationState !== undefined && (obj.reservationState = Math.round(message.reservationState));
    message.queuePosition !== undefined && (obj.queuePosition = Math.round(message.queuePosition));
    message.totalQueueSize !== undefined && (obj.totalQueueSize = Math.round(message.totalQueueSize));
    message.reservationCountryCode !== undefined && (obj.reservationCountryCode = message.reservationCountryCode);
    message.expired !== undefined && (obj.expired = message.expired);
    message.timeExpires !== undefined && (obj.timeExpires = Math.round(message.timeExpires));
    message.timeReserved !== undefined && (obj.timeReserved = Math.round(message.timeReserved));
    return obj;
  },

  create(base?: DeepPartial<CPackageReservationStatus>): CPackageReservationStatus {
    return CPackageReservationStatus.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPackageReservationStatus>): CPackageReservationStatus {
    const message = createBaseCPackageReservationStatus();
    message.packageid = object.packageid ?? 0;
    message.reservationState = object.reservationState ?? 0;
    message.queuePosition = object.queuePosition ?? 0;
    message.totalQueueSize = object.totalQueueSize ?? 0;
    message.reservationCountryCode = object.reservationCountryCode ?? "";
    message.expired = object.expired ?? false;
    message.timeExpires = object.timeExpires ?? 0;
    message.timeReserved = object.timeReserved ?? 0;
    return message;
  },
};

function createBaseCMsgKeyValuePair(): CMsgKeyValuePair {
  return { name: "", value: "" };
}

export const CMsgKeyValuePair = {
  encode(message: CMsgKeyValuePair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgKeyValuePair {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgKeyValuePair();
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

  fromJSON(object: any): CMsgKeyValuePair {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: CMsgKeyValuePair): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(base?: DeepPartial<CMsgKeyValuePair>): CMsgKeyValuePair {
    return CMsgKeyValuePair.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgKeyValuePair>): CMsgKeyValuePair {
    const message = createBaseCMsgKeyValuePair();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCMsgKeyValueSet(): CMsgKeyValueSet {
  return { pairs: [] };
}

export const CMsgKeyValueSet = {
  encode(message: CMsgKeyValueSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pairs) {
      CMsgKeyValuePair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgKeyValueSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgKeyValueSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.pairs.push(CMsgKeyValuePair.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgKeyValueSet {
    return { pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => CMsgKeyValuePair.fromJSON(e)) : [] };
  },

  toJSON(message: CMsgKeyValueSet): unknown {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map((e) => e ? CMsgKeyValuePair.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgKeyValueSet>): CMsgKeyValueSet {
    return CMsgKeyValueSet.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgKeyValueSet>): CMsgKeyValueSet {
    const message = createBaseCMsgKeyValueSet();
    message.pairs = object.pairs?.map((e) => CMsgKeyValuePair.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUserContentDescriptorPreferences(): UserContentDescriptorPreferences {
  return { contentDescriptorsToExclude: [] };
}

export const UserContentDescriptorPreferences = {
  encode(message: UserContentDescriptorPreferences, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contentDescriptorsToExclude) {
      UserContentDescriptorPreferences_ContentDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserContentDescriptorPreferences {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserContentDescriptorPreferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.contentDescriptorsToExclude.push(
            UserContentDescriptorPreferences_ContentDescriptor.decode(reader, reader.uint32()),
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

  fromJSON(object: any): UserContentDescriptorPreferences {
    return {
      contentDescriptorsToExclude: Array.isArray(object?.contentDescriptorsToExclude)
        ? object.contentDescriptorsToExclude.map((e: any) =>
          UserContentDescriptorPreferences_ContentDescriptor.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: UserContentDescriptorPreferences): unknown {
    const obj: any = {};
    if (message.contentDescriptorsToExclude) {
      obj.contentDescriptorsToExclude = message.contentDescriptorsToExclude.map((e) =>
        e ? UserContentDescriptorPreferences_ContentDescriptor.toJSON(e) : undefined
      );
    } else {
      obj.contentDescriptorsToExclude = [];
    }
    return obj;
  },

  create(base?: DeepPartial<UserContentDescriptorPreferences>): UserContentDescriptorPreferences {
    return UserContentDescriptorPreferences.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserContentDescriptorPreferences>): UserContentDescriptorPreferences {
    const message = createBaseUserContentDescriptorPreferences();
    message.contentDescriptorsToExclude =
      object.contentDescriptorsToExclude?.map((e) =>
        UserContentDescriptorPreferences_ContentDescriptor.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseUserContentDescriptorPreferences_ContentDescriptor(): UserContentDescriptorPreferences_ContentDescriptor {
  return { contentDescriptorid: 0, timestampAdded: 0 };
}

export const UserContentDescriptorPreferences_ContentDescriptor = {
  encode(
    message: UserContentDescriptorPreferences_ContentDescriptor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.contentDescriptorid !== 0) {
      writer.uint32(8).uint32(message.contentDescriptorid);
    }
    if (message.timestampAdded !== 0) {
      writer.uint32(16).uint32(message.timestampAdded);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserContentDescriptorPreferences_ContentDescriptor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserContentDescriptorPreferences_ContentDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.contentDescriptorid = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.timestampAdded = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserContentDescriptorPreferences_ContentDescriptor {
    return {
      contentDescriptorid: isSet(object.contentDescriptorid) ? Number(object.contentDescriptorid) : 0,
      timestampAdded: isSet(object.timestampAdded) ? Number(object.timestampAdded) : 0,
    };
  },

  toJSON(message: UserContentDescriptorPreferences_ContentDescriptor): unknown {
    const obj: any = {};
    message.contentDescriptorid !== undefined && (obj.contentDescriptorid = Math.round(message.contentDescriptorid));
    message.timestampAdded !== undefined && (obj.timestampAdded = Math.round(message.timestampAdded));
    return obj;
  },

  create(
    base?: DeepPartial<UserContentDescriptorPreferences_ContentDescriptor>,
  ): UserContentDescriptorPreferences_ContentDescriptor {
    return UserContentDescriptorPreferences_ContentDescriptor.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<UserContentDescriptorPreferences_ContentDescriptor>,
  ): UserContentDescriptorPreferences_ContentDescriptor {
    const message = createBaseUserContentDescriptorPreferences_ContentDescriptor();
    message.contentDescriptorid = object.contentDescriptorid ?? 0;
    message.timestampAdded = object.timestampAdded ?? 0;
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
