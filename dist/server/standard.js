var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _server;
import Koa from "koa";
import Router from "@koa/router";
export default class Standard {
    constructor(middlewares, port) {
        this.middlewares = middlewares;
        this.port = port;
        this.koa = new Koa();
        _server.set(this, void 0);
        this.route = new Router();
        this.middlewares.forEach(this.koa.use);
        this.koa.use(this.route.routes());
        this.koa.use(this.route.allowedMethods());
    }
    get server() {
        return __classPrivateFieldGet(this, _server);
    }
    open() {
        if (!__classPrivateFieldGet(this, _server)) {
            __classPrivateFieldSet(this, _server, this.koa.listen(this.port));
        }
    }
    close() {
        if (__classPrivateFieldGet(this, _server)) {
            __classPrivateFieldGet(this, _server).close();
            __classPrivateFieldSet(this, _server, undefined);
        }
    }
}
_server = new WeakMap();
//# sourceMappingURL=standard.js.map