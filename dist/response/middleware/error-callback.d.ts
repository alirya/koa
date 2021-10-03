/// <reference types="koa__router" />
import Context from "../../middleware/context/context";
import { Middleware } from "koa";
import * as Koa from "koa";
import { RouterParamContext } from "@koa/router";
/**
 * if body in instanceof {@see Error}, set status code to 500, and
 * replace body with {@param error}
 *
 * @param error
 *
 * @param callback
 * to be called on error
 *
 * @param callNext
 */
export default function ErrorCallback<Error extends globalThis.Error, State extends Koa.DefaultState, ContextType extends Koa.DefaultContext & RouterParamContext<State>, ResponseBody>(error: new () => Error, callback: (error: Error, context: Context<State, ContextType & {
    error: Error;
}, ResponseBody>) => void, callNext?: boolean): Middleware;
