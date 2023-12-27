import AppContext from '../context/context.js';
import {Next} from 'koa';
import Middleware from './middleware.js';
import Syslog from '@alirya/syslog/syslog.js';
import Handler from '../syslog/handler/handler.js';

/**
 * pipe context data to log
 *
 * @param log
 *
 * @param after {@default true}
 * execute places of middleware chain
 * true : end
 * false : start
 * @param callback
 */
export default function LogParameters<
    ContextType extends AppContext,
    SyslogType extends Syslog
>(
    log : SyslogType,
    after = true,
    callback : Handler<SyslogType, ContextType>
) : Middleware<ContextType> {

    const call = (context : ContextType) => callback(log, context);

    if(after) {

        return function (context : ContextType, next : Next) {

            return next().then(()=>call(context));
        };

    } else {

        return function (context : ContextType, next : Next) {

            call(context);
            return next();
        };

    }

}
