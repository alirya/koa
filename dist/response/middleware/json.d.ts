import Context from "../../middleware/context/context";
import { DefaultContext, DefaultState, Next } from "koa";
/**
 * set appropriate header for JSON if body is already JSON string
 */
export default function Json<State extends DefaultState, ContextType extends DefaultContext, ResponseBody extends string>(context: Context<State, ContextType, ResponseBody>, next: Next): Promise<any>;
