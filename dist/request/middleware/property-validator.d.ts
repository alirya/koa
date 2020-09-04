/// <reference types="koa__router" />
import ValidatorInterface from "@dikac/t-validator/simple";
import { Middleware } from "@koa/router";
import Instance from "@dikac/t-validator/validatable/validatable";
import * as Koa from "koa";
export default function PropertyValidator<Body = unknown>(validator: ValidatorInterface<Body, Body, Instance<Body>>, failCode: number | undefined, key: keyof Koa.BaseRequest): Middleware;
