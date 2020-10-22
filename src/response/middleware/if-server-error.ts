import Context from "../../middleware/context/context";
import {Next} from "koa";
import ServerErrorType from "@dikac/t-http/response/code/class/boolean/server-error";
import {Middleware} from "koa";
import IfStatusCode from "./if-status-code";
/**
 * use {@param middleware} if response status code is 5xx
 *
 * @param middleware
 */
export default function IfServerError(
    middleware : (body : Context, next : Next) => any,
) : Middleware {

    return IfStatusCode(middleware, ServerErrorType);
}
