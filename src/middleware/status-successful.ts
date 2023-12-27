import SuccessfulType from '@alirya/http/response/code/class/boolean/successful.js';
import StatusCode from './status-code.js';
import Middleware from './middleware.js';
import ApplicationContext from '../context/context.js';

export default function StatusSuccessful<
    ContextType extends ApplicationContext,
    ContextTypeN extends ApplicationContext,
>(
    middleware : Middleware<ContextType, ContextTypeN>,

) : Middleware<ContextType, ContextTypeN> {

    return StatusCode(SuccessfulType, middleware);
}
