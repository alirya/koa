import Context from "../../middleware/context/context";
import {DefaultContext, DefaultState, Next} from "koa";
import String from "@dikac/t-string/boolean/string";
import {Middleware} from "koa";

/**
 * set response header
 */
export default function Header<
    State extends DefaultState = DefaultState,
    ContextType extends DefaultContext = DefaultContext,
    ResponseBody = unknown,
>(
    headers : Record<string, string>
) : Middleware<
    State,
    ContextType,
    ResponseBody
    > {

    return function (context : Context<State, ContextType, ResponseBody>, next : Next) {

       // if(String(context.response.body)) {

            context.response.set(headers)
      //  }

        return next();

    } as Middleware<State, ContextType, ResponseBody>

}

// // test
//
// type s = (value:any) => any;
// type a = (value:any, value2: any) => any;
//
// const data : s & a = (value:any, value2: any) => {
//
//     return 1;
// }
