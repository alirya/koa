import Context from "../../middleware/context/context";
import {Next} from "koa";
import FromResponse from "../from-response";
import InternalServerError from "@dikac/t-http/response/internal-server-error";
import Name from "@dikac/t-object/string/name";
import ErrorCallback from "./error-callback";
import * as Koa from "koa";
import {RouterParamContext} from "@koa/router";
import Middleware from "../../middleware/middleware";
import ContentTypeTextUtf8 from "../../object/content-type-text-utf8";

/**
 * if body in instanceof {@see Error}, set status code to 500, and
 * replace body with Error name, message, and stack
 *
 *
 * @param callback
 * to be called on error
 *
 * @param callNext
 */
export default function ErrorDebug<
    ResponseBody,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
>(
    callback ?: (error : globalThis.Error, context : Context)=>void,
    callNext : boolean = false
) : Middleware<State, ContextType, ResponseBody, State, ContextType, string> {

    return ErrorCallback(globalThis.Error, (error : globalThis.Error, context) => {

        FromResponse(context, InternalServerError({
            headers : ContentTypeTextUtf8,
            body : [Name(error), error.message, '', error.stack].join('\n')
        }))

        if(callback) {

            callback(error, context);
        }

    }, callNext);
}
