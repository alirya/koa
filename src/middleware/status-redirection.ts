import RedirectionType from '@alirya/http/response/code/class/boolean/redirection.js';
import StatusCode from './status-code.js';
import Middleware from './middleware.js';
import Context from '../context/context.js';
/**
 * use {@param middleware} if response status code is 3xx
 *
 * @param middleware
 */
export default function StatusRedirection<
    ContextType extends Context,
    ContextTypeN extends Context,
    >(
    middleware :  Middleware<ContextType, ContextTypeN>
) :  Middleware<ContextType, ContextTypeN> {

    return StatusCode(RedirectionType, middleware);
}
