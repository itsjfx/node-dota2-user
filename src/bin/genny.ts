#!/usr/bin/env -S npx ts-node --transpile-only
// vi: ft=typescript
// must run with --transpile-only cause the other files in the library depend on genny
// bit sketchy, but as this is a script i'm not too fussed

import * as protobufs from '../protobufs';
import { getEnumValues } from '../utils';
const debug = require('debug')('dota2-user:genny');

const TAB = '    ';

// search these protos
// EDOTAGCMsg: for most messages
// EGCBaseClientMsg: client hello and welcome
// ESOMsg: caches
// EGCBaseMsg: for party and lobby messages
const ENUMS_TO_SEARCH = [
    'EDOTAGCMsg',
    'EGCBaseClientMsg',
    'ESOMsg',
    'EGCBaseMsg',
];

enum MessageSender {
	UNSUPPORTED = 0,
	CLIENT = 1,
	GC = 2,
}

interface Overrides {
	[key: string]: {
		CMsg?: string;
		sender?: MessageSender;
	};
}
// we may set overrides as some pairings are difficult to match
//
// need to be very careful adding new overrides, as this list isn't type safe
// there's a check to see if a value is valid, but no check whether a key is valid
// TODO check if key is valid ?
// https://github.com/paralin/go-dota2/blob/99aa20c303eaee83526aa2cedff8b1a47273125b/client.go#L83
const OVERRIDES: Overrides = {
    'ESOMsg.k_ESOMsg_Create': {
        CMsg: 'CMsgSOSingleObject',
        sender: MessageSender.GC,
    },
    'ESOMsg.k_ESOMsg_Destroy': {
        CMsg: 'CMsgSOSingleObject',
        sender: MessageSender.GC,
    },
    'ESOMsg.k_ESOMsg_UpdateMultiple': {
        CMsg: 'CMsgSOMultipleObjects',
        sender: MessageSender.GC,
    },
    'ESOMsg.k_ESOMsg_CacheSubscribed': { sender: MessageSender.GC },
    'ESOMsg.k_ESOMsg_CacheUnsubscribed': { sender: MessageSender.GC },
    'EDOTAGCMsg.k_EMsgGCPracticeLobbyResponse': { CMsg: 'CMsgGenericResult' },
    // TODO, probably scrap long term
    'EGCBaseClientMsg.k_EMsgGCClientConnectionStatus': {
        sender: MessageSender.GC,
    },
    'EGCBaseClientMsg.k_EMsgGCClientWelcome': { sender: MessageSender.GC },
    'EDOTAGCMsg.k_EMsgClientToGCGetProfileCardResponse': {
        CMsg: 'CMsgDOTAProfileCard',
        sender: MessageSender.GC,
    },
};

type MatchingProtobuf = {
	kMsg: string;
	CMsg: string;
	sender: MessageSender;
};

// https://github.com/paralin/go-dota2/blob/master/apigen/msg_overrides.go
// https://github.com/paralin/go-dota2/blob/master/apigen/msg_sender.go
// a lot of "trust me bro" going on here
export const getMessageSender = (messageName: string) => {
    const name = messageName.replace(/^k_EMsg/, '').replace(/^DOTA/, '');

    if (name.startsWith('SQL')) {
        return MessageSender.UNSUPPORTED;
    }
    if (name.includes('ClientToGC')) {
        if (name.endsWith('Response')) {
            return MessageSender.GC;
        }
        return MessageSender.CLIENT;
    }
    if (
        /GCResponseTo|GCRequestTo|GCToGC|^Server|^Gameserver|ServerToGC|GCToServer|GC_GameServer/.test(
            name,
        )
    ) {
        return MessageSender.UNSUPPORTED;
    }
    if (name.includes('GCToClient')) {
        return MessageSender.GC;
    }
    if (name.includes('SignOut')) {
        return MessageSender.UNSUPPORTED;
    }
    if (name.endsWith('Request')) {
        return MessageSender.CLIENT;
    }
    if (name.endsWith('Response')) {
        return MessageSender.GC;
    }
    // TODO
    // camel case splitting
    // just assuming client
    // TODO
    if (name.startsWith('GC')) {
        return MessageSender.CLIENT;
    }
    return MessageSender.CLIENT;
};

// more logic from https://github.com/paralin/go-dota2/blob/e8f172852608601dcb13ebc8aa442ced27938ad5/apigen/msg_func.go#L11
export const guessCMsg = function* (protobufName: string, messageName: string) {
    // this inner generator function attempts to guess a matching CMsg based on known patterns
    const _guessCMsg = function* (messageName: string): Generator<string> {
        const name = messageName.replace(/^k_EMsg/, '').replace(/^GC/, '');
        yield name;
        yield name.replace(/^k_ESOMsg_/, '');
        yield 'GC' + name;
        const responseToResult = name.replace(/Response/g, 'Result');
        yield responseToResult;
        yield 'GC' + responseToResult;
        yield name.replace(/DOTA/g, '');
        yield name.replace(/GCToClient|ClientToGC/g, 'DOTA'); // https://github.com/ValvePython/dota2/blob/6ccebc3689e107746ec32ce07fc2f5cacecc0e18/dota2/msg.py#L84
        yield name.replace(/GCToClient/g, '').replace(/ClientToGC/g, '');
        yield 'DOTA' + name;

        // TODO
        // custom, and should maybe be overrides?
        // to match GCClient ConnectionStatus
        yield name.replace(/Client/, '');
        // experimental, untested: GCServer ConnectionStatus
        yield name.replace(/Server/, '');
    };
    // this generator outputs prefixes on top of the results from the previous generator
    for (const message of _guessCMsg(messageName)) {
        // handles EDOTAGCMsg and some things in EGCBaseMsg
        yield 'CMsg' + message;
        if (protobufName === 'EGCBaseClientMessage') {
            yield 'CGCMsg' + message;
        }
        if (protobufName === 'ESOMsg') {
            yield 'CMsgSO' + message;
        }
    }
};

