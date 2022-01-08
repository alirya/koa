import Context from "../../middleware/context/context";
import {Next} from "koa";
import FromResponseParameters from "../from-response-parameters";
import Ok from "@dikac/t-http/response/ok-parameter";
import * as Koa from "koa";
import Response from "@dikac/t-http/response/response";
import Middleware from "../../middleware/middleware";
import {RouterParamContext} from "@koa/router";
import Body from "@dikac/t-http/body/body";
import BodyParameters from "./body-parameters";

export type BodyParameterArgument<
    ResponseBody,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
> = {
    subject : (context : Context<State, ContextType, any>) => Promise<ResponseBody>,
    response ?: (body : Body<ResponseBody>) => Response<number, string, Record<string, string>, ResponseBody>
}
/**
 * use resolved {@param subject} value for response body data, upon
 * successful applied {@param response} value
 *
 *
 * @param subject
 * @param response
 * default status 200
 */

export default function BodyParameter<
    ResponseBody,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext & RouterParamContext<State>,
>(
    {
        subject,
        response = Ok,
    } : BodyParameterArgument<ResponseBody, State, ContextType>
) : Middleware<State, ContextType, any, State, ContextType, ResponseBody> {

    return BodyParameters(subject, response);
}
