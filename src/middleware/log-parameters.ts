import Context from '../context/context';
import AppContext from '../context/context';
import {Next} from 'koa';
import Log from '@alirya/syslog/syslog';
import Callable from '@alirya/function/callable';
import Middleware from './middleware';
import Syslog from "@alirya/syslog/syslog";

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
    after: boolean = true,
    callback : Callable<[ContextType, SyslogType]>
) : Middleware<ContextType> {

    const call = (context : ContextType) => callback(context, log);

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
