import Value from "@dikac/t-value/value";
import ValueValue from "@dikac/t-value/value/infer";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MessageMessage from "@dikac/t-message/message/infer";
import Response from "@dikac/t-http/response/response";
import Ok from "@dikac/t-http/response/ok";
import InternalServerError from "@dikac/t-http/response/internal-server-error";
import Context from "./context/context";
import {Next} from "koa";
import {Middleware} from "koa";
import FromResponse from "../response/from-response";

/**
 * @deprecated
 *
 * @param subject
 * @param argument
 * @constructor
 */
export default function Validatable<
    Subject extends Value & Validatable & Message<string>,
    Arguments extends unknown[]
>(
    subject : (context : Context, ...argument : Arguments) => Promise<Subject>,
    ...argument : Arguments

) : Middleware {

    return function (context : Context, next : Next) {

        return subject(context, ...argument).then(function (subject) {

            let response : Response<number, string, Record<string, string>, any>;

            if(subject.valid) {

                response = Ok({
                    body: <ValueValue<Subject>>subject.value
                });

            } else {

                response = InternalServerError({
                    body: <MessageMessage<Subject>>subject.message
                });
            }

            FromResponse(context, response);

            return next();

        }).catch(function (error) {

            let response = InternalServerError({body:error});
            FromResponse(context, response);

            return next();
        })
     }


}
