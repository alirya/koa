// import Context from "../../middleware/context/context";
// import {Middleware} from "koa";
// import FromResponse from "../from-response";
// import InternalServerError from "@dikac/t-http/response/internal-server-error";
// import Name from "@dikac/t-object/string/name";
// import ErrorCallback from "../../middleware/error-callback";
//
// /**
//  * if body in instanceof {@see Error}, set status code to 500, and
//  * replace body with {@param body}
//  *
//  * @param body
//  *
//  * @param callback
//  * to be called on error
//  */
// export default function DebugError(
//     callback ?: (error : globalThis.Error, context : Context)=>void
// ) : Middleware {
//
//     return ErrorCallback(globalThis.Error, (error : globalThis.Error, context) => {
//
//         FromResponse(context, InternalServerError({
//             body : [Name(error), error.message, '', error.stack].join('\n')
//         }))
//
//         if(callback) {
//
//             callback(error, context);
//         }
//     });
//     //
//     // return function (context : Context, next : Next) {
//     //
//     //     try {
//     //
//     //         return next();
//     //
//     //     } catch (error) {
//     //
//     //         if(error instanceof globalThis.Error) {
//     //
//     //             FromResponse(context, InternalServerError({
//     //                 body : [Name(error), error.message, '', error.stack].join('\n')
//     //             }))
//     //
//     //             if(callback) {
//     //
//     //                 callback(error, context);
//     //             }
//     //
//     //         } else {
//     //
//     //             throw error;
//     //         }
//     //
//     //     }
//
//         // const current = context.response.body;
//         //
//         // if(current instanceof globalThis.Error) {
//         //
//         //     context.response.status = 500;
//         //     context.response.message = current.message;
//         //     context.response.body = body;
//         //
//         //     if(callback) {
//         //
//         //         callback(current, context);
//         //     }
//         //
//         // } else {
//         //
//         //     return next();
//         // }
//   //  }
// }
