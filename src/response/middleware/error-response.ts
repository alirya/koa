import Context from "../../middleware/context/context";
import {Next} from "koa";
import IsCode from "@dikac/t-code/boolean/code";
import Number from "@dikac/t-number/boolean/number";
import IsValue from "@dikac/t-value/boolean/value";
import {Middleware} from "koa";
import Body from "@dikac/t-http/body/body";
import Response from "@dikac/t-http/response/response";
import ErrorCallback from "./error-callback";
import FromResponse from "../from-response";

/**
 * if body in instanceof {@see Error} set response message from {@see Error.message}
 *
 * and also according to following
 * - if also instanceof {@see Code<number>} use code value for status code
 * - if also instanceof {@see Value}, value will be used as response body
 * - if also instanceof {@see Body}, body will be used as response body, {@see Value}, takes priority
 */
export default function ErrorResponse<Error extends globalThis.Error>(
    error : new()=>Error,
    response: Response,
    callNext : boolean = false
) : Middleware {

    return ErrorCallback(error, (error, context) =>  {

        FromResponse(context, response);

    }, callNext)
}
