import InformationalType from "@dikac/t-http/response/code/class/boolean/informational";
import {DefaultContext, DefaultState} from "koa";
import IfStatusCode from "./if-status-code";
import Middleware from "../../middleware/middleware";
import * as Koa from "koa";
import {RouterParamContext} from "@koa/router";

/**
 * use {@param middleware} if response status code is 1xx
 *
 * @param middleware
 */
export default function IfInformational<
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
    ResponseBody,
    StateNext extends Koa.DefaultState,
    ContextTypeNext extends Koa.DefaultContext & RouterParamContext<StateNext>,
    ResponseBodyNext
    >(
    middleware :  Middleware<State, ContextType, ResponseBody>
) :  Middleware<State|StateNext, ContextType|ContextTypeNext, ResponseBody|ResponseBodyNext> {

    return IfStatusCode(InformationalType, middleware);
}
