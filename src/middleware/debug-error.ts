import Context from "../context/context";
import {Middleware} from "koa";
import InternalServerError from "@alirya/http/response/internal-server-error-parameter";
import Name from "@alirya/object/string/name";
import ErrorCallback from "./error-parameters";
import FromResponseParameters from "../response/from-response-parameters";
import Debug from "../throwable/handler/debug";

/**
 * @deprecated
 *
 * @warning
 * use this for development only, since will leak error message
 *
 * if error occur set status code to 500, and
 * replace body with error info
 *
 * @param callback
 * to be called on error
 */
export default function DebugError(
    callback ?: (error : globalThis.Error, context : Context)=>void
) : Middleware {

    return ErrorCallback((error : globalThis.Error, context) => {

        Debug(error, context);

        if(callback) {

            callback(error, context);
        }

    }, globalThis.Error);
}
