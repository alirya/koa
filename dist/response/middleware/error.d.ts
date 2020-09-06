import Context from "../../middleware/context/context";
import { Next } from "koa";
/**
 * if body in instanceof {@see Error}, set status code to 500, and
 * replace body with error message
 *
 * @WARNING this will leak error message to public
 *
 * @param context
 * @param next
 */
export default function Error(context: Context, next: Next): Promise<any> | undefined;
