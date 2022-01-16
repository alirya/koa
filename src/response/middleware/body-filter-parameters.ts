import Context from '../../middleware/context/context';
import * as Koa from 'koa';
import {RouterParamContext} from '@koa/router';
import Middleware from '../../middleware/middleware';

/**
 * filter response body data
 *
 * @param filter
 */
export default function BodyFilterParameters<
    BodyFrom,
    BodyTo,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
>(
    filter : (body : BodyFrom, context: Context<State, ContextType, BodyFrom>) => BodyTo,
) : Middleware<State, ContextType, BodyFrom/*, State, ContextType, BodyTo*/> {

    return function (context, next)  {

        // @ts-ignore
        context.response.body = filter(context.response.body, context);

        return next();

    } as Middleware<State, ContextType, BodyFrom/*, State, ContextType, BodyTo*/>;
}
