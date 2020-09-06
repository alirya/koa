import Context from "../../middleware/context/context";
import {Next} from "koa";
import ServerErrorType from "@dikac/t-http/response/code/class/boolean/server-error";
import {Middleware} from "@koa/router";
import IfStatusCode from "./if-status-code";

export default function IfServerError(
    middleware : (body : Context, next : Next) => void,
) : Middleware {

    return IfStatusCode(middleware, ServerErrorType);
}
