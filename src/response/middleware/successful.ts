import Context from "../../middleware/context/context";
import {Next} from "koa";
import SuccessfulType from "@dikac/t-http/response/code/class/boolean/successful";
import {Middleware} from "@koa/router";
import StatusCode from "./status-code";

export default function Successful(
    middleware : (context:Context, next:Next)=>void,
) : Middleware {

    return StatusCode(middleware, SuccessfulType);
}
