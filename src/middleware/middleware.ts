import * as Koa from 'koa';
import {DefaultState} from 'koa';
import ApplicationContext from '../context/context';

/**
 * alternative to koa router {@see Middleware} with
 * added Response body template
 */
type Middleware<
    StateT extends DefaultState = DefaultState,
    ContextT extends ApplicationContext<StateT> = ApplicationContext<StateT>,
    ResponseBodyT = unknown,
    // StateTNext extends DefaultState = StateT,
    // ContextTNext extends ApplicationContext<StateTNext> = ApplicationContext<StateTNext>,
    // ResponseBodyTNext = ResponseBodyT,
> =
Koa.Middleware<
    StateT,
    ContextT,
    ResponseBodyT
>;

export default Middleware;

