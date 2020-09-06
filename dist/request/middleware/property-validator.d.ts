/// <reference types="koa__router" />
import ValidatorInterface from "@dikac/t-validator/simple";
import { Middleware } from "@koa/router";
import Instance from "@dikac/t-validator/validatable/validatable";
import { Request } from "koa";
import Body from "@dikac/t-http/body/body";
export default function PropertyValidator<BodyType = unknown, RequestType extends Request = Request>(validator: ValidatorInterface<Body, Body, Instance<Body>>, key: keyof RequestType, failCode?: number): Middleware;
