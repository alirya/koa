(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function FromResponse(context, response) {
        context.response.set(response.header);
        context.response.body = response.body;
        context.response.status = response.code;
        context.response.message = response.message;
    }
    exports.default = FromResponse;
});
//# sourceMappingURL=from-response.js.map