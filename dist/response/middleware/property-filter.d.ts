import { Middleware } from "koa";
import { Response } from "koa";
import Context from "../../middleware/context/context";
/**
 * filter response property
 *
 * @param filter
 * @param property
 */
export default function PropertyFilter<RequestType extends Response, Body = unknown, Property extends keyof RequestType = keyof RequestType, Return extends RequestType[Property] = RequestType[Property]>(filter: (body: RequestType[Property], context: Context) => Return, property: Property): Middleware;
