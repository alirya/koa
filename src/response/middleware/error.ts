import Context from "../../middleware/context/context";
import {Next} from "koa";
import {Middleware} from "koa";

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
export default function Error(message : boolean = false) : Middleware {

    return function (context : Context, next : Next) {

        if(context.response.body instanceof globalThis.Error) {

            context.response.status = 500;

            if(message) {

                context.response.body = context.response.body.message;
            }

        } else {

            return next();
        }
    }
}
