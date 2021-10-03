import Successful from "@dikac/t-http/response/code/class/boolean/successful";
/**
 * finish middleware if response code is valid
 * according to @param statusCheck
 *
 *
 * @param context
 * @param next
 *
 * @param statusCheck
 * default is 2xx status code
 *
 * @constructor
 */
export default function FinishStatus(context, next, statusCheck = Successful) {
    if (!statusCheck(context.response.status)) {
        return next();
    }
}
//# sourceMappingURL=finish-status.js.map