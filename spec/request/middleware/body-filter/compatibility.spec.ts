// import Route from "../../../../dist/route/route";
// import KoaRouter from "../../../router";
// import Method from "@alirya/http/request/method/string/enum/method";
// import {RouterParamContext} from "@koa/router";
// import * as Koa from "koa";
// import {Next} from "koa";
// import Middleware from "../../../../dist/middleware/middleware";
//
// it("force console log", () => { spyOn(console, 'log').and.callThrough();});
//
// describe('required for open and closed', ()=>{
//
//     const routers = KoaRouter();
//     const router = Route(routers.router as any, {method:Method.GET, path:'/'});
//
//     beforeAll(()=>routers.open());
//     afterAll(()=>routers.close());
//     /**
//      * seems to be hardcoded to any
//      */
//     describe('body', () => {
//
//
//         const parser :
//             Middleware<
//                 Koa.DefaultState,
//                 Koa.DefaultContext & RouterParamContext & {request: { body?:string }},
//                 unknown,
//                 Koa.DefaultState,
//                 Koa.DefaultContext & RouterParamContext & {request: { body:string }},
//                 unknown
//                 >
//             =
//             function (context , next: Next) {
//
//                 context.request.body = 'a';
//                 return next();
//             }
//
//         router(parser)(function (context, next) {
//
//             let r : string = context.request.body;
//
//             // context.body;
//             const data : number  = context.request.body;
//             const data1 : object  = context.request.body;
//             const data2 : string[]  = context.request.body;
//
//         });
//     });
//
//     /**
//      * seems to be hardcoded to any
//      */
//     describe('body', () => {
//
//
//         const parser :
//             Middleware<
//                 Koa.DefaultState,
//                 Koa.DefaultContext & RouterParamContext & {request: { data?:string }},
//                 unknown,
//                 Koa.DefaultState,
//                 Koa.DefaultContext & RouterParamContext & {request: { data:string }},
//                 unknown
//                 >
//             =
//             function (context , next: Next) {
//
//                 context.request.data = 'a';
//                 return next();
//             }
//
//         router(parser)(function (context, next) {
//
//             let valid : string = context.request.data;
//
//             // @ts-expecerror
//             const invalid : number  = context.request.data;
//
//             // @ts-expecerror
//             const invalid1 : object  = context.request.data;
//
//             // @ts-expecerror
//             const invalid2 : string[]  = context.request.data;
//
//         });
//     });
// });
