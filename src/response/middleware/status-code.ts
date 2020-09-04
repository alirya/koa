import Context from "../../middleware/context/context";
import {Next} from "koa";
import {Middleware} from "@koa/router";
import FunctionSingle from "@dikac/t-function/function-single";
import Function from "@dikac/t-function/function";

export default function StatusCode(
    middleware : Function<[Context, Next], void>,
    status : FunctionSingle<number, boolean>
) : Middleware {

    return function (context, next) {

        if(status(context.response.status)) {

            return middleware(context, next);

        } else {

            return next();
        }
    }
}
