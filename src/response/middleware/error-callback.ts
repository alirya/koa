import Context from "../../middleware/context/context";
import {Next} from "koa";
import {Middleware} from "koa";

/**
 * if body in instanceof {@see Error}, set status code to 500, and
 * replace body with {@param error}
 *
 * @param error
 *
 * @param callback
 * to be called on error
 */
export default function ErrorCallback<Error extends globalThis.Error>(
    error : new()=>Error,
    callback : (error : Error, context : Context)=>void,
    callNext : boolean = false
) : Middleware {

    return function (context : Context, next : Next) {

        try {

            return next();

        } catch (err) {

            if(err instanceof error) {

                callback(err, context);

                if(callNext) {

                    return next();
                }
            }
        }
    }
}
