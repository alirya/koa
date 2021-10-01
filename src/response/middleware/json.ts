import Context from "../../middleware/context/context";
import {DefaultContext, DefaultState, Next} from "koa";
import String from "@dikac/t-string/boolean/string";

/**
 * set appropriate header for JSON if body is already JSON string
 */
export default function Json<
    State extends DefaultState,
    ContextType extends DefaultContext,
    ResponseBody extends string
>(
    context : Context<State, ContextType, ResponseBody>, next : Next
) {

    if(String(context.response.body)) {

        context.response.set({'Content-Type' : 'application/json'})
    }

    return next();
}
