/// <reference types="koa__router" />
import { RouterParamContext } from "@koa/router";
import { ExtendableContext } from "koa";
declare type Context<StateT = any, CustomT = {}> = {
    state: any;
} & RouterParamContext<StateT, CustomT> & ExtendableContext;
export default Context;
