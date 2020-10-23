import RedirectionType from "@dikac/t-http/response/code/class/boolean/redirection";
import {Middleware} from "koa";
import IfStatusCode from "./if-status-code";
/**
 * use {@param middleware} if response status code is 3xx
 *
 * @param middleware
 */
export default function IfRedirection(
    middleware : Middleware,
) : Middleware {

    return IfStatusCode(middleware, RedirectionType);
}
