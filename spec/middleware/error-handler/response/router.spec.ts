import RequestPath from '../../../request-path';
import Axios, {AxiosResponse} from 'axios';
import KoaBody from 'koa-body';
// import ErrorHandler from "../../../../dist/route/error";
import Error from '../../../../dist/middleware/error-handler/error-parameters';
import ResponseHandler from '../../../../dist/middleware/error-handler/response';
import Server from '../../../server';
import Register from '../../../../dist/route/register';
import Router, {RouterParamContext} from '@koa/router';
import {DefaultContext, DefaultState} from 'koa';
import MiddlewareError from '../../../../dist/middleware/error-parameters';
import BadRequestParameters from '@alirya/http/response/bad-request-parameters';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

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
    let response : AxiosResponse<string>;

    it('add request', ()=>{

        router.post(path,
            MiddlewareError(ResponseHandler(BadRequestParameters()), globalThis.Error),

            KoaBody(),
            function (context, next) {

                throw new globalThis.Error('error occurred, should be caught');
            }
        );
    });

    it('send request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, {}).then((data)=>{

            fail('response 400 should fail');

        }).catch(
            e=>response = e.response
        ).finally(done);
    });

    it('assert value', function () {

        expect(response.status).toEqual(400);
        expect(response.data as string).toEqual('Bad Request');
        expect(response.statusText).toEqual('Bad Request');

    });
});

