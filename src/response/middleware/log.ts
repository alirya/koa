import Context from "../../middleware/context/context";
import {Next} from "koa";
import Log from "@dikac/t-syslog/syslog";
import {Middleware} from "@koa/router";

/**
 * call log
 *
 * @param log
 *
 * @param severity
 * default : 'debug'
 */
export default function Log(
    log : Log<[string, any, any]>,
    severity : keyof Log = 'debug'
) : Middleware {

    return function (context : Context, next : Next) {

        return next().then(function () {

            log[severity](`${context.response.status} ${context.response.message}`, context.response.headers, context.response.body);

        });
    }
}
