import Context from "../../middleware/context/context";
import {Next} from "koa";
import SuccessfulType from "@dikac/t-http/response/code/class/boolean/successful";
import {Middleware} from "koa";
import IfStatusCode from "./if-status-code";

export default function IfSuccessful(
    middleware : (context:Context, next:Next)=>void,
) : Middleware {

    return IfStatusCode(middleware, SuccessfulType);
}
