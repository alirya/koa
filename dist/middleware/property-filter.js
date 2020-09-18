import InternalServerError from "@dikac/t-http/response/internal-server-error";
import FromResponse from "../response/from-response";
export default function PropertyFilter(type, filter, property) {
    return function (context, next) {
        try {
            context[type][property] = filter(context[type][property]);
        }
        catch (e) {
            FromResponse(context, InternalServerError(e));
        }
        return next();
    };
}
//# sourceMappingURL=property-filter.js.map