import Route from "../../../../dist/route/route";
import KoaRouter from "../../../router";
import Method from "@dikac/t-http/request/method/method/method";
import {Middleware, RouterContext} from "@koa/router";
import * as Koa from "koa";
import {Next} from "koa";
import BodyFilter from "../../../../dist/request/middleware/body-filter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


const router = new Route(KoaRouter.router, {method:Method.GET, path:'/'});


const parser :
    Middleware<Koa.DefaultState, Koa.DefaultContext & {request:{body:string}}> =
    function (context : RouterContext<Koa.DefaultState, Koa.DefaultContext & {request:{body:string}}>, next: Next) {

        context.request.body = 'a';
        return next();
    }



router.use(parser).use(BodyFilter(function (body, context){

   return 1;
}));
