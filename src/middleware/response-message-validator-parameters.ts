import ValidatorParameters, {PropertyValidatorParametersContext} from './validator-parameters';
import Validator from '@alirya/validator/simple';
import {Object} from 'ts-toolbelt';
import Middleware from './middleware';
import Next from './next';
import Stop from './stop';
import ValidatableContainer from '@alirya/validatable/validatable/Validatable';
import InferValidatable from '@alirya/validator/validatable/infer-static';
import FromResponseParameters from '../response/from-response-parameters';
import Response from '@alirya/http/response/response';
import {UnprocessableEntityParameter} from '@alirya/http/response/unprocessable-entity';


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
