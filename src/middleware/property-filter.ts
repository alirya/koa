import {Middleware} from "koa";
import InternalServerError from "@dikac/t-http/response/internal-server-error";
import FromResponse from "../response/from-response";
import Context from "./context/context";


export default function PropertyFilter<
    Body = unknown,
    ContextType extends Context = Context,
    Type extends keyof ContextType = keyof ContextType,
    Property extends keyof ContextType[Type] = keyof ContextType[Type],
    Return extends ContextType[Type][Property] = ContextType[Type][Property],
>(
    type : Type,
    filter : (property : ContextType[Type][Property], context: ContextType) => Return,
    property : Property
) : Middleware {

    return function (context: ContextType, next) {

        context[type][property] = filter(context[type][property], context);

         return next();
    }
}
