/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CMsgSteamDatagramP2PRoutingSummary } from "./steamdatagram_messages_sdr";
import { CMsgSteamDatagramConnectionQuality } from "./steamnetworkingsockets_messages";

export interface CGameNetworkingUIGlobalState {
}

export interface CGameNetworkingUIConnectionState {
  connectionKey: string;
  appid: number;
  connectionIdLocal: number;
  identityLocal: string;
  identityRemote: string;
  connectionState: number;
  startTime: number;
  closeTime: number;
  closeReason: number;
  closeMessage: string;
  statusLocToken: string;
  transportKind: number;
  sdrpopidLocal: string;
  sdrpopidRemote: string;
  addressRemote: string;
  p2pRouting: CMsgSteamDatagramP2PRoutingSummary | undefined;
  pingInterior: number;
  pingRemoteFront: number;
  pingDefaultInternetRoute: number;
  e2eQualityLocal: CMsgSteamDatagramConnectionQuality | undefined;
  e2eQualityRemote: CMsgSteamDatagramConnectionQuality | undefined;
  e2eQualityRemoteInstantaneousTime: string;
  e2eQualityRemoteLifetimeTime: string;
  frontQualityLocal: CMsgSteamDatagramConnectionQuality | undefined;
  frontQualityRemote: CMsgSteamDatagramConnectionQuality | undefined;
  frontQualityRemoteInstantaneousTime: string;
  frontQualityRemoteLifetimeTime: string;
}

export interface CGameNetworkingUIMessage {
  connectionState: CGameNetworkingUIConnectionState[];
}

function createBaseCGameNetworkingUIGlobalState(): CGameNetworkingUIGlobalState {
  return {};
}

