import Context from '../../context/context';
import Middleware from '../../middleware/middleware';
import BodyFilterParameters from './body-filter-parameters';
import ReplaceResponseBody from "../../context/response-body/replace";
import ResponseBody from "../../context/response-body/infer";

export type BodyFilterParameterArgumentCallback<
    ContextType extends Context,
> = {
    body : ResponseBody<ContextType>;
    context: ContextType;
};
/**
 * filter response body data
 *
 * @param filter
 */
export default function BodyFilterParameter<
    BodyTo,
    ContextType extends Context,
>(
    filter : (argument : BodyFilterParameterArgumentCallback<ContextType>) => BodyTo,
) : Middleware<ContextType, ReplaceResponseBody<ContextType, BodyTo>> {

    return BodyFilterParameters(
        (body, context) => filter({body, context})
    );
}
