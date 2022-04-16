import Validator from '@alirya/validator/simple';
import ValidatableContainer from '@alirya/validatable/validatable/validatable';
import InferValidatable from '@alirya/validator/validatable/infer-validatable';
import ApplicationContext from '../context/context';
import Middleware from './middleware';
import {Optional} from 'utility-types';
import Next from "./next";
import Infer from "@alirya/validator/validatable/static/infer";
import PropertyValidatorParameters from "./property-validator-parameters";
import {Object} from "ts-toolbelt";

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

    return PropertyValidatorParameters(validator as any, [], valid, invalid);
}
