import Validator from '@alirya/validator/simple';
import ValidatableContainer from '@alirya/validatable/validatable/validatable';
import InferValidatable from '@alirya/validator/validatable/infer-validatable';
import Context from './context/context';
import ApplicationContext from '../context/context';
import Middleware from './middleware';
import {Optional} from 'utility-types';
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
