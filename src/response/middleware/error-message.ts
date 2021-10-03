import Context from "../../middleware/context/context";
import {Next} from "koa";
import ErrorMiddleware from "./error";
import {Middleware} from "koa";
import * as Koa from "koa";
import {RouterParamContext} from "@koa/router";
import Response from "@dikac/t-http/response/response";
import DefaultMessage from "@dikac/t-http/response/default-message";
import Codes from "@dikac/t-http/response/message/message/codes";
import FromResponse from "../from-response";
import ErrorCallback from "./error-callback";
import Name from "@dikac/t-object/string/name";

/**
 * if body in instanceof {@see Error}, set status code to 500,
 * body with {@see Error.stack}, and message with {@see Error.message},
 *
 * @WARNING this will leak error message to public, use for
 * development only
 */
export default function ErrorMessage<
    Error extends globalThis.Error & {status: number},
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
    ResponseBody,
    >(
    instance: new() => Error,
    callNext ?: boolean
) : Middleware;
export default function ErrorMessage<
    Error extends globalThis.Error & {code: number},
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
    ResponseBody,
    >(
    instance: new() => Error,
    callNext ?: boolean
) : Middleware;
export default function ErrorMessage<
    Error extends globalThis.Error & {code: number, status: number},
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
    ResponseBody,
>(
    instance: new() => Error,
    callNext : boolean = true
) : Middleware {

    return ErrorCallback(instance, function (error, context)  {

        const response = DefaultMessage({
            code : (error.code || error.status) as keyof Codes,
            body : [Name(error), error.message, error.stack].join('\n')
        })

        FromResponse(context, response);

    }, callNext)
}
