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
            return next().then(function () {
                log[severity](`${context.response.status} ${context.response.message}`, context.response.headers, context.response.body);
            });
        };
    }
    exports.default = Log;
});
//# sourceMappingURL=log.js.map