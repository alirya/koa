import Validator from "@alirya/validator/validator";
import ValidatorContainer from "@alirya/validator/validator/validator";
import {Middleware} from "koa";
import Context from "../../middleware/context/context";
import FromResponseParameters from "../../response/from-response-parameters";
import * as Koa from "koa";
import {RouterParamContext} from "@koa/router";
import DefaultMessage from "@alirya/http/response/response-function-parameter";
import Codes from "@alirya/http/response/code/number/strict";
import ContentTypeJson from "../../object/content-type-json";
import Code from "@alirya/code/code";
import AutoBodyValidatorParameters from "./auto-body-validator-parameters";

export default function AutoBodyValidatorParameter<
    Body,
    ValidatorType extends Validator<Body>,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State> & {request:{body:Body}},
    ResponseBody = unknown,

>(
    {
        validator,
        code
    } : ValidatorContainer<ValidatorType> & Partial<Code<Codes>>
) : Middleware<State, ContextType, ResponseBody> {

    return AutoBodyValidatorParameters(validator, code);

}
