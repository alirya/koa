var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Standard_server;
import Koa from "koa";
import Router from "@koa/router";
export default class Standard {
    constructor(middlewares, port) {
        this.middlewares = middlewares;
        this.port = port;
        this.koa = new Koa();
        _Standard_server.set(this, void 0);
        this.route = new Router();
        this.middlewares.forEach(this.koa.use);
        this.koa.use(this.route.routes());
        this.koa.use(this.route.allowedMethods());
    }
    get server() {
        return __classPrivateFieldGet(this, _Standard_server, "f");
    }
    open() {
        if (!__classPrivateFieldGet(this, _Standard_server, "f")) {
            __classPrivateFieldSet(this, _Standard_server, this.koa.listen(this.port), "f");
        }
    }
    close() {
        if (__classPrivateFieldGet(this, _Standard_server, "f")) {
            __classPrivateFieldGet(this, _Standard_server, "f").close();
            __classPrivateFieldSet(this, _Standard_server, undefined, "f");
        }
    }
}
_Standard_server = new WeakMap();
//# sourceMappingURL=standard.js.map