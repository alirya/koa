export default function Passthrough(callback) {
    return function (context, next) {
        callback();
        return next();
    };
}
//# sourceMappingURL=passthrough.js.map