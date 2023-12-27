import Log from '@alirya/syslog/syslog.js';
import Handler from './handler.js';
import Koa from 'koa';

export default function PrintRequest<ContextType extends Koa.DefaultContext>(
    severity : keyof Log = 'debug',
) : Handler<Log<[string, any, any]>, ContextType> {

    return function (
        syslog ,
        context
    ) {

        syslog[severity](
            `${context.request.method} ${context.request.path}`,
            context.request.headers,
            (<any>context.request).body
        );
    };
}
