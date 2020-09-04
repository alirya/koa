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
    function Validatable(context, validatable) {
        if (validatable.valid) {
            context.response.status = validatable.code;
            context.response.body = validatable.value;
        }
        else {
            context.response.status = validatable.code;
            context.response.body = validatable.message;
        }
    }
    exports.default = Validatable;
});
//# sourceMappingURL=validatable.js.map