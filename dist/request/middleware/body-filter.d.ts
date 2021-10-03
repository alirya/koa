/// <reference types="koa__router" />
import { DefaultContext, DefaultState } from "koa";
import Context from "../../middleware/context/context";
import Middleware from "../../middleware/middleware";
import { RouterParamContext } from "@koa/router";
export declare type ContextBody<RequestBody = unknown, State extends DefaultState = DefaultState, Context extends DefaultContext & RouterParamContext<State> = DefaultContext & RouterParamContext<State>> = Context & {
    request: {
        body: RequestBody;
    };
};
export default function BodyFilter<RequestBody, ReplaceBody, State extends DefaultState, ContextType extends ContextBody<RequestBody, State>, Response = unknown>(filter: (body: RequestBody, context: Context<State, ContextType, Response>) => ReplaceBody): Middleware<State, ContextType, Response, State, ContextBody<ReplaceBody, State>, Response>;
