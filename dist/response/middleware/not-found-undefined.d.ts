import Context from "../../middleware/context/context";
import { Next } from "koa";
/**
 * change response code to 404 if response body is undefined
 * @param context
 * @param next
 */
export default function NotFoundUndefined(context: Context, next: Next): Promise<any>;
