import AppContext from '../context/context';
import Log from '@alirya/syslog/syslog';
import Middleware from '../middleware/middleware';
import LogParameters from './log-parameters';
import Syslog from "@alirya/syslog/syslog";
import Callable from '@alirya/function/callable';
import Handler from "../syslog/handler/handler";


export default function LogParameter<
    ContextType extends AppContext,
    SyslogType extends Syslog
>(
    {
        log,
        callback,
        after,
    } : {
        log : Log<[string, any, any]>,
        callback : Handler<SyslogType, ContextType>
        after ?: boolean,
    }
) : Middleware<ContextType> {

    return LogParameters(log, after, callback);
}
