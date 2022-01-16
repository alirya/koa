import Koa, {DefaultContext, DefaultState} from 'koa';
import Router from '@koa/router';
import Server from './server';
import {Server as HttpServer} from 'http';

export default class Listenable<StateT = DefaultState, CustomT = DefaultContext> implements Server<StateT, CustomT> {

    #server : Server<StateT, CustomT>;

    constructor(
        server : Server<StateT, CustomT>,
        readonly port : number,
        public openCallback : (port:number) => void,
        public closeCallback : (port:number) => void,
    ) {

        this.#server = server;
    }

    // get route() : Router<StateT, CustomT> {
    //
    //     return this.#server.route;
    // }

    get koa () : Koa<StateT, CustomT> {

        return this.#server.koa;
    }

    get server() : HttpServer|undefined {

        return this.#server.server;
    }

    open () {

        const server = this.#server.server;

        this.#server.open();

        if(!server) {

            this.openCallback(this.port);
        }
    }

    close() {

        const server = this.#server.server;

        this.#server.close();

        if(server) {

            this.closeCallback(this.port);
        }

    }
}
