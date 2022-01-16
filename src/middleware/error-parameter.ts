import Context from "./context/context";
import {Next} from "koa";
import * as Koa from "koa";
import {RouterParamContext} from "@koa/router";
import Middleware from "./middleware";
import ErrorHandlerParameter from "./error-handler/error-handler";
import ErrorParameters from "./error-parameters";


export type ErrorParameterArgument<
    Error extends globalThis.Error,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
    ResponseBody
> = {

    handler :  ErrorHandlerParameter<Error, State, ContextType, ResponseBody>,
    instance ?: new()=>Error,
    rethrow ?: boolean
}

/**
 * @param instance
 * @default {@see globalThis.Error}
 * instance of error
 *
 * @param middleware
 * executed {@param middleware} if error thrown
 *
 * @param rethrow
 * @default false
 * rethrow exception or not
 */
export default function ErrorParameter<
    Error extends globalThis.Error,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
    ResponseBody
>(
    {
        handler,
        instance,
        rethrow,
    } : ErrorParameterArgument<Error, State, ContextType, ResponseBody>
) : Middleware<State, ContextType, ResponseBody/*, State, ContextType, ResponseBody*/>
{
    return ErrorParameters(handler, instance, rethrow);
}
