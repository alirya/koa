import * as Koa from "koa";
import ErrorHandlerParameter from './handler.js';
import InstanceParameters from './instance-parameters.js';
import Class from '@axiona/class/class.js';

export type ErrorArgument<
    Error extends globalThis.Error,
    ContextType extends Koa.DefaultContext,
> = {
    handler : ErrorHandlerParameter<Error, ContextType>,
    instance ?: Class<Error>,
};

export default function InstanceParameter<
    ContextType extends Koa.DefaultContext,
>(  {
        handler,
    } : ErrorArgument<globalThis.Error, ContextType>
) : ErrorHandlerParameter<globalThis.Error, ContextType>;

export default function InstanceParameter<
    Error extends globalThis.Error,
    ContextType extends Koa.DefaultContext,
>(  {
        handler,
        instance
    } : ErrorArgument<Error, ContextType>
) : ErrorHandlerParameter<Error, ContextType>;

export default function InstanceParameter<
    Error extends globalThis.Error,
    State extends Koa.DefaultState,
>(  {
        handler,
        instance = globalThis.Error
    } : ErrorArgument<Error|globalThis.Error, State>
) : ErrorHandlerParameter<Error|globalThis.Error, State> {

    return function (error, context)  {

        return InstanceParameters(handler, instance)(error, context);
    };
}
