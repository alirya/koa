import Middleware from "./middleware";
import {DefaultState} from "koa";
import ApplicationContext from "../context/context";

export default function Passthroughs<
    State extends DefaultState,
    Context extends ApplicationContext<State>,
    Response = unknown
>(
    callback : ()=>any
) : Middleware<State, Context, Response> {

    return function (context, next) {

        callback();
        return next();
    } as Middleware<State, Context, Response>
}
