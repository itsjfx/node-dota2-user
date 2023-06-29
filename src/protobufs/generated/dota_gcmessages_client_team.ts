/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  ELeagueRegion,
  eLeagueRegionFromJSON,
  eLeagueRegionToJSON,
  FantasyRoles,
  fantasyRolesFromJSON,
  fantasyRolesToJSON,
} from "./dota_shared_enums";

export enum ETeamInviteResult {
  TEAM_INVITE_SUCCESS = 0,
  TEAM_INVITE_FAILURE_INVITE_REJECTED = 1,
  TEAM_INVITE_FAILURE_INVITE_TIMEOUT = 2,
  TEAM_INVITE_ERROR_TEAM_AT_MEMBER_LIMIT = 3,
  TEAM_INVITE_ERROR_TEAM_LOCKED = 4,
  TEAM_INVITE_ERROR_INVITEE_NOT_AVAILABLE = 5,
  TEAM_INVITE_ERROR_INVITEE_BUSY = 6,
  TEAM_INVITE_ERROR_INVITEE_ALREADY_MEMBER = 7,
  TEAM_INVITE_ERROR_INVITEE_AT_TEAM_LIMIT = 8,
  TEAM_INVITE_ERROR_INVITEE_INSUFFICIENT_PLAY_TIME = 9,
  TEAM_INVITE_ERROR_INVITER_INVALID_ACCOUNT_TYPE = 10,
  TEAM_INVITE_ERROR_INVITER_NOT_ADMIN = 11,
  TEAM_INVITE_ERROR_INCORRECT_USER_RESPONDED = 12,
  TEAM_INVITE_ERROR_UNSPECIFIED = 13,
}

export function eTeamInviteResultFromJSON(object: any): ETeamInviteResult {
  switch (object) {
    case 0:
    case "TEAM_INVITE_SUCCESS":
      return ETeamInviteResult.TEAM_INVITE_SUCCESS;
    case 1:
    case "TEAM_INVITE_FAILURE_INVITE_REJECTED":
      return ETeamInviteResult.TEAM_INVITE_FAILURE_INVITE_REJECTED;
    case 2:
    case "TEAM_INVITE_FAILURE_INVITE_TIMEOUT":
      return ETeamInviteResult.TEAM_INVITE_FAILURE_INVITE_TIMEOUT;
    case 3:
    case "TEAM_INVITE_ERROR_TEAM_AT_MEMBER_LIMIT":
      return ETeamInviteResult.TEAM_INVITE_ERROR_TEAM_AT_MEMBER_LIMIT;
    case 4:
    case "TEAM_INVITE_ERROR_TEAM_LOCKED":
      return ETeamInviteResult.TEAM_INVITE_ERROR_TEAM_LOCKED;
    case 5:
    case "TEAM_INVITE_ERROR_INVITEE_NOT_AVAILABLE":
      return ETeamInviteResult.TEAM_INVITE_ERROR_INVITEE_NOT_AVAILABLE;
    case 6:
    case "TEAM_INVITE_ERROR_INVITEE_BUSY":
      return ETeamInviteResult.TEAM_INVITE_ERROR_INVITEE_BUSY;
    case 7:
    case "TEAM_INVITE_ERROR_INVITEE_ALREADY_MEMBER":
      return ETeamInviteResult.TEAM_INVITE_ERROR_INVITEE_ALREADY_MEMBER;
    case 8:
    case "TEAM_INVITE_ERROR_INVITEE_AT_TEAM_LIMIT":
      return ETeamInviteResult.TEAM_INVITE_ERROR_INVITEE_AT_TEAM_LIMIT;
    case 9:
    case "TEAM_INVITE_ERROR_INVITEE_INSUFFICIENT_PLAY_TIME":
      return ETeamInviteResult.TEAM_INVITE_ERROR_INVITEE_INSUFFICIENT_PLAY_TIME;
    case 10:
    case "TEAM_INVITE_ERROR_INVITER_INVALID_ACCOUNT_TYPE":
      return ETeamInviteResult.TEAM_INVITE_ERROR_INVITER_INVALID_ACCOUNT_TYPE;
    case 11:
    case "TEAM_INVITE_ERROR_INVITER_NOT_ADMIN":
      return ETeamInviteResult.TEAM_INVITE_ERROR_INVITER_NOT_ADMIN;
    case 12:
    case "TEAM_INVITE_ERROR_INCORRECT_USER_RESPONDED":
      return ETeamInviteResult.TEAM_INVITE_ERROR_INCORRECT_USER_RESPONDED;
    case 13:
    case "TEAM_INVITE_ERROR_UNSPECIFIED":
      return ETeamInviteResult.TEAM_INVITE_ERROR_UNSPECIFIED;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETeamInviteResult");
  }
}

export function eTeamInviteResultToJSON(object: ETeamInviteResult): string {
  switch (object) {
    case ETeamInviteResult.TEAM_INVITE_SUCCESS:
      return "TEAM_INVITE_SUCCESS";
    case ETeamInviteResult.TEAM_INVITE_FAILURE_INVITE_REJECTED:
      return "TEAM_INVITE_FAILURE_INVITE_REJECTED";
    case ETeamInviteResult.TEAM_INVITE_FAILURE_INVITE_TIMEOUT:
      return "TEAM_INVITE_FAILURE_INVITE_TIMEOUT";
    case ETeamInviteResult.TEAM_INVITE_ERROR_TEAM_AT_MEMBER_LIMIT:
      return "TEAM_INVITE_ERROR_TEAM_AT_MEMBER_LIMIT";
    case ETeamInviteResult.TEAM_INVITE_ERROR_TEAM_LOCKED:
      return "TEAM_INVITE_ERROR_TEAM_LOCKED";
    case ETeamInviteResult.TEAM_INVITE_ERROR_INVITEE_NOT_AVAILABLE:
      return "TEAM_INVITE_ERROR_INVITEE_NOT_AVAILABLE";
    case ETeamInviteResult.TEAM_INVITE_ERROR_INVITEE_BUSY:
      return "TEAM_INVITE_ERROR_INVITEE_BUSY";
    case ETeamInviteResult.TEAM_INVITE_ERROR_INVITEE_ALREADY_MEMBER:
      return "TEAM_INVITE_ERROR_INVITEE_ALREADY_MEMBER";
    case ETeamInviteResult.TEAM_INVITE_ERROR_INVITEE_AT_TEAM_LIMIT:
      return "TEAM_INVITE_ERROR_INVITEE_AT_TEAM_LIMIT";
    case ETeamInviteResult.TEAM_INVITE_ERROR_INVITEE_INSUFFICIENT_PLAY_TIME:
      return "TEAM_INVITE_ERROR_INVITEE_INSUFFICIENT_PLAY_TIME";
    case ETeamInviteResult.TEAM_INVITE_ERROR_INVITER_INVALID_ACCOUNT_TYPE:
      return "TEAM_INVITE_ERROR_INVITER_INVALID_ACCOUNT_TYPE";
    case ETeamInviteResult.TEAM_INVITE_ERROR_INVITER_NOT_ADMIN:
      return "TEAM_INVITE_ERROR_INVITER_NOT_ADMIN";
    case ETeamInviteResult.TEAM_INVITE_ERROR_INCORRECT_USER_RESPONDED:
      return "TEAM_INVITE_ERROR_INCORRECT_USER_RESPONDED";
    case ETeamInviteResult.TEAM_INVITE_ERROR_UNSPECIFIED:
      return "TEAM_INVITE_ERROR_UNSPECIFIED";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETeamInviteResult");
  }
}

export interface CMsgDOTATeamInfo {
  members: CMsgDOTATeamInfo_Member[];
  teamId: number;
  name: string;
  tag: string;
  timeCreated: number;
  pro: boolean;
  pickupTeam: boolean;
  ugcLogo: string;
  ugcBaseLogo: string;
  ugcBannerLogo: string;
  ugcSponsorLogo: string;
  countryCode: string;
  url: string;
  wins: number;
  losses: number;
  gamesPlayedTotal: number;
  gamesPlayedMatchmaking: number;
  urlLogo: string;
  registeredMemberAccountIds: number[];
  coachAccountId: number;
  auditEntries: CMsgDOTATeamInfo_AuditEntry[];
  region: ELeagueRegion;
  abbreviation: string;
  memberStats: CMsgDOTATeamInfo_MemberStats[];
  teamStats: CMsgDOTATeamInfo_TeamStats | undefined;
  dpcResults: CMsgDOTATeamInfo_DPCResult[];
  colorPrimary: string;
  colorSecondary: string;
  teamCaptain: number;
}

export interface CMsgDOTATeamInfo_HeroStats {
  heroId: number;
  picks: number;
  wins: number;
  bans: number;
  avgKills: number;
  avgDeaths: number;
  avgAssists: number;
  avgGpm: number;
  avgXpm: number;
}

export interface CMsgDOTATeamInfo_MemberStats {
  accountId: number;
  winsWithTeam: number;
  lossesWithTeam: number;
  topHeroes: CMsgDOTATeamInfo_HeroStats[];
  avgKills: number;
  avgDeaths: number;
  avgAssists: number;
}

export interface CMsgDOTATeamInfo_TeamStats {
  playedHeroes: CMsgDOTATeamInfo_HeroStats[];
  farming: number;
  fighting: number;
  versatility: number;
  avgKills: number;
  avgDeaths: number;
  avgDuration: number;
}

export interface CMsgDOTATeamInfo_DPCResult {
  leagueId: number;
  standing: number;
  points: number;
  earnings: number;
  timestamp: number;
}

