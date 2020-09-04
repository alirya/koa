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
    function StatusCode(middleware, status) {
        return function (context, next) {
            if (status(context.response.status)) {
                return middleware(context, next);
            }
            else {
                return next();
            }
        };
    }
    exports.default = StatusCode;
});
//# sourceMappingURL=status-code.js.map