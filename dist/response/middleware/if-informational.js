(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-http/response/code/class/boolean/informational", "./if-status-code"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const informational_1 = require("@dikac/t-http/response/code/class/boolean/informational");
    const if_status_code_1 = require("./if-status-code");
    /**
     * use {@param middleware} if response status code is 1xx
     *
     * @param middleware
     */
    function IfInformational(middleware) {
        return if_status_code_1.default(middleware, informational_1.default);
    }
    exports.default = IfInformational;
});
//# sourceMappingURL=if-informational.js.map