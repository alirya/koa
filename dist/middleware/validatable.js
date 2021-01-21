import Ok from "@dikac/t-http/response/ok";
import InternalServerError from "@dikac/t-http/response/internal-server-error";
import FromResponse from "../response/from-response";
export default function Validatable(subject, ...argument) {
    return function (context, next) {
        return subject(context, ...argument).then(function (subject) {
            let response;
            if (subject.valid) {
                response = Ok({
                    body: subject.value
                });
            }
            else {
                response = InternalServerError({
                    body: subject.message
                });
            }
            FromResponse(context, response);
            return next();
        }).catch(function (error) {
            let response = InternalServerError({ body: error });
            FromResponse(context, response);
            return next();
        });
    };
}
//# sourceMappingURL=validatable.js.map