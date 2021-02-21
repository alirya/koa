import InternalServerError from "@dikac/t-http/response/internal-server-error";
import FromResponse from "../../response/from-response";
export default function PropertyValidator(validator, key, failCode = 400) {
    return function (context, next) {
        try {
            const validatable = validator.validate(context.request[key]);
            if (validatable.valid) {
                return next();
            }
            else {
                context.response.status = failCode;
                context.response.body = validatable.message;
            }
        }
        catch (error) {
            FromResponse(context, InternalServerError({ body: error }));
        }
    };
}
//# sourceMappingURL=property-validator.js.map