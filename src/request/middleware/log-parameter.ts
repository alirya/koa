import Log from '@alirya/syslog/syslog';
import Middleware from '../../middleware/middleware';
import LogParameters from './log-parameters';
import Context from "../../context/context";

export default function LogParameter<
    ContextType extends Context,
>(
    {
        log,
        severity  = 'debug'
    } : {
        log : Log<[string, any, any]>,
        severity ?: keyof Log
    }
) : Middleware<ContextType> {

    return LogParameters(log, severity);
}
