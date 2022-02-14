import {DefaultContext, DefaultState, ParameterizedContext} from 'koa';

/**
 * context of parameter middleware
 */
type Context<
    State extends DefaultState = DefaultState,
    Context extends DefaultContext = DefaultContext,
    RequestBody = unknown,
    ResponseBody = unknown,
    > = ParameterizedContext<State, Context , ResponseBody> & {request:{body:RequestBody}};
export default Context;

