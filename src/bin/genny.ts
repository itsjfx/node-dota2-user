#!/usr/bin/env -S npx ts-node

import * as protobufs from '../protobufs';
const debug = require('debug')('dota2-user:genny');

const TAB = '    ';

// search these protos
// EDOTAGCMsg: for most messages
// EGCBaseClientMsg: client hello and welcome
// ESOMsg: caches
// EGCBaseMsg: for party and lobby messages
const ENUMS_TO_SEARCH = ['EDOTAGCMsg', 'EGCBaseClientMsg', 'ESOMsg', 'EGCBaseMsg'];

enum MessageSender {
    UNSUPPORTED,
    CLIENT,
    GC,
}

// https://github.com/paralin/go-dota2/blob/99aa20c303eaee83526aa2cedff8b1a47273125b/client.go#L83
interface Overrides {
    [key: string]: {
        CMsg?: string;
        sender?: MessageSender;
    };
}

// need to be very careful adding new overrides, as this list isn't type safe
// there's a check to see if a value is valid, but no check whether a key is valid
// TODO check if key is valid ?
const OVERRIDES: Overrides = {
    'ESOMsg.k_ESOMsg_Create': { CMsg: 'CMsgSOSingleObject' },
    'ESOMsg.k_ESOMsg_Destroy': { CMsg: 'CMsgSOSingleObject' },
    'ESOMsg.k_ESOMsg_UpdateMultiple': { CMsg: 'CMsgSOMultipleObjects' },
    // TODO, probably scrap long term
    'EGCBaseClientMsg.k_EMsgGCClientConnectionStatus': { sender: MessageSender.GC },
    'EGCBaseClientMsg.k_EMsgGCClientWelcome': { sender: MessageSender.GC },
};

type MatchingProtobuf = {
    kMsg: string;
    CMsg: string;
    sender: MessageSender;
};

// https://github.com/paralin/go-dota2/blob/master/apigen/msg_overrides.go
// https://github.com/paralin/go-dota2/blob/master/apigen/msg_sender.go
export const getMessageSender = (messageName: string) => {
    // TODO
    // overrides

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
    if (/GCResponseTo|GCRequestTo|GCToGC|^Server|^Gameserver|ServerToGC|GCToServer|GC_GameServer/.test(name)) {
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

export const guessCMsg = function* (protobufName: string, messageName: string) {
    const _guessCMsg = function* (messageName: string): Generator<string> {
        const name = messageName.replace(/^k_EMsg/, '').replace(/^GC/, '');
        yield name;
        yield name.replace(/^k_ESOMsg_/, '');
        yield 'GC' + name;
        const responseToResult = name.replace(/Response/g, 'Result');
        yield responseToResult;
        yield 'GC' + responseToResult;
        yield name.replace(/DOTA/g, '');
        yield name.replace(/GCToClient/g, '').replace(/ClientToGC/g, '');
        yield 'DOTA' + name;

        // TODO
        // custom, and should maybe be overrides?
        // to match GCClient ConnectionStatus
        yield name.replace(/Client/, '');
        // experimental, untested: GCServer ConnectionStatus
        yield name.replace(/Server/, '');
    };
    // prefixer
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

export const findCMsg = (protobufName: string, messageName: string) => {
    let sender: MessageSender | undefined;
    let CMsg: any;
    const override = OVERRIDES[protobufName + '.' + messageName];
    if (override) {
        if (override.CMsg) {
            // @ts-ignore
            CMsg = protobufs[override.CMsg];
        }
        if (override.sender) {
            sender = override.sender;
        }
        if (override.CMsg && !CMsg) {
            throw new Error(`Invalid override for message: ${messageName}. ${override.CMsg} does not exist`);
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

    for (const CMsgName of guessCMsg(protobufName, messageName)) {
        debug('Searching protos for %s', CMsgName);
        // @ts-ignore
        CMsg = protobufs[CMsgName];
        if (CMsg) {
            return { CMsg, CMsgName, sender };
        }
    }
};

export const findMatchingProtos = function* (): Generator<MatchingProtobuf> {
    for (const protobufName of ENUMS_TO_SEARCH) {
        // @ts-ignore
        const protobuf = protobufs[protobufName];
        // hack to get only the keys of an enum and no values
        for (const messageName of Object.keys(protobuf).splice(Object.keys(protobuf).length / 2)) {
            const CMsg = findCMsg(protobufName, messageName);
            if (!CMsg) {
                debug('No CMsg found for %s', messageName);
            } else {
                debug('Found CMsg %s for %s', CMsg.CMsgName, messageName);
                yield { kMsg: protobufName + '.' + messageName, CMsg: CMsg.CMsgName, sender: CMsg.sender };
            }
        }
    }
};

const outputObject = (protos: MatchingProtobuf[], objectName: string, sender: MessageSender) => {
    console.log(`export const ${objectName} = {`);
    protos
        .filter((proto) => proto.sender === sender)
        .forEach(({ kMsg, CMsg }) => {
            console.log(TAB + `[protobufs.${kMsg}]: protobufs.${CMsg},`);
        });
    console.log('};');
    console.log(`Object.freeze(${objectName});`);
};

// cli
const main = async () => {
    // with 2 separate objects it's easier not to live generate the protobufs
    const protos = [...findMatchingProtos()];

    console.log("import * as protobufs from './protobufs';");
    outputObject(protos, 'ClientProtobufs', MessageSender.CLIENT);
    outputObject(protos, 'GCProtobufs', MessageSender.GC);
};

if (require.main === module) {
    main();
}
