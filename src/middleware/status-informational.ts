import InformationalType from '@alirya/http/response/code/class/boolean/informational.js';
import StatusCode from './status-code.js';
import Middleware from './middleware.js';
import Context from '../context/context.js';

/**
 * use {@param middleware} if response status code is 1xx
 *
 * @param middleware
 */
export default function StatusInformational<
    ContextType extends Context,
    ContextTypeN extends Context,
>(
    middleware :  Middleware< ContextType, ContextTypeN>
) :  Middleware<ContextType, ContextTypeN> {

    return StatusCode(InformationalType, middleware);
}
