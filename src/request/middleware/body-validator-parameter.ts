import Validator from "@alirya/validator/validator";
import {Middleware} from "koa";
import Context from "../../middleware/context/context";
import * as Koa from "koa";
import {RouterParamContext} from "@koa/router";
import AutoBodyValidatorParameters from "./auto-body-validator-parameters";
import BodyValidatorParameters from "./body-validator-parameters";

export default function BodyValidatorParameter<
    Body,
    ValidatorType extends Validator<Body>,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State> & {request:{body:Body}},
    ResponseBody = unknown,

>(
    {
        validator,
        invalid
    } : {
        validator : ValidatorType,
        invalid : Middleware<State, ContextType, ResponseBody>,
    }
) : Middleware<State, ContextType, ResponseBody> {

    return BodyValidatorParameters(validator, invalid);

}
