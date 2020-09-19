import Context from "../../middleware/context/context";
import {Next} from "koa";
import String from "@dikac/t-string/boolean/string";

/**
 * set appropriate header for JSON if body is already JSON string
 */
export default function Json(context : Context, next : Next) {

    if(String(context.response.body)) {

        context.response.set({'Content-Type' : 'application/json'})
    }

    return next();
}
