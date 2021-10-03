import Router from "../../../router";
import KoaBody from "koa-body";
import BodyIf from "../../../../dist/request/middleware/if-body";
import BodyFilter from "../../../../dist/request/middleware/body-filter";
import String from "@dikac/t-string/assert/string";
import Number from "@dikac/t-number/assert/number";
import Axios from "axios";
import RequestPath from "../../../request-path";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

const path : string = RequestPath(__filename);

describe('test', () => {

    const data = {
        name : 'john',
        age : 24
    }

    const address = 'address';

    let argument = {
        name: '',
        age: 0
    }

    let filtered = {
        name: '',
        address: ''
    }


    it('add filter', ()=>{

        Router.router.post(path,
            KoaBody(),

            BodyFilter(function (body : { name: string, age: number }) : {name : string, address : string} {

                argument = body;

                return {
                    name : body.name,
                    address
                }

            }),

            // set response
            (context, next) => {

                context.response.body = context.request.body;
            })

    });

    it('send request', function (done) {

        Axios.post(`http://localhost:${Router.config.port}${path}`, data).then((data)=>{

            filtered = data.data;

        }).catch(fail).finally(done);
    })

    it('assert value', function () {

        expect(argument).toEqual(data);
        expect(filtered).toEqual({name:data.name, address});

    })

})
