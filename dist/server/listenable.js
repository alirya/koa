var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _server;
export default class Listenable {
    constructor(server, port, openCallback, closeCallback) {
        this.port = port;
        this.openCallback = openCallback;
        this.closeCallback = closeCallback;
        _server.set(this, void 0);
        __classPrivateFieldSet(this, _server, server);
    }
    get route() {
        return __classPrivateFieldGet(this, _server).route;
    }
    get koa() {
        return __classPrivateFieldGet(this, _server).koa;
    }
    get server() {
        return __classPrivateFieldGet(this, _server).server;
    }
    open() {
        const server = __classPrivateFieldGet(this, _server).server;
        __classPrivateFieldGet(this, _server).open();
        if (!server) {
            this.openCallback(this.port);
        }
    }
    close() {
        const server = __classPrivateFieldGet(this, _server).server;
        __classPrivateFieldGet(this, _server).close();
        if (server) {
            this.closeCallback(this.port);
        }
    }
}
_server = new WeakMap();
//# sourceMappingURL=listenable.js.map