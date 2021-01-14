import {Middleware} from "koa";
import InternalServerError from "@dikac/t-http/response/internal-server-error";
import FromResponse from "../response/from-response";
import Context from "./context/context";


export default function PropertyFilter<
    Body = unknown,
    Type extends 'response'|'request' = 'response'|'request',
    Property extends keyof Context[Type] = keyof Context[Type],
    Return extends Context[Type][Property] = Context[Type][Property],
>(
    type : Type,
    filter : (property : Context[Type][Property], context: Context) => Return,
    property : Property
) : Middleware {

    return function (context: Context, next) {

        try {

            context[type][property] = filter(context[type][property], context);

        } catch (e) {

            FromResponse(context, InternalServerError(e));
        }

         return next();
    }
}
