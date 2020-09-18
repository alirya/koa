export default function Log(log, severity = 'debug') {
    return function (context, next) {
        log[severity](`${context.request.method} ${context.request.path}`, context.request.headers, context.request.body);
        return next();
    };
}
//# sourceMappingURL=log.js.map