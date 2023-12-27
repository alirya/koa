import ValidatorParameters, {PropertyValidatorParametersContext} from './validator-parameters.js';
import Validator from '@axiona/validator/simple.js';
import {Object} from 'ts-toolbelt';
import Middleware from './middleware.js';
import Next from './next.js';
import Stop from './stop.js';
import ValidatableContainer from '@axiona/validatable/validatable/Validatable.js';
import InferValidatable from '@axiona/validator/validatable/infer-static.js';
import FromResponseParameters from '../response/from-response-parameters.js';
import Response from '@axiona/http/response/response.js';
import {UnprocessableEntityParameter} from '@axiona/http/response/unprocessable-entity.js';


export default function ResponseMessageValidatorParameters<
    Properties extends PropertyKey[],
    ContextType extends PropertyValidatorParametersContext<Properties> = PropertyValidatorParametersContext<Properties>,
    ValidatorType extends Validator<Object.Path<ContextType, Properties>> = Validator<Object.Path<ContextType, Properties>>,
>(
    validator : ValidatorType,
    response : (response :  Partial<Response<number, string, {}, InferValidatable<ValidatorType>['message']>>) => Response<number, string, Record<string, string>, any>
        = UnprocessableEntityParameter,
    valid : Middleware<ContextType> = Next,
    invalid : Middleware<ContextType> = Stop,
    ...properties : Properties
) : Middleware<ContextType, ContextType & ValidatableContainer<InferValidatable<ValidatorType>>> {

    return ValidatorParameters(validator, valid, (context, next) => {

        const res = response({
            body : context.validatable.message,
        });
        FromResponseParameters(context, res);

        return invalid(context, next);
    }, undefined, ...properties);

}
