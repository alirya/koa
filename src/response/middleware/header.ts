import Context from "../../middleware/context/context";
import {Next} from "koa";
import String from "@dikac/t-string/boolean/string";
import {Middleware} from "@koa/router";

/**
 * set response header
 */
export default function Header(headers : Record<string, string>) : Middleware {

    return function (context : Context, next : Next) {

        if(String(context.response.body)) {

            context.response.set(headers)
        }

        return next();
    }

}
