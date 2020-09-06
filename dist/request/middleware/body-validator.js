(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./property-validator"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const property_validator_1 = require("./property-validator");
    function BodyValidator(validator, failCode = 400) {
        return property_validator_1.default(validator, 'body', failCode);
    }
    exports.default = BodyValidator;
});
//# sourceMappingURL=body-validator.js.map