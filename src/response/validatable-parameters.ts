import Validatable from '@alirya/validator/validatable/validatable';
import Message from '@alirya/message/message';
import Value from '@alirya/value/value';
import Code from '@alirya/code/code';
import Context from '../middleware/context/context';

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
