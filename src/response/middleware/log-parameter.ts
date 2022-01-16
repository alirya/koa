import Context from "../../middleware/context/context";
import AppContext from "../../context/context";
import {Next} from "koa";
import Log from "@alirya/syslog/syslog";
import {DefaultState} from "koa";
import Middleware from "../../middleware/middleware";
import LogParameters from "./log-parameters";

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
export default function LogParameter<
    State extends DefaultState,
    ContextType extends AppContext<State>,
    ResponseBody = unknown,
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
) : Middleware<State, ContextType, ResponseBody/*, State, ContextType, ResponseBody*/> {

    return LogParameters(log, severity, after);
}
