import * as Koa from "koa";
import {RouterParamContext} from "@koa/router";
import InferState from "./state/infer";
import InferContext from "./context/infer";
import InferResponse from "./response/infer";

/**
 * alternative to koa router {@see Middleware} with
 * added Response body template
 */
type Middleware<
    Argument extends Koa.Middleware,
    Next extends Koa.Middleware = Argument
> =
Koa.Middleware<
    InferState<Argument>,
    InferContext<Argument>,
    InferResponse<Argument>
>;

export default Middleware;
