import Response from "@dikac/t-http/response/response";
import FromResponseParameters from "../../response/from-response-parameters";
import ErrorHandler from "./error-handler";
import * as Koa from "koa";

/**
 * replace response with {@see Response}
 *
 * @param response
 * @constructor
 */
export default function Response<
    Error extends globalThis.Error,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext,
    ResponseBodyT = unknown
>(
    response: Response,
) : ErrorHandler<State, ContextType, ResponseBodyT> {

    return function (error, context)  {

        FromResponseParameters(context, response);

    }
}
