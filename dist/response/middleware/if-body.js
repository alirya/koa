/**
 * use {@param middleware} if response body is valid against {@param validation}
 *
 * @param validation
 * @param middleware
 */
export default function IfBody(validation, middleware) {
    return function (context, next) {
        if (validation(context.response.body)) {
            return middleware(context, next);
        }
        else {
            return next();
        }
    };
}
//
// export default function IfBody<
//     State extends DefaultState = DefaultState,
//     ContextType extends DefaultContext = DefaultContext,
//     ResponseBody = unknown,
//     NewResponseBody = unknown,
//
// >(
//     validation : (body : ResponseBody) => boolean,
//     middleware : Middleware<State, ContextType, NewResponseBody>
// ) : Middleware<Middleware<State, ContextType, NewResponseBody|ResponseBody>> {
//
//     return function (context : Context<ContextType, ResponseBody,NewResponseBody>, next : Next) {
//
//         if(validation(context.response.body as ResponseBody)) {
//
//             return middleware(context, next);
//
//         } else {
//
//             return next();
//         }
//     } as Middleware<State, ContextType, NewResponseBody|ResponseBody>;
//
//
// }
//# sourceMappingURL=if-body.js.map