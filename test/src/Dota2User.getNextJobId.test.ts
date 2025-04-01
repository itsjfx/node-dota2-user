import SteamUser from 'steam-user';
import { Dota2User } from '../../src';

describe('Dota2User', () => {
    describe('_getNextJobId', () => {
        let steamUser: Partial<SteamUser>;
        let dota2User: Dota2User;

        beforeEach(() => {
            // Create a minimal SteamUser mock
            steamUser = {
                packageName: 'steam-user',
                packageVersion: '4.2.0',
                constructor: { name: 'SteamUser' },
                on: jest.fn(),
            } as Partial<SteamUser>;

            // Create Dota2User and spy on the hook methods to prevent actual initialization
            jest.spyOn(Dota2User.prototype, '_hookSteamUserEvents').mockReturnValue(undefined);
            jest.spyOn(Dota2User.prototype, '_hookRouterEvents').mockReturnValue(undefined);

            dota2User = new Dota2User(steamUser as SteamUser);
        });

        afterEach(() => {
            jest.restoreAllMocks();
        });

        it('should start with job ID 1', () => {
            // Arrange & Act
            const jobId = (dota2User as any)._getNextJobId();

            // Assert
            expect(jobId).toBe(1);
        });

        it('should increment job ID on each call', () => {
            // Arrange & Act
            const firstJobId = (dota2User as any)._getNextJobId();
            const secondJobId = (dota2User as any)._getNextJobId();
            const thirdJobId = (dota2User as any)._getNextJobId();

            // Assert
            expect(firstJobId).toBe(1);
            expect(secondJobId).toBe(2);
            expect(thirdJobId).toBe(3);
        });

        it('should reset to 1 when job ID reaches 0x10000', () => {
            // Arrange
            (dota2User as any)._nextJobId = 0x10000;

            // Act
            const jobId = (dota2User as any)._getNextJobId();

            // Assert - the method returns the current ID before incrementing
            expect(jobId).toBe(0x10000);
            // After incrementing past the limit, it should have reset to 1
            expect((dota2User as any)._nextJobId).toBe(1);
        });

        it('should reset to 1 when job ID exceeds 0x10000', () => {
            // Arrange
            (dota2User as any)._nextJobId = 0x10001;

            // Act
            const jobId = (dota2User as any)._getNextJobId();

            // Assert - the method returns the current ID before incrementing
            expect(jobId).toBe(0x10001);
            // After incrementing past the limit, it should have reset to 1
            expect((dota2User as any)._nextJobId).toBe(1);
        });
    });
});
