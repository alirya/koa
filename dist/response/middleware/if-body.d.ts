import { Middleware } from "koa";
import { Response } from "koa";
import Body from "@dikac/t-http/body/body";
/**
 * use {@param middleware} if response body is valid against {@param validation}
 *
 * @param validation
 * @param middleware
 */
export default function IfBody<BodyType = unknown, ResponseType extends Response & Body<BodyType> = Response & Body<BodyType>>(validation: (body: ResponseType['body']) => boolean, middleware: Middleware): Middleware;
