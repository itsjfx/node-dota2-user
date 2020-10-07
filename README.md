# Dota 2 for SteamUser (node-steam-user)

[![npm version](https://img.shields.io/npm/v/globaloffensive.svg)](https://npmjs.com/package/globaloffensive)

This module provides a very flexible interface for interacting with the Dota 2 Game Coordinator. It's designed to work with a node-steam-user SteamUser instance.

This module is based off the codebases of [node-globaloffensive](https://github.com/doctormckay/node-globaloffensive), [node-tf2](https://github.com/doctormckay/node-tf2) and [node-steam-user](https://github.com/doctormckay/node-steam-user) with how it communicates to Steam. The Dota 2 functionality is based off [node-dota2](https://github.com/Arcana/node-dota2/).

*This module is not affiliated with those listed above.*

**You will need node-steam-user v4.2.0 or later and Node.js v8 or later to use node-dota2-user.**

# This project

My goal is to structure the codebase similar to `node-steam-user`'s component-based approach to keep this maintainable. Although I'm basing the GC communication off `node-globaloffensive`, there's changes here and there that I've adopted to make development easier (namely in how messages are sent to the GC, and the project structure).

As much as I think `node-dota2` is a great module for Dota 2, the lack of maintainability and no support for `node-steam-user` makes me hate using the module. I have several Dota 2 related bots which use `node-dota2` and development is not as great as it could be due to these issues. At the end of the day I want this to be an alternative to `node-dota2` which supports `node-steam-user`. I will also try my best to keep it as maintained as possible.

In the projects current state, it only supports connecting to Steam GC (sending and receiving a Hello). Development is going to take a lot of time since Dota 2 has so many messages and possible features, but I'll continue incrementally adding features. In the current state, there is enough base behaviour to accomplish anything with the Dota 2 GC.

# Setup

First, install it from npm:

	$ npm install dota2-user

Require the module and call its constructor with your SteamUser instance:

```js
const SteamUser = require('steam-user');
const Dota2User = require('dota2-user');

let user = new SteamUser();
let dota2 = new Dota2User(user);
```

To initialize your GC connection, just launch CS:GO via SteamUser normally:

```js
client.gamesPlayed([570]);
```

node-dota2-user will emit a `connectedToGC` event when the game coordinator connection has been successfully established. You shouldn't try to do anything before you receive that event.
