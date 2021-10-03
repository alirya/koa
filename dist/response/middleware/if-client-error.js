import ClientErrorType from "@dikac/t-http/response/code/class/boolean/client-error";
import IfStatusCode from "./if-status-code";
export default function IfInformational(middleware) {
    return IfStatusCode(ClientErrorType, middleware);
}
//# sourceMappingURL=if-client-error.js.map