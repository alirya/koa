import InformationalType from '@alirya/http/response/code/class/boolean/informational';
import StatusCode from './status-code';
import Middleware from '../../middleware/middleware';
import * as Koa from 'koa';
import {RouterParamContext} from '@koa/router';

/**
 * use {@param middleware} if response status code is 1xx
 *
 * @param middleware
 */
export default function StatusInformational<
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
    ResponseBody,
    // StateNext extends Koa.DefaultState,
    // ContextTypeNext extends Koa.DefaultContext & RouterParamContext<StateNext>,
    // ResponseBodyNext
    >(
    middleware :  Middleware<State, ContextType, ResponseBody>
) :  Middleware<State/*|StateNext*/, ContextType/*|ContextTypeNext*/, ResponseBody/*|ResponseBodyNext*/> {

    return StatusCode(InformationalType, middleware);
}
