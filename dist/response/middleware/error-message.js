import DefaultMessage from "@dikac/t-http/response/default-message";
import FromResponse from "../from-response";
import ErrorCallback from "./error-callback";
import Name from "@dikac/t-object/string/name";
export default function ErrorMessage(instance, callNext = true) {
    return ErrorCallback(instance, function (error, context) {
        const response = DefaultMessage({
            code: (error.code || error.status),
            body: [Name(error), error.message, error.stack].join('\n')
        });
        FromResponse(context, response);
    }, callNext);
}
//# sourceMappingURL=error-message.js.map