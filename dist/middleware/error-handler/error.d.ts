import * as Koa from "koa";
import ErrorHandler from "./error-handler";
/**
 *
 * if body in instanceof {@see Error}, set status code to 500, and
 * replace body with {@param body}
 *
 * @param body
 *
 * @param callback
 * to be called on error
 */
export default function Error<Error extends globalThis.Error, State extends Koa.DefaultState, ContextType extends Koa.DefaultContext, ResponseBody>(instance: new () => Error, middleware: ErrorHandler<State, ContextType, ResponseBody>): ErrorHandler<State, ContextType, ResponseBody>;
export default function Error<State extends Koa.DefaultState, ContextType extends Koa.DefaultContext, ResponseBody>(middleware: ErrorHandler<State, ContextType, ResponseBody>): ErrorHandler<State, ContextType, ResponseBody>;
