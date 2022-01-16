import {RouterParamContext} from '@koa/router';
import {DefaultContext, DefaultState, ParameterizedContext} from 'koa';


/**
 * context of parameter middleware
 */
type Context<
    State extends DefaultState = DefaultState,
    Custom extends DefaultContext = DefaultContext,
    ResponseBody = unknown
> = ParameterizedContext<State, Custom, ResponseBody> & RouterParamContext<State, Custom>;
export default Context;

