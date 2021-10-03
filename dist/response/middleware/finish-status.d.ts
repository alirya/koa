import Context from "../../middleware/context/context";
import { DefaultContext, DefaultState, Next } from "koa";
/**
 * finish middleware if response code is valid
 * according to @param statusCheck
 *
 *
 * @param context
 * @param next
 *
 * @param statusCheck
 * default is 2xx status code
 *
 * @constructor
 */
export default function FinishStatus<State extends DefaultState = DefaultState, ContextType extends DefaultContext = DefaultContext, ResponseBody = unknown>(context: Context<State, ContextType, ResponseBody>, next: Next, statusCheck?: (statusCode: number) => boolean): Promise<any> | undefined;
