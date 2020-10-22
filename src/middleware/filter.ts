import {Middleware} from "koa";
import InternalServerError from "@dikac/t-http/response/internal-server-error";
import FromResponse from "../response/from-response";
import Context from "./context/context";

export default function Filter<Return = unknown, Arguments extends unknown[] = unknown[]>(
    filter : (body : Context, ... argument : Arguments) => void,
    ...argument : Arguments
) : Middleware {

    return function (context : Context, next) {

        try {

             filter(context, ...argument);

        } catch (e) {

            FromResponse(context, InternalServerError(e));
        }


         return next();
    }
}
