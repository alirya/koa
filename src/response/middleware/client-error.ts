import ClientErrorType from "@dikac/t-http/response/code/class/boolean/client-error";
import {Middleware} from "koa";
import IfStatusCode from "./if-status-code";

export default function ClientError(
    middleware : Middleware,
) : Middleware {

    return IfStatusCode(middleware, ClientErrorType);
}
