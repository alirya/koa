import { DefaultContext, DefaultState, Middleware } from "koa";
import Context from "../../middleware/context/context";
import Infer from "../../middleware/context/infer";
export declare type ContextBody<ContextType, RequestBody = unknown> = DefaultContext & {
    request: {
        body: RequestBody;
    };
};
export default function BodyFilter<ReplaceBody = unknown, State extends DefaultState = DefaultState, ContextType extends ContextBody<DefaultContext> = ContextBody<DefaultContext>, ResponseBody = unknown>(filter: (body: ContextType['request']['body'], context: Context<State, ContextType, ResponseBody>) => ReplaceBody): Middleware<State, ContextBody<Infer<ContextType>, ReplaceBody>, ResponseBody>;
