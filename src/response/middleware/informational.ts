import Context from "../../middleware/context/context";
import {Next} from "koa";
import InformationalType from "@dikac/t-http/response/code/class/boolean/informational";
import {Middleware} from "@koa/router";
import StatusCode from "./status-code";

export default function Informational(
    middleware : (body : Context, next : Next) => void,
) : Middleware {

    return StatusCode(middleware, InformationalType);
}
