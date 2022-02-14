import Context from '../../context/context';
import Ok from '@alirya/http/response/ok-parameter';
import Response from '@alirya/http/response/response';
import Middleware from '../../middleware/middleware';
import Body from '@alirya/http/body/body';
import BodyParameters from './body-parameters';
import Replace from "../../context/response-body/replace";

export type BodyParameterArgument<
    ResponseBody,
    ContextType extends Context,
> = {
    subject : (context : ContextType) => Promise<ResponseBody>,
    response ?: (body : Body<ResponseBody>) => Response<number, string, Record<string, string>, ResponseBody>
};
/**
 * use resolved {@param subject} value for response body data, upon
 * successful applied {@param response} value
 *
 *
 * @param subject
 * @param response
 * default status 200
 */

export default function BodyParameter<
    ResponseBody,
    ContextType extends Context,
>(
    {
        subject,
        response = Ok,
    } : BodyParameterArgument<ResponseBody, ContextType>
) : Middleware<ContextType, Replace<ContextType, ResponseBody>> {

    return BodyParameters(subject, response);
}
