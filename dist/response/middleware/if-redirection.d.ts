import { DefaultContext, DefaultState, Middleware } from "koa";
/**
 * use {@param middleware} if response status code is 3xx
 *
 * @param middleware
 */
export default function IfRedirection<State extends DefaultState, ContextType extends DefaultContext, ResponseBody = any>(middleware: Middleware<State, ContextType, ResponseBody>): Middleware<State, ContextType, ResponseBody>;
