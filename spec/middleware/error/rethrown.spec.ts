import KoaBody from '@dikac/koa-body.js';
import MiddlewareError from '../../../dist/middleware/error-instance-parameters.js';
import Axios, {AxiosResponse} from 'axios';
import RequestPath from '../../request-path.js';
import Server from '../../server.js';
import Register from '../../../dist/router/register.js';
import Router from '@koa/router.js';
import ApplicationContext from '../../../dist/context/context.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('required for open and closed', ()=>{

    const server = Server();
    const router =  Register<ApplicationContext>(server.koa, new Router());

    beforeAll(()=>server.open());
    afterAll(()=>server.close());

    describe('default use', () => {

        const path : string = RequestPath(__filename);

        let error : any;
        let rethrown : boolean = false;
        let response : AxiosResponse<{name : string, address : string}>|undefined;
        let dataValue : {name : string, address : string} = {
            name : 'jhon',
            address : 'earth'
        };

        it('add request', ()=>{

            router.post(path,
                KoaBody(),
                MiddlewareError((error, context) => {

                    rethrown = true;
                }, Error),
                MiddlewareError( (error, context) => {

                    context.response.status = 201;
                    context.response.message = error.message;
                    context.response.body = context.request.body;
                }, Error, true),
                function (context, next) {

                    throw new Error('error occurred');
                },
            );
        });

        it('send request', function (done) {

            Axios.post(`http://localhost:${server.config.port}${path}`, dataValue).then((data)=>{

                response = data;

            }).catch((err)=>error = err).finally(done);
        });

        it('assert value', function () {

            expect((response as AxiosResponse).status).toEqual(201);
            expect(true).toBe(rethrown);
            expect(error).toEqual(undefined);
            expect((response as AxiosResponse).statusText).toEqual('error occurred');
        });

    });


    describe('chain handler', () => {

        describe('uncaught handler', () => {

            const path : string = RequestPath(__filename) + 2;

            let error : any;
            let rethrown : boolean = false;
            let response : AxiosResponse<{name : string, address : string}>|undefined;
            let dataValue : {name : string, address : string} = {
                name : 'jhon',
                address : 'earth'
            };

            it('add request', ()=>{

                server.koa.on('error',MiddlewareError((error, context) => {

                    rethrown = true;
                }, Error));

                router.post(path,
                    KoaBody(),
                    MiddlewareError((error, context) => {

                        context.response.status = 201;
                        context.response.message = error.message;
                        context.response.body = context.request.body;
                    }, Error, true),
                    function (context, next) {

                        throw new Error('error occurred "uncaught by the router" (cannot be caught)');
                    },
                );
            });

            it('send request', function (done) {

                Axios.post(`http://localhost:${server.config.port}${path}`, dataValue).then((data)=>{

                    response = data;

                }).catch((err)=>error = err).finally(done);
            });

            it('assert value', function () {

                expect(response).toEqual(undefined);
                expect(true).toBe(rethrown);
                expect(error.response.status).toEqual(500);
                expect(error.response.statusText).toEqual('Internal Server Error');

            });
        });
    });
});
