import * as _m0 from 'protobufjs/minimal';

import { EGCBaseClientMsg, CMsgClientHello, CMsgClientWelcome } from './generated-protobufs';

export interface GeneratedProtobuf<T> {
    encode(message: T, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
}
export interface KnownProtobufs {
    [key: string]: GeneratedProtobuf<CMsgClientHello | CMsgClientWelcome>;
}
// TODO logic to do this instead by guessing protobuf names
export const protobufsMap: KnownProtobufs = {
    [EGCBaseClientMsg.k_EMsgGCClientHello.toString()]: CMsgClientHello,
    [EGCBaseClientMsg.k_EMsgGCClientWelcome.toString()]: CMsgClientWelcome,
};
export interface ProtobufEvents {
    [EGCBaseClientMsg.k_EMsgGCClientWelcome]: (data: CMsgClientWelcome) => void,
}
