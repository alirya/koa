import String from '@alirya/string/boolean/string';
import Validator from '@alirya/validator/dist/simple';
import Validatable from '@alirya/validator/validatable/simple';
import {DefaultState} from 'koa';
import ApplicationContext from '../../../dist/context/context';
import Context from '../../../dist/middleware/context/context';

type Argument = Context<DefaultState, ApplicationContext<DefaultState>, unknown>;

export default <Validator<Argument, Argument>> function ContextValidator<
    State extends DefaultState,
    ContextT extends ApplicationContext<State>,
    Response = unknown
>(
    context : Argument
) : Validatable<
        Context<State, ContextT, Response>,
        Context<State, ContextT, Response>
> {

    const value = context.request.body;
    const valid = String(value);

    return {

        valid,
        message : valid ? 'valid' : 'invalid',
        value
    };
};
