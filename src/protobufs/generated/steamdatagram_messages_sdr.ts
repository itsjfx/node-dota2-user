/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  CMsgSteamDatagramConnectionQuality,
  CMsgSteamDatagramSessionCryptInfoSigned,
  CMsgSteamNetworkingICESessionSummary,
} from "./steamnetworkingsockets_messages";
import {
  CMsgSteamDatagramCertificateSigned,
  CMsgSteamNetworkingIdentityLegacyBinary,
} from "./steamnetworkingsockets_messages_certs";

export enum ESteamDatagramMsgID {
  k_ESteamDatagramMsg_Invalid = 0,
  k_ESteamDatagramMsg_RouterPingRequest = 1,
  k_ESteamDatagramMsg_RouterPingReply = 2,
  k_ESteamDatagramMsg_GameserverPingRequest = 3,
  k_ESteamDatagramMsg_GameserverSessionRequest = 5,
  k_ESteamDatagramMsg_GameserverSessionEstablished = 6,
  k_ESteamDatagramMsg_NoSession = 7,
  k_ESteamDatagramMsg_Diagnostic = 8,
  k_ESteamDatagramMsg_DataClientToRouter = 9,
  k_ESteamDatagramMsg_DataRouterToServer = 10,
  k_ESteamDatagramMsg_DataServerToRouter = 11,
  k_ESteamDatagramMsg_DataRouterToClient = 12,
  k_ESteamDatagramMsg_Stats = 13,
  k_ESteamDatagramMsg_ClientPingSampleRequest = 14,
  k_ESteamDatagramMsg_ClientPingSampleReply = 15,
  k_ESteamDatagramMsg_ClientToRouterSwitchedPrimary = 16,
  k_ESteamDatagramMsg_RelayHealth = 17,
  k_ESteamDatagramMsg_ConnectRequest = 18,
  k_ESteamDatagramMsg_ConnectOK = 19,
  k_ESteamDatagramMsg_ConnectionClosed = 20,
  k_ESteamDatagramMsg_NoConnection = 21,
  k_ESteamDatagramMsg_TicketDecryptRequest = 22,
  k_ESteamDatagramMsg_TicketDecryptReply = 23,
  k_ESteamDatagramMsg_P2PSessionRequest = 24,
  k_ESteamDatagramMsg_P2PSessionEstablished = 25,
  k_ESteamDatagramMsg_P2PStatsClient = 26,
  k_ESteamDatagramMsg_P2PStatsRelay = 27,
  k_ESteamDatagramMsg_P2PBadRoute = 28,
  k_ESteamDatagramMsg_GameserverPingReply = 29,
  k_ESteamDatagramMsg_LegacyGameserverRegistration = 30,
  k_ESteamDatagramMsg_SetSecondaryAddressRequest = 31,
  k_ESteamDatagramMsg_SetSecondaryAddressResult = 32,
  k_ESteamDatagramMsg_RelayToRelayPingRequest = 33,
  k_ESteamDatagramMsg_RelayToRelayPingReply = 34,
}

export function eSteamDatagramMsgIDFromJSON(object: any): ESteamDatagramMsgID {
  switch (object) {
    case 0:
    case "k_ESteamDatagramMsg_Invalid":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_Invalid;
    case 1:
    case "k_ESteamDatagramMsg_RouterPingRequest":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_RouterPingRequest;
    case 2:
    case "k_ESteamDatagramMsg_RouterPingReply":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_RouterPingReply;
    case 3:
    case "k_ESteamDatagramMsg_GameserverPingRequest":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_GameserverPingRequest;
    case 5:
    case "k_ESteamDatagramMsg_GameserverSessionRequest":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_GameserverSessionRequest;
    case 6:
    case "k_ESteamDatagramMsg_GameserverSessionEstablished":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_GameserverSessionEstablished;
    case 7:
    case "k_ESteamDatagramMsg_NoSession":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_NoSession;
    case 8:
    case "k_ESteamDatagramMsg_Diagnostic":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_Diagnostic;
    case 9:
    case "k_ESteamDatagramMsg_DataClientToRouter":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_DataClientToRouter;
    case 10:
    case "k_ESteamDatagramMsg_DataRouterToServer":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_DataRouterToServer;
    case 11:
    case "k_ESteamDatagramMsg_DataServerToRouter":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_DataServerToRouter;
    case 12:
    case "k_ESteamDatagramMsg_DataRouterToClient":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_DataRouterToClient;
    case 13:
    case "k_ESteamDatagramMsg_Stats":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_Stats;
    case 14:
    case "k_ESteamDatagramMsg_ClientPingSampleRequest":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_ClientPingSampleRequest;
    case 15:
    case "k_ESteamDatagramMsg_ClientPingSampleReply":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_ClientPingSampleReply;
    case 16:
    case "k_ESteamDatagramMsg_ClientToRouterSwitchedPrimary":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_ClientToRouterSwitchedPrimary;
    case 17:
    case "k_ESteamDatagramMsg_RelayHealth":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_RelayHealth;
    case 18:
    case "k_ESteamDatagramMsg_ConnectRequest":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_ConnectRequest;
    case 19:
    case "k_ESteamDatagramMsg_ConnectOK":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_ConnectOK;
    case 20:
    case "k_ESteamDatagramMsg_ConnectionClosed":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_ConnectionClosed;
    case 21:
    case "k_ESteamDatagramMsg_NoConnection":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_NoConnection;
    case 22:
    case "k_ESteamDatagramMsg_TicketDecryptRequest":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_TicketDecryptRequest;
    case 23:
    case "k_ESteamDatagramMsg_TicketDecryptReply":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_TicketDecryptReply;
    case 24:
    case "k_ESteamDatagramMsg_P2PSessionRequest":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_P2PSessionRequest;
    case 25:
    case "k_ESteamDatagramMsg_P2PSessionEstablished":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_P2PSessionEstablished;
    case 26:
    case "k_ESteamDatagramMsg_P2PStatsClient":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_P2PStatsClient;
    case 27:
    case "k_ESteamDatagramMsg_P2PStatsRelay":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_P2PStatsRelay;
    case 28:
    case "k_ESteamDatagramMsg_P2PBadRoute":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_P2PBadRoute;
    case 29:
    case "k_ESteamDatagramMsg_GameserverPingReply":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_GameserverPingReply;
    case 30:
    case "k_ESteamDatagramMsg_LegacyGameserverRegistration":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_LegacyGameserverRegistration;
    case 31:
    case "k_ESteamDatagramMsg_SetSecondaryAddressRequest":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_SetSecondaryAddressRequest;
    case 32:
    case "k_ESteamDatagramMsg_SetSecondaryAddressResult":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_SetSecondaryAddressResult;
    case 33:
    case "k_ESteamDatagramMsg_RelayToRelayPingRequest":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_RelayToRelayPingRequest;
    case 34:
    case "k_ESteamDatagramMsg_RelayToRelayPingReply":
      return ESteamDatagramMsgID.k_ESteamDatagramMsg_RelayToRelayPingReply;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESteamDatagramMsgID");
  }
}

export function eSteamDatagramMsgIDToJSON(object: ESteamDatagramMsgID): string {
  switch (object) {
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_Invalid:
      return "k_ESteamDatagramMsg_Invalid";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_RouterPingRequest:
      return "k_ESteamDatagramMsg_RouterPingRequest";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_RouterPingReply:
      return "k_ESteamDatagramMsg_RouterPingReply";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_GameserverPingRequest:
      return "k_ESteamDatagramMsg_GameserverPingRequest";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_GameserverSessionRequest:
      return "k_ESteamDatagramMsg_GameserverSessionRequest";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_GameserverSessionEstablished:
      return "k_ESteamDatagramMsg_GameserverSessionEstablished";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_NoSession:
      return "k_ESteamDatagramMsg_NoSession";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_Diagnostic:
      return "k_ESteamDatagramMsg_Diagnostic";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_DataClientToRouter:
      return "k_ESteamDatagramMsg_DataClientToRouter";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_DataRouterToServer:
      return "k_ESteamDatagramMsg_DataRouterToServer";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_DataServerToRouter:
      return "k_ESteamDatagramMsg_DataServerToRouter";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_DataRouterToClient:
      return "k_ESteamDatagramMsg_DataRouterToClient";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_Stats:
      return "k_ESteamDatagramMsg_Stats";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_ClientPingSampleRequest:
      return "k_ESteamDatagramMsg_ClientPingSampleRequest";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_ClientPingSampleReply:
      return "k_ESteamDatagramMsg_ClientPingSampleReply";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_ClientToRouterSwitchedPrimary:
      return "k_ESteamDatagramMsg_ClientToRouterSwitchedPrimary";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_RelayHealth:
      return "k_ESteamDatagramMsg_RelayHealth";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_ConnectRequest:
      return "k_ESteamDatagramMsg_ConnectRequest";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_ConnectOK:
      return "k_ESteamDatagramMsg_ConnectOK";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_ConnectionClosed:
      return "k_ESteamDatagramMsg_ConnectionClosed";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_NoConnection:
      return "k_ESteamDatagramMsg_NoConnection";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_TicketDecryptRequest:
      return "k_ESteamDatagramMsg_TicketDecryptRequest";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_TicketDecryptReply:
      return "k_ESteamDatagramMsg_TicketDecryptReply";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_P2PSessionRequest:
      return "k_ESteamDatagramMsg_P2PSessionRequest";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_P2PSessionEstablished:
      return "k_ESteamDatagramMsg_P2PSessionEstablished";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_P2PStatsClient:
      return "k_ESteamDatagramMsg_P2PStatsClient";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_P2PStatsRelay:
      return "k_ESteamDatagramMsg_P2PStatsRelay";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_P2PBadRoute:
      return "k_ESteamDatagramMsg_P2PBadRoute";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_GameserverPingReply:
      return "k_ESteamDatagramMsg_GameserverPingReply";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_LegacyGameserverRegistration:
      return "k_ESteamDatagramMsg_LegacyGameserverRegistration";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_SetSecondaryAddressRequest:
      return "k_ESteamDatagramMsg_SetSecondaryAddressRequest";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_SetSecondaryAddressResult:
      return "k_ESteamDatagramMsg_SetSecondaryAddressResult";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_RelayToRelayPingRequest:
      return "k_ESteamDatagramMsg_RelayToRelayPingRequest";
    case ESteamDatagramMsgID.k_ESteamDatagramMsg_RelayToRelayPingReply:
      return "k_ESteamDatagramMsg_RelayToRelayPingReply";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESteamDatagramMsgID");
  }
}

export interface CMsgSteamNetworkingIPAddress {
  v4: number;
  v6: Buffer;
}

export interface CMsgSteamDatagramSignedMessageGeneric {
  cert: CMsgSteamDatagramCertificateSigned | undefined;
  signedData: Buffer;
  signature: Buffer;
  dummyPad: Buffer;
}

export interface CMsgSteamDatagramRouterPingReply {
  clientTimestamp: number;
  latencyDatacenterIds: number[];
  latencyPingMs: number[];
  latencyDatacenterIdsP2p: number[];
  latencyPingMsP2p: number[];
  yourPublicIp: number;
  yourPublicPort: number;
  serverTime: number;
  challenge: string;
  secondsUntilShutdown: number;
  clientCookie: number;
  scoringPenaltyRelayCluster: number;
  flags: number;
  routeExceptions: CMsgSteamDatagramRouterPingReply_RouteException[];
  altAddresses: CMsgSteamDatagramRouterPingReply_AltAddress[];
}

export enum CMsgSteamDatagramRouterPingReply_Flags {
  FLAG_MAYBE_MORE_DATA_CENTERS = 1,
  FLAG_MAYBE_MORE_ALT_ADDRESSES = 2,
}

export function cMsgSteamDatagramRouterPingReply_FlagsFromJSON(object: any): CMsgSteamDatagramRouterPingReply_Flags {
  switch (object) {
    case 1:
    case "FLAG_MAYBE_MORE_DATA_CENTERS":
      return CMsgSteamDatagramRouterPingReply_Flags.FLAG_MAYBE_MORE_DATA_CENTERS;
    case 2:
    case "FLAG_MAYBE_MORE_ALT_ADDRESSES":
      return CMsgSteamDatagramRouterPingReply_Flags.FLAG_MAYBE_MORE_ALT_ADDRESSES;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramRouterPingReply_Flags",
      );
  }
}

export function cMsgSteamDatagramRouterPingReply_FlagsToJSON(object: CMsgSteamDatagramRouterPingReply_Flags): string {
  switch (object) {
    case CMsgSteamDatagramRouterPingReply_Flags.FLAG_MAYBE_MORE_DATA_CENTERS:
      return "FLAG_MAYBE_MORE_DATA_CENTERS";
    case CMsgSteamDatagramRouterPingReply_Flags.FLAG_MAYBE_MORE_ALT_ADDRESSES:
      return "FLAG_MAYBE_MORE_ALT_ADDRESSES";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramRouterPingReply_Flags",
      );
  }
}

export interface CMsgSteamDatagramRouterPingReply_RouteException {
  dataCenterId: number;
  flags: number;
  penalty: number;
}

export interface CMsgSteamDatagramRouterPingReply_AltAddress {
  ipv4: number;
  port: number;
  penalty: number;
  protocol: CMsgSteamDatagramRouterPingReply_AltAddress_Protocol;
  id: string;
}

export enum CMsgSteamDatagramRouterPingReply_AltAddress_Protocol {
  DefaultProtocol = 0,
  NetworkNext = 1,
}

export function cMsgSteamDatagramRouterPingReply_AltAddress_ProtocolFromJSON(
  object: any,
): CMsgSteamDatagramRouterPingReply_AltAddress_Protocol {
  switch (object) {
    case 0:
    case "DefaultProtocol":
      return CMsgSteamDatagramRouterPingReply_AltAddress_Protocol.DefaultProtocol;
    case 1:
    case "NetworkNext":
      return CMsgSteamDatagramRouterPingReply_AltAddress_Protocol.NetworkNext;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramRouterPingReply_AltAddress_Protocol",
      );
  }
}

export function cMsgSteamDatagramRouterPingReply_AltAddress_ProtocolToJSON(
  object: CMsgSteamDatagramRouterPingReply_AltAddress_Protocol,
): string {
  switch (object) {
    case CMsgSteamDatagramRouterPingReply_AltAddress_Protocol.DefaultProtocol:
      return "DefaultProtocol";
    case CMsgSteamDatagramRouterPingReply_AltAddress_Protocol.NetworkNext:
      return "NetworkNext";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramRouterPingReply_AltAddress_Protocol",
      );
  }
}

export interface CMsgSteamDatagramGameserverPingRequestBody {
  relayPopid: number;
  yourPublicIp: CMsgSteamNetworkingIPAddress | undefined;
  yourPublicPort: number;
  relayUnixTime: string;
  routingSecret: string;
  myIps: CMsgSteamNetworkingIPAddress[];
  echo: Buffer;
}

export interface CMsgSteamDatagramGameserverPingRequestEnvelope {
  cert: CMsgSteamDatagramCertificateSigned | undefined;
  signedData: Buffer;
  signature: Buffer;
  legacyYourPublicIp: number;
  legacyYourPublicPort: number;
  legacyRelayUnixTime: number;
  legacyChallenge: string;
  legacyRouterTimestamp: number;
  dummyPad: Buffer;
}

export interface CMsgSteamDatagramGameserverPingReplyData {
  echoRelayUnixTime: number;
  echo: Buffer;
  legacyChallenge: string;
  legacyRouterTimestamp: number;
  dataCenterId: number;
  appid: number;
  protocolVersion: number;
  build: string;
  networkConfigVersion: string;
  myUnixTime: number;
}

export interface CMsgSteamDatagramNoSessionRelayToClient {
  connectionId: number;
  yourPublicIp: number;
  yourPublicPort: number;
  serverTime: number;
  challenge: string;
  secondsUntilShutdown: number;
}

export interface CMsgSteamDatagramNoSessionRelayToPeer {
  legacyRelaySessionId: number;
  fromRelaySessionId: number;
  fromConnectionId: number;
  kludgePad: string;
}

export interface CMsgSteamDatagramClientPingSampleRequest {
  connectionId: number;
}

export interface CMsgSteamDatagramClientPingSampleReply {
  connectionId: number;
  overrideActive: boolean;
  pops: CMsgSteamDatagramClientPingSampleReply_POP[];
  legacyDataCenters: CMsgSteamDatagramClientPingSampleReply_LegacyDataCenter[];
}

export interface CMsgSteamDatagramClientPingSampleReply_POP {
  popId: number;
  defaultFrontPingMs: number;
  clusterPenalty: number;
  altAddresses: CMsgSteamDatagramClientPingSampleReply_POP_AltAddress[];
  defaultE2ePingMs: number;
  defaultE2eScore: number;
  p2pViaPeerRelayPopId: number;
  bestDcPingMs: number;
  bestDcScore: number;
  bestDcViaRelayPopId: number;
  defaultDcPingMs: number;
  defaultDcScore: number;
  defaultDcViaRelayPopId: number;
  testDcPingMs: number;
  testDcScore: number;
  testDcViaRelayPopId: number;
}

export interface CMsgSteamDatagramClientPingSampleReply_POP_AltAddress {
  id: string;
  frontPingMs: number;
  penalty: number;
}

export interface CMsgSteamDatagramClientPingSampleReply_LegacyDataCenter {
  dataCenterId: number;
  bestDcViaRelayPopId: number;
  bestDcPingMs: number;
}

export interface CMsgSteamDatagramClientSwitchedPrimary {
  connectionId: number;
  fromIp: number;
  fromPort: number;
  fromRouterCluster: number;
  fromActiveTime: number;
  fromActivePacketsRecv: number;
  fromDroppedReason: string;
  gapMs: number;
  fromQualityNow: CMsgSteamDatagramClientSwitchedPrimary_RouterQuality | undefined;
  toQualityNow: CMsgSteamDatagramClientSwitchedPrimary_RouterQuality | undefined;
  fromQualityThen: CMsgSteamDatagramClientSwitchedPrimary_RouterQuality | undefined;
  toQualityThen: CMsgSteamDatagramClientSwitchedPrimary_RouterQuality | undefined;
}

export interface CMsgSteamDatagramClientSwitchedPrimary_RouterQuality {
  score: number;
  frontPing: number;
  backPing: number;
  secondsUntilDown: number;
}

export interface CMsgSteamDatagramConnectRequest {
  connectionId: number;
  myTimestamp: string;
  pingEstMs: number;
  virtualPort: number;
  gameserverRelaySessionId: number;
  crypt: CMsgSteamDatagramSessionCryptInfoSigned | undefined;
  cert: CMsgSteamDatagramCertificateSigned | undefined;
  routingSecret: string;
  legacyClientSteamId: string;
}

export interface CMsgSteamDatagramConnectOK {
  clientConnectionId: number;
  serverConnectionId: number;
  yourTimestamp: string;
  delayTimeUsec: number;
  gameserverRelaySessionId: number;
  crypt: CMsgSteamDatagramSessionCryptInfoSigned | undefined;
  cert: CMsgSteamDatagramCertificateSigned | undefined;
}

export interface CMsgSteamNetworkingP2PSDRRoutingSummary {
  initialPing: number;
  initialPingFrontLocal: number;
  initialPingFrontRemote: number;
  initialScore: number;
  initialPopLocal: number;
  initialPopRemote: number;
  bestPing: number;
  bestPingFrontLocal: number;
  bestPingFrontRemote: number;
  bestScore: number;
  bestPopLocal: number;
  bestPopRemote: number;
  bestTime: number;
  negotiationMs: number;
  selectedSeconds: number;
}

export interface CMsgSteamDatagramP2PRoutingSummary {
  ice: CMsgSteamNetworkingICESessionSummary | undefined;
  sdr: CMsgSteamNetworkingP2PSDRRoutingSummary | undefined;
}

export interface CMsgSteamDatagramConnectionClosed {
  toConnectionId: number;
  fromConnectionId: number;
  fromIdentityString: string;
  legacyFromIdentityBinary: CMsgSteamNetworkingIdentityLegacyBinary | undefined;
  legacyFromSteamId: string;
  legacyGameserverRelaySessionId: number;
  toRelaySessionId: number;
  fromRelaySessionId: number;
  forwardTargetRelayRoutingToken: Buffer;
  forwardTargetRevision: number;
  relayMode: CMsgSteamDatagramConnectionClosed_ERelayMode;
  debug: string;
  reasonCode: number;
  routingSecret: string;
  notPrimarySession: boolean;
  notPrimaryTransport: boolean;
  qualityRelay: CMsgSteamDatagramConnectionQuality | undefined;
  qualityE2e: CMsgSteamDatagramConnectionQuality | undefined;
  p2pRoutingSummary: CMsgSteamDatagramP2PRoutingSummary | undefined;
}

export enum CMsgSteamDatagramConnectionClosed_ERelayMode {
  None = 0,
  EndToEnd = 1,
  ClosedByPeer = 2,
}

export function cMsgSteamDatagramConnectionClosed_ERelayModeFromJSON(
  object: any,
): CMsgSteamDatagramConnectionClosed_ERelayMode {
  switch (object) {
    case 0:
    case "None":
      return CMsgSteamDatagramConnectionClosed_ERelayMode.None;
    case 1:
    case "EndToEnd":
      return CMsgSteamDatagramConnectionClosed_ERelayMode.EndToEnd;
    case 2:
    case "ClosedByPeer":
      return CMsgSteamDatagramConnectionClosed_ERelayMode.ClosedByPeer;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramConnectionClosed_ERelayMode",
      );
  }
}

export function cMsgSteamDatagramConnectionClosed_ERelayModeToJSON(
  object: CMsgSteamDatagramConnectionClosed_ERelayMode,
): string {
  switch (object) {
    case CMsgSteamDatagramConnectionClosed_ERelayMode.None:
      return "None";
    case CMsgSteamDatagramConnectionClosed_ERelayMode.EndToEnd:
      return "EndToEnd";
    case CMsgSteamDatagramConnectionClosed_ERelayMode.ClosedByPeer:
      return "ClosedByPeer";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramConnectionClosed_ERelayMode",
      );
  }
}

export interface CMsgSteamDatagramNoConnection {
  toConnectionId: number;
  fromConnectionId: number;
  legacyGameserverRelaySessionId: number;
  toRelaySessionId: number;
  fromRelaySessionId: number;
  fromIdentityString: string;
  legacyFromSteamId: string;
  endToEnd: boolean;
  notPrimarySession: boolean;
  notPrimaryTransport: boolean;
  qualityRelay: CMsgSteamDatagramConnectionQuality | undefined;
  qualityE2e: CMsgSteamDatagramConnectionQuality | undefined;
  p2pRoutingSummary: CMsgSteamDatagramP2PRoutingSummary | undefined;
  routingSecret: string;
  dummyPad: number;
}

export interface CMsgSteamDatagramGameserverSessionRequest {
  ticket: Buffer;
  challengeTime: number;
  challenge: string;
  clientConnectionId: number;
  serverConnectionId: number;
  networkConfigVersion: string;
  protocolVersion: number;
  platform: string;
  build: string;
  devGameserverIdentity: string;
  devClientCert: CMsgSteamDatagramCertificateSigned | undefined;
}

export interface CMsgSteamDatagramGameserverSessionEstablished {
  connectionId: number;
  gameserverIdentityString: string;
  secondsUntilShutdown: number;
  seqNumR2c: number;
  dummyLegacyIdentityBinary: Buffer;
  legacyGameserverSteamid: string;
}

export interface CMsgSteamDatagramConnectionStatsClientToRouter {
  qualityRelay: CMsgSteamDatagramConnectionQuality | undefined;
  qualityE2e: CMsgSteamDatagramConnectionQuality | undefined;
  ackRelay: number[];
  legacyAckE2e: number[];
  flags: number;
  clientConnectionId: number;
  seqNumC2r: number;
  seqNumE2e: number;
}

export enum CMsgSteamDatagramConnectionStatsClientToRouter_Flags {
  ACK_REQUEST_RELAY = 1,
  ACK_REQUEST_E2E = 2,
  ACK_REQUEST_IMMEDIATE = 4,
  NOT_PRIMARY_SESSION = 8,
}

export function cMsgSteamDatagramConnectionStatsClientToRouter_FlagsFromJSON(
  object: any,
): CMsgSteamDatagramConnectionStatsClientToRouter_Flags {
  switch (object) {
    case 1:
    case "ACK_REQUEST_RELAY":
      return CMsgSteamDatagramConnectionStatsClientToRouter_Flags.ACK_REQUEST_RELAY;
    case 2:
    case "ACK_REQUEST_E2E":
      return CMsgSteamDatagramConnectionStatsClientToRouter_Flags.ACK_REQUEST_E2E;
    case 4:
    case "ACK_REQUEST_IMMEDIATE":
      return CMsgSteamDatagramConnectionStatsClientToRouter_Flags.ACK_REQUEST_IMMEDIATE;
    case 8:
    case "NOT_PRIMARY_SESSION":
      return CMsgSteamDatagramConnectionStatsClientToRouter_Flags.NOT_PRIMARY_SESSION;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramConnectionStatsClientToRouter_Flags",
      );
  }
}

export function cMsgSteamDatagramConnectionStatsClientToRouter_FlagsToJSON(
  object: CMsgSteamDatagramConnectionStatsClientToRouter_Flags,
): string {
  switch (object) {
    case CMsgSteamDatagramConnectionStatsClientToRouter_Flags.ACK_REQUEST_RELAY:
      return "ACK_REQUEST_RELAY";
    case CMsgSteamDatagramConnectionStatsClientToRouter_Flags.ACK_REQUEST_E2E:
      return "ACK_REQUEST_E2E";
    case CMsgSteamDatagramConnectionStatsClientToRouter_Flags.ACK_REQUEST_IMMEDIATE:
      return "ACK_REQUEST_IMMEDIATE";
    case CMsgSteamDatagramConnectionStatsClientToRouter_Flags.NOT_PRIMARY_SESSION:
      return "NOT_PRIMARY_SESSION";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramConnectionStatsClientToRouter_Flags",
      );
  }
}

export interface CMsgSteamDatagramConnectionStatsRouterToClient {
  qualityRelay: CMsgSteamDatagramConnectionQuality | undefined;
  qualityE2e: CMsgSteamDatagramConnectionQuality | undefined;
  secondsUntilShutdown: number;
  migrateRequestIp: number;
  migrateRequestPort: number;
  scoringPenaltyRelayCluster: number;
  ackRelay: number[];
  legacyAckE2e: number[];
  flags: number;
  clientConnectionId: number;
  seqNumR2c: number;
  seqNumE2e: number;
}

export enum CMsgSteamDatagramConnectionStatsRouterToClient_Flags {
  ACK_REQUEST_RELAY = 1,
  ACK_REQUEST_E2E = 2,
  ACK_REQUEST_IMMEDIATE = 4,
}

export function cMsgSteamDatagramConnectionStatsRouterToClient_FlagsFromJSON(
  object: any,
): CMsgSteamDatagramConnectionStatsRouterToClient_Flags {
  switch (object) {
    case 1:
    case "ACK_REQUEST_RELAY":
      return CMsgSteamDatagramConnectionStatsRouterToClient_Flags.ACK_REQUEST_RELAY;
    case 2:
    case "ACK_REQUEST_E2E":
      return CMsgSteamDatagramConnectionStatsRouterToClient_Flags.ACK_REQUEST_E2E;
    case 4:
    case "ACK_REQUEST_IMMEDIATE":
      return CMsgSteamDatagramConnectionStatsRouterToClient_Flags.ACK_REQUEST_IMMEDIATE;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramConnectionStatsRouterToClient_Flags",
      );
  }
}

export function cMsgSteamDatagramConnectionStatsRouterToClient_FlagsToJSON(
  object: CMsgSteamDatagramConnectionStatsRouterToClient_Flags,
): string {
  switch (object) {
    case CMsgSteamDatagramConnectionStatsRouterToClient_Flags.ACK_REQUEST_RELAY:
      return "ACK_REQUEST_RELAY";
    case CMsgSteamDatagramConnectionStatsRouterToClient_Flags.ACK_REQUEST_E2E:
      return "ACK_REQUEST_E2E";
    case CMsgSteamDatagramConnectionStatsRouterToClient_Flags.ACK_REQUEST_IMMEDIATE:
      return "ACK_REQUEST_IMMEDIATE";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramConnectionStatsRouterToClient_Flags",
      );
  }
}

export interface CMsgSteamDatagramConnectionStatsRouterToServer {
  qualityRelay: CMsgSteamDatagramConnectionQuality | undefined;
  qualityE2e: CMsgSteamDatagramConnectionQuality | undefined;
  ackRelay: number[];
  legacyAckE2e: number[];
  flags: number;
  seqNumR2s: number;
  seqNumE2e: number;
  clientIdentityString: string;
  legacyClientSteamId: string;
  relaySessionId: number;
  clientConnectionId: number;
  serverConnectionId: number;
  routingSecret: string;
}

