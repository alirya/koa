import Context from "../../middleware/context/context";
import { Next } from "koa";
/**
 * set response header
 */
export default function Header(headers: Record<string, string>): (context: Context, next: Next) => Promise<any>;
