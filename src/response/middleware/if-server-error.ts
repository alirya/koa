import ServerErrorType from "@dikac/t-http/response/code/class/boolean/server-error";
import {Middleware} from "koa";
import IfStatusCode from "./if-status-code";
/**
 * use {@param middleware} if response status code is 5xx
 *
 * @param middleware
 */
export default function IfServerError(middleware : Middleware) : Middleware {

    return IfStatusCode(middleware, ServerErrorType);
}
