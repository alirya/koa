import RedirectionType from "@dikac/t-http/response/code/class/boolean/redirection";
import IfStatusCode from "./if-status-code";
export default function IfRedirection(middleware) {
    return IfStatusCode(middleware, RedirectionType);
}
//# sourceMappingURL=if-redirection.js.map