import String from '@alirya/string/boolean/string';
import Validator from '@alirya/validator/simple';
import Validatable from '@alirya/validator/validatable/simple';
import Context from '../../../dist/context/context';


export default function ContextValidator<
    Ctx extends Context
>(
    context : Context
) : Validatable<
        Ctx,
        Ctx
> {

    const value = context.request.body;
    const valid = String(value);

    return {

        valid,
        message : valid ? 'valid' : 'invalid',
        value : context as Ctx
    };
};
