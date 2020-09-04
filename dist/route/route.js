(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Route {
        constructor(router, route) {
            this.router = router;
            this.route = route;
        }
        use(middleware) {
            this.router.register(this.route.path, [this.route.method], middleware);
        }
    }
    exports.default = Route;
});
//# sourceMappingURL=route.js.map