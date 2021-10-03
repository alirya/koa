export default function Passthroughs(callback) {
    return function (context, next) {
        callback();
        return next();
    };
}
//# sourceMappingURL=passthroughs.js.map