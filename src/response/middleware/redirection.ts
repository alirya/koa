import Context from "../../middleware/context/context";
import {Next} from "koa";
import RedirectionType from "@dikac/t-http/response/code/class/boolean/redirection";
import {Middleware} from "@koa/router";
import StatusCode from "./status-code";

export default function Redirection(
    middleware : (body : Context, next : Next) => void,
) : Middleware {

    return StatusCode(middleware, RedirectionType);
}
