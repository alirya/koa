import InternalServerError from "@dikac/t-http/response/internal-server-error";
import FromResponse from "../response/from-response";
export default function Filter(filter, ...argument) {
    return function (context, next) {
        try {
            filter(context, ...argument);
        }
        catch (e) {
            FromResponse(context, InternalServerError(e));
        }
        return next();
    };
}
//# sourceMappingURL=filter.js.map