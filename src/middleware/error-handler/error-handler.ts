import Koa from "koa";
import Context from "../context/context";

/**
 * type which compatible with {@see Koa.on('error')}
 */
type ErrorHandler<
    Error extends globalThis.Error,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext,
    ResponseBodyT = unknown
> = (
    error : Error,
    context: Context<State, ContextType, ResponseBodyT>
) => any

export default ErrorHandler;
