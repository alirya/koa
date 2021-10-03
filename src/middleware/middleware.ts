import * as Koa from "koa";
import {Middleware as RouterMiddleware, RouterParamContext} from "@koa/router";
import InferState from "./state/infer";
import InferContext from "./context/infer";
import InferResponse from "./response/infer";

/**
 * alternative to koa router {@see Middleware} with
 * added Response body template
 */
type Middleware<
    StateT extends Koa.DefaultState,
    ContextT extends Koa.DefaultContext & RouterParamContext<StateT>,
    ResponseBodyT = unknown,

    StateTNext extends Koa.DefaultState = StateT,
    ContextTNext extends Koa.DefaultContext & RouterParamContext<StateTNext> = Koa.DefaultContext & RouterParamContext<StateTNext>,
    ResponseBodyTNext = ResponseBodyT,
    //
    // Argument extends Koa.Middleware<Koa.DefaultState, Koa.DefaultContext & RouterParamContext>,
    // Next extends Koa.Middleware = Argument
> =
Koa.Middleware<
    StateT,
    ContextT,
    ResponseBodyT
>;

export default Middleware;

// type Middleware<StateT = Koa.DefaultState, ContextT = Koa.DefaultContext> = Koa.Middleware<StateT, ContextT & RouterParamContext<StateT, ContextT>>;
