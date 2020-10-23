export default function NoResponse(middleware) {
    return function (context, next) {
        if (context.response.status === 404 && context.response.body === undefined) {
            return middleware(context, next);
        }
        else {
            return next();
        }
    };
}
//# sourceMappingURL=no-response.js.map