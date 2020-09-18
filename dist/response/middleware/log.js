/**
 * call log
 *
 * @param log
 *
 * @param severity
 * default : 'debug'
 */
export default function Log(log, severity = 'debug') {
    return function (context, next) {
        return next().then(function () {
            log[severity](`${context.response.status} ${context.response.message}`, context.response.headers, context.response.body);
        });
    };
}
//# sourceMappingURL=log.js.map