(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../from-response"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const from_response_1 = require("../from-response");
    /**
     * set {@param response} to response data
     *
     * @param response
     */
    function Set(response) {
        return function (context, next) {
            from_response_1.default(context, response);
            return next();
        };
    }
    exports.default = Set;
});
//# sourceMappingURL=set.js.map