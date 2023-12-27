import Validatable from '@axiona/validator/validatable/validatable.js';
import Code from '@axiona/code/code.js';
import Context from '../context/context.js';

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
