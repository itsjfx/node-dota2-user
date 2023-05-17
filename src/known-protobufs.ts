import * as _m0 from 'protobufjs/minimal';

import { EGCBaseClientMsg, CMsgClientHello, CMsgClientWelcome, CMsgConnectionStatus } from './generated-protobufs';

export interface MessageType<Message = UnknownMessage> {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
}
export type UnknownMessage = any;

export interface ProtobufDataMapType {
    [EGCBaseClientMsg.k_EMsgGCClientWelcome]: CMsgClientWelcome,
    [EGCBaseClientMsg.k_EMsgGCClientHello]: CMsgClientHello,
}
export interface ProtobufTypeMapType {
    [EGCBaseClientMsg.k_EMsgGCClientWelcome]: MessageType<CMsgClientWelcome>,
    [EGCBaseClientMsg.k_EMsgGCClientHello]: MessageType<CMsgClientHello>,
}
// TODO not sure whether to make it just a MessageType
export const protobufMap = new Map<keyof ProtobufTypeMapType, MessageType<CMsgClientHello | CMsgClientWelcome>>(
    [
        [EGCBaseClientMsg.k_EMsgGCClientWelcome, CMsgClientWelcome],
        [EGCBaseClientMsg.k_EMsgGCClientHello, CMsgClientHello],
    ]
);
export interface ProtobufEvents {
    [EGCBaseClientMsg.k_EMsgGCClientWelcome]: (data: CMsgClientWelcome) => void,
    [EGCBaseClientMsg.k_EMsgGCClientConnectionStatus]: (data: CMsgConnectionStatus) => void,
}
