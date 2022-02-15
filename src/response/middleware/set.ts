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
    response : Context<any, ResponseBody, State, ContextType>['response']
) : Middleware<State, ContextType, ResponseBody> {

    return function (context : Context<any, Body<ResponseBody>, State, ContextType>, next : Next) {

        FromResponseParameters(context, response);

        return next();
    };

}
