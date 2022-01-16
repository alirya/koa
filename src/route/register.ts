
import Path from "@alirya/http/request/path/path";
import Method from "@alirya/http/request/method/method";
import Koa, {DefaultContext, DefaultState} from "koa";
import Middleware from "../middleware/middleware";
import KoaRouter, {RouterOptions, RouterParamContext} from "@koa/router";
import Server from "../server/server";
import {Server as HttpServer} from "http";
import {ListenOptions} from "net";

// export interface Type<StateT = DefaultState, CustomT = DefaultContext>  {
//
//     <StateR extends StateT, CustomR extends CustomT>(options ?: RouterOptions): KoaRouter<StateR, CustomR>;
// }

export default function Register<
    StateT = DefaultState,
    CustomT = DefaultContext/*,
    StateMain extends DefaultState,
    CustomMain extends DefaultContext & RouterParamContext<StateMain>*/
>(
    koa : Koa<StateT, CustomT>,
    router : KoaRouter<StateT, CustomT & RouterParamContext<StateT>>
) : KoaRouter<StateT, CustomT & RouterParamContext<StateT>> {

    koa.use(router.routes());
    koa.use(router.allowedMethods());

    return router;
}
















