import Context from '../../middleware/context/context';
import {Next} from 'koa';
import Log from '@alirya/syslog/syslog';
import * as Koa from 'koa';
import {RouterParamContext} from '@koa/router';
import Middleware from '../../middleware/middleware';

export default function LogParameters<
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
    ResponseBody = unknown,
>(
    log : Log<[string, any, any]>,
    severity : keyof Log = 'debug'
) : Middleware<State, ContextType, ResponseBody/*, State, ContextType, ResponseBody*/> {

    return function (context : Context, next : Next) {

        log[severity](`${context.request.method} ${context.request.path}`, context.request.headers, (<any>context.request).body);

        return next();
    };
}
