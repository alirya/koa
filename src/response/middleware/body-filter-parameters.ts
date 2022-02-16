import Context from '../../context/context';
import Middleware from '../../middleware/middleware';
import ResponseBody from "../../context/response/infer";
import ReplaceResponseBody from "../../context/response/replace";
import Body from "@alirya/http/body/body";

/**
 * filter response body data
 *
 * @param filter
 */
export default function BodyFilterParameters<
    BodyTo,
    ContextType extends Context<any, Body<unknown>>,
>(
    filter : (body : ResponseBody<ContextType>['body'], context: ContextType) => BodyTo,
) : Middleware<ContextType, ReplaceResponseBody<ContextType, ['body'], BodyTo>> {

    return function (context, next)  {

        context.response.body = filter(context.response.body as ResponseBody<ContextType>['body'], context);

        return next();

    } as Middleware<ContextType, ReplaceResponseBody<ContextType, ['body'], BodyTo>>;
}
