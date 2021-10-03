// import Router from "../../router";
// import Axios from "axios";
// import KoaBody from "koa-body";
// import BodyIf from "../../../dist/request/middleware/if-body";
//
// it("force console log", () => { spyOn(console, 'log').and.callThrough();});
//
// let called : number = 0;
// let match : boolean = false;
//
// it('register middleware', ()=>{
//
//     Router.router.post('/path', KoaBody(), BodyIf(function (body : any) {
//
//         called++;
//         return body.data === 1;
//
//     }, function () {
//
//         match = true;
//     }))
//
// });
//
// describe('invalid request', ()=>{
//
//     it('send request', function (done) {
//
//         Axios.post(`http://localhost:${Router.config.port}/path`, {data:0}).then(()=>fail('response should 4xx')).catch(()=>done());
//     })
//
//     it('check state', function () {
//
//         expect(called).toBe(1);
//         expect(match).toBe(false);
//     })
//
// });
//
// describe('valid request', ()=>{
//
//     it('send request', function (done) {
//
//         Axios.post(`http://localhost:${Router.config.port}/path`, {data:1}).then(()=>fail('response should 4xx')).catch(()=>done());
//     })
//
//     it('check state', function () {
//
//         expect(called).toBe(2);
//         expect(match).toBe(true);
//     })
//
// })
