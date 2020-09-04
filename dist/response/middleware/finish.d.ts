import Context from "../../middleware/context/context";
import { Next } from "koa";
/**
 * finish middleware if response code is success (2xxx)
 */
export default function Finish(context: Context, next: Next): Promise<any> | undefined;
