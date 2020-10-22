import FromResponse from "../from-response";
import NotFound from "@dikac/t-http/response/not-found";
/**
 * change response code to 404 if response body is undefined
 * @param context
 * @param next
 */
export default function NotFoundUndefined(context, next) {
    if (context.response.body === undefined) {
        FromResponse(context, NotFound());
    }
    return next();
}
//# sourceMappingURL=not-found-undefined.js.map