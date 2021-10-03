/// <reference types="koa__router" />
import * as Koa from "koa";
import { RouterParamContext } from "@koa/router";
import Middleware from "../../middleware/middleware";
/**
 * execute middleware if {@param status} match
 *
 *
 * @param middleware
 * @param status
 * @constructor
 */
export default function IfStatusCode<State extends Koa.DefaultState, ContextType extends Koa.DefaultContext & RouterParamContext<State>, ResponseBody, StateNext extends Koa.DefaultState, ContextTypeNext extends Koa.DefaultContext & RouterParamContext<StateNext>, ResponseBodyNext>(status: (status: number) => boolean, middleware: Middleware<State, ContextType, ResponseBody>): Middleware<State, ContextType, ResponseBody, StateNext | State, ContextTypeNext | ContextType, ResponseBodyNext | ResponseBody>;
