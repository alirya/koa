
import String from '@alirya/string/boolean/string';
import Validatable from '@alirya/validator/validatable/simple';
import {DefaultState} from 'koa';
import ApplicationContext from '../../../dist/context/context';
import Context from '../../../dist/middleware/context/context';


export default function ContextValidator<

    State extends DefaultState,
    ContextT extends ApplicationContext<State>,
    Response = unknown
    >(
        context : Context<State,
ContextT,
Response>) : Validatable<Context<State,
    ContextT,
    Response>, Context<State,
    ContextT,
    Response>> {

    const value = context.request.body;
    const valid = String(value);

    return {

        valid,
        message : valid ? 'valid' : 'invalid',
        value
    };
}
