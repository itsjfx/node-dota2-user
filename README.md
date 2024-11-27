# Dota 2 for SteamUser

[![npm version](https://img.shields.io/npm/v/dota2-user.svg)](https://npmjs.com/package/dota2-user)

This module aims to provides a flexible TypeScript/Node.js interface for interacting with the Dota 2 Game Coordinator.

It utilises a [node-steam-user](https://github.com/doctorMcKay/node-steam-user) SteamUser instance for Steam communication.

**To use node-dota2-user, please ensure you have `node-steam-user` v4.2.0 or later and Node.js v14 or later installed.**

## Expectations

I initially wrote this module cause I wanted to get data from the Dota 2 GC with Node.js, but had no way of doing so without [node-dota2](https://github.com/Arcana/node-dota2) which is deprecated.

As of now, this module fulfills my use-cases and the use-case of communicating with the game coordinator. It can likely do what you need.

I'm unlikely to implement additional features in the short term as I don't have a need for them.

In addition, this module does not need frequent updates due to its small dependency pool.

That said, I welcome any feedback, suggestions, issues, or pull requests from the community.

A board with some ideas for future features is available here: <https://github.com/users/itsjfx/projects/1>

Please consider this in alpha state, similar to [node-dota2](https://github.com/Arcana/node-dota2).

If you're willing to use Go, I'd suggest checking out [paralin/go-dota2](https://github.com/paralin/go-dota2), a more feature-rich package.

## Goals

* Types
* Simple module development and consumption
* Good documentation
* Auto-generated code so I can do less work

## Documentation

* [Setup](./docs/setup.md) - for getting started
* [Steam Interaction](./docs/steam-interaction.md)
* [Troubleshooting](./docs/troubleshooting.md)

## Examples

See [examples/](./examples/README.md) for TypeScript examples.

## Thanks to

* [DoctorMcKay](https://github.com/DoctorMcKay) for [node-steam-user](https://github.com/doctorMcKay/node-steam-user) which this module uses for Steam interaction
* [paralin](https://github.com/paralin) for [go-dota2](https://github.com/paralin/go-dota2) which parts of this module is based off
* The [node-dota2](https://github.com/Arcana/node-dota2) team for the original Dota 2 JS implementation
* The [ValvePython](https://github.com/ValvePython) team for their [dota2 module](https://github.com/ValvePython/dota2/tree/master)

## See also

* [node-globaloffensive](https://github.com/DoctorMcKay/node-globaloffensive)
* [node-tf2](https://github.com/DoctorMcKay/node-tf2)
