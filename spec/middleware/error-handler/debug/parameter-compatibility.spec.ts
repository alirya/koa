// import DebugParameters from "../../../../dist/middleware/error-handler/debug";
// import ErrorParameters from "../../../../dist/middleware/error-parameters";
// import ErrorParameter from "../../../../dist/middleware/error-parameter";
// import Axios from "axios";
// import Register from "../../../../dist/route/register";
// import Server from "../../../server";
// import Router from "@koa/router";
//
// it("force console log", () => { spyOn(console, 'log').and.callThrough();});
//
// class ErrorInstance extends Error {}
//
// describe('check compatibility', () => {
//
//     let responseParameters : string = '';
//     let responseParameter : string = '';
//
//     const error =  new ErrorInstance('error message test');
//
//     const server = Server();
//     const router = Register(server.koa, new Router());
//     beforeAll(()=>server.open());
//     afterAll(()=>server.close());
//
//     describe('parameters', () => {
//
//         const path = '/parameters';
//
//         router.use(ErrorParameters(DebugParameters, Error));
//
//         router.post(path, ()=>{
//
//             throw error;
//         });
//
//         it('send request', function (done) {
//
//             Axios.post(`http://localhost:${server.config.port}${path}`, {}).then((data)=>{
//
//                 fail('response 500 should fail');
//
//             }).catch((e)=>{
//
//                 responseParameters = e.response.data as string;
//
//             }).finally(done);
//         });
//
//     });
//
//     describe('parameter', () => {
//
//         const path = '/parameter';
//
//         router.use(ErrorParameter({handler:DebugParameters, instance:Error}));
//
//         router.post(path, ()=>{
//
//             throw error;
//         });
//
//         it('send request', function (done) {
//
//             Axios.post(`http://localhost:${server.config.port}${path}`, {}).then((data)=>{
//
//                 fail('response 500 should fail');
//
//             }).catch((e)=>{
//
//                 responseParameter = e.response.data as string;
//
//             }).finally(done);
//         });
//
//     });
//
//     describe('compare', () => {
//
//         it('send request', function () {
//
//             expect(responseParameter).toBe(responseParameters);
//         });
//
//     });
// });
