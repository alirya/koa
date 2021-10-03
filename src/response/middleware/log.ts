import Context from "../../middleware/context/context";
import {Next} from "koa";
import Log from "@dikac/t-syslog/syslog";
import * as Koa from "koa";
import {RouterParamContext} from "@koa/router";
import Middleware from "../../middleware/middleware";

/**
 * call log
 *
 * @param log
 *
 * @param severity
 * default : 'debug'
 *
 * @param after
 */
export default function Log<
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
    ResponseBody = unknown,
>(
    log : Log<[string, any, any]>,
    severity : keyof Log = 'debug',
    after: boolean = true
) : Middleware<State, ContextType, ResponseBody, State, ContextType, ResponseBody> {

    const call = function (context : Context) {

        log[severity](
            `${context.response.status} ${context.response.message}`,
            context.response.headers,
            context.response.body
        );
    }

    if(!after) {

        return function (context : Context, next : Next) {

            call(context);
            return next();
        }

    } else {

        return function (context : Context, next : Next) {

            return next().then(()=>call(context));
        }
    }


}
