import Context from "../../middleware/context/context";
import {Next} from "koa";
import RedirectionType from "@dikac/t-http/response/code/class/boolean/redirection";
import {Middleware} from "@koa/router";
import IfStatusCode from "./if-status-code";
/**
 * use {@param middleware} if response status code is 3xx
 *
 * @param middleware
 */
export default function IfRedirection(
    middleware : (body : Context, next : Next) => any,
) : Middleware {

    return IfStatusCode(middleware, RedirectionType);
}
