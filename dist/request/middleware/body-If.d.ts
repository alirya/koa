/// <reference types="koa__router" />
import { Middleware } from "@koa/router";
import { Next, Request } from "koa";
import Body from "@dikac/t-http/body/body";
import { Object } from "ts-toolbelt";
import Context from "../../middleware/context/context";
export default function BodyIf<BodyType = unknown, RequestType extends Request & Body<BodyType> = Request & Body<BodyType>>(validation: (body: Object.At<RequestType, 'body'>) => boolean, middleware: Middleware): (context: Context, next: Next) => any;
