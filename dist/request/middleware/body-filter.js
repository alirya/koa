(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./property-filter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const property_filter_1 = require("./property-filter");
    function BodyFilter(filter) {
        return property_filter_1.default(filter, 'body');
    }
    exports.default = BodyFilter;
});
//# sourceMappingURL=body-filter.js.map