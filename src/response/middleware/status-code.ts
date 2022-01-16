import Context from '../../middleware/context/context';
import * as Koa from 'koa';
import {RouterParamContext} from '@koa/router';
import Middleware from '../../middleware/middleware';

/**
 * execute middleware if {@param status} match
 *
 *
 * @param middleware
 * @param status
 * @constructor
 */
export default function StatusCode<
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
    ResponseBody,
/*    StateNext extends Koa.DefaultState,
    ContextTypeNext extends Koa.DefaultContext & RouterParamContext<StateNext>,
    ResponseBodyNext*/
>(
    status : (status:number)=>boolean,
    middleware : Middleware<State, ContextType, ResponseBody>,
) : Middleware<State, ContextType, ResponseBody/*, StateNext|Stat, ContextTypeNext|ContextType, ResponseBodyNext|ResponseBody*/> {

    return function (context : Context<State, ContextType, ResponseBody> , next) {

        if(status(context.response.status)) {

            return middleware(context, next);

        } else {

            return next();
        }
    };
}
