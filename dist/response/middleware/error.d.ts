import Context from "../../middleware/context/context";
import { Middleware } from "koa";
/**
 * @deprecated
 *
 * if body in instanceof {@see Error}, set status code to 500, and
 * replace body with {@param body}
 *
 * @param body
 *
 * @param callback
 * to be called on error
 */
export default function Error(body: any, callback?: (error: globalThis.Error, context: Context) => void): Middleware;
