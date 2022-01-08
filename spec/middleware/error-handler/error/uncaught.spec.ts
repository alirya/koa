// import RequestPath from "../../../request-path";
// import Axios, {AxiosResponse} from "axios";
// import Router from "../../../router";
// import KoaBody from "koa-body";
// import ErrorHandler from "../../../../dist/route/error";
// import Error from "../../../../dist/middleware/error-handler/error-parameters";
//
// it("force console log", () => { spyOn(console, 'log').and.callThrough();});
//
// class TestError extends globalThis.Error {
//
// }
//
// describe('uncaught handler', () => {
//
//     const router = Router();
//     beforeAll(()=>router.open());
//     afterAll(()=>router.close());
//
//     const path : string = RequestPath(__filename) + 2;
//
//     let error : boolean = false;
//     let testError : boolean = false;
//     let response : AxiosResponse<{name : string, address : string}>;
//     let dataValue : {name : string, address : string} = {
//         name : 'jhon',
//         address : 'earth'
//     };
//
//     it('add request', ()=>{
//
//         const chain = ErrorHandler(router.koa, globalThis.Error);
//
//         chain(Error(function () {
//
//             error = true;
//
//         }, globalThis.Error));
//
//         chain(Error(function () {
//
//             testError = true;
//
//         }, TestError));
//
//         router.router.post(path,
//             KoaBody(),
//             function (context, next) {
//
//                 throw new globalThis.Error('error occurred "uncaught by the router" (cannot be caught)');
//             },
//         );
//     });
//
//     it('send request', function (done) {
//
//         Axios.post(`http://localhost:${router.config.port}${path}`, dataValue).then((data)=>{
//
//             fail('response 500 should fail');
//
//         }).catch((err)=>response = err.response).finally(done);
//     })
//
//     it('assert value', function () {
//
//         // expect(response).toEqual(undefined);
//         expect(error).toBe(true);
//         expect(testError).toBe(false);
//         expect(response.status).toEqual(500);
//         expect(response.statusText).toEqual('Internal Server Error');
//
//     })
// });
//
