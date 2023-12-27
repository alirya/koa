import Middleware from './middleware.js';
import ErrorHandlerParameter from '../throwable/handler/handler.js';
import ErrorInstanceParameters from './error-parameters.js';
import Context from '../context/context.js';
import Callable from '@axiona/function/callable.js';
import Guard from '@axiona/boolean/function/guard.js';


export type ErrorArgument<
    Error extends globalThis.Error,
    ContextType extends Context,
> = {
    handler :  ErrorHandlerParameter<Error, ContextType>,
    instance ?: Callable<[Error], boolean>|Guard<globalThis.Error, Error>,
    rethrow ?: boolean
};

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
    ContextType extends Context,
>(
    {
        handler,
        instance,
        rethrow,
    } : ErrorArgument<Error, ContextType>
) : Middleware<ContextType>
{
    return ErrorInstanceParameters(handler, instance, rethrow);
}
