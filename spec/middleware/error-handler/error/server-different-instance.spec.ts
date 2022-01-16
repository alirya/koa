import RequestPath from "../../../requespath";
import Axios, {AxiosResponse} from "axios";
import KoaBody from "koa-body";
// import ErrorHandler from "../../../../dist/route/error";
import Error from "../../../../dist/middleware/error-handler/error-parameters";
import Server from "../../../server";
import Register from "../../../../dist/route/register";
import Router, {RouterParamContext} from "@koa/router";
import {DefaultContext, DefaultState} from "koa";
import MiddlewareError from "../../../../dist/middleware/error-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

class TestError extends globalThis.Error {

}

describe('uncaught handler', () => {

    const server = Server();
    const router =  Register(server.koa, new Router());

    beforeAll(()=>server.open());
    afterAll(()=>server.close());

    const path : string = RequestPath(__filename) + 2;

    // let executionRoute : boolean = false;
    // let executionServer : boolean = false;
    let errorBase : globalThis.Error|undefined;
    let errorExtended : TestError|undefined;
    let response : AxiosResponse<string>;

    it('add request', ()=>{

        server.koa.on('error', Error(function (error, context) {

            errorBase = error;

        }, globalThis.Error));

        server.koa.on('error', Error(function (error, context) {

            errorExtended = error;

        }, TestError));

        router.post(path,
            KoaBody(),
            function (context, next) {

                throw new globalThis.Error('error occurred "uncaught by the router" (cannot be caught)');
            },
        );
    });

    it('send request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, {}).then((data)=>{

            fail('response 500 should fail');

        }).catch(
            e=>response = e.response
        ).finally(done);
    })

    it('assert value', function () {

        expect(errorExtended).toBe(undefined);
        expect(errorBase).toBeInstanceOf(globalThis.Error);
        expect(response.status).toEqual(500);
        expect(response.data as string).toEqual('Internal Server Error');
        expect(response.statusText).toEqual('Internal Server Error');

    })
});

