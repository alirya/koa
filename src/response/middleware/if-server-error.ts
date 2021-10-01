import ServerErrorType from "@dikac/t-http/response/code/class/boolean/server-error";
import {DefaultContext, DefaultState, Middleware} from "koa";
import IfStatusCode from "./if-status-code";
/**
 * use {@param middleware} if response status code is 5xx
 *
 * @param middleware
 */
export default function IfServerError<    State extends DefaultState,
    ContextType extends DefaultContext,
    ResponseBody = any
>(
    middleware :  Middleware<State, ContextType, ResponseBody>
) :  Middleware<State, ContextType, ResponseBody> {

    return IfStatusCode(middleware, ServerErrorType);
}
