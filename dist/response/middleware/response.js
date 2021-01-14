import InternalServerError from "@dikac/t-http/response/internal-server-error";
import FromResponse from "../from-response";
/**
 * use resolved {@param response} value for response data
 *
 * on error set status code to 500, and set value from {@see Promise.catch} to response body, and should be
 * handled by next middleware
 *
 * @param response
 */
export default function Response(response) {
    return function (context, next) {
        return response(context).then(function (subject) {
            FromResponse(context, subject);
            return next();
        }).catch(function (error) {
            let response = InternalServerError({ body: error });
            FromResponse(context, response);
            return next();
        });
    };
}
//# sourceMappingURL=response.js.map