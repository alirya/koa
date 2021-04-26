import { Middleware } from "koa";
import { Next, Request } from "koa";
import Body from "@dikac/t-http/body/body";
import Context from "../../middleware/context/context";
export default function IfBody<BodyType = unknown, RequestType extends Request & Body<BodyType> = Request & Body<BodyType>>(validation: (body: RequestType['body']) => boolean, middleware: Middleware): (context: Context, next: Next) => any;
