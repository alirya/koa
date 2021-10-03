/// <reference types="koa__router" />
import * as Koa from "koa";
import { RouterParamContext } from "@koa/router";
import Middleware from "../../middleware/middleware";
import ErrorHandler from "../../middleware/error-handler/error-handler";
/**
 * catch error then execute {@param middleware}
 *
 */
export default function Error<State extends Koa.DefaultState, ContextType extends Koa.DefaultContext & RouterParamContext<State>, ResponseBody>(middleware: ErrorHandler<State, ContextType, ResponseBody>): Middleware<State, ContextType, ResponseBody, State, ContextType, ResponseBody>;
/**
 * @param instance
 * instance of error
 *
 * @param middleware
 */
export default function Error<State extends Koa.DefaultState, ContextType extends Koa.DefaultContext & RouterParamContext<State>, ResponseBody>(instance: new () => globalThis.Error, middleware: ErrorHandler<State, ContextType, ResponseBody>): Middleware<State, ContextType, ResponseBody, State, ContextType, ResponseBody>;
/**
 * @param instance
 * @default {@see globalThis.Error}
 * instance of error
 *
 * @param middleware
 * executed {@param middleware} if error thrown
 *
 * @param rethrow
 * @default false
 * rethrow exception or not
 */
export default function Error<Error extends globalThis.Error, State extends Koa.DefaultState, ContextType extends Koa.DefaultContext & RouterParamContext<State>, ResponseBody>(instance: new () => Error, middleware: ErrorHandler<State, ContextType, ResponseBody>, rethrow?: boolean): Middleware<State, ContextType, ResponseBody, State, ContextType, ResponseBody>;
