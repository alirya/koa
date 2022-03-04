import Server from "../../server";
import Register from "../../../dist/router/register";
import Context from "../../../dist/context/context";
import Router from "@koa/router";
import RandomIntegerParameters from "@alirya/number/random-integer-parameters";
import KoaBody from "@dikac/koa-body";
import Body from "../../../dist/response/middleware/body-parameters";
import Axios from "axios";
import RequestPath from "../../request-path";
import FromResponse from "../../../dist/response/from-response-parameters";
import UnprocessableEntityParameter from "@alirya/http/response/unprocessable-entity-parameter";
import CreatedParameter from "@alirya/http/response/created-parameter";

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('test', () => {

    const path : string = RequestPath(__filename);

    const server = Server();
    const router =  Register<Context>(server.koa, new Router());

    beforeAll(()=>server.open());
    afterAll(()=>server.close());

    let response : any = {};

    it('add filter', ()=>{

        router.post(path,
            KoaBody(),
            function (context, next) {

                FromResponse(context, CreatedParameter({
                    message: 'message',
                    body: 'string body',
                    headers: {'Content-Type': 'text/plain; charset=utf-8'}
                }));
            },
        );

    });

    it('send request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, {}).then((response)=>{

            expect(response.statusText).toEqual('message');
            expect(response.status).toEqual(201);
            expect(response.data).toEqual('string body');

        }).catch(fail).finally(done);
    });


});
