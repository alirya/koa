import Context from "../../middleware/context/context";
import { Next } from "koa";
import { Middleware } from "koa";
export default function ClientError(middleware: (body: Context, next: Next) => void): Middleware;