export interface CMsgDOTATeamInfo_Member {
  accountId: number;
  timeJoined: number;
  admin: boolean;
  proName: string;
  role: FantasyRoles;
  realName: string;
}

export interface CMsgDOTATeamInfo_AuditEntry {
  auditAction: number;
  timestamp: number;
  accountId: number;
}

export interface CMsgDOTATeamsInfo {
  leagueId: number;
  teams: CMsgDOTATeamInfo[];
}

export interface CMsgDOTATeamInfoList {
  teams: CMsgDOTATeamInfo[];
}

export interface CMsgDOTAMyTeamInfoRequest {
}

export interface CMsgDOTACreateTeam {
  name: string;
  tag: string;
  logo: string;
  baseLogo: string;
  bannerLogo: string;
  sponsorLogo: string;
  countryCode: string;
  url: string;
  pickupTeam: boolean;
  abbreviation: string;
}

export interface CMsgDOTACreateTeamResponse {
  result: CMsgDOTACreateTeamResponse_Result;
  teamId: number;
}

export enum CMsgDOTACreateTeamResponse_Result {
  INVALID = -1,
  SUCCESS = 0,
  NAME_EMPTY = 1,
  NAME_BAD_CHARACTERS = 2,
  NAME_TAKEN = 3,
  NAME_TOO_LONG = 4,
  TAG_EMPTY = 5,
  TAG_BAD_CHARACTERS = 6,
  TAG_TAKEN = 7,
  TAG_TOO_LONG = 8,
  CREATOR_BUSY = 9,
  UNSPECIFIED_ERROR = 10,
  CREATOR_TEAM_LIMIT_REACHED = 11,
  NO_LOGO = 12,
  CREATOR_TEAM_CREATION_COOLDOWN = 13,
  LOGO_UPLOAD_FAILED = 14,
  NAME_CHANGED_TOO_RECENTLY = 15,
  CREATOR_INSUFFICIENT_LEVEL = 16,
  INVALID_ACCOUNT_TYPE = 17,
}

export function cMsgDOTACreateTeamResponse_ResultFromJSON(object: any): CMsgDOTACreateTeamResponse_Result {
  switch (object) {
    case -1:
    case "INVALID":
      return CMsgDOTACreateTeamResponse_Result.INVALID;
    case 0:
    case "SUCCESS":
      return CMsgDOTACreateTeamResponse_Result.SUCCESS;
    case 1:
    case "NAME_EMPTY":
      return CMsgDOTACreateTeamResponse_Result.NAME_EMPTY;
    case 2:
    case "NAME_BAD_CHARACTERS":
      return CMsgDOTACreateTeamResponse_Result.NAME_BAD_CHARACTERS;
    case 3:
    case "NAME_TAKEN":
      return CMsgDOTACreateTeamResponse_Result.NAME_TAKEN;
    case 4:
    case "NAME_TOO_LONG":
      return CMsgDOTACreateTeamResponse_Result.NAME_TOO_LONG;
    case 5:
    case "TAG_EMPTY":
      return CMsgDOTACreateTeamResponse_Result.TAG_EMPTY;
    case 6:
    case "TAG_BAD_CHARACTERS":
      return CMsgDOTACreateTeamResponse_Result.TAG_BAD_CHARACTERS;
    case 7:
    case "TAG_TAKEN":
      return CMsgDOTACreateTeamResponse_Result.TAG_TAKEN;
    case 8:
    case "TAG_TOO_LONG":
      return CMsgDOTACreateTeamResponse_Result.TAG_TOO_LONG;
    case 9:
    case "CREATOR_BUSY":
      return CMsgDOTACreateTeamResponse_Result.CREATOR_BUSY;
    case 10:
    case "UNSPECIFIED_ERROR":
      return CMsgDOTACreateTeamResponse_Result.UNSPECIFIED_ERROR;
    case 11:
    case "CREATOR_TEAM_LIMIT_REACHED":
      return CMsgDOTACreateTeamResponse_Result.CREATOR_TEAM_LIMIT_REACHED;
    case 12:
    case "NO_LOGO":
      return CMsgDOTACreateTeamResponse_Result.NO_LOGO;
    case 13:
    case "CREATOR_TEAM_CREATION_COOLDOWN":
      return CMsgDOTACreateTeamResponse_Result.CREATOR_TEAM_CREATION_COOLDOWN;
    case 14:
    case "LOGO_UPLOAD_FAILED":
      return CMsgDOTACreateTeamResponse_Result.LOGO_UPLOAD_FAILED;
    case 15:
    case "NAME_CHANGED_TOO_RECENTLY":
      return CMsgDOTACreateTeamResponse_Result.NAME_CHANGED_TOO_RECENTLY;
    case 16:
    case "CREATOR_INSUFFICIENT_LEVEL":
      return CMsgDOTACreateTeamResponse_Result.CREATOR_INSUFFICIENT_LEVEL;
    case 17:
    case "INVALID_ACCOUNT_TYPE":
      return CMsgDOTACreateTeamResponse_Result.INVALID_ACCOUNT_TYPE;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTACreateTeamResponse_Result",
      );
  }
}

export function cMsgDOTACreateTeamResponse_ResultToJSON(object: CMsgDOTACreateTeamResponse_Result): string {
  switch (object) {
    case CMsgDOTACreateTeamResponse_Result.INVALID:
      return "INVALID";
    case CMsgDOTACreateTeamResponse_Result.SUCCESS:
      return "SUCCESS";
    case CMsgDOTACreateTeamResponse_Result.NAME_EMPTY:
      return "NAME_EMPTY";
    case CMsgDOTACreateTeamResponse_Result.NAME_BAD_CHARACTERS:
      return "NAME_BAD_CHARACTERS";
    case CMsgDOTACreateTeamResponse_Result.NAME_TAKEN:
      return "NAME_TAKEN";
    case CMsgDOTACreateTeamResponse_Result.NAME_TOO_LONG:
      return "NAME_TOO_LONG";
    case CMsgDOTACreateTeamResponse_Result.TAG_EMPTY:
      return "TAG_EMPTY";
    case CMsgDOTACreateTeamResponse_Result.TAG_BAD_CHARACTERS:
      return "TAG_BAD_CHARACTERS";
    case CMsgDOTACreateTeamResponse_Result.TAG_TAKEN:
      return "TAG_TAKEN";
    case CMsgDOTACreateTeamResponse_Result.TAG_TOO_LONG:
      return "TAG_TOO_LONG";
    case CMsgDOTACreateTeamResponse_Result.CREATOR_BUSY:
      return "CREATOR_BUSY";
    case CMsgDOTACreateTeamResponse_Result.UNSPECIFIED_ERROR:
      return "UNSPECIFIED_ERROR";
    case CMsgDOTACreateTeamResponse_Result.CREATOR_TEAM_LIMIT_REACHED:
      return "CREATOR_TEAM_LIMIT_REACHED";
    case CMsgDOTACreateTeamResponse_Result.NO_LOGO:
      return "NO_LOGO";
    case CMsgDOTACreateTeamResponse_Result.CREATOR_TEAM_CREATION_COOLDOWN:
      return "CREATOR_TEAM_CREATION_COOLDOWN";
    case CMsgDOTACreateTeamResponse_Result.LOGO_UPLOAD_FAILED:
      return "LOGO_UPLOAD_FAILED";
    case CMsgDOTACreateTeamResponse_Result.NAME_CHANGED_TOO_RECENTLY:
      return "NAME_CHANGED_TOO_RECENTLY";
    case CMsgDOTACreateTeamResponse_Result.CREATOR_INSUFFICIENT_LEVEL:
      return "CREATOR_INSUFFICIENT_LEVEL";
    case CMsgDOTACreateTeamResponse_Result.INVALID_ACCOUNT_TYPE:
      return "INVALID_ACCOUNT_TYPE";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTACreateTeamResponse_Result",
      );
  }
}

export interface CMsgDOTAEditTeamDetails {
  teamId: number;
  name: string;
  tag: string;
  logo: string;
  baseLogo: string;
  bannerLogo: string;
  sponsorLogo: string;
  countryCode: string;
  url: string;
  inUseByParty: boolean;
  abbreviation: string;
}

export interface CMsgDOTAEditTeamDetailsResponse {
  result: CMsgDOTAEditTeamDetailsResponse_Result;
}

export enum CMsgDOTAEditTeamDetailsResponse_Result {
  SUCCESS = 0,
  FAILURE_INVALID_ACCOUNT_TYPE = 1,
  FAILURE_NOT_MEMBER = 2,
  FAILURE_TEAM_LOCKED = 3,
  FAILURE_UNSPECIFIED_ERROR = 4,
}

export function cMsgDOTAEditTeamDetailsResponse_ResultFromJSON(object: any): CMsgDOTAEditTeamDetailsResponse_Result {
  switch (object) {
    case 0:
    case "SUCCESS":
      return CMsgDOTAEditTeamDetailsResponse_Result.SUCCESS;
    case 1:
    case "FAILURE_INVALID_ACCOUNT_TYPE":
      return CMsgDOTAEditTeamDetailsResponse_Result.FAILURE_INVALID_ACCOUNT_TYPE;
    case 2:
    case "FAILURE_NOT_MEMBER":
      return CMsgDOTAEditTeamDetailsResponse_Result.FAILURE_NOT_MEMBER;
    case 3:
    case "FAILURE_TEAM_LOCKED":
      return CMsgDOTAEditTeamDetailsResponse_Result.FAILURE_TEAM_LOCKED;
    case 4:
    case "FAILURE_UNSPECIFIED_ERROR":
      return CMsgDOTAEditTeamDetailsResponse_Result.FAILURE_UNSPECIFIED_ERROR;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTAEditTeamDetailsResponse_Result",
      );
  }
}

