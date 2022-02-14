import RequestPath from '../../../request-path';
import Axios, {AxiosResponse} from 'axios';
import KoaBody from '@dikac/koa-body';
import Error from '../../../../dist/throwable/handler/instance-parameters';
import Server from '../../../server';
import Register from '../../../../dist/router/register';
import Router from '@koa/router';
import MiddlewareError from '../../../../dist/middleware/error-parameters';
import Context from "../../../../dist/context/context";

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

class TestError extends globalThis.Error {

}

describe('uncaught handler', () => {

    const server = Server();
    const router =  Register<Context>(server.koa, new Router());

    beforeAll(()=>server.open());
    afterAll(()=>server.close());

    const path : string = RequestPath(__filename) + 2;

    let errorInstance : globalThis.Error;
    let response : AxiosResponse<string>;

    it('add request', ()=>{

        router.post(path,
            MiddlewareError(Error(function (error, context) {

                errorInstance = error;
                context.response.body = 'Caught';

            }, globalThis.Error)),

            KoaBody(),
            function (context, next) {

                throw new globalThis.Error('error occurred, should be caught');
            }
        );
    });

    it('send request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, {}).then((data)=>{

            response = data;

        }).catch(fail).finally(done);
    });

    it('assert value', function () {

        expect(errorInstance).toBeInstanceOf(globalThis.Error);
        expect(response.status).toEqual(200);
        expect(response.data as string).toEqual('Caught');
        expect(response.statusText).toEqual('OK');

    });
});

