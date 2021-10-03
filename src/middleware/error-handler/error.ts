import Context from "../../middleware/context/context";
import {Next} from "koa";
import * as Koa from "koa";
import {RouterParamContext} from "@koa/router";
import Middleware from "../../middleware/middleware";
import ErrorHandler from "./error-handler";

/**
 *
 * if body in instanceof {@see Error}, set status code to 500, and
 * replace body with {@param body}
 *
 * @param body
 *
 * @param callback
 * to be called on error
 */

export default function Error<
    Error extends globalThis.Error,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext,
    ResponseBody
    >(
    instance : new()=>Error,
    middleware :  ErrorHandler<State, ContextType, ResponseBody>
) : ErrorHandler<State, ContextType, ResponseBody>
export default function Error<
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext,
    ResponseBody
    >(
    middleware :  ErrorHandler<State, ContextType, ResponseBody>
) : ErrorHandler<State, ContextType, ResponseBody>

export default function Error<
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext,
    ResponseBody
    >(
    instance : (new()=>Error) | ErrorHandler<State, ContextType, ResponseBody>,
    middleware ? : ErrorHandler<State, ContextType, ResponseBody>
) : ErrorHandler<State, ContextType, ResponseBody>
{

    if(!middleware) {

        return Error(globalThis.Error, instance as ErrorHandler<State, ContextType, ResponseBody>);
    }

    return async function (error, context) {

        if(error instanceof instance) {

            return middleware(error, context)
        }
    }
}
