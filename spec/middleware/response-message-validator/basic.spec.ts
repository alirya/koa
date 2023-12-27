import KoaBody from '@dikac/koa-body.js';
import Axios from 'axios';
import RequestPath from '../../request-path.js';
import Server from '../../server.js';
import Register from '../../../dist/router/register.js';
import Router from '@koa/router.js';
import Context from '../../../dist/context/context.js';
import {StringParameters} from '@axiona/string/validator/string.js';
import Middleware from '../../../dist/middleware/middleware.js';
import ResponseMessageValidatorParameters from '../../../dist/middleware/response-message-validator-parameters.js';
import {UnprocessableEntityParameter} from '@axiona/http/response/unprocessable-entity.js';
import {MapAllParameters} from '@axiona/object/validator/map-all.js';
import And from '@axiona/object/validatable/and.js';
import InvalidMessageMap from '@axiona/object/message/message/record/invalid.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

const path : string = RequestPath(__filename);

describe('test', () => {

    const server = Server();
    const router =  Register<Context>(server.koa, new Router());

    beforeAll(()=>server.open());
    afterAll(()=>server.close());

    let valid : boolean|null = null;


    it('add filter', ()=>{

        router.post(path,
            KoaBody(),
            <Middleware>ResponseMessageValidatorParameters(
                MapAllParameters({data:StringParameters()}, And, InvalidMessageMap),

                UnprocessableEntityParameter,
                (context : Context<{body: { data: any }}, {custom:any}>, next) => {

                    context.response.body = {
                        valid : true,
                        data : context.request.body.data
                    };

                    valid = true;

            },(context : Context<{body: { data: any }}, {custom:any}>, next) => {

                    valid = false;
             }, 'request','body'
             ),
        );

    });

    it('send valid request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, {data: 'string'}).then((data)=>{

            expect(data.data.valid).toBe(true);
            expect(data.data.data).toBe('string');
            expect(valid).toBe(true);

        }).catch(fail).finally(done);
    });

    it('send invalid request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, {data: 1}).then((data)=>{

            fail('request should failed');

        }).catch(error=>{

            expect(error.response.status).toBe(422);
            expect(error.response.data).toEqual({ data: 'type must string, actual number.' });
            expect(valid).toBe(false);

        }).finally(done);
    });

});
