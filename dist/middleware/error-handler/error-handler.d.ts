import * as Koa from "koa";
import Context from "../context/context";
declare type ErrorHandler<State extends Koa.DefaultState, ContextType extends Koa.DefaultContext, ResponseBodyT = unknown> = (error: any, context: Context<State, ContextType, ResponseBodyT>) => any;
export default ErrorHandler;
