import Context from "../../middleware/context/context";
import { DefaultContext, DefaultState } from "koa";
import { Middleware } from "koa";
/**
 * use resolved {@param subject} value for response body data,
 *
 * on success set status code to 200
 *
 * @param subject
 */
export default function Body<ResponseBody = unknown, State extends DefaultState = DefaultState, ContextType extends DefaultContext = DefaultContext>(subject: (context: Context<State, ContextType>) => Promise<ResponseBody>): Middleware<State, ContextType & {
    response: {
        body: ResponseBody;
    };
}>;
