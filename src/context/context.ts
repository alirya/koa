import {DefaultContext, DefaultState, ParameterizedContext} from 'koa';

/**
 * context of parameter middleware
 */
type Context<
    State extends DefaultState = DefaultState,
    Context extends DefaultContext = DefaultContext,
    Request = unknown,
    Response = unknown,
> = ParameterizedContext<State, Context , unknown> & {
    response : Response,
    request : Request,
};

export default Context;

