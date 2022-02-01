import RequestPath from '../../../request-path';
import Axios, {AxiosResponse} from 'axios';
import {DefaultState, DefaultContext} from 'koa';
import KoaBody from 'koa-body';
// import ErrorHandler from "../../../../dist/route/error";
import Debug from '../../../../dist/middleware/error-handler/debug';
import Server from '../../../server';
import Router from '@koa/router';
import Register from '../../../../dist/route/register';
import Context from '../../../../dist/middleware/context/context';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

const path : string = RequestPath(__filename);


describe('test', () => {

    let rethrown : boolean = false;

    let context: Context<DefaultState, DefaultContext>;
    let response : AxiosResponse<any>;
    const server = Server();


    beforeAll(()=>server.open());
    afterAll(()=>server.close());


    let router =  Register(server.koa, new Router());


    it('add request', ()=>{

        server.koa.on('error', Debug);
        server.koa.on('error', function (e, c) {
            context = c;
        });
        router.post(path,
            KoaBody(),
         //   MiddlewareError(Debug, Error),
            function (context, next) {

                throw new Error('error occurred "uncaught by the router" (cannot be caught)');
            },
            // MiddlewareError((error, context) => {
            //
            //     rethrown = true;
            // }, Error),
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
