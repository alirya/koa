/**
 * if body in instanceof {@see Error}, set status code to 500,
 * body with {@see Error.stack}, and message with {@see Error.message},
 *
 * @WARNING this will leak error message to public, use for
 * development only
 */
export default function ErrorMessage() {
    return function (context, next) {
        if (context.response.body instanceof globalThis.Error) {
            context.response.status = 500;
            context.response.message = context.response.body.message;
            context.response.body = context.response.body.stack;
        }
        else {
            return next();
        }
    };
}
//# sourceMappingURL=error-message.js.map