import Validator from '@alirya/validator/simple';
import ValidatorContainer from '@alirya/validator/validator/validator';
import ValidatableContainer from '@alirya/validatable/validatable/validatable';
import InferValidatable from '@alirya/validator/validatable/infer-validatable';
import ApplicationContext from '../context/context';
import Middleware from './middleware';
import {Optional} from 'utility-types';
import {Object} from 'ts-toolbelt';
import Next from "./next";
import Infer from "@alirya/validator/validatable/static/infer";
import PickDeepParameters from "@alirya/object/value/value/select-path-parameters";
import PropertyValidatorParameters, {PropertyValidatorParametersContext} from "./property-validator-parameters";

export type {PropertyValidatorParametersContext};

export default function PropertyValidatorParameter<
    Properties extends PropertyKey[],
    ContextType extends PropertyValidatorParametersContext<Properties> = PropertyValidatorParametersContext<Properties>,
    ValidatorType extends Validator<Object.Path<ContextType, Properties>> = Validator<Object.Path<ContextType, Properties>>,
>(
    {
        validator,
        properties,
        valid = Next,
        invalid = Next,
        replace,
    } : ValidatorContainer<ValidatorType> & {
        properties : Properties,
        valid : Middleware<ContextType>,
        invalid : Middleware<ContextType>,
        replace ?: boolean
    }
) : Middleware<ContextType, ContextType & { validatable : Infer<ValidatorType> }> {

    return PropertyValidatorParameters(validator, properties, valid, invalid, replace);
}
