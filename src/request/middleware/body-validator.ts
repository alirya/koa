import Validator from "@dikac/t-validator/validator";
import {Middleware} from "koa";
import {Request} from "koa";
// import PropertyValidator from "./property-validator";
import Body from "@dikac/t-http/body/body";
import Match from "@dikac/t-validator/match/infer";
import Context from "../../middleware/context/context";
import FromResponse from "../../response/from-response";
import InternalServerError from "@dikac/t-http/response/internal-server-error";
import * as Koa from "koa";
import {RouterParamContext} from "@koa/router";
import Validatable from "@dikac/t-validatable/error/validatable";
import DefaultMessage from "@dikac/t-http/response/default-message";
import Codes from "@dikac/t-http/response/message/message/codes";
import ContentTypeJson from "../../object/content-type-json";

export default function BodyValidator<
    Body,
    ValidatorType extends Validator<Body>,
   // RequestType extends Request & Body<Match<ValidatorType>> /*= Request & Body<Match<ValidatorType>>*/,

    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State> & {request:{body:Body}},
    ResponseBody = unknown,

>(
    validator : ValidatorType,
    code : keyof Codes = 422
) : Middleware<State, ContextType, ResponseBody> {

    return function (context: Context<State, ContextType, ResponseBody>, next) {

        const validatable = validator.validate(context.request.body);

        if(validatable.valid) {

            context.request.body = validatable.value

            return next();

        } else {

            const response = DefaultMessage({
                code,
                body : JSON.stringify(validatable.message),
                headers : ContentTypeJson
            })

            FromResponse(context, response);

        }
    }
   // return PropertyValidator<ValidatorType, RequestType>(validator, 'body', failCode)
}