export function cMsgDOTAEditTeamDetailsResponse_ResultToJSON(object: CMsgDOTAEditTeamDetailsResponse_Result): string {
  switch (object) {
    case CMsgDOTAEditTeamDetailsResponse_Result.SUCCESS:
      return "SUCCESS";
    case CMsgDOTAEditTeamDetailsResponse_Result.FAILURE_INVALID_ACCOUNT_TYPE:
      return "FAILURE_INVALID_ACCOUNT_TYPE";
    case CMsgDOTAEditTeamDetailsResponse_Result.FAILURE_NOT_MEMBER:
      return "FAILURE_NOT_MEMBER";
    case CMsgDOTAEditTeamDetailsResponse_Result.FAILURE_TEAM_LOCKED:
      return "FAILURE_TEAM_LOCKED";
    case CMsgDOTAEditTeamDetailsResponse_Result.FAILURE_UNSPECIFIED_ERROR:
      return "FAILURE_UNSPECIFIED_ERROR";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTAEditTeamDetailsResponse_Result",
      );
  }
}

export interface CMsgDOTATeamInviteInviterToGC {
  accountId: number;
  teamId: number;
}

export interface CMsgDOTATeamInviteGCImmediateResponseToInviter {
  result: ETeamInviteResult;
  inviteeName: string;
  requiredPlayTime: number;
}

export interface CMsgDOTATeamInviteGCRequestToInvitee {
  inviterAccountId: number;
  teamName: string;
  teamTag: string;
  logo: string;
}

export interface CMsgDOTATeamInviteInviteeResponseToGC {
  result: ETeamInviteResult;
}

export interface CMsgDOTATeamInviteGCResponseToInviter {
  result: ETeamInviteResult;
  inviteeName: string;
}

export interface CMsgDOTATeamInviteGCResponseToInvitee {
  result: ETeamInviteResult;
  teamName: string;
}

export interface CMsgDOTAKickTeamMember {
  accountId: number;
  teamId: number;
}

export interface CMsgDOTAKickTeamMemberResponse {
  result: CMsgDOTAKickTeamMemberResponse_Result;
}

export enum CMsgDOTAKickTeamMemberResponse_Result {
  SUCCESS = 0,
  FAILURE_INVALID_ACCOUNT_TYPE = 1,
  FAILURE_KICKER_NOT_ADMIN = 2,
  FAILURE_KICKEE_NOT_MEMBER = 3,
  FAILURE_TEAM_LOCKED = 4,
  FAILURE_UNSPECIFIED_ERROR = 5,
}

export function cMsgDOTAKickTeamMemberResponse_ResultFromJSON(object: any): CMsgDOTAKickTeamMemberResponse_Result {
  switch (object) {
    case 0:
    case "SUCCESS":
      return CMsgDOTAKickTeamMemberResponse_Result.SUCCESS;
    case 1:
    case "FAILURE_INVALID_ACCOUNT_TYPE":
      return CMsgDOTAKickTeamMemberResponse_Result.FAILURE_INVALID_ACCOUNT_TYPE;
    case 2:
    case "FAILURE_KICKER_NOT_ADMIN":
      return CMsgDOTAKickTeamMemberResponse_Result.FAILURE_KICKER_NOT_ADMIN;
    case 3:
    case "FAILURE_KICKEE_NOT_MEMBER":
      return CMsgDOTAKickTeamMemberResponse_Result.FAILURE_KICKEE_NOT_MEMBER;
    case 4:
    case "FAILURE_TEAM_LOCKED":
      return CMsgDOTAKickTeamMemberResponse_Result.FAILURE_TEAM_LOCKED;
    case 5:
    case "FAILURE_UNSPECIFIED_ERROR":
      return CMsgDOTAKickTeamMemberResponse_Result.FAILURE_UNSPECIFIED_ERROR;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTAKickTeamMemberResponse_Result",
      );
  }
}

export function cMsgDOTAKickTeamMemberResponse_ResultToJSON(object: CMsgDOTAKickTeamMemberResponse_Result): string {
  switch (object) {
    case CMsgDOTAKickTeamMemberResponse_Result.SUCCESS:
      return "SUCCESS";
    case CMsgDOTAKickTeamMemberResponse_Result.FAILURE_INVALID_ACCOUNT_TYPE:
      return "FAILURE_INVALID_ACCOUNT_TYPE";
    case CMsgDOTAKickTeamMemberResponse_Result.FAILURE_KICKER_NOT_ADMIN:
      return "FAILURE_KICKER_NOT_ADMIN";
    case CMsgDOTAKickTeamMemberResponse_Result.FAILURE_KICKEE_NOT_MEMBER:
      return "FAILURE_KICKEE_NOT_MEMBER";
    case CMsgDOTAKickTeamMemberResponse_Result.FAILURE_TEAM_LOCKED:
      return "FAILURE_TEAM_LOCKED";
    case CMsgDOTAKickTeamMemberResponse_Result.FAILURE_UNSPECIFIED_ERROR:
      return "FAILURE_UNSPECIFIED_ERROR";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTAKickTeamMemberResponse_Result",
      );
  }
}

export interface CMsgDOTATransferTeamAdmin {
  newAdminAccountId: number;
  teamId: number;
}

export interface CMsgDOTATransferTeamAdminResponse {
  result: CMsgDOTATransferTeamAdminResponse_Result;
}

export enum CMsgDOTATransferTeamAdminResponse_Result {
  SUCCESS = 0,
  FAILURE_INVALID_ACCOUNT_TYPE = 1,
  FAILURE_NOT_ADMIN = 2,
  FAILURE_SAME_ACCOUNT = 3,
  FAILURE_NOT_MEMBER = 4,
  FAILURE_UNSPECIFIED_ERROR = 5,
}

export function cMsgDOTATransferTeamAdminResponse_ResultFromJSON(
  object: any,
): CMsgDOTATransferTeamAdminResponse_Result {
  switch (object) {
    case 0:
    case "SUCCESS":
      return CMsgDOTATransferTeamAdminResponse_Result.SUCCESS;
    case 1:
    case "FAILURE_INVALID_ACCOUNT_TYPE":
      return CMsgDOTATransferTeamAdminResponse_Result.FAILURE_INVALID_ACCOUNT_TYPE;
    case 2:
    case "FAILURE_NOT_ADMIN":
      return CMsgDOTATransferTeamAdminResponse_Result.FAILURE_NOT_ADMIN;
    case 3:
    case "FAILURE_SAME_ACCOUNT":
      return CMsgDOTATransferTeamAdminResponse_Result.FAILURE_SAME_ACCOUNT;
    case 4:
    case "FAILURE_NOT_MEMBER":
      return CMsgDOTATransferTeamAdminResponse_Result.FAILURE_NOT_MEMBER;
    case 5:
    case "FAILURE_UNSPECIFIED_ERROR":
      return CMsgDOTATransferTeamAdminResponse_Result.FAILURE_UNSPECIFIED_ERROR;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTATransferTeamAdminResponse_Result",
      );
  }
}

export function cMsgDOTATransferTeamAdminResponse_ResultToJSON(
  object: CMsgDOTATransferTeamAdminResponse_Result,
): string {
  switch (object) {
    case CMsgDOTATransferTeamAdminResponse_Result.SUCCESS:
      return "SUCCESS";
    case CMsgDOTATransferTeamAdminResponse_Result.FAILURE_INVALID_ACCOUNT_TYPE:
      return "FAILURE_INVALID_ACCOUNT_TYPE";
    case CMsgDOTATransferTeamAdminResponse_Result.FAILURE_NOT_ADMIN:
      return "FAILURE_NOT_ADMIN";
    case CMsgDOTATransferTeamAdminResponse_Result.FAILURE_SAME_ACCOUNT:
      return "FAILURE_SAME_ACCOUNT";
    case CMsgDOTATransferTeamAdminResponse_Result.FAILURE_NOT_MEMBER:
      return "FAILURE_NOT_MEMBER";
    case CMsgDOTATransferTeamAdminResponse_Result.FAILURE_UNSPECIFIED_ERROR:
      return "FAILURE_UNSPECIFIED_ERROR";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTATransferTeamAdminResponse_Result",
      );
  }
}

export interface CMsgDOTALeaveTeam {
  teamId: number;
}

export interface CMsgDOTALeaveTeamResponse {
  result: CMsgDOTALeaveTeamResponse_Result;
}

export enum CMsgDOTALeaveTeamResponse_Result {
  SUCCESS = 0,
  FAILURE_NOT_MEMBER = 1,
  FAILURE_TEAM_LOCKED = 2,
  FAILURE_UNSPECIFIED_ERROR = 3,
}

export function cMsgDOTALeaveTeamResponse_ResultFromJSON(object: any): CMsgDOTALeaveTeamResponse_Result {
  switch (object) {
    case 0:
    case "SUCCESS":
      return CMsgDOTALeaveTeamResponse_Result.SUCCESS;
    case 1:
    case "FAILURE_NOT_MEMBER":
      return CMsgDOTALeaveTeamResponse_Result.FAILURE_NOT_MEMBER;
    case 2:
    case "FAILURE_TEAM_LOCKED":
      return CMsgDOTALeaveTeamResponse_Result.FAILURE_TEAM_LOCKED;
    case 3:
    case "FAILURE_UNSPECIFIED_ERROR":
      return CMsgDOTALeaveTeamResponse_Result.FAILURE_UNSPECIFIED_ERROR;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTALeaveTeamResponse_Result",
      );
  }
}

