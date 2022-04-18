import ValidatorParameters, {PropertyValidatorParametersContext} from "./validator-parameters";
import Validator from "@alirya/validator/simple";
import {Object} from "ts-toolbelt";
import Middleware from "./middleware";
import Next from "./next";
import Stop from "./stop";
import ValidatableContainer from "@alirya/validatable/validatable/Validatable";
import InferValidatable from "@alirya/validator/validatable/infer-static";
import FromResponseParameters from "../response/from-response-parameters";
import Body from "@alirya/http/body/body";
import Response from "@alirya/http/response/response";
import Ok from "@alirya/http/response/ok-parameter";
import UnprocessableEntityParameter from "@alirya/http/response/unprocessable-entity-parameter";
import ContentTypeJson from "@alirya/http/headers/header/content-type-json";
import ResponseMessageValidatorParameters from "./response-message-validator-parameters";


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
