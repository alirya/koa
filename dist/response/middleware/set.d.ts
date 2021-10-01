import Context from "../../middleware/context/context";
import { DefaultContext, DefaultState } from "koa";
import { Middleware } from "koa";
/**
 * set {@param response} to response data
 *
 * @param response
 */
export default function Set<State extends DefaultState, ContextType extends DefaultContext, ResponseBody = any>(response: Context<State, ContextType, ResponseBody>['response']): Middleware<State, ContextType, ResponseBody>;
