import RequestPath from "../../../request-path";
import Axios, {AxiosResponse} from "axios";
import KoaBody from "@dikac/koa-body";
import Error from "../../../../dist/throwable/handler/instance-parameters";
import Server from "../../../server";
import Register from "../../../../dist/router/register";
import Router from "@koa/router";
import MiddlewareError from "../../../../dist/middleware/error-instance-parameters";
import Context from "../../../../dist/context/context";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

class TestError extends globalThis.Error {

}

describe('uncaught handler', () => {

    const server = Server();
    const router =  Register<Context>(server.koa, new Router());

    beforeAll(()=>server.open());
    afterAll(()=>server.close());

    const path : string = RequestPath(__filename) + 2;

    let error : boolean = false;
    let testError : boolean = false;
    let response : AxiosResponse<{name : string, address : string}>;
    let dataValue : {name : string, address : string} = {
        name : 'jhon',
        address : 'earth'
    };

    it('add request', ()=>{

        router.post(path,
            KoaBody(),
            function (context, next) {

                throw new globalThis.Error('error occurred "uncaught by the router" (cannot be caught)');
            },
        );

        server.koa.on('error',/*MiddlewareError(*/Error(function () {

            testError = true;

        }, globalThis.Error))/*)*/;

        router.use(MiddlewareError(/*Error(*/function () {

            error = true;

        }, globalThis.Error))/*)*/;
    });

    it('send request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, dataValue).then((data)=>{

            fail('response 500 should fail');

        }).catch((err)=>response = err.response).finally(done);
    })

    it('assert value', function () {

        expect(error).toBe(false);
        expect(testError).toBe(true);
        expect(response.status).toEqual(500);
        expect(response.statusText).toEqual('Internal Server Error');

    })
});

