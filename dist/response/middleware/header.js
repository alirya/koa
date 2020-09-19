import String from "@dikac/t-string/boolean/string";
/**
 * set response header
 */
export default function Header(headers) {
    return function (context, next) {
        if (String(context.response.body)) {
            context.response.set(headers);
        }
        return next();
    };
}
//# sourceMappingURL=header.js.map