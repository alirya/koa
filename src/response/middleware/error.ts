import Context from "../../middleware/context/context";
import {Next} from "koa";
import {Middleware} from "koa";

/**
 * @deprecated
 *
 * if body in instanceof {@see Error}, set status code to 500, and
 * replace body with {@param body}
 *
 * @param body
 *
 * @param callback
 * to be called on error
 */
export default function Error(
    body : any,
    callback ?: (error : globalThis.Error, context : Context)=>void
) : Middleware {

    return function (context : Context, next : Next) {

        try {

            return next();

        } catch (error) {

            context.response.status = 500;
            context.response.message = error.message;
            context.response.body = body;

            if(callback) {

                callback(error, context);
            }
        }

        const current = context.response.body;

        if(current instanceof globalThis.Error) {

            context.response.status = 500;
            context.response.message = current.message;
            context.response.body = body;

            if(callback) {

                callback(current, context);
            }

        } else {

            return next();
        }
    }
}
