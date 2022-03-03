import ClientErrorType from '@alirya/http/response/code/class/boolean/client-error';
import StatusCode from './status-code';
import Middleware from './middleware';
import Context from "../context/context";
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
