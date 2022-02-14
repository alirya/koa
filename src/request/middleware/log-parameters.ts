import Context from '../../context/context';
import {Next} from 'koa';
import Log from '@alirya/syslog/syslog';
import Middleware from '../../middleware/middleware';

export default function LogParameters<
    ContextType extends Context,
>(
    log : Log<[string, any, any]>,
    severity : keyof Log = 'debug'
) : Middleware<ContextType, ContextType> {

    return function (context : Context, next : Next) {

        log[severity](`${context.request.method} ${context.request.path}`, context.request.headers, (<any>context.request).body);

        return next();
    };
}
