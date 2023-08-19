import * as _m0 from 'protobufjs/minimal';
import { ClientProtobufs, GCProtobufs } from './protobufs/protobuf-mappings';

// from ts-proto output
// eslint-disable-next-line
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends object ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

export interface MessageType<Message = UnknownMessage> {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    create(base?: DeepPartial<Message>): Message;
    fromPartial(object: DeepPartial<Message>): Message;
}
export type UnknownMessage = any;
const _protobufMap = { ...ClientProtobufs, ...GCProtobufs };
Object.freeze(_protobufMap);

// hack to get the interface
export type ProtobufDataMapType = {
    [key in keyof typeof _protobufMap]: Parameters<typeof _protobufMap[key]['encode']>[0];
};
export type ProtobufTypeMapType = {
    [key in keyof ProtobufDataMapType]: MessageType<ProtobufDataMapType[keyof ProtobufDataMapType]>;
};
// TypeScript will do an intersection for everything and sadly this the only way I've found to get the types to work
// until I figure out a better way, means no fine grained types on the stuff that the ProtobufMap returns
// this is probably OK, cause eventually we should be able to auto generate an SDK instead of relying on users using send()
// https://github.com/microsoft/TypeScript/pull/30769
export const protobufMap: ProtobufTypeMapType = _protobufMap;
// I MAY move back to a Map type as the main reason I wanted to use an Object was for a strictly typed map
// which is not possible due to above
export type ProtobufEvents = {
    [key in keyof typeof GCProtobufs]: (data: Parameters<typeof GCProtobufs[key]['encode']>[0]) => void;
};
