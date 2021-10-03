/// <reference types="koa__router" />
import { Middleware } from "koa";
import * as Koa from "koa";
import { RouterParamContext } from "@koa/router";
/**
 * if body in instanceof {@see Error}, set status code to 500,
 * body with {@see Error.stack}, and message with {@see Error.message},
 *
 * @WARNING this will leak error message to public, use for
 * development only
 */
export default function ErrorMessage<Error extends globalThis.Error & {
    status: number;
}, State extends Koa.DefaultState, ContextType extends Koa.DefaultContext & RouterParamContext<State>, ResponseBody>(instance: new () => Error, callNext?: boolean): Middleware;
export default function ErrorMessage<Error extends globalThis.Error & {
    code: number;
}, State extends Koa.DefaultState, ContextType extends Koa.DefaultContext & RouterParamContext<State>, ResponseBody>(instance: new () => Error, callNext?: boolean): Middleware;
