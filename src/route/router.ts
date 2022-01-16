
import Path from "@alirya/http/request/path/path";
import Method from "@alirya/http/request/method/method";
import Koa, {DefaultContext, DefaultState} from "koa";
import Middleware from "../middleware/middleware";
import KoaRouter, {RouterOptions} from "@koa/router";
import Server from "../server/server";
import {Server as HttpServer} from "http";
import {ListenOptions} from "net";

export interface Type<StateT = DefaultState, CustomT = DefaultContext>  {

    <StateR extends StateT, CustomR extends CustomT>(options ?: RouterOptions): KoaRouter<StateR, CustomR>;
}


export default function Router<
    StateT = DefaultState,
    CustomT = DefaultContext
>(
    koa : Koa<StateT, CustomT>,
) : Type<StateT, CustomT> {

    return function<StateR extends StateT, CustomR extends CustomT>(options ?: RouterOptions) {

        const router = new KoaRouter<StateR, CustomR>(options);

        koa.use(router.routes());
        koa.use(router.allowedMethods());

        return router;
    }
}
















