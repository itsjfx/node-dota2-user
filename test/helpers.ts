import { MessageType } from '../src/known-protobufs';
// a typed fromJSON factory instead of taking any object
// similar to Dota2User.sendRaw()
// TODO: UUID values instead of like empty strings and stuff, but annoying to implement
export const factory = <T>(message: MessageType<T>, data: Partial<T>) => message.fromJSON(data);
