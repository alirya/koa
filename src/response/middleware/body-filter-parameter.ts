import Context from '../../context/context';
import Middleware from '../../middleware/middleware';
import BodyFilterParameters from './body-filter-parameters';
import ReplaceResponseBody from "../../context/response/replace";
import ResponseBody from "../../context/response/infer";

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
) : Middleware<ContextType, ReplaceResponseBody<ContextType, ['body'], BodyTo>> {

    return BodyFilterParameters(
        (body, context) => filter({body, context})
    );
}
