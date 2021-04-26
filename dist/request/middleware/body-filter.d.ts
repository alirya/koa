import { Middleware } from "koa";
import { Request } from "koa";
import Body from "@dikac/t-http/body/body";
import Context from "../../middleware/context/context";
export default function BodyFilter<BodyType = unknown, RequestType extends Request & Body<BodyType> = Request & Body<BodyType>, Return extends RequestType['body'] = RequestType['body']>(filter: (body: RequestType['body'], context: Context) => Return): Middleware;
