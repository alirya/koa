import Context from "../../middleware/context/context";
import {Next} from "koa";
import ClientErrorType from "@dikac/t-http/response/code/class/boolean/client-error";
import {Middleware} from "@koa/router";
import StatusCode from "./status-code";

export default function ClientError(
    middleware : (body : Context, next : Next) => void,
) : Middleware {

    return StatusCode(middleware, ClientErrorType);
}
