import Context from "../../middleware/context/context";
import {DefaultContext, DefaultState, Next} from "koa";
import SuccessfulType from "@dikac/t-http/response/code/class/boolean/successful";
import {Middleware} from "koa";
import IfStatusCode from "./if-status-code";

export default function IfSuccessful<
    State extends DefaultState,
    ContextType extends DefaultContext,
    ResponseBody = any
>(
    middleware : (context:Context<State, ContextType, ResponseBody>, next:Next)=>void,

) : Middleware<State, ContextType, ResponseBody> {

    return IfStatusCode(SuccessfulType, middleware);
}
