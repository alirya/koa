export default function BodyIf(validation, middleware) {
    return function (context, next) {
        if (validation(context.response.body)) {
            return middleware(context, next);
        }
        else {
            return next();
        }
    };
}
//# sourceMappingURL=body-If.js.map