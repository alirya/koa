import StringStandard from "@alirya/string/validator/string-parameters";
import MapAll from "@alirya/object/validator/map-all-parameters";
import AndRecord from "@alirya/object/validatable/and";
import InvalidMessageRecord from "@alirya/object/message/message/record/invalid";
import KoaBody from "@dikac/koa-body";
import BodyValidator from "../../../../dist/request/middleware/auto-body-validator-parameters";
import Axios from "axios";
import RequestPath from "../../../request-path";
import Server from "../../../server";
import Register from "../../../../dist/router/register";
import Router from "@koa/router";
import Middleware from "../../../../dist/middleware/middleware";
import * as Koa from "koa";
import Context from "../../../../dist/context/context";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

const path : string = RequestPath(__filename);

// const router = Router();

describe('test', () => {

    const server = Server();
    const router =  Register<Context<Koa.DefaultState, Koa.DefaultContext, unknown, string|undefined>>(server.koa /*as Koa<DefaultState, Context>*/, new Router());

    beforeAll(()=>server.open());
    afterAll(()=>server.close());

    const data = {
        name : 'jhon',
        address : 'earth'
    }

    const invalidData = {
        name : 1,
        address : 1
    }

    let response = {
        name : '',
        address : ''
    }

    let record  = {
        name : StringStandard(),
        address : StringStandard(),
    }

    const validator = MapAll(record, AndRecord, InvalidMessageRecord);

    it('add filter', ()=>{

        router.post(path,
            KoaBody() as Middleware,

            BodyValidator(validator),

            // set response
            (context, next) => {

                context.response.body = context.request.body;
            }
        );

    });


    it('send request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, data).then((data)=>{

            response = data.data;

        }).catch(fail).finally(done);
    })

    it('assert value', function () {

        expect(response).toEqual(data);

    })


    it('send invalid request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, invalidData).then((data)=>{

            response = data.data;

        }).then(()=>{

            fail('request should failed')

        }).catch(error=>{

            expect(error.response.status).toBe(422);
            expect(error.response.data).toEqual({
                    name: 'type must string, actual number.',
                    address: 'type must string, actual number.'
                }
            );

        }).finally(done);
    })


});
