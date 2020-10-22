import { Middleware } from "koa";
/**
 * set response header
 */
export default function Header(headers: Record<string, string>): Middleware;