// for a specific kMsg/enumName+messageName, find a CMsg
export const findCMsg = (enumName: string, messageName: string) => {
    let sender: MessageSender | undefined;
    let CMsg: any;
    const override = OVERRIDES[enumName + '.' + messageName];
    if (override) {
        if (override.CMsg) {
            // @ts-ignore
            CMsg = protobufs[override.CMsg];
        }
        if (override.sender) {
            sender = override.sender;
        }
        if (override.CMsg && !CMsg) {
            throw new Error(
                `Invalid override for message: ${messageName}. ${override.CMsg} does not exist`,
            );
        }
    }
    if (!sender) {
        sender = getMessageSender(messageName);
    }
    if (sender === MessageSender.UNSUPPORTED) {
        debug('Skipping message %s as message sender is UNSUPPORTED', messageName);
        return;
    }
    // return early if we have an override for CMsg
    if (override?.CMsg) {
        return { CMsg, CMsgName: override.CMsg, sender };
    }
    // loop through matches from our guesser, see if any of them exist in the protobufs object
    for (const CMsgName of guessCMsg(enumName, messageName)) {
        debug('Searching protos for %s', CMsgName);
        // @ts-ignore
        CMsg = protobufs[CMsgName];
        if (CMsg) {
            return { CMsg, CMsgName, sender };
        }
    }
};

// generates each kMsg + CMSg combination, if any, for the enums given
export const findMatchingProtos = function* (
    enums: string[],
): Generator<MatchingProtobuf> {
    for (const enumName of enums) {
        // @ts-ignore
        const _enum = protobufs[enumName];
        if (!_enum) {
            throw Error(`Could not find enum: ${enumName}, was it built by protoc?`);
        }
        for (const messageName of getEnumValues(_enum)) {
            const CMsg = findCMsg(enumName, messageName);
            if (!CMsg) {
                debug('No CMsg found for: %s', messageName);
            } else {
                debug('Found CMsg: %s for: %s', CMsg.CMsgName, messageName);
                yield {
                    kMsg: enumName + '.' + messageName,
                    CMsg: CMsg.CMsgName,
                    sender: CMsg.sender,
                };
            }
        }
    }
};

// instead of using TypeScript utilities to get the GCEvents type
// which can cause issues on IDEs
// pre-generate the types and write them out
// see: https://github.com/itsjfx/node-dota2-user/issues/9
const outputGCEventsType = (protos: MatchingProtobuf[]) => {
    console.log('export type GCEvents = {');
    for (const proto of protos) {
        if (proto.sender !== MessageSender.GC) {
            continue;
        }
        console.log(
            TAB +
			`[protobufs.${proto.kMsg}]: (data: protobufs.${proto.CMsg}) => void;`,
        );
    }
    console.log('};');
};

// spit out our strictly typed objects
const outputObject = (
    protos: MatchingProtobuf[],
    objectName: string,
    sender: MessageSender,
) => {
    console.log(`export const ${objectName} = {`);
    for (const proto of protos) {
        if (proto.sender !== sender) {
            continue;
        }
        // ts-proto now outputs a static interface around all values https://github.com/stephenh/ts-proto/pull/1104
        // but as we import * where we do export * and omit ts-proto helper types
        // we lose context of the MessageFns type
        // which also causes issues when we want to run tsc with declarations
        // so we can cast the type explictly
        console.log(
            TAB +
			`[protobufs.${proto.kMsg}]: protobufs.${proto.CMsg} as MessageFns<protobufs.${proto.CMsg}>,`,
        );
    }
    console.log('};');
    console.log(`Object.freeze(${objectName});`);

    console.log(`export type ${objectName}Type = {`);
    for (const proto of protos) {
        if (proto.sender !== sender) {
            continue;
        }
        // ts-proto now outputs a static interface around all values https://github.com/stephenh/ts-proto/pull/1104
        // but as we import * where we do export * and omit ts-proto helper types
        // we lose context of the MessageFns type
        // which also causes issues when we want to run tsc with declarations
        // so we can cast the type explictly
        console.log(TAB + `[protobufs.${proto.kMsg}]: protobufs.${proto.CMsg};`);
    }
    console.log('};');
};

// cli
const main = async () => {
    // with 2 separate objects it's easier not to live generate the protobufs
    const protos = [...findMatchingProtos(ENUMS_TO_SEARCH)];

    console.log("import * as protobufs from './index';");
    console.log("import { MessageFns } from './protobuf-utils';");
    outputObject(protos, 'ClientProtobufs', MessageSender.CLIENT);
    outputObject(protos, 'GCProtobufs', MessageSender.GC);
    outputGCEventsType(protos);
    console.log(
        'export const AllProtobufs = { ...ClientProtobufs, ...GCProtobufs };',
    );
    console.log('Object.freeze(AllProtobufs);');
    console.log(
        'export type AllProtobufsType = ClientProtobufsType & GCProtobufsType;',
    );
};

if (require.main === module) {
    main();
}
