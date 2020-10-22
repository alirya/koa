/**
 * use {@param middleware} if response body is valid against {@param validation}
 *
 * @param validation
 * @param middleware
 */
export default function IfBody(validation, middleware) {
    return function (context, next) {
        if (validation(context.response.body)) {
            return middleware(context, next);
        }
        else {
            return next();
        }
    };
}
//# sourceMappingURL=if-body.js.map