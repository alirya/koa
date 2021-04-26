import { Middleware } from "koa";
import { Response } from "koa";
import Body from "@dikac/t-http/body/body";
import Context from "../../middleware/context/context";
/**
 * filter response body data
 *
 * @param filter
 */
export default function BodyFilter<BodyType = unknown, ResponseType extends Response & Body<BodyType> = Response & Body<BodyType>, Return extends ResponseType['body'] = ResponseType['body']>(filter: (body: Response['body'], context: Context) => Return): Middleware;
