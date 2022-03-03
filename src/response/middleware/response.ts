import Response from '@alirya/http/response/response';
import Context from '../../context/context';
import {Next} from 'koa';
import {Middleware} from 'koa';
import FromResponseParameters from '../from-response-parameters';
import * as Koa from 'koa';
import {RouterParamContext} from '@koa/router';

/**
 * @deprecated
 *
 * use resolved {@param response} value for response data
 *
 * on error set status code to 500, and set value from {@see Promise.catch} to response body, and should be
 * handled by next middleware
 *
 * @param response
 */
export default function Response<
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
    ResponseBody,
    Subject extends Response,
>(
    response : (context : Context<any, ResponseBody, State, ContextType>) => Promise<Subject>
) : Middleware {

    return function (context : Context<any, ResponseBody, State, ContextType>, next : Next) {

        return response(context).then(function (subject) {

            FromResponseParameters(context, subject);

            return next();

        });
    };
}
