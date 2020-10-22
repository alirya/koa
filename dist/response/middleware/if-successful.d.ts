import Context from "../../middleware/context/context";
import { Next } from "koa";
import { Middleware } from "koa";
export default function IfSuccessful(middleware: (context: Context, next: Next) => void): Middleware;
