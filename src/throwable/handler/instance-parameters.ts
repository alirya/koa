import Koa from 'koa';
import ErrorHandlerParameters from './handler';
import Class from "@alirya/class/class";

/**
 * executes {@param handler} if the error is
 * instance of {@param instance}
 *
 * @param instance
 * @param handler
 * @constructor
 */
export default function InstanceParameters<
    Error extends globalThis.Error,
    ContextType extends Koa.DefaultContext,
>(
    handler :  ErrorHandlerParameters<Error, ContextType>,
    instance : Class<Error>,
) : ErrorHandlerParameters<Error, ContextType>;
/**
 * executes {@param handler} for any error inherited
 * from {@see globalThis.Error}
 *
 * @param handler
 */
export default function InstanceParameters<
    ContextType extends Koa.DefaultContext,
>(
    handler :  ErrorHandlerParameters<globalThis.Error, ContextType>,
) : ErrorHandlerParameters<globalThis.Error, ContextType>;

export default function InstanceParameters<
    Error extends globalThis.Error,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext,
    ResponseBody
>(
    handler : ErrorHandlerParameters<globalThis.Error, ContextType>,
    instance : Class<Error|globalThis.Error> = globalThis.Error,
) : ErrorHandlerParameters<globalThis.Error, ContextType> {

    return function (error, context) {

        if(error instanceof instance) {

            return handler(error, context);
        }
    };
}
