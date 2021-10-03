import Koa, {DefaultContext, DefaultState} from "koa";
import {Request} from "koa";
import Body from "@dikac/t-http/body/body";
// import PropertyFilter from "./property-filter";
import Context from "../../middleware/context/context";
import Infer from "../../middleware/context/infer";
import InferState from "../../middleware/state/infer";
import InferContext from "../../middleware/context/infer";
import InferResponse from "../../middleware/response/infer";
import InferContextState from "../../context/state/infer";
import InferContextContext from "../../context/context/infer";
import InferContextResponse from "../../context/response/infer";
import Middleware from "../../middleware/middleware";
import {RouterParamContext} from "@koa/router";

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


export type ContextBody<
    RequestBody = unknown,
    State extends DefaultState = DefaultState,
    Context extends DefaultContext & RouterParamContext<State> = DefaultContext & RouterParamContext<State>
> = Context & {request: { body: RequestBody }};

export default function BodyFilter<
    RequestBody,
    ReplaceBody,
    State extends DefaultState,
    ContextType extends ContextBody<RequestBody, State>,
    Response = unknown
    // Argument extends Koa.Middleware<DefaultState, DefaultContext & {request: { body: RequestBody }}>,
    // Next extends Koa.Middleware = Argument,
    >(
    filter : (body : RequestBody, context: Context<State, ContextType, Response>) => ReplaceBody,
) : Middleware<
     //   Koa.Middleware<
            State,
            ContextType,
            Response,
       // >,
      //  Koa.Middleware<
            State,
            ContextBody<ReplaceBody, State>,
            Response
    //    >
    > {


    return function (context, next)  {

        // @ts-ignore
        context.request.body = filter(context.request.body, context);

        return next();

    } as  Middleware<
      //  Koa.Middleware<
            State,
            ContextType,
            Response,
   //         >,
      //  Koa.Middleware<
            State,
            ContextType,
            Response
    //        >
        >


    //  return PropertyFilter<RequestType, BodyType>(filter, 'body');
}
