import Validator from '@alirya/validator/simple';
import InferValidatable from '@alirya/validator/validatable/infer-static';
import ApplicationContext from '../context/context';
import Middleware from './middleware';
import {Optional} from 'utility-types';
import {Object} from 'ts-toolbelt';
import Next from "./next";
import Infer from "@alirya/validator/validatable/static/infer";
import PickDeepParameters from "@alirya/object/value/value/select-path-parameters";
import ValidatableContainer from "@alirya/validatable/validatable/Validatable";
import ConditionalCallParameters from "@alirya/function/conditional-call-parameters";

export type PropertyValidatorParametersContext<Properties extends PropertyKey[]> =
    ApplicationContext & Object.P.Record<Properties, unknown>;

export default function PropertyValidatorParameters<
    Properties extends PropertyKey[],
    ContextType extends PropertyValidatorParametersContext<Properties>,
    ValidatorType extends Validator<Object.Path<ContextType, Properties>>,
>(
    validator : ValidatorType,
    properties : Properties,
    valid : Middleware<ContextType> = Next,
    invalid : Middleware<ContextType> = Next,
) : Middleware<ContextType, ContextType & ValidatableContainer<InferValidatable<ValidatorType>>> {

    return function (context : ContextType & ValidatableContainer<InferValidatable<ValidatorType>>, next) {

        const validatable = validator(
            PickDeepParameters<Properties, ContextType>(context, ...properties)
        );

        context.validatable = validatable as InferValidatable<ValidatorType>;

        return ConditionalCallParameters(
            validatable.valid,
            valid,
            invalid,
            context, next
        )
    };
}
