export {};
// export default function Filter<Return = unknown, Arguments extends unknown[] = unknown[]>(
//     filter : (body : Context, ... argument : Arguments) => void,
//     ...argument : Arguments
// ) : Middleware {
//
//     return function (context : Context, next) {
//
//         try {
//
//              filter(context, ...argument);
//
//         } catch (e) {
//
//             FromResponse(context, InternalServerError({body:e}));
//         }
//
//
//          return next();
//     }
// }
//# sourceMappingURL=filter.js.map