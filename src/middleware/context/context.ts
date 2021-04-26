import {RouterParamContext} from "@koa/router";
import {DefaultContext, DefaultState, ParameterizedContext} from "koa";

type Context<StateT = DefaultState, CustomT = DefaultContext, ResponseBodyT = unknown> = ParameterizedContext<StateT, CustomT, ResponseBodyT> & RouterParamContext<StateT, CustomT>;
export default Context;
