import FromResponse from "../../response/from-response";
import DefaultMessage from "@dikac/t-http/response/default-message";
import ContentTypeJson from "../../object/content-type-json";
export default function BodyValidator(validator, code = 422) {
    return function (context, next) {
        const validatable = validator.validate(context.request.body);
        if (validatable.valid) {
            context.request.body = validatable.value;
            return next();
        }
        else {
            const response = DefaultMessage({
                code,
                body: JSON.stringify(validatable.message),
                headers: ContentTypeJson
            });
            FromResponse(context, response);
        }
    };
    // return PropertyValidator<ValidatorType, RequestType>(validator, 'body', failCode)
}
//# sourceMappingURL=body-validator.js.map