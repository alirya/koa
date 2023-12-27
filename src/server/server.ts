import Koa, {DefaultContext, DefaultState} from "koa";
import {Server as HttpServer} from 'http.js';
import State from "../context/state/infer.js";
import ApplicationContext from "../context/context.js";
import Router from "@koa/router.js";
import {ListenOptions} from "net";

export default interface Server<StateT = DefaultState, CustomT = DefaultContext> {

    readonly koa  : Koa<StateT, CustomT>;
    readonly server : HttpServer|undefined;
    readonly config : ListenOptions;
    open ():void;
    close():void;
    route() : Router<State<ApplicationContext<{}, {}, {}, DefaultContext>>, ApplicationContext<{}, {}, {}, DefaultContext>>;
}
