import SteamUser from 'steam-user';
import { Dota2User, Dota2Protobufs } from '../src'; // replace with 'dota2-user' outside of the module

const client = new SteamUser();
const dota2 = new Dota2User(client);

const logOnOptions = {
    accountName: '...',
    password: '...',
    // twoFactorCode: SteamTotp.getAuthCode('...'), // e.g. use steam-totp
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
    console.log('Logged into Steam');
    // launch app
    client.gamesPlayed(Dota2User.STEAM_APPID);

    dota2.on('connectedToGC', () => {
        // connected to GC, do things
        dota2.send(Dota2Protobufs.EDOTAGCMsg.k_EMsgGCMatchDetailsRequest, { matchId: '271145478' });
    });
    dota2.router.on(Dota2Protobufs.EDOTAGCMsg.k_EMsgGCMatchDetailsResponse, (data) => {
        console.log('Received response');
        if (data.match) {
            console.log('Received match data: %j', data.match);
            console.log('Match outcome: %s', Dota2Protobufs.EMatchOutcome[data.match.matchOutcome]);
        } else {
            console.log('No match data received');
        }

    });
});

client.on('error', (e) => {
    // Some error occurred during logon
    console.log(e);
});
