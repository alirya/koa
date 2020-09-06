import Context from "../../middleware/context/context";
import {Next} from "koa";
import Code from "@dikac/t-code/boolean/code";
import Number from "@dikac/t-number/boolean/number";
import Value from "@dikac/t-value/boolean/value";

export default function ErrorCode(context : Context, next : Next) {

    const body = context.response.body;

    if(!(body instanceof globalThis.Error)) {

        return next();
    }

    if(!Code(body) || !Number(body.code)) {

        return next();
    }

    context.response.status = body.code;
    context.response.message = body.message;

    if(Value(body)) {

        context.response.body = body.value;
    }
}
