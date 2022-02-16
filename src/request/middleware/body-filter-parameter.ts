import Context from '../../context/context';
import Middleware from '../../middleware/middleware';
import BodyFilterParameters from './body-filter-parameters';
import Replace from "../../context/request/replace";
import RequestBody from "../../context/request/infer";
import Body from "@alirya/http/body/body";

export interface BodyFilterParameterArgumentCallback<
    ContextType extends Context<Body<unknown>>,
> {

    body : RequestBody<ContextType>['body'];
    context: ContextType;
}

export default function BodyFilterParameter<
    RequestBody,
    ContextType extends Context<Body<unknown>> = Context<Body<unknown>>,
>(
    filter : ({body, context} : BodyFilterParameterArgumentCallback<ContextType>) => RequestBody,
) : Middleware<ContextType, Replace<ContextType, ['body'], RequestBody>> {

    return BodyFilterParameters<RequestBody, ContextType>(
        (body, context) => filter({body, context})
    );

}
