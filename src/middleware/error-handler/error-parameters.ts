import Koa from "koa";
import ErrorHandlerParameters from "./error-handler";

/**
 * executes {@param handler} if the error is
 * instance of {@param instance}
 *
 * @param instance
 * @param handler
 * @constructor
 */
export default function ErrorParameters<
    Error extends globalThis.Error,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext,
    ResponseBody
>(
    handler :  ErrorHandlerParameters<State, ContextType, ResponseBody>,
    instance : new()=>Error,
) : ErrorHandlerParameters<State, ContextType, ResponseBody>
/**
 * executes {@param handler} for any error inherited
 * from {@see globalThis.Error}
 *
 * @param handler
 */
export default function ErrorParameters<
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext,
    ResponseBody
>(
    handler :  ErrorHandlerParameters<State, ContextType, ResponseBody>,
) : ErrorHandlerParameters<State, ContextType, ResponseBody>

export default function ErrorParameters<
    Error extends globalThis.Error,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext,
    ResponseBody
>(
    handler : ErrorHandlerParameters<State, ContextType, ResponseBody>,
    instance : new()=>(Error|globalThis.Error) = globalThis.Error,
) : ErrorHandlerParameters<State, ContextType, ResponseBody> {

    return function (error, context) {

        if(error instanceof instance) {

            return handler(error, context)
        }
    }
}
