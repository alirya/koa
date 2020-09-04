(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-http/response/ok", "@dikac/t-http/response/internal-server-error", "../response/from-response"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ok_1 = require("@dikac/t-http/response/ok");
    const internal_server_error_1 = require("@dikac/t-http/response/internal-server-error");
    const from_response_1 = require("../response/from-response");
    function Validatable(subject, ...argument) {
        return function (context, next) {
            return subject(context, ...argument).then(function (subject) {
                let response;
                if (subject.valid) {
                    response = ok_1.default(subject.value);
                }
                else {
                    response = internal_server_error_1.default(subject.message);
                }
                //console.log(response);
                from_response_1.default(context, response);
                return next();
            }).catch(function (error) {
                let response = internal_server_error_1.default(error);
                //console.log(response);
                from_response_1.default(context, response);
                return next();
            });
        };
    }
    exports.default = Validatable;
});
//# sourceMappingURL=validatable.js.map