import Context from "../../middleware/context/context";
import { Next } from "koa";
import { Middleware } from "koa";
export default function IfStatusCode(middleware: (context: Context, next: Next) => any, status: (status: number) => boolean): Middleware;
