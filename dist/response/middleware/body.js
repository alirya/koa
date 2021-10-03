import FromResponse from "../from-response";
import Ok from "@dikac/t-http/response/ok";
/**
 * use resolved {@param subject} value for response body data, upon
 * successful applied {@param response} value
 *
 *
 * @param subject
 * @param response
 * default status 200
 */
export default function Body(subject, response = Ok) {
    return function (context, next) {
        return subject(context).then(function (body) {
            FromResponse(context, response({ body }));
            return next();
        });
    };
}
//# sourceMappingURL=body.js.map