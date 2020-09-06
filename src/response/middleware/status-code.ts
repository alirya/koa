import Context from "../../middleware/context/context";
import {Next} from "koa";
import {Middleware} from "@koa/router";

export default function StatusCode(
    middleware : (context:Context, next:Next)=>any,
    status : (status:number)=>boolean
) : Middleware {

    return function (context, next) {

        if(status(context.response.status)) {

            return middleware(context, next);

        } else {

            return next();
        }
    }
}
