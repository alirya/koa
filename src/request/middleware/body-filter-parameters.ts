import Context from '../../context/context';
import Middleware from '../../middleware/middleware';
import RequestBody from "../../context/request/infer";
import Replace from "../../context/request/replace";
import {DefaultContext, DefaultState} from "koa";
import Body from "../../../../http/dist/body/body";

export default function BodyFilterParameters<
    ReplaceBody = unknown,
    ContextType extends Context<DefaultState, DefaultContext, Body<unknown>> = Context<DefaultState, DefaultContext, Body<unknown>>,
>(
    filter : (body : RequestBody<ContextType>, context: ContextType) => ReplaceBody,
) : Middleware<ContextType, Replace<ContextType, ['body'] , ReplaceBody>> {

    return function (context, next)  {

        (context).request.body = filter(
            context.request.body as RequestBody<ContextType>,
            context
        );

        return next();

    } as  Middleware<ContextType, Replace<ContextType, ['body'], ReplaceBody>>;

}
