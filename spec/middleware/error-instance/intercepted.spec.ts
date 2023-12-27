import KoaBody from '@dikac/koa-body.js';
import MiddlewareError from '../../../dist/middleware/error-instance-parameters.js';
import Axios, {AxiosResponse} from 'axios';
import RequestPath from '../../request-path.js';
import Server from '../../server.js';
import Register from '../../../dist/router/register.js';
import Router from '@koa/router.js';
import Context from '../../../dist/context/context.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

const path : string = RequestPath(__filename);

describe('test', () => {

    const server = Server();
    const router =  Register<Context>(server.koa, new Router());

    let rethrown : boolean = false;
    let response : AxiosResponse<{name : string, address : string}>;
    let dataValue : {name : string, address : string} = {
        name : 'jhon',
        address : 'earth'
    };

    beforeAll(()=>server.open());
    afterAll(()=>server.close());

    it('add request', ()=>{

        router.post(path,
            KoaBody(),
            MiddlewareError((error, context) => {

                context.response.status = 201;
                context.response.message = error.message;
                context.response.body = context.request.body;
            }, Error),
            function (context, next) {

                throw new Error('error occurred');
            },
            MiddlewareError((error, context) => {

                rethrown = true;
            }, Error),
        );

        router.use(MiddlewareError((error, context) => {

            rethrown = true;
        }, Error));

        server.koa.on('error', (error, context) => {

            rethrown = true;
        });



    });

    it('send request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, dataValue).then((data)=>{

            response = data;

        }).catch(fail).finally(done);
    });

    it('assert value', function () {

        expect(rethrown).toBe(false);
        expect(201).toEqual(response.status);
        expect(dataValue).toEqual(response.data);
        expect('error occurred').toEqual(response.statusText);

    });

});
