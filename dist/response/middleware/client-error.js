(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-http/response/code/class/boolean/client-error", "./status-code"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const client_error_1 = require("@dikac/t-http/response/code/class/boolean/client-error");
    const status_code_1 = require("./status-code");
    function ClientError(middleware) {
        return status_code_1.default(middleware, client_error_1.default);
    }
    exports.default = ClientError;
});
//# sourceMappingURL=client-error.js.map