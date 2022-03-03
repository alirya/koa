import Successful from '@alirya/http/response/code/class/boolean/successful';
import StatusCode from "../../middleware/status-code";
import Context from "../../context/context";
import Middleware from "../../middleware/middleware";

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

    return StatusCode(validation, (context, next) => {})

}
