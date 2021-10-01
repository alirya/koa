import InternalServerError from "@dikac/t-http/response/internal-server-error";
import Context from "../../middleware/context/context";
import {DefaultContext, DefaultState, Next} from "koa";
import {Middleware} from "koa";
import FromResponse from "../from-response";
import Ok from "@dikac/t-http/response/ok";
import * as Koa from "koa";

/**
 * use resolved {@param subject} value for response body data,
 *
 * on success set status code to 200
 *
 * @param subject
 */
export default function Body<
    ResponseBody = unknown,
    State extends DefaultState = DefaultState,
    ContextType extends DefaultContext = DefaultContext,
>(
    subject : (context : Context<State, ContextType>) => Promise<ResponseBody>,

) : Middleware<State, ContextType & {response:{body:ResponseBody}}> {

    return function (context : Context<State, ContextType>, next : Next) {

        return subject(context).then(function (subject) {

            FromResponse(context, Ok({body:subject}));

            return next();

        });

     } as Middleware<Koa.DefaultState, Koa.DefaultContext & {response:{body:ResponseBody}}>

}
