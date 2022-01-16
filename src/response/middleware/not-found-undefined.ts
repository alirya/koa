// import Context from "../../middleware/context/context";
// import {DefaultContext, DefaultState, Next} from "koa";
// import FromResponseParameters from "../from-response-parameters";
// import NotFound from "@alirya/http/response/nofound-parameter";
//
// /**
//  * change response code to 404 if response body is undefined
//  * @param context
//  * @param next
//  */
// export default function NotFoundUndefined<
//     State extends DefaultState,
//     ContextType extends DefaultContext,
//     ResponseBody = any
// >(
//     context:Context<State, ContextType, ResponseBody>,
//     next:Next
// ) {
//
//     if(context.response.body === undefined) {
//
//         FromResponseParameters(context, NotFound());
//     }
//
//     return next();
// }
