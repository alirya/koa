import IsCode from "@dikac/t-code/boolean/code";
import Number from "@dikac/t-number/boolean/number";
import IsValue from "@dikac/t-value/boolean/value";
/**
 * if body in instanceof {@see Error} set response message from {@see Error.message}
 *
 * and also according to following
 * - if also instanceof {@see Code<number>} use code value for status code
 * - if also instanceof {@see Value}, value will be used as response body
 * - if also instanceof {@see Body}, body will be used as response body, {@see Value}, takes priority
 */
export default function ErrorResponse() {
    return function (context, next) {
        const body = context.response.body;
        if (!(body instanceof globalThis.Error)) {
            return next();
        }
        context.response.status = (IsCode(body) && Number(body.code)) ? body.code : 500;
        context.response.message = body.message;
        if (IsValue(body)) {
            context.response.body = body.value;
        }
        else if (body.body !== undefined) {
            context.response.body = body.body;
        }
    };
}
//# sourceMappingURL=error-response.js.map