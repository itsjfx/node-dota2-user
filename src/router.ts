const debug = require('debug')('dota2-user:router');

import { ExtendedEventEmitter, TypedEmitter, getProtobufForMessage, Dota2UserError } from './utils';
import { ProtobufEvents } from './known-protobufs';

export class Router extends (ExtendedEventEmitter as new () => TypedEmitter<ProtobufEvents>) {
    route(messageId: number, body: Buffer): void {
        // let msgName = getMessageName(msgType) || msgType;
        // TODO when we import all the protos, find message name instead of printing just the messageId
        let protobuf: ReturnType<typeof getProtobufForMessage>;
        try {
            protobuf = getProtobufForMessage(messageId);
        } catch (err) {
            if (err instanceof Dota2UserError) {
                debug('No route available for GC message %s', messageId);
                return;
            }
            throw err;
        }
        const data = protobuf.decode(body);
        this.emit(messageId as keyof ProtobufEvents, data as any);
    }
}
