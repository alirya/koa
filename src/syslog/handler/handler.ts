import Koa from 'koa';
import Log from '@alirya/syslog/syslog.js';

/**
 * type which compatible with {@see Koa.on('error')}
 */
type Handler<
    Syslog extends Log,
    ContextType extends Koa.DefaultContext,
> = (
    syslog : Syslog,
    context: ContextType
) => any;

export default Handler;
