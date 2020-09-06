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
     * @param context
     * @param next
     */
    function Error(context, next) {
        if (context.response.body instanceof globalThis.Error) {
            context.response.status = 500;
            context.response.body = context.response.body.message;
        }
        else {
            return next();
        }
    }
    exports.default = Error;
});
//# sourceMappingURL=error.js.map