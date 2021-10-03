import Route from "../../../../dist/route/route";
import KoaRouter from "../../../router";
import Method from "@dikac/t-http/request/method/method/method";
import Router, {RouterContext, RouterParamContext} from "@koa/router";
import * as Koa from "koa";
import {Context, Next} from "koa";
import BodyFilter from "../../../../dist/request/middleware/body-filter";
import Middleware from "../../../../dist/middleware/middleware";
import StatusCode from "../../../../dist/route/status-code";
import Informational from "@dikac/t-http/response/code/class/boolean/informational";
import any = jasmine.any;

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


const router = new Route(KoaRouter.router as any, {method:Method.GET, path:'/'});


/**
 * seems to be hardcoded to any
 */
describe('body', () => {


    const parser :
        Middleware<
            Koa.DefaultState,
            Koa.DefaultContext & RouterParamContext & {request: { body?:string }},
            unknown,
            Koa.DefaultState,
            Koa.DefaultContext & RouterParamContext & {request: { body:string }},
            unknown
            >
         =
        function (context , next: Next) {

            context.request.body = 'a';
            return next();
        }

    router.use(parser).use(function (context, next) {

        let r : string = context.request.body;

        // context.body;
        const data : number  = context.request.body;
        const data1 : object  = context.request.body;
        const data2 : string[]  = context.request.body;

    });
});

/**
 * seems to be hardcoded to any
 */
describe('body', () => {


    const parser :
        Middleware<
            Koa.DefaultState,
            Koa.DefaultContext & RouterParamContext & {request: { data?:string }},
            unknown,
            Koa.DefaultState,
            Koa.DefaultContext & RouterParamContext & {request: { data:string }},
            unknown
            >
         =
        function (context , next: Next) {

            context.request.data = 'a';
            return next();
        }

    router.use(parser).use(function (context, next) {

        let valid : string = context.request.data;

        // @ts-expect-error
        const invalid : number  = context.request.data;

        // @ts-expect-error
        const invalid1 : object  = context.request.data;

        // @ts-expect-error
        const invalid2 : string[]  = context.request.data;

    });
});
