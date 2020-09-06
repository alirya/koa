/// <reference types="koa__router" />
import ValidatorInterface from "@dikac/t-validator/simple";
import { Middleware } from "@koa/router";
import Instance from "@dikac/t-validator/validatable/validatable";
import { Request } from "koa";
import Body from "@dikac/t-http/body/body";
export default function BodyValidator<BodyType = unknown, RequestType extends Request & Body<BodyType> = Request & Body<BodyType>>(validator: ValidatorInterface<Body, Body, Instance<Body>>, failCode?: number): Middleware;
