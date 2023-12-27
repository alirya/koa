import ServerErrorType from '@alirya/http/response/code/class/boolean/server-error.js';
import StatusCode from './status-code.js';
import Middleware from './middleware.js';
import Context from '../context/context.js';
/**
 * use {@param middleware} if response status code is 5xx
 *
 * @param middleware
 */
export default function StatusServerError<
    ContextType extends Context,
    ContextTypeN extends Context,
>(
    middleware :  Middleware<ContextType, ContextTypeN>
) :  Middleware<ContextType, ContextTypeN> {

    return StatusCode(ServerErrorType, middleware);
}
