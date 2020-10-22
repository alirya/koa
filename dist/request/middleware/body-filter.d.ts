import { Middleware } from "koa";
import { Request } from "koa";
import { Object } from "ts-toolbelt";
import Body from "@dikac/t-http/body/body";
export default function BodyFilter<BodyType = unknown, RequestType extends Request & Body<BodyType> = Request & Body<BodyType>, Return extends Object.At<RequestType, 'body'> = Object.At<RequestType, 'body'>>(filter: (body: Object.At<Request, 'body'>) => Return): Middleware;
