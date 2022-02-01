import Validatable from '@alirya/validator/validatable/validatable';
import Code from '@alirya/code/code';
import Context from '../middleware/context/context';
import ValidatableParameters from './validatable-parameters';

export default function ValidatableParameter(
    {
        context,
        validatable
    } : {
        context: Context,
        validatable : Validatable & Code<number>,
    }
) {

    ValidatableParameters(context, validatable);
}
