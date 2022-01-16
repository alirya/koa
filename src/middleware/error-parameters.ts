import Context from "./context/context";
import {Next} from "koa";
import * as Koa from "koa";
import {RouterParamContext} from "@koa/router";
import Middleware from "./middleware";
import ErrorHandlerParameters from "./error-handler/error-handler";

/**
 * catch error, if error is instanceof {@param instance} then execute {@param handler} else rethrow {@param instance}
 * regardless of {@param rethrow} value
 *
 * @param instance
 * @default {@see globalThis.Error}
 * class to match
 *
 * @param handler
 *
 * @param rethrow
 * @default {@see false}
 * force rethrow exception or not, regardless of {@param instance} match
 */
export default function ErrorParameters<
    Error extends globalThis.Error,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
    ResponseBody
>(
    handler :  ErrorHandlerParameters<globalThis.Error, State, ContextType, ResponseBody>,
    instance ?: new()=>Error,
    rethrow ?: boolean
) : Middleware<State, ContextType, ResponseBody/*, State, ContextType, ResponseBody*/>

export default function ErrorParameters<
    Error extends globalThis.Error,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
    ResponseBody
>(
    handler :  ErrorHandlerParameters<Error, State, ContextType, ResponseBody>,
    instance ?: new()=>Error,
) : Middleware<State, ContextType, ResponseBody/*, State, ContextType, ResponseBody*/>

export default function ErrorParameters<
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
    ResponseBody
>(
    handler :  ErrorHandlerParameters<globalThis.Error, State, ContextType, ResponseBody>,
) : Middleware<State, ContextType, ResponseBody/*, State, ContextType, ResponseBody*/>

/**
 * @param instance
 * @default {@see globalThis.Error}
 * instance of error
 *
 * @param handler
 * executed {@param handler} if error thrown
 *
 * @param rethrow
 * @default false
 * rethrow exception or not
 */
export default function ErrorParameters<
    Error extends globalThis.Error,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
    ResponseBody
>(
    handler : ErrorHandlerParameters<Error, State, ContextType, ResponseBody>,
    instance : new()=>(Error|globalThis.Error) = globalThis.Error,
    rethrow : boolean = false
) : Middleware<State, ContextType, ResponseBody/*, State, ContextType, ResponseBody*/>
{
    return async function (context, next : Next) {

        try {

            return await next();

        } catch (error) {

            const isInstance = error instanceof instance;

            if(isInstance) {

                handler(error as Error, context as Context<State, ContextType, ResponseBody>)
            }

            if(!isInstance || rethrow) {

                throw error;
            }
        }
    }
}
