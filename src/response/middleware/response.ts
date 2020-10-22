import Response from "@dikac/t-http/response/response";
import InternalServerError from "@dikac/t-http/response/internal-server-error";
import Context from "../../middleware/context/context";
import {Next} from "koa";
import {Middleware} from "koa";
import FromResponse from "../from-response";

/**
 * use resolved {@param response} value for response data
 *
 * on error set status code to 500, and set value from {@see Promise.catch} to response body, and should be
 * handled by next middleware
 *
 * @param response
 */
export default function Response<
    Subject extends Response,
    Arguments extends unknown[]
>(
    response : (context : Context) => Promise<Subject>
) : Middleware {

    return function (context : Context, next : Next) {

        return response(context).then(function (subject) {

            FromResponse(context, subject);

            return next();

        }).catch(function (error) {

            let response = InternalServerError(error);

            FromResponse(context, response);

            return next();
        })
     }


}
