import Log from '@axiona/syslog/syslog.js';
import Handler from './handler.js';
import Koa from "koa";
import {PickParameters} from '@axiona/object/pick.js';

export default function PrintTransaction<ContextType extends Koa.DefaultContext>(
    severity : keyof Log = 'debug',
) : Handler<Log<[string, any, any]>, ContextType> {

    return function (
        syslog ,
        context
    ) {

        syslog[severity](
          `${context.request.method} ${context.request.path} -> ${context.response.status} ${context.response.message}`,
          PickParameters(context.request, 'headers', 'body'),
          PickParameters(context.response, 'headers', 'body'),
        );
    };
}
