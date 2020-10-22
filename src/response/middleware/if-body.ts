import {Middleware} from "koa";
import {Next, Response} from "koa";
import Body from "@dikac/t-http/body/body";
import {Object} from "ts-toolbelt";
import Context from "../../middleware/context/context";
/**
 * use {@param middleware} if response body is valid against {@param validation}
 *
 * @param validation
 * @param middleware
 */
export default function IfBody<
    BodyType = unknown,
    RequestType extends Response & Body<BodyType> = Response & Body<BodyType>,
>(
    validation : (body : Object.At<RequestType,'body'>) => boolean,
    middleware : Middleware
) : Middleware {

    return function (context : Context, next : Next) {

        if(validation(context.response.body)) {

            return middleware(context, next);

        } else {

            return next();
        }
    }


}
