import RedirectionType from "@dikac/t-http/response/code/class/boolean/redirection";
import IfStatusCode from "./if-status-code";
/**
 * use {@param middleware} if response status code is 3xx
 *
 * @param middleware
 */
export default function IfRedirection(middleware) {
    return IfStatusCode(middleware, RedirectionType);
}
//# sourceMappingURL=if-redirection.js.map