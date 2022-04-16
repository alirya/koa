import Validator from '@alirya/validator/simple';
import Middleware from './middleware';
import ValidatorParameters from './validator-parameters';
import ApplicationContext from "../context/context";

export default function ValidatorParameter<
    ContextType extends ApplicationContext,
    ValidatorType extends Validator<ContextType>,
>(
    {
        validator,
        invalid
    } : {
        validator : ValidatorType,
        invalid : Middleware<ContextType>,
    }
) : Middleware<ContextType> {

    return ValidatorParameters(validator, invalid);
}
