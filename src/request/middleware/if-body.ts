import {Middleware} from "koa";
import {Next, Request} from "koa";
import Body from "@dikac/t-http/body/body";
import {Object} from "ts-toolbelt";
import Context from "../../middleware/context/context";

export default function IfBody<
    BodyType = unknown,
    RequestType extends Request & Body<BodyType> = Request & Body<BodyType>,
>(
    validation : (body : RequestType['body']) => boolean,
    middleware : Middleware
) {

    return function (context : Context, next : Next) {

        if(validation((context.request as RequestType).body)) {

            return middleware(context, next);

        } else {

            return next();
        }
    }


}
