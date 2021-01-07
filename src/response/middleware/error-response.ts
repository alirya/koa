import Context from "../../middleware/context/context";
import {Next} from "koa";
import IsCode from "@dikac/t-code/boolean/code";
import Number from "@dikac/t-number/boolean/number";
import {Middleware} from "koa";
import Name from "@dikac/t-object/string/name";

/**
 * if body in instanceof {@see Error} set response message from {@see Error.message}
 *
 * and also according to following
 * - if also instanceof {@see Code<number>} use code value for status code
 *
 * {@see Error.message} used as http message
 * {@see Error.stack} used as http body
 */
export default function ErrorResponse(filter ?: (error: globalThis.Error)=>globalThis.Error) : Middleware {

    return function (context : Context, next : Next) {

        let body = context.response.body;

        if(body instanceof globalThis.Error) {

            if(filter) {

                body = filter(body);
            }

            const name = Name(body);

            context.response.status = (IsCode(body) && Number(body.code)) ? body.code : 500;
            context.response.message = `${name} ${body.message}`;
            context.response.body = body.stack;

        } else {

            return next();
        }
    }
}
