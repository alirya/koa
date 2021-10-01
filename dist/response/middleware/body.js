import FromResponse from "../from-response";
import Ok from "@dikac/t-http/response/ok";
/**
 * use resolved {@param subject} value for response body data,
 *
 * on success set status code to 200
 *
 * @param subject
 */
export default function Body(subject) {
    return function (context, next) {
        return subject(context).then(function (subject) {
            FromResponse(context, Ok({ body: subject }));
            return next();
        });
    };
}
//# sourceMappingURL=body.js.map