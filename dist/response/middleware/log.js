/**
 * call log
 *
 * @param log
 *
 * @param severity
 * default : 'debug'
 *
 * @param after
 */
export default function Log(log, severity = 'debug', after = true) {
    const call = function (context) {
        log[severity](`${context.response.status} ${context.response.message}`, context.response.headers, context.response.body);
    };
    if (!after) {
        return function (context, next) {
            call(context);
            return next();
        };
    }
    else {
        return function (context, next) {
            return next().then(() => call(context));
        };
    }
}
//# sourceMappingURL=log.js.map