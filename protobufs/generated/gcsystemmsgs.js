/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    /**
     * ESOMsg enum.
     * @exports ESOMsg
     * @enum {number}
     * @property {number} k_ESOMsg_Create=21 k_ESOMsg_Create value
     * @property {number} k_ESOMsg_Update=22 k_ESOMsg_Update value
     * @property {number} k_ESOMsg_Destroy=23 k_ESOMsg_Destroy value
     * @property {number} k_ESOMsg_CacheSubscribed=24 k_ESOMsg_CacheSubscribed value
     * @property {number} k_ESOMsg_CacheUnsubscribed=25 k_ESOMsg_CacheUnsubscribed value
     * @property {number} k_ESOMsg_UpdateMultiple=26 k_ESOMsg_UpdateMultiple value
     * @property {number} k_ESOMsg_CacheSubscriptionRefresh=28 k_ESOMsg_CacheSubscriptionRefresh value
     * @property {number} k_ESOMsg_CacheSubscribedUpToDate=29 k_ESOMsg_CacheSubscribedUpToDate value
     */
    $root.ESOMsg = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[21] = "k_ESOMsg_Create"] = 21;
        values[valuesById[22] = "k_ESOMsg_Update"] = 22;
        values[valuesById[23] = "k_ESOMsg_Destroy"] = 23;
        values[valuesById[24] = "k_ESOMsg_CacheSubscribed"] = 24;
        values[valuesById[25] = "k_ESOMsg_CacheUnsubscribed"] = 25;
        values[valuesById[26] = "k_ESOMsg_UpdateMultiple"] = 26;
        values[valuesById[28] = "k_ESOMsg_CacheSubscriptionRefresh"] = 28;
        values[valuesById[29] = "k_ESOMsg_CacheSubscribedUpToDate"] = 29;
        return values;
    })();
    
    /**
     * EGCBaseClientMsg enum.
     * @exports EGCBaseClientMsg
     * @enum {number}
     * @property {number} k_EMsgGCPingRequest=3001 k_EMsgGCPingRequest value
     * @property {number} k_EMsgGCPingResponse=3002 k_EMsgGCPingResponse value
     * @property {number} k_EMsgGCToClientPollConvarRequest=3003 k_EMsgGCToClientPollConvarRequest value
     * @property {number} k_EMsgGCToClientPollConvarResponse=3004 k_EMsgGCToClientPollConvarResponse value
     * @property {number} k_EMsgGCCompressedMsgToClient=3005 k_EMsgGCCompressedMsgToClient value
     * @property {number} k_EMsgGCCompressedMsgToClient_Legacy=523 k_EMsgGCCompressedMsgToClient_Legacy value
     * @property {number} k_EMsgGCToClientRequestDropped=3006 k_EMsgGCToClientRequestDropped value
     * @property {number} k_EMsgGCClientWelcome=4004 k_EMsgGCClientWelcome value
     * @property {number} k_EMsgGCServerWelcome=4005 k_EMsgGCServerWelcome value
     * @property {number} k_EMsgGCClientHello=4006 k_EMsgGCClientHello value
     * @property {number} k_EMsgGCServerHello=4007 k_EMsgGCServerHello value
     * @property {number} k_EMsgGCClientConnectionStatus=4009 k_EMsgGCClientConnectionStatus value
     * @property {number} k_EMsgGCServerConnectionStatus=4010 k_EMsgGCServerConnectionStatus value
     */
    $root.EGCBaseClientMsg = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[3001] = "k_EMsgGCPingRequest"] = 3001;
        values[valuesById[3002] = "k_EMsgGCPingResponse"] = 3002;
        values[valuesById[3003] = "k_EMsgGCToClientPollConvarRequest"] = 3003;
        values[valuesById[3004] = "k_EMsgGCToClientPollConvarResponse"] = 3004;
        values[valuesById[3005] = "k_EMsgGCCompressedMsgToClient"] = 3005;
        values[valuesById[523] = "k_EMsgGCCompressedMsgToClient_Legacy"] = 523;
        values[valuesById[3006] = "k_EMsgGCToClientRequestDropped"] = 3006;
        values[valuesById[4004] = "k_EMsgGCClientWelcome"] = 4004;
        values[valuesById[4005] = "k_EMsgGCServerWelcome"] = 4005;
        values[valuesById[4006] = "k_EMsgGCClientHello"] = 4006;
        values[valuesById[4007] = "k_EMsgGCServerHello"] = 4007;
        values[valuesById[4009] = "k_EMsgGCClientConnectionStatus"] = 4009;
        values[valuesById[4010] = "k_EMsgGCServerConnectionStatus"] = 4010;
        return values;
    })();

    return $root;
});
