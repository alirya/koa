/// <reference types="koa__router" />
import * as Koa from "koa";
import { RouterParamContext } from "@koa/router";
import Middleware from "../../middleware/middleware";
export default function IfInformational<State extends Koa.DefaultState, ContextType extends Koa.DefaultContext & RouterParamContext<State>, ResponseBody, StateNext extends Koa.DefaultState, ContextTypeNext extends Koa.DefaultContext & RouterParamContext<StateNext>, ResponseBodyNext>(middleware: Middleware<State, ContextType, ResponseBody>): Middleware<State | StateNext, ContextType | ContextTypeNext, ResponseBody | ResponseBodyNext>;
