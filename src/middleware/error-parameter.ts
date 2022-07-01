import Middleware from './middleware';
import ErrorHandlerParameter from '../throwable/handler/handler';
import ErrorInstanceParameters from './error-parameters';
import Context from "../context/context";
import Callable from "@alirya/function/callable";
import Guard from "@alirya/function/boolean/guard";


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
