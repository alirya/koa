import ValidatorInterface from "@dikac/t-validator/simple";
import {Middleware} from "@koa/router";
import Instance from "@dikac/t-validator/validatable/validatable";
import * as Koa from "koa";

export default function PropertyValidator<Body = unknown>(
    validator : ValidatorInterface<Body, Body, Instance<Body>>,
    failCode : number = 400,
    key : keyof Koa.BaseRequest
) : Middleware {

    return function (context, next) {

         let validatable = validator.validate(context.request[key]);

        if(validatable.valid) {

            return next();

        } else {

            context.response.status = failCode;
            context.response.body = validatable.message;
        }
    }
}
