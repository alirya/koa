import Response from "@dikac/t-http/response/response";
import InternalServerError from "@dikac/t-http/response/internal-server-error";
import Context from "../../middleware/context/context";
import {Next} from "koa";
import {Middleware} from "@koa/router";
import FromResponse from "../from-response";

export default function Response<
    Subject extends Response,
    Arguments extends unknown[]
>(
    subject : (context : Context) => Promise<Subject>
) : Middleware {

    return function (context : Context, next : Next) {

        return subject(context).then(function (subject) {

            FromResponse(context, subject);

            return next();

        }).catch(function (error) {

            let response = InternalServerError(error);

            FromResponse(context, response);

            return next();
        })
     }


}
