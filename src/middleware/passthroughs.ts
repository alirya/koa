import {Middleware} from "koa";

export default function Passthroughs(callback : ()=>any) : Middleware {

    return function (context, next) {

        callback();
        return next();
    }
}
