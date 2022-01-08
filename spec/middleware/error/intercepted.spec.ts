// import Router from "../../router";
// import KoaBody from "koa-body";
// import MiddlewareError from "../../../dist/middleware/error-parameters";
// import Axios, {AxiosResponse} from "axios";
// import ErrorHandler from "../../../dist/route/error";
// import RequestPath from "../../request-path";
//
// it("force console log", () => { spyOn(console, 'log').and.callThrough();});
//
// const path : string = RequestPath(__filename);
//
// describe('test', () => {
//
//     let rethrown : boolean = false;
//     let response : AxiosResponse<{name : string, address : string}>;
//     let dataValue : {name : string, address : string} = {
//         name : 'jhon',
//         address : 'earth'
//     };
//
//     const router = Router();
//     beforeAll(()=>router.open());
//     afterAll(()=>router.close());
//
//     it('add request', ()=>{
//
//         router.router.post(path,
//             KoaBody(),
//             MiddlewareError((error, context) => {
//
//                 context.response.status = 201;
//                 context.response.message = error.message;
//                 context.response.body = context.request.body;
//             }, Error),
//             function (context, next) {
//
//                 throw new Error('error occurred');
//             },
//         );
//
//         ErrorHandler(router.koa, Error)((error, context) => {
//
//             rethrown = true;
//         });
//
//     });
//
//     it('send request', function (done) {
//
//         Axios.post(`http://localhost:${router.config.port}${path}`, dataValue).then((data)=>{
//
//             response = data;
//
//         }).catch(fail).finally(done);
//     })
//
//     it('assert value', function () {
//
//         expect(rethrown).toBe(false);
//         expect(201).toEqual(response.status);
//         expect(dataValue).toEqual(response.data);
//         expect('error occurred').toEqual(response.statusText);
//
//     })
//
// });
