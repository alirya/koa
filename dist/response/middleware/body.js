import InternalServerError from "@dikac/t-http/response/internal-server-error";
import FromResponse from "../from-response";
import Ok from "@dikac/t-http/response/ok";
/**
 * use resolved {@param subject} value for response body data,
 *
 * on success set status code to 200
 *
 * on error set status code to 500, and set value from {@see Promise.catch} to response body, and should be
 * handled by next middleware
 *
 * @param subject
 */
export default function Body(subject) {
    return function (context, next) {
        return subject(context).then(function (subject) {
            FromResponse(context, Ok(subject));
            return next();
        }).catch(function (error) {
            let response = InternalServerError(error);
            FromResponse(context, response);
            return next();
        });
    };
}
//# sourceMappingURL=body.js.map