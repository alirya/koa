import Validator from "@dikac/t-validator/validator";
import { Middleware } from "koa";
import { Request } from "koa";
export default function PropertyValidator<ValidatorType extends Validator, RequestType extends Request = Request>(validator: ValidatorType, key: keyof RequestType, failCode?: number): Middleware;
