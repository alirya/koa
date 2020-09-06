import Context from "../../middleware/context/context";
import {Next} from "koa";
import InformationalType from "@dikac/t-http/response/code/class/boolean/informational";
import {Middleware} from "@koa/router";
import IfStatusCode from "./if-status-code";

/**
 * use {@param middleware} if response status code is 1xx
 *
 * @param middleware
 */
export default function IfInformational(
    middleware : (body : Context, next : Next) => void,
) : Middleware {

    return IfStatusCode(middleware, InformationalType);
}
