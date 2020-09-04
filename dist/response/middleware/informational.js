(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-http/response/code/class/boolean/informational", "./status-code"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const informational_1 = require("@dikac/t-http/response/code/class/boolean/informational");
    const status_code_1 = require("./status-code");
    function Informational(middleware) {
        return status_code_1.default(middleware, informational_1.default);
    }
    exports.default = Informational;
});
//# sourceMappingURL=informational.js.map