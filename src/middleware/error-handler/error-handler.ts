import * as Koa from "koa";
import {RouterParamContext} from "@koa/router";
import Context from "../context/context";


type ErrorHandler<
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext,
    ResponseBodyT = unknown
> = (
    error,
    context: Context<State, ContextType, ResponseBodyT>
) => any

export default ErrorHandler;
