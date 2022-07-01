import KoaBody from "@dikac/koa-body";
import Axios from "axios";
import RequestPath from "../../request-path";
import Server from "../../server";
import Register from "../../../dist/router/register";
import Router from "@koa/router";
import Context from "../../../dist/context/context";
import {StringParameters} from "@alirya/string/validator/string";
import Middleware from "../../../dist/middleware/middleware";
import ResponseMessageValidatorParameters from "../../../dist/middleware/response-message-validator-parameters";
import {UnprocessableEntityParameter} from "@alirya/http/response/unprocessable-entity";
import {MapAllParameters} from "@alirya/object/validator/map-all";
import And from "@alirya/object/validatable/and";
import InvalidMessageMap from "@alirya/object/message/message/record/invalid";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

const path : string = RequestPath(__filename);

describe('test', () => {

    const server = Server();
    const router =  Register<Context>(server.koa, new Router());

    beforeAll(()=>server.open());
    afterAll(()=>server.close());

    let valid : boolean|null = null;


    it('add filter', ()=>{

        router.post(path,
            KoaBody(),
            <Middleware>ResponseMessageValidatorParameters(
                MapAllParameters({data:StringParameters()}, And, InvalidMessageMap),

                UnprocessableEntityParameter,
                (context : Context<{body: { data: any }}, {custom:any}>, next) => {

                    context.response.body = {
                        valid : true,
                        data : context.request.body.data
                    };

                    valid = true;

            },(context : Context<{body: { data: any }}, {custom:any}>, next) => {

                    valid = false;
             }, 'request','body'
             ),
        )

    });

    it('send valid request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, {data: 'string'}).then((data)=>{

            expect(data.data.valid).toBe(true);
            expect(data.data.data).toBe('string');
            expect(valid).toBe(true);

        }).catch(fail).finally(done);
    });

    it('send invalid request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, {data: 1}).then((data)=>{

            fail('request should failed');

        }).catch(error=>{

            expect(error.response.status).toBe(422);
            expect(error.response.data).toEqual({ data: 'type must string, actual number.' });
            expect(valid).toBe(false);

        }).finally(done);
    });

})
