import Path from "@alirya/http/request/path/path";
import Method from "@alirya/http/request/method/method";
import Koa, {DefaultContext, DefaultState} from "koa";
import Middleware from "../middleware/middleware";
import KoaRouter, {RouterOptions, RouterParamContext} from "@koa/router";
import Server from "../server/server";
import {Server as HttpServer} from "http";
import {ListenOptions} from "net";
import Request from "@alirya/http/request/request";
import Route from "@alirya/http/request/route/route";
import Router from "./router";

export interface Type<
    StateT extends DefaultState,
    CustomT extends DefaultContext,
    >  {

    <StateR extends StateT, CustomR extends CustomT>(options : Route): KoaRouter<StateR, CustomR & RouterParamContext<StateT>>;
}


export default function Route<
    StateT extends DefaultState,
    CustomT extends DefaultContext
>(
    koa : Koa<StateT, CustomT>,
) : Type<StateT, CustomT> {

    return function<StateR extends StateT, CustomR extends CustomT>(route : Route) {

        return Router(koa)({
            prefix : route.path,
            methods : [route.method]
        })
    }


}
















