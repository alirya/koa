import { Middleware } from "koa";
/**
 * use {@param middleware} if response status code is 3xx
 *
 * @param middleware
 */
export default function IfRedirection(middleware: Middleware): Middleware;
