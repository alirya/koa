import {DefaultContext, DefaultState, Middleware} from 'koa';
import Successful from '@alirya/http/response/code/class/boolean/successful';

/**
 * finish middleware if response code is valid
 * according to {@param statusCheck}
 *
 *
 *
 * @param statusCheck
 * default is 2xx status code
 *
 * @constructor
 */
export default function FinishStatus<
    State extends DefaultState = DefaultState,
    ContextType extends DefaultContext = DefaultContext,
    ResponseBody = unknown,
>(

    statusCheck : (statusCode: number) => boolean = Successful
) : Middleware<State, ContextType, ResponseBody> {

    return function (context, next ) {

        if(!statusCheck(context.response.status)) {

            return next();
        }
    };

}
