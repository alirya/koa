import Context from "../../middleware/context/context";
import { DefaultContext, DefaultState, Next } from "koa";
import { Middleware } from "koa";
export default function IfSuccessful<State extends DefaultState, ContextType extends DefaultContext, ResponseBody = any>(middleware: (context: Context<State, ContextType, ResponseBody>, next: Next) => void): Middleware<State, ContextType, ResponseBody>;
