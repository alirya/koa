import SuccessfulType from '@alirya/http/response/code/class/boolean/successful';
import StatusCode from './status-code';
import Middleware from './middleware';
import ApplicationContext from '../context/context';

export default function StatusSuccessful<
    ContextType extends ApplicationContext,
    ContextTypeN extends ApplicationContext,
>(
    middleware : Middleware<ContextType, ContextTypeN>,

) : Middleware<ContextType, ContextTypeN> {

    return StatusCode(SuccessfulType, middleware);
}
