var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Listenable_server;
export default class Listenable {
    constructor(server, port, openCallback, closeCallback) {
        this.port = port;
        this.openCallback = openCallback;
        this.closeCallback = closeCallback;
        _Listenable_server.set(this, void 0);
        __classPrivateFieldSet(this, _Listenable_server, server, "f");
    }
    get route() {
        return __classPrivateFieldGet(this, _Listenable_server, "f").route;
    }
    get koa() {
        return __classPrivateFieldGet(this, _Listenable_server, "f").koa;
    }
    get server() {
        return __classPrivateFieldGet(this, _Listenable_server, "f").server;
    }
    open() {
        const server = __classPrivateFieldGet(this, _Listenable_server, "f").server;
        __classPrivateFieldGet(this, _Listenable_server, "f").open();
        if (!server) {
            this.openCallback(this.port);
        }
    }
    close() {
        const server = __classPrivateFieldGet(this, _Listenable_server, "f").server;
        __classPrivateFieldGet(this, _Listenable_server, "f").close();
        if (server) {
            this.closeCallback(this.port);
        }
    }
}
_Listenable_server = new WeakMap();
//# sourceMappingURL=listenable.js.map