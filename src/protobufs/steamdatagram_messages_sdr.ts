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
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
