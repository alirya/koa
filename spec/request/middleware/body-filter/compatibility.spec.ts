import Router from "@koa/router";
import * as Koa from "koa";
import {DefaultState, Next} from "koa";
import Server from "../../../server";
import Register from "../../../../dist/router/register";
import Context from "../../../../dist/context/context";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('required for open and closed', ()=>{

    const server = Server();
    const router =  Register(
        server.koa,
        new Router<DefaultState, Context<Koa.DefaultState, Koa.DefaultContext, unknown, string|undefined>>()
    );

    beforeAll(()=>server.open());
    afterAll(()=>server.close());
    /**
     * seems to be hardcoded to any
     */
    describe('body', () => {

        router.use(
            function (context , next: Next) {

            context.request.body = 'a';
            return next();
        }, function (context , next: Next) {

            context.request.body = 'a';
            return next();
        }
        );
    });

});
