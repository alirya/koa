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
    function PropertyValidator(validator, failCode = 400, key) {
        return function (context, next) {
            let validatable = validator.validate(context.request[key]);
            if (validatable.valid) {
                return next();
            }
            else {
                context.response.status = failCode;
                context.response.body = validatable.message;
            }
        };
    }
    exports.default = PropertyValidator;
});
//# sourceMappingURL=property-validator.js.map