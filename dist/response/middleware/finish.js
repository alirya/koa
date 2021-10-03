import Successful from "@dikac/t-http/response/code/class/boolean/successful";
/**
 * finish middleware if response code is success (2xx)
 */
export default function Finish(context, next) {
    if (!Successful(context.response.status)) {
        return next();
    }
}
//# sourceMappingURL=finish.js.map