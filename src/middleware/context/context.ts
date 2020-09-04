import {RouterParamContext} from "@koa/router";
import {ExtendableContext} from "koa";

type Context<StateT = any, CustomT = {}> = {state : any} & RouterParamContext<StateT, CustomT> & ExtendableContext;
export default Context;
