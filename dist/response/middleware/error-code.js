import IsCode from "@dikac/t-code/boolean/code";
import Number from "@dikac/t-number/boolean/number";
import IsValue from "@dikac/t-value/boolean/value";
/**
 * if body in instanceof {@see Error}, and {@see Code<number>} use code value for status code
 * and status message from {@see Error.message}
 *
 * optionally if body also is {@see Value}, value will be used as response body
 *
 * @param message {@default false}
 * set {@see Error.message} to status message or not
 * @WARNING enable this might leak sensitive error info to public
 */
export default function ErrorCode(message = false) {
    return function (context, next) {
        const body = context.response.body;
        if (!(body instanceof globalThis.Error)) {
            return next();
        }
        if (!IsCode(body) || !Number(body.code)) {
            return next();
        }
        context.response.status = body.code;
        if (message) {
            context.response.message = body.message;
        }
        if (IsValue(body)) {
            context.response.body = body.value;
        }
    };
}
//# sourceMappingURL=error-code.js.map