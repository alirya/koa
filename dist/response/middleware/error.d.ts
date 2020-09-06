import Context from "../../middleware/context/context";
import { Next } from "koa";
export default function Error(context: Context, next: Next): Promise<any> | undefined;
