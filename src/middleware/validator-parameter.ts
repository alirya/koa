import Validator from '@alirya/validator/simple';
import Context from './context/context';
import Middleware from './middleware';
import {DefaultState} from 'koa';
import ValidatorParameters, {ValidatableContextType} from './validator-parameters';

export {ValidatableContextType};

export default function ValidatorParameter<
    State extends DefaultState,
    ContextType extends ValidatableContextType<ValidatorType, State>,
    ResponseBody,
    ValidatorType extends Validator<Context<State, ContextType, ResponseBody>>,
/*    StateNext extends DefaultState,
    ContextTypeNext extends ApplicationContext<StateNext>,
    ResponseBodyNext,*/
>(
    {
        validator,
        invalid
    } : {
        validator : ValidatorType,
        invalid : Middleware<State, Required<ContextType>, ResponseBody>,
    }
) : Middleware<State, ContextType, ResponseBody/*, StateNext, ContextTypeNext, ResponseBodyNext*/> {

    return ValidatorParameters(validator, invalid);
}
