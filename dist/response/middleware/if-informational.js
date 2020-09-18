import InformationalType from "@dikac/t-http/response/code/class/boolean/informational";
import IfStatusCode from "./if-status-code";
/**
 * use {@param middleware} if response status code is 1xx
 *
 * @param middleware
 */
export default function IfInformational(middleware) {
    return IfStatusCode(middleware, InformationalType);
}
//# sourceMappingURL=if-informational.js.map