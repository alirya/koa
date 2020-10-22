import Context from "../../middleware/context/context";
import {Next} from "koa";
import {Middleware} from "koa";

export default function IfStatusCode(
    middleware : (context:Context, next:Next)=>any,
    status : (status:number)=>boolean
) : Middleware {

    return function (context : Context , next) {

        if(status(context.response.status)) {

            return middleware(context, next);

        } else {

            return next();
        }
    }
}
