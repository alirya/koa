import {DefaultContext, DefaultState} from 'koa';
import {RouterParamContext} from '@koa/router';

/**
 * context of application/routing argument
 */
type Context<
    State extends DefaultState = DefaultState,
    Context extends DefaultContext = DefaultContext
> = Context & RouterParamContext<State, Context>;

export default Context;
