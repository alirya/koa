/// <reference types="koa__router" />
import Context from "../../middleware/context/context";
import * as Koa from "koa";
import { RouterParamContext } from "@koa/router";
import Middleware from "../../middleware/middleware";
/**
 * if body in instanceof {@see Error}, set status code to 500, and
 * replace body with Error name, message, and stack
 *
 *
 * @param callback
 * to be called on error
 *
 * @param callNext
 */
export default function ErrorDebug<ResponseBody, State extends Koa.DefaultState, ContextType extends Koa.DefaultContext & RouterParamContext<State>>(callback?: (error: globalThis.Error, context: Context) => void, callNext?: boolean): Middleware<State, ContextType, ResponseBody, State, ContextType, string>;
