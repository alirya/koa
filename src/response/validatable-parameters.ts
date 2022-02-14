import Validatable from '@alirya/validator/validatable/validatable';
import Code from '@alirya/code/code';
import Context from '../context/context';

export default function ValidatableParameters(
    context: Context,
    validatable : Validatable & Code<number>
) {

    if(validatable.valid) {

        context.response.status = validatable.code;
        context.response.body = validatable.value;

    } else {

        context.response.status = validatable.code;
        context.response.body = validatable.message;
    }
}
