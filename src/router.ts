const debug = require('debug')('dota2-user:router');

import { ExtendedEventEmitter, TypedEmitter, getProtobufForMessage } from './utils';
import { ProtobufEvents } from './known-protobufs';

export class Router extends (ExtendedEventEmitter as new () => TypedEmitter<ProtobufEvents>) {
    route(messageId: number, body: Buffer): void {
        // let msgName = getMessageName(msgType) || msgType;
        // TODO when we import all the protos, find message name instead of printing just the messageId
        const protobuf = getProtobufForMessage(messageId);
        if (!protobuf) {
            debug('No route available for GC message: %s', messageId);
            return;
        }
        const data = protobuf.decode(body);
        debug('Routing GC message: %s', messageId);
        this.emit(messageId as keyof ProtobufEvents, data as any);
    }
}
