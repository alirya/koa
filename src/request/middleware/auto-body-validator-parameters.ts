import Validator from '@alirya/validator/validator';
import Context from '../../context/context';
import FromResponseParameters from '../../response/from-response-parameters';
import * as Koa from 'koa';
import DefaultMessage from '@alirya/http/response/response-function-parameter';
import Codes from '@alirya/http/response/code/number/strict';
import ContentTypeJson from '../../object/content-type-json';
import Middleware from "../../middleware/middleware";
import Body from "@alirya/http/body/body";

export default function AutoBodyValidatorParameters<
    RequestBody,
    ValidatorType extends Validator<RequestBody>,
    ContextType extends Context<Koa.DefaultState, Koa.DefaultContext, Body<RequestBody>>,

>(
    validator : ValidatorType,
    code : Codes = 422
) : Middleware<ContextType> {

    return function (context: ContextType, next) {

        const validatable = validator(context.request.body);

        if(validatable.valid) {

            context.request.body = validatable.value;

            return next();

        } else {

            const response = DefaultMessage({
                code,
                body : JSON.stringify(validatable.message),
                headers : ContentTypeJson
            });

            FromResponseParameters(context, response);
        }
    };

}
