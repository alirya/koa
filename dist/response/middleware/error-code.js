(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-code/boolean/code", "@dikac/t-number/boolean/number", "@dikac/t-value/boolean/value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const code_1 = require("@dikac/t-code/boolean/code");
    const number_1 = require("@dikac/t-number/boolean/number");
    const value_1 = require("@dikac/t-value/boolean/value");
    /**
     * if body in instanceof {@see Error}, and {@see Code<number>} use code value for status code
     * and status message from {@see Error.message}
     *
     * optionally if body also is {@see Value}, value will be used as response body
     *
     * @param message {@default false}
     * set {@see Error.message} to status message or not
     * @WARNING enable this might leak sensitive error info to public
     */
    function ErrorCode(message = false) {
        return function (context, next) {
            const body = context.response.body;
            if (!(body instanceof globalThis.Error)) {
                return next();
            }
            if (!code_1.default(body) || !number_1.default(body.code)) {
                return next();
            }
            context.response.status = body.code;
            if (message) {
                context.response.message = body.message;
            }
            if (value_1.default(body)) {
                context.response.body = body.value;
            }
        };
    }
    exports.default = ErrorCode;
});
//# sourceMappingURL=error-code.js.map