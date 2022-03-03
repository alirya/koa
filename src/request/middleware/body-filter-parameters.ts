import Context from '../../context/context';
import Middleware from '../../middleware/middleware';
import RequestBody from "../../context/request/infer";
import Replace from "../../context/request/replace";
import Body from "@alirya/http/body/body";

/**
 * @deprecated
 * @param filter
 * @constructor
 */
export default function BodyFilterParameters<
    ReplaceBody = unknown,
    ContextType extends Context<Body<unknown>> = Context<Body<unknown>>,
>(
    filter : (body : RequestBody<ContextType>['body'], context: ContextType) => ReplaceBody,
) : Middleware<ContextType, Replace<ContextType, ['body'] , ReplaceBody>> {

    return function (context, next)  {

        (context).request.body = filter(
            context.request.body as RequestBody<ContextType>,
            context
        );

        return next();

    } as  Middleware<ContextType, Replace<ContextType, ['body'], ReplaceBody>>;

}
