import RequestPath from '../../../request-path.js';
import Axios, {AxiosResponse} from 'axios';
import {DefaultState, DefaultContext} from 'koa';
import KoaBody from '@dikac/koa-body.js';
import Debug from '../../../../dist/throwable/handler/debug.js';
import Server from '../../../server.js';
import Router from '@koa/router';
import Register from '../../../../dist/router/register.js';
import Context from '../../../../dist/context/context.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

const path : string = RequestPath(__filename);


describe('test', () => {

    const rethrown  = false;

    let context: Context<DefaultState, DefaultContext>;
    let response : AxiosResponse<any>;
    const server = Server();


    beforeAll(()=>server.open());
    afterAll(()=>server.close());


    const router =  Register<Context>(server.koa /*as Koa<DefaultState, Context>*/, new Router());


    it('add request', ()=>{

        server.koa.on('error', Debug);
        server.koa.on('error', function (e, c) {
            context = c;
        });
        router.post(path,
            KoaBody(),
            function (context, next) {

                throw new Error('error occurred "uncaught by the router" (cannot be caught)');
            },
        );

    });

    it('send request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, {}).then((data)=>{

            fail('response 500 should fail');

        }).catch((e)=>response = e.response).finally(done);
    });

    it('assert value', function () {

        expect(rethrown).toBe(false);
        expect(response.status).toEqual(500);
        expect(response.data).toMatch('Internal Server Error');
        expect(response.statusText).toEqual('Internal Server Error');
    });

});
