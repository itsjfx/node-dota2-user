import { Router } from '../../src/router';
import { EDOTAGCMsg } from '../../src/protobufs/generated';

describe('Router Job Events', () => {
    let router: Router;

    beforeEach(() => {
        router = new Router();
    });

    it('should emit job events', () => {
        // Arrange
        const jobId = 42;
        const payload = Buffer.from('test payload');
        const listener = jest.fn();

        // Act
        router.on('job', listener);
        router.emit('job', jobId, payload);

        // Assert
        expect(listener).toHaveBeenCalledWith(jobId, payload);
    });

    it('should not interfere with normal routing', () => {
        // Arrange
        // Use a real message ID from the EDOTAGCMsg enum
        const messageId = EDOTAGCMsg.k_EMsgGCToClientHeroStatueCreateResult;
        const payload = Buffer.from('test payload');

        // Create a mock protobuf handler for testing
        const mockHandler = jest.fn();

        // Use type assertion to work around TypeScript checking
        (router as any).on(messageId, mockHandler);

        // Act
        router.route(messageId, payload);

        // Assert
        expect(mockHandler).toHaveBeenCalled();
    });
});
