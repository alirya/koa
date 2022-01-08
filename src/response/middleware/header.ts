import Context from "../../middleware/context/context";
import {DefaultContext, DefaultState, Next} from "koa";
import {Middleware} from "koa";

/**
 * set response header
 */
export default function Header<
    State extends DefaultState = DefaultState,
    ContextType extends DefaultContext = DefaultContext,
    ResponseBody = unknown,
>(
    headers : Record<string, string>
) : Middleware<
    State,
    ContextType,
    ResponseBody
    > {

    return function (context : Context<State, ContextType, ResponseBody>, next : Next) {

        context.response.set(headers)

        return next();

    } as Middleware<State, ContextType, ResponseBody>

}
