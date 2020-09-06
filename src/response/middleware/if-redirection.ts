import Context from "../../middleware/context/context";
import {Next} from "koa";
import RedirectionType from "@dikac/t-http/response/code/class/boolean/redirection";
import {Middleware} from "@koa/router";
import IfStatusCode from "./if-status-code";

export default function IfRedirection(
    middleware : (body : Context, next : Next) => void,
) : Middleware {

    return IfStatusCode(middleware, RedirectionType);
}
