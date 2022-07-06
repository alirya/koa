import AppContext from '../context/context.js';
import Log from '@alirya/syslog/syslog.js';
import Middleware from '../middleware/middleware.js';
import LogParameters from './log-parameters.js';
import Syslog from '@alirya/syslog/syslog.js';
import Handler from '../syslog/handler/handler.js';


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
