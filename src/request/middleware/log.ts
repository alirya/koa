import Context from "../../middleware/context/context";
import {Next} from "koa";
import Log from "@dikac/t-syslog/syslog";
import {Middleware} from "koa";

export default function Log(
    log : Log<[string, any, any]>,
    severity : keyof Log = 'debug'
) : Middleware {

    return function (context : Context, next : Next) {

        log[severity](`${context.request.method} ${context.request.path}`, context.request.headers, (<any>context.request).body);


        return next();
    }
}
