import InformationalType from "@dikac/t-http/response/code/class/boolean/informational";
import {DefaultContext, DefaultState, Middleware} from "koa";
import IfStatusCode from "./if-status-code";

/**
 * use {@param middleware} if response status code is 1xx
 *
 * @param middleware
 */
export default function IfInformational<
    State extends DefaultState,
    ContextType extends DefaultContext,
    ResponseBody = any
>(
    middleware : Middleware<State, ContextType, ResponseBody>
) : Middleware<State, ContextType, ResponseBody> {

    return IfStatusCode(middleware, InformationalType);
}
