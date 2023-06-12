import * as _m0 from 'protobufjs/minimal';

import { EGCBaseClientMsg, CMsgClientHello, CMsgClientWelcome, CMsgConnectionStatus } from './protobufs';

export interface MessageType<Message = UnknownMessage> {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
}
export type UnknownMessage = any;
export type ClientMessageProtobufs = {
    [EGCBaseClientMsg.k_EMsgGCClientHello]: CMsgClientHello,
};
export type ServerMessageProtobufs = {
    [EGCBaseClientMsg.k_EMsgGCClientWelcome]: CMsgClientWelcome,
    [EGCBaseClientMsg.k_EMsgGCClientConnectionStatus]: CMsgConnectionStatus,
};
export type ProtobufDataMapType = ClientMessageProtobufs & ServerMessageProtobufs;
// TypeScript will do an intersection for everything and sadly this the only way I've found to get the types to work
// until I figure out a better way, means no fine grained types on the stuff that the ProtobufMap returns
// https://github.com/microsoft/TypeScript/pull/30769
export type ProtobufTypeMapType = {
    [key in keyof ProtobufDataMapType]: MessageType<ProtobufDataMapType[keyof ProtobufDataMapType]>;
};
// object with message id -> object with methods
// I MAY move back to a Map type as the main reason I wanted to use an Object was for a strictly typed map
// which is still not possible due to above
export const protobufMap: ProtobufTypeMapType = {
    [EGCBaseClientMsg.k_EMsgGCClientWelcome]: CMsgClientWelcome,
    [EGCBaseClientMsg.k_EMsgGCClientHello]:  CMsgClientHello,
    [EGCBaseClientMsg.k_EMsgGCClientConnectionStatus]: CMsgConnectionStatus,
};
Object.freeze(protobufMap);

export type ProtobufEvents = {
    [key in keyof ServerMessageProtobufs]: (data: ServerMessageProtobufs[key]) => void;
};
