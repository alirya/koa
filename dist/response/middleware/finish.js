(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-http/response/code/class/boolean/successful"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const successful_1 = require("@dikac/t-http/response/code/class/boolean/successful");
    /**
     * finish middleware if response code is success (2xxx)
     */
    function Finish(context, next) {
        if (!successful_1.default(context.response.status)) {
            return next();
        }
    }
    exports.default = Finish;
});
//# sourceMappingURL=finish.js.map