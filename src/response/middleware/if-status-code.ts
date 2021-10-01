import Context from "../../middleware/context/context";
import {DefaultContext, DefaultState, Middleware} from "koa";

/**
 * execute middleware if {@param status} match
 *
 *
 * @param middleware
 * @param status
 * @constructor
 */
export default function IfStatusCode<
    State extends DefaultState,
    ContextType extends DefaultContext,
    ResponseBody = any
>(
    middleware : Middleware<State, ContextType, ResponseBody>,
    status : (status:number)=>boolean
) : Middleware<State, ContextType, ResponseBody> {

    return function (context : Context<State, ContextType, ResponseBody> , next) {

        if(status(context.response.status)) {

            return middleware(context, next);

        } else {

            return next();
        }
    }
}
