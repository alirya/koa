import Context from "./context/context";
import {Next} from "koa";


export default function Error(context : Context, next : Next) {

    if(context.response.body instanceof globalThis.Error) {

        console.log('Error');
        console.log(context.response.body);
        context.response.status = 500;
        context.response.body = context.response.body.message;

    } else {

        return next();
    }


}
