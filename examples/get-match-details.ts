#!/usr/bin/env -S npx ts-node

import SteamUser from 'steam-user';
import { Dota2User } from '../src'; // replace with 'dota2-user' outside of the module
import { EDOTAGCMsg, EMatchOutcome } from '../src/protobufs';

const client = new SteamUser();
const dota2 = new Dota2User(client);

const logOnOptions = {
    accountName: process.env.STEAM_ACCOUNT_NAME!, // '...'
    password: process.env.STEAM_PASSWORD!, // '...'
    twoFactorCode: process.env.STEAM_TWO_FACTOR_CODE!, // SteamTotp.getAuthCode('...'), // e.g. use steam-totp
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
    console.log('Logged into Steam');
    // launch app
    client.gamesPlayed(Dota2User.STEAM_APPID);

    dota2.on('connectedToGC', () => {
        // connected to GC, do things
        // NOTE: the payload below is automatically typed as CMsgGCMatchDetailsRequest by the send() function
        dota2.send(EDOTAGCMsg.k_EMsgGCMatchDetailsRequest, { matchId: '271145478' });
    });
    // NOTE: data is automatically typed as CMsgGCMatchDetailsResponse by the router
    dota2.router.on(EDOTAGCMsg.k_EMsgGCMatchDetailsResponse, (data) => {
        console.log('Received response');
        if (data.match) {
            console.log('Received match data: %j', data.match);
            console.log('Match outcome: %s', EMatchOutcome[data.match.matchOutcome]);
        } else {
            console.log('No match data received');
        }

    });
});

client.on('error', (e) => {
    // Some error occurred during logon
    console.log(e);
});
