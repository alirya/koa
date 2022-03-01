import MiddlewarePropertyValidatorParameters from "../../middleware/property-validator-parameters";
import {Optional} from "utility-types";
import ValidatableContainer from "@alirya/validatable/validatable/Validatable";
import InferValidatable from "@alirya/validator/validatable/infer-validatable";
import ApplicationContext from "../../context/context";
import {Object} from "ts-toolbelt";
import Validator from "@alirya/validator/simple";
import Middleware from "../../middleware/middleware";
import Next from "../../middleware/next";
import Infer from "@alirya/validator/validatable/static/infer";


export type PropertyValidatorParametersContext<Properties extends PropertyKey[]> =
    ApplicationContext & Object.P.Record<['request', ...Properties], unknown>;

export type PropertyValidatorParametersValidator<
    ContextType extends PropertyValidatorParametersContext<Properties>,
    Properties extends PropertyKey[]
    > = Validator<Object.P.Pick<ContextType, ['request', ...Properties]>>;
/**
 * @deprecated
 */
export default function PropertyValidatorParameters<
    Properties extends PropertyKey[],
    ContextType extends PropertyValidatorParametersContext<Properties>,
    ValidatorType extends PropertyValidatorParametersValidator<ContextType, Properties>,
>(
    validator : ValidatorType,
    properties : Properties,
    valid : Middleware<ContextType> = Next,
    invalid : Middleware<ContextType> = Next,
) : Middleware<ContextType, ContextType & { validatable : Infer<ValidatorType> }> {

    return MiddlewarePropertyValidatorParameters<
        ['request', ...Properties],
        ContextType,
        ValidatorType
    >(
        validator,
        ['request', ...properties],
        valid,
        invalid
    ) as
        Middleware<ContextType, ContextType & InferValidatable<Infer<ValidatorType>>>;
}
