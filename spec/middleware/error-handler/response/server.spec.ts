import RequestPath from '../../../request-path';
import Axios, {AxiosResponse} from 'axios';
import KoaBody from 'koa-body';
// import ErrorHandler from "../../../../dist/route/error";
import Error from '../../../../dist/middleware/error-handler/error-parameters';
import Server from '../../../server';
import Register from '../../../../dist/route/register';
import Router, {RouterParamContext} from '@koa/router';
import {DefaultContext, DefaultState} from 'koa';
import MiddlewareError from '../../../../dist/middleware/error-parameters';
import ResponseHandler from '../../../../dist/middleware/error-handler/response';
import BadRequestParameters from '@alirya/http/response/bad-request-parameters';
import Context from '../../../../dist/middleware/context/context';
import Pick from '@alirya/object/pick';
import {Server as HttpServer} from 'http';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

class TestError extends globalThis.Error {

}

describe('uncaught handler', () => {

    const server = Server();
    const router =  Register(server.koa, new Router());

    beforeAll(()=>server.open());
    afterAll(()=>server.close());

    const path : string = RequestPath(__filename) + 2;

    let context : Context;
    // let executionRoute : boolean = false;
    // let executionServer : boolean = false;
    let errorInstance : globalThis.Error;
    let response : AxiosResponse<string>;

    it('add request', ()=>{

        (server.server as HttpServer).on('error', function (){

            console.log(arguments);
        });

        server.koa.on('error', ResponseHandler(BadRequestParameters()))/*)*/;

        server.koa.on('error', function (error, ctx) {

            // console.log(ctx.response);
            errorInstance = error;

            // clone context
            context = Object.assign({}, ctx, {
                response : Object.assign({}, Pick(ctx.response, 'status', 'message', 'body'))
            });

        })/*)*/;

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
    });

    it('assert value', function () {

        expect(context.response.status).toBe(400);
        expect(errorInstance).toBeInstanceOf(globalThis.Error);
        expect(response.status).toEqual(500);
        expect(response.data as string).toEqual('Internal Server Error');
        expect(response.statusText).toEqual('Internal Server Error');

    });
});

