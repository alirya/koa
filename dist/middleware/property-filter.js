(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-http/response/internal-server-error", "../response/from-response"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const internal_server_error_1 = require("@dikac/t-http/response/internal-server-error");
    const from_response_1 = require("../response/from-response");
    function PropertyFilter(type, filter, property) {
        return function (context, next) {
            try {
                context[type][property] = filter(context[type][property]);
            }
            catch (e) {
                from_response_1.default(context, internal_server_error_1.default(e));
            }
            return next();
        };
    }
    exports.default = PropertyFilter;
});
//# sourceMappingURL=property-filter.js.map