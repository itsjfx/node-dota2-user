import SteamUser from 'steam-user';
import { Dota2User } from '../../src';
import { Router } from '../../src/router';
import { EDOTAGCMsg } from '../../src/protobufs/generated';

describe('Dota2User Jobs', () => {
    let steamUser: jest.Mocked<SteamUser>;
    let dota2User: Dota2User;
    let router: Router;

    beforeEach(() => {
        // Create a mock SteamUser
        steamUser = {
            packageName: 'steam-user',
            packageVersion: '4.2.0',
            constructor: { name: 'SteamUser' },
            on: jest.fn(),
            steamID: 'dummyId',
            sendToGC: jest.fn(),
        } as unknown as jest.Mocked<SteamUser>;

        // Create the router to intercept
        router = new Router();

        // Create a Dota2User instance with our mock
        dota2User = new Dota2User(steamUser);

        // Replace the router with our own instance
        (dota2User as any).router = router;

        // Mock _hookRouterEvents to prevent it from overriding our router
        jest.spyOn(dota2User as any, '_hookRouterEvents').mockImplementation(() => {
            // Intentionally empty - we don't want the real implementation to run
            return;
        });
    });

    describe('sendWithCallback', () => {
        it('should register a job and send a message with job ID', () => {
            // Arrange
            const messageId = EDOTAGCMsg.k_EMsgClientToGCGetProfileCardResponse;
            const body = { some: 'data' };
            const callback = jest.fn();

            // Mock sendToGC to prevent actual sending
            jest.spyOn(dota2User, 'sendRawBuffer').mockImplementation(jest.fn());

            // Act - use type assertion to work around TypeScript type checking for test
            (dota2User as any).sendWithCallback(messageId, body, callback);

            // Assert
            expect(steamUser.sendToGC).toHaveBeenCalled();
            expect((dota2User as any)._jobs.size).toBe(1);
            expect((dota2User as any)._jobs.has(1)).toBe(true);
        });

        it('should increment job IDs between calls', () => {
            // Arrange
            const messageId = EDOTAGCMsg.k_EMsgClientToGCGetProfileCardResponse;
            const body = { some: 'data' };
            const callback1 = jest.fn();
            const callback2 = jest.fn();

            // Mock sendToGC to prevent actual sending
            jest.spyOn(dota2User, 'sendRawBuffer').mockImplementation(jest.fn());

            // Act - use type assertion to work around TypeScript type checking for test
            (dota2User as any).sendWithCallback(messageId, body, callback1);
            (dota2User as any).sendWithCallback(messageId, body, callback2);

            // Assert
            expect((dota2User as any)._jobs.size).toBe(2);
            expect((dota2User as any)._jobs.has(1)).toBe(true);
            expect((dota2User as any)._jobs.has(2)).toBe(true);
        });

        it('should reset job ID counter when it reaches limit', () => {
            // Arrange
            const messageId = EDOTAGCMsg.k_EMsgClientToGCGetProfileCardResponse;
            const body = { some: 'data' };

            // Mock sendToGC to prevent actual sending
            jest.spyOn(dota2User, 'sendRawBuffer').mockImplementation(jest.fn());

            // Set the next job ID to almost the limit
            (dota2User as any)._nextJobId = 0xffff;

            // Act - use type assertion to work around TypeScript type checking for test
            (dota2User as any).sendWithCallback(messageId, body, jest.fn());
            (dota2User as any).sendWithCallback(messageId, body, jest.fn());

            // Assert
            expect((dota2User as any)._nextJobId).toBe(2);
        });
    });

    describe('job handling', () => {
        it('should invoke callback when job response is received', () => {
            // Arrange
            const jobId = 42;
            const payload = Buffer.from('test payload');
            const callback = jest.fn();

            // Register a job
            (dota2User as any)._jobs.set(jobId, callback);

            // Use the real hook router events implementation instead of mocking it
            // Remove the spy on _hookRouterEvents to let the real implementation run
            jest.spyOn(dota2User as any, '_hookRouterEvents').mockRestore();

            // Re-run the hook to use the actual implementation for router events
            (dota2User as any)._hookRouterEvents();

            // Act
            router.emit('job', jobId, payload);

            // Assert
            expect(callback).toHaveBeenCalledWith(payload);
            expect((dota2User as any)._jobs.has(jobId)).toBe(false);
        });

        it('should extract job ID from incoming GC messages', () => {
            // Arrange
            const appid = Dota2User.STEAM_APPID;
            const msgType = EDOTAGCMsg.k_EMsgClientToGCGetProfileCardResponse;
            const jobId = 42;

            // Create a buffer with a job ID at offset 10
            const payload = Buffer.alloc(20);
            payload.writeUInt32LE(jobId, 10);

            // Register a job
            const callback = jest.fn();
            (dota2User as any)._jobs.set(jobId, callback);

            // Set up a spy on the router
            const routerEmitSpy = jest.spyOn(router, 'emit');
            const routerRouteSpy = jest.spyOn(router, 'route');

            // Act: Use the real implementation but trigger it manually
            // Find the receivedFromGC handler by running _hookSteamUserEvents
            let receivedFromGCHandler: ((appid: number, msgType: number, payload: Buffer) => void) | undefined;

            // Override the on method to capture the handler
            steamUser.on.mockImplementation((event: string, handler: any) => {
                if (event === 'receivedFromGC') {
                    receivedFromGCHandler = handler;
                }
                return steamUser;
            });

            // Hook the events to register the handler
            (dota2User as any)._hookSteamUserEvents();

            // Call the handler directly
            if (receivedFromGCHandler) {
                receivedFromGCHandler(appid, msgType, payload);
            }

            // Assert
            expect(routerEmitSpy).toHaveBeenCalledWith('job', jobId, payload);
            expect(routerRouteSpy).toHaveBeenCalledWith(msgType, payload);
        });

        it('should ignore job IDs that are 0xFFFFFFFF', () => {
            // Arrange
            const appid = Dota2User.STEAM_APPID;
            const msgType = EDOTAGCMsg.k_EMsgClientToGCGetProfileCardResponse;

            // Create a buffer with an invalid job ID (0xFFFFFFFF) at offset 10
            const payload = Buffer.alloc(20);
            payload.writeUInt32LE(0xffffffff, 10);

            // Set up spies
            const routerEmitSpy = jest.spyOn(router, 'emit');
            const routerRouteSpy = jest.spyOn(router, 'route');

            // Act: Use the real implementation but trigger it manually
            // Find the receivedFromGC handler by running _hookSteamUserEvents
            let receivedFromGCHandler: ((appid: number, msgType: number, payload: Buffer) => void) | undefined;

            // Override the on method to capture the handler
            steamUser.on.mockImplementation((event: string, handler: any) => {
                if (event === 'receivedFromGC') {
                    receivedFromGCHandler = handler;
                }
                return steamUser;
            });

            // Hook the events to register the handler
            (dota2User as any)._hookSteamUserEvents();

            // Call the handler directly
            if (receivedFromGCHandler) {
                receivedFromGCHandler(appid, msgType, payload);
            }

            // Assert
            expect(routerEmitSpy).not.toHaveBeenCalledWith('job', expect.anything(), expect.anything());
            expect(routerRouteSpy).toHaveBeenCalledWith(msgType, payload);
        });
    });
});
