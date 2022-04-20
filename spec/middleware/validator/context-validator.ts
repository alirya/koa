import String from '@alirya/string/boolean/string';
import Validator from '@alirya/validator/simple';
import Validatable from '@alirya/validator/validatable/simple';
import Context from '../../../dist/context/context';
import Validation from "@alirya/boolean/function/validation";


export default function ContextValidator<
    Ctx extends Context
>(
    context : Context,
    validation : Validation<unknown[]>
) : Validatable<
        Ctx,
        Ctx
> {

    const valid = validation(context);

    return {

        valid,
        message : valid ? 'valid' : 'invalid',
        value : context as Ctx
    };
};
