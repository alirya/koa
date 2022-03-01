import AppContext from '../../context/context';
import Log from '@alirya/syslog/syslog';
import Middleware from '../../middleware/middleware';
import LogParameters from './log-parameters';

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
export default function LogParameter<
    ContextType extends AppContext,
    ContextTypeN extends AppContext,
>(
    {
        log,
        severity,
        after,
    } : {
        log : Log<[string, any, any]>,
        severity ?: keyof Log,
        after ?: boolean,
    }
) : Middleware<ContextType, ContextTypeN> {

    return LogParameters(log, severity, after);
}
