import Context from "../../middleware/context/context";
import { Next } from "koa";
import { Middleware } from "koa";
/**
 * use {@param middleware} if response status code is 5xx
 *
 * @param middleware
 */
export default function IfServerError(middleware: (body: Context, next: Next) => any): Middleware;
