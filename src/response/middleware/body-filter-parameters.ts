import Context from '../../context/context';
import Middleware from '../../middleware/middleware';
import ResponseBody from "../../context/response-body/infer";
import ReplaceResponseBody from "../../context/response-body/replace";

/**
 * filter response body data
 *
 * @param filter
 */
export default function BodyFilterParameters<
    BodyTo,
    ContextType extends Context,
>(
    filter : (body : ResponseBody<ContextType>, context: ContextType) => BodyTo,
) : Middleware<ContextType, ReplaceResponseBody<ContextType, BodyTo>> {

    return function (context, next)  {

        context.response.body = filter(context.response.body as ResponseBody<ContextType>, context);

        return next();

    } as Middleware<ContextType, ReplaceResponseBody<ContextType, BodyTo>>;
}
