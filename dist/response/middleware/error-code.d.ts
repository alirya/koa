import Context from "../../middleware/context/context";
import { Next } from "koa";
/**
 * if body in instanceof {@see Error}, and {@see Code<number>} use code value for status code
 * and status message from {@see Error.message}
 *
 * optionally if body also is {@see Value}, value will be used as response body
 *
 * @param context
 * @param next
 */
export default function ErrorCode(context: Context, next: Next): Promise<any> | undefined;
