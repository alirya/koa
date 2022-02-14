import Validator from '@alirya/validator/simple';
import Middleware from './middleware';
import ValidatorParameters, {ValidatableContextType} from './validator-parameters';

export {ValidatableContextType};

export default function ValidatorParameter<
    ContextType extends ValidatableContextType<ValidatorType>,
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
