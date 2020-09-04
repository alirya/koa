/// <reference types="koa__router" />
import { Middleware } from "@koa/router";
import { Response } from "koa";
export default function PropertyFilter<Body = unknown, Property extends keyof Response = keyof Response, Return extends Response[Property] = Response[Property]>(filter: (body: Response[Property]) => Return, property: Property): Middleware;
