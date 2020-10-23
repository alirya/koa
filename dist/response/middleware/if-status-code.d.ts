import { Middleware } from "koa";
export default function IfStatusCode(middleware: Middleware, status: (status: number) => boolean): Middleware;
