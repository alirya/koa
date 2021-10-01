import { DefaultContext, DefaultState, Middleware } from "koa";
import Context from "../../middleware/context/context";
/**
 * filter response body data
 *
 * @param filter
 */
export default function BodyFilter<ResponseBody = unknown, ReplaceBody = unknown, State extends DefaultState = DefaultState, ContextType extends DefaultContext = DefaultContext>(filter: (body: ResponseBody, context: Context<State, ContextType, ResponseBody>) => ReplaceBody): Middleware<ContextType, ResponseBody, ReplaceBody>;
