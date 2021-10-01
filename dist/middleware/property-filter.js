export default function PropertyFilter(type, filter, property) {
    return function (context, next) {
        context[type][property] = filter(context[type][property], context);
        return next();
    };
}
//# sourceMappingURL=property-filter.js.map