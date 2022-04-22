import Log from "@alirya/syslog/syslog";
import Handler from "./handler";
import Koa from "koa";
import PickParameters from '@alirya/object/pick-parameters';

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
    }
}
