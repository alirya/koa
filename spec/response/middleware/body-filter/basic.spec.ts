// import Router from "../../../router";
// import KoaBody from "koa-body";
// import BodyFilter from "../../../../dist/response/middleware/body-filter-parameters";
// import Axios from "axios";
// import RequestPath from "../../../request-path";
//
// it("force console log", () => { spyOn(console, 'log').and.callThrough();});
//
// const path : string = RequestPath(__filename);
//
// const router = Router();
//
// describe('test', () => {
//
//     beforeAll(()=>router.open());
//     afterAll(()=>router.close());
//
//     const data = {
//         name : 'john',
//         age : 24
//     }
//
//     const address = 'address';
//
//     let argument = {
//         name: '',
//         age: 0
//     }
//
//     let filtered = {
//         name: '',
//         address: ''
//     }
//
//
//     it('add filter', ()=>{
//
//         router.router.post(path,
//             KoaBody(),
//             // set response
//             (context, next) => {
//
//                 context.response.body = context.request.body;
//                 return next();
//             },
//             BodyFilter(function (body : { name: string, age: number }) : {name : string, address : string} {
//
//                 argument = body;
//
//                 return {
//                     name : body.name,
//                     address
//                 }
//
//             }))
//
//     });
//
//     it('send request', function (done) {
//
//         Axios.post(`http://localhost:${router.config.port}${path}`, data).then((data)=>{
//
//             filtered = data.data;
//
//         }).catch(fail).finally(done);
//     })
//
//     it('assert value', function () {
//
//         expect(argument).toEqual(data);
//         expect(filtered).toEqual({name:data.name, address});
//
//     })
//
// })
