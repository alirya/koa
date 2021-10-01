import Koa, {DefaultContext, DefaultState} from "koa";
import {Request} from "koa";
import {Object} from "ts-toolbelt";
import Body from "@dikac/t-http/body/body";
import PropertyFilter from "./property-filter";
import Context from "../../middleware/context/context";
import Infer from "../../middleware/context/infer";
import InferState from "../../middleware/state/infer";
import InferContext from "../../middleware/context/infer";
import InferResponse from "../../middleware/response/infer";

// export default function BodyFilter<
//     BodyType = unknown,
//     RequestType extends Request & Body<BodyType> = Request & Body<BodyType>,
//     Return extends RequestType['body'] = RequestType['body'],
// >(
//     filter : (body : RequestType['body'], context: Context) => Return,
// ) : Middleware {
//
//     return PropertyFilter<RequestType, BodyType>(filter, 'body');
// }
//
// export type ContextBody<ContextType, RequestBody> = DefaultContext & {request: { body: RequestBody }};
//
// export default function BodyFilter<
//     RequestBody = unknown,
//     ReplaceBody = unknown,
//     State extends DefaultState = DefaultState,
//     ContextType extends ContextBody<DefaultContext, RequestBody> = ContextBody<DefaultContext, RequestBody>,
//     ResponseBody = unknown,
// >(
//     filter : (body : RequestBody, context: Context<State, ContextType, ResponseBody>) => ReplaceBody,
// ) : Middleware<State, ContextBody<Infer<ContextType>, ReplaceBody>, ResponseBody> {
//
//     return function (context, next)  {
//
//         context.request.body = filter(context.request.body as any, context as any);
//
//         return next();
//     }
//
//
//   //  return PropertyFilter<RequestType, BodyType>(filter, 'body');
// }


export type ContextBody<RequestBody = unknown, Context extends DefaultContext = DefaultContext> = Context & {request: { body: RequestBody }};

export default function BodyFilter<
    RequestBody,
    Argument extends Koa.Middleware,
    Next extends Koa.Middleware<InferState<Argument>, ContextBody<RequestBody, InferContext<Argument>>, InferResponse<Argument>>,
    >(
    filter : (body : Argument['request']['body'], context: Context<State, ContextType, ResponseBody>) => ReplaceBody,
) : Middleware<Argument, Next> {


    return function (context, next)  {

        context.request.body = filter(context.request.body, context as Context<State, ContextType, ResponseBody>);

        return next();
    }


    //  return PropertyFilter<RequestType, BodyType>(filter, 'body');
}
