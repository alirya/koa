import { Middleware } from "koa";
/**
 * use {@param middleware} if response status code is 5xx
 *
 * @param middleware
 */
export default function IfServerError(middleware: Middleware): Middleware;
