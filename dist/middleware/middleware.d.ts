/// <reference types="koa__router" />
import * as Koa from "koa";
import { RouterParamContext } from "@koa/router";
/**
 * alternative to koa router {@see Middleware} with
 * added Response body template
 */
declare type Middleware<StateT extends Koa.DefaultState, ContextT extends Koa.DefaultContext & RouterParamContext<StateT>, ResponseBodyT = unknown, StateTNext extends Koa.DefaultState = StateT, ContextTNext extends Koa.DefaultContext & RouterParamContext<StateTNext> = Koa.DefaultContext & RouterParamContext<StateTNext>, ResponseBodyTNext = ResponseBodyT> = Koa.Middleware<StateT, ContextT, ResponseBodyT>;
export default Middleware;
