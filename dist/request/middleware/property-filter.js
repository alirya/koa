(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../middleware/property-filter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const property_filter_1 = require("../../middleware/property-filter");
    function BodyFilter(filter, property) {
        return property_filter_1.default('request', filter, property);
    }
    exports.default = BodyFilter;
});
//# sourceMappingURL=property-filter.js.map