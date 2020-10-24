import { Middleware } from "koa";
export default function Passthrough(callback: () => any): Middleware;
