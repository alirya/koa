(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-http/response/code/class/boolean/redirection", "./status-code"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const redirection_1 = require("@dikac/t-http/response/code/class/boolean/redirection");
    const status_code_1 = require("./status-code");
    function Redirection(middleware) {
        return status_code_1.default(middleware, redirection_1.default);
    }
    exports.default = Redirection;
});
//# sourceMappingURL=redirection.js.map