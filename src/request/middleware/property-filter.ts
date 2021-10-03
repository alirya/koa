import {DefaultContext, DefaultState, Middleware} from "koa";
// import GenericPropertyFilter from "../../middleware/property-filter";
import {Request} from "koa";
import Context from "../../middleware/context/context";

// export default function PropertyFilter<
//     RequestType extends Request,
//     Body = unknown,
//     Property extends keyof RequestType = keyof RequestType,
//     Return extends RequestType[Property] = RequestType[Property],
// >(
//     filter : (body : RequestType[Property], context: Context) => Return,
//     property : Property
// ) : Middleware {
//
//     // TODO FIX any casting
//     return GenericPropertyFilter('request', filter as any, <keyof Request>property);
// }
// export type ContextBody<ContextType, Property extends keyof any, RequestBody> = DefaultContext & {request: { [P in Property]: RequestBody }};
//
//
// export default function PropertyFilter<
//     RequestBody = unknown,
//     ReplaceBody = unknown,
//     State extends DefaultState = DefaultState,
//     ContextType extends ContextBody<DefaultContext, 'request', RequestBody> = ContextBody<DefaultContext, 'request', RequestBody>,
//     ResponseBody = unknown,
// >(
//     filter : (body : ContextType['request'], context: Context) => ReplaceBody,
//     property : keyof ContextType['request']
// ) : Middleware<State, ContextBody<DefaultContext, 'request', ReplaceBody>, ResponseBody> {
//
//     // TODO FIX any casting
//     return GenericPropertyFilter('request', filter as any, <keyof Request>property);
// }
//
