import PropertyValidatorParameters, {PropertyValidatorParametersContext} from "./property-validator-parameters";
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


export default function ResponseMessageValidatorParameters<
    Properties extends PropertyKey[],
    ContextType extends PropertyValidatorParametersContext<Properties> = PropertyValidatorParametersContext<Properties>,
    ValidatorType extends Validator<Object.Path<ContextType, Properties>> = Validator<Object.Path<ContextType, Properties>>,
>(
    validator : ValidatorType,
    properties : Properties,
    // response : (body : Body<Object.Path<ContextType, Properties>>) => Response<number, string, Record<string, string>, Object.Path<ContextType, Properties>>
    //     = UnprocessableEntityParameter,
    response : (response :  Partial<Response<number, string, {}, InferValidatable<ValidatorType>['message']>>) => Response<number, string, Record<string, string>, any>
        = UnprocessableEntityParameter,
    valid : Middleware<ContextType> = Next,
    invalid : Middleware<ContextType> = Stop,
) : Middleware<ContextType, ContextType & ValidatableContainer<InferValidatable<ValidatorType>>> {

    return PropertyValidatorParameters(validator, properties, valid, (context, next) => {

        const res = response({
            body : /*JSON.stringify*/(context.validatable.message),
            // headers : ContentTypeJson
        });
        FromResponseParameters(context, res);

        return invalid(context, next)
    });


    // return function (context: ContextType, next) {
    //
    //     const validatable = validator(context.request.body);
    //
    //     if(validatable.valid) {
    //
    //         context.request.body = validatable.value;
    //
    //         return next();
    //
    //     } else {
    //
    //         const response = DefaultMessage({
    //             code,
    //             body : JSON.stringify(validatable.message),
    //             headers : ContentTypeJson
    //         });
    //
    //         FromResponseParameters(context, response);
    //     }
    // };

}
