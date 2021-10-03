import ErrorMidlleware from "./error";
/**
 * if body in instanceof {@see Error}, set status code to 500, and
 * replace body with {@param error}
 *
 * @param error
 *
 * @param callback
 * to be called on error
 *
 * @param callNext
 */
export default function ErrorCallback(error, callback, callNext = false) {
    return ErrorMidlleware(error, function (context, next) {
        callback(context.error, context);
        if (callNext) {
            return next();
        }
    });
}
//# sourceMappingURL=error-callback.js.map