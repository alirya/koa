import {DefaultContext, DefaultState} from 'koa';
import Context from '../../middleware/context/context';
import Middleware from '../../middleware/middleware';
import {RouterParamContext} from '@koa/router';
import BodyFilterParameters, {ContextBody} from './body-filter-parameters';

export interface BodyFilterParameterArgumentCallback<
    RequestBody,
    State extends DefaultState,
    ContextType extends ContextBody<RequestBody, State>,
    Response = unknown
> {

    body : RequestBody;
    context: Context<State, ContextType, Response>;
}

export default function BodyFilterParameter<
    RequestBody,
    ReplaceBody,
    State extends DefaultState,
    ContextType extends ContextBody<RequestBody, State>,
    Response = unknown
    >(
    filter : ({body, context} : BodyFilterParameterArgumentCallback<RequestBody, State, ContextType, Response>) => ReplaceBody,
) : Middleware<State, ContextType, Response/*, State, ContextBody<ReplaceBody, State>, Response*/> {

    return BodyFilterParameters<RequestBody, ReplaceBody, State, ContextType, Response>(
        (body, context) => filter({body, context})
    );

}
