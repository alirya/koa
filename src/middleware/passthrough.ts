import {Middleware} from "koa";

export default function Passthrough(callback : ()=>any) : Middleware {

    return function (context, next) {

        callback();
        return next();
    }
}
