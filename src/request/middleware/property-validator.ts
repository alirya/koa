import ValidatorInterface from "@dikac/t-validator/simple";
import {Middleware} from "@koa/router";
import Instance from "@dikac/t-validator/validatable/validatable";
import {Request} from "koa";

export default function PropertyValidator<
    BodyType = unknown,
    RequestType extends Request = Request,
>(
    validator : ValidatorInterface<BodyType, BodyType, Instance<BodyType>>,
    key : keyof RequestType,
    failCode : number = 400,
) : Middleware {

    return function (context, next) {

         let validatable = validator.validate(context.request[key as keyof Request]);

        if(validatable.valid) {

            return next();

        } else {

            context.response.status = failCode;
            context.response.body = validatable.message;
        }
    }
}
