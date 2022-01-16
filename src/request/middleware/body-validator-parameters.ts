import Validator from "@alirya/validator/validator";
import {Middleware} from "koa";
import Context from "../../middleware/context/context";
import * as Koa from "koa";
import {RouterParamContext} from "@koa/router";

export default function BodyValidatorParameters<
    Body,
    ValidatorType extends Validator<Body>,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State> & {request:{body:Body}},
    ResponseBody = unknown,

>(
    validator : ValidatorType,
    invalid : Middleware<State, ContextType, ResponseBody>
) : Middleware<State, ContextType, ResponseBody> {

    return function (context: Context<State, ContextType, ResponseBody>, next) {

        const validatable = validator(context.request.body);

        if(validatable.valid) {

            context.request.body = validatable.value

            return next();

        } else {

            return invalid(context, next);
        }
    }

}
