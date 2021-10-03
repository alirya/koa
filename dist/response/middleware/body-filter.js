/**
 * filter response body data
 *
 * @param filter
 */
export default function BodyFilter(filter) {
    return function (context, next) {
        // @ts-ignore
        context.response.body = filter(context.response.body, context);
        return next();
    };
}
//# sourceMappingURL=body-filter.js.map