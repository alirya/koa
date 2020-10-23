import { Middleware } from "koa";
/**
 * use {@param middleware} if response status code is 1xx
 *
 * @param middleware
 */
export default function IfInformational(middleware: Middleware): Middleware;
