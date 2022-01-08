import Context from "./context/context";
import {Next} from "koa";
import * as Koa from "koa";
import {RouterParamContext} from "@koa/router";
import Middleware from "./middleware";
import ErrorHandlerParameters from "./error-handler/error-handler";


/**
 * catch error then execute {@param handler} if
 * error is instanceof {@see globalThis.Error}
 *
 * @param handler
 */
export default function ErrorParameters<
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
    ResponseBody
>(
    handler :  ErrorHandlerParameters<globalThis.Error, State, ContextType, ResponseBody>,
) : Middleware<State, ContextType, ResponseBody, State, ContextType, ResponseBody>


/**
 * catch error then execute {@param handler} if
 * error is instanceof {@param instance}
 *
 * @param instance
 * class to match
 *
 * @param handler
 */
export default function ErrorParameters<
    Error extends globalThis.Error,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
    ResponseBody
>(
    handler :  ErrorHandlerParameters<Error, State, ContextType, ResponseBody>,
    instance ?: new()=>Error,
) : Middleware<State, ContextType, ResponseBody, State, ContextType, ResponseBody>



/**
 * catch error then execute {@param handler} if
 * error is instanceof {@param instance}
 *
 * @param instance
 * class to match
 *
 * @param handler
 *
 * @param rethrow
 * if instance match
 * rethrow exception or not
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
) : Middleware<State, ContextType, ResponseBody, State, ContextType, ResponseBody>

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
) : Middleware<State, ContextType, ResponseBody, State, ContextType, ResponseBody>
{

    return async function (context, next : Next) {

        try {

            return await next();

        } catch (error) {

            if(error instanceof instance) {

                handler(error as Error, context as Context<State, ContextType, ResponseBody>)
            }

            if(rethrow) {

                throw error;
            }
        }
    }
}
