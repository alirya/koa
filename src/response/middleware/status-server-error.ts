import ServerErrorType from '@alirya/http/response/code/class/boolean/server-error';
import StatusCode from './status-code';
import Middleware from '../../middleware/middleware';
import Context from '../../context/context';
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
