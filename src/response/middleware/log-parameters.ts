import Context from '../../context/context';
import AppContext from '../../context/context';
import {Next} from 'koa';
import Log from '@alirya/syslog/syslog';
import Middleware from '../../middleware/middleware';
/**
 * @deprecated
 *
 * pipe response data to log
 *
 * @param log
 *
 * @param severity
 * default : 'debug'
 *
 * @param after
 * executes places of middleware chain
 * after : end
 * !after : start
 */
export default function LogParameters<
    ContextType extends AppContext,
    ContextTypeN extends AppContext,
>(
    log : Log<[string, any, any]>,
    severity : keyof Log = 'debug',
    after: boolean = true
) : Middleware<ContextType, ContextTypeN> {

    const call = function (context : Context) {

        log[severity](
            `${context.response.status} ${context.response.message}`,
            context.response.headers,
            context.response.body
        );
    };

    if(after) {

        return function (context : Context, next : Next) {

            return next().then(()=>call(context));
        };

    } else {

        return function (context : Context, next : Next) {

            call(context);
            return next();
        };

    }

}
