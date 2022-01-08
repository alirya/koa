// import RequestPath from "../../../request-path";
// import Axios, {AxiosResponse} from "axios";
// import Router from "../../../router";
// import KoaBody from "koa-body";
// import MiddlewareError from "../../../../dist/middleware/error-parameters";
// import ErrorHandler from "../../../../dist/route/error";
// import StatusCode from "../../../../dist/middleware/error-handler/status-code-parameters";
// import Code from "@dikac/t-code/code";
//
// it("force console log", () => { spyOn(console, 'log').and.callThrough();});
//
// describe('test', () => {
//
//     const router = Router();
//
//     beforeAll(()=>router.open());
//     afterAll(()=>router.close());
//
//     describe('code', () => {
//
//         const path : string = RequestPath(__filename);
//
//         class ErrorCode extends globalThis.Error implements Code {
//
//             constructor(
//                 message: string,
//                 public code : number
//             ) {
//
//                 super(message);
//             }
//         }
//         let rethrown : boolean = false;
//         let response : AxiosResponse<{name : string, address : string}>;
//         let dataValue : {name : string, address : string} = {
//             name : 'jhon',
//             address : 'earth'
//         };
//
//         it('add request', ()=>{
//
//             router.router.post(path,
//                 KoaBody(),
//                 MiddlewareError(StatusCode, Error),
//                 function (context, next) {
//
//                     throw new ErrorCode('error code occurred', 422);
//                 },
//             );
//
//             ErrorHandler(router.koa, Error)((error, context) => {
//
//                 rethrown = true;
//             });
//
//         });
//
//         it('send request', function (done) {
//
//             Axios.post(`http://localhost:${router.config.port}${path}`, dataValue).then((data)=>{
//
//                 fail('response 500 should fail');
//
//             }).catch((e)=>{
//                 response = e.response;
//             }).finally(done);
//         })
//
//         it('assert value', function () {
//
//             expect(rethrown).toBe(false);
//             expect(response.status).toEqual(422);
//             expect(response.data).toMatch(/^ErrorCode[\n\r]error code occurred/);
//             expect(response.statusText).toEqual('Unprocessable Entity');
//         })
//
//     });
//
//     describe('code status', () => {
//
//         class ErrorStatus extends globalThis.Error {
//
//             constructor(
//                 message: string,
//                 public status : number
//             ) {
//
//                 super(message);
//             }
//         }
//
//         const path : string = RequestPath(__filename) + 2;
//
//         let rethrown : boolean = false;
//         let response : AxiosResponse<{name : string, address : string}>;
//         let dataValue : {name : string, address : string} = {
//             name : 'jhon',
//             address : 'earth'
//         };
//
//         it('add request', ()=>{
//
//             router.router.post(path,
//                 KoaBody(),
//                 MiddlewareError(StatusCode, Error),
//                 function (context, next) {
//
//                     throw new ErrorStatus('error status occurred', 405);
//                 },
//             );
//
//             ErrorHandler(router.koa, Error)((error, context) => {
//
//                 rethrown = true;
//             });
//
//         });
//
//         it('send request', function (done) {
//
//             Axios.post(`http://localhost:${router.config.port}${path}`, dataValue).then((data)=>{
//
//                 fail('response 500 should fail');
//
//             }).catch((e)=>{
//                 response = e.response;
//             }).finally(done);
//         })
//
//         it('assert value', function () {
//
//             expect(rethrown).toBe(false);
//             expect(response.status).toEqual(405);
//             expect(response.data).toMatch(/^ErrorStatus[\n\r]error status occurred/);
//             expect(response.statusText).toEqual('Method Not Allowed');
//         })
//     });
//
//
//     describe('std error', () => {
//
//         const path : string = RequestPath(__filename) + 3;
//
//         let rethrown : boolean = false;
//         let response : AxiosResponse<{name : string, address : string}>;
//         let dataValue : {name : string, address : string} = {
//             name : 'jhon',
//             address : 'earth'
//         };
//
//         it('add request', ()=>{
//
//             router.router.post(path,
//                 KoaBody(),
//                 MiddlewareError(StatusCode, Error),
//                 function (context, next) {
//
//                     throw new Error('error occurred');
//                 },
//             );
//
//             ErrorHandler(router.koa, Error)((error, context) => {
//
//                 rethrown = true;
//             });
//
//         });
//
//         it('send request', function (done) {
//
//             Axios.post(`http://localhost:${router.config.port}${path}`, dataValue).then((data)=>{
//
//                 fail('response 500 should fail');
//
//             }).catch((e)=>{
//                 response = e.response;
//             }).finally(done);
//         })
//
//         it('assert value', function () {
//
//             expect(rethrown).toBe(false);
//             expect(response.status).toEqual(500);
//             expect(response.data).toMatch(/^Error[\n\r]error occurred/);
//             expect(response.statusText).toEqual('Internal Server Error');
//         })
//     });
// });
