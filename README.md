# Dota 2 for SteamUser (node-steam-user)

[![npm version](https://img.shields.io/npm/v/dota2-user.svg)](https://npmjs.com/package/dota2-user)

This module aims to provides a flexible TypeScript/Node.js interface for interacting with the Dota 2 Game Coordinator.

It utilises a [node-steam-user](https://github.com/doctorMcKay/node-steam-user) SteamUser instance for Steam communication.

**To use node-dota2-user, please ensure you have `node-steam-user` v4.2.0 or later and Node.js v14 or later installed.**

## Expectations

I'm writing this module as an experiment and for fun. It's something I've wanted to develop for many years and I hope to continue refining it over time. 

While I'll do my best to release something _good_, please consider this in alpha state, similar to [node-dota2](https://github.com/Arcana/node-dota2).

That being said, I welcome any feedback, suggestions, issues, or pull requests from the community.

If you're willing/prefer to use Go, I'd suggest checking out [paralin/go-dota2](https://github.com/paralin/go-dota2), a maintained and up-to-date package written in Go.

## Goals

* TypeScript focus -- greatly compliments protobufs
* Provide a simple developer experience for both module development and consumption
* Good documentation
* Utilise autogenerated code to reduce the number of developed features and enhance maintainability

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
