import {StringParameters} from '@alirya/string/validator/string.js';
import {MapAllParameters} from '@alirya/object/validator/map-all.js';
import AndRecord from '@alirya/object/validatable/and.js';
import InvalidMessageRecord from '@alirya/object/message/message/record/invalid.js';
import KoaBody from '@dikac/koa.js-body.js';
import Axios from 'axios';
import RequestPath from '../../../request-path.js';
import Server from '../../../server.js';
import Register from '../../../../dist/router/register.js';
import Router from '@koa/router';
import Middleware from '../../../../dist/middleware/middleware.js';
import * as Koa from 'koa';
import Context from '../../../../dist/context/context.js';
import Body from '@alirya/http/body/body.js';
import ResponseMessageValidatorParameters from '../../../../dist/middleware/response-message-validator-parameters.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

const path : string = RequestPath(__filename);

// const router = Router();

describe('test', () => {

    const server = Server();
    const router =  Register<Context<Koa.DefaultState, Koa.DefaultContext, Body<unknown>, Body<string|undefined>>>(server.koa /*as Koa<DefaultState, Context>*/, new Router());

    beforeAll(()=>server.open());
    afterAll(()=>server.close());

    const data = {
        name : 'jhon',
        address : 'earth'
    };

    const invalidData = {
        name : 1,
        address : 1
    };

    let response = {
        name : '',
        address : ''
    };

    const record  = {
        name : StringParameters(),
        address : StringParameters(),
    };

    const validator = MapAllParameters(record, AndRecord, InvalidMessageRecord);

    it('add filter', ()=>{

        router.post(path,
            KoaBody() as Middleware,

            ResponseMessageValidatorParameters<['request', 'body']>(validator, undefined, undefined, undefined, 'request', 'body'),

            // set response
            (context, next) => {

                context.response.body = context.request.body;
            }
        );

    });


    it('send request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, data).then((data)=>{

            response = data.data;

        }).catch(fail).finally(done);
    });

    it('assert value', function () {

        expect(response).toEqual(data);

    });


    it('send invalid request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, invalidData).then((data)=>{

            response = data.data;

        }).then(()=>{

            fail('request should failed');

        }).catch(error=>{

            expect(error.response.status).toBe(422);
            expect(error.response.data).toEqual({
                    name: 'type must string, actual number.',
                    address: 'type must string, actual number.'
                }
            );

        }).finally(done);
    });


});
