(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-array/validator/value-all", "@dikac/t-object/validator/object", "@dikac/t-object/validator/not-empty", "@dikac/t-object/validatable/string/object", "@dikac/t-object/validatable/string/not-empty", "@dikac/t-array/message/message/list/invalid", "@dikac/t-array/validatable/and"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_all_1 = require("@dikac/t-array/validator/value-all");
    const object_1 = require("@dikac/t-object/validator/object");
    const not_empty_1 = require("@dikac/t-object/validator/not-empty");
    const object_2 = require("@dikac/t-object/validatable/string/object");
    const not_empty_2 = require("@dikac/t-object/validatable/string/not-empty");
    const invalid_1 = require("@dikac/t-array/message/message/list/invalid");
    const and_1 = require("@dikac/t-array/validatable/and");
    function BodyObject(messages = invalid_1.default, type = object_2.default, empty = not_empty_2.default) {
        let validators = [
            new object_1.default(type),
            new not_empty_1.default(empty),
        ];
        let validator = value_all_1.default(validators, and_1.default, messages);
        return validator;
    }
    exports.default = BodyObject;
    ;
});
//# sourceMappingURL=body-object.js.map