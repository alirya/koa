import Response from '@alirya/http/response/response.js';
import FromResponseParameters from '../../response/from-response-parameters.js';
import Handler from './handler.js';
import Context from '../../context/context.js';

/**
 * replace response with {@see Response}
 *
 * @param response
 * @constructor
 */
export default function Response<
    Error extends globalThis.Error,
    ContextType extends Context
>(
    response: Response,
) : Handler<Error, ContextType> {

    return function (error, context)  {

        FromResponseParameters(context, response);

    };
}
