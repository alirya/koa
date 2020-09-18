import ClientErrorType from "@dikac/t-http/response/code/class/boolean/client-error";
import IfStatusCode from "./if-status-code";
export default function ClientError(middleware) {
    return IfStatusCode(middleware, ClientErrorType);
}
//# sourceMappingURL=client-error.js.map