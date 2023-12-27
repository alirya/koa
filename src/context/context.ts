import {DefaultContext, DefaultState, ParameterizedContext} from "koa";

/**
 * context of parameter middleware
 */
type Context<
    Request = unknown,
    Response = unknown,
    State extends DefaultState = DefaultState,
    Context extends DefaultContext = DefaultContext,
> = ParameterizedContext<State, Context , unknown> & {
    response : Response,
    request : Request,
};

export default Context;

