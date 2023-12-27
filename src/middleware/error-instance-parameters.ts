import Context from '../context/context.js';
import Middleware from './middleware.js';
import ErrorHandlerParameters from '../throwable/handler/handler.js';
import ErrorParameters from './error-parameters.js';
import Class from '@alirya/class/class.js';

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
export default function ErrorInstanceParameters<
    Error extends globalThis.Error,
    ContextType extends Context,
>(
    handler :  ErrorHandlerParameters<Error, ContextType>,
    instance ?: Class<Error>,
    rethrow ?: boolean
) : Middleware<ContextType>;

export default function ErrorInstanceParameters<
    Error extends globalThis.Error,
    ContextType extends Context,
>(
    handler :  ErrorHandlerParameters<Error, ContextType>,
    instance ?: Class<Error>,
) : Middleware<ContextType>;

export default function ErrorInstanceParameters<
    ContextType extends Context,
>(
    handler :  ErrorHandlerParameters<globalThis.Error, ContextType>,
) : Middleware<ContextType>;

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
export default function ErrorInstanceParameters<
    Error extends globalThis.Error,
    ContextType extends Context,
>(
    handler : ErrorHandlerParameters<Error, ContextType>,
    instance : Class<Error|globalThis.Error> = globalThis.Error,
    rethrow  = false
) : Middleware<ContextType> {

    return ErrorParameters(handler, (error)=>error instanceof instance, rethrow);
}
