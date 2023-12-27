import ClientErrorType from '@axiona/http/response/code/class/boolean/client-error.js';
import StatusCode from './status-code.js';
import Middleware from './middleware.js';
import Context from '../context/context.js';
/**
 * use {@param middleware} if response status code is 4xx
 *
 * @param middleware
 */
export default function StatusClientError<
    ContextType extends Context,
    ContextTypeN extends Context,
>(
    middleware :  Middleware<ContextType, ContextTypeN>
) :  Middleware<ContextType, ContextTypeN> {

    return StatusCode(ClientErrorType, middleware);
}
