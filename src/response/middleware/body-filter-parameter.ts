import Context from '../../middleware/context/context';
import * as Koa from 'koa';
import {RouterParamContext} from '@koa/router';
import Middleware from '../../middleware/middleware';
import BodyFilterParameters from './body-filter-parameters';

export type BodyFilterParameterArgumentCallback<
    BodyFrom,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
    > = {
    body : BodyFrom;
    context: Context<State, ContextType, BodyFrom>;
};
/**
 * filter response body data
 *
 * @param filter
 */
export default function BodyFilterParameter<
    BodyFrom,
    BodyTo,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
>(
    filter : (argument : BodyFilterParameterArgumentCallback<BodyFrom, State, ContextType>) => BodyTo,
) : Middleware<State, ContextType, BodyFrom/*, State, ContextType, BodyTo*/> {

    return BodyFilterParameters(
        (body, context) => filter({body, context})
    );
}
