import {PropertyValidatorParametersContext} from './validator-parameters.js';
import Validator from '@alirya/validator/simple.js';
import {Object} from 'ts-toolbelt';
import Middleware from './middleware.js';
import ValidatableContainer from '@alirya/validatable/validatable/Validatable.js';
import InferValidatable from '@alirya/validator/validatable/infer-static.js';
import Response from '@alirya/http/response/response.js';
import ResponseMessageValidatorParameters from './response-message-validator-parameters.js';


export default function ResponseMessageValidatorParameter<
    Properties extends PropertyKey[],
    ContextType extends PropertyValidatorParametersContext<Properties> = PropertyValidatorParametersContext<Properties>,
    ValidatorType extends Validator<Object.Path<ContextType, Properties>> = Validator<Object.Path<ContextType, Properties>>,
>(  {
        validator,
        properties,
        response,
        valid,
        invalid,
    } : {
        validator : ValidatorType,
        properties : Properties,
        response : (response :  Partial<Response<number, string, {}, InferValidatable<ValidatorType>['message']>>) => Response<number, string, Record<string, string>, any>
        valid : Middleware<ContextType>,
        invalid : Middleware<ContextType>,
    }
) : Middleware<ContextType, ContextType & ValidatableContainer<InferValidatable<ValidatorType>>> {

    return ResponseMessageValidatorParameters(validator, response, valid, invalid, ...properties);
}
