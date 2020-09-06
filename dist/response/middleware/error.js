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
    /**
     * if body in instanceof {@see Error}, set status code to 500, and
     * replace body with error message
     *
     * @WARNING this will leak error message to public
     *
     * @param message {@default false}
     * set {@see Error.message} to response body or not
     * @WARNING enable this might leak sensitive error info to public
     */
    function Error(message = false) {
        return function (context, next) {
            if (context.response.body instanceof globalThis.Error) {
                context.response.status = 500;
                if (message) {
                    context.response.body = context.response.body.message;
                }
            }
            else {
                return next();
            }
        };
    }
    exports.default = Error;
});
//# sourceMappingURL=error.js.map