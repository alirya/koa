import { DefaultContext, DefaultState, Middleware } from "koa";
import Context from "../../middleware/context/context";
export declare type ContextBody<ContextType, Property extends keyof any, RequestBody> = DefaultContext & {
    request: {
        [P in Property]: RequestBody;
    };
};
export default function PropertyFilter<RequestBody = unknown, ReplaceBody = unknown, State extends DefaultState = DefaultState, ContextType extends ContextBody<DefaultContext, 'request', RequestBody> = ContextBody<DefaultContext, 'request', RequestBody>, ResponseBody = unknown>(filter: (body: ContextType['request'], context: Context) => ReplaceBody, property: keyof ContextType['request']): Middleware<State, ContextBody<DefaultContext, 'request', ReplaceBody>, ResponseBody>;
