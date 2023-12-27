import Koa from "koa";

/**
 * type which compatible with {@see Koa.on('error')}
 */
type Handler<
    Error extends globalThis.Error,
    ContextType extends Koa.DefaultContext,
> = (
    error : Error,
    context: ContextType
) => any;

export default Handler;
