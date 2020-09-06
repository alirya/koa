(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-http/response/internal-server-error", "../from-response"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const internal_server_error_1 = require("@dikac/t-http/response/internal-server-error");
    const from_response_1 = require("../from-response");
    /**
     * use resolved {@param response} value for response data
     *
     * on error set status code to 500, and set value from {@see Promise.catch} to response body, and should be
     * handled by next middleware
     *
     * @param response
     */
    function Response(response) {
        return function (context, next) {
            return response(context).then(function (subject) {
                from_response_1.default(context, subject);
                return next();
            }).catch(function (error) {
                let response = internal_server_error_1.default(error);
                from_response_1.default(context, response);
                return next();
            });
        };
    }
    exports.default = Response;
});
//# sourceMappingURL=response.js.map