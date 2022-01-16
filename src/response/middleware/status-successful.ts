import Context from '../../middleware/context/context';
import {DefaultContext, DefaultState, Next} from 'koa';
import SuccessfulType from '@alirya/http/response/code/class/boolean/successful';
import {Middleware} from 'koa';
import StatusCode from './status-code';

export default function StatusSuccessful<
    State extends DefaultState,
    ContextType extends DefaultContext,
    ResponseBody = any
>(
    middleware : (context:Context<State, ContextType, ResponseBody>, next:Next)=>void,

) : Middleware<State, ContextType, ResponseBody> {

    return StatusCode(SuccessfulType, middleware);
}
