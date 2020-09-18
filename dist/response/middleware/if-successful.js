import SuccessfulType from "@dikac/t-http/response/code/class/boolean/successful";
import IfStatusCode from "./if-status-code";
export default function IfSuccessful(middleware) {
    return IfStatusCode(middleware, SuccessfulType);
}
//# sourceMappingURL=if-successful.js.map