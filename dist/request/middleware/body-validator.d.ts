/// <reference types="koa__router" />
import Validator from "@dikac/t-validator/validator";
import { Middleware } from "koa";
import * as Koa from "koa";
import { RouterParamContext } from "@koa/router";
import Codes from "@dikac/t-http/response/message/message/codes";
export default function BodyValidator<Body, ValidatorType extends Validator<Body>, State extends Koa.DefaultState, ContextType extends Koa.DefaultContext & RouterParamContext<State> & {
    request: {
        body: Body;
    };
}, ResponseBody = unknown>(validator: ValidatorType, code?: keyof Codes): Middleware<State, ContextType, ResponseBody>;
