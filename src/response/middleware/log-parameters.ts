import Context from '../../middleware/context/context';
import AppContext from '../../context/context';
import {Next} from 'koa';
import Log from '@alirya/syslog/syslog';
import {DefaultState} from 'koa';
import Middleware from '../../middleware/middleware';

/**
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
    State extends DefaultState,
    ContextType extends AppContext<State>,
    ResponseBody = unknown,
>(
    log : Log<[string, any, any]>,
    severity : keyof Log = 'debug',
    after: boolean = true
) : Middleware<State, ContextType, ResponseBody/*, State, ContextType, ResponseBody*/> {

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
