import * as _m0 from "protobufjs/minimal";
import { TypedEmitter } from 'tiny-typed-emitter';
const debug = require('debug')('dota2-user:Router');

import { ExtendedEventEmitter } from './utils';
import { EGCBaseClientMsg, CMsgClientHello, CMsgClientWelcome } from './generated-protobufs';

// TODO until I probably just move to a package that uses _m0.Message types
interface GeneratedProtobuf<T> {
    encode(message: T, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): T;
}
interface KnownProtobufs {
    [key: string]: GeneratedProtobuf<CMsgClientHello | CMsgClientWelcome>;
}
// TODO logic to do this instead by guessing protobuf names
const protobufsMap: KnownProtobufs = {
    [EGCBaseClientMsg.k_EMsgGCClientHello.toString()]: CMsgClientHello,
    [EGCBaseClientMsg.k_EMsgGCClientWelcome.toString()]: CMsgClientWelcome,
};
interface ProtobufEvents {
    [EGCBaseClientMsg.k_EMsgGCClientHello]: (data: CMsgClientHello) => void,
    [EGCBaseClientMsg.k_EMsgGCClientWelcome]: (data: CMsgClientWelcome) => void,
}

export class Router extends (ExtendedEventEmitter as new () => TypedEmitter<ProtobufEvents>) {
// export class Router extends ExtendedEventEmitter {    
    route(messageId: number, body: Buffer) {
            // let msgName = getMessageName(msgType) || msgType;
            // TODO when we import all the protos, find message name instead of printing just the messageId
            if (messageId.toString() in protobufsMap) {
                const data = protobufsMap[messageId.toString()].decode(body);
                // @ts-ignore
                // TODO
                this.emit(messageId, data);
                debug('Routed GC message %s', messageId);
            } else {
                debug('No route available for GC message %s', messageId);
            }
        }
}
