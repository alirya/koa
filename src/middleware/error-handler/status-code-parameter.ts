// import DefaultMessage from "@alirya/http/response/response-function-parameter";
// import Codes from "@alirya/http/response/code/number/strict";
// import Name from "@alirya/object/string/name";
// import FromResponseParameters from "../../response/from-response-parameters";
// import * as Koa from "koa";
// import {RouterParamContext} from "@koa/router";
// import Context from "../context/context";
// import StatusCode from "./status-code";
//
// export type StatusCodeParameterArgument<
//     Error extends globalThis.Error,
//     State extends Koa.DefaultState,
//     ContextType extends Koa.DefaultContext & RouterParamContext<State>,
//     ResponseBody,
// > = {
//     error : Error,
//     context : Context<State, ContextType, ResponseBody>
// }
//
// /**
//  * catch {@param error} and set status code to 500
//  *
//  * @param error
//  * @param context
//  */
// export default function StatusCodeParameter<
//     Error extends globalThis.Error,
//     State extends Koa.DefaultState,
//     ContextType extends Koa.DefaultContext & RouterParamContext<State>,
//     ResponseBody,
// >(
//     {
//         error,
//         context
//     } : StatusCodeParameterArgument<Error, State, ContextType, ResponseBody>
// );
//
// /**
//  * catch {@param error} and use error.code as
//  * status code
//  *
//  * @param error
//  * @param context
//  */
// export default function StatusCodeParameter<
//     Error extends globalThis.Error & {code: number},
//     State extends Koa.DefaultState,
//     ContextType extends Koa.DefaultContext & RouterParamContext<State>,
//     ResponseBody,
// >(
//     {
//         error,
//         context
//     } : StatusCodeParameterArgument<Error, State, ContextType, ResponseBody>
// );
//
// /**
//  * catch {@param error} and use error.status as
//  * status code
//  *
//  * @param error
//  * @param context
//  */
// export default function StatusCodeParameter<
//     Error extends globalThis.Error & {status: number},
//     State extends Koa.DefaultState,
//     ContextType extends Koa.DefaultContext & RouterParamContext<State>,
//     ResponseBody,
// >(
//     {
//         error,
//         context
//     } : StatusCodeParameterArgument<Error, State, ContextType, ResponseBody>
// )
// export default function StatusCodeParameter<
//     Error extends (globalThis.Error & {code: number}) | (globalThis.Error & {status: number}),
//     State extends Koa.DefaultState,
//     ContextType extends Koa.DefaultContext & RouterParamContext<State>,
//     ResponseBody,
// >(
//     {
//         error,
//         context
//     } : StatusCodeParameterArgument<Error, State, ContextType, ResponseBody>
// )  {
//
//    return StatusCode(error, context);
//
// }
