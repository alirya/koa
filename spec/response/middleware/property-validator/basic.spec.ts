import KoaBody from "@dikac/koa-body";
import Axios from "axios";
import RequestPath from "../../../request-path";
import Server from "../../../server";
import Register from "../../../../dist/router/register";
import Router from "@koa/router";
import Context from "../../../../dist/context/context";
import IsString from "@alirya/string/boolean/string";
import Middleware from "../../../../dist/middleware/middleware";
import PropertyValidationParameters from "../../../../dist/middleware/property-validation-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

const path : string = RequestPath(__filename);

describe('test', () => {

    const server = Server();
    const router =  Register<Context>(server.koa, new Router());

    beforeAll(()=>server.open());
    afterAll(()=>server.close());


    it('add filter', ()=>{

        router.post(path,
            KoaBody(),
            <Middleware>((context: Context<{body: { data: any }}, {custom:any}>, next) => {
                context.response.custom = context.request.body.data;
                return next();
            }),
            // set response
            <Middleware>PropertyValidationParameters(
                IsString,
                ['response', 'custom'],
                (context : Context<{body: { data: any }}, {custom:any}>, next) => {

                    context.response.body = {
                        valid : true,
                        data : context.response.custom
                    };

            },(context : Context<{body: { data: any }}, {custom:any}>, next) => {

                    context.response.body = {
                        valid : false,
                        data : context.response.custom
                    };
            }),
        )

    });

    it('send valid request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, {data: 'string'}).then((data)=>{

            expect(data.data.valid).toBe(true);
            expect(data.data.data).toBe('string');

        }).catch(fail).finally(done);
    });

    it('send invalid request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, {data: 1}).then((data)=>{

            expect(data.data.valid).toBe(false);
            expect(data.data.data).toBe(1);

        }).catch(fail).finally(done);
    });

})
