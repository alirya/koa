import Context from '../../context/context';
import {DefaultContext, DefaultState, Next} from 'koa';
import {Middleware} from 'koa';
import FromResponseParameters from '../from-response-parameters';
import Body from "../../../../http/dist/body/body";

/**
 * set {@param response} to response data
 *
 * @param response
 */

export default function Set<
    State extends DefaultState,
    ContextType extends DefaultContext,
    ResponseBody = any
>(
    response : Context<State, ContextType, any, ResponseBody>['response']
) : Middleware<State, ContextType, ResponseBody> {

    return function (context : Context<State, ContextType, any, Body<ResponseBody>>, next : Next) {

        FromResponseParameters(context, response);

        return next();
    };

}
