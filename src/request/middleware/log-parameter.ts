import Log from '@alirya/syslog/syslog';
import * as Koa from 'koa';
import {RouterParamContext} from '@koa/router';
import Middleware from '../../middleware/middleware';
import LogParameters from './log-parameters';

export default function LogParameter<
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
    ResponseBody = unknown,
>(
    {
        log,
        severity  = 'debug'
    } : {
        log : Log<[string, any, any]>,
        severity ?: keyof Log
    }
) : Middleware<State, ContextType, ResponseBody/*, State, ContextType, ResponseBody*/> {

    return LogParameters(log, severity);
}
