import Context from "../../middleware/context/context";
import { Next } from "koa";
/**
 * set appropriate header for JSON if body is already JSON string
 */
export default function JsonString(context: Context, next: Next): Promise<any>;
