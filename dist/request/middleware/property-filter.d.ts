import { Middleware } from "koa";
import { Request } from "koa";
import Context from "../../middleware/context/context";
export default function PropertyFilter<RequestType extends Request, Body = unknown, Property extends keyof RequestType = keyof RequestType, Return extends RequestType[Property] = RequestType[Property]>(filter: (body: RequestType[Property], context: Context) => Return, property: Property): Middleware;
