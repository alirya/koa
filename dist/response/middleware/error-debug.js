import FromResponse from "../from-response";
import InternalServerError from "@dikac/t-http/response/internal-server-error";
import Name from "@dikac/t-object/string/name";
import ErrorCallback from "./error-callback";
import ContentTypeTextUtf8 from "../../object/content-type-text-utf8";
/**
 * if body in instanceof {@see Error}, set status code to 500, and
 * replace body with Error name, message, and stack
 *
 *
 * @param callback
 * to be called on error
 *
 * @param callNext
 */
export default function ErrorDebug(callback, callNext = false) {
    return ErrorCallback(globalThis.Error, (error, context) => {
        FromResponse(context, InternalServerError({
            headers: ContentTypeTextUtf8,
            body: [Name(error), error.message, '', error.stack].join('\n')
        }));
        if (callback) {
            callback(error, context);
        }
    }, callNext);
}
//# sourceMappingURL=error-debug.js.map