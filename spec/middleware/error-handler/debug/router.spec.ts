import RequestPath from '../../../request-path';
import Axios, {AxiosResponse} from 'axios';
import KoaBody from 'koa-body';
import MiddlewareError from '../../../../dist/middleware/error-parameters';
// import ErrorHandler from "../../../../dist/route/error";
import Debug from '../../../../dist/middleware/error-handler/debug';
import Server from '../../../server';
import Router from '@koa/router';
import Register from '../../../../dist/route/register';

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


    let router =  Register(server.koa, new Router());


    it('add request', ()=>{

        router.post(path,
            KoaBody(),
            MiddlewareError(Debug, Error),
            function (context, next) {

                throw new Error('error occurred');
            },
            // MiddlewareError((error, context) => {
            //
            //     rethrown = true;
            // }, Error),
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
