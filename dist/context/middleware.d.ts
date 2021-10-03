import Koa from "koa";
import InferState from "../middleware/state/infer";
import InferContext from "../middleware/context/infer";
import InferResponse from "../middleware/response/infer";
import Context from "../middleware/context/context";
declare type Middleware<Type extends Koa.Middleware> = Context<InferState<Type>, InferContext<Type>, InferResponse<Type>>;
export default Middleware;