export function cMsgDOTALeaveTeamResponse_ResultToJSON(object: CMsgDOTALeaveTeamResponse_Result): string {
  switch (object) {
    case CMsgDOTALeaveTeamResponse_Result.SUCCESS:
      return "SUCCESS";
    case CMsgDOTALeaveTeamResponse_Result.FAILURE_NOT_MEMBER:
      return "FAILURE_NOT_MEMBER";
    case CMsgDOTALeaveTeamResponse_Result.FAILURE_TEAM_LOCKED:
      return "FAILURE_TEAM_LOCKED";
    case CMsgDOTALeaveTeamResponse_Result.FAILURE_UNSPECIFIED_ERROR:
      return "FAILURE_UNSPECIFIED_ERROR";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTALeaveTeamResponse_Result",
      );
  }
}

export interface CMsgDOTABetaParticipation {
  accessRights: number;
}

function createBaseCMsgDOTATeamInfo(): CMsgDOTATeamInfo {
  return {
    members: [],
    teamId: 0,
    name: "",
    tag: "",
    timeCreated: 0,
    pro: false,
    pickupTeam: false,
    ugcLogo: "0",
    ugcBaseLogo: "0",
    ugcBannerLogo: "0",
    ugcSponsorLogo: "0",
    countryCode: "",
    url: "",
    wins: 0,
    losses: 0,
    gamesPlayedTotal: 0,
    gamesPlayedMatchmaking: 0,
    urlLogo: "",
    registeredMemberAccountIds: [],
    coachAccountId: 0,
    auditEntries: [],
    region: 0,
    abbreviation: "",
    memberStats: [],
    teamStats: undefined,
    dpcResults: [],
    colorPrimary: "",
    colorSecondary: "",
    teamCaptain: 0,
  };
}

