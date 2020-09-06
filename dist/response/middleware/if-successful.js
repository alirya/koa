(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-http/response/code/class/boolean/successful", "./if-status-code"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const successful_1 = require("@dikac/t-http/response/code/class/boolean/successful");
    const if_status_code_1 = require("./if-status-code");
    function IfSuccessful(middleware) {
        return if_status_code_1.default(middleware, successful_1.default);
    }
    exports.default = IfSuccessful;
});
//# sourceMappingURL=if-successful.js.map