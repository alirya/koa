import Context from "../../middleware/context/context";
import {Next} from "koa";
import IsCode from "@dikac/t-code/boolean/code";
import Number from "@dikac/t-number/boolean/number";
import IsValue from "@dikac/t-value/boolean/value";

/**
 * if body in instanceof {@see Error}, and {@see Code<number>} use code value for status code
 * and status message from {@see Error.message}
 *
 * optionally if body also is {@see Value}, value will be used as response body
 *
 * @param context
 * @param next
 */
export default function ErrorCode(context : Context, next : Next) {

    const body = context.response.body;

    if(!(body instanceof globalThis.Error)) {

        return next();
    }

    if(!IsCode(body) || !Number(body.code)) {

        return next();
    }

    context.response.status = body.code;
    context.response.message = body.message;

    if(IsValue(body)) {

        context.response.body = body.value;
    }
}
