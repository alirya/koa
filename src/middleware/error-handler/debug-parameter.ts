// import FromResponseParameters from "../../response/from-response-parameters";
// import InternalServerError from "@alirya/http/response/internal-server-error-parameter";
// import ContentTypeTextUtf8 from "../../object/contentype-texutf8";
// import Name from "@alirya/object/string/name";
// import * as Koa from "koa";
// import Context from "../context/context";
// import DebugParameters from "./debug-parameters";
//
// /**
//  * print out error to response
//  *
//  * @param error
//  * @param context
//  * @constructor
//  */
// export default function DebugParameter<
//     Error  extends globalThis.Error,
//     State extends Koa.DefaultState,
//     ContextType extends Koa.DefaultContext,
//     ResponseBodyT = unknown
// >({
//     error,
//     context,
// } : {
//     error : Error,
//     context: Context<State, ContextType, ResponseBodyT>
// }) {
//
//     DebugParameters(error, context);
// }
