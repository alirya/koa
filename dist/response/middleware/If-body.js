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
    /**
     * use {@param middleware} if response body is valid against {@param validation}
     *
     * @param validation
     * @param middleware
     */
    function IfBody(validation, middleware) {
        return function (context, next) {
            if (validation(context.response.body)) {
                return middleware(context, next);
            }
            else {
                return next();
            }
        };
    }
    exports.default = IfBody;
});
//# sourceMappingURL=If-body.js.map