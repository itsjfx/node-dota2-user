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

console.log('Logging in to Steam');
client.logOn(logOnOptions);

client.on('loggedOn', () => {
    console.log('Logged in to Steam');
    // launch app
    client.gamesPlayed(Dota2User.STEAM_APPID);

    dota2.on('connectedToGC', async () => {
        // connected to GC, do things
        const game = await dota2.sendJob(EDOTAGCMsg.k_EMsgGCSpectateFriendGame, { steamId: '76561198060059572', live: false });
        console.log('Received response: %j', game)
    });
});

client.on('error', (e) => {
    // Some error occurred during logon
    console.log(e);
});
