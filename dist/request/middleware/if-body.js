export default function IfBody(validation, middleware) {
    return function (context, next) {
        if (validation(context.request.body)) {
            return middleware(context, next);
        }
        else {
            return next();
        }
    };
}
//# sourceMappingURL=if-body.js.map