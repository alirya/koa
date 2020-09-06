(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/boolean/string"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const string_1 = require("@dikac/t-string/boolean/string");
    /**
     * set appropriate header for JSON if body is already JSON string
     */
    function JsonString(context, next) {
        if (string_1.default(context.response.body)) {
            context.response.set({ 'Content-Type': 'application/json' });
        }
        return next();
    }
    exports.default = JsonString;
});
//# sourceMappingURL=json-string.js.map