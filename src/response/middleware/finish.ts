import Context from "../../middleware/context/context";
import {Next} from "koa";
import Successful from "@dikac/t-http/response/code/class/boolean/successful";

/**
 * finish middleware if response code is success (2xxx)
 */
export default function Finish(context : Context, next : Next) {

    if(!Successful(context.response.status)) {

        return next();
    }
}
