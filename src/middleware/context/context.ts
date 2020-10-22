import {RouterParamContext} from "@koa/router";
import {DefaultContext, DefaultState, ParameterizedContext} from "koa";

type Context<StateT = DefaultState, CustomT = DefaultContext> = ParameterizedContext<StateT, CustomT> & RouterParamContext<StateT, CustomT>;
export default Context;
