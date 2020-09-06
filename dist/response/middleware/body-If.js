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
    function BodyIf(validation, middleware) {
        return function (context, next) {
            if (validation(context.response.body)) {
                return middleware(context, next);
            }
            else {
                return next();
            }
        };
    }
    exports.default = BodyIf;
});
//# sourceMappingURL=body-If.js.map