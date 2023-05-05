import * as _m0 from "protobufjs/minimal";
import { TypedEmitter } from 'tiny-typed-emitter';
const debug = require('debug')('dota2-user:router');

import { ExtendedEventEmitter } from './utils';
import { protobufsMap, ProtobufEvents } from "./known-protobufs";

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