export enum CMsgSteamDatagramConnectionStatsRouterToServer_Flags {
  ACK_REQUEST_RELAY = 1,
  ACK_REQUEST_E2E = 2,
  ACK_REQUEST_IMMEDIATE = 4,
}

export function cMsgSteamDatagramConnectionStatsRouterToServer_FlagsFromJSON(
  object: any,
): CMsgSteamDatagramConnectionStatsRouterToServer_Flags {
  switch (object) {
    case 1:
    case "ACK_REQUEST_RELAY":
      return CMsgSteamDatagramConnectionStatsRouterToServer_Flags.ACK_REQUEST_RELAY;
    case 2:
    case "ACK_REQUEST_E2E":
      return CMsgSteamDatagramConnectionStatsRouterToServer_Flags.ACK_REQUEST_E2E;
    case 4:
    case "ACK_REQUEST_IMMEDIATE":
      return CMsgSteamDatagramConnectionStatsRouterToServer_Flags.ACK_REQUEST_IMMEDIATE;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramConnectionStatsRouterToServer_Flags",
      );
  }
}

export function cMsgSteamDatagramConnectionStatsRouterToServer_FlagsToJSON(
  object: CMsgSteamDatagramConnectionStatsRouterToServer_Flags,
): string {
  switch (object) {
    case CMsgSteamDatagramConnectionStatsRouterToServer_Flags.ACK_REQUEST_RELAY:
      return "ACK_REQUEST_RELAY";
    case CMsgSteamDatagramConnectionStatsRouterToServer_Flags.ACK_REQUEST_E2E:
      return "ACK_REQUEST_E2E";
    case CMsgSteamDatagramConnectionStatsRouterToServer_Flags.ACK_REQUEST_IMMEDIATE:
      return "ACK_REQUEST_IMMEDIATE";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramConnectionStatsRouterToServer_Flags",
      );
  }
}

export interface CMsgSteamDatagramConnectionStatsServerToRouter {
  qualityRelay: CMsgSteamDatagramConnectionQuality | undefined;
  qualityE2e: CMsgSteamDatagramConnectionQuality | undefined;
  ackRelay: number[];
  legacyAckE2e: number[];
  flags: number;
  seqNumS2r: number;
  seqNumE2e: number;
  relaySessionId: number;
  clientConnectionId: number;
  serverConnectionId: number;
}

export enum CMsgSteamDatagramConnectionStatsServerToRouter_Flags {
  ACK_REQUEST_RELAY = 1,
  ACK_REQUEST_E2E = 2,
  ACK_REQUEST_IMMEDIATE = 4,
}

export function cMsgSteamDatagramConnectionStatsServerToRouter_FlagsFromJSON(
  object: any,
): CMsgSteamDatagramConnectionStatsServerToRouter_Flags {
  switch (object) {
    case 1:
    case "ACK_REQUEST_RELAY":
      return CMsgSteamDatagramConnectionStatsServerToRouter_Flags.ACK_REQUEST_RELAY;
    case 2:
    case "ACK_REQUEST_E2E":
      return CMsgSteamDatagramConnectionStatsServerToRouter_Flags.ACK_REQUEST_E2E;
    case 4:
    case "ACK_REQUEST_IMMEDIATE":
      return CMsgSteamDatagramConnectionStatsServerToRouter_Flags.ACK_REQUEST_IMMEDIATE;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramConnectionStatsServerToRouter_Flags",
      );
  }
}

export function cMsgSteamDatagramConnectionStatsServerToRouter_FlagsToJSON(
  object: CMsgSteamDatagramConnectionStatsServerToRouter_Flags,
): string {
  switch (object) {
    case CMsgSteamDatagramConnectionStatsServerToRouter_Flags.ACK_REQUEST_RELAY:
      return "ACK_REQUEST_RELAY";
    case CMsgSteamDatagramConnectionStatsServerToRouter_Flags.ACK_REQUEST_E2E:
      return "ACK_REQUEST_E2E";
    case CMsgSteamDatagramConnectionStatsServerToRouter_Flags.ACK_REQUEST_IMMEDIATE:
      return "ACK_REQUEST_IMMEDIATE";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramConnectionStatsServerToRouter_Flags",
      );
  }
}

export interface CMsgSteamDatagramP2PSessionRequestBody {
  challengeTime: number;
  challenge: string;
  clientConnectionId: number;
  legacyPeerSteamId: string;
  peerIdentityString: string;
  peerConnectionId: number;
  encryptedData: Buffer;
  encryptionYourPublicKeyLeadByte: number;
  encryptionMyEphemeralPublicKey: Buffer;
  protocolVersion: number;
  networkConfigVersion: string;
  platform: string;
  build: string;
}

export interface CMsgSteamDatagramP2PSessionRequestBody_EncryptedData {
  peerIdentityString: string;
}

export interface CMsgSteamDatagramP2PSessionRequest {
  cert: CMsgSteamDatagramCertificateSigned | undefined;
  body: Buffer;
  signature: Buffer;
}

export interface CMsgSteamDatagramP2PSessionEstablished {
  connectionId: number;
  secondsUntilShutdown: number;
  relayRoutingToken: Buffer;
  seqNumR2c: number;
}

export interface CMsgSteamDatagramConnectionStatsP2PClientToRouter {
  qualityRelay: CMsgSteamDatagramConnectionQuality | undefined;
  qualityE2e: CMsgSteamDatagramConnectionQuality | undefined;
  p2pRoutingSummary: CMsgSteamDatagramP2PRoutingSummary | undefined;
  ackRelay: number[];
  legacyAckE2e: number[];
  flags: number;
  forwardTargetRelayRoutingToken: Buffer;
  forwardTargetRevision: number;
  routes: Buffer;
  ackPeerRoutesRevision: number;
  connectionId: number;
  seqNumC2r: number;
  seqNumE2e: number;
}

export enum CMsgSteamDatagramConnectionStatsP2PClientToRouter_Flags {
  ACK_REQUEST_RELAY = 1,
  ACK_REQUEST_E2E = 2,
  ACK_REQUEST_IMMEDIATE = 4,
  NOT_PRIMARY_SESSION = 8,
  NOT_PRIMARY_TRANSPORT_E2E = 16,
}

export function cMsgSteamDatagramConnectionStatsP2PClientToRouter_FlagsFromJSON(
  object: any,
): CMsgSteamDatagramConnectionStatsP2PClientToRouter_Flags {
  switch (object) {
    case 1:
    case "ACK_REQUEST_RELAY":
      return CMsgSteamDatagramConnectionStatsP2PClientToRouter_Flags.ACK_REQUEST_RELAY;
    case 2:
    case "ACK_REQUEST_E2E":
      return CMsgSteamDatagramConnectionStatsP2PClientToRouter_Flags.ACK_REQUEST_E2E;
    case 4:
    case "ACK_REQUEST_IMMEDIATE":
      return CMsgSteamDatagramConnectionStatsP2PClientToRouter_Flags.ACK_REQUEST_IMMEDIATE;
    case 8:
    case "NOT_PRIMARY_SESSION":
      return CMsgSteamDatagramConnectionStatsP2PClientToRouter_Flags.NOT_PRIMARY_SESSION;
    case 16:
    case "NOT_PRIMARY_TRANSPORT_E2E":
      return CMsgSteamDatagramConnectionStatsP2PClientToRouter_Flags.NOT_PRIMARY_TRANSPORT_E2E;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramConnectionStatsP2PClientToRouter_Flags",
      );
  }
}

export function cMsgSteamDatagramConnectionStatsP2PClientToRouter_FlagsToJSON(
  object: CMsgSteamDatagramConnectionStatsP2PClientToRouter_Flags,
): string {
  switch (object) {
    case CMsgSteamDatagramConnectionStatsP2PClientToRouter_Flags.ACK_REQUEST_RELAY:
      return "ACK_REQUEST_RELAY";
    case CMsgSteamDatagramConnectionStatsP2PClientToRouter_Flags.ACK_REQUEST_E2E:
      return "ACK_REQUEST_E2E";
    case CMsgSteamDatagramConnectionStatsP2PClientToRouter_Flags.ACK_REQUEST_IMMEDIATE:
      return "ACK_REQUEST_IMMEDIATE";
    case CMsgSteamDatagramConnectionStatsP2PClientToRouter_Flags.NOT_PRIMARY_SESSION:
      return "NOT_PRIMARY_SESSION";
    case CMsgSteamDatagramConnectionStatsP2PClientToRouter_Flags.NOT_PRIMARY_TRANSPORT_E2E:
      return "NOT_PRIMARY_TRANSPORT_E2E";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramConnectionStatsP2PClientToRouter_Flags",
      );
  }
}

export interface CMsgSteamDatagramConnectionStatsP2PRouterToClient {
  qualityRelay: CMsgSteamDatagramConnectionQuality | undefined;
  qualityE2e: CMsgSteamDatagramConnectionQuality | undefined;
  secondsUntilShutdown: number;
  migrateRequestIp: number;
  migrateRequestPort: number;
  scoringPenaltyRelayCluster: number;
  ackRelay: number[];
  legacyAckE2e: number[];
  flags: number;
  ackForwardTargetRevision: number;
  routes: Buffer;
  ackPeerRoutesRevision: number;
  connectionId: number;
  seqNumR2c: number;
  seqNumE2e: number;
}

export enum CMsgSteamDatagramConnectionStatsP2PRouterToClient_Flags {
  ACK_REQUEST_RELAY = 1,
  ACK_REQUEST_E2E = 2,
  ACK_REQUEST_IMMEDIATE = 4,
  NOT_PRIMARY_TRANSPORT_E2E = 16,
}

export function cMsgSteamDatagramConnectionStatsP2PRouterToClient_FlagsFromJSON(
  object: any,
): CMsgSteamDatagramConnectionStatsP2PRouterToClient_Flags {
  switch (object) {
    case 1:
    case "ACK_REQUEST_RELAY":
      return CMsgSteamDatagramConnectionStatsP2PRouterToClient_Flags.ACK_REQUEST_RELAY;
    case 2:
    case "ACK_REQUEST_E2E":
      return CMsgSteamDatagramConnectionStatsP2PRouterToClient_Flags.ACK_REQUEST_E2E;
    case 4:
    case "ACK_REQUEST_IMMEDIATE":
      return CMsgSteamDatagramConnectionStatsP2PRouterToClient_Flags.ACK_REQUEST_IMMEDIATE;
    case 16:
    case "NOT_PRIMARY_TRANSPORT_E2E":
      return CMsgSteamDatagramConnectionStatsP2PRouterToClient_Flags.NOT_PRIMARY_TRANSPORT_E2E;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramConnectionStatsP2PRouterToClient_Flags",
      );
  }
}

export function cMsgSteamDatagramConnectionStatsP2PRouterToClient_FlagsToJSON(
  object: CMsgSteamDatagramConnectionStatsP2PRouterToClient_Flags,
): string {
  switch (object) {
    case CMsgSteamDatagramConnectionStatsP2PRouterToClient_Flags.ACK_REQUEST_RELAY:
      return "ACK_REQUEST_RELAY";
    case CMsgSteamDatagramConnectionStatsP2PRouterToClient_Flags.ACK_REQUEST_E2E:
      return "ACK_REQUEST_E2E";
    case CMsgSteamDatagramConnectionStatsP2PRouterToClient_Flags.ACK_REQUEST_IMMEDIATE:
      return "ACK_REQUEST_IMMEDIATE";
    case CMsgSteamDatagramConnectionStatsP2PRouterToClient_Flags.NOT_PRIMARY_TRANSPORT_E2E:
      return "NOT_PRIMARY_TRANSPORT_E2E";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramConnectionStatsP2PRouterToClient_Flags",
      );
  }
}

export interface CMsgSteamDatagramP2PBadRouteRouterToClient {
  connectionId: number;
  failedRelayRoutingToken: Buffer;
  ackForwardTargetRevision: number;
  kludgePad: string;
}

export interface CMsgSteamDatagramP2PRoutes {
  relayClusters: CMsgSteamDatagramP2PRoutes_RelayCluster[];
  routes: CMsgSteamDatagramP2PRoutes_Route[];
  revision: number;
}

export interface CMsgSteamDatagramP2PRoutes_RelayCluster {
  popId: number;
  pingMs: number;
  scorePenalty: number;
  sessionRelayRoutingToken: Buffer;
}

export interface CMsgSteamDatagramP2PRoutes_Route {
  myPopId: number;
  yourPopId: number;
  legacyScore: number;
  interiorScore: number;
}

export interface CMsgSteamDatagramSetSecondaryAddressRequest {
  clientMainIp: number;
  clientMainPort: number;
  clientConnectionId: number;
  clientIdentity: string;
  requestSendDuplication: boolean;
  kludgePad: Buffer;
}

export interface CMsgSteamDatagramSetSecondaryAddressResult {
  success: boolean;
  message: string;
}

function createBaseCMsgSteamNetworkingIPAddress(): CMsgSteamNetworkingIPAddress {
  return { v4: 0, v6: Buffer.alloc(0) };
}

