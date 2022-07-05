import RedirectionType from '@alirya/http/response/code/class/boolean/redirection';
import StatusCode from './status-code';
import Middleware from './middleware';
import Context from '../context/context';
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
