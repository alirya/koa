import Validator from '@alirya/validator/simple.js';
import ValidatorContainer from '@alirya/validator/validator/validator.js';
import ApplicationContext from '../context/context.js';
import Middleware from './middleware.js';
import {Object} from 'ts-toolbelt';
import Next from './next.js';
import Infer from '@alirya/validator/validatable/static/infer.js';
import ValidatorParameters, {PropertyValidatorParametersContext} from './validator-parameters.js';

export type {PropertyValidatorParametersContext};

export default function ValidatorParameter<
    ContextType extends ApplicationContext = ApplicationContext,
    ValidatorType extends Validator<ContextType> = Validator<ContextType>,
>(
    {
        validator,
        properties,
        valid,
        invalid,
        replace,
    } : ValidatorContainer<ValidatorType> & {
        properties ?: [],
        valid : Middleware<ContextType>,
        invalid : Middleware<ContextType>,
        replace ?: boolean
    }
) : Middleware<ContextType, ContextType & { validatable : Infer<ValidatorType> }>;

export default function ValidatorParameter<
    Properties extends PropertyKey[],
    ContextType extends PropertyValidatorParametersContext<Properties> = PropertyValidatorParametersContext<Properties>,
    ValidatorType extends Validator<Object.Path<ContextType, Properties>> = Validator<Object.Path<ContextType, Properties>>,
>(
    {
        validator,
        properties,
        valid,
        invalid,
        replace,
    } : ValidatorContainer<ValidatorType> & {
        properties : Properties,
        valid : Middleware<ContextType>,
        invalid : Middleware<ContextType>,
        replace ?: boolean
    }
) : Middleware<ContextType, ContextType & { validatable : Infer<ValidatorType> }>;

export default function ValidatorParameter<
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

    return ValidatorParameters(validator, valid, invalid, replace, ...properties ?? []);
}
