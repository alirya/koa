(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-http/response/code/class/boolean/server-error", "./if-status-code"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const server_error_1 = require("@dikac/t-http/response/code/class/boolean/server-error");
    const if_status_code_1 = require("./if-status-code");
    function IfServerError(middleware) {
        return if_status_code_1.default(middleware, server_error_1.default);
    }
    exports.default = IfServerError;
});
//# sourceMappingURL=if-server-error.js.map