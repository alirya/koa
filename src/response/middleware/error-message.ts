import Context from "../../middleware/context/context";
import {Next} from "koa";
import {Middleware} from "koa";

/**
 * if body in instanceof {@see Error}, set status code to 500,
 * body with {@see Error.stack}, and message with {@see Error.message},
 *
 * @WARNING this will leak error message to public, use for
 * development only
 */
export default function ErrorMessage() : Middleware {

    return function (context : Context, next : Next) {

        if(context.response.body instanceof globalThis.Error) {

            context.response.status = 500;
            context.response.message = context.response.body.message;
            context.response.body = context.response.body.stack;

        } else {

            return next();
        }
    }
}
