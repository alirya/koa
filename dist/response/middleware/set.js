import FromResponse from "../from-response";
/**
 * set {@param response} to response data
 *
 * @param response
 */
export default function Set(response) {
    return function (context, next) {
        FromResponse(context, response);
        return next();
    };
}
//# sourceMappingURL=set.js.map