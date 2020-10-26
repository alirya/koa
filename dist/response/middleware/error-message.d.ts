import { Middleware } from "koa";
/**
 * if body in instanceof {@see Error}, set status code to 500, and
 * replace body with error message
 *
 * @WARNING this will leak error message to public, use for
 * development only
 */
export default function ErrorMessage(): Middleware;
