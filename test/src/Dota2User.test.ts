import SteamUser from 'steam-user';
import { Dota2User, Dota2UserError } from '../../src';

describe('Dota2User', () => {
    describe('constructor()', () => {
        // not even bothering to test all the cases here, cause I really don't believe it's necessary
        describe('where a completely different class instance is given', () => {
            test('throw an error', () => {
                const blargh = new class {} as SteamUser;
                expect(() => new Dota2User(blargh)).toThrow(Dota2UserError);
            });
        });
        describe('where a valid SteamUser instance is given', () => {
            let client: SteamUser;
            const clientPackageVersionSpy = jest.spyOn(SteamUser.prototype, 'packageVersion', 'get');
            beforeEach(() => {
                client = new SteamUser();
            });
            test('throw an error if the major version is less than 4', () => {
                clientPackageVersionSpy.mockReturnValue('3.0.0');
                expect(() => new Dota2User(client)).toThrow(Dota2UserError);
            });
            test('throw an error if the minor version is less than 2 where major is at least 4', () => {
                clientPackageVersionSpy.mockReturnValue('4.1.0');
                expect(() => new Dota2User(client)).toThrow(Dota2UserError);
            });
            test('dont throw an error if package is > 4.2.0', () => {
                clientPackageVersionSpy.mockReturnValue('4.2.1');
                expect(() => new Dota2User(client)).not.toThrow(Dota2UserError);
            });
            test.each(['_hookSteamUserEvents', '_hookRouterEvents'])('%s should be called', (functionName) => {
                const spy = jest.spyOn(Dota2User.prototype, functionName as any);
                new Dota2User(client);
                expect(spy).toBeCalled();
            });
        });
    });
});
