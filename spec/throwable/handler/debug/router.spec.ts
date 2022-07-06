import RequestPath from '../../../request-path.js';
import Axios, {AxiosResponse} from 'axios';
import KoaBody from '@dikac/koa-body';
import MiddlewareError from '../../../../dist/middleware/error-instance-parameters.js';
import Debug from '../../../../dist/throwable/handler/debug.js';
import Server from '../../../server.js';
import Router from '@koa/router';
import Register from '../../../../dist/router/register.js';
import Context from '../../../../dist/context/context.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

const path : string = RequestPath(__filename);


describe('test', () => {

    let rethrown : boolean = false;
    let response : AxiosResponse<{name : string, address : string}>;
    let dataValue : {name : string, address : string} = {
        name : 'jhon',
        address : 'earth'
    };

    const server = Server();


    beforeAll(()=>server.open());
    afterAll(()=>server.close());


    let router =  Register<Context>(server.koa, new Router());


    it('add request', ()=>{

        router.post(path,
            KoaBody(),
            MiddlewareError(Debug, Error),
            function (context, next) {

                throw new Error('error occurred');
            },
        );


    });

    it('send request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, dataValue).then((data)=>{

            fail('response 500 should fail');

        }).catch((e)=>response = e.response).finally(done);
    });

    it('assert value', function () {

        expect(rethrown).toBe(false);
        expect(response.status).toEqual(500);
        expect(response.data).toMatch(/^Error[\n\r]error occurred/);
        expect(response.statusText).toEqual('Internal Server Error');
    });

});
