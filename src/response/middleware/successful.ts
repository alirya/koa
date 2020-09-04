import Context from "../../middleware/context/context";
import {Next} from "koa";
import SuccessfulType from "@dikac/t-http/response/code/class/boolean/successful";
import {Middleware} from "@koa/router";
import Function from "@dikac/t-function/function";
import StatusCode from "./status-code";

export default function Successful(
    middleware : Function<[Context, Next], void>,
) : Middleware {

    return StatusCode(middleware, SuccessfulType);
}
