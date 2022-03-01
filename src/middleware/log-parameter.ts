import AppContext from '../context/context';
import Log from '@alirya/syslog/syslog';
import Middleware from '../middleware/middleware';
import LogParameters from './log-parameters';
import Syslog from "@alirya/syslog/syslog";
import Callable from '@alirya/function/callable';


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
        callback : Callable<[ContextType, SyslogType]>,
        after ?: boolean,
    }
) : Middleware<ContextType> {

    return LogParameters(log, after, callback);
}
