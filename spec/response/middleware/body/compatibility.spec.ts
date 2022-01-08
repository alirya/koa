// import Route from "../../../../dist/route/route";
// import KoaRouter from "../../../router";
// import Method from "@dikac/t-http/request/method/string/enum/method";
// import Router, {RouterParamContext} from "@koa/router";
// import {DefaultContext, DefaultState} from "koa";
// import Body from "../../../../dist/response/middleware/body-parameters";
//
// it("force console log", () => { spyOn(console, 'log').and.callThrough();});
// jasmine.DEFAULT_TIMEOUT_INTERVAL = 20 * 1000;
// const routers = KoaRouter();
//
// const router = Route(routers.koa)({methods:[Method.GET], prefix:'/'}
// );
//
// describe('required for open and closed', ()=>{
//
//     beforeAll(()=>routers.open());
//     afterAll(()=>routers.close());
//
//     describe('router chain', () => {
//
//         router(Body(function (context) : Promise<string>{
//
//             return Promise.resolve('');
//
//         }))(function (context, next) {
//
//             const string : string = context.response.body;
//
//             // @ts-expect-error
//             const number : number = context.response.body;
//         });
//
//     });
//
//     describe('koa', ()=>{
//
//         routers.koa.use(Body(function (context) : Promise<string>{
//
//             return Promise.resolve('');
//
//         }));
//     })
//
// })
