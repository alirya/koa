import Context from '../../context/context';
import FromResponseParameters from '../from-response-parameters';
import Ok from '@alirya/http/response/ok-parameter';
import Response from '@alirya/http/response/response';
import Middleware from '../../middleware/middleware';
import Body from '@alirya/http/body/body';
import Replace from "../../context/response/replace";

/**
 * use resolved {@param subject} value for response body data, upon
 * successful applied {@param response} value
 *
 *
 * @param subject
 * @param response
 * default status 200
 */

export default function BodyParameters<
    ResponseBody,
    ContextType extends Context,
>(
    subject : (context : ContextType) => Promise<ResponseBody>,
    response : (body : Body<ResponseBody>) => Response<number, string, Record<string, string>, ResponseBody> = Ok
) : Middleware<ContextType, Replace<ContextType, ['body'], ResponseBody>> {

    return function (context, next) {

        return subject(context).then(function (body) {

            FromResponseParameters(context, response({body}));

            return next();

        });

    };
}
