// import DebugParameters from "../../../../dist/middleware/error-handler/debug-parameters";
// import DebugParameter from "../../../../dist/middleware/error-handler/debug-parameter";
// import Router from "../../../router";
// import ErrorParameters from "../../../../dist/middleware/error-parameters";
// import ErrorParameter from "../../../../dist/middleware/error-parameter";
// import Axios from "axios";
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
//     const router = Router();
//     beforeAll(()=>router.open());
//     afterAll(()=>router.close());
//
//     describe('parameters', () => {
//
//         const path = '/parameters';
//
//         router.router.use(ErrorParameters(DebugParameters, Error));
//
//         router.router.post(path, ()=>{
//
//             throw error;
//         });
//
//         it('send request', function (done) {
//
//             Axios.post(`http://localhost:${router.config.port}${path}`, {}).then((data)=>{
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
//         router.router.use(ErrorParameter({
//             handler:DebugParameter,
//             instance:Error
//         }));
//
//         router.router.post(path, ()=>{
//
//             throw error;
//         });
//
//         it('send request', function (done) {
//
//             Axios.post(`http://localhost:${router.config.port}${path}`, {}).then((data)=>{
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
