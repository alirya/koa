import ValidatorInterface from "@dikac/t-validator/simple";
import { Middleware } from "koa";
import Instance from "@dikac/t-validator/validatable/validatable";
import { Request } from "koa";
export default function PropertyValidator<BodyType = unknown, RequestType extends Request = Request>(validator: ValidatorInterface<BodyType, BodyType, Instance<BodyType>>, key: keyof RequestType, failCode?: number): Middleware;
