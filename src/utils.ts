import { EventEmitter } from 'node:events';

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
    static AnyEvent = Symbol('AnyEvent');

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
    rawListeners(eventName: string | symbol | number): Function[] {
        if (typeof eventName === 'number') {
            eventName = eventName.toString();
        }
        return super.rawListeners(eventName);
    }
}
