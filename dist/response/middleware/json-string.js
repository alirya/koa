import String from "@dikac/t-string/boolean/string";
/**
 * set appropriate header for JSON if body is already JSON string
 */
export default function JsonString(context, next) {
    if (String(context.response.body)) {
        context.response.set({ 'Content-Type': 'application/json' });
    }
    return next();
}
//# sourceMappingURL=json-string.js.map