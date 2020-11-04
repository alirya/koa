import Koa, {DefaultContext, DefaultState, Middleware} from "koa";
import Router from "@koa/router";
import {Server as HttpServer} from "http";
import Server from "./server";

export default class Standard<StateT = DefaultState, CustomT = DefaultContext> implements Server <StateT, CustomT>{

    readonly koa : Koa<StateT, CustomT> = new Koa<StateT, CustomT>();
    #server : HttpServer|undefined;
    readonly route : Router<StateT, CustomT> = new Router<StateT, CustomT>();

    constructor(
        private middlewares : Middleware[],
        readonly port : number,
    ) {

        this.middlewares.forEach(this.koa.use);
        this.koa.use(this.route.routes());
        this.koa.use(this.route.allowedMethods());
    }

    get server() : HttpServer|undefined {

        return this.#server;
    }

    open () {

        if(!this.#server) {

            this.#server = this.koa.listen(this.port);
        }
    }

    close() {

        if(this.#server) {

            this.#server.close();
            this.#server = undefined;
        }

    }
}
