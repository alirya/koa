import Context from '../context/context';
import {Next} from 'koa';
import Middleware from './middleware';
import ErrorHandlerParameters from '../throwable/handler/handler';
import Callable from "@alirya/function/callable";
import Guard from "@alirya/function/boolean/guard";

/**
 * catch error, if error is instanceof {@param validation} then execute {@param handler} else rethrow {@param validation}
 * regardless of {@param rethrow} value
 *
 * @param validation
 * @default {@see globalThis.Error}
 * class to match
 *
 * @param handler
 *
 * @param rethrow
 * @default {@see false}
 * force rethrow exception or not, regardless of {@param validation} match
 */

export default function ErrorParameters<
    Error extends globalThis.Error,
    ContextType extends Context
>(
    handler: ErrorHandlerParameters<Error, ContextType>,
    validation?: Guard<globalThis.Error, Error>,
    rethrow?: boolean
): Middleware<ContextType>;

export default function ErrorParameters<
    Error extends globalThis.Error,
    ContextType extends Context
>(
    handler: ErrorHandlerParameters<Error, ContextType>,
    validation?: Guard<globalThis.Error, Error>
): Middleware<ContextType>;

export default function ErrorParameters<
    Error extends globalThis.Error,
    ContextType extends Context,
>(
    handler :  ErrorHandlerParameters<Error, ContextType>,
    validation ?: Callable<[globalThis.Error], boolean>,
    rethrow ?: boolean
) : Middleware<ContextType>;

export default function ErrorParameters<
    Error extends globalThis.Error,
    ContextType extends Context,
>(
    handler :  ErrorHandlerParameters<Error, ContextType>,
    validation ?: Callable<[globalThis.Error], boolean>,
) : Middleware<ContextType>;

export default function ErrorParameters<
    ContextType extends Context,
>(
    handler :  ErrorHandlerParameters<globalThis.Error, ContextType>,
) : Middleware<ContextType>;

/**
 * @param validation
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
    ContextType extends Context,
>(
    handler : ErrorHandlerParameters<globalThis.Error, ContextType>,
    validation ?: Callable<[globalThis.Error], boolean>,
    rethrow : boolean = false
) : Middleware<ContextType>
{
    return async function (context, next : Next) {

        try {

            return await next();

        } catch (error) {

            const valid = validation ? validation(error) : true;

            if(valid) {

                handler(error as Error, context);
            }

            if(!valid || rethrow) {

                throw error;
            }
        }
    };
}
