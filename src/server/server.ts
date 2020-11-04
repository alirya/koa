import Router from "@koa/router";
import Koa, {DefaultContext, DefaultState} from "koa";
import {Server as HttpServer} from "http";

export default interface Server<StateT = DefaultState, CustomT = DefaultContext> {

    readonly route : Router<StateT, CustomT>;
    readonly koa  : Koa<StateT, CustomT>;
    readonly server : HttpServer|undefined;
    open ():void;
    close():void;
}
