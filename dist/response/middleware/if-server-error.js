import ServerErrorType from "@dikac/t-http/response/code/class/boolean/server-error";
import IfStatusCode from "./if-status-code";
export default function IfServerError(middleware) {
    return IfStatusCode(middleware, ServerErrorType);
}
//# sourceMappingURL=if-server-error.js.map