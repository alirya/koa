import RequestPath from '../../../request-path.js';
import Axios, {AxiosResponse} from 'axios';
import KoaBody from '@dikac/koa-body.js';
import ResponseHandler from '../../../../dist/throwable/handler/response.js';
import Server from '../../../server.js';
import Register from '../../../../dist/router/register.js';
import MiddlewareError from '../../../../dist/middleware/error-instance-parameters.js';
import {BadRequestParameters} from '@alirya/http/response/bad-request.js';
import Create from '../../../../dist/router/create.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

class TestError extends globalThis.Error {

}

describe('uncaught handler', () => {

    const server = Server();
    const router =  Register(server.koa, Create());

    beforeAll(()=>server.open());
    afterAll(()=>server.close());

    const path : string = RequestPath(__filename) + 2;

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

