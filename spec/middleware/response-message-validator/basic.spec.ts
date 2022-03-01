import KoaBody from "@dikac/koa-body";
import BodyFilter from "../../../dist/response/middleware/body-filter-parameters";
import Axios from "axios";
import RequestPath from "../../request-path";
import Server from "../../server";
import Register from "../../../dist/router/register";
import Router from "@koa/router";
import Context from "../../../dist/context/context";
import PropertyValidatorParameters from "../../../dist/response/middleware/property-validator-parameters";
import String from "@alirya/string/validator/string-parameters";
import Middleware from "../../../dist/middleware/middleware";
import ResponseMessageValidatorParameters from "../../../dist/middleware/response-message-validator-parameters";
import UnprocessableEntityParameter from "@alirya/http/response/unprocessable-entity-parameter";
import MapAll from "../../../../object/dist/validator/map-all-parameters";
import And from "../../../../object/dist/validatable/and";
import InvalidMessageMap from "../../../../object/dist/message/message/record/invalid";

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
                MapAll({data:String()}, And, InvalidMessageMap),
                ['request','body'],
                UnprocessableEntityParameter,
                (context : Context<{body: { data: any }}, {custom:any}>, next) => {

                    context.response.body = {
                        valid : true,
                        data : context.request.body.data
                    };

                    valid = true;

            },(context : Context<{body: { data: any }}, {custom:any}>, next) => {

                    valid = false;
             }
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