export const CMsgDOTATeamInfo = {
  encode(message: CMsgDOTATeamInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.members) {
      CMsgDOTATeamInfo_Member.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.teamId !== 0) {
      writer.uint32(16).uint32(message.teamId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.tag !== "") {
      writer.uint32(34).string(message.tag);
    }
    if (message.timeCreated !== 0) {
      writer.uint32(40).uint32(message.timeCreated);
    }
    if (message.pro === true) {
      writer.uint32(48).bool(message.pro);
    }
    if (message.pickupTeam === true) {
      writer.uint32(64).bool(message.pickupTeam);
    }
    if (message.ugcLogo !== "0") {
      writer.uint32(72).uint64(message.ugcLogo);
    }
    if (message.ugcBaseLogo !== "0") {
      writer.uint32(80).uint64(message.ugcBaseLogo);
    }
    if (message.ugcBannerLogo !== "0") {
      writer.uint32(88).uint64(message.ugcBannerLogo);
    }
    if (message.ugcSponsorLogo !== "0") {
      writer.uint32(96).uint64(message.ugcSponsorLogo);
    }
    if (message.countryCode !== "") {
      writer.uint32(106).string(message.countryCode);
    }
    if (message.url !== "") {
      writer.uint32(114).string(message.url);
    }
    if (message.wins !== 0) {
      writer.uint32(120).uint32(message.wins);
    }
    if (message.losses !== 0) {
      writer.uint32(128).uint32(message.losses);
    }
    if (message.gamesPlayedTotal !== 0) {
      writer.uint32(152).uint32(message.gamesPlayedTotal);
    }
    if (message.gamesPlayedMatchmaking !== 0) {
      writer.uint32(160).uint32(message.gamesPlayedMatchmaking);
    }
    if (message.urlLogo !== "") {
      writer.uint32(194).string(message.urlLogo);
    }
    writer.uint32(242).fork();
    for (const v of message.registeredMemberAccountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.coachAccountId !== 0) {
      writer.uint32(288).uint32(message.coachAccountId);
    }
    for (const v of message.auditEntries) {
      CMsgDOTATeamInfo_AuditEntry.encode(v!, writer.uint32(250).fork()).ldelim();
    }
    if (message.region !== 0) {
      writer.uint32(232).int32(message.region);
    }
    if (message.abbreviation !== "") {
      writer.uint32(258).string(message.abbreviation);
    }
    for (const v of message.memberStats) {
      CMsgDOTATeamInfo_MemberStats.encode(v!, writer.uint32(266).fork()).ldelim();
    }
    if (message.teamStats !== undefined) {
      CMsgDOTATeamInfo_TeamStats.encode(message.teamStats, writer.uint32(274).fork()).ldelim();
    }
    for (const v of message.dpcResults) {
      CMsgDOTATeamInfo_DPCResult.encode(v!, writer.uint32(282).fork()).ldelim();
    }
    if (message.colorPrimary !== "") {
      writer.uint32(298).string(message.colorPrimary);
    }
    if (message.colorSecondary !== "") {
      writer.uint32(306).string(message.colorSecondary);
    }
    if (message.teamCaptain !== 0) {
      writer.uint32(312).uint32(message.teamCaptain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATeamInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATeamInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.members.push(CMsgDOTATeamInfo_Member.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.tag = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.timeCreated = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.pro = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.pickupTeam = reader.bool();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.ugcLogo = longToString(reader.uint64() as Long);
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.ugcBaseLogo = longToString(reader.uint64() as Long);
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.ugcBannerLogo = longToString(reader.uint64() as Long);
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.ugcSponsorLogo = longToString(reader.uint64() as Long);
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.countryCode = reader.string();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.url = reader.string();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.wins = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.losses = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.gamesPlayedTotal = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.gamesPlayedMatchmaking = reader.uint32();
          continue;
        case 24:
          if (tag != 194) {
            break;
          }

          message.urlLogo = reader.string();
          continue;
        case 30:
          if (tag == 240) {
            message.registeredMemberAccountIds.push(reader.uint32());
            continue;
          }

          if (tag == 242) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.registeredMemberAccountIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 36:
          if (tag != 288) {
            break;
          }

          message.coachAccountId = reader.uint32();
          continue;
        case 31:
          if (tag != 250) {
            break;
          }

          message.auditEntries.push(CMsgDOTATeamInfo_AuditEntry.decode(reader, reader.uint32()));
          continue;
        case 29:
          if (tag != 232) {
            break;
          }

          message.region = reader.int32() as any;
          continue;
        case 32:
          if (tag != 258) {
            break;
          }

          message.abbreviation = reader.string();
          continue;
        case 33:
          if (tag != 266) {
            break;
          }

          message.memberStats.push(CMsgDOTATeamInfo_MemberStats.decode(reader, reader.uint32()));
          continue;
        case 34:
          if (tag != 274) {
            break;
          }

          message.teamStats = CMsgDOTATeamInfo_TeamStats.decode(reader, reader.uint32());
          continue;
        case 35:
          if (tag != 282) {
            break;
          }

          message.dpcResults.push(CMsgDOTATeamInfo_DPCResult.decode(reader, reader.uint32()));
          continue;
        case 37:
          if (tag != 298) {
            break;
          }

          message.colorPrimary = reader.string();
          continue;
        case 38:
          if (tag != 306) {
            break;
          }

          message.colorSecondary = reader.string();
          continue;
        case 39:
          if (tag != 312) {
            break;
          }

          message.teamCaptain = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTATeamInfo {
    return {
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => CMsgDOTATeamInfo_Member.fromJSON(e))
        : [],
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      tag: isSet(object.tag) ? String(object.tag) : "",
      timeCreated: isSet(object.timeCreated) ? Number(object.timeCreated) : 0,
      pro: isSet(object.pro) ? Boolean(object.pro) : false,
      pickupTeam: isSet(object.pickupTeam) ? Boolean(object.pickupTeam) : false,
      ugcLogo: isSet(object.ugcLogo) ? String(object.ugcLogo) : "0",
      ugcBaseLogo: isSet(object.ugcBaseLogo) ? String(object.ugcBaseLogo) : "0",
      ugcBannerLogo: isSet(object.ugcBannerLogo) ? String(object.ugcBannerLogo) : "0",
      ugcSponsorLogo: isSet(object.ugcSponsorLogo) ? String(object.ugcSponsorLogo) : "0",
      countryCode: isSet(object.countryCode) ? String(object.countryCode) : "",
      url: isSet(object.url) ? String(object.url) : "",
      wins: isSet(object.wins) ? Number(object.wins) : 0,
      losses: isSet(object.losses) ? Number(object.losses) : 0,
      gamesPlayedTotal: isSet(object.gamesPlayedTotal) ? Number(object.gamesPlayedTotal) : 0,
      gamesPlayedMatchmaking: isSet(object.gamesPlayedMatchmaking) ? Number(object.gamesPlayedMatchmaking) : 0,
      urlLogo: isSet(object.urlLogo) ? String(object.urlLogo) : "",
      registeredMemberAccountIds: Array.isArray(object?.registeredMemberAccountIds)
        ? object.registeredMemberAccountIds.map((e: any) => Number(e))
        : [],
      coachAccountId: isSet(object.coachAccountId) ? Number(object.coachAccountId) : 0,
      auditEntries: Array.isArray(object?.auditEntries)
        ? object.auditEntries.map((e: any) => CMsgDOTATeamInfo_AuditEntry.fromJSON(e))
        : [],
      region: isSet(object.region) ? eLeagueRegionFromJSON(object.region) : 0,
      abbreviation: isSet(object.abbreviation) ? String(object.abbreviation) : "",
      memberStats: Array.isArray(object?.memberStats)
        ? object.memberStats.map((e: any) => CMsgDOTATeamInfo_MemberStats.fromJSON(e))
        : [],
      teamStats: isSet(object.teamStats) ? CMsgDOTATeamInfo_TeamStats.fromJSON(object.teamStats) : undefined,
      dpcResults: Array.isArray(object?.dpcResults)
        ? object.dpcResults.map((e: any) => CMsgDOTATeamInfo_DPCResult.fromJSON(e))
        : [],
      colorPrimary: isSet(object.colorPrimary) ? String(object.colorPrimary) : "",
      colorSecondary: isSet(object.colorSecondary) ? String(object.colorSecondary) : "",
      teamCaptain: isSet(object.teamCaptain) ? Number(object.teamCaptain) : 0,
    };
  },

  toJSON(message: CMsgDOTATeamInfo): unknown {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map((e) => e ? CMsgDOTATeamInfo_Member.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.name !== undefined && (obj.name = message.name);
    message.tag !== undefined && (obj.tag = message.tag);
    message.timeCreated !== undefined && (obj.timeCreated = Math.round(message.timeCreated));
    message.pro !== undefined && (obj.pro = message.pro);
    message.pickupTeam !== undefined && (obj.pickupTeam = message.pickupTeam);
    message.ugcLogo !== undefined && (obj.ugcLogo = message.ugcLogo);
    message.ugcBaseLogo !== undefined && (obj.ugcBaseLogo = message.ugcBaseLogo);
    message.ugcBannerLogo !== undefined && (obj.ugcBannerLogo = message.ugcBannerLogo);
    message.ugcSponsorLogo !== undefined && (obj.ugcSponsorLogo = message.ugcSponsorLogo);
    message.countryCode !== undefined && (obj.countryCode = message.countryCode);
    message.url !== undefined && (obj.url = message.url);
    message.wins !== undefined && (obj.wins = Math.round(message.wins));
    message.losses !== undefined && (obj.losses = Math.round(message.losses));
    message.gamesPlayedTotal !== undefined && (obj.gamesPlayedTotal = Math.round(message.gamesPlayedTotal));
    message.gamesPlayedMatchmaking !== undefined &&
      (obj.gamesPlayedMatchmaking = Math.round(message.gamesPlayedMatchmaking));
    message.urlLogo !== undefined && (obj.urlLogo = message.urlLogo);
    if (message.registeredMemberAccountIds) {
      obj.registeredMemberAccountIds = message.registeredMemberAccountIds.map((e) => Math.round(e));
    } else {
      obj.registeredMemberAccountIds = [];
    }
    message.coachAccountId !== undefined && (obj.coachAccountId = Math.round(message.coachAccountId));
    if (message.auditEntries) {
      obj.auditEntries = message.auditEntries.map((e) => e ? CMsgDOTATeamInfo_AuditEntry.toJSON(e) : undefined);
    } else {
      obj.auditEntries = [];
    }
    message.region !== undefined && (obj.region = eLeagueRegionToJSON(message.region));
    message.abbreviation !== undefined && (obj.abbreviation = message.abbreviation);
    if (message.memberStats) {
      obj.memberStats = message.memberStats.map((e) => e ? CMsgDOTATeamInfo_MemberStats.toJSON(e) : undefined);
    } else {
      obj.memberStats = [];
    }
    message.teamStats !== undefined &&
      (obj.teamStats = message.teamStats ? CMsgDOTATeamInfo_TeamStats.toJSON(message.teamStats) : undefined);
    if (message.dpcResults) {
      obj.dpcResults = message.dpcResults.map((e) => e ? CMsgDOTATeamInfo_DPCResult.toJSON(e) : undefined);
    } else {
      obj.dpcResults = [];
    }
    message.colorPrimary !== undefined && (obj.colorPrimary = message.colorPrimary);
    message.colorSecondary !== undefined && (obj.colorSecondary = message.colorSecondary);
    message.teamCaptain !== undefined && (obj.teamCaptain = Math.round(message.teamCaptain));
    return obj;
  },
};

function createBaseCMsgDOTATeamInfo_HeroStats(): CMsgDOTATeamInfo_HeroStats {
  return { heroId: 0, picks: 0, wins: 0, bans: 0, avgKills: 0, avgDeaths: 0, avgAssists: 0, avgGpm: 0, avgXpm: 0 };
}

export const CMsgDOTATeamInfo_HeroStats = {
  encode(message: CMsgDOTATeamInfo_HeroStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    if (message.picks !== 0) {
      writer.uint32(16).uint32(message.picks);
    }
    if (message.wins !== 0) {
      writer.uint32(24).uint32(message.wins);
    }
    if (message.bans !== 0) {
      writer.uint32(32).uint32(message.bans);
    }
    if (message.avgKills !== 0) {
      writer.uint32(45).float(message.avgKills);
    }
    if (message.avgDeaths !== 0) {
      writer.uint32(53).float(message.avgDeaths);
    }
    if (message.avgAssists !== 0) {
      writer.uint32(61).float(message.avgAssists);
    }
    if (message.avgGpm !== 0) {
      writer.uint32(69).float(message.avgGpm);
    }
    if (message.avgXpm !== 0) {
      writer.uint32(77).float(message.avgXpm);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATeamInfo_HeroStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATeamInfo_HeroStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.picks = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.wins = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.bans = reader.uint32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.avgKills = reader.float();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.avgDeaths = reader.float();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.avgAssists = reader.float();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.avgGpm = reader.float();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.avgXpm = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTATeamInfo_HeroStats {
    return {
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      picks: isSet(object.picks) ? Number(object.picks) : 0,
      wins: isSet(object.wins) ? Number(object.wins) : 0,
      bans: isSet(object.bans) ? Number(object.bans) : 0,
      avgKills: isSet(object.avgKills) ? Number(object.avgKills) : 0,
      avgDeaths: isSet(object.avgDeaths) ? Number(object.avgDeaths) : 0,
      avgAssists: isSet(object.avgAssists) ? Number(object.avgAssists) : 0,
      avgGpm: isSet(object.avgGpm) ? Number(object.avgGpm) : 0,
      avgXpm: isSet(object.avgXpm) ? Number(object.avgXpm) : 0,
    };
  },

  toJSON(message: CMsgDOTATeamInfo_HeroStats): unknown {
    const obj: any = {};
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.picks !== undefined && (obj.picks = Math.round(message.picks));
    message.wins !== undefined && (obj.wins = Math.round(message.wins));
    message.bans !== undefined && (obj.bans = Math.round(message.bans));
    message.avgKills !== undefined && (obj.avgKills = message.avgKills);
    message.avgDeaths !== undefined && (obj.avgDeaths = message.avgDeaths);
    message.avgAssists !== undefined && (obj.avgAssists = message.avgAssists);
    message.avgGpm !== undefined && (obj.avgGpm = message.avgGpm);
    message.avgXpm !== undefined && (obj.avgXpm = message.avgXpm);
    return obj;
  },
};

function createBaseCMsgDOTATeamInfo_MemberStats(): CMsgDOTATeamInfo_MemberStats {
  return { accountId: 0, winsWithTeam: 0, lossesWithTeam: 0, topHeroes: [], avgKills: 0, avgDeaths: 0, avgAssists: 0 };
}

export const CMsgDOTATeamInfo_MemberStats = {
  encode(message: CMsgDOTATeamInfo_MemberStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.winsWithTeam !== 0) {
      writer.uint32(16).uint32(message.winsWithTeam);
    }
    if (message.lossesWithTeam !== 0) {
      writer.uint32(24).uint32(message.lossesWithTeam);
    }
    for (const v of message.topHeroes) {
      CMsgDOTATeamInfo_HeroStats.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.avgKills !== 0) {
      writer.uint32(45).float(message.avgKills);
    }
    if (message.avgDeaths !== 0) {
      writer.uint32(53).float(message.avgDeaths);
    }
    if (message.avgAssists !== 0) {
      writer.uint32(61).float(message.avgAssists);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATeamInfo_MemberStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATeamInfo_MemberStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.winsWithTeam = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.lossesWithTeam = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.topHeroes.push(CMsgDOTATeamInfo_HeroStats.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.avgKills = reader.float();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.avgDeaths = reader.float();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.avgAssists = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTATeamInfo_MemberStats {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      winsWithTeam: isSet(object.winsWithTeam) ? Number(object.winsWithTeam) : 0,
      lossesWithTeam: isSet(object.lossesWithTeam) ? Number(object.lossesWithTeam) : 0,
      topHeroes: Array.isArray(object?.topHeroes)
        ? object.topHeroes.map((e: any) => CMsgDOTATeamInfo_HeroStats.fromJSON(e))
        : [],
      avgKills: isSet(object.avgKills) ? Number(object.avgKills) : 0,
      avgDeaths: isSet(object.avgDeaths) ? Number(object.avgDeaths) : 0,
      avgAssists: isSet(object.avgAssists) ? Number(object.avgAssists) : 0,
    };
  },

  toJSON(message: CMsgDOTATeamInfo_MemberStats): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.winsWithTeam !== undefined && (obj.winsWithTeam = Math.round(message.winsWithTeam));
    message.lossesWithTeam !== undefined && (obj.lossesWithTeam = Math.round(message.lossesWithTeam));
    if (message.topHeroes) {
      obj.topHeroes = message.topHeroes.map((e) => e ? CMsgDOTATeamInfo_HeroStats.toJSON(e) : undefined);
    } else {
      obj.topHeroes = [];
    }
    message.avgKills !== undefined && (obj.avgKills = message.avgKills);
    message.avgDeaths !== undefined && (obj.avgDeaths = message.avgDeaths);
    message.avgAssists !== undefined && (obj.avgAssists = message.avgAssists);
    return obj;
  },
};

function createBaseCMsgDOTATeamInfo_TeamStats(): CMsgDOTATeamInfo_TeamStats {
  return { playedHeroes: [], farming: 0, fighting: 0, versatility: 0, avgKills: 0, avgDeaths: 0, avgDuration: 0 };
}

export const CMsgDOTATeamInfo_TeamStats = {
  encode(message: CMsgDOTATeamInfo_TeamStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.playedHeroes) {
      CMsgDOTATeamInfo_HeroStats.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.farming !== 0) {
      writer.uint32(21).float(message.farming);
    }
    if (message.fighting !== 0) {
      writer.uint32(29).float(message.fighting);
    }
    if (message.versatility !== 0) {
      writer.uint32(37).float(message.versatility);
    }
    if (message.avgKills !== 0) {
      writer.uint32(45).float(message.avgKills);
    }
    if (message.avgDeaths !== 0) {
      writer.uint32(53).float(message.avgDeaths);
    }
    if (message.avgDuration !== 0) {
      writer.uint32(61).float(message.avgDuration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATeamInfo_TeamStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATeamInfo_TeamStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.playedHeroes.push(CMsgDOTATeamInfo_HeroStats.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.farming = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.fighting = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.versatility = reader.float();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.avgKills = reader.float();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.avgDeaths = reader.float();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.avgDuration = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTATeamInfo_TeamStats {
    return {
      playedHeroes: Array.isArray(object?.playedHeroes)
        ? object.playedHeroes.map((e: any) => CMsgDOTATeamInfo_HeroStats.fromJSON(e))
        : [],
      farming: isSet(object.farming) ? Number(object.farming) : 0,
      fighting: isSet(object.fighting) ? Number(object.fighting) : 0,
      versatility: isSet(object.versatility) ? Number(object.versatility) : 0,
      avgKills: isSet(object.avgKills) ? Number(object.avgKills) : 0,
      avgDeaths: isSet(object.avgDeaths) ? Number(object.avgDeaths) : 0,
      avgDuration: isSet(object.avgDuration) ? Number(object.avgDuration) : 0,
    };
  },

  toJSON(message: CMsgDOTATeamInfo_TeamStats): unknown {
    const obj: any = {};
    if (message.playedHeroes) {
      obj.playedHeroes = message.playedHeroes.map((e) => e ? CMsgDOTATeamInfo_HeroStats.toJSON(e) : undefined);
    } else {
      obj.playedHeroes = [];
    }
    message.farming !== undefined && (obj.farming = message.farming);
    message.fighting !== undefined && (obj.fighting = message.fighting);
    message.versatility !== undefined && (obj.versatility = message.versatility);
    message.avgKills !== undefined && (obj.avgKills = message.avgKills);
    message.avgDeaths !== undefined && (obj.avgDeaths = message.avgDeaths);
    message.avgDuration !== undefined && (obj.avgDuration = message.avgDuration);
    return obj;
  },
};

function createBaseCMsgDOTATeamInfo_DPCResult(): CMsgDOTATeamInfo_DPCResult {
  return { leagueId: 0, standing: 0, points: 0, earnings: 0, timestamp: 0 };
}

export const CMsgDOTATeamInfo_DPCResult = {
  encode(message: CMsgDOTATeamInfo_DPCResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leagueId !== 0) {
      writer.uint32(8).uint32(message.leagueId);
    }
    if (message.standing !== 0) {
      writer.uint32(16).uint32(message.standing);
    }
    if (message.points !== 0) {
      writer.uint32(24).uint32(message.points);
    }
    if (message.earnings !== 0) {
      writer.uint32(32).uint32(message.earnings);
    }
    if (message.timestamp !== 0) {
      writer.uint32(40).uint32(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATeamInfo_DPCResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATeamInfo_DPCResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.standing = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.points = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.earnings = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.timestamp = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTATeamInfo_DPCResult {
    return {
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      standing: isSet(object.standing) ? Number(object.standing) : 0,
      points: isSet(object.points) ? Number(object.points) : 0,
      earnings: isSet(object.earnings) ? Number(object.earnings) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: CMsgDOTATeamInfo_DPCResult): unknown {
    const obj: any = {};
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    message.standing !== undefined && (obj.standing = Math.round(message.standing));
    message.points !== undefined && (obj.points = Math.round(message.points));
    message.earnings !== undefined && (obj.earnings = Math.round(message.earnings));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },
};

function createBaseCMsgDOTATeamInfo_Member(): CMsgDOTATeamInfo_Member {
  return { accountId: 0, timeJoined: 0, admin: false, proName: "", role: 0, realName: "" };
}

export const CMsgDOTATeamInfo_Member = {
  encode(message: CMsgDOTATeamInfo_Member, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.timeJoined !== 0) {
      writer.uint32(16).uint32(message.timeJoined);
    }
    if (message.admin === true) {
      writer.uint32(24).bool(message.admin);
    }
    if (message.proName !== "") {
      writer.uint32(50).string(message.proName);
    }
    if (message.role !== 0) {
      writer.uint32(64).int32(message.role);
    }
    if (message.realName !== "") {
      writer.uint32(74).string(message.realName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATeamInfo_Member {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATeamInfo_Member();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.timeJoined = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.admin = reader.bool();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.proName = reader.string();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.role = reader.int32() as any;
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.realName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTATeamInfo_Member {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      timeJoined: isSet(object.timeJoined) ? Number(object.timeJoined) : 0,
      admin: isSet(object.admin) ? Boolean(object.admin) : false,
      proName: isSet(object.proName) ? String(object.proName) : "",
      role: isSet(object.role) ? fantasyRolesFromJSON(object.role) : 0,
      realName: isSet(object.realName) ? String(object.realName) : "",
    };
  },

  toJSON(message: CMsgDOTATeamInfo_Member): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.timeJoined !== undefined && (obj.timeJoined = Math.round(message.timeJoined));
    message.admin !== undefined && (obj.admin = message.admin);
    message.proName !== undefined && (obj.proName = message.proName);
    message.role !== undefined && (obj.role = fantasyRolesToJSON(message.role));
    message.realName !== undefined && (obj.realName = message.realName);
    return obj;
  },
};

function createBaseCMsgDOTATeamInfo_AuditEntry(): CMsgDOTATeamInfo_AuditEntry {
  return { auditAction: 0, timestamp: 0, accountId: 0 };
}

export const CMsgDOTATeamInfo_AuditEntry = {
  encode(message: CMsgDOTATeamInfo_AuditEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auditAction !== 0) {
      writer.uint32(8).uint32(message.auditAction);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    if (message.accountId !== 0) {
      writer.uint32(24).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATeamInfo_AuditEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATeamInfo_AuditEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.auditAction = reader.uint32();
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

          message.accountId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTATeamInfo_AuditEntry {
    return {
      auditAction: isSet(object.auditAction) ? Number(object.auditAction) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
    };
  },

  toJSON(message: CMsgDOTATeamInfo_AuditEntry): unknown {
    const obj: any = {};
    message.auditAction !== undefined && (obj.auditAction = Math.round(message.auditAction));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    return obj;
  },
};

function createBaseCMsgDOTATeamsInfo(): CMsgDOTATeamsInfo {
  return { leagueId: 0, teams: [] };
}

export const CMsgDOTATeamsInfo = {
  encode(message: CMsgDOTATeamsInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leagueId !== 0) {
      writer.uint32(8).uint32(message.leagueId);
    }
    for (const v of message.teams) {
      CMsgDOTATeamInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATeamsInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATeamsInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.teams.push(CMsgDOTATeamInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTATeamsInfo {
    return {
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      teams: Array.isArray(object?.teams) ? object.teams.map((e: any) => CMsgDOTATeamInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgDOTATeamsInfo): unknown {
    const obj: any = {};
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    if (message.teams) {
      obj.teams = message.teams.map((e) => e ? CMsgDOTATeamInfo.toJSON(e) : undefined);
    } else {
      obj.teams = [];
    }
    return obj;
  },
};

function createBaseCMsgDOTATeamInfoList(): CMsgDOTATeamInfoList {
  return { teams: [] };
}

export const CMsgDOTATeamInfoList = {
  encode(message: CMsgDOTATeamInfoList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.teams) {
      CMsgDOTATeamInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATeamInfoList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATeamInfoList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.teams.push(CMsgDOTATeamInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTATeamInfoList {
    return { teams: Array.isArray(object?.teams) ? object.teams.map((e: any) => CMsgDOTATeamInfo.fromJSON(e)) : [] };
  },

  toJSON(message: CMsgDOTATeamInfoList): unknown {
    const obj: any = {};
    if (message.teams) {
      obj.teams = message.teams.map((e) => e ? CMsgDOTATeamInfo.toJSON(e) : undefined);
    } else {
      obj.teams = [];
    }
    return obj;
  },
};

function createBaseCMsgDOTAMyTeamInfoRequest(): CMsgDOTAMyTeamInfoRequest {
  return {};
}

export const CMsgDOTAMyTeamInfoRequest = {
  encode(_: CMsgDOTAMyTeamInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAMyTeamInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAMyTeamInfoRequest();
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

  fromJSON(_: any): CMsgDOTAMyTeamInfoRequest {
    return {};
  },

  toJSON(_: CMsgDOTAMyTeamInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgDOTACreateTeam(): CMsgDOTACreateTeam {
  return {
    name: "",
    tag: "",
    logo: "0",
    baseLogo: "0",
    bannerLogo: "0",
    sponsorLogo: "0",
    countryCode: "",
    url: "",
    pickupTeam: false,
    abbreviation: "",
  };
}

export const CMsgDOTACreateTeam = {
  encode(message: CMsgDOTACreateTeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    if (message.logo !== "0") {
      writer.uint32(24).uint64(message.logo);
    }
    if (message.baseLogo !== "0") {
      writer.uint32(32).uint64(message.baseLogo);
    }
    if (message.bannerLogo !== "0") {
      writer.uint32(40).uint64(message.bannerLogo);
    }
    if (message.sponsorLogo !== "0") {
      writer.uint32(48).uint64(message.sponsorLogo);
    }
    if (message.countryCode !== "") {
      writer.uint32(58).string(message.countryCode);
    }
    if (message.url !== "") {
      writer.uint32(66).string(message.url);
    }
    if (message.pickupTeam === true) {
      writer.uint32(72).bool(message.pickupTeam);
    }
    if (message.abbreviation !== "") {
      writer.uint32(82).string(message.abbreviation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTACreateTeam {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTACreateTeam();
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

          message.tag = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.logo = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.baseLogo = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.bannerLogo = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.sponsorLogo = longToString(reader.uint64() as Long);
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

          message.url = reader.string();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.pickupTeam = reader.bool();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.abbreviation = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTACreateTeam {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      tag: isSet(object.tag) ? String(object.tag) : "",
      logo: isSet(object.logo) ? String(object.logo) : "0",
      baseLogo: isSet(object.baseLogo) ? String(object.baseLogo) : "0",
      bannerLogo: isSet(object.bannerLogo) ? String(object.bannerLogo) : "0",
      sponsorLogo: isSet(object.sponsorLogo) ? String(object.sponsorLogo) : "0",
      countryCode: isSet(object.countryCode) ? String(object.countryCode) : "",
      url: isSet(object.url) ? String(object.url) : "",
      pickupTeam: isSet(object.pickupTeam) ? Boolean(object.pickupTeam) : false,
      abbreviation: isSet(object.abbreviation) ? String(object.abbreviation) : "",
    };
  },

  toJSON(message: CMsgDOTACreateTeam): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.tag !== undefined && (obj.tag = message.tag);
    message.logo !== undefined && (obj.logo = message.logo);
    message.baseLogo !== undefined && (obj.baseLogo = message.baseLogo);
    message.bannerLogo !== undefined && (obj.bannerLogo = message.bannerLogo);
    message.sponsorLogo !== undefined && (obj.sponsorLogo = message.sponsorLogo);
    message.countryCode !== undefined && (obj.countryCode = message.countryCode);
    message.url !== undefined && (obj.url = message.url);
    message.pickupTeam !== undefined && (obj.pickupTeam = message.pickupTeam);
    message.abbreviation !== undefined && (obj.abbreviation = message.abbreviation);
    return obj;
  },
};

function createBaseCMsgDOTACreateTeamResponse(): CMsgDOTACreateTeamResponse {
  return { result: 0, teamId: 0 };
}

export const CMsgDOTACreateTeamResponse = {
  encode(message: CMsgDOTACreateTeamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.teamId !== 0) {
      writer.uint32(16).uint32(message.teamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTACreateTeamResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTACreateTeamResponse();
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
          if (tag != 16) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTACreateTeamResponse {
    return {
      result: isSet(object.result) ? cMsgDOTACreateTeamResponse_ResultFromJSON(object.result) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
    };
  },

  toJSON(message: CMsgDOTACreateTeamResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = cMsgDOTACreateTeamResponse_ResultToJSON(message.result));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    return obj;
  },
};

function createBaseCMsgDOTAEditTeamDetails(): CMsgDOTAEditTeamDetails {
  return {
    teamId: 0,
    name: "",
    tag: "",
    logo: "0",
    baseLogo: "0",
    bannerLogo: "0",
    sponsorLogo: "0",
    countryCode: "",
    url: "",
    inUseByParty: false,
    abbreviation: "",
  };
}

export const CMsgDOTAEditTeamDetails = {
  encode(message: CMsgDOTAEditTeamDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamId !== 0) {
      writer.uint32(8).uint32(message.teamId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.tag !== "") {
      writer.uint32(26).string(message.tag);
    }
    if (message.logo !== "0") {
      writer.uint32(32).uint64(message.logo);
    }
    if (message.baseLogo !== "0") {
      writer.uint32(40).uint64(message.baseLogo);
    }
    if (message.bannerLogo !== "0") {
      writer.uint32(48).uint64(message.bannerLogo);
    }
    if (message.sponsorLogo !== "0") {
      writer.uint32(56).uint64(message.sponsorLogo);
    }
    if (message.countryCode !== "") {
      writer.uint32(66).string(message.countryCode);
    }
    if (message.url !== "") {
      writer.uint32(74).string(message.url);
    }
    if (message.inUseByParty === true) {
      writer.uint32(80).bool(message.inUseByParty);
    }
    if (message.abbreviation !== "") {
      writer.uint32(90).string(message.abbreviation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAEditTeamDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAEditTeamDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.teamId = reader.uint32();
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

          message.tag = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.logo = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.baseLogo = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.bannerLogo = longToString(reader.uint64() as Long);
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.sponsorLogo = longToString(reader.uint64() as Long);
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.countryCode = reader.string();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.url = reader.string();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.inUseByParty = reader.bool();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.abbreviation = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAEditTeamDetails {
    return {
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      tag: isSet(object.tag) ? String(object.tag) : "",
      logo: isSet(object.logo) ? String(object.logo) : "0",
      baseLogo: isSet(object.baseLogo) ? String(object.baseLogo) : "0",
      bannerLogo: isSet(object.bannerLogo) ? String(object.bannerLogo) : "0",
      sponsorLogo: isSet(object.sponsorLogo) ? String(object.sponsorLogo) : "0",
      countryCode: isSet(object.countryCode) ? String(object.countryCode) : "",
      url: isSet(object.url) ? String(object.url) : "",
      inUseByParty: isSet(object.inUseByParty) ? Boolean(object.inUseByParty) : false,
      abbreviation: isSet(object.abbreviation) ? String(object.abbreviation) : "",
    };
  },

  toJSON(message: CMsgDOTAEditTeamDetails): unknown {
    const obj: any = {};
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.name !== undefined && (obj.name = message.name);
    message.tag !== undefined && (obj.tag = message.tag);
    message.logo !== undefined && (obj.logo = message.logo);
    message.baseLogo !== undefined && (obj.baseLogo = message.baseLogo);
    message.bannerLogo !== undefined && (obj.bannerLogo = message.bannerLogo);
    message.sponsorLogo !== undefined && (obj.sponsorLogo = message.sponsorLogo);
    message.countryCode !== undefined && (obj.countryCode = message.countryCode);
    message.url !== undefined && (obj.url = message.url);
    message.inUseByParty !== undefined && (obj.inUseByParty = message.inUseByParty);
    message.abbreviation !== undefined && (obj.abbreviation = message.abbreviation);
    return obj;
  },
};

function createBaseCMsgDOTAEditTeamDetailsResponse(): CMsgDOTAEditTeamDetailsResponse {
  return { result: 0 };
}

export const CMsgDOTAEditTeamDetailsResponse = {
  encode(message: CMsgDOTAEditTeamDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAEditTeamDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAEditTeamDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAEditTeamDetailsResponse {
    return { result: isSet(object.result) ? cMsgDOTAEditTeamDetailsResponse_ResultFromJSON(object.result) : 0 };
  },

  toJSON(message: CMsgDOTAEditTeamDetailsResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = cMsgDOTAEditTeamDetailsResponse_ResultToJSON(message.result));
    return obj;
  },
};

function createBaseCMsgDOTATeamInviteInviterToGC(): CMsgDOTATeamInviteInviterToGC {
  return { accountId: 0, teamId: 0 };
}

export const CMsgDOTATeamInviteInviterToGC = {
  encode(message: CMsgDOTATeamInviteInviterToGC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.teamId !== 0) {
      writer.uint32(16).uint32(message.teamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATeamInviteInviterToGC {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATeamInviteInviterToGC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTATeamInviteInviterToGC {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
    };
  },

  toJSON(message: CMsgDOTATeamInviteInviterToGC): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    return obj;
  },
};

function createBaseCMsgDOTATeamInviteGCImmediateResponseToInviter(): CMsgDOTATeamInviteGCImmediateResponseToInviter {
  return { result: 0, inviteeName: "", requiredPlayTime: 0 };
}

export const CMsgDOTATeamInviteGCImmediateResponseToInviter = {
  encode(
    message: CMsgDOTATeamInviteGCImmediateResponseToInviter,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.inviteeName !== "") {
      writer.uint32(18).string(message.inviteeName);
    }
    if (message.requiredPlayTime !== 0) {
      writer.uint32(24).uint32(message.requiredPlayTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATeamInviteGCImmediateResponseToInviter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATeamInviteGCImmediateResponseToInviter();
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

          message.inviteeName = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.requiredPlayTime = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTATeamInviteGCImmediateResponseToInviter {
    return {
      result: isSet(object.result) ? eTeamInviteResultFromJSON(object.result) : 0,
      inviteeName: isSet(object.inviteeName) ? String(object.inviteeName) : "",
      requiredPlayTime: isSet(object.requiredPlayTime) ? Number(object.requiredPlayTime) : 0,
    };
  },

  toJSON(message: CMsgDOTATeamInviteGCImmediateResponseToInviter): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = eTeamInviteResultToJSON(message.result));
    message.inviteeName !== undefined && (obj.inviteeName = message.inviteeName);
    message.requiredPlayTime !== undefined && (obj.requiredPlayTime = Math.round(message.requiredPlayTime));
    return obj;
  },
};

function createBaseCMsgDOTATeamInviteGCRequestToInvitee(): CMsgDOTATeamInviteGCRequestToInvitee {
  return { inviterAccountId: 0, teamName: "", teamTag: "", logo: "0" };
}

export const CMsgDOTATeamInviteGCRequestToInvitee = {
  encode(message: CMsgDOTATeamInviteGCRequestToInvitee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviterAccountId !== 0) {
      writer.uint32(8).uint32(message.inviterAccountId);
    }
    if (message.teamName !== "") {
      writer.uint32(18).string(message.teamName);
    }
    if (message.teamTag !== "") {
      writer.uint32(26).string(message.teamTag);
    }
    if (message.logo !== "0") {
      writer.uint32(32).uint64(message.logo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATeamInviteGCRequestToInvitee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATeamInviteGCRequestToInvitee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.inviterAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.teamName = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.teamTag = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.logo = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTATeamInviteGCRequestToInvitee {
    return {
      inviterAccountId: isSet(object.inviterAccountId) ? Number(object.inviterAccountId) : 0,
      teamName: isSet(object.teamName) ? String(object.teamName) : "",
      teamTag: isSet(object.teamTag) ? String(object.teamTag) : "",
      logo: isSet(object.logo) ? String(object.logo) : "0",
    };
  },

  toJSON(message: CMsgDOTATeamInviteGCRequestToInvitee): unknown {
    const obj: any = {};
    message.inviterAccountId !== undefined && (obj.inviterAccountId = Math.round(message.inviterAccountId));
    message.teamName !== undefined && (obj.teamName = message.teamName);
    message.teamTag !== undefined && (obj.teamTag = message.teamTag);
    message.logo !== undefined && (obj.logo = message.logo);
    return obj;
  },
};

function createBaseCMsgDOTATeamInviteInviteeResponseToGC(): CMsgDOTATeamInviteInviteeResponseToGC {
  return { result: 0 };
}

export const CMsgDOTATeamInviteInviteeResponseToGC = {
  encode(message: CMsgDOTATeamInviteInviteeResponseToGC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATeamInviteInviteeResponseToGC {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATeamInviteInviteeResponseToGC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTATeamInviteInviteeResponseToGC {
    return { result: isSet(object.result) ? eTeamInviteResultFromJSON(object.result) : 0 };
  },

  toJSON(message: CMsgDOTATeamInviteInviteeResponseToGC): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = eTeamInviteResultToJSON(message.result));
    return obj;
  },
};

function createBaseCMsgDOTATeamInviteGCResponseToInviter(): CMsgDOTATeamInviteGCResponseToInviter {
  return { result: 0, inviteeName: "" };
}

export const CMsgDOTATeamInviteGCResponseToInviter = {
  encode(message: CMsgDOTATeamInviteGCResponseToInviter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.inviteeName !== "") {
      writer.uint32(18).string(message.inviteeName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATeamInviteGCResponseToInviter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATeamInviteGCResponseToInviter();
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

          message.inviteeName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTATeamInviteGCResponseToInviter {
    return {
      result: isSet(object.result) ? eTeamInviteResultFromJSON(object.result) : 0,
      inviteeName: isSet(object.inviteeName) ? String(object.inviteeName) : "",
    };
  },

  toJSON(message: CMsgDOTATeamInviteGCResponseToInviter): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = eTeamInviteResultToJSON(message.result));
    message.inviteeName !== undefined && (obj.inviteeName = message.inviteeName);
    return obj;
  },
};

function createBaseCMsgDOTATeamInviteGCResponseToInvitee(): CMsgDOTATeamInviteGCResponseToInvitee {
  return { result: 0, teamName: "" };
}

export const CMsgDOTATeamInviteGCResponseToInvitee = {
  encode(message: CMsgDOTATeamInviteGCResponseToInvitee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.teamName !== "") {
      writer.uint32(18).string(message.teamName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATeamInviteGCResponseToInvitee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATeamInviteGCResponseToInvitee();
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

          message.teamName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTATeamInviteGCResponseToInvitee {
    return {
      result: isSet(object.result) ? eTeamInviteResultFromJSON(object.result) : 0,
      teamName: isSet(object.teamName) ? String(object.teamName) : "",
    };
  },

  toJSON(message: CMsgDOTATeamInviteGCResponseToInvitee): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = eTeamInviteResultToJSON(message.result));
    message.teamName !== undefined && (obj.teamName = message.teamName);
    return obj;
  },
};

function createBaseCMsgDOTAKickTeamMember(): CMsgDOTAKickTeamMember {
  return { accountId: 0, teamId: 0 };
}

export const CMsgDOTAKickTeamMember = {
  encode(message: CMsgDOTAKickTeamMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.teamId !== 0) {
      writer.uint32(16).uint32(message.teamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAKickTeamMember {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAKickTeamMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAKickTeamMember {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
    };
  },

  toJSON(message: CMsgDOTAKickTeamMember): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    return obj;
  },
};

function createBaseCMsgDOTAKickTeamMemberResponse(): CMsgDOTAKickTeamMemberResponse {
  return { result: 0 };
}

export const CMsgDOTAKickTeamMemberResponse = {
  encode(message: CMsgDOTAKickTeamMemberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAKickTeamMemberResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAKickTeamMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAKickTeamMemberResponse {
    return { result: isSet(object.result) ? cMsgDOTAKickTeamMemberResponse_ResultFromJSON(object.result) : 0 };
  },

  toJSON(message: CMsgDOTAKickTeamMemberResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = cMsgDOTAKickTeamMemberResponse_ResultToJSON(message.result));
    return obj;
  },
};

function createBaseCMsgDOTATransferTeamAdmin(): CMsgDOTATransferTeamAdmin {
  return { newAdminAccountId: 0, teamId: 0 };
}

export const CMsgDOTATransferTeamAdmin = {
  encode(message: CMsgDOTATransferTeamAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newAdminAccountId !== 0) {
      writer.uint32(8).uint32(message.newAdminAccountId);
    }
    if (message.teamId !== 0) {
      writer.uint32(16).uint32(message.teamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATransferTeamAdmin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATransferTeamAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.newAdminAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTATransferTeamAdmin {
    return {
      newAdminAccountId: isSet(object.newAdminAccountId) ? Number(object.newAdminAccountId) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
    };
  },

  toJSON(message: CMsgDOTATransferTeamAdmin): unknown {
    const obj: any = {};
    message.newAdminAccountId !== undefined && (obj.newAdminAccountId = Math.round(message.newAdminAccountId));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    return obj;
  },
};

function createBaseCMsgDOTATransferTeamAdminResponse(): CMsgDOTATransferTeamAdminResponse {
  return { result: 0 };
}

export const CMsgDOTATransferTeamAdminResponse = {
  encode(message: CMsgDOTATransferTeamAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATransferTeamAdminResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATransferTeamAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTATransferTeamAdminResponse {
    return { result: isSet(object.result) ? cMsgDOTATransferTeamAdminResponse_ResultFromJSON(object.result) : 0 };
  },

  toJSON(message: CMsgDOTATransferTeamAdminResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = cMsgDOTATransferTeamAdminResponse_ResultToJSON(message.result));
    return obj;
  },
};

function createBaseCMsgDOTALeaveTeam(): CMsgDOTALeaveTeam {
  return { teamId: 0 };
}

export const CMsgDOTALeaveTeam = {
  encode(message: CMsgDOTALeaveTeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamId !== 0) {
      writer.uint32(8).uint32(message.teamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeaveTeam {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeaveTeam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTALeaveTeam {
    return { teamId: isSet(object.teamId) ? Number(object.teamId) : 0 };
  },

  toJSON(message: CMsgDOTALeaveTeam): unknown {
    const obj: any = {};
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    return obj;
  },
};

function createBaseCMsgDOTALeaveTeamResponse(): CMsgDOTALeaveTeamResponse {
  return { result: 0 };
}

export const CMsgDOTALeaveTeamResponse = {
  encode(message: CMsgDOTALeaveTeamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeaveTeamResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeaveTeamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTALeaveTeamResponse {
    return { result: isSet(object.result) ? cMsgDOTALeaveTeamResponse_ResultFromJSON(object.result) : 0 };
  },

  toJSON(message: CMsgDOTALeaveTeamResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = cMsgDOTALeaveTeamResponse_ResultToJSON(message.result));
    return obj;
  },
};

function createBaseCMsgDOTABetaParticipation(): CMsgDOTABetaParticipation {
  return { accessRights: 0 };
}

export const CMsgDOTABetaParticipation = {
  encode(message: CMsgDOTABetaParticipation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessRights !== 0) {
      writer.uint32(8).uint32(message.accessRights);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTABetaParticipation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTABetaParticipation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accessRights = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTABetaParticipation {
    return { accessRights: isSet(object.accessRights) ? Number(object.accessRights) : 0 };
  },

  toJSON(message: CMsgDOTABetaParticipation): unknown {
    const obj: any = {};
    message.accessRights !== undefined && (obj.accessRights = Math.round(message.accessRights));
    return obj;
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
