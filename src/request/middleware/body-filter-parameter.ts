import Context from '../../context/context';
import Middleware from '../../middleware/middleware';
import BodyFilterParameters from './body-filter-parameters';
import Replace from "../../context/request-body/replace";
import RequestBody from "../../context/request-body/infer";

export interface BodyFilterParameterArgumentCallback<
    ContextType extends Context,
> {

    body : RequestBody<ContextType>;
    context: ContextType;
}

export default function BodyFilterParameter<
    ReplaceBody,
    ContextType extends Context,
>(
    filter : ({body, context} : BodyFilterParameterArgumentCallback<ContextType>) => ReplaceBody,
) : Middleware<ContextType, Replace<ContextType, ReplaceBody>> {

    return BodyFilterParameters<ReplaceBody, ContextType>(
        (body, context) => filter({body, context})
    );

}
