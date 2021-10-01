import { Middleware } from "koa";
import Context from "./context/context";
export default function PropertyFilter<Body = unknown, ContextType extends Context = Context, Type extends keyof ContextType = keyof ContextType, Property extends keyof ContextType[Type] = keyof ContextType[Type], Return extends ContextType[Type][Property] = ContextType[Type][Property]>(type: Type, filter: (property: ContextType[Type][Property], context: ContextType) => Return, property: Property): Middleware;
