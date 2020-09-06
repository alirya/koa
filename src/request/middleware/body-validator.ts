import ValidatorInterface from "@dikac/t-validator/simple";
import {Middleware} from "@koa/router";
import Instance from "@dikac/t-validator/validatable/validatable";
import {Request} from "koa";
import PropertyValidator from "./property-validator";
import Body from "@dikac/t-http/body/body";

export default function BodyValidator<
    BodyType = unknown,
    RequestType extends Request & Body<BodyType> = Request & Body<BodyType>,
>(
    validator : ValidatorInterface<BodyType, BodyType, Instance<BodyType>>,
    failCode : number = 400,
) : Middleware {

    return PropertyValidator<BodyType, RequestType>(validator, 'body', failCode)
}
