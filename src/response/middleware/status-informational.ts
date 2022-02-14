import InformationalType from '@alirya/http/response/code/class/boolean/informational';
import StatusCode from './status-code';
import Middleware from '../../middleware/middleware';
import Context from "../../context/context";

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
