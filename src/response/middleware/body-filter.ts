import {DefaultContext, DefaultState, Middleware} from "koa";
import {Response} from "koa";
import {Object} from "ts-toolbelt";
import Body from "@dikac/t-http/body/body";
import PropertyFilter from "./property-filter";
import Context from "../../middleware/context/context";

/**
 * filter response body data
 *
 * @param filter
 */
// export default function BodyFilter<
//     BodyType = unknown,
//     ResponseType extends Response & Body<BodyType> = Response & Body<BodyType>,
//     Return extends ResponseType['body'] = ResponseType['body'],
// >(
//     filter : (body : Response['body'], context: Context) => Return,
// ) : Middleware {
//
//     return PropertyFilter<ResponseType, BodyType>( filter, 'body');
// }

export default function BodyFilter<
    Argument extends Middleware,
>(
    filter : (body : ResponseBody, context: Context<State, ContextType, ResponseBody>) => ReplaceBody
) : Middleware<
    ContextType,
    ResponseBody,
    ReplaceBody
> {

    return PropertyFilter( filter, 'body');
}
