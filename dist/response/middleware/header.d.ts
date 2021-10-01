import { DefaultContext, DefaultState } from "koa";
import { Middleware } from "koa";
/**
 * set response header
 */
export default function Header<State extends DefaultState = DefaultState, ContextType extends DefaultContext = DefaultContext, ResponseBody = unknown>(headers: Record<string, string>): Middleware<State, ContextType, ResponseBody>;
