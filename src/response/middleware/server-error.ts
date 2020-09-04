import Context from "../../middleware/context/context";
import {Next} from "koa";
import ServerErrorType from "@dikac/t-http/response/code/class/boolean/server-error";
import {Middleware} from "@koa/router";
import StatusCode from "./status-code";

export default function ServerError(
    middleware : (body : Context, next : Next) => void,
) : Middleware {

    return StatusCode(middleware, ServerErrorType);
}
