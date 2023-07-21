import { Router } from '../../src/router';
import * as utils from '../../src/utils';
import { MessageType } from '../../src/known-protobufs'

describe('Router', () => {
    const buffer = Buffer.alloc(0);
    describe('route()', () => {
        const emitSpy = jest.spyOn(Router.prototype, 'emit');
        const getProtobufForMessageSpy = jest.spyOn(utils, 'getProtobufForMessage')
        test('does not emit if an invalid message id is given', () => {
            const router = new Router();
            getProtobufForMessageSpy.mockReturnValue(undefined);
            router.route(-1, buffer);
            expect(emitSpy).not.toBeCalled();
        });
        test('does emit if a valid message is given', () => {
            const router = new Router();
            getProtobufForMessageSpy.mockReturnValue();
            router.route(5, buffer);
            expect(emitSpy).not.toBeCalled();
        });
    });
});
