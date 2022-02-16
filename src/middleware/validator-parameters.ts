import Validator from '@alirya/validator/simple';
import ValidatableContainer from '@alirya/validatable/validatable/validatable';
import InferValidatable from '@alirya/validator/validatable/infer-validatable';
import ApplicationContext from '../context/context';
import Middleware from './middleware';
import {Optional} from 'utility-types';
import Next from "./next";
import Infer from "@alirya/validator/validatable/static/infer";

export type ValidatableContextType<ValidatorType> =
    Optional<ValidatableContainer<InferValidatable<ValidatorType>>> &
    ApplicationContext;

export default function ValidatorParameters<
    ContextType extends ValidatableContextType<ValidatorType>,
    ValidatorType extends Validator<ContextType, ContextType>,
>(
    validator : ValidatorType,
    valid : Middleware<ContextType> = Next,
    invalid : Middleware<ContextType> = Next,
) : Middleware<ContextType, ContextType & { validatable:Infer<ValidatorType> }> {

    return function (context, next) {

        const validatable = validator(context);

        context.validatable = validatable as InferValidatable<ValidatorType>;

        if(validatable.valid) {

            return valid(context, next);

        } else {

            return invalid(context, next);
        }
    };
}