export const CMsgSteamNetworkingIPAddress = {
  encode(message: CMsgSteamNetworkingIPAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.v4 !== 0) {
      writer.uint32(13).fixed32(message.v4);
    }
    if (message.v6.length !== 0) {
      writer.uint32(18).bytes(message.v6);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamNetworkingIPAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamNetworkingIPAddress();
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

  fromJSON(object: any): CMsgSteamNetworkingIPAddress {
    return {
      v4: isSet(object.v4) ? Number(object.v4) : 0,
      v6: isSet(object.v6) ? Buffer.from(bytesFromBase64(object.v6)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgSteamNetworkingIPAddress): unknown {
    const obj: any = {};
    message.v4 !== undefined && (obj.v4 = Math.round(message.v4));
    message.v6 !== undefined && (obj.v6 = base64FromBytes(message.v6 !== undefined ? message.v6 : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamNetworkingIPAddress>): CMsgSteamNetworkingIPAddress {
    return CMsgSteamNetworkingIPAddress.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamNetworkingIPAddress>): CMsgSteamNetworkingIPAddress {
    const message = createBaseCMsgSteamNetworkingIPAddress();
    message.v4 = object.v4 ?? 0;
    message.v6 = object.v6 ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgSteamDatagramSignedMessageGeneric(): CMsgSteamDatagramSignedMessageGeneric {
  return { cert: undefined, signedData: Buffer.alloc(0), signature: Buffer.alloc(0), dummyPad: Buffer.alloc(0) };
}

export const CMsgSteamDatagramSignedMessageGeneric = {
  encode(message: CMsgSteamDatagramSignedMessageGeneric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cert !== undefined) {
      CMsgSteamDatagramCertificateSigned.encode(message.cert, writer.uint32(10).fork()).ldelim();
    }
    if (message.signedData.length !== 0) {
      writer.uint32(18).bytes(message.signedData);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    if (message.dummyPad.length !== 0) {
      writer.uint32(8186).bytes(message.dummyPad);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramSignedMessageGeneric {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramSignedMessageGeneric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.cert = CMsgSteamDatagramCertificateSigned.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.signedData = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.signature = reader.bytes() as Buffer;
          continue;
        case 1023:
          if (tag != 8186) {
            break;
          }

          message.dummyPad = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramSignedMessageGeneric {
    return {
      cert: isSet(object.cert) ? CMsgSteamDatagramCertificateSigned.fromJSON(object.cert) : undefined,
      signedData: isSet(object.signedData) ? Buffer.from(bytesFromBase64(object.signedData)) : Buffer.alloc(0),
      signature: isSet(object.signature) ? Buffer.from(bytesFromBase64(object.signature)) : Buffer.alloc(0),
      dummyPad: isSet(object.dummyPad) ? Buffer.from(bytesFromBase64(object.dummyPad)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgSteamDatagramSignedMessageGeneric): unknown {
    const obj: any = {};
    message.cert !== undefined &&
      (obj.cert = message.cert ? CMsgSteamDatagramCertificateSigned.toJSON(message.cert) : undefined);
    message.signedData !== undefined &&
      (obj.signedData = base64FromBytes(message.signedData !== undefined ? message.signedData : Buffer.alloc(0)));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : Buffer.alloc(0)));
    message.dummyPad !== undefined &&
      (obj.dummyPad = base64FromBytes(message.dummyPad !== undefined ? message.dummyPad : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramSignedMessageGeneric>): CMsgSteamDatagramSignedMessageGeneric {
    return CMsgSteamDatagramSignedMessageGeneric.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramSignedMessageGeneric>): CMsgSteamDatagramSignedMessageGeneric {
    const message = createBaseCMsgSteamDatagramSignedMessageGeneric();
    message.cert = (object.cert !== undefined && object.cert !== null)
      ? CMsgSteamDatagramCertificateSigned.fromPartial(object.cert)
      : undefined;
    message.signedData = object.signedData ?? Buffer.alloc(0);
    message.signature = object.signature ?? Buffer.alloc(0);
    message.dummyPad = object.dummyPad ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgSteamDatagramRouterPingReply(): CMsgSteamDatagramRouterPingReply {
  return {
    clientTimestamp: 0,
    latencyDatacenterIds: [],
    latencyPingMs: [],
    latencyDatacenterIdsP2p: [],
    latencyPingMsP2p: [],
    yourPublicIp: 0,
    yourPublicPort: 0,
    serverTime: 0,
    challenge: "0",
    secondsUntilShutdown: 0,
    clientCookie: 0,
    scoringPenaltyRelayCluster: 0,
    flags: 0,
    routeExceptions: [],
    altAddresses: [],
  };
}

export const CMsgSteamDatagramRouterPingReply = {
  encode(message: CMsgSteamDatagramRouterPingReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientTimestamp !== 0) {
      writer.uint32(13).fixed32(message.clientTimestamp);
    }
    writer.uint32(18).fork();
    for (const v of message.latencyDatacenterIds) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.latencyPingMs) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(114).fork();
    for (const v of message.latencyDatacenterIdsP2p) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(122).fork();
    for (const v of message.latencyPingMsP2p) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.yourPublicIp !== 0) {
      writer.uint32(37).fixed32(message.yourPublicIp);
    }
    if (message.yourPublicPort !== 0) {
      writer.uint32(93).fixed32(message.yourPublicPort);
    }
    if (message.serverTime !== 0) {
      writer.uint32(45).fixed32(message.serverTime);
    }
    if (message.challenge !== "0") {
      writer.uint32(49).fixed64(message.challenge);
    }
    if (message.secondsUntilShutdown !== 0) {
      writer.uint32(56).uint32(message.secondsUntilShutdown);
    }
    if (message.clientCookie !== 0) {
      writer.uint32(69).fixed32(message.clientCookie);
    }
    if (message.scoringPenaltyRelayCluster !== 0) {
      writer.uint32(72).uint32(message.scoringPenaltyRelayCluster);
    }
    if (message.flags !== 0) {
      writer.uint32(96).uint32(message.flags);
    }
    for (const v of message.routeExceptions) {
      CMsgSteamDatagramRouterPingReply_RouteException.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.altAddresses) {
      CMsgSteamDatagramRouterPingReply_AltAddress.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramRouterPingReply {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramRouterPingReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.clientTimestamp = reader.fixed32();
          continue;
        case 2:
          if (tag == 21) {
            message.latencyDatacenterIds.push(reader.fixed32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.latencyDatacenterIds.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 3:
          if (tag == 24) {
            message.latencyPingMs.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.latencyPingMs.push(reader.uint32());
            }

            continue;
          }

          break;
        case 14:
          if (tag == 117) {
            message.latencyDatacenterIdsP2p.push(reader.fixed32());
            continue;
          }

          if (tag == 114) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.latencyDatacenterIdsP2p.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 15:
          if (tag == 120) {
            message.latencyPingMsP2p.push(reader.uint32());
            continue;
          }

          if (tag == 122) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.latencyPingMsP2p.push(reader.uint32());
            }

            continue;
          }

          break;
        case 4:
          if (tag != 37) {
            break;
          }

          message.yourPublicIp = reader.fixed32();
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.yourPublicPort = reader.fixed32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.serverTime = reader.fixed32();
          continue;
        case 6:
          if (tag != 49) {
            break;
          }

          message.challenge = longToString(reader.fixed64() as Long);
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.secondsUntilShutdown = reader.uint32();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.clientCookie = reader.fixed32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.scoringPenaltyRelayCluster = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.routeExceptions.push(CMsgSteamDatagramRouterPingReply_RouteException.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.altAddresses.push(CMsgSteamDatagramRouterPingReply_AltAddress.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramRouterPingReply {
    return {
      clientTimestamp: isSet(object.clientTimestamp) ? Number(object.clientTimestamp) : 0,
      latencyDatacenterIds: Array.isArray(object?.latencyDatacenterIds)
        ? object.latencyDatacenterIds.map((e: any) => Number(e))
        : [],
      latencyPingMs: Array.isArray(object?.latencyPingMs) ? object.latencyPingMs.map((e: any) => Number(e)) : [],
      latencyDatacenterIdsP2p: Array.isArray(object?.latencyDatacenterIdsP2p)
        ? object.latencyDatacenterIdsP2p.map((e: any) => Number(e))
        : [],
      latencyPingMsP2p: Array.isArray(object?.latencyPingMsP2p)
        ? object.latencyPingMsP2p.map((e: any) => Number(e))
        : [],
      yourPublicIp: isSet(object.yourPublicIp) ? Number(object.yourPublicIp) : 0,
      yourPublicPort: isSet(object.yourPublicPort) ? Number(object.yourPublicPort) : 0,
      serverTime: isSet(object.serverTime) ? Number(object.serverTime) : 0,
      challenge: isSet(object.challenge) ? String(object.challenge) : "0",
      secondsUntilShutdown: isSet(object.secondsUntilShutdown) ? Number(object.secondsUntilShutdown) : 0,
      clientCookie: isSet(object.clientCookie) ? Number(object.clientCookie) : 0,
      scoringPenaltyRelayCluster: isSet(object.scoringPenaltyRelayCluster)
        ? Number(object.scoringPenaltyRelayCluster)
        : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      routeExceptions: Array.isArray(object?.routeExceptions)
        ? object.routeExceptions.map((e: any) => CMsgSteamDatagramRouterPingReply_RouteException.fromJSON(e))
        : [],
      altAddresses: Array.isArray(object?.altAddresses)
        ? object.altAddresses.map((e: any) => CMsgSteamDatagramRouterPingReply_AltAddress.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSteamDatagramRouterPingReply): unknown {
    const obj: any = {};
    message.clientTimestamp !== undefined && (obj.clientTimestamp = Math.round(message.clientTimestamp));
    if (message.latencyDatacenterIds) {
      obj.latencyDatacenterIds = message.latencyDatacenterIds.map((e) => Math.round(e));
    } else {
      obj.latencyDatacenterIds = [];
    }
    if (message.latencyPingMs) {
      obj.latencyPingMs = message.latencyPingMs.map((e) => Math.round(e));
    } else {
      obj.latencyPingMs = [];
    }
    if (message.latencyDatacenterIdsP2p) {
      obj.latencyDatacenterIdsP2p = message.latencyDatacenterIdsP2p.map((e) => Math.round(e));
    } else {
      obj.latencyDatacenterIdsP2p = [];
    }
    if (message.latencyPingMsP2p) {
      obj.latencyPingMsP2p = message.latencyPingMsP2p.map((e) => Math.round(e));
    } else {
      obj.latencyPingMsP2p = [];
    }
    message.yourPublicIp !== undefined && (obj.yourPublicIp = Math.round(message.yourPublicIp));
    message.yourPublicPort !== undefined && (obj.yourPublicPort = Math.round(message.yourPublicPort));
    message.serverTime !== undefined && (obj.serverTime = Math.round(message.serverTime));
    message.challenge !== undefined && (obj.challenge = message.challenge);
    message.secondsUntilShutdown !== undefined && (obj.secondsUntilShutdown = Math.round(message.secondsUntilShutdown));
    message.clientCookie !== undefined && (obj.clientCookie = Math.round(message.clientCookie));
    message.scoringPenaltyRelayCluster !== undefined &&
      (obj.scoringPenaltyRelayCluster = Math.round(message.scoringPenaltyRelayCluster));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    if (message.routeExceptions) {
      obj.routeExceptions = message.routeExceptions.map((e) =>
        e ? CMsgSteamDatagramRouterPingReply_RouteException.toJSON(e) : undefined
      );
    } else {
      obj.routeExceptions = [];
    }
    if (message.altAddresses) {
      obj.altAddresses = message.altAddresses.map((e) =>
        e ? CMsgSteamDatagramRouterPingReply_AltAddress.toJSON(e) : undefined
      );
    } else {
      obj.altAddresses = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramRouterPingReply>): CMsgSteamDatagramRouterPingReply {
    return CMsgSteamDatagramRouterPingReply.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramRouterPingReply>): CMsgSteamDatagramRouterPingReply {
    const message = createBaseCMsgSteamDatagramRouterPingReply();
    message.clientTimestamp = object.clientTimestamp ?? 0;
    message.latencyDatacenterIds = object.latencyDatacenterIds?.map((e) => e) || [];
    message.latencyPingMs = object.latencyPingMs?.map((e) => e) || [];
    message.latencyDatacenterIdsP2p = object.latencyDatacenterIdsP2p?.map((e) => e) || [];
    message.latencyPingMsP2p = object.latencyPingMsP2p?.map((e) => e) || [];
    message.yourPublicIp = object.yourPublicIp ?? 0;
    message.yourPublicPort = object.yourPublicPort ?? 0;
    message.serverTime = object.serverTime ?? 0;
    message.challenge = object.challenge ?? "0";
    message.secondsUntilShutdown = object.secondsUntilShutdown ?? 0;
    message.clientCookie = object.clientCookie ?? 0;
    message.scoringPenaltyRelayCluster = object.scoringPenaltyRelayCluster ?? 0;
    message.flags = object.flags ?? 0;
    message.routeExceptions =
      object.routeExceptions?.map((e) => CMsgSteamDatagramRouterPingReply_RouteException.fromPartial(e)) || [];
    message.altAddresses =
      object.altAddresses?.map((e) => CMsgSteamDatagramRouterPingReply_AltAddress.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgSteamDatagramRouterPingReply_RouteException(): CMsgSteamDatagramRouterPingReply_RouteException {
  return { dataCenterId: 0, flags: 0, penalty: 0 };
}

export const CMsgSteamDatagramRouterPingReply_RouteException = {
  encode(
    message: CMsgSteamDatagramRouterPingReply_RouteException,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.dataCenterId !== 0) {
      writer.uint32(13).fixed32(message.dataCenterId);
    }
    if (message.flags !== 0) {
      writer.uint32(16).uint32(message.flags);
    }
    if (message.penalty !== 0) {
      writer.uint32(24).uint32(message.penalty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramRouterPingReply_RouteException {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramRouterPingReply_RouteException();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.dataCenterId = reader.fixed32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.penalty = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramRouterPingReply_RouteException {
    return {
      dataCenterId: isSet(object.dataCenterId) ? Number(object.dataCenterId) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      penalty: isSet(object.penalty) ? Number(object.penalty) : 0,
    };
  },

  toJSON(message: CMsgSteamDatagramRouterPingReply_RouteException): unknown {
    const obj: any = {};
    message.dataCenterId !== undefined && (obj.dataCenterId = Math.round(message.dataCenterId));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.penalty !== undefined && (obj.penalty = Math.round(message.penalty));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgSteamDatagramRouterPingReply_RouteException>,
  ): CMsgSteamDatagramRouterPingReply_RouteException {
    return CMsgSteamDatagramRouterPingReply_RouteException.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamDatagramRouterPingReply_RouteException>,
  ): CMsgSteamDatagramRouterPingReply_RouteException {
    const message = createBaseCMsgSteamDatagramRouterPingReply_RouteException();
    message.dataCenterId = object.dataCenterId ?? 0;
    message.flags = object.flags ?? 0;
    message.penalty = object.penalty ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramRouterPingReply_AltAddress(): CMsgSteamDatagramRouterPingReply_AltAddress {
  return { ipv4: 0, port: 0, penalty: 0, protocol: 0, id: "" };
}

export const CMsgSteamDatagramRouterPingReply_AltAddress = {
  encode(message: CMsgSteamDatagramRouterPingReply_AltAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ipv4 !== 0) {
      writer.uint32(13).fixed32(message.ipv4);
    }
    if (message.port !== 0) {
      writer.uint32(16).uint32(message.port);
    }
    if (message.penalty !== 0) {
      writer.uint32(24).uint32(message.penalty);
    }
    if (message.protocol !== 0) {
      writer.uint32(32).int32(message.protocol);
    }
    if (message.id !== "") {
      writer.uint32(42).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramRouterPingReply_AltAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramRouterPingReply_AltAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.ipv4 = reader.fixed32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.port = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.penalty = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.protocol = reader.int32() as any;
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramRouterPingReply_AltAddress {
    return {
      ipv4: isSet(object.ipv4) ? Number(object.ipv4) : 0,
      port: isSet(object.port) ? Number(object.port) : 0,
      penalty: isSet(object.penalty) ? Number(object.penalty) : 0,
      protocol: isSet(object.protocol)
        ? cMsgSteamDatagramRouterPingReply_AltAddress_ProtocolFromJSON(object.protocol)
        : 0,
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: CMsgSteamDatagramRouterPingReply_AltAddress): unknown {
    const obj: any = {};
    message.ipv4 !== undefined && (obj.ipv4 = Math.round(message.ipv4));
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.penalty !== undefined && (obj.penalty = Math.round(message.penalty));
    message.protocol !== undefined &&
      (obj.protocol = cMsgSteamDatagramRouterPingReply_AltAddress_ProtocolToJSON(message.protocol));
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramRouterPingReply_AltAddress>): CMsgSteamDatagramRouterPingReply_AltAddress {
    return CMsgSteamDatagramRouterPingReply_AltAddress.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamDatagramRouterPingReply_AltAddress>,
  ): CMsgSteamDatagramRouterPingReply_AltAddress {
    const message = createBaseCMsgSteamDatagramRouterPingReply_AltAddress();
    message.ipv4 = object.ipv4 ?? 0;
    message.port = object.port ?? 0;
    message.penalty = object.penalty ?? 0;
    message.protocol = object.protocol ?? 0;
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseCMsgSteamDatagramGameserverPingRequestBody(): CMsgSteamDatagramGameserverPingRequestBody {
  return {
    relayPopid: 0,
    yourPublicIp: undefined,
    yourPublicPort: 0,
    relayUnixTime: "0",
    routingSecret: "0",
    myIps: [],
    echo: Buffer.alloc(0),
  };
}

export const CMsgSteamDatagramGameserverPingRequestBody = {
  encode(message: CMsgSteamDatagramGameserverPingRequestBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relayPopid !== 0) {
      writer.uint32(13).fixed32(message.relayPopid);
    }
    if (message.yourPublicIp !== undefined) {
      CMsgSteamNetworkingIPAddress.encode(message.yourPublicIp, writer.uint32(18).fork()).ldelim();
    }
    if (message.yourPublicPort !== 0) {
      writer.uint32(24).uint32(message.yourPublicPort);
    }
    if (message.relayUnixTime !== "0") {
      writer.uint32(32).uint64(message.relayUnixTime);
    }
    if (message.routingSecret !== "0") {
      writer.uint32(41).fixed64(message.routingSecret);
    }
    for (const v of message.myIps) {
      CMsgSteamNetworkingIPAddress.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.echo.length !== 0) {
      writer.uint32(66).bytes(message.echo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramGameserverPingRequestBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramGameserverPingRequestBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.relayPopid = reader.fixed32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.yourPublicIp = CMsgSteamNetworkingIPAddress.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.yourPublicPort = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.relayUnixTime = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 41) {
            break;
          }

          message.routingSecret = longToString(reader.fixed64() as Long);
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.myIps.push(CMsgSteamNetworkingIPAddress.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.echo = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramGameserverPingRequestBody {
    return {
      relayPopid: isSet(object.relayPopid) ? Number(object.relayPopid) : 0,
      yourPublicIp: isSet(object.yourPublicIp) ? CMsgSteamNetworkingIPAddress.fromJSON(object.yourPublicIp) : undefined,
      yourPublicPort: isSet(object.yourPublicPort) ? Number(object.yourPublicPort) : 0,
      relayUnixTime: isSet(object.relayUnixTime) ? String(object.relayUnixTime) : "0",
      routingSecret: isSet(object.routingSecret) ? String(object.routingSecret) : "0",
      myIps: Array.isArray(object?.myIps) ? object.myIps.map((e: any) => CMsgSteamNetworkingIPAddress.fromJSON(e)) : [],
      echo: isSet(object.echo) ? Buffer.from(bytesFromBase64(object.echo)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgSteamDatagramGameserverPingRequestBody): unknown {
    const obj: any = {};
    message.relayPopid !== undefined && (obj.relayPopid = Math.round(message.relayPopid));
    message.yourPublicIp !== undefined &&
      (obj.yourPublicIp = message.yourPublicIp ? CMsgSteamNetworkingIPAddress.toJSON(message.yourPublicIp) : undefined);
    message.yourPublicPort !== undefined && (obj.yourPublicPort = Math.round(message.yourPublicPort));
    message.relayUnixTime !== undefined && (obj.relayUnixTime = message.relayUnixTime);
    message.routingSecret !== undefined && (obj.routingSecret = message.routingSecret);
    if (message.myIps) {
      obj.myIps = message.myIps.map((e) => e ? CMsgSteamNetworkingIPAddress.toJSON(e) : undefined);
    } else {
      obj.myIps = [];
    }
    message.echo !== undefined &&
      (obj.echo = base64FromBytes(message.echo !== undefined ? message.echo : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramGameserverPingRequestBody>): CMsgSteamDatagramGameserverPingRequestBody {
    return CMsgSteamDatagramGameserverPingRequestBody.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamDatagramGameserverPingRequestBody>,
  ): CMsgSteamDatagramGameserverPingRequestBody {
    const message = createBaseCMsgSteamDatagramGameserverPingRequestBody();
    message.relayPopid = object.relayPopid ?? 0;
    message.yourPublicIp = (object.yourPublicIp !== undefined && object.yourPublicIp !== null)
      ? CMsgSteamNetworkingIPAddress.fromPartial(object.yourPublicIp)
      : undefined;
    message.yourPublicPort = object.yourPublicPort ?? 0;
    message.relayUnixTime = object.relayUnixTime ?? "0";
    message.routingSecret = object.routingSecret ?? "0";
    message.myIps = object.myIps?.map((e) => CMsgSteamNetworkingIPAddress.fromPartial(e)) || [];
    message.echo = object.echo ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgSteamDatagramGameserverPingRequestEnvelope(): CMsgSteamDatagramGameserverPingRequestEnvelope {
  return {
    cert: undefined,
    signedData: Buffer.alloc(0),
    signature: Buffer.alloc(0),
    legacyYourPublicIp: 0,
    legacyYourPublicPort: 0,
    legacyRelayUnixTime: 0,
    legacyChallenge: "0",
    legacyRouterTimestamp: 0,
    dummyPad: Buffer.alloc(0),
  };
}

export const CMsgSteamDatagramGameserverPingRequestEnvelope = {
  encode(
    message: CMsgSteamDatagramGameserverPingRequestEnvelope,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cert !== undefined) {
      CMsgSteamDatagramCertificateSigned.encode(message.cert, writer.uint32(50).fork()).ldelim();
    }
    if (message.signedData.length !== 0) {
      writer.uint32(58).bytes(message.signedData);
    }
    if (message.signature.length !== 0) {
      writer.uint32(66).bytes(message.signature);
    }
    if (message.legacyYourPublicIp !== 0) {
      writer.uint32(13).fixed32(message.legacyYourPublicIp);
    }
    if (message.legacyYourPublicPort !== 0) {
      writer.uint32(45).fixed32(message.legacyYourPublicPort);
    }
    if (message.legacyRelayUnixTime !== 0) {
      writer.uint32(21).fixed32(message.legacyRelayUnixTime);
    }
    if (message.legacyChallenge !== "0") {
      writer.uint32(25).fixed64(message.legacyChallenge);
    }
    if (message.legacyRouterTimestamp !== 0) {
      writer.uint32(37).fixed32(message.legacyRouterTimestamp);
    }
    if (message.dummyPad.length !== 0) {
      writer.uint32(8186).bytes(message.dummyPad);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramGameserverPingRequestEnvelope {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramGameserverPingRequestEnvelope();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          if (tag != 50) {
            break;
          }

          message.cert = CMsgSteamDatagramCertificateSigned.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.signedData = reader.bytes() as Buffer;
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.signature = reader.bytes() as Buffer;
          continue;
        case 1:
          if (tag != 13) {
            break;
          }

          message.legacyYourPublicIp = reader.fixed32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.legacyYourPublicPort = reader.fixed32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.legacyRelayUnixTime = reader.fixed32();
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.legacyChallenge = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.legacyRouterTimestamp = reader.fixed32();
          continue;
        case 1023:
          if (tag != 8186) {
            break;
          }

          message.dummyPad = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramGameserverPingRequestEnvelope {
    return {
      cert: isSet(object.cert) ? CMsgSteamDatagramCertificateSigned.fromJSON(object.cert) : undefined,
      signedData: isSet(object.signedData) ? Buffer.from(bytesFromBase64(object.signedData)) : Buffer.alloc(0),
      signature: isSet(object.signature) ? Buffer.from(bytesFromBase64(object.signature)) : Buffer.alloc(0),
      legacyYourPublicIp: isSet(object.legacyYourPublicIp) ? Number(object.legacyYourPublicIp) : 0,
      legacyYourPublicPort: isSet(object.legacyYourPublicPort) ? Number(object.legacyYourPublicPort) : 0,
      legacyRelayUnixTime: isSet(object.legacyRelayUnixTime) ? Number(object.legacyRelayUnixTime) : 0,
      legacyChallenge: isSet(object.legacyChallenge) ? String(object.legacyChallenge) : "0",
      legacyRouterTimestamp: isSet(object.legacyRouterTimestamp) ? Number(object.legacyRouterTimestamp) : 0,
      dummyPad: isSet(object.dummyPad) ? Buffer.from(bytesFromBase64(object.dummyPad)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgSteamDatagramGameserverPingRequestEnvelope): unknown {
    const obj: any = {};
    message.cert !== undefined &&
      (obj.cert = message.cert ? CMsgSteamDatagramCertificateSigned.toJSON(message.cert) : undefined);
    message.signedData !== undefined &&
      (obj.signedData = base64FromBytes(message.signedData !== undefined ? message.signedData : Buffer.alloc(0)));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : Buffer.alloc(0)));
    message.legacyYourPublicIp !== undefined && (obj.legacyYourPublicIp = Math.round(message.legacyYourPublicIp));
    message.legacyYourPublicPort !== undefined && (obj.legacyYourPublicPort = Math.round(message.legacyYourPublicPort));
    message.legacyRelayUnixTime !== undefined && (obj.legacyRelayUnixTime = Math.round(message.legacyRelayUnixTime));
    message.legacyChallenge !== undefined && (obj.legacyChallenge = message.legacyChallenge);
    message.legacyRouterTimestamp !== undefined &&
      (obj.legacyRouterTimestamp = Math.round(message.legacyRouterTimestamp));
    message.dummyPad !== undefined &&
      (obj.dummyPad = base64FromBytes(message.dummyPad !== undefined ? message.dummyPad : Buffer.alloc(0)));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgSteamDatagramGameserverPingRequestEnvelope>,
  ): CMsgSteamDatagramGameserverPingRequestEnvelope {
    return CMsgSteamDatagramGameserverPingRequestEnvelope.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamDatagramGameserverPingRequestEnvelope>,
  ): CMsgSteamDatagramGameserverPingRequestEnvelope {
    const message = createBaseCMsgSteamDatagramGameserverPingRequestEnvelope();
    message.cert = (object.cert !== undefined && object.cert !== null)
      ? CMsgSteamDatagramCertificateSigned.fromPartial(object.cert)
      : undefined;
    message.signedData = object.signedData ?? Buffer.alloc(0);
    message.signature = object.signature ?? Buffer.alloc(0);
    message.legacyYourPublicIp = object.legacyYourPublicIp ?? 0;
    message.legacyYourPublicPort = object.legacyYourPublicPort ?? 0;
    message.legacyRelayUnixTime = object.legacyRelayUnixTime ?? 0;
    message.legacyChallenge = object.legacyChallenge ?? "0";
    message.legacyRouterTimestamp = object.legacyRouterTimestamp ?? 0;
    message.dummyPad = object.dummyPad ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgSteamDatagramGameserverPingReplyData(): CMsgSteamDatagramGameserverPingReplyData {
  return {
    echoRelayUnixTime: 0,
    echo: Buffer.alloc(0),
    legacyChallenge: "0",
    legacyRouterTimestamp: 0,
    dataCenterId: 0,
    appid: 0,
    protocolVersion: 0,
    build: "",
    networkConfigVersion: "0",
    myUnixTime: 0,
  };
}

export const CMsgSteamDatagramGameserverPingReplyData = {
  encode(message: CMsgSteamDatagramGameserverPingReplyData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.echoRelayUnixTime !== 0) {
      writer.uint32(21).fixed32(message.echoRelayUnixTime);
    }
    if (message.echo.length !== 0) {
      writer.uint32(66).bytes(message.echo);
    }
    if (message.legacyChallenge !== "0") {
      writer.uint32(25).fixed64(message.legacyChallenge);
    }
    if (message.legacyRouterTimestamp !== 0) {
      writer.uint32(37).fixed32(message.legacyRouterTimestamp);
    }
    if (message.dataCenterId !== 0) {
      writer.uint32(45).fixed32(message.dataCenterId);
    }
    if (message.appid !== 0) {
      writer.uint32(48).uint32(message.appid);
    }
    if (message.protocolVersion !== 0) {
      writer.uint32(56).uint32(message.protocolVersion);
    }
    if (message.build !== "") {
      writer.uint32(74).string(message.build);
    }
    if (message.networkConfigVersion !== "0") {
      writer.uint32(80).uint64(message.networkConfigVersion);
    }
    if (message.myUnixTime !== 0) {
      writer.uint32(93).fixed32(message.myUnixTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramGameserverPingReplyData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramGameserverPingReplyData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 21) {
            break;
          }

          message.echoRelayUnixTime = reader.fixed32();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.echo = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.legacyChallenge = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.legacyRouterTimestamp = reader.fixed32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.dataCenterId = reader.fixed32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.appid = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.protocolVersion = reader.uint32();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.build = reader.string();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.networkConfigVersion = longToString(reader.uint64() as Long);
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.myUnixTime = reader.fixed32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramGameserverPingReplyData {
    return {
      echoRelayUnixTime: isSet(object.echoRelayUnixTime) ? Number(object.echoRelayUnixTime) : 0,
      echo: isSet(object.echo) ? Buffer.from(bytesFromBase64(object.echo)) : Buffer.alloc(0),
      legacyChallenge: isSet(object.legacyChallenge) ? String(object.legacyChallenge) : "0",
      legacyRouterTimestamp: isSet(object.legacyRouterTimestamp) ? Number(object.legacyRouterTimestamp) : 0,
      dataCenterId: isSet(object.dataCenterId) ? Number(object.dataCenterId) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      protocolVersion: isSet(object.protocolVersion) ? Number(object.protocolVersion) : 0,
      build: isSet(object.build) ? String(object.build) : "",
      networkConfigVersion: isSet(object.networkConfigVersion) ? String(object.networkConfigVersion) : "0",
      myUnixTime: isSet(object.myUnixTime) ? Number(object.myUnixTime) : 0,
    };
  },

  toJSON(message: CMsgSteamDatagramGameserverPingReplyData): unknown {
    const obj: any = {};
    message.echoRelayUnixTime !== undefined && (obj.echoRelayUnixTime = Math.round(message.echoRelayUnixTime));
    message.echo !== undefined &&
      (obj.echo = base64FromBytes(message.echo !== undefined ? message.echo : Buffer.alloc(0)));
    message.legacyChallenge !== undefined && (obj.legacyChallenge = message.legacyChallenge);
    message.legacyRouterTimestamp !== undefined &&
      (obj.legacyRouterTimestamp = Math.round(message.legacyRouterTimestamp));
    message.dataCenterId !== undefined && (obj.dataCenterId = Math.round(message.dataCenterId));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.protocolVersion !== undefined && (obj.protocolVersion = Math.round(message.protocolVersion));
    message.build !== undefined && (obj.build = message.build);
    message.networkConfigVersion !== undefined && (obj.networkConfigVersion = message.networkConfigVersion);
    message.myUnixTime !== undefined && (obj.myUnixTime = Math.round(message.myUnixTime));
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramGameserverPingReplyData>): CMsgSteamDatagramGameserverPingReplyData {
    return CMsgSteamDatagramGameserverPingReplyData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramGameserverPingReplyData>): CMsgSteamDatagramGameserverPingReplyData {
    const message = createBaseCMsgSteamDatagramGameserverPingReplyData();
    message.echoRelayUnixTime = object.echoRelayUnixTime ?? 0;
    message.echo = object.echo ?? Buffer.alloc(0);
    message.legacyChallenge = object.legacyChallenge ?? "0";
    message.legacyRouterTimestamp = object.legacyRouterTimestamp ?? 0;
    message.dataCenterId = object.dataCenterId ?? 0;
    message.appid = object.appid ?? 0;
    message.protocolVersion = object.protocolVersion ?? 0;
    message.build = object.build ?? "";
    message.networkConfigVersion = object.networkConfigVersion ?? "0";
    message.myUnixTime = object.myUnixTime ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramNoSessionRelayToClient(): CMsgSteamDatagramNoSessionRelayToClient {
  return {
    connectionId: 0,
    yourPublicIp: 0,
    yourPublicPort: 0,
    serverTime: 0,
    challenge: "0",
    secondsUntilShutdown: 0,
  };
}

export const CMsgSteamDatagramNoSessionRelayToClient = {
  encode(message: CMsgSteamDatagramNoSessionRelayToClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(61).fixed32(message.connectionId);
    }
    if (message.yourPublicIp !== 0) {
      writer.uint32(21).fixed32(message.yourPublicIp);
    }
    if (message.yourPublicPort !== 0) {
      writer.uint32(53).fixed32(message.yourPublicPort);
    }
    if (message.serverTime !== 0) {
      writer.uint32(29).fixed32(message.serverTime);
    }
    if (message.challenge !== "0") {
      writer.uint32(33).fixed64(message.challenge);
    }
    if (message.secondsUntilShutdown !== 0) {
      writer.uint32(40).uint32(message.secondsUntilShutdown);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramNoSessionRelayToClient {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramNoSessionRelayToClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 7:
          if (tag != 61) {
            break;
          }

          message.connectionId = reader.fixed32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.yourPublicIp = reader.fixed32();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.yourPublicPort = reader.fixed32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.serverTime = reader.fixed32();
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.challenge = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.secondsUntilShutdown = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramNoSessionRelayToClient {
    return {
      connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0,
      yourPublicIp: isSet(object.yourPublicIp) ? Number(object.yourPublicIp) : 0,
      yourPublicPort: isSet(object.yourPublicPort) ? Number(object.yourPublicPort) : 0,
      serverTime: isSet(object.serverTime) ? Number(object.serverTime) : 0,
      challenge: isSet(object.challenge) ? String(object.challenge) : "0",
      secondsUntilShutdown: isSet(object.secondsUntilShutdown) ? Number(object.secondsUntilShutdown) : 0,
    };
  },

  toJSON(message: CMsgSteamDatagramNoSessionRelayToClient): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = Math.round(message.connectionId));
    message.yourPublicIp !== undefined && (obj.yourPublicIp = Math.round(message.yourPublicIp));
    message.yourPublicPort !== undefined && (obj.yourPublicPort = Math.round(message.yourPublicPort));
    message.serverTime !== undefined && (obj.serverTime = Math.round(message.serverTime));
    message.challenge !== undefined && (obj.challenge = message.challenge);
    message.secondsUntilShutdown !== undefined && (obj.secondsUntilShutdown = Math.round(message.secondsUntilShutdown));
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramNoSessionRelayToClient>): CMsgSteamDatagramNoSessionRelayToClient {
    return CMsgSteamDatagramNoSessionRelayToClient.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramNoSessionRelayToClient>): CMsgSteamDatagramNoSessionRelayToClient {
    const message = createBaseCMsgSteamDatagramNoSessionRelayToClient();
    message.connectionId = object.connectionId ?? 0;
    message.yourPublicIp = object.yourPublicIp ?? 0;
    message.yourPublicPort = object.yourPublicPort ?? 0;
    message.serverTime = object.serverTime ?? 0;
    message.challenge = object.challenge ?? "0";
    message.secondsUntilShutdown = object.secondsUntilShutdown ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramNoSessionRelayToPeer(): CMsgSteamDatagramNoSessionRelayToPeer {
  return { legacyRelaySessionId: 0, fromRelaySessionId: 0, fromConnectionId: 0, kludgePad: "0" };
}

export const CMsgSteamDatagramNoSessionRelayToPeer = {
  encode(message: CMsgSteamDatagramNoSessionRelayToPeer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.legacyRelaySessionId !== 0) {
      writer.uint32(8).uint32(message.legacyRelaySessionId);
    }
    if (message.fromRelaySessionId !== 0) {
      writer.uint32(21).fixed32(message.fromRelaySessionId);
    }
    if (message.fromConnectionId !== 0) {
      writer.uint32(61).fixed32(message.fromConnectionId);
    }
    if (message.kludgePad !== "0") {
      writer.uint32(793).fixed64(message.kludgePad);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramNoSessionRelayToPeer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramNoSessionRelayToPeer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.legacyRelaySessionId = reader.uint32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.fromRelaySessionId = reader.fixed32();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.fromConnectionId = reader.fixed32();
          continue;
        case 99:
          if (tag != 793) {
            break;
          }

          message.kludgePad = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramNoSessionRelayToPeer {
    return {
      legacyRelaySessionId: isSet(object.legacyRelaySessionId) ? Number(object.legacyRelaySessionId) : 0,
      fromRelaySessionId: isSet(object.fromRelaySessionId) ? Number(object.fromRelaySessionId) : 0,
      fromConnectionId: isSet(object.fromConnectionId) ? Number(object.fromConnectionId) : 0,
      kludgePad: isSet(object.kludgePad) ? String(object.kludgePad) : "0",
    };
  },

  toJSON(message: CMsgSteamDatagramNoSessionRelayToPeer): unknown {
    const obj: any = {};
    message.legacyRelaySessionId !== undefined && (obj.legacyRelaySessionId = Math.round(message.legacyRelaySessionId));
    message.fromRelaySessionId !== undefined && (obj.fromRelaySessionId = Math.round(message.fromRelaySessionId));
    message.fromConnectionId !== undefined && (obj.fromConnectionId = Math.round(message.fromConnectionId));
    message.kludgePad !== undefined && (obj.kludgePad = message.kludgePad);
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramNoSessionRelayToPeer>): CMsgSteamDatagramNoSessionRelayToPeer {
    return CMsgSteamDatagramNoSessionRelayToPeer.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramNoSessionRelayToPeer>): CMsgSteamDatagramNoSessionRelayToPeer {
    const message = createBaseCMsgSteamDatagramNoSessionRelayToPeer();
    message.legacyRelaySessionId = object.legacyRelaySessionId ?? 0;
    message.fromRelaySessionId = object.fromRelaySessionId ?? 0;
    message.fromConnectionId = object.fromConnectionId ?? 0;
    message.kludgePad = object.kludgePad ?? "0";
    return message;
  },
};

function createBaseCMsgSteamDatagramClientPingSampleRequest(): CMsgSteamDatagramClientPingSampleRequest {
  return { connectionId: 0 };
}

export const CMsgSteamDatagramClientPingSampleRequest = {
  encode(message: CMsgSteamDatagramClientPingSampleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(13).fixed32(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramClientPingSampleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramClientPingSampleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.connectionId = reader.fixed32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramClientPingSampleRequest {
    return { connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0 };
  },

  toJSON(message: CMsgSteamDatagramClientPingSampleRequest): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = Math.round(message.connectionId));
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramClientPingSampleRequest>): CMsgSteamDatagramClientPingSampleRequest {
    return CMsgSteamDatagramClientPingSampleRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramClientPingSampleRequest>): CMsgSteamDatagramClientPingSampleRequest {
    const message = createBaseCMsgSteamDatagramClientPingSampleRequest();
    message.connectionId = object.connectionId ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramClientPingSampleReply(): CMsgSteamDatagramClientPingSampleReply {
  return { connectionId: 0, overrideActive: false, pops: [], legacyDataCenters: [] };
}

export const CMsgSteamDatagramClientPingSampleReply = {
  encode(message: CMsgSteamDatagramClientPingSampleReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(13).fixed32(message.connectionId);
    }
    if (message.overrideActive === true) {
      writer.uint32(32).bool(message.overrideActive);
    }
    for (const v of message.pops) {
      CMsgSteamDatagramClientPingSampleReply_POP.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.legacyDataCenters) {
      CMsgSteamDatagramClientPingSampleReply_LegacyDataCenter.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramClientPingSampleReply {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramClientPingSampleReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.connectionId = reader.fixed32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.overrideActive = reader.bool();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.pops.push(CMsgSteamDatagramClientPingSampleReply_POP.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.legacyDataCenters.push(
            CMsgSteamDatagramClientPingSampleReply_LegacyDataCenter.decode(reader, reader.uint32()),
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

  fromJSON(object: any): CMsgSteamDatagramClientPingSampleReply {
    return {
      connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0,
      overrideActive: isSet(object.overrideActive) ? Boolean(object.overrideActive) : false,
      pops: Array.isArray(object?.pops)
        ? object.pops.map((e: any) => CMsgSteamDatagramClientPingSampleReply_POP.fromJSON(e))
        : [],
      legacyDataCenters: Array.isArray(object?.legacyDataCenters)
        ? object.legacyDataCenters.map((e: any) => CMsgSteamDatagramClientPingSampleReply_LegacyDataCenter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSteamDatagramClientPingSampleReply): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = Math.round(message.connectionId));
    message.overrideActive !== undefined && (obj.overrideActive = message.overrideActive);
    if (message.pops) {
      obj.pops = message.pops.map((e) => e ? CMsgSteamDatagramClientPingSampleReply_POP.toJSON(e) : undefined);
    } else {
      obj.pops = [];
    }
    if (message.legacyDataCenters) {
      obj.legacyDataCenters = message.legacyDataCenters.map((e) =>
        e ? CMsgSteamDatagramClientPingSampleReply_LegacyDataCenter.toJSON(e) : undefined
      );
    } else {
      obj.legacyDataCenters = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramClientPingSampleReply>): CMsgSteamDatagramClientPingSampleReply {
    return CMsgSteamDatagramClientPingSampleReply.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramClientPingSampleReply>): CMsgSteamDatagramClientPingSampleReply {
    const message = createBaseCMsgSteamDatagramClientPingSampleReply();
    message.connectionId = object.connectionId ?? 0;
    message.overrideActive = object.overrideActive ?? false;
    message.pops = object.pops?.map((e) => CMsgSteamDatagramClientPingSampleReply_POP.fromPartial(e)) || [];
    message.legacyDataCenters =
      object.legacyDataCenters?.map((e) => CMsgSteamDatagramClientPingSampleReply_LegacyDataCenter.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseCMsgSteamDatagramClientPingSampleReply_POP(): CMsgSteamDatagramClientPingSampleReply_POP {
  return {
    popId: 0,
    defaultFrontPingMs: 0,
    clusterPenalty: 0,
    altAddresses: [],
    defaultE2ePingMs: 0,
    defaultE2eScore: 0,
    p2pViaPeerRelayPopId: 0,
    bestDcPingMs: 0,
    bestDcScore: 0,
    bestDcViaRelayPopId: 0,
    defaultDcPingMs: 0,
    defaultDcScore: 0,
    defaultDcViaRelayPopId: 0,
    testDcPingMs: 0,
    testDcScore: 0,
    testDcViaRelayPopId: 0,
  };
}

export const CMsgSteamDatagramClientPingSampleReply_POP = {
  encode(message: CMsgSteamDatagramClientPingSampleReply_POP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.popId !== 0) {
      writer.uint32(13).fixed32(message.popId);
    }
    if (message.defaultFrontPingMs !== 0) {
      writer.uint32(16).uint32(message.defaultFrontPingMs);
    }
    if (message.clusterPenalty !== 0) {
      writer.uint32(32).uint32(message.clusterPenalty);
    }
    for (const v of message.altAddresses) {
      CMsgSteamDatagramClientPingSampleReply_POP_AltAddress.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.defaultE2ePingMs !== 0) {
      writer.uint32(24).uint32(message.defaultE2ePingMs);
    }
    if (message.defaultE2eScore !== 0) {
      writer.uint32(40).uint32(message.defaultE2eScore);
    }
    if (message.p2pViaPeerRelayPopId !== 0) {
      writer.uint32(53).fixed32(message.p2pViaPeerRelayPopId);
    }
    if (message.bestDcPingMs !== 0) {
      writer.uint32(72).uint32(message.bestDcPingMs);
    }
    if (message.bestDcScore !== 0) {
      writer.uint32(80).uint32(message.bestDcScore);
    }
    if (message.bestDcViaRelayPopId !== 0) {
      writer.uint32(93).fixed32(message.bestDcViaRelayPopId);
    }
    if (message.defaultDcPingMs !== 0) {
      writer.uint32(96).uint32(message.defaultDcPingMs);
    }
    if (message.defaultDcScore !== 0) {
      writer.uint32(104).uint32(message.defaultDcScore);
    }
    if (message.defaultDcViaRelayPopId !== 0) {
      writer.uint32(117).fixed32(message.defaultDcViaRelayPopId);
    }
    if (message.testDcPingMs !== 0) {
      writer.uint32(120).uint32(message.testDcPingMs);
    }
    if (message.testDcScore !== 0) {
      writer.uint32(128).uint32(message.testDcScore);
    }
    if (message.testDcViaRelayPopId !== 0) {
      writer.uint32(141).fixed32(message.testDcViaRelayPopId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramClientPingSampleReply_POP {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramClientPingSampleReply_POP();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.popId = reader.fixed32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.defaultFrontPingMs = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.clusterPenalty = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.altAddresses.push(
            CMsgSteamDatagramClientPingSampleReply_POP_AltAddress.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.defaultE2ePingMs = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.defaultE2eScore = reader.uint32();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.p2pViaPeerRelayPopId = reader.fixed32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.bestDcPingMs = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.bestDcScore = reader.uint32();
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.bestDcViaRelayPopId = reader.fixed32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.defaultDcPingMs = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.defaultDcScore = reader.uint32();
          continue;
        case 14:
          if (tag != 117) {
            break;
          }

          message.defaultDcViaRelayPopId = reader.fixed32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.testDcPingMs = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.testDcScore = reader.uint32();
          continue;
        case 17:
          if (tag != 141) {
            break;
          }

          message.testDcViaRelayPopId = reader.fixed32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramClientPingSampleReply_POP {
    return {
      popId: isSet(object.popId) ? Number(object.popId) : 0,
      defaultFrontPingMs: isSet(object.defaultFrontPingMs) ? Number(object.defaultFrontPingMs) : 0,
      clusterPenalty: isSet(object.clusterPenalty) ? Number(object.clusterPenalty) : 0,
      altAddresses: Array.isArray(object?.altAddresses)
        ? object.altAddresses.map((e: any) => CMsgSteamDatagramClientPingSampleReply_POP_AltAddress.fromJSON(e))
        : [],
      defaultE2ePingMs: isSet(object.defaultE2ePingMs) ? Number(object.defaultE2ePingMs) : 0,
      defaultE2eScore: isSet(object.defaultE2eScore) ? Number(object.defaultE2eScore) : 0,
      p2pViaPeerRelayPopId: isSet(object.p2pViaPeerRelayPopId) ? Number(object.p2pViaPeerRelayPopId) : 0,
      bestDcPingMs: isSet(object.bestDcPingMs) ? Number(object.bestDcPingMs) : 0,
      bestDcScore: isSet(object.bestDcScore) ? Number(object.bestDcScore) : 0,
      bestDcViaRelayPopId: isSet(object.bestDcViaRelayPopId) ? Number(object.bestDcViaRelayPopId) : 0,
      defaultDcPingMs: isSet(object.defaultDcPingMs) ? Number(object.defaultDcPingMs) : 0,
      defaultDcScore: isSet(object.defaultDcScore) ? Number(object.defaultDcScore) : 0,
      defaultDcViaRelayPopId: isSet(object.defaultDcViaRelayPopId) ? Number(object.defaultDcViaRelayPopId) : 0,
      testDcPingMs: isSet(object.testDcPingMs) ? Number(object.testDcPingMs) : 0,
      testDcScore: isSet(object.testDcScore) ? Number(object.testDcScore) : 0,
      testDcViaRelayPopId: isSet(object.testDcViaRelayPopId) ? Number(object.testDcViaRelayPopId) : 0,
    };
  },

  toJSON(message: CMsgSteamDatagramClientPingSampleReply_POP): unknown {
    const obj: any = {};
    message.popId !== undefined && (obj.popId = Math.round(message.popId));
    message.defaultFrontPingMs !== undefined && (obj.defaultFrontPingMs = Math.round(message.defaultFrontPingMs));
    message.clusterPenalty !== undefined && (obj.clusterPenalty = Math.round(message.clusterPenalty));
    if (message.altAddresses) {
      obj.altAddresses = message.altAddresses.map((e) =>
        e ? CMsgSteamDatagramClientPingSampleReply_POP_AltAddress.toJSON(e) : undefined
      );
    } else {
      obj.altAddresses = [];
    }
    message.defaultE2ePingMs !== undefined && (obj.defaultE2ePingMs = Math.round(message.defaultE2ePingMs));
    message.defaultE2eScore !== undefined && (obj.defaultE2eScore = Math.round(message.defaultE2eScore));
    message.p2pViaPeerRelayPopId !== undefined && (obj.p2pViaPeerRelayPopId = Math.round(message.p2pViaPeerRelayPopId));
    message.bestDcPingMs !== undefined && (obj.bestDcPingMs = Math.round(message.bestDcPingMs));
    message.bestDcScore !== undefined && (obj.bestDcScore = Math.round(message.bestDcScore));
    message.bestDcViaRelayPopId !== undefined && (obj.bestDcViaRelayPopId = Math.round(message.bestDcViaRelayPopId));
    message.defaultDcPingMs !== undefined && (obj.defaultDcPingMs = Math.round(message.defaultDcPingMs));
    message.defaultDcScore !== undefined && (obj.defaultDcScore = Math.round(message.defaultDcScore));
    message.defaultDcViaRelayPopId !== undefined &&
      (obj.defaultDcViaRelayPopId = Math.round(message.defaultDcViaRelayPopId));
    message.testDcPingMs !== undefined && (obj.testDcPingMs = Math.round(message.testDcPingMs));
    message.testDcScore !== undefined && (obj.testDcScore = Math.round(message.testDcScore));
    message.testDcViaRelayPopId !== undefined && (obj.testDcViaRelayPopId = Math.round(message.testDcViaRelayPopId));
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramClientPingSampleReply_POP>): CMsgSteamDatagramClientPingSampleReply_POP {
    return CMsgSteamDatagramClientPingSampleReply_POP.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamDatagramClientPingSampleReply_POP>,
  ): CMsgSteamDatagramClientPingSampleReply_POP {
    const message = createBaseCMsgSteamDatagramClientPingSampleReply_POP();
    message.popId = object.popId ?? 0;
    message.defaultFrontPingMs = object.defaultFrontPingMs ?? 0;
    message.clusterPenalty = object.clusterPenalty ?? 0;
    message.altAddresses =
      object.altAddresses?.map((e) => CMsgSteamDatagramClientPingSampleReply_POP_AltAddress.fromPartial(e)) || [];
    message.defaultE2ePingMs = object.defaultE2ePingMs ?? 0;
    message.defaultE2eScore = object.defaultE2eScore ?? 0;
    message.p2pViaPeerRelayPopId = object.p2pViaPeerRelayPopId ?? 0;
    message.bestDcPingMs = object.bestDcPingMs ?? 0;
    message.bestDcScore = object.bestDcScore ?? 0;
    message.bestDcViaRelayPopId = object.bestDcViaRelayPopId ?? 0;
    message.defaultDcPingMs = object.defaultDcPingMs ?? 0;
    message.defaultDcScore = object.defaultDcScore ?? 0;
    message.defaultDcViaRelayPopId = object.defaultDcViaRelayPopId ?? 0;
    message.testDcPingMs = object.testDcPingMs ?? 0;
    message.testDcScore = object.testDcScore ?? 0;
    message.testDcViaRelayPopId = object.testDcViaRelayPopId ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramClientPingSampleReply_POP_AltAddress(): CMsgSteamDatagramClientPingSampleReply_POP_AltAddress {
  return { id: "", frontPingMs: 0, penalty: 0 };
}

export const CMsgSteamDatagramClientPingSampleReply_POP_AltAddress = {
  encode(
    message: CMsgSteamDatagramClientPingSampleReply_POP_AltAddress,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.frontPingMs !== 0) {
      writer.uint32(16).uint32(message.frontPingMs);
    }
    if (message.penalty !== 0) {
      writer.uint32(24).uint32(message.penalty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramClientPingSampleReply_POP_AltAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramClientPingSampleReply_POP_AltAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.frontPingMs = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.penalty = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramClientPingSampleReply_POP_AltAddress {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      frontPingMs: isSet(object.frontPingMs) ? Number(object.frontPingMs) : 0,
      penalty: isSet(object.penalty) ? Number(object.penalty) : 0,
    };
  },

  toJSON(message: CMsgSteamDatagramClientPingSampleReply_POP_AltAddress): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.frontPingMs !== undefined && (obj.frontPingMs = Math.round(message.frontPingMs));
    message.penalty !== undefined && (obj.penalty = Math.round(message.penalty));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgSteamDatagramClientPingSampleReply_POP_AltAddress>,
  ): CMsgSteamDatagramClientPingSampleReply_POP_AltAddress {
    return CMsgSteamDatagramClientPingSampleReply_POP_AltAddress.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamDatagramClientPingSampleReply_POP_AltAddress>,
  ): CMsgSteamDatagramClientPingSampleReply_POP_AltAddress {
    const message = createBaseCMsgSteamDatagramClientPingSampleReply_POP_AltAddress();
    message.id = object.id ?? "";
    message.frontPingMs = object.frontPingMs ?? 0;
    message.penalty = object.penalty ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramClientPingSampleReply_LegacyDataCenter(): CMsgSteamDatagramClientPingSampleReply_LegacyDataCenter {
  return { dataCenterId: 0, bestDcViaRelayPopId: 0, bestDcPingMs: 0 };
}

export const CMsgSteamDatagramClientPingSampleReply_LegacyDataCenter = {
  encode(
    message: CMsgSteamDatagramClientPingSampleReply_LegacyDataCenter,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.dataCenterId !== 0) {
      writer.uint32(13).fixed32(message.dataCenterId);
    }
    if (message.bestDcViaRelayPopId !== 0) {
      writer.uint32(21).fixed32(message.bestDcViaRelayPopId);
    }
    if (message.bestDcPingMs !== 0) {
      writer.uint32(24).uint32(message.bestDcPingMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramClientPingSampleReply_LegacyDataCenter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramClientPingSampleReply_LegacyDataCenter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.dataCenterId = reader.fixed32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.bestDcViaRelayPopId = reader.fixed32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.bestDcPingMs = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramClientPingSampleReply_LegacyDataCenter {
    return {
      dataCenterId: isSet(object.dataCenterId) ? Number(object.dataCenterId) : 0,
      bestDcViaRelayPopId: isSet(object.bestDcViaRelayPopId) ? Number(object.bestDcViaRelayPopId) : 0,
      bestDcPingMs: isSet(object.bestDcPingMs) ? Number(object.bestDcPingMs) : 0,
    };
  },

  toJSON(message: CMsgSteamDatagramClientPingSampleReply_LegacyDataCenter): unknown {
    const obj: any = {};
    message.dataCenterId !== undefined && (obj.dataCenterId = Math.round(message.dataCenterId));
    message.bestDcViaRelayPopId !== undefined && (obj.bestDcViaRelayPopId = Math.round(message.bestDcViaRelayPopId));
    message.bestDcPingMs !== undefined && (obj.bestDcPingMs = Math.round(message.bestDcPingMs));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgSteamDatagramClientPingSampleReply_LegacyDataCenter>,
  ): CMsgSteamDatagramClientPingSampleReply_LegacyDataCenter {
    return CMsgSteamDatagramClientPingSampleReply_LegacyDataCenter.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamDatagramClientPingSampleReply_LegacyDataCenter>,
  ): CMsgSteamDatagramClientPingSampleReply_LegacyDataCenter {
    const message = createBaseCMsgSteamDatagramClientPingSampleReply_LegacyDataCenter();
    message.dataCenterId = object.dataCenterId ?? 0;
    message.bestDcViaRelayPopId = object.bestDcViaRelayPopId ?? 0;
    message.bestDcPingMs = object.bestDcPingMs ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramClientSwitchedPrimary(): CMsgSteamDatagramClientSwitchedPrimary {
  return {
    connectionId: 0,
    fromIp: 0,
    fromPort: 0,
    fromRouterCluster: 0,
    fromActiveTime: 0,
    fromActivePacketsRecv: 0,
    fromDroppedReason: "",
    gapMs: 0,
    fromQualityNow: undefined,
    toQualityNow: undefined,
    fromQualityThen: undefined,
    toQualityThen: undefined,
  };
}

export const CMsgSteamDatagramClientSwitchedPrimary = {
  encode(message: CMsgSteamDatagramClientSwitchedPrimary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(13).fixed32(message.connectionId);
    }
    if (message.fromIp !== 0) {
      writer.uint32(21).fixed32(message.fromIp);
    }
    if (message.fromPort !== 0) {
      writer.uint32(24).uint32(message.fromPort);
    }
    if (message.fromRouterCluster !== 0) {
      writer.uint32(37).fixed32(message.fromRouterCluster);
    }
    if (message.fromActiveTime !== 0) {
      writer.uint32(40).uint32(message.fromActiveTime);
    }
    if (message.fromActivePacketsRecv !== 0) {
      writer.uint32(48).uint32(message.fromActivePacketsRecv);
    }
    if (message.fromDroppedReason !== "") {
      writer.uint32(58).string(message.fromDroppedReason);
    }
    if (message.gapMs !== 0) {
      writer.uint32(64).uint32(message.gapMs);
    }
    if (message.fromQualityNow !== undefined) {
      CMsgSteamDatagramClientSwitchedPrimary_RouterQuality.encode(message.fromQualityNow, writer.uint32(74).fork())
        .ldelim();
    }
    if (message.toQualityNow !== undefined) {
      CMsgSteamDatagramClientSwitchedPrimary_RouterQuality.encode(message.toQualityNow, writer.uint32(82).fork())
        .ldelim();
    }
    if (message.fromQualityThen !== undefined) {
      CMsgSteamDatagramClientSwitchedPrimary_RouterQuality.encode(message.fromQualityThen, writer.uint32(90).fork())
        .ldelim();
    }
    if (message.toQualityThen !== undefined) {
      CMsgSteamDatagramClientSwitchedPrimary_RouterQuality.encode(message.toQualityThen, writer.uint32(98).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramClientSwitchedPrimary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramClientSwitchedPrimary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.connectionId = reader.fixed32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.fromIp = reader.fixed32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.fromPort = reader.uint32();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.fromRouterCluster = reader.fixed32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.fromActiveTime = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.fromActivePacketsRecv = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.fromDroppedReason = reader.string();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.gapMs = reader.uint32();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.fromQualityNow = CMsgSteamDatagramClientSwitchedPrimary_RouterQuality.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.toQualityNow = CMsgSteamDatagramClientSwitchedPrimary_RouterQuality.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.fromQualityThen = CMsgSteamDatagramClientSwitchedPrimary_RouterQuality.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.toQualityThen = CMsgSteamDatagramClientSwitchedPrimary_RouterQuality.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramClientSwitchedPrimary {
    return {
      connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0,
      fromIp: isSet(object.fromIp) ? Number(object.fromIp) : 0,
      fromPort: isSet(object.fromPort) ? Number(object.fromPort) : 0,
      fromRouterCluster: isSet(object.fromRouterCluster) ? Number(object.fromRouterCluster) : 0,
      fromActiveTime: isSet(object.fromActiveTime) ? Number(object.fromActiveTime) : 0,
      fromActivePacketsRecv: isSet(object.fromActivePacketsRecv) ? Number(object.fromActivePacketsRecv) : 0,
      fromDroppedReason: isSet(object.fromDroppedReason) ? String(object.fromDroppedReason) : "",
      gapMs: isSet(object.gapMs) ? Number(object.gapMs) : 0,
      fromQualityNow: isSet(object.fromQualityNow)
        ? CMsgSteamDatagramClientSwitchedPrimary_RouterQuality.fromJSON(object.fromQualityNow)
        : undefined,
      toQualityNow: isSet(object.toQualityNow)
        ? CMsgSteamDatagramClientSwitchedPrimary_RouterQuality.fromJSON(object.toQualityNow)
        : undefined,
      fromQualityThen: isSet(object.fromQualityThen)
        ? CMsgSteamDatagramClientSwitchedPrimary_RouterQuality.fromJSON(object.fromQualityThen)
        : undefined,
      toQualityThen: isSet(object.toQualityThen)
        ? CMsgSteamDatagramClientSwitchedPrimary_RouterQuality.fromJSON(object.toQualityThen)
        : undefined,
    };
  },

  toJSON(message: CMsgSteamDatagramClientSwitchedPrimary): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = Math.round(message.connectionId));
    message.fromIp !== undefined && (obj.fromIp = Math.round(message.fromIp));
    message.fromPort !== undefined && (obj.fromPort = Math.round(message.fromPort));
    message.fromRouterCluster !== undefined && (obj.fromRouterCluster = Math.round(message.fromRouterCluster));
    message.fromActiveTime !== undefined && (obj.fromActiveTime = Math.round(message.fromActiveTime));
    message.fromActivePacketsRecv !== undefined &&
      (obj.fromActivePacketsRecv = Math.round(message.fromActivePacketsRecv));
    message.fromDroppedReason !== undefined && (obj.fromDroppedReason = message.fromDroppedReason);
    message.gapMs !== undefined && (obj.gapMs = Math.round(message.gapMs));
    message.fromQualityNow !== undefined && (obj.fromQualityNow = message.fromQualityNow
      ? CMsgSteamDatagramClientSwitchedPrimary_RouterQuality.toJSON(message.fromQualityNow)
      : undefined);
    message.toQualityNow !== undefined && (obj.toQualityNow = message.toQualityNow
      ? CMsgSteamDatagramClientSwitchedPrimary_RouterQuality.toJSON(message.toQualityNow)
      : undefined);
    message.fromQualityThen !== undefined && (obj.fromQualityThen = message.fromQualityThen
      ? CMsgSteamDatagramClientSwitchedPrimary_RouterQuality.toJSON(message.fromQualityThen)
      : undefined);
    message.toQualityThen !== undefined && (obj.toQualityThen = message.toQualityThen
      ? CMsgSteamDatagramClientSwitchedPrimary_RouterQuality.toJSON(message.toQualityThen)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramClientSwitchedPrimary>): CMsgSteamDatagramClientSwitchedPrimary {
    return CMsgSteamDatagramClientSwitchedPrimary.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramClientSwitchedPrimary>): CMsgSteamDatagramClientSwitchedPrimary {
    const message = createBaseCMsgSteamDatagramClientSwitchedPrimary();
    message.connectionId = object.connectionId ?? 0;
    message.fromIp = object.fromIp ?? 0;
    message.fromPort = object.fromPort ?? 0;
    message.fromRouterCluster = object.fromRouterCluster ?? 0;
    message.fromActiveTime = object.fromActiveTime ?? 0;
    message.fromActivePacketsRecv = object.fromActivePacketsRecv ?? 0;
    message.fromDroppedReason = object.fromDroppedReason ?? "";
    message.gapMs = object.gapMs ?? 0;
    message.fromQualityNow = (object.fromQualityNow !== undefined && object.fromQualityNow !== null)
      ? CMsgSteamDatagramClientSwitchedPrimary_RouterQuality.fromPartial(object.fromQualityNow)
      : undefined;
    message.toQualityNow = (object.toQualityNow !== undefined && object.toQualityNow !== null)
      ? CMsgSteamDatagramClientSwitchedPrimary_RouterQuality.fromPartial(object.toQualityNow)
      : undefined;
    message.fromQualityThen = (object.fromQualityThen !== undefined && object.fromQualityThen !== null)
      ? CMsgSteamDatagramClientSwitchedPrimary_RouterQuality.fromPartial(object.fromQualityThen)
      : undefined;
    message.toQualityThen = (object.toQualityThen !== undefined && object.toQualityThen !== null)
      ? CMsgSteamDatagramClientSwitchedPrimary_RouterQuality.fromPartial(object.toQualityThen)
      : undefined;
    return message;
  },
};

function createBaseCMsgSteamDatagramClientSwitchedPrimary_RouterQuality(): CMsgSteamDatagramClientSwitchedPrimary_RouterQuality {
  return { score: 0, frontPing: 0, backPing: 0, secondsUntilDown: 0 };
}

export const CMsgSteamDatagramClientSwitchedPrimary_RouterQuality = {
  encode(
    message: CMsgSteamDatagramClientSwitchedPrimary_RouterQuality,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.score !== 0) {
      writer.uint32(8).uint32(message.score);
    }
    if (message.frontPing !== 0) {
      writer.uint32(16).uint32(message.frontPing);
    }
    if (message.backPing !== 0) {
      writer.uint32(24).uint32(message.backPing);
    }
    if (message.secondsUntilDown !== 0) {
      writer.uint32(32).uint32(message.secondsUntilDown);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramClientSwitchedPrimary_RouterQuality {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramClientSwitchedPrimary_RouterQuality();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.score = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.frontPing = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.backPing = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.secondsUntilDown = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramClientSwitchedPrimary_RouterQuality {
    return {
      score: isSet(object.score) ? Number(object.score) : 0,
      frontPing: isSet(object.frontPing) ? Number(object.frontPing) : 0,
      backPing: isSet(object.backPing) ? Number(object.backPing) : 0,
      secondsUntilDown: isSet(object.secondsUntilDown) ? Number(object.secondsUntilDown) : 0,
    };
  },

  toJSON(message: CMsgSteamDatagramClientSwitchedPrimary_RouterQuality): unknown {
    const obj: any = {};
    message.score !== undefined && (obj.score = Math.round(message.score));
    message.frontPing !== undefined && (obj.frontPing = Math.round(message.frontPing));
    message.backPing !== undefined && (obj.backPing = Math.round(message.backPing));
    message.secondsUntilDown !== undefined && (obj.secondsUntilDown = Math.round(message.secondsUntilDown));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgSteamDatagramClientSwitchedPrimary_RouterQuality>,
  ): CMsgSteamDatagramClientSwitchedPrimary_RouterQuality {
    return CMsgSteamDatagramClientSwitchedPrimary_RouterQuality.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamDatagramClientSwitchedPrimary_RouterQuality>,
  ): CMsgSteamDatagramClientSwitchedPrimary_RouterQuality {
    const message = createBaseCMsgSteamDatagramClientSwitchedPrimary_RouterQuality();
    message.score = object.score ?? 0;
    message.frontPing = object.frontPing ?? 0;
    message.backPing = object.backPing ?? 0;
    message.secondsUntilDown = object.secondsUntilDown ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramConnectRequest(): CMsgSteamDatagramConnectRequest {
  return {
    connectionId: 0,
    myTimestamp: "0",
    pingEstMs: 0,
    virtualPort: 0,
    gameserverRelaySessionId: 0,
    crypt: undefined,
    cert: undefined,
    routingSecret: "0",
    legacyClientSteamId: "0",
  };
}

export const CMsgSteamDatagramConnectRequest = {
  encode(message: CMsgSteamDatagramConnectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(13).fixed32(message.connectionId);
    }
    if (message.myTimestamp !== "0") {
      writer.uint32(33).fixed64(message.myTimestamp);
    }
    if (message.pingEstMs !== 0) {
      writer.uint32(40).uint32(message.pingEstMs);
    }
    if (message.virtualPort !== 0) {
      writer.uint32(72).uint32(message.virtualPort);
    }
    if (message.gameserverRelaySessionId !== 0) {
      writer.uint32(16).uint32(message.gameserverRelaySessionId);
    }
    if (message.crypt !== undefined) {
      CMsgSteamDatagramSessionCryptInfoSigned.encode(message.crypt, writer.uint32(50).fork()).ldelim();
    }
    if (message.cert !== undefined) {
      CMsgSteamDatagramCertificateSigned.encode(message.cert, writer.uint32(58).fork()).ldelim();
    }
    if (message.routingSecret !== "0") {
      writer.uint32(81).fixed64(message.routingSecret);
    }
    if (message.legacyClientSteamId !== "0") {
      writer.uint32(25).fixed64(message.legacyClientSteamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramConnectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramConnectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.connectionId = reader.fixed32();
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.myTimestamp = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.pingEstMs = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.virtualPort = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.gameserverRelaySessionId = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.crypt = CMsgSteamDatagramSessionCryptInfoSigned.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.cert = CMsgSteamDatagramCertificateSigned.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 81) {
            break;
          }

          message.routingSecret = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.legacyClientSteamId = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramConnectRequest {
    return {
      connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0,
      myTimestamp: isSet(object.myTimestamp) ? String(object.myTimestamp) : "0",
      pingEstMs: isSet(object.pingEstMs) ? Number(object.pingEstMs) : 0,
      virtualPort: isSet(object.virtualPort) ? Number(object.virtualPort) : 0,
      gameserverRelaySessionId: isSet(object.gameserverRelaySessionId) ? Number(object.gameserverRelaySessionId) : 0,
      crypt: isSet(object.crypt) ? CMsgSteamDatagramSessionCryptInfoSigned.fromJSON(object.crypt) : undefined,
      cert: isSet(object.cert) ? CMsgSteamDatagramCertificateSigned.fromJSON(object.cert) : undefined,
      routingSecret: isSet(object.routingSecret) ? String(object.routingSecret) : "0",
      legacyClientSteamId: isSet(object.legacyClientSteamId) ? String(object.legacyClientSteamId) : "0",
    };
  },

  toJSON(message: CMsgSteamDatagramConnectRequest): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = Math.round(message.connectionId));
    message.myTimestamp !== undefined && (obj.myTimestamp = message.myTimestamp);
    message.pingEstMs !== undefined && (obj.pingEstMs = Math.round(message.pingEstMs));
    message.virtualPort !== undefined && (obj.virtualPort = Math.round(message.virtualPort));
    message.gameserverRelaySessionId !== undefined &&
      (obj.gameserverRelaySessionId = Math.round(message.gameserverRelaySessionId));
    message.crypt !== undefined &&
      (obj.crypt = message.crypt ? CMsgSteamDatagramSessionCryptInfoSigned.toJSON(message.crypt) : undefined);
    message.cert !== undefined &&
      (obj.cert = message.cert ? CMsgSteamDatagramCertificateSigned.toJSON(message.cert) : undefined);
    message.routingSecret !== undefined && (obj.routingSecret = message.routingSecret);
    message.legacyClientSteamId !== undefined && (obj.legacyClientSteamId = message.legacyClientSteamId);
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramConnectRequest>): CMsgSteamDatagramConnectRequest {
    return CMsgSteamDatagramConnectRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramConnectRequest>): CMsgSteamDatagramConnectRequest {
    const message = createBaseCMsgSteamDatagramConnectRequest();
    message.connectionId = object.connectionId ?? 0;
    message.myTimestamp = object.myTimestamp ?? "0";
    message.pingEstMs = object.pingEstMs ?? 0;
    message.virtualPort = object.virtualPort ?? 0;
    message.gameserverRelaySessionId = object.gameserverRelaySessionId ?? 0;
    message.crypt = (object.crypt !== undefined && object.crypt !== null)
      ? CMsgSteamDatagramSessionCryptInfoSigned.fromPartial(object.crypt)
      : undefined;
    message.cert = (object.cert !== undefined && object.cert !== null)
      ? CMsgSteamDatagramCertificateSigned.fromPartial(object.cert)
      : undefined;
    message.routingSecret = object.routingSecret ?? "0";
    message.legacyClientSteamId = object.legacyClientSteamId ?? "0";
    return message;
  },
};

function createBaseCMsgSteamDatagramConnectOK(): CMsgSteamDatagramConnectOK {
  return {
    clientConnectionId: 0,
    serverConnectionId: 0,
    yourTimestamp: "0",
    delayTimeUsec: 0,
    gameserverRelaySessionId: 0,
    crypt: undefined,
    cert: undefined,
  };
}

export const CMsgSteamDatagramConnectOK = {
  encode(message: CMsgSteamDatagramConnectOK, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientConnectionId !== 0) {
      writer.uint32(13).fixed32(message.clientConnectionId);
    }
    if (message.serverConnectionId !== 0) {
      writer.uint32(61).fixed32(message.serverConnectionId);
    }
    if (message.yourTimestamp !== "0") {
      writer.uint32(25).fixed64(message.yourTimestamp);
    }
    if (message.delayTimeUsec !== 0) {
      writer.uint32(32).uint32(message.delayTimeUsec);
    }
    if (message.gameserverRelaySessionId !== 0) {
      writer.uint32(16).uint32(message.gameserverRelaySessionId);
    }
    if (message.crypt !== undefined) {
      CMsgSteamDatagramSessionCryptInfoSigned.encode(message.crypt, writer.uint32(42).fork()).ldelim();
    }
    if (message.cert !== undefined) {
      CMsgSteamDatagramCertificateSigned.encode(message.cert, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramConnectOK {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramConnectOK();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.clientConnectionId = reader.fixed32();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.serverConnectionId = reader.fixed32();
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.yourTimestamp = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.delayTimeUsec = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.gameserverRelaySessionId = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.crypt = CMsgSteamDatagramSessionCryptInfoSigned.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.cert = CMsgSteamDatagramCertificateSigned.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramConnectOK {
    return {
      clientConnectionId: isSet(object.clientConnectionId) ? Number(object.clientConnectionId) : 0,
      serverConnectionId: isSet(object.serverConnectionId) ? Number(object.serverConnectionId) : 0,
      yourTimestamp: isSet(object.yourTimestamp) ? String(object.yourTimestamp) : "0",
      delayTimeUsec: isSet(object.delayTimeUsec) ? Number(object.delayTimeUsec) : 0,
      gameserverRelaySessionId: isSet(object.gameserverRelaySessionId) ? Number(object.gameserverRelaySessionId) : 0,
      crypt: isSet(object.crypt) ? CMsgSteamDatagramSessionCryptInfoSigned.fromJSON(object.crypt) : undefined,
      cert: isSet(object.cert) ? CMsgSteamDatagramCertificateSigned.fromJSON(object.cert) : undefined,
    };
  },

  toJSON(message: CMsgSteamDatagramConnectOK): unknown {
    const obj: any = {};
    message.clientConnectionId !== undefined && (obj.clientConnectionId = Math.round(message.clientConnectionId));
    message.serverConnectionId !== undefined && (obj.serverConnectionId = Math.round(message.serverConnectionId));
    message.yourTimestamp !== undefined && (obj.yourTimestamp = message.yourTimestamp);
    message.delayTimeUsec !== undefined && (obj.delayTimeUsec = Math.round(message.delayTimeUsec));
    message.gameserverRelaySessionId !== undefined &&
      (obj.gameserverRelaySessionId = Math.round(message.gameserverRelaySessionId));
    message.crypt !== undefined &&
      (obj.crypt = message.crypt ? CMsgSteamDatagramSessionCryptInfoSigned.toJSON(message.crypt) : undefined);
    message.cert !== undefined &&
      (obj.cert = message.cert ? CMsgSteamDatagramCertificateSigned.toJSON(message.cert) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramConnectOK>): CMsgSteamDatagramConnectOK {
    return CMsgSteamDatagramConnectOK.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramConnectOK>): CMsgSteamDatagramConnectOK {
    const message = createBaseCMsgSteamDatagramConnectOK();
    message.clientConnectionId = object.clientConnectionId ?? 0;
    message.serverConnectionId = object.serverConnectionId ?? 0;
    message.yourTimestamp = object.yourTimestamp ?? "0";
    message.delayTimeUsec = object.delayTimeUsec ?? 0;
    message.gameserverRelaySessionId = object.gameserverRelaySessionId ?? 0;
    message.crypt = (object.crypt !== undefined && object.crypt !== null)
      ? CMsgSteamDatagramSessionCryptInfoSigned.fromPartial(object.crypt)
      : undefined;
    message.cert = (object.cert !== undefined && object.cert !== null)
      ? CMsgSteamDatagramCertificateSigned.fromPartial(object.cert)
      : undefined;
    return message;
  },
};

function createBaseCMsgSteamNetworkingP2PSDRRoutingSummary(): CMsgSteamNetworkingP2PSDRRoutingSummary {
  return {
    initialPing: 0,
    initialPingFrontLocal: 0,
    initialPingFrontRemote: 0,
    initialScore: 0,
    initialPopLocal: 0,
    initialPopRemote: 0,
    bestPing: 0,
    bestPingFrontLocal: 0,
    bestPingFrontRemote: 0,
    bestScore: 0,
    bestPopLocal: 0,
    bestPopRemote: 0,
    bestTime: 0,
    negotiationMs: 0,
    selectedSeconds: 0,
  };
}

export const CMsgSteamNetworkingP2PSDRRoutingSummary = {
  encode(message: CMsgSteamNetworkingP2PSDRRoutingSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initialPing !== 0) {
      writer.uint32(8).uint32(message.initialPing);
    }
    if (message.initialPingFrontLocal !== 0) {
      writer.uint32(16).uint32(message.initialPingFrontLocal);
    }
    if (message.initialPingFrontRemote !== 0) {
      writer.uint32(24).uint32(message.initialPingFrontRemote);
    }
    if (message.initialScore !== 0) {
      writer.uint32(32).uint32(message.initialScore);
    }
    if (message.initialPopLocal !== 0) {
      writer.uint32(45).fixed32(message.initialPopLocal);
    }
    if (message.initialPopRemote !== 0) {
      writer.uint32(53).fixed32(message.initialPopRemote);
    }
    if (message.bestPing !== 0) {
      writer.uint32(88).uint32(message.bestPing);
    }
    if (message.bestPingFrontLocal !== 0) {
      writer.uint32(96).uint32(message.bestPingFrontLocal);
    }
    if (message.bestPingFrontRemote !== 0) {
      writer.uint32(104).uint32(message.bestPingFrontRemote);
    }
    if (message.bestScore !== 0) {
      writer.uint32(112).uint32(message.bestScore);
    }
    if (message.bestPopLocal !== 0) {
      writer.uint32(125).fixed32(message.bestPopLocal);
    }
    if (message.bestPopRemote !== 0) {
      writer.uint32(133).fixed32(message.bestPopRemote);
    }
    if (message.bestTime !== 0) {
      writer.uint32(136).uint32(message.bestTime);
    }
    if (message.negotiationMs !== 0) {
      writer.uint32(56).uint32(message.negotiationMs);
    }
    if (message.selectedSeconds !== 0) {
      writer.uint32(64).uint32(message.selectedSeconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamNetworkingP2PSDRRoutingSummary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamNetworkingP2PSDRRoutingSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.initialPing = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.initialPingFrontLocal = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.initialPingFrontRemote = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.initialScore = reader.uint32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.initialPopLocal = reader.fixed32();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.initialPopRemote = reader.fixed32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.bestPing = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.bestPingFrontLocal = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.bestPingFrontRemote = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.bestScore = reader.uint32();
          continue;
        case 15:
          if (tag != 125) {
            break;
          }

          message.bestPopLocal = reader.fixed32();
          continue;
        case 16:
          if (tag != 133) {
            break;
          }

          message.bestPopRemote = reader.fixed32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.bestTime = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.negotiationMs = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.selectedSeconds = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamNetworkingP2PSDRRoutingSummary {
    return {
      initialPing: isSet(object.initialPing) ? Number(object.initialPing) : 0,
      initialPingFrontLocal: isSet(object.initialPingFrontLocal) ? Number(object.initialPingFrontLocal) : 0,
      initialPingFrontRemote: isSet(object.initialPingFrontRemote) ? Number(object.initialPingFrontRemote) : 0,
      initialScore: isSet(object.initialScore) ? Number(object.initialScore) : 0,
      initialPopLocal: isSet(object.initialPopLocal) ? Number(object.initialPopLocal) : 0,
      initialPopRemote: isSet(object.initialPopRemote) ? Number(object.initialPopRemote) : 0,
      bestPing: isSet(object.bestPing) ? Number(object.bestPing) : 0,
      bestPingFrontLocal: isSet(object.bestPingFrontLocal) ? Number(object.bestPingFrontLocal) : 0,
      bestPingFrontRemote: isSet(object.bestPingFrontRemote) ? Number(object.bestPingFrontRemote) : 0,
      bestScore: isSet(object.bestScore) ? Number(object.bestScore) : 0,
      bestPopLocal: isSet(object.bestPopLocal) ? Number(object.bestPopLocal) : 0,
      bestPopRemote: isSet(object.bestPopRemote) ? Number(object.bestPopRemote) : 0,
      bestTime: isSet(object.bestTime) ? Number(object.bestTime) : 0,
      negotiationMs: isSet(object.negotiationMs) ? Number(object.negotiationMs) : 0,
      selectedSeconds: isSet(object.selectedSeconds) ? Number(object.selectedSeconds) : 0,
    };
  },

  toJSON(message: CMsgSteamNetworkingP2PSDRRoutingSummary): unknown {
    const obj: any = {};
    message.initialPing !== undefined && (obj.initialPing = Math.round(message.initialPing));
    message.initialPingFrontLocal !== undefined &&
      (obj.initialPingFrontLocal = Math.round(message.initialPingFrontLocal));
    message.initialPingFrontRemote !== undefined &&
      (obj.initialPingFrontRemote = Math.round(message.initialPingFrontRemote));
    message.initialScore !== undefined && (obj.initialScore = Math.round(message.initialScore));
    message.initialPopLocal !== undefined && (obj.initialPopLocal = Math.round(message.initialPopLocal));
    message.initialPopRemote !== undefined && (obj.initialPopRemote = Math.round(message.initialPopRemote));
    message.bestPing !== undefined && (obj.bestPing = Math.round(message.bestPing));
    message.bestPingFrontLocal !== undefined && (obj.bestPingFrontLocal = Math.round(message.bestPingFrontLocal));
    message.bestPingFrontRemote !== undefined && (obj.bestPingFrontRemote = Math.round(message.bestPingFrontRemote));
    message.bestScore !== undefined && (obj.bestScore = Math.round(message.bestScore));
    message.bestPopLocal !== undefined && (obj.bestPopLocal = Math.round(message.bestPopLocal));
    message.bestPopRemote !== undefined && (obj.bestPopRemote = Math.round(message.bestPopRemote));
    message.bestTime !== undefined && (obj.bestTime = Math.round(message.bestTime));
    message.negotiationMs !== undefined && (obj.negotiationMs = Math.round(message.negotiationMs));
    message.selectedSeconds !== undefined && (obj.selectedSeconds = Math.round(message.selectedSeconds));
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamNetworkingP2PSDRRoutingSummary>): CMsgSteamNetworkingP2PSDRRoutingSummary {
    return CMsgSteamNetworkingP2PSDRRoutingSummary.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamNetworkingP2PSDRRoutingSummary>): CMsgSteamNetworkingP2PSDRRoutingSummary {
    const message = createBaseCMsgSteamNetworkingP2PSDRRoutingSummary();
    message.initialPing = object.initialPing ?? 0;
    message.initialPingFrontLocal = object.initialPingFrontLocal ?? 0;
    message.initialPingFrontRemote = object.initialPingFrontRemote ?? 0;
    message.initialScore = object.initialScore ?? 0;
    message.initialPopLocal = object.initialPopLocal ?? 0;
    message.initialPopRemote = object.initialPopRemote ?? 0;
    message.bestPing = object.bestPing ?? 0;
    message.bestPingFrontLocal = object.bestPingFrontLocal ?? 0;
    message.bestPingFrontRemote = object.bestPingFrontRemote ?? 0;
    message.bestScore = object.bestScore ?? 0;
    message.bestPopLocal = object.bestPopLocal ?? 0;
    message.bestPopRemote = object.bestPopRemote ?? 0;
    message.bestTime = object.bestTime ?? 0;
    message.negotiationMs = object.negotiationMs ?? 0;
    message.selectedSeconds = object.selectedSeconds ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramP2PRoutingSummary(): CMsgSteamDatagramP2PRoutingSummary {
  return { ice: undefined, sdr: undefined };
}

export const CMsgSteamDatagramP2PRoutingSummary = {
  encode(message: CMsgSteamDatagramP2PRoutingSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ice !== undefined) {
      CMsgSteamNetworkingICESessionSummary.encode(message.ice, writer.uint32(18).fork()).ldelim();
    }
    if (message.sdr !== undefined) {
      CMsgSteamNetworkingP2PSDRRoutingSummary.encode(message.sdr, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramP2PRoutingSummary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramP2PRoutingSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.ice = CMsgSteamNetworkingICESessionSummary.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.sdr = CMsgSteamNetworkingP2PSDRRoutingSummary.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramP2PRoutingSummary {
    return {
      ice: isSet(object.ice) ? CMsgSteamNetworkingICESessionSummary.fromJSON(object.ice) : undefined,
      sdr: isSet(object.sdr) ? CMsgSteamNetworkingP2PSDRRoutingSummary.fromJSON(object.sdr) : undefined,
    };
  },

  toJSON(message: CMsgSteamDatagramP2PRoutingSummary): unknown {
    const obj: any = {};
    message.ice !== undefined &&
      (obj.ice = message.ice ? CMsgSteamNetworkingICESessionSummary.toJSON(message.ice) : undefined);
    message.sdr !== undefined &&
      (obj.sdr = message.sdr ? CMsgSteamNetworkingP2PSDRRoutingSummary.toJSON(message.sdr) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramP2PRoutingSummary>): CMsgSteamDatagramP2PRoutingSummary {
    return CMsgSteamDatagramP2PRoutingSummary.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramP2PRoutingSummary>): CMsgSteamDatagramP2PRoutingSummary {
    const message = createBaseCMsgSteamDatagramP2PRoutingSummary();
    message.ice = (object.ice !== undefined && object.ice !== null)
      ? CMsgSteamNetworkingICESessionSummary.fromPartial(object.ice)
      : undefined;
    message.sdr = (object.sdr !== undefined && object.sdr !== null)
      ? CMsgSteamNetworkingP2PSDRRoutingSummary.fromPartial(object.sdr)
      : undefined;
    return message;
  },
};

function createBaseCMsgSteamDatagramConnectionClosed(): CMsgSteamDatagramConnectionClosed {
  return {
    toConnectionId: 0,
    fromConnectionId: 0,
    fromIdentityString: "",
    legacyFromIdentityBinary: undefined,
    legacyFromSteamId: "0",
    legacyGameserverRelaySessionId: 0,
    toRelaySessionId: 0,
    fromRelaySessionId: 0,
    forwardTargetRelayRoutingToken: Buffer.alloc(0),
    forwardTargetRevision: 0,
    relayMode: 0,
    debug: "",
    reasonCode: 0,
    routingSecret: "0",
    notPrimarySession: false,
    notPrimaryTransport: false,
    qualityRelay: undefined,
    qualityE2e: undefined,
    p2pRoutingSummary: undefined,
  };
}

export const CMsgSteamDatagramConnectionClosed = {
  encode(message: CMsgSteamDatagramConnectionClosed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.toConnectionId !== 0) {
      writer.uint32(61).fixed32(message.toConnectionId);
    }
    if (message.fromConnectionId !== 0) {
      writer.uint32(69).fixed32(message.fromConnectionId);
    }
    if (message.fromIdentityString !== "") {
      writer.uint32(122).string(message.fromIdentityString);
    }
    if (message.legacyFromIdentityBinary !== undefined) {
      CMsgSteamNetworkingIdentityLegacyBinary.encode(message.legacyFromIdentityBinary, writer.uint32(106).fork())
        .ldelim();
    }
    if (message.legacyFromSteamId !== "0") {
      writer.uint32(25).fixed64(message.legacyFromSteamId);
    }
    if (message.legacyGameserverRelaySessionId !== 0) {
      writer.uint32(16).uint32(message.legacyGameserverRelaySessionId);
    }
    if (message.toRelaySessionId !== 0) {
      writer.uint32(77).fixed32(message.toRelaySessionId);
    }
    if (message.fromRelaySessionId !== 0) {
      writer.uint32(85).fixed32(message.fromRelaySessionId);
    }
    if (message.forwardTargetRelayRoutingToken.length !== 0) {
      writer.uint32(90).bytes(message.forwardTargetRelayRoutingToken);
    }
    if (message.forwardTargetRevision !== 0) {
      writer.uint32(96).uint32(message.forwardTargetRevision);
    }
    if (message.relayMode !== 0) {
      writer.uint32(32).int32(message.relayMode);
    }
    if (message.debug !== "") {
      writer.uint32(42).string(message.debug);
    }
    if (message.reasonCode !== 0) {
      writer.uint32(48).uint32(message.reasonCode);
    }
    if (message.routingSecret !== "0") {
      writer.uint32(113).fixed64(message.routingSecret);
    }
    if (message.notPrimarySession === true) {
      writer.uint32(128).bool(message.notPrimarySession);
    }
    if (message.notPrimaryTransport === true) {
      writer.uint32(152).bool(message.notPrimaryTransport);
    }
    if (message.qualityRelay !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.qualityRelay, writer.uint32(138).fork()).ldelim();
    }
    if (message.qualityE2e !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.qualityE2e, writer.uint32(146).fork()).ldelim();
    }
    if (message.p2pRoutingSummary !== undefined) {
      CMsgSteamDatagramP2PRoutingSummary.encode(message.p2pRoutingSummary, writer.uint32(170).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramConnectionClosed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramConnectionClosed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 7:
          if (tag != 61) {
            break;
          }

          message.toConnectionId = reader.fixed32();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.fromConnectionId = reader.fixed32();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.fromIdentityString = reader.string();
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.legacyFromIdentityBinary = CMsgSteamNetworkingIdentityLegacyBinary.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.legacyFromSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.legacyGameserverRelaySessionId = reader.uint32();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.toRelaySessionId = reader.fixed32();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.fromRelaySessionId = reader.fixed32();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.forwardTargetRelayRoutingToken = reader.bytes() as Buffer;
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.forwardTargetRevision = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.relayMode = reader.int32() as any;
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.debug = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.reasonCode = reader.uint32();
          continue;
        case 14:
          if (tag != 113) {
            break;
          }

          message.routingSecret = longToString(reader.fixed64() as Long);
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.notPrimarySession = reader.bool();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.notPrimaryTransport = reader.bool();
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.qualityRelay = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag != 146) {
            break;
          }

          message.qualityE2e = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag != 170) {
            break;
          }

          message.p2pRoutingSummary = CMsgSteamDatagramP2PRoutingSummary.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramConnectionClosed {
    return {
      toConnectionId: isSet(object.toConnectionId) ? Number(object.toConnectionId) : 0,
      fromConnectionId: isSet(object.fromConnectionId) ? Number(object.fromConnectionId) : 0,
      fromIdentityString: isSet(object.fromIdentityString) ? String(object.fromIdentityString) : "",
      legacyFromIdentityBinary: isSet(object.legacyFromIdentityBinary)
        ? CMsgSteamNetworkingIdentityLegacyBinary.fromJSON(object.legacyFromIdentityBinary)
        : undefined,
      legacyFromSteamId: isSet(object.legacyFromSteamId) ? String(object.legacyFromSteamId) : "0",
      legacyGameserverRelaySessionId: isSet(object.legacyGameserverRelaySessionId)
        ? Number(object.legacyGameserverRelaySessionId)
        : 0,
      toRelaySessionId: isSet(object.toRelaySessionId) ? Number(object.toRelaySessionId) : 0,
      fromRelaySessionId: isSet(object.fromRelaySessionId) ? Number(object.fromRelaySessionId) : 0,
      forwardTargetRelayRoutingToken: isSet(object.forwardTargetRelayRoutingToken)
        ? Buffer.from(bytesFromBase64(object.forwardTargetRelayRoutingToken))
        : Buffer.alloc(0),
      forwardTargetRevision: isSet(object.forwardTargetRevision) ? Number(object.forwardTargetRevision) : 0,
      relayMode: isSet(object.relayMode) ? cMsgSteamDatagramConnectionClosed_ERelayModeFromJSON(object.relayMode) : 0,
      debug: isSet(object.debug) ? String(object.debug) : "",
      reasonCode: isSet(object.reasonCode) ? Number(object.reasonCode) : 0,
      routingSecret: isSet(object.routingSecret) ? String(object.routingSecret) : "0",
      notPrimarySession: isSet(object.notPrimarySession) ? Boolean(object.notPrimarySession) : false,
      notPrimaryTransport: isSet(object.notPrimaryTransport) ? Boolean(object.notPrimaryTransport) : false,
      qualityRelay: isSet(object.qualityRelay)
        ? CMsgSteamDatagramConnectionQuality.fromJSON(object.qualityRelay)
        : undefined,
      qualityE2e: isSet(object.qualityE2e) ? CMsgSteamDatagramConnectionQuality.fromJSON(object.qualityE2e) : undefined,
      p2pRoutingSummary: isSet(object.p2pRoutingSummary)
        ? CMsgSteamDatagramP2PRoutingSummary.fromJSON(object.p2pRoutingSummary)
        : undefined,
    };
  },

  toJSON(message: CMsgSteamDatagramConnectionClosed): unknown {
    const obj: any = {};
    message.toConnectionId !== undefined && (obj.toConnectionId = Math.round(message.toConnectionId));
    message.fromConnectionId !== undefined && (obj.fromConnectionId = Math.round(message.fromConnectionId));
    message.fromIdentityString !== undefined && (obj.fromIdentityString = message.fromIdentityString);
    message.legacyFromIdentityBinary !== undefined && (obj.legacyFromIdentityBinary = message.legacyFromIdentityBinary
      ? CMsgSteamNetworkingIdentityLegacyBinary.toJSON(message.legacyFromIdentityBinary)
      : undefined);
    message.legacyFromSteamId !== undefined && (obj.legacyFromSteamId = message.legacyFromSteamId);
    message.legacyGameserverRelaySessionId !== undefined &&
      (obj.legacyGameserverRelaySessionId = Math.round(message.legacyGameserverRelaySessionId));
    message.toRelaySessionId !== undefined && (obj.toRelaySessionId = Math.round(message.toRelaySessionId));
    message.fromRelaySessionId !== undefined && (obj.fromRelaySessionId = Math.round(message.fromRelaySessionId));
    message.forwardTargetRelayRoutingToken !== undefined &&
      (obj.forwardTargetRelayRoutingToken = base64FromBytes(
        message.forwardTargetRelayRoutingToken !== undefined ? message.forwardTargetRelayRoutingToken : Buffer.alloc(0),
      ));
    message.forwardTargetRevision !== undefined &&
      (obj.forwardTargetRevision = Math.round(message.forwardTargetRevision));
    message.relayMode !== undefined &&
      (obj.relayMode = cMsgSteamDatagramConnectionClosed_ERelayModeToJSON(message.relayMode));
    message.debug !== undefined && (obj.debug = message.debug);
    message.reasonCode !== undefined && (obj.reasonCode = Math.round(message.reasonCode));
    message.routingSecret !== undefined && (obj.routingSecret = message.routingSecret);
    message.notPrimarySession !== undefined && (obj.notPrimarySession = message.notPrimarySession);
    message.notPrimaryTransport !== undefined && (obj.notPrimaryTransport = message.notPrimaryTransport);
    message.qualityRelay !== undefined && (obj.qualityRelay = message.qualityRelay
      ? CMsgSteamDatagramConnectionQuality.toJSON(message.qualityRelay)
      : undefined);
    message.qualityE2e !== undefined &&
      (obj.qualityE2e = message.qualityE2e ? CMsgSteamDatagramConnectionQuality.toJSON(message.qualityE2e) : undefined);
    message.p2pRoutingSummary !== undefined && (obj.p2pRoutingSummary = message.p2pRoutingSummary
      ? CMsgSteamDatagramP2PRoutingSummary.toJSON(message.p2pRoutingSummary)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramConnectionClosed>): CMsgSteamDatagramConnectionClosed {
    return CMsgSteamDatagramConnectionClosed.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramConnectionClosed>): CMsgSteamDatagramConnectionClosed {
    const message = createBaseCMsgSteamDatagramConnectionClosed();
    message.toConnectionId = object.toConnectionId ?? 0;
    message.fromConnectionId = object.fromConnectionId ?? 0;
    message.fromIdentityString = object.fromIdentityString ?? "";
    message.legacyFromIdentityBinary =
      (object.legacyFromIdentityBinary !== undefined && object.legacyFromIdentityBinary !== null)
        ? CMsgSteamNetworkingIdentityLegacyBinary.fromPartial(object.legacyFromIdentityBinary)
        : undefined;
    message.legacyFromSteamId = object.legacyFromSteamId ?? "0";
    message.legacyGameserverRelaySessionId = object.legacyGameserverRelaySessionId ?? 0;
    message.toRelaySessionId = object.toRelaySessionId ?? 0;
    message.fromRelaySessionId = object.fromRelaySessionId ?? 0;
    message.forwardTargetRelayRoutingToken = object.forwardTargetRelayRoutingToken ?? Buffer.alloc(0);
    message.forwardTargetRevision = object.forwardTargetRevision ?? 0;
    message.relayMode = object.relayMode ?? 0;
    message.debug = object.debug ?? "";
    message.reasonCode = object.reasonCode ?? 0;
    message.routingSecret = object.routingSecret ?? "0";
    message.notPrimarySession = object.notPrimarySession ?? false;
    message.notPrimaryTransport = object.notPrimaryTransport ?? false;
    message.qualityRelay = (object.qualityRelay !== undefined && object.qualityRelay !== null)
      ? CMsgSteamDatagramConnectionQuality.fromPartial(object.qualityRelay)
      : undefined;
    message.qualityE2e = (object.qualityE2e !== undefined && object.qualityE2e !== null)
      ? CMsgSteamDatagramConnectionQuality.fromPartial(object.qualityE2e)
      : undefined;
    message.p2pRoutingSummary = (object.p2pRoutingSummary !== undefined && object.p2pRoutingSummary !== null)
      ? CMsgSteamDatagramP2PRoutingSummary.fromPartial(object.p2pRoutingSummary)
      : undefined;
    return message;
  },
};

function createBaseCMsgSteamDatagramNoConnection(): CMsgSteamDatagramNoConnection {
  return {
    toConnectionId: 0,
    fromConnectionId: 0,
    legacyGameserverRelaySessionId: 0,
    toRelaySessionId: 0,
    fromRelaySessionId: 0,
    fromIdentityString: "",
    legacyFromSteamId: "0",
    endToEnd: false,
    notPrimarySession: false,
    notPrimaryTransport: false,
    qualityRelay: undefined,
    qualityE2e: undefined,
    p2pRoutingSummary: undefined,
    routingSecret: "0",
    dummyPad: 0,
  };
}

export const CMsgSteamDatagramNoConnection = {
  encode(message: CMsgSteamDatagramNoConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.toConnectionId !== 0) {
      writer.uint32(45).fixed32(message.toConnectionId);
    }
    if (message.fromConnectionId !== 0) {
      writer.uint32(53).fixed32(message.fromConnectionId);
    }
    if (message.legacyGameserverRelaySessionId !== 0) {
      writer.uint32(16).uint32(message.legacyGameserverRelaySessionId);
    }
    if (message.toRelaySessionId !== 0) {
      writer.uint32(77).fixed32(message.toRelaySessionId);
    }
    if (message.fromRelaySessionId !== 0) {
      writer.uint32(85).fixed32(message.fromRelaySessionId);
    }
    if (message.fromIdentityString !== "") {
      writer.uint32(58).string(message.fromIdentityString);
    }
    if (message.legacyFromSteamId !== "0") {
      writer.uint32(25).fixed64(message.legacyFromSteamId);
    }
    if (message.endToEnd === true) {
      writer.uint32(32).bool(message.endToEnd);
    }
    if (message.notPrimarySession === true) {
      writer.uint32(96).bool(message.notPrimarySession);
    }
    if (message.notPrimaryTransport === true) {
      writer.uint32(120).bool(message.notPrimaryTransport);
    }
    if (message.qualityRelay !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.qualityRelay, writer.uint32(106).fork()).ldelim();
    }
    if (message.qualityE2e !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.qualityE2e, writer.uint32(114).fork()).ldelim();
    }
    if (message.p2pRoutingSummary !== undefined) {
      CMsgSteamDatagramP2PRoutingSummary.encode(message.p2pRoutingSummary, writer.uint32(130).fork()).ldelim();
    }
    if (message.routingSecret !== "0") {
      writer.uint32(89).fixed64(message.routingSecret);
    }
    if (message.dummyPad !== 0) {
      writer.uint32(8189).fixed32(message.dummyPad);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramNoConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramNoConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if (tag != 45) {
            break;
          }

          message.toConnectionId = reader.fixed32();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.fromConnectionId = reader.fixed32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.legacyGameserverRelaySessionId = reader.uint32();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.toRelaySessionId = reader.fixed32();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.fromRelaySessionId = reader.fixed32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.fromIdentityString = reader.string();
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.legacyFromSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.endToEnd = reader.bool();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.notPrimarySession = reader.bool();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.notPrimaryTransport = reader.bool();
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.qualityRelay = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.qualityE2e = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.p2pRoutingSummary = CMsgSteamDatagramP2PRoutingSummary.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag != 89) {
            break;
          }

          message.routingSecret = longToString(reader.fixed64() as Long);
          continue;
        case 1023:
          if (tag != 8189) {
            break;
          }

          message.dummyPad = reader.fixed32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramNoConnection {
    return {
      toConnectionId: isSet(object.toConnectionId) ? Number(object.toConnectionId) : 0,
      fromConnectionId: isSet(object.fromConnectionId) ? Number(object.fromConnectionId) : 0,
      legacyGameserverRelaySessionId: isSet(object.legacyGameserverRelaySessionId)
        ? Number(object.legacyGameserverRelaySessionId)
        : 0,
      toRelaySessionId: isSet(object.toRelaySessionId) ? Number(object.toRelaySessionId) : 0,
      fromRelaySessionId: isSet(object.fromRelaySessionId) ? Number(object.fromRelaySessionId) : 0,
      fromIdentityString: isSet(object.fromIdentityString) ? String(object.fromIdentityString) : "",
      legacyFromSteamId: isSet(object.legacyFromSteamId) ? String(object.legacyFromSteamId) : "0",
      endToEnd: isSet(object.endToEnd) ? Boolean(object.endToEnd) : false,
      notPrimarySession: isSet(object.notPrimarySession) ? Boolean(object.notPrimarySession) : false,
      notPrimaryTransport: isSet(object.notPrimaryTransport) ? Boolean(object.notPrimaryTransport) : false,
      qualityRelay: isSet(object.qualityRelay)
        ? CMsgSteamDatagramConnectionQuality.fromJSON(object.qualityRelay)
        : undefined,
      qualityE2e: isSet(object.qualityE2e) ? CMsgSteamDatagramConnectionQuality.fromJSON(object.qualityE2e) : undefined,
      p2pRoutingSummary: isSet(object.p2pRoutingSummary)
        ? CMsgSteamDatagramP2PRoutingSummary.fromJSON(object.p2pRoutingSummary)
        : undefined,
      routingSecret: isSet(object.routingSecret) ? String(object.routingSecret) : "0",
      dummyPad: isSet(object.dummyPad) ? Number(object.dummyPad) : 0,
    };
  },

  toJSON(message: CMsgSteamDatagramNoConnection): unknown {
    const obj: any = {};
    message.toConnectionId !== undefined && (obj.toConnectionId = Math.round(message.toConnectionId));
    message.fromConnectionId !== undefined && (obj.fromConnectionId = Math.round(message.fromConnectionId));
    message.legacyGameserverRelaySessionId !== undefined &&
      (obj.legacyGameserverRelaySessionId = Math.round(message.legacyGameserverRelaySessionId));
    message.toRelaySessionId !== undefined && (obj.toRelaySessionId = Math.round(message.toRelaySessionId));
    message.fromRelaySessionId !== undefined && (obj.fromRelaySessionId = Math.round(message.fromRelaySessionId));
    message.fromIdentityString !== undefined && (obj.fromIdentityString = message.fromIdentityString);
    message.legacyFromSteamId !== undefined && (obj.legacyFromSteamId = message.legacyFromSteamId);
    message.endToEnd !== undefined && (obj.endToEnd = message.endToEnd);
    message.notPrimarySession !== undefined && (obj.notPrimarySession = message.notPrimarySession);
    message.notPrimaryTransport !== undefined && (obj.notPrimaryTransport = message.notPrimaryTransport);
    message.qualityRelay !== undefined && (obj.qualityRelay = message.qualityRelay
      ? CMsgSteamDatagramConnectionQuality.toJSON(message.qualityRelay)
      : undefined);
    message.qualityE2e !== undefined &&
      (obj.qualityE2e = message.qualityE2e ? CMsgSteamDatagramConnectionQuality.toJSON(message.qualityE2e) : undefined);
    message.p2pRoutingSummary !== undefined && (obj.p2pRoutingSummary = message.p2pRoutingSummary
      ? CMsgSteamDatagramP2PRoutingSummary.toJSON(message.p2pRoutingSummary)
      : undefined);
    message.routingSecret !== undefined && (obj.routingSecret = message.routingSecret);
    message.dummyPad !== undefined && (obj.dummyPad = Math.round(message.dummyPad));
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramNoConnection>): CMsgSteamDatagramNoConnection {
    return CMsgSteamDatagramNoConnection.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramNoConnection>): CMsgSteamDatagramNoConnection {
    const message = createBaseCMsgSteamDatagramNoConnection();
    message.toConnectionId = object.toConnectionId ?? 0;
    message.fromConnectionId = object.fromConnectionId ?? 0;
    message.legacyGameserverRelaySessionId = object.legacyGameserverRelaySessionId ?? 0;
    message.toRelaySessionId = object.toRelaySessionId ?? 0;
    message.fromRelaySessionId = object.fromRelaySessionId ?? 0;
    message.fromIdentityString = object.fromIdentityString ?? "";
    message.legacyFromSteamId = object.legacyFromSteamId ?? "0";
    message.endToEnd = object.endToEnd ?? false;
    message.notPrimarySession = object.notPrimarySession ?? false;
    message.notPrimaryTransport = object.notPrimaryTransport ?? false;
    message.qualityRelay = (object.qualityRelay !== undefined && object.qualityRelay !== null)
      ? CMsgSteamDatagramConnectionQuality.fromPartial(object.qualityRelay)
      : undefined;
    message.qualityE2e = (object.qualityE2e !== undefined && object.qualityE2e !== null)
      ? CMsgSteamDatagramConnectionQuality.fromPartial(object.qualityE2e)
      : undefined;
    message.p2pRoutingSummary = (object.p2pRoutingSummary !== undefined && object.p2pRoutingSummary !== null)
      ? CMsgSteamDatagramP2PRoutingSummary.fromPartial(object.p2pRoutingSummary)
      : undefined;
    message.routingSecret = object.routingSecret ?? "0";
    message.dummyPad = object.dummyPad ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramGameserverSessionRequest(): CMsgSteamDatagramGameserverSessionRequest {
  return {
    ticket: Buffer.alloc(0),
    challengeTime: 0,
    challenge: "0",
    clientConnectionId: 0,
    serverConnectionId: 0,
    networkConfigVersion: "0",
    protocolVersion: 0,
    platform: "",
    build: "",
    devGameserverIdentity: "",
    devClientCert: undefined,
  };
}

export const CMsgSteamDatagramGameserverSessionRequest = {
  encode(message: CMsgSteamDatagramGameserverSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticket.length !== 0) {
      writer.uint32(10).bytes(message.ticket);
    }
    if (message.challengeTime !== 0) {
      writer.uint32(29).fixed32(message.challengeTime);
    }
    if (message.challenge !== "0") {
      writer.uint32(33).fixed64(message.challenge);
    }
    if (message.clientConnectionId !== 0) {
      writer.uint32(45).fixed32(message.clientConnectionId);
    }
    if (message.serverConnectionId !== 0) {
      writer.uint32(69).fixed32(message.serverConnectionId);
    }
    if (message.networkConfigVersion !== "0") {
      writer.uint32(48).uint64(message.networkConfigVersion);
    }
    if (message.protocolVersion !== 0) {
      writer.uint32(56).uint32(message.protocolVersion);
    }
    if (message.platform !== "") {
      writer.uint32(74).string(message.platform);
    }
    if (message.build !== "") {
      writer.uint32(82).string(message.build);
    }
    if (message.devGameserverIdentity !== "") {
      writer.uint32(802).string(message.devGameserverIdentity);
    }
    if (message.devClientCert !== undefined) {
      CMsgSteamDatagramCertificateSigned.encode(message.devClientCert, writer.uint32(810).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramGameserverSessionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramGameserverSessionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.ticket = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.challengeTime = reader.fixed32();
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.challenge = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.clientConnectionId = reader.fixed32();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.serverConnectionId = reader.fixed32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.networkConfigVersion = longToString(reader.uint64() as Long);
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.protocolVersion = reader.uint32();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.build = reader.string();
          continue;
        case 100:
          if (tag != 802) {
            break;
          }

          message.devGameserverIdentity = reader.string();
          continue;
        case 101:
          if (tag != 810) {
            break;
          }

          message.devClientCert = CMsgSteamDatagramCertificateSigned.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramGameserverSessionRequest {
    return {
      ticket: isSet(object.ticket) ? Buffer.from(bytesFromBase64(object.ticket)) : Buffer.alloc(0),
      challengeTime: isSet(object.challengeTime) ? Number(object.challengeTime) : 0,
      challenge: isSet(object.challenge) ? String(object.challenge) : "0",
      clientConnectionId: isSet(object.clientConnectionId) ? Number(object.clientConnectionId) : 0,
      serverConnectionId: isSet(object.serverConnectionId) ? Number(object.serverConnectionId) : 0,
      networkConfigVersion: isSet(object.networkConfigVersion) ? String(object.networkConfigVersion) : "0",
      protocolVersion: isSet(object.protocolVersion) ? Number(object.protocolVersion) : 0,
      platform: isSet(object.platform) ? String(object.platform) : "",
      build: isSet(object.build) ? String(object.build) : "",
      devGameserverIdentity: isSet(object.devGameserverIdentity) ? String(object.devGameserverIdentity) : "",
      devClientCert: isSet(object.devClientCert)
        ? CMsgSteamDatagramCertificateSigned.fromJSON(object.devClientCert)
        : undefined,
    };
  },

  toJSON(message: CMsgSteamDatagramGameserverSessionRequest): unknown {
    const obj: any = {};
    message.ticket !== undefined &&
      (obj.ticket = base64FromBytes(message.ticket !== undefined ? message.ticket : Buffer.alloc(0)));
    message.challengeTime !== undefined && (obj.challengeTime = Math.round(message.challengeTime));
    message.challenge !== undefined && (obj.challenge = message.challenge);
    message.clientConnectionId !== undefined && (obj.clientConnectionId = Math.round(message.clientConnectionId));
    message.serverConnectionId !== undefined && (obj.serverConnectionId = Math.round(message.serverConnectionId));
    message.networkConfigVersion !== undefined && (obj.networkConfigVersion = message.networkConfigVersion);
    message.protocolVersion !== undefined && (obj.protocolVersion = Math.round(message.protocolVersion));
    message.platform !== undefined && (obj.platform = message.platform);
    message.build !== undefined && (obj.build = message.build);
    message.devGameserverIdentity !== undefined && (obj.devGameserverIdentity = message.devGameserverIdentity);
    message.devClientCert !== undefined && (obj.devClientCert = message.devClientCert
      ? CMsgSteamDatagramCertificateSigned.toJSON(message.devClientCert)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramGameserverSessionRequest>): CMsgSteamDatagramGameserverSessionRequest {
    return CMsgSteamDatagramGameserverSessionRequest.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamDatagramGameserverSessionRequest>,
  ): CMsgSteamDatagramGameserverSessionRequest {
    const message = createBaseCMsgSteamDatagramGameserverSessionRequest();
    message.ticket = object.ticket ?? Buffer.alloc(0);
    message.challengeTime = object.challengeTime ?? 0;
    message.challenge = object.challenge ?? "0";
    message.clientConnectionId = object.clientConnectionId ?? 0;
    message.serverConnectionId = object.serverConnectionId ?? 0;
    message.networkConfigVersion = object.networkConfigVersion ?? "0";
    message.protocolVersion = object.protocolVersion ?? 0;
    message.platform = object.platform ?? "";
    message.build = object.build ?? "";
    message.devGameserverIdentity = object.devGameserverIdentity ?? "";
    message.devClientCert = (object.devClientCert !== undefined && object.devClientCert !== null)
      ? CMsgSteamDatagramCertificateSigned.fromPartial(object.devClientCert)
      : undefined;
    return message;
  },
};

function createBaseCMsgSteamDatagramGameserverSessionEstablished(): CMsgSteamDatagramGameserverSessionEstablished {
  return {
    connectionId: 0,
    gameserverIdentityString: "",
    secondsUntilShutdown: 0,
    seqNumR2c: 0,
    dummyLegacyIdentityBinary: Buffer.alloc(0),
    legacyGameserverSteamid: "0",
  };
}

export const CMsgSteamDatagramGameserverSessionEstablished = {
  encode(message: CMsgSteamDatagramGameserverSessionEstablished, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(13).fixed32(message.connectionId);
    }
    if (message.gameserverIdentityString !== "") {
      writer.uint32(18).string(message.gameserverIdentityString);
    }
    if (message.secondsUntilShutdown !== 0) {
      writer.uint32(32).uint32(message.secondsUntilShutdown);
    }
    if (message.seqNumR2c !== 0) {
      writer.uint32(48).uint32(message.seqNumR2c);
    }
    if (message.dummyLegacyIdentityBinary.length !== 0) {
      writer.uint32(58).bytes(message.dummyLegacyIdentityBinary);
    }
    if (message.legacyGameserverSteamid !== "0") {
      writer.uint32(25).fixed64(message.legacyGameserverSteamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramGameserverSessionEstablished {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramGameserverSessionEstablished();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.connectionId = reader.fixed32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.gameserverIdentityString = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.secondsUntilShutdown = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.seqNumR2c = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.dummyLegacyIdentityBinary = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.legacyGameserverSteamid = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramGameserverSessionEstablished {
    return {
      connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0,
      gameserverIdentityString: isSet(object.gameserverIdentityString) ? String(object.gameserverIdentityString) : "",
      secondsUntilShutdown: isSet(object.secondsUntilShutdown) ? Number(object.secondsUntilShutdown) : 0,
      seqNumR2c: isSet(object.seqNumR2c) ? Number(object.seqNumR2c) : 0,
      dummyLegacyIdentityBinary: isSet(object.dummyLegacyIdentityBinary)
        ? Buffer.from(bytesFromBase64(object.dummyLegacyIdentityBinary))
        : Buffer.alloc(0),
      legacyGameserverSteamid: isSet(object.legacyGameserverSteamid) ? String(object.legacyGameserverSteamid) : "0",
    };
  },

  toJSON(message: CMsgSteamDatagramGameserverSessionEstablished): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = Math.round(message.connectionId));
    message.gameserverIdentityString !== undefined && (obj.gameserverIdentityString = message.gameserverIdentityString);
    message.secondsUntilShutdown !== undefined && (obj.secondsUntilShutdown = Math.round(message.secondsUntilShutdown));
    message.seqNumR2c !== undefined && (obj.seqNumR2c = Math.round(message.seqNumR2c));
    message.dummyLegacyIdentityBinary !== undefined &&
      (obj.dummyLegacyIdentityBinary = base64FromBytes(
        message.dummyLegacyIdentityBinary !== undefined ? message.dummyLegacyIdentityBinary : Buffer.alloc(0),
      ));
    message.legacyGameserverSteamid !== undefined && (obj.legacyGameserverSteamid = message.legacyGameserverSteamid);
    return obj;
  },

  create(
    base?: DeepPartial<CMsgSteamDatagramGameserverSessionEstablished>,
  ): CMsgSteamDatagramGameserverSessionEstablished {
    return CMsgSteamDatagramGameserverSessionEstablished.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamDatagramGameserverSessionEstablished>,
  ): CMsgSteamDatagramGameserverSessionEstablished {
    const message = createBaseCMsgSteamDatagramGameserverSessionEstablished();
    message.connectionId = object.connectionId ?? 0;
    message.gameserverIdentityString = object.gameserverIdentityString ?? "";
    message.secondsUntilShutdown = object.secondsUntilShutdown ?? 0;
    message.seqNumR2c = object.seqNumR2c ?? 0;
    message.dummyLegacyIdentityBinary = object.dummyLegacyIdentityBinary ?? Buffer.alloc(0);
    message.legacyGameserverSteamid = object.legacyGameserverSteamid ?? "0";
    return message;
  },
};

function createBaseCMsgSteamDatagramConnectionStatsClientToRouter(): CMsgSteamDatagramConnectionStatsClientToRouter {
  return {
    qualityRelay: undefined,
    qualityE2e: undefined,
    ackRelay: [],
    legacyAckE2e: [],
    flags: 0,
    clientConnectionId: 0,
    seqNumC2r: 0,
    seqNumE2e: 0,
  };
}

export const CMsgSteamDatagramConnectionStatsClientToRouter = {
  encode(
    message: CMsgSteamDatagramConnectionStatsClientToRouter,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.qualityRelay !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.qualityRelay, writer.uint32(10).fork()).ldelim();
    }
    if (message.qualityE2e !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.qualityE2e, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.ackRelay) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.legacyAckE2e) {
      writer.fixed32(v);
    }
    writer.ldelim();
    if (message.flags !== 0) {
      writer.uint32(48).uint32(message.flags);
    }
    if (message.clientConnectionId !== 0) {
      writer.uint32(69).fixed32(message.clientConnectionId);
    }
    if (message.seqNumC2r !== 0) {
      writer.uint32(72).uint32(message.seqNumC2r);
    }
    if (message.seqNumE2e !== 0) {
      writer.uint32(80).uint32(message.seqNumE2e);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramConnectionStatsClientToRouter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramConnectionStatsClientToRouter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.qualityRelay = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.qualityE2e = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag == 37) {
            message.ackRelay.push(reader.fixed32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ackRelay.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 5:
          if (tag == 45) {
            message.legacyAckE2e.push(reader.fixed32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.legacyAckE2e.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 6:
          if (tag != 48) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.clientConnectionId = reader.fixed32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.seqNumC2r = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.seqNumE2e = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramConnectionStatsClientToRouter {
    return {
      qualityRelay: isSet(object.qualityRelay)
        ? CMsgSteamDatagramConnectionQuality.fromJSON(object.qualityRelay)
        : undefined,
      qualityE2e: isSet(object.qualityE2e) ? CMsgSteamDatagramConnectionQuality.fromJSON(object.qualityE2e) : undefined,
      ackRelay: Array.isArray(object?.ackRelay) ? object.ackRelay.map((e: any) => Number(e)) : [],
      legacyAckE2e: Array.isArray(object?.legacyAckE2e) ? object.legacyAckE2e.map((e: any) => Number(e)) : [],
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      clientConnectionId: isSet(object.clientConnectionId) ? Number(object.clientConnectionId) : 0,
      seqNumC2r: isSet(object.seqNumC2r) ? Number(object.seqNumC2r) : 0,
      seqNumE2e: isSet(object.seqNumE2e) ? Number(object.seqNumE2e) : 0,
    };
  },

  toJSON(message: CMsgSteamDatagramConnectionStatsClientToRouter): unknown {
    const obj: any = {};
    message.qualityRelay !== undefined && (obj.qualityRelay = message.qualityRelay
      ? CMsgSteamDatagramConnectionQuality.toJSON(message.qualityRelay)
      : undefined);
    message.qualityE2e !== undefined &&
      (obj.qualityE2e = message.qualityE2e ? CMsgSteamDatagramConnectionQuality.toJSON(message.qualityE2e) : undefined);
    if (message.ackRelay) {
      obj.ackRelay = message.ackRelay.map((e) => Math.round(e));
    } else {
      obj.ackRelay = [];
    }
    if (message.legacyAckE2e) {
      obj.legacyAckE2e = message.legacyAckE2e.map((e) => Math.round(e));
    } else {
      obj.legacyAckE2e = [];
    }
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.clientConnectionId !== undefined && (obj.clientConnectionId = Math.round(message.clientConnectionId));
    message.seqNumC2r !== undefined && (obj.seqNumC2r = Math.round(message.seqNumC2r));
    message.seqNumE2e !== undefined && (obj.seqNumE2e = Math.round(message.seqNumE2e));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgSteamDatagramConnectionStatsClientToRouter>,
  ): CMsgSteamDatagramConnectionStatsClientToRouter {
    return CMsgSteamDatagramConnectionStatsClientToRouter.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamDatagramConnectionStatsClientToRouter>,
  ): CMsgSteamDatagramConnectionStatsClientToRouter {
    const message = createBaseCMsgSteamDatagramConnectionStatsClientToRouter();
    message.qualityRelay = (object.qualityRelay !== undefined && object.qualityRelay !== null)
      ? CMsgSteamDatagramConnectionQuality.fromPartial(object.qualityRelay)
      : undefined;
    message.qualityE2e = (object.qualityE2e !== undefined && object.qualityE2e !== null)
      ? CMsgSteamDatagramConnectionQuality.fromPartial(object.qualityE2e)
      : undefined;
    message.ackRelay = object.ackRelay?.map((e) => e) || [];
    message.legacyAckE2e = object.legacyAckE2e?.map((e) => e) || [];
    message.flags = object.flags ?? 0;
    message.clientConnectionId = object.clientConnectionId ?? 0;
    message.seqNumC2r = object.seqNumC2r ?? 0;
    message.seqNumE2e = object.seqNumE2e ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramConnectionStatsRouterToClient(): CMsgSteamDatagramConnectionStatsRouterToClient {
  return {
    qualityRelay: undefined,
    qualityE2e: undefined,
    secondsUntilShutdown: 0,
    migrateRequestIp: 0,
    migrateRequestPort: 0,
    scoringPenaltyRelayCluster: 0,
    ackRelay: [],
    legacyAckE2e: [],
    flags: 0,
    clientConnectionId: 0,
    seqNumR2c: 0,
    seqNumE2e: 0,
  };
}

export const CMsgSteamDatagramConnectionStatsRouterToClient = {
  encode(
    message: CMsgSteamDatagramConnectionStatsRouterToClient,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.qualityRelay !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.qualityRelay, writer.uint32(10).fork()).ldelim();
    }
    if (message.qualityE2e !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.qualityE2e, writer.uint32(18).fork()).ldelim();
    }
    if (message.secondsUntilShutdown !== 0) {
      writer.uint32(48).uint32(message.secondsUntilShutdown);
    }
    if (message.migrateRequestIp !== 0) {
      writer.uint32(85).fixed32(message.migrateRequestIp);
    }
    if (message.migrateRequestPort !== 0) {
      writer.uint32(88).uint32(message.migrateRequestPort);
    }
    if (message.scoringPenaltyRelayCluster !== 0) {
      writer.uint32(96).uint32(message.scoringPenaltyRelayCluster);
    }
    writer.uint32(106).fork();
    for (const v of message.ackRelay) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(114).fork();
    for (const v of message.legacyAckE2e) {
      writer.fixed32(v);
    }
    writer.ldelim();
    if (message.flags !== 0) {
      writer.uint32(120).uint32(message.flags);
    }
    if (message.clientConnectionId !== 0) {
      writer.uint32(61).fixed32(message.clientConnectionId);
    }
    if (message.seqNumR2c !== 0) {
      writer.uint32(64).uint32(message.seqNumR2c);
    }
    if (message.seqNumE2e !== 0) {
      writer.uint32(72).uint32(message.seqNumE2e);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramConnectionStatsRouterToClient {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramConnectionStatsRouterToClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.qualityRelay = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.qualityE2e = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.secondsUntilShutdown = reader.uint32();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.migrateRequestIp = reader.fixed32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.migrateRequestPort = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.scoringPenaltyRelayCluster = reader.uint32();
          continue;
        case 13:
          if (tag == 109) {
            message.ackRelay.push(reader.fixed32());
            continue;
          }

          if (tag == 106) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ackRelay.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 14:
          if (tag == 117) {
            message.legacyAckE2e.push(reader.fixed32());
            continue;
          }

          if (tag == 114) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.legacyAckE2e.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 15:
          if (tag != 120) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.clientConnectionId = reader.fixed32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.seqNumR2c = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.seqNumE2e = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramConnectionStatsRouterToClient {
    return {
      qualityRelay: isSet(object.qualityRelay)
        ? CMsgSteamDatagramConnectionQuality.fromJSON(object.qualityRelay)
        : undefined,
      qualityE2e: isSet(object.qualityE2e) ? CMsgSteamDatagramConnectionQuality.fromJSON(object.qualityE2e) : undefined,
      secondsUntilShutdown: isSet(object.secondsUntilShutdown) ? Number(object.secondsUntilShutdown) : 0,
      migrateRequestIp: isSet(object.migrateRequestIp) ? Number(object.migrateRequestIp) : 0,
      migrateRequestPort: isSet(object.migrateRequestPort) ? Number(object.migrateRequestPort) : 0,
      scoringPenaltyRelayCluster: isSet(object.scoringPenaltyRelayCluster)
        ? Number(object.scoringPenaltyRelayCluster)
        : 0,
      ackRelay: Array.isArray(object?.ackRelay) ? object.ackRelay.map((e: any) => Number(e)) : [],
      legacyAckE2e: Array.isArray(object?.legacyAckE2e) ? object.legacyAckE2e.map((e: any) => Number(e)) : [],
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      clientConnectionId: isSet(object.clientConnectionId) ? Number(object.clientConnectionId) : 0,
      seqNumR2c: isSet(object.seqNumR2c) ? Number(object.seqNumR2c) : 0,
      seqNumE2e: isSet(object.seqNumE2e) ? Number(object.seqNumE2e) : 0,
    };
  },

  toJSON(message: CMsgSteamDatagramConnectionStatsRouterToClient): unknown {
    const obj: any = {};
    message.qualityRelay !== undefined && (obj.qualityRelay = message.qualityRelay
      ? CMsgSteamDatagramConnectionQuality.toJSON(message.qualityRelay)
      : undefined);
    message.qualityE2e !== undefined &&
      (obj.qualityE2e = message.qualityE2e ? CMsgSteamDatagramConnectionQuality.toJSON(message.qualityE2e) : undefined);
    message.secondsUntilShutdown !== undefined && (obj.secondsUntilShutdown = Math.round(message.secondsUntilShutdown));
    message.migrateRequestIp !== undefined && (obj.migrateRequestIp = Math.round(message.migrateRequestIp));
    message.migrateRequestPort !== undefined && (obj.migrateRequestPort = Math.round(message.migrateRequestPort));
    message.scoringPenaltyRelayCluster !== undefined &&
      (obj.scoringPenaltyRelayCluster = Math.round(message.scoringPenaltyRelayCluster));
    if (message.ackRelay) {
      obj.ackRelay = message.ackRelay.map((e) => Math.round(e));
    } else {
      obj.ackRelay = [];
    }
    if (message.legacyAckE2e) {
      obj.legacyAckE2e = message.legacyAckE2e.map((e) => Math.round(e));
    } else {
      obj.legacyAckE2e = [];
    }
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.clientConnectionId !== undefined && (obj.clientConnectionId = Math.round(message.clientConnectionId));
    message.seqNumR2c !== undefined && (obj.seqNumR2c = Math.round(message.seqNumR2c));
    message.seqNumE2e !== undefined && (obj.seqNumE2e = Math.round(message.seqNumE2e));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgSteamDatagramConnectionStatsRouterToClient>,
  ): CMsgSteamDatagramConnectionStatsRouterToClient {
    return CMsgSteamDatagramConnectionStatsRouterToClient.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamDatagramConnectionStatsRouterToClient>,
  ): CMsgSteamDatagramConnectionStatsRouterToClient {
    const message = createBaseCMsgSteamDatagramConnectionStatsRouterToClient();
    message.qualityRelay = (object.qualityRelay !== undefined && object.qualityRelay !== null)
      ? CMsgSteamDatagramConnectionQuality.fromPartial(object.qualityRelay)
      : undefined;
    message.qualityE2e = (object.qualityE2e !== undefined && object.qualityE2e !== null)
      ? CMsgSteamDatagramConnectionQuality.fromPartial(object.qualityE2e)
      : undefined;
    message.secondsUntilShutdown = object.secondsUntilShutdown ?? 0;
    message.migrateRequestIp = object.migrateRequestIp ?? 0;
    message.migrateRequestPort = object.migrateRequestPort ?? 0;
    message.scoringPenaltyRelayCluster = object.scoringPenaltyRelayCluster ?? 0;
    message.ackRelay = object.ackRelay?.map((e) => e) || [];
    message.legacyAckE2e = object.legacyAckE2e?.map((e) => e) || [];
    message.flags = object.flags ?? 0;
    message.clientConnectionId = object.clientConnectionId ?? 0;
    message.seqNumR2c = object.seqNumR2c ?? 0;
    message.seqNumE2e = object.seqNumE2e ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramConnectionStatsRouterToServer(): CMsgSteamDatagramConnectionStatsRouterToServer {
  return {
    qualityRelay: undefined,
    qualityE2e: undefined,
    ackRelay: [],
    legacyAckE2e: [],
    flags: 0,
    seqNumR2s: 0,
    seqNumE2e: 0,
    clientIdentityString: "",
    legacyClientSteamId: "0",
    relaySessionId: 0,
    clientConnectionId: 0,
    serverConnectionId: 0,
    routingSecret: "0",
  };
}

export const CMsgSteamDatagramConnectionStatsRouterToServer = {
  encode(
    message: CMsgSteamDatagramConnectionStatsRouterToServer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.qualityRelay !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.qualityRelay, writer.uint32(10).fork()).ldelim();
    }
    if (message.qualityE2e !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.qualityE2e, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(82).fork();
    for (const v of message.ackRelay) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(90).fork();
    for (const v of message.legacyAckE2e) {
      writer.fixed32(v);
    }
    writer.ldelim();
    if (message.flags !== 0) {
      writer.uint32(96).uint32(message.flags);
    }
    if (message.seqNumR2s !== 0) {
      writer.uint32(40).uint32(message.seqNumR2s);
    }
    if (message.seqNumE2e !== 0) {
      writer.uint32(48).uint32(message.seqNumE2e);
    }
    if (message.clientIdentityString !== "") {
      writer.uint32(122).string(message.clientIdentityString);
    }
    if (message.legacyClientSteamId !== "0") {
      writer.uint32(57).fixed64(message.legacyClientSteamId);
    }
    if (message.relaySessionId !== 0) {
      writer.uint32(64).uint32(message.relaySessionId);
    }
    if (message.clientConnectionId !== 0) {
      writer.uint32(77).fixed32(message.clientConnectionId);
    }
    if (message.serverConnectionId !== 0) {
      writer.uint32(109).fixed32(message.serverConnectionId);
    }
    if (message.routingSecret !== "0") {
      writer.uint32(113).fixed64(message.routingSecret);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramConnectionStatsRouterToServer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramConnectionStatsRouterToServer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.qualityRelay = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.qualityE2e = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag == 85) {
            message.ackRelay.push(reader.fixed32());
            continue;
          }

          if (tag == 82) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ackRelay.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 11:
          if (tag == 93) {
            message.legacyAckE2e.push(reader.fixed32());
            continue;
          }

          if (tag == 90) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.legacyAckE2e.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 12:
          if (tag != 96) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.seqNumR2s = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.seqNumE2e = reader.uint32();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.clientIdentityString = reader.string();
          continue;
        case 7:
          if (tag != 57) {
            break;
          }

          message.legacyClientSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.relaySessionId = reader.uint32();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.clientConnectionId = reader.fixed32();
          continue;
        case 13:
          if (tag != 109) {
            break;
          }

          message.serverConnectionId = reader.fixed32();
          continue;
        case 14:
          if (tag != 113) {
            break;
          }

          message.routingSecret = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramConnectionStatsRouterToServer {
    return {
      qualityRelay: isSet(object.qualityRelay)
        ? CMsgSteamDatagramConnectionQuality.fromJSON(object.qualityRelay)
        : undefined,
      qualityE2e: isSet(object.qualityE2e) ? CMsgSteamDatagramConnectionQuality.fromJSON(object.qualityE2e) : undefined,
      ackRelay: Array.isArray(object?.ackRelay) ? object.ackRelay.map((e: any) => Number(e)) : [],
      legacyAckE2e: Array.isArray(object?.legacyAckE2e) ? object.legacyAckE2e.map((e: any) => Number(e)) : [],
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      seqNumR2s: isSet(object.seqNumR2s) ? Number(object.seqNumR2s) : 0,
      seqNumE2e: isSet(object.seqNumE2e) ? Number(object.seqNumE2e) : 0,
      clientIdentityString: isSet(object.clientIdentityString) ? String(object.clientIdentityString) : "",
      legacyClientSteamId: isSet(object.legacyClientSteamId) ? String(object.legacyClientSteamId) : "0",
      relaySessionId: isSet(object.relaySessionId) ? Number(object.relaySessionId) : 0,
      clientConnectionId: isSet(object.clientConnectionId) ? Number(object.clientConnectionId) : 0,
      serverConnectionId: isSet(object.serverConnectionId) ? Number(object.serverConnectionId) : 0,
      routingSecret: isSet(object.routingSecret) ? String(object.routingSecret) : "0",
    };
  },

  toJSON(message: CMsgSteamDatagramConnectionStatsRouterToServer): unknown {
    const obj: any = {};
    message.qualityRelay !== undefined && (obj.qualityRelay = message.qualityRelay
      ? CMsgSteamDatagramConnectionQuality.toJSON(message.qualityRelay)
      : undefined);
    message.qualityE2e !== undefined &&
      (obj.qualityE2e = message.qualityE2e ? CMsgSteamDatagramConnectionQuality.toJSON(message.qualityE2e) : undefined);
    if (message.ackRelay) {
      obj.ackRelay = message.ackRelay.map((e) => Math.round(e));
    } else {
      obj.ackRelay = [];
    }
    if (message.legacyAckE2e) {
      obj.legacyAckE2e = message.legacyAckE2e.map((e) => Math.round(e));
    } else {
      obj.legacyAckE2e = [];
    }
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.seqNumR2s !== undefined && (obj.seqNumR2s = Math.round(message.seqNumR2s));
    message.seqNumE2e !== undefined && (obj.seqNumE2e = Math.round(message.seqNumE2e));
    message.clientIdentityString !== undefined && (obj.clientIdentityString = message.clientIdentityString);
    message.legacyClientSteamId !== undefined && (obj.legacyClientSteamId = message.legacyClientSteamId);
    message.relaySessionId !== undefined && (obj.relaySessionId = Math.round(message.relaySessionId));
    message.clientConnectionId !== undefined && (obj.clientConnectionId = Math.round(message.clientConnectionId));
    message.serverConnectionId !== undefined && (obj.serverConnectionId = Math.round(message.serverConnectionId));
    message.routingSecret !== undefined && (obj.routingSecret = message.routingSecret);
    return obj;
  },

  create(
    base?: DeepPartial<CMsgSteamDatagramConnectionStatsRouterToServer>,
  ): CMsgSteamDatagramConnectionStatsRouterToServer {
    return CMsgSteamDatagramConnectionStatsRouterToServer.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamDatagramConnectionStatsRouterToServer>,
  ): CMsgSteamDatagramConnectionStatsRouterToServer {
    const message = createBaseCMsgSteamDatagramConnectionStatsRouterToServer();
    message.qualityRelay = (object.qualityRelay !== undefined && object.qualityRelay !== null)
      ? CMsgSteamDatagramConnectionQuality.fromPartial(object.qualityRelay)
      : undefined;
    message.qualityE2e = (object.qualityE2e !== undefined && object.qualityE2e !== null)
      ? CMsgSteamDatagramConnectionQuality.fromPartial(object.qualityE2e)
      : undefined;
    message.ackRelay = object.ackRelay?.map((e) => e) || [];
    message.legacyAckE2e = object.legacyAckE2e?.map((e) => e) || [];
    message.flags = object.flags ?? 0;
    message.seqNumR2s = object.seqNumR2s ?? 0;
    message.seqNumE2e = object.seqNumE2e ?? 0;
    message.clientIdentityString = object.clientIdentityString ?? "";
    message.legacyClientSteamId = object.legacyClientSteamId ?? "0";
    message.relaySessionId = object.relaySessionId ?? 0;
    message.clientConnectionId = object.clientConnectionId ?? 0;
    message.serverConnectionId = object.serverConnectionId ?? 0;
    message.routingSecret = object.routingSecret ?? "0";
    return message;
  },
};

function createBaseCMsgSteamDatagramConnectionStatsServerToRouter(): CMsgSteamDatagramConnectionStatsServerToRouter {
  return {
    qualityRelay: undefined,
    qualityE2e: undefined,
    ackRelay: [],
    legacyAckE2e: [],
    flags: 0,
    seqNumS2r: 0,
    seqNumE2e: 0,
    relaySessionId: 0,
    clientConnectionId: 0,
    serverConnectionId: 0,
  };
}

export const CMsgSteamDatagramConnectionStatsServerToRouter = {
  encode(
    message: CMsgSteamDatagramConnectionStatsServerToRouter,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.qualityRelay !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.qualityRelay, writer.uint32(10).fork()).ldelim();
    }
    if (message.qualityE2e !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.qualityE2e, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(66).fork();
    for (const v of message.ackRelay) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(74).fork();
    for (const v of message.legacyAckE2e) {
      writer.fixed32(v);
    }
    writer.ldelim();
    if (message.flags !== 0) {
      writer.uint32(80).uint32(message.flags);
    }
    if (message.seqNumS2r !== 0) {
      writer.uint32(24).uint32(message.seqNumS2r);
    }
    if (message.seqNumE2e !== 0) {
      writer.uint32(32).uint32(message.seqNumE2e);
    }
    if (message.relaySessionId !== 0) {
      writer.uint32(48).uint32(message.relaySessionId);
    }
    if (message.clientConnectionId !== 0) {
      writer.uint32(61).fixed32(message.clientConnectionId);
    }
    if (message.serverConnectionId !== 0) {
      writer.uint32(93).fixed32(message.serverConnectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramConnectionStatsServerToRouter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramConnectionStatsServerToRouter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.qualityRelay = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.qualityE2e = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag == 69) {
            message.ackRelay.push(reader.fixed32());
            continue;
          }

          if (tag == 66) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ackRelay.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 9:
          if (tag == 77) {
            message.legacyAckE2e.push(reader.fixed32());
            continue;
          }

          if (tag == 74) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.legacyAckE2e.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 10:
          if (tag != 80) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.seqNumS2r = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.seqNumE2e = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.relaySessionId = reader.uint32();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.clientConnectionId = reader.fixed32();
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.serverConnectionId = reader.fixed32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramConnectionStatsServerToRouter {
    return {
      qualityRelay: isSet(object.qualityRelay)
        ? CMsgSteamDatagramConnectionQuality.fromJSON(object.qualityRelay)
        : undefined,
      qualityE2e: isSet(object.qualityE2e) ? CMsgSteamDatagramConnectionQuality.fromJSON(object.qualityE2e) : undefined,
      ackRelay: Array.isArray(object?.ackRelay) ? object.ackRelay.map((e: any) => Number(e)) : [],
      legacyAckE2e: Array.isArray(object?.legacyAckE2e) ? object.legacyAckE2e.map((e: any) => Number(e)) : [],
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      seqNumS2r: isSet(object.seqNumS2r) ? Number(object.seqNumS2r) : 0,
      seqNumE2e: isSet(object.seqNumE2e) ? Number(object.seqNumE2e) : 0,
      relaySessionId: isSet(object.relaySessionId) ? Number(object.relaySessionId) : 0,
      clientConnectionId: isSet(object.clientConnectionId) ? Number(object.clientConnectionId) : 0,
      serverConnectionId: isSet(object.serverConnectionId) ? Number(object.serverConnectionId) : 0,
    };
  },

  toJSON(message: CMsgSteamDatagramConnectionStatsServerToRouter): unknown {
    const obj: any = {};
    message.qualityRelay !== undefined && (obj.qualityRelay = message.qualityRelay
      ? CMsgSteamDatagramConnectionQuality.toJSON(message.qualityRelay)
      : undefined);
    message.qualityE2e !== undefined &&
      (obj.qualityE2e = message.qualityE2e ? CMsgSteamDatagramConnectionQuality.toJSON(message.qualityE2e) : undefined);
    if (message.ackRelay) {
      obj.ackRelay = message.ackRelay.map((e) => Math.round(e));
    } else {
      obj.ackRelay = [];
    }
    if (message.legacyAckE2e) {
      obj.legacyAckE2e = message.legacyAckE2e.map((e) => Math.round(e));
    } else {
      obj.legacyAckE2e = [];
    }
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.seqNumS2r !== undefined && (obj.seqNumS2r = Math.round(message.seqNumS2r));
    message.seqNumE2e !== undefined && (obj.seqNumE2e = Math.round(message.seqNumE2e));
    message.relaySessionId !== undefined && (obj.relaySessionId = Math.round(message.relaySessionId));
    message.clientConnectionId !== undefined && (obj.clientConnectionId = Math.round(message.clientConnectionId));
    message.serverConnectionId !== undefined && (obj.serverConnectionId = Math.round(message.serverConnectionId));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgSteamDatagramConnectionStatsServerToRouter>,
  ): CMsgSteamDatagramConnectionStatsServerToRouter {
    return CMsgSteamDatagramConnectionStatsServerToRouter.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamDatagramConnectionStatsServerToRouter>,
  ): CMsgSteamDatagramConnectionStatsServerToRouter {
    const message = createBaseCMsgSteamDatagramConnectionStatsServerToRouter();
    message.qualityRelay = (object.qualityRelay !== undefined && object.qualityRelay !== null)
      ? CMsgSteamDatagramConnectionQuality.fromPartial(object.qualityRelay)
      : undefined;
    message.qualityE2e = (object.qualityE2e !== undefined && object.qualityE2e !== null)
      ? CMsgSteamDatagramConnectionQuality.fromPartial(object.qualityE2e)
      : undefined;
    message.ackRelay = object.ackRelay?.map((e) => e) || [];
    message.legacyAckE2e = object.legacyAckE2e?.map((e) => e) || [];
    message.flags = object.flags ?? 0;
    message.seqNumS2r = object.seqNumS2r ?? 0;
    message.seqNumE2e = object.seqNumE2e ?? 0;
    message.relaySessionId = object.relaySessionId ?? 0;
    message.clientConnectionId = object.clientConnectionId ?? 0;
    message.serverConnectionId = object.serverConnectionId ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramP2PSessionRequestBody(): CMsgSteamDatagramP2PSessionRequestBody {
  return {
    challengeTime: 0,
    challenge: "0",
    clientConnectionId: 0,
    legacyPeerSteamId: "0",
    peerIdentityString: "",
    peerConnectionId: 0,
    encryptedData: Buffer.alloc(0),
    encryptionYourPublicKeyLeadByte: 0,
    encryptionMyEphemeralPublicKey: Buffer.alloc(0),
    protocolVersion: 0,
    networkConfigVersion: "0",
    platform: "",
    build: "",
  };
}

export const CMsgSteamDatagramP2PSessionRequestBody = {
  encode(message: CMsgSteamDatagramP2PSessionRequestBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challengeTime !== 0) {
      writer.uint32(13).fixed32(message.challengeTime);
    }
    if (message.challenge !== "0") {
      writer.uint32(17).fixed64(message.challenge);
    }
    if (message.clientConnectionId !== 0) {
      writer.uint32(29).fixed32(message.clientConnectionId);
    }
    if (message.legacyPeerSteamId !== "0") {
      writer.uint32(33).fixed64(message.legacyPeerSteamId);
    }
    if (message.peerIdentityString !== "") {
      writer.uint32(90).string(message.peerIdentityString);
    }
    if (message.peerConnectionId !== 0) {
      writer.uint32(45).fixed32(message.peerConnectionId);
    }
    if (message.encryptedData.length !== 0) {
      writer.uint32(114).bytes(message.encryptedData);
    }
    if (message.encryptionYourPublicKeyLeadByte !== 0) {
      writer.uint32(120).uint32(message.encryptionYourPublicKeyLeadByte);
    }
    if (message.encryptionMyEphemeralPublicKey.length !== 0) {
      writer.uint32(130).bytes(message.encryptionMyEphemeralPublicKey);
    }
    if (message.protocolVersion !== 0) {
      writer.uint32(64).uint32(message.protocolVersion);
    }
    if (message.networkConfigVersion !== "0") {
      writer.uint32(72).uint64(message.networkConfigVersion);
    }
    if (message.platform !== "") {
      writer.uint32(98).string(message.platform);
    }
    if (message.build !== "") {
      writer.uint32(106).string(message.build);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramP2PSessionRequestBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramP2PSessionRequestBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.challengeTime = reader.fixed32();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.challenge = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.clientConnectionId = reader.fixed32();
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.legacyPeerSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.peerIdentityString = reader.string();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.peerConnectionId = reader.fixed32();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.encryptedData = reader.bytes() as Buffer;
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.encryptionYourPublicKeyLeadByte = reader.uint32();
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.encryptionMyEphemeralPublicKey = reader.bytes() as Buffer;
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.protocolVersion = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.networkConfigVersion = longToString(reader.uint64() as Long);
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.build = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramP2PSessionRequestBody {
    return {
      challengeTime: isSet(object.challengeTime) ? Number(object.challengeTime) : 0,
      challenge: isSet(object.challenge) ? String(object.challenge) : "0",
      clientConnectionId: isSet(object.clientConnectionId) ? Number(object.clientConnectionId) : 0,
      legacyPeerSteamId: isSet(object.legacyPeerSteamId) ? String(object.legacyPeerSteamId) : "0",
      peerIdentityString: isSet(object.peerIdentityString) ? String(object.peerIdentityString) : "",
      peerConnectionId: isSet(object.peerConnectionId) ? Number(object.peerConnectionId) : 0,
      encryptedData: isSet(object.encryptedData) ? Buffer.from(bytesFromBase64(object.encryptedData)) : Buffer.alloc(0),
      encryptionYourPublicKeyLeadByte: isSet(object.encryptionYourPublicKeyLeadByte)
        ? Number(object.encryptionYourPublicKeyLeadByte)
        : 0,
      encryptionMyEphemeralPublicKey: isSet(object.encryptionMyEphemeralPublicKey)
        ? Buffer.from(bytesFromBase64(object.encryptionMyEphemeralPublicKey))
        : Buffer.alloc(0),
      protocolVersion: isSet(object.protocolVersion) ? Number(object.protocolVersion) : 0,
      networkConfigVersion: isSet(object.networkConfigVersion) ? String(object.networkConfigVersion) : "0",
      platform: isSet(object.platform) ? String(object.platform) : "",
      build: isSet(object.build) ? String(object.build) : "",
    };
  },

  toJSON(message: CMsgSteamDatagramP2PSessionRequestBody): unknown {
    const obj: any = {};
    message.challengeTime !== undefined && (obj.challengeTime = Math.round(message.challengeTime));
    message.challenge !== undefined && (obj.challenge = message.challenge);
    message.clientConnectionId !== undefined && (obj.clientConnectionId = Math.round(message.clientConnectionId));
    message.legacyPeerSteamId !== undefined && (obj.legacyPeerSteamId = message.legacyPeerSteamId);
    message.peerIdentityString !== undefined && (obj.peerIdentityString = message.peerIdentityString);
    message.peerConnectionId !== undefined && (obj.peerConnectionId = Math.round(message.peerConnectionId));
    message.encryptedData !== undefined &&
      (obj.encryptedData = base64FromBytes(
        message.encryptedData !== undefined ? message.encryptedData : Buffer.alloc(0),
      ));
    message.encryptionYourPublicKeyLeadByte !== undefined &&
      (obj.encryptionYourPublicKeyLeadByte = Math.round(message.encryptionYourPublicKeyLeadByte));
    message.encryptionMyEphemeralPublicKey !== undefined &&
      (obj.encryptionMyEphemeralPublicKey = base64FromBytes(
        message.encryptionMyEphemeralPublicKey !== undefined ? message.encryptionMyEphemeralPublicKey : Buffer.alloc(0),
      ));
    message.protocolVersion !== undefined && (obj.protocolVersion = Math.round(message.protocolVersion));
    message.networkConfigVersion !== undefined && (obj.networkConfigVersion = message.networkConfigVersion);
    message.platform !== undefined && (obj.platform = message.platform);
    message.build !== undefined && (obj.build = message.build);
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramP2PSessionRequestBody>): CMsgSteamDatagramP2PSessionRequestBody {
    return CMsgSteamDatagramP2PSessionRequestBody.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramP2PSessionRequestBody>): CMsgSteamDatagramP2PSessionRequestBody {
    const message = createBaseCMsgSteamDatagramP2PSessionRequestBody();
    message.challengeTime = object.challengeTime ?? 0;
    message.challenge = object.challenge ?? "0";
    message.clientConnectionId = object.clientConnectionId ?? 0;
    message.legacyPeerSteamId = object.legacyPeerSteamId ?? "0";
    message.peerIdentityString = object.peerIdentityString ?? "";
    message.peerConnectionId = object.peerConnectionId ?? 0;
    message.encryptedData = object.encryptedData ?? Buffer.alloc(0);
    message.encryptionYourPublicKeyLeadByte = object.encryptionYourPublicKeyLeadByte ?? 0;
    message.encryptionMyEphemeralPublicKey = object.encryptionMyEphemeralPublicKey ?? Buffer.alloc(0);
    message.protocolVersion = object.protocolVersion ?? 0;
    message.networkConfigVersion = object.networkConfigVersion ?? "0";
    message.platform = object.platform ?? "";
    message.build = object.build ?? "";
    return message;
  },
};

function createBaseCMsgSteamDatagramP2PSessionRequestBody_EncryptedData(): CMsgSteamDatagramP2PSessionRequestBody_EncryptedData {
  return { peerIdentityString: "" };
}

export const CMsgSteamDatagramP2PSessionRequestBody_EncryptedData = {
  encode(
    message: CMsgSteamDatagramP2PSessionRequestBody_EncryptedData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.peerIdentityString !== "") {
      writer.uint32(10).string(message.peerIdentityString);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramP2PSessionRequestBody_EncryptedData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramP2PSessionRequestBody_EncryptedData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.peerIdentityString = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramP2PSessionRequestBody_EncryptedData {
    return { peerIdentityString: isSet(object.peerIdentityString) ? String(object.peerIdentityString) : "" };
  },

  toJSON(message: CMsgSteamDatagramP2PSessionRequestBody_EncryptedData): unknown {
    const obj: any = {};
    message.peerIdentityString !== undefined && (obj.peerIdentityString = message.peerIdentityString);
    return obj;
  },

  create(
    base?: DeepPartial<CMsgSteamDatagramP2PSessionRequestBody_EncryptedData>,
  ): CMsgSteamDatagramP2PSessionRequestBody_EncryptedData {
    return CMsgSteamDatagramP2PSessionRequestBody_EncryptedData.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamDatagramP2PSessionRequestBody_EncryptedData>,
  ): CMsgSteamDatagramP2PSessionRequestBody_EncryptedData {
    const message = createBaseCMsgSteamDatagramP2PSessionRequestBody_EncryptedData();
    message.peerIdentityString = object.peerIdentityString ?? "";
    return message;
  },
};

function createBaseCMsgSteamDatagramP2PSessionRequest(): CMsgSteamDatagramP2PSessionRequest {
  return { cert: undefined, body: Buffer.alloc(0), signature: Buffer.alloc(0) };
}

export const CMsgSteamDatagramP2PSessionRequest = {
  encode(message: CMsgSteamDatagramP2PSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cert !== undefined) {
      CMsgSteamDatagramCertificateSigned.encode(message.cert, writer.uint32(10).fork()).ldelim();
    }
    if (message.body.length !== 0) {
      writer.uint32(18).bytes(message.body);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramP2PSessionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramP2PSessionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.cert = CMsgSteamDatagramCertificateSigned.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.body = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.signature = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramP2PSessionRequest {
    return {
      cert: isSet(object.cert) ? CMsgSteamDatagramCertificateSigned.fromJSON(object.cert) : undefined,
      body: isSet(object.body) ? Buffer.from(bytesFromBase64(object.body)) : Buffer.alloc(0),
      signature: isSet(object.signature) ? Buffer.from(bytesFromBase64(object.signature)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgSteamDatagramP2PSessionRequest): unknown {
    const obj: any = {};
    message.cert !== undefined &&
      (obj.cert = message.cert ? CMsgSteamDatagramCertificateSigned.toJSON(message.cert) : undefined);
    message.body !== undefined &&
      (obj.body = base64FromBytes(message.body !== undefined ? message.body : Buffer.alloc(0)));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramP2PSessionRequest>): CMsgSteamDatagramP2PSessionRequest {
    return CMsgSteamDatagramP2PSessionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramP2PSessionRequest>): CMsgSteamDatagramP2PSessionRequest {
    const message = createBaseCMsgSteamDatagramP2PSessionRequest();
    message.cert = (object.cert !== undefined && object.cert !== null)
      ? CMsgSteamDatagramCertificateSigned.fromPartial(object.cert)
      : undefined;
    message.body = object.body ?? Buffer.alloc(0);
    message.signature = object.signature ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgSteamDatagramP2PSessionEstablished(): CMsgSteamDatagramP2PSessionEstablished {
  return { connectionId: 0, secondsUntilShutdown: 0, relayRoutingToken: Buffer.alloc(0), seqNumR2c: 0 };
}

export const CMsgSteamDatagramP2PSessionEstablished = {
  encode(message: CMsgSteamDatagramP2PSessionEstablished, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(13).fixed32(message.connectionId);
    }
    if (message.secondsUntilShutdown !== 0) {
      writer.uint32(24).uint32(message.secondsUntilShutdown);
    }
    if (message.relayRoutingToken.length !== 0) {
      writer.uint32(34).bytes(message.relayRoutingToken);
    }
    if (message.seqNumR2c !== 0) {
      writer.uint32(40).uint32(message.seqNumR2c);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramP2PSessionEstablished {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramP2PSessionEstablished();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.connectionId = reader.fixed32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.secondsUntilShutdown = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.relayRoutingToken = reader.bytes() as Buffer;
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.seqNumR2c = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramP2PSessionEstablished {
    return {
      connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0,
      secondsUntilShutdown: isSet(object.secondsUntilShutdown) ? Number(object.secondsUntilShutdown) : 0,
      relayRoutingToken: isSet(object.relayRoutingToken)
        ? Buffer.from(bytesFromBase64(object.relayRoutingToken))
        : Buffer.alloc(0),
      seqNumR2c: isSet(object.seqNumR2c) ? Number(object.seqNumR2c) : 0,
    };
  },

  toJSON(message: CMsgSteamDatagramP2PSessionEstablished): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = Math.round(message.connectionId));
    message.secondsUntilShutdown !== undefined && (obj.secondsUntilShutdown = Math.round(message.secondsUntilShutdown));
    message.relayRoutingToken !== undefined &&
      (obj.relayRoutingToken = base64FromBytes(
        message.relayRoutingToken !== undefined ? message.relayRoutingToken : Buffer.alloc(0),
      ));
    message.seqNumR2c !== undefined && (obj.seqNumR2c = Math.round(message.seqNumR2c));
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramP2PSessionEstablished>): CMsgSteamDatagramP2PSessionEstablished {
    return CMsgSteamDatagramP2PSessionEstablished.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramP2PSessionEstablished>): CMsgSteamDatagramP2PSessionEstablished {
    const message = createBaseCMsgSteamDatagramP2PSessionEstablished();
    message.connectionId = object.connectionId ?? 0;
    message.secondsUntilShutdown = object.secondsUntilShutdown ?? 0;
    message.relayRoutingToken = object.relayRoutingToken ?? Buffer.alloc(0);
    message.seqNumR2c = object.seqNumR2c ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramConnectionStatsP2PClientToRouter(): CMsgSteamDatagramConnectionStatsP2PClientToRouter {
  return {
    qualityRelay: undefined,
    qualityE2e: undefined,
    p2pRoutingSummary: undefined,
    ackRelay: [],
    legacyAckE2e: [],
    flags: 0,
    forwardTargetRelayRoutingToken: Buffer.alloc(0),
    forwardTargetRevision: 0,
    routes: Buffer.alloc(0),
    ackPeerRoutesRevision: 0,
    connectionId: 0,
    seqNumC2r: 0,
    seqNumE2e: 0,
  };
}

export const CMsgSteamDatagramConnectionStatsP2PClientToRouter = {
  encode(
    message: CMsgSteamDatagramConnectionStatsP2PClientToRouter,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.qualityRelay !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.qualityRelay, writer.uint32(10).fork()).ldelim();
    }
    if (message.qualityE2e !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.qualityE2e, writer.uint32(18).fork()).ldelim();
    }
    if (message.p2pRoutingSummary !== undefined) {
      CMsgSteamDatagramP2PRoutingSummary.encode(message.p2pRoutingSummary, writer.uint32(114).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.ackRelay) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.legacyAckE2e) {
      writer.fixed32(v);
    }
    writer.ldelim();
    if (message.flags !== 0) {
      writer.uint32(40).uint32(message.flags);
    }
    if (message.forwardTargetRelayRoutingToken.length !== 0) {
      writer.uint32(50).bytes(message.forwardTargetRelayRoutingToken);
    }
    if (message.forwardTargetRevision !== 0) {
      writer.uint32(56).uint32(message.forwardTargetRevision);
    }
    if (message.routes.length !== 0) {
      writer.uint32(66).bytes(message.routes);
    }
    if (message.ackPeerRoutesRevision !== 0) {
      writer.uint32(72).uint32(message.ackPeerRoutesRevision);
    }
    if (message.connectionId !== 0) {
      writer.uint32(85).fixed32(message.connectionId);
    }
    if (message.seqNumC2r !== 0) {
      writer.uint32(88).uint32(message.seqNumC2r);
    }
    if (message.seqNumE2e !== 0) {
      writer.uint32(96).uint32(message.seqNumE2e);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramConnectionStatsP2PClientToRouter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramConnectionStatsP2PClientToRouter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.qualityRelay = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.qualityE2e = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.p2pRoutingSummary = CMsgSteamDatagramP2PRoutingSummary.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag == 29) {
            message.ackRelay.push(reader.fixed32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ackRelay.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 4:
          if (tag == 37) {
            message.legacyAckE2e.push(reader.fixed32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.legacyAckE2e.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 5:
          if (tag != 40) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.forwardTargetRelayRoutingToken = reader.bytes() as Buffer;
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.forwardTargetRevision = reader.uint32();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.routes = reader.bytes() as Buffer;
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.ackPeerRoutesRevision = reader.uint32();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.connectionId = reader.fixed32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.seqNumC2r = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.seqNumE2e = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramConnectionStatsP2PClientToRouter {
    return {
      qualityRelay: isSet(object.qualityRelay)
        ? CMsgSteamDatagramConnectionQuality.fromJSON(object.qualityRelay)
        : undefined,
      qualityE2e: isSet(object.qualityE2e) ? CMsgSteamDatagramConnectionQuality.fromJSON(object.qualityE2e) : undefined,
      p2pRoutingSummary: isSet(object.p2pRoutingSummary)
        ? CMsgSteamDatagramP2PRoutingSummary.fromJSON(object.p2pRoutingSummary)
        : undefined,
      ackRelay: Array.isArray(object?.ackRelay) ? object.ackRelay.map((e: any) => Number(e)) : [],
      legacyAckE2e: Array.isArray(object?.legacyAckE2e) ? object.legacyAckE2e.map((e: any) => Number(e)) : [],
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      forwardTargetRelayRoutingToken: isSet(object.forwardTargetRelayRoutingToken)
        ? Buffer.from(bytesFromBase64(object.forwardTargetRelayRoutingToken))
        : Buffer.alloc(0),
      forwardTargetRevision: isSet(object.forwardTargetRevision) ? Number(object.forwardTargetRevision) : 0,
      routes: isSet(object.routes) ? Buffer.from(bytesFromBase64(object.routes)) : Buffer.alloc(0),
      ackPeerRoutesRevision: isSet(object.ackPeerRoutesRevision) ? Number(object.ackPeerRoutesRevision) : 0,
      connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0,
      seqNumC2r: isSet(object.seqNumC2r) ? Number(object.seqNumC2r) : 0,
      seqNumE2e: isSet(object.seqNumE2e) ? Number(object.seqNumE2e) : 0,
    };
  },

  toJSON(message: CMsgSteamDatagramConnectionStatsP2PClientToRouter): unknown {
    const obj: any = {};
    message.qualityRelay !== undefined && (obj.qualityRelay = message.qualityRelay
      ? CMsgSteamDatagramConnectionQuality.toJSON(message.qualityRelay)
      : undefined);
    message.qualityE2e !== undefined &&
      (obj.qualityE2e = message.qualityE2e ? CMsgSteamDatagramConnectionQuality.toJSON(message.qualityE2e) : undefined);
    message.p2pRoutingSummary !== undefined && (obj.p2pRoutingSummary = message.p2pRoutingSummary
      ? CMsgSteamDatagramP2PRoutingSummary.toJSON(message.p2pRoutingSummary)
      : undefined);
    if (message.ackRelay) {
      obj.ackRelay = message.ackRelay.map((e) => Math.round(e));
    } else {
      obj.ackRelay = [];
    }
    if (message.legacyAckE2e) {
      obj.legacyAckE2e = message.legacyAckE2e.map((e) => Math.round(e));
    } else {
      obj.legacyAckE2e = [];
    }
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.forwardTargetRelayRoutingToken !== undefined &&
      (obj.forwardTargetRelayRoutingToken = base64FromBytes(
        message.forwardTargetRelayRoutingToken !== undefined ? message.forwardTargetRelayRoutingToken : Buffer.alloc(0),
      ));
    message.forwardTargetRevision !== undefined &&
      (obj.forwardTargetRevision = Math.round(message.forwardTargetRevision));
    message.routes !== undefined &&
      (obj.routes = base64FromBytes(message.routes !== undefined ? message.routes : Buffer.alloc(0)));
    message.ackPeerRoutesRevision !== undefined &&
      (obj.ackPeerRoutesRevision = Math.round(message.ackPeerRoutesRevision));
    message.connectionId !== undefined && (obj.connectionId = Math.round(message.connectionId));
    message.seqNumC2r !== undefined && (obj.seqNumC2r = Math.round(message.seqNumC2r));
    message.seqNumE2e !== undefined && (obj.seqNumE2e = Math.round(message.seqNumE2e));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgSteamDatagramConnectionStatsP2PClientToRouter>,
  ): CMsgSteamDatagramConnectionStatsP2PClientToRouter {
    return CMsgSteamDatagramConnectionStatsP2PClientToRouter.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamDatagramConnectionStatsP2PClientToRouter>,
  ): CMsgSteamDatagramConnectionStatsP2PClientToRouter {
    const message = createBaseCMsgSteamDatagramConnectionStatsP2PClientToRouter();
    message.qualityRelay = (object.qualityRelay !== undefined && object.qualityRelay !== null)
      ? CMsgSteamDatagramConnectionQuality.fromPartial(object.qualityRelay)
      : undefined;
    message.qualityE2e = (object.qualityE2e !== undefined && object.qualityE2e !== null)
      ? CMsgSteamDatagramConnectionQuality.fromPartial(object.qualityE2e)
      : undefined;
    message.p2pRoutingSummary = (object.p2pRoutingSummary !== undefined && object.p2pRoutingSummary !== null)
      ? CMsgSteamDatagramP2PRoutingSummary.fromPartial(object.p2pRoutingSummary)
      : undefined;
    message.ackRelay = object.ackRelay?.map((e) => e) || [];
    message.legacyAckE2e = object.legacyAckE2e?.map((e) => e) || [];
    message.flags = object.flags ?? 0;
    message.forwardTargetRelayRoutingToken = object.forwardTargetRelayRoutingToken ?? Buffer.alloc(0);
    message.forwardTargetRevision = object.forwardTargetRevision ?? 0;
    message.routes = object.routes ?? Buffer.alloc(0);
    message.ackPeerRoutesRevision = object.ackPeerRoutesRevision ?? 0;
    message.connectionId = object.connectionId ?? 0;
    message.seqNumC2r = object.seqNumC2r ?? 0;
    message.seqNumE2e = object.seqNumE2e ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramConnectionStatsP2PRouterToClient(): CMsgSteamDatagramConnectionStatsP2PRouterToClient {
  return {
    qualityRelay: undefined,
    qualityE2e: undefined,
    secondsUntilShutdown: 0,
    migrateRequestIp: 0,
    migrateRequestPort: 0,
    scoringPenaltyRelayCluster: 0,
    ackRelay: [],
    legacyAckE2e: [],
    flags: 0,
    ackForwardTargetRevision: 0,
    routes: Buffer.alloc(0),
    ackPeerRoutesRevision: 0,
    connectionId: 0,
    seqNumR2c: 0,
    seqNumE2e: 0,
  };
}

export const CMsgSteamDatagramConnectionStatsP2PRouterToClient = {
  encode(
    message: CMsgSteamDatagramConnectionStatsP2PRouterToClient,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.qualityRelay !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.qualityRelay, writer.uint32(10).fork()).ldelim();
    }
    if (message.qualityE2e !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.qualityE2e, writer.uint32(18).fork()).ldelim();
    }
    if (message.secondsUntilShutdown !== 0) {
      writer.uint32(24).uint32(message.secondsUntilShutdown);
    }
    if (message.migrateRequestIp !== 0) {
      writer.uint32(37).fixed32(message.migrateRequestIp);
    }
    if (message.migrateRequestPort !== 0) {
      writer.uint32(40).uint32(message.migrateRequestPort);
    }
    if (message.scoringPenaltyRelayCluster !== 0) {
      writer.uint32(48).uint32(message.scoringPenaltyRelayCluster);
    }
    writer.uint32(58).fork();
    for (const v of message.ackRelay) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(66).fork();
    for (const v of message.legacyAckE2e) {
      writer.fixed32(v);
    }
    writer.ldelim();
    if (message.flags !== 0) {
      writer.uint32(72).uint32(message.flags);
    }
    if (message.ackForwardTargetRevision !== 0) {
      writer.uint32(80).uint32(message.ackForwardTargetRevision);
    }
    if (message.routes.length !== 0) {
      writer.uint32(90).bytes(message.routes);
    }
    if (message.ackPeerRoutesRevision !== 0) {
      writer.uint32(96).uint32(message.ackPeerRoutesRevision);
    }
    if (message.connectionId !== 0) {
      writer.uint32(109).fixed32(message.connectionId);
    }
    if (message.seqNumR2c !== 0) {
      writer.uint32(112).uint32(message.seqNumR2c);
    }
    if (message.seqNumE2e !== 0) {
      writer.uint32(120).uint32(message.seqNumE2e);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramConnectionStatsP2PRouterToClient {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramConnectionStatsP2PRouterToClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.qualityRelay = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.qualityE2e = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.secondsUntilShutdown = reader.uint32();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.migrateRequestIp = reader.fixed32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.migrateRequestPort = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.scoringPenaltyRelayCluster = reader.uint32();
          continue;
        case 7:
          if (tag == 61) {
            message.ackRelay.push(reader.fixed32());
            continue;
          }

          if (tag == 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ackRelay.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 8:
          if (tag == 69) {
            message.legacyAckE2e.push(reader.fixed32());
            continue;
          }

          if (tag == 66) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.legacyAckE2e.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 9:
          if (tag != 72) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.ackForwardTargetRevision = reader.uint32();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.routes = reader.bytes() as Buffer;
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.ackPeerRoutesRevision = reader.uint32();
          continue;
        case 13:
          if (tag != 109) {
            break;
          }

          message.connectionId = reader.fixed32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.seqNumR2c = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.seqNumE2e = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramConnectionStatsP2PRouterToClient {
    return {
      qualityRelay: isSet(object.qualityRelay)
        ? CMsgSteamDatagramConnectionQuality.fromJSON(object.qualityRelay)
        : undefined,
      qualityE2e: isSet(object.qualityE2e) ? CMsgSteamDatagramConnectionQuality.fromJSON(object.qualityE2e) : undefined,
      secondsUntilShutdown: isSet(object.secondsUntilShutdown) ? Number(object.secondsUntilShutdown) : 0,
      migrateRequestIp: isSet(object.migrateRequestIp) ? Number(object.migrateRequestIp) : 0,
      migrateRequestPort: isSet(object.migrateRequestPort) ? Number(object.migrateRequestPort) : 0,
      scoringPenaltyRelayCluster: isSet(object.scoringPenaltyRelayCluster)
        ? Number(object.scoringPenaltyRelayCluster)
        : 0,
      ackRelay: Array.isArray(object?.ackRelay) ? object.ackRelay.map((e: any) => Number(e)) : [],
      legacyAckE2e: Array.isArray(object?.legacyAckE2e) ? object.legacyAckE2e.map((e: any) => Number(e)) : [],
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      ackForwardTargetRevision: isSet(object.ackForwardTargetRevision) ? Number(object.ackForwardTargetRevision) : 0,
      routes: isSet(object.routes) ? Buffer.from(bytesFromBase64(object.routes)) : Buffer.alloc(0),
      ackPeerRoutesRevision: isSet(object.ackPeerRoutesRevision) ? Number(object.ackPeerRoutesRevision) : 0,
      connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0,
      seqNumR2c: isSet(object.seqNumR2c) ? Number(object.seqNumR2c) : 0,
      seqNumE2e: isSet(object.seqNumE2e) ? Number(object.seqNumE2e) : 0,
    };
  },

  toJSON(message: CMsgSteamDatagramConnectionStatsP2PRouterToClient): unknown {
    const obj: any = {};
    message.qualityRelay !== undefined && (obj.qualityRelay = message.qualityRelay
      ? CMsgSteamDatagramConnectionQuality.toJSON(message.qualityRelay)
      : undefined);
    message.qualityE2e !== undefined &&
      (obj.qualityE2e = message.qualityE2e ? CMsgSteamDatagramConnectionQuality.toJSON(message.qualityE2e) : undefined);
    message.secondsUntilShutdown !== undefined && (obj.secondsUntilShutdown = Math.round(message.secondsUntilShutdown));
    message.migrateRequestIp !== undefined && (obj.migrateRequestIp = Math.round(message.migrateRequestIp));
    message.migrateRequestPort !== undefined && (obj.migrateRequestPort = Math.round(message.migrateRequestPort));
    message.scoringPenaltyRelayCluster !== undefined &&
      (obj.scoringPenaltyRelayCluster = Math.round(message.scoringPenaltyRelayCluster));
    if (message.ackRelay) {
      obj.ackRelay = message.ackRelay.map((e) => Math.round(e));
    } else {
      obj.ackRelay = [];
    }
    if (message.legacyAckE2e) {
      obj.legacyAckE2e = message.legacyAckE2e.map((e) => Math.round(e));
    } else {
      obj.legacyAckE2e = [];
    }
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.ackForwardTargetRevision !== undefined &&
      (obj.ackForwardTargetRevision = Math.round(message.ackForwardTargetRevision));
    message.routes !== undefined &&
      (obj.routes = base64FromBytes(message.routes !== undefined ? message.routes : Buffer.alloc(0)));
    message.ackPeerRoutesRevision !== undefined &&
      (obj.ackPeerRoutesRevision = Math.round(message.ackPeerRoutesRevision));
    message.connectionId !== undefined && (obj.connectionId = Math.round(message.connectionId));
    message.seqNumR2c !== undefined && (obj.seqNumR2c = Math.round(message.seqNumR2c));
    message.seqNumE2e !== undefined && (obj.seqNumE2e = Math.round(message.seqNumE2e));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgSteamDatagramConnectionStatsP2PRouterToClient>,
  ): CMsgSteamDatagramConnectionStatsP2PRouterToClient {
    return CMsgSteamDatagramConnectionStatsP2PRouterToClient.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamDatagramConnectionStatsP2PRouterToClient>,
  ): CMsgSteamDatagramConnectionStatsP2PRouterToClient {
    const message = createBaseCMsgSteamDatagramConnectionStatsP2PRouterToClient();
    message.qualityRelay = (object.qualityRelay !== undefined && object.qualityRelay !== null)
      ? CMsgSteamDatagramConnectionQuality.fromPartial(object.qualityRelay)
      : undefined;
    message.qualityE2e = (object.qualityE2e !== undefined && object.qualityE2e !== null)
      ? CMsgSteamDatagramConnectionQuality.fromPartial(object.qualityE2e)
      : undefined;
    message.secondsUntilShutdown = object.secondsUntilShutdown ?? 0;
    message.migrateRequestIp = object.migrateRequestIp ?? 0;
    message.migrateRequestPort = object.migrateRequestPort ?? 0;
    message.scoringPenaltyRelayCluster = object.scoringPenaltyRelayCluster ?? 0;
    message.ackRelay = object.ackRelay?.map((e) => e) || [];
    message.legacyAckE2e = object.legacyAckE2e?.map((e) => e) || [];
    message.flags = object.flags ?? 0;
    message.ackForwardTargetRevision = object.ackForwardTargetRevision ?? 0;
    message.routes = object.routes ?? Buffer.alloc(0);
    message.ackPeerRoutesRevision = object.ackPeerRoutesRevision ?? 0;
    message.connectionId = object.connectionId ?? 0;
    message.seqNumR2c = object.seqNumR2c ?? 0;
    message.seqNumE2e = object.seqNumE2e ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramP2PBadRouteRouterToClient(): CMsgSteamDatagramP2PBadRouteRouterToClient {
  return { connectionId: 0, failedRelayRoutingToken: Buffer.alloc(0), ackForwardTargetRevision: 0, kludgePad: "0" };
}

export const CMsgSteamDatagramP2PBadRouteRouterToClient = {
  encode(message: CMsgSteamDatagramP2PBadRouteRouterToClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(13).fixed32(message.connectionId);
    }
    if (message.failedRelayRoutingToken.length !== 0) {
      writer.uint32(18).bytes(message.failedRelayRoutingToken);
    }
    if (message.ackForwardTargetRevision !== 0) {
      writer.uint32(24).uint32(message.ackForwardTargetRevision);
    }
    if (message.kludgePad !== "0") {
      writer.uint32(793).fixed64(message.kludgePad);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramP2PBadRouteRouterToClient {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramP2PBadRouteRouterToClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.connectionId = reader.fixed32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.failedRelayRoutingToken = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.ackForwardTargetRevision = reader.uint32();
          continue;
        case 99:
          if (tag != 793) {
            break;
          }

          message.kludgePad = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramP2PBadRouteRouterToClient {
    return {
      connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0,
      failedRelayRoutingToken: isSet(object.failedRelayRoutingToken)
        ? Buffer.from(bytesFromBase64(object.failedRelayRoutingToken))
        : Buffer.alloc(0),
      ackForwardTargetRevision: isSet(object.ackForwardTargetRevision) ? Number(object.ackForwardTargetRevision) : 0,
      kludgePad: isSet(object.kludgePad) ? String(object.kludgePad) : "0",
    };
  },

  toJSON(message: CMsgSteamDatagramP2PBadRouteRouterToClient): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = Math.round(message.connectionId));
    message.failedRelayRoutingToken !== undefined &&
      (obj.failedRelayRoutingToken = base64FromBytes(
        message.failedRelayRoutingToken !== undefined ? message.failedRelayRoutingToken : Buffer.alloc(0),
      ));
    message.ackForwardTargetRevision !== undefined &&
      (obj.ackForwardTargetRevision = Math.round(message.ackForwardTargetRevision));
    message.kludgePad !== undefined && (obj.kludgePad = message.kludgePad);
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramP2PBadRouteRouterToClient>): CMsgSteamDatagramP2PBadRouteRouterToClient {
    return CMsgSteamDatagramP2PBadRouteRouterToClient.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamDatagramP2PBadRouteRouterToClient>,
  ): CMsgSteamDatagramP2PBadRouteRouterToClient {
    const message = createBaseCMsgSteamDatagramP2PBadRouteRouterToClient();
    message.connectionId = object.connectionId ?? 0;
    message.failedRelayRoutingToken = object.failedRelayRoutingToken ?? Buffer.alloc(0);
    message.ackForwardTargetRevision = object.ackForwardTargetRevision ?? 0;
    message.kludgePad = object.kludgePad ?? "0";
    return message;
  },
};

function createBaseCMsgSteamDatagramP2PRoutes(): CMsgSteamDatagramP2PRoutes {
  return { relayClusters: [], routes: [], revision: 0 };
}

export const CMsgSteamDatagramP2PRoutes = {
  encode(message: CMsgSteamDatagramP2PRoutes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.relayClusters) {
      CMsgSteamDatagramP2PRoutes_RelayCluster.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.routes) {
      CMsgSteamDatagramP2PRoutes_Route.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.revision !== 0) {
      writer.uint32(24).uint32(message.revision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramP2PRoutes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramP2PRoutes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.relayClusters.push(CMsgSteamDatagramP2PRoutes_RelayCluster.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.routes.push(CMsgSteamDatagramP2PRoutes_Route.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.revision = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramP2PRoutes {
    return {
      relayClusters: Array.isArray(object?.relayClusters)
        ? object.relayClusters.map((e: any) => CMsgSteamDatagramP2PRoutes_RelayCluster.fromJSON(e))
        : [],
      routes: Array.isArray(object?.routes)
        ? object.routes.map((e: any) => CMsgSteamDatagramP2PRoutes_Route.fromJSON(e))
        : [],
      revision: isSet(object.revision) ? Number(object.revision) : 0,
    };
  },

  toJSON(message: CMsgSteamDatagramP2PRoutes): unknown {
    const obj: any = {};
    if (message.relayClusters) {
      obj.relayClusters = message.relayClusters.map((e) =>
        e ? CMsgSteamDatagramP2PRoutes_RelayCluster.toJSON(e) : undefined
      );
    } else {
      obj.relayClusters = [];
    }
    if (message.routes) {
      obj.routes = message.routes.map((e) => e ? CMsgSteamDatagramP2PRoutes_Route.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    message.revision !== undefined && (obj.revision = Math.round(message.revision));
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramP2PRoutes>): CMsgSteamDatagramP2PRoutes {
    return CMsgSteamDatagramP2PRoutes.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramP2PRoutes>): CMsgSteamDatagramP2PRoutes {
    const message = createBaseCMsgSteamDatagramP2PRoutes();
    message.relayClusters = object.relayClusters?.map((e) => CMsgSteamDatagramP2PRoutes_RelayCluster.fromPartial(e)) ||
      [];
    message.routes = object.routes?.map((e) => CMsgSteamDatagramP2PRoutes_Route.fromPartial(e)) || [];
    message.revision = object.revision ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramP2PRoutes_RelayCluster(): CMsgSteamDatagramP2PRoutes_RelayCluster {
  return { popId: 0, pingMs: 0, scorePenalty: 0, sessionRelayRoutingToken: Buffer.alloc(0) };
}

export const CMsgSteamDatagramP2PRoutes_RelayCluster = {
  encode(message: CMsgSteamDatagramP2PRoutes_RelayCluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.popId !== 0) {
      writer.uint32(13).fixed32(message.popId);
    }
    if (message.pingMs !== 0) {
      writer.uint32(16).uint32(message.pingMs);
    }
    if (message.scorePenalty !== 0) {
      writer.uint32(24).uint32(message.scorePenalty);
    }
    if (message.sessionRelayRoutingToken.length !== 0) {
      writer.uint32(34).bytes(message.sessionRelayRoutingToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramP2PRoutes_RelayCluster {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramP2PRoutes_RelayCluster();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.popId = reader.fixed32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.pingMs = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.scorePenalty = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.sessionRelayRoutingToken = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramP2PRoutes_RelayCluster {
    return {
      popId: isSet(object.popId) ? Number(object.popId) : 0,
      pingMs: isSet(object.pingMs) ? Number(object.pingMs) : 0,
      scorePenalty: isSet(object.scorePenalty) ? Number(object.scorePenalty) : 0,
      sessionRelayRoutingToken: isSet(object.sessionRelayRoutingToken)
        ? Buffer.from(bytesFromBase64(object.sessionRelayRoutingToken))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgSteamDatagramP2PRoutes_RelayCluster): unknown {
    const obj: any = {};
    message.popId !== undefined && (obj.popId = Math.round(message.popId));
    message.pingMs !== undefined && (obj.pingMs = Math.round(message.pingMs));
    message.scorePenalty !== undefined && (obj.scorePenalty = Math.round(message.scorePenalty));
    message.sessionRelayRoutingToken !== undefined &&
      (obj.sessionRelayRoutingToken = base64FromBytes(
        message.sessionRelayRoutingToken !== undefined ? message.sessionRelayRoutingToken : Buffer.alloc(0),
      ));
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramP2PRoutes_RelayCluster>): CMsgSteamDatagramP2PRoutes_RelayCluster {
    return CMsgSteamDatagramP2PRoutes_RelayCluster.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramP2PRoutes_RelayCluster>): CMsgSteamDatagramP2PRoutes_RelayCluster {
    const message = createBaseCMsgSteamDatagramP2PRoutes_RelayCluster();
    message.popId = object.popId ?? 0;
    message.pingMs = object.pingMs ?? 0;
    message.scorePenalty = object.scorePenalty ?? 0;
    message.sessionRelayRoutingToken = object.sessionRelayRoutingToken ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgSteamDatagramP2PRoutes_Route(): CMsgSteamDatagramP2PRoutes_Route {
  return { myPopId: 0, yourPopId: 0, legacyScore: 0, interiorScore: 0 };
}

export const CMsgSteamDatagramP2PRoutes_Route = {
  encode(message: CMsgSteamDatagramP2PRoutes_Route, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.myPopId !== 0) {
      writer.uint32(13).fixed32(message.myPopId);
    }
    if (message.yourPopId !== 0) {
      writer.uint32(21).fixed32(message.yourPopId);
    }
    if (message.legacyScore !== 0) {
      writer.uint32(24).uint32(message.legacyScore);
    }
    if (message.interiorScore !== 0) {
      writer.uint32(32).uint32(message.interiorScore);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramP2PRoutes_Route {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramP2PRoutes_Route();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.myPopId = reader.fixed32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.yourPopId = reader.fixed32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.legacyScore = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.interiorScore = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramP2PRoutes_Route {
    return {
      myPopId: isSet(object.myPopId) ? Number(object.myPopId) : 0,
      yourPopId: isSet(object.yourPopId) ? Number(object.yourPopId) : 0,
      legacyScore: isSet(object.legacyScore) ? Number(object.legacyScore) : 0,
      interiorScore: isSet(object.interiorScore) ? Number(object.interiorScore) : 0,
    };
  },

  toJSON(message: CMsgSteamDatagramP2PRoutes_Route): unknown {
    const obj: any = {};
    message.myPopId !== undefined && (obj.myPopId = Math.round(message.myPopId));
    message.yourPopId !== undefined && (obj.yourPopId = Math.round(message.yourPopId));
    message.legacyScore !== undefined && (obj.legacyScore = Math.round(message.legacyScore));
    message.interiorScore !== undefined && (obj.interiorScore = Math.round(message.interiorScore));
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramP2PRoutes_Route>): CMsgSteamDatagramP2PRoutes_Route {
    return CMsgSteamDatagramP2PRoutes_Route.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramP2PRoutes_Route>): CMsgSteamDatagramP2PRoutes_Route {
    const message = createBaseCMsgSteamDatagramP2PRoutes_Route();
    message.myPopId = object.myPopId ?? 0;
    message.yourPopId = object.yourPopId ?? 0;
    message.legacyScore = object.legacyScore ?? 0;
    message.interiorScore = object.interiorScore ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramSetSecondaryAddressRequest(): CMsgSteamDatagramSetSecondaryAddressRequest {
  return {
    clientMainIp: 0,
    clientMainPort: 0,
    clientConnectionId: 0,
    clientIdentity: "",
    requestSendDuplication: false,
    kludgePad: Buffer.alloc(0),
  };
}

export const CMsgSteamDatagramSetSecondaryAddressRequest = {
  encode(message: CMsgSteamDatagramSetSecondaryAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientMainIp !== 0) {
      writer.uint32(13).fixed32(message.clientMainIp);
    }
    if (message.clientMainPort !== 0) {
      writer.uint32(21).fixed32(message.clientMainPort);
    }
    if (message.clientConnectionId !== 0) {
      writer.uint32(29).fixed32(message.clientConnectionId);
    }
    if (message.clientIdentity !== "") {
      writer.uint32(34).string(message.clientIdentity);
    }
    if (message.requestSendDuplication === true) {
      writer.uint32(40).bool(message.requestSendDuplication);
    }
    if (message.kludgePad.length !== 0) {
      writer.uint32(794).bytes(message.kludgePad);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramSetSecondaryAddressRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramSetSecondaryAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.clientMainIp = reader.fixed32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.clientMainPort = reader.fixed32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.clientConnectionId = reader.fixed32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.clientIdentity = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.requestSendDuplication = reader.bool();
          continue;
        case 99:
          if (tag != 794) {
            break;
          }

          message.kludgePad = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramSetSecondaryAddressRequest {
    return {
      clientMainIp: isSet(object.clientMainIp) ? Number(object.clientMainIp) : 0,
      clientMainPort: isSet(object.clientMainPort) ? Number(object.clientMainPort) : 0,
      clientConnectionId: isSet(object.clientConnectionId) ? Number(object.clientConnectionId) : 0,
      clientIdentity: isSet(object.clientIdentity) ? String(object.clientIdentity) : "",
      requestSendDuplication: isSet(object.requestSendDuplication) ? Boolean(object.requestSendDuplication) : false,
      kludgePad: isSet(object.kludgePad) ? Buffer.from(bytesFromBase64(object.kludgePad)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgSteamDatagramSetSecondaryAddressRequest): unknown {
    const obj: any = {};
    message.clientMainIp !== undefined && (obj.clientMainIp = Math.round(message.clientMainIp));
    message.clientMainPort !== undefined && (obj.clientMainPort = Math.round(message.clientMainPort));
    message.clientConnectionId !== undefined && (obj.clientConnectionId = Math.round(message.clientConnectionId));
    message.clientIdentity !== undefined && (obj.clientIdentity = message.clientIdentity);
    message.requestSendDuplication !== undefined && (obj.requestSendDuplication = message.requestSendDuplication);
    message.kludgePad !== undefined &&
      (obj.kludgePad = base64FromBytes(message.kludgePad !== undefined ? message.kludgePad : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramSetSecondaryAddressRequest>): CMsgSteamDatagramSetSecondaryAddressRequest {
    return CMsgSteamDatagramSetSecondaryAddressRequest.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamDatagramSetSecondaryAddressRequest>,
  ): CMsgSteamDatagramSetSecondaryAddressRequest {
    const message = createBaseCMsgSteamDatagramSetSecondaryAddressRequest();
    message.clientMainIp = object.clientMainIp ?? 0;
    message.clientMainPort = object.clientMainPort ?? 0;
    message.clientConnectionId = object.clientConnectionId ?? 0;
    message.clientIdentity = object.clientIdentity ?? "";
    message.requestSendDuplication = object.requestSendDuplication ?? false;
    message.kludgePad = object.kludgePad ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgSteamDatagramSetSecondaryAddressResult(): CMsgSteamDatagramSetSecondaryAddressResult {
  return { success: false, message: "" };
}

export const CMsgSteamDatagramSetSecondaryAddressResult = {
  encode(message: CMsgSteamDatagramSetSecondaryAddressResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramSetSecondaryAddressResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramSetSecondaryAddressResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.success = reader.bool();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramSetSecondaryAddressResult {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: CMsgSteamDatagramSetSecondaryAddressResult): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramSetSecondaryAddressResult>): CMsgSteamDatagramSetSecondaryAddressResult {
    return CMsgSteamDatagramSetSecondaryAddressResult.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamDatagramSetSecondaryAddressResult>,
  ): CMsgSteamDatagramSetSecondaryAddressResult {
    const message = createBaseCMsgSteamDatagramSetSecondaryAddressResult();
    message.success = object.success ?? false;
    message.message = object.message ?? "";
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
