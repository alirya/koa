import Middleware from './middleware';
import ErrorHandlerParameter from '../throwable/handler/handler';
import ErrorParameters from './error-parameters';
import Context from "../context/context";


export type ErrorParameterArgument<
    Error extends globalThis.Error,
    ContextType extends Context,
> = {
    handler :  ErrorHandlerParameter<Error, ContextType>,
    instance ?: new()=>Error,
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
    } : ErrorParameterArgument<Error, ContextType>
) : Middleware<ContextType>
{
    return ErrorParameters(handler, instance, rethrow);
}