export const CGameNetworkingUIGlobalState = {
  encode(_: CGameNetworkingUIGlobalState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNetworkingUIGlobalState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNetworkingUIGlobalState();
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

function createBaseCGameNetworkingUIConnectionState(): CGameNetworkingUIConnectionState {
  return {
    connectionKey: "",
    appid: 0,
    connectionIdLocal: 0,
    identityLocal: "",
    identityRemote: "",
    connectionState: 0,
    startTime: 0,
    closeTime: 0,
    closeReason: 0,
    closeMessage: "",
    statusLocToken: "",
    transportKind: 0,
    sdrpopidLocal: "",
    sdrpopidRemote: "",
    addressRemote: "",
    p2pRouting: undefined,
    pingInterior: 0,
    pingRemoteFront: 0,
    pingDefaultInternetRoute: 0,
    e2eQualityLocal: undefined,
    e2eQualityRemote: undefined,
    e2eQualityRemoteInstantaneousTime: "0",
    e2eQualityRemoteLifetimeTime: "0",
    frontQualityLocal: undefined,
    frontQualityRemote: undefined,
    frontQualityRemoteInstantaneousTime: "0",
    frontQualityRemoteLifetimeTime: "0",
  };
}

export const CGameNetworkingUIConnectionState = {
  encode(message: CGameNetworkingUIConnectionState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionKey !== "") {
      writer.uint32(10).string(message.connectionKey);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.connectionIdLocal !== 0) {
      writer.uint32(29).fixed32(message.connectionIdLocal);
    }
    if (message.identityLocal !== "") {
      writer.uint32(34).string(message.identityLocal);
    }
    if (message.identityRemote !== "") {
      writer.uint32(42).string(message.identityRemote);
    }
    if (message.connectionState !== 0) {
      writer.uint32(80).uint32(message.connectionState);
    }
    if (message.startTime !== 0) {
      writer.uint32(96).uint32(message.startTime);
    }
    if (message.closeTime !== 0) {
      writer.uint32(104).uint32(message.closeTime);
    }
    if (message.closeReason !== 0) {
      writer.uint32(112).uint32(message.closeReason);
    }
    if (message.closeMessage !== "") {
      writer.uint32(122).string(message.closeMessage);
    }
    if (message.statusLocToken !== "") {
      writer.uint32(130).string(message.statusLocToken);
    }
    if (message.transportKind !== 0) {
      writer.uint32(160).uint32(message.transportKind);
    }
    if (message.sdrpopidLocal !== "") {
      writer.uint32(170).string(message.sdrpopidLocal);
    }
    if (message.sdrpopidRemote !== "") {
      writer.uint32(178).string(message.sdrpopidRemote);
    }
    if (message.addressRemote !== "") {
      writer.uint32(186).string(message.addressRemote);
    }
    if (message.p2pRouting !== undefined) {
      CMsgSteamDatagramP2PRoutingSummary.encode(message.p2pRouting, writer.uint32(194).fork()).ldelim();
    }
    if (message.pingInterior !== 0) {
      writer.uint32(200).uint32(message.pingInterior);
    }
    if (message.pingRemoteFront !== 0) {
      writer.uint32(208).uint32(message.pingRemoteFront);
    }
    if (message.pingDefaultInternetRoute !== 0) {
      writer.uint32(216).uint32(message.pingDefaultInternetRoute);
    }
    if (message.e2eQualityLocal !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.e2eQualityLocal, writer.uint32(242).fork()).ldelim();
    }
    if (message.e2eQualityRemote !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.e2eQualityRemote, writer.uint32(250).fork()).ldelim();
    }
    if (message.e2eQualityRemoteInstantaneousTime !== "0") {
      writer.uint32(256).uint64(message.e2eQualityRemoteInstantaneousTime);
    }
    if (message.e2eQualityRemoteLifetimeTime !== "0") {
      writer.uint32(264).uint64(message.e2eQualityRemoteLifetimeTime);
    }
    if (message.frontQualityLocal !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.frontQualityLocal, writer.uint32(322).fork()).ldelim();
    }
    if (message.frontQualityRemote !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.frontQualityRemote, writer.uint32(330).fork()).ldelim();
    }
    if (message.frontQualityRemoteInstantaneousTime !== "0") {
      writer.uint32(336).uint64(message.frontQualityRemoteInstantaneousTime);
    }
    if (message.frontQualityRemoteLifetimeTime !== "0") {
      writer.uint32(344).uint64(message.frontQualityRemoteLifetimeTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNetworkingUIConnectionState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNetworkingUIConnectionState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.connectionKey = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.appid = reader.uint32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.connectionIdLocal = reader.fixed32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.identityLocal = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.identityRemote = reader.string();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.connectionState = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.startTime = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.closeTime = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.closeReason = reader.uint32();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.closeMessage = reader.string();
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.statusLocToken = reader.string();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.transportKind = reader.uint32();
          continue;
        case 21:
          if (tag != 170) {
            break;
          }

          message.sdrpopidLocal = reader.string();
          continue;
        case 22:
          if (tag != 178) {
            break;
          }

          message.sdrpopidRemote = reader.string();
          continue;
        case 23:
          if (tag != 186) {
            break;
          }

          message.addressRemote = reader.string();
          continue;
        case 24:
          if (tag != 194) {
            break;
          }

          message.p2pRouting = CMsgSteamDatagramP2PRoutingSummary.decode(reader, reader.uint32());
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.pingInterior = reader.uint32();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.pingRemoteFront = reader.uint32();
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.pingDefaultInternetRoute = reader.uint32();
          continue;
        case 30:
          if (tag != 242) {
            break;
          }

          message.e2eQualityLocal = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          continue;
        case 31:
          if (tag != 250) {
            break;
          }

          message.e2eQualityRemote = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          continue;
        case 32:
          if (tag != 256) {
            break;
          }

          message.e2eQualityRemoteInstantaneousTime = longToString(reader.uint64() as Long);
          continue;
        case 33:
          if (tag != 264) {
            break;
          }

          message.e2eQualityRemoteLifetimeTime = longToString(reader.uint64() as Long);
          continue;
        case 40:
          if (tag != 322) {
            break;
          }

          message.frontQualityLocal = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          continue;
        case 41:
          if (tag != 330) {
            break;
          }

          message.frontQualityRemote = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          continue;
        case 42:
          if (tag != 336) {
            break;
          }

          message.frontQualityRemoteInstantaneousTime = longToString(reader.uint64() as Long);
          continue;
        case 43:
          if (tag != 344) {
            break;
          }

          message.frontQualityRemoteLifetimeTime = longToString(reader.uint64() as Long);
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

function createBaseCGameNetworkingUIMessage(): CGameNetworkingUIMessage {
  return { connectionState: [] };
}

export const CGameNetworkingUIMessage = {
  encode(message: CGameNetworkingUIMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.connectionState) {
      CGameNetworkingUIConnectionState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNetworkingUIMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNetworkingUIMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.connectionState.push(CGameNetworkingUIConnectionState.decode(reader, reader.uint32()));
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
