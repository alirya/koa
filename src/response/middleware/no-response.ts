import Context from "../../middleware/context/context";
import {Middleware} from "koa";

/**
 * @deprecated
 *
 * @param middleware
 * @constructor
 */
export default function NoResponse(
    middleware : Middleware
) : Middleware {

    return function (context : Context, next) {

        if(context.response.status === 404 && context.response.body === undefined) {

            return middleware(context, next);

        } else {

            return next();
        }
    }
}
