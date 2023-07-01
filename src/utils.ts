import { EventEmitter } from 'node:events';
import { protobufMap, ProtobufDataMapType } from './known-protobufs';

export class Dota2UserError extends Error {}

// TODO maybe this should be attached to Dota2User
export const getProtobufForMessage = (messageId: keyof ProtobufDataMapType) => {
    return protobufMap[messageId];
};

// Extended version of https://github.com/binier/tiny-typed-emitter/blob/66c1b66bc159675352a6f38911e4c6cf2117f3e4/lib/index.d.ts#L1-L26 with onAny
export type ListenerSignature<L> = {
    // eslint-disable-next-line no-unused-vars
    [E in keyof L]: (...args: any[]) => any;
};
export type DefaultListener = {
    [k: string]: (...args: any[]) => any;
};
export interface TypedEmitter<L extends ListenerSignature<L> = DefaultListener> {
    addListener<U extends keyof L>(event: U, listener: L[U]): this;
    prependListener<U extends keyof L>(event: U, listener: L[U]): this;
    prependOnceListener<U extends keyof L>(event: U, listener: L[U]): this;
    removeListener<U extends keyof L>(event: U, listener: L[U]): this;
    removeAllListeners(event?: keyof L): this;
    once<U extends keyof L>(event: U, listener: L[U]): this;
    on<U extends keyof L>(event: U, listener: L[U]): this;
    // added in
    onAny<U extends keyof L>(listener: (eventName: keyof L, ...args: Parameters<L[U]>) => void): this;
    off<U extends keyof L>(event: U, listener: L[U]): this;
    emit<U extends keyof L>(event: U, ...args: Parameters<L[U]>): boolean;
    eventNames<U extends keyof L>(): U[];
    listenerCount(type: keyof L): number;
    listeners<U extends keyof L>(type: U): L[U][];
    rawListeners<U extends keyof L>(type: U): L[U][];
    getMaxListeners(): number;
    setMaxListeners(n: number): this;
}

// TODO use EventEmitter for now, may move to a third party one
/**
 * Slightly extended out of the box EventEmitter
 *
 * @remarks
 * * The `eventName` argument for most methods can also be a `number`.
 *   * Numbers get type-casted to strings.
 *   * This is to provide a friendlier way when using enum values which are numbers
 * * New `onAny` method which provides a listener that fires when any event is emitted.
 */
export class ExtendedEventEmitter extends EventEmitter {
    static readonly AnyEvent = Symbol('AnyEvent');

    emit(eventName: string | symbol | number, ...args: any): boolean {
        // emit to any BEFORE casting to a string
        if (eventName !== ExtendedEventEmitter.AnyEvent) {
            super.emit(ExtendedEventEmitter.AnyEvent, eventName, ...args);
        }
        if (typeof eventName === 'number') {
            eventName = eventName.toString();
        }
        return super.emit(eventName, ...args);
    }
    addListener(eventName: string | symbol | number, listener: (...args: any[]) => void): this {
        if (typeof eventName === 'number') {
            eventName = eventName.toString();
        }
        return super.on(eventName, listener);
    }
    on = this.addListener;

    // hack, cause getting a static type (AnyEvent + any) in a key is difficult
    // effectively alias for on(ExtendedEventEmitter.AnyEvent, (...)) -- but with correct types for the listener arg
    // note: eventName could be a number, if it was emitted as a number
    onAny(listener: (eventName: string | symbol | number, ...args: any[]) => void): this {
        return super.on(ExtendedEventEmitter.AnyEvent, listener);
    }
    offAny(listener: (eventName: string | symbol | number, ...args: any[]) => void): this {
        return super.off(ExtendedEventEmitter.AnyEvent, listener);
    }

    listenerCount(eventName: string | symbol | number): number {
        if (typeof eventName === 'number') {
            eventName = eventName.toString();
        }
        return super.listenerCount(eventName);
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    listeners(eventName: string | symbol | number): Function[] {
        if (typeof eventName === 'number') {
            eventName = eventName.toString();
        }
        return super.listeners(eventName);
    }
    off = this.removeListener;
    once(eventName: string | symbol | number, listener: (...args: any[]) => void): this {
        if (typeof eventName === 'number') {
            eventName = eventName.toString();
        }
        return super.once(eventName, listener);
    }
    prependListener(eventName: string | symbol | number, listener: (...args: any[]) => void): this {
        if (typeof eventName === 'number') {
            eventName = eventName.toString();
        }
        return super.prependListener(eventName, listener);
    }
    prependOnceListener(eventName: string | symbol | number, listener: (...args: any[]) => void): this {
        if (typeof eventName === 'number') {
            eventName = eventName.toString();
        }
        return super.prependListener(eventName, listener);
    }
    removeAllListeners(event?: string | symbol | undefined | number): this {
        if (typeof event === 'number') {
            event = event.toString();
        }
        return super.removeAllListeners(event);
    }
    removeListener(eventName: string | symbol | number, listener: (...args: any[]) => void): this {
        if (typeof eventName === 'number') {
            eventName = eventName.toString();
        }
        return super.removeListener(eventName, listener);
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    rawListeners(eventName: string | symbol | number): Function[] {
        if (typeof eventName === 'number') {
            eventName = eventName.toString();
        }
        return super.rawListeners(eventName);
    }
}
