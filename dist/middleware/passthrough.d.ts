/// <reference types="koa__router" />
import { Middleware } from "koa";
import * as Koa from "koa";
import { RouterParamContext } from "@koa/router";
export default function Passthrough<StateT extends Koa.DefaultState, ContextT extends Koa.DefaultContext & RouterParamContext<StateT>, ResponseBodyT = unknown>(callback: () => any): Middleware<StateT, ContextT, ResponseBodyT>;
