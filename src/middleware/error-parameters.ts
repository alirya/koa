import Context from '../context/context';
import {Next} from 'koa';
import Middleware from './middleware';
import ErrorHandlerParameters from '../throwable/handler/handler';

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
    ContextType extends Context,
>(
    handler :  ErrorHandlerParameters<Error, ContextType>,
    instance ?: new()=>Error,
    rethrow ?: boolean
) : Middleware<ContextType>;

export default function ErrorParameters<
    Error extends globalThis.Error,
    ContextType extends Context,
>(
    handler :  ErrorHandlerParameters<Error, ContextType>,
    instance ?: new()=>Error,
) : Middleware<ContextType>;

export default function ErrorParameters<
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
export default function ErrorParameters<
    Error extends globalThis.Error,
    ContextType extends Context,
>(
    handler : ErrorHandlerParameters<Error, ContextType>,
    instance : new()=>(Error|globalThis.Error) = globalThis.Error,
    rethrow : boolean = false
) : Middleware<ContextType>
{
    return async function (context, next : Next) {

        try {

            return await next();

        } catch (error) {

            const isInstance = error instanceof instance;

            if(isInstance) {

                handler(error as Error, context);
            }

            if(!isInstance || rethrow) {

                throw error;
            }
        }
    };
}
