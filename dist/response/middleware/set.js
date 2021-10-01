import FromResponse from "../from-response";
/**
 * set {@param response} to response data
 *
 * @param response
 */
// export default function Set<
//     Subject extends Response,
//     Arguments extends unknown[]
// >(
//     response : Subject
// ) : Middleware {
//
//     return function (context : Context, next : Next) {
//
//         FromResponse(context, response);
//
//         return next();
//     }
//
// }
export default function Set(response) {
    return function (context, next) {
        FromResponse(context, response);
        return next();
    };
}
//# sourceMappingURL=set.js.map