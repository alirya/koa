export default function BodyFilter(filter) {
    return function (context, next) {
        // @ts-ignore
        context.request.body = filter(context.request.body, context);
        return next();
    };
    //  return PropertyFilter<RequestType, BodyType>(filter, 'body');
}
//# sourceMappingURL=body-filter.js.map