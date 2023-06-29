# Setup

First, install it from npm:

```bash
npm install dota2-user
```

Require the module and call its constructor with your SteamUser instance:

```js
const SteamUser = require('steam-user');
const Dota2User = require('dota2-user').Dota2User;

const user = new SteamUser();
const dota2 = new Dota2User(user);
```

```ts
import SteamUser from 'steam-user';
import { Dota2User } from 'dota2-user';

const user = new SteamUser();
const dota2 = new Dota2User(user);
```

To initialize your GC connection, just launch Dota 2 via `SteamUser` normally:

```js
client.gamesPlayed(570);
client.gamesPlayed(Dota2User.STEAM_APPID);
```

`node-dota2-user` will emit a `connectedToGC` event when the game coordinator connection has been successfully established. You shouldn't try to do anything before you receive that event.

Once `connectedToGC` has been emitted, you can send a message for example:

```ts
import { EDOTAGCMsg } from 'dota2-user/protobufs';
dota2.on('connectedToGC', () => {
    dota2.send(EDOTAGCMsg.k_EMsgGCMatchDetailsRequest, { matchId: '271145478' });
});
```
