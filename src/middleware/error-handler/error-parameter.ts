import * as Koa from 'koa';
import ErrorHandlerParameter from './error-handler';
import ErrorParameters from './error-parameters';

export type ErrorParameterArgument<
    Error extends globalThis.Error,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext,
    ResponseBody
> = {
    handler : ErrorHandlerParameter<Error, State, ContextType, ResponseBody>,
    instance ?: (new()=>Error),
};

export default function ErrorParameter<
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext,
    ResponseBody
>(  {
        handler,
    } : ErrorParameterArgument<globalThis.Error, State, ContextType, ResponseBody>
) : ErrorHandlerParameter<globalThis.Error, State, ContextType, ResponseBody>;

export default function ErrorParameter<
    Error extends globalThis.Error,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext,
    ResponseBody
>(  {
        handler,
        instance
    } : ErrorParameterArgument<Error, State, ContextType, ResponseBody>
) : ErrorHandlerParameter<Error, State, ContextType, ResponseBody>;

export default function ErrorParameter<
    Error extends globalThis.Error,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext,
    ResponseBody
>(  {
        handler,
        instance = globalThis.Error
    } : ErrorParameterArgument<Error|globalThis.Error, State, ContextType, ResponseBody>
) : ErrorHandlerParameter<Error|globalThis.Error, State, ContextType, ResponseBody> {

    return function (error, context)  {

        return ErrorParameters(handler, instance)(error, context);
    };
}
