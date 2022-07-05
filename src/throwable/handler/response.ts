import Response from '@alirya/http/response/response';
import FromResponseParameters from '../../response/from-response-parameters';
import Handler from './handler';
import Context from '../../context/context';

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
