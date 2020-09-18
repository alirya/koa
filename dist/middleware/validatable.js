import Ok from "@dikac/t-http/response/ok";
import InternalServerError from "@dikac/t-http/response/internal-server-error";
import FromResponse from "../response/from-response";
export default function Validatable(subject, ...argument) {
    return function (context, next) {
        return subject(context, ...argument).then(function (subject) {
            let response;
            if (subject.valid) {
                response = Ok(subject.value);
            }
            else {
                response = InternalServerError(subject.message);
            }
            //console.log(response);
            FromResponse(context, response);
            return next();
        }).catch(function (error) {
            let response = InternalServerError(error);
            //console.log(response);
            FromResponse(context, response);
            return next();
        });
    };
}
//# sourceMappingURL=validatable.js.map