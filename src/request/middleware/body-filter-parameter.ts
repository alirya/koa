import Context from '../../context/context';
import Middleware from '../../middleware/middleware';
import BodyFilterParameters from './body-filter-parameters';
import Replace from "../../context/request/replace";
import RequestBody from "../../context/request/infer";
import {DefaultContext, DefaultState} from "koa";
import Body from "../../../../http/dist/body/body";

export interface BodyFilterParameterArgumentCallback<
    ContextType extends Context,
> {

    body : RequestBody<ContextType>;
    context: ContextType;
}

export default function BodyFilterParameter<
    RequestBody,
    ContextType extends Context<DefaultState, DefaultContext, Body<unknown>> = Context<DefaultState, DefaultContext, Body<unknown>>,
>(
    filter : ({body, context} : BodyFilterParameterArgumentCallback<ContextType>) => RequestBody,
) : Middleware<ContextType, Replace<ContextType, ['body'], RequestBody>> {

    return BodyFilterParameters<RequestBody, ContextType>(
        (body, context) => filter({body, context})
    );

}
