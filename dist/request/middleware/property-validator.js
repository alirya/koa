export default function PropertyValidator(validator, key, failCode = 400) {
    return function (context, next) {
        let validatable = validator.validate(context.request[key]);
        if (validatable.valid) {
            return next();
        }
        else {
            context.response.status = failCode;
            context.response.body = validatable.message;
        }
    };
}
//# sourceMappingURL=property-validator.js.map