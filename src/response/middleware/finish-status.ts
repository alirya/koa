import Successful from '@alirya/http/response/code/class/boolean/successful.js';
import StatusCode from '../../middleware/status-code.js';
import Context from '../../context/context.js';
import Middleware from '../../middleware/middleware.js';

/**
 * finish middleware if response code is valid
 * according to {@param statusCheck}
 *
 *
 *
 * @param validation
 * default is 2xx status code
 *
 * @constructor
 */
export default function FinishStatus<
    ContextType extends Context,
    ContextTypeN extends Context,
>(

    validation : (statusCode: number) => boolean = Successful
) : Middleware<ContextType, ContextTypeN> {

    return StatusCode(validation, (context, next) => {});

}
