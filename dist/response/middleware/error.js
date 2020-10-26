/**
 * if body in instanceof {@see Error}, set status code to 500, and
 * replace body with {@param body}
 *
 * @param body
 *
 * @param callback
 * to be called on error
 */
export default function Error(body, callback) {
    return function (context, next) {
        const current = context.response.body;
        if (current instanceof globalThis.Error) {
            context.response.status = 500;
            context.response.body = body;
            if (callback) {
                callback(current, context);
            }
        }
        else {
            return next();
        }
    };
}
//# sourceMappingURL=error.js.map