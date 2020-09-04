import InternalServerError from "@dikac/t-http/response/internal-server-error";
import Context from "../../middleware/context/context";
import {Next} from "koa";
import {Middleware} from "@koa/router";
import FromResponse from "../from-response";
import Ok from "@dikac/t-http/response/ok";

export default function Body<
    Subject extends unknown,
    Arguments extends unknown[]
>(
    subject : (context : Context, ...argument : Arguments) => Promise<Subject>,
    ...argument : Arguments

) : Middleware {

    return function (context : Context, next : Next) {

        return subject(context, ...argument).then(function (subject) {

            FromResponse(context, Ok(subject));

            return next();

        }).catch(function (error) {

            let response = InternalServerError(error);

            FromResponse(context, response);

            return next();
        })
     }


}
