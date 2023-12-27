import {DefaultContext, DefaultState} from 'koa';
import {RouterParamContext} from '@koa/router';
import ErrorHandlerInterface from './handler/handler.js';

export default interface Pipe<
    ErrorType extends globalThis.Error,
    CustomMain extends DefaultContext,
> {
    <
        StateType extends DefaultState,
        CustomType extends DefaultContext & RouterParamContext<StateType>,
        ResponseBodyType = unknown
    >(
        middleware : ErrorHandlerInterface<ErrorType, CustomMain>
    ) : Pipe<ErrorType, CustomMain>;
}
