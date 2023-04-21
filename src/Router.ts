import { EventEmitter } from 'node:events';
// TODO create a load file to do this
import { EGCBaseClientMsg } from './protobufs/gcsystemmsgs';
import { CMsgClientHello, CMsgClientWelcome } from './protobufs/gcsdk_gcmessages';
import * as _m0 from "protobufjs/minimal";
const debug = require('debug')('dota2-user:Router');

// TODO logic to do this instead by guessing protobuf names
// Mapping a message type to its protobuf for sending or receiving
interface blah {
    [key: string]: proto<CMsgClientHello | CMsgClientWelcome>;
}
const protobufs: blah = {
    [EGCBaseClientMsg.k_EMsgGCClientHello.toString()]: CMsgClientHello,
    [EGCBaseClientMsg.k_EMsgGCClientWelcome.toString()]: CMsgClientWelcome,
};

// _m0.Message.decode

// TODO until I probably just move to a package that uses _m0.Message typpes
interface proto<T> {
    decode(input: _m0.Reader | Uint8Array, length?: number): T
}

// TODO make this a common class
// TODO use EventEmitter for now, may move to a third party one
// TODO types for events
export class Router extends EventEmitter {
    static AnyEvent = Symbol('AnyEvent');

    route(messageId: number, body: Buffer) {
        // let msgName = getMessageName(msgType) || msgType;
        // TODO when we import all the protos, find message name instead of printing just the messageId
        if (messageId.toString() in protobufs) {
            // TODO should be something common, not any
            const data: any = protobufs[messageId.toString()].decode(body);
            this.emit(messageId.toString(), data);
            debug('routed GC message %s with data %o', messageId, data);
        } else {
            debug('not routing GC message %s, raw data %o', messageId, body);
        }
    }
    emit(eventName: string | symbol, ...args: any): boolean {
        if (eventName !== Router.AnyEvent) {
            super.emit(Router.AnyEvent, ...args);
        }
        return super.emit(eventName, ...args);
    }

    // protobufjs code
    // static decodeProto<T>(proto: proto, encoded: Buffer): Object {
    //     const decoded = proto.decode(encoded);
    //     // return proto.toObject(decoded, {"longs": String});
    // }
}

