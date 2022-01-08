// import Router from "../../router";
// import KoaBody from "koa-body";
// import MiddlewareError from "../../../dist/middleware/error-parameters";
// import Axios, {AxiosResponse} from "axios";
// import ErrorHandler from "../../../dist/route/error";
// import RequestPath from "../../request-path";
//
// it("force console log", () => { spyOn(console, 'log').and.callThrough();});
//
// describe('required for open and closed', ()=>{
//
//     const router = Router();
//     beforeAll(()=>router.open());
//     afterAll(()=>router.close());
//
//     describe('default use', () => {
//
//         const path : string = RequestPath(__filename);
//
//         let error : any;
//         let rethrown : boolean = false;
//         let response : AxiosResponse<{name : string, address : string}>|undefined;
//         let dataValue : {name : string, address : string} = {
//             name : 'jhon',
//             address : 'earth'
//         };
//
//         it('add request', ()=>{
//
//             router.router.post(path,
//                 KoaBody(),
//                 MiddlewareError((error, context) => {
//
//                     rethrown = true;
//                 }, Error),
//                 MiddlewareError( (error, context) => {
//
//                     context.response.status = 201;
//                     context.response.message = error.message;
//                     context.response.body = context.request.body;
//                 }, Error, true),
//                 function (context, next) {
//
//                     throw new Error('error occurred');
//                 },
//             );
//         });
//
//         it('send request', function (done) {
//
//             Axios.post(`http://localhost:${router.config.port}${path}`, dataValue).then((data)=>{
//
//                 response = data;
//
//             }).catch((err)=>error = err).finally(done);
//         })
//
//         it('assert value', function () {
//
//             expect((response as AxiosResponse).status).toEqual(201);
//             expect(true).toBe(rethrown);
//             expect(error).toEqual(undefined);
//             expect((response as AxiosResponse).statusText).toEqual('error occurred');
//         })
//
//     });
//
//
//     describe('chain handler', () => {
//
//         describe('uncaught handler', () => {
//
//             const path : string = RequestPath(__filename) + 2;
//
//             let error : any;
//             let rethrown : boolean = false;
//             let response : AxiosResponse<{name : string, address : string}>|undefined;
//             let dataValue : {name : string, address : string} = {
//                 name : 'jhon',
//                 address : 'earth'
//             };
//
//             it('add request', ()=>{
//
//                 ErrorHandler(router.koa, Error)
//                 ((error, context) => {
//
//                     rethrown = true;
//                 })
//                 ;
//
//                 router.router.post(path,
//                     KoaBody(),
//                     MiddlewareError((error, context) => {
//
//                         context.response.status = 201;
//                         context.response.message = error.message;
//                         context.response.body = context.request.body;
//                     }, Error, true),
//                     function (context, next) {
//
//                         throw new Error('error occurred "uncaught by the router" (cannot be caught)');
//                     },
//                 );
//             });
//
//             it('send request', function (done) {
//
//                 Axios.post(`http://localhost:${router.config.port}${path}`, dataValue).then((data)=>{
//
//                     response = data;
//
//                 }).catch((err)=>error = err).finally(done);
//             })
//
//             it('assert value', function () {
//
//                 expect(response).toEqual(undefined);
//                 expect(true).toBe(rethrown);
//                 expect(error.response.status).toEqual(500);
//                 expect(error.response.statusText).toEqual('Internal Server Error');
//
//             })
//         });
//     });
// });
