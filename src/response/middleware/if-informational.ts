import InformationalType from "@dikac/t-http/response/code/class/boolean/informational";
import {Middleware} from "koa";
import IfStatusCode from "./if-status-code";

/**
 * use {@param middleware} if response status code is 1xx
 *
 * @param middleware
 */
export default function IfInformational(middleware : Middleware) : Middleware {

    return IfStatusCode(middleware, InformationalType);
}
