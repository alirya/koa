import Context from '../../context/context';
import Middleware from '../../middleware/middleware';
import RequestBody from "../../context/request-body/infer";
import Replace from "../../context/request-body/replace";

export default function BodyFilterParameters<
    ReplaceBody = unknown,
    ContextType extends Context = Context,
>(
    filter : (body : RequestBody<ContextType>, context: ContextType) => ReplaceBody,
) : Middleware<ContextType, Replace<ContextType, ReplaceBody>> {

    return function (context, next)  {

        (context).request.body = filter(
            context.request.body as RequestBody<ContextType>,
            context
        );

        return next();

    } as  Middleware<ContextType, Replace<ContextType, ReplaceBody>>;

}
