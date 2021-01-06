import { Middleware } from "koa";
import Context from "./context/context";
export default function PropertyFilter<Body = unknown, Type extends 'response' | 'request' = 'response' | 'request', Property extends keyof Context[Type] = keyof Context[Type], Return extends Context[Type][Property] = Context[Type][Property]>(type: Type, filter: (property: Context[Type][Property], context: Context) => Return, property: Property): Middleware;
