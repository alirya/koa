import Validator from "@dikac/t-validator/validator";
import {Middleware} from "koa";
import Context from "../../middleware/context/context";
import FromResponseParameters from "../../response/from-response-parameters";
import * as Koa from "koa";
import {RouterParamContext} from "@koa/router";
import DefaultMessage from "@dikac/t-http/response/response-function-parameter";
import Codes from "@dikac/t-http/response/code/number/strict";
import ContentTypeJson from "../../object/content-type-json";

export default function AutoBodyValidatorParameters<
    Body,
    ValidatorType extends Validator<Body>,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State> & {request:{body:Body}},
    ResponseBody = unknown,

>(
    validator : ValidatorType,
    code : Codes = 422
) : Middleware<State, ContextType, ResponseBody> {

    return function (context: Context<State, ContextType, ResponseBody>, next) {

        const validatable = validator(context.request.body);

        if(validatable.valid) {

            context.request.body = validatable.value

            return next();

        } else {

            const response = DefaultMessage({
                code,
                body : JSON.stringify(validatable.message),
                headers : ContentTypeJson
            })

            FromResponseParameters(context, response);
        }
    }

}
