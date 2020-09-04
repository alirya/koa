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
    function Log(log, severity = 'debug') {
        return function (context, next) {
            log[severity](`${context.request.method} ${context.request.path}`, context.request.headers, context.request.body);
            return next();
        };
    }
    exports.default = Log;
});
//# sourceMappingURL=log.js.map