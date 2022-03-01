import MiddlewarePropertyValidatorParameters from "../../middleware/property-validator-parameters";
import {Optional} from "utility-types";
import ValidatableContainer from "@alirya/validatable/validatable/Validatable";
import InferValidatable from "@alirya/validator/validatable/infer-validatable";
import ApplicationContext from "../../context/context";
import {Object} from "ts-toolbelt";
import Validator from "@alirya/validator/simple";
import ValidatorContainer from "@alirya/validator/validator/validator";
import Middleware from "../../middleware/middleware";
import Next from "../../middleware/next";
import Infer from "@alirya/validator/validatable/static/infer";
import PropertyValidatorParameters, {
    PropertyValidatorParametersContext as PropertyValidatorParameterContext,
    PropertyValidatorParametersValidator as PropertyValidatorParameterValidator
} from "./property-validator-parameters";

export {PropertyValidatorParameterContext, PropertyValidatorParameterValidator};
/**
 * @deprecated
 */
export default function PropertyValidatorParameter<
    Properties extends PropertyKey[],
    ContextType extends PropertyValidatorParameterContext<Properties>,
    ValidatorType extends PropertyValidatorParameterValidator<ContextType, Properties>,
>(
    {
        validator,
        properties,
        valid,
        invalid,
    } : ValidatorContainer<ValidatorType> & {
        properties,
        valid,
        invalid,
    }
) : Middleware<ContextType, ContextType & { validatable : Infer<ValidatorType> }> {

    return PropertyValidatorParameters(validator, properties, valid, invalid);
}
